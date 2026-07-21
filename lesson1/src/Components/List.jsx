import React from "react";

function List() {
  let items ;
  if( items==null){
    return(<p>no item foudn</p>)
  }
  else{
    return (
    <div className="list-group">

    {items.map((i) => ( <li className="list-group-item"> {i}</li> ))}
    
    </div>
 
   
  );}

  
}

export default List;