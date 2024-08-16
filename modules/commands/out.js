module.exports.config = {
    name: "اطلع",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "Kanichi",
    description: " ",
    commandCategory: "المطور",
    usages: "اطلع [ايدي الكروب]",
    cooldowns: 10,
};

module.exports.run = async function({ api, event, args }) {
        const permission = ["100059101685364"];
    if (!permission.includes(event.senderID)) return api.sendMessage("شتريد عمو :>", event.threadID, event.messageID);
        if (!args[0]) return api.removeUserFromGroup(api.getCurrentUserID(), event.threadID);
        if (!isNaN(args[0])) return api.removeUserFromGroup(api.getCurrentUserID(), args.join(" "));
                                                                                              }
