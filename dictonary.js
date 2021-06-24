class Dictonary {
    constructor(){
        this.dictonary = {};
    }
    add(key,value){
        this.dictonary[key] = value;
    }
    get(key){
        return this.dictonary[key];
    }
}
const student = new Dictonary();

student.add('name', 'John kabir');
student.add('age', 23);
student.add('phone', 12345678);

const kabirsAge = student.get('age');
console.log(student.dictonary)
console.log(kabirsAge)