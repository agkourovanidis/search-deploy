import React, { useState } from "react";
import onClickOutside from "react-onclickoutside";
import '../components/AddGuests.css'

const clickOutsideConfig = {
  handleClickOutside: () => AddGuests.handleClickOutside
};

function AddGuests(props) {
  const [numOfAdult, setnumOfAdult] = useState(2);
  const [adultAgesList, setadultAgesList] = useState([99, 99]);

  const [dropdowmOpen, setdropdowmOpen] = useState(false);

  const toggle = () => {
    setDataForParent(); 
    setdropdowmOpen(!dropdowmOpen);
  }

  AddGuests.handleClickOutside = () => {
    setdropdowmOpen(false);
  }

  const setDataForParent=()=>{
    //// послаем данные родителю
    props.funk(
      numOfAdult,
      numOfChildren,
      (stringChildrenAges + stringAdultAges)
    ); 
  }

  const fillAdultsData = (e) => {
    //// запретить ввод нуля в поле
    // e.target.value = e.target.value.replace(/^0/, ""); // запрещает конкретно ноль
    let amount = parseFloat(e.target.value);
    if (isNaN(amount) || amount < 0 || e.target.value[0] === "0") {
      amount = "1";
    }
    e.target.value = amount;

    //// получить кол-во взрослых из поля
    setnumOfAdult(e.target.value);

    //// проставить возраста взрослых на основе кол-ва
    let list = [];
    for (let i = 0; i < amount; ++i) {
      list.push("99");
    }
    setadultAgesList(list);

    //// послаем данные родителю
    props.funk(
      (e.target.value),
      (childrenAgesList.length - 1),
      (stringChildrenAges + list.join(","))
    ); 
  };

  const stringAdultAges = adultAgesList.join(",");

  const selectAges = [
    { key: "", value: "Age of the child" },
    { key: 0, value: "0 years old" },
    { key: 1, value: "1 year old" },
    { key: 2, value: "2 years old" },
    { key: 3, value: "3 years old" },
    { key: 4, value: "4 years old" },
    { key: 5, value: "5 years old" },
    { key: 6, value: "6 years old" },
    { key: 7, value: "7 years old" },
    { key: 8, value: "8 years old" },
    { key: 9, value: "9 years old" },
    { key: 10, value: "10 years old" },
    { key: 11, value: "11 years old" },
    { key: 12, value: "12 years old" },
    { key: 13, value: "13 years old" },
    { key: 14, value: "14 years old" },
    { key: 15, value: "15 years old" },
    { key: 16, value: "16 years old" },
  ];

  const [childrenAgesList, setchildrenAgesList] = useState([
    { selectedAge: "" },
  ]);

  const handleChildrenData = (index, event) => {
    const values = [...childrenAgesList];
    values[index][event.target.name] = event.target.value;
    setchildrenAgesList(values);

    //// послаем данные родителю
    if(childrenAgesList.length === index + 1 )
    { props.funk(
      numOfAdult,
      values.length,
      (values
        .map(({ selectedAge }) => `${selectedAge}`)
        .join(",") +','+ stringAdultAges)
    )}
    else{props.funk(
      numOfAdult,
      values.length-1,
      (values
        .map(({ selectedAge }) => `${selectedAge}`)
        .join(",") + stringAdultAges)
    )}; 

    childrenAgesList.length === index + 1 && handleAddInput();
  };
  const handleAddInput = () => {
    setchildrenAgesList([...childrenAgesList, { selectedAge: "" }]);
  };
  const handleRemoveInput = (index) => {
    const list = [...childrenAgesList];
    list.splice(index, 1);
    setchildrenAgesList(list);

    //// послаем данные родителю
    props.funk(
      numOfAdult,
      list.length-1,
      (list
        .map(({ selectedAge }) => `${selectedAge}`)
        .join(",") + stringAdultAges)
    ); 
  };

  const numOfChildren = childrenAgesList.length - 1;

  const stringChildrenAges = childrenAgesList
    .map(({ selectedAge }) => `${selectedAge}`)
    .join(",");

  const getFinalLabel = () => {
    let finText = "";
    let adultTxt = "";
    let childTxt = "";

    adultTxt = numOfAdult === "1" ? "adult" : "adults";
    childTxt =
      numOfChildren === 0
        ? ""
        : " and " +
          numOfChildren +
          " " +
          (numOfChildren === 1 ? "child" : "children");

    finText = numOfAdult + " " + adultTxt + childTxt;
    
    return finText;
  };

  return (
    <div className='addguests'>
      <div className="drp-wrapper">
        <div
          className="drp-header"
          // role="button"
          onKeyPress={() => toggle(!dropdowmOpen)}
          onClick={() => toggle(!dropdowmOpen)}
        >
          <div>
            <p>{getFinalLabel()}</p>
          </div>
          {/* <div>
          <p>{dropdowmOpen ? "Close" : "Open"}</p>
        </div> */}
        </div>
        {dropdowmOpen && (
          <div className="drp-list" >
            <label>
              Adults:
            </label>
            <input
              id="Adults"
              name="Adults"
              type="number"
              placeholder="Adults"
              min="1"
              max="15"
              defaultValue={numOfAdult}
              onChange={(e) => fillAdultsData(e)}
            />

            <label>
              Сhildren up to 16 y.o.:
            </label>
            {childrenAgesList.map((item, i) => (
              <div key={i}>
                <div style={{ display: "flex" }}>
                  <select
                    name="selectedAge"
                    value={item.selectedAge}
                    placeholder="Age of the child"
                    onChange={(event) => handleChildrenData(i, event)}
                  >
                    {selectAges.map((selectAge) => {
                      return (
                        <option
                          key={selectAge.value}
                          value={selectAge.key}
                          defaultValue={selectAge.value === "Age of the child"}
                          disabled={selectAge.value === "Age of the child"}
                          hidden={selectAge.value === "Age of the child"}
                        >
                          {selectAge.value}
                        </option>
                      );
                    })}
                  </select>{" "}
                  {childrenAgesList.length !== 1 &&
                    childrenAgesList.length - 1 !== i && (
                      <span
                        title="Remove"
                        className="remove"
                        onClick={() => handleRemoveInput(i)}
                      >
                        x
                      </span>
                    )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default onClickOutside(AddGuests, clickOutsideConfig);
