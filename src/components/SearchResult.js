import React from "react";
import "./SearchResult.css";
// import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
// import StarIcon from "@material-ui/icons/Star";
import SwiperSlider from "./SwiperSlider";

const default_imgs = [
  'https://lh3.googleusercontent.com/pw/AM-JKLXRF18x9tD2y9S2iJML25bGobc-h5TlzZqgdDpG-mPHkjSBjkv_GUj6jxHCX6DcT2lHrtIuxMSkscTbCHX8YXMwjQJoXWGxY-G13Dfi7Jg9eQLlas-RwWwUjM5oAj2LZ-55ASMpCnRFCnaCiws5RyxB=s626-no?authuser=0'
]

function SearchResult({
  // img,
  images,

  location,
  coordinates,
  category,
  title,

  // // facilities,
  // facility01,
  // facility02,
  // facility03,
  // facility04,

  roomtype,
  pansion,

  price,
  rate,
  checkIn,
  guests,
}) {
  return (
    <div className="searchResult">
      {images === null ? (
        <SwiperSlider slides={default_imgs}
          className='searchResult-swiper'
        />
      ) : (
        // <SwiperSlider slides={images.split('\',')}
        // <SwiperSlider slides={images}
        <SwiperSlider slides={images.split(',')}
          className='searchResult-swiper'
        />
      )}
      {/* <img src={img} alt="" /> */}
      {/* <FavoriteBorderIcon className="searchResult__heart" /> */}
      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          {/* <p className="searchResult__infoTop_p">
            {location}
          </p> */}
          <a href={coordinates} target='blank' title='Show on map' className="searchResult__infoTop_p">
            {location}
          </a>
          <div className="searchResult__infoTop_div1">
            <h3>{title}</h3>
            <span>{category}</span>
          </div>
          <div className="searchResult__infoTop_div2">
            {/* <span className="searchResult__infoTop_span">✔</span>
            <p className="searchResult__infoTop_p">{facility01}&nbsp;&nbsp;</p>
            <span className="searchResult__infoTop_span">✔</span>{" "}
            <p className="searchResult__infoTop_p">{facility02}&nbsp;&nbsp;</p>
            <span className="searchResult__infoTop_span">✔</span>{" "}
            <p className="searchResult__infoTop_p">{facility03}&nbsp;&nbsp;</p>
            <span className="searchResult__infoTop_span">✔</span>{" "}
            <p className="searchResult__infoTop_p">{facility04}</p> */}
          </div>
          {/* <div className="searchResult__infoTopRight">
            <p>{facilities}</p>
          </div> */}
        </div>

        <div className="searchResult__infoBottom">
          <div className="searchResult__infoBottomLeft">
            <div>
              <span>Pansion: </span>
              <p>{pansion}</p>
            </div>
            <div>
              <span>Room Type: </span>
              <p>{roomtype}</p>
            </div>
          </div>
          {/* react number format for thousands: https://stackoverflow.com/questions/44784774/in-react-how-to-format-a-number-with-commas/44784907 */}
          <div className="searchResult__infoBottomRight">
            <p>{price.toLocaleString()} {rate}</p>
            <p>{checkIn}</p>
            <p>{guests}</p>
            <button> View Deal</button>
          </div>
        </div>

        {/* <div className="searchResult__infoBottom">
          <div className="searchResult__stars">
            <StarIcon className="searchResult__star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>

          <div className="searchResults__price">
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default SearchResult;
