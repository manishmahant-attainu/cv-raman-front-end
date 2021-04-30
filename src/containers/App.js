import React from 'react';
import './App.css';

import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';

//In react <= 16.8v only way to use states was Class Based Components
//In react >= 16.8v states can be used in both Class and Function Based Component



class App extends React.Component {

  // state = {
  //   batch: 'CV Raman'
  // }

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      batch: 'CV Raman',
      headerTitle: 'Header',
      buttonText: 'Change Name',
      buttonStyle: {
        fontSize: '2rem',
        fontFamily: 'fantasy'
      }
    }
  }

  onClickHandler = (e) => {
    console.log(e);
    // this.state.batch = "CV";
    this.setState({
      batch: 'CV',
      headerTitle: 'Batch Name',
      buttonText: 'Changed!!',
      buttonStyle: {
        ...this.state.buttonStyle,
        fontFamily: 'monospace'
      }
    });
  }


  getBatch = () => {
    return this.state.batch;
  }

  //EVENTS    ====> Synthetic Events
  //onclick   ====> onClick

  //If parent's state or props get updated then all the child component will re-render

  onChangeHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    })
  }

  render() {
    console.log(this.state);
    console.log(this.props.pagetitle);
    return (
      <>
        <h1>{this.getBatch()}</h1>
        <button
          onClick={(e) => this.onClickHandler(e)}
          type="button"
          style={this.state.buttonStyle}
        >
          {this.state.buttonText}
        </button>
        <div style={{margin: '50px'}}>
          <div>
          <label>
            First Name: 
            <input
              name="firstName"
              type="text"
              value={this.state.firstName}
              onChange={this.onChangeHandler}
            />
          </label>
          </div>
          <div>
          <label>
            Last Name: 
            <input
              name="lastName"
              type="text"
              value={this.state.lastName}
              onChange={this.onChangeHandler}
            />
          </label>
          </div>
        </div>
        <Header title={this.state.headerTitle} />
        <Content />
        <Footer />
      </>
    );
  }
}

export default App;
