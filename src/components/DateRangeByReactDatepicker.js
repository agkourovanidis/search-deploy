import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


//// fix for utc: https://github.com/Hacker0x01/react-datepicker/issues/1787
// function convertUTCToLocalDate(date) {
//   if (!date) {
//     return date
//   }
//   date = new Date(date)
//   date = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())
//   return date
// }
function convertLocalToUTCDate(date) {
  if (!date) {
    return date
  }
  date = new Date(date)
  date = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
  return date
}

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function DateRangeByReactDatepicker(props) {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  
  return (
    <div className="form-controll">
      <DatePicker
        id="dateRangePick"
        dateFormat="dd/MM/yyyy"
        minDate={addDays(new Date(),3)} //{new Date()}
        placeholderText='Check in - Check out'

        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={ (update) => { setDateRange(update) }}
        onCalendarClose={() => props.funck(convertLocalToUTCDate(startDate), convertLocalToUTCDate(endDate))}

        // isClearable={true}
        required //пока убрал чтоб подчищало таблицу - потом поставить
        monthsShown={2}
        calendarStartDay={1} // {undefined} // с какого дня неделя начинается (по кмолчанию стоит = 0)        
        // autocomplete='off' // отключение автозаполнения всплывающие подсказки-почему-то не работает
      />
    </div>
  );
}

export default DateRangeByReactDatepicker;
