import { Flex, Layout } from "antd";
import MaxScreen from "./maxScreen";
const { Header, Footer, Sider, Content } = Layout;

const FlexStyle ={
  height:"100%",
}

const DefaultLayout = () => {
  return (
    <MaxScreen>
      <Flex style={FlexStyle}>
      <Sider width="240px">
        我是左侧菜单栏
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
