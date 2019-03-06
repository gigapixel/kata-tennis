import { describe, it } from 'mocha';
import { expect } from 'chai';

import { main } from '../src/example';

describe('example.js', () => {
  describe('main()', () => {
    it('A WINEER', async () => {
      let input = ['A','B','A','B','A','B','A','A'];
      let result = await main(input);
      expect(result.status).equal('A WIN');
    });
    it('B WINNER', async () => {
      let input = ['A','B','A','B','B','B','B','A'];
      let result = await main(input);
      expect(result.status).equal('B WIN');
    });
    it('IN GAME', async () => {
      let input = ['A','B','A','B'];
      let result = await  main(input);
      expect(result.status).equal('');
    });
    it('DUCE', async () => {
      let input = ['A','B','A','B','A','B','B','A'];
      let result = await main(input);
      expect(result.status).equal('DUCE');
    });
  });
});
