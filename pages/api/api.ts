import axios from 'axios';
import { IUser } from '../../interfaces/user.interface';
import { toast } from 'react-toastify'
import { useRouter } from 'next/router';

export const api = axios.create({
  // baseURL: 'http://localhost:3000/',
  baseURL: 'https://teste-services-back.herokuapp.com/',
  responseType: 'json'
});

export const send = (data: IUser) =>{
  api.post('user', data)
    .then(_ => {
      toast.success('Usuário cadastrado com sucesso!')
    })
    .catch(err =>{
      toast.error('Erro ao cadastrar usuário!')
      console.log(err)
    })
}

export const get = () : IUser[] | void => {
  api.get('user')
    .then(res => {
      console.log(res)
      return res.data
    })
    .catch(err =>{
      console.log(err)
      return []
    })
}

export const getOne = (userId:string) =>{
  api.get(`user/${userId}`)
    .then(res => {
      console.log(res)
      return res.data
    })
    .catch(err =>{
      console.log(err)
    })
}

export const updateUser = (userId: string, data: IUser) => {
  api.patch(`user/${userId}`, data)
    .then(res => {
      console.log(res)
      toast.success('Usuário atualizado com sucesso!')
      return res.data
    })
    .catch(err =>{
      console.log(err)
      toast.error('Erro ao atualizar usuário!')
    })
}

export const deleteUser = (userId: any) => {
  const router = useRouter()

  api.delete(`/user/${userId}`)
  .then(res => {
    router.push("/users")
    toast.success('Usuário deletado com sucesso!')
  })
  .catch(err => {
    console.log(err)
    toast.error('Erro ao deletar usuário!')
  })
}



