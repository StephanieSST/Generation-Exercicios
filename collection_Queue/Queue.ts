interface queueInterface<Type> {
    enqueue(dataItem: Type): void;
    dequeue(): Type | undefined;
    isEmpty(): boolean;
    printQueue(): void;
 }
 
 export class Queue<Type> implements queueInterface<Type> {
 
    private QueueData: Array<Type> = [];
 
    constructor() { }
 
    isEmpty(): boolean {
       let result = this.QueueData.length <= 0;
       return result;
    }
 
    enqueue(dataItem: Type): void {
       this.QueueData.push(dataItem);
    }
 
    dequeue(): Type | undefined {
       if (this.isEmpty()) {
          console.log("A fila está vazia");
          return;
       } else {
          var element = this.QueueData.shift();
          return element;
       }
    }
    printQueue(): void {
       for (let i = 0; i < this.QueueData.length; i++) {
          console.log(this.QueueData[i]);
       }
    }
 
 }