$(document).ready(function(){

  $("#media").click(function() {
    let nota1=$("#nota1").val();
    let nota2=$("#nota2").val();
    console.log(`nota1=${nota1} e nota2=${nota2}`); 

    let media = ( parseFloat(nota1) + parseFloat(nota2) ) /2;

    $("#resultado").html(`<strong>Media=${media}</strong>`);
  });

   $("#soma").click(function() {
    let nota1=$("#nota1").val();
    let nota2=$("#nota2").val();
    console.log(`nota1=${nota1} e nota2=${nota2}`); 

    let media = ( parseFloat(nota1) + parseFloat(nota2) ) ;

    $("#resultado").html(`<strong>Media=${media}</strong>`);
  });

  $("#subtracao").click(function() {
    let nota1=$("#nota1").val();
    let nota2=$("#nota2").val();
    console.log(`nota1=${nota1} e nota2=${nota2}`); 

    let media = ( parseFloat(nota1) - parseFloat(nota2) ) ;

    $("#resultado").html(`<strong>Media=${media}</strong>`);
  });

  $("#multiplicacao").click(function() {
    let nota1=$("#nota1").val();
    let nota2=$("#nota2").val();
    console.log(`nota1=${nota1} e nota2=${nota2}`); 

    let media = ( parseFloat(nota1) * parseFloat(nota2) ) ;

    $("#resultado").html(`<strong>Media=${media}</strong>`);
  });

  $("#divisao").click(function() {
    let nota1=$("#nota1").val();
    let nota2=$("#nota2").val();
    console.log(`nota1=${nota1} e nota2=${nota2}`); 

    let media = ( parseFloat(nota1) / parseFloat(nota2) ) ;

    $("#resultado").html(`<strong>Media=${media}</strong>`);
  });
  

  
});