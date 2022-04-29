# 21. Holy Grail Layout

### Problem

https://bigfrontend.dev/css/Holy-Grail-Layout

#

### Problem Description

Implement Holy Grail Layout which includes header, left sidebar, body, right sidebar and footer.

it should be sticky footer
left sidebar and right sidebar should be fixed width of 100px.
styles of color .etc are already set for you, only layout related CSS code is needed.

```html
<div class="container">
  <header class="header">header</header>
  <div class="left-sidebar">left sidebar</div>
  <div class="body">body</div>
  <div class="right-sidebar">right sidebar</div>
  <footer class="footer">footer</footer>
</div>
```

Please center the inner div vertically without changing their dimensions and colors.

**1.footer sticks to bottom if content is short**

![result 1](r1.png)

**2.otherwise footer is displayed as normal**

![result 2](r2.png)

**3.event be pushed out from viewport if enough content**

![result 2](r3.png)

#

### Solution

```css
.header,
.footer {
  width: 100%;
  height: 50px;
}

.body {
  flex: 1 1 auto;
  min-height: calc(100vh - 100px);
}

.left-sidebar,
.right-sidebar {
  width: 100px;
}

.container {
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
}
```
