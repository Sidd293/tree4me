import React, { useState } from "react";
import "./Screen.css";
import Card from "./Card.js";
function Screen() {
  const [data, setData] = useState([
    {
      head: "Raj Sakhuja Tuition Classes ",
      body: "Bring confidence with learning.",
      headsize: "1"
    },
    { head: "WHY should you send your child here?", body: "", headsize: "1" },
    {
      head: "* low fees compared to other institutes ",
      body: "",
      headsize: "0"
    },
    {
      head: "* Our Focus is more on Practical learning than Theoretical ",
      body: "",
      headsize: "0"
    },
    { head: "* Meticulous Faculty ", body: "", headsize: "0" }
  ]);
  return (
    <div className="screen">
      {data.map((datas) => (
        <Card
          head={datas.head}
          body={datas.body}
          headsize={datas.headsize}
        ></Card>
      ))}
    </div>
  );
}

export default Screen;
