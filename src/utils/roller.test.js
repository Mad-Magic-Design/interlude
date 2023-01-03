import roll from './roller.ts'

it ('should be between the min and max possible values', () => {
    expect(roll(1,2,0)).toBeGreaterThanOrEqual(1);
    expect(roll(1,2,0)).toBeLessThanOrEqual(2);
    expect(roll(1,2,0)).not.toBeGreaterThan(2);
    expect(roll(1,2,0)).not.toBeLessThan(1);
    
    expect(roll(2,20,100)).toBeGreaterThanOrEqual(102);
    expect(roll(2,20,100)).toBeLessThanOrEqual(140);
    expect(roll(2,20,100)).not.toBeGreaterThan(140);
    expect(roll(2,20,100)).not.toBeLessThan(102);
    
    expect(roll(3,4, -20)).toBeGreaterThanOrEqual(-17)
    expect(roll(3,4,-20)).toBeLessThanOrEqual(-8)
    expect(roll(3,4, -20)).not.toBeLessThan(-17)
    expect(roll(3,4,-20)).not.toBeGreaterThan(-8)
    
})

it('should be a number', () =>{
    expect(roll(1,1,1)).toEqual(expect.any(Number));
})