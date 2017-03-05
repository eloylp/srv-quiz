#!/usr/bin/env bash

curl -X POST http://$1/quizzes -d @quizes.json -H "Content-Type: application/json" -H 'Authorization:c40f7f4d574fbd6cdb025ae076701d5a'

