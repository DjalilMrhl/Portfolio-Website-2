import React from 'react'
import './Hero.scss'
import {FaFacebook, FaYoutube,FaGithub} from 'react-icons/fa'
import img from './d0e1439679d3fc1f9adeaae9a27f3cdbf8c07a5e-1080x884-1.webp'
import {TypeAnimation} from 'react-type-animation'
import {motion} from 'framer-motion'


function Hero(props) {
  const v = {
    hidden: {
      y: -50,
      opacity: 0
    },
    visible: {
      y:0,
      opacity: 1,
      transition: {
        duration:1
      }
    }
  }
  const vv = {
    hidden: {
      y: 50,
      opacity: 0
    },
    visible: {
      y:0,
      opacity: 1,
      transition: {
        duration:1
      }
    }
  }
  return (
    <section className="hero">
        <div className="hero--container">
            <motion.div className="description" variants={v} initial='hidden' whileInView='visible' viewport={{once:false}}>
                <h1>Fa Ti Ga</h1>
                <h2>i am a <TypeAnimation sequence={['developer', 2000,'Gamer', 2000,'freelancer',2000]} wrapper='span' speed={50} repeat={Infinity}/></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptatum.</p>
                <div><motion.button whileHover={{scale:1.2}} initial={{scale:1}} transition={{type:'spring',stiffness:200}}>contact me</motion.button><motion.button whileHover={{scale:1.2}} initial={{scale:1}} transition={{type:'spring',stiffness:200}}>My Portfolio</motion.button></div>
                <div className="links">
                    <a href="a"><FaFacebook/></a>
                    <a href="b"><FaYoutube/></a>
                    <a href="q"><FaGithub/></a>
                </div>
            </motion.div>
            <motion.img src={img} alt="" variants={vv} initial='hidden' whileInView='visible' viewport={{once:false}}/>
        </div>
    </section>
  )
}

export default Hero