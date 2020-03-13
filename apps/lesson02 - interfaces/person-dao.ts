import { Person } from './../lesson01-classes/person';
import { DaoInterface } from './dao.interface';

export class PersonDao implements DaoInterface {

    tableName: string;

    insert(person: Person): boolean {
      console.log('Inserindo...', person.toString());
      return true;
    }

    update(person: Person): boolean {
      return true;
    }

    delete(id: number): boolean {
      return true;
    }

    find(id: number): Person{
      return null;
    }

    findAll(): [Person] {
      return [new Person('João')];
    }
}