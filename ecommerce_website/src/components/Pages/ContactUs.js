import React from "react";
import classes from'./ContactUs.module.css'
const Contact  = (props)=>{
    async function formSubmitHandler(event) {
        event.preventDefault();
        const user = {
            Name: event.target[0].value,
            Email: event.target[1].value,
            Phone: event.target[2].value,
        };

        const response = await fetch('https://ecommercecontactuspage-default-rtdb.firebaseio.com/contacts.json',
        {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
}

    return(
        <div className={classes.div}>
            <form onSubmit={formSubmitHandler} className={classes.mainForm}>
                <div className={classes.control}>
                    <label htmlFor='title'>Name</label>
                    <input type='text' id='title'  />
                </div>
                <div className={classes.control}>
                    <label htmlFor='opening-text'>Email</label>
                    <input rows='5' id='opening-text' pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"  onInvalid={e => e.target.setCustomValidity('Enter a Valid Email ID')}></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor='date'>Phone Number</label>
                    <input type='number' id='date' maxLength={10} />
                </div>
                <button className={classes.buttonStyle}>Submit</button>
                </form>
        </div>
    );
};

export default Contact;