import { useState } from "react";
import "./Contact.css"

function Contact({addResponse}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  function setDataToForm(event) {
    const newFormData = {...form}
     newFormData[event.target.name] = event.target.value;
     setForm(newFormData);
  }

  function handleSubmit(event) {
    event.persist()
    event.preventDefault();
    addResponse(form)
  }
  return(
    <form className="input-form">
      <input
      name="name"
      type="text"
      placeholder="Name"
      onChange={(event) => {setDataToForm(event)}}
      value={form.name}
      />
      <input
      name="message"
      type="text"
      placeholder="Your Message Here"
      onChange={(event) => {setDataToForm(event)}}
      value={form.message}
      />
      <input
      name="email"
      type="email"
      placeholder="Email"
      onChange={(event) => {setDataToForm(event)}}
      value={form.email}
      />
      <button type="submit" onClick={handleSubmit}>Send Message</button>
    </form>
  )
}

export default Contact;