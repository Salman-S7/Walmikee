"use client"

import React, { useContext } from 'react'
import styles from './themeToggle.module.css'
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext'

function ThemeToggle() {
  const {theme, toggle} = useContext(ThemeContext);

  console.log(theme)
  return (

    <div className={styles.container} onClick={toggle} style={theme === "dark" 
    ?{background: '#fff'}
    : {background: "#000"} }>
      <Image src='/moon.png' alt='' width={14} height={14}/>
      <div className={styles.ball} 
      style={theme === "dark" ?
       {left:2, background: '#0f172a'}
       :{right:2, background: "#fff"}}></div>
      <Image src='/sun.png' alt='' width={14} height={14}/>
    </div>
  )
}

export default ThemeToggle