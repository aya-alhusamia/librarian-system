import { DeleteButtonStyled } from "../../style";
import { FaBeer } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteBook } from "../../store/actions";
const DeleteButton = (props) => {
  const dispatch = useDispatch();
  return (
    <DeleteButtonStyled onClick={() => dispatch(deleteBook(props.bookID))}>
      <FaBeer />
    </DeleteButtonStyled>
  );
};
export default DeleteButton;
