import React, {FC} from 'react'
import classes from './Modal.module.scss'

interface IModal {
  children: React.ReactNode
  visible: boolean
  setModalVisible?: (state: boolean) => void
}

const Modal: FC<IModal> =
  ({children, visible, setModalVisible}) => {
    const rootClasses = [classes.modal]

    if (visible) {
      rootClasses.push(classes.active)
    }

    const modalClickHandler = () => {
      if (setModalVisible) {
        setModalVisible(false)
      }
    }

    const contentClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation()
    }

    return (
      <div className={rootClasses.join(' ')} onClick={modalClickHandler}>
        <div className={classes.content} onClick={contentClickHandler}>{children}</div>
      </div>
    )
  }

export default Modal