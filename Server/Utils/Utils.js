module.exports = {
    makeRoute: (path, handler) => {
        return{
            path,
            handler
        }
    }
}