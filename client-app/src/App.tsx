import React, { Component } from 'react';
import { Header, Icon, List } from 'semantic-ui-react'
import './App.css';
import {cars} from './demo';
import { CarItem } from './CarItem';
import axios from 'axios';

class App extends Component{
  state = {
    values:[]
  }

  componentDidMount(){
    axios.get('http://localhost:5000/api/values')
      .then((response) =>{
        this.setState({
          values: response.data
        })
      })
    this.setState({ 
      values:[{id:1, name:'value 101'},{id:2,name:'value 201'}]
    })
  }

  render(){
    return (
      <div className="App">
        <Header as='h2' icon='plug' content='Reactivities' />
        <List>
        {this.state.values.map((value: any) => (
              <List.Item key={value.id}>{value.name}</List.Item>
            ))}
        </List>
      </div>
    );
  }

}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



// const App : React.FC = () => {
//   return (
//     <div className="App">
//       <ul>
//         {cars.map((car) => 
//           //<li>{car.color},{car.model}</li>
//           <CarItem car={car} />
//         )}
//       </ul>
//     </div>
//   );
// }

export default App;
