import { describe, it } from 'mocha';
import { expect } from 'chai';

import { playing } from '../src/tennis';

describe('tennis.js', () => {
  describe('playing()', () => {
    it('should return winner is A', () => {
      // let expected = 'A';
      let result = playing(['A', 'A', 'B', 'A', 'A']);
console.log('result', result);
      // expect(result).equal(expected);
    });
    it('should return winner is B', () => {
      let expected = 'B';
      let result = playing(['A', 'B', 'B', 'A', 'B', 'B']);
console.log('result', result);
      // expect(result).equal(expected);
    });
  });
});
