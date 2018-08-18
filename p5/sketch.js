
var picArray = ["allgifs/5southfloorever.gif", "allgifs/4thfloor7beers.gif", "allgifs/absolutegarbage.gif","allgifs/aftershane.gif","allgifs/almostasscaryasscarybox.gif","allgifs/andafelony.gif","allgifs/babarcity.gif","allgifs/beelzebub.gif","allgifs/bestamericanwin.gif","allgifs/bikiniwaxabby.gif","allgifs/boobiesnicechoice.gif","allgifs/boringbored.gif","allgifs/canwedothisinalibrary.gif","allgifs/captainpresident.gif","allgifs/chugginjuggin.gif","allgifs/classiccasemhg.gif","allgifs/clothesline.gif","allgifs/dannybmhg.gif","allgifs/diversityrocks.gif","allgifs/dolphinwatereaglesky.gif","allgifs/dominosdelivers.gif","allgifs/fuckyoumom.gif","allgifs/gayboth.gif", "allgifs/hiding.gif","allgifs/hjobgoodone.gif","allgifs/hotgirlscanbelame.gif","allgifs/imincollege.gif","allgifs/isthatmydeodorant.gif","allgifs/kappagophashane.gif","allgifs/killinghitlers.gif","allgifs/madeyoupopcorn.gif","allgifs/mariecalendars.gif","allgifs/marshallkilledthatguy.gif","allgifs/morelike4.gif","allgifs/nodumbquestionsallowed.gif","allgifs/notroublesbubbles.gif","allgifs/okaymeltingpot.gif","allgifs/preparetodie.gif","allgifs/profilepic.gif","allgifs/runabby.gif","allgifs/scarything.gif","allgifs/seppuku.gif","allgifs/sexyboizforsexyboys.gif","allgifs/sexymates.gif","allgifs/sluttybaby.gif","allgifs/socialprobation.gif","allgifs/sooutgoing.gif","allgifs/stephandmarshall.gif","allgifs/straightandall.gif","allgifs/sushi.gif","allgifs/sushimaybe.gif","allgifs/talentshow.gif","allgifs/temporarytattuesdays.gif","allgifs/totallyinlovemhg.gif","allgifs/velcroshoesfullscholarship.gif","allgifs/voteforme.gif","allgifs/wasiinyourdream.gif","allgifs/wecanplaylater.gif","allgifs/whatablowforfeminism.gif","allgifs/whataworldmike.gif","allgifs/windowofpain.gif","allgifs/youranobody.gif","allgifs/youtubedotcom.gif"]
var thePic;
var theHue;

function preload(){
  randomNum = floor(random(picArray.length))
  thePic = createImg(picArray[randomNum])
  //use this to load your gif
  //This makes an ELEMENT, not an image
  //we will discuss the difference later
}

function setup() {
createCanvas(windowWidth,windowHeight)
colorMode(HSB)
rectMode(CENTER)
button = createButton('More 5th Floor');
button.position(width/2, 450);
button.mousePressed(newImage)
}

function draw() {
theHue = map(mouseX,0,windowWidth,0,360)
theBrightness = map(mouseY,0,windowHeight,0,100)
background(theHue,theBrightness,100);

textSize(36)
textAlign(CENTER);
text("5 SOUTH \nFLOOREVER",width/2+50,150);

thePic.position(width/2-100,height/2-50)
thePic.size(320,180);
}

function newImage(){
  randomNum = floor(random(picArray.length))
  thePic = createImg(picArray[randomNum])
  console.log(randomNum)
}