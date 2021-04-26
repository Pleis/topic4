var dropZone = document.getElementById('textarea');
dropZone.addEventListener('dragover', dragOver);
dropZone.addEventListener('dragend', dragEnd);
dropZone.addEventListener('drop', readText, false);
function dragOver(e) {
    
    e.preventDefault();
    return false;
} 
function dragEnd(e) {

    e.preventDefault();
    return false;
}
function readText(e) {
    e.preventDefault();
    var file,
        fileData,
        fileReader,
        files = e.dataTransfer.files;
 
    if (!files) {
        return;
    }
 
    for(var i=0;i<files.length;i++)
    {
        file = files[i];
        fileReader = new FileReader();
        fileReader.textArea = dropZone;
 
        fileData = function (event) {
            this.textArea.value += this.result
        };
 
        fileReader.addEventListener('loadend',fileData);
        fileReader.readAsText(file);
    }
}