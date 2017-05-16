// Jest testing: QueryActions

import { receiveQuery, clearQuery } from '../actions';

describe('QueryActions', () => {
  describe('handling receiveQuery', () => {
    it('should export a function', () => {
      expect(typeof receiveQuery).toEqual('function');
    });

    it('should return the correct type', () => {
      expect(receiveQuery().type).toEqual('RECEIVE_QUERY');
    });

    it('should pass in a query', () => {
      expect(receiveQuery('test').query).toEqual('test');
    });
  });

  describe('handling clearQuery', () => {
    it('should export a function', () => {
      expect(typeof clearQuery).toEqual('function');
    });

    it('should return the correct type', () => {
      expect(clearQuery().type).toEqual('CLEAR_QUERY');
    });
  });
});
