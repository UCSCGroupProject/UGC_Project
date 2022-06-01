import { Container } from "react-bootstrap";

import Header from "../../components/Header/Header";
import RegistrationForm from "../../components/Forms/RegistrationForm";

function Registration() {
  return (
    <div>
      <Header />
      <Container>
        <div className="row justify-content-center my-2">
          <div className="col-lg-5">
            <RegistrationForm />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Registration;
