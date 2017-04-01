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
  let ruleName = '*';
  var result = null;
  var find = Array.prototype.find;

  find.call(document.styleSheets, styleSheet => {
      result = find.call(styleSheet.cssRules, cssRule => {
          return cssRule instanceof CSSStyleRule
              && cssRule.selectorText.toLowerCase() == ruleName;
      });
      return result != null;
  });

  if(result.style.filter === 'invert(100%)') {
    result.style.filter = 'invert(0%)';
  } else {
    result.style.filter = 'invert(100%)';
  }
}
