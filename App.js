import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { StyleSheet, View, Animated, Button } from 'react-native';

export default function App() {

  const opacity = useRef( new Animated.Value( 0 ) ).current

  const handleClick = () => {
    Animated.timing( opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }

    ).start()
  }

  return (
    <View style={ styles.container }>
      <Animated.View style={ [ styles.animatedView, { opacity } ] }></Animated.View>
      <Button title='Click me for animation please' onPress={ handleClick } />
    </View>
  );
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  animatedView: {
    backgroundColor: 'salmon',
    height: 100,
    width: 100
  }
} );
