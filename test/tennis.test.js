import { describe, it } from 'mocha';
import { expect } from 'chai';

import { playing } from '../src/tennis';

describe('tennis.js', () => {
  describe('playing()', () => {
    it('should return winner is A', () => {
      let result = playing(['A', 'A', 'A', 'A']);
      console.log('result', result);
      expect(result).equal('Winner is A: Game - 0');
    });
    it('should return winner is A', () => {
      let result = playing(['A', 'A', 'A', 'B', 'A']);
      console.log('result', result);
      expect(result).equal('Winner is A: Game - 15');
    });
    it('should return winner is A', () => {
      let result = playing(['A', 'A', 'A', 'B', 'B', 'A']);
      console.log('result', result);
      expect(result).equal('Winner is A: Game - 30');
    });
    it('should return winner is A', () => {
      let result = playing(['A', 'A', 'B', 'B', 'A', 'B', 'A', 'A']);
      console.log('result', result);
      expect(result).equal('Winner is A: Game - 40');
    });

    it('should return winner is B', () => {
      let result = playing(['B', 'B', 'B', 'B']);
      console.log('result', result);
      expect(result).equal('Winner is B: 0 - Game');
    });
    it('should return winner is B', () => {
      let result = playing(['B', 'B', 'B', 'A', 'B']);
      console.log('result', result);
      expect(result).equal('Winner is B: 15 - Game');
    });
    it('should return winner is B', () => {
      let result = playing(['B', 'B', 'B', 'A', 'A', 'B']);
      console.log('result', result);
      expect(result).equal('Winner is B: 30 - Game');
    });
    it('should return winner is B', () => {
      let result = playing(['B', 'B', 'A', 'A', 'B', 'A', 'B', 'B']);
      console.log('result', result);
      expect(result).equal('Winner is B: 40 - Game');
    });

    it('should return ingame: 0 - 15', () => {
      let result = playing(['B']);
      console.log('result', result);
      expect(result).equal('Ingame: 0 - 15');
    });
    it('should return ingame: A - 40', () => {
      let result = playing(['A', 'B', 'B', 'B', 'A', 'A', 'A']);
      console.log('result', result);
      expect(result).equal('Ingame: A - 40');
    });
    it('should return ingame: 40 - A', () => {
      let result = playing(['A', 'B', 'B', 'B', 'A', 'A', 'B']);
      console.log('result', result);
      expect(result).equal('Ingame: 40 - A');
    });
    it('should return ingame: 40 - 40', () => {
      let result = playing(['A', 'B', 'B', 'B', 'A', 'A']);
      console.log('result', result);
      expect(result).equal('Ingame: 40 - 40');
    });
    it('should return ingame: 40 - 40', () => {
      let result = playing(['A', 'B', 'B', 'B', 'A', 'A', 'B', 'A']);
      console.log('result', result);
      expect(result).equal('Ingame: 40 - 40');
    });
  });
});
