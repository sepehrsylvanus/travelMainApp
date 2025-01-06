const { Telegraf } = require("telegraf");
const TOKEN = "7957594893:AAEDcLY7-xcCJIrAKNG8xKVZ10_GwTOM4u4";
const bot = new Telegraf(TOKEN);
const url =
  "https://travel-main-app-sepehrsylvanus-sshdev-projects.vercel.app/";

// Middleware to parse initData
bot.use((ctx, next) => {
  if (ctx.message && ctx.message.web_app_data) {
    ctx.webAppData = ctx.message.web_app_data;
  }
  return next();
});

bot.start((ctx) => {
  ctx.reply("Welcome", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Open web app",
            web_app: { url },
          },
        ],
      ],
    },
  });

  // Log a message indicating the bot has started
  console.log("Bot started");
});

// Handle incoming messages containing web_app_data
bot.on("message", (ctx) => {
  if (ctx.webAppData) {
    console.log("initData:", ctx.webAppData);
  } else {
    console.log("Received message without web_app_data.");
  }
});

bot.launch();
