
// // vocal, drum, bass, and other are volumes ranging from 0 to 100
// function draw_one_frame(words, vocal, drum, bass, other, counter) {
//   background(90);
//   // textFont('Verdana'); // please use CSS safe fonts
//   // rectMode(CENTER)
//   // textSize(24);

//   fill(200,0,0);
//   nostroke();

//   let circleRadius = 25;
//   let circlespacing = 60;

//   for(let i = 0; i < 5; i ++) {
    
//     let circleX = 50 + i * circlespacing;
//     let circleY = height / 2;

//     ellipse(circleX, circleY, circleRadius * 2);

//   }


// }

function setup() {
  createCanvas(600, 400); 
  
}

function draw() {
  background(90); 

  draw_one_frame(); 
}

function draw_one_frame() {
  fill(200, 0, 0); 
  noStroke(); 

  let circleRadius = 25; 
  let circleSpacing = 60; 

  // Draw multiple circles in a row
  for (let i = 0; i < 5; i++) {
    
    let circleX = 50 + i * circleSpacing;
    let circleY = height / 2; 

    // Draw the circle at the calculated position
    ellipse(circleX, circleY, circleRadius * 2);

}

}


// let bar_spacing = height / 10;
  // let bar_height = width / 12;
  // let bar_pos_x = width / 2;
  // let y = 100;



  //  // vocal bar is red
  //  fill(200, 0, 0);
  //  rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
  //  fill(0);
  //  text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
  //  // drum bar is green
  //  fill(0, 200, 0);
  //  rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
  //  fill(0);
  //  text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
  //  // bass bar is blue
  //  fill(50, 50, 240);
  //  rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
  //  fill(0);
  //  text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
  //  // other bar is white
  //  fill(200, 200, 200);
  //  rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
  //  fill(0);
  //  text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
  //  fill(255, 255, 0);
 
  //  // display "words"
  //  textAlign(CENTER);
  //  textSize(vocal);
  //  text(words, width/2, height/3);