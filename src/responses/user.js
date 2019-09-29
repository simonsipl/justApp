module.exports = {
    login(email,res) {
        res.format({
            "default"() {
                res.status(200).json('Username with ' + email + ' logged in successufl');
            },
            "application/json"() {
                res.status(200).json('Username with ' + email + ' logged in successufl');
            },
        })
    },
    register(id, res) {
        res.format({
            "default"() {
                res.status(200).json('Registred');
            },
            "application/json"() {
                res.status(200).json('Registred');
            }
        })
    }
}