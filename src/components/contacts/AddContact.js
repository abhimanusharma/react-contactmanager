import React, { Component } from "react";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contacts</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Name.."
                value={name}
                onChange={this.onChange}
                className="form-control form-control-lg"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email.."
                value={email}
                onChange={this.onChange}
                className="form-control form-control-lg"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                placeholder="Enter Phone.."
                value={phone}
                onChange={this.onChange}
                className="form-control form-control-lg"
              />
            </div>
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}
export default AddContact;
