function convertToTitle(columnNumber: number): string {

    let str = '';
    while(columnNumber!=0){
        columnNumber--;
        let alpa = columnNumber%26;
        str = String.fromCharCode(65+alpa) + str
        columnNumber = Math.floor(columnNumber/26);
    }

    return str;
    
};