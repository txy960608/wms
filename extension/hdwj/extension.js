'use strict';
game.import('extension',function(lib,game,ui,get,ai,_status){
//----------------游戏特效·始----------------
var skill_card = {
_AnimationDamage:{
trigger:{player:["damageBegin5","loseMaxHpBegin"]},
filter:function(event,player){
game.extensionFunction.animation_damage(player);
return false;
},
direct:true,
content:function(){},
},
_AnimationuseCard:{
trigger:{player:["useCardBefore","respondBefore"]},
filter:function(event,player){
if(event.card.name=="sha"){
if(event.card.nature=="fire"){
game.extensionFunction.animation_card(player,"sha_fire");
}
else if(event.card.nature=="thunder"){
game.extensionFunction.animation_card(player,"sha_thunder");
}
else if(event.card.nature=="ice"){
game.extensionFunction.animation_card(player,"sha_ice");
}
else if(get.color(event.card)=="black"){
game.extensionFunction.animation_card(player,"sha_black");
}
else {
game.extensionFunction.animation_card(player,"sha_red");
}
if(player.storage.animation_qinglong){
game.extensionFunction.animation_equip(player,"qinglong_skill");
}
}
else if(event.card.name=="shan"){
game.extensionFunction.animation_card(player,"shan");
}
else if(event.card.name=="tao"){
game.extensionFunction.animation_card(player,"tao");
}
else if(event.card.name=="jiu"){
game.extensionFunction.animation_card(player,"jiu");
}
return false;
},
direct:true,
content:function(){},
},
}
var skill_equip = {
xiangle:{
audio:2,
audioname:['re_liushan','ol_liushan'],
trigger:{target:'useCardToBefore'},
forced:true,
filter:function(event,player){
if(event.card.name=='sha'){
game.broadcastAll(function(player){
game.extensionFunction.animation_equip(player,"xiangle");
},player);
return true;
}
},
content:function(){
"step 0"
var eff=get.effect(player,trigger.card,trigger.player,trigger.player);
trigger.player.chooseToDiscard('享乐：弃置一张基本牌，否则杀对'+get.translation(player)+'无效',function(card){
return get.type(card)=='basic';
}).set('ai',function(card){
if(_status.event.eff>0){
return 10-get.value(card);
}
return 0;
}).set('eff',eff);
"step 1"
if(result.bool==false){
trigger.finish();
trigger.untrigger();
}
},
ai:{
effect:{
target:function(card,player,target,current){
if(card.name=='sha'&&get.attitude(player,target)<0){
if(_status.event.name=='xiangle') return;
var bs=player.getCards('h',{type:'basic'});
if(bs.length<2) return 0;
if(player.hasSkill('jiu')||player.hasSkill('tianxianjiu')) return;
if(bs.length<=3&&player.countCards('h','sha')<=1){
for(var i=0;i<bs.length;i++){
if(bs[i].name!='sha'&&get.value(bs[i])<7){
return [1,0,1,-0.5];
}
}
return 0;
}
return [1,0,1,-0.5];
}
}
}
}
},
}
var LoadImage = function(url){
var img = document.createElement("img");
img.style.display = "none";
img.src = url;
document.body.appendChild(img);
}
return {
name:'活动武将',
editable:false,
content:function(config,pack){
lib.rank.rarity.epic.add('bol_yangwan');
lib.rank.rarity.rare.add('bol_zhuling');
lib.rank.rarity.rare.add('bol_wuyan');
game.addCharacterPack({
character:{
bol_yangwan:['female','qun',3,['bolmingxuan','bolxianchou'],['die_audio']],
bol_zhuling:['male','wei',4,['boljixian'],['ext:活动武将/unknown.jpg']],
bol_wuyan:['male','wu',4,['bollanjiang'],['ext:活动武将/unknown.jpg']],
},
characterIntro:{
wuyan:'吾彦，生卒年不详，字士则，吴郡吴县（今江苏苏州）人，三国时期吴国及西晋初年将领。初任通江县吏，后得到大司马陆抗的提拔重用，逐渐升至建平太守。太康元年（280年），西晋灭亡吴国，吾彦投降西晋，被晋武帝司马炎任命为金城太守。后历任敦煌太守、雁门太守、顺阳内史、员外散骑常侍。交州刺史陶璜死后，吾彦出任南中都督、交州刺史，平定各地叛军。在任交州太守的二十多年，威名恩德显著，南方州郡得以安宁。后入朝担任大长秋，最终在任内逝世。',
},
skill:{
bolmingxuan:{
group:'bolmingxuan_die',
init:function(player){
player.storage.bolmingxuan=[];
player.storage.bolmingxuan_die=0;
},
mark:true,
marktext:'眩',
intro:{
content:function(storage){
if(!storage.length) return '尚未记录';
var str=get.translation(storage);
return '已记录'+str;
},
},
trigger:{player:'phaseUseBegin'},
forced:true,
audio:'ext:活动武将:2',
filter:function(event,player){
return player.countCards('h')>0&&game.players.length-player.storage.bolmingxuan.length>1;
},
content:function(){
'step 0'
var list=[],num=0;
player.getCards('h',function(card){
list.add(get.suit(card));
});
num=Math.min(list.length,4,game.players.length+player.storage.bolmingxuan_die-player.storage.bolmingxuan.length-1);
player.chooseCard('h',true,'请选择'+get.cnNumber(num)+'张花色不同的手牌',lib.translate.bolmingxuan_info,num,function(card,player){
return !ui.selected.cards.filter(function(cardx){
return get.suit(cardx,player)==get.suit(card,player);
}).length;
}).set('ai',function(card){
var player=_status.event.player;
return 20-get.value(card);
}).set('complexCard',true);
'step 1'
if(result.bool){
var targets=game.filterPlayer(function(current){
return current!=player&&!player.storage.bolmingxuan.contains(current);
}).randomGets(result.cards.length).sortBySeat();
event.targets=targets;
for(var i=0;i<targets.length;i++){
var target=targets[i];
player.$give(1,target);
target.gain(result.cards[i],player);
}
}
else event.finish();
'step 2'
for(var i=0;i<event.targets.length;i++){
var target=event.targets[i];
player.line(target);
var next=game.createEvent('bolmingxuan_choose',false);
next.player=player;
next.target=target;
next.setContent(lib.skill.bolmingxuan.contentx);
}
},
contentx:function(){
'step 0'
target.chooseToUse(function(card,player,event){
if(get.name(card)!='sha') return false;
return lib.filter.filterCard.apply(this,arguments);
},'暝眩：是否对'+get.translation(player)+'使用一张杀？').set('targetRequired',true).set('complexSelect',true).set('filterTarget',function(card,player,target){
if(target!=_status.event.sourcex&&!ui.selected.targets.contains(_status.event.sourcex)) return false;
return lib.filter.filterTarget.apply(this,arguments);
}).set('sourcex',player);
'step 1'
if(result.bool){
player.storage.bolmingxuan.push(target);
player.syncStorage('bolmingxuan');
event.finish();
}
else if(target.countCards('he')>0) target.chooseCard('he',true,'暝眩：将一张牌交给'+get.translation(player));
'step 2'
if(result.bool) target.give(result.cards,player,true);
player.draw();
},
subSkill:{
die:{
trigger:{global:'dieAfter'},
direct:true,
charlotte:true,
lastDo:true,
filter:function(event,player){
return player.storage.bolmingxuan.contains(event.player);
},
content:function(){
player.storage.bolmingxuan_die++;
},
},
},
},
bolxianchou:{
group:'bolxianchou_recover',
trigger:{player:'damageEnd'},
direct:true,
audio:'ext:活动武将:2',
filter:function(event,player){
return event.source&&game.players.length>2;
},
content:function(){
'step 0'
player.chooseTarget(get.prompt('bolxianchou'),'令一名角色选择是否弃牌并视为对'+get.translation(trigger.source)+'使用一张【杀】',function(card,player,target){
return target!=player&&target!=trigger.source&&target.canUse('sha',trigger.source,false);
}).set('ai',function(target){
if(get.attitude(player,trigger.source)>0) return 0;
var player=_status.event.player,card={name:'sha'},source=trigger.source;
if(target.hasSha()){
var eff1=get.effect(source,card,target,target);
if(eff1>0) return get.effect(source,card,target,player);
}
return (target!=player)?(Math.random()*get.attitude(player,target)):0;
});
'step 1'
if(result.bool){
var target=result.targets[0];
event.target=target;
player.logSkill('bolxianchou',target);
target.chooseCard('he','是否弃置一张牌，视为对'+get.translation(trigger.source)+'使用一张普通【杀】').set('ai',function(card){
if(_status.event.goon) return 10-get.value(card);
return 0;
}).set('goon',get.effect(trigger.source,{name:'sha'},target,player)>0).set('filterCard',lib.filter.cardDiscardable);
}
else event.finish();
'step 2'
if(result.bool){
target.discard(result.cards[0]);
target.useCard({name:'sha',isCard:true},trigger.source,false).card.bolxianchou=true;
}
else event.finish();
},
subSkill:{
recover:{
trigger:{global:'damageEnd'},
forced:true,
direct:true,
charlotte:true,
filter:function(event,player){
return event.card&&event.card.bolxianchou;
},
content:function(){
player.recover();
},
},
},
},
boljixian:{
group:['boljixian_draw','boljixian_lose'],
trigger:{player:'phaseDrawAfter'},
filter:function(event,player){
return game.hasPlayer(function(current){
return current!=player&&(current.isHealthy()||current.getEquip(2)||current.getSkills().length>player.getSkills().length);
});
},
direct:true,
content:function(){
'step 0'
player.chooseTarget(get.prompt2('boljixian'),function(card,player,target){
if(player==target) return false;
return target.isHealthy()||target.getEquip(2)||target.getSkills().length>player.getSkills().length;
}).set('ai',function(target){
return -get.attitude(_status.event.player,target);
});
'step 1'
if(result.bool){
player.logSkill('boljixian',result.targets[0]);
player.useCard({name:'sha',isCard:true},result.targets[0]).card.boljixian=true;
}
else event.finish();
},
subSkill:{
draw:{
trigger:{player:'useCard'},
forced:true,
popup:false,
filter:function(event,player){
return event.card&&event.card.boljixian;
},
content:function(){
if(trigger.addCount!==false){
trigger.addCount=false;
var stat=player.getStat('card');
if(stat&&stat.sha) stat.sha--;
}
var num=0;
if(trigger.targets[0].isHealthy()) num++;
if(trigger.targets[0].getEquip(2)) num++;
if(trigger.targets[0].getSkills().length>player.getSkills().length) num++;
player.draw(num);
},
},
lose:{
trigger:{player:'useCardAfter'},
forced:true,
popup:false,
filter:function(event,player){
return event.card&&event.card.boljixian&&!player.getHistory('sourceDamage',function(evt){
return evt.card==event.card;
}).length;
},
content:function(){
player.loseHp();
},
},
},
},
bollanjiang:{
trigger:{player:'phaseJieshuBegin'},
check:function(event,player){
return true;
},
content:function(){
'step 0'
event.list=game.filterPlayer(function(current){
return current.countCards('h')>=player.countCards('h');
});
event.list.sort(lib.sort.seat);
player.line(event.list);
event.num=0;
'step 1'
var target=event.list[event.num];
target.chooseControl('摸牌','拒绝').set('prompt','瀾江：是否令'+get.translation(player)+'摸一张牌？').set('ai',function(){
if(get.attitude(target,player)>=0||target.countCards('h')==player.countCards('h')) return '摸牌';
return '拒绝';
});
'step 2'
if(!result.control) result.control=='拒绝';
var target=event.list[event.num];
if(result.control=='摸牌'){
target.line(player);
player.draw();
}
else{
target.chat('但是我拒绝');
game.delay();
}
if(event.num+1<event.list.length){
event.num++;
event.goto(1);
}
'step 3'
player.chooseTarget('瀾江：是否对其中一名手牌数等于你的角色造成1点伤害？',function(card,player,target){
return event.list.contains(target)&&target.countCards('h')==player.countCards('h');
}).set('ai',function(target){
var player=_status.event.player;
return get.damageEffect(target,player,player);
});
'step 4'
if(result.bool){
player.line(result.targets[0]);
result.targets[0].damage();
}
'step 5'
player.chooseTarget('瀾江：是否令其中一名手牌数小于你的角色摸一张牌？',function(card,player,target){
return event.list.contains(target)&&target.countCards('h')<player.countCards('h');
}).set('ai',function(target){
var player=_status.event.player;
return get.attitude(player,target);
});
'step 6'
if(result.bool){
player.line(result.targets[0]);
result.targets[0].draw();
}
},
},
},
translate:{
bol_yangwan:'手杀杨婉',
bolmingxuan:'瞑眩',
bolmingxuan_info:'锁定技，出牌阶段开始时，若你有牌，你须选择X张花色各不相同的手牌，并将这些牌交给随机X名未被“瞑眩”记录的其他角色各一张牌（X为场上未被“瞑眩”记录的其他角色数）。然后这些角色依次选择一项：①对你使用一张【杀】，然后记录该角色；②交给你一张牌，且你摸一张牌。',
bolxianchou:'陷仇',
bolxianchou_info:'当你受到伤害后，你可以选择一名非伤害来源的其他角色，其可以弃置一张牌并视为对伤害来源使用一张普通【杀】，若此【杀】造成伤害，你回复一点体力。',
bol_zhuling:'OL朱灵',
boljixian:'急陷',
boljixian_info:'摸牌阶段结束时，你可以视为对一名至少满足以下条件之一的其他角色使用一张无距离限制的【杀】并摸X张牌（X为其满足的条件数）：满体力，装备了防具，技能数大于你。若此【杀】未造成伤害，你失去一点体力。',
bol_wuyan:'吾彦',
bollanjiang:'瀾江',
bollanjiang_info:'结束阶段，你可以令所有手牌数不小于你的角色依次选择是否令你摸一张牌。选择完毕后，你可以对其中一名手牌数等于你的角色造成1点伤害，然后你可以令其中一名手牌数小于你的角色摸一张牌。',
},
},'部分新武将');
//关于删除扩展
delete lib.extensionMenu['extension_活动武将'].delete;
//----------------游戏特效·始----------------
for(var i in lib.config.extensionAnimation.skill){
for(var j=0;j<=lib.config.extensionAnimation.skill[i];j++){
var SRC = lib.assetURL + "extension/活动武将/skill/" + i +"/"+ j + ".png";
LoadImage(SRC);
}
}
for(var i in lib.config.extensionAnimation.card){
for(var j=0;j<=lib.config.extensionAnimation.card[i];j++){
var SRC = lib.assetURL + "extension/活动武将/card/" + i +"/"+ j + ".png";
LoadImage(SRC);
}
}
for(var i in lib.config.extensionAnimation.equip){
for(var j=0;j<=lib.config.extensionAnimation.equip[i];j++){
var SRC = lib.assetURL + "extension/活动武将/equip/" + i +"/"+ j + ".png";
LoadImage(SRC);
}
}
for(var i in lib.config.extensionAnimation.judge){
for(var j=0;j<=lib.config.extensionAnimation.judge[i];j++){
var SRC = lib.assetURL + "extension/活动武将/judge/" + i +"/"+ j + ".png";
LoadImage(SRC);
}
}
for(var i=0;i<lib.config.extensionAnimation.damage;i++){
var SRC = lib.assetURL + "extension/活动武将/damage/" +i+ ".png";
LoadImage(SRC);
}
lib.arenaReady.push(function(){
if(lib.config.extensionAnimation.card){
for(var i in skill_card){
lib.skill[i] = skill_card[i];
}
}
if(lib.config.extensionAnimation.equip){
for(var i in skill_equip){
lib.skill[i] = skill_equip[i];
}
}
});
//----------------游戏特效·末----------------
//关于更新
if(pack.changelog) game.showExtensionChangeLog(pack.changelog);
window.HuoDongOpenLoading=function(){
var dialog=ui.create.div('.HuoDong-loading',document.body);
var text=ui.create.div('.HuoDong-loading-text',dialog);
dialog.subViews={text};
return dialog;
};
game.HasExtension=function(ext){
return lib.config.extensions&&lib.config.extensions.contains(ext);
};
game.DaoRuPeiJian=function(){
var loading=window.HuoDongOpenLoading();
loading.subViews.text.innerHTML='正在导入配件，请稍后。。。。。。';
var fileToLoad='extension/活动武将/HuoDong.zip';
if(game.readFile){
game.readFile(fileToLoad,function(data){
game.importExtension(data,function(){
alert('配件导入完成，游戏即将重启');
game.reload();
});
});
}
};
if(!game.HasExtension('活动配件')){
setTimeout(function(){
game.DaoRuPeiJian();
},1000);
};
get.is.double=function(name,array){
if(!lib.character[name]||!lib.character[name][4]) return false;
for(var i of lib.character[name][4]){
if(i.indexOf('doublegroup:')==0){
if(!array) return true;
return i.split(':').slice(1);
}
}
return false;
};
if(get.mode()=='single'&&['normal2']) lib.translate.shuiyanqijunx_info='出牌阶段，对一名其他角色使用。目标角色选择一项：1、弃置装备区里的所有牌；2、受到你对其造成的1点雷电伤害。';
else lib.translate.shuiyanqijunx_info='出牌阶段，对一名装备区里有牌的其他角色使用。目标角色选择一项：1、弃置装备区里的所有牌；2、受到你对其造成的1点雷电伤害。';
//precGuoZhan(分界线，便于我搜过来)
//国战武将技能修复
if(get.mode()=='guozhan'){
lib.skill.gzgongxiu.audio='gongxiu';
lib.skill.gzzhuosheng.audio='zhuosheng';
//写满技能的天书
lib.skill.gzjinghe={
group:'xiemanjinengdetianshu',
init:function(player){
player.unmarkSkill('xiemanjinengdetianshu');
},
onremove:function(player){
player.unmarkSkill('xiemanjinengdetianshu');
},
audio:'jinghe',
enable:'phaseUse',
usable:1,
filter:function(event,player){
return player.maxHp>0&&player.countCards('h')>0;
},
selectCard:function(){
var max=_status.event.player.maxHp;
if(ui.selected.targets.length) return [ui.selected.targets.length,max];
return [1,max];
},
selectTarget:function(){
return ui.selected.cards.length;
},
filterTarget:function(card,player,target){
return !target.isUnseen();
},
filterCard:function(card){
if(ui.selected.cards.length){
var name=get.name(card);
for(var i of ui.selected.cards){
if(get.name(i)==name) return false;
}
}
return true;
},
position:'h',
check:function(card){
var player=_status.event.player;
if(game.countPlayer(function(current){
return get.attitude(player,current)>0&&!current.isUnseen();
})>ui.selected.cards.length) return 1;
return 0;
},
complexCard:true,
discard:false,
lose:false,
delay:false,
multitarget:true,
multiline:true,
content:function(){
'step 0'
player.showCards(cards,get.translation(player)+'发动了【经合】');
event.skills=lib.skill.gzjinghe.derivation.randomGets(targets.length);
if(!player.hasSkill('gzjinghe_clear')) player.addTempSkill('gzjinghe_clear',{player:'phaseBegin'});
event.targets.sortBySeat();
event.num=0;
'step 1'
event.target=targets[num];
event.num++;
event.target.chooseControl(event.skills,'cancel2').set('choiceList',event.skills.map(function(i){
return '<div class="skill">【'+get.translation(lib.translate[i+'_ab']||get.translation(i).slice(0,2))+'】</div><div>'+get.skillInfoTranslation(i,player)+'</div>';
})).set('displayIndex',false).set('prompt','选择获得一个技能');
'step 2'
var skill=result.control;
if(skill!='cancel2'){
event.skills.remove(skill);
target.addAdditionalSkill('gzjinghe_'+player.playerid,skill);
target.popup(skill);
game.log(target,'获得了技能','#g【'+get.translation(skill)+'】');
}
if(event.num<event.targets.length) event.goto(1);
if(target!=game.me&&!target.isOnline2()) game.delayx();
},
ai:{
threaten:2,
order:10,
result:{
target:1,
},
},
derivation:['releiji','nhyinbing','nhhuoqi','nhguizhu','nhxianshou','nhlundao','nhguanyue','nhyanzheng'],
subSkill:{
clear:{
onremove:function(player){
game.countPlayer(function(current){
current.removeAdditionalSkill('gzjinghe_'+player.playerid);
});
},
},
},
},
lib.translate.gzjinghe_info='出牌阶段限一次，你可以展示至多X张牌名各不相同的手牌（X为你的体力上限），并选择等量有明置武将牌的角色，这些角色可以依次从<span class=\"texiaotext\" style=\"color:#FFD700\">写满技能的天书</span>中选择并获得一个技能直到你的下回合开始。';
//周淑怡国战版
lib.skill.gzzhukou={
audio:'zhukou',
trigger:{source:'damageSource'},
preHidden:true,
filter:function(event,player){
if(!player.getHistory('useCard').length) return false;
var evt=event.getParent('phaseUse');
if(!evt||!evt.player) return false;
return player.getHistory('sourceDamage',function(evtx){
return evtx.getParent('phaseUse')==evt;
}).indexOf(event)==0;
},
frequent:true,
content:function(){
player.draw(Math.min(player.getHistory('useCard').length,5));
},
},
lib.translate.gzduannian_info='出牌阶段结束时，若你有手牌，你可以弃置所有手牌，然后将手牌摸至体力上限。';
//司马昭〖反馈〗技能配音
lib.skill.gzsuzhi={
audio:2,
derivation:'gzfankui',
mod:{
targetInRange:function(card,player,target){
if(player==_status.currentPhase&&player.countMark('gzsuzhi_count')<3&&get.type2(card)=='trick') return true;
},
},
trigger:{player:'phaseJieshuBegin'},
forced:true,
filter:function(event,player){
return player.countMark('gzsuzhi_count')<3;
},
content:function(){
player.addTempSkill('gzfankui',{player:'phaseBegin'});
},
group:['gzsuzhi_damage','gzsuzhi_draw','gzsuzhi_gain'],
preHidden:['gzsuzhi_damage','gzsuzhi_draw','gzsuzhi_gain'],
subSkill:{
damage:{
audio:'gzsuzhi',
trigger:{source:'damageBegin1'},
forced:true,
filter:function(event,player){
return player==_status.currentPhase&&player.countMark('gzsuzhi_count')<3&&event.card&&
(event.card.name=='sha'||event.card.name=='juedou')&&event.getParent().type=='card';
},
content:function(){
trigger.num++;
player.addTempSkill('gzsuzhi_count');
player.addMark('gzsuzhi_count',1,false);
},
},
draw:{
audio:'gzsuzhi',
trigger:{player:'useCard'},
forced:true,
filter:function(event,player){
return player==_status.currentPhase&&player.countMark('gzsuzhi_count')<3&&get.type2(event.card)=='trick';
},
content:function(){
player.draw();
player.addTempSkill('gzsuzhi_count');
player.addMark('gzsuzhi_count',1,false);
},
},
gain:{
audio:'gzsuzhi',
trigger:{global:'loseAfter'},
forced:true,
filter:function(event,player){
if(player!=_status.currentPhase||event.type!='discard'||player==event.player||player.countMark('gzsuzhi_count')>=3) return false;
return event.cards2&&event.cards2.filterInD('d').length>0;
},
content:function(){
'step 0'
player.addTempSkill('gzsuzhi_count');
player.addMark('gzsuzhi_count',1,false);
if(trigger.delay==false) game.delay();
'step 1'
var cards=trigger.cards2.filterInD('d');
if(cards.length==1){
event._result={
bool:true,
links:cards,
}
}
else player.chooseButton(['夙智：选择获得一张牌',cards],true);
'step 2'
if(result.bool) player.gain(result.links[0],'gain2');
},
},
count:{
onremove:true,
},
},
},
//祢衡添加ai，暗置状态下弃牌阶段不发动此技能
lib.skill.gzrekuangcai={
audio:'gzkuangcai',
forced:true,
trigger:{player:'phaseDiscardBegin'},
filter:function(event,player){
return player.getHistory('useCard').length&&!player.getHistory('sourceDamage').length;
},
check:function(event,player){
return false;
},
content:function(){
player.addTempSkill('gzrekuangcai_less');
},
mod:{
targetInRange:function(card,player){
if(player==_status.currentPhase) return true;
},
cardUsable:function(card,player){
if(player==_status.currentPhase) return Infinity;
},
},
subSkill:{
less:{
marktext:'狂才',
mark:true,
intro:{content:'本回合手牌上限-1'},
mod:{
maxHandcard:function(player,num){
return num-1;
},
},
charlotte:true,
},
},
},
//孙綝免伤对象修复（为什么和审配一样不弄完整呢）
lib.skill.gzxiongnve.subSkill.effect3={
charlotte:true,
audio:'gzxiongnve',
mark:true,
intro:{
content:'受到其他角色造成的伤害-1',
},
trigger:{player:'damageBegin1'},
filter:function (event,player){
if(event.source&&event.source!=player) return true;
return false;
},
forced:true,
content:function(){
trigger.num--;
},
ai:{
effect:{
target:function(card,player,target){
if(player.hasSkillTag('jueqing',false,target)) return;
var num=get.tag(card,'damage');
if(num){
if(num>1) return 0.5;
return 0;
}
}
}
},
},
lib.skill.yigui={
hiddenCard:function(player,name){
var storage=player.storage.yigui;
if(name=='shan'||name=='wuxie'||!storage||!storage.character.length||storage.used.contains(name)||!lib.inpile.contains(name)) return false;
return true;
},
init:function(player,skill){
if(!player.storage.skill) player.storage[skill]={
character:[],
used:[],
}
},
enable:'chooseToUse',
filter:function(event,player){
if(event.type=='wuxie'||event.type=='respondShan') return false;
var storage=player.storage.yigui;
if(!storage||!storage.character.length) return false;
if(event.type=='dying'){
if((!event.filterCard({name:'tao'},player,event)||storage.used.contains('tao'))&&
(!event.filterCard({name:'jiu'},player,event)||storage.used.contains('jiu'))) return false;
var target=event.dying;
if(target.identity=='unknown'||target.identity=='ye') return true;
for(var i=0;i<storage.character.length;i++){
var group=lib.character[storage.character[i]][1];
if(group=='ye'||target.identity==group) return true;
var double=get.is.double(storage.character[i],true);
if(double&&double.contains(target.identity)) return true;
}
return false;
}
else return true;
},
chooseButton:{
select:2,
dialog:function(event,player){
var dialog=ui.create.dialog('役鬼','hidden');
dialog.add([player.storage.yigui.character,'character']);
var list=lib.inpile;
var list2=[];
for(var i=0;i<list.length;i++){
var name=list[i];
if(name=='shan'||name=='wuxie') continue;
var type=get.type(name);
if(name=='sha'){
list2.push(['基本','','sha']);
list2.push(['基本','','sha','fire']);
list2.push(['基本','','sha','thunder']);
}
else if(type=='basic'){
list2.push(['基本','',list[i]]);
}
else if(type=='trick'){
list2.push(['锦囊','',list[i]]);
}
}
dialog.add([list2,'vcard']);
return dialog;
},
check:function(button){
if(ui.selected.buttons.length){
var evt=_status.event.getParent('chooseToUse');
var name=button.link[2];
var group=lib.character[ui.selected.buttons[0].link][1];
var double=get.is.double(ui.selected.buttons[0].link,true);
var player=_status.event.player;
if(evt.type=='dying'){
if(evt.dying!=player&&get.effect(evt.dying,{name:name},player,player)<=0) return 0;
if(name=='jiu') return 2.1;
return 2;
}
if(!['tao','juedou','guohe','shunshou','wuzhong','xietianzi','yuanjiao','taoyuan','wugu','wanjian','nanman','huoshaolianying'].contains(name)) return 0;
if(['taoyuan','wugu','wanjian','nanman','huoshaolianying'].contains(name)){
var list=game.filterPlayer(function(current){
return (group=='ye'||current.identity=='unknown'||current.identity=='ye'||current.identity==group||(double&&double.contains(current.identity)))&&player.canUse({name:name},current);
});
var num=0;
for(var i=0;i<list.length;i++){
num+=get.effect(list[i],{name:name},player,player);
}
if(num<=0) return 0;
if(list.length>1) return (1.7+Math.random())*Math.max(num,1);
}
}
return 1+Math.random();
},
filter:function(button,player){
var evt=_status.event.getParent('chooseToUse');
if(!ui.selected.buttons.length){
if(typeof button.link!='string') return false;
if(evt.type=='dying'){
if(evt.dying.identity=='unknown'||evt.dying.identity=='ye') return true;
var double=get.is.double(button.link,true);
return evt.dying.identity==lib.character[button.link][1]||lib.character[button.link][1]=='ye'||(double&&double.contains(evt.dying.identity));
}
return true;
}
else{
if(typeof ui.selected.buttons[0].link!='string') return false;
if(typeof button.link!='object') return false;
var name=button.link[2];
if(player.storage.yigui.used.contains(name)) return false;
var card={name:name};
if(button.link[3]) card.nature=button.link[3];
var info=get.info(card);
var group=lib.character[ui.selected.buttons[0].link][1];
var double=get.is.double(ui.selected.buttons[0].link,true);
if(evt.type=='dying'){
return evt.filterCard(card,player,evt);
}
if(!lib.filter.filterCard(card,player,evt)) return false;
else if(evt.filterCard&&!evt.filterCard(card,player,evt)) return false;
if(info.changeTarget){
var list=game.filterPlayer(function(current){
return player.canUse(card,current);
});
for(var i=0;i<list.length;i++){
var giveup=false;
var targets=[list[i]];
info.changeTarget(player,targets);
for(var j=0;j<targets.length;j++){
if(group!='ye'&&targets[j].identity!='unknown'&&targets[j].identity!='ye'&&targets[j].identity!=group&&(!double||!double.contains(targets[j].identity))){
giveup=true;
break;
}
}
if(giveup) continue;
if(giveup==false) return true;
}
return false;
}
else return game.hasPlayer(function(current){
return evt.filterTarget(card,player,current)&&(group=='ye'||current.identity=='unknown'||current.identity=='ye'||current.identity==group||(double&&double.contains(current.identity)));
});
}
},
backup:function(links,player){
var name=links[1][2];
var nature=links[1][3]||null;
var character=links[0];
var group=lib.character[character][1];
var next={
character:character,
group:group,
filterCard:function(){
return false;
},
selectCard:-1,
complexCard:true,
check:function(){return 1},
popname:true,
audio:'yigui',
viewAs:{
name:name,
nature:nature,
isCard:true,
},
filterTarget:function(card,player,target){
var xx=lib.skill.yigui_backup;
var evt=_status.event;
var group=xx.group;
var double=get.is.double(xx.character,true);
var info=get.info(card);
if((!(info.singleCard&&ui.selected.targets.length))&&group!='ye'&&target.identity!='unknown'&&target.identity!='ye'&&target.identity!=group&&(!double||!double.contains(target.identity))) return false;
if(info.changeTarget){
var targets=[target];
info.changeTarget(player,targets);
for(var i=0;i<targets.length;i++){
if(group!='ye'&&targets[i].identity!='unknown'&&targets[i].identity!='ye'&&targets[i].identity!=group&&(!double||!double.contains(targets[i].identity))) return false;
}
}
if(evt._backup&&evt._backup.filterTarget) return evt._backup.filterTarget(card,player,target);
return lib.filter.filterTarget(card,player,target);
},
onuse:function(result,player){
player.logSkill('yigui');
var character=lib.skill.yigui_backup.character;
player.flashAvatar('yigui',character);
player.storage.yigui.character.remove(character);
_status.characterlist.add(character);
game.log(player,'从「魂」中移除了','#g'+get.translation(character));
player.syncStorage('yigui');
player.updateMarks('yigui');
player.storage.yigui.used.add(result.card.name);
},
};
return next;
},
prompt:function(links,player){
var name=links[1][2];
var character=links[0];
var nature=links[1][3];
return '移除「'+get.translation(character)+'」并视为使用'+(get.translation(nature)||'')+get.translation(name);
},
},
//OL国战吕范左慈都削了，为什么还不动刀曹丕?[doge]
//算了回调吧
group:['yigui_init','yigui_refrain','yigui_shan','yigui_wuxie'],
//group:['yigui_init','yigui_refrain'],
subSkill:{
init:{
audio:'yigui',
trigger:{player:'showCharacterAfter'},
forced:true,
filter:function(event,player){
return event.toShow.contains('gz_zuoci')&&!player.storage.yigui_init;
},
content:function(){
player.storage.yigui_init=true;
var list=[];
list.addArray(_status.characterlist.randomRemove(2));
if(list.length){
player.storage.yigui.character.addArray(list);
player.syncStorage('yigui');
player.updateMarks('yigui');
game.log(player,'获得了两张','#g「魂」');
game.broadcastAll(function(player,list){
var cards=[];
if(player.isUnderControl(true)){
for(var i=0;i<list.length;i++){
var cardname='huashen_card_'+list[i];
lib.card[cardname]={
fullimage:true,
image:'character:'+list[i]
}
lib.translate[cardname]=get.rawName2(list[i]);
cards.push(game.createCard(cardname,'',''));
}
}
else{
for(var i=0;i<list.length;i++){
var cardname='huashen_unknown';
lib.card[cardname]={
fullimage:true,
image:'ext:活动武将/huashen_unknown.jpg'
}
lib.translate[cardname]=' ';
cards.push(game.createCard(cardname,'',''));
}
}
player.$draw(cards,'nobroadcast');
},player,list);
}
},
},
refrain:{
trigger:{global:'phaseBefore'},
forced:true,
silent:true,
popup:false,
firstDo:true,
content:function(){player.storage.yigui.used=[]},
},
shan:{
hiddenCard:function(player,name){
var storage=player.storage.yigui;
return name=='shan'&&storage&&storage.character.length&&!storage.used.contains(name)&&lib.inpile.contains(name);
},
enable:'chooseToUse',
filter:function(event,player){
if(event.type!='respondShan') return false;
var storage=player.storage.yigui;
if(!storage||!storage.character.length||storage.used.contains('shan')) return false;
return event.filterCard({name:'shan'},player,event);
},
chooseButton:{
dialog:function(event,player){
var dialog=ui.create.dialog('役鬼','hidden');
dialog.add([player.storage.yigui.character,'character']);
return dialog;
},
check:function(button){
return 1/(1+game.countPlayer(function(current){
return current.identity==button.link;
}));
},
backup:function(links,player){
var character=links[0];
var next={
character:character,
filterCard:function(){
return false;
},
selectCard:-1,
complexCard:true,
check:function(){return 1},
popname:true,
audio:'yigui',
viewAs:{
name:'shan',
isCard:true,
},
onuse:function(result,player){
player.logSkill('yigui');
var character=lib.skill.yigui_shan_backup.character;
player.flashAvatar('yigui',character);
player.storage.yigui.character.remove(character);
_status.characterlist.add(character);
game.log(player,'从「魂」中移除了','#g'+get.translation(character));
player.syncStorage('yigui');
player.updateMarks('yigui');
player.storage.yigui.used.add(result.card.name);
},
};
return next;
},
},
ai:{
respondShan:true,
skillTagFilter:function(player){
var storage=player.storage.yigui;
if(!storage||!storage.character.length||storage.used.contains('shan')) return false;
},
order:0.1,
result:{
player:1,
},
},
},
wuxie:{
hiddenCard:function(player,name){
var storage=player.storage.yigui;
return name=='wuxie'&&storage&&storage.character.length&&!storage.used.contains(name)&&lib.inpile.contains(name);
},
enable:'chooseToUse',
filter:function(event,player){
if(event.type!='wuxie') return false;
var storage=player.storage.yigui;
if(!storage||!storage.character.length||storage.used.contains('wuxie')) return false;
return event.filterCard({name:'wuxie'},player,event);
},
chooseButton:{
dialog:function(event,player){
var dialog=ui.create.dialog('役鬼','hidden');
dialog.add([player.storage.yigui.character,'character']);
return dialog;
},
check:function(button){
return 1/(1+game.countPlayer(function(current){
return current.identity==button.link;
}));
},
backup:function(links,player){
var character=links[0];
var next={
character:character,
filterCard:function(){
return false;
},
selectCard:-1,
complexCard:true,
check:function(){return 1},
popname:true,
audio:'yigui',
viewAs:{
name:'wuxie',
isCard:true,
},
onuse:function(result,player){
player.logSkill('yigui');
var character=lib.skill.yigui_wuxie_backup.character;
player.flashAvatar('yigui',character);
player.storage.yigui.character.remove(character);
_status.characterlist.add(character);
game.log(player,'从「魂」中移除了','#g'+get.translation(character));
player.syncStorage('yigui');
player.updateMarks('yigui');
player.storage.yigui.used.add(result.card.name);
},
};
return next;
},
},
ai:{
order:0.1,
result:{
player:1,
},
},
},
},
ai:{
order:function(){
return 1+10*Math.random();
},
result:{
player:1,
},
},
mark:true,
marktext:'魂',
intro:{
onunmark:function(storage,player){
_status.characterlist.addArray(storage.character);
storage.character=[];
},
mark:function(dialog,storage,player){
if(storage&&storage.character.length){
if(player.isUnderControl(true)){
dialog.addSmall([storage.character,'character']);
}
else{
return '共有'+get.cnNumber(storage.character.length)+'张「魂」'
}
}
else{
return '没有「魂」';
}
},
content:function(storage,player){
return '共有'+get.cnNumber(storage.character.length)+'张「魂」'
},
markcount:function(storage,player){
if(storage&&storage.character) return storage.character.length;
return 0;
},
},
},
lib.skill.jihun={
trigger:{player:'damageEnd',global:'dyingAfter'},
audio:2,
frequent:true,
filter:function(event,player){
return event.name=='damage'||(event.player.isAlive()&&!event.player.isFriendOf(player))
},
content:function(){
var list=[];
list.addArray(_status.characterlist.randomRemove(1));
if(list.length){
player.storage.yigui.character.addArray(list);
player.syncStorage('yigui');
player.updateMarks('yigui');
game.log(player,'获得了一张','#g「魂」');
game.broadcastAll(function(player,list){
var cards=[];
if(player.isUnderControl(true)){
for(var i=0;i<list.length;i++){
var cardname='huashen_card_'+list[i];
lib.card[cardname]={
fullimage:true,
image:'character:'+list[i]
}
lib.translate[cardname]=get.rawName2(list[i]);
cards.push(game.createCard(cardname,'',''));
}
}
else{
for(var i=0;i<list.length;i++){
var cardname='huashen_unknown';
lib.card[cardname]={
fullimage:true,
image:'ext:活动武将/huashen_unknown.jpg'
}
lib.translate[cardname]=' ';
cards.push(game.createCard(cardname,'',''));
}
}
player.$draw(cards,'nobroadcast');
},player,list);
}
},
},
lib.translate.yigui_info='当你首次明置此武将牌时，你将剩余武将牌堆的两张牌扣置于游戏外，称为「魂」；你可以展示一张「魂」并将其置入剩余武将牌堆，视为使用了一张本回合内未以此法使用过的基本牌或普通锦囊牌。（若此牌需要指定目标，则目标须为未确定势力的角色或野心家或与此「魂」势力相同的角色）';
lib.translate.jihun_info='当你受到伤害后，或与你势力不同的角色脱离濒死状态后，你可以将剩余武将牌堆的一张牌当做「魂」扣置于游戏外。';
}
//点将单挑添加人数胜负结算
if(get.mode()=='single'&&['dianjiang2']){
game.showIdentity(true);
lib.translate.zhu='先';
lib.translate.fan='后';
lib.translate.zhu2='先手';
lib.translate.fan2='后手';
get.attitude=function(from,to){
var identity1=from.identity,
identity2=to.identity;
switch(identity1){
case 'zhu':
switch(identity2){
case 'zhu':return 10;
case 'fan':return -10;
}
break;
case 'fan':
switch(identity2){
case 'zhu':return -10;
case 'fan':return 10;
}
break;
}
};
game.checkResult=function(){
if(get.population('zhu')==0){
if(game.me.identity='fan') game.over(true);
else game.over(false);
}
else if(get.population('fan')==0){
if(game.me.identity='zhu') game.over(true);
else game.over(false);
}
}
};
//设置稀有度
if(lib.rank){
var retrieveFromTierMaker=function(){
var result=$('.tier.sort').map(function(){
var res=$(this).children().map(function(){return $(this).css('background-image').match(/jlsg\w+(?=jpg)/);});
return res;
});
result=result.toArray().map(ss=>ss.toArray());
var ranks=['s','ap','a','am','bp','b','bm','c','d'];
var A={};
for(var i=0;i!=result.length;++i){
A[ranks[i]]=result[i];
}
return JSON.stringify(A);
};
//鄙人用脚设置的稀有度，只图博君一笑
var rank={
rarity:{
//传说
legend:[
'diy_lvmeng',
'golden_zuoci',
'BT_puyuan',
'ol_chunyuqiong',
'NS_chenlong',
'NS_youji',
'NS_nianshouD',
'NS_nianshouE',
'NS_nianshouN',
'lz_sufei',
'FD_huaxiong'
],
//史诗
epic:[
'diy_liuhong',
'FD_sunjian',
'FD_feixiongjunyou',
'FD_fengyaojun',
'NS_yinhu',
'NS_wuma',
'NS_zishu',
'lz_liuqi',
'lz_tangzi',
'FD_dongyue'
],
//稀有
rare:[
'ol_sp_xuyou',
'GD_gaolan',
'FD_niufudongxie',
'FD_guosi',
'FD_lijue',
'NS_xugou',
'NS_weiyang',
'NS_sishe',
'NS_haizhu',
'NS_shenhou',
'FD_feixiongjunzuo'
],
//普通
common:[
],
//平凡
junk:[
'NS_chouniu',
'NS_maotu',
'FD_baolvejun'
],
},
//出场率
s:[
'golden_zuoci',
'BT_puyuan',
'diy_liuhong',
'ol_chunyuqiong',
'lz_sufei',
],
ap:[
'FD_sunjian',
'FD_feixiongjunyou',
'FD_fengyaojun',
'NS_yinhu',
'NS_wuma',
'NS_zishu',
'lz_liuqi',
'lz_tangzi',
'FD_dongyue'
],
a:[
'ol_sp_xuyou',
'GD_gaolan',
'FD_niufudongxie',
'FD_guosi',
'FD_lijue',
'NS_xugou',
'NS_weiyang',
'NS_sishe',
'NS_haizhu',
'NS_shenhou',
'FD_feixiongjunzuo'
],
am:[
],
bp:[
],
b:[
],
bm:[
],
c:[
],
d:[
'diy_lvmeng',
'NS_chouniu',
'NS_maotu',
'FD_baolvejun'
],
};
/*
for(var name of Object.keys(lib.characterPack['qianlizoudanjicharacter'])){
if(!Object.keys(rank.rarity).some(rarity=>rank.rarity[rarity].contains(name))){
rank.rarity.legend.push(name);
}
}
for(var name of Object.keys(lib.characterPack['decadeQiHuan'])){
if(!Object.keys(rank.rarity).some(rarity=>rank.rarity[rarity].contains(name))){
rank.rarity.legend.push(name);
}
}
*/
for(var name of Object.keys(lib.characterPack['WeChatkill'])){
if(!Object.keys(rank.rarity).some(rarity=>rank.rarity[rarity].contains(name))){
rank.rarity.legend.push(name);
}
}
for(var name of Object.keys(lib.characterPack['huodongcharacter'])){
if(!Object.keys(rank.rarity).some(rarity=>rank.rarity[rarity].contains(name))){
rank.rarity.rare.push(name);
}
}
for(var name of Object.keys(lib.characterPack['hezongkangqincharacter'])){
if(!Object.keys(rank.rarity).some(rarity=>rank.rarity[rarity].contains(name))){
rank.rarity.epic.push(name);
}
}
var addRank=function(rank){
if(!lib.rank)return;
for(var i in rank){
if(i=='rarity') continue;
lib.rank[i].addArray(rank[i]);
}
if(rank.rarity&&lib.rank.rarity){
for(var i in rank.rarity){
if(lib.rank.rarity[i]===undefined){
lib.rank.rarity[i]=[];
}
lib.rank.rarity[i].addArray(rank.rarity[i]);
}
}
};
addRank(rank);
}
//代码选自[配音扩展]，为保证纯三国玩家的游戏体验，将键社神武将移至DIY包
if(config.keymove){
delete lib.characterSort.extra.extra_key;
delete lib.characterPack.extra.key_kagari;
delete lib.character.key_kagari;
delete lib.characterPack.extra.key_shiki;
delete lib.character.key_shiki;
delete lib.characterPack.extra.db_key_hina;
delete lib.character.db_key_hina;
if(get.mode()=='guozhan') delete lib.characterPack.mode_guozhan.gz_key_ushio;
if(get.mode()=='guozhan') delete lib.character.gz_key_ushio;
lib.characterSort.diy.bilibili_key=['key_kagari','key_shiki','db_key_hina'];
if(get.mode()=='guozhan') lib.characterSort.diy.bilibili_key.push('key_ushio');
lib.characterPack.diy.key_kagari=['female','shen',3,['kagari_zongsi'],[]];
lib.characterPack.diy.key_shiki=['female','shen','3/5',['shiki_omusubi'],[]];
lib.characterPack.diy.db_key_hina=['female','key',3,['hina_shenshi','hina_xingzhi'],['doublegroup:key:shen']];
if(get.mode()=='guozhan') lib.characterPack.diy.key_ushio=['female','key',3,['ushio_huanxin','ushio_xilv'],['doublegroup:key:wei:shu:wu:qun:jin']];
if(get.mode()=='guozhan') lib.translate.key_ushio='冈崎汐';
if(lib.config.characters.contains('diy')){
lib.character.key_kagari=['female','shen',3,['kagari_zongsi'],[]];
lib.character.key_shiki=['female','shen','3/5',['shiki_omusubi'],[]];
lib.character.db_key_hina=['female','key',3,['hina_shenshi','hina_xingzhi'],['doublegroup:key:shen']];
if(get.mode()=='guozhan') lib.character.key_ushio=['female','key',3,['ushio_huanxin','ushio_xilv'],['doublegroup:key:wei:shu:wu:qun:jin']];
}
lib.translate.bilibili_key='论外包';
}
//有关十周年UI
if(lib.config.extension_十周年UI_enable){
/*
content:function (){
'step 0'
var cards=get.cards(4);
var guanXing=decadeUI.content.chooseGuanXing(player,cards,cards.length,null,4,false);
guanXing.doubleSwitch=true;
guanXing.caption='【鬻爵】';
guanXing.header2='获得的牌';
guanXing.callback=function(){
var num=0;
for(var i=0;i<this.cards[1].length;i++){
num+=get.number(this.cards[1][i]);
}
return num>0&&num<=13;
};
game.broadcast(function(player,cards,callback){
if(!window.decadeUI) return;
var guanXing=decadeUI.content.chooseGuanXing(player,cards,cards.length,null,4,false);
guanXing.caption='【鬻爵】';
guanXing.header2='获得的牌';
guanXing.callback=callback;
},player,cards,guanXing.callback);
var player=event.player;
event.switchToAuto=function(){
var cards=guanXing.cards[0];
var num,sum,next;
var index=0;
var results=[];
for (var i =0;i<cards.length;i++){
num=0;
sum=0;
next=i+1;
for (var j=i;j<cards.length;j++){
if(j!=i&&j<next)
continue;
num=sum+get.number(cards[j]);
if(num<=13){
sum=num;
if(!results[index])results[index]=[];
results[index].push(cards[j]);
}
if(j>=cards.length-1) index++;
}
if(results[index]&&results[index].length==cards.length) break;
}
var costs=[];
for(var i=0;i<results.length;i++){
costs[i]={
value:0,
index:i,
};
for(var j=0;j<results[i].length;j++){
costs[i].value+=get.value(results[i][j],player);
}
}
costs.sort(function(a,b){
return b.value-a.value;
});
var time=500;
var result=results[costs[0].index];
for(var i=0;i<result.length;i++){
setTimeout(function(move,finished){
guanXing.move(move,guanXing.cards[1].length,1);
if(finished) guanXing.finishTime(1000);
},time,result[i],(i>=result.length-1));
time+=500;
}
};
if(event.isOnline()){
event.player.send(function(){
if(!window.decadeUI&&decadeUI.eventDialog)_status.event.finish();
},event.player);
event.player.wait();
decadeUI.game.wait();
}else if(!event.isMine()){
event.switchToAuto();
}
'step 1'
if(event.result&&event.result.bool){
player.gain(event.cards2,'gain2');
}
},
*/
lib.skill.lz_xunxun={
audio:'xz_xunxun',
trigger:{global:'phaseDrawBegin1'},
filter:function(event,player){
var lznum=0;
var sgnum=0;
var num=player.storage.deaddamage;
for(var i=0;i<game.players.length;i++){
if(((get.mode()=='identity'&&get.attitude(player,game.players[i])>0)||(get.mode()!='identity'&&game.players[i].isFriendOf(player)))){
game.players[i].getAllHistory('sourceDamage',function(evt){
num+=evt.num;
});
}
};
lznum+=game.filterPlayer(function(current){
if(get.mode()=='identity') return get.attitude(player,current)>0;
return current.isFriendOf(player);
}).length;
sgnum+=game.dead.filter(function(target){
if(get.mode()=='identity') return get.attitude(player,target)>0;
return target.isFriendOf(player);
}).length;
if(get.mode()=='identity') return num>=(lznum+sgnum)*1&&get.attitude(player,event.player)>0;
return num>=(lznum+sgnum)*1&&event.player.isFriendOf(player);
},
direct:true,
content:function(){
'step 0'
trigger.player.chooseBool(get.prompt2('xunxun')).set('ai',function(player){return true});
'step 1'
if(result.bool){
player.storage.lzxingzhao1=true;
trigger.player.logSkill('lz_xunxun');
var cards=get.cards(4);
var player=event.player;
var xunxun=decadeUI.content.chooseGuanXing(player,cards,cards.length,null,2);
xunxun.caption='【恂恂】';
xunxun.header1='牌堆底';
xunxun.header2='牌堆顶';
xunxun.callback=function(){
return this.cards[0].length==2&&this.cards[1].length==2;
};
game.broadcast(function(player,cards,callback){
if(!window.decadeUI) return;
var xunxun=decadeUI.content.chooseGuanXing(player,cards,cards.length,null,2);
xunxun.caption='【恂恂】';
xunxun.header1='牌堆底';
xunxun.header2='牌堆顶';
xunxun.callback=callback;
},player,cards,xunxun.callback);
event.switchToAuto=function(){
var cards=decadeUI.get.bestValueCards(xunxun.cards[0].concat(),player);
var time=500;
for(var i=0;i<2;i++){
setTimeout(function(card,index,finished){
xunxun.move(card,index,1);
if(finished) xunxun.finishTime(1000);
},time,cards[i],i,i>=1);
time+=500;
}
}
if(event.isOnline()){
event.player.send(function(){
if(!window.decadeUI&&decadeUI.eventDialog)_status.event.finish();
},event.player);
event.player.wait();
decadeUI.game.wait();
}else if(!event.isMine()){
event.switchToAuto();
}
}
else event.finish();
'step 2'
var first=ui.cardPile.firstChild;
var cards=event.cards2;
for(var i=0;i<cards.length;i++){
ui.cardPile.insertBefore(cards[i],first);
}
cards=event.cards1;
for(var i=0;i<cards.length;i++){
ui.cardPile.appendChild(cards[i]);
}
},
},
lib.skill.gzxingzhao.subSkill.xunxun={
trigger:{player:'phaseDrawBegin1'},
filter:function(event,player){
return lib.skill.gzxingzhao.getNum()>0;
},
prompt2:lib.translate.xunxun_info,
content:decadeUI.skill.xunxun.content,
}
}

/*
//单骑救助
if(config.DanJiHelp){
lib.skill._DanJiHelp={
trigger:{global:'gameStart'},
firstDo:true,
forced:true,
unique:true,
priority:Infinity,
filter:function(event,player){
return player==game.me;
},
content:function(){
game.me.addSkill('DanJiHelp');
},
}
}
*/
//神武将仅于魏蜀吴群晋五个势力中选择自己的势力。
if(config.choosegroup&&get.mode()!='guozhan'){
//通过各种机会不断地学会新方法，慢慢成长吧
Object.defineProperty(lib,'group',{
get:function(){
var list=['wei','shu','wu','qun','jin','shen'];
if(lib.config.characters.contains('hezongkangqincharacter')) list.push('daqin');
return list;
},
set:function(){
var list=['wei','shu','wu','qun','jin','shen'];
if(lib.config.characters.contains('hezongkangqincharacter')) list.push('daqin');
return list;
},
});
lib.skill._bilibili_choocegroup={
trigger:{global:'gameStart'},
unique:true,
direct:true,
firstDo:true,
priority:Infinity,
filter:function(event,player){
var list=['wei','shu','wu','qun','jin','shen'];
if(lib.config.characters.contains('hezongkangqincharacter')) list.push('daqin');
if(player.group=='shen'&&get.mode()=='boss') return false;
return !list.contains(player.group);
},
content:function(){
'step 0'
var controls=['wei','shu','wu','qun','jin'];
if(lib.config.characters.contains('hezongkangqincharacter')) controls.push('daqin');
var str='请选择一个势力';
player.chooseControl(controls,ui.create.dialog(str,'hidden')).ai=function(){
return Math.floor(Math.random()*controls.length);
};
'step 1'
if(result.control) player.changeGroup(result.control,true);//新函数changeGroup，如果括号中势力后加true或不加，则会进行势力转换以及播报，如果加false，则只更换势力但不播报。
}
}
}

},precontent:function(bilibilicharacter){
/*
崔琰 自嗨+曹金玉 旧版存档
yuqi:{
audio:2,
trigger:{global:'damageEnd'},
init:function(player){
if(!player.storage.yuqi) player.storage.yuqi=[0,3,1,1];
},
getInfo:function(player){
if(!player.storage.yuqi) player.storage.yuqi=[0,3,1,1];
return player.storage.yuqi;
},
onremove:true,
usable:2,
filter:function(event,player){
var list=lib.skill.yuqi.getInfo(player);
return event.player.isIn()&&get.distance(player,event.player)<=list[0];
},
logTarget:'player',
content:function(){
'step 0'
event.list=lib.skill.yuqi.getInfo(player);
var cards=get.cards(event.list[1]);
event.cards=cards;
game.cardsGotoOrdering(cards);
var next=player.chooseToMove(true,'隅泣（若对话框显示不完整，可下滑操作）');
next.set('list',[
['牌堆顶的牌',cards],
['交给'+get.translation(trigger.player)+'（至少一张'+(event.list[2]>1?('，至多'+get.cnNumber(event.list[2])+'张'):'')+'）'],
['交给自己（至多'+get.cnNumber(event.list[3])+'张）'],
]);
next.set('filterMove',function(from,to,moved){
var info=lib.skill.yuqi.getInfo(_status.event.player);
if(to==1) return moved[1].length<info[2];
if(to==2) return moved[2].length<info[3];
return true;
});
next.set('processAI',function(list){
var cards=list[0][1].slice(0).sort(function(a,b){
return get.value(b,'raw')-get.value(a,'raw');
}),player=_status.event.player,target=_status.event.getTrigger().player;
var info=lib.skill.yuqi.getInfo(_status.event.player);
var cards1=cards.splice(0,Math.min(info[3],cards.length-1));
var card2;
if(get.attitude(player,target)>0) card2=cards.shift();
else card2=cards.pop();
return [cards,[card2],cards1];
});
next.set('filterOk',function(moved){
return moved[1].length>0;
});
'step 1'
if(result.bool){
var moved=result.moved;
cards.removeArray(moved[1]);
cards.removeArray(moved[2]);
while(cards.length){
ui.cardPile.insertBefore(cards.pop().fix(),ui.cardPile.firstChild);
}
trigger.player.gain(moved[1],'gain2');
if(moved[2].length) player.gain(moved[2],'gain2');
game.updateRoundNumber();
}
},
mark:true,
intro:{
content:function(storage,player){
var info=lib.skill.yuqi.getInfo(player);
return '<div class="text center"><span class=thundertext>作用距离：'+info[0]+'</span>　<span class=firetext>展示牌数：'+info[1]+'</span><br><span class=greentext>交出牌数：'+info[2]+'</span>　<span class=yellowtext>私吞牌数：'+info[3]+'</span></div>'
},
},
ai:{
threaten:8.8,
},
},
shanshen:{
audio:2,
trigger:{global:'die'},
direct:true,
content:function(){
'step 0'
event.goon=!player.hasAllHistory('sourceDamage',function(evt){
return evt.player==trigger.player;
});
player.chooseControl('<span class=thundertext作用>距离</span>','<span class=firetext>展示牌数</span>','<span class=greentext>交出牌数</span>','<span class=yellowtext>私吞牌数</span>','cancel2').set('prompt',get.prompt('shanshen')).set('prompt2','令〖隅泣〗中的一个数字+2'+(event.goon?'并回复1点体力':'')).set('ai',function(){
var player=_status.event.player,info=lib.skill.yuqi.getInfo(player);
if(info[0]<info[3]&&game.countPlayer(function(current){
return get.distance(player,current)<=info[0];
})<Math.min(3,game.countPlayer())) return 0;
if(info[3]<info[1]-1) return 3;
if(info[1]<5) return 1;
if(info[0]<5&&game.hasPlayer(function(current){
return current!=player&&get.distance(player,current)>info[0];
})) return 0;
return 2;
});
'step 1'
if(result.control!='cancel2'){
player.logSkill('shanshen',trigger.player);
var list=lib.skill.yuqi.getInfo(player);
list[result.index]=Math.min(5,list[result.index]+2);
game.log(player,'将',result.control,'数字改为','#y'+list[result.index])
player.markSkill('yuqi');
if(event.goon) player.recover();
}
},
},
xianjing:{
audio:2,
trigger:{player:'phaseZhunbeiBegin'},
direct:true,
content:function(){
'step 0'
player.chooseControl('<span class=thundertext>作用距离</span>','<span class=firetext>展示牌数</span>','<span class=greentext>交出牌数</span>','<span class=yellowtext>私吞牌数</span>','cancel2').set('prompt',get.prompt('xianjing')).set('prompt2','令〖隅泣〗中的一个数字+1').set('ai',function(){
var player=_status.event.player,info=lib.skill.yuqi.getInfo(player);
if(info[0]<info[3]&&game.countPlayer(function(current){
return get.distance(player,current)<=info[0];
})<Math.min(3,game.countPlayer())) return 0;
if(info[3]<info[1]-1) return 3;
if(info[1]<5) return 1;
if(info[0]<5&&game.hasPlayer(function(current){
return current!=player&&get.distance(player,current)>info[0];
})) return 0;
return 2;
});
'step 1'
if(result.control!='cancel2'){
player.logSkill('xianjing');
var list=lib.skill.yuqi.getInfo(player);
list[result.index]=Math.min(5,list[result.index]+1);
game.log(player,'将',result.control,'数字改为','#y'+list[result.index])
player.markSkill('yuqi');
if(player.isDamaged()) event.finish();
}
else event.finish();
'step 2'
player.chooseControl('<span class=thundertext>作用距离</span>','<span class=firetext>展示牌数</span>','<span class=greentext>交出牌数</span>','<span class=yellowtext>私吞牌数</span>','cancel2').set('prompt','是否令〖隅泣〗中的一个数字+1？').set('ai',function(){
var player=_status.event.player,info=lib.skill.yuqi.getInfo(player);
if(info[0]<info[3]&&game.countPlayer(function(current){
return get.distance(player,current)<=info[0];
})<Math.min(3,game.countPlayer())) return 0;
if(info[3]<info[1]-1) return 3;
if(info[1]<5) return 1;
if(info[0]<5&&game.hasPlayer(function(current){
return current!=player&&get.distance(player,current)>info[0];
})) return 0;
return 2;
});
'step 3'
if(result.control!='cancel2'){
var list=lib.skill.yuqi.getInfo(player);
list[result.index]=Math.min(5,list[result.index]+1);
game.log(player,'将',result.control,'数字改为','#y'+list[result.index])
player.markSkill('yuqi');
}
},
},
yuqi:function(player){
var info=lib.skill.yuqi.getInfo(player);
return '每回合限两次。当有角色受到伤害后，若你至其的距离不大于<span class=thundertext>'+info[0]+'</span>，则你可以观看牌堆顶的<span class=firetext>'+info[1]+'</span>张牌。你将其中至多<span class=greentext>'+info[2]+'</span>张牌交给受伤角色，然后可以获得剩余牌中的至多<span class=yellowtext>'+info[3]+'</span>张牌，并将其余牌以原顺序放回牌堆顶。（所有具有颜色的数字至多为5）';
},
yuqi:'隅泣',
yuqi_info:'每回合限两次。当有角色受到伤害后，若你至其的距离不大于<span class=thundertext>0</span>，则你可以观看牌堆顶的<span class=firetext>3</span>张牌。你将其中至多<span class=greentext>1</span>张牌交给受伤角色，然后可以获得剩余牌中的至多<span class=yellowtext>1</span>张牌，并将其余牌以原顺序放回牌堆顶。（所有具有颜色的数字至多为5）',
shanshen:'善身',
shanshen_info:'当有角色死亡时，你可令你的〖隅泣〗中的一个具有颜色的数字+2。然后若你未对该角色造成过伤害，则你回复1点体力。',
xianjing:'娴静',
xianjing_info:'准备阶段，你可令你的〖隅泣〗中的一个具有颜色的数字+1。若你的体力值等于体力上限，则你可以重复一次此流程。',
lib.skill.spyajun={
audio:2,
usable:1,
enable:'phaseUse',
filter:function(event,player){
var hs=player.getCards('h');
return hs.length>0&&!player.hasSkillTag('noCompareSource')&&player.hasHistory('gain',function(evt){
for(var i of evt.cards){
if(hs.contains(i)) return true;
}
return false;
})&&game.hasPlayer(function(current){
return current!=player&&player.canCompare(current);
});
},
filterCard:function(card){
var player=_status.event.player;
var cards=[],hs=player.getCards('h');
player.getHistory('gain',function(evt){
cards.addArray(evt.cards);
});
cards=cards.filter(function(i){
return hs.contains(i);
});
return cards.contains(card);
},
discard:false,
lose:false,
filterTarget:function(card,player,target){
return player.canCompare(target);
},
prompt:'选择一张本回合新获得的牌作为拼点牌，然后选择一名拼点目标',
check:function(card){
return get.number(card)-get.value(card);
},
content:function(){
'step 0'
var next=player.chooseToCompare(target);
if(!next.fixedResult) next.fixedResult={};
next.fixedResult[player.playerid]=cards[0];
'step 1'
if(result.bool){
var bcards=[result.player,result.target].filterInD('d');
if(bcards.length){
player.chooseButton(['是否将一张牌置于牌堆顶？',bcards]).set('ai',function(button){
if(get.color(button.link)=='black') return 1;
return 0;
});
}
else event.finish();
}
else{
player.addMark('spyajun_less',1,false);
player.addTempSkill('spyajun_less');
event.finish();
}
'step 2'
if(result.bool){
var ccard=result.links[0];
ccard.fix();
ui.cardPile.insertBefore(ccard,ui.cardPile.firstChild);
game.updateRoundNumber();
game.log(player,'将',ccard,'置于牌堆顶');
}
else event.finish();
},
group:'spyajun_draw',
subSkill:{
draw:{
audio:'spyajun',
trigger:{player:'phaseDrawBegin2'},
forced:true,
locked:false,
filter:function(event,player){
return !event.numFixed;
},
content:function(){
trigger.num++;
},
},
less:{
onremove:true,
charlotte:true,
intro:{content:'手牌上限-#'},
mod:{
maxHandcard:function(player,num){
return num-player.countMark('spyajun_less');
}
},
},
},
ai:{
//在【尊嫡】前先行操作
order:8.1,
result:{
player:1,
target:function(player,target){
return -get.attitude(_status.event.player,target)*Math.sqrt(5-Math.min(4,target.countCards('h')))*(target.hasSkillTag('noh')?0.5:1);
},
},
},
},
*/
//记牌器
lib.skill.bilibili_jipaiqi={
mark:true,
market:'录',
intro:{
content:function (storage,player){
var str='剩余牌数';
var list=[];
for(var i=0;i<ui.cardPile.childElementCount;i++){
if(!list.contains(ui.cardPile.childNodes[i].name)){
list.push(ui.cardPile.childNodes[i].name);
var trans=ui.cardPile.childNodes[i].name,num=0;
for(var j=0;j<ui.cardPile.childElementCount;j++){
if(ui.cardPile.childNodes[j].name==trans) num++;
str+='<br><li>'+get.translation(trans)+'还剩'+get.cnNumber(num)+'张';
}
}
}
return str;
},
},
},
lib.translate.bilibili_jipaiqi='记牌器';
//----------------游戏特效·始----------------
game.test=function(){
var skills = [];
var zhen = 0;
var ID = setInterval(function(){
game.players[zhen].$skill(skills[zhen]);
zhen++;
if(zhen>7){
clearInterval(ID);
game.test2();
return;
}
},3000)
}
game.test2=function(){
var skills = [];
var zhen = 0;
var ID = setInterval(function(){
game.players[zhen].$skill(skills[zhen]);
zhen++;
if(zhen>7){
clearInterval(ID);
game.test();
return;
}
},3000)
}
var extensionAnimation = {
damage:5,
};
if(lib.config["extension_活动武将_extension_Animate_card"]){
extensionAnimation.card = {
jiu:16,
tao:16,
shan:22,
sha_red:23,
sha_fire:23,
sha_black:17,
sha_thunder:23,
sha_ice:7,
}
}
if(lib.config["extension_活动武将_extension_Animate_equip"]){
extensionAnimation.equip = {
xiangle:11,
}
}
game.saveConfig("extensionAnimation",extensionAnimation);
game.extensionFunction = {
animation_skill:function(skill){
var Animation = ui.create.div();
Animation.style["z-index"] = 5;
Animation.style.width = document.body.clientWidth + "px";
Animation.style.height= (document.body.clientWidth*22)/55 + "px";
Animation.style.left= "0%";
Animation.style.top = "7%";
ui.window.appendChild(Animation);
var zhen = 0;
var ID = setInterval(function(){
if(zhen>lib.config.extensionAnimation.skill[skill]){
clearInterval(ID);
Animation.delete();
return ;
}
var SRC = lib.assetURL + "extension/活动武将/skill/" + skill +"/"+ zhen + ".png";
Animation.innerHTML = "<img width=100% height=100% ondragstart='return fasle;' src='"+SRC+"' />";
zhen ++;
},50);
},
animation_card:function(player,card){
var Animation = ui.create.div();
Animation.style["z-index"] = 7;
Animation.style.width = (120/715)*document.body.clientHeight + "px";
Animation.style.height= (120/715)*document.body.clientHeight + "px";
if(lib.config.layout=="mobile"||lib.config.layout=="long"){
if(player==game.me){
Animation.style.left= "0.6%";
Animation.style.top = "9%";
}
else if(lib.config.layout=="mobile"){
Animation.style.left= "15%";
Animation.style.top = "25%";
}
else {
Animation.style.left= "10%";
Animation.style.top = "20%";
}
}
else if(lib.config.layout=="default"){
Animation.style.left= "5%";
Animation.style.top = "10%";
}
else {
Animation.style.left= "7.5%";
Animation.style.top = "25%";
}
player.appendChild(Animation);
var zhen = 0;
var ID = setInterval(function(){
if(zhen>lib.config.extensionAnimation.card[card]){
clearInterval(ID);
Animation.delete();
return ;
}
var SRC = lib.assetURL + "extension/活动武将/card/" + card +"/"+ zhen + ".png";
Animation.innerHTML = "<img width=100% height=100% ondragstart='return fasle;' src='"+SRC+"' />";
zhen ++;
},45);
},
animation_equip:function(player,equip){
var Animation = ui.create.div();
Animation.style["z-index"] = 7;
Animation.style.width = (120/715)*document.body.clientHeight + "px";
Animation.style.height= (120/715)*document.body.clientHeight + "px";
if(player==game.me){
Animation.style.left= (document.body.clientWidth-120)/2+"px";
Animation.style.top = "60%";
ui.window.appendChild(Animation);
}
else {
Animation.style.left= "15%";
Animation.style.top = "60%";
player.appendChild(Animation);
}
var zhen = 0;
var ID = setInterval(function(){
if(zhen>lib.config.extensionAnimation.equip[equip]){
clearInterval(ID);
Animation.delete();
return ;
}
var SRC = lib.assetURL + "extension/活动武将/equip/" + equip +"/"+ zhen + ".png";
Animation.innerHTML = "<img width=100% height=100% ondragstart='return fasle;' src='"+SRC+"' />";
zhen ++;
},45);
},
animation_damage:function(player){
var Animation = ui.create.div();
Animation.style["z-index"] = 7;
Animation.style.width = (120/715)*document.body.clientHeight + "px";
Animation.style.height= (120/715)*document.body.clientHeight + "px";
if(lib.config.layout=="mobile"||lib.config.layout=="long"){
if(player==game.me){
Animation.style.left= "0.6%";
Animation.style.top = "9%";
}
else if(lib.config.layout=="mobile"){
Animation.style.left= "15%";
Animation.style.top = "25%";
}
else {
Animation.style.left= "10%";
Animation.style.top = "20%";
}
}
else if(lib.config.layout=="default"){
Animation.style.left= "5%";
Animation.style.top = "10%";
}
else {
Animation.style.left= "7.5%";
Animation.style.top = "25%";
}
player.appendChild(Animation);
var zhen = 0;
var ID = setInterval(function(){
if(zhen>5){
clearInterval(ID);
Animation.delete();
return ;
}
var SRC = lib.assetURL + "extension/活动武将/damage/" + zhen + ".png";
Animation.innerHTML = "<img width=100% height=100% ondragstart='return fasle;' src='"+SRC+"' />";
zhen ++;
},45);
},
animation_judge:function(card,bool){
game.print(card);
var Animation = ui.create.div();
Animation.style["z-index"] = 7;
Animation.style.width = (120/715)*document.body.clientHeight + "px";
Animation.style.height= (120/715)*document.body.clientHeight + "px";
Animation.style.left= "3%";
Animation.style.top = "15%";
card.appendChild(Animation);
game.print(card);
var count , img;
if(bool){
var count = 16;
var img = "judgegood";
}
else {
var count = 18;
var img = "judgebad";
}
var zhen = 0;
var ID = setInterval(function(){
if(zhen>count){
clearInterval(ID);
Animation.delete();
return ;
}
var SRC = lib.assetURL + "extension/活动武将/judge/" + img +"/"+ zhen + ".png";
Animation.innerHTML = "<img width=100% height=100% ondragstart='return fasle;' src='"+SRC+"' />";

zhen ++;
},45);
game.print(card);
}
}; 
lib.element.player.popup=function(name,className){
var name2=get.translation(name);
if(!name2||(get.type(name)=="basic"&&lib.config.extensionAnimation.card&&lib.config.extensionAnimation.card[name])) return;
this.$damagepop(name2,className||'water',true);
},
lib.element.player.$skill=function(name,type,color){
if(typeof type!='string') type='legend';
game.delay(2);
this.playerfocus(1500);
var that=this;
setTimeout(function(){
game.broadcastAll(function(that,type,name,color){
if(lib.config.animation&&!lib.config.low_performance){
if(game.chess){
that['$'+type+'2'](1200);
}
else{
that['$'+type](1200);
}
}
var str = [];
for(var i in lib.translate){
if(lib.translate[i]==name){
str.push(i);
}
}
for(var i=0;i<str.length;i++){
if(lib.config.extensionAnimation.skill&&lib.config.extensionAnimation.skill[str[i]]!=undefined){
game.extensionFunction.animation_skill(str[i]);
str=false;
break;
}
} 
if(name&&str){
that.$fullscreenpop(name,color);
}
},that,type,name,color);
game.delay();
},300);
}
//----------------游戏特效·末----------------
//技能修复+描述优化
if(bilibilicharacter.enable){
/*
·王凌【自缚（新）】手牌上限问题
·王凌【秘备】配音修正
·王凌【谋立（新）】ai修正
*/
lib.skill.xinzifu={
audio:'zifu',
trigger:{player:'phaseUseEnd'},
forced:true,
filter:function(event,player){
return !player.hasHistory('useCard',function(evt){
return evt.getParent('phaseUse')==event;
});
},
content:function(){
if(player.getStorage('xingqi').length>0){
game.log(player,'移去了所有','#g【备】');
player.unmarkSkill('xingqi');
}
player.addTempSkill('xinzifu2');
},
ai:{
neg:true,
combo:'xingqi',
},
},
lib.skill.xinzifu2={
marktext:'缚',
mark:true,
intro:{
content:'本回合手牌上限-1',
},
mod:{
maxHandcard:function(player,num){
return num-1;
},
},
},
lib.skill.mibei={
audio:2,
dutySkill:true,
group:['mibei_achieve','mibei_fail','mibei_silent'],
derivation:'xinmouli',
subSkill:{
achieve:{
audio:'mibei1',
trigger:{player:'useCardAfter'},
forced:true,
skillAnimation:true,
animationColor:'water',
filter:function(event,player){
if(!player.storage.xingqi||!player.storage.xingqi.length) return false;
var map={basic:0,trick:0,equip:0};
for(var i of player.storage.xingqi){
var type=get.type(i);
if(typeof map[type]=='number') map[type]++;
}
for(var i in map){
if(map[i]<2) return false;
}
return true;
},
content:function(){
'step 0'
game.log(player,'成功完成使命');
player.awakenSkill('mibei');
var list=['basic','equip','trick'],cards=[];
for(var i of list){
var card=get.cardPile2(function(card){
return get.type(card)==i;
});
if(card) cards.push(card);
}
if(cards.length) player.gain(cards,'gain2');
'step 1'
player.addSkill('xinmouli');
},
},
fail:{
audio:'mibei2',
trigger:{player:'phaseJieshuBegin'},
forced:true,
filter:function(event,player){
return !player.getStorage('xingqi').length&&player.hasSkill('mibei_mark');
},
content:function(){
game.log(player,'使命失败');
player.awakenSkill('mibei');
player.loseMaxHp();
},
},
silent:{
trigger:{player:'phaseZhunbeiBegin'},
silent:true,
lastDo:true,
filter:function(event,player){
return !player.getStorage('xingqi').length;
},
content:function(){
player.addTempSkill('mibei_mark');
},
charlotte:true,
},
mark:{},
},
},
lib.skill.mibei1={audio:true},
lib.skill.mibei2={audio:true},
lib.skill.xinmouli={
audio:'mouli',
enable:'phaseUse',
usable:1,
filter:function(event,player){
return player.getStorage('xingqi').length>0;
},
filterTarget:lib.filter.notMe,
content:function(){
'step 0'
target.chooseButton(['谋立：请选择你要获得的牌',[player.getStorage('xingqi'),'vcard']],true).set('ai',function(button){
var card={name:button.link[2]},player=_status.event.player;
if(!get.cardPile2(function(cardx){
return cardx.name==card.name;
})) return 0;
return get.value(card,player);
});
'step 1'
if(result.bool){
var name=result.links[0][2];
game.log(player,'移去了一个','#g【备('+get.translation(name)+')】');
player.unmarkAuto('xingqi',[name]);
var card=get.cardPile2(function(card){
return card.name==name;
});
if(card) target.gain(card,'gain2');
}
},
ai:{
combo:'xingqi',
order:1,
result:{
target:function(player,target){
if(target.hasSkillTag('nogain')) return 0;
return 1;
},
},
},
},
//----------------游戏播报·始----------------
lib.element.content.damage=function(){
"step 0"
event.forceDie=true;
event.trigger('damageBegin1');
"step 1"
event.trigger('damageBegin2');
"step 2"
event.trigger('damageBegin3');
"step 3"
event.trigger('damageBegin4');
"step 4"
if(num>0&&player.hujia&&!player.hasSkillTag('nohujia')){
if(num>=player.hujia){
event.hujia=player.hujia;
num-=player.hujia;
}
else{
event.hujia=num;
num=0;
}
game.log(player,'的护甲抵挡了'+get.cnNumber(event.hujia)+'点伤害');
player.changeHujia(-event.hujia).type='damage';
}
event.num=num;
if(num<=0){
event.trigger('damageZero');
delete event.filterStop;
event.finish();
event._triggered=null;
}
"step 5"
event.trigger('damageBegin5');
"step 6"
if(lib.config.extension_活动武将_OpenTheGame&&['fire','thunder','ice'].contains(event.nature)){
if(lib.config.background_audio){
game.playAudio('..','extension','活动武将','damage_'+event.nature+(num>1?'2':''));
}
game.broadcast(function(num){
if(lib.config.background_audio){
game.playAudio('..','extension','活动武将','damage_'+event.nature+(num>1?'2':''));
}
},num);
}
else{
if(lib.config.background_audio){
game.playAudio('effect','damage'+(num>1?'2':''));
}
game.broadcast(function(num){
if(lib.config.background_audio){
game.playAudio('effect','damage'+(num>1?'2':''));
}
},num);
}
var str='受到了';
if(source) str+='来自<span class="bluetext">'+(source==player?'自己':get.translation(source))+'</span>的';
str+=get.cnNumber(num)+'点';
if(event.nature) str+=get.translation(event.nature)+'属性';
str+='伤害';
game.log(player,str);
if(player.stat[player.stat.length-1].damaged==undefined){
player.stat[player.stat.length-1].damaged=num;
}
else{
player.stat[player.stat.length-1].damaged+=num;
}
if(source){
source.getHistory('sourceDamage').push(event);
if(source.stat[source.stat.length-1].damage==undefined){
source.stat[source.stat.length-1].damage=num;
}
else{
source.stat[source.stat.length-1].damage+=num;
}
}
player.getHistory('damage').push(event);
if(event.notrigger){
player.changeHp(-num,false)._triggered=null;
}
else{
player.changeHp(-num,false);
}
if(event.animate!==false){
player.$damage(source);
game.broadcastAll(function(nature,player){
if(lib.config.animation&&!lib.config.low_performance){
if(nature=='fire'){
player.$fire();
}
else if(nature=='thunder'){
player.$thunder();
}
}
},event.nature,player);
player.$damagepop(-num,event.nature);
}
if(!event.notrigger){
if(num==0){
event.trigger('damageZero');
event._triggered=null;
}
else{
event.trigger('damage');
}
}
"step 7"
if(player.hp<=0&&player.isAlive()){
game.delayx();
event._dyinged=true;
player.dying(event);
}
if(source&&lib.config.border_style=='auto'){
var dnum=0;
for(var j=0;j<source.stat.length;j++){
if(source.stat[j].damage!=undefined) dnum+=source.stat[j].damage;
}
if(dnum>=2){
if(lib.config.autoborder_start=='silver'){
dnum+=4;
}
else if(lib.config.autoborder_start=='gold'){
dnum+=8;
}
}
if(lib.config.autoborder_count=='damage'){
source.node.framebg.dataset.decoration='';
if(dnum>=10){
source.node.framebg.dataset.auto='gold';
if(dnum>=12) source.node.framebg.dataset.decoration='gold';
}
else if(dnum>=6){
source.node.framebg.dataset.auto='silver';
if(dnum>=8) source.node.framebg.dataset.decoration='silver';
}
else if(dnum>=2){
source.node.framebg.dataset.auto='bronze';
if(dnum>=4) source.node.framebg.dataset.decoration='bronze';
}
if(dnum>=2){
source.classList.add('topcount');
}
}
else if(lib.config.autoborder_count=='mix'){
source.node.framebg.dataset.decoration='';
switch(source.node.framebg.dataset.auto){
case 'bronze':if(dnum>=4) source.node.framebg.dataset.decoration='bronze';break;
case 'silver':if(dnum>=8) source.node.framebg.dataset.decoration='silver';break;
case 'gold':if(dnum>=12) source.node.framebg.dataset.decoration='gold';break;
}
}
}
"step 8"
if(!event.notrigger) event.trigger('damageSource');
};
lib.skill._OpenTheGame={
trigger:{global:'gameDrawAfter'},
firstDo:true,
forced:true,
unique:true,
priority:Infinity,
forceDie:true,
filter:function(event,player){
return lib.config.extension_活动武将_OpenTheGame&&player==game.me&&!lib.config.extension_十周年UI_gameAnimationEffect;/*防止重复播放，挺十周年UI*/
},
content:function(){
if(!game.HasExtension('十周年UI')) game.playAudio('..','extension','活动武将','bilibili_OpenTheGame');
trigger.player.$fullscreenpop('战斗开始','fire');
},
},
lib.skill._bilibili_miaoshou={
trigger:{global:'xmiaoshou'},
filter:function(event,player){
return lib.config.extension_活动武将_OpenTheGame&&event.player==player;
},
direct:true,
charlotte:true,
unique:true,
firstDo:true,
forceDie:true,
content:function(){
trigger.player.$fullscreenpop('妙手回春','water');
game.playAudio('..','extension','活动武将','bilibili_miaoshou');
},
},
lib.skill._bilibili_yishu={
trigger:{global:'xyishu'},
filter:function(event,player){
return lib.config.extension_活动武将_OpenTheGame&&event.player==player;
},
direct:true,
charlotte:true,
unique:true,
firstDo:true,
forceDie:true,
content:function(){
trigger.player.$fullscreenpop('医术高超','wood');
game.playAudio('..','extension','活动武将','bilibili_yishu');
},
},
lib.skill._recovertrigger={
trigger:{global:'recoverEnd'},
filter:function(event,player){
if(_status.currentPhase!=player){
return lib.config.extension_活动武将_OpenTheGame&&event.player!=event.source&&event.source==player;
}
return true;
},
direct:true,
charlotte:true,
unique:true,
firstDo:true,
forceDie:true,
content:function(){
if(_status.currentPhase!=player){
_status.event.trigger('xmiaoshou');
}
else {
if(player.storage.jstxyishugaochao==undefined){
player.storage.jstxyishugaochao = trigger.num;
}
else {
player.storage.jstxyishugaochao+=trigger.num;
}
if(player.storage.jstxyishugaochao>=3){
player.storage.jstxyishugaochao-=3;
_status.event.trigger('xyishu');
}
}
},
group:'_recovertrigger_Delete',
subSkill:{
Delete:{
trigger:{player:'phaseEnd'},
direct:true,
charlotte:true,
unique:true,
lastDo:true,
forceDie:true,
content:function(){
delete player.storage.jstxyishugaochao;
},
}
}
},
lib.skill._jishaAudio={
marktext:'杀',
intro:{
content:function(storage){
var num=player.storage.bilibili_kill;
return'你已击杀'+num+'名角色';
},
},
trigger:{global:'dieBegin'},
direct:true,
charlotte:true,
unique:true,
firstDo:true,
forceDie:true,
filter:function(event,player){
return lib.config.extension_活动武将_OpenTheGame&&event.source==player&&event.player!=player;
},
content:function(){
'step 0'
if(!player.storage.bilibili_kill) player.storage.bilibili_kill=0;
player.storage.bilibili_kill++;
'step 1'
if(player.storage.bilibili_kill==1){player.$fullscreenpop('一血·卧龙出山','water');game.playAudio('..','extension','活动武将','bilibili_jisha1');}
if(player.storage.bilibili_kill==2){player.$fullscreenpop('双杀·一战成名','wood');game.playAudio('..','extension','活动武将','bilibili_jisha2');}
if(player.storage.bilibili_kill==3){player.$fullscreenpop('三杀·举世皆惊','thunder');game.playAudio('..','extension','活动武将','bilibili_jisha3');}
if(player.storage.bilibili_kill==4){player.$fullscreenpop('四杀·天下无敌','fire');game.playAudio('..','extension','活动武将','bilibili_jisha4');}
if(player.storage.bilibili_kill==5){player.$fullscreenpop('五杀·诛天灭地','fire');game.playAudio('..','extension','活动武将','bilibili_jisha5');}
if(player.storage.bilibili_kill==6){player.$fullscreenpop('六杀·癫狂杀戮','fire');game.playAudio('..','extension','活动武将','bilibili_jisha6');}
if(player.storage.bilibili_kill>=7){player.$fullscreenpop('无双·万军取首','fire');game.playAudio('..','extension','活动武将','bilibili_jisha7');}
},
},
lib.skill._bilibili_HighDamageAudio={
trigger:{source:'damageBegin5'},
direct:true,
charlotte:true,
unique:true,
firstDo:true,
forceDie:true,
filter:function(event,player){
return lib.config.extension_活动武将_OpenTheGame&&event.source&&event.source!=event.player&&event.num>=3;
},
content:function (){
if(trigger.num==3){
trigger.player.$fullscreenpop('癫狂屠戮','fire');
game.playAudio('..','extension','活动武将','bilibili_diankuang');
}else{
trigger.player.$fullscreenpop('无双<br>万军取首','fire');
game.playAudio('..','extension','活动武将','bilibili_wanjun');
}
},
},
lib.skill._bilibili_loseMaxHp={
trigger:{player:'loseMaxHpBegin'},
direct:true,
charlotte:true,
unique:true,
firstDo:true,
forceDie:true,
filter:function(event,player){
return lib.config.extension_活动武将_OpenTheGame;
},
content:function(){
game.playAudio('..','extension','活动武将','bilibili_loseMaxHp');
},
},
//----------------游戏播报·末----------------
//弃牌阶段相关技能
lib.skill._bilibili_phaseDiscard_audio={
trigger:{player:'phaseDiscardBegin'},
direct:true,
charlotte:true,
unique:true,
firstDo:true,
forceDie:true,
filter:function(event,player){
return player.countCards('h')>player.hp;
},
content:function(){
if(player.hasSkill('zongshi')) player.logSkill('zongshi');
if(player.hasSkill('rezongshi')) player.logSkill('rezongshi');
if(player.hasSkill('decadezongshi')) player.logSkill('decadezongshi');
if(player.hasSkill('jiaojie')&&player.countCards('h',{color:'red'})>0) player.logSkill('jiaojie');
if(player.hasZhuSkill('huaibi')&&player.storage.yinlang&&game.hasPlayer(function(current){
return current.group==player.storage.yinlang;
})) player.logSkill('huaibi');
if(player.hasZhuSkill('rehuaibi')&&player.storage.yaohu&&game.hasPlayer(function(current){
return current.group==player.storage.yaohu;
})) player.logSkill('rehuaibi');
},
},
//OL王荣【丰姿】ai修复
lib.skill.olfengzi={
audio:2,
trigger:{player:'useCard'},
direct:true,
filter:function(event,player){
if(event.olfengzi_buff||!event.targets.length||!player.isPhaseUsing()||player.hasSkill('olfengzi_buff')) return false;
var type=get.type(event.card,false);
if(type!='basic'&&type!='trick') return false;
return player.hasCard(function(i){
if(_status.connectMode) return true;
return get.type2(i,player)==type;
},'h');
},
content:function(){
'step 0'
if(player!=game.me&&!player.isUnderControl()&&!player.isOnline()) game.delayx();
var type=get.type(trigger.card,false);
player.chooseToDiscard('h',get.prompt('olfengzi'),'弃置一张'+get.translation(type)+'牌，令'+get.translation(trigger.card)+'结算两次',function(card,player){
return get.type2(card,player)==_status.event.type;
}).set('type',type).set('ai',function(card){return (7-get.value(card))*(get.effect(trigger.targets[0],trigger.card,player,player))}).logSkill='olfengzi';
'step 1'
if(result.bool){
player.addTempSkill('olfengzi_buff','phaseUseAfter');
trigger.olfengzi_buff=player;
}
},
subSkill:{
buff:{
trigger:{global:'useCardToTargeted'},
forced:true,
charlotte:true,
popup:false,
lastDo:true,
filter:function(event,player){
return (event.parent.olfengzi_buff==player&&event.targets.length==event.parent.triggeredTargets4.length);
},
content:function(){
trigger.getParent().targets=trigger.getParent().targets.concat(trigger.targets);
trigger.getParent().triggeredTargets4=trigger.getParent().triggeredTargets4.concat(trigger.targets);
},
},
},
},
//手杀华歆【疏陈】修复
lib.skill.shuchen={
audio:2,
init:function(player){
player.storage.renku=true;
},
trigger:{global:'dying'},
forced:true,
filter:function(event,player){
return _status.renku.length>=4;
},
logTarget:'player',
content:function(){
player.gain(_status.renku,'gain2','fromRenku');
_status.renku.length=0;
game.updateRenku();
trigger.player.recover();
},
},
//海外服许靖
lib.skill.boming={
audio:2,
enable:'phaseUse',
usable:2,
filter:function(event,player){
return player.countCards('he')>0;
},
filterCard:true,
position:'he',
filterTarget:lib.filter.notMe,
discard:false,
lose:false,
delay:false,
content:function(){
target.gain(player,cards,'giveAuto');
},
check:function(card){
return 5-get.value(card);
},
ai:{
order:10,
result:{
target:function(player,target){
if(!ui.selected.cards.length) return 0;
var card=ui.selected.cards[0];
if(get.attitude(player,target)<0&&player.hasSkill('ejian')&&(!player.getStorage('ejian_damage').contains(target)||!player.getStorage('ejian_discard').contains(target))){
var dam=get.damageEffect(target,player,target);
if(dam>0) return dam;
var type=get.type(card,target),ts=target.getCards('he',function(card){
return get.type(card)==type;
});
if(ts.length){
var val=get.value(ts,target);
if(val>get.value(card)) return -Math.max(1,val);
return 0;
}
}
return get.value(card,target)/1.5;
},
},
},
group:'boming_draw',
subSkill:{
draw:{
audio:'boming',
trigger:{player:'phaseJieshuBegin'},
forced:true,
locked:false,
filter:function(event,player){
return player.getHistory('lose',function(evt){
return evt.getParent(2).name=='boming';
}).length>1;
},
content:function(){
player.draw(2);
},
},
},
},
lib.skill.ejian={
audio:2,
trigger:{global:'gainAfter'},
filter:function(event,player){
if(event.player==player||(player.getStorage('ejian_damage').contains(event.player)&&player.getStorage('ejian_discard').contains(event.player))||!event.player.isIn()) return false;
var evt=event.getl(player);
if(!evt||!evt.hs||evt.hs.length<=0) return false;
var he=event.player.getCards('he'),card=event.cards[0];
if(!he.contains(card)) return false;
var type=get.type2(card);
for(var i of he){
if(i!=card&&get.type2(i)==type) return true;
}
},
check:function(event,player){
return get.attitude(player,event.player)<0;
},
logTarget:'player',
content:function(){
'step 0'
event.cardType=get.type2(trigger.cards[0]);
event.target=trigger.player;
var list=[];
if(!player.getStorage('ejian_damage').contains(event.target)) list.push('选项一');
if(!player.getStorage('ejian_discard').contains(event.target)) list.push('选项二');
if(list.length==1) result.control=list;
else event.target.chooseControl(list).set('prompt','恶荐：请选择一项').set('choiceList',[
'受到1点伤害',
'展示手牌并弃置所有'+get.translation(event.cardType)+'牌',
]).set('ai',function(){
if(get.damageEffect(player,_status.event.getParent().player,player)>=0) return '选项一';
var type=_status.event.cardType,cards=player.getCards('he',function(card){
return get.type2(card)==type;
});
if(cards.length==1) return '选项二';
if(cards.length>=2){
for(var i=0;i<cards.length;i++){
if(get.tag(cards[i],'save')) return '选项一';
}
}
if(player.hp==1) return '选项二';
for(var i=0;i<cards.length;i++){
if(get.value(cards[i])>=8) return '选项一';
}
if(cards.length>2&&player.hp>2) return '选项一';
if(cards.length>3) return '选项一';
return '选项二';
}).set('cardType',event.cardType);
'step 1'
if(result.control=='选项一'){
player.markAuto('ejian_damage',[event.target]);
target.damage();
}
else{
player.markAuto('ejian_discard',[event.target]);
target.discard(target.getCards('he',function(card){
return get.type2(card)==event.cardType;
}));
}
},
ai:{halfneg:true},
group:['ejian_damage','ejian_discard'],
subSkill:{
damage:{
onremove:true,
charlotte:true,
marktext:'伤',
intro:{content:'$已执行受伤操作'},
},
discard:{
onremove:true,
charlotte:true,
marktext:'牌',
intro:{content:'$已执行弃牌操作'},
},
},
},
//修复界张春华【伤逝】为十周年版本
lib.skill.reshangshi={inherit:'shangshi'},
/*
//【邀虎】强制拿牌
lib.skill.yaohu={
audio:'yinlang',
trigger:{player:'phaseBegin'},
direct:true,
filter:function(event,player){
return !player.hasSkill('yaohu_round')&&game.hasPlayer(function(current){
return current.group&&current.group!='unknown';
});
},
content:function(){
'step 0'
var list=[];
game.countPlayer(function(current){
if(current.group&&current.group!='unknown') list.add(current.group);
});
list.sort(function(a,b){
return lib.group.indexOf(a)-lib.group.indexOf(b);
});
if(!player.hasSkill('yaohu')) list.push('cancel2');
player.chooseControl(list).set('prompt','邀虎：请选择一个势力').set('ai',function(){
return _status.event.choice;
}).set('choice',function(){
var getn=function(group){
return game.countPlayer(function(current){
if(current.group!=group) return false;
if(get.attitude(current,player)>0) return 1.5;
if(current.inRange(player)) return 0.5;
return -0.3;
});
}
list.sort(function(a,b){
return getn(b)-getn(a);
});
return list[0];
}());
'step 1'
if(result.control!='cancel2'){
player.logSkill('yaohu',game.filterPlayer(function(current){
return current.group==result.control;
}));
game.log(player,'选择了','#y'+get.translation(result.control+2))
player.storage.yaohu=result.control;
player.markSkill('yaohu');
}
},
ai:{combo:'jutu'},
intro:{content:'已选择了$势力'},
group:'yaohu_gain',
subSkill:{
round:{},
gain:{
audio:'yinlang',
trigger:{global:'phaseUseBegin'},
direct:true,
filter:function(event,player){
return event.player!=player&&event.player.group==player.storage.yaohu&&event.player.isIn()&&player.getStorage('jutu').length>0;
},
logTarget:'player',
content:function(){
'step 0'
var target=trigger.player;
event.target=target;
'step 1'
player.logSkill('yaohu',target);
target.chooseButton(['选择获得一张“生”',player.storage.jutu],true).set('ai',function(button){
return get.value(button.link,player);
});
'step 2'
if(result.bool){
player.unmarkAuto('jutu',result.links);
target.gain(result.links,'gain2');
}
'step 3'
if(game.hasPlayer(function(current){
return current!=player&&current.inRangeOf(target);
})){
player.chooseTarget(true,'选择'+get.translation(target)+'使用【杀】的目标',function(card,player,target){
return target!=player&&_status.event.source.inRange(target);
}).set('source',target).set('ai',function(target){
var evt=_status.event;
return get.effect(target,{name:'sha'},evt.source,evt.player);
});
}
else event.finish();
'step 4'
var target2=result.targets[0];
player.line(target2,'green');
target.chooseToUse(function(card,player,event){
if(get.name(card)!='sha') return false;
return lib.filter.filterCard.apply(this,arguments);
},'对'+get.translation(target2)+'使用一张杀，否则本回合对'+get.translation(player)+'使用伤害牌时，需交给其两张牌才能生效').set('targetRequired',true).set('complexSelect',true).set('filterTarget',function(card,player,target){
if(target!=_status.event.sourcex&&!ui.selected.targets.contains(_status.event.sourcex)) return false;
return lib.filter.filterTarget.apply(this,arguments);
}).set('sourcex',target2).set('addCount',false);
'step 5'
if(!result.bool){
target.markAuto('yaohu_give',[player]);
target.addTempSkill('yaohu_give','phaseUseEnd');
}
},
ai:{
effect:{
target:function(card,player,target){
if(_status._yaohu_ai_judging&&typeof card=='object'&&card.name.indexOf('damage')==-1&&get.tag(card,'damage')) return 'zerotarget';
},
},
},
},
give:{
trigger:{player:'useCardToPlayer'},
forced:true,
onremove:true,
charlotte:true,
filter:function(event,player){
return player.getStorage('yaohu_give').contains(event.target)&&get.tag(event.card,'damage')>0;
},
logTarget:'target',
content:function(){
'step 0'
if(player.countCards('he')<2) event._result={bool:false};
else player.chooseCard('he',2,'交给'+get.translation(trigger.target)+'两张牌，否则令'+get.translation(trigger.card)+'对其无效');
'step 1'
if(result.bool){
trigger.target.gain(result.cards,player,'giveAuto');
}
else{
trigger.targets.remove(trigger.target);
trigger.getParent().triggeredTargets1.remove(trigger.target);
trigger.untrigger();
}
},
ai:{
effect:{
player:function(card,player,target){
if(typeof card=='object'&&card.name.indexOf('damage')==-1&&get.tag(card,'damage')&&player.getStorage('yaohu_give').contains(target)) return 'zerotarget';
},
},
},
},
},
},
*/
//公孙康
lib.skill.taomie={
audio:3,
group:['taomie1','taomie2','taomie3'],
trigger:{source:'damageBegin1'},
forced:true,
locked:false,
direct:true,
filter:function(event,player){
return event.player.hasMark('taomie');
},
content:function(){
'step 0'
player.logSkill(Math.random()<0.5?'taomie2':'taomie3',trigger.player);
var target=get.translation(trigger.player);
var list=['选项一','选项二','背水！','cancel2'];
player.chooseControl(list).set('prompt','讨灭：请选择一项').set('choiceList',[
'令即将对'+target+'造成的伤害+1',
'获得'+target+'区域内的一张牌，并可将其交给另一名其他角色',
'背水！依次执行以上所有选项，并移去'+target+'的「讨灭」标记',
]).set('ai',function(){
var evt=_status.event.getTrigger();
var player=_status.event.player;
var target=evt.player;
var bool1=!target.hasSkillTag('filterDamage',null,{
player:player,
card:evt.card,
});
var bool2=get.effect(target,{name:'shunshou'},player,player)>0;
if(bool1&&bool2&&target.hp<=evt.num+1) return '背水';
if(bool1) return '选项一';
return '选项二';
});
'step 1'
if(result.control=='背水'){
trigger.taomie_player=trigger.player;
trigger.player.addTempSkill('taomie4');
}
if(result.control!='选项二'){
trigger.num++;
}
if(result.control!='选项一'&&trigger.player.countGainableCards(player,'hej')>0){
player.gainPlayerCard(trigger.player,'hej',true);
}
else event.finish();
'step 2'
var card=result.cards[0];
if(card&&player.getCards('h').contains(card)&&game.hasPlayer(function(current){
return current!=player&&current!=trigger.player;
})){
event.card=card;
player.chooseTarget('是否将'+get.translation(card)+'交给一名其他角色？',function(card,player,target){
return target!=player&&target!=_status.event.getTrigger().player;
}).set('ai',function(target){
var player=_status.event.player;
var card=_status.event.getParent().card;
if(target.hasSkillTag('nogain')||!player.needsToDiscard()||(get.tag(card,'damage')&&player.hasValueTarget(card,null,false)&&get.effect(_status.event.getTrigger().player,card,null,false)>0)) return 0;
return get.attitude(player,target)/(1+target.countCards('h'));
});
}
else event.finish();
'step 3'
if(result.bool){
var target=result.targets[0];
player.line(target);
target.gain(card,player,'giveAuto');
}
},
mod:{
inRange:function(from,to){
if(to.hasMark('taomie')) return true;
},
inRangeOf:function(from,to){
if(from.hasMark('taomie')) return true;
},
},
intro:{
content:'mark',
},
ai:{
effect:{
player:function(card,player,target){
if(target&&get.tag(card,'damage')&&target.hasMark('taomie')){
if(player.hasSkillTag('jueqing',false,target)) return;
if(get.attitude(player,target)>0){
return 0.7;
}
return 1.2;
}
},
},
},
},
/*
//新版sin【整经】
lib.skill.zhengjing={
audio:2,
enable:'phaseUse',
usable:1,
filter:function(event,player){
return !player.hasSkill('zhengjing3');
},
content:function(){
"step 0"
//game.trySkillAudio('zhengjing_guanju',player);
if(_status.connectMode) event.time=lib.configOL.choose_timeout;
var cards=[];
var names=[];
while(true){
var card=get.cardPile(function(carde){
return carde.name!='du'&&!names.contains(carde.name);
});
if(card){
cards.push(card);
names.push(card.name);
if(cards.length==3&&!get.isLuckyStar(player)&&Math.random()<0.33) break;
if(cards.length==4&&!get.isLuckyStar(player)&&Math.random()<0.5) break;
if(cards.length==5) break;
if(cards.length>=6) break;
}
else break;
};
event.cards=cards;
if(!cards.length){event.finish();return;};
names.push('du');
var names2=names.slice(0);
for(var i=0;i<4;i++){
names=names.concat(names2);
}
names.randomSort();
event.videoId=lib.status.videoId++;
if(player.isUnderControl()){
game.swapPlayerAuto(player);
}
var switchToAuto=function(){
names.remove('du');
game.pause();
game.countChoose();
setTimeout(function(){
_status.imchoosing=false;
event._result={
bool:true,
links:names.slice(0),
};
if(event.dialog) event.dialog.close();
if(event.control) event.control.close();
game.resume();
},5000);
};
var createDialog=function(player,id){
if(_status.connectMode) lib.configOL.choose_timeout='30';
if(player==game.me) return;
var str=get.translation(player)+'正在整理经书...<br>';
ui.create.dialog(str).videoId=id;
};
var chooseButton=function(list){
var roundmenu=false;
if(ui.roundmenu&&ui.roundmenu.display!='none'){
roundmenu=true;
ui.roundmenu.style.display='none';
}
var event=_status.event;
event.settleed=false;
event.finishedx=[];
event.map={};
event.zhengjing=list;
event.zhengjing_nodes=[];
event.map=[];
event.dialog=ui.create.dialog('forcebutton','hidden');
event.dialog.textPrompt=event.dialog.add('<div class="text center">及时点击卡牌，但不要点到毒了！</div>');
event.switchToAuto=function(){
event._result={
bool:true,
links:event.finishedx.slice(0),
};
event.dialog.close();
game.resume();
_status.imchoosing=false;
if(roundmenu) ui.roundmenu.style.display='';
};
event.dialog.classList.add('fixed');
event.dialog.classList.add('scroll1');
event.dialog.classList.add('scroll2');
event.dialog.classList.add('fullwidth');
event.dialog.classList.add('fullheight');
event.dialog.classList.add('noupdate');
event.dialog.open();
event.settle=function(du){
if(event.settleed) return;
event.settleed=true;
if(du){
if(lib.config.background_speak) game.playAudio('skill','zhengjing_boom');
event.dialog.textPrompt.innerHTML='<div class="text center">叫你别点毒你非得点 这下翻车了吧</div>';
}
else {
if(lib.config.background_speak) game.playAudio('skill','zhengjing_finish');
event.dialog.textPrompt.innerHTML='<div class="text center">整理经典结束！共整理出'+get.cnNumber(event.finishedx.length)+'份经典</div>';
}
while(event.zhengjing_nodes.length){
event.zhengjing_nodes.shift().delete();
}
setTimeout(function(){
 event.switchToAuto();
},1000);
};

var click=function(){
var name=this.name;
if(name=='du'){
event.zhengjing.length=0;
event.settle(true);
}
else{
if(lib.config.background_speak) game.playAudio('skill','zhengjing_click');
if(!event.map[name]) event.map[name]=0;
event.map[name]++;
if(event.map[name]>1) event.finishedx.add(name);
}
event.zhengjing_nodes.remove(this);
this.style.transition='all 0.5s';
this.style.transform='scale(1.2)';
this.delete();
};
var addNode=function(){
if(event.zhengjing.length){
var card=ui.create.card(ui.special,'noclick',true);
card.init(['','',event.zhengjing.shift()]);
card.addEventListener(lib.config.touchscreen?'touchend':'click',click);
event.zhengjing_nodes.push(card);
card.style.position='absolute';
var rand1=Math.round(Math.random()*100);
var rand2=Math.round(Math.random()*100);
var rand3=Math.round(Math.random()*40)-20;
card.style.left='calc('+rand1+'% - '+rand1+'px)';
card.style.top='calc('+rand2+'% - '+rand2+'px)';
card.style.transform='scale(0.8) rotate('+rand3+'deg)';
card.style.opacity=0;
event.dialog.appendChild(card);
ui.refresh(card);
card.style.opacity=1;
card.style.transform='scale(1) rotate('+rand3+'deg)';
}
if(event.zhengjing_nodes.length>(event.zhengjing.length>0?2:0)) event.zhengjing_nodes.shift().delete();
if(event.zhengjing.length||event.zhengjing_nodes.length) setTimeout(function(){
addNode();
},800);
else event.settle();
};

game.pause();
game.countChoose();
addNode();
};
//event.switchToAuto=switchToAuto;
game.broadcastAll(createDialog,player,event.videoId);
if(event.isMine()){
chooseButton(names);
}
else if(event.isOnline()){
event.player.send(chooseButton,names);
event.player.wait();
game.pause();
}
else{
switchToAuto();
}
"step 1"
game.broadcastAll(function(id,time){
if(_status.connectMode) lib.configOL.choose_timeout=time;
var dialog=get.idDialog(id);
if(dialog){
dialog.close();
}
},event.videoId,event.time);
var result=event.result||result;
for(var i=0;i<cards.length;i++){
//if(cards.length==1) break;
if(!result.links.contains(cards[i].name)) cards.splice(i--,1);
}
if(cards.length) player.showCards(cards,get.translation(player)+'整理出了以下经典');
else{
game.log(player,'并没有整理出经典');
player.popup('杯具');
event.finish();
}
"step 2"
player.chooseTarget(true,'请选择一名角色，然后你将整理出的经典中的任意张牌置于其武将牌上并获得剩余的牌').set('ai',function(target){
if(target.hasSkill('xinfu_pdgyingshi')) return 0;
var player=_status.event.player;
var cards=_status.event.getParent().cards;
var att=get.attitude(player,target);
if(att<=0&&target.storage.zhengjing2) return 0;//无态度和负态度不给他放牌
if(att<0&&target.countCards('j')>0&&!target.storage.zhengjing) return 0;//不给敌人解判定
if(att<0&&target.hasSkill('pingkou')&&!target.storage.zhengjing) return 0;//不配合敌人【平寇】
if(att>1&&target.storage.zhengjing2.length<2) return att*4;//多人整经时给他解决牌数稀缺问题
if(att>1&&target.countCards('j')>0&&!target.storage.zhengjing) return att*3;//优先给队友解判定
if(att>1&&target.hasSkill('pingkou')&&!target.storage.zhengjing) return att*2.5;//优先配合队友【平寇】
return -att;//最后限制敌人
});
"step 3"
if(result.bool){
event.target=result.targets[0];
player.line(event.target,'thunder');
player.chooseButton(['请选择为'+get.translation(event.target)+'留下的经典',cards],true,[1,cards.length]).set('ai',function(button){
var player=_status.event.player;
if(ui.selected.buttons.length&&get.attitude(player,event.target)<=0) return -1;
if(get.attitude(player,event.target)>0) return get.value(button.link);
return 20-get.value(button.link);
});
}
"step 4"
if(result.bool){
player.addExpose(0.2);
event.cards=result.links;
cards.remove(event.cards);
target.addSkill('zhengjing2');
player.$give(event.cards,target,false);
target.markAuto('zhengjing2',event.cards);
game.cardsGotoSpecial(event.cards);
game.log(player,'将',event.cards,'置于了',target,'的武将牌上');
if(cards.length) player.gain(cards,'gain2','log');
}
"step 5"
game.updateRoundNumber();
},
ai:{
order:10,
result:{player:1},
threaten:3.2,
}
},
*/
//霹雳车ai修复
lib.skill.ly_piliche={
trigger:{source:'damageSource'},
check:function(event,player){
return get.attitude(player,event.player)*get.value(event.player.getDiscardableCards(player,'e'),event.player)<0;
},
filter:function(event,player){
return player!=event.player&&event.player.countDiscardableCards(player,'e')>0;
},
logTarget:'player',
content:function(){
player.discardPlayerCard(trigger.player,'e',true,trigger.player.countCards('e'));
}
},
//郭女王【偏宠】无可得牌时要洗牌，同时降低拥有【偏宠】得牌效果时的嘲讽
lib.skill.pianchong2={
audio:'pianchong',
trigger:{player:'loseAfter',global:['equipAfter','addJudgeAfter','gainAfter','loseAsyncAfter']},
forced:true,
charlotte:true,
onremove:true,
filter:function(event,player){
var evt=event.getl(player);
if(!evt||!evt.cards2||!evt.cards2.length) return false;
for(var i of evt.cards2){
if(get.color(i,player)==player.storage.pianchong2) return true;
}
return false;
},
content:function(){
'step 0'
var num=trigger.getl(player).cards2.filter(function(card){
return get.color(card,player)==player.storage.pianchong2;
}).length;
var cards=[];
while(num--){
var card=get.cardPile2(function(card){
return !cards.contains(card)&&get.color(card,false)!=player.storage.pianchong2;
});
if(card) cards.push(card);
else break;
}
if(cards.length) player.gain(cards,'gain2');
else{
_status.event.trigger('washCard');
var cards=get.cards(ui.cardPile.childElementCount+1);
for(var i=0;i<cards.length;i++){
ui.cardPile.insertBefore(cards[i],ui.cardPile.childNodes[get.rand(ui.cardPile.childElementCount)]);
}
game.updateRoundNumber();
evevt.redo;
}
'step 1'
game.updateRoundNumber();
},
mark:true,
intro:{
content:function(storage,player){
var str='失去一张';
if(player.storage.pianchong2=='red') str+='红';
else str+='黑';
str+='色牌后，从牌堆中获得一张';
if(player.storage.pianchong2=='red') str+='黑';
else str+='红';
str+='色牌';
return str;
},
},
ai:{threaten:0.3},
},
//OL关索技能获得问题修复，十周年关索技能配音修复
lib.skill.zhengnan={
audio:1,
trigger:{global:'dieAfter'},
frequent:true,
content:function(){
'step 0'
player.draw(3);
var list=[];
if(!player.hasSkill('new_rewusheng')&&!player.hasSkill('xinzhengnan_new_rewusheng')) list.push('new_rewusheng');
if(!player.hasSkill('dangxian')) list.push('dangxian');
if(!player.hasSkill('rezhiman')&&!player.hasSkill('xinzhengnan_rezhiman')) list.push('rezhiman');
if(list.length) event.list=list;
else event.finish();
'step 1'
if(event.list.length==1) event._result={control:event.list[0]};
else player.chooseControl(event.list).set('prompt','征南：选择获得下列技能中的一个').set('ai',function(){
if(event.list.contains('dangxian')) return 'dangxian';
return 0;
});
'step 2'
player.addSkill(result.control);
player.popup(result.control);
game.log(player,'获得了技能','#g【'+get.translation(result.control)+'】');
},
ai:{threaten:1.3},
derivation:['new_rewusheng','dangxian','rezhiman'],
},
lib.skill.xinzhengnan={
audio:'zhengnan',
trigger:{global:'dying'},
frequent:true,
filter:function(event,player){
return !player.storage.xinzhengnan||!player.storage.xinzhengnan.contains(event.player);
},
content:function(){
'step 0'
if(!player.storage.xinzhengnan) player.storage.xinzhengnan=[];
player.storage.xinzhengnan.add(trigger.player);
player.storage.xinzhengnan.sortBySeat();
player.markSkill('xinzhengnan');
player.recover();
var list=[];
if(!player.hasSkill('new_rewusheng')&&!player.hasSkill('xinzhengnan_new_rewusheng')) list.push('new_rewusheng');
if(!player.hasSkill('xindangxian')&&!player.hasSkill('xinzhengnan_xindangxian')) list.push('xindangxian');
if(!player.hasSkill('rezhiman')&&!player.hasSkill('xinzhengnan_rezhiman')) list.push('rezhiman');
if(list.length){
player.draw();
event.list=list;
}
else{
player.draw(3);
event.finish();
}
'step 1'
if(event.list.length==1) event._result={control:event.list[0]};
else player.chooseControl(event.list).set('prompt','征南：选择获得下列技能中的一个').set('ai',function(){
if(event.list.contains('xindangxian')) return 'xindangxian';
return 0;
});
'step 2'
if(result.control=='xindangxian') player.storage.xinfuli=true;
player.addSkill('xinzhengnan_'+result.control);
player.popup(result.control);
game.log(player,'获得了技能','#g【'+get.translation(result.control)+'】');
},
ai:{threaten:1.3},
intro:{
content:'已因$发动过技能',
},
derivation:['new_rewusheng','xindangxian','rezhiman'],
subSkill:{
new_rewusheng:{audio:'wusheng_guansuo',inherit:'new_rewusheng'},
xindangxian:{audio:'dangxian_guansuo',inherit:'xindangxian'},
rezhiman:{audio:'zhiman_guansuo',inherit:'rezhiman'},
},
},
lib.skill.wusheng_guansuo={audio:2},
lib.skill.dangxian_guansuo={audio:2},
lib.skill.zhiman_guansuo={audio:2},
//修复【武娘·初版】对象问题
lib.skill.xinfu_wuniang={
trigger:{player:['useCard','respond']},
audio:2,
direct:true,
filter:function (event,player){
return event.card.name=='sha';
},
content:function (){
'step 0'
player.chooseTarget(get.prompt('xinfu_wuniang'),'获得一名其他角色的一张牌，然后其和场上所有的“关索”摸一张牌。',function(card,player,target){
if(player==target) return false;
return target.countGainableCards(player,'he')>0;
}).set('ai',function(target){
return 10-get.attitude(_status.event.player,target);
});
'step 1'
if(result.bool){
var target=result.targets[0];
player.logSkill('xinfu_wuniang',target);
player.line(target,'fire');
event.draws=game.filterPlayer(function(current){
if(current==target) return true;
return ['guansuo','ol_guansuo'].contains(current.name)||['guansuo','ol_guansuo'].contains(current.name2);
});
player.gainPlayerCard(target,'he',true);
}
else event.finish();
'step 2'
game.asyncDraw(event.draws,1);
game.delay();
},
},
/*
//修复童渊【朝凤】ai砍队友优先加伤的蛇皮操作
lib.skill.chaofeng={
audio:2,
trigger:{source:'damageBegin1'},
direct:true,
filter:function(event,player){
return player.isPhaseUsing()&&!player.hasSkill('chaofeng2');
},
content:function(){
'step 0'
var str='弃置一张牌并摸一张牌',num,suit;
if(trigger.card){
num=get.number(trigger.card);
suit=get.suit(trigger.card);
if(lib.suit.contains(suit)) str+='；若弃置'+get.translation(suit)+'牌则改为摸两张牌';
if(typeof num=='number') str+='；若弃置点数为'+get.strNumber(num)+'的牌则伤害+1';
}
var next=player.chooseToDiscard('he',get.prompt('chaofeng',trigger.player),str);
next.set('ai',function(card){
var player=_status.event.player,suit=_status.event.suit,number=_status.event.number;
var val=4-get.value(card);
if(get.suit(card,player)==suit) val+=3;
if(get.number(card,player)==number&&get.attitude(player,trigger.player)<0) val+=4;
if(get.number(card,player)==number&&get.attitude(player,trigger.player)>0) val-=4;
return val;
});
next.logSkill=['chaofeng',trigger.player];
if(lib.suit.contains(suit)){
event.suit=suit;
next.set('suit',suit);
}
if(typeof num=='number'){
event.number=num;
next.set('number',num);
}
'step 1'
if(result.bool){
player.addTempSkill('chaofeng2','phaseUseEnd');
var card=result.cards[0];
player.draw((event.suit&&get.suit(card,player)==event.suit)?2:1);
if(event.number&&get.number(card,player)==event.number) trigger.num++;
}
},
},
*/
//修复晋司马懿【权变·旧】无法触发配音的问题
lib.skill.quanbian={
audio:2,
trigger:{player:['useCard','respond']},
hasHand:function(event){
var evts=event.player.getHistory('lose',function(evt){
return evt.getParent()==event;
});
return evts&&evts.length==1&&evts[0].hs.length>0;
},
filter:function(event,player){
var phase=event.getParent('phaseUse');
if(!phase||phase.player!=player) return false;
var suit=get.suit(event.card);
if(!lib.suit.contains(suit)||!lib.skill.quanbian.hasHand(event)) return false;
return player.getHistory('useCard',function(evt){
return evt!=event&&get.suit(evt.card)==suit&&lib.skill.quanbian.hasHand(evt)&&evt.getParent('phaseUse')==phase;
}).length+player.getHistory('respond',function(evt){
return evt!=event&&get.suit(evt.card)==suit&&lib.skill.quanbian.hasHand(evt)&&evt.getParent('phaseUse')==phase;
}).length==0;
},
direct:true,
content:function(){
'step 0'
player.chooseControl('cancel2').set('prompt',get.prompt('quanbian')).set('choiceList',[
'摸一张牌',
'观看牌堆顶的'+get.cnNumber(player.maxHp)+'张牌并将其中一张置于牌堆底',
]).set('ai',function(){
var player=_status.event.player;
var suit=get.suit(_status.event.getTrigger().card);
if(player.countCards('h',function(card){
return get.suit(card)==suit&&player.hasValueTarget(card,null,true);
})) return 'cancel2';
return 0;
});
'step 1'
if(result.control=='cancel2'){
event.finish();
return;
}
player.logSkill('quanbian');
player.addTempSkill('quanbian2');
player.storage.quanbian2.add(get.suit(trigger.card));
player.markSkill('quanbian2');
if(result.index==0){
player.draw();
event.finish();
return;
}
event.cards=get.cards(player.maxHp);
player.chooseButton(['将一张牌置于牌堆底',event.cards],true);
'step 2'
while(cards.length){
var card=cards.pop();
card.fix();
if(card==result.links[0]) ui.cardPile.appendChild(card);
else ui.cardPile.insertBefore(card,ui.cardPile.firstChild);
}
game.updateRoundNumber();
},
},
//OL暴虐
lib.skill.rebaonue={
audio:'baonue2',
unique:true,
zhuSkill:true,
trigger:{global:'damageSource'},
filter:function(event,player){
if(player==event.source||!event.source||event.source.group!='qun') return false;
return player.hasZhuSkill('rebaonue',event.source);
},
direct:true,
content:function(){
'step 0'
trigger.source.chooseBool('是否对'+get.translation(player)+'发动【暴虐】？',lib.translate.rebaonue_info).set('choice',get.attitude(trigger.source,player)>0);
'step 1'
if(result.bool){
player.logSkill('rebaonue');
trigger.source.line(player,'green')
player.judge(function(card){
if(get.suit(card)=='spade') return 2;
return 0;
}).judge2=function(result){
return result.bool?true:false;
};
}
else event.finish();
'step 2'
if(result.suit=='spade') player.recover();
}
},
//应变扇子描述修复
lib.skill.wuxinghelingshan_skill={
equipSkill:true,
trigger:{player:'useCard1'},
filter:function(event,player){
return (event.card.name=='sha'&&event.card.nature&&event.card.nature!='kami');
},
audio:true,
direct:true,
content:function(){
'step 0'
var list=lib.linked.slice(0);
list.remove('kami');
list.remove(trigger.card.nature);
list.push('cancel2');
player.chooseControl(list).set('prompt',get.prompt('wuxinghelingshan_skill')).set('prompt2','将'+get.translation(trigger.card)+'转换为以下属性之一');
'step 1'
if(result.control!='cancel2'){
player.logSkill('wuxinghelingshan_skill');
player.popup(get.translation(result.control)+'杀',result.control);
game.log(trigger.card,'被转为了','#y'+get.translation(result.control),'属性');
trigger.card.nature=result.control;
}
else event.finish();
},
},
lib.skill.jinghe={
group:'xiemanjinengdetianshu',
init:function(player){
player.unmarkSkill('xiemanjinengdetianshu');
if(get.mode()!='guozhan') player.markSkill('xiemanjinengdetianshu');
},
onremove:function(player){
player.unmarkSkill('xiemanjinengdetianshu');
},
usable:1,
enable:'phaseUse',
filter:function(event,player){
return player.countCards('he');
},
selectCard:function(){
if(ui.selected.targets.length) return [ui.selected.targets.length,4];
return [1,4];
},
selectTarget:function(){
return ui.selected.cards.length;
},
filterTarget:true,
filterCard:function(card){
if(ui.selected.cards.length){
var name=get.name(card);
for(var i of ui.selected.cards){
if(get.name(i)==name) return false;
}
}
return true;
},
check:function(card){
var player=_status.event.player;
if(game.countPlayer(function(current){
return get.attitude(player,current)>0;
})>ui.selected.cards.length) return get.position(card)=='e'?2:1;
return 0;
},
position:'he',
complexCard:true,
discard:false,
lose:false,
delay:false,
multitarget:true,
multiline:true,
content:function(){
'step 0'
player.showCards(cards,get.translation(player)+'发动了【经合】');
event.skills=lib.skill.jinghe.derivation.randomGets(4);
if(!player.hasSkill('jinghe_clear'))player.addTempSkill('jinghe_clear',{player:'phaseBegin'});
event.targets.sortBySeat();
event.num=0;
'step 1'
event.target=targets[num];
event.num++;
event.target.chooseControl(event.skills,'cancel2').set('choiceList',event.skills.map(function(i){
return '<div class="skill">【'+get.translation(lib.translate[i+'_ab']||get.translation(i).slice(0,2))+'】</div><div>'+get.skillInfoTranslation(i,player)+'</div>';
})).set('displayIndex',false).set('prompt','选择获得一个技能');
'step 2'
var skill=result.control;
if(skill!='cancel2'){
event.skills.remove(skill);
target.addAdditionalSkill('jinghe_'+player.playerid,skill);
target.popup(skill);
game.log(target,'获得了技能','#g【'+get.translation(skill)+'】');
}
if(event.num<event.targets.length) event.goto(1);
if(target!=game.me&&!target.isOnline2()) game.delayx();
},
ai:{
threaten:3,
order:10,
result:{
target:1,
},
},
derivation:['xinleiji','rebiyue','new_retuxi','mingce','xinzhiyan','nhyinbing','nhhuoqi','nhguizhu','nhxianshou','nhlundao','nhguanyue','nhyanzheng'],
subSkill:{
clear:{
onremove:function(player){
game.countPlayer(function(current){
current.removeAdditionalSkill('jinghe_'+player.playerid);
});
},
},
},
},
lib.skill.xiemanjinengdetianshu={
charlotte:true,
nobracket:true,
onremove:function(player){
player.unmarkSkill('xiemanjinengdetianshu');
},
marktext:'<span class=\"texiaotext\" style=\"color:#FFD700\">天书</span>',
intro:{content:'mark',name:'<span class=\"texiaotext\" style=\"color:#FFD700\">写满技能的天书</span>'},
intro:{
content:function(storage,player,skill){
var str='';
if(player.hasSkill('jinghe')){
str+='<li><span class=\"texiaotext\" style=\"color:#FFD700\">写满技能的天书</span>每次随机展示四个技能';
str+='<br><li><span class=\"texiaotext\" style=\"color:#FFD700\">写满技能的天书</span>含有的技能：';
str+='〖雷击〗、〖闭月〗、〖突袭〗、〖明策〗、〖直言〗、〖阴兵〗、〖活气〗、〖鬼助〗、〖仙授〗、〖论道〗、〖观月〗、〖言政〗';
}
if(player.hasSkill('gzjinghe')){
if(player.hasSkill('jinghe')) str+='<br>';
str+='<li><span class=\"texiaotext\" style=\"color:#FFD700\">写满技能的天书（国战）</span>每次随机展示X个技能（X为你本次发动〖经合〗展示的牌数）';
str+='<br><li><span class=\"texiaotext\" style=\"color:#FFD700\">写满技能的天书（国战）</span>含有的技能：';
str+='〖雷击〗、〖阴兵〗、〖活气〗、〖鬼助〗、〖仙授〗、〖论道〗、〖观月〗、〖言政〗';
}
return str;
},
},
trigger:{player:'showCharacterAfter'},
forced:true,
silent:true,
filter:function(event,player){
return event.name=='showCharacter'&&event.toShow&&(event.toShow.contains('re_nanhualaoxian')||event.toShow.contains('gz_re_nanhualaoxian'));
},
content:function(){
player.markSkill('xiemanjinengdetianshu');
},
},
//杨仪【共损】标识优化
lib.skill.gongsun_shadow={
global:'gongsun_shadow2',
init:function(player,skill){
if(!player.storage[skill]) player.storage[skill]=[];
},
marktext:'损',
onremove:true,
intro:{
content:function(shadow){
var str='你和';
for(var i=0;i<shadow.length;i++){
if(i>0) str+='<br>'
str+=get.translation(shadow[i][0]);
str+='不能使用、打出或弃置';
str+=get.translation(shadow[i][1]);
str+='直到你的下一个回合开始或你死亡';
}
return str;
},
},
mod:{
cardEnabled:function(card,player){
var list=player.storage.gongsun_shadow;
for(var i=0;i<list.length;i++){
if(list[i][1]==card.name) return false;
}
},
cardRespondable:function(card,player){
var list=player.storage.gongsun_shadow;
for(var i=0;i<list.length;i++){
if(list[i][1]==card.name) return false;
}
},
cardSavable:function(card,player){
var list=player.storage.gongsun_shadow;
for(var i=0;i<list.length;i++){
if(list[i][1]==card.name) return false;
}
},
cardDiscardable:function(card,player){
var list=player.storage.gongsun_shadow;
for(var i=0;i<list.length;i++){
if(list[i][1]==card.name) return false;
}
},
},
},
//张仲景
lib.skill.old_jishi={
audio:'jishi',
trigger:{player:'useCardAfter'},
forced:true,
filter:function(event,player){
return event.cards.filterInD().length>0&&!player.getHistory('sourceDamage',function(evt){
return evt.card==event.card;
}).length;
},
content:function(){
var cards=trigger.cards.filterInD();
game.log(player,'将',cards,'置于了仁库');
game.cardsGotoSpecial(cards,'toRenku');
},
init:function(player){
player.storage.renku=true;
},
group:'old_jishi_draw',
subSkill:{
draw:{
audio:'jishi',
trigger:{global:['gainAfter','cardsDiscardAfter']},
forced:true,
filter:function(event,player){
return event.fromRenku==true;
},
content:function(){
player.draw();
},
},
},
},
//神郭嘉
lib.skill.stianyi={
audio:2,
trigger:{player:'phaseZhunbeiBegin'},
forced:true,
juexingji:true,
skillAnimation:true,
animationColor:'gray',
filter:function(event,player){
return !game.hasPlayer(function(current){
return current.getAllHistory('damage').length==0;
});
},
content:function(){
'step 0'
player.awakenSkill('stianyi');
player.gainMaxHp(2);
player.recover();
'step 1'
player.chooseTarget(true,'令一名角色获得技能〖佐幸〗').set('ai',function(target){
return get.attitude(_status.event.player,target);
});
'step 2'
if(result.bool){
var target=result.targets[0];
player.line(target,'green');
target.storage.zuoxing=player;
target.addSkillLog('zuoxing');
}
},
derivation:'zuoxing',
},
lib.skill.zuoxing={
group:'zuoxing_use',
audio:2,
enable:'phaseUse',
usable:1,
filter:function(event,player){
if(!player.hasSkill('zuoxing_2')) return false;
for(var i of lib.inpile){
if(get.type(i)=='trick'&&event.filterCard({name:i,isCard:true},player,event)) return true;
}
return false;
},
chooseButton:{
dialog:function(event,player){
var list=[];
for(var i of lib.inpile){
if(get.type(i)=='trick'&&event.filterCard({name:i,isCard:true},player,event)) list.push(['锦囊','',i]);
}
return ui.create.dialog('佐幸',[list,'vcard']);
},
check:function(button){
return _status.event.player.getUseValue({name:button.link[2],isCard:true});
},
backup:function(links,player){
return {
viewAs:{
name:links[0][2],
isCard:true,
},
filterCard:()=>false,
selectCard:-1,
popname:true,
precontent:function(){
if(player.hasSkill('zuoxing_2')) player.logSkill('zuoxing');
},
}
},
prompt:function(links,player){
return '请选择'+get.translation(links[0][2])+'的目标';
},
},
ai:{order:1,result:{player:1}},
subSkill:{
'2':{charlotte:true},
use:{
audio:'zuoxing',
trigger:{player:'phaseZhunbeiBegin'},
filter:function(event,player){
var target=player.storage.zuoxing;
return player.hasSkill('zuoxing')&&target&&target.isAlive()&&target.maxHp>1;
},
check:function(event,player){
var target=player.storage.zuoxing;
if(get.attitude(player,target)<=0) return true;
return target.maxHp>3&&!player.hasJudge('lebu');
},
prompt:function(){
var player=_status.event.player;
return '是否发动【佐幸】？（'+get.translation(player.storage.zuoxing)+'当前体力上限：'+player.storage.zuoxing.maxHp+'）';
},
prompt2:function(){
var player=_status.event.player;
return '令'+get.translation(player.storage.zuoxing)+'减少一点体力上限。若如此做，你可以于本回合的出牌阶段视为使用任意一张普通锦囊牌。';
},
content:function(){
player.line(player.storage.zuoxing,'fire');
player.storage.zuoxing.loseMaxHp();
player.addTempSkill('zuoxing_2');
},
},
},
},
lib.skill.xintianyi={
audio:'stianyi',
trigger:{player:'phaseZhunbeiBegin'},
forced:true,
juexingji:true,
skillAnimation:true,
animationColor:'gray',
filter:function(event,player){
return !game.hasPlayer(function(current){
return current.getAllHistory('damage').length==0;
});
},
content:function(){
'step 0'
player.awakenSkill('xintianyi');
player.gainMaxHp(2);
player.recover();
'step 1'
player.chooseTarget(true,'令一名角色获得技能〖佐幸〗').set('ai',function(target){
return get.attitude(_status.event.player,target);
});
'step 2'
if(result.bool){
var target=result.targets[0];
player.line(target,'green');
target.storage.xinzuoxing=player;
target.addSkillLog('xinzuoxing');
}
},
derivation:'xinzuoxing',
},
lib.skill.xinzuoxing={
audio:'zuoxing',
usable:1,
enable:'phaseUse',
filter:function(event,player){
var target=player.storage.xinzuoxing;
return target&&target.isAlive()&&target.maxHp>1;
},
content:function(){
player.line(player.storage.xinzuoxing);
player.storage.xinzuoxing.loseMaxHp();
var next=player.chooseToUse(true);
next.set('norestore',true);
next.set('_backupevent','zuoxing');
next.backup('zuoxing');
next.set('zuoxing',true);
},
ai:{
order:7,
result:{
player:function(player,target){
var target=player.storage.xinzuoxing;
if(target){
if(get.attitude(player,target)<=0) return 114514;
if(target.maxHp>3) return 1;
return 0;
}
}
}
},
},
//OL刘琦
lib.skill.oltunjiang={
audio:'sptunjiang',
trigger:{player:'phaseJieshuBegin'},
frequent:true,
filter:function(event,player){
if(player.getHistory('skipped').contains('phaseUse')) return false;
return player.getHistory('useCard',function(evt){
if(evt.targets&&evt.targets.length&&evt.isPhaseUsing()){
var targets=evt.targets.slice(0);
while(targets.contains(player)) targets.remove(player);
return targets.length>0;
}
return false;
}).length==0;
},
content:function(){
player.draw(game.countGroup());
},
},
//于吉
lib.skill.xinfu_guhuo={
audio:'guhuo_guess',
derivation:'chanyuan',
enable:['chooseToUse','chooseToRespond'],
hiddenCard:function(player,name){
return (lib.inpile.contains(name)&&player.countCards('h')>0&&!player.hasSkill('guhuo_phase'));
},
filter:function(event,player){
if(!player.countCards('hs')||player.hasSkill('guhuo_phase')) return false;
for(var i of lib.inpile){
if(i=='shan'||i=='wuxie') continue;
var type=get.type(i);
if((type=='basic'||type=='trick')&&event.filterCard({name:i},player,event)) return true;
if(i=='sha'){
for(var j of lib.inpile_nature){
if(event.filterCard({name:i,nature:j},player,event)) return true;
}
}
}
return false;
},
chooseButton:{
dialog:function(){
var list=[];
for(var i of lib.inpile){
if(i=='shan'||i=='wuxie') continue;
var type=get.type(i);
if(type=='basic'||type=='trick') list.push([type,'',i]);
if(i=='sha'){
for(var j of lib.inpile_nature) list.push(['基本','','sha',j]);
}
}
return ui.create.dialog('蛊惑',[list,'vcard']);
},
filter:function(button,player){
var evt=_status.event.getParent();
return evt.filterCard({name:button.link[2],nature:button.link[3]},player,evt);
},
check:function(button){
var player=_status.event.player;
var hasEnemy=game.hasPlayer(function(current){
return current!=player&&!current.hasSkill('chanyuan')&&(get.realAttitude||get.attitude)(current,player)<0;
});
var card={name:button.link[2],nature:button.link[3]};
var val=_status.event.getParent().type=='phase'?player.getUseValue(card):1;
if(val<=0) return 0;
if(hasEnemy){
if(!player.countCards('h',function(cardx){
if(card.name==cardx.name){
if(card.name!='sha') return true;
return get.nature(card)==get.nature(cardx);
}
return false;
})) return 0;
return 3*val;
}
return val;
},
backup:function(links,player){
return {
viewAs:{
name:links[0][2],
nature:links[0][3],
suit:'none',
number:null,
},
position:'hs',
ai1:function(card){
var player=_status.event.player;
var hasEnemy=game.hasPlayer(function(current){
return current!=player&&!current.hasSkill('chanyuan')&&(get.realAttitude||get.attitude)(current,player)<0;
});
var cardx=lib.skill.xinfu_guhuo_backup.viewAs;
if(hasEnemy){
if(card.name==cardx.name&&(card.name!='sha'||card.nature==cardx.nature)) return 10;
return 0;
}
return 6-get.value(card);
},
filterCard:true,
}
},
prompt:function(links){
return '将一张手牌当做'+(get.translation(links[0][3])||'')+get.translation(links[0][2])+'使用';
},
},
ai:{
fireAttack:true,
respondShan:true,
respondSha:true,
skillTagFilter:function(player){
if(!player.countCards('hs')||player.hasSkill('guhuo_phase')) return false;
},
order:10,
result:{
player:1,
},
threaten:1.3,
},
group:['guhuo_shan','guhuo_wuxie','guhuo_guess'],
},
lib.skill.guhuo_shan={
log:false,
silent:true,
popup:false,
enable:['chooseToUse','chooseToRespond'],
viewAs:{
name:'shan',
suit:'none',
number:null,
},
viewAsFilter:function(player){
return player.countCards('hs')&&!player.hasSkill('guhuo_phase');
},
check:function(card){
var player=_status.event.player;
var hasEnemy=game.hasPlayer(function(current){
return current!=player&&!current.hasSkill('chanyuan')&&(get.realAttitude||get.attitude)(current,player)<0;
});
var cardx='shan';
if(hasEnemy){
if(card.name==cardx) return 10;
return 0;
}
return 6-get.value(card);
},
prompt:'将一张手牌当做【闪】使用或打出',
filterCard:true,
position:'hs',
ai:{
order:4,
},
},
lib.skill.guhuo_wuxie={
log:false,
silent:true,
popup:false,
enable:'chooseToUse',
viewAs:{
name:'wuxie',
suit:'none',
number:null,
},
check:function(card){
var player=_status.event.player;
var hasEnemy=game.hasPlayer(function(current){
return current!=player&&!current.hasSkill('chanyuan')&&(get.realAttitude||get.attitude)(current,player)<0;
});
var cardx='wuxie';
if(hasEnemy){
if(card.name==cardx) return 10;
return 0;
}
return 6-get.value(card);
},
viewAsFilter:function(player){
return player.countCards('hs')&&!player.hasSkill('guhuo_phase');
},
filterCard:true,
prompt:'将一张手牌当做【无懈可击】使用',
position:'hs',
ai:{
order:4,
},
},
lib.skill.xinfu_guhuo_backup={audio:'guhuo_guess'},
lib.skill.guhuo_guess={
audio:2,
trigger:{player:['useCardBefore','respondBefore']},
direct:true,
priority:15,
firstDo:true,
filter:function(event,player){
return event.skill=='xinfu_guhuo_backup'||event.skill=='guhuo_shan'||event.skill=='guhuo_wuxie';
},
content:function (){
'step 0'
player.logSkill('guhuo_guess');
player.addTempSkill('guhuo_phase');
player.popup(trigger.card.name,'metal');
player.lose(trigger.cards,ui.special,'insert');
player.line(trigger.targets,trigger.card.nature);
trigger.line=false;
event.prompt=get.translation(player)+'声明了'+get.translation(trigger.card.name)+'，是否质疑？';
event.guessers=game.filterPlayer(function(current){
return current!=player&&!current.hasSkill('chanyuan');
});
event.guessers.sort(lib.sort.seat);
event.ally=[];
event.betray=[];
'step 1'
if(event.guessers.length==0) event.goto(3);
else{
event.guessers[0].chooseControl('质疑','不质疑').set('prompt',event.prompt).set('ai',function(){
if(get.attitude(event.guessers[0],player)>0) return '不质疑';
return Math.random()<0.5?'不质疑':'质疑';
});
}
'step 2'
if(!result.control) result.control='不质疑';
event.guessers[0].chat(result.control);
game.delay();
if(result.control=='不质疑'){
game.log(event.guessers[0],'#g不质疑');
event.ally.push(event.guessers[0]);
}else{
game.log(event.guessers[0],'#y质疑');
event.betray.push(event.guessers[0]);
event.guessers[0].addExpose(0.2);
event.guessers=[];
game.delay();
}
if(event.guessers.length){
event.guessers.remove(event.guessers[0]);
event.goto(1);
}
'step 3'
player.showCards(trigger.cards);
if(event.betray.length){
if(trigger.card.name==trigger.cards[0].name){
for(var i=0;i<event.betray.length;i++){
event.betray[i].popup('质疑错误','fire');
event.betray[i].addSkill('chanyuan');
game.log(event.betray[i],'质疑','#y错误');
game.log(event.betray[i],'获得了技能','#g【缠怨】');
game.log(player,'使用的','#y'+get.translation(trigger.card.name),'成功生效');
}
}
else{
for(var i=0;i<event.betray.length;i++){
event.betray[i].popup('质疑正确','wood');
game.log(event.betray[i],'质疑','#g正确');
}
game.log(player,'使用的','#y'+get.translation(trigger.card.name),'作废了');
game.cardsDiscard(trigger.cards);
trigger.cancel();
if((trigger.name=='useCard'||trigger.name=='respond')&&trigger.parent) trigger.parent.goto(0);
}
}
else game.log(player,'使用的','#y'+get.translation(trigger.card.name),'成功生效');
'step 4'
game.delay();
},
},
lib.skill.old_guhuo={
audio:2,
enable:['chooseToUse','chooseToRespond'],
hiddenCard:function(player,name){
return (lib.inpile.contains(name)&&player.countCards('h')>0);
},
filter:function(event,player){
if(!player.countCards('hs')) return false;
for(var i of lib.inpile){
if(i=='shan'||i=='wuxie') continue;
var type=get.type(i);
if((type=='basic'||type=='trick')&&event.filterCard({name:i},player,event)) return true;
if(i=='sha'){
for(var j of lib.inpile_nature){
if(event.filterCard({name:i,nature:j},player,event)) return true;
}
}
}
return false;
},
chooseButton:{
dialog:function(){
var list=[];
for(var i of lib.inpile){
if(i=='shan'||i=='wuxie') continue;
var type=get.type(i);
if(type=='basic'||type=='trick') list.push([type,'',i]);
if(i=='sha'){
for(var j of lib.inpile_nature) list.push(['基本','','sha',j]);
}
}
return ui.create.dialog('蛊惑',[list,'vcard']);
},
filter:function(button,player){
var evt=_status.event.getParent();
return evt.filterCard({name:button.link[2],nature:button.link[3]},player,evt);
},
check:function(button){
var player=_status.event.player;
var hasEnemy=game.hasPlayer(function(current){
return current!=player&&(get.realAttitude||get.attitude)(current,player)<0;
});
var card={name:button.link[2],nature:button.link[3]};
var val=_status.event.getParent().type=='phase'?player.getUseValue(card):1;
if(val<=0) return 0;
if(hasEnemy){
if(!player.countCards('h',function(cardx){
if(card.name==cardx.name){
if(card.name!='sha') return true;
return get.nature(card)==get.nature(cardx);
}
return false;
})) return 0;
return 3*val;
}
return val;
},
backup:function(links,player){
return {
viewAs:{
name:links[0][2],
nature:links[0][3],
suit:'none',
number:null,
},
position:'hs',
ai1:function(card){
var player=_status.event.player;
var hasEnemy=game.hasPlayer(function(current){
return current!=player&&(get.realAttitude||get.attitude)(current,player)<0;
});
var cardx=lib.skill.old_guhuo_backup.viewAs;
if(hasEnemy){
if(card.name==cardx.name&&(card.name!='sha'||card.nature==cardx.nature)) return 10;
return 0;
}
return 6-get.value(card);
},
filterCard:true,
}
},
prompt:function(links){
return '将一张手牌当做'+(get.translation(links[0][3])||'')+get.translation(links[0][2])+'使用';
},
},
ai:{
fireAttack:true,
respondShan:true,
respondSha:true,
skillTagFilter:function(player){
if(!player.countCards('hs')) return false;
},
order:10,
result:{
player:1,
},
threaten:1.3,
},
group:['old_guhuo_shan','old_guhuo_wuxie','old_guhuo_guess'],
},
lib.skill.old_guhuo_shan={
log:false,
silent:true,
popup:false,
enable:['chooseToUse','chooseToRespond'],
viewAs:{
name:'shan',
suit:'none',
number:null,
},
viewAsFilter:function(player){
return player.countCards('hs');
},
check:function(card){
var player=_status.event.player;
var hasEnemy=game.hasPlayer(function(current){
return current!=player&&(get.realAttitude||get.attitude)(current,player)<0;
});
var cardx='shan';
if(hasEnemy){
if(card.name==cardx) return 10;
return 0;
}
return 6-get.value(card);
},
prompt:'将一张手牌当做【闪】使用或打出',
filterCard:true,
position:'hs',
ai:{
order:4,
},
},
lib.skill.old_guhuo_wuxie={
log:false,
silent:true,
popup:false,
enable:'chooseToUse',
viewAs:{
name:'wuxie',
suit:'none',
number:null,
},
check:function(card){
var player=_status.event.player;
var hasEnemy=game.hasPlayer(function(current){
return current!=player&&(get.realAttitude||get.attitude)(current,player)<0;
});
var cardx='wuxie';
if(hasEnemy){
if(card.name==cardx) return 10;
return 0;
}
return 6-get.value(card);
},
viewAsFilter:function(player){
return player.countCards('hs');
},
filterCard:true,
prompt:'将一张手牌当做【无懈可击】使用',
position:'hs',
ai:{
order:4,
},
},
lib.skill.old_guhuo_backup={audio:'old_guhuo'},
lib.skill.old_guhuo_guess={
audio:'old_guhuo',
trigger:{player:['useCardBefore','respondBefore']},
direct:true,
priority:15,
firstDo:true,
filter:function(event,player){
return event.skill=='old_guhuo_backup'||event.skill=='old_guhuo_shan'||event.skill=='old_guhuo_wuxie';
},
content:function (){
'step 0'
player.logSkill('old_guhuo');
player.popup(trigger.card.name,'metal');
player.lose(trigger.cards,ui.special,'insert');
player.line(trigger.targets,trigger.card.nature);
trigger.line=false;
event.prompt=get.translation(player)+'声明了'+get.translation(trigger.card.name)+'，是否质疑？';
event.guessers=game.filterPlayer(function(current){
return current!=player&&current.hp!=0;
});
event.guessers.sort(lib.sort.seat);
event.ally=[];
event.betray=[];
'step 1'
if(event.guessers.length==0) event.goto(3);
else{
event.guessers[0].chooseControl('质疑','不质疑').set('prompt',event.prompt).set('ai',function(){
if(get.attitude(event.guessers[0],player)>0) return '不质疑';
return Math.random()<0.5?'不质疑':'质疑';
});
}
'step 2'
if(!result.control) result.control='不质疑';
event.guessers[0].chat(result.control);
game.delay();
if(result.control=='不质疑'){
game.log(event.guessers[0],'#g不质疑');
event.ally.push(event.guessers[0]);
}else{
game.log(event.guessers[0],'#y质疑');
event.guessers[0].addExpose(0.1);
event.betray.push(event.guessers[0]);
}
if(event.guessers.length){
event.guessers.remove(event.guessers[0]);
event.goto(1);
}
'step 3'
player.showCards(trigger.cards);
if(event.betray.length){
if(trigger.card.name==trigger.cards[0].name){
for(var i=0;i<event.betray.length;i++){
event.betray[i].popup('质疑错误','fire');
event.betray[i].loseHp();
}
if(get.suit(trigger.cards[0])!='heart'){
game.log(player,'使用的','#y'+get.translation(trigger.card.name),'作废了');
game.cardsDiscard(trigger.cards);
trigger.cancel();
if((trigger.name=='useCard'||trigger.name=='respond')&&trigger.parent) trigger.parent.goto(0);
}
else game.log(player,'使用的','#y'+get.translation(trigger.card.name),'成功生效');
}
else{
for(var i=0;i<event.betray.length;i++){
event.betray[i].popup('质疑正确','wood');
game.log(event.betray[i],'质疑','#g正确');
}
game.asyncDraw(event.betray);
game.log(player,'使用的','#y'+get.translation(trigger.card.name),'作废了');
game.cardsDiscard(trigger.cards);
trigger.cancel();
if((trigger.name=='useCard'||trigger.name=='respond')&&trigger.parent) trigger.parent.goto(0);
}
}
else game.log(player,'使用的','#y'+get.translation(trigger.card.name),'成功生效');
'step 4'
game.delay();
},
},
//蔡阳YYDS!!!
lib.skill.yinka={
group:'yinka_view',
charlotte:true,
trigger:{global:['drawBegin','judgeBegin']},
direct:true,
firstDo:true,
filter:function(){
return ui.cardPile.childNodes.length>0;
},
/*
content:function(){
'step 0'
if(trigger.name=='judge') player.chooseButton(['印卡：'+get.translation(trigger.player)+(player==trigger.player?'（你）':'')+'即将进行判定，请选择要置于牌堆'+(trigger.bottom?'底':'顶')+'的牌',Array.from(ui.cardPile.childNodes)],1).set('ai',function(botton){
var player=_status.event.player,js=trigger.player.getCards('j');
if(js.length){
var judge=get.judge(js[0]);
if(judge&&(judge(button.link)+0.01)*get.attitude(player,trigger.player)>0) return 20-get.value(button.link);
}
return 0;
});
else player.chooseButton(['印卡：'+get.translation(trigger.player)+(player==trigger.player?'（你）':'')+'即将从牌堆'+(trigger.bottom?'底':'顶')+'摸'+get.cnNumber(trigger.num)+'张牌，请选择要置于牌堆'+(trigger.bottom?'底':'顶')+'的牌（先选择的在上）',Array.from(ui.cardPile.childNodes)],[1,trigger.num]).set('ai',function(button){
var player=_status.event.player;
var att=get.attitude(player,trigger.player);
if(att==0) return -1;
if(att>1) return get.value(button.link);
return 20-get.value(button.link);
});
'step 1'
if(result.bool){
while(result.links.length){
if(trigger.bottom){
var card=result.links.shift();
ui.cardPile.removeChild(card);
ui.cardPile.appendChild(card);
}
else{
var card=result.links.pop();
ui.cardPile.removeChild(card);
ui.cardPile.insertBefore(card,ui.cardPile.firstChild)
}
}
}
},
*/
content:function(){
'step 0'
var cards=ui.cardPile.childNodes;
game.cardsGotoOrdering(cards);
var next=trigger.name=='judge'?player.chooseToMove('印卡：'+get.translation(trigger.player)+(player==trigger.player?'（你）':'')+'即将进行判定，请调控牌堆卡牌顺序'):player.chooseToMove('印卡：'+get.translation(trigger.player)+(player==trigger.player?'（你）':'')+'即将从牌堆'+(trigger.bottom?'底':'顶')+'摸'+get.cnNumber(trigger.num)+'张牌，请调控牌堆卡牌顺序');
next.set('list',[['牌堆',cards]]);
next.set('processAI',function(list){
var check=function(card){
var player=_status.event.player;
var target=trigger.player;
var att=get.attitude(player,target);
var judge=target.getCards('j')[cards.length];
if(judge){
return get.judge(judge)(card)*att;
}
return target.getUseValue(card)*att;
}
var cards=list[0][1].slice(0),cards=[];
list.sort(function(a,b){
return check(b)-check(a);
});
cards.push(cards.shift());
return [cards];
});
'step 1'
if(result.bool){
var list=result.moved[0].slice(0);
while(list.length){
ui.cardPile.insertBefore(list.pop(),ui.cardPile.firstChild);
}
game.updateRoundNumber();
}
else event.finish();
},
ai:{isLuckyStar:true},
subSkill:{
view:{
ai:{
viewHandcard:true,
skillTagFilter:function(player,arg,target){
return target!=player;
},
},
},
},
},
//保证手杀杜预可以在国战模式觉醒
lib.skill.spsanchen={
audio:2,
trigger:{player:'phaseJieshuBegin'},
forced:true,
juexingji:true,
skillAnimation:true,
animationColor:'gray',
filter:function(event,player){
var num=2;
if(get.mode()=='guozhan') num=1;
return player.countMark('spwuku')>num;
},
content:function(){
player.awakenSkill('spsanchen');
player.gainMaxHp();
player.recover();
player.addSkillLog('spmiewu');
},
derivation:'spmiewu',
},
//OL华歆
lib.skill.olxibing={
audio:2,
trigger:{player:'damageEnd'},
filter:function (event,player){
return event.source&&event.source!=player;
},
direct:true,
content:function(){
'step 0'
var target=trigger.source;
event.target=target;
player.chooseTarget(get.prompt('olxibing'),'弃置自己或'+get.translation(target)+'的两张牌，然后手牌数较少的角色摸两张牌且不能对你使用牌直到回合结束',function(card,player,target){
if(target!=player&&target!=_status.event.target) return false;
return target.countCards('he')>0;
}).set('target',target).set('ai',function(targetx){
var player=_status.event.player,target=_status.event.target;
if(target==targetx){
if(get.attitude(player,target)>0) return 0;
var cards=target.getCards('he',function(card){
return lib.filter.canBeDiscarded(card,player,target);
}).sort(function(a,b){
return get.buttonValue(b)-get.buttonValue(a);
});
if((target.countCards('h')-player.countCards('h'))>=Math.max(0,Math.min(2,cards.length)-target.countCards('e',function(card){
var index=cards.indexOf(card);
return index!=-1&&index<2;
}))) return 1;
return 0;
}
var cards=player.getCards('he',function(card){
return lib.filter.cardDiscardable(card,player,'olxibing')
}).sort(function(a,b){
return get.useful(a)-get.useful(b);
});
if(player.countCards('h')-target.countCards('h')<Math.max(0,Math.min(cards.length,2)-player.countCards('e',function(card){
var index=cards.indexOf(card);
return index!=-1&&index<2;
}))&&(cards.length<2||get.value(cards[1])<5.5)) return 0.8;
return 0;
});
'step 1'
if(result.bool){
player.logSkill('olxibing',target);
var target=result.targets[0];
if(target==player) player.chooseToDiscard('he',2,true);
else player.discardPlayerCard(target,'he',true,2);
}
else event.finish();
'step 2'
if(player.isIn()&&target.isIn()){
var hs=player.countCards('h'),ts=target.countCards('h');
if(hs!=ts){
var drawer=hs>ts?target:player;
drawer.draw(2);
player.addTempSkill('olxibing2');
player.markAuto('olxibing2',[drawer]);
}
}
},
},
//钟会
lib.skill.gzpaiyi={
audio:2,
usable:1,
enable:'phaseUse',
filter:function(event,player){
return player.getStorage('gzquanji').length>0;
},
chooseButton:{
dialog:function(event,player){
return ui.create.dialog('排异',player.storage.gzquanji,'hidden')
},
backup:function(links,player){
return {
audio:'gzpaiyi',
filterTarget:true,
filterCard:function(){return false},
selectCard:-1,
card:links[0],
delay:false,
content:lib.skill.gzpaiyi.contentx,
ai:{
order:10,
result:{
target:function(player,target){
var num=player.getStorage('gzquanji').length-1;
if(num==0){
if(target.countCards('h')>player.countCards('h')) return get.damageEffect(target,player,target);
return 0;
}
if(target!=player) return 0;
if(player.needsToDiscard()&&!player.getEquip('zhuge')&&!player.hasSkill('new_paoxiao')) return 0;
return 1;
}
},
},
}
},
prompt:function(){return '请选择【排异】的目标'},
},
contentx:function(){
'step 0'
var card=lib.skill.gzpaiyi_backup.card;
game.cardsDiscard(card);
player.$throw(card);
player.storage.gzquanji.remove(card);
game.log(card,'进入了弃牌堆');
if(!player.storage.gzquanji.length){
player.unmarkSkill('gzquanji');
}
else{
player.markSkill('gzquanji');
}
player.syncStorage('gzquanji');
game.delayx();
'step 1'
var num=player.getStorage('gzquanji').length;
if(num) target.draw(Math.min(7,num));
'step 2'
if(target.countCards('h')>player.countCards('h')){
target.damage();
}
},
ai:{
order:function(item,player){
var num=player.getStorage('gzquanji').length;
if(num==1) return 8;
return 1;
},
result:{
player:1,
},
},
},
//嵇康
lib.skill.dejuexiang={
audio:'juexiang',
trigger:{player:'die'},
forced:true,
forceDie:true,
skillAnimation:true,
animationColor:'water',
derivation:['decanyun'],
content:function (){
'step 0'
if(trigger.source){
trigger.source.discard(trigger.source.getCards('e'));
trigger.source.loseHp();
}
'step 1'
player.chooseTarget('绝响：是否令一名其他角色获得技能〖残韵〗？',function(card,player,target){
return target!=player;
}).set('ai',function(target){
var att=get.attitude(_status.event.player,target);
if(target.countCards('ej',{suit:'club'})) att=att*2;
return 10+att;
}).set('forceDie',true);
'step 2'
if(result.bool){
var target=result.targets[0];
event.target=target;
player.line(target,'thunder');
target.addSkill('decanyun');
}
else event.finish();
},
},
lib.skill.decanyun={
group:['deqingxian_draw'],
marktext:'韵',
init:function (player,skill){
if(!player.storage[skill]) player.storage[skill]=[];
},
intro:{
content:function (storage){
var str='';
var str2='<li>每名角色限一次。出牌阶段，你可以弃置一张牌并选择一名其他角色，然后若其装备区里的牌数：小于你，其回复1点体力；大于你，其失去1点体力；等于你，其摸一张牌。若你的体力值为1，你摸一张牌。';
if(storage.length>0){
for(var i=0;i<storage.length;i++){
str+='、';
str+=get.translation(storage[i]);
};
str=str.slice(1);
str2+=('<br><li>已对'+str+'发动过〖残韵〗');
}
return str2;
},
},
mark:true,
enable:'phaseUse',
usable:1,
check:function (cardx){
var player=_status.event.player;
var number=game.countPlayer(function(target){
if(player==target) return false;
var pe=player.countCards('e',function(card){
return card!=cardx&&ui.selected.cards.contains(card)==false;
});
var te=target.countCards('e');
if(pe>te&&target.isDamaged()&&get.attitude(player,target)>2) return true;
else if(pe<te&&get.attitude(player,target)<0) return true;
return false;
});
if(ui.selected.cards.length<number) return 6-get.value(cardx);
else return 0;
},
filter:function (event,player){
if(!player.storage.decanyun) player.storage.decanyun=[];
return game.hasPlayer(function(current){
return current!=player&&!player.storage.decanyun.contains(current);
});
},
filterTarget:function (card,player,target){
return target!=player&&!player.storage.decanyun.contains(target);
},
selectTarget:1,
filterCard:true,
selectCard:1,
targetprompt:function (target){
var pe=_status.event.player.countCards('e',function(card){
return ui.selected.cards.contains(card)==false;
});
var te=target.countCards('e');
if(pe>te) return '回复体力';
else if(pe==te) return '摸一张牌';
else if(pe<te) return '失去体力';
},
line:'thunder',
position:'he',
content:function (){
player.storage.decanyun.push(target);
var pe=player.countCards('e');
var te=target.countCards('e');
if(pe>te) target.recover();
else if(pe==te) target.draw();
else if(pe<te) target.loseHp();
},
ai:{
order:10,
result:{
target:function (player,target){
var pe=player.countCards('e');
var te=target.countCards('e');
if(pe>te&&target.isDamaged()) return 2;
else if(pe==te) return 1;
else if(pe<te) return -2.5;
else return 0;
},
},
},
},
lib.skill.deqingxian_draw={
trigger:{player:'decanyunAfter'},
forced:true,
popup:false,
silent:false,
filter:function (event,player){
return player.hp==1;
},
content:function (){player.draw()},
},
//赵襄
lib.skill.xinfanghun={
marktext:'影',
intro:{
content:'mark',
name:'梅影',
},
audio:'fanghun',
group:['xinfanghun_sha','xinfanghun_shan'],
subSkill:{
sha:{
audio:'fanghun',
enable:['chooseToUse','chooseToRespond'],
filterCard:{name:'shan'},
viewAs:{name:'sha'},
viewAsFilter:function(player){
if(!player.countCards('hs','shan')) return false;
},
position:'hs',
prompt:'将一张【闪】当【杀】使用或打出',
check:function(){return 1},
onuse:function(links,player){player.addMark('xinfanghun')},
onrespond:function(links,player){player.addMark('xinfanghun')},
ai:{
effect:{
target:function(card,player,target,current){
if(get.tag(card,'respondSha')&&current<0) return 0.6
}
},
respondSha:true,
skillTagFilter:function(player){
if(!player.countCards('hs','shan')) return false;
},
order:function(){
return get.order({name:'sha'})+0.1;
},
useful:-1,
value:-1
}
},
shan:{
audio:'fanghun',
enable:['chooseToRespond','chooseToUse'],
filterCard:{name:'sha'},
viewAs:{name:'shan'},
prompt:'将一张【杀】当【闪】使用或打出',
check:function(){return 1},
onuse:function(links,player){player.addMark('xinfanghun')},
onrespond:function(links,player){player.addMark('xinfanghun')},
position:'hs',
viewAsFilter:function(player){
if(!player.countCards('hs','sha')) return false;
},
ai:{
respondShan:true,
skillTagFilter:function(player){
if(!player.countCards('hs','sha')) return false;
},
effect:{
target:function(card,player,target,current){
if(get.tag(card,'respondShan')&&current<0) return 0.6
}
},
order:4,
useful:-1,
value:-1
}
}
}
},
lib.skill.xinfuhan={
derivation:['ollongdan','new_rewusheng','olpaoxiao','retieji','xinliegong','xinkuanggu'],
audio:'fuhan',
trigger:{player:'phaseZhunbeiBegin'},
skillAnimation:true,
animationColor:'fire',
forced:true,
unique:true,
juexingji:true,
filter:function(event,player){
return player.storage.xinfanghun>=4;
},
content:function(){
'step 0'
player.removeMark('xinfanghun',player.countMark('xinfanghun'));
player.gainMaxHp();
player.recover();
'step 1'
player.removeSkill('xinfanghun');
player.addSkillLog('ollongdan');
var list=[];
if(!player.hasSkill('new_rewusheng')){
list.push('new_rewusheng');
}
if(!player.hasSkill('olpaoxiao')){
list.push('olpaoxiao');
}
if(!player.hasSkill('retieji')){
list.push('retieji');
}
if(!player.hasSkill('xinliegong')){
list.push('xinliegong');
}
if(!player.hasSkill('xinkuanggu')){
list.push('xinkuanggu');
}
if(list.length) player.chooseControl(list).set('prompt','选择获得一项技能');
else event.finish();
'step 2'
if(result.control) player.addSkillLog(result.control);
else event.finish();
},
},
//神郭嘉
lib.skill.sghuishi={
audio:2,
enable:'phaseUse',
limited:true,
skillAnimation:true,
animationColor:'water',
filterTarget:lib.filter.notMe,
content:function(){
'step 0'
player.awakenSkill('sghuishi');
var list=target.getSkills(null,false,false).filter(function(skill){
var info=lib.skill[skill];
return info&&info.juexingji&&!target.awakenedSkills.contains(skill);
});
if(list.length>0){
if(list.length==1) event._result={control:list[0]};
else player.chooseControl(list).set('prompt','请选择'+get.translation(target)+'的一个未发动过的觉醒技，令其发动该技能无视觉醒条件');
}
else{
target.draw(4);
event.goto(2);
}
'step 1'
target.storage.sghuishi=result.control;
target.markSkill('sghuishi');
var info=lib.skill[result.control];
if(info.filter&&!info.charlotte&&!info.sghuishi_filter){
info.sghuishi_filter=info.filter;
info.filter=function(event,player){
if(player.storage.sghuishi) return true;
return this.sghuishi_filter.apply(this,arguments);
}
}
'step 2'
player.loseMaxHp(2);
},
intro:{content:'发动【$】时无视条件'},
ai:{
order:0.1,
expose:0.2,
result:{
target:function(player,target){
if(player.hasUnknown()||player.maxHp<5) return 0;
var list=target.getSkills(null,false,false).filter(function(skill){
var info=lib.skill[skill];
return info&&info.juexingji;
});
if(list.length||target.hasJudge('lebu')||target.hasSkillTag('nogain')) return 0;
return 4;
},
},
},
},
//费祎
lib.skill.fyshengxi={
inherit:'reshengxi',
audio:'shengxi_feiyi',
},
lib.skill.shengxi_feiyi={audio:2},
//魏贾诩
lib.skill.old_jianshu={
audio:'jianshu',
unique:true,
limited:true,
enable:'phaseUse',
animationColor:'thunder',
skillAnimation:'epic',
filter:function(event,player){
return !player.storage.old_jianshu&&player.countCards('h',{color:'black'})>0;
},
init:function(player){
player.storage.old_jianshu=false;
},
filterTarget:function(card,player,target){
if(target==player) return false;
if(ui.selected.targets.length){
return ui.selected.targets[0]!=target&&!ui.selected.targets[0].hasSkillTag('noCompareSource')&&target.countCards('h')
&&!target.hasSkillTag('noCompareTarget')&&ui.selected.targets[0].inRange(target);
}
return true;
},
filterCard:{color:'black'},
mark:true,
discard:false,
delay:false,
check:function(card){
if(_status.event.player.hp==1) return 8-get.value(card);
return 6-get.value(card);
},
selectTarget:2,
multitarget:true,
content:function(){
'step 0'
player.awakenSkill('old_jianshu');
player.storage.old_jianshu=true;
targets[0].gain(cards,player,'give');
'step 1'
targets[0].chooseToCompare(targets[1]);
'step 2'
if(result.bool){
targets[0].chooseToDiscard('he',2,true);
targets[1].loseHp();
}
else if(result.tie){
targets[0].loseHp()
targets[1].loseHp()
}
else{
targets[1].chooseToDiscard('he',2,true);
targets[0].loseHp();
}
},
intro:{
content:'limited'
},
ai:{
expose:0.4,
order:4,
result:{
target:function(player,target){
if(player.hasUnknown()) return 0;
if(ui.selected.targets.length) return -1;
return -0.5;
}
}
}
},
lib.skill.old_yongdi={
audio:'yongdi',
unique:true,
limited:true,
trigger:{player:'damageEnd'},
animationColor:'thunder',
skillAnimation:'legend',
filter:function(event,player){
return !player.storage.old_yongdi;
},
init:function(player){
player.storage.old_yongdi=false;
},
mark:true,
intro:{
content:'limited'
},
direct:true,
content:function(){
'step 0'
player.chooseTarget(get.prompt2('old_yongdi'),function(card,player,target){
return (target.sex=='male'||target.name=='key_yuri')&&target!=player;
}).set('ai',function(target){
if(!_status.event.goon) return 0;
var player=_status.event.player;
var att=get.attitude(player,target);
if(att<=1) return 0;
var mode=get.mode();
if(mode=='identity'||(mode=='versus'&&_status.mode=='four')){
if(target.name&&lib.character[target.name]){
for(var i=0;i<lib.character[target.name][3].length;i++){
if(lib.skill[lib.character[target.name][3][i]].zhuSkill){
return att*2;
}
}
}
}
return att;
}).set('goon',!player.hasUnknown());
'step 1'
if(result.bool){
player.awakenSkill('old_yongdi');
player.storage.old_yongdi=true;
player.logSkill('old_yongdi',result.targets);
var target=result.targets[0];
target.gainMaxHp(true);
var mode=get.mode();
if(mode=='identity'||(mode=='versus'&&_status.mode=='four')){
if(target.name&&lib.character[target.name]){
var skills=lib.character[target.name][3];
target.storage.zhuSkill_old_yongdi=[];
for(var i=0;i<skills.length;i++){
var info=lib.skill[skills[i]];
if(info.zhuSkill){
target.storage.zhuSkill_old_yongdi.push(skills[i]);
if(info.init){
info.init(target);
}
if(info.init2){
info.init2(target);
}
}
}
}
}
}
},
ai:{
expose:0.2
}
},
//群黄月英
lib.skill.old_jiqiao={
audio:'jiqiao',
trigger:{player:'phaseUseBegin'},
direct:true,
filter:function(event,player){
return player.countCards('he',{type:'equip'})>0;
},
content:function(){
'step 0'
player.chooseToDiscard(get.prompt2('old_jiqiao'),[1,player.countCards('he',{type:'equip'})],'he',function(card){
return get.type(card)=='equip';
}).set('ai',function(card){
if(card.name=='bagua') return 10;
return 7-get.value(card);
}).logSkill='old_jiqiao';
'step 1'
if(result.bool){
event.cards=get.cards(2*result.cards.length);
player.showCards(event.cards);
}
else{
event.finish();
}
'step 2'
var gained=[];
var tothrow=[];
for(var i=0;i<event.cards.length;i++){
if(get.type(event.cards[i],'trick')=='trick'){
gained.push(event.cards[i]);
}
else{
tothrow.push(event.cards[i]);
}
}
player.gain(gained,'gain2');
game.cardsDiscard(tothrow);
},
},
lib.skill.old_linglong={
audio:'linglong',
inherit:'bagua_skill',
filter:function(event,player){
if(!lib.skill.bagua_skill.filter(event,player)) return false;
if(!player.isEmpty(2)) return false;
return true;
},
ai:{
respondShan:true,
effect:{
target:function(card,player,target){
if(player==target&&get.subtype(card)=='equip2'){
if(get.equipValue(card)<=7.5) return 0;
}
if(target.getEquip(2)) return;
return lib.skill.bagua_skill.ai.effect.target.apply(this,arguments);
}
}
},
mod:{
maxHandcard:function(player,num){
if(player.getEquip(3)||player.getEquip(4)||player.getEquip(6)) return;
return num+1;
},
targetInRange:function(card,player,target,now){
if(player.getEquip(5)) return;
var type=get.type(card);
if(type=='trick'||type=='delay') return true;
},
},
},
lib.skill.xinlinglong={
audio:'linglong',
inherit:'bagua_skill',
filter:function(event,player){
if(!lib.skill.bagua_skill.filter(event,player)) return false;
if(!player.isEmpty(2)) return false;
return true;
},
ai:{
respondShan:true,
effect:{
target:function(card,player,target){
if(player==target&&get.subtype(card)=='equip2'){
if(get.equipValue(card)<=7.5) return 0;
}
if(target.getEquip(2)) return;
return lib.skill.bagua_skill.ai.effect.target.apply(this,arguments);
}
}
},
mod:{
maxHandcard:function(player,num){
if(player.getEquip(3)||player.getEquip(4)||player.getEquip(6)) return;
return num+1;
},
targetInRange:function(card,player,target,now){
var type=get.type(card);
if(type=='trick'||type=='delay') return true;
},
canBeDiscarded:function(card){
if(get.position(card)=='e'&&['equip2','equip5'].contains(get.subtype(card))) return false;
},
},
},
//周处
lib.skill.xianghai={
audio:2,
global:'xianghai_g',
mod:{
cardname:function(card){
if(get.type(card,null,false)=='equip') return 'jiu';
},
},
trigger:{player:['useCard1','respond']},
firstDo:true,
forced:true,
filter:function(event,player){
return event.card.name=='jiu'&&!event.skill&&
event.cards.length==1&&get.type(event.cards[0])=='equip';
},
content:function(){},
},
//狼灭
lib.skill.old_langmie={
audio:'langmie',
trigger:{global:'phaseUseEnd'},
forced:true,
filter:function(event,player){
if(player==event.player) return false;
var map={};
var list=event.player.getHistory('useCard',function(evt){
var evt2=evt.getParent('phaseUse');
return evt2==event;
});
for(var i of list){
var name=i.card.name;
if(!map[name]) map[name]=true;
else return true;
}
},
frequent:true,
logTarget:'player',
content:function(){
player.draw();
},
group:'old_langmie_damage',
},
lib.skill.old_langmie_damage={
audio:'langmie',
trigger:{global:'phaseEnd'},
direct:true,
filter:function(event,player){
return event.player!=player&&event.player.getHistory('sourceDamage',function(evt){
return evt.num>1;
}).length>0&&player.countCards('he')>0;
},
content:function(){
'step 0'
player.chooseToDiscard('he',get.prompt('old_langmie',trigger.player),'弃置一张牌并对其造成1点伤害').set('goon',get.damageEffect(trigger.player,player,player)>0).set('ai',function(card){
if(!_status.event.goon) return 0;
return 7-get.value(card);
}).logSkill=['old_langmie_damage',trigger.player];
'step 1'
if(result.bool) trigger.player.damage();
},
ai:{expose:0.2},
},
//南华老仙和太平要术
lib.skill.tianshu={
derivation:'taipingyaoshu',
audio:2,
trigger:{player:'phaseUseBegin'},
filter:function(event,player){
return player.countCards('he')>0&&!game.hasPlayer(function(current){
return current.countCards('ej','taipingyaoshu');
});
},
direct:true,
content:function(){
'step 0'
player.chooseCardTarget({
prompt:get.prompt2('tianshu'),
selectCard:1,
filterCard:true,
position:'he',
ai1:function(card){
return 6-get.value(card);
},
ai2:function(target){
if(get.attitude(player,target)>0&&target.getEquip(2)) return 0;
return get.attitude(player,target);
},
});
'step 1'
if(!result.bool) event.finish();
player.discard(result.cards);
event.target=result.targets[0];
player.logSkill('tianshu',event.target);
if(!lib.inpile.contains('taipingyaoshu')){
lib.inpile.push('taipingyaoshu');
event.card=game.createCard2('taipingyaoshu','heart',3);
}
else{
event.card=get.cardPile(function(card){
return card.name=='taipingyaoshu';
});
}
if(!event.card) event.finish();
else event.target.gain(event.card,'gain2');
'step 2'
if(target.getCards('h').contains(card)&&get.name(card,target)=='taipingyaoshu') target.chooseUseTarget(card,'nopopup',true);
},
},
lib.card.shuiyanqijunx={
audio:'shuiyanqijun',
fullskin:true,
type:'trick',
filterTarget:function(card,player,target){
return target!=player&&(get.mode()=='single'&&['normal2']||target.countCards('e')>0)/*&&(_status.mode=='yingbian'||_status.mode=='free')*/;
},
enable:true,
yingbian_prompt:function(card){
var str='';
if(get.cardtag(card,'yingbian_all')){
str+='此牌的效果改为其先选择弃置装备区里的两张牌，然后受到一点雷电伤害';
}
if(!str.length||get.cardtag(card,'yingbian_add')){
if(str.length) str+='；';
str+='当你使用此牌选择目标后，你可为此牌增加一个目标';
}
return str;
},
yingbian:function(event){
var card=event.card,bool=false;
if(get.cardtag(card,'yingbian_all')){
bool=true;
card.yingbian_all=true;
game.log(card,'执行所有选项');
}
if(!bool||get.cardtag(card,'yingbian_add')){
event.yingbian_addTarget=true;
}
},
content:function(){
'step 0'
if(event.card.yingbian_all){
if(target.countCards('e',function(card){
return lib.filter.cardDiscardable(card,target,'shuiyanqijunx');
})){
target.chooseToDiscard(Math.min(target.countCards('e',function(card){
return lib.filter.cardDiscardable(card,target,'shuiyanqijunx');
}),2),'e',true);
}
target.damage('thunder',event.baseDamage||1);
event.finish();
}
else if(!target.countCards('e',function(card){
return lib.filter.cardDiscardable(card,target,'shuiyanqijunx');
})){
var next=target.damage(event.baseDamage||1);
if(!get.is.single()) next.nature='thunder';
event.finish();
return;
}
else target.chooseControl('discard_card','take_damage',function(event,player){
if(get.damageEffect(player,event.player,player,'thunder')>=0){
return 'take_damage';
}
if(player.hp>=3&&player.countCards('e')>=2){
return 'take_damage';
}
return 'discard_card';
});
'step 1'
if(result.control=='discard_card'){
target.discard(target.getCards('e',function(card){
return lib.filter.cardDiscardable(card,target,'shuiyanqijunx');
}));
}
else{
var next=target.damage(event.baseDamage||1);
if(!get.is.single()) next.nature='thunder'
}
event.finish();
},
ai:{
canLink:function(player,target,card){
if(player.hasSkill('jueqing')||target.hasSkill('gangzhi')||target.hasSkill('gangzhi')) return false;
var es=target.countCards('e');
if(!es) return true;
if(target.hp>=3&&es>=2){
return true;
}
return false;
},
order:6,
value:4,
useful:2,
tag:{
damage:1,
thunderDamage:1,
natureDamage:1,
loseCard:1,
},
yingbian:function(card,player,targets,viewer){
if(get.attitude(viewer,player)<=0) return 0;
var base=0;
if(get.cardtag(card,'yingbian_all')){
if(targets.filter(function(current){
return get.damageEffect(current,player,player,'thunder')>0&&current.countCards('e',function(card){
return get.value(card,current)<=0;
})<2&&current.countCards('e',function(card){
return get.value(card,current)>0;
})>0;
}).length) base+=6;
}
if(get.cardtag(card,'yingbian_add')){
if(game.hasPlayer(function(current){
return !targets.contains(current)&&lib.filter.targetEnabled2(card,player,current)&&get.effect(current,card,player,player)>0;
})) base+=6;
}
return 0;
},
result:{
target:function(player,target,card,isLink){
if(isLink) return -2;
return -1;
}
}
}
},
lib.card.taipingyaoshu={
audio:true,
fullskin:true,
type:'equip',
subtype:'equip2',
nomod:true,
nopower:true,
unique:true,
global:['g_taipingyaoshu_ai'],
skills:['taipingyaoshu'],
ai:{
equipValue:function(card,player){
if(player.hasSkill('wendao')) return 9;
if(game.hasPlayer(function(current){
return current.hasSkill('wendao')&&get.attitude(player,current)<=0;
})){
return 1;
}
return 6;
},
basic:{
equipValue:6
}
},
filterLose:function(card,player){
if(player.hasSkillTag('unequip2')) return false;
return true;
},
loseDelay:false,
onLose:function(){
var next=game.createEvent('taipingyaoshu');
event.next.remove(next);
var evt=event.getParent();
if(evt.getlx===false) evt=evt.getParent();
evt.after.push(next);
next.player=player;
next.setContent(lib.card.taipingyaoshu.onLosex);
},
onLosex:function(){
'step 0'
player.logSkill('taipingyaoshu');
player.draw(2);
'step 1'
if(player.hp<=1&&get.mode()!='guozhan') event.finish();
else player.loseHp();
}
},
lib.skill.taipingyaoshu={
equipSkill:true,
mod:{
maxHandcard:function(player,num){
if(get.mode()=='guozhan'){
if(player.hasSkill('huangjintianbingfu')){
num+=player.storage.huangjintianbingfu.length;
}
return num+game.countPlayer(function(current){
return current.isFriendOf(player);
});
}
return num+game.countGroup()-1;
}
},
trigger:{player:'damageBegin4'},
filter:function(event,player){
if(player.hasSkillTag('unequip2')) return false;
if(event.source&&event.source.hasSkillTag('unequip',false,{
name:event.card?event.card.name:null,
target:player,
card:event.card
})) return false;
if(event.nature) return true;
},
forced:true,
content:function(){
trigger.cancel();
},
ai:{
nofire:true,
nothunder:true,
effect:{
target:function(card,player,target,current){
if(target.hasSkillTag('unequip2')) return;
if(player.hasSkillTag('unequip',false,{
name:card?card.name:null,
target:target,
card:card
})||player.hasSkillTag('unequip_ai',false,{
name:card?card.name:null,
target:target,
card:card
})) return;
if(get.tag(card,'natureDamage')) return 'zerotarget';
if(card.name=='tiesuo'){
return [0,0];
}
}
}
}
},
//爆料版OL印牌机
//OL华歆和阮瑀都削了，SP杜预还要等好久呢?
lib.skill.shen_taoluan={
audio:'caozhao',
enable:'phaseUse',
filter:function(event,player){
if(player.countCards('h')==0) return false;
var list=player.getStorage('shen_taoluan');
for(var i of lib.inpile){
if(!list.contains(i)&&['basic','trick'].contains(get.type(i))) return true;
}
return false;
},
chooseButton:{
dialog:function(event,player){
var list=player.getStorage('shen_taoluan'),vcards=[];
for(var i of lib.inpile){
if(!list.contains(i)){
var type=get.type(i);
if(type=='basic'||type=='trick') vcards.push([type,'',i]);
}
}
return ui.create.dialog('草诏',[vcards,'vcard']);
},
check:function(button){
return _status.event.player.getUseValue({name:button.link[2],isCard:true},null,true);
},
backup:function(links,player){
return {
audio:'caozhao',
cardname:links[0][2],
filterCard:true,
position:'h',
check:function(card){
return player.getUseValue({name:lib.skill.shen_taoluan_backup.cardname})-((player.getUseValue(card,null,true)+0.1)/(get.value(card)/6));
},
filterTarget:function(card,player,target){
return target.hp<=player.hp;
},
discard:false,
lose:false,
content:function(){
'step 0'
player.showCards(cards,get.translation(player)+'发动【草诏】，声明'+get.translation(lib.skill.shen_taoluan_backup.cardname));
if(!player.storage.shen_taoluan) player.storage.shen_taoluan=[];
player.storage.shen_taoluan.push(lib.skill.shen_taoluan_backup.cardname);
'step 1'
target.chooseControl().set('choiceList',[
'令'+get.translation(player)+'将'+get.translation(cards[0])+'的牌名改为'+get.translation(lib.skill.shen_taoluan_backup.cardname),
'失去1点体力',
]).set('ai',function(event,player){
var target=_status.event.getParent().player;
if(get.attitude(player,target)>0) return 0;
if(player.hp>3||(player.hp>1&&player.hasSkill('zhaxiang'))) return 1;
if(player.hp>2) return Math.random()>0.5?0:1;
return 0;
});
'step 2'
if(result.index==1){
target.addExpose(0.2);
target.loseHp();
event.finish();
}
else{
player.chooseTarget('是否将'+get.translation(lib.skill.shen_taoluan_backup.cardname)+'（'+get.translation(cards[0])+'）交给一名其他角色？',lib.filter.notMe).set('ai',()=>-1);
}
'step 3'
if(result.bool){
var target=result.targets[0];
player.line(target,'green');
if(!target.storage.shen_taoluan_info) target.storage.shen_taoluan_info={};
target.storage.shen_taoluan_info[cards[0].cardid]=lib.skill.shen_taoluan_backup.cardname;
target.addSkill('shen_taoluan_info');
target.gain(cards,player,'give').gaintag.add('shen_taoluan');
}
else{
if(!player.storage.shen_taoluan_info) player.storage.shen_taoluan_info={};
player.storage.shen_taoluan_info[cards[0].cardid]=lib.skill.shen_taoluan_backup.cardname;
player.addGaintag(cards,'shen_taoluan');
player.addSkill('shen_taoluan_info');
}
},
ai:{
result:{
player:2,
target:0.1,
},
},
}
},
prompt:function(links,player){
return '将一张手牌声明为'+get.translation(links[0][2]);
},
},
ai:{
order:1,
result:{
player:1,
},
},
},
lib.skill.shen_taoluan_info={
charlotte:true,
mod:{
cardname:function(card,player){
var map=player.storage.shen_taoluan_info;
if(map&&map[card.cardid]&&get.itemtype(card)=='card'&&card.hasGaintag('shen_taoluan')) return map[card.cardid];
},
cardnature:function(card,player){
var map=player.storage.shen_taoluan_info;
if(map&&map[card.cardid]&&get.itemtype(card)=='card'&&card.hasGaintag('shen_taoluan')) return false;
},
},
},
//张琪瑛
lib.skill.oldfalu={
subSkill:{
spade:{
marktext:'♠︎️',
intro:{
name:'紫薇',
content:'mark',
},
},
heart:{
marktext:'♥︎️',
intro:{
name:'玉清',
content:'mark',
},
},
club:{
marktext:'♣︎️',
intro:{
name:'后土',
content:'mark',
},
},
diamond:{
marktext:'♦︎',
intro:{
name:'勾陈',
content:'mark',
},
},
},
forced:true,
audio:'xinfu_falu',
trigger:{
player:['loseAfter','enterGame'],
global:'phaseBefore',
},
filter:function (event,player){
if(event.name!='lose') return (event.name!='phase'||game.phaseNumber==0);
if(event.type!='discard') return false;
for(var i=0;i<event.cards2.length;i++){
if(!player.hasMark('oldfalu_'+get.suit(event.cards2[i]))) return true;
}
return false;
},
content:function (){
if(trigger.name!='lose'){
for(var i=0;i<lib.suit.length;i++){
if(!player.hasMark('oldfalu_'+lib.suit[i])) player.addMark('oldfalu_'+lib.suit[i]);
}
return;
}
for(var i=0;i<trigger.cards2.length;i++){
var suit=get.suit(trigger.cards2[i]);
if(!player.hasMark('oldfalu_'+suit)) player.addMark('oldfalu_'+suit);
}
},
},
lib.skill.olddianhua={
trigger:{player:['phaseZhunbeiBegin','phaseJieshuBegin']},
frequent:true,
audio:'xinfu_dianhua',
filter:function (event,player){
for(var i=0;i<lib.suit.length;i++){
if(player.hasMark('oldfalu_'+lib.suit[i])) return true;
}
return false;
},
content:function (){
'step 0'
if(lib.config.extension_十周年UI_enable) event.goto(3);
'step 1'
var num=0;
for(var i=0;i<lib.suit.length;i++){
if(player.hasMark('oldfalu_'+lib.suit[i])) num++;
}
/*
player.chooseCardButton(num,true,get.cards(num),'点化：按顺将卡牌置于牌堆顶（先选择的在上）').set('ai',function(button){
return get.value(button.link);
});
'step 2'
if(result.bool){
var list=result.links.slice(0);
while(list.length){
ui.cardPile.insertBefore(list.pop(),ui.cardPile.firstChild);
}
}
event.finish();
*/
var cards=get.cards(num);
game.cardsGotoOrdering(cards);
var next=player.chooseToMove('点化：将卡牌以任意顺序置于牌堆顶');
next.set('list',[['牌堆顶',cards]]);
next.set('processAI',function(list){
var check=function(card){
var player=_status.event.player;
var judge=player.getCards('j')[cards.length];
if(judge){
return get.judge(judge)(card)*att;
}
return player.getUseValue(card)*att;
}
var cards=list[0][1].slice(0),cards=[];
list.sort(function(a,b){
return check(b)-check(a);
});
cards.push(cards.shift());
return [cards];
});
'step 2'
if(result.bool){
var list=result.moved[0].slice(0);
while(list.length){
ui.cardPile.insertBefore(list.pop(),ui.cardPile.firstChild);
}
game.updateRoundNumber();
event.finish();
}
else event.finish();
'step 3'
var num=0;
for(var i=0;i<lib.suit.length;i++){
if(player.hasMark('oldfalu_'+lib.suit[i])) num++;
}
var cards=get.cards(num);
var dialog=decadeUI.content.chooseGuanXing(player,cards,cards.length);
dialog.caption='【点化】';
game.broadcast(function(player,cards,callback){
if(!window.decadeUI) return;
var dialog=decadeUI.content.chooseGuanXing(player,cards,cards.length);
dialog.caption='【点化】';
dialog.callback=callback;
},player,cards,dialog.callback);
event.switchToAuto=function(){
var cards=dialog.cards[0].concat();
var cheats=[];
var next=player.getNext();
var friend=(event.triggername == 'phaseJieshuBegin'?player.getNext():player);
var judges=friend.node.judges.childNodes;
if(judges.length>0) cheats=decadeUI.get.cheatJudgeCards(cards,judges,friend!=null);
if(friend){
cards=decadeUI.get.bestValueCards(cards,friend);
}else{
cards.sort(function(a,b){
return get.value(a,next)-get.value(b,next);
});
}
cards=cheats.concat(cards);
var time=500;
for(var i=0;i<cards.length;i++){
setTimeout(function(card,index,finished){
dialog.move(card,index,0);
if(finished) dialog.finishTime(cards.length<=1?250:1000);;
},time,cards[i],i,i>=cards.length-1);
time+=500;
}
}
if(event.isOnline()){
event.player.send(function(){
if(!window.decadeUI&&decadeUI.eventDialog)_status.event.finish();
},event.player);
event.player.wait();
decadeUI.game.wait();
}else if(!event.isMine()){
event.switchToAuto();
}
},
},
lib.skill.oldzhenyi={
group:['oldzhenyi_spade','oldzhenyi_club','oldzhenyi_heart'],
trigger:{player:'damageEnd'},
audio:'xinfu_zhenyi',
filter:function (event,player){
if(!event.nature) return false;
return player.hasMark('oldfalu_diamond');
},
prompt2:'弃置「勾陈♦」标记，从牌堆中获得每种类型的牌各一张。',
content:function (){
'step 0'
player.removeMark('oldfalu_diamond');
event.num=0;
event.togain=[];
'step 1'
var card=get.cardPile(function(card){
for(var i=0;i<event.togain.length;i++){
if(get.type(card,'trick')==get.type(event.togain[i],'trick')) return false;
}
return true;
});
if(card){
event.togain.push(card);
event.num++;
if(event.num<3) event.redo();
}
'step 2'
if(event.togain.length){
player.gain(event.togain,'gain2');
}
},
},
lib.skill.oldzhenyi_spade={
audio:'xinfu_zhenyi',
trigger:{global:'judge'},
direct:true,
filter:function (event,player){
return player.hasMark('oldfalu_spade');
},
content:function (){
'step 0'
var str=get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
get.translation(trigger.player.judging[0])+'，是否发动【真仪】，弃置「紫薇♠」标记并修改判定结果？';
player.chooseControl('黑桃5','红桃5','取消').set('prompt',str).set('ai',function(){
var judging=_status.event.judging;
var cards={name:judging.name,suit:'spade',number:5};
var cardh={name:judging.name,suit:'heart',number:5};
var results=trigger.judge(cards)-trigger.judge(judging);
var resulth=trigger.judge(cardh)-trigger.judge(judging);
var attitude=get.attitude(player,trigger.player);
if(attitude==0||(resulth==0&&results==0)) return '取消';
if(attitude>0){
if(results>0){
if(resulth>results) return '红桃5';
return '黑桃5';
}
else if(resulth>0) return '红桃5';
return '取消';
}
else{
if(results<0){
if(resulth<results) return '红桃5';
return '黑桃5';
}
else if(resulth<0) return '红桃5';
return '取消';
}
}).set('judging',trigger.player.judging[0]);
'step 1'
if(['黑桃5','红桃5'].contains(result.control)){
player.removeMark('oldfalu_spade');
player.logSkill('oldzhenyi',trigger.player);
player.popup(result.control);
game.log(player,'将判定结果改为了','#y'+result.control);
trigger.fixedResult={
suit:result.control=='黑桃5'?'spade':'heart',
color:result.control=='黑桃5'?'black':'red',
number:5,
};
}
else{
event.finish();
}
},
ai:{
rejudge:true,
tag:{
rejudge:1,
},
},
},
lib.skill.oldzhenyi_club={
audio:'xinfu_zhenyi',
enable:'chooseToUse',
filter:function (event,player){
if(!player.isDying()) return false;
return player.hasMark('oldfalu_club');
},
filterCard:true,
position:'h',
viewAs:{name:'tao'},
prompt:'弃置「后土♣」标记，将一张手牌当桃使用',
check:function (card){return 15-get.value(card)},
precontent:function (){
player.removeMark('oldfalu_club');
},
ai:{
skillTagFilter:function (player){
if(!player.isDying()) return false;
return player.hasMark('oldfalu_club');
},
save:true,
respondTao:true,
},
},
lib.skill.oldzhenyi_heart={
audio:'xinfu_zhenyi',
trigger:{source:'damageBegin1'},
filter:function (event,player){
return player.hasMark('oldfalu_heart');
},
check:function (event,player){
if(get.attitude(player,event.player)>=0) return false;
if(event.player.hasSkillTag('filterDamage',null,{
player:player,
card:event.card,
})) return false;
return player.hasMark('oldfalu_spade')||get.color(ui.cardPile.firstChild)=='black';
},
prompt2:function(event){
return '弃置「玉清♥」标记，然后进行判定。若结果为黑色，则对'+get.translation(event.player)+'即将造成的伤害+1。';
},
logTarget:'player',
content:function (){
'step 0'
player.removeMark('oldfalu_heart')
player.judge(function(card){
if(get.color(card)=='black') return 4;
return -1;
});
'step 1'
if(result.bool==true){
trigger.num++;
}
},
},
//韩旭爆料2013年版神甘宁
lib.skill.old_jieying={
group:'old_jieying_die',
audio:'drlt_jieying',
trigger:{global:'phaseBefore',player:'enterGame'},
filter:function(event,player){
return (event.name!='phase'||game.phaseNumber==0);
},
direct:true,
unique:true,
content:function(){
player.logSkill('old_jieying',game.zhu);
game.zhu.addSkill('old_jieying_mark');
},
subSkill:{
mark:{
charlotte:true,
mark:true,
market:'营',
intro:{
name:'劫营',
name2:'营',
content:'已获得【营】标记',
},
audio:'drlt_jieying',
trigger:{player:['phaseAfter','die']},
filter:function(event,player){
return game.hasPlayer(function(current){
return current.hasSkill('old_tongling');
});
},
forced:true,
forceDie:true,
lastDo:true,
content:function(){
'step 0'
player.removeSkill('old_jieying_mark');
player.next.addSkill('old_jieying_mark');
'step 1'
for(var i=0;i<game.players.length;i++){
if(game.players[i]!=player&&game.players[i]!=_status.currentPhase&&game.players[i].hasSkill('old_jieying')){
game.players[i].phase('old_jieying');
}
}
},
},
die:{
trigger:{player:'die'},
filter:function(event,player){
return !game.hasPlayer(function(current){
return current!=player&&current.hasSkill('old_tongling');
});
},
forceDie:true,
forced:true,
silent:true,
firstDo:true,
content:function(){
for(var i=0;i<game.players.length;i++){
if(game.players[i].hasSkill('old_jieying_mark')){
game.players[i].removeSkill('old_jieying_mark');
}
}
},
},
},
},
lib.skill.old_tongling={
audio:'gnjinfan',
trigger:{target:'useCardToTargeted'},
forced:true,
filter:function(event,player){
return event.targets.length==1;
},
content:function(){
player.draw(2);
},
},
//杨修
lib.skill.oldanlao={
audio:'danlao',
filter:function(event,player){
return get.type(event.card)=='trick'&&event.targets&&event.targets.length>1;
},
check:function(event,player){
return event.getParent().excluded.contains(player)||get.tag(event.card,'multineg')||get.effect(player,event.card,event.player,player)<=0;
},
trigger:{target:'useCardToTargeted'},
content:function(){
trigger.getParent().excluded.add(player);
player.draw();
},
ai:{
effect:{
target:function(card){
if(get.type(card)!='trick') return;
if(card.name=='tiesuo') return [0,0];
if(card.name=='yihuajiemu') return [0,1];
if(get.tag(card,'multineg')) return [0,2];
}
}
}
},
lib.skill.oljilei={
trigger:{player:'damageEnd'},
audio:'jilei',
direct:true,
filter:function(event){
return event&&event.source;
},
content:function(){
'step 0'
player.chooseControl('basic','trick','equip','cancel2',function(){
var source=_status.event.source;
if(get.attitude(_status.event.player,source)>0) return 'cancel2';
if(!source.storage.oljilei2||!source.storage.oljilei2.contains('basic')) return 'basic';
if(_status.currentPhase!=source) return 'trick';
if(lib.filter.cardUsable({name:'sha'},source)&&source.countCards('h')>=2) return 'basic';
return 'trick';
}).set('prompt',get.prompt2('oljilei',trigger.source)).set('source',trigger.source);
'step 1'
if(result.control!='cancel2'){
player.logSkill('oljilei',trigger.source);
player.popup(get.translation(result.control)+'牌');
trigger.source.addTempSkill('oljilei2');
trigger.source.storage.oljilei2.add(result.control);
trigger.source.updateMarks('oljilei2');
}
},
ai:{
maixie_defend:true,
threaten:0.7
}
},
lib.skill.oljilei2={
unique:true,
charlotte:true,
intro:{
content:function(storage){
return '不能使用、打出或弃置'+get.translation(storage)+'牌';
}
},
init:function(player,skill){
if(!player.storage[skill]) player.storage[skill]=[];
},
mark:true,
onremove:true,
mod:{
cardDiscardable:function(card,player){
if(player.storage.oljilei2.contains(get.type(card,'trick'))) return false;
},
cardEnabled:function(card,player){
if(player.storage.oljilei2.contains(get.type(card,'trick'))) return false;
},
cardUsable:function(card,player){
if(player.storage.oljilei2.contains(get.type(card,'trick'))) return false;
},
cardRespondable:function(card,player){
if(player.storage.oljilei2.contains(get.type(card,'trick'))) return false;
},
cardSavable:function(card,player){
if(player.storage.oljilei2.contains(get.type(card,'trick'))) return false;
},
},
},
//陈琳
lib.skill.olbifa={
trigger:{player:'phaseJieshuBegin'},
direct:true,
audio:'bifa',
filter:function(event,player){
return player.countCards('h')>0;
},
content:function(){
'step 0'
var players=game.filterPlayer();
for(var i=0;i<players.length;i++){
if(players[i].storage.bifa){
players[i].addSkill('bifa2');
}
}
player.chooseCardTarget({
filterCard:true,
filterTarget:function(card,player,target){
return player!=target&&!target.storage.bifa;
},
ai1:function(card){
return 7-get.value(card);
},
ai2:function(target){
var num=target.hasSkillTag('maixie')?2:0;
return -get.attitude(_status.event.player,target)-num;
},
prompt:get.prompt2('bifa')
});
'step 1'
if(result.bool){
player.logSkill('bifa',result.targets[0]);
result.targets[0].addSkill('bifa2');
result.targets[0].storage.bifa=[result.cards[0],player];
player.lose(result.cards[0],result.targets[0].node.special,'toStorage');
player.$give(1,result.targets[0],false);
}
},
ai:{
threaten:1.7,
expose:0.3
}
},
lib.skill.olbifa2={
trigger:{player:'phaseZhunbeiBegin'},
forced:true,
mark:true,
audio:false,
content:function(){
'step 0'
if(player.storage.bifa[1].isAlive()&&player.countCards('h')){
player.chooseCard(get.translation(player.storage.bifa[1])+'的笔伐牌为：',function(card){
return get.type(card,'trick')==_status.event.type;
}).set('ai',function(card){
return 8-get.value(card);
}).set('type',get.type(player.storage.bifa[0],'trick')).set('promptx',[[player.storage.bifa[0]],'请交给其一张与此牌类别相同的手牌，否则失去1点体力' ]);
}
else{
event.directfalse=true;
}
'step 1'
if(result.bool&&!event.directfalse){
player.storage.bifa[1].gain(result.cards,player);
player.$giveAuto(result.cards,player.storage.bifa[1]);
player.gain(player.storage.bifa[0],'draw','log','fromStorage');
}
else{
game.cardsDiscard(player.storage.bifa[0]);
game.log(player.storage.bifa[0],'进入弃牌堆');
player.$throw(player.storage.bifa[0],1000);
player.loseHp();
}
delete player.storage.bifa;
player.removeSkill('bifa2');
},
intro:{
name:'笔伐',
content:'已成为〖笔伐〗的目标',
onunmark:function(storage,player){
var storage=player.storage.bifa;
if(storage&&storage.length){
player.$throw(storage[0],1000);
game.cardsDiscard(storage[0]);
game.log(storage[0],'被置入了弃牌堆');
}
delete player.storage.bifa;
},
}
},
lib.skill.olsongci={
audio:'songci',
enable:'phaseUse',
filter:function(event,player){
if(!player.storage.songci) return true;
return game.hasPlayer(function(current){
return !player.storage.songci.contains(current);
});
},
init:function(player){
if(!player.storage.songci) player.storage.songci=[];
},
filterTarget:function(card,player,target){
return (!player.storage.songci||!player.storage.songci.contains(target))&&target.countCards('h')!=target.hp;
},
content:function(){
if(target.countCards('h')>target.hp){
target.chooseToDiscard(2,'he',true);
}
else{
target.draw(2);
}
if(!player.storage.songci) player.storage.songci=[];
player.storage.songci.push(target);
player.storage.songci.sortBySeat();
player.markSkill('songci');
},
intro:{
content:'已对$发动过〖颂词〗'
},
ai:{
order:7,
threaten:1.5,
expose:0.2,
result:{
target:function(player,target){
if(target.countCards('h')<target.hp){
return 1;
}
else if(target.countCards('h')>target.hp){
return -1;
}
}
}
}
},
//诸葛恪
lib.skill.olaocai={
audio:'aocai',
trigger:{player:'chooseToRespondBegin'},
frequent:true,
filter:function(event,player){
if(event.responded) return false;
return _status.currentPhase!==player;
},
content:function(){
'step 0'
var cards=[];
if(ui.cardPile.childNodes.length<2){
var discardcards=get.cards(2);
game.cardsDiscard(discardcards);
}
for(var i=0;i<2;i++){
if(ui.cardPile.childNodes.length>i) cards.push(ui.cardPile.childNodes[i]);
}
player.chooseCardButton('傲才：选择一张卡牌打出',cards).set('filterButton',function(button){
return get.type(button.link)=='basic'&&_status.event.getTrigger().filterCard(button.link);
});
'step 1'
if(result.bool){
game.log(player,'傲才发动成功');
trigger.untrigger();
trigger.responded=true;
result.links[0].remove();
trigger.result={bool:true,card:result.links[0]}
}
},
ai:{
effect:{
target:function(card,player,target,effect){
if(get.tag(card,'respondShan')) return 0.7;
if(get.tag(card,'respondSha')) return 0.7;
}
}
},
group:'olaocai2',
},
lib.skill.olaocai2={
enable:'chooseToUse',
filter:function(event,player){
return _status.currentPhase!==player&&event.type!='wuxie'&&event.type!='trickuse';
},
onChooseToUse:function(event){
if(!game.online){
var cards=[];
if(ui.cardPile.childNodes.length<2){
var discardcards=get.cards(2);
game.cardsDiscard(discardcards);
}
for(var i=0;i<2;i++){
if(ui.cardPile.childNodes.length>i) cards.push(ui.cardPile.childNodes[i]);
}
event.set('olaocaicards',cards);
}
},
chooseButton:{
dialog:function(event,player){
return ui.create.dialog('傲才：选择一张卡牌使用',event.olaocaicards);
},
filter:function(button,player){
var evt=_status.event.getParent();
if(evt&&evt.filterCard){
return get.type(button.link)=='basic'&&evt.filterCard(button.link,player,evt);
}
return false;
},
check:function(button){
return 1;
},
backup:function(links,player){
return {
audio:'aocai',
filterCard:function(){return false},
selectCard:-1,
viewAs:links[0],
}
},
prompt:function(links,player){
return '选择'+get.translation(links)+'的目标';
}
},
ai:{
order:11,
respondShan:true,
respondSha:true,
save:true,
result:{
player:function(player){
if(_status.event.dying) return get.attitude(player,_status.event.dying);
return 1;
}
}
}
},
lib.skill.olduwu={
audio:'duwu',
enable:'phaseUse',
filter:function(event,player){
return player.hasSkill('olduwu2')==false;
},
filterCard:function(){
if(ui.selected.targets.length) return false;
return true;
},
position:'he',
selectCard:[1,Infinity],
complexSelect:true,
complexCard:true,
filterTarget:function(card,player,target){
return target!=player&&player.inRange(target)&&ui.selected.cards.length==target.hp;
},
check:function(card){
switch(ui.selected.cards.length){
case 0:return 7-get.value(card);
case 1:return 6-get.value(card);
case 2:return 3-get.value(card);
default:return 0;
}
},
content:function(){
'step 0'
player.addSkill('olduwu3');
target.damage('nocard');
'step 1'
if(!player.hasSkill('olduwu3')){
player.addSkill('olduwu2');
player.loseHp();
}
else{
player.removeSkill('olduwu3');
}
},
ai:{
damage:true,
order:2,
result:{
target:function(player,target){
return get.damageEffect(target,player);
}
},
threaten:1.5,
expose:0.3
}
},
lib.skill.olduwu2={
trigger:{player:'phaseZhunbeiBegin'},
forced:true,
popup:false,
audio:false,
content:function(){
player.removeSkill('olduwu2');
}
},
lib.skill.olduwu3={
trigger:{global:'dying'},
firstDo:true,
silent:true,
filter:function(event,player){
return event.reason&&event.reason.getParent().name=='olduwu';
},
content:function(){
player.removeSkill('olduwu3');
}
},
//旧蒲元装备
lib.card.old_zhuren_heart={
cardimage:'pyzhuren_heart',
derivation:'old_puyuan',
type:'equip',
subtype:'equip1',
distance:{attackFrom:-2},
skills:['old_zhuren_heart'],
ai:{
basic:{
equipValue:2
}
},
},
lib.card.old_zhuren_diamond={
cardimage:'pyzhuren_diamond',
derivation:'old_puyuan',
type:'equip',
subtype:'equip1',
distance:{attackFrom:-1},
skills:['old_zhuren_diamond'],
ai:{
basic:{
equipValue:2
}
},
},
lib.card.old_zhuren_club={
cardimage:'pyzhuren_club',
derivation:'old_puyuan',
type:'equip',
subtype:'equip1',
distance:{attackFrom:-1},
skills:['old_zhuren_club'],
ai:{
basic:{
equipValue:2
}
},
},
lib.card.old_zhuren_spade={
cardimage:'pyzhuren_spade',
derivation:'old_puyuan',
type:'equip',
subtype:'equip1',
skills:['old_zhuren_spade'],
ai:{
basic:{
equipValue:2.6
}
},
},
lib.card.old_zhuren_shandian={
cardimage:'pyzhuren_shandian',
derivation:'old_puyuan',
type:'equip',
subtype:'equip1',
distance:{attackFrom:-3},
skills:['old_zhuren_shandian'],
ai:{
basic:{
equipValue:2
}
},
},
//蒯良蒯越增添描述和卡牌标记
lib.skill.nzry_shenshi={
mark:true,
audio:'nzry_shenshi_1',
locked:false,
zhuanhuanji:true,
marktext:'审',
intro:{
content:function(storage,player,skill){
if(player.storage.nzry_shenshi==true) return '其他角色对你造成伤害后，你可以观看该角色的手牌，然后交给其一张牌，当前角色回合结束时，若此牌仍在该角色的区域内，你将手牌摸至四张';
return '出牌阶段限一次，你可以将一张牌交给一名手牌数最多的角色，然后对其造成一点伤害，若该角色因此死亡，则你可以令一名角色将手牌摸至四张';
},
},
group:['nzry_shenshi_1','nzry_shenshi_2'],
subSkill:{
'1':{
audio:2,
prompt:'出牌阶段限一次，你可以将一张牌交给一名手牌数最多的角色，然后对其造成一点伤害，若该角色因此死亡，则你可以令一名角色将手牌摸至四张。',
enable:'phaseUse',
usable:1,
filter:function(event,player){
return player.countCards('he')>0&&player.storage.nzry_shenshi!=true;
},
discard:false,
line:true,
lose:false,
delay:false,
position:'he',
filterCard:true,
filterTarget:function(card,player,target){
return target!=player&&!game.hasPlayer(function(current){
return current!=player&&current.countCards('h')>target.countCards('h');
});
},
check:function(card){
return 5-get.value(card);
},
content:function(){
'step 0'
player.storage.nzry_shenshi=true;
target.gain(cards,player,'giveAuto');
target.damage('nocard');
'step 1'
if(!target.isAlive()){
player.chooseTarget('请选择一名角色并令其将手牌摸至四张',function(card,player,target){
return target.countCards('h')<4;
}).ai=function(target){
return get.attitude(player,target)
};
}
else{
event.finish();
};
'step 2'
if(result.bool){
player.line(result.targets);
result.targets[0].draw(4-result.targets[0].countCards('h'))
};
},
ai:{
order:1,
result:{
target:function(player,target){
return -1;
},
},
},
},
'2':{
audio:2,
prompt:'其他角色对你造成伤害后，你可以观看该角色的手牌，然后交给其一张牌，当前角色回合结束时，若此牌仍在该角色的区域内，你将手牌摸至四张。',
trigger:{player:'damageEnd'},
filter:function(event,player){
return player.countCards('he')>0&&event.source&&event.source!=player&&player.storage.nzry_shenshi==true;
},
check:function(event,player){
return event.source&&event.source.countCards('h')<=2&&player.countCards('h')<4;
},
content:function(){
'step 0'
player.storage.nzry_shenshi=false;
player.viewHandcards(trigger.source);
player.chooseCard('he',true).set('ai',function(card){
return 5-get.value(card);
});
'step 1'
if(result.bool){
trigger.source.gain(result.cards,player,'give');
trigger.source.storage.nzry_shenshi1=result.cards[0];
trigger.source.storage.nzry_shenshi2=player;
trigger.source.addSkill('nzry_shenshi1').gaintag.add('nzry_shenshi');
};
},
},
},
},
//钟琰还原
lib.skill.bolan={
global:'bolan2',
audio:2,
initList:function(player){
var list,skills=[];
if(get.mode()=='guozhan'){
list=[];
for(var i in lib.characterPack.mode_guozhan) list.push(i);
}
else if(_status.connectMode) list=get.charactersOL();
else{
list=[];
for(var i in lib.character){
if(lib.filter.characterDisabled2(i)||lib.filter.characterDisabled(i)) continue;
list.push(i);
}
}
for(var i of list){
if(i.indexOf('gz_jun')==0) continue;
for(var j of lib.character[i][3]){
if(j=='bolan') continue;
var skill=lib.skill[j];
if(!skill||skill.zhuSkill) continue;
if(skill.init||skill.ai&&(skill.ai.combo||skill.ai.notemp||skill.ai.neg)) continue;
var info=lib.translate[j+'_info'];
if(info&&info.indexOf('出牌阶段限一次')!=-1) skills.add(j);
}
}
player.storage.bolan=skills;
},
check:function(event,player){
return true;
},
trigger:{player:'phaseUseBegin'},
frequent:true,
content:function(){
'step 0'
if(player.isIn()){
if(!player.storage.bolan) lib.skill.bolan.initList(player);
var list=player.storage.bolan.randomGets(3);
if(!list.length){
event.finish();
return;
}
event.videoId=lib.status.videoId++;
var func=function(skills,id){
var dialog=ui.create.dialog('forcebutton');
dialog.videoId=id;
dialog.add('博览：请选择你要获得的技能');
for(var i=0;i<skills.length;i++){
dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【'+get.translation(skills[i])+'】</div><div>'+lib.translate[skills[i]+'_info']+'</div></div>');
}
dialog.addText(' <br> ');
}
if(player.isOnline()) player.send(func,list,event.videoId);
else if(player==game.me) func(list,event.videoId);
player.chooseControl(list);
}
else event.finish();
'step 1'
game.broadcastAll('closeDialog',event.videoId);
player.addTempSkill(result.control,'phaseUseEnd');
player.popup(result.control);
game.log(player,'获得了技能','#g【'+get.translation(result.control)+'】');
},
ai:{threaten:0.9},
},
lib.skill.bolan2={
audio:'bolan',
forceaudio:true,
enable:'phaseUse',
usable:1,
prompt:'出牌阶段限一次，你可以令一名拥有技能【博览】的角色从三个描述中包含“出牌阶段限一次”的技能中选择一个，你获得此技能直到此阶段结束。',
filter:function(event,player){
return game.hasPlayer(function(current){
return current!=player&&current.hasSkill('bolan');
});
},
filterTarget:function(card,player,target){
return player!=target&&target.hasSkill('bolan');
},
content:function(){
'step 0'
player.loseHp();
if(target.isIn()&&player.isIn()){
if(!target.storage.bolan) lib.skill.bolan.initList(target);
var list=target.storage.bolan.randomGets(3);
if(!list.length){
event.finish();
return;
}
event.videoId=lib.status.videoId++;
var func=function(skills,id){
var dialog=ui.create.dialog('forcebutton');
dialog.videoId=id;
dialog.add('博览：请选择令'+get.translation(player)+'获得的技能');
for(var i=0;i<skills.length;i++){
dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【'+get.translation(skills[i])+'】</div><div>'+lib.translate[skills[i]+'_info']+'</div></div>');
}
dialog.addText(' <br> ');
}
if(target.isOnline()) target.send(func,list,event.videoId);
else if(target==game.me) func(list,event.videoId);
target.chooseControl(list);
}
else event.finish();
'step 1'
game.broadcastAll('closeDialog',event.videoId);
target.line(player);
player.addTempSkill(result.control,'phaseUseEnd');
player.popup(result.control);
game.log(player,'获得了技能','#g【'+get.translation(result.control)+'】');
},
ai:{
order:10,
result:{
player:function(player,target){
var target=game.findPlayer(function(current){
return current.hasSkill('bolan');
});
if(target){
if(player.hasUnknown()) return 0;
if(player.hp>2) return 114514+get.attitude(player,target);
return 0;
}
}
}
},
},
lib.skill.yifa={
audio:2,
trigger:{target:'useCardToTargeted'},
forced:true,
logTarget:'player',
filter:function(event,player){
return player!=event.player&&(event.card.name=='sha'||get.color(event.card)=='black'&&get.type(event.card)=='trick');
},
content:function(){
var target=trigger.player;
target.addTempSkill('yifa2',{player:'phaseEnd'});
target.addMark('yifa2',1,false);
},
ai:{threaten:0.8},
},
//SP恃才添加卡牌标记，SP附势同OL版添加技能效果
lib.skill.spshicai={
audio:2,
enable:'phaseUse',
position:'he',
filter:function(event,player){
if(player.countCards('h',function(card){
return card.hasGaintag('spshicai');
})) return false;
return true;
},
filterCard:true,
prompt:function(){
var str='弃置一张牌，然后获得';
if(get.itemtype(_status.pileTop)=='card') str+=get.translation(_status.pileTop);
else str+='牌堆顶的一张牌';
return str;
},
check:function(card){
var player=_status.event.player;
var cardx=_status.pileTop;
if(get.itemtype(cardx)!='card') return 0;
var val=player.getUseValue(cardx,null,true);
if(!val) return 0;
var val2=player.getUseValue(card,null,true);
return (val-val2)/Math.max(0.1,get.value(card));
},
content:function(){
var card=get.cards()[0];
player.gain(card,'draw').gaintag.add('spshicai');
game.log(player,'获得了牌堆顶的一张牌');
},
group:'spshicai_mark',
ai:{
/*
order:function(item,player){
var cardx=_status.pileTop;
if(get.itemtype(cardx)!='card') return 0;
var val=player.getUseValue(cardx,null,true);
if(!val) return 0;
var val2=player.getUseValue(card,null,true);
return (val-val2)/Math.max(0.1,get.value(card));
return 1;
},
*/
order:7,
result:{player:1},
},
mod:{
aiOrder:function(player,card,num){
if(get.itemtype(card)=='card'&&card.hasGaintag('spshicai')) return num+3;
},
},
},
lib.skill.spshicai2={
onremove:function(player){
player.removeGaintag('spshicai');
},
mark:true,
intro:{
mark:function(dialog,content,player){
if(player!=game.me) return get.translation(player)+'观看牌堆中...';
if(get.itemtype(_status.pileTop)!='card') return '牌堆顶无牌';
dialog.add([_status.pileTop]);
},
},
},
lib.skill.spfushi={
trigger:{global:['dieAfter','reviveAfter','phaseBefore','showCharacterAfter']},
noHidden:true,
direct:true,
locked:true,
derivation:['zezhu','chenggong'],
content:function (){
var enemy=0;
var friend=0;
var zhu=0;
for(var i of game.players){
if(i.isEnemyOf(player)) enemy++;
else friend++;
if(i!=player&&i.isZhu) zhu++;
}
if(player.additionalSkills.spfushi){
if(enemy>friend&&!player.additionalSkills.spfushi.contains('chenggong')){
player.logSkill('spfushi');
player.removeAdditionalSkill('spfushi');
game.log(player,'失去了技能','#g【择主】');
player.addAdditionalSkill('spfushi',['chenggong']);
player.popup('chenggong');
game.log(player,'获得了技能','#g【逞功】');
}
else if(friend>enemy&&!player.additionalSkills.spfushi.contains('zezhu')){
player.logSkill('spfushi');
player.removeAdditionalSkill('spfushi');
game.log(player,'失去了技能','#g【逞功】');
player.addAdditionalSkill('spfushi',['zezhu']);
player.popup('zezhu');
game.log(player,'获得了技能','#g【择主】');
}
else if(friend==enemy&&player.additionalSkills.spfushi.length){
player.logSkill('spfushi');
if(player.hasSkill('zezhu')) game.log(player,'失去了技能','#g【择主】');
else game.log(player,'失去了技能','#g【逞功】');
player.removeAdditionalSkill('spfushi');
}
} 
else {
if(enemy>friend){
player.logSkill('spfushi');
player.addAdditionalSkill('spfushi',['chenggong']);
player.popup('chenggong');
game.log(player,'获得了技能','#g【逞功】');
}
else if(friend>enemy){
player.logSkill('spfushi');
player.addAdditionalSkill('spfushi',['zezhu']);
player.popup('zezhu');
game.log(player,'获得了技能','#g【择主】');
}
}
},
},
//群马超(这个三次就很梦幻啊)
lib.skill.ol_shichou2={
trigger:{player:'useCardAfter'},
forced:true,
popup:false,
onremove:true,
filter:function(event,player){
return event.ol_shichou==true&&!player.getHistory('sourceDamage',function(evt){
return evt.card==event.card;
}).length&&event.cards.filterInD().length>0;
},
content:function(){
player.gain(trigger.cards.filterInD(),'gain2');
},
},
//FW表哥
lib.skill.oldzishou={
audio:'zishou',
trigger:{player:'phaseDrawBegin2'},
check:function(event,player){
return player.countCards('h')<=(player.hasSkill('zongshi')?player.maxHp:(player.hp-2))||player.skipList.contains('phaseUse');
},
filter:function(event,player){
return !event.numFixed&&player.isDamaged();
},
content:function(){
trigger.num+=player.getDamagedHp();
player.skip('phaseUse');
},
ai:{
threaten:0.8
}
},
//邓士载
lib.skill.bilibili_zhenggong={
audio:'ext:活动武将:true',
trigger:{global:'phaseBefore'},
filter:function(event,player){
return event.player!=player&&!player.isTurnedOver();
},
check:function(event,player){
if(game.roundNumber<=1&&!game.hasPlayer(function(current){
return get.attitude(player,current)<0
})) return false;
return true;
},
content:function(){
'step 0'
player.phase('bilibili_zhenggong');
'step 1'
player.turnOver();
},
ai:{
expose:0.2,
}
},
lib.skill.bilibili_toudu={
audio:'ext:活动武将:true',
trigger:{player:'damageEnd'},
filter:function(event,player){
return player.isTurnedOver();
},
direct:true,
content:function(){
'step 0'
player.chooseCardTarget({
prompt:get.prompt2('bilibili_toudu'),
ai1:function(card){
return 6-get.value(card);
},
ai2:function(target){
return get.effect(target,{name:'sha'},player);
},
filterTarget:function(card,player,target){
return lib.filter.targetEnabled({name:'sha'},player,target);
},
});
'step 1'
if(result.bool){
player.logSkill('bilibili_toudu');
player.discard(result.cards);
player.turnOver();
player.useCard({name:'sha'},result.targets,false);
}
}
},
//FW关银屏
lib.skill.oldhuxiao={
shaRelated:true,
audio:'huxiao',
trigger:{player:'shaMiss'},
forced:true,
content:function(){
if(player.stat[player.stat.length-1].card.sha>0){
player.stat[player.stat.length-1].card.sha--;
}
}
},
lib.skill.oldwuji={
skillAnimation:true,
animationColor:'orange',
audio:'wuji',
trigger:{player:'phaseJieshuBegin'},
forced:true,
unique:true,
juexingji:true,
filter:function(event,player){
return player.getStat('damage')>=3&&!player.storage.oldwuji;
},
content:function(){
'step 0'
player.removeSkill('oldhuxiao');
player.gainMaxHp();
'step 1'
player.recover();
player.awakenSkill('oldwuji');
player.storage.oldwuji=true;
}
},
//旧许劭——肉身还未成圣的普通左慈
lib.skill.pinjian={
group:['pinjian2','pinjian3'],
audio:'ext:活动武将:true',
trigger:{global:'phaseBeginStart'},
direct:true,
init:function(player){
player.storage.pinjian=[];
player.storage.pinjian3=[];
},
intro:{
name:'月旦评',
name2:'将',
content:'characters',
},
content:function(){
'step 0'
player.chooseBool(get.prompt2('pinjian')).ai=function(){
return true;
};
'step 1'
if(result.bool){
player.logSkill('pinjian');
player.markSkill('pinjian');
event.count=4;
}else{
event.finish();
}
'step 2'
event.count--;
var list=[];
var list2=[];
var players=game.players.concat(game.dead);
for(var i=0;i<players.length;i++){
list2.add(players[i].name);
list2.add(players[i].name1);
list2.add(players[i].name2);
}
for(var i in lib.character){
if(player.storage.yuedan.contains(i)) continue;
if(list2.contains(i)) continue;
list.push(i);
}
var name=list.randomGet();
player.storage.pinjian.push(name);
player.storage.yuedan.push(name);
var skills=lib.character[name][3];
for(var i=0;i<skills.length;i++){
//player.addTempSkill(skills[i]);
player.storage.pinjian3.push(skills[i]);
}
event.dialog=ui.create.dialog('<div class="text center">'+get.translation(player)+'发动了【品鉴】',[[name],'character']);
game.delay(2);
'step 3'
event.dialog.close();
if(event.count!=0) event.goto(2);
'step 4'
var controls=[];
controls.push(player.storage.pinjian3);
player.chooseControl('品鉴：选择获得一个技能',true).ai=function(){
return Math.floor(Math.random()*controls.length);
'step 5'
if(result.control) player.addTempSkill(result.control);
else event.goto(4);
};
}
},
lib.skill.pinjian2={
trigger:{global:'phaseEnd'},
lastDo:true,
direct:true,
content:function (){
player.storage.pinjian=[];
player.storage.pinjian3=[];
player.unmarkSkill('pinjian');
},
},
lib.skill.pinjian3={
getSkillSources:function(player,skill){
if(player.getStockSkills().contains(skill)) return [];
var sources=[];
for(var i in player.storage.pinjian_map){
if(game.expandSkills(player.storage.pinjian_map[i].slice(0)).contains(skill)) sources.push(i);
}
return sources;
},
trigger:{player:['useSkillBegin','useCard1','useCard','respond','useSkillAfter','useCardAfter','respondAfter','triggerAfter','skillAfter','damageBegin','damageAfter']},
firstDo:true,
direct:true,
priority:114514,
filter:function(event,player){
return event.skill&&lib.skill.pinjian.getSkillSources(player,event.skill).length>0;
},
content:function(){
player.removeSkill(player.storage.pinjian3);
},
},
lib.skill.yuedan={
init:function(player){
player.storage.yuedan=[];
},
audio:'ext:活动武将:true',
trigger:{global:'roundStart'},
filter:function (event,player){
return game.roundNumber%4==0;
},
forced:true,
content:function (){
player.storage.yuedan=[];
game.log('武将牌堆已重新洗牌');
},
},
lib.skill.oldpingjian={
audio:'pingjian',
trigger:{player:['damageEnd','phaseJieshuBegin']},
filter:function(event,player){
return player.countCards('he');
},
initList:function(){
var list=[];
if(_status.connectMode) var list=get.charactersOL();
else{
var list=[];
for(var i in lib.character){
if(lib.filter.characterDisabled2(i)||lib.filter.characterDisabled(i)) continue;
list.push(i);
}
}
game.countPlayer2(function(current){
list.remove(current.name);
list.remove(current.name1);
list.remove(current.name2);
if(current.storage.huashen&&current.storage.huashen.character) list.removeArray(current.storage.huashen.character)
if(current.storage.rehuashen&&current.storage.rehuashen.character) list.removeArray(current.storage.rehuashen.character)
});
_status.characterlist=list;
},
direct:true,
content:function(){
'step 0'
player.chooseCard('he',get.prompt2('oldpingjian')).set('ai',function(card){
return 10-get.value(card);
}).set('filterCard',lib.filter.cardDiscardable);
'step 1'
if(result.bool){
player.logSkill('oldpingjian');
player.discard(result.cards[0]);
if(!player.storage.oldpingjian) player.storage.oldpingjian=[];
event._result={bool:true};
}else{
event.finish();
}
'step 2'
if(result.bool){
if(!_status.characterlist){
lib.skill.oldpingjian.initList();
}
var list=[];
var skills=[];
var map=[];
_status.characterlist.randomSort();
var name2=event.triggername;
for(var i=0;i<_status.characterlist.length;i++){
var name=_status.characterlist[i];
if(name.indexOf('zuoci')!=-1||name.indexOf('xushao')!=-1) continue;
var skills2=lib.character[name][3];
for(var j=0;j<skills2.length;j++){
if(player.storage.oldpingjian.contains(skills2[j])) continue;
if(skills.contains(skills2[j])){
list.add(name);
if(!map[name]) map[name]=[];
map[name].push(skills2[j]);
skills.add(skills2[j]);
continue;
}
var list2=[skills2[j]];
game.expandSkills(list2);
for(var k=0;k<list2.length;k++){
var info=lib.skill[list2[k]];
if(!info||!info.trigger||!info.trigger.player||info.silent||info.limited||info.juexingji||info.zhuanhuanji||info.hiddenSkill) continue;
if(info.trigger.player==name2||Array.isArray(info.trigger.player)&&info.trigger.player.contains(name2)){
if(info.init||info.ai&&(info.ai.combo||info.ai.notemp||info.ai.neg)) continue;
if(info.filter){
try{
var bool=info.filter(trigger,player,name2);
if(!bool) continue;
}
catch(e){
continue;
}
}
list.add(name);
if(!map[name]) map[name]=[];
map[name].push(skills2[j]);
skills.add(skills2[j]);
break;
}
}
}
if(list.length>2) break;
}
if(!skills.length){
game.log('此阶段已没有可使用的技能');
//player.draw();
event.finish();
}
else{
//skills.unshift('摸一张牌');
player.chooseControl(skills).set('dialog',['请选择要发动的技能',[list,'character']]).set('ai',function(){
return skills.randomGet();
});
}
}
else event.finish();
'step 3'
if(result.control=='摸一张牌'){
player.draw();
return;
}
player.storage.oldpingjian.add(result.control);
player.addTempSkill(result.control,event.triggername=='damageEnd'?'damageAfter':'phaseJieshu');
},
group:'oldpingjian_use',
phaseUse_special:['xinfu_lingren'],
},
lib.skill.oldpingjian_use={
audio:'pingjian',
enable:'phaseUse',
usable:1,
filter:function(event,player){
return player.countCards('he');
},
filterCard:true,
position:'he',
content:function(){
'step 0'
if(!player.storage.oldpingjian) player.storage.oldpingjian=[];
event._result={bool:true};
'step 1'
if(result.bool){
var list=[];
var skills=[];
var map=[];
if(!_status.characterlist){
lib.skill.oldpingjian.initList();
}
_status.characterlist.randomSort();
for(var i=0;i<_status.characterlist.length;i++){
var name=_status.characterlist[i];
if(name.indexOf('zuoci')!=-1||name.indexOf('xushao')!=-1) continue;
var skills2=lib.character[name][3];
for(var j=0;j<skills2.length;j++){
if(player.storage.oldpingjian.contains(skills2[j])) continue;
if(skills.contains(skills2[j])||lib.skill.oldpingjian.phaseUse_special.contains(skills2[j])){
list.add(name);
if(!map[name]) map[name]=[];
map[name].push(skills2[j]);
skills.add(skills2[j]);
continue;
}
var list2=[skills2[j]];
game.expandSkills(list2);
for(var k=0;k<list2.length;k++){
var info=lib.skill[list2[k]];
if(!info||!info.enable||info.viewAs||info.limited||info.juexingji||info.zhuanhuanji||info.hiddenSkill) continue;
if(info.enable=='phaseUse'||Array.isArray(info.enable)&&info.enable.contains('phaseUse')){
if(info.init||info.onChooseToUse||info.ai&&(info.ai.combo||info.ai.notemp||info.ai.neg)) continue;
if(info.filter){
try{
var bool=info.filter(event.getParent(2),player);
if(!bool) continue;
}
catch(e){
continue;
}
}
list.add(name);
if(!map[name]) map[name]=[];
map[name].push(skills2[j]);
skills.add(skills2[j]);
break;
}
}
}
if(list.length>2) break;
}
if(!skills.length){
game.log('此阶段已没有可使用的技能');
//player.draw();
event.finish();
}
else{
//skills.unshift('摸一张牌');
player.chooseControl(skills).set('dialog',['请选择要发动的技能',[list,'character']]).set('ai',function(){
return skills.randomGet();
});
}
}
else event.finish();
'step 2'
if(result.control=='摸一张牌'){
player.draw();
return;
}
player.storage.oldpingjian.add(result.control);
player.addTempSkill(result.control,'phaseUseEnd');
player.addTempSkill('oldpingjian_temp','phaseUseEnd');
player.storage.oldpingjian_temp=result.control;
},
ai:{order:10,result:{player:1}},
},
lib.skill.oldpingjian_temp={
onremove:true,
trigger:{player:['useSkillBegin','useCard1']},
silent:true,
firstDo:true,
filter:function(event,player){
var info=lib.skill[event.skill];
if(!info) return false;
if(event.skill==player.storage.oldpingjian_temp) return true;
if(info.sourceSkill==player.storage.oldpingjian_temp||info.group==player.storage.oldpingjian_temp) return true;
if(Array.isArray(info.group)&&info.group.contains(player.storage.oldpingjian_temp)) return true;
return false;
},
content:function(){
player.removeSkill(player.storage.oldpingjian_temp);
player.removeSkill('oldpingjian_temp');
},
},
//草尼玛，燃起来了！——老兀突骨
lib.skill.olranshang={
group:'olranshang2',
audio:'ranshang',
trigger:{player:'damageEnd'},
filter:function(event,player){
return event.nature=='fire';
},
forced:true,
check:function(){
return false;
},
content:function(){
player.addMark('olranshang',trigger.num);
},
intro:{
name2:'燃',
content:'mark'
},
ai:{
effect:{
target:function(card,player,target,current){
if(card.name=='sha'){
if(card.nature=='fire'||player.hasSkill('zhuque_skill')) return 2;
}
if(get.tag(card,'fireDamage')&&current<0) return 2;
}
}
},
},
lib.skill.olranshang2={
audio:'ranshang',
trigger:{player:'phaseJieshuBegin'},
forced:true,
filter:function(event,player){
return player.countMark('olranshang')>0;
},
content:function(){
player.loseHp(player.countMark('olranshang'));
}
},
lib.skill.olhanyong={
audio:'hanyong',
trigger:{player:'useCard'},
filter:function(event,player){
return event.card&&(event.card.name=='nanman'||event.card.name=='wanjian')&&player.hp<game.roundNumber;
},
content:function(){
trigger.baseDamage++;
},
},
//保留所有设定的旧美羊羊
lib.skill.oldhongyi={
audio:'hongyi',
enable:'phaseUse',
usable:1,
filter:function(event,player){
return player.countCards('he')>=Math.min(2,game.dead.length);
},
selectCard:function(){
return Math.min(2,game.dead.length);
},
position:'he',
filterCard:true,
filterTarget:lib.filter.notMe,
check:function(card){
var num=Math.min(2,game.dead.length);
if(!num) return 1;
if(num==1) return 7-get.value(card);
return 5-get.value(card);
},
content:function(){
player.addTempSkill('hongyi2',{player:'phaseBeginStart'});
player.storage.hongyi2.add(target);
player.markSkill('hongyi2');
},
ai:{
order:1,
result:{
target:function(player,target){
if(target.hasJudge('lebu')) return -0.5;
return -1-target.countCards('h');
},
},
},
},
//左慈
lib.skill.huashen={
audio:'huashen2',
unique:true,
direct:true,
content:function(){
"step 0"
_status.noclearcountdown=true;
event.videoId=lib.status.videoId++;
var cards=player.storage.huashen.character.slice(0);
var skills=[];
var sto=player.storage.huashen;
for(var i in player.storage.huashen.map){
skills.addArray(player.storage.huashen.map[i]);
}
var cond='out';
if(event.triggername=='phaseBegin'){
cond='in';
}
skills.randomSort();
skills.sort(function(a,b){
return get.skillRank(b,cond)-get.skillRank(a,cond);
});
event.aiChoice=skills[0];
var choice='更换技能';
if(player.isOnline2()){
player.send(function(cards,id){
var dialog=ui.create.dialog('是否发动【化身】？',[cards,'character']);
dialog.videoId=id;
},cards,event.videoId);
}
event.dialog=ui.create.dialog(get.prompt('huashen'),[cards,'character']);
event.dialog.videoId=event.videoId;
if(!event.isMine()){
event.dialog.style.display='none';
}
if(event.triggername=='huashen') event._result={control:'更换技能'};
else player.chooseControl('更换技能','cancel2').set('ai',function(){
return _status.event.choice;
}).set('choice',choice);
"step 1"
event.control=result.control;
if(event.control=='cancel2'){
if(player.isOnline2()){
player.send('closeDialog',event.videoId);
}
delete _status.noclearcountdown;
if(!_status.noclearcountdown){
game.stopCountChoose();
}
event.dialog.close();
event.finish();return;
}
if(!event.logged){player.logSkill('huashen');event.logged=true}
var next=player.chooseButton(true).set('dialog',event.videoId);
next.set('ai',function(button){
return player.storage.huashen.map[button.link].contains(_status.event.choice)?2.5:1+Math.random();
});
next.set('choice',event.aiChoice);
var prompt='选择要切换的化身';
var func=function(id,prompt){
var dialog=get.idDialog(id);
if(dialog){
dialog.content.childNodes[0].innerHTML=prompt;
}
}
if(player.isOnline2()){
player.send(func,event.videoId,prompt);
}
else if(event.isMine()){
func(event.videoId,prompt);
}
"step 2"
if(result.bool&&event.control!='弃置化身'){
event.card=result.links[0];
var func=function(card,id){
var dialog=get.idDialog(id);
if(dialog){
for(var i=0;i<dialog.buttons.length;i++){
if(dialog.buttons[i].link==card){
dialog.buttons[i].classList.add('selectedx');
}
else{
dialog.buttons[i].classList.add('unselectable');
}
}
}
}
if(player.isOnline2()){
player.send(func,event.card,event.videoId);
}
else if(event.isMine()){
func(event.card,event.videoId);
}
var list=player.storage.huashen.map[event.card].slice(0);
list.push('返回');
player.chooseControl(list).set('choice',event.aiChoice).set('ai',function(){
return _status.event.choice;
});
}
else{
lib.skill.huashen.removeFuckShen(player,result.links.slice(0));
lib.skill.huashen.addFuckShens(player,result.links.length);
}
"step 3"
if(result.control=='返回'){
var func=function(id){
var dialog=get.idDialog(id);
if(dialog){
for(var i=0;i<dialog.buttons.length;i++){
dialog.buttons[i].classList.remove('selectedx');
dialog.buttons[i].classList.remove('unselectable');
}
}
}
if(player.isOnline2()){
player.send(func,event.videoId);
}
else if(event.isMine()){
func(event.videoId);
}
event._result={control:'更换化身'};
event.goto(1);
return;
}
if(player.isOnline2()){
player.send('closeDialog',event.videoId);
}
event.dialog.close();
delete _status.noclearcountdown;
if(!_status.noclearcountdown){
game.stopCountChoose();
}
if(player.storage.huashen.current!=event.card){
player.storage.huashen.current=event.card;
game.broadcastAll(function(character,player){
player.storage.huashen1=player.sex;
player.storage.huashen2=player.group;
player.sex=lib.character[character][0];
if(player.sex!=player.storage.huashen1) game.log(player,'更换性别为','#g'+player.sex);
player.group=lib.character[character][1];
if(player.group!=player.storage.huashen2) game.log(player,'更换势力为','#g'+get.translation(player.group+2));
player.node.name.dataset.nature=get.groupnature(player.group);
},event.card,player);
}
var link=result.control;
player.storage.huashen.current2=link;
if(!player.additionalSkills.huashen||!player.additionalSkills.huashen.contains(link)){
player.addAdditionalSkill('huashen',link);
player.flashAvatar('huashen',event.card);
game.log(player,'获得技能','#g【'+get.translation(link)+'】');
player.popup(link);
player.syncStorage('huashen');
player.updateMarks('huashen');
}
},
init:function(player,skill){
if(!player.storage[skill]) player.storage[skill]={
character:[],
map:{},
}
},
group:'huashen_init',
trigger:{player:['phaseBegin','phaseEnd','huashen']},
filter:function(event,player,name){
return player.storage.huashen&&player.storage.huashen.character.length>0;
},
banned:['cike_wuliuqi','cike_meihuashisan','lisu','sp_xiahoudun','xushao','zhoutai','old_zhoutai','doubleold_zhoutai','shixie','decade_shixie','old_shixie'],
addFuckShen:function(player){
if(!player.storage.huashen) return;
if(!_status.characterlist){
if(_status.connectMode) var list=get.charactersOL();
else{
var list=[];
for(var i in lib.character){
if(lib.filter.characterDisabled2(i)||lib.filter.characterDisabled(i)) continue;
list.push(i);
}
}
game.countPlayer2(function(current){
list.remove(current.name);
list.remove(current.name1);
list.remove(current.name2);
if(current.storage.huashen&&current.storage.huashen.character) list.removeArray(current.storage.huashen.character)
});
_status.characterlist=list;
}
_status.characterlist.randomSort();
var bool=false;
for(var i=0;i<_status.characterlist.length;i++){
var name=_status.characterlist[i];
if(name.indexOf('zuoci')!=-1||name.indexOf('key')==0||lib.skill.huashen.banned.contains(name)||player.storage.huashen.character.contains(name)) continue;
var skills=lib.character[name][3];
for(var j=0;j<skills.length;j++){
var info=lib.skill[skills[j]];
if(info.charlotte||(info.unique&&!info.gainable)||info.juexingji||info.limited||info.zhuSkill||info.hiddenSkill||info.dutySkill) skills.splice(j--,1);
}
if(skills.length){
player.storage.huashen.character.push(name);
player.storage.huashen.map[name]=skills;
_status.characterlist.remove(name);
return name;
}
}
},
addFuckShens:function(player,num){
var list=[];
for(var i=0;i<num;i++){
var name=lib.skill.huashen.addFuckShen(player);
if(name) list.push(name);
}
if(list.length){
game.log(player,'获得了',get.cnNumber(list.length)+'张','#g化身')
lib.skill.huashen.drawCharacter(player,list);
}
},
removeFuckShen:function(player,links){
player.storage.huashen.character.removeArray(links);
_status.characterlist.addArray(links);
game.log(player,'移去了',get.cnNumber(links.length)+'张','#g化身')
},
drawCharacter:function(player,list){
game.broadcastAll(function(player,list){
if(player.isUnderControl(true)){
var cards=[];
for(var i=0;i<list.length;i++){
var cardname='huashen_card_'+list[i];
lib.card[cardname]={
fullimage:true,
image:'character:'+list[i]
}
lib.translate[cardname]=get.rawName2(list[i]);
cards.push(game.createCard(cardname,'',''));
}
player.$draw(cards,'nobroadcast');
}
else{
var cards=[];
for(var i=0;i<list.length;i++){
var cardname='huashen_unknown';
lib.card[cardname]={
fullimage:true,
image:'ext:活动武将/huashen_unknown.jpg'
}
lib.translate[cardname]=' ';
cards.push(game.createCard(cardname,'',''));
}
player.$draw(cards,'nobroadcast');
}
},player,list);
},
intro:{
onunmark:function(storage,player){
_status.characterlist.addArray(storage.character);
storage.character=[];
},
mark:function(dialog,storage,player){
if(storage&&storage.current) dialog.addSmall([[storage.current],'character']);
if(storage&&storage.current2) dialog.add('<div><div class="skill">【'+get.translation(lib.translate[storage.current2+'_ab']||get.translation(storage.current2).slice(0,2))+'】</div><div>'+get.skillInfoTranslation(storage.current2,player)+'</div></div>');
if(storage&&storage.character.length){
if(player.isUnderControl(true)){
dialog.addSmall([storage.character,'character']);
}
else{
dialog.addText('共有'+get.cnNumber(storage.character.length)+'张「化身」');
}
}
else{
return '没有化身';
}
},
content:function(storage,player){
return '共有'+get.cnNumber(storage.character.length)+'张「化身」'
},
markcount:function(storage,player){
if(storage&&storage.character) return storage.character.length;
return 0;
},
},
},
lib.skill.huashen_init={
trigger:{global:'phaseBefore',player:'enterGame'},
forced:true,
popup:false,
filter:function(event,player){
return (event.name!='phase'||game.phaseNumber==0);
},
content:function(){
lib.skill.huashen.addFuckShens(player,2);
player.syncStorage('huashen');
player.markSkill('huashen');
var next=game.createEvent('huashen');
next.player=player;
next._trigger=trigger;
next.triggername='huashen';
next.setContent(lib.skill.huashen.content);
},
},
lib.skill.xinsheng={
unique:true,
audio:2,
trigger:{player:'damageEnd'},
frequent:true,
content:function(){
lib.skill.huashen.addFuckShens(player,trigger.num);
player.syncStorage('huashen');
player.updateMarks('huashen');
},
},
lib.skill.rehuashen={
audio:2,
unique:true,
direct:true,
content:function(){
"step 0"
_status.noclearcountdown=true;
event.videoId=lib.status.videoId++;
var cards=player.storage.rehuashen.character.slice(0);
var skills=[];
var sto=player.storage.rehuashen;
for(var i in player.storage.rehuashen.map){
skills.addArray(player.storage.rehuashen.map[i]);
}
var cond='out';
if(event.triggername=='phaseBegin'){
cond='in';
}
skills.randomSort();
skills.sort(function(a,b){
return get.skillRank(b,cond)-get.skillRank(a,cond);
});
event.aiChoice=skills[0];
var choice='更换技能';
if(event.aiChoice==player.storage.rehuashen.current2||get.skillRank(event.aiChoice,cond)<1) choice='弃置化身';
if(player.isOnline2()){
player.send(function(cards,id){
var dialog=ui.create.dialog('是否发动【化身】？',[cards,'character']);
dialog.videoId=id;
},cards,event.videoId);
}
event.dialog=ui.create.dialog(get.prompt('rehuashen'),[cards,'character']);
event.dialog.videoId=event.videoId;
if(!event.isMine()){
event.dialog.style.display='none';
}
if(event.triggername=='rehuashen') event._result={control:'更换技能'};
else player.chooseControl('弃置化身','更换技能','cancel2').set('ai',function(){
return _status.event.choice;
}).set('choice',choice);
"step 1"
event.control=result.control;
if(event.control=='cancel2'){
if(player.isOnline2()){
player.send('closeDialog',event.videoId);
}
delete _status.noclearcountdown;
if(!_status.noclearcountdown){
game.stopCountChoose();
}
event.dialog.close();
event.finish();return;
}
if(!event.logged){player.logSkill('rehuashen');event.logged=true}
var next=player.chooseButton(true).set('dialog',event.videoId);
if(event.control=='弃置化身'){
next.set('selectButton',[1,2]);
next.set('filterButton',function(button){
return button.link!=_status.event.current;
});
next.set('current',player.storage.rehuashen.current);
}
else{
next.set('ai',function(button){
return player.storage.rehuashen.map[button.link].contains(_status.event.choice)?2.5:1+Math.random();
});
next.set('choice',event.aiChoice);
}
var prompt=event.control=='弃置化身'?'选择弃置至多两张化身':'选择要切换的化身';
var func=function(id,prompt){
var dialog=get.idDialog(id);
if(dialog){
dialog.content.childNodes[0].innerHTML=prompt;
}
}
if(player.isOnline2()){
player.send(func,event.videoId,prompt);
}
else if(event.isMine()){
func(event.videoId,prompt);
}
"step 2"
if(result.bool&&event.control!='弃置化身'){
event.card=result.links[0];
var func=function(card,id){
var dialog=get.idDialog(id);
if(dialog){
for(var i=0;i<dialog.buttons.length;i++){
if(dialog.buttons[i].link==card){
dialog.buttons[i].classList.add('selectedx');
}
else{
dialog.buttons[i].classList.add('unselectable');
}
}
}
}
if(player.isOnline2()){
player.send(func,event.card,event.videoId);
}
else if(event.isMine()){
func(event.card,event.videoId);
}
var list=player.storage.rehuashen.map[event.card].slice(0);
list.push('返回');
player.chooseControl(list).set('choice',event.aiChoice).set('ai',function(){
return _status.event.choice;
});
}
else{
lib.skill.rehuashen.removeHuashen(player,result.links.slice(0));
lib.skill.rehuashen.addHuashens(player,result.links.length);
}
"step 3"
if(result.control=='返回'){
var func=function(id){
var dialog=get.idDialog(id);
if(dialog){
for(var i=0;i<dialog.buttons.length;i++){
dialog.buttons[i].classList.remove('selectedx');
dialog.buttons[i].classList.remove('unselectable');
}
}
}
if(player.isOnline2()){
player.send(func,event.videoId);
}
else if(event.isMine()){
func(event.videoId);
}
event._result={control:'更换化身'};
event.goto(1);
return;
}
if(player.isOnline2()){
player.send('closeDialog',event.videoId);
}
event.dialog.close();
delete _status.noclearcountdown;
if(!_status.noclearcountdown){
game.stopCountChoose();
}
if(event.control=='弃置化身') return;
if(player.storage.rehuashen.current!=event.card){
player.storage.rehuashen.current=event.card;
game.broadcastAll(function(character,player){
player.storage.rehuashen1=player.sex;
player.storage.rehuashen2=player.group;
player.sex=lib.character[character][0];
if(player.sex!=player.storage.rehuashen1) game.log(player,'更换性别为','#g'+player.sex);
player.group=lib.character[character][1];
if(player.group!=player.storage.rehuashen2) game.log(player,'更换势力为','#g'+get.translation(player.group+2));
player.node.name.dataset.nature=get.groupnature(player.group);
},event.card,player);
}
var link=result.control;
player.storage.rehuashen.current2=link;
if(!player.additionalSkills.rehuashen||!player.additionalSkills.rehuashen.contains(link)){
player.addAdditionalSkill('rehuashen',link);
player.flashAvatar('rehuashen',event.card);
game.log(player,'获得技能','#g【'+get.translation(link)+'】');
player.popup(link);
player.syncStorage('rehuashen');
player.updateMarks('rehuashen');
}
},
init:function(player,skill){
if(!player.storage[skill]) player.storage[skill]={
character:[],
map:{},
}
},
group:'rehuashen_init',
trigger:{player:['phaseBegin','phaseEnd','rehuashen']},
filter:function(event,player,name){
return player.storage.rehuashen&&player.storage.rehuashen.character.length>0;
},
banned:['cike_wuliuqi','cike_meihuashisan','lisu','sp_xiahoudun','xushao','zhoutai','old_zhoutai','doubleold_zhoutai','shixie','decade_shixie','old_shixie'],
addHuashen:function(player){
if(!player.storage.rehuashen) return;
if(!_status.characterlist){
if(_status.connectMode) var list=get.charactersOL();
else{
var list=[];
for(var i in lib.character){
if(lib.filter.characterDisabled2(i)||lib.filter.characterDisabled(i)) continue;
list.push(i);
}
}
game.countPlayer2(function(current){
list.remove(current.name);
list.remove(current.name1);
list.remove(current.name2);
if(current.storage.rehuashen&&current.storage.rehuashen.character) list.removeArray(current.storage.rehuashen.character)
});
_status.characterlist=list;
}
_status.characterlist.randomSort();
var bool=false;
for(var i=0;i<_status.characterlist.length;i++){
var name=_status.characterlist[i];
if(name.indexOf('zuoci')!=-1||name.indexOf('key')==0||lib.skill.rehuashen.banned.contains(name)||player.storage.rehuashen.character.contains(name)) continue;
var skills=lib.character[name][3];
for(var j=0;j<skills.length;j++){
var info=lib.skill[skills[j]];
if(info.charlotte||(info.unique&&!info.gainable)||info.juexingji||info.limited||info.zhuSkill||info.hiddenSkill||info.dutySkill) skills.splice(j--,1);
}
if(skills.length){
player.storage.rehuashen.character.push(name);
player.storage.rehuashen.map[name]=skills;
_status.characterlist.remove(name);
return name;
}
}
},
addHuashens:function(player,num){
var list=[];
for(var i=0;i<num;i++){
var name=lib.skill.rehuashen.addHuashen(player);
if(name) list.push(name);
}
if(list.length){
game.log(player,'获得了',get.cnNumber(list.length)+'张','#g化身')
lib.skill.rehuashen.drawCharacter(player,list);
}
},
removeHuashen:function(player,links){
player.storage.rehuashen.character.removeArray(links);
_status.characterlist.addArray(links);
game.log(player,'移去了',get.cnNumber(links.length)+'张','#g化身')
},
drawCharacter:function(player,list){
game.broadcastAll(function(player,list){
if(player.isUnderControl(true)){
var cards=[];
for(var i=0;i<list.length;i++){
var cardname='huashen_card_'+list[i];
lib.card[cardname]={
fullimage:true,
image:'character:'+list[i]
}
lib.translate[cardname]=get.rawName2(list[i]);
cards.push(game.createCard(cardname,'',''));
}
player.$draw(cards,'nobroadcast');
}
else{
var cards=[];
for(var i=0;i<list.length;i++){
var cardname='huashen_unknown';
lib.card[cardname]={
fullimage:true,
image:'ext:活动武将/huashen_unknown.jpg'
}
lib.translate[cardname]=' ';
cards.push(game.createCard(cardname,'',''));
}
player.$draw(cards,'nobroadcast');
}
},player,list);
},
intro:{
onunmark:function(storage,player){
_status.characterlist.addArray(storage.character);
storage.character=[];
},
mark:function(dialog,storage,player){
if(storage&&storage.current) dialog.addSmall([[storage.current],'character']);
if(storage&&storage.current2) dialog.add('<div><div class="skill">【'+get.translation(lib.translate[storage.current2+'_ab']||get.translation(storage.current2).slice(0,2))+'】</div><div>'+get.skillInfoTranslation(storage.current2,player)+'</div></div>');
if(storage&&storage.character.length){
if(player.isUnderControl(true)){
dialog.addSmall([storage.character,'character']);
}
else{
dialog.addText('共有'+get.cnNumber(storage.character.length)+'张「化身」');
}
}
else{
return '没有化身';
}
},
content:function(storage,player){
return '共有'+get.cnNumber(storage.character.length)+'张「化身」'
},
markcount:function(storage,player){
if(storage&&storage.character) return storage.character.length;
return 0;
},
},
},
//旧韩当
lib.skill.oldgongji={
audio:'gongji',
enable:['chooseToUse','chooseToRespond'],
filterCard:{type:'equip'},
viewAs:{name:'sha'},
viewAsFilter:function(player){
return player.countCards('he',{type:'equip'})!=0;
},
position:'he',
prompt:'将一张装备牌当【杀】使用或打出',
check:function(card){
if(get.subtype(card)=='equip1') return 10-get.value(card);
return 7-get.equipValue(card);
},
mod:{
targetInRange:function(card){
if(_status.event.skill=='oldgongji') return true;
}
},
ai:{
order:function(){
return lib.card.sha.ai.order+0.1;
},
respondSha:true,
skillTagFilter:function(player){
if(!player.countCards('he')) return false;
}
}
},
lib.skill.oldjiefan={
audio:'jiefan',
trigger:{global:'dying'},
filter:function(event,player){
return player!=_status.currentPhase&&player.num('h')&&player.canUse({name:'sha'},_status.currentPhase,false);
},
direct:true,
logTarget:true,
content:function(){
'step 0'
player.storage.oldjiefan=trigger.player;
player.chooseToUse(get.translation(trigger.player)+'处于濒死状态，是否对'+get.translation(_status.currentPhase)+'使用一张【杀】？',{name:'sha'}).set('filterTarget',function(card,player,target){
return target==_status.event.source;
}).set('selectTarget',-1).set('source',_status.currentPhase).set('logSkill','oldjiefan');
'step 1'
var bool=game.hasPlayer(function(current){
return current.getHistory('damage',function(evt){
return evt.getParent(4)==event;
}).length>0
});
if(bool){
var save=player.storage.oldjiefan;
player.line(save,'water');
save.recover();
}
else event.finish();
'step 2'
var save=player.storage.oldjiefan;
if(save.hp<=0) event.goto(0);
},
},
//新服王允技能适配
lib.skill.xinlianji={
enable:'phaseUse',
audio:'wylianji',
usable:1,
check:function(card){
return 5-get.value(card);
},
filterTarget:function(card,player,target){
if(ui.selected.targets.length) return true;
return target!=player;
},
filterCard:true,
selectTarget:2,
multitarget:true,
targetprompt:['打人','被打'],
content:function(){
'step 0'
var card=get.cardPile2(function(card){
return get.subtype(card)=='equip1'&&targets[0].hasUseTarget(card);
});
if(card){
if(card.name=='qinggang'&&!lib.inpile.contains('qibaodao')){
card.remove();
card=game.createCard('qibaodao',card.suit,card.number);
}
targets[0].chooseUseTarget(card,true,'nopopup','nothrow');
}
else{
player.chat('没有装备牌了吗');
game.log('但是牌堆里已经没有装备牌了！');
}
'step 1'
game.updateRoundNumber();
targets[0].chooseToUse('对'+get.translation(targets[1])+'使用一张【杀】，或将装备区里的武器牌交给一名其他角色',
{name:'sha'}).set('targetRequired',true).set('complexSelect',true).set('filterTarget',function(card,player,target){
if(target!=_status.event.sourcex&&!ui.selected.targets.contains(_status.event.sourcex)) return false;
return lib.filter.filterTarget.apply(this,arguments);
}).set('sourcex',targets[1]).set('addCount',false);
'step 2'
if(result.bool){
player.addMark('xinlianji1',1,false);
event.finish();
}
'step 3'
var card=targets[0].getEquip(1);
if(!result.bool&&card){
player.addMark('xinlianji2',1,false);
event.card=card;
player.chooseTarget(true,'将'+get.translation(card)+'交给一名其他角色').set('ai',function(target){
var card=_status.event.getParent().card;
return (target.hasSkillTag('nogain')?0:get.attitude(_status.event.player,target))*Math.max(0.1,target.getUseValue(card));
});
}
else event.finish();
'step 4'
result.targets[0].gain(card,targets[0],'give');
},
ai:{
order:4,
result:{
target:function(player,target){
if(ui.selected.targets.length){
var pretarget=ui.selected.targets[0];
if(pretarget.hasSha()&&pretarget.canUse({name:'sha'},target)) return get.effect(target,{name:'sha'},pretarget,target);
return Math.random();
}
if(!target.getEquip(1)){
if(game.hasPlayer(function(current){
return current!=target&&!current.hasSkillTag('nogain')&&get.attitude(current,target)>0;
})) return 3;
return -3;
}
if(!game.hasPlayer(function(current){
return current!=target&&!current.hasSkillTag('nogain')&&get.attitude(current,target)>0;
})) return -6;
return 4-get.value(target.getEquip(1));
},
},
},
},
lib.skill.decademoucheng={
trigger:{player:'phaseZhunbeiBegin'},
audio:'moucheng',
forced:true,
juexingji:true,
skillAnimation:true,
animationColor:'gray',
derivation:'xinjingong',
unique:true,
filter:function(event,player){
return player.countMark('xinlianji1')>0&&player.countMark('xinlianji2')>0;
},
content:function(){
player.awakenSkill('decademoucheng');
player.addSkill('xinjingong');
player.removeSkill('xinlianji');
},
},
//老版本赵士兵
lib.skill.oldfanghun={
audio:'fanghun',
inherit:'fanghun',
trigger:{
source:'damageSource',
},
},
lib.skill.oldfuhan={
audio:'fuhan',
trigger:{player:'phaseZhunbeiBegin'},
unique:true,
skillAnimation:true,
forceunique:true,
filter:function(event,player){
return player.storage.fanghun>0;
},
prompt:function(event,player){
var num=player.storage.fanghun2;
num=Math.min(num,game.players.length+game.dead.length);
return get.prompt('oldfuhan')+'（体力上限：'+num+'）';
},
check:function(event,player){
var num=player.storage.fanghun2;
if(num==1) return false;
if(player.hp<=1) return true;
if(num==2) return false;
if(num==3) return player.hp<3&&player.isMinHp();
return true;
},
content:function(){
'step 0'
player.awakenSkill('oldfuhan');
var list;
if(_status.connectMode){
list=get.charactersOL(function(i){
return lib.character[i][1]!='shu';
});
}
else{
list=get.gainableCharacters(function(info){
return info[1]=='shu';
});
}
var players=game.players.concat(game.dead);
for(var i=0;i<players.length;i++){
list.remove(players[i].name);
list.remove(players[i].name1);
list.remove(players[i].name2);
}
player.chooseButton(true).set('ai',function(button){
return get.rank(button.link,true)-lib.character[button.link][2];
}).set('createDialog',['将武将牌替换为一名角色',[list.randomGets(5),'character']]);
'step 1'
var num=player.storage.fanghun2;
num=Math.min(num,game.players.length+game.dead.length);
player.reinit('old_zhaoxiang',result.links[0],num);
}
},
//分离新服和老服的士燮并修复老士燮的bug
lib.skill.biluan={
audio:2,
trigger:{player:'phaseDrawBegin1'},
check:function(event,player){
if(player.countCards('h')>player.hp) return true;
if(player.hasJudge('lebu')) return true;
var ng=[];
var players=game.filterPlayer();
for(var i=0;i<players.length;i++){
if(players[i].group!='unknown'){
ng.add(players[i].group);
}
}
ng=ng.length;
if(ng<2) return false;
var nai=0;
for(var i=0;i<players.length;i++){
if(players[i]!=player){
var dist=get.distance(players[i],player,'attack');
if(dist<=1&&dist+ng>1){
nai++;
}
}
}
return nai>=2;
},
filter:function(event,player){
return !event.numFixed&&game.hasPlayer(function(current){
return current!=player&&get.distance(current,player)<=1;
});
},
content:function(){
if(!player.hasSkill('biluan2')) player.addSkill('biluan2');
var ng=[];
var players=game.filterPlayer();
for(var i=0;i<players.length;i++){
if(players[i].group!='unknown'){
ng.add(players[i].group);
}
}
player.$damagepop(ng.length,'unknownx');
player.storage.biluan2+=ng.length;
player.markSkill('biluan2');
game.addVideo('storage',player,['biluan',player.storage.biluan2]);
trigger.changeToZero();
},
},
lib.skill.biluan2={
mark:true,
charlotte:true,
intro:{
content:function(storage){
if(storage>0){
return '其他角色计算与你的距离时+'+storage;
}
else if(storage<0){
return '其他角色计算与你的距离时'+storage;
}
else{
return '无距离变化';
}
}
},
init:function(player){
if(typeof player.storage.biluan2!='number') player.storage.biluan2=0;
},
mod:{
globalTo:function(from,to,distance){
if(typeof to.storage.biluan2=='number'){
return distance+to.storage.biluan2;
}
}
}
},
lib.skill.lixia={
audio:2,
trigger:{global:'phaseJieshuBegin'},
filter:function(event,player){
return event.player.isAlive()&&event.player!=player&&get.distance(event.player,player,'attack')>1;
},
forced:true,
content:function(){
'step 0'
player.chooseTarget(function(card,player,target){
return target==player||target==_status.event.source;
},true,'礼下：选择一个目标摸一张牌').set('ai',function(target){
if(get.attitude(player,trigger.player)>2) return 114514-target.countCards();
return player==target?1:0;
}).set('source',trigger.player);
'step 1'
if(result.targets.length){
result.targets[0].draw();
player.line(result.targets[0],'green');
}
if(!player.hasSkill('biluan2')) player.addSkill('biluan2');
player.storage.biluan2--;
player.markSkill('biluan2');
game.addVideo('storage',player,['biluan',player.storage.biluan2]);
}
},
lib.skill.ollixia={
audio:'lixia',
trigger:{global:'phaseJieshuBegin'},
filter:function(event,player){
return event.player.isAlive()&&event.player!=player&&!player.inRangeOf(event.player);
},
forced:true,
content:function(){
'step 0'
if(trigger.player.isDead()){
event._result={bool:true,links:[0]};
return;
}
event.videoId=lib.status.videoId++;
var func=function(card,id,bool){
var list=[
'令自己摸一张牌',
'令XXX摸两张牌',
'令XXX回复1点体力',
];
var choiceList=ui.create.dialog('礼下：请选择一至两项','forcebutton');
choiceList.videoId=id;
for(var i=0;i<list.length;i++){
list[i]=list[i].replace(/XXX/g,card);
var str='<div class="popup text" style="width:calc(100% - 10px);display:inline-block">';
if(i==2&&!bool) str+='<div style="opacity:0.5">';
str+=list[i];
if(i==2&&!bool) str+='</div>';
str+='</div>';
var next=choiceList.add(str);
next.firstChild.addEventListener(lib.config.touchscreen?'touchend':'click',ui.click.button);
next.firstChild.link=i;
for(var j in lib.element.button){
next[j]=lib.element.button[j];
}
choiceList.buttons.add(next.firstChild);
}
return choiceList;
};
if(player.isOnline2()){
player.send(func,get.translation(trigger.player),event.videoId,trigger.player.isDamaged());
}
event.dialog=func(get.translation(trigger.player),event.videoId,trigger.player.isDamaged());
if(player!=game.me||_status.auto){
event.dialog.style.display='none';
}
var next=player.chooseButton(true,[1,2]);
next.set('dialog',event.videoId);
next.set('filterButton',function(button){
if(button.link==2){
return _status.event.bool1;
};
return true;
});
next.set('bool1',trigger.player.isDamaged());
next.set('ai',function(button){
var player=_status.event.player;
var event=_status.event.getTrigger();
if(button.link&&get.attitude(player,event.player)<=0) return 0;
return button.link*Math.random();
});
"step 1"
if(event.videoId!=undefined){
if(player.isOnline2()){
player.send('closeDialog',event.videoId);
}
event.dialog.close();
}
var map=[
function(trigger,player,event){
player.draw();
},
function(trigger,player,event){
if(!result.links.contains(2)) player.line(trigger.player);
trigger.player.draw(2);
},
function(trigger,player,event){
player.line(trigger.player);
trigger.player.recover();
}
];
result.links.sort();
for(var i=0;i<result.links.length;i++){
game.log(player,'选择了','#g【礼下】','的','#y选项'+get.cnNumber(result.links[i]+1,true));
map[result.links[i]](trigger,player,event);
}
player.addSkill('olbiluan2');
player.storage.olbiluan2-=result.links.length;
player.markSkill('olbiluan2');
game.addVideo('storage',player,['olbiluan2',player.storage.olbiluan2]);
}
},
lib.skill.relixia={
audio:'lixia',
trigger:{global:'phaseJieshuBegin'},
filter:function(event,player){
return event.player.isAlive()&&event.player!=player&&get.distance(event.player,player,'attack')>1;
},
forced:true,
content:function(){
'step 0'
player.chooseTarget(function(card,player,target){
return target==player||target==_status.event.source;
},true,'礼下：请选择一个目标令其摸牌并减少你与其他角色的距离').set('ai',function(target){
return player==target?1:0;
}).set('source',trigger.player);
'step 1'
if(result.targets.length){
var num=(result.targets[0]==player?1:2);
result.targets[0].draw(num);
player.line(result.targets[0],'green');
}
if(!player.hasSkill('rebiluan2')) player.addSkill('rebiluan2');
player.storage.rebiluan2--;
player.markSkill('rebiluan2');
game.addVideo('storage',player,['rebiluan2',player.storage.rebiluan]);
}
},
//交换判定牌函数
lib.element.player.swapJudge=function(target){
var next=game.createEvent('swapJudge');
next.player=this;
next.target=target;
next.setContent('swapJudge');
return next;
};
lib.element.content.swapJudge=function(){
"step 0"
game.log(player,'和',target,'交换了判定区中的牌')
var j1=player.getCards('j');
if(target.storage._disableJudge){
if(j1)player.discard(j1);
}
var j2=target.getCards('j');
if(player.storage._disableJudge){
if(j2)target.discard(j2);
}
"step 1"
event.cards=[player.getCards('j'),target.getCards('j')];
player.lose(event.cards[0],ui.ordering,'visible');
target.lose(event.cards[1],ui.ordering,'visible');
if(event.cards[0].length) player.$give(event.cards[0],target);
if(event.cards[1].length) target.$give(event.cards[1],player);
"step 2"
for(var i=0;i<event.cards[1].length;i++){
if(event.cards[1][i].viewAs)player.addJudge({name:event.cards[1][i].viewAs},[event.cards[1][i]]);
else player.addJudge(event.cards[1][i]);
}
for(var i=0;i<event.cards[0].length;i++){
if(event.cards[0][i].viewAs)target.addJudge({name:event.cards[0][i].viewAs},[event.cards[0][i]]);
else target.addJudge(event.cards[0][i]);
}
};
//快速获得所选角色区域内的牌
lib.element.player.ReGainMultiple=function(targets){
var next=game.createEvent('ReGainMultiple');
next.player=this;
next.targets=targets;
next.setContent('ReGainMultiple');
return next;
};
lib.element.content.ReGainMultiple=function(){
'step 0'
event.delayed=false;
event.num=0;
event.cards=[];
'step 1'
player.gainPlayerCard(targets[num],'hej',true).set('boolline',false).set('delay',num==targets.length-1);
'step 2'
if(result.bool){
event.cards.addArray(result.cards);
if(num==targets.length-1) event.delayed=true;
}
event.num++;
if(event.num<targets.length){
event.goto(1);
}
'step 3'
if(!event.delayed) game.delay();
};
//添加生肖势力
//lib.group.push('cxyXiao');
lib.translate.cxyXiao='<span class=\"texiaotext\" style=\"color:#FF0000\">肖</span>';
//阵亡配音
lib.skill._die={
trigger:{global:'dieBegin'},
firstDo:true,
forced:true,
unique:true,
content:function(){
if(lib.config.extension_活动武将_AudioPlay) game.playAudio('..','extension','活动武将',trigger.player.name);
},
},
//困难年兽体力上限和体力值为所有其他角色的体力上限和
lib.skill._YJplusmaxHp={
trigger:{
global:'gameStart'
},
priority:114514,//恶臭(划掉)
silent:true,
forced:true,
unique:true,
filter:function(event,player){
return player.name=='NS_nianshouD'||player.name1=='NS_nianshouD'||player.name2=='NS_nianshouD';
},
content:function(){
for(var i=0;i<game.players.length;i++){
if(game.players[i]==player) continue;
player.maxHp+=game.players[i].maxHp;
}
player.hp=player.maxHp;
player.update();
},
},
//十周年淳于琼[仓储]、[粮营]技能，OL淳于琼[宿守]技能优化
lib.skill.recangchu={
group:['recangchu2','recangchu3'],
audio:2,
trigger:{global:'phaseBefore',player:'enterGame'},
marktext:'粮',
forced:true,
filter:function(event,player){
if(event.name=='phase'&&game.phaseNumber!=0) return false;
return player.countMark('recangchu')<game.countPlayer();
},
content:function(){
player.addMark('recangchu',Math.min(3,game.countPlayer()-player.countMark('recangchu')));
},
intro:{content:'mark',name:'粮'},
mod:{
maxHandcard:function(player,num){
return num+player.countMark('recangchu');
},
},
},
lib.skill.reliangying={
audio:2,
trigger:{player:'phaseDiscardBegin'},
direct:true,
content:function(){
'step 0'
var map={};
var list=[];
for(var i=1;i<=player.countMark('recangchu');i++){
var cn=get.cnNumber(i,true);
map[cn]=i;
list.push(cn);
}
list.push('cancel2');
event.map=map;
player.chooseControl(list).set('prompt',get.prompt('reliangying')).set('prompt2','摸至多'+get.cnNumber(player.countMark('recangchu'))+'张牌，然后交给等量的角色各一张牌').set('ai',function(){
var player=_status.event.player;
var num=Math.min(player.countMark('recangchu'),game.countPlayer(function(current){
return get.attitude(player,current)>0;
}));
if(num>0) return get.cnNumber(num,true);
return 'cancel2';
});
'step 1'
event.list=[];
event.men=[];
if(result.control=='cancel2'){event.finish();return;}
player.logSkill('reliangying');
var num=event.map[result.control]||1;
event.num=num;
player.draw(num);
'step 2'
var num=Math.min(event.num,player.countCards('he'),game.countPlayer(function(target){
return target!=player;
}));
if(num-event.men.length>1){
player.chooseCardTarget({
prompt:'【粮营】：将'+get.cnNumber(num-event.men.length)+'张牌交给其他角色，或者给自己留一张牌并将'+get.cnNumber(num-event.men.length-1)+'张牌交给其他角色',
prompt2:lib.translate.reliangying_info,
selectCard:1,
selectTarget:1,
position:'he',
forced:true,
filterCard:function(card){
for(var i=0;i<event.list.length;i++){
if(event.list[i].card==card) return false;
}
return true;
},
filterTarget:function(card,player,target){
for(var i=0;i<event.list.length;i++){
if(event.list[i].target==target) return false;
}
return target!=player;
},
ai1:function(card){
if(card.name=='shan') return 1;
return Math.random();
},
ai2:function(target){
return get.attitude(player,target);
},
});
}
else if(num-event.men.length==1){
player.chooseCardTarget({
prompt:'【粮营】：你可以将一张牌交给其他角色',
prompt2:lib.translate.reliangying_info,
selectCard:1,
selectTarget:1,
position:'he',
filterCard:function(card){
for(var i=0;i<event.list.length;i++){
if(event.list[i].card==card) return false;
}
return true;
},
filterTarget:function(card,player,target){
for(var i=0;i<event.list.length;i++){
if(event.list[i].target==target) return false;
}
return target!=player;
},
ai1:function(card){
if(card.name=='shan') return 1;
return Math.random();
},
ai2:function(target){
return get.attitude(player,target);
},
});
}
else event.finish();
'step 3'
if(result.bool){
var num=Math.min(event.num,player.countCards('he'),game.countPlayer(function(target){
return target!=player;
}));
var CT={
target:result.targets[0],
card:result.cards[0],
};
player.addGaintag(result.cards,'olsujian_given');
event.list.push(CT);
event.men.push(result.targets[0]);
if(num-event.men.length>=1) event.goto(2);
}
else if(!result.bool&&event.list.length>0){
event.goto(4);
}
else event.finish();
'step 4'
var cards=[];
for(var i=0;i<event.list.length;i++){
cards.push(event.list[i].card);
}
player.lose(cards,ui.special);
'step 5'
event.list.forEach(function(CT){
CT.target.gain(CT.card,player);
player.$give(1,CT.target);
});
'step 6'
game.delay();
},
},
lib.skill.sushou={
audio:2,
trigger:{player:'phaseDiscardBegin'},
frequent:true,
content:function (){
'step 0'
var num=1;
if(player.countMark('cangchu')>0){
num+=player.countMark('cangchu');
}
player.draw(num);
if(game.filterPlayer(function(target){
return target.isFriendOf(player)&&target!=player;
}).length==0) event.finish();
event.list=[];
'step 1'
player.chooseCardTarget({
prompt:'宿守：你可以交给友方角色各一张牌',
prompt2:lib.translate.sushou_info,
selectCard:1,
filterCard:function(card){
for(var i=0;i<event.list.length;i++){
if(event.list[i].card==card) return false;
}
return true;
},
position:'he',
selectTarget:1,
filterTarget:function(card,player,target){
if(!target.isFriendOf(player)||target==player) return false;
for(var i=0;i<event.list.length;i++){
if(event.list[i].target==target) return false;
}
return true;
},
ai1:function(card){
if(card.name=='shan') return 1;
return Math.random();
},
ai2:function(target){
return get.attitude(player,target);
}
});
'step 2'
if(result.bool){
var CT={
target:result.targets[0],
card:result.cards[0],
};
player.addGaintag(result.cards,'olsujian_given');
event.list.push(CT);
if(game.filterPlayer(function(target){
for(var i=0;i<event.list.length;i++){
if(event.list[i].target==target) return false;
}
return target.isFriendOf(player)&&target!=player;
}).length>0) event.goto(1);
}
'step 3'
var cards=[];
for(var i=0;i<event.list.length;i++){
cards.push(event.list[i].card);
}
player.lose(cards,ui.special);
'step 4'
event.list.forEach(function(CT){
CT.target.gain(CT.card,player);
player.$give(1,CT.target);
});
'step 5'
game.delay();
},
},
//修复SP审配[刚直]bug
lib.skill.gangzhi={
audio:2,
trigger:{player:'damageBefore',source:'damageBefore'},
filter:function (event,player){
if(event.player!=player) return true;
if(event.source&&event.source!=player) return true;
return false;
},
forced:true,
firstDo:true,
content:function(){
trigger.cancel();
trigger.player.loseHp(trigger.num);
},
ai:{jueqing:true},
},
lib.translate.gangzhi_info='锁定技，你对其他角色造成的伤害和其他角色对你造成的伤害均视为失去体力。';
//远古武将技能
lib.skill.bilibili_luanji_old={
audio:"luanji",
enable:"phaseUse",
viewAs:{
name:"wanjian",
},
filterCard:function (card,player){
if(!player.storage.bilibili_luanji_old) return true;
return !player.storage.bilibili_luanji_old.contains(get.suit(card));
},
selectCard:2,
check:function (card){
var player=_status.event.player;
var targets=game.filterPlayer(function(current){
return player.canUse('wanjian',current);
});
var num=0;
for(var i=0;i<targets.length;i++){
var eff=get.sgn(get.effect(targets[i],{name:'wanjian'},player,player));
if(targets[i].hp==1){
eff*=1.5;
}
num+=eff;
}
if(!player.needsToDiscard(-1)){
if(targets.length>=7){
if(num<2) return 0;
}
else if(targets.length>=5){
if(num<1.5) return 0;
}
}
return 6-get.value(card);
},
ai:{
basic:{
order:8.9
}
},
group:["bilibili_luanji_old_count","bilibili_luanji_old_reset","bilibili_luanji_old_respond"],
subSkill:{
reset:{
trigger:{
player:"phaseAfter",
},
silent:true,
filter:function (event,player){
return player.storage.bilibili_luanji_old?true:false;
},
content:function (){
delete player.storage.bilibili_luanji_old;
},
sub:true,
forced:true,
popup:false,
},
count:{
trigger:{
player:"useCard",
},
silent:true,
filter:function (event){
return event.skill=='bilibili_luanji_old';
},
content:function (){
if(!player.storage.bilibili_luanji_old){
player.storage.bilibili_luanji_old=[];
}
for(var i=0;i<trigger.cards.length;i++){
player.storage.bilibili_luanji_old.add(get.suit(trigger.cards[i]));
}
},
sub:true,
forced:true,
popup:false,
},
respond:{
trigger:{
global:"respond",
},
silent:true,
filter:function (event){
return event.getParent(2).skill=='bilibili_luanji_old'&&event.player.isDamaged();
},
content:function (){
trigger.player.draw();
},
sub:true,
forced:true,
popup:false,
},
},
},
lib.translate.bilibili_luanji_old='乱击';
lib.translate.bilibili_luanji_old_info='你可以将两张与你本回合以此法转化的花色均不相同的手牌当【万箭齐发】使用，当一名已受伤的角色因响应此牌而打出【闪】时，该角色摸一张牌。';
lib.skill.bilibili_oldshibei={
audio:'shibei',
trigger:{player:'damageEnd'},
forced:true,
content:function(){
'step 0'
player.judge(function(card){
if(player.getHistory('damage',function(evt){
return evt!=trigger
}).length>0){
if(get.color(card)=='black') return -1;
}
else{
if(get.color(card)=='red') return 1;
}
return 0;
})
'step 1'
if(result.judge>0){
player.recover();
}
else if(result.judge<0){
player.loseHp();
}
},
},
lib.translate.bilibili_oldshibei='矢北';
lib.translate.bilibili_oldshibei_info='锁定技，当你受到伤害后，你进行一次判定，若此伤害为本回合第一次受到的伤害且判定结果为红色，你回复一点体力；若此伤害不为本回合第一次受到的伤害且判定结果为黑色，你失去一点体力。';
lib.skill.bilibili_wuhun={
audio:'wuhun',
trigger:{player:'die'},
forced:true,
forceDie:true,
skillAnimation:true,
animationColor:'fire',
filter:function(event){
return event.source&&event.source.isIn();
},
logTarget:'source',
content:function(){
var num=trigger.source.hp;
trigger.source.loseHp(num);
},
},
lib.skill.tieba_wuhun={
audio:'wuhun',
trigger:{player:'die'},
forced:true,
forceDie:true,
skillAnimation:true,
animationColor:'fire',
filter:function(event){
return event.source&&event.source.isIn();
},
logTarget:'source',
content:function(){
trigger.source.goMad();
},
},
lib.translate.bilibili_wuhun='武魂';
lib.translate.bilibili_wuhun_info='锁定技，杀死你的角色立即进入濒死状态。';
lib.translate.tieba_wuhun='武魂';
lib.translate.tieba_wuhun_info='锁定技，杀死你的角色进入混乱状态直至游戏结束。';
lib.skill.bilibili_wushen={
mod:{
cardname:function(card,player,name){
if(get.suit(card)=='heart') return 'sha';
},
cardnature:function(card,player){
if(get.suit(card)=='heart') return false;
},
targetInRange:function(card){
if(get.suit(card)=='heart') return true;
},
},
audio:'wushen',
trigger:{player:'useCard'},
forced:true,
filter:function(event,player){
return event.card.name=='sha'&&get.suit(event.card)=='heart';
},
content:function(){
},
},
lib.skill.bilibili_huoxin={
trigger:{global:'phaseBeginStart'},
filter:function(event,player){
return player!=event.player&&!event.player._trueMe;
},
check:function(event,player){
return get.attitude(player,event.player)<0;
},
logTarget:'player',
skillAnimation:true,
animationColor:'key',
content:function(){
trigger.player._trueMe=player;
game.addGlobalSkill('autoswap');
if(trigger.player==game.me){
game.notMe=true;
if(!_status.auto) ui.click.auto();
}
trigger.player.addSkill('bilibili_huoxin2');
},
},
lib.skill.bilibili_huoxin2={
trigger:{
player:['phaseAfter','dieAfter'],
global:'phaseBefore',
},
lastDo:true,
charlotte:true,
forceDie:true,
forced:true,
silent:true,
content:function(){
player.removeSkill('bilibili_huoxin2');
},
onremove:function(player){
if(player==game.me){
if(!game.notMe) game.swapPlayerAuto(player._trueMe)
else delete game.notMe;
if(_status.auto) ui.click.auto();
}
delete player._trueMe;
},
},
lib.skill.baiyi={
enable:'phaseUse',
unique:true,
init:function(player){
player.storage.baiyi=false;
},
filterTarget:lib.filter.notMe,
selectTarget:2,
limited:true,
skillAnimation:true,
animationColor:'thunder',
filter:function(event,player){
return player.isDamaged()&&game.players.length>2;
},
multitarget:true,
multiline:true,
changeSeat:true,
contentBefore:function(){
game.delay(0.5);
},
content:function(){
player.awakenSkill('baiyi');
player.storage.baiyi=true;
game.broadcastAll(function(target1,target2){
game.swapSeat(target1,target2);
},targets[0],targets[1])
},
ai:{
order:1,
result:{
target:function(player,target){
if(player.hasUnknown()&&target!=player.next&&target!=player.previous) return 0;
var distance=Math.pow(get.distance(player,target,'absolute'),2);
if(!ui.selected.targets.length) return distance;
var distance2=Math.pow(get.distance(player,ui.selected.targets[0],'absolute'),2);
return Math.min(0,distance-distance2);
}
},
},
},
lib.skill.oldqingxian={
audio:'qingxian',
group:['oldqingxian_jilie','oldqingxian_rouhe','oldqingxian_dying'],
ai:{
threaten:0.8,
maixie:true,
maixie_hp:true,
maixie_defend:true,
effect:{
target:function(card,player,target){
if(get.tag(card,'damage')){
if(target.hp>1&&target.hasFriend()) return 0.4;
}
}
}
},
subSkill:{
dying:{
audio:'oldqingxian',
trigger:{global:'dyingAfter'},
filter:function(event,player){
return player.storage.oldqingxian&&player.storage.oldqingxian>0&&!_status.dying.length;
},
direct:true,
content:function(){
'step 0'
player.storage.oldqingxian--;
player.chooseTarget(get.prompt('oldqingxian'),function(card,player,target){
return target!=player;
}).set('ai',function(target){
var att=get.attitude(_status.event.player,target);
if(target.isHealthy()&&att>0) return 0;
if(target.hp==1&&att!=0){
if(att>0) return 9;
else return 10;
}
else{
return Math.sqrt(Math.abs(att));
}
}).set('prompt2','当你回复体力后，你可以令一名其他角色执行一项：失去1点体力，随机使用一张装备牌；回复1点体力，弃置一张装备牌。若其以此法使用或弃置的牌为梅花，你回复1点体力');
'step 1'
if(result.bool){
var target=result.targets[0];
player.logSkill('oldqingxian',target);
event.insert(lib.skill.oldqingxian.content_choose,{target:target,player:player});
}
'step 2'
if(lib.skill.oldqingxian_dying.filter(trigger,player)) event.goto(0);
}
},
rouhe:{
audio:'oldqingxian',
trigger:{player:'recoverEnd'},
direct:true,
content:function(){
'step 0'
if(_status.dying.length){
if(!player.storage.oldqingxian) player.storage.oldqingxian=0;
player.storage.oldqingxian++;
event.finish();
return;
}
player.chooseTarget(get.prompt('oldqingxian'),function(card,player,target){
return target!=player;
}).set('ai',function(target){
var att=get.attitude(_status.event.player,target);
if(target.isHealthy()&&att>0) return 0;
if(target.hp==1&&att!=0){
if(att>0) return 9;
else return 10;
}
else{
return Math.sqrt(Math.abs(att));
}
}).set('prompt2','当你回复体力后，你可以令一名其他角色执行一项：失去1点体力，随机使用一张装备牌；回复1点体力，弃置一张装备牌。若其以此法使用或弃置的牌为梅花，你回复1点体力');
'step 1'
if(result.bool){
var target=result.targets[0];
player.logSkill('oldqingxian',target);
event.insert(lib.skill.oldqingxian.content_choose,{target:target,player:player});
}
}
},
jilie:{
audio:'oldqingxian',
trigger:{player:'damageEnd'},
filter:function(event,player){
return event.source&&event.source.isIn();
},
check:function(event,player){
if(get.attitude(player,event.source)>0&&event.source.isHealthy()){
return false;
}
return true;
},
logTarget:'source',
prompt2:'当你受到伤害后，你可以令伤害来源执行一项：失去1点体力，随机使用一张装备牌；回复1点体力，弃置一张装备牌。若其以此法使用或弃置的牌为梅花，你回复1点体力',
content:function(){
event.insert(lib.skill.oldqingxian.content_choose,{target:trigger.source,player:player});
}
}
},
content_choose:function(){
'step 0'
if(target.isHealthy()){
event._result={index:0}
}
else{
var index;
if(get.attitude(player,target)>0){
index=1;
}
else{
index=0;
}
player.chooseControlList(
['令'+get.translation(target)+'失去1点体力，随机使用一张装备牌',
'令'+get.translation(target)+'回复1点体力，弃置一张装备牌'],
true,function(event,player){
return _status.event.index;
}).set('index',index);
}
'step 1'
if(result.index==0){
target.loseHp();
event.card=get.cardPile(function(card){
return get.type(card)=='equip'&&!target.isDisabled(get.subtype(card));
});
if(event.card){
target.chooseUseTarget(event.card,'nothrow','nopopup',true);
event.goto(3);
}
else{
event.finish();
}
}
else{
target.recover();
if(target.countCards('he',{type:'equip'})){
target.chooseToDiscard('he',true,'弃置一张装备牌',function(card){
return get.type(card)=='equip';
}).set('ai',function(card){
var val=-get.value(card);
if(get.suit(card)=='club'){
val+=_status.event.att*10;
}
return val;
}).set('att',get.sgnAttitude(target,player));
}
else{
event.finish();
}
}
'step 2'
if(result&&result.cards){
event.card=result.cards[0];
}
'step 3'
if(event.card&&get.suit(event.card)=='club'){
player.recover();
}
}
},
lib.skill.kuizhu={
audio:'nzry_kuizhu',
trigger:{player:'phaseDiscardAfter'},
direct:true,
filter:function(event,player){
var cards=[];
player.getHistory('lose',function(evt){
if(evt.type=='discard'&&evt.getParent('phaseDiscard')==event) cards.addArray(evt.cards2);
});
return cards.length>0;
},
content:function(){
'step 0'
var cards=[];
player.getHistory('lose',function(evt){
if(evt.type=='discard'&&evt.getParent('phaseDiscard')==trigger) cards.addArray(evt.cards2);
});
event.num=cards.length;
event.str1='令至多'+event.num+'名角色摸一张牌';
event.str2='对任意名体力值之和为'+event.num+'的角色造成一点伤害';
player.chooseControl('cancel2').set('ai',function(){
if(game.countPlayer(function(current){return get.attitude(player,current)<0&&current.hp==event.num})>0&&event.num<=3) return 1;
return 0;
}).set('choiceList',[event.str1,event.str2]).set('prompt','是否发动【溃诛】？');
'step 1'
if(result.control=='cancel2') event.finish();
event.control=[event.str1,event.str2][result.index];
'step 2'
var str='请选择〖溃诛〗的目标';
if(event.bool==false) str='<br>所选目标体力之和不足'+event.num+'，请重选';
if(event.control==event.str2){
player.chooseTarget(str,function(card,player,target){
var targets=ui.selected.targets;
var num=0;
for(var i=0;i<targets.length;i++){
num+=targets[i].hp;
};
return num+target.hp<=_status.event.num;
}).set('ai',function(target){
if(ui.selected.targets[0]!=undefined) return -1;
return get.attitude(player,target)<0;
}).set('promptbar','none').set('num',event.num).set('selectTarget',function(){
var targets=ui.selected.targets;
var num=0;
for(var i=0;i<targets.length;i++){
num+=targets[i].hp;
}
if(num==_status.event.num) return ui.selected.targets.length;
return ui.selected.targets.length+1;
});
}
else{
player.chooseTarget('请选择〖溃诛〗的目标',[1,event.num]).ai=function(target){
return get.attitude(player,target);
};
};
'step 3'
if(result.bool){
var targets=result.targets.sortBySeat();
if(event.control==event.str1){
player.logSkill('kuizhu',targets);
game.asyncDraw(targets);
}
else{
var num=0;
for(var i=0;i<targets.length;i++){
num+=targets[i].hp;
};
if(num<event.num){
event.bool=false;
event.goto(2);
}
else{
player.logSkill('kuizhu',targets);
for(var i=0;i<targets.length;i++){
targets[i].damage();
};
if(targets.length>=2) player.loseHp();
};
};
};
},
},
lib.skill.zhizheng={
audio:'nzry_zhizheng',
mod:{
playerEnabled:function(card,player,target){
var info=get.info(card);
if(target!=player&&(!info||!info.singleCard||!ui.selected.targets.length)&&player.isPhaseUsing()&&!target.inRange(player)) return false;
},
},
trigger:{player:'phaseUseEnd'},
forced:true,
filter:function(event,player){
return (player.getHistory('useCard',function(evt){
return evt.getParent('phaseUse')==event;
}).length<game.countPlayer(function(current){return current!=player&&!current.inRange(player)}))&&game.hasPlayer(function(target){
return target!=player&&!target.inRange(player)&&target.countDiscardableCards(player,'he');
});
},
content:function(){
'step 0'
player.chooseTarget('请选择〖掣政〗的目标','弃置一名攻击范围内不包含你的角色的一张牌',true,function(card,player,target){
return target!=player&&!target.inRange(player)&&target.countDiscardableCards(player,'he');
}).ai=function(target){
return -get.attitude(player,target);
};
'step 1'
if(result.bool){
player.line(result.targets);
player.discardPlayerCard(result.targets[0],'he',1,true);
};
},
},
lib.skill.lijun={
unique:true,
global:'lijun1',
audio:'nzry_lijun1',
zhuSkill:true,
},
lib.skill.lijun1={
audio:'nzry_lijun1',
trigger:{
player:'useCardAfter'
},
filter:function(event,player){
if(event.card.name!='sha') return false;
if(player.group!='wu') return false;
if(_status.currentPhase!=player) return false;
if(!game.hasPlayer(function(target){
return player!=target&&target.hasZhuSkill('lijun',player);
})) return false;
for(var i=0;i<event.cards.length;i++){
if(get.position(event.cards[i],true)=='o'){
return true;
}
}
return false;
},
direct:true,
content:function(){
'step 0'
var list=game.filterPlayer(function(target){
return player!=target&&target.hasZhuSkill('lijun',player);
});
player.chooseTarget(get.prompt('lijun'),'将'+get.translation(trigger.cards)+'交给'+get.translation(list)+(list.length>1?'中的一人':''),function(card,player,target){
return player!=target&&target.hasZhuSkill('lijun',player);
}).ai=function(target){
return get.attitude(_status.event.player,target);
};
'step 1'
if(!result.bool) event.finish();
else{
var zhu=result.targets[0];
player.line(zhu,'green');
zhu.logSkill('lijun');
var list=[];
for(var i=0;i<trigger.cards.length;i++){
if(get.position(trigger.cards[i],true)=='o'){
list.push(trigger.cards[i]);
}
}
player.give(list,zhu);
zhu.chooseBool().set('ai',function(){
if(get.attitude(zhu,player)>0) return true;
return false;
}).set('prompt','是否令'+get.translation(player)+'摸一张牌？');
}
'step 2'
if(result.bool) player.draw();
},
},
lib.skill.olbiluan={
audio:'biluan',
trigger:{player:'phaseJieshuBegin'},
checkx:function(player){
var ng=Math.min(4,game.countPlayer());
var nai=0;
for(var i=0;i<game.players.length;i++){
if(game.players[i]!=player){
var dist=get.distance(game.players[i],player,'attack');
if(dist<=1&&dist+ng>1){
nai++;
}
}
}
return nai>=2;
},
filter:function(event,player){
return player.countCards('he')&&game.hasPlayer(function(current){
return current!=player&&get.distance(current,player)<=1;
});
},
direct:true,
content:function(){
"step 0"
player.chooseToDiscard('he',get.prompt2('olbiluan')).set('logSkill','olbiluan').set('check',lib.skill.olbiluan.checkx(player)).set('ai',function(card){
if(_status.event.check) return 6-get.value(card);
return 0;
});
"step 1"
if(result.bool){
player.addSkill('olbiluan2');
var num=game.countGroup();
player.$damagepop(num,'unknownx');
player.storage.olbiluan2+=num;
player.markSkill('olbiluan2');
game.addVideo('storage',player,['olbiluan2',player.storage.olbiluan2]);
}
},
},
lib.skill.olbiluan2={
mark:true,
charlotte:true,
intro:{
content:function(storage){
if(storage>0){
return '其他角色计算与你的距离时+'+storage;
}
else if(storage<0){
return '其他角色计算与你的距离时'+storage;
}
else{
return '无距离变化';
}
}
},
init:function(player){
if(typeof player.storage.olbiluan2!='number') player.storage.olbiluan2=0;
},
mod:{
globalTo:function(from,to,distance){
if(typeof to.storage.olbiluan2=='number'){
return distance+to.storage.olbiluan2;
}
}
}
},
//神之辛毗
lib.skill.old_spyinju={
audio:'spyinju',
enable:'phaseUse',
usable:1,
filterTarget:lib.filter.notMe,
content:function(){
'step 0'
target.chooseToUse(function(card,player,event){
if(get.name(card)!='sha') return false;
return lib.filter.filterCard.apply(this,arguments);
},'引裾：对'+get.translation(player)+'使用一张【杀】，或跳过下回合的出牌阶段和弃牌阶段').set('targetRequired',true).set('complexSelect',true).set('filterTarget',function(card,player,target){
if(target!=_status.event.sourcex&&!ui.selected.targets.contains(_status.event.sourcex)) return false;
return lib.filter.filterTarget.apply(this,arguments);
}).set('sourcex',player);
'step 1'
if(!result.bool) target.addSkill('spyinju2');
},
ai:{
order:1,
expose:0.2,
result:{
target:-1.5,
player:function(player,target){
if(!target.canUse('sha',player)) return 0;
if(target.countCards('h')==0) return 0;
if(target.countCards('h')==1) return -0.1;
if(player.countCards('h','shan')==0) return -1;
if(player.hp<2) return -2;
return -0.5;
}
},
threaten:1.1
}
},
//花鬘
lib.skill.old_mansi={
audio:'mansi',
trigger:{global:'useCardAfter'},
filter:function(event,player){
return event.card.name=='nanman'&&game.countPlayer2(function(current){
return current.getHistory('damage',function(evt){
return evt.getParent(2)==event;
}).length>0;
})>0;
},
frequent:true,
content:function(){
 var num=game.countPlayer2(function(current){
return current.getHistory('damage',function(evt){
return evt.getParent(2)==trigger;
}).length>0;
});
 player.draw(num);
 player.addMark('old_mansi',num,false);
},
intro:{content:'已因此技能获得了#张牌'},
},
lib.skill.old_souying={
audio:'souying',
trigger:{
player:'damageBegin3',
source:'damageBegin1',
},
direct:true,
filter:function(event,player,name){
if(!player.countCards('h')||player.hasSkill('old_souying2')) return false;
if(name=='damageBegin1'){
if(event.player.sex!='male') return false;
return event.player.getHistory('damage',function(evt){
return evt.source==player;
}).length==1;
}
else{
if(!event.source||event.source.sex!='male') return false;
return player.getHistory('damage',function(evt){
return evt.source==event.source;
}).length==1;
}
},
content:function(){
'step 0'
var next=player.chooseToDiscard();
if(event.triggername=='damageBegin1'){
event.target=trigger.player;
next.set('goon',get.attitude(player,event.target)<0&&!event.target.hasSkillTag('filterDamage',null,{
player:player,
card:trigger.card,
})),
next.set('prompt2','弃置一张手牌，令对其造成的伤害+1');
}
else{
event.target=trigger.source;
next.set('goon',true);
next.set('prompt2','弃置一张手牌，令即将受到的伤害-1');
}
next.set('prompt',get.prompt('old_souying',event.target));
next.set('ai',function(card){
if(_status.event.goon) return 6-get.value(card);
return -1;
});
next.set('logSkill',['old_souying',event.target]);
'step 1'
if(result.bool){
player.addTempSkill('old_souying2');
trigger.num+=(event.triggername=='damageBegin1'?1:-1);
}
},
},
lib.skill.old_souying2={},
lib.skill.old_zhanyuan={
unique:true,
audio:'zhanyuan',
derivation:'old_xili',
skillAnimation:true,
animationColor:'soil',
juexingji:true,
forced:true,
filter:function(event,player){
return player.countMark('old_mansi')>7;
},
trigger:{player:'phaseZhunbeiBegin'},
content:function(){
'step 0'
player.awakenSkill('old_zhanyuan');
player.gainMaxHp();
'step 1'
player.chooseTarget('是否失去〖蛮嗣〗，令一名其他男性角色和自己一同获得技能〖系力〗？',function(card,player,target){
return target!=player&&target.sex=='male';
}).ai=function(target){
return 5-get.attitude(_status.event.player,target);
};
'step 2'
if(result.bool){
var target=result.targets[0];
player.line(target,'fire');
player.addSkill('old_xili');
target.addSkill('old_xili');
player.removeSkill('old_mansi');
}
},
},
lib.skill.old_xili={
trigger:{global:'useCardToPlayered'},
direct:true,
audio:'hmxili',
filter:function(event,player){
return event.player!=player&&event.card.name=='sha'&&event.player.isPhaseUsing()&&event.player.hasSkill('old_xili')&&player.countCards('h')>0;
},
content:function(){
'step 0'
player.chooseToDiscard('是否弃置一张手牌，令'+get.translation(trigger.card)+'对'+get.translation(trigger.target)+'的伤害+1？','h').set('logSkill',['old_xili',trigger.target]).set('goon',function(){
var target=trigger.target;
if(get.attitude(player,target)>=0) return false;
if(trigger.target.hasSkillTag('filterDamage',null,{
player:trigger.player,
card:trigger.card,
})||target.mayHaveShan()) return false;
return true;
}()).ai=function(card){
if(_status.event.goon) return 5-get.value(card);
return -1;
};
'step 1'
if(result.bool){
var id=trigger.target.playerid;
var map=trigger.customArgs;
if(!map[id]) map[id]={};
if(!map[id].extraDamage) map[id].extraDamage=0;
map[id].extraDamage++;
}
},
},
//蒲元
lib.skill.old_tianjiang={
audio:'pytianjiang',
trigger:{global:'phaseBefore',player:'enterGame'},
forced:true,
popup:false,
filter:function(event,player){
return (event.name!='phase'||game.phaseNumber==0);
},
content:function(){
'step 0'
var i=0;
var list=[];
while(i++<2){
var card=get.cardPile(function(card){
if(get.type(card)!='equip') return false;
return list.length==0||get.subtype(card)!=get.subtype(list[0]);
});
if(card) list.push(card);
}
if(!list.length){event.finish();return;}
event.list=list;
player.gain(event.list,'gain2');
'step 1'
game.delay(1);
var card=event.list.shift();
if(player.getCards('h').contains(card)){
player.$give(card,player,false)
player.equip(card);
}
if(event.list.length) event.redo();
},
group:'old_tianjiang_move',
},
lib.skill.old_tianjiang_move={
audio:'pytianjiang',
prompt:'将装备区里的一张牌移动至其他角色的装备区',
enable:'phaseUse',
position:'e',
filter:function(event,player){
return player.countCards('e')>0;
},
check:function(){return 1},
filterCard:true,
filterTarget:function(event,player,target){
return target!=player&&!target.isDisabled(get.subtype(ui.selected.cards[0]));
},
prepare:'give',
discard:false,
lose:false,
content:function(){
target.equip(cards[0]);
},
ai:{
order:11,
result:{
target:function(player,target){
if(ui.selected.cards.length){
var card=ui.selected.cards[0];
if(target.getEquip(card)||target.countCards('h',{subtype:get.subtype(card)})) return 0;
return get.effect(target,card,player,target);
}
return 0;
},
},
},
},
lib.skill.old_zhuren={
derivation:['old_zhuren_heart','old_zhuren_diamond','old_zhuren_spade','old_zhuren_club','old_zhuren_shandian'],
audio:'pyzhuren',
enable:'phaseUse',
usable:1,
filterCard:true,
selectCard:1,
check:function(card){
var player=_status.event.player;
var name='old_zhuren_'+(card[card.name=='shandian'?'name':'suit']);
if(!lib.card[name]||_status.old_zhuren&&_status.old_zhuren[name]){
if(!player.countCards('h','sha')) return 4-get.value(card);
return 0;
}
return 2+card.number/2-get.value(card);
},
content:function(){
if(!_status.old_zhuren) _status.old_zhuren={};
var rand=get.number(cards[0])/13;
if(get.isLuckyStar()) rand=1;
var name='old_zhuren_'+(cards[0][cards[0].name=='shandian'?'name':'suit']);
if(!lib.card[name]||_status.old_zhuren[name]||Math.random()>rand){
player.popup('杯具');
game.log(player,'锻造失败');
var card=get.cardPile(function(card){
return card.name=='sha';
});
if(card) player.gain(card,'gain2');
}
else{
_status.old_zhuren[name]=true;
player.gain(game.createCard(name,cards[0].name=='shandian'?'spade':cards[0].suit,1),'gain2')
}
},
ai:{
order:10,
result:{
player:1,
},
},
group:'old_zhuren_destroy',
},
lib.skill.old_zhuren_destroy={
trigger:{global:['loseAfter','cardsDiscardAfter']},
forced:true,
filter:function(event,player){
var cs=event.cards;
for(var i=0;i<cs.length;i++){
if(cs[i].name.indexOf('old_zhuren_')==0&&get.position(cs[i],true)=='d') return true;
}
return false;
},
forceDie:true,
content:function(){
if(!_status.old_zhuren) _status.old_zhuren={};
var list=[];
var cs=trigger.cards;
for(var i=0;i<cs.length;i++){
if(cs[i].name.indexOf('old_zhuren_')==0&&get.position(cs[i],true)=='d'){
_status.old_zhuren[cs[i].name]=false;
list.push(cs[i]);
}
}
game.log(list,'已被移出游戏');
//game.log('Key公式你可长点心吧 要不然把你也移出游戏');
game.cardsGotoSpecial(list);
},
},
lib.skill.old_zhuren_heart={
audio:'pyzhuren_heart',
trigger:{source:'damageSource'},
usable:1,
filter:function(event,player){
return event.getParent().name=='sha';
},
check:function(event,player){
return player.isDamaged();
},
content:function(){
'step 0'
player.judge(function(card){
return get.color(card)=='red'?1:-1;
});
'step 1'
if(result.bool) player.recover();
},
},
lib.skill.old_zhuren_diamond={
audio:'pyzhuren_diamond',
trigger:{source:'damageBegin1'},
direct:true,
filter:function(event,player){
if(event.getParent().name!='sha') return false;
if(_status.connectMode) return player.countCards('h')>0;
return player.countCards('h',this.filterCard)>0;
},
filterCard:function(card){
return get.name(card)=='sha'||get.subtype(card)=='equip1';
},
content:function(){
'step 0'
var next=player.chooseToDiscard('h',lib.skill.old_zhuren_diamond.filterCard,get.prompt(event.name,trigger.player),'弃置一张【杀】或武器牌，令即将对其造成的伤害+1');
next.ai=function(card){
if(_status.event.goon) return 6-get.value(card);
return -1;
};
next.set('goon',get.attitude(player,trigger.player)<0&&!trigger.player.hasSkillTag('filterDamage',null,{
player:player,
card:trigger.card,
}));
next.logSkill=[event.name,trigger.player];
'step 1'
if(result.bool) trigger.num++;
},
},
lib.skill.old_zhuren_club={
audio:'pyzhuren_club',
trigger:{player:'useCard2'},
direct:true,
filter:function(event,player){
if(player.countUsed(null,true)>1) return false;
if(event.card.name!='sha'&&get.type(event.card)!='trick') return false;
var info=get.info(event.card);
if(info.allowMultiple==false) return false;
if(event.targets&&!info.multitarget){
if(game.hasPlayer(function(current){
return lib.filter.targetEnabled2(event.card,player,current)&&!event.targets.contains(current);
})){
return true;
}
}
return false;
},
content:function(){
'step 0'
var prompt2='为'+get.translation(trigger.card)+'额外指定一个目标';
player.chooseTarget([1,player.storage.fumian_red],get.prompt(event.name),function(card,player,target){
var player=_status.event.player;
if(_status.event.targets.contains(target)) return false;
return lib.filter.targetEnabled2(_status.event.card,player,target);
}).set('prompt2',prompt2).set('ai',function(target){
var trigger=_status.event.getTrigger();
var player=_status.event.player;
return get.effect(target,trigger.card,player,player);
}).set('targets',trigger.targets).set('card',trigger.card);
'step 1'
if(result.bool){
if(!_status.connectMode&&!event.isMine()) game.delayx();
event.targets=result.targets;
}
else{
event.finish();
}
'step 2'
if(event.targets){
player.logSkill(event.name,event.targets);
trigger.targets.addArray(event.targets);
}
},
},
lib.skill.old_zhuren_spade={
audio:'pyzhuren_spade',
trigger:{player:'useCardToPlayered'},
filter:function(event,player){
return event.card.name=='sha'&&event.targets.length==1&&get.color(event.card)=='black';
},
check:function(event,player){
return get.attitude(player,event.target)<=0;
},
content:function(){
trigger.target.gain(trigger.cards.filterInD(),'gain2','log');
trigger.target.loseHp().set('source',player);
},
ai:{
jueqing:true,
unequip_ai:true,
skillTagFilter:function(player,tag,arg){
if(tag=='unequip_ai'){
if(arg&&arg.name=='sha'&&get.color(arg.card)=='black') return true;
return false;
}
}
},
},
lib.skill.old_zhuren_shandian={
audio:'pyzhuren_shandian',
trigger:{player:'useCardToPlayered'},
filter:function(event,player){
return event.card.name=='sha'&&event.targets.length==1;
},
check:function(event,player){
return get.attitude(player,event.player)<=0;
},
content:function(){
'step 0'
player.judge(function(card){
if(get.suit(card)=='spade'&&card.number>1&&card.number<10) return 10;
return 0;
});
'step 1'
if(result.bool){
trigger.target.damage(3,'thunder');
trigger.getParent().excluded.add(trigger.target);
}
},
},
//阮瑀
lib.skill.miaoxian={
hiddenCard:function(player,name){
return get.type(name)=='trick'&&!player.hasSkill('miaoxian2')&&player.countCards('h',{color:'black'})==1;
},
audio:2,
enable:'chooseToUse',
filter:function(event,player){
if(player.hasSkill('miaoxian2')) return false;
var cards=player.getCards('h',{color:'black'});
if(cards.length!=1) return false;
var mod2=game.checkMod(cards[0],player,'unchanged','cardEnabled2',player);
if(mod2===false) return false;
for(var i of lib.inpile){
if(get.type(i)=='trick'&&event.filterCard({
name:i,
cards:cards,
},player,event)) return true;
}
return false;
},
chooseButton:{
dialog:function(event,player){
var cards=player.getCards('h',{color:'black'});
var list=[];
for(var i of lib.inpile){
if(get.type(i)=='trick'&&event.filterCard({
name:i,
cards:cards,
},player,event)){
list.push(['锦囊','',i]);
}
}
return ui.create.dialog('妙弦',[list,'vcard'],'hidden');
},
check:function(button){
var player=_status.event.player;
return player.getUseValue({name:button.link[2]})+1;
},
backup:function(links,player){
return {
audio:'miaoxian',
popname:true,
filterCard:{color:'black'},
selectCard:-1,
position:'h',
viewAs:{
name:links[0][2],
},
onuse:function(links,player){
player.addTempSkill('miaoxian2');
},
}
},
prompt:function(links,player){
return '将'+get.translation(player.getCards('h',{color:'black'})[0])+'当做'+get.translation(links[0][2])+'使用';
},
},
group:'miaoxian_use',
subfrequent:['use'],
subSkill:{
use:{
audio:'miaoxian',
trigger:{player:'loseAfter'},
frequent:true,
prompt:'是否发动【妙弦】摸一张牌？',
filter:function(event,player){
var evt=event.getParent();
if(evt.name!='useCard') return false;
return event.hs&&event.hs.length==1&&event.cards&&event.cards.length==1
&&get.color(event.hs[0],player)=='red'&&!player.countCards('h',{color:'red'});
},
content:function(){
player.draw();
},
},
backup:{
audio:'miaoxian',
},
},
ai:{
order:12,
result:{
player:1,
},
},
},
lib.skill.old_miaoxian={
hiddenCard:function(player,name){
return get.type(name)=='trick'&&!player.getStorage('old_miaoxian2').contains(name)&&player.countCards('h',{color:'black'})==1;
},
audio:'miaoxian',
enable:'chooseToUse',
filter:function(event,player){
var cards=player.getCards('h',{color:'black'});
if(cards.length!=1) return false;
var mod2=game.checkMod(cards[0],player,'unchanged','cardEnabled2',player);
if(mod2===false) return false;
var storage=player.getStorage('old_miaoxian2');
for(var i of lib.inpile){
if(!storage.contains(i)&&get.type(i)=='trick'&&event.filterCard({
name:i,
cards:cards,
},player,event)) return true;
}
return false;
},
chooseButton:{
dialog:function(event,player){
var cards=player.getCards('h',{color:'black'});
var storage=player.getStorage('old_miaoxian2');
var list=[];
for(var i of lib.inpile){
if(!storage.contains(i)&&get.type(i)=='trick'&&event.filterCard({
name:i,
cards:cards,
},player,event)){
list.push(['锦囊','',i]);
}
}
return ui.create.dialog('妙弦',[list,'vcard'],'hidden');
},
check:function(button){
var player=_status.event.player;
return player.getUseValue({name:button.link[2]})+1;
},
backup:function(links,player){
return {
audio:'miaoxian',
popname:true,
filterCard:{color:'black'},
selectCard:-1,
position:'h',
viewAs:{
name:links[0][2],
},
onuse:function(links,player){
if(!player.storage.old_miaoxian2) player.storage.old_miaoxian2=[];
player.storage.old_miaoxian2.add(links.card.name);
player.addTempSkill('old_miaoxian2');
},
}
},
prompt:function(links,player){
return '将'+get.translation(player.getCards('h',{color:'black'})[0])+'当做'+get.translation(links[0][2])+'使用';
},
},
group:'old_miaoxian_use',
subfrequent:['use'],
subSkill:{
use:{
audio:'miaoxian',
trigger:{player:'loseAfter'},
frequent:true,
prompt:'是否发动【妙弦】摸一张牌？',
filter:function(event,player){
var evt=event.getParent();
if(evt.name!='useCard') return false;
return event.hs&&event.hs.length==1&&event.cards&&event.cards.length==1
&&get.color(event.hs[0],player)=='red'&&!player.countCards('h',{color:'red'});
},
content:function(){
player.draw();
},
},
backup:{
audio:'miaoxian',
},
},
ai:{
order:12,
result:{
player:1,
},
},
},
lib.skill.old_miaoxian2={onremove:true},
//玩游戏
lib.skill.flappybird={
unique:true,
charlotte:true,
nobracket:true,
enable:'phaseUse',
content:function(){
'step 0'
game.log(player,'玩游戏ing');
if(_status.connectMode) event.time=lib.configOL.choose_timeout;
event.videoId=lib.status.videoId++;
if(player.isUnderControl()){
game.swapPlayerAuto(player);
}
var switchToAuto=function(){
game.pause();
game.countChoose();
setTimeout(function(){
_status.imchoosing=false;
event._result={
bool:true,
};
if(event.dialog) event.dialog.close();
if(event.control) event.control.close();
game.resume();
},5000);
};
var createDialog=function(player,id){
if(_status.connectMode) lib.configOL.choose_timeout='30';
if(player==game.me) return;
var str=get.translation(player)+'玩游戏ing...<br>';
ui.create.dialog(str).videoId=id;
};
var chooseButton=function(){
var roundmenu=false;
if(ui.roundmenu&&ui.roundmenu.display!='none'){
roundmenu=true;
ui.roundmenu.style.display='none';
}
var event=_status.event;
event.settleed=false;
event.score=0;
event.dialog=ui.create.dialog('forcebutton','hidden');
event.dialog.textPrompt=event.dialog.add('<div class="text center">准备好了吗？准备好了的话就点击屏幕开始吧！</div>');
event.dialog.textPrompt.style["z-index"]=10;
event.switchToAuto=function(){
event._result={
bool:true,
};
event.dialog.close();
game.resume();
_status.imchoosing=false;
if(roundmenu) ui.roundmenu.style.display='';
};
event.dialog.classList.add('fixed');
event.dialog.classList.add('scroll1');
event.dialog.classList.add('scroll2');
event.dialog.classList.add('fullwidth');
event.dialog.classList.add('fullheight');
event.dialog.classList.add('noupdate');
event.dialog.style.overflow='hidden';
event.dialog.open();

var height=event.dialog.offsetHeight;
var width=event.dialog.offsetWidth;
var top=50;
var speed=0;
var start=false;

var bird=ui.create.div('');
bird.style["background-image"]='linear-gradient(rgba(240, 235, 3, 1), rgba(230, 225, 5, 1))';
bird.style["border-radius"]='3px';
var pipes=[];
bird.style.position='absolute';
bird.style.height='40px';
bird.style.width='40px';
bird.style.left=Math.ceil(width/3)+'px';
bird.style.top=(top/100*height)+'px';
bird.updatePosition=function(){
bird.style.transform='translateY('+(top/100*height-bird.offsetTop)+'px)';
};
event.dialog.appendChild(bird);
var isDead=function(){
if(top>100||top<0) return true;
var btop=top;
var bleft=100/3;
var bdown=btop+5;
var bright=bleft+5;
for(var i of pipes){
var left2=i.left;
var right2=left2+10;
var bottom2=i.height1;
var top2=i.height2;

if(left2>bright||right2<bleft) continue;
if(btop<bottom2) return true;
if(bdown>top2) return true;
return false;
}
return false;
};

var fly=function(){
if(!start){
start=true;
event.dialog.textPrompt.innerHTML='<div class="text center">当前分数：'+event.score+'</div>';
speed=-4;
event.fly=setInterval(function(){
top+=speed;
if(top<0) top=0;
bird.updatePosition();
for(var i of pipes){
i.left-=0.5;
i.updateLeft();
}
speed+=0.5;
if(speed>2.5) speed=2.5;

if(isDead()==true){
event.settle();
}
},35);
var addPipe=function(){
var num=get.rand(5,55);

var pipe1=ui.create.div('');
pipe1.style["background-image"]='linear-gradient(rgba(57, 133, 4, 1), rgba(60, 135, 6, 1))';
pipe1.style["border-radius"]='3px';
pipe1.style.position='absolute';
pipe1.height1=num;
pipe1.height2=num+50;
pipe1.left=110;
pipe1.num=1;
pipe1.style.height=Math.ceil(height*num/100)+'px';
pipe1.style.width=(width/10)+'px';
pipe1.style.left=(pipe1.left*width/100)+'px';
pipe1.style.top='0px';

var pipe2=ui.create.div('');
pipe2.style["background-image"]='linear-gradient(rgba(57, 133, 4, 1), rgba(60, 135, 6, 1))';
pipe2.style["border-radius"]='3px';
pipe1.pipe2=pipe2;
pipe2.style.position='absolute';
pipe2.style.height=Math.ceil((100-pipe1.height2)*height/100)+'px';
pipe2.style.width=(width/10)+'px';
pipe2.style.left=(pipe1.left*width/100)+'px';
pipe2.style.top=Math.ceil(pipe1.height2*height/100)+'px';
pipes.add(pipe1);
event.dialog.appendChild(pipe1);
event.dialog.appendChild(pipe2);
pipe1.updateLeft=function(){
this.style.transform='translateX('+((this.left/100*width)-this.offsetLeft)+'px)';
this.pipe2.style.transform='translateX('+((this.left/100*width)-this.pipe2.offsetLeft)+'px)';
if(this.left<25&&!this.score){
this.score=true;
event.score++;
event.dialog.textPrompt.innerHTML='<div class="text center">当前分数：'+event.score+'</div>';
}
if(this.left<-15){
this.remove();
this.pipe2.remove();
pipes.remove(this);
}
}
};
event.addPipe=setInterval(addPipe,2500);
}
else if(speed>0){
speed=-4;
}
};
document.addEventListener(lib.config.touchscreen?'touchend':'click',fly);

event.settle=function(){
clearInterval(event.fly);
clearInterval(event.addPipe);
document.removeEventListener(lib.config.touchscreen?'touchend':'click',fly);
setTimeout(function(){
event.switchToAuto()
},1000);
};

game.pause();
game.countChoose();
};
//event.switchToAuto=switchToAuto;
game.broadcastAll(createDialog,player,event.videoId);
if(event.isMine()){
chooseButton();
}
else if(event.isOnline()){
event.player.send(chooseButton);
event.player.wait();
game.pause();
}
else{
switchToAuto();
}
'step 1'
game.broadcastAll(function(id,time){
if(_status.connectMode) lib.configOL.choose_timeout=time;
var dialog=get.idDialog(id);
if(dialog){
dialog.close();
}
},event.videoId,event.time);
player.popup(get.cnNumber(event.score)+'分',event.score==0?'fire':'wood');
game.log(player,'获得了','#g'+event.score+'分');
},
},
lib.translate.flappybird='Flappy Bird';
lib.skill.old_miaoxian2={charlotte:true};
lib.translate.olbiluan='避乱';
lib.translate.biluan2='避乱';
lib.translate.olbiluan2='避乱';
lib.translate.olbiluan_info='结束阶段开始时，若有与你距离不大于1的其他角色，你可以弃置一张牌。若如此做，本局内其他角色计算与你的距离时+X。（X为场上的势力数）';
lib.translate.kuizhu='溃诛';
lib.translate.kuizhu_info='弃牌阶段结束后，你可以选择一项：令至多X名角色各摸一张牌，或对任意名体力值之和为X的角色造成一点伤害，若不少于2名角色，你须失去一点体力。（X为你此阶段弃置的牌数）';
lib.translate.zhizheng='掣政';
lib.translate.zhizheng_info='锁定技，你的出牌阶段内，攻击范围内不包含你的其他角色不能成为你使用牌的目标。出牌阶段结束时，若你本阶段内使用的牌数小于这些角色的数量，则你弃置其中一名角色的一张牌。';
lib.translate.lijun='立军';
lib.translate.lijun1='立军';
lib.translate.lijun_info='主公技，其他吴势力角色于回合内使用的【杀】结算后，可以将此【杀】交给你，然后你可以令其摸一张牌。';
lib.translate.oldqingxian='清弦';
lib.translate.oldqingxian_info='当你受到伤害/回复体力后，你可以令伤害来源/一名其他角色执行一项：失去1点体力，随机使用一张装备牌；回复1点体力，弃置一张装备牌。若其以此法使用或弃置的牌为梅花，你回复一点体力。';
lib.translate.bilibili_huoxin='惑心';
lib.translate.bilibili_huoxin_info='一名其他角色的回合即将开始时，你可以改为由你操控。';
lib.translate.bilibili_wushen='武神';
lib.translate.bilibili_wushen_info='锁定技，你的红桃牌均视为【杀】。你使用红桃【杀】无距离限制。';
lib.translate.ollixia='礼下';
lib.translate.relixia_info='锁定技，其他角色的结束阶段开始时，若你不在其攻击范围内，你摸一张牌或令其摸两张牌。本局内其他角色计算与你的距离时-1。';
lib.translate.ollixia_info='锁定技，其他角色的结束阶段开始时，若你不在其攻击范围内，你选择一至两项：1.摸一张牌；2.其摸两张牌；3.其回复1点体力。本局内其他角色计算与你的距离时-X（X为你选择的选项数）。';
lib.translate.decademoucheng='谋逞';
lib.translate.decademoucheng_info='觉醒技，准备阶段，若〖连计〗的两个选项均被选择过，你失去〖连计〗并获得〖矜功〗。';
lib.translate.oldfanghun='芳魂';
lib.translate.oldfanghun_info='当你使用【杀】造成伤害后，你获得一个「梅影」标记；你可以移去一个「梅影」标记来发动〖龙胆〗并摸一张牌。';
lib.translate.oldfuhan='扶汉';
lib.translate.oldfuhan_info='限定技，回合开始时，你可以移去所有「梅影」标记并随机观看五名未登场的蜀势力角色，你将武将牌替换为其中一名角色，并将体力上限数调整为本局游戏中移去「梅影」标记的数量（至多为游戏开始时的人数），然后若你的体力值为全场最低，你回复1点体力。';
lib.translate.oldgongji='弓骑';
lib.translate.oldgongji_info='你可以将装备区中的牌当做【杀】使用或打出（无距离限制）。';
lib.translate.oldjiefan='解烦';
lib.translate.oldjiefan_info='你的回合外，当一名角色进入濒死状态时，你可以对当前回合角色使用一张【杀】，若此【杀】造成伤害，濒死角色回复一点体力。若此技能执行了回复体力的操作且濒死角色仍然处于濒死状态，你可以继续发动〖解烦〗。';
lib.translate.oldhongyi='弘仪';
lib.translate.oldhongyi_info='出牌阶段限一次，你可以弃置X张牌并选择一名其他角色（X为场上已阵亡角色数且至多为2）。你的下回合开始前，该角色造成伤害时进行判定，若结果为：黑色，此伤害-1。红色，受到伤害的角色摸一张牌。';
lib.translate.olranshang='燃殇';
lib.translate.olranshang2='燃殇';
lib.translate.olranshang_info='锁定技，当你受到1点火焰伤害后，你获得1枚「燃」标记；结束阶段开始时，你失去X点体力。（X为「燃」标记的数量）';
lib.translate.olhanyong='悍勇';
lib.translate.olhanyong_info='当你使用【南蛮入侵】或【万箭齐发】时，若你的体力值小于游戏轮数，则你可以令此牌的伤害值基数+1。';
lib.translate.oldpingjian='评荐';
lib.translate.oldpingjian_use='评荐';
lib.translate.oldpingjian_info='结束阶段开始时/当你受到伤害后/出牌阶段限一次，你可以弃置一张牌并令系统随机从剩余武将牌堆中检索出三张拥有发动时机为结束阶段开始时/当你受到伤害后/出牌阶段的技能的武将牌，然后你可以选择尝试发动其中一个技能。每个技能每局只能选择一次。';
lib.translate.oldpingjian_use_info='结束阶段开始时/当你受到伤害后/出牌阶段限一次，你可以弃置一张牌并令系统随机从剩余武将牌堆中检索出三张拥有发动时机为结束阶段开始时/当你受到伤害后/出牌阶段的技能的武将牌，然后你可以选择尝试发动其中一个技能。每个技能每局只能选择一次。';
lib.translate.old_spyinju='引裾';
lib.translate.old_spyinju_info='出牌阶段限一次，你可令一名其他角色选择一项：①对你使用一张【杀】。②其下个回合的准备阶段开始时，跳过出牌阶段和弃牌阶段。';
lib.translate.old_tianjiang='天匠';
lib.translate.old_tianjiang_info='游戏开始时，你随机获得两张不同副类别的装备牌，并置入你的装备区。出牌阶段，你可以将装备区内的牌移动到其他角色的装备区（可替换原装备）。';
lib.translate.old_tianjiang_move='天匠';
lib.translate.old_zhuren='铸刃';
lib.translate.old_zhuren_info='出牌阶段限一次，你可以弃置一张手牌。根据此牌的花色点数，你有一定概率打造成功并获得一张武器牌（若打造失败或武器已有则改为摸一张【杀】，花色决定武器名称，点数决定成功率）。此武器牌进入弃牌堆时，将其移出游戏。';
lib.translate.old_zhuren_destroy='铸刃';
lib.translate.old_zhuren_heart='红缎枪';
lib.translate.old_zhuren_heart_info='每回合限一次，当你使用【杀】造成伤害后，你可以进行判定，若结果为红色，你回复1点体力。';
lib.translate.old_zhuren_diamond='烈淬刀';
lib.translate.old_zhuren_diamond_info='当你使用【杀】对目标角色造成伤害时，你可以弃置一张【杀】或武器牌，令此伤害+1。';
lib.translate.old_zhuren_club='水波剑';
lib.translate.old_zhuren_club_info='当你于出牌阶段使用第一张牌时，若此牌是普通锦囊牌或【杀】，则你可以为此牌增加一个目标。';
lib.translate.old_zhuren_spade='混毒弯匕';
lib.translate.old_zhuren_spade_info='当你使用的黑色【杀】指定单一目标后，你可令该角色获得此【杀】，然后其失去1点体力。';
lib.translate.old_zhuren_shandian='天雷刃';
lib.translate.old_zhuren_shandian_info='当你使用【杀】仅指定一名角色为目标后，可令其进行一次判定，若结果为黑桃2~黑桃9，该角色受到3点雷电伤害，然后此【杀】对其无效。';
lib.translate.xinfanghun='芳魂';
lib.translate.xinfanghun_info='你可以将【杀】当作【闪】，或【闪】当做【杀】使用或打出。若你以此法使用或打出牌，你获得一枚「梅影」标记。';
lib.translate.xinfuhan='扶汉';
lib.translate.xinfuhan_info='觉醒技，准备阶段，若你的「梅影」标记不少于4，则你移去所有的「梅影」标记，增加一点体力上限并回复一点体力，然后然后你失去技能〖芳魂〗、获得技能〖龙胆〗，并从〖武圣〗、〖咆哮〗、〖铁骑〗、〖烈弓〗、〖狂骨〗中选择一个并获得之。';
lib.translate.pinjian='品鉴';
lib.translate.pinjian2='品鉴';
lib.translate.pinjian3='品鉴';
lib.translate.pinjian4='品鉴';
lib.translate.pinjian_info='每名角色的回合开始时，你可以获得武将牌堆中的四张武将牌并将这四张武将牌移出游戏，然后你本回合可以发动其中一个这些武将牌拥有的所有无技能标签的技能。';
lib.translate.yuedan='月旦';
lib.translate.yuedan_info='锁定技，新的一轮开始时，若当前游戏轮数为四的倍数，你将移出游戏的武将牌放回武将牌堆并洗却武将牌堆。';
lib.translate.xueji_old='血祭';
lib.translate.xueji_old_info='出牌阶段限一次，你可以弃置一张红色牌并选择攻击范围内的至多X名角色（X为你已损失的体力值），然后你对这些角色各造成1点伤害，这些角色各摸一张牌。';
lib.translate.oldhuxiao='虎啸';
lib.translate.oldhuxiao_info='锁定技，当你使用的【杀】被【闪】抵消后，你令此【杀】不计入使用次数。';
lib.translate.oldwuji='武继';
lib.translate.oldwuji_info='觉醒技，结束阶段，若你本回合造成了3点或更多伤害，你加1点体力上限并回复1点体力，并失去技能〖虎啸〗。';
lib.translate.bilibili_zhenggong='争功';
lib.translate.bilibili_zhenggong_info='其他角色的回合开始前，若你的武将牌正面朝上，你可以获得一个额外的回合，此回合结束后，你将武将牌翻面。 ';
lib.translate.bilibili_toudu='偷渡';
lib.translate.bilibili_toudu_info=' 每当你受到一次伤害后，若你的武将牌背面朝上，你可以弃置一张手牌，将你的武将牌翻面，然后视为使用一张【杀】。';
lib.translate.oldzishou='自守';
lib.translate.oldzishou_info='摸牌阶段，若你已受伤，你可以多摸X张牌（X为你已损失的体力值），然后跳过你的下一个出牌阶段。';
lib.translate.miaoxian='妙弦';
lib.translate.miaoxian_info='若你的手牌中仅有一张黑色牌，你可将此牌当作任意一张普通锦囊牌使用（每回合限一次）；若你的手牌中仅有一张红色牌，你使用此牌时摸一张牌。';
lib.translate.old_miaoxian='妙弦';
lib.translate.old_miaoxian_info='若你的手牌中仅有一张黑色牌，你可将此牌当作任意一张普通锦囊牌使用（每种牌名每回合限一次）；若你的手牌中仅有一张红色牌，你使用此牌时摸一张牌。';
lib.translate.old_mansi='蛮嗣';
lib.translate.old_mansi_info='一名角色使用的【南蛮入侵】结算完成后，你可以摸X张牌（X为受到过此牌伤害的角色数）。';
lib.translate.old_souying='薮影';
lib.translate.old_souying_info='每回合限一次，当你对一名男性角色造成伤害（或一名男性角色对你造成伤害时），若此伤害是你对其（或其对你）本回合内造成的第二次伤害，你可以弃置一张手牌令此伤害+1或（-1）。';
lib.translate.old_zhanyuan='战缘';
lib.translate.old_zhanyuan_info='觉醒技，准备阶段，若你已因蛮嗣累计获得超过7张牌，你加一点体力上限，并可以选择一名男性角色，你与其获得技能〖系力〗，然后你失去技能〖蛮嗣〗。';
lib.translate.old_xili='系力';
lib.translate.old_xili_info='你的回合外，当其他拥有〖系力〗技能的角色在其回合内使用【杀】指定目标后，你可以弃置一张手牌，令此【杀】伤害+1。';
lib.translate.olaocai='傲才';
lib.translate.olaocai_info='当你于回合外需要使用或打出一张基本牌时，你可以观看牌堆顶的两张牌。若你观看的牌中有此牌，你可以使用或打出之。';
lib.translate.olduwu='黩武';
lib.translate.olduwu_info='出牌阶段，你可以弃置X张牌对你攻击范围内的一名其他角色造成1点伤害（X为该角色的体力值）。若该角色因此法进入濒死状态，则你于濒死状态结算后失去1点体力，且本回合不能再发动〖黩武〗。';
lib.translate.oldanlao='啖酪';
lib.translate.oldanlao_info='当你成为一张指定了多个目标的【杀】或普通锦囊牌的目标时，你可以摸一张牌，令此牌对你无效。';
lib.translate.oljilei='鸡肋';
lib.translate.oljilei2='鸡肋';
lib.translate.oljilei2_bg='肋';
lib.translate.oljilei_info='当你受到有来源的伤害后，你可以声明一种牌的类别。若如此做，你令伤害来源不能使用、打出或弃置此类别的手牌，直到其下个回合开始。';
lib.translate.olbifa='笔伐';
lib.translate.olbifa_info='结束阶段开始时，你可以将一张手牌移出游戏并指定一名其他角色。该角色的准备阶段开始时，其观看你移出游戏的牌并选择一项：交给你一张与此牌类型相同的手牌并获得此牌；或将此牌置入弃牌堆，然后失去1点体力。';
lib.translate.olsongci='颂词';
lib.translate.olsongci_info='出牌阶段，你可以选择一项：令一名手牌数小于其体力值的角色摸两张牌；或令一名手牌数大于其体力值的角色弃置两张牌。每局游戏每名角色限一次。';
lib.translate.old_jieying='劫营';
lib.translate.old_jieying_mark='劫营';
lib.translate.old_jieying_info='锁定技，游戏开始时，你令一号位角色获得【营】标记。有【营】标记的角色的回合结束或死亡后，将【营】移动至下家，然后若该角色和当前回合角色均不为你，你进行一个额外回合。';
lib.translate.old_tongling='铜铃';
lib.translate.old_tongling_info='锁定技，当你成为一名角色使用牌指定的唯一目标后，你摸两张牌。';
lib.translate.oldfalu='法箓';
lib.translate.oldfalu_info='锁定技，游戏开始时，你获得「紫薇」「后土」「玉清」「勾陈」标记各一个。当你的牌因弃置而进入弃牌堆后，根据这些牌的花色，你获得对应的标记：黑桃，你获得1枚「紫薇」；梅花，你获得1枚「后土」；红桃，你获得1枚「玉清」；方块，你获得1枚「勾陈」。（每种标记限拥有1个）';
lib.translate.olddianhua='点化';
lib.translate.olddianhua_info='准备阶段或结束阶段，你可以观看牌堆顶的X张牌（X为你的「紫薇」「后土」「玉清」「勾陈」标记数的总和）。若如此做，你将这些牌以任意顺序放回牌堆顶。';
lib.translate.oldzhenyi='真仪';
lib.translate.oldzhenyi_spade='真仪';
lib.translate.oldzhenyi_club='真仪';
lib.translate.oldzhenyi_heart='真仪';
lib.translate.oldzhenyi_info='你可以在以下时机弃置相应的标记来发动以下效果：一名角色的判定牌生效前，你可以弃置一枚「紫薇」，然后将判定结果改为黑桃5或红桃5；当你处于濒死状态时，你可以弃置一枚「后土」，然后将你的一张手牌当【桃】使用；当你造成伤害时，你可以弃置一枚「玉清」，然后你进行一次判定。若结果为黑色，此伤害+1；当你受到属性伤害后，你可以弃置一张「勾陈」，然后你从牌堆中随机获得三种类型的牌各一张。';
lib.translate.shen_taoluan='草诏';
lib.translate.shen_taoluan_backup='草诏';
lib.translate.shen_taoluan_info='出牌阶段，你可展示一张手牌并声明一种未以此法声明过的基本牌或普通锦囊牌并令一名体力不大于你的角色选择一项：令此牌视为你声明的牌，或其失去1点体力。然后若此牌声明成功，然后你可将其交给一名其他角色。';
lib.translate.old_langmie='狼灭';
lib.translate.old_langmie_damage='狼灭';
lib.translate.old_langmie_info='其他角色的出牌阶段结束时，若其本阶段内使用过的牌中有名称相同的牌，则你可以摸一张牌；其他角色的结束阶段开始时，若其本回合内一次性造成过大于1点的伤害，则你可以弃置一张牌并对其造成1点伤害。';
lib.translate.old_jianshu='间书';
lib.translate.old_jianshu_info='限定技，出牌阶段，你可以将一张黑色手牌交给一名其他角色，并选择另一名在其攻击范围内的另一名其他角色，然后令这两名角色拼点。赢的角色弃置两张牌，没赢的角色失去一点体力。';
lib.translate.old_yongdi='拥嫡';
lib.translate.old_yongdi_info='限定技，当你受到伤害后，你可令一名其他男性角色增加一点体力上限，然后若该角色的武将牌上有主公技且其不为主公，其获得此主公技。';
lib.translate.old_jiqiao='机巧';
lib.translate.old_jiqiao_info='出牌阶段开始时，你可以弃置任意张装备牌，然后亮出牌堆顶两倍数量的牌并获得其中的锦囊牌。';
lib.translate.old_linglong='玲珑';
lib.translate.old_linglong_info='锁定技，若你的装备区没有防具牌，视为你装备着【八卦阵】；若你的装备区没有坐骑牌，你的手牌上限+1；若你的装备区没有宝物牌，则你视为拥有技能〖奇才(标)〗。';
lib.translate.xinlinglong='玲珑';
lib.translate.xinlinglong_info='锁定技，你视为拥有技能〖奇才(界)〗；若你的装备区没有防具牌，视为你装备着【八卦阵】；若你的装备区没有坐骑牌，你的手牌上限+1。';
lib.translate.dejuexiang='绝响';
lib.translate.dejuexiang_info='当你死亡时，杀死你的角色弃置其装备区内的所有牌并失去1点体力，然后你可以令一名其他角色获得〖残韵〗。';
lib.translate.decanyun='残韵';
lib.translate.decanyun_info='每名角色限一次。出牌阶段，你可以弃置一张牌并选择一名其他角色，然后若其装备区里的牌数：小于你，其回复1点体力；大于你，其失去1点体力；等于你，其摸一张牌。若你的体力值为1，你摸一张牌。';
lib.translate.oltunjiang='屯江';
lib.translate.oltunjiang_info='结束阶段，若你未跳过本回合的出牌阶段且你未于本回合的出牌阶段内使用牌指定过其他角色为目标，则你可以摸X张牌（X为全场势力数）。';
lib.translate.xintianyi='天翊';
lib.translate.xintianyi_info='觉醒技，准备阶段，若场上的所有存活角色均于本局游戏内受到过伤害，则你加2点体力上限并回复1点体力，然后令一名角色获得技能〖佐幸〗。';
lib.translate.xinzuoxing='佐幸';
lib.translate.xinzuoxing_info='出牌阶段限一次，若令你获得〖佐幸〗的角色存活且体力上限大于1，你可以令其减1点体力上限，然后你视为使用一张普通锦囊牌。';
lib.translate.old_jishi='济世';
lib.translate.old_jishi_info='锁定技。①当你使用的牌结算完成后，若你未因此牌造成过伤害，则你将此牌对应的所有实体牌置于仁库中。②当有牌离开仁库时，你摸一张牌。';
lib.translate.xiemanjinengdetianshu='<span class=\"texiaotext\" style=\"color:#FFD700\">写满技能的天书</span>';
lib.translate.rebaonue='暴虐';
lib.translate.rebaonue_info='主公技，当其他群势力角色造成伤害时，其可令你进行一次判定，若判定结果为黑桃，你回复一点体力。';
//precTraslation(分界线，便于我搜过来)
//描述优化or修复
lib.translate.spfangzong_info='锁定技，你不能于回合内使用具有伤害标签的牌指定攻击范围内的角色为目标且攻击范围内包含你的角色不能使用具有伤害标签的牌指定你为目标。结束阶段，你将手牌摸至X张（X为场上存活人数）。';
lib.translate.spxizhan_info='其他角色的回合开始时，你须选择一项：①失去1点体力。②弃置一张牌并令本回合〖芳踪〗失效，然后根据你弃置的卡牌花色执行以下效果：♠，其视为使用一张【酒】；♥，你视为使用一张【无中生有】；♣，你视为对其使用【铁索连环】；♦：你视为对其使用火【杀】（无距离限制）。';
lib.translate.xunde_info='一名角色受到伤害后，若你至其的距离为1，则你可以进行一次判定，若判定结果：不小于6，你令该角色获得判定牌；不大于6，你令伤害来源弃置一张牌。';//6学家第四位好歹也要有些尊严吧[doge]
lib.translate.chenjie_info='一名角色的判定牌生效前，你可以打出一张花色相同的牌代替之，然后你摸两张牌。';//顺带【勋德】一起改了
lib.translate.shuchen_info='锁定技，当有角色进入濒死状态时，若仁库至少有四张牌，则你获得仁库中的所有牌，然后其回复1点体力。';
lib.translate.mingjian_old='明鉴';
lib.translate.mingjian_old_info='出牌阶段开始时，你可以将所有手牌交给一名其他角色。然后你结束此阶段，其执行一个出牌阶段。';
lib.translate.boming_info='出牌阶段限两次，你可以将一张牌交给一名其他角色。结束阶段，若你本回合以此法失去了两张以上的牌，则你摸两张牌。';
lib.translate.ejian_info='其他角色获得了你的牌后，若其拥有与此牌类型相同的其他牌，则你可以令其选择一项：①受到1点伤害。②弃置所有与此牌类别相同的牌。每名角色每项限一次。';
lib.translate.yaohu_info='每轮限一次，你的回合开始时，你须选择场上一个势力。该势力其他角色的出牌阶段开始时，其获得你的一张“生”，然后其须选择一项：①对你指定的另一名的其他角色使用一张【杀】（无距离和次数限制）；②交给你两张牌。';
lib.translate.yizhong_info='锁定技，当你的防具栏为空时，黑色的杀对你无效。';
lib.translate.reshangshi_info='当你的手牌数小于X时，你可以将手牌摸至X张（X为你已损失的体力值）。';
lib.translate.taomie_info='当你造成伤害/受到伤害后，你可以令受伤角色/伤害来源获得「讨灭」标记（如场上已有标记则转移给该角色）；你和有「讨灭」标记的角色视为在彼此的攻击范围内，且当你对该角色造成伤害时，你可以选择一项：①此伤害+1；②获得其区域内的一张牌，并可将之交给另一名角色；③背水：依次执行前两项，并于伤害结算后弃置其「讨灭」标记。';
//lib.translate.yaohu_info='每轮限一次，你的回合开始时，你须选择场上一个势力。该势力的其他角色的出牌阶段开始时，其获得你的一张“生”，然后其须选择一项：①对你指定的一名其攻击范围内的其他角色使用一张【杀】；②直到本阶段结束时，其使用伤害类牌指定你为目标时，须交给你两张牌，否则取消之。';
//lib.translate.zhengjing_info='出牌阶段，你可以整理一次经典，整理完毕后 ，你选择一名角色，然后将从经典中整理出任意张卡牌置于其武将牌上，然后你获得剩余的牌。该角色于其准备阶段获得这些牌，且跳过本回合的判定和摸牌阶段。';
lib.translate.pianchong_info='摸牌阶段开始时，你可以放弃摸牌。若如此做，你从牌堆中获得一张红色牌和一张黑色牌，然后你选择一种颜色，且你的下回合开始前，当你失去该颜色的一张牌后，你从牌堆中获得另一种颜色的一张牌（牌堆中没有满足要求的牌则会先执行洗牌操作）。';
lib.translate.zunwei_info='每个选项每局限发动一次。出牌阶段限一次，你可以选择一名角色，并：①将体力值回复至与其相同；②将手牌数摸至与其相同（至多摸五张）；③为空装备栏使用牌堆中的装备牌直至你装备区里的牌数与其相等。';
lib.translate.xinzhengnan_new_rewusheng='武圣';
lib.translate.xinzhengnan_xindangxian='当先';
lib.translate.xinzhengnan_rezhiman='制蛮';
lib.translate.dangxian_info='锁定技，准备阶段，你执行一个额外的出牌阶段。';
lib.translate.maihuo_info='当你成为其他角色使用【杀】的目标后，若此【杀】同时满足以下条件：①不因发动〖埋祸〗对你使用、②此【杀】不为转化牌且有对应的实体牌、③其武将牌上没有「祸」、④你是此牌的唯一目标，则你可以令此牌对你无效，并将此【杀】置于其武将牌上，称为「祸」。<br>一名其他角色的出牌阶段开始时，若其武将牌上有「祸」，则其对你使用此「祸」（有距离限制且计入次数限制，若其无法对你使用此「祸」，则将此「祸」置入弃牌堆）。<br>当你对武将牌上有「祸」的其他角色造成伤害后，你移去其武将牌上的「祸」。';
lib.translate.jinghe_info='出牌阶段限一次，你可以展示至多四张牌名各不相同的牌并选择等量的角色，这些角色可以依次从<span class=\"texiaotext\" style=\"color:#FFD700\">写满技能的天书</span>中选择并获得一个技能直到你的下回合开始。';
lib.translate.guhuo_shan='蛊惑';
lib.translate.guhuo_wuxie='蛊惑';
lib.translate.old_guhuo_shan='蛊惑';
lib.translate.old_guhuo_wuxie='蛊惑';
lib.translate.drlt_zhenrong_info='当你对其他角色造成伤害后，若其手牌比你多，你可以将其一张牌置于你的武将牌上，称为「荣」。';
lib.translate.drlt_hongju_info='觉醒技，准备阶段，若你武将牌上「荣」的数量大于等于3且场上有角色死亡，则你可以用任意张手牌替换等量的「荣」，然后扣减一点体力上限并获得技能〖清侧〗。';
lib.translate.leiji_info='当你使用或打出一张【闪】时，你可令任意一名角色进行一次判定，若判定结果为黑桃，其受到两点雷电伤害。';
lib.translate.spshicai_info='出牌阶段，牌堆顶的一张牌对你可见。你可以弃置一张牌，然后获得牌堆顶的一张牌，且本阶段不能再发动〖恃才〗直到此牌离开你的手牌区。';
lib.translate.xinzifu2='自缚';
lib.translate.spsanchen_info='觉醒技，结束阶段，若你的「武库」数已达到上限，则你加1点体力上限并回复1点体力，然后获得〖灭吴〗。';
lib.translate.xindanxin_info='当你受到伤害后，你可以摸一张牌，并对〖矫诏〗的描述依次执行下列一项修改：1.将“基本牌”改为“基本牌或普通锦囊牌”；2.将“选择距离最近的一名其他角色，该角色”改为“你”；3.将“出牌阶段限一次”改为“出牌阶段限两次”。';
lib.translate.gzpaiyi_info='出牌阶段限一次，你可以将移去一张「权」，然后选择一名角色并令其摸X张牌（X为「权」的数量且至多为7），然后若其手牌数大于你，则你对其造成1点伤害。';
lib.translate.olxingshen_info='当你受到伤害后，你可以摸随机1-2张牌且下一次发动〖严教〗亮出的牌数+X（X为你已损失的体力值，且〖严教〗最多多亮出六张牌）。';
lib.translate.olbaonue_info='主公技，其他群雄角色造成1点伤害后，可令你进行一次判定，若判定花色为黑桃，你回复1点体力并获得判定牌。';
lib.translate.caiyuan_info='锁定技，结束阶段开始时，若你于上回合结束至现在未扣减过体力 ，你摸两张牌。';
lib.translate.olpaoxiao_info='锁定技，你使用【杀】无次数限制。当你使用的【杀】被【闪】抵消后，你令本回合下一次因【杀】造成伤害时，此伤害+X（X为造成伤害前的抵消次数）。';
lib.translate.jushou_info='结束阶段，你可以摸三张牌，若如此做，你将武将牌翻面。';
lib.translate.yimie_info='每名角色的回合限一次，当你对其他角色造成伤害时，若伤害值小于该角色的体力值，你可以失去1点体力并令此伤害+X（X为其体力值与伤害值之差），伤害结算后，该角色回复X点体力。';
lib.translate.tairan_info='锁定技，回合结束时，你将体力回复至上限，将手牌摸至体力上限；出牌阶段开始时，你失去上回合以此法回复的体力值，弃置上回合以此法获得的手牌。';
lib.translate.qiaosi_map='水转百戏图';
lib.translate.qiaosi_info='出牌阶段限一次，你可以表演「水转百戏图」并根据表演结果获得相应的牌。然后，你选择一项：1.弃置X张牌。2.将X张牌交给一名其他角色。（X为你以此法获得的牌数）';
lib.translate.olxibing_info='当你受到其他角色造成的伤害后，你可弃置你或伤害来源的两张牌，然后你们中手牌少的角色摸两张牌，以此法摸牌的角色不能使用牌指定你为目标直到回合结束。';
lib.translate.zuoxing_info='准备阶段，若令你获得〖佐幸〗的角色存活且体力上限大于1，则你可以令其减1点体力上限，然后你获得如下效果：出牌阶段限一次，你可以视为使用一张普通锦囊牌。';
lib.translate.ly_piliche_info='当你对其他角色造成伤害后，你可以弃置其装备区里的所有牌。';
lib.translate.guixin_info='当你受到1点伤害后，你可以获得每名其他角色区域里的一张牌，然后你翻面。';
lib.translate.ol_shichou_info='当你使用【杀】时，你可以令至多X名角色也成为此【杀】的目标。此牌结算结束后，若你未因【杀】造成过伤害，则你获得此【杀】（X为你已损失的体力值且至少为1）。';
lib.translate.jishe_info='出牌阶段，若你的手牌上限大于0，你可以摸一张牌，然后你本回合的手牌上限-1。结束阶段开始时，若你没有手牌，则你可以横置至多X名角色的武将牌（X为你的体力值）。';
lib.translate.jishe_append='<span style="font-family: yuanli"><li>注：此技能出牌阶段限用20次（防搞事）</span>';
lib.translate.bolan2='博览';
lib.translate.bolan_info='出牌阶段开始时，你可从三个描述中包含“出牌阶段限一次”的技能中选择一个获得直到此阶段结束；其他角色的出牌阶段限一次，其可以失去1点体力，令你从三个描述中包含“出牌阶段限一次”的技能中选择一个，其获得此技能直到此阶段结束。';
lib.translate.yifa_info='锁定技，其他角色使用【杀】或黑色普通锦囊牌指定你为目标后，其手牌上限-1直到其回合结束。';
lib.translate.xinfu_xingzhao_info='锁定技，若场上已受伤的角色数：不少于1，你视为拥有技能〖恂恂〗；不少于2，你使用装备牌时摸一张牌；不少于3，你跳过弃牌阶段。';
lib.translate.tianshu_info='出牌阶段开始时，若场上没有【太平要术】，则你可以弃置一张牌并选择一名角色。该角色获得并使用【太平要术】。';
lib.translate.sghuishi_info='限定技，出牌阶段，你可以选择一名其他角色：若其有未发动过的觉醒技，则你选择其中一个技能，令其发动此觉醒技时无视原有条件；否则其摸四张牌。然后你减2点体力上限。';
lib.translate.taipingyaoshu_info='锁定技，防止你受到的所有属性伤害；你的手牌上限+X（X为场上现存的势力数-1）；当你失去装备区里的【太平要术】时，你摸两张牌，然后若你的体力值大于1，你失去1点体力。';
lib.translate.taipingyaoshu_info_guozhan='锁定技，防止你受到的所有属性伤害；全场每有一名与你势力相同的角色存活，你的手牌上限便+1；当你失去装备区里的【太平要术】时，你摸两张牌，然后失去1点体力。';
lib.translate.drlt_xiongluan1='雄乱';
};
//武将包和卡包
if(bilibilicharacter.enable){
//武将包
/*
game.import('character',function(){
var 武将包英文名={
name:'武将包英文名',
connect:true,
characterSort:{
},
character:{
},
characterIntro:{
},
characterTitle:{
},
perfectPair:{
},
skill:{
},
translate:{
},
};
if(lib.device||lib.node){
for(var i in 武将包英文名.character){武将包英文名.character[i][4].push('ext:活动武将/'+i+'.jpg');}
}else{
for(var i in 武将包英文名.character){武将包英文名.character[i][4].push('db:extension-活动武将:'+i+'.jpg');}
}
return 武将包英文名;
});
lib.config.all.characters.push('武将包英文名');
if(!lib.config.characters.contains('武将包英文名')) lib.config.characters.remove('武将包英文名');
lib.translate['武将包英文名_character_config']='武将包中文名';
*/
game.import('character',function(){
var GuanDuCharacter={
name:'GuanDuCharacter',
connect:true,
character:{
ol_chunyuqiong:['male','qun',5,['YJcangchu','YJsushou','YJliangying'],[]],
ol_sp_xuyou:['male','qun',3,['spshicai','bilibili_fushi'],[]],
},
characterSort:{
GuanDuCharacter:{
GuanDuCharacter1:['ol_chunyuqiong','ol_sp_xuyou'],
//GuanDuCharacter2:['GD_gaolan','bilibili_sp_shenpei'],
},
},
characterTitle:{
},
characterIntro:{
},
characterFilter:{
ol_chunyuqiong:function(mode){
if(mode!='identity'&&mode!='guozhan') return false;
return true;
},
ol_sp_xuyou:function(mode){
if(mode=='versus'&&['guandu','4v4','four'].contains(_status.mode)) return false;
return true;
},
},
perfectPair:{
},
skill:{
YJsushou:{
audio:'sushou',
trigger:{player:'phaseDiscardBegin'},
frequent:true,
content:function(){
'step 0'
var num=1;
if(player.countMark('YJcangchu')>0) num+=player.countMark('YJcangchu');
player.draw(num);
if(game.filterPlayer(function(target){
if(get.mode()=='guozhan') return target.isFriendOf(player)&&target!=player;
return get.attitude(player,target)>0&&target!=player;
}).length==0) event.finish();
event.list=[];
'step 1'
player.chooseCardTarget({
prompt:'宿守：你可以交给友方角色各一张牌',
prompt2:lib.translate.YJsushou_info,
selectCard:1,
filterCard:function(card){
for(var i=0;i<event.list.length;i++){
if(event.list[i].card==card) return false;
}
return true;
},
position:'he',
selectTarget:1,
filterTarget:function(card,player,target){
if((get.mode()!='guozhan'&&get.attitude(player,target)<=0)||(get.mode()=='guozhan'&&!target.isFriendOf(player))||target==player) return false;
for(var i=0;i<event.list.length;i++){
if(event.list[i].target==target) return false;
}
return true;
},
ai1:function(card){
var mh=player.getHandcardLimit();
var val=6-get.value(card);
if(player.num('h')>mh){
if(get.position(card)=='h') val+=10;
}
return val;
},
ai2:function(target){
if(get.attitude(player,target)>0) return 1;
return 0;
}
});
'step 2'
if(result.bool){
var obj={
target:result.targets[0],
card:result.cards[0],
};
player.addGaintag(result.cards,'olsujian_given');
event.list.push(obj);
if(game.filterPlayer(function(target){
for(var i=0;i<event.list.length;i++){
if(event.list[i].target==target) return false;
}
if(get.mode()=='guozhan') return target.isFriendOf(player)&&target!=player;
return get.attitude(player,target)>0&&target!=player;
}).length>0) event.goto(1);
}
'step 3'
var cards=[];
for(var i=0;i<event.list.length;i++){
cards.push(event.list[i].card);
}
player.lose(cards,ui.special);
'step 4'
event.list.forEach(function(obj){
obj.target.gain(obj.card,player);
player.$give(1,obj.target);
});
'step 5'
game.delay();
},
},
YJliangying:{
trigger:{global:'phaseDrawBegin2'},
filter:function (event,player){
for(var i=0;i<game.players.length;i++){
if(game.players[i].countMark('YJcangchu')>0){
if(get.mode()=='guozhan') return event.player.isFriendOf(player)&&!event.numFixed;
return get.attitude(player,event.player)>0&&!event.numFixed;
}
}
return false;
},
logTarget:'player',
forced:true,
content:function (){
if(trigger.player!=player) player.addExpose(0.25);
trigger.num++;
},
group:'YJliangying_lose',
subSkill:{
lose:{
trigger:{player:'AWSL'},
forced:true,
logTarget:function(event,player){
return game.filterPlayer(function(current){
if(get.mode()=='guozhan') return current.isEnemyOf(player);
return get.attitude(player,current)<0;
});
},
content:function (){
player.loseMaxHp();
game.asyncDraw(game.filterPlayer(function(target){
return player.getEnemies().contains(target)}).sort(lib.sort.seat),2);
//if(get.mode()=='guozhan') return target.isEnemyOf(player);
//return get.attitude(target,player)<0&&get.attitude(player,target)<0;
//}).sort(lib.sort.seat),2);
},
sub:true,
},
},
},
YJcangchu:{
group:'YJcangchu_lose',
marktext:'粮',
intro:{content:'mark',name:'仓储',name2:'粮'},
audio:'cangchu',
trigger:{
global:'phaseBefore',
player:['enterGame','showCharacterAfter'],
},
filter:function (event,player){
if(get.mode()=='guozhan') return event.name=='showCharacter'&&event.toShow&&event.toShow.contains('ol_chunyuqiong');
return ((event.name!='showCharacter'&&event.name!='phase')||game.phaseNumber==0);
},
forced:true,
content:function (){
player.addMark('YJcangchu',3);
},
ai:{
threaten:function(player,target){
return 1+target.countMark('YJcangchu')/2;
},
effect:{
target:function(card,player,target,current){
if(target.hasMark('YJcangchu')){
if(card.name=='sha'){
if(card.nature=='fire'||player.hasSkill('zhuque_skill')) return 2;
}
if(get.tag(card,'fireDamage')&&current<0) return 2;
}
}
},
},
subSkill:{
lose:{
audio:'cangchu',
trigger:{player:'damageEnd'},
filter:function(event,player){
if(!player.countMark('YJcangchu')) return false;
return event.nature=='fire';
},
forced:true,
content:function(){
player.removeMark('YJcangchu',Math.min(player.countMark('YJcangchu'),trigger.num||1));
if(player.countMark('YJcangchu')==0){
_status.event.player=player;
_status.event.trigger('AWSL');
}
},
sub:true,
},
},
},
bilibili_fushi:{
trigger:{global:['dieAfter','reviveAfter','phaseBefore','showCharacterAfter']},
noHidden:true,
direct:true,
locked:true,
derivation:['bilibili_zezhu','bilibili_chenggong'],
content:function (){
var weis=game.countPlayer(function(current){
return current.group=='wei';
});
var quns=game.countPlayer(function(current){
return current.group=='qun';
});
if(player.additionalSkills.bilibili_fushi){
if(weis>quns&&!player.additionalSkills.bilibili_fushi.contains('bilibili_chenggong')){
player.logSkill('bilibili_fushi');
player.removeAdditionalSkill('bilibili_fushi');
game.log(player,'失去了技能','#g【择主】');
player.addAdditionalSkill('bilibili_fushi',['bilibili_chenggong']);
player.popup('bilibili_chenggong');
game.log(player,'获得了技能','#g【逞功】');
}
else if(quns>weis&&!player.additionalSkills.bilibili_fushi.contains('bilibili_zezhu')){
player.logSkill('bilibili_fushi');
player.removeAdditionalSkill('bilibili_fushi');
game.log(player,'失去了技能','#g【逞功】');
player.addAdditionalSkill('bilibili_fushi',['bilibili_zezhu']);
player.popup('bilibili_zezhu');
game.log(player,'获得了技能','#g【择主】');
}
else if(quns==weis&&player.additionalSkills.bilibili_fushi.length){
player.logSkill('bilibili_fushi');
if(player.hasSkill('bilibili_zezhu')) game.log(player,'失去了技能','#g【择主】');
else game.log(player,'失去了技能','#g【逞功】');
player.removeAdditionalSkill('bilibili_fushi');
}
} 
else {
if(weis>quns){
player.logSkill('bilibili_fushi');
player.addAdditionalSkill('bilibili_fushi',['bilibili_chenggong']);
player.popup('bilibili_chenggong');
game.log(player,'获得了技能','#g【逞功】');
}
else if(quns>weis){
player.logSkill('bilibili_fushi');
player.addAdditionalSkill('bilibili_fushi',['bilibili_zezhu']);
player.popup('bilibili_zezhu');
game.log(player,'获得了技能','#g【择主】');
}
}
},
},
YJshicai:{
audio:'spshicai',
marktext:'牌',
intro:{
name:'牌堆顶的牌',
content:function (storage,player){},
mark:function (dialog,storage,player){
if(player.isUnderControl(true)&&ui.cardPile.childNodes.length){
var cards = [ui.cardPile.childNodes[0]];
dialog.addAuto(cards);
}
else {
return '';
}
},
},
trigger:{player:'phaseUseBegin'},
direct:true,
content:function (){
player.addTempSkill('YJshicai_mark');
},
group:['YJshicai_sub','YJshicai_clear'],
subSkill:{
mark:{
temp:true,
init:function (player){
player.markSkill('YJshicai');
},
onremove:function (player){
player.unmarkSkill('YJshicai');
},
sub:true,
},
sub:{
init:function (player){
player.storage.YJshicai_sub=[];
},
enable:'phaseUse',
audio:'spshicai',
filter:function (event,player){
var cards=player.getCards('h');
for(var i=0;i<cards.length;i++){
if(player.storage.YJshicai_sub.contains(cards[i])){
return false;
}
}
player.storage.YJshicai_sub=[];
return player.num('he')&&ui.cardPile.childNodes.length;
},
selectCard:1,
filterCard:true,
position:'he',
prompt:'你可以弃置一张牌并获得牌堆顶的牌，当该牌离开你的手牌区后，你可以再次发动此技能。',
check:function (card){
var val=get.value(ui.cardPile.childNodes[0])||0;
if(get.info(ui.cardPile.childNodes[0]).selectTarget==undefined&&ui.cardPile.childNodes[0].name!='wuxie')val-=5;
return val-get.useful(card);
},
content:function (){
var card=get.cards()[0];
player.gain(card,'draw').gaintag.add('YJshicai');
player.storage.YJshicai_sub.push(card);
game.log(player,'获得了牌堆顶的一张牌');
},
ai:{
order:7,
effect:{
player:function (card,player,target){
if(player.storage.YJshicai_sub.contains(card)){
return [1,0.6];
}
},
},
result:{
player:1,
},
},
sub:true,
},
clear:{
charlotte:true,
trigger:{player:'phaseUseEnd'},
direct:true,
lastDo:true,
content:function(){
player.removeGaintag('YJshicai');
player.storage.YJshicai_sub=[];
},
sub:true,
},
},
},
bilibili_chenggong:{
audio:'chenggong',
trigger:{global:'useCard'},
filter:function (event,player){
return event.targets&&event.targets.length>1;
},
logTarget:'player',
check:function (event,player){
return get.attitude(player,event.player)>0;
},
content:function (){
trigger.player.draw();
},
},
bilibili_zezhu:{
enable:'phaseUse',
usable:1,
selectTarget:[1,2],
filterTarget:function (card,player,target){
return target!=player;
},
contentBefore:function (){
targets.sort(lib.sort.seat);
},
content:function (){
if(target.num('he')) player.gainPlayerCard('he',target,true);
else player.draw();
},
contentAfter:function (){
'step 0'
event.targets=targets;
'step 1'
event.target=event.targets.shift();
if(player.num('he')>0){
player.chooseCard('择主：请交给'+get.translation(event.target)+'一张牌','he',true).ai=function(card){
var att=get.attitude(player,event.target);
if(att>0) return get.value(card);
return 12-get.value(card);
};
}
else event.finish();
'step 2'
if(result.bool) event.target.gain(result.cards,player,'give');
if(event.targets.length) event.goto(1);
},
ai:{
order:7.5,
result:{
target:function (player,target){
var att=get.attitude(player,target);
if(att>0){
if(target.num('he'))return 0;
return 1;
}
if(target.num('he')) return -1;
return 1;
},
player:function (player,target){
var att=get.attitude(player,target);
if(att>0) return 1;
if(target.num('he')) return 0;
return 1;
},
},
},
},
xincangchu:{
marktext:"粮",
audio:"cangchu",
trigger:{global:'phaseBefore',player:'enterGame'},
filter:function(event,player){
return (event.name!='phase'||game.phaseNumber==0);
},
content:function (){
game.countPlayer(function(current){
player.line(current,'fire');
current.addMark('xincangchu',1);
});
},
group:["xincangchu_damage"],
intro:{
"name2":"粮",
content:"mark",
},
},
"xincangchu_damage":{
direct:true,
trigger:{
global:"damageEnd",
},
filter:function (event,player){
return event.nature=='fire'&&event.player.isAlive()&&event.player.hasMark('xincangchu');
},
logTarget:"player",
content:function (){
player.logSkill('xincangchu',trigger.player);
trigger.player.removeMark('xincangchu',trigger.num);
},
},
xinliangying:{
trigger:{
global:"phaseDrawBegin2",
},
direct:true,
filter:function (event,player){
return event.player.hasMark('xincangchu');
},
content:function (){
'step 0'
if(trigger.player!=player){
player.chooseControl().set('choiceList',['获得其一枚[粮]标记','令当前回合角色摸牌阶段多摸一张牌']).set('ai',function(){
if(get.attitude(player,trigger.player)<0) return 0;
return 1;
});
}
else event._result={index:1};
'step 1'
if(result.index==0){
player.logSkill('xinliangying',trigger.player);
trigger.player.removeMark('xincangchu',1);
player.addMark('xincangchu',1);
}else if(result.index==1){
player.logSkill('xinliangying',trigger.player);
trigger.num++;
}
},
},
xinsushou:{
trigger:{
player:"phaseDiscardBegin",
},
frequent:true,
audio:"sushou",
content:function (){
'step 0'
var bilibili=player.countMark('xincangchu')+1;
player.draw(bilibili);
'step 1'
var num=Math.min(player.countCards('he'),game.countPlayer(function(target){
return target!=player&&target.hasMark('xincangchu');
}));
if(num){
player.chooseCardTarget({
prompt:'是否将自己的任意张牌交给等量有[粮]的其他角色？',
prompt2:'操作方式：先按顺序选中所有要给出的牌，然后再按顺序选择等量的目标角色。',
selectCard:[1,num],
position:'he',
selectTarget:function(){
return ui.selected.cards.length;
},
filterTarget:function(card,player,target){
return target!=player&&target.hasMark('xincangchu');
},
complexSelect:true,
ai1:function(card){
if(card.name=='shan') return 1;
return Math.random();
},
ai2:function(target){
return get.attitude(player,target)>0&&5-Math.max(4,target.countCards('h'));
},
});
}
else event.finish();
'step 2'
if(result.bool){
while(result.cards.length){
var target=result.targets.shift();
var card=result.cards.shift();
target.gain(card,player);
player.$giveAuto(card,target);
}
event.next.sort(function(a,b){
return lib.sort.seat(a.player,b.player);
});
}
else event.finish();
'step 3'
game.delay();
},
},
cxySuiShi:{
audio:"suishi",
trigger:{
global:"dying",
},
forced:true,
priority:6.5,
check:function (){
return false;
},
filter:function (event,player){
return event.player!=player&&event.parent.name=='damage'&&event.parent.source&&get.attitude(player,event.parent.source)>0;
},
content:function (){
player.draw();
},
group:"cxySuiShi_sub",
subSkill:{
sub:{
audio:"suishi",
trigger:{
global:"dieAfter",
},
forced:true,
filter:function (event,player){
return get.attitude(player,event.player)>0;
},
content:function (){
player.loseHp();
},
sub:true,
},
},
},
YJmouzhi:{
audio:'mouzhi',
enable:"phaseUse",
usable:1,
selectTarget:1,
filterTarget:true,
check:function(target){
return get.attitude(player,target);
},
content:function (){
'step 0'
if(target!=player){
game.asyncDraw([player,target]);
}
else{
player.draw(2);
}
'step 1'
target.addTempSkill('YJmouzhi_buff2',{player:'phaseUseBegin'});
target.storage.YJmouzhi=player;
target.markSkillCharacter('YJmouzhi',player,'谋识','当你于出牌阶段内对一名角色第一次造成伤害后，'+get.translation(player)+'摸一张牌');
},
ai:{
order:1,
result:{
target:function (player,target){
if(player==target)return 0;
return 1;
},
player:function (player,target){
var att=get.attitude(player,target);
if(att <= 0)return -1;
if(target==player)return 1;
return 2;
},
},
},
subSkill:{
"buff2":{
onremove:function (player){
player.addTempSkill('YJmouzhi_buff',{player:'phaseUseAfter'});
},
sub:true,
},
buff:{
temp:true,
trigger:{
source:"damageEnd",
},
filter:function (event,player){
return _status.currentPhase==player&&!event.player.hasSkill('YJmouzhi_buff3');
},
direct:true,
logTarget:'player',
content:function (){
'step 0'
player.logSkill('YJmouzhi');
player.storage.YJmouzhi.draw();
trigger.player.addTempSkill('YJmouzhi_buff3');
},
onremove:function (player){
player.unmarkSkill('YJmouzhi');
delete player.storage.YJmouzhi;
},
sub:true,
},
},
},
YJmouzhi_buff3:{},
bilibili_fenglve:{
audio:'fenglve',
trigger:{player:"phaseUseBegin"},
filter:function (event,player){
return player.num('h');
},
direct:true,
content:function (){
'step 0'
player.chooseTarget((get.prompt2('bilibili_fenglve')),function(card,player,target){
return target!=player&&target.num('h');
}).ai=function(target){
var h=target.num('h')-1,e=target.num('e'),j=target.num('j');
var myMax=0;
for(var i=0;i<player.getCards('h').length;i++){
myMax=Math.max(myMax,player.getCards('h')[i].number);
}
var shengsuan=1-(14-myMax)*target.num('h')/13;
var att=get.attitude(player,target);
var val=0;
if(att>0){
val += -0.5;
if(j){
var eff=0;
var js=target.getCards('j');
for(var i=0;i<js.length;i++){
eff=Math.min(eff,get.effect(target,js[i],player,player));
}
val += -eff;
}
}
else {
if(shengsuan<0.5) return -1;
if(h) val += 2;
if(e) val += 2;
if(j) val -= 2;
}
return val;
};
'step 1'
if(result.bool){
player.logSkill('bilibili_fenglve',result.targets[0]);
player.chooseToCompare(result.targets[0]);
event.target=result.targets[0];
}
else {
event.finish();
}
'step 2'
event.card=result.player;
if(result.bool){
player.addSkill('bilibili_fenglve2');
event.goto(3);
}
else{
event.goto(3);
}
'step 3'
player.chooseBool('是否令'+get.translation(event.target)+'获得你拼点的牌'+get.translation(event.card)).ai=function(){
if(get.attitude(player,target)>0) return 1;
if(player.hasSkill('bilibili_fenglve2')&&target.countCards('h')==0) return 1;
return 0;
};
'step 4'
if(result.bool){
player.line(event.target,'green');
event.target.gain(event.card);
event.target.$gain2(event.card);
game.log(event.target,'获得了',player,'拼点的牌',event.card);
game.delay();
event.goto(5);
}
else{
event.goto(5);
}
'step 5'
if(player.hasSkill('bilibili_fenglve2')){
event.goto(6);
}
else{
event.goto(8);
}
'step 6'
var num=0;
if(event.target.num('h'))num++;
if(event.target.num('e'))num++;
if(event.target.num('j'))num++;
event.target.choosePlayerCard(event.target,num,'hej',true).set('filterButton',function(button){
for(var i=0;i<ui.selected.buttons.length;i++){
if(get.position(button.link)==get.position(ui.selected.buttons[i].link))
return false;
}
return true;
}).ai=function(button){return 12-get.value(button.link);};
'step 7'
if(result.bool){
player.gain(result.links,event.target);
event.target.$give(result.links.length,player);
event.goto(10);
}
else{
event.goto(10);
}
'step 8'
player.chooseCard('锋略：请将一张牌交给'+get.translation(event.target),'he',true).ai=function(card){return 12-get.value(card);};
'step 9'
if(result.bool){
event.target.gain(result.cards,player);
player.$give(1,event.target);
}
'step 10'
if(player.hasSkill('bilibili_fenglve2')) player.removeSkill('bilibili_fenglve2');
},
},
bilibili_fenglve2:{},
bilibili_beizhan:{
trigger:{player:'phaseJieshuBegin'},
direct:true,
audio:'beizhan',
content:function(){
'step 0'
player.chooseTarget(get.prompt2('bilibili_beizhan')).set('ai',function(target){
var player=_status.event.player;
var att=get.attitude(player,target);
var hs=target.countCards('h');
var ht=target.maxHp;
if(hs>=ht&&target.isMaxHandcard()) return -att*hs;
if(hs<ht&&game.hasPlayer(function(current){
return current.countCards('h')>ht;
})) return att*2*(ht-hs);
return 0;
});
'step 1'
if(result.bool){
var target=result.targets[0];
player.logSkill('bilibili_beizhan',target);
target.drawTo(target.maxHp);
target.addSkill('bilibili_beizhan2');
}
},
ai:{
expose:0.25,
},
},
bilibili_beizhan2:{
trigger:{player:'phaseBegin'},
silent:true,
firstDo:true,
content:function(){
player.removeSkill('bilibili_beizhan2');
if(player.isMaxHandcard(true)) player.addTempSkill('zishou2');
},
mark:true,
intro:{content:'回合开始时，若手牌数为全场唯一最多，则回合内不能使用牌指定其他角色为目标'},
},
bilibili_gangzhi:{
audio:'gangzhi',
trigger:{player:'damageBefore'},
filter:function (event,player){
return event.source&&event.source!=player;
},
forced:true,
firstDo:true,
content:function (){
trigger.cancel();
trigger.player.loseHp(trigger.num);
},
},
YJyuanlve:{
audio:'yuanlve',
enable:"phaseUse",
filter:function (event,player){
if(player.getStat().skill.YJyuanlve>=player.countMark('YJyuanlveA')) return false;
return true;
},
selectTarget:1,
filterTarget:true,
content:function (){
'step 0'
target.draw();
'step 1'
var card=result[0];
if(card&&game.hasPlayer(function(current){
return target.canUse(card,current);
})&&get.owner(card)==target){
target.chooseToUse({
prompt:'远略:是否使用'+get.translation(card)+'？',
filterCard:function(cardx,player,target){
return cardx==_status.event.cardx;
},
cardx:card,
});
}
'step 2'
player.draw(1+player.countMark('YJyuanlveC'));
'step 3'
player.addMark('YJyuanlveC',1);
},
group:['YJyuanlveA','YJyuanlveB','YJyuanlveC','YJyuanlveD'],
ai:{
order:7.5,
result:{
target:1,
},
},
},
YJyuanlveA:{
trigger:{player:'phaseZhunbeiBegin'},
forced:true,
silent:true,
firstDo:true,
content:function(){
var YJnum=player.maxHp-player.hp+1;
player.addMark('YJyuanlveA',YJnum);
},
},
YJyuanlveB:{
trigger:{player:'phaseJieshuBegin'},
lastDo:true,
popup:false,
forced:true,
silent:true,
content:function(){
player.storage.YJyuanlveA=0;
player.storage.YJyuanlveC=0;
},
},
YJyuanlveC:{},
YJyuanlveD:{
audio:'YJyuanlve',
trigger:{player:'phaseZhunbeiBegin'},
firstDo:true,
prompt:'【远略】：是否失去一点体力?',
check:function(){
return player.hasSkill('YJyuanlve')&&player.hp>=3;
},
content:function(){
player.loseHp();
},
},
cxyXiYing:{
audio:'xiying',
trigger:{player:'phaseUseBegin'},
filter:function (event,player){
return player.countCards('he');
},
direct:true,
content:function (){
'step 0'
player.chooseCardTarget({
selectCard:1,
filterCard:true,
position:'he',
selectTarget:-1,
filterTarget:function(card,player,target){
return target!=player;
},
ai1:function(card){
var player=_status.event.player
var hs=player.getCards('h');
if(hs<3&&player.num('e')==0) return 0;
for(var i=0;i<hs.length;i++){
if(get.tag(hs[i],'damage')){
var val=8-get.value(card);
if(get.tag(card,'damage'))val -= 3;
return val;
}
}
return 0;
},
ai2:function(card,player,target){
return 1;
},
prompt:'是否发动袭营？<p style="text-algin:left;font-size:80%">'+get.translation('cxyXiYing_info')+'</p>',
});
'step 1'
if(result.bool){
player.discard(result.cards[0]);
result.targets.sort(lib.sort.seat);
player.logSkill('cxyXiYing',result.targets);
event.targets=result.targets;
}
else {
event.finish();
}
'step 2'
event.target=event.targets.shift();
event.target.chooseToDiscard('袭营：请选择弃置一张牌或本回合不能使用牌','he').ai=function(card){
var target=event.target;
if(get.attitude(target,player)>0)return 0;
var h=target.num('h') , e=target.num('e');
var tao=target.countCards('h',{name:'tao'}),
jiu=target.countCards('h',{name:'jiu'});
if(h==0)return 0;
if(tao&&game.hasPlayer(function(current){
return get.attitude(target,current)>2&&current.hp == 1;
})) return 7-get.value(card);
if(jiu&&target.hp==1)return 7-get.value(card);
if(target.hasWuxie())return 5-get.value(card);
if(target.hasShan()){
if(get.distance(player,target,'attack')<=1&&get.damageEffect(target,player,target)<0) return 5-get.value(card);
return 0;
}
return 0;
};
'step 3'
if(!result.bool){
event.target.addTempSkill('cxyXiYing_ban','phaseEnd');
event.target.markSkillCharacter('cxyXiYing',player,'袭营','本回合内不能使用或打出牌');
}
if(event.targets.length) event.goto(2);
},
subSkill:{
ban:{
mod:{
cardEnabled:function (card,player){
return false;
},
cardUsable:function (card,player){
return false;
},
cardRespondable:function (card,player){
return false;
},
cardSavable:function (card,player){
return false;
},
},
onremove:function (player){
player.unmarkSkill('cxyXiYing');
},
sub:true,
},
},
},
},
translate:{
GuanDuCharacter1:'官渡特殊武将<br>模式补充',
GuanDuCharacter2:'初版官渡<br>老版技能武将',
bilibili_fushi:'附势',
bilibili_zezhu:'择主',
bilibili_chenggong:'逞功',
YJshicai:'恃才',
YJsushou:'宿守',
YJcangchu:'仓储',
YJliangying:'粮营',
YJsushou_info:"弃牌阶段开始时，你可以摸X+1张牌（X为你的「粮」数），然后可以交给任意名友方角色各一张牌。",
bilibili_fushi_info:'锁定技，若场上势力数为：群大于魏，你视为拥有技能〖择主〗；魏大于群，你视为拥有技能〖逞功〗。',
bilibili_zezhu_info:'出牌阶段限一次，你可以获得至多两名其他角色各一张牌，然后分别交给其一张牌（若你选择的角色中有人没有牌，则将获得其一张牌改为摸一张牌）。',
bilibili_chenggong_info:'一名角色使用牌指定目标后，若目标数不小于2，你可以令其摸一张牌。',
YJshicai_info:"出牌阶段内，牌堆顶的牌对你可见；你可以弃置一张牌并获得牌堆顶的牌，当该牌离开你的手牌区后，你可以再次发动此技能。",
YJcangchu_info:'锁定技，游戏开始时，你获得3枚「粮」，当你受到1点火焰伤害后，你失去一枚「粮」。',
YJcangchu_info_guozhan:'锁定技，当你明置此武将牌后，你获得3枚「粮」标记，当你受到1点火焰伤害后，你失去一枚「粮」。',
YJliangying_info:'锁定技，若你有「粮」，则友方角色摸牌阶段摸牌数+1；当你失去所有「粮」后，你减1点体力上限，然后令所有敌方角色各摸两张牌。',
xincangchu:'仓储',
xincangchu_info:'锁定技，游戏开始时，你令所有角色获得一枚「粮」。有「粮」的角色受到一点火焰伤害后，其失去一枚「粮」标记。',
xinsushou:'宿守',
xinsushou_info:'弃牌阶段开始时，你可以摸X+1张牌(X为你的「粮」数)，然后可以交给任意名有[粮]的其他角色各一张牌。',
xinliangying:'粮营',
xinliangying_info:'锁定技，一名有「粮」角色的摸牌阶段开始时，你选择一项：<br>1.获得其一枚「粮」。<br>2.令其于本摸牌阶段额外摸一张牌。',
cxyXiYing:"袭营",
YJmouzhi:"谋识",
cxySuiShi:"随势",
YJyuanlve:"远略",
YJyuanlveD:"远略",
bilibili_gangzhi:'刚直',
bilibili_beizhan:'备战',
bilibili_fenglve:'锋略',
"cxyXiYing_info":"出牌阶段开始时，你可以弃置一张牌并令所有其他角色选择一项：弃置一张牌；本回合内不能使用或打出牌。",
"YJmouzhi_info":"出牌阶段限一次，你可以令一名角色与你各摸一张牌(若此角色为你则改为你摸两张牌)，若如此做，当其于其下回合的出牌阶段内对一名角色造成伤害后，若是此阶段其第一次对该角色造成伤害，你摸一张牌。",
"cxySuiShi_info":"锁定技，当其他角色进入濒死状态时，若伤害来源与你势力相同，你摸一张牌；当其他角色死亡时，若其与你势力相同，你失去1点体力。",
"YJyuanlve_info":"出牌阶段限X次，你可以令一名角色摸一张牌，然后该角色可以使用该牌，结算完成后，你摸1+Y张牌。(X为回合开始时你的已损失体力值+1，Y为本回合除本次发动[远略]的次数)。回合开始时，你可以失去一点体力。",
bilibili_gangzhi_info:'锁定技，其他角色对你造成的伤害均视为体力流失。',
bilibili_beizhan_info:'回合结束后，你可以令一名角色将手牌补至体力上限。该角色回合开始时，若其手牌数为全场唯一最多，则其本回合内不能使用牌指定其他角色为目标。',
bilibili_fenglve_info:'出牌阶段开始时，你可以与一名角色拼点，若你赢，该角色将其区域内的各一张牌交给你；若你没赢，你交给其一张牌。当此次拼点结算后，你可以令其获得你拼点的牌。',
ol_chunyuqiong:'OL淳于琼',
ol_sp_xuyou:'SP许攸',
},
};
if(lib.device||lib.node){
for(var i in GuanDuCharacter.character){GuanDuCharacter.character[i][4].push('ext:活动武将/'+i+'.jpg');}
}else{for(var i in GuanDuCharacter.character){GuanDuCharacter.character[i][4].push('db:extension-活动武将:'+i+'.jpg');}
}
return GuanDuCharacter;
});
lib.config.all.characters.push('GuanDuCharacter');
if(!lib.config.characters.contains('GuanDuCharacter')) lib.config.characters.remove('GuanDuCharacter');
lib.translate['GuanDuCharacter_character_config']='官渡之战';
game.import('character',function(){
var FaDongCharacter={
name:'FaDongCharacter',
connect:true,
characterSort:{
FaDongCharacter:{
FaDongCharacter1:['FD_guosi','FD_lijue','FD_niufudongxie','FD_fanchou','FD_dongyue','FD_zhangji'],
FaDongCharacter2:['FD_hubenjun','FD_baolvejun','FD_fengyaojun','FD_longxiangjun','FD_feixiongjunzuo','FD_feixiongjunyou'],
FaDongCharacter3:['FD_sunjian','FD_huaxiong'],
},
},
character:{
FD_guosi:['male','qun',4,['cxyYangLie','bilibili_mojun'],['die_audio']],
FD_lijue:['male','qun',6,['cxyYangWu','bilibili_mojun'],['die_audio']],
FD_fanchou:['male','qun',4,['cxyFanGong','bilibili_mojun'],[]],
FD_dongyue:['male','qun',4,['cxyKuangXi','bilibili_mojun'],['die_audio']],
FD_niufudongxie:['double','qun',4,['bilibili_tunjun','cxyJiaoXia','bilibili_mojun'],[]],
FD_zhangji:['male','qun',4,['cxyJieLve','bilibili_mojun'],['die_audio']],
FD_hubenjun:['male','qun',5,['bilibili_huying'],[]],
FD_baolvejun:['male','qun',3,['cxyBaoYing'],[]],
FD_fengyaojun:['female','qun',3,['bilibili_fengying'],[]],
FD_longxiangjun:['male','qun',4,['bilibili_longying'],[]],
FD_feixiongjunzuo:['male','qun',4,['bilibili_jingqi'],[]],
FD_feixiongjunyou:['male','qun',4,['cxyRuiQi'],[]],
FD_sunjian:['male','qun',6,['cxyYingHun','cxyPoLu'],['die_audio']],
FD_huaxiong:['male','qun',8,['bilibili_moqu','cxyYaoWu','bilibili_mojun'],['die_audio']],
},
characterIntro:{
dongyue:'董越，武威郡姑臧人也，东汉末年人，董卓手下东中郎将，与贾诩是同乡。曾被董卓派往渑池驻扎，抵御关东反董联军的进攻，董卓死后董越被董卓女婿牛辅所杀。',
niufudongxie:'牛辅，武威郡姑臧人也，董卓的女婿，曾任中郎将，征讨白波军，不能取胜。董卓被杀时，牛辅别屯于陕地。吕布派李肃前去征讨牛辅，被牛辅击败。后来，牛辅营中有士兵半夜背叛出逃，造成内乱，牛辅以为整营皆叛，于是带着金银珠宝，独与亲信胡赤儿等五六人逾城北渡河。赤儿等人以绳索系在牛辅腰间将其从城头放下，但赤儿等因为谋财而在离地面数丈高的地方就松开了绳子使得牛辅重重摔在地上腰部受伤，而后赤儿与诸胡人将牛辅斩首，将其首级送去长安。<br>董翓，董卓之女，牛辅之妻。',
},
characterTitle:{
},
perfectPair:{
},
skill:{
bilibili_jingqi:{
},
_bilibili_jingqi_distance:{
mod:{
globalFrom:function (from,to,distance){
if(game.hasPlayer(function(current){
if(get.mode()=='identity') return current.hasSkill('bilibili_jingqi')&&get.attitude(current,from)>0;
return current.hasSkill('bilibili_jingqi')&&from.isFriendOf(current);
})){
return distance-1;
}
},
},
},
bilibili_fengying:{
},
_bilibili_fengying_use:{
mod:{
targetEnabled:function(card,player,target){
if(game.hasPlayer(function(current){
if(get.mode()=='identity') return current.hasSkill('bilibili_fengying')&&get.attitude(current,target)>0;;
return current.hasSkill('bilibili_fengying')&&target.isFriendOf(current);
})){
if(((get.mode()=='identity'&&get.attitude(player,target)<0)||(get.mode()!='identity'&&target.isEnemyOf(player)))&&!game.hasPlayer(function(current){
return current!=target&&current.hp<=target.hp;
})) return false;
}
},
},
},
bilibili_mojun:{
trigger:{global:'damageEnd'},
filter:function (event,player){
if(!event.source||!event.source.isAlive()) return false;
if(!event.card||event.card.name!="sha") return false;
if(get.mode()=='identity') return event.notLink()&&get.attitude(player,event.source)>0;
return event.notLink()&&event.source.isFriendOf(player);
},
forced:true,
content:function (){
'step 0'
trigger.source.judge(function(card){
return get.color(card)=='black'?2:-2;
});
'step 1'
if(result.bool){
event.targets=game.filterPlayer(function(current){
if(get.mode()=='identity') return get.attitude(player,current)>0;
return current.isFriendOf(player);
});
event.targets.sort(lib.sort.seat);
game.asyncDraw(event.targets);
}
},
},
cxyJieLve:{
trigger:{source:'damageEnd'},
filter:function (event,player){
if(!event.player.isAlive()||event.player==player) return false;
return event.player.num('hej')>0;
},
logTarget:'player',
forced:true,
content:function (){
'step 0'
var num=0;
if(trigger.player.num('h')) num++;
if(trigger.player.num('e')) num++;
if(trigger.player.num('j')) num++;
if(num){
player.gainPlayerCard(trigger.player,'hej',num,true).set('filterButton',function(button){
for(var i=0;i<ui.selected.buttons.length;i++){
if(get.position(button.link)==get.position(ui.selected.buttons[i].link)) return false;
}
return true;
});
}
else event.finish();
'step 1'
player.loseHp();
},
},
bilibili_tunjun:{
trigger:{global:'roundStart'},
forced:true,
filter:function(event,player){
return player.maxHp>1;
},
content:function (){
player.loseMaxHp();
player.draw(player.maxHp);
},
},
cxyFanGong:{
trigger:{target:"useCardToAfter"},
filter:function (event,player){
if(get.mode()=='identity') return get.attitude(player,event.player)<0;
return event.player.isEnemyOf(player);
},
direct:true,
content:function (){
player.chooseToUse(get.prompt2('cxyFanGong',trigger.player),{name:"sha"}).set("filterTarget",function(card,player,target){
return target == _status.event.source;
}).set("selectTarget",-1).set('source',trigger.player).set("logSkill","cxyFanGong");
},
},
cxyJiaoXia:{
trigger:{
global:"phaseDiscardBefore",
},
filter:function (event,player){
if(get.mode()=='identity') return get.attitude(player,event.player)>0;
return event.player.isFriendOf(player);
},
forced:true,
logTarget:"player",
content:function (){
trigger.player.addTempSkill("cxyJiaoXia_buff","phaseDiscardEnd");
},
subSkill:{
buff:{
mod:{
maxHandcard:function (player,num){
var hs=player.getCards('h');
for(var i=0;i<hs.length;i++){
if(get.color(hs[i])=='black'){
num++;
}
}
return num;
},
cardDiscardable:function (card,player,name){
if(name=='phaseDiscard'&&get.color(card)=='black') return false;
},
},
sub:true,
},
},
},
cxyKuangXi:{
enable:"phaseUse",
filter:function (event,player){
return !player.hasSkill("cxyKuangXi_filter");
},
selectTarget:1,
filterTarget:function (card,player,target){
return target!=player;
},
contentBefore:function (){
player.addSkill("cxyKuangXi_temp");
},
content:function (){
"step 0"
player.loseHp();
"step 1"
target.damage(player);
},
contentAfter:function (){
if(player.hasSkill("cxyKuangXi_temp")){
player.removeSkill('cxyKuangXi_temp');
} else {
player.addTempSkill("cxyKuangXi_filter","phaseBefore");
}
},
ai:{
order:2,
result:{
target:function (player,target){
if(player.hp<=2)return 0;
return get.damageEffect(target,player,target);
},
player:function (player,target){
if(player.hp<=2)return 0;
return 1;
},
},
},
subSkill:{
temp:{
trigger:{
global:"dying",
},
priority:15,
filter:function (event,player){
return event.reason&&event.reason.getParent().name=='cxyKuangXi';
},
silent:true,
content:function (){
player.removeSkill('cxyKuangXi_temp');
},
sub:true,
forced:true,
popup:false,
},
filter:{
sub:true,
},
},
},
cxyYangWu:{
trigger:{player:'phaseZhunbeiBegin'},
filter:function (event,player){
return game.hasPlayer(function(current){
return current!=player;
});
},
direct:true,
content:function (){
'step 0'
event.targets=game.filterPlayer(function(current){
return current!=player;
});
event.targets.sort(lib.sort.seat);
player.logSkill('cxyYangWu',event.targets);
for(var i=0;i<event.targets.length;i++){
event.targets[i].damage(player);
game.delay();
}
'step 1'
player.loseHp();
},
},
cxyYangLie:{
trigger:{player:'phaseZhunbeiBegin'},
filter:function (event,player){
return game.hasPlayer(function(current){
return current!=player&&current.countCards('hej');
});
},
direct:true,
content:function (){
'step 0'
event.targets=game.filterPlayer(function(current){
return current!=player&&current.countCards('hej');
});
event.targets.sort(lib.sort.seat);
player.logSkill('cxyYangLie',event.targets);
for(var i=0;i<event.targets.length;i++){
player.gainPlayerCard(event.targets[i],'hej',true);
game.delay();
}
'step 1'
player.loseHp();
},
},
cxyRuiQi:{
trigger:{
global:"phaseDrawBegin2",
},
filter:function (event,player){
if(get.mode()=='identity') return get.attitude(player,event.player)>0&&!event.numFixed;
return event.player.isFriendOf(player)&&!event.numFixed;
},
logTarget:"player",
forced:true,
content:function (){
trigger.num++;
},
ai:{
threaten:2.5,
},
},
bilibili_huying:{
group:'choosejiangling',
derivation:'choosejiangling',
trigger:{player:"phaseUseBegin"},
filter:function (event,player){
return game.hasPlayer(function(current){
return current=player.storage.myjiangling;
});
},
forced:true,
content:function (){
"step 0"
player.chooseCard("交给主帅一张【杀】，或失去1点体力，令其从牌堆获得一张【杀】",{name:"sha"}).ai=function(card){
if(player.countCards('h',{name:"sha"})<2){
if(player.hp <= 2)return 2;
if(!game.hasPlayer(function(current){
return player.canUse({name:"sha"},current);
}))return 2;
return -1;
}
return 2;
};
"step 1"
if(result.bool){
var jiangling=player.storage.myjiangling;
jiangling.gain(result.cards[0],player);
player.$give(result.cards[0],jiangling);
} else {
player.loseHp();
var card=get.cardPile("sha");
jiangling.gain(card);
jiangling.$draw(card);
}
},
},
cxyJingQi:{
trigger:{
global:["gameStart","useCardAfter","respondAfter"],
},
priority:16,
direct:true,
content:function (){
event.targets=game.filterPlayer(function(current){
return get.attitude(player,current)>2;
});
event.targets.sort(lib.sort.seat);
for(var i=0;i<event.targets.length;i++){
event.targets[i].addSkill("cxyJingQi_buff");
event.targets[i].markSkillCharacter('cxyJingQi',player,'精骑','你计算与敌方角色的距离-1');
}
},
subSkill:{
buff:{
mod:{
globalFrom:function (from,to,distance){
if(game.hasPlayer(function(current){
return current.hasSkill("cxyJingQi")&&get.attitude(current,from)>2;
})){
return distance-1;
}
},
},
temp:true,
onremove:function (player){
player.unmarkSkill('cxyJingQi');
},
trigger:{
global:"dieAfter",
},
direct:true,
filter:function (event,player){
return !game.hasPlayer(function(current){
return current.hasSkill("cxyJingQi")&&get.attitude(current,player)>2;
});
},
content:function (){
player.removeSkill("cxyJingQi_buff");
},
sub:true,
},
},
},
cxyBaoYing:{
skillAnimation:true,
animationColor:"fire",
mark:true,
intro:{
content:"limited",
},
trigger:{
global:"dying",
},
priority:15,
filter:function (event,player){
if(player.storage.cxyBaoYing) return false;
if(get.mode()=='identity') return get.attitude(player,event.player)>0;
return event.player.isFriendOf(player);
},
logTarget:"player",
check:function (event,player){
return event.player.hp<1;
},
content:function (){
"step 0"
player.storage.cxyBaoYing=true;
player.awakenSkill("cxyBaoYing");
"step 1"
trigger.player.recover(1-trigger.player.hp);
},
},
cxyFengYing:{
trigger:{
global:["gameStart","useCardAfter","respondAfter"],
},
priority:15,
direct:true,
content:function (){
event.targets=game.filterPlayer(function(current){
return get.attitude(player,current)>2;
});
event.targets.sort(lib.sort.seat);
for(var i=0;i<event.targets.length;i++){
event.targets[i].addSkill("cxyFengYing_buff");
event.targets[i].markSkillCharacter('cxyFengYing',player,'凤营','若你是体力值唯一最少的角色，则敌方角色不能使用牌指定你为目标');
}
},
subSkill:{
buff:{
mod:{
targetEnabled:function (card,player,target){
if(game.hasPlayer(function(current){
return current.hasSkill("cxyFengYing")&&get.attitude(current,target)>0;
})){
if(get.attitude(player,target)<0&&!game.hasPlayer(function(current){
return current!=target&&current.hp <= target.hp;
}))return false;
}
},
},
temp:true,
onremove:function (player){
player.unmarkSkill('cxyFengYing');
},
trigger:{
global:"dieAfter",
},
direct:true,
filter:function (event,player){
return !game.hasPlayer(function(current){
return current.hasSkill("cxyFengYing")&&get.attitude(current,player)>2;
});
},
content:function (){
player.removeSkill("cxyFengYing_buff");
},
sub:true,
},
},
},
bilibili_longying:{
group:'choosejiangling',
derivation:'choosejiangling',
trigger:{player:"phaseUseBegin"},
filter:function (event,player){
return player.storage.myjiangling.isAlive()&&player.storage.myjiangling.isDamaged();
},
direct:true,
content:function (){
"step 0"
var jiangling=player.storage.myjiangling;
player.logSkill("bilibili_longying",jiangling);
player.loseHp();
"step 1"
var jiangling=player.storage.myjiangling;
jiangling.recover();
jiangling.draw();
},
},
choosejiangling:{
trigger:{global:'phaseBefore',player:'enterGame'},
filter:function(event,player){
if(game.players.length<=1) return false;
return (event.name!='phase'||game.phaseNumber==0);
},
direct:true,
content:function(){
'step 0'
player.chooseTarget('请选择你要跟随的将领',true,function(card,player,target){
return target!=player;
}).set('ai',function(target){
var att=get.attitude(_status.event.player,target);
if(att>0) return att+1;
if(att==0) return Math.random();
return att;
});
'step 1'
if(result.bool){
var target=result.targets[0];
player.line(target,'fire');
player.storage.myjiangling=target;
game.log(player,'选择了',target,'作为自己的将领');
}
}
},
bilibili_moqu:{
group:["bilibili_moqu_draw","bilibili_moqu_discard"],
subSkill:{
draw:{
trigger:{global:"phaseJieshuBegin"},
filter:function (event,player){
return player.countCards('h')<=player.hp;
},
forced:true,
content:function (){
player.draw(2);
},
sub:true,
},
discard:{
trigger:{global:"damageEnd"},
filter:function (event,player){
if(event.player==player||!player.countCards('he')) return false;
if(get.mode()=='identity') return get.attitude(player,event.player)>0;
return event.player.isFriendOf(player);
},
forced:true,
content:function (){
player.chooseToDiscard("魔躯：请弃置一张牌","he",true);
},
sub:true,
},
},
},
cxyPoLu:{
group:["cxyPoLu_sub1","cxyPoLu_sub2"],
subSkill:{
sub1:{
trigger:{player:"dieBegin"},
forced:true,
content:function (){
"step 0"
if(player.storage.cxyPoLu==undefined){
player.storage.cxyPoLu=0;
}
player.storage.cxyPoLu++;
event.targets=game.filterPlayer(function(target){
if(get.mode()=='identity') return target!=player&&get.attitude(player,target)>0;
return target!=player&&target.isFriendOf(player);
});
event.targets.sort(lib.sort.seat);
"step 1"
player.line(event.targets);
game.asyncDraw(event.targets,player.storage.cxyPoLu);
},
sub:true,
},
sub2:{
trigger:{global:"dieAfter"},
filter:function (event,player){
if(get.mode()=='identity') return event.source&&get.attitude(player,event.player)<0&&get.attitude(player,event.source)>0;
return event.source&&event.player.isEnemyOf(player)&&event.source.isFriendOf(player);
},
forced:true,
content:function (){
"step 0"
if(player.storage.cxyPoLu==undefined){
player.storage.cxyPoLu=0;
}
player.storage.cxyPoLu++;
event.targets=game.filterPlayer(function(target){
return get.attitude(player,target)>0;
});
event.targets.sort(lib.sort.seat);
"step 1"
player.line(event.targets);
game.asyncDraw(event.targets,player.storage.cxyPoLu);
},
sub:true,
},
},
},
cxyYaoWu:{
trigger:{
player:"damageBegin",
},
filter:function (event,player){
if(!event.source||!event.source.isAlive())return false;
return event.card&&event.card.name=="sha"&&get.color(event.card)=="red";
},
forced:true,
content:function (){
"step 0"
if(trigger.source.hp==trigger.source.maxHp){
trigger.source.draw();
event.finish();
} else {
trigger.source.chooseControl("回血","摸牌",function(event,player){
return "回血";
}).prompt="耀武：请选择回血或摸牌";
}
"step 1"
if(result.control=="回血"){
trigger.source.recover();
} else {
trigger.source.draw();
}
},
},
cxyYingHun:{
trigger:{player:'phaseZhunbeiBegin'},
filter:function(event,player){
return player.getDamagedHp()>0;
},
direct:true,
content:function(){
"step 0"
player.chooseTarget(get.prompt2('cxyYingHun'),function(card,player,target){
return player!=target;
}).set('ai',function(target){
var player=_status.event.player;
if(player.getDamagedHp()==1&&target.countCards('he')==0){
return 0;
}
if(get.attitude(_status.event.player,target)>0){
return 10+get.attitude(_status.event.player,target);
}
if(player.getDamagedHp()==1){
return -1;
}
return 1;
});
"step 1"
if(result.bool){
event.num=player.getDamagedHp();
player.logSkill(event.name,result.targets);
event.target=result.targets[0];
if(event.num==1){
event.directcontrol=true;
}
else{
var str1='摸'+get.cnNumber(event.num,true)+'弃一';
var str2='摸一弃'+get.cnNumber(event.num,true);
player.chooseControl(str1,str2,function(event,player){
return _status.event.choice;
}).set('choice',get.attitude(player,event.target)>0?str1:str2);
event.str=str1;
}
}
else{
event.finish();
}
"step 2"
if(event.directcontrol||result.control==event.str){
event.target.draw(event.num);
event.target.chooseToDiscard(true,'he');
}
else{
event.target.draw();
event.target.chooseToDiscard(event.num,true,'he');
}
},
ai:{
threaten:function(player,target){
if(target.hp==target.maxHp) return 0.5;
if(target.hp==1) return 2;
if(target.hp==2) return 1.5;
return 0.5;
},
maixie:true,
}
},
},
translate:{
FaDongCharacter1:"诸侯伐董·将领",
FaDongCharacter2:"诸侯伐董·随从",
FaDongCharacter3:"诸侯伐董·特殊",
"FD_lijue":"伐董李傕",
"FD_guosi":"伐董郭汜",
"FD_zhangji":"伐董张济",
"FD_fanchou":"伐董樊稠",
"FD_dongyue":"董越",
"FD_niufudongxie":"牛辅董翓",
"FD_lijue_ab":"李傕",
"FD_guosi_ab":"郭汜",
"FD_zhangji_ab":"张济",
"FD_fanchou_ab":"樊稠",
"FD_hubenjun":"虎贲军",
"FD_baolvejun":"豹掠军",
"FD_fengyaojun":"凤瑶军",
"FD_longxiangjun":"龙骧军",
"FD_feixiongjunzuo":"飞熊军左",
"FD_feixiongjunyou":"飞熊军右",
"FD_sunjian":"伐董孙坚",
"FD_huaxiong":"伐董华雄",
"FD_sunjian_ab":"孙坚",
"FD_huaxiong_ab":"华雄",
bilibili_mojun:"魔军",
cxyJieLve:"劫掠",
bilibili_tunjun:"屯军",
cxyFanGong:"反攻",
cxyJiaoXia:"狡黠",
cxyKuangXi:"狂袭",
cxyYangWu:"扬武",
cxyYangLie:"扬烈",
"cxyJiaoXia_info":"锁定技，友方角色的黑色手牌不计入手牌上限。",
cxyYangWu_info:'锁定技，准备阶段开始时，你对所有其他角色造成1点伤害，然后你失去1点体力。',
cxyYangLie_info:'锁定技，准备阶段开始时，你获得所有其他角色区域里的一张牌，然后你失去1点体力。',
"cxyJieLve_info":"锁定技，当你对一名其他角色造成伤害后，你获得其区域内的各一张牌，然后失去1点体力。",
"cxyFanGong_info":"当你成为一名敌方角色使用牌的目标且该牌结算完成后，你可以对其使用一张【杀】（无距离限制）。",
bilibili_mojun_info:"锁定技，当友方角色使用【杀】对目标角色造成伤害后，其进行判定，若结果为黑色，友方角色各摸一张牌。",
bilibili_tunjun_info:"锁定技，每轮游戏开始，若你的体力上限不为1，则你须扣减1点体力上限，然后摸X张牌（X为你的体力上限）。",
"cxyKuangXi_info":"出牌阶段，你可以失去1点体力，然后对一名其他角色造成1点伤害，若其因受到此伤害而进入濒死状态，当此濒死结算结束后，此技能于此回合内无效。",
cxyRuiQi:"锐骑",
bilibili_huying:"虎营",
cxyJingQi:"精骑",
cxyBaoYing:"豹营",
cxyFengYing:"凤营",
bilibili_longying:"龙营",
bilibili_jingqi:'精骑',
bilibili_fengying:'凤营',
bilibili_jingqi_info:'锁定技，友方角色计算与敌方角色距离-1。',
bilibili_fengying_info:'锁定技，敌方角色不能使用牌指定体力值唯一最少的友方角色。',
"cxyRuiQi_info":"锁定技，友方角色摸牌阶段额外摸一张牌",
"cxyJingQi_info":"锁定技，友方角色计算与敌方角色距离-1。",
"cxyBaoYing_info":"限定技，友方角色进入濒死状态时，你可以令其体力回复至1。",
"cxyFengYing_info":"锁定技，敌方角色不能使用牌指定体力值唯一最少的友方角色。",
bilibili_longying_info:"锁定技，出牌阶段开始时，若将领已受伤，则你失去1点体力，然后令其回复1点体力并摸一张牌。",
bilibili_huying_info:"锁定技，出牌阶段开始时，除非你将一张【杀】交给将领，否则失去1点体力并令将领随机获得牌堆中的一张【杀】。",
bilibili_longying_append:'<span style="font-family: yuanli"><li>游戏开始时，你选择一名其他角色作为你的将领</span>',
bilibili_huying_append:'<span style="font-family: yuanli"><li>游戏开始时，你选择一名其他角色作为你的将领</span>',
choosejiangling:'将领选择',
choosejiangling_info:'<br>游戏开始时，你选择一名其他角色作为你的将领。',
bilibili_moqu:"魔躯",
cxyPoLu:"破掳",
cxyYaoWu:"耀武",
cxyYingHun:"英魂",
"cxyYaoWu_info":"锁定技，当一名角色使用红色【杀】对你造成伤害时，该角色可以回复1点体力或摸一张牌。",
"cxyPoLu_info":"锁定技，友方角色杀死一名敌方角色或你死亡时，你令友方角色各摸X张牌（X为此技能发动的次数）。",
bilibili_moqu_info:"锁定技，每名角色的回合结束时，若你的手牌数不大于当前体力值，你摸两张牌；其他友方角色受到伤害后，你弃置一张牌。",
"cxyYingHun_info":"准备阶段，若你已受伤，你可以选择一名其他角色并选择一项：1.令其摸X张牌，然后弃置一张牌；2.令其摸一张牌，然后弃置X张牌。（X为你已损失的体力值）",
},
dynamicTranslate:{
bilibili_longying:function(player){
if(!game.hasPlayer(function(current){
return current=player.storage.myjiangling;
})) return '你的将领呢？';
return '锁定技，出牌阶段开始时，若'+get.translation(player.storage.myjiangling)+'已受伤，则你失去1点体力，然后令其回复1点体力并摸一张牌。';
},
bilibili_huying:function(player){
if(!game.hasPlayer(function(current){
return current=player.storage.myjiangling;
})) return '你的将领呢？';
return '锁定技，出牌阶段开始时，除非你将一张【杀】交给'+get.translation(player.storage.myjiangling)+'，否则失去1点体力并令'+get.translation(player.storage.myjiangling)+'随机获得牌堆中的一张【杀】。';
},
},
};
if(lib.device||lib.node){
for(var i in FaDongCharacter.character){FaDongCharacter.character[i][4].push('ext:活动武将/'+i+'.jpg');}
}else{for(var i in FaDongCharacter.character){FaDongCharacter.character[i][4].push('db:extension-活动武将:'+i+'.jpg');}
}
return FaDongCharacter;
});
lib.config.all.characters.push('FaDongCharacter');
if(!lib.config.characters.contains('FaDongCharacter')) lib.config.characters.remove('FaDongCharacter');
lib.translate['FaDongCharacter_character_config']='诸侯伐董';
game.import('character',function(){
var NianShouOldCharacter={
name:'NianShouOldCharacter',
connect:true,
characterSort:{
NianShouOldCharacter:{
NianShouOldCharacter1:['NS_zishu','NS_chouniu','NS_yinhu','NS_maotu','NS_chenlong','NS_sishe','NS_wuma','NS_weiyang','NS_shenhou','NS_youji','NS_xugou','NS_haizhu'],
NianShouOldCharacter2:['NS_nianshouD','NS_nianshouN','NS_nianshouE'],
},
},
character:{
"NS_zishu":["male","qun",3,["cxyZiShu","cxyChuanChengZS"],[]],
"NS_chouniu":["male","qun","1/5",["YJchouniu","cxyChuanChengCN"],[]],
"NS_yinhu":["male","qun",4,["cxyYinHu","cxyChuanChengYH"],[]],
"NS_maotu":["female","qun",3,["YJmaotu","cxyChuanChengMT"],[]],
"NS_chenlong":["male","qun",4,["YJchenlong","cxyChuanChengCL"],[]],
"NS_sishe":["female","qun",3,["cxySiShe","cxyChuanChengSS"],[]],
"NS_wuma":["male","qun",4,["YJwuma","cxyChuanChengWM"],[]],
"NS_weiyang":["female","qun",3,["cxyWeiYang","cxyChuanChengWY"],[]],
"NS_shenhou":["male","qun",3,["cxyShenHou","cxyChuanChengSH"],[]],
"NS_youji":["male","qun",3,["YJyouji","cxyChuanChengYJ"],[]],
"NS_xugou":["male","qun",4,["cxyXuGou","cxyChuanChengXG"],[]],
"NS_haizhu":["male","qun",5,["cxyHaiZhu","cxyChuanChengHZ"],[]],
"NS_nianshouD":["male","shen",0,["cxyJiYuan","cxyNianYiD","cxySuiZhongN","cxyCuiKuD"],[]],
"NS_nianshouN":["male","shen",8,["cxyJiYuan","cxyNianYi","cxySuiZhongN","cxyCuiKuN"],[]],
"NS_nianshouE":["male","shen",6,["cxyJiYuan","cxySuiZhongE","cxyCuiKuE"],[]],
},
characterIntro:{
},
characterTitle:{
},
perfectPair:{
},
skill:{
cxyChuanChengZS:{
skillAnimation:true,
animationColor:"fire",
trigger:{
player:"dieAfter",
},
filter:function (event,player){
return event.source&&event.source.isAlive()&&get.attitude(player,event.source)<0;
},
forced:true,
forceDie:true,
logSkill:"source",
content:function (){
player.line(event.source);
if(trigger.source.storage.cxyDYBMChuanChengSkill){
trigger.source.removeSkill(trigger.source.storage.cxyDYBMChuanChengSkill);
}
trigger.source.addSkill('cxyZiShu');
trigger.source.storage.cxyDYBMChuanChengSkill='cxyZiShu';
},
},
cxyChuanChengCN:{
skillAnimation:true,
animationColor:"fire",
trigger:{
player:"dieAfter",
},
filter:function (event,player){
return event.source&&event.source.isAlive()&&get.attitude(player,event.source)<0;
},
forceDie:true,
forced:true,
logSkill:"source",
content:function (){
player.line(event.source);
if(trigger.source.storage.cxyDYBMChuanChengSkill){
trigger.source.removeSkill(trigger.source.storage.cxyDYBMChuanChengSkill);
}
trigger.source.addSkill('YJchouniu');
trigger.source.storage.cxyDYBMChuanChengSkill='YJchouniu';
},
},
cxyChuanChengYH:{
skillAnimation:true,
animationColor:"thunder",
trigger:{
player:"dieAfter",
},
filter:function (event,player){
return event.source&&event.source.isAlive()&&get.attitude(player,event.source)<0;
},
forceDie:true,
forced:true,
logSkill:"source",
content:function (){
player.line(event.source);
if(trigger.source.storage.cxyDYBMChuanChengSkill){
trigger.source.removeSkill(trigger.source.storage.cxyDYBMChuanChengSkill);
}
trigger.source.addSkill('cxyYinHu');
trigger.source.storage.cxyDYBMChuanChengSkill='cxyYinHu';
},
},
cxyChuanChengMT:{
skillAnimation:true,
animationColor:"water",
trigger:{
player:"dieAfter",
},
filter:function (event,player){
return event.source&&event.source.isAlive()&&get.attitude(player,event.source)<0;
},
forceDie:true,
forced:true,
logSkill:"source",
content:function (){
player.line(event.source);
if(trigger.source.storage.cxyDYBMChuanChengSkill){
trigger.source.removeSkill(trigger.source.storage.cxyDYBMChuanChengSkill);
}
trigger.source.addSkill('YJmaotu');
trigger.source.markSkill('YJmaotu');
trigger.source.storage.cxyDYBMChuanChengSkill='YJmaotu';
},
},
cxyChuanChengSS:{
skillAnimation:true,
animationColor:"wood",
trigger:{
player:"dieAfter",
},
filter:function (event,player){
return event.source&&event.source.isAlive()&&get.attitude(player,event.source)<0;
},
forceDie:true,
forced:true,
logSkill:"source",
content:function (){
player.line(event.source);
if(trigger.source.storage.cxyDYBMChuanChengSkill){
trigger.source.removeSkill(trigger.source.storage.cxyDYBMChuanChengSkill);
}
trigger.source.addSkill('cxySiShe');
trigger.source.storage.cxyDYBMChuanChengSkill='cxySiShe';
},
},
cxyChuanChengWM:{
skillAnimation:true,
animationColor:"water",
trigger:{
player:"dieAfter",
},
filter:function (event,player){
return event.source&&event.source.isAlive()&&get.attitude(player,event.source)<0;
},
forceDie:true,
forced:true,
logSkill:"source",
content:function (){
player.line(event.source);
if(trigger.source.storage.cxyDYBMChuanChengSkill){
trigger.source.removeSkill(trigger.source.storage.cxyDYBMChuanChengSkill);
}
trigger.source.addSkill('YJwuma');
trigger.source.storage.cxyDYBMChuanChengSkill='YJwuma';
},
},
cxyChuanChengYJ:{
skillAnimation:true,
animationColor:"wood",
trigger:{
player:"dieAfter",
},
filter:function (event,player){
return event.source&&event.source.isAlive()&&get.attitude(player,event.source)<0;
},
forceDie:true,
forced:true,
logSkill:"source",
content:function (){
player.line(event.source);
if(trigger.source.storage.cxyDYBMChuanChengSkill){
trigger.source.removeSkill(trigger.source.storage.cxyDYBMChuanChengSkill);
}
trigger.source.addSkill('YJyouji');
trigger.source.storage.cxyDYBMChuanChengSkill='YJyouji';
},
},
cxyChuanChengHZ:{
skillAnimation:true,
animationColor:"thunder",
trigger:{
player:"dieAfter",
},
filter:function (event,player){
return event.source&&event.source.isAlive()&&get.attitude(player,event.source)<0;
},
forceDie:true,
forced:true,
logSkill:"source",
derivation:'YJjinzhu',
content:function (){
player.line(event.source);
if(trigger.source.storage.cxyDYBMChuanChengSkill){
trigger.source.removeSkill(trigger.source.storage.cxyDYBMChuanChengSkill);
}
trigger.source.addSkill('YJjinzhu');
trigger.source.storage.cxyDYBMChuanChengSkill='YJjinzhu';
},
},
cxyRuiShou:{
trigger:{
player:"damageBefore",
source:"damageBefore",
},
filter:function (event,player){
if(!event.source)return false;
if(event.player==player&&event.source.additionalSkills.cxyRuiShou)return false;
return event.player.group != event.source.group;
},
forced:true,
content:function (){
trigger.cancel();
},
ai:{
effect:{
target:function (card,player,target){
if(get.tag(card,'damage')){
if(player.hasSkillTag('jueqing',false,target))return [1,0];
if(player.additionalSkills.cxyRuiShou)return [1,0];
if(player.group == target.group)return [1,0];
return 'zeroplayertarget';
}
},
player:function (card,player,target){
if(get.tag(card,'damage')){
if(player.hasSkillTag('jueqing',false,target))return [1,0];
if(player.additionalSkills.cxyRuiShou)return [1,0];
if(player.group == target.group)return [1,0];
return 'zeroplayertarget';
}
},
},
},
group:"cxyRuiShou_buff",
subSkill:{
buff:{
trigger:{
global:"dieAfter",
},
filter:function (event,player){
return lib.character[event.player.name][4].contains('cxyIsXiaoShou');
},
direct:true,
content:function (){
'step 0'
event.players=game.filterPlayer(function(current){
return current!=trigger.player&&current.group == trigger.player.group;
});
event.players.sort(lib.sort.seat);
'step 1'
for(var i=0;i<event.players.length;i++){
if(event.players[i].additionalSkills.cxyRuiShou)continue;
event.players[i].addAdditionalSkill('cxyRuiShou',['cxyRuiShou_buff2']);
}
},
sub:true,
},
"buff2":{
sub:true,
},
},
},
cxyZiShu:{
audio:"ext:活动武将:true",
enable:"phaseUse",
usable:1,
selectTarget:1,
filterTarget:function (card,player,target){
return target!=player&&target.num('h')>player.num('h');
},
content:function (){
'step 0'
player.gainPlayerCard(target,'h',true);
if(!game.hasPlayer(function(current) {
return current!=player&&current.num('h')>player.num('h');
}))event.finish();
'step 1'
player.chooseTarget('子鼠：你可以获得手牌数大于你的其他角色一张手牌，你可以重复此流程直到你的手牌数为全场最多。',function(card,player,target){
return target!=player&&target.num('h')>player.num('h');
}).set('ai',function(target){
var att=get.attitude(player,target);
if(target>0){
return -1;
}
return 2+Math.random();
});
'step 2'
if(result.bool){
player.line(result.targets[0]);
player.gainPlayerCard(result.targets[0],'h',true);
} else {
event.finish();
}
'step 3'
if(game.hasPlayer(function(current) {
return current!=player&&current.num('h')>player.num('h');
}))event.goto(1);
},
ai:{
threaten:1.2,
order:1,
result:{
player:1,
target:-1,
},
},
},
YJchouniu:{
audio:"ext:活动武将:true",
trigger:{
player:"phaseEnd",
},
filter:function (event,player){
return !game.hasPlayer(function(current){
return current!=player&&current.hp <= player.hp;
});
},
forced:true,
content:function (){
player.recover();
},
 },
cxyYinHu:{
init:function (player){
player.storage.cxyYinHu=[];
player.storage.cxyYinHu_type=[]; 
},
marktext:"虎",
intro:{
name:"弃置过的牌",
content:function (storage,player){return ''},
mark:function (dialog,content,player){
if(content.length){
dialog.addSmall([content,'vcard']);
}
},
markcount:function (storage,player){
return storage.length;
},
},
audio:"ext:活动武将:true",
enable:"phaseUse",
filter:function (event,player){
return !player.hasSkill('cxyYinHu_filter')&&player.num('h');
},
selectCard:1,
filterCard:function (card,player){
return !player.storage.cxyYinHu_type.contains(get.type(card));
},
selectTarget:1,
filterTarget:function (card,player,target){
return target!=player;
},
check:function (card){return 8-get.value(card)},
contentBefore:function (){
player.storage.cxyYinHu_type.push(get.type(cards[0]));
player.storage.cxyYinHu.push([get.translation(get.type(cards[0])),'',cards[0].name]);
player.markSkill('cxyYinHu');
player.syncStorage('cxyYinHu');
},
content:function (){
'step 0'
player.addSkill('cxyYinHu_dying');
target.damage(player);
'step 1'
if(!player.hasSkill('cxyYinHu_dying')){
player.addTempSkill('cxyYinHu_filter','phaseBegin');
} else {
player.removeSkill('cxyYinHu_dying');
}
},
ai:{
threaten:1.8,
order:5,
result:{
target:function (player,target){
return get.damageEffect(target,player,target);
},
},
},
group:"cxyYinHu_mark",
subSkill:{
mark:{
trigger:{
player:"phaseUseAfter",
},
direct:true,
content:function (){
player.storage.cxyYinHu=[];
player.storage.cxyYinHu_type=[]; 
player.unmarkSkill('cxyYinHu');
},
sub:true,
},
filter:{
sub:true,
},
dying:{
trigger:{
global:"dying",
},
priority:15,
silent:true,
filter:function (event,player){
return event.reason&&event.reason.getParent().name=='cxyYinHu';
},
content:function (){
player.removeSkill('cxyYinHu_dying');
},
sub:true,
forced:true,
popup:false,
},
},
},
YJmaotu:{
mod:{
targetEnabled:function(card,player,target){
if(player!=target&&player.hp>=target.hp&&target.storage.YJmaotu>0) return false;
},
 },
audio:"ext:活动武将:true",
silent:true,
mark:true,
marktext:'卯',
intro:{
name:'卯兔',
content:function (storage,player){
var YJmarks=player.storage.YJmaotu;
var SkillIntroduction='·当前没有“卯兔”标记<br>·当前无任何效果';
if(YJmarks>0){
SkillIntroduction='·当前拥有'+YJmarks+'枚“卯兔”标记<br>·你不是体力值不小于你的其他角色使用牌的合法目标';
}
return SkillIntroduction;
},
 },
trigger:{
player:'phaseBegin',
},
filter:function (event,player){
return player.storage.YJmaotu>0;
},
forced:true,
silent:true,
content:function(){
'step 0'
 player.removeMark('YJmaotu',1);
'step 1'
if(player.unmarkSkill("YJmaotu")){
player.markSkill("YJmaotu");
 }
else{
event.goto(2);
 }
'step 2'
 player.update();
 },
 group:["YJmaotu2"],
 },
YJmaotu2:{
audio:"YJmaotu",
trigger:{
global:'dieAfter',
},
forced:true,
content:function(){
'step 0'
player.addMark('YJmaotu',1);
'step 1'
player.update();
},
},
YJchenlong:{
audio:"ext:活动武将:true",
skillAnimation:true,
animationColor:"fire",
mark:true,
intro:{
content:"limited",
},
enable:"phaseUse",
filter:function (event,player){
if(player.storage.YJchenlong)return false;
return true;
},
selectTarget:1,
filterTarget:function (card,player,target){
return target!=player;
},
contentBefore:function (){
player.storage.YJchenlong=true;
player.awakenSkill('YJchenlong');
player.addSkill('YJchenlong_temp');
},
content:function (){
'step 0'
var map={};
var list=[];
for(var i=1;i<=Math.min(5,player.hp);i++){
var cn=get.cnNumber(i,true);
map[cn]=i;
list.push(cn);
}
event.map=map;
player.chooseControl(list,function(){
return get.cnNumber(_status.event.goon,true);
}).set('prompt','请选择失去的体力数量，失去体力数将决定你造成的伤害数').set('goon',num);
'step 1'
var num=event.map[result.control]||player.hp;
player.loseHp(num);
target.damage(num,player);
},
contentAfter:function (){
if(player.hasSkill('YJchenlong_temp')) player.removeSkill('YJchenlong_temp');
},
ai:{
order:1,
result:{
target:-5,
},
},
subSkill:{
temp:{
trigger:{
player:"dying",
},
priority:Infinity,
direct:true,
firstDo:true,
content:function (){
'step 0'
player.addMark('ChenLongMark',player.maxHp-1,false);
player.recover(1-player.hp);
'step 1'
player.maxHp=1;
player.update();
'step 2'
player.removeSkill('YJchenlong_temp');
},
sub:true,
},
},
},
cxyChuanChengCL:{
skillAnimation:true,
animationColor:"wood",
trigger:{
player:"dieAfter",
},
filter:function (event,player){
return event.source&&event.source.isAlive()&&get.attitude(player,event.source)<0;
},
forceDie:true,
forced:true,
logSkill:"source",
content:function (){
player.line(event.source);
if(trigger.source.storage.cxyDYBMChuanChengSkill){
trigger.source.removeSkill(trigger.source.storage.cxyDYBMChuanChengSkill);
}
trigger.source.addSkill('YJchenlong');
trigger.source.storage.cxyDYBMChuanChengSkill='YJchenlong';
},
},
cxySiShe:{
audio:"ext:活动武将:true",
trigger:{
player:"damageEnd",
},
filter:function (event,player){
return event.source&&event.source.isAlive();
},
logSkill:"source",
check:function (event,player){
return get.damageEffect(event.source,player,player)>0;
},
content:function (){
trigger.source.damage(trigger.num,player);
},
ai:{
threaten:0.6,
maixie:true,
effect:{
target:function (card,player,target){
if(player.hasSkillTag('jueqing',false,target)) return [1,-1.5];
if(!target.hasFriend()) return;
if(get.tag(card,'damage')) return [1,0,0,-0.7];
},
},
},
},
YJwuma:{
audio:"ext:活动武将:true",
trigger:{
target:"useCardToBegin",
},
filter:function (event,player){
return event.player!=player&&['trick','delay'].contains(get.type(event.card));
},
forced:true,
content:function(){
player.draw();
},
group:["YJwuma_turn","YJwuma2"],
subSkill:{
turn:{
audio:"YJwuma",
trigger:{
player:"turnOverBefore",
},
forced:true,
content:function(){
trigger.cancel();
},
sub:true,
},
},
},
YJwuma2:{
trigger:{
player:['phaseJudgeSkipped','phaseJudgeCancelled','phaseDrawSkipped','phaseDrawCancelled','phaseUseSkipped','phaseUseCancelled','phaseDiscardSkipped','phaseDiscardCancelled']
},
forced:true,
silent:true,
content:function(){
if(trigger.name=='phaseJudgeSkipped'||trigger.name=='phaseJudgeCancelled'){
player.phaseJudge();
}
else if(trigger.name=='phaseDrawSkipped'||trigger.name=='phaseDrawCancelled'){
player.phaseDraw();
}
else if(trigger.name=='phaseUseSkipped'||trigger.name=='phaseUseCancelled'){
player.phaseUse();
}
else if(trigger.name=='phaseDiscardSkipped'||trigger.name=='phaseDiscardCancelled'){
player.phaseDiscard();
}
},
 },
cxyWeiYang:{
audio:"ext:活动武将:true",
enable:"phaseUse",
usable:1,
selectCard:[1,Infinity],
filterCard:function (card,player){
for(var i=0;i<ui.selected.cards.length;i++){
if(get.type(card)==get.type(ui.selected.cards[i]))return false;
}
return true;
},
position:"he",
complexCard:true,
selectTarget:function (){
return ui.selected.cards.length;
},
filterTarget:function (card,player,target){
return target.hp<target.maxHp;
},
check:function (card){
var player=_status.event.player;
var count=game.filterPlayer(function(current){
return current.isDamaged() && get.attitude(player,current)>2;
}).length;
if(ui.selected.cards.length >= count)return -1;
return 8-get.value(card);
},
content:function (){
target.recover(player);
},
ai:{
threaten:1.2,
order:4,
result:{
target:1,
},
},
},
cxyChuanChengWY:{
skillAnimation:true,
animationColor:"water",
trigger:{
player:"dieAfter",
},
filter:function (event,player){
return event.source&&event.source.isAlive()&&get.attitude(player,event.source)<0;
},
forceDie:true,
forced:true,
logSkill:"source",
content:function (){
player.line(event.source);
if(trigger.source.storage.cxyDYBMChuanChengSkill){
trigger.source.removeSkill(trigger.source.storage.cxyDYBMChuanChengSkill);
}
trigger.source.addSkill('cxyWeiYang');
trigger.source.storage.cxyDYBMChuanChengSkill='cxyWeiYang';
},
},
cxyShenHou:{
audio:"ext:活动武将:true",
trigger:{
target:"shaBefore",
},
content:function (){
'step 0'
player.judge(function(card){
return get.color(card)=='red'?2:0;
});
'step 1'
if(result.bool){
trigger.cancel();
}
},
ai:{
effect:{
target:function (card,player,target){
if(card.name=='sha')return [1,0.5];
},
},
},
},
cxyChuanChengSH:{
skillAnimation:true,
animationColor:"fire",
trigger:{
player:"dieAfter",
},
filter:function (event,player){
return event.source&&event.source.isAlive()&&get.attitude(player,event.source)<0;
},
forceDie:true,
forced:true,
logSkill:"source",
content:function (){
player.line(event.source);
if(trigger.source.storage.cxyDYBMChuanChengSkill){
trigger.source.removeSkill(trigger.source.storage.cxyDYBMChuanChengSkill);
}
trigger.source.addSkill('cxyShenHou');
trigger.source.storage.cxyDYBMChuanChengSkill='cxyShenHou';
},
},
YJyouji:{
audio:"ext:活动武将:true",
trigger:{
player:"phaseDrawBegin",
},
forced:true,
filter:function (event,player){
return game.roundNumber>0;
},
content:function (){
if(game.roundNumber<5) trigger.num+=game.roundNumber;
else trigger.num+=5;
},
ai:{
threaten:function(player,target){
if(game.roundNumber<5) return 1+game.roundNumber/2;
else return 3.5;
},
},
},
cxyXuGou:{
mod:{
targetInRange:function (card,player,target,now){
if(card.name=='sha'&&get.color(card)=='red') return true;
},
},
audio:"ext:活动武将:true",
trigger:{
source:"damageBegin",
},
filter:function (event,player){
return event.card&&(event.card.name=='sha'&&get.color(event.card)=='red')&&event.notLink();
},
forced:true,
content:function (){
trigger.num++;
},
ai:{
effect:{
player:function (card,player,target){
if(card.name=='sha'&&get.color(card)=='red'){
if(get.attitude(player,target)>0)return [1,-0.5];
return [1,0.8];
}
},
},
},
group:"cxyXuGou_buff",
subSkill:{
buff:{
trigger:{
target:"shaBefore",
},
filter:function (event,player){
return get.color(event.card) == 'red';
},
forced:true,
content:function (){
trigger.cancel();
},
ai:{
effect:{
target:function (card,player,target){
if(card.name=='sha'&&get.color(card)=='red')return 'zerotarget';
},
},
},
sub:true,
},
},
},
cxyChuanChengXG:{
skillAnimation:true,
animationColor:"fire",
trigger:{
player:"dieAfter",
},
filter:function (event,player){
return event.source&&event.source.isAlive()&&get.attitude(player,event.source)<0;
},
forceDie:true,
forced:true,
logSkill:"source",
content:function (){
player.line(event.source);
if(trigger.source.storage.cxyDYBMChuanChengSkill){
trigger.source.removeSkill(trigger.source.storage.cxyDYBMChuanChengSkill);
}
trigger.source.addSkill('cxyXuGou');
trigger.source.storage.cxyDYBMChuanChengSkill='cxyXuGou';
},
},
cxyHaiZhu:{
audio:"ext:活动武将:true",
trigger:{
global:"discardAfter",
},
filter:function (event,player){
if(event.player==player)return false;
for(var i=0;i<event.cards.length;i++){
if(get.color(event.cards[i])=='black'&&get.position(event.cards[i])=='d'){
return true;
}
}
return false;
},
forced:true,
content:function (){
"step 0"
if(trigger.delay==false) game.delay();
"step 1"
var cards=[];
for(var i=0;i<trigger.cards.length;i++){
if(get.color(trigger.cards[i])=='black'&&get.position(trigger.cards[i])=='d'){
cards.push(trigger.cards[i]);
}
}
if(cards.length){
player.gain(cards,'log');
player.$gain2(cards);
}
},
group:"cxyHaiZhu_buff",
subSkill:{
buff:{
trigger:{
player:"phaseBegin",
},
filter:function (event,player){
return !game.hasPlayer(function(current){
return current!=player&&current.num('h')>player.num('h');
});
},
forced:true,
content:function (){
player.loseHp();
},
sub:true,
},
},
},
YJjinzhu:{
mod:{
maxHandcard:function(player,num){
return num+=1;
},
},
audio:'ext:活动武将:true',
trigger:{player:'phaseDrawBegin2'},
forced:true,
filter:function(event,player){
return !event.numFixed;
},

content:function(){
trigger.num++;
},
group:'YJjinzhu2',
ai:{threaten:1.4},
},
YJjinzhu2:{
audio:'YJjinzhu',
skillAnimation:true,
animationColor:"fire",
trigger:{player:"dieBegin"},
forced:true,
content:function (){
'step 0'
player.removeSkill("YJjinzhu");
player.recover(3-player.hp);
'step 1'
trigger.cancel();
},
},
cxyJiYuan:{
trigger:{player:"phaseJieshuBegin"},
forced:true,
content:function (){
player.draw(Math.round(player.maxHp/2));
},
},
cxySuiZhongE:{
unique:true,
skillAnimation:true,
animationColor:"fire",
mark:true,
intro:{
content:"limited",
},
trigger:{
player:"dying",
},
filter:function (event,player){
return !player.storage.cxySuiZhongE;
},
content:function (){
'step 0'
player.storage.cxySuiZhongE=true;
player.awakenSkill('cxySuiZhongE');
player.recover(1-player.hp);
'step 1'
if(_status.dying.contains(player)){
_status.dying.remove(player);
}
'step 2'
if(_status.currentPhase!=player){
var evt=_status.event.getParent('phase');
if(evt){
game.resetSkills();
_status.event=evt;
_status.event.finish();
}
}
},
},
cxyCuiKuE:{
trigger:{global:['phaseBefore','roundStart']},
filter:function (event,player){
return game.phaseNumber==0||game.roundNumber%6==0;
},
forced:true,
content:function (){
'step 0'
player.chooseTarget('摧枯：锁定技，游戏开始时或游戏每进行6轮时，你对至多1名其他角色造成2点伤害。',function(card,player,target){
return target!=player;
},true).ai=function(target){
return 2-get.attitude(player,target);
};
'step 1'
player.line(result.targets[0]);
result.targets[0].damage(2,player);
},
},
cxyNianYi:{
mod:{
targetInRange:function (card,player,target){
return true;
},
},
trigger:{
player:"phaseBegin",
},
forced:true,
filter:function (event,player){
return player.countCards('j')>0
},
content:function (){
player.discard(player.getCards('j').randomGet());
},
},
cxySuiZhongN:{
unique:true,
skillAnimation:true,
animationColor:"fire",
mark:true,
intro:{
content:"limited",
},
trigger:{
player:"dying",
},
filter:function (event,player){
return !player.storage.cxySuiZhongN;
},
content:function (){
'step 0'
player.storage.cxySuiZhongN=true;
player.awakenSkill('cxySuiZhongN');
player.recover(1-player.hp);
event.targets=game.filterPlayer(function(current){
return current!=player;
});
event.targets.sort(lib.sort.seat);
'step 1'
for(var i=0;i<event.targets.length;i++){
event.targets[i].discard(event.targets[i].getCards('he'));
}
if(_status.currentPhase==player){
event.finish();
}
'step 2'
if(_status.dying.contains(player)){
_status.dying.remove(player);
}
'step 3'
var evt=_status.event.getParent('phase');
if(evt){
game.resetSkills();
_status.event=evt;
_status.event.finish();
}
},
},
cxyCuiKuN:{
trigger:{global:['phaseBefore','roundStart']},
filter:function (event,player){
return game.phaseNumber==0||game.roundNumber%6==0;
},
forced:true,
content:function (){
'step 0'
player.chooseTarget('摧枯：锁定技，游戏开始时或游戏每进行6轮时，你对至多两名其他角色造成2点伤害。',function(card,player,target){
return target!=player;
},[1,2],true).ai=function(target){
return 2-get.attitude(player,target);
};
'step 1'
player.line(result.targets);
for(var i=0;i<result.targets.length;i++){
result.targets[i].damage(2,player);
}
},
},
cxyNianYiD:{
mod:{
targetInRange:function (card,player,target){
return true;
},
},
trigger:{
player:"phaseBegin",
},
forced:true,
filter:function (event,player){
return player.countCards('j')>0
},
content:function (){
player.discard(player.getCards('j').randomGet());
},
group:"cxyNianYiD_buff",
subSkill:{
buff:{
forced:true,
trigger:{
global:"phaseJieshuBegin",
},
filter:function(event,player){
if(_status.currentPhase==player) return false;
var num=0;
player.getHistory('lose',function(evt){
if(evt.cards2) num+=evt.cards2.length;
});
return num>=3;
},
content:function (){
'step 0'
event.targets=game.filterPlayer(function(current){
return current!=player;
});
event.targets.sort(lib.sort.seat);
player.logSkill('cxyNianYiD',event.targets);
'step 1'
for(var i=0;i<event.targets.length;i++){
event.targets[i].damage(player);
}
},
sub:true,
},
},
},
cxyCuiKuD:{
trigger:{global:['phaseBefore','roundStart']},
filter:function (event,player){
return game.phaseNumber==0||game.roundNumber%6==0;
},
direct:true,
content:function (){
'step 0'
event.targets=game.filterPlayer(function(current){
return current!=player;
});
event.targets.sort(lib.sort.seat);
player.logSkill('cxyCuiKuD',event.targets);
'step 1'
for(var i=0;i<event.targets.length;i++){
event.targets[i].damage(Math.floor(event.targets[i].hp/2));
}
'step 2'
var num=game.filterPlayer(function(current){
return current!=player&&current.maxHp%2!=0;
}).length;
player.draw(num);
},
},
},
translate:{
NianShouOldCharacter1:"年兽2019·十二生肖",
NianShouOldCharacter2:"狗年乱斗·年兽",
"NS_zishu":"子鼠",
"NS_chouniu":"丑牛",
"NS_yinhu":"寅虎",
"NS_maotu":"卯兔",
"NS_chenlong":"辰龙",
"NS_sishe":"巳蛇",
"NS_wuma":"午马",
"NS_weiyang":"未羊",
"NS_shenhou":"申猴",
"NS_youji":"酉鸡",
"NS_xugou":"戌狗",
"NS_haizhu":"亥猪",
"NS_nianshouE":"年兽",
"NS_nianshouN":"年兽",
"NS_nianshouD":"年兽",
cxyRuiShou:"瑞兽",
cxyZiShu:"子鼠",
YJchouniu:"丑牛",
cxyYinHu:"寅虎",
YJmaotu:"卯兔",
YJmaotu2:"卯兔",
YJchenlong:"辰龙",
cxySiShe:"巳蛇",
YJwuma:"午马",
cxyWeiYang:"未羊",
cxyShenHou:"申猴",
YJyouji:"酉鸡",
cxyXuGou:"戌狗",
cxyHaiZhu:"亥猪",
YJjinzhu:"金猪",
YJjinzhu2:"金猪",
cxyChuanChengZS:"传承",
cxyChuanChengCN:"传承",
cxyChuanChengYH:"传承",
cxyChuanChengMT:"传承",
cxyChuanChengCL:"传承",
cxyChuanChengSS:"传承",
cxyChuanChengWM:"传承",
cxyChuanChengWY:"传承",
cxyChuanChengSH:"传承",
cxyChuanChengYJ:"传承",
cxyChuanChengXG:"传承",
cxyChuanChengHZ:"传承",
"cxyRuiShou_info":" 锁定技，你只会受到与你势力相同的角色造成的伤害且你只能对其造成伤害；一名生肖死亡后，与该生肖势力相同的角色也能对你造成伤害。",
"cxyZiShu_info":"出牌阶段限一次，你可以获得手牌数大于你的其他角色一张手牌，你可以重复此流程直到你的手牌数为全场最多。",
"YJchouniu_info":"锁定技，结束阶段，若你的体力值为全场最小，则你回复1点体力。",
"cxyYinHu_info":"出牌阶段，你可以弃置一张手牌（以此法弃置的牌须类型各不相同），然后对一名其他角色造成1点伤害；若你以此法导致一名角色进入濒死状态，则此技能失效直到回合结束。",
"YJmaotu_info":"锁定技，其他角色死亡后，你获得一枚“卯兔”标记。若你拥有“卯兔”标记，则你不是体力值大于等于你的其他角色使用牌的合法目标。回合开始时，你失去一枚“卯兔”标记。",
"YJmaotu2_info":"",
"YJchenlong_info":"限定技，出牌阶段，你可以失去任意点体力（至多为5），然后对一名其他角色造成等量的伤害。若你以此法进入濒死状态，则你将体力值回复至1，然后将体力上限改为1。",
"cxyChuanChengCL_info":"锁定技，你令杀死你的敌方角色获得技能〖辰龙〗，若其已拥有因〖传承〗获得的技能，则改为替换之前的技能。",
"cxySiShe_info":"当你受到伤害后，你可以对伤害来源造成等量伤害。",
"YJwuma_info":"锁定技，你不能被翻面；你的阶段不会被跳过；当你成为其他角色使用锦囊牌的目标后，你摸一张牌。",
"cxyWeiYang_info":"出牌阶段限一次，你可以弃置任意张不同类型的牌，然后令至多等量角色回复1点体力。",
"cxyChuanChengWY_info":"锁定技，你令杀死你的敌方角色获得技能〖未羊〗，若其已拥有因〖传承〗获得的技能，则改为替换之前的技能。",
"cxyShenHou_info":"当你成为【杀】的目标时，你可以进行判定，若结果为红色，则此【杀】对你无效。",
"cxyChuanChengSH_info":"锁定技，你令杀死你的敌方角色获得技能〖申猴〗，若其已拥有因〖传承〗获得的技能，则改为替换之前的技能。",
"YJyouji_info":"锁定技，摸牌阶段，你多摸X张牌（X为游戏轮数且X至多为5）。",
"cxyXuGou_info":"锁定技，红色【杀】对你无效；你使用红色【杀】无距离限制且造成伤害+1。",
"cxyChuanChengXG_info":"锁定技，你令杀死你的敌方角色获得技能〖戌狗〗，若其已拥有因〖传承〗获得的技能，则改为替换之前的技能。",
"cxyChuanChengZS_info":"锁定技，你令杀死你的敌方角色获得技能〖子鼠〗，若其已拥有因〖传承〗获得的技能，则改为替换之前的技能。",
"cxyChuanChengCN_info":"锁定技，你令杀死你的敌方角色获得技能〖丑牛〗，若其已拥有因〖传承〗获得的技能，则改为替换之前的技能。",
"cxyChuanChengYH_info":"锁定技，你令杀死你的敌方角色获得技能〖寅虎〗，若其已拥有因〖传承〗获得的技能，则改为替换之前的技能。",
"cxyChuanChengMT_info":"锁定技，你令杀死你的敌方角色获得技能〖卯兔〗，若其已拥有因〖传承〗获得的技能，则改为替换之前的技能。",
"cxyChuanChengSS_info":"锁定技，你令杀死你的敌方角色获得技能〖巳蛇〗，若其已拥有因〖传承〗获得的技能，则改为替换之前的技能。",
"cxyChuanChengWM_info":"锁定技，你令杀死你的敌方角色获得技能〖午马〗，若其已拥有因〖传承〗获得的技能，则改为替换之前的技能。",
"cxyChuanChengYJ_info":"锁定技，你令杀死你的敌方角色获得技能〖酉鸡〗，若其已拥有因〖传承〗获得的技能，则改为替换之前的技能。",
"cxyChuanChengHZ_info":"锁定技，你令杀死你的敌方角色获得技能〖金猪〗，若其已拥有因〖传承〗获得的技能，则改为替换之前的技能。",
"cxyHaiZhu_info":"锁定技，当其他角色的黑色牌因弃置而置入弃牌堆后，你获得这些牌；准备阶段开始时，若你的手牌数为场上最多的或之一，你失去1点体力。",
"YJjinzhu_info":"锁定技，你的手牌上限和额定摸牌数+1。锁定技，当你死亡时，你失去技能〖金猪〗，复活并将体力回复至三点(其他区域的牌均不会发生改变)。",
"YJjinzhu2_info":"",
cxyJiYuan:"汲源",
cxySuiZhongN:"岁终",
cxySuiZhongE:"岁终",
cxyCuiKuN:"摧枯",
cxyCuiKuE:"摧枯",
cxyCuiKuD:"摧枯",
cxyNianYi:"年裔",
cxyNianYiD:"年裔",
"dying_info":"",
"cxyJiYuan_info":"锁定技，结束阶段，你摸X张牌（X为体力上限的一半，向上取整）。",
"cxySuiZhongN_info":"限定技，当你处于濒死状态时，你可以将体力值回复至1，然后令其他角色弃置所有牌，若当前回合角色不为你，则结束当前回合。",
"cxySuiZhongE_info":"限定技，当你处于濒死状态时，你可以将体力值回复至1，若当前回合角色不为你，则结束当前回合。",
"cxyCuiKuN_info":"锁定技，游戏开始时或游戏每进行6轮时，你对至多2名其他角色造成2点伤害。",
"cxyCuiKuE_info":"锁定技，游戏开始时或游戏每进行6轮时，你对至多1名其他角色造成2点伤害。",
"cxyCuiKuD_info":"锁定技，游戏开始时或游戏每进行6轮时，你对所有其他角色造成X点伤害（X为其体力值一半，向下取整），然后每有一名体力上限为奇数的其他角色，你便摸一张牌。",
"cxyNianYi_info":"锁定技，你使用牌无距离限制。准备阶段开始时，你随机弃置你判定区内的一张牌。",
"cxyNianYiD_info":" 锁定技，你使用牌无距离限制。准备阶段开始时，你随机弃置你判定区内的一张牌。一名其他角色回合结束后，若你于该回合内失去的牌不少于三张，则你对所有其他角色造成1点伤害。",
},
};
if(lib.device||lib.node){
for(var i in NianShouOldCharacter.character){NianShouOldCharacter.character[i][4].push('ext:活动武将/'+i+'.jpg');}
}else{for(var i in NianShouOldCharacter.character){NianShouOldCharacter.character[i][4].push('db:extension-活动武将:'+i+'.jpg');}
}
return NianShouOldCharacter;
});
lib.config.all.characters.push('NianShouOldCharacter');
if(!lib.config.characters.contains('NianShouOldCharacter')) lib.config.characters.remove('NianShouOldCharacter');
lib.translate['NianShouOldCharacter_character_config']='生肖&年兽';
/*
game.import('character',function(){
var qianlizoudanjicharacter={
name:'qianlizoudanjicharacter',
connect:true,
characterSort:{
},
character:{
DJ_caiyang:['male','qun',4,['yinka','zhuixi','flappybird'],['zhenshen']],
DJ_huban:['male','qun',4,['yinka','flappybird'],['zhenshen']],
DJ_pujing:['male','qun',4,['yinka','flappybird'],['zhenshen']],
},
characterIntro:{
},
characterTitle:{
},
perfectPair:{
},
skill:{
DanJiHelp:{
unique:true,
trigger:{
global:'gameDrawAfter',
},
charlotte:true,
overmove:true,
direct:true,
content:function (){
 'step 0'
 var pos=2;
 var fellow=game.addFellow(pos,'DJ_pujing');
 fellow.style.left='calc(50% + 200px)';
 fellow.style.top='calc(50% - 19px)';
// fellow.style.zoom = '0.8';
 fellow.classList.add('minskin');
 fellow.addSkill('DanJidelete');
 fellow.side=player.side;
 fellow.identity=player.identity;
if(fellow.identity=='zhu'&&get.mode()!='single'&&['dianjiang2']) fellow.identity='zhong';
// fellow.setIdentity('护卫');
 fellow.draw(3);
 fellow.showIdentity();
// fellow.node.identity.dataset.color=fellow.identity;
 var fellow1=game.addFellow(pos,'DJ_huban');
 fellow1.style.left='calc(50% - 300px)';
 fellow1.style.top='calc(50% - 19px)';
// fellow1.style.zoom = '0.8';
 fellow1.classList.add('minskin');
 fellow1.addSkill('DanJidelete');
 fellow1.side=player.side;
 fellow1.identity=player.identity;
if(fellow1.identity=='zhu'&&get.mode()!='single'&&['dianjiang2']) fellow1.identity='zhong';
// fellow.setIdentity('护卫');
 fellow1.showIdentity();
// fellow1.node.identity.dataset.color=fellow1.identity;
 'step 1'
player.awakenSkill('DanJiHelp');
},
ai:{isLuckyStar:true},
intro:{
content:'limited',
},
},
DanJidelete:{
group:['undist'],
trigger:{
player:'dying',
},
firstDo:true,
forceDie:true,
direct:true,
unique:true,
charlotte:true,
overmove:true,
content:function(){
player.delete();
player.die();
},
},
},
translate:{
"DJ_caiyang":"蔡阳",
"DJ_huban":"胡班",
"DJ_pujing":"普净",
},
};
if(lib.device||lib.node){
for(var i in qianlizoudanjicharacter.character){qianlizoudanjicharacter.character[i][4].push('ext:活动武将/'+i+'.jpg');}
}else{
for(var i in qianlizoudanjicharacter.character){qianlizoudanjicharacter.character[i][4].push('db:extension-活动武将:'+i+'.jpg');}
}
return qianlizoudanjicharacter;
});
lib.config.all.characters.push('qianlizoudanjicharacter');
if(!lib.config.characters.contains('qianlizoudanjicharacter')) lib.config.characters.remove('qianlizoudanjicharacter');
lib.translate['qianlizoudanjicharacter_character_config']='千里走单骑';
game.import('character',function(){
var decadeQiHuan={
name:'decadeQiHuan',
connect:true,
characterSort:{
},
character:{
QH_fengxu:['male','qun',10,['QH_huanshi','QH_leixi','QH_huangjie'],['die_audio']],
QH_duangui:['male','qun',10,['QH_huanshi','QH_suxi','QH_chibi'],['die_audio']],
QH_caojie:['male','qun',15,['QH_huanshi','QH_huangbao'],['die_audio']],
QH_houlan:['male','qun',6,['QH_huanshi','QH_lancai','QH_jingshe'],['die_audio']],
QH_jianshuo:['male','qun',20,['QH_huanshi','QH_jibing'],['die_audio']],
QH_chengkuang:['male','qun',4,['QH_huanshi','QH_andu','QH_biri'],['die_audio']],
QH_xiayun:['male','qun',8,['QH_huanshi','QH_jifu'],['die_audio']],
QH_guosheng:['male','qun',10,['QH_huanshi','QH_heimu','QH_heizhi'],['die_audio']],
QH1_zhangrang:['male','qun',40,[],['die_audio','ext:活动武将/QH_zhangrang.jpg']],
QH2_zhangrang:['male','qun',60,[],['die_audio','unseen','ext:活动武将/QH_zhangrang.jpg']],
QH3_zhangrang:['male','qun',80,[],['die_audio','unseen','ext:活动武将/QH_zhangrang.jpg']],
QH1_zhaozhong:['male','qun',30,[],['die_audio','ext:活动武将/QH_zhaozhong.jpg']],
QH2_zhaozhong:['male','qun',45,[],['die_audio','unseen','ext:活动武将/QH_zhaozhong.jpg']],
QH3_zhaozhong:['male','qun',60,[],['die_audio','unseen','ext:活动武将/QH_zhaozhong.jpg']],
QH1_hetaihou:['female','qun',30,[],['die_audio','ext:活动武将/QH_hetaihou.jpg']],
QH2_hetaihou:['female','qun',45,[],['die_audio','unseen','ext:活动武将/QH_hetaihou.jpg']],
QH3_hetaihou:['female','qun',60,[],['die_audio','unseen','ext:活动武将/QH_hetaihou.jpg']],
QH1_hejin:['male','qun',40,[],['die_audio','ext:活动武将/QH_hejin.jpg']],
QH2_hejin:['male','qun',60,[],['die_audio','unseen','ext:活动武将/QH_hejin.jpg']],
QH3_hejin:['male','qun',80,[],['die_audio','unseen','ext:活动武将/QH_hejin.jpg']],
},
characterIntro:{
},
skill:{
},
translate:{
QH_fengxu:'封谞',
QH_duangui:'段珪',
QH_caojie:'曹节',
QH_houlan:'候览',
QH_jianshuo:'蹇硕',
QH_chengkuang:'程旷',
QH_xiayun:'夏恽',
QH_guosheng:'郭胜',
QH1_zhangrang:'张让',
QH2_zhangrang:'张让',
QH3_zhangrang:'张让',
QH1_zhaozhong:'赵忠',
QH2_zhaozhong:'赵忠',
QH3_zhaozhong:'赵忠',
QH1_hetaihou:'何太后',
QH2_hetaihou:'何太后',
QH3_hetaihou:'何太后',
QH1_hejin:'何进',
QH2_hejin:'何进',
QH3_hejin:'何进',
QH_huanshi:'宦势',
QH_huanshi_info:'锁定技，当你成为延时锦囊牌的目标后，进行一次判定，若结果为黑色，将此牌置入弃牌堆。',
QH_leixi:'雷袭',
QH_leixi_info:'当你于回合外使用或打出【杀】或【闪】时，你可以选择一名其他角色，令其进行判定，若结果为红色，弃置该角色两张牌；若结果为黑色，对其造成2点伤害。',
QH_huangjie:'黄结',
QH_huangjie_info:'锁定技，出牌阶段，你使用一张牌时，若此牌目标不是敌方角色，你摸一张牌。',
QH_suxi:'速袭',
QH_suxi_info:'当你造成伤害后，你可以弃置一张牌令受伤角色的上家或下家失去1点体力。',
QH_chibi:'持匕',
QH_chibi_info:'锁定技，出牌阶段结束时，若你手牌中没有杀，你从牌堆中获得两张【杀】。（没有不会获得，牌堆中若仅有一张则只获得一张）',
QH_huangbao:'荒暴',
QH_huangbao_info:'锁定技，出牌阶段开始时，视为对所有敌方角色使用一张【南蛮入侵】。若此【南蛮入侵】没有造成伤害，你摸三张牌。',
QH_lancai:'揽财',
QH_lancai_info:'锁定技，出牌阶段开始时，你将手牌摸至体力上限。',
QH_jingshe:'惊蛇',
QH_jingshe_info:'锁定技，当你受到伤害后，若此时为敌方角色的回合，该角色不能使用牌直到出牌阶段结束。若此伤害超过1点，你回复1点体力。',
QH_jibing:'集兵',
QH_jibing_info:'锁定技，回合结束时，你减少1点体力上限；当你的体力上限减少时，你对随机一名敌方角色造成1点伤害。',
QH_andu:'暗毒',
QH_andu_info:'锁定技，敌方角色的回合结束时，若其体力值小于等于你，你对其造成1点伤害。',
QH_biri:'蔽日',
QH_biri_info:'锁定技，当你受到敌方角色造成的伤害时，该角色弃置所有手牌；若其弃置的手牌数小于你的体力值，此伤害-1。',
QH_jifu:'嫉富',
QH_jifu_info:'锁定技，准备阶段，你获得手牌数大于你的敌方角色一张手牌。重复此步骤直到所有敌方角色手牌数都不大于你。',
QH_heimu:'黑幕',
QH_heimu_info:'锁定技，敌方角色使用黑色牌时，你摸一张牌。你使用黑色牌时，敌方随机一名角色随机弃置一张牌。',
QH_heizhi:'黑邸',
QH_heizhi_info:'锁定技，你的判定牌生效时，若结果为黑色，你对所有敌方角色造成1点伤害。',
},
};
if(lib.device||lib.node){
for(var i in decadeQiHuan.character){decadeQiHuan.character[i][4].push('ext:活动武将/'+i+'.jpg');}
}else{
for(var i in decadeQiHuan.character){decadeQiHuan.character[i][4].push('db:extension-活动武将:'+i+'.jpg');}
}
return decadeQiHuan;
});
lib.config.all.characters.push('decadeQiHuan');
if(lib.config.characters.contains('decadeQiHuan')) lib.config.characters.remove('decadeQiHuan');//还没做呢，先关闭一段时间[滑稽+狗头保命]
if(!lib.config.characters.contains('decadeQiHuan')) lib.config.characters.remove('decadeQiHuan');
lib.translate['decadeQiHuan_character_config']='戚宦之争<br>(敬请期待)';
*/
//合纵抗秦
game.import('character',function(){
var hezongkangqincharacter={
name:'hezongkangqincharacter',
connect:true,
character:{
daqin_zhangyi:['male','daqin',4,['bilibili_lianheng','zhangyi_xichu','zhangyi_xiongbian','zhangyi_qiaoshe'],['die_audio']],
daqin_zhaogao:['male','daqin',3,['zhaogao_zhilu','bilibili_gaizhao','bilibili_haizhong','zhaogao_yuanli'],[]],
daqin_yingzheng:['male','daqin',4,['bilibili_yitong','yingzheng_shihuang','yingzheng_zulong','bilibili_fenshu'],['zhu']],
daqin_shangyang:['male','daqin',4,['shangyang_bianfa','shangyang_limu','bilibili_kencao'],[]],
//daqin_nushou:['male','daqin',3,['daqin_tongpao','nushou_jinnu'],[]],
//daqin_qibing:['male','daqin',3,['daqin_tongpao','qibing_changjian','qibing_liangju'],[]],
//daqin_bubing:['male','daqin',4,['daqin_tongpao','bubing_fangzhen','bubing_changbing'],[]],
daqin_baiqi:['male','daqin',4,['bilibili_wuan','baiqi_shashen','bilibili_fachu','baiqi_changsheng'],[]],
daqin_miyue:['female','daqin',3,['bilibili_zhangzheng','miyue_taihou','miyue_youmie','miyue_yintui'],[]],
daqin_lvbuwei:['male','daqin',3,['lvbuwei_jugu','lvbuwei_qihuo','lvbuwei_chunqiu','lvbuwei_baixiang'],[]],
daqin_zhaoji:['female','daqin',3,['zhaoji_shanwu','zhaoji_daqi','zhaoji_xianji','zhaoji_huoluan'],[]],
},
characterIntro:{
daqin_shangyang:'商鞅（约公元前395年－公元前338年），姬姓，公孙氏，名鞅，卫国人。战国时期政治家、改革家、思想家，法家代表人物，卫国国君后代。商鞅辅佐秦孝公，积极实行变法，使秦国成为富裕强大的国家，史称“商鞅变法”。政治上，改革了秦国户籍、军功爵位、土地制度、行政区划、税收、度量衡以及民风民俗，并制定了严酷的法律；经济上，主张重农抑商、奖励耕战；军事上，统率秦军收复了河西之地，赐予商于十五邑，号为商君，史称为商鞅。公元前338年，秦孝公逝世后，商鞅被公子虔指为谋反，战败死于彤地，尸身车裂，全家被杀。',
daqin_zhangyi:'张仪（？－前309年），姬姓，张氏，名仪，魏国安邑（今山西万荣县王显乡张仪村）人。魏国贵族后裔，战国时期著名的纵横家、外交家和谋略家。早年入于鬼谷子门下，学习纵横之术。出山之后，首创“连横”的外交策略，游说六国入秦。得到秦惠王赏识，封为相国，奉命出使游说各国，以「横」破“纵”，促使各国亲善秦国，受封为武信君。公元前310年，秦惠王死后，秦武王继位。张仪失去宠信，出逃魏国，担任相国，次年去世。',
daqin_miyue:'宣太后（？―前265年），芈（mǐ）姓，出生地楚国丹阳（在今湖北省），又称芈八子、秦宣太后。战国时期秦国王太后，秦惠文王之妾，秦昭襄王之母。秦昭襄王即位之初，宣太后以太后之位主政，执政期间，攻灭义渠国，一举灭亡了秦国的西部大患。死后葬于芷阳骊山。',
daqin_baiqi:'白起（？—公元前257年），秦国白氏，名起，郿邑（今陕西眉县常兴镇白家村）人。战国时期杰出的军事家、“兵家”代表人物。熟知兵法，善于用兵，交好秦宣太后，和穰侯魏冉的关系很好。辅佐秦昭王，屡立战功。伊阕之战，大破魏韩联军；伐楚之战，攻陷楚都郢城。长平之战，重创赵国主力。担任秦军主将30多年，攻城70余座，为秦国统一六国做出了巨大的贡献，受封为武安君。功高震主，得罪应侯，接连贬官。秦昭襄王五十年（前257年），赐死于杜邮。作为中国历史上继孙武、吴起之后又一个杰出的军事家、统帅，白起与廉颇、李牧、王翦并称为战国四大名将，并且被列为战国四大名将之首，名列武庙十哲。',
daqin_zhaoji:'赵姬（？―公元前228年），秦始皇生母，秦庄襄王的王后，赵国邯郸人。一说原为吕不韦姬妾，被吕不韦献给秦国质子异人，一说为赵豪家女，于公元前259年生秦始皇嬴政，异人立其为夫人。其子嬴政即位为秦王，她成为王太后，秦始皇统一天下，追尊其为帝太后，与秦庄襄王合葬于芷阳。',
daqin_lvbuwei:'吕不韦（？—前235年），姜姓，吕氏，名不韦，卫国濮阳（今河南省滑县）人。战国末年商人、政治家、思想家，秦国丞相，姜子牙23世孙。早年经商于阳翟，扶植秦国质子异人回国即位，成为秦庄襄王，拜为相国，封文信侯，食邑河南洛阳十万户。带兵攻取周国、赵国、卫国土地，分别设立三川郡、太原郡、东郡，对秦王嬴政兼并六国的事业作出重大贡献。庄襄王去世后，迎立太子嬴政即位，拜为相邦，尊称“仲父”，权倾天下。受到嫪毐集团叛乱牵连，罢相归国，全家流放蜀郡，途中饮鸩自尽。主持编纂《吕氏春秋》（又名《吕览》），包含八览、六论、十二纪，汇合了先秦诸子各派学说，“兼儒墨，合名法”，史称“杂家”。',
daqin_yingzheng:'秦始皇嬴政（前259年—前210年），嬴姓，赵氏，名政（一说名“正”），又称赵政、祖龙等。秦庄襄王和赵姬之子。中国古代政治家、战略家、改革家，首次完成中国大一统的政治人物，也是中国第一个称皇帝的君主。秦始皇出生于赵国都城邯郸（今邯郸），后回到秦国。前247年，13岁时即王位。前238年，平定长信侯嫪毐的叛乱，之后又除掉权臣吕不韦，开始亲政。重用李斯、尉缭，自前230年至前221年，先后灭韩、赵、魏、楚、燕、齐六国，完成了统一中国大业，建立起一个中央集权的统一的多民族国家——秦朝。秦始皇认为自己的功劳胜过之前的三皇五帝，采用三皇之“皇”、五帝之“帝”构成“皇帝”的称号，是中国历史上第一个使用“皇帝”称号的君主，所以自称“始皇帝”。同时在中央实行三公九卿，管理国家大事。地方上废除分封制，代以郡县制，同时书同文，车同轨，统一度量衡。对外北击匈奴，南征百越，修筑万里长城，修筑灵渠，沟通水系。但是到了晚年，求仙梦想长生，苛政虐民，扼杀民智，动摇了秦朝统治的根基，前210年，秦始皇东巡途中驾崩于邢台沙丘。秦始皇奠定中国两千余年政治制度基本格局，被明代思想家李贽誉为“千古一帝”。',
daqin_zhaogao:'赵高（？－前207年），嬴姓，赵氏。秦朝二世皇帝时丞相，任中车府令，兼行符玺令事，“管事二十余年”。秦始皇死后，赵高发动沙丘政变，他与丞相李斯合谋伪造诏书，逼秦始皇长子扶苏自杀，另立始皇幼子胡亥为帝，是为秦二世，并自任郎中令。他在任职期间独揽大权，结党营私，征役更加繁重，行政更加苛暴。公元前208年又设计害死李斯，继之为秦朝丞相。第三年他迫秦二世自杀，另立子婴为秦王。不久被子婴设计杀掉，诛夷三族。',
},
perfectPair:{
},
skill:{
bilibili_gaizhao:{
forbid:['identity'],
audio:'zhaogao_gaizhao',
trigger:{target:'useCardToTarget'},
direct:true,
filter:function(event,player){
if(get.info(event.card).multitarget||get.mode()=='identity') return false;
var type=get.type(event.card);
if(type!='basic'&&type!='trick') return false;
return game.hasPlayer(function(current){
return current!=player&&((get.mode()=='identity'&&get.attitude(player,current)>0&&get.attitude(current,player)>0)||(get.mode()!='identity'&&current.isFriendOf(player)))&&!event.targets.contains(current);
});
},
content:function(){
'step 0'
player.chooseTarget(get.prompt('bilibili_gaizhao'),'将'+get.translation(trigger.card)+'转移给其他友方角色',function(card,player,target){
var trigger=_status.event.getTrigger();
return ((get.mode()=='identity'&&get.attitude(player,target)>0&&get.attitude(target,player)>0)||(get.mode()!='identity'&&target.isFriendOf(player)))&&!trigger.targets.contains(target)&&lib.filter.targetEnabled2(trigger.card,trigger.player,target);
}).set('rawEffect',get.effect(player,trigger.card,trigger.player,player)).ai=function(target){
var trigger=_status.event.getTrigger();
return 0.1+get.effect(target,trigger.card,trigger.player,_status.event.player)-_status.event.rawEffect;
};
'step 1'
if(result.bool){
var target=result.targets[0];
player.logSkill(event.name,target);
trigger.targets[trigger.targets.indexOf(player)]=target;
}
},
},
bilibili_haizhong:{
audio:'zhaogao_haizhong',
marktext:'害',
intro:{content:'mark',name:'害忠',name2:'害'},
trigger:{global:'recoverAfter'},
filter:function(event,player){
return event.player!=player;
},
check:function (event,player){
if(get.attitude(player,event.player)<0) return true;
return false;
},
logTarget:'player',
content:function(){
'step 0'
if(!trigger.player.storage[event.name]) trigger.player.storage[event.name]=0;
event.num=Math.max(1,trigger.player.storage[event.name]);
trigger.player.storage[event.name]++;
trigger.player.markSkill(event.name);
trigger.player.chooseToDiscard('害忠：弃置一张红色牌，或受到'+event.num+'点伤害',{color:'red'}).ai=lib.skill.shangyang_bianfa.check;
'step 1'
if(!result.bool) trigger.player.damage(num);
},
},
bilibili_zhangzheng:{
audio:'miyue_zhangzheng',
trigger:{player:'phaseZhunbeiBegin'},
direct:true,
content:function (){
'step 0'
player.chooseTarget(get.prompt2('bilibili_zhangzheng'),lib.filter.notMe,[1,Math.ceil(game.players.length/2)]).set('ai',function(current){
var player=_status.event.player;
return -get.attitude(player,current);
});
'step 1'
if(!result.bool) event.finish();
result.targets.sortBySeat();
player.logSkill('bilibili_zhangzheng',result.targets);
event.players=result.targets;
'step 2'
if(event.players.length){
event.current=event.players.shift();
if(event.current.countCards('h')){
event.current.chooseToDiscard('h','弃置一张手牌或失去一点体力').set('ai',function(card){
return 7-get.value(card);
});
event.tempbool=false;
}
else{
event.tempbool=true;
}
}
else{
event.finish();
}
'step 3'
if(event.tempbool||result.bool==false){
event.current.loseHp();
}
event.goto(2);
},
},
bilibili_wuan:{
audio:'baiqi_wuan',
firstDo:true,
trigger:{player:'useCard1'},
forced:true,
filter:function(event,player){
return !event.audioed&&event.card.name=='sha'&&player.countUsed('sha',true)>1&&event.getParent().type=='phase';
},
content:function(){
trigger.audioed=true;
},
group:'bilibili_wuan_buff',
subSkill:{
buff:{
mod:{
cardUsable:function (card,player,num){
if(card.name=='sha') return num+1;
},
},
sub:true,
},
},
},
bilibili_fachu:{
audio:'baiqi_fachu',
trigger:{global:'dying'},
filter:function (event,player){
return player.isAlive()&&event.source==player&&event.player!=player&&event.player.countDisabled()<5;
},
check:function (event,player){
return -get.attitude(player,event.player);
},
content:function (){
var list=[];
for(var i=1;i<5;i++){
if(trigger.player.isDisabled(i)) continue;
list.push('equip'+i);
}
if(list.length){
player.line(trigger.player);
trigger.player.disableEquip(list.randomGet());
}
},
},
bilibili_fenshu:{
audio:'yingzheng_fenshu',
trigger:{global:'useCard'},
filter:function (event,player){
if(player.hasSkill('bilibili_fenshu_silent')) return false;
if(event.player==_status.currentPhase&&event.player!=player&&get.type(event.card)=='trick') return true;
return false;
},
direct:true,
content:function (){
'step 0'
player.addTempSkill('bilibili_fenshu_silent');
player.chooseBool(get.prompt2('bilibili_fenshu')).ai=function(){
var player=_status.event.player;
if(get.attitude(player,trigger.player)<0) return true;
return false;
};
'step 1'
if(result.bool){
player.logSkill('bilibili_fenshu',trigger.player);
trigger.cancel();
game.delay();
game.broadcastAll(ui.clear);
}
},
subSkill:{
silent:{charlotte:true},
},
},
bilibili_kencao:{
audio:'shangyang_kencao',
marktext:'功',
intro:{content:'mark',name:'垦草',name2:'功'},
trigger:{global:'damageAfter'},
filter:function (event,player){
return event.source&&event.source.isAlive();
},
check:function (event,player){
if(get.attitude(player,event.source)>0) return true;
return false;
},
logTarget:'source',
content:function (){
trigger.source.addMark('bilibili_kencao',trigger.num);
if(trigger.source.countMark('bilibili_kencao')>=3){
trigger.source.removeMark('bilibili_kencao',trigger.source.countMark('bilibili_kencao'));
trigger.source.gainMaxHp();
trigger.source.recover();
}
},
},
bilibili_yitong:{
audio:'yingzheng_yitong',
mod:{
targetInRange:function (card){
if(card.name=='sha'||card.name=='shunshou') return true;
},
},
trigger:{player:['useCard2','useCardToPlayer']},
direct:true,
filter:function(event,player){
if(player.hasSkill('bilibili_yitong_silent')) return false;
if(!['shunshou','guohe','sha','huogong'].contains(event.card.name)) return false;
return game.hasPlayer(function(current){
return current!=player&&!event.targets.contains(current);
});
},
content:function(){
'step 0'
player.addTempSkill('bilibili_yitong_silent');
var num=Math.min(3,game.countPlayer(function(current){
return !trigger.targets.contains(current)&&lib.filter.filterTarget(trigger.card,player,current);
}));
player.chooseTarget(get.prompt('bilibili_yitong'),'为'+get.translation(trigger.card)+'增加至多'+get.translation(num)+'个目标',[1,num],function(card,player,target){
var evt=_status.event.getTrigger();
return !evt.targets.contains(target)&&lib.filter.filterTarget(evt.card,player,target);
}).set('ai',function(target){
var evt=_status.event.getTrigger(),eff=get.effect(target,evt.card,evt.player,evt.player);
return eff;
});
'step 1'
if(result.bool){
if(player!=game.me&&!player.isOnline()) game.delayx();
event.targets=result.targets;
}
else event.finish();
'step 2'
player.logSkill('bilibili_yitong',targets);
trigger.targets.addArray(targets);
},
subSkill:{
silent:{
trigger:{player:'useCardAfter'},
direct:true,
charlotte:true,
unique:true,
lastDo:true,
content:function(){
player.removeSkill('bilibili_yitong_silent');
},
}
}
},
bilibili_lianheng:{
audio:'zhangyi_lianheng',
trigger:{player:'phaseBegin'},
direct:true,
content:function(){
var list=game.filterPlayer(function(current){
current.removeSkill('bilibili_lianheng_mark');
return current!=player;
});
if(list.length>1){
var target=list.randomGet();
player.logSkill('bilibili_lianheng',target);
target.addSkill('bilibili_lianheng_mark');
}
},
group:'bilibili_lianheng_init',
subSkill:{
mark:{
charlotte:true,
mod:{
playerEnabled:function(card,player,target){
if(target.hasSkill('bilibili_lianheng')||target.isLinked()) return false;
}
},
marktext:'横',
mark:true,
intro:{
content:function(){
return '不能对拥有【连横】的角色和已横置角色使用牌';
},
},
},
init:{
audio:'zhangyi_lianheng',
trigger:{global:'phaseBefore',player:'enterGame'},
filter:function(event,player){
return (event.name!='phase'||game.phaseNumber==0);
},
direct:true,
content:function(){
var list=game.filterPlayer(function(current){
return current!=player;
});
if(list.length){
var target=list.randomGet();
player.logSkill('bilibili_lianheng',target);
target.addSkill('bilibili_lianheng_mark');
}
},
},
},
},
zhaogao_zhilu:{
audio:'ext:活动武将:true',
group:'zhaogao_zhilu2',
enable:['chooseToUse','chooseToRespond'],
viewAs:{name:'sha'},
filterCard:{color:'black'},
check:function(card){return 1/(get.value(card)||0.5)},
viewAsFilter:function(player){
return player.countCards('h',{color:'black'})>0;
},
ai:{
respondSha:true,
skillTagFilter:function(player){
return player.countCards('h',{color:'black'})>0;
},
},
},
zhaogao_zhilu2:{
audio:'zhaogao_zhilu',
enable:['chooseToUse','chooseToRespond'],
viewAs:{name:'shan'},
filterCard:{color:'red'},
check:function(card){return 1/(get.value(card)||0.5)},
viewAsFilter:function(player){
return player.countCards('h',{color:'red'})>0;
},
ai:{
respondShan:true,
skillTagFilter:function(player){
return player.countCards('h',{color:'red'})>0;
},
},
},
zhaogao_gaizhao:{
audio:'ext:活动武将:true',
trigger:{target:'useCardToTarget'},
direct:true,
filter:function(event,player){
if(get.info(event.card).multitarget) return false;
var type=get.type(event.card);
if(type!='basic'&&type!='trick') return false;
return game.hasPlayer(function(current){
return current!=player&&current.group=='daqin'&&!event.targets.contains(current);
});
},
content:function(){
'step 0'
player.chooseTarget(get.prompt(event.name),'将'+get.translation(trigger.card)+'转移给其他秦势力角色',function(card,player,target){
var trigger=_status.event.getTrigger();
return target.group=='daqin'&&!trigger.targets.contains(target)&&lib.filter.targetEnabled2(trigger.card,trigger.player,target);
}).set('rawEffect',get.effect(player,trigger.card,trigger.player,player)).ai=function(target){
var trigger=_status.event.getTrigger();
return 0.1+get.effect(target,trigger.card,trigger.player,_status.event.player)-_status.event.rawEffect;
};
'step 1'
if(result.bool){
var target=result.targets[0];
player.logSkill(event.name,target);
trigger.targets[trigger.targets.indexOf(player)]=target;
}
},
},
zhaogao_haizhong:{
audio:'ext:活动武将:true',
intro:{
content:'mark',
},
trigger:{global:'recoverAfter'},
forced:true,
filter:function(event,player){
return event.player.group!='daqin';
},
logTarget:'player',
content:function(){
'step 0'
if(!trigger.player.storage[event.name]) trigger.player.storage[event.name]=0;
event.num=Math.max(1,trigger.player.storage[event.name]);
trigger.player.storage[event.name]++;
trigger.player.markSkill(event.name);
trigger.player.chooseToDiscard('害忠：弃置一张红色牌，或受到'+event.num+'点伤害',{color:'red'}).ai=lib.skill.shangyang_bianfa.check;
'step 1'
if(!result.bool) trigger.player.damage(num);
},
},
zhaogao_yuanli:{
audio:'ext:活动武将:true',
trigger:{player:'phaseUseBegin'},
forced:true,
content:function(){
var list=[];
for(var i=0;i<2;i++){
var cardx=get.cardPile2(function(card){
return get.type(card)=='trick'&&!list.contains(card)
});
if(cardx) list.push(cardx);
}
if(list.length) player.gain(list,'draw');
},
},
zhangyi_lianheng:{
audio:'ext:活动武将:true',
trigger:{
player:'phaseBegin',
},
forced:true,
content:function(){
var list=game.filterPlayer(function(current){
current.removeSkill('zhangyi_lianheng_mark');
return current.group!='daqin';
});
if(list.length>1){
var target=list.randomGet();
player.line(target);
target.addSkill('zhangyi_lianheng_mark');
}
},
group:'zhangyi_lianheng_init',
subSkill:{
mark:{
charlotte:true,
mod:{
playerEnabled:function(card,player,target){
if(target.group=='daqin'||_status.kangqinEvent=='合纵连横'&&target.isLinked()) return false;
}
},
marktext:'横',
mark:true,
intro:{
content:function(){
if(_status.kangqinEvent=='合纵连横') return '不能对秦势力角色和已横置的角色使用牌';
return '不能对秦势力角色使用牌';
},
},
},
init:{
audio:'ext:活动武将:true',
trigger:{global:'phaseBefore',player:'enterGame'},
filter:function(event,player){
return (event.name!='phase'||game.phaseNumber==0);
},
forced:true,
content:function(){
var list=game.filterPlayer(function(current){
return current.group!='daqin';
});
if(list.length){
var target=list.randomGet();
player.line(target);
target.addSkill('zhangyi_lianheng_mark');
}
},
},
},
},
zhangyi_xichu:{
audio:'ext:活动武将:true',
trigger:{target:'useCardToTarget'},
forced:true,
filter:function(event,player){
return event.card.name=='sha'&&game.hasPlayer(function(current){
return current!=player&&current!=event.player&&lib.filter.targetInRange(event.card,event.player,current);
});
},
content:function(){
'step 0'
trigger.player.chooseToDiscard('戏楚：弃置一张点数为6的牌，或令'+get.translation(player)+'将此【杀】转移',function(card){
return get.number(card)==6;
}).ai=function(card){return 100-get.value(card)};
'step 1'
if(!result.bool){
player.chooseTarget(true,'将此【杀】转移给'+get.translation(trigger.player)+'攻击范围内的一名角色',true,function(card,player,target){
var trigger=_status.event.getTrigger();
return target!=player&&target!=trigger.player&&!trigger.targets.contains(target)&&lib.filter.targetInRange(trigger.card,trigger.player,target)
}).ai=function(target){
var trigger=_status.event.getTrigger();
return get.effect(target,trigger.card,trigger.player,_status.event.player);
};
}
else event.finish();
'step 2'
if(result.bool){
player.line(result.targets[0]);
trigger.targets[trigger.targets.indexOf(player)]=result.targets[0];
}
},
ai:{
effect:{
target:function(card,player,target){
if(card.name=='sha'&&!player.countCards('h',{number:6})&&game.hasPlayer(function(current){
return current!=player&&current!=target&&lib.filter.targetInRange(card,trigger.player,current)&&get.attitude(player,current)>0;
})) return -1;
},
},
},
},
zhangyi_xiongbian:{
audio:'ext:活动武将:true',
trigger:{target:'useCardToTargeted'},
forced:true,
filter:function(event,player){
return get.type(event.card)=='trick';
},
content:function(){
'step 0'
player.judge(function(result){
if(result.number==6) return 1;
return -1;
}).set('no6',get.attitude(player,trigger.player)>0);
'step 1'
if(result.bool) trigger.getParent().cancel();
game.broadcastAll(ui.clear);
},
},
zhangyi_qiaoshe:{
audio:'ext:活动武将:true',
trigger:{
global:'judge',
},
direct:true,
content:function(){
'step 0'
var card=trigger.player.judging[0];
var judge0=trigger.judge(card);
var judge1=0;
var choice=trigger.no6&&card.number==6?'+1':'cancel2';
var attitude=get.attitude(player,trigger.player);
var list=[];
for(var i=-3;i<4;i++){
if(i==0) continue;
list.push((i>0?'+':'')+i);
if(!trigger.no6){
var judge2=(trigger.judge({
name:get.name(card),
suit:get.suit(card),
number:get.number(card)+i,
nature:get.nature(card),
})-judge0)*attitude;
if(judge2>judge1){
choice=(i>0?'+':'')+i;
judge1=judge2;
}
}
}
list.push('cancel2');
player.chooseControl(list).set('ai',function(){
return _status.event.choice;
}).set('choice',choice).prompt=get.prompt2(event.name);
'step 1'
if(result.control!='cancel2'){
player.logSkill(event.name,trigger.player);
game.log(trigger.player,'判定结果点数','#g'+result.control);
player.popup(result.control,'fire');
if(!trigger.fixedResult) trigger.fixedResult={};
if(!trigger.fixedResult.number) trigger.fixedResult.number=get.number(trigger.player.judging[0]);
trigger.fixedResult.number+=parseInt(result.control);
}
},
},
'yingzheng_yitong':{
audio:'ext:活动武将:true',
mod:{
targetInRange:function (card){
if(card.name=='sha'||card.name=='shunshou') return true;
},
},
trigger:{player:['useCard2','useCardToPlayer']},
forced:true,
filter:function(event,player){
if(!['shunshou','guohe','sha','huogong'].contains(event.card.name)) return false;
return game.hasPlayer(function(current){
return current.group!='daqin'&&!event.targets.contains(current);
});
},
content:function(){
trigger.targets.addArray(game.filterPlayer(function(current){
return current.group!='daqin'&&!trigger.targets.contains(current);
}));
player.line(trigger.targets);
},
},
'yingzheng_shihuang':{
audio:'ext:活动武将:true',
trigger:{global:'phaseAfter'},
forced:true,
filter:function (event,player){
var num=game.roundNumber/100*6;
if(num>1) num=1;
return event.player!=player&&Math.random()<=num;
},
content:function (){
player.insertPhase();
},
},
yingzheng_zulong:{
audio:'ext:活动武将:true',
trigger:{player:'phaseZhunbeiBegin'},
forced:true,
content:function (){
var list=[];
var card1=get.cardPile2(function(card){
return card.name=='zhenlongchangjian';
});
var card2=get.cardPile2(function(card){
return card.name=='chuanguoyuxi';
});
if(card1&&!player.countCards('he','zhenlongchangjian')) list.push(card1);
if(card2&&!player.countCards('he','chuanguoyuxi')) list.push(card2);
if(list.length>0) player.gain(list,'gain2');
else player.draw(2);
},
},
yingzheng_fenshu:{
audio:'ext:活动武将:true',
trigger:{global:'useCard'},
usable:1,
forced:true,
filter:function (event,player){
if(event.player==_status.currentPhase&&event.player.group!='daqin'&&get.type(event.card)=='trick'){
return true;
}
return false;
},
content:function (){
trigger.cancel();
game.delay();
game.broadcastAll(ui.clear);
},
},
zhenlongchangjian_skill:{
trigger:{player:'useCard'},
forced:true,
usable:1,
filter:function (event){
return get.type(event.card)=='trick';
},
content:function (){
trigger.nowuxie=true;
},
},
chuanguoyuxi_skill:{
trigger:{player:'phaseUseBegin'},
direct:true,
content:function (){
'step 0'
var list=['nanman','wanjian','taoyuan','wugu'];
player.chooseButton([get.prompt(event.name),[list,'vcard']],true).ai=function(button){
var name=button.link[2];
return name=='nanman'?0.8:0||name=='wanjian'?0.8:0;
}
'step 1'
if(result.bool){
player.chooseUseTarget(result.links[0][2],true,false).logSkill=event.name;
}
},
},
qinnu_skill:{
mod:{
cardUsable:function (card,player,num){
if(card.name=='sha'){
return num+1;
}
},
},
inherit:'qinggang_skill',
},
shangyang_bianfa:{
audio:'ext:活动武将:true',
mod:{
selectTarget:function(card,player,range){
if(_status.kangqinEvent=='变法图强'&&card.name=='shangyangbianfa'&&range[1]!=-1) range[1]++;
},
},
enable:'chooseToUse',
usable:1,
filterCard:function (card){
return get.type(card)=='trick';
},
viewAs:{
name:'shangyangbianfa',
},
viewAsFilter:function (player){
if(!player.countCards('h',{type:'trick'})) return false;
},
prompt:'将一张普通锦囊牌当作【商鞅变法】使用',
check:function (card){
return 9-get.value(card);
},
ai:{
basic:{
order:10,
useful:1,
value:5.5,
},
result:{
target:-1.5,
},
tag:{
damage:1,
},
},
},
'shangyang_limu':{
audio:'ext:活动武将:true',
trigger:{
player:'useCard',
},
forced:true,
filter:function (event){
return get.type(event.card)=='trick';
},
content:function (){
trigger.nowuxie=true;
},
},
shangyang_kencao:{
audio:'ext:活动武将:true',
init:function (player){
if(!player.storage.shangyang_kencao) player.storage.shangyang_kencao=0;
},
marktext:'功',
intro:{
content:'当前有#个「功」标记',
},
trigger:{
global:'damageAfter',
},
forced:true,
filter:function (event,player){
return event.source&&event.source.group=='daqin'&&event.source.isAlive();
},
content:function (){
if(trigger.source==player){
player.markSkill('shangyang_kencao');
player.storage.shangyang_kencao+=trigger.num;
player.syncStorage('shangyang_kencao');
game.log(player,'获得了',trigger.num,'个「功」标记');
if(player.storage.shangyang_kencao>=3){
game.log(player,'移去了',player.storage.shangyang_kencao,'个「功」标记');
player.storage.shangyang_kencao=0;
player.syncStorage('shangyang_kencao');
if(player.storage.shangyang_kencao<=0) player.unmarkSkill('shangyang_kencao');
player.gainMaxHp();
player.recover();
}
}
else{
player.line(trigger.source);
if(trigger.source.storage.shangyang_kencao==undefined) trigger.source.storage.shangyang_kencao=0;
trigger.source.markSkill('shangyang_kencao');
trigger.source.storage.shangyang_kencao+=trigger.num;
trigger.source.syncStorage('shangyang_kencao');
game.log(trigger.source,'获得了',trigger.num,'个「功」标记');
if(trigger.source.storage.shangyang_kencao>=3){
game.log(trigger.source,'移去了',trigger.source.storage.shangyang_kencao,'个「功」标记');
trigger.source.storage.shangyang_kencao=0;
trigger.source.syncStorage('shangyang_kencao');
if(trigger.source.storage.shangyang_kencao<=0) trigger.source.unmarkSkill('shangyang_kencao');
trigger.source.gainMaxHp();
trigger.source.recover();
}
}
},
},
shangyangbianfa_dying:{
trigger:{player:'dying'},
forced:true,
popup:false,
direct:true,
charlotte:true,
locked:true,
filter:function(event,player){
return event.getParent().type=='shangyangbianfa';
},
content:function (){
'step 0'
player.judge(function(card){
return get.color(card)=='black'?-1:0;
})
'step 1'
if(result.color=='black'){
game.countPlayer(function(current){
if(current!=player) current.addTempSkill('shangyangbianfa_dying_nosave','_saveAfter');
});
}
},
subSkill:{
nosave:{
mod:{
cardSavable:function(){return false}
},
},
},
},
nushou_jinnu:{
audio:'ext:活动武将:true',
trigger:{player:'phaseZhunbeiBegin'},
forced:true,
filter:function (event,player){
return !player.getEquip('qinnu');
},
content:function (){
var card=game.createCard('qinnu',Math.random()<0.5?'diamond':'club',1);
player.chooseUseTarget(card,true);
},
},
'qibing_changjian':{
audio:'ext:活动武将:true',
mod:{
attackFrom:function (from,to,distance){
return distance-1;
},
},
trigger:{
player:'useCard2',
},
filter:function (event,player){
return event.card&&event.card.name=='sha';
},
forced:true,
content:function (){
'step 0'
player.chooseTarget(get.prompt('qibing_changjian'),'为'+get.translation(trigger.card)+'增加一个目标，或取消并令'+get.translation(trigger.card)+'伤害＋1',function(card,player,target){
return !_status.event.sourcex.contains(target)&&player.canUse('sha',target);
}).set('sourcex',trigger.targets).set('ai',function(target){
var player=_status.event.player;
return get.effect(target,{name:'sha'},player,player);
});
'step 1'
if(result.bool){
if(!event.isMine()&&!_status.connectMode) game.delayx();
event.target=result.targets[0];
player.line(event.target);
trigger.targets.push(event.target);
}
else{
if(!trigger.baseDamage) ttrigger.baseDamage=1;
trigger.baseDamage++;
}
},
},
'qibing_liangju':{
audio:'ext:活动武将:true',
trigger:{
player:'useCardToPlayered',
},
forced:true,
filter:function (event,player){
return event.card.name=='sha';
},
content:function (){
'step 0'
trigger.target.judge(function(card){
return (get.suit(card)=='spade')?-2:0;
});
'step 1'
if(result.judge<0){
trigger.getParent().directHit.add(trigger.target);
}
},
group:['qibing_liangju_judge'],
subSkill:{
judge:{
audio:'qibing_liangju',
trigger:{
target:'useCardToTargeted',
},
filter:function (event,player){
if(event.player==player) return false;
if(event.card.name=='sha') return true;
return false;
},
forced:true,
content:function (){
'step 0'
player.judge(function(card){
return (get.suit(card)=='heart')?2:-1;
});
'step 1'
if(result.judge>0){
trigger.getParent().excluded.add(player);
}
},
sub:true,
},
},
},
'bubing_fangzhen':{
audio:'ext:活动武将:true',
trigger:{
target:'useCardToTargeted',
},
filter:function (event,player){
if(event.player.group=='daqin'||event.player==player) return false;
if((event.card.name=='sha'||get.type(event.card)=='trick')&&get.distance(event.player,player,'attack')<=1) return true;
return false;
},
forced:true,
content:function (){
'step 0'
player.judge(function(card){
return (get.color(card)=='black')?2:-1;
});
'step 1'
if(result.judge>0){
player.useCard({name:'sha'},trigger.player,false);
}
},
},
'bubing_changbing':{
audio:'ext:活动武将:true',
mod:{
attackFrom:function (from,to,distance){
return distance-2;
},
},
},
'daqin_tongpao':{
audio:'ext:活动武将:true',
trigger:{
global:'useCardAfter',
},
forced:true,
filter:function (event,player){
return event.player!=player&&event.player.group=='daqin'&&!player.getEquip(2)&&event.card&&get.subtype(event.card)=='equip2'&&(event.card.name=='bagua'||event.card.name=='baiyin'||event.card.name=='renwang'||event.card.name=='tengjia');
},
content:function (){
var name=trigger.card.name;
var card='tongpao_'+name;
var suit=get.suit(trigger.card);
var number=trigger.card.number;
player.useCard(game.createCard(card,suit,number),player);
},
},
baiqi_wuan:{
audio:'ext:活动武将:true',
firstDo:true,
trigger:{global:'useCard1'},
forced:true,
filter:function(event,player){
return !event.audioed&&event.player.group=='daqin'&&event.card.name=='sha'&&event.player.countUsed('sha',true)>1&&event.getParent().type=='phase';
},
content:function(){
trigger.audioed=true;
},
global:'baiqi_wuan_buff',
subSkill:{
buff:{
mod:{
cardUsable:function (card,player,num){
if(player.group=='daqin'&&card.name=='sha'){
return num+1;
}
},
},
sub:true,
},
},
},
baiqi_shashen:{
audio:'ext:活动武将:true',
enable:['chooseToRespond','chooseToUse'],
filterCard:true,
viewAs:{
name:'sha',
},
viewAsFilter:function (player){
if(!player.countCards('h')) return false;
},
prompt:'将一张手牌当作【杀】使用或打出',
check:function (card){
return 4-get.value(card);
},
group:['baiqi_shashen_i'],
subSkill:{
i:{
trigger:{
player:'useCard2',
},
forced:true,
direct:true,
popup:false,
usable:1,
filter:function (event,player){
return event.card.name=='sha';
},
content:function (){
player.addTempSkill('baiqi_shashen_d','useCardAfter');
},
sub:true,
},
d:{
audio:'baiqi_shashen',
trigger:{
source:'damageSource',
},
filter:function (event,player){
return event.card&&event.card.name=='sha';
},
forced:true,
content:function (){
player.draw();
player.removeSkill('baiqi_shashen_d');
},
sub:true,
},
},
ai:{
skillTagFilter:function (player){
if(!player.countCards('h')) return false;
},
respondSha:true,
},
},
baiqi_fachu:{
audio:'ext:活动武将:true',
trigger:{global:'dying'},
forced:true,
filter:function (event,player){
return player.isAlive()&&event.source==player&&event.player.group!='daqin'&&event.player.countDisabled()<5;
},
content:function (){
var list=[];
for(var i=1;i<5;i++){
if(trigger.player.isDisabled(i)) continue;
list.push('equip'+i);
}
if(list.length){
player.line(trigger.player);
trigger.player.disableEquip(list.randomGet());
}
},
},
baiqi_changsheng:{
audio:'ext:活动武将:true',
mod:{
targetInRange:function (card){
if(card.name=='sha') return true;
},
},
},
miyue_zhangzheng:{
audio:'ext:活动武将:true',
trigger:{player:'phaseZhunbeiBegin'},
forced:true,
filter:function (event,player){
return game.hasPlayer(function(current){
return current!=player&&current.group!='daqin';
});
},
content:function (){
'step 0'
event.players=game.filterPlayer(function(current){
return current!=player&&current.group!='daqin';
})
'step 1'
if(event.players.length){
event.current=event.players.shift();
player.line(event.current);
if(event.current.countCards('h')){
event.current.chooseToDiscard('h','弃置一张手牌或失去一点体力').set('ai',function(card){
return 7-get.value(card);
});
event.tempbool=false;
}
else{
event.tempbool=true;
}
}
else{
event.finish();
}
'step 2'
if(event.tempbool||result.bool==false){
event.current.loseHp();
}
event.goto(1);
},
},
'miyue_taihou':{
audio:'ext:活动武将:true',
trigger:{
target:'useCardToTargeted',
},
forced:true,
filter:function (event,player){
return event.player!=player&&event.player.sex=='male'&&event.card&&(event.card.name=='sha'||get.type(event.card)=='trick');
},
content:function (){
'step 0'
player.line(trigger.player);
var type=get.type(trigger.card,'trick');
var eff=get.effect(player,trigger.card,trigger.player,trigger.player);
trigger.player.chooseToDiscard('弃置一张'+get.translation(type)+'牌，否则'+get.translation(trigger.card)+'对'+get.translation(player)+'无效',function(card){
 return get.type(card,'trick')==type;
}).set('ai',function(card){
 if(_status.event.eff>0){
return 10-get.value(card);
}
return 0;
}).set('type',type).set('eff',eff);
'step 1'
if(!result.bool){
trigger.getParent().excluded.add(player);
}
},
},
'miyue_youmie':{
audio:'ext:活动武将:true',
prompt:'出牌阶段限一次，你可以将一张牌交给一名角色，若如此做，直到你的下个回合开始，该角色于其回合外无法使用或打出牌。',
enable:'phaseUse',
usable:1,
filter:function (event,player){
return player.countCards('he')>0;
},
discard:false,
line:true,
prepare:'give',
position:'he',
filterCard:true,
filterTarget:true,
check:function (card){
if(get.position(card)=='e') return -1;
return 5-get.value(card);
},
content:function (){
target.gain(cards,player);
target.addSkill('miyue_youmie_debuff');
},
ai:{
order:1,
result:{
target:function (player,target){
return -1;
},
},
},
group:'miyue_youmie_delete',
subSkill:{
debuff:{
mark:true,
marktext:'灭',
mod:{
cardEnabled:function (card,player,target){ 
if(_status.currentPhase!=player) return false; 
},
cardUsable:function (card,player,target){ 
if(_status.currentPhase!=player) return false; 
},
cardRespondable:function (card,player,target){ 
if(_status.currentPhase!=player) return false; 
},
cardSavable:function (card,player,target){ 
if(_status.currentPhase!=player) return false; 
},
},
intro:{
content:'回合外不能使用或打出卡牌',
},
ai:{threaten:5},
//落 井 下 石
sub:true,
},
delete:{
charlotte:true,
trigger:{player:'phaseBefore'},
forced:true,
direct:true,
popup:false,
filter:function (event,player){
return game.hasPlayer(function(current){
return current.hasSkill('miyue_youmie_debuff');
});
},
content:function (){
for(var i=0;i<game.players.length;i++){
if(game.players[i].hasSkill('miyue_youmie_debuff')){
game.players[i].removeSkill('miyue_youmie_debuff');
}
} 
},
sub:true,
},
},
},
miyue_yintui:{
audio:'ext:活动武将:true',
trigger:{player:'loseEnd'},
forced:true,
filter:function (event,player){
if(player.countCards('h')) return false;
for(var i=0;i<event.cards.length;i++){
if(event.cards[i].original=='h') return true;
}
return false;
},
content:function (){
player.turnOver();
},
ai:{
noh:true,
skillTagFilter:function (player,tag){
if(tag=='noh'){
if(player.countCards('h')!=1) return false;
}
},
effect:{
target:function(card,player,target){
if(!target.isTurnedOver()) return;
if(player.hasSkillTag('jueqing',false,target)) return;
var num=get.tag(card,'damage');
if(num){
if(num>1) return 0.5;
return 0;
}
}
}
},
group:'miyue_yintui_damage',
subSkill:{
damage:{
audio:'miyue_yintui',
trigger:{player:'damageBegin3'},
forced:true,
filter:function (event,player){
return player.isTurnedOver();
},
content:function (){
trigger.num--;
player.draw();
},
sub:true,
},
},
},
lvbuwei_jugu:{
audio:'ext:活动武将:true',
mod:{
maxHandcard:function (player,num){
return num+player.maxHp;
},
},
trigger:{global:'phaseBefore',player:'enterGame'},
filter:function(event,player){
return (event.name!='phase'||game.phaseNumber==0);
},
forced:true,
content:function (){
player.draw(player.maxHp);
},
},
lvbuwei_qihuo:{
audio:'ext:活动武将:true',
enable:'phaseUse',
usable:1,
delay:0,
filter:function (event,player){
return player.countCards('h')>0;
},
content:function (){
'step 0'
event.list=[];
var hs=player.getCards('h');
for(var i=0;i<hs.length;i++){
var card=hs[i];
if(event.list.contains(get.type(card,'trick'))) continue;
event.list.push(get.type(card,'trick'));
}
'step 1'
player.chooseControl(event.list,function(event,player){
return event.list.randomGet();
}).prompt='奇货：请选择一种类别';
'step 2'
var cards=player.getCards('h',function(card){
return get.type(card,'trick')==result.control;
});
player.discard(cards);
player.draw(cards.length*2);
},
ai:{
order:1,
result:{
player:4,
},
threaten:1.55,
},
},
lvbuwei_chunqiu:{
audio:'ext:活动武将:true',
group:['lvbuwei_chunqiu_biaoji','lvbuwei_chunqiu_gain','lvbuwei_chunqiu_delete'],
subSkill:{
biaoji:{
trigger:{global:'phaseBefore'},
forced:true,
popup:false,
direct:true,
content:function (){
player.storage.lvbuwei_chunqiu=[];
},
sub:true,
},
gain:{
trigger:{
player:['useCard','respond'],
},
audio:'lvbuwei_chunqiu',
forced:true,
filter:function (event,player){
return player.storage.lvbuwei_chunqiu!=undefined&&!player.storage.lvbuwei_chunqiu.contains(get.type(event.card,'trick'));
},
content:function (){
'step 0'
player.storage.lvbuwei_chunqiu.push(get.type(trigger.card,'trick'));
'step 1'
player.draw();
'step 2'
game.updateRoundNumber();
},
sub:true,
},
delete:{
trigger:{
global:'phaseAfter',
},
forced:true,
direct:true,
popup:false,
content:function (){
delete player.storage.nzry_shicai;
},
sub:true,
},
},
},
lvbuwei_baixiang:{
audio:'ext:活动武将:true',
skillAnimation:true,
animationColor:'thunfer',
unique:true,
trigger:{player:'phaseZhunbeiBegin'},
forced:true,
filter:function (event,player){
return player.countCards('h')>=player.hp*2&&!player.storage.lvbuwei_baixiang;
},
derivation:['lvbuwei_zhongfu','new_rejianxiong','rezhiheng','rerende'],
content:function (){
'step 0'
player.storage.lvbuwei_baixiang=true;
player.awakenSkill('lvbuwei_baixiang');
'step 1'
var num=player.maxHp-player.hp;
if(num>0) player.recover(num);
player.addSkillLog('lvbuwei_zhongfu');
},
},
lvbuwei_zhongfu:{
audio:'ext:活动武将:true',
trigger:{player:'phaseZhunbeiBegin'},
forced:true,
content:function (){
var skill=['daqin_lvbuwei_rejianxiong','daqin_lvbuwei_rerende','daqin_lvbuwei_rezhiheng'].randomGet();
player.addTempSkill(skill,{player:'phaseBefore'});
game.log(player,'获得了技能','#g【'+get.translation(skill)+'】');
},
},
zhaoji_shanwu:{
audio:'ext:活动武将:true',
trigger:{player:'useCardToPlayered'},
forced:true,
filter:function (event,player){
return event.card.name=='sha';
},
content:function (){
'step 0'
player.judge(function(card){
return (get.color(card)=='black')?2:-2;
});
'step 1'
if(result.judge>0){
trigger.getParent().directHit.add(trigger.target);
}
},
group:'zhaoji_shanwu_judge',
subSkill:{
judge:{
audio:'zhaoji_shanwu',
trigger:{target:'useCardToTargeted'},
filter:function (event,player){
if(event.player==player) return false;
if(event.card.name=='sha') return true;
return false;
},
forced:true,
content:function (){
'step 0'
player.judge(function(card){
return (get.color(card)=='red')?2:-2;
});
'step 1'
if(result.judge>0){
trigger.getParent().excluded.add(player);
}
},
sub:true,
},
},
},
zhaoji_daqi:{
audio:'ext:活动武将:true',
marktext:'期',
intro:{content:'mark',name:'大期',name2:'期'},
trigger:{player:'phaseZhunbeiBegin'},
forced:true,
filter:function (event,player){
return player.countMark('zhaoji_daqi')>=10;
},
content:function (){
player.removeMark('zhaoji_daqi',player.countMark('zhaoji_daqi'));
var hp=player.maxHp-player.hp;
var card=player.maxHp-player.countCards('h');
if(hp>0) player.recover(hp);
if(card>0) player.draw(card);
player.storage.zhaoji_huoluan=true;
},
group:'zhaoji_daqi_addmark',
subSkill:{
addmark:{
trigger:{player:['damageAfter','useCard','respond'],source:'damageSource'},
audio:'zhaoji_daqi',
forced:true,
content:function (){
player.addMark('zhaoji_daqi',trigger.num||1);
},
sub:true,
},
},
},
zhaoji_xianji:{
audio:'ext:活动武将:true',
init:function (player){
player.storage.zhaoji_xianji=false;
},
intro:{content:'limited'},
unique:true,
mark:true,
skillAnimation:true,
animationColor:'thunder',
enable:'phaseUse',
filter:function (event,player){
return player.countMark('zhaoji_daqi')>0;
},
check:function (event,player){
var hp=player.maxHp-player.hp;
var card=3-player.countCards('he');
if((hp+card)>0) return true;
return false;
},
content:function (){
'step 0'
player.awakenSkill('zhaoji_xianji');
player.storage.zhaoji_xianji=true;
'step 1'
var hs=player.getCards('he');
if(hs.length) player.discard(hs);
player.removeMark('zhaoji_daqi',player.countMark('zhaoji_daqi'));
player.loseMaxHp();
'step 2'
var hp=player.maxHp-player.hp;
var card=player.maxHp-player.countCards('h');
if(hp>0) player.recover(hp);
if(card>0) player.draw(card);
player.storage.zhaoji_huoluan=true;
},
ai:{
order:1,
result:{
player:function (player,target){
var hp=player.maxHp-player.hp;
var card=player.maxHp-player.countCards('h');
return 0+hp+card;
},
},
},
},
zhaoji_huoluan:{
audio:'ext:活动武将:true',
trigger:{player:['zhaoji_daqiAfter','zhaoji_xianjiAfter']},
forced:true,
content:function (){
'step 0'
event.targets=game.filterPlayer();
event.targets.remove(player);
event.targets.sort(lib.sort.seat);
player.line(event.targets);
event.targets2=event.targets.slice(0);
'step 1'
if(event.targets2.length){
event.targets2.shift().damage('nocard');
event.redo();
}
},
},
daqin_lvbuwei_rezhiheng:{
audio:'ext:活动武将:true',
enable:'phaseUse',
usable:1,
position:'he',
filterCard:lib.filter.cardDiscardable,
discard:false,
lose:false,
delay:false,
selectCard:[1,Infinity],
check:function(card){
var player=_status.event.player;
if(get.position(card)=='h'&&!player.countCards('h',function(card){
return get.value(card)>=8;
})){
return 8-get.value(card);
}
return 6-get.value(card)
},
content:function(){
'step 0'
player.discard(cards);
event.num=1;
var hs=player.getCards('h');
if(!hs.length) event.num=0;
for(var i=0;i<hs.length;i++){
if(!cards.contains(hs[i])){
event.num=0;break;
}
}
'step 1'
player.draw(event.num+cards.length);
},
subSkill:{
draw:{
trigger:{player:'loseEnd'},
silent:true,
filter:function(event,player){
if(event.getParent(2).skill!='daqin_lvbuwei_rezhiheng'&&event.getParent(2).skill!='jilue_zhiheng') return false;
if(player.countCards('h')) return false;
for(var i=0;i<event.cards.length;i++){
if(event.cards[i].original=='h') return true;
}
return false;
},
content:function(){
player.addTempSkill('daqin_lvbuwei_rezhiheng_delay',trigger.getParent(2).skill+'After');
}
},
delay:{}
},
ai:{
order:1,
result:{
player:1
},
threaten:1.55
},
},
'daqin_lvbuwei_rejianxiong':{
audio:'ext:活动武将:true',
trigger:{
player:'damageEnd',
},
content:function (){
'step 0'
if(get.itemtype(trigger.cards)=='cards'&&get.position(trigger.cards[0],true)=='o'){
player.gain(trigger.cards,'gain2');
}
player.draw('nodelay');
},
ai:{
maixie:true,
'maixie_hp':true,
effect:{
target:function (card,player,target){
if(player.hasSkillTag('jueqing',false,target)) return [1,-1];
if(get.tag(card,'damage')&&player!=target) return [1,0.6];
},
},
},
},
daqin_lvbuwei_rerende:{
audio:'ext:活动武将:true',
enable:'phaseUse',
filterCard:true,
selectCard:[1,Infinity],
discard:false,
lose:false,
delay:false,
filterTarget:function(card,player,target){
if(player.storage.daqin_lvbuwei_rerende2&&player.storage.daqin_lvbuwei_rerende2.contains(target)) return false;
return player!=target;
},
onremove:['daqin_lvbuwei_rerende','daqin_lvbuwei_rerende2'],
check:function(card){
if(ui.selected.cards.length&&ui.selected.cards[0].name=='du') return 0;
if(!ui.selected.cards.length&&card.name=='du') return 20;
var player=get.owner(card);
if(ui.selected.cards.length>=Math.max(2,player.countCards('h')-player.hp)) return 0;
if(player.hp==player.maxHp||player.storage.daqin_lvbuwei_rerende<0||player.countCards('h')<=1){
var players=game.filterPlayer();
for(var i=0;i<players.length;i++){
if(players[i].hasSkill('haoshi')&&
!players[i].isTurnedOver()&&
!players[i].hasJudge('lebu')&&
get.attitude(player,players[i])>=3&&
get.attitude(players[i],player)>=3){
return 11-get.value(card);
}
}
if(player.countCards('h')>player.hp) return 10-get.value(card);
if(player.countCards('h')>2) return 6-get.value(card);
return -1;
}
return 10-get.value(card);
},
content:function(){
'step 0'
var evt=_status.event.getParent('phaseUse');
if(evt&&evt.name=='phaseUse'&&!evt.daqin_lvbuwei_rerende){
var next=game.createEvent('daqin_lvbuwei_rerende_clear');
_status.event.next.remove(next);
evt.after.push(next);
evt.daqin_lvbuwei_rerende=true;
next.player=player;
next.setContent(lib.skill.daqin_lvbuwei_rerende1.content);
}
if(!Array.isArray(player.storage.daqin_lvbuwei_rerende2)){
player.storage.daqin_lvbuwei_rerende2=[];
}
player.storage.daqin_lvbuwei_rerende2.push(target);
target.gain(cards,player,'giveAuto');
if(typeof player.storage.daqin_lvbuwei_rerende!='number'){
player.storage.daqin_lvbuwei_rerende=0;
}
if(player.storage.daqin_lvbuwei_rerende>=0){
player.storage.daqin_lvbuwei_rerende+=cards.length;
if(player.storage.daqin_lvbuwei_rerende>=2){
var list=[];
if(lib.filter.cardUsable({name:'sha'},player,event.getParent('chooseToUse'))&&game.hasPlayer(function(current){
return player.canUse('sha',current);
})){
list.push(['基本','','sha']);
list.push(['基本','','sha','fire']);
list.push(['基本','','sha','thunder']);
}
if(lib.filter.cardUsable({name:'tao'},player,event.getParent('chooseToUse'))&&game.hasPlayer(function(current){
return player.canUse('tao',current);
})){
list.push(['基本','','tao']);
}
if(lib.filter.cardUsable({name:'jiu'},player,event.getParent('chooseToUse'))&&game.hasPlayer(function(current){
return player.canUse('jiu',current);
})){
list.push(['基本','','jiu']);
}
if(list.length){
player.chooseButton(['是否视为使用一张基本牌？',[list,'vcard']]).set('ai',function(button){
var player=_status.event.player;
var card={name:button.link[2],nature:button.link[3]};
if(card.name=='tao'){
if(player.hp==1||(player.hp==2&&!player.hasShan())||player.needsToDiscard()){
return 5;
}
return 1;
}
if(card.name=='sha'){
if(game.hasPlayer(function(current){
return player.canUse(card,current)&&get.effect(current,card,player,player)>0
})){
if(card.nature=='fire') return 2.95;
if(card.nature=='thunder') return 2.92;
return 2.9;
}
return 0;
}
if(card.name=='jiu'){
return 0.5;
}
return 0;
});
}
else{
event.finish();
}
player.storage.daqin_lvbuwei_rerende=-1;
}
else{
event.finish();
}
}
else{
event.finish();
}
'step 1'
if(result&&result.bool&&result.links[0]){
var card={name:result.links[0][2],nature:result.links[0][3]};
player.chooseUseTarget(card,true);
}
},
ai:{
order:function(skill,player){
if(player.hp<player.maxHp&&player.storage.daqin_lvbuwei_rerende<2&&player.countCards('h')>1){
return 10;
}
return 4;
},
result:{
target:function(player,target){
if(target.hasSkillTag('nogain')) return 0;
if(ui.selected.cards.length&&ui.selected.cards[0].name=='du'){
if(target.hasSkillTag('nodu')) return 0;
return -10;
}
if(target.hasJudge('lebu')) return 0;
var nh=target.countCards('h');
var np=player.countCards('h');
if(player.hp==player.maxHp||player.storage.daqin_lvbuwei_rerende<0||player.countCards('h')<=1){
if(nh>=np-1&&np<=player.hp&&!target.hasSkill('haoshi')) return 0;
}
return Math.max(1,5-nh);
}
},
effect:{
target:function(card,player,target){
if(player==target&&get.type(card)=='equip'){
if(player.countCards('e',{subtype:get.subtype(card)})){
if(game.hasPlayer(function(current){
return current!=player&&get.attitude(player,current)>0;
})){
return 0;
}
}
}
}
},
threaten:0.8
}
},
daqin_lvbuwei_rerende1:{
trigger:{player:'phaseUseBegin'},
silent:true,
content:function(){
player.storage.daqin_lvbuwei_rerende=0;
player.storage.daqin_lvbuwei_rerende2=[];
}
},
},
translate:{
daqin:'秦',
daqin2:'秦朝',
'daqin_yingzheng':'嬴政',
'daqin_shangyang':'商鞅',
'daqin_nushou':'秦军弩手',
'daqin_qibing':'秦军骑兵',
'daqin_bubing':'秦军步兵',
'daqin_baiqi':'白起',
'daqin_miyue':'芈月',
'daqin_lvbuwei':'吕不韦',
'daqin_zhaoji':'赵姬',
daqin_zhaogao:'赵高',
daqin_zhangyi:'张仪',
zhangyi_lianheng:'连横',
zhangyi_lianheng_info:'锁定技，游戏开始时，你令随机一名非秦势力的角色获得「横」标记。拥有「横」标记的角色使用牌时，无法指定秦势力角色为目标。你的回合开始时，场上所有角色弃置「横」标记。若非秦势力角色大于等于2人，则你令随机一名非秦势力角色获得「横」标记。',
bilibili_lianheng:'连横',
bilibili_lianheng_info:'锁定技，游戏开始时，你令随机一名其他角色获得「横」标记。拥有「横」标记的角色使用牌无法指定拥有【连横】的角色和已横置角色为目标。你的回合开始时，场上所有角色弃置「横」标记，然后若场上存活角色数大于二，则你令随机一名其他角色获得「横」标记。',
zhangyi_xichu:'戏楚',
zhangyi_xichu_info:'锁定技，当你成为【杀】的目标时，若其攻击范围内有其他角色，则该角色需要弃置一张点数为6的牌，否则此【杀】的目标转移给其攻击范围内你指定的另一名角色。',
zhangyi_xiongbian:'雄辩',
zhangyi_xiongbian_info:'锁定技，当你成为普通锦囊牌的目标或之一时，你进行判定，若点数为6，你令此牌无效。',
zhangyi_qiaoshe:'巧舌',
zhangyi_qiaoshe_info:'当一名角色进行判定时，你可以令其判定牌的点数加减3以内的任意值。',
yingzheng_yitong:'一统',
yingzheng_yitong_info:'锁定技，你使用【杀】、【过河拆桥】、【顺手牵羊】、【火攻】的目标固定为所有非秦势力角色。你使用【杀】和【顺手牵羊】无距离限制。',
bilibili_yitong:'一统',
bilibili_yitong_info:'你使用【杀】、【过河拆桥】、【顺手牵羊】、【火攻】可以额外指定至多三名目标角色。你使用【杀】和【顺手牵羊】无距离限制。',
'yingzheng_shihuang':'始皇',
'yingzheng_shihuang_info':'锁定技，其他角色的回合结束后，你有X%的几率获得一个额外的回合（X为当前轮数*6，且X最大为100）。',
'yingzheng_zulong':'祖龙',
'yingzheng_zulong_info':'锁定技，你的回合开始时，若牌堆里有【传国玉玺】或【真龙长剑】，且不在你的手牌区或装备区，你获得之，否则你摸两张牌。',
yingzheng_fenshu:'焚书',
yingzheng_fenshu_info:'锁定技，非秦势力角色于其回合内使用的第一张普通锦囊牌无效。',
bilibili_fenshu:'焚书',
bilibili_fenshu_info:'其他角色于其回合内使用第一张普通锦囊牌时，你可令此牌无效。',
'zhenlongchangjian_skill':'真龙长剑',
'zhenlongchangjian_skill_info':'你于一回合内使用的第一张非延时性锦囊无法被无懈可击抵消。',
'chuanguoyuxi_skill':'传国玉玺',
'chuanguoyuxi_skill_info':'出牌阶段开始时，你可以从南蛮入侵、万箭齐发、桃园结义、五谷丰登中选择一张使用。',
'qinnu_skill':'秦弩',
'qinnu_skill_info':'当你使用【杀】指定一个目标后，你令其防具无效，你的出牌阶段内，可使用的【杀】数量+1；当你失去装备区里的【秦弩】，你令此牌销毁。',
'shangyang_bianfa':'变法',
'shangyang_bianfa_info':'出牌阶段限一次，你可以将任意一张普通锦囊牌当【商鞅变法】使用。',
'shangyang_limu':'立木',
'shangyang_limu_info':'锁定技，你使用的普通锦囊牌无法被【无懈可击】抵消。',
shangyang_kencao:'垦草',
shangyang_kencao_info:'锁定技，你存活时，秦势力角色每造成1点伤害，可获得一个「功」标记。若秦势力角色拥有大于等于3个「功」标记，则弃置所有「功」标记，增加1点体力上限，并回复1点体力。',
bilibili_kencao:'垦草',
bilibili_kencao_info:'场上有角色造成伤害后，你可以令其获得与伤害值数目相等的「功」标记，然后若其「功」标记数不小于三，则其弃置所有「功」标记，增加1点体力上限，并回复1点体力。',
shangyangbianfa_dying:'商鞅变法',
shangyangbianfa_dying_info:'造成随机1~2点伤害，若该角色进入濒死状态，则进行判定，若判定结果为黑色，则该角色本次濒死状态无法向其他角色求桃。',
'nushou_jinnu':'劲弩',
'nushou_jinnu_info':'锁定技，你的回合开始时，若你的装备区里没有【秦弩】，你使用一张【秦弩】。',
'qibing_changjian':'长剑',
'qibing_changjian_info':'锁定技，你的攻击范围+1，你使用【杀】指定目标后，可额外选择一名目标，或令此【杀】伤害+1。',
'qibing_liangju':'良驹',
'qibing_liangju_info':'锁定技，你使用【杀】指定目标后，令目标进行判定，若为黑桃则此杀不可被闪避；当你成为【杀】的目标后，你进行判定，若为红桃则此【杀】对你无效。',
'bubing_fangzhen':'方阵',
'bubing_fangzhen_info':'锁定技，当你成为非秦势力角色使用普通锦囊或【杀】的目标后，若其在你的攻击范围内，你进行判定，若为黑色，则视为你对其使用一张【杀】。',
'bubing_changbing':'长兵',
'bubing_changbing_info':'锁定技，你的攻击范围+2。',
'daqin_tongpao':'同袍',
'daqin_tongpao_info':'锁定技，若你没有装备防具，其他秦势力角色使用防具牌时，你也视为使用一张同种防具牌。你通过〖同袍〗使用的防具牌离开你的装备区时会被销毁。(该技能仅限于【八卦阵】、【仁王盾】、【白银狮子】和【藤甲】)',
baiqi_wuan:'武安',
baiqi_wuan_info:'锁定技，你存活时，所有秦势力角色每回合可使用【杀】的上限+1。',
bilibili_wuan:'武安',
bilibili_wuan_info:'锁定技，你使用【杀】的上限+1。',
'baiqi_shashen':'杀神',
'baiqi_shashen_info':'你可以将手牌中的任意一张牌当【杀】使用或打出。每回合你使用的第一张【杀】造成伤害后，摸一张牌。',
baiqi_fachu:'伐楚',
baiqi_fachu_info:'锁定技，当你对非秦势力角色造成伤害而导致其进入濒死状态后，你随机废除其一个装备区。',
bilibili_fachu:'伐楚',
bilibili_fachu_info:'当你对其他角色造成伤害而导致其进入濒死状态后，你可以随机废除其一个装备区。',
'baiqi_changsheng':'常胜',
'baiqi_changsheng_info':'锁定技，你使用【杀】无距离限制。',
miyue_zhangzheng:'掌政',
miyue_zhangzheng_info:'锁定技，你的回合开始时，所有非秦势力角色依次选择：1.弃置一张手牌；2.失去1点体力。',
bilibili_zhangzheng:'掌政',
bilibili_zhangzheng_info:'准备阶段，你可以选择至多X名其他角色（X为场上存活人数的一半，向上取整），这些角色依次选择：1.弃置一张手牌；2.失去1点体力。',
'miyue_taihou':'太后',
'miyue_taihou_info':'锁定技，男性角色对你使用【杀】或普通锦囊牌时，需要额外弃置一张同种类型的牌，否则此牌无效。',
'miyue_youmie':'诱灭',
'miyue_youmie_info':'出牌阶段限一次，你可以将一张牌交给一名角色，若如此做，直到你的下个回合开始，该角色于其回合外无法使用或打出牌。',
'miyue_yintui':'隐退',
'miyue_yintui_info':'锁定技，当你失去最后一张手牌时，你翻面。你的武将牌背面朝上时，若受到伤害，令此伤害-1，然后摸一张牌。',
'lvbuwei_jugu':'巨贾',
'lvbuwei_jugu_info':'锁定技，你的手牌上限+X；游戏开始时，你多摸X张牌（X为你的体力上限）。',
'lvbuwei_qihuo':'奇货',
'lvbuwei_qihuo_info':'出牌阶段限一次，你可以弃置一种类型的牌，并摸等同于你弃置牌数量两倍的牌。',
'lvbuwei_chunqiu':'春秋',
'lvbuwei_chunqiu_info':'锁定技，每个回合你使用或打出每种类型的第一张牌时，摸一张牌。',
lvbuwei_baixiang:'拜相',
lvbuwei_baixiang_info:'觉醒技，你的回合开始时，若你的手牌数大于等于你当前体力的两倍，则你将体力恢复至体力上限，并获得技能〖仲父〗。',
lvbuwei_zhongfu:'仲父',
lvbuwei_zhongfu_info:'锁定技，你的回合开始时，你随机获得〖界奸雄〗、〖界仁德〗、〖界制衡〗中的一个直到你的下个回合开始为止。',
'zhaoji_shanwu':'善舞',
'zhaoji_shanwu_info':'锁定技，你使用【杀】指定目标后，你进行判定，若为黑色，则目标角色不能使用【闪】；当你成为【杀】的目标后，你进行判定，若为红色，则此【杀】无效。',
'zhaoji_daqi':'大期',
'zhaoji_daqi_info':'锁定技，你每使用或打出一张手牌、造成1点伤害、受到1点伤害，均会得到一个「期」标记。你的回合开始时，若你拥有的「期」标记大于等于10，则弃置所有「期」，体力回复至体力上限，并将手牌补至体力上限。',
'zhaoji_xianji':'献姬',
'zhaoji_xianji_info':'限定技，出牌阶段，你可以弃置所有手牌、装备牌和「期」标记，失去1点体力上限，然后立即发动大期的回复体力和补牌效果。',
'zhaoji_huoluan':'祸乱',
'zhaoji_huoluan_info':'锁定技，你每次发动大期的回复体力和补牌效果后，你对所有其他角色造成1点伤害。',
zhaogao_zhilu:'指鹿',
zhaogao_zhilu2:'指鹿',
zhaogao_zhilu_info:'你可以将红色手牌当【闪】使用或打出；将黑色手牌当【杀】使用或打出。',
zhaogao_zhilu2_info:'你可以将红色手牌当【闪】使用或打出；将黑色手牌当【杀】使用或打出。',
zhaogao_gaizhao:'改诏',
zhaogao_gaizhao_info:'当你成为【杀】或普通锦囊牌的目标后（借刀杀人除外），若场上有其他秦势力角色存活，你可以将此牌的目标改为其他不是该牌目标的秦势力角色。',
zhaogao_haizhong:'害忠',
zhaogao_haizhong_info:'锁定技，非秦势力角色回复体力时，其需要选择：1.弃置一张红色牌，2.受到你造成的X点伤害（X为该角色拥有的「害」标记，且至少为1）。然后该角色获得一个「害」标记。',
bilibili_gaizhao:'改诏',
bilibili_gaizhao_info:'当你成为【杀】或普通锦囊牌的目标后（借刀杀人除外），若场上有其他友方角色存活，你可以将此牌的目标改为其他不是该牌目标的友方角色。',
bilibili_haizhong:'害忠',
bilibili_haizhong_info:'其他角色回复体力时，你可以令其选择一项：1.弃置一张红色牌，2.受到你造成的X点伤害（X为该角色拥有的「害」标记，且至少为1）。然后该角色获得一个「害」标记。',
zhaogao_yuanli:'爰历',
zhaogao_yuanli_info:'锁定技，出牌阶段开始时，你获得两张普通锦囊牌。',
daqin_lvbuwei_rezhiheng:'制衡',
daqin_lvbuwei_rezhiheng_info:'出牌阶段限一次，你可以弃置任意张牌并摸等量的牌，若你发动〖制衡〗时弃置了所有手牌，则你多摸一张牌。',
daqin_lvbuwei_rerende:'仁德',
daqin_lvbuwei_rerende_info:'出牌阶段，你可以将至少一张手牌交给其他角色，然后你于此阶段内不能再以此法交给该角色牌；若你于此阶段内给出的牌首次达到两张，你可以视为使用一张基本牌',
daqin_lvbuwei_rejianxiong:'奸雄',
daqin_lvbuwei_rejianxiong_info:'当你受到伤害后，你可以获得对你造成伤害的牌并摸一张牌。',
},
};
if(lib.device||lib.node){
for(var i in hezongkangqincharacter.character){hezongkangqincharacter.character[i][4].push('ext:活动武将/'+i+'.jpg');}
}else{for(var i in hezongkangqincharacter.character){hezongkangqincharacter.character[i][4].push('db:extension-活动武将:'+i+'.jpg');}
}
return hezongkangqincharacter;
});
lib.config.all.characters.push('hezongkangqincharacter');
if(!lib.config.characters.contains('hezongkangqincharacter')) lib.config.characters.remove('hezongkangqincharacter');
lib.translate['hezongkangqincharacter_character_config']='抗秦身份版';
//微信小程序三国杀
//没想到有朝一日会解禁
game.import('character',function(){
var WeChatkill={
name:'WeChatkill',
connect:true,
characterSort:{
WeChatkill:{
/*
WeChat_wei:['WEI_caocao','WEI_caopi','WEI_caoang','WEI_guojia','WEI_zhenji','WEI_caochong','WEI_caoren','WEI_wangyi','WEI_zhangchunhua','WEI_simayi','WEI_xiahoudun','WEI_xuzhu','WEI_zhangliao','WEI_guohuai','WEI_dianwei','WEI_zhanghe'],
WeChat_shu:['SHU_'],
WeChat_wu:['WU_'],
WeChat_qun:['QUN_'],
*/
WeChat_shen:['Mshen_lvbu','Mshen_zhugeliang','Mshen_lvmeng','Mshen_zhouyu','Mshen_guanyu','Mshen_liubei','Mshen_caocao','Mshen_zhangliao','Mshen_sunquan','Mshen_simayi','Mshen_zhaoyun','Mshen_ganning','Mshen_luxun'],
},
},
character:{
/*
//魏
WEI_caocao:['male','wei',4,['new_rejianxiong','hujia'],['zhu']],
WEI_caopi:['male','wei',3,['xingshang','minifangzhu','songwei'],['zhu']],
WEI_caoang:['male','wei',4,['minikaikang'],[]],
WEI_guojia:['male','wei',3,['tiandu','yiji'],[]],
WEI_zhenji:['female','wei',3,['miniluoshen','qingguo'],[]],
WEI_caochong:['male','wei',3,['minichengxiang','renxin'],[]],
WEI_caoren:['male','wei',4,['jushou'],[]],
WEI_wangyi:['female','wei',4,['zhenlie','miji'],[]],
WEI_zhangchunhua:['female','wei',3,['jueqing','shangshi'],[]],
WEI_simayi:['male','wei',3,['guicai','fankui'],[]],
WEI_xiahoudun:['male','wei',4,['reganglie'],[]],
WEI_xuzhu:['male','wei',4,['luoyi'],[]],
WEI_zhangliao:['male','wei',4,['new_retuxi'],[]],
WEI_guohuai:['male','wei',4,['jingce'],[]],
WEI_dianwei:['male','wei',4,['miniqiangxi'],[]],
WEI_zhanghe:['male','wei',4,['miniqiaobian'],[]],
//蜀
//吴
//群
*/
//神
Mshen_zhugeliang:['male','shen',3,['miniqixing','minikuangfeng','minidawu'],['shu']],
Mshen_lvbu:['male','shen',6,['miniwuqian','minishenfen'],['qun']],
Mshen_lvmeng:['male','shen',3,['shelie','minigongxin'],['wu']],
Mshen_guanyu:['male','shen',5,['miniwushen','miniwuhun'],['shu']],
Mshen_zhouyu:['male','shen',4,['miniqinyin','miniyeyan'],['wu']],
Mshen_caocao:['male','shen',3,['miniguixin','feiying'],['wei']],
Mshen_liubei:['male','shen',6,['minilongnu','minijieying'],['shu']],
Mshen_zhangliao:['male','shen',4,['miniduorui','minizhiti'],['wei']],
Mshen_sunquan:['male','shen',4,['miniquantui','minishehu','minidingli'],['wu']],
Mshen_simayi:['male','shen',3,['minirenjie','minijilve','lianpo'],['wei']],
Mshen_zhaoyun:['male','shen',2,['minijuejing','minilonghun'],['shu']],
Mshen_ganning:['male','shen','3/6',['minipoxi','drlt_jieying'],['wu']],
Mshen_luxun:['male','shen',4,['nzry_junlve','nzry_cuike','nzry_dinghuo'],['wu']],
},
skill:{
//魏
miniqiangxi:{
audio:'qiangxi',
trigger:{
source:'damageBegin1',
},
filter:function(event,player){
return player.getEquip(1)&&!player.getHistory('sourceDamage').length;
},
logTarget:'player',
direct:true,
check:function(trigger,player){
if(get.attitude(player,trigger.player)>=-1) return false;
return !trigger.player.hasSkillTag('filterDamage',null,{
player:player,
card:trigger.card,
});
},
content:function (){
var equip=player.getEquip(1);
if(equip){
player.discard(equip,'notBySelf');
}
trigger.num++;
},
},
miniluoshen:{
audio:'luoshen',
trigger:{player:'phaseZhunbeiBegin'},
frequent:true,
content:function(){
'step 0'
if(event.cards==undefined) event.cards=[];
var next=player.judge(function(card){
if(get.color(card)=='black') return 1.5;
return -1.5;
});
if(get.mode()!='guozhan'&&!player.hasSkillTag('rejudge')) next.set('callback',function(){
if(get.position(card,true)=='o') player.gain(card,'gain2');
});
else next.set('callback',function(){
event.getParent().orderingCards.remove(card);
});
'step 1'
if(result.judge>0){
event.cards.push(result.card);
player.chooseBool('是否再次发动【洛神】？').set('frequentSkill','miniluoshen');
}
else{
for(var i=0;i<event.cards.length;i++){
if(get.position(event.cards[i],true)!='o'){
event.cards.splice(i,1);i--;
}
}
if(event.cards.length){
player.gain(event.cards,'gain2');
}
event.finish();
}
'step 2'
if(result.bool){
event.goto(0);
}
else{
if(event.cards.length){
player.gain(event.cards,'gain2');
}
}
}
},
miniqiaobian:{
audio:'qiaobian',
group:['qiaobian1','qiaobian2','qiaobian3','qiaobian4','miniqiaobian_draw'],
subSkill:{
draw:{
sub:true,
trigger:{player:'phaseJieShuBegin'},
audio:'qiaobian',
filter:function(event,player){
return player.getHistory('skipped').length>=3;
},
forced:true,
content:function(){
player.draw(2);
}
},
},
},
minichengxiang:{
forced:true,
audio:'chengxiang',
inherit:'chengxiang',
},
minifangzhu:{
audio:'fangzhu',
trigger:{player:'damageEnd'},
direct:true,
content:function(){
'step 0'
player.chooseTarget(get.prompt('minifangzhu'),'令一名其他角色将武将牌翻面并摸一张牌',function(card,player,target){
return player!=target
}).ai=function(target){
if(target.hasSkillTag('noturn')) return 0;
var player=_status.event.player;
if(get.attitude(player,target)>2&&target.isTurnedOver()) return 10;
return 6;
}
'step 1'
if(result.bool){
player.logSkill('minifangzhu',result.targets);
game.asyncDraw(player,result.targets[0]);
result.targets[0].turnOver();
}
},
ai:{
maixie:true,
maixie_hp:true,
effect:{
target:function(card,player,target){
if(get.tag(card,'damage')){
if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
if(target.hp<=1) return;
if(!target.hasFriend()) return;
var hastarget=false;
var turnfriend=false;
var players=game.filterPlayer();
for(var i=0;i<players.length;i++){
if(get.attitude(target,players[i])<0&&!players[i].isTurnedOver()){
hastarget=true;
}
if(get.attitude(target,players[i])>0&&players[i].isTurnedOver()){
hastarget=true;
turnfriend=true;
}
}
if(get.attitude(player,target)>0&&!hastarget) return;
if(turnfriend||target.hp==target.maxHp) return [0.5,1];
if(target.hp>1) return [1,0.5];
}
}
}
},
},
minikaikang:{
audio:'kaikang',
group:'minikangkai',
trigger:{global:'useCardToTargeted'},
filter:function(event,player){
return event.card.name=='sha'&&get.distance(player,event.target)<=1;
},
forced:true,
content:function(){
'step 0'
player.draw();
if(trigger.target!=player&&player.countMark('minikaikang')<2){
player.chooseCard('he','是否交给'+get.translation(trigger.target)+'一张牌？').set('ai',function(card){
if(get.position(card)=='e') return -1;
if(card.name=='shan'&&get.attitude(player,trigger.target)>0) return 1;
if(get.type(card)=='equip'&&get.attitude(player,trigger.target)>0) return 0.5;
if(card.name=='du'&&get.attitude(player,trigger.target)<0) return 5;
return 0;
});
}else{
event.finish();
}
'step 1'
if(result.bool){
player.addMark('minikaikang',false);
trigger.target.gain(result.cards,player,'give');
game.delay();
event.card=result.cards[0];
}else{
event.finish();
}
'step 2'
if(trigger.target.getCards('h').contains(card)&&get.type(card)=='equip'){
trigger.target.chooseUseTarget(card);
}
},
ai:{
threaten:1.1
}
},
minikangkai:{
trigger:{player:'phaseEnd'},
direct:true,
content:function(){
player.removeMark('minikaikang',player.countMark('minikaikang'),false);
},
},
//蜀
//吴
//群
//神
miniwuqian:{
audio:'ol_wuqian',
trigger:{player:'useCardToPlayered'},
filter:function(event,player){
return (event.card.name=='sha'||event.card.name=='juedou')&&player==_status.currentPhase&&
player.getHistory('useCard',function(evt){
return (evt.card.name=='sha'||evt.card.name=='juedou');
}).indexOf(event.getParent())==0;
},
forced:true,
logTarget:'target',
content:function(){
trigger.target.addTempSkill('qinggang2');
trigger.target.storage.qinggang2.add(trigger.card);
if(trigger.card.name=='sha'){
var id=trigger.target.playerid;
var map=trigger.getParent().customArgs;
if(!map[id]) map[id]={};
if(typeof map[id].shanRequired=='number'){
map[id].shanRequired++;
}
else{
map[id].shanRequired=2;
}
}
else{
var id=trigger.target.playerid;
var idt=trigger.target.playerid;
var map=trigger.getParent().customArgs;
if(!map[idt]) map[idt]={};
if(!map[idt].shaReq) map[idt].shaReq={};
if(!map[idt].shaReq[id]) map[idt].shaReq[id]=1;
map[idt].shaReq[id]++;
}
},
ai:{
unequip_ai:true,
skillTagFilter:function (player,tag,arg){
if(arg&&arg.name=='sha'&&!player.countUsed('sha')) return true;
return false;
},
},
},
minishenfen:{
audio:'ol_shenfen',
enable:'phaseUse',
skillAnimation:true,
animationColor:'metal',
limited:true,
content:function(){
'step 0'
player.awakenSkill('minishenfen');
player.loseHp(3);
event.delay=false;
event.targets=game.filterPlayer();
event.targets.remove(player);
event.targets.sort(lib.sort.seat);
player.line(event.targets,'green');
event.targets2=event.targets.slice(0);
event.targets3=event.targets.slice(0);
'step 1'
if(event.targets2.length){
event.targets2.shift().damage('nocard');
event.redo();
}
'step 2'
if(event.targets.length){
event.current=event.targets.shift()
if(event.current.countCards('e')) event.delay=true;
event.current.discard(event.current.getCards('e')).delay=false;
}
'step 3'
if(event.delay) game.delay(0.5);
event.delay=false;
if(event.targets.length) event.goto(2);
'step 4'
if(event.targets3.length){
var target=event.targets3.shift();
target.chooseToDiscard(4,'h',true).delay=false;
if(target.countCards('h')) event.delay=true;
}
'step 5'
if(event.delay) game.delay(0.5);
event.delay=false;
if(event.targets3.length) event.goto(4);
},
ai:{
order:10,
result:{
player:function (player){
if(player.hp<5||player.hasUnknown()) return 0;
return game.countPlayer(function(current){
if(current!=player){
return get.sgn(get.damageEffect(current,player,player));
}
});
},
},
},
mark:true,
intro:{
content:'limited',
},
init:function (player,skill){
player.storage[skill]=false;
},
},
minigongxin:{
audio:'gongxin',
trigger:{player:'useCardToPlayered',target:'useCardToTargeted'},
usable:1,
filter:function(event,player){
if(event.player==event.target||event.targets.length!=1) return false;
return (player==event.player?event.target:event.player).countCards('h')>0;
},
logTarget:function (event,player){
return player==event.player?event.target:event.player;
},
check:function (event,player){
return get.attitude(player,player==event.player?event.target:event.player)<=0;
},
content:function(){
'step 0'
var target=(player==trigger.player?trigger.target:trigger.player);
event.target=target;
event.videoId=lib.status.videoId++;
var cards=target.getCards('h');
if(player.isOnline2()){
player.send(function(cards,id){
ui.create.dialog('攻心',cards).videoId=id;
},cards,event.videoId);
}
event.dialog=ui.create.dialog('攻心',cards);
event.dialog.videoId=event.videoId;
if(!event.isMine()){
event.dialog.style.display='none';
}
player.chooseButton().set('filterButton',function(button){
return get.color(button.link)=='red';
}).set('dialog',event.videoId).set('ai',function(button){
return get.value(button.link);
});
'step 1'
if(result.bool){
event.card=result.links[0];
var func=function(card,id){
var dialog=get.idDialog(id);
if(dialog){
for(var i=0;i<dialog.buttons.length;i++){
if(dialog.buttons[i].link==card){
dialog.buttons[i].classList.add('selectedx');
}
else{
dialog.buttons[i].classList.add('unselectable');
}
}
}
}
if(player.isOnline2()){
player.send(func,event.card,event.videoId);
}
else if(event.isMine()){
func(event.card,event.videoId);
}
player.chooseControl('获得此牌','置于牌堆顶');
}
else{
if(player.isOnline2()){
player.send('closeDialog',event.videoId);
}
event.dialog.close();
event.finish();
}
'step 2'
if(player.isOnline2()){
player.send('closeDialog',event.videoId);
}
event.dialog.close();
var card=event.card;
if(result.control=='置于牌堆顶'){
player.showCards(card,'置于牌堆顶');
target.lose(card,ui.cardPile,'insert','visible');
game.log(player,'将',event.card,'置于牌堆顶');
}
else player.gain(card,target,'give');
},
ai:{
threaten:1.7,
expose:0.4,
},
},
miniqixing:{
audio:'qixing',
unique:true,
trigger:{global:'phaseBefore',player:'enterGame'},
forced:true,
filter:function(event,player){
return (event.name!='phase'||game.phaseNumber==0);
},
content:function(){
player.markAuto('miniqixing',game.cardsGotoSpecial(get.cards(7)).cards);
},
mark:true,
intro:{
onunmark:function(storage,player){
if(storage&&storage.length){
player.$throw(storage,1000);
game.cardsDiscard(storage);
game.log(storage,'被置入了弃牌堆');
storage.length=0;
}
},
mark:function(dialog,content,player){
if(content&&content.length){
if(player==game.me||player.isUnderControl()){
dialog.addAuto(content);
}
else{
return '共有'+get.cnNumber(content.length)+'张星';
}
}
},
content:function(content,player){
if(content&&content.length){
if(player==game.me||player.isUnderControl()){
return get.translation(content);
}
return '共有'+get.cnNumber(content.length)+'张星';
}
}
},
group:'miniqixing_draw',
subSkill:{
draw:{
trigger:{player:'phaseDrawAfter'},
direct:true,
filter:function(event,player){
return player.storage.miniqixing&&player.storage.miniqixing.length;
},
content:function(){
'step 0'
var cards=player.getStorage('miniqixing');
if(!cards.length||!player.countCards('h')){
event.finish();
return;
}
var next=player.chooseToMove('七星：是否交换“星”和手牌？');
next.set('list',[
[get.translation(player)+'（你）的星',cards],
['手牌区',player.getCards('h')],
]);
next.set('filterMove',function(from,to){
return typeof to!='number';
});
next.set('processAI',function(list){
var player=_status.event.player,cards=list[0][1].concat(list[1][1]).sort(function(a,b){
return get.value(a)-get.value(b);
}),cards2=cards.splice(0,player.storage.miniqixing.length);
return [cards2,cards];
});
'step 1'
if(result.bool){
var pushs=result.moved[0],gains=result.moved[1];
pushs.removeArray(player.storage.miniqixing);
gains.removeArray(player.getCards('h'));
if(!pushs.length||pushs.length!=gains.length) return;
player.logSkill('miniqixing');
player.lose(pushs,ui.special,'toStorage');
game.log(player,'将',pushs,'作为“星”置于武将牌上');
player.gain(gains,'gain2','log','fromStorage');
player.storage.miniqixing.addArray(pushs);
player.storage.miniqixing.removeArray(gains);
player.markSkill('miniqixing');
}
}
},
},
},
minikuangfeng:{
audio:'kuangfeng',
trigger:{player:'phaseUseEnd'},
direct:true,
filter:function(event,player){
return player.getStorage('miniqixing').length>0;
},
content:function(){
'step 0'
player.chooseTarget([1,Math.min(game.players.length,player.getStorage('miniqixing').length)],get.prompt2('minikuangfeng')).set('ai',function(target){
var player=_status.event.player;
var eff=get.damageEffect(target,player,player);
if(target.hp==1||!ui.selected.targets.length) return eff;
return 0;
});
'step 1'
if(result.bool){
event.targets=result.targets;
player.chooseButton(['请选择要移去的“星”',player.getStorage('miniqixing')],true,result.targets.length).set('ai',function(button){
return -get.value(button.link);
});
}
else event.finish();
'step 2'
var cards=result.links;
player.logSkill('minikuangfeng',targets);
player.$throw(cards,2000);
player.unmarkAuto('miniqixing',cards);
game.cardsDiscard(cards);
for(var i of targets) i.damage();
},
},
minidawu:{
audio:'dawu',
trigger:{player:'phaseJieshuBegin'},
direct:true,
filter:function(event,player){
return player.getStorage('miniqixing').length>0;
},
content:function(){
'step 0'
player.chooseButton([get.prompt('minidawu'),player.getStorage('miniqixing')]).set('ai',function(button){
return 1/Math.max(0.01,get.value(button.link));
});
'step 1'
if(result.bool){
var cards=result.links;
player.logSkill('minidawu');
player.$throw(cards,2000);
player.unmarkAuto('miniqixing',cards);
game.cardsDiscard(cards);
player.addTempSkill('minidawu_damage',{player:'phaseBegin'});
}
},
subSkill:{
damage:{
trigger:{player:'damageBegin3'},
filter:function(event){
return event.num>0;
},
mark:true,
forced:true,
charlotte:true,
content:function(){
trigger.num--;
},
ai:{
nofire:true,
nothunder:true,
nodamage:true,
},
intro:{content:'受到的伤害-1'}
},
},
},
miniguixin:{
audio:'guixin',
trigger:{player:'damageEnd'},
check:function (event,player){
if(player.isTurnedOver()||event.num>1) return true;
var num=game.countPlayer(function(current){
if(current.countCards('he')&&current!=player&&get.attitude(player,current)<=0){
return true;
}
if(current.countCards('j')&&current!=player&&get.attitude(player,current)>0){
return true;
}
});
return num>=2;
},
content:function(){
'step 0'
var targets=game.filterPlayer();
targets.remove(player);
targets.sort(lib.sort.seat);
event.targets=targets;
event.count=trigger.num;
'step 1'
event.num=0;
player.line(targets,'green');
'step 2'
if(num<event.targets.length){
if(!get.is.altered('miniguixin')){
if(event.targets[num].countGainableCards(player,'hej')){
player.gainPlayerCard(event.targets[num],true,'hej');
}
}
else{
var hej=event.targets[num].getCards('hej')
if(hej.length){
var card=hej.randomGet();
player.gain(card,event.targets[num]);
if(get.position(card)=='h'){
event.targets[num].$giveAuto(card,player);
}
else{
event.targets[num].$give(card,player);
}
}
}
event.num++;
event.redo();
}
'step 3'
if(event.num>4&&!player.isTurnedOver()){
player.turnOver();
}
'step 4'
event.count--;
if(event.count){
player.chooseBool(get.prompt2('miniguixin'));
}
else{
event.finish();
}
'step 5'
if(event.count&&result.bool){
event.goto(1);
}
},
ai:{
maixie:true,
maixie_hp:true,
threaten:function (player,target){
if(target.hp==1) return 2.5;
return 1;
},
effect:{
target:function (card,player,target){
if(get.tag(card,'damage')){
if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
if(target.hp==1) return 0.8;
if(target.isTurnedOver()) return [0,3];
var num=game.countPlayer(function(current){
if(current.countCards('he')&&current!=player&&get.attitude(player,current)<=0){
return true;
}
if(current.countCards('j')&&current!=player&&get.attitude(player,current)>0){
return true;
}
});
if(num>2) return [0,1];
if(num==2) return [0.5,1];
}
},
},
},
},
miniwushen:{
mod:{
cardname:function (card,player,name){
if(get.suit(card)=='heart') return 'sha';
},
cardnature:function (card,player){
if(get.suit(card)=='heart') return false;
},
targetInRange:function (card){
if(get.suit(card)=='heart') return true;
},
},
audio:'wushen',
trigger:{source:'damageBefore'},
forced:true,
filter:function(event,player){
return event.card.name=='sha'&&get.suit(event.card)=='heart';
},
content:function(){
trigger.num++; 
},
ai:{
effect:{
target:function (card,player,target,current){
if(get.tag(card,'respondSha')&&current<0) return 0.6
},
},
'directHit_ai':true,
skillTagFilter:function (player,tag,arg){
return arg.card.name=='sha'&&get.suit(arg.card)=='heart';
},
},
},
miniwuhun:{
audio:'wuhun',
group:['miniwuhun_mark','miniwuhun_die','wuhun22','wuhun23'],
trigger:{player:'damageEnd'},
forced:true,
filter:function(event,player){
return event.source!=undefined;
},
content:function(){
trigger.source.addMark('miniwuhun_mark',trigger.num);
},
subSkill:{
die:{
skillAnimation:true,
animationColor:'soil',
trigger:{player:['die','dyingAfter']},
forced:true,
forceDie:true,
direct:true,
filter:function (event,player){
return game.hasPlayer(function(current){
return current!=player&&current.hasMark('miniwuhun_mark');
});
},
content:function(){
'step 0'
var num=0;
for(var i=0;i<game.players.length;i++){
var current=game.players[i];
if(current!=player&&current.countMark('miniwuhun_mark')>num){
num=current.countMark('miniwuhun_mark');
}
}
player.chooseTarget(true,'请选择【武魂】的目标',function(card,player,target){
return target!=player&&target.countMark('miniwuhun_mark')==_status.event.num;
}).set('ai',function(target){
return -get.attitude(_status.event.player,target);
}).set('forceDie',true).set('num',num);
'step 1'
if(result.bool&&result.targets&&result.targets.length){
var target=result.targets[0];
event.target=target;
player.logSkill(Math.random()<0.5?'wuhun22':'wuhun23',target);
player.line(target,{color:[255, 255, 0]});
game.delay(2);
}
'step 2'
target.judge(function(card){
if(['tao','taoyuan'].contains(card.name)) return 10;
return -10;
});
'step 3'
if(!result.bool) lib.element.player.die.apply(target,[]);
},
sub:true,
},
mark:{
marktext:'魇',
intro:{
name:'梦魇',
content:'mark',
},
sub:true,
},
},
ai:{
threaten:0.01,
notemp:true,
},
},
miniyeyan:{
audio:'yeyan',
trigger:{player:'phaseUseBegin'},
direct:true,
content:function(){
'step 0'
player.chooseTarget(get.prompt2('miniyeyan'),lib.filter.notMe).set('ai',function(target){
if(get.attitude(player,target)<0&&target.hp==1) return 2;
if(get.attitude(player,target)<0) return 1;
return 0;
});
'step 1'
if(result.bool){
player.logSkill('miniyeyan',result.targets[0]);
result.targets[0].damage('fire');
}
else event.finish();
},
},
miniqinyin:{
audio:'qinyin',
trigger:{player:'phaseDiscardEnd'},
direct:true,
filter:function(event,player){
var cards=[];
player.getHistory('lose',function(evt){
if(evt.type=='discard'&&evt.getParent('phaseDiscard')==event) cards.addArray(evt.cards2);
});
return cards.length>0;
},
content:function(){
'step 0'
event.forceDie=true;
if(typeof event.count!='number') event.count=1;
var recover=0,lose=0,players=game.filterPlayer();
for(var i=0;i<players.length;i++){
if(players[i].hp<players[i].maxHp){
if(get.attitude(player,players[i])>0){
if(players[i].hp<2){
lose--;
recover+=0.5;
}
lose--;
recover++;
}
else if(get.attitude(player,players[i])<0){
if(players[i].hp<2){
lose++;
recover-=0.5;
}
lose++;
recover--;
}
}
else{
if(get.attitude(player,players[i])>0){
lose--;
}
else if(get.attitude(player,players[i])<0){
lose++;
}
}
}
var prompt=get.prompt('miniqinyin')+'（剩余'+get.cnNumber(event.count)+'次）';
player.chooseControl('失去体力','回复体力','cancel2',
ui.create.dialog(get.prompt('miniqinyin'),'hidden')).ai=function(){
if(lose>recover&&lose>0) return 0;
if(lose<recover&&recover>0) return 1;
return 2;
}
'step 1'
if(result.control!='cancel2'){
player.logSkill('miniqinyin2');
event.bool=(result.control=='回复体力');
if(event.bool) game.playAudio('skill','qinyin1');
else game.playAudio('skill','qinyin2');
event.num=0;
event.players=game.filterPlayer();
}
else event.finish();
'step 2'
if(event.num<event.players.length){
var target=event.players[event.num];
if(event.bool) target.recover();
else target.loseHp();
event.num++;
event.redo();
}
'step 3'
if(event.count>1){
event.count--;
event.goto(0);
}
else event.finish();
},
ai:{
expose:0.1,
threaten:2,
},
},
miniqinyin2:{},
minilongnu:{
audio:'nzry_longnu',
trigger:{player:'phaseUseBegin'},
forced:true,
content:function(){
'step 0'
var list=['失去一点体力并摸两张牌，本回合你的红色牌均视为火杀且无距离限制','减一点体力上限，本回合你的锦囊牌均视为雷杀且无使用次数限制'];
player.chooseControl().set('choiceList',list).set('ai',function(){
if(player.countCards()<=3&&player.maxHp-player.hp<=1) return 0;
return 1;
});
'step 1'
if(result.index==0){
player.loseHp();
player.draw(2);
player.addTempSkill('minilongnu_1');
}
else{
player.loseMaxHp();
player.addTempSkill('minilongnu_2');
}
},
subSkill:{
'1':{
mod:{
cardname:function (card,player){
if(get.color(card)=='red') return 'sha';
},
cardnature:function (card,player){
if(get.color(card)=='red') return 'fire';
},
targetInRange:function (card){
if(get.color(card)=='red') return true;
},
},
ai:{
effect:{
target:function (card,player,target,current){
if(get.tag(card,'respondSha')&&current<0) return 0.6
},
},
respondSha:true,
},
sub:true,
},
'2':{
mod:{
cardname:function (card,player){
if(['trick','delay'].contains(lib.card[card.name].type)) return 'sha';
},
cardnature:function (card,player){
if(['trick','delay'].contains(lib.card[card.name].type)) return 'thunder';
},
cardUsable:function (card,player){
if(card.name=='sha'&&card.nature=='thunder') return Infinity;
},
},
ai:{
effect:{
target:function (card,player,target,current){
if(get.tag(card,'respondSha')&&current<0) return 0.6
},
},
respondSha:true,
},
sub:true,
},
},
ai:{
fireAttack:true,
halfneg:true,
threaten:1.05,
},
},
minijieying:{
audio:'nzry_jieying',
locked:true,
global:'minijieying_all',
group:['minijieying_1','minijieying_2','minijieying_3'],
subSkill:{
'1':{
audio:'nzry_jieying',
trigger:{player:['linkBefore','enterGame'],global:'phaseBefore'},
forced:true,
filter:function(event,player){
if(event.name=='link') return player.isLinked();
return (event.name!='phase'||game.phaseNumber==0)&&!player.isLinked();
},
content:function(){
if(trigger.name!='link') player.link(true);
else trigger.cancel();
},
},
'2':{
audio:'nzry_jieying',
trigger:{player:'phaseJieshuBegin'},
direct:true,
filter:function(event,player){
return game.hasPlayer(function(current){
return current!=player&&!current.isLinked();
});
},
content:function(){
'step 0'
player.chooseTarget(true,'请选择【结营】的目标',function(card,player,target){
return target!=player&&!target.isLinked();
}).ai=function(target){
return 1+Math.random();
};
'step 1'
if(result.bool){
player.line(result.targets);
player.logSkill('minijieying');
result.targets[0].link(true);
}
else event.finish();
},
sub:true,
},
'3':{
audio:'nzry_jieying',
trigger:{player:'damageEnd'},
forced:true,
content:function(){player.draw()},
sub:true,
},
all:{
mod:{
maxHandcard:function (player,num){
if(game.countPlayer(function(current){return current.hasSkill('minijieying')})>0&&player.isLinked()) return num+2;
},
},
},
},
ai:{
effect:{
target:function (card){
if(card.name=='tiesuo') return 'zeroplayertarget';
},
},
},
},
miniduorui:{
audio:'drlt_duorui',
trigger:{player:'phaseUseBegin'},
filter:function(event,player){
return game.hasPlayer(function(current){
return current!=player&&current.countCards('h')>0;
});
},
direct:true,
content:function(){
'step 0'
player.chooseTarget(get.prompt2('miniduorui'),function(target){
if(player==target) return false;
return target.countCards('h')>0;
}).set('ai',function(target){
return -get.attitude(player,target)*target.getDamagedHp();
});
'step 1'
if(result.bool){
player.logSkill('miniduorui',result.targets[0]);
player.gainPlayerCard(result.targets[0],'h',true,'visible'); 
result.targets[0].addTempSkill('miniduorui_target');
}
else event.finish();
'step 2'
player.popup(get.translation(get.color(result.cards[0])));
player.addTempSkill('miniduorui_'+get.color(result.cards[0]));
},
subSkill:{
target:{charlotte:true},
red:{
audio:'drlt_duorui',
trigger:{player:'useCardToPlayered'},
forced:true,
filter:function(event,player){
return event.card&&get.color(event.card)=='red'&&event.target.hasSkill('miniduorui_target');
},
content:function(){
trigger.getParent().directHit.add(trigger.target);
},
},
black:{
audio:'drlt_duorui',
trigger:{player:'useCardToPlayered'},
forced:true,
filter:function(event,player){
return event.card&&get.color(event.card)=='black'&&event.target.hasSkill('miniduorui_target');
},
content:function(){
trigger.getParent().directHit.add(trigger.target);
},
},
},
},
minizhiti:{
mod:{
cardUsable:function (card,player,num){
if(card.name=='sha'&&game.countPlayer(function(current){
return current.isDamaged();
})>2) return num+1;
},
},
audio:'drlt_zhiti',
trigger:{player:'phaseDrawBegin2'},
forced:true,
filter:function(event,player){
return game.countPlayer(function(current){
return current.isDamaged();
})>1;
},
direct:true,
content:function(){
trigger.num++; 
},
},
//劝退
miniquantui:{
group:'miniquantui_remove',
market:'学',
intro:{content:'mark',name:'劝学',name2:'学'},
trigger:{player:'phaseUseBegin'},
direct:true,
content:function(){
'step 0'
player.chooseTarget(get.prompt2('miniquantui'),[1,2],lib.filter.notMe).set('ai',function(target){
return !target.hasMark('miniquantui')&&-get.attitude(player,target);
});
'step 1'
if(result.bool){
result.targets.sortBySeat();
player.logSkill('miniquantui',result.targets);
for(var i of result.targets) i.addMark('miniquantui',1);
}
else event.finish();
},
ai:{
threaten:4.5,
expose:0.3
},
subSkill:{
remove:{
trigger:{global:'phaseZhunbeiBegin'},
filter:function(event,player){
return event.player.hasMark('miniquantui');
},
forced:true,
logTarget:'player',
content:function(){
'step 0'
trigger.player.removeMark('miniquantui',trigger.player.countMark('miniquantui'));
_status.event.player=trigger.player;
_status.event.trigger('BuXueLe');//劳资不学啦！[doge]
'step 1'
trigger.player.chooseControl().set('choiceList',[
'本回合不能对其他角色使用牌',
'失去一点体力',
]).set('ai',function(){
if((trigger.player.countCards('h')<trigger.player.getHandcardLimit())||trigger.player.hp<=2) return 0;
return 1;
});
'step 2'
if(result.index==0) trigger.player.addTempSkill('miniquantui_block');
else trigger.player.loseHp();
},
},
block:{
mark:true,
intro:{content:'不能对其他角色使用牌'},
mod:{
playerEnabled:function(card,player,target){
if(player!=target) return false;
},
},
},
},
},
minishehu:{
trigger:{player:'useCardToPlayered'},
forced:true,
filter:function(event,player){
return event.card.name=='sha'&&event.target.hasMark('miniquantui')&&event.target.countCards('h')>0;
},
logTarget:'target',
content:function(){
player.discardPlayerCard('h',true,trigger.target);
},
ai:{combo:'miniquantui'},
},
//什么？竟然不想学了？
minidingli:{
trigger:{global:'BuXueLe'},
filter:function(event,player){
return event.player!=player&&!player.hasSkill('minidingli2');
},
check:function(event,player){
if(event.player.hp>=player.hp&&player.isHealthy()) return false;
return true;
},
logTarget:'player',
content:function(){
player.addTempSkill('minidingli2','roundStart');
if(trigger.player.hp>=player.hp) player.recover();
else player.draw(Math.min(2,player.hp-trigger.player.hp));
},
ai:{combo:'miniquantui'},
},
minidingli2:{charlotte:true},
minirenjie:{
audio:'renjie2',
trigger:{player:['enterGame','damageEnd'],global:'phaseBefore'},
forced:true,
unique:true,
group:'minirenjie_lose',
notemp:true,
filter:function(event){
if(event.num=='damage') return event.num>0;
return event.name!='phase'||game.phaseNumber==0;
},
content:function(){
player.addMark('minirenjie',trigger.num||1);
},
intro:{
name2:'忍',
content:'mark'
},
ai:{
maixie:true,
maixie_hp:true,
},
subSkill:{
lose:{
audio:'renjie2',
trigger:{player:'loseAfter'},
forced:true,
filter:function(event,player){
if(event.type!='discard'||!event.cards2) return false;
var evt=event.getParent('phaseDiscard');
return evt&&evt.name=='phaseDiscard'&&evt.player==player;
},
content:function(){
player.addMark('minirenjie',trigger.cards2.length);
}
},
},
},
minijilve:{
unique:true,
audio:'jilue',
usable:1,
frequent:true,
derivation:['minijilve_guicai','minijilve_fangzhu','minijilve_wansha','minijilve_jizhi'],
group:['minijilve_guicai','minijilve_fangzhu','minijilve_wansha','minijilve_jizhi','minijilve_jizhi_clear'],
trigger:{player:'useJiLve'},
content:function(){player.draw()},
},
minijilve_guicai:{
nobracket:true,
audio:'jilue_guicai',
trigger:{global:'judge'},
direct:true,
filter:function(event,player){
return player.countCards('he')>0&&player.hasMark('minirenjie');
},
content:function(){
'step 0'
player.chooseCard('是否弃置一枚“忍”，并发动〖极略（鬼才）〗？','he',function(card){
var player=_status.event.player;
var mod2=game.checkMod(card,player,'unchanged','cardEnabled2',player);
if(mod2!='unchanged') return mod2;
var mod=game.checkMod(card,player,'unchanged','cardRespondable',player);
if(mod!='unchanged') return mod;
return true;
}).ai=function(card){
var trigger=_status.event.parent._trigger;
var player=_status.event.player;
var result=trigger.judge(card)-trigger.judge(trigger.player.judging[0]);
var attitude=get.attitude(player,trigger.player);
if(attitude==0||result==0) return 0;
if(attitude>0){
return result-get.value(card)/2;
}
else{
return -result-get.value(card)/2;
}
};
'step 1'
if(result.bool){
player.respond(result.cards,'highlight','minijilve_guicai','noOrdering');
_status.event.player=player;
_status.event.trigger('useJiLve');
}
else event.finish();
'step 2'
if(result.bool){
player.removeMark('minirenjie',1);
if(trigger.player.judging[0].clone){
trigger.player.judging[0].clone.delete();
game.addVideo('deletenode',player,get.cardsInfo([trigger.player.judging[0].clone]));
}
game.cardsDiscard(trigger.player.judging[0]);
trigger.player.judging[0]=result.cards[0];
trigger.orderingCards.addArray(result.cards);
game.log(trigger.player,'的判定牌改为',result.cards[0]);
game.delay(2);
}
},
ai:{
rejudge:true,
tag:{
rejudge:1,
}
}
},
minijilve_fangzhu:{
nobracket:true,
audio:'jilue_fangzhu',
trigger:{player:'damageEnd'},
direct:true,
filter:function(event,player){
return player.hasMark('minirenjie');
},
content:function(){
'step 0'
player.chooseTarget('是否弃置一枚“忍”，并对一名其他角色发动〖极略（放逐）〗？',lib.filter.notMe).ai=function(target){
if(target.hasSkillTag('noturn')) return 0;
if(target.isTurnedOver()) return get.attitude(player,target);
else return -get.attitude(player,target);
return 0;
}
'step 1'
if(result.bool){
player.removeMark('minirenjie',1);
player.logSkill('minijilve_fangzhu',result.targets);
_status.event.player=player;
_status.event.trigger('useJiLve');
player.draw();
result.targets[0].turnOver();
result.targets[0].draw();
}
},
ai:{
maixie:true,
maixie_hp:true,
effect:{
target:function(card,player,target){
if(get.tag(card,'damage')){
if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
if(target.hp<=1) return;
if(!target.hasFriend()) return;
var hastarget=false;
var turnfriend=false;
var players=game.filterPlayer();
for(var i=0;i<players.length;i++){
if(get.attitude(target,players[i])<0&&!players[i].isTurnedOver()){
hastarget=true;
}
if(get.attitude(target,players[i])>0&&players[i].isTurnedOver()){
hastarget=true;
turnfriend=true;
}
}
if(get.attitude(player,target)>0&&!hastarget) return;
if(turnfriend||target.hp==target.maxHp) return [0.5,1];
if(target.hp>1) return [1,0.5];
}
}
}
},
},
minijilve_wansha:{
nobracket:true,
audio:'wansha_shen_simayi',
enable:'phaseUse',
usable:1,
filter:function(event,player){
return player.hasMark('minirenjie')&&!player.hasSkill('SMYminiwansha');
},
content:function(){
player.removeMark('minirenjie',1);
_status.event.player=player;
_status.event.trigger('useJiLve');
player.addTempSkill('SMYminiwansha');
player.popup('完杀');
game.log(player,'获得了技能','#g【完杀】');
}
},
minijilve_jizhi:{
nobracket:true,
audio:'jilue_jizhi',
trigger:{player:'useCard'},
filter:function(event,player){
return (get.type(event.card,'trick')=='trick'&&event.card.isCard&&player.hasMark('minirenjie'));
},
init:function(player){
player.storage.minijilve_jizhi=0;
},
content:function(){
'step 0'
player.removeMark('minirenjie',1);
_status.event.player=player;
_status.event.trigger('useJiLve');
player.draw();
'step 1'
event.card=result[0];
if(get.type(event.card)=='basic'){
player.chooseBool('〖极略（集智）〗：是否弃置'+get.translation(event.card)+'并令本回合手牌上限+1？').set('ai',function(evt,player){
return _status.currentPhase==player&&player.needsToDiscard(-3)&&_status.event.value<6;
}).set('value',get.value(event.card,player));
}
'step 2'
if(result.bool){
player.discard(event.card);
player.storage.minijilve_jizhi++;
if(_status.currentPhase==player){
player.markSkill('minijilve_jizhi');
}
}
},
ai:{threaten:1.4},
mod:{
maxHandcard:function(player,num){
return num+player.storage.minijilve_jizhi;
}
},
intro:{content:'本回合手牌上限+#'},
subSkill:{
clear:{
trigger:{global:'phaseAfter'},
charlotte:true,
lastDo:true,
silent:true,
content:function(){
player.storage.minijilve_jizhi=0;
player.unmarkSkill('minijilve_jizhi');
}
}
}
},
SMYminiwansha:{
nobracket:true,
locked:true,
audio:'wansha_shen_simayi',
global:'SMYminiwansha2',
trigger:{global:'dying'},
forced:true,
preHidden:true,
filter:function(event,player,name){
return _status.currentPhase==player&&event.player!=player;
},
content:function(){},
},
SMYminiwansha2:{
mod:{
cardSavable:function(card,player){
if(!_status.currentPhase) return;
if(_status.currentPhase.isAlive()&&_status.currentPhase.hasSkill('SMYminiwansha')&&_status.currentPhase!=player){
if(card.name=='tao') return false;
}
},
cardEnabled:function(card,player){
if(!_status.currentPhase) return;
if(_status.currentPhase.isAlive()&&_status.currentPhase.hasSkill('SMYminiwansha')&&_status.currentPhase!=player){
if(card.name=='tao') return false;
}
}
}
},
minijuejing:{
mod:{
maxHandcard:function(player,num){
return num+3;
}
},
audio:'xinjuejing',
trigger:{player:['dying','dyingAfter']},
forced:true,
content:function(){
player.draw();
}
},
minilonghun:{
audio:'relonghun',
enable:['chooseToUse','chooseToRespond'],
prompt:'将♦牌当做杀，♥牌当做桃，♣牌当做闪，♠牌当做无懈可击使用或打出',
viewAs:function(cards,player){
var name=false;
var nature=null;
switch(get.suit(cards[0],player)){
case 'club':name='shan';break;
case 'diamond':name='sha';nature='fire';break;
case 'spade':name='wuxie';break;
case 'heart':name='tao';break;
}
if(name) return {name:name,nature:nature};
return null;
},
check:function(card){
if(ui.selected.cards.length) return 0;
var player=_status.event.player;
if(_status.event.type=='phase'){
var max=0;
var name2;
var list=['sha','tao'];
var map={sha:'diamond',tao:'heart'}
for(var i=0;i<list.length;i++){
var name=list[i];
if(player.countCards('hes',function(card){
return (name!='sha'||get.value(card)<5)&&get.suit(card,player)==map[name];
})>0&&player.getUseValue({name:name,nature:name=='sha'?'fire':null})>0){
var temp=get.order({name:name,nature:name=='sha'?'fire':null});
if(temp>max){
max=temp;
name2=map[name];
}
}
}
if(name2==get.suit(card,player)) return (name2=='diamond'?(5-get.value(card)):20-get.value(card));
return 0;
}
return 1;
},
selectCard:[1,2],
complexCard:true,
position:'hes',
filterCard:function(card,player,event){
if(ui.selected.cards.length) return get.suit(card,player)==get.suit(ui.selected.cards[0],player);
event=event||_status.event;
var filter=event._backup.filterCard;
var name=get.suit(card,player);
if(name=='club'&&filter({name:'shan',cards:[card]},player,event)) return true;
if(name=='diamond'&&filter({name:'sha',cards:[card],nature:'fire'},player,event)) return true;
if(name=='spade'&&filter({name:'wuxie',cards:[card]},player,event)) return true;
if(name=='heart'&&filter({name:'tao',cards:[card]},player,event)) return true;
return false;
},
filter:function(event,player){
var filter=event.filterCard;
if(filter({name:'sha',nature:'fire'},player,event)&&player.countCards('hes',{suit:'diamond'})) return true;
if(filter({name:'shan'},player,event)&&player.countCards('hes',{suit:'club'})) return true;
if(filter({name:'tao'},player,event)&&player.countCards('hes',{suit:'heart'})) return true;
if(filter({name:'wuxie'},player,event)&&player.countCards('hes',{suit:'spade'})) return true;
return false;
},
ai:{
respondSha:true,
respondShan:true,
skillTagFilter:function(player,tag){
var name;
switch(tag){
case 'respondSha':name='diamond';break;
case 'respondShan':name='club';break;
case 'save':name='heart';break;
}
if(!player.countCards('hes',{suit:name})) return false;
},
order:function(item,player){
if(player&&_status.event.type=='phase'){
var max=0;
var list=['sha','tao'];
var map={sha:'diamond',tao:'heart'}
for(var i=0;i<list.length;i++){
var name=list[i];
if(player.countCards('hes',function(card){
return (name!='sha'||get.value(card)<5)&&get.suit(card,player)==map[name];
})>0&&player.getUseValue({name:name,nature:name=='sha'?'fire':null})>0){
var temp=get.order({name:name,nature:name=='sha'?'fire':null});
if(temp>max) max=temp;
}
}
max/=1.1;
return max;
}
return 2;
},
},
hiddenCard:function(player,name){
if(name=='wuxie'&&_status.connectMode&&player.countCards('hs')>0) return true;
if(name=='wuxie') return player.countCards('hes',{suit:'spade'})>0;
if(name=='tao') return player.countCards('hes',{suit:'heart'})>0;
},
group:['minilonghun_num','minilonghun_gain'],
subSkill:{
num:{
trigger:{player:'useCard'},
forced:true,
popup:false,
filter:function(event){
var evt=event;
return ['sha','tao'].contains(evt.card.name)&&evt.skill=='minilonghun'&&evt.cards&&evt.cards.length==2;
},
content:function(){
trigger.baseDamage++;
player.draw();
}
},
gain:{
trigger:{player:['useCardAfter','respondAfter']},
forced:true,
popup:false,
logTarget:function(){
return _status.currentPhase;
},
autodelay:function(event){
return event.name=='respond'?0.5:false;
},
filter:function(evt,player){
return ['shan','wuxie'].contains(evt.card.name)&&evt.skill=='minilonghun'&&
evt.cards&&evt.cards.length==2&&_status.currentPhase&&_status.currentPhase!=player&&_status.currentPhase.countDiscardableCards(player,'he');
},
content:function(){
player.line(_status.currentPhase,'green');
player.gainPlayerCard(_status.currentPhase,'he',true);
}
}
},
},
minipoxi:{
audio:'drlt_poxi',
enable:'phaseUse',
usable:1,
filterTarget:function(card,player,target){
return target!=player&&target.countCards('h')>0;
},
content:function(){
'step 0'
event.list1=[];
event.list2=[];
if(player.countCards('h')>0){
var chooseButton=player.chooseButton(3,['你的手牌',player.getCards('h'),get.translation(target.name)+'的手牌',target.getCards('h')]);
}
else{
var chooseButton=player.chooseButton(3,[get.translation(target.name)+'的手牌',target.getCards('h')]);
}
chooseButton.set('target',target);
chooseButton.set('ai',function(button){
var player=_status.event.player;
var target=_status.event.target;
var ps=[];
var ts=[];
for(var i=0;i<ui.selected.buttons.length;i++){
var card=ui.selected.buttons[i].link;
if(target.getCards('h').contains(card)) ts.push(card);
else ps.push(card);
}
var card=button.link;
var owner=get.owner(card);
var val=get.value(card)||1;
if(owner==target){
if(ts.length>1) return 0;
if(ts.length==0||player.hp>3) return val;
return 2*val;
}
return 7-val;
});
chooseButton.set('filterButton',function(button){
for(var i=0;i<ui.selected.buttons.length;i++){
if(get.suit(button.link)==get.suit(ui.selected.buttons[i].link)) return false;
};
return true;
});
'step 1'
if(result.bool){
var list=result.links;
for(var i=0;i<list.length;i++){
if(get.owner(list[i])==player){
event.list1.push(list[i]);
}else{
event.list2.push(list[i]);
};
};
if(event.list1.length&&event.list2.length){
target.discard(event.list2).delay=false;
player.discard(event.list1);
}
else if(event.list2.length){
target.discard(event.list2);
}
else player.discard(event.list1);
};
'step 2'
if(event.list1.length+event.list2.length==3){
if(event.list1.length==0) player.loseMaxHp();
else if(event.list1.length==2){
player.recover();
player.draw();
}
else if(event.list1.length==3) player.draw(3);
}
else event.finish();
},
ai:{
order:13,
result:{target:-1},
},
},
},
translate:{
WeChat_wei:'欢乐魏国',
WeChat_shu:'欢乐蜀国',
WeChat_wu:'欢乐吴国',
WeChat_qun:'欢乐群雄',
WeChat_shen:'欢乐神将',
//魏
WEI_caocao:'曹操',
WEI_caoang:'曹昂',
WEI_caochong:'曹冲',
WEI_caopi:'曹丕',
WEI_zhenji:'甄姬',
WEI_caoren:'曹仁',
WEI_dianwei:'典韦',
WEI_guojia:'郭嘉',
WEI_guohuai:'郭淮',
WEI_simayi:'司马懿',
WEI_zhangchunhua:'张春华',
WEI_wangyi:'王异',
WEI_xiahoudun:'夏侯惇',
WEI_xuzhu:'许诸',
WEI_zhangliao:'张辽',
WEI_zhanghe:'张郃',
miniluoshen:'洛神',
miniluoshen_info:'准备阶段，你可以判定并获得判定牌。若判定结果为黑色，你可重复此流程。',
miniluoshen_info_guozhan:'准备阶段，你可以判定。若结果为黑色，则可以继续判定，直到出现红色的判定牌。然后你获得所有判定牌。（判定牌在此过程中不会进入弃牌堆）',
miniqiaobian:'巧变',
miniqiaobian_info:'你可以弃置一张手牌并跳过自己的一个阶段(准备阶段和结束阶段除外)；若你以此法跳过了摸牌阶段，则你可以获得至多两名其他角色的各一张手牌；若你以此法跳过了出牌阶段，则你可以移动场上的一张牌。回合结束阶段开始时，若你本回合至少跳过了三个阶段，你摸两张牌。',
minichengxiang:'称象',
minichengxiang_info:'锁定技，当你受到伤害后，你可以亮出牌堆顶的四张牌。然后获得其中任意数量点数之和不大于13的牌',
minikaikang:'慨慷',
minikaikang_info:'锁定技，当一名角色成为【杀】的目标后，若你至该角色的距离为1，你可以摸一张牌，然后你可以交给其一张牌并展示之（交牌每回合限两次）。若为装备牌，该角色可以使用此牌。',
minifangzhu:'放逐',
minifangzhu_info:'当你受到伤害后，你可令一名其他角色摸一张牌，然后你摸一张牌且该角色将武将牌翻面。',
miniqiangxi:'强袭',
miniqiangxi_info:'当你于回合内第一次造成伤害时，你可以弃置你装备区里的武器牌并令伤害值加一。',
//蜀
//吴
//群
//神
Mshen_lvbu:'欢乐神吕布',
Mshen_guanyu:'欢乐神关羽',
Mshen_zhugeliang:'欢乐神诸葛亮',
Mshen_lvmeng:'欢乐神吕蒙',
Mshen_liubei:'欢乐神刘备',
Mshen_zhangliao:'欢乐神张辽',
Mshen_caocao:'欢乐神曹操',
Mshen_zhouyu:'欢乐神周瑜',
Mshen_sunquan:'欢乐神孙权',
Mshen_simayi:'欢乐神司马懿',
Mshen_zhaoyun:'欢乐神赵云',
Mshen_ganning:'欢乐神甘宁',
Mshen_luxun:'欢乐神陆逊',
Mshen_lvbu_ab:'神吕布',
Mshen_guanyu_ab:'神关羽',
Mshen_zhugeliang_ab:'神诸葛亮',
Mshen_lvmeng_ab:'神吕蒙',
Mshen_liubei_ab:'神刘备',
Mshen_zhangliao_ab:'神张辽',
Mshen_caocao_ab:'神曹操',
Mshen_zhouyu_ab:'神周瑜',
Mshen_sunquan_ab:'神孙权',
Mshen_simayi_ab:'神司马懿',
Mshen_zhaoyun_ab:'神赵云',
Mshen_ganning_ab:'神甘宁',
Mshen_luxun_ab:'神陆逊',
miniwuqian:'无前',
miniwuqian_info:'锁定技，当你于回合内使用【杀】或【决斗】指定目标后，若此牌是你本回合内使用的第一张【杀】或【决斗】，则你令其每次响应此牌需要使用的【闪】或打出的【杀】的数量+1，且令其防具无效直到此牌对其结束。',
minishenfen:'神愤',
minishenfen_info:'限定技，出牌阶段，你可以失去3点体力，对所有其他角色各造成1点伤害。这些角色弃置装备区内的所有牌，然后弃置四张手牌。',
minigongxin:'攻心',
minigongxin_info:'每回合限一次，当你使用牌指定其他角色为唯一目标后，或成为其他角色使用牌的唯一目标后，你可观看对方的手牌。然后你可以展示其中的一张红色牌并选择一项：①获得此牌。②将此牌置于牌堆顶。',
miniqixing:'七星',
miniqixing_info:'游戏开始时，你将牌堆顶的七张牌置于你的武将牌上，称之为“星”。摸牌阶段结束后，你可用任意数量的手牌等量交换这些“星”。',
minikuangfeng:'狂风',
minikuangfeng_info:'出牌阶段结束时，你可选择任意名角色并将等量的“星”置入弃牌堆，然后对这些角色各造成1点伤害。',
minidawu:'大雾',
minidawu_info:'结束阶段，你可以将一张“星”置入弃牌堆。当你于下回合开始前受到伤害时，此伤害-1。',
miniguixin:'归心',
miniguixin_info:'当你受到1点伤害后，你可以随机获得所有其他角色区域一张牌，若不少于五张且你正面向上，你翻面。',
miniwushen:'武神',
miniwushen_info:'锁定技，你的红桃手牌均视为【杀】；锁定技，你使用红桃【杀】无距离限制且造成的伤害+1。',
miniwuhun:'武魂',
miniwuhun_info:'锁定技，当你受到伤害后，伤害来源获得X个“梦魇”标记（X为伤害点数）。锁定技，当你死亡或脱离濒死时，你选择一名“梦魇”标记数量最多的其他角色，令该角色进行判定：若判定结果不为【桃】或【桃园结义】，则该角色死亡。',
miniqinyin:'琴音',
miniqinyin2:'琴音',
miniqinyin_info:'弃牌阶段结束时，若你于此阶段内弃置过牌，则你可以选择一项：1. 令所有角色各回复1点体力；2. 令所有角色各失去1点体力。',
miniyeyan:'业炎',
miniyeyan_info:'出牌阶段开始时，你可以对一名其他角色造成1点火焰伤害。',
minilongnu:'龙怒',
minilongnu_info:'锁定技，出牌阶段开始时，你选择:1.失去1点体力并摸两张牌，本回合红色牌均视为无距离限制的火【杀】； 2.减1点体力上限，本回合锦囊牌均视为无次数限制的雷【杀】。',
minijieying:'结营',
minijieying_info:'锁定技，游戏开始时或当你的武将牌重置时，你横置；所有已横置的角色手牌上限+2；结束阶段，你横置一名其他角色。你受到伤害后，摸一张牌。',
miniduorui:'夺锐',
miniduorui_info:'出牌阶段开始时，你可以观看一名其他角色的手牌并获得其中一张，本回合你使用该颜色的牌不能被其响应。',
minizhiti:'止啼',
minizhiti_info:'锁定技，若已受伤角色数：大于1，你摸牌阶段摸牌数+1；大干2， 你使用【杀】的次数上限+1。',
miniquantui:'劝学',
miniquantui_info:'出牌阶段开始时，你可令至多两名其他角色各获得一个“学”；有“学”的角色回合开始时移除“学”并选择：① 出牌阶段不能对其他角色使用牌；②失去1点体力。',
minishehu:'射虎',
minishehu_info:'锁定技，你对拥有“学”的角色使用【杀】时，你弃置其一张手牌。',
minidingli:'鼎立',
minidingli_info:'每轮限一次，其他角色移除“学”时，如果其体力值不小于你，你可以回复1点体力；如果其体力值小于你，你可以摸X张牌（X为其与你体力值之差且至多为2）。',
minirenjie:'忍戒',
minirenjie_info:'锁定技，游戏开始时/当你受到伤害后/当你于弃牌阶段弃牌后，你获得1/X/Y枚“忍”标记。（X为伤害值，Y为你本次的弃牌数）',
minijilve:'极略',
minijilve_info:'你可以弃置一枚“忍”标记，然后发动以下技能：【鬼才】、【放逐】、【完杀】、【集智】。当你于每回合第一次发动【极略】时，你摸一张牌。',
minijilve_guicai:'极略·鬼才',
minijilve_guicai_info:'当一名角色的判定牌生效前，你可以弃置一枚“忍”并打出一张牌代替之。',
minijilve_fangzhu:'极略·放逐',
minijilve_fangzhu_info:'当你受到伤害后，你可以弃置一枚“忍”并摸一张牌，令一名其他角色翻面，然后该角色摸一张牌。',
minijilve_jizhi:'极略·集智',
minijilve_jizhi_info:'当你使用锦囊牌时，你可以弃置一枚“忍”并摸一张牌。若此牌是基本牌，你可以弃置此牌，然后本回合手牌上限+1。',
minijilve_wansha:'极略·完杀',
minijilve_wansha_info:'出牌阶段，你可以弃置一枚“忍”并于本回合激活此技能。锁定技，你的回合内，若你已激活此技能，则只有你可以使用【桃】。',
SMYminiwansha:'极略·完杀',
SMYminiwansha_info:'锁定技，你的回合内，只有你可以使用【桃】。',
minijuejing:'绝境',
minijuejing_info:'锁定技，你的手牌上限+3；当你进入或脱离濒死状态时，你摸一张牌。',
minilonghun:'龙魂',
minilonghun_info:'你可以将同花色的一至两张牌按下列规则使用或打出：红桃当【桃】，方块当火【杀】，梅花当【闪】，黑桃当普【无懈可击】。若你以此法使用了两张红色牌，则此牌回复值或伤害值+1且你摸一张牌。若你以此法使用了两张黑色牌，则你获得当前回合角色一张牌。',
minipoxi:'魄袭',
minipoxi_info:'出牌阶段限一次，你可以观看一名其他角色的手牌，然后你可以弃置你与其手牌中的三张花色不同的牌。若如此做，根据此次弃置你的牌的数量执行以下效果：没有，你一点体力上限；两张，你回复一点体力并摸一张牌；三张，你摸三张牌。',
},
};
if(lib.device||lib.node){
for(var i in WeChatkill.character){WeChatkill.character[i][4].push('ext:活动武将/'+i+'.jpg');}
}else{
for(var i in WeChatkill.character){WeChatkill.character[i][4].push('db:extension-活动武将:'+i+'.jpg');}
}
return WeChatkill;
});
lib.config.all.characters.push('WeChatkill');
if(!lib.config.characters.contains('WeChatkill')) lib.config.characters.remove('WeChatkill');
lib.translate['WeChatkill_character_config']='微信三国杀';
//没想到吧，我换前缀了
game.import('character',function(){
var huodongcharacter={
name:'huodongcharacter',
connect:true,
characterSort:{
huodongcharacter:{
CSingle:['bilibili_niujin','bilibili_hejin','bilibili_hansui'],
CTwoVsTwo:['bilibili_leitong','bilibili_wulan'],
CTongShuai:['ts_wenpin','ts_zhugejin','ts_lvbu','ts_xiahoudun','ts_guanyu','ts_zhaoyun'],
CLongZhou:['lz_sufei','lz_tangzi','lz_liuqi','lz_huangquan'],
CAoYun:['aoyun_sunyang','aoyun_yeshiwen','hanba'],
Cothers:['diy_lvmeng','BT_puyuan','golden_zuoci','diy_liuhong','bilibili_taoyuansanying','yin_kuailiangkuaiyue','yin_yl_luzhi','yin_yanyan'],
Cye:['gz_zhonghui','gz_sunchen','gz_gongsunyuan','gz_simazhao'],
},
},
character:{
bilibili_leitong:["male","shu",4,["bilibili_kuiji"],[]],
bilibili_wulan:["male","shu",4,["bilibili_cuorui"],[]],
ts_wenpin:['male','wei',4,['bilibili_zhenwei'],[]],
ts_zhugejin:['male','wu',3,['bilibili_hongyuan','bilibili_huanshi','mingzhe'],[]],
ts_lvbu:['male','qun',4,['wushuang','bilibili_zhanshen'],[]],
ts_xiahoudun:['male','wei',4,['bilibili_ganglie'],[]],
ts_guanyu:['male','shu',4,['wusheng','bilibili_zhongyi'],[]],
ts_zhaoyun:['male','shu',4,['longdan','bilibili_jiuzhu'],[]],
lz_sufei:['male','qun',4,['lzlianpian'],['doublegroup:wu:qun']],
lz_liuqi:['male','shu',3,['lzwenji','lztunjiang'],['doublegroup:shu:qun']],
lz_tangzi:['male','wu',4,['lzxingzhao'],['doublegroup:wei:wu']],
lz_huangquan:['male','wei',3,['lzdianhu','lzjianji'],['doublegroup:wei:shu']],
bilibili_niujin:['male','wei',4,['cuorui','liewei'],[]],
bilibili_hansui:['male','qun',4,['niluan','mashu'],[]],
bilibili_hejin:['male','qun',4,['mouzhu','yanhuo'],[]],
aoyun_sunyang:['male','wu',4,['shuijianX','flappybird'],[]],
aoyun_yeshiwen:['female','wu',3,['jisuX','shuiyongX','flappybird'],[]],
BT_puyuan:['male','shu',4,['pyzhuren_heart','pyzhuren_diamond','pyzhuren_club','pyzhuren_spade','pyzhuren_shandian','goldenexperience'],['unseen']],
golden_zuoci:['male','qun',5,['goldenexperience','old_guixin','rehuashen','rexinsheng','reguhuo','jinghe','gongxiu','yufeng','tianshu','pingjian'],['unseen']],
yin_kuailiangkuaiyue:['male','wei',3,['nzry_jianxiang','yin_shenshi'],['unseen']],
yin_yl_luzhi:['male','qun',3,['nzry_mingren','yin_zhenliang'],['unseen']],
yin_yanyan:['male','shu',4,['yin_juzhan'],['unseen']],
diy_liuhong:['male','qun',4,['diy_yujue','diy_hunkui'],['unseen']],
diy_lvmeng:['male','wu',4,['diy_kongju','diy_houqi'],['unseen']],
gz_zhonghui:['male','wei',4,['gzquanji','gzpaiyi'],[]],
gz_simazhao:['male','jin',3,['gzzhaoxin','gzsuzhi'],[]],
gz_gongsunyuan:['male','qun',4,['gzhuaiyi','gzzisui'],[]],
gz_sunchen:['male','wu',4,['gzshilu','gzxiongnve'],['ext:活动武将/sunchen.jpg']],
hanba:['female','qun',4,['fentian','zhiri'],[]],
},
characterIntro:{
caomao:'曹髦（241年11月15日－260年6月2日），字彦士，沛国谯县（今安徽省亳州市）人，魏文帝曹丕之孙，东海王曹霖之子，曹魏第四位皇帝（254年11月1日－260年6月2日）。<br>正始二年（241年），生于东海王宫，自幼聪明好学，才慧早成，正始五年（244年），封为高贵乡公，嘉平六年（254年），大将军司马师废除齐王曹芳后，拥立为帝，年号正元，曹髦文才武略，崇拜少康，不满司马氏专权秉政，甘露五年（260年），亲自讨伐司马昭，为太子舍人成济所弑，年仅十九岁，以王礼葬于洛阳西北。<br>曹髦擅长诗文，创制了九言诗，传世文章有《伤魂赋并序》《颜子论》等。爱好儒学，亲赴太学论道，著有《春秋左氏传音》（失传）。精通绘画，一说为中国第一位成为画家的皇帝，唐张彦远《历代名画记》目曹髦为中品。',
wuliuqi:'伍六七，动画《刺客伍六七》及其衍生作品中的主人公，失忆前是第一刺客， 失忆后成了大保发廊的高级发型师，虽然经常接些乱七八糟的廉价任务，但是伍六七却是一个假贱贱、真温柔、热血的短裤男。<br>没有记忆，身世是个谜，在大保发廊做理发师，身体伪装成任何形态，为了寻找自己的过去，走上了刺客之路。',
meihuashisan:'梅花十三，动画《刺客伍六七》及其衍生作品中的女性角色，玄武国刺客，刺客排名37位，擅长使用双刀流和梅花镖，发辫上的短刃可以用于攻击。性格冷漠、好强，有着超越常人的果敢和强烈的使命感，内心其实很柔软。<br>小时候拜玄武国刺客青凤为师，长大后受命来到小鸡岛收集情报，意外认识了伍六七。起初，梅花十三因伍六七看到了自己脸，决定杀他灭口，但随着剧情的发展，二人的关系变得渐渐复杂起来。',
},
characterTitle:{
},
characterFilter:{
oldshen_caocao:function(mode){
return mode=='identity'||mode=='versus';
},
ol_dongzhao:function(mode){
return mode=='identity';
},
cike_wuliuqi:function(mode){
return mode!='guozhan';
},
cike_meihuashisan:function(mode){
return mode!='guozhan';
},
bilibili_leitong:function(mode){
if(mode!='identity'&&mode!='guozhan') return false;
return true;
},
bilibili_wulan:function(mode){
if(mode!='identity'&&mode!='guozhan') return false;
return true;
},
ts_wenpin:function(mode){
if(mode=='versus'&&['three']) return false;
return true;
},
ts_zhugejin:function(mode){
if(mode=='versus'&&['three']) return false;
return true;
},
ts_lvbu:function(mode){
if(mode=='versus'&&['three']) return false;
return true;
},
ts_xiahoudun:function(mode){
if(mode=='versus'&&['three']) return false;
return true;
},
ts_guanyu:function(mode){
if(mode=='versus'&&['three']) return false;
return true;
},
ts_zhaoyun:function(mode){
if(mode=='versus'&&['three']) return false;
return true;
},
},
perfectPair:{
wuliuqi:['meihuashisan'],
},
skill:{
shuijianX:{inherit:'dujin'},
jisuX:{
trigger:{player:'phaseJudgeBefore'},
direct:true,
content:function(){
'step 0'
var check=player.countCards('h')>2;
player.chooseTarget(get.prompt('jisuX'),'跳过判定阶段和摸牌阶段，视为对一名其他角色使用一张【杀】',function(card,player,target){
if(player==target) return false;
return player.canUse({name:'sha'},target,false);
}).set('check',check).set('ai',function(target){
if(!_status.event.check) return 0;
return get.effect(target,{name:'sha'},_status.event.player);
}).setHiddenSkill('jisuX');
'step 1'
if(result.bool){
player.logSkill('jisuX',result.targets);
player.useCard({name:'sha',isCard:true},result.targets[0],false);
trigger.cancel();
player.skip('phaseDraw');
}
}
},
shuiyongX:{inherit:'shixin'},
goldenexperience:{
trigger:{source:'damageEnd'},
direct:true,
firstDo:true,
priority:114514,
filter:function (event,player){
var list=[];
for(var i=1;i<6;i++){
if(!player.getEquip(i)) list.push('equip'+i);
}
if(!list.length) return false;
if(player==event.player) return false;
if(player.getEquip(event.player.name)) return false;
return true;
},
content:function(){
'step 0'
player.chooseBool('造牌机器为您服务','将'+get.translation(trigger.player)+'制作成你的装备牌');
'step 1'
if(result.bool){
var list=[];
for(var i=1;i<6;i++){
if(!player.getEquip(i)) list.push('equip'+i);
}
var suitList=['spade', 'heart', 'club', 'diamond'].randomGet();
var typeList=list.randomGet();
var numberList=[1,2,3,4,5,6,7,8,9,10,11,12,13].randomGet();
var skills=lib.character[trigger.player.name][3]
var card={
type:'equip',
subtype:typeList,
image:'character/'+trigger.player.name,
skills:skills,
distance:{},
filterTarget:function(card,player,target){
return target==player;
},
//selectTarget:-1,
//modTarget:true,
content:lib.element.content.equipCard,
onEquip:[],
forceDie:true,
onLose:function(){
if((!event.getParent(2)||event.getParent(2).name!='swapEquip')&&(event.getParent().type!='equip'||event.getParent().swapEquip)){
card.remove();
card.destroyed=true;
game.log(card,'被销毁了');
}
},
equipDelay:false,
loseDelay:false,
ai:{},
};
var List=[];
if(typeList=='equip1'){
disList=[1,2,3,4,5].randomGet();
card.distance.attackFrom=-disList
List.push('<li>攻击范围：'+disList)
}
if(typeList=='equip3'){
card.distance.globalTo=1
List.push('<li>防御距离+1');
}
if(typeList=='equip4'){
card.distance.globalFrom=-1
List.push('<li>攻击距离+1');
}
lib.card[trigger.player.name]=card;
if(skills.length){
for(var i=0;i<skills.length;i++){
List.push('<li>'+lib.translate[skills[i]]+'<br>'+lib.translate[skills[i]+'_info']);
}
}
lib.translate[trigger.player.name+'_info']=List
player.equip(game.createCard(trigger.player.name,suitList,numberList));
}
else event.finish();
},
},
/*
主公技满天飞
var list,skills=[];
if(_status.connectMode) list=get.charactersOL();
else{
list=[];
for(var i in lib.character){
if(lib.filter.characterDisabled2(i)||lib.filter.characterDisabled(i)) continue;
list.push(i);
}
}
for(var i of list){
for(var j of lib.character[i][3]){
var skill=lib.skill[j];
var info=lib.translate[j+'_info'];
if(!skill) continue;
if(skill.init||skill.ai&&(skill.ai.combo||skill.ai.notemp||skill.ai.neg)) continue;
if(info&&skill.zhuSkill) skills.add(j);
}
}
game.zhu.addSkillLog(skills);
*/
//体验服的荀谌
old_weipo:{
audio:'mjweipo',
enable:'phaseUse',
usable:1,
filter:function(event,player){
return game.hasPlayer(function(current){
return !current.hasSkill('old_weipo_effect');
});
},
filterTarget:function(card,player,target){
return !target.hasSkill('old_weipo_effect');
},
content:function(){
'step 0'
var list=['binglinchengxiax'];
list.addArray(get.zhinangs());
player.chooseButton(['危迫：请选择一个智囊或【兵临城下】',[list,'vcard']],true).set('ai',function(button){
return _status.event.getParent().target.getUseValue({name:button.link[2]});
});
'step 1'
if(result.bool){
var name=result.links[0][2];
game.log(player,'选择了','#y'+get.translation(name));
target.storage.old_weipo_effect=name;
target.storage.old_weipo_source=player;
target.addSkill('old_weipo_effect');
game.delayx();
}
},
subSkill:{
effect:{
audio:'mjweipo',
enable:'chooseToUse',
hiddenCard:function(player,name){
return name==player.storage.old_weipo_effect&&player.countCards('h','sha')>0;
},
viewAs:function(cards,player){
return {name:player.storage.old_weipo_effect};
},
filter:function(event,player){
return player.countCards('hs','sha')>0&&event.filterCard({name:player.storage.old_weipo_effect},player,event);
},
prompt:function(){
return '将一张【杀】当做'+get.translation(_status.event.player.storage.old_weipo_effect)+'使用';
},
filterCard:{name:'sha'},
check:function(card){
return 6-get.value(card);
},
position:'hs',
popname:true,
onuse:function(links,player){
player.removeSkill('old_weipo_effect');
},
ai:{
order:7,
},
group:'old_weipo_remove',
mark:true,
marktext:'迫',
intro:{content:'可将【杀】当做【$】使用'},
},
remove:{
trigger:{global:['phaseBegin','die']},
forced:true,
firstDo:true,
popup:false,
filter:function(event,player){
return event.player==player.storage.old_weipo_source;
},
content:function(){
player.removeSkill('old_weipo_effect');
},
},
},
ai:{
order:7.1,
result:{
target:function(player,target){
if(target==player) return player.countCards('hs','sha')>0?10:0.01;
return (target.countCards('hs','sha')+0.5)*Math.sqrt(Math.max(1,target.hp));
},
},
},
},
old_mouzhi:{
audio:'mjmouzhi',
trigger:{player:'damageBegin2'},
forced:true,
filter:function(event,player){
if(!event.card||get.color(event.card)=='none') return false;
var all=player.getAllHistory('damage');
if(!all.length) return false;
return all[all.length-1].card&&get.color(all[all.length-1].card)==get.color(event.card);
},
content:function(){
trigger.cancel();
},
ai:{
effect:{
target:function(card,player,target){
if(get.tag(card,'damage')){
var color=get.color(card);
if(color=='none') return;
var all=target.getAllHistory('damage');
if(!all.length||!all[all.length-1].card) return;
if(get.color(all[all.length-1].card)==color) return 'zerotarget';
}
},
},
},
},
old_guixin:{
//group:'old_guixin_guixin',
audio:'guixin',
initList:function(player){
var list,skills=[];
if(_status.connectMode) list=get.charactersOL();
else{
list=[];
for(var i in lib.character){
if(lib.filter.characterDisabled2(i)||lib.filter.characterDisabled(i)) continue;
list.push(i);
}
}
for(var i of list){
for(var j of lib.character[i][3]){
var skill=lib.skill[j];
var info=lib.translate[j+'_info'];
if(!skill) continue;
if(info&&skill.zhuSkill) skills.add(j);
}
}
if(!player.storage.old_guixin) player.storage.old_guixin=[];
player.storage.old_guixin=skills;
},
trigger:{player:'phaseJieshuBegin'},
direct:true,
content:function(){
'step 0'
var list=['选项一','选项二','cancel2'];
if(player.storage.old_guixin==[]) list.remove('选项一');
player.chooseControl(list).set('choiceList',[
'获得一个主公技',
'更改一名其他角色的势力',
]).set('prompt',get.prompt('old_guixin',target)).set('ai',function(){return '选项一'});
'step 1'
if(result.control=='选项一'){
player.logSkill('old_guixin');
var next=game.createEvent('guixin_yitian',false);
next.player=player;
next.setContent(lib.skill.old_guixin.contentx);
event.finish();
}
else if(result.control=='选项二'){
player.chooseTarget('请选择【归心】的目标','选择一名其他角色，你更改他的势力',lib.filter.notMe,true).set('ai',function(target){
return get.attitude(player,target);
});
}
else event.finish();
'step 2'
if(!result.bool) event.finish();
player.logSkill('old_guixin',result.targets[0]);
event.target=result.targets[0];
var list=lib.group.slice(0);
list.remove('shen');
list.remove(event.target.group);
player.chooseControl(list).set('prompt','请选择为'+get.translation(event.target)+'更换的势力').set('prompt2','将'+get.translation(event.target)+'势力更换成一个其他势力');
'step 3'
target.group=result.control;
target.popup(target.group+2);
game.log(player,'将',target,'的势力更换为','#g'+get.translation(target.group+2));
target.node.name.dataset.nature=get.groupnature(target.group);
},
contentx:function(){
'step 0'
if(player.isIn()){
if(!player.storage.old_guixin) lib.skill.old_guixin.initList(player);
var list=player.storage.old_guixin;
if(!list.length){
event.finish();
return;
}
event.skillai=function(){
return get.max(list,get.skillRank,'item');
};
if(event.isMine()){
var dialog=ui.create.dialog('forcebutton');
dialog.add('归心：请选择获得一个主公技');
var clickItem=function(){
_status.event._result=this.link;
dialog.close();
game.resume();
};
for(var i=0;i<list.length;i++){
if(lib.translate[list[i]+'_info']){
var translation=get.translation(list[i]);
if(translation[0]=='新'&&translation.length==3){
translation=translation.slice(1,3);
}
else{
translation=translation.slice(0,2);
}
var item=dialog.add('<div class="popup pointerdiv" style="width:80%;display:inline-block"><div class="skill">【'+
translation+'】</div><div>'+lib.translate[list[i]+'_info']+'</div></div>');
item.firstChild.addEventListener('click',clickItem);
item.firstChild.link=list[i];
}
}
dialog.add(ui.create.div('.placeholder'));
event.switchToAuto=function(){
event._result=event.skillai();
dialog.close();
game.resume();
};
event.confirm=ui.create.confirm('c');
event.custom.replace.confirm=function(){
event._result=null;
dialog.close();
game.resume();
};
_status.imchoosing=true;
game.pause();
}
else event._result=event.skillai();
}
else event.finish();
'step 1'
_status.imchoosing=false;
if(event.confirm){
event.confirm.close();
}
if(typeof result=='string'){
if(!player.storage.zhuSkill_old_guixin) player.storage.zhuSkill_old_guixin=[];
var link=result;
player.addSkillLog(link);
player.storage.old_guixin.remove(link);
player.storage.zhuSkill_old_guixin.push(link);
if(link=='olxueyi'&&game.hasPlayer(function(current){
return  current.group=='qun';
})){
player.logSkill('olxueyi');
var next=game.createEvent('guixin_olxueyi');
next.player=player;
next.setContent(lib.skill.olxueyi.content);
}
event.finish();
}
else event.finish();
},
//写这部分主要是为了测试简化操作的新函数，故此技能后半段拿牌是为测实所写，不会整合至现有扩展中，需要的请手动添加group
subSkill:{
guixin:{
audio:'guixin',
trigger:{player:'damageEnd'},
direct:true,
content:function(){
'step 0'
player.chooseBool(get.prompt('old_guixin'),'获得每名其他角色区域内的一张牌，然后你翻面并选择获得一个主公技').ai=function(){
var player=_status.event.player;
if(player.isTurnedOver()||trigger.num>1) return true;
var num=game.countPlayer(function(current){
if(current.countCards('he')&&current!=player&&get.attitude(player,current)<=0){
return true;
}
if(current.countCards('j')&&current!=player&&get.attitude(player,current)>0){
return true;
}
});
return num>=2;
};
'step 1'
if(!result.bool) event.finish();
event.count=trigger.num;
'step 2'
var targets=game.filterPlayer();
targets.remove(player);
targets.sort(lib.sort.seat);
player.logSkill('old_guixin',targets);
player.ReGainMultiple(targets);
'step 3'
player.turnOver();
if(player.hasSkill('old_guixin')&&player.storage.old_guixin!=[]){
var next=game.createEvent('guixin_yitian');
next.player=player;
next.setContent(lib.skill.old_guixin.contentx);
}
'step 4'
event.count--;
if(event.count) player.chooseBool('是否继续发动〖归心〗？','获得每名其他角色区域内的一张牌，然后你翻面并选择获得一个主公技').ai=function(){return true};
else event.finish();
'step 5'
if(event.count&&result.bool) event.goto(2);
else event.finish();
},
ai:{
maixie:true,
maixie_hp:true,
threaten:function(player,target){
if(target.hp==1) return 2.5;
return 1;
},
effect:{
target:function(card,player,target){
if(get.tag(card,'damage')){
if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
if(target.hp==1) return 0.8;
if(target.isTurnedOver()) return [0,3];
var num=game.countPlayer(function(current){
if(current.countCards('he')&&current!=player&&get.attitude(player,current)<=0){
return true;
}
if(current.countCards('j')&&current!=player&&get.attitude(player,current)>0){
return true;
}
});
if(num>2) return [0,1];
if(num==2) return [0.5,1];
}
}
}
}
},
},
},
//手杀许攸
xinshicai:{
init:function(player){
player.storage.xinshicai=[];
},
group:['xinshicai_equip','xinshicai_clear'],
audio:'nzry_shicai_2',
trigger:{player:'useCardAfter'},
filter:function(event,player,name){
if(player.storage.xinshicai.contains(get.type(event.card))||get.type(event.card)=='equip'||get.type(event.card)=='delay') return false;
if(event.cards.filterInD().length<=0) return false;
return true;
},
check:function(event,player){
return true;
},
content:function(){
'step 0'
player.storage.xinshicai.push(get.type(trigger.card));
event.cards=trigger.cards.filterInD();
if(event.cards.length>1){
var next=player.chooseToMove('恃才：将牌按顺序置于牌堆顶');
next.set('list',[['牌堆顶',event.cards]]);
next.set('reverse',((_status.currentPhase&&_status.currentPhase.next)?get.attitude(player,_status.currentPhase.next)>0:false));
next.set('processAI',function(list){
var cards=list[0][1].slice(0);
cards.sort(function(a,b){
return (_status.event.reverse?1:-1)*(get.value(b)-get.value(a));
});
return [cards];
});
}
'step 1'
if(result.bool&&result.moved&&result.moved[0].length) cards=result.moved[0].slice(0);
while(cards.length){
var card=cards.pop();
if(get.position(card,true)=='o'){
card.fix();
ui.cardPile.insertBefore(card,ui.cardPile.firstChild);
game.log(player,'将',card,'置于了牌堆顶');
}
}
game.updateRoundNumber();
player.draw();
},
subSkill:{
equip:{
audio:'nzry_shicai_2',
trigger:{player:'useCardAfter'},
filter:function(event,player,name){
if(player.storage.xinshicai.contains(get.type(event.card))||get.type(event.card)!='equip') return false;
if(player.countCards('e',function(card){
return card=event.card;
})<=0) return false;
return true;
},
direct:true,
content:function(){
'step 0'
player.chooseBool(get.prompt2('xinshicai')).set('ai',function(){
var player=_status.event.player;
if(get.subtype(trigger.card)=='equip6') return true;
if(get.equipResult(player,trigger.target,trigger.card.name)<=0) return true;
var eff1=player.getUseValue(trigger.card);
var subtype=get.subtype(trigger.card);
return player.countCards('h',function(card){
return get.subtype(card)==subtype&&player.getUseValue(card)>=eff1;
})>0;
});
'step 1'
if(result.bool){
player.logSkill('xinshicai');
player.storage.xinshicai.push(get.type(trigger.card));
player.lose(trigger.cards,ui.cardPile,'insert');
game.log(player,'将',trigger.cards,'置于了牌堆顶');
game.updateRoundNumber();
player.draw();
}
else event.finish();
},
},
clear:{
trigger:{global:'phaseBefore'},
silent:true,
firstDo:true,
content:function(){
player.storage.xinshicai=[];
}
},
},
ai:{
threaten:1.8,
reverseOrder:true,
skillTagFilter:function(player){
if(player.storage.xinshicai.contains('equip')) return false;
},
effect:{
target:function(card,player,target){
if(player==target&&get.type(card)=='equip'&&!player.storage.xinshicai.contains('equip')) return [1,3];
},
},
},
},
qiuan:{
audio:2,
trigger:{player:'damageBegin2'},
filter:function(event,player){
return event.cards&&event.cards.filterInD().length>0&&!player.getStorage('qiuan').length;
},
check:function(event,player){
if(get.damageEffect(player,event.source||player,player,event.nature)>=0) return false;
return true;
},
preHidden:true,
content:function(){
var cards=trigger.cards.filterInD();
game.cardsGotoSpecial(cards);
player.$gain2(cards,false);
player.markAuto('qiuan',cards);
game.log(player,'将',cards,'置于了武将牌上');
trigger.cancel();
},
intro:{
content:'cards',
onunmark:'throw',
},
marktext:'函',
},
liangfan:{
audio:2,
trigger:{player:'phaseZhunbeiBegin'},
forced:true,
filter:function(event,player){
return player.getStorage('qiuan').length>0;
},
content:function(){
'step 0'
var cards=player.getStorage('qiuan');
player.gain(cards,'gain2','fromStorage').gaintag.add('liangfan');
player.unmarkAuto('qiuan',cards);
player.addTempSkill('liangfan2');
'step 1'
player.loseHp();
},
},
liangfan2:{
audio:'liangfan',
mark:true,
mod:{
aiOrder:function(player,card,num){
if(get.itemtype(card)=='card'&&card.hasGaintag('liangfan')) return num+0.1;
},
},
intro:{content:'使用“量反”牌造成伤害后，可获得目标角色的一张牌'},
trigger:{source:'damageEnd'},
logTarget:'player',
charlotte:true,
onremove:function(player){
player.removeGaintag('liangfan');
},
prompt:(event)=>('量反：是否获得'+get.translation(event.player)+'的一张牌？'),
filter:function(event,player){
var evt=event.getParent(2);
if(evt.name!='useCard'||evt.card!=event.card) return false;
if(!event.player.countGainableCards(player,'he')) return false;
return player.getHistory('lose',function(evt2){
if(evt2.getParent()!=evt) return false;
for(var i in evt2.gaintag_map){
if(evt2.gaintag_map[i].contains('liangfan')) return true;
}
return false;
}).length>0;
},
marktext:'反',
content:function(){
player.gainPlayerCard(trigger.player,true,'he');
},
},
bilibili_jinfan: {
intro: { content: 'cards' },
marktext: '铃',
init: function(player) {
player.storage.bilibili_jinfan = [];
player.storage.bilibili_jinfan.logs = [];
player.storage.bilibili_jinfan.getSuits = function() {
return this.reduce(function(list, card) {
var suit = get.suit(card);
if (!list.contains(suit)) {
list.push(suit);
}
return list;
}, []);
};
},
onremove: function(player) {
player.storage.bilibili_jinfan.forEach(function(card) {
card.goto(ui.discardPile);
});
player.$throw(player.storage.bilibili_jinfan);
delete player.storage.old_yj_ganning;
},
audio: 'gnjinfan',
trigger: { player: 'phaseDiscardBegin' },
filter: function(event, player) {
event.x_suit = player.storage.bilibili_jinfan.getSuits();
return player.hasCard(function(card) {
return !event.x_suit.contains(get.suit(card));
}, 'he');
},
direct: true,
content: function() {
'step 0'
player.chooseCard(get.prompt2('bilibili_jinfan'), function(card) {
return !trigger.x_suit.contains(get.suit(card));
}, 'he').set('ai', function(card) {
return 8 - get.value(card);
});
'step 1'
if(!result.bool) event.finish();
player.logSkill('bilibili_jinfan');
var card = result.cards[0];
player.lose(card, ui.special);
player.storage.bilibili_jinfan.push(card);
player.markSkill('bilibili_jinfan');
player.syncStorage('bilibili_jinfan');
game.log(player, '将', card, '置于武将牌上作为「铃」');
},
group: ['bilibili_jinfan_buff', 'bilibili_jinfan_reset'],
subSkill: {
buff: {
audio: 'gnjinfan',
trigger: { player: ['useCard', 'respond'] },
filter: function(event, player) {
var suit = get.suit(event.card);
var suits = player.storage.bilibili_jinfan.getSuits();
return suits.contains(suit) &&
!player.storage.bilibili_jinfan.logs.contains(suit);
},
forced: true,
content: function() {
player.draw();
player.storage.bilibili_jinfan.logs.push(get.suit(trigger.card));
},
ai: {
effect: {
player: function(card, player) {
var storage = player.storage.bilibili_jinfan;
var suit = get.suit(card);
var suits = storage.getSuits();
if (suits.contains(suit) && !storage.logs.contains(suit)) {
return [ 1, 1 ];
}
},
},
},
},
reset: {
trigger: { global: 'phaseBefore' },
direct: true,
content: function() {
player.storage.bilibili_jinfan.logs = [];
},
},
},
},
bilibili_sheque: {
audio: 'gnsheque',
trigger: { global: 'useCard' },
filter: function(event, player) {
return player !== event.player &&
get.type(event.card) === 'equip' &&
player.num('h') &&
player.canUse({ name: 'sha' }, event.player, false);
},
direct: true,
content: function() {
'step 0'
var eff = get.effect(trigger.player, { name: 'sha' }, player, player);
player.chooseCard(get.prompt2('bilibili_sheque', trigger.player), 'h').set('ai', function(card) {
return _status.event.eff > 0 ? 8 - get.value(card) : 0;
}).set('eff', eff);
'step 1'
if (result.bool) {
var target = trigger.player;
player.logSkill('bilibili_sheque', target);
player.useCard({ name: 'sha', bilibili_sheque: target }, target, result.cards);
}
},
group: ['bilibili_sheque_damage'],
subSkill: {
debuff: {
group: ['drlt_wanglie2'],
onremove: function(player) {
player.unmarkSkill('bilibili_sheque');
},
},
damage: {
trigger: { source: 'damageSource' },
filter: function(event, player) {
if (!event.card) return false;
if (event.card.name !== 'sha') return false;
if (!event.card.bilibili_sheque) return false;
event.x_target = event.card.bilibili_sheque;
return event.card.bilibili_sheque.isAlive();
},
forced: true,
logTarget: 'x_target',
content: function() {
trigger.x_target.addTempSkill('bilibili_sheque_debuff', 'phaseEnd');
trigger.x_target.markSkillCharacter('bilibili_sheque', player, '射却', '不能使用或打出手牌');
},
},
},
},
bilibili_zhiyan: {
direct: true,
enable: 'phaseUse',
filter: function(event, player) {
return player.num('h') !== player.maxHp;
},
prompt2: function(event, player) {
var num = get.cnNumber(player.maxHp);
if (player.num('h') > player.maxHp) {
return '将手牌弃至' + num + '张，然后可以令一名其他角色获得其中一张。';
}
return '将手牌摸至' + num + '张，然后本回合不能对其他角色使用牌。';
},
content: function() {
'step 0'
var num = player.num('h');
if (num > player.maxHp) {
event.type = 'discard';
player.chooseCard('h', num - player.maxHp).set('ai', function(card) {
if (game.hasPlayer(function(current) {
return player.canUse(card, current);
})) return 8 - get.value(card);
return 100 - get.value(card);
});
} else {
event.type = 'draw';
player.logSkill('bilibili_zhiyan');
player.draw(player.maxHp - num);
}
'step 1'
if (event.type === 'draw') {
player.addTempSkill('bilibili_zhiyan_debuff', 'phaseEnd');
player.markSkillCharacter('bilibili_zhiyan', player, '治严', '不能对其他角色使用牌');
event.finish();
} else if (event.type === 'discard'&&result.bool){
player.logSkill('bilibili_zhiyan');
player.discard(result.cards);
player.chooseCardButton('治严：是否令一名其他角色将其中一张牌？', result.cards).set('ai', function(button) {
return get.value(button.link);
});
} else {
event.finish();
}
'step 2'
if (result.bool) {
event.card = result.links[0];
player.chooseTarget('治严：令一名其他角色获得' + get.translation(event.card), function(card, player, target) {
return target !== player;
}).set('ai', function(target) {
return get.attitude(player, target);
});
} else {
event.finish();
}
'step 3'
if (result.bool) {
var target = result.targets[0];
player.line(target, 'water');
game.log(target, '获得了' ,event.card);
target.gain(event.card);
target.$gain2(event.card);
}
},
ai: {
order: function(name, player) {
if (player.num('h') > player.maxHp) {
return 10;
}
return 1;
},
result: {
player: 1,
},
},
subSkill: {
debuff: {
mod: {
playerEnabled: function(card, player, target) {
if (player !== target) {
return false;
}
},
},
onremove: function(player) {
player.unmarkSkill('bilibili_zhiyan');
},
},
},
},
bilibili_zhilve: {
trigger: { player: 'phaseZhunbeiBegin' },
content: function() {
'step 0'
if (player.canMoveCard()) {
player.chooseControl(1, function(event, player) {
if (player.canMoveCard(true) && player.hp > 2) return 0;
return 1;
}).set('prompt', '知略：请选择一项').set('choiceList', [
'移动场上的一张牌，若你移动了装备区的牌，你失去1点体力；若你移动了判定区的牌，本回合你的手牌上限-1',
'本回合摸牌阶段额外摸一张牌，然后本回合你使用的第一张【杀】不计次数且无距离限制',
]);
} else {
event.goto(3);
}
'step 1'
if (result.index === 0) {
player.moveCard();
} else {
event.goto(3);
}
'step 2'
if (result.position === 'e') {
player.loseHp();
} else if (result.position === 'j') {
player.addTempSkill('bilibili_zhilve_debuff', 'phaseEnd');
player.markSkillCharacter('bilibili_zhilve', player, '知略', '手牌上限-1');
}
event.finish();
'step 3'
player.addTempSkill('bilibili_zhilve_buff', 'phaseEnd');
player.markSkillCharacter('bilibili_zhilve', player, '知略', '摸牌阶段额外摸一张牌；本回合使用的第一张【杀】不计次数且无距离限制');
event.finish();
},
subSkill: {
debuff: {
mod: {
maxHandcard: function(player, num) {
return num - 1;
},
},
onremove: function(player) {
player.unmarkSkill('bilibili_zhilve');
},
},
buff: {
trigger: { player: 'phaseDrawBegin' },
direct: true,
content: function() {
trigger.num ++;
},
group: ['bilibili_zhilve_buff_sha'],
onremove: function(player) {
player.unmarkSkill('bilibili_zhilve');
},
},
buff_sha: {
mod: {
targetInRange: function(card, player) {
if (card.name === 'sha' && player.storage.bilibili_zhilve_buff_sha) {
return true;
}
},
},
init: function(player) {
player.storage.bilibili_zhilve_buff_sha = true;
},
trigger: { player: 'useCard' },
filter: function(event, player) {
return event.card.name === 'sha' &&
player.storage.bilibili_zhilve_buff_sha;
},
direct: true,
content: function() {
player.getStat('card').sha--;
player.storage.bilibili_zhilve_buff_sha = false;
},
},
},
},
bilibili_weifeng: {
audio: 'weifeng',
trigger: { player: 'useCardAfter' },
filter: function(event, player) {
if (!event.targets) return false;
if (event.cards.length !== 1) return false;

var card = event.x_card = event.cards[0];
var targets = event.x_targets = event.targets.filter(function(current) {
return !current.hasSkill('bilibili_weifeng_ju');
});
if (targets.length === 0) return false;
if (get.position(card) !== 'd') return false;
return event.card.name === 'sha' || get.type(event.card) === 'trick' && get.tag(event.card, 'damage') > 0;
},
direct: true,
content: function() {
'step 0'
player.chooseTarget(get.prompt2('bilibili_weifeng'), function(card, player, target) {
return trigger.x_targets.contains(target);
}).set('ai', function(target) {
return 2 - get.attitude(player, target);
});
'step 1'
if (result.bool) {
var target = result.targets[0];
player.logSkill('bilibili_weifeng', target);
target.addSkill('bilibili_weifeng_ju');
target.storage.bilibili_weifeng_ju.push(trigger.x_card);
target.syncStorage('bilibili_weifeng_ju');
target.$gain2(trigger.x_card);
}
},
group: ['bilibili_weifeng_damage'],
subSkill: {
ju: {
init: function(player) {
player.storage.bilibili_weifeng_ju = [];
player.storage.bilibili_weifeng_ju.hasSameName = function(card) {
return this.filter(function(ju) {
return ju.name === card.name;
}).length > 0;
};
},
onremove: function(player) {
player.storage.bilibili_weifeng_ju.forEach(function(card) {
card.goto(ui.discardPile);
});
player.$throw(player.storage.bilibili_weifeng_ju);
delete player.storage.bilibili_weifeng_ju;
},
mark: true,
marktext: '惧',
intro: { content: 'cards' },
},
damage: {
audio: 'weifeng',
trigger: { global: 'damageBegin' },
filter: function(event, player) {
return event.player.hasSkill('bilibili_weifeng_ju');
},
forced: true,
logTarget: 'player',
content: function() {
'step 0'
if (trigger.card) {
if (trigger.player.storage.bilibili_weifeng_ju.hasSameName(trigger.card)) {
trigger.num++;
} else if (trigger.player.num('he')) {
player.gainPlayerCard('he', trigger.player, true);
}
}
'step 1'
trigger.player.removeSkill('bilibili_weifeng_ju');
},
},
},
},
bilibili_chuyuan:{
audio:'chuyuan',
trigger:{global:'damageEnd'},
filter:function(event,player){
return event.player.isAlive();
},
logTarget:'player',
locked:false,
content:function(){
'step 0'
trigger.player.draw();
'step 1'
if(!trigger.player.countCards('h')) event.finish();
else trigger.player.chooseCard('h',true,'选择一张牌置于'+get.translation(player)+'的武将牌上作为「储」');
'step 2'
trigger.player.lose(result.cards,ui.special,'visible','toStorage');
trigger.player.$give(result.cards,player,false);
game.log(trigger.player,'选择了',result.cards);
player.markAuto('bilibili_chuyuan',result.cards);
},
mod:{
maxHandcard:function(player,num){
return num+player.getStorage('bilibili_chuyuan').length;
},
},
intro:{
content:'cards',
onunmark:'throw',
},
},
bilibili_dengji:{
audio:'dengji',
derivation:['bilibili_tianxing','bilibili_jianxiong','bilibili_rende','bilibili_zhiheng','bilibili_luanji','bilibili_fangquan'],
trigger:{player:'phaseZhunbeiBegin'},
forced:true,
unique:true,
juexingji:true,
skillAnimation:true,
animationColor:'water',
filter:function(event,player){
return player.getStorage('bilibili_chuyuan').length>=3;
},
content:function(){
player.awakenSkill(event.name);
player.addSkill('bilibili_tianxing');
player.addSkill('bilibili_jianxiong');
player.loseMaxHp();
player.gain(player.storage.bilibili_chuyuan,'gain2','fromStorage');
player.unmarkAuto('bilibili_chuyuan',player.storage.bilibili_chuyuan);
},
},
bilibili_tianxing:{
audio:'tianxing',
trigger:{player:'phaseZhunbeiBegin'},
forced:true,
unique:true,
juexingji:true,
skillAnimation:true,
animationColor:'thunder',
filter:function(event,player){
return player.getStorage('bilibili_chuyuan').length>=3;
},
content:function(){
'step 0'
player.awakenSkill(event.name);
player.loseMaxHp();
player.gain(player.storage.bilibili_chuyuan,'gain2','fromStorage');
player.unmarkAuto('bilibili_chuyuan',player.storage.bilibili_chuyuan);
player.removeSkill('bilibili_chuyuan');
player.chooseControl('bilibili_rende','bilibili_zhiheng','bilibili_luanji','bilibili_fangquan').set('prompt','选择获得一个技能').set('ai',function(){
var player=_status.event.player;
if(!player.hasSkill('luanji')&&!player.hasSkill('bilibili_luanji')&&player.getUseValue({name:'wanjian'})>4) return 'bilibili_luanji';
if(!player.hasSkill('bilibili_zhiheng')) return 'bilibili_zhiheng';
if(!player.hasSkill('caopi_xingdong')) return 'bilibili_fangquan';
return 'bilibili_rende';
});
'step 1'
player.addSkillLog(result.control);
},
},
bilibili_jianxiong:{
audio:'ext:活动武将:2',
trigger:{player:'damageEnd'},
content:function (){
'step 0'
if(get.itemtype(trigger.cards)=='cards'&&get.position(trigger.cards[0],true)=='o'){
player.gain(trigger.cards,'gain2');
}
player.draw('nodelay');
},
ai:{
maixie:true,
maixie_hp:true,
effect:{
target:function (card,player,target){
if(player.hasSkillTag('jueqing',false,target)) return [1,-1];
if(get.tag(card,'damage')&&player!=target) return [1,0.6];
},
},
},
},
bilibili_rende:{
audio:'ext:活动武将:2',
enable:'phaseUse',
filterCard:true,
selectCard:[1,Infinity],
discard:false,
lose:false,
delay:false,
filterTarget:function(card,player,target){
if(player.storage.bilibili_rende2&&player.storage.bilibili_rende2.contains(target)) return false;
return player!=target;
},
onremove:['bilibili_rende','bilibili_rende2'],
check:function(card){
if(ui.selected.cards.length&&ui.selected.cards[0].name=='du') return 0;
if(!ui.selected.cards.length&&card.name=='du') return 20;
var player=get.owner(card);
if(ui.selected.cards.length>=Math.max(2,player.countCards('h')-player.hp)) return 0;
if(player.hp==player.maxHp||player.storage.bilibili_rende<0||player.countCards('h')<=1){
var players=game.filterPlayer();
for(var i=0;i<players.length;i++){
if(players[i].hasSkill('haoshi')&&
!players[i].isTurnedOver()&&
!players[i].hasJudge('lebu')&&
get.attitude(player,players[i])>=3&&
get.attitude(players[i],player)>=3){
return 11-get.value(card);
}
}
if(player.countCards('h')>player.hp) return 10-get.value(card);
if(player.countCards('h')>2) return 6-get.value(card);
return -1;
}
return 10-get.value(card);
},
content:function(){
'step 0'
var evt=_status.event.getParent('phaseUse');
if(evt&&evt.name=='phaseUse'&&!evt.bilibili_rende){
var next=game.createEvent('bilibili_rende_clear');
_status.event.next.remove(next);
evt.after.push(next);
evt.bilibili_rende=true;
next.player=player;
next.setContent(lib.skill.bilibili_rende1.content);
}
if(!Array.isArray(player.storage.bilibili_rende2)){
player.storage.bilibili_rende2=[];
}
player.storage.bilibili_rende2.push(target);
target.gain(cards,player,'giveAuto');
if(typeof player.storage.bilibili_rende!='number'){
player.storage.bilibili_rende=0;
}
if(player.storage.bilibili_rende>=0){
player.storage.bilibili_rende+=cards.length;
if(player.storage.bilibili_rende>=2){
var list=[];
if(lib.filter.cardUsable({name:'sha'},player,event.getParent('chooseToUse'))&&game.hasPlayer(function(current){
return player.canUse('sha',current);
})){
list.push(['基本','','sha']);
list.push(['基本','','sha','fire']);
list.push(['基本','','sha','thunder']);
}
if(lib.filter.cardUsable({name:'tao'},player,event.getParent('chooseToUse'))&&game.hasPlayer(function(current){
return player.canUse('tao',current);
})){
list.push(['基本','','tao']);
}
if(lib.filter.cardUsable({name:'jiu'},player,event.getParent('chooseToUse'))&&game.hasPlayer(function(current){
return player.canUse('jiu',current);
})){
list.push(['基本','','jiu']);
}
if(list.length){
player.chooseButton(['是否视为使用一张基本牌？',[list,'vcard']]).set('ai',function(button){
var player=_status.event.player;
var card={name:button.link[2],nature:button.link[3]};
if(card.name=='tao'){
if(player.hp==1||(player.hp==2&&!player.hasShan())||player.needsToDiscard()){
return 5;
}
return 1;
}
if(card.name=='sha'){
if(game.hasPlayer(function(current){
return player.canUse(card,current)&&get.effect(current,card,player,player)>0
})){
if(card.nature=='fire') return 2.95;
if(card.nature=='thunder') return 2.92;
return 2.9;
}
return 0;
}
if(card.name=='jiu'){
return 0.5;
}
return 0;
});
}
else{
event.finish();
}
player.storage.bilibili_rende=-1;
}
else{
event.finish();
}
}
else{
event.finish();
}
'step 1'
if(result&&result.bool&&result.links[0]){
var card={name:result.links[0][2],nature:result.links[0][3]};
player.chooseUseTarget(card,true);
}
},
ai:{
order:function(skill,player){
if(player.hp<player.maxHp&&player.storage.bilibili_rende<2&&player.countCards('h')>1){
return 10;
}
return 4;
},
result:{
target:function(player,target){
if(target.hasSkillTag('nogain')) return 0;
if(ui.selected.cards.length&&ui.selected.cards[0].name=='du'){
if(target.hasSkillTag('nodu')) return 0;
return -10;
}
if(target.hasJudge('lebu')) return 0;
var nh=target.countCards('h');
var np=player.countCards('h');
if(player.hp==player.maxHp||player.storage.bilibili_rende<0||player.countCards('h')<=1){
if(nh>=np-1&&np<=player.hp&&!target.hasSkill('haoshi')) return 0;
}
return Math.max(1,5-nh);
}
},
effect:{
target:function(card,player,target){
if(player==target&&get.type(card)=='equip'){
if(player.countCards('e',{subtype:get.subtype(card)})){
if(game.hasPlayer(function(current){
return current!=player&&get.attitude(player,current)>0;
})){
return 0;
}
}
}
}
},
threaten:0.8
}
},
bilibili_rende1:{
trigger:{player:'phaseUseBegin'},
silent:true,
content:function(){
player.storage.bilibili_rende=0;
player.storage.bilibili_rende2=[];
}
},
bilibili_zhiheng:{
audio:'ext:活动武将:2',
enable:'phaseUse',
usable:1,
position:'he',
filterCard:lib.filter.cardDiscardable,
discard:false,
lose:false,
delay:false,
selectCard:[1,Infinity],
check:function(card){
var player=_status.event.player;
if(get.position(card)=='h'&&!player.countCards('h','du')&&(player.hp>2||!player.countCards('h',function(card){
return get.value(card)>=8;
}))){
return 1;
}
return 6-get.value(card)
},
content:function(){
'step 0'
player.discard(cards);
event.num=1;
var hs=player.getCards('h');
if(!hs.length) event.num=0;
for(var i=0;i<hs.length;i++){
if(!cards.contains(hs[i])){
event.num=0;break;
}
}
'step 1'
player.draw(event.num+cards.length);
},
subSkill:{
draw:{
trigger:{player:'loseEnd'},
silent:true,
filter:function(event,player){
if(event.getParent(2).skill!='bilibili_zhiheng'&&event.getParent(2).skill!='jilue_zhiheng') return false;
if(player.countCards('h')) return false;
for(var i=0;i<event.cards.length;i++){
if(event.cards[i].original=='h') return true;
}
return false;
},
content:function(){
player.addTempSkill('bilibili_zhiheng_delay',trigger.getParent(2).skill+'After');
}
},
delay:{}
},
ai:{
order:1,
result:{
player:1
},
threaten:1.55
},
},
bilibili_luanji:{
inherit:'luanji',
audio:'ext:活动武将:2',
line:false,
group:'bilibili_luanji_remove',
check:function(card){
return 7-get.value(card);
},
},
bilibili_luanji_remove:{
trigger:{player:'useCard2'},
direct:true,
filter:function(event,player){
return event.card.name=='wanjian'&&event.targets.length>0;
},
line:false,
content:function(){
'step 0'
player.chooseTarget(get.prompt('bilibili_luanji'),'为'+get.translation(trigger.card)+'减少一个目标',function(card,player,target){
return _status.event.targets.contains(target)
}).set('targets',trigger.targets).set('ai',function(target){
var player=_status.event.player;
return -get.effect(target,_status.event.getTrigger().card,player,player)
});
'step 1'
if(result.bool){
player.logSkill('bilibili_luanji',result.targets);
trigger.targets.remove(result.targets[0]);
}
},
},
bilibili_fangquan:{
audio:'ext:活动武将:2',
trigger:{player:'phaseUseBefore'},
filter:function(event,player){
return player.countCards('h')>0&&!player.hasSkill('bilibili_fangquan3');
},
direct:true,
content:function(){
'step 0'
var fang=player.countMark('bilibili_fangquan2')==0&&player.hp>=2&&player.countCards('h')<=player.hp+1;
player.chooseBool(get.prompt2('bilibili_fangquan')).set('ai',function(){
if(!_status.event.fang) return false;
return game.hasPlayer(function(target){
if(target.hasJudge('lebu')||target==player) return false;
if(get.attitude(player,target)>4){
return (get.threaten(target)/Math.sqrt(target.hp+1)/Math.sqrt(target.countCards('h')+1)>0);
}
return false;
});
}).set('fang',fang);
'step 1'
if(result.bool){
player.logSkill('bilibili_fangquan');
trigger.cancel();
player.addTempSkill('bilibili_fangquan2');
player.addMark('bilibili_fangquan2',1,false);
}
}
},
bilibili_fangquan2:{
trigger:{player:'phaseDiscardBegin'},
forced:true,
popup:false,
audio:false,
onremove:true,
content:function(){
'step 0'
event.count=player.countMark(event.name);
player.removeMark(event.name,event.count,false);
'step 1'
event.count--;
player.chooseToDiscard('是否弃置一张牌并令一名其他角色进行一个额外回合？').set('logSkill','bilibili_fangquan').ai=function(card){
return 20-get.value(card);
};
'step 2'
if(result.bool){
player.chooseTarget(true,'请选择进行额外回合的目标角色',lib.filter.notMe).ai=function(target){
if(target.hasJudge('lebu')) return -1;
if(get.attitude(player,target)>4){
return get.threaten(target)/Math.sqrt(target.hp+1)/Math.sqrt(target.countCards('h')+1);
}
return -1;
};
}
else event.finish();
'step 3'
var target=result.targets[0];
player.line(target,'fire');
target.markSkillCharacter('bilibili_fangquan',player,'放权','进行一个额外回合');
target.insertPhase();
target.addSkill('bilibili_fangquan3');
if(event.count>0) event.goto(1);
}
},
bilibili_fangquan3:{
trigger:{player:['phaseAfter','phaseCancelled']},
forced:true,
popup:false,
audio:false,
content:function(){
player.unmarkSkill('bilibili_fangquan');
player.removeSkill('bilibili_fangquan3');
}
},
bilibili_kuiji:{
audio:'kuiji',
enable:'phaseUse',
filter:function(event,player){
if(player.hasJudge('bingliang')) return false;
return player.countCards('he',function(card){
return get.color(card)=='black'&&get.type(card)=='basic';
})>0;
},
viewAs:{name:'bingliang'},
position:'he',
filterCard:function(card,player,event){
return get.color(card)=='black'&&get.type(card)=='basic'&&player.canAddJudge({name:'bingliang',cards:[card]});
},
selectTarget:-1,
filterTarget:function(card,player,target){
return player==target;
},
check:function(card){
return 9-get.value(card);
},
onuse:function(links,player){
var next=game.createEvent('bilibili_kuiji_content',false,_status.event.getParent());
next.player=player;
next.setContent(lib.skill.bilibili_kuiji.bilibili_kuiji_content);
},
bilibili_kuiji_content:function(){
'step 0'
player.draw();
'step 1'
player.chooseTarget(function(card,player,target){
return get.attitude(player,target)<0&&!game.hasPlayer(function(current){
return get.attitude(player,current)<0&&current.hp>target.hp;
});
}).set('ai',function(target){
var player=_status.event.player;
return get.damageEffect(target,player,player)
});
'step 2'
if(result.bool){
var target=result.targets[0];
player.line(target);
target.damage(2);
}
},
ai:{
result:{
target:1,
},
order:12,
},
group:'bilibili_kuiji_dying',
subSkill:{
dying:{
trigger:{global:'dying'},
forced:true,
popup:false,
filter:function(event,player){
var evt=event.getParent(2);
if(!evt||evt.name!='bilibili_kuiji_content'||evt.player!=player) return false;
var list=game.filterPlayer(function(current){
return get.attitude(player,current)>0;
}).sort(function(a,b){
return a.hp-b.hp;
});
return (list.length==1||list[0].hp<list[1].hp)&&list[0].isDamaged();
},
content:function(){
var list=game.filterPlayer(function(current){
return get.attitude(player,current)>0;
}).sort(function(a,b){
return a.hp-b.hp;
})[0];
player.logSkill('bilibili_kuiji',list);
list.recover();
},
},
},
},
bilibili_cuorui:{
audio:'wlcuorui',
trigger:{player:'phaseUseBegin'},
direct:true,
filter:function(event,player){
return game.hasPlayer(function(current){
return get.attitude(player,current)>0&&current.countDiscardableCards(player,'hej')>0;
});
},
content:function(){
'step 0'
player.chooseTarget(function(card,player,target){
return get.attitude(player,target)>0&&target.countDiscardableCards(player,'hej')>0;
},get.prompt2('bilibili_cuorui')).set('ai',function(target){
if(target.countCards('e',function(card){
return card.name!='tengjia'&&get.value(card)<=0;
})) return 10;
if(target.countCards('j',function(card){
return get.effect(target,{name:card.viewAs||card.name},target,target)<0;
})) return 10;
return Math.random()+0.2-1/target.countCards('hej');
});
'step 1'
if(result.bool){
var target=result.targets[0];
event.target=target;
player.logSkill('bilibili_cuorui',target);
player.discardPlayerCard(target,'hej',true);
}
else event.finish();
'step 2'
if(!result.cards||!result.cards.length){
event.finish();
return;
}
var color=get.color(result.cards[0],result.cards[0].original=='j'?false:target);
event.color=color;
var list=[];
if(game.hasPlayer(function(current){
return get.attitude(player,current)<0&&current.countCards('h');
})) list.push('展示手牌');
if(game.hasPlayer(function(current){
return get.attitude(player,current)<0&&current.countCards('e',{color:color});
})) list.push('弃置装备');
if(!list.length){
event.finish();
return;
}
if(list.length==1) event._result={control:list[0]};
else player.chooseControl(list).set('prompt','挫锐：展示对手的至多两张手牌，或弃置对手装备区内至多两张'+get.translation(color)+'牌').set('ai',function(){
var player=_status.event.player;
var color=_status.event.getParent().color;
if(game.countPlayer(function(current){
if(!get.attitude(player,current)<0) return false;
return current.countCards('e',function(card){
return get.color(card)==color&&get.value(card)>0;
});
})>1) return 1;
return 0;
});
'step 3'
if(result.control=='弃置装备') event.goto(5);
else{
var dialog=['请选择要展示的牌'];
var list=game.filterPlayer(function(current){
return get.attitude(player,current)<0&&current.countCards('h');
}).sortBySeat();
for(var i of list){
dialog.push('<div class="text center">'+get.translation(i)+'</div>');
if(player.hasSkillTag('viewHandcard',null,i,true)) dialog.push(i.getCards('h'));
else dialog.push([i.getCards('h'),'blank']);
}
player.chooseButton([1,2],true).set('createDialog',dialog).set('ai',function(button){
var color=(get.color(button.link)==_status.event.getParent().color);
return color?Math.random():0.35;
});
}
'step 4'
player.showCards(result.links);
var map={};
var map2={};
for(var i of result.links){
var id=get.owner(i).playerid;
if(!map[id]) map[id]=[];
map[id].push(i);
if(get.color(i)!=event.color) continue;
if(!map2[id]) map2[id]=[];
map2[id].push(i);
}
for(var i in map){
var source=(_status.connectMode?lib.playerOL:game.playerMap)[i];
if(map2[i]) player.gain(map2[i],source,'bySelf','give');
player.line(source);
game.log(player,'展示了',source,'的',map[i]);
}
event.next.sort(function(a,b){
return lib.sort.seat(a.source||a.player,b.source||b.player);
});
event.finish();
'step 5'
var dialog=['请选择要弃置的牌'];
var list=game.filterPlayer(function(current){
return get.attitude(player,current)<0&&current.countCards('e',function(card){
return get.color(card)==event.color;
});
}).sortBySeat();
for(var i of list){
dialog.push('<div class="text center">'+get.translation(i)+'</div>');
dialog.push(i.getCards('e',function(card){
return get.color(card)==event.color;
}));
}
player.chooseButton([1,2],true).set('createDialog',dialog).set('ai',function(button){
var owner=get.owner(button.link);
return get.value(button.link,owner)
});
'step 6'
var map={};
for(var i of result.links){
if(get.color(i)!=event.color) continue;
var id=get.owner(i).playerid;
if(!map[id]) map[id]=[];
map[id].push(i);
}
for(var i in map){
(_status.connectMode?lib.playerOL:game.playerMap)[i].discard(map[i],'notBySelf');
}
event.next.sort(function(a,b){
return lib.sort.seat(a.player,b.player);
});
},
},
wzshouye:{
audio:'shouye',
group:'wzshouye_after',
trigger:{
target:'useCardToTarget',
},
filter:function (event,player){
return event.player!=player&&event.targets.length==1;
},
check:function (event,player){
if(event.player==game.me||event.player.isOnline()) return get.attitude(player,event.player)<0;
return get.effect(player,event.card,event.player,player)<0;
},
usable:1,
logTarget:'player',
content:function (){
'step 0'
player.line(trigger.player);
player.judge('wzshouye',function(card){
return (get.color(card)=='red')?2:-2
});
'step 1'
if(result.bool==true){
trigger.targets.remove(player);
trigger.getParent().triggeredTargets2.remove(player);
trigger.getParent().wzshouyeer=player;
}
},
subSkill:{
after:{
sub:true,
trigger:{
global:"useCardAfter",
},
forced:true,
silent:true,
popup:false,
filter:function (event,player){
if(event.wzshouyeer!=player) return false;
if(event.cards){
for(var i=0;i<event.cards.length;i++){
if(event.cards[i].isInPile()) return true;
}
}
return false;
},
content:function (){
var list=[];
for(var i=0;i<trigger.cards.length;i++){
if(trigger.cards[i].isInPile()){
list.push(trigger.cards[i]);
}
}
player.gain(list,'gain2','log');
},
},
},
},
gz_huashen:{
audio:'ext:活动武将:2',
unique:true,
group:['gz_huashen_add','gz_huashen_swap','gz_huashen_remove','gz_huashen_disallow','gz_huashen_flash'],
derivation:'gz_huashen_faq',
init:function(player){
player.storage.gz_huashen=[];
player.storage.gz_huashen_removing=[];
player.storage.gz_huashen_trigger=[];
player.storage.gz_huashen_map={};
},
onremove:function(player){
delete player.storage.gz_huashen;
delete player.storage.gz_huashen_removing;
delete player.storage.gz_huashen_trigger;
delete player.storage.gz_huashen_map;
},
ondisable:true,
mark:true,
intro:{
mark:function(dialog,storage,player){
if(storage&&storage.length){
//if(player.isUnderControl(true)){
dialog.addSmall([storage,'character']);
var skills=[];
for(var i in player.storage.gz_huashen_map){
skills.addArray(player.storage.gz_huashen_map[i]);
}
dialog.addText('可用技能：'+(skills.length?get.translation(skills):'无'));
//}
//else{
//return '共有'+get.cnNumber(storage.length)+'张「化身」'
//}
}
else{
return '没有化身';
}
},
content:function(storage,player){
var skills=[];
for(var i in player.storage.gz_huashen_map){
skills.addArray(player.storage.gz_huashen_map[i]);
}
return get.translation(storage)+'；可用技能：'+(skills.length?get.translation(skills):'无');
}
},
filterSkill:function(name){
var skills=lib.character[name][3].slice(0);
for(var i=0;i<skills.length;i++){
var info=lib.skill[skills[i]];
if(skills[i]=='kunfen'||(info.unique&&!info.gainable)||info.dutySkill||info.groupSkill||info.limited||info.mainSkill||info.viceSkill||info.silent||info.juexingji||info.zhuanhuanji||info.hiddenSkill||get.is.locked(skills[i])){
skills.splice(i--,1);
}
}
return skills;
},
addCharacter:function(player,name,show){
var skills=lib.skill.gz_huashen.filterSkill(name);
if(skills.length){
player.storage.gz_huashen_map[name]=skills;
for(var i=0;i<skills.length;i++){
player.addAdditionalSkill('gz_huashen',skills[i],true);
}
}
player.storage.gz_huashen.add(name);
player.updateMarks('gz_huashen');
_status.characterlist.remove(name);
if(show){
lib.skill.gz_huashen.drawCharacter(player,[name]);
}
},
drawCharacter:function(player,list){
game.broadcastAll(function(player,list){
var cards=[];
for(var i=0;i<list.length;i++){
var cardname='huashen_card_'+list[i];
lib.card[cardname]={
fullimage:true,
image:'character:'+list[i]
}
lib.translate[cardname]=get.rawName2(list[i]);
cards.push(game.createCard(cardname,'',''));
}
player.$draw(cards,'nobroadcast');
},player,list);
},
removeCharacter:function(player,list){
var skills=lib.skill.gz_huashen.filterSkill(list);
if(skills.length){
delete player.storage.gz_huashen_map[list];
for(var i=0;i<skills.length;i++){
var remove=true;
for(var j in player.storage.gz_huashen_map){
if(j!=list&&game.expandSkills(player.storage.gz_huashen_map[j].slice(0)).contains(skills[i])){
remove=false;break;
}
}
if(remove){
player.removeAdditionalSkill('gz_huashen',skills[i]);
player.storage.gz_huashen_removing.remove(skills[i]);
}
}
}
game.log(player,'移除了化身牌','#g'+get.translation(list));
player.storage.gz_huashen.remove(list);
player.updateMarks('gz_huashen');
game.broadcastAll(function(player,list){
var cards=[];
var cardlist='huashen_card_'+list;
lib.card[cardlist]={
fullimage:true,
image:'character:'+list
}
lib.translate[cardlist]=get.translation(list);
cards.push(game.createCard(cardlist,'',''));
player.$throw(cards,1000,'nobroadcast');
},player,list);
_status.characterlist.addArray(list);
},
getSkillSources:function(player,skill){
if(player.getStockSkills().contains(skill)) return [];
var sources=[];
for(var i in player.storage.gz_huashen_map){
if(game.expandSkills(player.storage.gz_huashen_map[i].slice(0)).contains(skill)) sources.push(i);
}
return sources;
},
subfrequent:['add'],
subSkill:{
add:{
audio:'gz_huashen',
trigger:{player:'phaseBeginStart'},
frequent:true,
filter:function(event,player){
return player.storage.gz_huashen.length<2;
},
content:function(){
'step 0'
var list=_status.characterlist.randomGets(5);
if(!list.length){
event.finish();
return;
}
player.chooseButton([1,2]).set('ai',function(button){
return get.rank(button.link,true);
}).set('createDialog',['选择至多两张武将牌作为「化身」',[list,'character']]);
'step 1'
if(result.bool){
for(var i=0;i<result.links.length;i++){
lib.skill.gz_huashen.addCharacter(player,result.links[i]);
}
lib.skill.gz_huashen.drawCharacter(player,result.links.slice(0));
game.delayx();
player.addTempSkill('gz_huashen_triggered');
game.log(player,'获得了'+get.cnNumber(result.links.length)+'张','#g化身');
}
}
},
swap:{
audio:'gz_huashen',
trigger:{player:'phaseZhunbeiBegin'},
direct:true,
filter:function(event,player){
if(player.hasSkill('gz_huashen_triggered')) return false;
return player.storage.gz_huashen.length>=2;
},
content:function(){
'step 0'
var list=player.storage.gz_huashen.slice(0);
if(!list.length){
event.finish();
return;
}
player.chooseButton().set('ai',function(){
return Math.random()-0.3;
}).set('createDialog',['是否替换一张「化身」？',[list,'character']]);
'step 1'
if(result.bool){
player.logSkill('gz_huashen');
game.log(player,'替换了一张','#g化身');
lib.skill.gz_huashen.addCharacter(player,_status.characterlist.randomGet(),true);
lib.skill.gz_huashen.removeCharacter(player,result.links[0]);
game.delayx();
}
}
},
triggered:{},
flash:{
hookTrigger:{
log:function(player,skill){
var sources=lib.skill.gz_huashen.getSkillSources(player,skill);
if(sources.length){
player.flashAvatar('gz_huashen',sources.randomGet());
player.storage.gz_huashen_removing.add(skill);
}
}
},
trigger:{player:['useSkillBegin','useCard','respond']},
silent:true,
filter:function(event,player){
return event.skill&&lib.skill.gz_huashen.getSkillSources(player,event.skill).length>0;
},
content:function(){
lib.skill.gz_huashen_flash.hookTrigger.log(player,trigger.skill);
}
},
clear:{
trigger:{player:'phaseAfter'},
silent:true,
content:function(){
player.storage.gz_huashen_trigger.length=0;
}
},
disallow:{
hookTrigger:{
block:function(event,player,name,skill){
for(var i=0;i<player.storage.gz_huashen_trigger.length;i++){
var info=player.storage.gz_huashen_trigger[i];
if(info[0]==event&&info[1]==name&&
lib.skill.gz_huashen.getSkillSources(player,skill).length>0){
return true;
}
}
return false;
}
}
},
remove:{
trigger:{player:['useSkillAfter','useCardAfter','respondAfter','triggerAfter','skillAfter']},
hookTrigger:{
after:function(event,player){
if(event._direct&&!player.storage.gz_huashen_removing.contains(event.skill)) return false;
if(lib.skill[event.skill].silent) return false;
return lib.skill.gz_huashen.getSkillSources(player,event.skill).length>0;
}
},
silent:true,
filter:function(event,player){
return event.skill&&lib.skill.gz_huashen.getSkillSources(player,event.skill).length>0;
},
content:function(){
'step 0'
if(trigger.name=='trigger'){
player.storage.gz_huashen_trigger.push([trigger._trigger,trigger.triggername]);
}
var sources=lib.skill.gz_huashen.getSkillSources(player,trigger.skill);
if(sources.length==1){
event.directresult=sources[0];
}
else{
player.chooseButton(true).set('createDialog',['移除一张「化身」牌',[sources,'character']]);
}
'step 1'
if(!event.directresult&&result&&result.links[0]){
event.directresult=result.links[0];
}
var name=event.directresult;
lib.skill.gz_huashen.removeCharacter(player,name);
}
}
},
ai:{
nofrequent:true,
skillTagFilter:function(player,tag,arg){
if(arg&&player.storage.gz_huashen){
if(lib.skill.gz_huashen.getSkillSources(player,arg).length>0){
return true;
}
}
return false;
}
}
},
gz_xinsheng:{
audio:'ext:活动武将:2',
trigger:{player:'damageEnd'},
direct:true,
content:function(){
'step 0'
event.count=trigger.num;
'step 1'
if(event.count>0){
player.chooseBool(get.prompt2('gz_xinsheng')).ai=function(){
return true;
};
}else event.finish();
'step 2'
if(result.bool){
event.count--;
player.logSkill('gz_xinsheng');
lib.skill.gz_huashen.addCharacter(player,_status.characterlist.randomGet(),true);
game.log(player,'获得了一张','#g化身');
}else event.finish();
'step 3'
if(event.count>0) event.goto(1);
}
},
bilibili_huanshi:{
audio:'huanshi',
trigger:{
global:'judge',
},
filter:function (event,player){
return player.countCards('he')>0&&get.attitude(player,event.player)>0;
},
direct:true,
content:function (){
'step 0'
player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
get.translation(trigger.player.judging[0])+'，'+get.prompt('bilibili_huanshi'),'he',function(card){
var player=_status.event.player;
var mod2=game.checkMod(card,player,'unchanged','cardEnabled2',player);
if(mod2!='unchanged') return mod2;
var mod=game.checkMod(card,player,'unchanged','cardRespondable',player);
if(mod!='unchanged') return mod;
return true;
}).set('ai',function(card){
var trigger=_status.event.getTrigger();
var player=_status.event.player;
var judging=_status.event.judging;
var result=trigger.judge(card)-trigger.judge(judging);
var attitude=get.attitude(player,trigger.player);
if(attitude==0||result==0) return 0;
if(attitude>0){
return result-get.value(card)/2;
}
else{
return -result-get.value(card)/2;
}
}).set('judging',trigger.player.judging[0]);
'step 1'
if(result.bool){
player.respond(result.cards,'highlight','bilibili_huanshi','noOrdering');
}
else{
event.finish();
}
'step 2'
if(result.bool){
if(trigger.player.judging[0].clone){
trigger.player.judging[0].clone.classList.remove('thrownhighlight');
game.broadcast(function(card){
if(card.clone){
card.clone.classList.remove('thrownhighlight');
}
},trigger.player.judging[0]);
game.addVideo('deletenode',player,get.cardsInfo([trigger.player.judging[0].clone]));
}
game.cardsDiscard(trigger.player.judging[0]);
trigger.player.judging[0]=result.cards[0];
trigger.orderingCards.addArray(result.cards);
game.log(trigger.player,'的判定牌改为',result.cards[0]);
game.delay(2);
}
},
ai:{
rejudge:true,
tag:{
rejudge:1,
},
},
},
bilibili_zhenwei:{
},
_bilibili_zhenwei_distance:{
mod:{
globalTo:function (from,to,distance){
if(game.hasPlayer(function(current){
return current!=to&&current.hasSkill('bilibili_zhenwei')&&get.attitude(current,to)>0;
})){
return distance+1;
}
},
},
},
bilibili_hongyuan:{
trigger:{player:'phaseDrawBegin2'},
direct:true,
audio:'hongyuan',
filter:function(event,player){
return !event.numFixed&&event.num>0;
},
content:function(){
"step 0"
player.chooseBool(get.prompt2('bilibili_hongyuan')).ai=function(){
return game.countPlayer(function(current){
if(get.mode()=='identity') return current!=player&&get.attitude(player,current)>0;
return current!=player&&current.isFriendOf(player);
})>2;
};
"step 1"
if(result.bool){
var targets=game.filterPlayer(function(current){
return current!=player&&get.attitude(player,current)>0;
});
player.logSkill('bilibili_hongyuan',targets);
game.asyncDraw(targets);
trigger.num--;
}
},
},
bilibili_ganglie:{
audio:'ganglie',
trigger:{player:'damageEnd'},
direct:true,
content:function(){
"step 0"
player.chooseTarget(get.prompt2('bilibili_ganglie'),function(card,player,target){
return get.attitude(player,target)<0;
}).set('ai',function(target){
return -get.attitude(_status.event.player,target)/(1+target.countCards('h'));
});
"step 1"
if(result.bool){
event.target=result.targets[0];
player.logSkill('bilibili_ganglie',event.target);
}
else event.finish();
"step 2"
target.judge(function(card){
if(get.suit(card)=='heart') return 2;
return -2;
})
"step 3"
if(result.judge>0){
event.finish();
return;
}
target.chooseToDiscard(2).set('ai',function(card){
if(card.name=='tao') return -10;
if(card.name=='jiu'&&_status.event.player.hp==1) return -10;
return get.unuseful(card)+2.5*(5-get.owner(card).hp);
});
"step 4"
if(result.bool==false){
target.damage();
}
},
ai:{
maixie_defend:true,
effect:{
target:function(card,player,target){
if(player.hasSkillTag('jueqing',false,target)) return [1,-1];
return 0.8;
}
}
}
},
bilibili_zhongyi:{
audio:'ext:活动武将:2',
enable:'phaseUse',
limited:true,
skillAnimation:true,
animationColor:'orange',
filterCard:true,
position:'he',
filter:function(event,player){
return player.countCards('he')>0;
},
toStorage:true,
discard:false,
content:function(){
player.awakenSkill('bilibili_zhongyi');
player.addTempSkill('bilibili_zhongyi2','roundStart');
player.markAuto('bilibili_zhongyi2',cards);
},
},
bilibili_zhongyi2:{
trigger:{global:'damageBegin1'},
forced:true,
popup:false,
logTarget:'source',
filter:function(event,player){
return event.getParent().name=='sha'&&event.source&&get.attitude(player,event.source)>0;
},
content:function(){trigger.num++},
intro:{content:'cards',onunmark:'throw'},
},
bilibili_zhanshen:{
audio:'ext:活动武将:2',
trigger:{player:'phaseZhunbeiBegin'},
forced:true,
skillAnimation:true,
animationColor:'gray',
filter:function(event,player){
return player.isDamaged()&&game.dead.filter(function(target){
return get.attitude(player,target)>0;
}).length>0
},
content:function(){
player.awakenSkill('bilibili_zhanshen');
var card=player.getEquip(1);
if(card) player.discard(card);
player.loseMaxHp();
player.addSkill('mashu');
player.addSkill('shenji');
},
derivation:['mashu','shenji'],
},
bilibili_jiuzhu:{
audio:'ext:活动武将:2',
trigger:{global:'dying'},
filter:function (event,player){
return event.player!=player&&event.player.hp<=0&&player.num('he')>0&&player.hp>1&&get.attitude(player,event.player)>0;
},
check:function (event,player,card){
if(event.player==game.friendZhu||event.player==game.enemyZhu) return true;
if(event.player.hp<0) return false;
return true;
},
direct:true,
content:function (){
'step 0'
var next=player.chooseToDiscard(get.prompt('bilibili_jiuzhu',trigger.player),'he');
next.logSkill=['bilibili_jiuzhu',trigger.player];
next.set('ai',function(card){
if(card.name=='tao') return -10;
if(card.name=='jiu'&&_status.event.player.hp==1) return -10;
var player=_status.event.player;
if(ai.get.attitude(player,_status.event.getTrigger().player)>3){
return 11-ai.get.value(card);
}
return -1;
});
'step 1'
if(result.bool){
player.loseHp();
trigger.player.recover();
}
},
},
lzlianpian:{
global:['lzlianpian_draw','lzlianpian_ai'],
audio:'xinfu_lianpian',
frequent:true,
subSkill:{
draw:{
trigger:{player:'useCardToPlayered'},
filter:function (event,player){
var keyPlayer=game.filterPlayer(function(current){
return current.hasSkill('lzlianpian');
});
if(!event.targets||!event.targets.length||
event.getParent().triggeredTargets3.length>1||!event.isPhaseUsing(player)) return false;
var evt=player.getLastUsed(1);
if(!evt||!evt.targets||!evt.targets.length||!evt.isPhaseUsing(player)) return false;
for(var i=0;i<event.targets.length;i++){
if(evt.targets.contains(event.targets[i])) return true;
}
return false;
},
direct:true,
locked:false,
content:function(){
'step 0'
event.current=player;
event.acted=[];
'step 1'
event.acted.push(event.current);
if(event.current.hasSkill('lzlianpian')&&((get.mode()=='identity'&&get.attitude(event.current,player)>0)||(get.mode()!='identity'&&player.isFriendOf(event.current)))){
event.acted.push(event.current);
event.current.chooseBool(get.prompt2('lzlianpian',player)).set('ai',function(player){return true}).set('frequentSkill','lzlianpian');
}
else event.goto(3);
'step 2'
if(result.bool){
event.current.logSkill('lzlianpian',player);
if(event.current!=player) event.current.addExpose(0.3);
player.draw();
}
'step 3'
event.current=event.current.next;
if(event.current!=player&&!event.acted.contains(event.current)) event.goto(1);
},
},
ai:{
mod:{
aiOrder:function(player,card,num){
if(player!=_status.currentPhase||player.getHistory('useCard').length<1||!game.hasPlayer(function(current){
return (get.realAttitude||get.attitude)(current,player)>0&&current.hasSkill('lzlianpian');
})) return;
if(player.isPhaseUsing()){
var evt=player.getLastUsed();
if(evt&&evt.targets&&evt.targets.length&&evt.isPhaseUsing(player)&&game.hasPlayer(function(current){
return evt.targets.contains(current)&&player.canUse(card,current)&&get.effect(current,card,player,player)>0;
})){
return num+10;
}
}
},
},
},
},
ai:{threaten:4.114514},
//①加了用牌ai，所以添加嘲讽度了；
//②这么臭的苏飞有存在的必要吗[手动滑稽]
},
lzwenji:{
audio:'spwenji',
trigger:{player:'phaseUseBegin'},
direct:true,
filter:function(event,player){
return game.hasPlayer(function(current){
return current!=player&&current.countCards('he');
});
},
content:function(){
'step 0'
player.chooseTarget(get.prompt2('lzwenji'),function(card,player,target){
if(get.mode()=='identity') return target!=player&&get.attitude(player,target)>0&&target.countCards('he');
return target!=player&&target.isFriendOf(player)&&target.countCards('he');
}).set('ai',function(target){
var att=get.attitude(player,target);
if(target.countCards()<3) return 0;
if(att>0) return Math.sqrt(att)/10;
return att;
});
'step 1'
if(result.bool){
var target=result.targets[0];
event.target=target;
player.logSkill('lzwenji',target);
target.chooseCard('he',true,'问计：将一张牌交给'+get.translation(player));
}
else{
event.finish();
}
'step 2'
if(result.bool){
player.addTempSkill('lzwenji_respond');
player.storage.lzwenji_respond=result.cards[0].name;
event.target.give(result.cards,player,true);
}
},
subSkill:{
respond:{
onremove:true,
trigger:{player:'useCard'},
forced:true,
charlotte:true,
audio:'lzwenji',
filter:function(event,player){
return event.card.name==player.storage.lzwenji_respond;
},
content:function(){
trigger.directHit.addArray(game.filterPlayer(function(current){
return current!=player;
}));
},
ai:{
directHit_ai:true,
skillTagFilter:function(player,tag,arg){
return arg.card.name==player.storage.lzwenji_respond;
},
},
}
}
},
lztunjiang:{
audio:'sptunjiang',
trigger:{global:'phaseJieshuBegin'},
filter:function(event,player){
return event.player.isAlive()&&!event.player.getStat('damage')&&get.attitude(player,event.player)>0;
},
direct:true,
content:function(){
'step 0'
player.chooseTarget(function(card,player,target){
return target==player||target==_status.event.source;
},'屯江：请选择一个目标令其摸两张牌').set('ai',function(target){
return 114514-target.countCards();
}).set('source',trigger.player);
'step 1'
if(result.targets.length){
player.logSkill('lztunjiang',result.targets[0]);
result.targets[0].draw(2);
}
},
},
lzdianhu:{
audio:'xinfu_dianhu',
trigger:{global:'phaseBefore',player:'enterGame'},
forced:true,
filter:function(event,player){
return (event.name!='phase'||game.phaseNumber==0)&&game.players.length>1;
},
content:function(){
'step 0'
player.chooseTarget('请选择【点虎】的目标',lib.translate.lzdianhu_info,true,function(card,player,target){
return target!=player&&!target.hasSkill('lzdianhu2');
}).set('ai',function(target){
var att=get.attitude(_status.event.player,target);
if(att<0) return -att+3;
return Math.random();
});
'step 1'
if(result.bool){
var target=result.targets[0];
player.line(target,'green');
game.log(target,'成为了','#g【点虎】','的目标');
target.storage.lzdianhu2=player;
target.addSkill('lzdianhu2');
}
else event.finish();
},
},
lzdianhu2:{
mark:'character',
intro:{content:'当你受到来自$及其友方角色的1点伤害后，伤害来源摸一张牌'},
audio:'xinfu_dianhu',
trigger:{player:'damageAfter'},
forced:true,
charlotte:true,
filter:function (event,player){
if(player.storage.lzdianhu2&&player.storage.lzdianhu2.isIn()){
if(get.mode()=='identity') return get.attitude(player.storage.lzdianhu2,event.source)>0;
return event.source.isFriendOf(player.storage.lzdianhu2);
};
},
content:function (){
var target=player.storage.lzdianhu2;
target.logSkill('lzdianhu',trigger.source);
trigger.source.draw(trigger.num);
},
onremove:true,
},
lzjianji:{
audio:'xinfu_jianji',
enable:'phaseUse',
usable:1,
filter:function (event,player){
if(!game.hasPlayer(function(current){
if(get.mode()=='identity') return current!=player&&get.attitude(player,current)>0;
return current!=player&&current.isFriendOf(player);
})) return false;
return true;
},
filterTarget:function (card,player,target){
if(get.mode()=='identity') return target!=player&&get.attitude(player,target)>0;
return target!=player&&target.isFriendOf(player);
},
content:function (){
'step 0'
target.draw();
'step 1'
var card=result[0];
if(card&&game.hasPlayer(function(current){
return target.canUse(card,current);
})&&get.owner(card)==target){
target.chooseToUse({
prompt:'是否使用'+get.translation(card)+'？',
filterCard:function(cardx,player,target){
return cardx==_status.event.cardx;
},
cardx:card,
});
}
},
ai:{
order:7.5,
result:{
target:1,
},
},
},
lzxingzhao:{
init:function(player){
player.storage.deaddamage=0;
player.storage.lzxingzhao1=false;
player.storage.lzxingzhao2=false;
player.storage.lzxingzhao3=false;
player.storage.lzxingzhao4=false;
},
derivation:['xunxun'],
audio:'xinfu_xingzhao',
group:['lz_xunxun','lzxingzhao1','lzxingzhao2','lzxingzhao3'],
mark:true,
//身份场防偷窥功能
intro:{
content:function(storage,player){
var lznum=0;
var sgnum=0;
var num=player.storage.deaddamage;
for(var i=0;i<game.players.length;i++){
if(((get.mode()=='identity'&&get.attitude(player,game.players[i])>0)||(get.mode()!='identity'&&game.players[i].isFriendOf(player)))){
game.players[i].getAllHistory('sourceDamage',function(evt){
num+=evt.num;
});
}
};
lznum+=game.filterPlayer(function(current){
if(get.mode()=='identity') current.isFriendOf(player);
return get.attitude(player,current)>0;
}).length;
sgnum+=game.dead.filter(function(target){
if(get.mode()=='identity') target.isFriendOf(player);
return get.attitude(player,target)>0;
}).length;
var str='<li>当前总共造成了';
str+=num;
str+='点伤害。';
if(player.isUnderControl(true)||get.mode()!='identity'){
if(num<(lznum+sgnum)*1){
str+='<li>距离“所有友方角色视为拥有技能〖恂恂〗”还需要造成';
str+=(lznum+sgnum)*1-num;
str+='点伤害。';
}
if(num>=(lznum+sgnum)*1){
str+='<br><li>所有友方角色视为拥有技能〖恂恂〗。';
}
if(num<(lznum+sgnum)*2){
str+='<li>距离“所有友方角色使用装备牌时摸一张牌”还需要造成';
str+=(lznum+sgnum)*2-num;
str+='点伤害。';
}
if(num>=(lznum+sgnum)*2){
str+='<br><li>所有友方角色使用装备牌时摸一张牌。';
}
if(num<(lznum+sgnum)*3){
str+='<li>距离“所有友方角色始终跳过弃牌阶段”还需要造成';
str+=(lznum+sgnum)*3-num;
str+='点伤害。';
}
if(num>=(lznum+sgnum)*3){
str+='<br><li>所有友方角色始终跳过弃牌阶段。';
}
if(num<(lznum+sgnum)*6){
str+='<li>距离“新的一轮开始时，你所属的阵营直接获得游戏胜利”还需要造成';
str+=(lznum+sgnum)*6-num;
str+='点伤害。';
}
if(num>=(lznum+sgnum)*6){
str+='<br><li>新的一轮开始时，你所属的阵营直接获得游戏胜利。';
}
}
else{
str='未知已解锁效果';
if(player.storage.lzxingzhao1==true) str='当前已知效果';
if(player.storage.lzxingzhao1==true) str+='<br><li>所有友方角色视为拥有技能〖恂恂〗。';
if(player.storage.lzxingzhao2==true) str+='<br><li>所有友方角色使用装备牌时摸一张牌。';
if(player.storage.lzxingzhao3==true) str+='<br><li>所有友方角色始终跳过弃牌阶段。';
if(player.storage.lzxingzhao4==true) str+='<br><li>新的一轮开始时，你所属的阵营直接获得游戏胜利。';
}
return str;
},
},
trigger:{global:'useCard'},
forced:true,
filter:function (event,player){
if(get.type(event.card)!='equip') return false;
var lznum=0;
var sgnum=0;
var num=player.storage.deaddamage;
for(var i=0;i<game.players.length;i++){
if(((get.mode()=='identity'&&get.attitude(player,game.players[i])>0)||(get.mode()!='identity'&&game.players[i].isFriendOf(player)))){
game.players[i].getAllHistory('sourceDamage',function(evt){
num+=evt.num;
});
}
};
lznum+=game.filterPlayer(function(current){
if(get.mode()=='identity') return get.attitude(player,current)>0;
return current.isFriendOf(player);
}).length;
sgnum+=game.dead.filter(function(target){
if(get.mode()=='identity') return get.attitude(player,target)>0;
return target.isFriendOf(player);
}).length;
return num>=(lznum+sgnum)*2&&get.attitude(player,event.player)>0;
},
logTarget:'player',
content:function (){
player.storage.lzxingzhao2=true,
trigger.player.draw();
},
},
lz_xunxun:{
audio:'xz_xunxun',
trigger:{global:'phaseDrawBegin1'},
filter:function(event,player){
var lznum=0;
var sgnum=0;
var num=player.storage.deaddamage;
for(var i=0;i<game.players.length;i++){
if(((get.mode()=='identity'&&get.attitude(player,game.players[i])>0)||(get.mode()!='identity'&&game.players[i].isFriendOf(player)))){
game.players[i].getAllHistory('sourceDamage',function(evt){
num+=evt.num;
});
}
};
lznum+=game.filterPlayer(function(current){
if(get.mode()=='identity') return get.attitude(player,current)>0;
return current.isFriendOf(player);
}).length;
sgnum+=game.dead.filter(function(target){
if(get.mode()=='identity') return get.attitude(player,target)>0;
return target.isFriendOf(player);
}).length;
if(get.mode()=='identity') return num>=(lznum+sgnum)*1&&get.attitude(player,event.player)>0;
return num>=(lznum+sgnum)*1&&event.player.isFriendOf(player);
},
direct:true,
content:function(){
'step 0'
trigger.player.chooseBool(get.prompt2('xunxun')).set('ai',function(player){return true});
'step 1'
if(result.bool){
player.storage.lzxingzhao1=true,
trigger.player.logSkill('lz_xunxun');
var cards=get.cards(4);
game.cardsGotoOrdering(cards);
var next=trigger.player.chooseToMove('恂恂：将两张牌置于牌堆顶',true);
next.set('list',[
['牌堆顶',cards],
['牌堆底'],
]);
next.set('filterMove',function(from,to,moved){
if(to==1&&moved[1].length>=2) return false;
return true;
});
next.set('filterOk',function(moved){
return moved[1].length==2;
});
next.set('processAI',function(list){
var cards=list[0][1].slice(0).sort(function(a,b){
return get.value(b)-get.value(a);
});
return [cards,cards.splice(2)];
});
}
else event.finish();
'step 2'
var top=result.moved[0];
var bottom=result.moved[1];
top.reverse();
for(var i=0;i<top.length;i++){
ui.cardPile.insertBefore(top[i],ui.cardPile.firstChild);
}
for(i=0;i<bottom.length;i++){
ui.cardPile.appendChild(bottom[i]);
}
game.updateRoundNumber();
game.delayx();
/*
'step 1'
if(result.bool){
player.storage.lzxingzhao1=true;
trigger.player.logSkill('lz_xunxun');
event.cards=get.cards(4);
trigger.player.chooseCardButton(event.cards,2,'选择两张牌置于牌堆顶',true).set('ai',ai.get.buttonValue);
}
else event.finish();
'step 2'
if(result.bool){
var choice=[];
for(var i=0;i<result.links.length;i++){
choice.push(result.links[i]);
cards.remove(result.links[i]);
}
for(var i=0;i<cards.length;i++){
ui.cardPile.appendChild(cards[i]);
}
while(choice.length){
ui.cardPile.insertBefore(choice.pop(),ui.cardPile.firstChild);
}
}
*/
},
},
lzxingzhao1:{
trigger:{global:'roundStart'},
audio:'xinfu_xingzhao2',
forced:true,
skillAnimation:true,
animationColor:'water',
filter:function (event,player){
var lznum=0;
var sgnum=0;
var num=player.storage.deaddamage;
for(var i=0;i<game.players.length;i++){
if(((get.mode()=='identity'&&get.attitude(player,game.players[i])>0)||(get.mode()!='identity'&&game.players[i].isFriendOf(player)))){
game.players[i].getAllHistory('sourceDamage',function(evt){
num+=evt.num;
});
}
};
lznum+=game.filterPlayer(function(current){
if(get.mode()=='identity') return get.attitude(player,current)>0;
return current.isFriendOf(player);
}).length;
sgnum+=game.dead.filter(function(target){
if(get.mode()=='identity') return get.attitude(player,target)>0;
return target.isFriendOf(player);
}).length;
return num>=(lznum+sgnum)*6;
},
content:function (){
player.storage.lzxingzhao4=true;
var bool=false;
if(player==game.me) bool=true;
else switch(get.mode()){
case 'identity':{
game.showIdentity();
var id1=player.identity;
var id2=game.me.identity;
if(['zhu','zhong','mingzhong'].contains(id1)){
if(['zhu','zhong','mingzhong'].contains(id2)) bool=true;
break;
}
else if(id1=='fan'){
if(id2=='fan') bool=true;
break;
}
break;
}
case 'guozhan':{
if(game.me.isFriendOf(player)) bool=true;
break;
}
case 'versus':{
if(player.side==game.me.side) bool=true;
break;
}
case 'boss':{
if(player.side==game.me.side) bool=true;
break;
}
default:{}
}
game.over(bool);
},
},
lzxingzhao2:{
audio:'xinfu_xingzhao2',
trigger:{global:'phaseDiscardBefore'},
forced:true,
filter:function (event,player){
var lznum=0;
var sgnum=0;
var num=player.storage.deaddamage;
for(var i=0;i<game.players.length;i++){
if(((get.mode()=='identity'&&get.attitude(player,game.players[i])>0)||(get.mode()!='identity'&&game.players[i].isFriendOf(player)))){
game.players[i].getAllHistory('sourceDamage',function(evt){
num+=evt.num;
});
}
};
lznum+=game.filterPlayer(function(current){
if(get.mode()=='identity') return get.attitude(player,current)>0;
return current.isFriendOf(player);
}).length;
sgnum+=game.dead.filter(function(target){
if(get.mode()=='identity') return get.attitude(player,target)>0;
return target.isFriendOf(player);
}).length;
return num>=(lznum+sgnum)*3&&get.attitude(player,event.player)>0;
},
logTarget:'player',
content:function (){
player.storage.lzxingzhao3=true,
trigger.cancel();
game.log(trigger.player,'跳过了弃牌阶段');
},
},
lzxingzhao3:{
trigger:{global:'dieAfter'},
charlotte:true,
forceDie:true,
firstDo:true,
direct:true,
unique:true,
filter:function (event,player){
if(get.mode=='identity') return get.attitude(player,event.player)>0;
return event.player.isFriendOf(player);
},
content:function(){
trigger.player.getAllHistory('sourceDamage',function(evt){
player.storage.deaddamage+=evt.num;
});
},
},
yin_zhenliang:{
audio:'nzry_zhenliang_1',
group:['yin_zhenliang_1','yin_zhenliang_2'],
subSkill:{
'1':{
prompt:'弃置一张与“任”颜色相同的牌，并对攻击范围内的一名角色造成1点伤害。',
audio:'nzry_zhenliang_1',
enable:'phaseUse',
usable:1,
filter:function(event,player){
var storage=player.getStorage('nzry_mingren');
if(!storage.length) return false;
var color=get.color(storage[0]);
if(player.countCards('he',function(card){
return get.color(card)==color;
})==0) return false;
return game.hasPlayer(function(current){
return player.inRange(current);
});
},
position:'he',
filterCard:function(card,player){
return get.color(card)==get.color(player.getStorage('nzry_mingren')[0]);
},
filterTarget:function(card,player,target){
return player.inRange(target);
},
check:function(card){
return 6.5-get.value(card);
},
content:function(){
target.damage('nocard');
},
ai:{
order:5,
result:{
player:function(player,target){
return get.damageEffect(target,player,player);
},
},
},
},
'2':{
audio:'nzry_zhenliang_1',
trigger:{player:['useCardAfter','respondAfter']},
filter:function(event,player){
if(_status.currentPhase==player) return false;
var card=player.getStorage('nzry_mingren')[0];
return card&&get.color(event.card)==get.color(card);
},
direct:true,
content:function(){
'step 0'
player.chooseTarget(get.prompt('yin_zhenliang'),'令一名角色摸一张牌').ai=function(target){
if(target.hasSkillTag('nogain')) return 0.1;
var att=get.attitude(player,target);
return att*(Math.max(5-target.countCards('h'),2)+3);
};
'step 1'
if(result.bool){
player.logSkill('yin_zhenliang',result.targets);
result.targets[0].draw();
}
},
},
},
ai:{combo:'nzry_mingren'},
},
yin_shenshi:{
audio:'nzry_shenshi_1',
group:['yin_shenshi_1','yin_shenshi_2'],
subSkill:{
'1':{
audio:'nzry_shenshi_1',
prompt:'出牌阶段限一次，你可以将一张牌交给一名手牌数最多的角色，然后对其造成一点伤害，若该角色因此死亡，则你可以令一名角色将手牌摸至四张',
enable:'phaseUse',
usable:1,
filter:function(event,player){
return player.countCards('he')>0;
},
discard:false,
line:true,
lose:false,
delay:false,
position:'he',
filterCard:true,
filterTarget:function(card,player,target){
return target!=player&&!game.hasPlayer(function(current){
return current!=player&&current.countCards('h')>target.countCards('h');
});
},
check:function(card){
return 5-get.value(card);
},
content:function(){
'step 0'
target.gain(cards,player,'giveAuto');
target.damage('nocard');
'step 1'
if(!target.isAlive()){
player.chooseTarget('请选择一名角色并令其将手牌摸至四张',function(card,player,target){
return target.countCards('h')<4;
}).ai=function(target){
return get.attitude(player,target)
};
}
else{
event.finish();
};
'step 2'
if(result.bool){
player.line(result.targets);
result.targets[0].draw(4-result.targets[0].countCards('h'))
};
},
ai:{
order:1,
result:{
target:function(player,target){
return -1;
},
},
},
},
'2':{
audio:'nzry_shenshi_1',
trigger:{player:'damageEnd'},
prompt:'其他角色对你造成伤害后，你可以观看该角色的手牌，然后交给其一张牌，当前角色回合结束时，若此牌仍在该角色的区域内，你将手牌摸至四张',
filter:function(event,player){
return player.countCards('he')>0&&event.source&&event.source!=player;
},
check:function(event,player){
return event.source&&event.source.countCards('h')<=2&&player.countCards('h')<4;
},
content:function(){
'step 0'
player.viewHandcards(trigger.source);
player.chooseCard('he',true).set('ai',function(card){
return 5-get.value(card);
});
'step 1'
if(result.bool){
trigger.source.gain(result.cards,player,'give').gaintag.add('yin_shenshi');
trigger.source.storage.yin_shenshi1=result.cards[0];
trigger.source.storage.yin_shenshi2=player;
trigger.source.addSkill('yin_shenshi_3');
};
},
},
'3':{
trigger:{global:'phaseJieshuBegin'},
forced:true,
popup:false,
filter:function(event,player){
return player.storage.yin_shenshi1!=undefined&&player.storage.yin_shenshi2!=undefined;
},
content:function(){
var pl=player.storage.yin_shenshi2;
var card=player.storage.yin_shenshi1;
if(player.getCards('he').contains(card)&&4-pl.countCards('h')>0){
pl.draw(4-pl.countCards('h'));
pl.logSkill('yin_shenshi');
};
player.removeSkill('yin_shenshi1');
delete player.storage.yin_shenshi1;
delete player.storage.yin_shenshi2;
},
},
},
},
yin_juzhan:{
audio:'nzry_juzhan_1',
mod:{
targetEnabled:function(card,player,target){
if(player.storage.yin_juzhan==true) return false;
},
},
group:['yin_juzhan_1','yin_juzhan_2'],
subSkill:{
'1':{
audio:'nzry_juzhan_1',
trigger:{target:'useCardToTargeted'},
prompt2:'当你成为其他角色【杀】的目标后，你可以与其各摸一张牌，然后其本回合内不能再对你使用牌。',
filter:function(event,player){
return event.card.name=='sha';
},
logTarget:'player',
content:function(){
game.asyncDraw([player,trigger.player]);
trigger.player.addTempSkill('yin_juzhan_y');
player.addTempSkill('yin_juzhan_x');
},
},
'2':{
audio:'nzry_juzhan_1',
trigger:{player:'useCardToPlayered'},
prompt2:'当你使用【杀】指定一名角色为目标后，你可以获得其一张牌，然后你本回合内不能再对其使用牌',
filter:function(event,player){
return event.card.name=='sha'&&event.player.countGainableCards(player,'he')>0;
},
check:function(event,player){
return event.player.countCards('he')>0&&event.targets&&event.targets.length==1;
},
logTarget:'target',
content:function(){
player.gainPlayerCard(trigger.targets[0],'he',true);
trigger.target.addTempSkill('yin_juzhan_x');
player.addTempSkill('yin_juzhan_y');
},
},
x:{
mod:{
targetEnabled:function(card,player,target){
if(player.hasSkill('yin_juzhan_y')) return false;
},
},
},
y:{},
},
},
bilibili_tannang:{
locked:true,
mod:{
globalFrom:function(from,to,distance){
return distance-(from.getDamagedHp());
}
}
},
bilibili_yishi:{inherit:'zhiman'},
bilibili_zhengjun:{
audio:'yizhong',
trigger:{player:'damageBegin3'},
filter:function(event,player){
return player.countCards('he',{type:'equip'})>0;
},
direct:true,
content:function(){
'step 0'
player.storage.bilibili_zhengjun=false;
if(player.countCards('e')==0){
result.bool=true;
player.storage.bilibili_zhengjun=true;
}
else{
player.chooseBool(get.prompt2('bilibili_zhengjun')).set('ai',function(){
var player=_status.event.player;
if(player.hp<=2||_status.event.getTrigger().num>1) return 1;
return 0;
});
}
'step 1'
if(result.bool){
if(player.storage.bilibili_zhengjun==false){
player.storage.bilibili_zhengjun=true;
player.logSkill('bilibili_zhengjun');
player.gain(player.getCards('e'),'gain2');
}
else player.storage.bilibili_zhengjun=false;
var next=player.chooseCard('he','整军：你可以打出一张装备牌，然后防止此伤害',function(card,player){
return get.type(card)=='equip';
});
next.set('ai',function(card){
var player=_status.event.player;
if(player.hp==1||_status.event.getTrigger().num>1){
return 9-get.value(card);
}
if(player.hp==2){
return 8-get.value(card);
}
return 7-get.value(card);
});
}
else event.finish();
'step 2'
if(result.bool){
if(player.storage.bilibili_zhengjun==false) player.respond(result.cards,'highlight','bilibili_zhengjun','noOrdering');
else player.respond(result.cards,'highlight','noOrdering');
trigger.cancel();
}
else event.finish();
}
},
bilibili_shenxing:{
mod:{
globalFrom:function(player,target,distance){
if(player.getEquip(3)||player.getEquip(4)||player.getEquip(6)) return;
return distance-1;
},
maxHandcard:function(player,num){
if(player.getEquip(3)||player.getEquip(4)||player.getEquip(6)) return;
return num+1;
},
},
},
bilibili_daoji:{
audio:'daoji',
enable:'phaseUse',
usable:1,
filter:function(event,player){
return player.countCards('he',function(card){
return get.type(card)!='basic';
})&&game.hasPlayer(function(target){
return player.inRange(target)&&target!=player&&target.countCards('he')>0;
});
},
filterCard:function(card){
return get.type(card)!='basic';
},
position:'he',
filterTarget:function(card,player,target){
return player.inRange(target)&&target!=player&&target.countCards('he')>0;
},
check:function(card){
var player=_status.event.player;
if(game.hasPlayer(function(current){
return player.inRange(current)&&current!=player&&get.attitude(player,current)<0&&get.damageEffect(current,player,player)>0&&current.countCards('e')>0;
})) return 8-get.value(card);
return 5-get.value(card)
},
content:function(){
'step 0'
player.gainPlayerCard(target,'he',true).set('ai',function(button){
var card=button.link;
var player=_status.event.player;
if(get.type(card)=='equip'&&get.damageEffect(_status.event.target,player,player)>0) return 6+get.value(card);
return get.value(card);
});
'step 1'
if(!result||!result.bool||!result.cards||!result.cards.length){
event.finish();
return;
}
var card=result.cards[0];
event.card=card;
if(player.getCards('h').contains(card)&&get.type(card)=='basic'){
player.draw();
}
else if(player.getCards('h').contains(card)&&get.type(card)=='equip'){
player.chooseUseTarget(card,true).nopopup=true;
target.damage();
}
else event.finish();
},
ai:{
order:6,
result:{
target:function(player,current){
if(player.inRange(current)&&get.damageEffect(current,player,player)>0&&current.countCards('e')>0) return -1.5;
return -1;
},
},
},
},
bilibili_mouzhu:{
audio:'mouzhu',
enable:'phaseUse',
usable:1,
filterTarget:lib.filter.notMe,
content:function(){
'step 0'
if(game.players.length==2||player.isMinHp(true)){
player.loseHp();
event.finish();
}
player.storage.bilibili_mouzhu=[];
player.storage.bilibili_mouzhu_gain=[];
player.storage.bilibili_mouzhu_target=target;
var targets=game.filterPlayer(function(current){
return current!=player&&current!=target&&current.hp<=player.hp;
});
targets.sort(lib.sort.seat);
event.targets=targets;
player.storage.bilibili_mouzhu=targets;
'step 1'
event.num=0;
player.line(targets);
'step 2'
var next=game.createEvent('mouzhu_gain',false);
next.player=player;
next.target=event.targets[num];
next.setContent(lib.skill.bilibili_mouzhu.contentx);
if(event.num+1<event.targets.length){
event.num++;
event.redo();
}
},
contentAfter:function(){
'step 0'
if(player.storage.bilibili_mouzhu_gain.length==0){
for(var i=0;i<game.players.length;i++){
if(game.players[i]==player||player.storage.bilibili_mouzhu_nogain.contains(game.players[i])){
game.players[i].loseHp();
}
}
event.finish();
}
'step 1'
var target=player.storage.bilibili_mouzhu_target;
player.line(target);
var next=game.createEvent('mouzhu_fight',false);
next.player=player;
next.target=target;
next.setContent(lib.skill.bilibili_mouzhu.contenty);
},
contentx:function(){
'step 0'
target.chooseCard('he','是否交给'+get.translation(player)+'一张牌？').set('ai',function(card){
if(_status.event.goon) return 20-get.value(card);
return 0;
}).set('goon',get.attitude(target,player)>0);
'step 1'
if(result.bool){
if(player.storage.bilibili_mouzhu_gain.length<4) player.storage.bilibili_mouzhu_gain.push(target);
player.gain(result.cards,target,'giveAuto');
}
else{
target.chat('拒绝');
target.addExpose(0.2);
}
game.delay();
},
contenty:function(){
'step 0'
var str=get.cnNumber(player.storage.bilibili_mouzhu_gain.length);
if(player.storage.bilibili_mouzhu_gain.length==2) str='二';
var list=[];
if(player.canUse('sha',target,false)) list.push('sha');
if(player.canUse('juedou',target,false)) list.push('juedou');
if(!list.length) event.finish();
else if(list.length==1) event._result={control:list[0]};
else player.chooseControl(list).set('prompt','谋诛：视为对'+get.translation(target)+'使用一张伤害基数为'+str+'的【杀】或【决斗】').ai=function(){
return get.effect(target,{name:'sha'},player,player)>=get.effect(target,{name:'juedou'},player,player)?'sha':'juedou';
};
'step 1'
player.useCard({name:result.control,isCard:true},target,'noai').card.bilibili_mouzhu=true;
},
group:['bilibili_mouzhu_less','bilibili_mouzhu_damage'],
subSkill:{
less:{
trigger:{player:'useCard1'},
forced:true,
firstDo:true,
direct:true,
filter:function(event,player){
return event.card&&event.card.name=='sha'&&event.card.bilibili_mouzhu;
},
content:function(){
trigger.addCount=false;
player.getStat().card.sha--;
}
},
damage:{
trigger:{source:'damageBegin1',player:'damageBegin1'},
forced:true,
silent:true,
filter:function(event,player){
return event.card&&event.card.bilibili_mouzhu;
},
content:function(){
trigger.num=player.storage.bilibili_mouzhu_gain.length;
}
},
},
ai:{
order:7,
result:{
player:1,
target:function(player,target){
if(game.players.length==2||player.isMinHp(true)) return 0;
var att=get.attitude(player,target);
return -att*target.hp;
}
},
},
},
bilibili_yanhuo:{
audio:'yanhuo',
trigger:{player:'die'},
filter:function(event,player){
return player.countCards('he')>0;
},
skillAnimation:true,
animationColor:'thunder',
forceDie:true,
direct:true,
content:function(){
'step 0'
player.chooseTarget([1,player.countCards('he')],get.prompt2('bilibili_yanhuo')).set('forceDie',true).ai=function(target){
return -get.attitude(_status.event.player,target)*target.countCards('he');
};
'step 1'
if(result.bool){
result.targets.sortBySeat();
player.logSkill('bilibili_yanhuo',result.targets);
if(result.targets.length>1||player.countCards('he')<=1){
for(var i of result.targets) i.chooseToDiscard('he',true);
event.finish();
}
else{
event.target=result.targets[0];
player.chooseControl().set('choiceList',['令'+get.translation(event.target)+'弃置'+get.cnNumber(player.countCards('he'))+'张牌（这还需要选吗？）','令'+get.translation(event.target)+'弃置一张牌（不会吧不会吧，不会真有人选这一项吧！）']).set('ai',function(){return 0});
}
}
else event.finish();
'step 2'
target.chooseToDiscard('he',result.index=='0'?Math.min(player.countCards('he'),target.countCards('he')):1,true);
},
},
cike_chooseskill:{
trigger:{global:'gameStart',player:'enterGame'},
direct:true,
firstDo:true,
filter:function (event,player){
if(event.name=='showCharacter') return event.toShow&&(event.toShow.contains('cike_wuliuqi')||event.toShow.contains('cike_meihuashisan'));
return true;
},
content:function(){
'step 0'
if(player.name=='cike_wuliuqi'||player.name1=='cike_wuliuqi'||player.name2=='cike_wuliuqi'){
if(lib.config.extension_活动武将_cike_chaoshikong) player.removeSkill('cike_shenghu');
var next=game.createEvent('cike_chooseskill',false);
next.player=player;
next.setContent(lib.skill.cike_chooseskill.content_wuliuqi);
}
'step 1'
if(player.name=='cike_meihuashisan'||player.name1=='cike_meihuashisan'||player.name2=='cike_meihuashisan'){
if(lib.config.extension_活动武将_cike_chaoshikong) player.removeSkill('cike_lingshou');
var next=game.createEvent('cike_chooseskill',false);
next.player=player;
next.setContent(lib.skill.cike_chooseskill.content_meihuashisan);
}
},
content_wuliuqi:function(){
'step 0'
var list=['cike_yirong','cike_qingsuo','cike_xuefa'];
player.chooseControl(list).set('prompt','选择保留一个技能').set('forceDie',true).set('ai',function(){
if(game.players.length<=2){
var list2=['cike_qingsuo','cike_xuefa'];
return list2.randomGet();
}
return list.randomGet();
});
'step 1'
var skills=['cike_yirong','cike_qingsuo','cike_xuefa']
skills.remove(result.control);
player.removeSkill(skills);
player.popup(result.control);
game.log(player,'保留了技能','#g【'+get.translation(result.control)+'】');
},
content_meihuashisan:function(){
'step 0'
var list=['cike_biandao','cike_yingyue','cike_huti'];
player.chooseControl(list).set('prompt','选择保留一个技能').set('forceDie',true).set('ai',function(){
if(game.players.length<=2){
var list2=['cike_biandao','cike_huti'];
return list2.randomGet();
}
return list.randomGet();
});
'step 1'
var skills=['cike_biandao','cike_yingyue','cike_huti']
skills.remove(result.control);
player.removeSkill(skills);
player.popup(result.control);
game.log(player,'保留了技能','#g【'+get.translation(result.control)+'】');
},
},
cike_shenghu:{
group:'cike_chooseskill',
derivation:'cike_chooseskill',
unique:true,
forced:true,
trigger:{global:'damageBegin4'},
filter:function(event,player){
return event.player!=player&&((get.mode()=='identity'&&get.attitude(player,event.player)>0)||(get.mode()!='identity'&&event.player.isFriendOf(player)));
},
logTarget:'player',
content:function(){
trigger.num--;
player.loseHp();
game.asyncDraw([player,trigger.player]);
},
},
cike_feijian:{
audio:'ext:活动武将:true',
init:function(player){
player.storage.cike_feijian_source=[];
},
group:['cike_feijian_source','cike_feijian_clear'],
trigger:{player:'phaseUseEnd'},
forced:true,
filter:function(event,player){
return player.getEquip(1)&&player.storage.cike_feijian_source.length>0;
},
logTarget:function(event,player){
return game.filterPlayer(function(current){
return player.storage.cike_feijian_source.contains(current);
});
},
content:function(){
'step 0'
var card=player.getEquip(1);
if(card) player.discard(card);
event.list=game.filterPlayer(function(current){
return player.storage.cike_feijian_source.contains(current);
});
event.list.sort(lib.sort.seat);
'step 1'
var target=event.list.shift();
target.damage([2,3,4].randomGet());
if(event.list.length) event.redo();
},
subSkill:{
source:{
charlotte:true,
direct:true,
firstDo:true,
trigger:{source:'damageSource'},
filter:function(event,player){
return event.player!=player&&!player.storage.cike_feijian_source.contains(event.player);
},
content:function(){
player.storage.cike_feijian_source.push(trigger.player);
player.storage.cike_feijian_source.sortBySeat();
},
},
clear:{
charlotte:true,
direct:true,
firstDo:true,
trigger:{player:'phaseBefore'},
content:function(){
player.storage.cike_feijian_source=[];
},
},
},
},
cike_yirong:{
audio:'ext:活动武将:true',
usable:1,
forced:true,
trigger:{source:'damageBefore'},
filter:function(event,player){
return game.players.length>2;
},
content:function(){
var list=game.filterPlayer();
list.remove(player);
list.remove(trigger.player);
var target=list.randomGet();
player.logSkill('cike_yirong',target);
trigger.source=target;
},
},
cike_qingsuo:{
audio:'ext:活动武将:true',
forced:true,
trigger:{player:'damageEnd'},
filter:function(event,player){
return event.source!=player;
},
logTarget:'source',
content:function(){
player.turnOver();
trigger.source.turnOver();
},
},
cike_xuefa:{
audio:'ext:活动武将:true',
trigger:{source:'damageSource'},
forced:true,
filter:function(event,player){
return event.player!=player&&event.player.countCards('he')>0;
},
content:function(){
trigger.player.discard(trigger.player.getCards('he',function(card){
return lib.filter.cardDiscardable(card,player,'cike_xuefa');
}).randomGets([1,2,3].randomGet()));
},
},
cike_lingshou:{
group:'cike_chooseskill',
derivation:'cike_chooseskill',
unique:true,
forced:true,
trigger:{global:'damageBegin4'},
filter:function(event,player){
return event.source&&event.player!=player&&((get.mode()=='identity'&&get.attitude(player,event.player)>0)||(get.mode()!='identity'&&event.player.isFriendOf(player)));
},
logTarget:'player',
content:function(){
trigger.num--;
player.loseHp();
trigger.source.chooseToDiscard('he',2,true);
},
},
cike_meibiao:{
audio:'ext:活动武将:true',
trigger:{player:'useCard'},
forced:true,
filter:function(event,player){
return get.suit(event.card)=='club';
},
content:function(){
trigger.directHit.addArray(game.filterPlayer(function(current){
return current!=player;
}));
if(get.tag(trigger.card,'damage')) trigger.baseDamage+=2;
},
},
cike_biandao:{
audio:'ext:活动武将:true',
trigger:{player:'phaseUseEnd'},
forced:true,
filter:function(event,player){
return player.getHistory('sourceDamage').length==0;
},
logTarget:function(event,player){
return game.filterPlayer(function(current){
if(get.mode()=='guozhan') return current.isEnemyOf(player);
return get.attitude(player,current)<0;
});
},
content:function(){
'step 0'
event.list=game.filterPlayer(function(current){
return get.attitude(player,current)<0;
});
event.list.sort(lib.sort.seat);
'step 1'
var target=event.list.shift();
target.damage([1,2].randomGet());
if(event.list.length) event.redo();
},
},
cike_yingyue:{
audio:'ext:活动武将:true',
trigger:{player:['useCard2','useCardToPlayer']},
direct:true,
filter:function(event,player){
if(player.hasSkill('cike_yingyue_silent')||player!=_status.currentPhase||!event.targets||event.targets.length!=1) return false;
return (event.card.name=='sha'||get.type(event.card)=='trick')&&game.hasPlayer(function(current){
return current!=player&&!event.targets.contains(current);
});
},
content:function(){
'step 0'
player.addTempSkill('cike_yingyue_silent','phaseUseEnd');
player.chooseTarget(get.prompt('cike_yingyue'),'为'+get.translation(trigger.card)+'增加一个目标',function(card,player,target){
var evt=_status.event.getTrigger();
return !evt.targets.contains(target)&&lib.filter.filterTarget(evt.card,player,target);
}).set('ai',function(target){
var evt=_status.event.getTrigger(),eff=get.effect(target,evt.card,evt.player,evt.player);
return eff;
});
'step 1'
if(result.bool){
if(player!=game.me&&!player.isOnline()) game.delayx();
event.target=result.targets[0];
}
else event.finish();
'step 2'
player.logSkill('cike_yingyue',target);
trigger.targets.push(target);
game.log(target,'成为了',trigger.card,'的额外目标');
},
subSkill:{
silent:{},
},
},
cike_huti:{
group:'cike_huti_silent',
audio:'ext:活动武将:true',
trigger:{player:'damageBegin4'},
usable:1,
forced:true,
filter:function(event,player){
return event.source&&event.source!=player&&!player.hasSkill('cike_huti_disable');
},
content:function(){
trigger.cancel();
player.discard(player.getCards('he',function(card){
return lib.filter.cardDiscardable(card,player,'cike_huti');
}).randomGet());
},
subSkill:{
silent:{
charlotte:true,
trigger:{global:'damageAfter'},
filter:function(event,player){
return event.source&&event.source!=player;
},
firstDo:true,
direct:true,
content:function(){
player.addTempSkill('cike_huti_disable');
},
},
disable:{charlotte:true},
},
},
cike_wenhui:{
mod:{
cardUsable:function(card,player,target){
if(!card.cards||!(game.online?player==_status.currentPhase:player.isPhaseUsing())) return;
for(var i of card.cards){
if(i.hasGaintag('cike_wenhui')) return Infinity;
}
},
},
trigger:{global:'loseAfter'},
forced:true,
locked:false,
filter:function(event,player){
//var evt=event.getParent();
//if(player!=_status.currentPhase||evt.player!=player||event.type!='discard'||player==event.player) return false;
if(player!=_status.currentPhase||event.type!='discard'||player==event.player) return false;
return event.cards2&&event.cards2.filterInD('d').length>0;
},
content:function(){
player.addTempSkill('cike_wenhui_keep');
var cards=[];
for(var i=0;i<trigger.cards2.filterInD('d').length;i++){
var card=get.cardPile2(function(card){
return !cards.contains(card)&&get.type2(card,false)==get.type2(trigger.cards2[i],false);
});
if(card) cards.push(card);
}
player.gain(cards,'gain2').gaintag.add('cike_wenhui');
player.draw(trigger.cards2.filterInD('d').length-cards.length).gaintag=['cike_wenhui'];
},
subSkill:{
keep:{
charlotte:true,
onremove:function(player){
player.removeGaintag('cike_wenhui');
},
mod:{
ignoredHandcard:function(card,player){
if(card.hasGaintag('cike_wenhui')){
return true;
}
},
cardDiscardable:function(card,player,name){
if(name=='phaseDiscard'&&card.hasGaintag('cike_wenhui')){
return false;
}
},
},
},
},
},
cike_qintao:{
shaRelated:true,
trigger:{player:'useCardAfter'},
filter:function(event,player){
return event.card.name=='sha'&&!player.getHistory('sourceDamage',function(evt){
return evt.card==event.card;
}).length&&event.targets.length==1;
},
check:function(event,player){
return player.hp>=2;
},
logTarget:'targets',
content:function(){
'step 0'
player.loseHp();
if(!trigger.targets[0].countCards('he')) result.index=0;
else trigger.targets[0].chooseControl().set('choiceList',['失去一点体力','令'+get.translation(player)+'弃置你两张牌']).set('ai',function(){
if(trigger.targets[0].hp>2&&trigger.targets[0].countCards('he')<2) return 0;
return 1;
});
'step 1'
if(result.index==0) trigger.targets[0].loseHp();
else player.discardPlayerCard(trigger.targets[0],'he',2,true);
},
},
cike_xianggong:{
audio:2,
trigger:{player:'damageEnd'},
filter:function(event,player){
return event.source!=undefined;
},
forced:true,
logTarget:'source',
content:function(){
'step 0'
var num=player.getDamagedHp();
trigger.source.chooseToDiscard(num,'he',true);
'step 1'
trigger.source.draw();
},
},
twgongsun:{
audio:'gongsun',
trigger:{player:'phaseUseBegin'},
forced:true,
filter:function(event,player){
return game.hasPlayer(function(current){
return player.inRange(current);
});
},
check:function(event,player){
return game.hasPlayer(function(target){
return player.inRange(target)&&get.attitude(player,target)<0;
});
},
content:function(){
'step 0'
player.chooseTarget('请选择【共损】的目标',lib.translate.twgongsun_info,true,function(card,player,target){
return target!=player&&player.inRange(target);
}).set('ai',function(target){
return -get.attitude(_status.event.player,target);
});
'step 1'
if(result.bool){
var target=result.targets[0];
event.target=target;
player.line(target);
game.log(player,'选择了',target);
player.addTempSkill('twgongsun_shadow',{player:['phaseBegin','die']});
player.chooseControl(lib.suit).set('prompt','请选择一个花色').ai=function(){return lib.suit.randomGet()};
}
else event.finish();
'step 2'
if(result.control){
player.storage.twgongsun_shadow.push([target,result.control]);
player.popup(result.control,'soil');
game.log(player,'选择了','#y'+get.translation(result.control),'花色');
player.markSkill('twgongsun_shadow');
}
else event.finish();
},
},
twgongsun_shadow:{
global:'twgongsun_shadow2',
init:function(player,skill){
if(!player.storage[skill]) player.storage[skill]=[];
},
marktext:'损',
onremove:true,
intro:{
content:function(shadow){
var str='你和';
for(var i=0;i<shadow.length;i++){
if(i>0) str+='<br>'
str+=get.translation(shadow[i][0]);
str+='不能使用、打出或弃置';
str+=get.translation(shadow[i][1]);
str+='花色的牌直到你的下一个回合开始或你死亡';
}
return str;
},
},
mod:{
cardEnabled:function(card,player){
var list=player.storage.twgongsun_shadow;
for(var i=0;i<list.length;i++){
if(list[i][1]==get.suit(card)) return false;
}
},
cardRespondable:function(card,player){
var list=player.storage.twgongsun_shadow;
for(var i=0;i<list.length;i++){
if(list[i][1]==get.suit(card)) return false;
}
},
cardSavable:function(card,player){
var list=player.storage.twgongsun_shadow;
for(var i=0;i<list.length;i++){
if(list[i][1]==get.suit(card)) return false;
}
},
cardDiscardable:function(card,player){
var list=player.storage.twgongsun_shadow;
for(var i=0;i<list.length;i++){
if(list[i][1]==get.suit(card)) return false;
}
},
},
},
twgongsun_shadow2:{
mod:{
cardEnabled:function(card,player){
if(game.hasPlayer(function(current){
var list=current.storage.twgongsun_shadow;
if(!list) return false;
for(var i=0;i<list.length;i++){
if(list[i][0]==player&&list[i][1]==get.suit(card)) return true;
}
return false;
})) return false;
},
cardSavable:function(card,player){
if(game.hasPlayer(function(current){
var list=current.storage.twgongsun_shadow;
if(!list) return false;
for(var i=0;i<list.length;i++){
if(list[i][0]==player&&list[i][1]==get.suit(card)) return true;
}
return false;
})) return false;
},
cardRespondable:function(card,player){
if(game.hasPlayer(function(current){
var list=current.storage.twgongsun_shadow;
if(!list) return false;
for(var i=0;i<list.length;i++){
if(list[i][0]==player&&list[i][1]==get.suit(card)) return true;
}
return false;
})) return false;
},
cardDiscardable:function(card,player){
if(game.hasPlayer(function(current){
var list=current.storage.twgongsun_shadow;
if(!list) return false;
for(var i=0;i<list.length;i++){
if(list[i][0]==player&&list[i][1]==get.suit(card)) return true;
}
return false;
})) return false;
},
},
},
twjimeng:{
audio:'jimeng',
enable:'phaseUse',
usable:1,
filter:function(event,player){
return game.hasPlayer(function(current){
return current!=player&&current.countGainableCards(player,'hej')>0;
});
},
filterTarget:function(card,player,target){
return target!=player&&target.countGainableCards(player,'hej')>0;
},
content:function(){
'step 0'
player.gainPlayerCard(target,'hej',true);
'step 1'
if(result.bool&&target.isIn()){
var hs=player.getCards('he');
if(!hs.length) event.finish();
else if(hs.length<=1) event._result={bool:true,cards:hs};
else player.chooseCard('he',true,'选择交给'+get.translation(target)+'一张牌').set('ai',function(card){
return 5-get.value(card);
});
}
else event.finish();
'step 2'
target.gain(result.cards,player,'giveAuto');
},
ai:{
order:7.5,
tag:{
lose:1,
loseCard:1,
gain:1,
},
result:{
target:function(player,target){
if(get.attitude(player,target)<=0) return (target.countCards('he',function(card){
return get.value(card,target)>0&&card!=target.getEquip('jinhe');
})>0)?-1.5:1.5;
return (target.countCards('ej',function(card){
if(get.position(card)=='e') return get.value(card,target)<=0;
var cardj=card.viewAs?{name:card.viewAs}:card;
return get.effect(target,cardj,target,player)<0;
})>0)?1.5:-1.5;
},
player:function(player,target){
if(get.attitude(player,target)<0&&!target.countCards('he',function(card){
return get.value(card,target)>0&&card!=target.getEquip('jinhe');
})){
return 0;
}
if(get.attitude(player,target)>1){
return (target.countCards('ej',function(card){
if(get.position(card)=='e') return get.value(card,target)<=0;
var cardj=card.viewAs?{name:card.viewAs}:card;
return get.effect(target,cardj,target,player)<0;
})>0)?1.5:-1.5;
}
return 1;
}
},
},
},
xinzaiqi:{
count:function(){
var num=0;
game.countPlayer2(function(current){
current.getHistory('lose',function(evt){
if(evt.position==ui.discardPile){
for(var i=0;i<evt.cards.length;i++){
if(get.color(evt.cards[i])=='red') num++;
}
}
})
});
game.getGlobalHistory('cardMove',function(evt){
if(evt.name=='cardsDiscard'){
for(var i=0;i<evt.cards.length;i++){
if(get.color(evt.cards[i])=='red') num++;
}
}
})
return num;
},
audio:'rezaiqi',
direct:true,
filter:function(event,player){
return lib.skill.xinzaiqi.count()>0;
},
trigger:{player:'phaseDiscardBegin'},
content:function(){
'step 0'
player.chooseTarget([1,lib.skill.xinzaiqi.count()],get.prompt2('xinzaiqi')).ai=function(target){
return get.attitude(_status.event.player,target);
};
'step 1'
if(result.bool){
var targets=result.targets;
targets.sortBySeat();
player.line(targets,'fire');
player.logSkill('xinzaiqi',targets);
event.targets=targets;
}
else event.finish();
'step 2'
event.current=targets.shift();
if(player.isHealthy()) event._result={index:0};
else event.current.chooseControl().set('choiceList',[
'摸一张牌',
'令'+get.translation(player)+'回复一点体力',
]).set('ai',function(){
if(get.attitude(event.current,player)>0) return 1;
return 0;
});
'step 3'
if(result.index==1){
event.current.line(player);
player.recover();
}
else event.current.draw();
game.delay();
if(targets.length) event.goto(2);
},
},
diy_yujue:{
audio:'yujue',
unique:true,
global:'diy_yujue2',
},
diy_yujue2:{
audio:'yujue',
forceaudio:true,
enable:'phaseUse',
usable:1,
filter:function (event,player){
if(player.hasSkill('diy_yujue')) return false;
return game.hasPlayer(function(current){
return current.hasSkill('diy_yujue');
});
},
filterCard:function (card){
var num=0;
for(var i=0;i<ui.selected.cards.length;i++){
num+=get.number(ui.selected.cards[i]);
}
return get.number(card)+num<=13;
},
complexCard:true,
selectCard:function (){
var num=0;
for(var i=0;i<ui.selected.cards.length;i++){
num+=get.number(ui.selected.cards[i]);
}
if(num==13) return ui.selected.cards.length;
return ui.selected.cards.length+2;
},
discard:false,
prepare:'give',
filterTarget:function (card,player,target){
return player!=target&&target.hasSkill('diy_yujue');
},
check:function (card){
var num=0;
for(var i=0;i<ui.selected.cards.length;i++){
num+=get.number(ui.selected.cards[i]);
}
if(num+get.number(card)==13) return 8-ai.get.value(card);
if(ui.selected.cards.length==0){
var cards=_status.event.player.get('h');
for(var i=0;i<cards.length;i++){
for(var j=i+1;j<cards.length;j++){
if(cards[i].number+cards[j].number==13){
if(cards[i]==card||cards[j]==card) return 6-ai.get.value(card);
}
}
}
}
return 0;
},
logTarget:'player',
content:function (){
'step 0'
target.gain(cards,player);
'step 1'
event.cards=get.cards(4);
event.videoId=lib.status.videoId++;
game.broadcastAll(function(player,id,cards){
var str;
if(player==game.me&&!_status.auto){
str='鬻爵：选择任意张点数之和不大于13的牌';
}
else{
str='鬻爵';
}
var dialog=ui.create.dialog(str,cards);
dialog.videoId=id;
},player,event.videoId,event.cards);
event.time=get.utc();
game.addVideo('showCards',player,['鬻爵',get.cardsInfo(event.cards)]);
game.addVideo('delay',null,2);
'step 2'
var next=player.chooseButton([0,4]);
next.set('dialog',event.videoId);
next.set('filterButton',function(button){
var num=0
for(var i=0;i<ui.selected.buttons.length;i++){
num+=get.number(ui.selected.buttons[i].link);
}
return (num+get.number(button.link)<=13);
});
next.set('ai',function(button){
return ai.get.value(button.link,_status.event.player);
});
'step 3'
if(result.bool&&result.links){
var cards2=[];
for(var i=0;i<result.links.length;i++){
cards2.push(result.links[i]);
cards.remove(result.links[i]);
}
for(var i=0;i<cards.length;i++){
ui.discardPile.appendChild(cards[i]);
}
event.cards2=cards2;
}
else{
event.finish();
}
var time=1000-(get.utc()-event.time);
if(time>0){
game.delay(0,time);
}
'step 4'
game.broadcastAll('closeDialog',event.videoId);
var cards2=event.cards2;
player.gain(cards2,'gain2');
},
ai:{
order:9,
result:{
player:1.5,
},
},
},
diy_hunkui:{
trigger:{player:'useCard'},
firstDo:true,
forced:true,
popup:false,
silent:true,
filter:function (event,player){
return player.isPhaseUsing();
},
content:function (){
player.addTempSkill('diy_hunkui2','phaseUseEnd');
player.storage.diy_hunkui2.add(get.type2(trigger.card));
},
},
diy_hunkui2:{
init:function(player,skill){
if(!player.storage.diy_hunkui2) player.storage.diy_hunkui2=[];
},
unique:true,
charlotte:true,
onremove:true,
mod:{
cardEnabled:function (card,player){
if(player.storage.diy_hunkui2&&player.storage.diy_hunkui2.contains(get.type2(card))) return false;
},
cardUsable:function (card,player){
if(player.storage.diy_hunkui2&&player.storage.diy_hunkui2.contains(get.type2(card))) return false;
},
},
},
smyguicai:{
audio:'jilue_guicai',
trigger:{global:'judge'},
direct:true,
filter:function(event,player){
return player.countCards('he')>0;
},
content:function(){
'step 0'
player.chooseCard('是否发动〖鬼才〗？','he',function(card){
var player=_status.event.player;
var mod2=game.checkMod(card,player,'unchanged','cardEnabled2',player);
if(mod2!='unchanged') return mod2;
var mod=game.checkMod(card,player,'unchanged','cardRespondable',player);
if(mod!='unchanged') return mod;
return true;
}).ai=function(card){
var trigger=_status.event.parent._trigger;
var player=_status.event.player;
var result=trigger.judge(card)-trigger.judge(trigger.player.judging[0]);
var attitude=get.attitude(player,trigger.player);
if(attitude==0||result==0) return 0;
if(attitude>0){
return result-get.value(card)/2;
}
else{
return -result-get.value(card)/2;
}
};
'step 1'
if(result.bool){
player.respond(result.cards,'highlight','smyguicai','noOrdering');
}
else{
event.finish();
}
'step 2'
if(result.bool){
if(trigger.player.judging[0].clone){
trigger.player.judging[0].clone.delete();
game.addVideo('deletenode',player,get.cardsInfo([trigger.player.judging[0].clone]));
}
game.cardsDiscard(trigger.player.judging[0]);
trigger.player.judging[0]=result.cards[0];
trigger.orderingCards.addArray(result.cards);
game.log(trigger.player,'的判定牌改为',result.cards[0]);
game.delay(2);
}
},
ai:{
rejudge:true,
tag:{
rejudge:1,
}
}
},
smyfangzhu:{
audio:'jilue_fangzhu',
trigger:{player:'damageEnd'},
direct:true,
content:function(){
'step 0'
player.chooseTarget('是否发动【放逐】？',function(card,player,target){
return player!=target
}).ai=function(target){
if(target.hasSkillTag('noturn')) return 0;
if(target.isTurnedOver()){
return get.attitude(player,target)-1;
}
else{
if(player.maxHp-player.hp==1){
return -get.attitude(player,target)-1;
}
}
return 0;
}
'step 1'
if(result.bool){
player.logSkill('smyfangzhu',result.targets[0]);
result.targets[0].draw(player.getDamagedHp());
result.targets[0].turnOver();
}
},
ai:{
maixie:true,
maixie_hp:true,
effect:{
target:function(card,player,target){
if(get.tag(card,'damage')){
if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
if(target.hp<=1) return;
if(!target.hasFriend()) return;
var hastarget=false;
var turnfriend=false;
var players=game.filterPlayer();
for(var i=0;i<players.length;i++){
if(get.attitude(target,players[i])<0&&!players[i].isTurnedOver()){
hastarget=true;
}
if(get.attitude(target,players[i])>0&&players[i].isTurnedOver()){
hastarget=true;
turnfriend=true;
}
}
if(get.attitude(player,target)>0&&!hastarget) return;
if(turnfriend||target.hp==target.maxHp) return [0.5,1];
if(target.hp>1) return [1,0.5];
}
}
}
}
},
smywansha:{
audio:'wansha_shen_simayi',
global:'smywansha_global',
trigger:{global:'dyingBegin'},
forced:true,
logTarget:'player',
filter:function(event,player){
return player==_status.currentPhase;
},
content:function(){
game.countPlayer(function(current){
if(current!=player&&current!=trigger.player) current.addSkillBlocker('smywansha_fengyin');
});
player.addTempSkill('smywansha_clear');
},
subSkill:{
global:{
mod:{
cardEnabled:function(card,player){
var source=_status.currentPhase;
if(card.name=='tao'&&source&&source!=player&&source.hasSkill('smywansha')&&!player.isDying()) return false;
},
cardSavable:function(card,player){
var source=_status.currentPhase;
if(card.name=='tao'&&source&&source!=player&&source.hasSkill('smywansha')&&!player.isDying()) return false;
},
},
},
fengyin:{
inherit:'fengyin',
},
clear:{
trigger:{global:'dyingAfter'},
forced:true,
charlotte:true,
popup:false,
filter:function(event,player){
return !_status.dying.length;
},
content:function(){
player.removeSkill('smywansha_clear');
},
onremove:function(){
game.countPlayer2(function(current){
current.removeSkillBlocker('smywansha_fengyin');
});
},
},
},
},
wansha_shen_simayi:{audio:2},
smyzhiheng:{
audio:'jilue_zhiheng',
enable:'phaseUse',
usable:1,
position:'he',
filterCard:lib.filter.cardDiscardable,
discard:false,
lose:false,
delay:false,
selectCard:[1,Infinity],
prompt:'弃置任意张牌并摸等量的牌。若弃置了所有的手牌，则可以多摸一张牌。',
check:function(card){
var player=_status.event.player;
if(get.position(card)=='h'&&!player.countCards('h',function(card){
return get.value(card)>=8;
})){
return 8-get.value(card);
}
return 6-get.value(card)
},
content:function(){
'step 0'
player.discard(cards);
event.num=1;
var hs=player.getCards('h');
if(!hs.length) event.num=0;
for(var i=0;i<hs.length;i++){
if(!cards.contains(hs[i])){
event.num=0;break;
}
}
'step 1'
player.draw(event.num+cards.length);
},
ai:{
order:1,
result:{
player:function(player){
var num=0;
var cards=player.getCards('he');
for(var i=0;i<cards.length;i++){
if(get.value(cards[i])<6){
num++;
}
}
if(cards.length>2) return 1;
if(cards.length==2&&player.storage.jilue>1);
return 0;
}
},
threaten:1.5
},
},
smyjizhi:{
audio:'jilue_jizhi',
trigger:{player:'useCard'},
filter:function(event,player){
return get.type(event.card,'trick')=='trick'&&event.card.isCard;
},
init:function(player){
player.storage.smyjizhi=0;
},
content:function(){
'step 0'
player.draw();
'step 1'
event.card=result[0];
if(get.type(event.card)=='basic'){
player.chooseBool('是否弃置'+get.translation(event.card)+'并令本回合手牌上限+1？').set('ai',function(evt,player){
return _status.currentPhase==player&&player.needsToDiscard(-3)&&_status.event.value<6;
}).set('value',get.value(event.card,player));
}
'step 2'
if(result.bool){
player.discard(event.card);
player.storage.smyjizhi++;
if(_status.currentPhase==player){
player.markSkill('smyjizhi');
}
}
},
ai:{
threaten:1.4
},
mod:{
maxHandcard:function(player,num){
return num+player.storage.smyjizhi;
}
},
intro:{
content:'本回合手牌上限+#',
},
subSkill:{
clear:{
trigger:{global:'phaseAfter'},
silent:true,
content:function(){
player.storage.smyjizhi=0;
player.unmarkSkill('smyjizhi');
}
}
}
},
old_lingce:{
audio:'lingce',
trigger:{global:'useCard'},
forced:true,
filter:function(event,player){
return event.card.name=='qizhengxiangsheng'||get.zhinangs().contains(event.card.name);
},
content:function(){player.draw()},
},
old_dinghan:{
init:function(player){
if(!player.storage.old_dinghan) player.storage.old_dinghan=[];
},
audio:'dinghan',
trigger:{target:'useCardToTarget'},
forced:true,
filter:function(event,player){
return get.tag(event.card,'damage')&&!player.getStorage('old_dinghan').contains(event.card.name);
},
content:function(){
if(!player.storage.old_dinghan) player.storage.old_dinghan=[];
player.markAuto('old_dinghan',[trigger.card.name]);
trigger.targets.remove(player);
trigger.getParent().triggeredTargets2.remove(player);
trigger.untrigger();
},
onremove:true,
intro:{content:'本轮已记录牌名：$'},
group:'old_dinghan_clear',
subSkill:{
clear:{
trigger:{global:'roundStart'},
silent:true,
forced:true,
content:function(){
player.unmarkSkill('old_dinghan');
delete player.storage.old_dinghan;
},
},
},
ai:{threaten:0.4},
},
decadexiwu:{
trigger:{source:'damageBegin1'},
filter:function(event,player){
return event.card&&event.card.name=='sha'&&event.notLink();
},
forced:true,
content:function(){
trigger.num++;
},
mod:{
cardUsable:function (card,player,num){
if(card.name=='sha') return Infinity;
},
attackFrom:function (){
return -Infinity;
},
},
},
decadehongzhuang:{
trigger:{player:['useCard','respond']},
frequent:true,
content:function(){
player.draw(get.number(trigger.cards[0]));
},
},
olddulie:{
audio:'dulie',
trigger:{global:'phaseBefore',player:'enterGame'},
forced:true,
filter:function(event,player){
return (event.name!='phase'||game.phaseNumber==0)&&game.players.length>1&&game.hasPlayer(function(current){
return current!=player&&!current.hasMark('olddulie');
});
},
locked:true,
direct:true,
content:function(){
'step 0'
var num=Math.floor(game.players.length/2);
player.chooseTarget(num,true,'请选择【笃烈】的目标','令'+get.cnNumber(num)+'名角色获得“围”标记',lib.filter.notMe).set('ai',function(target){
var player=_status.event.player;
return Math.max(1,get.attitude(player,target))/Math.max(1,get.distance(player,target));
});
'step 1'
if(result.bool){
var targets=result.targets.sortBySeat();
player.logSkill('olddulie',targets);
for(var i of targets) i.addMark('olddulie',1);
game.delayx();
}
},
mod:{
targetInRange:function(card,player,target){
if(card.name=='sha'&&!target.hasMark('olddulie')) return true;
},
},
marktext:'围',
intro:{name:'笃烈/破阵 (围)',name2:'围',content:'mark'},
group:'olddulie_sha',
subSkill:{
sha:{
audio:'olddulie',
trigger:{target:'useCardToTarget'},
forced:true,
logTarget:'player',
filter:function(event,player){
return event.card.name=='sha'&&event.player.isIn()&&!event.player.hasMark('olddulie');
},
content:function(){
'step 0'
player.judge(function(result){
if(get.color(result)=='red') return 2;
return -1;
}).judge2=function(result){
return result.bool;
};
'step 1'
if(result.bool){
trigger.targets.remove(player);
trigger.getParent().triggeredTargets2.remove(player);
trigger.untrigger();
}
},
ai:{
effect:{
target:function(card,player,target,current,isLink){
if(card.name=='sha'&&!isLink&&!player.hasMark('olddulie')) return 0.5;
},
},
},
},
},
},
oldpowei:{
audio:'tspowei',
dutySkill:true,
forced:true,
trigger:{source:'damageBegin2'},
logTarget:'player',
filter:function(event,player){
return event.card&&event.card.name=='sha'&&event.player&&
event.player.isIn()&&event.player.hasMark('olddulie');
},
content:function(){
trigger.cancel();
trigger.player.removeMark('olddulie',trigger.player.countMark('olddulie'));
},
derivation:'shenzhu',
group:['oldpowei_achieve','oldpowei_fail'],
ai:{
combo:'olddulie',
effect:{
player:function(card,player,target){
if(card.name=='sha'&&target.hasMark('olddulie')&&get.attitude(player,target)>=0) return [1,1,0,0];
if(get.tag(card,'damage')&&_status.event.type=='respondShan'&&_status.event.getParent().name=='sha'&&target.hasMark('olddulie')&&get.attitude(target,player)>=0) return [1,1,0,0];
},
},
},
subSkill:{
achieve:{
audio:'tspowei_achieve',
trigger:{player:'useCardAfter'},
forced:true,
skillAnimation:true,
animationColor:'metal',
filter:function(event,player){
return event.card.name=='sha'&&!game.hasPlayer(function(current){
return current.hasMark('olddulie');
});
},
content:function(){
game.log(player,'成功完成使命');
player.awakenSkill('oldpowei');
player.addSkillLog('shenzhu');
},
},
fail:{
audio:'tspowei_fail',
trigger:{player:'dying'},
forced:true,
content:function(){
'step 0'
game.log(player,'使命失败');
player.awakenSkill('oldpowei');
var num=player.countCards('e');
if(num>0) player.chooseToDiscard('e',true,num);
'step 1'
if(player.hp<1) player.recover(1-player.hp);
},
},
},
},
diy_kongju:{
audio:'keji',
scareSkill:true,
trigger:{player:'phaseUseEnd'},
frequent:function(event,player){
return player.needsToDiscard();
},
filter:function(event,player){
var history=player.getHistory('useCard').concat(player.getHistory('respond'));
for(var i=0;i<history.length;i++){
if(history[i].card.name=='sha'&&history[i].isPhaseUsing()) return false;
}
return true;
},
content:function(){
player.skip('phaseDiscard');
var targets=game.filterPlayer(function(current){
return current!=player;
}).sortBySeat();
player.line(targets);
for(var i of targets) i.addMark('diy_kongju',1);
game.delayx();
},
marktext:'惧',
intro:{name:'恐惧',name2:'惧',content:'mark'},
},
diy_houqi:{
trigger:{player:'phaseBeginStart'},
forced:true,
skillAnimation:true,
animationColor:'wood',
filter:function (event,player){
var num=0;
for(var i=0;i<game.players.length;i++) num+=game.players[i].countMark('diy_kongju');
return num>=100;
},
content:function (){
var bool=false;
if(player==game.me) bool=true;
else switch(get.mode()){
case 'identity':{
game.showIdentity();
var id1=player.identity;
var id2=game.me.identity;
if(['zhu','zhong','mingzhong'].contains(id1)){
if(['zhu','zhong','mingzhong'].contains(id2)) bool=true;
break;
}
else if(id1=='fan'){
if(id2=='fan') bool=true;
break;
}
break;
}
case 'guozhan':{
if(game.me.isFriendOf(player)) bool=true;
break;
}
case 'versus':{
if(player.side==game.me.side) bool=true;
break;
}
case 'boss':{
if(player.side==game.me.side) bool=true;
break;
}
default:{}
}
game.over(bool);
},
},
gzshilu:{
audio:2,
preHidden:true,
trigger:{global:'dieAfter'},
frequent:true,
prompt2:function(event,player){
if(get.config('double_character')) return '将其的所有武将牌'+(player==event.source?'和武将牌库里的两张随机武将牌':'')+'置于武将牌上';
return '将其的所有武将牌和武将牌库里的'+(player==event.source?'三':'一')+'张随机武将牌置于武将牌上';
},
logTarget:'player',
content:function(){
var list=[],target=trigger.player;
if(target.name&&_status.characterlist.contains(target.name)) list.push(target.name);
if(target.name2&&_status.characterlist.contains(target.name1)) list.push(target.name2);
_status.characterlist.removeArray(list);
if(get.config('double_character')&&player==trigger.source) list.addArray(_status.characterlist.randomRemove(2));
else if(!get.config('double_character')) list.addArray(_status.characterlist.randomRemove(player==trigger.source?3:1));
if(list.length){
player.markAuto('gzshilu',list);
game.log(player,'将','#g'+get.translation(list),'置于武将牌上作为','#y“戮”');
game.broadcastAll(function(player,list){
var cards=[];
for(var i=0;i<list.length;i++){
var cardname='huashen_card_'+list[i];
lib.card[cardname]={
fullimage:true,
image:'character:'+list[i]
}
lib.translate[cardname]=get.rawName2(list[i]);
cards.push(game.createCard(cardname,'',''));
}
player.$draw(cards,'nobroadcast');
},player,list);
}
},
marktext:'戮',
intro:{
content:'character',
onunmark:function(storage,player){
if(storage&&storage.length){
_status.characterlist.addArray(storage)
storage.length=0;
}
},
mark:function(dialog,storage,player){
if(storage&&storage.length){
dialog.addSmall([storage,'character']);
}
else{
return '没有“戮”';
}
},
content:function(storage,player){
return '共有'+get.cnNumber(storage.length)+'张“戮”';
},
},
group:'gzshilu_zhiheng',
subSkill:{
zhiheng:{
audio:'gzshilu',
trigger:{player:'phaseZhunbeiBegin'},
filter:function(event,player){
return player.getStorage('gzshilu').length>0&&player.countCards('he')>0;
},
direct:true,
content:function(){
'step 0'
var num=Math.min(player.getStorage('gzshilu').length,player.countCards('he'));
player.chooseToDiscard('he',get.prompt('gzshilu'),'弃置至多'+get.cnNumber(num)+'张牌并摸等量的牌',[1,num]).logSkill='gzshilu';
'step 1'
if(result.bool&&result.cards&&result.cards.length) player.draw(result.cards.length);
},
},
},
},
gzxiongnve:{
audio:2,
trigger:{player:'phaseUseBegin'},
direct:true,
filter:function(event,player){
return player.getStorage('gzshilu').length>0;
},
content:function(){
'step 0'
player.chooseButton([get.prompt('gzxiongnve'),[player.storage.gzshilu,'character']]).set('ai',function(button){
if(!_status.event.goon) return 0;
var name=button.link,group=get.is.double(name,true);
if(!group) group=[lib.character[name][1]];
for(var i of group){
if(game.hasPlayer(function(current){
return player.inRange(current)&&current.group==i;
})) return 1+Math.random();
}
return 0;
}).set('goon',player.countCards('hs',function(card){
return get.tag(card,'damage')&&player.hasValueTarget(card);
})>1);
'step 1'
if(result.bool){
player.logSkill('gzxiongnve');
lib.skill.gzxiongnve.throwCharacter(player,result.links);
game.delayx();
var group=get.is.double(result.links[0],true);
if(!group) group=[lib.character[result.links[0]][1]];
event.group=group;
var str=get.translation(group);
player.chooseControl().set('prompt','选择获得一项效果').set('choiceList',[
'本回合对'+str+'势力的角色造成的伤害+1',
'本回合对'+str+'势力的角色造成伤害后，获得对方的一张牌',
'本回合对'+str+'势力的角色使用牌没有次数限制',
]).set('ai',function(){
var player=_status.event.player;
if(player.countCards('hs',function(card){
return get.name(card)=='sha'&&player.hasValueTarget(card);
})>player.getCardUsable('sha')) return 0;
return get.rand(1,2);
});
}
else event.finish();
'step 2'
var skill='gzxiongnve_effect'+result.index;
player.markAuto(skill,event.group);
player.addTempSkill(skill);
game.log(player,'本回合对'+get.translation(event.group)+'势力的角色','#g'+lib.skill[skill].promptx)
},
group:'gzxiongnve_end',
throwCharacter:function(player,list){
player.unmarkAuto('gzshilu',list);
_status.characterlist.addArray(list);
game.log(player,'从','#y“戮”','中移去了','#g'+get.translation(list));
game.broadcastAll(function(player,list){
var cards=[];
for(var i=0;i<list.length;i++){
var cardname='huashen_card_'+list[i];
lib.card[cardname]={
fullimage:true,
image:'character:'+list[i]
}
lib.translate[cardname]=get.rawName2(list[i]);
cards.push(game.createCard(cardname,'',''));
}
player.$throw(cards,1000,'nobroadcast');
},player,list);
},
subSkill:{
effect0:{
promptx:'造成的伤害+1',
charlotte:true,
onremove:true,
audio:'gzxiongnve',
intro:{
content:'对$势力的角色造成的伤害+1',
},
trigger:{source:'damageBegin1'},
forced:true,
filter:function(event,player){
return player.getStorage('gzxiongnve_effect0').contains(event.player.group);
},
logTarget:'player',
content:function(){
trigger.num++;
},
},
effect1:{
promptx:'造成伤害后，获得对方的一张牌',
charlotte:true,
onremove:true,
audio:'gzxiongnve',
intro:{
content:'对$势力的角色造成伤害后，获得对方的一张牌',
},
trigger:{source:'damageEnd'},
forced:true,
filter:function(event,player){
return player.getStorage('gzxiongnve_effect1').contains(event.player.group)&&event.player.countGainableCards(player,'he')>0;
},
logTarget:'player',
content:function(){
player.gainPlayerCard(trigger.player,true,'he');
}
},
effect2:{
promptx:'使用牌没有次数限制',
charlotte:true,
onremove:true,
intro:{
content:'对$势力的角色使用牌没有次数限制',
},
mod:{
cardUsableTarget:function(card,player,target){
if(player.getStorage('gzxiongnve_effect2').contains(target.group)) return true;
},
},
},
effect3:{
charlotte:true,
audio:'gzxiongnve',
mark:true,
intro:{
content:'受到其他角色造成的伤害-1',
},
trigger:{player:'damageBegin1'},
filter:function (event,player){
if(event.source&&event.source!=player) return true;
return false;
},
forced:true,
content:function(){
trigger.num--;
},
ai:{
effect:{
target:function(card,player,target){
if(player.hasSkillTag('jueqing',false,target)) return;
var num=get.tag(card,'damage');
if(num){
if(num>1) return 0.5;
return 0;
}
}
}
},
},
end:{
trigger:{player:'phaseUseEnd'},
direct:true,
filter:function(event,player){
return player.getStorage('gzshilu').length>1;
},
content:function(){
'step 0'
player.chooseButton(['是否移去两张“戮”获得减伤？',[player.storage.gzshilu,'character']],2).set('ai',function(button){
var name=button.link,group=get.is.double(name,true);
if(!group) group=[lib.character[name][1]];
for(var i of group){
if(game.hasPlayer(function(current){
return current.group==i;
})) return 0;
}
return 1;
});
'step 1'
if(result.bool){
player.logSkill('gzxiongnve');
lib.skill.gzxiongnve.throwCharacter(player,result.links);
player.addTempSkill('gzxiongnve_effect3',{player:'phaseBegin'});
game.delayx();
}
},
},
},
},
gzzhaoxin:{
audio:2,
trigger:{player:'damageEnd'},
filter:function(event,player){
return player.countCards('h')>0;
},
check:()=>false,
preHidden:true,
content:function(){
'step 0'
player.showHandcards();
'step 1'
var hs=player.countCards('h');
if(game.hasPlayer(function(current){
return current!=player&&current.countCards('h')<=hs;
})){
player.chooseTarget(true,'请选择要交换手牌的目标角色',function(card,player,target){
return target!=player&&target.countCards('h')<=player.countCards('h');
})
}
else event.finish();
'step 2'
if(result.bool){
var target=result.targets[0];
player.line(target,'green');
player.swapHandcards(target);
}
},
},
gzsuzhi:{
audio:2,
derivation:'gzfankui',
mod:{
targetInRange:function(card,player,target){
if(player==_status.currentPhase&&player.countMark('gzsuzhi_count')<3&&get.type2(card)=='trick') return true;
},
},
trigger:{player:'phaseJieshuBegin'},
forced:true,
filter:function(event,player){
return player.countMark('gzsuzhi_count')<3;
},
content:function(){
player.addTempSkill('gzfankui',{player:'phaseBegin'});
},
group:['gzsuzhi_damage','gzsuzhi_draw','gzsuzhi_gain'],
preHidden:['gzsuzhi_damage','gzsuzhi_draw','gzsuzhi_gain'],
subSkill:{
damage:{
audio:'gzsuzhi',
trigger:{source:'damageBegin1'},
forced:true,
filter:function(event,player){
return player==_status.currentPhase&&player.countMark('gzsuzhi_count')<3&&event.card&&
(event.card.name=='sha'||event.card.name=='juedou')&&event.getParent().type=='card';
},
content:function(){
trigger.num++;
player.addTempSkill('gzsuzhi_count');
player.addMark('gzsuzhi_count',1,false);
},
},
draw:{
audio:'gzsuzhi',
trigger:{player:'useCard'},
forced:true,
filter:function(event,player){
return player==_status.currentPhase&&player.countMark('gzsuzhi_count')<3&&get.type2(event.card)=='trick';
},
content:function(){
player.draw();
player.addTempSkill('gzsuzhi_count');
player.addMark('gzsuzhi_count',1,false);
},
},
gain:{
audio:'gzsuzhi',
trigger:{global:'loseAfter'},
forced:true,
filter:function(event,player){
if(player!=_status.currentPhase||event.type!='discard'||player==event.player||player.countMark('gzsuzhi_count')>=3) return false;
return event.cards2&&event.cards2.filterInD('d').length>0;
},
content:function(){
'step 0'
player.addTempSkill('gzsuzhi_count');
player.addMark('gzsuzhi_count',1,false);
if(trigger.delay==false) game.delay();
'step 1'
var cards=trigger.cards2.filterInD('d');
if(cards.length==1){
event._result={
bool:true,
links:cards,
}
}
else player.chooseButton(['夙智：选择获得一张牌',cards],true);
'step 2'
if(result.bool) player.gain(result.links[0],'gain2');
},
},
count:{
onremove:true,
},
},
},
gzfankui:{
audio:2,
inherit:'fankui',
},
gzhuaiyi:{
audio:2,
enable:'phaseUse',
usable:1,
delay:false,
filter:function(event,player){
return player.countCards('h')>0;
},
content:function(){
'step 0'
player.showHandcards();
'step 1'
if(!player.countCards('h',{color:'red'})) event._result={control:'黑色'};
else if(!player.countCards('h',{color:'black'})) event._result={control:'红色'};
else player.chooseControl('红色','黑色').set('ai',function(){
var player=_status.event.player,num=player.maxHp-player.getStorage('gzhuaiyi').length;
if(player.countCards('h',{color:'red'})<=num&&
player.countCards('h',{color:'black'})>num) return '红色';
return '黑色';
});
'step 2'
event.control=result.control;
var cards;
if(event.control=='红色'){
cards=player.getCards('h',{color:'red'});
}
else{
cards=player.getCards('h',{color:'black'});
}
player.discard(cards);
event.num=cards.length;
'step 3'
player.chooseTarget('请选择至多'+get.cnNumber(event.num)+'名有牌的其他角色，获得这些角色的各一张牌。',[1,event.num],function(card,player,target){
return target!=player&&target.countCards('he')>0;
}).set('ai',function(target){
return -get.attitude(_status.event.player,target)+0.5;
});
'step 4'
if(result.bool&&result.targets){
player.line(result.targets,'green');
event.targets=result.targets;
event.targets.sort(lib.sort.seat);
event.cards=[];
}
else{
event.finish();
}
'step 5'
if(player.isAlive()&&event.targets.length){
player.gainPlayerCard(event.targets.shift(),'he',true);
}
else event.finish();
'step 6'
if(result.bool&&result.cards&&result.cards.length) event.cards.addArray(result.cards);
if(event.targets.length) event.goto(5);
'step 7'
var hs=player.getCards('h');
cards=cards.filter(function(card){
return get.type(card)=='equip'&&hs.contains(card);
});
if(cards.length){
player.lose(cards,ui.special,'toStorage');
game.log(player,'将',cards,'作为“异”置于武将牌上');
player.markAuto('gzhuaiyi',cards);
}
else event.finish();
'step 8'
game.delayx();
},
ai:{
order:10,
result:{
player:function(player,target){
var num=player.maxHp-player.getStorage('gzhuaiyi').length;
if(player.countCards('h',{color:'red'})<=num) return 1;
if(player.countCards('h',{color:'black'})<=num) return 1;
return 0;
},
}
},
marktext:'异',
intro:{content:'cards',onunmark:'throw'},
},
gzzisui:{
audio:2,
trigger:{player:'phaseDrawBegin2'},
forced:true,
filter:function(event,player){
return !event.numFixed&&player.getStorage('gzhuaiyi').length>0;
},
content:function(){
trigger.num+=player.getStorage('gzhuaiyi').length;
},
group:'gzzisui_die',
subSkill:{
die:{
audio:'gzzisui',
trigger:{player:'phaseJieshuBegin'},
forced:true,
filter:function(event,player){
return player.getStorage('gzhuaiyi').length>player.maxHp;
},
content:function(){
player.die();
},
},
},
},
},
translate:{
CSingle:'1V1武将',
CTwoVsTwo:'2V2武将',
CTongShuai:'统率武将',
CLongZhou:'龙舟武将',
CAoYun:'OL奥运武将',
Cothers:'自嗨',
Cye:'野心家',
bilibili_chuyuan:'储元',
bilibili_chuyuan_info:'一名角色受到伤害后，你可以令其摸一张牌。然后其将一张手牌置于你的武将牌上，称为「储」。你的手牌上限+X（X为你武将牌上的「储」数）。',
bilibili_dengji:'登极',
bilibili_dengji_info:'觉醒技，准备阶段，若你武将牌上的「储」数不小于3，则你减1点体力上限并获得所有「储」，然后获得技能〖天行〗和〖奸雄(界)〗。',
bilibili_tianxing:'天行',
bilibili_tianxing_info:'觉醒技，准备阶段，若你武将牌上的「储」数不小于3，则你减1点体力上限并获得所有「储」，然后失去技能〖储元〗，选择获得以下技能中的一个：〖仁德(界)〗/〖制衡(界)〗/〖乱击(OL界)〗/〖放权(OL界)〗。',
bilibili_jianxiong:'奸雄',
bilibili_jianxiong_info:'当你受到伤害后，你可以获得对你造成伤害的牌并摸一张牌。',
bilibili_rende:'仁德',
bilibili_rende_info:'出牌阶段，你可以将至少一张手牌交给其他角色，然后你于此阶段内不能再以此法交给该角色牌；若你于此阶段内给出的牌首次达到两张，你可以视为使用一张基本牌。',
bilibili_zhiheng:'制衡',
bilibili_zhiheng_info:'出牌阶段限一次，你可以弃置任意张牌并摸等量的牌，若你在发动〖制衡〗时弃置了所有手牌，则你多摸一张牌。',
bilibili_luanji:'乱击',
bilibili_luanji_info:'你可以将两张花色相同的手牌当做【万箭齐发】使用。当你使用【万箭齐发】选择目标后，你可以为此牌减少一个目标。',
bilibili_luanji_remove:'乱击',
bilibili_fangquan:'放权',
bilibili_fangquan_info:'出牌阶段开始前，你可以跳过此阶段。若如此做，弃牌阶段开始时，你可以弃置一张手牌，令一名其他角色进行一个额外回合。',
bilibili_leitong:'雷铜',
bilibili_wulan:'吴兰',
bilibili_kuiji:'溃击',
bilibili_cuorui:'挫锐',
bilibili_kuiji_info:'出牌阶段限一次，你可以将一张黑色基本牌当作【兵粮寸断】置于你的判定区，然后摸一张牌。若如此做，你可以对体力值最多的一名敌方角色造成2点伤害。敌方角色因此进入濒死状态时，你令体力值最少的友方角色回复1点体力。',
bilibili_cuorui_info:'出牌阶段开始时，你可以弃置一名友方角色区域里的一张牌。若如此做，你选择一项：1.弃置敌方角色装备区里至多两张与此牌颜色相同的牌；2.展示敌方角色的共计两张手牌，然后获得其中与此牌颜色相同的牌。',
wzshouye:'守邺',
wzshouye_info:'每回合限一次。当其他角色使用牌指定你为唯一目标时，你可以进行一次判定。若判定结果为红色，此牌对你无效且你于此牌结算完成后获得其对应的所有实体牌。',
gz_huashen:"化身",
gz_huashen_info:"准备阶段，若你的“化身”牌数：小于2，你可以观看剩余武将牌堆中的五张牌，然后将其中至多两张武将牌扣至于武将牌上，称为“化身”牌；大于等于2，你可以用剩余武将牌堆顶的一张牌替换一张“化身”牌。你可以于相应的时机明置并发动“化身”牌的一个技能，技能结算完成后将该“化身”牌放回剩余武将牌堆。你每个时机只能发动一张“化身”牌的技能，且不能发动带有技能类型的技能。",
gz_huashen_append:'<span style="font-family: yuanli"><li>带有技能类型的技能：锁定技、主公技、限定技、觉醒技、主将技、副将技、阵法技、隐匿技、使命技、势力技等。</span>',
gz_huashen_faq:'注意事项',
gz_huashen_faq_info:'<br>带有技能类型的技能：锁定技、主公技、限定技、觉醒技、主将技、副将技、阵法技、隐匿技、使命技、势力技等。',
gz_xinsheng:"新生",
gz_xinsheng_info:"当你受到1点伤害后，你可以获得一张新的“化身”牌。",
bilibili_zhenwei:'镇卫',
bilibili_zhenwei_info:'锁定技，敌方角色至己方其他角色的距离+1。',
bilibili_huanshi:'缓释',
bilibili_huanshi_info:'一名友方角色的判定牌生效前，你可打出一张牌代替之。',
bilibili_hongyuan:'弘援',
bilibili_hongyuan_info:'摸牌阶段，你可以少摸一张牌。若如此做，其他友方角色各摸一张牌。',
ts_zhugejin:"统率诸葛瑾",
ts_zhugejin_ab:"诸葛瑾",
ts_wenpin:"统率文聘",
ts_wenpin_ab:"文聘",
bilibili_ganglie:'刚烈',
bilibili_ganglie_info:'当你受到伤害后，你可令一名敌方角色判定。若结果不为♥，其弃置两张牌或受到来自你的1点伤害。',
bilibili_zhongyi:'忠义',
bilibili_zhongyi2:'忠义',
bilibili_zhongyi_info:'限定技，出牌阶段，你可以将一张牌置于武将牌上。你的武将牌上有〖忠义〗牌时，己方角色使用【杀】造成的伤害+1。下轮游戏开始时，你将〖忠义〗牌置入弃牌堆。',
bilibili_zhanshen:'战神',
bilibili_zhanshen_info:'觉醒技，准备阶段，若场上有已死亡的其他己方角色且你已受伤，则你弃置装备区的武器牌，减1点体力上限，获得技能〖马术〗和〖神戟〗。',
ts_lvbu:"统率吕布",
ts_lvbu_ab:"吕布",
ts_guanyu:"统率关羽",
ts_guanyu_ab:"关羽",
ts_xiahoudun:"统率夏侯惇",
ts_xiahoudun_ab:"夏侯惇",
ts_zhaoyun:"统率赵云",
ts_zhaoyun_ab:"赵云",
bilibili_jiuzhu:'救主',
bilibili_jiuzhu_info:'当己方一名其他角色濒死时，若你的体力值大于1，你可弃置一张牌并失去1点体力，然后令其回复1点体力。',
bilibili_jinfan: '锦帆',
bilibili_sheque: '射却',
bilibili_zhiyan: '治严',
bilibili_zhilve: '知略',
bilibili_weifeng: '威风',
bilibili_jinfan_info: '弃牌阶段开始时，你可以将一张与「铃」花色均不同的牌置于武将牌上，称为「铃」。锁定技，每回合每种花色限一次，当你使用或打出与「铃」花色相同的牌时，你摸一张牌。',
bilibili_sheque_info: '当其他角色使用装备牌时，你可以将一张手牌当作【杀】对其使用，若此【杀】造成伤害，则该角色本回合不能再使用或打出手牌。',
bilibili_zhiyan_info: '出牌阶段，你可以将手牌摸至或弃至体力上限，若你的手牌数增加，则你本回合不能对其他角色使用牌；若你的手牌数减少，你可以令一名其他角色获得你弃置手牌中的一张。',
bilibili_zhilve_info: '准备阶段，你可以移动场上的一张牌，若你移动了装备区的牌，你失去1点体力；若你移动了判定区的牌，本回合你的手牌上限-1；若你没有移动牌，你于本回合摸牌阶段额外摸一张牌，然后本回合你使用的第一张【杀】不计次数且无距离限制。',
bilibili_weifeng_info: '出牌阶段限一次，当你使用【杀】或伤害性锦囊结算结束后，你可以将其置于其中一个目标的武将牌上，称为「惧」。有「惧」的角色受到伤害时，移除「惧」并执行以下效果：若造成伤害的牌与「惧」牌名相同，则此伤害+1；若不同，你获得其一张牌。(一名角色最多只能拥有一张「惧」)',
lz_sufei:'苏飞·龙舟',
lz_tangzi:'唐咨·龙舟',
lz_liuqi:'刘琦·龙舟',
lz_huangquan:'黄权·龙舟',
lzlianpian:'联翩',
lzlianpian_info:'友方角色于出牌阶段使用牌连续指定同一名角色为目标后，你可以令此牌的使用者摸一张牌。',
lzwenji:'问计',
lztunjiang:'屯江',
lzwenji_info:'出牌阶段开始时，你可以令队友交给你一张牌。你于本回合内使用与该牌名称相同的牌不能被其他角色响应。',
lztunjiang_info:'友方角色的回合结束时，若其于本回合内未造成过伤害，则你可以令其或你摸两张牌。',
lzdianhu:'点虎',
lzdianhu2:'点虎',
lzjianji:'谏计',
lzdianhu_info:'锁定技，游戏开始时，你指定一名其他角色；当你或队友对该角色造成1点伤害后，摸一张牌。',
lzjianji_info:'出牌阶段限一次，你可以令一名队友摸一张牌，然后其可以使用此牌。',
lzxingzhao:'兴棹',
lz_xunxun:'恂恂',
lzxingzhao1:'兴棹',
lzxingzhao2:'兴棹',
lzxingzhao3:'兴棹',
lzxingzhao_info:'锁定技，若本局游戏中所有友方角色（包含死亡的友方角色，其后同理）造成的伤害数合计为：<br><li>不少于友方角色数，所有友方角色视为拥有技能〖恂恂〗；<br><li>不少于友方角色数的两倍，所有友方角色使用装备牌时摸一张牌；<br><li>不少于友方角色数的三倍，所有友方角色跳过弃牌阶段；<br><li>不少于友方角色数的六倍，新的一轮开始时，你所属的阵营直接获得游戏胜利。',
bilibili_niujin:'OL牛金',
bilibili_hansui:'OL韩遂',
bilibili_hejin:'OL何进',
qiuan:'求安',
qiuan_info:'当你受到伤害后，若此伤害的渠道有对应的实体牌且你的武将牌上没有「函」，则你可以防止此伤害并将这些牌置于你的武将牌上，称为「函」。',
liangfan:'量反',
liangfan2:'量反',
liangfan_info:'锁定技，准备阶段开始时，若你的武将牌上有「函」，则你获得这些牌，然后失去1点体力。当你于此回合内因使用实体牌中包含「函」的牌且执行这些牌的效果而对目标角色造成伤害时，你可以获得目标角色的一张牌。',
yin_shenshi:'审时',
yin_shenshi_info:'①出牌阶段限一次，你可以将一张牌交给一名手牌数最多的角色，然后对其造成一点伤害，若该角色因此死亡，则你可以令一名角色将手牌摸至四张。②其他角色对你造成伤害后，你可以观看该角色的手牌，然后交给其一张牌，当前角色回合结束时，若此牌仍在该角色的区域内，你将手牌摸至四张。',
yin_zhenliang:'贞良',
yin_zhenliang_info:'①出牌阶段限一次，你可以弃置一张与「任」颜色相同的牌并对攻击范围内的一名角色造成1点伤害。②当你于回合外使用或打出的牌结算完成后，若此牌与「任」颜色相同，则你可以令一名角色摸一张牌。',
yin_juzhan:'拒战',
yin_juzhan_info:'转换技，阴：当你成为其他角色【杀】的目标后，你可以与其各摸一张牌，然后其本回合内不能再对你使用牌。阳：当你使用【杀】指定一名角色为目标后，你可以获得其一张牌，然后你本回合内不能再对其使用牌。',
old_weipo:'危迫',
old_weipo_info:'出牌阶段限一次，你可以选择一个智囊或【兵临城下】并令一名没有〖危迫〗效果的角色获得如下一次性效果直到你下回合开始：其可以将一张【杀】当做你选择的牌使用。',
old_mouzhi:'谋识',
old_mouzhi_info:'锁定技，当你受到伤害时，若此伤害对应的牌的颜色和你上次对你造成伤害的牌的颜色相同，则你防止此伤害。',
old_guixin:'归心',
old_guixin_info:'结束阶段，你可以选择一项：①选择获得一个主公技；②更改场上一名其他角色的势力。',
//old_guixin_info:'①结束阶段，你可以选择一项：(1)选择获得一个主公技；(2)更改场上一名其他角色的势力。<br>②当你受到1点伤害后，你可以获得每名其他角色区域里的一张牌，然后你翻面并获得选择获得一个主公技。',
xinshicai:'恃才',
xinshicai_info:'当你使用牌后，你可以将此牌置于牌堆顶，然后摸一张牌（每回合每种类型的牌限触发一次）。',
xinzaiqi:'再起',
xinzaiqi_info:'弃牌阶段开始时，你可以令至多X名角色选择一项：1.摸一张牌，2.令你回复1点体力（X为本回合进入弃牌堆的红色牌数）',
bilibili_tannang:'探囊',
bilibili_tannang_info:'锁定技，你与其他角色计算距离-X（X为你已损失的体力值）。',
bilibili_yishi:'义释',
bilibili_zhengjun:'整军',
bilibili_zhengjun_info:'当你受到伤害时，你可以获得装备区里的牌（无牌则跳过此步骤），然后打出一张装备牌，若如此做，你防止此伤害。',
bilibili_shenxing:'神行',
bilibili_shenxing_info:'锁定技，若你的装备区里没有坐骑牌，则你计算与其他角色的距离-1且你的手牌上限+1。',
bilibili_daoji:'盗戟',
bilibili_daoji_info:'出牌阶段限一次，你可以弃置一张非基本牌并选择一名攻击范围内的其他角色，你获得其一张牌。若你以此法获得的牌为：基本牌，你摸一张牌；装备牌，你使用此牌并对其造成1点伤害。',
bilibili_mouzhu:'谋诛',
bilibili_mouzhu_info:'出牌阶段限一次，你可以选择一名其他角色。你令除其之外体力值不大于你的其他角色依次选择是否交给你一张牌。所有角色选择完毕后，若你未因此获得牌，则你和这些角色各失去一点体力，否则你视为其使用一张伤害基数为X的【杀】或【决斗】（X为你本次获得的牌数且至多为4）。',
bilibili_yanhuo:'延祸',
bilibili_yanhuo_info:'你死亡后，你可以令一名角色弃置X张牌，或令至多X名角色各弃置一张牌（X为你的牌数）。',
cike_chooseskill:'技能选择',
cike_chooseskill_info:'<li>游戏开始时，你选择保留一个对应特殊人物的专属技能，并失去其它技能。<br><li>伍六七：“易容”、“情锁”、“削发”。<br><li>梅花十三：“辫刀”、“映月”、“护体”。',
cike_shenghu:'圣护',
cike_lingshou_info:'锁定技，己方其他角色受到伤害时，令该伤害-1，你失去1点体力，伤害来源弃置两张牌。（玩家可以在“活动武将”扩展界面禁用此技能）',
cike_shenghu_append:'<span style="font-family: yuanli">技能选择<br><li>游戏开始时，你选择保留一个伍六七的专属技能，并失去其它技能。<br><li>伍六七：“易容”、“情锁”、“削发”。</span>',
cike_feijian:'飞剪',
cike_feijian_info:'锁定技，你的出牌阶段结束时，若你有装备武器牌且本回合对其他角色造成过伤害，弃置该武器牌并对这些角色依次造成2~4点随机伤害。',
cike_yirong:'易容',
cike_yirong_info:'锁定技，你每回合首次造成伤害时，将伤害来源改为场上一名随机其他角色。',
cike_qingsuo:'情锁',
cike_qingsuo_info:'锁定技，当有其他角色对你造成伤害后，你与其一起将武将牌翻面。',
cike_xuefa:'削发',
cike_xuefa_info:'锁定技，你每次对其他角色造成伤害后，随机弃置其1~3张牌。',
cike_lingshou:'灵守',
cike_shenghu_info:'锁定技，己方其他角色受到伤害时，令该伤害-1，你失去1点体力，然后你与该己方角色各摸一张牌。（玩家可以在“活动武将”扩展界面禁用此技能）',
cike_lingshou_append:'<span style="font-family: yuanli">技能选择<br><li>游戏开始时，你选择保留一个梅花十三的专属技能，并失去其它技能。<br><li>梅花十三：“辫刀”、“映月”、“护体”。</span>',
cike_meibiao:'梅镖',
cike_meibiao_info:'锁定技，你使用梅花牌无法被其他角色响应，且该牌造成的伤害+2。',
cike_biandao:'辫刀',
cike_biandao_info:'锁定技，你的出牌阶段结束时，若本回合未对其他角色造成过伤害，你对所有敌方角色依次造成1~2点随机伤害。',
cike_yingyue:'映月',
cike_yingyue_info:'你在出牌阶段使用首张指定单一目标的【杀】或普通锦囊牌时，可以额外增加一个目标。',
cike_huti:'护体',
cike_huti_info:'锁定技，当有其他角色对你造成伤害时，若此伤害为该角色本回合首次造成伤害，你防止此伤害然后随机弃置一张牌。',
cike_wenhui:'文绘',
cike_qintao:'亲讨',
cike_xianggong:'乡公',
cike_wenhui_info:'当你于回合内弃置其他角色的牌后，你随机从牌堆中获得一张与此牌类别相同的牌（没有则改为摸一张牌）。你以此法获得的牌本回合不计入使用次数和手牌上限。',
cike_qintao_info:'若你使用的指定唯一目标的【杀】未造成伤害，结算完成后，你可以失去一点体力并令其选择一项：①失去一点体力；②令你弃置其两张牌。',
cike_xianggong_info:'锁定技，当你受到伤害后，伤害来源须弃置X张手牌，然后摸一张牌。（X为你已损失的体力值）',
twgongsun:'共损',
twgongsun_shadow:'共损',
twgongsun_info:'锁定技，出牌阶段开始时，你须选择一名攻击范围的其他角色并选择一个花色。直到你的下回合开始或你死亡，你与其不能使用或打出或弃置此花色的牌。',
twjimeng:'急盟',
twjimeng_info:'出牌阶段限一次，你可以获得一名其他角色区域里的一张牌，然后交给该角色一张牌。',
diy_yujue:'鬻爵',
diy_yujue2:'鬻爵',
diy_yujue_info:'其他角色的出牌阶段限一次，其可以将任意张点数之和为13的手牌交给你，然后其亮出牌堆顶的四张牌并选择获得其中任意数量点数之和不大于13的牌。',
diy_hunkui:'昏聩',
diy_hunkui_info:'锁定技，你于出牌阶段内每种类型的牌只能使用一次。',
smyguicai:'鬼才',
smyguicai_info:'当一名角色的判定牌生效前，你可以打出一张牌代替之。',
smyfangzhu:'放逐',
smyfangzhu_info:'当你受到伤害后，你可以令一名其他角色翻面，然后该角色摸X张牌（X为你已损失的体力值）。',
smyjizhi:'集智',
smyjizhi_info:'当你使用锦囊牌时，你可以摸一张牌。若此牌是基本牌，你可以弃置此牌，然后本回合手牌上限+1。',
smyzhiheng:'制衡',
smyzhiheng_info:'出牌阶段限一次，你可以弃置任意张牌，然后摸等量的牌。若你以此法弃置了所有手牌，则你多摸一张牌。',
smywansha:'完杀',
smywansha_info:'锁定技，你的回合内，只有你和处于濒死状态的角色才能使用【桃】；一名角色的濒死结算中，除你和濒死角色外的其他角色非锁定技无效。',
old_lingce:'灵策',
old_lingce_info:'锁定技，一名角色使用智囊牌名的锦囊或【奇正相生】时，你摸一张牌。',
old_dinghan:'定汉',
old_dinghan_info:'锁定技，每种牌名每轮限一次，当你被指定为伤害类卡牌的目标时，取消之。',
aoyun_sunyang:'孙杨',
aoyun_yeshiwen:'叶诗文',
shuijianX:'水箭',
shuijianX_info:'摸牌阶段，你可以多摸X+1张牌。（X为你装备区里牌数的一半且向下取整）',
jisuX:'急速',
jisuX_info:'准备阶段开始时，你可以跳过判定阶段和摸牌阶段，然后视为使用一张无距离限制的【杀】。',
shuiyongX:'水泳',
shuiyongX_info:'锁定技，当你受到火属性伤害时，防止此伤害。',
golden_zuoci:'仙人之怒',
BT_puyuan:'能工巧匠',
diy_liuhong:'刘宏',
yin_kuailiangkuaiyue:'界蒯良蒯越',
yin_yl_luzhi:'界卢植',
yin_yanyan:'界严颜',
decadexiwu:'习武',
decadexiwu_info:'锁定技，你使用【杀】无数量和距离限制且你使用【杀】造成的伤害+1。',
decadehongzhuang:'红妆',
decadehongzhuang_info:'当你使用或打出一张牌时，你可以摸X张牌（X为此牌点数）。',
olddulie:'笃烈',
olddulie_info:'锁定技。①游戏开始时，你令X名其他角色获得“围”（X为游戏人数的一半且向下取整）。②你对没有“围”的角色使用【杀】无距离限制。③当你成为【杀】的目标时，若使用者没有“围”，则你进行判定。若结果为红色，则取消此目标。',
oldpowei:'破围',
oldpowei_info:'使命技。①当你因使用【杀】而对有“围”的角色造成伤害时，你防止此伤害并移去该角色的“围”。②使命：当你使用【杀】结算完成后，若场上没有“围”，则你获得技能〖神著〗。③失败：当你进入濒死状态时，你弃置装备区的所有牌，然后将体力值回复至1点。',
diy_lvmeng:'恐惧魔王',
diy_kongju:'克己',
diy_houqi:'后期',
diy_kongju_info:'恐惧技，出牌阶段结束时，若你于此阶段没有使用或打出过【杀】，你可以跳过弃牌阶段并令所有其他角色获得一枚“恐惧”标记。',
diy_houqi_info:'锁定技，准备阶段，若场上的“恐惧”标记数不少于100，你所属的阵营直接获得游戏胜利。',
gz_zhonghui:'钟会',
gz_simazhao:'司马昭',
gz_gongsunyuan:'公孙渊',
gz_sunchen:'孙綝',
gzzhaoxin:'昭心',
gzzhaoxin_info:'当你受到伤害后，你可展示所有手牌，然后与一名手牌数不大于你的其他角色交换手牌。',
gzsuzhi:'夙智',
gzsuzhi_info:'锁定技，每回合累计限三次；①当你于回合内因执行【杀】或【决斗】造成伤害时，此伤害+1；②你于回合内使用锦囊牌时摸一张牌，且无距离限制；③当有其他角色于你的回合内弃置牌后，你获得其中的一张；④结束阶段，你获得〖反馈〗直到下回合开始。',
gzhuaiyi:'怀异',
gzhuaiyi_info:'出牌阶段限一次，你可以展示所有手牌。若其中包含两种颜色，则你可以弃置其中一种颜色的所有牌，然后获得至多等量名角色的各一张牌。然后你将以此法获得的装备牌置于武将牌上，称为“异”',
gzzisui:'恣睢',
gzzisui_info:'锁定技，摸牌阶段，你多摸X张牌。结束阶段开始时，若X大于你的体力上限，你死亡（X为“异”数）。',
gzshilu:'嗜戮',
gzshilu_info:'①一名角色死亡时，你可以将其所有武将牌和剩余的武将牌堆中的随机X张武将牌置于你的武将牌上，称为“戮”（双将模式中，若你为击杀角色，则X=2，否则X=0；非双将模式中，若你为击杀角色，则X=3，否则X=1）。②准备阶段，你可以弃置至多Y张牌，然后摸等量的牌（Y为“戮”数）。',
gzxiongnve:'凶虐',
gzxiongnve_info:'①出牌阶段开始时，你可以将一张“戮”置入武将牌堆并选择一项：1. 本回合对“戮”对应的势力的角色造成的伤害+1；2. 本回合对“戮”对应的势力的角色造成伤害时，你获得其一张牌；3. 本回合对“戮”对应的势力的角色使用牌无次数限制。②出牌阶段结束时，你可以将两张“戮”置入武将牌堆并获得以下效果直到你的下个回合开始前：当你受到其他角色造成的伤害时,此伤害-1。',
},
dynamicTranslate:{
},
};
if(lib.device||lib.node){
for(var i in huodongcharacter.character){
if(i.indexOf('gz_')!=0&&i.indexOf('hanba')!=0) huodongcharacter.character[i][4].push('ext:活动武将/'+i+'.jpg');
}
}else{
for(var i in huodongcharacter.character){
if(i.indexOf('gz_')!=0&&i.indexOf('hanba')!=0) huodongcharacter.character[i][4].push('db:extension-活动武将:'+i+'.jpg');
}
}
return huodongcharacter;
});
lib.config.all.characters.push('huodongcharacter');
if(!lib.config.characters.contains('huodongcharacter')) lib.config.characters.remove('huodongcharacter');
lib.translate['huodongcharacter_character_config']='其他武将';
//禁用
if(lib.config.extension_活动武将_cike_chaoshikong) lib.translate.cike_shenghu_info='此技能已禁用';
if(lib.config.extension_活动武将_cike_chaoshikong) lib.translate.cike_lingshou_info='此技能已禁用';
//卡包
game.import('card',function(){
return {
name:'GuanDuCard',
connect:true,
card:{
bilibili_lulitongxin:{
image:"ext:活动武将/bilibili_lulitongxin.png",
audio:"lulitongxin",
fullskin:true,
type:"trick",
enable:true,
filterTarget:function (card,player,target){
if(get.attitude(player,target) > 0)return target.isLinked();
return !target.isLinked();
},
chongzhu:true,
changeTarget:function (player,targets){
var target=targets[0];
var att = get.attitude(player,target);
game.filterPlayer(function(current){
if(current == target)return false;
if(att > 0){
return get.attitude(target,current)>0&&current.isLinked();
}
else {
return get.attitude(target,current)>0&&!current.isLinked();
}
},targets);
},
content:function (){
if(target.isLinked()){
target.draw();
}
else{
target.link();
}
},
ai:{
order:7.5,
value:4,
useful:2,
wuxie:function (){
return 0;
},
result:{
player:function (player,target){
var att = get.attitude(player,target);
return game.countPlayer(function(current){
if(get.attitude(target,current)>0){
if(att>0&&current.isLinked()){
return get.attitude(player,target);
}
if(att<0&&!current.isLinked()){
return -get.attitude(player,target)*0.8;
}
}
});
},
},
},
},
bilibili_yuanjun:{
image:"ext:活动武将/bilibili_yuanjun.png",
fullskin:true,
type:"trick",
enable:true,
selectTarget:[1,2],
filterTarget:function (card,player,target){
return target!=player&&target.maxHp>target.hp;
},
content:function (){
target.recover();
},
ai:{
order:7,
basic:{
useful:function (card){
var player = _status.event.player;
var fs = game.filterPlayer(function(current){
return current!=player&&get.attitude(player,current)>0;
});
return 6*fs.length;
},
value:function (card,player){
var fs = game.filterPlayer(function(current){
return current!=player&&get.attitude(player,current)>0;
});
return 6*fs.length;
},
},
result:{
target:function (player,target){
return target.maxHp - target.hp;
},
},
},
},
bilibili_tunliang:{
image:"ext:活动武将/bilibili_tunliang.png",
fullskin:true,
type:"trick",
enable:true,
selectTarget:[1,3],
filterTarget:true,
content:function (){
target.draw();
},
ai:{
order:5,
basic:{
useful:function (card){
var player = _status.event.player;
var fs = game.filterPlayer(function(current){
return get.attitude(player,current)>0;
});
if(fs==1)return 1;
if(fs==2)return 2.5;
if(fs==3)return 4.5;
return 0;
},
value:function (card){
var player = _status.event.player;
var fs = game.filterPlayer(function(current){
return get.attitude(player,current)>0;
});
if(fs==1)return 1;
if(fs==2)return 2.5;
if(fs==3)return 4.5;
return 0;
},
},
result:{
target:1,
},
tag:{
draw:1,
},
},
},
},
skill:{
},
translate:{
bilibili_yuanjun:"援军",
bilibili_tunliang:"屯粮",
bilibili_lulitongxin:"勠力同心",
bilibili_yuanjun_info:"出牌阶段，对至多两名其他角色使用。目标角色各回复1点体力。",
bilibili_tunliang_info:"出牌阶段，对至多三名角色使用。目标角色各摸一张牌。",
bilibili_lulitongxin_info:"出牌阶段，对己方所有角色或敌方所有角色使用。令己方所有被横着的角色各摸一张牌或横置敌方所有角色。",
},
list:[["heart","3","bilibili_tunliang"],["heart","4","bilibili_tunliang"],["heart","13","bilibili_yuanjun"],["spade","1","bilibili_yuanjun"],["heart","1","bilibili_yuanjun"],["club","7","bilibili_lulitongxin"],["club","13","bilibili_lulitongxin"],["spade","7","bilibili_lulitongxin"]],
};
});
lib.config.all.cards.push('GuanDuCard');
if(!lib.config.cards.contains('GuanDuCard')) lib.config.cards.remove('GuanDuCard');
lib.translate['GuanDuCard_card_config']='官渡之战';
//合纵抗秦
game.import('card',function(){
return {
name:'hezongkangqincard',
connect:true,
card:{
shangyangbianfa:{
image:'ext:活动武将/shangyangbianfa.jpg',
audio:true,
global:'shangyangbianfa_dying',
type:'trick',
enable:true,
filterTarget:function (card,player,target){
return target!=player;
},
selectTarget:1,
content:function (){
'step 0'
var num=[1,2].randomGet();
target.damage(num).type='shangyangbianfa';
},
ai:{
basic:{
order:5,
useful:1,
value:5.5,
},
result:{
target:-1.5,
},
tag:{
damage:1,
},
},
fullimage:true,
},
zhenlongchangjian:{
type:'equip',
subtype:'equip1',
distance:{
attackFrom:-1,
},
ai:{
basic:{
equipValue:2,
},
},
skills:['zhenlongchangjian_skill'],
image:'ext:活动武将/zhenlongchangjian.jpg',
fullimage:true,
},
chuanguoyuxi:{
image:'ext:活动武将/chuanguoyuxi.jpg',
type:'equip',
subtype:'equip5',
ai:{
basic:{
equipValue:7.5,
},
},
skills:['chuanguoyuxi_skill'],
fullimage:true,
},
/*
qinnu:{
image:'ext:活动武将/qinnu.jpg',
vanish:true,
type:'equip',
subtype:'equip1',
skills:['qinnu_skill'],
destroy:'daqin_nushou',
distance:{attackFrom:-8},
enable:true,
ai:{
basic:{
useful:2,
equipValue:1,
},
},
fullimage:true,
},
tongpao_bagua:{
image:'ext:活动武将/tongpao_bagua.jpg',
vanish:true,
type:'equip',
subtype:'equip2',
skills:['bagua_skill'],
destroy:['daqin_nushou','daqin_qibing','daqin_bubing'],
enable:true,
ai:{
basic:{
equipValue:7.5,
useful:2,
},
},
fullskin:true,
},
tongpao_baiyin:{
onLose:function (){
player.recover();
},
filterLose:function (card,player){
if(player.hasSkillTag('unequip2')) return false;
return player.hp<player.maxHp;
},
tag:{
recover:1,
},
image:'ext:活动武将/tongpao_baiyin.jpg',
vanish:true,
type:'equip',
subtype:'equip2',
skills:['baiyin_skill'],
destroy:['daqin_nushou','daqin_qibing','daqin_bubing'],
enable:true,
ai:{
order:9.5,
equipValue:function (card,player){
if(player.hp==player.maxHp) return 5;
if(player.countCards('h','baiyin')) return 6;
return 0;
},
basic:{
equipValue:5,
useful:2,
},
},
fullskin:true,
},
tongpao_renwang:{
image:'ext:活动武将/tongpao_renwang.jpg',
vanish:true,
type:'equip',
subtype:'equip2',
skills:['renwang_skill'],
destroy:['daqin_nushou','daqin_qibing','daqin_bubing'],
enable:true,
ai:{
basic:{
equipValue:7.5,
},
},
fullskin:true,
},
tongpao_tengjia:{
image:'ext:活动武将/tongpao_tengjia.jpg',
cardnature:'fire',
vanish:true,
type:'equip',
subtype:'equip2',
destroy:['daqin_nushou','daqin_qibing','daqin_bubing'],
enable:true,
ai:{
equipValue:function (card,player){
if(player.hasSkillTag('maixie')&&player.hp>1) return 0;
if(player.hasSkillTag('noDirectDamage')) return 10;
if(get.damageEffect(player,player,player,'fire')>=0) return 10;
var num=3-game.countPlayer(function(current){
return get.attitude(current,player)<0;
});
if(player.hp==1) num+=4;
if(player.hp==2) num+=1;
if(player.hp==3) num--;
if(player.hp>3) num-=4;
return num;
},
basic:{
equipValue:3,
},
},
skills:['tengjia1','tengjia2','tengjia3'],
fullskin:true,
},
*/
},
skill:{
},
translate:{
shangyangbianfa:'商鞅变法',
shangyangbianfa_info:'出牌阶段，对一名其他角色使用。对其造成随机1~2点伤害，若该角色进入濒死状态，则进行判定，若判定结果为黑色，则该角色本次濒死状态无法向其他角色求桃。',
zhenlongchangjian:'真龙长剑',
zhenlongchangjian_info:'你于一回合内使用的第一张非延时性锦囊无法被无懈可击抵消。',
chuanguoyuxi:'传国玉玺',
chuanguoyuxi_info:'出牌阶段开始时，你可以从南蛮入侵、万箭齐发、桃园结义、五谷丰登中选择一张使用。',
qinnu:'秦弩',
qinnu_info:'当你使用【杀】指定一个目标后，你令其防具无效，你的出牌阶段内，可使用的【杀】数量+1；当你失去装备区里的【秦弩】，你令此牌销毁。',
tongpao_bagua:'八卦阵',
tongpao_bagua_info:'每当你需要使用（或打出）一张【闪】时，你可以进行一次判定：若结果为红色，则视为你使用（或打出）了一张【闪】；若为黑色，则你仍可从手牌里使用（或打出）。当此装备离开你的装备区时，你令此牌销毁。',
tongpao_baiyin:'白银狮子',
tongpao_baiyin_info:'锁定技，每次你受到伤害时，最多承受1点伤害（防止多余的伤害）；当你失去装备区里的白银狮子时，你回复1点体力。当此装备离开你的装备区时，你令此牌销毁。',
tongpao_renwang:'仁王盾',
tongpao_renwang_info:'锁定技，黑色的【杀】对你无效。当此装备离开你的装备区时，你令此牌销毁。',
tongpao_tengjia:'藤甲',
tongpao_tengjia_info:'锁定技，【南蛮入侵】、【万箭齐发】和普通【杀】对你无效。每次受到火焰伤害时，该伤害+1。当此装备离开你的装备区时，你令此牌销毁。',
},
list:[['spade','5','shangyangbianfa'],['spade','7','shangyangbianfa'],['spade','9','shangyangbianfa'],['heart','2','zhenlongchangjian'],['heart','7','chuanguoyuxi']],
};
});
lib.config.all.cards.push('hezongkangqincard');
if(!lib.config.cards.contains('hezongkangqincard')) lib.config.cards.remove('hezongkangqincard');
lib.translate['hezongkangqincard_card_config']='合纵抗秦';
};
},help:{},get:{
},config:{
FenJianXianA:{
clear:true,
name:'<li>武将/武将包',
},
cike_chaoshikong:{
name:'删除超时空密探守卫技能',
intro:'若开启此选项，伍六七和梅花十三会于游戏开始/加入游戏时失去技能“圣护”和“灵守”',
init:false,
},
TheOldCharacter:{
name:'旧版替换',
intro:'开启此选项后，璀璨星河武将包中的部分sp武将将会被替换为原版技能',
init:false,
},
keymove:{
name:'移动所在包',
intro:'三国党福音，将神武将包中的键社武将和国战多势力武将冈崎汐移至DIY包',
init:false,
},
FenJianXianB:{
clear:true,
name:'<li>功能',
},
AudioPlay:{
name:'部分扩展包武将阵亡配音',
intro:'若安装有换肤扩展建议关闭，否则建议开启',
init:true,
},
choosegroup:{
name:'势力选择',
intro:'开启此选项后，游戏开始时，非魏蜀吴群晋__势力角色须选择魏蜀吴群晋__势力中的一个作为自己的势力（boss战时神势力除外）<br><li>注：如果开启合纵抗秦武将包，则以上划线处添加秦势力',
init:false,
},
OpenTheGame:{
name:'游戏播报',
intro:'游戏播报包括以下内容<br><li>游戏开始播报<br><li>属性伤害播报<br><li>失去体力上限播报<br><li>高伤害播报<br><li>医术高超和妙手回春播报<br><li>击杀播报<br>注：所有播报均会为十周年UI进行让步',
init:true,
},
FenJianXianC:{
clear:true,
name:'<li>关于特效',
},
FenJianXianCA:{
clear:true,
name:'点击查看注意事项',
onclick:function(){
alert('下面两个特效摘自扩展特效扩展，适用于没有使用十周年UI/特效测试的玩家，使用十周年UI/特效测试会使特效会被遮挡，因此不建议开启');
},
},
extension_Animate_card:{
name:'卡牌特效',
init:false,
},
extension_Animate_equip:{
name:'刘禅【享乐】技能特效',
init:false,
},
/*
HuoDong_update:{
name:'查看更新公告',
intro:'查看更新公告',
init:'show',
item:{
show:'显示',
ok:'关闭',
},
},
ClearFavorate:{
clear:true,
name:'清除收藏武将名单<暂时有bug>',
onclick:function(){
lib.config.favouriteCharacter=[];
alert('已成功清除所有已收藏武将');
},
},
*/
FenJianXianZ:{
clear:true,
name:'<li>关于扩展',
},
DaoRuPeiJian:{
name:'导入【活动配件】',
clear:true,
onclick:function(){
alert('导入配件中');
game.removeExtension('活动配件');
game.DaoRuPeiJian();
},
},
DeleteHuoDong:{
name:'删除【活动武将】和【活动配件】',
clear:true,
onclick:function(){
game.removeExtension('活动武将');
game.removeExtension('活动配件');
alert('扩展已删除');
game.reload();
},
},
},package:{
character:{
character:{
},
translate:{
},
},
card:{
card:{
},
translate:{
},
list:[],
},
skill:{
skill:{
},
translate:{
},
},
intro:'新人制作扩展，希望大家支持。<br>新人技术不足，希望大家包涵。<br>本扩展需要同活动武将配件一起使用，第一次进入游戏后若没有此扩展则会自动导入。每次更新此扩展后请在扩展界面点击下载新的活动武将配件。<br>欢迎大家加群支持<br><img style=width:238px src='+lib.assetURL+'extension/活动武将/HuoDong_QQ.jpg>',
author:'萌新',
diskURL:'',
forumURL:'',
version:'',
changelog:`
新人制作扩展，希望大家支持。<br>新人技术不足，希望大家包涵。
//<br>·记牌器暂时不进行实装（再修一段时间的bug）
<br>·愉快的假期结束了，开始转为鸽子形态
<br>·调整伍六七，梅花十三的初始体力为3--6中的随机值
<br>·将TW何进〖谋诛〗修改为网络爆料版
<br>·将旱魃移动至其他武将的奥运武将栏，并精分皇甫嵩
<br>·修复OL朱灵〖急陷〗技能数判定问题
<br>·添加武将吾彦，国战野心家钟会，公孙渊，孙綝，司马昭
<br>To be continued...
`,
//新人制作扩展，希望大家支持，新人技术不足，希望大家包涵。
//壹、贰、叁、肆、伍、陆、柒、捌、玖、拾
},files:{'character':[],'card':[],'skill':[]}}})