module.exports.config = {
	name: "بايو",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "NTKhang",
	description: "تغير بايو البوت",
	commandCategory: "المطور و ادمنية البوت",
	usages: "",
  cooldowns: 5
  
}
  
  module.exports.run = async ({ api, event, global, args, permssion, utils, client, Users }) => {
    api.changeBio(args.join(" "), (e) => {
      if(e) api.sendMessage("حدث خطأ" + e, event.threadID); return api.sendMessage("تم تغيير بايو البوت إلى :\n"+args.join(" "), event.threadID, event.messgaeID)
    }
    )
  }
