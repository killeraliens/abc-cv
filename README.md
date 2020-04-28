# CV of Alexandra Brinn Campbell

I am a designer gone fullstack web developer and this is my resume.
Created with React and Pupeteer. See instructions below if you are a developer and would like to use this as a template for your own CV.
[https://killeraliens.github.io/abc-cv](https://killeraliens.github.io/abc-cv/)


## Screenshots & Usage

### Live Version
View my CV. Download it! Formatted for mobile viewing too.
[Alexandra Brinn Campbell's CV](https://killeraliens.github.io/abc-cv/)

Deployed resume in desktop format.
<div>
  <kbd>
    <img src="./src/assets/cv-desktop.png" alt="'live' deployed resume desktop format screenshot">
  </kbd>
</div>
<br/>
Deployed resume in mobile format.
<div>
  <kbd>
    <img src="./src/assets/cv-mobile.png" alt="'live' resume mobile format screenshot">
  </kbd>
</div>
<br/>
Downloadable PDF format created.
<div>
  <kbd>
    <img src="./src/assets/cv-pdf.png" alt="'resume pdf format screenshot">
  </kbd>
</div>
<br/>


### For Developers
Use as a template for your own print and web CV.

1. To copy my template clone this repo with `git clone git@github.com:killeraliens/abc-cv.git`.
2. Install dependencies with `npm install`.
3. Make content changes to the `/src/store.js`.
4. Make content changes to the AboutSection inside `/components/App.js`.
5. Commit the changes to your own github repo if you wish to deploy with GitHub Pages.
6. Update the deploy url from within your `/package.json` file. website: `https://your-handle.github.io/your-repo-name/`.
7. Update your pdf name and project path within the `/scripts/generate-pdf.js` file.
8. Start the dev server with `npm start`
9. Create or update the downloadable PDF file with `npm run generate`. The new PDF format will be based on the sites' current HTML & CSS file state as a single 8.5" x 11" page.
10. Update the `cvPdf` path with your new PDF file name inside `/components/App.js`.
11. Deploy with `npm run deploy`.

## Built With

* React
* Puppeteer
* Node.js with Babel
* GitHub Pages
