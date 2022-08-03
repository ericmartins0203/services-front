import React, { useEffect, useState } from 'react'
import { api } from '../api/api'
import { NextPage } from 'next';
import Link from "next/link";

import { IUser } from '../../interfaces/user.interface';
import styles from '../../styles/Users.module.css'


const Users: NextPage = () => {

  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    api.get('user')
    .then(res => {
      setUsers(res.data)
      console.log(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  }, [])


  return (
    <>
      <div className={styles.main}>
        <h1>Todos os Usuários Cadastrados</h1>
        <ul>
          {users?.map(user => (
            <Link key={user?.id} href={`/users/${user.id}`}>
              <li className={styles.li}>
                <h2>id: {user?.id} - {user?.name} </h2>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/ericestevesmartins/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Desenvolvido por Eric Martins
        </a>
      </footer>
    </>
  )
}

export default Users
