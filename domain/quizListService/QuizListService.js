'use strict';

const RandomizerC = require('./Randomizer');

module.exports = class QuizListService {

    constructor(quizRepository) {

        this._quizRepository = quizRepository;
        this._randomizer = new RandomizerC();
    }

    getAll() {

        return this._quizRepository.getAll()
    }

    getByTags(tags) {

        return this._quizRepository.getByTags(tags.split(","));
    }

    getById(id) {

        return this._quizRepository.getById(id);
    }

    getByTagsRandomized(tags) {

        return new Promise((resolve, reject) => {

            this.getByTags(tags).then((quizes) => {

                if (quizes.length) {
                    let quiz = quizes[this._randomizer.byLength(quizes.length)];
                    quiz.correctAnswers = [];
                    resolve(quiz);
                } else {
                    resolve(quizes);
                }

            }).catch((err) => {
                reject(err);
            });
        });
    }

    getRandomized() {

        return new Promise((resolve, reject) => {

            this._quizRepository.getAll().then((quizes) => {

                if (quizes.length) {
                    let quiz = quizes[this._randomizer.byLength(quizes.length)];
                    quiz.correctAnswers = [];
                    resolve(quiz);
                } else {
                    resolve(quizes);
                }
            }).catch((err) => {
                reject(err);
            });
        });
    }
}