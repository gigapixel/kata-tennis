

import { describe, it } from 'mocha';
import { expect } from 'chai';

import { player } from '../src/example';

describe('example.js', () => {
  describe('player()', () => {
    it('A win Game - 0', () => {
      let input = ['A', 'A', 'A', 'A'];
      let result = player(input);
      expect(result).equal('Winner is A : Game - 0');
    });
    it('A win Game - 15', () => {
      let input = ['A', 'B', 'A', 'A', 'A'];
      let result = player(input);
      expect(result).equal('Winner is A : Game - 15');
    });
    it('A win Game - 30', () => {
      let input = ['A', 'B', 'A', 'A', 'B', 'A', 'B'];
      let result = player(input);
      expect(result).equal('Winner is A : Game - 30');
    });
    it('A win Game - 40', () => {
      let input = ['A', 'A', 'A', 'B', 'B', 'B', 'A', 'A',];
      let result = player(input);
      expect(result).equal('Winner is A : Game - 40');
    });
    //=================================================================
    it('B win 0 - Game', () => {
      let input = ['B', 'B', 'B', 'B'];
      let result = player(input);
      expect(result).equal('Winner is B : 0 - Game');
    });
    it('B win 15 - Game', () => {
      let input = ['A', 'B', 'B', 'B', 'B', 'A', 'B'];
      let result = player(input);
      expect(result).equal('Winner is B : 15 - Game');
    });
    it('B win 30 - Game', () => {
      let input = ['A', 'B', 'B', 'B', 'A', 'B'];
      let result = player(input);
      expect(result).equal('Winner is B : 30 - Game');
    });
    it('B win 40 - Game', () => {
      let input = ['A', , 'A', 'A', 'B', 'B', 'B', 'B', 'B'];
      let result = player(input);
      expect(result).equal('Winner is B : 40 - Game');
    });
    //=================================================================
    it('In Game 0 - 15', () => {
      let input = ['B'];
      let result = player(input);
      expect(result).equal('In Game : 0 - 15');
    });
    it('In Game A - 40', () => {
      let input = ['A', 'A', 'A', 'B', 'B', 'B', 'A'];
      let result = player(input);
      expect(result).equal('In Game : A - 40');
    });
    it('In Game 40 - A', () => {
      let input = ['A', 'A', 'A', 'B', 'B', 'B', 'B'];
      let result = player(input);
      expect(result).equal('In Game : 40 - A');
    });
    it('before deuce In Game 40 - 40', () => {
      let input = ['A', 'A', 'A', 'B', 'B', 'B'];
      let result = player(input);
      expect(result).equal('In Game : 40 - 40');
    });
    it('after deuce In Game 40 - 40', () => {
      let input = ['A', 'A', 'A', 'B', 'B', 'B', 'B', 'A'];
      let result = player(input);
      expect(result).equal('In Game : 40 - 40');
    });
    // =================================================================
    it('Due A win', () => {
      let input = ['A', 'A', 'A', 'B', 'B', 'B', 'A', 'A',];
      let result = player(input);
      expect(result).equal('Winner is A : Game - 40');
    });
    it('Due B win', () => {
      let input = ['A', 'A', 'A', 'B', 'B', 'B', 'B', 'B'];
      let result = player(input);
      expect(result).equal('Winner is B : 40 - Game');
    });
    it('Due In Game A', () => {
      let input = ['A', 'A', 'A', 'B', 'B', 'B', 'A'];
      let result = player(input);
      expect(result).equal('In Game : A - 40');
    });
    it('Due In Game B', () => {
      let input = ['A', 'A', 'A', 'B', 'B', 'B', 'B'];
      let result = player(input);
      expect(result).equal('In Game : 40 - A');
    });
    it('In Game 15 - 15', () => {
      let input = ['A', 'B'];
      let result = player(input);
      expect(result).equal('In Game : 15 - 15');
    });
    it('In Game 15 - 0', () => {
      let input = ['A'];
      let result = player(input);
      expect(result).equal('In Game : 15 - 0');
    });

  });
});
