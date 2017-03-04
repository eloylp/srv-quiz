#!/usr/bin/env bash


for j in $(ls quizes); do

    curl -X POST http://$1/quiz -d @quizes/$j --header "Content-Type: application/json"

done
