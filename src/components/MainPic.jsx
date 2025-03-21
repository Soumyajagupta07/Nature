import React from 'react';
// import '../styles/mainPic.css';
import saplings from '../images/Nature/Sapling.jpg'

function MainPic() {
  return (
    <div className="mainPic">
      <img src={saplings} alt="sapling" />
      <div className="overview">
        <p>Anything and Everything to MAKE and MAINTAIN your Garden ...</p>
      </div>
    </div>
  );
}

export default MainPic;