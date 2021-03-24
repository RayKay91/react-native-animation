import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { StyleSheet, View, Animated, Pressable, Text } from 'react-native';

export default function App() {

  const moveS = useRef( new Animated.Value( 0 ) ).current
  const moveP = useRef( new Animated.Value( -600 ) ).current


  const moveRight = () => {
    Animated.timing( moveS, {
      toValue: 600,
      duration: 165,
      useNativeDriver: true
    }

    ).start()

    Animated.timing( moveP, {
      toValue: 0,
      duration: 165,
      useNativeDriver: true
    }

    ).start()
  }

  const moveLeft = () => {
    Animated.timing( moveS, {
      toValue: 0,
      duration: 165,
      useNativeDriver: true
    } ).start()

    Animated.timing( moveP, {
      toValue: -600,
      duration: 165,
      useNativeDriver: true
    } ).start()
  }

  return (
    <View style={ styles.container }>
      <View style={ { borderWidth: 1 } }>
        <Animated.View style={ [ styles.animatedView, {
          opacity: moveS.interpolate( {
            inputRange: [ 0, 600 ],
            outputRange: [ 1, 0 ]
          } ), transform: [ { translateX: moveS } ]
        } ] }></Animated.View>
        <Animated.View style={ [ styles.animatedView, {
          position: 'absolute', backgroundColor: 'peru', transform: [ { translateX: moveP } ], opacity: moveP.interpolate( {
            inputRange: [ -600, 0 ],
            outputRange: [ 0, 1 ]
          } )
        } ] } ></Animated.View>
      </View>
      <Pressable style={ { marginTop: 30 } } onPressIn={ moveRight } onPressOut={ moveLeft } >
        <Text  >Animate Box</Text>
      </Pressable>

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
