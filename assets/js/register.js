let signInForm = document.getElementById("signInForm");
let nameText = document.getElementById("nameText");
let emailText = document.getElementById("emailText");
let submitButton = document.getElementById("submitButton");

function afterSubmit(e) {
  e.preventDefault();

  let info = {
    name: nameText.value,
    email: emailText.value,
  };

  let deploymentID =
    "AKfycbzo7628RaIO6Gj6qObu6EGrh5rPAkwSoyNB1hcWKCNX1uPnbVUc6FKK";
  let url =
    "https://script.google.com/macros/s/AKfycbzo7628RaIO6Gj6qObu6EGrh5rPAkwSoyNB1hcWKCNX1uPnbVUc6FKK/exec";
  const form = document.forms["google-sheet"];

  //   fetch(url, {
  //     method: "POST",
  //     cache: "no-cache",
  //     redirect: "follow",
  //     body: new FormData(info),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //     });

  fetch(url, { method: "POST", body: new FormData(form) })
    .then((response) => alert("Thanks for Registration."))
    .catch((error) => console.error("Error!", error.message));
}

signInForm.addEventListener("submit", afterSubmit);

// const scriptURL =
//   "https://script.google.com/macros/s/AKfycbzo7628RaIO6Gj6qObu6EGrh5rPAkwSoyNB1hcWKCNX1uPnbVUc6FKK/exec";
// const form = document.forms["google-sheet"];

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   fetch(scriptURL, { method: "POST", body: new FormData(form) })
//     .then((response) => {
//       alert("Thanks for Contacting us..! We Will Contact You Soon...");
//       console.log(response);
//     })
//     .catch((error) => console.error("Error!", error.message));
// });
