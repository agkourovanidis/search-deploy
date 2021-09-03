import React, { Component } from "react";
// import { Table } from "react-bootstrap";
import axios from "axios";
import "./Header.css";

import AddGuests from "./AddGuests";

// import DateRangeByReactDatepicker from "../components/DateRangeByReactDatepicker"; //вариант01 календаря react-datepicker
import DateRangePickerShahabyazdi from "./DateRangePickerShahabyazdi"; //вариант02 календаря

// import { Button } from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";

import { Link } from "react-router-dom";
import logo from "../logo.png";

export default class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rdrpStartDate: null, //addDays(new Date(),3), //new Date("2021-08-01"), //null,
      rdrpEndDate: null, //new Date("2021-08-09"), //null,

      gstNumOfAdults: 2,
      gstNumOfChildren: 0,
      gstStringAges: "99,99",

      //// 15/08/21 - убрал, т.к. не использую, а полученные данные сразу передаю дальше,
      //// 02/09/21 - вернул, делаю через prces, а не напрямую
      prces: []
    };

    this.getDatesFromChild = this.getDatesFromChild.bind(this);
    this.getDataFromGuests = this.getDataFromGuests.bind(this);
  }

  getDatesFromChild(startDate, endDate) {
    this.setState({ rdrpStartDate: startDate, rdrpEndDate: endDate });

    //// 15/08/21 - убрал, т.к. не использую, а полученные данные сразу передаю дальше
    //// 02/09/21 - вернул, делаю через prces, а не напрямую
    this.setState({ prces: [] }); //// здесь  обнуляю таблмцу с результатами поиска
    //// послаем данные родителю
    this.props.func(this.state.prces);
  }

  getDataFromGuests(numOfAdults, numOfChild, stringAges) {
    this.setState({
      gstNumOfAdults: numOfAdults,
      gstNumOfChildren: numOfChild,
      gstStringAges: stringAges,
    });
    //// 15/08/21 - убрал, т.к. не использую, а полученные данные сразу передаю дальше
    //// 02/09/21 - вернул, делаю через prces, а не напрямую
      this.setState({ prces: [] }); //// здесь  обнуляю таблмцу с результатами поиска
      //// послаем данные родителю
      this.props.func(this.state.prces);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const srchparams = {
      place: e.target.Place.value,

      ArrDate: this.state.rdrpStartDate,
      DepDate: this.state.rdrpEndDate,

      adults: this.state.gstNumOfAdults,
      chlds: this.state.gstNumOfChildren,
      p_sAges: this.state.gstStringAges,
    };
    // console.log(srchparams);
    axios
      .post("Hotels/GetHotelPrices", srchparams)
      .then((response) => {
        // console.log(response);
        //// 15/08/21 - убрал, т.к. не использую, а полученные данные сразу передаю дальше
        //// 02/09/21 - вернул, делаю через prces, а не напрямую
        this.setState({ prces: response.data });
        // console.log('Header search result: ', response.data);
        //// послаем данные родителю
        this.props.func(this.state.prces);
      })
      .catch((err) => {
        console.log(err);
        // this.setState({
        //   // message: err.res.data.message
        //   // message: err.res.data.title,
        //   message: err.res.data.errors.Email,
        // });
      });
  };

  componentDidMount() {
    this.nameInput.focus();
  }

  render() {
    //// 15/08/21 - убрал, т.к. не использую, а полученные данные сразу передаю дальше
    //// 02/09/21 - здесь не нужно возвращать
    // const { prces } = this.state;

    return (
      <div className="header">
        <div className="header__icon">
          <Link to="/">
            <img
              // className="header__icon"
              className="header__icon_img"
              //   src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
              src={logo}
              alt=""
            // height="70px"
            />
          </Link>
        </div>

        <div className="header__center">
          <div className="home__section">
            {/* <hr /> */}
            <form onSubmit={this.handleSubmit}>
              <section>
                <div>
                  {/* <label htmlFor="Place">Place</label> */}
                  <input
                    className="inputregion"
                    id="Place"
                    name="Place"
                    type="text"
                    placeholder="Country, Region, City or Hotel Name"
                    ref={(inpt) => {
                      this.nameInput = inpt;
                    }}
                    defaultValue='Greece'
                  />
                </div>

                {/* //вариант01 календаря (react-datepicker) */}
                {/* <div style={{ marginRight: 50 }}>
              <label htmlFor="dateRangePick">Arrival-Departure Dates:</label>
              <DateRangeByReactDatepicker funck={this.getDatesFromChild} />
              <h6>StartDate:{" "} {this.state.rdrpStartDate === null ? "" : this.state.rdrpStartDate.toLocaleDateString()}</h6>
              <h6>EndDate:{" "} {this.state.rdrpEndDate === null ? "" : this.state.rdrpEndDate.toLocaleDateString()}</h6>
              <h6>SendStartDate: {JSON.stringify(this.state.rdrpStartDate)}</h6>
              <h6>SendEndDate: {JSON.stringify(this.state.rdrpEndDate)}</h6>
            </div> */}

                {/* //вариант02 календаря */}
                <div>
                  {/* <label htmlFor="dateRangePickShakh">Arrival-Departure Dates:</label> */}
                  <DateRangePickerShahabyazdi
                    funck={this.getDatesFromChild}
                  // required
                  />
                  {/* <h6>SendStartDate: {JSON.stringify(this.state.rdrpStartDate)}</h6>
              <h6>SendEndDate: {JSON.stringify(this.state.rdrpEndDate)}</h6> */}
                </div>

                <div
                // style={{
                //   display:'flex',
                //   border: '1px solid #ccc',
                //   borderTopRightRadius: '20px',
                //   borderBottomRightRadius: '20px',
                //   height: '32px'
                // }}
                >
                  {/* <h6>Num Of Adults:{" "} {this.state.gstNumOfAdults === null ? "" : this.state.gstNumOfAdults}</h6>
              <h6>Num Of Children:{" "} {this.state.gstNumOfChildren === null ? "" : this.state.gstNumOfChildren}</h6>
              <h6>Ages:{" "} {this.state.gstStringAges === null ? "" : this.state.gstStringAges}</h6> */}
                  {/* <label htmlFor="GuestsDropdown">Number of Guests:</label> */}
                  <AddGuests
                    id="GuestsDropdown"
                    funk={this.getDataFromGuests}
                  />
                </div>
                <div>
                  {/* <label htmlFor="btn-search">&nbsp;</label> */}
                  <button
                    className="btn-search"
                    id="btn-search"
                  >
                    Search
                  </button>
                  {/* <Button variant="contained" color="primary">
                Search
              </Button> */}
                </div>
              </section>

              <div>
                {/* <hr /> */}
                {/* <SearchPage/> */}
                {/* <Table className="mt-4" striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>HrKey</th>
                  <th>PnKey</th>
                  <th>Check In</th>
                  <th>Check Out</th>
                  <th>Adults</th>
                  <th>Children</th>
                  <th>Hotel</th>
                  <th>Place</th>
                  <th>Accommodation</th>
                  <th>Pansion</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {prces.map((prc) => (
                  <tr key={prc.id}>
                    <td>{prc.id}</td>
                    <td>{prc.hrKey}</td>
                    <td>{prc.pnKey}</td>
                    <td>{prc.checkIn}</td>
                    <td>{prc.checkIn}</td>
                    <td>{prc.adults}</td>
                    <td>{prc.children}</td>
                    <td>{prc.hotel}</td>
                    <td>{prc.place}</td>
                    <td>{prc.accommodation}</td>
                    <td>{prc.pansion}</td>
                    <td>{prc.price}</td>
                  </tr>
                ))}
              </tbody>
            </Table> */}
              </div>
              {/* <hr /> */}
            </form>
          </div>
        </div>

        <div className="header__right">
          {/* <p>Become a host</p> */}
          <LanguageIcon />
          <ExpandMoreIcon />
          <Avatar />
        </div>
      </div>
    );
  }
}
