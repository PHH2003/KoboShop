import React, { useEffect, useState } from 'react'
import TemplateTable from '../common/template-table/template-table.component';
import { getAllUser } from './service/user.service';

const UserAdminComponent = () => {
  const [dataUser, setDataUser] = useState([])
  const [colums, setColums] = useState([])
  useEffect(() => {
    getAllUser().then((res) =>{
      setDataUser(res.data)
    })
  }, [])
  useEffect(()=>{
    const columTemp: any = []
    console.log(columTemp)
    if (dataUser.length > 0) {
        Object?.keys(dataUser[0]).map((itemKey) => {
            if (!['_id', 'updatedAt', 'createdAt', '__v'].includes(itemKey)) {
                return columTemp.push({
                    title: itemKey,
                    dataIndex: itemKey,
                    key: itemKey
                })
            }
        }
        )
    }
    setColums(columTemp)
  },[dataUser])
  return (
    <div>
      <TemplateTable columsTable={colums} dataTable={dataUser} />
    </div>
  )
}

export default UserAdminComponent