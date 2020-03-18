// 変数宣言
var win = "あなたの勝ちです！"
var lose = "あなたの負けです！"
var draw = "あいこで..."

// 画像を事前に読み込んでおく処理
var images = ['img/choki.jpg', 'img/goo.jpg', 'img/par.jpg']

    window.onload = function(){
    // 画像のプリロード
    for (i = 0; i < images.length; i++) {
    var img = document.createElement('img');
    img.src = images[i] }
    };

// クリックイベントで自分と相手の画像表示を行う。
$('#choki').on("click", function() {
    $('#a').slideDown().html('<img src="./img/choki.jpg">')
    var opponent_hand = Math.floor( Math.random() *3 + 1);
    if (opponent_hand == 1) {
        $('#b').html('<img src="./img/choki.jpg">');
        $('h2').html(draw);
    } else if (opponent_hand == 2) {
        $('#b').html('<img src="./img/goo.jpg">');
        $('h2').html(lose);
        $('.janken').css('display', 'none');
        setTimeout(function() {
            $('#retry').fadeIn(800);
        }, 1000);
    } else if (opponent_hand == 3) {
        $('#b').html('<img src="./img/par.jpg">');
        $('h2').html(win);
        $('.janken').css('display', 'none');
        $('#retry').css('display', 'inherit');
        setTimeout(function(){
            alert("おめでとうございます！")
        }, 1000);
    }
});

$('#goo').on("click", function() {
    $('#a').slideDown().html('<img src="./img/goo.jpg">');
    var opponent_hand = Math.floor( Math.random() *3 + 1);
    if (opponent_hand == 1) {
        $('#b').html('<img src="./img/choki.jpg">');                
        $('h2').html(win);
        $('.janken').css('display', 'none');
        $('#retry').css('display', 'inherit');
        setTimeout(function(){
            alert("おめでとうございます！")
        }, 1000);
    } else if (opponent_hand == 2) {
        $('#b').html('<img src="./img/goo.jpg">');
        $('h2').html(draw);
    } else if (opponent_hand == 3) {
        $('#b').html('<img src="./img/par.jpg">');
        $('h2').html(lose);
        $('.janken').css('display', 'none');
        setTimeout(function() {
            $('#retry').fadeIn(800);
        }, 1000);
    }
});

$('#par').on("click", function() {
    $('#a').slideDown().html('<img src="./img/par.jpg">');
    var opponent_hand = Math.floor( Math.random() *3 + 1);
    if (opponent_hand == 1) {
        $('#b').html('<img src="./img/choki.jpg">');
        $('h2').html(lose);
        $('.janken').css('display', 'none');
        setTimeout(function() {
            $('#retry').fadeIn(800);
        }, 1000);
    } else if (opponent_hand == 2) {
        $('#b').html('<img src="./img/goo.jpg">');
        $('h2').html(win);
        $('.janken').css('display', 'none');
        $('#retry').css('display', 'inherit');
        setTimeout(function(){
            alert("おめでとうございます！")
        }, 1000);
    } else if (opponent_hand == 3) {
        $('#b').html('<img src="./img/par.jpg">');
        $('h2').html(draw);
    }
});