import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { StyleSheet, View, Animated, Pressable, Text, PanResponder } from 'react-native';

export default function App() {

  const touch = useRef( new Animated.ValueXY() ).current
  const panResponder = useRef( PanResponder.create( {
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => touch.setOffset( { x: touch.x._value, y: touch.y._value } ),
    onPanResponderMove: Animated.event( [ null, { dx: touch.x, dy: touch.y } ], { useNativeDriver: false } ),
    onPanResponderRelease: () => {
      touch.flattenOffset()
    }
  } ) ).current



  return (
    <View style={ styles.container }
    >
      <Animated.View style={ [ styles.square, touch.getLayout() ] }  { ...panResponder.panHandlers } >

      </Animated.View>
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
