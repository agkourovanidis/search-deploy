import React from "react";
import "./SearchResult.css";
// import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
// import StarIcon from "@material-ui/icons/Star";

function SearchResult({
  img,
  location,
  category,
  title,

  // facilities,
  facility01,
  facility02,
  facility03,
  facility04,

  roomtype,
  pansion,

  price,
  checkIn,
  guests,
}) {
  return (
    <div className="searchResult">
      <img src={img} alt="" />
      {/* <FavoriteBorderIcon className="searchResult__heart" /> */}
      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          <p  className="searchResult__infoTop_p">
            {location}
          </p>
          <div className="searchResult__infoTop_div1">
            <h3>{title}</h3>
            <span>{category}</span>
          </div>
          <div className="searchResult__infoTop_div2">
            <span className="searchResult__infoTop_span">✔</span>
            <p className="searchResult__infoTop_p">{facility01}&nbsp;&nbsp;</p>
            <span className="searchResult__infoTop_span">✔</span>{" "}
            <p className="searchResult__infoTop_p">{facility02}&nbsp;&nbsp;</p>
            <span className="searchResult__infoTop_span">✔</span>{" "}
            <p className="searchResult__infoTop_p">{facility03}&nbsp;&nbsp;</p>
            <span className="searchResult__infoTop_span">✔</span>{" "}
            <p className="searchResult__infoTop_p">{facility04}</p>
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

          <div className="searchResult__infoBottomRight">
            <p>{price} €</p>
            <p>{checkIn}</p>
            <p>for {guests}</p>
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
