## Day 10

#### video

* currentTime, duration, paused(no playing)
* play(), pause(),
* event: play, pause, timeupdate

```javascript
const method = video.paused ? 'play' : 'pause';
    video[method]();
```



```javascript
progress.addEventListener("mousemove", e => mouseDown && scrub(e));
progress.addEventListener("mousedown", () => mouseDown = true);
progress.addEventListener("mouseup", () => mouseDown = false);
```



To get the **width** of a element, use `offsetWidth`. `ELEMENT.style.width` may not work, because you may not set css width for that element.

#### follow up

1. implement full screen function

   `video.requestFullScreen()`

   event: fullscreenchange