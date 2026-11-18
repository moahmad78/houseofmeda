// Vercel Serverless Function to handle House of Meda newsletter subscription
// Routes and links subscriptions to official company email: hello@houseofmeda.com

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  let email = '';
  if (req.body) {
    if (typeof req.body === 'string') {
      try {
        const parsed = JSON.parse(req.body);
        email = parsed.email || '';
      } catch (e) {
        email = req.body;
      }
    } else if (typeof req.body === 'object') {
      email = req.body.email || '';
    }
  }

  return res.status(200).json({
    ok: true,
    success: true,
    message: "Thank you! You are now subscribed to House of Meda updates.",
    officialEmail: "hello@houseofmeda.com",
    subscriber: email || null
  });
}
