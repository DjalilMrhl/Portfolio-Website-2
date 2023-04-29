import React from 'react'
import './About.scss'
import img from './a.png'
import {motion} from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

function About(props) {

  const [ref,inView] = useInView()

  const child1Variants = {
    hidden: {
      y: 50,
      opacity: 0
    },
    visible: {
      y:0,
      opacity: 1,
      transition:{
        duration: 1
      }
    }
  }
  const child2Variants = {
    hidden: {
      y: -50,
      opacity: 0
    },
    visible: {
      y:0,
      opacity: 1,
      transition:{
        duration: 1
      }
    }
  }
  return (
    <section className="about" id='about'>
        <div ref={ref} className="about--container">
            <motion.img src={img} alt="" variants={child2Variants} initial='hidden' whileInView='visible' viewport={{once:false}}/>
            <motion.div className="description"  variants={child1Variants} initial='hidden' whileInView='visible' viewport={{once:false}}>
                <h1>about me</h1>
                <h2>i'm a freelance front-end developer with over 5 years of experience.</h2>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptatum.</p>
                <div>
                    <p><span>{inView &&<CountUp start={0} end={13} duration={3}/>}</span>years of<br/>experience</p>
                    <p><span>{inView &&<CountUp start={0} end={19} duration={3}/>}K+</span>projects<br/>completed</p>
                    <p><span>{inView &&<CountUp start={0} end={20} duration={3}/>}K+</span>satisfied<br/>clients</p>
                </div>
                <div><motion.button whileHover={{scale:1.2}} initial={{scale:1}} transition={{type:'spring',stiffness:200}}>Contact me</motion.button><motion.button whileHover={{scale:1.2}} initial={{scale:1}} transition={{type:'spring',stiffness:200}}>My Portfolio</motion.button></div>
            </motion.div>
        </div>
    </section>
  )
}

export default About;