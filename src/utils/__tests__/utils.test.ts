import { serializeFormQuery, dateToUnix, unixToDate } from '../utils';

describe('serializeFormQuery()', () => {
    describe('Basic tests', () => {
        it('Should return empty object', () => {
            expect(serializeFormQuery({})).toEqual({});
        });
    });

    describe('Functional tests', () => {
        it('Should return appropriate value', () => {
            expect(serializeFormQuery({foo: 'bar'})).toEqual({foo: 'bar'});
            expect(serializeFormQuery({foo: 'bar', foo1: undefined})).toEqual({foo: 'bar'});
        });
    });
});

describe('dateToUnix()', () => {
    describe('Basic tests', () => {
        it('Should return empty object', () => {
            expect(dateToUnix(new Date())).toBeTruthy();
        });
    });

    describe('Functional tests', () => {
        it('Should return appropriate value', () => {
            expect(dateToUnix(new Date())).toEqual(Math.floor(new Date().getTime() / 1000));
        });
    });
});

describe('unixToDate()', () => {
    describe('Basic tests', () => {
        it('Should return empty object', () => {
            expect(unixToDate(1697408297)).toBeTruthy();
        });
    });

    describe('Functional tests', () => {
        it('Should return appropriate value', () => {
            expect(unixToDate(1697408297)).toEqual(new Date(1697408297 * 1000));
        });
    });
});
