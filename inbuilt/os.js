let os = require('os');
console.log(os.platform()); //win32

console.log(os.arch()); //x64


console.log(os.cpus().length+" Core"); //8 Core
console.log(os.freemem()) //665407488
console.log(os.uptime()) //60446.468