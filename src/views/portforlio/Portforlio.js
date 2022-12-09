import React from "react";
import "./portforlio.style.scss";
import { Link } from "react-router-dom";
import Header from "../../components/header/header.component";
import ModalForProduct from "../../components/modal/modal.component";


//  import img
import homeWallet from "../../assets/img/project/wallet/home-screen.jpg"
import noteappImg from "../../assets/img/project/noteapp/thumbnail.png"
import storeSystemHome from "../../assets/img/project/storeSystem/thumbnail.png"
import portfolioHOme from "../../assets/img/project/portfolio/thumbnail.jpg"
import eCommerce from "../../assets/img/project/e-commerce/thumbnail.png"

// import e-commerce image
import ecomerImg1 from "../../assets/img/project/e-commerce/z3946381803476_3578b883a70a6b25cbf3b98115e7cf23.jpg"
import ecomerImg2 from "../../assets/img/project/e-commerce/z3946381851022_4aa5fa17a41334f947c980dd7f9e4f55.jpg"
import ecomerImg3 from "../../assets/img/project/e-commerce/z3946381868757_1aca6b0e77643711832c8bb9cbf689a6.jpg"


// import note app image
import noteImg1 from "../../assets/img/project/noteapp/z3943667927550_abdda32e5aa8843dd160ce6f15ccb413.jpg"
import noteImg2 from "../../assets/img/project/noteapp/z3943667927937_60d67ff74744809a11633315488b19f4.jpg"
import noteImg3 from "../../assets/img/project/noteapp/z3943667928514_aa3002a698b039fe1ec487ba5b319109.jpg"

// import portfolio image
import portfolioImg1 from "../../assets/img/project/portfolio/Screenshot_20221209_025737.png"
import portfolioImg2 from "../../assets/img/project/portfolio/Screenshot_20221209_025803.png"
import portfolioImg3 from "../../assets/img/project/portfolio/Screenshot_20221209_025829.png"


// import saleSystem image
import saleSystemImg1 from "../../assets/img/project/storeSystem/taohoadon_screen.png"
import saleSystemImg2 from "../../assets/img/project/storeSystem/thanhtoan_screen.jpg"
import saleSystemImg3 from "../../assets/img/project/storeSystem/home_screen.png"

// import wallet image
import eWallet1 from "../../assets/img/project/wallet/Screenshot_20221208_042822.png"
import eWallet2 from "../../assets/img/project/wallet/Screenshot_20221208_043051.png"
import eWallet3 from "../../assets/img/project/wallet/home_wallet.png"


import { useState } from "react";
const Portfolio = () => {
  const [headerData,setheaderData] =useState(
    {
      sub: 'My',
      name: 'Portfolio',
      under: 'works'
    }
  )
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };


const modalData = [{
  name : "e-wallet",
  desc : "E-wallet-based products with simulated functions that can be registered and used",
  created : "1 member.",
  role : "dev",
  fontEnd : "html,css,bootraps", 
  backEnd : "php", 
  tags : "git / ui / ux / php / html,css",
  image : [ecomerImg1,ecomerImg2,ecomerImg3],
  git : "https://github.com/kjnwjn/web_basic.git"

},
{
  name : "note app",
  desc : "Note app helps you record and organize a variety of important content and to-dos easily",
  created : "3 member.",
  role : "dev",
  fontEnd : "android", 
  backEnd : "android", 
  tags : "git / ui / ux / android / firebase",
  image : [noteImg1,noteImg2,noteImg3],
  git : "https://github.com/kjnwjn/NoteApp.git"
},
{
  name : "sale system",
  desc : "Notsmall-scale retail with a wide range of everyday items such as groceries, food, confectionery, soft drinks, ready-to-eat products, over-the-counter drugs, toiletries",
  created : "3 member.",
  role : "dev-backend",
  fontEnd : "vue", 
  backEnd : "node js", 
  tags : "git / ui / ux / node js / vue js",
  image : [saleSystemImg1,saleSystemImg2,saleSystemImg3],
  git : "https://github.com/truonggiangit793/store-system.git"
},
{
  name : "portfolio",
  desc : "Introduce yourself, strengths, contact for work",
  role : "dev",
  fontEnd : "react js",  
  tags : "git / ui / ux / react js",
  image : [portfolioImg1,portfolioImg2,portfolioImg3],
  git : "https://github.com/kjnwjn/portforlio-reactJs.git"
},
{
  name : "e-commerce",
  desc : "Web-store selling technology products",
  role : "dev",
  fontEnd : "vue js",
  backEnd : "node js",  
  tags : "git / ui / ux / php/ html,css",
  image : [eWallet1,eWallet2,eWallet3],
  git : "https://github.com/frgryr2001/CNPM.git"
}]
   
  // console.log(WalletProject)
  const [modalShow, setModalShow] = useState(false);
  const [dataModal, setModalData] = useState({});

  
  return (
    <>
      <div className="portfolio-container">
        <Header data={headerData}/>
        <ul className="portfolio-nav-list">
          <li className="portfolio-nav-item">HTML - CSS/JAVASCRIPT</li>
          <li className="portfolio-nav-item">REACT JS</li>
          <li className="portfolio-nav-item">PHP</li>
          <li className="portfolio-nav-item">ANDROID</li>
        </ul>

        <div className="portfolio-content">
          <ModalForProduct data={dataModal} show={modalShow} onHide={() => setModalShow(false)}/>

          <div className="portfolio-card" onClick={() => {setModalShow(true) ;setModalData(modalData[0])}}>
            <div
              className="card-wrap"
              style={{
                backgroundImage: `url(${homeWallet})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain"
              }}
            ></div>
            <h3>E-WALLET PRODUCT</h3>
          </div>
          <div className="portfolio-card" onClick={() => {setModalShow(true) ;setModalData(modalData[1])}}>
            <div
              className="card-wrap"
              style={{
                backgroundImage: `url(${noteappImg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain"
              }}
            ></div>
            <h3>ANDROID NOTE APP</h3>
          </div>
          <div className="portfolio-card" onClick={() => {setModalShow(true) ;setModalData(modalData[2])}}>
            <div
              className="card-wrap"
              style={{
                backgroundImage: `url("${storeSystemHome}")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain"
              }}
            ></div>
            <h3>SALE SYSTEM</h3>
          </div>
          <div className="portfolio-card" onClick={() => {setModalShow(true) ;setModalData(modalData[3])}}>
            <div
              className="card-wrap"
              style={{
                backgroundImage: `url("${portfolioHOme}")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain"
              }}
            ></div>
            <h3>PORTFOLIO</h3>
          </div>
          <div className="portfolio-card" onClick={() => {setModalShow(true) ;setModalData(modalData[4])}}>
            <div
              className="card-wrap"
              style={{
                backgroundImage: `url("${eCommerce}")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain"
              }}
            ></div>
            <h3>E-COMMERCE SYSTEM</h3>
          </div>
          
        </div>
        
      </div>
    </>
  );
};

export default Portfolio;
