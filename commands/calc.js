module.exports = {
    name: 'calc',
    description: 'calculator!!!!!!!!!!!!',
    aliases: ['calculate'],
    async execute(client, message, args) {
        //calc number sign number
        const firstValue = Number(args[0]);
        const secondValue = Number(args[2]);

        if (!args[0]) return message.channel.send(`You have to state a number. \`${client.prefix}calc number [+, -, x, /] number\``);
        if (!firstValue) return message.channel.send('The first value stated is not a number...');
        if (!args[1]) return message.channel.send('You have to state what you want to do with these numbers.');
        if (!['+', '-', 'x', '/'].includes(args[1])) return message.channel.send('You did not sign a calculate method: +, -, x, /');
        if (!secondValue) return message.channel.send('The second value stated is not a number...');
        
        if (args[1] == '+') {
            let result = firstValue + secondValue;
            message.channel.send(`${firstValue} + ${secondValue} = ${result}`);
        }
        
        if (args[1] == '-'){
            let result = firstValue - secondValue;
            message.channel.send(`${firstValue} - ${secondValue} = ${result}`);
        }

        if (args[1] == '/'){
            let result = firstValue / secondValue;
            message.channel.send(`${firstValue} / ${secondValue} = ${result}`);
        } 

        if (args[1] == 'x'){
            let result = firstValue * secondValue;
            message.channel.send(`${firstValue} x ${secondValue} = ${result}`);
        }
    }
        
}