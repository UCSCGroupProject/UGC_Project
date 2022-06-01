import fetch from "unfetch";

// Checking the response and return
// If response = ok then return the payload taken from the REST Api
// If response != ok then return ApiException error object with rejection
const checkStatus = (response) => {
  if (response.ok) {
    return response;
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    response.json().then((e) => {
      error.error = e;
    });
    return Promise.reject(error);
  }
};

// Fetching data from REST Api
export const getData = () => fetch("/user/").then(checkStatus);

export const register = (user) =>
  fetch("/user/register", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(user),
  }).then(checkStatus);

export const login = (user) =>
  fetch("/user/login", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(user),
  }).then(checkStatus);
