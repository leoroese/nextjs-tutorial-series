export default function handler(req, res) {
    if (req.method === 'POST') {
      res.status(200).json({ name: req.body.user})
    } else {
        res.status(200).json({ name: 'Get Request'})
    }
  }