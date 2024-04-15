interface stackInterface<Type> {
    push(dataItem: Type): void;
    pop(): Type | undefined;
    isEmpty(): boolean;
    printStack(): void;
 }
 
 export class Stack<Type> implements stackInterface<Type> {
 
    private StackData: Array<Type> = [];
 
    constructor() { }
 
    isEmpty(): boolean {
       let result = this.StackData.length <= 0;
       return result;
    }
 
    push(dataItem: Type): void {
       this.StackData.push(dataItem);
    }
 
    pop(): Type | undefined {
       if (this.isEmpty()) {
          console.log("A pilha está vazia!");
          return;
       } else {
          var element = this.StackData.pop();
          return element;
       }
    }
 
    printStack(): void {
       for (let i = 0; i < this.StackData.length; i++) {
          console.log(this.StackData[i]);
       }
    }
 
 }