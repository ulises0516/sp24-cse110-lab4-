# Part 2

1. Line 12 will print 3 because the loops iterates until i is equal to or greater than the array length. In this case the length of the array is 3 so i will updated to 3 then break out the for loop.
2. line 13 will print 150 because the last time the `var discountedPrice = ...` is updated is with the last element of the array which is 300. After the operations 300 * (1-0.5) = 150. This is the last time discountedPrice will be updated so on line 13 it will print 150.
3. Line 14 will print 150 because final prices is defined with a var variable which means that it has a function scope and it is updated in the for loop. So we have to figure out when is the last time finalPrice is updated which happens with the last element in the array - 300. Line 8 is the last time finalPrice will be updated with the following operations round ((150 * 100) /100) which equals 150. Hence `console.log(finalPrice)` printing 150.
4. line 16 will return an array of the discountedPrices which in this case was 50 percent. Essentially each element of the original array ("prices") will have a 50 percent discount applied to each element. So the array returned will contain [50,100,150].
