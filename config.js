module.exports = {
    ENV : process.env.NODE_ENV || 'development', 
    PORT: process.env.PORT || 2000,
    URL: process.env.BASE_URL || 'http://localhost:2000', 
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost/first-rest-api-db',
    JWT_SECRET: process.env.JWT_SECRET || 'secret1'
}