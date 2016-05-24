module.exports = (knex) => {

    var fields = [
        "name",
        "id",
        "created_date",
        "last_login"
    ];

    getUsers (ids) => {
        var q = knex.select(fields).from('user');
        if(ids){ return q.whereIn(ids)}
        return q;
    }

    getUser (id) => {
        return getUsers([id]);
    }

    createUser (user) => {
        return knex.insert(user).into('user');
    }

    toggleActive (id, active) => {
        return knex.update('active', active).where('id', id);
    }

    return {
        getUsers: getUsers,
        getUser: getUser,
        createUser: createUser,
        toggleActive: toggleActive
    }
}
