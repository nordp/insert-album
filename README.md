# insert-album
My first SPA in the shape of an album viewer, as part of a coding test.

### Screenshot
<p align="center"><img src="/res/screenshot.png"></p>

## Backend

Backend is build as a simple express api which spits out JSON-objects that are hard coded into the backend.

#### Available endpoints
* [`/albums/`](//insert-album.appspot.com/albums/) - Retrieves all albums
* [`/albums/:albumId/`](//insert-album.appspot.com/albums/1/) - Retrieves album with albumId
* [`/albums/:albumId/photos/`](//insert-album.appspot.com/albums/1/photos) - Retrieves all photos in album with albumId
* [`/photos/`](//insert-album.appspot.com/photos/) - Retrieves all photos
* [`/photos/:photoId/`](//insert-album.appspot.com/photos/1/) - Retrieves photo with photoId

## Frontend

Frontend is currently a single page [`index.html`](/frontend/public/index.html) with inline vanilla javascript and css.
