import PropTypes from 'prop-types';

const channels = () => (
  (props, propName, componentName) => {
    let type = 'object';
    if(!(new RegExp(type)).test(props[propName])) {
      return new Error(
        `Invalid prop "${propName}" supplied to ${componentName}.
        Expecting an object with id as keys and ${type} as values.`
      );
    }
  }
);

const query = () => (
  PropTypes.string
);

const recommended = () => (
  PropTypes.shape({
    videos: PropTypes.arrayOf(PropTypes.object)
  })
);

const searchResult= () => (
  PropTypes.shape({
    nextPageToken: PropTypes.string,
      pageInfo: PropTypes.shape({
      resultsPerPage: PropTypes.number,
      totalResults: PropTypes.number
    }),
    pageNumber: PropTypes.number,
    query: PropTypes.string,
    videos: PropTypes.object
  })
);

const setting = () => (
  PropTypes.shape({
    windowWidth: PropTypes.number
  })
);

const subscriptions = () => (
  (props, propName, componentName) => {
    let type = 'object';
    if(!(new RegExp(type)).test(props[propName])) {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}.
        Expecting an object with id as keys and ${type} as values.`
      );
    }
  }
);

const trending = () => (
  PropTypes.shape({
    date: PropTypes.number,
    videos: PropTypes.arrayOf(PropTypes.object)
  })
);

const propChecker = {
  channels,
  query,
  recommended,
  searchResult,
  setting,
  subscriptions,
  trending
};

export { propChecker };