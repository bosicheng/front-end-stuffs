define(function(){
    function sortArray(arr){
        arr.sort(function(x,y){
            return x-y;
        });
        return arr;
    }
    return sortArray;
    // 返回方法，暴露出去

})