/**
 * Minecraft Emojis
 * I'm A Ninja! (Chris X)
 * 
 * Emojis based on Minecraft mobs ... and Steve. (Is Herobrine a mob?)
 * 
 * The drawEmoji function takes four parameters, x, y, size, and emoji.
 * x: The x-coordinate of the upper-left corner
 * y: The y-coordinate of the upper-left corner
 * size: The width and height of the emoji
 * emoji: a string of text representing which emoji you want to show.
 * 
 * I'm a Summer of Scripting student.
 * I've been programming for 12 months, and I have learned about 92% of Intro to JS.
 * 
 * Thank you to everyone who voted up or span-off!
*/

noStroke();
textFont(createFont("monospace"));

var drawEmoji = function(x,y,size,emoji) {
    //Declaring the colors used in the emoji
    var colors = [];
    //The 2D number array representing the picture
    var emojiGrid = [];
    //Making the emoji parameter not case sensitive.
    emoji = emoji.toLowerCase();
    
    var b = "blank"; //used for blank squares, I was getting null errors
    //Now I have if and else ifs for every emoji, changing the colors and grid to match.
    if (emoji === "creeper") {
        colors[1] = color(0,0,0); //black
        colors[2] = color(129, 224, 74); //green
        emojiGrid = [
            [b,b,1,1,1,1,1,1,b,b],
            [b,1,2,2,2,2,2,2,1,b],
            [1,2,2,2,2,2,2,2,2,1],
            [1,2,1,1,2,2,1,1,2,1],
            [1,2,1,1,2,2,1,1,2,1],
            [1,2,2,2,1,1,2,2,2,1],
            [1,2,2,1,1,1,1,2,2,1],
            [1,2,2,1,2,2,1,2,2,1],
            [b,1,2,2,2,2,2,2,1,b],
            [b,b,1,1,1,1,1,1,b,b]];
    } else if (emoji === "skeleton" || emoji === "skelly") {
        colors[0] = color(200,200,200); //light gray
        colors[1] = color(150,150,150); //medium gray
        colors[2] = color(50,50,50); //dark gray
        emojiGrid = [
            [b,b,2,2,2,2,2,2,b,b],
            [b,2,1,1,1,1,1,1,2,b],
            [2,1,1,1,1,0,0,1,1,2],
            [2,1,0,0,0,0,0,0,0,2],
            [2,0,0,0,0,0,0,0,0,2],
            [2,0,2,2,0,0,2,2,0,2],
            [2,0,0,0,1,1,0,0,0,2],
            [2,0,2,2,2,2,2,2,0,2],
            [b,2,0,0,0,0,0,0,2,b],
            [b,b,2,2,2,2,2,2,b,b]];
    } else if (emoji === "slime") {
        colors[0] = color(0,0,0); //black
        colors[1] = color(150,210,140); //light mint green
        colors[2] = color(140,190,130); //slightly darker mint green
        emojiGrid = [
            [b,b,0,0,0,0,0,0,b,b],
            [b,0,1,1,2,1,1,1,0,b],
            [0,1,2,2,2,2,2,2,1,0],
            [0,1,0,0,2,2,0,0,1,0],
            [0,1,0,0,2,2,0,0,1,0],
            [0,2,2,2,2,2,2,2,1,0],
            [0,1,2,2,2,0,2,2,2,0],
            [0,1,2,2,2,2,2,2,1,0],
            [b,0,1,1,2,1,1,1,0,b],
            [b,b,0,0,0,0,0,0,b,b]];
    } else if (emoji === "enderman") {
        colors[0] = color(0,0,0); //black
        colors[1] = color(220,120,240); //pink
        colors[2] = color(200,0,250); //magenta
        emojiGrid = [
            [b,b,0,0,0,0,0,0,b,b],
            [b,0,0,0,0,0,0,0,0,b],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,1,2,1,0,0,1,2,1,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [b,0,0,0,0,0,0,0,0,b],
            [b,b,0,0,0,0,0,0,b,b]];
    } else if (emoji === "witherskeleton" || emoji === "witherskelly") {
        colors[0] = color(0,0,0); //black
        colors[1] = color(60,60,60); //dark gray
        emojiGrid = [
            [b,b,0,0,0,0,0,0,b,b],
            [b,0,1,1,1,1,1,1,0,b],
            [0,1,1,1,1,1,1,1,1,0],
            [0,1,1,1,1,1,1,1,1,0],
            [0,1,1,1,1,1,1,1,1,0],
            [0,1,0,0,1,1,0,0,1,0],
            [0,1,1,1,1,1,1,1,1,0],
            [0,1,1,0,0,0,0,1,1,0],
            [b,0,1,1,1,1,1,1,0,b],
            [b,b,0,0,0,0,0,0,b,b]];
    } else if (emoji === "wither") {
        colors[0] = color(255,255,255); //white
        colors[1] = color(0,0,0); //black
        colors[2] = color(60,60,60); //dark gray
        emojiGrid = [
            [b,b,1,1,1,1,1,1,b,b],
            [b,1,2,2,2,2,2,2,1,b],
            [1,2,2,2,2,2,2,2,2,1],
            [1,2,2,2,2,2,2,2,2,1],
            [1,1,1,1,2,2,1,1,1,1],
            [1,2,0,0,2,2,0,0,2,1],
            [1,2,2,2,2,2,2,2,2,1],
            [1,2,2,0,0,0,0,2,2,1],
            [b,1,2,2,2,2,2,2,1,b],
            [b,b,1,1,1,1,1,1,b,b]];
    } else if (emoji === "steve") {
        colors[0] = color(255,255,255); //white
        colors[1] = color(70,40,20); //dark brown
        colors[2] = color(190,140,110); //light tan
        colors[3] = color(70,60,160); //indigo
        colors[4] = color(0,0,0); //black
        emojiGrid = [
            [b,b,4,4,4,4,4,4,b,b],
            [b,4,1,1,1,1,1,1,4,b],
            [4,1,1,1,1,1,1,1,1,4],
            [4,1,2,2,2,2,2,2,1,4],
            [4,2,2,2,2,2,2,2,2,4],
            [4,2,0,3,2,2,3,0,2,4],
            [4,2,2,2,1,1,2,2,2,4],
            [4,2,2,1,2,2,1,2,2,4],
            [b,4,2,1,1,1,1,2,4,b],
            [b,b,4,4,4,4,4,4,b,b]];
    } else if (emoji === "herobrine") {
        colors[0] = color(255,255,255); //white
        colors[1] = color(70,40,20); //dark brown
        colors[2] = color(190,140,110); //light tan
        colors[4] = color(0, 0, 0); //black
        emojiGrid = [
            [b,b,4,4,4,4,4,4,b,b],
            [b,4,1,1,1,1,1,1,4,b],
            [4,1,1,1,1,1,1,1,1,4],
            [4,1,2,2,2,2,2,2,1,4],
            [4,2,2,2,2,2,2,2,2,4],
            [4,2,0,0,2,2,0,0,2,4],
            [4,2,2,2,1,1,2,2,2,4],
            [4,2,2,1,1,1,1,2,2,4],
            [b,4,2,2,2,2,2,2,4,b],
            [b,b,4,4,4,4,4,4,b,b]];
    } else if (emoji === "cow") {
        colors[0] = color(255,255,255); //white
        colors[1] = color(0,0,0); //black
        colors[2] = color(64,47,37); //dark brown
        colors[3] = color(100,100,100); //dark gray
        colors[4] = color(200,200,200); //light gray
        emojiGrid = [
            [b,b,1,1,1,1,1,1,b,b],
            [b,1,2,2,4,4,4,4,1,b],
            [1,2,2,2,4,4,4,2,2,1],
            [1,4,4,2,4,4,2,4,4,1],
            [1,1,0,2,4,2,2,0,1,1],
            [1,2,2,2,2,2,2,2,2,1],
            [1,2,2,4,4,4,4,2,2,1],
            [1,2,4,1,3,3,1,4,2,1],
            [b,1,4,3,3,3,3,4,1,b],
            [b,b,1,1,1,1,1,1,b,b]];
    } else if (emoji === "mooshroom") {
        colors[1] = color(0,0,0); //black
        colors[2] = color(150,0,0); //red
        colors[3] = color(100,100,100); //dark gray
        colors[4] = color(200,200,200); //light gray
        emojiGrid = [
            [b,b,1,1,1,1,1,1,b,b],
            [b,1,2,2,4,4,4,4,1,b],
            [1,2,2,2,4,4,4,2,2,1],
            [1,1,1,2,4,4,2,1,1,1],
            [1,1,1,2,4,2,2,1,1,1],
            [1,2,2,2,2,2,2,2,2,1],
            [1,2,2,4,4,4,4,2,2,1],
            [1,2,4,1,3,3,1,4,2,1],
            [b,1,4,3,3,3,3,4,1,b],
            [b,b,1,1,1,1,1,1,b,b]];
    } else if (emoji === "zombie") {
        colors[0] = color(0,0,0); //black
        colors[1] = color(55,90,35); //dark green
        colors[2] = color(110,150,90); //lighter green
        emojiGrid = [
            [b,b,0,0,0,0,0,0,b,b],
            [b,0,1,1,1,1,1,1,0,b],
            [0,1,1,1,1,2,2,1,1,0],
            [0,1,2,2,2,2,2,2,2,0],
            [0,2,2,2,2,2,2,2,2,0],
            [0,2,0,0,2,2,0,0,2,0],
            [0,2,2,2,1,1,2,2,2,0],
            [0,2,2,1,2,2,1,2,2,0],
            [b,0,2,1,1,1,1,2,0,b],
            [b,b,0,0,0,0,0,0,b,b]];
    } else if (emoji === "pig") {
        colors[0] = color(255,255,255); //white
        colors[1] = color(0,0,0); //black
        colors[2] = color(230,160,160); //pink
        colors[3] = color(190,125,125); //darker pink
        colors[4] = color(135,75,75); //even darker pink
        emojiGrid = [
            [b,b,1,1,1,1,1,1,b,b],
            [b,1,2,2,2,2,2,2,1,b],
            [1,2,2,2,2,2,2,2,2,1],
            [1,2,2,2,2,2,2,2,2,1],
            [1,1,0,2,2,2,2,0,1,1],
            [1,2,2,3,3,3,3,2,2,1],
            [1,2,2,4,2,2,4,2,2,1],
            [1,2,2,3,3,3,3,2,2,1],
            [b,1,2,2,2,2,2,2,1,b],
            [b,b,1,1,1,1,1,1,b,b]];
    } else if (emoji === "sheep") {
        colors[0] = color(255,255,255); //white
        colors[1] = color(0,0,0); //black
        colors[2] = color(210,210,210); //light gray
        colors[3] = color(170,140,110); //light brown
        colors[4] = color(255,180,180); //pink
        emojiGrid = [
            [b,b,1,1,1,1,1,1,b,b],
            [b,1,0,0,0,0,0,0,1,b],
            [1,0,2,2,2,2,2,2,0,1],
            [1,0,3,3,3,3,3,3,0,1],
            [1,0,1,0,3,3,0,1,0,1],
            [1,0,3,3,3,3,3,3,0,1],
            [1,0,2,3,4,4,3,2,0,1],
            [1,0,2,3,4,4,3,2,0,1],
            [b,1,0,0,0,0,0,0,1,b],
            [b,b,1,1,1,1,1,1,b,b]];
    } else if (emoji === "pigman" || emoji === "zombiepigman") {
        colors[0] = color(255,255,255); //white
        colors[1] = color(0,0,0); //black
        colors[2] = color(180,180,180); //gray
        colors[3] = color(240,165,165); //pink
        colors[4] = color(80,120,30); //dark green
        colors[5] = color(145,75,75); //dark pink
        emojiGrid = [
            [b,b,1,1,1,1,1,1,b,b],
            [b,1,4,4,4,4,3,3,1,b],
            [1,2,2,4,4,4,3,3,3,1],
            [1,2,2,2,2,4,3,3,3,1],
            [1,1,4,2,4,3,3,0,1,1],
            [1,2,2,2,4,3,3,3,4,1],
            [1,2,2,5,4,4,5,3,3,1],
            [1,2,4,4,2,4,4,3,4,1],
            [b,1,4,4,4,4,4,4,1,b],
            [b,b,1,1,1,1,1,1,b,b]];
    } else if (emoji === "spider") {
        colors[0] = color(0,0,0); //black
        colors[1] = color(73,64,55); //gray
        colors[2] = color(85,85,85); //slightly lighter gray
        colors[3] = color(255,0,0); //red
        colors[4] = color(165,0,0); //darker red
        colors[5] = color(100,0,0); //even darker red
        emojiGrid = [
            [b,b,0,0,0,0,0,0,b,b],
            [b,0,4,1,1,1,1,5,0,b],
            [0,1,1,5,1,1,4,1,1,0],
            [0,4,1,1,1,1,1,1,3,0],
            [0,5,1,3,4,3,4,1,4,0],
            [0,1,1,4,5,4,5,1,1,0],
            [0,1,1,1,1,1,1,1,1,0],
            [0,1,2,0,1,1,0,2,1,0],
            [b,0,2,0,1,1,0,2,0,b],
            [b,b,0,0,0,0,0,0,b,b]];
    } else if (emoji === "cavespider") {
        colors[0] = color(0,10,10); //black
        colors[1] = color(0,40,50); //dark blue
        colors[2] = color(14,62,74); //slightly lighter gray
        colors[3] = color(170,14,14); //red
        colors[4] = color(60,0,0); //darker red
        colors[5] = color(34,0,0); //even darker red
        emojiGrid = [
            [b,b,0,0,0,0,0,0,b,b],
            [b,0,4,1,1,1,1,5,0,b],
            [0,1,1,5,1,1,4,1,1,0],
            [0,4,1,1,1,1,1,1,3,0],
            [0,5,1,3,4,3,4,1,4,0],
            [0,1,1,4,5,4,5,1,1,0],
            [0,1,1,1,1,1,1,1,1,0],
            [0,1,2,0,1,1,0,2,1,0],
            [b,0,2,0,1,1,0,2,0,b],
            [b,b,0,0,0,0,0,0,b,b]];
    } else if (emoji === "magmacube") {
        colors[0] = color(14,0,0); //very dark red
        colors[1] = color(200,0,0); //bright red
        colors[2] = color(255,255,0); //yellow
        colors[3] = color(255,90,0); //orange
        colors[4] = color(50,0,0); //dark red
        colors[5] = color(50,25,0); //dark yellow
        emojiGrid = [
            [b,b,0,0,0,0,0,0,b,b],
            [b,0,0,0,0,4,4,0,0,b],
            [0,0,0,4,4,5,4,4,0,0],
            [0,0,1,1,0,0,1,1,0,0],
            [0,4,3,2,4,0,2,3,4,0],
            [0,0,4,5,0,0,4,4,4,0],
            [0,0,0,0,0,4,4,4,5,0],
            [0,0,0,0,4,5,4,4,4,0],
            [b,0,0,4,5,4,0,0,0,b],
            [b,b,0,0,0,0,0,0,b,b]];
    } else if (emoji === "blaze") {
        colors[0] = color(50,10,10); //very dark red
        colors[1] = color(255,200,0); //golden yellow
        colors[2] = color(255,255,133); //pale yellow
        colors[3] = color(40,12,0); //brown
        colors[4] = color(100,50,0); //dark yellow
        colors[5] = color(60,0,0); //dark red
        emojiGrid = [
            [b,b,0,0,0,0,0,0,b,b],
            [b,0,1,1,1,1,1,1,0,b],
            [0,1,1,1,1,1,1,1,1,0],
            [0,1,1,1,1,1,1,1,1,0],
            [0,1,2,0,1,1,0,2,1,0],
            [0,4,1,1,1,1,1,1,1,0],
            [0,4,4,4,0,5,4,4,4,0],
            [0,4,3,3,5,0,5,4,3,0],
            [b,0,3,3,3,5,3,3,0,b],
            [b,b,0,0,0,0,0,0,b,b]];
    } else if (emoji === "ghast") {
        colors[0] = color(255,255,255); //white
        colors[1] = color(240,240,240); //very light gray
        colors[2] = color(188,188,188); //darker gray
        colors[3] = color(86,86,86); //dark gray
        emojiGrid = [
            [b,b,3,3,3,3,3,3,3,3,3,3,3,3,3,3,b,b],
            [b,3,0,0,0,0,1,1,1,0,0,1,1,1,0,0,3,b],
            [3,0,1,1,1,1,2,1,1,1,1,2,1,1,1,1,0,3],
            [3,0,1,1,2,2,1,1,1,1,1,1,2,2,1,1,0,3],
            [3,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,3],
            [3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3],
            [3,1,1,2,3,3,3,3,1,1,3,3,3,3,2,1,1,3],
            [3,0,1,1,1,2,2,0,1,1,0,2,2,1,1,1,0,3],
            [3,0,1,1,1,2,1,0,1,1,0,1,2,1,1,1,1,3],
            [3,0,1,1,1,2,1,1,1,1,1,1,1,1,1,1,0,3],
            [3,2,2,2,1,1,1,1,1,1,1,1,2,1,2,2,2,3],
            [3,0,0,0,1,2,1,1,1,1,1,1,1,1,0,0,0,3],
            [3,2,2,1,1,1,1,1,1,1,1,1,1,1,1,2,2,3],
            [3,0,0,1,1,1,1,3,3,3,3,1,1,1,1,0,0,3],
            [3,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,3],
            [3,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,3],
            [b,3,0,0,0,0,1,0,0,0,0,1,0,0,0,0,3,b],
            [b,b,3,3,3,3,3,3,3,3,3,3,3,3,3,3,b,b]];
    } else if (emoji === "villager") {
        colors[0] = color(255,255,255); //white
        colors[1] = color(180,123,100); //pinkish
        colors[2] = color(144,94,67); //darker pinkish
        colors[3] = color(120,65,53); //even darker pinkish
        colors[4] = color(50,36,17); //dark brown
        colors[5] = color(0,150,17); //green
        emojiGrid = [
            [b,b,4,4,4,4,4,4,b,b],
            [b,4,1,1,1,1,1,1,4,b],
            [4,1,1,1,1,1,1,1,1,4],
            [4,1,1,1,1,1,1,1,1,4],
            [4,1,4,4,4,4,4,4,1,4],
            [4,1,0,5,1,1,5,0,1,4],
            [4,2,1,1,2,2,1,1,2,4],
            [4,2,1,3,2,2,3,1,2,4],
            [b,4,1,1,2,2,1,1,4,b],
            [b,b,4,4,4,4,4,4,b,b]];
    } else if (emoji === "chicken") {
        colors[0] = color(255,255,255); //white
        colors[1] = color(0,0,0); //black
        colors[2] = color(225,225,225); //light gray
        colors[3] = color(194,147,67); //brownish orangish
        colors[4] = color(150,114,52); //light brown
        colors[5] = color(255,0,0); //red
        emojiGrid = [
            [b,b,1,1,1,1,b,b],
            [b,1,2,2,2,2,1,b],
            [b,1,1,0,0,1,1,b],
            [b,1,3,3,3,3,1,b],
            [b,1,4,4,4,4,1,b],
            [b,1,2,5,5,2,1,b],
            [b,1,0,5,5,0,1,b],
            [b,b,1,1,1,1,b,b]];
    } else if (emoji === "ocelot" || emoji === "cat") {
        colors[0] = color(122, 84, 44); //black
        colors[1] = color(215,215,215); //gray
        colors[2] = color(30,111,50); //green
        colors[3] = color(243,197,111); //light orange
        colors[4] = color(218,158,85); //darker orange
        colors[5] = color(180,135,75); //bit darker orange
        colors[6] = color(230,230,130); //pale yellow
        colors[7] = color(190,175,100); //darker pale yellow
        colors[8] = color(227,200,144); //pale orangish brown
        colors[9] = color(92,92,92); //dark gray
        emojiGrid = [
            [b,b,b,b,b,b,b],
            [b,0,0,0,0,0,b],
            [0,4,5,3,5,4,0],
            [0,1,2,3,2,1,0],
            [0,7,6,9,6,7,0],
            [0,6,8,8,8,6,0],
            [b,0,0,0,0,0,b]];
    } else if (emoji === "enderdragon") {
        colors[0] = color(0,0,0); //black
        colors[1] = color(35,35,35); //dark gray
        colors[2] = color(23,23,23); //darker gray
        colors[3] = color(233,115,255); //pink
        colors[4] = color(200,0,255); //magenta
        emojiGrid = [
            [b,b,0,0,0,0,0,0,0,0,0,0,0,0,0,0,b,b],
            [b,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,b],
            [0,2,1,1,1,1,2,2,2,2,2,2,2,1,1,1,2,0],
            [0,2,2,2,2,2,1,2,2,2,2,1,1,2,2,2,2,0],
            [0,2,2,2,2,2,2,1,2,2,1,2,2,2,2,2,2,0],
            [0,2,2,3,4,3,2,1,2,2,1,2,3,4,3,2,2,0],
            [0,2,2,3,4,4,3,2,2,2,2,3,4,4,3,2,2,0],
            [0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
            [0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
            [0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
            [0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
            [0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
            [0,2,2,2,0,4,3,3,3,3,3,3,4,0,2,2,2,0],
            [0,2,2,2,0,4,3,3,3,3,3,3,4,0,2,2,2,0],
            [0,2,2,2,0,4,3,3,3,3,3,3,4,0,2,2,2,0],
            [0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
            [b,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,b],
            [b,b,0,0,0,0,0,0,0,0,0,0,0,0,0,0,b,b]];
    } else if (emoji === "killerrabbit" || emoji === "killerbunny") {
        colors[0] = color(0,0,0); //black
        colors[1] = color(255,255,255); //white
        colors[2] = color(183,183,183); //light gray
        colors[3] = color(190,165,165); //pinkish
        colors[4] = color(200,66,81); //pale red
        colors[5] = color(140,0,16); //dark red
        emojiGrid = [
            [b,b,b,0,0,b,0,0,b,b,b],
            [b,b,0,1,1,0,1,1,0,b,b],
            [b,b,0,1,3,0,3,1,0,b,b],
            [b,b,0,1,3,0,3,1,0,b,b],
            [b,b,0,1,3,0,3,1,0,b,b],
            [b,b,0,1,3,0,3,1,0,b,b],
            [b,b,0,2,2,1,2,2,0,b,b],
            [b,b,0,4,5,1,5,4,0,b,b],
            [b,b,0,1,1,1,1,1,0,b,b],
            [b,b,0,1,1,1,1,1,0,b,b],
            [b,b,b,0,0,0,0,0,b,b,b]];
    } else if (emoji === "snowgolem" || emoji === "pumpkin") {
        colors[0] = color(47,0,0); //dark red
        colors[1] = color(67,19,0); //brown
        colors[2] = color(227,166,75); //light orange
        colors[3] = color(227,145,27); //orange
        colors[4] = color(207,124,20); //dark orange
        colors[5] = color(160,90,10); //even darker orange
        emojiGrid = [
            [b,b,1,1,1,1,1,1,1,1,1,1,1,1,1,1,b,b],
            [b,1,5,4,5,5,4,4,5,5,4,5,5,4,4,5,1,b],
            [1,5,2,3,5,4,3,3,4,5,3,3,5,4,3,3,5,1],
            [1,5,4,3,5,0,0,3,3,5,2,0,5,3,3,3,5,1],
            [1,5,4,3,5,0,1,0,2,5,0,0,0,5,3,4,5,1],
            [1,5,4,5,0,1,1,1,5,5,0,1,1,0,5,4,5,1],
            [1,5,2,5,0,1,1,1,5,5,0,1,1,1,5,4,5,1],
            [1,5,2,5,0,1,1,1,5,5,0,1,1,1,1,5,5,1],
            [1,5,3,3,5,1,1,5,5,5,5,1,1,1,1,5,5,1],
            [1,5,3,3,3,5,5,5,4,5,5,5,5,5,5,4,5,1],
            [1,5,4,5,0,5,0,5,5,0,5,5,0,5,0,4,5,1],
            [1,5,4,0,0,0,0,1,0,0,1,0,0,1,0,5,5,1],
            [1,5,5,0,1,1,1,1,1,1,1,1,1,1,1,1,5,1],
            [1,5,5,5,0,1,5,1,1,5,1,1,1,5,1,1,5,1],
            [1,5,5,5,0,5,3,1,5,5,3,3,1,5,2,5,5,1],
            [1,5,4,3,4,5,3,3,5,5,2,3,5,5,3,3,5,1],
            [b,1,5,4,4,5,5,4,5,5,4,5,5,4,4,5,1,b],
            [b,b,1,1,1,1,1,1,1,1,1,1,1,1,1,1,b,b]];
    } else if (emoji === "wolf" || emoji === "dog") {
        colors[0] = color(255,255,255); //white
        colors[1] = color(0,0,0); //black
        colors[2] = color(222,222,222); //light gray
        colors[3] = color(200,200,200); //gray
        colors[4] = color(65,65,65); //dark gray
        colors[5] = color(235,220,216); //super light pink
        colors[6] = color(162,135,118); //light brown
        colors[7] = color(140,110,80); //darker brown
        colors[8] = color(150,140,140); //grayish brown
        emojiGrid = [
            [b,1,1,b,b,1,1,b,b],
            [1,2,2,1,1,2,2,1,b],
            [1,3,3,1,1,3,3,1,b],
            [1,3,3,3,3,3,3,1,b],
            [1,0,1,6,6,1,0,1,b],
            [1,6,5,1,1,5,6,1,b],
            [1,7,5,5,5,5,7,1,b],
            [1,8,4,4,4,4,8,1,b],
            [b,1,1,1,1,1,1,b,b]];
    } else if (emoji === "silverfish") {
        colors[0] = color(0,0,0); //black
        colors[1] = color(140,146,132); //different gray
        colors[2] = color(140,140,140); //gray
        colors[3] = color(130,130,130); //tad darker gray
        colors[4] = color(115,115,115); //darker gray
        colors[5] = color(120,125,135); //blueish gray
        emojiGrid = [
            [b,b,b,b,b,b],
            [1,b,b,1,b,1],
            [b,5,b,5,b,5],
            [1,3,4,5,3,3],
            [b,3,0,2,0,3],
            [5,4,4,5,4,4]];
    } else if (emoji === "alex") {
        colors[0] = color(255,255,255); //white
        colors[1] = color(0,0,0); //black
        colors[2] = color(30,100,30); //green
        colors[3] = color(236,217,187); //light pink
        colors[4] = color(238,188,177); //pink
        colors[5] = color(230,150,70); //orange
        emojiGrid = [
            [b,b,1,1,1,1,1,1,b,b],
            [b,1,5,5,5,5,5,5,1,b],
            [1,5,5,5,5,5,5,5,5,1],
            [1,5,5,5,5,3,3,5,5,1],
            [1,5,5,5,3,3,3,3,5,1],
            [1,3,0,2,3,3,2,0,3,1],
            [1,3,3,3,3,3,3,3,3,1],
            [1,3,3,3,4,4,3,3,3,1],
            [b,1,3,3,3,3,3,3,1,b],
            [b,b,1,1,1,1,1,1,b,b]];
    } else if (emoji === "irongolem") {
        colors[0] = color(0,0,0); //black
        colors[1] = color(210,210,210); //light gray
        colors[2] = color(200,200,195); //slightly darker gray
        colors[3] = color(175,160,153); //gray
        colors[4] = color(158,143,136); //even darker gray
        colors[5] = color(130,113,103); //dark gray
        colors[6] = color(220,200,185); //light brown
        colors[7] = color(190,160,140); //darker light brown
        colors[8] = color(90,68,54); //dark brown
        colors[9] = color(137,18,46); //dark red
        emojiGrid = [
            [b,b,b,0,0,0,0,0,0,b,b,b],
            [b,b,0,2,2,2,2,2,2,0,b,b],
            [b,0,1,1,1,1,1,1,1,1,0,b],
            [b,0,7,7,7,7,7,7,7,7,0,b],
            [b,0,6,6,6,6,6,6,6,6,0,b],
            [b,0,8,8,8,8,8,8,8,8,0,b],
            [b,0,6,0,0,6,7,0,0,6,0,b],
            [b,0,6,9,0,3,4,0,9,6,0,b],
            [b,0,6,8,8,4,4,8,8,6,0,b],
            [b,0,6,7,7,4,5,7,7,6,0,b],
            [b,b,0,6,6,5,5,6,6,0,b,b],
            [b,b,b,0,0,0,0,0,0,b,b,b]];
    } else if (emoji === "guardian") {
        colors[0] = color(0,0,0); //black
        colors[1] = color(217,213,202); //light gray
        colors[2] = color(117,29,25); //dark red
        colors[3] = color(255,92,26); //orange
        colors[4] = color(120,155,145); //light blue
        colors[5] = color(75,125,110); //darker blue
        colors[6] = color(40,113,94); //even darker blue
        colors[7] = color(27,80,62); //darkest blue
        emojiGrid = [
            [b,b,b,b,b,b,b,0,0,0,0,b,b,b,b,b,b,b],
            [b,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,b],
            [b,0,3,3,5,6,6,7,3,3,7,6,6,5,3,3,0,b],
            [b,0,3,3,4,4,4,4,5,7,4,4,4,4,3,3,0,b],
            [b,0,6,4,4,5,5,6,6,7,6,5,4,5,4,5,0,b],
            [b,0,5,4,5,5,6,5,5,7,5,6,5,5,4,5,0,b],
            [b,0,6,4,5,6,5,6,5,5,6,5,6,5,4,6,0,b],
            [0,0,6,4,7,7,7,7,7,7,7,7,7,7,6,6,0,0],
            [0,3,3,4,5,6,1,1,1,1,1,1,6,5,6,3,3,0],
            [0,3,3,6,5,6,1,1,2,2,1,1,6,5,6,3,3,0],
            [0,0,6,5,6,5,1,1,2,2,1,1,5,6,5,5,0,0],
            [b,0,6,5,5,5,6,5,6,6,5,6,5,5,5,6,0,b],
            [b,0,5,5,6,5,6,7,5,5,6,7,5,6,4,5,0,b],
            [b,0,6,5,7,7,7,5,5,5,5,7,6,5,5,4,0,b],
            [b,0,3,3,5,4,4,6,5,5,6,4,7,5,3,3,0,b],
            [b,0,3,3,5,7,7,6,3,3,6,6,6,7,3,3,0,b],
            [b,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,b],
            [b,b,b,b,b,b,b,0,0,0,0,b,b,b,b,b,b,b]];
    }
    
    //I use nested for loops to go through the array, matching a number to its respective color and drawing a rect using the array row and column.
    var pixelWidth = size/emojiGrid.length;
    for (var i = 0; i < emojiGrid.length; i++) {
        for (var j = 0; j < emojiGrid[i].length; j++) {
            if (emojiGrid[i][j] !== "blank") {
                fill(colors[emojiGrid[i][j]]);
                rect(x+j*pixelWidth,y+i*pixelWidth,pixelWidth,pixelWidth);
            }
        }
    }
};

//Toggling between screens
var showCatalog = false;
var mouseReleased = function() {
    showCatalog = !showCatalog;
};

var draw = function() {
    background(36,24,16);

    if (!showCatalog) {
        fill(255, 255, 255);
        textSize(20);
        text("You'd better not do that",34,72);
        drawEmoji(326,22,50,"creeper");
        
        fill(255, 255, 255);
        text("r u serious m8",50,135);
        drawEmoji(225,85,50,"skeleton");
        
        fill(255, 255, 255);
        text("woah wut o.O",179,168);
        drawEmoji(334,123,50,"slime");
        
        fill(255, 255, 255);
        text("I'm watching you ._.",100,208);
        drawEmoji(41,160,50,"enderman");
        
        fill(255, 255, 255);
        text("y u do dis",40,275);
        drawEmoji(175,225,50,"ghast");
        
        fill(255, 255, 255);
        text("now I'm MADDDD",106,306);
        drawEmoji(287,259,50,"wither");
        
        fill(255,255,255);
        textAlign(CENTER,CENTER);
        text("Click to see the full catalog!",200,360);
        textAlign(LEFT,LEFT);
    } else {
        var emojis = ["creeper","skeleton","slime","enderman","witherskeleton","wither","steve","alex","herobrine","cow","mooshroom","zombie","pig","sheep","zombiepigman","spider","cavespider","magmacube","blaze","ghast","villager","chicken","ocelot","enderdragon","killerrabbit","snowgolem","wolf","silverfish","irongolem","guardian"];
        var emojiSize;
        for (var i = 0; i < emojis.length; i++) {
            if (emojis[i] === "chicken" || emojis[i] === "silverfish" || emojis[i] === "irongolem") {emojiSize = 48;}
            else if (emojis[i] === "ocelot") {emojiSize = 49;}
            else {emojiSize = 50;}
            drawEmoji(100/7+450/7*(i%6),100/7+450/7*floor(i/6),emojiSize,emojis[i]);
        }
        
        fill(255,255,255);
        textAlign(CENTER,CENTER);
        text("Do you recognize them all?",200,360);
        textAlign(LEFT,LEFT);
    }
};