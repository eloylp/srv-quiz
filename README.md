# SRV-QUIZ #

Srv - quiz is an application server intended to bring us a quiz system where you can submit questions and later
retrieve them for asking other people, registering answers.


### Features ###

* Submit quizzes
* Retrieve quizzes, also in a random fashion and/or by tags.
* Responses are checked and saved for later analysis.
* Simple auth token supported.
* You can update the tags or possible answers of your quizzes.
* You can remove your quizzes.


### How do I get set up? ###

To start the server you only need docker and docker-compose installed.
Type this on terminal from the root of the project.

``` bash
docker-composer up
```

### Project Structure


``` bash
.
├── bin                     binaries to bootsrap application.
├── config                  Main app configuration file. 
├── docker                  Docker related stuff.
│   └── node
├── domain                  This is our purely bussiness logic. Our domain. Our Language.
│   ├── authService
│   ├── quizAddService
│   ├── quizListService
│   ├── quizRemoveService
│   ├── quizResponseService
│   ├── quizStatsService
│   └── quizUpdateService
├── persistence             This folder is for the different persistence systems.
│   └── waterline
│       ├── config
│       └── model
├── repository              This is our abstraction from the persistence layer.
├── test
│   └── resources
└── web                     This is our abstraction from the express framework.
    ├── controller
    ├── middleware
    └── routes


```

### Project pattern motivation (Domain Driven Design approach)

The primary objective of this pattern is to isolate our business logic from everything. We have a data input from our 
expressJs controllers, that input is translated to entities that our system is capable to understand and operate.
Later, We can persist our entities to ANY persistence model, but that data is transformed again for each persistence
model. This brings to us the opportunity to store, manage and retrieve same data in a different manner for each operation.

For example, with this context you have the opportunity of map from persistence model only the fields that you want to be played
at the Domain model. In this project updatedAt and createdAt fields from persistence model have been omitted as an example.

Since all our business logic is very isolated we can unit test it very easy without the need of doing 
too much integration or heavy load tests that incurs in an slowly CI environment.


### Project pending tasks

* Better tests. (that will improve code quality.)
* Integration tests.
* Better exception promise / reject handling.
* Data validation.
* Stats endpoint. To see results of answered quizzes.

### Curl example requests for using the service

#### Bootstrap
First of all you need to populate the server with quizzes. You can open a terminal in the root of project and type:

``` bash
cd test/resources
./quizes_load_all.sh localhost
```
It will return all created quizzes. You can pass another host/port parameter if you want.

#### Posting quiz or quizzes
``` bash
curl -X POST localhost/quizzes -d @file.json -H "Content-Type: application/json" -H 'Authorization:c40f7f4d574fbd6cdb025ae076701d5a'

```
File json could be a simple quiz or an array of quizzes. You can see one example here [this](test/resources/quizes.json)

#### Query for all saved quizzes

``` bash
curl http://localhost/quizzes -H "Content-Type: application/json" -H 'Authorization:c40f7f4d574fbd6cdb025ae076701d5a'
```

#### Query for all saved quizzes by tag

``` bash
curl http://localhost/quizzes?byTags=sport,history -H "Content-Type: application/json" -H 'Authorization:c40f7f4d574fbd6cdb025ae076701d5a'
```

#### Query for specific quiz

``` bash
curl http://localhost/quizzes/58bc777f80fe7da41f6a38c5 -H "Content-Type: application/json" -H 'Authorization:c40f7f4d574fbd6cdb025ae076701d5a'
```

#### Query for a random quiz to ask someone (answers hidden)
``` bash
curl http://localhost/quizzes?random=true -H "Content-Type: application/json" -H 'Authorization:c40f7f4d574fbd6cdb025ae076701d5a'
```

#### Query for a random quiz by tag to ask someone (answers hidden)
``` bash
curl http://localhost/quizzes?random=true&byTags=sport,history -H "Content-Type: application/json" -H 'Authorization:c40f7f4d574fbd6cdb025ae076701d5a'
```

#### Update a saved quiz. (Only expected response and/or tags can be updated)

``` bash
curl -X PUT http://localhost/quizzes/58bc777f80fe7da41f6a38c3 -d '{"tags": ["sports", "other"], "correctAnswers" : ["correction1", "correction2"]}' -H "Content-Type: application/json" -H 'Authorization:c40f7f4d574fbd6cdb025ae076701d5a'
```

#### Delete a specific quiz
``` bash
curl -X DELETE http://localhost/quizzes/58bc777f80fe7da41f6a38c3 -H "Content-Type: application/json" -H 'Authorization:c40f7f4d574fbd6cdb025ae076701d5a'
```

#### Remove all quizzes

``` bash
curl -X DELETE http://localhost/quizzes -H "Content-Type: application/json" -H 'Authorization:c40f7f4d574fbd6cdb025ae076701d5a'
```

#### Answering quizzes

``` bash
curl -X POST http://localhost/quizCheck -d '{"quizId": "58bc82aad851cec72341430d", "quizResponse": "italy", "participant": "participant1"}' -H "Content-Type: application/json" -H 'Authorization:c40f7f4d574fbd6cdb025ae076701d5a'
```
