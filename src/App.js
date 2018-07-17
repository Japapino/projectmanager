import React, { Component } from 'react';
import './App.css';
import Projects from './Components/Projects'; 
import AddProject from './Components/AddProject'

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
          title: 'Business Website', 
          category: 'Web Design'
        }, 
        {
          title: 'Social App', 
          category: 'Mobile Development'
        }, 
        {
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

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects projects={this.state.projects} />
      </div> 
    );
  }
}

export default App;
