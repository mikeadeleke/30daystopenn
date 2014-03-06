$(document).ready(function() {
  $.ajax({
        dataType: 'jsonp',
        url: 'http://api.klout.com/v2/identity.json/twitter?screenName=MikeAdeleke&key=3xqvjzmjz8876tetq2rahm5v',
        success: function (data) {
            $.ajax({
                dataType: 'jsonp',
                url: 'http://api.klout.com/v2/user.json/' + data.id + '/influence?key=3xqvjzmjz8876tetq2rahm5v',
                success: function (subData) {
                    $('#influence').append(subData.influence);
                    console.log(subData.myInfluencees[0]);
                    console.log(subData.influence);
                }
            });
        }
    });
});
