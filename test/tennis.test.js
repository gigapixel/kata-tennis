import { describe, it } from 'mocha';
import { expect } from 'chai';

import { playing } from '../src/tennis';

describe('tennis.js', () => {
  describe('playing()', () => {
    it('should return winner is A', () => {
      let play = ['A', 'A', 'B', 'A', 'A'];
      let expected = 'A';
      let result = playing(play);
      expect(result).equal(expected);
    });
    it('should return winner is B', () => {
      let play = ['A', 'B', 'B', 'A', 'B', 'B'];
      let expected = 'B';
      let result = playing(play);
      expect(result).equal(expected);
    });
  });
});
