const autocannon = require('autocannon')
const { promisify } = require('util');

const autocannonPromise = promisify(autocannon);

const messageFindByName = JSON.stringify({
    name: 'иЯАДтЬЮЮы6юЗоцЯНЕ3ЪгОЧгЮ5БАвгыОГШнЕаРыГЛк'
})
const messageGetBySubstring = JSON.stringify({
    substring: 'ое'
})

async function runBenchmark() {
    try {
        const result = await autocannonPromise({
            title: 'Test mongo load',
            url: 'http://localhost:7300',
            connections: 1000,
            duration: 2,
            headers: {
                // by default we add an auth token to all requests
                auth: 'A Pregenerated auth token'
            },
            requests: [
                {
                    title: 'Find by name',
                    method: 'POST',
                    path: '/name/get',
                    body: messageFindByName,
                    headers: {
                            'Content-Length': messageFindByName.length,
                            'Content-Type': 'application/json; charset=utf-8',
                    }
                },
                {
                    title: 'Get first ten rows',
                    method: 'GET',
                    path: '/name',
                    headers: {
                        'Content-type': 'application/json; charset=utf-8'
                    },
                },
                {
                    title: 'Find by name',
                    method: 'POST',
                    path: '/name/substring/get',
                    body: messageGetBySubstring,
                    headers: {
                        'Content-Length': messageGetBySubstring.length,
                        'Content-Type': 'application/json; charset=utf-8',
                    },
                    onResponse: (res) => {
                        console.log('res', res)
                    }
                },
            ]
        });
        console.log('Результат тестирования:', result);
    } catch (err) {
        console.error('Ошибка при выполнении нагрузочного тестирования:', err);
    }
}

runBenchmark();
