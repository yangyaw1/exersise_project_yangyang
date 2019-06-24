import { Test, Question, Chioce, Answer } from './models/test.model';
export const TESTS: Test[] = [
    {
        "id": 1,
        "name": "Continuous function",
        "body": [
            {
                "id": 1,
                "des": "True of False: All Power functions are continuous.",
                "chioces": [{'value':"True"}, {'value':"False"}],
                "solu": {'value': 0}
            },
            {
                "id": 2,
                "des": "True of False: If f(x) is continuous on R, then f(x) is continuous at 0.",
                "chioces": [{'value':"True"}, {'value':"False"}],
                "solu": {'value': 0}
            }
            
        ],
        "subject": "Math"
    },
    {
        "id": 2,
        "name": "Force and movement",
        "body": [
            {
                "id": 1,
                "des": "True of False: Without force, an object cannot move.",
                "chioces": [{'value':"True"}, {'value':"False"}],
                "solu": {'value': 1}
            }
        ],
        "subject": "Physics"
    },
    {
        "id": 3,
        "name": "Binary Search Tree",
        "body": [
            {
                "id": 1,
                "des": "True of False: The pre-order traversal of binary search tree is sorted.",
                "chioces": [{'value':"True"}, {'value':"False"}],
                "solu": {'value': 0}
            }
        ],
        "subject": "Coding"
    }
];