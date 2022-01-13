import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Registration = () => {
  const [registration, setRegistration] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [completedForm, setcompletedForm] = useState(false);

  const handleInput = (key, value) => {
    setRegistration({ ...registration, [key]: value });
  };

  const theFormIsValidated = () => {
    let validForm = false;
    if (
      registration.name.length >= 2 &&
      registration.surname.length >= 3 &&
      registration.password.length >= 8 &&
      registration.password === registration.confirmPassword
    ) {
      validForm = true;
    }
    return validForm;
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    setcompletedForm({
      completedForm: true,
    });
  };

  return (
    <div className="d-flex flex-column align-items-left justify-content-left">
      {completedForm ? (
        <>
          <h1>
            <strong>Your registration is successful!</strong>
          </h1>
          <p>{registration.name}</p>
          <p>{registration.surname}</p>
          <p>{registration.email}</p>
        </>
      ) : (
        <>
          <h1>Registration form</h1>
          <Form onSubmit={handleRegistration}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                required
                onChange={(e) => handleInput("name", e.target.value)}
                value={registration.name}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                required
                onChange={(e) => handleInput("surname", e.target.value)}
                value={registration.surname}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                required
                onChange={(e) => handleInput("email", e.target.value)}
                value={registration.email}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                required
                onChange={(e) => handleInput("password", e.target.value)}
                value={registration.password}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                type="password"
                required
                onChange={(e) => handleInput("confirmPassword", e.target.value)}
                value={registration.confirmPassword}
              />
            </Form.Group>
            <Button type="submit" disabled={!theFormIsValidated()}>
              Submit
            </Button>
          </Form>
        </>
      )}
    </div>
  );
};

export default Registration;
