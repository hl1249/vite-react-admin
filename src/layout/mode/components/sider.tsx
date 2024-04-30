import { Layout, Menu, Button } from "antd";
import type { MenuProps } from "antd";
const { Sider } = Layout;
import { FC, useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import { useDispatch, useSelector } from "react-redux";

import { setLayoutIsOpen } from "@/store/action";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Navigation One", "1", <MailOutlined />, [
    getItem("Option 1", "11"),
    getItem("Option 2", "12"),
    getItem("Option 3", "13"),
    getItem("Option 4", "14"),
  ]),
  getItem("Navigation Two", "2", <AppstoreOutlined />, [
    getItem("Option 1", "21"),
    getItem("Option 2", "22"),
    getItem("Submenu", "23", null, [
      getItem("Option 1", "231"),
      getItem("Option 2", "232"),
      getItem("Option 3", "233"),
    ]),
    getItem("Submenu 2", "24", null, [
      getItem("Option 1", "241"),
      getItem("Option 2", "242"),
      getItem("Option 3", "243"),
    ]),
  ]),
  getItem("Navigation Three", "3", <SettingOutlined />, [
    getItem("Option 1", "31"),
    getItem("Option 2", "32"),
    getItem("Option 3", "33"),
    getItem("Option 4", "34"),
    getItem("Option 4", "34"),
    getItem("Option 4", "34"),
    getItem("Option 4", "34"),
    getItem("Option 4", "34"),
    getItem("Option 4", "34"),
    getItem("Option 4", "34"),
    getItem("Option 4", "34"),
    getItem("Option 4", "34"),
    getItem("Option 4", "34"),
    getItem("Option 4", "34"),
    getItem("Option 4", "34"),
    getItem("Option 4", "34"),
    getItem("Option 4", "34"),
    getItem("Option 4", "34"),
    getItem("Option 4", "34"),
    getItem("Option 4", "34"),
    getItem("Option 4", "34"),
    getItem("Option 4", "34"),
    getItem("Option 4", "34"),
    getItem("Option 4", "34"),
    getItem("Option 4", "34"),
    getItem("Option 4", "34"),
    getItem("Option 4", "34"),
    getItem("Option 4", "34"),
    getItem("Option 4", "34"),
    getItem("Option 4", "34"),
    getItem("Option 4", "34"),
    getItem("Option 4", "34"),
    getItem("Option 4", "34"),
    getItem("Option 4", "34"),
  ]),
];

interface LevelKeysProps {
  key?: string;
  children?: LevelKeysProps[];
}
const getLevelKeys = (items1: LevelKeysProps[]) => {
  const key: Record<string, number> = {};
  const func = (items2: LevelKeysProps[], level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        return func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};
const levelKeys = getLevelKeys(items as LevelKeysProps[]);

interface CustomSiderProps {
  width: string;
  collapsed: boolean;
}

const CustomSider: FC<CustomSiderProps> = ({ collapsed }) => {
  console.log("组件进行渲染");
  const [stateOpenKeys, setStateOpenKeys] = useState(["2", "23"]);
  const onOpenChange: MenuProps["onOpenChange"] = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1
    );
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);

      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      );
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
  };

  

  interface RootState {
    layout: {
      layoutIsOpen: boolean;
      // 其他 layout 相关的属性
    };
    // 其他 reducer 返回的状态属性
  }
  const dispatch = useDispatch();

  const layoutIsOpen = useSelector(
    (state: RootState) => state.layout.layoutIsOpen
  );
  const toggleLayout = () => {
    dispatch(setLayoutIsOpen(!layoutIsOpen));
  };
  return (
    <Sider className="sider" width={200} collapsed={collapsed}>
      <Menu
        triggerSubMenuAction="click"
        mode="inline"
        defaultSelectedKeys={["231"]}
        openKeys={stateOpenKeys}
        onOpenChange={onOpenChange}
        items={items}
        className="sider-content"
      />
      <Button className="expansion-contraction" onClick={toggleLayout}>{layoutIsOpen ? '展开' : '缩放'}</Button>
    </Sider>
  );
};

export default CustomSider;
