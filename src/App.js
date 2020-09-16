import React,{useState} from 'react';
import Client from './components/Clients';
import Form from './components/Form'

import './App.css';

const App = () => {
  const [clients, SetNewClients] = useState([
      {id:1, nom:'LEE'},
      {id:2, nom:'FALL'},
      {id:3, nom:'GUEYE'}
  ])
  
 const handleAdd = client => {
    const upclients = [...clients];
    upclients.push(client)
    SetNewClients(upclients)
  }
 const handleDelete = (id) => {
    const upcl = [...clients];
    const index = upcl.findIndex((client)=>client.id === id)
    upcl.splice(index,1)
    SetNewClients(upcl)

  }

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
          {clients.map(client => (
            <Client details={client} onDelete={handleDelete}/>
            ))}</table>
          <Form onClientAdd={handleAdd}/>
        </div>
      );
    }


export default App;
