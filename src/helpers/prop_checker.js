import PropTypes from 'prop-types';

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

const propChecker = {
  searchResult,
  setting
};

export { propChecker };