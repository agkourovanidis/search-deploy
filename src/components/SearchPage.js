// import React, { useEffect, useState } from "react";
import React, { useState } from "react";

import Pagination from "./Pagination";
import "./SearchPage.css";
// import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

//// from 01-09-2021 - ADDED PAGINATION (кол-во страниц задаем в теге, если не задать, то по умолч.=30)
export default function SearchPageOLD_02(props) {

  const [currentCountries, setcurrentCountries] = useState([]);

  //// можно убрать - оставил только для лога
  // useEffect(() => {
  //   console.log('SrchPage - search result got from Header through App: ', props.prces)
  // }, [props.prces])


  const onPageChanged = (data) => {
    const { currentPage, pageLimit } = data;
    const offset = (currentPage - 1) * pageLimit;
    const currentCountriesPC = props.prces.slice(offset, offset + pageLimit);
    setcurrentCountries(currentCountriesPC);
  }

  if (props.prces !== null && props.prces.length !== 0) {
    return (
      <div className="searchPage">
        {/* <p>{props.prces.length}</p> */}
        <div >
          {currentCountries.map((prc) => (
            <SearchResult key={prc.recId}
              images={prc.hph_photoURLs}
              location={prc.place}
              coordinates={prc.coordinates}
              category={prc.coh_stars}
              title={prc.hotel}
              roomtype={prc.roomType}
              pansion={prc.pn_Description}
              price={prc.price}
              checkIn={prc.arrival}
              guests={prc.pax}
              rate={prc.rate}
            />
          ))}
        </div>
        {/* <div> */}
        <Pagination
          totalRecords={props.prces.length}

          pageLimit={10}
          pageNeighbours={1}

          onPageChanged={onPageChanged} />
        {/* </div> */}

        {/* <div >
          {props.prces.map((prc) => (
            <SearchResult key={prc.recId}
              images={prc.hph_photoURLs}
              location={prc.place}
              coordinates={prc.coordinates}
              category={prc.coh_stars}
              title={prc.hotel}
              roomtype={prc.roomType}
              pansion={prc.pn_Description}
              price={prc.price}
              checkIn={prc.arrival}
              guests={prc.pax}
              rate={prc.rate}
            />
          ))}
        </div> */}

      </div>
    );
  }
  return (
    <div className="searchPage">
      <div >
        <h2>No results found. Try to change the request data and search again</h2>
      </div>
    </div>
  )
}
// }

// export default SearchPage;
