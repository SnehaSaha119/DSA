function leastInterval(tasks: string[], n: number): number {

    let map = new Array(26).fill(0)

    for(let i=0;i<tasks.length;i++){
        let index = tasks[i].charCodeAt(0)-'A'.charCodeAt(0)
        map[index]++
    }

    map.sort((a,b)=> a-b)

    /*tasks = ["A","A","A","B","B","B"], n = 2
        map = [0,0,...,3,3]
        maxFreq = 3
        idleSlot = 4

        for 24 to 0
            idleSlot = 4 - 3 = 1

        if 6 + 1 = 7

    */

    let idleSlotFreq = map[25] - 1
    let idleSlot = idleSlotFreq*n

    for(let i=24;i>=0;i--){
        idleSlot = idleSlot - Math.min(map[i],idleSlotFreq)
    }

    if(idleSlot>0) return tasks.length + idleSlot
    else return tasks.length

};