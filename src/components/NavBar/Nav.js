import React from 'react'
//import style
import './Nav.scss'
//import icons
import {BiHomeAlt, BiUser} from 'react-icons/bi'
import {BsFillClipboardDataFill, BsBriefcase, BsChatSquare} from 'react-icons/bs'
//import link
import {Link as LinkS} from 'react-scroll'

function Nav(props) {
  return (
    <nav>
        <LinkS to='home' spy={true} smooth={true} offset={0} duration={700}><BiHomeAlt/></LinkS>
        <LinkS to='about' spy={true} smooth={true} offset={0} duration={700}><BiUser/></LinkS>
        <LinkS to='services' spy={true} smooth={true} offset={0} duration={700}><BsFillClipboardDataFill/></LinkS>
        <LinkS to='work' spy={true} smooth={true} offset={0} duration={700}><BsBriefcase/></LinkS>
        <LinkS to='contact' spy={true} smooth={true} offset={0} duration={700}><BsChatSquare/></LinkS>
    </nav>
  )
}

export default Nav