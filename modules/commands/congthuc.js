module.exports.config={
  name:"congthuc",
  version:"1.0.0",
  hasPermssion:0,
  credits:"DungUwU",
  description:"الرياضيات - مجموعة كاملة من صيغ الفيزياء",
  commandCategory:"خدمات"
  ,usages:"congthuc toan/vatly",
  cooldowns:5,
  dependencies:{
    request:"",
    "fs-extra":""
  }
},
  module.exports.handleReply=async function({api:n,event:e,handleReply:a,client:s})
{
  const t=global.nodemodule.request,
  {
createWriteStream:c,
    createReadStream:h,
    unlinkSync:g}=global.nodemodule["fs-extra"];
  var i="",
    r="";
  switch(a.type){case"toan":{switch(e.body)
  {
    case"1":i="https://i.imgur.com/kQmVXlL.jpg",
      r="đạo hàm của bạn đây!";break;case"2":i="https://i.imgur.com/2jyh72H.jpg",
      r="nguyên hàm của bạn đây!";break;case"3":i="https://i.imgur.com/WkxOvVZ.jpg",
      r="Logarit của bạn đây!";break;case"4":i="https://i.imgur.com/AODxsFO.jpg",
      r="tính diện tích của bạn đây!";break;case"5":i="https://i.imgur.com/ubmnDFT.jpg",
      r="tính thể tích của bạn đây!";break;case"6":i="https://i.imgur.com/Jypelyv.png",
      r="lượng giác của bạn đây!";break;case"7":i="https://i.imgur.com/rgXzcRO.jpg",
      r="lũy thừa của bạn đây!";break;case"8":i="https://i.imgur.com/PTPOLrx.jpg",
      r="tọa độ không gian của bạn đây!"
  }
                             const a=parseInt(e.body);
                             return isNaN(e.body)?n.sendMessage("Lựa chọn của bạn không phải là một con số!",
       e.threadID,
      e.messageID):a>8||a<1?n.sendMessage("Lựa chọn của bạn không nằm trong danh sách",                          
       e.threadID,
       e.messageID):(""!=i&&""!=r||(i="https://i.ibb.co/DKbvzS7/image.png",r="này sẽ được cập nhật sau!"),
       t(encodeURI(i)).pipe(c(__dirname+"/cache/toan.jpg")).on("close",(()=>n.sendMessage("Đang lấy dữ liệu...",
        e.threadID,e.messageID).then(n.sendMessage({body:`Công thức ${r}`,
                                                    attachment:h(__dirname+"/cache/toan.jpg")},
                                                   e.threadID,(()=>g(__dirname+"/cache/toan.jpg")))))))}
    case"vatly":{switch(e.body)
    {
      case"1":return n.sendMessage("=== Vật lý 10 ===\n» Mời bạn nhập lựa chọn «\n\n1. Chương 1.\n2. Chương 2.\n3. Chương 3.\n4. Chương 4.\n5. Chương 5.\n6. Chương 6.\n7. Chương 7.\n\n» Hãy reply tin nhắn và chọn theo số «",
                                   e.threadID,((n,a)=>{global.client.handleReply.push({name:this.config.name,
                                                                                       messageID:a.messageID,author:e.senderID,
                                                                                       type:"Lop10"})}));
      case"2":return n.sendMessage("=== Vật lý 11 ===\n» Mời bạn nhập lựa chọn «\n\n1. Chương 1.\n2. Chương 2.\n3. Chương 3.\n4. Chương 4.\n5. Chương 5.\n6. Chương 6.\n7. Chương 7.\n\n» Hãy reply tin nhắn và chọn theo số «",
                                   e.threadID,((n,a)=>{global.client.handleReply.push({name:this.config.name,messageID:a.messageID,author:e.senderID,
                                                                                       type:"Lop11"})}));case"3":return n.sendMessage("=== Vật lý 12 ===\n» Mời bạn nhập lựa chọn «\n\n1. Chương 1.\n2. Chương 2.\n3. Chương 3.\n4. Chương 4.\n5. Chương 5.\n6. Chương 6.\n7. Chương 7.\n\n» Hãy reply tin nhắn và chọn theo số «",
                                                                                                                                      e.threadID,((n,a)=>{global.client.handleReply.push({name:this.config.name,messageID:a.messageID,author:e.senderID,
                                                                                                                                                                                          type:"Lop12"})}))}
                 const a=parseInt(e.body);
                 if(isNaN(e.body))return n.sendMessage("Lựa chọn của bạn không phải là một con số!"
                                                       ,e.threadID,
                                                       e.messageID);
                 if(a>3||a<1)
                   return n.sendMessage("Lựa chọn của bạn không nằm trong danh sách",
                                        e.threadID,
                                        e.messageID)}
    case"Lop10":{switch(e.body){
      case"1":i="https://i.imgur.com/vHFSC50.jpg",
        r="động học chất điểm!";
        break;
      case"2":i="https://i.imgur.com/XvLwGoz.jpg",
        r="động lực học chất điểm!";
        break;
      case"3":i="https://i.ibb.co/WHB4dqD/image.png",
        r="cân bằng và chuyển động của vật rắn!";
        break;
      case"4":i="https://i.ibb.co/7VJn9xV/image.png",
        r="các định luật bảo toàn!";
        break;
      case"5":i="https://i.ibb.co/0c7wKqW/image.png",
        r="chất khí!";
        break;
      case"6":i="https://i.ibb.co/P6gqVfj/image.png",
        r="cơ sở của nhiệt động lực học!";
        break;
      case"7":i="https://i.ibb.co/bJZPtHQ/image.png",
        r="chất rắn và chất lỏng.Sự chuyển thể!"}
                 const a=parseInt(e.body);
                 return isNaN(e.body)?n.sendMessage("Lựa chọn của bạn không phải là một con số!",
                                                    e.threadID,
                                                    e.messageID):a>7||a<1?n.sendMessage("Lựa chọn của bạn không nằm trong danh sách",
                                                                                        e.threadID,e.messageID):(""!=i&&""!=r||(i="https://i.ibb.co/DKbvzS7/image.png",
                                                                                                                                r="Tự add link vô?"),
      t(encodeURI(i)).pipe(c(__dirname+"/cache/ly.jpg")).on("close",
             (()=>n.sendMessage("Đang lấy dữ liệu...",e.threadID,e.messageID).then(n.sendMessage({body:`Công thức ${r}`,
       attachment:h(__dirname+"/cache/ly.jpg")},
        e.threadID,(()=>g(__dirname+"/cache/ly.jpg")))))))}
    case"Lop11":{switch(e.body){
      case"1":i="https://i.imgur.com/S6lSsum.jpg",
        r="điện tích - điện trường của bạn đây!";
        break;
      case"2":i="https://i.imgur.com/vgrUOSd.jpg",
        r="dòng điện không đổi của bạn đây!";
        break;
      case"3":i="https://i.ibb.co/SynJdFg/1-i-n-tr-i-n-tr-2-i-n-tr-n-s-ng-b-nh-th-ng-n-s-ng-b-nh-th-ng-3-Nhi-t-i-n-Nhi-t-i-n-4-nh-lu-t-I-v-II.png",r="dòng điện trong các môi trường của bạn đây!";
        break;
      case"4":i="",
        r="từ trường của bạn đây!";
        break;
      case"5":i="",
        r="cảm ứng điện từ của bạn đây!";
        break;
      case"6":i="",
        r="khúc xạ ánh sáng của bạn đây!";
        break;
      case"7":i="",
        r="mắt các dụng cụ quang của bạn đây!"}
                 const a=parseInt(e.body);return isNaN(e.body)?n.sendMessage("Lựa chọn của bạn không phải là một con số!",
                 e.threadID,e.messageID):a>7||a<1?n.sendMessage("Lựa chọn của bạn không nằm trong danh sách",
        e.threadID,
        e.messageID):(""!=i&&""!=r||(i="https://i.ibb.co/DKbvzS7/image.png",
                                     r="Tự add link vô?"),
                      t(encodeURI(i)).pipe(c(__dirname+"/cache/ly.jpg")).on("close",
                                                                            (()=>n.sendMessage("Đang lấy dữ liệu...",
  e.threadID,e.messageID).then(n.sendMessage({body:`Công thức ${r}`,
              attachment:h(__dirname+"/cache/ly.jpg")},
           e.threadID,(()=>g(__dirname+"/cache/ly.jpg")))))))}
    case"Lop12":{switch(e.body){
      case"1":i="",r="dao động cơ của bạn đây!";
        break;
      case"2":i="",r="sóng cơ của bạn đây!";
        break;
      case"3":i="",r="dòng điền xoay chiều của bạn đây!";
        break;
      case"4":i="",r="dao động và sóng điện từ của bạn đây!";
        break;
      case"5":i="",
        r="sóng ánh sáng của bạn đây!";
        break;
      case"6":i="",
        r="lượng tử ánh sáng của bạn đây!";
        break;
      case"7":i="",
        r="hạt nhân nguyên tử của bạn đây!"}
                 const a=parseInt(e.body);return isNaN(e.body)?n.sendMessage("Lựa chọn của bạn không phải là một con số!",
                 e.threadID,e.messageID):a>7||a<1?n.sendMessage("Lựa chọn của bạn không nằm trong danh sách",
       e.threadID,e.messageID):(""!=i&&""!=r||(i="https://i.ibb.co/DKbvzS7/image.png",r="Tự add link vô?"),t(encodeURI(i)).pipe(c(__dirname+"/cache/ly.jpg")).on("close",
      (()=>n.sendMessage("Đang lấy dữ liệu...",
                         e.threadID,
                      e.messageID).then(n.sendMessage({body:`Công thức ${r}`,
attachment:h(__dirname+"/cache/ly.jpg")},
                   e.threadID,
 (()=>g(__dirname+"/cache/ly.jpg")))))))}}},
  module.exports.run=({event:n,api:e,args:a,client:s,utils:t})=>{
    if(a[0])switch(a[0]){
      case"toan":
        return e.sendMessage("=== Công thức toán ===\n» Mời bạn nhập lựa chọn «\n\n1. Đạo hàm.\n2. Nguyên hàm.\n3. Logarit.\n4. Diện tích.\n5. Thể tích\n6. Lượng giác\n7. Lũy thừa\n8. Tọa độ trong không gian\n\n» Hãy reply tin nhắn và chọn theo số «",n.threadID,((e,a)=>{
global.client.handleReply.push({name:this.config.name,messageID:a.messageID,author:n.senderID,
       type:"toan"})}),n.messageID);
      case"vatly":
        return e.sendMessage("=== Lớp ===\n» Mời bạn nhập lựa chọn «\n\n1. Lớp 10.\n2. Lớp 11.\n3. Lớp 12.\n\n» Hãy reply tin nhắn và chọn theo số «",n.threadID,((e,a)=>{
global.client.handleReply.push({name:this.config.name,messageID:a.messageID,author:n.senderID,
       type:"vatly"})}),n.messageID);
      default:
        return t.throwError("congthuc",n.threadID,n.messageID)}
    else e.sendMessage("Vui lòng nhập các tag: toan/vatly",n.threadID)};
