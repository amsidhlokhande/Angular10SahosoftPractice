import { InMemoryDbService } from "angular-in-memory-web-api";
import { Person } from './person';

export class PersonData implements InMemoryDbService {
    createDb(): {} {
        let personData: Person[] = [
            { id: 1, name: 'Amsidh', age: 37 }
        ];
        return { persons: personData };
    }

}