import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
const SingleBooks= ()=> {
  const {id}= useParams();
  const [bookInfo, setBookInfo]= useState({});
  useEffect(()=> {
    const getSingleBook= async()=> {
      const response= await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`);
      const bookDetails= await response.json();
      setBookInfo(bookDetails.book);
      
    }
    getSingleBook();
  }, [])
  return (
   <>
    <h2>{bookInfo.title}</h2>
    <h2>{bookInfo.author}</h2>
    <h2>{bookInfo.description}</h2>
    {console.log(bookInfo)}
    </>
  )
}
export default SingleBooks