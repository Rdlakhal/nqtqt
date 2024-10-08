const _24HOURs = 86400000;

const config = {
    name: "يومية",
    aliases: ["claim","طلبة"],
    description: "مكافأة يومية",
    credits: "KONOW/XAVIATEAM",
    extra: {
        min: 300,
        max: 3000
    }
}

const langData = {
    "en_US": {
        "daily.selfNoData": "Your data is not ready",
        "daily.alreadyClaimed": "You have already claimed your daily, you can claim again in {time}",
        "daily.successfullyClaimed": "You have claimed your daily reward of {amount}XC",
        "daily.failed": "Failed"
    },
    "ar_SY": {
        "daily.selfNoData": "البيانات الخاصة بك ليست جاهزة",
        "daily.alreadyClaimed": "لقد طالبت بالفعل على مكافأتك اليومية ، يمكنك المطالبة مرة أخرى في {time}",
        "daily.successfullyClaimed": "لقد طالبت بمكافأتك اليومية البالغة {amount}KO",
        "daily.failed": "فشل"
    }
}

async function onCall({ message, extra, getLang }) {
    const { Users } = global.controllers;
    const { min, max } = extra;

    const userData = await Users.getData(message.senderID);
    if (!userData) return message.reply(getLang("daily.selfNoData"));

    if (!userData.hasOwnProperty("daily")) userData.daily = 0;
    if (Date.now() - userData.daily < _24HOURs) return message.reply(getLang("daily.alreadyClaimed", { time: global.msToHMS(_24HOURs - (Date.now() - userData.daily)) }));

    const amount = global.random(min, max);
    const result = await Users.updateData(message.senderID, { money: BigInt(userData.money || 0) + BigInt(amount), daily: Date.now() });

    if (result) {
        message.reply(getLang("daily.successfullyClaimed", { amount: global.addCommas(amount) }));
    } else {
        message.reply(getLang("daily.failed"));
    }
}


export default {
    config,
    langData,
    onCall
}






