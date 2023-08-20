import React from 'react'
import styles from '../../styles/Login.module.css'
import LoginIcon from '@mui/icons-material/Login';
import Link from 'next/link';

const Login = () => {
    return (
      <>
        <section className={styles.signup}>
          <div className={styles.wrapper}>
            <form action="" className={styles.form}>
              <div className={styles.title}>
                <div className={styles.line}></div>
                <div className={styles.uline}>
                  Welcome back to <span className={styles.org}>flexBox</span>
                </div>
              </div>
              <label htmlFor="">Username:</label>
              <input type="text" />
              <label htmlFor="">Password:</label>
              <input type="password" />
              <span className={styles.forgot_pass}><Link href="/Signup" className={styles.login_link}>forgot password?</Link></span>
              <div className={styles.btn}>
                <button className={styles.subtn}>
                  <LoginIcon />
                  Sign In
                </button>
              </div>
              <span className={styles.login_que}>don't have an account? <Link href="/Signup" className={styles.login_link}>Sign Up</Link></span>
            </form>
          </div>
        </section>
      </>
    );
}

export default Login