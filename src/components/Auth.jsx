import {useState} from "react";
const Auth= ()=> {
  const [showLogin, setShowLogin]= useState(true);
  const [emailInput, setEmailInput]= useState("");
  const [passwordInput, setPasswordInput]= useState("");
  const [firstNameInput, setFirstNameInput]= useState("");
  const [lastNameInput, setLastNameInput]= useState("");

  const registerUser= async(event)=> {
    console.log(event.target);
    console.log(passwordInput);
    console.log(firstNameInput);
    console.log(lastNameInput);
    const response= await fetch ("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register", 
      
    )
  }
  return (
    <>
    <form>
      <input value={firstNameInput} onChange={(event)=>{setFirstNameInput(event.target.value)}} placeholder="First Name"/>
      <input value={lastNameInput} onChange={(event)=>{setLastNameInput(event.target.value)}} placeholder="Last Name"/>
      <input value={emailInput} onChange={(event) =>{ setEmailInput(event.target.value) }} type="email" placeholder="email" />
      <input value={passwordInput} OnChange={(event)=>{setPasswordInput(event.target.value) }} type="password" placeholder="password" />
      {
        showLogin ? <button>Log In!</button>:<button onClick={registerUser}>Register!</button>
      }
    </form>
    
    {
      showLogin ? 
      <p>Not a Member? <button onClick={()=> {setShowLogin(false)}}>Register here!</button></p> :
      <p>Already a Member?<button onClick={()=> {setShowLogin(true)}}>LogIn Here!</button></p>
    }
    
    </>
  )
}
export default Auth