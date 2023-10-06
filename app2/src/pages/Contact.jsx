import React from "react";



function Contact() {
  return (
    <div className="container">
<br /><br />
<form name="contact" method="post" netlify>
          <p>
            <label>Name: <input type="text" name="name"/></label>
          </p>
          <p>
            <label>Email: <input type="email" name="email"/></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit" className="button">Send</button>
          </p>
        </form>
    </div>
  );
}

export default Contact;
