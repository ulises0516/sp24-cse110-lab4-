# Part 2

1. Line 12 will print 3 because the loops iterates until i is equal to or greater than the array length. In this case the length of the array is 3 so i will updated to 3 then break out the for loop.
2. line 13 will print 150 because the last time the `var discountedPrice = ...` is updated is with the last element of the array which is 300. After the operations 300 * (1-0.5) = 150. This is the last time discountedPrice will be updated so on line 13 it will print 150.
3. Line 14 will print 150 because final prices is defined with a var variable which means that it has a function scope and it is updated in the for loop. So we have to figure out when is the last time finalPrice is updated which happens with the last element in the array - 300. Line 8 is the last time finalPrice will be updated with the following operations round ((150 * 100) /100) which equals 150. Hence `console.log(finalPrice)` printing 150.
4. line 16 will return an array of the discountedPrices which in this case was 50 percent. Essentially each element of the original array ("prices") will have a 50 percent discount applied to each element. So the array returned will contain [50,100,150].
5. line 12 will cause a reference error because i is declared with let this means the scope is now limited to the for loop and since it tries to print i outside of this scope it will produce an error.
6. line 13 will cause a reference error because discounted is declared with let this means the scope is now limited to the for loop body  and since it tries to print discounted price outside of this scope it will produce an error.
7. Line 14 will print 150 because final prices is defined with a let variable which means that it has a block scope. Since declared pretty much as on the first variables of the function this means they can accessed from everywhere below it. Therefore, when  it is updated in the for loop below it this will be the last time finalPrice will be updated. So we have to figure out when is the last time finalPrice exactly with what value and this happend with the last element in the array - 300. Line 8 is the last time finalPrice will be updated with the following operations round ((150 * 100) /100) which equals 150. Hence `console.log(finalPrice)` printing 150.
8. line 16 will return an array of the discountedPrices which in this case was 50 percent. Essentially each element of the original array ("prices") will have a 50 percent discount applied to each element. So the array returned will contain [50,100,150]. This happens because the variables that were changed from var to let did not change overall funciton of the discountPrices(prices, discount). It will still function as when the variables were declared with var because changing i to let does not affect the operations in the body still working as its should. FinalPrice still functions correctly holding the discounted price of the original price then pushed to a new array.
9. Line 11 will cause a reference error because i is declared with let which means its a code block scope and the scope of i in this case is the for loop. Since line 11 tries to print i and its outside of this scope it will produce a reference error.
10. Line 12 will print 3 because length holds the length of the array which is prices that contains 3 element hence printing 3.
11. line 16 will return an array of the discountedPrices which in this case was 50 percent. Essentially each element of the original array ("prices") will have a 50 percent discount applied to each element. So the array returned will contain [50,100,150]. This happens because the variables that were changed from var to let did not change overall funciton of the discountPrices(prices, discount). It will still function as when the variables were declared with var because changing i to let does not affect the operations in the body still working as its should. FinalPrice still functions correctly holding the discounted price of the original price then pushed to a new array. Delcaring the array as a const does not do anything because we are pushing new elements to the array not altering the elements inside it. Inside the for loop we just calcualte the discounted price and then push it to the new array to return - discountedPrices. Now the array will contained all of the discounted Prices and will be returned.
12.  
    A. student.name
    B. student['Grad Year']
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]
13. 
    A. 32
    B. 1
    C. 3
    D. 3null
    E. 4
    F. 0
    E. Eundefined
    G. NaN
14. 
    A. True
    B. False
    C. True
    D. False
    E. False
    F. True

15. They compare values differently, where `==` performs type conversions(if needed) on the values being compared. Where `===` compares values of the two things being compared without doing type conversions, known as strict equality checker.
17. The result would be the array passed in [1,2,3] each element would be doubled so the new array after the function call would be [2.4,6]. I came to this conclusion since I know that a callback function is a function that can be passed to another function as a parameter. I followed what modifyArray was doing and noticed that it traverses each element and "callsback" doSomething since that was the function passed orginally and doSomething just multiplied the element by 2. This continue until the end of the array.


