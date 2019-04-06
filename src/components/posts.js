import React from "react";
//import { Link } from "react-router-dom";

const Posts = () => {
  // const ids = [
  //     {id:'1',name:'Post 1'},
  //     {id:'2',name:'Post 2'},
  //     {id:'3',name:'Post 3'}
  // ]

  // const list = ids.map( item => {
  //     return (
  //         <span key={item.id}>
  //             <Link to={item.id}>{item.name}</Link><br/>
  //         </span>
  //     )
  // })

  return [
    <div key="1">Hello </div>,
    <div key="2">i am </div>,
    <div key="3">a react app</div>

    // <div>
    //   <Link to="/posts/1">Post 1</Link>
    //   <br />
    //   <Link to="/posts/2">Post 2</Link>
    //   <br />
    //   <Link to="/posts/3">Post 3</Link>
    //   <br />
    // </div>
  ];
};

export default Posts;
