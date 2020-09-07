import React,{ Component } from 'react';
import CardList  from '../components/CardList';
import SearchBox  from '../components/SearchBox';
import Scroll from '../components/Scroll';
import'./App.css';


class App extends Component {
	constructor() {
		super()
		this.state = {	
			robots: [],
	        searchfield: ''
	   }
	}


    componentDidMount() {
    	fetch('http://jsonplaceholder.typicode.com/users')
    	.then(response=> response.json())
    	.then(users => {});    	
    }


	onSearchChange= (event) => {
		this.setState({ searchfield: event.targer.value })         
  	}
	render() {
		const { robots, searchfield } = this.state;
	   const filteredRobots = robots.filter(robot =>{
         return robot.name.toLowerCase(searchfield.toLowerCase());
		})
	    return !robots.length ?
	   	<h1>Loading</h1> :
	   	(
		<div className='tc'>
		   <h1 classNmae= 'f1'>Robotfriends</h1>
		   <SearchBox searchChange={this.onSeachChange}/>
		   <Scroll>
		     <CardList robots={filteredRobots} />
		   </Scroll>
		</div>
      );	
  }
}  

export default App;

