const { JSDOM } = require("jsdom");

async function crawlPage(currentURL) {
    try {
        const resp = await fetch(currentURL);

        if (resp.status > 399){
            console.log(`HTTP error! status: ${resp.status}`);
            return;
        }

        const contentType = resp.headers.get("Content-Type");

        if (!contentType.includes('text/html')){
            console.log(`Non-HTML content type: ${contentType}`);
            return;
        }


        console.log( await resp.text())
    } catch (error) {
        console.log(`error in fetch : ${error}`);
    }
}

function getURLsFromHTML(htmlBody, baseUrl) {
  const urls = [];
  const dom = new JSDOM(htmlBody);
  const linkElements = dom.window.document.querySelectorAll("a");
  for (const link of linkElements) {
    const href = link.getAttribute("href");
    if (href.slice(0, 1) === "/") {
      try {
        const url = new URL(href, baseUrl).href;
        urls.push(url);
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        const url = new URL(href).href;
        urls.push(url);
      } catch (error) {
        console.error(error);
      }
    }
  }
  return urls;
}

function normalizeURL(urlString) {
  const url = new URL(urlString);
  const hostPath = `${url.hostname}${url.pathname}`;
  if (hostPath && hostPath.slice(-1) == "/") {
    return hostPath.slice(0, -1);
  }
  return hostPath;
}

module.exports = {
  normalizeURL,
  getURLsFromHTML,
  crawlPage,
};
