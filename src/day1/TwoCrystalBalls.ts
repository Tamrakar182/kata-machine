export default function two_crystal_balls(breaks: boolean[]): number {

    // sqrt of length
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));

    // set initial point to the sqrt of length
    let i = jumpAmount;
    // checked for breaks jumping sqrt of length
    for(;i<breaks.length;i+=jumpAmount) {
        if(breaks[i]) {
            break;
        }
    }

    // we jumped back one sqrt of length
    i -= jumpAmount;

    // then linearly searching at most a sqrt until a break is found
    for(let j = 0; j <= jumpAmount; ++j, ++i) {
        if(breaks[i]) {
            return i;
        }
    }

    // if break is not found
    return -1;
}