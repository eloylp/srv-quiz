'use strict';

const QuizC = require('./../domain/quizAddService/Quiz');

module.exports = class QuizMapper {

    map(quiz) {

        return new Promise((resolve, reject) => {

            if (Array.isArray(quiz)) {

                var mapping = [];
                for (let i = 0, length = quiz.length; i < length; i++) {

                    let mappedQuiz = new QuizC(
                        quiz[i].quiz,
                        quiz[i].correct_answers,
                        quiz[i].tags
                    );
                    mappedQuiz.id = quiz[i].id;
                    mapping.push(mappedQuiz);
                }

            } else {
                var mapping = new QuizC(
                    quiz.quiz,
                    quiz.correct_answers,
                    quiz.tags
                );
                mapping.id = quiz.id;
            }
            resolve(mapping);
        });
    }
}