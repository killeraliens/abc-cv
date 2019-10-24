const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // await page.goto('http://localhost:3000/', {waitUntill: 'networkidle2'});
  await page.goto('http://localhost:3000/');
  await page.emulateMedia('screen');
  await page.pdf({
    path: '/Users/user/Desktop/alexandra-brinn-cv.pdf',
    printBackground: true,
    width: '612px',
    height: '792',
  })
  await browser.close();
})()
