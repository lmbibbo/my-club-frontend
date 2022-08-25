import React from "react";

class User extends React.Component {
    constructor(props){
        this.state = {
            name: null,
            logued: false,
        };
    }

    render() {
        let status;
        if (this.state.logued) {
            status = this.state.name; 
        } else {
            status = "";
        }

        return (
            <div className="status">{status}</div>
        )
    }
}

export default User;