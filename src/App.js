import React from 'react';
import axios from 'axios';
import './App.css';

export default class App extends React.Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=10`)
      .then(res => {
        const persons = res.data.results;
        this.setState({ persons });
      });
  }

  render() {
    return (
      <div className="App">
        <div className="header">User List</div>
        <div className="user-container">
          {this.state.persons.map(person => (
            <div key={person.login.uuid} className="user-card">
              <img src={person.picture.large} alt={person.name.first} className="user-image" />
              <div className="user-details">
                <div className="user-id"><strong>User ID/UUID:</strong> {person.login.uuid}</div>
                <div className="user-info"><strong>User Name:</strong> {person.login.username}</div>
                <div className="user-info"><strong>Gender:</strong> {person.gender.toUpperCase()}</div>
                <div className="user-info"><strong>Time Zone Description:</strong> {person.location.timezone.description}</div>
                <div className="user-info"><strong>Address:</strong> {person.location.street.number} {person.location.street.name}, {person.location.city}, {person.location.state}, {person.location.country}, {person.location.postcode}</div>
                <div className="user-info"><strong>Email:</strong> {person.email}</div>
                <div className="user-info"><strong>Birth Date and Age:</strong> {new Date(person.dob.date).toLocaleDateString()} ({person.dob.age})</div>
                <div className="user-info"><strong>Registered Date:</strong> {new Date(person.registered.date).toLocaleDateString()}</div>
                <div className="user-info"><strong>Phone:</strong> {person.phone}</div>
                <div className="user-info"><strong>Cell:</strong> {person.cell}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}