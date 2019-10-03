import React from 'react' 
import List from './List';

const peanut = List.map((item) => {
	return <div className="teams" style={{paddingRight: '2px'}}>
		 || {item.team } ||
	</div>
})

function Teams() {
	return (	
				<div style={{display: "flex", flexWrap: "wrap", flexDirection: "row", backgroundColor: "navy", color: "white", justifyContent: "center"}}>
					{peanut}
				</div>
		)
}

export default Teams