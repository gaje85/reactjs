function doPOST(url = "https://reqres.in/api/users", payload = {}) {
  const options = {
    method: "POST",
    body: JSON.stringify(payload),
    credentials: "same-origin"
  };
  return fetch(url, options)
    .then(res => handleResponse(res));
}

function doGET(url = "https://reqres.in/api/users/2") {
  const options = {
    method: "GET"
  };
  return fetch(url, options)
    .then(res => handleResponse(res));
}

function handleResponse(fetchResponse) {
  if(fetchResponse.status > 299) {
    throw new Error(`Something went wrong - ${fetchResponse.status}`);
  }

  return fetchResponse.json();
}

export {
  doPOST,
  doGET
}
