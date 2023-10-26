// import { useState } from "react";
import "./App.css";
import image from "./assets/image 1.png";
import arrow from "./assets/Arrow 1.png";
import btn from "./assets/btn.svg";
import Navbar from "./component/navbar/Navbar";


function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="body app">
        <Navbar/>
       
        <div className="firstslide">
          <div className="firsttext">
            <p className="beone">
              Be <span style={{ fontWeight: "400" }}>one</span> of the first 3{" "}
              <br /> people to buy this <br />{" "}
              <span style={{ fontWeight: "400", color: "#BFC200" }}>NFT</span>
            </p>
            <p className="andget">
              and get a 10$ bonus along with the <br /> purchase
            </p>
            <div className="priceimg">
              <div>
                <p className="theprice">
                  the price of <br /> this NFT : 23 $ <img src={arrow} alt="" />
                  18 $ 
                </p>
              </div>
              <div>
                <img className="btnimg" src={btn} alt="" />
              </div>
            </div>
            <div className="collectionArtistCommunity">
              <div className="CAC">
                <li>Collections</li>
                <li>Artist</li>
                <li>Community</li>
              </div>
              <div className="number">
                <li>450K+</li>
                <li>320K+</li>
                <li>15K+</li>
              </div>
            </div>
          </div>
          <div className="image">
            <img className="img" src={image} alt="" />
          </div>
        </div>
      </div>

     
     
    </>
  );
}

export default App;
