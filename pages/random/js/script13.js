var numberStrings13=["1","2","3","4","5","6","7","8","9","10","11","12","13"];

function updateNumberList(array){
  var s="";
  for(var i=0;i<array.length;i++){
    s+="<br>"+array[i];
  }
  document.getElementById("numberList").innerHTML=s;
}

function shuffleUsingRandomSwapping(array){
  var j,x,i=0,len=array.length;
  for(i;i<len;i++){
    j=Math.floor(Math.random()*len);
    x=array[i];
    array[i]=array[j];
    array[j]=x;
  }
};