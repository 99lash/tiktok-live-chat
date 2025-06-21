import { TikTokLiveConnection, WebcastEvent } from "tiktok-live-connector";
import Color from './Color.js';

const TEXT = new Color();
const tiktokUsername = process.argv.slice(2)[0];
const connection = new TikTokLiveConnection(tiktokUsername);

connection.connect()
  .then(state => {
  console.info(`Connected to roomId ${state.roomId}`);
}).catch(err => {
  console.error('Failed to connect', err);
})


connection.on(WebcastEvent.CHAT, data => {
  // const user = data.user.uniqueId;
  const user = data.user.nickname;
  const userComment = data.comment;
  // const template = `${TEXT.green}[${user}]: ${TEXT.reset}${userComment}`;
  const template = `[${TEXT.yellowStr(user)}]: ${userComment}`;
  
  // console.log(`[${data.user.uniqueId}]: ${data.comment}`);
  console.log(template);
});

connection.on(WebcastEvent.LIKE, data => {
  const user = data.user.nickname;
  const count = data.likeCount;
  const template = `[${TEXT.redStr(user)}] sents ${count} like(s)`;
  console.log(template);
});

connection.on(WebcastEvent.MEMBER, data => {
  const user = data.user.nickname;
  const template = `${TEXT.grayStr(user)} joined the stream!`;
  console.log(template)
});

connection.on(WebcastEvent.GIFT, data => {
  const user = data.user.nickname;
  const gift = data.giftDetails.giftName;
  const template = `${TEXT.blueStr(user)} sent ${TEXT.redStr(gift)}`;
  console.log(template);
});