const Book = (props) => {
  const { author, title, img, number } = props;
  // console.log(props);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <span className="number">#{number + 1}</span>
    </article>
  );
};

export default Book;
