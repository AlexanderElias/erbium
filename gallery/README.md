# Gallery
Simple image gallery.

## Features
- Mobile touch capable.
- Multiple galleries on the same page.

## Markup
```HTML
<div class="gallery 1">
	<img src="image.png"/>
	<img src="image.png"/>
	<img src="image.png"/>
</div>

<hr>

<div class="gallery 2"></div>
```

## API

### erbium.gallery.create({ target: Element, images: Array , schema: Object });

#### Parameters
- `target` Html Element or query selector String **Required**
- `images` Html Img array or url/path String array
	- If `null` then `erbium.gallery.create` will use the `gallery` element children.
	- Viewer images are loaded upon image click. Basically lazy load but smarter.
- `schema`
<!-- - `thumbnails` Html Image array or url/path String array
	- Only use if `items` are provided.
	- Available so that the thumbnails or gallery preview images can be different sizes than the full size viewer images/items. -->
