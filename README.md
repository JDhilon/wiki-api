
# Wiki API

  

## Introduction

  

> This is a simple API used to access and alter articles stored on a local MongoDB database.

  

> This app was developed as part of a [Udemy course on Web Development](https://www.udemy.com/course/the-complete-web-development-bootcamp/)

  

## Endpoints

  
### `http://localhost:3000/articles`
- GET 
	- Returns all articles

- POST 
	- Posts a new article with the ```title``` and ```content``` from the request body

- DELETE 
	- Deletes all articles

### `http://localhost:3000/articles/:articleTitle`
- GET 
	- Returns an article matching ```articleTitle```, if it exists. 

- PUT
	- Updates ```articleTitle```  with the ```title``` and ```content``` from the request body

- PATCH
	- Updates ```articleTitle```  with the ```content``` from the request body, keeping the same title

- DELETE 
	- Deletes ```articleTitle```
  
  

## Installation

  

- Clone the repository

```

git clone https://github.com/JDhilon/wiki-api.git wiki-api

```

  

- Install dependencies

```

cd wiki-api

npm install

```

  

-  [Install MongoDB](https://docs.mongodb.com/manual/installation/)

	- Install following directions for your system

  

- Start local MongoDB server

```

mongod

```

  

-  [Download Postman](https://www.postman.com/downloads/)

	- Postman is used to send and receive requests to the API

  

- Build and run the project

```

npm start

```

  

- Use Postman to send and receive requests and responses from the API