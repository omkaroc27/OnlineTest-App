import { Injectable } from '@angular/core';

interface Quiz{
    question: string;
    answer: { option: string, correct: boolean } [];
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizzes: Quiz[] = [
    {
      question: 'Which of the following option leads to the portability and security of Java?',
      answer: [
        { option: 'The applet makes the Java code secure and portable', correct: false },
        { option: 'Use of exception handling', correct: false },
        { option: 'Bytecode is executed by JVM', correct: true },
        { option: 'Dynamic binding between objects', correct: false },
      ]
    },
    {
      question: 'Which of the following is not a Java features?',
      answer: [
        { option: 'Dynamic', correct: false },
        { option: 'Architecture Neutral', correct: false },
        { option: 'Use of pointers', correct: true },
        { option: 'Object-oriented', correct: false },
      ]
    },
    {
      question: '_____ is used to find and fix bugs in the Java programs.',
      answer: [
        { option: 'JDB', correct: true },
        { option: 'JRE', correct: false },
        { option: 'JDK', correct: false },
        { option: 'JVM', correct: false }
      ]
    },
    {
      question: 'What is the return type of the hashCode() method in the Object class?',
      answer: [
        { option: 'Object', correct: false },
        { option: 'long', correct: false },
        { option: 'int', correct: true },
        { option: 'void', correct: false }
      ]
    },
    {
      question: 'In which process, a local variable has the same name as one of the instance variables?',
      answer: [
        { option: 'Serialization', correct: false },
        { option: 'Variable Shadowing', correct: true },
        { option: 'Abstraction', correct: false },
        { option: 'Multi-threading', correct: false }
      ]
    },
    {
      question: 'Which of the following is true about the anonymous inner class?',
      answer: [
        { option: 'It has only methods', correct: false },
        { option: 'Objects can not be created', correct: false },
        { option: 'It has no class name', correct: true },
        { option: 'It has a fixed class name', correct: false }
      ]
    },
    {
      question: 'Which of the following is an immediate subclass of the Panel class?',
      answer: [
        { option: 'Window class', correct: false },
        { option: 'frame class', correct: false },
        { option: 'Applet class', correct: true },
        { option: 'Object class', correct: false }
      ]
    },
    {
      question: 'Which option is false about the final keyword?',
      answer: [
        { option: 'A final class cannot be extended.', correct: false },
        { option: 'A final method can be inherited.', correct: false },
        { option: 'A final class cannot extend other classes.', correct: true },
        { option: 'A final method cannot be overridden in its subclasses.', correct: false },
      ]
    },
    {
      question: 'What is the use of the intern() method?',
      answer: [
        { option: 'It creates a new string in the database', correct: false },
        { option: 'It modifies the existing string in the database ', correct: false },
        { option: 'It returns the existing string from memory', correct: true },
        { option: 'None of the above ', correct: false }
      ]
    },
    {
      question: 'Which of the following is a marker interface?',
      answer: [
        { option: 'Result interface', correct: false },
        { option: 'Runnable interface', correct: false },
        { option: 'Remote interface', correct: true },
        { option: 'Readable interface', correct: false }
      ]
    }
  ]



  getQuizzes(){
    return this.quizzes;
  }
}
