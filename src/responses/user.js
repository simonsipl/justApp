module.exports = {
    register(id, res){
        res.format({
            "default"(){
                res.status(200).json('Registred');
            },
            "application/json"(){
                res.status(200).json('Registred');
            }
        })
    }
}