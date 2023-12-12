import React from "react";

function Contact() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="display-4 p-4 mb-3">Let's Connect...</div>

      <form className=" shadow p-4" style={{ minWidth: "700px" }}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label fw-bold">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-bold">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label fw-bold">
            Message
          </label>
          <textarea
            rows={5}
            className="form-control"
            id="message"
          />
        </div>
        <button type="submit" className="btn btn-outline-dark float-end ps-5 pe-5">
          <b>Send</b>
        </button>
      </form>
      <div className="mt-4">
        You can eiher fill out this form and conect with me through my socials.
      </div>
    </div>
  );
}

export default Contact;
