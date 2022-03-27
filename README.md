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

## 01 Creating a minimal express server  
* run the server
```
npm start
or
node src/server.js
```

---
### 02 First endpoint (Text/plain Hello World)
```
curl -X GET http://localhost:4001/
```

### 03 POST data to the server
```
curl -X POST http://localhost:4001/ -H 'Content-Type: application/json' -d "{\"temperature\": 42}"
```

### 04 GET data saved on server & DELETE endpoint
```
curl -X DELETE http://localhost:4001/
```

### 05 Changing object values with PUT and query & path parameters
```
curl -X PUT http://localhost:4001/30?id=1
```

### 06 Path paramenters Vs Query parameters
```
curl -X GET http://localhost:4001/1
curl -X DELETE http://localhost:4001/query?id=1
```