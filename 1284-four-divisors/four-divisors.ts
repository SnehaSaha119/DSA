function sumFourDivisors(nums: number[]): number {

    let totalSum = 0;
    for(let i=0;i<nums.length;i++){
        let divisors = 2;
        let sum = 1 + nums[i];

        for(let j=2;j*j<=nums[i];j++){
            if(nums[i]%j==0){

                if(Math.floor(nums[i]/j)==j){
                    divisors++;
                    sum = sum + j;
                }else{
                    divisors+=2;
                    sum = sum + j + Math.floor(nums[i]/j)
                }
            }
        }

        if(divisors==4) totalSum = totalSum + sum;
        
    }

    return totalSum;
    
};