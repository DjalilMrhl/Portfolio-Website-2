import React from 'react'
import './Header.scss'
import {motion} from 'framer-motion'

function Header(props) {
  return (
    <header id='home'>
        <motion.h1 drag dragConstraints={{left:0, top:0, right:0, bottom:0}}>fatiga</motion.h1>
        <motion.button drag dragConstraints={{left:0, top:0, right:0, bottom:0}}>work with me</motion.button>
    </header>
  )
}

export default Header