let readdata=require('./ReadDatafromJson');
let resultsmap:Map<string,string[]>=readdata.map
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
                <th>Test Suite Name</th>
                <th>Total Tests</th>
                <th>Passed</th>
                <th>Failed</th>
            </tr>
        </thead>
        <tbody>`;
let totaltests:number=0;
let totalpassed:number=0;
let totalfailed:number=0;
let appendstring="";
for (let testnames of resultsmap.keys())
{
    appendstring=appendstring+'<tr>';
    appendstring=appendstring+'<td>'+testnames+'</td>'; 
    let results="";
    results=resultsmap.get(testnames)+"";
    let values:string[]=results.split(","); 
    totaltests=totaltests+parseInt(values[0]);
    totalpassed=totalpassed+parseInt(values[1]);
    totalfailed=totalfailed+parseInt(values[2]);
    for(let x=0;x<values.length;x++)
    {
        appendstring=appendstring+'<td>'+values[x]+'</td>';  
    }
    appendstring=appendstring+'</tr>';
}
appendstring=appendstring+'<tr>';
    appendstring=appendstring+'<td>'+"Total"+'</td>'; 
    appendstring=appendstring+'<td>'+totaltests+'</td>'; 
    appendstring=appendstring+'<td>'+totalpassed+'</td>'; 
    appendstring=appendstring+'<td>'+totalfailed+'</td>'; 
appendstring=appendstring+` </tbody>
</table>
</body>

</html>`;

htmlstring=htmlstring+appendstring;

