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
				<img width="800" height="420"src={this.state.imgUrl}/>
			</div>)
	}
}

export default Carousel