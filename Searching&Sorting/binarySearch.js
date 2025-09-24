let search = function(nums, target) {
    left = 0
    right = nums.length - 1

    while(right >= left){
        middle = Math.floor((left+right)/2)
        if(target === nums[middle]){
            return middle
        }else if(target < nums[middle]){
            right = middle -1 
        }else{
            left = middle + 1
        }
            
        
    }

    return -1
    
};