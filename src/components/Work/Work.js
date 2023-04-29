import React from 'react'
import './Work.scss'
import {motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import img1 from './22_222_0098-Tech-trends-Blog-1024x686-1.jpeg'
import img2 from './MicrosoftTeams-image.webp'
import img3 from './T7C6Y974_1639326146336_1671471840033_1671471840033.webp'

function Work(props) {

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
          opacity: 1,
          transition:{
            duration: 1
          }
        }
    }

    return (
      <section className="work" id="work">
        <div ref={ref} className='work--container'>
            <motion.div className="description"  variants={child2Variants} initial='hidden' whileInView='visible' viewport={{once:true}}>
                <h1>my latest work</h1>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, voluptatum.</p>
                <motion.button whileHover={{scale:1.2}} initial={{scale:1}} transition={{type:'spring',stiffness:200}}>See my work</motion.button>
            </motion.div>        
            {inView && <>
            <motion.div className='work--item' variants={child1Variants} initial='hidden' animate='visible' viewport={{ once: false }}>                  
                <img src={img1} alt="" />                    
                <div className='d'>              
                  <h2>ui/ux design</h2>            
                  <p>Lorem ipsum dolor, sit</p>                         
                  </div>                       
                  <div className='dd'></div>                     
            </motion.div><motion.div className='work--item' variants={child2Variants} initial='hidden' animate='visible' viewport={{ once: false }}>                           
                <img src={img2} alt="" />               
                <div className='d'>                          
                  <h2>development</h2>                            
                  <p>amet consectetur adipisi Maiores</p>                          
                </div>                         
                <div className='dd'></div>                      
            </motion.div>                         
            <motion.div className='work--item' variants={child1Variants} initial='hidden' animate='visible' viewport={{ once: false }}>                  
                <img src={img3} alt="" />                           
                <div className='d'>                      
                  <h2>digital marketing</h2>              
                  <p>etur adipisicing el nihil.</p>                           
                </div>
                <div className='dd'></div>
            </motion.div>
                        </>}
        </div>
      </section>
  )
}

export default Work;