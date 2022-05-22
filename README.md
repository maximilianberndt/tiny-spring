# tiny-spring

Tiny spring implementation in 27 lines of javascript

Basic Usage
```
// Create spring with default parameters
const spring = createSpring(0)

const tick = () =>{
	// Update spring every tick
	spring.update()

	// Get value
	console.log(spring.get())

	window.requestAnimationFrame(tick)	
}
tick()

// Set target value
window.addEventListner("mousemove", (e) => {
	spring.set(e.clientX)
})
```

Create with custom paramters
```
const spring = createSpring(0, {
	stiffness: 0.2, 
	damping: 1, 
	mass = 2, 
})
```