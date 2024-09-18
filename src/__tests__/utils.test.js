import { pointsForWord } from '../utils';

describe('pointsForWord', () => {
    it('Calculates the total points for a word (1 point per vowel, 2 points per consonant)', () => {
        const word = 'test';
        const points = pointsForWord(word);
        expect(points).toBe(7);
    });
    it('Handles words with either uppercase or lowercase letters in any combination', () => {
        const word = 'ConSonaNt';
        const points = pointsForWord(word);
        expect(points).toBe(15);
    });
    it('Gives a score of 0 for submissions containing numbers', () => {
        const word = '123abc';
        const points = pointsForWord(word);
        expect(points).toBe(0);
    });
    it('Gives a score of 0 for submissions containing special characters', () => {
        const word = 'abc!@#$';
        const points = pointsForWord(word);
        expect(points).toBe(0);
    });
    it('Gives a score of 0 for submissions containing spaces', () => {
        const word = 'abc def';
        const points = pointsForWord(word);
        expect(points).toBe(0);
    });
});