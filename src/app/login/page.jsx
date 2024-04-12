import React from 'react'
import styles from './loginPage.module.css'

function LoginPage() {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.socialButton}>Sign in with Google</div>
            <div className={styles.socialButton}>Sign in with Git-hub</div>
            <div className={styles.socialButton}>Sign in with Facbooke</div>

        </div>
    </div>
  )
}

export default LoginPage