function distributeCandies(candyType: number[]): number {
    let set = new Set(candyType);
    return Math.min(set.size, candyType.length / 2);
    
};