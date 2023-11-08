function isNStraightHand(hand: number[], groupSize: number): boolean {
    if(groupSize==1) return true

    hand.sort((a,b)=>a-b)

    let map = {}

    for(let i=0;i<hand.length;i++){
        if(map[hand[i]]) map[hand[i]]++
        else map[hand[i]]=1
    }


    while(1){
        let keys = Object.keys(map)

        let index = keys.findIndex((value)=>map[value]!=0)

        if(index==-1) return true

        if(index+1==keys.length || map[keys[index+1]]==0) return false

        let count=2
        map[keys[index]]--
        index++
        let flag = true
        while(count<=groupSize){
            if((Number(keys[index])-Number(keys[index-1]))!=1 || map[keys[index]]==0) 
                flag=false
            count++
            map[keys[index]]--
            index++
        }
        if(flag==false) return false
    }

    
    
};