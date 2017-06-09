import PropTypes from 'prop-types';

const homeChannels = () => (
  (props, propName, componentName) => {
    let type = 'object';
    if (!(new RegExp(type)).test(props[propName])) {
      return new Error(
        `Invalid prop "${propName}" supplied to ${componentName}.
        Expecting an object with id as keys and ${type} as values.`
      );
    }
  }
);

const playerDetails = () => (
  PropTypes.shape({
    autoplay: PropTypes.bool,
    comments: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.shape()), PropTypes.string]),
    details: PropTypes.object,
    rating: PropTypes.string,
    related: PropTypes.arrayOf(PropTypes.object)
  })
);

const query = () => (
  PropTypes.string
);

const recommended = () => (
  PropTypes.shape({
    videos: PropTypes.arrayOf(PropTypes.object)
  })
);

const searchResult = () => (
  PropTypes.shape({
    nextPageToken: PropTypes.string,
    pageInfo: PropTypes.shape({
      resultsPerPage: PropTypes.number,
      totalResults: PropTypes.number
    }),
    pageNumber: PropTypes.number,
    query: PropTypes.string,
    videos: PropTypes.arrayOf(PropTypes.object)
  })
);

const setting = () => (
  PropTypes.shape({
    windowWidth: PropTypes.number,
    isLoading: PropTypes.bool,
    sidebarVisible: PropTypes.bool
  })
);

const subscriptions = () => (
  (props, propName, componentName) => {
    let type = 'object';
    if (!(new RegExp(type)).test(props[propName])) {
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
  homeChannels,
  playerDetails,
  query,
  recommended,
  searchResult,
  setting,
  subscriptions,
  trending
};

export { propChecker };
