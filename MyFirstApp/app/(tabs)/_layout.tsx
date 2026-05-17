import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

export default function HomeScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.cornerTopLeft} />
      <View style={styles.cornerBottomRight} />

      <Image
        source={require('../../assets/images/profile.jpg')}
        style={styles.photo}
        contentFit="cover"
      />

      <Text style={styles.name}>Therese Russel Arocha</Text>
      <Text style={styles.course}>A302 - CS126</Text>
      <Text style={styles.bio}>
        A Multimedia student who incorporates personal style in my projects, and is willing to explore more creative mediums
      </Text>
    </View>
  );
}

// Add borders, name, photo, and bio to the home screen.

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  cornerTopLeft: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 80,
    height: 80,
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderColor: '#4DA6E8',
  },
  cornerBottomRight: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 80,
    height: 80,
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderColor: '#4DA6E8',
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#1a73c9',
  },
  course: {
    fontSize: 18,
    color: '#4DA6E8',
    marginBottom: 12,
  },
  bio: {
    fontSize: 14,
    textAlign: 'center',
    color: '#4DA6E8',
    paddingHorizontal: 20,
  },
});