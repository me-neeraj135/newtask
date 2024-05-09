import React, { useState } from 'react'
import styles from './styles.module.css'
import users from '../../media/users.svg'

function Navbar({ findUsersData }) {
  const [pageCount, setPageCount] = useState(1)
  console.log(pageCount, `cr page count`)
  const handleClick = () => {
    setPageCount(2)
    findUsersData(pageCount)
    if (pageCount === 2) {
      setPageCount(1)
      findUsersData(pageCount)
    }
  }

  return (
    <header className={styles.navbarStyle}>
      <img src={users} alt="Logo" className={styles.logo} />
      <button className={styles.button} onClick={handleClick}>
        Get Users
      </button>
    </header>
  )
}

export default Navbar
