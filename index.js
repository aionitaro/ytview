const puppeteer = require('puppeteer');

var minutes = 1;
let the_interval = minutes * 60 * 1000;

setInterval(function() {
  console.log("Trimit Request");
(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/chromium-browser',
    args: [
      '--incognito',
    ]
  });      
    const page = await browser.newPage().then(console.log("Page"));
    await page.setUserAgent(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36'
     )
    await page.goto('https://www.youtube.com/watch?v=eWutuTu28Mw?utm_source=autoplaya1&utm_medium=maimuta&utm_campaign=maimuta&utm_term=maimutaâ', { waitUntil: ["networkidle2"] }).then(console.log("DomContentLoaded"));
    const [button] = await page.$x("/html/body/ytd-app/ytd-consent-bump-v2-lightbox/tp-yt-paper-dialog/div[2]/div[2]/div[5]/div[2]/ytd-button-renderer[2]/a/tp-yt-paper-button/yt-formatted-string");  
    await button.click();
    await page.waitForTimeout(31500)
    //await page.hover('#movie_player > div.html5-video-container')
    await page.screenshot({path: 'yt2.png', fullPage: true});
    await browser.close().then(console.log("OK"));  
})();
}, the_interval);
