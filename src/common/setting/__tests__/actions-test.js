// Jest testing: SettingActions
import { receiveSetting } from '../actions';

describe('SettingActions', () => {
  describe('handling receiveSetting action', () => {
    it('should export a function', () => {
      expect(typeof receiveSetting).toEqual('function');
    });

    it('should have the correct type', () => {
      expect(receiveSetting().type).toEqual('RECEIVE_SETTING');
    });

    it('should pass the correct setting', () => {
      const testSetting = 'test';
      expect(receiveSetting(testSetting).setting).toEqual('test');
    });
  });
});
