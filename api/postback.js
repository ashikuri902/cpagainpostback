export default async function handler(req, res) {
  const { sub1, sub2, sub3, offer_id, offer_name, payout, ip_address, date } = req.query;

  const message = `🚀 CPA Master Lead Update
🎉 New Lead Received!
💰 Payout: $${payout || "0"}
🆔 Affiliate ID: ${sub1 || "N/A"}
🔗 Click ID: ${sub2 || "N/A"}
📌 Sub ID: ${sub3 || "N/A"}
🎯 Offer ID: ${offer_id || "N/A"}
📄 Offer Name: ${offer_name || "N/A"}
🌐 IP Address: ${ip_address || "N/A"}
📅 Date: ${date || "N/A"}
⚡ Source: CPA Master`;

  const botToken = "8324019323:AAEe4Rj9OUtDx32hxe5s1FxwKau_9b3oDtA";
  const chatId = "-1003895839348";

  await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message
    })
  });

  res.status(200).send("OK");
}
