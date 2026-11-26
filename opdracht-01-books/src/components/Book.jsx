const Book = ({title, author, image}) => {
    return (
        <section>
          <h1>{title}</h1>
          <h2>{author}</h2>
          <img src={image} alt=""  />
        </section>
    );
}
 
export default Book;