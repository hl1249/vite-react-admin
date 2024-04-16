import { Flex, Layout, Button } from "antd";
import MaxScreen from "./maxScreen";
const { Header, Footer, Sider, Content } = Layout;
import { useSelector, useDispatch } from 'react-redux';
import { useContext } from "react";
import {nameContext} from "@/App"
const FlexStyle ={
  height:"100%",
}

const DefaultLayout = () => {
  
  let tips = useContext(nameContext);
  interface RootSate{
    count: number;
  }
  console.warn("我拿到App.tsx 中 nameContext的值是",tips)

  const count = useSelector((state:RootSate) => state.count);
  const dispatch = useDispatch();
  const add = () => {
    dispatch({ type: 'INCREMENT' });
  }
  return (
    <MaxScreen>
      <Flex style={FlexStyle}>
      <Sider width="240px">
        我是左侧菜单栏
        <Button onClick={add}>点击修改store.count属性{count}</Button>
      </Sider>
      <Layout>
        <Header></Header>
        <Content className="contetn"></Content>
        <Footer></Footer>
      </Layout>
      </Flex>
    </MaxScreen>
  );
};

export default DefaultLayout;
