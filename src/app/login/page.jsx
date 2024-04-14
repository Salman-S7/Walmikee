"use client"
import React from 'react'
import styles from './loginPage.module.css'
import { signIn, useSession } from 'next-auth/react'
import { useRouter  } from 'next/navigation';

function LoginPage() {
  const router = useRouter();
  const {data, status} = useSession();
  
  if(status === "loading"){
    return <div className={styles.loading}>Loading...</div>
  }
  if(status === "authenticated"){
    router.push("/");
  }

  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.socialButton} onClick={()=>signIn("google")}>Sign in with Google</div>
            <div className={styles.socialButton}>Sign in with Git-hub</div>
            <div className={styles.socialButton}>Sign in with Facbooke</div>

        </div>
    </div>
  )
}

export default LoginPage