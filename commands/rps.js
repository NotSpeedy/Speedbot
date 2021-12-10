module.exports = {
    name: 'rps',
    description: 'Play rock paper scissors!',
    aliases: [],
    execute(client, message, args) {
        // sps rock, paper, scissors

        if(!args[0]) return message.reply('Please use it correctly; s!rps <Rock, Paper or Scissors>');

        var options = ['rock', 'paper', 'scissors'];

        var result = options[Math.floor(Math.random() * options.length)];

        if(args[0].toUpperCase() =='ROCK'){

            if(result == 'paper'){
                return message.channel.send(`I have ${result} :newspaper:, I won!`);
            } else if (result == 'scissors') {
                return message.channel.send(`I have ${result} :scissors:, Wow! You won!`);
            } else if (result == 'rock') {
                return message.channel.send(`I have ${result} :moyai:, Tie!`);

        }
      }

      else if(args[0].toUpperCase() =='PAPER'){

        if(result == 'paper'){
            return message.channel.send(`I have ${result} :newspaper:, Tie!`);
        } else if (result == 'scissors') {
            return message.channel.send(`I have ${result} :scissors:, Hehe, i win!`);
        } else if (result == 'rock') {
            return message.channel.send(`I have ${result} :moyai:, GG, You won!`);

    }
  }
  else if(args[0].toUpperCase() =='SCISSORS'){

    if(result == 'paper'){
        return message.channel.send(`I have ${result} :newspaper:, You won!`);
    } else if (result == 'scissors') {
        return message.channel.send(`I have ${result} :scissors:, Tie!`);
    } else if (result == 'rock') {
        return message.channel.send(`I have ${result} :moyai:, Nice, i won!`);

}
}
}
}