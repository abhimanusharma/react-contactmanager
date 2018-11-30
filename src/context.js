import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Jon Doe",
        email: "jdoe@gmail.com",
        phone: "999999999"
      },
      {
        id: 2,
        name: "Karen Williams",
        email: "kwilliams@gmail.com",
        phone: "123231231"
      },
      {
        id: 3,
        name: "Henary Johnson",
        email: "hjonson@gmail.com",
        phone: "2345599900"
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
