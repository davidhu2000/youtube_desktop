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
