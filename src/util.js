var get_data = function(request, x){
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    fetch(proxyUrl + request)
    .then(
    function(response) {
        if (response.status !== 200) {
            console.log('Error: ' +
            response.status);
            return;
        }
        response.json().then(function(data) {
            x.gotData(data);
            return data;
        });
    }).catch(function(err) {
        console.log('Error', err);
    });
}

exports.get_data = get_data;
