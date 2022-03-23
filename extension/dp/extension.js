game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"『斗破包』",content:function(config,pack){
    //新建势力名——火影忍者//
    lib.group.push('斗破弱化包');
    lib.translate.斗破弱化包='⛦';
    //十周年UI武将名背景色——无夜月//
    var tenUi=document.createElement('style');
    tenUi.innerHTML=".player>.camp-zone[data-camp='斗破弱化包']>.camp-back {background: linear-gradient(to bottom, rgb(0,139,139), rgb(0,139,139));}";
    //十周年UI武将势力颜色——无夜月//
    tenUi.innerHTML+=".player>.camp-zone[data-camp='斗破弱化包']>.camp-name {text-shadow: 0 0 5px rgb(0,139,139), 0 0 10px rgb(0,139,139), 0 0 15px rgb(0,139,139);}";
    document.head.appendChild(tenUi);
    //分扩&评级——提伯牙//
    lib.translate.dpcqr="『斗破包』";
    lib.translate.shundiy="瞬の新风向";
    lib.characterSort['mode_extension_『斗破包』']={
        'dpcqr':["dpcqr_wangchen","dpcqr_xiaoyan","dpcqr_xiaoxuner","dpcqr_xiaoyixian","dpcqr_nalanyanran","dpcqr_yunyun","dpcqr_meidusha","dpcqr_xiaozhan","dpcqr_xiaoli","dpcqr_yaolao","dpcqr_xiaomei","dpcqr_yafei","dpcqr_mushe","dpcqr_haibodong","dpcqr_hanfeng","dpcqr_wuhao","dpcqr_linxiuya"],
        'shundiy':["shundiy_zhongli","shundiy_jieluohuoliante","shundiy_dianwei","shundiy_dadaliya","shundiy_zhaoyun","shundiy_huatuo"],
    },
    //if(lib.rank){
    //junk-a平凡(普通) common-a+普通(精品) race-s精品(极品) epic-ss史诗(绝品) legend-sss传说(传说)//
        lib.rank.rarity.junk.addArray([]);
        //lib.rank.rarity.common.addArray(['dpcqr_nalanyanran','dpcqr_yunyun','dpcqr_xiaoyan','dpcqr_xiaoxuner','dpcqr_xiaoyixian','dpcqr_xiaomei','shundiy_jieluohuoliante','dpcqr_mushe','shundiy_dianwei','shundiy_huatuo']);
        lib.rank.rarity.rare.addArray(['dpcqr_xiaozhan','dpcqr_linxiuya','dpcqr_yafei','dpcqr_meidusha','shundiy_dianwei','dpcqr_hanfeng','dpcqr_wuhao']);
        lib.rank.rarity.epic.addArray(['dpcqr_yaolao','dpcqr_xiaoli','dpcqr_haibodong','shundiy_zhaoyun']);
        lib.rank.rarity.legend.addArray(['dpcqr_wangchen','shundiy_zhongli','shundiy_dadaliya']);
    //}
    //字符符号——看破一切//
    lib.init.css(lib.assetURL + 'extension/『斗破包』/css/', 'font-awesome');
    //数字选择器——看破一切 player.chooseCount(说明,始值,范围,ai); player.chooseCount("",0,[0~99],function(){return 0;});//
    lib.element.player.chooseCount = function() {
        var next = game.createEvent('chooseCount');
        for (var i = 0; i < arguments.length; i++) {
            if (typeof arguments[i] == 'number') {
                next.num = arguments[i];
            } else if (typeof arguments[i] == 'string') {
                next.str = arguments[i];
            } else if (typeof arguments[i] == 'object') {
                next.arr = arguments[i];
            } else if (typeof arguments[i] == 'function') {
                next.ai = arguments[i];
            }
        }
        next.player = this;
        next.setContent('chooseCount');
        return next;
    }
    lib.element.content.chooseCount = function() {
        'step 0'
        if (event.isMine()) {
            if (!event.num) event.num = 0;
            if (!event.arr) event.arr = [0, 99];
            if (!event.str) event.str = '请选择一个数字';
            if (event.arr[0] > event.arr[1]) event.arr = [0, 99];
            event.dialog = ui.create.dialog(event.str);
            event.count = ui.create.control('-', event.num, '+');
            var newcount = event.count.cloneNode(true);
            var list = newcount.childNodes;
            list[0].style.width = '20px';
            list[0].onclick = function() {
                event.num--;
                if (event.num < event.arr[0]) event.num = event.arr[1];
                list[1].innerHTML = event.num;
            }
            list[1].style.width = '60px';
            list[1].onclick = function() {
                newcount.parentNode.removeChild(newcount);
                event.dialog.parentNode.removeChild(event.dialog);
                game.resume();
            }
            list[2].style.width = '20px';
            list[2].onclick = function() {
                event.num++;
                if (event.num > event.arr[1]) event.num = event.arr[0];
                list[1].innerHTML = event.num;
            }
            event.count.parentNode.replaceChild(newcount, event.count);
            ui.updatec();
            game.pause();
        } else {
            event.result = 'ai';
        }
        'step 1'
        if (event.result == 'ai') {
            if (event.ai) {
                event.choice = event.ai(player);
            } else {
                event.choice = false;
            }
            if (typeof event.choice == 'boolean') {
                if (event.choice) {
                    event.choice = event.arr[1];
                } else {
                    event.choice = event.arr[0];
                }
            }
            if (typeof event.choice != 'number') event.choice = event.arr[0];
            if (event.choice < event.arr[0] || event.choice > event.arr[1]) event.choice = event.arr[0];
            event.result = {
                num: event.choice
            };
        } else {
            ui.updatec();
            event.result = {
                num: event.num	
            }
        }
    }
    //称号——破界(提伯牙)//
    lib.characterTitle.dpcqr_wangchen='妄言空论';
    lib.characterTitle.dpcqr_xiaoyan='少年英杰';
    lib.characterTitle.dpcqr_xiaoxuner='古族少女';
    lib.characterTitle.dpcqr_xiaoyixian='白衣如仙';
    lib.characterTitle.dpcqr_nalanyanran='天之骄女';
    lib.characterTitle.dpcqr_yunyun='风华绝代';
    lib.characterTitle.dpcqr_meidusha='蛇人族女王';
    lib.characterTitle.dpcqr_xiaozhan='萧家族长';
    lib.characterTitle.dpcqr_xiaoli='萧门之主';
    lib.characterTitle.dpcqr_yaolao='古老的灵魂';
    lib.characterTitle.dpcqr_xiaomei='莲中妩蕊';
    lib.characterTitle.dpcqr_yafei='金之女皇';
    lib.characterTitle.dpcqr_mushe='狼头佣兵团长';
    lib.characterTitle.dpcqr_haibodong='冰皇';
    lib.characterTitle.dpcqr_hanfeng='背恩忘义';
    lib.characterTitle.dpcqr_wuhao='血剑修罗';
    
    lib.characterTitle.shundiy_zhongli='尘世闲游';
    lib.characterTitle.shundiy_jieluohuoliante='边塞骑士';
    lib.characterTitle.shundiy_dianwei="古之恶来";
    lib.characterTitle.shundiy_dadaliya="「公子」";
    lib.characterTitle.shundiy_zhaoyun="虎威将军";
    lib.characterTitle.shundiy_huatuo="悬壶济世";
    
    //属性——某群友分享//
    lib.nature=['ice','wind','thunder','gold','wood','water','fire','soil','poison','diffice','diffwind','diffthunder','diffgold','diffwood','diffwater','difffire','diffsoil','diffpoison'];
    lib.translate.ice='<font color=#87CEFA>冰</font>';
    lib.nature.add('ice');
    lib.linked.add('ice');
    lib.translate.wind='<font color=#00FFFF>风</font>';
    lib.nature.add('wind');
    lib.linked.add('wind');
    lib.translate.thunder='<font color=#8A2BE2>雷</font>';
    lib.nature.add('thunder');
    lib.linked.add('thunder');
    lib.translate.gold='<font color=#FF8C00>金</font>';
    lib.nature.add('gold');
    lib.linked.add('gold');
    lib.translate.wood='<font color=#00FF70>木</font>';
    lib.nature.add('wood');
    lib.linked.add('wood');
    lib.translate.water='<font color=#1E90FF>水</font>';
    lib.nature.add('water');
    lib.linked.add('water');
    lib.translate.fire='<font color=#FF0000>火</font>';
    lib.nature.add('fire');
    lib.linked.add('fire');
    lib.translate.soil='<font color=#F4A460>土</font>';
    lib.nature.add('soil');
    lib.linked.add('soil');
    lib.translate.poison='<font color=#008400>毒</font>';
    lib.nature.add('poison');
    lib.linked.add('poison');
    lib.translate.diffice='<font color=#87CEFA>异火</font>';
    lib.nature.add('diffice');
    lib.linked.add('diffice');
    lib.translate.diffwind='<font color=#00FFFF>异火</font>';
    lib.nature.add('diffwind');
    lib.linked.add('diffwind');
    lib.translate.diffthunder='<font color=#8A2BE2>异火</font>';
    lib.nature.add('diffthunder');
    lib.linked.add('diffthunder');
    lib.translate.diffgold='<font color=#FF8C00>异火</font>';
    lib.nature.add('diffgold');
    lib.linked.add('diffgold');
    lib.translate.diffwood='<font color=#00FF70>异火</font>';
    lib.nature.add('diffwood');
    lib.linked.add('diffwood');
    lib.translate.diffwater='<font color=#1E90FF>异火</font>';
    lib.nature.add('diffwater');
    lib.linked.add('diffwater');
    lib.translate.difffire='<font color=#FF0000>异火</font>';
    lib.nature.add('difffire');
    lib.linked.add('difffire');
    lib.translate.diffsoil='<font color=#F4A460>异火</font>';
    lib.nature.add('diffsoil');
    lib.linked.add('diffsoil');
    lib.translate.diffpoison='<font color=#008400>异火</font>';
    lib.nature.add('diffpoison');
    lib.linked.add('diffpoison');
    
    //刷新//
    lib.skill._dpcqr_update={
        trigger:{
            global:["useCardBegin","recoverBegin","damageBegin"],
        },
        forced:true,
        priority:20210202145098989898989898989,
        content:function(){
            player.update();
        },
    }
    //提示框——看破一切||输入框——学生(滑稽仙人)//
    lib.extensionMenu['extension_『斗破包』'].edit={
        name:"<br>编辑此扩展",
        clear:true,
        onclick:function(){
            if(confirm('警告！检测到游戏数据异常，是否重启游戏解决？')){
                game.reload();
            }else if(confirm('警告！检测到游戏数据异常，是否重启游戏解决？')){
                game.reload();
            }else if(confirm('警告！检测到游戏数据异常，是否重启游戏解决？')){
                game.reload();
            }else{
                var tempA=window.prompt("请问作者是何时入坑无名杀的？","");
                if(tempA=="2020.03.13"){
                    if(confirm('警告！检测到游戏数据异常，是否重启游戏解决？')){
                        if(game.editExtension&&lib.extensionPack&&lib.extensionPack["『斗破包』"]){
							game.editExtension("『斗破包』");
						}
                    }else{
                       game.reload();
                    }
                }else{
                    game.reload();
                }
            }
        },
    };
    lib.extensionMenu['extension_『斗破包』'].delete={
        name:"删除此扩展",
        clear:true,
        onclick:function(){
            
        },
    };
    
//选项——玄德鸽子包(刘玄德)//  
//羁绊系统设置选项//
if(config.dpcqr_fetter_config){
    lib.skill._dpcqr_fetter={
        trigger:{
            player:"gameDrawAfter",
        },
        forced:true,
        content:function(){
            "step 0"
            event.xiaoyan=0;event.yaolao=0;
            "step 1"
            game.filterPlayer(function(current){
                if(current.name=="dpcqr_xiaoyan"){
                    event.xiaoyan=1;
                }
                if(current.name=="dpcqr_yaolao"){
                    event.yaolao=1;
                }
            });
            "step 2"
            if(event.xiaoyan==1&&event.yaolao==1){
                game.filterPlayer(function(current){
                    if(current.name=="dpcqr_xiaoyan"){
                        current.addSkill("dpcqr_fetter_skill_shiyou");
                    }
                });
            }
        },
    }
}
    lib.translate.dpcqr_fetter="羁绊形成";
    //羁绊效果//
    lib.skill.dpcqr_fetter_skill={
        subSkill:{
            shiyou:{
                trigger:{
                    player:"damageEnd",
                },
                forced:true,
                priority:2021071043558,
                filter:function(event,player){
                    var yaolao=game.filterPlayer(function(current){
                        return current.name=="dpcqr_yaolao";
                    });
                    if(yaolao) return true;
                    return false;
                },
                content:function(){
                    game.filterPlayer(function(current){
                        if(current.name=="dpcqr_yaolao"){
                            player.gainPlayerCard(current,"h",true);
                            player.addMark("dpcqr_huolian");
                        }
                    });
                },
                mark:true,
                marktext:"佑",
                intro:{
                    name:"羁绊·师佑",
                    content:function(storage,player,skill){
                        var yaolao=game.filterPlayer(function(current){
                            return current.name=="dpcqr_yaolao";
                        });
                        return "你受到伤害后，获得 "+get.translation(yaolao)+" 的一张手牌且“莲”标记加一";
                    },
                },
            },
        },
    }
    
    lib.translate.dpcqr_fetter_skill_shiyou="师佑";
    
//属性效果设置选项//
if(config.dpcqr_nature_config){
    //属性检测//
    lib.skill._dpcqr_nature_damage={
        trigger:{
            player:"damageAfter",
        },
        forced:true,
        frequent:true,
        priority:2020082782562565599999999999999,
        filter:function(event,player){
            if(event.nature) return true;
            return false;
        },
        content:function(){
            var num=Math.random();
            if(trigger.nature=='ice'){
                if(num<=0.15){
                    trigger.player.randomDiscard('he',true);
                    trigger.player.addSkill("dpcqr_nature_ice");
                }
            }
            if(trigger.nature=='wind'){
                if(num<=0.15){
                    trigger.player.addSkill("dpcqr_nature_wind");
                }
            }
            if(trigger.nature=='thunder'){
                if(num<=0.15){
                    trigger.player.addSkill("dpcqr_nature_thunder");
                }
            }
            if(trigger.nature=='gold'){
                if(num<=0.15){
                    trigger.source.addSkill("dpcqr_nature_gold");
                }if(num<=0.15){
                    trigger.player.addSkill("dpcqr_nature_gold_debuff");
                }
            }
            if(trigger.nature=='wood'){
                if(num<=0.25){
                    trigger.player.addSkill("dpcqr_nature_wood");
                }
            }
            if(trigger.nature=='water'){
                if(num<=0.15){
                    trigger.source.draw();
                    trigger.source.addSkill("dpcqr_nature_water");
                }
            }
            if(trigger.nature=='fire'){
                if(num<=0.25){
                    trigger.player.addSkill("dpcqr_nature_fire");
                }
            }
            if(trigger.nature=='soil'){
                if(num<=0.15){
                    trigger.source.addSkill("dpcqr_nature_soil");
                }if(num<=0.15){
                    trigger.player.addSkill("dpcqr_nature_soil_debuff");
                }
            }
            if(trigger.nature=='poison'){
                if(num<=0.25){
                    trigger.player.addSkill("dpcqr_nature_poison");
                }
            }
        },
    }
}
    
    //属性效果//
    lib.skill.dpcqr_nature={
        subSkill:{
            ice:{
                mark:true,
                marktext:"<img src="+lib.assetURL+"extension/『斗破包』/nature/ice.png"+" width='25' height='25'>",
                intro:{
                    name:"<img src="+lib.assetURL+"extension/『斗破包』/nature/dpcqr_nature_ice.png"+" width='25' height='25'>",
                    content:"冰属性封冻状态：<br>回合结束或受到伤害前，你无法对其他角色使用牌",
                },
                trigger:{
                    player:["phaseEnd","damageEnd"],
                },
                forced:true,
                content:function(){
                    player.removeSkill("dpcqr_nature_ice");
                },
                mod:{
                    playerEnabled:function(card,player,target){
                        if(player!=target) return false;
                    },
                },
                sub:true,
            },
            wind:{
                mark:true,
                marktext:"<img src="+lib.assetURL+"extension/『斗破包』/nature/wind.png"+" width='25' height='25'>",
                intro:{
                    name:"<img src="+lib.assetURL+"extension/『斗破包』/nature/dpcqr_nature_wind.png"+" width='25' height='25'>",
                    content:"风属性缚束状态：<br>下一回合开始或受到伤害前，你无法使用或打出牌",
                },
                trigger:{
                    global:"phaseZhunbeiBefore",
                    player:"damageEnd",
                },
                forced:true,
                content:function(){
                    player.removeSkill("dpcqr_nature_wind");
                },
                mod:{
                    cardEnabled:function(card,player,target){
                        if(_status.currentPhase!=player) return false;
                    },
                    cardUsable:function(card,player,target){
                        if(_status.currentPhase!=player) return false;
                    },
                    cardRespondable:function(card,player,target){
                        if(_status.currentPhase!=player) return false;
                    },
                    cardSavable:function(card,player,target){
                        if(_status.currentPhase!=player) return false;
                    },
                },
                sub:true,
            },
            thunder:{
                mark:true,
                marktext:"<img src="+lib.assetURL+"extension/『斗破包』/nature/thunder.png"+" width='25' height='25'>",
                intro:{
                    name:"<img src="+lib.assetURL+"extension/『斗破包』/nature/dpcqr_nature_thunder.png"+" width='25' height='25'>",
                    content:"雷属性麻痹状态：<br>回合结束或受到伤害前，下一次造成的伤害减一",
                },
                trigger:{
                    source:"damageBegin",
                },
                priority:202008284775999999,
                forced:true,
                content:function(){
                    trigger.num--;
                    player.removeSkill("dpcqr_nature_thunder");
                },
                group:["dpcqr_remove_thunder"],
                sub:true,
            },
            gold:{
                mark:true,
                marktext:"<img src="+lib.assetURL+"extension/『斗破包』/nature/gold.png"+" width='25' height='25'>",
                intro:{
                    name:"<img src="+lib.assetURL+"extension/『斗破包』/nature/dpcqr_nature_gold.png"+" width='25' height='25'>",
                    content:"金属性锐化状态：<br>回合开始或受到伤害前，下一次造成的伤害加一",
                },
                trigger:{
                    source:"damageBegin",
                },
                priority:20200828576599999999,
                forced:true,
                content:function(){
                    trigger.num++;
                    player.removeSkill("dpcqr_nature_gold");
                },
                group:["dpcqr_remove_gold"],
                sub:true,
            },
            gold_debuff:{
                mark:true,
                marktext:"<img src="+lib.assetURL+"extension/『斗破包』/nature/gold_debuff.png"+" width='25' height='25'>",
                intro:{
                    name:"<img src="+lib.assetURL+"extension/『斗破包』/nature/dpcqr_nature_gold_debuff.png"+" width='25' height='25'>",
                    content:"金属性钝化状态：<br>回合开始或受到伤害前，下一次造成的伤害减一",
                },
                trigger:{
                    source:"damageBegin",
                },
                priority:202008284665599999999,
                forced:true,
                content:function(){
                    trigger.num--;
                    player.removeSkill("dpcqr_nature_gold_debuff");
                },
                group:["dpcqr_remove_gold_debuff"],
                sub:true,
            },    
            wood:{
                mark:true,
                marktext:"<img src="+lib.assetURL+"extension/『斗破包』/nature/wood.png"+" width='25' height='25'>",
                intro:{
                    name:"<img src="+lib.assetURL+"extension/『斗破包』/nature/dpcqr_nature_wood.png"+" width='25' height='25'>",
                    content:"木属性寄生状态：<br>出牌阶段结束或受到伤害前，下一次的恢复效果减一",
                },
                trigger:{
                    player:"recoverBegin",
                },
                priority:20200902676699999999,
                forced:true,
                content:function(){
                    trigger.num--;
                    player.removeSkill("dpcqr_nature_wood");
                },
                group:["dpcqr_remove_wood"],
                sub:true,
            },
            water:{
                mark:true,
                marktext:"<img src="+lib.assetURL+"extension/『斗破包』/nature/water.png"+" width='25' height='25'>",
                intro:{
                    name:"<img src="+lib.assetURL+"extension/『斗破包』/nature/dpcqr_nature_water.png"+" width='25' height='25'>",
                    content:"水属性复苏状态：<br>受到或造成伤害前，下一次恢复效果加一或在回合开始时恢复一点体力",
                },
                trigger:{
                    player:["recoverBegin"],
                },
                priority:202009034758599999999,
                forced:true,
                content:function(){
                    trigger.num++;
                    player.removeSkill("dpcqr_nature_water");
                },
                group:["dpcqr_remove_water","dpcqr_nature_waters"],
                sub:true,
            },
            waters:{
                trigger:{
                    player:["phaseBegin"],
                },
                priority:202009034758599999999,
                forced:true,
                content:function(){
                    player.recover();
                    player.removeSkill("dpcqr_nature_water");
                },
                sub:true,
            },
            fire:{
                mark:true,
                marktext:"<img src="+lib.assetURL+"extension/『斗破包』/nature/fire.png"+" width='25' height='25'>",
                intro:{
                    name:"<img src="+lib.assetURL+"extension/『斗破包』/nature/dpcqr_nature_fire.png"+" width='25' height='25'>",
                    content:"火属性灼烧状态：<br>回合开始阶段，进行一次判定，若结果为方片，则受到来自自身的一点火属性伤害",
                },
                trigger:{
                    player:"phaseBegin",
                },
                priority:202008284665599999999,
                forced:true,
                content:function(){
                    'step 0'
                    player.judge();
                    'step 1'
                    if(result.suit=="diamond"){
                        player.damage('fire',player);
                    }
                    player.removeSkill("dpcqr_nature_fire");
                },
                sub:true,
            },
            soil:{
                mark:true,
                marktext:"<img src="+lib.assetURL+"extension/『斗破包』/nature/soil.png"+" width='25' height='25'>",
                intro:{
                    name:"<img src="+lib.assetURL+"extension/『斗破包』/nature/dpcqr_nature_soil.png"+" width='25' height='25'>",
                    content:"土属性硬化状态：<br>自身造成伤害或回合开始前，下一次受到的伤害减一",
                },
                trigger:{
                    player:"damageBegin",
                },
                priority:202009027556769999999999,
                forced:true,
                content:function(){
                    trigger.num--;
                    player.removeSkill("dpcqr_nature_soil");
                },
                group:["dpcqr_remove_soil"],
                sub:true,
            },
            soil_debuff:{
                mark:true,
                marktext:"<img src="+lib.assetURL+"extension/『斗破包』/nature/soil_debuff.png"+" width='25' height='25'>",
                intro:{
                    name:"<img src="+lib.assetURL+"extension/『斗破包』/nature/dpcqr_nature_soil_debuff.png"+" width='25' height='25'>",
                    content:"土属性僵化状态：<br>自身造成伤害或下一回合开始前，下一次受到的伤害加一",
                },
                trigger:{
                    player:"damageBegin",
                },
                priority:2020090274765679999999,
                forced:true,
                content:function(){
                    trigger.num++;
                    player.removeSkill("dpcqr_nature_soil_debuff");
                },
                group:["dpcqr_remove_soil_debuff"],
                sub:true,
            },
            poison:{
                mark:true,
                marktext:"<img src="+lib.assetURL+"extension/『斗破包』/nature/poison.png"+" width='25' height='25'>",
                intro:{
                    name:"<img src="+lib.assetURL+"extension/『斗破包』/nature/dpcqr_nature_poison.png"+" width='25' height='25'>",
                    content:"毒属性中毒状态：<br>回合开始前，进行一次判定，若结果为黑桃，则流失一点体力并延续该状态，若结果为梅花，则流失一点体力",
                },
                trigger:{
                    player:"phaseBegin",
                },
                priority:20200902683739999999,
                forced:true,
                content:function(){
                    'step 0'
                    player.judge();
                    'step 1'
                    if(result.suit=="spade"){
                        player.loseHp();
                    }if(result.suit=="club"){
                        player.loseHp();
                        player.removeSkill("dpcqr_nature_poison");
                    }if(result.suit=="diamond"){
                        player.removeSkill("dpcqr_nature_poison");
                    }if(result.suit=="heart"){
                        player.removeSkill("dpcqr_nature_poison");
                    }
                },
                sub:true,
            },
        },
    }
    lib.translate.dpcqr_nature_ice="封冻";
    lib.translate.dpcqr_nature_wind="束缚";
    lib.translate.dpcqr_nature_thunder="麻痹";
    lib.translate.dpcqr_nature_gold="锐化";
    lib.translate.dpcqr_nature_gold_debuff="钝化";
    lib.translate.dpcqr_nature_wood="寄生";
    lib.translate.dpcqr_nature_water="复苏";
    lib.translate.dpcqr_nature_fire="灼烧";
    lib.translate.dpcqr_nature_soil="硬化";
    lib.translate.dpcqr_nature_soil_debuff="僵化";
    lib.translate.dpcqr_nature_poison="中毒";
    
    //效果移除//
    lib.skill.dpcqr_remove={
        subSkill:{
            ice:{
                sub:true,
            },
            wind:{
                sub:true,
            },
            thunder:{
                trigger:{
                    player:["phaseEnd","damageEnd"],
                },
                forced:true,
                priority:2020090436389999999,
                content:function(){
                    player.removeSkill("dpcqr_nature_thunder");
                },
                sub:true,
            },
            gold:{
                trigger:{
                    player:["phaseZhunbeiBefore","damageEnd"],
                },
                forced:true,
                priority:2020090647859999999,
                content:function(){
                    player.removeSkill("dpcqr_nature_gold")
                },
                sub:true,
            },
            gold_debuff:{
                trigger:{
                    player:["phaseZhunbeiBefore","damageEnd"],
                },
                forced:true,
                priority:2020090646289999999999,
                content:function(){
                    player.removeSkill("dpcqr_nature_gold_debuff")
                },
                sub:true,
            },
            wood:{
                trigger:{
                    player:["phaseUseEnd","damageEnd"],
                },
                forced:true,
                priority:2020090537494559999999999,
                content:function(){
                    player.removeSkill("dpcqr_nature_wood");
                },
                sub:true,
            },
            water:{
                trigger:{
                    player:"damageEnd",
                    source:"damageEnd",
                },
                forced:true,
                priority:2020120806586896869999999,
                content:function(){
                    player.removeSkill("dpcqr_nature_water");
                },
                sub:true,
            },
            fire:{
                sub:true,
            },
            soil:{
                trigger:{
                    source:"damageEnd",
                    player:"phaseZhunbeiBefore",
                },
                forced:true,
                priority:2020090253839399999999,
                content:function(){
                    player.removeSkill("dpcqr_nature_soil");
                },
                sub:true,
            },
            soil_debuff:{
                trigger:{
                    source:"damageEnd",
                    global:"phaseZhunbeiBegin",
                },
                forced:true,
                priority:20200902657524599999999,
                content:function(){
                    player.removeSkill("dpcqr_nature_soil_debuff");
                },
                sub:true,
            },
            poison:{
                sub:true,
            },
        },
    }
    
    //异火属性//
    lib.skill.dpcqr_diff_nature={
        subSkill:{
            damage:{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                priority:2020091753259999999,
                content:function(){
                    var natures=["diffice","diffwind","diffthunder","diffgold","diffwood","diffwater","difffire","diffsoil","diffpoison"].randomGet();
                    trigger.nature=natures;
                },
                sub:true,
            },
            ice:{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                priority:20200918535869999999,
                content:function(){
                    var natures=["diffice"].randomGet();
                    trigger.nature=natures;
                },
                sub:true,
            },wind:{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                priority:2020091865589999999,
                content:function(){
                    var natures=["diffwind"].randomGet();
                    trigger.nature=natures;
                },
                sub:true,
            },thunder:{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                priority:20200918356259999999,
                content:function(){
                    var natures=["diffthunder"].randomGet();
                    trigger.nature=natures;
                },
                sub:true,
            },gold:{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                priority:202009185585399999999,
                content:function(){
                    var natures=["diffgold"].randomGet();
                    trigger.nature=natures;
                },
                sub:true,
            },wood:{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                priority:20200918256589999999,
                content:function(){
                    var natures=["diffwood"].randomGet();
                    trigger.nature=natures;
                },
                sub:true,
            },water:{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                priority:202009186543599999999,
                content:function(){
                    var natures=["diffwater"].randomGet();
                    trigger.nature=natures;
                },
                sub:true,
            },fire:{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                priority:20200918675386999999999,
                content:function(){
                    var natures=["difffire"].randomGet();
                    trigger.nature=natures;
                },
                sub:true,
            },soil:{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                priority:202009187935899999,
                content:function(){
                    var natures=["diffsoil"].randomGet();
                    trigger.nature=natures;
                },
                sub:true,
            },poison:{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                priority:202009187628999999,
                content:function(){
                    var natures=["diffpoison"].randomGet();
                    trigger.nature=natures;
                },
                sub:true,
            },
        },
    }
    lib.skill._dpcqr_different_damage={
        trigger:{
            player:"damageAfter",
        },
        forced:true,
        priority:20200914,
        filter:function(event,player){
            if(event.nature) return true;
            return false;
        },
        content:function(){
            if(trigger.nature=="diffice"){
                trigger.player.randomDiscard('he',true);
                trigger.player.addSkill("dpcqr_nature_ice");
            }
            if(trigger.nature=="diffwind"){
                trigger.player.addSkill("dpcqr_nature_wind");
            }
            if(trigger.nature=="diffthunder"){
                trigger.player.addSkill("dpcqr_nature_thunder");
            }
            if(trigger.nature=="diffgold"){
                trigger.source.addSkill("dpcqr_nature_gold");
                trigger.player.addSkill("dpcqr_nature_gold_debuff");
            }
            if(trigger.nature=="diffwood"){
                trigger.player.addSkill("dpcqr_nature_wood")
            }
            if(trigger.nature=="diffwater"){
                trigger.source.addSkill("dpcqr_nature_water");
            }
            if(trigger.nature=="difffire"){
                trigger.player.addSkill("dpcqr_nature_fire");
            }
            if(trigger.nature=="diffsoil"){
                trigger.source.addSkill("dpcqr_nature_soil");
                trigger.player.addSkill("dpcqr_nature_soil_debuff");
            }
            if(trigger.nature=="diffpoison"){
                trigger.player.addSkill("dpcqr_nature_poison");
            }
            'step 1'
            trigger.player.update();
        },
    }
    
    //贯穿//
    lib.skill.dpcqr_nohujia={
        ai:{
            nohujia:true,
        },
    }
    
    //卡牌//
    //海之心甲//
    lib.skill.dpcqr_haizhixinjia_skill={
        subSkill:{
            damage:{
                trigger:{
                    player:"damageEnd",
                },
                forced:true,
                content:function(){
                    player.changeHujia();
                    if(player.countCards("h")<player.maxHp-player.hp){
                        player.draw();
                    }
                },
                sub:true,
            },
            recover:{
                trigger:{
                    player:"phaseUseBegin",
                },
                forced:true,
                filter:function(event,player){
                    return player.hujia>0;
                },
                content:function(){
                    "step 0"
                    event.num=player.hujia;
                    player.recover(event.num);
                    "step 1"
                    player.changeHujia(-event.num);
                },
                sub:true,
            },
        },
    }
    lib.translate.dpcqr_haizhixinjia_skill="海之心甲";
    //覆岩丹//
    lib.skill.dpcqr_fuyandan={
        subSkill:{
            use:{
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                priority:2021012408995619898989898,
                filter:function(event,player){
                    return player.storage.dpcqr_fuyandan_use>0;
                },
                content:function(){
                    trigger.num--;
                    if(!player.hasSkill("dpcqr_fuyandan_buff")){ 
                        player.addSkill("dpcqr_fuyandan_buff");
                    }
                    player.addMark("dpcqr_fuyandan_buff");
                    player.removeMark("dpcqr_fuyandan_use");
                    player.update();
                },
                sub:true,
            },
            buff:{
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                priority:-202101240899563,
                filter:function(event,player){
                    return player.storage.dpcqr_fuyandan_buff>0;
                },
                content:function(){
                    var name=trigger.player.name;
                    if(!trigger.player.hasSkill("dpcqr_fuyandan_debuff")){ 
                        trigger.player.addSkill("dpcqr_fuyandan_debuff");
                    }
                    if(!player.countMark(name)){
                        player.addMark(name);
                    }
                    trigger.player.addMark("dpcqr_fuyandan_debuff");
                    player.removeMark("dpcqr_fuyandan_buff");
                    player.update();
                },
                intro:{
                    name:"覆岩丹",
                    content:function(storage,player,skill){
                        var num=Math.min(3,player.maxHp);
                        return "已有 "+storage+"/"+num+"层覆岩效果";
                    },
                },
                marktext:"<font color=#F4A460>岩</font>",
                group:["dpcqr_fuyandan_removebuff"],
                sub:true,
            },
            debuff:{
                trigger:{
                    global:"phaseJieshuBegin",
                },
                forced:true,
                priority:-202101240899567,
                filter:function(event,player){
                    var name=player.name;
                    if(player.storage.dpcqr_fuyandan_debuff>0&&event.player.countMark(name)) return true;
                },
                content:function(){
                    "step 0"
                    event.name=player.name;
                    event.num=player.storage.dpcqr_fuyandan_debuff;
                    player.damage("soil",event.num,trigger.player);
                    "step 1"
                    trigger.player.removeMark(event.name,player.countMark(event.name));
                    player.removeMark("dpcqr_fuyandan_debuff",event.num);
                    player.removeSkill("dpcqr_fuyandan_debuff");
                    player.update();
                },
                intro:{
                    name:"覆岩丹",
                    content:function(storage,player,skill){
                        var name=player.name;
                        var target=game.filterPlayer(function(current){
                            return current.countMark(name);
                        });
                        return get.translation(target)+" 的回合结束时，受到来自其的"+storage+"点土属性伤害";
                    },
                },
                marktext:"<font color=#fire>岩</font>",
                sub:true,
            },
            maxHp:{
                trigger:{
                    player:"phaseBefore",
                },
                forced:true,
                priority:20210124089753128,
                filter:function(event,player){
                    return player.storage.dpcqr_fuyandan_maxHp>0;
                },
                content:function(){
                    event.num=player.storage.dpcqr_fuyandan_maxHp;
                    player.maxHp+=event.num;
                    player.removeMark("dpcqr_fuyandan_maxHp",event.num);
                    player.removeSkill("dpcqr_fuyandan_maxHp");
                },
                sub:true,
            },
            removebuff:{
                trigger:{
                    player:"phaseAfter",
                },
                priority:20210125074582,
                forced:true,
                content:function(){
                    player.removeMark("dpcqr_fuyandan_buff",player.storage.dpcqr_fuyandan_buff);
                    player.removeSkill("dpcqr_fuyandan_buff");
                },
                sub:true,
            },
        },
    }
    lib.translate.dpcqr_fuyandan_maxHp="覆岩丹";
    //沐灵丹//
    lib.skill.dpcqr_mulingdan_skill={
        trigger:{
            player:"damageBegin",
        },
        forced:true,
        priority:-2021020208735498,
        content:function(){
            "step 0"
            player.update();
            event.number=trigger.num;
            event.hp=player.maxHp-player.hp;
            "step 1"
            if(event.number>event.hp){
                var num=event.number-event.hp;
                player.recover(event.number-num);
                player.changeHujia(num);
            }else{
                player.recover(event.number);
            }
            trigger.source.addSkill("dpcqr_nature_wood");
            "step 2"
            trigger.num=null;
            "step 3"
            player.removeSkill("dpcqr_mulingdan_skill");
        },
        ai:{
            threaten:2,
        },
    }
    lib.translate.dpcqr_mulingdan_skill="沐灵丹";
    //推波助澜//
    lib.skill.dpcqr_tuibozhulan_skill={
        subSkill:{
            recover:{
                trigger:{
                    global:"recoverEnd",
                },
                forced:true,
                filter:function(event,player){
                    if(player.hasUsableCard('dpcqr_tuibozhulan')&&event.player!=event.source&&event.player.hp<=player.hp) return true;
                    return false;
                },
                content:function(){
                    "step 0"
                    player.addMark("dpcqr_tuibozhulan_recover");
                    "step 1"
                    var next=player.chooseToUse(trigger.player);
                    next.set('prompt','是否使用【推波助澜】令'+get.translation(trigger.player)+'再 恢复一点体力 ？');
                    next.set('filterCard',function(card){
                        if(get.name(card)=='dpcqr_tuibozhulan') return true;
                    });
                    next.set('ai',function(card,player,target){
                        return get.attitude(player,target)>0;
                    });
                    "step 2"
                    player.removeMark("dpcqr_tuibozhulan_recover");
                },
                sub:true,
            },
            draw:{
                trigger:{
                    global:"drawEnd",
                },
                forced:true,
                filter:function(event,player){
                    if(player.hasUsableCard('dpcqr_tuibozhulan')&&event.player!=event.source&&event.player.countCards('h')<=player.countCards('h')) return true;
                    return false;
                },
                content:function(){
                    "step 0"
                    player.addMark("dpcqr_tuibozhulan_draw");
                    "step 1"
                    var next=player.chooseToUse(trigger.player);
                    next.set('prompt','是否使用【推波助澜】令'+get.translation(trigger.player)+'再 摸一张牌 ？');
                    next.set('filterCard',function(card){
                        if(get.name(card)=='dpcqr_tuibozhulan') return true;
                    });
                    next.set('ai',function(card,player,target){
                        return get.attitude(player,target)>0;
                    });
                    "step 2"
                    player.removeMark("dpcqr_tuibozhulan_draw");
                },
                sub:true,
            },
            gain:{
                trigger:{
                    global:"gainMaxHpEnd",
                },
                forced:true,
                filter:function(event,player){
                    if(player.hasUsableCard('dpcqr_tuibozhulan')&&event.player!=event.source&&event.player.maxHp<=player.maxHp) return true;
                    return false;
                },
                content:function(){
                    "step 0"
                    player.addMark("dpcqr_tuibozhulan_gain");
                    "step 1"
                    var next=player.chooseToUse(trigger.player);
                    next.set('prompt','是否使用【推波助澜】令'+get.translation(trigger.player)+'再 增加一点体力上限 ？');
                    next.set('filterCard',function(card){
                        if(get.name(card)=='dpcqr_tuibozhulan') return true;
                    });
                    next.set('ai',function(card,player,target){
                        return get.attitude(player,target)>0;
                    });
                    "step 2"
                    player.removeMark("dpcqr_tuibozhulan_gain");
                },
                sub:true,
            },
            lose:{
                trigger:{
                    global:"loseHpEnd",
                },
                forced:true,
                filter:function(event,player){
                    if(player.hasUsableCard('dpcqr_tuibozhulan')&&event.player!=event.source&&event.player.hp<=player.hp) return true;
                    return false;
                },
                content:function(){
                    "step 0"
                    player.addMark("dpcqr_tuibozhulan_lose");
                    "step 1"
                    var next=player.chooseToUse(trigger.player);
                    next.set('prompt','是否使用【推波助澜】令'+get.translation(trigger.player)+'再 流失一点体力 ？');
                    next.set('filterCard',function(card){
                        if(get.name(card)=='dpcqr_tuibozhulan') return true;
                    });
                    next.set('ai',function(card,player,target){
                        return get.attitude(player,target)<0;
                    });
                    "step 2"
                    player.removeMark("dpcqr_tuibozhulan_lose");
                },
                sub:true,
            },
            discard:{
                trigger:{
                    global:"discardEnd",
                },
                forced:true,
                filter:function(event,player){
                    if(player.hasUsableCard('dpcqr_tuibozhulan')&&event.player!=event.source&&event.player.countCards('h')<=player.countCards('h')) return true;
                    return false;
                },
                content:function(){
                    "step 0"
                    player.addMark("dpcqr_tuibozhulan_discard");
                    "step 1"
                    var next=player.chooseToUse(trigger.player);
                    next.set('prompt','是否使用【推波助澜】令'+get.translation(trigger.player)+'再 弃置一张牌 ？');
                    next.set('filterCard',function(card){
                        if(get.name(card)=='dpcqr_tuibozhulan') return true;
                    });
                    next.set('ai',function(card,player,target){
                        return get.attitude(player,target)<0;
                    });
                    "step 2"
                    player.removeMark("dpcqr_tuibozhulan_discard");
                },
                sub:true,
            },
            maxHp:{
                trigger:{
                    global:"loseMaxHpEnd",
                },
                forced:true,
                filter:function(event,player){
                    if(player.hasUsableCard('dpcqr_tuibozhulan')&&event.player!=event.source&&event.player.maxHp<=player.maxHp) return true;
                    return false;
                },
                content:function(){
                    "step 0"
                    player.addMark("dpcqr_tuibozhulan_maxHp");
                    "step 1"
                    var next=player.chooseToUse(trigger.player);
                    next.set('prompt','是否使用【推波助澜】令'+get.translation(trigger.player)+'再 减少一点体力上限 ？');
                    next.set('filterCard',function(card){
                        if(get.name(card)=='dpcqr_tuibozhulan') return true;
                        return false;
                    });
                    next.set('ai',function(card,player,target){
                        return get.attitude(player,target)<0;
                    });
                    "step 2"
                    player.removeMark("dpcqr_tuibozhulan_maxHp");
                },
                sub:true,
            },
            rec:{
                trigger:{
                    global:"recoverAfter",
                },
                forced:true,
                filter:function(event,player){
                    if(event.player==event.source&&event.player.hp<=player.hp) return false;
                    return true;
                },
                content:function(){
                    if(trigger.player.hp>player.hp){
                        player.recover();
                    }
                    player.removeSkill("dpcqr_tuibozhulan_skill_rec");
                },
                sub:true,
            },
            dra:{
                trigger:{
                    global:"drawAfter",
                },
                forced:true,
                filter:function(event,player){
                    if(event.player==event.source&&event.player.countCards("h")<=player.countCards("h")) return false;
                    return true;
                },
                content:function(){
                    if(trigger.player.countCards("h")>player.countCards("h")){
                        player.draw();
                    }
                    player.removeSkill("dpcqr_tuibozhulan_skill_dra");
                },
                sub:true,
            },
            gai:{
                trigger:{
                    global:"gianMaxHpAfter",
                },
                forced:true,
                filter:function(event,player){
                    if(event.player==event.source&&event.player.maxHp<=player.maxHp) return false;
                    return true;
                },
                content:function(){
                    if(trigger.player.maxHp>player.maxHp){
                        player.gainMaxHp();
                    }
                    player.removeSkill("dpcqr_tuibozhulan_skill_gai");
                },
                sub:true,
            },
            los:{
                trigger:{
                    global:"loseHpAfter",
                },
                forced:true,
                filter:function(event,player){
                    if(event.player==event.source&&event.player.hp<=player.hp) return false;
                    return true;
                },
                content:function(){
                    if(trigger.player.hp>player.hp){
                        player.loseHp();
                    }
                    player.removeSkill("dpcqr_tuibozhulan_skill_los");
                },
                sub:true,
            },
            dis:{
                trigger:{
                    global:"discardAfter",
                },
                forced:true,
                filter:function(event,player){
                    if(event.player==event.source&&event.player.countCards("h")<=player.countCards("h")) return false;
                    return true;
                },
                content:function(){
                    if(trigger.player.countCards("h")>player.countCards("h")){
                        player.chooseToDiscard(true);
                    }
                    player.removeSkill("dpcqr_tuibozhulan_skill_dis");
                },
                sub:true,
            },
            max:{
                trigger:{
                    global:"loseMaxHpAfter",
                },
                forced:true,
                filter:function(event,player){
                    if(event.player==event.source&&event.player.maxHp<=player.maxHp) return false;
                    return true;
                },
                content:function(){
                    if(trigger.player.maxHp>player.maxHp){
                        player.loseMaxHp();
                    }
                    player.removeSkill("dpcqr_tuibozhulan_skill_max");
                },
                sub:true,
            },
        },
    }
    //玄重尺//
    lib.skill.dpcqr_xuanzhongchi_skill={
        trigger:{
            player:"useCardToPlayered",
        },
        frequent:true,
        filter:function(event,player){
            return event.card.name=="sha";
        },
        check:function(event,player){
            return get.attitude(player,event.player)<=0;
        },
        prompt:"是否发动【玄重尺】<br>①弃置一张手牌，令此杀无视目标防具且需额外打出一张【闪】响应<br>②摸一张牌并重置本回合内的出杀次数，且本回合的手牌上限减一",
        content:function(){
            'step 0'
            if(player.countCards("h")<1){
                player.chooseControl('摸牌','取消').set("ai",function(event,player){
                    if(player.hp>=2&&player.countCards("h",{name:"sha"})>0) return '摸牌';
                    return '取消';
                });
            }else{
                player.chooseControl('弃牌','摸牌','取消').set("ai",function(event,player){
                    if(player.hp>=2&&player.countCards("h",{name:"sha"})>0) return '摸牌';
                    if(player.countCards("h")>=3||trigger.target.countCards("h")>0&&trigger.target.hp+trigger.target.hujia<=1) return '弃牌';
                });
            }
            'step 1'
            var A='弃牌';
            var B='摸牌';
            if(result.control==A){
                player.chooseToDiscard('h',true).set("ai",function(card){
                    return 6-get.value(card);
                });
                event.goto(2);
            }
            if(result.control==B){
                player.draw();
                player.getStat().card.sha=0;
                player.addSkill("dpcqr_xuanzhongchi_skill_max");
                player.addMark("dpcqr_xuanzhongchi_skill_max");
                event.finish();
            }
            'step 2'
            trigger.target.addTempSkill('qinggang2');
            var next=trigger.target.chooseToRespond({name:'shan'});
            next.autochoose=lib.filter.autoRespondShan;
            next.ai=function(card){
                if(trigger.target.num('h','shan')>1){
                    return ai.get.unuseful2(card);
                }
                return -1;
            };
            "step 3"
            if(result.bool==false){
                trigger.untrigger();
                trigger.directHit=true;
            }
        },
        subSkill:{
            max:{
                trigger:{
                    player:"phaseJieshuBegin",
                },
                forced:true,
                content:function(){
                    player.removeMark("dpcqr_xuanzhongchi_skill_max",player.storage.dpcqr_xuanzhongchi_skill_max);
                    player.removeSkill("dpcqr_xuanzhongchi_skill_max");
                },
                mod:{
                    maxHandcard:function (player,num){
                        var number=player.storage.dpcqr_xuanzhongchi_skill_max;
                        return num-=number;
                    },
                },
                sub:true,
            },
        },
    }
    lib.translate.dpcqr_xuanzhongchi_skill="玄重尺";
},precontent:function(){
    
},help:{},config:{"dpcqr_fetter_config":{"name":"【羁绊系统】—未完善","intro":"设置羁绊系统，重启生效<br>关闭后，若单局游戏中出现拥有羁绊效果的武将，将不会获得武将之间的羁绊技能<br><br>〖师佑〗：<br>〈锁定技〉你受到伤害后，获得 药老 的一张手牌且“莲”标记加一","init":true,"unfrequent":true},"dpcqr_nature_config":{"name":"【属性效果】","intro":"<font color=red>建议开启</font><br>设置属性伤害后的特殊效果，重启生效<br>关闭后属性伤害将不会触发［灼烧］等特殊效果并降低扩内部分武将的整体强度","init":true,"unfrequent":true},"dpcqr_kzsm":{"name":"【扩展说明】","init":"kzsm0","unfrequent":true,"item":{"kzsm0":"⛦","kzsm1":"【伤害＆概念】：<br>『异火』『属性』（<font color=#87CEFA>冰</font> <font color=#00FFFF>风</font> <font color=#8A2BE2>雷</font> <font color=#FF8C00>金</font> <font color=#00FF70>木</font> <font color=#1E90FF>水</font> <font color=#FF0000>火</font> <font color=#F4A460>土</font> <font color=#008400>毒</font>）<br>『<font color=#800000>制裁</font>』『<font color=#C0C0C0>真伤</font>』『<font color=#FFFF00>贯穿</font>』『追加』『总牌数』<br><br><br>","kzsm2":"【属性效果】<br>『异火』—特殊火焰伤害<br>例，<font color=#00FF70>异火</font> <font color=#FF8C00>异火</font><br>（分别为木属性异火与金属性异火，游戏中<br>以文字颜色区分，由异火造成的属性伤害100%进<br>入状态。鉴于其对游戏平衡影响的特殊性，<br>暂不开放相关卡牌）<br><br>","kzsm3":"『冰属性』（<font color=#87CEFA>冰霜</font>）<br>受到此伤害的角色有概率进入封冻状态<br>（随机弃置一张牌且回合结束或受到伤害前无<br>法对他人使用卡牌）<br>概率：15%<br><br>","kzsm4":"『风属性』（<font color=#00FFFF>烈风</font>）<br>受到此伤害的角色有概率进入缚束状态<br>（下一回合开始或受到伤害前，无法使用或打<br>出牌）<br>概率：15%<br><br>","kzsm5":"『雷属性』（<font color=#8A2BE2>雷电</font>）<br>受到此伤害的角色有概率进入麻痹状态<br>（回合结束或受到伤害前，下一次造成的伤害<br>减一）<br>概率：15%<br><br>","kzsm6":"『金属性』（<font color=#FF8C00>阳金</font>）<br>造成此伤害的角色有概率进入锐化状态<br>（回合开始或受到伤害前，下一次造成的伤害<br>加一）<br>受到此伤害的角色有概率进入钝化状态<br>（回合开始或受到伤害前，下一次造成的伤害<br>减一<br>概率：15%<br><br>","kzsm7":"『木属性』（<font color=#00FF70>藤木</font>）<br>受到此伤害的角色有概率进入寄生状态<br>（出牌阶段结束或受到伤害前，下一次恢复效果<br>减一）<br>概率：25%<br><br>","kzsm8":"『水属性』（<font color=#1E90FF>激流</font>）<br>造成此伤害的角色有概率进入复苏状态<br>（摸一张牌，受到或造成伤害前，下一次恢复效<br>果加一或在回合开始时恢复一点体力）<br>概率：15%<br><br>","kzsm9":"『火属性』（<font color=#FF0000>火焰</font>）<br>受到此伤害的角色有概率进入灼烧状态<br>（回合开始阶段，进行一次判定，若结果为方<br>片则受到来自自身的一点火属性伤害）<br>概率：25%<br><br>","kzsm10":"『土属性』（<font color=#F4A460>砾岩</font>）<br>造成此伤害的角色有概率进入硬化状态<br>（自身造成伤害或回合开始前，下一次受到的伤<br>害减一）<br>受到此伤害的角色有概率进入僵化状态<br>（自身造成伤害或下一回合开始前，下一次受到<br>的伤害加一）<br>概率：15%<br><br>","kzsm11":"『毒属性』（<font color=#008400>淬毒</font>）<br>该属性不会触发某些技能效果，受到此伤害的角<br>色有概率进入中毒状态<br>（回合开始前进行一次判定，若结果为黑桃则流<br>失一点体力并延续该状态，若结果为梅花，则<br>流失一点体力）<br>概率：25%<br><br><br>","kzsm12":"【概念】<br>『<font color=#800000>制裁</font>』—赋值效果<br>不会直接引用为某一伤害特性，而作为效果呈现。<br>（例，你的所造成的伤害改为<font color=#800000>制裁</font>效果，<br>具体解释比较麻烦，详见局内情况）<br><br>","kzsm13":"『<font color=#C0C0C0>真伤</font>』—神圣伤害<br>与毒属性相同，不会触发某些技能效果；可附带<br>别的属性<br>（例，你对一名角色造成一点<font color=#FF0000>火属性</font><font color=#C0C0C0>真实伤害</font>）<br><br>","kzsm14":"『<font color=#FFFF00>贯穿</font>』—无视护甲<br>无视目标护甲的伤害<br><br>","kzsm15":"『追加』—状态增益<br>在现有的伤害或效果基础上追加某属性效果<br>（例：追加<font color=#FF0000>火焰</font>效果。<br>则造成伤害后，目标进入［灼烧］状态）<br><br>","kzsm16":"『总牌数』—手牌与装备区里的牌数之和<br><br>","kzsm17":"『羁绊系统』—武将之间的羁绊效果（尚未完善）<br>长按【羁绊系统】查看效果,现有<br>〖师佑〗萧炎&药老—萧炎<br><br>"}},"dpcqr_gxrz":{"name":"【更新日志】","init":"gxrz0","unfrequent":true,"item":{"gxrz0":"⛦","gxrz19":"2021.10.10『2.8.7.23』<br>新增武将『林修崖』<br>『小医仙』又双叒叕调整<br>〖医仙〗标记消耗调整至2，原1<br>〖毒散〗由原先的［麻痹］改成了［中毒］<br>〖厄难〗重做，史诗级加强<br>修复『海波东』技能<br>〖霜爆〗获取卡牌异常的问题<br>『钟离』技能〖地星〗加强<br>由伤害值减一调整为免伤<br>优化了以下技能的操作手感<br>〖暗劲〗〖天炎〗〖噬咬〗〖权策〗〖雷厉〗<br>〖清妩〗〖天星〗〖敛财〗〖疏财〗〖修罗〗<br>〖医仙〗<br>优化了【推波助澜】&【玄重尺】的AI<br>替换了【玄重尺】【海之心甲】【元素斩】的图片<br>（感谢 欧尼斯特·渣诚 大佬）<br>","gxrz18":"2021.07.18『2.7.7.22』<br>新增武将『吴昊』，『瞬华佗』<br>开放概念【羁绊系统】（现有〖师佑〗）<br>调整武将『韩枫』技能〖弑师〗<br>触发机制修改并降低了被标记角色的收益<br>加强武将『赵云』技能〖虎威〗<br>提升了技能发动率与苟命可能<br>补全了技能〖医仙〗的AI，不再智障了<br>优化了技能〖依随〗的AI，不再脑残了<br>修复技能〖妖媚〗条件角色效果异常的问题<br>修复技能〖冰甲〗减伤触发异常的问题<br>修复了因版本更新所遗留的部分bug<br><br>","gxrz17":"2021.05.25『2.6.7.20』<br>新增武将『韩枫』，『瞬赵云』<br>修复了武将『达达利亚』技能〖尽灭〗<br>发动技能后不摸牌的问题<br>调整武将『萧媚』技能〖清妩〗<br>由 （翻至背面） 改为 （翻面）<br>修改武将『小医仙』技能〖医仙〗及其AI<br>机制修改且效果平调，加强使用率与苟命可能<br>修复武将『美杜莎』技能〖蛇皇〗<br>攻防距离异常的问题<br>调整武将『钟离』技能〖武神〗〖地星〗<br>增加技能之间的联动性，并对效果略做调整<br>增强武将『杰洛』的所有技能效果<br>优化异火相关属性的表现规则<br>优化【扩展说明】的排版<br>修改技能描述规则并修复部分描述问题<br>修复已知bug并添加了新的特性<br><br>","gxrz16":"⛦2021.04.25『2.5.7.18』<br>修改了更新版号规则 （代+更新数+卡牌+武将）<br>优化了【更新日志】的排版<br>新增武将『海波东』，『达达利亚』<br>削弱武将『穆蛇』技能『凝纱』<br>修改了标记获取方式且设置了上限<br>提高武将『美杜莎』技能『蛇皇』的优先度<br>(感谢 欧尼斯特·渣诚 大佬的反馈)<br>修复了武将『雅妃』技能〖妖媚〗<br>实际效果与描述不符的bug<br>增添武将『钟离』技能〖天星〗<br>文字效果动画（花里胡哨了一点）<br>提高了触发元素效果的概率，各上调5%<br>修改了部分武将的能力评级<br>替换部分卡牌的图片(感谢 欧尼斯特·渣诚 大佬)<br><br>","gxrz15":"⛦2021.04.04『2.4』<br>完善武将『穆蛇』<br>“瞬の新风向”新增武将『典韦』<br>增加了部分武将的能力评级显示(详见扩内)<br>武将『小医仙』技能〖医仙〗加强，且<br>技能〖厄难〗的触发优先度下调<br>优化武将『萧炎』技能〖暗劲〗的结算方式<br>优化部分武将的标记描述情况<br>修复了武将『钟离』技能〖天星〗<br>效果与描述不符的问题<br>修改了卡牌【玄重尺】的使用AI及操作方式<br>删改了部分武将的简介描述<br>修复部分已知并增添了未知的bug<br><br>","gxrz14":"⛦2021.02.25『2.3』<br>武将『萧媚』重做并优化其技能操作体验<br>新增武将『雅妃』，武将『穆蛇』预测<br>新增卡牌【玄重尺】<br>武将『萧薰儿』技能〖燕返〗加强<br>武将『小医仙』技能〖厄难〗调整<br>『美杜莎』武将图替换，且<br>技能〖噬咬〗与〖蛇皇〗调整<br>武将『萧战』整体技能调整，救场能力削弱<br>武将『萧炎』技能〖火莲〗下部（双击武将）<br>补充【佛怒火莲】的卡牌效果描述<br>增添描述概念：“总牌数”（手牌与装备之和）<br>重新定义“追加”描述的概念：<br>例：追加火焰效果<br>（即将造成伤害时，对目标造成一点火焰伤害，<br>并令其恢复一点体力）原<br>（造成伤害后，目标进入灼烧状态）现<br>优化部分技能或卡牌的标记描述情况<br>修改并重新划分部分武将的评级<br>修复武将『杰洛』技能〖凌锋〗的增伤bug<br>优化部分武将技能AI<br>修复部分已知并增添了未知的bug<br><br>","gxrz13":"⛦2021.02.11『2.2』<br>新增卡牌【助波推澜】<br>“瞬の新风向”新增武将『杰洛·霍兰特』<br>添加【属性效果】选项，默认开启<br>属性效果标签的文字现已图片化，详见局内<br>武将『萧厉』技能〖噬生〗<br>削弱了过牌及输出能力且由<br>原来的四体力变为五体力<br>武将『药老』技能〖虚灵〗<br>加强了保命与输出能力以及组合技发动率<br>武将『萧战』技能〖狮罡〗<br>削弱了受到锦囊牌伤害后的过牌效果<br>武将『萧媚』技能〖清妩〗<br>将自身第二次弃牌改为自身弃置来源区域牌<br>定义部分武将评级<br>重新定义了［复苏］状态<br>（摸一张牌，回合开始或造成伤害前，<br>下一次恢复效果加一）原效果<br>（摸一张牌，受到或造成伤害前，下<br>一次恢复效果加一或在回合开始时恢复<br>一点体力）新效果<br>修复已知bug及描述异常或残缺的问题<br>调整部分技能AI并优化部分操作体验<br><br>","gxrz12":"⛦2021.02.02『2.1』<br>新增卡牌【海之心甲】【沐灵丹】<br>添加分扩写法且新增副扩“瞬の新风向”<br>（感谢 提伯牙 提供的方法）<br>其中含一名武将『钟离』<br>添加所有武将名下的称号<br>修复卡牌【覆岩丹】的结算时机问题<br>并增加了对于效果来源的判定<br>修复武将『萧炎』衍生牌【佛怒火莲】<br>伤害属性异常的bug<br>修改或调整了部分武将的技能效果<br>或描述及自身整体均衡性<br>（萧炎 熏儿 嫣然 医仙 萧战 药老）<br>优化部分武将AI判定<br><br>","gxrz11":"⛦2021.01.25『2.0』<br><font color=#fire>据测试版更新170天后，首次发布！！</font><br>完善武将『萧媚』，新增卡牌【覆岩丹】<br>自2.1版本开始，3.1版本之前<br>将会陆续更新装备卡牌等<br>新武将可能会暂且搁置<br>修复了属性效果触发时的概率bug<br>（感谢 看破一切 大佬的帮助）<br>修改了部分属性触发效果的时机<br>修复武将『忘尘』技能〖幻殇〗<br>有时无法被触发的bug<br>修复武将『萧战』技能〖权策〗<br>有时会报弹窗的bug（不影响游戏）<br>调整了部分武将的嘲讽值与AI<br>调整了卡牌【元素斩】的数量<br><br>","gxrz10":"⛦2021.01.18『1.9』<br>新增武将『药老』，武将『萧媚』预测<br>新增技能效果概念——追加<br>（追加某属性效果）：<br>例：追加火焰效果<br>（造成一点火焰伤害并恢复一点体力）<br>（现版本可见『药老』技能〖授业〗）<br>修复当前已知并增添了未知的bug<br>武将『萧薰儿』技能〖天炎〗加强<br>（感谢 白雪琴 的反馈）<br>增强了自身的收益及目标影响<br>武将『纳兰嫣然』调整<br>提升了技能的摸牌与整体收益<br>（感谢 白雪琴 的反馈）<br>调整了武将『萧厉』技能〖雷厉〗<br>的效果发动顺序<br>修改了卡牌【回气丹】的图片<br><br>","gxrz9":"⛦2021.01.01『1.8』<br>完善武将『萧厉』<br>修复武将『萧战』技能〖狮罡〗<br>选择目标异常的问题<br>修复卡牌【回气丹】摸牌的bug并更改描述<br>武将『萧战』整体技能略调整<br>降低了其的操作难度并提升了可玩性<br>修复了『萧炎』使用技能〖暗劲〗时<br>自身标记计算异常的问题<br>同时增加其〖火莲〗的目标选择数量<br>武将『小医仙』技能〖医仙〗AI优化<br>并降低了其自身的摸牌收益<br><br>","gxrz8":"⛦2020.12.25『1.7』<br>完善武将『萧战』，武将『萧厉』预测<br>修复武将『美杜莎』技能〖噬咬〗ai的bug<br>（感谢 离罗 大佬的反馈）<br>武将『萧炎』『小医仙』『云韵』『美杜莎』调整<br>具体情况详情见局内效果<br>（其实是懒得写）<br>衍生牌【佛怒火莲】效果加强<br>修复了当前已知并增添了未知的bug<br>调整卡牌【回气丹】对于濒死角色的收益<br>添加武将『美杜莎』的部分技能台词<br><br>","gxrz7":"⛦2020.12.08『1.6』<br>完善武将『美杜莎』，武将『萧战』预测<br>修复武将『云韵』技能〖旋舞〗<br>强制选择目标数量的bug<br>技能〖陨杀〗的部分效果重做<br>更新日志排版调整<br>添加卡牌【回气丹】<br>修复武将『萧薰儿』技能〖燕返〗<br>伤害来源判定异常的bug<br>调整了部分属性效果的相关时机<br>重新定义了<font color=#1E90FF>水属性</font>效果所带来的收益<br>为武将『云韵』添加了出牌倾向ai<br><br>","gxrz6":"⛦2020.11.29『1.5』<br>完善武将『云韵』<br>武将『美杜莎』预测<br>修复武将『忘尘』技能〖幻殇〗<br>回合外弃光牌有时无法触发技能的bug<br>武将『萧薰儿』技能〖燕返〗加强<br>增加了自身收益<br>武将『小医仙』技能〖医仙〗<br>增加了摸牌收益<br>技能〖厄难〗添加标记数限制<br>调整了部分武将技能AI<br><br>","gxrz5":"⛦2020.11.20『1.4』<br>新增武将『纳兰嫣然』<br>武将『云韵』预测<br>武将『萧炎』技能〖暗劲〗<br>标记效果现可叠加触发<br>添加『小医仙』部分技能台词<br><br>","gxrz4":"⛦2020.11.15『1.3』<br>调整了部分武将台词<br>新增武将『小医仙』<br>武将『萧炎』技能〖暗劲〗重做<br>武将『忘尘』部分技能AI加强<br>技能〖幻殇〗加强<br>武将『萧薰儿』技能〖秘法〗〖天炎〗调整<br>修复技能〖天炎〗手牌上限的bug<br>调整了部分属性效果触发的优先级<br>将卡牌【属性杀】更名为【元素斩】<br><br>","gxrz3":"⛦2020.09.20『1.2』<br>完善武将『萧薰儿』<br>调整了武将『萧炎』的〖火莲〗技能AI<br>修复［异火］属性触发时机异常的bug<br>已知<font color=#FF0000>武将图片丢失</font>的问题—<font color=#3CB371>已解决</font><br>新增已知武将技能台词<br>调整势力图标由“穹”改为“⛦”<br>调整十周年UI武将势力适配颜色<br><br>","gxrz2":"⛦2020.09.19『1.1』<br>武将『萧薰儿』预测<br>完善并调整武将『萧炎』<br>完善［异火］相关的属性以及触发效果<br>修复［毒］属性无法触发效果的bug<br>调整了【属性杀】卡牌的数量<br>添加技能专属卡牌【佛怒火莲】<br><br>","gxrz1":"⛦2020.09.13『1.0』<br>首次内测，测试属性触发效果<br>完善武将『忘尘』<br>武将『萧炎』预测<br>"}}},package:{
    character:{
        character:{
            "dpcqr_wangchen":["male","斗破弱化包",3,["dpcqr_fuhui","dpcqr_konglun","dpcqr_huanshang"],["des:妄言空论——忘尘    编号:000<br><br>  “寒风鼓瑟携尘去，功过两沦悴心肠。梦逝形萧现苍茫，朝阳年茂已魂殇”<br><br>  进攻(伤害+爆发)：D C B [A] S<br> 防御(减伤+抗压)：D [C] B A S<br> 恢复(回血+苟命)：D C [B] A S<br> 过牌(摸牌+用牌)：D C [B] A S<br> 辅助(控场+状态)：D [C] B A S<br><br>  笔名瞬，卑微的本扩展作者，看他不爽可以给他来几下（放过他吧，他还只是个孩纸）"]],
            "dpcqr_xiaoyan":["male","斗破弱化包",4,["dpcqr_anjing","dpcqr_huolian"],["des:少年英杰——萧炎    编号:001<br><br>  “三十年河东，三十年河西，莫欺少年穷！”<br><br>  进攻(伤害+爆发)：D C B [A] S<br> 防御(减伤+抗压)：[D] C B A S<br> 恢复(回血+苟命)：D [C] B A S<br> 过牌(摸牌+用牌)：D C [B] A S<br> 辅助(控场+状态)：D C B [A] S<br><br>  萧炎（自称“炎帝”）是天蚕土豆所著小说《斗破苍穹》的男主角（以及衍生作品中的客串角色）他是家族百年内最年轻的斗者，加玛帝国黑岩城最年轻的二品炼药师，而立之年晋升斗帝。 萧炎四岁练气，十二岁成为斗者，却因药尘灵魂在母亲的遗物古戒中吸收他的斗气，导致连续三年功力倒退。后拜药尘为师，双帝之战中击败魂天帝，封印他千载万世，拯救天下苍生"]],
            "dpcqr_xiaoxuner":["female","斗破弱化包",3,["dpcqr_yanfan","dpcqr_mifa"],["des:古族少女——萧薰儿    编号:002<br><br>  “挑战你，只是他说想看见我耀眼的一面，不过可惜，他却是没能看见。”<br><br>  进攻(伤害+爆发)：D C [B] A S<br> 防御(减伤+抗压)：D C [B] A S<br> 恢复(回血+苟命)：D C [B] A S<br> 过牌(摸牌+用牌)：D C [B] A S<br> 辅助(控场+状态)：D C [B] A S<br><br>  萧薰儿，天蚕土豆所著异世大陆类玄幻小说《斗破苍穹》及其衍生作品的女主角之一。其为古族千金，天之骄女，古族近千年内斗帝血脉觉醒最完美者，拥有异火榜排名第四的金帝焚天炎。萧薰儿个性冷漠但不失温柔，善良不失执着，实力强横，对待他人态度疏离清冷，唯对萧炎温柔体贴，善解人意"]],
            "dpcqr_xiaoyixian":["female","斗破弱化包",3,["dpcqr_yixian","dpcqr_dusan","dpcqr_enan"],["des:白衣如仙——小医仙    编号:003<br><br>  “这个世界亏欠我的，会不会有人来弥补我呢？”<br><br>  进攻(伤害+爆发)：[D] C B A S<br> 防御(减伤+抗压)：D C B [A] S<br> 恢复(回血+苟命)：D C [B] A S<br> 过牌(摸牌+用牌)：D [C] B A S<br> 辅助(控场+状态)：D C B [A] S<br><br>  小医仙是天蚕土豆所著玄幻小说《斗破苍穹》的女主角之一，萧炎的红颜知己之一，体质为厄难毒体，修炼《七彩毒经》，食毒修炼、万毒不侵、通体毒气。小医仙是萧炎在魔兽山脉历练时认识的女孩，因为“厄难毒体”遭追杀，后被萧炎救出并帮其结成毒丹，大结局时独自回到青山镇行医，后被萧炎接到乌坦城一起居住"]],
            "dpcqr_nalanyanran":["female","斗破弱化包",4,["dpcqr_feixv","dpcqr_luoyao"],["des:天之骄女——纳兰嫣然      编号:004<br><br>  “我的人生，理应由我自己做主！被别人安排好的生活，我不需要！”<br><br>  进攻(伤害+爆发)：D C B [A] S<br> 防御(减伤+抗压)：D [C] B A S<br> 恢复(回血+苟命)：D C [B] A S<br> 过牌(摸牌+用牌)：D C [B] A S<br> 辅助(控场+状态)：[D] C B A S<br><br>  纳兰嫣然，玄幻小说《斗破苍穹》及其衍生作品中的女主角之一，云岚宗少宗主。 纳兰嫣然养尊处优，傲气十足。她曾与萧炎指腹为婚，自作主张前往萧家退婚，在三年之约中知晓了萧炎便是岩枭后爱上了萧炎，后来追随老师云韵率花宗强者前往蛮荒古域寻求菩提古树，遭遇天冥宗，几乎被灭，为萧炎所救"]],
            "dpcqr_yunyun":["female","斗破弱化包",3,["dpcqr_fenghua","dpcqr_xuanwu","dpcqr_yunsha"],["des:风华绝代——云韵      编号:005<br><br>  “与君相遇不相识，何苦相识空相忆…”<br><br>  进攻(伤害+爆发)：D C B A [S]<br> 防御(减伤+抗压)：[D] C B A S<br> 恢复(回血+苟命)：D [C] B A S<br> 过牌(摸牌+用牌)：D C [B] A S<br> 辅助(控场+状态)：D [C] B A S<br><br>  云韵是玄幻小说《斗破苍穹》中的角色，为云岚宗第九代宗主、纳兰嫣然的老师。云韵于魔兽山脉邂逅萧炎并产生好感，因在萧家与云岚宗的争斗中偏向萧炎而被云卸去宗主之位，宗门被萧炎灭后离开了加玛帝国。萧炎曾多次救她于水火之中，使其彻底放下了萧炎毁掉云岚宗的仇怨，后率领花宗加入天府联盟，与萧炎共同抵抗魂殿"]],
            "dpcqr_meidusha":["female","斗破弱化包",3,["dpcqr_shiyao","dpcqr_shehuang","dpcqr_guyi"],["des:蛇人族女王——美杜莎      编号:006<br><br>  “说了多少次了！要叫我女王大人！！”<br><br>  进攻(伤害+爆发)：D C B [A] S<br> 防御(减伤+抗压)：D [C] B A S<br> 恢复(回血+苟命)：D C [B] A S<br> 过牌(摸牌+用牌)：D C [B] A S<br> 辅助(控场+状态)：D C B [A] S<br><br>  美杜莎，又名彩鳞，天蚕土豆《斗破苍穹》女主角之一，美艳无双，加玛帝国塔戈尔大沙漠中蛇人部落女王，因得到异火青莲地心火招来古河为首的队伍与萧炎前来抢夺，在进化为上古异兽“七彩吞天蟒”后被萧炎收养，灵魂被压制。曾因萧炎炼化异火失控而失身于萧炎，失身于萧炎以后，多次帮助萧炎脱离死亡边境，渐渐地对萧炎有复杂的感情，后坐镇炎盟。已为萧炎生有一女，名为萧潇。在解决炎盟危机后与萧炎办了一场简单的婚礼，之后和萧炎返回星陨阁。在斗破苍穹中，最后和萧炎，萧薰儿一同来到大千世界"]],
            "dpcqr_xiaozhan":["male","斗破弱化包",4,["dpcqr_shigang","dpcqr_quance"],["des:萧家族长——萧战    编号:007<br><br>  “雏鹰已长，当空而舞！”<br><br>  进攻(伤害+爆发)：D C [B] A S<br> 防御(减伤+抗压)：D [C] B A S<br> 恢复(回血+苟命)：D C [B] A S<br> 过牌(摸牌+用牌)：D C B [A] S<br> 辅助(控场+状态)：D C B A [S]<br><br>  由于漫画原著的萧战图片作者实在是接受不了，这里引用了药老的图（有句话叫做：“一日为师终身为父”，既然萧战等于萧炎他爹，药老等于萧炎他爹，那么药老等于萧战，嗯，逻辑成立，完美！）<br> 萧战，天蚕土豆所著玄幻小说《斗破苍穹》中的人物，萧炎的父亲。大斗师修为，后晋升至斗皇。非常宠爱萧炎，萧炎被认为是废物的那一段时间给萧炎很大鼓励<br>萧炎的父亲，在三年之约后失踪，实为被云山勾结魂殿掳走，被关在魂界，魂族怕其死于非命，所以喂其大量丹药，以致在魂天帝以萧战性命作威胁讨要陀舍古帝玉，萧炎以陀舍古帝玉换回萧战时萧战修为晋升至斗皇，后居住于星陨阁。在萧炎晋升斗帝后体内斗帝血脉被激活，修为大涨"]],
            "dpcqr_yaolao":["male","斗破弱化包",3,["dpcqr_lenghuo","dpcqr_shouyie","dpcqr_xvling"],["des:古老的灵魂——药老    编号:009<br><br>  “这个世界才没有什么真正的强者，有的只是想要变强的人”<br><br>  进攻(伤害+爆发)：D [C] B A S<br> 防御(减伤+抗压)：D C [B] A S<br> 恢复(回血+苟命)：D C B A [S]<br> 过牌(摸牌+用牌)：D C [B] A S<br> 辅助(控场+状态)：D [C] B A S<br><br>  本名药尘，通称药老。实力斗尊时被称为药尊者，后进阶斗圣被称为药圣。小说《斗破苍穹》中重要人物，可以说是整部小说的引子，主角萧炎的师傅"]],
            "dpcqr_xiaomei":["female","斗破弱化包",4,["dpcqr_qingwu","dpcqr_yisui"],["des:莲中妩蕊——萧媚    编号:010<br><br>  “我当初真是瞎了眼，居然会喜欢上你这种废物！”<br><br>  进攻(伤害+爆发)：D [C] B A S<br> 防御(减伤+抗压)：[D] C B A S<br> 恢复(回血+苟命)：D [C] B A S<br> 过牌(摸牌+用牌)：D C [B] A S<br> 辅助(控场+状态)：D C B [A] S<br><br>  萧媚，萧家之女，人如其名，十分妩媚，而又十分清纯，这种矛盾的美，却不让人感到不适，反而让人感到如莲花一般的美。幼年因萧炎天才之名关系极好，萧炎斗气消失之后，慢慢疏远了他，萧炎斗气回复，萧媚想努力修复关系，去无法修复那宛如鸿沟般的裂痕，萧媚感到极其后悔。萧媚的天资较为出众一些，进入迦南学院修炼，后进入磐门，成为磐门的一份子"]],
            "shundiy_zhongli":["male","shen",3,["shundiy_wushen","shundiy_dixing","shundiy_tianxing"],["des:尘世闲游——钟离<br><br>  “欲买桂花同载酒，却不知故人…何日再见呢……”<br><br>  进攻(伤害+爆发)：D C [B] A S<br> 防御(减伤+抗压)：D C B A [S]<br> 恢复(回血+苟命)：D C [B] A S<br> 过牌(摸牌+用牌)：D C B [A] S<br> 辅助(控场+状态)：D [C] B A S<br><br>  钟离，游戏《原神》中的5星岩系角色，应“往生堂”邀请而来的神秘客卿。 钟离样貌俊美，举止高雅，拥有远超常人的学识。虽说来历不明，却知礼数、晓规矩。坐镇“往生堂”，能行天地万物之典仪"]],
            "dpcqr_xiaoli":["male","斗破弱化包",5,["dpcqr_leili","dpcqr_shisheng"],["des:萧门之主——萧厉      编号:008<br><br>  “收拾你们这帮爬虫！我萧厉一人足矣！！”<br><br>  进攻(伤害+爆发)：D C B A [S]<br> 防御(减伤+抗压)：[D] C B A S<br> 恢复(回血+苟命)：D [C] B A S<br> 过牌(摸牌+用牌)：D C B [A] S<br> 辅助(控场+状态)：D [C] B A S<br><br>  萧厉，天蚕土豆作品《斗破苍穹》中的人物之一，萧炎的二哥，漠铁佣兵团副团长，后在黑角域创建“萧门”，且与迦南学院的“磐门”组成联盟，磐门的学生可进入萧门进行历练，给萧门注入新鲜血液，最终经过与老牌势力的争斗，萧门成为黑角域的顶尖势力"]],
            "shundiy_jieluohuoliante":["male","qun",4,["shundiy_guhan","shundiy_lingfeng"],["des:边塞骑士——杰洛<br><br>  “我所要守护的，不仅仅是身后的这片黎明！”<br><br>  进攻(伤害+爆发)：D C B A [S]<br> 防御(减伤+抗压)：D C [B] A S<br> 恢复(回血+苟命)：[D] C B A S<br> 过牌(摸牌+用牌)：D C B [A] S<br> 辅助(控场+状态)：D C [B] A S<br><br>  杰洛，全名杰洛·霍兰特，出身于阿德斯大陆瑞琳帝国边塞附近的一个贫穷小村庄伽圣茵，有一个比自己大六岁的姐姐，但在一场悲剧中被卡乌利特的军队所杀害而他却侥幸活了下来，后被到来的帝国军队所救并陪养为后勤的一员，为了给姐姐报仇在军营中勤奋异常，成人礼后毅然加入了前线并累积下了显赫战功，后被授勋为“边塞骑士”的称号"]],
            "dpcqr_yafei":["female","斗破弱化包",3,["dpcqr_liancai","dpcqr_paimai","dpcqr_yaomei"],["des:金之女皇——雅妃      编号:011<br><br>  “我从未见过像你这般，潜力无穷，不可预知，你注定会站在群山之巅。”<br><br>  进攻(伤害+爆发)：D [C] B A S<br> 防御(减伤+抗压)：D [C] B A S<br> 恢复(回血+苟命)：D C [B] A S<br> 过牌(摸牌+用牌)：D C B A [S]<br> 辅助(控场+状态)：D C B [A] S<br><br>  雅妃（全名：米特尔·雅妃，外号“金之女皇”），天蚕土豆所著玄幻小说《斗破苍穹》以及衍生作品中的重要人物。萧炎的红颜知己之一，米特尔家族拍卖行首席拍卖师、族长，借助丹药将修为提升到了斗皇"]],
            "dpcqr_mushe":["male","斗破弱化包",3,["dpcqr_huanqiang","dpcqr_ningsha","dpcqr_fengxiang"],["des:狼头佣兵团长——穆蛇      编号:012<br><br>  “让我看看，你的义气到底有多真诚吧！”<br><br>  进攻(伤害+爆发)：D [C] B A S<br> 防御(减伤+抗压)：D C B [A] S<br> 恢复(回血+苟命)：D C [B] A S<br> 过牌(摸牌+用牌)：D C [B] A S<br> 辅助(控场+状态)：D C B [A] S<br><br>  穆蛇，是玄幻小说《斗破苍穹》的角色，实力在二星斗师，青山镇狼头佣兵团的团长，因子穆力之故结怨萧炎，后追杀萧炎致其进入魔兽山脉深处，后被萧炎所杀"]],
            "shundiy_dianwei":["male","wei","4/5",["shundiy_qiangxi","zhundiy_zhiji"],["des:古之恶来——典韦<br><br>  军中为之语曰：“帐下壮士有典君，提一双戟八十斤。”<br><br>  进攻(伤害+爆发)：D C B A [S]<br> 防御(减伤+抗压)：[D] C B A S<br> 恢复(回血+苟命)：D C [B] A S<br> 过牌(摸牌+用牌)：[D] C B A S<br> 辅助(控场+状态)：D C [B] A S<br><br>  典韦（？-197年），陈留己吾（今河南宁陵县黄岗乡己吾城村）人，东汉末年曹操麾下名将，身材魁梧，膂力过人。 本属张邈，曾单手举起牙门旗。后转投曹操，在曹操征讨吕布时被募为陷阵，表现英勇，被拜为校尉，宿卫曹操。建安二年（197年），张绣背叛曹操，典韦为保护曹操而率十余人挡叛军，击杀多人，但最终因寡不敌众而战死。小说《三国演义》中称典韦为“古之恶来”"]],
            "dpcqr_haibodong":["male","斗破弱化包",3,["dpcqr_hanwu","dpcqr_bingjia","dpcqr_shuangbao"],["des:冰皇——海波东      编号:013<br><br>  “我等你很久了，拥有异火的炼药师！”<br><br>  进攻(伤害+爆发)：D C [B] A S<br> 防御(减伤+抗压)：D C B [A] S<br> 恢复(回血+苟命)：D [C] B A S<br> 过牌(摸牌+用牌)：D C [B] A S<br> 辅助(控场+状态)：D C B A [S]<br><br>  海波东：冰皇，前一代加玛帝国十大强者之一，现为米特尔家族太上长老，为人性子孤僻自傲，极其擅长冰系斗气。因为得罪美杜莎女王被封印，与萧炎一番误会后，与主角达成交易，让主角去沙漠给他寻找能解他封印的药并且若能成功解除封印就给他一种异火的地图，萧炎和药老为其解除封印。后来萧炎用复灵子丹诱惑海波东为他做一年的免费打手。在萧炎与云岚宗冲突期间多次出手相助，后更在魂殿，云岚宗屠杀萧家时出手救下幸存者。与萧炎关系不错。实力为斗皇巅峰。天赋极佳，有望成为斗宗"]],
            "shundiy_dadaliya":["male","shen",3,["shundiy_shucai","shundiy_duanliu","shundiy_jinmie"],["des:公子——达达利亚<br><br>  “身为战士，要时刻把挑战之心系在刀尖之上。但无论胜败，都是无可替代的珍贵经历。”<br><br>  进攻(伤害+爆发)：D C B A [S]<br> 防御(减伤+抗压)：D [C] B A S<br> 恢复(回血+苟命)：D [C] B A S<br> 过牌(摸牌+用牌)：D C B [A] S<br> 辅助(控场+状态)：D C B [A] S<br><br>  达达利亚来自至冬国，是愚人众最顶层的第十一执行官“公子”，也是最年轻的执行官，他的战斗能力十分强悍，充满了对战斗的激情。在家中他有许多的兄弟姐妹，最小的弟弟不知道他的真正职位，达达利亚告诉弟弟自己是做玩具生意的。"]],
            "dpcqr_hanfeng":["male","斗破弱化包",3,["dpcqr_shishi","dpcqr_xinyan"],["des:背恩忘义——韩枫      编号:014<br><br>  “该死的药尘！要是早点把焚诀传我，我早就是大陆最强了！”<br><br>  进攻(伤害+爆发)：D C [B] A S<br> 防御(减伤+抗压)：D [C] B A S<br> 恢复(回血+苟命)：D C B A [S]<br> 过牌(摸牌+用牌)：D C [B] A S<br> 辅助(控场+状态)：D [C] B A S<br><br>  天蚕土豆的小说《斗破苍穹》中的人物，六品炼药师，药尘的大弟子，与主角萧炎为同门师兄弟。幼时受慕骨老人挑拨夺取“焚决”，在魂殿的帮助下让药尘只得以灵魂逃脱。后在风尊者的持续逼问之下，不得已离开中州躲在黑角域，借助残缺的“焚诀”成为六品炼药师并获得异火“海心焰”。“陨落心炎”爆发期间入侵内院而被萧炎重伤，后在黑角域组建黑盟与迦南相对峙。与萧炎二度交手肉身死亡后，其灵魂被魂殿救走，纳戒与躯体则被萧炎所获，后因将自己的海心焰献于魂殿尊老，从而得到一具斗宗躯体复活并晋入斗宗境界，后被萧炎再度击杀并捕获灵魂"]],
            "shundiy_zhaoyun":["male","shu",4,["shundiy_longdan","shundiy_huwei"],["des:虎威将军——赵云<br><br>  “子龙一身都是胆也”——刘备<br><br>  进攻(伤害+爆发)：D C B [A] S<br> 防御(减伤+抗压)：D C B [A] S<br> 恢复(回血+苟命)：D [C] B A S<br> 过牌(摸牌+用牌)：D C [B] A S<br> 辅助(控场+状态)：D [C] B A S<br><br>  赵云（？－229年），字子龙，常山真定人。身长八尺，姿颜雄伟，汉末三国时期蜀汉名将，与关羽、张飞并称“燕南三士”。赵云去世后，于蜀汉景耀四年（261年）被追谥为“顺平侯”，其“常胜将军”的形象在后世被广为流传"]],
            "shundiy_huatuo":["male","qun",3,["shundiy_qinxi","shundiy_zhenmai"],["des:悬壶济世——华佗<br><br>  “早睡早起，方能养生”<br><br>  进攻(伤害+爆发)：[D] C B A S<br> 防御(减伤+抗压)：[D] C B A S<br> 恢复(回血+苟命)：D C [B] A S<br> 过牌(摸牌+用牌)：D C B [A] S<br> 辅助(控场+状态)：D C B [A] S<br><br>  华佗（约公元145年－公元208年），字元化，一名旉，沛国谯县（今安徽亳州）人，东汉末年著名的医学家"]],
            "dpcqr_linxiuya":["male","斗破弱化包",4,["dpcqr_qianchan","dpcqr_lianren","dpcqr_mingfeng"],["des:狼牙统领——林修崖      编号:016<br><br>  “好吧，佳人有约，怎敢拒绝？熏儿小姐，请！”<br><br>  进攻(伤害+爆发)：D C [B] A S<br>  防御(减伤+抗压)：D C B [A] S<br>  恢复(回血+苟命)：D [C] B A S<br>  过牌(摸牌+用牌)：D C B [A] S<br>  辅助(控场+状态)：D C B A [S]<br><br>   林修崖，迦南学院强榜第二高手，实力约为七星斗皇强者，外貌十分俊朗，极具个人魅力。在内院组有自己的势力——“狼牙”。萧炎初入内院时，“狼牙”的势力极其强大，以“人少而精”著称，萧炎也因“狼牙”成员中个个实力不凡而惊叹不已。曾在强榜大赛后的表演赛中，被萧薰儿在十分钟内击败，进而对薰儿暗生情愫；后跟随过萧炎去云岚宗复仇，和萧炎之间关系不错"]],
            "dpcqr_wuhao":["male","斗破弱化包",4,["dpcqr_xuesha","dpcqr_xiuluo"],["des:血剑修罗——吴昊      编号:015<br><br>  “对手？哼，你配么？！我只对真正的强者有兴趣！”<br><br>  进攻(伤害+爆发)：D C B [A] S<br>  防御(减伤+抗压)：D [C] B A S<br>  恢复(回血+苟命)：D C B A [S]<br>  过牌(摸牌+用牌)：D [C] B A S<br>  辅助(控场+状态)：D C [B] A S<br><br>   吴昊，蚕土豆所著玄幻小说《斗破苍穹》中的人物，迦南学院执法队成员。人称“血修罗”，又因惯使一柄血色重剑，而被称作“血剑吴昊”，最终实力为斗宗巅峰。先天修炼血色斗气，性格嗜血，对萧炎的实力心服口服并发誓有一天要战胜萧炎，是个光明磊落的主。进入内院后与萧炎、萧薰儿以及琥嘉结为一个团体，关系不错"]],
        },
        translate:{
            "dpcqr_wangchen":"忘尘",
            "dpcqr_xiaoyan":"萧炎",
            "dpcqr_xiaoxuner":"萧薰儿",
            "dpcqr_xiaoyixian":"小医仙",
            "dpcqr_nalanyanran":"纳兰嫣然",
            "dpcqr_yunyun":"云韵",
            "dpcqr_meidusha":"美杜莎",
            "dpcqr_xiaozhan":"萧战",
            "dpcqr_yaolao":"药老",
            "dpcqr_xiaomei":"萧媚",
            "shundiy_zhongli":"钟离",
            "dpcqr_xiaoli":"萧厉",
            "shundiy_jieluohuoliante":"杰洛",
            "dpcqr_yafei":"雅妃",
            "dpcqr_mushe":"穆蛇",
            "shundiy_dianwei":"瞬典韦",
            "dpcqr_haibodong":"海波东",
            "shundiy_dadaliya":"达达利亚",
            "dpcqr_hanfeng":"韩枫",
            "shundiy_zhaoyun":"瞬赵云",
            "shundiy_huatuo":"瞬华佗",
            "dpcqr_linxiuya":"林修崖",
            "dpcqr_wuhao":"吴昊",
        },
    },
    card:{
        card:{
            "dpcqr_nature_sha":{
                type:"basic",
                enable:true,
                filterTarget:true,
                content:function(){
        var natures=['fire','thunder','poison','ice','wind','gold','wood','water','soil'].randomGet();
        'step 0'
        target.chooseToRespond({name:"shan"});
        'step 1'
        if(!result.bool){
            target.damage(natures,player);
        }
    },
                ai:{
                    order:7,
                    value:6,
                    useful:3,
                    result:{
                        target:-1,
                    },
                },
                fullimage:true,
            },
            "dpcqr_fonuhuolian":{
                derivation:"dpcqr_xiaoyan",
                type:"special",
                vanish:true,
                enable:true,
                filterTarget:true,
                content:function(){
        event.natures=["diffice","diffwind","diffthunder","diffgold","diffwood","diffwater","difffire","diffsoil","diffpoison"].randomGet();
        event.ntde=["dpcqr_nature_ice","dpcqr_nature_wind","dpcqr_nature_thunder","dpcqr_nature_gold_debuff","dpcqr_nature_wood","dpcqr_nature_soil_debuff","dpcqr_nature_poison"].randomGet();
        'step 0'
        player.$fullscreenpop('<font color=#FF0000>佛怒火莲</font>');
        game.delay(2.5);
        target.judge();
        'step 1'
        if(result.suit=="diamond"){
            event.goto(2);
        }if(result.suit=="heart"){
            event.goto(4);
        }if(result.suit=="spade"||result.suit=="club"){
            event.goto(5);
        }
        'step 2'
        target.damage(event.natures);
        'step 3'
        target.addSkill(event.ntde);
        event.goto(6);
        'step 4'
        target.randomDiscard("he",true);
        target.addSkill("dpcqr_nature_fire");
        target.addSkill(event.ntde);
        event.goto(6);
        'step 5'
        target.randomDiscard("he",2,true);
        event.goto(6);
        'step 6'
    },
                ai:{
                    order:9,
                    result:{
                        target:-1,
                    },
                },
                fullimage:true,
                selectTarget:1,
            },
            "dpcqr_huiqidan":{
                fullskin:true,
                type:"basic",
                cardcolor:"red",
                toself:true,
                enable:function(card,player){
        return player.hp<=player.maxHp;
    },
                savable:true,
                selectTarget:-1,
                filterTarget:function(card,player,target){
        return target==player&&target.hp<=target.maxHp;
    },
                modTarget:function(card,player,target){
        return target.hp<=target.maxHp;
    },
                content:function(){
        if(target.hp<target.maxHp){
            target.recover(event.baseDamage||1);
            if(target.hp<=0){
                target.draw();
            }
        }else{
            target.draw();
        }
    },
                ai:{
                    basic:{
                        order:function(card,player){
                if(player.hasSkillTag('pretao')) return 5;
                return 2;
            },
                        useful:[8,6.5,5,4],
                        value:[8,6.5,5,4],
                    },
                    result:{
                        target:function(player,target){
                // if(player==target&&player.hp<=0) return 2;
                if(player.hasSkillTag('nokeep')) return 2;
                var nd=player.needsToDiscard();
                var keep=false;
                if(nd<=0){
                    keep=true;
                }
                else if(nd==1&&target.hp>=2&&target.countCards('h','tao')<=1){
                    keep=true;
                }
                var mode=get.mode();
                if(target.hp>=2&&keep&&target.hasFriend()){
                    if(target.hp>2||nd==0) return 0;
                    if(target.hp==2){
                        if(game.hasPlayer(function(current){
                            if(target!=current&&get.attitude(target,current)>=3){
                                if(current.hp<=1) return true;
                                if((mode=='identity'||mode=='versus'||mode=='chess')&&current.identity=='zhu'&&current.hp<=2) return true;
                            }
                        })){
                            return 0;
                        }
                    }
                }
                if(target.hp<0&&target!=player&&target.identity!='zhu') return 0;
                var att=get.attitude(player,target);
                if(att<3&&att>=0&&player!=target) return 0;
                var tri=_status.event.getTrigger();
                if(mode=='identity'&&player.identity=='fan'&&target.identity=='fan'){
                    if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='fan'&&tri.source!=target){
                        var num=game.countPlayer(function(current){
                            if(current.identity=='fan'){
                                return current.countCards('h','tao');
                            }
                        });
                        if(num>1&&player==target) return 2;
                        return 0;
                    }
                }
                if(mode=='identity'&&player.identity=='zhu'&&target.identity=='nei'){
                    if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='zhong'){
                        return 0;
                    }
                }
                if(mode=='stone'&&target.isMin()&&
                player!=target&&tri&&tri.name=='dying'&&player.side==target.side&&
                tri.source!=target.getEnemy()){
                    return 0;
                }
                return 2;
            },
                    },
                    tag:{
                        recover:1,
                        save:1,
                    },
                },
            },
            "dpcqr_fuyandan":{
                type:"basic",
                enable:true,
                filterTarget:function(card,player,target){
        return player==target&&!player.hasSkill("dpcqr_fuyandan_maxHp");
    },
                content:function(){
        'step 0'
        target.maxHp--;
        target.addMark("dpcqr_fuyandan_maxHp");
        target.addSkill("dpcqr_fuyandan_maxHp")
        target.update();
        "step 1"
        event.number=Math.min(3,target.maxHp);
        target.addMark("dpcqr_fuyandan_use",event.number);
        target.addTempSkill("dpcqr_fuyandan_use",{player:"phaseBegin"});
    },
                ai:{
                    order:7,
                    value:6,
                    useful:3,
                    result:{
                        target:1,
                    },
                },
                fullskin:true,
            },
            "dpcqr_haizhixinjia":{
                type:"equip",
                subtype:"equip2",
                ai:{
                    basic:{
                        equipValue:7,
                        order:function(card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 10-get.equipValue(card,player)/20;
                }
                else{
                    return 10+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        value:function(card,player,index,method){
                var value=0;
                var info=get.info(card);
                var current=player.getEquip(info.subtype);
                if(current&&card!=current){
                    value=get.value(current,player);
                }
                var equipValue=info.ai.equipValue;
                if(equipValue==undefined){
                    equipValue=info.ai.basic.equipValue;
                }
                if(typeof equipValue=='function'){
                    if(method=='raw') return equipValue(card,player);
                    return equipValue(card,player)-value;
                }
                if(typeof equipValue!='number') equipValue=0;
                if(method=='raw') return equipValue;
                return equipValue-value;
            },
                    },
                    result:{
                        target:function(player,target,card){
                return get.equipResult(player,target,card.name);
            },
                    },
                },
                skills:["dpcqr_haizhixinjia_skill_damage","dpcqr_haizhixinjia_skill_recover"],
                enable:true,
                selectTarget:-1,
                filterTarget:function(card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function(){
        if(cards.length&&get.position(cards[0],true)=='o') target.equip(cards[0]);
    },
                toself:true,
                fullimage:true,
            },
            "dpcqr_mulingdan":{
                type:"basic",
                enable:true,
                filterTarget:function(card,player,target){
        return !target.hasSkill("dpcqr_mulingdan_skill");
    },
                content:function(){
        target.addTempSkill("dpcqr_mulingdan_skill",{player:"phaseDrawBegin"});
    },
                ai:{
                    order:5,
                    value:8,
                    useful:3,
                    result:{
                        target:function(player,target){
                if(player.hp==1) return 15;
                if(target.hp+target.hujia<=1) return 10;
                if(target.hp+target.hujia<target.maxHp/3) return 8;
                if(target.hp+target.hujia<target.maxHp/2) return 6;
                if(target.hp<target.maxHp/3) return 4;
                if(target.hp<target.maxHp/2) return 2;
                if(target.hp<target.maxHp) return 1;
                return 1;
            },
                    },
                },
                fullskin:true,
            },
            "dpcqr_tuibozhulan":{
                fullskin:true,
                type:"trick",
                filterTarget:true,
                wuxieable:true,
                global:["dpcqr_tuibozhulan_skill_recover","dpcqr_tuibozhulan_skill_draw","dpcqr_tuibozhulan_skill_gain","dpcqr_tuibozhulan_skill_lose","dpcqr_tuibozhulan_skill_discard","dpcqr_tuibozhulan_skill_maxHp"],
                content:function(){
        player.update();
        if(player.countMark("dpcqr_tuibozhulan_recover")){
            target.recover();
            player.addSkill("dpcqr_tuibozhulan_skill_rec");
        }
        if(player.countMark("dpcqr_tuibozhulan_draw")){
            target.draw();
            player.addSkill("dpcqr_tuibozhulan_skill_dra");
        }
        if(player.countMark("dpcqr_tuibozhulan_gain")){
            target.gainMaxHp();
            player.addSkill("dpcqr_tuibozhulan_skill_gai");
        }
        if(player.countMark("dpcqr_tuibozhulan_lose")){
            target.loseHp();
            player.addSkill("dpcqr_tuibozhulan_skill_los");
        }
        if(player.countMark("dpcqr_tuibozhulan_discard")){
            if(target.countCards("he")>0){
                target.chooseToDiscard("he",true);
                player.addSkill("dpcqr_tuibozhulan_skill_dis");
            }
        }
        if(player.countMark("dpcqr_tuibozhulan_maxHp")){
            target.loseMaxHp();
            player.addSkill("dpcqr_tuibozhulan_skill_max");
        }
    },
                ai:{
                    order:1,
                    useful:6,
                    value:6,
                    result:{
                        player:1,
                    },
                },
                selectTarget:1,
            },
            "dpcqr_xuanzhongchi":{
                type:"equip",
                subtype:"equip1",
                distance:{
                    attackFrom:-2,
                },
                ai:{
                    basic:{
                        equipValue:5,
                        order:function(card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        value:function(card,player,index,method){
                var value=0;
                var info=get.info(card);
                var current=player.getEquip(info.subtype);
                if(current&&card!=current){
                    value=get.value(current,player);
                }
                var equipValue=info.ai.equipValue;
                if(equipValue==undefined){
                    equipValue=info.ai.basic.equipValue;
                }
                if(typeof equipValue=='function'){
                    if(method=='raw') return equipValue(card,player);
                    return equipValue(card,player)-value;
                }
                if(typeof equipValue!='number') equipValue=0;
                if(method=='raw') return equipValue;
                return equipValue-value;
            },
                    },
                    result:{
                        target:function(player,target,card){
                return get.equipResult(player,target,card.name);
            },
                    },
                },
                skills:["dpcqr_xuanzhongchi_skill"],
                enable:true,
                selectTarget:-1,
                filterTarget:function(card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function(){
        if(cards.length&&get.position(cards[0],true)=='o') target.equip(cards[0]);
    },
                toself:true,
                fullimage:true,
            },
        },
        translate:{
            "dpcqr_nature_sha":"元素斩",
            "dpcqr_nature_sha_info":"出牌阶段，对一名角色使用，令其使用一张【闪】，否则受到一点随机非异火属性伤害",
            "dpcqr_fonuhuolian":"佛怒火莲",
            "dpcqr_fonuhuolian_info":"你可以指定一名角色，令其进行一次判定，若其结果为方片则受到一点随机异火属性伤害与随机一种属性负面状态，若其结果为红桃则进入［灼烧］与随机一种属性负面状态并弃置一张牌，否则其随机弃置两张牌",
            "dpcqr_huiqidan":"回气丹",
            "dpcqr_huiqidan_info":"出牌阶段，对自己使用，若体力值小于体力上限，则恢复一点体力，否则摸一张牌；对体力值不大于零或进入濒死状态的的角色使用，令其恢复一点体力并摸一张牌",
            "dpcqr_fuyandan":"覆岩丹",
            "dpcqr_fuyandan_info":"出牌阶段，对自己使用，减少一点持续到回合开始前的体力上限，并令自身在回合开始前，受到的伤害均减一并获得一层\"覆岩\"效果，可生效X次；<br>覆岩效果：在自身回合结束前，你即将造成伤害时，移去一层\"覆岩\"效果，令目标角色在你回合结束时受到你的一点<font color=#F4A460>土</font>属性伤害，此伤害可叠加<br>（X为你减少后的体力上限且最多为三）",
            "dpcqr_haizhixinjia":"海之心甲",
            "dpcqr_haizhixinjia_info":"◆你受到伤害后，获得一点护甲，若手牌数不大于自身已损体力值则摸一张牌<br> ◆出牌阶段开始时，你移除所有护甲并恢复等量的体力值",
            "dpcqr_mulingdan":"沐灵丹",
            "dpcqr_mulingdan_info":"出牌阶段，对一名角色使用，令其摸牌阶段开始前，下一次受到的伤害改为恢复效果，且来源进入［寄生］状态（溢出部分改为获得等量护甲）",
            "dpcqr_tuibozhulan":"推波助澜",
            "dpcqr_tuibozhulan_info":"当一名对应数值不大于你的角色<br> 恢复体力<font color=#40E0D0>/</font>摸牌<font color=#40E0D0>/</font>增加体力上限<font color=#40E0D0>/</font>流失体力<font color=#40E0D0>/</font>弃牌<font color=#40E0D0>/</font>减少体力上限后<br> 你可打出此牌，令其再<br> 恢复一点体力<font color=#40E0D0>/</font>摸一张牌<font color=#40E0D0>/</font>增加一点体力上限<font color=#40E0D0>/</font>流失一点体力<font color=#40E0D0>/</font>弃置一张牌<font color=#40E0D0>/</font>减少一点体力上限<br> 若因此该角色对应数值大于你，则你对应<br> 恢复一点体力<font color=#40E0D0>/</font>摸一张牌<font color=#40E0D0>/</font>增加一点体力上限<font color=#40E0D0>/</font>流失一点体力<font color=#40E0D0>/</font>弃置一张牌<font color=#40E0D0>/</font>减少一点体力上限",
            "dpcqr_xuanzhongchi":"玄重尺",
            "dpcqr_xuanzhongchi_info":"◆你使用【杀】指定目标后​，可选择一项➊弃置一张手牌，令此【杀】无视目标防具且其需额外打出一张【闪】来响应；➋你摸一张牌并重置本回合内的出杀次数，且本回合的手牌上限减一",
        },
        list:[["heart","4","dpcqr_nature_sha"],["diamond","10","dpcqr_nature_sha"],["club","13","dpcqr_nature_sha"],["spade","8","dpcqr_nature_sha"],["heart","9","dpcqr_huiqidan"],["heart","3","dpcqr_huiqidan"],["club","10","dpcqr_huiqidan"],["club","1","dpcqr_huiqidan"],["club","2","dpcqr_fuyandan"],["club","11","dpcqr_fuyandan"],["diamond","6","dpcqr_mulingdan"],["heart","11","dpcqr_mulingdan"],["club","7","dpcqr_tuibozhulan"],["diamond","13","dpcqr_tuibozhulan"],["club","2","dpcqr_xuanzhongchi"],["diamond","8","dpcqr_xuanzhongchi"],["spade","9","dpcqr_haizhixinjia"],["club","3","dpcqr_haizhixinjia"],["heart","4","dpcqr_nature_sha"],["diamond","10","dpcqr_nature_sha"],["club","13","dpcqr_nature_sha"],["spade","8","dpcqr_nature_sha"],["heart","9","dpcqr_huiqidan"],["heart","3","dpcqr_huiqidan"],["club","10","dpcqr_huiqidan"],["club","1","dpcqr_huiqidan"],["club","2","dpcqr_fuyandan"],["club","11","dpcqr_fuyandan"],["diamond","6","dpcqr_mulingdan"],["heart","11","dpcqr_mulingdan"],["club","7","dpcqr_tuibozhulan"],["diamond","13","dpcqr_tuibozhulan"],["club","2","dpcqr_xuanzhongchi"],["diamond","8","dpcqr_xuanzhongchi"],["spade","9","dpcqr_haizhixinjia"],["club","3","dpcqr_haizhixinjia"]],
    },
    skill:{
        skill:{
            "dpcqr_fuhui":{
                trigger:{
                    player:"useCardEnd",
                },
                forced:true,
                priority:202009114348,
                content:function(){
        player.update();
        if(trigger.card.number>(player.maxHp+player.hp+player.storage.dpcqr_konglun)){
            var chat=["嘿！看来可行！","妙啊！","原来如此！竟有这种操作！"].randomGet();
            player.say(chat);
            game.delay(2.5);
            player.draw();
        }else{
            var chat1=["嘶——！","啊这……好复杂……","害，何以寻得关键之处啊！"].randomGet();
            player.say(chat1);
            game.delay(2.5);
            player.chooseToDiscard('he',true).ai=function(card){
                return 6-get.value(card);
            }
        }
    },
                ai:{
                    effect:{
                        player:function(card,player){
                if(player.countCards('h')-1<4){
                    if(card.number>(player.maxHp+player.hp+player.storage.dpcqr_konglun)) return 1;
                }else{
                    if(card.number<=(player.maxHp+player.hp+player.storage.dpcqr_konglun)) return 1;
                }
            },
                    },
                },
            },
            "dpcqr_konglun":{
                trigger:{
                    player:"drawEnd",
                },
                frequent:true,
                priority:58856,
                content:function(){
        var chat=["人云，亦云！","emmm……","实际……如此……应当……","哈哈哈！然也！"].randomGet();
        player.say(chat);
        game.delay(2.5);
        player.addMark("dpcqr_konglun",trigger.num);
    },
                init:function(player){
        player.storage.dpcqr_konglun;
    },
                marktext:"论",
                intro:{
                    name:"空论",
                    content:"数量：#",
                },
                group:["dpcqr_konglun_A"],
                subSkill:{
                    A:{
                        trigger:{
                            source:"damageBegin",
                        },
                        priority:8667,
                        prompt:"空论：弃置所有标记并令此伤害加一",
                        check:function(event,player){
                if(event.player.isLinked&&event.player.hp+event.player.hujia<=1) return true;
                if(event.player.hp+event.player.hujia<=2) return true;
                if(event.player.hp+event.player.hujia<=1) return true;
                if(event.player.countCards('h')==0) return true;
                if(event.player.hp+event.player.hujia<=2) return true;
                if(get.attitude(player,event.player)>0) return false;
            },
                        filter:function(event,player){
                if(player.storage.dpcqr_konglun>(event.player.hp+event.player.countCards('h'))) return true;
                return false;
            },
                        content:function(){
                var chat=["你！？在教我！？做事！？","俗子匹夫！不堪为伍！！","嗬！阁下好大的官威啊！！"].randomGet();
                player.say(chat);
                game.delay(2.5);
                trigger.num++;
                player.removeMark("dpcqr_konglun",player.storage.dpcqr_konglun);
            },
                        sub:true,
                        "audioname2":{
                            caoshuang:"tuogu",
                        },
                    },
                },
                "audioname2":{
                    caoshuang:"tuogu",
                },
            },
            "dpcqr_huanshang":{
                trigger:{
                    player:"discardEnd",
                },
                frequent:true,
                priority:58856,
                content:function(){
        var chat=["生而为人，我很抱歉！","一切的虚妄……又是为了什么呢？","生当如是，应己而活","真羡慕啊，那种东西……"].randomGet();
        player.say(chat);
        game.delay(2.5);
        player.addMark("dpcqr_huanshang",trigger.cards.length);
    },
                init:function(player){
        player.storage.dpcqr_huanshang;
    },
                marktext:"殇",
                intro:{
                    name:"幻殇",
                    content:"数量：#",
                },
                ai:{
                    threaten:5,
                    expose:0.05,
                    noh:function(player){
            if(player.storage.dpcqr_huanshang>0) return true;
        },
                },
                group:"dpcqr_huanshang_A",
                subSkill:{
                    A:{
                        trigger:{
                            player:["loseEnd"],
                        },
                        filter:function(event,player,target){
                if(player.storage.dpcqr_huanshang>0&&player.countCards('h')==0) return true;
                return false;
            },
                        priority:75876,
                        prompt:"幻殇：选择一名角色对其造成一点冰属性伤害，随后你恢复一点体力并摸标记数一半的牌",
                        content:function(){
                'step 0'
                player.chooseTarget(function(card,player,target){
                   return target!=player;
                }).set("ai",function(target){
                     return get.attitude(player,target)<0;
                });
                'step 1'
                if(result.bool){
                    var chat=["打不死你，我很抱歉！","这一切……不都是为了揍你吗？","生当如是，应心而变","真羡慕啊……不过现在就没了！","寒风鼓瑟携尘去","功过两沦悴心肠","梦逝形萧现苍茫","朝阳年茂已魂殇"].randomGet();
                    player.say(chat);
                    game.delay(2.5);
                    target=result.targets[0];
                    target.damage("ice");
                    player.recover();
                    player.draw(Math.ceil(player.storage.dpcqr_huanshang/2));
                    player.removeMark("dpcqr_huanshang",player.storage.dpcqr_huanshang);
                }
            },
                        sub:true,
                    },
                },
            },
            "dpcqr_anjing":{
                trigger:{
                    player:["useCardEnd","respondEnd"],
                },
                forced:true,
                priority:202010162306,
                filter:function(event,player){
        if(get.color(event.card)=="red") return true;
        return false;
    },
                content:function(){
        player.addMark("dpcqr_anjing");
    },
                init:function(player){
        player.storage.dpcqr_anjing=0;
    },
                marktext:"劲",
                intro:{
                    name:"暗劲",
                    content:"层数：#",
                },
                ai:{
                    threaten:2,
                    effect:{
                        player:function(card,player){
                if(player.countMark("dpcqr_anjing")<=1){
                    if(get.color(card)=="red") return 1;
                }else{
                    if(get.color(card)=="black") return 1;
                }
            },
                    },
                },
                group:["dpcqr_anjing_jing"],
                subSkill:{
                    jing:{
                        trigger:{
                            player:"useCardToPlayered",
                        },
                        prompt:function(event,player,target){
                return "是否对 "+get.translation(event.target)+" 发动技能〖暗劲〗";
            },
                        priority:202010162313,
                        check:function(event,player,target){
                if(get.attitude(player,event.target)<0) return true;
                return false;
            },
                        filter:function(event,player,target){
                return player.storage.dpcqr_anjing>=event.target.hp||player.storage.dpcqr_anjing>=event.target.countCards("h");
            },
                        content:function(){
                var chat=["八！极！崩！","吃小爷一拳！","喝！！"].randomGet();
                var name=trigger.target.name;
                'step 0'
                player.say(chat);
                game.delay(2.5);
                'step 1'
                player.removeMark("dpcqr_anjing",player.storage.dpcqr_anjing);
                player.addMark(name);
                player.addMark("dpcqr_anjing_target");
                trigger.target.addSkill("dpcqr_anjing_bao")
                trigger.target.addMark("dpcqr_anjing_bao");
            },
                        sub:true,
                    },
                    bao:{
                        trigger:{
                            source:"damageEnd",
                            player:"damageEnd",
                        },
                        forced:true,
                        property:202010272122,
                        content:function(){
                var name=player.name;
                "step 0"
                player.addSkill("dpcqr_nohujia");
                "step 1"
                player.removeMark("dpcqr_anjing_bao");
                "step 2"
                game.countPlayer(function(current){
                    if(current.hasSkill("dpcqr_anjing")&&current.countMark(name)){
                        player.damage(current);
                        player.removeSkill("dpcqr_nohujia");
                        if(player.countMark("dpcqr_anjing_bao")==0){
                            player.removeSkill("dpcqr_anjing_bao");
                        }
                    }
                });
            },
                        init:function(player){
                player.storage.dpcqr_anjing_bao=0;
            },
                        mark:true,
                        marktext:"爆",
                        intro:{
                            name:"暗劲",
                            content:function(storage,player,skill){
                    var name=player.name;
                    var target=game.filterPlayer(function(current){
                        return current.countMark(name)&&current.countMark("dpcqr_anjing_target");
                    });
                    return "层数:#<br>下次造成或受到伤害后，受到来自 "+get.translation(target)+" 的一点贯穿伤害";
                },
                        },
                        sub:true,
                    },
                },
            },
            "dpcqr_huolian":{
                derivation:["dpcqr_fonuhuolian"],
                trigger:{
                    source:"damageEnd",
                    player:"damageEnd",
                },
                frequent:true,
                priority:2020091384328,
                content:function(){
        player.addMark("dpcqr_huolian",trigger.num);
    },
                init:function(player){
        player.storage.dpcqr_huolian;
    },
                marktext:"莲",
                intro:{
                    name:"火莲",
                    content:"数量：#",
                },
                ai:{
                    threaten:3,
                    expose:0.12,
                },
                group:["dpcqr_huolian_lian"],
                subSkill:{
                    lian:{
                        trigger:{
                            player:"phaseEnd",
                        },
                        filter:function(event,player){
                if(player.storage.dpcqr_huolian>=player.hp||player.storage.dpcqr_huolian>=player.countCards('h')) return true;
                return false;
            },
                        check:function(event,player){
                if(player.hp<player.maxHp/2||player.maxHp-player.hp>=2||player.countCards("h")==0) return true;
                return false;
            },
                        content:function(){
                var chat=["嘿嘿嘿……","小爷我跟你拼了！！","佛怒！火莲！！","燃烧吧！！","给我！融！！"].randomGet();      
                "step 0"
                var number=Math.ceil(player.storage.dpcqr_huolian/2)+(player.maxHp-player.hp);
                player.chooseTarget([1,number]).set("ai",function(target){
                    if(get.attitude(player,target)<=0&&target.isLinked&&target.hp+target.hujia<=1) return 10;
                    if(get.attitude(player,target)<=0&&target.isLinked&&target.hp+target.hujia<=2) return 8;
                    if(get.attitude(player,target)<=0&&target.hp+target.hujia<=1) return 6;
                    if(get.attitude(player,target)<=0&&target.countCards('h')==0) return 4;
                    if(get.attitude(player,target)<=0&&target.hp+target.hujia<=2) return 2;
                    if(get.attitude(player,target)<=0) return 1;
                    return 0;
                });
                "step 1"
                if(result.bool){
                    player.say(chat);
                    game.delay(2.5);
                    event.targets=result.targets.slice(0).sortBySeat();
                    event.list=event.targets.slice(0);
                    player.logSkill('dpcqr_huolian_lian',event.targets);
                    player.draw(Math.max(1,Math.ceil(player.storage.dpcqr_huolian/2)+(player.maxHp-player.hp)));
                    player.recover();
                    player.removeMark("dpcqr_huolian",player.storage.dpcqr_huolian);
                }
                else{
                    event.finish();
                }
                "step 2"
                if(event.targets.length){
                    var target=event.targets.shift();
                    player.useCard({name:'dpcqr_fonuhuolian'},target,false).animate=false;
                    event.redo();
                }                
            },
                        sub:true,
                    },
                },
            },
            "dpcqr_yanfan":{
                trigger:{
                    player:"damageEnd",
                },
                priority:202009204358,
                check:function(event,player,source){
        if(get.attitude(player,event.source)<=0&&event&&event.source) return true;
        return false;
    },
                content:function(){
        "step 0"
        event.num=trigger.num;
        'step 1'
        player.draw();
        event.num--;
        'step 2'
        player.judge();
        'step 3'
        if(result.color=='red'){
            var chat=["燕返击！","还要往前来吗？","哼！"].randomGet();
            player.say(chat);
            game.delay(2.5);
            if(trigger&&trigger.source){
                trigger.source.damage('fire',player);
            }
        }else{
            player.chooseToDiscard('he',true).ai=function(card){
                return 6-ai.get.value(card);
            }
            if(trigger&&trigger.source){
                trigger.source.chooseToDiscard('he',true).ai=function(card){
                    return 6-ai.get.value(card);
                }
            }
            player.addMark("dpcqr_tianyan");
        }
        if(event.num>0){
            event.goto(1);
        }
    },
                ai:{
                    maixie:true,
                },
            },
            "dpcqr_mifa":{
                derivation:["dpcqr_tianyan"],
                init:function(player){
        player.storage.mifa;
    },
                marktext:"秘",
                mark:true,
                intro:{
                    name:"秘法",
                    content:"未发动",
                },
                trigger:{
                    player:["dying","changeHp"],
                },
                priority:202009208358,
                filter:function(event,player){
        if(player.hp==1||event.name=="dying") return true;
        return false;
    },
                check:function(event,player){
        return event.name=="dying";
    },
                content:function(){
        var chat=["给过你机会了！","准备好……受死了吗？","这…是你逼我的！"].randomGet();
        player.say(chat);
        game.delay(2.5);
        player.$fullscreenpop('<font color=#FF8C00>秘法</font>');
        game.delay(2.5);
        player.gainMaxHp();
        player.addMark("dpcqr_tianyan");
        player.recover(2-player.hp);
        player.addSkill("dpcqr_tianyan");
        player.awakenSkill("dpcqr_mifa");
    },
            },
            "dpcqr_tianyan":{
                init:function(player){
        player.storage.dpcqr_tianyan;
    },
                marktext:"炎",
                intro:{
                    name:"天炎",
                    content:"数量:#",
                },
                trigger:{
                    global:"phaseBegin",
                },
                prompt:function(event,player,target){
        return "是否对 "+get.translation(event.player)+" 发动技能〖天炎〗";
    },
                filter:function(event,player){
        if(player!=event.player&&player.countMark("dpcqr_tianyan")>0) return true;
        return false;
    },
                check:function(event,player){
        if(get.attitude(player,event.player)<=0&&event.player.isLinked&&event.player.hp+event.player.hujia<=1) return true;
        if(get.attitude(player,event.player)<=0&&event.player.hp+event.player.hujia<=1) return true;
        if(get.attitude(player,event.player)<=0&&event.player.hp+event.player.hujia<=2&&event.player.countCards('h')<=1) return true;
        if(get.attitude(player,event.player)<=0&&player.hp+player.hujia<player.maxHp/2) return true;
        if(get.attitude(player,event.player)<=0&&player.hp==1) return true;
        return false;
    },
                content:function(){
        'step 0'
        var chat=["金帝焚天炎！","做好觉悟了吗？","╯^╰ 哼！"].randomGet();
        player.say(chat);
        game.delay(2.5);
        player.removeMark("dpcqr_tianyan");
        'step 1'
        event.target=trigger.player.chooseToDiscard('he',1,true);
        event.targets=trigger.player.chooseToRespond({name:"shan"});
        event.target.set("ai",function(card){
            return 5-get.value(card);
        });
        "step 2"
        event.targets.set("ai",function(card){
            return 7-get.value(card);
        });
        'step 3'
        var natures="diffgold";
        if(result.bool){
            player.recover();
        }else{
            trigger.player.damage(natures);
        }
    },
                mod:{
                    maxHandcard:function (player,num){
            var number=Math.ceil(player.storage.dpcqr_tianyan/2);
            return num+number;
        },
                },
                ai:{
                    threaten:4,
                    expose:0.15,
                },
                group:["dpcqr_tianyan_draw"],
                subSkill:{
                    draw:{
                        trigger:{
                            player:"drawBegin",
                        },
                        frequent:true,
                        priority:20201113023555,
                        filter:function(event,player){
                if(player.storage.dpcqr_tianyan>=1) return true;
                return false;
            },
                        content:function(){
                var cards=Math.ceil(player.storage.dpcqr_tianyan/2);
                trigger.num+=cards;
            },
                        sub:true,
                    },
                },
            },
            "dpcqr_yixian":{
                trigger:{
                    player:["useCardEnd","respondEnd"],
                },
                frequent:true,
                priority:20201113546589,
                filter:function(event,player,card){
        if(get.color(event.card)=="red") return true;
        return false;
    },
                content:function(){
        player.addMark("dpcqr_yixian");
    },
                init:function(player){
        player.storage.dpcqr_yixian=0;
    },
                marktext:"医",
                intro:{
                    name:"医仙",
                    content:function(storage,player){
            return "可使用 "+Math.floor(storage/2)+" 次";
        },
                },
                group:["dpcqr_yixian_phase","dpcqr_yixian_dying"],
                subSkill:{
                    phase:{
                        trigger:{
                            player:"phaseJieshuEnd",
                        },
                        priority:202105051423,
                        filter:function(event,player){
                return player.countMark("dpcqr_yixian")>=2;
            },
                        check:function(event,player){
                return game.countPlayer(function(current){
                    if(get.attitude(player,current)>0&&current.hp<current.maxHp){
                        if(player==current){
                            if(player.hp+player.hujia-1<(player.maxHp/5)*3||player.hp<player.maxHp&&player.hp<=2) return true;
                        }else{
                            if(current.hp+current.hujia<current.maxHp/2||player.hp<player.maxHp&&current.hp<current.maxHp&&current.hp>=player.hp) return true;
                        }
                    }
                });
                return false;
            },
                        content:function(){
                var chat=["别担心","很快就不会痛了"].randomGet();
                "step 0"
                player.removeMark("dpcqr_yixian",2);
                player.chooseTarget(function(card,player,target){
                    return target.hp<target.maxHp;
                },true).set("ai",function(target){
                    if(player==target&&player.hp<=2&&player.hp<player.maxHp) return 30;
                    //if(get.attitude(player,target)>=0&&target.hp>player.hp&&player.hp<=player.maxHp/3&&target.hp<target.maxHp/4) return 20;
                    //if(get.attitude(player,target)>=0&&target.hp>player.hp&&player.hp<=player.maxHp/3&&target.hp<target.maxHp/3) return 19;
                    //if(get.attitude(player,target)>=0&&target.hp>player.hp&&player.hp<=player.maxHp/3&&target.hp<target.maxHp/2) return 18;
                    //if(get.attitude(player,target)>=0&&target.hp>player.hp&&player.hp<=player.maxHp/3&&target.hp<target.maxHp) return 17;
                    //if(get.attitude(player,target)>=0&&target.hp>player.hp&&player.hp<=player.maxHp&&target.hp<target.maxHp/4) return 16;
                    //if(get.attitude(player,target)>=0&&target.hp>player.hp&&player.hp<=player.maxHp&&target.hp<target.maxHp/3) return 15;
                    //if(get.attitude(player,target)>=0&&target.hp>player.hp&&player.hp<=player.maxHp&&target.hp<target.maxHp/2) return 14;
                    //if(get.attitude(player,target)>=0&&target.hp>player.hp&&player.hp<=player.maxHp&&target.hp<target.maxHp) return 13;
                    if(get.attitude(player,target)>0&&target.isLinked&&target.hp<=1&&target.hp<target.maxHp) return 12;
                    if(get.attitude(player,target)>0&&target.isLinked&&target.hp<=2&&target.hp<target.maxHp) return 10;
                    if(get.attitude(player,target)>0&&target.isLinked&&target.hp<=3&&target.hp<target.maxHp) return 8;
                    if(get.attitude(player,target)>0&&target.hp<=1&&target.hp<target.maxHp) return 6;
                    if(get.attitude(player,target)>0&&target.hp<=2&&target.hp<target.maxHp) return 4;
                    if(get.attitude(player,target)>0&&target.hp<=3&&target.hp<target.maxHp) return 2;
                    return 1;
                });
                'step 1'
                if(result.bool){
                    event.targets=result.targets.slice(0).sortBySeat();
                    event.list=event.targets.slice(0);
                }
                'step 2'
                if(event.targets.length){
                    var target=event.targets.shift();
                    target.recover();
                    player.say(chat);
                    game.delay(2.5);
                    target.update();
                }
            },
                        sub:true,
                    },
                    dying:{
                        trigger:{
                            global:"dyingBegin",
                        },
                        filter:function(event,player){
                return event.player&&player.countMark("dpcqr_yixian")>=2;
            },
                        prompt:function(event,player){
                return "是否对 "+get.translation(event.player)+" 发动技能【医仙】？当前体力："+event.player.hp;
            },
                        check:function(event,player){
                if(event.player.identity!="zhu"&&player.identity!="zhong"&&event.player!=player&&player.countMark("dpcqr_yixian")<4&&player.hp==1) return false;
                return get.attitude(player,event.player)>0;
            },
                        priority:202105051437,
                        content:function(){
                "step 0"
                player.removeMark("dpcqr_yixian",1);
                "step 1"
                trigger.player.recover();
            },
                        ai:{
                            save:true,
                        },
                        sub:true,
                    },
                },
            },
            "dpcqr_dusan":{
                enable:"phaseUse",
                filterCard:function (card){
        return get.color(card)=='black';
    },
                filter:function(event,player){
        if(player.countCards('he',{color:'black'})>1) return true;
    },
                selectCard:2,
                position:"he",
                check:function(card){
        return 6-get.value(card);
    },
                filterTarget:function(event,player,target){
        return player!=target&&!target.hasSkill("dpcqr_dusan_damage");
    },
                content:function(){
        var chat=["女孩子出门在外，没有一点手段可不行","呵呵，中毒的滋味不好受吧！"].randomGet();
        player.say(chat);
        game.delay(2.5);
        target.addMark("dpcqr_dusan");
        target.addSkill("dpcqr_dusan_damage");
        target.addSkill("dpcqr_dusan_jieshu");
        target.addSkill("dpcqr_nature_poison");
    },
                marktext:"散",
                intro:{
                    name:"毒散",
                    content:"自身回合结束时，将武将牌翻面",
                },
                ai:{
                    order:2,
                    result:{
                        target:function(player,target){
                if(target.hp==target.maxHp) return -5;
                if(target.hp<=(target.maxHp/5)*3) return -4;
                if(target.hp<=target.maxHp/2) return -3;
                if(target.hp<=target.maxHp/3) return -2;
                return -1;
            },
                    },
                    threaten:3,
                    expose:0.1,
                },
                subSkill:{
                    damage:{
                        trigger:{
                            source:"damageEnd",
                        },
                        forced:true,
                        priority:202011148358999,
                        content:function(){
                player.removeMark("dpcqr_dusan",player.storage.dpcqr_dusan);
                player.removeSkill("dpcqr_dusan_damage");
                player.removeSkill("dpcqr_dusan_jieshu");
            },
                        sub:true,
                    },
                    jieshu:{
                        trigger:{
                            player:"phaseJieshuBegin",
                        },
                        forced:true,
                        priority:202011148358999,
                        content:function(){
                if(player.storage.dpcqr_dusan>=1){
                    player.turnOver();
                }
                player.removeMark("dpcqr_dusan",player.storage.dpcqr_dusan);
                player.removeSkill("dpcqr_dusan_damage");
                player.removeSkill("dpcqr_dusan_jieshu");
            },
                        sub:true,
                    },
                },
            },
            "dpcqr_enan":{
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                priority:2020111405865,
                filter:function(event,player){
        if(!event.nature) return true;
        return false;
    },
                content:function(){
        "step 0"
        player.draw();
        player.addMark("dpcqr_enan",trigger.num);
        "step 1"
        trigger.num--;
    },
                init:function(player){
        player.storage.dpcqr_enan=0;
    },
                marktext:"厄",
                intro:{
                    name:"厄难",
                    content:function(storage,player,skill){
            if(storage>player.maxHp){
                return "数量："+storage+"<br>回合结束时流失体力";
            }else{
                return "数量："+storage;
            }
        },
                },
                ai:{
                    threaten:2,
                },
                group:["dpcqr_enan_phase"],
                subSkill:{
                    phase:{
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        filter:function(event,player,target){
                if(player.storage.dpcqr_enan>player.maxHp) return true;
                return false;
            },
                        priority:20201114835635,
                        content:function(){
                "step 0"
                player.draw();
                player.loseHp();
                "step 1"
                player.removeMark("dpcqr_enan");
            },
                        sub:true,
                    },
                    lose:{
                        trigger:{
                            player:"phaseJieshuBegin",
                        },
                        forced:true,
                        priority:202011149999,
                        content:function(){
                player.loseHp();
                player.removeSkill("dpcqr_enan_lose")
            },
                        mark:true,
                        marktext:"难",
                        intro:{
                            name:"厄难",
                            content:"自身回合结束时流失一点体力",
                        },
                        sub:true,
                    },
                },
            },
            "dpcqr_feixv":{
                trigger:{
                    player:["useCardEnd","respondEnd"],
                },
                frequent:true,
                priority:2020111905865,
                filter:function(event,player){
        if(event.card.name=="sha"&&player.storage.dpcqr_feixv_shun!=2||event.card.name=="shan"&&player.storage.dpcqr_feixv_shan!=2) return true;
        return false;
    },
                content:function(){
        if(trigger.card.name=="sha"){
            player.addMark("dpcqr_feixv_shun");
        }
        if(trigger.card.name=="shan"){
            player.addMark("dpcqr_feixv_shan");
        }
    },
                mod:{
                    globalFrom:function(from,to,distance){
            if(from.storage.dpcqr_feixv_shun>0) return distance-from.storage.dpcqr_feixv_shun;
        },
                    globalTo:function(from,to,distance){
            if(to.storage.dpcqr_feixv_shan>0) return distance+to.storage.dpcqr_feixv_shan;
        },
                },
                group:["dpcqr_feixv_shun","dpcqr_feixv_shan","dpcqr_feixv_phase"],
                subSkill:{
                    shun:{
                        init:function(player){
                player.storage.dpcqr_feixv_shun;
            },
                        marktext:"瞬",
                        intro:{
                            name:"飞絮·瞬",
                            content:"攻击距离+#",
                        },
                        sub:true,
                    },
                    shan:{
                        init:function(player){
                player.storage.dpcqr_feixv_shan;
            },
                        marktext:"闪",
                        intro:{
                            name:"飞絮·闪",
                            content:"防御距离+#",
                        },
                        sub:true,
                    },
                    phase:{
                        trigger:{
                            player:"phaseJieshuEnd",
                        },
                        frequent:true,
                        priority:202011198558,
                        filter:function(event,player){
                if(player.storage.dpcqr_feixv_shun>=1||player.storage.dpcqr_feixv_shan>=1) return true;
                return false;
            },
                        content:function(){
                if(player.storage.dpcqr_feixv_shun==1&&player.storage.dpcqr_feixv_shan==1){
                    var card1=1;
                    var card2=1;
                }else{
                    if(player.storage.dpcqr_feixv_shun>=1){
                        var card1=player.storage.dpcqr_feixv_shun;
                    }else{
                        var card1=0;
                    }
                    if(player.storage.dpcqr_feixv_shan>=1){
                        var card2=player.storage.dpcqr_feixv_shan;
                    }else{
                        var card2=0;
                    }
                }
                var card=Math.ceil((card1+card2)/2);
                player.draw(card);
            },
                        sub:true,
                    },
                },
            },
            "dpcqr_luoyao":{
                trigger:{
                    player:"phaseBegin",
                },
                filter:function(event,player){
        if(player.storage.dpcqr_feixv_shun>0&&player.storage.dpcqr_feixv_shan>0) return true;
    },
                check:function(event,player){
        return game.countPlayer(function(current){
            var target=current;
            if(get.attitude(player,target)<=0&&target.hp+target.hujia<=2) return true;
            if(get.attitude(player,target)<=0&&target.isLinked) return true;
            if(player.storage.dpcqr_feixv_shun+player.storage.dpcqr_feixv_shan==4) return true;
        });
        return false;
    },
                content:function(){
        "step 0"
        var chat=["风之极·落日耀"].randomGet();
        player.say(chat);
        game.delay(2.5);
        player.$fullscreenpop('<font color=#00FFFF>风之极·落日耀</font>');
        game.delay(2.5);
        player.removeMark("dpcqr_feixv_shun");
        player.removeMark("dpcqr_feixv_shan");
        player.chooseTarget(true).set("ai",function(target){
            if(get.attitude(player,target)<=0&&target.isLinked&&target.hp+target.hujia<=1) return 10;
            if(get.attitude(player,target)<=0&&target.isLinked&&target.hp+target.hujia<=2) return 8;
            if(get.attitude(player,target)<=0&&target.hp+target.hujia<=1) return 6;
            if(get.attitude(player,target)<=0&&target.countCards('h')==0) return 4;
            if(get.attitude(player,target)<=0&&target.hp+target.hujia<=2) return 2;
            if(get.attitude(player,target)<=0) return 1;
            return 0;
        });
        "step 1"
        if(result.bool){
            event.targets=result.targets.slice(0);
            event.targets.sort(lib.sort.seat);
        }
        "step 2"
        if(event.targets.length){
            var target=event.targets.shift();
            if(target.countCards('he')>=2){
                target.chooseControl('弃置卡牌','受到伤害').ai=function(event,player){
                    if(player.countCards('h')>player.hp&&player.hp>=2) return '弃置卡牌';
                    if(player.countCards('h')<=player.hp/2&&player.hp>=player.maxHp/2) return '受到伤害';
                    if(player.hujia>=1) return '受到伤害';
                    if(player.countCards('he')<=0) return '受到伤害';
                    return '弃置卡牌';
                };
            }else{
                target.chooseControl('受到伤害').ai=function(event,player){
                    return '受到伤害';
                };          
            }
            event.current=target;
        }
        "step 3"
        if(result.control=='弃置卡牌'){
            event.current.chooseToDiscard('he',2,true).ai=function(card){
                return 6-get.value(card);
            }
            player.recover();
        }
        if(result.control=='受到伤害'){
            event.current.damage('wind',player);
        }
        var card=Math.min(3,event.current.maxHp-event.current.hp);
        player.draw(card);
        player.addMark("dpcqr_luoyao",card);
        player.addSkill("dpcqr_luoyao_use");
    },
                intro:{
                    name:"落耀",
                    content:"本回合内出杀次数+#",
                },
                marktext:"耀",
                mod:{
                    cardUsable:function(card,player,num){
            if(player.storage.dpcqr_luoyao>=1){
                if(card.name=='sha') return num+player.storage.dpcqr_luoyao;
            }
        },
                },
                ai:{
                    threaten:2,
                    expose:0.18,
                },
                group:["dpcqr_luoyao_phase"],
                subSkill:{
                    phase:{
                        trigger:{
                            player:"phaseJieshuBefore",
                        },
                        frequent:true,
                        priority:2020112082824,
                        filter:function(event,player){
                if(player.storage.dpcqr_luoyao>=1) return true;
                return false;
            },
                        content:function(){
                player.removeMark("dpcqr_luoyao",player.storage.dpcqr_luoyao);
                player.removeSkill("dpcqr_luoyao_use");
            },
                        sub:true,
                    },
                    use:{
                        enable:["chooseToUse","chooseToRespond"],
                        position:"he",
                        check:function(card,event){
                return 6-get.value(card);
            },
                        selectCard:1,
                        viewAs:{
                            name:"sha",
                        },
                        filter:function(event,player){
                return player.countCards('he',{suit:'spade'});
            },
                        filterCard:function(card){
                return get.suit(card)=='spade';
            },
                        sub:true,
                        ai:{
                            basic:{
                                useful:[5,1],
                                value:[5,1],
                            },
                            order:function(item,player){
                    if(player.hasSkillTag('presha',true,null,true)) return 10;
                    if(lib.linked.contains(get.nature(item))) return (player.getCardUsable('sha')>1?3:3.1);
                    return 3.05;
                },
                            result:{
                                target:function(player,target,card,isLink){
                        if(!isLink&&player.hasSkill('jiu')){
                            if(!target.hasSkillTag('filterDamage',null,{
                                player:player,
                                card:card,
                                jiu:true,
                            })){
                             if(get.attitude(player,target)>0){
                                 return -7;
                             }
                             else{
                                 return -4;
                             }
                            }
                            return -0.5;
                        }
                        return -1.5;
                    },
                            },
                            tag:{
                                respond:1,
                                respondShan:1,
                                damage:function(card){
                        if(card.nature=='poison') return;
                        return 1;
                    },
                                natureDamage:function(card){
                        if(card.nature) return 1;
                    },
                                fireDamage:function(card,nature){
                        if(card.nature=='fire') return 1;
                    },
                                thunderDamage:function(card,nature){
                        if(card.nature=='thunder') return 1;
                    },
                                poisonDamage:function(card,nature){
                        if(card.nature=='poison') return 1;
                    },
                            },
                            canLink:function(player,target,card){
                    if(!target.isLinked()&&!player.hasSkill('wutiesuolian_skill')) return false;
                    if(target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                        target:target,
                        card:card,
                    },true)) return false;
                    if(player.hasSkill('jueqing')||target.hasSkill('gangzhi')||target.hasSkill('gangzhi')) return false;
                    return true;
                },
                            yingbian:function(card,player,targets,viewer){
                        if(get.attitude(viewer,player)<=0) return 0;
                        var base=0,hit=false;
                        if(get.cardtag(card,'yingbian_hit')){
                            hit=true;
                            if(targets.filter(function(target){
                                return target.hasShan()&&get.attitude(viewer,target)<0&&get.damageEffect(target,player,viewer,get.nature(card))>0;
                            })) base+=5;
                        }
                        if(get.cardtag(card,'yingbian_all')){
                            if(game.hasPlayer(function(current){
                                return !targets.contains(current)&&lib.filter.targetEnabled2(card,player,current)&&get.effect(current,card,player,player)>0;
                            })) base+=5;
                        }
                        if(get.cardtag(card,'yingbian_damage')){
                            if(targets.filter(function(target){
                                return get.attitude(player,target)<0&&(hit||!target.mayHaveShan()||player.hasSkillTag('directHit_ai',true,{
                                target:target,
                                card:card,
                                },true))&&!target.hasSkillTag('filterDamage',null,{
                                    player:player,
                                    card:card,
                                    jiu:true,
                                })
                            })) base+=5;
                        }
                        return base;
                    },
                        },
                    },
                },
            },
            "dpcqr_fenghua":{
                trigger:{
                    player:["useCardEnd","respondEnd"],
                },
                forced:true,
                priority:2020112809586,
                filter:function(event,player){
        if(event.card.number>6+player.storage.dpcqr_xuanwu) return true;
        return false;
    },
                content:function(){
        player.draw();
        player.addMark("dpcqr_xuanwu");
    },
                mod:{
                    targetInRange:function(card,player){
            if(card.name=='sha'&&get.color(card)=='black') return true;
        },
                },
                ai:{
                    effect:{
                        player:function(card,player){
                if((card.number-(6+player.storage.dpcqr_xuanwu))>6) return 1;
                if((card.number-(6+player.storage.dpcqr_xuanwu))>5) return 2;
                if((card.number-(6+player.storage.dpcqr_xuanwu))>4) return 3;
                if((card.number-(6+player.storage.dpcqr_xuanwu))>3) return 4;
                if((card.number-(6+player.storage.dpcqr_xuanwu))>2) return 5;
                if((card.number-(6+player.storage.dpcqr_xuanwu))>1) return 6;
                if((card.number-(6+player.storage.dpcqr_xuanwu))>0) return 7;
                return 1;
            },
                    },
                },
            },
            "dpcqr_xuanwu":{
                trigger:{
                    player:"shaMiss",
                },
                priority:2020112806586,
                filter:function(event,player){
        if(player.storage.dpcqr_xuanwu>0) return true;
    },
                check:function(event,player){
        if(get.attitude(player,event.target)<=0) return true;
        return false;
    },
                content:function(){
        player.removeMark("dpcqr_xuanwu");
        player.useCard({name:"sha"},trigger.target);
        player.update();
    },
                marktext:"旋",
                init:function(player){
        player.storage.dpcqr_xuanwu=0;
    },
                intro:{
                    name:"旋舞",
                    content:function(storage){
            var num=storage+7;
            return "数量："+storage+"<br>尽量使用点数为 "+num+" 的牌";
        },
                },
                group:["dpcqr_xuanwu_phase"],
                subSkill:{
                    phase:{
                        trigger:{
                            player:"phaseJieshuBegin",
                        },
                        priority:2020112895358,
                        filter:function(event,player){
                if(player.storage.dpcqr_xuanwu>player.countCards('h')&&player.storage.dpcqr_xuanwu>1) return true;
                return false;
            },
                        content:function(){
                "step 0"
                var A=["烈风旋疾，风灵剑舞！"].randomGet();player.say(A);
                game.delay(2.5);
                var A1=Math.floor(player.storage.dpcqr_xuanwu/2);
                player.chooseTarget([1,A1],true).set("ai",function(target){
                    if(get.attitude(player,target)<=0&&target.isLinked&&target.hp+target.hujia<=1) return 10;
                    if(get.attitude(player,target)<=0&&target.isLinked&&target.hp+target.hujia<=2) return 8;
                    if(get.attitude(player,target)<=0&&target.hp+target.hujia<=1) return 6;
                    if(get.attitude(player,target)<=0&&target.countCards('h')==0) return 4;
                    if(get.attitude(player,target)<=0&&target.hp+target.hujia<=2) return 2;
                    if(get.attitude(player,target)<=0) return 1;
                    return 0;
                });
                "step 1"
                if(result.bool){
                    event.targets=result.targets.slice(0).sortBySeat();
                    event.list=event.targets.slice(0);
                    player.logSkill('dpcqr_xuanwu_phase',event.targets);
                }
                "step 2"
                if(event.targets.length){
                    var target=event.targets.shift();
                    player.useCard({name:'sha'},target,false).animate=false;
                    event.redo();
                }                
            },
                        sub:true,
                    },
                },
            },
            "dpcqr_yunsha":{
                trigger:{
                    source:"damageEnd",
                },
                priority:2020112895288,
                filter:function(event,player){
        if(event.player.hp+event.num>player.hp&&!event.nature) return true;
        return false;
    },
                check:function(event,player){
        if(get.attitude(player,event.player)<=0) return true;
        return false;
    },
                content:function(){
        "step 0"
        player.recover();
        trigger.player.damage("wind",player);
        var A=["风之极·陨杀！"].randomGet();player.say(A);
        game.delay(2.5);
        player.$fullscreenpop('风之极·陨杀','thunder');
        "step 1"
        if(player.hp>trigger.player.hp){
            player.gainPlayerCard(trigger.player,'he');
        }
    },
                ai:{
                    threaten:4,
                    expose:0.2,
                },
            },
            "dpcqr_shiyao":{
                trigger:{
                    player:"useCardToPlayered",
                },
                filter:function(event){
        return event.card.name=="sha";
    },
                check:function(event,player){
        if(get.attitude(player,event.target)<=0) return true;
        return false;
    },
                priority:2020120783862,
                content:function(){
        "step 0"
        var A=["识相的赶紧滚开！","看来你们是活腻了！","给本王等着,一定让你们痛不欲生","今天我就要你的命！","找死！","看来你是活腻了！"].randomGet(); 
        player.say(A);
        game.delay(2.5);
        if(player.countCards("he")>=2){
            player.chooseControl('摸牌使用【决斗】','弃两张牌造成伤害').ai=function(event,player){
                if(player.hp<=2&&player.hp<player.maxHp||player.hp<=player.maxHp/3||event.player.countCards("h")>=3&&player.countCards({name:"sha"})<=1||event.player.hp+event.player.hujia<=2) return '弃两张牌造成伤害';
                return '摸牌使用【决斗】';
            };
        }else{
            player.chooseControl('摸牌使用【决斗】').ai=function(event,player){
                return '摸牌使用【决斗】';
            };
        }
        "step 1"
        var A='摸牌使用【决斗】';
        var B='弃两张牌造成伤害';
        if(result.control==A){
            player.draw();
            trigger.target.draw();
            player.useCard({name:'juedou'},trigger.target,false).animate=false;
        }
        if(result.control==B){
            player.chooseToDiscard("he",2,true);
            player.recover();
            trigger.target.damage("soil",player);
        }
    },
            },
            "dpcqr_shehuang":{
                trigger:{
                    player:"useCardToPlayered",
                },
                priority:20210405086573496,
                check:function(event,player){
        if(get.attitude(player,event.target)<0) return true;
        return false;
    },
                filter:function(event,player){
        if(!event.target.inRange(player)&&event.target!=player&&event.target.countCards('he')>0) return true;
        return false;
    },
                content:function(){
        player.gainPlayerCard(trigger.target,'he');
    },
                group:"dpcqr_shehuang_from",
                subSkill:{
                    from:{
                        mod:{
                            globalFrom:function(from,to,distance){
                    var player=from.hp;
                    if(player>=from.countCards("h")) return distance-1;
                },
                            globalTo:function(from,to,distance){
                    var player=to.hp;
                    if(player<to.countCards("h")) return distance+1;
                },
                        },
                        sub:true,
                    },
                },
            },
            "dpcqr_guyi":{
                forced:true,
                trigger:{
                    player:["recoverEnd","damageEnd","loseHpEnd"],
                },
                filter:function(event,player){
        var A=game.countPlayer(function(current){
            if(player.inRange(current)>0) return true;
        });
        if(A) return true;
        return false;
    },
                priority:20201206859539,
                content:function(){
        player.draw();
        game.countPlayer(function(current){
            if(player.inRange(current)){
                if(current.hp>player.hp){
                    current.chooseToDiscard('he',true);
                    current.addSkill("dpcqr_nature_soil_debuff");
                }
                if(current.hp==player.hp){
                    current.draw(2);
                    current.chooseToDiscard("he",2,true);
                }
                if(current.hp<player.hp){
                    current.draw();
                    current.addSkill("dpcqr_nature_poison");
                }
            }
        });
    },
                ai:{
                    threaten:5,
                    expose:0.05,
                },
            },
            "dpcqr_shigang":{
                enable:"phaseUse",
                usable:1,
                filter:function(event,player){
        return player.countCards('h','sha')>0||player.countCards('h','shan')>0;
    },
                filterTarget:function(card,player,target){
        return target!=player;
    },
                filterCard:{
                    name:["sha","shan"],
                },
                check:function(card){
        return 7-get.value(card);
    },
                content:function(){
        var A=["狂狮怒罡！","喝啊！"].randomGet();player.say(A);game.delay(2.5);
        target.randomDiscard('he',true);
        player.useCard({name:'juedou'},target,false).animate=false;
    },
                ai:{
                    order:9,
                    result:{
                        target:-1,
                    },
                    threaten:2,
                    expose:0.25,
                },
                group:["dpcqr_shigang_damage"],
                subSkill:{
                    damage:{
                        frequent:true,
                        trigger:{
                            player:"damageAfter",
                        },
                        filter:function(event,player){
                if(get.type(event.card,"trick")=="trick") return true;
            },
                        content:function(){
                var A=["伤我萧家者！一个不留！","我萧战就算是战死！你们也休想入我萧家一步！","今日你敢动我萧家，他日我萧家定要加倍奉还！"].randomGet();
                player.say(A);game.delay(2.5);
                var buff=["dpcqr_nature_gold"].randomGet();
                player.addSkill(buff);
                player.gain(game.createCard('dpcqr_huiqidan'))._triggered=null;
                player.addMark("dpcqr_quance");
            },
                        sub:true,
                    },
                },
            },
            "dpcqr_quance":{
                trigger:{
                    global:"phaseJieshuEnd",
                },
                priority:202012190586889,
                forced:true,
                filter:function(event,player,target){
        return game.hasPlayer(function(current){
            if(event.player.countCards("h")>current.hp) return true;
        });
    },
                content:function(){
        game.countPlayer(function(current){
            if(trigger.player.countCards("h")>current.hp){
                current.addMark("dpcqr_quance");
            }
        });
    },
                marktext:"谋",
                intro:{
                    name:"权策",
                    content:"数量:#",
                },
                ai:{
                    threaten:5,
                    expose:0.01,
                },
                group:["dpcqr_quance_changeHp"],
                subSkill:{
                    changeHp:{
                        forced:true,
                        trigger:{
                            global:["recoverEnd","loseHpEnd","damageEnd","changeHp"],
                        },
                        prompt:function(event,player,target){
                return "是否对 "+get.translation(event.player)+" 发动技能〖权策〗";
            },
                        priority:20201219076889,
                        filter:function(event,player){
                if(event.player.storage.dpcqr_quance>0&&event.player!=event.source) return true;
                return false;
            },
                        content:function(){
                "step 0"
                var target=trigger.player;
                player.chooseControl("令 "+get.translation(target)+" 摸牌并使用牌","令 "+get.translation(target)+" 使用牌并弃牌").ai=function(event,player){
                    if(get.attitude(player,target)>0) return "令 "+get.translation(target)+" 摸牌并使用牌";
                    if(get.attitude(player,target)<=0) return "令 "+get.translation(target)+" 使用牌并弃牌";
                };
                "step 1"
                var target=trigger.player;
                var A="令 "+get.translation(target)+" 摸牌并使用牌";
                var B="令 "+get.translation(target)+" 使用牌并弃牌";
                var number=Math.max(1,Math.floor(trigger.player.storage.dpcqr_quance/2));
                if(result.control==A){
                    var chat1=["现在暂且养精蓄锐","与加列撕破脸皮是迟早的事","(′ノ`〃)"].randomGet();
                    player.say(chat1);game.delay(2.5);
                    trigger.player.draw(number);
                    trigger.player.chooseToUse().animate=false;
                    trigger.player.removeMark("dpcqr_quance",trigger.player.storage.dpcqr_quance);
                }
                if(result.control==B){
                    var chat2=["哼！你早该料到今日的！","哈哈哈！哈哈哈哈！！",'你又能挣扎到几时！？'].randomGet();
                    player.say(chat2);game.delay(2.5);
                    trigger.player.chooseToUse().animate=false;
                    trigger.player.chooseToDiscard("he",number,true);
                    trigger.player.removeMark("dpcqr_quance",trigger.player.storage.dpcqr_quance);
                }
                "step 2"
                trigger.player.update();
            },
                        sub:true,
                    },
                },
            },
            "dpcqr_leili":{
                enable:"phaseUse",
                usable:null,
                filterCard:function (card){
        return get.color(card)=='black';
    },
                filter:function(event,player){
        if(player.countCards('he',{color:'black'})>0) return true;
    },
                selectCard:1,
                position:"he",
                check:function(card){
        return 6-get.value(card);
    },
                filterTarget:function(card,player,target){
        return target!=player;
    },
                content:function(){
        var A=["杀光你们这群渣滓，我一人足矣！","嘿！","吃我一枪！"].randomGet();player.say(A);game.delay(2.5);
        player.useCard({name:'sha'},target,false).animate=false;
    },
                ai:{
                    order:function(){
            return get.order({name:'sha',color:'black'})+1&&get.order({name:'sha',color:'red'})-1;
        },
                    result:{
                        target:function(player,target){
                if(target.hp>player.hp&&target.hujia==0) return -5;
                if(target.hp>player.hp) return -4;
                if(target.hp==player.hp&&target.hujia==0) return -3;
                if(target.hp==player.hp) return -2;
                return -1;
            },
                    },
                    threaten:10,
                    expose:0.15,
                },
                group:["dpcqr_leili_thunder"],
                subSkill:{
                    thunder:{
                        trigger:{
                            source:"damageBegin",
                        },
                        prompt:function(event,player,target){
                return "是否对 "+get.translation(event.player)+" 发动技能〖雷厉〗";
            },
                        priority:202101018688589,
                        filter:function(event,player){
                if(event.player.hp>=player.hp&&event.nature!="thunder") return true;
                return false;
            },
                        check:function(event,player){
                if(get.attitude(player,event.player)<=0) return true;
                return false;
            },
                        content:function(){
                "step 0"
                player.draw();
                "step 1"
                trigger.player.damage("thunder",1,player);
            },
                        sub:true,
                    },
                },
            },
            "dpcqr_shisheng":{
                forced:true,
                init:function(player){
        player.storage.dpcqr_shisheng=3;
    },
                mark:true,
                marktext:"噬",
                intro:{
                    name:"噬生",
                    content:"数量:#",
                },
                trigger:{
                    source:"damageEnd",
                    player:"damageEnd",
                },
                property:202101010659689000,
                filter:function(event,player){
        return player==event.source&&event.nature=="thunder"||player!=event.source;
    },
                content:function(){
        "step 0"
        event.shisheng=player.storage.dpcqr_shisheng;
        "step 1"
        if(event.shisheng<3){
            var A=["哼！一群鼠辈！"].randomGet();player.say(A);game.delay(2.5);
            player.addMark("dpcqr_shisheng");
            player.update();
        }
        "step 2"
        if(event.shisheng<player.hp){
            var A=["来啊！一起上吧！"].randomGet();player.say(A);game.delay(2.5);
            player.hp--;
            player.update();
        }else{
            player.getStat().card.sha=0;
            if(!player.hasSkill("dpcqr_shisheng_draw"))
            player.addSkill("dpcqr_shisheng_draw");
            player.addMark("dpcqr_shisheng_draw");
        }
        
    },
                group:["dpcqr_shisheng_dying"],
                subSkill:{
                    draw:{
                        trigger:{
                            player:"drawBegin",
                        },
                        forced:true,
                        content:function(){
                var num=player.storage.dpcqr_shisheng_draw;
                trigger.num+=num;
                player.removeMark("dpcqr_shisheng_draw",num);
                player.removeSkill("dpcqr_shisheng_draw")
            },
                        intro:{
                            name:"噬生",
                            content:"下次摸牌的数量+#",
                        },
                        marktext:"雷",
                        mod:{
                            cardUsable:function(card,player,num){
                    if(player.storage.dpcqr_shisheng_draw>=1){
                        if(card.name=='sha') return num+player.storage.dpcqr_shisheng_draw;
                    }
                },
                        },
                        ai:{
                            threaten:4,
                        },
                        group:[],
                        sub:true,
                    },
                    phase:{
                        trigger:{
                            player:"phaseJieshuBefore",
                        },
                        forced:true,
                        property:202101018658259,
                        content:function(){
                player.removeMark("dpcqr_shisheng_draw",player.storage.dpcqr_shisheng_draw);
                player.removeSkill("dpcqr_shisheng_draw");
            },
                        sub:true,
                    },
                    dying:{
                        trigger:{
                            source:"dyingEnd",
                        },
                        filter:function(event,player){
                return player.storage.dpcqr_shisheng>0;
            },
                        property:20210102000000000,
                        forced:true,
                        content:function(){
                var A=["<font color=#FF4500>一个！都别想跑！</font> "].randomGet();player.say(A);game.delay(2.5); 
                player.removeMark("dpcqr_shisheng");
                player.recover();
            },
                        sub:true,
                    },
                    damage:{
                        trigger:{
                            player:"damageEnd",
                        },
                        forced:true,
                        filter:function(event,player){
                return player.storage.dpcqr_shisheng<3;
            },
                        content:function(){
                var A=["哼！一群鼠辈！"].randomGet();player.say(A);game.delay(2.5);
                player.addMark("dpcqr_shisheng");
            },
                        sub:true,
                    },
                },
            },
            "dpcqr_lenghuo":{
                trigger:{
                    source:"damageBegin",
                },
                frequent:true,
                priority:202101130855,
                filter:function(event,player){
        return event.player.countCards("h")>player.countCards("h")&&event.nature!="diffice";
    },
                content:function(){
        var chat=["冷吗？这就对了！","嘿！这火焰的滋味如何！？","骨灵冷火！"].randomGet();
        var natures="diffice";
        trigger.player.damage(natures,trigger.num,player);
        player.say(chat);
        game.delay(2.5);
        trigger.cancel();
    },
                group:["dpcqr_lenghuo_damage","dpcqr_lenghuo_phase"],
                subSkill:{
                    damage:{
                        trigger:{
                            source:"damageEnd",
                        },
                        frequent:true,
                        filter:function(event,player){
                if(event.nature=="diffice") return true;
                return false;
            },
                        content:function(){
                player.addMark("dpcqr_lenghuo_damage",1);
                player.maxHp++;
                player.update();
            },
                        sub:true,
                    },
                    phase:{
                        trigger:{
                            player:"phaseUseBegin",
                        },
                        frequent:true,
                        filter:function(event,player){
                if(player.storage.dpcqr_lenghuo_damage>=1) return true;
                return false;
            },
                        content:function(){
                var num=player.storage.dpcqr_lenghuo_damage;
                player.maxHp-=num;
                player.removeMark("dpcqr_lenghuo_damage",num);
                player.update();
            },
                        sub:true,
                    },
                },
            },
            "dpcqr_shouyie":{
                enable:"phaseUse",
                usable:null,
                filter:function(event,player){
        if(player.countCards('he')>=2) return true;
    },
                filterCard:function(card){
        if(ui.selected.cards.length){
            return get.suit(card)!=get.suit(ui.selected.cards[0]);
        }
        return true;
    },
                complexCard:true,
                selectCard:2,
                position:"he",
                check:function(card){
        return 7-get.value(card);
    },
                filterTarget:function(card,player,target){
        if(target.hasSkill("dpcqr_shouyie_fire")||target==player||player==target) return false;
        return true;
    },
                content:function(){
        var name=target.name;
        target.addSkill("dpcqr_shouyie_fire");
        player.addMark(name);
        player.addMark("dpcqr_shouyie");
    },
                ai:{
                    order:5,
                    result:{
                        target:function(player,target){
                if(get.attitude(player,target)>0) return 5;
            },
                    },
                    threaten:3,
                    expose:0.12,
                },
                subSkill:{
                    fire:{
                        trigger:{
                            source:"damageEnd",
                        },
                        priority:202101148056989000,
                        forced:true,
                        content:function(){
                var name=player.name;
                trigger.player.addSkill("dpcqr_nature_fire");
                player.recover();
                game.countPlayer(function(current){
                    if(current.countMark(name)&&current.countMark("dpcqr_shouyie")){
                        current.recover();
                        current.removeMark(name);
                        current.removeMark("dpcqr_shouyie");
                    }
                });
                player.removeSkill("dpcqr_shouyie_fire");
            },
                        mark:true,
                        marktext:"授",
                        intro:{
                            name:"授业",
                            content:function(storage,player,skill){
                    var A=player.name;
                    var B=game.filterPlayer(function(current){
                        return current.countMark(A)&&current.countMark("dpcqr_shouyie")
                    })
                    return "下次造成的伤害追加火焰效果，且与 "+get.translation(B)+" 恢复一点体力";
                },
                        },
                        sub:true,
                    },
                },
            },
            "dpcqr_xvling":{
                trigger:{
                    player:["respondEnd","useCardEnd"],
                },
                forced:true,
                priority:20210114076585,
                filter:function(event,player){
        if(_status.currentPhase==player) return true;
        return false;
    },
                content:function(){
        player.update();
        player.addMark("dpcqr_xvling",trigger.cards.length);
    },
                init:function(player){
        player.storage.dpcqr_xvling=0;
    },
                marktext:"灵",
                intro:{
                    name:"虚灵",
                    content:"已使用或打出#张牌",
                },
                ai:{
                    threaten:5,
                    effect:{
                        player:function(card,player){
                if(player.countCards('h')>0) return 10;
            },
                    },
                    noh:true,
                },
                group:["dpcqr_xvling_phase","dpcqr_xvling_damage","dpcqr_xvling_end"],
                subSkill:{
                    phase:{
                        trigger:{
                            player:"phaseDrawBegin",
                        },
                        priority:202101140766885,
                        forced:true,
                        content:function(){
                player.update();
                var number=Math.min(7,(player.maxHp-player.hp)+player.storage.dpcqr_xvling);
                trigger.num=number;
                player.removeMark("dpcqr_xvling",player.storage.dpcqr_xvling);
            },
                        mod:{
                            maxHandcard:function (player,num){
                    var number=Math.min(7,(player.maxHp-player.hp)+player.storage.dpcqr_xvling);
                    return num=1;
                },
                        },
                        sub:true,
                    },
                    damage:{
                        trigger:{
                            player:"damageBegin",
                        },
                        forced:true,
                        priority:-202101139999999,
                        filter:function(event,player){
                if(player.countCards('h')==0) return true;
                return false;
            },
                        content:function(){
                player.update();
                var number=Math.min(7,(player.maxHp-player.hp)+player.storage.dpcqr_xvling);
                player.recover(trigger.num);
                player.draw();
                trigger.num=null;
            },
                        sub:true,
                    },
                    end:{
                        trigger:{
                            player:"loseEnd",
                        },
                        forced:true,
                        filter:function(event,player){
                if(player.countCards('h')==0&&event.hs&&event.hs.length>0) return true;
                return false;
            },
                        content:function(){
                player.update();
                game.countPlayer(function(current){
                    if(_status.currentPhase==current){
                        current.damage(player);
                    }
                });
            },
                        sub:true,
                    },
                },
            },
            "dpcqr_qingwu":{
                forced:true,
                trigger:{
                    source:"damageEnd",
                },
                prompt:function(event,player,target){
        return "是否对 "+get.translation(event.player)+" 发动技能〖清妩〗";
    },
                priority:202101220753896,
                filter:function(event,player){
        if(player.countCards('he')>0&&event.player.isAlive()&&!event.player.countCards('j',{name:"lebu"})) return true;
        return player.countCards('he')>0&&event.player.isAlive();
    },
                content:function(){
        "step 0"
        var target=trigger.player;
        player.chooseControl("对"+get.translation(target)+"发动清妩","取消").ai=function(event,player){
            if(get.attitude(player,target)>0&&player.hp<=player.maxHp/2) return "对"+get.translation(target)+"发动清妩";
            if(get.attitude(player,target)<=0&&target.countCards("he")>0) return "对"+get.translation(target)+"发动清妩";
            return "取消"
        };
        "step 1"
        var target=trigger.player;
        var A="对"+get.translation(target)+"发动清妩";
        var B="取消"
        if(result.control==A){
            player.chooseToDiscard('he',true).ai=function(card){
                return 6-ai.get.value(card);
            };
        }if(result.control==B){
            event.finish();
        }
        "step 2"
        if(result.bool){
            event.suits=get.suit(result.cards);
            event.cards=get.cards();
            player.showCards(event.cards);
        }else{
            event.finish();
        }
        "step 3" 
        if(result.bool){
            event.suites=get.suit(event.cards);
        }
        "step 4"
        if(event.suits!=event.suites){
            player.discardPlayerCard("hej",trigger.player,true);
        }if(event.suits==event.suites){
            player.turnOver();
            event.finish();
        }
        "step 5"
        var card=get.cardPile('lebu',true);
        var chat1=['废物！','垃圾！','真TM碍眼！'].randomGet();
        player.say(chat1);game.delay(0.5);
        trigger.player.turnOver();
    },
                ai:{
                    threaten:3,
                    expose:0.03,
                },
                group:["dpcqr_qingwu_player"],
                subSkill:{
                    player:{
                        forced:true,
                        trigger:{
                            player:"damageEnd",
                        },
                        prompt:"清妩：是否弃置一张牌",
                        filter:function(event,player){
                if(player.countCards('he')>0&&event&&event.source) return true;
                return false;
            },
                        priority:20210122087692562000,
                        content:function(){
                "step 0"
                var target=trigger.source;
                player.chooseControl("对"+get.translation(target)+"发动清妩","取消").ai=function(event,player){
                    if(get.attitude(player,target)>0&&player.hp>player.maxHp/2) return "取消";
                    return "对"+get.translation(target)+"发动清妩";
                };
                "step 1"
                var target=trigger.source;
                var A="对"+get.translation(target)+"发动清妩";
                var B="取消"
                if(result.control==A){
                    player.chooseToDiscard('he',true).ai=function(card){
                        return 6-ai.get.value(card);
                    };
                }if(result.control==B){
                    event.finish();
                }
                "step 2"
                if(result.bool){
                    event.suits=get.suit(result.cards);
                    event.cards=get.cards();
                    player.showCards(event.cards);
                }else{
                    event.finish();
                }
                "step 3" 
                if(result.bool){
                    event.suites=get.suit(event.cards);
                }
                "step 4"
                if(event.suits!=event.suites){
                    player.discardPlayerCard("hej",trigger.source,true);
                }if(event.suits==event.suites){
                    player.turnOver();
                    event.finish();
                }
                "step 5"
                var card=get.cardPile('lebu',true);
                var chat2=['啧！','这废物长本事了！','离我远点！','爬开！！'].randomGet();
                player.say(chat2);game.delay(0.5);
                trigger.source.turnOver();
            },
                        sub:true,
                    },
                    phase:{
                        trigger:{
                            global:["phaseUseSkipped","phaseUseCancelled"],
                        },
                        filter:function(event,player){
                if(player!=event.player) return true;
                return false;
            },
                        forced:true,
                        content:function(){
                var chat3=['嘁!不过如此!','省省吧，废物！'].randomGet();player.say(chat3);
                player.recover();
                player.draw();
                trigger.player.draw();
            },
                        sub:true,
                    },
                },
            },
            "dpcqr_yisui":{
                trigger:{
                    global:["turnOverEnd"],
                },
                frequent:true,
                check:function(event,player){
        return true;
    },
                content:function (){
        "step 0"
        player.draw();
        "step 1"
        player.chooseTarget(function(card,player,target){
            return target.countCards('h')<=player.countCards('h')&&target!=player;
        }).set("ai",function(target){
            if(get.attitude(player,target)>0&&player.hp<=player.maxHp/4||get.attitude(player,target)>0&&player.hp<=2) return 5;
            if(get.attitude(player,target)>0&&player.countCards('h')<player.hp) return 3;
            if(get.attitude(player,target)<=0&&target.countCards("h")==0) return 2;
            return 1;
        });
        "step 2"
        if(result.bool){
            event.targets=result.targets.slice(0);
            event.targets.sort(lib.sort.seat);
        }else{
            event.finish();
        }
        "step 3"
        if(event.targets.length){
            var target=event.targets.shift();
            target.chooseControl("令"+get.translation(player)+"恢复一点体力并摸/弃置牌","令"+get.translation(player)+"对你使用一张风属性【杀】且你获得增益").ai=function(){
                if(get.attitude(target,player)>0){
                    if(player.hp>2&&target.countCards("h",{name:"shan"})>1&&target.countCards("h",{name:"sha"})>1) return "令"+get.translation(player)+"对你使用一张风属性【杀】且你获得增益";
                    if(player.hp>2&&target.hujia>=1&&target.hp>target.maxHp/3) return "令"+get.translation(player)+"对你使用一张风属性【杀】且你获得增益"; 
                    return "令"+get.translation(player)+"恢复一点体力并摸/弃置牌";
                }if(get.attitude(target,player)<=0){
                    if(target.hp+target.hujia<=target.maxHp/2&&target.countCards("h",{name:"shan"})<2) return "令"+get.translation(player)+"恢复一点体力并摸/弃置牌";
                    if(target.countCards({name:"shan"})==0&&target.hp+target.hujia<=2) return "令"+get.translation(player)+"恢复一点体力并摸/弃置牌";
                    if(player.hp==player.maxHp&&player.countCards("h")>player.hp) return "令"+get.translation(player)+"恢复一点体力并摸/弃置牌";
                    return "令"+get.translation(player)+"对你使用一张风属性【杀】且你获得增益";
                }
            };
            event.current=target;
        }
        "step 4"
        if(result.control=="令"+get.translation(player)+"恢复一点体力并摸/弃置牌"){
            player.recover();
            player.update();
            event.goto(5);
        }if(result.control=="令"+get.translation(player)+"对你使用一张风属性【杀】且你获得增益"){
            player.useCard({name:"sha",nature:"wind"},event.current,false).animate=false;
            player.update();
            event.goto(6);
        }
        "step 5"
        if(player.countCards('h')>player.hp){
            player.chooseToDiscard('h',player.countCards('h')-player.hp,true);
        }
        if(player.countCards('h')<player.hp){
            player.draw(player.hp-player.countCards('h'));
        }
        event.finish();
        "step 6"
        if(player.hp<player.maxHp){
            event.current.addTempSkill("dpcqr_yisui_mod",{player:"phaseJieshuBefore"});
            event.current.addMark("dpcqr_yisui_mod",Math.min(3,(player.maxHp-player.hp)));
        }
        event.finish();
    },
                subSkill:{
                    draw:{
                        trigger:{
                            player:["phaseDrawBegin"],
                        },
                        forced:true,
                        content:function(){
                game.countPlayer(function(current){
                    if(current!=player&&current.isMaxHandcard()){
                        if(player.storage.dpcqr_yisui_mod>0){
                            trigger.num+=player.storage.dpcqr_yisui_mod;
                        }else{
                            event.number=Math.abs(player.countCards('h')-current.countCards('h'));
                            player.addMark("dpcqr_yisui_mod",event.number);
                        }
                    }
                });
            },
                        sub:true,
                    },
                    mod:{
                        trigger:{
                            player:"phaseDrawBegin",
                        },
                        forced:true,
                        content:function(){
                trigger.num+=player.storage.dpcqr_yisui_mod;
            },
                        init:function(player){
                player.storage.dpcqr_yisui_mod=0;
            },
                        intro:{
                            name:"依随",
                            content:"自身回合结束前，阶段摸牌与出杀次数+#",
                        },
                        marktext:"随",
                        mark:true,
                        mod:{
                            cardUsable:function(card,player,num){
                    if(card.name=='sha') return num+player.storage.dpcqr_yisui_mod;
                },
                        },
                        group:["dpcqr_yisui_remove"],
                        sub:true,
                    },
                    discard:{
                        trigger:{
                            global:"phaseDiscardBefore",
                        },
                        forced:true,
                        filter:function(event,player){
                if(event.player.countCards('h')<=player.countCards('h')&&event.player!=player) return true;
                return false;
            },
                        content:function(){
                trigger.cancel();
                trigger.player.addMark("dpcqr_yisui_sha");
            },
                        sub:true,
                    },
                    sha:{
                        trigger:{
                            global:"phaseJieshuBegin",
                        },
                        forced:true,
                        filter:function(event,player){
                if(event.player.storage.dpcqr_yisui_sha>0) return true;
                return false;
            },
                        content:function(){
                player.useCard({name:"sha",nature:"poison"},trigger.player,false).animate=false;
            },
                        sub:true,
                    },
                    remove:{
                        trigger:{
                            player:"phaseDiscardEnd",
                        },
                        forced:true,
                        content:function(){
                player.removeMark("dpcqr_yisui_mod",player.storage.dpcqr_yisui_mod);
            },
                        sub:true,
                    },
                },
            },
            "shundiy_wushen":{
                forced:true,
                trigger:{
                    player:["useCardEnd","respondEnd"],
                },
                filter:function(event,player){
        if(event.card.name=="sha"||event.card.name=="shan") return true;
    },
                content:function(){
        "step 0"
        if(trigger.card.name=="sha"){
            event.goto(1);
        }
        if(trigger.card.name=="shan"){
            event.goto(2);
        }
        "step 1"
        player.draw();
        player.removeMark("shundiy_dixing");
        event.finish();
        "step 2"
        player.chooseTarget(function(card,player,target){
            return target.countCards("hej")>0;
        }).set("ai",function(target){
            if(get.attitude(player,target)<=0&&target.countCards('he')>0) return 2;
            if(get.attitude(player,target)>0&&target.countCards('j')>0) return 3;
            return 1;
        });
        "step 3"
        if(result.bool){
            var target=result.targets[0];
            player.discardPlayerCard("hej",target,true);
        }
    },
                ai:{
                    threaten:5,
                },
            },
            "shundiy_dixing":{
                trigger:{
                    global:"phaseJieshuAfter",
                },
                frequent:true,
                filter:function(event,player){
        if(player.hasSkill("shundiy_dixing_yizhi")) return true;
        return false;
    },
                content:function(){
        "step 0"
        if(player.storage.shundiy_dixing>1){
            player.removeMark("shundiy_dixing");
            event.finish();
        }else{
            event.goto(1);
        }
        "step 1"
        player.removeMark("shundiy_dixing");
        player.removeSkill("shundiy_dixing_yizhi");
        //if(player.hujia>0){player.changeHujia(-1);}
        "step 2"
        if(player.hp<=1){
            player.recover();
        }else{
            if(!player.hujia>0){
                player.changeHujia();
            }else{
                player.draw();
            }
        }
    },
                init:function(player){
        player.storage.shundiy_dixing=0;
    },
                marktext:"𒆙",
                intro:{
                    name:"地星",
                    content:"冷却时间：#回合",
                },
                ai:{
                    threaten:5,
                },
                group:["shundiy_dixing_Begin","shundiy_dixing_usedu"],
                subSkill:{
                    Begin:{
                        trigger:{
                            player:["loseHpBegin","damageBegin"],
                        },
                        frequent:true,
                        priority:-202011260875361,
                        filter:function(event,player){
                if(player.hasSkill("shundiy_dixing_yizhi")) return false;
                return true;
            },
                        content:function(){
                trigger.num=0;
                player.addMark("shundiy_dixing",6);
                player.addSkill("shundiy_dixing_yizhi");
                player.removeSkill("shundiy_dixing_usedu");
                player.update();
            },
                        ai:{
                            threaten:2,
                        },
                        sub:true,
                    },
                    yizhi:{
                        ai:{
                            threaten:3,
                        },
                        sub:true,
                    },
                    usedu:{
                        ai:{
                            usedu:function(player){
                    if(!player.hasSkill("shundiy_dixing_yizhi")) return true;
                    return false;
                },
                        },
                        sub:true,
                    },
                },
            },
            "shundiy_tianxing":{
                trigger:{
                    source:"damageBegin",
                },
                prompt:function(event,player,target){
        return "是否对 "+get.translation(event.player)+" 发动技能【天星】";
    },
                filter:function(event,player){
        if(event.player.countCards('h')!=player.countCards('h')&&event.player!=player&&!event.nature) return true;
    },
                check:function(event,player){
        var card=event.player.countCards('h');
        var cards=player.countCards('h');
        var number=Math.min(3,Math.ceil(Math.abs((card-cards)/2)));
        if(get.attitude(player,event.player)<=0&&player.hp>2&&event.num<=number) return true;
        return false;
    },
                content:function(){
        "step 0"
        player.$fullscreenpop('<font color=#F4A460>天星</font>');
        game.delay(2.5);
        player.loseHp();
        player.changeHujia();
        player.update();
        "step 1"
        var card=trigger.player.countCards('h');
        var cards=player.countCards('h');
        var number=Math.min(3,Math.ceil(Math.abs((card-cards)/2)));
        trigger.num=null;
        trigger.player.damage(player,"soil",number);
        player.draw(number);
    },
                ai:{
                    threaten:7,
                    expose:0.05,
                },
            },
            "shundiy_guhan":{
                trigger:{
                    target:"useCardToTargeted",
                },
                forced:true,
                priority:9,
                filter:function(event,player){
        return get.color(event.card)=="black";
    },
                content:function(){
        if(trigger.card.number>player.maxHp){
            trigger.player.chooseToDiscard("he",true);
        }else{
            player.draw();
        }
    },
                mod:{
                    globalFrom:function(from,to,distance){
            var num=from.maxHp-from.hp;
            return distance-num;
        },
                    cardUsable:function(card,player,num){
            var number=player.maxHp-player.hp;
            if(card.name=="sha") return num+number;
        },
                },
                ai:{
                    threaten:2,
                    effect:{
                        player:function(card,player){
                if(get.color(card)=="black") return 2;
            },
                        target:function(card,player){
                if(get.color(card)=="black") return 2;
            },
                    },
                },
            },
            "shundiy_lingfeng":{
                trigger:{
                    player:"useCardToPlayered",
                },
                filter:function(event,player){
        return event.card.name=="sha"&&get.color(event.card)=="black";
    },
                frequent:true,
                check:function(event,player){
        return true;
    },
                content:function(){
        var num=player.countMark("shundiy_lingfeng_maxHp");
        if(player.inRange(trigger.target)&&trigger.target.inRange(player)){
            player.draw();
            trigger.target.draw();
        }
        if(player.inRange(trigger.target)&&!trigger.target.inRange(player)){
            player.addTempSkill("shundiy_lingfeng_damage",{player:"useCardAfter"});
        }
        if(!player.inRange(trigger.player)&&trigger.player.inRange(player)){
            trigger.player.addSkill("dpcqr_nature_ice");
        }
        player.gainMaxHp();
        player.storage.shundiy_lingfeng_maxHp=num+1;
        player.addSkill("shundiy_lingfeng_maxHp");
    },
                ai:{
                    threaten:2,
                },
                group:["shundiy_lingfeng_target"],
                subSkill:{
                    target:{
                        trigger:{
                            target:"useCardToTargeted",
                        },
                        filter:function(event,player){
                return event.card.name=="sha"&&get.color(event.card)=="black";
            },
                        frequent:true,
                        check:function(event,player){
                return true;
            },
                        content:function(){
                var num=player.countMark("shundiy_lingfeng_maxHp");
                if(player.inRange(trigger.player)&&trigger.player.inRange(player)){
                    player.draw();
                    trigger.player.draw();
                }
                if(player.inRange(trigger.player)&&!trigger.player.inRange(player)){
                    trigger.player.addTempSkill("shundiy_lingfeng_damage",{player:"useCardAfter"});
                }
                if(!player.inRange(trigger.player)&&trigger.player.inRange(player)){
                    trigger.player.addSkill("dpcqr_nature_ice");
                }
                player.gainMaxHp();
                player.storage.shundiy_lingfeng_maxHp=num+1;
                player.addSkill("shundiy_lingfeng_maxHp");
            },
                        init:function(player){
                player.storage.shundiy_lingfeng_ice=0;
            },
                        sub:true,
                    },
                    maxHp:{
                        trigger:{
                            player:"phaseAfter",
                        },
                        forced:true,
                        content:function(){
                player.loseMaxHp(player.countMark("shundiy_lingfeng_maxHp"));
                player.storage.shundiy_lingfeng_maxHp=0;
                player.removeSkill("shundiy_lingfeng_maxHp");
            },
                        sub:true,
                    },
                    damage:{
                        trigger:{
                            source:"damageBegin",
                        },
                        filter:function(event,player){
                return event.card.name=="sha";
            },
                        forced:true,
                        content:function(){
                trigger.num++;
                player.removeSkill("shundiy_lingfeng_damage");
            },
                        sub:true,
                    },
                    ice:{
                        trigger:{
                            player:"phaseAfter",
                        },
                        forced:true,
                        content:function(){
                player.addSkill("dpcqr_nature_ice");
                player.removeSkill("shundiy_lingfeng_ice");
            },
                        sub:true,
                    },
                },
            },
            "dpcqr_liancai":{
                trigger:{
                    global:"discardEnd",
                },
                prompt:function(event,player,target){
        return "是否对 "+get.translation(event.player)+" 发动技能〖敛财〗";
    },
                filter:function(event,player){
        return event.player!=player&&event.player.countCards("he")+event.num>player.storage.dpcqr_liancai;
    },
                check:function(event,player){
        if(get.attitude(player,event.player)>0&&event.player.countCards("he")-1>player.countCards("he")&&player.countCards("h")>2) return false;
        return true;
    },
                content:function(){
        "step 0"
        player.draw();
        player.addMark("dpcqr_liancai");
        player.update();
        "step 1"
        var chat1=["谢谢海老，雅妃一定不辜负您的期望","也不知道萧炎小弟弟……","若是没有些许底蕴，又怎能于此立足呢！"].randomGet();
        if(trigger.player.countCards("he")>player.countCards("he")){
            player.removeMark("dpcqr_liancai",Math.ceil(player.storage.dpcqr_liancai/2));
            player.discardPlayerCard("he",trigger.player,true);
        }
    },
                marktext:"敛",
                init:function(player){
        player.storage.dpcqr_liancai=0;
    },
                intro:{
                    name:"敛财",
                    content:function(storage){
            var num=storage/2;
            return "数量："+storage+"  拼点数+"+num;
        },
                },
                ai:{
                    threaten:5,
                    expose:0.006,
                },
            },
            "dpcqr_paimai":{
                trigger:{
                    global:"phaseDiscardBegin",
                },
                locked:true,
                forced:true,
                filter:function(event,player){
        return player.countCards("h")>0&&event.player.countCards("h")>0&&player!=event.player;
    },
                content:function(){
        var storage=Math.ceil(player.countMark("dpcqr_liancai")/2)+1;
        var chat1=["接下来的这件拍品……","可还有客人加价的?","有客人愿意出价吗?","下一件拍品，起拍价"+storage+"点！"].randomGet();
        var chat2=["谢谢这位客人的参与","不要灰心，下次您定能成功","阁下，很遗憾……","可以再稍微努力下哦","米特尔拍卖行随时欢迎您!"].randomGet();
        var chat3=["恭喜阁下赢得本次拍品","还望客人能够多多关照我们","成交!!"].randomGet();
        "step 0"
        player.say(chat1);
        game.delay(2.5);
        trigger.player.chooseBool("拍卖：是否与"+get.translation(player)+"拼点？").set("ai",function(){
            var target=trigger.player;var attitude=get.attitude(target,player);
            var storage=player.storage.dpcqr_liancai;var hp=player.hp;
            var maxHp=player.maxHp;var card=player.countCards("h");
            var CARD=target.countCards("h");var HP=target.hp;
            if(attitude>0&&storage<=4&&CARD>HP+1&&CARD>=3) return true;
            if(attitude>0&&storage<=6&&card-hp>storage&&CARD/2>=HP) return true;
            if(attitude<=0&&CARD>HP+1) return true;
            if(attitude>0&&hp<=2) return true;
            if(attitude>0&&hp<=maxHp/3) return true;
            if(attitude<=0&&CARD>=3&&storage<=8&&card<=storage) return true;
            if(attitude<=0&&CARD>=3&&hp==maxHp&&card<=storage) return true;
            return false;
        });
        "step 1"
        if(result.bool){
            var storage=player.storage.dpcqr_liancai;
            trigger.player.chooseToCompare(player).ai=function(card){
                var target=trigger.player;var val=get.value(card);
                var num=get.number(card);var attitude=get.attitude(target,player);
                var storage=player.storage.dpcqr_liancai;var hp=player.hp;
                var maxHp=player.maxHp;var card=player.countCards("h");
                var CARD=target.countCards("h");var HP=target.hp;
                
                if(attitude>0&&hp<=maxHp/3&&target.countCards("h",function(card){
                    if(val<=7) return num<=(storage/2)+0;
                })>0) return 16;
                if(attitude>0&&hp<=maxHp/3&&target.countCards("h",function(card){
                    if(val<=7) return num<=(storage/2)+1;
                })>0) return 15;
                if(attitude>0&&hp<=maxHp/3&&target.countCards("h",function(card){
                    if(val<=7) return num<=(storage/2)+2;
                })>0) return 14;
                if(attitude>0&&hp<=maxHp/3&&target.countCards("h",function(card){
                    if(val<=7) return num<=(storage/2)+3;
                })>0) return 13;
                if(attitude>0&&hp<=maxHp/3&&target.countCards("h",function(card){
                    if(val<=7) return num<=(storage/2)+4;
                })>0) return 12;
                
                if(attitude>0&&hp<=2&&target.countCards("h",function(card){
                    if(val<=6) return num<=(storage/2)+0;
                })>0) return 15;
                if(attitude>0&&hp<=2&&target.countCards("h",function(card){
                    if(val<=6) return num<=(storage/2)+1;
                })>0) return 14;
                if(attitude>0&&hp<=2&&target.countCards("h",function(card){
                    if(val<=6) return num<=(storage/2)+2;
                })>0) return 13;
                if(attitude>0&&hp<=2&&target.countCards("h",function(card){
                    if(val<=6) return num<=(storage/2)+3;
                })>0) return 12;
                
                if(attitude>0&&storage<=4&&CARD>HP+1&&CARD>=3&&target.countCards("h",function(card){
                    if(val<=6) return num>=(storage/2)+7;
                })>0) return 16;
                if(attitude>0&&storage<=4&&CARD>HP+1&&CARD>=3&&target.countCards("h",function(card){
                    if(val<=6) return num>=(storage/2)+6;
                })>0) return 15;
                if(attitude>0&&storage<=4&&CARD>HP+1&&CARD>=3&&target.countCards("h",function(card){
                    if(val<=6) return num>=(storage/2)+5;
                })>0) return 14;
                if(attitude>0&&storage<=4&&CARD>HP+1&&CARD>=3&&target.countCards("h",function(card){
                    if(val<=6) return num>=(storage/2)+4;
                })>0) return 13;
                if(attitude>0&&storage<=4&&CARD>HP+1&&CARD>=3&&target.countCards("h",function(card){
                    if(val<=6) return num>=(storage/2)+3;
                })>0) return 12;
                
                if(attitude>0&&storage<=6&&card-hp>storage&&CARD/2>=HP&&target.countCards("h",function(card){
                    if(val<=6) return num>=(storage/2)+7;
                })>0) return 16;
                if(attitude>0&&storage<=6&&card-hp>storage&&CARD/2>=HP&&target.countCards("h",function(card){
                    if(val<=6) return num>=(storage/2)+6;
                })>0) return 15;
                if(attitude>0&&storage<=6&&card-hp>storage&&CARD/2>=HP&&target.countCards("h",function(card){
                    if(val<=6) return num>=(storage/2)+5;
                })>0) return 14;
                if(attitude>0&&storage<=6&&card-hp>storage&&CARD/2>=HP&&target.countCards("h",function(card){
                    if(val<=6) return num>=(storage/2)+4;
                })>0) return 13;
                if(attitude>0&&storage<=6&&card-hp>storage&&CARD/2>=HP&&target.countCards("h",function(card){
                    if(val<=6) return num>=(storage/2)+3;
                })>0) return 12;
                
                if(attitude<=0&&CARD>HP+1&&target.countCards("h",function(card){
                    if(val<=7) return num>=(storage/2)+8;
                })>0) return 17;
                if(attitude<=0&&CARD>HP+1&&target.countCards("h",function(card){
                    if(val<=7) return num>=(storage/2)+7;
                })>0) return 16;
                if(attitude<=0&&CARD>HP+1&&target.countCards("h",function(card){
                    if(val<=7) return num>=(storage/2)+6;
                })>0) return 15;
                if(attitude<=0&&CARD>HP+1&&target.countCards("h",function(card){
                    if(val<=7) return num>=(storage/2)+5;
                })>0) return 14;
                if(attitude<=0&&CARD>HP+1&&target.countCards("h",function(card){
                    if(val<=7) return num>=(storage/2)+4;
                })>0) return 13;
                if(attitude<=0&&CARD>HP+1&&target.countCards("h",function(card){
                    if(val<=7) return num>=(storage/2)+3;
                })>0) return 12;
                
                if(attitude<=0&&CARD>=3&&storage<=8&&card<=storage&&target.countCards("h",function(card){
                    if(val<=7) return num>=(storage/2)+7;
                })>0) return 16;
                if(attitude<=0&&CARD>=3&&storage<=8&&card<=storage&&target.countCards("h",function(card){
                    if(val<=7) return num>=(storage/2)+6;
                })>0) return 15;
                if(attitude<=0&&CARD>=3&&storage<=8&&card<=storage&&target.countCards("h",function(card){
                    if(val<=7) return num>=(storage/2)+5;
                })>0) return 14;
                if(attitude<=0&&CARD>=3&&storage<=8&&card<=storage&&target.countCards("h",function(card){
                    if(val<=7) return num>=(storage/2)+4;
                })>0) return 13;
                if(attitude<=0&&CARD>=3&&storage<=8&&card<=storage&&target.countCards("h",function(card){
                    if(val<=7) return num>=(storage/2)+3;
                })>0) return 12;
                
                if(attitude<=0&&CARD>=3&&hp==maxHp&&card<=storage&&target.countCards("h",function(card){
                    if(val<=7) return num>=(storage/2)+7;
                })>0) return 16;
                if(attitude<=0&&CARD>=3&&hp==maxHp&&card<=storage&&target.countCards("h",function(card){
                    if(val<=7) return num>=(storage/2)+6;
                })>0) return 15;
                if(attitude<=0&&CARD>=3&&hp==maxHp&&card<=storage&&target.countCards("h",function(card){
                    if(val<=7) return num>=(storage/2)+5;
                })>0) return 14;
                if(attitude<=0&&CARD>=3&&hp==maxHp&&card<=storage&&target.countCards("h",function(card){
                    if(val<=7) return num>=(storage/2)+4;
                })>0) return 13;
                if(attitude<=0&&CARD>=3&&hp==maxHp&&card<=storage&&target.countCards("h",function(card){
                    if(val<=7) return num>=(storage/2)+3;
                })>0) return 12;
                return 1;
            };
        }else{
            event.finish();
        }
        "step 2"
        if(result.bool){
            var card1=result.player;
            var card2=result.target;
            player.say(chat3);
            game.delay(2.5);
            player.chooseToDiscard("he",true);
            trigger.cancel();
            if(get.position(card1)=='d'){
                trigger.player.gain(card1,'gain2');
            }
            if(get.position(card2)=='d'){
                trigger.player.gain(card2,'gain2');
            }
            event.finish();
        }else{
            player.say(chat2);
            game.delay(2.5);
            player.recover();
            if(player.storage.dpcqr_liancai>0){
                event.goto(3);
            }else{
                event.finish();
            }
        }
        "step 3"
        event.num=player.storage.dpcqr_liancai;
        "step 4"
        event.num--;
        player.chooseToUse().animate=false;
        "step 5"
        if(result.bool&&event.num>0){
            event.goto(4);
        }else{
            event.goto(6);
        }
        "step 6"
        event.num=player.storage.dpcqr_liancai;
        "step 7"
        event.num--;
        trigger.player.chooseToUse().animate=false;
        "step 8"
        if(result.bool&&event.num>0){
            event.goto(7);
        }else{
            event.finish();
        }
    },
                group:"dpcqr_paimai_num",
                subSkill:{
                    num:{
                        trigger:{
                            player:"compare",
                            target:"compare",
                        },
                        forced:true,
                        filter:function(event,player){
                return player.storage.dpcqr_liancai>0;
            },
                        content:function(){
                var number=player.storage.dpcqr_liancai;
                if(player==trigger.player){
                    trigger.num1+=number;
                }else{
                    trigger.num2+=number;
                }
                game.log(player,"的拼点点数增加"+number);
            },
                        sub:true,
                    },
                },
            },
            "dpcqr_yaomei":{
                forced:true,
                trigger:{
                    player:"phaseJieshuAfter",
                },
                filter:function(event,player){
        return player.storage.dpcqr_liancai>0;
    },
                content:function(){
        var chat1=["各位客人，还请先休息一会儿","还请阁下稍待片刻","呵呵，阁下还真是风趣呢！"].randomGet();
        var chat2=["按照拍卖行的规矩，我们将扣取一部分……","阁下的拍品很成功呢！","还望客人应予配合"].randomGet();
        "step 0"
        event.num=player.storage.dpcqr_liancai;
        player.removeMark("dpcqr_liancai",event.num);
        "step 1"
        game.countPlayer(function(current){
            if(current.countCards("he")>event.num&&current!=player){
                player.say(chat2);
                game.delay(2.5);
                current.chooseToDiscard("he",true);
            }
        });
        "step 2"
        game.countPlayer(function(current){
            if(current.countCards("he")<=event.num&&current!=player){
                player.say(chat1);
                game.delay(2.5);
                current.addSkill("dpcqr_nature_thunder");
                current.draw();
            }
        });
    },
                subSkill:{
                    damage:{
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        priority:-20210222182305784000,
                        content:function(){
                trigger.num--;
                player.removeSkill("dpcqr_yaomei_damage");
            },
                        mark:true,
                        marktext:"媚",
                        intro:{
                            name:"妖媚",
                            content:"下次造成的伤害减一",
                        },
                        sub:true,
                    },
                },
            },
            "dpcqr_huanqiang":{
                enable:"phaseUse",
                filter:function(event,player){
        return player.countCards("he")>0;
    },
                filterCard:1,
                selectCard:1,
                position:"he",
                check:function(card){
        return 7-get.value(card);
    },
                filterTarget:function(event,player,target){
        return player!=target&&!target.countMark("dpcqr_huanqiang");
    },
                content:function(){
        var name=target.name;
        target.addMark("dpcqr_huanqiang");
        target.addSkill("dpcqr_huanqiang_damage");
        player.addMark(name);
    },
                marktext:"枪",
                intro:{
                    name:"幻枪",
                    content:function(storage,player,skill){
            var num=player.name;
            var source=game.filterPlayer(function(current){
                return current.hasSkill("dpcqr_huanqiang")&&current.countMark(num);
            });
            return "若在自身回合内造成过伤害，则 "+get.translation(source)+" 在你回合结束时，视为对你使用一张风属性【杀】";             
        },
                },
                ai:{
                    order:3,
                    expose:0.15,
                    result:{
                        target:function(player,target){
                if(target.hp==target.maxHp) return -5;
                if(target.hp<=(target.maxHp/5)*3) return -4;
                if(target.hp<=target.maxHp/2) return -3;
                if(target.hp<=target.maxHp/3) return -2;
                return -1;
            },
                    },
                },
                subSkill:{
                    target:{
                        trigger:{
                            global:"damageEnd",
                        },
                        priority:202102284386825,
                        filter:function(event,player){
                if(event&&event.source){
                    var name=event.source.name;
                    return player.countMark(name)&&event.source.countMark("dpcqr_huanqiang")&&player.countCards("h")>0;
                }
            },
                        check:function(event,player,card){
                return get.attitude(player,event.player)<=0;
            },
                        content:function(){
                var num=trigger.source.name;
                "step 0"
                player.chooseToUse({
                    logSkill:"dpcqr_huanqiang_target",
                    preTarget:trigger.source,
                    prompt:'是否发动【幻枪】，对 '+get.translation(trigger.source)+' 使用一张牌？',
                    filterTarget:function(card,player,target){
                        return target==_status.event.preTarget;
                    },
                }).animate=false;
                "step 1"
                if(result.bool){
                    trigger.source.removeMark("dpcqr_huanqiang");
                    player.removeMark(num);
                }
            },
                        sub:true,
                    },
                    damage:{
                        trigger:{
                            player:"phaseEnd",
                        },
                        priority:2021329086285286,
                        forced:true,
                        content:function(){
                var name=player.name;
                game.countPlayer(function(current){
                    if(current.hasSkill("dpcqr_huanqiang")&&current.countMark(name)){
                        if(player.countMark("dpcqr_huanqiang_end")>=1){
                            player.removeMark("dpcqr_huanqiang_end",player.countMark("dpcqr_huanqiang_end"));
                            current.useCard({name:"sha",nature:"wind"},player);
                        }
                        player.removeMark("dpcqr_huanqiang");
                        player.removeSkill("dpcqr_huanqiang_damage");
                        current.removeMark(name);
                    }
                });
            },
                        group:"dpcqr_huanqiang_end",
                        sub:true,
                    },
                    end:{
                        trigger:{
                            source:"damageEnd",
                        },
                        forced:true,
                        priority:-202132938557680,
                        filter:function(event,player){
                return !player.countMark("dpcqr_huanqiang_end")&&_status.currentPhase==player;
            },
                        content:function(){
                player.addMark("dpcqr_huanqiang_end");
            },
                        sub:true,
                    },
                },
            },
            "dpcqr_ningsha":{
                forced:true,
                trigger:{
                    player:"drawEnd",
                },
                priority:2021022704689855,
                filter:function(event,player){
        return _status.currentPhase==player&&player.countMark("dpcqr_ningsha")<7;
    },
                content:function(){
        //var num=trigger.cards.length*0+1;
        var number=trigger.num*0+1;
        player.addMark("dpcqr_ningsha",number);
    },
                init:function(player){
        return player.storage.dpcqr_ningsha=0;
    },
                marktext:"纱",
                intro:{
                    name:"凝纱",
                    content:function(storage,player){
            var hp=player.hp*2;
            var num=Math.floor(storage/hp);
            return "数量："+storage+"<br>可减免 "+num+" 次伤害";
        },
                },
                ai:{
                    threaten:function(target,player,hp){
            var threaten=0.25;
            var num=player.countMark("dpcqr_ningsha");
            return threaten*=num;
        },
                },
                group:["dpcqr_ningsha_damage"],
                subSkill:{
                    damage:{
                        forced:true,
                        trigger:{
                            player:["damageBegin","loseHpBegin"],
                        },
                        filter:function(event,player){
                return player.storage.dpcqr_ningsha>=player.hp*2;
            },
                        priority:202102274386899,
                        content:function(){
                player.removeMark("dpcqr_ningsha",player.hp*2);
                player.draw();
                trigger.num--;
            },
                        sub:true,
                    },
                    wind:{
                        forced:true,
                        trigger:{
                            source:"damageBegin",
                        },
                        priority:-20210227076585,
                        content:function(){
                "step 0"
                var nat="wind";
                trigger.nature=nat;
                "step 1"
                player.removeSkill("dpcqr_ningsha_wind");
            },
                        mark:true,
                        marktext:"凝",
                        intro:{
                            name:"凝纱",
                            content:"下次造成的伤害变为风属性",
                        },
                        sub:true,
                    },
                },
            },
            "dpcqr_fengxiang":{
                trigger:{
                    player:["useCardEnd","respondEnd","loseEnd"],
                },
                priority:202102280682853,
                filter:function(event,player){
        return _status.currentPhase!=player&&!_status.currentPhase.countMark("dpcqr_fengxiang_use");
    },
                frequent:true,
                content:function(){
        var name=_status.currentPhase.name;
        _status.currentPhase.addMark("dpcqr_fengxiang_use");
        player.addMark("dpcqr_fengxiang");
        player.addMark(name);
    },
                mod:{
                    globalFrom:function(from,to){
            if(to.countMark("dpcqr_fengxiang_use")) return -Infinity;
        },
                },
                ai:{
                    threaten:2,
                    effect:{
                        result:{
                            target:function(player,target){
                    if(player.hp<=2&&target.countMark("dpcqr_fengxiang_use")&&player.countCards("h")-target.countCards("h")>1) return -4;
                    if(player.hp<=player.maxHp/2&&target.countMark("dpcqr_fengxiang_use")&&player.countCards("h")-target.countCards("h")>1) return -3; 
                    if(player.countCards("h")-target.countCards("h")<=1&&target.countMark("dpcqr_fengxiang_use")) return -2;
                    if(player.countCards("h")<=player.hp&&target.countMark("dpcqr_fengxiang_use")) return -1;
                },
                        },
                    },
                },
                group:"dpcqr_fengxiang_use",
                subSkill:{
                    use:{
                        trigger:{
                            player:"useCardToPlayered",
                        },
                        frequent:true,
                        filter:function(event,player,target){
                return event.target.countMark("dpcqr_fengxiang_use");
            },
                        priority:2021022803492868,
                        content:function(){
                var name=trigger.target.name;
                "step 1"
                player.draw();
                "step 2"
                if(player.countCards("h")>trigger.target.countCards("h")){
                    player.recover();
                    trigger.target.removeMark("dpcqr_fengxiang_use");
                    trigger.target.addSkill("dpcqr_nature_wind");
                    player.removeMark("dpcqr_fengxiang");
                    player.removeMark(name);
                }
            },
                        marktext:"翔",
                        intro:{
                            name:"风翔",
                            content:function(storage,player,skill){
                    var num=player.name;
                    var target=game.filterPlayer(function(current){
                        return current.countMark(num)&&current.countMark("dpcqr_fengxiang");
                    });
                    return get.translation(target)+" 与你的距离为一";
                },
                        },
                        sub:true,
                    },
                },
            },
            "shundiy_qiangxi":{
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return player.inRange(target)&&player!=target;
    },
                content:function (){
        "step 0"
        player.loseHp();
        player.update();
        "step 1"
        var A=player.maxHp-player.hp;
        target.damage();
        target.chooseToDiscard("he",A,true).ai=function(card){
            return 6-get.value(card);
        };
    },
                ai:{
                    order:7,
                    result:{
                        target:function (player,target){
                if(player.hp<=2) return 0;
                if(target.hp+target.hujia<=1) return -5;
                if(target.hp+target.hujia<=2) return -3;
                if(target.countCards("he")<=player.hp-1) return -2;
                return -1;
            },
                    },
                },
            },
            "zhundiy_zhiji":{
                enable:"phaseUse",
                filter:function(card,player,target){
        return player.countCards("he",{subtype:"equip1"})>0||player.countCards("he",{name:"sha"})>1;
    },
                filterTarget:function(card,player,target){
        return player!=target;
    },
                content:function(){
        "step 0"
        if(player.countCards("he",{subtype:"equip1"})>0&&player.countCards("he",{name:"sha"})>1){
            player.chooseControl('弃置一张武器牌','弃置两张【杀】');
        }
        if(player.countCards("he",{subtype:"equip1"})>0&&player.countCards("he",{name:"sha"})<=1){
            player.chooseControl('弃置一张武器牌');
        }
        if(player.countCards("he",{subtype:"equip1"})==0&&player.countCards("he",{name:"sha"})>1){
            player.chooseControl('弃置两张【杀】');
        }
        "step 1"
        var A='弃置一张武器牌';
        var B='弃置两张【杀】';
        if(result.control==A){
            player.chooseToDiscard("he",{subtype:"equip1"},true).ai=function(card){
                return 6-get.value(card);
            };
        }if(result.control==B){
            player.chooseToDiscard("he",{name:"sha"},2,true).ai=function(card){
                return 6-get.value(card);
            };
        }
        'step 2'
        target.chooseToRespond({name:"shan"}).set("ai",function(card){
            return 7-get.value(card);
        });
        'step 3'
        if(result.bool){
            player.draw();
        }else{
            player.recover();
            target.damage();
        }
    },
                ai:{
                    order:5,
                    result:{
                        target:-1,
                    },
                },
            },
            "dpcqr_hanwu":{
                mod:{
                    selectTarget:function(card,player,range){
            var num=Math.min(5,Math.ceil(game.roundNumber/2));
            if(card.name=='sha'&&range[1]!=-1) range[1]+=num;
        },
                    globalFrom:function(from,to,distance){
            var num=Math.min(5,Math.ceil(game.roundNumber/2));
            return distance-num;
        },
                },
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                priority:20210416073882868,
                filter:function(event,player){
        return event.player.countCards("e")==0;
    },
                content:function(){
        trigger.nature="ice";
        var A=["通通变成冰雕吧！","还想跑！？"].randomGet();player.say(A);
    },
                ai:{
                    threaten:function(target,player,hp){
            var threaten=0.45;
            var num=game.roundNumber;
            return threaten*=num;
        },
                },
            },
            "dpcqr_bingjia":{
                trigger:{
                    player:"damageBegin",
                },
                priority:20210416045758276,
                frequent:true,
                check:function(event,player){
        return get.attitude(event.source,player)<=0;
    },
                content:function(){
        "step 0"
        player.draw();
        var num=player.maxHp-player.hp;
        /*if(trigger.source.countCards("he")>0&&num>0){
            if(trigger.source.countCards("he")>=num){
                trigger.source.chooseToDiscard("he",num,true);
            }else{
                trigger.source.chooseToDiscard("he",trigger.source.countCards("he"),true);
            }
        }*/
        if(num>0){
            trigger.source.draw(num);
        }
        "step 1"
        if(trigger.source.countCards("h")>trigger.source.hp||trigger.source.hasSkill("dpcqr_shuangbao_damage")){
            trigger.num--;
            /*if(trigger.source.hasSkill("dpcqr_shuangbao_damage")){
                trigger.source.removeSkill("dpcqr_shuangbao_damage");
            }*/
            trigger.source.turnOver();
        }
    },
            },
            "dpcqr_shuangbao":{
                trigger:{
                    source:"damageAfter",
                },
                filter:function(event){
        return event.nature=="ice"||event.player.isTurnedOver()||event.player.hasSkill("dpcqr_shuangbao_damage");
    },
                priority:-20210425073592896,
                forced:true,
                content:function(){
        "step 0"
        if(trigger.player.isTurnedOver()){
            player.recover();
        }
        "step 1"
        if(trigger.nature=="ice"){
            player.judge();
        }
        "step 2"
        if(result.color=="black"){
            if(!trigger.player.hasSkill("dpcqr_shuangbao_damage")){
                trigger.player.addSkill("dpcqr_shuangbao_damage");
            }
        }else{
            player.draw();
        }
    },
                ai:{
                    effect:{
                        result:{
                            target:function(player,target){
                    if(player.hp<=2&&target.isTurnedOver()&&target.countCards("he")>0&&target.hasSkill("dpcqr_shuangbao_damage")) return -5;
                    if(player.hp<=2&&target.isTurnedOver()) return -3;
                    if(target.countCards("he")>0&&target.hasSkill("dpcqr_shuangbao_damage")) return -2;
                },
                        },
                    },
                },
                subSkill:{
                    damage:{
                        trigger:{
                            player:"damageEnd",
                        },
                        forced:true,
                        priority:-20210425073592900,
                        content:function(){
                "step 0"                
                if(trigger.source.hasSkill("dpcqr_shuangbao")&&player.countCards("he")>0){
                    trigger.source.gainPlayerCard(player,'he');
                }
                "step 1"
                player.removeSkill("dpcqr_shuangbao_damage");
            },
                        marktext:"霜",
                        mark:true,
                        intro:{
                            name:"霜爆",
                            content:"受到伤害后移除<br>受到拥有技能〖霜爆〗的角色的伤害后，其获得你一张牌",
                        },
                        sub:true,
                    },
                },
            },
            "shundiy_shucai":{
                trigger:{
                    global:["useCard","respond"],
                },
                prompt:function(event,player,target){
        return "是否对 "+get.translation(event.player)+" 发动技能【疏财】";
    },
                priority:2021042184382451,
                filter:function(event,player){
        return event.player!=player&&get.type(event.card)=="basic"&&!player.hasSkill("shundiy_shucai_usable");
    },
                check:function(event,player){
        if(get.attitude(event.player,player)<=0&&get.name(event.card)=="sha"&&event.player.countCards("e",function(card){return get.name(card)=="zhuge"||get.name(card)=="qinglong";})) return false;
        if(get.attitude(event.player,player)<=0&&get.name(event.card)=="tao") return false;
        if(get.attitude(event.player,player)<=0&&get.name(event.card)=="jiu") return false;
        return true;
    },
                content:function(){
        player.draw();
        trigger.player.draw();
        trigger.player.gain(trigger.cards,"gain2");
        player.addMark("shundiy_shucai_discard");
        player.addSkill("shundiy_shucai_usable");
    },
                ai:{
                    threaten:function(target,player,hp){
            var threaten=1.25;
            var num=player.countMark("shundiy_shucai_discard");
            return threaten*=num;
        },
                },
                group:"shundiy_shucai_discard",
                subSkill:{
                    discard:{
                        trigger:{
                            player:"phaseBegin",
                        },
                        frequent:true,
                        filter:function(event,player){
                return player.countMark("shundiy_shucai_discard");
            },
                        priority:-2021042104358586400,
                        content:function(){
                "step 0"
                if(player.countCards("he")>=player.countMark("shundiy_shucai_discard")){
                    player.chooseToDiscard("he",player.countMark("shundiy_shucai_discard"),true).ai=function(card){
                        return 7-get.value(card);
                    };
                }else{
                    player.chooseToDiscard("he",player.countCards("he"),true).ai=function(card){
                        return 7-get.value(card);
                    };
                }
                "step 1"
                player.removeMark("shundiy_shucai_discard",player.countMark("shundiy_shucai_discard"));
            },
                        init:function(player){
                player.storage.discard=0;
            },
                        marktext:"疏",
                        intro:{
                            name:"疏财",
                            content:function(storage){
                    return "自身回合开始时需弃置 "+storage+" 张牌";
                },
                        },
                        sub:true,
                    },
                    usable:{
                        trigger:{
                            global:"phaseAfter",
                        },
                        forced:true,
                        priority:2021042286482956,
                        content:function(){
                player.removeSkill("shundiy_shucai_usable");
            },
                        sub:true,
                    },
                },
            },
            "shundiy_duanliu":{
                trigger:{
                    player:"useCardToPlayered",
                },
                forced:true,
                filter:function(event,player,target){
        return get.color(event.card)=="black"&&event.target.countMark("shundiy_duanliu")<3&&event.target!=player||get.name(event.card)=="sha"&&event.target.countMark("shundiy_duanliu")&&event.target!=player;
    },
                priority:2021022803492868,
                content:function(){
        "step 0"
        if(get.name(trigger.card)=="sha"&&trigger.target.countMark("shundiy_duanliu")){
            player.getStat().card.sha=0;
            player.draw();
        }
        if(get.color(trigger.card)=="black"&&trigger.target.countMark("shundiy_duanliu")<3){
            trigger.target.addMark("shundiy_duanliu");
        }
        "step 1"
        player.update();
    },
                marktext:"流",
                intro:{
                    name:"断流",
                    content:function(storage,player,skill){
            return "断流层数： "+storage+"/3";
        },
                },
                ai:{
                    effect:{
                        player:function(card,player){
                if(get.color(card)=="black"&&get.name(card)!="sha") return 4;
                if(get.color(card)=="black"&&get.name(card)=="sha") return 3;
                if(get.color(card)=="red"&&get.name(card)=="sha") return 2;
            },
                        result:{
                            target:function(player,target){
                    var att=get.attitude(player,target)<=0;
                    if(att&&target.countMark("shundiy_duanliu")==0) return -7;
                    if(att&&target.countMark("shundiy_duanliu")>=1) return -1;
                },
                        },
                    },
                },
            },
            "shundiy_jinmie":{
                trigger:{
                    player:"phaseJieshuAfter",
                },
                priority:2021042289375685,
                frequent:true,
                filter:function(event,player){
        return game.countPlayer(function(current){
            return current.countMark("shundiy_duanliu")>0;
        })>=player.hp;
    },
                content:function(){
        "step 0"
        player.$fullscreenpop('<font color=#1E90FF>极恶技·尽灭闪</font>');
        game.delay(2.5);
        "step 1"
        game.countPlayer(function(current){
            if(current.countMark("shundiy_duanliu")){
                var num=Math.max(1,(current.countMark("shundiy_duanliu")+(player.maxHp-player.hp)-(Math.abs(player.countCards("h")-current.countCards("h")))));
                current.removeMark("shundiy_duanliu",current.countMark("shundiy_duanliu"));
                current.damage("water",num,player);
            }
        });
        "step 2"
        player.recover();
        player.draw(2);
        game.countPlayer(function(current){
            if((current.isMaxHandcard()||current.isMinHandcard())&&current!=player){
                if(current.countMark("shundiy_duanliu")<3){
                    current.addMark("shundiy_duanliu");
                }
            }
        });
    },
            },
            "dpcqr_shishi":{
                trigger:{
                    global:"gameStart",
                },
                priority:202105201406838,
                forced:true,
                unique:true,
                content:function(){
        'step 0'
        player.chooseTarget(true,function(card,player,target){
            return target!=player;
        }).set("ai",function(target){
            if(player.identity=="nei"||player.identity=="fan"){
                return target.identity=="zhu";
            }else{
                return get.attitude(player,target)<=0;
            }
            if(target.name=="dpcqr_yaolao"||target.name=="dpcq_yaolao") return Infinity;
        });
        'step 1'
        if(result.bool){
            target=result.targets[0];
            target.addSkill("dpcqr_shishi_mod");
            player.addMark("dpcqr_shishi");
            var chat=["师傅在上，请受弟子一拜","养育之恩，枫没齿难忘！"].randomGet();
            player.say(chat);
            game.delay(2.5);
        }
    },
                ai:{
                    threaten:2,
                },
                subSkill:{
                    mod:{
                        mark:true,
                        marktext:"师",
                        intro:{
                            name:"弑师",
                            content:"手牌上限加一",
                        },
                        mod:{
                            maxHandcard:function(player,num){
                    return num+1;
                },
                        },
                        group:"dpcqr_shishi_shi",
                        sub:true,
                    },
                    shi:{
                        trigger:{
                            player:["discardEnd","recoverEnd"],
                        },
                        forced:true,
                        priority:2021052014384285,
                        filter:function(event,player){
                return game.countPlayer(function(current){
                    return current.countMark("dpcqr_shishi")>0;
                });
            },
                        content:function(){
                'step 0'
                if(player.countCards("he")>player.hp){
                    var chat=["哼！老不死的东西！","老东西，总是对我有所隐瞒…","等着吧，总有一天！"].randomGet();
                    game.countPlayer(function(current){
                        if(current.countMark("dpcqr_shishi")>0){
                            current.say(chat);
                            game.delay(2.5);
                        }
                    });
                    player.chooseCard('交给 '+get.translation(game.filterPlayer(function(current){
                        return current.countMark("dpcqr_shishi")>0;
                    }))+' 一张牌','he',true);
                }else{
                    var chat=["师傅，弟子知错了(老东西！)","还望师傅进行责罚(嘿！你死期不远了！)"].randomGet();      
                    game.countPlayer(function(current){
                        if(current.countMark("dpcqr_shishi")>0){
                            current.say(chat);
                            game.delay(2.5);
                            player.damage("poison",current);
                        }
                    });
                    event.finish();
                }
                'step 1'
                if(result.bool){
                    game.countPlayer(function(current){
                        if(current.countMark("dpcqr_shishi")>0){
                            player.give(result.cards,current); 
                        }
                    });
                }
            },
                        sub:true,
                    },
                },
            },
            "dpcqr_xinyan":{
                forced:true,
                trigger:{
                    source:"damageEnd",
                },
                priority:2021052017160754,
                filter:function(event,player){
        if(!event.player.hasSkill("dpcqr_xinyan_yan")) return true;
    },
                content:function(){
        player.draw();
        trigger.player.addSkill("dpcqr_xinyan_yan");
    },
                ai:{
                    threaten:3,
                    effect:{
                        result:{
                            target:function(player,target){
                    var att=get.attitude(player,target)<=0;
                    var att1=get.attitude(player,target)>0;
                    if(att&&target.countMark("dpcqr_xinyan_yan")) return -10;
                    if(att1&&target.countMark("dpcqr_xinyan_yan")) return 10;
                },
                        },
                    },
                },
                group:["dpcqr_xinyan_target","dpcqr_xinyan_dying"],
                subSkill:{
                    yan:{
                        mark:true,
                        marktext:"焰",
                        intro:{
                            name:"心焰",
                            content:"已被海心焰标记",
                        },
                        sub:true,
                    },
                    target:{
                        trigger:{
                            player:"useCard2",
                        },
                        filter:function(event,player){
                if(!event.targets||event.targets.length!=1) return false;
                var info=get.info(event.card);
                if(info.multitarget) return false;
                if(info.allowMultiple==false) return false;
                if(info.type=='equip') return false;
                if(info.type=='delay') return false;
                return game.hasPlayer(function(current){
                    if(!current.hasSkill("dpcqr_xinyan_yan")) return false;
                    return !event.targets.contains(current)&&lib.filter.targetEnabled2(event.card,player,current);
                });
            },
                        direct:true,
                        content:function(){
                'step 0'
                player.chooseTarget(get.prompt2('dpcqr_xinyan_target'),[1,Infinity],function(card,player,target){
                    if(!target.hasSkill("dpcqr_xinyan_yan")) return false;
                    var trigger=_status.event.getTrigger();
                    return !trigger.targets.contains(target)&&lib.filter.targetEnabled2(trigger.card,player,target);
                }).set('ai',function(target){
                    var player=_status.event.player;
                    return get.effect(target,_status.event.getTrigger().card,player,player);
                });
                'step 1'
                if(result.bool){
                    if(!event.isMine()&&!event.isOnline()) game.delayx();
                    event.targets=result.targets.slice(0);
                }
                else{
                    event.finish();
                }
                'step 2'
                player.logSkill('dpcqr_xinyan_target',event.targets);
                trigger.targets.addArray(event.targets);
            },
                        sub:true,
                    },
                    dying:{
                        trigger:{
                            player:"dying",
                        },
                        forced:true,
                        priority:2021052017253845,
                        content:function (){
                "step 0"
                trigger.untrigger();
                event.num=game.countPlayer(function(current){
                    return current.hasSkill("dpcqr_xinyan_yan");
                });
                player.gainMaxHp();
                player.recover(event.num+1);
                player.awakenSkill("dpcqr_xinyan");
                player.addSkill("dpcqr_xvling");
                player.chooseToDiscard("hej",player.countCards("hej"),true);
                "step 1"
                game.countPlayer(function(current){
                    if(current.hasSkill("dpcqr_xinyan_yan")){
                        current.removeSkill("dpcqr_xinyan_yan");
                    }
                });
                var chat=["没想到到吧！我韩枫又回来了！","哼！要不是我献出了海心焰，还真就要栽在你手里！"].randomGet();
                player.say(chat);
            },
                        sub:true,
                    },
                },
            },
            "shundiy_longdan":{
                audio:"longdan_sha",
                audioname:["re_zhaoyun"],
                enable:["chooseToUse","chooseToRespond"],
                position:"h",
                prompt:"将【杀】当【闪】或【闪】当【杀】使用或打出",
                viewAs:function(cards,player){
        var name=false;
        switch(get.name(cards[0],player)){
            case 'sha':name='shan';break;
            case 'shan':name='sha';break;
        }
        if(name) return {name:name};
        return null;
    },
                check:function(card){
        var player=_status.event.player;
        if(_status.event.type=='phase'){
            var max=0;
            var name2;
            var list=['sha'];
            var map={sha:'shan'}
            for(var i=0;i<list.length;i++){
                var name=list[i];
                if(player.getUseValue({name:name})>0){
                    var temp=get.order({name:name});
                    if(temp>max){
                        max=temp;
                        name2=map[name];
                    }
                }
            }
            if(name2==get.name(card,player)) return 1;
            return 0;
        }
        return 1;
    },
                filterCard:function(card,player,event){
        event=event||_status.event;
        var filter=event._backup.filterCard;
        var name=get.name(card,player);
        if(name=='sha'&&filter({name:'shan',cards:[card]},player,event)) return true;
        if(name=='shan'&&filter({name:'sha',cards:[card]},player,event)) return true;
        return false;
    },
                filter:function(event,player){
        var filter=event.filterCard;
        if(filter({name:'sha'},player,event)&&player.countCards('h','shan')) return true;
        if(filter({name:'shan'},player,event)&&player.countCards('h','sha')) return true;
        return false;
    },
                ai:{
                    respondSha:true,
                    respondShan:true,
                    skillTagFilter:function(player,tag){
            var name;
            switch(tag){
                case 'respondSha':name='shan';break;
                case 'respondShan':name='sha';break;
            }
            if(!player.countCards('h',name)) return false;
        },
                    order:function(item,player){
            if(player&&_status.event.type=='phase'){
                var max=0;
                var list=['sha'];
                var map={sha:'shan'}
                for(var i=0;i<list.length;i++){
                    var name=list[i];
                    if(player.getUseValue({name:name})>0){
                        var temp=get.order({name:name});
                        if(temp>max) max=temp;
                    }
                }
                if(max>0) max+=0.3;
                return max;
            }
            return 4;
        },
                },
                group:["shundiy_longdan_mark","shundiy_longdan_jin","shundiy_longdan_chu"],
                subSkill:{
                    mark:{
                        trigger:{
                            player:["useCard","respond"],
                        },
                        frequent:true,
                        filter:function(event,player){
                if(!event.respondTo||get.itemtype(event.respondTo[1])=="card") return false;
                if(event.card&&!event.card.isCard&&event.getParent(2).name!='shundiy_longdan'){
                    for(var i=0;i<event.respondTo[1].cards.length;i++){
                        if(event.respondTo[1].cards[i].number<event.card.number){
                            return true;
                        }
                    }
                }
            },
                        priority:2021052304386,
                        content:function(){
                "step 0"
                if(trigger.card.name=="shan"){
                    player.addMark("shundiy_longdan_jin");
                }
                if(trigger.card.name=="sha"){
                    player.addMark("shundiy_longdan_chu");
                }
                "step 1"
                if(player.countMark("shundiy_longdan_jin")>=7||player.countMark("shundiy_longdan_jin")>=player.hp+player.maxHp||player.countMark("shundiy_longdan_chu")>=7||player.countMark("shundiy_longdan_chu")>=player.hp+player.maxHp){
                    event.goto(2);
                }else{
                    event.goto(3);
                }
                "step 2"
                if(player.hasSkill("shundiy_huwei")&&player.countMark("shundiy_longdan_jin")>=7||player.hasSkill("shundiy_huwei")&&player.countMark("shundiy_longdan_jin")>=player.hp+player.maxHp){
                    player.removeMark("shundiy_longdan_jin",player.countMark("shundiy_longdan_jin"));
                    player.recover();
                    player.insertPhase();
                }
                if(player.hasSkill("shundiy_huwei")&&player.countMark("shundiy_longdan_chu")>=7||player.hasSkill("shundiy_huwei")&&player.countMark("shundiy_longdan_chu")>=player.hp+player.maxHp){
                    var num=Math.min(3,player.maxHp-player.hp);
                    player.removeMark("shundiy_longdan_chu",player.countMark("shundiy_longdan_chu"));
                    player.draw(num+1);
                    player.addMark("shundiy_huwei",num);
                    player.addSkill("shundiy_huwei_remove");
                }else{
                    event.goto(3);
                }
                "step 3"
                player.draw();
            },
                        sub:true,
                    },
                    jin:{
                        init:function(player){
                player.storage.shundiy_longdan_jin=0;
            },
                        marktext:"进",
                        intro:{
                            name:"龙胆·进",
                            content:"数量: #",
                        },
                        sub:true,
                    },
                    chu:{
                        init:function(player){
                player.storage.shundiy_longdan_chu=0;
            },
                        marktext:"出",
                        intro:{
                            name:"龙胆·出",
                            content:"数量: #",
                        },
                        sub:true,
                    },
                },
            },
            "shundiy_huwei":{
                trigger:{
                    player:["useCard","respond"],
                },
                forced:true,
                filter:function(event,player){
        return event.card&&!event.card.isCard&&event.getParent(2).name!='shundiy_longdan';
    },
                priority:202105241609,
                content:function(){
        "step 0"
        player.draw();
        "step 1"
        if(_status.currentPhase!=player){
            player.addMark("shundiy_longdan_jin");
        }
        if(_status.currentPhase==player){
            player.addMark("shundiy_longdan_chu");
        }
        "step 2"
        if(player.countMark("shundiy_longdan_jin")>=7||player.countMark("shundiy_longdan_jin")>=player.hp+player.maxHp||player.countMark("shundiy_longdan_chu")>=7||player.countMark("shundiy_longdan_chu")>=player.hp+player.maxHp){
            event.goto(3);
        }else{
            event.finish();
        }
        "step 3"
        if(player.hasSkill("shundiy_huwei")&&player.countMark("shundiy_longdan_jin")>=7||player.hasSkill("shundiy_huwei")&&player.countMark("shundiy_longdan_jin")>=player.hp+player.maxHp){
            player.removeMark("shundiy_longdan_jin",player.countMark("shundiy_longdan_jin"));
            player.recover();
            player.insertPhase();
        }
        if(player.hasSkill("shundiy_huwei")&&player.countMark("shundiy_longdan_chu")>=7||player.hasSkill("shundiy_huwei")&&player.countMark("shundiy_longdan_chu")>=player.hp+player.maxHp){
            var num=Math.min(3,player.maxHp-player.hp);
            player.removeMark("shundiy_longdan_chu",player.countMark("shundiy_longdan_chu"));
            player.draw(num+1);
            player.addMark("shundiy_huwei",num);
            player.addSkill("shundiy_huwei_remove");
        }else{
            event.finish();
        }
    },
                mod:{
                    globalFrom:function(from,to,distance){
            return distance-from.storage.shundiy_huwei;
        },
                    cardUsable:function(card,player,num){
            if(card.name=='sha') return num+player.storage.shundiy_huwei;
        },
                },
                init:function(player){
        player.storage.shundiy_huwei=0;
    },
                marktext:"威",
                intro:{
                    name:"虎威",
                    content:"出杀次数与攻击距离+ #",
                },
                group:"shundiy_huwei_hp",
                subSkill:{
                    remove:{
                        trigger:{
                            player:"phaseJieshuBegin",
                        },
                        forced:true,
                        priority:202105241617,
                        content:function(){
                player.removeMark("shundiy_huwei",player.countMark("shundiy_huwei"));
                player.removeSkill("shundiy_huwei_remove");
            },
                        sub:true,
                    },
                    hp:{
                        trigger:{
                            player:"changeHp",
                        },
                        forced:true,
                        priority:202105242123,
                        filter:function(event,player){
                if(player.countMark("shundiy_longdan_jin")>=player.hp+player.maxHp) return true;
                if(player.countMark("shundiy_longdan_chu")>=player.hp+player.maxHp) return true;
            },
                        content:function(){
                if(player.countMark("shundiy_longdan_jin")>=player.hp+player.maxHp){
                    player.removeMark("shundiy_longdan_jin",player.countMark("shundiy_longdan_jin"));
                    player.recover();
                    player.insertPhase();
                }
                if(player.countMark("shundiy_longdan_chu")>=player.hp+player.maxHp){
                    var num=Math.min(3,player.maxHp-player.hp);
                    player.removeMark("shundiy_longdan_chu",player.countMark("shundiy_longdan_chu"));
                    player.draw(num+1);
                    player.addMark("shundiy_huwei",num);
                    player.addSkill("shundiy_huwei_remove");
                }
            },
                        sub:true,
                    },
                },
            },
            "dpcqr_xuesha":{
                forced:true,
                trigger:{
                    player:"damageEnd",
                    source:"damageEnd",
                },
                priority:2021062019468568,
                content:function(){
        "step 0"
        if(trigger&&trigger.source&&player==trigger.player&&player!=trigger.source){
            trigger.source.addMark("dpcqr_xuesha");
        }
        if(trigger&&trigger.player&&player==trigger.source&&player!=trigger.player){
            trigger.player.addMark("dpcqr_xuesha");
        }
        player.update();
        "step 1"
        if(player.countCards("h")>=player.hp){
            var A=["嘁！","不过如此！"].randomGet();player.say(A);
            player.recover();
        }
    },
                marktext:"煞",
                intro:{
                    name:"血煞",
                    content:function(storage){
            return "数量： "+storage;
        },
                },
                ai:{
                    threaten:3,
                },
                group:["dpcqr_xuesha_global"],
                subSkill:{
                    global:{
                        trigger:{
                            global:"phaseEnd",
                        },
                        forced:true,
                        priority:2021062019534385,
                        filter:function(event,player){
                return event.player.countMark("dpcqr_xuesha");
            },
                        content:function(){
                "step 0"
                event.num=trigger.player.countMark("dpcqr_xuesha");
                if(event.num<trigger.player.hp&&trigger.player.countCards("h")>0){
                    player.gainPlayerCard(trigger.player,"h",true);
                    event.finish();
                }
                "step 1"
                if(event.num>=trigger.player.hp){
                    player.useCard({name:"juedou"},trigger.player);
                }
                "step 2"
                player.loseHp();
            },
                        sub:true,
                    },
                    damage:{
                        trigger:{
                            player:"damageBegin",
                        },
                        forced:true,
                        filter:function(event,player){
                return event.num>0;
            },
                        priority:-20210622235908684,
                        content:function(){
                if(trigger&&trigger.source&&!trigger.source.countMark("dpcqr_xuesha")){
                    trigger.num--;
                    trigger.source.update();
                    player.update();
                }
            },
                        sub:true,
                    },
                },
            },
            "dpcqr_xiuluo":{
                trigger:{
                    source:"damageBegin",
                },
                prompt:function(event,player,target){
        return "是否对 "+get.translation(event.player)+" 发动技能〖修罗〗";
    },
                priority:2021062020429738,
                filter:function(event,player){
        return event.player.countMark("dpcqr_xuesha");
    },
                check:function(event,player){
        var number=Math.floor(event.player.countMark("dpcqr_xuesha")/2);
        var nums=event.player.countMark("dpcqr_xuesha")
        var players=game.countPlayer();
        if(get.attitude(player,event.player)<=0&&number>0&&event.num+number>=event.player.hp+event.player.hujia&&player.maxHp-1>=3&&players<=5) return true;
        return false;
    },
                content:function(){
        "step 0"
        var A=["死吧！","你的命，我就收下了！"].randomGet();player.say(A);
        event.num=Math.floor(trigger.player.countMark("dpcqr_xuesha")/2);
        player.loseMaxHp();
        trigger.num+=event.num;
        "step 1"
        trigger.player.removeMark("dpcqr_xuesha",trigger.player.countMark("dpcqr_xuesha"));
    },
                ai:{
                    threaten:5,
                },
                mod:{
                    maxHandcard:function (player,num){
            var number=game.countPlayer(function(current){
                return current.countMark("dpcqr_xuesha")>0;
            });
            return num+=number;
        },
                    cardUsable:function(card,player,num){
            var number=game.countPlayer(function(current){
                return current.countMark("dpcqr_xuesha")>0;
            });
            if(card.name=='sha') return num+=number;
        },
                },
            },
            "shundiy_qinxi":{
                trigger:{
                    global:"phaseEnd",
                },
                filter:function(event,player){
        return event.player.countCards("h")<event.player.hp;
    },
                check:function(event,player){
        var att=get.attitude(player,event.player)
        if(att>0&&event.player.countCards("h")>=event.player.hp*3&&event.player.countCards("h")>=4) return true;
        if(player.countCards("h")<=player.hp-1) return true;
        return att<=0;
    },
                priority:2021062878288,
                content:function(){
        "step 0"
        player.chooseCount("请从 1～13 中选择 5 个数字",7,[1,13],function(){
            var num=[1,13].randomGet();
            return num;
        });
        "step 1"
        event.num1=result.num;
        "step 2"
        player.chooseCount("请从 1～13 中选择 4 个数字",event.num1,[1,13],function(){
            var num=[1,13].randomGet();
            return num&&num!=event.num1;
        });
        "step 3"
        event.num2=result.num;
        "step 4"
        player.chooseCount("请从 1～13 中选择 3 个数字",event.num2,[1,13],function(){
            var num=[1,13].randomGet();
            return num&&num!=event.num1&&num!=event.num2;
        });
        "step 5"
        event.num3=result.num;
        "step 6"
        player.chooseCount("请从 1～13 中选择 2 个数字",event.num3,[1,13],function(){
            var num=[1,13].randomGet();
            return num&&num!=event.num1&&num!=event.num2&&num!=event.num3;
        });
        "step 7"
        event.num4=result.num;
        "step 8"
        player.chooseCount("请从 1～13 中选择 1 个数字",event.num4,[1,13],function(){
            var num=[1,13].randomGet();
            return num&&num!=event.num1&&num!=event.num2&&num!=event.num3&&num!=event.num4;
        });
        "step 9"
        event.num5=result.num;
        "step 10"
        var X=Math.min(3,player.maxHp-player.hp);
        var cards=get.cards(5);
        game.cardsGotoOrdering(cards);
        player.showCards(cards,'禽戏');
        var cardsx=[];
        for(var i=0;i<cards.length;i++){
            if(get.number(cards[i])==event.num1||get.number(cards[i])==event.num2||get.number(cards[i])==event.num3||get.number(cards[i])==event.num5){
                cardsx.push(cards[i]);
            }
        }
        event.cards=cardsx;
        "step 11"
        if(cards.length){
            player.gain(cards,'gain2');
        }
        if(cards.length>=2){
            player.chooseToDiscard("he",true);
            trigger.player.chooseToDiscard("he",true);
        }
    },
            },
            "shundiy_zhenmai":{
                trigger:{
                    global:"phaseBegin",
                },
                priority:2021070219395352,
                filter:function(event,player){
        return event.player!=player&&event.player.countCards("h")>0;
    },
                check:function(event,player){
        return true;
    },
                content:function(){
        'step 0'
        event.cards=trigger.player.getCards("h").randomGet();
        trigger.player.showCards(event.cards);
        "step 1"
        player.chooseCard("he",function(card){
            return get.suit(card)==get.suit(event.cards);
        }).ai=function(card){
            var suit1=get.suit(card);
            var suit2=get.suit(event.cards);
            var att1=get.attitude(player,trigger.player);
            var value1=get.value(card);
            var hp1=player.hp<=player.maxHp/3+0.5;
            var hp2=trigger.player.hp<=trigger.player.maxHp/3+0.5
            var card1=player.countCards("h");
            if(hp1) return suit1=="club";
            if(att1<0) return 7-value1&&suit1=="spade";
            if(att1>0&&hp2) return 8-value1&&suit1=="heart";
            if(att1>=0) return 6-value1&&suit1=="diamond";
            return 5-value1&&suit1==suit2;
        };
        'step 2'
        if(result.bool){
            player.showCards(result.cards);
            event.card=result.cards;
        }else{
            event.finish();
        }
        'step 3'
        player.discard(event.card);
        if(get.suit(event.card)=="heart"){
            trigger.player.recover();
        }
        if(get.suit(event.card)=="diamond"){
            player.draw();
            trigger.player.draw();
        }
        if(get.suit(event.card)=="club"){
            player.recover();
        }
        if(get.suit(event.card)=="spade"){
            trigger.player.loseHp();
        }
    },
                group:["shundiy_zhenmai_dying"],
                subSkill:{
                    dying:{
                        trigger:{
                            global:"dying",
                        },
                        priority:-2021071816485352,
                        filter:function(event,player){
                return event.player!=event.source&&event.player.countCards("h")>0;
            },
                        check:function(event,player){
                return true;
            },
                        content:function(){
                "step 0"
                event.cards=trigger.player.getCards("h").randomGet();
                trigger.player.showCards(event.cards);
                "step 1"
                player.chooseCard("he",function(card){
                    return get.suit(card)==get.suit(event.cards);
                }).ai=function(card){
                    var p=player;
                    var t=trigger.player;
                    var suit1=get.suit(card);
                    var suit2=get.suit(event.cards);
                    var att1=get.attitude(player,trigger.player);
                    var value1=get.value(card);
                    var hp1=player.hp<=player.maxHp/3+0.5;
                    var hp2=trigger.player.hp<=trigger.player.maxHp/3+0.5
                    var card1=player.countCards("h");
                    if(hp1) return suit1=="club";
                    if(att1<0) return 7-value1&&suit1=="spade";
                    if(att1>0&&hp2) return 8-value1&&suit1=="heart";
                    if(att1>=0) return 6-value1&&suit1=="diamond";
                    if(p==t) return "heart";
                    return 5-value1&&suit1==suit2;
                };
                "step 2"
                if(result.bool){
                    player.showCards(result.cards);
                    event.card=result.cards;
                }else{
                    event.finish();
                }
                "step 3"
                player.discard(event.card);
                if(get.suit(event.card)=="heart"){
                    trigger.player.recover();
                }
                if(get.suit(event.card)=="diamond"){
                    player.draw();
                    trigger.player.draw();
                }
                if(get.suit(event.card)=="club"){
                    player.recover();
                }
                if(get.suit(event.card)=="spade"){
                    trigger.player.loseHp();
                }
            },
                        sub:true,
                    },
                },
            },
            "dpcqr_qianchan":{
                trigger:{
                    player:"phaseDrawBegin",
                },
                prompt:"是否跳过摸牌阶段",
                check:function(event,player){
        if(player.hp<=1&&player.countMark("dpcqr_mingfeng")<=7){
            return false;
        }
        if(player.countMark("dpcqr_mingfeng")>0){
            if(player.countCards("h")>=player.hp+2){
                return true;
            }else{
                return false;
            }
            /*if(player.countMark("dpcqr_qianchan")<=7){
                if(player.hp+player.hujia<=2&&player.countCards("h",{name:"sha"})>0||
                   player.hp+player.hujia<=1&&player.countCards("h",{name:"shan"})>0) return true;
                return false;
            }else{
                if(player.hp+player.hujia<=1&&player.countCards("h",{name:"sha"})==0||
                   player.hp+player.hujia<=2&&player.countCards("h",{name:"shan"})==0||
                   player.countCards("h")-player.hp>=2) return false;
                return true;
            }*/
        }else{
            if(player.hp+player.hujia>2&&player.countCards("h",{name:"shan"})>0) return true;
            return false;
        }
    },
                content:function(){
        "step 0"
        trigger.cancel();
        "step 1"
        player.addTempSkill("dpcqr_qianchan_draw",{player:"phaseBefore"});
    },
                init:function(player){
        player.storage.dpcqr_qianchan=0;
    },
                marktext:"缠",
                intro:{
                    name:"牵缠",
                    content:"数量：#",
                },
                mod:{
                    maxHandcard:function(player,num){
            if(!player.hasSkill("dpcqr_qianchan_draw")){
                if(!player.hasSkill("dpcqr_qianchan_use")){
                    return num+=2;
                }else{
                    return num+=1;
                }
            }else if(!player.hasSkill("dpcqr_qianchan_use")){
                if(!player.hasSkill("dpcqr_qianchan_draw")){
                    return num+=2;
                }else{
                    return num+=1;
                }
            }
        },
                },
                ai:{
                    threaten:function(target,player,hp){
            var threaten=0.54;
            var num=player.countMark("dpcqr_qianchan");
            return threaten*num;
        },
                },
                group:["dpcqr_qianchan_u"],
                subSkill:{
                    u:{
                        trigger:{
                            player:"phaseUseBegin",
                        },
                        prompt:"是否跳过出牌阶段",
                        check:function(event,player){
                if(player.hp<=1&&player.countMark("dpcqr_mingfeng")<=7){
                    return true;
                }
                if(player.countMark("dpcqr_mingfeng")>0){
                    return false;
                }else{
                    if(player.countCards("h")-player.hp>=3) return false;
                    return true;
                }
            },
                        content:function(){
                "step 0"
                trigger.cancel();
                "step 1"
                player.addTempSkill("dpcqr_qianchan_use",{player:"phaseBefore"})
            },
                        sub:true,
                    },
                    draw:{
                        trigger:{
                            global:"phaseDrawBegin",
                        },
                        frequent:true,
                        prompt:"是否使用一张牌",
                        filter:function(event,player){
                return player.countCards("h")>0&&player!=event.player;
            },
                        check:function(event,player){
                return true;
            },
                        content:function(){
                player.addMark("dpcqr_qianchan");
                player.chooseToUse();
            },
                        sub:true,
                    },
                    use:{
                        trigger:{
                            global:"phaseUseBegin",
                        },
                        frequent:true,
                        prompt:function(event,player){
                return "是否获得 "+get.translation(event.player)+" 的一张牌";
            },
                        filter:function(event,player){
                return event.player.countCards("he")>0&&player!=event.player;
            },
                        check:function(event,player){
                return get.attitude(player,event.player)<=0;
            },
                        content:function(){
                player.addMark("dpcqr_qianchan");
                player.gainPlayerCard(trigger.player,"he",1,true);
            },
                        sub:true,
                    },
                },
            },
            "dpcqr_lianren":{
                trigger:{
                    global:"phaseAfter",
                },
                forced:true,
                filter:function(event,player){
        return player.countMark("dpcqr_qianchan")>player.hp&&player.maxHp>player.hp;
    },
                content:function(){
        "step 0"
        var chat=["是我低估了阁下的实力……","……望不吝赐教！","切磋而已，何必伤了和气"].randomGet();player.say(chat);
        player.loseMaxHp();
        player.recover();
        "step 2"
        player.addMark("dpcqr_mingfeng",2);
    },
            },
            "dpcqr_mingfeng":{
                forced:true,
                trigger:{
                    player:["useCard","respond"],
                },
                filter:function(event,player,target,card){
        if(player.countMark("dpcqr_mingfeng")>0&&player.countMark("dpcqr_qianchan")>=player.hp||player.hp==1){
            return event.card&&event.card.isCard;
        }
    },
                content:function(){
        var chat1=["承让！","阁下，请！","小心了！"].randomGet();
        var chat2=["献丑了！","呵，见笑了!"].randomGet();
        "step 0"
        if(player.countMark("dpcqr_qianchan")>player.hp){
            player.removeMark("dpcqr_qianchan",player.hp);
        }else{
            player.storage.dpcqr_qianchan=0;
        }
        "step 1"
        if(get.number(trigger.card)<player.countMark("dpcqr_qianchan")){
            if(player.maxHp<5){
                if(player.maxHp>=4){
                    player.gainMaxHp(5-player.maxHp);
                }else{
                    player.gainMaxHp();
                }
            }
            player.draw();
            player.say(chat1);
        }else{
            player.addMark("dpcqr_mingfeng_nature");
            player.say(chat2);
        }
    },
                init:function(player){
        player.storage.dpcqr_mingfeng=0;
    },
                marktext:"锋",
                mark:true,
                intro:{
                    name:"明锋",
                    content:function(storage,player,skill){
            if(storage>0&&player.hp!=1){
                return "生效 "+storage+" 回合";
            }if(player.hp==1){
                return "已生效";
            }else{
                return "未生效";
            }
        },
                },
                ai:{
                    effect:{
                        player:function(card,player){
                if(player.countMark("dpcqr_mingfeng")>0){
                    if(player.countMark("dpcqr_qianchan")-player.hp<card.number){
                        if(card.name=="tao"||card.name=="jiu"||card.name=="dpcqr_huiqidan") return 0;
                        else{
                            if(card.number==13) return 1.32;
                            if(card.number==12) return 1.38;
                            if(card.number==11) return 1.44;
                            if(card.number==10) return 1.50;
                            if(card.number==9) return 1.56;
                            if(card.number==8) return 1.62;
                            if(card.number==7) return 1.68;
                            if(card.number==6) return 1.74;
                            if(card.number==5) return 1.80;
                            if(card.number==4) return 1.86;
                            if(card.number==3) return 1.92;
                            if(card.number==2) return 1.98;
                            return 2.00;
                        }
                    }
                }
            },
                    },
                },
                group:["dpcqr_mingfeng_phase","dpcqr_mingfeng_nature"],
                subSkill:{
                    phase:{
                        trigger:{
                            global:"phaseEnd",
                        },
                        forced:true,
                        filter:function(event,player){
                return player.countMark("dpcqr_mingfeng")>0;
            },
                        content:function(){
                player.removeMark("dpcqr_mingfeng");
            },
                        sub:true,
                    },
                    nature:{
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        priority:-2021091073502,
                        filter:function(event,player){
                return player.countMark("dpcqr_mingfeng_nature")>0;
            },
                        content:function(){
                "step 0"
                player.removeMark("dpcqr_mingfeng_nature");
                "step 1"
                trigger.nature="wind";
            },
                        init:function(player){
                player.storage.dpcqr_mingfeng_nature=0;
            },
                        marktext:"风",
                        mark:false,
                        intro:{
                            name:"明锋",
                            content:function(storage,player,skill){
                    if(storage>0){
                        return "下 "+storage+" 次造成的伤害为风属性";
                    }
                },
                        },
                        sub:true,
                    },
                },
            },
        },
        translate:{
            "dpcqr_fuhui":"浮慧",
            "dpcqr_fuhui_info":"〈锁定技〉每当你使用一张点数大于X的牌后便摸一张牌，否则需弃置一张牌（X为你\"论\"标记的数量与你体力值及体力上限之和）",
            "dpcqr_konglun":"空论",
            "dpcqr_konglun_info":"每当你摸牌后便获得等量标记；你即将造成伤害时，若目标手牌数与体力值之和小于该标记，则你可移除该标记令此伤害加一",
            "dpcqr_huanshang":"幻殇",
            "dpcqr_huanshang_info":"每当你弃置牌后便获得等量标记；若你失去牌后没有手牌且X不为零，则你可摸X/2张牌（X为持有的该标记数量，向上取整）并选择一名其他角色造成一点<font color=#87CEFA>冰霜</font>伤害，随后你恢复一点体力并移除该标记",
            "dpcqr_anjing":"暗劲",
            "dpcqr_anjing_info":"〈锁定技〉每当你「使用/打出」红色牌后便获得等量标记；你使用牌指定「体力值/手牌数」不大于该标记的角色时，可移除该标记，令其下次「造成/受到」伤害后，受到你的一点<font color=#FFFF00>贯穿</font>伤害（可叠加）",
            "dpcqr_huolian":"火莲",
            "dpcqr_huolian_info":" 每当你「造成/受到」伤害后便获得等量标记；自身回合结束时，若该标记数不小于你当前「体力值/手牌数」，则你可摸X张牌并选择至多X名角色，视为对其使用一张【佛怒火莲】，随后你恢复一点体力并移除该标记（X为标记数的一半与你已损体力之和，向上取整）",
            "dpcqr_yanfan":"燕返",
            "dpcqr_yanfan_info":"你受到一点伤害后，可摸一张牌并判定，若结果为「红色/黑色」则你「对来源造成一点<font color=#FF0000>火焰</font>伤害/获得一个\"炎\"标记且与其弃置一张牌」",
            "dpcqr_mifa":"秘法",
            "dpcqr_mifa_info":"〈觉醒技〉当你「处于濒死状态/体力值为一」时，可增加一点体力上限，获得一个\"炎\"标记并将体力恢复至两点，随后你获得技能〖天炎〗",
            "dpcqr_tianyan":"天炎",
            "dpcqr_tianyan_info":"其他角色回合开始时，你可移去一个标记，令其弃置一张牌并响应一张【闪】，若其响应则你恢复一点体力，否则你对其造成一点<font color=#FF8C00>异火</font>伤害；你的手牌上限与摸牌数加X（X为该标记数的一半，向上取整）",
            "dpcqr_yixian":"医仙",
            "dpcqr_yixian_info":"每当你「使用/打出」红色牌后便获得一个标记；「回合结束/有角色濒死」时，你可移去两个标记并「选择一名角色/」令其恢复一点体力",
            "dpcqr_dusan":"毒散",
            "dpcqr_dusan_info":" 回合内你可弃置两张黑色牌并选择一名其他角色，令其进入［中毒］状态，该角色自身回合结束时，若其未造成过伤害，则将武将牌翻面",
            "dpcqr_enan":"厄难",
            "dpcqr_enan_info":"〈锁定技〉你即将受到非属性伤害时，摸一张牌并获得等量\"厄\"标记，随后此伤害减一；自身回合结束时，若此标记数大于自身体力上限，则你摸一张牌并流失一点体力，随后移去一个\"厄\"标记",
            "dpcqr_feixv":"飞絮",
            "dpcqr_feixv_info":"每当你「使用/打出」一张【杀/闪】后，便对应获得一个\"瞬/闪\"标记；你每拥有一个标记则「攻击/防御」距离便加一；自身回合结束时你摸X张牌（每种标记最多两个，X为两种标记总数的一半，向上取整）",
            "dpcqr_luoyao":"落耀",
            "dpcqr_luoyao_info":"自身回合开始时，你可各弃置一个\"瞬/闪\"标记并选择一名其他角色，令该角色选择一项「弃置两张牌并令你恢复一点体力/受到一点你的<font color=#00FFFF>烈风</font>伤害」，随后你摸Y张牌，并令你本回合内出杀次数加Y且可将黑桃牌当【杀】使用或打出（Y为目标当前已损体力值且最多为三）",
            "dpcqr_fenghua":"风华",
            "dpcqr_fenghua_info":"〈锁定技〉每当你「使用/打出」一张点数大于6+X的牌后，摸一张牌并获得一个\"旋\"标记；你使用黑色【杀】时无距离限制（X为标记数）",
            "dpcqr_xuanwu":"旋舞",
            "dpcqr_xuanwu_info":"你的【杀】被闪避后，可移去一个标记，视为对目标使用一张【杀】；自身回合结束时，若标记数大于手牌数，则你可选择至多Y个角色，视为对其使用一张【杀】（Y为该标记数的一半，向下取整）",
            "dpcqr_yunsha":"陨杀",
            "dpcqr_yunsha_info":"你对体力值大于自身的角色造成非属性伤害后，可恢复一点体力对并其造成一点<font color=#00FFFF>烈风</font>伤害，若因此体力值大于该角色，你获得其一张牌",
            "dpcqr_shiyao":"噬咬",
            "dpcqr_shiyao_info":"你使用【杀】指定目标后，可选择一项「与其摸一张牌并视为对其使用一张【决斗】/弃置两张牌恢复一点体力并对其造成一点<font color=#F4A460>砾岩</font>伤害」",
            "dpcqr_shehuang":"蛇皇",
            "dpcqr_shehuang_info":"你的手牌数「大/不大」于自身体力值时「防御/攻击」距离加一；你使用牌指定目标后，若自身不再其攻击范围内，你可获得其一张牌",
            "dpcqr_guyi":"古裔",
            "dpcqr_guyi_info":"〈锁定技〉每当你的体力值发生变动后便摸一张牌，且攻击范围内体力值「大/等/小」于你的角色需「弃置一张牌并进入［僵化］状态/摸并弃置两张牌/摸一张牌并进入［中毒］状态」",
            "dpcqr_shigang":"狮罡",
            "dpcqr_shigang_info":"出牌阶段限一次，你可弃置一张【杀/闪】并选择一名其他角色，随机弃置其一张牌并视为对其使用一张【决斗】；你受到锦囊牌的伤害后进入［锐化］状态并获得一个\"谋\"标记与一张【回气丹】",
            "dpcqr_quance":"权策",
            "dpcqr_quance_info":"〈锁定技〉当前角色回合结束时，若有角色的体力值小于其手牌数，则该角色获得一个\"谋\"标记；标记角色的体力值发生变动后，你需选择一项「其摸X张牌并可使用一张牌/其可使用一张牌并弃置X张牌」随后该角色移除\"谋\"标记（X为其标记数的一半，向下取整且至少为一）",
            "dpcqr_leili":"雷厉",
            "dpcqr_leili_info":"出牌阶段，你可弃置一张黑色牌并选择一名其他角色，视为对其使用一张不计入次数的【杀】；你即将造成非雷属性伤害时，若目标体力值不小于你 ，则你可摸一张牌并对其造成一点<font color=#8A2BE2>雷电</font>伤害",
            "dpcqr_shisheng":"噬生",
            "dpcqr_shisheng_info":"〈锁定技〉你「受到/造成雷电」伤害后，获得一个标记，随后若标记数「不小于/小于」你当前体力值，则你「重置本回合的出杀次数且下次摸牌量加一/减少一点体力」；你令一名角色进入濒死状态后，移去一个标记并恢复一点体力（你自带且最多拥有三个该标记）",
            "dpcqr_lenghuo":"冷火",
            "dpcqr_lenghuo_info":"你对手牌数大于自身的角色，所造成的伤害均为<font color=#87CEFA>异火</font>属性；你造成<font color=#87CEFA>异火</font>属性伤害后，增加一点持续到出牌阶段开始的体力上限",
            "dpcqr_shouyie":"授业",
            "dpcqr_shouyie_info":"出牌阶段，你可弃两张不同花色的牌并选择一名其他角色，令其阶段结束前首次造成的伤害追加火焰效果，且伤害后你与其恢复一点体力",
            "dpcqr_xvling":"虚灵",
            "dpcqr_xvling_info":"〈锁定技〉你的阶段摸牌数改为X，手牌上限改为一；你没有手牌时受到的伤害改为恢复效果且摸一张牌；你失去最后的手牌时，对当前角色造成一点伤害（X为出牌阶段使用牌数与已损体力之和，最多为七）",
            "dpcqr_qingwu":"清妩",
            "dpcqr_qingwu_info":"〈锁定技〉每当你「造成/受到」伤害后，可弃置并从牌堆顶亮出一张牌，若这两张牌花色「相同/不同」则你「将自身武将牌翻面/弃置「目标/来源」区域内的一张牌并令其将武将牌翻面」",
            "dpcqr_yisui":"依随",
            "dpcqr_yisui_info":"每当有角色翻面后，你可摸一张牌并指定一名手牌数不大于你的其他角色，令其选择一项「你恢复一点体力并将手牌「摸/弃」至与体力相同/视为你对其使用一张不记次数的风属性【杀】且其下回合结束前，阶段摸牌与出杀次数+X」（X为你当前已损体力值，最多为三）",
            "shundiy_wushen":"武神",
            "shundiy_wushen_info":"〈锁定技〉每当你「使用/打出」一张【杀/闪】后，便「摸一张牌并减少〖地星〗冷却一回合/可弃置场上任意一名角色区域内的一张牌」",
            "shundiy_dixing":"地星",
            "shundiy_dixing_info":"每六回合限一次，你即将「流失体力/受到伤害」时，防止此伤害；冷却结束后，若你当前体力值「大/不大」于一，则「获得一点护甲（已有护甲则改为摸一张牌）/恢复一点体力」",
            "shundiy_tianxing":"天星",
            "shundiy_tianxing_info":"你即将造成非属性伤害时，若你与目标的手牌数不同，则可流失一点体力并获得一点护甲，改为你摸X张牌并对其造成等量岩属性伤害 (X为你与其手牌数之差的一半，向上取整且最多为三)",
            "shundiy_guhan":"孤寒",
            "shundiy_guhan_info":"〈锁定技〉每当你成为黑色牌的目标后，若此牌点数「大/不大」于你自身体力上限，则「来源弃置/你摸」一张牌；你的攻击距离与出杀次数始终相加你的已损体力值",
            "shundiy_lingfeng":"凌锋",
            "shundiy_lingfeng_info":"你「使用/成为」黑色【杀】「指定目标/的目标」后，若「你与其均在对方/其只在你/你只在其」的攻击范围内，则「你与其摸一张牌/此杀造成的伤害加一/其进入［封冻］状态」，随后你增加一点持续到自身回合结束时的体力上限",
            "dpcqr_liancai":"敛财",
            "dpcqr_liancai_info":"总牌数大于该标记的角色弃牌后，你可摸一张牌并获得一个标记，若因此其总牌数大于你，你移去一半标记并弃置其一张牌（向上取整）",
            "dpcqr_paimai":"拍卖",
            "dpcqr_paimai_info":"〈锁定技〉其他角色弃牌阶段开始时，其可选择与你拼点，若你「赢/输」则你「恢复一点体力且与其可使用X张牌/弃置一张牌且其跳过此阶段并获得双方拼点牌」；你拼点时的点数+X/2（X为\"敛\"标记数）",
            "dpcqr_yaomei":"妖媚",
            "dpcqr_yaomei_info":"〈锁定技〉自身回合结束时，移除\"敛\"标记并令场上总牌数「大/不大」于该标记的其他角色「弃一张牌/摸一张牌并进入［麻痹］状态」",
            "dpcqr_huanqiang":"幻枪",
            "dpcqr_huanqiang_info":"回合内，你可弃一张牌并标记一名其他角色；该角色回合结束时移除标记，若在回合内造成过伤害，则你视为对其使用一张风属性【杀】",
            "dpcqr_ningsha":"凝纱",
            "dpcqr_ningsha_info":"〈锁定技〉你回合内摸牌后获得一个标记（最多七）；你即将「流失体力/受到伤害」时，移去二倍体力值的标记并摸一张牌，令该值减一",
            "dpcqr_fengxiang":"风翔",
            "dpcqr_fengxiang_info":"你于回合外失去牌后，若当前角色未被标记，你标记之；你与被标记的角色距离为一，且对其使用牌时摸一张牌，若此时你的手牌数大于该角色，则你恢复一点体力，随后其移除该标记并进入［缚束］状态",
            "shundiy_qiangxi":"强袭",
            "shundiy_qiangxi_info":"每回合限一次，你可流失一点体力并指定攻击范围内的一名其他角色，对其造成一点伤害并令其弃置等同于你已损体力值的牌",
            "zhundiy_zhiji":"掷戟",
            "zhundiy_zhiji_info":"回合内，你可指定一名其他角色并选择弃置一张武器牌或两张【杀】，令其打出一张【闪】，若其响应则你摸一张牌，否则你恢复一点体力且对其造成一点伤害",
            "dpcqr_hanwu":"寒舞",
            "dpcqr_hanwu_info":"你的攻击距离与【杀】的指定目标数+X；你对无装备的角色所造成的伤害均为<font color=#87CEFA>冰</font>属性（X为当前游戏轮数的一半，向上取整且至多为五）",
            "dpcqr_bingjia":"冰甲",
            "dpcqr_bingjia_info":"你即将受到伤害时，可摸一张牌且来源摸X张牌，随后若其手牌大于体力值或已被标记，则伤害值减一并将武将牌翻面（X为你已损体力值）",
            "dpcqr_shuangbao":"霜爆",
            "dpcqr_shuangbao_info":"〈锁定技〉你造成<font color=#87CEFA>冰</font>属性伤害后进行一次判定，若结果为「黑/红」色则「标记目标角色/你摸一张牌」；你对「翻面/标记」角色造成伤害后「恢复一点体力/获得其一张牌」；被标记的角色受到伤害后移除标记",
            "shundiy_shucai":"疏财",
            "shundiy_shucai_info":"每回合限一次，当一名其他角色使用或打出基本牌后，你可以摸一张牌，令其摸一张牌并收回此牌，随后你在自身回合开始时弃置一张牌",
            "shundiy_duanliu":"断流",
            "shundiy_duanliu_info":"〈锁定技〉你使用黑色牌指定其他角色后，其获得一层标记；你对标记角色使用【杀】后重置出杀次数并摸一张牌（最多获得三层标记）",
            "shundiy_jinmie":"尽灭",
            "shundiy_jinmie_info":"自身回合结束后，若场上被〖断流〗标记的角色不小于自身体力值，则你移除这些角色的标记对其造成X点<font color=#1E90FF>激流</font>伤害（X为其标记数+你当前已损体力值-你与其手牌数之差，最少为一），随后你恢复一点体力摸两张牌并标记除你外场上手牌数最多与最少的角色",
            "dpcqr_shishi":"弑师",
            "dpcqr_shishi_info":"〈锁定技〉游戏开始时，你需选择一名角色，令其手牌上限加一；该角色「恢复体力/弃置卡牌」后，若其总牌数「大/不大」于其体力值，则其需「交给你一张牌/受到你的一点<font color=#008400>毒属性</font>伤害」",
            "dpcqr_xinyan":"心焰",
            "dpcqr_xinyan_info":"〈锁定&觉醒技〉你造成伤害后，若未标记目标角色，则你摸一张牌标记之；你使用牌时可额外指定标记角色为目标。你进入濒死状态时，移除场上标记，增加一点体力上限并恢复X+1点体力，随后移除此技能，获得技能〖虚灵〗并弃置自身区域所有的牌（X为移除的标记数）",
            "shundiy_longdan":"龙胆",
            "shundiy_longdan_info":"你可将【杀/闪】当【闪/杀】「使用/打出」；若转化的前的【杀/闪】的点数大于你所响应的牌，则你摸一张牌并获得一个\"进/出\"标记",
            "shundiy_huwei":"虎威",
            "shundiy_huwei_info":"〈锁定技〉自身回合「外/内」，你每发动一次〖龙胆〗 便摸一张牌并获得一个\"进/出\"标记；当你\"进/出\"的标记数量达到「七/自身体力与上限之和」时，你移除该标记，随后「恢复一点体力并在当前回合结束后进行一个额外的回合/摸X+1张牌并令自身回合结束前的攻击距离与出杀次数+X」（X为你当前已损体力值，最多为三）",
            "dpcqr_xuesha":"血煞",
            "dpcqr_xuesha_info":"〈锁定技〉你［造成/受到］伤害后，［目标/来源］获得一个\"煞\"标记，若此时你的手牌数不小于自身体力值，则你恢复一点体力；被标记的角色回合结束时，若其标记数［小/不小］于其体力值，则你［获得其一张手牌/视为对其使用一张【决斗】并在结算后流失一点体力］",
            "dpcqr_xiuluo":"修罗",
            "dpcqr_xiuluo_info":"你即将对拥有\"煞\"标记的角色造成伤害时，可减少一点体力上限并令此伤害+X，随后移除其标记（X为其标记层数的一半，向下取整）；你的手牌上限与出杀次数+Y（Y为场上拥有\"煞\"标记的角色数）",
            "shundiy_qinxi":"禽戏",
            "shundiy_qinxi_info":"每名角色的弃牌阶段结束时，若其手牌数小于体力值，则你可从1～13中任意选择5个数，随后亮出牌堆顶上的5张牌，获得其中点数与你所选数字相同的牌，并将剩余的牌弃置；若你因此获得了两张及以上数量的牌，则你与其弃置一张牌",
            "shundiy_zhenmai":"诊脉",
            "shundiy_zhenmai_info":"当「其他角色的回合开始/有角色进入濒死状态」时，你可亮出其的一张手牌，随后你可弃置一张与此牌相同花色的牌，若该牌花色为「红桃/方片/黑桃/梅花」，则你「令其恢复一点体力/与其摸一张牌/令其流失一点体力/恢复一点体力」",
            "dpcqr_qianchan":"牵缠",
            "dpcqr_qianchan_info":"你可跳过自身的「摸/出」牌阶段，并在其他角色的对应阶段开始时，获得一个标记并「可使用/获得其」一张牌；否则你手牌上限+1",
            "dpcqr_lianren":"敛刃",
            "dpcqr_lianren_info":"〈锁定技〉当前回合结束后，若你标记数大于体力值且你已受伤，则减一点体力上限并恢复一点体力，随后令〖明锋〗直接生效二回合",
            "dpcqr_mingfeng":"明锋",
            "dpcqr_mingfeng_info":"〈锁定技〉体力值为一时技能生效；你使用或打出牌后移去X个标记（X为你体力值）：若此牌点数小于标记数，则你增加一点体力上限并摸一张牌（最多为5）；否则你下次造成的伤害均为<font color=#00FFFF>风属性</font>（可叠加）",
        },
    },
    intro:"当前版本：2.8.7.23<br>更新日期：2021.10.10<br><br>萌新制作的扩展，不足之处还望多多谅解（可在流畅模式下运行）<br><br>【扩展简介】<br> 本扩展为“斗破苍穹”扩展的正式包（2020.08.08 测试版）；相较之前增加了作者先前意淫的部分功能及概念，武将强度大幅下降，现以界包强度为基准进行设计。内有『斗破包』和分扩『瞬の新风向』两个分支，分别设计斗破苍穹及自行DIY的角色<br> <br> PS：本包在基本完成前不准备设置语音效果；由于作者是个卑微的学生狗所以本扩展更新随缘，测试包则就此搁置不再更新<br><br>感谢以下大佬的支持和帮助：<br>欧尼斯特·渣诚<br>看破一切<br>提伯牙<br><br>感谢以下测试人员：<br>白雪琴<br>如万果一<br>聚丙烯不是高聚分子<br>提伯牙<br>离罗<br>看破一切<br><br>图片素材均来源于网络<br>  有建议或bug还请反馈",
    author:"瞬<br>Q:2889711580",
    diskURL:"",
    forumURL:"",
    version:"2.8.7.23",
},files:{"character":["dpcqr_wuhao.jpg"],"card":["dpcqr_xuanzhongchi.jpg"],"skill":[]}}})