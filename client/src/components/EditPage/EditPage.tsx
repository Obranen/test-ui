import React, {FC} from 'react'
import ModalAddUser from './ModalAddUser/ModalAddUser';
import UserList from './UserList/UserList';

const EditPage: FC = () => {
    return (
      <>
        <ModalAddUser/>
        <UserList/>
      </>
    )
  }

export default EditPage