import React, { Component } from 'react';
import PropTypes from 'prop-types'; 


class ProjectItem extends Component {

	deleteProject(id){
		// console.log('test')
		this.props.onDelete(id); 
	}
	//this delete project function first needs to be passed up to projects, then to the main app container
 	render() {
    return (
      <li className="Projects">
      <strong>{this.props.project.title}</strong>: {this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>

      </li> 
    );
  }
}

//validation
ProjectItem.propTypes = {
	project: PropTypes.object,
	onDelete: PropTypes.func
}

export default ProjectItem;