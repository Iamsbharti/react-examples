import React, { useState } from "react";
function UseStateHooksApp() {
  const [inputUserName, setUserName] = useState({
    firstName: "",
    lastName: ""
  });
  const [contactDetails, setContactDetails] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setUserName(prevInput => ({ ...prevInput, [name]: value }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    setContactDetails(prevContact => [...prevContact, inputUserName]);
  }
  const contact = contactDetails.map(contact => (
    <h2 key={contact.firstName}>
      {contact.firstName} {contact.lastName}
    </h2>
  ));
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter UserName"
          name="firstName"
          value={inputUserName.firstName}
          onChange={handleChange}
        />
        <hr />
        <input
          type="text"
          name="lastName"
          value={inputUserName.lastName}
          placeholder="Enter LastName"
          onChange={handleChange}
        />
        <hr />
        <button onClick={handleSubmit}>Add Contact</button>
      </form>
      {contact}
    </div>
  );
}
export default UseStateHooksApp;
