import React from 'react';
import { motion } from 'framer-motion';

const line1 = 'हरे कृष्णा हरे कृष्णा कृष्णा कृष्णा हरे हरे';
const line2 = 'हरे राम हरे राम राम राम हरे हरे ||';
const Title = () => {

  const sentence = {
    hidden:{opacity: 1},
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  }
  const letter = {
    hidden: {opacity:0, y:50},
    visible:{
      opacity: 1,
      y:0,
    },
  }

  return (
    <div className="title">
      
      <motion.h1 
        className="load-screen--message"
        variants={sentence}
        initial="hidden"
        animate="visible"
      >{
        line1.split("").map((char, index)=>{

          return(
            <motion.span key={char+ "-" + index} variants={letter}>{char}</motion.span>
          )
        })
      }
      <br/>
      {
        line2.split("").map((char, index)=>{

          return(
            <motion.span key={char+ "-" + index} variants={letter}>{char}</motion.span>
          )
        })
      }
</motion.h1>

      <h2>Your Pictures</h2>
      
      <p> Dedicated to Lord Jagannath <span role='img' aria-label="jagannathji"
      style={{color: '#FADF63', fontSize:'1.5rem'}}
      >⚫<b>∪</b>⚫</span></p>
    </div>
  )
}

export default Title;