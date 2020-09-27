$(document).ready(function(){

    $('#accordion').accordion({
        collapsible: true,
        icons: false,
        heightStyle: "content"
    });

    
    setInterval(() => {
        var date = new Date()
        //$('#date').html(date);
        //$('#date').html(date.getDate()+'/'+ (date.getMonth()+1)+'/'+ date.getFullYear()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds());
        $('#date').html($.datepicker.formatDate('dd/mm/yy', date)+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds());

    }, 1000);
});