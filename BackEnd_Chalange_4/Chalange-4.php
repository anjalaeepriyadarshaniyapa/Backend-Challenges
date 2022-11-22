<?php

$inputArray = ['Insurance.txt'=>'Company A','Letter.docx' => 'Company A','Contract.docx' => 'Company B'];
$expectedArray =  ['Company A'=>['Insurance.txt','Letter.docx'],'Company B' => ['Contract.docx']];
$outputArray = [];
  
  foreach($inputArray as $key => $value) {
    
   foreach($inputArray as $key2 => $value2) {
   
   if($key == $key2 && $value == $value2 ){
    
    $check = true;
    foreach($outputArray as $key3 => $value2){
      if($key3 == $value )
        $check = false;
    }
    
    if($check)
     $outputArray[$value] = [$key];
   
     continue;
     
    
   }
   else {
      
      if($value == $value2){
       
        if(!in_array($key2, $outputArray[$value]))        
            array_push($outputArray[$value],$key2);
      
      }
       
      
    }
}
}
  
echo 'Initial Input ';
echo '<pre>'; print_r($inputArray); echo '</pre>';

 echo 'Processed Output ';
 echo '<pre>'; print_r($outputArray); echo '</pre>';
 
 echo 'Expected Output ';
 echo '<pre>'; print_r($expectedArray); echo '</pre>';

 
?>