import React from "react";
import "./Icard.css";
export default function Icard({ head, body ,headsize}) {
  return (
    <div className="card">
      <p  className= {headsize==1 ?   'head' : 'nothead'} >{head}</p>
      <p className="body"> {body}</p>
    </div>
  );
}
