let path = require('path');
let files=require('fs');
let filepaths= new Array();
export let map = new Map();


function fromDir(startPath:any,filter:any){

    if (!files.existsSync(startPath)){
        console.log("no dir ",startPath);
        return;
    }

    var allfilesindir=files.readdirSync(startPath);
    for(var i=0;i<allfilesindir.length;i++){
        var filename=path.join(startPath,allfilesindir[i]);
        if(filename.indexOf(filter)>=0) {
            filepaths.push(filename);
        };
    };
    console.log(filepaths);
    return filepaths;
};

function readdata(filepath:any)
{
    for(let x=0;x<filepath.length;x++)
    {
        let jsonfile=require(filepath[x]);
       /* console.log(jsonfile.stats.tests);
        console.log(jsonfile.stats.passes);
        console.log(jsonfile.stats.failures);
        console.log(jsonfile.suites.suites[0].title);*/
        map.set(jsonfile.suites.suites[0].title,[jsonfile.stats.tests,jsonfile.stats.passes,jsonfile.stats.failures]);
    }
}

fromDir('/home/admin/BryntumResults/20190322_222605','.json');
readdata(filepaths)
console.log(map)