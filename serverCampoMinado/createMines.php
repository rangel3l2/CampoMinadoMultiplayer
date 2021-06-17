<?php

function createMines(){
    $bombs=100;
    $empty=1100;
    $arrayBombs = array_fill( 0, $bombs, true);
    $emptySquare = array_fill( 0, $empty, false);
    $concatedArray = array_merge($arrayBombs,$emptySquare);
    shuffle($concatedArray);
    return $concatedArray;

}









?>