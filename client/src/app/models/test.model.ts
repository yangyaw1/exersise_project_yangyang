export class Test {
    id: number;
    name: string;
    body: Question[];
    subject: string
}

export class Question {
    id: number;
    des: string;
    chioces: Chioce[];
    solu: Answer
}

export class Chioce {
    value: string
}

export class Answer {
    value: number
}