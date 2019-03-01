var $board = document.getElementById("board");
var $table = document.createElement("table");

for(var i = 0; i < 8; i++){
    var $row = document.createElement("tr");
    
    for(var j = 0; j < 8; j++){
        var $cell = document.createElement("td");
        
        
        
        $cell.style.border = "solid";
        
        $row.appendChild($cell);
    }
    
    $table.appendChild($row);
    
    
}



$board.appendChild($table);


//Получилась такая красивая доска, но как ее пронумеровать-не пойму. Пока еще очень плохо понимаю функции и массивы. Извините, что работа не доделана.



