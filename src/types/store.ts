import { LayoutMode } from "./layout"


export interface componentsVisible {
  footer: boolean
  topMenu: boolean
}

export default interface State {
  layout: LayoutMode[]
  componentsVisible: componentsVisible
}
