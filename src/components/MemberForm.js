import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { createMember } from "../store/actions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

const FormMember = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const membersSlug = useParams().membersSlug;
  const members = useSelector((state) => state.members);
  const updatedMember = members.find((e) => e.slug === membersSlug);
  const [member, setMember] = useState(
    updatedMember ?? { firstName: "", lastName: "", img: "" }
  );
  const handleChange = (event) => {
    setMember({ ...member, [event.target.title]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (updatedMember) {
      dispatch(updatedMember(member));
    } else {
      dispatch(createMember(member));
      history.push("/members");
    }
  };
  //   const handleSubmit = (event) => {
  //     event.preventDefault();

  //     dispatch(createMember(member));
  //     history.push("/members");

  //     // resetForm();
  //   };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Enter your First Name:</Form.Label>
        <Form.Control
          type="text"
          title="firstName"
          value={member.firstName}
          onChange={handleChange}
          placeholder="Enter your First Name........."
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Enter your Last Name</Form.Label>
        <Form.Control
          type="text"
          title="lastName"
          value={member.lastName}
          onChange={handleChange}
          placeholder="Enter your Last Name............."
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Enter the title of image:</Form.Label>
        <Form.Control
          type="text"
          title="img"
          value={member.img}
          onChange={handleChange}
          placeholder="Enter the image of Memper"
        />
      </Form.Group>
      <Button type="submit"> Submit </Button>
    </Form>
  );
};
export default FormMember;
