## Express Server  

* install dependencies:
```
npm install
```

* Create a start script on package.json file:
```
  "scripts": {
    "start": "node src/app.js"
  },
```

* run the server
```
npm start
or
node src/server.js
```

---
### 01 First endpoint (Text/plain Hello World)
```
curl -X GET http://localhost:4001/
```

### 02 POST data to the server
```
curl -X POST http://localhost:4001/ -H 'Content-Type: application/json' -d "{\"temperature\": 42}"
```