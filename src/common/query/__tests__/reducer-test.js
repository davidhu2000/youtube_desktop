// Jest testing: QueryReducer

import QueryReducer from '../reducer';

describe('QueryReducer', () => {
  it('exports a function', () => {
    expect(typeof QueryReducer).toEqual('function');
  });

  it('should use null as defaultstate', () => {
    expect(QueryReducer(undefined, {})).toEqual(null);
  });

  it('should return previous state with bogus action', () => {
    const oldState = 'oldQuery';
    const state = QueryReducer(oldState, { type: 'BOGUS_ACTION' });
    expect(state).toEqual(oldState);
  });

  describe('handling RECEIVE_QUERY action', () => {
    let testQuery;
    let action;

    beforeEach(() => {
      testQuery = 'test';
      action = {
        type: 'RECEIVE_QUERY',
        query: testQuery
      };
    });

    it('should return the testQuery', () => {
      expect(QueryReducer(undefined, action)).toEqual('test');
    });

    it('should not modify the old state', () => {
      const oldState = QueryReducer(undefined, {});
      QueryReducer(oldState, action);
      expect(oldState).toEqual(null);
    });
  });

  describe('handling CLEAR_QUERY action', () => {
    let action;

    beforeEach(() => {
      action = {
        type: 'CLEAR_QUERY'
      };
    });

    it('should retun a null query', () => {
      const oldState = 'test';
      expect(QueryReducer(oldState, action)).toEqual(null);
    });

    it('should not modify the old state', () => {
      const oldState = QueryReducer(undefined, {});
      QueryReducer(oldState, action);
      expect(oldState).toEqual(null);
    });
  });
});
