# CIR Lista (Vercel)

## Deploy rápido
1) Subí esta carpeta a un repo o corré `vercel` en este directorio.
2) La web queda en `https://TU-PROYECTO.vercel.app/`

### API (proxy)
- Frontend consulta `/api/precios`.
- Vercel reenvía al Apps Script (configurado en `api/precios.js`).

Para cambiar la URL sin tocar código:
- Vercel → Project → Settings → Environment Variables
  - Key: APPS_SCRIPT_URL
  - Value: https://script.google.com/macros/s/AKfycb.../exec?api=precios
- Redeploy.
