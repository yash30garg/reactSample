import React, { Component } from 'react'
import ProjectItem from './ProjectItem';
 class Projects extends Component {

    handleOnDelete(id)
    {
      this.props.onDelete(id);
    }
  render() {
      let projectItems;
    if(this.props.project){
projectItems= this.props.project.map(data => {
  
    return (
        <ProjectItem dataa = {data} key ={data.title} onDelete ={this.handleOnDelete.bind(this)}/>
    )
})
    }

    
    
    
    return (
    <div className = "Projects">
         
     {projectItems}
      </div>
    )
  }
}

export default Projects;