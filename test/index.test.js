import { describe, it } from 'mocha';
import { expect } from 'chai';
import mock from 'testdouble';

import { getResult } from '../src/index';

// Winner is A : Game - [Score B]
// Winner is B : [Score B] - Game
// In Game : 40 - A
// In Game : A - 40
// In Game : 40 - 40

describe('index.js', () => {

  beforeEach(() => {
    mock.reset();
  });

  describe('getResult()', () => {

    // 1.1
    it('should return Winner is A : Game - 0 when input is [A, A, A, A, B]', () => {
      const input = ['A', 'A', 'A', 'A', 'B'];
      const result = getResult(input);
      expect(result).equal('Winner is A : Game - 0');
    });

    // 1.2
    it('should return Winner is A : Game - 15 when input is [A, A, A, B, A]', () => {
      const input = ['A', 'A', 'A', 'B', 'A'];
      const result = getResult(input);
      expect(result).equal('Winner is A : Game - 15');
    });

    // 1.3
    it('should return Winner is A : Game - 30 when input is [A, A, A, B, B, A]', () => {
      const input = ['A', 'A', 'A', 'B', 'B', 'A'];
      const result = getResult(input);
      expect(result).equal('Winner is A : Game - 30');
    });

    // 1.4
    it('should return Winner is A : Game - 40 when input is [A, A, A, B, B, B, A, A]', () => {
      const input = ['A', 'A', 'A', 'B', 'B', 'B', 'A', 'A'];
      const result = getResult(input);
      expect(result).equal('Winner is A : Game - 40');
    });

    // 2.1
    it('should return Winner is B : 0 - Game when input is [B, B, B, B, A, B]', () => {
      const input = ['B', 'B', 'B', 'B', 'A', 'B'];
      const result = getResult(input);
      expect(result).equal('Winner is B : 0 - Game');
    });

    // 2.2
    it('should return Winner is B : 15 - Game when input is [B, B, A, B, B]', () => {
      const input = ['B', 'B', 'A', 'B', 'B'];
      const result = getResult(input);
      expect(result).equal('Winner is B : 15 - Game');
    });

    // 2.3
    it('should return Winner is B : 30 - Game when input is [B, B, A, A, B, B]', () => {
      const input = ['B', 'B', 'A', 'A', 'B', 'B'];
      const result = getResult(input);
      expect(result).equal('Winner is B : 30 - Game');
    });

    // 2.4
    it('should return Winner is B : 40 - Game when input is [B, B, A, A, A, B, B, B]', () => {
      const input = ['B', 'B', 'A', 'A', 'A', 'B', 'B', 'B'];
      const result = getResult(input);
      expect(result).equal('Winner is B : 40 - Game');
    });


    // 5
    it('should return In Game : 40 - 40 (before deuce) when input is [B, B, A, A, B, A]', () => {
      const input = ['B', 'B', 'A', 'A', 'B', 'A'];
      const result = getResult(input);
      expect(result).equal('In Game : 40 - 40');
    });

    // 5.1
    it('should return In Game : 40 - 40 (after deuce) when input is [B, B, A, A, A, B, A, B, B]', () => {
      const input = ['B', 'B', 'A', 'A', 'A', 'B', 'A', 'B', 'B', 'A'];
      const result = getResult(input);
      expect(result).equal('In Game : 40 - 40');
    });

    // 6
    it('should return In Game : A - 40 when input is [B, B, A, A, B, A, A]', () => {
      const input = ['B', 'B', 'A', 'A', 'B', 'A', 'A'];
      const result = getResult(input);
      expect(result).equal('In Game : A - 40');
    });

    // 7
    it('should return In Game : 40 - A when input is [B, B, A, A, B, A, B]', () => {
      const input = ['B', 'B', 'A', 'A', 'B', 'A', 'B'];
      const result = getResult(input);
      expect(result).equal('In Game : 40 - A');
    });

    // 8
    it('should return In Game : A - 40 when input is [B, B, A, A, A, B, A, B, A]', () => {
      const input = ['B', 'B', 'A', 'A', 'A', 'B', 'A', 'B', 'A'];
      const result = getResult(input);
      expect(result).equal('In Game : A - 40');
    });

    // 9
    it('should return In Game : 40 - A when input is [B, B, A, A, A, B, A, B, B]', () => {
      const input = ['B', 'B', 'A', 'A', 'A', 'B', 'A', 'B', 'B'];
      const result = getResult(input);
      expect(result).equal('In Game : 40 - A');
    });

    // 10
    it('should return Winner is A : Game - 40 when input is [B, B, A, A, A, B, A, B, A, B, A, B, A, A]', () => {
      const input = ['B', 'B', 'A', 'A', 'A', 'B', 'A', 'B', 'A', 'B', 'A', 'B', 'A', 'A'];
      const result = getResult(input);
      expect(result).equal('Winner is A : Game - 40');
    });

    // 11
    it('should return Winner is B : 40 - Game when input is [B, B, A, A, B, A, B, A, B, A, B, B, B]', () => {
      const input = ['B', 'B', 'A', 'A', 'B', 'A', 'B', 'A', 'B', 'A', 'B', 'B', 'B'];
      const result = getResult(input);
      expect(result).equal('Winner is B : 40 - Game');
    });
  });
});
