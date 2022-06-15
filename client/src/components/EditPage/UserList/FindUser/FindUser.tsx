import React, {FC, useState} from 'react'
import Input from '../../../UI/Input/Input'

interface IFindUser {
  findValueCurrent: (value: string) => void
}

const FindUser: FC<IFindUser> = ({findValueCurrent}) => {
    const [findValue, setFindValue] = useState('')

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      const target = e.target.value
      setFindValue(target)
      findValueCurrent(target)
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
      </>
    )
  }

export default FindUser