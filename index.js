const createSpring = (
  start,
  { stiffness = 0.1, damping = 0.8, mass = 1 } = {}
) => {
  let current = start;
  let previous = start;
  let target = start;

  const update = () => {
    const velocity = current - previous;
    const acceleration =
      ((target - current) * stiffness - velocity * damping) / mass;

    previous = current;
    current += velocity + acceleration;
  };

  return {
    update,
    config: { stiffness, damping, mass }, 
    get: () => current,
    set: (newTarget) => {
      target = newTarget;
    },
  };
};

export default createSpring;
