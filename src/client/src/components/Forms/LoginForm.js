import { Form, Button } from "react-bootstrap";

function LoginForm() {
  return (
    <div>
      <div className="text-center">
        <h2>
          <i className="bi bi-starts"></i>Login
        </h2>
        <div className="lead">Please enter your credentials</div>
      </div>

      <hr />
      <Form className="">
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <hr />

      <a href="/register" className="text-decoration-none">Create account?</a>
      <br />
      <a href="/forgotPassword" className="text-decoration-none">Forgot password?</a>
    </div>
  );
}

export default LoginForm;
