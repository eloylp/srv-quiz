const QuizAddServiceC = require('./quizAddService/QuizAddService');
const QuizListServiceC = require('./quizListService/QuizListService');
const QuizCheckServiceC = require('./quizCheckService/QuizCheckService');
const RepositoryBuilderC = require('./../repository/RepositoryBuilder');

module.exports = class ServiceBuilder {

    build() {

        return new Promise((resolve, reject) => {

            let repositoryBuilder = new RepositoryBuilderC();

            repositoryBuilder.build().then((repositories) => {
                resolve({
                    quizAddService: new QuizAddServiceC(repositories.quiz),
                    quizCheckService: new QuizCheckServiceC(repositories.quiz, repositories.quizResponse),
                    quizListService: new QuizListServiceC(repositories.quiz)
                });

            }).catch((err) => {

                reject(err);

            });
        });
    }
}