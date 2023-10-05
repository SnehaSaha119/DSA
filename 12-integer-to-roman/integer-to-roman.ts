function intToRoman(num: number): string {

    // let str = ''
    // while(num!=0){
    //     if(num>=1000){
    //         num=num-1000
    //         str=str+'M'
    //     }else if(num>=900 && num<1000){
    //         num=num-900
    //         str=str+'CM'
    //     }else if(num>=500 && num<900){
    //         num=num-500
    //         str=str+'D'
    //     }else if (num >= 400 && num < 500) {
    //         str=str+"CD";
    //         num=num-400;
    //     }
    //     else if (num >= 100 && num < 400) {
    //         str=str+"C";
    //         num=num-100;
    //     }
    //     else if (num >= 90 && num < 100) {
    //         str=str+"XC";
    //         num=num-90;
    //     }
    //     else if (num >= 50 && num < 90) {
    //         str=str+"L";
    //         num=num-50;
    //     }
    //     else if (num >= 40 && num < 50) {
    //         str=str+"XL";
    //         num=num-40;
    //     }
    //     else if (num >= 10 && num < 40) {
    //         str=str+"X";
    //         num=num-10;
    //     }
    //     else if (num == 9) {
    //         str=str+"IX";
    //         num=num-9;
    //     }
    //     else if (num >= 5 && num < 9) {
    //         str=str+"V";
    //         num=num-5;
    //     }
    //     else if (num == 4) {
    //         str=str+"IV";
    //         num=num-4;
    //     }
    //     else if (num < 4) {
    //         str=str+"I";
    //         num--;
    //     }
    // }

    // return str

    let integer = [1,4,5,9,10,40,50,90,100,400,500,900,1000]
    let roman = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M']
    let l = integer.length - 1
    let firstDigit
    let str = ''
    while(num!=0){
        firstDigit = Math.floor(num / integer[l])
        num = num % integer[l]
        while(firstDigit!=0){
            str = str + roman[l]
            firstDigit--
        }
        l--
    }

    return str
    
};