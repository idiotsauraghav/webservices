//__ Banner texts ...
let bannerTexts = ["innovation", "brand", "engineering", "research"];
let bannerTextIndex = 0;
let currentBannerText = bannerTexts[bannerTextIndex];
let currentBannerTextSpan = document.getElementById("current-banner-text");
bannerTextChange = () => {
    setInterval(()=> {
        bannerTextIndex++;
        currentBannerText = bannerTexts[bannerTextIndex];
        currentBannerTextSpan.innerHTML = `${currentBannerText}.`;

        if(bannerTextIndex == 3) {
            bannerTextIndex = -1;
        }
    }, 1000);
}
bannerTextChange();

//__ Owl carousel ...
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 5
    });

    $(".banner-wrapper").css("height" , window.innerHeight);
    $(".banner-img-overlay").css("height" , window.innerHeight);
    $(".banner-text-wrapper").css("height" , window.innerHeight);
    $(".banner-img").css("height" , window.innerHeight);
});

//__ Footer ...
$(function() {
    $('.footer-links-holder h3').click(function () {
        $(this).parent().toggleClass('active');
    });
});