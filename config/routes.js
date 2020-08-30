const admin = require('./admin')

module.exports = app => {

    app.post('/signup', app.api.users.save)
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)
    
    app.route('/categories')
        .all(app.config.passport.authenticate())
        .get(admin(app.api.categories.get))
        .post(admin(app.api.categories.save))

    app.route('/categories/tree')
        .all(app.config.passport.authenticate())
        .get(app.api.categories.getTree)

    app.route('/categories/:id')
        .all(app.config.passport.authenticate())
        .get(app.api.categories.getById)
        .put(admin(app.api.categories.save))
        .delete(admin(app.api.categories.remove))

    app.route('/users')
        .all(app.config.passport.authenticate())
        .get(app.api.users.get)
        .post(admin(app.api.users.save))
    
    app.route('/users/:id')
        .all(app.config.passport.authenticate())
        .put(admin(app.api.users.save))
        .get(admin(app.api.users.getById))
        .delete(admin(app.api.users.remove))

    app.route('/articles')
        .all(app.config.passport.authenticate())
        .get(app.api.article.get)
        .post(admin(app.api.article.save))

    app.route('/articles/:id')
        .all(app.config.passport.authenticate())
        .get(app.api.article.getById)
        .put(admin(app.api.article.save))
        .delete(admin(app.api.article.remove))

    app.route('/categories/:id/articles')
        .all(app.config.passport.authenticate())
        .get(app.api.article.getByCategory)

    app.route('/stats')
        .all(app.config.passport.authenticate())
        .get(app.api.stat.get)

}