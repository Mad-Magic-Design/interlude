export default function roll(count :number, sides:number, mod :number) :number{
    let result:number = 0;
    for (let i:number = 0; i<count; i++){
        result += Math.floor(Math.random() * sides)+1;
    }
    result += mod;
    return result
}

