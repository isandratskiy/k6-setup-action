const {execSync} = require("child_process")

console.log("INSTALLING K6");

execSync("sudo sed -i '/dl\\.bintray\\.com\\/loadimpact\\/deb/d' /etc/apt/sources.list", {stdio: "inherit"})
execSync("sudo apt-key del 379CE192D401AB61", {stdio: "inherit"})
execSync("sudo apt-get update", {stdio: "inherit"})
execSync("sudo apt-get install k6", {stdio: "inherit"})

console.log("K6 INSTALLED SUCCESSFULLY");
