import { Die, Outcome } from './die';
//import { Outcome } from './die'

export const DICE: Die[] = [
    new Die(4,'d4', [{id: 1, outstring: 'one'},{id: 2, outstring: 'two'},{id: 3, outstring: 'three'},{id: 4, outstring: 'four'}]),
    new Die(6, 'd6', [{id: 1, outstring: 'one'},{id: 2, outstring: 'two'},{id: 3, outstring: 'three'},{id: 4, outstring: 'four'},{id: 5, outstring: 'five'},{id: 6, outstring: 'six'}]),
    new Die(8, 'd8', [{id: 1, outstring: 'one'},{id: 2, outstring: 'two'},{id: 3, outstring: 'three'},{id: 4, outstring: 'four'},{id: 5, outstring: 'five'},{id: 6, outstring: 'six'},{id: 7, outstring: 'seven'},{id: 8, outstring: 'eight'}]),
    new Die(10, 'd10t', [{id: 1, outstring: 'one'},{id: 2, outstring: 'two'},{id: 3, outstring: 'three'},{id: 4, outstring: 'four'},{id: 5, outstring: 'five'},{id: 6, outstring: 'six'},{id: 7, outstring: 'seven'},{id: 8, outstring: 'eight'},{id: 9, outstring: 'nine'},{id: 10, outstring: 'ten'}]),
    new Die(10, 'd10u', [{id: 1, outstring: 'one'},{id: 2, outstring: 'two'},{id: 3, outstring: 'three'},{id: 4, outstring: 'four'},{id: 5, outstring: 'five'},{id: 6, outstring: 'six'},{id: 7, outstring: 'seven'},{id: 8, outstring: 'eight'},{id: 9, outstring: 'nine'},{id: 10, outstring: 'ten'}]),
    new Die(12, 'd12', [{id: 1, outstring: 'one'},{id: 2, outstring: 'two'},{id: 3, outstring: 'three'},{id: 4, outstring: 'four'},{id: 5, outstring: 'five'},{id: 6, outstring: 'six'},{id: 7, outstring: 'seven'},{id: 8, outstring: 'eight'},{id: 9, outstring: 'nine'},{id: 10, outstring: 'ten'},{id: 11, outstring: 'eleven'},{id: 12, outstring: 'twelve'}]),
    new Die(20, 'd20', [{id: 1, outstring: 'one'},{id: 2, outstring: 'two'},{id: 3, outstring: 'three'},{id: 4, outstring: 'four'},{id: 5, outstring: 'five'},{id: 6, outstring: 'six'},{id: 7, outstring: 'seven'},{id: 8, outstring: 'eight'},{id: 9, outstring: 'nine'},{id: 10, outstring: 'ten'},{id: 11, outstring: 'eleven'},{id: 12, outstring: 'twelve'},{id: 13, outstring: 'thirt'},{id: 14, outstring: 'fourt'},{id: 15, outstring: 'fift'},{id: 16, outstring: 'sixt'},{id: 17, outstring: 'sevent'},{id: 18, outstring: 'eightt'},{id: 19, outstring: 'ninet'},{id: 20, outstring: 'twenty'}])//,
    //new Die(100, 'd100')
]