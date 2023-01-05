import React,{useState} from 'react'
function Test() {

  const fruits = [
    "apple","mango","pineapple","watermelon","orange"
  ];

  const [searchList, setSearchList] = useState(fruits);

  const SearchingText = (event) => {
    const filterValues = fruits.filter(
        (item) =>item.indexOf(event.target.value) !== -1
      );
    if (event.target.value === "") {
      setSearchList(fruits);
      return;
    }
    
    setSearchList(filterValues);
  };
  return (
    <div>
     
        <input  type="text" name="search" onChange={SearchingText} />
      
      {searchList &&
        searchList.map((item, i) => (
          <div key={i}>{item}</div> 
        ))}
    </div>
  );
}

export default Test;





// import React from 'react'
// const Test=()=>{
//     var arr_of_5_items=[1,2,3,4,5]
//     return(
//     <div>
//         {arr_of_5_items.map((element)=><h2>{element}</h2>)}

//     </div>
//     )
// }

// export default Test;










// import React,{useState} from 'react'
// const Test=()=>{
    
//     const [count,setcount]=useState(0)
//     const increment=()=>{
//         setcount(count+1)

//     }
//     const decrement=()=>{
//         setcount(count-1)

//     }
//     return(
//         <div>
//             <h1>{count}</h1>
//             <button onClick={increment}>Increment</button>
//             <button onClick={decrement}>Decrement</button>
//         </div>
//     )
// }
// export default Test;