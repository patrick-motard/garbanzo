module.exports = () => {
    var p = process.env;
    return {
        garbanzoDbConfig: {
            host: p.GARBANZO_HOST,
            database: p.GARBANZO_DATABASE,
            password: p.GARBANZO_PASSWORD,
            user: p.GARBANZO_USER
        },
        secret: process.env.SECRET,
        redditAuth: {
            access_token
        }
    }
    "secret": "there's always money in the banana stand",
    "redditAuth": {
        "access_token": "45422354-IJ9yL1kqs9qXhbqAD6a1r5O11Jg",
        "token_type": "bearer",
        "expires_in": 3600,
        "refresh_token": "45422354-MxQgNTuo0vqWEiYwBciowvb3a4g",
        "scope": "account edit history identity"
    },
    "mysql_credentials_local": {
        "host":"127.0.0.1:3306",
        "user":"root",
        "password":"",
        "database":"garbanzo"
    }
}
