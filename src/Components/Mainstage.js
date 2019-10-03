import React from 'react';
import "./Mainstage.css";
import Carousel from './Carousel';


class Mainstage extends React.Component {
	render() {
		return (
			<div className="mainstage">
				<Carousel />
			</div>)
	}
}

export default Mainstage