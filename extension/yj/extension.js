game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"云将",editable:false,content:function (config,pack){
// ---------------------------------------原皮露头------------------------------------------//
        if(lib.config.yjLutou){
        var func = HTMLDivElement.prototype.setBackgroundImage;
        HTMLDivElement.prototype.setBackgroundImage = function(name){
            if((this.classList.contains('avatar') || this.classList.contains('avatar2') || this.classList.contains('qh-image-lutou') || this.classList.contains('primary-avatar') || this.classList.contains('deputy-avatar') || this.classList.contains('button')) && name.indexOf('extension/云将/') == 0 && !this.classList.contains('xwnotingame')&& name.indexOf("extension/云将/skin/")!=0){
                name = name.replace('extension/云将/','extension/云将/lutou/');
            }
            func.apply(this,arguments);
        };
    }
    
    // ---------------------------------------阵亡配音------------------------------------------//
			lib.skill._siwang= {
				trigger: { global: 'dieBegin', },
				//direct:true,
				priority: 2,
				forced: true,
				unique: true,
				frequent: true,
				/*filter:function (event,player){
				return !event.player.isAlive();
				},*/
				content: function () {
					game.playAudio('..', 'extension', '云将', trigger.player.name);
				},
			}

    // ---------------------------------------武将评级------------------------------------------//
    if(lib.rank){
        //lib.rank.rarity.common.addArray();
        lib.rank.rarity.rare.addArray(['yunhuangyueying','yunzuoci','yuncaishi','yundiaochan','yundongbai','yunwangji','yunxushi','yungongsunzhan','yunzhangfei','yunjiangwei','yunzhangjiao']);
        lib.rank.rarity.epic.addArray(['yuncaoying','yunsunquan','yunzhanghe','yunxunyu','yunjiaxu','yunsunce','yunsunshangxiang','yunzhugeliang','yunlvbu','yunguanyu','yunguojia','yunpangtong','yunzhangliao','yuncaocao','yunzhouyu','yunlvmeng','yunliubei','yunzhaoyun','yunsimayi','yunzhangchunhua']);
        lib.rank.rarity.legend.addArray(['hanyun','jihanyun','shenhanyun']);
    }
 			    // ---------------------------------------千幻皮肤------------------------------------------//  
},precontent:function(){
    window.yunjiang_import=function(func){
        func(lib,game,ui,get,ai,_status);
    };
    lib.init.js(lib.assetURL +'extension/云将/skin.js',null);//这一行代码加载扩展中的skin.js文件。
},help:{},config:{"yjLutou":{"name":"露头皮肤","intro":"开启后，将切换皮肤为十周年UI露头皮肤（重启后生效）。","init":true}},package:{
    character:{
        character:{
            hanyun:["male","shen",3,["yunshenzi"],["zhu","forbidai","des:吾之所好，杀人诛心！<br><br><br><br><br><br><br>———作者DIY人物，因为非正史或演义角色，所以设定为仅玩家可使用。"]],
            jihanyun:["male","shen",3,["yunjilve"],["zhu","forbidai","des:来，让我看一出好戏吧。<br><br><br><br><br><br><br>———作者DIY人物，因为非正史或演义角色，所以设定为仅玩家可使用。"]],
            shenhanyun:["male","shen",3,["yunshenquan"],["zhu","forbidai","des:天命难违？哈哈哈哈！<br><br><br><br><br><br><br>———作者DIY人物，因为非正史或演义角色，所以设定为仅玩家可使用。"]],
            yunguojia:["male","wei",3,["yunguimou","yunyice"],["des:如若奉孝在，何使孤至此……痛哉！奉孝……惜哉！奉孝……"]],
            yuncaocao:["male","wei",3,["yunxiongcai","yunxieling","yunzongyu"],["zhu","des:今起义兵，以除暴乱；九合诸侯，一扫群桀！"]],
            yunlvbu:["male","qun",5,["yuntanlang","yunwushuang"],["zhu","des:“那是……是吕布！！！吕布出阵了！！” “快逃！！快！这种怪物我们怎么可能……” “鬼神！鬼神降临在虎牢关！！！神鬼惊怖！！！”"]],
            yunwangji:["male","wei",3,["yunqizhi"],["des:奇兵百出，敌何能为？"]],
            yunzhugeliang:["male","shu",3,["yunsouji","yunqixing","yunbazhen"],["des:臣必鞠躬尽瘁，死而后已，以报先帝三顾之恩！"]],
            yunlvmeng:["male","wu",4,["yunshelve","yunbotu","yunkeji"],["des:士别三日，吾已非昔日吴下阿蒙。"]],
            yunzhangliao:["male","wei","3/4",["yunduorui","yunzhiti"],["des:娃闻名止啼，孙损十万休。"]],
            yuncaishi:["female","qun",3,["yunqieting","yunxianzhou"],["des:青蛇竹儿口，黄蜂尾后针，两者皆不毒，最毒妇人心。"]],
            yunsunshangxiang:["female","wu",4,["yunjieyin","yunxiaoji"],["des:你 愿不愿意和我在一起？"]],
            yunpangtong:["male","shu",3,["yunxiance","yunfengming"],["des:落凤坡……落凤坡……哈哈哈…涅磐重生……的……该是 这 天 下 ！"]],
            yunguanyu:["male","wei",4,["yunyijue","yunyangwei","yunguayin"],["des:“关某虽一介武夫，亦颇知忠义二字，正所谓择木之禽，必栖良木，择主之臣，得遇明主。从今往后，关某之命即是刘兄之命，关某之躯即是刘兄之躯，但凭趋使，绝无二心！”"]],
            yunzhangchunhua:["female","wei",3,["yunjueqing","yunshangshi","yunjuekou"],["des:司马仲达，如果有来世，我不要再遇见你！"]],
            yundongbai:["female","qun",3,["yunlianzhu","yunjiaoheng"],["zhu","des:我要让爷爷定你们死罪！！！"]],
            yundongzuo:["male","qun",9,["yundongzuo","yunbaonve","yunchongni","benghuai"],["forbidai","unseen","des:竟敢欺负我的宝贝孙女?薛刀，给我把这个杂碎剁了！"]],
            yunzhouyu:["male","wu",4,["yunguqu","yunyeyan"],["des:遥想公瑾当年，小乔初嫁了，雄姿英发。羽扇纶巾，谈笑间，樯橹灰飞烟灭。"]],
            yunliubei:["male","shu",4,["yunjieyi","yunzhaolie","yunsangu"],["zhu","des:“为图大事，我漂流半生，苦苦寻找志同道合之人，直到今日淘尽狂沙始见真金，天可怜见，将二位英雄赐予刘备，备欲同你二人结拜为生死弟兄，不知二位意下如何？”"]],
            yunzhangfei:["male","shu",4,["yunwanjun","yunyongzhi"],["des:“俺也一样！”"]],
            yundiaochan:["female","qun",2,["yunmeihuo","yunbiyue"],["des:歌月徘徊孤楼前，舞影零游群雄间。如花朱颜非吾愿，香消玉殒惹谁怜？"]],
            yunsunce:["male","wu",4,["yunyingyang","yunjiang","yunxianxi"],["zhu","des:父亲在上，公瑾在旁，一拜天地，二拜高堂。"]],
            yunxushi:["female","wu",3,["yunbugua","yunfuzhu"],["des:我连做梦都在等这一天呢!！"]],
            yungongsunzhan:["male","qun",4,["yunyicong","yunzhujing"],["des:伯珪疏犷，武才趫猛。虞好无终，绍势难并。"]],
            yunjiaxu:["male","qun",3,["yunjiance","yunwansha","yunjimou"],["des:吾之所求，不过是安身立命而已。天下人的死活，与我何干？"]],
            yunzhaoyun:["male","shu",3,["yunlongdan","yunlonglie"],["des:捂奶长衫造纸农！"]],
            yunhuangyueying:["female","shu",3,["yunqiqiao","yunlinglong"],["des:‘孔明大人，待扶汉功成，我们便回隆中……可好……’"]],
            yunxunyu:["male","wei",3,["yunquhu","yunwangzuo"],["des:令君留香，君子如彧。"]],
            yunzhanghe:["male","wei",4,["yunqiaobian","yunshanlve"],["des:我曾经翻山越岭，直到膝盖中了一箭……"]],
            yunsimayi:["male","wei",3,["yunrenjie","yunyingshi"],["des:鹰视狼顾，志存高远！"]],
            yunsunquan:["male","wu",4,["yunzhiheng","yunhuju","yunjianye"],["zhu","des:十万对八百，此战优势在我！你八百兵能把我捶了？你今天要是能捶到我，我当场把这逍遥津给吃了！飞龙骑脸不知道怎么输！"]],
            yuncaoying:["female","wei",3,["yunlingren","yunfujian"],["des:老将军虎威犹在，只可惜命不久矣！<br>将军一副好骨，不如埋于此山？<br>将军这些把戏，可难不倒我哦。<br>我已在此，等候将军多时了！<br>你这点小心思，我还会猜不透？<br>你输了，这些就要归我。<br><br>———曹婴的世界只有将军(๑>؂<๑）！！！"]],
            yunzuoci:["male","qun",3,["yunyugui"],["des:我可以女装，也可以帮你女装，你要不要？"]],
            yunjiangwei:["male","shu",4,["yunchengzhi","yunqilin"],["des:丞相遗志，伯约竭力而为，奈何大汉国运衰微至此！丞相……伯约……力尽矣……"]],
            yunzhangjiao:["male","qun",3,["yunchuandao","yuntaiping","yunhuangtian"],["zhu","des:我大意了！"]],
        },
        translate:{
            hanyun:"韩云",
            jihanyun:"极韩云",
            shenhanyun:"神韩云",
            yunguojia:"郭嘉",
            yuncaocao:"曹操",
            yunlvbu:"吕布",
            yunwangji:"王基",
            yunzhugeliang:"诸葛亮",
            yunlvmeng:"吕蒙",
            yunzhangliao:"张辽",
            yuncaishi:"蔡氏",
            yunsunshangxiang:"孙尚香",
            yunpangtong:"庞统",
            yunguanyu:"关羽",
            yunzhangchunhua:"张春华",
            yundongbai:"董白",
            yundongzuo:"董卓",
            yunzhouyu:"周瑜",
            yunliubei:"刘备",
            yunzhangfei:"张飞",
            yundiaochan:"貂蝉",
            yunsunce:"孙策",
            yunxushi:"徐氏",
            yungongsunzhan:"公孙瓒",
            yunjiaxu:"贾诩",
            yunzhaoyun:"赵云",
            yunhuangyueying:"黄月英",
            yunxunyu:"荀彧",
            yunzhanghe:"张郃",
            yunsimayi:"司马懿",
            yunsunquan:"孙权",
            yuncaoying:"曹婴",
            yunzuoci:"左慈",
            yunjiangwei:"姜维",
            yunzhangjiao:"张角",
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
            yunshenyi:{
                audio:"ext:云将:3",
                trigger:{
                    player:"loseAfter",
                },
                forced:true,
                fixed:true,
                unique:true,
                filter:function (event,player){
        return player.countCards('h')<player.maxHp;
    },
                content:function (){
        player.draw(player.maxHp-player.countCards('h'));
    },
            },
            yunshenzi:{
                audio:"ext:云将:3",
                trigger:{
                    global:["damageEnd","loseHpEnd"],
                },
                usable:1,
                unique:true,
                fixed:true,
                charlotte:true,
                superCharlotte:true,
                logTarget:"player",
                content:function(){
        'step 0'
        var controls=[],controlsx=['选项一','选项二'];
        var skills=trigger.player.get('s',false,false);
        for(i=0;i<skills.length;i++){
            var info=lib.skill[skills[i]];
            if(!info) continue;
            if(!lib.translate[skills[i]]) continue;
            if(!lib.translate[skills[i]+'_info']) continue;
            if(player.hasSkill(skills[i])) continue;
            if(!controls.contains(skills[i])){
                controls.push(skills[i]);
            }
        }
        if(!controls.length) controlsx.remove('选项二');
        player.chooseControl(controlsx).set('prompt','神姿<br><br><div class="text">选项一:你摸一张牌。</div><br><div class="text">选项二:获得其一个技能。</div></br>').set('ai',function(event,player){
            if(player.hp<2||player.countCards('h')<2) return '选项一';
            return '选项二';
        });
        'step 1'
        if(result.control=='选项一'){
            player.draw();
        }
        else{
            event.goto(2);
        }
        'step 2'
        var controls=[];
        var skills=trigger.player.get('s',false,false);
        for(i=0;i<skills.length;i++){
            var info=lib.skill[skills[i]];
            if(!info) continue;
            if(!lib.translate[skills[i]]) continue;
            if(!lib.translate[skills[i]+'_info']) continue;
            if(player.hasSkill(skills[i])) continue;
            if(!controls.contains(skills[i])){
                controls.push(skills[i]);
            }
        }
        if(controls.length==1){
            player.popup(controls[0]);
            player.addAdditionalSkill('yunshenzi',[controls[0]],true);
            game.log(player,'获得技能','【'+get.translation(controls[0])+'】');event.finish();
        }
        else{
            player.chooseControl(controls).set('ai',function(){
                return Math.floor(Math.random()*controls.length);
            }).set('prompt','神姿：选择获得'+get.translation(trigger.player)+'的一项技能');
        }
        "step 3"
        if(result.control){
            player.popup(result.control);
            player.addAdditionalSkill('yunshenzi',[result.control],true);
            player.storage.zhuSkill_yunshenzi=[result.control];
            game.log(player,'获得技能','【'+get.translation(result.control)+'】');
            game.broadcastAll()+player.node.avatar.setBackgroundImage('extension/云将/hanyun.jpg');
        }
    },
                ai:{
                    threaten:1.2,
                },
            },
            yuntianming:{
                skillAnimation:true,
                animationColor:"thunder",
                unique:true,
                juexingji:true,
                audio:"ext:云将:2",
                derivation:["yunshenquan"],
                trigger:{
                    player:"dying",
                },
                forced:true,
                content:function(){
        "step 0"
        player.removeSkill('yuntianminga');
        "step 1"
        player.draw(player.maxHp);
        "step 2"
        if(player.hp<player.maxHp){
            player.recover(player.maxHp-player.hp);
        }
        "step 3"
        player.addSkill('yunshenquan');
        player.storage.kunfen=true;
        player.awakenSkill('yuntianming');
    },
                ai:{
                    order:6,
                    threaten:3,
                },
            },
            yunshenquan:{
                audio:"ext:云将:3",
                enable:"phaseUse",
                delay:0,
                unique:true,
                fixed:true,
                charlotte:true,
                superCharlotte:true,
                filter:function(event,player){
        for(var i=0;i<game.players.length;i++){
            if(game.players[i]!=player&&game.players[i].num('he')){
                return true;
            }
        }
        return false;
    },
                content:function(){
        "step 0"
        player.getStat('skill').yunshenquan--;
        player.chooseTarget(function(card,player,target){
            return player!=target&&target.num('he');
        },'请选择一名角色').ai=function(target){
            return -ai.get.attitude(player,target);
        };
        "step 1"
        if(result.bool){
            player.getStat('skill').yunshenquan++;
            event.target=result.targets[0];
            event.goto(2);
        }
        else{
            event.finish();    
        }
        "step 2"
        var target=event.target;
        event.dialog=ui.create.dialog('hidden');
        event.dialog.add('选择'+get.translation(target)+'的一张卡牌使用');
        event.position='he';
        var position=event.position;
        for(var i=0;i<position.length;i++){
            if(position[i]=='h'&&target.num('h')){
                event.dialog.add('手牌');
                var hs=target.get('h');
                hs.randomSort();
                event.dialog.add(hs);
            }
            else if(position[i]=='e'&&target.num('e')){
                event.dialog.add('装备牌');
                event.dialog.add(target.get('e'));
            }                
        }
        var dialog=event.dialog;
        var trigger=event.parent.parent;
        player.chooseButton(dialog,function(){return 1}).filterButton=function(button){
            return trigger.filterCard(button.link,player,trigger);
        };
        "step 3"
        if(result.bool){
            event.target.lose(result.links);
            event.target.$give(result.links,player);
            lib.skill.yunshenquana.viewAs=result.buttons[0].link;
            event.parent.parent.backup('yunshenquana');
            event.parent.parent.step=0;
            if(event.isMine()){
                event.parent.parent.openskilldialog='选择'+get.translation(result.buttons[0].link)+'的目标';
            }
        }
    },
                ai:{
                    order:8,
                    result:{
                        player:function(player){
                if(_status.dying&&_status.dying.length>0) return ai.get.attitude(player,_status.dying[0]);
                return 1;
            },
                    },
                    threaten:10,
                },
            },
            yunshenquana:{
                direct:true,
                popup:false,
                unique:true,
                filterCard:function(){return false},
                selectCard:-1,
                viewAs:{
                    node:{
                        image:{
                        },
                        info:{
                        },
                        suitnum:{
                            view:{
                            },
                            "$num":{
                                view:{
                                },
                            },
                            "$br":{
                                view:{
                                },
                            },
                            "$suit":{
                                view:{
                                },
                            },
                        },
                        name:{
                        },
                        "name2":{
                            "$suitnum":{
                                view:{
                                },
                            },
                            "$name":{
                                view:{
                                },
                            },
                        },
                        background:{
                        },
                        intro:{
                        },
                        range:{
                        },
                        gaintag:{
                            view:{
                            },
                        },
                        judgeMark:{
                            view:{
                            },
                            node:{
                                back:{
                                    view:{
                                    },
                                },
                                mark:{
                                    view:{
                                    },
                                },
                                judge:{
                                    view:{
                                    },
                                },
                            },
                        },
                        cardMask:{
                            view:{
                            },
                        },
                    },
                    "$name":{
                        view:{
                        },
                    },
                    "$vertname":{
                    },
                    "$equip":{
                        "$suitnum":{
                            view:{
                            },
                        },
                        "$name":{
                            view:{
                            },
                        },
                    },
                    "$suitnum":{
                        view:{
                        },
                        "$num":{
                            view:{
                            },
                        },
                        "$br":{
                            view:{
                            },
                        },
                        "$suit":{
                            view:{
                            },
                        },
                    },
                    "$range":{
                    },
                    "$gaintag":{
                        view:{
                        },
                    },
                    "_super":{
                    },
                    storage:{
                    },
                    vanishtag:[],
                    gaintag:[],
                    "_uncheck":[],
                    suit:"spade",
                    number:6,
                    name:"lebu",
                    cardid:"6100873354",
                    original:"h",
                    throwWith:"h",
                    "_transform":null,
                    viewAs:"lebu",
                },
                ai:{
                    order:function(){
                        return get.order({name:'sha'})-0.1;
                    },
                    equipValue:function(card,player){
                        if(player._zhuge_temp) return 1;
                        player._zhuge_temp=true;
                        var result=function(){
                            if(!game.hasPlayer(function(current){
                                return get.distance(player,current)<=1&&player.canUse('sha',current)&&get.effect(current,{name:'sha'},player,player)>0;
                            })){
                                return 1;
                            }
                            if(player.hasSha()&&_status.currentPhase==player){
                                if(player.getEquip('zhuge')&&player.countUsed('sha')||player.getCardUsable('sha')==0){
                                    return 10;
                                }
                            }
                            var num=player.countCards('h','sha');
                            if(num>1) return 6+num;
                            return 3+num;
                        }();
                        delete player._zhuge_temp;
                        return result;
                    },
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
                        if(player.isDisabled(get.subtype(card))) return 0.01;
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
                            if(method=='raw2') return equipValue(card,player)-value;
                            return Math.max(0.1,equipValue(card,player)-value);
                        }
                        if(typeof equipValue!='number') equipValue=0;
                        if(method=='raw') return equipValue;
                        if(method=='raw2') return equipValue-value;
                        return Math.max(0.1,equipValue-value);
                    },
                    },
                    tag:{
                        valueswap:1,
                        recover:1,
                        save:1,
                        skip:"phaseUse",
                    },
                    result:{
                        target:function(player,target,card){
                        return get.equipResult(player,target,card.name);
                    },
                        "target_use":function(player,target){
                            // if(player==target&&player.hp<=0) return 2;
                            if(player.hasSkillTag('nokeep',true,null,true)) return 2;
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
                },
            },
            yunjilve:{
                audio:"ext:云将:4",
                enable:["chooseToUse","chooseToRespond"],
                fixed:true,
                unique:true,
                charlotte:true,
                superCharlotte:true,
                hiddenCard:function(player,name){
        return (!player.storage.yunjilve.contains(name)&&player.countCards('hse')>0&&lib.inpile.contains(name));
    },
                init:function(player){
        if(!player.storage.yunjilve) player.storage.yunjilve=[];
    },
                chooseButton:{
                    dialog:function(event,player){
        var list=[];
            for(var i=0;i<lib.inpile.length;i++){
                var name=lib.inpile[i];
                if(player.storage.yunjilve.contains(name)) continue;
                if(name=='sha'){
                    list.push(['基本','','sha']);
                    list.push(['基本','','sha','fire']);
                    list.push(['基本','','sha','thunder']);
                    list.push(['基本','','sha','ice']);
                }
                else if(get.type2(name)=='trick') list.push(['锦囊','',name]);
                else if(get.type(name)=='basic') list.push(['基本','',name]);
            }
            if(list.length==0){
                return ui.create.dialog('极略已无牌可用');
            }
            return ui.create.dialog('极略',[list,'vcard']);
        },
                    filter:function(button,player){
            return _status.event.getParent().filterCard({name:button.link[2]},player,_status.event.getParent());
        },
                    check:function(button){
            var player=_status.event.player;
            if(player.countCards('h',button.link[2])>0) return 0;
            if(button.link[2]=='wugu') return 0;
            var effect=player.getUseValue(button.link[2]);
            if(effect>0) return effect;
            return 0;
        },
                    backup:function(links,player){
            return {
                filterCard:true,
                selectCard:1,
                popname:true,
                check:function(card){
                    return 6-get.value(card);
                },
                position:'hse',
                viewAs:{name:links[0][2],nature:links[0][3]},
                onuse:function(result,player){
                    game.log(player,'发动了【极略】');
                    player.logSkill('yunjilve',event.targets);
                    player.storage.yunjilve.add(result.card.name);
                },
            }
        },
                    prompt:function(links,player){
            return '将一张牌当做'+(get.translation(links[0][3])||'')+get.translation(links[0][2])+'使用';
        },
                },
                group:["yunjilvea"],
                ai:{
                    fireAttack:true,
                    respondSha:true,
                    respondShan:true,
                    skillTagFilter:function(player){
            if(!player.countCards('hse')) return false;
        },
                    order:10,
                    basic:{
                        useful:[6,4,3],
                        value:[6,4,3],
                    },
                    result:{
                        player:1,
                    },
                },
            },
            yunjilvea:{
                trigger:{
                    global:"phaseJieshuBegin",
                },
                forced:true,
                popup:false,
                content:function(){
            player.storage.yunjilve=[];
    },
            },
            yunyice:{
                audio:"ext:云将:3",
                trigger:{
                    player:"damageEnd",
                },
                forced:true,
                filter:function (event){
        return (event.num>0)
    },
                content:function (){
        "step 0"
        event.count=1;
        "step 1"
        var num=player.maxHp-player.hp;
        if(player.hp<player.maxHp){
            player.draw(num);
        }
        event.given=0;
        "step 2"
        player.chooseCardTarget({
            filterCard:true,
            selectCard:[1,2-event.given],
            filterTarget:function(card,player,target){
                return player!=target&&target!=event.temp;
            },
            ai1:function(card){
                if(ui.selected.cards.length>0) return -1;
                if(card.name=='du') return 20;
                return (_status.event.player.countCards('h')-_status.event.player.hp);
            },
            ai2:function(target){
                var att=get.attitude(_status.event.player,target);
                if(ui.selected.cards.length&&ui.selected.cards[0].name=='du'){
                    if(target.hasSkillTag('nodu')) return 0;
                    return 1-att;
                }
                return att-4;
            },
            prompt:'请选择要送人的卡牌'
        });
        player.say(["主公勿忧，奉孝在此！","虽然我吃喝嫖赌，但我是个好谋士。"].randomGet());
        "step 3"
        if(result.bool){
            player.line(result.targets,'green');
            result.targets[0].gain(result.cards,player,'giveAuto');
            event.given+=result.cards.length;
            if(event.given<2){
                event.temp=result.targets[0];
                event.goto(2);
            }
            else if(event.count<trigger.num){
                delete event.temp;
                event.count++;
                player.chooseBool(get.prompt2(event.name)).set('frequentSkill',event.name);
            }
            else event.finish();
        }
        else if(event.count<trigger.num){
            delete event.temp;
            event.count++;
            player.chooseBool(get.prompt2(event.name)).set('frequentSkill',event.name);
        }
        else event.finish();
        "step 4"
        if(result.bool){
            player.logSkill(event.name);
            event.goto(1);
        }
    },
                group:"yunyicea",
                ai:{
                    expose:1,
                    maixie:true,
                    "maixie_hp":true,
                    result:{
                        effect:function (card,player,target){
                if(get.tag(card,'damage')){
                    if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                    if(!target.hasFriend()) return;
                    var num=1;
                    if(get.attitude(player,target)>0){
                        if(player.needsToDiscard()){
                            num=0.7;
                        }
                        else{
                            num=0.5;
                        }
                    }
                    if(player.hp>=4) return [1,num*2];
                    if(target.hp==3) return [1,num*1.5];
                    if(target.hp==2) return [1,num*0.5];
                }
            },
                    },
                    threaten:0.6,
                },
            },
            yunyicea:{
                audio:"ext:云将:2",
                trigger:{
                    player:"damageAfter",
                },
                forced:true,
                content:function(){
        'step 0'
        event.count;
        'step 1'
        player.judge();
        'step 2'
        event.color=result.color;
        if(event.color=='black'){
            player.chooseTarget('弃置一名角色区域内的一张牌',function(card,player,target){
                return target.countCards('hej');
            }).set('ai',function(target){
                var player=_status.event.player;
                var att=get.attitude(player,target);
                if(att<0){
                    att=-Math.sqrt(-att);
                }
                else{
                    att=Math.sqrt(att);
                }
                return att*lib.card.guohe.ai.result.target(player,target);
            })
        }
        else{
            var next=player.recover();
        }
        'step 3'
        if(result.bool){
            var target=result.targets[0];
            player.line(target,'green');
            if(event.color=='black'){
                player.discardPlayerCard(target,'hej',true);
            }
                else{
                    player.recover();
                }
        }
        'step 4'
        if(--event.num>0){
            player.chooseBool(get.prompt2('yunyicea'));
        }
        else{
            event.finish();
        }
        'step 5'
        if(result.bool){
            player.logSkill('yunyicea');
            event.goto(1);
        }
    },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    effect:{
                        target:function(card,player,target){
                if(get.tag(card,'damage')){
                    if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                    if(!target.hasFriend()) return;
                    if(target.hp>=4) return [1,get.tag(card,'damage')*1.5];
                    if(target.hp==3) return [1,get.tag(card,'damage')*1];
                    if(target.hp==2) return [1,get.tag(card,'damage')*0.5];
                }
            },
                    },
                },
            },
            yunguimou:{
                audio:"ext:云将:2",
                trigger:{
                    global:"phaseZhunbeiBegin",
                },
                filter:function(event,player){
        return player!=event.player&&event.player.num('h')&&player.num('h');
    },
                check:function(event,player){
        if(player.hp<=1) return 0;
        return ai.get.attitude(player,event.player)<0;
    },
                prompt:"是否发动【鬼谋】与其拼点？",
                content:function(){
        'step 0'
        player.chooseToCompare(trigger.player);
        'step 1'
        if(result.bool){
            var list=['taoyuan','wugu','juedou','huogong','jiedao','tiesuo','guohe','shunshou','wuzhong','wanjian','nanman'];
            for(var i=0;i<list.length;i++){
                list[i]=['锦囊','',list[i]];
            }
            var dialog=ui.create.dialog('鬼谋',[list,'vcard'],'hidden');
            var next=player.chooseButton(dialog);
            next.filterButton=function(button,player){
                return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
            }
            next.ai=function(button){
                var player=_status.event.player;
                var recover=0,lose=1;
                for(var i=0;i<game.players.length;i++){
                    if(!game.players[i].isOut()){
                        if(game.players[i].hp<game.players[i].maxHp){
                            if(ai.get.attitude(player,game.players[i])>0){
                                if(game.players[i].hp<2){
                                    lose--;
                                    recover+=0.5;
                                }
                                lose--;
                                recover++;
                            }
                            else if(ai.get.attitude(player,game.players[i])<0){
                                if(game.players[i].hp<2){
                                    lose++;
                                    recover-=0.5;
                                }
                                lose++;
                                recover--;
                            }
                        }
                        else{
                            if(ai.get.attitude(player,game.players[i])>0){
                                lose--;
                            }
                            else if(ai.get.attitude(player,game.players[i])<0){
                                lose++;
                            }
                        }
                    }
                }
                var shunTarget=false;
                var chaiTarget=false;
                for(var i=0;i<game.players.length;i++){
                    if(player.canUse('shunshou',game.players[i])&&ai.get.effect(game.players[i],{name:'shunshou'},player)){
                        shunTarget=true;
                    }
                    if(player.canUse('guohe',game.players[i])&&ai.get.effect(game.players[i],{name:'guohe'},player)>=0){
                        chaiTarget=true;
                    }
                }
                if(lose>recover&&lose>0) return (button.link[2]=='nanman')?1:-1;
                if(lose<recover&&recover>0) return (button.link[2]=='taoyuan')?1:-1;
                if(shunTarget) return (button.link[2]=='shunshou')?3:-1;
                if(chaiTarget) return (button.link[2]=='guohe')?2.5:-1;
                return (button.link[2]=='wuzhong')?3:-1;
            }
        }
        else{
            player.damage('nosource');
            event.finish();
        }
        'step 2'
        if(result.bool){
            lib.skill.yunguimoua.viewAs={name:result.buttons[0].link[2]};
            var next=player.chooseToUse();
            next.set('openskilldialog','选择'+get.translation(result.buttons[0].link[2])+'的目标');
            next.set('norestore',true);
            next.set('_backupevent','yunguimoua');
            next.backup('yunguimoua');
        }
    },
            },
            yunguimoua:{
                audio:"ext:云将:2",
                filterCard:function(){return false;},
                selectCard:0,
                popname:true,
                viewAs:{
                    name:"shunshou",
                },
                ai:{
                    wuxie:function(target,card,player,viewer){
            if(player==game.me&&get.attitude(viewer,player)>0){
                return 0;
            }
        },
                    basic:{
                        order:5,
                        useful:1,
                        value:5.5,
                    },
                    result:{
                        target:-1.5,
                        player:function(player,target){
                if(get.damageEffect(target,player,target)>0&&get.attitude(player,target)>0&&get.attitude(target,player)>0){
                    return 0;
                }
                var hs1=target.getCards('h','sha');
                var hs2=player.getCards('h','sha');
                if(hs1.length>hs2.length+1){
                    return -2;
                }
                var hsx=target.getCards('h');
                if(hsx.length>2&&hs2.length==0&&hsx[0].number<6){
                    return -2;
                }
                if(hsx.length>3&&hs2.length==0){
                    return -2;
                }
                if(hs1.length>hs2.length&&(!hs2.length||hs1[0].number>hs2[0].number)){
                    return -2;
                }
                return -0.5;
            },
                        "target_use":function(player,target){
                if(player.hasUnknown(2)&&get.mode()!='guozhan') return 0;
                var nh=target.countCards('h');
                if(get.mode()=='identity'){
                    if(target.isZhu&&nh<=2&&target.hp<=1) return -100;
                }
                if(nh==0) return -2;
                if(nh==1) return -1.7
                return -1.5;
            },
                    },
                    tag:{
                        respond:2,
                        respondSha:2,
                        damage:1,
                        multitarget:1,
                        multineg:1,
                        recover:0.5,
                        loseCard:1,
                        gain:1,
                        draw:2,
                    },
                },
            },
            yunqizhi:{
                audio:"ext:云将:5",
                trigger:{
                    player:"useCardToPlayered",
                },
                direct:true,
                marktext:"奇制",
                intro:{
                    name:"奇制",
                    content:"你已发动#次奇制",
                },
                mark:true,
                onremove:true,
                derivation:"yunchizhong",
                filter:function(event,player){
        if(!event.targets) return false;
        if(!event.isFirstTarget) return false;
        if(_status.currentPhase!=player) return false;
        var type=get.type(event.card,'trick');
        if(type!='basic'&&type!='trick') return false;
        if(event.noai) return false;
        return game.hasPlayer(function(target){
            return target.countCards('hej')>0;
        });
    },
                prompt:"是否发动【奇制】弃置一张牌",
                content:function(){
        'step 0'
        player.chooseTarget(get.prompt('yunqizhi'),'弃置一名角色的一张牌，然后其摸一张牌',function(card,player,target){
            return target.countCards('he')>0;
        }).set('ai',function(target){
            var player=_status.event.player;
            if(target==player) return 2; 
            if(get.attitude(player,target)<=0){
                return 1
            }
            return 0.5;
        }).set('targets',trigger.targets);
        'step 1'
        if(result.bool){
            player.getHistory('custom').push({yunqizhi:true});
            if(!event.isMine()&&!_status.connectMode) game.delay();
            player.logSkill('yunqizhi',result.targets);
            player.discardPlayerCard(result.targets[0],true,'he');
            player.addMark('yunqizhi',1);
            event.target=result.targets[0];
        }
        else{
            event.finish();
        }
        'step 2'
        if(!player.storage.yunqizhi_re)
        event.target.draw();
    },
                group:["yunqizhi_mp"],
                subSkill:{
                    mp:{
                        audio:"ext:云将:5",
                        trigger:{
                            player:"phaseDiscardBefore",
                        },
                        forced:true,
                        check:function (event,player){
        return player.getHistory('custom',function(evt){
            return evt.yunqizhi==true;
        }).length>=player.countCards('h');
    },
                        prompt:function (event,player){
        var num=player.getHistory('custom',function(evt){
            return evt.yunqizhi==true;
        }).length;
        return '奇制：摸'+get.cnNumber(num)+'张牌';
    },
                        content:function (){
        "step 0"
        var num=player.getHistory('custom',function(evt){
            return evt.yunqizhi==true;
        }).length;
        player.draw(num);
        "step 1"
        var num1=player.getHistory('custom',function(evt){
            return evt.yunqizhi==true;
        }).length;
        if(player.hp<=num1){
            player.say(["吴懿不在此地！","吴懿在哪？"].randomGet());
            player.addTempSkill('yunchizhong',{player:'phaseZhunbeiBegin'});
        }else{
            player.removeMark('yunqizhi',Infinity);
            }
    },
                        sub:true,
                    },
                },
            },
            yunchizhong:{
                mark:true,
                marktext:"持重",
                intro:{
                    name:"持重",
                    content:true,
                },
                trigger:{
                    player:"phaseAfter",
                },
                forced:true,
                popup:false,
                content:function(){
         player.removeMark('yunqizhi',Infinity);
    },
                mod:{
                    targetEnabled:function(card,player,target){
            if(get.type(card)=='delay'){
                return false;
            }
        },
                    maxHandcardBase:function(player,num){
            return num+Math.ceil(player.storage.yunqizhi/2);
        },
                },
            },
            yuntanlang:{
                audio:"ext:云将:2",
                forced:true,
                unique:true,
                charlotte:true,
                trigger:{
                    global:"phaseZhunbeiBegin",
                },
                filter:function(event,player){
        return event.player!=player&&player.countCards('h')<player.maxHp;
    },
                content:function(){
        player.draw();
    },
                init:function(player){
        if(player.isZhu){
            player.maxHp--;
            player.update();
        }
    },
            },
            yunwushuang:{
                audio:"ext:云将:2",
                derivation:"yunjiwue",
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                content:function (){
        game.countPlayer(function(current){
            if(current!=player&&!current.hasSkill('fengyin')){
                player.line(current,'green');
                current.addTempSkill('fengyin');
                player.addTempSkill('yunjiwue');
            }
        });
    },
            },
            yunjiwu:{
                forced:true,
                popup:false,
                trigger:{
                    source:"damageBegin",
                },
                filter:function(event,player){
        return event.card&&event.card.name=='sha'&&event.notLink();
    },
                content:function(){
        trigger.num++;
        trigger._yunjiwub=true;
    },
                group:["yunjiwua"],
            },
            yunjiwua:{
                audio:"ext:云将:2",
                trigger:{
                    global:"dying",
                },
                forced:true,
                popup:false,
                filter:function(event,player){
        return event.player!=player&&event.parent._yunjiwub&&event.parent.source==player;
    },
                check:function(event,player){
        return get.attitude(player,event.player)<0;
    },
                logTarget:"player",
                content:function(){
        'step 0'
        trigger.player.die(trigger.reason);
        'step 1'
        if(!trigger.player.isAlive()){
            trigger.cancel(true);
        }
    },
            },
            yunjiwub:{
            },
            yunjiwuc:{
                forced:true,
                popup:false,
                trigger:{
                    source:"damageBegin",
                },
                filter:function(event,player){
        return event.card&&event.card.name=='juedou'&&event.notLink();
    },
                content:function(){
        trigger.num++;
        trigger._yunjiwub=true;
    },
                group:["yunjiwua"],
            },
            yunjiwud:{
                trigger:{
                    player:"useCardToPlayered",
                },
                forced:true,
                popup:false,
                filter:function(event,player){
        return event.card.name=='sha'&&!event.getParent().directHit.contains(event.target);
    },
                logTarget:"target",
                content:function(){
        'step 0'
        var next=player.chooseToDiscard('h',get.prompt('yunjiwue',trigger.player),'弃置一张手牌使伤害+1');
        next.ai=function(card){
            if(get.attitude(player,trigger.player)<0){
                return 7-get.value(card);
            }
            return 3;
        }
        next.logSkill=['yunjiwue',trigger.player];
        player.say(["别心怀侥幸了，你们不可能赢！","萤烛之火，也敢与日月争辉？"].randomGet());
        'step 1'
        if(result.bool){
        player.addTempSkill('yunjiwu', 'shaAfter'); 
            };
    },
            },
            yunjiwue:{
                audio:"ext:云将:4",
                trigger:{
                    player:"useCardToPlayered",
                },
                forced:true,
                popup:false,
                filter:function(event,player){
        return event.card.name=='juedou'&&!event.getParent().directHit.contains(event.target);
    },
                logTarget:"target",
                content:function(){
        'step 0'
        var next=player.chooseToDiscard('h',get.prompt('yunjiwue',trigger.player),'弃置一张手牌使伤害+1');
        next.ai=function(card){
            if(get.attitude(player,trigger.player)<0){
                return 7-get.value(card);
            }
            return 3;
        }
        next.logSkill=['yunjiwue',trigger.player];
        player.say(["出来单挑啊!","你有没有砍过人？有没有看过死人？"].randomGet());
        'step 1'
        if(result.bool){
        player.addTempSkill('yunjiwuc', 'juedouAfter'); 
            };
    },
                group:["yunjiwud"],
            },
            yunqixing:{
                audio:"ext:云将:2",
                trigger:{
                    player:"phaseDrawEnd",
                },
                forced:true,
                content:function(){
        'step 0'
        event.cards=get.cards(7);
        event.gains=[]
        event.discards=[]
        var content=['牌堆顶的七张牌',event.cards];
        game.log(player,'观看了','#y牌堆顶的七张牌');
        player.chooseControl('ok').set('dialog',content);
        "step 1"
        if(get.type2(event.cards[0])!="trick"){
            event.gains.push(event.cards[0]);
            event.cards.remove(event.cards[0]);
        }
        else{
            var bool=game.hasPlayer(function(current){
                return player.canUse(event.cards[0],current);
            });
            if(bool){
                player.chooseUseTarget(event.cards[0],false);
            }
            else event.discards.push(event.cards[0]);
            event.cards.remove(event.cards[0]);
        }
        "step 2"
        if(event.cards.length) event.goto(1);
        else{
            if(event.discards.length){
                player.$throw(event.discards);
                game.cardsDiscard(event.discards);
            }
        }

    },
                ai:{
                    order:7,
                    result:{
                        player:1,
                    },
                    threaten:1.5,
                },
            },
            yunbazhen:{
                audio:"ext:云将:2",
                usable:1,
                filter:function(event,player){
        return event.player!=player&&event.card&&(event.card.name=='sha'||get.type2(event.card)=='trick');
    },
                logTarget:"player",
                check:function(event,player){
        if(event.getParent().excluded.contains(player)) return false;
        if(get.tag(event.card,'respondSha')){
            if(player.countCards('h',{name:'sha'})==0){
                return true;
            }
        }
        else if(get.tag(event.card,'respondShan')){
            if(player.countCards('h',{name:'shan'})==0){
                return true;
            }
        }
        else if(event.card.name=='lebu'){
                return true;
        }
        else if(event.card.name=='bingliang'){
                return true;
        }
        return false;
    },
                trigger:{
                    target:"useCardToTargeted",
                },
                prompt:"是否发动【八阵】令此牌对你无效？",
                content:function(){
        "step 0"
        trigger.getParent().excluded.add(player);
    },
                ai:{
                    expose:0.3,
                },
            },
            yunshelve:{
                audio:"ext:云将:2",
                trigger:{
                    player:"phaseBegin",
                },
                unique:true,
                direct:true,
                filterCard:true,
                prompt:"是否发动【涉略】习得一项技能",
                createDialog:function (player,target,onlylist){
        player.say(["学习？学个屁！","多读书还是有用的嘛！"].randomGet());
        var names=[];
        var list=[];
        if(target.name&&!target.isUnseen(0)) names.add(target.name);
        if(target.name1&&!target.isUnseen(0)) names.add(target.name1);
        if(target.name2&&!target.isUnseen(1)) names.add(target.name2);
        var pss=player.getSkills();
        for(var i=0;i<names.length;i++){
            var info=lib.character[names[i]];
            if(info){
                var skills=info[3];
                for(var j=0;j<skills.length;j++){
                    if(lib.translate[skills[j]+'_info']&&lib.skill[skills[j]]&&
                        !lib.skill[skills[j]].unique&&
                        !pss.contains(skills[j])){
                        list.push(skills[j]);
                    }
                }
            }
        }
        if(onlylist) return list;
        var dialog=ui.create.dialog('forcebutton');
        dialog.add('选择获得一项技能');
        _status.event.list=list;
        var clickItem=function(){
            _status.event._result=this.link;
            if(dialog) dialog.close();
_status.imchoosing=false;
            game.resume();
        };
        for(i=0;i<list.length;i++){
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
        return dialog;
    },
                content:function (){
           'step 0'
           player.chooseTarget(get.prompt2('yunshelve'),function(card,player,target){
               var names=[];
               if(target.name&&!target.isUnseen(0)) names.add(target.name);
               if(target.name1&&!target.isUnseen(0)) names.add(target.name1);
               if(target.name2&&!target.isUnseen(1)) names.add(target.name2);
               var pss=player.getSkills();
               for(var i=0;i<names.length;i++){
                   var info=lib.character[names[i]];
                   if(info){
                       var skills=info[3];
                       for(var j=0;j<skills.length;j++){
                           if(lib.translate[skills[j]+'_info']&&lib.skill[skills[j]]&&
                               !lib.skill[skills[j]].unique&&!pss.contains(skills[j])){
                               return true;
                           }
                       }
                   }
                   return false;
               }
           }).set('ai',function(target){
               return Math.random();
           });
           'step 1'
           if(result.bool){
               event.target=result.targets[0];
               player.logSkill('yunshelve',event.target);
           }
           else{
               event.finish();
           }
           'step 2'
           event.skillai=function(list){
               return get.max(list,get.skillRank,'item');
           };
           if(event.isMine()){
               event.dialog=lib.skill.yunshelve.createDialog(player,target);
               event.switchToAuto=function(){
                   event._result=event.skillai(event.list);
                   event.dialog.close();
                _status.imchoosing=false;
                   game.resume();
               };
               _status.imchoosing=true;
               game.pause();
           }
           else if(event.isOnline()){
               event.player.send(function(){
                   var event=_status.event;
                   event.skillai=function(list){
                       return get.max(list,get.skillRank,'item');
                   };
                   event.dialog=lib.skill.yunshelve.createDialog(player,target);
                event.switchToAuto=function(){
                    event._result=event.skillai(event.list);
                    event.dialog.close();
                    _status.imchoosing=false;
                    game.resume();
                };
                _status.imchoosing=true;
                game.pause();
               })
                        event.player.wait();
                        game.pause();
           }
           else{
               event._result=event.skillai(lib.skill.yunshelve.createDialog(player,target,true));
           }
           'step 3'
           player.addTempSkill(result,{ player: 'phaseBefore' });
           player.popup(result);
           game.log(player,'获得了','【'+get.translation(result)+'】');
       },
            },
            yunbotu:{
                audio:"ext:云将:4",
                trigger:{
                    player:"useCard",
                },
                filter:function(event){
        return (get.type(event.card,'trick')=='trick'&&event.card.isCard);
    },
                forced:true,
                content:function(){ 
        'step 0' 
        var card=get.cardPile(function(card){ 
            return get.type(card)=='equip'; 
        }); 
        event.card=card; 
        'step 1' 
        if(event.card){ 
            player.gain(event.card); 
        } 
    },
            },
            yunkeji:{
                audio:"ext:云将:2",
                trigger:{
                    player:"damageBefore",
                },
                priority:-10,
                filter:function(event,player){
        return player.countCards('he',{type:'equip'});
    },
                prompt:"是否发动【克己】？",
                direct:true,
                content:function(){
        "step 0"
        var next=player.chooseToDiscard('he','是否弃置一张装备牌抵消伤害？',function(card,player){
            return get.type(card)=='equip';
        });
        next.logSkill='yunkeji';
        next.ai=function(card){
            if(player.hp==1||trigger.num>1){
                return 9-get.value(card);
            }
            if(player.hp==2){
                return 8-get.value(card);
            }
            if(player.hp==3){
                return 7-get.value(card);
            }
            return 6-get.value(card);
        };
        "step 1"
        if(result.bool){
            player.draw();
            game.delay();
            trigger.cancel();
        }
    },
                ai:{
                    order:6,
                    threaten:3,
                },
            },
            yunduorui:{
                audio:"ext:云将:2",
                trigger:{
                    source:"damage",
                },
                filter:function(event,player){
        if(event.player.hasSkill('yunduoruia')) return false;
        if(event._notrigger.contains(event.player)) return false;
        return event.player.isAlive()&&event.card&&player!=event.player;
    },
                check:function(event,player){
        if(get.attitude(player,event.player)>0) return false;
    },
                logTarget:"player",
                prompt:"是否发动【夺锐】令目标全部技能失效？",
                content:function(){
        "step 0"
        trigger.player.addSkill('yunsangdan');
        "step 1"
        trigger.player.addTempSkill('yunduoruia',{player:'phaseAfter'});
        player.say(["随我搏杀！汝等妻子曹公养之！","今日，定让敌军丧胆！"].randomGet()); 
    },
                "audioname2":{
                    "key_shiki":"shiki_omusubi",
                },
            },
            yunduoruia:{
                init:function(player,skill){
        player.addSkillBlocker(skill);
    },
                onremove:function(player,skill){
        player.removeSkillBlocker(skill);
    },
                charlotte:true,
                skillBlocker:function(skill,player){
        return !lib.skill[skill].charlotte;
    },
                mark:true,
                intro:{
                    content:function(storage,player,skill){
            var list=player.getSkills(null,false,false).filter(function(i){
                return lib.skill.baiban.skillBlocker(i,player);
            });
            if(list.length) return '武将技能已失效';
            return '无失效技能';
        },
                },
            },
            yunzhiti:{
                audio:"ext:云将:3",
                mark:true,
                marktext:"止啼",
                intro:{
                    content:function (storage,player){
            var num=game.countPlayer(function(current){
                return current.isDamaged();
            })
            var str='未发动';
            if(num>=1){
                str='<li>摸牌数加一，使用杀次数加一，手牌上限加一，计算与其他角色距离减一，其他角色计算与你距离加一';
            }
            if(num>=2){
                str+='<li>每名已【丧胆】的角色一回合一次，其摸牌阶段外获得牌后你可获得其一张手牌';
            }
            if(num>=3){
            str+='<li>已受伤的其他角色手牌上限减半（向上取整）并废除已受伤的【丧胆】角色装备栏';
            }
            return str;
        },
                },
                trigger:{
                    player:"phaseDrawBegin",
                },
                forced:true,
                filter:function (event,player){
        var num=game.countPlayer(function(current){
            return current.isDamaged();
        });
        return num>=1;
    },
                content:function (){
        trigger.num+=Math.min(game.countPlayer(function(current){
                return current.isDamaged();
            }),1);
    },
                mod:{
                    maxHandcard:function(player,num){
            return num+Math.min(game.countPlayer(function(current){
                return current.isDamaged();
            }),1);
        },
                    cardUsable:function(card,player,num){
            if(card.name=='sha') return num+Math.min(game.countPlayer(function(current){
                return current.isDamaged();
            }),1);
        },
                },
                global:"yunzhiti_sx",
                group:"yunzhiti_np",
                subSkill:{
                    np:{
                        audio:"ext:云将:3",
                        trigger:{
                            global:"gainAfter",
                        },
                        check:function(event,player){
                return ai.get.attitude(player,event.player)<=0;
    },
                        filter:function (event,player){
                if(event.parent.parent.name=='phaseDraw') return false;
                if(event.player.hasSkill('yunzhiti_off')) return false;
                if(!event.player.hasSkill('yunsangdan')) return false;
                if(event.player==player) return false;
                if(event.player.countCards('he')<1) return false;
                var num=game.countPlayer(function(current){
                    return current.isDamaged();
        });
                return num>=2;
    },
                        popup:false,
                        prompt:function(event,player){
                var str="是否获得"+get.translation(event.player)+"一张牌？";
                return str;
    },
                        content:function(){
                player.logSkill('yunzhiti_np',trigger.player);
                trigger.player.addTempSkill('yunzhiti_off');
                player.gainPlayerCard(trigger.player,'he',true);
    },
                        ai:{
                            expose:0.5,
                        },
                        sub:true,
                    },
                },
            },
            "yunzhiti_sx":{
                mod:{
                    maxHandcardBase:function(player,num){
            var num1=game.countPlayer(function(current){
                return current.isDamaged();
            })
            if(num1>=3&&game.countPlayer(function(current){
                return current!=player&&current.hasSkill('yunzhiti');
            })&&player.isDamaged()){
                return num-Math.ceil(num/2);
                }
        },
                },
            },
            "yunzhiti_off":{
                charlotte:true,
            },
            yunsangdan:{
                trigger:{
                    global:["changeHp","damageEnd","loseHpEnd","gainMaxHpEnd"],
                },
                forced:true,
                popup:false,
                charlotte:true,
                mark:true,
                marktext:"丧胆",
                intro:{
                    name:"丧胆",
                    content:"李典：想让爷跟你配合？爷就算死也不会听你的!<br>乐进：没错！凭啥要听你的?劳资死也不服你！<br>张辽：丞相来信，说让你俩只管大胆的干，他想帮你俩养老婆孩子很久了。<br>李典、乐进：辽哥你下命令吧，你说咋干就咋干。",
                },
                filter:function (event,player){
        var num=game.countPlayer(function(current){
            return current.isDamaged();
        });
    return num>=3&&player.isDamaged();
    },
                content:function(){
        player.disableEquip('equip1');
        player.disableEquip('equip2');
        player.disableEquip('equip3');
        player.disableEquip('equip4');
        player.disableEquip('equip5');
    },
                group:["yunsangdana"],
            },
            yunsangdana:{
                trigger:{
                    global:["changeHp","dieAfter","loseMaxHpAfter","recoverAfter"],
                },
                forced:true,
                popup:false,
                charlotte:true,
                filter:function (event,player){
        var num=game.countPlayer(function(current){
            return current.isDamaged();
        });
    return num<3||!player.isDamaged();
    },
                content:function(){
        player.enableEquip(1);
        player.enableEquip(2);
        player.enableEquip(3);
        player.enableEquip(4);
        player.enableEquip(5);
    },
            },
            yunjieyin:{
                audio:"ext:云将:2",
                skillAnimation:true,
                animationColor:"water",
                unique:true,
                limited:true,
                enable:"phaseUse",
                derivation:"yunqingyuan",
                prompt:"是否选择一名角色与其结为情缘？",
                selectTarget:1,
                forced:true,
                filterTarget:function(card,player,target){
        return target!=player&&!target.hasSkill('yunqingyuana');
    },
                content:function (){
        'step 0'
        player.awakenSkill('yunjieyin');
        'step 1'
        game.log(target,'成为了','【结姻】','的目标');
        player.say(["从现在开始，你就是我的人了！","我们立刻开始这段感情吧！"].randomGet());
        target.storage.yunqingyuan=player;
        target.addSkill('yunqingyuan');
        player.addSkill('yunqingyuana');
    },
                mark:true,
                intro:{
                    content:"limited",
                },
                init:function(player,skill){
        player.storage[skill]=false;
    },
                ai:{
                    order:10,
                    expose:1,
                    result:{
                        target:10,
                    },
                },
            },
            yunqingyuan:{
                audio:"ext:云将:3",
                trigger:{
                    player:"phaseDrawBegin2",
                },
                mark:true,
                marktext:"情缘",
                intro:{
                    name:"情缘",
                    content:"愿得一心人 白首不相离",
                },
                forced:true,
                filter:function(event,player){
        return !event.numFixed;
    },
                content:function(){
        trigger.num++;
    },
                ai:{
                    threaten:1.5,
                },
            },
            yunqingyuana:{
                mark:true,
                marktext:"情缘",
                intro:{
                    name:"情缘",
                    content:"愿得一心人 白首不相离",
                },
                group:["yunqingyuana_a","yunqingyuana_b"],
                ai:{
                    threaten:1.5,
                },
                subSkill:{
                    a:{
                        trigger:{
                            player:"drawEnd",
                        },
                        popup:false,
                        forced:true,
                        content:function (){
        game.countPlayer(function(current){
            if(current!=player&&current.hasSkill('yunqingyuan')){
                player.line(current,'green');
                current.draw();
            }
        });
    },
                        sub:true,
                    },
                    b:{
                        trigger:{
                            player:"recoverEnd",
                        },
                        popup:false,
                        forced:true,
                        content:function (){
        game.countPlayer(function(current){
            if(current!=player&&current.hasSkill('yunqingyuan')){
                player.line(current,'green');
                current.recover();
            }
        });
    },
                        sub:true,
                    },
                },
            },
            yunxiaoji:{
                audio:"ext:云将:2",
                trigger:{
                    player:"phaseDrawBegin",
                },
                forced:true,
                content:function (){
        'step 0' 
        var list=get.inpile('equip');
        list=list.randomGets(5);
        for(var i=0;i<list.length;i++){
            list[i]=['装备','',list[i]];
        }
        var dialog=ui.create.dialog('选择一张装备牌加入你的手牌',[list,'vcard'],'hidden');
        player.chooseButton(dialog,true).set('ai',function(button){
            var card={name:button.link[2]};
            var value=get.value(card);
            return value;
        });
        'step 1'
        if(result.bool){
            player.gain(game.createCard(result.buttons[0].link[2]),'draw');
        }
    },
                group:["yunxiaoji_a","yunxiaoji_b","yunxiaoji_c","yunxiaoji_d","yunxiaoji_e"],
                ai:{
                    reverseEquip:true,
                    effect:{
                        target:function (card,player,target,current){
                if(player==target&&get.type(card)=='equip') return [1,3];
            },
                    },
                },
                subSkill:{
                    a:{
                        audio:"ext:云将:2",
                        trigger:{
                            player:"equipEnd",
                        },
                        forced:true,
                        filter:function(event,player){
        return get.subtype(event.card)=='equip1';
    },
                        content:function(){
        player.draw(2);
        game.broadcastAll()+player.node.avatar.setBackgroundImage('extension/云将/yunsunshangxiang.jpg');
    },
                        sub:true,
                    },
                    b:{
                        audio:"ext:云将:1",
                        trigger:{
                            player:"equipEnd",
                        },
                        forced:true,
                        filter:function(event,player){
        return get.subtype(event.card)=='equip2';
    },
                        content:function(){
        player.recover();
        game.broadcastAll()+player.node.avatar.setBackgroundImage('extension/云将/yunsunshangxiang1.jpg');
    },
                        sub:true,
                    },
                    c:{
                        audio:"ext:云将:1",
                        trigger:{
                            player:"equipEnd",
                        },
                        forced:true,
                        nodelay:true,
                        filter:function(event,player){
        return get.subtype(event.card)=='equip3';
    },
                        content:function () {
        'step 0'
        var list=get.inpile('trick');
        list=list.randomGets(3);
        for(var i=0;i<list.length;i++){
            list[i]=['锦囊','',list[i]];
        }
        var dialog=ui.create.dialog('选择一张锦囊牌加入你的手牌',[list,'vcard'],'hidden');
        player.chooseButton(dialog,true).set('ai',function(button){
            var card={name:button.link[2]};
            var value=get.value(card);
            return value;
        });
        'step 1'
        if(result.bool){
            player.gain(game.createCard(result.buttons[0].link[2]),'draw');
            game.broadcastAll()+player.node.avatar.setBackgroundImage('extension/云将/yunsunshangxiang2.jpg');
        }
        
    },
                        sub:true,
                    },
                    d:{
                        audio:"ext:云将:1",
                        trigger:{
                            player:"equipEnd",
                        },
                        forced:true,
                        nodelay:true,
                        filter:function(event,player){
        return get.subtype(event.card)=='equip4';
    },
                        content:function () {
        'step 0'
        var list=get.inpile('basic');
        list=list.randomGets(3);
        for(var i=0;i<list.length;i++){
            list[i]=['基本','',list[i]];
        }
        var dialog=ui.create.dialog('选择一张基本牌加入你的手牌',[list,'vcard'],'hidden');
        player.chooseButton(dialog,true).set('ai',function(button){
            var card={name:button.link[2]};
            var value=get.value(card);
            return value;
        });
        'step 1'
        if(result.bool){
            player.gain(game.createCard(result.buttons[0].link[2]),'draw');
        }
        game.broadcastAll()+player.node.avatar.setBackgroundImage('extension/云将/yunsunshangxiang3.jpg');
    },
                        sub:true,
                    },
                    e:{
                        audio:"ext:云将:1",
                        trigger:{
                            player:"equipEnd",
                        },
                        forced:true,
                        nodelay:true,
                        filter:function(event,player){
        return get.subtype(event.card)=='equip5';
    },
                        content:function () {
        'step 0'
        var list=get.inpile('equip');
        list=list.randomGets(3);
        for(var i=0;i<list.length;i++){
            list[i]=['装备','',list[i]];
        }
        var dialog=ui.create.dialog('选择一张装备牌加入你的手牌',[list,'vcard'],'hidden');
        player.chooseButton(dialog,true).set('ai',function(button){
            var card={name:button.link[2]};
            var value=get.value(card);
            return value;
        });
        'step 1'
        if(result.bool){
            player.gain(game.createCard(result.buttons[0].link[2]),'draw');
        }
        game.broadcastAll()+player.node.avatar.setBackgroundImage('extension/云将/yunsunshangxiang4.jpg');
    },
                        sub:true,
                    },
                },
            },
            yunshangce:{
                audio:"ext:云将:2",
                trigger:{
                    player:"shaBegin",
                },
                forced:true,
                mark:true,
                marktext:"上策",
                intro:{
                    name:"上策",
                    content:"你使用的【杀】无视距离，不可闪避",
                },
                content:function(){
        trigger.directHit=true;
    },
                mod:{
                    targetInRange:function(card){
            if(card.name=='sha') return true;
        },
                },
            },
            yunzhongce:{
                audio:"ext:云将:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function(card,player,target){
        return target!=player&&target.countCards('hej');
    },
                mark:true,
                marktext:"中策",
                intro:{
                    name:"中策",
                    content:"出牌阶段限一次：可以弃置一名角色区域内一张牌",
                },
                prompt:"选择【中策】弃置牌的目标",
                content:function(){
        player.discardPlayerCard(target,'hej',true);
    },
                ai:{
                    basic:{
                        order:9,
                        useful:1,
                        value:5,
                    },
                    result:{
                        target:function(player,target){
                var att=get.attitude(player,target);
                var nh=target.countCards('h');
                if(att>0){
                    var js=target.getCards('j');
                    if(js.length){
                        var jj=js[0].viewAs?{name:js[0].viewAs}:js[0];
                        if(jj.name=='guohe'||js.length>1||get.effect(target,jj,target,player)<0){
                            return 3;
                        }
                    }
                    if(target.getEquip('baiyin')&&target.isDamaged()&&
                        get.recoverEffect(target,player,player)>0){
                        if(target.hp==1&&!target.hujia) return 1.6;
                        if(target.hp==2) return 0.01;
                        return 0;
                    }
                }
                var es=target.getCards('e');
                var noe=(es.length==0||target.hasSkillTag('noe'));
                var noe2=(es.filter(function(esx){
                    return get.value(esx,target)>0;
                }).length==0);
                var noh=(nh==0||target.hasSkillTag('noh'));
                if(noh&&(noe||noe2)) return 0;
                if(att<=0&&!target.countCards('he')) return 1.5;
                return -1.5;
            },
                    },
                    tag:{
                        loseCard:1,
                        discard:1,
                    },
                },
            },
            yunxiace:{
                audio:"ext:云将:2",
                mark:true,
                marktext:"下策",
                intro:{
                    name:"下策",
                    content:"回合结束阶段将手牌摸至五张",
                },
                frequent:true,
                trigger:{
                    player:"phaseJieshuBegin",
                },
                content:function(){
        player.draw(5-player.countCards('h'));
    },
            },
            yunxiance:{
                trigger:{
                    global:"phaseZhunbeiBegin",
                },
                audio:"ext:云将:2",
                filter:function(event,player){
        return player.countCards('he')>0;
    },
                check:function (event,player){
        return event.player.identity!='nei'&&get.attitude(player,event.player)>0;
    },
                prompt:"是否发动【献策】？",
                content:function (){
        "step 0"
      player.chooseToDiscard('he','请弃置一张牌发动【献策】',true).set('ai',function(card){
            if(get.attitude(player,trigger.target)>0) return true;
            return 6 - ai.get.value(card);
        });
        "step 1"
        if(result.bool){
        trigger.player.chooseControl('上策','中策','下策').set('ai',function(){
return ["上策","中策","下策"].randomGet();
});
            }
        "step 2"
        if(result.control=='上策'){
            trigger.player.addTempSkill('yunshangce','phaseEnd');
        }
        if(result.control=='中策'){
            trigger.player.addTempSkill('yunzhongce','phaseEnd');
        }
        if(result.control=='下策'){
            trigger.player.addTempSkill('yunxiace','phaseEnd');
        }
    },
                ai:{
                    expose:0.5,
                    threaten:0.5,
                },
                "audioname2":{
                    "old_yuanshu":"weidi",
                },
            },
            yunfengming:{
                skillAnimation:true,
                animationColor:"thunder",
                unique:true,
                juexingji:true,
                audio:"ext:云将:2",
                trigger:{
                    player:"dying",
                },
                forced:true,
                derivation:"yunniepan",
                content:function(){
        'step 0'
        player.maxHp=1;
        player.recover(player.maxHp-player.hp);
        player.addSkill('yunniepan');
        player.storage.kunfen=true;
        player.removeSkill('yunxiance');
        player.awakenSkill('yunfengming');
    'step 1'
        player.say(["落凤坡？！","大业未成，我岂能就此而亡!"].randomGet());
        game.broadcastAll()+player.node.avatar.setBackgroundImage('extension/云将/yunpangtong1.jpg');
    },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    order:6,
                },
            },
            yunzongyu:{
                audio:"ext:云将:1",
                unique:true,
                zhuSkill:true,
                limited:true,
                selectTarget:1,
                filterTarget:function(card,player,target){
        return target!=player;
    },
                derivation:"yunweiwua",
                mark:false,
                init:function(player){
    player.storage.yunzongyu=false;
},
                skillAnimation:true,
                filter:function(event,player){
        return player.hasZhuSkill('yunzongyu');
        return player.storage.yunzongyu==false;
},
                enable:"phaseUse",
                prompt:"选择一名角色令其修改势力为『魏』",
                content:function(){
    "step 0"
    player.storage.yunzongyu=true;
    player.awakenSkill("yunzongyu");
    "step 1"
    game.log(target,'成为了','【总御】','的目标');
    player.say(["扫清六合，席卷八荒！","若是无孤，天下不知几人称王，几人称帝！"].randomGet());
    target.draw(2);
    target.gainMaxHp();
    target.changeGroup('wei');
    player.addSkill('yunweiwua');
},
                ai:{
                    order:7,
                    result:{
                        target:10,
                    },
                },
                intro:{
                    content:"limited",
                },
            },
            yunweiwua:{
                audio:"ext:云将:2",
                unique:true,
                check:function (event,player){
        return event.player.identity!='nei'&&get.attitude(player,event.player)>0;
    },
                group:["yunweiwub"],
            },
            yunweiwub:{
                trigger:{
                    player:"phaseEnd",
                },
                check:function (event,player){
        return event.player.identity!='nei'&&get.attitude(player,event.player)>0;
    },
                filter:function (event, player) {
        for (var i=0;i<game.players.length;i++)
        if (game.players[i]!=player&&game.players[i].group=='wei'&&game.players[i].hp<=player.hp) return true;
        return false;
    },
                direct:true,
                prompt:"选择一名角色令其恢复一点体力",
                content:function () {
        'step 0'
        player.chooseTarget('是否发动【魏武】？', [1], function (card, player, target) {
            return player!=target&&target.hp<target.maxHp&&target.hp<=player.hp&&target.group=='wei';
        })
        'step 1'
        if (result.bool) {
            player.logSkill('yunweiwua', result.targets);
            event.targets = result.targets;
            event.targets.sort(lib.sort.seat);
        }
        else {
            event.finish();
        }
        'step 2'
        if (event.targets.length) {
            var target = event.targets.shift();
            target.recover();
        }
    },
            },
            yunxieling:{
                audio:"ext:云将:2",
                skillAnimation:true,
                unique:true,
                limited:true,
                enable:"phaseUse",
                mark:true,
                intro:{
                    content:"limited",
                },
                init:function(player,skill){
        player.storage[skill]=false;
    },
                filter:function(event,player){
        return Math.ceil(game.players.length>2);
    },
                filterTarget:function(card,player,target){ 
        return target.hp>player.hp&&player.canCompare(target); 
    },
                prompt:"请选择【挟令】的目标",
                content:function(){
        "step 0" 
        player.awakenSkill('yunxieling'); 
        player.storage.seyou=true; 
        event.targets=game.filterPlayer(); 
        event.targets.remove(player); 
        event.targets.remove(target); 
        "step 1" 
        if(event.targets.length){ 
            event.current=event.targets.shift(); 
            if(event.current.countCards('he')&&target.isAlive()){ 
                event.current.chooseToUse({name:'sha'},target,-1); 
            } 
        } 
        else{ 
            event.finish(); 
        } 
        "step 2" 
        if(result.bool==false){ 
        player.gainPlayerCard(event.current,true,'he'); 
        } 
        event.goto(1); 
    },
                ai:{
                    order:5,
                    fireAttack:true,
                    result:{
                        target:function(player,target){
                if(target.hasSkillTag('nofire')) return 0;
                if(lib.config.mode=='versus') return -1;
                if(player.hasUnknown()) return 0;
                return get.damageEffect(target,player);
            },
                    },
                },
            },
            yunxiongcai:{
                audio:"ext:云将:1",
                trigger:{
                    global:"gameStart",
                },
                fixed:true,
                unique:true,
                forced:true,
                prompt:"请选择获得一个技能",
                content:function(){
        "step 0"
        player.chooseControl('雄略','归心').set('ai',function(){
return ["雄略","归心"].randomGet();
});
        "step 1"
        if(result.control=='雄略'){
            player.addSkill('yunxionglve');
        }
        if(result.control=='归心'){
            player.addSkill('yunguixin');
        }
     },
                ai:{
                    order:10,
                    result:{
                        target:10,
                    },
                },
            },
            yunguixin:{
                audio:"ext:云将:2",
                trigger:{
                    player:"shaBefore",
                },
                forced:true,
                popup:false,
                unique:true,
                mark:true,
                marktext:"归心",
                intro:{
                    name:"奸雄·归心",
                    content:true,
                },
                check:function(event,player){ 
        return get.attitude(player,trigger.target)<0;
    },
                filter:function (event, player) {
        return event.target.countCards('he')>0&&event.target!=player&&player.countCards('h')>0;
    },
                content:function(){
        "step 0"
        player.chooseToDiscard('h',get.prompt('yunguixin',trigger.target),'是否弃置一张手牌发动【归心】').set('ai',function(card){
            if(get.attitude(player,trigger.target)<0) return true;
            return 7 - ai.get.value(card);
        });
        "step 1"
        player.logSkill('yunguixin',event.targets);
        if (result.bool) {
            if(player.countCards('h')<player.maxHp){
            player.draw();
        }
            player.addSkill('yunxionglve');
            player.restoreSkill('yunxionglve');
            player.removeSkill('yunguixin');
            player.gainPlayerCard(trigger.target,'he',true);
            };
    },
                group:["yunguixin_gx"],
                subSkill:{
                    gx:{
                        audio:"ext:云将:2",
                        trigger:{
                            target:"shaBefore",
                        },
                        forced:true,
                        popup:false,
                        filter:function (event, player) {
        return event.player.countCards('he')>0&&player.countCards('h')>0;
    },
                        check:function(event,player){ 
        return get.attitude(player,event.source)<0; 
    },
                        content:function(){
        "step 0"
        player.chooseToDiscard('h',get.prompt('yunguixin_gx',trigger.player),'是否弃置一张牌发动【归心】').set('ai',function(card){
            if(get.attitude(player,event.source)<0) return true;
            return 7 - ai.get.value(card);
        });
        "step 1"
        player.logSkill('yunguixin_gx',event.targets);
        if (result.bool) {
            if(player.countCards('h')<player.maxHp){
            player.draw();
        }
            player.addSkill('yunxionglve');
            player.restoreSkill('yunxionglve');
            player.removeSkill('yunguixin');
            player.gainPlayerCard(trigger.player,'he',true);
            };
    },
                        sub:true,
                    },
                },
            },
            yunxionglve:{
                audio:"ext:云将:2",
                enable:"phaseUse",
                filter:function(event,player){
        return player.countCards('h')>0;
    },
                check:function(card){
        return 7-get.value(card);
    },
                derivation:"yunguixin",
                filterCard:true,
                selectCard:1,
                position:"h",
                mark:true,
                unique:true,
                marktext:"雄略",
                intro:{
                    name:"奸雄·雄略",
                    content:true,
                },
                prompt:"是否弃置一张牌发动【雄略】？",
                content:function(){
        'step 0'
        if(player.countCards('h')<player.maxHp){
            player.draw();
            };
        var list=get.inpile('trick');
        list=list.randomGets(3);
        for(var i=0;i<list.length;i++){
            list[i]=['锦囊','',list[i]];
        }
        var dialog=ui.create.dialog('选择一张锦囊牌加入你的手牌',[list,'vcard'],'hidden');
        player.chooseButton(dialog,true).set('ai',function(button){
            var card={name:button.link[2]};
            var value=get.value(card);
            return value;
        });
        'step 1'
        if(result.bool){
            player.gain(game.createCard(result.buttons[0].link[2]),'draw');
        }
        'step 2'
        player.addSkill('yunguixin');
        player.awakenSkill('yunxionglve');
    },
                ai:{
                    order:10,
                    threaten:3,
                    result:{
                        player:7,
                    },
                },
            },
            yunguayin:{
                skillAnimation:true,
                unique:true,
                juexingji:true,
                audio:"ext:云将:2",
                derivation:["yunyijueb","yunwusheng"],
                trigger:{
                    global:"dieEnd",
                },
                forced:true,
                filter:function(event,player){
        return player.getAllHistory('sourceDamage',function(target){
            return target.player==event.player;
        }).length>0;
    },
                content:function(){
        'step 0'
        player.changeGroup('shu');
        player.awakenSkill('yunguayin');
        player.removeSkill('yunyangwei');
        player.removeSkill('yunyijue');
        'step 1'
        player.addSkill('yunyijueb');
        player.addSkill('yunyangwei');
        player.addSkill('yunwusheng');
        game.broadcastAll()+player.node.avatar.setBackgroundImage('extension/云将/yunguanyu1.jpg');
    },
                ai:{
                    order:6,
                },
            },
            yunyijue:{
                audio:"ext:云将:3",
                trigger:{
                    player:"useCardToPlayered",
                },
                filter:function(event){
        return event.card&&event.card.name=='sha'&&event.notLink();
    },
                prompt:"选是否发动【义绝】？",
                check:function (event,player){
        return get.attitude(player,event.player)>0;
    },
                logTarget:"target",
                content:function(){
        "step 0"
        player.draw();
        "step 1"
        trigger.target.hp=1;
        "step 2"
        trigger.target.addSkill('yunyijuec');
        trigger.target.addTempSkill('yunyijuea');
        
    },
                "audioname2":{
                    "key_shiki":"yunshenzi",
                },
                ai:{
                    effect:{
                        player:function(card,player,target){
                if(card.name=='sha'&&get.color(card)=='red') return [1,1];
            },
                    },
                },
            },
            yunyijuea:{
                audio:"ext:云将:3",
                trigger:{
                    global:"phaseEnd",
                },
                forced:true,
                charlotte:true,
                content:function(){
        player.recover(player.maxHp-player.hp);
    },
            },
            yunyijueb:{
                audio:"ext:云将:3",
                trigger:{
                    player:"useCardToPlayered",
                },
                filter:function(event){
        return event.card&&event.card.name=='sha'&&event.notLink();
    },
                forced:true,
                logTarget:"target",
                content:function(){
        "step 0"
        trigger.target.hp=1;
        "step 1"
        trigger.target.addSkill('yunyijuec');
        trigger.target.addTempSkill('yunyijuea');
        
    },
                "audioname2":{
                    "key_shiki":"yunshenzi",
                },
                ai:{
                    ai:{
                        jueqing:true,
                    },
                    effect:{
                        player:function(card,player,target){
                if(card.name=='sha'&&get.color(card)=='red') return [1,1];
            },
                    },
                },
            },
            yunyijuec:{
                charlotte:true,
            },
            yunyangwei:{
                audio:"ext:云将:2",
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                filter:function(event){
        return event.card&&event.card.name=='sha'&&get.color(event.card)=='red'&&event.notLink();
    },
                content:function(){
        player.say(["观尔等如插标卖首尔！","酒温否？"].randomGet());
        trigger.num++;
    },
                mod:{
                    cardname:function(card,player,name){ 
            if(get.tag({name:name},'damage')) return 'sha'; 
        },
                    cardUsableTarget:function(card,player,target){ 
            if(card.name=='sha'&&get.color(card)=='black'&&!target.hasSkill('yunyijuec')&&player.inRange(target)) return true; 
        },
                },
                ai:{
                    effect:{
                        player:function(card,player,target){ 
                if(card.name=='sha'&&get.color(card)=='red') return [1,1]; 
            },
                    },
                },
            },
            yunwusheng:{
                audio:"ext:云将:2",
                mark:true,
                marktext:"傲",
                unique:true,
                init:function (player){
        player.storage.yunwusheng=1;
        player.markSkill('yunwusheng');
        player.syncStorage('yunwusheng');
    },
                intro:{
                    content:"手牌上限加#<br>计算与其他角色的距离减#<br>其他角色计算与你的距离为#<br>摸牌阶段额外摸#张牌",
                },
                trigger:{
                    source:"dieAfter",
                },
                filter:function (event, player) {
        if(player.storage.yunwusheng>=player.maxHp) return false;
        return true;
    },
                forced:true,
                content:function (){
        player.storage.yunwusheng+=1;
        player.loseMaxHp();
        player.markSkill('yunwusheng');
        player.syncStorage('yunwusheng');
    },
                mod:{
                    globalFrom:function(from,to,distance){
            if(from.storage.yunwusheng){
                var num=distance-from.storage.yunwusheng;
                return num;
            }
        },
                    maxHandcardBase:function(player,num){
            return num+player.storage.yunwusheng;
        },
                    globalTo:function(from,to,distance){
            if(from!=to&&to.storage.yunwusheng) 
                return distance=to.storage.yunwusheng;
        },
                },
                group:["yunwusheng_a"],
                subSkill:{
                    a:{
                        audio:"ext:云将:2",
                        trigger:{
                            player:"phaseDrawBegin",
                        },
                        forced:true,
                        content:function(){
        var mps=player.storage.yunwusheng;
        trigger.num+=mps;
    },
                        ai:{
                            threaten:1.3,
                        },
                        sub:true,
                    },
                },
            },
            yunqieting:{
                audio:"ext:云将:2",
                trigger:{
                    global:"useCard",
                },
                usable:1,
                forced:true,
                direct:true,
                filter:function (event, player) {
        return event.player != player && player.inRange(event.player) && event.player.countCards('he')>0;
    },
                prompt:function(event,player){
        var str="选择获得"+get.translation(event.player)+"一张牌？";
        return str;
    },
                content:function(){
        player.logSkill('yunqieting',trigger.player);
        player.gainPlayerCard(trigger.player,'he',true);
    },
                sub:true,
            },
            yunxianzhou:{
                audio:"ext:云将:2",
                trigger:{
                    player:"damageAfter",
                },
                forced:true,
                filter:function (event, player) {
        return player.countCards('h') > 0;
    },
                filterTarget:function(card,player,target){
        return player!=target;
    },
                content:function () {
        "step 0"
        player.chooseTarget('将所有手牌交给一名角色',true, function(card,player,target){
            return target!=player;
        }).ai = function (target) {
            return get.attitude(player, target);
        }
        player.say(["刘氏无德，当献曹公。","还望曹公庇护！"].randomGet());
        "step 1"
        if (result.bool) {
            player.$giveAuto(player.getCards('h').length, result.targets[0]);
            var cards = player.getCards('h');
            player.lose(cards, ui.special);
            result.targets[0].gain(cards);
            var skills = [];
            for (var i in lib.character) {
                for (var j = 0; j < lib.character[i][3].length; j++) {
                    var info = lib.skill[lib.character[i][3][j]];
                    if (info && (info.gainable || !info.unique) && !info.zhuSkill) {
                        skills.add(lib.character[i][3][j]);
                    }
                }
            }
            game.broadcastAll()+player.node.avatar.setBackgroundImage('extension/云将/yuncaishi1.jpg');
    }
    },
                group:["yunxianzhou_hf"],
                ai:{
                    order:6,
                    threaten:3,
                },
                subSkill:{
                    hf:{
                        trigger:{
                            player:"recoverBegin",
                        },
                        forced:true,
                        popup:false,
                        content:function () {
        game.broadcastAll()+player.node.avatar.setBackgroundImage('extension/云将/yuncaishi.jpg');
    },
                        sub:true,
                    },
                },
            },
            yunshangshi:{
                audio:"ext:云将:9",
                trigger:{
                    player:"loseAfter",
                    global:"loseHpAfter",
                },
                forced:true,
                filter:function(event,player){
        return player.countCards('h')<player.storage.yunjueqing;
    },
                content:function(){
        var num=player.storage.yunjueqing;
        player.draw(num-player.countCards('h'));
    },
                group:["yunshangshi_a"],
                ai:{
                    noh:true,
                    skillTagFilter:function(player,tag){
            if(tag=='noh'&&player.storage.yunjueqing<player.countCards('h')){
                return false;
            }
        },
                },
                subSkill:{
                    a:{
                        audio:"ext:云将:9",
                        trigger:{
                            global:"dieAfter",
                        },
                        forced:true,
                        filter:function(event,player){
        return player==_status.currentPhase;
    },
                        content:function (){
        player.removeMark('yunjueqing',Infinity);
        player.markSkill('yunjueqing');
        player.syncStorage('yunjueqing');
    },
                        sub:true,
                    },
                },
            },
            yunjueqing:{
                audio:"ext:云将:2",
                mark:true,
                marktext:"恨",
                init:function (player){
        player.storage.yunjueqing=0;
        player.markSkill('yunjueqing');
        player.syncStorage('yunjueqing');
    },
                intro:{
                    content:"mark",
                },
                trigger:{
                    global:"loseHpBegin",
                },
                forced:true,
                filter:function (event, player) {
        var num=(player.maxHp);
        if(player.storage.yunjueqing>=num)   return false;
        return true;
    },
                content:function (){
        player.storage.yunjueqing+=1;
        player.markSkill('yunjueqing');
        player.syncStorage('yunjueqing');
    },
                group:["yunjueqing_a"],
                subSkill:{
                    a:{
                        trigger:{
                            player:"damageBegin",
                            source:"damageBegin",
                        },
                        popup:false,
                        forced:true,
                        content:function(){
        trigger.cancel();
        trigger.player.loseHp(trigger.num);
    },
                        ai:{
                            jueqing:true,
                        },
                        sub:true,
                    },
                },
            },
            yunjuekou:{
                audio:"ext:云将:3",
                trigger:{
                    global:"damageAfter",
                },
                usable:1,
                filterCard:true,
                position:"h",
                filter:function (event, player) {
        return event.card && event.source && event.source.isAlive();
    },
                check:function (event, player) {
        return ai.get.attitude(player, event.source) < 0;
        return 0;
    },
                prompt:function (event, player) {
        var str = '';
        str += '是否对' + get.translation(event.source) + '发动【绝口】令其流失一点体力？'
        return str;
    },
                content:function () {
        'step 0'
        player.say(["只有死人才会永远保密！","只怪你看到了不该看的！听到了不该听的！"].randomGet());
        var num=player.storage.yunjueqing;
        player.chooseToDiscard([0,num], 'he').set('ai',function(card){
            return 6 - ai.get.value(card);
            if(card.name=='zhuge') return -10; 
            return get.attitude(player,event.player)>0;
        });
        'step 1'
        if(result.bool){
        player.line(trigger.source);
        trigger.source.loseHp();
        game.broadcastAll()+player.node.avatar.setBackgroundImage('extension/云将/yunzhangchunhua1.jpg');
            }
    },
                group:["yunjuekou_a"],
                ai:{
                    expose:0.3,
                },
                subSkill:{
                    a:{
                        trigger:{
                            player:"recoverEnd",
                        },
                        usable:1,
                        filterCard:true,
                        selectCard:[0,Infinity],
                        position:"h",
                        prompt:"是否发动【绝口】弃置手牌？",
                        content:function () {
        var num=player.storage.yunjueqing;
        player.chooseToDiscard([0,num], 'h').set('ai',function(card){
            return 6 - ai.get.value(card);
            if(card.name=='zhuge') return -10; 
            return get.attitude(player,event.player)>0;
        });
        game.broadcastAll()+player.node.avatar.setBackgroundImage('extension/云将/yunzhangchunhua.jpg');
    },
                        sub:true,
                    },
                },
            },
            yunlianzhu:{
                audio:"ext:云将:2",
                enable:"phaseUse",
                usable:1,
                position:"h",
                selectTarget:1,
                filterTarget:function(card,player,target){
        return (!target.hasSkill('yunlianzhua'));
    },
                derivation:"yunlianzhua",
                prompt:"选择一名角色获得【株】标记",
                content:function(){
    target.addSkill('yunlianzhua');
},
                ai:{
                    order:5,
                    expose:0.3,
                    threaten:1.8,
                    result:{
                        target:function (player, target) {
                return -target.num('h') - 1;
            },
                    },
                },
                "audioname2":{
                    yanghuiyu:"yunshenzi",
                },
            },
            yunlianzhua:{
                audio:"ext:云将:2",
                trigger:{
                    player:"damageEnd",
                },
                mark:true,
                marktext:"诛",
                intro:{
                    name:"连诛",
                    content:"给本小姐跪下！",
                },
                forced:true,
                mod:{
                    globalTo:function(from,to,current){
            return current==1;
        },
                },
                content:function(){
        trigger.source.chooseDrawRecover(true,get.prompt('yunlianzhua'));
        game.countPlayer(function(current){
            if(current!=player&&current.hasSkill('yunlianzhu')){
                player.line(current,'green');
                current.draw();
            }
        });
        player.removeSkill('yunlianzhua');
    },
                ai:{
                    threaten:5,
                },
            },
            yunjiaoheng:{
                audio:"ext:云将:2",
                trigger:{
                    global:"dieAfter",
                },
                unique:true,
                zhuSkill:true,
                limited:true,
                filter:function(event,player){
        if(!player.hasZhuSkill('yunjiaoheng'))return false;
        return player.storage.yunjiaoheng==false;
},
                skillAnimation:true,
                mark:false,
                init:function(player){
        if(player.hasZhuSkill('yunjiaoheng')){
            player.markSkill('yunjiaoheng');
            player.storage.yunjiaoheng=false;
        }
    },
                filterTarget:function(card,player,target){
        return target!=player;
    },
                prompt:"是否发动【娇蛮】召唤『董卓』",
                content:function(){
        'step 0'
        player.awakenSkill('yunjiaoheng');
        var hs=player.getCards('h')
        if(hs.length) player.discard(hs);
        game.broadcastAll()+player.node.avatar.setBackgroundImage('extension/云将/yundongbai1.jpg');
        'step 1'
        trigger.player.init('yundongzuo');
        player.addSkill('yundongbai');
        player.addSkill('yunchongnia');
        'step 2'
        player.say(["你知道我爷爷是谁吗？！","爷爷！有人欺负我，呜哇哇哇～"].randomGet());
            player.awakenSkill('yunjiaoheng');
            var identity='zhong';
            if(_status.mode=='purple'){
                if(['rNei','bNei'].contains(player.identity)) identity=player.identity;
                else if(['rZhu','rZhong','bNei'].contains(player.identity)) identity='rZhong';
                else identity='bZhong';
            }
            game.broadcastAll(function(source,identity){
                if(source.node.dieidentity){
                    source.node.dieidentity.innerHTML=get.translation(identity+2);
                }
                source.revive(999,false);
                source.identity=identity;
                source.setIdentity();
            },trigger.player,identity);
            trigger.player.changeGroup(player.group);
            trigger.player.draw(3);
            var evt=trigger.getParent('damage');
            if(evt.untrigger) evt.untrigger(false,trigger.player);
            game.addVideo('setIdentity',trigger.player,'zhong');
    },
                intro:{
                    content:"limited",
                },
            },
            yundongbai:{
                locked:true,
                unique:true,
                charlotte:true,
                direct:true,
                forced:true,
                priority:null,
            },
            yundongzuo:{
                direct:true,
                forced:true,
                unique:true,
                onremove:true,
                charlotte:true,
                priority:null,
                mod:{
                    maxHandcardBase:function(player,num){
            return 0;
        },
                },
            },
            yunbaonve:{
                audio:"ext:云将:2",
                direct:true,
                forced:true,
                fixed:true,
                group:["yunbaonve_a","yunbaonve_b"],
                subSkill:{
                    a:{
                        audio:"ext:云将:2",
                        trigger:{
                            global:"phaseBegin",
                        },
                        fixed:true,
                        forced:true,
                        filter:function (event,player){
        return event.player!=player&&!event.player.hasSkill('yundongbai');
    },
                        content:function (){
        player.say(["满朝公卿，屠之如猪狗。","我董仲颖真是大汉之国柱呀，哈哈哈！"].randomGet());
        player.useCard({name:"sha"},trigger.player);
    },
                        sub:true,
                    },
                    b:{
                        trigger:{
                            source:"damageBefore",
                        },
                        forced:true,
                        fixed:true,
                        filter:function (event,player){
        return event.player.hasSkill('yundongbai');
    },
                        content:function (){
        trigger.cancel();
    },
                        sub:true,
                    },
                },
            },
            yunchongnic:{
                trigger:{
                    player:"loseHpEnd",
                },
                forced:true,
                popup:false,
                fixed:true,
                content:function (){
        game.countPlayer(function(current){
            if(current!=player&&current.hasSkill('yundongbai')){
                player.line(current,'green');
                current.recover();
            }
        });
    },
            },
            yunchongni:{
                trigger:{
                    global:"dieAfter",
                },
                forced:true,
                popup:false,
                fixed:true,
                filter:function (event,player){
    return event.player.hasSkill('yundongbai');
    },
                content:function (){
    trigger.player.line(player);
    player.die();
    },
                group:["yunchongnic"],
            },
            yunchongnia:{
                trigger:{
                    global:"damageAfter",
                },
                forced:true,
                popup:false,
                fixed:true,
                filter:function (event,player){
        return event.source&&event.source.hasSkill('yundongzuo');
    },
                content:function (){
                trigger.source.line(player);
                player.draw();
    },
                group:["yunchongnib"],
                sub:true,
            },
            yunchongnib:{
                trigger:{
                    player:"damageEnd",
                },
                forced:true,
                fixed:true,
                popup:false,
                content:function (){
        game.countPlayer(function(current){
            if(current!=player&&current.hasSkill('yundongzuo')){
                player.line(current,'green');
                current.loseHp();
            }
        });
    },
            },
            yunyeyan:{
                audio:"ext:云将:4",
                enable:"phaseUse",
                unique:true,
                limited:true,
                mark:true,
                intro:{
                    content:"limited",
                },
                prompt:"弃置装备区所有牌对一名角色造成等量的伤害",
                skillAnimation:true,
                init:function(player){
    player.storage.yunyeyan=false;
},
                filter:function(event,player){
        return player.countCards('e');
    },
                position:"e",
                filterCard:function(card){
        return get.subtype(card);
    },
                selectCard:-1,
                filterTarget:function(card,player,target){
        return player!=target;
    },
                content:function(){
        "step 0"
        game.broadcastAll()+player.node.avatar.setBackgroundImage('extension/云将/yunzhouyu1.jpg');
        player.storage.yunyeyan=true;
        player.awakenSkill("yunyeyan");
        "step 1"
        player.say(["灰飞烟灭吧！","此火，天下三分！"].randomGet());
        target.damage('fire',cards.length);
    },
                ai:{
                    order:3,
                    result:{
                        target:function(player,target){
                var es = player.countCards('e',{type:'equip'});
                var th = target.hp;
                if(es>=th) return -1;
            },
                    },
                },
            },
            yunguqu:{
                audio:"ext:云将:3",
                trigger:{
                    global:"useCard",
                },
                forced:true,
                direct:true,
                usable:1,
                prompt:"是否发动【顾曲】？",
                check:function(event,player){
        return ai.get.attitude(player,event.player)<0;
    },
                filter:function(event,player){
        if(get.type(event.card)!='basic'&&get.type(event.card)!='trick'&&get.type(event.card)!='delay') return false;
        if(get.suit(event.card)&&player.num('h',{suit:get.suit(event.card)})){
            return event.player&&event.player!=player;
        };
        return false;
    },
                content:function(){
         'step 0'
        player.chooseToDiscard(get.prompt('yunguqu'),'h','弃置花色为'+get.translation(get.suit(trigger.card)+'2')+'的手牌令'+get.translation(trigger.player)+'使用的牌失效',
            {suit:get.suit(trigger.card)}).set('ai',function(card){
            return get.attitude(player,trigger.player)<0;
        });
        'step 1'
        if(result.bool){
            player.logSkill('yunguqu');
            player.discard(result.cards);
            trigger.untrigger();
            trigger.finish();
        }else{
            player.storage.counttrigger.yunguqu--;
            event.finish();
        }
        'step 2'
        if(get.color(trigger.card)=='red'){
            player.draw();
        }else{
            player.chooseTarget('请选择弃置牌的目标',function(card,player,target){return target.num('hej')>0}).set('ai',function(target){
                    var player=_status.event.player,att=get.attitude(player,target)>0?2:1;
                    return get.effect(target,{name:'guohe_copy'},player,player)*att;
                });
            }
        "step 3"
        if(result.bool){
            player.discardPlayerCard(1,result.targets[0],'hej'); 
        }else{
            event.finish();
        };
    },
                derivation:"yunyingzi",
                group:["yunyingzi"],
                ai:{
                    expose:0.1,
                },
            },
            yunyingzi:{
                audio:"ext:云将:2",
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                forced:true,
                content:function (){
        "step 0"
        trigger.player.chooseControl('装备','铁索').set('ai',function(){
return ["装备","铁索"].randomGet();
});
        "step 1"
        if(result.control=='铁索'){
            var list=['tiesuo'];
        player.gain(game.createCard(list.randomGet()));
        }
        if(result.control=='装备'){
            var list=get.inpile('equip');
        list=list.randomGets(3);
        for(var i=0;i<list.length;i++){
            list[i]=['装备','',list[i]];
        }
        var dialog=ui.create.dialog('选择一张装备牌加入你的手牌',[list,'vcard'],'hidden');
        player.chooseButton(dialog,true).set('ai',function(button){
            var card={name:button.link[2]};
            var value=get.value(card);
            return value;
        });
        }
        "step 2"
        if(result.bool){
            player.gain(game.createCard(result.buttons[0].link[2]),'draw');
        }
    },
                mod:{
                    maxHandcardBase:function(player,num){
            return player.maxHp;
        },
                },
                ai:{
                    threaten:1.5,
                },
            },
            yunzhaolie:{
                audio:"ext:云将:3",
                enable:"phaseUse",
                position:"he",
                filterCard:true,
                selectCard:[1,Infinity],
                selectTarget:1,
                prompt:"弃置任意张牌令一名其他角色摸等量的牌",
                check:function(card){
        if(ui.selected.cards.length>1) return 0;
        if(ui.selected.cards.length&&ui.selected.cards[0].name=='du') return 0;
        if(!ui.selected.cards.length&&card.name=='du') return 20;
        var player=get.owner(card);
        var num=0;
        var evt2=_status.event.getParent();
        var num=0;
        player.getHistory('lose',function(evt){
            if(evt.getParent().skill=='yunzhaolie'&&evt.getParent(3)==evt2) num+=evt.cards.length;
        });
        if(num>1||player.countCards('h')<=1){
            if(ui.selected.cards.length){
                return -1;
            }
            var players=game.filterPlayer();
            for(var i=0;i<players.length;i++){
                if(!players[i].isTurnedOver()&&
                   !players[i].hasJudge('lebu')&&
                    get.attitude(player,players[i])>=3&&
                    get.attitude(players[i],player)>=3){
                    return 11-get.value(card);
                }
            }
            if(player.countCards('h')>2) return 6-get.value(card);
            return -1;
        }
        return 10-get.value(card);
    },
                filter:function(event,player){
        return player.countCards('he')>0;
    },
                filterTarget:function (card, player, target) {
        return player!=target&&!target.hasSkill('yunzhaolie_off');
    },
                content:function(){
        "step 0"
        target.draw(player,cards.length);
        target.addTempSkill('yunzhaolie_off','phaseAfter');
        "step 1"
        player.chooseControl('武圣','咆哮','龙胆','铁骑','烈弓').set('ai',function(){
return ["武圣","咆哮","龙胆","铁骑","烈弓"].randomGet();
});
        player.say(["将军真乃一身是胆也！","匡扶汉室就仰望将军了！"].randomGet());
        "step 2"
        if(result.control=='武圣'){
            target.addTempSkill('yunzhaoliea',{player:'phaseAfter'});
        }
        if(result.control=='咆哮'){
            target.addTempSkill('yunzhaolieb',{player:'phaseAfter'});
        }
        if(result.control=='龙胆'){
            target.addTempSkill('yunzhaoliec',{player:'phaseAfter'});
        }
        if(result.control=='铁骑'){
            target.addTempSkill('yunzhaolied',{player:'phaseAfter'});
        }
        if(result.control=='烈弓'){
            target.addTempSkill('yunzhaoliee',{player:'phaseAfter'});
        }
    },
                ai:{
                    order:5,
                    result:{
                        target:10,
                    },
                },
            },
            yunzhaoliea:{
                group:"new_rewusheng",
                mark:true,
                marktext:"武圣",
                intro:{
                    name:"昭烈·武圣",
                    content:"你可以将一张红色牌当做【杀】使用或打出。使用的方片杀没有距离限制。",
                },
            },
            yunzhaolieb:{
                group:"olpaoxiao",
                mark:true,
                marktext:"咆哮",
                intro:{
                    name:"昭烈·咆哮",
                    content:"你使用【杀】无次数限制；当你使用的【杀】被【闪】抵消时，获得一枚〖咆〗。你使用【杀】造成伤害时，弃置所有“咆”并令伤害值+X。（X为〖咆〗数）",
                },
            },
            yunzhaoliec:{
                group:"ollongdan",
                mark:true,
                marktext:"龙胆",
                intro:{
                    name:"昭烈·龙胆",
                    content:"你可以将一张【杀】当做【闪】、【闪】当做【杀】、【酒】当做【桃】、【桃】当做【酒】使用或打出。",
                },
            },
            yunzhaolied:{
                group:"retieji",
                mark:true,
                marktext:"铁骑",
                intro:{
                    name:"昭烈·铁骑",
                    content:"你使用【杀】指定一名角色为目标后，可以进行一次判定并令该角色的非锁定技失效直到回合结束，除非该角色弃置一张与判定结果花色相同的牌，否则不能使用【闪】抵消此【杀】。",
                },
            },
            yunzhaoliee:{
                group:"xinliegong",
                mark:true,
                marktext:"烈弓",
                intro:{
                    name:"昭烈·烈弓",
                    content:"你使用【杀】可以选择你距离不大于此【杀】点数的角色为目标；当你使用【杀】指定一个目标后，你可以根据下列条件执行相应的效果：1.其手牌数小于等于你的手牌数，此【杀】不可被【闪】响应，2.其体力值大于等于你的体力值，此【杀】伤害+1。",
                },
            },
            "yunzhaolie_off":{
                charlotte:true,
            },
            yunsangu:{
                audio:"ext:云将:2",
                unique:true,
                zhuSkill:true,
                limited:true,
                selectTarget:1,
                filterTarget:function(card,player,target){
        return target!=player;
    },
                derivation:"yunrende",
                intro:{
                    content:"limited",
                },
                skillAnimation:true,
                prompt:"选择一名角色令其增加体力上限并修改势力为『蜀』",
                mark:false,
                init:function(player){
        if(player.hasZhuSkill('yunsangu')){
            player.markSkill('yunsangu');
            player.storage.yunsangu=false;
        }
    },
                filter:function(event,player){
        return player.hasZhuSkill('yunsangu');
        return player.storage.yunsangu==false;
},
                enable:"phaseUse",
                content:function(){
    "step 0"
    player.storage.yunsangu=true;
    player.awakenSkill("yunsangu");
    game.log(target,'成为了','【三顾】','的目标');
    target.gainMaxHp();
    "step 1"
    target.recover();
    target.changeGroup('shu');
    player.addSkill('yunrende');
    game.broadcastAll()+player.node.avatar.setBackgroundImage('extension/云将/yunliubei1.jpg');
},
                ai:{
                    order:6,
                    result:{
                        target:10,
                    },
                },
            },
            yunrende:{
                audio:"ext:云将:2",
                trigger:{
                    global:"gainAfter",
                },
                filter:function(event,player){
        return event.player!=player&&event.player.group=="shu"&&!event.player.hasSkill('yunrendea');
    },
                direct:true,
                content:function(){
            "step 0"
        trigger.player.chooseControl(["令"+lib.translate[player.name]+"摸一张牌","取消"]).set('ai',function(event){
            if(get.attitude(trigger.player,player)>0) return "令"+lib.translate[player.name]+"摸一张牌";
            return "取消";
        }).set('prompt','请选择一项');
        "step 1"
        if(result.control=="令"+lib.translate[player.name]+"摸一张牌"){
            player.logSkill('yunrende');
            player.draw();
            trigger.player.addTempSkill('yunrendea','roundStart');
        }
    },
            },
            yunrendea:{
                charlotte:true,
            },
            yunwanjun:{
                audio:"ext:云将:2",
                enable:"phaseUse",
                filterCard:true,
                selectCard:2,
                position:"he",
                selectTarget:1,
                prompt:"将两张牌当雷属性【杀】使用",
                filter:function(event,player){
        return player.countCards('he')>1;
    },
                filterTarget:function (card, player, target) {
        return player!=target&&!target.hasSkill('yunwanjun_off');
    },
                subSkill:{
                    off:{
                        sub:true,
                    },
                },
                check:function(card){
        return 6-get.value(card)
    },
                content:function (){
        target.addTempSkill('yunwanjun_off');
        player.useCard({name:'sha',nature:'thunder'},target,false);
        player.addTempSkill('unequip', 'shaAfter');
        player.addTempSkill('yunwanjuna','shaAfter');
        player.say(["燕人张飞在此！","三姓家奴，吃你爷爷一矛!"].randomGet());
    },
                ai:{
                    order:function(){
    return get.order({name:'sha'})+0.05;
},
                    expose:0.8,
                    effect:{
                        target:function(card,player,target){
                
                if(card.name == 'jiu'){
                    return [0,1];
                }
            },
                    },
                    result:{
                        target:function (player,target){
                return -1;
            },
                    },
                },
            },
            yunwanjuna:{
                nobracket:true,
                trigger:{
                    player:"shaBegin",
                },
                forced:true,
                popup:false,
                content:function (){
    trigger.directHit=true;
    },
            },
            "yunwanjun_off":{
            },
            yunyongzhi:{
                audio:"ext:云将:2",
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                content:function () {
        'step 0'
        player.draw(player.storage.yunyongzhi_mp);
        if(player.isDamaged()){
       var list=['jiu'];
        player.gain(game.createCard(list.randomGet()));
    }
        'step 1'
        player.removeMark('yunyongzhi_mp',Infinity);
        
    },
                mod:{
                    cardUsable:function(card,player,num){
            if(card.name=='jiu') return Infinity;
        },
                    ignoredHandcard:function(card,player){
            if(card.name=='jiu'){
                return true;
            }
        },
                    cardDiscardable:function(card,player,name){
            if(name=='phaseDiscard'&&card.name=='jiu'){
                return false;
            }
        },
                },
                group:["yunyongzhi_mp"],
                subSkill:{
                    mp:{
                        trigger:{
                            source:"damage",
                        },
                        forced:true,
                        popup:false,
                        mark:true,
                        marktext:"猛智",
                        intro:{
                            name:"智",
                            content:"回合结束摸#张牌",
                        },
                        filter:function (event, player) {
        if(_status.currentPhase!=player) return false;
        return event.num > 0&&player.storage.yunyongzhi_mp<3;
    },
                        init:function (player){
        player.storage.yunyongzhi_mp=0;
        player.markSkill('yunyongzhi_mp');
        player.syncStorage('yunyongzhi_mp');
    },
                        content:function () {
        'step 0'
        event.num=trigger.num;
        'step 1'
        player.storage.yunyongzhi_mp+=1;
        player.markSkill('yunyongzhi_mp');
        player.syncStorage('yunyongzhi_mp');
        'step 2'
        event.num--;
        if(event.num>0){
                event.goto(1);
            }
    },
                        sub:true,
                    },
                },
            },
            yunbiyue:{
                audio:"ext:云将:2",
                trigger:{
                    player:"damageEnd",
                },
                content:function(){ 
        player.logSkill('yunbiyue',event.targets);
        game.broadcastAll()+player.node.avatar.setBackgroundImage('extension/云将/yundiaochan.jpg');
    },
                mod:{
                    maxHandcard:function(player,num){
            return num+player.hp;
        },
                    targetEnabled:function(card,player,target,now){
            if(target.countCards('h')>target.hp){
                if(card.name=='sha'||card.name=='juedou') return false;
            }
        },
                },
                ai:{
                    effect:{
                        target:function(card,player,target){
                if(player.countCards('h')<=player.hp)     return 0; 
                if(card.name=='sha'&&card.name=='juedou') return 0; 
            },
                    },
                },
            },
            yunmeihuo:{
                audio:"ext:云将:10",
                enable:"phaseUse",
                unique:true,
                filterTarget:function(card,player,target){
        return target!=player&&target.countCards('h')>0;
    },
                multitarget:true,
                selectTarget:2,
                usable:1,
                targetprompt:["发起拼点","被拼点"],
                prompt:"选择两名拼点目标",
                content:function(){
        "step 0"
        targets[0].line(targets[1]);
        targets[0].chooseToCompare(targets[1]);
        player.say(["将军～一定要赢哟～","打打杀杀～好害怕哦～"].randomGet());
        game.broadcastAll()+player.node.avatar.setBackgroundImage('extension/云将/yundiaochan1.jpg');
        "step 1"
        if(result.bool){
            targets[0].useCard({name:'juedou'},targets[1],false);
        }else if(result.tie){
            targets[1].useCard({name:'juedou'},targets[0],false);
            targets[0].useCard({name:'juedou'},targets[1],false);
        }else{
            targets[1].useCard({name:'juedou'},targets[0],false);
        };
    },
                ai:{
                    order:9,
                    expose:0.3,
                    result:{
                        target:function(player,target){
            if(ai.get.attitude(player,target)<0) return -target.num('he');
              },
                    },
                },
            },
            yunzhiba:{
                unique:true,
                global:"yunzhibaa",
                audio:"ext:云将:2",
            },
            yunzhibaa:{
                audio:"ext:云将:2",
                enable:"phaseUse",
                position:"he",
                usable:1,
                selectCard:[1],
                prepare:function(cards,player,targets){
        targets[0].logSkill('yunzhiba');
    },
                filter:function(event,player){
        if(player.group!='wu') return false;
        if(player.countCards('he',{type:'equip'})==0) return 0;
        return game.hasPlayer(function(target){
            return target!=player&&target.hasZhuSkill('yunzhiba',player);
        });
    },
                filterCard:function(card){
        return get.type(card)=='equip';
    },
                filterTarget:function(card,player,target){
        return target!=player&&target.hasZhuSkill('yunzhiba',player);
    },
                prompt:"选择给出一张装备牌，然后自己摸两张牌",
                content:function(){
        "step 0"
        target.gain(cards,player);
        "step 1"
        player.draw(2);
    },
                ai:{
                    expose:0.3,
                    order:10,
                    result:{
                        target:5,
                    },
                },
            },
            yunxianxi:{
                audio:"ext:云将:2",
                unique:true,
                zhuSkill:true,
                limited:true,
                selectTarget:1,
                filterTarget:function(card,player,target){
        return target!=player;
    },
                derivation:"yunzhiba",
                intro:{
                    content:"limited",
                },
                skillAnimation:true,
                mark:false,
                init:function(player){
        if(player.hasZhuSkill('yunxianxi')){
            player.markSkill('yunxianxi');
            player.storage.yunxianxi=false;
        }
    },
                filter:function(event,player){
        return player.hasZhuSkill('yunxianxi');
        return player.storage.yunxianxi==false;
},
                enable:"phaseUse",
                content:function(){
    "step 0"
    player.storage.yunxianxi=true;
    player.awakenSkill("yunxianxi");
        game.log(target,'成为了目标');
    target.gainMaxHp();
    "step 1"
        var card=get.cardPile(function(card){ 
            return get.type(card)=='equip'; 
        }); 
        event.card=card; 
        'step 2' 
        if(event.card){ 
            target.equip(event.card); 
        } 
        'step 3' 
    target.changeGroup('wu');
    player.addSkill('yunzhiba');
    game.broadcastAll()+player.node.avatar.setBackgroundImage('extension/云将/yunsunce1.jpg');
},
                ai:{
                    order:7,
                    result:{
                        target:10,
                    },
                },
            },
            yunjiang:{
                audio:"ext:云将:3",
                forced:true,
                trigger:{
                    source:"damageEnd",
                },
                filter:function (event,player){
        var evt=event.getParent();
        return (evt&&evt.name=='juedou')>0;
    },
                content:function (){
             "step 0"
             player.draw(2);
             player.say(["属于我们的时代！开始啦!","激昂起来了！"].randomGet());
             var evt=trigger.getParent();
             var cards=evt[player==evt.player?'targetCards':'playerCards'].slice(0);
             for(var i=0;i<cards.length;i++){
                 if(get.position(cards[i])!='d') cards.remove(cards[i--]);
        }
             if(!cards.length) event.finish();
             else{
                 event.cards=cards;
                 player.gain(cards,'gain2');
        }
    },
            },
            yunyingyang:{
                audio:"ext:云将:2",
                trigger:{
                    player:"damageAfter",
                },
                locked:true,
                usable:1,
                prompt:"是否发动【鹰扬】？",
                filter:function(event,player){
        return _status.currentPhase!=player&&event.source;
    },
                filterTarget:function (card, player, target) {
        return player!=target;
    },
                check:function (event, player) {
        if (player.countCards('hs',{name:'sha'})>=1) return ai.get.attitude(player, event.source)<0;
        return 0;
    },
                content:function(){
        player.useCard({name:'juedou',skill:'yunyingyang'},trigger.source);
    },
                group:["yunyingyang_a"],
                ai:{
                    wuxie:function(target,card,player,viewer){
            if(player==game.me&&get.attitude(viewer,player)>0){
                return 0;
            }
        },
                    expose:0.3,
                    basic:{
                        order:3,
                        useful:1,
                        value:5.5,
                    },
                    result:{
                        target:-1.5,
                        player:function(player,target){
                if(get.damageEffect(target,player,target)>0&&get.attitude(player,target)>0&&get.attitude(target,player)>0){
                    return 0;
                }
                var hs1=target.getCards('h','sha');
                var hs2=player.getCards('h','sha');
                if(hs1.length>hs2.length+1){
                    return -2;
                }
                var hsx=target.getCards('h');
                if(hsx.length>2&&hs2.length==0&&hsx[0].number<6){
                    return -2;
                }
                if(hsx.length>3&&hs2.length==0){
                    return -2;
                }
                if(hs1.length>hs2.length&&(!hs2.length||hs1[0].number>hs2[0].number)){
                    return -2;
                }
                return -0.5;
            },
                    },
                    tag:{
                        respond:2,
                        respondSha:2,
                        damage:1,
                    },
                },
                subSkill:{
                    a:{
                        audio:"ext:云将:2",
                        enable:"phaseUse",
                        filterCard:function(card){
        return get.type(card)=='equip';
    },
                        position:"he",
                        prompt:"请选择【鹰扬】的目标",
                        filter:function(event,player){
        var num=player.getStat().skill.yunyingyang_a;
        if(num){
            num=_status.event.player.getStat().skill.yunyingyang_a;
        }
        else{
            num=1;
        }
        return player.countCards('he',{type:'equip'})>=num;
    },
                        selectCard:function(card){
        var num=_status.event.player.getStat().skill.yunyingyang_a;
        if(num) return num+1;
        return 1;
    },
                        filterTarget:function (card,player,target){
        if(player==target) return false;
        return true;
    },
                        content:function (){
        player.useCard({name:'juedou'},target,false);
    },
                        ai:{
                            order:10,
                            wuxie:function(target,card,player,viewer){
            if(player==game.me&&get.attitude(viewer,player)>0){
                return 0;
            }
        },
                            basic:{
                                order:7,
                                useful:1,
                                value:5.5,
                            },
                            result:{
                                target:-1.5,
                                player:function(player,target){
                if(get.damageEffect(target,player,target)>0&&get.attitude(player,target)>0&&get.attitude(target,player)>0){
                    return 0;
                }
                var hs1=target.getCards('h','sha');
                var hs2=player.getCards('h','sha');
                if(hs1.length>hs2.length+1){
                    return -2;
                }
                var hsx=target.getCards('h');
                if(hsx.length>2&&hs2.length==0&&hsx[0].number<6){
                    return -2;
                }
                if(hsx.length>3&&hs2.length==0){
                    return -2;
                }
                if(hs1.length>hs2.length&&(!hs2.length||hs1[0].number>hs2[0].number)){
                    return -2;
                }
                return -0.5;
            },
                            },
                            tag:{
                                respond:2,
                                respondSha:2,
                                damage:1,
                            },
                        },
                        sub:true,
                    },
                },
            },
            yunbugua:{
                audio:"ext:云将:2",
                global:"yunbuguaa",
            },
            yunbuguaa:{
                audio:"ext:云将:2",
                enable:"phaseUse",
                usable:1,
                filter:function(event,player){
        return game.hasPlayer(function(current){
            return current.hasSkill('yunbugua');
        });
    },
                direct:true,
                delay:false,
                discard:false,
                lose:false,
                priority:999,
                prompt:"是否进行一次判定，若结果为红色你摸一张牌，否则『徐氏』摸一张牌？",
                content:function(){
        "step 0"
        player.logSkill('yunbugua',event.target);
        var targets=game.filterPlayer(function(current){
            return current.hasSkill('yunbugua');
        });
        event.target=targets[0]; 
        event.target.addMark('yunfuzhu',1);
        "step 1"
        player.judge(function (card) {
            return (get.color(card) == 'red') ? 1.5 : -0.5
        });
        "step 2"
        if (result.judge > 0) {
            player.draw();
        }
            else{
                event.target.draw();
                        }
    },
                ai:{
                    order:9,
                    result:{
                        player:function(player,target){
                var target=game.findPlayer(function(current){
                    return current.hasSkill('yunbugua');
                });
                if(target){
                    return get.attitude(player,target);
                }
                return 1;
            },
                    },
                },
            },
            yunfuzhu:{
                audio:"ext:云将:3",
                enable:"phaseUse",
                filterTarget:function(card,player,target){
        return player!=target;
    },
                marktext:"诛",
                intro:{
                    name:"伏诛",
                    content:"当前已拥有#个诛",
                },
                mark:true,
                selectTarget:[1],
                prompt:"选择【伏诛】目标",
                init:function(player){
        player.storage.yunfuzhu_re=false;
    },
                filter:function(event,player){
        return player.storage.yunfuzhu>0;
    },
                content:function(){
        'step 0'
        player.storage.yunfuzhu_re=true;
        player.useCard({name:'sha'},target,false).ai=function(target){
                    if(get.attitude(player,target)>0)
                    return 0.1;
                    if(get.attitude(player,target)<1&&(target.isTurnedOver()||target.Hp<1))
                    return 0.2;
                        if(get.attitude(player,target)<1&&target.Hp>0)
                    return target.Hp*0.8+target.getHandcardLimit()*0.7+2;
                    if(get.attitude(player,target)<1&&target.Hp>0)
                    return target.Hp*0.8+target.getHandcardLimit()*0.7;
                    return 1;
                };
        player.addTempSkill('yunfuzhu_sha','shaAfter');
        'step 1'
        player.removeMark('yunfuzhu',Infinity);
        game.broadcastAll()+player.node.avatar.setBackgroundImage('extension/云将/yunxushi1.jpg');
    },
                ai:{
                    order:3,
                    result:{
                        target:function(player,target){
                if(get.attitude(player,target)>0) return -99999;
                var hs=player.storage.yunfuzhu;
                var ts=target.hp;
                if(player.hasSha()&&player.storage.yunfuzhu>0)hs++;
                if(player.getEnemies().length==1)ts=Math.max(2,ts);
                if(hs>=ts&&ts>1) return -1;
                return 0;
                return get.damageEffect(target,player);
            },
                    },
                },
            },
            "yunfuzhu_sha":{
                trigger:{
                    source:"damageBegin",
                },
                popup:false,
                forced:true,
                filter:function(event,player){
        return event.card.name=='sha'&&event.notLink();
    },
                content:function(){
        trigger.num+=(player.storage.yunfuzhu-1);
    },
            },
            yundanlie:{
                mark:true,
                marktext:"裂",
                unique:true,
                intro:{
                    content:"子龙！叶轩！贼寇已然胆寒，随我杀！",
                },
                mod:{
                    globalFrom:function(from,to,current){
            return current+Math.max(0,from.hp);
        },
                    globalTo:function(from,to,current){
            return current-Math.max(0,from.hp);
        },
                },
                trigger:{
                    player:"recoverEnd",
                },
                forced:true,
                content:function(){
        player.removeSkill('yundanlie');
    },
                ai:{
                    threaten:4,
                },
            },
            yunzhujing:{
                audio:"ext:云将:2",
                trigger:{
                    player:"phaseDiscardBegin",
                },
                forced:true,
                filter:function(event,player){
        return player.hujia<player.maxHp;
    },
                check:function(card){
        return 6-get.value(card)
    },
                prompt:"是否弃置任意张手牌获得等量的护甲？",
                content:function(){
        'step 0'
        var next=player.chooseToDiscard('he',[1,player.countCards('he')]).set('ai',function(card){
            return 6 - ai.get.value(card);
            });
        "step 1"
        if(result.bool){
            player.changeHujia(result.cards.length);
        }
    },
                group:["yunzhujing_a"],
                subSkill:{
                    a:{
                        audio:"ext:云将:2",
                        trigger:{
                            player:"damageZero",
                        },
                        filter:function(event){
        return event.hujia;
    },
                        forced:true,
                        content:function(){
        player.draw();
    },
                        ai:{
                            threaten:2.3,
                        },
                        sub:true,
                    },
                },
            },
            yunyicong:{
                audio:"ext:云将:2",
                trigger:{
                    source:"damageBegin",
                },
                forced:true,
                usable:1,
                derivation:"yundanlie",
                filter:function(event){
        if(event._notrigger.contains(event.player)) return false;
        return event.player.isAlive()&&event.card&&event.card.name=='sha';
    },
                content:function(){
       player.draw();
       trigger.player.addSkill('yundanlie');
    },
                group:["yunyicong_a"],
                ai:{
                    threaten:1,
                },
                subSkill:{
                    a:{
                        audio:"ext:云将:2",
                        trigger:{
                            target:"useCardToBefore",
                        },
                        forced:true,
                        usable:1,
                        filter:function (event, player) {
        return event.card.name == 'sha';
    },
                        content:function () {
        player.useCard({name:'sha'},trigger.player,false); 
    },
                        sub:true,
                    },
                },
            },
            yunwansha:{
                audio:"ext:云将:3",
                trigger:{
                    global:"dying",
                },
                prompt:"令其进行一次判定，若结果为：黑色、你令其其死亡；红色：你摸两张牌",
                logTarget:"player",
                check:function(event,player){
        return ai.get.attitude(player,event.player)<0;
    },
                filter:function(event,player){
        return _status.currentPhase==player&&event.player!=player;
    },
                content:function(){
        'step 0'
        trigger.player.judge();
        "step 1"
        if(result.color=='black'){
            player.say(["死！","英雄，也会孤掌难鸣呐！"].randomGet());
            trigger.player.die(trigger.reason);
        }else{
            player.say(["哼！","濒死求活的小可怜哟～"].randomGet());
            trigger.player.addTempSkill('yunfengyin',{player:'phaseAfter'});
        }
        'step 2'
        if(!trigger.player.isAlive()){
            trigger.cancel(true);
        }
    },
            },
            yunjimou:{
                audio:"ext:云将:2",
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                forced:true,
                derivation:["yunkongju","yunweiwo"],
                content:function(){
            player.addTempSkill('yunkongju');
        game.broadcastAll()+player.node.avatar.setBackgroundImage('extension/云将/yunjiaxu.jpg');
    },
                group:["yunjimou_a"],
                subSkill:{
                    a:{
                        audio:"ext:云将:2",
                        trigger:{
                            player:"phaseJieshuBegin",
                        },
                        forced:true,
                        content:function(){
            player.addTempSkill('yunweiwo',{player:'phaseZhunbeiBegin'});
        game.broadcastAll()+player.node.avatar.setBackgroundImage('extension/云将/yunjiaxu1.jpg');
    },
                        sub:true,
                    },
                },
            },
            yunkongju:{
                audio:"ext:云将:3",
                trigger:{
                    player:"useCardAfter",
                },
                mark:true,
                marktext:"控局",
                intro:{
                    name:"控局",
                    content:true,
                },
                prompt:"是否额外结算一次卡牌效果？",
                filter:function(event,player){
        if(event.parent.name=='yunkongju') return false;
        if(!event.targets||!event.card) return false;
        if(event.card&&event.card.name=='wuxie') return false;
        if(event.card&&event.card.name=='wanjian') return false;
        if(event.card&&event.card.name=='nanman') return false;
        if(event.card&&event.card.name=='shan') return false;
        var type=get.type(event.card);
        if(type!='basic'&&type!='trick') return false;
        var color=get.color(event.card);
        if(color!='red') return false;
        var card=game.createCard(event.card.name,event.card.suit,event.card.number,event.card.nature);
        var targets=event._targets||event.targets;
        for(var i=0;i<targets.length;i++){
            if(!targets[i].isIn()) return false;
            if(!player.canUse({name:event.card.name},targets[i],false,false)){
                return false;
            }
        }
       return true; 
    },
                content:function(){
        var card=game.createCard(trigger.card.name,trigger.card.suit,trigger.card.number,trigger.card.nature);
        player.useCard(card,(trigger._targets||trigger.targets).slice(0),false).set('ai',()=>-1).logSkill='yunkongju';
    },
                group:["yunkongju_a"],
                ai:{
                    effect:{
                        player:function(card,player,target){ 
                if(get.color(card)=='red') return [1,1]; 
            },
                    },
                },
                subSkill:{
                    a:{
                        audio:"yunkongju",
                        trigger:{
                            player:"useCardAfter",
                        },
                        prompt:"是否额外结算一次卡牌效果？",
                        filter:function(event,player){
        if(event.parent.name=='yunkongju_a') return false;
        if(!event.targets||!event.card) return false;
        var type=get.type(event.card);
        if(event.card.name!='wanjian') return false;
        if(event.card.name!='nanman') return false;
        var color=get.color(event.card);
        if(color!='red') return false;
        var card=game.createCard(event.card.name,event.card.suit,event.card.number,event.card.nature);
        var targets=event._targets||event.targets;
        for(var i=0;i<targets.length;i++){
            if(!player.canUse({name:event.card.name},targets[i],false,false)){
                return false;
            }
        }
       return true; 
    },
                        content:function(){
        var card=game.createCard(trigger.card.name,trigger.card.suit,trigger.card.number,trigger.card.nature);
        player.useCard(card,(trigger._targets||trigger.targets).slice(0)).set('ai',()=>-1).logSkill='yunkongju_a';
    },
                        ai:{
                            effect:{
                                player:function(card,player,target){ 
                if(get.color(card)=='red') return [1,1]; 
            },
                            },
                        },
                        sub:true,
                    },
                },
            },
            yunweiwo:{
                audio:"ext:云将:2",
                trigger:{
                    global:"useCard1",
                },
                mark:true,
                marktext:"帷幄",
                intro:{
                    name:"帷幄",
                    content:true,
                },
                forced:true,
                firstDo:true,
                filter:function (event,player,card){
        if(get.color(event.card)!='black') return false;
        return event.card.name=='nanman'&&player!=event.player||event.card.name=='wanjian'&&player!=event.player||event.card.name=='taoyuan'&&player.hp<player.maxHp||event.card.name=='wugu';
    },
                content:function(){},
                mod:{
                    targetEnabled:function(card){
            if(get.color(card)=='black') return false;
        },
                },
            },
            yunjiance:{
                audio:"ext:云将:4",
                enable:"phaseUse",
                usable:1,
                check:function(card){
        if(_status.event.player.hp==1) return 8-get.value(card);
        return 6-get.value(card);
    },
                filter:function(event,player){
        return player.countCards('h')>0;
    },
                filterTarget:function(card,player,target){
        if(target==player) return false;
        if(ui.selected.targets.length){
            return ui.selected.targets[0]!=target&&!ui.selected.targets[0].hasSkillTag('noCompareSource')&&target.countCards('h')
            &&!target.hasSkillTag('noCompareTarget');
        }
        return true;
    },
                filterCard:true,
                targetprompt:["发起拼点","被拼点"],
                prompt:"选择【间策】的两名目标",
                selectTarget:2,
                multitarget:true,
                content:function(){
        'step 0'
        targets[0].gain(cards,player,'give');
        'step 1'
        targets[0].chooseToCompare(targets[1]);
        'step 2'
        if(result.bool){
            targets[0].chooseToDiscard('he',2,true);
            targets[1].damage();
        }
        else if(result.tie){
            targets[0].damage()
            targets[1].damage()
        }
        else{
            targets[1].chooseToDiscard('he',2,true);
            targets[0].damage();
        }
    },
                intro:{
                    content:"limited",
                },
                ai:{
                    expose:0.4,
                    order:7,
                    result:{
                        target:function(player,target){
                if(player.hasUnknown()) return 0;
                if(ui.selected.targets.length) return -1;
                return -0.5;
            },
                    },
                },
            },
            yunlongdan:{
                audio:"ext:云将:4",
                group:["yunlongdan_sha","yunlongdan_shan"],
                mod:{
                    cardUsable:function(card,player,num){ 
            if(card.name=='sha') 
                return num+(player.maxHp-player.hp);
        },
                },
                ai:{
                    mapValue:2,
                },
                subSkill:{
                    sha:{
                        audio:"ext:云将:2",
                        enable:["chooseToUse","chooseToRespond"],
                        filterCard:true,
                        selectCard:1,
                        position:"h",
                        viewAs:{
                            name:"sha",
                        },
                        viewAsFilter:function(player){
                if(!player.countCards('h')) return false;
            },
                        prompt:"将一张非基本牌当杀使用或打出",
                        check:function(){return 1},
                        ai:{
                            effect:{
                                target:function(card,player,target,current){
                        if(get.tag(card,'respondSha')&&current<0) return 0.6
                    },
                            },
                            respondSha:true,
                            skillTagFilter:function(player){
                    if(!player.countCards('h')) return false;
                },
                            order:function(){
                    return get.order({name:'sha'})+9;
                },
                            useful:-1,
                            value:-1,
                            basic:{
                                useful:[5,1],
                                value:[5,1],
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
                        sub:true,
                        "audioname2":{
                            "key_shiki":"yunshenzi",
                        },
                    },
                    shan:{
                        audio:"ext:云将:2",
                        enable:["chooseToRespond","chooseToUse"],
                        filterCard:true,
                        selectCard:1,
                        position:"h",
                        viewAs:{
                            name:"shan",
                        },
                        prompt:"将一张非基本牌当闪使用或打出",
                        check:function(){return 1},
                        viewAsFilter:function(player){
                if(!player.countCards('h')) return false;
            },
                        ai:{
                            respondShan:true,
                            skillTagFilter:function(player){
                    if(!player.countCards('h')) return false;
                },
                            effect:{
                                target:function(card,player,target,current){
                        if(get.tag(card,'respondShan')&&current<0) return 0.6
                    },
                            },
                            order:9,
                            useful:-1,
                            value:-1,
                            basic:{
                                useful:[7,2],
                                value:[7,2],
                            },
                            result:{
                                player:1,
                            },
                        },
                        sub:true,
                        "audioname2":{
                            "key_shiki":"yunshenzi",
                        },
                    },
                },
                "audioname2":{
                    "key_shiki":"yunshenzi",
                },
            },
            yunlonglie:{
                audio:"ext:云将:4",
                forced:true,
                group:["yunlonglie_hong","yunlonglie_fang","yunlonglie_hei","yunlonglie_mei","yunlonglie_honga","yunlonglie_fanga","yunlonglie_heia","yunlonglie_meia"],
                subSkill:{
                    hong:{
                        audio:"ext:云将:1",
                        trigger:{
                            player:["useCardEnd"],
                        },
                        forced:true,
                        popup:false,
                        usable:1,
                        filter:function(event,player){
            if((event.card.name!='sha'&&event.card.name!='shan')||(event.skill!='yunlongdan_shan'&&event.skill!='yunlongdan_sha'&&
            event.skill!=event.skill!='yunlongdan')) return false;
            var target=lib.skill.yunlonglie_hong.logTarget(event,player);
            if(!event.cards) return false;
            if(event.cards.length!=1) return false;
            for(var i=0;i<event.cards.length;i++){
            if(get.suit(event.cards[i])=='heart') return true;
                   }
            return false;
              },
                        logTarget:function(event,player){
            if(event.card.name=='sha') return event.targets[0];
            return event.respondTo[0];
            },
                        content:function(){
               player.logSkill('yunlonglie_hong',event.targets);
               player.recover();
              },
                        sub:true,
                        "audioname2":{
                            "key_shiki":"yunshenzi",
                        },
                    },
                    fang:{
                        audio:"ext:云将:1",
                        trigger:{
                            player:["useCardEnd"],
                        },
                        forced:true,
                        popup:false,
                        usable:1,
                        filter:function(event,player){
            if((event.card.name!='sha'&&event.card.name!='shan')||(event.skill!='yunlongdan_shan'&&event.skill!='yunlongdan_sha'&&
            event.skill!=event.skill!='yunlongdan')) return false;
            var target=lib.skill.yunlonglie_fang.logTarget(event,player);
            if(!event.cards) return false;
            if(event.cards.length!=1) return false;
            
            for(var i=0;i<event.cards.length;i++){
            if(get.suit(event.cards[i])=='diamond') return true;
               }
            return false;
            },
                        logTarget:function(event,player){
            if(event.card.name=='sha') return event.targets[0];
            return event.respondTo[0];
            },
                        content:function(){
                player.logSkill('yunlonglie_fang',event.targets);
            player.draw(2);
            },
                        sub:true,
                        "audioname2":{
                            "key_shiki":"yunshenzi",
                        },
                    },
                    hei:{
                        audio:"ext:云将:1",
                        trigger:{
                            player:["useCardEnd"],
                        },
                        forced:true,
                        popup:false,
                        usable:1,
                        filter:function(event,player){
            if((event.card.name!='sha'&&event.card.name!='shan')||(event.skill!='yunlongdan_shan'&&event.skill!='yunlongdan_sha'&&
            event.skill!=event.skill!='yunlongdan')) return false;
            var target=lib.skill.yunlonglie_hei.logTarget(event,player);
            if(!event.cards) return false;
            if(event.cards.length!=1) return false;
            
            for(var i=0;i<event.cards.length;i++){
            if(get.suit(event.cards[i])=='spade') return true;
            }
            return false;
        },
                        logTarget:function(event,player){
            if(event.card.name=='sha') return event.targets[0];
            return event.respondTo[0];
            },
                        content:function(){
           "step 0"
            player.chooseTarget('令一名角色受到一点伤害',get.prompt('yunlonglie_hei'),function(card,player,target){
            return player!=target&&target.hp>=player.hp;
            }).ai = function (target) {
            return ai.get.damageEffect(target, player, player);
        };
           "step 1"
            if(result.bool){
            player.logSkill('yunlonglie_hei',result.targets);
            result.targets[0].damage(player);
            }
        },
                        ai:{
                            threaten:0.7,
                        },
                        sub:true,
                        "audioname2":{
                            "key_shiki":"yunshenzi",
                        },
                    },
                    mei:{
                        audio:"ext:云将:1",
                        trigger:{
                            player:["useCardEnd"],
                        },
                        forced:true,
                        popup:false,
                        usable:1,
                        filter:function(event,player){
            if((event.card.name!='sha'&&event.card.name!='shan')||(event.skill!='yunlongdan_shan'&&event.skill!='yunlongdan_sha'&&
            event.skill!=event.skill!='yunlongdan')) return false;
            var target=lib.skill.yunlonglie_mei.logTarget(event,player);
            if(!event.cards) return false;
            if(event.cards.length!=1) return false;
            for(var i=0;i<event.cards.length;i++){
            if(get.suit(event.cards[i])=='club') return true;
            }
            return false;
        },
                        logTarget:function(event,player){
            if(event.card.name=='sha') return event.targets[0];
            return event.respondTo[0];
            },
                        content:function(){
            "step 0"
            player.chooseTarget('弃置一名角色一张牌',get.prompt('yunlonglie_mei'),function(card,player,target){
            return target!=player&&target.countCards('he')>0;
            }).set('autodelay',trigger.name=='guohe'?0.5:1).ai=function(target){
            return -get.attitude(player,target);
            };
            "step 1"
            if(result.bool){
            player.logSkill('yunlonglie_mei',result.targets);
            player.discardPlayerCard(result.targets[0],'he',true);
            }
        },
                        ai:{
                            threaten:0.7,
                        },
                        sub:true,
                    },
                    honga:{
                        audio:"yunlonglie_hong",
                        trigger:{
                            player:"respondEnd",
                        },
                        forced:true,
                        popup:false,
                        usable:1,
                        filter:function(event,player){
            if((event.card.name!='sha'&&event.card.name!='shan')||(event.skill!='yunlongdan_shan'&&event.skill!='yunlongdan_sha'&&
             event.skill!=event.skill!='yunlongdan')) return false;
             if(!event.cards) return false;
             if(event.cards.length!=1) return false;
             for(var i=0;i<event.cards.length;i++){
             if(get.suit(event.cards[i])=='heart') return true;
             }
             return false;
             },
                        logTarget:"source",
                        content:function(){
                player.logSkill('yunlonglie_honga',event.targets);
            player.recover();
            },
                        sub:true,
                    },
                    fanga:{
                        audio:"yunlonglie_fanga",
                        trigger:{
                            player:["respondEnd"],
                        },
                        forced:true,
                        popup:false,
                        usable:1,
                        filter:function(event,player){
            if((event.card.name!='sha'&&event.card.name!='shan')||(event.skill!='yunlongdan_shan'&&event.skill!='yunlongdan_sha'&&
             event.skill!=event.skill!='yunlongdan')) return false;
             if(!event.cards) return false;
             if(event.cards.length!=1) return false;
             for(var i=0;i<event.cards.length;i++){
             if(get.suit(event.cards[i])=='diamond') return true;
             }
             return false;
             },
                        logTarget:"source",
                        content:function(){
            player.logSkill('yunlonglie_fanga',event.targets);
            player.draw(2);
            },
                        sub:true,
                    },
                    heia:{
                        audio:"yunlonglie_hei",
                        trigger:{
                            player:["respondEnd"],
                        },
                        forced:true,
                        usable:1,
                        popup:false,
                        filter:function(event,player){
            if((event.card.name!='sha'&&event.card.name!='shan')||(event.skill!='yunlongdan_shan'&&event.skill!='yunlongdan_sha'&&
             event.skill!=event.skill!='yunlongdan')) return false;
             if(!event.cards) return false;
             if(event.cards.length!=1) return false;
             for(var i=0;i<event.cards.length;i++){
             if(get.suit(event.cards[i])=='spade') return true;
             }
             return false;
             },
                        logTarget:"source",
                        content:function(){
            "step 0"
            player.chooseTarget('令一名角色受到一点伤害',get.prompt('yunlonglie_hei'),function(card,player,target){
            return player!=target&&target.hp>=player.hp;
            }).ai = function (target) {
            return ai.get.damageEffect(target, player, player);
        };
            "step 1"
            if(result.bool){
            player.logSkill('yunlonglie_heia',result.targets);
            result.targets[0].damage(player);
            }
        },
                        ai:{
                            threaten:0.7,
                        },
                        sub:true,
                    },
                    meia:{
                        audio:"yunlonglie_mei",
                        trigger:{
                            player:["respondEnd"],
                        },
                        forced:true,
                        usable:1,
                        popup:false,
                        filter:function(event,player){
            if((event.card.name!='sha'&&event.card.name!='shan')||(event.skill!='yunlongdan_shan'&&event.skill!='yunlongdan_sha'&&
             event.skill!=event.skill!='yunlongdan')) return false;
             if(!event.cards) return false;
             if(event.cards.length!=1) return false;
             for(var i=0;i<event.cards.length;i++){
             if(get.suit(event.cards[i])=='club') return true;
             }
             return false;
             },
                        logTarget:"source",
                        content:function(){
            "step 0"
            player.chooseTarget('弃置一名角色一张牌',get.prompt('yunlonglie_meia'),function(card,player,target){
            return target!=player&&target.countCards('he')>0;
            }).set('autodelay',trigger.name=='guohe'?0.5:1).ai=function(target){
            return -get.attitude(player,target);
            };
            "step 1"
            if(result.bool){
            player.logSkill('yunlonglie_meia',result.targets);
            player.discardPlayerCard(result.targets[0],'he',true);
            }
        },
                        ai:{
                            threaten:0.7,
                        },
                        sub:true,
                    },
                },
            },
            yunqiqiao:{
                audio:"ext:云将:2",
                trigger:{
                    global:"equipEnd",
                },
                usable:1,
                filter:function(event,player){
        return event.player!=player&&player.inRange(event.player);
        if(event.parent.parent.name=='phaseDraw') return false;
        if(event.parent.name=='fenlie') return false;
        if(!event.cards) return false;
        for(var i=0;i<event.cards.length;i++){
            if(!get.info(event.cards[i]).unique) return true;
        }
        return false;
    },
                content:function(){
        var cards=[];
        for(var i=0;i<trigger.cards.length;i++){
            if(get.info(trigger.cards[i]).unique) continue;
            cards.push(game.createCard(trigger.cards[i]));
        }
            player.gain(cards,'draw');
    },
                group:["yunqiqiao_a","yunqiqiao_b"],
                ai:{
                    effect:{
                        target:function(card){
                if(card.name=='toulianghuanzhu'){
                    return [1,2];
                }
            },
                    },
                },
                subSkill:{
                    a:{
                        popup:false,
                        forced:true,
                        trigger:{
                            player:"damageAfter",
                        },
                        content:function () {
        game.broadcastAll()+player.node.avatar.setBackgroundImage('extension/云将/yunhuangyueying1.jpg');
    },
                        sub:true,
                    },
                    b:{
                        trigger:{
                            player:"recoverBegin",
                        },
                        popup:false,
                        forced:true,
                        mark:true,
                        marktext:"风云",
                        intro:{
                            name:"彩蛋",
                            content:"强势推荐《侠客风云传》拓展哟～",
                        },
                        content:function () {
        game.broadcastAll()+player.node.avatar.setBackgroundImage('extension/云将/yunhuangyueying.jpg');
    },
                        sub:true,
                    },
                },
            },
            yunlinglong:{
                audio:"ext:云将:2",
                enable:"phaseUse",
                popup:false,
                filter:function(event,player){
        return player.countCards('he',{type:'equip'})>0;
    },
                filterTarget:function (card, player, target) {
        return !target.hasSkill('yunlinglong_off');
    },
                filterCard:{
                    type:"equip",
                },
                position:"he",
                prompt:"选择一名角色恢复一点体力或摸两张牌",
                content:function(){
        target.addTempSkill('yunlinglong_off');
        target.chooseDrawRecover(2,true,get.prompt('yunlinglong'));
        player.say(["七巧玲珑心！","夫君，切勿操劳。"].randomGet());
    },
                ai:{
                    order:3,
                    expose:1,
                    result:{
                        target:10,
                    },
                },
            },
            "yunlinglong_off":{
                charlotte:true,
            },
            yunquhu:{
                audio:"ext:云将:2",
                enable:"phaseUse",
                usable:1,
                filter:function(event,player){
        if(player.countCards('h')==0) return false;
        return game.hasPlayer(function(current){
            return current.countCards('h');
        });
    },
                filterTarget:function(card,player,target){
        return player.canCompare(target);
    },
                content:function(){
        "step 0"
        player.chooseToCompare(target);
        "step 1"
        if(result.bool){
            if(game.hasPlayer(function(player){
                return player!=target&&target.inRange(player);
            })){
                player.recover();
                player.chooseTarget(function(card,player,target){
                    var source=_status.event.source;
                    return target!=source;   
                },true).set('ai',function(target){
                    return get.damageEffect(target,_status.event.source,player);
                }).set('source',target);
            }
            else{
                event.finish();
            }
        }
        else{
            player.damage(target);
            event.finish();
        }
        "step 2"
        
        if(result.bool&&result.targets&&result.targets.length){
            
            target.line(result.targets[0],'green');
            result.targets[0].damage(target);
        }
    },
                ai:{
                    order:1,
                    result:{
                        target:function(player,target){
                var att=get.attitude(player,target);
                var oc=(target.countCards('h')==1);
                if(att>0&&oc) return 0;
                var players=game.filterPlayer();
                for(var i=0;i<players.length;i++){
                    if(players[i]!=target&&players[i]!=player&&
                        target.inRange(players[i])){
                        if(get.damageEffect(players[i],target,player)>0){
                            return att>0?att/2:att-(oc?5:0);
                        }
                    }
                }
                return 0;
            },
                        player:function(player,target){
                if(target.hasSkillTag('jueqing',false,target)) return -10;
                var mn=1;
                var hs=player.getCards('h');
                for(var i=0;i<hs.length;i++){
                    mn=Math.max(mn,hs[i].number);
                }
                if(mn<=11&&player.hp<2) return -20;
                var max=player.maxHp-hs.length;
                var players=game.filterPlayer();
                for(var i=0;i<players.length;i++){
                    if(get.attitude(player,players[i])>2){
                        max=Math.max(Math.min(5,players[i].hp)-players[i].countCards('h'),max);
                    }
                }
                switch(max){
                    case 0:return mn==13?0:-20;
                    case 1:return mn>=12?0:-15;
                    case 2:return 0;
                    case 3:return 1;
                    default:return max;
                }
            },
                    },
                    expose:0.2,
                },
            },
            yunwangzuo:{
                audio:"ext:云将:2",
                trigger:{
                    player:"damageEnd",
                },
                popup:false,
                forced:true,
                content:function(){
        "step 0"
        event.count=trigger.num;
        "step 1"
        player.chooseTarget(get.prompt('yunwangzuo'),'令一名角色将手牌补充至体力上限。').set('ai',function(target){
            var att=get.attitude(_status.event.player,target);
            if(att>2){
            return Math.min(5,target.maxHp)-target.countCards('h');
                }
            return att/3;
        });
        'step 2'
        if(result.bool){
            var target=result.targets[0];
            player.logSkill('yunwangzuo',target);
            target.draw(Math.min(5,target.maxHp-target.countCards('h')));
        }
        'step 3'
        player.say(["生食汉禄，死为汉臣。","大汉岂能无守节的臣子乎！"].randomGet());
        var num=player.maxHp-player.hp;
        if(player.hp<player.maxHp){
            player.draw(num);}
    },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    effect:{
                        target:function(card,player,target,current){
                if(get.tag(card,'damage')&&target.hp>1){
                    if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                    var max=0;
                    var players=game.filterPlayer();
                    for(var i=0;i<players.length;i++){
                        if(get.attitude(target,players[i])>0){
                            max=Math.max(Math.min(5,players[i].hp)-players[i].countCards('h'),max);
                        }
                    }
                    switch(max){
                        case 0:return 2;
                        case 1:return 1.5;
                        case 2:return [1,2];
                        default:return [0,max];
                    }
                }
                if((card.name=='tao'||card.name=='caoyao')&&
                    target.hp>1&&target.countCards('h')<=target.hp) return [0,0];
            },
                    },
                },
            },
            yunqiaobian:{
                enable:"phaseUse",
                hiddenCard:function(player,name){
        return (!player.storage.yunqiaobian.contains(name)&&player.countCards('hse')>0&&lib.inpile.contains(name));
    },
                init:function(player){
        if(!player.storage.yunqiaobian) player.storage.yunqiaobian=[];
    },
                filter:function(event,player){ 
         if(player==_status.currentPhase) return true; 
    },
                chooseButton:{
                    dialog:function(event,player){
        var list=[];
            for(var i=0;i<lib.inpile.length;i++){
                var name=lib.inpile[i];
                if(player.storage.yunqiaobian.contains(name)) continue;
                if(name=='sha'){
                    list.push(['基本','','sha']);
                    list.push(['基本','','sha','fire']);
                    list.push(['基本','','sha','thunder']);
                    list.push(['基本','','sha','ice']);
                }
                else if(get.type(name)=='trick') list.push(['锦囊','',name]);
                else if(get.type(name)=='basic') list.push(['基本','',name]);
            }
            if(list.length==0){
                return ui.create.dialog('巧变已无牌可用');
            }
            return ui.create.dialog('巧变',[list,'vcard']);
        },
                    filter:function(button,player){
            return _status.event.getParent().filterCard({name:button.link[2]},player,_status.event.getParent());
        },
                    check:function(button){
            var player=_status.event.player;
            if(player.countCards('h',button.link[2])>0) return 0;
            if(button.link[2]=='wugu') return 0;
            var effect=player.getUseValue(button.link[2]);
            if(effect>0) return effect;
            return 0;
        },
                    backup:function(links,player){
            return {
                filterCard:true,
                selectCard:1,
                popname:true,
                check:function(card){
                    return 6-get.value(card);
                },
                position:'hes',
                viewAs:{name:links[0][2],nature:links[0][3]},
                onuse:function(result,player){
                    game.log(player,'发动了【巧变】');
                    player.storage.yunqiaobian.add(result.card.name);
                },
            }
        },
                    prompt:function(links,player){
            return '将一张牌当做'+(get.translation(links[0][3])||'')+get.translation(links[0][2])+'使用';
        },
                },
                ai:{
                    skillTagFilter:function(player){
            return player.countCards('hes')&&!player.storage.yunqiaobian.contains('shan');
            return player.countCards('hes')&&!player.storage.yunqiaobian.contains('wuxie');
            if(!player.storage.yunqiaobian.contains('tao')){}
            else if(player.isDying()&&!player.storage.yunqiaobian.contains('jiu')){}
            else return false;
        },
                    threaten:1.9,
                    respondShan:true,
                    order:4,
                    result:{
                        player:function(player){
                var allshown=true,players=game.filterPlayer();
                for(var i=0;i<players.length;i++){
                    if(players[i].ai.shown==0){
                        allshown=false;
                    }
                    if(players[i]!=player&&players[i].countCards('h')&&get.attitude(player,players[i])>0){
                        return 1;
                    }
                }
                if(allshown) return 1;
                return 0;
            },
                    },
                },
            },
            yunshanlve:{
                audio:"ext:云将:2",
                trigger:{
                    player:"damageEnd",
                },
                forced:true,
                content:function(){
        "step 0"
        player.judge();
        "step 1"
        if(result.color=='black'){
            player.storage.yunqiaobian=[];
        }else{
            player.draw();
        }
        player.say(["膝盖中了一箭！","就这？！"].randomGet());
    },
            },
            yunjieyi:{
                audio:"ext:云将:2",
                enable:"phaseUse",
                filterCard:function(card){
        return get.suit(card)=='heart';
    },
                selectCard:1,
                position:"he",
                usable:1,
                viewAs:{
                    name:"taoyuan",
                },
                filter:function(event,player){
        return player.countCards('he',{suit:'heart'})>0;
    },
                prompt:"将一张红桃牌当作桃园结义使用",
                check:function(card){
        return 7-get.useful(card)
    },
                group:["yunjieyi_a"],
                ai:{
                    threaten:1.5,
                    basic:{
                        order:function(){
                return 11;
            },
                        useful:[3,1],
                        value:0,
                    },
                    result:{
                        target:function(player,target){
                return (target.hp<target.maxHp)?2:0;
            },
                    },
                    tag:{
                        recover:0.5,
                        multitarget:1,
                    },
                },
                subSkill:{
                    a:{
                        trigger:{
                            global:"recoverAfter",
                        },
                        filter:function(event,player){
        return event.card&&event.card.name=='taoyuan';
    },
                        forced:true,
                        popup:false,
                        content:function(){
     player.draw();
    },
                        sub:true,
                    },
                },
            },
            yunniepan:{
                mark:true,
                marktext:"涅磐",
                unique:true,
                audio:"ext:云将:2",
                init:function (player){
        player.storage.yunniepan=1;
        player.markSkill('yunniepan');
        player.syncStorage('yunniepan');
    },
                intro:{
                    content:"mark",
                },
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                filter:function (event, player) {
        if(player.storage.yunniepan >= 9) return false;
        return true;
    },
                forced:true,
                content:function (){
        'step 0'
        player.storage.yunniepan+=1;
        player.markSkill('yunniepan');
        player.syncStorage('yunniepan');
        'step 1'
        player.gainMaxHp();
        'step 2'
        player.recover();
    },
                group:["yunniepan_a"],
                subSkill:{
                    a:{
                        trigger:{
                            player:"phaseDrawBegin",
                        },
                        popup:false,
                        forced:true,
                        check:function (event,player){
        return player.storage.yunniepan>=0;
    },
                        content:function (){
        "step 0"
        trigger.num-=2;
        "step 1"
        player.draw(player.storage.yunniepan);
    },
                        ai:{
                            threaten:1.5,
                        },
                        sub:true,
                    },
                },
            },
            yunsouji:{
                audio:"ext:云将:2",
                enable:"phaseUse",
                usable:1,
                derivation:["yunjingnang"],
                filter:function(event,player){
        return player.countCards('h')>=1;
    },
                filterTarget:function(card,player,target){
        return target!=player;
    },
                filterCard:true,
                selectCard:1,
                discard:false,
                position:"h",
                prompt:"选择一名角色获得【锦囊】",
                prepare:"give",
                content:function(){
        player.say(["打开锦囊，将北面连弩左移十步迎敌！","或许，这个锦囊能救你一命！"].randomGet());
        target.gain(cards);
        if(!get.is.altered('yunsouji'));
        target.addTempSkill('yunjingnang',{player:'phaseAfter'});
    },
                ai:{
                    threaten:1.5,
                    order:2.1,
                    result:{
                        target:function(player,target){
                if(target.hasSkillTag('nogain')) return 0;
                if(get.attitude(player,target)<3) return 0;
                if(target.hasSkill('yunjingnang')) return 0.1;
                return 1;
            },
                    },
                },
            },
            yunjingnang:{
                mark:true,
                marktext:"锦囊",
                intro:{
                    name:"计",
                    content:"快打开丞相给的【锦囊】",
                },
                enable:"phaseUse",
                usable:1,
                audio:"yunsouji",
                filter:function(event,player){
        var hs=player.getCards('h');
        if(!hs.length) return false;
        for(var i=0;i<hs.length;i++){
            var mod2=game.checkMod(hs[i],player,'unchanged','cardEnabled2',player);
        if(mod2===false) return false;
        }
        return true;
    },
                chooseButton:{
                    dialog:function(player){
            var list=[];
            for(var i=0;i<lib.inpile.length;i++){
                if(get.type(lib.inpile[i])=='trick') list.push(['锦囊','',lib.inpile[i]]);
            }
            return ui.create.dialog(get.translation('qice'),[list,'vcard']);
        },
                    filter:function(button,player){
            return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
        },
                    check:function(button){
            var player=_status.event.player;
            var recover=0,lose=1,players=game.filterPlayer();
            for(var i=0;i<players.length;i++){
                if(players[i].hp==1&&get.damageEffect(players[i],player,player)>0&&!players[i].hasSha()){
                    return (button.link[2]=='juedou')?2:-1;
                }
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
                    backup:function(links,player){
            return {
                filterCard:true,
                selectCard:1,
                position:'h',
                audio:2,
                popname:true,
                viewAs:{name:links[0][2]},
            }
        },
                    prompt:function(links,player){
            return '将一张手牌当作'+get.translation(links[0][2])+'使用';
        },
                },
                ai:{
                    order:7,
                    result:{
                        player:function(player){
                var allshown=true,players=game.filterPlayer();
                for(var i=0;i<players.length;i++){
                    if(players[i].ai.shown==0){
                        allshown=false;
                    }
                    if(players[i]!=player&&players[i].countCards('h')&&get.attitude(player,players[i])>0){
                        return 1;
                    }
                }
                if(allshown) return 1;
                return 0;
            },
                    },
                },
            },
            yunyingshi:{
                audio:"ext:云将:2",
                derivation:["yunlanggu"],
                skillAnimation:true,
                animationColor:"thunder",
                unique:true,
                juexingji:true,
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                forced:true,
                filter:function(event,player){
        return player.getStorage('yunrenjie').length>=Math.ceil(game.players.length);
    },
                content:function(){
        "step 0"
        player.maxHp=5;
        player.awakenSkill(event.name);
        player.addSkill('yunlanggu');
        player.addTempSkill('yunyingshia');
        "step 1"
        player.say(["现在是时候了！","忍无可忍，无需再忍！"].randomGet());
        player.gain(player.storage.yunrenjie,'gain2','fromStorage');
        player.unmarkAuto('yunrenjie',player.storage.yunrenjie);
        player.removeSkill('yunrenjie');
        game.broadcastAll()+player.node.avatar.setBackgroundImage('extension/云将/yunsimayi1.jpg');
    },
            },
            yunyingshia:{
                trigger:{
                    player:"phaseDrawBefore",
                },
                forced:true,
                popup:false,
                content:function(){ 
        trigger.cancel(); 
    },
            },
            yunrenjie:{
                audio:"ext:云将:2",
                trigger:{
                    global:["damageEnd"],
                },
                forced:true,
                filter:function(event,player){
        return player.getStorage('yunrenjie').length< Math.ceil(game.players.length);
    },
                content:function(){
        "step 0"
        player.draw();
        player.say(["还不到时候！还不到时候！","筹权谋变，静候天时。"].randomGet());
        'step 1'
        if(!player.countCards('he')) event.finish();
        else player.chooseCard('he',true,'选择一张牌置于'+get.translation(player)+'的武将牌上作为「忍」').set('ai',function(card){
            var player=_status.event.player;
            if(player.hasUseTarget(card)&&!player.hasValueTarget(card)) return 0;
            if(['wuxie',].contains(card.name)) return 2+Math.random();
            return 1+Math.random();
        }).set('complexCard',true);
        'step 2'
        player.lose(result.cards,ui.special,'visible','toStorage');
        player.$give(result.cards,player,false);
        game.log(player,'选择了',result.cards);
        player.markAuto('yunrenjie',result.cards);
    },
                group:["yunrenjie_a"],
                intro:{
                    content:"cards",
                    onunmark:"throw",
                },
                threaten:5,
                subSkill:{
                    a:{
                        audio:"ext:云将:2",
                        trigger:{
                            player:["dying"],
                        },
                        forced:true,
                        content:function(){
        player.gain(player.storage.yunrenjie,'gain2','fromStorage');
        player.unmarkAuto('yunrenjie',player.storage.yunrenjie);
    },
                        sub:true,
                    },
                },
            },
            yunlanggu:{
                audio:"ext:云将:2",
                mod:{
                    targetInRange:function(card,player){
            if(player.hp>=1) return true;
        },
                    cardUsable:function(card,player){
            if(player.hp>=2) return Infinity;
        },
                },
                group:["yunlanggu_a","yunlanggu_b"],
                trigger:{
                    player:"useCard2",
                },
                direct:true,
                filter:function(event,player){
        if(player.hp<3) return false;
        var card=event.card;
        var info=get.info(card);
        if(info.allowMultiple==false) return false;
        if(event.targets&&!info.multitarget){
            if(game.hasPlayer(function(current){
                return !event.targets.contains(current)&&lib.filter.targetEnabled2(card,player,current);
            })){
                return true;
            }
        }
        return false;
    },
                content:function(){
        'step 0'
        var prompt2='为'+get.translation(trigger.card)+'增加一个目标';
        player.chooseTarget(get.prompt('yunlanggu'),function(card,player,target){
            var player=_status.event.player;
            return !_status.event.targets.contains(target)&&lib.filter.targetEnabled2(_status.event.card,player,target);
        }).set('prompt2',prompt2).set('ai',function(target){
            var trigger=_status.event.getTrigger();
            var player=_status.event.player;
            return get.effect(target,trigger.card,player,player);
        }).set('card',trigger.card).set('targets',trigger.targets);
        'step 1'
        if(result.bool){
            if(!event.isMine()) game.delayx();
            event.targets=result.targets;
        }
        else{
            event.finish();
        }
        'step 2'
        if(event.targets){
            player.logSkill('yunlanggu',event.targets);
            trigger.targets.addArray(event.targets);
        }
    },
                effect:{
                    target:function(card,player,target){
            if(card.name == 'tao'){
                return [0,1];
            }
        },
                },
                subSkill:{
                    a:{
                        audio:"ext:云将:1",
                        trigger:{
                            player:"phaseDrawBegin",
                        },
                        forced:true,
                        filter:function(event,player){
        return !event.numFixed&&player.maxHp-player.hp>=2;
    },
                        content:function(){
        trigger.num++; 
    },
                        ai:{
                            threaten:1.5,
                        },
                        mod:{
                            maxHandcardBase:function(player,num){
          if(player.maxHp-player.hp>=1) return player.maxHp;
        },
                        },
                        sub:true,
                    },
                    b:{
                        audio:"ext:云将:1",
                        trigger:{
                            player:"phaseJieshuBegin",
                        },
                        forced:true,
                        filter:function(event,player){
        return !event.numFixed&&player.maxHp-player.hp>=3;
    },
                        content:function(){
        "step 0"
        player.chooseToDiscard([1,Infinity],'h').set('ai',function(card){
            return 6 - ai.get.value(card); 
        });
        "step 1"
        player.draw(player.maxHp-player.countCards('h'));
    },
                        ai:{
                            maixie:true,
                            effect:{
                                target:function(card,player,target){
                if(get.tag(card,'damage')){
                    if(!target.hasFriend()) return;
                    if(target.hp>3) return [0,1];
                }
                if(get.tag(card,'recover')&&player.hp>=player.maxHp-2) return [0,0];
            },
                            },
                        },
                        sub:true,
                    },
                },
            },
            yunzhiheng:{
                audio:"ext:云将:2",
                trigger:{
                    player:"phaseUseBegin",
                },
                forced:true,
                content:function (){
        "step 0"
        trigger.player.chooseControl('增加','减少','摸牌').set('ai',function(){
                if(Math.ceil(game.players.length)>2&&player.countCards('h','wanjian')>=1){
                    return '减少';
                }
                if(Math.ceil(game.players.length)>2&&player.countCards('h','nanman')>=1){
                    return '减少';
                }
                if(Math.ceil(game.players.length)>2&&player.countCards('h','wugu')>=1){
                    return '减少';
                }
                if(Math.ceil(game.players.length)>2&&player.countCards('h','taoyuan')>=1){
                    return '减少';
               }
                if(Math.ceil(game.players.length)>=3&&player.countCards('h','wuzhong')>=1){
                    return '增加';
               }
                if(Math.ceil(game.players.length)>=3&&player.countCards('h','guohe')>=1){
                    return '增加';
               }
                if(Math.ceil(game.players.length)>=3&&player.countCards('h','shunsou')>=1){
                    return '增加';
               }else{
                    return '摸牌';
                  }
        });
        "step 1"
        if(result.control=='增加'){
            trigger.player.addTempSkill('yunzhihenga','phaseEnd');
        }
        if(result.control=='减少'){
            trigger.player.addTempSkill('yunzhihengb','phaseEnd');
        }
        if(result.control=='摸牌'){
            player.draw(player.maxHp-player.countCards('h'));
            trigger.player.addTempSkill('yunzhihengc','phaseEnd');
        }
    },
                ai:{
                    threaten:1.5,
                },
            },
            yunzhihenga:{
                audio:"ext:云将:2",
                trigger:{
                    player:"useCard",
                },
                direct:true,
                mark:true,
                marktext:"制衡-增",
                intro:{
                    name:"制衡-增加目标",
                    content:true,
                },
                filter:function(event,player){
        var type=get.type(event.card);
        return type=='trick';
        var card=event.card;
        var info=get.info(card);
        if(info.allowMultiple==false) return false;
        if(event.targets&&!info.multitarget){
            if(game.hasPlayer(function(current){
                return !event.targets.contains(current)&&lib.filter.targetEnabled2(card,player,current);
            })){
                return true;
            }
        }
        return false;
    },
                content:function(){
        'step 0'
        var prompt2='增加'+get.translation(trigger.card)+'的目标';
        player.chooseTarget([1,Infinity],get.prompt('yunzhihenga'),function(card,player,target){
                var trigger=_status.event;
                if(trigger.targets.contains(target)) return false;
                return lib.filter.targetEnabled2(trigger.card,_status.event.player,target);
                return player!=target;
                if(event.targets.length=Math.ceil(game.players.length)) return false;
            }).set('ai',function(target){
            var trigger=_status.event.getTrigger();
            var player=_status.event.player;
            return get.effect(target,trigger.card,player,player);
        }).set('targets',trigger.targets).set('card',trigger.card);
        'step 1'
        if(result.bool){
            if(!event.isMine()) 
                game.delayx();
            event.targets=result.targets;
        }
        else{
            event.finish();
        }
        'step 2'
        if(event.targets){
            player.logSkill('yunzhihenga',event.targets);
            player.draw();
            trigger.targets.addArray(event.targets);
        }
    },
            },
            yunzhihengb:{
                audio:"ext:云将:2",
                trigger:{
                    player:"useCard",
                },
                direct:true,
                mark:true,
                marktext:"制衡-减",
                intro:{
                    name:"制衡-减少目标",
                    content:true,
                },
                filter:function(event,player){
        var type=get.type(event.card);
        return event.targets.length>1&&type=='trick';
    },
                content:function(){
        'step 0'
        player.chooseTarget([1,Infinity],'减少'+get.translation(trigger.card)+'的目标',function(card,player,target){
            return player!=target&&_status.event.targets.contains(target);
        }).set('ai',function(target){
            var trigger=_status.event.getTrigger();
            return -get.effect(target,trigger.card,trigger.player,_status.event.player);
        }).set('targets',trigger.targets);
        'step 1'
        if(result.bool){
            event.targets=result.targets;
            if(event.isMine()){
                player.logSkill('yunzhihengb',event.targets);
                player.draw(2);
                event.finish();
            }
            for(var i=0;i<result.targets.length;i++){
                trigger.targets.remove(result.targets[i]);
            }
            game.delay();
        }
        else{
            event.finish();
        }
        'step 2'
        player.logSkill('yunzhihengb',event.targets);
    },
                ai:{
                    order:function(){
    return get.order({name:'wanjian'})+5;
    return get.order({name:'nanman'})+5;
    return get.order({name:'wugu'})+5;
    return get.order({name:'taoyuan'})+5;
},
                    expose:3,
                    effect:{
                        target:function(card,player,target){
                
                if(card.name == 'wanjian'){
                    return 9;
                }
                if(card.name == 'nanman'){
                    return 9;
                }
                if(card.name == 'wugu'){
                    return 9;
                }
                if(card.name == 'taoyuan'){
                    return 9;
                }
            },
                    },
                    result:{
                        target:function (player,target){
                return -3;
            },
                    },
                },
            },
            yunzhihengc:{
                forced:true,
                mark:true,
                marktext:"制衡-牌",
                intro:{
                    name:"制衡-摸牌",
                    content:true,
                },
                mod:{
                    maxHandcardBase:function(player,num){
            return 10;
        },
                },
            },
            yunhuju:{
                audio:"ext:云将:2",
                enable:"phaseUse",
                position:"h",
                unique:true,
                charlotte:true,
                group:["yunhuju_zhu"],
                filter:function(event,player){
        return player.countCards('h',{type:'equip'})>0;
    },
                filterCard:function(card){
        return get.type(card)=='equip';
    },
                check:function(card){
        var player=_status.event.player;
        var he=player.getCards('h');
        var subtype=get.subtype(card);
        var value=get.equipValue(card);
        for(var i=0;i<he.length;i++){
            if(he[i]!=card&&get.subtype(he[i])==subtype&&get.equipValue(he[i])>=value){
                return 10;
            }
        }
        if(!player.needsToDiscard()){
            return 4-get.equipValue(card);
        }
        return 0;
    },
                content:function(){
        player.draw();
    },
                discard:false,
                visible:true,
                loseTo:"discardPile",
                prompt:"将一张装备牌置入弃牌堆并摸一张牌",
                delay:0.5,
                prepare:function(cards,player){
        player.$throw(cards,1000);
        game.log(player,'将',cards,'置入了弃牌堆');
    },
                ai:{
                    basic:{
                        order:8.5,
                    },
                    result:{
                        player:1,
                    },
                },
                subSkill:{
                    zhu:{
                        charlotte:true,
                        init:function(player){
        if(!player.isZhu){
            player.maxHp++;
            player.update();
            }
       },
                        sub:true,
                    },
                },
            },
            yunjianye:{
                audio:"ext:云将:2",
                unique:true,
                zhuSkill:true,
                limited:true,
                selectTarget:1,
                filterTarget:function(card,player,target){
        return target!=player;
    },
                derivation:"yunyuanhu",
                intro:{
                    content:"limited",
                },
                skillAnimation:true,
                mark:false,
                init:function(player){
        if(player.hasZhuSkill('yunjianye')){
            player.markSkill('yunjianye');
            player.storage.yunjianye=false;
        }
    },
                filter:function(event,player){
        return player.hasZhuSkill('yunjianye');
        return player.storage.yunjianye==false;
},
                enable:"phaseUse",
                content:function(){
    "step 0"
    player.storage.yunjianye=true;
    player.awakenSkill("yunjianye");
    game.log(target,'成为了目标');
    target.gainMaxHp();
    "step 1"
        var card=get.cardPile(function(card){ 
            return get.type(card)=='basic'; 
        }); 
        event.card=card; 
        'step 2' 
        var list=['tao'];
        target.gain(game.createCard(list.randomGet()));
        'step 3' 
    target.changeGroup('wu');
    player.addSkill('yunyuanhu');
    player.say("十万对八百，此战优势在我！");
    game.broadcastAll()+player.node.avatar.setBackgroundImage('extension/云将/yunsunquan1.jpg');
},
                ai:{
                    order:7,
                    result:{
                        target:10,
                    },
                },
                "audioname2":{
                    yuanshu:"weidi",
                },
            },
            yunyuanhu:{
                audio:"ext:云将:2",
                trigger:{
                    global:"recoverEnd",
                },
                direct:true,
                usable:1,
                filter:function(event,player){
    return player!=event.player&&event.player.group=='wu'&&event.getParent().name!='yunyuanhu'},
                content:function(){
        'step 0'
        trigger.player.chooseBool('是否对'+get.translation(player)+'发动【援护】？','你令其回复1点体力或摸两张牌').set('ai',function(){
            var evt=_status.event;
            return get.attitude(evt.player,evt.getParent().player)>0;
        });
        'step 1'
        if(result.bool){
            player.logSkill('yunyuanhu');
            trigger.player.line(player,'green');
            player.chooseDrawRecover(2,true,get.prompt('yunyuanhu'));
        }
    },
            },
            yunfujian:{
                audio:"ext:云将:7",
                trigger:{
                    global:"roundStart",
                },
                forced:true,
                filter:function(event,player){
        if(player.hasSkill('yunfujiana')) return false;
        return game.countPlayer(function (current) {
        if (current == player) return false;
        return current.countCards('h') > 0;
        });
    },
                check:function (event,player){
        return get.attitude(player,event.player)<0;
    },
                content:function () {
       'step 0'
        player.chooseTarget(true, get.prompt2(event.name), function (card, player, target) {
        return target!=player&&target.countCards('h') > 0;
        }).set('ai', function (target) {
        return 1 - get.attitude(_status.event.player, target);
        });
       'step 1'
       event.target=result.targets[0];
        player.chooseButton(['是否选择'+get.translation(event.target)+'的一张牌标记为〖间〗', event.target.getCards('h')]).set('ai', function (button) {
        return get.attitude(player,event.target)<0;
        var target = event.target;
        var card = button.link;
        var val = target.getUseValue(card);
        if (val > 0) return val;
        return get.value(card);
        });
        'step 2'
        if(result.bool){
            player.storage.yunfujiana=event.target;
            player.storage.yunfujianb=result.links[0];
            player.addSkill('yunfujiana');
            event.target.markSkill('yunfujianc');
            event.target.addTempSkill('yunfujiand','fujiand');
            
        }
    },
            },
            yunfujiana:{
                mark:true,
                intro:{
                    name:"五间",
                    mark:function(dialog,content,player){
            dialog.addText('已标记的〖间〗');
            dialog.add([content]);
            if(player==game.me||player.isUnderControl()){
                dialog.addText('间');
                dialog.add([player.storage.yunfujianb]);
            }
        },
                },
                onremove:function(player){
        delete player.storage.yunfujiana;
        delete player.storage.yunfujianb;
    },
                trigger:{
                    global:["dieEnd","loseEnd","gainEnd"],
                },
                forced:true,
                popup:false,
                silent:true,
                lastDo:true,
                charlotte:true,
                filter:function(event,player){
        if(event.name!='gain'&&event.player!=player.storage.yunfujiana) return false;
        return event.name=='die'||(event.cards.contains(player.storage.yunfujianb)&&(event.name=='gain'||event.position!=ui.ordering&&event.position!=ui.discardPile));
    },
                content:function(){
        player.removeSkill('yunfujiana');
        trigger.player.draw();
        trigger.player.removeSkill('yunfujianc');
        event.trigger('fujiand')
    },
                group:["yunfujianb"],
            },
            yunfujianb:{
                audio:"ext:云将:5",
                trigger:{
                    global:["loseAfter","useCard","respond","cardsDiscardAfter"],
                },
                filter:function(event,player){
        if(event.player&&event.player!=player.storage.yunfujiana) return false;
        if(event.name=='phase') return event.player.getCards('hej').contains(player.storage.yunfujianb);
        if(!event.cards.contains(player.storage.yunfujianb)) return false;
        return event.name=='useCard'||get.position(player.storage.yunfujianb,true)=='d'||event.position==ui.discardPile;
    },
                forced:true,
                charlotte:true,
                logTarget:"player",
                content:function(){
        if(trigger.name=='useCard'){
            trigger.all_excluded=true;
            trigger.targets.length=0;
        }
        player.removeSkill('yunfujiana');
        trigger.player.draw();
        trigger.player.removeSkill('yunfujianc');
        event.trigger('fujiand')
    },
            },
            yunfujianc:{
                intro:{
                    content:function(storage,player,skill){
            var str='';
            for(var i=0;i<game.players.length;i++){
                if(game.findPlayer(function(cur){return cur.hasSkill("yunfujiand")})==game.players[i]){
                    str+=lib.translate[game.players[i].name]+'：'
                    if(game.players[i].get('h').length==0) str+='无手牌';
                    for(var j=0;j<game.players[i].get('h').length;j++){
                        str+=lib.translate[game.players[i].get('h')[j].name]+',';
                    };
                    str+='<br>';
                };
            };
            return str;
        },
                },
                marktext:"困龙",
                forced:true,
            },
            yunfujiand:{
                charlotte:true,
            },
            yunlingrenxiaoxiong:{
                audio:"ext:云将:10",
                trigger:{
                    global:"dieAfter",
                },
                forced:true,
                popup:false,
                filter:function(event,player){
    return event.player!=player;
    },
                content:function(){
    if(player.isDamaged()){
        player.logSkill('yunlingrenxiaoxiong',event.targets);
        player.recover();
    }
    else{
        if(player.getHandcardLimit()<5){
            player.logSkill('yunlingrenxiaoxiong',event.targets);
            player.storage.yunlingrenxiaoxiong+=1;
            player.markSkill('yunlingrenxiaoxiong');
            player.syncStorage('yunlingrenxiaoxiong');
            }
        } 
    },
                init:function (player){
        player.storage.yunlingrenxiaoxiong=0;
        player.markSkill('yunlingrenxiaoxiong');
        player.syncStorage('yunlingrenxiaoxiong');
    },
                mod:{
                    maxHandcardBase:function(player,num){
            return num+player.storage.yunlingrenxiaoxiong;
        },
                },
                ai:{
                    threaten:1.5,
                },
            },
            yunlingren:{
                audio:"ext:云将:8",
                trigger:{
                    player:"useCardToPlayered",
                },
                forced:true,
                onremove:true,
                direct:true,
                unique:true,
                usable:1,
                derivation:["yunlingrenxiaoxiong"],
                group:["yunlingrenxiaoxiong"],
                init:function(player){
        player.storage.yunlingren=[];
    },
                intro:{
                    content:"characters",
                },
                filter:function(event,player){
        if(event.getParent().triggeredTargets3.length>1) return false;
        if(!['basic','trick'].contains(get.type(event.card))) return false;
        if(get.tag(event.card,'damage')) return true;
        return false;
    },
                content:function (){
        'step 0'
        player.chooseTarget(get.prompt('yunlingren'),'选择一名目标角色并猜测其手牌构成',function(card,player,target){
            return _status.event.targets.contains(target);
        }).set('ai',function(target){
            return 2-get.attitude(_status.event.player,target);
        }).set('targets',trigger.targets);
        'step 1'
        if(result.bool){
            player.logSkill('yunlingren',result.targets);
            var target=result.targets[0];
            event.target=target;
            event.choice={
                basic:false,
                trick:false,
                equip:false,
            }
            player.chooseBool('是否押基本牌？').ai=function(event,player){
                var rand=0.95;
                if(!target.countCards('h',{type:['basic']})) rand=0.05;
                if(!target.countCards('h')) rand=0;
                return Math.random()<rand?true:false;
            };
        }
        else{
            player.storage.counttrigger.yunlingren--;
            event.finish();
        }
        'step 2'
        if(result.bool){
            event.choice.basic=true;
        }
        player.chooseBool('是否押锦囊牌？').ai=function(event,player){
            var rand=0.9;
                if(!target.countCards('h',{type:['trick','delay']})) rand=0.1;
                if(!target.countCards('h')) rand=0;
                return Math.random()<rand?true:false;
        };
        'step 3'
        if(result.bool){
            event.choice.trick=true;
        }
        player.chooseBool('是否押装备牌？').ai=function(event,player){
            var rand=0.75;
                if(!target.countCards('h',{type:['equip']})) rand=0.25;
                if(!target.countCards('h')) rand=0;
                return Math.random()<rand?true:false;
        };
        'step 4'
        if(result.bool){
            event.choice.equip=true;
        }
        game.delay();
        var reality={
            basic:false,
            trick:false,
            equip:false,
        }
        var he=target.getCards('h');
        for(var i=0;i<he.length;i++){
            reality[get.type(he[i],'trick')]=true;
        }
        event.num=0;
        var tl=['basic','trick','equip'];
        for(var i=0;i<tl.length;i++){
            if(event.choice[tl[i]]==reality[tl[i]]) event.num++;
        }
        'step 5'
        player.popup('猜对'+get.cnNumber(event.num)+'项');
        game.log(player,'猜对了'+get.cnNumber(event.num)+'项');
        if(event.num>0)
            player.draw(event.num);
        if(event.num>1){
            player.addTempSkill('yunlingrena');
            player.storage.yunlingren={
                card:trigger.card,
                }
            player.say(["将军一副好骨，不如留于此山！","精兵如炬，困龙难飞。"].randomGet());
        }
        if(event.num>2){
        event.trigger('yunlingren3')
        var list=[];
        var list2=[];
        var players=game.players.concat(game.dead);
        for(var i=0;i<players.length;i++){
            list2.add(players[i].name);
            list2.add(players[i].name1);
            list2.add(players[i].name2);
        }
        for(var i in lib.character){
            if(lib.character[i][1]!='wei') continue;
            if(lib.character[i][4].contains('boss')) continue;
            if(lib.character[i][4].contains('minskin')) continue;
        var banlist=['caocao','guojia','simayi','xiahoudun','xuzhu','zhangliao','zhenji','caoying','yuncaoying',
                     'cuiyan','caoanmin','xinpi','old_caoren','jsp_caoren','old_jiakui','re_xiahouyuan','xiahouyuan',
                     'dianwei','xunyu','re_caopi','xuhuang','dengai','re_dengai','ol_dengai','caozhi','yujin','zhangchunhua',
                     'caozhang','xin_caozhang','zhonghui','guohuai','ol_guohuai','yujin_yujin','xin_yujin',
                     'xin_zhonghui','old_wangyi','xin_guohuai','re_zhonghui','liuye','tw_caoang','kuailiangkuaiyue',
                     'sunziliufang','wangji','wenyang','xin_xiahoudun','manchong','caozhen','xin_caozhen','old_caozhen',
                     'chenqun','old_chenqun','re_chenqun','hanhaoshihuan','caoxiu','old_caoxiu','guohuanghou','ol_bianfuren',
                     'jsp_guanyu','duji','zhangchangpu','re_niujin','sp_xinxianying','dufuren','wangshuang','simazhao','sp_simazhao',
                     'caizhenji','guanqiujian','wenpin','old_majun','old_caochun','caohong',
                     're_guanqiujian','old_guanqiujian','zhanggong','sp_jiangwei','sp_bianfuren','sp_huaxin','ns_xinxianying',
                     'diy_liufu','old_zhonghui','tw_caohong','yunsimayi'];
            if(banlist.contains(i))continue;
            list.push(i);
        }
        var name=list.randomGet();
        var skills=lib.character[name][3];
        for(var i=0;i<skills.length;i++){
            if(!lib.skill[skills[i]].juexingji&&!lib.skill[skills[i]].charlotte&&!lib.skill[skills[i]].dutySkill&&!lib.skill[skills[i]].hiddenSkill) 
                player.addTempSkill(skills[i],{player:'yunlingren3'});
                player.unmarkSkill(skills[i]);
                target.storage.zhuSkill_yunlingren=[skills[i]];
                game.broadcastAll()+player.node.avatar.setBackgroundImage('extension/云将/yuncaoying.jpg');
                    }
        event.dialog=ui.create.dialog('<div class="text center">'+get.translation(player)+'发动了【凌人】',[[name],'character']);
        game.delay(2);
            }
        'step 6'
        if(event.num>2){
           event.dialog.close();
            }
    },
                ai:{
                    threaten:2.4,
                },
            },
            yunlingrena:{
                trigger:{
                    source:"damageBegin",
                },
                onremove:function (player){
        delete player.storage.yunlingren;
    },
                filter:function (event,player){
        var info=player.storage.yunlingren;
        return event.card&&event.card==info.card;
    },
                silent:true,
                popup:false,
                forced:true,
                content:function (){
            trigger.num++;
    },
            },
            yunyugui:{
                audio:"ext:云将:4",
                trigger:{
                    player:["phaseZhunbeiBegin","phaseJieshuBegin"],
                },
                forced:true,
                popup:false,
                unique:true,
                bannedList:["twfuhan","refuhan","xinfu_tunjun","zhanhuo"],
                content:function(){
        'step 0'
        player.chooseTarget('是否发动【驭鬼】',function(card,player,target){
            return !target.hasSkill('yunyugui_off');
            }).set('ai',function(target){
            if(target.hasSkillTag('nogain')&&target!=_status.currentPhase) return target=player ?0:1;
            var att=get.attitude(_status.event.player,target);
            if(target=player) att=att*1.2;
            return att;
        });
        'step 1'
        if(result.bool){
        var target=result.targets[0];
        event.target=target;
        player.line(target,'green');
        player.logSkill('yunyugui',event.targets);
        var list=[];
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
                list.remove(current.name3);
                list.remove(current.name4);
                if(current.storage.rehuashen&&current.storage.rehuashen.character) list.removeArray(current.storage.rehuashen.character)
            });
            _status.characterlist=list;
        }
        _status.characterlist.randomSort();
        var chara=[];
        var skills=[];
        for(var i of _status.characterlist){
            if(i==('zhaoxiang')) continue;
            var character=lib.character[i];
            if(character&&character[3]){
                for(var j of character[3]){
                    if(skills.contains(j)||j==('refuhan')||target.hasSkill('j')) continue;
                    var info=get.info(j);
                    if(info&&info.limited){
                        skills.add(j);
                        chara.add(i);
                        continue;
                    }
                }
            }
            if(skills.length>=3) break;
        }
        if(!skills.length){event.finish();return}
        event.chara=chara;
        event.skills=skills;
        player.chooseControl(skills).set('dialog',['选择令'+get.translation(target)+'获得一个技能',[chara,'character']]);
            }else{ 
            event.finish(); 
        } 
        'step 2'
        event.trigger('yugui')
        player.say(["天法地，地法道，道法自然！","天法地，蒂法……蒂法是耶路撒冷！。"].randomGet());
        target.addTempSkill(result.control,{target:'yugui'});
        target.addTempSkill('yunyugui_off','roundStart');
        target.restoreSkill(result.control);
        target.storage.zhuSkill_yunyugui=[result.control];
        target.setAvatarQueue(target.name1||target.name,[event.chara[event.skills.indexOf(result.control)]]);
    },
                ai:{
                    expose:0.5,
                    threaten:0.5,
                },
            },
            "yunyugui_off":{
            },
            yunfengyin:{
                init:function(player,skill){
        player.addSkillBlocker(skill);
    },
                onremove:function(player,skill){
        player.removeSkillBlocker(skill);
    },
                charlotte:true,
                skillBlocker:function(skill,player){
        return !lib.skill[skill].charlotte;
    },
                mark:true,
                intro:{
                    content:function(storage,player,skill){
            var list=player.getSkills(null,false,false).filter(function(i){
                return lib.skill.baiban.skillBlocker(i,player);
            });
            if(list.length) return '武将技能已失效';
            return '无失效技能';
        },
                },
            },
            yunchengzhi:{
                audio:"ext:云将:2",
                trigger:{
                    global:"roundStart",
                    player:"damageEnd",
                },
                zgl:function() {
        var zgl = [];
        for (var i in lib.characterPack) {
            for (var j in lib.characterPack[i]) {
                var k = lib.characterPack[i][j];
                if (get.translation(j)
                    .indexOf("诸葛亮") >= 0 && k && k[3].length) zgl.add([i, j]);
            }
        }
            return zgl;
    },
                unique:true,
                mark:true,
                marktext:"承志",
                usable:1,
                init:function (player){
        player.storage.yunchengzhi=0;
        player.markSkill('yunchengzhi');
        player.syncStorage('yunchengzhi');
    },
                intro:{
                    content:function(storage,player){
            var cz=player.storage.yunchengzhi;
            var sh=player.storage.yunqilin_sh;
            var ss=player.storage.yunqilin_ss;
            return '<div>已累计获得'+(cz)+'次技能<br>已累计造成'+(sh)+'次伤害<br>已累计受到'+(ss)+'次伤害</span></div>';
        },
                },
                bannedList:["qixing","kuangfeng","dawu","guanxing","nsguanxing","nsyunxing"],
                content:function() {
        player.storage.yunchengzhi+=1;
        player.markSkill('yunchengzhi');
        player.syncStorage('yunchengzhi');
        
        if(!player.storage.yunchengzhi) player.storage.yunchengzhi=[];
        event._result={bool:true};
        
        var zgl = lib.skill.yunchengzhi.zgl();
        var sks = [];
        zgl.forEach(function(i) {
            var s = lib.characterPack[i[0]][i[1]][3];
            sks.addArray(s.filter(function(j) {
                var info = get.info(j);
                return info;
            }));
        });
        sks=sks.filter(function(c){
                return !lib.skill.yunchengzhi.bannedList.contains(c);
});       
        sks=sks.randomGets(1);
        if (sks.length) 
             if(!player.hasSkill(sks.length)){
                 event.trigger('chengzhi')
                 player.addTempSkill(sks,{player:'chengzhi'});
                 }
    },
            },
            yunchengzhig:{
                audio:"yunchengzhi",
                trigger:{
                    global:"roundStart",
                },
                zgl:function() {
        var zgl = [];
        for (var i in lib.characterPack) {
            for (var j in lib.characterPack[i]) {
                var k = lib.characterPack[i][j];
                if (get.translation(j)
                    .indexOf("诸葛亮") >= 0 && k && k[3].length) zgl.add([i, j]);
            }
        }
            return zgl;
    },
                unique:true,
                bannedList:["qixing","kuangfeng","dawu","guanxing","nsguanxing","nsyunxing"],
                content:function() {
        var zgl = lib.skill.yunchengzhig.zgl();
        var sks = [];
        zgl.forEach(function(i) {
            var s = lib.characterPack[i[0]][i[1]][3];
            sks.addArray(s.filter(function(j) {
                var info = get.info(j);
                return info;
            }));
        });
        sks=sks.filter(function(c){
                return !lib.skill.yunchengzhig.bannedList.contains(c);
});       
        sks=sks.randomGets(1);
        if (sks.length) 
             if(!player.hasSkill(sks.length)){
                 event.trigger('chengzhi')
                 player.addTempSkill(sks,{player:'chengzhi'});
                 }
    },
            },
            yunqilin:{
                derivation:["yunjuezhen","yunjueji"],
                audio:"ext:云将:2",
                skillAnimation:true,
                animationColor:"thunder",
                unique:true,
                juexingji:true,
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                forced:true,
                filter:function(event,player){
        return player.storage.yunchengzhi>=3;
    },
                mark:false,
                intro:{
                    content:"limited",
                },
                init:function(player,skill){
        player.storage[skill]=false;
    },
                content:function(){
        "step 0"
        player.awakenSkill(event.name);
        player.addSkill('yunchengzhig');   
        player.removeSkill('yunchengzhi');
        player.removeMark('yunchengzhi',Infinity);
        "step 1"
         if(player.isMaxHp()||player.isMaxHandcard()||player.isMaxEquip()||player.storage.yunqilin_sh>=3){
            player.say(["我，定不负丞相所望！"].randomGet());
            player.addSkill('yunjuezhen');
            player.removeMark('yunqilin_sh',Infinity);
            game.broadcastAll()+player.node.avatar.setBackgroundImage('extension/云将/yunjiangwei1.jpg');
            }
        if(player.isMinHp()||player.isMinHandcard()||player.isMinEquip()||player.storage.yunqilin_ss>=3){
            player.say(["一切交给我，丞相且安心去吧～"].randomGet());
            player.addSkill('yunjueji');
            player.removeMark('yunqilin_ss',Infinity);
            game.broadcastAll()+player.node.avatar.setBackgroundImage('extension/云将/yunjiangwei2.jpg');
            }
        "step 2"
        if(player.hasSkill('yunjueji')&&player.hasSkill('yunjuezhen')){
            game.broadcastAll()+player.node.avatar.setBackgroundImage('extension/云将/yunjiangwei3.jpg');
            }
        "step 3"
        if(player.hasSkill('yunjueji')||player.hasSkill('yunjuezhen')){
            player.loseMaxHp();
            }
        if(!player.hasSkill('yunjueji')&&!player.hasSkill('yunjuezhen')){
            player.say(["丞相，请告诉我，该怎么做……"].randomGet());
            player.draw(3);
            player.addSkill('yunchengzhi');   
            player.removeSkill('yunchengzhig');
            player.restoreSkill('yunqilin');
            player.removeMark('yunqilin_sh',Infinity);
            player.removeMark('yunqilin_ss',Infinity);
            game.broadcastAll()+player.node.avatar.setBackgroundImage('extension/云将/yunjiangwei4.jpg');
            }
    },
                group:["yunqilin_sh","yunqilin_ss"],
                subSkill:{
                    sh:{
                        init:function(player){ 
        player.storage.yunqilin_sh=0; 
    },
                        mark:false,
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        popup:false,
                        content:function(){ 
        if(player.storage.yunqilin_sh<=3){ 
            player.storage.yunqilin_sh++; 
        } 
    },
                        sub:true,
                    },
                    ss:{
                        init:function(player){ 
        player.storage.yunqilin_ss=0; 
    },
                        mark:false,
                        trigger:{
                            player:"damageBegin",
                        },
                        forced:true,
                        popup:false,
                        content:function(){ 
        if(player.storage.yunqilin_ss<=3){ 
            player.storage.yunqilin_ss++; 
        } 
    },
                        sub:true,
                    },
                },
            },
            yunjuezhen:{
                audio:"ext:云将:2",
                enable:"phaseUse",
                usable:1,
                locked:true,
                position:"h",
                filterCard:true,
                selectCard:-1,
                prompt:"弃置全部手牌然后将手牌摸至体力上限",
                content:function(){
        player.draw(player.maxHp-player.countCards('h'));
    },
                group:"yunjuezhen_bagua",
                ai:{
                    order:3,
                    result:{
                        player:1.5,
                    },
                    threaten:1.5,
                },
                subSkill:{
                    bagua:{
                        trigger:{
                            player:["chooseToRespondBegin","chooseToUseBegin"],
                        },
                        filter:function(event,player){
                if(event.responded) return false;
                if(!event.filterCard({name:'shan'},player,event)) return false;
                return !player.getEquip('bagua');
    },
                        check:function(event,player){
                if(event&&(event.ai||event.ai1)){
                var ai=event.ai||event.ai1;
                var tmp=_status.event;
                _status.event=event;
                var result=ai({name:'shan'},_status.event.player,event);
                _status.event=tmp;
                return result>0;
        }
                return true;
    },
                        content:function(){
               "step 0"
            player.logSkill('bagua_skill',event.targets);
            trigger.bagua_skill=true;
            player.judge('bagua',function(card){return (get.color(card)=='red')?1.5:-0.5}).judge2=function(result){
            return result.bool;
        };
              "step 1"
            if(result.judge>0){
               trigger.untrigger();
               trigger.set('responded',true);
               trigger.result={bool:true,card:{name:'shan',isCard:true}}
        }
    },
                        ai:{
                            respondShan:true,
                        },
                        sub:true,
                    },
                },
            },
            yunjueji:{
                audio:"ext:云将:2",
                enable:"phaseUse",
                usable:1,
                position:"he",
                filterCard:function(card,player,target){
        if(ui.selected.cards.length==0) return true;
        for(var i=0;i<ui.selected.cards.length;i++){
            if(get.type(ui.selected.cards[i],'trick')==get.type(card,'trick')) return false;
        }
        return true;
    },
                selectCard:[1,3],
                check:function(card) {
        var player=_status.event.player;
        var cards=ui.selected.cards||[];
        num =cards.length;
        var val=0,
            eff=0;
        for (var i=0;i<game.players.length; i++){
            if(!game.players[i].isIn()||game.players[i]==player||game.players[i].hasSkillTag('nodamage')) continue;
            eff=get.damageEffect(game.players[i],player,player);
            if (game.players[i].hp==1) eff*=1.5;
            val+=eff;
        }
        if (num==0){
            if (val<=0&&!player.isDamaged()) return 0;
            return 4-get.useful(card);
        } else if(num==1){
            if (player.isDamaged()&&get.recoverEffect(player,player,player)>0) return 6-get.useful(card);
            if (val>0) return 4-get.useful(card);
        } else if(num==2){
            if (val>0) return 3/Math.min(get.useful(card),1.5);
        } else if(num==3){
            return 2/Math.min(get.useful(card),1);
        }
        return -1;
    },
                content:function(){
        if(cards.length>=1){
           player.chooseDrawRecover(true);
        }
        if(cards.length>=2){
           game.countPlayer(function(current){
            if(current!=player){
                player.line(current,'green');
                current.chooseToDiscard('he',true);
            }
        });
      }
        if(cards.length>=3){
           game.countPlayer(function(current){
            if(current!=player){
                player.line(current,'green');
                current.damage(player);
            }
        });
      }
    },
                ai:{
                    order:7,
                    result:{
                        player:1,
                    },
                },
            },
            yunchuandao:{
                audio:"ext:云将:2",
                trigger:{
                    global:"phaseEnd",
                },
                forced:true,
                popup:false,
                filter:function(event,player){
        return player!=event.player&&player.countCards('he')>0;
    },
                content:function(){
        "step 0"
        trigger.player.link(true);
        "step 1"
        if(trigger.player.isDamaged()){
        player.chooseToDiscard('he','是否弃置一张牌令'+get.translation(trigger.player)+'恢复一点体力').set('ai',function(card){
            if(get.attitude(player,trigger.player)<=0) return false;
            return 6 - ai.get.value(card);
        });
            }
        "step 2"
        if(result.bool){
            trigger.player.recover();
            if(player.hasSkill('yundunshu')&&trigger.player.group=='qun'){
                player.changeHujia();
            }
        }
    },
                mod:{
                    maxHandcard:function(player,num){
            var sx=game.countPlayer(function(current){
            return current.isLinked();
        })
            return num+=sx
          },
                },
                ai:{
                    effect:{
                        target:function(card){
                if(card.name=='tiesuo') return 'zeroplayertarget';
            },
                    },
                },
                group:["yunchuandao_f"],
                subSkill:{
                    f:{
                        trigger:{
                            player:["linkBefore","enterGame"],
                            global:"phaseBefore",
                        },
                        forced:true,
                        popup:false,
                        filter:function(event,player){
        if(event.name=='link') return player.isLinked();
        return (event.name!='phase'||game.phaseNumber==0)&&!player.isLinked();
    },
                        content:function(){
        if(trigger.name!='link') player.link(true);
        else trigger.cancel();
    },
                        sub:true,
                    },
                },
            },
            yuntaiping:{
                audio:"ext:云将:2",
                trigger:{
                    player:"damageBegin3",
                },
                forced:true,
                filter:function(event){
        return event.nature=='thunder';
    },
                content:function (){
        trigger.cancel();
        var num=trigger.num
           player.recover(num); 
           player.draw(num); 
    },
                ai:{
                    nofire:true,
                    effect:{
                        target:function(card,player,target,current){
                if(get.tag(card,'thunderDamage')) return 'zerotarget';
            },
                    },
                },
                group:["yuntaiping_lei","yuntaiping_mp"],
                subSkill:{
                    lei:{
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        popup:false,
                        filter:function(event){
                return event.notLink();
            },
                        content:function(){
                trigger.nature='thunder';
            },
                        sub:true,
                    },
                    mp:{
                        trigger:{
                            global:"damageEnd",
                        },
                        popup:false,
                        prompt:function (event, player) {
        var str = '';
        str += '是否对' + get.translation(event.player) + '发动【太平】令其摸两张牌？'
        return str;
    },
                        check:function (event,player){
                return event.player.identity!='nei'&&get.attitude(player,event.player)>0;
        },
                        filter:function (event,player) {
                return event.nature=='thunder'&&event.player!=player&&event.player.isAlive();
           },
                        content:function(){
                trigger.player.draw(2);
                if(player.hasSkill('yundunshu')&&trigger.player.group=='qun'){
                   trigger.player.changeHujia();
            }
           },
                        sub:true,
                    },
                },
            },
            yunhuangtian:{
                audio:"ext:云将:2",
                unique:true,
                zhuSkill:true,
                limited:true,
                selectTarget:1,
                filterTarget:function(card,player,target){
        return target!=player;
    },
                derivation:"yundunshu",
                intro:{
                    content:"limited",
                },
                skillAnimation:true,
                mark:false,
                init:function(player){
        if(player.hasZhuSkill('yunhuangtian')){
            player.markSkill('yunhuangtian');
            player.storage.yunhuangtian=false;
        }
    },
                filter:function(event,player){
        return player.hasZhuSkill('yunhuangtian');
        return player.storage.yunhuangtian==false;
        return !player.hasJudge('fulei');
},
                enable:"phaseUse",
                content:function(){
    "step 0"
    player.storage.yunhuangtian=true;
    player.awakenSkill("yunhuangtian");
    game.log(target,'成为了目标');
    target.gainMaxHp();
    "step 1"
    var card=get.cardPile(function(card){ 
        return get.type(card)==('trick'); 
    }); 
    event.card=card; 
   'step 2' 
   var list=['fulei'];
    if(event.card){ 
       player.addJudge({name:'fulei'},event.card);
    } 
        'step 3' 
    target.changeGroup('qun');
    player.addSkill('yundunshu');
    game.broadcastAll()+player.node.avatar.setBackgroundImage('extension/云将/yunzhangjiao1.jpg');
},
                ai:{
                    order:7,
                    result:{
                        target:10,
                    },
                },
            },
            yundunshu:{
                audio:"ext:云将:2",
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                forced:true,
                filter:function(event,player){
        return !game.hasPlayer(function(current){
            return current.hasJudge('fulei');
        });
    },
                content:function(){
        "step 0"
    var card=get.cardPile(function(card){ 
        return get.type(card)==('trick'); 
    }); 
    event.card=card; 
   'step 1' 
   var list=['fulei'];
    if(event.card){ 
       player.addJudge({name:'fulei'},event.card);
    } 
    },
            },
        },
        translate:{
            yunshenyi:"神裔",
            "yunshenyi_info":"锁定技：你的手牌数低于体力上限时，补充至体力上限。",
            yunshenzi:"神姿",
            "yunshenzi_info":"一回合限一次：场上有角色受到伤害／体力流失后，你选择一项：1、你摸一张牌；2、你获得其一个技能。",
            yuntianming:"天命",
            "yuntianming_info":"觉醒技：濒死时将体力回复至体力上限并摸等量的牌，然后获得【神权】。",
            yunshenquan:"神权",
            "yunshenquan_info":"出牌阶段：你可观看其他角色的手牌，然后将其手牌/装备区的牌当做你的手牌使用。",
            yunshenquana:"神权",
            "yunshenquana_info":"",
            yunjilve:"极略",
            "yunjilve_info":"你可以将一张牌当做任意基本牌或锦囊牌使用或打出。（一回合每种牌名限一次）",
            yunyice:"遗策",
            "yunyice_info":"锁定技：你每受到一点伤害后摸X张牌，并可以将最多两张手牌交给一至两名角色；之后你进行一次判定：若结果为红色：你恢复一点体力；黑色：你选择一名角色弃置其区域一张牌。（X为你已损失的体力值）",
            yunyicea:"遗策",
            "yunyicea_info":"当你受到伤害结束后进行一次判定：若结果为红色：你恢复一点体力；黑色：你选择一名角色弃置其区域一张牌。",
            yunguimou:"鬼谋",
            "yunguimou_info":"一名其他角色的准备阶段：你可以与其拼点，若你赢，则可视为使用一张普通锦囊牌；若你没赢，则受到一点伤害。",
            yunguimoua:"鬼谋",
            "yunguimoua_info":"",
            yunqizhi:"奇制",
            "yunqizhi_info":"①:出牌阶段你使用牌指定目标后，可以弃置一名角色一张牌，然后其摸一张牌。②:弃牌阶段前你摸X张牌，若X不小于你的体力值，则你获得【持重】直到你下个回合开始。(X为你出牌阶段发动【奇制】的次数)",
            yuntanlang:"贪狼",
            "yuntanlang_info":"锁定技：你的身份为[主公]／［主帅］／[地主]时不增加体力上限。其他角色的准备阶段，若你的手牌数小于体力上限，你摸一张牌。",
            yunwushuang:"无双",
            "yunwushuang_info":"锁定技：准备阶段，你令所有其他角色的非锁定技失效，获得技能【极武】直到回合结束。",
            yunjiwu:"极武",
            "yunjiwu_info":"",
            yunjiwua:"极武",
            "yunjiwua_info":"",
            yunjiwub:"极武",
            "yunjiwub_info":"",
            yunqixing:"祈星",
            "yunqixing_info":"摸牌阶段后：你展示牌堆顶的七张牌，然后可以使用其中有合法目标的锦囊牌，弃置其余不能使用的牌。",
            yunbazhen:"八阵",
            "yunbazhen_info":"一回合限一次：其他角色使用牌指定你为目标后，你可以令此牌对你无效。",
            yunshelve:"涉略",
            "yunshelve_info":"准备阶段：你可以选择获得场上一名角色的通常技能直到你下个回合开始。",
            yunbotu:"博图",
            "yunbotu_info":"你使用锦囊牌时，随机获得一张备牌。",
            yunkeji:"克己",
            "yunkeji_info":"你受到伤害前，可以弃置一张装备牌抵消此伤害并摸一张牌。",
            yunshenquanc:"神权",
            "yunshenquanc_info":"",
            yunduorui:"夺锐",
            "yunduorui_info":"你对其他角色造成伤害后可令其获得【丧胆】状态，并使其所有技能直到其回合结束前无效。",
            yunzhiti:"止啼",
            "yunzhiti_info":"锁定技：若场上受伤角色不小于一：你摸牌阶段额外摸一张牌，出牌阶段可额外使用一张【杀】，手牌上限额外加一；不小于二：每名已【丧胆】的角色一回合一次，其摸牌阶段外获得牌后，你可获得其一张牌；不小于三：已受伤的其他角色手牌上限减半（向上取整），并废除已受伤的【丧胆】角色装备栏。",
            yunzhitic:"止啼",
            "yunzhitic_info":"若场上已受伤的角色不小于三且你已受伤，则你废除装备栏；若场上已受伤的角色小于三或你未受伤，则恢复已废除的装备栏。",
            yunjieyin:"结姻",
            "yunjieyin_info":"限定技：出牌阶段，你可选择与一名角色结为〖情缘〗。",
            yunqingyuan:"情缘",
            "yunqingyuan_info":"你摸牌阶段多摸一张牌，你的『情缘』摸牌/恢复体力时，你摸一张牌/恢复一点体力。",
            yunxiaoji:"枭姬",
            "yunxiaoji_info":"锁定技：摸牌阶段你额外获得一张装备牌；你使用装备牌时获得额外效果:①装备武器时摸两张牌；②装备防具时恢复一点体力；③装备防御马时获得一张锦囊牌；④装备进攻马时获得一张基本牌；⑤装备宝物时获得一张装备牌。",
            yunshangce:"上策",
            "yunshangce_info":"你使用的【杀】无视距离／不可闪避。",
            yunzhongce:"中策",
            "yunzhongce_info":"出牌阶段限一次：你可以弃置一名角色区域内一张牌。",
            yunxiace:"下策",
            "yunxiace_info":"结束阶段你将手牌摸至五张。",
            yunxiance:"献策",
            "yunxiance_info":"一名角色的准备阶段：你可以弃置一张牌令其选择获得以下一项直到其回合结束：〖上策〗、使用的【杀】无视距离，不可被响应；〖中策〗、出牌阶段限一次，可弃置一名角色区域内一张牌；〖下策〗、结束阶段时将手牌摸至五张。",
            yunfengming:"凤鸣",
            "yunfengming_info":"觉醒技：你进入濒死阶段时，将体力和体力上限调整为一，获得【涅磐】失去【献策】。",
            yunzongyu:"总御",
            "yunzongyu_info":"主公技：限定技：出牌阶段，你可令一名其他角色增加一点体力上限并摸两张牌，将其势力更改为『魏』，然后你获得【魏武】。",
            yunweiwua:"魏武",
            "yunweiwua_info":"结束阶段：你可令一名体力值不大于你的其他『魏』势力角色恢复一点体力。",
            yunxieling:"挟令",
            "yunxieling_info":"限定技:出牌阶段：你可以指定一名体力值大于你的角色，令有牌的其余角色选择一项：1、对你指定的角色使用一张【杀】；2、令你获得其一张牌。",
            yunguixin:"归心",
            "yunguixin_info":"你使用【杀】指定目标／被【杀】指定时，可弃置一张手牌切换至【雄略】，并获得目标一张牌。",
            yunxionglve:"雄略",
            "yunxionglve_info":"出牌阶段：你可以弃置一张手牌切换至【归心】，并获得一张锦囊牌。",
            yunguayin:"挂印",
            "yunguayin_info":"觉醒技：场上有角色死亡时，若你对其造成过伤害，你变更势力为『蜀』，修改【义绝】效果并获得【武圣】和一个〖傲〗标记。",
            yunyijuea:"义绝",
            "yunyijuea_info":"",
            yunyijueb:"义绝",
            "yunyijueb_info":"锁定技：你使用【杀】指定目标后，将目标体力调整为一，结束阶段目标将体力恢复至上限。",
            yunwusheng:"武圣",
            "yunwusheng_info":"锁定技：你杀死一名角色后，若你拥有的〖傲〗标记数小于体力上限，则你失去一点体力上限获得一个〖傲〗；你的手牌上限加X，计算与其他角色的距离减X，其他角色计算与你的距离锁定为X，摸牌阶段额外摸X张牌。（X为你拥有的〖傲〗标记数）",
            yunqieting:"窃听",
            "yunqieting_info":"锁定技：每回合限一次，你攻击范围内的角色使用牌时，你获得其一张牌。",
            yunxianzhou:"献州",
            "yunxianzhou_info":"锁定技：你受到伤害后，需将全部手牌交给一名其他角色。",
            yunweiwub:"魏武",
            "yunweiwub_info":"",
            yunshangshi:"伤逝",
            "yunshangshi_info":"锁定技：你的手牌数低于〖恨〗标记数量时，将手牌摸充至〖恨〗的标记数量；你的回合内有角色死亡后你失去全部〖恨〗标记。",
            yunjueqing:"无情",
            "yunjueqing_info":"锁定技：你造成或受到的伤害均视为体力流失。场上有角色体力流失时，若你拥有的〖恨〗标记小于体力上限，你获得一个〖恨〗标记。",
            yunjuekou:"绝口",
            "yunjuekou_info":"一回合各限一次：1、一名角色受到伤害后，你可以弃置至多X张手牌令伤害来源失去一点体力；2、你回复体力后，可弃置至多X张手牌。（X为你拥有的〖恨〗标记数）",
            yunlianzhu:"连株",
            "yunlianzhu_info":"出牌阶段限一次：选择一名没有〖株〗的其他角色，令其获得〖株〗标记，有〖株〗标记的角色受到伤害时你摸一张牌。",
            yunlianzhua:"株",
            "yunlianzhua_info":"其他角色计算与你的距离为一，你受到伤害时，伤害来源摸一张牌或恢复一点体力，然后你移除〖株〗标记。",
            yunjiaoheng:"娇蛮",
            "yunjiaoheng_info":"主公技：限定技：一名其他角色死亡时，你可以弃置所有手牌，将其替换为『董卓』，身份设定为『忠』进行游戏。",
            yundongbai:"董白",
            "yundongbai_info":"爷爷，他们欺负我！",
            yundongzuo:"董卓",
            "yundongzuo_info":"谁敢欺负我的宝贝孙女！",
            yunbaonve:"暴虐",
            "yunbaonve_info":"锁定技：你的手牌上限始终为零，除『董白』以外其他角色的准备阶段时，你视为对其使用一张【杀】。",
            yunchongni:"宠溺",
            "yunchongni_info":"锁定技：你不会对『董白』造成伤害，『董白』受到伤害后你失去一点体力;你失去体力时令『董白』恢复一点体力，你造成伤害时令『董白』摸一张牌。",
            yunchongnia:"宠溺",
            "yunchongnia_info":"",
            yunyeyan:"业炎",
            "yunyeyan_info":"限定技：出牌阶段你可以弃置装备区所有牌，然后对一名其他角色造成等量的火属性伤害。",
            yunguqu:"顾曲",
            "yunguqu_info":"锁定技：你视为拥有【英姿】。一回合限一次：一名其他角色使用非装备牌时，你可弃置一张花色相同的手牌令其无效；然后若此牌为：红色、你摸一张牌；黑色、你弃置一名角色区域内一张牌。",
            yunyingzi:"英姿",
            "yunyingzi_info":"锁定技：你的手牌上限始终等于体力上限，准备阶段你选择一项：1、获得一张装备牌；2、获得一张【铁索连环】。",
            yunzhaolie:"昭烈",
            "yunzhaolie_info":"出牌阶段：你可以弃置任意张牌并选择一名此回合未对其发动过【昭烈】的其他角色，令其摸等量的牌，获得【武圣】【咆哮】【龙胆】【铁骑】【烈弓】之一直到其回合结束。",
            yunzhaoliea:"昭烈",
            "yunzhaoliea_info":"你可以将一张红色牌当做【杀】使用或打出。使用的方片杀没有距离限制。",
            yunzhaolieb:"昭烈",
            "yunzhaolieb_info":"你使用【杀】无次数限制；当你使用的【杀】被【闪】抵消时，获得一枚〖咆〗。你使用【杀】造成伤害时，弃置所有“咆”并令伤害值+X。（X为〖咆〗数）",
            yunzhaoliec:"昭烈",
            "yunzhaoliec_info":"你可以将一张【杀】当做【闪】、【闪】当做【杀】、【酒】当做【桃】、【桃】当做【酒】使用或打出。",
            yunzhaolied:"昭烈",
            "yunzhaolied_info":"你使用【杀】指定一名角色为目标后，可以进行一次判定并令该角色的非锁定技失效直到回合结束，除非该角色弃置一张与判定结果花色相同的牌，否则不能使用【闪】抵消此【杀】。",
            yunzhaoliee:"昭烈",
            "yunzhaoliee_info":"你使用【杀】可以选择你距离不大于此【杀】点数的角色为目标；当你使用【杀】指定一个目标后，你可以根据下列条件执行相应的效果：1.其手牌数小于等于你的手牌数，此【杀】不可被【闪】响应，2.其体力值大于等于你的体力值，此【杀】伤害+1。",
            yunsangu:"三顾",
            "yunsangu_info":"主公技：限定技：出牌阶段，你可令一名其他角色增加一点体力上限并恢复一点体力，将其势力更改为『蜀』，然后你获得【仁德】。",
            yunrende:"仁德",
            "yunrende_info":"场上其他『蜀』势力角色每轮限一次，其获得牌后，可令你摸一张牌。",
            yunwanjun:"万军",
            "yunwanjun_info":"出牌阶段：你可以弃置两张牌，选择一名未对其发动过【万军】的其他角色，视为对其使用一张无视距离／无视防具／不可闪避／不计入次数的【雷杀】。",
            yunwanjuna:"万军",
            "yunwanjuna_info":"",
            yunyongzhi:"猛智",
            "yunyongzhi_info":"结束阶段：你摸X张牌，若你已受伤，则额外获得一张【酒】；你的【酒】无使用次数限制／不计入手牌上限。(X为你此回合造成伤害的值，最多为三)",
            yunbiyue:"闭月",
            "yunbiyue_info":"锁定技：你的手牌上限加X；当你的手牌数大于体力值时，你不会成为【杀】或【决斗】的目标。（X为你的体力值）",
            yunmeihuo:"魅惑",
            "yunmeihuo_info":"出牌阶段限一次：你可指定两名其他角色拼点，赢的角色视为对输的角色使用一张【决斗】，若平点则双方各自视为被对手使用一张【决斗】。",
            yunzhiba:"制霸",
            "yunzhiba_info":"场上其他『吴』势力角色在出牌阶段限一次：可以交给你一张装备牌，然后其摸两张牌。",
            yunzhibaa:"制霸",
            "yunzhibaa_info":"",
            yunxianxi:"献玺",
            "yunxianxi_info":"主公技：限定技：出牌阶段，你可令一名其他角色增加一点体力上限并随机使用一张装备牌，将其势力更改为『吴』，然后你获得【制霸】。",
            yunjiang:"激昂",
            "yunjiang_info":"锁定技：你因【决斗】对其他角色造成伤害后摸两张牌并获得目标【决斗】中打出的所有【杀】。",
            yunyingyang:"鹰扬",
            "yunyingyang_info":"出牌阶段：你可弃置X张装备牌并选择一名其他角色，视为对其使用一张【决斗】(X为你此阶段发动过【鹰扬】的次数加一)；一回合限一次：你于回合外受到伤害后，可视为对伤害来源使用一张【决斗】。",
            "yunwanjun_off":"万军",
            "yunwanjun_off_info":"你吼那么大声干嘛！",
            "yunzhaolie_off":"昭烈",
            "yunzhaolie_off_info":"臣岂敢不效死力！",
            yunbugua:"问卦",
            "yunbugua_info":"场上角色出牌阶段可以令你获得一个〖诛〗并进行一次判定；若结果为红色：其摸一张牌；黑色：你摸一张牌。",
            yunbuguaa:"问卦",
            "yunbuguaa_info":"",
            yunfuzhu:"伏诛",
            "yunfuzhu_info":"出牌阶段：你可移除全部的〖诛〗，视为对一名角色使用一张无视距离／不计入次数／伤害为X的【杀】。(X为你移除的〖诛〗标记数)",
            "yunfuzhu_sha":"伏诛",
            "yunfuzhu_sha_info":"",
            yundanlie:"胆裂",
            "yundanlie_info":"你计算与其他角色的距离时始终加X，其他角色计算与你的距离始终减X，你恢复体力后移除【胆裂】。（X为你的体力值）",
            yunyicong:"义从",
            "yunyicong_info":"锁定技：每回合各限一次：①你被【杀】指定为目标时，视为对此【杀】的来源使用一张【杀】；②你使用【杀】造成伤害时摸一张牌并令目标获得【胆裂】。",
            yunwansha:"完杀",
            "yunwansha_info":"你的回合内：其他角色进入濒死状态时，你可令其进行一次判定，若结果为：红色、你令其失去所有技能直到其回合结束；黑色、你令其死亡。",
            yunchizhong:"持重",
            "yunchizhong_info":"锁定技：你弃牌阶段时手牌上限额外加X/2（向上取整），不会成为延时锦囊的目标。",
            yunjimou:"极谋",
            "yunjimou_info":"锁定技：准备阶段你获得【控局】直到回合结束；结束阶段你获得【帷幄】直到回合开始。",
            yunkongju:"控局",
            "yunkongju_info":"你使用红色的基本牌／普通锦囊牌可额外结算一次。",
            yunweiwo:"帷幄",
            "yunweiwo_info":"锁定技：其他角色使用的黑色牌不能指定你为目标。",
            yunjiance:"间策",
            "yunjiance_info":"出牌阶段限一次：你可以将一张手牌交给一名其他角色，令其与另一名角色拼点，赢的角色弃置两张牌，没赢的角色受到一点伤害。",
            yunzhujing:"筑京",
            "yunzhujing_info":"弃牌阶段：若你拥有的护甲值不大于体力上限，你可以弃置任意张牌获得等量的护甲。锁定技：你的护甲抵挡伤害时摸一张牌。",
            yunyangwei:"扬威",
            "yunyangwei_info":"锁定技：你带有〖伤害〗标签的牌均视为【杀】，你使用的红色【杀】伤害加一；黑色【杀】对没有发动过【义绝】的角色无次数限制。",
            yunxiongcai:"雄才",
            "yunxiongcai_info":"游戏开始时：你选择获得【雄略】或【归心】，你每次发动【雄略】或【归心】时若手牌数低于体力上限，你摸一张牌。雄略：出牌阶段，你可以弃置一张手牌切换至【归心】并获得一张锦囊牌；归心：你使用【杀】指定目标／被【杀】指定为目标时，可弃置一张手牌切换至【雄略】并获得目标／【杀】的使用者一张牌。",
            yunlongdan:"龙胆",
            "yunlongdan_info":"你可将任意一张手牌当做【杀】【闪】使用或打出；出牌阶段你使用【杀】的次数加X。（X为你已损失的体力值）",
            yunlonglie:"龙烈",
            "yunlonglie_info":"锁定技：你每回合发动【龙胆】首次使用或打出一种花色的牌后，若为：红桃、你恢复一点体力；方块、你摸两张牌；黑桃、你可令一名体力值不小于你的其他角色受到一点伤害；梅花：、你可弃置一名其他角色一张牌。",
            yunqiqiao:"奇巧",
            "yunqiqiao_info":"每回合限一次：你攻击范围内其他角色使用装备牌时，你可以获得该装备的复制牌。",
            yunquhu:"驱虎",
            "yunquhu_info":"出牌阶段限一次：你可选择与一名角色拼点，若你赢：则你恢复一点体力，并令其对你指定的一名角色造成一点伤害；若你没赢：其对你造成一点伤害。",
            yunwangzuo:"王佐",
            "yunwangzuo_info":"锁定技：当你受到伤害后，可令一名角色将手牌补至体力上限（最多五张），然后你摸X张牌。（X为你已损失的体力值）",
            yunqiaobian:"巧变",
            "yunqiaobian_info":"出牌阶段：你可以将一张牌当做任意基本牌或非延时锦囊牌使用。（每种牌名限一次）",
            yunshanlve:"善略",
            "yunshanlve_info":"锁定技：你受到伤害后进行一次判定，若结果为黑色：你重置【巧变】使用过的牌，否则你摸一张牌。",
            yunlinglong:"玲珑",
            "yunlinglong_info":"出牌阶段每名角色各限一次：你可以弃置一张装备牌，令一名角色恢复一点体力或者摸两张牌。",
            yunjilvea:"极略",
            "yunjilvea_info":"",
            yunjieyi:"结义",
            "yunjieyi_info":"出牌阶段限一次：你可以将一张红桃牌当做〖桃园结义〗使用。场上有角色因〖桃源结义〗恢复体力时，你摸一张牌。",
            yunniepan:"涅磐",
            "yunniepan_info":"锁定技：准备阶段，若你拥有的『涅磐』标记小于九，你获得一个『涅磐』标记，然后增加一点体力上限并恢复一点体力；摸牌阶段：你改为摸X张牌。（X为你拥有的『涅磐』标记数）",
            "yunlinglong_off":"玲珑",
            "yunlinglong_off_info":"已经被【玲珑】选择过。",
            yunyijue:"义绝",
            "yunyijue_info":"你使用【杀】指定目标后，可以摸一张牌然后将目标体力调整为一，若如此做，结束阶段目标将体力恢复至上限。",
            yunsouji:"授计",
            "yunsouji_info":"出牌阶段限一次：你可以将一张手牌交给一名其他角色，令其获得【锦囊】直到其回合结束。",
            yunjingnang:"锦囊",
            "yunjingnang_info":"出牌阶段限一次：你可以将一张牌当做任意普通锦囊牌使用。",
            yunyingshi:"鹰视",
            "yunyingshi_info":"觉醒技：准备阶段，若你武将牌上的〖忍〗不小于场上存活人数，你将所有〖忍〗加入手牌，体力上限调整为五，然后跳过摸牌阶段并失去【忍戒】获得【狼顾】。",
            yunrenjie:"忍戒",
            "yunrenjie_info":"锁定技：你濒死时将所有〖忍〗加入手牌；场上有角色受到伤害后，若你拥有的〖忍〗小于场上存活人数，你摸一张牌然后将一张牌置于武将牌上称为〖忍〗。",
            yunqingyuana:"情缘",
            "yunqingyuana_info":"你摸牌/恢复体力时，你的【情缘】摸一张牌/恢复一点体力。",
            yunlanggu:"狼顾",
            "yunlanggu_info":"锁定技：1、你使用牌时若你的体力值不小于一点：无距离限制；不小于两点：无次数限制；不小于三点：可额外指定一个目标；2、若你已损失的体力值不小于一点：你的手牌上限等于体力上限；不小于两点：摸牌阶段额外摸一张牌；不小于三点：结束阶段你可弃置任意张手牌，然后将手牌补充至体力上限。",
            yunzhiheng:"制衡",
            "yunzhiheng_info":"出牌阶段前你选择一项：1、你本回合使用普通锦囊牌时可以增加任意其他角色为目标，若如此，你摸一张牌；2、你本回合你使用普通锦囊牌时可以减少任意其他角色为目标，若如此，你摸两张牌；3、你将手牌数摸至体力上限，本回合手牌上限为十。",
            yunzhihenga:"制衡",
            "yunzhihenga_info":"你使用的普通锦囊牌可以增加任意其他角色为目标，若如此，你摸一张牌。",
            yunzhihengb:"制衡",
            "yunzhihengb_info":"你使用的普通锦囊牌时可以减少任意其他角色为目标，若如此，你每摸两张牌。",
            yunjianye:"建业",
            "yunjianye_info":"主公技：限定技：出牌阶段，你可令一名其他角色增加一点体力上限并获得一张【桃】，将其势力更改为『吴』，然后你获得【援护】。",
            yunyuanhu:"援护",
            "yunyuanhu_info":"一回合一次：场上其他『吴』势力角色恢复体力后，其可以令你恢复一点体力或摸两张牌。",
            yunzhihengc:"制衡",
            "yunzhihengc_info":"你将手牌补充至体力上限，本回合手牌上限为十。",
            yunfujian:"伏间",
            "yunfujian_info":"一轮游戏开始时：若场上没有〖间〗，你选择一名其他角色观看其手牌，然后可将其中一张牌标记为〖间〗；你记录有〖间〗的角色手牌，且〖间〗被其使用时取消〖间〗所有目标，〖间〗离开其手牌时其摸一张牌并移除标记。",
            yunlingrenxiaoxiong:"枭雄",
            "yunlingrenxiaoxiong_info":"锁定技：场上其他角色死亡后你的手牌上限加一（最多加至五），若你已受伤则改为恢复一点体力。",
            yunlingren:"凌人",
            "yunlingren_info":"锁定技：你视为拥有【枭雄】。一回合一次：你使用带有『伤害』标签的牌指定目标后，可猜测其中的一个目标的手牌中是否有基本牌／锦囊牌／装备牌，若猜中的项目数不小于一：你摸猜中项目数量的牌；不小于二：此牌造成的伤害加一；不小于三：你随机获得一个『魏』势力角色的技能直到你再次因【凌人】获得技能。（觉醒技、隐匿技、使命技除外）",
            yunlingrena:"凌人",
            "yunlingrena_info":"",
            yunyijuec:"义绝",
            "yunyijuec_info":"云长傲上而不忍下，欺强而不凌弱。忠义冠盖天下！",
            yunyingshia:"鹰视",
            "yunyingshia_info":"",
            yunrendea:"仁德",
            "yunrendea_info":"刘备还是个忠厚人呐～",
            yunfujiana:"伏间",
            "yunfujiana_info":"",
            yunfujianb:"伏间",
            "yunfujianb_info":"",
            yunfujianc:"困龙",
            "yunfujianc_info":"",
            yunlongliea:"龙烈",
            "yunlongliea_info":"",
            yunfujiand:"困龙",
            "yunfujiand_info":"我们中出了一个奸细！",
            yunjiwuc:"极武",
            "yunjiwuc_info":"",
            yunjiwud:"极武",
            "yunjiwud_info":"",
            yunjiwue:"极武",
            "yunjiwue_info":"你使用【杀】／【决斗】指定目标时，可弃置一张手牌令此【杀】／【决斗】对目标造成的伤害加一；若目标因此进入濒死状态，你令其死亡。",
            yunyugui:"驭鬼",
            "yunyugui_info":"准备阶段／结束阶段：你可以选择一名本轮未成为过【驭鬼】目标的角色，其获得一个由你选择的限定技，若其已因【驭鬼】获得过限定技，则替换并重置之。",
            "yunyugui_off":"驭鬼",
            "yunyugui_off_info":"",
            yunhuju:"虎踞",
            "yunhuju_info":"锁定技：你的身份不为[主公]／［主帅］／[地主]／时增加一点体力上限。出牌阶段你可以重铸手牌里的装备牌。",
            yunfengyin:"封印",
            "yunfengyin_info":"那个男人……",
            yunchengzhi:"承志",
            "yunchengzhi_info":"一回合限一次：一轮游戏开始时／受到伤害后，你可随机获得武将名为『诸葛亮』的一个技能直到你再次因【承志】获得技能。",
            yunqilin:"麒麟",
            "yunqilin_info":"觉醒技：准备阶段，若你已因【承志】获得过至少三次技能，则你失去一点体力上限并取消【承志】的受伤发动时机，然后根据已满足的条件执行以下效果：你造成过伤害的次数不小于三或体力／手牌／装备数为场上最高，获得【绝阵】；你受到过伤害的次数不小于三或体力／手牌／装备数为场上最低，获得【绝计】；以上条件均不满足，你摸三张牌，视为未发动【麒麟】并重置之。",
            yunjuezhen:"绝阵",
            "yunjuezhen_info":"出牌阶段限一次：你可以弃置全部手牌，然后将手牌补充至体力上限；你始终视为装备有【八卦阵】。",
            yunchengzhig:"承志",
            "yunchengzhig_info":"一轮游戏开始时：你可随机获得武将名为『诸葛亮』的一个技能直到你再次因【承志】获得技能。",
            yunjueji:"绝计",
            "yunjueji_info":"出牌阶段限一次：你可以弃置最多三张不同类型的牌执行以下效果：不小于一张、你恢复一点体力或摸一张牌；不小于两张、令场上其他角色弃置一张牌；不小于三张、对场上其他角色造成一点伤害。",
            yunzhitie:"止啼",
            "yunzhitie_info":"",
            yunsangdan:"丧胆",
            "yunsangdan_info":"若场上已受伤角色不小于三且你已受伤，则你的装备栏废除；若场上已受伤的角色少于三或你未受伤，则你恢复已废除的装备栏。",
            yunsangdana:"丧胆",
            "yunsangdana_info":"",
            yunduoruia:"夺锐",
            "yunduoruia_info":"已被夺锐。",
            "yunzhiti_off":"止啼",
            "yunzhiti_off_info":"",
            yunchongnib:"宠溺",
            "yunchongnib_info":"",
            yunchongnic:"宠溺",
            "yunchongnic_info":"",
            "yunzhiti_sx":"止啼",
            "yunzhiti_sx_info":"",
            yunchuandao:"传道",
            "yunchuandao_info":"锁定技：你始终处于横置状态，手牌上限加X；一名其他角色结束阶段时将武将牌横置，然后你可弃置一张牌令其恢复一点体力。（X为场上已横置的角色）",
            yuntaiping:"太平",
            "yuntaiping_info":"锁定技：你造成的伤害视为雷属性，受到雷属性伤害时改为恢复等量的体力并摸等量的牌；场上其他角色受到雷属性伤害后，你可令其摸两张牌。",
            yunhuangtian:"黄天",
            "yunhuangtian_info":"主公技：限定技：出牌阶段，你可从牌堆随机将一张锦囊牌当做【浮雷】置入判定区，并选择一名其他角色令其增加一点体力上限，将势力更改为『群』，然后你获得【遁术】。",
            yundunshu:"遁术",
            "yundunshu_info":"锁定技：准备阶段，若场上没有【浮雷】，你从牌堆随机将一张锦囊牌当做【浮雷】置入判定区；其他『群』势力角色因【传道】恢复体力时，你获得一点护甲，因【太平】摸牌时，其获得一点护甲。",
        },
    },
        intro:"感谢你使用我的武将拓展如果遇到bug请反馈</b><br><img style=width:238px src="+lib.assetURL+"extension/云将/yunjiangfuli/MG_1.jpg>强度列表：</b><br><img style=width:238px src="+lib.assetURL+"extension/云将/yunjiangfuli/MG_2.jpg>套用一下mogen游戏的强度表纸 并 强 凶 狂 神 轮外</b><br><img style=width:238px src="+lib.assetURL+"extension/云将/yunjiangfuli/MG_3.jpg>标包八废那种算纸级  许攸大宝马均这种阴间武将属于狂下至狂中 动漫包作者包那些抗性输出拉满足BOSS属于神至论外 以这个为标准 云将强度基本控制在凶上 狂级至准神之间</b><br><img style=width:238px src="+lib.assetURL+"extension/云将/yunjiangfuli/IMG_1_e.jpg>立绘来自各类三国游戏  技能大多套用大佬们写的各种代码缝合而来 尽量做到缝合但不失乐趣 </b><br><img style=width:238px src="+lib.assetURL+"extension/云将/yunjiangfuli/IMG_2_e.jpg> 技能设计思路也按照武将历史事迹或小说话本设定 力求还原那个我心目中风云突变又英雄辈出的三国 </b><br><img style=width:238px src="+lib.assetURL+"extension/云将/yunjiangfuli/IMG_3_e.jpg> 最后再次感谢各位大佬对我的帮助 </b><br><img style=width:238px src="+lib.assetURL+"extension//云将/yunjiangfuli/IMG_4_e.jpg>特别鸣谢玄武江湖星城大佬 </b><br><img style=width:238px src="+lib.assetURL+"extension/云将/xwjh_pic_erweima.jpg>特别鸣谢时空枢纽爪爪</b><br><img style=width:238px src="+lib.assetURL+"extension/云将/sksn_pic_erweima.jpg>特别鸣谢群友马大钧 小姜同学 戴夫 小虎 阿枫帮忙扣的露头立绘</b><br><img style=width:238px src="+lib.assetURL+"extension/云将/yunjiangfuli/IMG_5_e.jpg>很高兴能认识大家   感兴趣的朋友可以加这两个群交流 </b><br><img style=width:238px src="+lib.assetURL+"extension/云将/yunjiangfuli/MG_G1.jpg>        需要切换露头立绘请下载千幻聆音和十周年UI并打开相关设置 ( ﹡ˆoˆ﹡ )",
    author:"柚子",
    diskURL:"",
    forumURL:"",
    version:"1.0",
},files:{"character":["yunzuoci.jpg"],"card":[],"skill":[]}}})