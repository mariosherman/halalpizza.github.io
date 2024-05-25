document.addEventListener('DOMContentLoaded', function() {
    Fancybox.bind('[data-fancybox="gallery"]', {
        caption: function(fancybox, carousel, slide) {
            return slide.$trigger.dataset.caption || slide.$thumb.alt;
        }
    });
});
