1. values added: 20     
     
2. final result: 20  
   
3. values added: 20 
   
4. error - this is because the variable `result` is declared within the `if (add)` block. It does not exist outside of that scope, therefore the `console.log` command in line 13 does not recognize the variable `result`.
   
5. error - this is because a variable of type `const` cannot be changed within the block scope. Therefore, the compiler will not accept changing `result` from 0 to `num1 + num2`.
   
6. error - since result is a variable type of `const`, it only exists within the block in which it was declared. Since line 13 lies beyond that scope, the variable `result` does not exist at that line and thus cannot be called to be printed on the console.