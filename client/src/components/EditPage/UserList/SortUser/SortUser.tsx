import React, {FC} from 'react'

const SortUser: FC<{ sortValueCurrent: (value: string) => void }> = ({sortValueCurrent}) => {
  const selectChangeHandler = (e: any) => {
    const target = e.target.value
    sortValueCurrent(target)
  }
  return (
    <>
      <p style={{fontWeight: 'bold', fontSize: '16px', marginBottom: '-3px'}}>Сортировать:</p>
      <div>
        <select onChange={selectChangeHandler} name="list">
          <option value="id">Default</option>
          <option value="username">UserName</option>
          <option value="email">Email</option>
          <option value="website">Website</option>
        </select>
      </div>
    </>
  )
}

export default SortUser