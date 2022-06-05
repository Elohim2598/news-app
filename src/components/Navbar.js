import React from 'react';
import './navbar.css';
import Sunset from '../images/Sunset.png';
import { useSpring, animated } from 'react-spring';

export default function Navbar() {
  const style1 = useSpring({
    from: { opacity: 0, marginTop: -1000 },
    to: { opacity: 1, marginTop: 0 },
    delay: 300,
    config: {
      mass: 1,
      tension: 40,
      friction: 10,
    },
  });
  return (
    <animated.nav style={style1}>
      <img src={Sunset} className="nav--logo" />
    </animated.nav>
  );
}
