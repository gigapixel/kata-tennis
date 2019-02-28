import { describe, it } from 'mocha';
import { expect } from 'chai';

import { alwaysReturn1 } from '../src/example';

describe('example.js', () => {
  describe('alwaysReturn1()', () => {
    it('should return 1', () => {
      let result = alwaysReturn1();
      expect(result).equal(1);
    });
  });
});
