export class Person {

  private name: string;
  
  constructor(name){
    this.name = name;
  }

  public showAge(age: number): void {
    console.log(`${this.name} tem ${age} de idade`)
  }

  public toString():string {
    return `Class Person, name ${this.name}`;
  }
}