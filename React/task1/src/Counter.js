import {useState} from "react";
function Counter(){
  const [num, setNum]= useState(0);
  const incNum =()=>{
    if(num<999)
    {
    setNum(Number(num)+1);
    }
  };
  const decNum = () => {
     if(num>0)
     {
      setNum(num - 1);
     }
  }
 let OnChange = (e)=>{
   setNum(e.target.value);
  }

   return(
    <>
    <div>
    
  
    <button type="button" onClick={decNum}>-</button>
  </div>
  <input type="text" class="form-control" value={num} onChange={OnChange}/>
  <div>
    <button type="button" onClick={incNum}>+</button>
  </div>


   </>
  );
}

export default Counter;