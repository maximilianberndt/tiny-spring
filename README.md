# tiny-spring

Tiny spring implementation in 25 lines of javascript

## TODO
- Check if current is not at target yet and skip interpolation
- Enable using objects as paramter to also being able to use Three Vectors

## Basic Usage

```
// Create spring with default parameters
const spring = createSpring(0)

const tick = () => {
  // Update spring every tick
  spring.update()

  // Get value
  console.log(spring.get())

  window.requestAnimationFrame(tick)	
}
tick()

window.addEventListner("mousemove", (e) => {
  // Set target value
  spring.set(e.clientX)
})
```

## Custom paramters

```
const spring = createSpring(0, {
  stiffness: 0.2, 
  damping: 1, 
  mass: 2, 
})
```
