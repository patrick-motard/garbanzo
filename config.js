module.exports = () => {
    var p = process.env;
    return {
        garbanzoDbConfig: {
            host: p.GARBANZO_HOST,
            database: p.GARBANZO_DATABASE,
            password: p.GARBANZO_PASSWORD,
            user: p.GARBANZO_USER
        },
        secret: p.SECRET,
        redditAuth: {
            access_token: p.REDDIT_ACCESS_TOKEN,
            token_type: 'bearer',
            expires_in: 3600,
            refresh_token: p.REDDIT_REFRESH_TOKEN,
            scope: 'account edit history identity'
        }
    }
}()
