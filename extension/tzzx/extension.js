game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"天灾之下",editable:false,content:function(config,pack){

        //禁止ai
        if (config.disEnableCharacter) {
            var savedFilter = lib.filter.characterDisabled;
            lib.filter.characterDisabled = function (i, libCharacter) {
                if (i && i.indexOf('ark') != 0) {
                    return true;
                }
                return savedFilter(i, libCharacter);
            };
        }

        ///////
        var f=function(英文名){if(config[英文名]){for(var i in lib.characterPack[英文名]) {if(lib.character[i][4].indexOf("forbidai")<0)lib.character[i][4].push("forbidai");}}};
        f("kazidaier");
        ////////
        lib.skill._choose={
            trigger:{player:['choosePlayerCardBegin','discardPlayerCardBegin','gainPlayerCardBegin']},
            forced:true,
            priority:Infinity,
            content:function(){

            },
        }
        lib.skill._deletemark={
            trigger:{player:'loseAfter'},
            priority:2,
            forced:true,
            unique:true,
            filter:function(event,player){
                return player.getHandcard().length<1;
            },
            content:function (){
                player.removeSkill('viewHandcard')
            },
        }


        //隐藏武将



        if(!lib.config.mode_config.identity.double_character){
            if(lib.config.ark_gezhe==10){
                var ark_gezhe=["female","zmfa",4,["zhuayuewusheng","zyutubanshen","zguanghanlingshuang","zjiyuelianyan","ztaiyinjungao"],['ext:天灾之下/audio/ark_gezhe.jpg',"zhu","des:"]];

                lib.character.ark_gezhe=ark_gezhe;
                lib.characterPack.mode_extension_天灾之下.ark_gezhe=lib.character.ark_gezhe;
            }

        };



        if(lib.config.ark_gezhe==true) game.saveConfig('ark_gezhe',10);
        if(lib.config.ark_gezhe!=0&&lib.config.ark_gezhe!=10) game.saveConfig('ark_gezhe',0);



        game.lullabye = function(bgm){
            if(bgm){
                ui.backgroundMusic.src = lib.assetURL+'extension/天灾之下/audio/'+bgm+'.mp3';
                ui.backgroundMusic.addEventListener('ended',game.lullabye);
            }
            else{
                game.playBackgroundMusic();
                ui.backgroundMusic.addEventListener('ended',game.playBackgroundMusic);
            }
        };
},precontent:function (tianzaizhixia){

       lib.element.player.chooseCardShow = function(target) {
		var next = game.createEvent('chooseCardShow');
		next.player = this;
        next.target = target||this;
		next.setContent(function(){
		'step 0'
    var hs1=target.getCards('h',function(card){return !card.hasGaintag('viewHandcard')});
        event.dialog=ui.create.dialog('hidden');
        event.dialog.add('选择'+get.translation(target)+'的一张手牌明置');
        if(hs1.length){
            event.dialog.add('<div class="text center">该角色的手牌</div>');
            if (event.visible || target.isUnderControl(true) || player.hasSkillTag('viewHandcard', null, target, true)) event.dialog.add(hs1)
            else event.dialog.add([hs1,'blank']);
        }
        else event.finish()
        player.chooseButton(event.dialog);
        'step 1'
        target.viewHandcard(result.links[0])
		});
		return next;
	}
	lib.element.player.hideHandcard = function(cards,target) {
	        var next = game.createEvent('hideHandcard');
            next.player = this;
            next.target = target||this;
            next.cards =cards;
            next.setContent(function(){
				player.removeGaintag('viewHandcard',cards)
	        })
				return next;
			}
			lib.element.player.viewHandcard = function(cards,target) {
			var next = game.createEvent('viewHandcard');
            next.player = this;
            next.target = target||this;
            next.cards =cards;
            next.setContent(function(){
                'step 0'
				target.addSkill('viewHandcard');
				'step 1'
				for (var i = 0; i < cards.length; i++) {
					if (!target.getCards('h').contains(cards[i])) {
						cards.splice(i--, 1);
					}
				}
				target.addGaintag(cards, 'viewHandcard');
				})
				return next;
			}
			lib.element.player.getHandcard = function() {
				var cards = [],
					hs = this.getCards('h');
				for (var i = 0; i < hs.length; i++) {
					if (hs[i].hasGaintag('viewHandcard')) {
						cards.push(hs[i]);
					}
				}
				return cards;
			}

        //势力
        var tenUi=document.createElement('style');//十周年UI支持
        lib.group.push('laiyin');
        lib.translate['laiyin']='茵';
        lib.translate['laiyin2']='莱茵';
        lib.groupnature['laiyin']='wood';
        lib.translate.laiyinColor="#008B8B";
        lib.group.push('luodedao');
        lib.translate['luodedao']='罗';
        lib.translate['luodedao2']='罗德岛';
        lib.groupnature['luodedao']='water';
        lib.translate.luodedaoColor="#008B8B";
        tenUi.innerHTML+="#arena>.player>.camp-wrap[data-camp='luodedao']>.camp-back {background: linear-gradient(to bottom, rgb(0,67,107), rgb(51,102,255));}";
        tenUi.innerHTML+=".player>.camp-wrap[data-camp='luodedao']>.camp-name {text-shadow: 0 0 5px rgb(0,67,107), 0 0 10px rgb(0,67,107), 0 0 15px rgb(0,67,107);}";
        lib.group.push('zhenghe');
        lib.translate['zhenghe']='整';
        lib.translate['zhenghe2']='整合运动';
        lib.groupnature['zhenghe']='metal';
        lib.translate.zhengheColor="#008B8B";
        tenUi.innerHTML+=".player>.camp-wrap[data-camp='zhenghe']>.camp-back {background: linear-gradient(to bottom, rgb(103,0,153), rgb(207,56,177));}";
        tenUi.innerHTML+=".player>.camp-wrap[data-camp='zhenghe']>.camp-name {text-shadow: 0 0 5px rgb(207,56,177), 0 0 10px rgb(207,56,177), 0 0 15px rgb(207,56,177);}";
        lib.group.push('kaximiya');
        lib.translate['kaximiya']='西';
        lib.translate['kaximiya2']='卡西米尔';
        lib.groupnature['kaximiya']='metal';
        lib.translate.kaximiyaColor="#008B8B";
        lib.group.push('geju');
        lib.translate['geju']='据';
        lib.translate['geju2']='割据';
        lib.groupnature['geju']='metal';
        lib.translate.gejuColor="#008B8B";
        lib.group.push('kazidaier');
        lib.translate['kazidaier']='卡';
        lib.translate['kazidaier2']='卡兹戴尔';
        lib.groupnature['kazidaier']='thunder';
        lib.translate.kazidaierColor="#008B8B";
        lib.group.push('yan');
        lib.translate['yan']='炎';
        lib.translate['yan2']='大炎';
        lib.groupnature['yan']='soil';
        lib.group.push('yibiliya');
        lib.translate['yibiliya']='伊';
        lib.translate['yibiliya2']='伊比利亚';
        lib.groupnature['yibiliya']='thunder';
        lib.translate.yibiliyaColor="#008B8B";
        lib.group.push('latelan');
        lib.translate['latelan']='拉';
        lib.translate['latelan2']='拉特兰';
        lib.groupnature['latelan']='metal';
        lib.translate.latelanColor="#008B8B";
        lib.group.push('wusasi');
        lib.translate['wusasi']='乌';
        lib.translate['wusasi2']='乌萨斯';
        lib.groupnature['wusasi']='thunder';
        lib.translate.wusasiColor="#008B8B";
        lib.group.push('laitaniya');
        lib.translate['laitaniya']='莱';
        lib.translate['laitaniya2']='莱塔尼亚';
        lib.groupnature['laitaniya']='thunder';
        lib.translate.laitaniyaColor="#008B8B";
        lib.group.push('dongguo');
        lib.translate['dongguo']='东';
        lib.translate['dongguo2']='东国';
        lib.groupnature['dongguo']='thunder';
        lib.translate.dongguoColor="#008B8B";
        lib.group.push('shenchi');
        lib.translate['shenchi']='深';
        lib.translate['shenchi2']='深池';
        lib.groupnature['shenchi']='key';
        lib.translate.shenchiColor="#008B8B";

        document.head.appendChild(tenUi);

        //称号
          lib.characterTitle['ark_kafuka']='炫惑魔方';
        lib.characterTitle['ark_tuola']='逐夜的大汗';
        lib.characterTitle['ark_jici']='至高之术';
        lib.characterTitle['ark_linyuxia']='下水道的幽灵';
        lib.characterTitle['ark_ling']='挑灯问梦';
        lib.characterTitle['ark_helage']='血锋残月';
        lib.characterTitle['ark_sikadi']='浊心';
        lib.characterTitle['ark_jiurishenhaise']='<font color=guree>绘作无限天机';
        lib.characterTitle['ark_nengtianshi']='极限过载';
        lib.characterTitle['ark_shuangxing']='冰天雪国';
        lib.characterTitle['ark_zongxia']='<font color=white>绽放的奇迹';
        lib.characterTitle['ark_linglan']='幽焰火狐';
        lib.characterTitle['ark_shuangxing']='冰天雪国';
        lib.characterTitle['ark_shanling']='教条佑千家';
        lib.characterTitle['ark_lindong']='冬将军';
        lib.characterTitle['ark_wenyue']='捭阖雄奇';
        lib.characterTitle['ark_weiyanwu']='纵横恣肆';
        lib.characterTitle['ark_yifulite']='炎魔共主';
        lib.characterTitle['ark_sly']='坚城铁律';
        lib.characterTitle['ark_teleixisi']='血荆王座';
        lib.characterTitle['ark_teleixiya']='追忆破晓之光';
        lib.characterTitle['ark_meifeisite']='恶魔之吻';
        lib.characterTitle['ark_gezhe']='美丽的生灵';
        lib.characterTitle['ark_aiguozhe']='感染者之盾';
        lib.characterTitle['ark_Amy']='义绝青火';
        lib.characterTitle['ark_fushide']='幻影弩手';
        lib.characterTitle['ark_hong']='死神屠军';
        lib.characterTitle['ark_shuiyue']='反移情之幻';
		lib.characterTitle['ark_huihou']='织雨巡晴';
		lib.characterTitle['ark_chenshan']='梦想火花';
		lib.characterTitle['ark_keebo']='长路独行';
		lib.characterTitle['ark_senran']='蒸汽之心';
		lib.characterTitle['ark_talula']='焰向光明';
		lib.characterTitle['ark_alina']='烁启长夜';
		lib.characterTitle['ark_wulian']='咒厄低语';
		lib.characterTitle['ark_miuersaisi']='幻海潮升';
		lib.characterTitle['ark_dadi']='乱世巨星';
		lib.characterTitle['ark_shierteer']='<font color=red>末日黄昏';
		lib.characterTitle['ark_yanwei']='<font color=red>赤焰红松鼠';
		lib.characterTitle['ark_chengshan']='<font color=pink>梦想火花';

        //--------------死亡配音函数----------------
        lib.skill._tianzaizhixia_dieaudio={
            forced:true,
            charlotte:true,
            popup:false,
            lastDo:true,
            trigger:{
                player:'dieBegin',
            },
            unique: true,
            forceDie:true,
            filter:function(event,player){
                return true;
            },
            content:function(){
                game.playAudio('..','extension','天灾之下/audio',trigger.player.name!='unknown'?trigger.player.name:trigger.player.name1);
            }
        };
		
		
        window.tianzaizhixia_import = function (func) {
            func(lib, game, ui, get, ai, _status);
        };
        if (tianzaizhixia.enable) {
            game.import("character", function () {
                var tianzaizhixia = {
                    name: "tianzaizhixia",
                    connect: true,
                    characterSort: {
                        tianzaizhixia: {},
                    },
                    character: {
                        "ark_shierteer": ["female", "luodedao", "4/7", ["ark_miwang", "ark_hunhui","ark_huanghun"], []],
                        "ark_baijin": ["female", "kaximiya", 4, ["ark_yeshuang", "ark_canxin"], []],
                        "ark_yanwei": ["female", "kaximiya", 3, ["ark_yanxin", "ark_xingwei", "ark_hongfa"], []],
                        "ark_aiguozhe": ["male", "zhenghe", 4, ["ark_xingjun", "ark_xuemai"], []],
                        "ark_dadi": ["male", "geju", 3, ["ark_yaogun", "ark_fuhuo"], []],
                        "ark_chengshan": ["female", "luodedao", 4, ["ark_cunmeng","ark_huhua"], []],
                        "ark_keebo": ["female", "luodedao", 4, ["ark_bairen","ark_xunmi"], []],
                        "ark_huihou": ["female", "luodedao", 3, ["ark_shunfeng", "ark_yuyan"], []],
                        "ark_shuiyue": ["female", "dongguo", 3, ["ark_yixiang", "ark_jinghua"], []],
                        "ark_sikadi_blue": ["female", "luodedao", 4, ["ark_yuelang", "ark_chaoyong"], []],
                        "ark_duanzuizhe": ["female", "shen", 3, ["ark_duanzui", "ark_xuanyu"], []],
                        "ark_hong": ["female", "luodedao", 4, ["ark_cigu", "ark_bingzhu"], []],
                        "ark_fushide": ["male", "zhenghe", 3, ["ark_hanmang", "ark_moyu"], []],
                        "ark_kafuka": ["female", "laiyin", 4, ["ark_guixi", "ark_guaiqiao"], []],
                        "ark_sikadi": ["female", "luodedao", 3, ["ark_shutu", "ark_wuguang", "ark_chaoku"], []],
                        "ark_shanling": ["female", "kazidaier", 4, ["ark_shezui", "ark_chenhun"], []],
                        "ark_tuola": ["male", "kaximiya", 4, ["diy_tiantu", "diy_zhuyan"], []],
                        "ark_linglan": ["female", "luodedao", 3, ["ark_wuyue", "ark_jiuwei"], []],
                        "ark_jici": ["male", "yibiliya", 4, ["jcyuci", "jcgutu"], []],
                        "ark_ling": ["female", "yan", 3, ["diy_gongchou", "ark_youyin", "diy_hanmeng"], []],
                        "ark_helage": ["male", "luodedao", 4, ["ark_xianyue", "ark_gangyi", "ark_tashijiangjun"], []],
                        "ark_linyuxia": ["female", "geju", 3, ["ark_huiwei", "ark_miying"], []],
                        "ark_jiurishenhaise": ["female", "shen", 3, ["ark_jiuri"], []],
                        "ark_shuangxing": ["female", "zhenghe", 1, ["ark_jihan", "ark_candong", "ark_binghuan"], []],
                        "ark_nengtianshi": ["female", "latelan", 4, ["ark_saoshe", "ark_danyu"], []],
                        "ark_zongxia": ["female", "laiyin", 3, ["ark_laiyin", "ark_qiji", "ark_tianping"], ["zhu", "des:&nbsp;&nbsp;&nbsp;&nbsp;莱茵生命有限公司（Rhine Lab, LLC.），又称莱茵生命实验室、莱茵生命医学研究所，通称“莱茵生命”，是一家位于哥伦比亚的科技公司，致力于拓展生命科学、化学制造、生物应用等技术领域，也是哥伦比亚重点扶持的科技团体。其研究涵盖诸多方向，其成就涉及医疗、防护、设备研发等多个方面。出于商业目的，莱茵生命会于哥伦比亚各地区进行巡回性质的科学展览，展示其最新的研究成果。然而公司内部仍存在着许多未公开项目，据传闻某些项目甚至有军方资源介入。相关人士猜测，这些机密项目，或与针对生物体的源石实验有关。<br/>&nbsp;&nbsp;&nbsp;&nbsp;作为莱茵生命的最高领袖，时常在发布会与讲座中露面的总辖无疑是一名头脑清晰、嗅觉敏锐、手段高明的政客。但在日常的生活中，主持着构件科的总辖更是一名纯粹的研究者，她致力于一项项具有时代颠覆性的巨大突破，沉迷于让那些曾朦胧扑朔的理论在自己的手中变得清澈明晰。崇高的真理殿堂日渐如繁星般宏伟且璀璨，伦理的枷锁日渐如尘埃般黯淡与渺小。与坚持着固守着“科学研究都该在可控的范围内进行”底线的防卫科主任塞雷娅不同，总辖她并不在乎这世俗所谓的“底线”。她看得更高，更远，有时候，大家会觉得即使是头顶的天空也挡不住她的视线。连在人心之间游走自如的生态科主任缪尔塞斯也不得不承认自己也只能稍微揣摩她的心思：“她注视的地方，恐怕这片大地上所有的人都想象不到。”<br/><br/><b> <i>“只要不妨碍我的研究，那么就没有那么一条线存在。”</i> </b>"]],
                        "ark_Amy": ["female", "luodedao", 3, ["ark_Amybenye", "ark_heiguan", "ark_buyi"], ["zhu"]],
                        "ark_weiyanwu": ["male", "yan", 4, ["ark_baihe", "ark_yuxiao"], ["des:&nbsp;&nbsp;&nbsp;&nbsp;龙门执政者，为人睿智有礼，但也擅长谋略，手段强硬，在政治圈中拥有较高人望。依靠独特的外交和商业策略，使龙门这一孤城在处理与各个国家的政治关系中游刃有余，被认为是当代的优秀领袖之一。目前龙门的飞速发展之景象便是最好的印证。<br/>&nbsp;&nbsp;&nbsp;&nbsp;魏彦吾保持着先民的血统，眼神锐利，“和他同处于一个空间都使人感到窒息”。传闻因过去职业原因，身体素质超乎常人。被一众退役影卫尊称为“魏公”，疑似身份为大炎皇族。他是陈和塔露拉的舅舅，也是陈的剑术师父，爱德华的结伴兄弟，东国公主文月的丈夫，“鼠王”的战友。武功相当高深，能仅用手指使出赤霄剑法并以此压制“鼠王”林舸瑞。<br/>&nbsp;&nbsp;&nbsp;&nbsp;外交手腕高明，尤擅明谋。在魏彦吾原本计划的和罗德岛的合作中，第二个条件是在整合运动解决后由罗德岛带走龙门的部分感染者，并由龙门支付地块、研究资料、资金和其他资源。魏彦吾知道这将对整个罗德岛造成严重的影响，但也清楚地预判其不可能拒绝如此丰厚的条件。然而在陈的影响下，他最终改变了想法，决心将感染者也作为龙门不可分割的一部分继续容纳下去。"]],
                        "ark_wenyue": ["female", "yan", 4, ["ark_tongxin", "ark_qiaobian", "ark_biaofeng"], ["des:&nbsp;&nbsp;&nbsp;&nbsp;龙门执政者魏彦吾的妻子，原东国公主，和魏彦吾一起来到龙门定居。虽然外表优雅柔弱（其实对魏彦吾有相当程度的震慑力），但是其实也拥有强大的源石技艺以及政治手段，行事冷静细腻却也非常拥有远见。对魏彦吾来说既是最爱的人，也是最坚实的支持者和后盾。<br/>&nbsp;&nbsp;&nbsp;&nbsp;虽与魏彦吾成婚多年但膝下无子女，将塔露拉和陈两姐妹当作自己的女儿，称其为“小塔/小陈”。<br/>&nbsp;&nbsp;&nbsp;&nbsp;除去政治家的身份，文月也是一名十分厉害的摩托车车手，被称为“在无人的深夜街道疾驰，闪现在弯道上的幽灵车手”。曾穿着和服使用奢华版水箭35炫彩机车与星熊飙摩托车最终弯道取胜。"]],
                        "ark_teleixisi": ["male", "kazidaier", 4, ["tlxs_quanji", "tlxs_duoshi"], ["forbidai", "unseen"]],
                        "ark_teleixiya": ["female", "kazidaier", 4, ["tlxy_xingdeng", "huairen", "huangnv", "huangnv2"], ["zhu"]],
                        "ark_meifeisite": ["male", "zhenghe", 4, ["ark_cuihua", "ark_huomu", "ark_mengxiang"], []],
                        "ark_gezhe": ["none", "wei", 4, ["ark_cangyin", "ark_hunyin"], ["forbidai", "unseen"]],
                        "ark_lindong": ["female", "wusasi", 3, ["ark_haoling", "ark_zhanhou", "ark_lingxiu"], ["zhu"]],
                        "ark_sly": ["female", "laiyin", 4, ["ark_jianshou", "ark_gaizhi"], []],
                        "ark_yifulite": ["female", "laiyin", 3, ["ark_kuangre", "ark_zhuodi"], []],

                    },
                    characterIntro: {},
                    characterTitle: {},

                    //技能代码
                    skill: {
                        //////史尔特尔
                        "ark_miwang": {

                            trigger:{
                                player:["phaseZhunbeiBegin","phaseUseBegin"],
                            },
                            filter:function(event,player){
                                return player.countCards('he')>1
                            },
                            content:function(){
                                'step 0'
                                if(trigger.name=='phaseUse') player.loseMaxHp()
                                'step 1'
                                player.chooseToDiscard(2)
                                'step 2'
                                player.draw(player.storage.ark_42t2_count1?player.storage.ark_42t2_count1:1)
                            },

                        },
                        "ark_hunhui": {

                            trigger:{
                                player:"dying",
                            },
                            skillAnimation:true,
                            animationColor:"fire",
                            unique:true,
                            limited:true,
                            forced:true,
                            juexingji:true,
                            init:function(player){
                                player.storage.ark_hunhui=false;
                            },
                            filter:function(event,player){
                                return player.hp<1&&!player.storage.ark_hunhui;
                            },
                            content:function(){
                                'step 0'
                                player.storage.ark_hunhui=true
                                if(player.hp<7){
                                    player.recover(7-player.hp);
                                }
                                'step 1'
                                player.storage.ark_42t2_count1=player.hp
                                player.storage.ark_42t2_count2=1
                                player.addSkill('ark_hunhui_1')
                            },


                            subSkill:{
                                "1":{
                                    trigger:{
                                        player:"phaseJieshuBegin",
                                    },
                                    forced:true,
                                    content:function(){
                                        'step 0'
                                        player.loseMaxHp(player.storage.ark_42t2_count2)
                                        'step 1'
                                        player.storage.ark_42t2_count2++
                                    },
                                    sub:true,
                                },
                            },
                            mark:true,
                            intro:{
                                content:"limited",
                            },

                        },
                        "ark_huanghun": {

                            group:"ark_huanghun_1",
                            audio:"ext:无名方舟:2",
                            enable:"phaseUse",
                            selectCard:function(){
                                var player=_status.event.player
                                return player.storage.ark_42t2_count1?player.storage.ark_42t2_count1:2;
                            },
                            selectTarget:[1,3],
                            position:"he",
                            filterCard:function(card,player,event){
                                return get.color(card)=='red'
                            },
                            multitarget:true,
                            multiline:true,
                            filterTarget:function(){return true},
                            filter:function(event,player){
                                var num=player.storage.ark_42t2_count1?player.storage.ark_42t2_count1:2
                                return player.countCards('he',{color:'red'})>=num;
                            },
                            content:function(){
                                'step 0'
                                event.count=0
                                'step 1'
                                targets[event.count].chooseToRespond({name:'shan'},2)
                                'step 2'
                                if(!result.bool){
                                    targets[event.count].damage(1).set('arktag','ark_huanghun')
                                }
                                'step 3'
                                event.count++
                                'step 4'
                                if(event.count<targets.length) event.goto(1)
                            },
                            ai:{
                                order:5,
                                result:{
                                    target:function(player){
                                        return -2;
                                    },
                                },
                            },


                            subSkill:{
                                "1":{
                                    trigger:{
                                        source:"damageBegin1",
                                    },
                                    filter:function(event){
                                        return event.arktag=='ark_huanghun'
                                    },
                                    content:function(){
                                        player.loseHp()
                                        trigger.nature='fire'
                                        trigger.num=player.storage.ark_42t2_count1?player.storage.ark_42t2_count1:1
                                    },
                                    sub:true,
                                },
                            },

                        },
                        //////白金
                        "ark_yeshuang": {
                            group: ["ark_yeshuang_sha", "ark_yeshuang_diect"],
                            subSkill: {
                                diect: {
                                    forced: true,
                                    trigger: {
                                        player: "useCard",
                                    },
                                    filter: function (event, player) {
                                        return event.card.ark_yeshuang == true
                                    },
                                    content: function () {
                                        trigger.directHit.addArray(game.filterPlayer());
                                    },
                                    ai: {
                                        "directHit_ai": true,
                                        skillTagFilter: function (player, tag, arg) {
                                            if (!arg || !arg.card || arg.card.ark_yeshuang != true) return false;
                                        },
                                    },
                                    sub: true,
                                },
                                sha: {
                                    trigger: {
                                        global: "phaseEnd",
                                    },
                                    direct: true,
                                    filter: function (event, player) {
                                        return player.getCards('h', function (card) {
                                            return card.name == 'sha' && card.hasGaintag('viewHandcard')
                                        }).length > 0 && event.player != player&&event.player.isAlive();
                                    },
                                    content: function () {
                                        'step 0'
                                        event.target = trigger.player;
                                        player.chooseCard('是否暗置一张杀，视为对' + get.translation(trigger.player) + '使用一张杀', 'h', function (card) {
                                            return card.hasGaintag('viewHandcard') && card.name == 'sha'
                                        }, get.prompt2('ark_yeshuang', event.target)).set('goon', get.attitude(player, trigger.player) < -2).set('ai', function (card) {
                                            if (!_status.event.goon) return 0;
                                            return 7 - get.value(card);
                                        }).logSkill = ['ark_yeshuang_sha', event.target];
                                        'step 1'
                                        if (result.bool) {
                                            player.hideHandcard(result.card)
                                            player.useCard({name: 'sha'}, trigger.player)
                                        } else event.finish()
                                        'step 2'
                                        if (player.hasHistory('sourceDamage', function (evt) {
                                            if (!evt.card) return false;
                                            var evtx = evt.getParent('useCard');
                                            return evtx.card == evt.card && evtx.getParent(1) == event;
                                        })) event.finish()
                                        else {
                                            event.cards = player.getCards('h', function (card) {
                                                return !card.hasGaintag('viewHandcard') && card.name != 'sha'
                                            });
                                            player.chooseBool('是否明置除【杀】之外的所有牌视为对' + get.translation(trigger.player) + '使用一张不可响应无视防具的【杀】').set('ai', function () {
                                                return -get.attitude(player, trigger.player);
                                            });
                                        }
                                        'step 3'
                                        if (result.bool) {
                                            player.showCards(event.cards)
                                            player.viewHandcard(event.cards)
                                            var card = {name: 'sha', isCard: true}
                                            player.useCard(card, trigger.player, false).card.ark_yeshuang = true;
                                        }
                                    },
                                    ai: {
                                        unequip: true,
                                        skillTagFilter: function (player, tag, arg) {
                                            if (!arg || !arg.card || arg.card.ark_yeshuang != true) return false;
                                        },
                                    },
                                    sub: true,
                                },
                                use: {
                                    mod: {
                                        cardEnabled: function (card) {
                                            if (get.tag(card, 'damage')) return false;
                                        },
                                    },
                                    mark: true,
                                    intro: {
                                        content: "不能使用伤害性卡牌",
                                    },
                                    sub: true,
                                },
                            },
                            audio: "ext:无名扩展:2",
                            trigger: {
                                player: "phaseUseBegin",
                            },
                            frequent: true,
                            content: function () {
                                'step 0'
                                player.chooseCard('h', function (card) {
                                    return card.name == 'sha'&&!card.hasGaintag('viewHandcard')
                                })
                                'step 1'
                                if (result.bool) {
                                    player.viewHandcard(result.cards[0], player)
                                    player.addTempSkill('ark_yeshuang_use', {player: "phaseUseEnd"})
                                }
                            },
                        },
                        "ark_canxin": {
                            subSkill: {
                                effect: {
                                    mod: {
                                        cardEnabled: function () {
                                            return false;
                                        },
                                        cardSavable: function () {
                                            return false;
                                        },
                                        targetEnabled: function () {
                                            return false;
                                        },
                                    },
                                    mark: true,
                                    intro: {
                                        content: "不计入距离的计算且不能使用牌且不是牌的合法目标",
                                    },
                                    sub: true,
                                },
                            },
                            trigger:{
                    global:["damageEnd"],
                },
                forced:true,
                filter:function(event,player){
                return event.player==player||event.source==player;
                },
                content:function (){
                'step 0'
    if(trigger.source==player) player.hideHandcard(player.getCards('h',function(card){return card.hasGaintag('viewHandcard')}))
    if(player.countCards('h')&&trigger.player==player) player.chooseBool('是否弃置所有手牌然后本回合不计入座次和距离计算且不能成为其他角色卡牌的目标直到你的下回合开始')
    'step 1'
    if(result.bool){
    player.discard(player.getCards('h'))
    player.addTempSkill('ark_canxin_effect',{player:"phaseBegin"})
    player.addTempSkill('undist',{player:"phaseBegin"})
    }
                            },
                        },
                        //////焰尾
                        "ark_yanxin": {
                            subSkill: {
                                limited: {sub: true,},
                                use: {
                                    mod: {
                                        aiValue: function (player, card, num) {
                                            if (get.name(card) != 'shan' && get.color(card) != player.storage.ark_yanxin_use) return;
                                            var cards = player.getCards('hs', function (card) {
                                                return get.name(card) == 'shan' || get.color(card) == player.storage.ark_yanxin_use;
                                            });
                                            cards.sort(function (a, b) {
                                                return (get.name(b) == 'shan' ? 1 : 2) - (get.name(a) == 'shan' ? 1 : 2);
                                            });
                                            var geti = function () {
                                                if (cards.contains(card)) {
                                                    return cards.indexOf(card);
                                                }
                                                return cards.length;
                                            };
                                            if (get.name(card) == 'shan') return Math.min(num, [6, 4, 3][Math.min(geti(), 2)]) * 0.6;
                                            return Math.max(num, [6.5, 4, 3][Math.min(geti(), 2)]);
                                        },
                                        aiUseful: function () {
                                            return lib.skill.qingguo.mod.aiValue.apply(this, arguments);
                                        },
                                    },
                                    locked: false,
                                    audio: 2,
                                    enable: ["chooseToRespond", "chooseToUse"],
                                    filterCard: function (card, player) {
                                        return get.color(card) == player.storage.ark_yanxin_use;
                                    },
                                    viewAs: {
                                        name: "shan",
                                    },
                                    viewAsFilter: function (player) {
                                        if (!player.countCards('hs', {color: player.storage.ark_yanxin_use}) && !player.storage.ark_yanxin_use) return false;
                                    },
                                    onremove: true,
                                    position: "hs",
                                    check: function () {
                                        return 1
                                    },
                                    ai: {
                                        order: 3,
                                        respondShan: true,
                                        skillTagFilter: function (player) {
                                            if (!player.countCards('hs', {color: player.storage.ark_yanxin_use})) return false;
                                        },
                                        effect: {
                                            target: function (card, player, target, current) {
                                                if (get.tag(card, 'respondShan') && current < 0) return 0.6
                                            },
                                        },
                                        basic: {
                                            useful: [7, 5.1, 2],
                                            value: [7, 5.1, 2],
                                        },
                                        result: {
                                            player: 1,
                                        },
                                    },
                                    sub: true,
                                },
                            },
                            audio: "ext:无名扩展:2",
                            preHidden: true,
                            trigger: {
                                target: "useCardToTargeted",
                            },
                            filter: function (event, player) {
                                return event.card.name == 'sha' && !player.hasSkill('ark_yanxin_limited');
                            },
                            frequent: true,
                            content: function () {
                                if (trigger.card.isCard) {
                                    player.addTempSkill('ark_yanxin_use', {global: "useCardEnd"});
                                    player.addTempSkill('ark_yanxin_limited', {playe: "phaseBegin"})
                                    player.storage.ark_yanxin_use = get.color(trigger.card)
                                } else {
                                    trigger.all_excluded = true;
                                    trigger.targets.length = 0;
                                    player.draw();
                                }
                            },
                            ai: {
                                effect: {
                                    target: function (card, player, target) {
                                        if (card.name == 'sha' && get.color(card) == 'red') return [1, 0.6];
                                    },
                                    player: function (card, player, target) {
                                        if (card.name == 'sha' && get.color(card) == 'red') return [1, 1];
                                    },
                                },
                            },
                        },
                        "ark_xingwei": {
                            audio: "ext:无名扩展:2",
                            trigger: {
                                player: "useCard",
                            },
                            frequent: true,
                            preHidden: true,
                            filter: function (event) {
                                return (get.type(event.card) == 'basic');
                            },
                            content: function () {
                                player.draw(player.isMinHandcard(true) ? 2 : 1);
                            },
                            ai: {
                                threaten: 1.4,
                            },
                        },
                        "ark_hongfa": {
                            audio: "ext:无名扩展:2",
                            forceaudio: true,
                            unique: true,
                            zhuSkill: true,
                            trigger: {
                                player: "gainAfter",
                            },
                            direct: true,
                            filter: function (event, player) {
                                return player.hasZhuSkill('ark_hongfa') && _status.currentPhase != player && event.cards.length > 0 && game.countPlayer(function (current) {
                                    return current != player && current.group == player.group
                                }) > 0;
                            },
                            content: function () {
                                'step 0'
                                if (!game.hasPlayer(function (target) {
                                    return target != player && target.group == player.group;
                                })) event.finish();
                                else player.chooseTarget('是否将' + get.translation(trigger.cards) + '交给一名其他的同势力角色', {
                                    filterTarget: function (card, player, target) {
                                        return target != player && target.group == player.group;
                                    },
                                    ai: function (target) {
                                        var player = _status.event.player;
                                        return get.attitude(player, target);
                                    },
                                    gift: trigger.cards,
                                });
                                'step 1'
                                if (result.bool) {
                                    if (!event.logged) {
                                        player.logSkill('ark_hongfa');
                                        event.logged = true;
                                    }
                                    player.line(result.targets[0]);
                                    result.targets[0].gain(trigger.cards, player, 'giveAuto');
                                }
                            },
                        },
                        //////大爹
                        "ark_xingjun": {
                            group: "ark_xingjun_direct",
                            subSkill: {
                                direct: {
                                    forced: true,
                                    trigger: {
                                        player: "useCard",
                                    },
                                    filter: function (event, player) {
                                        return get.suit(event.card) == 'spade'
                                    },
                                    content: function () {
                                        trigger.directHit.addArray(game.filterPlayer());
                                    },
                                    ai: {
                                        "directHit_ai": true,
                                        skillTagFilter: function (player, tag, arg) {
                                            if (!arg || !arg.card || get.suit(arg.card) != 'spade') return false;
                                        },
                                    },
                                    sub: true,
                                },
                            },
                            audio: 2,
                            trigger: {
                                player: "damageBegin4",
                            },
                            forced: true,
                            filter: function (event, player) {
                                return !event.nature;
                            },
                            content: function () {
                                trigger.num--;
                            },
                            ai: {
                                effect: {
                                    target: function (card, player, target, current) {
                                        if (!get.tag(card, 'natureDamage')) return 'zerotarget';
                                    },
                                },
                            },
                        },
                        "ark_xuemai": {
                            skillAnimation: true,
                            animationColor: "wood",
                            audio: "ext:无名扩展:2",
                            juexingji: true,
                            unique: true,
                            trigger: {
                                player: "dying",
                            },
                            forced: true,
                            content: function () {
                                'step 0'
                                player.awakenSkill(event.name);
                                player.storage[event.name] = true;
                                player.removeSkill('ark_xingjun')
                                player.addSkill('ark_huimie')
                                player.recover(3 - player.hp)
                            },
                        },
                        "ark_huimie": {
                            trigger: {
                                player: ["phaseZhunbeiBegin", "damageBegin"],
                            },
                            filter: function (event, player) {
                                if (event.name == 'damage') return event.source && event.source != player
                                return true;
                            },
                            direct: true,
                            content: function () {
                                'step 0'
                                if (trigger.name == 'damage') event.goto(2)
                                player.chooseTarget(get.prompt('ark_huimie'), '对一名角色各造成1点伤害').set('ai', function (target) {
                                    var player = _status.event.player;
                                    return get.damageEffect(target, player, player);
                                });
                                'step 1'
                                if (result.bool) {
                                    var targets = result.targets[0];
                                    player.logSkill('ark_huimie', targets);
                                    targets.damage();
                                }
                                'step 2'
                                player.judge(function (card) {
                                    if (get.color(card) == 'red') return -2;
                                    return 2;
                                }).judge2 = function (result) {
                                    return result.bool;
                                };
                                "step 1"
                                if (result.judge < 2) {
                                    event.finish();
                                    return;
                                } else player.discardPlayercard(trigger.source, 'he')
                            },
                        },
                        /////////大帝
                        "ark_yaogun": {
                            subSkill: {
                                trick: {
                                    charlotte: true,
                                    mark: true,
                                    intro: {
                                        content: "出杀次数+#",
                                    },
                                    init: function (player, skill) {
                                        if (!player.storage[skill]) player.storage[skill] = 0;
                                    },
                                    onremove: true,
                                    mod: {
                                        cardUsable: function (card, player, num) {
                                            if (card.name == 'sha') return num + player.storage.ark_yaogun_trick;
                                        },
                                    },
                                    sub: true,
                                },
                                basic: {
                                    mod: {
                                        targetInRange: function (card, player, target, now) {
                                            var type = get.type(card);
                                            if (type == 'trick' || type == 'delay') return true;
                                        },
                                    },
                                    sub: true,
                                },
                            },
                            mark: true,
                            locked: false,
                            zhuanhuanji: true,
                            marktext: "乐",
                            intro: {
                                content: function (storage, player, skill) {
                                    var str = !player.storage.ark_yaogun ? '回合开始，你摸四张牌，然后弃置所有基本牌，本回合使用锦囊牌无距离限制。' : '回合开始，你可以摸两张牌，然后弃置所有锦囊牌，本回合可多使用X张[杀](X为你以此法弃置的牌数）。';
                                    return str;
                                },
                            },
                            trigger: {
                                player: "phaseDrawAfter",
                            },
                            audio: "ext:无名扩展:2",
                            forced: true,
                            content: function () {
                                'step 0'
                                var cardtype;
                                if (player.storage.ark_yaogun == true) {
                                    player.storage.ark_yaogun = false;
                                    player.draw(2);
                                    cardtype = 'trick'
                                } else {
                                    player.storage.ark_yaogun = true;
                                    player.draw(4);
                                    cardtype = 'basic'
                                }
                                ;
                                event.cardtype = cardtype;
                                'step 1'
                                if (event.cardtype == 'trick') {
                                    var cards = player.getCards('h', function (card) {
                                        return get.type(card) == 'trick'
                                    })
                                    player.discard(cards);
                                    player.addTempSkill('ark_yaogun_trick')
                                    player.storage.ark_yaogun_trick += cards.length
                                    player.updateMarks('ark_yaogun_trick');
                                } else {
                                    var cards = player.getCards('h', function (card) {
                                        return get.type(card) == 'basic'
                                    })
                                    player.discard(cards);
                                    player.addTempSkill('ark_yaogun_basic')
                                }
                            },
                            ai: {
                                order: 2.7,
                            },
                        },
                        "ark_fuhuo": {
                            skillAnimation: true,
                            animationColor: "wood",
                            audio: "ext:无名扩展:2",
                            juexingji: true,
                            unique: true,
                            trigger: {
                                player: "dying",
                            },
                            forced: true,
                            content: function () {
                                'step 0'
                                player.awakenSkill(event.name);
                                player.storage[event.name] = true;
                                var cards = get.cards(6), trick = 0, basic = 0
                                player.showCards(cards)
                                for (var i = 0; i < cards.length; i++) {
                                    if (get.type(cards[i]) == 'basic') basic++
                                    else if (get.type(cards[i]) == 'trick') trick++
                                }
                                player.gainMaxHp(trick)
                                player.recover(basic)
                            },
                        },
                        "ark_junlin": {
                            audio: 2,
                            trigger: {
                                player: "phaseDiscardBefore",
                            },
                            forced: true,
                            content: function () {
                                trigger.cancel();
                            },
                        },

                        /*///////澄闪
                        寸夢：你的每个阶段开始时，你可以弃置一张牌。结束阶段，你获得等量的牌并摸三张牌。然后其他角色可依次选择是否弃置你一张手牌。
                        弧花：限定技，一名角色的回合开始时，若其曾因“寸梦”弃置过你的手牌，你可令其展示所有手牌，
                             然后将其中所有你没有的牌按牌名各视为一张不可响应的【杀】对其使用。若其因此进入濒死状态，你结束此技能，
                             然后依次弃置所有牌直至你一无所有。*/
                        "ark_cunmeng": {
                            marktext: "梦",
                            intro: {
                                name: "寸梦",
                                "name2": "梦",
                                content: "回合结束可摸#+3张牌",
                            },
                            audio: "ext:无名扩展:2",
                            trigger: {
                                player: ["phaseDiscardBegin", "phaseEnd", "phaseJieshuBegin", "phaseJudgeBegin", "phaseUseBegin", "phaseZhunbeiBegin", "phaseJieshuBegin"],
                            },
                            frequent: true,
                            preHidden: true,
                            filter: function (event, player) {
                                if (event.triggername == 'phaseEnd') return player.countMark('ark_cunmeng') > 0
                                else return player.countCards('he') > 0
                            },
                            content: function () {
                                'step 0'
                                if (event.triggername == 'phaseEnd') {
                                    player.draw(player.countMark('ark_cunmeng') + 3);
                                    player.removeMark('ark_cunmeng', player.countMark('ark_cunmeng'), false);
                                    event.goto(2)
                                } else {
                                    player.chooseToDiscard('he',get.prompt2('ark_cunmeng'));
                                }
                                'step 1'
                                if (result.cards) {
                                    player.addMark('ark_cunmeng', 1);
                                    event.finish()
                                } else event.finish();
                                'step 2'
                                event.current = player.next;
                                "step 3"
                                if (player.countCards('h') < 1) event.finish()
                                event.current.chooseBool('是否弃置' + get.translation(player) + '一张牌').set('ai', function (player) {
                                    var evt = _status.event.getParent();
                                    return get.attitude(_status.event.player, evt.player);
                                });
                                "step 4"
                                if (result.bool) {
                                    event.current.discardPlayerCard('h', player, true);
                                    player.storage.ark_huhua = true;
                                }
                                "step 5"
                                event.current = event.current.next;
                                if (event.current != player) event.goto(3);
                            },
                            group:"ark_huhua进入濒死状态",
                        },
                        "ark_huhua": {
                            trigger:{global:"phaseZhunbeiBegin"},
                            limited:true,
                            unique:true,
                            skillAnimation:true,
                            animationColor:'water',
                            check: function (event, player) {
                                return -get.attitude(player, event.player2);
                            },
                            filter:function (event,player) {
                                //var evt = event.getParent("discardPlayerCard");
                                //return evt && event.getParent(2).name != 'ark_huhua';
                                return player.storage.ark_huhua;
                            },
                            content:function () {
                                "step 0"
                                player.awakenSkill("ark_huhua");
                                trigger.player.showHandcards();
                                "step 1"
                                var playerCards = player.getCards('h');
                                var targetCards = trigger.player.getCards('h');
                                var playerNames = [];
                                for (const playerCard of playerCards) {
                                    playerNames.push(playerCard.name);
                                }
                                event.cards = targetCards;
                                event.playerNames = playerNames;
                                "step 2"
                                if (event.cards.length) {
                                    event.card = event.cards.shift();
                                    if (!event.playerNames.contains(event.card.name)) {
                                        debugger
                                        if (player.storage.ark_huhua进入濒死状态 || trigger.player.isDead() || trigger.player.isDying()) {
                                            event.finish();
                                            return;
                                        }
                                        //var next=player.useCard({name:"sha",ark_huhua:true},targetCard,'ark_huhua',trigger.player,false);
                                        //targetCard.ark_huhua = true;
                                        var next=player.useCard(event.card,{name:"sha",ark_huhua:true},trigger.player,false);
                                        next.oncard=function(){
                                            _status.event.directHit.add(trigger.player);
                                        }
                                    }

                                }
                                "step 3"
                                if (event.cards.length) event.goto(2);


                            },

                        },
                        "ark_huhua进入濒死状态": {
                            trigger:{global:"dying"},
                            direct:true,
                            filter:function (event,player) {
                                return event.reason && event.reason.card&& event.reason.card.ark_huhua;
                            },
                            content:function () {
                                "step 0"
                                //debugger
                                player.storage.ark_huhua进入濒死状态 = true;
                                for (let i = 0; i < player.countCards('he'); i++) {
                                    player.chooseToDiscard('he', true);
                                }
                            }
                        },
                        /*刻俄柏
                        佰仞：当你使用／打出基本牌后，可判定，若为装备牌则获得之。你的装备牌不计入手牌上限，且你可将之当【杀】使用。
                        尋蜜：锁定技，当一名角色进入你攻击范围时，你获得其一张牌，若此时你有能吃的牌，你使用之，然后其选择一项：
                             ①获得你一张牌；②摸两张牌然后令你横置。*/
                        "ark_bairen": {
                            group: "ark_bairen_sha",
                            subSkill: {
                                sha: {
                                    mod: {
                                        aiValue: function (player, card, num) {
                                            if (get.name(card) != 'sha' && get.type(card) != 'equip') return;
                                            var cards = player.getCards('hs', function (card) {
                                                return get.name(card) == 'sha' || get.type(card) == 'equip';
                                            });
                                            cards.sort(function (a, b) {
                                                return (get.name(b) == 'sha' ? 1 : 2) - (get.name(a) == 'sha' ? 1 : 2);
                                            });
                                            var geti = function () {
                                                if (cards.contains(card)) {
                                                    return cards.indexOf(card);
                                                }
                                                return cards.length;
                                            };
                                            if (get.name(card) == 'sha') return Math.min(num, [6, 4, 3][Math.min(geti(), 2)]) * 0.6;
                                            return Math.max(num, [6.5, 4, 3][Math.min(geti(), 2)]);
                                        },
                                        aiUseful: function () {
                                            return lib.skill.reqingguo.mod.aiValue.apply(this, arguments);
                                        },
                                    },
                                    enable: ["chooseToRespond", "chooseToUse"],
                                    filterCard: function (card) {
                                        return get.type(card) == 'equip';
                                    },
                                    position: "hes",
                                    viewAs: {
                                        name: "sha",
                                    },
                                    viewAsFilter: function (player) {
                                        if (!player.countCards('hes', {type: 'equip'})) return false;
                                    },
                                    prompt: "将一张装备牌当杀打出",
                                    check: function () {
                                        return 1
                                    },
                                    ai: {
                                        order: 2,
                                        respondSha: true,
                                        skillTagFilter: function (player) {
                                            if (!player.countCards('hes', {type: 'equip'})) return false;
                                        },
                                        effect: {
                                            target: function (card, player, target, current) {
                                                if (get.tag(card, 'respondSha') && current < 0) return 0.6
                                            },
                                        },
                                        basic: {
                                            useful: [7, 5.1, 2],
                                            value: [7, 5.1, 2],
                                        },
                                        result: {
                                            player: 1,
                                        },
                                    },
                                },
                            },
                            mod: {
                                ignoredHandcard: function (card, player) {
                                    if (get.type(card) == 'equip') {
                                        return true;
                                    }
                                },
                                cardDiscardable: function (card, player, name) {
                                    if (name == 'phaseDiscard' && get.type(card) == 'equip') {
                                        return false;
                                    }
                                },
                            },
                            audio: 2,
                            trigger: {
                                player: ["useCard", "respond"],
                            },
                            forced: true,
                            filter: function (event, player) {
                                return get.type(event.card) == 'basic';
                            },
                            content: function () {
                                'step 0'
                                player.judge()
                                'step 1'
                                if (get.type(result.card) == 'equip') player.gain(result.card, 'gain2')
                            },
                        },
                        "ark_xunmi": {
                            trigger:{player:"equipAfter"},
                            init: function (player) {
                                player.storage.ark_xunmi在范围内players = game.filterPlayer(function (current) {
                                    return player.inRange(current) && current != player;
                                });
                            },
                            filter:function (event,player) {
                                player.storage.ark_xunmi进入者 = game.filterPlayer(function (current) {
                                    return player.inRange(current) && current != player;
                                });
                                return player.storage.ark_xunmi进入者.length>player.storage.ark_xunmi在范围内players.length;
                            },
                            forced:true,
                            content:function () {
                                "step 0"
                                event.targets = [];
                                for (const target of player.storage.ark_xunmi进入者) {
                                    if (!player.storage.ark_xunmi在范围内players.contains(target)) event.targets.push(target);
                                }

                                player.storage.ark_xunmi在范围内players = player.storage.ark_xunmi进入者;
                                delete player.storage.ark_xunmi进入者;
                                "step 1"
                                event.target = event.targets.shift();
                                if (event.target && event.target.countGainableCards(player, 'he')) {//如果目标有牌
                                    player.gainPlayerCard('he', event.target ,true);
                                }
                                "step 2"
                                if (player.countCards('h', function (card) {
                                    //{subtype:['equip3','equip4','equip6']}
                                    return ['tao', 'shunshou', 'jiu', 'taoyuan'].contains(card.name) || ['equip3', 'equip4', 'equip6'].contains(get.subtype(card));
                                })) {
                                    player.chooseToUse('是否出一张可以吃的牌？', function (card) {
                                        return ['tao', 'shunshou', 'jiu', 'taoyuan'].contains(card.name) || ['equip3', 'equip4', 'equip6'].contains(get.subtype(card));
                                    }).set('addCount', false);
                                }//else event.goto(5);
                                "step 3"
                                event.target.chooseControl(['获得你一张牌', '摸两张牌然后令你横置'], function() {
                                    if (!get.attitude(event.target,player)&&player.countCards('he')) return '获得你一张牌';
                                    return '摸两张牌然后令你横置';
                                }).set('prompt', '尋蜜：请选择一项');
                                "step 4"
                                if (result.control == '获得你一张牌') {
                                    if (player.countGainableCards(event.target, 'he')) {//如果目标有牌
                                        event.target.gainPlayerCard('he', player ,true);
                                    }
                                }else if (result.control == '摸两张牌然后令你横置') {
                                    event.target.draw(2);
                                    player.link(true);
                                }
                                "step 5"
                                if (event.targets.length) event.goto(1);

                            },
                            group:"ark_xunmi装备丢失",
                        },
                        "ark_xunmi装备丢失": {
                            trigger:{player:'loseEnd'},
                            silent:true,
                            filter:function(event,player){
                                for(var i=0;i<event.cards.length;i++){
                                    if(event.cards[i].original=='e') return true;
                                }
                                return false;
                            },
                            content:function () {
                                player.storage.ark_xunmi在范围内players = game.filterPlayer(function (current) {
                                    return player.inRange(current) && current != player;
                                });
                            }
                        },
                        //////灰喉
                        "ark_shunfeng": {
                            shaRelated: true,
                            audio: "ext:无名扩展:2",
                            group: ["ark_shunfeng_respond", "ark_shunfeng_use"],
                            subSkill: {
                                use: {
                                    trigger: {
                                        player: "useCardToPlayered",
                                    },
                                    check: function (event, player) {
                                        return get.attitude(player, event.target) < 0;
                                    },
                                    filter: function (event, player) {
                                        return event.card.name == 'sha' && !player.isLinked();
                                    },
                                    logTarget: "target",
                                    content: function () {
                                        'step 0'
                                        player.link()
                                        'step 1'
                                        trigger.getParent().directHit.add(trigger.target);
                                    },
                                    sub: true,
                                },
                                respond: {
                                    trigger: {
                                        target: "useCardToTargeted",
                                    },
                                    check: function (event, player) {
                                        return get.effect(player, event.card, event.player, player) < 0;
                                    },
                                    filter: function (event, player) {
                                        return event.card.name == 'sha' && player.isLinked();
                                    },
                                    logTarget: "player",
                                    content: function () {
                                        'step 0'
                                        player.link()
                                        'step 1'
                                        trigger.getParent().excluded.add(player);
                                    },
                                    sub: true,
                                },
                            },
                            ai: {
                                "directHit_ai": true,
                                skillTagFilter: function (player, tag, arg) {

                                    return !player.isLinked();
                                },
                                effect: {
                                    target: function (card, player, target, current) {
                                        if (card.name == 'sha' && current < 0) return 0.7;
                                    },
                                },
                            },
                        },
                        "ark_yuyan": {
                            subSkill: {
                                useable: {
                                    charlotte: true,
                                    mark: true,
                                    intro: {
                                        content: "出杀次数+#",
                                    },
                                    init: function (player, skill) {
                                        if (!player.storage[skill]) player.storage[skill] = 0;
                                    },
                                    onremove: true,
                                    mod: {
                                        cardUsable: function (card, player, num) {
                                            if (card.name == 'sha') return num + player.storage.ark_yuyan_useable;
                                        },
                                    },
                                    sub: true,
                                },
                            },
                            trigger: {
                                player: ["linkEnd"],
                            },
                            forced: true,
                            content: function () {
                                'step 0'
                                player.draw()
                                'step 1'
                                var card = result[0];
                                if (get.type(card) != 'equip' && get.type(card) != 'delay') {
                                    if (!player.hasSkill('ark_yuyan_useable')) player.addTempSkill('ark_yuyan_useable', {player: "phaseEnd"})
                                    player.storage.ark_yuyan_useable++
                                    player.updateMarks('ark_yuyan_useable');
                                }
                            },
                        },
                        //////蒂蒂
                        "ark_yuelang": {
                            group: ["ark_yuelang_remove"],
                            audio: "ext:无名扩展:2",
                            trigger: {
                                player: "useCard",
                            },
                            forced: true,
                            init: function (player) {
                                if (!player.storage.yuelang_control) player.storage.yuelang_control = ["不可响应", "造成伤害加一", "不计入使用次数"];
                                if (!player.storage.yuelang_controlcontent) player.storage.yuelang_controlcontent = [function (trigger, player, event) {
                                    trigger.directHit.addArray(game.filterPlayer(function (current) {
                                        return current != player;
                                    }));
                                },
                                    function (trigger, player, event) {
                                        trigger.baseDamage++;
                                    },
                                    function (trigger, player, event) {
                                        if (trigger.addCount !== false) {
                                            trigger.addCount = false;
                                            var stat = player.getStat();
                                            if (stat && stat.card && stat.card[trigger.card.name]) stat.card[trigger.card.name]--;
                                        }
                                    }]
                            },
                            filter: function (trigger, player) {
                                if (game.roundNumber != 1 && player.storage.yuelang_control.length > 0) return player.countMark('ark_yuelang') < 1 && trigger.card.number % game.roundNumber == 0 && trigger.targets && trigger.targets.length == 1 && get.type(trigger.card) != 'equip';
                                if (game.roundNumber == 1 && player.storage.yuelang_control.length > 0) return player.countMark('ark_yuelang') < 2 && trigger.card.number % game.roundNumber == 0 && trigger.targets && trigger.targets.length == 1 && get.type(trigger.card) != 'equip';

                            },
                            control: ["不可响应", "造成伤害加一", "不计入使用次数"],
                            content: function () {
                                "step 0"
                                event.videoId = lib.status.videoId++;
                                var control = player.storage.yuelang_control;
                                var func = function (card, id, list2) {
                                    var list = list2
                                    var choiceList = ui.create.dialog('【跃浪】：请选择一至' + get.cnNumber(Math.max(4 - game.roundNumber, 1)) + '项', 'forcebutton');
                                    choiceList.videoId = id;
                                    for (var i = 0; i < list.length; i++) {
                                        list[i] = list[i].replace(/XXX/g, card);
                                        var str = '<div class="popup text" style="width:calc(100% - 10px);display:inline-block">';
                                        str += list[i];
                                        str += '</div>';
                                        var next = choiceList.add(str);
                                        next.firstChild.addEventListener(lib.config.touchscreen ? 'touchend' : 'click', ui.click.button);
                                        next.firstChild.link = i;
                                        for (var j in lib.element.button) {
                                            next[j] = lib.element.button[j];
                                        }
                                        choiceList.buttons.add(next.firstChild);
                                    }
                                    return choiceList;
                                };
                                if (player.isOnline2()) {
                                    player.send(func, get.translation(trigger.card), event.videoId, control);
                                }
                                event.dialog = func(get.translation(trigger.card), event.videoId, control);
                                if (player != game.me || _status.auto) {
                                    event.dialog.style.display = 'none';
                                }
                                var num = Math.min(4 - game.roundNumber, 1)
                                var next = player.chooseButton();
                                next.set('dialog', event.videoId);
                                next.set('forced', true);
                                next.set('selectButton', [1, Math.max(4 - game.roundNumber, 1)]);

                                "step 1"
                                if (player.isOnline2()) {
                                    player.send('closeDialog', event.videoId);
                                }
                                event.dialog.close();
                                var map = player.storage.yuelang_controlcontent
                                for (var i = 0; i < result.links.length; i++) {
                                    game.log(player, '选择了', '#g【跃浪】', '的', '#y选项' + get.cnNumber(result.links[i] + 1, true));
                                    map[result.links[i]](trigger, player, event);
                                }
                                'step 2'
                                player.addMark('ark_yuelang', 1, false)
                            },
                            subSkill: {
                                remove: {
                                    sub: true,
                                    trigger: {
                                        global: ["phaseAfter"],
                                    },
                                    silent: true,
                                    content: function () {
                                        player.removeMark('ark_yuelang', player.countMark('ark_yuelang'), false)
                                    },
                                    forced: true,
                                    popup: false,
                                },
                            },
                        },
                        "ark_chaoyong": {
                            subSkill: {
                                damage: {
                                    trigger: {
                                        player: "useCard1",
                                    },
                                    forced: true,
                                    popup: false,
                                    silent: true,
                                    firstDo: true,
                                    filter: function (event, player) {
                                        return event.card && event.card.name == 'sha';
                                    },
                                    content: function () {
                                        trigger.baseDamage++;
                                    },
                                    sub: true,
                                },
                            },
                            audio: "ext:无名扩展:2",
                            trigger: {
                                player: "phaseJieshuBegin",
                            },
                            frequent: true,
                            preHidden: true,
                            filter: function (event, player) {
                                return player.countMark('ark_yuelang') < 1 && player.storage.yuelang_control.length > 0;
                            },
                            content: function () {
                                'step 0'
                                player.chooseControl(player.storage.yuelang_control, 'cancel2').set('prompt', get.prompt('ark_chaoyong')).set('ai', function () {
                                    return player.storage.yuelang_control.randomGet();
                                });
                                'step 1'
                                if (result.control != 'cancel2') {
                                    player.storage.yuelang_control.remove(player.storage.yuelang_control[result.index])
                                    player.storage.yuelang_controlcontent.remove(player.storage.yuelang_controlcontent[result.index])
                                    player.gainMaxHp()
                                    player.recover()
                                    if (player.storage.yuelang_control.length == 0) player.addSkill('ark_chaoyong_damage')
                                }
                            },
                        },
                        /*东 水月 3勾玉 反移情之幻
                        臆想：锁定技，当其他角色获得/弃置你的牌时，改为摸一张牌/将牌堆顶一张牌置于弃牌堆。当你的判定牌生效前，
                             你可亮出牌堆底一张牌，若与判定结果颜色不同，则你声明一种花色作为判定结果。
                        镜花：当你受到伤害时，可进行一次判定，若为♠︎，防止此伤害，然后你可令一名角色失去1点体力；♥︎，
                             摸X张牌（X为伤害来源的手牌数）；其他，你获得之。*/
                        "ark_yixiang": {
                            group: "ark_yixiang_judge",
                            subSkill: {
                                judge: {
                                    audio: 2,
                                    trigger: {
                                        player: "judge",
                                    },
                                    direct: true,
                                    content: function () {
                                        "step 0"
                                        var cards = get.bottomCards()
                                        player.showCards(cards)
                                        if (get.color(cards) == get.color(player.judging[0], player)) event.finish()
                                        else {
                                            var str = '_yixiang：' + get.translation(trigger.player) + '的' + (trigger.judgestr || '') + '判定为' +
                                                get.translation(trigger.player.judging[0]) + '，请将其改为一种花色';
                                            player.chooseControl('spade', 'heart', 'diamond', 'club').set('prompt', str).set('ai', function () {
                                                var judging = _status.event.judging;
                                                var trigger = _status.event.getTrigger();
                                                var res1 = trigger.judge(judging);
                                                var list = lib.suit.slice(0);
                                                var attitude = get.attitude(player, trigger.player);
                                                if (attitude == 0) return 0;
                                                var getj = function (suit) {
                                                    return trigger.judge({
                                                        name: get.name(judging),
                                                        nature: get.nature(judging),
                                                        suit: suit,
                                                        number: get.number(judging),
                                                    })
                                                };
                                                list.sort(function (a, b) {
                                                    return (getj(b) - getj(a)) * get.sgn(attitude);
                                                });
                                                return list[0];
                                            }).set('judging', trigger.player.judging[0]);
                                        }
                                        "step 1"
                                        if (result.control != 'cancel2') {
                                            player.addExpose(0.25);
                                            player.popup(result.control);
                                            game.log(player, '将判定结果改为了', '#y' + get.translation(result.control + 2));
                                            if (!trigger.fixedResult) trigger.fixedResult = {};
                                            trigger.fixedResult.suit = result.control;
                                            trigger.fixedResult.color = get.color({suit: result.control});
                                        }
                                    },
                                    ai: {
                                        rejudge: true,
                                        tag: {
                                            rejudge: 0.4,
                                        },
                                        expose: 0.5,
                                    },
                                    sub: true,
                                },
                            },
                            trigger: {
                                target: ["rewriteGainResult", "rewriteDiscardResult"],
                            },
                            direct: true,
                            preHidden: true,
                            filter: function (event, player) {
                                return event.player != player;
                            },
                            audio: "ext:无名扩展:2",
                            content: function () {
                                'step 0'
                                trigger.cancel()
                                'step 1'
                                if (event.triggername == 'rewriteGainResult') {
                                    trigger.player.draw()
                                } else {
                                    var card = get.cards()
                                    trigger.player.lose(card, ui.discardPile);
                                    trigger.player.$throw(card, 1000);
                                    game.log(card, '进入了弃牌堆');
                                }
                            },
                        },
                        "ark_jinghua": {
                            audio: "ext:无名扩展:2",
                            trigger: {
                                player: "damageBegin",
                            },
                            direct: true,
                            preHidden: true,
                            content: function () {
                                "step 0"
                                player.judge();
                                "step 1"
                                switch (result.suit) {
                                    case 'heart':
                                        player.draw(trigger.source.countCards('h'));
                                        event.finish();
                                        break;
                                    case 'spade':
                                        trigger.cancel();
                                        break;
                                    default:
                                        player.gain(result.card, 'gain2');
                                        event.finish();
                                }
                                "step 2"
                                player.chooseTarget(get.prompt('ark_jinghua'), '令一名角色失去一点体力').set('ai', function (target) {
                                    var player = _status.event.player;
                                    return get.attitude(player, target);
                                });
                                "step 3"
                                if (result.bool) result.targets[0].loseHp()
                            },
                            ai: {
                                expose: 0.3,
                            },
                        },
                        /////
                        viewHandcard: {
                            trigger: {
                                player: ['discardPlayerCardBegin', 'gainPlayerCardBegin']
                            },
                            forced: true,
                            priority: 100,
                            forceDie: true,
                            popup: false,
                            filter: function (event, player) {
                                if (event.position.indexOf('h') == -1) {
                                    return false;
                                }
                                var cards = player.getCards('h');
                                for (var i = 0; i < cards.length; i++) {
                                    if (cards[i].hasGaintag('viewHandcard')) {
                                        return true;
                                    }
                                }
                                return false;

                            },
                            content: function () {
                                trigger.complexSelect = true;
                                if (!trigger.dialog) trigger.dialog = ui.create.dialog('hidden');
                                else if (!trigger.isMine) {
                                    trigger.dialog.style.display = 'none';
                                }
                                if (trigger.prompt == undefined) {
                                    var str = trigger.name == 'discardPlayerCard' ? '弃置' : '获得';
                                    str += get.translation(target);
                                    var range = get.select(trigger.selectButton);
                                    if (range[0] == range[1]) str += get.cnNumber(range[0]);
                                    else if (range[1] == Infinity) str += '至少' + get.cnNumber(range[0]);
                                    else str += get.cnNumber(range[0]) + '至' + get.cnNumber(range[1]);
                                    str += '张';
                                    if (trigger.position == 'h' || trigger.position == undefined) str += '手';
                                    if (trigger.position == 'e') str += '装备';
                                    str += '牌';
                                    trigger.prompt = str;
                                }
                                if (trigger.prompt) {
                                    trigger.dialog.add(trigger.prompt);
                                }
                                if (trigger.prompt2) {
                                    trigger.dialog.addText(trigger.prompt2);
                                }
                                trigger.prompt = '';
                                if (trigger.prompt2 != undefined) {
                                    trigger.prompt2 = '';
                                }
                                var cards = trigger.target.getCards('h');
                                var hs = [],
                                    hs2 = [];
                                for (var i = 0; i < cards.length; i++) {
                                    if (cards[i].hasGaintag('viewHandcard')) {
                                        hs.add(cards[i]);
                                    } else {
                                        hs2.add(cards[i]);
                                    }
                                }
                                if (hs.length) {
                                    trigger.dialog.addText('明置手牌');
                                    trigger.dialog.add(hs);
                                }
                                if (hs2.length) {
                                    trigger.dialog.addText('暗置手牌');
                                    trigger.dialog.add([hs2, 'blank']);
                                }
                            },
                            mark: true,
                            intro: {
                                mark: function (dialog, content, player) {
                                    var cards = player.getCards('h');
                                    var hs = [];
                                    for (var i = 0; i < cards.length; i++) {
                                        if (cards[i].hasGaintag('viewHandcard')) {
                                            hs.push(cards[i]);
                                        }
                                    }
                                    if (hs.length) {
                                        dialog.addSmall(hs);
                                    } else {
                                        dialog.addText('无明置手牌');
                                    }
                                },
                                content: function (content, player) {
                                    var cards = player.getCards('h');
                                    var hs = [];
                                    for (var i = 0; i < cards.length; i++) {
                                        if (cards[i].hasGaintag('viewHandcard')) {
                                            hs.push(cards[i]);
                                        }
                                    }
                                    if (hs.length) {
                                        return get.translation(hs);
                                    } else {
                                        return '无明置手牌';
                                    }
                                },
                            },
                        },


                        "ark_duanzui": {
                            trigger: {
                                source: 'damageBegin',
                            },
                            direct: true,
                            filter: function (event, player) {
                                if (event.card && event.card.name == 'sha') return true;
                                return false;
                            },
                            content: function () {
                                'step 0'
                                var list = [1, 2];
                                event.num = list.randomGet();
                                trigger.num *= event.num;
                                'step 1'
                                if (event.num == 2) {
                                    player.logSkill('ark_duanzui');
                                    //player.say('运气真好');
                                    var list = [1, 1, 1, 4];
                                    event.num = list.randomGet();
                                    trigger.num *= event.num;
                                    if (event.num == 4) player.say('欧皇在此');
                                    else player.say('不亏');
                                } else {
                                    player.say('倒霉');
                                }
                                'step 2'
                                if (player.hasSkill('ark_xuanyu_duanzui')) {
                                    var list = [trigger.player.next, trigger.player.previous, trigger.player, trigger.player];
                                    event.target = list.randomGet();
                                    if (event.target != trigger.player) {
                                        game.log(player, '打歪了，打到了', event.target);
                                    }
                                } else event.finish();
                                'step 3'
                                trigger.player = event.target;
                            },
                        },
                        "ark_xuanyu": {
                            enable: 'phaseUse',
                            init: function (player) {
                                player.storage.ark_xuanyu = false;
                            },
                            intro: {
                                content: "limited",
                            },
                            unique: true,
                            limited: true,
                            skillAnimation: true,
                            animationStr: '绚羽',
                            animationColor: "fire",
                            filter: function (event, player) {
                                return player.storage.ark_xuanyu == false;
                            },
                            content: function () {
                                'step 0'
                                player.awakenSkill('ark_xuanyu');
                                player.storage.ark_xuanyu = true;
                                'step 1'
                                player.addTempSkill('ark_xuanyu_sha');
                                player.addTempSkill('ark_xuanyu_use');
                                player.addTempSkill('ark_xuanyu_duanzui');
                            },
                            subSkill: {
                                sha: {
                                    popup: false,
                                    silent: true,
                                    firstDo: true,
                                    trigger: {player: 'useCard1'},
                                    filter: function (event, player) {
                                        return event.card && event.card.name == 'sha' && event.addCount !== false && event.cards &&
                                            event.cards.length == 1 && get.type(event.cards[0], 'trick') == 'trick' && get.color(event.card) == 'red';
                                    },
                                    //forced: true,
                                    content: function () {
                                        trigger.addCount = false;
                                        if (player.stat[player.stat.length - 1].card.sha > 0) {
                                            player.stat[player.stat.length - 1].card.sha--;
                                        }
                                    },
                                },
                                use: {
                                    enable: 'chooseToUse',
                                    prompt: "你可以将一张红色锦囊当做【杀】使用",
                                    selectCard: 1,
                                    filterCard: function (card, player) {
                                        return get.type(card) == 'trick' && get.color(card) == 'red';
                                    },
                                    position: "hs",
                                    viewAs: {
                                        name: 'sha',
                                    },
                                    viewAsFilter: function (player) {
                                        if (!player.countCards('hs', {color: 'red', type: 'trick'})) return false;
                                    },
                                    sub: true,
                                },
                                duanzui: {
                                    sub: true,
                                },
                            },
                        },
                        /*红 4勾玉 死神屠軍
                        技能：刺骨：当你成为【杀】的目标后，你可对其使用一张【杀】并优先结算，若造成伤害，则令其使用的那张【杀】无效。
                        秉烛：一名角色的弃牌阶段，若其弃置的牌中有【闪】，则你可获得之并展示其一张手牌，若为：【杀】，你将之对其使用；
                             【闪】，你弃置之，然后你可对其使用一张【杀】。*/
                        "ark_cigu": {
                            audio: "ext:天灾之下/audio:" + [1, 2].randomGet(),
                            //trigger:{target:"useCardToTarget"},
                            trigger: {
                                target: "shaBefore",
                            },
                            filter: function (event, player) {
                                return event.player.isAlive() && lib.filter.targetEnabled({name: 'sha'}, player, event.player) && player.hasSha();
                            },
                            check: function (event, player) {
                                return true;
                            },
                            content: function () {
                                "step 0"
                                player.chooseToUse(function (card, player, event) {
                                    return get.tag(card, 'damage') > 0 && card.name != 'nanman' && card.name != 'wanjian';
                                }, '对' + get.translation(trigger.player) + '使用一张杀').set('targetRequired', true).set('complexSelect', true).set('filterTarget', function (card, player, target) {
                                    return !(target != _status.event.sourcex && !ui.selected.targets.contains(_status.event.sourcex));
                                }).set('sourcex', trigger.player).set('ai', function () {
                                    return get.attitude(player, trigger.player);
                                }).set('oncard', function (card, player) {
                                    if (!card) card = this.card;
                                    card.ark_cigu = true;
                                    //card['jydiy_yitianjian']=true;
                                });
                                "step 1"
                                if (result.bool) {
                                    var list = player.getHistory('sourceDamage', function (evt) {
                                        return evt.card && evt.card.ark_cigu && evt.getParent("ark_cigu") == event && evt.player == trigger.player;
                                    });
                                    if (list.length) {
                                        trigger.cancel();
                                        if (trigger.player.getEquip(1)) {
                                            trigger.player.discard(trigger.player.getEquip(1));
                                        }
                                    }
                                }
                            },
                        },
                        "ark_bingzhu": {
                            audio: "ext:天灾之下/audio:" + [1, 2].randomGet(),
                            trigger: {global: 'phaseDiscardEnd'},
                            filter: function (event, player) {
                                if (!event.cards) return false;
                                return event.cards.filter(function (card) {
                                    return card.name == 'shan';
                                });
                            },
                            check: function (event, player) {
                                return get.attitude(player, event.player) < 0;
                            },
                            content: function () {
                                "step 0"
                                player.gain(trigger.cards.filter(function (card) {
                                    return card.name == 'shan';
                                }), 'gain2', 'log');
                                event.card2 = trigger.player.getCards('h').randomGet();
                                trigger.player.showCards(event.card2);
                                "step 1"
                                if (event.card2.name == 'sha') {
                                    player.useCard(event.card2, trigger.player)
                                } else if (event.card2.name == 'shan') {
                                    trigger.player.discard(event.card2);
                                    player.chooseToUse(function (card, player, event) {
                                        return get.tag(card, 'damage') > 0 && card.name != 'nanman' && card.name != 'wanjian';
                                    }, '对' + get.translation(trigger.player) + '使用一张杀').set('targetRequired', true).set('complexSelect', true).set('filterTarget', function (card, player, target) {
                                        return !(target != _status.event.sourcex && !ui.selected.targets.contains(_status.event.sourcex));
                                    }).set('sourcex', trigger.player).set('ai', function () {
                                        return get.attitude(player, trigger.player);
                                    })
                                }

                            }

                        },
                        /*整 浮士德 3勾玉 幻影弩手
                        寒芒：转换技，出牌阶段限一次，你使用【杀】时，你可①于结算后收回此【杀】；②附魔；③清空目标装备区，
                             若无防具因此进入弃牌堆，则令其弃置所有手牌，此【杀】伤害+1；④目标进行濒死结算。
                        默语：锁定技，出牌阶段结束时，若你使用过【杀】，则你重铸所有伤害类牌。*/
                        "ark_hanmang": {
                            marktext: '芒',
                            intro: {
                                content: function (storage, player) {
                                    if (player.storage.ark_hanmangcount % 4 == 1) {
                                        return '①于结算后收回此【杀】';
                                    } else if (player.storage.ark_hanmangcount % 4 == 2) {
                                        return '②附魔';
                                    } else if (player.storage.ark_hanmangcount % 4 == 3) {
                                        return '③清空目标装备区，若无防具因此进入弃牌堆，则令其弃置所有手牌，此【杀】伤害+1；';
                                    } else {
                                        return '④目标进行濒死结算。';
                                    }

                                },
                            },
                            mark: true,
                            trigger: {
                                player: "shaBegin",
                                // player:"useCard",
                            },
                            init: function (player) {
                                if (!player.storage.ark_hanmangcount) player.storage.ark_hanmangcount = 1;
                            },
                            usable: 1,
                            content: function () {
                                "step 0"
                                debugger
                                if (player.storage.ark_hanmangcount % 4 == 1) {
                                    player.gain(trigger.cards, 'gain2');
                                } else if (player.storage.ark_hanmangcount % 4 == 2) {
                                    player.chooseControl('fire', 'thunder', 'ice', 'cancel2', function (event, player) {
                                        return ['fire', 'thunder', 'ice'].randomGet();
                                    }).set('prompt', get.prompt2('ark_hanmang'));
                                } else if (player.storage.ark_hanmangcount % 4 == 3) {
                                    if (trigger.target.countCards('e') > 0) {
                                        trigger.target.discard(trigger.target.getCards("e"));
                                    } else {
                                        trigger.target.discard(trigger.target.getCards("h"));
                                        if (typeof trigger.extraDamage != 'number') {
                                            trigger.extraDamage = 0;
                                        }
                                        trigger.extraDamage++;
                                    }
                                } else {
                                    trigger.target.damage(trigger.target.hp);
                                }
                                "step 1"
                                if (result.control != 'cancel2') {
                                    player.logSkill('ark_hanmang');
                                    player.getHistory('custom').push({ark_hanmang: result.control});
                                }
                                "step 2"
                                player.storage.ark_hanmangcount++;
                            },
                            check: function (event, player) {
                                return true;
                            },
                            group: "ark_hanmang2",
                        },
                        "ark_hanmang2": {
                            trigger: {source: 'damageBegin1'},
                            filter: function (event, player, name) {
                                var customHistory = player.getHistory('custom', function (evt) {
                                    return evt.ark_hanmang;
                                });
                                return customHistory.length;
                            },
                            direct: true,
                            logTarget: 'player',
                            content: function () {
                                if (event.triggername == 'damageBegin1') {
                                    var customHistory = player.getHistory('custom', function (evt) {
                                        return evt.ark_hanmang;
                                    });
                                    trigger.nature = customHistory[0].ark_hanmang;
                                }
                            },
                        },
                        "ark_moyu": {
                            trigger: {player: "phaseUseAfter"},
                            forced: true,
                            filter: function (event, player) {
                                return player.getHistory('useCard', function (evt) {
                                    return evt.card.name == 'sha';
                                }).length;
                            },
                            content: function () {
                                "step 0"
                                var hs = player.getCards('h', function (card) {
                                    return get.tag(card, 'damage') > 0;
                                });
                                player.discard(hs);
                                player.draw(hs.length);
                            }
                        },
                        //----------------------------------
                        "ark_guixi": {
                            group: ["ark_guixi_skip"],
                            subSkill: {
                                skip: {
                                    trigger: {
                                        global: ["phaseDrawSkipped", "phaseUseSkipped"],
                                    },
                                    direct: true,
                                    content: function () {
                                        'step 0'
                                        switch (event.triggername) {
                                            case 'phaseJudgeSkipped':
                                                var str = '判定';
                                                break;
                                            case 'phaseDrawSkipped':
                                                var str = '摸牌';
                                                break;
                                            case 'phaseUseSkipped':
                                                var str = '出牌';
                                                break;
                                            case 'phaseDiscardSkipped':
                                                var str = '弃牌';
                                                break;
                                            default:
                                                var str = '';
                                                break;
                                        }
                                        player.chooseTarget(get.prompt('ark_guixi'), '令一名角色执行一个额外的回合' + str + '阶段', false).set('ai', function (target) {
                                            var player = _status.event.player;
                                            var att = get.attitude(player, target);
                                            var skipped = _status.event.skipped;
                                            if (skipped == 'phaseDrawSkipped') {
                                                return att > 0 ? 99 - target.countCards('h') : -1;
                                            } else if (skipped == 'phaseUseSkipped') {
                                                return att > 0 ? target.countCards('h') : -1;
                                            } else if (skipped == 'phaseDiscardSkipped') {
                                                return att < 0 ? target.countCards('h') : -1;
                                            } else {
                                                return att < 0 ? target.countCards('j') : -1;
                                            }
                                        }).set('skipped', event.triggername);
                                        'step 1'
                                        if (result.bool) {
                                            var target = result.targets[0];
                                            var skipped = event.triggername.slice(0, event.triggername.length - 7);
                                            player.logSkill('ark_guixi', target);
                                            target[skipped]();
                                        }
                                    },
                                    sub: true,
                                },
                            },
                        },
                        "ark_shutu": {
                            audio: "ext:天灾之下/audio:1",
                            derivation: ["ark_shutu2"],
                            trigger: {
                                global: "gameStart",
                                player: ["phaseBegin"],
                            },
                            direct: true,
                            content: function () {
                                'step 0'
                                var targets = game.filterPlayer(function (current) {
                                    return (current.inRangeOf(player) || current == player) && !current.hasSkill('ark_shutu2');
                                });
                                if (targets.length) {
                                    player.logSkill('ark_shutu', targets);
                                    for (var i = 0; i < targets.length; i++) {
                                        targets[i].addTempSkill('ark_shutu2', {player: 'die'});
                                    }
                                }
                            },
                        },
                        "ark_wuguang": {
                            audio: "ext:天灾之下/audio:" + [1, 2].randomGet(),
                            enable: "phaseUse",
                            usable: 1,
                            filter: function (event, player) {
                                return game.countPlayer(function (current) {
                                    return current.hasSkill('ark_shutu2');
                                });
                            },
                            filterTarget: function (card, player, target) {
                                return target.hasSkill('ark_shutu2');
                            },
                            selectTarget: [1, Infinity],
                            multitarget: true,
                            content: function () {
                                'step 0'
                                player.chooseControl(["①", "②"]).set('prompt', '無光：出牌阶段限一次，你可以移去任意名角色的“嗣”，并选择一项：①令这些角色各回复1点体力；②摸一张牌。').set('ai', function () {
                                    return '①'
                                });
                                "step 1"
                                if (result.control == '①') {
                                    for (var i = 0; i < targets.length; i++) {
                                        targets[i].recover();
                                        targets[i].removeSkill('ark_shutu2');
                                        player.draw()
                                    }
                                } else {
                                    player.draw();
                                    for (var i = 0; i < targets.length; i++) {
                                        targets[i].removeSkill('ark_shutu2');
                                        player.draw()
                                    }
                                }
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target: 2,
                                },
                                expose: 0.4,
                                threaten: 3,
                            },
                        },
                        "ark_chaoku": {
                            unique: true,
                            enable: "phaseUse",
                            mark: true,
                            skillAnimation: true,
                            animationColor: "water",
                            limited: true,
                            init: function (player) {
                                player.storage.ark_chaoku = false;
                            },
                            filter: function (event, player) {
                                if (player.storage.ark_chaoku) return false;
                                return game.countPlayer(function (current) {
                                    return current.hasSkill('ark_shutu2');
                                });
                            },
                            filterTarget: function (card, player, target) {
                                return target != player;
                            },
                            content: function () {
                                'step 0'
                                player.awakenSkill('ark_chaoku');
                                player.storage.ark_chaoku = true;
                                'step 1'
                                var count = 0;
                                for (var i = 0; i < game.players.length; i++) {
                                    if (game.players[i].hasSkill('ark_shutu2')) {
                                        game.players[i].removeSkill('ark_shutu2');
                                        count++;
                                    }
                                }
                                target.loseHp();
                                target.chooseToDiscard(count, 'he', true);
                            },
                            ai: {
                                order: 13,
                                result: {
                                    target: -2,
                                },
                            },
                            intro: {
                                content: "limited",
                            },
                        },
                        "ark_shutu2": {
                            audio: "ext:天灾之下/audio:2",
                            trigger: {
                                player: "damageBegin",
                                source: "damageBegin",
                            },
                            direct: true,
                            filter: function (event, player) {
                                if (!event.source) return false;
                                if (event.source == player) {
                                    return !player.getStat().skill.ark_shutu2_source;
                                } else {
                                    return !player.getStat().skill.ark_shutu2_player;
                                }
                            },
                            content: function () {
                                'step 0'
                                if (trigger.source == player) {
                                    player.getStat().skill.ark_shutu2_source = 1;
                                } else {
                                    player.getStat().skill.ark_shutu2_player = 1;
                                }
                                'step 1'
                                player.chooseControl(["是", "否"]).set('prompt', '嗣：每回合第一次受到或造成伤害时可以判定，若为红色，受到的伤害﹣1,若为黑色，造成的伤害＋1').set('ai', function () {
                                    return '是'
                                });
                                "step 2"
                                if (result.control == '是') {
                                    player.judge(function (card) {
                                        if (get.color(card) == 'red') return player == event.player;
                                        else return player == event.source;
                                    });
                                } else {
                                    event.finish();
                                }
                                "step 3"
                                if (result.color == 'red') {
                                    if (trigger.player == player) trigger.num--;
                                } else {
                                    if (trigger.source == player) trigger.num++;
                                }
                            },
                            mod: {
                                maxHandcardBase: function (player, num) {
                                    return num + 1;
                                },
                            },
                        },
                        "ark_shezui": {
                            audio: "ext:天灾之下/audio:" + [1, 2].randomGet(),
                            trigger: {
                                global: "useCardEnd",
                            },
                            direct: true,
                            filter: function (event, player) {
                                if (event.player == player) return false;
                                if (event.player != _status.currentPhase) return false;
                                if (!['basic', 'trick'].contains(get.type(event.card))) return false;
                                return true;
                            },
                            content: function () {
                                'step 0'
                                if (!trigger.player.getStat().skill.ark_shezui) {
                                    trigger.player.getStat().skill.ark_shezui = 1;
                                    event.finish();
                                } else if (trigger.player.getStat().skill.ark_shezui > 1) {
                                    event.finish();
                                } else {
                                    trigger.player.getStat().skill.ark_shezui++;
                                }
                                'step 1'
                                player.chooseControl(["是", "否"]).set('prompt', '是否发动【赦罪】？<br>当一名其他角色于其回合内第二次使用即时牌后，你可展示其两张手牌，若其中有[杀]，则你获得之；若没有，你令其回复1点体力。').set('ai', function () {
                                    return '是'
                                });
                                'step 2'
                                if (result.control == '是') {
                                    player.logSkill('ark_shezui', trigger.player);
                                    var cards = trigger.player.getCards('h').randomGets(2);
                                    var check = false;
                                    if (cards.length) {
                                        trigger.player.showCards(cards);
                                        for (var i = 0; i < cards.length; i++) {
                                            if (cards[i].name == 'sha') {
                                                player.gain(cards[i], trigger.player, 'giveAuto');
                                                check = true;
                                            }
                                        }
                                    }
                                    if (!check) trigger.player.recover();
                                }
                            },
                        },
                        "ark_chenhun": {
                            audio: "ext:天灾之下/audio:" + [1, 2].randomGet(),
                            enable: "phaseUse",
                            position: "h",
                            filterTarget: true,
                            filterCard: function (card) {
                                return card.name == 'sha'
                            },
                            selectCard: 4,
                            prompt: "出牌阶段，你可弃置四张[杀]，然后对一名角色造成3点伤害。若颜色相同，则改为造成X点伤害(X为目标角色体力上限)。",
                            check: function (card) {
                                return player.countCards('h', function (cardx) {
                                    return get.color(cardx) == card;
                                })
                            },
                            filter: function (event, player) {
                                return player.countCards('h', 'sha') >= 4;
                            },
                            content: function () {
                                var check = true;
                                for (var i = 1; i < cards.length; i++) {
                                    if (get.color(cards[0]) != get.color(cards[i])) {
                                        check = false;
                                        break;
                                    }
                                }
                                if (check) {
                                    target.damage(target.maxHp, player);
                                } else {
                                    target.damage(3, player);
                                }
                            },
                            ai: {
                                order: 10,
                                result: {
                                    target: -6,
                                },
                            },
                        },
                        "ark_xianyue": {
                            audio: "ext:天灾之下/audio:" + [1, 2].randomGet(),
                            mod: {
                                globalFrom: function (player, target, distance) {
                                    if (!player.getEquip(1)) return distance - 2;
                                },
                            },
                            trigger: {
                                source: "damageSource",
                            },
                            forced: true,
                            filter: function (event, player) {
                                return player.isDamaged() && event.card && event.card.name == 'sha';
                            },
                            content: function () {
                                player.recover(trigger.num);
                            },
                        },
                        "ark_gangyi": {
                            audio: "ext:天灾之下/audio:" + [1, 2].randomGet(),
                            mod: {
                                cardUsable: function (card, player, num) {
                                    if (card.name == 'sha') {
                                        return num + player.getDamagedHp();
                                    }
                                },
                            },
                            trigger: {
                                player: "dying",
                            },
                            usable: 1,
                            forced: true,
                            content: function () {
                                'step 0'
                                player.draw(4);
                                var stat = player.getStat();
                                stat.card = {};
                                for (var i in stat.skill) {
                                    var bool = false;
                                    var info = lib.skill[i];
                                    if (info.enable != undefined) {
                                        if (typeof info.enable == 'string' && info.enable == 'phaseUse') bool = true;
                                        else if (typeof info.enable == 'object' && info.enable.contains('phaseUse')) bool = true;
                                    }
                                    if (bool) stat.skill[i] = 0;
                                }
                                'step 1'
                                player.phaseUse();
                            },
                        },
                        "ark_tashijiangjun": {
                            audio: "ext:天灾之下/audio:3",
                            trigger: {
                                player: "recoverBegin",
                            },
                            forced: true,
                            filter: function (event, player) {
                                if (event.getParent(2).skill == 'ark_xianyue') return false;
                                return true;
                            },
                            content: function () {
                                trigger.cancel();
                            },
                        },
                        "ark_jiuri": {
                            group: ["ark_jiuri_1", "ark_jiuri_2"],
                            subSkill: {
                                "1": {
                                    audio: "ext:天灾之下/audio:1",
                                    trigger: {
                                        player: ["phaseZhunbeiBegin", "phaseJudgeBefore", "phaseDrawBefore", "phaseDiscardBefore", "phaseJieshuBegin"],
                                    },
                                    forced: true,
                                    audio: "ext:天灾之下/audio:2",
                                    content: function () {
                                        trigger.cancel();
                                    },
                                    sub: true,
                                },
                                "2": {
                                    audio: "ext:天灾之下/audio:2",
                                    trigger: {
                                        player: "phaseUseEnd",
                                    },
                                    frequent: true,
                                    content: function () {
                                        'step 0'
                                        event.count = 0
                                        'step 1'
                                        player.draw();
                                        'step 2'
                                        var list = ['spade', 'club', 'heart', 'diamond']
                                        var suit = 0
                                        for (var k = 0; k < 4; k++) {
                                            if (player.countCards('h', function (card) {
                                                return card.suit == list[k]
                                            }) > 0) suit++;
                                        }
                                        if (event.count == 7) player.loseHp()
                                        if (suit == 4) event.finish()
                                        'step 3'
                                        event.count++
                                        if (event.count < 8) event.goto(1)
                                    },
                                    sub: true,
                                },
                            },
                        },
                        "ark_miying": {
                            trigger: {
                                global: "phaseJieshu",
                            },
                            filter: function (event, player) {
                                return event.player != player && event.player.getStat('damage') && event.player.getStat('damage') >= 2
                            },
                            direct: true,
                            content: function () {
                                'step 0'
                                player.chooseCard(1, 'hs', get.prompt2('ark_miying')).set('ai', function (card) {
                                    var target = _status.event.target
                                    var player = _status.event.player
                                    if (get.attitude(player, target) >= 0) return -1
                                    if (get.attitude(player, target) < 0) return 15 - get.value(card)
                                }).set('target', trigger.player)
                                'step 1'
                                if (result.cards) {
                                    var card = result.cards[0]
                                    var next = player.lose(card, ui.cardPile);
                                    next.insert_card = true;
                                    game.broadcastAll(function (player) {
                                        var cardx = ui.create.card();
                                        cardx.classList.add('infohidden');
                                        cardx.classList.add('infoflip');
                                        player.$throw(cardx, 1000, 'nobroadcast');
                                    }, player);
                                    player.logSkill('ark_miying', trigger.player)
                                    player.line(trigger.player)
                                    trigger.player.loseHp()
                                }
                            },
                        },
                        "ark_huiwei": {
                            group: ["ark_huiwei_last"],
                            global: ["ark_huiwei_ai"],
                            trigger: {
                                global: ["useCard", "respond"],
                            },
                            forced: true,
                            filter: function (event, player) {
                                var last = player.storage.ark_huiwei;
                                if (last && get.color(last) == 'black' && get.color(event.card) == 'black') return true
                            },
                            priority: 10,
                            content: function () {
                                'step 0'
                                player.draw(1, 'bottom');
                                'step 1'
                                if (player.countCards('h') >= 4) {
                                    player.chooseCard(1, 'hs', '灰尾：你需将一张手牌置于牌堆顶', true).set('ai', function (card) {
                                        return -get.value(card)
                                    })
                                } else {
                                    event.finish()
                                }
                                'step 2'
                                if (result.cards) {
                                    var card = result.cards[0]
                                    var next = player.lose(card, ui.cardPile);
                                    next.insert_card = true;
                                    game.broadcastAll(function (player) {
                                        var cardx = ui.create.card();
                                        cardx.classList.add('infohidden');
                                        cardx.classList.add('infoflip');
                                        player.$throw(cardx, 1000, 'nobroadcast');
                                    }, player);
                                }
                            },
                            ai: {
                                threaten: 3,
                            },
                            mark: true,
                            intro: {
                                content: function (event, player) {
                                    if (player.storage.ark_huiwei) {
                                        return '上一张使用或打出的牌的颜色是' + get.color(player.storage.ark_huiwei)
                                    } else return '无上一张使用或打出的牌'
                                },
                            },
                            subSkill: {
                                last: {
                                    trigger: {
                                        global: ["useCard", "respond"],
                                    },
                                    silent: true,
                                    priority: 9,
                                    filter: function (event) {
                                        return event.card
                                    },
                                    content: function () {
                                        player.storage.ark_huiwei = trigger.card
                                    },
                                    sub: true,
                                    forced: true,
                                    popup: false,
                                },
                                ai: {
                                    mod: {
                                        aiOrder: function (player, card, num) {
                                            var att = 0
                                            var huiwei = game.filterPlayer(function (current) {
                                                if (current.hasSkill('ark_huiwei')) att += get.attitude(player, current)
                                                return current.hasSkill('ark_huiwei')
                                            })[0]
                                            if (typeof card == 'object' && huiwei) {
                                                var last = huiwei.storage.ark_huiwei
                                                if (last && get.color(last) == 'black' && get.color(card) == 'black') {
                                                    if (att >= 0) return num + 10;
                                                    else return num - 10
                                                }
                                            }
                                        },
                                    },
                                    sub: true,
                                },
                            },
                        },
                        /*拓拉
                        天途：其他角色的准备阶段，你可与其拼点：若你赢，令其跳过摸牌阶段或弃牌阶段，然后你的手牌上限-1；
                             若你没赢，则你摸两张牌并使手牌上限+1，然后本轮此技能不再失效。*/
                        "diy_tiantu": {
                            trigger: {
                                global: "phaseZhunbeiBegin",
                            },
                            check: function (event, player) {
                                var cards = player.get('h');
                                for (var i = 0; i < cards.length; i++) {
                                    if (cards[i].number > 11 && ai.get.value(cards[i]) < 7) {
                                        return ai.get.attitude(player, event.player) < 0;
                                    }
                                }
                                if (player.num('h', 'shan') && ai.get.attitude(player, event.player) < 0 && player.num('h') > 2) return 1;
                                return 0;
                            },
                            filter: function (event, player) {
                                if (player.hasSkill('diy_tiantu2')) return false;
                                //return event.player != player && get.distance(player, event.player, 'attack') > 1 && player.canCompare(event.player);
                                return event.player != player && player.canCompare(event.player);
                            },
                            prompt: function (event, player) {
                                var str = '';
                                str += '是否对' + get.translation(event.player) + '发动【天途】？';
                                return str;
                            },
                            content: function () {
                                'step 0'
                                player.chooseToCompare(trigger.player);
                                'step 1'
                                if (result.bool) {
                                    player.addSkill('diy_tiantu3');
                                    player.storage.diy_tiantu3++;
                                    player.updateMarks('diy_tiantu3');
                                    trigger.player.skip('phaseDraw');
									player.draw()
                                } else {
                                    player.addSkill('diy_tiantu4');
                                    player.storage.diy_tiantu4++;
                                    player.updateMarks('diy_tiantu4');
                                    player.addTempSkill('diy_tiantu2','roundStart');
                                    player.draw(2);
                                }
                            },
                            ai: {
                                expose: 0.2,
                            },
                        },
                        "diy_tiantu改": {
                            trigger: {
                                global: "phaseZhunbeiBegin",
                            },
                            check: function (event, player) {
                                var cards = player.get('h');
                                for (var i = 0; i < cards.length; i++) {
                                    if (cards[i].number > 11 && ai.get.value(cards[i]) < 7) {
                                        return ai.get.attitude(player, event.player) < 0;
                                    }
                                }
                                if (player.num('h', 'shan') && ai.get.attitude(player, event.player) < 0 && player.num('h') > 2) return 1;
                                return 0;
                            },
                            filter: function (event, player) {
                                if (player.hasSkill('diy_tiantu2')) return false;
                                return event.player != player && player.canCompare(event.player);
                            },
                            prompt: function (event, player) {
                                var str = '';
                                str += '是否对' + get.translation(event.player) + '发动【天途】？';
                                return str;
                            },
                            content: function () {
                                'step 0'
                                player.chooseToCompare(trigger.player).diy_tiantu改 = true;
                                'step 1'
                                if (result.bool) {
                                    player.addSkill('diy_tiantu3');
                                    player.storage.diy_tiantu3++;
                                    player.draw();
                                    //player.updateMarks('diy_tiantu3');
                                } else {
                                    player.addSkill('diy_tiantu4');
                                    player.storage.diy_tiantu4++;
                                    //player.updateMarks('diy_tiantu4');
                                    trigger.player.draw();
                                    event.finish();
                                }
                                'step 2'
                                player.chooseControl(['跳过摸牌阶段', '跳过弃牌阶段'], 'cancel', function (event1, player) {
                                    if (get.attitude(player,trigger.player)) return '跳过弃牌阶段';
                                    return '跳过摸牌阶段';
                                }).set("prompt2", '令其跳过摸牌阶段或弃牌阶段,然后你的手牌上限-1');
                                'step 3'
                                if (result.control != 'cancel') {
                                    debugger
                                    if (result.control == '跳过摸牌阶段') {
                                        trigger.player.skip('phaseDraw');
                                    }else {
                                        trigger.player.skip('phaseDiscard');
                                    }
                                }
                            },
                            ai: {
                                expose: 0.2,
                            },
                             //group: ["diy_tiantu改_compare","diy_tiantu改_compareBegin"],
                            // group: ["diy_tiantu改_compare"],
                            subSkill: {
                                compare: {
                                    enable: "chooseCard",
                                    forced: true,
                                    filter: function (event) {
                                        console.log("diy_tiantu改_compare-----------------------filter");
                                        console.log(event.diy_tiantu改);
                                        console.log(event.parent);
                                        if (!event.parent) return false;
                                        return event.type == 'compare' && !event.directresult && event.parent.diy_tiantu改;
                                    },
                                    onCompare: function (player) {
                                        return game.cardsGotoOrdering(player.storage.diy_tiantu改_compare).cards;
                                    },
                                    precontent: function () {

                                    },
                                    sub: true,
                                },
                                compareBegin: {
                                    trigger:{
                                        player:['chooseToCompareBegin','compareMultipleBegin'],
                                        //target:['chooseToCompareAfter','compareMultipleAfter']
                                    },
                                    filter: function () {
                                        return Array.from(ui.discardPile.childNodes).length;
                                    },
                                    content:function () {
                                        "step 0"
                                        var discardPile=Array.from(ui.discardPile.childNodes);
                                        if(discardPile.length){
                                            var cards = discardPile.filter(function (card) {
                                                return get.suit(card) == 'diamond';
                                            });
                                            player.chooseCardButton(get.prompt('diy_tiantu改'), cards).set('ai', function (button) {
                                                return get.number(button.link)>=11;
                                            });
                                        }
                                        "step 1"
                                        if (result.bool) {
                                            player.storage.diy_tiantu改_compare = result.links;
                                        }
                                    },
                                    sub: true,
                                },
                            },
                        },
                        "diy_tiantu2": {},
                        "diy_tiantu4": {
                            charlotte: true,
                            mark: true,
                            intro: {
                                content: "手牌上限+#",
                            },
                            init: function (player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = 0;
                            },
                            onremove: true,
                            mod: {
                                maxHandcard: function (player, num) {
                                    if (player.hasSkill('diy_kehan')) return Math.max(num + player.storage.diy_tiantu4, player.maxHp);
                                    return num + player.storage.diy_tiantu4;
                                },
                            },
                        },
                        "diy_tiantu3": {
                            charlotte: true,
                            mark: true,
                            intro: {
                                content: "手牌上限-#",
                            },
                            init: function (player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = 0;
                            },
                            onremove: true,
                            mod: {
                                maxHandcard: function (player, num) {

                                    if (player.hasSkill('diy_kehan')) {
                                        player.storage.diy_tiantu3 = Math.min(player.storage.diy_tiantu3, player.storage.diy_tiantu4);
                                    }
                                    if (player.storage.diy_tiantu3 > (num+player.storage.diy_tiantu4)) {
                                        player.storage.diy_tiantu3 = num+player.storage.diy_tiantu4;
                                    }
                                    return num - player.storage.diy_tiantu3;
                                },
                            },
                        },
                        /*逐魇：觉醒技，准备阶段，若你的手牌上限为0，为“天途”添加红色内容，然后你获得“可汗”。*/
                        "diy_zhuyan": {
                            skillAnimation: true,
                            animationColor: "gray",
                            unique: true,
                            juexingji: true,
                            trigger: {
                                player: "phaseZhunbeiBegin",
                            },
                            forced: true,
                            filter: function (event, player) {
                                return player.getHandcardLimit() < 1;
                            },
                            derivation: "diy_kehan",
                            content: function () {
                                "step 0"
                                //player.storage.diy_tiantu3 <= 2;
                                player.awakenSkill('diy_zhuyan');
                                player.removeSkill('diy_tiantu');
                                "step 1"
                                player.removeSkill('diy_tiantu4');
                                player.removeSkill('diy_tiantu3');
                                player.storage.diy_tiantu3 = 0;
                                player.storage.diy_tiantu4 = 0;
                                player.addSkill('diy_kehan');
                                player.addSkill('diy_tiantu改');
                                "step 2"
                                if (player.getHandcardLimit() < player.maxHp) {
                                    player.addSkill('diy_tiantu4');
                                    player.storage.diy_tiantu4=player.maxHp - player.getHandcardLimit();
                                }
                            },
                        },
                        /*可汗：锁定技，你的手牌上限至少等于你的体力上限。当一张【桃】被使用时，你可弃置一张红色手牌或失去1点体力，令之回复效果-1。
                        *      当你拼点后，你可与拼点对象各摸一张牌*/
                        "diy_kehan": {
                            trigger: {
                                global: ["taoBegin"],
                            },
                            priority: 90,
                            check: function (event, player) {
                                return get.attitude(player, event.player) < 0;
                            },
                            content: function () {
                                'step 0'

                                player.chooseToDiscard('弃置一张红色牌或失去1点体力', function (card) {
                                    return get.color(card) == 'red';
                                }).set('ai', function (card) {
                                    return 9 - get.value(card);
                                });
                                'step 1'
                                if (!result.bool) player.loseHp();
                                trigger.cancel();
                            },
                            ai: {
                                threaten: 1.4,
                            },
                            group:"diy_kehan当你拼点后",
                        },
                        "diy_kehan当你拼点后": {
                            trigger:{
                                player:['chooseToCompareAfter','compareMultipleAfter'],
                                //target:['chooseToCompareAfter','compareMultipleAfter']
                            },
                            content:function () {
                                //debugger
                                player.draw();
                                trigger.target.draw();
                            }
                        },
                        "diy_gongchou": {
                            enable: "phaseUse",
                            usable: 1,
                            content: function () {
                                player.turnOver();
                                player.useCard({name: 'jiu', isCard: true}, player);
                                player.addTempSkill('diy_gongchou2');
                            },
                            ai: {
                                order: 5,
                                result: {
                                    player: function (player) {
                                        if (_status.event.parent.name == 'phaseUse') {
                                            if (player.countCards('h', 'jiu') > 0) return 0;
                                            if (player.getEquip('zhuge') && player.countCards('h', 'sha') > 1) return 0;
                                            if (!player.countCards('h', 'sha')) return 0;
                                            var targets = [];
                                            var target;
                                            var players = game.filterPlayer();
                                            for (var i = 0; i < players.length; i++) {
                                                if (get.attitude(player, players[i]) < 0) {
                                                    if (player.canUse('sha', players[i], true, true)) {
                                                        targets.push(players[i]);
                                                    }
                                                }
                                            }
                                            if (targets.length) {
                                                target = targets[0];
                                            } else {
                                                return 0;
                                            }
                                            var num = get.effect(target, {name: 'sha'}, player, player);
                                            for (var i = 1; i < targets.length; i++) {
                                                var num2 = get.effect(targets[i], {name: 'sha'}, player, player);
                                                if (num2 > num) {
                                                    target = targets[i];
                                                    num = num2;
                                                }
                                            }
                                            if (num <= 0) return 0;
                                            var e2 = target.getEquip(2);
                                            if (e2) {
                                                if (e2.name == 'tengjia') {
                                                    if (!player.countCards('h', {
                                                        name: 'sha',
                                                        nature: 'fire'
                                                    }) && !player.getEquip('zhuque')) return 0;
                                                }
                                                if (e2.name == 'renwang') {
                                                    if (!player.countCards('h', {name: 'sha', color: 'red'})) return 0;
                                                }
                                                if (e2.name == 'baiyin') return 0;
                                            }
                                            if (player.getEquip('guanshi') && player.countCards('he') > 2) return 1;
                                            return target.countCards('h') > 3 ? 0 : 1;
                                        }
                                        if (player == _status.event.dying || player.isTurnedOver()) return 3;
                                    },
                                },
                                effect: {
                                    target: function (card, player, target) {
                                        if (card.name == 'guiyoujie') return [0, 0.5];
                                        if (target.isTurnedOver()) {
                                            if (get.tag(card, 'damage')) {
                                                if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                                                if (target.hp == 1) return;
                                                return [1, target.countCards('h') / 2];
                                            }
                                        }
                                    },
                                },
                            },
                        },
                        "diy_gongchou2": {
                            mod: {
                                cardUsable: function (card, player) {
                                    return Infinity;
                                },
                                targetInRange: function (card, player, target, now) {
                                    return true;
                                },
                            },
                        },
                        "diy_hanmeng": {
                            init: function (player, skill) {
                                if (!player.storage[skill]) player.storage[skill] = 0;
                            },
                            trigger: {
                                player: "useCardEnd",
                            },
                            forced: true,
                            filter: function (event, player) {
                                return player.countUsed() % 2 == 0 && player.isTurnedOver();
                            },
                            content: function () {
                                "step 0"
                                player.storage.diy_hanmeng++;
                                var cards = player.getCards('h');
                                if (cards.length) {
                                    player.lose(cards, ui.discardPile);
                                    player.$throw(cards, 1000);
                                    game.log(player, '将', cards, '置入了弃牌堆');
                                    event.draw = {bool: true, num: cards.length}
                                } else {
                                    event.draw = {bool: false}
                                }
                                "step 1"
                                if (event.draw && event.draw.bool) {
                                    player.draw(event.draw.num);
                                }
                                "step 2"
                                //player.draw(player.storage.diy_hanmeng);
                            },
                        },
                        "ark_youyin": {
                            mark: true,
                            intro: {
                                content: "cards",
                            },
                            group: ["ark_youyin_lose", "ark_youyin_cardsDiscard", "ark_youyin_phaseBegin", "ark_youyin_phaseEnd", "ark_youyin_gain"],
                            subSkill: {
                                lose: {
                                    trigger: {
                                        global: "loseAfter",
                                    },
                                    filter: function (event, player) {
                                        if (player.isTurnedOver()) return false;
                                        if (!player.storage.ark_youyin) return false;
                                        if (player.storage.ark_youyin_count >= 2) return false
                                        for (var i = 0; i < event.cards2.length; i++) {
                                            if (get.position(event.cards2[i], true) == 'd') {
                                                return true;
                                            }
                                        }
                                        return false;
                                    },
                                    forced: true,
                                    content: function () {
                                        'step 0'
                                        var storage = player.storage.ark_youyin
                                        var cards = trigger.cards2.filter(card => !storage.contains(card))
                                        storage.addArray(cards)
                                        'step 1'
                                        var suit = ['heart', 'club', 'spade', 'diamond']
                                        var storage = player.storage.ark_youyin
                                        for (var i = 0; i < 4; i++) {
                                            var cards = storage.filter(card => get.suit(card) == suit[i])
                                            storage.removeArray(cards)
                                            var num = Math.floor(cards.length / 2)
                                            for (var k = 0; k < num; k++) {
                                                if (player.storage.ark_youyin_count < 2) {
                                                    player.draw()
                                                    player.storage.ark_youyin_count++
                                                }
                                            }
                                            cards.splice(0, num * 2)
                                            storage.addArray(cards)
                                        }
                                    },
                                    sub: true,
                                },
                                cardsDiscard: {
                                    trigger: {
                                        global: "cardsDiscardAfter",
                                    },
                                    filter: function (event, player) {
                                        if (player.isTurnedOver()) return false;
                                        if (!player.storage.ark_youyin) return false
                                        if (player.storage.ark_youyin_count >= 2) return false
                                        for (var i = 0; i < event.cards.length; i++) {
                                            if (get.position(event.cards[i], true) == 'd') {
                                                return true;
                                            }
                                        }
                                        return false;
                                    },
                                    forced: true,
                                    content: function () {
                                        'step 0'
                                        var storage = player.storage.ark_youyin
                                        var cards = trigger.cards.filter(card => !storage.contains(card))
                                        storage.addArray(cards)
                                        'step 1'
                                        var suit = ['heart', 'club', 'spade', 'diamond']
                                        var storage = player.storage.ark_youyin
                                        for (var i = 0; i < 4; i++) {
                                            var cards = storage.filter(card => get.suit(card) == suit[i])
                                            storage.removeArray(cards)
                                            var num = Math.floor(cards.length / 2)
                                            for (var k = 0; k < num; k++) {
                                                if (player.storage.ark_youyin_count < 2) {
                                                    player.draw()
                                                    player.storage.ark_youyin_count++
                                                }
                                            }
                                            cards.splice(0, num * 2)
                                            storage.addArray(cards)
                                        }
                                    },
                                    sub: true,
                                },
                                phaseBegin: {
                                    trigger: {
                                        global: "phaseZhunbeiBegin",
                                    },
                                    silent: true,
                                    content: function () {
                                        player.storage.ark_youyin = [];
                                        player.storage.ark_youyin_count = 0;
                                    },
                                    sub: true,
                                    forced: true,
                                    popup: false,
                                },
                                phaseEnd: {
                                    trigger: {
                                        global: "phaseJieshuEnd",
                                    },
                                    silent: true,
                                    content: function () {
                                        delete player.storage.ark_youyin;
                                        player.storage.ark_youyin_count = 0;
                                    },
                                    sub: true,
                                    forced: true,
                                    popup: false,
                                },
                                gain: {
                                    trigger: {
                                        global: "gainAfter",
                                    },
                                    silent: true,
                                    filter: function (event, player) {
                                        if (!player.storage.ark_youyin) return false
                                        return true;
                                    },
                                    content: function () {
                                        var storage = player.storage.ark_youyin
                                        var cards = trigger.cards.filter(card => storage.contains(card))
                                        storage.removeArray(cards)
                                    },
                                    sub: true,
                                    forced: true,
                                    popup: false,
                                },
                            },
                        },
                        "ark_wuyue": {
                            usable: 1,
                            enable: "phaseUse",
                            filterCard: function (card, player) {
                                return get.color(card) == 'red'
                            },
                            position: "he",
                            content: function () {
                                'step 0'
                                player.draw()
                                event.targetx = player.next
                                'step 1'
                                event.targetx.draw()
                                'step 2'
                                event.targetx = event.targetx.next
                                if (event.targetx != player) {
                                    event.goto(1)
                                }
                                'step 3'
                                event.cardx = []
                                if (player.countCards('h')) {
                                    player.chooseToDiscard('h', true)
                                }
                                'step 4'
                                if (result.cards) {
                                    event.cardx.addArray(result.cards)
                                }
                                event.targetx = player.previous
                                'step 5'
                                if (event.targetx.countCards('h')) {
                                    event.targetx.chooseToDiscard('h', true)
                                }
                                'step 6'
                                if (result.cards) {
                                    event.cardx.addArray(result.cards)
                                }
                                event.targetx = event.targetx.previous
                                if (event.targetx != player) {
                                    event.goto(5)
                                }
                                'step 7'
                                if (event.cardx.length > 0) {
                                    player.chooseButton(['舞乐：你可以选择获得两张牌', event.cardx], [1, 2]).set("ai", function (button) {
                                        return get.value(button.link);
                                    });
                                }
                                'step 8'
                                if (result.links) {
                                    player.gain(result.links, 'gain2');
                                }
                            },
                            ai: {
                                order: 7,
                                threaten: 1.4,
                                result: {
                                    player: 3,
                                },
                            },
                        },
                        jcyuci: {
                            audio: "ext:天灾之下/audio:1",
                            trigger: {
                                player: "damageEnd",
                            },
                            forced: true,
                            filter: function (event, player) {
                                return event.source && player.isAlive() && event.source.isAlive();
                            },
                            content: function () {
                                'step 0'
                                player.judge();
                                'step 1'
                                if (result.color == 'black') {
                                    trigger.source.loseHp();
                                }
                            },
                        },
                        jcgutu: {
                            audio: "ext:天灾之下/audio:" + [1, 2, 3].randomGet(),
                            trigger: {
                                player: "pha seZhunbei",
                            },
                            mark: true,
                            marktext: "故土",
                            init: function (player) {
                                player.storage.jcgutu = 0;
                            },
                            intro: {
                                content: function (storage, player) {
                                    return '已发动' + player.storage.jcgutu + '次';
                                },
                            },
                            filter: function (event, player) {
                                return player.countCards('j') > 0 && player.countCards('h') > 0;
                            },
                            content: function () {
                                'step 0'
                                if (player.countCards('h') > 1) {
                                    player.chooseToDiscard('将手牌弃至一张，然后弃置判定区内的牌', (player.countCards('h') - 1));
                                } else {
                                    result.bool = true;
                                }
                                'step 1'
                                if (result.bool) {
                                    player.storage.jcgutu++;
                                    event.trigger('jcgutu2');
                                    var cards = player.getCards('j');
                                    player.discard(cards);
                                }
                            },
                            group: "jcgutu_gain",
                            derivation: ["jcchaosheng"],
                            subSkill: {
                                gain: {
                                    trigger: {
                                        player: "jcgutu2",
                                    },
                                    forced: true,
                                    filter: function (event, player) {
                                        return !player.hasSkill('jcchaosheng') && player.storage.jcgutu == 2;
                                    },
                                    content: function () {
                                        player.addSkill('jcchaosheng');
                                        game.log(get.translation(player) + '获得了【潮声】');
                                        player.unmarkSkill('jcgutu');
                                    },
                                    sub: true,
                                },
                            },
                        },
                        jcchaosheng: {
                            trigger: {
                                player: "useCard",
                            },
                            mark: true,
                            marktext: "潮声",
                            frequent: true,
                            init: function (player) {
                                player.storage.jcchaosheng = [0, 0, 0, 0, 0, 0];
                            },
                            intro: {
                                content: function (storage, player) {
                                    var str = '<li>各花色使用次数：';
                                    str += '<br><li>♥：';
                                    str += player.storage.jcchaosheng[0];
                                    str += '<br><li>♠：';
                                    str += player.storage.jcchaosheng[1];
                                    str += '<br><li>♣：';
                                    str += player.storage.jcchaosheng[2];
                                    str += '<br><li>♦：';
                                    str += player.storage.jcchaosheng[3];
                                    return str;
                                },
                            },
                            filter: function (event, player) {
                                if (player != _status.currentPhase) return false;
                                if (!event.isPhaseUsing()) return false;
                                var suit = get.suit(event.card);
                                if (!event.card || !suit) return false;
                                return true;
                            },
                            content: function () {
                                'step 0'
                                var suit = get.suit(trigger.card);
                                var index = -1;
                                if (!trigger.card || !suit) return false;
                                if (suit == 'heart') index = 0;
                                else if (suit == 'spade') index = 1;
                                else if (suit == 'club') index = 2;
                                else if (suit == 'diamond') index = 3;
                                if (index >= 0) {
                                    player.storage.jcchaosheng[index]++;
                                    event.index = index;
                                } else {
                                    event.finish();
                                }
                                'step 1'
                                if (player.storage.jcchaosheng[event.index] <= 2) {
                                    player.chooseBool('是否重置出牌次数并摸一张牌？');
                                } else {
                                    event.finish();
                                }
                                'step 2'
                                if (result.bool) {
                                    if (player.getCardUsable('sha') == 0) {
                                        player.storage.jcchaosheng[4]++;
                                    }
                                    if (player.getCardUsable('jiu') == 0) {
                                        player.storage.jcchaosheng[5]++;
                                    }
                                    // if(trigger.card.name=='sha') player.storage.jcchaosheng[4]++;
                                    // else if(trigger.card.name=='jiu') player.storage.jcchaosheng[5]++;
                                    // else {
                                    // var history=player.getHistory('useCard',function(evt){
                                    //     return evt.isPhaseUsing();
                                    // });
                                    // var num1=0;
                                    // var num2=0;
                                    // for(var i=1;i<history.length;i++){
                                    //     if(history[i].card.name=='sha'){
                                    //         num1++;
                                    //     }
                                    //     if(history[i].card.name=='jiu'){
                                    //         num2++;
                                    //     }
                                    // }
                                    // }
                                    player.draw();
                                }
                            },
                            mod: {
                                cardUsable: function (card, player, num) {
                                    if (card.name == 'sha') {
                                        return num + player.storage.jcchaosheng[4];
                                    }
                                    if (card.name == 'jiu') {
                                        return num + player.storage.jcchaosheng[5];
                                    }
                                },
                            },
                            group: "jcchaosheng_start",
                            subSkill: {
                                start: {
                                    trigger: {
                                        player: "phaseJieshuEnd",
                                    },
                                    forced: true,
                                    content: function () {
                                        for (var i = 0; i < 6; i++) {
                                            if (player.storage.jcchaosheng[i] != 0) player.storage.jcchaosheng[i] = 0;
                                        }
                                    },
                                    sub: true,
                                },
                            },
                        },
                        "ark_jiuwei": {
                            group: ["ark_jiuwei_move", "ark_jiuwei_recover"],
                            trigger: {
                                global: "gameDrawAfter",
                            },
                            forced: true,
                            content: function () {
                                'step 0'
                                var cards = get.cards(9);
                                player.storage.ark_jiuwei = cards
                                player.markSkill('ark_jiuwei')
                                'step 1'
                                var cards = player.getStorage("ark_jiuwei");
                                var next = player.chooseToMove('九尾：是否交换“尾”和手牌？');
                                next.set('list', [['九尾牌', cards], ['手牌区', player.getCards('h')],]);
                                next.set('filterMove', function (from, to) {
                                    return typeof to != 'number';
                                });
                                next.set('processAI', function (list) {
                                    var player = _status.event.player,
                                        cards = list[0][1].concat(list[1][1]).sort(function (a, b) {
                                            return get.useful(a) - get.useful(b);
                                        }), cards2 = cards.splice(0, player.storage.ark_jiuwei.length);
                                    return [cards2, cards];
                                });
                                'step 2'
                                if (result.bool) {
                                    var pushs = result.moved[0], gains = result.moved[1];
                                    pushs.removeArray(player.storage.ark_jiuwei);
                                    gains.removeArray(player.getCards('h'));
                                    if (!pushs.length || pushs.length != gains.length) return;
                                    player.lose(pushs, ui.special, 'toStorage');
                                    player.gain(gains, 'fromStorage');
                                    player.storage.ark_jiuwei.addArray(pushs);
                                    player.storage.ark_jiuwei.removeArray(gains);
                                    player.markSkill('ark_jiuwei');
                                }
                            },
                            intro: {
                                content: "cards",
                            },
                            subSkill: {
                                move: {
                                    trigger: {
                                        player: ["damageAfter", "phaseDrawAfter"],
                                    },
                                    direct: true,
                                    content: function () {
                                        'step 0'
                                        var cards = player.getStorage("ark_jiuwei");
                                        var next = player.chooseToMove('九尾：是否交换“尾”和手牌？');
                                        next.set('list', [['九尾牌', cards], ['手牌区', player.getCards('h')],]);
                                        next.set('filterMove', function (from, to) {
                                            return typeof to != 'number';
                                        });
                                        next.set('processAI', function (list) {
                                            var player = _status.event.player,
                                                cards = list[0][1].concat(list[1][1]).sort(function (a, b) {
                                                    return get.useful(a) - get.useful(b);
                                                }), cards2 = cards.splice(0, player.storage.ark_jiuwei.length);
                                            return [cards2, cards];
                                        });
                                        'step 1'
                                        if (result.bool) {
                                            player.logSkill('ark_jiuwei')
                                            var pushs = result.moved[0], gains = result.moved[1];
                                            pushs.removeArray(player.storage.ark_jiuwei);
                                            gains.removeArray(player.getCards('h'));
                                            if (!pushs.length || pushs.length != gains.length) return;
                                            player.lose(pushs, ui.special, 'toStorage');
                                            player.gain(gains, 'fromStorage');
                                            player.storage.ark_jiuwei.addArray(pushs);
                                            player.storage.ark_jiuwei.removeArray(gains);
                                            player.markSkill('ark_jiuwei');
                                        }
                                    },
                                    sub: true,
                                },
                                recover: {
                                    trigger: {
                                        player: "chooseToUseBefore",
                                    },
                                    direct: true,
                                    preHidden: true,
                                    filter: function (event, player) {
                                        if (!player.storage.ark_jiuwei) return false
                                        return event.type == 'dying' && player.isDying() && event.dying == player && player.storage.ark_jiuwei.length > 4
                                    },
                                    content: function () {
                                        'step 0'
                                        var cards = player.storage.ark_jiuwei
                                        if (cards.length > 0) {
                                            player.chooseButton(['九尾：弃置4张“尾”，将体力值恢复至1', cards], 4)
                                        }
                                        'step 1'
                                        if (result.links) {
                                            trigger.cancel()
                                            player.logSkill('ark_jiuwei', trigger.player);
                                            player.$throw(result.links);
                                            player.storage.ark_jiuwei.removeArray(result.links);
                                            game.cardsDiscard(result.links)
                                            player.syncStorage('ark_jiuwei');
                                            if (!player.storage.ark_jiuwei.length) {
                                                player.unmarkSkill('ark_jiuwei');
                                            } else {
                                                player.markSkill('ark_jiuwei');
                                            }
                                            player.recover(1 - player.hp);
                                        }
                                    },
                                    ai: {
                                        save: true,
                                        mingzhi: true,
                                        skillTagFilter: function (player, tag, target) {
                                            if (player != target) return false;
                                        },
                                    },
                                    sub: true,
                                },
                            },
                        },
                        "ark_binghuan": {
                            enable: "phaseUse",
                            init: function (player) {
                                player.storage.ark_binghuan = false;
                            },
                            intro: {
                                content: "limited",
                            },
                            unique: true,
                            limited: true,
                            skillAnimation: true,
                            animationStr: "冰环",
                            animationColor: "gray",
                            filter: function (event, player) {
                                return player.storage.ark_binghuan == false && player.maxHp >= 3;
                            },
                            content: function () {
                                'step 0'
                                player.awakenSkill('ark_binghuan');
                                player.storage.ark_binghuan = true;
                                event.cards = player.getCards('h');
                                player.discard(event.cards);
                                player.turnOver();
                                'step 1'
                                event.targets = game.filterPlayer();
                                event.targets.remove(player);
                                event.targets.sortBySeat();
                                player.useCard({name: 'wanjian', isCard: true}, event.targets, false);
                                player.useCard({name: 'wanjian', isCard: true}, event.targets, false);
                            },
                            mark: true,
                        },
                        "ark_candong": {
                            trigger: {
                                player: "phaseJieshuEnd",
                            },
                            forced: true,
                            content: function () {
                                player.loseHp();
                            },
                            group: ["ark_candong_maxHp", "ark_candong_die"],
                            subSkill: {
                                maxHp: {
                                    trigger: {
                                        player: "dying",
                                    },
                                    forced: true,
                                    content: function () {
                                        player.gainMaxHp();
                                        player.recover(player.maxHp - player.hp + 1);
                                    },
                                    sub: true,
                                },
                                die: {
                                    trigger: {
                                        player: "gainMaxHpEnd",
                                    },
                                    forced: true,
                                    filter: function (event, player) {
                                        return player.maxHp > 4;
                                    },
                                    content: function () {
                                        player.die();
                                    },
                                    sub: true,
                                },
                            },
                        },
                        "ark_jihan": {
                            enable: ["chooseToUse", "chooseToRespond"],
                            viewAs: {
                                name: "sha",
                                nature: "ice",
                                isCard: true,
                            },
                            filterCard: function () {
                                return false
                            },
                            viewAsFilter: function (player) {
                                return player.hp >= parseInt(player.storage.ark_jihan / 2);
                            },
                            selectCard: -1,
                            mark: true,
                            init: function (player) {
                                player.storage.ark_jihan = 0;
                            },
                            intro: {
                                content: function (storage, player) {
                                    return '<li>已发动' + player.storage.ark_jihan + '次<br><li>发动所需体力值：' + parseInt(player.storage.ark_jihan / 2);
                                },
                            },
                            precontent: function () {
                                var num = parseInt(player.storage.ark_jihan / 2);
                                player.loseHp(num);
                                player.storage.ark_jihan++;
                            },
                            prompt: "视为使用或打出一张冰【杀】",
                            ai: {
                                yingbian: function (card, player, targets, viewer) {
                                    if (get.attitude(viewer, player) <= 0) return 0;
                                    var base = 0, hit = false;
                                    if (get.cardtag(card, 'yingbian_hit')) {
                                        hit = true;
                                        if (targets.filter(function (target) {
                                            return target.hasShan() && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.nature(card)) > 0;
                                        })) base += 5;
                                    }
                                    if (get.cardtag(card, 'yingbian_all')) {
                                        if (game.hasPlayer(function (current) {
                                            return !targets.contains(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                                        })) base += 5;
                                    }
                                    if (get.cardtag(card, 'yingbian_damage')) {
                                        if (targets.filter(function (target) {
                                            return get.attitude(player, target) < 0 && (hit || !target.mayHaveShan() || player.hasSkillTag('directHit_ai', true, {
                                                target: target,
                                                card: card,
                                            }, true)) && !target.hasSkillTag('filterDamage', null, {
                                                player: player,
                                                card: card,
                                                jiu: true,
                                            })
                                        })) base += 5;
                                    }
                                    return base;
                                },
                                canLink: function (player, target, card) {
                                    if (!target.isLinked() && !player.hasSkill('wutiesuolian_skill')) return false;
                                    if (target.mayHaveShan() && !player.hasSkillTag('directHit_ai', true, {
                                        target: target,
                                        card: card,
                                    }, true)) return false;
                                    if (player.hasSkill('jueqing') || player.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                    return true;
                                },
                                basic: {
                                    useful: [5, 3, 1],
                                    value: [5, 3, 1],
                                },
                                order: function (item, player) {
                                    if (player.hasSkillTag('presha', true, null, true)) return 10;
                                    if (lib.linked.contains(get.nature(item))) {
                                        if (game.hasPlayer(function (current) {
                                            return current != player && current.isLinked() && player.canUse(item, current, null, true) && get.effect(current, item, player, player) > 0 && lib.card.sha.ai.canLink(player, current, item);
                                        }) && game.countPlayer(function (current) {
                                            return current.isLinked() && get.damageEffect(current, player, player, get.nature(item)) > 0;
                                        }) > 1) return 3.1;
                                        return 3;
                                    }
                                    return 3.05;
                                },
                                result: {
                                    target: function (player, target, card, isLink) {
                                        var eff = function () {
                                            if (!isLink && player.hasSkill('jiu')) {
                                                if (!target.hasSkillTag('filterDamage', null, {
                                                    player: player,
                                                    card: card,
                                                    jiu: true,
                                                })) {
                                                    if (get.attitude(player, target) > 0) {
                                                        return -7;
                                                    } else {
                                                        return -4;
                                                    }
                                                }
                                                return -0.5;
                                            }
                                            return -1.5;
                                        }();
                                        if (!isLink && target.mayHaveShan() && !player.hasSkillTag('directHit_ai', true, {
                                            target: target,
                                            card: card,
                                        }, true)) return eff / 1.2;
                                        return eff;
                                    },
                                },
                                tag: {
                                    respond: 1,
                                    respondShan: 1,
                                    damage: function (card) {
                                        if (card.nature == 'poison') return;
                                        return 1;
                                    },
                                    natureDamage: function (card) {
                                        if (card.nature) return 1;
                                    },
                                    fireDamage: function (card, nature) {
                                        if (card.nature == 'fire') return 1;
                                    },
                                    thunderDamage: function (card, nature) {
                                        if (card.nature == 'thunder') return 1;
                                    },
                                    poisonDamage: function (card, nature) {
                                        if (card.nature == 'poison') return 1;
                                    },
                                },
                            },
                        },
                        "ark_saoshe": {
                            mark: true,
                            locked: false,
                            zhuanhuanji: true,
                            marktext: "扫",
                            init: function (player) {
                                player.storage.ark_saoshe = true;
                            },
                            intro: {
                                content: function (storage, player, skill) {
                                    var str = player.storage.ark_saoshe ? '阳：出牌阶段限一次，你可以从牌堆中获得一张武器牌。若如此做，本回合你可将黑色手牌当无距离限制的【杀】使用' : '阴：出牌阶段限一次，你可以亮出牌堆顶的三张牌，然后获得其中的锦囊牌。若如此做，本回合你可将锦囊牌当任意【杀】使用';
                                    return str;
                                },
                            },
                            enable: "phaseUse",
                            usable: 1,
                            audio: "ext:天灾之下/audio:2",
                            content: function () {
                                'step 0'
                                if (player.storage.ark_saoshe) {
                                    player.storage.ark_saoshe = false;
                                    var card = get.cardPile(function (card) {
                                        return get.subtype(card) == 'equip1';
                                    });
                                    if (!card) player.say('阿能没找到武器，因为牌堆里没有啦！')
                                    else player.gain(card, 'gain2');
                                    player.addTempSkill('ark_saoshe_2');
                                } else {
                                    player.storage.ark_saoshe = true;
                                    var cards = get.cards(3);
                                    game.cardsGotoOrdering(cards);
                                    player.showCards(cards, '扫射');
                                    var cardsx = [];
                                    for (var i = 0; i < cards.length; i++) {
                                        if (get.type(cards[i]) == 'trick' || get.type(cards[i]) == 'delay') {
                                            cardsx.push(cards[i]);
                                        }
                                    }
                                    event.cards = cardsx;
                                    player.gain(cardsx, 'gain2');
                                    player.addTempSkill('ark_saoshe_1');
                                }
                                ;
                            },
                            subSkill: {
                                "1": {
                                    enable: "phaseUse",
                                    selectCard: 1,
                                    position: "h",
                                    viewAs: {
                                        name: "sha",
                                        nature: "fire",
                                        isCard: true,
                                    },
                                    viewAsFilter: function (player) {
                                        return player.countCards("h", {type: ['trick', 'delay']}) > 0;
                                    },
                                    filterCard: function (card, player) {
                                        return ['trick', 'delay'].contains(get.type(card));
                                    },
                                    sub: true,
                                    prompt: "将一张锦囊牌当做火【杀】使用",
                                    ai: {
                                        yingbian: function (card, player, targets, viewer) {
                                            if (get.attitude(viewer, player) <= 0) return 0;
                                            var base = 0, hit = false;
                                            if (get.cardtag(card, 'yingbian_hit')) {
                                                hit = true;
                                                if (targets.filter(function (target) {
                                                    return target.hasShan() && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.nature(card)) > 0;
                                                })) base += 5;
                                            }
                                            if (get.cardtag(card, 'yingbian_all')) {
                                                if (game.hasPlayer(function (current) {
                                                    return !targets.contains(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                                                })) base += 5;
                                            }
                                            if (get.cardtag(card, 'yingbian_damage')) {
                                                if (targets.filter(function (target) {
                                                    return get.attitude(player, target) < 0 && (hit || !target.mayHaveShan() || player.hasSkillTag('directHit_ai', true, {
                                                        target: target,
                                                        card: card,
                                                    }, true)) && !target.hasSkillTag('filterDamage', null, {
                                                        player: player,
                                                        card: card,
                                                        jiu: true,
                                                    })
                                                })) base += 5;
                                            }
                                            return base;
                                        },
                                        canLink: function (player, target, card) {
                                            if (!target.isLinked() && !player.hasSkill('wutiesuolian_skill')) return false;
                                            if (target.mayHaveShan() && !player.hasSkillTag('directHit_ai', true, {
                                                target: target,
                                                card: card,
                                            }, true)) return false;
                                            if (player.hasSkill('jueqing') || player.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                            return true;
                                        },
                                        basic: {
                                            useful: [5, 3, 1],
                                            value: [5, 3, 1],
                                        },
                                        order: function (item, player) {
                                            if (player.hasSkillTag('presha', true, null, true)) return 10;
                                            if (lib.linked.contains(get.nature(item))) {
                                                if (game.hasPlayer(function (current) {
                                                    return current != player && current.isLinked() && player.canUse(item, current, null, true) && get.effect(current, item, player, player) > 0 && lib.card.sha.ai.canLink(player, current, item);
                                                }) && game.countPlayer(function (current) {
                                                    return current.isLinked() && get.damageEffect(current, player, player, get.nature(item)) > 0;
                                                }) > 1) return 3.1;
                                                return 3;
                                            }
                                            return 3.05;
                                        },
                                        result: {
                                            target: function (player, target, card, isLink) {
                                                var eff = function () {
                                                    if (!isLink && player.hasSkill('jiu')) {
                                                        if (!target.hasSkillTag('filterDamage', null, {
                                                            player: player,
                                                            card: card,
                                                            jiu: true,
                                                        })) {
                                                            if (get.attitude(player, target) > 0) {
                                                                return -7;
                                                            } else {
                                                                return -4;
                                                            }
                                                        }
                                                        return -0.5;
                                                    }
                                                    return -1.5;
                                                }();
                                                if (!isLink && target.mayHaveShan() && !player.hasSkillTag('directHit_ai', true, {
                                                    target: target,
                                                    card: card,
                                                }, true)) return eff / 1.2;
                                                return eff;
                                            },
                                        },
                                        tag: {
                                            respond: 1,
                                            respondShan: 1,
                                            damage: function (card) {
                                                if (card.nature == 'poison') return;
                                                return 1;
                                            },
                                            natureDamage: function (card) {
                                                if (card.nature) return 1;
                                            },
                                            fireDamage: function (card, nature) {
                                                if (card.nature == 'fire') return 1;
                                            },
                                            thunderDamage: function (card, nature) {
                                                if (card.nature == 'thunder') return 1;
                                            },
                                            poisonDamage: function (card, nature) {
                                                if (card.nature == 'poison') return 1;
                                            },
                                        },
                                    },
                                },
                                "2": {
                                    enable: "phaseUse",
                                    selectCard: 1,
                                    position: "h",
                                    viewAs: {
                                        name: "sha",
                                        isCard: true,
                                    },
                                    viewAsFilter: function (player) {
                                        return player.countCards("h", {color: 'black'}) > 0;
                                    },
                                    filterCard: function (card, player) {
                                        return get.color(card) == 'black';
                                    },
                                    sub: true,
                                    prompt: "将一张黑色手牌当做【杀】使用",
                                    mod: {
                                        targetInRange: function (card, player) {
                                            if (card.name == 'sha') return true;
                                        },
                                    },
                                    ai: {
                                        yingbian: function (card, player, targets, viewer) {
                                            if (get.attitude(viewer, player) <= 0) return 0;
                                            var base = 0, hit = false;
                                            if (get.cardtag(card, 'yingbian_hit')) {
                                                hit = true;
                                                if (targets.filter(function (target) {
                                                    return target.hasShan() && get.attitude(viewer, target) < 0 && get.damageEffect(target, player, viewer, get.nature(card)) > 0;
                                                })) base += 5;
                                            }
                                            if (get.cardtag(card, 'yingbian_all')) {
                                                if (game.hasPlayer(function (current) {
                                                    return !targets.contains(current) && lib.filter.targetEnabled2(card, player, current) && get.effect(current, card, player, player) > 0;
                                                })) base += 5;
                                            }
                                            if (get.cardtag(card, 'yingbian_damage')) {
                                                if (targets.filter(function (target) {
                                                    return get.attitude(player, target) < 0 && (hit || !target.mayHaveShan() || player.hasSkillTag('directHit_ai', true, {
                                                        target: target,
                                                        card: card,
                                                    }, true)) && !target.hasSkillTag('filterDamage', null, {
                                                        player: player,
                                                        card: card,
                                                        jiu: true,
                                                    })
                                                })) base += 5;
                                            }
                                            return base;
                                        },
                                        canLink: function (player, target, card) {
                                            if (!target.isLinked() && !player.hasSkill('wutiesuolian_skill')) return false;
                                            if (target.mayHaveShan() && !player.hasSkillTag('directHit_ai', true, {
                                                target: target,
                                                card: card,
                                            }, true)) return false;
                                            if (player.hasSkill('jueqing') || player.hasSkill('gangzhi') || target.hasSkill('gangzhi')) return false;
                                            return true;
                                        },
                                        basic: {
                                            useful: [5, 3, 1],
                                            value: [5, 3, 1],
                                        },
                                        order: function (item, player) {
                                            if (player.hasSkillTag('presha', true, null, true)) return 10;
                                            if (lib.linked.contains(get.nature(item))) {
                                                if (game.hasPlayer(function (current) {
                                                    return current != player && current.isLinked() && player.canUse(item, current, null, true) && get.effect(current, item, player, player) > 0 && lib.card.sha.ai.canLink(player, current, item);
                                                }) && game.countPlayer(function (current) {
                                                    return current.isLinked() && get.damageEffect(current, player, player, get.nature(item)) > 0;
                                                }) > 1) return 3.1;
                                                return 3;
                                            }
                                            return 3.05;
                                        },
                                        result: {
                                            target: function (player, target, card, isLink) {
                                                var eff = function () {
                                                    if (!isLink && player.hasSkill('jiu')) {
                                                        if (!target.hasSkillTag('filterDamage', null, {
                                                            player: player,
                                                            card: card,
                                                            jiu: true,
                                                        })) {
                                                            if (get.attitude(player, target) > 0) {
                                                                return -7;
                                                            } else {
                                                                return -4;
                                                            }
                                                        }
                                                        return -0.5;
                                                    }
                                                    return -1.5;
                                                }();
                                                if (!isLink && target.mayHaveShan() && !player.hasSkillTag('directHit_ai', true, {
                                                    target: target,
                                                    card: card,
                                                }, true)) return eff / 1.2;
                                                return eff;
                                            },
                                        },
                                        tag: {
                                            respond: 1,
                                            respondShan: 1,
                                            damage: function (card) {
                                                if (card.nature == 'poison') return;
                                                return 1;
                                            },
                                            natureDamage: function (card) {
                                                if (card.nature) return 1;
                                            },
                                            fireDamage: function (card, nature) {
                                                if (card.nature == 'fire') return 1;
                                            },
                                            thunderDamage: function (card, nature) {
                                                if (card.nature == 'thunder') return 1;
                                            },
                                            poisonDamage: function (card, nature) {
                                                if (card.nature == 'poison') return 1;
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        "ark_danyu": {
                            trigger: {
                                source: "damageBegin",
                            },
                            forced: true,
                            filter: function (event, player) {
                                if (!event.card) return false;
                                return event.card.name == 'sha' && event.player.countCards('e', {subtype: 'equip2'}) > 0;
                            },
                            content: function () {
                                trigger.num--;
                            },
                            mod: {
                                cardUsable: function (card, player, num) {
                                    if (card.name == 'sha') return Infinity;
                                },
                            },
                        },
                        "ark_tianping2": {
                            trigger: {
                                player: "phaseDrawEnd",
                            },
                            frequent: true,
                            prompt: function () {
                                var player = _status.event.player;
                                var list = game.filterPlayer(function (target) {
                                    return target != player && target.hasZhuSkill('ark_tianping', player) && target.group == player.group;
                                });
                                var str = '将两张手牌交给' + get.translation(list);
                                if (list.length > 1) str += '中的一人';
                                str += '并回复一点体力';
                                return str;
                            },
                            filter: function (event, player) {
                                return player.countCards('h') >= 2 && game.hasPlayer(function (current) {
                                    return current != player && current.hasZhuSkill('ark_tianping', player) && current.group == player.group;
                                });
                            },
                            content: function () {
                                'step 0'
                                var list = game.filterPlayer(function (target) {
                                    return target != player && target.hasZhuSkill('ark_tianping', player) && target.group == player.group;
                                });
                                var str = '将两张手牌交给' + get.translation(list);
                                if (list.length > 1) str += '中的一人';
                                str += '并回复一点体力';
                                if (list.length > 1) {
                                    player.chooseTarget(str, function (target) {
                                        return target != player && target.hasZhuSkill('ark_tianping', player) && target.group == player.group;
                                    }).set('ai', function (target) {
                                        return get.attitude(player, target) > 0;
                                    });
                                } else {
                                    event.target = list[0];
                                    player.chooseBool(str).set('ai', function () {
                                        return get.attitude(player, event.target) > 0;
                                    });
                                }
                                'step 1'
                                if (result.bool) {
                                    player.chooseCard('h', 2);
                                } else {
                                    event.finish();
                                }
                                'step 2'
                                if (result.bool) {
                                    player.line(event.target);
                                    event.target.gain(result.cards, player, 'giveAuto');
                                    player.recover(event.target);
                                }
                            },
                        },
                        "ark_tianping": {
                            global: "ark_tianping2",
                            zhuSkill: true,
                        },
                        "ark_qiji": {
                            trigger: {
                                player: "damage",
                            },
                            forced: true,
                            init: function (player) {
                                player.storage.ark_qiji = 0;
                                player.unmarkSkill('ark_qiji');
                                player.syncStorage('ark_qiji');
                            },
                            content: function () {
                                'step 0'
                                player.addMark('ark_qiji', trigger.num);
                                player.syncStorage('ark_qiji');
                                'step 1'
                                if (player.countMark('ark_qiji') >= 2) {
                                    player.removeMark('ark_qiji', 2);
                                    player.syncStorage('ark_qiji');
                                    player.recover();
                                } else {
                                    event.finish();
                                }
                                'step 2'
                                event.goto(1);
                            },
                        },
                        "ark_laiyin": {
                            trigger: {
                                player: "phaseDrawBegin1",
                            },
                            group: ["ark_laiyin_recover", "ark_laiyin_damage"],
                            subSkill: {
                                recover: {
                                    trigger: {
                                        global: "recoverBegin",
                                    },
                                    frequent: true,
                                    filter: function (event, player) {
                                        return event.player.countMark('ark_laiyin');
                                    },
                                    content: function () {
                                        trigger.num++;
                                    },
                                    sub: true,
                                },
                                damage: {
                                    trigger: {
                                        global: "damageBegin",
                                    },
                                    frequent: true,
                                    filter: function (event, player) {
                                        return event.player.countMark('ark_laiyin') && event.nature;
                                    },
                                    content: function () {
                                        trigger.num++;
                                    },
                                    sub: true,
                                },
                            },
                            marktext: "生命",
                            intro: {
                                name: "生命",
                                content: "受到的治疗效果与属性伤害+1",
                            },
                            filter: function (event, player) {
                                return !event.numFixed;
                            },
                            content: function () {
                                "step 0"
                                var check;
                                var i, num = game.countPlayer(function (current) {
                                    return current != player && get.attitude(player, current) > 0;
                                });
                                check = (num >= 2);
                                player.chooseTarget(get.prompt('ark_laiyin'), '令其他一至两名角色回复体力并获得“生命”', [1, 2], function (card, player, target) {
                                    return player != target;
                                }, function (target) {
                                    if (!_status.event.aicheck) return 0;
                                    var att = get.attitude(_status.event.player, target);
                                    return att + (target.hp < target.maxHp ? 0 : -8);
                                }).set('aicheck', check);
                                "step 1"
                                if (result.bool) {
                                    player.logSkill('ark_laiyin', result.targets);
                                    event.targets = result.targets;
                                    event.targets.sortBySeat();
                                } else {
                                    event.finish();
                                }
                                "step 2"
                                event.target = event.targets.shift();
                                player.line(event.target);
                                event.target.recover(Math.min(parseInt((event.target.maxHp + 1) / 2), 4));
                                "step 3"
                                if (!event.target.countMark('ark_laiyin')) event.target.addMark('ark_laiyin');
                                event.target.markSkill('ark_laiyin');
                                if (event.targets.length) {
                                    event.goto(2);
                                }
                                "step 4"
                                trigger.changeToZero();
                                game.delay();
                            },
                        },
                        "ark_lingxiu": {
                            zhuSkill: true,
                            unique: true,
                            trigger: {
                                player: "phaseDrawBegin",
                            },
                            forced: true,
                            filter: function (event, player) {
                                if (player.identity != "zhu") return false;
                                if (!player.hasZhuSkill('ark_lingxiu')) return false;
                                else return !event.numFixed && game.hasPlayer(function (current) {
                                    return current.group == player.group;
                                });
                            },
                            content: function () {
                                event.targets = game.filterPlayer(function (target) {
                                    return target.group == player.group;
                                });
                                event.num = event.targets.length;
                                trigger.num += event.num;
                            },
                            group: "ark_lingxiu_give",
                            subSkill: {
                                give: {
                                    zhuSkill: true,
                                    trigger: {
                                        player: "phaseDrawEnd",
                                    },
                                    forced: true,
                                    filter: function (event, player) {
                                        if (player.identity != "zhu") return false;
                                        return game.hasPlayer(function (current) {
                                            return current.group == player.group;
                                        });
                                    },
                                    content: function () {
                                        'step 0'
                                        var targets = game.filterPlayer(function (target) {
                                            return target.group == player.group;
                                        });
                                        event.num = targets.length;
                                        player.chooseTarget('选择' + get.cnNumber(event.num) + '名角色，交给其各一张牌', event.num, true);
                                        'step 1'
                                        event.targets = result.targets;
                                        if (event.targets.contains(player)) event.targets.remove(player);
                                        if (!event.targets.length) {
                                            event.finish();
                                        }
                                        event.targets.sortBySeat();
                                        event.index = 0;
                                        'step 2'
                                        player.chooseCard('请选择一张牌交给' + get.translation(event.targets[event.index]), 'he', true);
                                        'step 3'
                                        event.card = result.cards[0];
                                        event.targets[event.index].gain(event.card, player, 'give');
                                        event.index++;
                                        if (event.index < event.targets.length) event.goto(2);
                                    },
                                    sub: true,
                                },
                            },
                        },
                        "ark_zhanhou": {
                            enable: "phaseUse",
                            usable: 1,
                            viewAs: {
                                name: "nanman",
                                isCard: true,
                            },
                            filterCard: function () {
                                return false
                            },
                            viewAsFilter: function (player) {
                                return player.countCards('h') > 0;
                            },
                            selectCard: -1,
                            precontent: function () {
                                player.chooseToDiscard('he', true);
                                player.loseHp();
                            },
                            prompt: "视为使用了一张【南蛮入侵】",
                            ai: {
                                wuxie: function (target, card, player, viewer) {
                                    if (get.attitude(viewer, target) > 0 && target.countCards('h', 'sha')) {
                                        if (!target.countCards('h') || target.hp == 1 || Math.random() < 0.7) return 0;
                                    }
                                },
                                basic: {
                                    order: 9,
                                    useful: [5, 1],
                                    value: 5,
                                },
                                result: {
                                    "target_use": function (player, target) {
                                        if (player.hasUnknown(2) && get.mode() != 'guozhan') return 0;
                                        var nh = target.countCards('h');
                                        if (get.mode() == 'identity') {
                                            if (target.isZhu && nh <= 2 && target.hp <= 1) return -100;
                                        }
                                        if (nh == 0) return -2;
                                        if (nh == 1) return -1.7
                                        return -1.5;
                                    },
                                    target: function (player, target) {
                                        var nh = target.countCards('h');
                                        if (get.mode() == 'identity') {
                                            if (target.isZhu && nh <= 2 && target.hp <= 1) return -100;
                                        }
                                        if (nh == 0) return -2;
                                        if (nh == 1) return -1.7
                                        return -1.5;
                                    },
                                },
                                tag: {
                                    respond: 1,
                                    respondSha: 1,
                                    damage: 1,
                                    multitarget: 1,
                                    multineg: 1,
                                },
                            },
                        },
                        "ark_haoling": {
                            trigger: {
                                player: "phaseJieshu",
                            },
                            filter: function (event, player) {
                                return game.hasPlayer(function (current) {
                                    return current.hp < current.maxHp && current != player && current.countCards('h') > 0;
                                });
                            },
                            content: function () {
                                'step 0'
                                event.targets = game.filterPlayer(function (target) {
                                    return target.hp < target.maxHp && target != player && target.countCards('h') > 0;
                                });
                                event.targets.sortBySeat();
                                event.index = 0;
                                'step 1'
                                player.gainPlayerCard(event.targets[event.index], 'h', true);
                                event.index++;
                                if (event.index < event.targets.length) event.redo();
                                else event.index = 0;
                                'step 2'
                                player.chooseCard('请选择一张牌交给' + get.translation(event.targets[event.index]), 'he', true);
                                'step 3'
                                event.card = result.cards[0];
                                event.targets[event.index].gain(event.card, player, 'give');
                                event.index++;
                                if (event.index < event.targets.length) event.goto(2);
                            },
                        },
                        "ark_Amybenye": {
                            audio: "ext:天灾之下/audio:" + [1, 2].randomGet(),
                            trigger: {
                                player: "shaMiss",
                                source: "damageSource",
                            },
                            filter: function (event, player) {
                                if (player.hasSkill('ark_Amybenye_1')) return false;
                                if (event.name == 'damage') return event.card && event.card.name == 'sha';
                                return true;
                            },
                            direct: true,
                            content: function () {
                                'step 0'
                                if (trigger.name == 'sha') {
                                    player.chooseUseTarget('###是否发动【奔夜】？###视为对' + get.translation(trigger.target) + '使用一张【杀】', {name: 'sha'}, false, 'nodistance', function (card, player, target) {
                                        var targetx = _status.event.targets
                                        return target == targetx
                                    }).set('logSkill', ['ark_Amybenye', trigger.player]).set('targets', trigger.target).set('addCount', false)
                                } else if (trigger.name == 'damage') {
                                    player.chooseBool('是否发动【奔夜】摸一张牌').set('ai', function () {
                                        return true;
                                    })
                                }
                                'step 1'
                                if (trigger.name == 'damage') {
                                    if (result.bool) {
                                        player.draw()
                                        player.logSkill('ark_Amybenye')
                                        player.addTempSkill('ark_Amybenye_1')
                                    }
                                }
                            },
                            ai: {
                                "unequip_ai": true,
                                unequip: true,
                                skillTagFilter: function (player, tag, arg) {
                                    if (tag == 'unequip') {
                                        if (arg && arg.card && arg.card.name == "sha") return true;
                                        return false
                                    }
                                },
                            },
                            subSkill: {
                                "1": {
                                    sub: true,
                                },
                            },
                        },
                        "ark_biaofeng": {
                            mod: {
                                globalFrom: function (from, to, distance) {
                                    if (from.countCards('e', {subtype: 'equip4'}) > 0 && from.hasSkill('ark_biaofeng')) {
                                        return distance - 4;
                                    }
                                },
                                globalTo: function (from, to, distance) {
                                    if (to.countCards('e', {subtype: 'equip3'}) > 0 && to.hasSkill('ark_biaofeng')) {
                                        return distance + 4;
                                    }
                                },
                            },
                        },
                        "ark_qiaobian": {
                            trigger: {
                                player: "phaseDiscardBegin",
                            },
                            filter: function (event, player) {
                                return player.countCards('h', {type: 'basic'}) > 0 && player.countCards('h') < player.getHandcardLimit();
                            },
                            direct: true,
                            content: function () {
                                'step 0'
                                var list = [];
                                for (var i = 0; i < lib.inpile.length; i++) {
                                    if (get.type(lib.inpile[i]) == 'trick' && lib.inpile[i] != 'wuxie') list.push(lib.inpile[i]);
                                }
                                player.chooseButton(['巧变：请选择要使用的锦囊牌', [list, 'vcard']], 1);
                                'step 1'
                                if (result.bool) {
                                    event.cardname = result.links[0][2];
                                    player.chooseToDiscard('弃置一张基本牌并视为使用一张' + get.translation(event.cardname) + '', 'hs', function (card) {
                                        return get.type(card) == 'basic';
                                    });
                                } else {
                                    event.finish();
                                }
                                'step 2'
                                if (result.bool) {
                                    player.chooseUseTarget({
                                        name: event.cardname,
                                        isCard: true
                                    }, true, false).viewAs = true;
                                }
                            },
                        },
                        "ark_tongxin": {
                            trigger: {
                                player: "phaseDrawBegin",
                            },
                            filter: function (event, player) {
                                return !event.numFixed;
                            },
                            content: function () {
                                'step 0'
                                event.targets = game.filterPlayer();
                                event.targets.remove(player);
                                event.targets.sortBySeat();
                                player.line(event.targets);
                                while (event.targets.length) {
                                    event.targets.shift().addSkill('ark_tongxin_1');
                                }
                                trigger.changeToZero();
                                'step 1'
                                game.delay();
                            },
                            group: "ark_tongxin_start",
                            subSkill: {
                                "1": {
                                    trigger: {
                                        player: "phaseDrawBegin2",
                                    },
                                    silent: true,
                                    forced: true,
                                    filter: function (event, player) {
                                        return !event.numFixed;
                                    },
                                    content: function () {
                                        trigger.num--;
                                    },
                                    sub: true,
                                    popup: false,
                                },
                                start: {
                                    trigger: {
                                        player: ["phaseZhunbeiBegin", "dieBegin"],
                                    },
                                    silent: true,
                                    forced: true,
                                    filter: function (event, player) {
                                        return game.hasPlayer(function (current) {
                                            return current.hasSkill('ark_tongxin_1');
                                        });
                                    },
                                    content: function () {
                                        event.targets = game.filterPlayer(function (target) {
                                            return target.hasSkill('ark_tongxin_1');
                                        });
                                        event.targets.sortBySeat();
                                        while (event.targets.length) {
                                            event.targets.shift().removeSkill('ark_tongxin_1');
                                        }
                                    },
                                    sub: true,
                                    popup: false,
                                },
                            },
                        },
                        "ark_yuxiao旧": {
                            group: ["ark_yuxiao_start"],
                            subSkill: {
                                "1": {
                                    trigger: {
                                        source: "damageBegin",
                                    },
                                    filter: function (event, player) {
                                        return event.card && event.card.name == 'sha';
                                    },
                                    content: function () {
                                        trigger.num++;
                                    },
                                    sub: true,
                                },
                                start: {
                                    trigger: {
                                        global: "phaseBefore",
                                        player: ["enterGame", "enableEquipEnd"],
                                    },
                                    forced: true,
                                    silent: true,
                                    content: function () {
                                        if (!player.isDisabled(1)) player.disableEquip(1);
                                    },
                                    sub: true,
                                    popup: false,
                                },
                            },
                            trigger: {
                                player: "useCardToPlayered",
                            },
                            forced: true,
                            filter: function (event, player) {
                                return event.card.name == 'sha';
                            },
                            content: function () {
                                'step 0'
                                player.addTempSkill('unequip', 'shaAfter');
                                'step 1'
                                if (trigger.target.countCards('e', {subtype: 'equip2'}) > 0) {
                                    if (!trigger.target.isDisabled(2)) trigger.target.disableEquip(2);
                                    player.addTempSkill('ark_yuxiao_1', 'shaAfter');
                                }
                            },
                            mod: {
                                targetInRange: function (card, player) {
                                    if (card.name == 'sha') return true;
                                },
                                cardUsable: function (card, player, num) {
                                    if (get.subtype(card) == 'equip1') return 0;
                                },
                            },
                        },
                        "ark_yuxiao": {
                            group: ['ark_yuxiao_start'],
                            subSkill: {
                                start: {
                                    trigger: {
                                        global: 'phaseBefore',
                                        player: ['enterGame', 'enableEquipEnd'],
                                    },
                                    forced: true,
                                    silent: true,
                                    content: function () {
                                        if (!player.isDisabled(1)) player.disableEquip(1);
                                    },
                                },
                                "1": {
                                    trigger: {
                                        source: 'damageBegin',
                                    },
                                    forced: true,
                                    filter: function (event, player) {
                                        return event.card && event.card.name == 'sha';
                                    },
                                    content: function () {
                                        trigger.num++;
                                    },
                                },
                            },
                            trigger: {
                                player: 'useCardToPlayered',
                            },
                            forced: true,
                            filter: function (event, player) {
                                return event.card.name == 'sha';
                            },
                            content: function () {
                                'step 0'
                                player.addTempSkill('unequip', 'shaAfter');
                                'step 1'
                                if (trigger.target.countCards('e', {subtype: 'equip2'}) > 0) {
                                    if (!trigger.target.isDisabled(2)) trigger.target.disableEquip(2);
                                    player.addTempSkill('ark_yuxiao_1', 'shaAfter');
                                }
                            },
                            mod: {
                                targetInRange: function (card, player) {
                                    if (card.name == 'sha') return true;
                                },
                                cardUsable: function (card, player, num) {
                                    if (get.subtype(card) == 'equip1') return 0;
                                },
                            }
                        },
                        "ark_baihe旧": {
                            trigger: {
                                global: "useCardToPlayer",
                            },
                            filter: function (event, player) {
                                if (event.player == player) return false;
                                var card = event.card;
                                if (get.type(card) != 'trick') return false;
                                return player.countCards('h');
                            },
                            content: function () {
                                'step 0'
                                player.chooseCard('交给' + get.translation(trigger.player) + '一张手牌', 'h');
                                'step 1'
                                if (result.bool && result.cards.length) {
                                    trigger.player.gain(result.cards, player, 'give');
                                } else {
                                    event.finish();
                                }
                                'step 2'
                                trigger.untrigger();
                                trigger.getParent().player = player;
                                game.log(player, '成为了', trigger.card, '的使用者');
                            },
                        },
                        "ark_baihe": {
                            trigger: {
                                global: 'useCardToPlayer',
                            },
                            filter: function (event, player) {
                                if (event.player == player) return false;
                                var card = event.card;
                                if (get.type(card) != 'trick') return false;
                                return player.countCards('h');
                            },
                            content: function () {
                                'step 0'
                                player.chooseCard('交给' + get.translation(trigger.player) + '一张手牌', 'h');
                                'step 1'
                                if (result.bool && result.cards.length) {
                                    trigger.player.gain(result.cards, player, 'give');
                                } else {
                                    event.finish();
                                }
                                'step 2'
                                event.card = trigger.card;
                                trigger.untrigger();
                                event.player2 = trigger.getParent().player;
                                event.targets = [];
                                event.targets.addArray(trigger.getParent().targets);
                                // for(var i=0;i<trigger.getParent().targets.length;i++){
                                //     event.targets.push(trigger.getParent().targets[i]);
                                // }
                                trigger.getParent().targets = [];
                                trigger.getParent().player = player;
                                game.log(player, '成为了', trigger.card, '的使用者');
                                if (event.targets.length > 1) {
                                    if (['wugu', 'taoyuan'].contains(event.card.name)) {

                                    } else if (event.card.name == 'wuzhong') {
                                        if (event.targets.contains(player)) {

                                        } else {
                                            event.targets.remove(event.player2);
                                            event.targets.push(player);
                                        }
                                    } else {
                                        if (event.targets.contains(player)) {
                                            event.targets.remove(player);
                                            event.targets.push(event.player2);
                                        }
                                    }
                                } else {
                                    if (event.card.name == 'wuzhong') {
                                        event.targets = [player];
                                    }
                                }
                                'step 3'
                                player.useCard({name: event.card.name, isCard: true}, event.targets);
                            }
                        },
                        /*夺势：当你成为一张伤害类即时牌的目标后，你可选择一名与你距离为1的角色，交给其一张手牌并 令其替你进行响应。
                               若你在结算完成后体力值减少，则获得其两张牌。否则你明置其一张手牌。*/
                        "tlxs_duoshi": {
                            group: "tlxs_duoshi_damage",
                            subSkill: {
                                damage: {
                                    trigger: {
                                        //global:["respondAfter","useCardAfter"],
                                        global: ["useCardAfter"],
                                    },
                                    forced: true,
                                    filter: function (event, player) {
                                        return player.storage.duoshi && player.storage.duoshi_target.isAlive();
                                    },
                                    content: function () {
                                        'step 0'
                                        debugger
                                        if (player.storage.duoshi_hp == player.hp) event.goto(3)
                                        else event.num = 2;
                                        'step 1'
                                        if (event.num > 0) {
                                            if (player.storage.duoshi_target.countGainableCards(player, 'hej') > 0) {
                                                player.gainPlayerCard(player.storage.duoshi_target, 'hej');
                                            }
                                            event.num--
                                        } else {
                                            delete player.storage.duoshi_hp;
                                            delete player.storage.duoshi_target;
                                            delete player.storage.duoshi
                                            event.finish()
                                        }
                                        'step 2'
                                        if (event.num > 0) event.goto(1)
                                        else {
                                            delete player.storage.duoshi_hp;
                                            delete player.storage.duoshi_target;
                                            delete player.storage.duoshi
                                            event.finish()
                                        }
                                        'step 3'
                                        player.chooseCardShow(player.storage.duoshi_target);
                                        delete player.storage.duoshi_hp;
                                        delete player.storage.duoshi_target;
                                        delete player.storage.duoshi
                                    },
                                    sub: true,
                                },
                            },
                            trigger: {
                                player: ["chooseToRespondBefore", "chooseToUseBefore"],
                            },
                            filter: function (event, player) {
                                debugger
                                if (!event.filterCard || event.filterCard({name: 'wuxie'}, player, event)) return false;
                                var evt = event.getParent('phaseUse'), card = event.getParent().respondTo;
                                return game.hasPlayer(function (current) {
                                    return current != player && get.distance(current, player) <= 1
                                }) && !event.responded && event.type != 'phase';
                            },
                            direct: true,
                            content: function () {
                                "step 0"
                                player.chooseCardTarget({
                                    filterCard: function (card, player) {
                                        return lib.filter.cardDiscardable(card, player);
                                    },
                                    selectCard: 1,
                                    filterTarget: function (card, player, target) {
                                        return player != target && get.distance(target, player) <= 1;
                                    },
                                    ai1: function (card) {
                                        return 10 - get.value(card);
                                    },
                                    ai2: function (target) {
                                        var att = get.attitude(_status.event.player, target);
                                        var trigger = _status.event.getTrigger();
                                        var da = 0;
                                        if (_status.event.player.hp == 1) {
                                            da = 10;
                                        }
                                        var c = target.countCards('h'), h = target.hp
                                        if (att == 0) return 0.1 + da;
                                        if (h - c > 2 && att > 0) {
                                            return att + c;
                                        }
                                        return -att + c;
                                    },
                                    prompt: get.prompt('tlxs_duoshi'),
                                    prompt2: lib.translate.tlxs_duoshi_info
                                });
                                'step 1'
                                if (result.bool) {
                                    player.storage.duoshi_hp = player.hp;
                                    result.targets[0].gain(result.cards[0], 'gain2')
                                    var next = result.targets[0].chooseToRespond('是否替' + get.translation(player) + '打出响应牌')
                                    next.set('ai', function () {
                                        var event = _status.event;
                                        return (get.attitude(event.player, event.source) - 2);
                                        //return true;
                                    });
                                    next.set('filterCard', function (card) {
                                        return trigger.filterCard(card)
                                    });
                                    next.set('source', player)
                                    player.storage.duoshi_target = result.targets[0];
                                    player.storage.duoshi = true;
                                } else event.finish()
                                "step 2"
                                if (result.bool) {
                                    trigger.untrigger();
                                    trigger.animate = false;
                                    trigger.responded = true;
                                    trigger.result = {bool: true, card: result.cards[0]}

                                }

                            },
                            ai: {
                                respondShan: true,
                                effect: {
                                    target: function (card) {
                                        if (get.tag(card, 'respondShan')) return 0.4;
                                        if (get.tag(card, 'respondSha')) return 0.4;
                                    },
                                },
                            },
                        },
                        "tlxs_quanji": {
                            group: "tlxs_quanji_use",
                            subSkill: {
                                use: {
                                    enable: "phaseUse",
                                    filter: function (event, player) {
                                        return game.hasPlayer(function (current) {
                                            return current != player && current.getHandcard().length > 0;
                                        });
                                    },
                                    content: function () {
                                        'step 0'
                                        var dialog = ['权计']
                                        for (var i = 0; i < game.players.length; i++) {
                                            if (game.players[i].getHandcard().length > 0) {
                                                dialog.add(get.translation(game.players[i]) + '的' + '明置牌');
                                                var hs = game.players[i].getHandcard();
                                                dialog.add(hs);
                                            }
                                        }
                                        player.chooseButton('选择一张卡牌打出', dialog);
                                        'step 1'
                                        if (result.bool) {
                                            var bool1 = game.hasPlayer(function (current) {
                                                return player.canUse(result.links[0], current, false);
                                            }), type = get.type(result.links[0])
                                            if (!bool1 && (type != 'equip' || type != 'delay')) {
                                                if (type == 'equip' || type == 'delay') player.draw()
                                                game.log(result.links[0], '无合法对象或不符合规则')
                                                event.finish();
                                            }
                                            var target = get.owner(result.links[0])
                                            game.log(player, '暗置了', target, '的一张牌');
                                            var name = get.name(result.links[0]), nature = get.nature(result.links[0]);
                                            player.chooseUseTarget({
                                                name: name,
                                                nature: nature,
                                                isCard: true
                                            }, true, false)
                                            target.hideHandcard(result.links);
                                        } else event.finish()
                                    },
                                    sub: true,
                                },
                            },
                            trigger: {
                                player: ["chooseToRespondBegin", "chooseToUseBegin"],
                            },
                            direct: true,
                            filter: function (event, player) {
                                if (event.responded) return false;
                                if (event.tlxs_quanji) return false;
                                return game.hasPlayer(function (current) {
                                    return current != player && current.getHandcard().length > 0;
                                }) && event.type != 'phase';
                            },
                            content: function () {
                                "step 0"
                                var dialog = ['权计']
                                for (var i = 0; i < game.players.length; i++) {
                                    if (game.players[i].getHandcard().length > 0) {
                                        dialog.add(get.translation(game.players[i]) + '的' + '明置牌');
                                        var hs = game.players[i].getHandcard();
                                        dialog.add(hs);
                                    }
                                }
                                player.chooseButton('选择' + get.translation(target) + '的一张手牌打出', dialog).filterButton = function (button) {
                                    return trigger.filterCard(button.link);
                                }


                                "step 1"
                                if (result.bool) {
                                    var target = get.owner(result.links[0])
                                    game.log(player, '暗置了', target, '的一张牌');
                                    target.hideHandcard(result.links);
                                    trigger.untrigger();
                                    trigger.animate = false;
                                    trigger.responded = true;
                                    trigger.result = {bool: true, card: result.buttons[0].link}
                                }
                            },
                            ai: {
                                respondShan: true,
                                effect: {
                                    target: function (card) {
                                        if (get.tag(card, 'respondShan')) return 0.4;
                                        if (get.tag(card, 'respondSha')) return 0.4;
                                    },
                                },
                            },
                        },
                        "huangnv2": {
                            skillAnimation: true,
                            animationColor: "gray",
                            unique: true,
                            enable: "phaseUse",
                            audio: "ext:天灾之下/audio:2",
                            limited: true,
                            zhuSkill: true,
                            filterTarget: function (card, player, target) {
                                return target.group == player.group;
                            },
                            multitarget: true,
                            multiline: true,
                            selectTarget: [1, Infinity],
                            filter: function (event, player) {
                                return player.hasZhuSkill('huangnv2') && player.storage.huangnv2 == false;
                            },
                            content: function () {
                                player.awakenSkill('huangnv2')
                                player.storage.huangnv2 = true,
                                    target.addSkill('huangnv')
                            },
                            ai: {
                                order: 1,
                                result: {
                                    target: function (player) {
                                        return 1;
                                    },
                                },
                            },
                            mark: true,
                            intro: {
                                content: "limited",
                            },
                            init: function (player, skill) {
                                player.storage[skill] = false;
                            },
                        },
                        huangnv: {
                            group: "huangnv_use",
                            subSkill: {
                                use: {
                                    enable: "phaseUse",
                                    filter: function (event, player) {
                                        return game.hasPlayer(function (current) {
                                            return current != player && current.getHandcard().length > 0;
                                        });
                                    },
                                    content: function () {
                                        'step 0'
                                        var dialog = ['皇女互助中心']
                                        for (var i = 0; i < game.players.length; i++) {
                                            if (game.players[i] == player) continue;
                                            if (game.players[i].getHandcard().length > 0) {
                                                dialog.add(get.translation(game.players[i]) + '的' + '明置牌');
                                                var hs = game.players[i].getHandcard();
                                                dialog.add(hs);
                                            }
                                        }
                                        player.chooseButton('选择一张卡牌使用', dialog);
                                        'step 1'
                                        if (result.bool) {
                                            var bool1 = game.hasPlayer(function (current) {
                                                return player.canUse(result.links[0], current, false);
                                            });
                                            if (!bool1) {
                                                game.log(result.links[0], '无合法对象')
                                                event.finish();
                                            }
                                            var target = get.owner(result.links[0])
                                            game.log(player, '使用了', target, '的手牌');
                                            player.chooseUseTarget(result.links[0])
                                            target.$throw(result.links[0]);
                                            target.lose(result.links[0]);
                                        } else event.finish()
                                    },
                                    sub: true,
                                },
                            },
                            trigger: {
                                player: ["chooseToRespondBegin"],
                            },
                            direct: true,
                            filter: function (event, player) {
                                if (event.responded) return false;
                                if (event.huangnv) return false;
                                return game.hasPlayer(function (current) {
                                    return current != player && current.getHandcard().length > 0;
                                }) && event.type != 'phase';
                            },
                            content: function () {
                                "step 0"
                                var dialog = ['皇女互助中心']
                                for (var i = 0; i < game.players.length; i++) {
                                    if (game.players[i] == player) continue;
                                    if (game.players[i].getHandcard().length > 0) {
                                        dialog.add(get.translation(game.players[i]) + '的' + '明置牌');
                                        var hs = game.players[i].getHandcard();
                                        dialog.add(hs);
                                    }
                                }
                                player.chooseButton('选择' + get.translation(target) + '的一张卡手牌打出', dialog).filterButton = function (button) {
                                    return trigger.filterCard(button.link);
                                }


                                "step 1"
                                if (result.bool) {
                                    var target = get.owner(result.links[0])
                                    game.log(player, '使用了', target, '的手牌');
                                    target.$throw(result.links[0]);
                                    target.lose(result.links[0]);
                                    trigger.untrigger();
                                    trigger.animate = false;
                                    trigger.responded = true;
                                    result.buttons[0].link.remove();
                                    trigger.result = {bool: true, card: result.buttons[0].link}
                                }
                            },
                            ai: {
                                respondShan: true,
                                effect: {
                                    target: function (card) {
                                        if (get.tag(card, 'respondShan')) return 0.4;
                                        if (get.tag(card, 'respondSha')) return 0.4;
                                    },
                                },
                            },
                        },
                        huairen: {
                            trigger: {
                                player: "phaseDrawBegin2",
                            },
                            direct: true,
                            audio: "ext:萨卡兹兄妹:2",
                            filter: function (event, player) {
                                return !event.numFixed && event.num > 0;
                            },
                            content: function () {
                                "step 0"
                                var check;
                                if (player.countCards('h') == 0) {
                                    check = false;
                                } else {
                                    check = (game.countPlayer(function (current) {
                                        return get.attitude(player, current) > 1;
                                    }) >= 2);
                                }
                                if (get.is.versus()) {
                                    event.versus = true;
                                    player.chooseBool(get.prompt2('huairen')).ai = function () {
                                        return game.countPlayer(function (current) {
                                            return player.side == current.side;
                                        }) > 2;
                                    };
                                } else {
                                    player.chooseTarget(get.prompt2('huairen'), [1, 3], lib.filter.notMe).set('check', check);
                                }
                                "step 1"
                                if (result.bool) {
                                    var targets;
                                    if (event.versus) {
                                        targets = game.filterPlayer(function (current) {
                                            return current != player && current.side == player.side;
                                        });
                                    } else {
                                        targets = result.targets;
                                    }
                                    player.logSkill('hongyuan', targets);
                                    game.asyncDraw(targets);
                                    trigger.cancel();
                                    event.current = targets;
                                    event.num1 = targets.length;
                                    event.num = 0
                                } else event.finish()
                                'step 2'
                                event.target = event.current[event.num];
                                "step 3"
                                if (!event.target.countCards('he')) event.goto(6);
                                else event.target.chooseCard('交给' + get.translation(player) + '一张牌或令' + get.translation(player) + '明置自身一张手牌', 'he').set('ai', function (card) {
                                    var evt = _status.event.getParent();
                                    if (get.attitude(_status.event.player, evt.player) > 2) {
                                        if (card.name == 'jiu') return 120;
                                        if (card.name == 'tao') return 110;
                                    }
                                    return 100 - get.value(card);
                                });
                                "step 4"
                                if (result.bool && result.cards && result.cards.length) {
                                    player.gain(result.cards, event.target, 'giveAuto');
                                    event.goto(6)
                                } else {
                                    player.chooseCardShow(event.target)
                                }
                                "step 5"

                                'step 6'
                                event.num++
                                if (event.num < event.num1) event.goto(2);
                            },
                        },
                        "tlxy_xingdeng": {
                            audio: "ext:天灾之下/audio:2",
                            trigger: {
                                global: "phaseEnd",
                            },
                            frequent: true,
                            preHidden: true,
                            filter: function (event, player) {
                                return player.getHandcard().length != 1;
                            },
                            content: function () {
                                'step 0'
                                var num = player.countCards('h');
                                var num2 = 3
                                if (num > num2) {
                                    player.chooseToDiscard(num - num2, true, 'h');
                                } else player.drawTo(Math.max(3, num));
                                'step 1'
                                player.chooseCard('h', true)
                                'step 2'
                                player.viewHandcard(result.cards[0]);
                            },
                        },
                        "ark_cuihua": {
                            group: ["ark_cuihua_tao", "ark_cuihua_dying", "ark_cuihua_recover", "ark_cuihua_control"],
                            trigger: {
                                global: "useCardAfter",
                            },
                            filter: function (event, player) {
                                if (!player.storage.ark_cuihua && player.hasSkill('ark_cuihua_count')) return false;
                                return event.card && event.player && event.targets
                                    && event.targets.contains(player) && event.player.hp >= player.hp
                                    && game.hasPlayer(function (current) {
                                        return current.hp < player.hp && player.canUse(event.card, current)
                                    });
                            },
                            content: function () {
                                var targets = game.filterPlayer(function (current) {
                                    return current.hp < player.hp && player.canUse(trigger.card, current)
                                })
                                player.chooseUseTarget(trigger.card, targets, false);
                                player.addTempSkill('ark_cuihua_count')
                            },
                            subSkill: {
                                count: {
                                    sub: true,
                                },
                                tao: {
                                    mod: {
                                        aiValue: function (player, card, num) {
                                            if (get.name(card) != 'tao' && get.suit(card) != 'spade') return;
                                            var cards = player.getCards('hs', function (card) {
                                                return get.name(card) == 'tao' || get.suit(card) == 'spade';
                                            });
                                            cards.sort(function (a, b) {
                                                return (get.name(a) == 'tao' ? 1 : 2) - (get.name(b) == 'tao' ? 1 : 2);
                                            });
                                            var geti = function () {
                                                if (cards.contains(card)) {
                                                    return cards.indexOf(card);
                                                }
                                                return cards.length;
                                            };
                                            return Math.max(num, [6.5, 4, 3, 2][Math.min(geti(), 2)]);
                                        },
                                        aiUseful: function () {
                                            return lib.skill.kanpo.mod.aiValue.apply(this, arguments);
                                        },
                                    },
                                    locked: false,
                                    enable: "chooseToUse",
                                    viewAsFilter: function (player) {
                                        if (!player.storage.ark_cuihua) return false
                                        return player.countCards('hes', {suit: 'spade'}) > 0;
                                    },
                                    filterCard: function (card) {
                                        return get.suit(card) == 'spade';
                                    },
                                    position: "hes",
                                    viewAs: {
                                        name: "tao",
                                    },
                                    prompt: "将一张黑桃牌当桃使用",
                                    check: function (card) {
                                        return 15 - get.value(card)
                                    },
                                    ai: {
                                        threaten: 1.5,
                                        basic: {
                                            order: function (card, player) {
                                                if (player.hasSkillTag('pretao')) return 5;
                                                return 2;
                                            },
                                            useful: [6.5, 4, 3, 2],
                                            value: [6.5, 4, 3, 2],
                                        },
                                        result: {
                                            target: 2,
                                            "target_use": function (player, target) {
                                                // if(player==target&&player.hp<=0) return 2;
                                                if (player.hasSkillTag('nokeep', true, null, true)) return 2;
                                                var nd = player.needsToDiscard();
                                                var keep = false;
                                                if (nd <= 0) {
                                                    keep = true;
                                                } else if (nd == 1 && target.hp >= 2 && target.countCards('h', 'tao') <= 1) {
                                                    keep = true;
                                                }
                                                var mode = get.mode();
                                                if (target.hp >= 2 && keep && target.hasFriend()) {
                                                    if (target.hp > 2 || nd == 0) return 0;
                                                    if (target.hp == 2) {
                                                        if (game.hasPlayer(function (current) {
                                                            if (target != current && get.attitude(target, current) >= 3) {
                                                                if (current.hp <= 1) return true;
                                                                if ((mode == 'identity' || mode == 'versus' || mode == 'chess') && current.identity == 'zhu' && current.hp <= 2) return true;
                                                            }
                                                        })) {
                                                            return 0;
                                                        }
                                                    }
                                                }
                                                if (target.hp < 0 && target != player && target.identity != 'zhu') return 0;
                                                var att = get.attitude(player, target);
                                                if (att < 3 && att >= 0 && player != target) return 0;
                                                var tri = _status.event.getTrigger();
                                                if (mode == 'identity' && player.identity == 'fan' && target.identity == 'fan') {
                                                    if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'fan' && tri.source != target) {
                                                        var num = game.countPlayer(function (current) {
                                                            if (current.identity == 'fan') {
                                                                return current.countCards('h', 'tao');
                                                            }
                                                        });
                                                        if (num > 1 && player == target) return 2;
                                                        return 0;
                                                    }
                                                }
                                                if (mode == 'identity' && player.identity == 'zhu' && target.identity == 'nei') {
                                                    if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'zhong') {
                                                        return 0;
                                                    }
                                                }
                                                if (mode == 'stone' && target.isMin() &&
                                                    player != target && tri && tri.name == 'dying' && player.side == target.side &&
                                                    tri.source != target.getEnemy()) {
                                                    return 0;
                                                }
                                                return 2;
                                            },
                                        },
                                        tag: {
                                            recover: 1,
                                            save: 1,
                                        },
                                    },
                                    sub: true,
                                },
                                dying: {
                                    trigger: {
                                        global: "recoverAfter",
                                    },
                                    filter: function (event, player) {
                                        if (event.player.isDying()) return false;
                                        return event.cuihuadying == true;
                                    },
                                    content: function () {
                                        'step 0'
                                        var cards = trigger.player.getCards('h');
                                        player.line(trigger.player);
                                        if (cards && cards.length > 0) {
                                            var content = [get.translation(trigger.player) + '的手牌', cards];
                                            game.log(player, '观看了', trigger.player, '的手牌');
                                            player.chooseControl('ok').set('dialog', content);
                                        } else event.goto(3)
                                        'step 1'
                                        var cards = trigger.player.getCards('h').filter(card => get.suit(card) == 'spade');
                                        if (cards && cards.length > 0) {
                                            player.gain(cards)
                                            trigger.player.$give(cards, player)
                                        } else {
                                            event.goto(3)
                                        }
                                        'step 2'
                                        event.finish()
                                        'step 3'
                                        trigger.player.storage.ark_cuihua_control = true
                                    },
                                    forced: true,
                                    sub: true,
                                },
                                recover: {
                                    trigger: {
                                        global: "recoverBegin",
                                    },
                                    forced: true,
                                    silent: true,
                                    popup: false,
                                    filter: function (event, player) {
                                        if (!player.storage.ark_cuihua) return false
                                        if (!event.source) return false;
                                        if (!event.player.isDying()) return false;
                                        return event.source == player && event.player != player
                                    },
                                    content: function () {
                                        trigger.cuihuadying = true;
                                    },
                                    sub: true,
                                },
                                control: {
                                    forced: true,
                                    trigger: {
                                        global: "phaseBeginStart",
                                    },
                                    filter: function (event, player) {
                                        return player != event.player && !event.player._trueMe && event.player.storage.ark_cuihua_control == true;
                                    },
                                    logTarget: "player",
                                    content: function () {
                                        trigger.player.storage.ark_cuihua_control = false
                                        trigger.player._trueMe = player;
                                        game.addGlobalSkill('autoswap');
                                        if (trigger.player == game.me) {
                                            game.notMe = true;
                                            if (!_status.auto) ui.click.auto();
                                        }
                                        trigger.player.addSkill('ark_cuihua_control2');
                                    },
                                    sub: true,
                                },
                                "control2": {
                                    trigger: {
                                        player: ["phaseAfter", "dieAfter"],
                                        global: "phaseBefore",
                                    },
                                    lastDo: true,
                                    charlotte: true,
                                    forceDie: true,
                                    forced: true,
                                    silent: true,
                                    content: function () {
                                        player.removeSkill('ark_cuihua_control2');
                                    },
                                    onremove: function (player) {
                                        if (player == game.me) {
                                            if (!game.notMe) game.swapPlayerAuto(player._trueMe)
                                            else delete game.notMe;
                                            if (_status.auto) ui.click.auto();
                                        }
                                        delete player._trueMe;
                                    },
                                    sub: true,
                                    popup: false,
                                },
                            },
                        },
                        "ark_huomu": {
                            group: ["ark_huomu_count"],
                            skillAnimation: true,
                            animationColor: "key",
                            juexingji: true,
                            unique: true,
                            trigger: {
                                player: "phaseZhunbeiBegin",
                            },
                            filter: function (event, player) {
                                return !player.storage.ark_huomu && player.storage.ark_huomu_count;
                            },
                            forced: true,
                            content: function () {
                                player.loseMaxHp()
                                player.storage.ark_cuihua = true,
                                    game.log(player, '修改了技能', '#g【催化】')
                                player.awakenSkill(event.name);
                                player.storage[event.name] = true;
                            },
                            subSkill: {
                                count: {
                                    trigger: {
                                        source: "damageSource",
                                    },
                                    silent: true,
                                    filter: function (event, player) {
                                        return _status.currentPhase != player
                                    },
                                    content: function () {
                                        player.storage.ark_huomu_count = true
                                    },
                                    sub: true,
                                    forced: true,
                                    popup: false,
                                },
                            },
                        },
                        "ark_mengxiang": {
                            group: ["ark_mengxiang_die", "ark_mengxiang_die2"],
                            trigger: {
                                player: "enterGame",
                                global: "gameDrawAfter",
                            },
                            forced: true,
                            filter: function () {
                                return true;
                            },
                            content: function () {
                                'step 0'
                                player.chooseTarget(1, true, function (card, player, target) {
                                    if (target == player) return false
                                    return true
                                })
                                'step 1'
                                if (result.targets) {
                                    player.storage.ark_mengxiang = result.targets[0]
                                }
                            },
                            subSkill: {
                                die: {
                                    trigger: {
                                        global: "dieAfter",
                                    },
                                    filter: function (event, player) {
                                        return player.storage.ark_mengxiang == event.player
                                    },
                                    forced: true,
                                    content: function () {
                                        player.loseMaxHp(2)
                                    },
                                    sub: true,
                                },
                                "die2": {
                                    trigger: {
                                        player: "dieBegin",
                                    },
                                    filter: function (event, player) {
                                        return !player.storage.ark_mengxiang.isAlive()
                                    },
                                    forced: true,
                                    content: function () {
                                        'step 0'
                                        trigger.cancel()
                                        if (player.name2 == 'ark_meifeisite') {
                                            player.reinit(player.name2, 'ark_gezhe');
                                        }
                                        if (player.name == 'ark_meifeisite') {
                                            player.reinit(player.name, 'ark_gezhe');
                                        }
                                        if (_status.characterlist) {
                                            _status.characterlist.add('ark_meifeisite');
                                            _status.characterlist.remove('ark_gezhe');
                                        }
                                        'step 1'
                                        player.gainMaxHp(2)
                                        'step 2'
                                        player.recover(player.maxHp - player.hp)
                                        game.lullabye("lullabye")
                                    },
                                    sub: true,
                                },
                            },
                        },
                        "ark_cangyin": {
                            group: ["ark_cangyin_discard", "ark_cangyin_begin", "ark_cangyin_jieshu"],
                            subSkill: {
                                discard: {
                                    trigger: {
                                        player: "phaseDiscardBegin",
                                    },
                                    forced: true,
                                    content: function () {
                                        if (player.countCards('h') > 0) {
                                            player.discard(player.getCards('h'))
                                        }
                                        game.filterPlayer(function (current) {
                                            if (current != player) current.draw()
                                        })
                                    },
                                    sub: true,
                                },
                                begin: {
                                    forced: true,
                                    trigger: {
                                        player: "phaseZhunbeiBegin",
                                    },
                                    content: function () {
                                        game.filterPlayer(function (current) {
                                            if (current.hp < 2) current.recover()
                                        })
                                    },
                                    sub: true,
                                },
                                jieshu: {
                                    forced: true,
                                    trigger: {
                                        player: "phaseJieshuBegin",
                                    },
                                    content: function () {
                                        game.filterPlayer(function (current) {
                                            if (current.hp > 2) current.loseHp()
                                        })
                                    },
                                    sub: true,
                                },
                            },
                        },
                        "ark_hunyin": {
                            trigger: {
                                global: "phaseZhunbeiBegin",
                            },
                            skillAnimation: true,
                            animationColor: "key",
                            juexingji: true,
                            unique: true,
                            forced: true,
                            filter: function (event, player) {
                                var players = game.filterPlayer()
                                var hp = players[0].hp
                                for (var i = 0; i < players.length; i++) {
                                    if (players[i].hp != hp) return false
                                }
                                return true
                            },
                            content: function () {
                                "step 0"
                                event.current = player.next;
                                event.currented = [];
                                "step 1"
                                event.currented.push(event.current);
                                event.current.animate('target');
                                event.current.chooseToUse('魂音：使用一张杀或失去一点体力', function (card) {
                                    if (get.name(card) != 'sha') return false;
                                    return lib.filter.filterCard.apply(this, arguments)
                                }, function (card, player, target) {
                                    if (player == target) return false;
                                    var dist = get.distance(player, target);
                                    if (dist > 1) {
                                        if (game.hasPlayer(function (current) {
                                            return current != player && get.distance(player, current) < dist;
                                        })) {
                                            return false;
                                        }
                                    }
                                    return lib.filter.filterTarget.apply(this, arguments)
                                }).set('ai2', function () {
                                    return get.effect_use.apply(this, arguments) + 0.01;
                                });
                                "step 2"
                                if (result.bool == false) event.current.loseHp();
                                event.current = event.current.next;
                                if (event.current != player && !event.currented.contains(event.current)) {
                                    game.delay(0.5);
                                    event.goto(1);
                                }
                                'step 3'
                                player.die();
                            },
                        },
                        "ark_guaiqiao": {
                            trigger: {
                                global: "phaseBegin",
                            },
                            audio: "ext:赛雷娅卡夫卡:2",
                            direct: true,
                            filter: function (event, player) {
                                if (player == event.player && game.hasPlayer(function (current) {
                                    return player.inRange(current);
                                })) return false;
                                return player.inRange(event.player);
                            },
                            content: function () {
                                'step 0'
                                trigger.player.chooseControl().set('choiceList', [
                                    '跳过摸牌阶段并对' + get.translation(player) + '造成一点伤害',
                                    '跳过出牌阶段和弃牌阶段',
                                ]).set('ai', function () {
                                    if (get.attitude(trigger.player, player) > -1 && trigger.player.countCards('h') >= trigger.player.maxHp) return 0;
                                    return 1;
                                });
                                'step 1'
                                if (result.index == 0) {
                                    player.damage(trigger.player)
                                    trigger.player.skip('phaseDraw')
                                } else {
                                    trigger.player.skip('phaseUse')
                                    trigger.player.skip('phaseDiscard')
                                }
                            },
                        },
                        "ark_jianshou": {
                            audio: "ext:天灾之下/audio:" + [1, 2].randomGet(),
                            group: "ark_jianshou_round",
                            subSkill: {
                                round: {
                                    trigger: {
                                        global: "roundStart",
                                    },
                                    forced: true,
                                    filter: function (event, player) {
                                        return player.maxHp < 6;
                                    },
                                    content: function () {
                                        if (!player.storage.jianshou) player.storage.jianshou = 0;
                                        player.storage.jianshou++;
                                        if (player.storage.jianshou == 2) {
                                            player.gainMaxHp()
                                            player.recover()
                                            player.storage.jianshou = 0;
                                        }
                                    },
                                    sub: true,
                                },
                            },
                            trigger: {
                                player: "damageBegin3",
                            },
                            forced: true,
                            filter: function (event, player) {
                                return event.num > 1;
                            },
                            content: function () {
                                trigger.num = 1;
                            },
                            ai: {
                                presha: true,
                            },
                        },
                        "ark_gaizhi": {
                            audio: "ext:天灾之下/audio:" + [1, 2].randomGet(),
                            group: ["ark_gaizhi_phase", "ark_gaizhi_lianhuan"],
                            subSkill: {
                                lianhuan: {
                                    trigger: {
                                        global: "damageBegin2",
                                    },
                                    direct: true,
                                    filter: function (event, player) {
                                        return player.isTurnedOver() && event.getParent().name == '_lianhuan';
                                    },
                                    content: function () {
                                        trigger.num++
                                    },
                                    sub: true,
                                },
                                phase: {
                                    trigger: {
                                        player: "phaseZhunbeiBegin",
                                    },
                                    frequent: true,
                                    preHidden: true,
                                    content: function () {
                                        'step 0'
                                        player.chooseCardTarget({
                                            filterCard: function (card, player) {
                                                return lib.filter.cardDiscardable(card, player);
                                            },
                                            filterTarget: function (card, player, target) {
                                                return player != target;
                                            },
                                            selectTarget: function () {
                                                return ui.selected.cards.length;
                                            },
                                            selectCard: [1, Infinity],
                                            position: 'he',
                                            ai1: function (card) {
                                                return 10 - get.value(card);
                                            },
                                            ai2: function (target) {
                                                var att = get.attitude(_status.event.player, target);
                                                return -att;
                                            },
                                            prompt: get.prompt('ark_gaizhi'),
                                            prompt2: lib.translate.ark_gaizhi_info
                                        });
                                        'step 1'
                                        if (result.bool) {
                                            var targets = result.targets.sortBySeat();
                                            player.discard(result.cards);
                                            player.link(true);
                                            player.turnOver()
                                            while (targets.length) {
                                                targets.shift().link(true);
                                            }
                                        }
                                    },
                                    sub: true,
                                },
                            },
                            trigger: {
                                source: "damageBegin",
                            },
                            direct: true,
                            filter: function (event, player) {
                                return player.isTurnedOver()
                            },
                            content: function () {
                                trigger.num++
                            },
                        },
                        "ark_heiguan": {
                            audio: "ext:天灾之下/audio:1",
                            trigger: {
                                player: "damageBegin",
                            },
                            filter: function (event, player) {
                                return (event.source != undefined);
                            },
                            check: function (event, player) {
                                return (get.attitude(player, event.source) <= 0);
                            },
                            logTarget: "source",
                            content: function () {
                                "step 0"
                                player.judge(function (card) {
                                    if (get.suit(card) == 'heart') return -2;
                                    return 2;
                                }).judge2 = function (result) {
                                    return result.bool;
                                };
                                "step 1"
                                if (result.judge < 2) {
                                    trigger.num--
                                    event.finish();
                                } else player.chooseCardShow(trigger.source)
                            },
                            ai: {
                                "maixie_defend": true,
                                effect: {
                                    target: function (card, player, target) {
                                        if (player.hasSkillTag('jueqing', false, target)) return [1, -1];
                                        return 0.8;
                                        // if(get.tag(card,'damage')&&get.damageEffect(target,player,player)>0) return [1,0,0,-1.5];
                                    },
                                },
                            },
                        },
                        "ark_buyi": {
                            audio: "ext:天灾之下/audio:1",
                            trigger: {
                                global: "useCardBegin",
                            },
                            zhuSkill: true,
                            filter: function (event, player) {
                                var num = 0, players = game.filterPlayer()
                                for (var i = 0; i < players.length; i++) {
                                    if (get.distance(event, players[i]) <= 1) num++;
                                }
                                return _status.currentPhase == player && event.card.name == 'shan' && event.player != player && num >= 2 && player.hasZhuSkill('ark_buyi');
                            },
                            check: function (event, player) {
                                return (get.attitude(player, event.player) <= 0);
                            },
                            content: function () {
                                trigger.cancel()
                            },
                        },
                        "ark_kuangre": {
                            audio: "ext:天灾之下/audio:" + [1, 2].randomGet(),
                            trigger: {
                                player: "useCardAfter",
                            },
                            init: function (player) {
                                player.storage.ark_kaungre = [0, 0, 0];
                                player.unmarkSkill('ark_kuangre');
                            },
                            intro: {
                                content: function (storage, player) {
                                    return '造成伤害时，改为火焰伤害';
                                },
                            },
                            filter: function (event, player) {
                                if (player.hasSkill('ark_kuangre_lm')) return false;
                                if (player != _status.currentPhase) return false;
                                if (!event.isPhaseUsing()) return false;
                                if (event.card && event.card.name == 'sha') return true;
                                return false;
                            },
                            content: function () {
                                'step 0'
                                var num = Math.abs(player.storage.ark_kaungre[0] - player.countCards('h'));
                                if (num > 0) player.draw(num);
                                player.storage.ark_kaungre[0] = 0;
                                'step 1'
                                player.storage.ark_kaungre[1]++;
                                player.storage.ark_kaungre[2]++;
                                player.markSkill('ark_kuangre');
                                player.addTempSkill('ark_kuangre_lm', 'phaseUseEnd');
                            },
                            mod: {
                                cardUsable: function (card, player, num) {
                                    if (card.name == 'sha') {
                                        return num + player.storage.ark_kaungre[1];
                                    }
                                },
                            },
                            group: ["ark_kuangre_use", "ark_kuangre_dam", "ark_kuangre_remove"],
                            subSkill: {
                                lm: {
                                    sub: true,
                                },
                                use: {
                                    trigger: {
                                        player: "useCard2",
                                    },
                                    silent: true,
                                    forced: true,
                                    filter: function (event, player) {
                                        if (player.hasSkill('ark_kuangre_lm')) return false;
                                        if (player != _status.currentPhase) return false;
                                        if (event.card && event.card.name == 'sha') return true;
                                        return false;
                                    },
                                    content: function () {
                                        'step 0'
                                        player.storage.ark_kaungre[0] = player.countCards('h');
                                        player.syncStorage('ark_kuangre');
                                        'step 1'
                                        game.delay();
                                    },
                                    sub: true,
                                    popup: false,
                                },
                                dam: {
                                    trigger: {
                                        source: "damageBefore",
                                    },
                                    forced: true,
                                    filter: function (event, player) {
                                        if (player.storage.ark_kaungre[2] == 0) return false;
                                        if (event.nature && event.nature == 'fire') return false;
                                        return true;
                                    },
                                    content: function () {
                                        trigger.nature = 'fire';
                                    },
                                    sub: true,
                                },
                                remove: {
                                    trigger: {
                                        player: "phaseUseEnd",
                                    },
                                    forced: true,
                                    silent: true,
                                    filter: function (event, player) {
                                        if (player.storage.ark_kaungre[1] != 0) return true;
                                        if (player.storage.ark_kaungre[2] != 0) return true;
                                        return false;
                                    },
                                    content: function () {
                                        player.storage.ark_kaungre[1] = 0;
                                        player.storage.ark_kaungre[2] = 0;
                                        player.unmarkSkill('ark_kuangre');
                                    },
                                    sub: true,
                                    popup: false,
                                },
                            },
                        },
                        "ark_zhuodi": {
                            audio: "ext:天灾之下/audio:" + [1, 2, 3, 4].randomGet(),
                            trigger: {
                                player: "useCard",
                            },
                            init: function (player) {
                                player.storage.ark_zhuodi = 0;
                                player.unmarkSkill('ark_zhuodi');
                            },
                            filter: function (event, player) {
                                if (player.getHandcardLimit() <= 0) return false;
                                if (event.card && event.card.name == 'sha') return true;
                                return false;
                            },
                            content: function () {
                                'step 0'
                                player.chooseBool('你本回合手牌上限-1，然后此【杀】不可响应？');
                                'step 1'
                                if (result.bool) {
                                    player.storage.ark_zhuodi++;
                                    player.syncStorage('ark_zhuodi');
                                    if (trigger.targets.length) trigger.directHit.addArray(trigger.targets);
                                } else event.finish();
                                'step 2'
                                event.trigger('ark_zhuodi2');
                            },
                            mod: {
                                maxHandcard: function (player, num) {
                                    return num - player.storage.ark_zhuodi;
                                },
                            },
                            group: ["ark_zhuodi_end", "ark_zhuodi_b", "ark_zhuodi_c"],
                            subSkill: {
                                sha: {
                                    trigger: {
                                        source: "damageBegin",
                                    },
                                    forced: true,
                                    filter: function (event, player) {
                                        if (event.card && event.card.name == 'sha') return true;
                                        return false;
                                    },
                                    content: function () {
                                        trigger.num++;
                                    },
                                    sub: true,
                                },
                                b: {
                                    trigger: {
                                        player: "ark_zhuodi2",
                                    },
                                    frequent: true,
                                    filter: function (event, player) {
                                        if (player.getHandcardLimit() >= 2) return true;
                                        return false;
                                    },
                                    silent: true,
                                    content: function () {
                                        'step 0'
                                        player.chooseBool('你本回合手牌上限-2，然后此【杀】造成的伤害+1？');
                                        'step 1'
                                        if (result.bool) {
                                            player.storage.ark_zhuodi += 2;
                                            player.syncStorage('ark_zhuodi');
                                            player.addTempSkill('ark_zhuodi_sha', 'shaAfter');
                                        } else event.finish();
                                        'step 2'
                                        event.trigger('ark_zhuodi3');
                                    },
                                    sub: true,
                                    forced: true,
                                    popup: false,
                                },
                                c: {
                                    trigger: {
                                        player: "ark_zhuodi3",
                                    },
                                    frequent: true,
                                    silent: true,
                                    filter: function (event, player) {
                                        if (player.countCards('he') >= 2) return true;
                                        return false;
                                    },
                                    content: function () {
                                        'step 0'
                                        player.chooseBool('是否弃两张牌，然后获得对应效果?');
                                        'step 1'
                                        if (result.bool) {
                                            player.chooseToDiscard('he', 2, true);
                                            player.addTempSkill('ark_zhuodi_dam', 'shaAfter');
                                        }
                                    },
                                    sub: true,
                                    forced: true,
                                    popup: false,
                                },
                                end: {
                                    trigger: {
                                        player: "phaseJieshuEnd",
                                    },
                                    forced: true,
                                    silent: true,
                                    filter: function (event, player) {
                                        return player.storage.ark_zhuodi != 0;
                                    },
                                    content: function () {
                                        player.storage.ark_zhuodi = 0;
                                    },
                                    sub: true,
                                    popup: false,
                                },
                                dam: {
                                    trigger: {
                                        source: "damageEnd",
                                    },
                                    filter: function (event, player) {
                                        if (event.card && event.card.name == 'sha') return game.hasPlayer(function (target) {
                                            return target == event.player.next || target == event.player.previous;
                                        });
                                        return false;
                                    },
                                    content: function () {
                                        'step 0'
                                        event.player2 = trigger.player;
                                        player.chooseTarget('选择' + get.translation(trigger.player) + '的上家或下家，对其造成一点伤害', function (card, player, target) {
                                            return target == event.player2.next || target == event.player2.previous;
                                        });
                                        'step 1'
                                        if (result.bool && result.targets.length) {
                                            event.target = result.targets[0];
                                            player.line(event.target);
                                            event.target.damage(player);
                                        }
                                    },
                                    prompt: "对【杀】目标的上家或下家造成一点伤害",
                                    sub: true,
                                },
                            },
                        },
                    },
                    translate: {
						"ark_miwang": "迷惘",
                        "ark_miwang_info": "准备阶段，你可弃置两张牌，然后摸＜1＞张牌。出牌阶段开始时，你可失去1点体力上限，再次发动此技能。",
						"ark_hunhui": "昏晖",
                        "ark_hunhui_info": "觉醒技，当你处于濒死状态时，你将体力值回复至7点，然后将技能中＜＞内的数值改为X（X为你体力值），你于每个结束阶段失去『1』点体力上限，然后令『 』里的数值+1。",
						"ark_huanghun": "黄昏",
                        "ark_huanghun_info": "出牌阶段，你可弃置＜2＞张红色牌，然后令至多三名角色依次打出两张【闪】，否则你对其造成1点伤害。当你依此法造成伤害时，你可失去1点体力，改为造成＜1＞点火焰伤害。",
                        "ark_yeshuang": "夜霜",
                        "ark_yeshuang_info": "出牌阶段开始时，你可明置一张【杀】，然后本阶段你不可使用伤害类牌。一名其他角色的回合结束时，你可暗置一张【杀】，视为对其使用之。若未造成伤害，则你可明置【杀】除外的其余手牌，视为对其使用一张无视防具且不可响应的【杀】。",
                        "ark_canxin": "残心",
                        "ark_canxin_info": "锁定技，造成伤害时，若你有明置牌，暗置之。受到伤害后，你可弃置所有手牌，然后你不计入距离和座次计算，不能使用牌且不能成为任何牌的目标直至你的回合开始。",
                        "ark_yanxin": "焰心",
                        "ark_yanxin_info": "当你成为【杀】的目标时，若此【杀】为实体牌，你可将一张与之颜色相同的牌当【闪】使用;若不为实体牌，则你摸一张牌， 然后取消此【杀】所有目标，然后直到你的下回合开始前，你不可再发动此技能。",
                        "ark_xingwei": "星尾",
                        "ark_xingwei_info": "锁定技，当你使用一张基本牌结算完成后，摸一张牌。若此时你的手牌数为全场最少，摸两张。",
                        "ark_hongfa": "红发",
                        "ark_hongfa_info": "主公技，当你于回合外获得牌时，你可将之交给一名与你势力相同的其他角色。。",
                        "ark_xingjun": "行军",
                        "ark_xingjun_info": "锁定技，你受到的非属性伤害-1。你使用的♠️牌无法被响应。",
                        "ark_xuemai": "血脉",
                        "ark_xuemai_info": "觉醒技，当你进入濒死状态时，失去技能“行军”并将体力回复至3。你获得技能“毁灭”。",
                        "ark_huimie": "毁灭",
                        "ark_huimie_info": "准备阶段，你可对一名角色造成1点伤害。其他角色对你造成伤害时，你可进行一次判定，若为黑色，你弃置其1张牌。",
                        "ark_yaogun": "摇滚",
                        "ark_yaogun_info": "转化技，锁定技，出牌阶段开始时，你:  阳:摸四张牌，弃置所有基本牌。本回合你所有锦囊牌无距离限制。  阴:摸两张牌，弃置所有锦囊牌。本回合你出【杀】的次数加x ( x为你弃置的锦囊牌数量)。",
                        "ark_fuhuo": "复活",
                        "ark_fuhuo_info": "觉醒技，当你进入濒死状态时，你亮出牌堆顶的六张牌。其中每有一张基本牌则你回复1点体力，每有一张锦囊牌则你增加1点体力上限。",
                        "ark_junlin": "君临",
                        "ark_junlin_info": "弃牌阶段开始时，若你于本回合的锁定技，你始终跳过弃牌阶段。",
                        "ark_huhua": "弧花",
                        "ark_huhua_info": "限定技，一名角色的回合开始时，若其曾因“寸梦”弃置过你的手牌，你可令其展示所有手牌，然后将其中所有你没有的牌按牌名各视为一张不可响应的【杀】对其使用。若其因此进入濒死状态，你结束此技能，然后依次弃置所有牌直至你一无所有。",
                        "ark_cunmeng": "寸梦",
                        "ark_cunmeng_info": "你的每个阶段开始时，你可以弃置一张牌。 结束阶段，你获得等量的牌并摸三张牌。然后其他角色可依次选择是否弃置你一张手牌。",
                        "ark_bairen": "佰仞",
                        "ark_bairen_info": "当你使用/打出基本牌后，可判定，若为装备牌则获得之。你的装备牌不计入手牌上限，且你可将之当【杀】使用。",
                        "ark_xunmi": "尋蜜",
                        "ark_xunmi_info": "锁定技，当一名角色进入你攻击范围时，你获得其一张牌，若此时你有能吃的牌，你使用之，然后其选择一项：①获得你一张牌；②摸两张牌然后令你横置。",
                        "ark_shunfeng": "顺风",
                        "ark_shunfeng_info": "当你指定/成为【杀】 的目标后，你可将干员牌重置/横置，令此【杀】不可被响应/取消你为目标。",
                        "ark_yuyan": "羽滟",
                        "ark_yuyan_info": "当你的干员牌横置/重置时，你可以摸一张牌，若为即时牌，则你于出牌阶段的出【杀】数+1 直到你的下个回合结束。",
                        "ark_yixiang": "臆想",
                        "ark_yixiang_info": "锁定技，当其他角色获得/弃置你的牌时，改为摸一张牌/将牌堆顶一-张牌置 于弃牌堆。当你的判定牌生效前，你可亮出牌堆底- -张牌， 若与判定结果颜色不同，则你声明一一种花色作为判定结果。",
                        "ark_jinghua": "镜花",
                        "ark_jinghua_info": "当你受到伤害时，可进行一次判定，若为♠️，防止此伤害，然后你可令一名角色失去1点体力: , ♥️，摸X张牌(X为伤害来源的手牌数) ;其他，你获得之。",
                        "ark_yuelang": "跃浪",
                        "ark_yuelang_info": "每回合限一次，你使用点数为轮次数倍数且仅指定唯一目标的牌时，可选择至多X项:①造成伤害加一;②无法被响应;③不计入本回合使用次数。若本轮为首轮，则改为“限两次”(X为4-当前轮次数， 且至少为1）",
                        "ark_chaoyong": "潮涌",
                        "ark_chaoyong_info": "结束阶段，若你本回合未发动过“跃浪”，则你可以移除其中一个选项，然后增加1点体力上限并回复1点体力，当你以此法移除最后一个选项后，本局你的【杀】伤害基数+1。",
                        viewHandcard: "明置手牌",
                        "viewHandcard_info": "",
                        "ark_shuiyue": "水月",
                        "ark_yixiang": "臆想",
                        "ark_yixiang_info": "锁定技，当其他角色获得/弃置你的牌时，改为摸一张牌/将牌堆顶一张牌置于弃牌堆。当你的判定牌生效前，你可亮出牌堆底一张牌，若与判定结果颜色不同，则你声明一种花色作为判定结果。",
                        "ark_jinghua": "镜花",
                        "ark_jinghua_info": "当你受到伤害时，可进行一次判定，若为♠︎，防止此伤害，然后你可令一名角色失去1点体力；♥︎摸X张牌（X为伤害来源的手牌数）；其他，你获得之",

                        "ark_duanzuizhe": "断罪者",
                        "ark_duanzui": "断罪",
                        "ark_duanzui_info": "锁定技，当你使用【杀】造成伤害时，有1/2的概率令该伤害翻倍且接下来有1/4的概率令该伤害变为4倍。",
                        "ark_xuanyu": "绚羽",
                        "ark_xuanyu_info": "限定技，出牌阶段，你可以令本回合你的红色锦囊可以当做不计入使用次数的【杀】使用，然后本回合内你触发“断罪”时，有1/2的概率将伤害转移至目标角色的上家或下家。",

                        "ark_hong": "红",
                        "ark_cigu": "刺骨",
                        "ark_cigu_info": "当你成为【杀】的目标后，你可对其使用一张【杀】并优先结算，若造成伤害，则令其使用的那张【杀】无效。",
                        "ark_bingzhu": "秉烛",
                        "ark_bingzhu_info": "一名角色的弃牌阶段，若其弃置的牌中有【闪】，则你可获得之并展示其一张手牌，若为：【杀】，你将之对其使用；【闪】，你弃置之，然后你可对其使用一张【杀】。",

                        "ark_fushide": "浮士德",
                        "ark_hanmang": "寒芒",
                        "ark_hanmang_info": "转换技，出牌阶段限一次，你使用【杀】时，你可①于结算后收回此【杀】；②附魔；③清空目标装备区，若无防具因此进入弃牌堆，则令其弃置所有手牌，此【杀】伤害+1；④目标进行濒死结算。",
                        "ark_moyu": "默语",
                        "ark_moyu_info": "锁定技，出牌阶段结束时，若你使用过【杀】，则你重铸所有伤害类牌。",
                        //------------------------------------------
						"ark_shierteer": "史尔特尔",
                        "ark_baijin": "白金",
                        "ark_yanwei": "焰尾",
                        "ark_aiguozhe": "爱国者",
                        "ark_dadi": "大帝",
                        "ark_chengshan": "澄闪",
                        "ark_keebo": "刻俄柏",
                        "ark_huihou": "灰喉",
                        "ark_shuiyue": "水月",
                        "ark_sikadi_blue": "斯卡蒂",
                        "ark_kafuka": "卡夫卡",
                        "ark_sikadi": "斯卡蒂",
                        "ark_shanling": "闪灵",
                        "ark_tuola": "拓拉",
                        "ark_linglan": "铃兰",
                        "ark_jici": "棘刺",
                        "ark_ling": "令",
                        "ark_helage": "赫拉格",
                        "ark_linyuxia": "林雨霞",
                        "ark_jiurishenhaise": "深海色",
                        "ark_shuangxing": "霜星",

                        "ark_nengtianshi": "能天使",
                        "ark_zongxia": "总辖",
                        "ark_Amy": "阿米娅",
                        "ark_weiyanwu": "魏彦吾",
                        "ark_wenyue": "文月",
                        "ark_teleixisi": "特雷西斯",
                        "ark_teleixiya": "特蕾西娅",
                        "ark_meifeisite": "梅菲斯特",
                        "ark_gezhe": "歌者",
                        "ark_lindong": "凛冬",
                        "ark_sly": "塞雷娅",
                        "ark_yifulite": "伊芙利特",

                        "ark_guixi": "诡戏",
                        "ark_guixi_info": "当一名角色跳过某一阶段时，你可令一名角色执行一个额外的对应阶段；当一名角色从背面翻回正面时，你可令一名角色执行一个额外回合。",
                        "ark_shutu": "殊途",
                        "ark_shutu_info": "锁定技，游戏开始时或你的回合开始时，你和你攻击范围内没有“嗣”的角色获得“嗣”。",
                        "ark_wuguang": "無光",
                        "ark_wuguang_info": "出牌阶段限一次，你可以移去任意名角色的“嗣”，并选择一项：①令这些角色各回复1点体力；②摸一张牌。",
                        "ark_chaoku": "潮枯",
                        "ark_chaoku_info": "限定技，出牌阶段，你可以移去场上所有“嗣”并选择一名其他角色，该角色失去1点体力并弃置等量的牌。",
                        "ark_shutu2": "嗣",
                        "ark_shutu2_info": "手牌上限＋1；每回合第一次受到或造成伤害时可以判定，若为红色，受到的伤害﹣1,若为黑色，造成的伤害＋1。",
                        "ark_shezui": "赦罪",
                        "ark_shezui_info": "当一名其他角色于其回合内第二次使用即时牌后，你可展示其两张手牌，若其中有【杀】，则你获得之；若没有，你令其回复1点体力。",
                        "ark_chenhun": "晨昏",
                        "ark_chenhun_info": "出牌阶段，你可弃置四张【杀】，然后对一名角色造成3点伤害。若颜色相同，则改为造成X点伤害(X为目标角色体力上限)。",
                        "ark_xianyue": "弦月",
                        "ark_xianyue_info": "锁定技，你造成伤害时回复1点体力。当你的体力不以此法回复时，防止之。",
                        "ark_gangyi": "刚毅",
                        "ark_gangyi_info": "锁定技，出牌阶段，你可额外使用X张【杀】（X为你已损体力值）。你进入濒死状态时摸四张牌，并开始一个独立的出牌阶段。",
                        "ark_tashijiangjun": "他是将军！",
                        "ark_tashijiangjun_info": "",
                        "ark_jiuri": "旧日",
                        "ark_jiuri_info": "锁定技，你只有出牌阶段。出牌阶段结束后，你从牌堆底摸牌至手牌中的花色数为4。若你以此法一次性获得超过7张牌，你结束此技能并失去1点体力。",
                        "ark_miying": "密影",
                        "ark_miying_info": "其他角色的结束阶段，若其本回合造成过2点或更多伤害，你可以将一张手牌置于牌堆顶，然后令其失去1点体力。",
                        "ark_huiwei": "灰尾",
                        "ark_huiwei_info": "锁定技，当两张黑色牌被连续使用或打出时，你从牌堆底摸一张牌；若此时你的手牌数大于3，则将一张手牌置于牌堆顶。",
                        "diy_tiantu改": "天途",
                        "diy_tiantu改_compare": "天途",
                        "diy_tiantu改_compareBegin": "天途",
                        "diy_tiantu改_compareBegin_info": "你可以用中央区的♦牌进行拼点",
                        "diy_tiantu改_info": "其他角色的准备阶段，你可与其拼点：若你赢，你摸一张牌，令其跳过摸牌阶段<font color=red>或弃牌阶段</font>，然后你的手牌上限-1；若你没赢，则你令其摸一张牌，然后你的手牌上限+1，本轮此技能<font color=red>不再</font>失效。",
                        "diy_tiantu": "天途",
                        "diy_tiantu_info": "其他角色的准备阶段，你可与其拼点：若你赢，你摸一张牌，令其跳过摸牌阶段<font color=red>或弃牌阶段</font>，然后你的手牌上限-1；若你没赢，则你摸两张牌，然后你的手牌上限+1，本轮此技能<font color=red>不再</font>失效。",
                        "diy_tiantu2": "天途",
                        //"diy_tiantu2_info": "",
                        "diy_tiantu4": "天途",
                        //"diy_tiantu4_info": "",
                        "diy_tiantu3": "天途",
                        //"diy_tiantu3_info": "",
                        "diy_zhuyan": "逐魇",
                        "diy_zhuyan_info": "觉醒技，准备阶段，若你的手牌上限为0，为“天途”添加<font color=red>红色</font>内容，并将“你摸两张牌”改为“则你令其摸一张牌”，然后你获得“可汗”。",
                        "diy_kehan当你拼点后": "可汗",
                        "diy_kehan当你拼点后_info": "当你拼点后，你可与拼点对象各摸一张",
                        "diy_kehan": "可汗",
                        "diy_kehan_info": "锁定技，你的手牌上限至少等于你的体力上限。当一张【桃】被使用时，你可弃置一张红色手牌或失去1点体力，然后此牌回复效果-1。当你拼点后，你可与拼点对象各摸一张",
                        "diy_gongchou": "觥筹",
                        "diy_gongchou_info": "出牌阶段限一次,你可以将武将牌翻面,视为使用一张【酒】,若如此做,本回合你使用牌无次数和距离限制。",
                        "diy_gongchou2": "觥筹",
                        "diy_gongchou2_info": "",
                        "diy_hanmeng": "酣梦",
                        "diy_hanmeng_info": "锁定技，当你的干员牌背面朝上时，你每使用两张手牌即重铸其余手牌。",
                        "ark_youyin": "游吟",
                        "ark_youyin_info": "锁定技，一名角色的回合内限两次，每有两张花色相同的牌进入弃牌堆时,若你的干员牌此时正面朝上，你摸一张牌。",
                        "ark_wuyue": "舞乐",
                        "ark_wuyue_info": "出牌阶段，你可以弃置一张红色牌，然后以你为起点，每名角色依次摸一张牌，然后再顺时针依次弃置一张手牌。",
                        jcyuci: "驭刺",
                        "jcyuci_info": "锁定技，你受到有来源的伤害后，你进行判定，若结果为黑色，则伤害来源失去1点体力。",
                        jcgutu: "故土",
                        "jcgutu_info": "准备阶段，若你的判定区有牌，你可以将手牌弃至1张，然后弃置判定区里的牌。当你第二次发动此技能时，你获得技能“潮声”。",
                        jcchaosheng: "潮声",
                        "jcchaosheng_info": "当你于出牌阶段使用一张牌时，若其花色不是本回合第三次及以上出现，你可以重置出牌次数并摸一张牌。",
                        "ark_jiuwei": "九尾",
                        "ark_jiuwei_info": "游戏开始时，你将牌堆顶的九张牌扣置于你的干员牌上，称为“尾”，然后你可以用任意张手牌替换等量的“尾”；摸牌阶段结束时／受到伤害后，你可以用任意张手牌替换等量的“尾”。当你进入濒死状态时，你可以移去四张“尾”，然后回复体力至1点。",
                        "ark_binghuan": "冰环",
                        "ark_binghuan_info": "限定技，出牌阶段，若你的体力上限不小于3，你可以弃置所有手牌并翻面，然后视为依次使用了两张【源石技艺】。",
                        "ark_candong": "残冬",
                        "ark_candong_info": "锁定技，你的回合结束时，你失去1点体力。当你进入濒死状态时，你增加1点体力上限并回复体力至上限。当你的体力上限大于4时，你死亡。",
                        "ark_jihan": "极寒",
                        "ark_jihan_info": "当你需要使用或打出一张【杀】时，你可以失去<0>点体力，视为使用或打出了一张冰【杀】。此技能每发动2次，<>内的数字+1",
                        "ark_saoshe": "扫射",
                        "ark_saoshe_info": "出牌阶段限一次，你可以：阳：从牌堆中获得一张武器牌，本回合你可将黑色手牌当无距离限制的【杀】使用。阴：亮出牌堆顶的三张牌，然后获得其中的锦囊牌，本回合你可将锦囊牌当火【杀】使用。",
                        "ark_danyu": "弹雨",
                        "ark_danyu_info": "锁定技，你使用杀无次数限制，你使用【杀】对有防具的角色造成的伤害-1。",
                        "ark_tianping2": "天秤",
                        "ark_tianping2_info": "",
                        "ark_tianping": "天秤",
                        "ark_tianping_info": " 主公技，与你同势力的一名其他角色摸牌阶段结束时，其可以选择将两张手牌交给你，然后其回复1点体力。",
                        "ark_qiji": "奇迹",
                        "ark_qiji_info": "锁定技，你每受到2点伤害，即回复1点体力。",
                        "ark_laiyin": "莱茵",
                        "ark_laiyin_info": "摸牌阶段，你可以改为令至多两名其他角色各回复x点体力（x为其体力上限的一半且不大于4），然后获得一枚“生命”，拥有“生命”的角色受到的治疗效果与属性伤害+1。",
                        "ark_lingxiu": "领袖",
                        "ark_lingxiu_info": "主公技，锁定技，摸牌阶段，你多摸x张牌，然后交给x名角色各一张牌（x为与你势力相同的角色数）。",
                        "ark_zhanhou": "战吼",
                        "ark_zhanhou_info": "出牌阶段限一次，你可以弃置一张牌并失去一点体力，视为使用了一张【南蛮入侵】。",
                        "ark_haoling": "号令",
                        "ark_haoling_info": "结束阶段，你可以获得所有已受伤的其他角色各一张手牌，然后依次交给这些角色各一张牌。",
                        "ark_Amybenye": "奔夜",
                        "ark_Amybenye_info": "锁定技，你使用的【杀】无视防具；当你使用杀造成伤害/被闪避后，你可以摸一张牌/视为对其使用一张【杀】并使本回合内不可再使用【奔夜】。",
                        "ark_biaofeng": "飙风",
                        "ark_biaofeng_info": "锁定技，你的坐骑牌的效果为5倍。",
                        "ark_qiaobian": "巧变",
                        "ark_qiaobian_info": "弃牌阶段开始时，若你的手牌数小于手牌上限，你可以将一张基本牌当做任意普通锦囊使用。",
                        "ark_tongxin": "同心",
                        "ark_tongxin_info": "摸牌阶段开始时，你可以放弃摸牌，若如此做，直到你的下个回合开始，所有其他角色在摸牌阶段少摸一张牌。",
                        "ark_yuxiao": "御霄",
                        "ark_yuxiao_info": "锁定技，你无法装备武器牌。你使用的【杀】无距离限制且无视防具。当你使用【杀】指定了有防具的目标时，你废除其防具栏并令此【杀】造成的伤害+1。",
                        "ark_baihe": "捭阖",
                        "ark_baihe_info": "当一名其他角色使用一张普通锦囊时，你可以交给其一张手牌，若如此做，这张锦囊牌视为由你使用。",
                        "tlxs_duoshi": "夺势",
                        "tlxs_duoshi_info": "当你成为一张伤害类即时牌的目标后，你可选择一名与你距离为1的角色，交给其一张手牌并 令其替你进行响应。若你在结算完成后体力值减少，则获得其两张牌。否则你明置其一张手牌。",
                        "tlxs_quanji": "权计",
                        "tlxs_quanji_info": "你可于一个合理的时机将一名角色的一张明置手牌暗置，然后视为使用/打出一张同名牌。",
                        "huangnv2": "皇女",
                        "huangnv2_info": "主公技，限定技，出牌阶段，你可以选择任意名同势力角色，此后你们可以在需要时使用或打出彼此的明置手牌。",
                        huangnv: "皇女",
                        "huangnv_info": "",
                        huairen: "怀仁",
                        "huairen_info": "你可以跳过摸牌阶段并令至多三名角色各摸一张牌， 然后其可以依次交给你一张牌， 或令你明置其一张牌。",
                        "tlxy_xingdeng": "星灯",
                        "tlxy_xingdeng_info": "锁定技，一名角色的回合结束时，若你的明置手牌数不为1,则你将手牌调整至三张并暗置，然后明置一张手牌。",
                        "ark_cuihua": "催化",
                        "ark_cuihua_info": "每回合限一次，体力值不小于你的角色使用牌对你生效后，你可将此牌对一名体力值小于你的角色使用。",
                        "ark_huomu": "活牧",
                        "ark_huomu_info": "觉醒技，若你回合外造成过伤害，回合开始时，你减少1点体力上限且删除“催化”的“每回合限一次”，然后增加“你可将黑桃♠手牌当【桃】使用。当你令一名角色脱离濒死状态后，你可观看其手牌，若其中有♠黑桃牌，你获得之；否则其下回合开始时，你操控其一回合。”",
                        "ark_mengxiang": "梦乡",
                        "ark_mengxiang_info": "锁定技，游戏开始时，你选择一名其它角色。若其先于你死亡，则你的体力上限-2，你死亡时将武将牌替换为歌者。",
                        "ark_cangyin": "苍吟",
                        "ark_cangyin_info": "锁定技，弃牌阶段，你改为弃置全部手牌，然后令所有其他角色各摸一张牌。准备阶段，所有体力值＜2的角色回复一点体力。结束阶段，所有体力值＞2的角色失去一点体力。",
                        "ark_hunyin": "魂音",
                        "ark_hunyin_info": "觉醒技，任意一名角色的准备阶段，若全场所有角色的体力值相等，你“乱武”，然后死亡。",
                        "ark_guaiqiao": "乖巧",
                        "ark_guaiqiao_info": "每回合限一次，你攻击范围内的其他角色回合开始时，其可选择跳过摸牌阶段对你造成1点伤害，或跳过出牌阶段与弃牌阶段。若你的攻击范围内没有其他角色，则你可执行。",
                        "ark_jianshou": "坚守",
                        "ark_jianshou_info": "锁定技，当你受到大于1点的伤害时，你将伤害值改为1点。每经过两轮，你增加1点体力上限并回复1点体力，直至你的体力上限不小于6。",
                        "ark_gaizhi": "钙质",
                        "ark_gaizhi_info": "准备阶段，你可弃置X张手牌并翻面，然后令X名角色与你横置。当你的干员牌背面朝上时，所有角色受到的传导伤害/你造成的伤害+1。翻回正面时，你可对一名角色造成1点伤害。",
                        "ark_heiguan": "黑冠",
                        "ark_heiguan_info": "你受到伤害时可进行一次判定，若结果为红桃，此伤害-1，否则你明置伤害来源1张手牌。",
                        "ark_buyi": "不义",
                        "ark_buyi_info": "主公技，当其他角色于你的回合内使用【闪】时，若其在至少两名罗势力角色的攻击范围内，你可令此牌无效。",
                        "ark_kuangre": "狂热",
                        "ark_kuangre_info": "出牌阶段限一次，当你使用的【杀】结算完毕后，你可以摸等同于此【杀】使用前后你的手牌数变动数的牌，然后令此杀不计入使用次数，且本回合你造成伤害时，将其改为火焰伤害。",
                        "ark_zhuodi": "灼地",
                        "ark_zhuodi_info": "当你使用【杀】时，你可以依次发动以下选项直至不满足触发条件：1.你本回合手牌上限-1，令此【杀】不可响应；2，你本回合手牌上限-2，令此【杀】造成的伤害+1；3.你弃置两张牌，令此【杀】造成伤害后，你可以对此【杀】目标的上家或下家造成一点伤害。",

                    }
                }

                for (var i in tianzaizhixia.character) {
                    tianzaizhixia.character[i][4].push('ext:天灾之下/image/character/' + i + '.jpg')
                }
                return tianzaizhixia;
            });
            lib.config.all.characters.push('tianzaizhixia');
            lib.translate['tianzaizhixia_character_config'] = '天灾之下';
        }
},help:{},config:{"ark_xian0":{"name":"—·—·—·—·—·—·—·","clear":true},"ark_kzjs1":{"name":"<b><li>【扩展介绍】</b>","clear":true},"ark_kzjs2":{"name":"<li><font color=silver>[点击查看详细内容]</font>","init":"1","intro":"点我查看详细内容","item":{"1":" ","2":"<b><font color=cyan>扩展介绍</font>>>>","3":"<li>本扩展武将卡牌为明日方舟二创，技能均为原创</font>","4":"<li>本扩展代码编写者为：无名杀—正弦、俺杀、无冕黎明、苍穹单推人、Argon、小哥</font>","5":"<li>现共实装34+1个干员</font>"}},"ark_xian1":{"name":"—·—·—·—·—·—·—·","clear":true},"ark_kzgx1":{"name":"<b><li>更新内容</b>","clear":true},"ark_kzgx2":{"name":"<li><font color=silver>[点击查看详细内容]</font>","init":"1","intro":"点我查看详细内容","item":{"1":" ","2":"<b><font color=cyan>更新内容1.23.7</font>>>>","4":"<li>干员实装：实装白金、爱国者、灰喉、刻俄柏、澄闪、大帝、水月、蓝蒂蒂","5":"<li>干员调整：现在已经有部分罗德岛干员语音实装","6":"<li>修复已知bug：修复了深海色【旧日】的判定检索，浊心斯卡蒂【殊途】现在会根据你移去的标记数摸等量的牌了（其实反而多了一张）。","7":"<li>背景音乐：暂无","8":"<li>移除干员：特雷西斯"}},"ark_xian3":{"name":"—·—·—·—·—·—·—·","clear":true},"ark_group":{"name":"<b><li>扩展交流群</b>","clear":true},"ark_group2":{"name":"<li><font color=silver>[点击查看详细内容]</font>","init":"1","intro":"点我查看详细内容","item":{"1":" ","2":"<li>交流群：627208835（方舟：天灾之下）</font>"}},"disEnableCharacter":{"name":"禁选其他扩展武将","intro":"开启后，将禁止AI选择其他扩展武将，关闭后恢复正常。","init":false}},package:{
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
    intro:"",
    author:"无冕黎明",
    diskURL:"",
    forumURL:"627208835",
    version:"1.23.7",
},files:{"character":[],"card":[],"skill":[]}}})