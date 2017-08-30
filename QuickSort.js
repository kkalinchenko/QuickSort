var a = [5, 8, 13, 11, 7, 1, 1, 7, 5, 7, 12];

function QuickSort(array, begin, end){
  
  var oldBegin = begin,
  oldEnd = end,
  directionToLeft = true;
  
  if(begin === end) return array;
 
    while(begin < end){
      
      if(directionToLeft){
        if(array[begin] <= array[end]){
          end--;
        } else{
          swap(array,end,begin);
          directionToLeft = false;
        }
        
      }
        
      if(!directionToLeft){
        if(array[begin] <= array[end]){
          begin++;
        } else {
          swap(array, begin,end);
          directionToLeft = true;
        }
      }
      
    }
    
    if(begin === oldBegin) return;
    if ((begin - oldBegin) > 1) QuickSort(array, oldBegin, begin - 1);
    if ((oldEnd - end) > 1) QuickSort(array, end + 1, oldEnd);
    
    return array;
  
}

function swap(arr, a, b){
  var tmp = arr[a];
  arr[a] = arr[b];
  arr[b] = tmp;
} 

console.log(QuickSort(a, 0, a.length-1));
