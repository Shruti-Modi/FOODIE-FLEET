import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    //const{location,contact}=this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h1>Count:{count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h2>Shruti</h2>
        <h3>Location:{this.props.location}</h3>
        <h4>Contact:{this.props.contact}</h4>
      </div>
    );
  }
}
export default UserClass;
