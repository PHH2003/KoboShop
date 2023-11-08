import { Button, Descriptions, DescriptionsProps, Modal, Space, Table, Tag, Typography } from 'antd'
import { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react'


const { Title } = Typography
const TemplateOrder = () => {
    interface DataType {
        key: string;
        name: string;
        age: number;
        address: string;
        tags: string[];
    }
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const columns: ColumnsType<DataType> = [
        {
            title: 'Mã order / ngày',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Trạng thái',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Tổng số lượng mua',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Tổng tiền',
            key: 'tags',
            dataIndex: 'tags',
            render: (_, { tags }) => (
                <>
                    {tags.map((tag) => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button type="primary" onClick={showModal}>
                        Xem chi tiết
                    </Button>
                </Space>
            ),
        },
    ];

    const items: DescriptionsProps['items'] = [
        {
            key: '1',
            label: 'Họ Và Tên',
            children: 'Phan Huy Hiệp'
        },
        {
            key: '2',
            label: 'Số Điện Thoại',
            children: '0971080029'
        },
        {
            key: '3',
            label: 'Tỉnh / Thành Phố',
            children: 'Hải Dương'
        },
        {
            key: '4',
            label: 'Quận / Huyện',
            children: 'Tứ Kỳ'
        },
        {
            key: '5',
            label: 'Xã',
            children: 'An Thanh'
        },
        {
            key: '6',
            label: 'Thông Tin Chi Tiết',
            children: 'Ái Quốc - An Định'
        }
    ]

    const columListProduct = [
        {
            title: "Tên Sản Phẩm",
            key: "1",
            render: (_: any, record: any) => <div>sản phẩm a</div>
        },
        {
            title: "Ảnh Sản Phẩm",
            key: "2",
            render: (_: any, record: any) => <div><img className='w-[50px]' src="https://res.cloudinary.com/df3xmajf8/image/upload/v1698547496/ECMA/j5xnwm2jk2d1klx5jyxg.jpg" alt="" /></div>
        },
        {
            title: "Giá Sản Phẩm",
            key: "3",
            render: (_: any, record: any) => <div>200 000 VNĐ</div>
        },
        {
            title: "Số Lượng Mua",
            key: "4",
            render: (_: any, record: any) => <div>2</div>
        }
    ]

    const data: DataType[] = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sydney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        },
    ];
    return (
        <div>
            <div>
                <Table columns={columns} dataSource={data} />;
            </div>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} width={900} footer={null} onCancel={handleCancel}>
                <Descriptions title="Thông Tin Khách Hàng" items={items} />
                <Title level={4}>Sản Phẩm Khách Hàng mua</Title>
                <div>
                    <Table columns={columListProduct} dataSource={columListProduct} />
                </div>
            </Modal>

        </div>
    )
}

export default TemplateOrder