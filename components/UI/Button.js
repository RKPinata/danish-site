import React from 'react'

import styles from './Button.module.css'

import { wildWorld } from '@/src/fonts/font-provider'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'


function Button(props) {
  return (
    <button className={styles.button} type={props.type} onClick={props.onClick}>
      <FontAwesomeIcon className={styles.chevron} icon={faChevronLeft}/>
      <FontAwesomeIcon className={styles.chevron} icon={faChevronLeft}/>
      <span style={wildWorld.style} className={styles.label}>{props.label}</span>
      <FontAwesomeIcon className={styles.chevron} icon={faChevronRight}/>
      <FontAwesomeIcon className={styles.chevron} icon={faChevronRight}/>
    </button>
  )
}

export default Button