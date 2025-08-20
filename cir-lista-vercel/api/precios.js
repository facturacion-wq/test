// api/precios.js
const APPS_SCRIPT_URL = process.env.APPS_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbwp2o9K2PjiY5V4XHpdc3oWnVb7BFlVBJN31w8Yr50_PUql4pCPFgjA_DBuXjB-n5nVMg/exec?api=precios';

export default async function handler(req, res) {
  try {
    const r = await fetch(APPS_SCRIPT_URL, { cache: 'no-store' });
    const text = await r.text();
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    if (!r.ok) return res.status(r.status).send(text);
    return res.status(200).send(text);
  } catch (err) {
    return res.status(500).json({ error: 'proxy_error', message: String(err) });
  }
}
