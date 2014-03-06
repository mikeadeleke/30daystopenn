$(document).ready(function() {
  $.ajax({
        dataType: 'jsonp',
        url: 'http://api.klout.com/v2/identity.json/twitter?screenName=MikeAdeleke&key=3xqvjzmjz8876tetq2rahm5v',
        success: function (data) {
            $.ajax({
                dataType: 'jsonp',
                url: "http://api.klout.com/v2/79938903459509669/3xqvjzmjz8876tetq2rahm5v/influence",
                success: function (data) {
                    $('#influence').html('<a href="">' + data.myInfluencer + '</a>');
                }
            });
            console.log(data);
            console.log(data.score);
        }
    });
});
