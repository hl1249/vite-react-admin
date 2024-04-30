import React,{useState } from 'react';

import {Drawer,Button,message } from 'antd'
import {
  SettingOutlined
} from '@ant-design/icons';

import mode_1 from '@/assets/images/mode-1.png';
import mode_2 from '@/assets/images/mode-2.png';
import mode_3 from '@/assets/images/mode-3.png';

const modeList = [
  {
    mode:"default",
    img:mode_1
  },
  {
    mode:'leftRight',
    img:mode_2
  },
  {
    mode:'topBottom',
    img:mode_3
  }
]
const Setting = () => {

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const [mode,setMode] = useState('default')

  const setLayout = (item:any) => {
    setMode(item.mode)
    message.success('切换成功')
  }
  
  return(
     <div className="setting">
      <Button type="primary" onClick={showDrawer} style={{height:'auto',padding:"8px"}}>
      <SettingOutlined  style={{fontSize: '30px'}} />
      </Button>
     
      <Drawer width={300} title="设置布局" onClose={onClose} open={open}>
        <h1 style={{fontWeight:'bold',fontSize:'16px'}}>选择布局</h1>
        <div className='mode-box'>
        {modeList.map((item,index)=>{
          return(
            <div className={item.mode === mode ? "mode-item active" : "mode-item"} key={index} 
            onClick={()=>{setLayout(item)}}>
              <img src={item.img} alt="" />
            </div>
          )
        })}
        </div>
      </Drawer>
     </div>
  )
}

export default Setting