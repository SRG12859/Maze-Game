kaboom();

loadBean();

const player = add([
    sprite("bean"),  // renders as a sprite
    pos(120, 80),    // position in world
    area(),          // has a collider
    body(),          // responds to physics and gravity
]);
keyPress("space", () => {
    // .jump() is provided by the body() component
    player.jump();
});