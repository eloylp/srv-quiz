#!/usr/bin/env bash

curl -X POST http://$1/quizzes -d @quizes.json --header "Content-Type: application/json"

