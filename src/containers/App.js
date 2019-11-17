import React, { Component } from "react";
import Header from "../components/Header/Header";
import ShelfList from "../components/ShelfList/ShelfList";
import uniqid from "uniqid";

class App extends Component {
  state = {
    projects: [
      {
        id: uniqid(),
        name: "Omnifood",
        text: "This is my very first HTML/CSS project. Initially for animations were used jQuery, but recently I have changed it with Vanilla JS(pure JS). So it became super fast.",
        doesShow: false
      },

      {
        id: uniqid(),
        name: "Natours",
        text: "My next HTML/CSS project to master CSS3, Sass, Flexbox and grid.<br>(ongoing)",
        doesShow: false
      },

      {
        id: uniqid(),
        name: "Forkify",
        text: `Forkify is a real world project created within th course. Via ajax calls and 3rd party api you can get over 1000.000 food recipes. Logic was created via Vanilla JS(pure JS) using webpack and babel.(ongoing)`,
        doesShow: false
      },

      {
        id: uniqid(),
        name: "Pig Game",
        text: `Small and cool game created with Vanilla JS(pure JS). Rules are very simple to roll button how many time you want, but be careful from 1, in that case, you will be lost everything you have collected. If you want to save the current score, push button hold. And the turn is the next player's.`,
        doesShow: false
      },

      {
        id: uniqid(),
        name: "Budgety",
        text: `This will help you calculate your monthly income and expenses. To create this app was used JavaScript IIFE module pattern(to keep code private) and prototype inheritance.`,
        doesShow: false
      }
    ]
  };


  componentDidMount() {
    this.state.projects.map(project => {
      const img = new Image();
      img.src = `../assets/img/${project.name.toLowerCase()}`
    })
    console.log("componentDidMount")
  }



  showContent = id => {
    //Find project's index
    let projectIndex = this.state.projects.findIndex(project => project.id === id);
    // Copy projects from the state
    let projects = [...this.state.projects]
    let doesShow = !this.state.projects[projectIndex].doesShow;
    console.log(doesShow)
    // If doesShow true, show items
    if (projects[projectIndex].doesShow) {
      projects[projectIndex].doesShow = doesShow
    } else {
      //If false set all object's doesShow to false, after show the clicked project
      projects.forEach(el => {
        el.doesShow = false;
      })
      projects[projectIndex].doesShow = doesShow
    }
    this.setState({ projects: projects })
  };




  render() {
    return (
      <header className="App">
        <Header />
        <ShelfList
          projects={this.state.projects}
          showContent={this.showContent}
        />
      </header>
    );
  }
}

export default App;
