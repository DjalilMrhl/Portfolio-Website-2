import React from 'react'
import './Contact.scss'
import {motion} from 'framer-motion'

function Contact(props) {

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
      <section className="contact" id="contact">
        <div className='contact--container'>
            <motion.div className="description"  variants={child2Variants} initial='hidden' whileInView='visible' viewport={{once:false}}>
                <h1>let's work togeother</h1>
            </motion.div>  
            <motion.form action="mailto: marehol2200@gmail.com" variants={child1Variants} initial='hidden' whileInView='visible' viewport={{once:false}}>
                <input type="text" placeholder='your name' />
                <input type="email" placeholder='your email' />
                <textarea name="message" id="message" placeholder='your message' cols="30" rows="10"></textarea>
                <motion.button whileHover={{scale:1.2}} initial={{scale:1}} transition={{type:'spring',stiffness:200}}>Send message</motion.button>
            </motion.form>
        </div>
      </section>
  )
}

export default Contact;