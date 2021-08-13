import Loader from "../../src/components/loaders/pulse-loader";

# pulse loader

## 效果

<Loader />

## 代码

```html
<div class="ripple-loader">
</div>
```

```css
.ripple-loader {
  position: relative;
  height: 64px;
  width: 64px;
}

.ripple-loader::after,
.ripple-loader::before {
  content: '';
  position: absolute;
  border-radius: 50%;
  border: 4px solid #454ADE;
  animation: ripple-loader 1s ease-out infinite;
}

.ripple-loader::after{
  animation-delay: -0.5s;
}

@keyframes ripple-loader {
  0% {
    top: 32px;
    left: 32px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    width: 64px;
    height: 64px;
    opacity: 0;
  }
}
```