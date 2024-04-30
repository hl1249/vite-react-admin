import MaxScreen from "./maxScreen";
import { Flex, Layout, Button } from "antd";
const { Header, Content } = Layout;
import { useSelector, useDispatch } from "react-redux";

import CustomSider from "./components/sider";
import Main from "./components/main";

import { setLayoutIsOpen } from "@/store/action";
const FlexStyle = {
  height: "100%",
};


const leftRightLayout = () => {
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
      <Flex vertical={true} style={FlexStyle}>
        <Header>
          <Button onClick={toggleLayout}>
            点击修改store.layoutIsOpen属性{layoutIsOpen ? "true" : "false"}
          </Button>
        </Header>

        
          <Layout>
            <CustomSider width="240px" collapsed={layoutIsOpen}></CustomSider>
            <Content className="contetn">
              <Main></Main>
            </Content>
          </Layout>
      </Flex>
    </MaxScreen>
  );
};

export default leftRightLayout;
