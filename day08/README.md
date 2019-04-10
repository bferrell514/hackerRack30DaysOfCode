<b>Objective</b><br>
Today, we're learning about Key-Value pair mappings using a Map or Dictionary data structure. Check out the Tutorial tab for learning materials and an instructional video!

<b>Task</b><br>
Given <i>n</i> names and phone numbers, assemble a phone book that maps friends' names to their respective phone numbers. You will then be given an unknown number of names to query your phone book for. For each <i>name</i> queried, print the associated entry from your phone book on a new line in the form name=phoneNumber; if an entry for <i>name</i> is not found, print Not found instead.

<b>Note:</b> Your phone book should be a Dictionary/Map/HashMap data structure.

<b>Input Format</b><br>
The first line contains an integer, <i>n</i>, denoting the number of entries in the phone book. 
Each of the <i>n</i> subsequent lines describes an entry in the form of 2 space-separated values on a single line. The first value is a friend's name, and the second value is an 8-digit phone number.
After the <i>n</i> lines of phone book entries, there are an unknown number of lines of queries. Each line (query) contains a <i>name</i> to look up, and you must continue reading lines until there is no more input.

<b>Note:</b> Names consist of lowercase English alphabetic letters and are first names only.

<b>Constraints</b><br>
<li>1 <= <i>n</i> <= 10^5</li>
<li>1 <= <i>queries</i>i <= 10^5</li><br>

<b>Output Format</b><br>
On a new line for each query, print Not found if the name has no corresponding entry in the phone book; otherwise, print the full <i>name</i> and <i>phoneNumber</i> in the format name=phoneNumber.

<b>Sample Input</b><br>
3<br>
sam 99912222<br>
tom 11122222<br>
harry 12299933<br>
sam<br>
edward<br>
harry<br>

<b>Sample Output</b><br>
sam=99912222<br>
Not found<br>
harry=12299933<br>

<b>Explanation</b>
Test Case 0: <i>S</i> = "Hacker"<br>
<i>S</i>[0] = "H"<br>
<i>S</i>[1] = "a"<br>
<i>S</i>[2] = "c"<br>
<i>S</i>[3] = "k"<br>
<i>S</i>[4] = "e"<br>
<i>S</i>[5] = "r"<br>
The even indices are 0, 2, and ,4 and the odd indices are 1, 3, and 5. We then print a single line of 2 space-separated strings; the first string contains the ordered characters from <i>S</i>'s even indices (<b>Hce</b>), and the second string contains the ordered characters from <i>S</i>'s odd indices (<b>akr</b>).<br>

Test Case 1: <i>S</i> = "Rack"<br>
<i>S</i>[0] = "R"<br>
<i>S</i>[1] = "a"<br>
<i>S</i>[2] = "n"<br>
<i>S</i>[3] = "k"<br>

 
 
 
 
The even indices are 0 and 2, and the odd indices are 1 and 3. We then print a single line of 2 space-separated strings; the first string contains the ordered characters from <i>S</i>'s even indices (<b>Rn</b>), and the second string contains the ordered characters from <i>S</i>'s odd indices (<b>ak</b>).
