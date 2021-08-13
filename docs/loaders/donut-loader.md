import Loader from "../../src/components/loaders/donut-loader";

# donut loader

## 效果

<Loader />

## 代码

```html
<div class="donut">
</div>
```

```css
.donut {
  display: inline-block;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #7983ff;
  animation: spnning 1.2s infinite linear;
}

@keyframes spnning {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```