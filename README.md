# Management Database
![Management_Database](https://img.shields.io/badge/Practice-Management%20Database-blue)

by `Muhamad Taopik`.

# How To Install MongoDB With Docker
![Management_Database](https://img.shields.io/badge/Install%20MongoDB-Management%20Database-blue)

create ``docker-compose.yml``
```yml
version: "3.5"

services:
  mongo:
    container_name: <container name>
    image: mongo:4.2
    ports:
      - 27017:27017
    command: mongod
```

execute ``docker-compose``
```bash
docker-compose -f docker-compose.yml up -d
```

access mongo server using terminal
```
docker exec -it <container name> /bin/sh
```
server
```
mongo --host localhost --port 27017
```

backup
```
mongodump --db <dbname>
```

restore
```
mongorestore --db <dbname> --verbose /dump/<directory>
```

