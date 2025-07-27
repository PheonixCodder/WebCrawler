const {crawlPage} = require("./crawl");
const { printReport } = require("./report");

async function main() {
  if (process.argv.length < 3) {
    console.log("No website(s) provided");
    process.exit(1);
  }
  const baseUrl = process.argv[2];

  const pages = await crawlPage(baseUrl, baseUrl, {});
  
  printReport(pages)
}

main();
