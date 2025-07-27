const {crawlPage} = require("./crawl");

function main() {
  if (process.argv.length < 3) {
    console.log("No website(s) provided");
    process.exit(1);
  }
  const baseUrl = process.argv[2];

  crawlPage(baseUrl);
}

main();
