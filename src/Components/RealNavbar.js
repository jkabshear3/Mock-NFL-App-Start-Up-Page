import React, { Component } from "react";
import "./RealNavbar.css"
const items = [
  <div><button className="hex" value="News">News</button></div>,
  <div><button className="hex"value="Scores">Scores</button></div>,
  <div><button className="hex"value="Playoffs">Playoffs</button></div>,
  <div><button className="hex"value="Tickets">Tickets</button></div>,
  <div><button className="hex"value="Charity">News</button></div>,
  <div><button className="hex"value="Contact">Contact</button></div>
];
const schoolBus = items.map((item) => {
  return <div style={{height: "auto"}}>{item}</div>
})
 
class RealNavbar extends Component {
  render() {
    return (
      
          
            <div className="dog">{schoolBus}</div>
         
      
    );
  }
}
 
export default RealNavbar;