import { InMemoryDbService } from 'angular-in-memory-web-api';

export class EmployeeData implements InMemoryDbService {
    createDb() {

        let employeeData = [
            { id: 8410301, name: 'Amsidh', salary: 32423 },
            { id: 8410302, name: 'Madam', salary: 32766 },
            { id: 8410303, name: 'Suyog', salary: 32465 },
        ];
        return { employee: employeeData };
    }

}