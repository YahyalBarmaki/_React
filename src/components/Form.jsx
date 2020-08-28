import React, { Component } from 'react'
import '../App.css';
export default class Form extends Component {
    state = {
        newClient:""
    }
   
      handleChange = (event) => {
        this.setState({
          newClient : event.currentTarget.value
        })
      }
      handleSubmit = (event) => {
        event.preventDefault()
        const id = new Date().getTime();
        const nom = this.state.newClient;
        //const client = {id,nom};
       this.props.onClientAdd({id,nom})
       this.setState({
        newClient:""
       })
     }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                  <fieldset>
                   <label for="email">Ajouter un nom :</label>
                     <input value={this.state.newClient} onChange={this.handleChange} type="text" placeholder="nom"/> 
                     <button className="addBtn">Ajouter</button>
                  </fieldset>
                </form>
            </div>
        )
    }
}
