$('document').ready(() => {
        var amenities = {};
        $('document').on('change', "input[type='checkbox']", () => {
                if (this.checked) {
                        amenities[$(this).data('data-id')] = $(this).data('name');
                } else {
                        delete amenities[$(this).data('data-id')];
                }
        })
})