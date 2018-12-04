Project Title
Todo list project

Getting Started
run: "npm start"
open: "index.html"

Prerequisites
run: "npm install"

Running the tests
open "./tests/SpecRunner.html"

Versioning
1.0.0

Authors
Evgen Kaban

License
This project is licensed under the MIT License.

git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/Evgen097/tankgame.git
git push -u origin master

heroku create todoslistjs
git push heroku master
heroku ps:scale web=1
heroku open

https://murmuring-harbor-64649.herokuapp.com/