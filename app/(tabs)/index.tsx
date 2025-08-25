import { StyleSheet, Text, View, Animated, useWindowDimensions } from 'react-native';
import React, { useEffect, useRef } from 'react';

export default function HomeScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;
  const { width } = useWindowDimensions();

  useEffect(() => {
    // Start animations when component mounts
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      })
    ]).start();
  }, [fadeAnim, slideAnim]);

  return (
    <View style={styles.container}>
      <Animated.View 
        style={[
          styles.animatedContainer,
          { 
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }]
          }
        ]}
      >
        <Text style={styles.title}>Hello World!</Text>
        <Text style={styles.subtitle}>Welcome to my React Native app</Text>
        
        <View style={styles.infoContainer}>
          <Text style={styles.info}>
            This is a simple demo app built with React Native and Expo
          </Text>
        </View>
        
        <View style={styles.circle} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  animatedContainer: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#007bff',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    color: '#6c757d',
    marginBottom: 30,
    textAlign: 'center',
  },
  infoContainer: {
    backgroundColor: 'rgba(0, 123, 255, 0.1)',
    padding: 20,
    borderRadius: 12,
    marginVertical: 20,
    width: '100%',
    maxWidth: 400,
  },
  info: {
    fontSize: 16,
    color: '#495057',
    lineHeight: 24,
    textAlign: 'center',
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(0, 123, 255, 0.2)',
    marginTop: 30,
    borderWidth: 2,
    borderColor: '#007bff',
  }
});