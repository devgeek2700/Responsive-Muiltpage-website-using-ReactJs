import { useState } from 'react';
import './App.css';

const Contact = () => {

  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    msg: "",

  });

  const InputEvent = (event) =>{
    const {name, value} =  event.target;

    setData((preval) => {
      return {
        ...preval,
        [name] : value,
      };
    });
  };

  const formSubmit = (e) =>{
    e.preventDefault();
    alert(
      `My Name is ${data.name}, My Moblie number is ${data.phone} and my email id is ${data.email}and my message is ${data.msg}` 
    );
  };

  return (
    <>
      <div className='my-2'>
        <h1 className='text-center'>Contact US</h1>
      </div>

      <div className='container contact_div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <form className='form_box' onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Username</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Username"
                  value={data.name }
                  name="name"
                  onChange={InputEvent}
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Moblie Number</label>
                <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Moblie Number"
                  value={data.phone }
                  name="phone"
                  onChange={InputEvent}
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
                  value={data.email }
                  name="email"
                  onChange={InputEvent}
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                  value={data.msg }
                  name="msg"
                  onChange={InputEvent}></textarea>
              </div>
              <button type="submit" class="btn btn-primary form_btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
