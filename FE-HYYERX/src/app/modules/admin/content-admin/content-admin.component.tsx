import { Fragment, useEffect, useState } from "react";
import TemplateTable from "../common/template-table/template-table.component";
import { Form, Input, Select } from "antd";
import { Option } from "antd/es/mentions";
import { createContent, deleteContent, getAllContent, searchContent, updateContent } from "./service/content.service";


const ContentAdmin = () => {
    const [column, setColumn] = useState<any>([]);
    const [reset, setReset] = useState<boolean>(true);
    const [dataContent, setDataContent] = useState<any>([]);
    useEffect(() => {
        getAllContent().then((res) => {
            setDataContent(res.data);
        });
    }, [reset]);
    useEffect(() => {
        const columTemp: any = []
        const title = ['', 'Nội dung hiển thị', 'Chức năng']
        if (dataContent.length > 0) {
            Object.keys(dataContent[0]).forEach((itemKey, key = 0) => {
                if (!['_id', '__v', 'updatedAt', 'createdAt'].includes(itemKey)) {
                    columTemp.push({
                        title: title[key++],
                        dataIndex: itemKey,
                        key: itemKey,
                    });
                }
            });
        }

        setColumn(columTemp)
    }, [dataContent])
    const handelGetList = () => {
        setReset(!reset);
    };
    return (
        <div>
            <TemplateTable
                dataTable={dataContent} setNewData={setDataContent} searchFunc={searchContent} columsTable={column} deleteFunc={deleteContent} changeFunc={updateContent} handleGetList={handelGetList} createFunc={createContent}
                formEdit={
                    <Fragment>
                        <Form.Item
                            label='Nội dung'
                            name='content'
                            rules={[{ required: true, message: 'Không được để trống!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Hiển thị nội dung"
                            name="hidden"
                            rules={[{ required: true, message: 'Không được để trống!' }]}
                        >
                            <Select placeholder="Lựa chọn hệ thống">
                                <Option value="Hiển thị">Hiển thị</Option>
                                <Option value="Ẩn">Ẩn</Option>
                            </Select>
                        </Form.Item>
                    </Fragment>
                }
            />
        </div>
    );
};


export default ContentAdmin