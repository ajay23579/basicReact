import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'
import {useState, useEffect } from 'react'


function App() {
  const [count, setCount] =useState(0)
  // //first type
  // useEffect(()=>{
  //   console.log('NOt Count wala useEffect called')

  // },[])

  // //second type



  useEffect(()=>{
    console.log('Count wala useEffect called')

  },[count])

  // //third type
  // useEffect(()=>{
  //    console.log('3rd  useEffect called')
  // })




  return (
    <>
    <Navbar/>
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>


      <h1>Learning useEffect {count} </h1>
      <button onClick={()=>setCount(count + 1)}>+</button>








    </> 
  )
}

export default App
