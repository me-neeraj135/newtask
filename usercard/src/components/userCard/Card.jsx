import React from 'react'
import styles from './styles.module.css'
import instagram from '../../media/instagram.svg'
import x from '../../media/square-x-twitter.svg'
import facebook from '../../media/square-facebook.svg'
import linkedIn from '../../media/linkedin.svg'

export default function Card({ user }) {
  return (
    <div id={user.id} className={styles.card}>
      <img className={styles.avatar} src={user.avatar} alt={user.first_name} />
      <cite
        className={styles.name}
      >{`${user.first_name} ${user.last_name}`}</cite>
      <p className={styles.email}>{user.email}</p>

      <div className={styles.connectContainer}>
        <a href="https://www.linkedin.com" target="blank">
          <img className={styles.connect} src={linkedIn} alt="LinkedIn" />
        </a>
        <a href="https://www.x.com" target="blank">
          <img className={styles.connect} src={x} alt={'X'} />
        </a>
        <a href="https://www.facebook.com" target="blank">
          <img className={styles.connect} src={facebook} alt={'Facebook'} />
        </a>
        <a href="https://www.instagram.com" target="blank">
          <img className={styles.connect} src={instagram} alt="Instagram" />
        </a>
      </div>
    </div>
  )
}
