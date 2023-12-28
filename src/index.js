import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const books = [
  {
    title: "Atomic Habits: An Easy & Proven Way",
    author: "James Clear",
    img: "https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/I/81YkqyaFVEL._AC_UL600_SR600,400_.jpg",
    id: 1
  },
  {
    title: "Fourth Wing (The Empyrean, 1)",
    author: "Rebecca Yarros",
    img: "https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/I/91n7p-j5aqL._AC_UL600_SR600,400_.jpg",
    id: 2
  },
  {
    title: "Dinner Tonight: 100 Simple, Healthy Recipes",
    author: "Alex Snodgrass",
    img: "https://images-na.ssl-images-amazon.com/images/W/MEDIAX_792452-T2/images/I/811HITbWChL._AC_UL600_SR600,400_.jpg",
    id: 3
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const {author, title, img} = props
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<BookList />);
