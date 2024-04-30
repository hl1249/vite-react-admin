import React,{useState } from 'react';

import {Drawer,Button } from 'antd'
import {
  SettingOutlined
} from '@ant-design/icons';

const Setting = () => {

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  
  return(
     <div className="setting">
      <Button type="primary" onClick={showDrawer} style={{height:'auto',padding:"8px"}}>
      <SettingOutlined  style={{fontSize: '30px'}} />
      </Button>
     
      <Drawer title="设置布局" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
     </div>
  )
}

export default Setting