const fs = global.nodemodule["fs-extra"];
module.exports.config = {
	name: "ريمم",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "𝒍𝒊𝒏𝒖𝒙",
	description: "ريم ترد عليك 🤍😧",
	commandCategory: "ℙℍ𝕆𝕋𝕆",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
	var { threadID, messageID, reason } = event;
	const moment = require("moment-timezone");
	const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
	var idgr = `${event.threadID}`;
	var id = event.senderID;
	var name = await Users.getNameUser(event.senderID);
var tl = [
		"عمتكم😺؟",
		"منو ينادي محبوبه الكل >_<...",
		"اي خدمة🖤",
		"الورده الطيبه💞🙃",
		"خادمتك فاي وقت 🖤🙁",
		"سمعتك تنادي علي؟👀",
		"كنت هموت ملل بدونك 🙃💞",
		"خير ايش تريد",
		"عندك شغل؟ ولا بس جاي تشوفني؟",
		"صوتك عالي بس قيمتك واطية 😏",
		"احترم نفسك قبل لا أعلمك الأدب 👀",
		"اذا ما عندك شي مهم، ابحث عن شيء مفيد تعمله 🧐",
		"على الأقل حاول تكون محترم 😉"
];
 var rand = tl[Math.floor(Math.random() * tl.length)]

	if ((event.body.toLowerCase() == "مفتقدك") || (event.body.toLowerCase() == "حثتيني")) {
		 return api.sendMessage("️حياتي بدونك ولا شئ 🙃💞", threadID, messageID);
	 };
	if ((event.body.toLowerCase() == "احبك") || (event.body.toLowerCase() == "بحبك")) {
		 return api.sendMessage("️ ايوب حبيبي الوحيد يا ولد 🤧", threadID, messageID);
	 };

	if ((event.body.toLowerCase() == "ملل") || (event.body.toLowerCase() == "ملل يجيب شلل")) {
		 return api.sendMessage("️ امشيطلعبرراااااا", threadID, messageID);
	 };

if ((event.body.toLowerCase() == " كيوت") || (event.body.toLowerCase() == "كيوتت")) {
		 return api.sendMessage("️يعمريييي🤧💞", threadID, messageID);
	 };

	 if ((event.body.toLowerCase() == "من يسكن القلب ويحبه الناس") || (event.body.toLowerCase() == "تحبي المدرسه؟")) {
		 return api.sendMessage("️ايوبة أيوب 👌", threadID, messageID);
	 };

	 if ((event.body.toLowerCase() == "شسمك") || (event.body.toLowerCase() == "ايش هو اسمك")) {
		 return api.sendMessage("️ريم عمتك 💞😺", threadID, messageID);
	 };

	 if ((event.body.toLowerCase() == "كيفكم") || (event.body.toLowerCase() == "كيفك")) {
		 return api.sendMessage("️بخير وانت👀", threadID, messageID);
	 };

	 if ((event.body.toLowerCase() == "السلام عليكم") || (event.body.toLowerCase() == "سلام عليكم")) {
		 return api.sendMessage("️ وعليكم السلام ورحمه الله وبركاته", threadID, messageID);
	 };

	 if ((event.body.toLowerCase() == "اها ") || (event.body.toLowerCase() == "اها")) {
		 return api.sendMessage("️خلاص يا حبي", threadID, messageID);
	 };
	 if ((event.body.toLowerCase() == "منوره ايلي") || (event.body.toLowerCase() == " منوره كيوتتي")) {
		 return api.sendMessage("️نورك الأصل الأصيل بلا منازع او مثيل 👀💞", threadID, messageID);
	 };

	 if ((event.body.toLowerCase() == "الرفاق") || (event.body.toLowerCase() == "وان عادت الحياه ف هل سيعود الرفاق")) {
		 return api.sendMessage("️اخرس يا رضا يا كلب مش هسبك عشان رمضان بس", threadID, messageID);
	 };

	 if ((event.body.toLowerCase() == "الرفاااق") || (event.body.toLowerCase() == "هل سيعود الرفاق")) {
		 return api.sendMessage("️ اخرس يرضا يبنلللل", threadID, messageID);
	 };

if ((event.body.toLowerCase() == "كيفها حياتك") || (event.body.toLowerCase() == "كيف حياتك")) {
		 return api.sendMessage("️ماشيا الحمد لله وانت ❤️", threadID, messageID);
	 };

	 if ((event.body.toLowerCase() == "ماشيا") || (event.body.toLowerCase() == "بخير الحمد لله")) {
		 return api.sendMessage("️دومك بخير وصحه وسعاده ", threadID, messageID);
	 };

	 if ((event.body.toLowerCase() == "من هو محمد") || (event.body.toLowerCase() == "من محمد ")) {
		 return api.sendMessage(" واحد راسه مربع يحب الاستفزاز ", threadID, messageID);
	 };

	 if ((event.body.toLowerCase() == "ايرين كلب") || (event.body.toLowerCase() == "ايرين الكلب")) {
		 return api.sendMessage("️يب حصل ايرين هو كلب حءير صمموه لينجرد ويسب ويصيح في نهار رمضان", threadID, messageID);
	 };

	 if ((event.body.toLowerCase() == "بوت") || (event.body.toLowerCase() == "يا بوت ")) {
		 return api.sendMessage("️ عندي اسم وهو ريم 😡💔", threadID, messageID);
	 };

	 if ((event.body.toLowerCase() == "من هو أيوب") || (event.body.toLowerCase() == "مسعود الكلب")) {
		 return api.sendMessage("أعجز عن وصفه هذا من قوة ايمانه ينام ع اتجاه القبلة", threadID, messageID);
	 };

		if ((event.body.toLowerCase() == "من هي ريم") || (event.body.toLowerCase() == "الوحش الكيوت")) {
		 return api.sendMessage("️هي بنت متوحشه كيوت تحل مشاكل الناس وتستمتع بالايموجيز المستفزة ", threadID, messageID);
	 };

		if ((event.body.toLowerCase() == "من هي اميره") || (event.body.toLowerCase() == "الجرذ المعفن")) {
		 return api.sendMessage("️هي بنت نتنه مش بتستحم وريحتها طالعه للمجره", threadID, messageID);
	 };

		if ((event.body.toLowerCase() == "من هي ريهام") || (event.body.toLowerCase() == "الجراده المعفنه")) {
		 return api.sendMessage("️هي بنت براس جراده نتنه بس وجودها مش بيعمل ريحه زي اميره", threadID, messageID);
	 };

	if ((event.body.toLowerCase() == "من هو رضا") || (event.body.toLowerCase() == "المهزء")) {
		 return api.sendMessage("️مهزء حقير بيعيط علي رفاق راحو من قبل منتولد", threadID, messageID);
	 };

	 if ((event.body.toLowerCase() == "من هو ايرين") || (event.body.toLowerCase() == "ابو جرده")) {
		 return api.sendMessage("️كاءن معفن عايش يسب ويتجرد ويتعاقب ويرجع يسب ويتجرد", threadID, messageID);
	 };

	if ((event.body.toLowerCase() == "جييتت") || (event.body.toLowerCase() == "باااكك")) {
		 return api.sendMessage("️نورت البيت🫣❤", threadID, messageID);
	 };

	 if ((event.body.toLowerCase() == "المطور") || (event.body.toLowerCase() == "من المطور")) {
		 return api.sendMessage("SMILE حبيبي وروحي وتاج راسكم 💞🙃", threadID);
	 };
	 mess = "{name}"

	if (event.body.indexOf("ريمو") == 0 || (event.body.indexOf("ريم") == 0)) {
		var msg = {
			body: ` ${rand}`
		}
		return api.sendMessage(msg, threadID, messageID);
	};

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }