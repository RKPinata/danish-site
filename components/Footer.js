import React from 'react'

import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
    &copy; {new Date().getFullYear()} Muhammad Danish. All Rights
    Reserved.

  </footer>
  )
}

export default Footer