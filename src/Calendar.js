import React, { useState } from 'react';

const Calendar = (props) => {
  const styles = {
    dayCells: {
      width: 'calc(100% / 7)',
    },
  };

  const today = new Date();

  const [getMonth, setMonth] = useState(today.getMonth());
  const [getYear, setYear] = useState(today.getFullYear());
  const [showHolidays, setShowHolidays] = useState(false);

  const nextMonth = () => {
    if (getYear === props.maxYear) {
      return;
    }

    setShowHolidays(false);

    setMonth(getMonth + 1);

    if (getMonth === 11) {
      setMonth(getMonth - 11);

      setYear(getYear + 1);

      if (getYear === 2024) {
        return;
      }
    }

    showCalendar(getMonth, getYear);

    // getAllDates(getMonth, getYear);
  };

  const prevMonth = () => {
    if (getYear === props.minYear) {
      return;
    }

    setShowHolidays(false);

    setMonth(getMonth - 1);

    if (getMonth === 0) {
      setMonth(getMonth + 11);

      setYear(getYear - 1);
    }

    showCalendar(getMonth, getYear);

    // getAllDates(getMonth, getYear);
  };

  const toggleHolidays = () => {
    setShowHolidays(!showHolidays);
  };

  const reachToday = () => {
    showCalendar(setMonth(today.getMonth()), setYear(today.getFullYear()));
  };

  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

  let numbers = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  if (+props.language === 408) {
    days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

    months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
  } else if (+props.language === 105) {
    days = [
      'တနင်္ဂနွေ',
      'တနင်္လာ',
      'အင်္ဂါ',
      'ဗုဒ္ဓဟူး',
      'ကြာသပတေး',
      'သောကြာ',
      'စနေ',
    ];

    months = [
      'ဇန်နဝါရီ',
      'ဖေဖော်ဝါရီ',
      'မတ်',
      'ဧပြီ',
      'မေ',
      'ဇွန်',
      'ဇူလိုင်',
      'သြဂုတ်',
      'စက်တင်ဘာ',
      'အောက်တိုဘာ',
      'နိုဝင်ဘာ',
      'ဒီဇင်ဘာ',
    ];

    numbers = [
      0,
      '၁',
      '၂',
      '၃',
      '၄',
      '၅',
      '၆',
      '၇',
      '၈',
      '၉',
      '၁၀',
      '၁၁',
      '၁၂',
      '၁၃',
      '၁၄',
      '၁၅',
      '၁၆',
      '၁၇',
      '၁၈',
      '၁၉',
      '၂၀',
      '၂၁',
      '၂၂',
      '၂၃',
      '၂၄',
      '၂၅',
      '၂၆',
      '၂၇',
      '၂၈',
      '၂၉',
      '၃၀',
      '၃၁',
    ];
  } else if (+props.language === 112) {
    days = ['日', '月', '火', '水', '木', '金', '土'];
  } else {
    days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    numbers = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    ];
  }

  const holidays = props.holidaysName;

  let daysOfMonth = [];

  let keyIndex = 0;

  function showCalendar(curMonth, curYear) {
    let firstDayofMonth = new Date(curYear, curMonth, 1).getDay(),
      lastDateofMonth = new Date(curYear, curMonth + 1, 0).getDate(),
      lastDayofMonth = new Date(curYear, curMonth, lastDateofMonth).getDay(),
      lastDateofLastMonth = new Date(curYear, curMonth, 0).getDate();

    for (let i = firstDayofMonth; i > 0; i--) {
      daysOfMonth.push(
        <li className="dayCells opacity-40 py-4 h-14" key={keyIndex++} style={styles.dayCells}>
          {numbers[lastDateofLastMonth - i + 1]}
        </li>
      );
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
      let dayStyles = '';

      let isToday =
        i === today.getDate() &&
        curMonth === new Date().getMonth() &&
        curYear === new Date().getFullYear()
          ? 'bg-blue-300 text-white rounded-full flex items-center justify-center'
          : '';

      if (firstDayofMonth === 7) {
        firstDayofMonth = firstDayofMonth - 7;
      }

      firstDayofMonth++;

      let weekends =
        firstDayofMonth === 7 || firstDayofMonth === 1 ? 'text-red-600' : '';

      let holiday = '';

      for (let j = 0; j < holidays.length; j++) {
        holiday +=
          holidays[j].date.split('/').join('') ===
          getAllDates(getMonth, getYear)[i - 1]
            ? 'bg-red-400 text-white rounded-full'
            : '';
      }

      dayStyles +=
        isToday + ' ' + weekends + ' ' + holiday + ' h-14 dayCells py-4';

      daysOfMonth.push(
        <li className={dayStyles} key={keyIndex++} style={styles.dayCells}>
          {numbers[i]}
        </li>
      );
    }

    for (let i = lastDayofMonth; i < 6; i++) {
      daysOfMonth.push(
        <li className="dayCells opacity-40 py-4 h-14" key={keyIndex++} style={styles.dayCells}>
          {numbers[i - lastDayofMonth + 1]}
        </li>
      );
    }
  }

  showCalendar(getMonth, getYear);

  function getAllDates(curMonth, curYear) {
    let date = new Date(curYear, curMonth, 1);

    let dates = [];

    while (date.getMonth() === curMonth) {
      dates.push(new Date(date).toLocaleDateString().split('/').join(''));

      date.setDate(date.getDate() + 1);
    }

    return dates;
  }

  getAllDates(getMonth, getYear);

  let holidaysForThisMonth = [];

  function getHolidays(curMonth, curYear) {
    for (let i = 0; i < holidays.length; i++) {
      if (
        +holidays[i].date.split('/')[2] === curYear &&
        +holidays[i].date.split('/')[0] === curMonth
      ) {
        holidaysForThisMonth.push(
          <div
            className="w-full flex items-center justify-around py-2 border"
            key={keyIndex++}
          >
            <div className="w-1/3 flex justify-center">
              <p className="w-12 h-12 rounded-full flex items-center justify-center bg-red-400 text-white">
                {holidays[i].date.split('/')[1]}
              </p>
            </div>
            <div className="w-2/3 flex items-start">
              <p>{holidays[i].description}</p>
            </div>
          </div>
        );
      }
    }
  }

  getHolidays(getMonth + 1, getYear);

  // let showHolidaysClass = '';

  // showHolidays
  //   ? (showHolidaysClass =
  //       'w-full bg-white absolute top-0 border-b-2 rounded-b-xl shadow-lg opacity-1 duration-75 transition-all')
  //   : (showHolidaysClass =
  //       'w-full bg-white absolute top-0 border-b-2 rounded-b-xl shadow-lg opacity-0 duration-75 transition-all');

  return (
    <div className="w-[450px] text-center border rounded-xl py-5 bg-white relative overflow-hidden">
      <div className="w-full flex justify-around py-3">
        {props.controls ? <button onClick={prevMonth}>&#60;</button> : null}

        <div className="flex space-x-8 font-black text-xl">
          <p>{months[getMonth]}</p>
          <p>{getYear}</p>
        </div>

        {props.controls ? <button onClick={nextMonth}>&#62;</button> : null}
      </div>

      <div className="w-full flex flex-col items-center">
        <table className="w-[400px] table-auto">
          <thead>
            <tr>
              {days.map((day) => (
                <th className="w-[50px] py-5" key={day}>
                  {day}
                </th>
              ))}
            </tr>
          </thead>
        </table>
        <ul className="w-[400px] flex flex-wrap text-center">{daysOfMonth}</ul>
      </div>

      <div className="flex justify-between px-6 pt-4">
        <button onClick={reachToday}>Today</button>
        {props.holidays ? (
          <button onClick={toggleHolidays}>
            {showHolidays ? 'Hide ' : 'Show '}
            Holidays
          </button>
        ) : null}
      </div>

      {props.holidays ? (
        <div className="w-full bg-white absolute top-0 border-b-2 rounded-b-xl shadow-lg max-h-[400px] overflow-y-auto">
          {showHolidays ? <>{holidaysForThisMonth}</> : null}
        </div>
      ) : null}
    </div>
  );
};

export default Calendar;
