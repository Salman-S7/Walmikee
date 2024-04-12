import React from 'react'
import styles from './menu.module.css'
import Link from 'next/link'
import Image from 'next/image'
import MenuPosts from '../menuPosts/MenuPosts'
import MenuCategory from '../menuCategories/MenuCategory'
//src/app/components/menu/menu.module,.css
function Menu() {
  return (
    <div className={styles.container}>
 

 <h2 className={styles.subtitle}>What's hot</h2>
      <h1 className={styles.title}>Most popular</h1>
      <MenuPosts withImage={false}/>

      <h2 className={styles.subtitle}>Discover by the topic</h2>
      <h1 className={styles.title}>Category</h1>
      <MenuCategory/>

      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h1 className={styles.title}>Editors Pick</h1>
      <MenuPosts withImage={true}/>
    </div>
  )
} 

export default Menu