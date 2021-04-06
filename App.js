import { StatusBar } from 'expo-status-bar';
import React, { useRef, useEffect } from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSpring, interpolate } from 'react-native-reanimated'


export default function App() {

  const opacity = useSharedValue( 0 )

  const animatedStyle = useAnimatedStyle( () => {
    return {
      opacity: opacity.value,
      transform: [
        { scale: interpolate( opacity.value, [ 0, 1 ], [ 0.5, 1 ] ) }
      ]
    }
  } )

  useEffect( () => {
    opacity.value = withSpring( 1 )
  }, [] )

  return (

    <View style={ styles.container }>
      <Animated.View style={ [ styles.square, animatedStyle ] }></Animated.View>
    </View>

  );
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  square: {
    height: 100,
    width: 100,
    backgroundColor: 'peru'
  }
} );
