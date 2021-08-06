$(function(){
    // 즐겨찾기 깜박임 효과
    setInterval(fnBlink, 550);
    function fnBlink(){
    $("#blinkStr").toggle();
    }
});
