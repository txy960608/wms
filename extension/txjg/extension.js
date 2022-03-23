game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"天行九歌",content:function (config,pack){
game.playTX = function(fn, dir, sex) {
			if (lib.config.background_speak) {
				if (dir && sex)
					game.playAudio(dir, sex, fn);
				else if (dir)
					game.playAudio(dir, fn);
				else
					game.playAudio('..', 'extension', '天行九歌', fn);
			}
		};    
   
    if(config.baizhantime==true){
        lib.skill._tanzhan_skill={
     trigger:{
        global:"gameStart",
    },
    forced:true,
    nobracket:true,
    content:function (){      
      var n=[1,2].randomGet();
            if(n==1){       
     ui.backgroundMusic.src=lib.assetURL+'extension/天行九歌/天行九歌音乐1.mp3';
     ui.background.setBackgroundImage('extension/天行九歌/天行九歌壁纸1.jpg'); lib.config.image_background='天行九歌壁纸1';
      } 
     
       if(n==2) {     
      ui.backgroundMusic.src=lib.assetURL+'extension/天行九歌/天行九歌音乐2.mp3';
      ui.background.setBackgroundImage('extension/天行九歌/天行九歌壁纸2.jpg'); lib.config.image_background='天行九歌壁纸2';
        
        }
        
      
        
        
    },
        }
    }



},precontent:function (){
    
},help:{},config:{"baizhantime":{"init":false,"intro":"开启此模式后，强制更换成天行九歌壁纸和音乐","name":"意境模式[长按显示详细]"}},package:{
    character:{
        character:{
            TXhanfeizi:["male","wu",4,["TXnilin","TXlvzhi"],["des:韩王安第九子，韩国红莲公主的兄长。是儒家宗师荀子最好的学生，与李斯为同门。表面漫不经心、玩世不恭，经常流连风月之地，实际聪明绝顶，是法家的集大成者。心怀抱负，对自己的现状不满，暗中邀卫庄等人一同组建了日后闻名天下的“流沙”组织。后出使秦国，却离奇消失。是秦时明月中众多角色口中的韩非子。张良、卫庄对执着于其死因。"]],
            TXweizhuang:["male","wu",4,["TXhengguan"],["des:韩国人，自小就因不明原因在韩国王宫中生活。纵横家，鬼谷横剑术传人，浑身充满邪气与霸气，武功深不可测，是霸气与力量型的剑客。起初目标为击败师哥盖聂，证明自己的实力，继承鬼谷绝学，为此他一度与秦朝合作，在墨家机关城与盖聂一战，实力难分伯仲。后在韩国友人张良的劝解下，与盖聂、墨家等反秦势力达成暂时的利益合作关系。卫庄同时也是“流沙”组织的现任最高首领。卫庄一直在暗中调查昔日好友，“流沙”创立者韩非的死因。"]],
            TXzinv:["female","wu",3,["GSrouqing","GSlengyan"],["des:如谜一般的女子，拥有神秘而危险的过往，身负不为人知的重要身份。以无双的妖娆与强大的手段闻名于韩国朝野，其本人是亭亭玉立、风姿绰约的年轻女子，真实姓名无人知晓，只因她常着一袭紫衣，所以众人唤其紫女。久而久之，她也默认了这个名字，从此，她的一切就隐藏到了更深的紫雾之中。  由她所创的紫兰轩在短期内奇迹般崛起，几乎凭其一人之力。同时以风月之地作为掩饰，收集着韩国乃至六国的重要情报，并且暗中培养了一群身怀绝技的女刺客。后与韩非、卫庄、张良联手建立了日后闻名天下的流沙组织。"]],
            TXyanlingji:["female","shu",4,["TXyanhuo","TXliwu"],["des:来自百越的一名柔情似水，热情似火的女性。小时候一场大火烧毁了焰灵姬的家园导致她家破人亡，其中有一个弟弟生死不明，因为天赋异禀精通火系法术善于施展火焰攻击，后被喜欢招揽各路奇人异士的“赤眉龙蛇”收入麾下。成为恐惧杀手之一，并开始对韩国复仇，妄图帮助天泽复国。"]],
            TXjiwuye:["male","wei",4,["TXjunquan"],["des:战国时期末期韩国大将军，号称“韩国百年来最强之将”。权倾朝野，专横跋扈，老奸巨猾，贪图美色，醉心权力拥有私人杀手组织“夜幕”，并且与秦国的“罗网”组织也存在着利益合作关系。  向韩王安逼婚，迎娶韩王的掌上明珠红莲公主，结果在大婚当晚被“聚散流沙”组织首领卫庄刺杀。"]],
            TXmoya:["male","wei",4,["TXyingyi","TXhuanmo"],["des:韩国大将军姬无夜私人杀手组织“夜幕”中仅次于“四凶将”的“百鸟”第一高手，与白凤同为姬无夜的近卫，是白凤最信任的朋友与最信赖的上级。轻功卓越，行事利落，从不拖泥带水。对少年时期的白凤的影响颇深，促使白凤不断地突破自己。最终为保护白凤而死。"]],
            TXhonglian:["female","qun",3,["TXhanqing","TXlianhua"],["des:原为韩国公主，封号“红莲”。后成为“流沙”四天王之一。妩媚妖娆，精通各类毒术，善于控制各类毒蛇，而她的性感往往比毒药更加危险。她的火魅术可以迷惑看见她双瞳的人，使之产生幻觉。"]],
            TXnongyu:["female","wu",3,["TXkongshan","TXniaoyu"],["des:紫兰轩的头牌琴姬。琴艺超然，可引百鸟。身怀绝技，一生命运坎坷，是“流沙”四天王之首白凤年少时的知音。  原为韩国前右司马李开与百越火雨山庄庄主火雨公长女胡夫人的独生女。襁褓之中与父母分离，身负重伤被紫女救下，寄居于韩国风月之地紫兰轩，极受紫女关心重视，被紫女暗中培养为一名优秀的刺客。后执行红莲公主的计划前去刺杀韩国大将军姬无夜，失败后服毒自尽。"]],
            TXzhangliang:["male","wu",4,["TXlingxu","TXyukong"],["des:胸怀大志的激进青年，样貌洒脱不羁。出身韩国，家族“五代为相”。秦统一天下后，为桑海儒家小圣贤庄三当家，与掌门师兄伏念、二师兄颜路被并称为“齐鲁三杰”。  虽身为儒家弟子，性格、见识上却反而与墨家慷慨济世的教义相投。在墨家困难之时，挺身而出，暗中帮助墨家等反秦势力，并坚持儒墨两家不应相互排斥，又促成反秦联盟与“流沙”组织的利益合作，但也逐渐在无形中引起了一场牵涉到儒家甚至整个反秦联盟的轩然大波。"]],
        },
        translate:{
            TXhanfeizi:"韩非子",
            TXweizhuang:"卫庄",
            TXzinv:"紫女",
            TXyanlingji:"焰灵姬",
            TXjiwuye:"姬无夜",
            TXmoya:"墨鸦",
            TXhonglian:"红莲",
            TXnongyu:"弄玉",
            TXzhangliang:"张良",
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
            TXlvzhi:{
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event,player){
        return event.source!=player;
    },
                check:function (event,player){
        return get.attitude(player,event.source)<0;
    },
                logTarget:"source",
                content:function (){
       trigger.source.addTempSkill('fengyin',{player:'damageEnd'});
       player.discardPlayerCard(trigger.source,'he',true);
    },
                ai:{
                    "maixie_defend":true,
                },
            },
            TXnilin:{
                audio:"ext:天行九歌:1",
                trigger:{
                    player:"shaBegin",
                },
                check:function (event,player){
        return get.attitude(player,event.target)<=0;
    },
                content:function (){
        player.discardPlayerCard(true,trigger.target,'he');
        var list=get.inpile('trick','trick');
        var list2=[];
        for(var i=0;i<2;i++){
            list2.push(game.createCard(list.randomGet()));
        }
        player.gain(list2,'draw');
    },
            },
            TXhengguan:{
                mod:{
                    targetInRange:function (card,player,target,now){
            if(card.name=='sha') return true;
        },
                    selectTarget:function (card,player,range){
            if(card.name=='sha'&&range[1]!=-1) range[1]+=Infinity;
        },
                },
                trigger:{
                    player:"shaBegin",
                },
                forced:true,
                filter:function (event,player){
        return event.card&&player.hp>2;
    },
                content:function (){
        game.playTX('TXhengguan1');
        trigger.directHit=true;
    },
                group:["TXhengguan_1"],
                subSkill:{
                    "1":{
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        unique:true,
                        filter:function (event,player){
        return event.card.name=='sha'&&player.hp<=2;
    },
                        content:function (){
        game.playTX('TXhengguan2');
        trigger.num++;
    },
                        sub:true,
                    },
                },
            },
            TXkongshan:{
                audio:"ext:天行九歌:1",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return player!=target&&!target.hasSkill('TXkongshan_mark');
    },
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                filterCard:true,
                selectCard:-1,
                discard:false,
                lose:true,
                content:function (){
        player.$give(cards.length,target);
        target.gain(cards,player);
        player.changeHujia();
        target.addTempSkill('TXkongshan_mark',{player:'phaseAfter'});
   
    },
                subSkill:{
                    mark:{
                        mark:true,
                        intro:{
                            content:"每当你使用一张非装备牌，弄玉摸一张牌，直到你回合结束",
                        },
                        sub:true,
                    },
                },
                ai:{
                    order:3,
                    result:{
                        target:1,
                    },
                    combo:"TXniaoyu",
                    threaten:1.4,
                },
            },
            TXniaoyu:{
                init:function (player){
        player.storage.TXniaoyu=0;
    },
                audio:"ext:天行九歌:1",
                trigger:{
                    global:"useCard",
                },
                forced:true,
                filter:function (event,player){
        return event.player!=player&&event.player.hasSkill('TXkongshan_mark')&&get.type(event.card)!='equip';
    },
                content:function (){
        player.draw();
        player.storage.guju++;
        player.markSkill('TXniaoyu');
    },
                ai:{
                    combo:"zongkui",
                },
            },
            TXjunquan:{
                trigger:{
                    global:"useCardAfter",
                },
                forced:true,
                filter:function (event,player){
                    return (event.card.name=='sha'&&event.player!=player&&get.itemtype(event.cards)=='cards'&&get.position(event.cards[0],true)=='o');
                },
                content:function (){
                    player.gain(trigger.cards,'gain2');
                },
                group:["TXjunquan_1"],
                subSkill:{
                    "1":{
                        mod:{
                            cardUsable:function (card,player,num){      
                     if(card.name=='sha') return (player.hp)+1;
                 },
                        },
                        sub:true,
                    },
                },
            },
            "TXlingxu2":{
                enable:"chooseToUse",
                filter:function (event,player){      
        if(player.storage.TXlingxu<=0) return false;      
       // if(player.hasSkill('zhenshan2')) return false;
        var nh=player.countCards('h');
        if(!game.hasPlayer(function(current){
            return current!=player&&current.countCards('h')<nh;
        })){
            return false;
        }
        return event.filterCard({name:'sha'},player,event)||
            event.filterCard({name:'jiu'},player,event)||
            event.filterCard({name:'tao'},player,event);
    },
                chooseButton:{
                    dialog:function (event,player){
            var list=[];
            if(event.filterCard({name:'sha'},player,event)){
                list.push(['基本','','sha']);
                list.push(['基本','','sha','fire']);
                list.push(['基本','','sha','thunder']);
            }
            if(event.filterCard({name:'tao'},player,event)){
                list.push(['基本','','tao']);
            }
            if(event.filterCard({name:'jiu'},player,event)){
                list.push(['基本','','jiu']);
            }
            return ui.create.dialog('灵虚',[list,'vcard'],'hidden');
        },
                    check:function (button){
            var player=_status.event.player;
            var card={name:button.link[2],nature:button.link[3]};
            if(card.name=='jiu') return 0;
            if(game.hasPlayer(function(current){
                return player.canUse(card,current)&&get.effect(current,card,player,player)>0;
            })){
                if(card.name=='sha'){
                    if(card.nature=='fire') return 2.95;
                    else if(card.nature=='fire') return 2.92;
                    else return 2.9;
                }
                else if(card.name=='tao'){
                    return 4;
                }
            }
            return 0;
        },
                    backup:function (links,player){
            return {
                filterCard:function(){return false},
                viewAs:{name:links[0][2],nature:links[0][3]},
                selectCard:-1,
                popname:true,
                log:false,
            precontent:function(){
             player.storage.TXlingxu--;         
             player.syncStorage('TXlingxu');
             player.markSkill('TXlingxu');                                
                },
            }
        },
                    prompt:function (links,player){
            return '选择'+get.translation(links[0][3]||'')+get.translation(links[0][2])+'的目标';
        },
                },
                ai:{
                    order:function (){
            var player=_status.event.player;
            var event=_status.event;
            var nh=player.countCards('h');
            if(game.hasPlayer(function(current){
                return get.attitude(player,current)>0&&current.countCards('h')<nh;
            })){
                if(event.type=='dying'){
                    if(event.filterCard({name:'tao'},player,event)){
                        return 0.5;
                    }
                }
                else{
                    if(event.filterCard({name:'tao'},player,event)){
                        return 4;
                    }
                    if(event.filterCard({name:'sha'},player,event)){
                        return 2.9;
                    }
                }
            }
            return 0;
        },
                    save:true,
                    respondSha:true,
                    skillTagFilter:function (player,tag,arg){
            if(player.hasSkill('zhenshan2')) return false;
            var nh=player.countCards('h');
            return game.hasPlayer(function(current){
                return current!=player&&current.countCards('h')<nh;
            });
        },
                    result:{
                        player:function (player){
                if(_status.event.type=='dying'){
                    return get.attitude(player,_status.event.dying);
                }
                else{
                    return 1;
                }
            },
                    },
                },
            },
            TXlingxu:{
                group:["TXlingxu2"],
                init:function (player){
        player.storage.TXlingxu=0;
    },
                intro:{
                    content:"mark",
                },
                forced:true,
                trigger:{
                    player:["useCard","respondAfter"],
                },
                filter:function (event,player){
        return event.card.name=='sha';
    },
                content:function (){
        game.playTX('TXlingxu1');
        player.storage.TXlingxu++;
        player.syncStorage('TXlingxu');
        player.markSkill('TXlingxu');
    },
                ai:{
                    combo:"fanpu",
                },
            },
            TXyukong:{
                group:["TXyukong2"],
                init:function (player){
        player.storage.TXyukong=0;
    },
                intro:{
                    content:"mark",
                },
                trigger:{
                    player:["respond","useCard"],
                },
                filter:function (event,player){
        return event.card.name=='shan';
    },
                forced:true,
                content:function (){
        game.playTX('TXyukong1');
        player.storage.TXyukong++;
        player.syncStorage('TXyukong');
        player.markSkill('TXyukong');
    },
                ai:{
                    combo:"fanpu",
                },
            },
            "TXyukong2":{
                enable:"phaseUse",
                filter:function (event,player){     
        return player.storage.TXyukong>0;
    },
                chooseButton:{
                    dialog:function (){  
            var list=['taoyuan','wugu','juedou','huogong','jiedao','tiesuo','guohe','shunshou','wuzhong','wanjian','nanman'];
            for(var i=0;i<list.length;i++){
                list[i]=['锦囊','',list[i]];
            }
            return ui.create.dialog([list,'vcard']);
        },
                    filter:function (button,player){
            return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
        },
                    check:function (button){
            var player=_status.event.player;
            var recover=0,lose=1,players=game.filterPlayer();
            for(var i=0;i<players.length;i++){
                if(!players[i].isOut()){
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
            }
            if(lose>recover&&lose>0) return (button.link[2]=='nanman')?1:-1;
            if(lose<recover&&recover>0) return (button.link[2]=='taoyuan')?1:-1;
            return (button.link[2]=='wuzhong')?1:-1;
        },
                    backup:function (links,player){
            return {
                filterCard:true,
                selectCard:0,
                audio:2,
                popname:true,
                viewAs:{name:links[0][2]},
            }
        },
                    prompt:function (links,player){
            player.storage.TXyukong--;         
            player.syncStorage('TXyukong');
            player.markSkill('TXyukong');  
            
            return '请选择“'+get.translation(links[0][2])+'”的目标，点击屏幕空白处取消。';
        },
                },
                ai:{
                    order:1,
                    result:{
                        player:function (player){
                var num=0;
                var cards=player.getCards('h');
                if(cards.length>=3&&player.hp>=3) return 1;
                for(var i=0;i<cards.length;i++){
                    num+=Math.max(0,get.value(cards[i],player,'raw'));
                }
                num/=cards.length;
                num*=Math.min(cards.length,player.hp);
                return 12-num;
            },
                    },
                    threaten:1.6,
                },
            },
            TXyanhuo:{
                trigger:{
                    source:"damageBefore",
                },
                direct:true,
                priority:10,
                filter:function (event){
        return event.nature!='fire';
    },
                content:function (){
            game.playTX('TXyanhuo1');
            trigger.nature='fire';
        
    },
            },
            TXliwu:{
                trigger:{
                    player:["useCard","respondAfter"],
                },
                filter:function (event,player){
        return game.hasPlayer(function(current){
            return !current.isLinked();
        });
    },
                direct:true,
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('TXliwu'),function(card,player,target){
            return !target.isLinked();
        }).set('autodelay',trigger.name=='respond'?0.5:1).ai=function(target){
            return -get.attitude(player,target);
        };
        "step 1"
        if(result.bool){
          var target=result.targets[0]
            player.logSkill('TXliwu',target);            
            target.link();
            player.discardPlayerCard(target,true);                 
        }
    },
                ai:{
                    threaten:0.7,
                },
            },
            GSlengyan:{
                trigger:{
                    player:"phaseUseAfter",
                },
                direct:true,
                filter:function (event,player){
        return player.countCards('h');
    },
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('GSlengyan'),function(card,player,target){
            return target!=player&&target.countCards('h');
        }).set('ai',function(target){
            if(!_status.event.goon) return 0;
            return -get.attitude(_status.event.player,target);
        }).set('goon',player.needsToDiscard()||player.hasCard(function(card){
            var val=get.value(card);
            if(val<0) return true;
            if(val<=5){
                return card.number>=11;
            }
            if(val<=6){
                return card.number>=12;
            }
            return false;
        }));
        'step 1'
        if(result.bool){
            player.logSkill('GSlengyan',result.targets);
            event.target=result.targets[0];
            player.chooseToCompare(event.target);
        }
        else{
            event.finish();
        }
        'step 2'
        if(result.bool){
            target.loseHp();
        }
        else{
            player.gainPlayerCard(target,'he',true);
        }
    },
            },
            GSrouqing:{
                audio:"ext:天行九歌:1",
                trigger:{
                    player:"phaseBegin",
                },
                direct:true,
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('GSrouqing')).set('ai',function(target){
            return get.attitude(_status.event.player,target);
        });
        "step 1"
        if(result.bool){
            event.target=result.targets[0];
            player.logSkill('GSrouqing',result.targets);
        }
        else{
            event.finish();
        }
        "step 2"
        var cards=get.cards();
        var card=cards[0];
        switch(get.type(card,'trick')){
            case 'basic':event.effect='recover';break;
            case 'trick':event.effect='gainMaxHp';break;
            case 'equip':event.effect='draw';break;
        }
        if(get.type(card)=='equip'){
            event.target.equip(card);
            event.target.$draw(card);
            game.delay();
        }
        else{
            event.target.gain(cards,'gain2','log');
        }
        "step 3"
        switch(event.effect){
            case 'recover':event.target.recover();break;
            case 'draw':event.target.draw();break;                           
            case 'gainMaxHp':event.target.gainMaxHp();break;     
        }
    },
                ai:{
                    expose:0.2,
                    threaten:1.2,
                },
            },
            TXhanqing:{
                trigger:{
                    player:"damageEnd",
                    source:"damageEnd",
                },
                direct:true,
                content:function (){
           'step 0'
        player.chooseTarget('含情：选择一名未获得"情"标记的角色，令其获得标记',function(card,player,target){
            return  !target.hasSkill('TXqing');  
        }).ai=function(target){
               var player=_status.event.player;
            if(get.attitude(player,target)>0){
                return get.recoverEffect(target,player,player)+1;
            }
            return 0;
        };
        'step 1'
        if(result.bool){
            game.playTX('TXhanqing1');
            player.logSkill('TXhanqing',result.targets[0]);
            result.targets[0].addSkill('TXqing');
     
        }
    },
            },
            TXqing:{
                forced:true,
                trigger:{
                    player:["phaseBegin","phaseAfter"],
                },
                mark:true,
                intro:{
                    content:function (storage,player){
            return '准备或结束阶段，摸两张牌并弃置此标记';
        },
                },
                content:function (){
    
        player.draw(2);
        player.removeSkill('TXqing');
        
        
},
            },
            TXyingyi:{
                audio:"ext:天行九歌:1",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return player!=target;
    },
                filterCard:true,
                check:function (card){
        return 6-ai.get.value(card);
    },
                content:function (){
        
           "step 0"
       game.swapSeat(player,target);
           "step 1"
       target.judge(function(card){return (get.color(card)=='red')?1.5:-0.5});
           "step 2"
        if(result.judge>0){
          target.damage();      
        }    
        else{
       player.gainPlayerCard(target,'he',true);
              }          
    },
                ai:{
                    order:9,
                    result:{
                        target:-0.5,
                    },
                    threaten:1.2,
                },
            },
            TXhuanmo:{
                trigger:{
                    player:"damageBefore",
                },
                filter:function (event,player){
         return !player.isTurnedOver();
    },
                content:function (){
         'step 0'
        trigger.cancel();
        player.turnOver();
         'step 1'
        player.chooseTarget('幻墨：对一名其他角色造成一点伤害',function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return -get.attitude(player,target)/(1+target.hp);
        });
        'step 2'
        if(result.bool){
            player.logSkill('TXhuanno',result.targets[0]);
            result.targets[0].damage(); 
            game.playTX('TXhuanmo1');
        }
    },
                ai:{
                    threaten:1.5,
                    expose:0.2,
                },
            },
            TXlianhua:{
                trigger:{
                    player:["useCard","respondEnd"],
                },
                frequent:true,
                filter:function (event){
        return get.suit(event.card)=='heart';
            
        
    },
                content:function (){
       if(player.hp<player.maxHp){
          player.recover(); 
       }
        else{
          player.draw();
              }
            
        
    },
                ai:{
                    expose:0.3,
                    threaten:1.5,
                },
            },
        },
        translate:{
            TXlvzhi:"律制",
            "TXlvzhi_info":"当你受到伤害后，你可以弃置伤害来源一张牌，并令其非锁定技失效直到其受到伤害。",
            TXnilin:"逆鳞",
            "TXnilin_info":"当你使用[杀]时，你可以弃置目标一张牌并随机获得两张锦囊牌。",
            TXhengguan:"横贯",
            "TXhengguan_info":"锁定技，你使用的[杀]无视距离，并且可以指定任意名目标；当你体力值大于2时，此杀不可闪避，体力值小于等于2时，此杀伤害+1。",
            TXkongshan:"空山",
            "TXkongshan_info":"出牌阶段限一次，你可以将所有手牌交给一名其他角色，若如此做，你获得一点护甲，该角色获得\"空山\"标记到其回合结束。",
            TXniaoyu:"鸟语",
            "TXniaoyu_info":"锁定技，拥有“空山”标记的角色，每使用一张非装备牌，你摸一张牌。",
            TXjunquan:"军权",
            "TXjunquan_info":"锁定技，其他角色使用的杀，你获得之；你可以额外使用X张杀(X为你的体力值加1)。",
            "TXlingxu2":"灵虚",
            "TXlingxu2_info":"",
            TXlingxu:"灵虚",
            "TXlingxu_info":"当你使用或打出一张【杀】时，你获得一枚\"灵虚\"标记，出牌阶段你可以将此标记当任意一张基本牌使用。",
            TXyukong:"御空",
            "TXyukong_info":"当你使用或打出一张【闪】时，你获得一枚\"御空\"标记，你可以将此标记当任意一张非延时锦囊牌使用。",
            "TXyukong2":"御空",
            "TXyukong2_info":"出牌阶段限一次，你可以视为使用任意一张非延时锦囊牌。",
            TXyanhuo:"艳火",
            "TXyanhuo_info":"你造成的伤害均视为火焰伤害。",
            TXliwu:"丽舞",
            "TXliwu_info":"每当你使用或打出一张牌，你可以选择一名未横置的角色，令其武将牌横置并弃置其一张牌。",
            GSlengyan:"冷艳",
            "GSlengyan_info":"回合结束，你可以与一名其他角色拼点，若你赢，令其失去一点体力，若你没赢，获得其一张牌。",
            GSrouqing:"柔情",
            "GSrouqing_info":"准备阶段，你可以令一名角色摸一张并展示之，根据牌的类型执行效果：装备牌其立即装备之并摸一张牌，锦囊牌其增加一点体力上限，基本牌其回复一点体力。",
            TXhanqing:"含情",
            "TXhanqing_info":"当你造成或受到伤害时，你可以选择一名未获得\"情\"标记的角色，令其获得标记，拥有标记的角色准备或结束阶段，摸两张牌并弃置此标记。",
            TXqing:"情",
            "TXqing_info":"",
            TXyingyi:"影移",
            "TXyingyi_info":"出牌阶段限一次，你可以弃置一张手牌，和一名存活的角色交换位置。该目标进行判定，若结果为红色，你对其造成一点伤害，否则你获得其一张牌。",
            TXhuanmo:"幻墨",
            "TXhuanmo_info":"当你受到伤害时，你可以取消之，然后将自己武将牌翻面，并对一名其他角色造成一点伤害。",
            TXlianhua:"莲花",
            "TXlianhua_info":"每当你使用或打出一张红桃牌，你可以回复一点体力，若未损失体力改为摸一张牌。",
        },
    },
    intro:" <img src='file:///storage/emulated/0/Android/data/yuri.nakamura.noname_android/extension/天行九歌/天行九歌.jpg' width='160' >",
    author:"呲牙哥！",
    diskURL:"",
    forumURL:"",
    version:"1.0",
},files:{"character":["TXzhangliang.jpg"],"card":[],"skill":[]}}})