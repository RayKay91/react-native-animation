import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import React from 'react'
import { View, StyleSheet } from 'react-native'

function App() {
  const x = useSharedValue( 0 );

  const gestureHandler = useAnimatedGestureHandler( {
    onStart: ( event, ctx ) => {
      ctx.startX = x.value;
    },
    onActive: ( event, ctx ) => {
      x.value = ctx.startX + event.translationX;
    },
    onEnd: () => {
      x.value = withSpring( 0 );
    },
  } );

  const animatedStyle = useAnimatedStyle( () => {
    return {
      transform: [
        {
          translateX: x.value,
        },
      ],
    };
  } );

  return (
    <View style={ { flex: 1, justifyContent: 'center', alignItems: 'center' } }>
      <PanGestureHandler onGestureEvent={ gestureHandler }>
        <Animated.View style={ [ styles.box, animatedStyle ] } />
      </PanGestureHandler>
    </View>
  );
}

export default App

const styles = StyleSheet.create( {
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'peru'
  }
} )