import React from 'react';
import Navbar from '../Components/Navbar';
import Teams from '../Components/Teams';
import RealNavbar from '../Components/RealNavbar'
import Mainstage from '../Components/Mainstage'
class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  homeClick = () => {
    console.log("home")
  }

  render() {
    return (
      <div>
        <Navbar click={this.homeClick} />
        <h1 className="headline">Need the latest NFL highlights, news, and scores?</h1>
        <Mainstage />
        <Teams />
      </div>)
  }
}

export default App;

// make more responsive
// compress picture
// clean up folders