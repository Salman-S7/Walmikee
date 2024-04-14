import React from 'react'
import styles from './singlePage.module.css'
import Image from 'next/image'
import Menu from '@/components/menu/Menu'
import Comments from '@/components/comments/Comments'


const getData = async (slug)=>{
    const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
      cache : "no-store",
    });
    
    if(!res.ok){
      throw new Error("Failed")
    }
    return res.json();
  }

async function SignlePage({params}) {
    const { slug } = params;
    const data = await getData(slug);

  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>
                    {data.title}
                </h1>
                <div className={styles.user}>
                    <div className={styles.userImageContainer}>
                        {data?.user?.image && 
                        <Image src={`${data.user.image}`} alt='' fill className={styles.avatar}/>}
                    </div>
                    <div className={styles.userTextContainer}>
                        <span className={styles.userName}>{data?.user?.name}</span>
                        <span className={styles.date}>{data.createdAt.substring(0,10)}</span>
                    </div>
                </div>
            </div>
            <div className={styles.imageContainer}>
                {data.img && 
                    <Image src={data.img} alt='' fill className={styles.avatar}/>}
            </div>

        </div>
        <div className={styles.content}>
            <div className={styles.post}>
                
                <div className={styles.description} 
                dangerouslySetInnerHTML={{ __html: data?.desc }}
                />
                
                <div className={styles.comment}>
                    <Comments postSlug={slug}/>
                </div>
            </div>
            <Menu/>
        </div>
    </div>
  )
}

export default SignlePage