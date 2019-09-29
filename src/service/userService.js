const bcrypt = require('bcryptjs');
const HASHING_ROUNDS = Number(process.env.BCRYPT_ROUNDS) || 12;

module.exports = userRepository => ({
    async register({ email, password }) {
        const hashedPassword = await bcrypt.hash(password, HASHING_ROUNDS);
        return await userRepository.register({ email, password: hashedPassword, userData: {} })
    }
});