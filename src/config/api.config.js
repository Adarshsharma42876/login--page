import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { API_URL } from './constant.config'
import { resetAndNavigate } from '../utils/NavigationUtils'

// Request interceptor to add Authorization header
async function handleRequest(req) {
  try {
    const token = await AsyncStorage.getItem('token')
    if (token) {
      req.headers.Authorization = `Bearer ${token}`
    }
  } catch (err) {
    console.error('Error retrieving token from AsyncStorage', err)
  }
  return req
}

// Response error handler
async function responseHandler(err) {
  const { response } = err
  if (response?.status === 401) {
    try {
      await AsyncStorage.removeItem('token')
    } catch (err) {
      console.error('Error removing token from AsyncStorage', err)
    }
    resetAndNavigate('Login')
    console.log('Unauthorized: Redirecting to login')
  }
  return Promise.reject(err)
}

const poApi = axios.create({
  baseURL: API_URL || 'http://localhost:8080',
})

poApi.interceptors.request.use(handleRequest, err => Promise.reject(err))
poApi.interceptors.response.use(res => res, responseHandler)

export { poApi }
