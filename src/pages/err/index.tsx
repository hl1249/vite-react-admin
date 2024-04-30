import {Button, Result} from 'antd';

interface ErrProps {
  status?: 403 | 404 | 500 | '403' | '404' | '500'
  errTitle?: string
  subTitle?: string
  [name: string]: any
}

const Err:React.FC<ErrProps> = ({type,status}) => {
  return(
    <Result
    status={status}
    title={type}
    style={{padding:'180px'}}
    subTitle="对不起，您访问的页面不存在."
    extra={<Button type="primary">返回</Button>}
  />
  )
}

export default Err;