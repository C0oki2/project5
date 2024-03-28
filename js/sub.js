
function book() {

    let basic_book = Number(document.getElementById("total").defaultValue);
    let opts = document.querySelectorAll('.option');

    for (let opt of opts) {
        if (opt.checked) basic_book += Number(opt.value);}

    document.getElementById("total").value = basic_book;}

$(function(){
    $(".check").change(function(e){
        if(e.target.checked==true){
            $("#set_show").show();
        }else{
            $("#set_show").hide();
        };
        
    });
});