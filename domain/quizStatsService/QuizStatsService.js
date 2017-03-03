'use strict';

module.exports = class QuizStatsService {

    constructor(quizRepository) {

        this._quizRepository = quizRepository;
    }

    checkQuiz(quiz) {

        let stats = this._quizRepository.checkStats();

        /// DO stats processing
        return stats;
    }
}