import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { StyleSheet, View, Animated, Button } from 'react-native';

export default function App() {

  const moveS = useRef( new Animated.Value( 0 ) ).current
  const moveP = useRef( new Animated.Value( -500 ) ).current


  const moveRight = () => {
    Animated.timing( moveS, {
      toValue: 500,
      duration: 350,
      useNativeDriver: true
    }

    ).start()

    Animated.timing( moveP, {
      toValue: 0,
      duration: 350,
      useNativeDriver: true
    }

    ).start()
  }

  const moveLeft = () => {
    Animated.timing( moveS, {
      toValue: 0,
      duration: 350,
      useNativeDriver: true
    } ).start()

    Animated.timing( moveP, {
      toValue: -500,
      duration: 350,
      useNativeDriver: true
    } ).start()
  }

  return (
    <View style={ styles.container }>
      <View style={ { borderWidth: 1 } }>
        <Animated.View style={ [ styles.animatedView, { transform: [ { translateX: moveS } ] } ] }></Animated.View>
        <Animated.View style={ [ styles.animatedView, { position: 'absolute', backgroundColor: 'peru', transform: [ { translateX: moveP } ] } ] }></Animated.View>
      </View>
      <Button title='Click me to move the view right' onPress={ moveRight } />
      <Button title='Click me to move the view left' onPress={ moveLeft } />
    </View >
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
    width: 100,
    position: 'relative'
  }
} );
