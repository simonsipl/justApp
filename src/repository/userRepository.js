module.exports = (connection) => {
    const users = connection.collection('users');
    return {
        async register({ email, password }) {
            return users.insertOne(
                {
                    email,
                    password,
                    userData: {}
                }
            );
        }
    }
};