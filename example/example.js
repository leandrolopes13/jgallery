$(document).ready(function () {
    $('.gallery a').jgallery({
        zoom: true
    }).on('jgallery.resize', function (e) {
        console.log('jgallery.resize');
    }).on('jgallery.open', function (e) {
        console.log('jgallery.open');
    }).on('jgallery.loaded', function (e) {
        console.log('jgallery.loaded');
    }).on('jgallery.close', function (e) {
        console.log('jgallery.close');
    }).on('jgallery.change', function (e) {
        console.log('jgallery.change');
    });
});