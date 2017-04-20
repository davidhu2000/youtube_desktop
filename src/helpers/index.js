// create comma seperated number
export const formatNumber = number => {
  let formattedNumber = '';
  number = number.toString();
  for(let i = number.length-1; i>=0; i--) {
    formattedNumber = number[i] + formattedNumber;
    if ((number.length - i) % 3 === 0 && i !== 0) {
      formattedNumber = ',' + formattedNumber;
    }
  }
  return formattedNumber;
};

// TODO: fix this function

export const toggleTheme = () => {
  let ruleName = ':root';
  let result = null;
  let find = Array.prototype.find;

  let colorSheet = document.styleSheets[2].cssRules[1].styleSheet;

  result = find.call(colorSheet.cssRules, cssRule => {
      return cssRule instanceof CSSStyleRule
          && cssRule.selectorText.toLowerCase() === ruleName;
  });


  // result.style.cssText = '--video-title: #000';
};

// create params for url
export const createUrlParams = obj => (
  Object.keys(obj).map( key => {
  	if(obj[key] && `${obj[key]}`.length > 0) {
  		return `${key}=${encodeURI(obj[key])}`;
  	}
  }).filter( str => str !== undefined ).join('&')
);

// parse video duration from api call
export const parseDuration = str => {
  let values = str.split(/[A-Z]+/);
  values = values.filter( val => val !== '');
  values = values.map( (val, idx) => {
  	if(idx === 0) {
  		return val;
  	} else {
  		if(val.length === 2) {
  			return val;
  		} else {
  			return '0' + val;
  		}
  	}
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

  newDate += months[date.getMonth()] + " ";
  newDate += date.getDate() + ", ";
  newDate += date.getFullYear();

  return newDate;
};

// add ... to strings that are too long
export const shortenString = (string, maxLength) => {
  if (string.length > maxLength) {
    let idx = maxLength - 3;
    string = string.slice(0, idx);

    while(string[idx] !== ' ') {
      idx -= 1;
    }
    string = string.slice(0, idx) + '...';
  }
  return string;
};

