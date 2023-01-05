import React from 'react'

export default function Third() {
    var data=["1","2","3","4"];
  return (
    <div>
      {data.map((da)=>{
        return <p>{da}</p>
      })};
    </div>
  )
}
