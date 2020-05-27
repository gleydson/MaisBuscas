import React, { useState, useEffect, useRef, useCallback } from 'react';
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

const DotsLoad: React.FC<Props> = ({
  dots = 3,
  colors = defaultColors,
  size = 10,
  borderRadius,
}) => {
  const [animations, setAnimations] = useState<Animated.Value[]>([]);
  const [reverse, setReverse] = useState(false);

  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const dotAnimations = [];
    for (let i = 0; i < dots; i++) {
      dotAnimations.push(new Animated.Value(0));
    }
    setAnimations(dotAnimations);
  }, [dots]);

  const floatAnimation = useCallback(
    (
      node: Animated.Value | Animated.ValueXY,
      reverseY: boolean,
      delay: number
    ) => {
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
    },
    []
  );

  const loadingAnimation = useCallback(
    (nodes: Animated.Value[], reverseY: boolean) => {
      Animated.parallel(
        nodes.map((node: Animated.Value, index: number) =>
          floatAnimation(node, reverseY, index * 100)
        )
      ).start(() => {
        setReverse(!reverse);
      });
    },
    [floatAnimation, reverse]
  );

  const appearAnimation = useCallback(() => {
    Animated.timing(opacity, {
      toValue: 1,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, [opacity]);

  useEffect(() => {
    if (animations.length === 0) return;
    loadingAnimation(animations, reverse);
    appearAnimation();
  }, [animations, appearAnimation, loadingAnimation, reverse]);

  useEffect(() => {
    if (animations.length === 0) return;
    loadingAnimation(animations, reverse);
  }, [reverse, animations, loadingAnimation]);

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
};

export default DotsLoad;
