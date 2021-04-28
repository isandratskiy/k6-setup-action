const {execSync} = require('child_process');

console.log('INSTALLING K6');

execSync('sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69', {
	stdio: 'inherit'
});
execSync('echo "deb https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list', {
	stdio: 'inherit'
});
execSync('sudo apt-get update', {stdio: 'inherit'});
execSync('sudo apt-get install k6', {stdio: 'inherit'});

console.log('K6 INSTALLED SUCCESSFULLY');
