import { MoneyPipe } from "./money.pipe";

describe('test cash  pipe', () => {
  let moneyPipe: any;
  beforeEach(()=>{
    moneyPipe= new MoneyPipe();
  })
//   case 1
it('test if it accept string',()=>{
    // expect(moneyPipe.transform(12)).toBe('number')
})
// case 2 
it('test if we input 12 it will be 600',()=>{
    expect(moneyPipe.transform(10)).toEqual(600)
})
});
