import React from 'react';
import List from './List';
import RealNavbar from './RealNavbar'
import './Navbar.css';



function Navbar({ click }) {
	return (
		<div className="proto">
			<img 
			className="table"
			style={{padding:"0px 15px"}}
			src={require("./reallogo.png")} />
			<input className="button"type="submit" value="Subscribe Free"/>
			<RealNavbar />
	</div>)
}

export default Navbar