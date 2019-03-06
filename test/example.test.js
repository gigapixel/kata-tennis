import { describe, it } from 'mocha';
import { expect } from 'chai';

import { player } from '../src/example';

describe('example.js', () => {
  describe('player()', () => {
    it('A win', () => {
      let input = ['A', 'B', 'A', 'A', 'B', 'A', 'B'];
      let result = player(input);
      expect(result).equal('A win : B score 30');
    });
    it('B win', () => {
      let input = ['A', 'B', 'B', 'B', 'B', 'A', 'B'];
      let result = player(input);
      expect(result).equal('B win : A score 15');
    });
    it('Due ingame', () => {
      let input = ['A', 'A', 'A', 'B', 'B', 'B', 'B'];
      let result = player(input);
      expect(result).equal('in game score A : 40 , score B : A');
    });
    it('Due B win', () => {
      let input = ['A', 'A', 'A', 'B', 'B', 'B', 'B', 'B'];
      let result = player(input);
      expect(result).equal('B Win score A : 40');
    });
  });
});
