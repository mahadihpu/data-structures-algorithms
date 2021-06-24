class Stack {
    constructor () {
        this.stack = [];
    }
    add(item){
        this.stack.push(item);
    }
    remove(item){
        this.stack.pop(item);
    }
}

const guest = new Stack ();

guest.add('mahadi');
guest.add('mridul');
guest.add('nashid');
guest.add('fahim');
guest.add('shuhayel');

console.log(guest.stack)
guest.remove();
console.log(guest.stack)