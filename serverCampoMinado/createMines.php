<?php

function createMines(){
    $bombs=100;
    $empty=1100;
    $arrayBombs = array_fill( 0, $bombs, 1);
    $emptySquare = array_fill( 0, $empty, 0);
    $concatedArray = array_merge($arrayBombs,$emptySquare);
    shuffle($concatedArray);
    return $concatedArray;

}









?>