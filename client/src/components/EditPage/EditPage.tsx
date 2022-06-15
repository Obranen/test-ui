import React, {FC} from 'react'
import UserList from './UserList/UserList';
import ModalAddUser from './ModalAddUser/ModalAddUser';

const EditPage: FC = () => {
    return (
      <>
        <ModalAddUser/>
        <UserList/>
      </>
    )
  }

export default EditPage