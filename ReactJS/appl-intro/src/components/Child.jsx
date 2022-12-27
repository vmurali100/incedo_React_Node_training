import MyContext from "../context/Context"

const { Component, Fragment } = require("react");

class Child extends Component
{
    render()
    {
        return <Fragment>
           <h3>{JSON.stringify(this.context.name)}</h3>
            <button onClick={()=>this.context.toggle("Helllooo")}>Set Message</button>

        </Fragment>
    }
}
Child.contextType=MyContext;
export default Child;