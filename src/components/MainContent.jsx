import React from "react";
import saplings from '../images/Nature/Sapling.jpg'
import '../styles/style.css'
 
// const MainContent = () => {
//   return (
//     <main className="main-content">
//       <h1 className="image-overlay-text ">Anything and Everything to MAKE and MAINTAIN your Garden...</h1>
//       <img src={saplings} alt="sapling" className="image-container" />
//     </main>
//   );
// };
 
// export default MainContent;

//import React from "react";
//import "./MainContent.css"; // Import CSS file
 
const MainContent = () => {
  return (
    <div class="mainPic">
    <img src={saplings} alt="sapling"></img>
    <div class="overview">
        <p>Anything and Everything to MAKE and MAINTAIN your Garden ...</p>
    </div>
</div> 
  );
};
 
export default MainContent;