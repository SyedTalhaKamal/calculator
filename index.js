function inputval(num){
    var result = document.getElementById("result");
    result.value += num;
}
function clearRes(){
    var result = document.getElementById("result");
    result.value ="" ;
}
function resultval(){
    var result = document.getElementById("result");
    result.value = eval(result.value);
}