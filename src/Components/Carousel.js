import React from 'react';


class Carousel extends React.Component {
	constructor() {
		super()
		this.state={
			imgUrl: require("./barkley.jpg")
		}
	}
	render() {
		return (
			<div>
				<img src={this.state.imgUrl}/>
			</div>)
	}
}

export default Carousel