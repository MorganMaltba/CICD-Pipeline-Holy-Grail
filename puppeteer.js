const puppeteer = require('puppeteer');

async function puppetTest() {
    let browser = await puppeteer.launch();
    let page = await browser.newPage();
    await page.setViewport({width:1920, height:1080});

    await page.goto('http://localhost:3000/')

    await page.click('#plus')

    await page.screenshot({path:'screen.png'})

    await browser.close();
}

module.exports = puppetTest;