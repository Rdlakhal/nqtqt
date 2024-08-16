const config = { 
     name: "انذار", 
aliases:["أنذار","warn","تحذير"],
     description: "اعطى شخص انذار", 
     usage: "نذار+السبب+تفاعل", 
     cooldown: 3, 
     permissions: [1, 2], 
     credits: "KONOW/XAVIATEAM" 
 } 
  
 const langData = { 
     "vi_VN": { 
         "notGroup": "Lệnh này chỉ có thể sử dụng trong nhóm!", 
         "dataNotReady": "Dữ liệu chưa sẵn sàng!", 
         "botNotAdmin": "Bot cần có quyền quản trị viên để thực hiện lệnh này!", 
         "warns": "⌈ ⚠️WARN⚠️ ⌋\n{warns}", 
         "chooseResetWarn": "⌈ ⚠️WARN⚠️ ⌋\n{warns}\n\n⇒ Reply tin nhắn này số thứ tự cần reset", 
         "invalidIndex": "Số thứ tự không hợp lệ!", 
         "confirmResetWarn": "Vui lòng react 👍 để xác nhận!", 
         "resetSuccess": "Thành công!", 
         "provideReason": "Reply tin nhắn này với lý do cảnh cáo!", 
         "warnConfirm": "Vui lòng react 👍 để xác nhận!", 
         "warnSuccess": "Cảnh cáo thành công!", 
         "kickSuccess": "⌈ ⚠️WARN⚠️ ⌋ {targetName} đã bị kick khỏi nhóm vì nhận đuợc 3 hoặc hơn số lần cảnh cáo!\n{warns}", 
         "kickFail": "⌈ ⚠️WARN⚠️ ⌋ {targetName} đã nhận đuợc 3 cảnh cáo, nhưng không thể bị kick...", 
         "error": "Đã có lỗi xảy ra, vui lòng thử lại sau!" 
     }, 
     "en_US": { 
         "notGroup": "This command can only be used in group!", 
         "dataNotReady": "Data is not ready!", 
         "botNotAdmin": "Bot needs admin permission to perform this command!", 
         "warns": "⌈ ⚠️WARN⚠️ ⌋\n{warns}", 
         "chooseResetWarn": "⌈ ⚠️WARN⚠️ ⌋\n{warns}\n\n⇒ Reply this message with the index to reset", 
         "invalidIndex": "Invalid index!", 
         "confirmResetWarn": "Please react 👍 to confirm!", 
         "resetSuccess": "Success!", 
         "provideReason": "Reply this message with the reason!", 
         "warnConfirm": "Please react 👍 to confirm!", 
         "warnSuccess": "Warn success!", 
         "kickSuccess": "⌈ ⚠️WARN⚠️ ⌋ {targetName} has been kicked from the group because he/she received 3 or more warns!\n{warns}", 
         "kickFail": "⌈ ⚠️WARN⚠️ ⌋ {targetName} has received 3 warns, but cannot be kicked...", 
         "error": "An error has occurred, please try again later!" 
     }, 
     "ar_SY": { 
         "notGroup": "لا يمكن استخدام هذا الأمر إلا في المجموعة!", 
         "dataNotReady": "البيانات ليست جاهزة!", 
         "botNotAdmin": "يحتاج البوت إلى إذن المسؤول لأداء هذا الأمر!", 
         "warns": "⌈ ⚠️انذار⚠️ ⌋\n{warns}", 
         "chooseResetWarn": "⌈ ⚠️انذار⚠️ ⌋\n{warns}\n\n⇒ رد على هذه الرسالة بالفهرس لإعادة التعيين", 
         "invalidIndex": "فهرس غير صالح!", 
         "confirmResetWarn": "ارجوك تفاعل ب 👍 للتأكيد!", 
         "resetSuccess": "ناجح!", 
         "provideReason": "رد على هذه الرسالة مع السبب!", 
         "warnConfirm": "ارجوك تفاعل ب 👍 للتأكيد!", 
         "warnSuccess": "انذار ناجح!", 
         "kickSuccess": "⌈ ⚠️انذار⚠️ ⌋ {targetName} تم طرده من المجموعة لأنه / لأنها تلقى 3 تحذيرات أو أكثر!\n{warns}", 
         "kickFail": "⌈ ⚠️انذار⚠️ ⌋ {targetName} تلقى 3 تحذيرات ، لكن لا يمكن طرده...", 
         "error": "حصل خطأ. الرجاء المحاوله مرة اخرى!" 
     } 
 } 
  
 async function resetChooseCallback({ message, getLang, eventData }) { 
     try { 
         if (!message.body) return; 
         const { targetIDs } = eventData; 
         const indexs = 
             (message.body.split(" ")) 
                 .filter(index => index && !isNaN(index) && index > 0) 
                 .map(index => parseInt(index) - 1); 
  
         if (indexs.length == 0) return message.reply(getLang("invalidIndex")); 
  
         const chosenMembers = targetIDs.filter((_, index) => indexs.includes(index)); 
         if (chosenMembers.length == 0) return message.send(getLang("invalidIndex")); 
  
         return message 
             .reply(getLang("confirmResetWarn")) 
             .then(_ => _.addReactEvent({ targetIDs: chosenMembers, callback: resetConfimCallback })) 
             .catch(e => { 
                 if (e) { 
                     console.error(e); 
                     message.reply(getLang("error")); 
                 } 
             }); 
  
     } catch (e) { 
         console.error(e); 
         message.reply(getLang("error")); 
     } 
 } 
  
 async function resetConfimCallback({ message, data, getLang, eventData }) { 
     try { 
         const { reaction } = message; 
         const { targetIDs } = eventData; 
  
         if (reaction == "👍") { 
             const members = data?.thread?.info?.members; 
             if (!members) return message.send(getLang("error")); 
  
             const isBotAdmin = data.thread.info.adminIDs?.some(u => u.id == global.botID); 
             if (!isBotAdmin) return message.send(getLang("botNotAdmin")); 
  
             for (const targetID of targetIDs) { 
                 const memberIndex = members.findIndex(member => member.userID == targetID); 
                 if (memberIndex !== -1) { 
                     members[memberIndex].warns = []; 
                 } 
             } 
  
             await global.controllers.Threads.updateInfo(message.threadID, { members }); 
             return message.send(getLang("resetSuccess")); 
         } 
     } catch (e) { 
         console.error(e); 
         message.send(getLang("error")); 
     } 
 } 
  
 function kick(uid, tid) { 
     return new Promise((resolve) => { 
         global.api.removeUserFromGroup(uid, tid, (err) => { 
             if (err) { 
                 console.error(err); 
                 resolve(false); 
             } 
             resolve(true); 
         }); 
     }); 
 } 
  
 async function warnConfirmCallback({ message, data, getLang, eventData }) { 
     try { 
         const { reaction } = message; 
         const { targetIDs, reason } = eventData; 
  
         if (reaction == "👍") { 
             const members = data?.thread?.info?.members; 
             if (!members) return message.send(getLang("error")); 
  
             const equalOrGreaterThanThree = []; 
             const time = new Date().toLocaleString("ar-SY", { timeZone: global.config.timezone || "Africa/Khartoum" }); 
  
             for (const targetID of targetIDs) { 
                 const memberIndex = members.findIndex(member => member.userID == targetID); 
                 if (memberIndex !== -1) { 
                     members[memberIndex].warns = [...(members[memberIndex]?.warns || []), { reason, time }]; 
  
                     if (members[memberIndex].warns.length >= 3) { 
                         equalOrGreaterThanThree.push(targetID); 
                     } 
                 } 
             } 
  
             await global.controllers.Threads.updateInfo(message.threadID, { members }); 
             await message.send(getLang("warnSuccess")); 
  
             if (equalOrGreaterThanThree.length > 0) { 
                 for (const targetID of equalOrGreaterThanThree) { 
                     let _kick = await kick(targetID, message.threadID); 
                     let targetName = global.data.users.get(targetID)?.name || targetID; 
  
                     await message 
                         .send({ 
                             body: getLang(_kick ? "kickSuccess" : "kickFail", { 
                                 targetName, 
                                 warns: (members.find(member => member.userID == targetID)?.warns || []).map(warn => `• ${warn.reason} (${warn.time})`).join("\n") 
                             }), 
                             mentions: [{ tag: targetName, id: targetID }] 
                         }).catch(e => { 
                             if (e) { 
                                 console.error(e); 
                                 message.reply(getLang("error")); 
                             } 
                         }); 
  
                     global.sleep(300); 
                 } 
             } 
         } 
     } catch (e) { 
         console.error(e); 
         message.send(getLang("error")); 
     } 
 } 
  
 async function warnReasonCallback({ message, data, getLang, eventData }) { 
     try { 
         if (!message.body) return; 
         const reason = message.body.toLowerCase() == "none" ? "" : message.body; 
  
         const { targetIDs } = eventData; 
         const members = data?.thread?.info?.members; 
         if (!members) return message.reply(getLang("error")); 
  
         global.api.unsendMessage(eventData.messageID); 
         return message 
             .reply(getLang("warnConfirm")) 
             .then(_ => _.addReactEvent({ targetIDs, reason, callback: warnConfirmCallback })) 
             .catch(e => { 
                 if (e) { 
                     console.error(e); 
                     message.reply(getLang("error")); 
                 } 
             }); 
     } catch (e) { 
         console.error(e); 
         message.reply(getLang("error")); 
     } 
 } 
  
 async function onCall({ message, args, getLang, data }) { 
     try { 
         const { mentions, messageReply } = message; 
  
         if (!message.isGroup) return message.reply(getLang("notGroup")); 
         if (!data?.thread?.info?.members) return message.reply(getLang("dataNotReady")); 
  
         const isBotAdmin = data.thread.info.adminIDs?.some(u => u.id == global.botID); 
         if (!isBotAdmin) return message.reply(getLang("botNotAdmin")); 
  
         const isReset = args[0]?.toLowerCase() == "reset"; 
         const targetIDs = ( 
             messageReply?.senderID ? 
                 [messageReply.senderID] : 
                 Object.keys(mentions) 
         ).filter(id => id != global.botID); 
         if (!isReset && targetIDs.length == 0) return message.reply(getLang("warns", { 
             warns: (data.thread.info.members || []).filter(e => e.warns && e.warns.length > 0).map(member => { 
                 let username = global.data.users.get(member.userID)?.info?.name || member.userID; 
                 return `• ${username} (${member.userID}):\n${member.warns.map(warn => `⇒ ${warn.reason} (${warn.time})`).join("\n")}`; 
             }).join("\n\n") 
         })); 
  
         if (isReset) { 
             if (targetIDs.length == 0) { 
                 let allWarnedMembers = (data.thread.info.members || []).filter(e => e.warns && e.warns.length > 0); 
                 return message 
                     .reply(getLang("chooseResetWarn", { 
                         warns: allWarnedMembers.map((member, index) => { 
                             let username = global.data.users.get(member.userID)?.info?.name || member.userID; 
                             return `${index + 1} • ${username} (${member.userID}):\n${member.warns.map(warn => `⇒ ${warn.reason} (${warn.time})`).join("\n")}`; 
                         }).join("\n\n") 
                     })) 
                     .then(_ => _.addReplyEvent({ targetIDs: allWarnedMembers.map(e => e.userID), callback: resetChooseCallback })) 
                     .catch(e => { 
                         if (e) { 
                             console.error(e); 
                             message.reply(getLang("error")); 
                         } 
                     }); 
             } 
  
             return message 
                 .reply(getLang("confirmResetWarn")) 
                 .then(_ => _.addReactEvent({ targetIDs, callback: resetConfimCallback })) 
                 .catch(e => { 
                     if (e) { 
                         console.error(e); 
                         message.reply(getLang("error")); 
                     } 
                 }); 
         } else { 
             return message 
                 .reply(getLang("provideReason")) 
                 .then(_ => _.addReplyEvent({ targetIDs, callback: warnReasonCallback })) 
                 .catch(e => { 
                     if (e) { 
                         console.error(e); 
                         message.reply(getLang("error")); 
                     } 
                 }); 
         } 
  
     } catch (e) { 
         console.error(e); 
         message.reply(getLang("error")); 
     } 
 } 
  
 export default { 
     config, 
     langData, 
     onCall 
   }