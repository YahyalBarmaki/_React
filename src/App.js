import React from 'react';
import Client from './components/Clients';
import Form from './components/Form'

import './App.css';

class App extends React.Component {

  state = {
    clients : [
      {id:1, nom:'LEE'},
      {id:2, nom:'FALL'},
      {id:3, nom:'GUEYE'},
    ]
  }
 
  handleAdd = client => {
    const clients = [...this.state.clients];
    clients.push(client)
    this.setState({
      clients,
    })
  }
  handleDelete = (id) => {
    const cl = [...this.state.clients];
    const index = cl.findIndex((client)=>client.id === id)
    cl.splice(index,1)
    this.setState({
      clients:cl,
    })

  }
render(){
    const title = "Liste des clients"
      return(
        <div className="App">
          <h1>{title}</h1>
          <table>
          <tr>
            <td className="td1">ID</td>
            <td className="td1">NomComplet</td>
            <td className="td1">Action</td>
         </tr>
          {this.state.clients.map(client => (
            <Client details={client} onDelete={this.handleDelete}/>
            ))}</table>
          <Form onClientAdd={this.handleAdd}/>
        </div>
      );
    }
}

export default App;
