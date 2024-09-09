function canCompleteCircuit(gas: number[], cost: number[]): number {
    let totalGas = 0;  // Total gas available
    let totalCost = 0; // Total cost to travel
    let tank = 0;      // Gas left in the tank
    let start = 0;     // Starting station index

    for (let i = 0; i < gas.length; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
        tank += gas[i] - cost[i];  // Current tank status after reaching station i

        // If tank is negative, that means starting from this station won't work
        if (tank < 0) {
            start = i + 1;  // Move the starting point to the next station
            tank = 0;       // Reset the tank
        }
    }

    // Check if the total gas is greater or equal to the total cost
    return totalGas >= totalCost ? start : -1;
}
