// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`

class SpaceShip {
    constructor(topSpeed, name) {
        this.name = name;
        this.topSpeed = topSpeed;
    }
    accelerate() {
        const { name, topSpeed } = this;
        console.log(`${name} moving to ${topSpeed}`);
    };
};

// 2. Call the constructor with a couple ships,
// and call accelerate on both of them.

const MilleniumFalcon = new SpaceShip(20, 'Millenium Falcon');
const StarDestroyer = new SpaceShip(120, 'Star Destroyer');

const allShips = [MilleniumFalcon, StarDestroyer];
allShips.forEach((ship) => {
    ship.accelerate();
});
// MilleniumFalcon.accelerate();
// StarDestroyer.accelerate();

