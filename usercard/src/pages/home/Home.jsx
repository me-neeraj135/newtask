import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'

import axios from 'axios'

import Card from '../../components/userCard/Card'
import Navbar from '../../components/navbar/Navbar'
import Loader from '../../components/loader'

function Home() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)

  const findUsersData = (pageCount) => {
    console.log(pageCount, `homepage`)
    setLoading(true)
    setTimeout(async () => {
      try {
        const response = await axios.get(
          `https://reqres.in/api/users?page=${pageCount}}`,
        )
        const data = response.data.data
        setUsers(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }, 2000)
  }

  return (
    <div className={'container'}>
      <Navbar findUsersData={findUsersData} />

      {users.length === 0 && loading === false ? (
        <div className={styles.textContainer}>
          <p>Users will display here.</p>
        </div>
      ) : loading === true ? (
        <div className={styles.loaderContainer}>
          <Loader />
        </div>
      ) : (
        <div className={styles.cardContainer}>
          {users.map((user) => {
            return <Card user={user} />
          })}
        </div>
      )}
    </div>
  )
}

export default Home
