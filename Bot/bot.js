const { Telegraf } = require("telegraf");
const TOKEN = "7957594893:AAEDcLY7-xcCJIrAKNG8xKVZ10_GwTOM4u4";
const bot = new Telegraf(TOKEN);
const url = "https://travel-app-five-eta.vercel.app/";
bot.start((ctx) =>
  ctx.reply("Welcome", {
    reply_markup: {
      keyboard: [
        [
          {
            text: "web app",
            web_app: { url },
          },
        ],
      ],
    },
  })
);

bot.launch();
