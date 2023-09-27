function getRow(rowIndex: number): number[] {

    let temp=[]
    for(let i=1; i<=rowIndex+1; i++)
    {
        temp = []  
        let k=1;
        for(let j=1; j<=i; j++)
        { 
            temp.push(k)
            k=k*(i-j)/j; 
        }
        console.log(temp)
    }
    return temp
};