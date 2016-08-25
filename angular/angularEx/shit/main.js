angular.module('IOM',[]).controller('dankTroller',dankController)
.controller('keyboardCatroller',keyController)
.factory("dankTank",dankFactory)

dankController.$inject = ['dankTank', '$timeout'];
keyController.$inject = ['dankTank'];

function dankController (dankTank,$timeout) {
console.info('dank Memes from the dank tank')
var dCtrl = this;
dCtrl.greetings = "yallo fam"

dCtrl.memes = dankTank.memeList

}


function keyController (dankTank,) {
console.info('I GOT dUh Keys in the dank tank')
var kCtrl = this;
kCtrl.greetings = "Hallo Fam"

kCtrl.memes = dankTank.memeList

$timeout(function() { 
    dCtrl.memes.push({
        name:'Bad luck brian' ,
        about:'bad Luck',
        funniness:4,
        picture:'http://images.complex.com/complex/image/upload/c_limit,fl_progressive,q_80,w_680/izw6zp7lvqe5soaz11gf.jpg'
}),

 6000;
}



function dankFactory (){
   var memeList = [
    {
        name:'Xzibit' ,
        about:'Repeition',
        funniness:3,
        picture:'http://t.qkme.me/3pbd0r.jpg'
    },
    {
        name:'Scumbag steve' ,
        about:'Scumbagginess',
        funniness:0,
        picture:'http://img.memecdn.com/scumbag-steve_fb_735473.jpg'
    },
    {
        name:'PePe' ,
        about:'Shit',
        funniness:0,
        picture:'https://img.ifcdn.com/images/d020fb5c5c1cd4a1a0536496c5b7be2e3b5ede2b0135c5129d29ee96cdb8dbaf_1.jpg'
    },
]
   
    return {
        memeList : memeList,

    }
}

