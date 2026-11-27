//import useState
import { useState } from "react";
import Book from './Book'

const BookList = () => {
    const [books, setBooks] = useState([
    {title: 'book1', author: 'book2' },
    {title: 'book2', author: 'book3' },
    {title: 'book3', author: 'book4' },
    {title: 'book4', author: 'book5' },
  ]);
    return ( 
        <section>
{/* zoek in de cheat sheet naar map en dan naar het onderwerp map met objecten
plaats op deze plak de map functie die loopt door je books array */}
      <h2>Books:</h2>
      {books.map(book => (
       <Book title={book.title} author={book.author} image={book.image}/>
      ))}
        {/* <Book title= "Interesting Facts For Curious Minds" author= "Jordan Moore" image="./images/book-1.png"/>
        <Book title= "Atomic Habits" author= "James Clear" image="./images/book-2.png"/>
        <Book title= "Fairy Tale" author= "Stephen King" image="./images/book-3.png"/> */}
        </section>
     );
}
 
export default BookList;