const axios = require('axios');

module.exports = class Classes {
    constructor(name, url){
        this.name = name;
        this.url = url;
        this.attributes = {};
    }

    async getAttributes() {
        const dndClass = this;
        const attrPromise = new Promise(function(resolve, reject) {
            try{
                axios.get(dndClass.url).then((result) => {
                    dndClass.attributes = result.data;
                    resolve(dndClass);
                });
            }
            catch(err){
                resolve({error: 500, message: 'Something went wrong fetching race'})
            }
        });

        return await attrPromise;
    }
}