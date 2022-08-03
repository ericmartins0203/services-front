import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { api, deleteUser, updateUser } from "../api/api";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import styles from '../../styles/Details.module.css'
import { Button, TextField } from "@mui/material";

const Page = () => {
  const router = useRouter()
  const { userId } = router.query

  const [modal, setModal] = useState(false);
  const [userDetail, setUserDetail] = useState({}as any);
  const [update, setUpdate] = useState({}as any);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdate({ ...update, [e.target.name]: e.target.value })
  }

  const handleUpdate = () => {
    console.log('userDetail', userDetail)
    updateUser(userId as string, update)
    setModal(!modal)
  }

  useEffect(() => {
    api.get(`user/${userId}`)
    .then(res => {
      setUserDetail(res.data)
      console.log(res.data)
    })
    .catch(err =>{
      console.log(err)
    })
  }, [])

  return (
    <>
      {modal &&
        <form className={styles.form} >
          <div className={styles.grid}>

            <TextField
              className={styles.input}
              id="outlined-basic"
              name='name'
              label="name"
              variant="outlined"
              onChange={handleChange}
            />
            <TextField
              className={styles.input}
              id="outlined-basic"
              name='cpf'
              label="cpf"
              variant="outlined"
              onChange={handleChange}
              />
            <TextField
              className={styles.input}
              id="outlined-basic"
              name='alias'
              label="apelido"
              variant="outlined"
              onChange={handleChange}
            />
            <TextField
              className={styles.input}
              id="outlined-basic"
              name="gender"
              label="gênero"
              variant="outlined"
              onChange={handleChange}
            />
            <TextField
              className={styles.input}
              id="outlined-basic"
              name="phone"
              label="telefone"
              variant="outlined"
              onChange={handleChange}
              />
            <TextField
              className={styles.input}
              id="outlined-basic"
              name="address"
              label="endereço"
              variant="outlined"
              onChange={handleChange}
              />
            <TextField
              className={styles.input}
              id="outlined-basic"
              name="comments"
              label="observações"
              variant="outlined"
              onChange={handleChange}
              />
            <TextField
              className={styles.input}
              id="outlined-basic"
              name="profilePicture"
              label="foto de perfil"
              variant="outlined"
              onChange={handleChange}
            />
            <Button variant="contained" onClick={handleUpdate}>Atualizar</Button>
            <Button variant="contained" onClick={() =>{setModal(!modal)}}>Voltar</Button>
          </div>
        </form>
      }
        <ToastContainer/>
        <div className={styles.main}>
          <div className={styles.top}>
            <div className={styles.image}>

              {/* <Image
                src={userDetail.profilePicture}
                alt="profile"
                width={200}
                height={200}
                layout="fill"
                className={styles.profilePicture}
                /> */}
            </div>
            <div className={styles.userInfo}>

            <h2>Nome: {userDetail.name}</h2>
            <p>Apelido: {userDetail.alias}</p>
            <p>CPF: {userDetail.cpf}</p>
            <p>Telefone: {userDetail.phone}</p>
            </div>
          </div>
          <p>Endereço: {userDetail.address}</p>
          <div className={styles.button}>
            <Button variant="contained" onClick={deleteUser}>delete</Button>
            <Button variant="contained" onClick={() =>{setModal(!modal)}}>atualizar</Button>
          </div>
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
);
}


export default Page;

