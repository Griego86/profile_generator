const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? ", (name) => {
  rl.question("What's an activity you like doing? ", (activity) => {
    rl.question("What do you listen to while doing that? ", (music) => {
      rl.question("Which meal is your favorite? ", (meal) => {
        rl.question("What's your favorite thing to eat for that meal? ", (favoriteFood) => {
          rl.question("Which sport is your absolute favorite? ", (sport) => {
            rl.question("What is your superpower? ", (superpower) => {
              console.log(`Thank you, ${name}, for answering the questions:`);
              console.log(`Activity: ${activity}`);
              console.log(`Music: ${music}`);
              console.log(`Favorite Meal: ${meal}`);
              console.log(`Favorite Food: ${favoriteFood}`);
              console.log(`Favorite Sport: ${sport}`);
              console.log(`Superpower: ${superpower}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
