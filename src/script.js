const {DateTime} = require('luxon');

const getRandomInt = (min, max) => {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);

    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

const generateRandomString = () => {
    const length = getRandomInt(10, 50);
    let result = '';
    const characters =
        'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя0123456789';
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
};

const insertFields = async (collection) => {
    const startTime = DateTime.now();
    console.log(`Process start at ${startTime.toLocaleString(DateTime.TIME_24_WITH_SECONDS)}`);
    try {
        for (let i = 0; i < 10 ** 6; i += 1) {
            await collection.insertOne({
                name: generateRandomString(),
            });
        }

        await collection.createIndex({name: 1}, {unique: true});
        await collection.createIndex({name: "text"});
    } catch (err) {
        console.error(err);
    }

    const endTime = DateTime.now();
    const duration = endTime.diff(startTime, ['hours', 'minutes', 'seconds', 'milliseconds']).toObject();
    console.log(`Process end at ${endTime.toLocaleString(DateTime.TIME_24_WITH_SECONDS)}`);
    console.log(`Process duration: ${JSON.stringify(duration)}`);

    return 'done.';
}

module.exports = insertFields;
