This is a demo to reproduce a memory leak when calling `makeImageSnapshot` method of the Skia CanvasKit library inside of a nodejs app.

To run this example:

```sh
npm install
```

```sh
npm run build
```

```sh
npm start
```

The example creates a new surface and calls `makeImageSnapshot` on it.

Then it immediately calls the delete method on the image and the surface.

This is repeated infinitely every second while logging the process id and memory usage of the program.

Expected behaivour would be that the memory usage would not increase as image & surface get deleted.

Actual behaivour is that the memory usage rises with each call of the `makeImageSnapshot` method.