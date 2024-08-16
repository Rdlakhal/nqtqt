const chalk = require('chalk');

module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#FF7F50")('[ ❕ ] » ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#FF0000")('[ ❗ Lỗi rồi ] » ') + data);
			break;
		default:
			console.log(chalk.bold.hex("#FF4500")(`${option} » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#FF0000")('» •ZINO• « ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#FFFF00")('» •ZINO• « ') + data);
			break;
		default:
			console.log(chalk.bold.hex("#00FFFF")('» •ZINO• « ') + data);
			break;
	}
}
