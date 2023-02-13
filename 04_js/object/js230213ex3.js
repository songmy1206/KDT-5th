const pororo = {
  name: "뽀로로",
  height: 110,
  showName(){
    console.log(`${this.name}`);
  },
  showHeight
}

function showHeight(){
  console.log(`${this.height}`);
}

pororo.showName();
pororo.showHeight();