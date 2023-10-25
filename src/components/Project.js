import React from "react";
export default function Project({props}){
    return (
        <a href={props.link}>
        <li className='project'>
        <h4 className="title">{props.title}</h4>
        <p className="desc">{props.desc}</p>
      </li>
      </a>
    )
}