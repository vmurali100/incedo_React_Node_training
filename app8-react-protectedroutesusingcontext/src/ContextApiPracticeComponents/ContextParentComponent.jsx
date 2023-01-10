import React, { Component } from 'react';
import { UsersContextConsumer,UsersContext } from './ContextApi';

class ContextParentComponent extends Component {
    static contextType = UsersContext;
    render() {
        console.log(this.context);
        return <>
            {/* <UsersContextConsumer>
                {(value) => {
                    console.log(value); */}
                    <h1>Welcome to UserContextConsumer in class parentContextComponent</h1>
                    <hr/>
                    <ul>
                        {this.context.users.map((user, i) => (<li key={i}>{user}</li>))}
                        <hr/>
                        {this.context.users2.map((user, i) => (<li key={i}>{user}</li>))}</ul>
                {/* }} */}

            {/* </UsersContextConsumer> */}
        </>
    };
};

export default ContextParentComponent;