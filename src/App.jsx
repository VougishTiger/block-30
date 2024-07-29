import Home from "./components/Home"
import SingleBooks from "./components/SingleBook"
import {Routes, Route} from "react-router-dom"
const App=()=> {
  

  return (
    <>
   
    <Routes>
      <Route path="/" element={<h1>Welcome to Robin's World of Books!</h1>}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/home/:id" element={<SingleBooks />}></Route>
    </Routes>
    </>
  )
}
export default App

