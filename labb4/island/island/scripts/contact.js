$(document).ready(function () {
   
    //jQuery('action1').on('click', function (e) { document.getElementById('happy').style.visibility = 'visible'; e.preventDefault();});
    //jQuery('action2').on('click', function (e) { document.getElementById('neutral').style.visibility = 'visible'; e.preventDefault(); });
    //jQuery('action3').on('click', function (e) { document.getElementById('sad').style.visibility = 'visible'; e.preventDefault(); });

    //$('#choicelist').on('click', result);

    $('#action1').click(function (e) {
        document.getElementById('happy').style.visibility = 'visible';
        document.getElementById('neutral').style.visibility = 'hidden';
        document.getElementById('sad').style.visibility = 'hidden';
        e.preventDefault();
    });
    $('#action2').click(function (e) {
        document.getElementById('neutral').style.visibility = 'visible';
        document.getElementById('happy').style.visibility = 'hidden';
        document.getElementById('sad').style.visibility = 'hidden';
        e.preventDefault();
    });
    $('#action3').click(function (e) {
        document.getElementById('sad').style.visibility = 'visible';
        document.getElementById('happy').style.visibility = 'hidden';
        document.getElementById('neutral').style.visibility = 'hidden';
        e.preventDefault();
    });
});

//function result() {
    //$('#datebox').val($(this).text());
    //$('#choicelist').val($(this).text())
    //var a = document.getElementById("#choicelist");

    //document.getElementById(a.options[a.selectedIndex].value).style.visibility = 'visible';
   
//}
