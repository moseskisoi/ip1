<<<<<<< HEAD
mongodb+srv://moseskisoi:Devops@moringa@ip1.7eflb.mongodb.net/?retryWrites=true&w=majority&appName=ip1var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://moseskisoi:Devops@moringa@ip1.7eflb.mongodb.net/?retryWrites=true&w=majority&appName=ip1',
    development: 'mongodb+srv://moseskisoi:Devops@moringa@ip1.7eflb.mongodb.net/?retryWrites=true&w=majority&appName=ip1',
    test: 'mongodb+srv://moseskisoi:Devops@moringa@ip1.7eflb.mongodb.net/?retryWrites=true&w=majority&appName=ip1 ',
=======
var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority',
>>>>>>> test
}
module.exports = config;
