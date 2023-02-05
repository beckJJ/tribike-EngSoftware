window.addEventListener("load", () => {
    function sendData() {
      const XHR = new XMLHttpRequest();
  
      // Bind the FormData object and the form element
      const FD = new FormData(form);
  
      // Define what happens on successful data submission
      XHR.addEventListener("load", (event) => {
        alert(event.target.responseText);
      });
  
      // Define what happens in case of error
      XHR.addEventListener("error", (event) => {
        alert('Oops! Something went wrong.');
      });
  
      // Set up our request
      XHR.open("POST", "http://localhost:8082/usuario");
      XHR.setRequestHeader("Content-type", "application/json");
      
      data='{\"username\": \"';
      data=data+document.getElementById("sign_user").value;
      data=data+'\",    \"email\" : \"';
      data=data+document.getElementById("sign_mail").value;
      data=data+'\",    \"password\": \"';
      data=data+document.getElementById("sign_pwd").value;
      data=data+'\"}';
      console.log(data);
      XHR.send(data);

      // The data sent is what the user provided in the form
      //XHR.send(FD);
    }
  
    // Get the form element
    const form = document.getElementById("signup-form");
  
    // Add 'submit' event handler
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      sendData();
    });
  });