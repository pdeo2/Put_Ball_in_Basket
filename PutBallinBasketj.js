var ball=$("#baller");
var push=$("#push");
var width=0;
var ht=55;
var arr=['red', 'blue', 'yellow', 'lightgrey', 'darkorchid', 'black', 'orange', 'deeppink', 'green', 'purple', 'saddlebrown', 'lightseagreen', 'deepskyblue', 'firebrick', 'crimson'];

push.click(function(){
    //if(width<900){
       
    ball.append('<div id="ballo" style="background-color: '+ arr[Math.floor(Math.random()*15)] + '"> </div>');
    

    
    width+=55;
    //}else{
       
       
      
    
    
});
