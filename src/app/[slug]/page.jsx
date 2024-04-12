import React from 'react'
import styles from './singlePage.module.css'
import Image from 'next/image'
import Menu from '@/components/menu/Menu'
import Comments from '@/components/comments/Comments'

function SignlePage() {
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, error?</h1>
                <div className={styles.user}>
                    <div className={styles.userImageContainer}>
                        <Image src='/p1.jpeg' alt='' fill className={styles.avatar}/>
                    </div>
                    <div className={styles.userTextContainer}>
                        <span className={styles.userName}>John Doe</span>
                        <span className={styles.date}>01.01.2024</span>
                    </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image src='/p1.jpeg' alt='' fill className={styles.image}/>
            </div>

        </div>
        <div className={styles.content}>
            <div className={styles.post}>
                <div className={styles.description}>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Nulla consectetur ratione accusamus tempore nostrum? Maiores 
                     ducimus voluptatum odio saepe numquam autem distinctio nemo reprehenderit, 
                     dignissimos neque ipsum facere commodi, blanditiis adipisci ex beatae 
                     officiis vel qui illo optio! Quae voluptas rerum, laboriosam iste et eaque 
                     quibusdam consequuntur maiores enim. Cumque.
                </p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Nulla consectetur ratione accusamus tempore nostrum? Maiores 
                     ducimus voluptatum odio saepe numquam autem distinctio nemo reprehenderit, 
                     dignissimos neque ipsum facere commodi, blanditiis adipisci ex beatae 
                     officiis vel qui illo optio! Quae voluptas rerum, laboriosam iste et eaque 
                     quibusdam consequuntur maiores enim. Cumque.
                </p>
                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, rerum?</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Nulla consectetur ratione accusamus tempore nostrum? Maiores 
                     ducimus voluptatum odio saepe numquam autem distinctio nemo reprehenderit, 
                     dignissimos neque ipsum facere commodi, blanditiis adipisci ex beatae 
                     officiis vel qui illo optio! Quae voluptas rerum, laboriosam iste et eaque 
                     quibusdam consequuntur maiores enim. Cumque.
                </p>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Nulla consectetur ratione accusamus tempore nostrum? Maiores 
                     ducimus voluptatum odio saepe numquam autem distinctio nemo reprehenderit, 
                     dignissimos neque ipsum facere commodi, blanditiis adipisci ex beatae 
                     officiis vel qui illo optio! Quae voluptas rerum, laboriosam iste et eaque 
                     quibusdam consequuntur maiores enim. Cumque.
                </p>

                </div>
                <div className={styles.comment}>
                    <Comments/>
                </div>
            </div>
            <Menu/>
        </div>
    </div>
  )
}

export default SignlePage