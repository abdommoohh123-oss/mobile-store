import "./Ourshop.css";
import banner1 from "../../assets/trogger/Homepage Hero Banner Desktop 950x250 (2)-5.jpg";
import banner2 from "../../assets/trogger/Homepage Hero Banner Desktop 950x250 (4)-3.jpg";
import banner3 from "../../assets/trogger/Homepage Hero Banner Desktop 950x250 (8)-3.jpg";
import banner4 from "../../assets/trogger/Homepage Hero Banner Desktop 950x250-4.png";
import banner5 from "../../assets/trogger/Homepage Hero Banner Desktop 950x250-66.jpg";
import PhoneList from "../Data/Data";
import MobileItem from "./MobileItem/MobileItem";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContextValue";

const Ourshop = () => {
  const { search } = useContext(SearchContext);

  const filteredPhones = PhoneList.filter((phone) =>
    phone.title.toLowerCase().includes(search.toLowerCase())
  );

const mobilelist = filteredPhones.map((phone) => (
  <MobileItem key={phone.id} phone={phone} />
));


    return (
        <div className="ourshop">
            <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={banner1} className="d-block w-100" alt="Banner 1" />
    </div>
    <div className="carousel-item">
      <img src={banner2} className="d-block w-100" alt="Banner 2" />
    </div>
    <div className="carousel-item">
      <img src={banner3} className="d-block w-100" alt="Banner 3" />
    </div>
    <div className="carousel-item">
      <img src={banner4} className="d-block w-100" alt="Banner 4" />
    </div>
    <div className="carousel-item">
      <img src={banner5} className="d-block w-100" alt="Banner 5" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
    </div>
    <div className="row">   
    {mobilelist}
    </div>

    </div>
  );
};

export default Ourshop;