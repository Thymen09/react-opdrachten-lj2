import { useState } from 'react';
import Movie from './components/Movie';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const [number, setNumber] = useState(10)
  const [book, setBooks] = useState([
    {title: 'book1', author: 'book2' },
    {title: 'book2', author: 'book3' },
    {title: 'book3', author: 'book4' },
    {title: 'book4', author: 'book5' },
  ]);


  return (
    <>

    {book.map(b => (
      <Movie title={b.title} author={b.author}/>
    ))}

    </>
  )
}

export default App
