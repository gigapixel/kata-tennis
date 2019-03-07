import { describe, it } from 'mocha';
import { expect } from 'chai';

import { calculatePoint } from '../src/index';



// Winner is A : Game - [Score B]
// Winner is B : [Score B] - Game
// In Game : 40 - A
// In Game : A - 40
// In Game : 40 - 40


// 1 A ชนะ B = 0
// 2 A ชนะ B != 0
// 3 B ชนะ A = 0
// 4 B ชนะ A != 0
// 5 ดิว คะแนนเท่ากัน
// 6 ดิว A นำ
// 7 ดิว B นำ
// 8 ดิวสลับไปมาแล้ว A นำ 
// 9 ดิวสลับไปมาแล้ว B นำ 
// 10 ดิวสลับไปมาแล้วคะแนนเท่ากัน A นำ B ตาม แล้ว B ได้อีกแต้มตามมาเท่ากัน
// 11 ดิวสลับไปมาแล้ว A ชนะ
// 12 ดิวสลับไปมาแล้ว B ชนะ

describe('index.js', () => {
  describe('calculatePoint()', () => {

    // 1
    it('should return Winner is A : Game - 0 when input is [A, A, A, A, B]', () => {
      const input = ['A', 'A', 'A', 'A', 'B'];
      let result = calculatePoint(input);
      expect(result).equal('Winner is A : Game - 0');
    });

    // 2
    it('should return Winner is B : 0 - Game when input is [B, B, B, B, A, B]', () => {
      const input = ['B', 'B', 'B', 'B', 'A', 'B'];
      let result = calculatePoint(input);
      expect(result).equal('Winner is B : 0 - Game');
    });

    // 3
    it('should return Winner is A : Game - 15 when input is [A, A, B, A, A]', () => {
      const input = ['A', 'A', 'B', 'A', 'A'];
      let result = calculatePoint(input);
      expect(result).equal('Winner is A : Game - 15');
    });

    // 4
    it('should return Winner is B : 15 - Game when input is [B, B, A, B ,B]', () => {
      const input = ['B', 'B', 'A', 'B', 'B'];
      let result = calculatePoint(input);
      expect(result).equal('Winner is B : 15 - Game');
    });

    // 5
    it('should return In Game : 40 - 40 when input is [B, B, A, A, B, A]', () => {
      const input = ['B', 'B', 'A', 'A', 'B', 'A'];
      let result = calculatePoint(input);
      expect(result).equal('In Game : 40 - 40');
    });

    // 6
    it('should return In Game : A - 40 when input is [B, B, A, A, B, A, A]', () => {
      const input = ['B', 'B', 'A', 'A', 'B', 'A', 'A'];
      let result = calculatePoint(input);
      expect(result).equal('In Game : A - 40');
    });

    // 7
    it('should return In Game : 40 - A when input is [B, B, A, A, B, A, B]', () => {
      const input = ['B', 'B', 'A', 'A', 'B', 'A', 'B'];
      let result = calculatePoint(input);
      expect(result).equal('In Game : 40 - A');
    });

    // 8
    it('should return In Game : A - 40 when input is [B, B, A, A, A, B, A, B, A]', () => {
      const input = ['B', 'B', 'A', 'A', 'A', 'B', 'A', 'B', 'A'];
      let result = calculatePoint(input);
      expect(result).equal('In Game : A - 40');
    });

    // 9
    it('should return In Game : 40 - A when input is [B, B, A, A, A, B, A, B, B, B]', () => {
      const input = ['B', 'B', 'A', 'A', 'A', 'B', 'A', 'B', 'B', 'B'];
      let result = calculatePoint(input);
      expect(result).equal('In Game : 40 - A');
    });

    // 10
    it('should return In Game : 40 - 40 when input is [B, B, A, A, A, B, A, B, B]', () => {
      const input = ['B', 'B', 'A', 'A', 'A', 'B', 'A', 'B', 'B'];
      let result = calculatePoint(input);
      expect(result).equal('In Game : 40 - 40');
    });


    // 11
    it('should return Winner is A : Game - 40 when input is [B, B, A, A, A, B, A, B, A, B, A, B, A]', () => {
      const input = ['B', 'B', 'A', 'A', 'A', 'B', 'A', 'B', 'A', 'B', 'A', 'B', 'A'];
      let result = calculatePoint(input);
      expect(result).equal('Winner is A : Game - 40');
    });

    // 12
    it('should return Winner is B : 40 - Game when input is [B, B, A, A, B, A, B, A, B, A, B, B, B]', () => {
      const input = ['B', 'B', 'A', 'A', 'B', 'A', 'B', 'A', 'B', 'A', 'B', 'B', 'B'];
      let result = calculatePoint(input);
      expect(result).equal('Winner is B : 40 - Game');
    });
  });
});