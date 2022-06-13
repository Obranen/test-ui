import React, {FC, useEffect, useMemo, useState} from 'react'
import {useTypedSelector} from '../../hooks/useTypedSelector';
import {fetchUsers} from '../../store/actionCreators/user';
import {useActions} from '../../hooks/useActions';
import classes from './UserList.module.scss'
import Input from '../UI/Input/Input';

const UserList: FC = () => {
  const [optionValue, setOptionValue] = useState('')
  const {users, loading, error} = useTypedSelector(state => state.user)
  const {fetchUsers} = useActions()
  const [findValue, setFindValue] = useState('')

  const arrayUsers = useMemo(() => {
    if(users.length === 0) {
      return users
    } else {
      return users.filter(user => user.username.toLowerCase().includes(findValue.toLowerCase()))
    }
  }, [findValue, users])

  useEffect(() => {
    fetchUsers()
  }, [])

  if (loading) {
    return <h1>Идёт загрузка...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }

  function SortArray(field: string) {
    return (a: any, b: any) => a[field] > b[field] ? 1 : -1;
  }

  const selectHandler = (e: any) => {
    const target = e.target.value
    setOptionValue(target)
    arrayUsers.sort(SortArray(target))
  }

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target.value
    setFindValue(target)
  }
  return (
    <>
      <p style={{fontWeight: 'bold', fontSize: '16px', marginBottom: '-3px'}}>Поиск по username:</p>
      <Input
        type={'text'}
        placeholder={'Поиск'}
        onChange={changeHandler}
        value={findValue}
      />

      <p style={{fontWeight: 'bold', fontSize: '16px', marginBottom: '-3px'}}>Сортировать:</p>
      <div>
        <select onChange={selectHandler} name="list">
          <option value="id">Default</option>
          <option value="username">UserName</option>
          <option value="email">Email</option>
          <option value="website">Website</option>
        </select>
      </div>

      <div className={classes.title}>
        <div>id</div>
        <div>name</div>
        <div>username</div>
        <div>email</div>
        <div>phone</div>
        <div>website</div>
      </div>
      {arrayUsers.map(user =>
        <div className={classes.table} key={user.id}>
          <div>{user.id}</div>
          <div>{user.name}</div>
          <div>{user.username}</div>
          <div>{user.email}</div>
          <div>{user.phone}</div>
          <div>{user.website}</div>
        </div>
      )}
    </>
  )
}

export default UserList