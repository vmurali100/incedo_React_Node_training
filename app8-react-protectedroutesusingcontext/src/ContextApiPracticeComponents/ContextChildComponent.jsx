import { UsersContextConsumer } from "./ContextApi";
import { UseCustomContext } from "./ContextApi";

const ContextChildComponent = ()=>{
    const context = UseCustomContext();
    console.log(context);
    return <>
            <ul>
                {context.users.map((user,i)=>(<li key={i}>{user}</li>))}
                {context.users2.map((user,i)=>(<li key={i}>{user}</li>))}
            </ul>
           </>
};

export default ContextChildComponent;