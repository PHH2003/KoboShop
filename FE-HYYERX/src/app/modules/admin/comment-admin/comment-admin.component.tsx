
import { useEffect, useState } from 'react'
import TemplateTable from '../common/template-table/template-table.component'
import { deleteComment, getAllComment } from './service/comment.service'

const CommentAdminComponent = () => {
    const [dataComment, setDataComment] = useState([])
    const [colums, setColums] = useState([])
    const [reset, setReset] = useState<boolean>(true)
    useEffect(() => {
        getAllComment().then((res) => {
            setDataComment(res.data)
        })
    }, [reset])
    useEffect(() => {
        const columnTemp: any = [];
        if (dataComment.length > 0) {
            Object.keys(dataComment[0]).forEach((itemKey) => {
                if (!['_id', 'updatedAt', 'createdAt', '__v'].includes(itemKey)) {
                    columnTemp.push({
                        title: itemKey,
                        dataIndex: itemKey,
                        key: itemKey,
                        render: (text: any, record: any, index: any) => {
                            if (itemKey === 'user') {
                                return record?.user?.fullname;
                            }
                            if (itemKey === 'product') {
                                return record?.product?.name;
                            }
                            return text;
                        },
                    });
                }
            });
        }
        setColums(columnTemp);
    }, [dataComment]);

    const handelGetList = () => {
        setReset(!reset)
    }

    return (
        <div>
            <div>
                <TemplateTable columsTable={colums} dataTable={dataComment} dataPage={7} deleteFunc={deleteComment} handleGetList={handelGetList} />
            </div>
        </div>
    )
}

export default CommentAdminComponent