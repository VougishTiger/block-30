import {Link} from "react-router-dom"
const NavBar= ()=> {
  return (
    <>
    <Link to="/home">Home</Link><br/>
    <Link to="/login">LogIn/Register</Link>
    </>
  )
}
export default NavBar