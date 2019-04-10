<b>Objective</b><br>
Today, we're learning and practicing an algorithmic concept called Recursion. Check out the Tutorial tab for learning materials and an instructional video!
<b>Recursive Method for Calculating Factorial</b>
<i>factorial(N) = {1                  N <= 1
                  {N x factorial(N-1) otherwise </i>
<b>Task</b><br>
Write a factorial function that takes a positive integer, <i>N</i> as a parameter and prints the result of <i>N</i>! (<i>N</i> factorial).<br>

<b>Note:</b>  If you fail to use recursion or fail to name your recursive function factorial or Factorial, you will get a score of 0.<br>

<b>Input Format</b><br>
A single integer, <i>N</i> (the argument to pass to factorial).<br>

<b>Constraints</b><br>
<li>2 <= <i>N</i> <= 12</li>
<li>Your submission must contain a recursive function named factorial.</li><br>

<b>Output Format</b><br>
Print a single integer denoting <i>N</i>!.

<b>Sample Input</b><br>
3<br>


<b>Sample Output</b><br>
6<br>


<b>Explanation</b><br>
Consider the following steps:<br>
<ol>
<li>factorial(3) = 3 x factorial(2)</li>
<li>factorial(2) = 2 x factorial(1)</li>
<li>factorial(1) = 1</li>
</ol>

From steps 2 and 3, we can say factorial(2) = 2 x 1 = 2; then when we apply the value from factorial(2) to step 1, we get factorial(3) = 3 x 2 x 1 = 6 . Thus, we print 6 as our answer.
