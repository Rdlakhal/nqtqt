exports.config = {
	name: 'جودة',
	version: '0.0.1',
	hasPermssion: 0,
	credits: 'scorpion',
	description: 'يعدل جودة صورة ل 4k',
	commandCategory: 'صور',
	usages: '[image]',
	cooldowns: 3
};

const axios = require('axios');
const fs = require('fs');

exports.run = async function(o) {
	let send = msg => o.api.sendMessage(msg, o.event.threadID, o.event.messageID);

	if (o.event.type !== 'message_reply') {
		return send('رجاءا قم بالرد على الصورة التي تريد رفع جودتها!');
	}

	const attachments = o.event.messageReply.attachments;

	if (!attachments || attachments.length === 0 || attachments[0].type !== 'photo') {
		return send('الرجاء الرد على صورة وليس نوع ملف آخر!');
	}

	let eta = 3;
	send(`جاري تحسين جودة الصورة، انتظر (${attachments.length * eta} ثواني)`);

	let exec_time = 0;
	let stream = [];

	for (let i of attachments) {
		try {
			let response = await axios.get(encodeURI(`https://nams.live/upscale.png?{"image":"${i.url}","model":"4x-UltraSharp"}`), {
				responseType: 'stream',
			});

			exec_time += +response.headers.exec_time;
			eta = response.headers.exec_time / 1000 << 0;

			let filePath = 'tmp.png';
			response.data.pipe(fs.createWriteStream(filePath));
			stream.push(fs.createReadStream(filePath));
		} catch (e) {
			send(`حدث خطأ أثناء معالجة الصورة: ${e.message}`);
		}
	}

	send({
		body: `تفضل، تم رفع جودتها بنجاح (${exec_time / 1000 << 0} ثواني)`,
		attachment: stream,
	});
};