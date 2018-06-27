import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject'
import uuid from 'uuid'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
      projects : []
    }
  }
  
  componentWillMount() {
    this.setState ({
      projects :[
        {
          id:uuid.v4(),
          title: 'business website',
          category:'web design'
        },
        {
          id:uuid.v4(),

          title: ' android app ',
          category:'android design'
        },
        {
          id:uuid.v4(),

          title: 'aladin the mystery',
          category:'fiction'
        }
      ]
    })

  }
  

  handleAddProject(project)

{
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects})
}

deleteProject(id){
  let projects = this.state.projects;
   let index =projects.findIndex(x =>x.id === id);
   projects.splice(index,1)
    this.setState({projects:projects});

}

  
  render() {
    return (
      <div className="App">
      <AddProject addProject ={this.handleAddProject.bind(this)} />
      <h1>Default Projects</h1>
   <Projects project ={this.state.projects} onDelete ={this.deleteProject.bind(this)}/>
      </div>
    );
  }
}

export default App;
