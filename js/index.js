const formInfo = document.getElementById("formInfo");
const contactForm = document.getElementById("contactForm");
let hasJob = true;

if (hasJob) {
    showMessage("Thanks for visiting, I am currently employed.");
} else {
    showMessage("Please look around, I am looking for a position.");
}

/// let today = new Date("08/01/2022"); -- MM/DD YYYY format
let today = new Date();
let dayOfWeek = today.getDay();

if (dayOfWeek === 0 || dayOfWeek === 6) {
    showMessage("Since it is the weekend, please be patient with my returning your email.");
}

function showMessage(message) {
    // const formInfo = document.getElementById("formInfo");
    formInfo.innerHTML = ("<p>" + message + "</p>");
}

// function clearMessage(){
//     formInfo.innerHTML = "";
// }

contactForm.addEventListener("submit", sendMessage);
function sendMessage() {
    event.preventDefault();
    const contact = new Contact(contactForm);
    //showMessage("Sending your message... Thank you: "+ contact.fullName);
    contact.send();
}

const experiences = document.getElementsByClassName("experience");
for (let x = 0; x < experiences.length; x++) {
    const item = experiences[x];
    item.addEventListener("mouseenter", function (event) {
        event.target.style = "background-color: #888888";
    });

    item.addEventListener("mouseleave", function (event) {
        event.target.style = "";
    });
}

class Contact {
    fullName = "";
    email = "";
    subject = "";
    body = "";
    send() {
        console.info(this.formatMessage());
        showMessage("not sending emails yet...");
    }

    formatMessage() {
        return `To: ${this.fullName}
                Email: ${this.email}
                Subject: ${this.subject}
                Body: ${this.body}`;
    }

    constructor(form) {
        this.fullName = form.elements["fullName"].value;
        this.email = form.elements["email"].value;
        this.body = form.elements["msg"].value;
        this.subject = form.elements["subject"].value;
    }
};

