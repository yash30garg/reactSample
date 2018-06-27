import React, { Component } from 'react'

 class ProjectItem extends Component {
   deleteProject(id){
     this.props.onDelete(id);
   }
  render() {
      
    return (
        <ul className ="list-group">
      <li className =" list-group-item ProjectItem">
    
        {this.props.dataa.title} -{this.props.dataa.category} <a href ="#" onClick ={this.deleteProject.bind(this,this.props.dataa.id)}>x</a>
      </li>
      </ul>
    )
  }
}
export default ProjectItem;