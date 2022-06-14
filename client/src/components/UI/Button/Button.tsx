import React, {FC} from 'react'
import classes from './Button.module.scss';

interface IButton {
  children: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  className?: any
}

const Button: FC<IButton> =
  ({children, ...props}) => {
    return (
      <button {...props} className={[classes.button, props.className].join(' ')}>
        {children}
      </button>
    )
  }

export default Button