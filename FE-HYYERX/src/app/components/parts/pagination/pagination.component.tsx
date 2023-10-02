import React from 'react';
import { Pagination } from 'antd';

const PaginationComponent: React.FC = () => <Pagination defaultCurrent={1} total={50} />;

export default PaginationComponent;