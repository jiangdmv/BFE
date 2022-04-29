# 24. fluid font size

### Problem

https://bigfrontend.dev/css/fluid-font-size

#

### Problem Description

Create a heading of fluid font size.

1. if viewport width is smaller than 200px, use 16px
2. if viewport width is bigger than 400px, use 32px
3. otherwise font-size is linearly scaled. For example if viewport is 300px = (200px + 400px) / 2, then font-size is 24px = (16px + 32px) / 2

```html
<h1 class="title">BFE.dev</h1>
```

#

### Solution clamp

https://developer.mozilla.org/en-US/docs/Web/CSS/clamp

```css
.title {
  text-align: center;
  font-size: clamp(16px, calc(0.08 * 100vw), 32px);
}
```
