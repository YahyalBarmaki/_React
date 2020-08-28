import React, {Component} from 'react';
import '../App.css';
class Clients extends Component{
    
    render(){

        const{details,onDelete} = this.props

       return(
        <>
        
        <tr>
            <td>X</td>
            <td>{details.nom}</td>
            <td><button onClick={() => onDelete(details.id)} className="btn">Supprimer</button></td>
        </tr>
        </>
       )  
       
    }
}
export default Clients 