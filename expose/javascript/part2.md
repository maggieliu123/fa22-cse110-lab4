1. Line 12 will print out `3` to the console because the loop is exited when `var i = prices.length`. Since `prices.length = 3`, then the loop halts at `i=3` and is then logged.
   
2. Line 13 will print out `150` to the console. Since `discountedPrice` is a `var` type, it will exist outside of the block scope. On the last iteration, `i = 2`, `prices[i] = prices[2] = 300`, and `discount = 0.5`. Then, `discounted price` would be `prices[2]*(1-discount) = 150`.  
   
3. This will still print out `150` with the similar logic as Question 2 because there is no `use strict`. Therefore, the variable `finalPrice` is treated as a global variable.
   
4. The function will return a list of the discounted prices that were discounted from the original price list `prices` with the discount percentage of `discount`.
   
5. This will result in an error because `i` does not exist outside the scope of the for loop. Therefore, its value cannot be printed.
   
6. This will result in an error for the same reasoning as Question 5. The variable `discountedPrice` does not exist outside of the for loop.

7. This will print out `150` because the variable `finalPrice` was not declared within a block. Therefore, even if its of variable type `let`, it can exist within the entire block scope which is the function. Thus, line 14 does have access to the value of `finalPrice`.

8. The function will return a list of discounted prices using the inputs of a list of original prices and a discount value.
   
9. This will result in an error because `i` is of variable type `let` which only exists within the scope in which the variable is declared. Since line 11 is outside of that scope, an error would occur.
    
10. Line 12 will print `3` to the console because the length of the input parameter `prices` is 3. Also, this `const` variable was not declared in a specific block in the function, so it can be used anywhere within the function. Since it did not change value, no error occurs.
    
11. This function will return a list of discounted prices. It will not cause an error because it is not changing the value of the list. Rather, it is just adding things into the list. In a sense, the memory address that stores the list is unchanged, it's only the contents within that memory address that are changed.

12. * `student.name`  
    * `student["Grad year"]`
    * `student.greeting()`
    * `student['Favorite Teacher'].name`
    * `student[courseLoad][0]`
13. 
14. 
15. 
