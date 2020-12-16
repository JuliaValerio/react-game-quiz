import questions from './quiz.json';

export default class LocalStorageDatabase {

    questions;

    constructor() {
        localStorage.clear();
        this.questions = questions;
    }

    initialize() {
        try {
            localStorage.setItem('items', JSON.stringify(this.questions));
            return true;
        } catch (error) {
            console.error('Could not create local storage, try again', error);
            return false;
        }
    }
}