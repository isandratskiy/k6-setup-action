const {execSync} = require('child_process')

console.log(`INSTALLING K6`);

execSync('sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 379CE192D401AB61', {stdio: 'inherit'})
execSync('echo "deb https://dl.bintray.com/loadimpact/deb stable main" | sudo tee -a /etc/apt/sources.list', {stdio: 'inherit'})
execSync('sudo apt-get update', {stdio: 'inherit'})
execSync('sudo apt-get install k6', {stdio: 'inherit'})

console.log(`K6 INSTALLED SUCCESSFULLY`);
