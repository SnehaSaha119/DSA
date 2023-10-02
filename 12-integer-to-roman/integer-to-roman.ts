function intToRoman(num: number): string {

    let str = ''
    while(num!=0){
        if(num>=1000){
            num=num-1000
            str=str+'M'
        }else if(num>=900 && num<1000){
            num=num-900
            str=str+'CM'
        }else if(num>=500 && num<900){
            num=num-500
            str=str+'D'
        }else if (num >= 400 && num < 500) {
            str=str+"CD";
            num=num-400;
        }
        else if (num >= 100 && num < 400) {
            str=str+"C";
            num=num-100;
        }
        else if (num >= 90 && num < 100) {
            str=str+"XC";
            num=num-90;
        }
        else if (num >= 50 && num < 90) {
            str=str+"L";
            num=num-50;
        }
        else if (num >= 40 && num < 50) {
            str=str+"XL";
            num=num-40;
        }
        else if (num >= 10 && num < 40) {
            str=str+"X";
            num=num-10;
        }
        else if (num == 9) {
            str=str+"IX";
            num=num-9;
        }
        else if (num >= 5 && num < 9) {
            str=str+"V";
            num=num-5;
        }
        else if (num == 4) {
            str=str+"IV";
            num=num-4;
        }
        else if (num < 4) {
            str=str+"I";
            num--;
        }
    }

    return str

    // let map = {
    //     1: 'I',
    //     4: 'IV',
    //     5: 'V',
    //     9: 'IX',
    //     10: 'X',
    //     40: 'XL',
    //     50: 'L',
    //     90: 'XC',
    //     100: 'C',
    //     400: 'CD',
    //     500: 'D',
    //     900: 'CM',
    //     1000: 'M'
    // }
    
    
};