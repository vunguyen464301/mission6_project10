import React from 'react';
import fetch from 'isomorphic-unfetch';
const showData=({data})=>{
    return <div>name : {data.name}</div>
  }
const getdata=()=>{
    fetch()
}
const user=()=>{
    return(
        <div>
            User
        </div>
    )
}

export default user;