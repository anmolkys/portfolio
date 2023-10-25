import React from "react";
import {AiOutlineMail} from "@react-icons/all-files/ai/AiOutlineMail"
export default function Contact(){
    return(
    <div className="contact-wrapper">
      <div className='navigator'><a href='/'><h3 className>About</h3></a><a href='/contact'><h3 className='about'>Contact</h3></a></div>
      <br />
      <div className="contact mail"><AiOutlineMail></AiOutlineMail> <h4 className="textm">feimoxin@outlook.com</h4></div>
      <br />

    </div>
    )
}