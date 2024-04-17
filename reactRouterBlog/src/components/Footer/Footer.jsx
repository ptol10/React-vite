import React from "react";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-red-300 w-auto flex flex-col justify-center items-center h-14">
      <p className="font-normal">
        Copyright &copy; https://theswiftagency.com/
      </p>
      <Link to="https://thehill.com/wp-content/uploads/sites/2/2019/08/swifttaylor_getty082819.jpg?w=960&h=540&crop=1">
        Picture Credits: The Swift Agency
      </Link>
    </footer>
  );
}

export default Footer;
