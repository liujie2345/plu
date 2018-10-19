<?php
    header("Access-Control-Allow-Origin: *");
    $word=$_GET['word'];
    $result = file_get_contents('https://api.shanbay.com/bdc/search/?word='.$word);
    die($result);
?>