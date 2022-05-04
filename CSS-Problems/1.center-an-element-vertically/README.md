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

1. display grid place-items

https://developer.mozilla.org/en-US/docs/Web/CSS/place-items

The CSS place-items shorthand property allows you to align items along both the block and inline directions at once (i.e. the align-items and justify-items properties) in a relevant layout system such as Grid or Flexbox. If the second value is not set, the first value is also used for it.

```css
.outer {
  width: 100%;
  height: 100%;
  background-color: #efefef;
  display: grid;
  place-items: center;
}

.inner {
  width: 100px;
  height: 100px;
  background-color: #f44336;
}
```

2. outer display flex

https://css-tricks.com/snippets/css/a-guide-to-flexbox/

Flex has vertical or horizental directions.

// transform: translate so it moves back 50% of its height and width

justify-content: center: items are centered along the line

align-items: center: items are centered in the cross-axis

```css
.outer {
  width: 100%;
  height: 100%;
  background-color: #efefef;
  /* your code here */
  display: flex;
  justify-content: center;
  align-items: center;
}

.inner {
  width: 100px;
  height: 100px;
  background-color: #f44336;
  /* your code here */
}
```

3. position

// position relative and absolute
// transform: translate so it moves back 50% of its height and width

```css
.outer {
  width: 100%;
  height: 100%;
  background-color: #efefef;
  /* your code here */
  position: relative;
}

.inner {
  width: 100px;
  height: 100px;
  background-color: #f44336;
  /* your code here */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```
