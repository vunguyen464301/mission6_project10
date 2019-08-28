import React from 'react';
import fetch from 'isomorphic-unfetch';
const task=({data})=>{
    console.log(data)
    var showData =data.map((d, index) => {
      return <div>
         {d._id} : {d.name}
      </div>
    });
    return <div>{showData}</div>
  }
task.getInitialProps = async ({ req }) => {
    const res = await fetch('http://localhost:4000/task')
    const json = await res.json()
    return { data: json }
  }
export default task;