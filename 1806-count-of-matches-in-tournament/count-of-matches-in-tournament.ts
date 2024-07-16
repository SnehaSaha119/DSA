function numberOfMatches(n: number): number {

    let matches = 0;
    let teams = n;
    let advances = 0;
    let totalMatches = 0;

    while(advances!=1){
        if(teams%2==0){
            matches = teams/2;
            advances = teams/2;
        }else{
            matches = (teams-1)/2;
            advances = ((teams-1)/2)+1;
        }

        teams = advances;
        totalMatches = totalMatches + matches;
    }

    return totalMatches;

};