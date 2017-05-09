export * from './prop_checker';
export * from './sidebar';
export * from './parsing_helpers';

// create comma seperated number
export const formatNumber = (number = 301, shouldAbbreviate = false) => {
  if (shouldAbbreviate) {
    // return number in '1M' or '965K' format
    let ranges = [
      { divider: 1e18, suffix: 'P' },
      { divider: 1e15, suffix: 'E' },
      { divider: 1e12, suffix: 'T' },
      { divider: 1e09, suffix: 'G' },
      { divider: 1e06, suffix: 'M' },
      { divider: 1e03, suffix: 'K' }
    ];

    for (let i = 0; i < ranges.length; i++) {
      if (number >= ranges[i].divider) {
        return Math.floor(number / ranges[i].divider).toString() + ranges[i].suffix;
      }
    }
    return number.toString();
  }
  return Number(number).toLocaleString();
};

// TODO: fix this function

// export const toggleTheme = () => {
//   let ruleName = ':root';
//   let result = null;
//   let find = Array.prototype.find;

//   let colorSheet = document.styleSheets[2].cssRules[1].styleSheet;

//   result = find.call(colorSheet.cssRules, cssRule => {
//       return cssRule instanceof CSSStyleRule
//           && cssRule.selectorText.toLowerCase() === ruleName;
//   });

//   // result.style.cssText = '--video-title: #000';
// };

// create params for url
export const createUrlParams = obj => (
  Object.keys(obj).map(key => {
    if (obj[key] && `${obj[key]}`.length > 0) {
      return `${key}=${encodeURI(obj[key])}`;
    }
    return undefined;
  }).filter(str => str !== undefined).join('&')
);

export const timeFromNow = date => {
  let durationsInSeconds = {
    year: 31536000,
    month: 2592000,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1
  };

  let ms = Math.floor((new Date() - new Date(date)) / 1000);
  let types = ['year', 'month', 'day', 'hour', 'minute', 'second'];

  for (let idx = 0; idx < types.length; idx++) {
    let num = Math.floor(ms / durationsInSeconds[types[idx]]);
    if (num >= 1) {
      let type = types[idx];
      if (num > 1) type += 's';
      return `${num} ${type} ago`;
    }
  }
};

// add ... to strings that are too long
export const shortenString = (string, maxLength) => {
  if (string.length > maxLength) {
    let idx = maxLength - 3;
    string = `${string.slice(0, idx)}...`;
  }
  return string;
};

export const errorChecker = response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};
