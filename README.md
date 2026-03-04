# UNIA Website - Cloudflare Ready

Este repo quedo preparado para desplegar en Cloudflare usando:

- `Workers + Static Assets` (recomendado para este proyecto)
- `Pages` (opcional)

## Requisitos

- Node.js 18+
- Cuenta de Cloudflare

## Instalacion

```bash
npm install
```

## Build local

```bash
npm run build
```

Genera la carpeta `dist/` con todos los archivos estaticos necesarios.

## Autenticacion Cloudflare

```bash
npx wrangler login
npx wrangler whoami
```

## Deploy como Worker (recomendado)

```bash
npm run deploy
```

Esto usa:

- `wrangler.toml`
- `src/worker.js`
- assets en `dist/`

## Deploy como Pages (opcional)

```bash
npm run pages:deploy
```

## Desarrollo local

Worker local:

```bash
npm run dev
```

Pages local:

```bash
npm run pages:dev
```
