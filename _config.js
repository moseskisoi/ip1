mongodb+srv://moseskisoi:Devops@moringa@ip1.7eflb.mongodb.net/?retryWrites=true&w=majority&appName=ip1var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://moseskisoi:Devops@moringa@ip1.7eflb.mongodb.net/?retryWrites=true&w=majority&appName=ip1',
    development: 'mongodb+srv://moseskisoi:Devops@moringa@ip1.7eflb.mongodb.net/?retryWrites=true&w=majority&appName=ip1',
    test: 'mongodb+srv://moseskisoi:Devops@moringa@ip1.7eflb.mongodb.net/?retryWrites=true&w=majority&appName=ip1 ',
}
module.exports = config;
