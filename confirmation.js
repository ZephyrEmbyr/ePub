$(#'confirm').click(storeInput);

<!--Saves user input into a string object-->
function storeInput(){
    var txtName = document.getElementById("txtname");
    var txtBowId = document.getElementById("txtBowId");
    var bowId = txtBowId.value;
    var name = txtName.value;
    editObject(name, bowId);
  } // end storeName

function editObject(name, id)
    {
        order.addName(name);
        order.addId(id);
    }


function addName(x){
    object.name=x;
}

function addId(y){
    object.Id=y;
}