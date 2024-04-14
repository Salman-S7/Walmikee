import React from 'react'
import styles from "./card.module.css";
import Image from 'next/image'
import Link from 'next/link';


function Card({item, key}) {
  return (
    <div className={styles.container} key={key}>
   
          <div className={styles.imgContainer}>
            {item.image && <Image src={item.image} alt="" fill className={styles.image}/>}
          </div>
          <div className={styles.textContainer}>
            <div className={styles.details}>
                <span className={styles.date}>{item.createdAt.substring(0,10)} - </span>
                <span className={styles.category}>{item.catSlug}</span>
            </div>
            <Link href={`/posts/${item.slug}`}>
              <h1>{item.title}</h1>
            </Link>
            <p className={styles.desc.substring(0,60)}> 
                {item.desc}
            </p>
            <Link href={`/posts/${item.slug}`} className={styles.link}>Read More</Link>
          </div>
        
    </div>
  )
}

export default Card