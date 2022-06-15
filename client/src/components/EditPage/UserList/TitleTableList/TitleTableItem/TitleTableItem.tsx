import React, {FC} from 'react'

interface ITitleTableItem {
  titleName:string
}

const TitleTableItem: FC<ITitleTableItem> =
  ({titleName}) => {
    return (
      <div>{titleName}</div>
    )
  }

export default TitleTableItem