import React, { useState } from "react";

const Form = () => {
  const [error, setError] = useState(false);

  function verifInput(event) {
    const evenement = event.target.value;

    if (evenement.includes(" ")) {
      setError(<p>no spaces allowed</p>);
      return true;
    } else {
      setError(false);
      return false;
    }
  }
  function verifSubmit() {
    console.log(document.getElementById("check").value);
  }
  return (
    <div>
      <form onSubmit={verifSubmit}>
        <label>First Name</label>
        <input id="check" onChange={verifInput} type="text" name="FirstName" />
        <button type="submit">Submit</button>
      </form>
      {error}
    </div>
  );
};

export default Form;
