import { describe, it } from 'mocha';
import { expect } from 'chai';

import { main } from '../src/example';

describe('example.js', () => {
  describe('main()', () => {
    it('START', async () => {
      let input = [];
      let result = await main(input);
      expect(result.status).equal('IN GAME : 0 - 0');
    });
    it('INGAME 15 : 0', async () => {
      let input = ['A'];
      let result = await main(input);
      expect(result.status).equal('IN GAME : 15 - 0');
    });
    it('INGAME 0 : 15', async () => {
      let input = ['B'];
      let result = await main(input);
      expect(result.status).equal('IN GAME : 0 - 15');
    });
    it('IN GAME 15 : 15', async () => {
      let input = ['A', 'B'];
      let result = await main(input);
      expect(result.status).equal('IN GAME : 15 - 15');
    });
    it('IN GAME 30 : 15', async () => {
      let input = ['A', 'B', 'A'];
      let result = await main(input);
      expect(result.status).equal('IN GAME : 30 - 15');
    });
    it('IN GAME 15 : 30', async () => {
      let input = ['A', 'B', 'B'];
      let result = await main(input);
      expect(result.status).equal('IN GAME : 15 - 30');
    });
    it('IN GAME 30 : 30', async () => {
      let input = ['A', 'B', 'A', 'B'];
      let result = await main(input);
      expect(result.status).equal('IN GAME : 30 - 30');
    });
    it('IN GAME 40 : 30', async () => {
      let input = ['A', 'B', 'A', 'B', 'A'];
      let result = await main(input);
      expect(result.status).equal('IN GAME : 40 - 30');
    });
    it('IN GAME 30 : 40', async () => {
      let input = ['A', 'B', 'A', 'B', 'B'];
      let result = await main(input);
      expect(result.status).equal('IN GAME : 30 - 40');
    });
    it('IN GAME 40 : 40', async () => {
      let input = ['A', 'B', 'A', 'B', 'A', 'B'];
      let result = await main(input);
      expect(result.status).equal('IN GAME : 40 - 40');
    });
    it('A WINNER (NORMAL)', async () => {
      let input = ['A', 'B', 'A', 'B', 'A', 'A'];
      let result = await main(input);
      expect(result.status).equal('WINNER IS A : GAME - 30');
    });
    it('B WINNER (NORMAL)', async () => {
      let input = ['A', 'B', 'A', 'B', 'B', 'B'];
      let result = await main(input);
      expect(result.status).equal('WINNER IS B : 30 - GAME');
    });
    it('A ADVANCE', async () => {
      let input = ['A', 'B', 'A', 'B', 'A', 'B', 'A'];
      let result = await main(input);
      expect(result.status).equal('IN GAME : A - 40');
    });
    it('B ADVANCE', async () => {
      let input = ['A', 'B', 'A', 'B', 'A', 'B', 'B'];
      let result = await main(input);
      expect(result.status).equal('IN GAME : 40 - A');
    });
    it('A WINNER (DUCE)', async () => {
      let input = ['A', 'B', 'A', 'B', 'A', 'B', 'A', 'A'];
      let result = await main(input);
      expect(result.status).equal('WINNER IS A : GAME - 40');
    });
    it('B WINNER (DUCE)', async () => {
      let input = ['A', 'B', 'A', 'B', 'A', 'B', 'B', 'B'];
      let result = await main(input);
      expect(result.status).equal('WINNER IS B : 40 - GAME');
    });
    it('DUCE', async () => {
      let input = ['A', 'B', 'A', 'B', 'A', 'B', 'A', 'B'];
      let result = await main(input);
      expect(result.status).equal('IN GAME : 40 - 40');
    });
  });
});
