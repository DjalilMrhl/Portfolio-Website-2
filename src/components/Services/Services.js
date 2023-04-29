import React from 'react'
import './Services.scss'
import {motion} from 'framer-motion'
import img from './d0e1439679d3fc1f9adeaae9a27f3cdbf8c07a5e-1080x884-1.webp'
import {useInView} from 'react-intersection-observer'

function Services(props) {

  const [ref, inView] = useInView()

    const child1Variants = {
        hidden: {
          x: 20,
          opacity: 0
        },
        visible: {
          x:0,
          opacity: 1,
          transition:{
            duration: 1
          }
        }
    }
    const child2Variants = {
        hidden: {
          x: -20,
          opacity: 0
        },
        visible: {
          x:0,
          mixBlendMode: 'lighten',
          opacity: 1,
          transition:{
            duration: 1
          }
        }
    }

    const services = [
        {
            name: 'ui/ux design',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, nihil.',
            link: 'learn more'
        },
        {
            name: 'development',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, nihil.',
            link: 'learn more'
        },
        {
            name: 'digital marketing',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, nihil.',
            link: 'learn more'
        },
        {
            name: 'product branding',
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, nihil.',
            link: 'learn more'
        }
    ]

    return (
      <section className="services" id="services">
        <div ref={ref} className='services--container'>
            <motion.div className="description"  variants={child2Variants} initial='hidden' whileInView='visible' viewport={{once:true}}>
                <h1>what i do</h1>
                <h2>i'm a freelance front-end developer with over 5 years of experience.</h2>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptatum.</p>
                <motion.button whileHover={{scale:1.2}} initial={{scale:1}} transition={{type:'spring',stiffness:200}}>See my work</motion.button>
                {inView &&<img id='img' src={img} alt=""/>}
            </motion.div>
            {inView && <motion.div className="list" variants={child1Variants} initial='hidden' whileInView='visible' viewport={{once:false}}>
                { services.map((service,index)=> {
                      return  <div key={index} className='service--item'>
                                <div>
                                    <h2>{service.name}</h2>
                                    <a href="a">{service.link}</a>
                                </div>
                                <p>{service.description}</p>
                            </div>})}
            </motion.div>}
        </div>
      </section>
  )
}

export default Services;