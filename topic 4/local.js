const save3 = document.getElementById("save");
var lista
save3.addEventListener("click", function() {
   const texting = document.getElementById("textarea").value;
      lista = texting;
      console.log(lista);
      localStorage.setItem("thetext",JSON.stringify(lista));
   }
);
const delete3 = document.getElementById("delete");
delete3.addEventListener("click", function() {
    lista = ' ';
       console.log(lista);
       localStorage.setItem("thetext",JSON.stringify(lista));
    }
 );