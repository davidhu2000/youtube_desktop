export const parseStringForLinks = str => {
  let regex = /https?:\/\/(www.)?(?!www).+?\.[^\s]{2,}/g;
  let matches = str.match(regex);
  if (matches) {
    for (let i = 0; i < matches.length; i++) {
      str = str.replace(matches[i], url => `<a className='detail-links'>${url}</a>`);
    }
  }

  return str;
};

// parse video duration from api call
export const parseDuration = str => {
  let values = str.split(/[A-Z]+/);
  values = values.filter(val => val !== '');
  values = values.map((val, idx) => {
    if (idx === 0 || val.length === 2) {
      return val;
    }
    return `0${val}`;
  });

  if (values.length === 1) {
    values.unshift('0');
  }
  return values.join(':');
};

// return written version of date
export const parseDate = date => {
  const months = {
    0: "Jan",
    1: "Feb",
    2: "Mar",
    3: "Apr",
    4: "May",
    5: "June",
    6: "July",
    7: "Aug",
    8: "Sept",
    9: "Oct",
    10: "Nov",
    11: "Dec"
  };
  date = new Date(date);
  let newDate = "";

  newDate += `${months[date.getMonth()]} `;
  newDate += `${date.getDate()}, `;
  newDate += date.getFullYear();

  return newDate;
};
