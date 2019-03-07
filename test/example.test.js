import { describe, it } from 'mocha';
import { expect } from 'chai';

import { Tennis } from '../src/example';

describe('example.js', () => {
  describe('playGame()', () => {
    it('should return 1', () => {
      let result = alwaysReturn1();
      expect(result).equal(1);
    });
  });
});
