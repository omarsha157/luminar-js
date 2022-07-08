var ipl2k22=[
    {teamName:"MI",matches:7,won:0,loss:7,pts:0,lastFive:["l","l","l","l","l"]},
    {teamName:"GT",matches:6,won:5,loss:1,pts:10,lastFive:["w","w","l","w","w"]},
    {teamName:"csk",matches:7,won:2,loss:5,pts:4,lastFive:["w","l","w","l","l"]},
    {teamName:"RCB",matches:7,won:5,loss:2,pts:10,lastFive:["w","w","l","w","w"]},
    {teamName:"PBKS",matches:7,won:3,loss:4,pts:6,lastFive:["l","l","w","l","w"]},
    {teamName:"RR",matches:6,won:4,loss:2,pts:8,lastFive:["w","l","w","l","w"]},
    {teamName:"KKR",matches:7,won:3,loss:4,pts:6,lastFive:["l","l","l","w","w"]},
    {teamName:"LSG",matches:7,won:4,loss:3,pts:8,lastFive:["l","w","l","w","w"]},
    {teamName:"DC",matches:6,won:3,loss:3,pts:6,lastFive:["l","w","l","l","l"]},
    {teamName:"SRH",matches:6,won:4,loss:2,pts:8,lastFive:["w","w","w","w","w"]},

]

//? total number of teams

// console.log(ipl2k22.length);

//? sort teams wrt pts

ipl2k22.sort((t1,t2) => t2.pts - t1.pts);
// console.log(ipl2k22);

//? which team have highest points

// console.log(ipl2k22[0]);

//? which are the teams who won last two matches consicutively

// console.log(ipl2k22.filter(m => m.lastFive[3] == "w" && m.lastFive[4] == "w"));

// ipl2k22.filter(m => m.lastFive[3] == "w" && m.lastFive[4] == "w").forEach(m => console.log(m));

// ? is there any team with no wins

// console.log(ipl2k22.some(t => t.won == 0));

//? match history of csk

// ? which team never won any matches

// ipl2k22.filter(t => t.won == 0).forEach(t => console.log(t.teamName));

// ? which team never lost

// ipl2k22.filter(t => !(t.lastFive.includes("l")) ).forEach(t => console.log(t.teamName));

// ? csk and mi points

// let miPts = ipl2k22.find(t => t.teamName == "MI").pts;

let cskPts = ipl2k22.find(t => t.teamName == "csk").pts;

ipl2k22.forEach(t => {
    if (t.pts < cskPts) {
        console.log(`csk ahead by ${cskPts - t.pts} points from ${t.teamName}`);
    } else if (t.teamName == "csk") {
        return "";
    } else if (t.pts == cskPts) {
        console.log(`csk and ${t.teamName} has same points`);
    } else {
        console.log(`csk behind by ${cskPts - t.pts} points from ${t.teamName}`);
    }
})


