import React, {FC, useState} from 'react'
import Button from '../../UI/Button/Button';
import classes from './ModalAddUser.module.scss';
import Modal from '../../UI/Modal/Modal';

interface IModalAddUser {}

const ModalAddUser: FC<IModalAddUser> =
  ({}) => {
    const [modalVisible, setModalVisible] = useState(false)

    return (
      <>
        <Button className={classes.button} onClick={() => setModalVisible(true)}>
          Показать Модальное окно
        </Button>

        <Modal visible={modalVisible} setModalVisible={setModalVisible}>
          <h1>Модальное окно</h1>
          <Button className={classes.buttonContent} onClick={() => setModalVisible(false)}>
            Закрыть
          </Button>
        </Modal>
      </>
    )
  }

export default ModalAddUser