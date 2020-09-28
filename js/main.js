$(document).ready(function(){

    $('#accordion').accordion({
        collapsible: true,
        icons: false,
        heightStyle: "content"
    });

    
    setInterval(() => {
        var date = new Date()
        $('#date').html($.datepicker.formatDate('dd/mm/yy', date)+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds());
    }, 1000);


    $('#last-name1').keyup(function () {
        $('#firm').val($('#names').val().toUpperCase()+' '+$(this).val().toUpperCase()+' '+$('#last-name2').val().toUpperCase());
    });

    $('#last-name2').keyup(function () {
        $('#firm').val($('#names').val().toUpperCase()+' '+$('#last-name1').val().toUpperCase()+' '+$(this).val().toUpperCase());
    });

    $('#names').keyup(function () {
        $('#firm').val($(this).val().toUpperCase()+' '+$('#last-name1').val().toUpperCase()+' '+$('#last-name2').val().toUpperCase());
    });
});