/*
const instagramLinkButton = document.getElementById('instagramLink');
const facebookLinkButton = document.getElementById('facebookLink');
const youtubeLinkButton = document.getElementById('youtubeLink');
const emailButton = document.getElementById('emailAddress');
const navigationToOfficeButton = document.getElementById('navigationToOffice');

instagramLinkButton.addEventListener('contextmenu', e => {
    e.preventDefault();
    share("分享鐵騎社的 Instagram 帳號", "@cyut_bike", "https://www.instagram.com/cyut_bike");
});

facebookLinkButton.addEventListener('contextmenu', e => {
    e.preventDefault();
    share("分享鐵騎社的 Facebook 粉絲專頁", "朝陽鐵騎社", "https://www.facebook.com/cyutcyct");
});

youtubeLinkButton.addEventListener('contextmenu', e => {
    e.preventDefault();
    share("分享鐵騎社的 Youtube 頻道", "朝陽鐵騎社", "https://www.youtube.com/channel/UCWN-rVESPb9jmAUrKTNzqag/featured");
});

emailButton.addEventListener('contextmenu', e => {
    e.preventDefault();
    share("分享鐵騎社的電子郵件地址", "ccteam168@gmail.com", "");
});

navigationToOfficeButton.addEventListener('contextmenu', e => {
    e.preventDefault();
});*/


function share(shareTitle, shareText, shareUrl){
    if (navigator.share) {
        navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        })
      }
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('sw.js').then(function(registration) {
        console.log('SW registration successful, scope: ', registration.scope);
      }, function(err) {
        console.log('SW registration failed: ', err);
      });
    });
  }