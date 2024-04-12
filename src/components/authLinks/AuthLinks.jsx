"use client"
import React, { useState } from 'react'
import styles from './authLinks.module.css'
import Link from 'next/link'
function AuthLinks() {
   
  const [open, setOpen] = useState(false);

  const authenticated = "authenticated"
  return (
    <>
      {authenticated === 'notauthenticated'? (<Link href='/login' className={styles.link}>Login</Link>
      ):(
      <>
      <Link href='/write' className={styles.link}>Write</Link>
      <Link href='#' className={styles.link}>Logout</Link>
      </>
      )}
      <div className={styles.burger} onClick={()=>setOpen(!open)}>
        <div className={styles.lines}></div>
        <div className={styles.lines}></div>
        <div className={styles.lines}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href='/'>Homepage</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
      
        {authenticated === 'notauthenticated'?
          (
          <Link href='/login'>Login</Link>
          ):(
            <>
            <Link href='#'>Write</Link>
            <Link href='#'>Logout</Link>
            </>
          )}
        </div>
      )}
      
    </>
  )
}

export default AuthLinks