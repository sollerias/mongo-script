# Запуск бенчмарка

Перед запуском бенчмарка необходимо выполнить следующие шаги:
1. Установить MongoDB на машину, где будет проводиться запуск сервиса [mongo-app](https://github.com/sollerias/mongo-app)
2. Скачать и запустить сервис [mongo-app](https://github.com/sollerias/mongo-app)
3. Выполнить POST-запрос на эндпоинт `/name` сервиса [mongo-app](https://github.com/sollerias/mongo-app). Выполнение запроса
инициирует добавление данных в MongoDB, DB = `nest`, Collection = `names`. Ориентировочное время добавления записей = 2 минуты.
4. Запустить бенчмарк командой `make benchmark`
