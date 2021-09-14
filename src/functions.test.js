import {timesTwo} from "./functions"

// first arg is name of Test
// second arg is function i.e. what shoud be tested
test("Multiplies by two", ()=> {
    expect(timesTwo(4)).toBe(8);
})

