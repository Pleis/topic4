const save2 = document.getElementById("save");

var db;
var request = indexedDB.open("MyTestDatabase", 1);
request.onerror = function(event) {
  alert("ERROR DB");
};
request.onsuccess = function(event) {
    console.log("success");
  db = request.result;
};

save2.addEventListener("click", function add() {
    db = document.getElementById("textarea").value;
    var request = db.transaction(["info"], "readwrite")
    .objectStore("info")
    .add({ save2 });
    
    request.onsuccess = function(event) {
       alert("success");
    };
    
    request.onerror = function(event) {
       alert("error");
    }
 })

