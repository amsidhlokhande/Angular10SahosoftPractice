import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Student } from './student';

export class StudentData implements InMemoryDbService {
    createDb() {
        let studentData: Student[] = [
            { id: 1, name: 'Amsidh', standard: 'B.E' },
            { id: 2, name: 'Anjali', standard: 'B.Ed' },
        ];
        return { students: studentData };
    }

}
