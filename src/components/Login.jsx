import React, { useRef, useState } from "react";

function Login() {
  // const [isLoggedIn, setisLoggedIn] = useState(false);

  // const [name, setName] = useState("")

  // const firstnameRef = useRef()
  // const lastnameRef = useRef()

  // function submitName(event) {
  //   event.preventDefault()
  //   setName(firstnameRef.current.value + " " + lastnameRef.current.value)
  // }

  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact((prev) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prev.lName,
          email: prev.email
        };
      }
      if (name === "lName") {
        return {
          fName: prev.fName,
          lName: value,
          email: prev.email
        };
      }
      if (name === "email") {
        return {
          fName: prev.fName,
          lName: prev.lName,
          email: value
        };
      }
    });
  }

  return (
    // <div className="container">
    //   <h1>Hello {name}</h1>
    //   <input ref={nameRef} type="text" placeholder="Whats your name" />
    //   <button onClick={submitName} onMouseOver={(e)=> e.target.style.backgroundColor = "black"} onMouseOut={(e)=> e.target.style.backgroundColor = "white"}>Submit</button>
    // </div>

    // <div className="container">
    //   <h1>Hello {name}</h1>
    //   <form>
    //     <input ref={firstnameRef} name="fName" placeholder="First Name" />
    //     <input ref={lastnameRef} name="lName" placeholder="Last Name" />
    //     <button onClick={submitName}>Submit</button>
    //   </form>
    // </div>

    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          value={contact.fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          value={contact.lName}
          name="lName"
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          value={contact.email}
          name="email"
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Login;
