import React from 'react';
import { useSpring, animated } from 'react-spring';

const c2Style = {
  background: 'slateblue',
  color: 'white',
  padding: '1.5rem',
};

const Component2 = () => {
  const animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: {
      delay: 1000,
      duration: 1000,
    },
  });
  return (
    <animated.div style={animation}>
      <div style={c2Style}>
        <h1>Component2</h1>
        <p>
          {' '}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </animated.div>
  );
};

export default Component2;
