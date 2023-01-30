const canvasAsteroids = document.getElementById("canvas1");
const ctx = canvasAsteroids.getContext("2d");
document.getElementById("butonStop").hidden = true;
document.getElementById("formSubmitScore").hidden = true;


document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;
let keyZPressed = false;
let keyCPressed = false;
let keyXPressed = false;

function keyDownHandler() {
    if (event.keyCode == 39) { // right key
        rightPressed = true;

    }
    if (event.keyCode == 37) { // left key
        leftPressed = true;

    }
    if (event.keyCode == 38) { // up key
        upPressed = true;

    }
    if (event.keyCode == 40) { // down key
        downPressed = true;

    }
    if (event.keyCode == 90) { // Z key
        keyZPressed = true;

    }
    if (event.keyCode == 67) { // C key
        keyCPressed = true;

    }
    if (event.keyCode == 88) { // X key
        keyXPressed = true;

    }
}

function keyUpHandler() {
    if (event.keyCode == 39) { // right key
        rightPressed = false;

    }
    if (event.keyCode == 37) { // left key
        leftPressed = false;

    }
    if (event.keyCode == 38) { // up key
        upPressed = false;

    }
    if (event.keyCode == 40) { // down key
        downPressed = false;

    }
    if (event.keyCode == 90) { // Z key
        keyZPressed = false;

    }
    if (event.keyCode == 67) { // C key
        keyCPressed = false;

    }
    if (event.keyCode == 88) { // X key
        keyXPressed = false;

    }
}

class Spaceship {
    constructor() {
        this.x = canvasAsteroids.offsetWidth / 2;
        this.y = canvasAsteroids.offsetHeight / 2;
        this.angle = 0;
        this.size = 55;
        this.xSpeed = 10;
        this.ySpeed = 10;

    }

    drawSpaceship() {
        ctx.beginPath();
        let auxAngle = this.angle;
        auxAngle = auxAngle || 0;
        ctx.moveTo(this.x + this.size * Math.sin(auxAngle), this.y - this.size * Math.cos(auxAngle));
        let delta = 2 * Math.PI / 3;
        for (let i = 1; i < 3; i++) {
            auxAngle += delta;
            ctx.lineTo(this.x + this.size * Math.sin(auxAngle) * 0.5, this.y - this.size * Math.cos(auxAngle) * 0.5);
        }
        ctx.fillStyle = "black";
        ctx.fill();

    }

    rotate(rotateLeftKey, rotateRightKey) {
        if (rotateLeftKey == true) {
            this.angle -= 0.1;
        }
        if (rotateRightKey == true) {
            this.angle += 0.1;
        }

        if (this.angle > 1.55 * 4 || this.angle < -1.55 * 4) {
            this.angle = 0;
        }
    }

    moveSpaceship(moveRightKey, moveLeftKey, moveUpKey, moveDownKey) {
        if (moveRightKey == true) {
            if (this.x < canvasAsteroids.offsetWidth)
                this.x += this.xSpeed;
        }
        if (moveLeftKey == true) {
            if (this.x > 0)
                this.x -= this.xSpeed;
        }
        if (moveUpKey == true) {
            if (this.y > 0)
                this.y -= this.ySpeed = 10;;
        }
        if (moveDownKey == true) {
            if (this.y < canvasAsteroids.offsetHeight)
                this.y += this.ySpeed = 10;;
        }
    }

}

class Rocket {
    constructor(x, y, angle) {
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 35;
        this.dx = 10;
        this.dy = 10;
        this.angle = angle;
    }



    draw() {
        if (this.angle == 0) {
            this.y -= this.dy;
        }
        else if (this.angle < 0 && this.angle > -1.55 / 3) {
            this.y -= this.dy;
        }
        else if (this.angle < -1.55 / 3 && this.angle > -1.55 * 2 / 3) {
            this.y -= this.dy;
            this.x -= this.dx;
        }
        else if (this.angle < -1.55 * 2 / 3 && this.angle > -1.55) {
            this.x -= this.dx;
            this.height = 10;
            this.width = 35;
        }
        else if (this.angle < -1.55 && this.angle > -1.55 - 1.55 / 3) {
            this.x -= this.dx;
            this.height = 10;
            this.width = 35;
        }
        else if (this.angle < -1.55 - 1.55 / 3 && this.angle > -1.55 - 1.55 * 2 / 3) {
            this.y += this.dy;
            this.x -= this.dx;
        }
        else if (this.angle < -1.55 - 1.55 * 2 / 3 && this.angle > -1.55 * 2) {
            this.y += this.dy;
        }
        else if (this.angle < -1.55 * 2 && this.angle > -1.55 * 2 - 1.55 / 3) {
            this.y += this.dy;
        }
        else if (this.angle < -1.55 * 2 - 1.55 / 3 && this.angle > -1.55 * 2 - 1.55 * 2 / 3) {
            this.y += this.dy;
            this.x += this.dx;
        }
        else if (this.angle < -1.55 * 2 * 2 / 3 && this.angle > -1.55 * 3) {
            this.x += this.dx;
            this.height = 10;
            this.width = 35;
        }
        else if (this.angle < -1.55 * 3 && this.angle > -1.55 * 3 - 1.55 / 3) {
            this.x += this.dx;
            this.height = 10;
            this.width = 35;
        }
        else if (this.angle < -1.55 * 3 - 1.55 / 3 && this.angle > -1.55 * 3 - 1.55 * 2 / 3) {
            this.y -= this.dy;
            this.x += this.dx;
        }
        else if (this.angle < -1.55 * 3 - 1.55 * 2 / 3 && this.angle > -1.55 * 4) {
            this.y -= this.dy;
        }
        else if (this.angle > 0 && this.angle < 1.55 / 3) {
            this.y -= this.dy;
        }
        else if (this.angle > 1.55 / 3 && this.angle < 1.55 * 2 / 3) {
            this.y -= this.dy;
            this.x += this.dx;
        }
        else if (this.angle > 1.55 * 2 / 3 && this.angle < 1.55) {
            this.x += this.dx;
            this.height = 10;
            this.width = 35;
        }
        else if (this.angle > 1.55 && this.angle < 1.55 + 1.55 / 3) {
            this.x += this.dx;
            this.height = 10;
            this.width = 35;
        }
        else if (this.angle > 1.55 + 1.55 / 3 && this.angle < 1.55 + 1.55 * 2 / 3) {
            this.y += this.dy;
            this.x += this.dx;
        }
        else if (this.angle > 1.55 + 1.55 * 2 / 3 && this.angle < 1.55 * 2) {
            this.y += this.dy;
        }
        else if (this.angle > 1.55 * 2 && this.angle < 1.55 * 2 + 1.55 / 3) {
            this.y += this.dy;
        }
        else if (this.angle > 1.55 * 2 + 1.55 / 3 && this.angle < 1.55 * 2 + 1.55 * 2 / 3) {
            this.y += this.dy;
            this.x -= this.dx;
        }
        else if (this.angle > 1.55 * 2 * 2 / 3 && this.angle < 1.55 * 3) {
            this.x -= this.dx;
            this.height = 10;
            this.width = 35;
        }
        else if (this.angle > 1.55 * 3 && this.angle < 1.55 * 3 + 1.55 / 3) {
            this.x -= this.dx;
            this.height = 10;
            this.width = 35;
        }
        else if (this.angle > 1.55 * 3 + 1.55 / 3 && this.angle < 1.55 * 3 + 1.55 * 2 / 3) {
            this.y -= this.dy;
            this.x -= this.dx;
        }
        else if (this.angle > 1.55 * 3 + 1.55 * 2 / 3 && this.angle < 1.55 * 4) {
            this.y -= this.dy;
        }

        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

function checkRockets() {
    for (let i = 0; i < rockets.length; i++) {
        rockets[i].draw();

        if (rockets[i].y < 0 || rockets[i].x < 0 || rockets[i].y > canvasAsteroids.offsetHeight || rockets[i].x > canvasAsteroids.offsetWidth) {
            rockets.splice(i, 1);
        }
    }
}

function prepareToShoot(shootKey) {
    if (shootKey == true) {
        playerWantsToShoot = true;
    }
}

function shoot(shootKey, intervalForCounter, spaceship) {
    if (counterIntervalRocket == intervalForCounter) {
        if (shootKey == false) {
            if (playerWantsToShoot === true) {
                if (secondsWithXPressed >= 0 && secondsWithXPressed < 2) {
                    ctx.beginPath();
                    rockets.push(new Rocket(spaceship.x + spaceship.size * Math.sin(spaceship.angle), spaceship.y - spaceship.size * Math.cos(spaceship.angle), spaceship.angle));
                }
                else if (secondsWithXPressed >= 2 && secondsWithXPressed < 4) {
                    ctx.beginPath();
                    rockets.push(new Rocket(spaceship.x + spaceship.size * Math.sin(spaceship.angle), spaceship.y - spaceship.size * Math.cos(spaceship.angle), spaceship.angle));
                    rockets.push(new Rocket(spaceship.x + spaceship.size * Math.sin(spaceship.angle), spaceship.y - spaceship.size * Math.cos(spaceship.angle), spaceship.angle));
                }
                else {
                    ctx.beginPath();
                    rockets.push(new Rocket(spaceship.x + spaceship.size * Math.sin(spaceship.angle), spaceship.y - spaceship.size * Math.cos(spaceship.angle), spaceship.angle));
                    rockets.push(new Rocket(spaceship.x + spaceship.size * Math.sin(spaceship.angle), spaceship.y - spaceship.size * Math.cos(spaceship.angle), spaceship.angle));
                    rockets.push(new Rocket(spaceship.x + spaceship.size * Math.sin(spaceship.angle), spaceship.y - spaceship.size * Math.cos(spaceship.angle), spaceship.angle));
                }
            }
            secondsWithXPressed = 0;
            playerWantsToShoot = false;
        }
        else {
            secondsWithXPressed++;
        }
        counterIntervalRocket = 0;
    }
}

class Asteroid {
    constructor() {
        this.hp = Math.trunc(Math.random() * 4);
        if (this.hp != 4) this.hp++;
        this.size = 50;
        this.generationSide = Math.trunc(Math.random() * 4);
        if (this.generationSide != 4) this.generationSide++;
        if (this.generationSide == 1) // 1 is up
        {
            this.x = Math.random() * canvas1.offsetWidth;
            this.y = 0;
            this.dx = (Math.random() * 4 + 0.5);
            this.dy = (Math.random() * 4 + 0.5);
        }
        else if (this.generationSide == 2) // 2 is down
        {
            this.x = Math.random() * canvas1.offsetWidth;
            this.y = canvas1.offsetHeight;
            this.dx = (Math.random() * 4 + 0.5);
            this.dy = -(Math.random() * 4 + 0.5);
        }
        else if (this.generationSide == 3) // 3 is left
        {
            this.x = 0;
            this.y = Math.random() * canvas1.offsetHeight;
            this.dx = (Math.random() * 4 + 0.5);
            this.dy = (Math.random() * 4 + 0.5);
        }
        else if (this.generationSide == 2) // 4 is right
        {
            this.x = canvas1.offsetWidth;
            this.y = Math.random() * canvas1.offsetHeight;
            this.dx = -(Math.random() * 4 + 0.5);
            this.dy = (Math.random() * 4 + 0.5);
        }

        this.setColorAndSize();

        this.numberOfPoints = this.hp * 50 * (this.hp / 2);

    }

    setColorAndSize() {
        if (this.hp == 1) {
            this.color = "#FF0000";
            this.size = 50;
        }
        else if (this.hp == 2) {
            this.color = "#FF8000";
            this.size = 60;
        }
        else if (this.hp == 3) {
            this.color = "#FFFF66";
            this.size = 70;
        }
        else if (this.hp == 4) {
            this.color = "#00b300";
            this.size = 80;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.font = "30px Arial";
        ctx.fillStyle = "black";
        ctx.fillText(this.hp, this.x, this.y);
    }

    move() {
        this.x += this.dx;
        this.y += this.dy;

    }
}

function checkAsteroidsOutOfBounds() {
    for (let i = 0; i < asteroids.length; i++) {
        if (asteroids[i].y + asteroids[i].size < 0 || asteroids[i].x + asteroids[i].size < 0 ||
            asteroids[i].y - asteroids[i].size > canvasAsteroids.offsetHeight || asteroids[i].x - asteroids[i].size > canvasAsteroids.offsetWidth) {
            asteroids.splice(i, 1);
        }
    }
}

function addAsteroid() {
    if (counterGenerateAsteroidInteval == generateAsteroidInteval) {
        let asteroidCanGenerate = false;
        // while (asteroidCanGenerate === false) {
        //     asteroidCanGenerate = true;
        //     for (let i = 0; i < asteroids.length; i++) {
        //         for (let j = i + 1; j < asteroids.length; j++) {
        //             if (checkAsteroidCollision(asteroids[i], asteroids[j])) {
        //                 asteroidCanGenerate = false;
        //             }
        //         }
        //     }
        // }
        const newAsteroid = new Asteroid();
        asteroids.push(newAsteroid);
        counterGenerateAsteroidInteval = 0;
    }
    else {
        counterGenerateAsteroidInteval++;
    }

}

function asteroidRocket(asteroid, rocket) {
    let testX = asteroid.x;
    let testY = asteroid.y;

    if (asteroid.x < rocket.x) testX = rocket.x;
    else if (asteroid.x > rocket.x + rocket.width) testX = rocket.x + rocket.width;
    if (asteroid.y < rocket.y) testY = rocket.y;
    else if (asteroid.y > rocket.y + rocket.height) testY = rocket.y + rocket.height;

    let distX = asteroid.x - testX;
    let distY = asteroid.y - testY;
    let distance = Math.sqrt((distX * distX) + (distY * distY));

    if (distance <= asteroid.size) {
        return true;
    }
    return false;
}

function rocketAsteroidCollision() {
    for (let i = 0; i < asteroids.length; i++) {
        for (let j = 0; j < rockets.length; j++) {
            if (asteroidRocket(asteroids[i], rockets[j])) {
                asteroids[i].hp--;
                asteroids[i].setColorAndSize();
                rockets.splice(j, 1);
                if (asteroids[i].hp === 0) {
                    playerScore += asteroids[i].numberOfPoints;
                    asteroids.splice(i, 1);
                }
            }
        }
    }
}

function updateScoreAndLifepoints() {
    const scoreLabel = document.getElementById("score");
    scoreLabel.innerHTML = "Score: " + playerScore;

    if (playerScore >= scoreForBonusLife) {
        lifepoints++;
        scoreForBonusLife += Math.round(playerScore * 3);
    }
    const lifepointsLabel = document.getElementById("lifepoints");
    lifepointsLabel.innerHTML = "Lifepoints: " + lifepoints;

    const bonusLifeLabel = document.getElementById("bonusLife");
    bonusLifeLabel.innerHTML = "Score for bonus life: " + scoreForBonusLife;

}

function checkSpaceshipAsteroidCollision(asteroid, spaceship) {


    let distance = Math.sqrt((asteroid.x - spaceship.x) * (asteroid.x - spaceship.x) + (asteroid.y - spaceship.y) * (asteroid.y - spaceship.y));

    if (distance <= asteroid.size) {
        return true;
    }
    return false;
}

function checkAsteroidCollision(asteroid1, asteroid2) {
    var a;

    a = asteroid1.size + asteroid2.size;

    let distance2 = Math.sqrt((asteroid1.x - asteroid2.x) * (asteroid1.x - asteroid2.x) + (asteroid1.y - asteroid2.y) * (asteroid1.y - asteroid2.y));

    if (a > distance2) {
        return true;
    }
    return false;
}



function asteroidSpaceshipCollision() {
    for (let i = 0; i < asteroids.length; i++) {
        if (checkSpaceshipAsteroidCollision(asteroids[i], spaceship)) {
            resetGame();
        }
    }
}

function asteroidsCollision() {
    for (let i = 0; i < asteroids.length; i++) {
        for (let j = i + 1; j < asteroids.length; j++) {
            if (checkAsteroidCollision(asteroids[i], asteroids[j])) {
                asteroids[i].dx = -asteroids[i].dx;
                asteroids[j].dy = -asteroids[j].dy;
            }
        }
    }
}


//spaceship
let spaceship = new Spaceship();

//rockets
let rockets = [];
let counterIntervalRocket = 0;
let secondsWithXPressed = 0;
let playerWantsToShoot = false;

//asteroids
let asteroids = [];
let generateAsteroidInteval = 20 * 1;
let counterGenerateAsteroidInteval = 0;

//player
let playerScore = 0;
let lifepoints = 1;
let scoreForBonusLife = 2000;

function animate() {
    ctx.clearRect(0, 0, canvasAsteroids.offsetWidth, canvasAsteroids.offsetHeight);
    ctx.beginPath();

    //Spaceship
    spaceship.drawSpaceship();
    spaceship.moveSpaceship(rightPressed, leftPressed, upPressed, downPressed);
    spaceship.rotate(keyZPressed, keyCPressed);

    //Rockets
    prepareToShoot(keyXPressed);
    shoot(keyXPressed, 7, spaceship);
    counterIntervalRocket++;
    checkRockets();

    //Asteroids
    addAsteroid();
    asteroids.forEach(asteroid => {
        asteroid.draw();

        asteroid.move();
    });
    checkAsteroidsOutOfBounds();

    //Rocket - Asteroid collision 
    rocketAsteroidCollision();

    //Asteroid - Asteroid collision
    asteroidsCollision();// nu merge

    //Game
    updateScoreAndLifepoints();
    asteroidSpaceshipCollision();



}

let animateInterval = null;

function startGame() {
    pauseGame();
    document.getElementById("butonStart").hidden = true;
    document.getElementById("butonStop").hidden = false;
}

function resetGame() {
    clearInterval(animateInterval);
    ctx.clearRect(0, 0, canvasAsteroids.offsetWidth, canvasAsteroids.offsetHeight);
    asteroids = [];
    lasers = [];
    spaceship = new Spaceship();
    lifepoints--;
    if (lifepoints <= 0) {
        pauseGame();
        document.getElementById("butonStop").hidden = true;
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvasAsteroids.width, canvasAsteroids.height);
        ctx.font = "100px Arial";
        ctx.fillStyle = "red";
        ctx.fillText("GAME OVER!", canvasAsteroids.offsetWidth / 6, canvasAsteroids.offsetHeight / 2);
        document.getElementById("formSubmitScore").hidden = false;



    }
    else {
        animateInterval = setInterval(animate, 25);
    }
}

let paused = true;
function pauseGame() {
    console.log(paused);
    paused = !paused;
    if (paused === true) {
        clearInterval(animateInterval);
    }
    else {
        animateInterval = setInterval(animate, 25);
    }
}

function compare(a, b) {
    if (parseInt(a.value) > parseInt(b.value)) {
        return -1;
    }
    if (parseInt(a.value) < parseInt(b.value)) {
        return 1;
    }
    return 0;
}

function saveYourScore() {
    var name = document.getElementById("name").value;
    name = name.slice(0, 7);
    document.getElementById("formSubmitScore").hidden = true;

    ctx.beginPath();
    ctx.clearRect(0, 0, canvasAsteroids.offsetWidth, canvasAsteroids.offsetHeight);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvasAsteroids.width, canvasAsteroids.height);
    ctx.font = "80px Arial";
    ctx.fillStyle = "red";
    ctx.fillText("TOP 5 HIGHSCORES!", 10, 100);


    let player1n = localStorage.getItem("player1n");
    let player1s = localStorage.getItem("player1s");
    let player1obj = { name: player1n, value: player1s };

    let player2n = localStorage.getItem("player2n");
    let player2s = localStorage.getItem("player2s");
    let player2obj = { name: player2n, value: player2s };

    let player3n = localStorage.getItem("player3n");
    let player3s = localStorage.getItem("player3s");
    let player3obj = { name: player3n, value: player3s };

    let player4n = localStorage.getItem("player4n");
    let player4s = localStorage.getItem("player4s");
    let player4obj = { name: player4n, value: player4s };

    let player5n = localStorage.getItem("player5n");
    let player5s = localStorage.getItem("player5s");
    let player5obj = { name: player5n, value: player5s };

    let objs = [];
    objs.push(player1obj);
    objs.push(player2obj);
    objs.push(player3obj);
    objs.push(player4obj);
    objs.push(player5obj);

    let min = 999999;
    for (let i = 0; i < objs.length; i++) {
        if (min > objs[i].value) {
            min = objs[i].value;
        }
    }

    console.log(min);

    let nr = -1;
    for (let i = 0; i < objs.length; i++) {
        if (objs[i].value === null) {
            nr = i + 1;
            break;
        }
        if (objs[i].value < playerScore && objs[i].value == min) {
            nr = i + 1;
            console.log(objs[i].value + " " + nr);
            break;
        }
        if (objs[i].value < playerScore) {
            nr = i + 1;
        }
    }
    if (nr != -1) {
        localStorage.setItem("player" + nr + "n", name);
        localStorage.setItem("player" + nr + "s", playerScore);
    }

    player1n = localStorage.getItem("player1n");
    player1s = localStorage.getItem("player1s");
    player1obj = { name: player1n, value: player1s };

    player2n = localStorage.getItem("player2n");
    player2s = localStorage.getItem("player2s");
    player2obj = { name: player2n, value: player2s };

    player3n = localStorage.getItem("player3n");
    player3s = localStorage.getItem("player3s");
    player3obj = { name: player3n, value: player3s };

    player4n = localStorage.getItem("player4n");
    player4s = localStorage.getItem("player4s");
    player4obj = { name: player4n, value: player4s };

    player5n = localStorage.getItem("player5n");
    player5s = localStorage.getItem("player5s");
    player5obj = { name: player5n, value: player5s };

    objs = [];
    objs.push(player1obj);
    objs.push(player2obj);
    objs.push(player3obj);
    objs.push(player4obj);
    objs.push(player5obj);

    objs.sort(compare);

    console.log(objs);


    nr = 200;
    objs.forEach(obj => {
        ctx.font = "80px Arial";
        ctx.fillStyle = "orange";
        if (obj.name == null) {
            ctx.fillText("No name", 10, nr);
        }
        else {
            ctx.fillText(obj.name, 10, nr);
        }

        if (obj.value == null) {
            ctx.fillText(0, 410, nr);
        }
        else {
            ctx.fillText(obj.value, 410, nr);
        }
        nr += 100;
    })

}