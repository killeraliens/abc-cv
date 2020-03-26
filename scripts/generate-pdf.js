const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // await page.goto('http://localhost:3000/', {waitUntill: 'networkidle2'});
  await page.goto('http://localhost:3000/');
  await page.emulateMedia('screen');
  await page.pdf({
    // replace this path with the name of your cloned project path and preferred pdf name
    path: '/Users/user/code/killeraliens/alexandra-brinn-cv/src/assets/alexandra-brinn-campbell-cv.pdf',
    printBackground: true,
    width: '612px',
    height: '792px',
  })
  await browser.close();
})()
