import React from 'react';

function ContactForm(props) {
  return (
    <form>
      <p>Contact Agent</p>
      <input type="text" name="name" placeholder="Name" />
      <input type="phone" name="phone" placeholder="Phone" />
      <input type="email" name="email" placeholder="Email" />
      <button onClick={props.onSubmit}>Contact Agent</button>
    </form>
  );
}

export default ContactForm
