$(document).ready(function(){
    $("h6,.index-tips-arrow").on("click",function(){
        $("body").animate({opacity:"0"},1000, function(){      
            location.href="./framework/index.html";        
        })
    });
});