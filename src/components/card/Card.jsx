import React from 'react'
import styles from "./card.module.css";
import Image from 'next/image'
import Link from 'next/link';


function Card() {
  return (
    <div className={styles.container}>
   
          <div className={styles.imgContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.details}>
                <span className={styles.date}>11.02.2024 - </span>
                <span className={styles.category}>CULTURE</span>
            </div>
            <h1>Lorem ipsum dolor consectetur adipisicing elit.</h1>
            <p className={styles.desc}> 
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Blanditiis repellat voluptates reiciendis placeat. 
                Quod labore molestiae
                dignissimos tenetur.
            </p>
            <Link href='/' className={styles.link}>Read More</Link>
          </div>
        
    </div>
  )
}

export default Card