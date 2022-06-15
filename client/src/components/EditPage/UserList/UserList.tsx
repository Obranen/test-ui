import React, {FC, useEffect, useMemo, useState} from 'react'
import {useTypedSelector} from '../../../hooks/useTypedSelector'
// eslint-disable-next-line
import {fetchUsers} from '../../../store/actionCreators/user'
import {useActions} from '../../../hooks/useActions'
import classes from './UserList.module.scss'
import UserItem from './UserItem/UserItem';
import FindUser from './FindUser/FindUser';
import SortUser from './SortUser/SortUser';
import TitleTableList from './TitleTableList/TitleTableList';
import {useFinedAndSortedUsers} from '../../../hooks/useFinedAndSortedUsers';

const UserList: FC = () => {
  const {users, loading, error} = useTypedSelector(state => state.user)
  const {fetchUsers} = useActions()
  const [findInput, setFindInput] = useState('')
  const [sortInput, setSortInput] = useState('')
  const arrayUsers = useFinedAndSortedUsers(users, sortInput, findInput)

  const findValueCurrent = (value: string) => {
    setFindInput(value)
  }
  const sortValueCurrent = (value: string) => {
    setSortInput(value)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  if (loading) {
    return <h1>Идёт загрузка...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }
  return (
    <>
      <FindUser findValueCurrent={findValueCurrent}/>
      <SortUser sortValueCurrent={sortValueCurrent}/>
      <TitleTableList/>
      {arrayUsers.length !== 0 ?
        arrayUsers.map(user =>
          <UserItem
            key={user.id}
            user={user}
          />
        ) :
        <div className={classes.alertError}>По данному запросу нечего не найдено</div>
      }
    </>
  )
}

export default UserList