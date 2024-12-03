function findTheCity(n: number, edges: number[][], distanceThreshold: number): number {
    let d = Array.from({length: n+1 },()=> new Array(n+1).fill(Number.MAX_SAFE_INTEGER));

    for(let i=0;i<edges.length;i++){
        let u = edges[i][0]
        let v = edges[i][1]
        let w = edges[i][2]
        d[u][v] = w 
        d[v][u] = w 
    }

    for(let i=0;i<n;i++){
        d[i][i] = 0
    }

    for(let k=0;k<n;k++){
        for(let i=0;i<n;i++){
            for(let j=0;j<n;j++){
                if(d[i][k]!=Number.MAX_SAFE_INTEGER && d[k][j]!=Number.MAX_SAFE_INTEGER && d[i][j]>d[i][k]+d[k][j]){
                    d[i][j] = d[i][k]+d[k][j]
                }
            }
        }
    }

    let mini = Number.MAX_SAFE_INTEGER
    let count = 0
    let ans = -1
    for(let i=0;i<n;i++){
        count = 0
        for(let j=0;j<n;j++){
            if(i!=j && d[i][j]<=distanceThreshold){
                count++
            }
        }
        if(count<=mini){
            mini = count
            ans = i
        }
    }

    return ans
};