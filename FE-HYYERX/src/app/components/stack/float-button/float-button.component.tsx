import React from 'react';
import { MessageOutlined} from '@ant-design/icons';
import { FloatButton } from 'antd';

const Float: React.FC = () => (
  <div className=''>
    <FloatButton
    //   shape="square"
      type="primary"
      style={{ right: 24}}
      icon={<MessageOutlined />}
    />
  </div>
);

export default Float;