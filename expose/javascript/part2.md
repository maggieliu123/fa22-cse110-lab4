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

12. 1. `student.name`  
    2. `student["Grad year"]`
    3. `student.greeting()`
    4. `student['Favorite Teacher'].name`
    5. `student[courseLoad][0]` 

13. 1. The result is `'32'` in the type of string. This is because the `+` symbol indicates concatenation. The number `2` turns into the string `'2'`, then concatenates with `'3'` to get `'32'`.  
    2. The result is `1` because type conversion turns the string `'3'` into a number `3` and then does the arithmetic operation `3-2` which is `1`.
    3. The result is the number `3` because the `null` value is type converted to the number `0`. So, `3 + 0 = 3`
    4. The result is `'3null'` as a string because the null is tpe converted to the string `'null'`.
    5. The result returned will be the number `4` because the boolean `true` type converts to the number `1`. Therefore, `true + 3 = 1 + 3 = 4`.
    6. The result will be the number `0` because the type values `false` and `null` can both be converted to the number value `0`. Therefore, `0 + 0 = 0`.
    7. The result will be the string `'3undefined'`. This is because the addition sign implies concatenation, so the value `undefined` type converts to the string `'undefined'`. 
    8. The result is the number `NaN`. The type conversion of the string and undefined value to a number is `3` and `NaN`, respectivtely. The result is `NaN` because the trying to subtract a invalid number value from `3` is not possibe. Thus, we get an invalid number, `NaN`.
14. 1. This result will be the boolean  `true`. This is because the string `2` is converted to the number `2`. Since `2 > 1`, the comparison is true.
    2. The result is the boolean `true`. This is because strings are compared letter-by-letter in dictionary order. Since the char `2` is greater than the first char `'1'` of the string `'12'` and the string comparison ends after the comparison of the first characters, then we know that the comparison is true.
    3. This will result in the boolean `true` because the the string `'2'` is converted to the number `2`. Since `2 == 2` is true, the comparison is true.
    4. This will result in the boolean `false` because the two values are not of the same type. 
    5. This will result in the boolean `false` because the number conversion for the boolean `true` is 1, not 2.
    6. This will result in the boolean `true` because any argument that is not `0`, `-0`, or `NaN` when put in the `Boolean()` will return true. Therefore, `Boolean(2) = true` and `true === true ` is true.  
15. The difference between the `==` and `===` is that `===` is a strict comparison and immediately evaluates the expression without any type conversion.
16. 
