import Home from "./components/Home"
import SingleBooks from "./components/SingleBook"
import NavBar from "./components/NavBar"
import Auth from "./components/Auth"
import {Routes, Route} from "react-router-dom"
const App=()=> {
  

  return (
    <>
    <NavBar />
   
    <Routes>
      <Route path="/" element={<h1>Welcome to Robin's World of Books!</h1>}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/home/:id" element={<SingleBooks />}></Route>
      <Route path="/login" element={<Auth />}></Route>
    </Routes>
    </>
  )
}
export default App

