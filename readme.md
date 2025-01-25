# JGallery

A lightweight and responsive JavaScript image and videos(youtube, vimeo and mp4) gallery library.

## Sponsor

Publicidade BH - Apps, Sistemas e sites - https://www.publicidadebh.com.br/

## Features

- 🖼️ Responsive image gallery
- 🚀 Lightweight and fast
- 🎨 Customizable styling
- 📱 Mobile-friendly
- 🔍 Image zoom support
- ⌨️ Keyboard navigation
- 🎯 Easy to integrate

## Installation

```bash
npm install jgallery
```

## Usage

```html
<!-- Include the CSS -->
<link rel="stylesheet" href="jgallery.min.css">

<!-- Create your gallery container -->
<div class="gallery">
			<a href="example/image1.jpg" class="jgallery-item" data-type="image">
				<img src="example/image1.jpg">
			</a>
			<a href="example/image2.jpg" class="jgallery-item" data-type="image">
				<img src="example/image2.jpg">
			</a>
			<a href="#" class="jgallery-item" data-type="video">
				<video poster="example/poster.jpg">
					<source src="example/video1.mp4" type="video/mp4">
				</video>
			</a>
			<a href="https://vimeo.com/76979871" class="jgallery-item" data-type="video">
				<img src="https://i.vimeocdn.com/video/452001751-8216e0571c251a09d7a8387550942d89f7f86f6398f8ed886e639b0dd50d3c90-d_260x163">
			</a>
			<a href="https://www.youtube.com/watch?v=4FUnXaq_VWk" class="jgallery-item" data-type="video">
				<img src="https://i3.ytimg.com/vi/4FUnXaq_VWk/hqdefault.jpg">
			</a>
		</div>

<!-- Include the JavaScript -->
<script src="jgallery.mni.js"></script>
<script>
    // Initialize the gallery
    $('.gallery a').jgallery({
        zoom: true
    });
</script>
```

## Configuration

```javascript
$('.gallery a').jgallery({
        zoom: true
    });
```

## API Reference

## Events
# Resize
is fired when the content dimensions are recalculated
```javascript
.on('jgallery.resize', function (e) {
	console.log('jgallery.resize');
})
```
# Open
is fired when the open the lightbox
```javascript
.on('jgallery.open', function (e) {
	console.log('jgallery.open');
})
```
# Change
is fired when the content is changed
```javascript
.on('jgallery.change', function (e) {
	console.log('jgallery.change');
})
```
# Loaded
is fired when the content is fully loaded
```javascript
.on('jgallery.loaded', function (e) {
	console.log('jgallery.loaded');
})
```
# Close
is fired when the lightbox is closed
```javascript
.on('jgallery.change', function (e) {
	console.log('jgallery.change');
})
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Leandro Lopes - leandrolopes.java@gmail.com - [GitHub Profile](https://github.com/leandrolopes13)

## Acknowledgments

- Thanks to all contributors who have helped make JGallery better
- Inspired by various gallery libraries in the JavaScript ecosystem