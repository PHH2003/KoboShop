import React, { useEffect, useState } from 'react'
import { getAllCategory } from './service/category.service'
import TemplateTable from '../common/template-table/template-table.component'

const CategoryAdmin = () => {
    const [dataCategory, setDataCategory] = useState([])
    const [colums, setColums] = useState([])
    useEffect(() => {
        getAllCategory().then((res) => {
            setDataCategory(res.data)
        })
    }, [])
    useEffect(() => {
        const columTemp: any = []
        if (dataCategory.length > 0) {
            Object?.keys(dataCategory[0]).map((itemKey) => {
                if (!['_id', '__v'].includes(itemKey)) {
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
    }, [dataCategory])
    return (
        <div>
            <TemplateTable dataTable={dataCategory} columsTable={colums} dataPage={8} />
        </div>
    )
}

export default CategoryAdmin