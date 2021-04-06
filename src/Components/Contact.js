import React, { Component } from "react";
import { Redirect } from "react-router";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRedirect: false,
      fDay:"Monday",
    
      
    };
  }

  submitForm = (event) => {
    event.preventDefault();
    this.setState({
      isRedirect: true,
    });
  };

  isChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value
    this.setState({
      [inputName]: inputValue,
    });
    
  };
  isFileChange = (event) => {
    const fileName= event.target.files[0].name
    this.setState({
      fFile : fileName
    });
    
  };

  render() {
    if (this.state.isRedirect === true) {
      console.log(this.state);
      return <Redirect to="/" />;
    }
    return (
      <div>
        <header className="masthead news">
          <div className="container">
            <div className="row">
              <div className="col-lg my-auto">
                <div className="header-content mx-auto">
                  <h1 className="mb-5 text-center">Contact Information</h1>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section id="contact">
          <div className="container">
            {/* Contact Section Heading*/}
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
              Contact Me
            </h2>
            {/* Icon Divider*/}
            {/* Contact Section Form*/}
            <div className="row">
              <div className="col-lg-8 mx-auto">
                {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19.*/}
                <form
                  id="contactForm"
                  name="sentMessage"
                  noValidate="novalidate"
                >
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                      <label>Name</label>
                      <input
                        onChange={(event) => this.isChange(event)}
                        name="fName"
                        className="form-control"
                        id="name"
                        type="text"
                        placeholder="Name"
                        required="required"
                        data-validation-required-message="Please enter your name."
                        aria-invalid="false"
                      />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                      <label>Email Address</label>
                      <input
                        onChange={(event) => this.isChange(event)}
                        name="fEmail"
                        className="form-control"
                        id="email"
                        type="email"
                        placeholder="Email Address"
                        required="required"
                        data-validation-required-message="Please enter your email address."
                      />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                      <label>Phone Number</label>
                      <input
                        onChange={(event) => this.isChange(event)}
                        name="fPhone"
                        className="form-control"
                        id="phone"
                        type="tel"
                        placeholder="Phone Number"
                        required="required"
                        data-validation-required-message="Please enter your phone number."
                      />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                      <label>Select Day</label>
                      
                        <select value={this.state.fDay} onChange={(event) => this.isChange(event)} className="form-control" name="fDay" id="">
                          <option value="Monday">Monday</option>
                          <option value="Tuesday">Tuesday</option>
                          <option value="Friday">Friday</option>
                          <option value="Sunday">Sunday</option>
                         
                        </select>
                      
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                      <label>Choose File</label>
                     
                        <input onChange={(event) => this.isFileChange(event)}  type="file" className="form-control-file" name="fFile"/>
  

                         
                       
                      
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                      <label>Message</label>
                      <textarea
                        onChange={(event) => this.isChange(event)}
                        name="fMess"
                        className="form-control"
                        id="message"
                        rows={5}
                        placeholder="Message"
                        required="required"
                        data-validation-required-message="Please enter a message."
                        defaultValue={""}
                      />
                      <p className="help-block text-danger" />
                    </div>
                  </div>
                  <br />
                  <div id="success" />
                  <div className="form-group">
                    <button
                      className="btn btn-primary btn-xl"
                      id="sendMessageButton"
                      type="submit"
                      onClick={(event) => this.submitForm(event)}
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
