import MaxScreen from "./maxScreen";
import { Flex, Layout, Button } from "antd";
const { Header, Footer, Content } = Layout;
import { useSelector, useDispatch } from "react-redux";

import CustomSider from "./components/sider";

import { setLayoutIsOpen } from "@/store/action";
const FlexStyle = {
  height: "100%",
};

const DefaultLayout = () => {
  const dispatch = useDispatch();

  interface RootState {
    layout: {
      layoutIsOpen: boolean;
      // 其他 layout 相关的属性
    };
    // 其他 reducer 返回的状态属性
  }
  const layoutIsOpen = useSelector(
    (state: RootState) => state.layout.layoutIsOpen
  );
  const toggleLayout = () => {
    dispatch(setLayoutIsOpen(!layoutIsOpen));
  };

  return (
    <MaxScreen>
      <Flex style={FlexStyle}>
        <CustomSider width="240px" collapsed={layoutIsOpen}>
        </CustomSider>
        <Layout>
          <Header>
            <Button onClick={toggleLayout}>
              点击修改store.layoutIsOpen属性{layoutIsOpen ? "true" : "false"}
            </Button>
          </Header>
          <Content className="contetn"></Content>
          <Footer></Footer>
        </Layout>
      </Flex>
    </MaxScreen>
  );
};

export default DefaultLayout;
