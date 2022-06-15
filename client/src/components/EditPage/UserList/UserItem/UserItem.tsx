import React, {FC} from 'react'
import classes from './UserItem.module.scss';

interface IUserItem {
  user: any
  key: any
}

const UserItem: FC<IUserItem> =
  ({user}) => {
    return (
      <div className={classes.table} >
        <div>{user.id}</div>
        <div>{user.name}</div>
        <div>{user.username}</div>
        <div>{user.email}</div>
        <div>{user.phone}</div>
        <div>{user.website}</div>
      </div>
    )
  }

export default UserItem