const form = document.querySelector(".login-form");

const handleSubmit = (event) => {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
    }  
    const userData = {
        Email: email.value,
        Password: password.value,
    };
    console.log(userData);
  event.currentTarget.reset();
}
form.addEventListener("submit", handleSubmit);