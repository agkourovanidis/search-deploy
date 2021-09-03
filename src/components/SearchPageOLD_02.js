// import React, { Component } from "react";
import React, { useEffect } from "react";
import "./SearchPage.css";
// import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

//// till 01-09-2021
export default function SearchPageOLD_02(props) {

  //// можно убрать - оставил только для лога
  useEffect(() => {
    console.log('SrchPage - search result got from Header through App: ', props.prces)
  }, [props.prces])


  if (props.prces !== null && props.prces.length !== 0) {
    return (
      <div className="searchPage">
        <p>{props.prces.length}</p>
        <div >
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
        </div>
        {/* <div>
          <SearchResult
            images={ioli_imgs}
            location="Fourka, Chalkidiki-Kassandra, Greece"
            category="Apartments"
            title="Ioli Apartments Fourka Beach"
            roomtype="Apartment Room Standard"
            pansion="Not Included"
            price="330"
            checkIn="05 Sep 21 for 7 nights"
            guests="2 adults and 1 child"
          />
          <SearchResult
            images={julia_imgs}
            location="Fourka, Chalkidiki-Kassandra, Greece"
            category="★★★"
            title="Bomo Julia Hotel"
            roomtype="Apartment Room Standard"
            pansion="Not Included"
            price="404"
            checkIn="05 Sep 21 for 7 nights"
            guests="2 adults and 1 child"
          />
          <SearchResult
            images={bellagio_imgs}
            location="Fourka, Chalkidiki-Kassandra, Greece"
            category="★★★★"
            title="Bomo Bellagio Hotel"
            roomtype="Apartment Room Standard"
            pansion="Not Included"
            price="480"
            checkIn="05 Sep 21 for 7 nights"
            guests="2 adults and 1 child"
          />
          <SearchResult
            images={Greek_Pride_Hotel_Apartments_imgs}
            location="Fourka, Chalkidiki-Kassandra, Greece"
            category="Apartments"
            title="Greek Pride Hotel Apartments"
            roomtype="Apartment Room Standard"
            pansion="Not Included"
            price="502"
            checkIn="05 Sep 21 for 7 nights"
            guests="2 adults and 1 child"
          />
          <SearchResult
            images={Greek_Pride_Themelis_imgs}
            location="Fourka, Chalkidiki-Kassandra, Greece"
            category="Apartments"
            title="Greek Pride Themelis Studios"
            roomtype="Apartment Room Standard"
            pansion="Not Included"
            price="560"
            checkIn="05 Sep 21 for 7 nights"
            guests="2 adults and 1 child"
          />
          <SearchResult
            images={Greek_Pride_Ellada_imgs}
            location="Fourka, Chalkidiki-Kassandra, Greece"
            category="Apartments"
            title="Greek Pride Ellada"
            roomtype="Apartment Room Standard"
            pansion="Not Included"
            price="565"
            checkIn="05 Sep 21 for 7 nights"
            guests="2 adults and 1 child"
          />
          <SearchResult
            images={OlympionSunset_imgs}
            location="Fourka, Chalkidiki-Kassandra, Greece"
            category="★★★★★"
            title="Olympion Sunset Hotel"
            roomtype="Apartment Room Standard"
            pansion="Not Included"
            price="1746"
            checkIn="05 Sep 21 for 7 nights"
            guests="2 adults and 1 child"
          />
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
