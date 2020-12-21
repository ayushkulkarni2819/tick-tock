
function setup() {
  createCanvas(1500,690);
 

}

function draw() {
  background('black');  

  hr= hour();
  mn= minute();
  sd= second();

  Clock();
  drawSprites();
}

function Clock(){
  stroke('rgb(0,255,0)');
  strokeWeight(10);
  rect(400, 200 , 670 , 300, );

  fill(51);
  stroke('rgb(0,255,0)');
  strokeWeight(2);
  rect(490, 140 , 80 , 60, );

  stroke('rgb(0,255,0)');
  strokeWeight(2);
  rect( 650 , 140 , 80, 60, );

  stroke('rgb(0,255,0)');
  strokeWeight(2);
  rect(870, 120 , 130 , 80, );

  fill(255);
  noStroke();
  textSize(150)
  text(hr + ':' + mn + ':' + sd, 490,390 )

}

//console.log(hr);
//console.log(mn);
//console.log(sd);

