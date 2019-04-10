<b>Objective</b><br>
Today, we're delving into Inheritance. Check out the attached tutorial for learning materials and an instructional video!<br>

<b>Task</b><br>
You are given two classes, Person and Student, where Person is the base class and Student is the derived class. Completed code for Person and a declaration for Student are provided for you in the editor. Observe that Student inherits all the properties of Person.
<ul>A Student class constructor, which has 4 parameters:</ul><br>
<ol>
<li>A string, firstName.</li>
<li>A string, lastName.</li>
<li>An integer, id.</li>
<li>An integer array (or vector) of test scores, scores.<li>
</ol><br>

<ul>A char calculate() method that calculates a Student object's average and returns the grade character representative of their calculated average:<il>

<h3>Grading Scale</h3>
<table>
<tr>
<th><b>Letter</b></th>
<th><b>Average(a)</b></th>
</tr>
<tr>
<th><b>O</b></th>
<th>90 <= a <= 100</th>
</tr>
<tr>
<th><b>E</b></th>
<th>80 <= a < 90</th>
</tr>
<tr>
<th><b>A</b></th>
<th>70 <= a <= 80</th>
</tr>
<tr>
<th><b>P</b></th>
<th>55 <= a <= 70</th>
</tr><tr>
<th><b>D</b></th>
<th>40 <= a <= 55</th>
</tr>
<tr>
<th><b>T</b></th>
<th> a < 40</th>
</tr>
</table><br>


<b>Input Format</b><br>
The locked stub code in your editor calls your Student class constructor and passes it the necessary arguments. It also calls the calculate method (which takes no arguments).

You are not responsible for reading the following input from stdin: 
The first line contains firstName, lastName, and id, respectively. The second line contains the number of test scores. The third line of space-separated integers describes scores.<br>

<b>Constraints</b><br>
<ul>1 <= |firstName|,|lastName| <=10</ul><br>
<ul>|id| = 7</ul><br>
<ul>0 <= score, averahe <= 100</ul><br>

<b>Output Format</b><br>
This is handled by the locked stub code in your editor. Your output will be correct if your Student class constructor and calculate() method are properly implemented.<br>

<b>Sample Input</b><br>
Heraldo Memelli 8135627<br>
2<br>
100 80<br>

<b>Sample Output</b><br>
 Name: Memelli, Heraldo<br>
 ID: 8135627<br>
 Grade: O<br>



<b>Explanation</b><br>
This student had 2 scores to average: 100 and 80. The student's average grade is (100 + 80)/2 = 90. An average grade of 90 corresponds to the letter grade O, so our calculate() method should return the character'O'.
