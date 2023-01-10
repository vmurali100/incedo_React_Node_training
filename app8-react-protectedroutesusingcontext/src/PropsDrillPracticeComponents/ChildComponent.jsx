import UserComponent from "./UserComponent";

const ChildComponent = (props)=>
{
    console.log(props);
    console.log(props.users.users);
    return <>
           <h1>Welcome to Child Component!!!</h1>
           <hr/>
           <ul>
           {props.users.users.map((user,i)=>(<li key={i}>{user}</li>))}
           </ul>
           <hr/>
           <UserComponent users={props} />
           </>
};

export default ChildComponent;