import { Container } from "react-bootstrap";

import Header from "../../components/Header/Header";
import LoginForm from "../../components/Forms/LoginForm";

function Login() {
  return (
    <div>
      <Header />
      <Container>
        <div className="row justify-content-center my-2">
          <div className="col-lg-5">
            <LoginForm />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Login;
