export const formatViews = views => {
  let formattedViews = '';

  for(let i = views.length-1; i>=0; i--) {
    formattedViews = views[i] + formattedViews;
    if ((views.length - i) % 3 === 0 && i !== 0) {
      formattedViews = ',' + formattedViews
    }
  }
  return formattedViews
}


export const toggleTheme = () => {
  let ruleName = ':root';
  let result = null;
  let find = Array.prototype.find;

  let colorSheet = document.styleSheets[2].cssRules[1].styleSheet;

  result = find.call(colorSheet.cssRules, cssRule => {
      return cssRule instanceof CSSStyleRule
          && cssRule.selectorText.toLowerCase() == ruleName;
  });


  // result.style.cssText = '--video-title: #000';
}

export const createUrlParams = obj => (
  Object.keys(obj).map( key => {
  	if(obj[key] && obj[key].length > 0) {
  		return `${key}=${encodeURI(obj[key])}`
  	}
  }).filter( str => str !== undefined ).join('&')
);
