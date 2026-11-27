import { useState } from "react";
const Book = ({ title, author, image }) => {
  const [timesRead, setTimesRead] = useState(0);

  const incrementReadCount = () => {
    setTimesRead(timesRead + 1);
  };

  return (
    <>
      <section>
        <h1>{title}</h1>
        <h2>{author}</h2>
        <img src={image} alt="" />
        <button onClick={incrementReadCount}>Keer gelezen: {timesRead} </button>
      </section>
    </>
  );
};

export default Book;
