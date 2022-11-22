<!DOCTYPE html>  
<html>  
<body> 
    
<?php

$inputArray = array(2,3,1,2,3);   
$temp = array();


for($i = 0; $i < count($inputArray); $i++) {  
    for($j = $i + 1; $j < count($inputArray); $j++) {  
        if($inputArray[$i] == $inputArray[$j]) {
          
          $check = true;
     foreach ($temp as $value) {
        if($value == $inputArray[$j] ){
       $check = false;
        }
   }
            if($check){
            print($inputArray[$j] . "<br>");  
            
         array_push($temp,$inputArray[$j]);
         break;
}
}
    }  
    
    
}  


?>
</body>  
</html>


