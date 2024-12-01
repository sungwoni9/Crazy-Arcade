class Block {
    constructor(state, x, y) {
      this.state = state;
      this.x = x;
      this.y = y;
    }
  
    getImageSrc() {
      let imgSrc = "";
      switch (this.state) {
        case Crazy.PLAYER:
          imgSrc = "images/player.jpg";
          break;
        case Crazy.WALL:
          imgSrc = "images/wall.jpeg";
          break;
        case Crazy.BOMB:
          imgSrc = "images/bomb.jpg";
          break;
        case Crazy.ITEM:
          imgSrc = "images/item.jpg";
          break;
        case Crazy.EMPTY:
          imgSrc = "images/empty.jpg";
          break;
        default:
          return "";
      }
      return imgSrc;
    }
  }
  
  class Crazy {
    static EMPTY = 0;
    static PLAYER = 1;
    static WALL = 2;
    static BOMB = 3;
    static ITEM = 4;
  
    constructor() {
      this.SIZE = 7;
      this.map = [];
      this.bombs = [];
      this.bombCnt = 3;
      this.pX = 0;
      this.pY = 0;
      this.isRun = true;
      this.isClear = false;
    }
  
    run() {
      this.setGame();
      this.render();
  
      document.addEventListener("keydown", (e) => {
        if (this.isRun) {
          this.handleInput(e.key);
          this.render();
        }
      });
    }
  
    setGame() {
      this.setMap();
      this.setPlayer();
      this.setWall();
    }
  
    setMap() {
      this.map = [];
      for (let y = 0; y < this.SIZE; y++) {
        for (let x = 0; x < this.SIZE; x++) {
          this.map.push(new Block(Crazy.EMPTY, x, y));
        }
      }
    }
  
    setPlayer() {
      const block = this.setStateOnRandomPos(Crazy.PLAYER, 1);
      this.pX = block.x;
      this.pY = block.y;
    }
  
    setWall() {
      const wallCnt = Math.floor(Math.random() * 10) + 5;
      this.setStateOnRandomPos(Crazy.WALL, wallCnt);
    }
  
    setStateOnRandomPos(state, count) {
      let result = null;
      while (count > 0) {
        const rIdx = Math.floor(Math.random() * this.map.length);
        const block = this.map[rIdx];
        if (block.state === Crazy.EMPTY) {
          block.state = state;
          result = block;
          count--;
        }
      }
      return result;
    }
  
    handleInput(key) {
      if (["a", "d", "w", "s"].includes(key)) {
        this.move(key);
      } else if (key === "e") {
        this.install();
      } else if (key === "b") {
        this.explode();
      }
    }
  
    move(direction) {
      let x = this.pX;
      let y = this.pY;
  
      if (direction === "a") x--;
      if (direction === "d") x++;
      if (direction === "w") y--;
      if (direction === "s") y++;
  
      const block = this.getBlockWithPosition(x, y);
      if (!block || block.state === Crazy.WALL || block.state === Crazy.BOMB)
        return;
  
      if (block.state === Crazy.ITEM) this.bombCnt++;
  
      const target = this.getBlockWithPosition(this.pX, this.pY);
      if (target.state !== Crazy.BOMB) {
        target.state = Crazy.EMPTY;
      }
  
      block.state = Crazy.PLAYER;
      this.pX = x;
      this.pY = y;
    }
  
    install() {
      if (this.bombCnt === 0) return;
  
      const block = this.getBlockWithPosition(this.pX, this.pY);
      block.state = Crazy.BOMB;
      this.bombs.push(block);
      this.bombCnt--;
    }
  
    explode() {
      if (this.bombs.length === 0) return;
  
      const bomb = this.bombs.shift();
      this.blowUp(bomb);
    }
  
    blowUp(bomb) {
      const x = bomb.x;
      const y = bomb.y;
  
      bomb.state = Crazy.EMPTY;
  
      for (const [dx, dy] of [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ]) {
        const block = this.getBlockWithPosition(x + dx, y + dy);
        if (block) this.crushBlock(block);
      }
    }
  
    crushBlock(block) {
      if (block.state === Crazy.WALL) {
        block.state = Math.random() < 0.33 ? Crazy.ITEM : Crazy.EMPTY;
      } else if (block.state === Crazy.PLAYER) {
        this.isRun = false;
      } else {
        block.state = Crazy.EMPTY;
      }
    }
  
    getBlockWithPosition(x, y) {
      return this.map.find((block) => block.x === x && block.y === y) || null;
    }
  
    render() {
      const mapContainer = document.getElementById("map-container");
      mapContainer.innerHTML = "";
  
      for (let y = 0; y < this.SIZE; y++) {
        const row = document.createElement("div");
        row.className = "row";
        for (let x = 0; x < this.SIZE; x++) {
          const block = this.getBlockWithPosition(x, y);
          const cell = document.createElement("div");
          cell.className = "cell";
  
          const img = document.createElement("img");
          img.src = block.getImageSrc();
          img.alt = block.state;
          img.width = 60;
          img.height = 60;
  
          cell.appendChild(img);
          row.appendChild(cell);
        }
        mapContainer.appendChild(row);
      }
  
      document.getElementById("bombCount").innerText = this.bombCnt;
      document.getElementById("playerPos").innerText = `(${this.pX}, ${this.pY})`;
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const game = new Crazy();
    game.run();
  });
  