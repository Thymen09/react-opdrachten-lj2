import Book from './Book'

const BookList = () => {
    return ( 
        <section>
        <Book title= "Interesting Facts For Curious Minds" author= "Jordan Moore" image="./images/book-1.png"/>
        <Book title= "Atomic Habits" author= "James Clear" image="./images/book-2.png"/>
        <Book title= "Fairy Tale" author= "Stephen King" image="./images/book-3.png"/>
        </section>
     );
}
 
export default BookList;