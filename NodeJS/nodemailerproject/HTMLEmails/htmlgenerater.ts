var noofrows=4;
var noofcols=4;
export var htmlstring=`<!DOCTYPE html>
<html>

<head>
    <title>abc</title>
    <meta charset="utf-8" />
</head>

<body>
    <table border=1>
        <thead>
            <tr>
                <th>ScriptName</th>
                <th>Passed</th>
                <th>Failed</th>
                <th>No Run</th>
            </tr>
        </thead>
        <tbody>`;

let appendstring="";
for (let row=0;row<noofrows;row++)
{
    appendstring=appendstring+'<tr>';
        for(let col=0;col<noofcols;col++)
        {
            appendstring=appendstring+'<td>'+"Value in call"+'</td>';
        } 
        appendstring=appendstring+'</tr>';
}
appendstring=appendstring+` </tbody>
</table>
</body>

</html>`;

htmlstring=htmlstring+appendstring;
         
