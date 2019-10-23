module.exports = (connection) => {
    const users = connection.collection('users');
    return {
        async login({email}) {
            return users.findOne({email})
        },

        async register({ email, password, userData = {} }) {
            return users.insertOne(
                {
                    email,
                    password,
                    userData
                }
            );
        }
    }
};
