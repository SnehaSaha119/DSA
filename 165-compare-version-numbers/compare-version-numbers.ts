function compareVersion(version1: string, version2: string): number {

    let ver1 = version1.split(".").map((value)=>parseInt(value))
    let ver2 = version2.split(".").map((value)=>parseInt(value))

    if(ver1.length>ver2.length){
        let i=ver1.length-ver2.length
        while(i!=0){
            ver2.push(0)
            i--
        }
    } else if(ver1.length<ver2.length){
        let i=ver2.length-ver1.length
        while(i!=0){
            ver1.push(0)
            i--
        }
    }

    for(let i=0;i<ver1.length;i++){
        if(ver1[i]>ver2[i]) return 1
        else if(ver1[i]<ver2[i]) return -1
    }

    return 0
    
};