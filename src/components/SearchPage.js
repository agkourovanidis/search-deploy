import React from "react";
import "./SearchPage.css";
// import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      {/* <div className="searchPage__info">
        <p>62 stays · 26 august to 30 august · 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div> */}
      <div>
        <SearchResult
          img="https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/pictureshd/8702/53696.jpeg?w=640&h=480&mode=crop&quality=75"
          location="Fourka, Chalkidiki-Kassandra, Greece"
          category="Apartments"
          title="Ioli Apartments Fourka Beach"
          // facilities='✔Kitchen   ✔WiFi   ✔Billiards   ✔Parking'
          facility01="Kitchen"
          facility02="WiFi"
          facility03="Billiards"
          facility04="Parking"
          roomtype="Apartment Room Standard"
          pansion="Not Included"
          price="330"
          checkIn="05 Sep 21 for 7 nights"
          guests="2 adults and 1 child"
        />
        <SearchResult
          img="https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/111/111_julia-hotel_188235.jpeg?w=640&h=480&mode=crop&quality=75"
          location="Fourka, Chalkidiki-Kassandra, Greece"
          category="★★★"
          title="Bomo Julia Hotel"
          // facilities='✔Parking   ✔WiFi   ✔Swimming Pool   ✔Table Tennis'
          facility01="Parking"
          facility02="WiFi"
          facility03="Swimming Pool"
          facility04="Table Tennis"
          roomtype="Apartment Room Standard"
          pansion="Not Included"
          price="404"
          checkIn="05 Sep 21 for 7 nights"
          guests="2 adults and 1 child"
        />
        <SearchResult
          img="https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6160954/6160954_dixkjij0.x1r.jpg?w=640&h=480&mode=crop&quality=75"
          location="Fourka, Chalkidiki-Kassandra, Greece"
          category="★★★★"
          title="Bomo Bellagio Hotel"
          // facilities='✔Parking   ✔WiFi   ✔Swimming Pool   ✔Billiards'
          facility01="Parking"
          facility02="WiFi"
          facility03="Billiards"
          facility04="Swimming Pool"
          roomtype="Apartment Room Standard"
          pansion="Not Included"
          price="480"
          checkIn="05 Sep 21 for 7 nights"
          guests="2 adults and 1 child"
        />
        <SearchResult
          img="https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6133297/6133297_greek-pride-hotel-apartments_195698.jpg?w=640&h=480&mode=crop&quality=75"
          location="Fourka, Chalkidiki-Kassandra, Greece"
          category="Apartments"
          title="Greek Pride Hotel Apartments"
          // facilities='✔Parking   ✔WiFi   ✔Swimming Pool   ✔Bus Station'
          facility01="Parking"
          facility02="WiFi"
          facility03="Swimming Pool"
          facility04="Bus Station"
          roomtype="Apartment Room Standard"
          pansion="Not Included"
          price="502"
          checkIn="05 Sep 21 for 7 nights"
          guests="2 adults and 1 child"
        />
        <SearchResult
          img="https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6192491/6192491_nnltwk3gd5r..jpg?w=640&h=480&mode=crop&quality=75"
          location="Fourka, Chalkidiki-Kassandra, Greece"
          category="Apartments"
          title="Greek Pride Themelis Studios"
          // facilities='✔WiFi   ✔Swimming Pool   ✔Bus Station ✔Mini Market'
          facility01="WiFi"
          facility02="Swimming Pool"
          facility03="Bus Station"
          facility04="Mini Market"
          roomtype="Apartment Room Standard"
          pansion="Not Included"
          price="560"
          checkIn="05 Sep 21 for 7 nights"
          guests="2 adults and 1 child"
        />
        <SearchResult
          img="https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/6135529/6135529_bhz53cad.gao.jpg?w=640&h=480&mode=crop&quality=75"
          location="Fourka, Chalkidiki-Kassandra, Greece"
          category="Apartments"
          title="Greek Pride Ellada"
          // facilities='✔Kitchen   ✔WiFi   ✔Swimming Pool   ✔Parking'
          facility01="Kitchen"
          facility02="WiFi"
          facility03="Swimming Pool"
          facility04="Parking"
          roomtype="Apartment Room Standard"
          pansion="Not Included"
          price="565"
          checkIn="05 Sep 21 for 7 nights"
          guests="2 adults and 1 child"
        />
        <SearchResult
          img="https://cdn.mouzenidis-travel.ru/static/userfiles/hotels/original/112/112_ztv1njow.2yy.jpg?w=640&h=480&mode=crop&quality=75"
          location="Fourka, Chalkidiki-Kassandra, Greece"
          category="★★★★★"
          title="Olympion Sunset Hotel"
          // facilities='✔Conference Hall   ✔Swimming Pool   ✔SPA Center   ✔WiFi'
          facility01="Conference Hall"
          facility02="Swimming Pool"
          facility03="SPA Center"
          facility04="WiFi"
          roomtype="Apartment Room Standard"
          pansion="Not Included"
          price="1746"
          checkIn="05 Sep 21 for 7 nights"
          guests="2 adults and 1 child"
        />
      </div>
    </div>
  );
}

export default SearchPage;
