import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Animated, Easing } from 'react-native';

const defaultColors = ['#F7981C', '#F7981C', '#F7981C'];

interface Props {
  dots?: number;
  colors?: string[];
  size?: number;
  borderRadius?: string;
}

const styles = StyleSheet.create({
  loading: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default function dots_load({
  dots = 3,
  colors = defaultColors,
  size = 10,
  borderRadius,
}: Props) {
  const [animations, setAnimations] = useState<Animated.Value[]>([]);
  const [reverse, setReverse] = useState(false);

  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const dotAnimations = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < dots; i++) {
      dotAnimations.push(new Animated.Value(0));
    }
    setAnimations(dotAnimations);
  }, []);

  function floatAnimation(
    node: Animated.Value | Animated.ValueXY,
    reverseY: any,
    delay: number
  ) {
    const floatSequence = Animated.sequence([
      Animated.timing(node, {
        toValue: reverseY ? 20 : -20,
        easing: Easing.bezier(0.41, -0.15, 0.56, 1.21),
        delay,
        useNativeDriver: true,
      }),
      Animated.timing(node, {
        toValue: reverseY ? -20 : 20,
        easing: Easing.bezier(0.41, -0.15, 0.56, 1.21),
        delay,
        useNativeDriver: true,
      }),
      Animated.timing(node, {
        toValue: 0,
        delay,
        useNativeDriver: true,
      }),
    ]);
    return floatSequence;
  }

  function loadingAnimation(nodes: any[], reverseY: boolean) {
    Animated.parallel(
      nodes.map((node: any, index: number) =>
        floatAnimation(node, reverseY, index * 100)
      )
    ).start(() => {
      setReverse(!reverse);
    });
  }

  function appearAnimation() {
    Animated.timing(opacity, {
      toValue: 1,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }

  useEffect(() => {
    if (animations.length === 0) return;
    loadingAnimation(animations, reverse);
    appearAnimation();
  }, [animations]);

  useEffect(() => {
    if (animations.length === 0) return;
    loadingAnimation(animations, reverse);
  }, [reverse, animations]);

  return (
    <Animated.View style={[styles.loading, { opacity }]}>
      {animations.map((animation, index) => (
        <Animated.View
          key={`loading-anim-${String(index)}`}
          style={[
            {
              width: size,
              height: size,
              borderRadius: borderRadius || size / 2,
              marginRight: 2,
              marginLeft: 2,
            },
            { backgroundColor: colors[index] || '#F7981C' },
            { transform: [{ translateY: animation }] },
          ]}
        />
      ))}
    </Animated.View>
  );
}
