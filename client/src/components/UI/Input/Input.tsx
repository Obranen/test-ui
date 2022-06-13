import React, {FC} from 'react'

interface IInput {
  type: string
  onChange?: (e: any) => void
  placeholder: string
  value?: string
}

const Input: FC<IInput> =
  ({
     ...props
   }) => {
    return (
      <>
        <input {...props}/>
      </>
    )
  }

export default Input