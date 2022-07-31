export default class Contact {
    fullName = "";
    email = "";
    subject = "";
    body = "";
    send() {
        console.info(this.formatMessage());
        document.getElementById("formInfo").innerHTML = ("not sending emails yet...");
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