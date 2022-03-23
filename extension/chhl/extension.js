game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"沧海横流",content:function (config,pack){
    
   	game.playMY = function(fn, dir, sex) {
			if (lib.config.background_speak) {
				if (dir && sex)
					game.playAudio(dir, sex, fn);
				else if (dir)
					game.playAudio(dir, fn);
				else
					game.playAudio('..', 'extension', '沧海横流', fn);
			}
		};    
},precontent:function (){
    
},help:{},config:{},package:{
    character:{
        character:{
            MYzhujia:["male","qun",4,["MYxinuaile","MYqianrenqianmian"],["des:农家六堂之一神农堂的堂主，号称“三心二意”、“千人千面”，拥有”喜怒哀乐“四张面具，胜七、流沙组织、昌平君、侠魁田光的旧识，刘季的兄弟，典庆的上级。原是田仲的义父，后断绝关系。与司徒万里曾是兄弟，后因司徒万里害死典庆并且投靠田氏而反目成仇。多年来假装自己是传承人，实则帮助胜七掩护身份。"]],
            MYdianqing:["male","qun",4,["MYtongtoutiebi","MYyinggongzhaomen"],["des:农家六堂高手之一，隶属于朱家的神农堂。原是魏都大梁披甲门的嫡系传人，是梅三娘的师兄。身材异常高大魁梧，可将肉身练作盾甲，刀枪不入，一身横练硬功，曾在战场上连挡13辆战车正面冲击而毫发无损，被誉为“铜头铁臂，百战无伤”。加入农家神农堂后，负责神农堂的防务已有十年未出过错。誓死效忠于朱家，相信朱家能让农家变得更好。农家内战爆发后，为朱家争夺农家侠魁之位。最后在四季镇被田赐所杀（实因田仲、田虎让司徒万里在酒里下了专门削弱典庆硬功的药物所致）。"]],
            MYzhonglimei:["male","wei",4,["MYzhuifenghujian","MYqijirufeng"],["des:钟离氏，名眛。射术惊人的秦国都尉，原出身楚国。因不明原因加入秦国。为人正直，勇敢。后加入项家，一起对抗秦国势力。（楚南公曾对项氏一族预言，要想成就霸王之业，必须找到传承兵家之道、象征“风林火山”的四人。龙且推测钟离眛对应其中的“风”。）"]],
            MYtianhu:["male","qun",4,["MYhupojianfa","MYkuanglieaogu"],["des:农家六堂之一蚩尤堂的堂主，烈山堂堂主田猛的弟弟。右眼在多年前替大哥挡剑时被田赐不慎划瞎，从此戴着眼罩。以替兄报仇为契机，在田猛灵位前发誓要夺得新一任侠魁之位。田虎性格火爆，脸上的表情也是大写的蔑视，为人直率冲动，脾气火爆，有些自负。"]],
            MYjibu:["male","wu",3,["MYyinuoqianjin","MYhuajianyinhu"],["des:曾经是楚国影虎军团的统帅，亡国后成为独行游侠。为人信守承诺，在江湖上名望颇高，但他的真容却极少人见过。据说只要他承诺的事，必定会做到，但他做事自有原则，曾经有人拿着一千两黄金找他办事，却遭拒绝，故有着“一诺千金，不动如山”的名号”。善于偷盗，但只劫为富不仁之人的财宝。在龙且的请求下，加入项家共同反秦。（楚南公曾对项氏一族预言，要想成就霸王之业，必须找到传承兵家之道、象征“风林火山”的四人。项氏一族猜测季布正对应其中的“山”。)"]],
            MYtianyan:["female","wei",3,["MYchayanguanse","MYjingyitishen"],["des:农家烈山堂的大小姐，有“农家第一智囊”的美誉。前烈山堂堂主田猛之女，聪明过人、做事心细、料事如神，给人印象对弟弟田赐十分疼爱，不善拳脚却苦练察言观色之功。 隐藏身份为秦朝中车府令赵高手下“罗网”组织中的顶尖杀手——惊鲵，隶属“越王八剑”，位列天级一等，深受赵高信任，实力之强，深不可测，不在当年玄翦之下，加入罗网原因不明。 受到赵高命令后，指使田赐用惊鲵剑杀害了田猛，继任烈山堂堂主。凭借自己的布局设计一步步走向侠魁之位。"]],
            MYtianmi:["female","wu",3,["MYwulikanhua","MYwumeiyaorao","MYhongyanhuoshui"],["des:农家六堂之一魁隗堂的堂主，隶属于农家。胜七的弟妇，胜七的兄弟吴旷的妻子。是一个左右逢源、摇摆不定的成熟女子，当年为了得到堂主之位不惜使用弑夫的手段。因掌握治疗英布的小女孩绝症的解药，而雇佣英布为其参与农家侠魁争夺战。虽然表面依附于田虎，但真实想法则未必是一条心。"]],
            MYkeliang:["male","qun",4,["MYxiyuxiongshi","MYqishizhuiji"],["des:来自西域异族，手持盾牌的将领。因在危难之时被狼族收留，而被迫替狼族入侵秦朝北境。"]],
            MYliuji:["male","shu",4,["MYhantaizudi","MYzhirenshanyong","MYnuzhanbaishe"],["zhu","des:农家六堂之一神农堂的重要成员，与堂主朱家以兄弟相称。嘴角永远挂着一丝满不在乎的笑意。为人爽快大方，人缘特别好，特别是女人缘。嗜好赌博，经常光顾司徒万里的四岳赌场。而他的命运并不如此简单。"]],
            MYxiangyu:["male","wu",5,["MYsimianchuge","MYpofuchenzhou","MYbawangbieji"],["des:项氏，名籍，字羽，楚国名将项燕之孙，项羽早年跟随叔父项梁在吴中起义反秦，于巨鹿之战击破章邯、王离领导的秦军主力。秦亡后称西楚霸王。而后汉王刘邦从汉中出兵进攻项羽，项羽与其展开了历时四年的楚汉战争，项羽兵败垓下，突围至乌江边自刎而死。"]],
            MYjingtianming:["male","shu",4,["MYxiaguhaoqing","MYmokongzhenqi","MYyejintianming"],["des:荆轲、丽姬之子。自小以秦王政二王子的身份生活在秦王宫。在荆轲刺秦前，丽姬托韩申与伏念将天明带走。后韩申又托孤盖聂。与阿月为青梅竹马，互相爱慕。为“惊天十八剑”与“百步飞剑”的唯一传人。最后拒绝二皇子及武林盟主的地位，化名“金元宝”，与高月归隐，并开了家“金元宝包子店”，并有一子。"]],
            MYsituwanli:["male","wei",4,["MYhaodukongju","MYjiuzhuanduanhun"],["des:农家六堂之一四岳堂的堂主，开设的四岳赌场日进万金。韩亡前曾是农家潜龙堂主人。 拥有赌徒心理，在多方势力权衡中总会选择有利的一方。本来与神农堂朱家、刘季等是以兄弟相称的好友，在农家侠魁争夺战开头与神农堂相助。后被田言游说，看中烈山堂的实力，在四季镇背叛朱家等人。"]],
            MYhuhai:["male","wei",3,["MYwangqinzhehu","MYdulongewu","MYsanjisetong"],["zhu","des:秦始皇的十八世子，嬴姓，名胡亥。公子扶苏庶弟，与罗网首领赵高关系颇为密切。机敏过人，不在扶苏之下，深得其父皇喜爱，是扶苏继承皇位的主要竞争对手。盖聂在咸阳时曾与胡亥有过数面之缘，认为胡亥看似天真烂漫，但眼中颇有城府，让人有一种其心难测的森冷感觉。在赵高的训练下，拥有着与年龄不相符的内力。"]],
            MYtianzhong:["male","qun",4,["MYchunhanduanzhang","MYquyifengying"],["des:曾是朱家义子，神农堂朱氏弟子。在朱家的帮助下成为农家六堂之一共工堂的堂主。后受田蜜诱惑而背叛朱家，改变姓氏加入田氏一族，并利用田氏对付朱家。"]],
            MYguyao:["male","shu",4,["MYganchangcunduan"],["des:农家内战爆发后，替田虎争夺农家侠魁之位，结果在四季镇死于神农堂高手典庆之手。"]],
            MYyanu:["male","shu",4,["MYyakouwuyan","MYduanbingchuqiao"],["des:农家六堂高手之一，隶属于田猛、田言父女的烈山堂。深藏不露的一位哑者，加入烈山堂前是江湖上闻风丧胆的杀手。"]],
            MYjinxiansheng:["male","wei",4,["MYpaishajianjin","MYyuanrongbilou"],["des:金先生一直以共工堂总管的身份立足在农家，面具下是胜七的兄弟吴旷，田蜜的丈夫。 当年魁隗堂丑闻中吴旷并没有死，而是接受了侠魁的重任，侠魁注意到罗网对农家的渗透，于是决定派吴旷去罗网卧底。"]],
            MYwukuang:["male","wu",4,["MYzitonghanchan","MYyinxingmaiming"],["des:陈胜义弟，本是农家魁隗堂总管、田蜜之夫。后遭妻子田蜜陷害而与兄弟陈胜反目成仇并奉侠魁田光之命进入罗网卧底。加入罗网后成为罗网杀字级杀手。并以共工堂总管金先生的身份潜入农家寻求真相。"]],
            MYyingbu:["male","wu",4,["MYleibaojuntuan","MYshamieshuangfu"],["des:落拓浪人，浑身充满戾气。曾经是楚国雷豹军团的统帅，亡国后成为佣兵。因昔日的雷豹军团兄弟堕落，拒绝了龙且邀请加入项家的请求，但表面上还是与季布合作。（楚南公曾对项氏一族预言，要想成就霸王之业，必须找到传承兵家之道、象征“风林火山”的四人。英布对应其中的“林”。）"]],
            MYtouman:["male","qun",4,["MYnanmandanyu","MYezhanwuju"],["des:历史上的匈奴第一代单于挛鞮头曼，秦朝北方狼族的单于，无惧于恶战。"]],
            MYhuji:["female","qun",4,["MYxiangyuchushe","MYyanwuluoyi"],["des:秦朝北地狼族的妖艳女子，头曼单于的爱姬。性格、着装开放，内心阴险而有城府。与秦国的“罗网”组织有暗中交易，对扶苏、蒙恬等不利。"]],
            MYmeisanniang:["female","wu",3,["MYgangjintiegu","MYgouhunliandao"],["des:魏国人，披甲门的嫡系传人之一。农家六堂高手之一，隶属于田猛、田言父女的烈山堂。和典庆是同门师兄，修炼至刚硬功，视刀枪箭矢如朽木，还能在长枪尖上行动自如。"]],
            MYtianci:["male","shu",4,["MYganjiangmoye","MYchunxiaqiudong"],["des:农家烈山堂堂主田猛之子，田言之弟。执掌风胡子剑谱上排名第五名的双剑干将莫邪，同时也是执掌风胡子剑谱前十名剑的人之中唯一一个双手剑客，左手使莫邪；右手使干将。 思想痴呆，孩童心智，心思单纯，身形臃肿，属于农家天赋性剑客。其武功远在田虎等人之上，被称为农家第一高手。战斗中会情不自禁的陷入杀性暴走的状态，敌我不分，丧失理性，杀气会增强很多。 与对手战斗时，会以未出全力的方式初次观察对方的武功路数。"]],
            MYhuaying:["female","shu",3,["MYzuishengmengsi","MYhuakuihuaying"],["des:醉梦楼有名的花魁，是出了名的美人。执掌醉梦楼，醉梦楼为朱家手下的据点。身份为神农堂弟子。"]],
            MYlianyi:["female","wu",3,["MYyunwenlianyi","MYhuarongyuemao"],["des:本名芈涟，出身楚国，自幼在秦国长大。原是末代楚王昌平君之女，为楚国长公主。花容月貌，精通楚舞，舞态生风。楚国灭亡后，化名涟衣，藏身东郡的醉梦楼中，醉梦楼表面为东郡的销金窟，实为朱家手下的据点，用于打探情报。"]],
            MYbaitu:["male","wei",4,["MYquyanfushi"],["des:白屠是一位秦国将军，奸诈狡猾，趋炎附势，仗着自己位高权重欺压善民。借助公务之名鱼肉百姓，敲诈勒索已成习惯。"]],
            MYnuomin:["female","shu",4,["MYyuelangzhiyi"],["des:“月狼之裔”的女杀手，擅用狼和狼毒。若干年前和整个“月狼之裔”一同成为狼族本部头曼单于的奴隶。为了“月狼之裔”，诺敏被迫替头曼卖命，对秦长公子扶苏施下致命的狼毒。"]],
            MYwangli:["male","wei",4,["MYbaizhanchuanjia","MYwuwangbuli"],["des:王翦的嫡孙，蒙恬的对手。官居帝国上将军，其直属部队百战穿甲兵与蒙恬的黄金火骑兵齐名，随王翦伐楚，立下了无数战功，素有“百战穿甲，无往不利”的美誉。忠于胡亥，与罗网赵高、公输家族公输仇有勾结。"]],
        },
        translate:{
            MYzhujia:"朱家",
            MYdianqing:"典庆",
            MYzhonglimei:"钟离昧",
            MYtianhu:"田虎",
            MYjibu:"季布",
            MYtianyan:"田言",
            MYtianmi:"田蜜",
            MYkeliang:"克里昂",
            MYliuji:"刘季",
            MYxiangyu:"项羽",
            MYjingtianming:"荆天明",
            MYsituwanli:"司徒万里",
            MYhuhai:"胡亥",
            MYtianzhong:"田仲",
            MYguyao:"骨妖",
            MYyanu:"哑奴",
            MYjinxiansheng:"金先生",
            MYwukuang:"吴旷",
            MYyingbu:"英布",
            MYtouman:"头曼",
            MYhuji:"胡姬",
            MYmeisanniang:"梅三娘",
            MYtianci:"田赐",
            MYhuaying:"花影",
            MYlianyi:"涟衣",
            MYbaitu:"白屠",
            MYnuomin:"诺敏",
            MYwangli:"王离",
        },
    },
    card:{
        card:{
            MYpozhenbawangqiang:{
                type:"equip",
                subtype:"equip1",
                distance:{
                    attackFrom:-5,
                },
                skills:["pozhenbawangqang"],
                ai:{
                    basic:{
                        equipValue:2,
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        value:function (card,player){
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
                if(typeof equipValue=='function') return equipValue(card,player)-value;
                if(typeof equipValue!='number') equipValue=0;
                return equipValue-value;
            },
                    },
                },
                fullskin:true,
                enable:true,
                selectTarget:-1,
                filterTarget:function (card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function (){
        target.equip(card);
    },
                toself:true,
            },
            MYshuihanjian:{
                type:"equip",
                subtype:"equip1",
                distance:{
                    attackFrom:-1,
                },
                skills:["shuihanjian"],
                ai:{
                    basic:{
                        equipValue:2,
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        value:function (card,player){
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
                if(typeof equipValue=='function') return equipValue(card,player)-value;
                if(typeof equipValue!='number') equipValue=0;
                return equipValue-value;
            },
                    },
                },
                fullskin:true,
                image:"ext:秦时明月/MYpotuqilang.png",
                enable:true,
                selectTarget:-1,
                filterTarget:function (card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function (){
        target.equip(card);
    },
                toself:true,
            },
            MYtianluodiwang:{
                type:"trick",
                enable:true,
                selectTarget:-1,
                reverseOrder:true,
                filterTarget:function (card,player,target){
        return target==player;
    },
                content:function (){
        'step 0'
        game.playMY('MYtianluodiwang');
        var list={basic:[],equip:[],trick:[],delay:[]};
        for(var i=0;i<lib.inpile.length;i++){
            var name=lib.inpile[i];
            var info=lib.card[name];
            if(info.autoViewAs||name=='yuansuhuimie') continue;
            if(lib.filter.cardEnabled({name:name},player)){
                if(!list[info.type]){
                    list[info.type]=[];
                }
                list[info.type].push([get.translation(lib.card[name].type),'',name]);
            }
        }
        list.trick.sort(lib.sort.name);
        var dialog=ui.create.dialog('天罗地网',[list.trick,'vcard']);
  


        var rand1=Math.random()<1/3;
        var rand2=Math.random()<0.5;
        var rand3=Math.random()<1/3;
        var rand4=Math.random()<1/3;
        player.chooseButton(dialog).ai=function(button){
            var name=button.link[2];
            if(player.hp<=1){
                switch(name){
                    case 'zhiliaobo':return 1;
                    case 'dunpaigedang':return 0.8;
                    case 'nanman':return 0.5;
                    default:return 0;
                }
            }
            if(rand4&&player.countCards('h')<=1){
                switch(name){
                    case 'zengbin':return 1;
                    case 'wuzhong':return 0.8;
                    default:return 0;
                }
            }
            if(player.hasSkill('qinglonglingzhu')){
                if(rand2) return name=='chiyuxi'?0.8:0;
                return name=='jingleishan'?0.8:0;
            }
            if(rand2) return name=='wanjian'?0.8:0;
            return name=='nanman'?0.8:0;
        }
        'step 1'
        if(result.bool){
            player.chooseUseTarget(result.links[0][2]);
        }
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
                fullimage:true,
            },
            MYjiguanxuanwu:{
                fullskin:true,
                type:"equip",
                subtype:"equip3",
                enable:true,
                skills:["jiguanxuanwu"],
                ai:{
                    basic:{
                        equipValue:2,
                    },
                },
            },
            MYyuelang:{
                type:"trick",
                enable:true,
                filterTarget:function (card,player,target){
        return target!=player;
    },
                content:function () {
        game.playMY('MYyuelang');
        target.addSkill('MYlangdu');
    },
                ai:{
                    basic:{
                        order:9,
                        value:3,
                        useful:1,
                    },
                    result:{
                        target:-2,
                    },
                    tag:{
                        loseHp:1,
                    },
                },
                selectTarget:1,
                fullimage:true,
            },
            MYbixueyuyehua:{
                type:"basic",
                enable:true,
                savable:true,
                filterTarget:true,
                content:function (){
        target.gainMaxHp(true);
        target.recover();
    },
                ai:{
                    basic:{
                        order:function (card,player){
                if(player.hasSkillTag('pretao')) return 5;
                return 2;
            },
                        useful:[8,6.5,5,4],
                        value:[8,6.5,5,4],
                    },
                    result:{
                        target:function (player,target){
                // if(player==target&&player.hp<=0) return 2;
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
                fullimage:true,
            },
            MYshaizi:{
                audio:true,
                type:"trick",
                enable:true,
                selectTarget:-1,
                cardcolor:"red",
                toself:true,
                filterTarget:function (card,player,target){
        return target==player;
    },
                modTarget:true,
                content:function (){
        'step 0' 
        if(get.is.versus()){
            if(game.friend.contains(target)){
                if(game.friend.length<game.enemy.length){
                    target.draw(3);return;
                }
            }
            else{
                if(game.friend.length>game.enemy.length){
                    target.draw(3);return;
                }
            }
        }
        
         'step 1'   
     game.playMY('MYshaizi');
     player.throwDice();
         'step 2'                          
    
     target.draw(num);
    },
                ai:{
                    basic:{
                        order:7.2,
                        useful:4.5,
                        value:9.2,
                    },
                    result:{
                        target:2,
                    },
                    tag:{
                        draw:2,
                    },
                },
                fullimage:true,
            },
            MYchilianjian:{
                fullskin:true,
                type:"equip",
                subtype:"equip1",
                distance:{
                    attackFrom:-2,
                },
                skills:["chilianjian"],
                ai:{
                    basic:{
                        equipValue:2,
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        value:function (card,player){
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
                if(typeof equipValue=='function') return equipValue(card,player)-value;
                if(typeof equipValue!='number') equipValue=0;
                return equipValue-value;
            },
                    },
                },
                enable:true,
                selectTarget:-1,
                filterTarget:function (card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function (){
        target.equip(card);
    },
                toself:true,
            },
            MYshennongling:{
                fullskin:true,
                type:"equip",
                subtype:"equip5",
                skills:["shennongling"],
                ai:{
                    order:9.5,
                    equipValue:function (card,player){
            if(player.countCards('h','shennongling')) return 6;
            return 1;
        },
                    basic:{
                        equipValue:5,
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        value:function (card,player){
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
                if(typeof equipValue=='function') return equipValue(card,player)-value;
                if(typeof equipValue!='number') equipValue=0;
                return equipValue-value;
            },
                    },
                },
                enable:true,
                selectTarget:-1,
                filterTarget:function (card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function (){
        target.equip(card);
    },
                toself:true,
            },
            MYhujia:{
                type:"basic",
                enable:true,
                selectTarget:-1,
                cardcolor:"red",
                toself:true,
                filterTarget:function (card,player,target){
        return target==player;
    },
                modTarget:true,
                content:function (){
    game.playMY('MYhujia');
    player.changeHujia();
    },
                ai:{
                    basic:{
                        order:7.2,
                        useful:4.5,
                        value:9.2,
                    },
                    result:{
                        target:2,
                    },
                    tag:{
                        draw:2,
                    },
                },
                fullimage:true,
            },
            MYbaibianfeigong:{
                type:"equip",
                enable:true,
                subtype:"equip9",
                selectTarget:-1,
                cardcolor:"red",
                toself:true,
                filterTarget:function (card,player,target){
        return target==player;
    },
                modTarget:true,
                content:function (){
    
       "step 0"
    player.chooseControl('武器','防具','坐骑').set('ai',function(event){           
            if(!player.getEquip(1))  return '武器';
            if(!player.getEquip(2))  return '防具';
            if(!player.getEquip(3))  return '坐骑';
            return '防具';
        });
        "step 1"
        game.playMY('MYbaibianfeigong');
        if(result.control=='武器'){
        var card=game.createCard(get.inpile('equip1').randomGet());
        player.equip(card);
        player.$draw(card);
        game.delay();
        }else
        if(result.control=='防具'){
        var card=game.createCard(get.inpile('equip2').randomGet());
        player.equip(card);
        player.$draw(card);
        game.delay();
        }else
        if(result.control=='坐骑'){  
        player.equip(game.createCard(get.inpile(['equip3','equip4'].randomGet(),'equip').randomGet()))
            }
        else{
            event.finish();
        }
   
    },
                ai:{
                    basic:{
                        order:7.2,
                        useful:4.5,
                        value:9.2,
                    },
                    tag:{
                        draw:2,
                    },
                },
                fullskin:true,
            },
            MYqihaijiaolongjia:{
                type:"equip",
                subtype:"equip2",
                skills:["qihaijiaolongjia"],
                ai:{
                    basic:{
                        equipValue:6.5,
                    },
                },
                fullskin:true,
            },
            MYchiyoujian:{
                type:"equip",
                subtype:"equip1",
                distance:{
                    attackFrom:-2,
                },
                skills:["chiyoujian"],
                ai:{
                    basic:{
                        equipValue:2,
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        value:function (card,player){
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
                if(typeof equipValue=='function') return equipValue(card,player)-value;
                if(typeof equipValue!='number') equipValue=0;
                return equipValue-value;
            },
                    },
                },
                fullskin:true,
                enable:true,
                selectTarget:-1,
                filterTarget:function (card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function (){
        target.equip(card);
    },
                toself:true,
            },
            MYjieniudaofa:{
                type:"trick",
                enable:true,
                filterTarget:function (card,player,target){
        if(player==target) return false;
        return target.countGainableCards(player,'he')>0;
    },
                content:function (){
        game.playMY('MYjieniudaofa');
        if(target.countGainableCards(player,'he')){
            player.discardPlayerCard('e',target,Infinity,true);
            player.gainPlayerCard('h',target,true);
        }
    },
                ai:{
                    basic:{
                        order:9,
                        value:3,
                        useful:1,
                    },
                    result:{
                        target:-2,
                    },
                    tag:{
                        loseHp:1,
                    },
                },
                selectTarget:1,
                fullimage:true,
            },
            MYxuezhoufu:{
                audio:true,
                type:"delay",
                range:{
                    global:1,
                },
                filterTarget:function (card,player,target){
        return (lib.filter.judge(card,player,target)&&player!=target);
    },
                judge:function (card){
        if(get.color(card)=='red') return 0;
        return -3;
 
    },
                effect:function (){
        if(result.bool==false){
            game.playMY('MYxuezhoufu');
            player.loseHp(2);
        }
    },
                ai:{
                    basic:{
                        order:1,
                        useful:1,
                        value:4,
                    },
                    result:{
                        target:function (player,target){
                if(target.hasJudge('caomu')) return 0;
                return -1.5/Math.sqrt(target.countCards('h')+1);
            },
                    },
                    tag:{
                        skip:"phaseDraw",
                    },
                },
                selectTarget:1,
                enable:true,
                content:function (){
        target.addJudge(card,cards);
    },
                allowMultiple:false,
                fullskin:true,
            },
            MYlinghaobaihu:{
                fullskin:true,
                type:"equip",
                subtype:"equip4",
                onLose:function (){
        player.removeSkill('linghaobaihu');
    },
                enable:true,
                selectTarget:-1,
                filterTarget:function (card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function (){
        game.playMY('MYlinghaobaihu');
        player.addSkill('linghaobaihu');
        target.equip(card);
    },
                toself:true,
                ai:{
                    basic:{
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        equipValue:4,
                        value:function (card,player){
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
                if(typeof equipValue=='function') return equipValue(card,player)-value;
                if(typeof equipValue!='number') equipValue=0;
                return equipValue-value;
            },
                    },
                },
            },
            MYjiguanqinglong:{
                fullskin:true,
                type:"equip",
                subtype:"equip4",
                distance:{
                    globalFrom:-2,
                },
                enable:true,
                selectTarget:-1,
                filterTarget:function (card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function (){
        target.equip(card);
    },
                toself:true,
                ai:{
                    basic:{
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        equipValue:4,
                        value:function (card,player){
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
                if(typeof equipValue=='function') return equipValue(card,player)-value;
                if(typeof equipValue!='number') equipValue=0;
                return equipValue-value;
            },
                    },
                },
            },
            MYshenlou:{
                fullskin:true,
                type:"equip",
                subtype:"equip5",
                onLose:function (){
      "step 0"
      game.playMY('MYshenlou');
          if(player.hp<player.maxHp){                 
  player.chooseControl('回复一点体力','摸牌两张牌').set('ai',function(event){
            if(player.hp<=2) return '回复一点体力';
            return '摸牌两张牌';
        });
         }else{
          player.draw(2);  
         }
        "step 1"
        if(result.control=='回复一点体力') player.recover();        
        if(result.control=='摸牌两张牌') player.draw(2);
   
    },
                skills:["shenlou"],
                ai:{
                    order:9.5,
                    equipValue:function (card,player){
            if(player.countCards('h','shennongling')) return 6;
            return 1;
        },
                    basic:{
                        equipValue:5,
                        order:function (card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        value:function (card,player){
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
                if(typeof equipValue=='function') return equipValue(card,player)-value;
                if(typeof equipValue!='number') equipValue=0;
                return equipValue-value;
            },
                    },
                },
                enable:true,
                selectTarget:-1,
                filterTarget:function (card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function (){
        target.equip(card);
    },
                toself:true,
            },
        },
        translate:{
            MYpozhenbawangqiang:"破阵霸王枪",
            "MYpozhenbawangqiang_info":"你使用奇数杀，可以令造成的伤害+1，偶数杀，可以令选择的目标+1。",
            MYshuihanjian:"水寒剑",
            "MYshuihanjian_info":"每当你使用杀指定目标后，你可以视为将一张【兵粮寸断】置入该目标判定区。",
            MYtianluodiwang:"天罗地网",
            "MYtianluodiwang_info":"出牌阶段，对自己使用，你可以将此牌当任意一张非延时锦囊使用。",
            MYjiguanxuanwu:"机关玄武",
            "MYjiguanxuanwu_info":"你距离1以外的角色不能对你使用杀。",
            MYyuelang:"月狼之裔",
            "MYyuelang_info":"出牌阶段，对一名其他角色使用，令其获得\"狼毒\"标记。<br>(狼毒：累计使用三张杀后，失去三点体力，然后弃置此标记)",
            MYbixueyuyehua:"碧血玉叶花",
            "MYbixueyuyehua_info":"出牌阶段，对任意一名角色使用，或者在任意角色濒死状态使用，令其增加一点体力上限并回复一点体力。",
            MYshaizi:"骰子",
            "MYshaizi_info":"出牌阶段，对自己使用，掷一次骰子，并摸X张牌，X为掷骰子的点数。",
            MYchilianjian:"赤练剑",
            "MYchilianjian_info":"当你使用杀指定目标时，你可以弃置目标一张牌，若你是女性角色，改为弃置目标两张牌。",
            MYshennongling:"神农令",
            "MYshennongling_info":"准备阶段，你选择一名其他角色，令其选择交给你一张手牌或令你摸一张牌。",
            MYhujia:"护甲",
            "MYhujia_info":"出牌阶段，对自己使用，获得一点护甲。",
            MYbaibianfeigong:"百变非攻",
            "MYbaibianfeigong_info":"武器、防具、坐骑，三类装备中选择一类，然后随机装备本类装备。",
            MYqihaijiaolongjia:"七海蛟龙甲",
            "MYqihaijiaolongjia_info":"你不能成为其他角色锦囊牌的目标，当你使用或打出闪时，你摸一张牌。",
            MYchiyoujian:"蚩尤剑",
            "MYchiyoujian_info":"当你使用杀对目标造成伤害时，你可以取消此伤害，令目标进入濒死状态，然后你进入混乱状态直到受到伤害为止。",
            MYjieniudaofa:"解牛刀法",
            "MYjieniudaofa_info":"出牌阶段，对一名其他角色使用，弃置其装备区所有牌，并且获得其一张手牌。",
            MYxuezhoufu:"血咒符",
            "MYxuezhoufu_info":"出牌阶段，对距离1以内的其他角色使用，该目标角色判定阶段进行判定：若判定结果不为红色，则该角色失去两点体力。",
            MYlinghaobaihu:"零号白虎",
            "MYlinghaobaihu_info":"你的进攻距离无限，使用三回合后，自动弃置本装备(若连续装备两次，则没有回合限制)。",
            MYjiguanqinglong:"机关青龙",
            "MYjiguanqinglong_info":"你的进攻距离+2。",
            MYshenlou:"蜃楼",
            "MYshenlou_info":"手牌上限+3，当你失去装备区的【蜃楼】时，你选择回复一点体力或摸两张牌。",
        },
        list:[["club","9","MYpozhenbawangqiang"],["spade","6","MYshuihanjian"],["spade","12","MYtianluodiwang"],["heart","5","MYjiguanxuanwu"],["diamond","7","MYyuelang"],["club","13","MYshaizi"],["diamond","3","MYchilianjian"],["diamond","10","MYshennongling"],["club","12","MYbaibianfeigong"],["heart","2","MYqihaijiaolongjia"],["spade","1","MYchiyoujian"],["club","6","MYjieniudaofa"],["heart","9","MYxuezhoufu"],["heart","8","MYbixueyuyehua"],["heart","5","MYbixueyuyehua"],["club","4","MYhujia"],["spade","11","MYhujia"],["spade","9","MYlinghaobaihu"],["heart","10","MYjiguanqinglong"],["diamond","7","MYshenlou"]],
    },
    skill:{
        skill:{
            MYqianrenqianmian:{
                audio:"ext:沧海横流:1",
                enable:"phaseUse",
                usable:1,
                unique:true,
                filter:function (event,player){
    return !player.storage.MYqianrenqianmian;
},
                content:function (){
    player.storage.MYqianrenqianmian=true;
    player.loseMaxHp(2,true);  
    player.node.avatar.setBackgroundImage('extension/沧海横流/MYzhujiadazhao.jpg');
        
     var chat=['害死典庆，我要你们陪葬！',].randomGet()
     player.say(chat);
        
                var pos=4;
                var fellow=game.addFellow(pos,'MYzhujia','zoominanim');        
                fellow.style.left='calc(50% - 260px)';
                fellow.style.top='calc(50% - 25px)';
                fellow.classList.add('minskin');
                fellow.side=player.side;
                fellow.identity=player.identity;
if(fellow.identity=='zhu') fellow.identity='zhong';
 fellow.setIdentity('喜');       
fellow.group=player.group;
fellow.identityShown=true;        
fellow.loseMaxHp(2,true);
fellow.removeSkill('MYqianrenqianmian');    
fellow.removeSkill('MYxinuaile');  
fellow.addSkill('MYxi');   
fellow.node.avatar.setBackgroundImage('extension/沧海横流/MYzhujia.jpg');
fellow.draw(fellow.hp-2)
fellow.node.identity.dataset.color=fellow.identity;
        
                var fellow1=game.addFellow(pos,'MYzhujia','zoominanim');        
                fellow1.style.left='calc(50% - 120px)';
                fellow1.style.top='calc(50% - 25px)';
                fellow1.classList.add('minskin');
                fellow1.side=player.side;
                fellow1.identity=fellow.identity;
if(fellow1.identity=='zhu') fellow1.identity='zhong';
fellow1.setIdentity('怒');
fellow1.group=player.group;
fellow1.identityShown=true; 
fellow1.loseMaxHp(2,true);   
fellow1.removeSkill('MYqianrenqianmian');     
fellow1.removeSkill('MYxinuaile');   
fellow1.addSkill('MYnu');    
fellow1.node.avatar.setBackgroundImage('extension/沧海横流/MYzhujianu.jpg'); 
fellow1.draw(fellow1.hp-2)
fellow1.node.identity.dataset.color=fellow1.identity;
        
        var fellow2=game.addFellow(pos,'MYzhujia','zoominanim');        
                fellow2.style.left='calc(50% - -20px)';
                fellow2.style.top='calc(50% - 25px)';
                fellow2.classList.add('minskin');
                fellow2.side=player.side;
                fellow2.identity=fellow.identity;
if(fellow2.identity=='zhu') fellow2.identity='zhong';
fellow2.setIdentity('哀');
fellow2.group=player.group;
fellow2.identityShown=true; 
fellow2.loseMaxHp(2,true);  
fellow2.removeSkill('MYqianrenqianmian');     
fellow2.removeSkill('MYxinuaile');    
fellow2.addSkill('MYai');    
fellow2.node.avatar.setBackgroundImage('extension/沧海横流/MYzhujiaai.jpg');
fellow2.draw(fellow2.hp-2)
fellow2.node.identity.dataset.color=fellow2.identity;
        
        var fellow3=game.addFellow(pos,'MYzhujia','zoominanim');        
                fellow3.style.left='calc(50% - -160px)';
                fellow3.style.top='calc(50% - 25px)';
                fellow3.classList.add('minskin');
                fellow3.side=player.side;
                fellow3.identity=fellow.identity;
if(fellow3.identity=='zhu') fellow3.identity='zhong';
fellow3.setIdentity('乐');
fellow3.group=player.group;
fellow3.identityShown=true; 
fellow3.loseMaxHp(2,true);    
fellow3.removeSkill('MYqianrenqianmian');     
fellow3.removeSkill('MYxinuaile');  
fellow3.addSkill('MYle');    
fellow3.node.avatar.setBackgroundImage('extension/沧海横流/MYzhujiale.jpg'); 
fellow3.draw(fellow3.hp-2)
fellow3.node.identity.dataset.color=fellow3.identity;
        
        fellow.storage.xm_fs=true;
        fellow1.storage.xm_fs=true;
        fellow2.storage.xm_fs=true;
        fellow3.storage.xm_fs=true;
},
                ai:{
                    order:1.5,
                    threaten:1.4,
                    result:{
                        player:function (player){
                if(player.isDamaged()) return 1;
                 return 0;
            },
                    },
                },
                fullimage:true,
            },
            MYxinuaile:{
                group:["MYxi","MYnu","MYai","MYle"],
            },
            MYai:{
                trigger:{
                    player:"shaMiss",
                },
                check:function (event,player){
        return get.attitude(player,event.target)<0;
    },
                content:function (){
        
           
         "step 0"
        game.playMY('MYzhujia');
        player.judge(function(card){return (get.color(card)=='red')?1.5:-0.5});
        "step 1"
        if(result.judge>0){
          player.discardPlayerCard(1,'he',trigger.target,true);
          player.node.avatar.setBackgroundImage('extension/沧海横流/MYzhujiaai.jpg');
        }
        
        else{
            
          player.node.avatar.setBackgroundImage('extension/沧海横流/MYzhujiaai.jpg');      
              }            
    },
            },
            MYle:{
                trigger:{
                    player:["respond","useCard"],
                },
                filter:function (event,player){
 return event.card.name=='shan';
    },
                check:function (event,player){
        return get.attitude(player,event.source)<=0;
    },
                logTarget:function (event,player){
                    if(event.card.name=='sha') return event.targets[0];
                    return event.respondTo[0];
                },
                content:function (){
        
           "step 0"
        player.judge(function(card){return (get.color(card)=='red')?1.5:-0.5});
        "step 1"
        var target=lib.skill.MYle.logTarget(trigger,player);
        if(result.judge>0){
         target.damage();
         player.node.avatar.setBackgroundImage('extension/沧海横流/MYzhujiale.jpg');
        }
        
        else{
            
           player.node.avatar.setBackgroundImage('extension/沧海横流/MYzhujiale.jpg');      
              }            
    },
            },
            MYxi:{
                trigger:{
                    source:"damageEnd",
                },
                filter:function (event,player){
return event.player!=player;
},
                content:function (){
        
        
         "step 0"
        game.playMY('MYzhujia');
        player.judge(function(card){return (get.color(card)=='red')?1.5:-0.5});
        "step 1"
        if(result.judge>0){
          player.draw();
          player.node.avatar.setBackgroundImage('extension/沧海横流/MYzhujia.jpg');
        }
        
        else{
            
          player.node.avatar.setBackgroundImage('extension/沧海横流/MYzhujia.jpg');         
              }            
    },
            },
            MYnu:{
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event,player){
return (event.source&&event.source.countCards('he')&&event.source!=player);
},
                check:function (event,player){
        return (get.attitude(player,event.source)<=0);
    },
                content:function (){
         "step 0"
        game.playMY('MYzhujia');
        player.judge(function(card){return (get.color(card)=='red')?1.5:-0.5});
        "step 1"
        if(result.judge>0){
          trigger.source.turnOver();
          player.node.avatar.setBackgroundImage('extension/沧海横流/MYzhujianu.jpg');
        }
        
        else{
            
          player.node.avatar.setBackgroundImage('extension/沧海横流/MYzhujianu.jpg');  
              }            
    },
            },
            MYyinggongzhaomen:{
                audio:"ext:沧海横流:1",
                trigger:{
                    player:"gainAfter",
                },
                forced:true,
                filter:function (event,player){
          if(player==_status.currentPhase) return false;
        return event.cards&&event.cards.length>0
    },
                content:function (){
        
       var chat=['三娘，我不再老惹你生气了！'].randomGet()        
        player.say(chat);       
        player.loseMaxHp();
    },
            },
            MYtongtoutiebi:{
                trigger:{
                    player:"damageBefore",
                },
                forced:true,
                content:function (){
        
        trigger.cancel();
    },
                ai:{
                    effect:{
                        target:function (card,player,target){
                
                if(card.name=='sha') return 'zerotarget';
            },
                    },
                },
            },
            MYzhuifenghujian:{
                audio:"ext:沧海横流:1",
                trigger:{
                    player:"shaMiss",
                },
                priority:-1,
                check:function (event,player){
        return get.attitude(player,event.target)<0;
    },
                direct:true,
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('MYzhuifenghujian'),function(card,player,target){
            if(target==trigger.target) return false;         
            return lib.filter.targetEnabled({name:'sha'},player,target);
        }).set('ai',function(target){
            return get.effect(target,{name:'sha'},_status.event.player);
        });
        "step 1"
        if(result.bool){
            player.logSkill('MYzhuifenghujian');
            player.useCard({name:'sha'},result.targets,false);
             player.line(result.targets,'green');
            player.gainPlayerCard(result.targets[0],'he',true);         
        }
    },
                ai:{
                    threaten:function (player,target){
            return 1.6;
        },
                },
            },
            MYqijirufeng:{
                audio:"ext:沧海横流:1",
                trigger:{
                    target:"shaBefore",
                },
                filter:function (event,player){
        
        return get.color(event.card)=='red'||'black';
        
            
    },
                frequent:true,
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('MYqijirufeng'),function(card,player,target){
            if(target==trigger.target) return false;         
            return player!=target&&target.countCards('he')>0;
        }).set('ai',function(target){
            return -get.attitude(player,target);
        });
        "step 1"
        if(result.bool){
           
             player.line(result.targets,'green');
            player.gainPlayerCard(result.targets[0],'he',true);         
        }
        
        
      
    },
                ai:{
                    threaten:function (player,target){
            return 1.6;
        },
                },
            },
            MYkuanglieaogu:{
                audio:"ext:沧海横流:1",
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                filter:function (event,player){
        return (event.source&&event.source.countGainableCards(player,'he')&&event.source!=player);
    },
                content:function (){
        "step 0"        
        player.gainPlayerCard(get.prompt('MYkuanglieaogu',trigger.source),trigger.source,get.buttonValue,'he',2).set('logSkill',['MYkuanglieaogu',trigger.source]);
      
        "step 1"
        if(result.bool){
            player.logSkill('MYkuanglieaogu');
       }
        else{
            event.finish();
        }                               
        "step 2"
        trigger.source.recover(true);    
    },
                ai:{
                    "maixie_defend":true,
                    effect:{
                        target:function (card,player,target){
                if(player.countCards('he')>1&&get.tag(card,'damage')){
                    if(player.hasSkillTag('jueqing',false,target)) return [1,-1.5];
                    if(get.attitude(target,player)<0) return [1,1];
                }
            },
                    },
                },
            },
            MYhupojianfa:{
                mod:{
                    maxHandcard:function (player,num){
            return  num+player.countCards('e');
        },
                },
                audio:"ext:沧海横流:1",
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event,player){
        if(event.card&&event.card.name=='sha'&&player.countCards('e')) return true;
        return false;
    },
                forced:true,
                content:function (){
        "step 0"        
        trigger.num+=player.countCards('e');
        
        "step 1"
    
    if(trigger.player.countCards('e')>0){
        player.gainPlayerCard(trigger.player,'e',true);  
        } 
        else
         {
        player.gainPlayerCard(trigger.player,'h',true);  
        }    
        
        
    },
            },
            MYhuajianyinhu:{
                audio:"ext:沧海横流:1",
                unique:true,
                marktext:"隐",
                trigger:{
                    player:"damageEnd",
                },
                forced:true,
                init:function (player){
        player.storage.MYhuajianyinhu=0;
    },
                content:function (){
           player.draw();        
        if(typeof trigger.num=='number'){
            player.storage.MYhuajianyinhu+=trigger.num;
        }
        if(player.storage.MYhuajianyinhu){
            player.markSkill('MYhuajianyinhu');
        }
        game.addVideo('storage',player,['MYhuajianyinhu',player.storage.MYhuajianyinhu]);
    },
                intro:{
                    name:"隐虎",
                    content:"mark",
                },
                group:"MYhuajianyinhu2",
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    effect:{
                        target:function (card,player,target){
                if(get.tag(card,'damage')){
                    if(player.hasSkillTag('jueqing',false,target)) return [1,-1.5];
                    if(player.hp>=4) return [1,1.5];
                    if(target.hp==3) return [1,1];
                    if(target.hp==2) return [1,0.5];
                }
            },
                    },
                },
            },
            "MYhuajianyinhu2":{
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        return player.storage.MYhuajianyinhu>0;
    },
                filterTarget:function (card,player,target){
        return target!=player;
    },
                selectTarget:function (){
        return [1,_status.event.player.storage.MYhuajianyinhu];
    },
                prompt:"你可以选择任意名目标，并弃置等量的隐虎标记和摸等量的牌，令目标减一点体力上限",
                content:function (){
        
        var chat=['我来取我要的东西'].randomGet()        
        player.say(chat);    
        
          player.draw();        
        player.storage.MYhuajianyinhu--;
        if(!player.storage.MYhuajianyinhu){
            player.unmarkSkill('MYhuajianyinhu');
        }
        else{
            player.updateMarks();
        }
        target.loseMaxHp();
        
        
        
    },
                ai:{
                    order:11,
                    result:{
                        target:function (player,target){
                var skills=target.getSkills();
                for(var i=0;i<skills.length;i++){
                    if(!get.is.locked(skills[i])){
                        if(target.hasSkillTag('maixie')) return -2;
                        return -get.threaten(target);
                    }
                }
                return 0;
            },
                    },
                },
            },
            MYyinuoqianjin:{
                audio:"ext:沧海横流:2",
                enable:"phaseUse",
                usable:1,
                prepare:"give2",
                filterTarget:function (card,player,target){
        if(player==target) return false;
        return !target.hasSkill('MYhuangjinmudan');   
        return true;
    },
                filter:function (event,player){
        return player.countCards('h',{suit:'diamond'})>0;
    },
                filterCard:function (card){
        return get.suit(card)=='diamond';
    },
                check:function (card){
        return 9-get.value(card)
    },
                discard:false,
                content:function (){
        target.gain(cards,player).delay=false;
        target.addSkill('MYhuangjinmudan');  
        player.recover();
    },
                ai:{
                    order:9,
                    result:{
                        target:function (player,target){
                if(target.hp==1) return 5;
                if(player==target&&player.countCards('h')>player.hp) return 5;
                return 2;
            },
                    },
                    threaten:2,
                },
            },
            MYhuangjinmudan:{
                audio:"ext:沧海横流:2",
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                mark:true,
                intro:{
                    content:function (storage,player){
return '回合开始时，若装备区没牌，你随机装备一件装备，若装备区有牌，你摸一张牌，然后弃置标记。';
        },
                },
                content:function (){
         var chat=['季布果然信守承诺','黄金牡丹代表着承诺'].randomGet()        
        player.say(chat);    
                
        player.removeSkill('MYhuangjinmudan');        
        if(trigger.player.countCards('e')==0){   
        
        var card=game.createCard(get.inpile('equip').randomGet());
        player.equip(card);
        player.$gain2(card);
        game.delay();
            
          
     }else
         {
        player.draw();
        }            
    },
                ai:{
                    threaten:1.3,
                },
            },
            MYchayanguanse:{
                audio:"ext:沧海横流:1",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        if(player==target) return false;
        return (target.countCards('h')||target.isUnseen(2));
    },
                selectTarget:1,
                content:function (){
        "step 0"
        
         player.chooseCardButton(target,target.getCards('h')).set('filterButton',function(button){
           return get.suit(button.link)=='diamond'; 
        });                                                              
        "step 1"         
            
        if(result.bool){                           
        event.card=result.links[0];     
        target.discard(event.card,target);       
        target.damage();             
        target.addSkill('MYchayan');  
        }                                                                  
                                 
    },
                ai:{
                    threaten:1.5,
                    result:{
                        target:function (player,target){
                return -target.countCards('h');
            },
                    },
                    order:10,
                    expose:0.4,
                },
            },
            MYchayan:{
                mark:true,
                intro:{
                    mark:function (dialog,content,player){
            var hs=player.getCards('h');
            if(hs.length){
                dialog.addSmall(hs)&&dialog.addText('使用杀后，取消展示手牌'); 
            }
            else{
                dialog.addText('无手牌');
            }
        },
                    content:function (content,player){
            var hs=player.getCards('h');
            if(hs.length){
                return get.translation(hs);
            }
            else{
                return '无手牌';
            }
        },
                },
                group:["MYchayan_1"],
                subSkill:{
                    "1":{
                        forced:true,
                        trigger:{
                            player:"shaBefore",
                        },
                        filter:function (event){
                return event.card&&(event.card.name=='sha')
},
                        content:function (){
     player.removeSkill('MYchayan');
},
                        sub:true,
                    },
                },
            },
            MYjingyitishen:{
                audio:"ext:沧海横流:1",
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event,player){
        return (event.source&&event.source!=player);
    },
                check:function (event,player){
        return (get.attitude(player,event.source)<=0);
    },
                content:function (){
         "step 0"        
          trigger.source.gain(cards,player).delay=false;
      
       
          trigger.source.addSkill("MYjingyitishen_buff1");
          trigger.source.storage.cxyXiaoXiong_buff1 = player;
          trigger.source.markSkillCharacter("MYjingyitishen",player,"惊鲵替身","你替"+get.translation(player)+"承受一次除体力流失和闪电以外的所有伤害，然后解除此状态");
      
           "step 1"
        player.judge(function(card){return (get.color(card)=='black')?1.5:-0.5});
           "step 2"
        if(result.judge>0){
            trigger.untrigger();
            trigger.responded=true;
      trigger.player.addSkill("MYjingyitishen_buff2");
      trigger.player.markSkillCharacter('MYjingyitishen_buff2',player,'惊鲵替身','摸牌阶段，你额外摸一张牌，然后解除此状态');      
        }
        
        else{
            
       trigger.player.addSkill("MYjingyitishen_buff3");
       trigger.player.markSkillCharacter('MYjingyitishen_buff3',player,'惊鲵替身','准备阶段，视为使用一张无视距离的杀，然后解除此状态');       
              }      
     
    },
                subSkill:{
                    "buff1":{
                        temp:true,
                        trigger:{
                            global:"damageBegin",
                        },
                        filter:function (event,player){
              return event.player == player.storage.cxyXiaoXiong_buff1;
            },
                        onremove:function (player){
              player.unmarkSkill("MYjingyitishen");
              delete player.storage.cxyXiaoXiong_buff1;
            },
                        logTarget:"player",
                        forced:true,
                        content:function (){
             trigger.player = player;            
             trigger.player.removeSkill("MYjingyitishen_buff1");     
             
            },
                        sub:true,
                    },
                    "buff2":{
                        temp:true,
                        trigger:{
                            player:"phaseDrawBegin",
                        },
                        direct:true,
                        content:function (){
           var chat=['农家是生存还是毁灭，就在今日之决！'].randomGet()        
           player.say(chat);        
           trigger.num++;
           trigger.player.removeSkill("MYjingyitishen_buff2");    
              
            },
                        sub:true,
                    },
                    "buff3":{
                        trigger:{
                            player:"phaseBegin",
                        },
                        direct:true,
                        content:function (){
        "step 0"
          
        player.chooseTarget('视为使用一张无视距离的杀',function(card,player,target){
            return lib.filter.targetEnabled({name:'sha'},player,target);
        }).set('ai',function(target){
            return get.effect(target,{name:'sha'},_status.event.player);
        });
        "step 1"
        if(result.bool){
            player.logSkill('MYjingyitishen');
            player.useCard({name:'sha'},result.targets,false);
            trigger.player.removeSkill("MYjingyitishen_buff3");    
             
        }
    },
                        sub:true,
                    },
                },
            },
            MYwulikanhua:{
                audio:"ext:沧海横流:1",
                enable:"phaseUse",
                round:2,
                filter:function (event,player){
        return player.countCards('h')>0;
    },
                filterTarget:function (card,player,target){
        return player!=target;
    },
                content:function (){
        "step 0"
        target.chooseControl('heart2','diamond2','club2','spade2').set('ai',function(event){
            switch(Math.floor(Math.random()*6)){
                case 0:return 'heart2';
                case 1:case 4:case 5:return 'diamond2';
                case 2:return 'club2';
                case 3:return 'spade2';
            }
        });
        "step 1"
        game.log(target,'选择了'+get.translation(result.control));
        event.choice=result.control;
        target.popup(event.choice);
        event.card=player.getCards('h').randomGet();
        target.gain(event.card,player);
        player.$give(event.card,target);
        game.delay();
        "step 2"
        if(get.suit(event.card)+'2'!=event.choice) target.loseMaxHp('nocard')&&player.draw(2);                 
    },
                ai:{
                    order:1,
                    result:{
                        target:function (player,target){
                var eff=get.damageEffect(target,player);
                if(eff>=0) return 1+eff;
                var value=0,i;
                var cards=player.getCards('h');
                for(i=0;i<cards.length;i++){
                    value+=get.value(cards[i]);
                }
                value/=player.countCards('h');
                if(target.hp==1) return Math.min(0,value-7);
                return Math.min(0,value-5);
            },
                    },
                },
                group:["MYwulikanhua_roundcount"],
            },
            MYwumeiyaorao:{
                audio:"ext:沧海横流:1",
                trigger:{
                    player:"useCardToBegin",
                },
                filter:function (event,player){   
      return event.card.name!=='lebu'&&event.target&&event.target!=player&&get.color(event.card)=='red'&&!event.target.hasJudge('lebu');
    },
                check:function (event,player){
        return get.attitude(player,event.target)<=0;
    },
                content:function (){
       
var card=game.createCard('lebu');
        trigger.target.addJudge(card);
        trigger.target.$draw(card);
        game.delay();
        player.recover();      
     
    },
            },
            MYhongyanhuoshui:{
                unique:true,
                init:function (player){
        player.storage.MYhongyanhuoshui=0;
    },
                mark:true,
                intro:{
                    content:"已累计受到#次伤害",
                },
                trigger:{
                    player:"damageBegin",
                },
                forced:true,
                popup:false,
                content:function (){        
           player.storage.MYhongyanhuoshui+=trigger.num;                      
    },
                group:["MYhongyanhuoshui_1"],
                subSkill:{
                    "1":{
                        skillAnimation:true,
                        trigger:{
                            player:"phaseBegin",
                        },
                        filter:function (event,player){
        if(player.storage.MYhongyanhuoshui>=3) return true;
        return false;
    },
                        forced:true,
                        unique:true,
                        content:function (){      
        "step 0"
        player.judge(function(card){return (get.color(card)=='black')?1.5:-0.5});
        "step 1"
        if(result.judge>0){
            trigger.untrigger();
            trigger.responded=true;

        player.storage.MYmoushi=true;
        player.awakenSkill('MYhongyanhuoshui');
        player.addSkill('lijian');            
        }
        
        else{
            
        player.storage.MYmoushi=true;
        player.awakenSkill('MYhongyanhuoshui');
        player.addSkill('hongyan');            
              }            
    },
                        sub:true,
                    },
                },
            },
            MYxiyuxiongshi:{
                trigger:{
                    player:"useCardAfter",
                },
                direct:true,
                filter:function (event,player){
        if(event.parent.name=='MYxiyuxiongshi') return false;
        if(!event.targets||!event.card) return false;
        var type=get.type(event.card);
        if(type!='equip') return false;
        var card=game.createCard(event.card.name,event.card.suit,event.card.number);
        for(var i=0;i<event.targets.length;i++){
            if(!event.targets[i].isAlive()) return false;
            if(!player.canUse({name:event.card.name},event.targets[i],false,false)){
                return false;
            }
        }
        return true;
    },
                content:function (){
          'step 0'
      
        player.chooseTarget('你可以选择一名其他角色，其视为使用一张相同装备牌',function(card,player,target){
             return target!=player;
        }).set('ai',function(target){
              var player=_status.event.player;
            if(get.attitude(player,target)>0){
                return get.recoverEffect(target,player,player)+1;
            }
            return 0;
        });               
                      
        "step 1"
        if(result.bool){
            var card=game.createCard(trigger.card.name,trigger.card.suit,trigger.card.number);
                
           result.targets[0].equip(card);
        game.playMY('MYxiyuxiongshi');
        game.delay(); 
           
        }
    },
                ai:{
                    threaten:0.8,
                },
                group:["MYxiyuxiongshi_1"],
                subSkill:{
                    "1":{
                        trigger:{
                            player:"useCardAfter",
                        },
                        direct:true,
                        filter:function (event,player){
        if(event.parent.name=='MYxiyuxiongshi_1') return false;
        if(!event.targets||!event.card) return false;
        var type=get.type(event.card);
        if(type!='basic'&&type!='trick') return false;
        var card=game.createCard(event.card.name,event.card.suit,event.card.number);
        for(var i=0;i<event.targets.length;i++){
            if(!event.targets[i].isAlive()) return false;
            if(!player.canUse({name:event.card.name},event.targets[i],false,false)){
                return false;
            }
        }
        return true;
    },
                        content:function (){                 
         "step 0"
        player.chooseControl('摸一张牌','额外结算',function(event,player){
            if(player.countCards('h')<=2) return '摸一张牌';          
            if(trigger.card.name=='jiu')  return '摸一张牌';
            if(trigger.card.name=='tiesuo')  return '摸一张牌';         
            if(trigger.card.name=='wuxie')  return '摸一张牌';             
            return '额外结算';
        });
        "step 1"
        if(result.control=='摸一张牌'){
            player.draw();
        }
        else{
            var card=game.createCard(trigger.card.name,trigger.card.suit,trigger.card.number);
        player.useCard(card,trigger.targets);
        }
    },
                        sub:true,
                    },
                },
            },
            MYqishizhuiji:{
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                filter:function (event,player){
        return player.getStat('damage')>=3&&!player.storage.MYqishizhuiji;
    },
                content:function (){
        var chat=['狮子捕食猎物，需要的是耐心'].randomGet()        
        player.say(chat);          
        
        player.draw(3);
    },
                group:["MYqishizhuiji_1"],
                subSkill:{
                    "1":{
                        trigger:{
                            source:"dieAfter",
                        },
                        direct:true,
                        content:function (){          
             player.insertPhase();
    },
                        sub:true,
                    },
                },
            },
            MYhantaizudi:{
                trigger:{
                    global:"damageEnd",
                },
                direct:true,
                filter:function (event,player){    
        if(player.identity!='zhu') return false;    
        if(event.player==player) return false;        
        if(event.player.group!='shu') return false;
        return true;
    },
                content:function (){
         player.draw();
    },
                group:["MYhantaizudi_1"],
                subSkill:{
                    "1":{
                        trigger:{
                            global:"dieBegin",
                        },
                        direct:true,
                        filter:function (event,player){    
        if(player.identity!='zhu') return false;    
        if(event.player==player) return false;        
        if(event.player.group!='shu') return false;
        return true;
    },
                        content:function (){
         player.recover();
    },
                        sub:true,
                    },
                },
            },
            MYzhirenshanyong:{
                audio:"ext:沧海横流:2",
                trigger:{
                    global:"damageEnd",
                },
                filter:function (event,player){
        
        return (event.card&&event.source&&event.player.classList.contains('dead')==false&&event.source!==player&&player.countCards('he'));
    },
                direct:true,
                checkx:function (event,player){
        var att1=get.attitude(player,event.player);
        var att2=get.attitude(player,event.source);
        return att1>0&&att2<=0;
    },
                derivation:["MYcaihuahengyi"],
                content:function (){
        "step 0"
        var next=player.chooseToDiscard('he','是否对'+get.translation(trigger.player)+'发动【知人善用】？');
        var check=lib.skill.MYzhirenshanyong.checkx(trigger,player);
        next.set('ai',function(card){
            if(_status.event.goon) return 8-get.value(card);
            return 0;
        });
        next.set('logSkill','MYzhirenshanyong');
        next.set('goon',check);
        "step 1"
        if(result.bool){
            player.draw();
            player.discardPlayerCard(trigger.source,1,'he',true);            
            
        }
        else{
            event.finish();
        }
        
        "step 2"
        player.judge(function(card){return (get.color(card)=='red')?1.5:-0.5});
        "step 3"
        if(result.judge>0){
           trigger.player.addSkill('MYcaihuahengyi'); 
        }
          
               
      
    },
                ai:{
                    expose:0.3,
                },
            },
            MYcaihuahengyi:{
                mod:{
                    selectTarget:function (card,player,range){           
            if(get.color(card)=='black'&&range[1]!=-1) return range[1]++;
        },
                },
                trigger:{
                    player:["useCard","respondAfter"],
                },
                forced:true,
                filter:function (event,card,player){
  
        return get.color(event.card)=='red';
    },
                content:function (){
    player.draw();   
},
                group:["MYcaihuahengyi_1"],
                subSkill:{
                    "1":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        frequent:true,
                        content:function (){
        player.removeSkill('MYcaihuahengyi');
    },
                        sub:true,
                    },
                },
            },
            MYnuzhanbaishe:{
                trigger:{
                    source:"damageEnd",
                },
                check:function (event,player){
        var att=get.attitude(player,event.player);
        if(event.player.hp>0) return att<=0;
        return att>0;
        
    },
                filter:function (event,player){
        return event.player.hp==1&&event.player!=player;
    },
                content:function (){
        trigger.player.clearSkills();
    },
            },
            MYsimianchuge:{
                audio:"ext:沧海横流:2",
                enable:"phaseUse",
                usable:1,
                selectTarget:-1,
                filterTarget:function (card,player,target){
        return target!=player;
    },
                modTarget:true,
                content:function (){   
              "step 0"    
       if(target.countCards('h')>0){
        target.chooseControl('与其拼点','令其摸牌').set('ai',function(event){          
             if(ai.get.attitude(target,player)<-1) return '与其拼点';
             if(ai.get.attitude(target,player)>1) return '令其摸牌';
         
             return '令其摸牌';
        });   
           }else{
             player.draw();           
           }
        "step 1"  
    if(result.control=='令其摸牌') player.draw();      
    if(result.control=='与其拼点') target.chooseToCompare(player).set('targetRequired',true);
              "step 2"      
          if(result.bool==false){
            target.damage(); 
            player.gainPlayerCard(target,'he',true);    
            event.finish();
        }
        else
       if(result.bool){
            player.damage();
        }        
        else{
            event.finish();
        }                        
    },
                ai:{
                    result:{
                        target:function (player,target){
                var cards=player.getCards('h');
                var num=target.countCards('h');
                if(num>cards.length+3&&player.hp>1) return -2;
                if(num>cards.length+1&&player.hp>1) return -1;
                if(num==cards.length-1&&player.hp>1&&!get.is.altered('pozhen')) return -1;
                for(var i=0;i<cards.length;i++){
                    if(cards[i].number>9) return num==1?-1:-0.5;
                }
                return 0;
            },
                    },
                    order:9,
                },
            },
            MYpofuchenzhou:{
                trigger:{
                    player:"phaseBegin",
                },
                direct:true,
                filter:function (event,player){
        return !player.getEquip('MYpozhenbawangqiang');
    },
                content:function (){
      
        
            player.useCard(game.createCard('MYpozhenbawangqiang','diamond',1),player);
       
     
    },
                group:["MYpofuchenzhou_1"],
                subSkill:{
                    "1":{
                        enable:"phaseUse",
                        usable:1,
                        position:"he",
                        filter:function (event,player){
        return player.countCards('he',{type:'equip'})>0;
    },
                        filterCard:function (card){
        return get.type(card)=='equip';
    },
                        selectCard:[1,2],
                        prompt:"你可以弃置一至两张装备牌，然后摸等量的牌",
                        check:function (card){return 6-ai.get.value(card)},
                        content:function (){
                player.draw(cards.length);
            },
                        ai:{
                            order:1,
                            result:{
                                player:1,
                            },
                            threaten:1.5,
                        },
                        sub:true,
                    },
                },
            },
            MYbawangbieji:{
                trigger:{
                    global:"dieAfter",
                },
                direct:true,
                filter:function (event,player){
        return event.player.sex=='female'&&player!=event.player&&!player.storage.MYbawangbieji;
    },
                content:function (){
        'step 0'
        player.chooseTarget('令一名除你外的男性角色进入濒死状态',function(card,player,target){
            return target.sex=='male'&&target!=player;
        }).set('ai',function(target){
            return -get.attitude(player,target)/(1+target.hp);
        });
        'step 1'
        if(result.bool){
            var chat=['虞兮虞兮奈若何！',].randomGet()
            player.say(chat);            
            player.storage.MYbawangbieji=true;               
            player.logSkill('MYbawangbieji',result.targets[0]);
            result.targets[0].loseHp(result.targets[0].hp);


        }
    },
                ai:{
                    threaten:1.5,
                    expose:0.2,
                },
            },
            shuihanjian:{
                trigger:{
                    player:"shaBegin",
                },
                filter:function (event,player){
        return event.target!=player&&!event.target.hasJudge('bingliang');
    },
                check:function (event,player){
        return get.attitude(player,event.target)<0;
    },
                content:function (){
        game.playMY('MYshuihanjian');
         var card=game.createCard('bingliang');
        trigger.target.addJudge(card);
        trigger.target.$draw(card);
        game.delay();
                
        
    },
            },
            pozhenbawangqang:{
                mod:{
                    selectTarget:function (card,player,range){
            
                 var num=get.number(card);
                 if(num%2==0&&card.name=='sha'&&range[1]!=-1) return range[1]++;            
       
        },
                },
                trigger:{
                    player:"shaBefore",
                },
                filter:function (event,card,player){
   var num=get.number(event.card)
        if(!num) return false;
        return num%2!=0&&event.target != player;
      },
                check:function (event,player){
        var att=get.attitude(player,event.player);    
    },
                content:function () {
     player.addTempSkill('xinliegong4','shaAfter');
    },
            },
            MYmokongzhenqi:{
                trigger:{
                    source:"damageEnd",
                },
                direct:true,
                filter:function (event,player){
        
        return event.player!=player&&player.isIn()&&!player.hasSkill('MYmokongzhenqi_1');
    },
                content:function (){
        game.playMY('MYmokongzhenqi1');
        player.addSkill('MYmokongzhenqi_1');
    },
                subSkill:{
                    "1":{
                        mod:{
                            globalFrom:function (from,to,distance){
                    if(from.storage.MYmokongzhenqi_1) return distance-from.storage.MYmokongzhenqi_1;
                },
                            cardUsable:function (card,player,num){
            if(card.name=='sha') return (player.storage.MYmokongzhenqi_1)+1;
        },
                            maxHandcard:function (player,num){
            return num+player.storage.MYmokongzhenqi_1;
        },
                        },
                        mark:true,
                        intro:{
                            content:"攻击距离与手牌上限+$，本回合额外使用$张杀（剩余$回合）",
                        },
                        init:function (player){
        player.storage.MYmokongzhenqi_1=3;
    },
                        trigger:{
                            player:"phaseAfter",
                        },
                        silent:true,
                        onremove:true,
                        content:function (){
        player.storage.MYmokongzhenqi_1--;
        if(player.storage.MYmokongzhenqi_1<=0){
         
            player.removeSkill('MYmokongzhenqi_1');
        }
        else{
            player.updateMarks();
        }
    },
                        forced:true,
                        popup:false,
                        sub:true,
                    },
                },
            },
            MYxiaguhaoqing:{
                audio:"ext:沧海横流:1",
                trigger:{
                    player:"phaseDrawBegin",
                },
                filter:function (event,player){
        return player.countCards('h','sha')<=0;
    },
                frequent:true,
                content:function (){
        player.gain(game.createCard("sha"));
    },
                ai:{
                    threaten:1.3,
                },
                group:["MYxiaguhaoqing_1"],
                subSkill:{
                    "1":{
                        trigger:{
                            player:"phaseEnd",
                        },
                        filter:function (event,player){
        return player.countCards('h','shan')<=0;
    },
                        direct:true,
                        content:function (){
             player.draw()
           },
                        sub:true,
                    },
                },
            },
            MYyejintianming:{
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event,player){
        if(player.storage.MYyejintianming) return false;        
        if(player.hp<=2) return true;
        return false;
    },
                direct:true,
                content:function (){
        'step 0'
        var list=get.gainableSkills();
        list.remove('MYyejintianming');
        list=list.randomGets(3);
        event.skillai=function(){
            return get.max(list,get.skillRank,'item');
        };
        if(event.isMine()){
            var dialog=ui.create.dialog('forcebutton');
            dialog.add('选择获得一项技能');
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
            _status.imchoosing=true;
            game.pause();
        }
        else{
            event._result=event.skillai();
        }
        'step 1'
        _status.imchoosing=false;
        var link=result;
        player.addAdditionalSkill('MYyejintianming',link);
        player.popup(link);
        game.log(player,'获得了技能','【'+get.translation(link)+'】');
        player.checkMarks();
        player.markSkill('MYyejintianming');
     
        
        var chat=['我要成为强者，变得和大叔一样强',].randomGet()
            player.say(chat);             
        player.loseMaxHp();      
        player.recover();
        player.storage.MYyejintianming=true;
        player.awakenSkill('MYyejintianming'); 
        game.delay();
    },
                ai:{
                    order:11,
                    result:{
                        player:function (player){
                if(player.getStat().skill.MYyejintianming) return 0;
                return 1;
            },
                    },
                },
            },
            jiguanxuanwu:{
                mod:{
                    targetEnabled:function (card,player,target,now){
            if(get.distance(player,target)>1){
                if(card.name=='sha') return false;
            }
        },
                },
            },
            MYhaodukongju:{
                audio:"ext:沧海横流:2",
                trigger:{
                    player:"phaseDrawBegin",
                },
                check:function (event,player){
        if(player.countCards('h')>=3) return false;     
        if(player.countCards('h','tao')<=0) return true;
        return false;        
             
    },
                content:function (){
         'step 0'   
     player.discard(player.getCards('h'));
         'step 1'            
     player.throwDice();
         'step 2'                          
     trigger.num+=num-2;  
         'step 3'
        if(event.num<=3){                       
          player.recover();
     }                     

    },
                ai:{
                    threaten:1.3,
                },
            },
            MYjiuzhuanduanhun:{
                audio:"ext:沧海横流:1",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        if(player.countCards('he')==0) return false;
        return game.hasPlayer(function(current){
            return current.hp>player.hp;
        });
    },
                filterTarget:function (card,player,target){
        return target.hp>player.hp;
    },
                filterCard:true,
                position:"he",
                selectTarget:[1,Infinity],
                content:function (){
          "step 0"           
      target.chooseControl('赌大','赌小').set('ai',function(event){
          var n=[1,2].randomGet();
            if(n==1) return '赌大';
            if(n==2) return '赌小';       
                   
        });        
         "step 1"
         target.throwDice();        
        "step 2"
       if(result.control=='赌大'){
            if(event.num<=3){                       
            target.loseHp(); 
            target.chooseToDiscard(2,'he',true);  
     }                     
        }
        else if(result.control=='赌小'){
            if(event.num>=4){            
             target.loseHp();       
             target.chooseToDiscard(2,'he',true);  
                
     }            
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
            MYerjisetong:{
                trigger:{
                    global:"dieAfter",
                },
                direct:true,
                content:function (){
       player.recover();
       player.removeSkill('MYerjisetong');
       player.addSkill('MYyijisetong');             
     },
                ai:{
                    threaten:1.4,
                },
                group:["MYerjisetong_1"],
                subSkill:{
                    "1":{
                        trigger:{
                            player:"phaseDrawBegin",
                        },
                        direct:true,
                        content:function (){
        'step 0'
        var cards=get.cards(5);
        var cards2=cards.slice(0);
        var card=(cards2.splice(event.num-1,1))[0];
         player.draw();
         event.list=cards2;
        'step 1'
        player.chooseCardButton(event.list,true,'按顺序将牌置于牌堆顶（先选择的在上）',event.list.length);
        'step 2'
        var list=result.links.slice(0);
        while(list.length){
            ui.cardPile.insertBefore(list.pop(),ui.cardPile.firstChild);
        }
    },
                        sub:true,
                    },
                },
            },
            MYyijisetong:{
                trigger:{
                    player:"phaseDrawBegin",
                },
                direct:true,
                content:function (){
        'step 0'
        var cards=get.cards(6);
        var cards2=cards.slice(0);
        var card=(cards2.splice(event.num-1,1))[0];       
         event.list=cards2;
        'step 1'
        player.chooseCardButton(event.list,true,'按顺序将牌置于牌堆顶（先选择的在上）',event.list.length);
        'step 2'
        var list=result.links.slice(0);
        while(list.length){
            ui.cardPile.insertBefore(list.pop(),ui.cardPile.firstChild);
        }
        'step 3'   
        trigger.num++;       
                
    },
            },
            MYsanjisetong:{
                trigger:{
                    global:"dieAfter",
                },
                direct:true,
                content:function (){
        player.recover();
        player.removeSkill('MYsanjisetong');
        player.addSkill('MYerjisetong');        
     },
                ai:{
                    threaten:1.4,
                },
                group:["MYsanjisetong_1"],
                subSkill:{
                    "1":{
                        trigger:{
                            player:"phaseDrawBegin",
                        },
                        direct:true,
                        content:function (){
        'step 0'
        var cards=get.cards(5);
        var cards2=cards.slice(0);
        var card=(cards2.splice(event.num-1,1))[0];
         
         event.list=cards2;
        'step 1'
        player.chooseCardButton(event.list,true,'按顺序将牌置于牌堆顶（先选择的在上）',event.list.length);
        'step 2'
        var list=result.links.slice(0);
        while(list.length){
            ui.cardPile.insertBefore(list.pop(),ui.cardPile.firstChild);
        }
    },
                        sub:true,
                    },
                },
            },
            MYdulongewu:{
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                filter:function (event,player){
        return event.source&&event.source.isIn()&&event.source!=player&&!event.source.hasJudge('du');
    },
                check:function (event,player){
        return get.attitude(player,event.source)<=0;
    },
                logTarget:"source",
                content:function (){
          "step 0"        
         player.chooseControl('来源获毒','自己获毒').set('ai',function(event){
            if(player.countCards('h')>2) return '来源获毒';
            return '自己获毒';
        });
        "step 1"
        if(result.control=='来源获毒'){ trigger.source.gain(game.createCard("du"));  }  
      else
        if(result.control=='自己获毒'){ player.gain(game.createCard("du")); }   
        
                     
    },
                ai:{
                    "maixie_defend":true,
                },
                group:["MYdulongewu_1"],
                subSkill:{
                    "1":{
                        audio:"ext:沧海横流:1",
                        trigger:{
                            player:"duBegin",
                        },
                        frequent:true,
                        content:function (){
        trigger.cancel();
        player.draw(2);
    },
                        ai:{
                            threaten:1.2,
                            nodu:true,
                            usedu:true,
                        },
                        sub:true,
                    },
                },
            },
            MYwangqinzhehu:{
                audio:"ext:沧海横流:1",
                trigger:{
                    global:"taoBegin",
                },
                filter:function (event,player){
        if(player.identity!='zhu') return false;            
        return event.player!=player;
    },
                check:function (event,player){
        return get.attitude(player,event.player)<0;
    },
                content:function (){
        
        trigger.cancel();
  },
            },
            MYchunhanduanzhang:{
                audio:"ext:沧海横流:1",
                trigger:{
                    source:"damageEnd",
                },
                check:function (event,player){
        var att=get.attitude(player,event.player);
        if(event.player.hp>0) return att<=0;
        return att>0;   
    },
                filter:function (event,player){
return event.player!=player;
},
                content:function (){
        trigger.player.addSkill('MYchunhanduanzhang2');
    },
            },
            "MYchunhanduanzhang2":{
                mod:{
                    cardEnabled:function (card,player){
            if(_status.currentPhase!=player) return;
            if(get.cardCount(true,player)>=2){
                return false;
            }
        },
                },
                mark:true,
                intro:{
                    content:function (storage,player){
            return '出牌阶段只能使用两张牌，受到伤害后解除此状态';
        },
                },
                group:["MYchunhanduanzhang2_1"],
                subSkill:{
                    "1":{
                        trigger:{
                            player:"damageEnd",
                        },
                        forced:true,
                        content:function (){
            player.removeSkill('MYchunhanduanzhang2');   
            },
                        sub:true,
                    },
                },
            },
            MYquyifengying:{
                audio:"ext:沧海横流:2",
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                content:function (){
             'step 0'
        player.chooseTarget('武将牌翻面并摸两张牌，令一名其他角色进入额外的回合，并且拥有"春寒断掌"到其回合结束',function(card,player,target){
            return player!=target;
        }).ai=function(target){
            var num=get.attitude(player,target);
            if(num>0){
                if(player==target){
                    num++;
                }
                if(target.hp==1){
                    num+=3;
                }
                if(target.hp==2){
                    num+=1;
                }
            }
            return num;
        }
        'step 1'
        if(result.bool){
            player.turnOver();        
            player.draw(2);            
            player.logSkill('MYquyifengying',result.targets[0]);
            result.targets[0].insertPhase();
            result.targets[0].addTempSkill('MYchunhanduanzhang',{player:'phaseAfter'});
        }
    },
                ai:{
                    threaten:1.5,
                    expose:0.2,
                },
            },
            MYganchangcunduan:{
                trigger:{
                    player:"loseEnd",
                },
                frequent:true,
                filter:function (event,player){
        if(player==_status.currentPhase) return false;
        for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].original&&event.cards[i].original!='j') return true;
        }
        return false;
    },
                content:function (){
           "step 0"
         player.chooseTarget('选择一名其他角色，获得其一张牌并对其造成一点伤害',function(card,player,target){
            return player!=target&&target.countCards('he')>0;
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target);
        });
        "step 1"
        if(result.bool){
            player.logSkill('MYganchangcunduan',result.targets);
            event.target=result.targets[0];          
            player.gainPlayerCard(event.target,true);
            result.targets[0].damage();          
        }
        else{
            event.finish();
        }
     
    },
            },
            MYduanbingchuqiao:{
                trigger:{
                    player:["useCardAfter","loseEnd"],
                },
                filter:function (event,player){
        for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].original=='e') return true;
        }
        
        return get.type(event.card)=='equip';             
        return false;
    },
                forced:true,
                popup:false,
                unique:true,
                content:function (){
        player.removeAdditionalSkill('MYduanbingchuqiao');
        var list=[];
        if(player.countCards('e')>=4){
            list.push('tieji');
        }        
        if(player.countCards('e')>=3){
            list.push('leiji');
        }
        if(player.countCards('e')>=2){
            list.push('duanliang');
        }
        if(player.countCards('e')>=1){
            list.push('guose');
        }
        if(list.length){
            player.addAdditionalSkill('MYduanbingchuqiao',list);
        }
    },
                ai:{
                    threaten:1.4,
                    noautowuxie:true,
                },
            },
            MYyakouwuyan:{
                trigger:{
                    global:"judgeBegin",
                },
                filter:function (event,player){
        return player!==event.player;
    },
                check:function (event,player){
        return get.attitude(player,event.player)<0;
    },
                content:function (){          
       trigger.player.loseHp();      
       player.draw(2);             
        
    },
            },
            MYpaishajianjin:{
                audio:"ext:沧海横流:1",
                enable:"phaseUse",
                usable:1,
                filterTarget:true,
                check:function (card){
        return 6-ai.get.value(card);
    },
                content:function (){  
        "step 0"
        target.showHandcards();
         "step 1"
        var cards=target.getCards('h');
        for(var i=1;i<cards.length;i++){       
          if(get.color(cards[i])!=get.color(cards[0])) return false;            
            
        }
       event.goto(3);
        
           "step 2"     
       event.goto(4);  
            "step 3"   
       if(player.hp<player.maxHp){ 
           player.recover();  
           }else{
         player.draw(2);   
             }             
        event.goto(5);              
          "step 4"
       event.player.useCard({name:'sha'},target,false);         
          "step 5"
         event.finish();     
    },
                ai:{
                    order:9,
                    result:{
                        target:-0.5,
                    },
                    threaten:1.2,
                },
            },
            MYzitonghanchan:{
                trigger:{
                    player:"damageEnd",
                },
                content:function (){
       
        "step 0"
        game.playMY('MYzitonghanchan1');
        player.showHandcards();
        "step 1"
        
        var cards=player.getCards('h');
        for(var i=1;i<cards.length;i++){
        if (get.color(cards[i])!=get.color(cards[0])) event.goto(3);
        }
            "step 2"
            event.goto(5);
            "step 3"
        player.chooseTarget(get.prompt('MYzitonghanchan'),function(card,player,target){
            return lib.filter.targetEnabled({name:'sha'},player,target);
        }).set('ai',function(target){
            return get.effect(target,{name:'sha'},_status.event.player);
        });
        "step 4"
        if(result.bool){
            player.logSkill('MYzitonghanchan');
            player.useCard({name:'sha'},result.targets,false);
            event.goto(6);            
        };
               
        "step 5"
             player.draw(2);
        "step 6"
            event.finish();                    
    },
                ai:{
                    "maixie_defend":true,
                    threaten:0.9,
                },
            },
            MYyuanrongbilou:{
                trigger:{
                    player:"phaseEnd",
                },
                filter:function (event,player){
        return player.countCards('he')>0;
    },
                content:function (){
        
       player.chooseToDiscard('he',true);        
        
         var hp=player.hp;
        player.reinit('MYjinxiansheng','MYwukuang',false);  
        player.hp=hp;
        player.update();
        ui.clear();
 
    },
            },
            MYyinxingmaiming:{
                audio:"ext:沧海横流:1",
                trigger:{
                    player:"phaseEnd",
                },
                content:function (){
        
        player.draw(2);    
        
         var hp=player.hp;
       player.reinit('MYwukuang','MYjinxiansheng',false);    
        player.hp=hp;
        player.update();
        ui.clear();
 
    },
            },
            MYshamieshuangfu:{
                trigger:{
                    player:"loseEnd",
                },
                direct:true,
                filter:function (event,player){     
            for(var i=0;i<event.cards.length;i++){
                if(event.cards[i].original=='e') return true;
            }
        
        return false;
    },
                content:function (){
        "step 0"
        player.chooseTarget([1,2],get.prompt('MYshamieshuangfu'),function(card,player,target){
           return player!=target;
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target);
        });
        "step 1"
        if(result.bool){
            player.logSkill('MYshamieshuangfu',result.targets);
            event.targets=result.targets
            if(result.targets.length==1){
                player.useCard({name:'sha'},result.targets,false);
                player.useCard({name:'sha'},result.targets,false);
            }
            
        }
        else{
            event.finish();
        }
        "step 2"
        if(targets.length==2){
            player.useCard({name:'sha'},result.targets,false);
        }
    },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                if(get.type(card)=='equip') return [1,3];
            },
                    },
                    reverseEquip:true,
                    noe:true,
                },
                group:["MYshamieshuangfu_1"],
                subSkill:{
                    "1":{
                        audio:"ext:沧海横流:2",
                        trigger:{
                            player:"damageEnd",
                        },
                        frequent:true,
                        content:function (){
         player.draw();      
                
        var card=game.createCard(get.inpile('equip').randomGet());
        player.equip(card);
        player.$gain2(card);
        game.delay(); 
    
    },
                        sub:true,
                    },
                },
            },
            MYleibaojuntuan:{
                audio:"ext:沧海横流:1",
                trigger:{
                    player:"useCardToBegin",
                },
                check:function (event,player){
        return get.attitude(player,event.target)<0;
    },
                filter:function (event,player){
        
    return event.target!=player&&get.type(event.card,'trick')=='trick'&&event.card.name!='wuxie';    },
                content:function (){
        'step 0'
        if(get.info(trigger.card).multitarget){
            event.list=trigger.targets.slice(0);
        }
        else{
            trigger.target.damage();
            event.finish();
        }
        'step 1'
        if(event.list.length){
            event.list.shift().damage();
            event.redo();
        }
    },
            },
            MYnanmandanyu:{
                audio:"ext:沧海横流:2",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        return player.countCards('he',{color:'black'})>0;
    },
                filterCard:{
                    color:"black",
                },
                position:"he",
                content:function (){
        
                    switch(get.suit(cards[0],'spade')){
                    case 'heart':break;
                    case 'diamond':break;
                    case 'club':
            var list=game.filterPlayer(function(current){
            return player.canUse('nanman',current);
        });
        list.sort(lib.sort.seat);
        player.useCard({name:'nanman'},list);   
                break;
            case 'spade':
           var list=game.filterPlayer(function(current){
            return player.canUse('wanjian',current);
        });
        list.sort(lib.sort.seat);
        player.useCard({name:'wanjian'},list);
               break;
          default:return 0;
                }
    },
                ai:{
                    order:3,
                    result:{
                        player:1,
                    },
                },
            },
            MYezhanwuju:{
                trigger:{
                    source:"damageBegin",
                },
                check:function (event,player){
        var att=get.attitude(player,event.player);
        if(event.player.hp>0) return att<=0;
        return att>0;
        
    },
                filter:function (event,player){
    
    return (event.card.name=='nanman'||event.card.name=='wanjian')&&(event.player.countCards('h')>=player.countCards('h')||event.player.hp>=player.hp);
    },
                content:function (){
        if(trigger.player.countCards('h')>=player.countCards('h')) player.gainPlayerCard(trigger.player,'he',true);
       
        if(trigger.player.hp>=player.hp) trigger.num++;           
         
    },
            },
            MYyanwuluoyi:{
                audio:"ext:沧海横流:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return target!=player;
    },
                filter:function (event,player){
        return player.countCards('he',{color:'black'})>0;
    },
                position:"he",
                filterCard:{
                    color:"black",
                },
                check:function (card){
        return 9-get.value(card)
    },
                content:function (){
        "step 0"
                switch(get.suit(cards[0],'spade')){
                    case 'heart':break;
                    case 'diamond':break;
                    case 'club':
            var list=game.filterPlayer(function(current){
            return player.canUse('nanman',current);
        });
        list.sort(lib.sort.seat);
        target.gain(game.createCard("nanman"),list);   
                break;
            case 'spade':
           var list=game.filterPlayer(function(current){
            return player.canUse('wanjian',current);
        });
        list.sort(lib.sort.seat);
        target.gain(game.createCard("wanjian"),list);
               break;
          default:return 0;
                }
           "step 1"
            player.draw();
    
        
    },
                ai:{
                    order:9,
                    result:{
                        target:1,
                    },
                    threaten:1.2,
                },
            },
            MYxiangyuchushe:{
                trigger:{
                    target:"useCardToBefore",
                },
                forced:true,
                priority:15,
                filter:function (event,player){
return (event.card.name=='nanman'||event.card.name=='wanjian');
    },
                content:function (){
trigger.cancel();
player.draw();      
    },
            },
            MYgangjintiegu:{
                trigger:{
                    player:["loseHpBefore","loseMaxHpBefore"],
                },
                forced:true,
                content:function (){
        trigger.cancel();
    },
                ai:{
                    threaten:1.5,
                },
                group:["MYgangjintiegu_1"],
                subSkill:{
                    "1":{
                        trigger:{
                            player:"damageBefore",
                        },
                        forced:true,
                        filter:function (event,player){           
        
        return player.countCards('e')>0;
    },
                        content:function (){
            trigger.cancel();
    },
                        sub:true,
                    },
                },
            },
            MYgouhunliandao:{
                audio:"ext:沧海横流:1",
                trigger:{
                    player:"shaBegin",
                },
                forced:true,
                filter:function (event){
        return event.target.countCards('he')>0;
    },
                content:function (){
      player.discardPlayerCard(1,'he',trigger.target,true);        
        
    },
                group:["MYgouhunliandao_1"],
                subSkill:{
                    "1":{
                        trigger:{
                            source:"damageEnd",
                        },
                        forced:true,
                        filter:function (event){
        
        return event.card&&event.card.name=='sha';
    },
                        content:function (){
            "step 0"
        player.judge(function(card){return (get.color(card)=='black')?1.5:-0.5});
        "step 1"
        if(result.judge>0){
         trigger.player.turnOver();
         trigger.player.gainPlayerCard(player,'e',true);          
        }
   
    },
                        sub:true,
                    },
                },
            },
            MYchunxiaqiudong:{
                trigger:{
                    player:"phaseAfter",
                },
                forced:true,
                content:function (){   
            var n=[1,2,3,4].randomGet();
            if(n==1){player.addTempSkill('MYchunsheng',{player:'phaseEnd'});player.$fullscreenpop('春生','fire');}        
            if(n==2){player.addTempSkill('MYxiarong',{player:'phaseEnd'});player.$fullscreenpop('夏荣','fire');}      
            if(n==3){player.addTempSkill('MYqiuku',{player:'phaseEnd'});player.$fullscreenpop('秋枯','fire');}
            if(n==4){player.addTempSkill('MYdongmie',{player:'phaseEnd'});player.$fullscreenpop('冬灭','fire');}  
},
            },
            MYchunsheng:{
                trigger:{
                    global:"useCard",
                },
                filter:function (event,player){
return event.card.name=='sha'&&event.player!=player;
    },
                mark:true,
                intro:{
                    content:function (storage,player){
            return '其他角色使用【杀】无效';
        },
                },
                forced:true,
                content:function (){
        
            trigger.cancel();
    
    },
                ai:{
                    threaten:1.2,
                    expose:0.2,
                },
            },
            MYxiarong:{
                trigger:{
                    global:["useCard","respond"],
                },
                filter:function (event,player){
return event.card.name=='shan'&&event.player!=player;
    },
                mark:true,
                intro:{
                    content:function (storage,player){
               return '其他角色使用或打出【闪】时，其失去一点体力并摸一张牌';
        },
                },
                forced:true,
                content:function (){
       trigger.player.loseHp();
       trigger.player.draw();        
    
    },
                ai:{
                    threaten:1.2,
                    expose:0.2,
                },
            },
            MYqiuku:{
                trigger:{
                    global:"useCard",
                },
                filter:function (event,player){
    return (get.type(event.card)=='trick'&&event.card.isCard)&&event.player!=player   },
                mark:true,
                intro:{
                    content:function (storage,player){
            return '其他角色使用非转化的普通锦囊牌无效';
        },
                },
                forced:true,
                content:function (){
        
            trigger.cancel();
    
    },
                ai:{
                    threaten:1.2,
                    expose:0.2,
                },
            },
            MYdongmie:{
                trigger:{
                    global:"useCard",
                },
                filter:function (event,player){
return (get.type(event.card)=='equip'&&event.card.isCard)&&event.player!=player  },
                mark:true,
                intro:{
                    content:function (storage,player){
            return '其他角色使用装备牌无效';
        },
                },
                forced:true,
                content:function (){
        
            trigger.cancel();
    
    },
                ai:{
                    threaten:1.2,
                    expose:0.2,
                },
            },
            MYganjiangmoye:{
                trigger:{
                    source:"damageBegin",
                },
                audio:"ext:沧海横流:1",
                filter:function (event,player){
        return event.player!=player;
    },
                check:function (event,player){
        var att=get.attitude(player,event.player);
        if(event.player.hp>0) return att<=0;
        return att>0;
        
    },
                content:function (){
    trigger.num++;
     var card=game.createCard(get.inpile('equip').randomGet());
        trigger.player.equip(card);
        trigger.player.$gain2(card);
        game.delay();
              
        
},
                group:["MYganjiangmoye_1","MYganjiangmoye_2"],
                subSkill:{
                    "1":{
                        trigger:{
                            player:"damageEnd",
                        },
                        audio:"ext:沧海横流:1",
                        check:function (event,player){
        return get.attitude(player,event.source)<0;
    },
                        filter:function (event,player){
        return event.source&&event.source!=player&&event.source.countCards('e')>0;
    },
                        content:function (){
        player.draw(trigger.source.countCards('e'));      
        player.discardPlayerCard(trigger.source,Infinity,'e',true);       
                
     //   trigger.source.discard(trigger.source.getCards('e'));
    },
                        sub:true,
                    },
                    "2":{
                        trigger:{
                            player:"dieBefore",
                        },
                        forced:true,
                        content:function (){       
     trigger.cancel();    
     player.draw(4);    
     player.removeSkill('MYganjiangmoye');           
                
    },
                        sub:true,
                    },
                },
            },
            MYzuishengmengsi:{
                audio:"ext:沧海横流:2",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
        return player.hp<player.maxHp;
    },
                filterTarget:function (card,player,target){
        if(player==target) return false;
        return get.distance(player,target,'attack')<=1;
    },
                content:function () {
        target.damage(player.maxHp-player.hp);
        player.draw(player.maxHp-player.hp);        
    },
                ai:{
                    basic:{
                        order:9,
                        value:3,
                        useful:1,
                    },
                    result:{
                        target:-2,
                    },
                    tag:{
                        loseHp:1,
                    },
                },
            },
            MYhuakuihuaying:{
                audio:"ext:沧海横流:1",
                trigger:{
                    global:"judgeBefore",
                },
                check:function (event,player){
        return get.attitude(player,event.player)>0;
    },
                content:function (){
        trigger.cancel();
        },
                group:["MYhuakuihuaying_1"],
                subSkill:{
                    "1":{
                        audio:"ext:沧海横流:1",
                        trigger:{
                            player:"damageBegin",
                        },
                        forced:true,
                        content:function (){
            trigger.cancel();
            player.loseHp();
            player.draw();  
            player.addTempSkill('MYhuakuihuaying_2',{player:'phaseBefore'});    
                
                
    },
                        sub:true,
                    },
                    "2":{
                        trigger:{
                            player:"damageBefore",
                        },
                        mark:true,
                        intro:{
                            content:function (storage,player){
            return '防止受到的伤害，直到回合开始';
            },
                        },
                        forced:true,
                        content:function (){
            trigger.cancel();
    },
                        sub:true,
                    },
                },
            },
            MYyunwenlianyi:{
                audio:"ext:沧海横流:1",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return target!=player&&target.countCards('he')>0;
    },
                content:function (){
        'step 0'
        player.discardPlayerCard(target,true);
        'step 1'
        if(result.bool){
        
       var card=result.cards[0];
      if(get.color(card)=='black'){
            
          player.draw(2);
          target.recover();          
    }
       else{
             target.draw(2);
             player.recover();
           
                }  
            
            }      
                 
    },
                ai:{
                    order:9,
                    result:{
                        target:1,
                    },
                },
            },
            MYhuarongyuemao:{
                audio:"ext:沧海横流:1",
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                filter:function (event,player){
        return player.countCards('he')>0;
    },
                content:function (){
        "step 0"
        player.chooseTarget(get.prompt('MYhuarongyuemao'),function(card,player,target){
            return player!=target;
        }).set('ai',function(target){
            if(!_status.event.goon) return 0;
            if(target.countCards('he')==0) return 0;
            return -get.attitude(_status.event.player,target);
        }).set('goon',player.countCards('h','sha')<=player.countCards('h')/3);
        "step 1"
        if(result.bool){
            game.delay();
            player.logSkill('MYhuarongyuemao',result.targets);
            event.target=result.targets[0];
            event.target.discardPlayerCard(player,'he',true);
        }
        else{
            event.finish();
        }
        "step 2"
        if(result.bool){
        
       var card=result.cards[0];
      if(get.color(card)=='black'){
          player.draw(2); 
          player.discardPlayerCard(target,2,true);
            
           
    }
       else{
         player.recover();    
         target.loseHp();    
           
                }  
            
            }      
    },
                ai:{
                    expose:0.2,
                    threaten:1.4,
                },
                group:["MYhuarongyuemao_1"],
                subSkill:{
                    "1":{
                        trigger:{
                            player:"damageEnd",
                        },
                        direct:true,
                        content:function (){
    
     for(var i=0;i<game.players.length;i++){
        if(game.players[i].name=='MYjibu'){
                player.changeHujia(trigger.num);
             }
            
            }    
    },
                        sub:true,
                    },
                },
            },
            MYquyanfushi:{
                audio:"ext:沧海横流:1",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
        return target!=player&&target.countCards('he')>0;
    },
                content:function (){
        'step 0'
        var hs=target.getCards('he');
        player.gain(hs,target);
        target.$giveAuto(hs,player);
        event.hs=hs;
        'step 1'
        var damage=(target.hp>=player.hp&&get.damageEffect(target,player,player)>0);
        var hs=event.hs;
        if(damage&&target.hp>1){
            for(var i=0;i<hs.length;i++){
                if(get.value(hs[i],player,'raw')>=8){
                    damage=false;break;
                }
            }
        }
        player.chooseCard(hs.length/2,true,'选择还给'+get.translation(target)+'的牌').ai=function(card){
            if(damage){
                return hs.contains(card)?1:0;
            }
            else{
                return -get.value(card,player,'raw');
            }
        }
        if(!event.isMine()) game.delay();
        'step 2'
        target.gain(result.cards,player);
        player.$giveAuto(result.cards,target);
        event.hs2=result.cards;
        if(player.hp>target.hp){
            target.damage();
        }       
       var chat=['哥哥把牌还给你','不服来打我啊！'].randomGet()
       player.say(chat);
    },
                ai:{
                    order:11,
                    result:{
                        target:function (player,target){
                return -Math.sqrt(target.countCards('he'));
            },
                    },
                },
            },
            MYyuelangzhiyi:{
                audio:"ext:沧海横流:1",
                trigger:{
                    source:"damageEnd",
                },
                check:function (event,player){
        var att=get.attitude(player,event.player);
        if(event.player.hp>0) return att<=0;
        return att>0;
        
    },
                filter:function (event,player){
        return !event.player.hasSkill('MYlangdu')&&event.player!=player;
    },
                content:function (){
        player.gainPlayerCard(trigger.player,2,'he',true);  
        trigger.player.addSkill('MYlangdu');
    },
            },
            MYlangdu:{
                unique:true,
                init:function (player){
        player.storage.MYlangdu=0;
    },
                mark:true,
                intro:{
                    content:"<b>已经使用#张杀。</b><br>(累计使用三张杀后，失去三点体力，然后弃置此标记)",
                },
                trigger:{
                    player:"shaAfter",
                },
                forced:true,
                popup:false,
                content:function (){        
           player.storage.MYlangdu+=1;                      
    },
                group:["MYlangdu_1"],
                subSkill:{
                    "1":{
                        trigger:{
                            player:"shaAfter",
                        },
                        filter:function (event,player){
        if(player.storage.MYlangdu>=3) return true;
        return false;
    },
                        forced:true,
                        unique:true,
                        content:function (){      
            player.loseHp(3);   
            player.removeSkill('MYlangdu');    
             },
                        sub:true,
                    },
                },
            },
            chilianjian:{
                trigger:{
                    player:"shaBegin",
                },
                filter:function (event,player){
        return event.target.countCards('he')>0;
    },
                check:function (event,player){
        return get.attitude(player,event.target)<0;
    },
                content:function (){
        game.playMY('MYchilianjian');
        if (player.sex == 'female'){
         player.discardPlayerCard(2,'he',trigger.target,true);
        }else{
         player.discardPlayerCard(1,'he',trigger.target,true);
     }
    },
            },
            shennongling:{
                trigger:{
                    player:"phaseBegin",
                },
                direct:true,
                content:function (){
        "step 0"
       player.chooseTarget('神农令：选择一名其他角色，令其选择交给你一张手牌或令你摸一张牌',true,function(card,player,target){
                    return target!=player;
                }).set('ai',function(target){
                   
              return -get.attitude(player,target)/Math.sqrt(target.countCards('h'));
                });
        "step 1"
           if(result.bool){
           var target=result.targets[0];
           event.target=target;
      }                
        'step 2'
       
        target.chooseCard('交给'+get.translation(player)+'一张手牌或令其摸一张牌').ai=function(card){
            if(ai.get.attitude(event.current,player)>0){
                return -1;
            }
            else{
                return 3-ai.get.value(card);
            }
        }
        "step 3"
       if(result.bool){
           player.gain(result.cards[0]);
           target.$give(1,player);
        }
        else{
            player.draw();
        }    
        
        
        
    },
            },
            qihaijiaolongjia:{
                mod:{
                    targetEnabled:function (card,player,target){
            if(get.type(card)=='trick'&&player!=target){
                return false;
            }else
            if(get.type(card)=='delay'&&player!=target){
                return false;
            }
        },
                },
                trigger:{
                    player:["respond","useCard"],
                },
                filter:function (event,player){
        return event.card.name=='shan';
    },
                direct:true,
                content:function (){
        player.draw();
    },
            },
            chiyoujian:{
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event,player){
        return event.card&&event.card.name=='sha';
    },
                check:function (event,player){
        if(get.attitude(player,event.player)>=0) return false;        
        return player.hp<=event.player.hp;
    },
                content:function (){   
        game.playMY('MYchiyoujian');
        trigger.cancel();
        trigger.player.loseHp(trigger.player.hp);
        player.goMad({player:'damageEnd'});       
       
    },
            },
            MYbaizhanchuanjia:{
                trigger:{
                    player:["useCard","respond"],
                },
                filter:function (event,player){
        return get.type(event.card)=='basic';
    },
                direct:true,
                content:function (){
   game.playMY('MYbaizhanchuanjia1');
   player.changeHujia(2);
     
    },
            },
            MYwuwangbuli:{
                audio:"ext:沧海横流:1",
                trigger:{
                    player:"phaseEnd",
                },
                filter:function (event,player){
        return player.hujia>3;
    },
                direct:true,
                content:function (){        
         'step 0'
   
        player.chooseTarget('无往不利：选择一名其他角色，对其造成一点伤害并弃置其两张牌',true,function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return -get.attitude(player,target)/(1+target.hp);
        });
        'step 1'
        if(result.bool){
            player.logSkill('MYwuwangbuli',result.targets[0]);
            result.targets[0].damage();         
            player.discardPlayerCard(result.targets[0],player.hujia,true);
            player.changeHujia(-player.hujia);
          
        }
    },
            },
            linghaobaihu:{
                mod:{
                    globalFrom:function (from,to,current){
                
             return current-Infinity;                                     
        },
                },
                unique:true,
                init:function (player){
        player.storage.linghaobaihu=3;
    },
                mark:true,
                intro:{
                    content:"还剩#回合",
                },
                trigger:{
                    player:"phaseEnd",
                },
                forced:true,
                popup:false,
                content:function (){        
         player.storage.linghaobaihu--;     
       if(player.storage.linghaobaihu<=0){
        player.removeSkill('linghaobaihu');
        player.discard(player.getEquip(4));   
        }
                         
    },
            },
            shenlou:{
                mod:{
                    maxHandcard:function (player,num){
            return 3+num;
        },
                },
            },
            "xinliegong4":{
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event){
        return event.card&&event.card.name=='sha'&&event.notLink();
    },
                forced:true,
                audio:"ext:沧海横流:false",
                content:function (){
        trigger.num++;
    },
            },
        },
        translate:{
            MYqianrenqianmian:"千人千面",
            "MYqianrenqianmian_info":"限定技，出牌阶段，你可以减两点体力上限，然后获得分身喜怒哀乐，分身没有装备区，并且初始手牌与体力上限都为2。",
            MYxinuaile:"喜怒哀乐",
            "MYxinuaile_info":"<br><font color=#F0F>喜</font> ：当你对其他角色造成伤害后，你可以进行一次判定，若结果为红色，你摸一张牌。<br> <font color=#F0F>怒</font> ：当你受到伤害后，你可以进行一次判定，若结果为红色，你令伤害来源武将牌翻面。<br> <font color=#F0F>哀</font> ：当你的杀被闪避后，你可以进行一次判定，若结果为红色，你弃置目标一张牌。<br> <font color=#F0F>乐</font> ：当其他角色触发你使用或打出闪后，你可以进行一次判定，若结果为红色，你对其造成一点伤害。",
            MYai:"哀",
            "MYai_info":"当你的杀被闪避后，你可以进行一次判定，若结果为红色，你弃置目标一张牌。",
            MYle:"乐",
            "MYle_info":"当其他角色触发你使用或打出闪后，你可以进行一次判定，若结果为红色，你对其造成一点伤害。",
            MYxi:"喜",
            "MYxi_info":"当你对其他角色造成伤害后，你可以进行一次判定，若结果为红色，你摸一张牌。",
            MYnu:"怒",
            "MYnu_info":"当你受到伤害后，你可以进行一次判定，若结果为红色，你令伤害来源武将牌翻面。",
            MYyinggongzhaomen:"硬功罩门",
            "MYyinggongzhaomen_info":"锁定技，回合外你获得牌后，你减一点体力上限。",
            MYtongtoutiebi:"铜头铁臂",
            "MYtongtoutiebi_info":"锁定技，你防止受到的伤害。",
            MYzhuifenghujian:"追风弧箭",
            "MYzhuifenghujian_info":"当你使用的杀被闪避后，你可以视为对另一名角色使用一张无视距离的杀，如此循环，直到此杀造成伤害，然后获得以此技能选择过的每名目标的一张牌。",
            MYqijirufeng:"其疾如风",
            "MYqijirufeng_info":"当你成为杀的目标后，你可以获得一名其他角色的一张牌。",
            MYkuanglieaogu:"狂烈傲骨",
            "MYkuanglieaogu_info":"当你受到伤害时，你可以获得伤害来源两张牌，然后其回复一点体力。",
            MYhupojianfa:"虎魄剑法",
            "MYhupojianfa_info":"锁定技，当你使用杀对目标造成伤害后，若你装备区有牌，你获得目标装备区一张牌，若目标装备区没牌，你获得其一张手牌，然后此杀造成伤害+x；你的手牌上限+x(x为你装备区的装备数)。",
            MYhuajianyinhu:"花间隐虎",
            "MYhuajianyinhu_info":"当你受到伤害时，你摸一张牌并获得等同于你受到伤害的隐虎标记。出牌阶段限一次，你可以选择任意名目标，并弃置等量的隐虎标记和摸等量的牌，令目标减一点体力上限。",
            "MYhuajianyinhu2":"花间隐虎",
            "MYhuajianyinhu2_info":"",
            MYyinuoqianjin:"一诺千金",
            "MYyinuoqianjin_info":"出牌阶段限一次，你可以将一张方片手牌交给一名没有黄金牡丹标记的其他角色，并自己回复一点体力，该角色获得黄金牡丹标记，拥有标记的角色回合开始时，若装备区没牌，其随机装备一件装备，若装备区有牌，其摸一张牌，然后弃置标记。",
            MYhuangjinmudan:"黄金牡丹",
            "MYhuangjinmudan_info":"",
            MYchayanguanse:"察言观色",
            "MYchayanguanse_info":"出牌阶段限一次，你可以观看一名角色的手牌，并弃置其一张方片牌，然后对其造成一点伤害，以及该角色的手牌始终展示，直到其使用杀后取消展示手牌。",
            MYchayan:"察言观色",
            "MYchayan_info":"",
            MYjingyitishen:"惊鲵替身",
            "MYjingyitishen_info":"当你受到伤害后，你可以令伤害来源替你承受一次除体力流失和闪电以外的所有伤害，并且你进行一次判定，若结果为黑色，你的摸牌阶段，额外摸一张牌；若结果为红色，你的准备阶段，可以视为使用一张无视距离的杀。",
            MYwulikanhua:"雾里看花",
            "MYwulikanhua_info":"两回合限一次，出牌阶段，你可以令一名其他角色选择一种花色，然后该角色获得你的一张手牌并展示之，若此牌的花色与其所选的花色不同，则其减一点体力上限，并且你摸两张牌。",
            MYwumeiyaorao:"妩媚妖娆",
            "MYwumeiyaorao_info":"当你使用红色牌指定其他角色为目标时，你可以将此牌当乐不思蜀置于该目标判定区内，并且你回复一点体力。",
            MYhongyanhuoshui:"红颜祸水",
            "MYhongyanhuoshui_info":"觉醒技，当你累计受到三点伤害后，回合开始时，你进行一次判定，若结果为红色，你获得技能红颜，若结果为黑色，你获得技能离间。",
            MYxiyuxiongshi:"西域雄狮",
            "MYxiyuxiongshi_info":"当你使用基本牌或非延时锦囊牌后，若还有结算条件，你可以选择摸一张牌或额外结算一次；当你使用装备牌后，你可以选择一名其他角色，其视为使用一张相同装备牌。",
            MYqishizhuiji:"骑士追击",
            "MYqishizhuiji_info":"结束阶段，若你于此回合内造成的伤害不小于三点，则你摸三张牌，若你于此回合内杀死至少一名角色，则你进行一个额外的回合。",
            MYhantaizudi:"汉太祖帝",
            "MYhantaizudi_info":"主公技，当其他蜀国角色受到伤害后，你摸一张牌；当其他蜀国角色死亡后，你回复一点体力值。",
            MYzhirenshanyong:"知人善用",
            "MYzhirenshanyong_info":"当一名角色受到伤害后，若伤害来源不是你，你可以弃置一张牌，并摸一张牌，然后你弃置该伤害来源的一张牌，最后你进行一次判定，若结果为红色，该受伤角色获得技能\"才华横溢\"，直到其回合结束。",
            MYcaihuahengyi:"才华横溢",
            "MYcaihuahengyi_info":"锁定技，你使用黑色牌指定的目标+1，当使用或打出红色牌时，你摸一张牌。",
            MYnuzhanbaishe:"怒斩白蛇",
            "MYnuzhanbaishe_info":"当你对其他角色造成伤害后，若其体力值为1，你可以令其失去所有技能。",
            MYsimianchuge:"四面楚歌",
            "MYsimianchuge_info":"出牌阶段限一次，你可以令所有角色选择一项：令你摸一张牌，或者与你拼点，胜了对你造成一点伤害，否则你对其造成一点伤害并获得其一张牌。",
            MYpofuchenzhou:"破釜沉舟",
            "MYpofuchenzhou_info":"回合开始时，若你的装备区里没有【破阵霸王枪】，你使用之；出牌阶段限一次，你可以弃置一至两张装备牌，然后摸等量的牌。",
            MYbawangbieji:"霸王别姬",
            "MYbawangbieji_info":"限定技，当一名女性角色死亡后，你可以令一名除你外的男性角色进入濒死状态。",
            shuihanjian:"水寒剑",
            "shuihanjian_info":"",
            pozhenbawangqang:"破阵霸王枪",
            "pozhenbawangqang_info":"",
            MYmokongzhenqi:"墨空真气",
            "MYmokongzhenqi_info":"当你对其他角色造成伤害后，你获得三枚“墨空真气”标记；你的手牌上限与攻击距离+X，每回合额外使用X张杀（X为“墨空真气”标记的数量），你的结束阶段，失去一枚“墨空真气”标记。",
            MYxiaguhaoqing:"侠骨豪情",
            "MYxiaguhaoqing_info":"摸牌阶段，若你没有杀，你可以额外获得一张杀；结束阶段，若你没有闪，你摸一张牌。",
            MYyejintianming:"夜尽天明",
            "MYyejintianming_info":"觉醒技，当你受到伤害后，若你体力值不大于2，你须减一点体力上限和回复一点体力值，并从三个随机亮出的技能中选择一个获得。",
            jiguanxuanwu:"机关玄武",
            "jiguanxuanwu_info":"",
            MYhaodukongju:"豪赌控局",
            "MYhaodukongju_info":"摸牌阶段，你可以弃置所有手牌，然后掷一次骰子，并把摸牌数改为X，X为掷骰子的点数，若点数不大于3，你回复一点体力。",
            MYjiuzhuanduanhun:"九转断魂",
            "MYjiuzhuanduanhun_info":"出牌阶段限一次，你可以弃置一张牌，并选择任意名体力值大于你的角色，然后令这些角色赌大小掷骰子，输了失去一点体力并弃置两张牌。",
            MYerjisetong:"阴阳色瞳",
            "MYerjisetong_info":"<font color=#F0F>二级色瞳</font> ：摸牌阶段，你额外摸一张牌，然后你观看牌堆顶四张牌并按任意顺序将其置于牌堆顶；当一名角色死亡后，你回复一点体力并升级此技能。",
            MYyijisetong:"阴阳色瞳",
            "MYyijisetong_info":"<font color=#F0F>一级色瞳</font> ：摸牌阶段，你观看牌堆顶五张牌并按任意顺序将其置于牌堆顶，并且你额外摸一张牌。",
            MYsanjisetong:"阴阳色瞳",
            "MYsanjisetong_info":"<font color=#F0F>三级色瞳</font> ：摸牌阶段，你观看牌堆顶四张牌并按任意顺序将其置于牌堆顶；当一名角色死亡后，你回复一点体力并升级此技能。",
            MYdulongewu:"毒泷恶雾",
            "MYdulongewu_info":"当你受到伤害后，你选择令伤害来源或自己获得一张毒；毒对你无效，你使用毒后摸两张牌。",
            MYwangqinzhehu:"亡秦者胡",
            "MYwangqinzhehu_info":"主公技，当其他角色使用桃时，你可以令其无效。",
            MYchunhanduanzhang:"春寒断掌",
            "MYchunhanduanzhang_info":"当你对其他角色造成伤害后，你可以令其出牌阶段只能使用两张牌，当其受到伤害后，解除此效果。",
            "MYchunhanduanzhang2":"春寒断掌",
            "MYchunhanduanzhang2_info":"",
            MYquyifengying:"曲意逢迎",
            "MYquyifengying_info":"结束阶段，你可以将武将牌翻面并摸两张牌，然后令一名其他角色进入额外的回合，并且拥有\"春寒断掌\"到其回合结束。",
            MYganchangcunduan:"肝肠寸断",
            "MYganchangcunduan_info":"每当你于回合外失去牌时，你可以选择一名其他角色，获得其一张牌并对其造成一点伤害。",
            MYduanbingchuqiao:"短兵出鞘",
            "MYduanbingchuqiao_info":"锁定技，根据你装备区的装备数，拥有以下技能：<br>①国色②断粮③雷击④铁骑",
            MYyakouwuyan:"哑口无言",
            "MYyakouwuyan_info":"其他角色判定时，你可以令其失去一点体力，然后你摸两张牌。",
            MYpaishajianjin:"排沙见金",
            "MYpaishajianjin_info":"出牌阶段限一次，你可以展示一名角色的所有手牌，若颜色不同，你视为对其使用一张不计入出杀次数的杀，若颜色相同或没有手牌，你回复一点体力，若未损失体力改为摸两张牌。",
            MYzitonghanchan:"自同寒蝉",
            "MYzitonghanchan_info":"当你受到伤害后，你可以展示所有手牌，若颜色不同，你可以选择一名其他角色，视为对其使用一张杀，若颜色相同或没有手牌，你摸两张牌。",
            MYyuanrongbilou:"原容毕露",
            "MYyuanrongbilou_info":"结束阶段，你可以弃置一张牌并变身为吴旷。",
            MYyinxingmaiming:"隐姓埋名",
            "MYyinxingmaiming_info":"结束阶段，你可以摸两张牌并变身为金先生。",
            MYshamieshuangfu:"杀灭双斧",
            "MYshamieshuangfu_info":"当你受到伤害时，你摸一张牌并随机装备一件装备；当你失去装备区的牌时，你可以选择一名角色，视为对其使用两张杀，或选择两名角色，视为对其各使用一张杀。",
            MYleibaojuntuan:"雷豹军团",
            "MYleibaojuntuan_info":"当你对其他角色使用锦囊牌时，你可以对该锦囊目标造成一点伤害。",
            MYnanmandanyu:"南蛮单于",
            "MYnanmandanyu_info":"出牌阶段限一次，你可以弃置一张黑桃，视为使用一张【万箭齐发】，或弃置一张梅花，视为使用一张【南蛮入侵】。",
            MYezhanwuju:"恶战无惧",
            "MYezhanwuju_info":"当你使用【南蛮入侵】或【万箭齐发】造成伤害时，若目标角色的体力值不小于你，你可以令此伤害+1。若目标角色手牌数不小于你，你可以获得其一张牌。",
            MYyanwuluoyi:"艳舞罗衣",
            "MYyanwuluoyi_info":"出牌阶段限一次，你可以弃置一张黑色牌并选择一名其他角色，若为黑桃，该目标获得一张【万箭齐发】，若为梅花，该目标获得一张【南蛮入侵】，然后你摸一张牌。",
            MYxiangyuchushe:"象欲除蛇",
            "MYxiangyuchushe_info":"其他角色使用的【南蛮入侵】和【万剑齐发】对你无效，并且你摸一张牌。",
            MYgangjintiegu:"钢筋铁骨",
            "MYgangjintiegu_info":"锁定技，体力流失和减体力上限对你无效；当你装备区有牌时，防止受到的伤害。",
            MYgouhunliandao:"勾魂镰刀",
            "MYgouhunliandao_info":"锁定技，你使用杀时，弃置目标一张牌，当此杀造成伤害后，你进行一次判定，若结果为黑色，目标武将牌翻面并且获得你装备区一张牌。",
            MYchunxiaqiudong:"春夏秋冬",
            "MYchunxiaqiudong_info":"锁定技，结束阶段，你随机获得一种效果直到下回合结束： <br><font color=#F0F>春生</font> ：其他角色使用【杀】无效。<br> <font color=#F0F>夏荣</font> ：其他角色使用或打出【闪】时，其失去一点体力并摸一张牌。<br> <font color=#F0F>秋枯</font> ：其他角色使用非转化的普通锦囊牌无效。<br> <font color=#F0F>冬灭</font> ：其他角色使用装备牌无效。",
            MYchunsheng:"春生",
            "MYchunsheng_info":"",
            MYxiarong:"夏荣",
            "MYxiarong_info":"",
            MYqiuku:"秋枯",
            "MYqiuku_info":"",
            MYdongmie:"冬灭",
            "MYdongmie_info":"",
            MYganjiangmoye:"干将莫邪",
            "MYganjiangmoye_info":"当你对其他角色造成伤害后，你可以令其随机装备一件装备牌，然后令此伤害+1；当你受到伤害后，你可以摸x张牌(x为伤害来源装备区的牌数)，然后伤害来源弃置装备区所有牌；你免疫一次死亡，然后摸四张牌并失去此技能。",
            MYzuishengmengsi:"醉生梦死",
            "MYzuishengmengsi_info":"出牌阶段限一次，你可以对距离内的一名其他角色造成x点伤害，并且你摸x张牌(x为你损失的体力值)。",
            MYhuakuihuaying:"花魁花影",
            "MYhuakuihuaying_info":"你可以取消任意角色的判定；当你受到伤害时，改为失去一点体力并摸一张牌，然后你防止受到的伤害，直到回合开始。",
            MYyunwenlianyi:"云纹涟漪",
            "MYyunwenlianyi_info":"出牌阶段限一次，你可以弃置一名其他角色的一张牌，若弃置的为黑色牌，你摸两张牌，其回复一点体力，若弃置的为红色牌，其摸两张牌，你回复一点体力。",
            MYhuarongyuemao:"花容月貌",
            "MYhuarongyuemao_info":"结束阶段，你可以令一名其他角色弃置你一张牌，若弃置你的为黑色牌，你摸两张牌并且弃置其两张牌，若弃置你的为红色牌，你回复一点体力并且其失去一点体力；当你受到伤害后，若场上有\"季布\"存活，你获得等量的护甲。",
            MYquyanfushi:"趋炎附势",
            "MYquyanfushi_info":"出牌阶段限一次，你可以获得一名其他角色的所有牌，然后还给其等量牌的一半向下取整，若其体力值小于你体力值，你对其造成一点伤害。",
            MYyuelangzhiyi:"月狼之裔",
            "MYyuelangzhiyi_info":"当你对其他没有\"狼毒\"标记的角色造成伤害后，你可以令其获得\"狼毒\"标记并且获得其两张牌，拥有标记的角色累计使用三张杀后，失去三点体力，然后弃置此标记。",
            MYlangdu:"狼毒",
            "MYlangdu_info":"",
            chilianjian:"赤练剑",
            "chilianjian_info":"",
            shennongling:"神农令",
            "shennongling_info":"",
            qihaijiaolongjia:"七海蛟龙甲",
            "qihaijiaolongjia_info":"",
            chiyoujian:"蚩尤剑",
            "chiyoujian_info":"",
            MYbaizhanchuanjia:"百战穿甲",
            "MYbaizhanchuanjia_info":"每当你使用或打出一张基本牌，你获得两点护甲。",
            MYwuwangbuli:"无往不利",
            "MYwuwangbuli_info":"结束阶段，若你的护甲数大于三，你选择一名其他角色，对其造成一点伤害并弃置其X张牌，X为你的护甲数，然后你失去所有护甲。",
            linghaobaihu:"零号白虎",
            "linghaobaihu_info":"",
            shenlou:"蜃楼",
            "shenlou_info":"",
            "xinliegong4":"破阵霸王枪",
            "xinliegong4_info":"",
        },
    },
    intro:"续写秦时明月，武将强度略高，请配合相同强度的扩展使用，或者禁用变态武将，有bug请反馈。",
    author:"呲牙哥！",
    diskURL:"",
    forumURL:"",
    version:"1.0",
},files:{"character":["MYwangli.jpg"],"card":["MYshenlou.png"],"skill":[]}}})