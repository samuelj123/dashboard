# A Starter app for the Dashboard

This is just to demonstrate that it's possible to use laravel to create the api for a react frontend.
I would need to do a lot more reading to get that configurations right, but I assume you'd know a lot more about it than I do! 

# Dependencies
- npm 
- php composer


# To run the app
### To set up the back end server: The server will start at localhost:8000
```
cd backend
composer update
php artisan serve
```


### To set up the front end server: The server will start at localhost:3000
```
cd frontend
npm install
npm run start
```

I tried to connect the laravel app to a mysql database, but didn't manage to do it. 
### To run the database: The server will run on port 3306
(will need to set up docker and docker-compose)
```
cd Dashboard
docker-compose up --build
```

I can eventually run all this in one process, but I'll need a couple days to figure it out. 
I'd like to eventually dockerize all of this but I think we'll play it by ear. 

At the moment, I have been able to pull one line of json from the api to the front-end. 
I could give you a code-walkthrough later. This is just a first-look!


