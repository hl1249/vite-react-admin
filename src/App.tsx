// import AppRouter from "@/router/appRouter";
// import store from "@/store";
import { useState ,  useEffect } from "react";
import React from "react";
// import { Provider } from "react-redux";


import {Button} from 'antd'
// function App() {
//   return (
//     <>
//         <Provider store={store}>
//           <AppRouter />
//         </Provider>
//     </>
//   );
// }
function Bpp(){

  useEffect(()=>{
    console.log("子组件usEffect执行")
    return () =>{
      console.log('B组件卸载了')
    }
  },[])
  return (
    <>  
      <p>Bpp组件</p>
    </>
  )
}

function App(){

 
  const myRef = React.useRef<HTMLParagraphElement>(null)
  const [count, setCount] = useState(0)
  const [name, setName] = useState('张三')

  useEffect(()=>{
    // console.log(myRef.current)
    console.log("count花生变化")


  },[count])

  useEffect(()=>{
    // console.log(myRef.current)
    console.log("name花生变化")

  },[name])

  useEffect(()=>{
    // console.log(myRef.current)
    console.log("name或者count花生变化")

  },[name,count])

  const changeCount = ()=>{
    setCount(count+1)
  }

  const changeName = () => {
    setName('李四') 
  }
  return (
    <>  
      {/* <p ref={myRef}>我是父组件{count}</p> */}
      <p>{name}</p>
      <p>{count}</p>
      <Button onClick={changeCount}>修改count</Button>
      <Button onClick={changeName}>修改name</Button>
     
    </>
  )
}

export default App;
