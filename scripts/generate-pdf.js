const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // make sure your local server is running here before running `npm run generate`
  await page.goto('http://localhost:3000/');
  // removes the 'live' class for pdf version
  await page.evaluate(() => { document.getElementById("App").className = "App"})
  await page.emulateMedia('screen');
  await page.pdf({
    // replace this with your full local path of your cloned project path and preferred pdf name
    // delete the template pdf AFTER you run your first `npm run generate` with the new path
    path: '/Users/user/code/killeraliens/abc-cv/src/assets/your-name-here-cv.pdf',
    printBackground: true,
    width: '612px',
    height: '792px',
  })
  await browser.close();
})()
