$(function(){
  var k = 1;
  $("#dos").click(function(){
    var num = $(".js-dos").attr("value");
    for(var i=1; i<parseInt(num); i++){
      get();
      apppend(k);
      k++;
    }
  });
  function get(){
    $.get("", function(data){
    });
  }
  function apppend(i){
    $(".js-counter").append("<p>サイト攻撃"+i+"回目"+" : Done</p>");
  } 
});
