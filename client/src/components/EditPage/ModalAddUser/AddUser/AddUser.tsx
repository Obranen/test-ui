import React, {FC, useState} from 'react'
import Input from '../../../UI/Input/Input';
import Button from '../../../UI/Button/Button';
import {useActions} from '../../../../hooks/useActions';

interface IAddValue {
  id?: number
  username: string
  email: string
}

const AddUser: FC = () => {
  const {addUser} = useActions()
  const [addValue, setAddValue] = useState<IAddValue>({
    username: '',
    email: ''
  })

  const userNameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddValue({...addValue, username: event.target.value})
  }

  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddValue({...addValue, email: event.target.value})
  }

  const addUserClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()

    const newUser = {
      id: new Date().getMilliseconds(),
      username: addValue.username,
      email: addValue.email
    }
    addUser(newUser)

    setAddValue({
      username: '',
      email: ''
    })
  }

  return (
      <form>
        <h3>Оформить подписку</h3>
        <Input type={'text'} placeholder={'Имя'} value={addValue.username} onChange={userNameChangeHandler}/>
        <Input type={'email'} placeholder={'Email'} value={addValue.email} onChange={emailChangeHandler}/>
        <Button onClick={addUserClickHandler}>
          Добавить
        </Button>
      </form>
  )
}

export default AddUser