var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["7d9a9a5b-bfdf-4234-b3d4-dca293482aad","9595a839-3160-4c00-a386-e4f0e89785cc","53f08259-6993-4793-a1d3-ea92e4a414c6","3fa24783-1802-4c55-b0c9-ed193716351c"],"propsByKey":{"7d9a9a5b-bfdf-4234-b3d4-dca293482aad":{"name":"car1","sourceUrl":"assets/v3/animations/C943B5xRHevU6cyGgeAigIT2H0i9axghTEH6THZu9Yg/7d9a9a5b-bfdf-4234-b3d4-dca293482aad.png","frameSize":{"x":22,"y":38},"frameCount":1,"looping":true,"frameDelay":4,"version":"7NUd4vwVYsDEQrmjIhI4KnKqR7LjC8Am","loadedFromSource":true,"saved":true,"sourceSize":{"x":22,"y":38},"rootRelativePath":"assets/v3/animations/C943B5xRHevU6cyGgeAigIT2H0i9axghTEH6THZu9Yg/7d9a9a5b-bfdf-4234-b3d4-dca293482aad.png"},"9595a839-3160-4c00-a386-e4f0e89785cc":{"name":"car2","sourceUrl":"assets/v3/animations/C943B5xRHevU6cyGgeAigIT2H0i9axghTEH6THZu9Yg/9595a839-3160-4c00-a386-e4f0e89785cc.png","frameSize":{"x":22,"y":38},"frameCount":1,"looping":true,"frameDelay":4,"version":"aLvq2jYnqzTn2MzPbzvEtFchpAGavLXo","loadedFromSource":true,"saved":true,"sourceSize":{"x":22,"y":38},"rootRelativePath":"assets/v3/animations/C943B5xRHevU6cyGgeAigIT2H0i9axghTEH6THZu9Yg/9595a839-3160-4c00-a386-e4f0e89785cc.png"},"53f08259-6993-4793-a1d3-ea92e4a414c6":{"name":"car3","sourceUrl":"assets/v3/animations/C943B5xRHevU6cyGgeAigIT2H0i9axghTEH6THZu9Yg/53f08259-6993-4793-a1d3-ea92e4a414c6.png","frameSize":{"x":22,"y":38},"frameCount":1,"looping":true,"frameDelay":4,"version":"y.xwJ8jkZa10ErsAtSUEp8C1zuzNkcw1","loadedFromSource":true,"saved":true,"sourceSize":{"x":22,"y":38},"rootRelativePath":"assets/v3/animations/C943B5xRHevU6cyGgeAigIT2H0i9axghTEH6THZu9Yg/53f08259-6993-4793-a1d3-ea92e4a414c6.png"},"3fa24783-1802-4c55-b0c9-ed193716351c":{"name":"car4","sourceUrl":"assets/v3/animations/C943B5xRHevU6cyGgeAigIT2H0i9axghTEH6THZu9Yg/3fa24783-1802-4c55-b0c9-ed193716351c.png","frameSize":{"x":22,"y":38},"frameCount":1,"looping":true,"frameDelay":4,"version":"vFy9173CgXv.4G.u0n0Q2pB1sCC7LQxn","loadedFromSource":true,"saved":true,"sourceSize":{"x":22,"y":38},"rootRelativePath":"assets/v3/animations/C943B5xRHevU6cyGgeAigIT2H0i9axghTEH6THZu9Yg/3fa24783-1802-4c55-b0c9-ed193716351c.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var vida = 0;

//objetos//
var limite1 = createSprite(190,120,420,3);
var limite2 = createSprite(190,260,420,3);
var car1 = createSprite(100,130,10,10);
var car2 = createSprite(215,130,10,10);
var car3 = createSprite(165,250,10,10);
var car4 = createSprite(270,250,10,10);
var inicio = createSprite(20,190,50,150);
var final = createSprite(376,190,50,150);
var sam = createSprite(20,190,13,13);


//texturas//
limite1.shapeColor = "rgb(165, 165, 173)";
limite2.shapeColor = "rgb(165, 165, 173)";
inicio.shapeColor = "rgb(74, 213, 230 )";
final.shapeColor = "rgb(171, 225, 57)";
car1.shapeColor = (rgb(219, 42, 42 ));
car2.shapeColor = (rgb(119, 225, 30  ));
car3.shapeColor = (rgb(18, 90, 208));
car4.shapeColor = (rgb(241, 162, 40 ));
sam.shapeColor = (rgb(47, 165, 112  ));


//velocidades//
car1.velocityY = 8;
car2.velocityY = -8;
car3.velocityY = 8;
car4.velocityY = -8;



function draw() {
    background("white");
    //vidas//
    textSize(30);
    stroke( rgb(16, 244, 137 ));
    fill("blue");
    text ("vidas:" + vida,146, 50);
    

    
    //bordes//
 createEdgeSprites();
    car1.bounceOff(limite1);   
     car1.bounceOff(limite2);   
    car2.bounceOff(limite1);   
     car2.bounceOff(limite2);
     car3.bounceOff(limite1);   
     car3.bounceOff(limite2);
     car4.bounceOff(limite1);   
     car4.bounceOff(limite2);
     
     //character controler//
     if(keyDown("RIGHT")){
       sam.x = sam.x +2;
     }
     if(keyDown("LEFT")){
       sam.x = sam.x -2;
     }
     
     if (
       sam.isTouching(car1)||
       sam.isTouching(car2)||
      sam.isTouching(car3)||
       sam.isTouching(car4))
      {
       sam.x = 20;
       sam.y = 190;
       vida = vida +1;
       }
       
       if (sam.isTouching(final)){
          textSize(25);
    stroke( rgb(16, 244, 137 ));
    fill("blue");
    text ("Ganaste :D eres parte del 0.001%",20, 348);
       }
     
     if (keyDown("space")){
       sam.x = 370;
     }
     
    drawSprites();
 }


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
