var config = {}

// Update to have your correct username and password
config.mongoURI = {
<<<<<<< HEAD
    production: 'mongodb+srv://moseskisoi:<db_password>@ip1.7eflb.mongodb.net/?retryWrites=true&w=majority&appName=ip1',
    development: 'mongodb+srv://moseskisoi:<db_password>@ip1.7eflb.mongodb.net/?retryWrites=true&w=majority&appName=ip1',
    test: 'mongodb+srv://moseskisoi:<db_password>@ip1.7eflb.mongodb.net/?retryWrites=true&w=majority&appName=ip1',
=======
    production: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority',
>>>>>>> test
}
module.exports = config;
