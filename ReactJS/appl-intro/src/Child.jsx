const { Component, Fragment } = require("react");

export default class Child extends Component
{
    render()
    {
        return <Fragment>
            <button onClick={()=>this.props.setMessage("Hello")}>Set Message</button>
        </Fragment>
    }
}