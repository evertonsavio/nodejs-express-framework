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

### 03 GET data saved on server & DELETE endpoint
```
curl -X DELETE http://localhost:4001/
```

### 04 Changing object values with PUT and query & path parameters
```
curl -X PUT http://localhost:4001/30?id=1
```