import { describe, it } from 'mocha';
import { expect } from 'chai';

import { mainFunctiuon } from '../src/example';

describe('example.js', () => {
  describe('mainFunctiuon()', () => {
    it('IN GAME 15 : 15', () => {
      let input = ['A', 'B'];
      let result = mainFunctiuon(input);
      expect(result).equal('IN GAME : 15 - 15');
    });
    it('IN GAME 30 : 15', async () => {
      let input = ['A', 'B', 'A'];
      let result = mainFunctiuon(input);
      expect(result).equal('IN GAME : 30 - 15');
    });
    it('IN GAME 15 : 30', async () => {
      let input = ['A', 'B', 'B'];
      let result = mainFunctiuon(input);
      expect(result).equal('IN GAME : 15 - 30');
    });
    it('IN GAME 30 : 30', async () => {
      let input = ['A', 'B', 'A', 'B'];
      let result = mainFunctiuon(input);
      expect(result).equal('IN GAME : 30 - 30');
    });
    it('IN GAME 40 : 30', async () => {
      let input = ['A', 'B', 'A', 'B', 'A'];
      let result =  mainFunctiuon(input);
      expect(result).equal('IN GAME : 40 - 30');
    });
    it('IN GAME 30 : 40', async () => {
      let input = ['A', 'B', 'A', 'B', 'B'];
      let result =  mainFunctiuon(input);
      expect(result).equal('IN GAME : 30 - 40');
    });
    it('IN GAME 40 : 40', async () => {
      let input = ['A', 'B', 'A', 'B', 'A', 'B'];
      let result =  mainFunctiuon(input);
      expect(result).equal('IN GAME : 40 - 40 (before duce)');
    });
    it('IN GAME 40 : 40', async () => {
      let input = ['A', 'B', 'A', 'B', 'A', 'B', 'A', 'B'];
      let result =  mainFunctiuon(input);
      expect(result).equal('IN GAME : 40 - 40 (after duce)');
    });
    it('A WINNER (NORMAL)', async () => {
      let input = ['A', 'B', 'A', 'B', 'A', 'A'];
      let result =  mainFunctiuon(input);
      expect(result).equal('WINNER IS A : GAME - 30');
    });
    it('B WINNER (NORMAL)', async () => {
      let input = ['A', 'B', 'A', 'B', 'B', 'B'];
      let result =  mainFunctiuon(input);
      expect(result).equal('WINNER IS B : 30 - GAME');
    });
    it('A ADVANCE', async () => {
      let input = ['A', 'B', 'A', 'B', 'A', 'B', 'A'];
      let result =  mainFunctiuon(input);
      expect(result).equal('IN GAME : A - 40');
    });
    it('B ADVANCE', async () => {
      let input = ['A', 'B', 'A', 'B', 'A', 'B', 'B'];
      let result =  mainFunctiuon(input);
      expect(result).equal('IN GAME : 40 - A');
    });
    it('A WINNER (DUCE)', async () => {
      let input = ['A', 'B', 'A', 'B', 'A', 'B', 'A', 'A'];
      let result =  mainFunctiuon(input);
      expect(result).equal('WINNER IS A : GAME - 40');
    });
    it('B WINNER (DUCE)', async () => {
      let input = ['A', 'B', 'A', 'B', 'A', 'B', 'B', 'B'];
      let result =  mainFunctiuon(input);
      expect(result).equal('WINNER IS B : 40 - GAME');
    });
    it('DUCE', async () => {
      let input = ['A', 'B', 'A', 'B', 'A', 'B', 'A', 'B'];
      let result =  mainFunctiuon(input);
      expect(result).equal('IN GAME : 40 - 40 (after duce)');
    });
  });
});
