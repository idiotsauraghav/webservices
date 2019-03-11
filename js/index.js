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
    $(".owl-carousel").owlCarousel();
});