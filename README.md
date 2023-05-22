## React Image Carousel Take Home Task

Design an image carousel Component in React.

```

-------------------------------------------------
-                                               -
-                                               -
-  <                <Image>                  >  -
-                                               -
- - - - - - - - - - - - - - - - - - - - - - - - -
-     |     |     |     |     |     |     |     |
-------------------------------------------------

```

Must Have features:

1. a preview menu - the image currently loaded should be highlighed and be visible in the preview bar.
2. prev / next button
3. Infinite scroll - after last image has been loaded first image should be displayed
4. Error handling in case of image load fails and display a placeholder image
5. maintain aspect ratio of the images
6. auto scroll images after every N second

Good to have features in decreasing order of priority:

1. Only the prev and next two images should be loaded in the DOM
2. Add scroll animations
3. add keyboard navigations

/\* Image urls
const urls = [
"https://source.unsplash.com/random/200x200?sig=1",
"https://source.unsplash.com/random/200x200?sig=2",
"https://source.unsplash.com/random/200x200?sig=3",
"https://source.unsplash.com/random/200x200?sig=4",
"https://source.unsplash.com/random/200x200?sig=5",
"https://source.unsplash.com/random/200x200?sig=6",
"https://source.unsplash.com/random/200x200?sig=7",
"https://source.unsplash.com/random/200x200?sig=8",
"https://source.unsplash.com/random/200x200?sig=9",
"https://source.unsplash.com/random/200x200?sig=10"
];

\*/
