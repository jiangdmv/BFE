# 1. center an element vertically

### Problem

https://bigfrontend.dev/css/center-an-element-vertically

#

### Problem Description

This is a very basic question and good to be the first CSS problem on BFE.dev.

Suppose you have an HTML structure as below

```html
<div class="outer">
  <div class="inner"></div>
</div>
```

Please center the inner div vertically without changing their dimensions and colors.

**1. Should be centered vertically**

![result 1](result-1.png)

**2. even if container size changes**

![result 2](result-2.png)

#

### Solution

#### 1. Absolute positioning and margin: auto

```css
.container {
  position: relative;
  width: 300px;
  height: 300px;
  border: 3px solid skyblue;
}

.element {
  position: absolute;
  background: pink;
  width: 100px;
  height: 100px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
```

#### 2. The classic top: 50%, translateY(-50%)

```css
.container {
  position: relative;
  width: 300px;
  height: 300px;
  border: 3px solid skyblue;
}

.element {
  position: absolute;
  background: pink;
  width: 100px;
  height: 100px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
```

#### 3. Using margin: auto on a flex item

```css
.container {
  display: flex;
  width: 300px;
  height: 300px;
  border: 3px solid skyblue;
}

.element {
  background: pink;
  width: 100px;
  height: 100px;
  margin: auto;
}
```

#### 4. Align on the flex container

```css
.container {
  display: flex;
  width: 300px;
  height: 300px;
  border: 3px solid skyblue;
  justify-content: center;
  align-items: center;
}

.element {
  background: pink;
  width: 100px;
  height: 100px;
}
```

#### 5. Align on the flex item

```css
.container {
  display: flex;
  width: 300px;
  height: 300px;
  border: 3px solid skyblue;
}

.element {
  background: pink;
  width: 100px;
  height: 100px;
  align-self: center;
  margin: auto;
}
```

#### 6. Align on the grid container

```css
.container {
  display: flex;
  width: 300px;
  height: 300px;
  border: 3px solid skyblue;
}

.element {
  background: pink;
  width: 100px;
  height: 100px;
  align-self: center;
  margin: auto;
}
```

#### 7. Align on the grid item

```css
.container {
  display: grid;
  width: 300px;
  height: 300px;
  border: 3px solid skyblue;
}

.element {
  background: pink;
  width: 100px;
  height: 100px;
  justify-self: center;
  align-self: center;
}
```

<img src="css_center1.png">
<a href="https://blog.logrocket.com/13-ways-vertically-center-html-elements-css/">13 ways to vertically center html elements with css</a>
