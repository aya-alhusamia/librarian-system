import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { createBook, updateBook } from "../store/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

const FormBook = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const bookSlug = useParams().bookSlug;
  const books = useSelector((state) => state.books);
  const updatedBook = books.find((e) => e.slug === bookSlug);

  const [book, setBook] = useState(
    updatedBook ?? {
      title: "",
      author: "",
      image: "",
    }
  );
  const handleChange = (event) => {
    setBook({
      ...book,
      [event.target.title]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (updatedBook) {
      dispatch(updatedBook(book));
    } else {
      dispatch(createBook(book));
      history.push("/books");
    }

    // resetForm();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Enter the title of Book:</Form.Label>
        <Form.Control
          type="text"
          title="title"
          value={book.title}
          onChange={handleChange}
          placeholder="Enter the title of Book"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Enter the of author:</Form.Label>
        <Form.Control
          type="text"
          title="author"
          value={book.author}
          onChange={handleChange}
          placeholder="Enter the author of Book"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Enter the title of image:</Form.Label>
        <Form.Control
          type="text"
          title="image"
          value={book.image}
          onChange={handleChange}
          placeholder="Enter the image of Book"
        />
      </Form.Group>
      <Button type="submit"> Submit </Button>
    </Form>
  );
};
export default FormBook;
