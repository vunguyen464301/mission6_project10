import React from 'react';
import '../css/header.css'
class Header extends React.Component{
    render(){
        return(
<div className="container demo">
<div className="content">
   <div id="large-header" className="large-header">
      <canvas id="demo-canvas"></canvas>
      <h1 className="main-title"><span className="thin">Explore</span> Space</h1>
   </div>
</div>
</div>
        )
    }
}

export default Header;

{/* <div className="container demo">
<div className="content">
   <div id="large-header" className="large-header">
      <canvas id="demo-canvas"></canvas>
      <h1 className="main-title"><span className="thin">Explore</span> Space</h1>
   </div>
</div>
</div> */}