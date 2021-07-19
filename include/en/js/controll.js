$(document).ready(function(){
    $(document).scroll(function(){
        if($(this).scrollTop() > 90) {
            $('#topBtn').fadeIn(500);
        } else {
            $('#topBtn').fadeOut(500);
        }
    });		
    $('#topBtn').click(function(){
        $('html, body').animate({ scrollTop: 0 }, 500);
    });
});

//menu scroll
$(document).ready(function(){
    $('#header').load("./header.html");
    $('#footer').load("./footer.html");
    
    nav[0].classList.remove("nav");
});
var nav = document.getElementsByTagName("header");

window.onscroll = function sticky() {
    if(window.pageYOffset > nav[0].offsetTop) {
    nav[0].classList.add("nav");
    } else {
    nav[0].classList.remove("nav");
    }
}

// 페이지 점검중
function maintenanceAlert(){
    alert("최신 버전 컨텐츠가 준비중입니다.");
}

