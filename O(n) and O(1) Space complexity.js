function booo(n){
  for(let i = 0; i< n.length; i++){
    console.log('booo!');
  }
}

boo([1,2,3,4,5]) 
//O(n) time complexity
//O(1) space complexity

function HiNTimes(n){
  let hiArray = [];
  for(let i =0; i < n.length; i++){
    hiArray[i] = 'hi';
  }
  return hiArray;
}

HiNTimes(6) 
//O(n) time complexity
//O(n) space complexity