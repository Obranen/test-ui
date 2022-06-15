import React, {FC} from 'react'
import TitleTableItem from './TitleTableItem/TitleTableItem';
import classes from './TitleTableList.module.scss';

const TitleTableList: FC = () => {
  const titleTable = ['id', 'name', 'username', 'email', 'phone', 'website']

  return (
    <div className={classes.title}>
      {titleTable.map((titleName, index) =>
        <TitleTableItem titleName={titleName} key={index}/>
      )}
    </div>
  )
}

export default TitleTableList