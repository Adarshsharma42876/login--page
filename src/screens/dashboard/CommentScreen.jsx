// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   FlatList,
//   TouchableOpacity,
//   Image,
//   Alert,
// } from 'react-native';
// import { icons } from '../../components/Icons';
// import Icons from '../../components/Icons';
// import SafeWrapper from '../../components/SafeWrapper';
// import { wp } from '../../utils/responsive';
// import { useRoute } from '@react-navigation/native';

// const CommentScreen = () => {
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState('');
//   const [editingComment, setEditingComment] = useState(null);
//   const route = useRoute();
//   const { id } = route.params; // Extract the id from route params

//   // Fetch all comments for the specific id
//   // `https://a1-games-backend.onrender.com/api/v1/comments/allComment/${id}`,
//   const fetchComments = async () => {
//     try {
//       const response = await fetch(
//         `https://a1-games-backend.onrender.com/api/v1/comments/allComment`,
//       );
//       const data = await response.json();
//       setComments(data.data || []);
//     } catch (error) {
//       console.log(error);
//       Alert.alert('Error', 'Failed to fetch comments');
//     }
//   };

//   // Add a new comment
//   const addComment = async () => {
//     if (!newComment.trim()) return;
//     try {
//       const response = await fetch(
//         `https://a1-games-backend.onrender.com/api/v1/comments/addComment/${id}`,
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ text: newComment }),
//         },
//       );
//       const data = await response.json();
//       if (data.success) {
//         setNewComment('');
//         fetchComments();
//       }
//     } catch (error) {
//       Alert.alert('Error', 'Failed to add comment');
//     }
//   };

//   // Update a comment
//   const updateComment = async () => {
//     if (!editingComment?.text.trim()) return;
//     try {
//       const response = await fetch(
//         `https://a1-games-backend.onrender.com/api/v1/comments/updateComment/${editingComment.id}`,
//         {
//           method: 'PUT',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ text: editingComment.text }),
//         },
//       );
//       const data = await response.json();
//       if (data.success) {
//         setEditingComment(null);
//         fetchComments();
//       }
//     } catch (error) {
//       Alert.alert('Error', 'Failed to update comment');
//     }
//   };

//   // Delete a comment
//   const deleteComment = async commentId => {
//     try {
//       const response = await fetch(
//         `https://a1-games-backend.onrender.com/api/v1/comments/deleteComment/${commentId}`,
//         {
//           method: 'DELETE',
//         },
//       );
//       const data = await response.json();
//       if (data.success) {
//         fetchComments();
//       }
//     } catch (error) {
//       Alert.alert('Error', 'Failed to delete comment');
//     }
//   };

//   useEffect(() => {
//     fetchComments();
//   }, []);

//   const RenderItem = ({ item }) => {
//     return (
//       <View style={styles.commentContainer}>
//         <Image
//           source={{ uri: 'https://via.placeholder.com/40' }}
//           style={styles.avatar}
//         />
//         <View style={styles.commentContent}>
//           <Text style={styles.commentText}>{item.content}</Text>
//           <View style={styles.commentActions}>
//             <TouchableOpacity
//               onPress={() =>
//                 setEditingComment({ id: item._id, text: item.content })
//               }>
//               <Icons
//                 icon={icons.Feather}
//                 name="edit"
//                 size={18}
//                 color="#007AFF"
//               />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => deleteComment(item._id)}>
//               <Icons icon={icons.Feather} name="trash" size={18} color="red" />
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <SafeWrapper style={styles.container}>
//       <FlatList
//         data={comments}
//         keyExtractor={item => item._id}
//         renderItem={({ item }) => <RenderItem item={item} />}
//         ListEmptyComponent={
//           <Text style={styles.noComments}>No comments yet.</Text>
//         }
//       />
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Write a comment..."
//           placeholderTextColor="#aaa"
//           value={editingComment ? editingComment.text : newComment}
//           onChangeText={text =>
//             editingComment
//               ? setEditingComment(prev => ({ ...prev, text }))
//               : setNewComment(text)
//           }
//         />
//         <TouchableOpacity
//           style={styles.sendButton}
//           onPress={editingComment ? updateComment : addComment}>
//           <Text style={styles.sendButtonText}>
//             {editingComment ? 'Update' : 'Send'}
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </SafeWrapper>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#121212',
//   },
//   commentContainer: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     marginVertical: 10,
//     paddingHorizontal: 16,
//   },
//   avatar: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     marginRight: 10,
//   },
//   commentContent: {
//     flex: 1,
//     backgroundColor: '#1E1E1E',
//     borderRadius: 8,
//     padding: 10,
//   },
//   commentText: {
//     color: '#fff',
//     fontSize: 14,
//     marginBottom: 5,
//   },
//   commentActions: {
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//     marginTop: 5,
//   },
//   noComments: {
//     textAlign: 'center',
//     color: '#aaa',
//     marginVertical: 20,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//     borderTopWidth: 1,
//     borderTopColor: '#333',
//   },
//   input: {
//     flex: 1,
//     backgroundColor: '#1E1E1E',
//     color: '#fff',
//     borderRadius: 20,
//     paddingHorizontal: 15,
//     height: 40,
//     fontSize: 14,
//   },
//   sendButton: {
//     marginLeft: 10,
//     backgroundColor: '#007AFF',
//     borderRadius: 20,
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//   },
//   sendButtonText: {
//     color: '#fff',
//     fontSize: 14,
//   },
// });

// export default CommentScreen;
