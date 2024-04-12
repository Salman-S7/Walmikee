import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

function Featured() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Walmikee here! </b>Discover my stories and create ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad  quis?</h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Consequuntur assumenda, a cumque tempore libero ratione quos fuga ad
            repudiandae maiores quod dolor! Delectus cumque veritatis molestiae maxime, ad ab ex?
            repudiandae maiores quod dolor! Delectus cumque veritatis molestiae maxime, ad ab ex?
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
      
    </div>
  ) 
} 

export default Featured