import React, { Component } from 'react';
import './App.css';
import Projects from './Components/Projects'; 
import AddProject from './Components/AddProject'
import uuid from 'uuid'

class App extends Component {
  constructor() {
    super(); 
    this.state = {
      projects: []
    }
  }

  componentWillMount(){ //lifecycle method, runs at begining. Use also for ajax calls
    this.setState({projects: [
        {
          id:uuid.v4(), //generates a new id
          title: 'Business Website', 
          category: 'Web Design'
        }, 
        {
          id:uuid.v4(),
          title: 'Social App', 
          category: 'Mobile Development'
        }, 
        {
          id:uuid.v4(),
          title: 'Ecommerce Shopping Cart', 
          category: 'Web Development'
        }
      ]})
  }

  //adds new project to state
  handleAddProject(project){
    // console.log(project); 
    let projects = this.state.projects;
    projects.push(project);
    this.setState({Projects:projects}) //reset state
  }

  handleDeleteProject(id){
    let projects = this.state.projects; 
    let index = projects.findIndex(x => x.id ===  id); 
    projects.splice(index, 1); 
    this.setState({projects:projects});  
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
      </div> 
    );
  }
}

export default App;
