const puppeteer = require( 'puppeteer' );

( async () =>
{
    const browser = await puppeteer.launch();
    const page    = await browser.newPage();

    await page.goto( 'https://www.doogee.cc/' );

    await page.pdf( { 'path' : 'example.pdf' } );

    await browser.close();
})();