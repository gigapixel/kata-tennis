import { describe, it } from 'mocha';
import { expect } from 'chai';

import { Tennis } from '../src/tennis';

describe('tennis.js', () => {
    describe('playGame()', () => {
        it('Game - 0', () => {
            const t = new Tennis();
            const result = t.playGame(['A', 'A', 'A', 'A']);
            expect(result).equal("Winner is A : Game - 0");
        });

        it('Game - 15', () => {
            const t = new Tennis();
            const result = t.playGame(['A', 'B', 'A', 'A', 'A',]);
            expect(result).equal("Winner is A : Game - 15");
        });

        it('Game - 30', () => {
            const t = new Tennis();
            const result = t.playGame(['A', 'B', 'B', 'A', 'A', 'A',]);
            expect(result).equal("Winner is A : Game - 30");
        });

        it('Game - 40', () => {
            const t = new Tennis();
            const result = t.playGame(['A', 'A', 'A', 'B', 'B', 'B', 'A', 'A']);
            expect(result).equal("Winner is A : Game - 40");
        });

        //===============
        it('0 - Game', () => {
            const t = new Tennis();
            const result = t.playGame(['B', 'B', 'B', 'B']);
            expect(result).equal("Winner is B : 0 - Game");
        });

        it('15 - Game', () => {
            const t = new Tennis();
            const result = t.playGame(['B', 'A', 'B', 'B', 'B',]);
            expect(result).equal("Winner is B : 15 - Game");
        });

        it('30 - Game', () => {
            const t = new Tennis();
            const result = t.playGame(['B', 'A', 'A', 'B', 'B', 'B',]);
            expect(result).equal("Winner is B : 30 - Game");
        });

        it('40 - Game', () => {
            const t = new Tennis();
            const result = t.playGame(['A', 'A', 'A', 'B', 'B', 'B', 'B', 'B']);
            expect(result).equal("Winner is B : 40 - Game");
        });

        it('In Game 0 - 15 ', () => {
            const t = new Tennis();
            const result = t.playGame(['B']);
            expect(result).equal("In Game : 0 - 15");
        });
        //=== Deuce
        it('In Game 40 - 40   (Before Deuce)', () => {
            const t = new Tennis();
            const result = t.playGame(['A', 'A', 'A', 'B', 'B', 'B']);
            expect(result).equal("In Game : 40 - 40");
        });

        it('In Game 40 - 40   (After Deuce)', () => {
            const t = new Tennis();
            const result = t.playGame(['A', 'A', 'A', 'B', 'B', 'B', 'A', 'B']);
            expect(result).equal("In Game : 40 - 40");
        });
       
        it('In Game : A - 40   ', () => {
            const t = new Tennis();
            const result = t.playGame(['A', 'A', 'A', 'B', 'B', 'B', 'A']);
            expect(result).equal("In Game : A - 40");
        });

        it('In Game : 40 - A   ', () => {
            const t = new Tennis();
            const result = t.playGame(['A', 'A', 'A', 'B', 'B', 'B', 'B']);
            expect(result).equal("In Game : 40 - A");
        });

    });
});
