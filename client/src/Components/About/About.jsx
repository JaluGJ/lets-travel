import React from 'react'
import styles from './About.module.css'
import Backend from './Backend/Backend'
import Database from './Database/Database'
import Developer from './Developer/Developer'
import Frontend from './Frontend/Frontend'

export default function AboutMe() {
  return (
    <div className={styles.container}>
      <div className={styles.database}>
        <Database />
      </div>
      <div className={styles.backend}>
        <Backend/>
      </div>
      <div className={styles.frontend}>
        <Frontend/>
      </div>
      <div className={styles.developer}>
        <Developer/>
      </div>
    </div>
  )
}
