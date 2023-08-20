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
                  Welcome to <span className={styles.org}>flexBox</span>
                </div>
              </div>
              <label htmlFor="">Username:</label>
              <input type="text" />
              <label htmlFor="">Email:</label>
              <input type="email" />
              <label htmlFor="">Password:</label>
              <input type="password" />
              <label htmlFor="">Confirm Password:</label>
              <input type="password" />
              <label>Country:</label>
              <select name="countries" id="">
                <option value="0">select you country</option>
                <option value="1">India</option>
                <option value="2">USA</option>
              </select>
              <div className={styles.confirm}>
                <input type="checkbox" />I confirm to bunk lectures
              </div>
              <div className={styles.btn}>
                <button className={styles.subtn}>
                  <LoginIcon />
                  Sign Up
                </button>
              </div>
              <span className={styles.login_que}>already have an account? <Link href="/Signin" className={styles.login_link}>Sign In</Link></span>
            </form>
          </div>
        </section>
      </>
    );
}

export default Login