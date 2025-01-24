import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Animated,
} from 'react-native';

const DATA = Array.from({ length: 50 }, (_, i) => ({
  id: String(i + 1),
  uri: require('../../assets/image/game.png'), // Replace with actual image paths
  type: i % 3 === 0 ? 'Video' : i % 3 === 1 ? 'Mini' : 'All',
  favorite: false,
}));

const App = () => {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('All');
  const [filteredData, setFilteredData] = useState(DATA);
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const [fadeAnim] = useState(new Animated.Value(1));

  const handleSearch = () => {
    const newData = DATA.filter(
      item =>
        (activeTab === 'All' || item.type === activeTab) &&
        item.type.toLowerCase().includes(search.toLowerCase()),
    );
    animateGrid();
    setFilteredData(newData);
  };

  const handleTabChange = tab => {
    setActiveTab(tab);
    const newData = DATA.filter(item => tab === 'All' || item.type === tab);
    animateGrid();
    setFilteredData(newData);
  };

  const animateGrid = () => {
    fadeAnim.setValue(0); // Reset animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const loadMore = () => {
    const newItems = Array.from({ length: 10 }, (_, i) => ({
      id: String(filteredData.length + i + 1),
      uri: require('../../assets/image/game.png'), // Replace with actual image paths
      type:
        Math.random() < 0.33 ? 'Video' : Math.random() < 0.5 ? 'Mini' : 'All',
      favorite: false,
    }));
    setFilteredData(prevData => [...prevData, ...newItems]);
  };

  return (
    <View style={styles.container}>
      {/* Search Box */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <TouchableOpacity onPress={handleSearch}>
            <Image
              source={require('../../assets/image/Search.png')} // Replace with actual search icon
              style={styles.searchIcon}
            />
          </TouchableOpacity>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#aaa"
            value={search}
            onChangeText={text => setSearch(text)}
            onSubmitEditing={handleSearch} // Trigger search on Enter key press
          />
        </View>
      </View>

      {/* Tab Filters */}
      <View style={styles.tabContainer}>
        {['All', 'Video', 'Mini'].map(tab => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => handleTabChange(tab)}>
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText,
              ]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Image Grid */}
      <Animated.View style={{ opacity: fadeAnim }}>
        <FlatList
          data={filteredData}
          keyExtractor={item => item.id}
          numColumns={3}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setFullScreenImage(item.uri)}
              style={styles.imageContainer}>
              <Image source={item.uri} style={styles.image} />
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.grid}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
        />
      </Animated.View>

      {/* Full-Screen Modal */}
      {fullScreenImage && (
        <Modal
          visible={true}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setFullScreenImage(null)}>
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setFullScreenImage(null)}>
              <Text style={styles.closeButtonText}>✕</Text>
            </TouchableOpacity>
            <Image source={fullScreenImage} style={styles.fullScreenImage} />
          </View>
        </Modal>
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
    marginRight: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: '#aaa',
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  tab: {
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#333',
  },
  activeTab: {
    backgroundColor: '#007AFF',
  },
  tabText: {
    color: '#aaa',
    fontSize: 14,
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  grid: {
    paddingHorizontal: 8,
    paddingBottom: 10,
  },
  imageContainer: {
    flex: 1,
    aspectRatio: 1, // Ensures square-shaped images
    margin: 4,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#222',
    elevation: 2,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullScreenImage: {
    width: '90%',
    height: '70%',
    resizeMode: 'contain',
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 24,
  },
});
