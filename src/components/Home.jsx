import {useState, useEffect} from "react"; 
const Home= ()=> {
  const [allBooks, setAllBooks]= useState([]);
  useEffect(()=> {
    const getBooks= async()=> {
      const response= await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/`);
      const responseJson= await response.json();
      setAllBooks(responseJson.books.map(book=> book.title)); 
      console.log(responseJson)
    }
    getBooks();
  },[]);
  return (
    <>
    <h1>All Books!</h1>
    <ul>
      {allBooks.map((title, i) => (
        <li key={i}>{title}</li>
      ))}
    </ul>
   
    
    </>
  )
}
export default Home