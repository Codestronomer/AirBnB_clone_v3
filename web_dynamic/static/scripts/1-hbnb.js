$('document').ready(() => {
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