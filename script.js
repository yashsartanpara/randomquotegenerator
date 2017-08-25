var tweet = function() {
  var t = $(".newquote .p1").html();
  t = t.slice(44);
  var win = window.open('https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent(t), '_blank');
  win.focus();
}

var newQuote = function() {
$.ajax({
    type: "GET",
    url: "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en",
    dataType: 'jsonp',
    jsonp: 'jsonp',
    jsonpCallback: 'cb',
    crossDomain: true,
    success: function(data) {
      $('.newquote .p1').html("\"<i class='fa fa-quote-left'></i>&nbsp;&nbsp;" + data["quoteText"]+" \"");
      if (data["quoteAuthor"] !== "") {
        $('.p2').html(" - " + data["quoteAuthor"]);
      } else {
        $('.p2').html(" - Unknown");
      }
    }
  });    
}

$(document).ready(function() {
function randomColor(){
    rc = "#";
    for(i=0;i<6;i++){
        rc += Math.floor(Math.random()*16).toString(16);
    }
    return rc;
}
  var randc;
  newQuote();
  $("#quoteGETAJAX").click(function(){
    randc=randomColor();
  $("body").css("background-color",randc); 
    $(".btn").css("background-color",randc);
  newQuote();  
  });
  
  $("#tweetit").click(function(){
  tweet();
     $(".btn").css("background-color",randc);
  });
  
});  