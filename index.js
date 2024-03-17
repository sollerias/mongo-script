const dbConnection = require('./src/db-connection')
const insertScript = require('./src/script')
const {DB_COLLECTION} = require('./src/consts')

async function main() {
    try{
        const db = await dbConnection();
        const collection = db.collection(DB_COLLECTION);

        await insertScript(collection);

        return 'done.';
    } catch(err){
        console.error(err)
    }
}
main();
