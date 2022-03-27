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
curl -X PUT http://localhost:4001/<temperature>?id=<id>
```

### 06 Path paramenters Vs Query parameters
```
curl -X GET http://localhost:4001/<id>
curl -X DELETE http://localhost:4001/query?id=<id>
```

### 07 Separation of Concerns (SOC) Temperature routes
```
curl -X POST http://localhost:4001/temperature -H 'Content-Type: application/json' -d "{\"temperature\": 42}"
curl -X GET http://localhost:4001/temperature
curl -X GET http://localhost:4001/temperature/<id>
curl -X PUT http://localhost:4001/temperature/<temperature>?id=<id>
curl -X DELETE http://localhost:4001/temperature
curl -X DELETE http://localhost:4001/temperature/query?id=<id>
```