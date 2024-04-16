import { ReactNode, FC, CSSProperties } from "react";

const maxScreenStyle: CSSProperties = {
  position: "absolute",
  height: "100%",
  width: "100%",
};

interface maxScreenProp {
  children: ReactNode;
}

const MaxScreen: FC<maxScreenProp> = ({ children }) => {
  return <div style={maxScreenStyle}>{children}</div>;
};

export default MaxScreen;
