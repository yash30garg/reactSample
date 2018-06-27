import React, { Component } from 'react'
import './../App.css'
import uuid from 'uuid'
class AddProject extends Component {
  constructor(){
    super();
    this.state ={
      newProject :{}
    }
  }
  static defaultProps = {
    categories:['Web Design' ,'android design','fiction']
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.refs.title.value === ''){
      alert('please enter something');
    }
      else{
        this.setState({
          newProject :{
            id:uuid.v4(),
            title:this.refs.title.value,
            category:this.refs.category.value
          }
        },function(){
          this.props.addProject(this.state.newProject);
        })
      }
    }
  
  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key ={category} >{category}</option>
    })
    return (
      <div>
        <h3>Add Project </h3>
        <div >
        <form onSubmit ={this.handleSubmit.bind(this)}>
          <div className ="form-group col-md-4">
          <label> Title</label> <br />
          <input type ="text" ref="title" className="form-control"/>
          </div>

          <div className ="col-md-4">
          <label> Category</label> <br />
         <select className="form-control " ref ="category">
         {categoryOptions}
         </select>
          </div>
    <br />
     
     
    <input className=" btn btn-primary" type ="submit" value="submit"/>
    
    
          </form>
            </div>
      </div>
    )
  }
}
export default AddProject; 





