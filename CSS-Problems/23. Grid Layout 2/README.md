# 23. Grid Layout 2

### Problem

https://bigfrontend.dev/css/grid-layout-2

#

### Problem Description

Layout the items in a grid so that:

1. items have minium width of 100px and fill up the space
2. place as many items in a row as possible
3. gap between items is 10px

```html
<div class="container">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```

### Solution

```css
.item {
  height: 50px;
  background-color: #7aa4f0;
}

.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, auto));
  gap: 10px;
}
```
