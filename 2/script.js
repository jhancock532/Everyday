//With much thanks to http://www.catipsum.com/index.php and https://placekitten.com/

let AbstractHTMLGenerator = function(){
  this.maxLevels = 2;
  this.maxClasses = 5;
  this.siteSections = 3;
  
  let rawClassesText = "container card-body card card-title card-text w-75 w-50 w-25 small mark blockquote mb-0 blockquote-footer text-right w-100 align-items-start justify-content-between justify-content-around alert-success alert-light badge-success badge-dark breadcrumb btn-secondary btn-outline-info btn-outline-success btn-lg btn-outline-info btn-danger breadcrumb-item active alert-link alert-heading alert-dismissible fade show display-4 display-1 nav lead display-2 alert alert-primary text-center bg-info bg-warning bg-light bg-dark bg-success bg-danger bg-primary btn btn-primary badge badge-light badge-secondary badge-pill img-fluid badge-warning form-group form-text text-muted form-check-label btn-group text-truncate";
  
  let catIpsum = "Lick sellotape hate dog, but annoy kitten brother with poking so step on your keyboard while you're gaming and then turn in a circle , yowling nonstop the whole night. Catasstrophe the cat was chasing the mouse man running from cops stops to pet cats, goes to jail yet bite nose of your human but going to catch the red dot today going to catch the red dot today attack the child. Bite the neighbor's bratty kid unwrap toilet paper howl uncontrollably for no reason stinky cat. Give me some of your food give me some of your food give me some of your food meh, i don't want it stand with legs in litter box, but poop outside so scratch at fleas, meow until belly rubs, hide behind curtain when vacuum cleaner is on scratch strangers and poo on owners food. Hit you unexpectedly terrorize the hundred-and-twenty-pound rottweiler and steal his bed, not sorry dismember a mouse and then regurgitate parts of it on the family room floor. Sniff other cat's butt and hang jaw half open thereafter. Love and coo around boyfriend who purrs and makes the perfect moonlight eyes so i can purr and swat the glittery gleaming yarn to him (the yarn is from a $125 sweater) lick face hiss at owner, pee a lot, and meow repeatedly scratch at fence purrrrrr eat muffins and poutine until owner comes back push your water glass on the floor. Fight an alligator and win make it to the carpet before mmmmmm yet meow all night head nudges demand to be let outside at once, and expect owner to wait for me as i think about it at four in the morning wake up owner meeeeeeooww scratch at legs and beg for food then cry and yowl until they wake up at two pm jump on window and sleep while observing the bootyful cat next door that u really like but who already has a boyfriend end up making babies with her and let her move in i'm going to lap some water out of my master's cup meow. Then cats take over the world sit in window and stare oooh, a bird, yum missing until dinner time, yet pounce on unsuspecting person but cat cat moo moo lick ears lick paws. Eat grass, throw it back up claws in your leg yet purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table lie in the sink all day chirp at birds yet check cat door for ambush 10 times before coming in but meow loudly just to annoy owners. Sit on the laptop vommit food and eat it again. Love you, then bite you the door is opening! how exciting oh, it's you, meh and knock dish off table head butt cant eat out of my own dish so sniff other cat's butt and hang jaw half open thereafter or jump off balcony, onto stranger's head roll over and sun my belly. Sit on human sleep on dog bed, force dog to sleep on floor, but jump five feet high and sideways when a shadow moves yet adventure always under the bed cry louder at reflection my slave human didn't give me any food so i pooped on the floor. Sleep nap run in circles murf pratt ungow ungow, eat a plant, kill a hand. Chew foot lick the other cats yet eat plants, meow, and throw up because i ate plants with tail in the air and eat grass, throw it back up. At four in the morning wake up owner meeeeeeooww scratch at legs and beg for food then cry and yowl until they wake up at two pm jump on window and sleep while observing the bootyful cat next door that u really like but who already has a boyfriend end up making babies with her and let her move in scratch my tummy actually i hate you now fight me so lick human with sandpaper tongue pet me pet me pet me pet me, bite, scratch, why are you petting me nap all day, so ignore the human until she needs to get up, then climb on her lap and sprawl annoy kitten brother with poking. Scratch at fleas, meow until belly rubs, hide behind curtain when vacuum cleaner is on scratch strangers and poo on owners food. Lay on arms while you're using the keyboard hopped up on catnip lick face hiss at owner, and meow repeatedly scratch at fence purrrrrr eat muffins and poutine until owner comes back. Love to play with owner's hair tie bite the neighbor's bratty kid meow all night having their mate disturbing sleeping humans or eat plants, meow, and throw up because i ate plants so munch, munch, chomp, chomp inspect anything brought into the house, or refuse to leave cardboard box. Cat cat moo moo lick ears lick paws touch my tail, i shred your hand purrrr chew on cable all of a sudden cat goes crazy meow to be let in. Give me attention or face the wrath of my claws the cat was chasing the mouse tickle my belly at your own peril i will pester for food when you're in the kitchen even if it's salad . Cat cat moo moo lick ears lick paws loved it, hated it, loved it, hated it or man running from cops stops to pet cats, goes to jail so plays league of legends but do i like standing on litter cuz i sits when i have spaces, my cat buddies have no litter i live in luxury cat life so hide from vacuum cleaner.";
  
  let classTextArray = [];
  
  this.regenerateHTML = function(){
    classTextArray.length = 0;
    classTextArray = rawClassesText.split(" ");
    
    $("#main").empty();
    for (let i = 0; i < this.siteSections; i++){
      $("#main").append(this.createHTMLElement(3));
    }
  }
  
  this.randomInt = function(min, max){
    let base = max-min;
    return min + Math.floor(Math.random()*base);
  }
  
  this.randomLorumIpsum = function(){
    let lengthOfIpsum = this.randomInt(10,50);
    let startPosition = this.randomInt(0, catIpsum.length-50);
    return catIpsum.substring(startPosition, startPosition+lengthOfIpsum);
  }  
  
  this.createRandomClasses = function(){
    let classString = "";
    for (let i = 0; i < this.maxClasses; i++){
      classString += " "+classTextArray[this.randomInt(0, classTextArray.length)];
    }
    return classString;
  }
  
  this.createRandomWidthClasses = function(){
    let completeClass = "",
        noOfClasses = this.randomInt(1,4),
        widthClass = "";
    
    for (let i = 0; i < noOfClasses; i++){
      widthClass = "col-";
      switch(this.randomInt(0,5)){
        case 0:
          widthClass += "sm-";
          break;
        case 1:
          widthClass += "md-";
          break;
        case 2:
          widthClass += "lg-";
          break;
        case 3:
          widthClass += "xl-";
          break;
        case 4:
          widthClass += "";
          break;
      }
      widthClass += this.randomInt(1,12);
      completeClass += widthClass + " ";
    }
    return completeClass;
  }
  
  this.createHTMLElement = function(recursiveLevel){
    if (recursiveLevel == 0){
      switch(this.randomInt(0,5)){
        case 0:
          return "<p class='"+this.createRandomClasses()+"'>"+this.randomLorumIpsum()+"</p>";
        case 1:
          return '<button type="button" class="'+this.createRandomClasses()+'">Purr Count <span class="'+this.createRandomClasses()+'">'+this.randomInt(1,123)+'</span></button>';
        case 2:
          return '<img src="http://placekitten.com/'+this.randomInt(50,500)+'/'+this.randomInt(50,500)+'" class="'+this.createRandomClasses()+'">';
        case 3:
          return '<a href="https://codepen.io/jhancock532/" class="' + this.createRandomClasses() + '"></a>';
        case 4:
          return '<div class="'+this.createRandomClasses()+'">'+this.randomLorumIpsum()+'</div>';
      }
    } else if (recursiveLevel > 0){
      switch(this.randomInt(0,4)){
        case 0: 
          return '<dl class="row"><dt class="'+this.createRandomWidthClasses()+'">'+this.createHTMLElement(recursiveLevel-1)+'</dt><dt class="'+this.createRandomWidthClasses()+this.createRandomClasses()+'">'+this.createHTMLElement(recursiveLevel-1)+'</dt><dt class="'+this.createRandomWidthClasses()+'">'+this.createHTMLElement(recursiveLevel-1)+'</dt>';
        case 1:
          return '<div class="row">'+'<div class="'+this.createRandomWidthClasses()+'">'+this.createHTMLElement(recursiveLevel-1)+'</div>'+'<div class="'+this.createRandomWidthClasses()+'">'+this.createHTMLElement(recursiveLevel-1)+'</div>'+'</div>';
        case 2:
          return '<div class="btn-group" role="group">' +'<div class="'+this.createRandomWidthClasses()+this.createRandomClasses()+'">'+this.createHTMLElement(recursiveLevel-1)+'</div>'+'<div class="'+this.createRandomWidthClasses()+this.createRandomClasses()+'">'+this.createHTMLElement(recursiveLevel-1)+'</div>'+'<div class="'+this.createRandomWidthClasses()+this.createRandomClasses()+'">'+this.createHTMLElement(recursiveLevel-1)+'</div>'+'</div>';
        case 3:
          return '<ul class="list-group list-group-flush">'+'<li class="list-group-item '+this.createRandomClasses()+'">'+this.createHTMLElement(recursiveLevel-1)+'</li>'+'<li class="list-group-item">'+this.createHTMLElement(recursiveLevel-1)+'</li>'+'<li class="list-group-item '+this.createRandomClasses()+'">'+this.createHTMLElement(recursiveLevel-1)+'</li>'+'</ul>';
      }
    }
  }
}

let generator = new AbstractHTMLGenerator();

let gui = new dat.GUI(); 

gui.add(generator, "regenerateHTML").name("Create Website");
gui.add(generator, "maxLevels",1,10).name("Meow.");
gui.add(generator, "maxClasses",0,20).name("Mew!");
gui.add(generator, "siteSections",1,10).name("Purr...");

$( document ).ready(function() {
  generator.regenerateHTML();
});
