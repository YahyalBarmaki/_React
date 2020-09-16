import React, { useState } from 'react'
import '../App.css';

 const Form = (props) => {
   const [newClient,setNewClient] = useState("")
   
      const handleChange = (event) => {
        setNewClient(event.currentTarget.value)
      }
      const handleSubmit = (event) => {
        event.preventDefault()
        const id = new Date().getTime();
        const nom = newClient;
        //const client = {id,nom};
       props.onClientAdd({id,nom})
       setNewClient({newClient:""})
     }
    
        return (
            <div>
                <form onSubmit={handleSubmit}>
                  <fieldset>
                   <label for="nom">Ajouter un nom :</label>
                     <input value={newClient} onChange={handleChange} type="text" placeholder="nom"/> 
                     <button className="addBtn">Ajouter</button>
                  </fieldset>
                </form>
            </div>
        )
    }

export default Form