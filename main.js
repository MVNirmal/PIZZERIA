menu_list_array = ["Veg Margherita Pizza", "Double Cheese Margherita Pizza", "Mexican Green Wave Pizza", "Chicken Tandoori Pizza", " Mozzarella and Margherita Pizza", "Plain Cheddar Pizza"
                    ];

function getmenu(){
var htmldata;
menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<br>'
        }
        document.getElementById("display_menu").innerHTML = htmldata;
        //give the appropriate id name as display_menu  
}

function add_item(){
var html1data;
var item = document.getElementById("add_item").value;
        // use the sort function as - menu_list_array.sort();
        menu_list_array.sort();
        htmldata=""
        for(var i=0;i<menu_list_array.length;i++){
            html1data=html1data+menu_list_array[i]+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = html1data;		
      }

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}
