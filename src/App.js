import React from 'react';
import Pets from './Pets';
import Logo from './betta.png';
import Logos from './lorikeet.png';

function App() {
    return (
    <div className="App">
      <div>
        <h1 id="Topic">| MY FAVORITE PETS |</h1>
          <p>I like Two types of Pets, which are
          Birds and Aquatic Pets
          <br/>Total {10+10} are Listed Aside</p>
        <hr/>
          <img src={Logo} alt='Betta Fish' />
          <img src={Logos} alt='Parakeet' />
        <hr/>
        <p>Github: (KamranKhaan)</p>
      </div>
              
      <div>  
        <Pets birdsName="Cockatoos" fishName="Gold Fish" qtyBirds="8" qtyFishes="8" total="16"/>
        <Pets birdsName="Macaws" fishName="Beta Fish"/>
        <Pets birdsName="Cockatiels" fishName="Star Fish"/>
        <Pets birdsName="Grey Parrot" fishName="Trout Fish"/>
        <Pets birdsName="Amazon" fishName="Shrimps"/>
        <Pets birdsName="Lorikeet" fishName="Parrot Fish"/>
        <Pets birdsName="LoveBirds" fishName="Molly Fish"/>
        <Pets birdsName="Eclectus" fishName="Guppy Fish"/>
        <Pets birdsName="Finches" fishName="Neon Tetra"/>
        <Pets birdsName="Canary" fishName="Carp Fish"/>
      </div>  

    </div>
  );
}

export default App;