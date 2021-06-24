class Queue {
    constructor () {
        this.queue = [];
    }
    enqueue(item){
        this.queue.push(item);
    }
    dequeue(){
        if(this.queue.length){
            return this.queue.shift();
        }
    }
}
 const lover = new Queue();

 lover.enqueue('ishraq');
 lover.enqueue('faysal');
 lover.enqueue('reeon');
console.log(lover.queue)
lover.dequeue();
console.log(lover.queue)
