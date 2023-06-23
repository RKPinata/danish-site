import React from 'react'

import styles from './Footer.module.css'

import { Space_Grotesk } from '@next/font/google'

const spaceGrotesk = Space_Grotesk({
  subsets:['latin'],
  weight:['300','400','500','600','700']
})

function Footer() {
  return (
    <footer style={spaceGrotesk.style} className={styles.footer}>
    &copy; {new Date().getFullYear()} Muhammad Danish. All Rights
    Reserved.

  </footer>
  )
}

export default Footer
