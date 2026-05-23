# Simple personal portfolio! 
### This is a whitelabel portfolio, please feel free to use this template

## One-time setup

- Install Modules

```shell
npm install
```

- Create `.env` file

```shell
cp .env.default .env
# Adjust MONGODB URL in .env
```

- Bring up the UI server on port

```shell
npm run dev
```

## Update config via API

`GET /api/configs` is public. `PUT` and `POST` require a bearer token.

Set `CONFIG_API_SECRET` in `.env` (same value you send in the `Authorization` header).

### Update existing config (partial)

Updates the first config document when no `id` is provided.

```shell
curl -X PUT http://localhost:3000/api/configs \
  -H "Authorization: Bearer YOUR_SECRET" \
  -H "Content-Type: application/json" \
  -d '{
    "blogs": [
      {
        "title": "My new post",
        "link": "https://dev.to/...",
        "publishedAt": "2024-01-15",
        "tags": ["Next.js"],
        "readTime": 5
      }
    ]
  }'
```

### Update by document id

```shell
curl -X PUT "http://localhost:3000/api/configs?id=MONGO_OBJECT_ID" \
  -H "Authorization: Bearer YOUR_SECRET" \
  -H "Content-Type: application/json" \
  -d '{ "resumeLink": "https://..." }'
```

### Create a new config document

```shell
curl -X POST http://localhost:3000/api/configs \
  -H "Authorization: Bearer YOUR_SECRET" \
  -H "Content-Type: application/json" \
  -d @config-payload.json
```
