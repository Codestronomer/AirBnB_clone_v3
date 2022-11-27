$('document').ready(() => {

        $.ajax('http://0.0.0.0:5001/api/v1/status').done(function (data) {
                if (data.status === 'OK') {
                  $('#api_status').addClass('available');
                } else {
                  $('#api_status').removeClass('available');
                }
              });

        var amenities = {};
        $('document').on('change', "input[type='checkbox']", () => {
                if (this.checked) {
                        amenities[$(this).data('data-id')] = $(this).data('name');
                } else {
                        delete amenities[$(this).data('data-id')];
                }
                if (Object.keys(amenities).length > 0) {
                        $('.amenities > h4').text(Object.values(amenities).join(', '));
                }
                else {
                        $('.amenities > h4').html('&nbsp;');
                }
        });
});