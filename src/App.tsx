import AppRouter from "@/router/appRouter";
import store from "@/store";
import { stat } from "fs";
import { Component ,FC, useState} from "react";
import { Provider } from "react-redux";

// function App() {
//   return (
//     <>
//         <Provider store={store}>
//           <AppRouter />
//         </Provider>
//     </>
//   );
// }

interface BppProps{
  name:string;
  changeName:(name:string)=>void;
}

interface BppState{}

class Bpp extends Component<BppProps,BppState> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <>
       <p>我是子元素{this.props.name}</p>
        <input type="text" onChange={(e)=>{
          console.log(e)
          this.props.changeName(e.target.value)
        }}/>
      </>
    );
  }
  componentWillUnmount(){
    console.log("子组件被卸载了")
  }

   shouldComponentUpdate(per,cur){
    console.log('当 props 或 state 发生变化时，shouldComponentUpdate() 会在渲染执行之前被调用。',per,cur)
    return null
  }
}

interface AppProps {
  show: string;
}

interface AppState {
  show: boolean;
  children_name:string;
}

class App extends Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      show:true,
      children_name:"子组件-子组件值"
    }
  }

  render() {

    let  {show} = this.state
    const changeShows = ()=>{
      this.setState({
        show:!show
      })
    }

    const changeName = (name:string)=>{
      this.setState({
        children_name:name
      })
    }

    
    return (
      <>
       <p onClick={changeShows}>我是父元素</p>
       {show && <Bpp name={this.state.children_name} changeName={changeName}></Bpp>}
      </>
    );
  }
}

export default App;
