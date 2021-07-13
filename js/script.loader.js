
filenames = [
    'bootstrap.bundle.min',
    'custom'
]

loadScripts(filenames);

async function loadScripts(filenames){
    var directory = "js/";
    var extension = ".js";
    for(var file of filenames){
        var path = directory + file + extension;
        var script = document.createElement("script");
        script.src = path;
        await document.body.appendChild(script);
    }
}