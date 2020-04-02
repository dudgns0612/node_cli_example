var commander = require('commander');

commander
  .arguments('<count>')
  .arguments('<count2>')
  .option('-u, --username <username>', 'Your Github name')
  .option('-e, --email <email>', 'Your Email Address')
  .action((count, count3) => {
    for(var i=0;i<count;i++){
      console.log(
        'user: %s, email: %s, print count: %s count2: %s',
        commander.username,
        commander.email,
        count,
        count2
      );
    }
  })
  .parse(process.argv);