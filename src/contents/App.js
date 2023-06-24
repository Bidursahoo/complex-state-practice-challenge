import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function changeValue(event){
    const {name , value} = event.target;


    //with spread Operator
    //
    //
    //
    setContact({
      ...contact,
      [name]:value
    })




    //without Spread Operator

    //
    //
    //
    // if(name === 'fName'){
    //   setContact({
    //     fName: value,
    //     lName: contact.lName,
    //     email: contact.email
    //   })
    // }else if(name === 'lName'){
    //   setContact({
    //     fName: contact.fName,
    //     lName: value,
    //     email: contact.email
    //   })
    // }else if(name === 'email'){
    //   setContact({
    //     fName: contact.fName,
    //     lName: contact.lName,
    //     email: value
    //   })
    // }
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={changeValue} name="fName" placeholder="First Name" value={contact.fName}/>
        <input onChange={changeValue} name="lName" placeholder="Last Name" value={contact.lName}/>
        <input onChange={changeValue} name="email" placeholder="Email" value={contact.email}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
