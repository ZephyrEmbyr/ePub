<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

$(#'confirm').click(storeInput);

//Saves user input into a string object
function storeInput(){
    var txtName = document.getElementById("txtname");
    var txtBowId = document.getElementById("txtBowId");
    var bowId = txtBowId.value;
    var name = txtName.value;
    
    var newOrder = new Order(name, bowId, items);
    //editObject(name, bowId);
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
    object.id=y;
}


function Order(name, id, items){
    this.name = name;
    this.id = id;
    this.items = items[];
}

//var newOrder = new Order(Jim, B9001, "fish taco", "coke");
