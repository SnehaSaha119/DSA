function trap(height: number[]): number {

    let l = 0;
    let r = height.length-1;
    let lmax = 0
    let rmax = 0
    let vol = 0;

    while(l<=r){

        if(height[l]<height[r]){
            //handle l
            if(lmax>height[l]){
                //you can store
                vol = vol + (lmax-height[l]);
            }else{
                lmax = height[l];
            }
            l++;

        }else{
            //handle r
            if(rmax>height[r]){
                //you can store
                vol = vol + (rmax-height[r]);
            }else{
                rmax = height[r];
            }
            r--;
        }
    }

    return vol;
    
};