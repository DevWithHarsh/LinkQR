// api/github-counter.js
let count = 0; // temporary (resets when redeployed)

export default function handler(req, res) {
  if (req.method === 'POST') {
    count++;
  }
  res.status(200).json({ count });
}
