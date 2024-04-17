import React from "react";

function Contact() {
  return (
    <>
      <form className="h-screen p-1 relative overflow-hidden bg-back-taylor bg-cover">
        <div className="flex flex-col">
          <label htmlFor="name" className="hidden">
            Full Name
          </label>
          <input
            type="name"
            name="name"
            id="name"
            placeholder="Full Name"
            className="w-40 border-2 border-black rounded-lg"
          />
        </div>
      </form>
    </>
  );
}

export default Contact;
