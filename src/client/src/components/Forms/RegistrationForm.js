import { Form, Button } from "react-bootstrap";
import { Formik } from "formik";

import { register } from "../../utils/fetchAPI";

function RegistrationForm(props) {
  return (
    <div>
      <div className="text-center">
        <h2>
          <i className="bi bi-starts"></i>Register
        </h2>
        <div className="lead">Create your account</div>
      </div>

      <hr />

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          //confirmPassword: "",
        }}
        validate={(values) => {
          let errors = {};

          if (!values.firstName) {
            errors.firstName = "First Name Required";
          }

          if (!values.lastName) {
            errors.lastName = "Last Name Required";
          }

          if (!values.email) {
            errors.email = "Email Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          if (!values.password) {
            errors.password = "Password Required";
          }

          // if (!values.confirmPassword) {
          //   errors.confirmPassword = "Confirm password Required";
          // }

          // if (values.password !== values.confirmPassword) {
          //   errors.confirmPassword = "passwords are not matching";
          // }

          return errors;
        }}
        onSubmit={(user, { setSubmitting }) => {
          register(user)
            .then(() => {
              // props.onSuccess();
              console.log("success");
            })
            .catch((err) => {
              // props.onFailure(err);
              console.log("failed");
            })
            .finally(() => {
              setSubmitting(false);
              console.log("submitted");
            });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          submitForm,
          isValid,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter your first name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
              />
              {errors.firstName && touched.firstName && (
                <Form.Text className="text-danger">
                  {errors.firstName}
                </Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter your last name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
              />
              {errors.lastName && touched.lastName && (
                <Form.Text className="text-danger">{errors.lastName}</Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && (
                <Form.Text className="text-danger">{errors.email}</Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && (
                <Form.Text className="text-danger">{errors.password}</Form.Text>
              )}
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="confirmPassowrd">
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <Form.Text className="text-danger">
                  {errors.confirmPassword}
                </Form.Text>
              )}
            </Form.Group> */}

            <Button
              variant="primary"
              type="submit"
              onClick={() => submitForm()}
              disabled={isSubmitting | (touched && !isValid)}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>

      <hr />

      <a href="/login" className="text-decoration-none">
        Already have an account?
      </a>
    </div>
  );
}

export default RegistrationForm;
