function userDetails(){
    let name = document.getElementById('name').value;
    let msg = document.getElementById('message').value;
    let Details = name+msg;
    return Details
}




function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "Hotel Vrindavan Palace",
    Password: "^r1nd@^@n",
    To: "vrindavanhotel.swm@gmail.com",
    From: document.getElementById('email').value,
    Subject: "New Contact Query",
    Body: userDetails(),
  }).then((message) => alert("Message sent successfully."));
}

const form = document.getElementById('form')
form.onsubmit =sendEmail()