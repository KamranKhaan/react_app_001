import React from 'react';
import './Pets.css';

function Pets(props) {
return (
<div className="App">
    
    <div><strong>{props.fishName}</strong> is my favorite fish<br/>
     <strong>{props.birdsName}</strong> is my favorite bird</div>
    
</div>
 );
}

export default Pets;