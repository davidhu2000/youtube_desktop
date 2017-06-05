// Jest testing: SettingReducer
import SettingReducer from '../reducer';

describe('SettingReducer', () => {
  it('exports a function', () => {
    expect(typeof SettingReducer).toEqual('function');
  });

  it('initialize with a default state', () => {
    expect(SettingReducer(undefined, {})).toMatchObject({
      windowWidth: null,
      isLoading: true
    });
  });

  it('should return previous state with bogus action', () => {
    const oldState = SettingReducer(undefined, {});
    const newState = SettingReducer(oldState, {
      type: 'BOGUS_ACTION'
    });

    expect(oldState).toEqual(newState);
  });

  describe('handling RECEIVE_SETTING action', () => {
    let action;
    let testSetting;

    beforeEach(() => {
      testSetting = 'test';
      action = {
        type: 'RECEIVE_SETTING',
        setting: {
          testSetting
        }
      };
    });

    it('should update with the test setting', () => {
      expect(SettingReducer(undefined, action).testSetting).toEqual('test');
    });

    it('should not modify the old state', () => {
      const oldState = SettingReducer(undefined, {});
      SettingReducer(oldState, action);
      expect(oldState).toMatchObject({
        windowWidth: null,
        isLoading: true
      });
    });
  });
});
