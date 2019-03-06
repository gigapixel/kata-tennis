import { describe, it } from 'mocha';
import { expect } from 'chai';

import { calculatePoint } from '../src/index';


describe('index.js', () => {
  describe('calculatePoint()', () => {
    
    it('should return Game - 0', () => {
      const input = ['A', 'A', 'A', 'A', 'B']; // A is winner : Game - 0
      let result = calculatePoint(input);
      expect(result).equal('Game - 0');
    });

    // it('should return 2', () => {
    //   const input = ['B', 'B', 'B', 'B', 'B'];
    //   let result = calculatePoint(input);
    //   expect(result).equal('0 - Game');
    // });
  });
});
