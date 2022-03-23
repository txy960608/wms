game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"无名方舟",content:function(config,pack){
    //更新补偿与单次调整//
    if((!lib.config.arknights_gengxin)||lib.config.arknights_gengxin<1650){
        alert('无名方舟1.65.0更新礼包：1000龙门币')
        game.saveConfig('arknights_gengxin',1650)
        game.saveConfig('ark_lmb',lib.config.ark_lmb+1000)
    }
    var url=lib.assetURL+'extension/无名方舟/arkUI/';
    lib.init.css(url,'ext');
    if(!lib.config.arknightspro){
        alert('从此版本起，无名方舟删除“精英化”')
        var num=0
        var data=lib.config.ark_characterdata
        for(var i in data){
            if(data[i].pro>=2) num+=1200
            if(data[i].pro>=1) num+=400
            var have=data[i].have
            var star=data[i].star
            var mpro=data[i].mpro
            data[i]=new Object
            data[i].star=star
            data[i].have=have
            data[i].mpro=mpro
        }
        game.saveConfig('ark_characterdata',lib.config.ark_characterdata)
        game.saveConfig('ark_lmb',lib.config.ark_lmb+num)
        alert('根据精英化数量，补偿'+num+'龙门币')
        game.saveConfig('arknightspro',true)
    }
    (function (){
    	var num=setInterval(()=>{
    		if(Object.keys(lib.extensionPack).contains("方舟杀")){
    			if(document.querySelector(".menu-tab")&&document.querySelector(".menu-tab").childNodes){
    				var list=document.querySelector(".menu-tab").childNodes;
    				for(var i=0;i<list.length;i++){ 
    					if(list[i].innerHTML=='扩展'){ 
    						var list2=list[i]._link.childNodes; 
    						for(var j=0;j<list2.length;j++){ 
    							if(list2[j].classList.contains('left')){
    								var list3=list2[j].childNodes; 
    								for(var z=0;z<list3.length;z++){ 
    									if(list3[z].innerHTML=='方舟杀'){   
    										var page=list3[z];
										var start=page.parentNode.previousSibling;
										page.remove();
										if(start){
											for(var i=0;i<start.childElementCount;i++){
												if(start.childNodes[i].link==page){
													var active=false;
													if(start.childNodes[i].classList.contains('active')){
														active=true;
													}
													start.childNodes[i].remove();
													if(active){
														start.firstChild.classList.add('active');
														start.nextSibling.appendChild(start.firstChild.link);
													}
													break;
												}
											}
										} 								
    										game.removeExtension("方舟杀");
    										alert("检测到您已安装《方舟杀》扩展，为避免冲突已将其删除！");    
    										clearTimeout(num);									
    									} 
    								} 
    							} 
    						} 
    					}
    				}  
    			}  	
    		}
    	},500);
    }());
    //——————————角色势力——————————//
    //——舟——蓝——//
    var style2=document.createElement('style');
    style2.innerHTML=".player .identity[data-color='ark'],";
    style2.innerHTML+="div[data-nature='ark'],";
    style2.innerHTML+="span[data-nature='ark'] {text-shadow: black 0 0 1px,rgba(30,144,255,1) 0 0 2px,rgba(30,144,255,1) 0 0 5px,rgba(30,144,255,1) 0 0 10px,rgba(30,144,255,1) 0 0 10px}";
    style2.innerHTML+="div[data-nature='arkm'],";
    style2.innerHTML+="span[data-nature='arkm'] {text-shadow: black 0 0 1px,rgba(51,204,255,1) 0 0 2px,rgba(30,144,255,1) 0 0 5px,rgba(30,144,255,1) 0 0 5px,rgba(30,144,255,1) 0 0 5px,black 0 0 1px;}";
    style2.innerHTML+="div[data-nature='arkmm'],";
    style2.innerHTML+="span[data-nature='arkmm'] {text-shadow: black 0 0 1px,rgba(30,144,255,1) 0 0 2px,rgba(30,144,255,1) 0 0 2px,rgba(30,144,255,1) 0 0 2px,rgba(30,144,255,1) 0 0 2px,black 0 0 1px;}";
    
    document.head.appendChild(style2);
    
    lib.group.push('ark');
    lib.translate.ark='舟';
    lib.translate.ark2='舟';
    lib.groupnature.ark='ark';
    
    var tenUi=document.createElement('style');
    tenUi.innerHTML=".player>.camp-zone[data-camp='ark']>.camp-back {background: linear-gradient(to bottom, rgb(30,144,255), rgb(0,51,255));}";
    tenUi.innerHTML+=".player>.camp-zone[data-camp='ark']>.camp-name {text-shadow: 0 0 5px rgb(30,144,255), 0 0 10px rgb(30,144,255), 0 0 15px rgb(30,144,255);}",
        document.head.appendChild(tenUi);
    //——————————全局技能——————————//
    //撤退语音
    lib.skill._ark_chetuiaudio={
        trigger:{
            global:'dieBegin',
        },
        priority:2,
        forced:true,
        unique:true,
        filter:function(event,player){
            return event.player&&event.player.group=='ark'&&!lib.config.ark_config_ios;
        },
        content:function(){
            game.playAudio('..','extension','无名方舟',trigger.player.name);
        },
    };
    //新手教程
    lib.skill._ark_xinshoujiaocheng={
        trigger:{
            global:"gameStart",
        },
        priority:Infinity,
        forced:true,
        filter:function(event){
            if(lib.config.ark_xsjc2==true) return false
            return true
        },
        content:function(){
            game.ark_xinshoujiaocheng();
            game.saveConfig('ark_xsjc2',true);
        },
    };
    //更新公告
    lib.skill._ark_gengxingonggao={
        trigger:{
            global:"gameStart",
        },
        priority:Infinity,
        forced:true,
        filter:function(event){
            if((!lib.config.arknights_gengxingonggao)||lib.config.arknights_gengxingonggao<1651){
                return true;
            }
            return false;
        },
        content:function(){
            game.ark_gengxingonggao();
            game.saveConfig('arknights_gengxingonggao',1651)
        },
    };
    lib.skill._ark_bgm={
        trigger:{
            global:"gameStart",
        },
        priority:Infinity,
        forced:true,
        filter:function(){
            return true;
        },
        content:function(){
            game.arkBgm()
            game.arkBgp()
        },
    };
    //——————————新手教程——————————//
    game.ark_xinshoujiaocheng = function(){
        var dialog=ui.create.dialog('无名方舟新手教程','hidden');
        dialog.noforcebutton=true;
        dialog.forcebutton=true;
        dialog.add(ui.create.div('.placeholder'));
        dialog.add('<div class="text center">'+'龙门币：初始拥有1000龙门币，对局胜利与失败均可获得龙门币，更新礼包中含有1500龙门币'+'</div>');
        dialog.add('<div class="text center">'+'干员寻访：初始解锁2星角色，3星及以上角色需通过干员寻访获得，干员寻访需要消耗龙门币，重复角色会返还龙门币'+'</div>');
        dialog.add('<div class="text center">'+'其他信息可查看扩展包内附录1、2，或进群询问'+'</div>');
        dialog.add('<div class="text center">'+'QQ群：531313081'+'</div>');
        dialog.add(ui.create.div('.placeholder'));
        dialog.open();
        var hidden=false;
        if(!ui.auto.classList.contains('hidden')){
            ui.auto.hide();
            hidden=true;
        };
        var control=ui.create.control('关闭新手教程',function(){
            dialog.close();
            control.close();
            if(hidden) ui.auto.show();
        });
    };
    //——————————更新公告——————————//
    game.ark_gengxingonggao = function(){
        var dialog=ui.create.dialog('无名方舟1.65.1更新公告','hidden');
        dialog.noforcebutton=true;
        dialog.forcebutton=true;
        dialog.add(ui.create.div('.placeholder'));
        dialog.add('<div class="text left">'+'1.干员实装：实装芬、安德切尔、米格鲁、阿异格：正弦'+'</div>');
        dialog.add([['ark_fang','ark_adnachiel','ark_beagle'],'character']);
        dialog.add('<div class="text left">'+'2.干员调整：史都华德技能调整'+'</div>');
        dialog.add([['ark_steward'],'character']);
        //dialog.addSmall([['ark_chixiao'],'vcard']);
        //dialog.add('<div class="text left">'+'3.修复在开局前打开“已拥有武将”等设置后关闭窗口报错的bug等已知bug'+'</div>');
        dialog.add('<div class="text left">'+'3.背景音乐：添加寻昼燃炬'+'</div>');
        dialog.add('<div class="text left">'+'4.新增干员换肤，添加部分皮肤；开始调整部分立绘；十周年UI势力背景调色'+'</div>');
        dialog.add('<div class="text left">'+'5.移除干员：博士'+'</div>');
        dialog.add(ui.create.div('.placeholder'));
        dialog.open();
        var hidden=false;
        if(!ui.auto.classList.contains('hidden')){
            ui.auto.hide();
            hidden=true;
        };
        game.pause()
        var control=ui.create.control('关闭更新公告',function(){
            dialog.close();
            control.close();
            if(hidden) ui.auto.show();
            game.resume()
        });
    };
    //——————————角色界面——————————//   
    //自选舟势力
    var characterDialogOrigin = ui.create.characterDialog;
    ui.create.characterDialog = function(){
        Array.prototype.AddOrigin = Array.prototype.add;
        Array.prototype.add = function(a){
            if(a == 'shen' || a == 'key'){
                if(this[0] == 'wei' && this[1] == 'shu' && this[2] == 'wu'){                
                    if(!this.contains("ark"))this.push("ark");                    
                }                             
            } 
            if(!this.contains(a))this.AddOrigin(a);                      
        };       
        var ret = characterDialogOrigin.apply(this,arguments);
        Array.prototype.add = Array.prototype.AddOrigin;
        delete Array.prototype.AddOrigin;
        return ret;
    };
    /*var characterDialogOrigin=ui.create.characterDialog;
    ui.create.characterDialog=function(){
        Array.prototype.AddOrigin=Array.prototype.add;
        Array.prototype.add=function(a){
            var i;
            for(i of this.slice(0))if(!Object.keys(lib.character).some(function(name){return !lib.filter.characterDisabled(name)&&!lib.filter.characterDisabled2(name)&&lib.character[name][1]==i}))this.remove(i);
            for(var i of lib.group)if(!this.contains(i)&&Object.keys(lib.character).some(function(name){return !lib.filter.characterDisabled(name)&&!lib.filter.characterDisabled2(name)&&lib.character[name][1]==i}))this.AddOrigin(i);
            if(!this.contains(a)&&Object.keys(lib.character).some(function(name){
                if(!lib.filter.characterDisabled(name)&&!lib.filter.characterDisabled2(name)){
                    if(a=='double'&&get.is.double(name))return true;
                    return lib.character[name][1]==a;
                }
            }))this.AddOrigin(a);                      
        };       
        var ret=characterDialogOrigin.apply(this,arguments);
        Array.prototype.add=Array.prototype.AddOrigin;
        Array.prototype.AddOrigin=undefined;
        return ret;
    };*/
    //——————————局后结算——————————//
    var ark_gameover=game.over;
    game.over=function(result){
        ark_gameover(result);
        //限定为拥有的方舟角色
        if(game.me&&get.arkhave(game.me.name)){
            //结算部分
            var basic=0
            var damage=0
            var damaged=0
            var kill=0
            var skill=0
            if(game.players.length&&game.me){
                for(var j=0;j<game.me.stat.length;j++){
                    if(game.me.stat[j].damage!=undefined) damage+=game.me.stat[j].damage;
                }
                for(var j=0;j<game.me.stat.length;j++){
                    if(game.me.stat[j].kill!=undefined) kill+=game.me.stat[j].kill;
                }
                for(var j=0;j<game.me.stat.length;j++){
                    if(game.me.stat[j].damaged!=undefined) damaged+=game.me.stat[j].damaged;
                }
                if(game.me.storage.ark_skilllvl!=undefined) skill+=game.me.storage.ark_skilllvl
            }
            if(result===true) basic+=200
            if(result===false) basic+=100
            var bonus=[1.5,1.6,1.7,1.8,1.9,2.0].randomGet()
            if(lib.config.lucky_star==true) bonus=2.0
            var lmb=(basic+damage*2+kill*10+skill*2+Math.floor(0.5*damaged)*2)*bonus 
            lmb=Math.floor(lmb)
            game.saveConfig('ark_lmb',lib.config.ark_lmb+lmb);
            game.ark_Refresh()
            //结算显示
            ark_checkScore1=0;
            ark_checkScore=function(){
                ark_checkScore2=ui.create.control('方舟结算'); 
                var newcount=ark_checkScore2.cloneNode(true);
                var list=newcount.childNodes;               
                var cl=function(){
                    ui.dialog.hide();
                    if(result===true) result='战斗胜利';
                    if(result===false) result='战斗失败';
                    var dialog=ui.create.dialog('无名方舟结算','hidden');
                    dialog.noforcebutton=true;
                    dialog.forcebutton=true;
                    dialog.add(ui.create.div('.placeholder'));
                    dialog.add('<div class="text center">'+'使用干员：'+get.translation(game.me)+'</div>');
                    dialog.add('<div class="text center">'+result+': '+basic+'</div>');
                    dialog.add('<div class="text center">'+'造成伤害：'+damage+'&emsp;&emsp;&emsp;伤害分数: '+damage+'</div>');
                    dialog.add('<div class="text center">'+'击杀角色：'+kill+'&emsp;&emsp;&emsp;击杀分数: '+5*kill+'</div>');
                    dialog.add('<div class="text center">'+'受到伤害：'+damaged+'&emsp;&emsp;&emsp;受伤分数: '+Math.floor(0.5*damaged)+'</div>');
                    dialog.add('<div class="text center">'+'特定技能：'+skill+'&emsp;&emsp;&emsp;技能分数: '+skill+'</div>');
                    dialog.add('<div class="text center">'+'倍数奖励：'+bonus+'</div>');
                    dialog.add('<div class="text center">'+'龙门币结算：'+lmb+'</div>');
                    dialog.add(ui.create.div('.placeholder'));
                    dialog.open();
                    this.innerHTML="关闭结算";
                    var hidden=false;
                    if(!ui.auto.classList.contains('hidden')){
                        ui.auto.hide();
                        hidden=true;
                    };
                    game.pause();
                    this.onclick=function (){                        
                    	dialog.close();
                        if(hidden) ui.auto.show();
                        game.resume();
                        this.onclick=cl;
                        this.innerHTML="方舟结算";
                    };
                    ark_checkScore1++;
                };
                list[0].onclick=cl;
                ark_checkScore2.parentNode.replaceChild(newcount, ark_checkScore2);
            };
            if(ark_checkScore1==0) ark_checkScore();
        }  
        //胜利语音
        /*if(game.me&&game.me.group=='ark'&&!lib.config.ark_config_ios){
            game.playAudio('..','extension','无名方舟','arkWinAudio',game.me.name+Math.ceil(2*Math.random()));
        }*/
    }
    //——————————养成系统——————————//
    //查看龙门币
     lib.extensionMenu['extension_无名方舟']['ark_lmbsee'] = {
         clear: true,
         name: '<span style=font-family:bender,sans-serif;>龙门币数量:'+lib.config.ark_lmb+"</span>",        	
    };
    //选择操作干员
    lib.extensionMenu['extension_无名方舟']['ark_choosecharacter'] = {
        clear: true,
        name:"选择干员",
        intro:"选择要异格的干员",
        init:"1",
        item:{
            "1":" ",
            'ark_amiya':"阿米娅",
            'ark_aak':"阿",
            'ark_dusk':"夕",
        },
        onclick: function(item) {
            if(!get.arkhave(item)){
                if(item!=1){
                    alert('您没有此干员，请前往【干员寻访】处获得')
                }
                else game.saveConfig('ark_upcharacter',item);
            }
            else{
                lib.config.ark_upcharacter=item
                game.saveConfig('ark_upcharacter',lib.config.ark_upcharacter);
            }
        },
    };
    //干员异格
    lib.extensionMenu['extension_无名方舟']['ark_yige'] = {
        clear: true,
        name: '点击切换干员异格',
        onclick: function(item) {
            if(lib.config.ark_upcharacter==1) alert('请选择要异格/升变的干员')
            else{
                var data=lib.config.ark_characterdata
                var name=lib.config.ark_upcharacter
                if(!lib.config.ark_yigecharacters.contains(name)){
                    alert(get.translation(name)+' 无异格/升变状态')
                    return;
                }
                //
                if(data[name].yige===true) data[name].yige=1
                if(data[name].yige===false||data[name].yige==undefined) data[name].yige=0
                //
                var num=data[name].yige
                data[name].yige++
                if(data[name].yige>=data[name].names.length) data[name].yige=0
                //
                if(name=='ark_amiya') alert(data[name].names[num]+' 已升变为 '+data[name].names[data[name].yige])
                else alert(data[name].names[num]+' 现在为 '+data[name].names[data[name].yige]+' 异格形态')
                /*if(data[name].yige==true){
                    data[name].yige=false
                    game.saveConfig('ark_characterdata',lib.config.ark_characterdata)
                    for(var m=0;m<lib.config.ark_yigecharacters.length;m++){
                        if(lib.config.ark_yigecharacters[m]==name){
                            name1=lib.config.ark_yigecharactersname[m]
                            name0=lib.config.ark_yigebefcharactersname[m]
                        }
                    }
                    if(name1!=0){
                        if(name=='ark_amiya') alert(get.translation(name)+' 已升变为 '+name0)
                        else alert(get.translation(name)+' 现在为 '+name0+' 异格形态')
                    }
                }
                else{
                    data[name].yige=true
                    game.saveConfig('ark_characterdata',lib.config.ark_characterdata)
                    for(var m=0;m<lib.config.ark_yigecharacters.length;m++){
                        if(lib.config.ark_yigecharacters[m]==name){
                            name1=lib.config.ark_yigecharactersname[m]
                            name0=lib.config.ark_yigebefcharactersname[m]
                        }
                    }
                    if(name1!=0){
                        if(name=='ark_amiya') alert(get.translation(name)+' 已升变为 '+name1)
                        else alert(get.translation(name)+' 现在为 '+name1+' 异格形态')
                    }
                }*/
                game.saveConfig('ark_characterdata',lib.config.ark_characterdata)
                game.reload()
            }
        },
    } 
    //——————————干员信息——————————//
    //查看全部
    lib.extensionMenu['extension_无名方舟']['ark_shizhuang'] = {
        clear: true,
        name: '点击查看已实装干员',
        onclick: function(item) {
            var dialog=ui.create.dialog('无名方舟已实装干员','hidden');
            dialog.noforcebutton=true;
            dialog.forcebutton=true;
            dialog.add(ui.create.div('.placeholder'));
            dialog.add([lib.config.ark_allCharacter,'character']);
            dialog.add(ui.create.div('.placeholder'));
            dialog.open();
            var hidden=false;
            if(!ui.auto.classList.contains('hidden')){
                ui.auto.hide();
                hidden=true;
            };
            var control=ui.create.control('关闭',function(){
                dialog.close();
                control.close();
                if(hidden) ui.auto.show();
            });
        },
    };
    //查看拥有
    lib.extensionMenu['extension_无名方舟']['ark_ganyuanhave'] = {
        clear: true,
        name: '点击查看拥有干员',
        onclick: function(item) {
            var data=lib.config.ark_characterdata
            var dialog=ui.create.dialog('已拥有干员','hidden');
            dialog.noforcebutton=true;
            dialog.forcebutton=true;
            dialog.add(ui.create.div('.placeholder'));
            dialog.add([lib.config.ark_allCharacter.filter(a=>lib.config.ark_characterdata[a].have===true),'character']);
            dialog.add(ui.create.div('.placeholder'));
            dialog.open();
            var hidden=false;
            if(!ui.auto.classList.contains('hidden')){
                ui.auto.hide();
                hidden=true;
            };
            var control=ui.create.control('关闭',function(){
                dialog.close();
                control.close();
                if(hidden) ui.auto.show();
            });
        },
    };
    //——————————抽卡系统——————————//
    //单抽
    lib.extensionMenu['extension_无名方舟']['ark_xunfang1'] = {
        clear: true,
        name: '点击进行一次干员寻访',
        onclick: function(item) {
            if(lib.config.ark_lmb<50){
                alert('龙门币不足，需要50龙门币，当前拥有'+lib.config.ark_lmb+'龙门币')
            }
            else{
                if(lib.config.ark_config_ios||confirm('是否使用50龙门币进行一次干员寻访')){
                    game.saveConfig('ark_lmb',lib.config.ark_lmb-50)
                    var rollresult=game.arkRolls(1,['ark_lings','ark_cuora','ark_shamare'])
                    if(lib.config.ark_config_chouka==true&&!lib.config.ark_config_ios){
                        alert('拉包')
                        alert(rollresult[0])
                    }
                    if(!lib.config.ark_config_ios) alert(get.translation(rollresult[1]))
                }
                game.ark_Refresh()
            }
        },
    };
    //十连
    lib.extensionMenu['extension_无名方舟']['ark_xunfang10'] = {
        clear: true,
        name: '点击进行十次干员寻访',
        onclick: function(item) {
            if(lib.config.ark_lmb<500){
                alert('龙门币不足，需要500龙门币，当前拥有'+lib.config.ark_lmb+'龙门币')
            }
            else{
                if(lib.config.ark_config_ios||confirm('是否使用500龙门币进行十次干员寻访')){
                    game.saveConfig('ark_lmb',lib.config.ark_lmb-500)
                    var rollresult=game.arkRolls(10,['ark_lings','ark_cuora','ark_shamare'])
                    if(lib.config.ark_config_chouka==true&&!lib.config.ark_config_ios){
                        alert('拉包')
                        alert(rollresult[0])
                    }
                    if(!lib.config.ark_config_ios) alert(get.translation(rollresult[1]))
                }
                game.ark_Refresh()
            }
        },
    };
    //——————————设置——————————//
    //抽卡动画
    lib.extensionMenu['extension_无名方舟']['ark_config_chouka'] = {
        name:"抽卡“动画”",
        intro:"开启后将添加抽卡“动画”",
        init:lib.config.ark_config_chouka === undefined ? true:lib.config.ark_config_chouka,
        onclick:function(item){
            game.saveConfig('ark_config_chouka',item);
            game.saveConfig('extension_无名方舟_ark_config_chouka',item);
        }
    };
    //仅方舟干员模式
    lib.extensionMenu['extension_无名方舟']['ark_config_onlyArknight'] = {
        name:"方舟模式",
        intro:"开启后只能使用方舟角色",
        init:lib.config.ark_config_onlyArknight === undefined ? false:lib.config.ark_config_onlyArknight,
        onclick:function(item){
            game.saveConfig('ark_config_onlyArknight',item);
            game.saveConfig('extension_无名方舟_ark_config_onlyArknight',item);
        }
    };
    //露头皮肤
    lib.extensionMenu['extension_无名方舟']['ark_config_lutou'] = {
        "name":"露头皮肤",
        "intro":"开启后，武将皮肤切换为十周年UI露头皮肤。",
        "init":lib.config.ark_config_lutou === undefined ? false:lib.config.ark_config_lutou,
        onclick:function(item){
            game.saveConfig('extension_无名方舟_ark_config_lutou',item);
            game.saveConfig('ark_config_lutou',item);
            if (window.decadeUI) ui.arena.dataset.outcropSkin = item ? 'on' : 'off';
            game.saveConfig('extension_十周年UI_outcropSkin',item);
        }
    };
    //新手引导
    lib.extensionMenu['extension_无名方舟']['ark_config_xinshouyindao'] = {
        name:"查看无名方舟新手引导",
        clear:true,
        onclick:function(item){
            game.ark_xinshoujiaocheng()
        }
    };
    //背景音乐    
    lib.extensionMenu['extension_无名方舟']['ark_backgroundmusic'] = {
        name:"切换背景音乐",
        init:lib.config.ark_backgroundmusic !== undefined ? lib.config.ark_backgroundmusic:"origin",
        item:{
            'origin':'默认',
            'kaier':'凯尔希小队（苦难摇篮）',
            'shalu':'杀戮之塔（怒号光明）',
            'shenchi':'深池（风暴瞭望）',
            'mande':'曼德拉（风暴瞭望）',
            'Kaltsit':'Kal\'tsit（遗尘漫步）',
            'rudiguo':"如帝国之影（遗尘漫步）",
            'UnderTides':"UnderTides（覆潮之下）",
            'jiaotang':"教堂（覆潮之下）",
            'qianchang':"浅尝不止（猩红血钻）",
            'shenceng':"深层迷醉（猩红血钻）",
            'xinghong':"猩红血钻（猩红血钻）",
            'dixmu':"第■幕（猩红血钻）",
            'kuilei':"傀儡的狂喜（猩红血钻）",
            'shijiu':'诗酒乘兴（将进酒）',
            'huangtie':'黄铁重铸（黄铁行动）',
            'ranhui':'燃灰不息（燃灰行动）',
            'qianfeng':'铅封将裂（铅封行动）',
            'guangpu':'光谱逸散（光谱行动）',
            'xunzhou':'寻昼燃炬（寻昼行动）'
            
        },
        onclick:function(item){
            game.saveConfig('extension_无名方舟_ark_backgroundmusic',item);
            game.saveConfig('ark_backgroundmusic',item);
            game.arkBgm();
        }
    },
    //背景图片    
    lib.extensionMenu['extension_无名方舟']['ark_backgroundpicture'] = {
        name:"切换背景图片",
        init:lib.config.ark_backgroundpicture !== undefined ? lib.config.ark_backgroundpicture:"origin",
        item:{
            'origin':'默认',
            'yanfengcheng':"盐风城",
            'pinghengyushiheng':'平衡与失衡',
            'yinqiangtianma':"银枪天马",
            'fengbaoliaowang':"风暴瞭望",
            'fengpan':"封盘",
            'tanchengxiangjian':"坦诚相见",
            'shuanglong':"双龙",
            
        },
        onclick:function(item){
            game.saveConfig('extension_无名方舟_ark_backgroundpicture',item);
            game.saveConfig('ark_backgroundpicture',item);
            game.arkBgp();
        }
    },
    //ios版本
    lib.extensionMenu['extension_无名方舟']['ark_config_ios'] = {
        name:"ios无弹窗模式",
        intro:"ios无弹窗模式",
        init:lib.config.ark_config_ios === undefined ? false:lib.config.ark_config_ios,
        onclick:function(item){
            game.saveConfig('ark_config_ios',item);
            game.saveConfig('extension_无名方舟_ark_config_ios',item);
        }
    };
    //武将分类   
    lib.extensionMenu['extension_无名方舟']['ark_characterSort'] = {
        name:"切换武将分类",
        init:lib.config.ark_characterSort !== undefined ? lib.config.ark_characterSort:"zuzhi",
        item:{
            'zuzhi':'组织',
            'xingji':'星级',
        },
        onclick:function(item){
            game.saveConfig('extension_无名方舟_ark_characterSort',item);
            game.saveConfig('ark_characterSort',item);
        }
    },
    //云雾开关
    lib.extensionMenu['extension_无名方舟']['ark_configyw_open'] = {
        name:"云雾飘渺",
        intro:"开启乱斗—云雾飘渺模式",
        init:lib.config.ark_configyw_open === undefined ? true:lib.config.ark_configyw_open,
        onclick:function(item){
            game.saveConfig('ark_configyw_open',item);
            game.saveConfig('extension_无名方舟_ark_configyw_open',item);
        }
    };
    //云雾角色扩展
    lib.extensionMenu['extension_无名方舟']['ark_configyw_character'] = {
        name:"云雾武将扩充",
        intro:"开启后云雾飘渺可以使用全部武将",
        init:lib.config.ark_configyw_character === undefined ? false:lib.config.ark_configyw_character,
        onclick:function(item){
            game.saveConfig('ark_configyw_character',item);
            game.saveConfig('extension_无名方舟_ark_configyw_character',item);
        }
    };
    //干员换肤
    lib.extensionMenu['extension_无名方舟']['ark_configskin'] = {
        name:"点击进行无名方舟干员换肤",
        intro:"无名方舟干员换肤功能，请在开局后打开",
        clear: true,
        onclick:function(item){
            game.arkChangeSkin()
        }
    };
    //——————————代码翻译——————————//
    lib.translate['ark_fengyin']='技能失效';
    lib.translate['ark_qiangming']='无法响应';
    lib.translate['ark_draw']='摸牌';
    lib.translate['ark_damage']='伤害';
    lib.translate['ark_recover']='回复体力';
    lib.translate['ark_diaodu']='调度';
    lib.translate['ark_xietong']='协同';
    //——————————角色评级——————————//
    if(lib.rank){
        lib.rank.rarity.rare.addArray(lib.config.ark_fourstars);
        lib.rank.rarity.epic.addArray(lib.config.ark_fivestars);
        lib.rank.rarity.legend.addArray(lib.config.ark_sixstars)
    }
    //——————————函数定义——————————//
    //下载函数（来源于玄武江湖）
    game.arkCopyFilesFromDirToDir = function(fromPath,toPath,list,callback,namefilter,process,errorContinue){
        if(!game.readFile || !game.writeFile){
            if(callback){
                callback(false);
            }
            return;
        }
        if(typeof list == 'string'){
            var from = fromPath +"/"+ list;
            game.readFile(from,function(data){
                var name = list;
                if(namefilter){
                    name = namefilter(name);
                }
                game.writeFile(data,toPath,name,function(){
                    if(process){
                        process(name);
                    }
                    if(callback){
                        callback(true);
                    }
                });
            },function(err){
                if(callback){
                    callback(false);
                }
            });
            return;
        }
        if(list.length == 0){
            if(callback){
                callback(true);
            }
            return;
        }
        var lst = list.slice(0);
        var name = lst.shift();
        game.arkCopyFilesFromDirToDir(fromPath,toPath,name,function(success){
            if(!success){
                if(callback){
                    callback(false);
                }
                if(!errorContinue){
                    return;
                }
            }
            game.arkCopyFilesFromDirToDir(fromPath,toPath,lst,function(success){
                if(callback){
                    callback(success);
                }
            },namefilter,process,errorContinue);
        },namefilter,process,errorContinue);
    };
    //获得干员数据
    get.arkhave = function(name){
        var data=lib.config.ark_characterdata
        if(data[name]&&data[name].have==true) return true
        else return false
    }
    get.arkmpro = function(name){
        var data=lib.config.ark_characterdata
        if(data[name]&&data[name].mpro) return data[name].mpro
        return 0
    }
    get.arkstar = function(name){
        var data=lib.config.ark_characterdata
        if(data[name]&&data[name].star) return data[name].star
        return 0
    }
    //抽卡
    game.arkRolls = function(time,up){
        var list=[],result=[],color=0,stars=0,colorlist=['白光','紫光','金光','火光镀彩！'],samelist=[0,0,0,10,20,50,100]
        var data=lib.config.ark_characterdata
        var characters=lib.config.ark_allCharacter
        if(!lib.config.ark_nosix){
            game.saveConfig('ark_nosix',0)
        }
        for(var i=0;i<100;i++){
            list.push(i)
        }
        for(var i=0;i<time;i++){
            var random=list.randomGet()
            if(lib.config.ark_nosix>=30) num1=99
            game.saveConfig('ark_nosix',lib.config.ark_nosix+1)
            if(random>=0&&random<45){
                stars=3;
            }
            else if(random>=45&&random<80){
                stars=4;
                if(color<1) color=1;
            }
            else if(random>=80&&random<95){
                stars=5
                if(color<2) color=2;
            }
            else if(random>=95&&random<100){
                stars=6;
                game.saveConfig('ark_nosix',0);
                if(color<3) color=3;
            }
            var prepare=lib.config.ark_allCharacter.filter(a=>data[a].star==stars&&data[a].have==false&&up.contains(a))
            if(prepare.length>0) prepare=prepare.randomGet()
            else{
                prepare=lib.config.ark_allCharacter.filter(a=>data[a].star==stars&&data[a].have==false)
                if(prepare.length>0) prepare=prepare.randomGet()
                else{
                    prepare=lib.config.ark_allCharacter.filter(a=>data[a].star==stars)
                    prepare=prepare.randomGet()
                }
            }
            if(data[prepare].have==true) game.saveConfig('ark_lmb',lib.config.ark_lmb+samelist[data[prepare].star])
            else{
                data[prepare].have=true
                game.saveConfig('ark_characterdata',lib.config.ark_characterdata)
            }
            result.push(prepare)
        }
        return [colorlist[color],result]
    }
    //干员换肤
    game.arkChangeSkin = function(){
        var next=game.createEvent("arkChangeSkin");
        next.setContent(function (){
            'step 0'
            var dialog=ui.create.dialog('无名方舟干员换肤<br>重启生效','hidden');
            dialog.add(ui.create.div('.placeholder'));
            for(var chr of lib.config.ark_allCharacter){
                if(lib.config.ark_skinConfig[chr]){
                    dialog.add([[chr],'character']);
                }
            }
            /*for(var chr in lib.config.ark_skinConfig){
                dialog.add([[chr],'character']);
            }*/
            game.me.chooseButton(dialog,true).set('onfree',true);
            'step 1'
            if(result.links[0]){
                event.character=result.links[0]
                var dialog=ui.create.dialog(get.translation(result.links[0])+'皮肤','hidden');
                var num=lib.config.ark_skinConfig[result.links[0]]
                var table=document.createElement('div');
                table.classList.add('add-setting');
                table.style.margin='5px';
                table.style.height='260px';
                table.style.width='80%';
                table.style.position='relative';
                Object.assign(table.style,{
                    background: "rgba(0,0,0,0.3)",
                    "box-shadow": "rgba(0, 0, 0, 0.4) 0 0 0 1px",
                    "border-radius": "6px",
                    transition: "opacity 0.3s",
                    overflow: "auto",
                    "white-space": "nowrap" 
                });
                table.addEventListener("wheel", (e) => {
                    e.preventDefault();
                    table.scrollLeft += e.deltaY;
                });
                Object.assign(dialog.style,{
                    background: "rgba(0,0,0,0.2)",
                    "box-shadow": "rgba(0, 0, 0, 0.3) 0 0 0 1px",
                    "border-radius": "6px",
                });
                dialog.content.appendChild(table);
                for(var i=0;i<=num;i++){
                    var char=ui.create.div('.avatar',table);
                    if(i==0){
                        Object.assign(char.style,{
                            margin:"5px",
                            width:"174px",
                            height:"232px",
                            position:"relative",
                            backgroundImage:'url("'+lib.assetURL+'extension/无名方舟/'+result.links[0]+'.jpg")',
                            'background-size':'cover',
                        });
                        
                    }
                    else{
                        Object.assign(char.style,{
                            margin:"5px",
                            width:"174px",
                            height:"232px",
                            position:"relative",
                            backgroundImage:'url("'+lib.assetURL+'extension/无名方舟/arkSkin/'+result.links[0]+'/'+i+'.jpg")',
                            'background-size':'cover',
                        });
                    }
                    char.addEventListener(lib.config.touchscreen?'touchend':'click',ui.click.button);
                    table.appendChild(char);
                    char.link=i;         
                    for(var j in lib.element.button){
                        char[j]=lib.element.button[i];
                    }   
                    dialog.buttons.add(char);
                };
                game.me.chooseButton(dialog,true).set('onfree',true);
            }
            else event.finish()
            'step 2'
            if(result.links){
                lib.config.ark_characterdata[event.character].skin=result.links[0]
                game.saveConfig('ark_characterdata',lib.config.ark_characterdata)
            }
        });
    }
    //检测摸牌阶段
    lib.element.player.isPhaseDrawing = function(notmeisok){
        if(!notmeisok&&_status.currentPhase!=this) return false;
        return _status.event.name=='phaseDraw'||_status.event.getParent('phaseDraw').name=='phaseDraw';
    };
    //——————————历史记录——————————//
    if(!lib.actionHistory){
    	lib.actionHistory={useCard:[],respond:[],skipped:[],lose:[],gain:[],sourceDamage:[],damage:[],sourceDie:[],addMark:[],removeMark:[],loseHp:[],recover:[],die:[],draw:[],custom:[]};
    };
    var ucr=ui.create.player;
    ui.create.player=function (position,noclick){
    	var node=ucr(position,noclick);
    	node.actionHistory=lib.actionHistory?[lib.actionHistory]:[{useCard:[],respond:[],skipped:[],lose:[],gain:[],sourceDamage:[],damage:[],sourceDie:[],addMark:[],removeMark:[],loseHp:[],recover:[],die:[],draw:[],custom:[]}];
    	return node;
    };    
    var str;
    str=String(lib.element.content.phasing);    
    eval('lib.element.content.phasing='+str.replace("current.actionHistory.push({useCard:[],respond:[],skipped:[],lose:[],gain:[],sourceDamage:[],damage:[],custom:[]});","current.actionHistory.push("+(lib.actionHistory?JSON.stringify(lib.actionHistory):"{useCard:[],respond:[],skipped:[],lose:[],gain:[],sourceDamage:[],damage:[],sourceDie:[],addMark:[],removeMark:[],loseHp:[],recover:[],die:[],draw:[],custom:[]}")+");"));
    str=String(lib.element.content.draw);   
    eval('lib.element.content.draw='+(str.slice(0,str.length-1)+(str[str.length-2]!=";"?";":"")+"player.stat[player.stat.length-1].draw?player.stat[player.stat.length-1].draw+=num:player.stat[player.stat.length-1].draw=num;player.getHistory('draw').push(event);")+str[str.length-1]+';'); 
    str=String(lib.element.content.die);
    eval('lib.element.content.die='+str.slice(0,str.length-1)+(str[str.length-2]!=";"?";":"")+"player.stat[player.stat.length-1].died?player.stat[player.stat.length-1].died++:player.stat[player.stat.length-1].died=1;player.getHistory('die').push(event);if(source){source.stat[source.stat.length-1].die?source.stat[source.stat.length-1].die++:source.stat[source.stat.length-1].die=1;source.getHistory('sourceDie').push(event);};"+str[str.length-1]+";");
    str=String(lib.element.content.recover);
    eval("lib.element.content.recover="+str.slice(0,str.length-1)+(str[str.length-2]!=";"?";":"")+"player.stat[player.stat.length-1].recover?player.stat[player.stat.length-1].recover+=num:player.stat[player.stat.length-1].recover=num;player.getHistory('recover').push(event);"+str[str.length-1]+";");
    str=String(lib.element.content.loseHp);
    eval('lib.element.content.loseHp='+str.slice(0,str.length-1)+(str[str.length-2]!=";"?";":"")+'player.stat[player.stat.length-1].loseHp?player.stat[player.stat.length-1].loseHp+=num:player.stat[player.stat.length-1].loseHp=num;player.getHistory("loseHp").push(event);'+str[str.length-1]+';');    
    var adm=lib.element.player.addMark;
    lib.element.player.addMark=function (){ 
    	var i,num,log,player=this;
    	for(var j=0;j<arguments.length;j++){
    		if(typeof arguments[j]=="number"){
    			num=arguments[j];    			
    		} else if(typeof arguments[j]=="string"){
    			i=arguments[j];    			
    		} else if(typeof arguments[j]=="boolean"){
    			log=arguments[j];    			
    		}
    	};   	   
    	adm.apply(this,[i,num,log,...arguments]);
    	player.stat[player.stat.length-1].mark?player.stat[player.stat.length-1].mark+=num:player.stat[player.stat.length-1].mark=num;
    	player.getHistory("addMark").push({name:i,num:num,log:log,other:arguments});
    	return this;
    };
    var rem=lib.element.player.removeMark;
    lib.element.player.removeMark=function (){
    	var i,num,log,player=this;
    	for(var j=0;j<arguments.length;j++){
    		if(typeof arguments[j]=="number"){
    			num=arguments[j];    			
    		} else if(typeof arguments[j]=="string"){
    			i=arguments[j];    			
    		} else if(typeof arguments[j]=="boolean"){
    			log=arguments[j];    			
    		}
    	};   	   
    	rem.apply(this,[i,num,log,...arguments]);
    	player.stat[player.stat.length-1].markd?player.stat[player.stat.length-1].markd+=num:player.stat[player.stat.length-1].markd=num;
    	player.getHistory("removeMark").push({name:i,num:num,log:log,other:arguments});
    	return this;
    };
    //——————————闪避相关——————————//
    //四则运算化成整数计算方法
    var floatCalc = function (a, b) {
        a = a + '', b = b + '';
        var aNum = a.indexOf('.'),
            bNum = b.indexOf('.'),
            aSum,
            bSum,
            resultNum,
            inta,
            intb;
 
        aSum = aNum < 0 ? 0 : a.split('.')[1].length;
        bSum = bNum < 0 ? 0 : b.split('.')[1].length;
        resultNum = aSum > bSum ? aSum : bSum;
 
        inta = aNum < 0 ? Number(a + (Math.pow(10, resultNum) + '').replace('1', '')) : (function () {
            a = a.replace('.', '');
            a = resultNum == aSum ? a : a + (Math.pow(10, resultNum - aSum) + '').replace('1', '');
            return Number(a);
        }())
 
        intb = bNum < 0 ? Number(b + (Math.pow(10, resultNum) + '').replace('1', '')) : (function () {
            b = b.replace('.', '');
            b = resultNum == bSum ? b : b + (Math.pow(10, resultNum - bSum) + '').replace('1', '');
            return Number(b);
        }())
 
        return {
            a: inta,
            b: intb,
            num: resultNum
        };
    }
    //加法
    Number.prototype.add = function (n) {
        var o = floatCalc(this, n);
        return (o.a + o.b) / Math.pow(10, o.num);
    }
    //减法
    Number.prototype.minus = function (n) {
        var o = floatCalc(this, n);
        return (o.a - o.b) / Math.pow(10, o.num);
    }
    //乘法
    Number.prototype.subtract = function (n) {
        var o = floatCalc(this, n);
        return (o.a * o.b) / Math.pow(10, o.num * 2);
    }
    //除法
    Number.prototype.divide = function (n) {
        var o = floatCalc(this, n);
        return (o.a / o.b);
    }
    get.arkDodgeT=function (obj){
    	if(!obj)return;
    	var physics,magic;
    	if(Array.isArray(obj)){
    		physics=obj[0];
    		magic=obj[1];
    	} else if(typeof obj=="string"){
    		physics=Number(obj.slice(0,obj.indexOf("|")!=-1?obj.indexOf("|"):obj.indexOf(";")!=-1?obj.indexOf(";"):obj.indexOf(",")!=-1?obj.indexOf(","):obj.indexOf("&")!=-1?obj.indexOf("&"):0));
    		magic=Number(obj.slice((obj.indexOf("|")!=-1?obj.indexOf("|"):obj.indexOf(";")!=-1?obj.indexOf(";"):obj.indexOf(",")!=-1?obj.indexOf(","):obj.indexOf("&")!=-1?obj.indexOf("&"):0)+1,obj.length)); 
    	} else if(get.is.object(obj)){
    		physics=obj.physics||obj[Object.keys(obj)[0]];
    		magic=obj.magic||obj[Object.keys(obj)[1]];     
    	};
    	if(!physics&&!magic)return;
    	return [physics,magic];
    }; 
    //为角色添加闪避数值，目标角色.addArkDodge("物闪;法闪");80就是80%
    lib.element.player.addArkDodge=function (obj,source,tag){
    	var next=game.createEvent("addArkDodge");
    	next.player=this;
    	next.obj=obj;
    	next.tag=tag;
    	next.source=source;
    	next.setContent("addArkDodge");  
    	return next;  	 	
    };
    lib.element.content.addArkDodge=function (){
    	"step 0"
    	event.trigger("addArkDodge");
    	"step 1"
    	var obj=event.obj,tag=event.tag,source=event.source,t=get.arkDodgeT(obj);  
    	if(player.arkDodges&&player.arkDodges.push&&t){    		
    		player.arkDodges.push({physics:(t[0]||0)/100,magic:(t[1]||0)/100,source:source||_status.event.skill||_status.event.name,tag:tag||{}});       		
    		return player;   
    	};	
    };
    lib.element.player.arkDodgeRandom=function (type){
    	var next=game.createEvent("arkDodgeRandom");
    	next.type=type||"nonature";
    	next.player=this;   
    	next.num1=get.arkDodge(this)[0];
    	next.num2=get.arkDodge(this)[1];	
    	next.setContent("arkDodgeRandom");
    	return next;
    };
    lib.element.player.getTagDodge=function (name,filter,type,map){
    	if(type=="skill") return this.getSkills().filter(a=>name?a==name:true&&typeof filter=="function"?filter(a):true).map(a=>map&&typeof map=="function"?map(a,this):map!==false?lib.skill[a]:a);
    	return this.arkDodges.filter(a=>name?a.source==name:true&&typeof filter=="function"?filter(a):true);
    };
    lib.element.content.arkDodgeRandom=function (){
    	"step 0"
    	event.trigger("arkDodgeRandomBefore");
    	"step 1"
    	event.trigger("arkDodgeRandomBegin");
    	"step 2"
    	var num1=event.num1,num2=event.num2,bool1=false,bool2=false;
    	if(num1>0&&Number(String(Math.random()).slice(0,4))<=num1)bool1=true;	
    	if(num2>0&&Number(String(Math.random()).slice(0,4))<=num2)bool2=true;	 
    	event.result={bools:[bool1,bool2],bool:false}; 	
    	if((event.type=="nonature"&&bool1)?true:(event.type=="nature"&&bool2)?true:false){
    		event.trigger("arkDodgeRandomFinish");   
    		event.result.bool=true;     			
    	} else {
    		event.trigger("arkDodgeRandomFail");
 	}
    	"step 3"
    	event.trigger("arkDodgeRandomEnd");
    	"step 4"
    	event.trigger("arkDodgeRandomAfter");    	    	
    };
    lib.element.player.getarkDodge=function (type,bool){
    	return get.arkDodge(this,type,bool);
    };
    //获取角色的双闪数值，get.arkDodge(目标角色,"nature|nonature"返回的结果为物/法闪,布尔值为真则返回的数值为直接加算)[0是物闪，1法闪]
    get.arkDodge=function (player,type,bool){
    	if(get.itemtype(player)!='player')return;
    	var dodges=player.arkDodges||[],num1=-1,num2=-1,mod=((player&&player.getSkills)?player.getSkills().concat(lib.skill.global).filter(a=>a&&lib.skill[a]&&lib.skill[a].mod&&lib.skill[a].mod.arkDodge).map(a=>lib.skill[a]):null),modRet;    	
    	for(var i of dodges){
    		if(i.physics&&i.physics>0){
    			if(!bool)num1=num1>0?num1.subtract((1..minus(i.physics))):(1..minus(i.physics));   
    			else {
    				num1=num1<0?0:num1;
    				num1+=i.physics;
    			}
    		};
    		if(i.magic&&i.magic>0){
    			if(!bool)num2=num2>0?num2.subtract((1..minus(i.magic))):(1..minus(i.magic));   
    			else {
    				num2=num2<0?0:num2;
    				num2+=i.magic;
    			}		
    		};
    	};
    	if(type=="noMod"){
    		if(!bool){
    			num1=num1>=0?Number(String(1..minus(num1)).slice(0,4)):-1;
    			num2=num2>=0?Number(String(1..minus(num2)).slice(0,4)):-1;
    		}    		
    		return [num1,num2];
    	}
    	for(var i of mod){
    		/*
    			mod:{
    				arkDodge:"80;50",//80物闪50法闪  
    				单闪结尾记得带分号，如:"80;"
    				arkDodge:function (player,type){
    					return "80;50";//返回的是这4种就行（
    				}, 
    				arkDodge:{"xxx":"80","xxa":"50"},//同上	
    				arkDodge:[80,50],//同上	   				
    			},
    		*/
    		if(bool){
    			num1=num1<0?0:num1;
    			num2=num2<0?0:num2;
    		}
    		var obj=i.mod.arkDodge;  	
    		if(typeof obj=="function"){   
    			if(!bool){ 	
    				num1=num1>0?num1.subtract(1..minus(get.arkDodgeT(obj(player,type))[0]/100)):(1..minus(get.arkDodgeT(obj(player,type))[0]/100));
    				num2=num2>0?num2.subtract(1..minus(get.arkDodgeT(obj(player,type))[1]/100)):(1..minus(get.arkDodgeT(obj(player,type))[1]/100));
    			} else {    
    				num1+=get.arkDodgeT(obj(player,type))[0]/100;
    				num2+=get.arkDodgeT(obj(player,type))[1]/100;
    			}
    		} else if(Array.isArray(obj)){
    			if(!bool){
   				num1=num1>0?num1.subtract(1..minus(obj[0]/100)):(1..minus(obj[0]/100));
    				num2=num2>0?num2.subtract(1..minus(obj[1]/100)):(1..minus((obj[1]||0)/100));
    			} else {    				
				num1+=obj[0]/100;
				num2+=obj[1]/100;	
    			}
    		} else if(typeof obj=="string"||get.is.object(obj)){    	
    			if(!bool){
    				num1=num1>0?num1.subtract(1..minus(get.arkDodgeT(obj)[0]/100)):(1..minus(get.arkDodgeT(obj)[0]/100));
    				num2=num2>0?num2.subtract(1..minus(get.arkDodgeT(obj)[1]/100)):(1..minus(get.arkDodgeT(obj)[1]/100));
    			} else {
    				num1+=get.arkDodgeT(obj)[0]/100;
    				num2+=get.arkDodgeT(obj)[1]/100;
    			}			
    		}     
    	};
    	if(!bool){
    		num1=num1>=0?Number(String(1..minus(num1)).slice(0,4)):-1;
    		num2=num2>=0?Number(String(1..minus(num2)).slice(0,4)):-1;
    	}
    	if(type=="nature")return num2;
    	if(type=="nonature")return num1;
    	return [num1,num2];
    };
    lib.skill._arkDodgeInit={
	trigger: {
		global: "gameStart",
		player: "enterGame",
	},
	silent:true,
	content:()=>{
		for(var i of game.players){
			if(!i.arkDodges)i.arkDodges=[];
		}
	},	
    };    
    lib.skill._ArkDodgeJudge={
    	trigger:{player:"damageBefore"},
    	silent:true,
    	priority:1145147979,
    	filter:(e,p)=>get.arkDodge(p)[e.nature?1:0]>0&&!e.noDodge,
    	content:function (){
    		"step 0"    	
    		var sd=player.getTagDodge(null,(a)=>lib.skill[a].ArkDodgeBefore&&typeof lib.skill[a].ArkDodgeBefore=="function","skill",(a)=>[a,lib.skill[a].ArkDodgeBefore]);
    		if(sd.length){
    			for(var i of sd){
    				var next=game.createEvent(i[0]+"ArkDodgeJudgeBefore");
    				next.player=player;
    				next._trigger=trigger;  
    				next.setContent(i[1]);  		   		
    			}    			
    		}  
    		event.trigger("ArkDodgeJudgeBefore");
    		var sd=player.getTagDodge(null,(a)=>lib.skill[a].ArkDodgeBegin&&typeof lib.skill[a].ArkDodgeBegin=="function","skill",(a)=>[a,lib.skill[a].ArkDodgeBegin]);
    		if(sd.length){
    			for(var i of sd){
    				var next=game.createEvent(i[0]+"ArkDodgeJudgeBegin");
    				next.player=player;
    				next._trigger=trigger;  
    				next.setContent(i[1]);  		   		
    			}    			
    		}
    		event.trigger("ArkDodgeJudgeBegin");  		
    		"step 1"
    		var sd=player.getTagDodge(null,(a)=>lib.skill[a].ArkDodgeEnd&&typeof lib.skill[a].ArkDodgeEnd=="function","skill",(a)=>[a,lib.skill[a].ArkDodgeEnd]);
    		if(sd.length){
    			for(var i of sd){
    				var next=game.createEvent(i[0]+"ArkDodgeJudgeEnd");
    				next.player=player;
    				next._trigger=trigger;  
    				next.setContent(i[1]);  		   		
    			}    			
    		}
    		event.trigger("ArkDodgeJudgeEnd");
    		player.arkDodgeRandom(trigger.nature?"nature":"nonature");
    		var sd=player.getTagDodge(null,(a)=>lib.skill[a].ArkDodgeAfter&&typeof lib.skill[a].ArkDodgeAfter=="function","skill",(a)=>[a,lib.skill[a].ArkDodgeAfter]);
    		if(sd.length){
    			for(var i of sd){
    				var next=game.createEvent(i[0]+"ArkDodgeJudgeAfter");
    				next.player=player;
    				next._trigger=trigger;  
    				next.setContent(i[1]);  		   		
    			}    			
    		}
    		event.trigger("ArkDodgeJudgeAfter");
    		"step 2"
    		var tagD=player.getTagDodge(null,(obj)=>obj.tag&&obj.tag.remove);
    		for(var i of tagD){
    			var tag=i.tag.remove;
    			if(tag=="nothing"||(typeof tag.filter=="function"&&tag.filter(player,result.bool)&&tag.type=="nothing")){
    				player.arkDodges.remove(i);
    			}
    		}
    		if(result.bool){
    			var sd=player.getTagDodge(null,(a)=>lib.skill[a].ArkDodgeFinishBefore&&typeof lib.skill[a].ArkDodgeFinishBefore=="function","skill",(a)=>[a,lib.skill[a].ArkDodgeFinishBefore]);
    			if(sd.length){
    				for(var i of sd){
    					var next=game.createEvent(i[0]+"ArkDodgeJudgeFinishBefore");
    					next.player=player;
    					next._trigger=trigger;  
    					next.setContent(i[1]);  		   		
    				}   				
    			}
    			event.trigger("ArkDodgeJudgeFinishBefore");
    			var tagD=player.getTagDodge(null,(obj)=>obj.tag&&obj.tag.remove);
    			for(var i of tagD){
    				var tag=i.tag.remove;
    				if(tag=="yes"||(typeof tag.filter=="function"&&tag.filter(player,result.bool)&&tag.type=="yes")){
    					player.arkDodges.remove(i);
    				}
    			}
    			var sd=player.getTagDodge(null,(a)=>lib.skill[a].ArkDodgeFinishBegin&&typeof lib.skill[a].ArkDodgeFinishBegin=="function","skill",(a)=>[a,lib.skill[a].ArkDodgeFinishBegin]);
    			if(sd.length){
    				for(var i of sd){
    					var next=game.createEvent(i[0]+"ArkDodgeJudgeFinishBegin");
    					next.player=player;
    					next._trigger=trigger;  
    					next.setContent(i[1]);  		   		
    				}   				
    			}
    			event.trigger("ArkDodgeJudgeFinishBegin");
    			var sd=player.getTagDodge(null,(a)=>lib.skill[a].ArkDodgeFinishLog&&typeof lib.skill[a].ArkDodgeFinishLog=="function","skill",(a)=>[a,lib.skill[a].ArkDodgeFinishLog]);    	
    			if(sd.length){
    				for(var i of sd){
    					var next=game.createEvent(i[0]+"ArkDodgeJudgeFinishLog");
    					next.player=player;
    					next._trigger=trigger;  
    					next.setContent(i[1]);  		   		
    				}		
    			} else {
    				trigger.cancel();  
    				player.node.ArkMiss=ui.create.div(".ArkMiss",player);  	
    				player.node.ArkMiss.style.display='block'; 				
    				player.node.ArkMiss.innerHTML="Miss";
                    var num=setTimeout(()=>{      
                        player.node.ArkMiss.style.transform="translateY(-110%)";
                        clearTimeout(num);
                        var num=setTimeout(()=>{
                            player.removeChild(player.node.ArkMiss);
					        player.node.ArkMiss=null;
					        clearTimeout(num);					
				        },1550);
                    },50);		
    			}
    			event.trigger("arkDodgeRandomFinishEnd");
    			var sd=player.getTagDodge(null,(a)=>lib.skill[a].ArkDodgeFinishEnd&&typeof lib.skill[a].ArkDodgeFinishEnd=="function","skill",(a)=>[a,lib.skill[a].ArkDodgeFinishEnd]);
    			if(sd.length){
    				for(var i of sd){
    					var next=game.createEvent(i[0]+"ArkDodgeJudgeFinishBefore");
    					next.player=player;
    					next._trigger=trigger;  
    					next.setContent(i[1]);  		   		
    				}
    			}
    			event.trigger("ArkDodgeJudgeFinishBefore");
    			var sd=player.getTagDodge(null,(a)=>lib.skill[a].ArkDodgeFinishAfter&&typeof lib.skill[a].ArkDodgeFinishAfter=="function","skill",(a)=>[a,lib.skill[a].ArkDodgeFinishAfter]);
    			if(sd.length){
    				for(var i of sd){
    					var next=game.createEvent(i[0]+"ArkDodgeJudgeFinishAfter");
    					next.player=player;
    					next._trigger=trigger;  
    					next.setContent(i[1]);  		   		
    				}
    			}
    			event.trigger("ArkDodgeJudgeFinishAfter");
    		} else {
    			var sd=player.getTagDodge(null,(a)=>lib.skill[a].ArkDodgeFailBefore&&typeof lib.skill[a].ArkDodgeFailBefore=="function","skill",(a)=>[a,lib.skill[a].ArkDodgeFailBefore]);
    			if(sd.length){
    				for(var i of sd){
    					var next=game.createEvent(i[0]+"ArkDodgeJudgeFailBefore");
    					next.player=player;
    					next._trigger=trigger;  
    					next.setContent(i[1]);  		   		
    				}
    			}
    			event.trigger("ArkDodgeJudgeFailBefore");
    			var tagD=player.getTagDodge(null,(obj)=>obj.tag&&obj.tag.remove);
    			for(var i of tagD){
    				var tag=i.tag.remove;
    				if(tag=="no"||(typeof tag.filter=="function"&&tag.filter(player,result.bool)&&tag.type=="no")){
    					player.arkDodges.remove(i);
    				}
    			}
    			var sd=player.getTagDodge(null,(a)=>lib.skill[a].ArkDodgeFailBegin&&typeof lib.skill[a].ArkDodgeFailBegin=="function","skill",(a)=>[a,lib.skill[a].ArkDodgeFailBegin]);
    			if(sd.length){
    				for(var i of sd){
    					var next=game.createEvent(i[0]+"ArkDodgeJudgeFailBegin");
    					next.player=player;
    					next._trigger=trigger;  
    					next.setContent(i[1]);  		   		
    				}
    			}
    			event.trigger("ArkDodgeJudgeFailBegin");
    			var sd=player.getTagDodge(null,(a)=>lib.skill[a].ArkDodgeFailLog&&typeof lib.skill[a].ArkDodgeFailLog=="function","skill",(a)=>[a,lib.skill[a].ArkDodgeFailLog]);    		
    		 	if(sd.length){	
    		 		for(var i of sd){
    					var next=game.createEvent(i[0]+"ArkDodgeFailLog");
    					next.player=player;
    					next._trigger=trigger;  
    					next.setContent(i[1]);  		   		
    				}
    			};
    			event.trigger("arkDodgeRandomFailEnd");
    			var sd=player.getTagDodge(null,(a)=>lib.skill[a].ArkDodgeFailEnd&&typeof lib.skill[a].ArkDodgeFailEnd=="function","skill",(a)=>[a,lib.skill[a].ArkDodgeFailEnd]);
    			if(sd.length){
    				for(var i of sd){
    					var next=game.createEvent(i[0]+"ArkDodgeJudgeFailEnd");
    					next.player=player;
    					next._trigger=trigger;  
    					next.setContent(i[1]);  		   		
    				}
    			}
    			event.trigger("ArkDodgeJudgeFailEnd");
    			var sd=player.getTagDodge(null,(a)=>lib.skill[a].ArkDodgeFailAfter&&typeof lib.skill[a].ArkDodgeFailAfter=="function","skill",(a)=>[a,lib.skill[a].ArkDodgeFailAfter]);
    			if(sd.length){
    				for(var i of sd){
    					var next=game.createEvent(i[0]+"ArkDodgeJudgeFailAfter");
    					next.player=player;
    					next._trigger=trigger;  
    					next.setContent(i[1]);  		   		
    				}
    			}
    			event.trigger("ArkDodgeJudgeFailAfter");
    		}
    	},
    };
    var nodeintro=get.nodeintro;
    get.nodeintro=function (node,simple,evt){
    	var nod=nodeintro(node,simple,evt),
    	table=nod.querySelector("table"),td;
    	if(table&&(get.arkDodge||node.getarkDodge)){ 
    		var a1=(get.arkDodge(node)[0]==-1?"-":Math.trunc(get.arkDodge(node)[0]*100)),a2=(get.arkDodge(node)[1]==-1?"-":Math.trunc(get.arkDodge(node)[1]*100));
    		td=document.createElement('td');
    		td.innerHTML="闪避";
    		table.childNodes[0].insertBefore(td,table.childNodes[0].childNodes[table.childNodes[0].childNodes.length]); 
    		td=document.createElement('td');
    		if(a1==a2){
    			td.innerHTML=a1;
    		} else {
    			td.innerHTML=a1+"/"+a2;
    		}
    		table.childNodes[1].insertBefore(td,table.childNodes[1].childNodes[table.childNodes[1].childNodes.length]);     		
    	};
    	return nod;
    };
    //自定义背景音乐
    game.arkBgm = function(){
        if(lib.config.ark_backgroundmusic) var bgm = lib.config.ark_backgroundmusic
        if(bgm && bgm != 'origin'){
            ui.backgroundMusic.src = lib.assetURL+'extension/无名方舟/arkBgm/'+bgm+'.mp3';
            ui.backgroundMusic.addEventListener('ended',game.arkBgm);
        }
        else{
            game.playBackgroundMusic();
            ui.backgroundMusic.addEventListener('ended',game.playBackgroundMusic);   
        }
    };
    game.arkBgp = function(){
        if(lib.config.ark_backgroundpicture) var bgp = lib.config.ark_backgroundpicture
        if(bgp && bgp != 'origin'){
            ui.background.setBackgroundImage('extension/无名方舟/arkBgp/'+bgp+'.png');
        }
        else{
            ui.background.setBackgroundImage('image/background/'+lib.config.image_background+'.jpg'); 
        }
    };
    //肉鸽
    window.ark_r={		
		"p" (){return this.data.present},
		"n" (){return this.data.nodes},
		"c" (){return this.data.capsule},
		"r" (){return this.data.relic},
		"i" (){return this.data.incident},
		"w" (){return this.data.wish},
		"d" (){return this.data},
		"o" (t){
			var o=this.data.occupation;
			if(t=="近"||t=="w")return o.w;
			if(t=="狙"||t=="n")return o.n;
			if(t=="术"||t=="c")return o.c;
			if(t=="先"||t=="p")return o.p;
			if(t=="特"||t=="s")return o.s;
			if(t=="重"||t=="a")return o.a;
			if(t=="辅"||t=="u")return o.u;
			if(t=="医"||t=="m")return o.m;
			return o;
		},
		"data":{
			//全部节点
			"nodes":{
				"xxx":{
					"name":"事件名",
					"name2":"副名称，显示在节点下方",
					"info":"描述",
					"child":{
						//子节点，主节点内容为子节点中随机一个
					},
				},
				//战斗节点
				"active":{
					"name":"战斗",
					"child":{
						"意外":{
							//使主节点的副名称变为该节点名称
							"name2":true,
							"info":"演员们正在此处练习如何在降落时躲避陷阱，而你的到来增大了他们训练的难度系数。",
							"content":{
								"enemy":{
									//角色名称
									"name":{
										//位置
										"p":1,										
										//初始手牌数增加数
										"s":0,
										//防御力增加
										"d":0,
										//攻击力增加
										"a":0,
										//初始化，登场时触发										
										"i":function(player){},										
									}														
								},
								//关卡特殊效果，还没写（
								"effect":{
									//仅对敌方生效的效果
									"e":{},
									//仅对友方
									"y":{},
									//双方
									"ey":{}
								},
								"init":function (p,d,r,t){},
							}
						}
					}
				}
			},
			//剧目，摆（
			"capsule":{				
				"name":{
					"info":"",
					"content":{
					},
				},
			},
			//收藏品
			"relic":{
				"收藏品名称":{
					"name":"",
					"info":"描述",
					"info2":"效果描述",
					"image":"图片路径",
					//解锁条件
					"filter":function (p,d,r,t){},
					//是否拥有
					"have":false,
					"content":{
						//初始化，获得时触发
						"init":function (p,d,r,t){},
					},
				},
			},
			//事件
			"incident":{
				"xxx":{
					"name":"名称",
					"info":"描述",
					//选项
					"config":{
						"xxx":{
							"name":"",
							"info":"",
							//点击事件
							"click":function (){},
							"filter":function (p,d,r,t){
								//p为present，d为data，r为relic，t为此事件
								return p.hp>0;
							},
						}
					}
				}
			},
			//当前数据
			"present":{
				//当前区域，第几章
				"zoon":null,
				//当前出现的幻觉
				"hallucination":[],
				//当前剧目
				"capsule":null,
				//战术道具
				"activeTool":null,
				//源石锭
				"gold":null,
				//希望
				"wish":null,
				//血量
				"hp":null,
				//等级
				"level":null,
				//经验
				"exp":null,
				//收藏品
				"relic":[],
				//干员
				"gy":[],
				//当前节点
				"node":null,
				//已进入过的所有节点
				"nodes":[],
				//敌人
				"enemy":[],						
				//开摆
			},
			//希望消耗
			"wish":{
				"legend":"6",
				"epic":"3",
				"rare":"2",
				"advanced":{
					"legend":"3",
					"epic":"2",
					"rare":"1"
				}
			},
			"occupation":{"p":[],"a":[],"s":[],"n":[],"c":[],"w":[],"u":[],"m":[]},
			"w":"近卫","c":"术士","n":"狙击","p":"先锋","s":"特种","a":"重装","u":"辅助","m":"医疗",	
		},
	};
    game.ark_Refresh=function () {
    	if(document.querySelector(".menu-tab")&&document.querySelector(".menu-tab").childNodes){
    		var list=document.querySelector(".menu-tab").childNodes;
    		for(var i=0;i<list.length;i++){ 
    			if(list[i].innerHTML=='扩展'){ 
    				var list2=list[i]._link.childNodes; 
    				for(var j=0;j<list2.length;j++){ 
    					if(list2[j].classList.contains('left')){
    						var list3=list2[j].childNodes; 
    						for(var z=0;z<list3.length;z++){ 
    							if(list3[z].innerHTML=='无名方舟'){ 
    								var list4=list3[z].link.childNodes;    							
    								for(var k=0;k<list4.length;k++){ 
    									if(list4[k].innerHTML.indexOf('龙门币数量:')!=-1){ 
    										list4[k].innerHTML='<span>龙门币数量:'+lib.config.ark_lmb+"</span>"; 
    									};
    								} 
    							}
    						} 
    					} 
    				} 
    			} 
    		}
    	}
    };  
    var arkYW = {
        init:function(){
            var brawl = {
                name:'云雾飘渺',
                mode:'identity',
                intro:[
                    '游戏人数：8人',
                    '游戏规则：所有角色初始拥有20%物理与法术双闪，游戏拥有多个特殊效果，每轮开始时随机执行一条特殊效果',
                    '游戏目标：击杀所有其他玩家，最终存活的玩家为胜利者。',
                    '击杀奖惩：击杀一名其他角色后，摸三张牌，分别随机获得5%-10%物理与法术闪避',
                    '可用武将：无名方舟所有武将（禁用杜林，12F），可在扩展设置中开放所有非禁用武将',
                ],
                content:{
                    submode:'normal',
                    cardPile:function(){
                        return lib.cardPile.standard.concat(lib.cardPile.extra);
                    },
                    chooseCharacterBefore:function(){
                        _status.firstAct = game.zhu = game.players.randomGet();
                        var current = _status.firstAct , currentSeat = 0;
                        var element = {
                            logAi:function(){},
                            dieAfter:function(source){
                                game.checkResult();
                                if(source){
                                    source.draw(3);
                                    if(!source.storage.ark_yw_kw) source.storage.ark_yw_kw=0
                                    if(!source.storage.ark_yw_kf) source.storage.ark_yw_kf=0
                                    source.storage.ark_yw_kw+=[5,6,7,8,9,10].randomGet();
                                    source.storage.ark_yw_kf+=[5,6,7,8,9,10].randomGet();
                                }
                            },
                        };
                        while(true){
                            current.arkSeat = currentSeat;
                            current.identity = 'nei';
                            current.ai.shown = 1;
                            current.update();
                            for(var i in element){
                                current[i] = element[i];
                            }
                            currentSeat++;
                            current = current.next;
                            if(current == _status.firstAct) break;
                        }
                        get.rawAttitude = function(from,to){
                            if(from==to) return 10;
                            return -10;
                        };
                        game.showIdentity(true);
                        game.checkResult = function(){
                            if(game.players.length==1){
                                if(game.me.classList.contains('dead')==false) game.over(true);
                                else game.over(false);
                            }
                        };
                        game.chooseCharacter = function(){
                            var next=game.createEvent('chooseCharacter',false);
                            next.showConfig=true;
                            next.ai = function(player,list){
                                player.init(list.randomGet());
                            };
                            next.setContent(function(){
                                'step 0'
                                ui.arena.classList.add('choose-character');
                                event.list1 = [];
                                var group = ['ark'];
                                for(var i in lib.character){
                                    var info = lib.character[i];
                                    if(!lib.config.ark_configyw_character){
                                        if(!group.contains(info[1])) continue;
                                    }
                                    if(['ark_durin','ark_12F'].contains(i)) continue;
                                    event.list1.push(i);
                                }
                                event.players = game.filterPlayer();
                                event.characterList = event.list1;
                                'step 1'
                                event.current = event.players.shift();
                                if(event.current == game.me){
                                    var list = event.characterList.randomRemove(5);
                                    var dialog = ui.create.dialog('请选择您的武将','hidden');
                                    dialog.add([list,'character']);
                                    game.me.chooseButton(dialog,true).set('filterButton',function(button){
                                        return !game.hasPlayer(function(current){
                                            return current.name == button.link;
                                        });
                                    }).set('onfree',true);
                                    event.current.classList.add('selectedx');
                                }
                                else {
                                    event.ai(event.current,event.characterList.randomRemove(5));
                                    if(event.players.length) event.redo();
                                    else event.goto(3);
                                }
                                'step 2'
                                event.current.init(result.links[0]);
                                event.current.classList.remove('selectedx');
                                if(event.players.length) event.goto(1);
                                'step 3'
                                delete game.arkPack;
                                setTimeout(function(){
                                    ui.arena.classList.remove('choose-character');
                                },500);
                            });
                        };
                    },
                },
            };
            brawl.showcase = function(init){};
            brawl.init = function(){
                game.cxyPack = arkYW.pack;
                for(var i in arkYW.config){
                    game.saveConfig(i,arkYW.config[i],'identity');
                }
                for(var i in arkYW.pack){
                    for(var k in arkYW.pack[i]){
                        lib[i][k] = arkYW.pack[i][k];
                    }
                }
            };
            lib.brawl.arkYW = brawl;
        },
        pack:{
            character:{
            },
            card:{
            },
            skill:{
                _yw_skill:{
                    trigger:{
                        global:"roundStart",
                    },
                    filter:function (event,player){
                        return _status.roundStart==player;
                    },
                    forced:true,
                    content:function (){
                        /*if(game.roundNumber==1){
                            game.filterPlayer(function(current){
                                current.addSkill('yw_dodge')
                            })
                        }*/
                        var result=['yw1','yw2','yw3','yw4','yw5','yw6','yw7','yw8'].randomGet();
                        var dialog=['云雾飘渺：本轮的特殊效果为：'+get.translation(result)];
                        for(var i=0;i<game.players.length;i++){
                            game.players[i].chooseControl('ok').set('dialog',dialog);
                        }
                        var current=_status.roundStart
                        while(true){
                            current.storage.ark_yw_w=0
                            current.storage.ark_yw_f=0
                            if(result=='yw1'){
                                current.storage.ark_yw_w=15
                            }
                            if(result=='yw2'){
                                current.storage.ark_yw_f=15
                            }
                            if(result=='yw3'){
                                current.storage.ark_yw_w=10
                                current.storage.ark_yw_f=10
                            }
                            if(result=='yw4'){
                                current.loseHp()
                            }
                            if(result=='yw5'){
                                current.recover()
                            }
                            if(result=='yw6'){
                                current.draw([1,2,3].randomGet())
                                current.discard(current.getCards('he').randomGets([1,2,3].randomGet()))
                            }
                            if(result=='yw7'){
                                current.addTempSkill('yw_eff6','roundStart')
                            }
                            if(result=='yw8'){
                                if(!current.isLinked()){
                                    current.link()
                                }
                            }
                            current=current.next
                            if(current==_status.roundStart) break;
                        }
                    },
                },
                _yw_dodge:{
                    mod:{
                        arkDodge:function (player,type){
                            var num1=20
                            var num2=20
                            var w=player.storage.ark_yw_w
                            var f=player.storage.ark_yw_f
                            var kw=player.storage.ark_yw_kw
                            var kf=player.storage.ark_yw_kf
                            if(w&&w>0) num1+=w
                            if(f&&f>0) num2+=f
                            if(kw&&kw>0) num1+=kw
                            if(kf&&kf>0) num2+=kf
                            num1=Math.trunc(num1)
                            num2=Math.trunc(num2)
                            return [num1,num2]
                        }, 
                    }
                },
                yw_eff6:{
                    trigger:{
                        player:"damageBegin3",
                    },
                    filter:function(event,player){
                        return event.nature
                    },
                    silent:true,
                    content:function(){
                        trigger.num++
                    },
                },
            },
            translate:{
                arkYW:'云雾飘渺',
                yw1:'本轮物理闪避+15%<br>雾气变得更浓，更容易躲避敌方的攻击',
                yw2:'本轮法术闪避+15%<br>雾气变得更浓，更容易躲避敌方的攻击',
                yw3:'本轮物法双闪+10%<br>雾气变得更浓，更容易躲避敌方的攻击',
                yw4:'所有角色失去一点体力<br>这雾有毒！',
                yw5:'所有角色回复一点体力<br>你发现在雾中你的伤口可以迅速愈合',
                yw6:'所有角色随机摸1-3张牌，然后随机弃置1-3张牌<br>长期处在雾中，你产生了幻觉',
                yw7:'所有角色受到的属性伤害+1<br>空气中似乎有很多粉尘……',
                yw8:'所有角色进入连环状态<br>空气中似乎有很多粉尘……',
                yw_eff6:'粉尘',
            }
        },
        config:{
            player_number: '8',
            double_character: false,
        },
    };
    if(lib.brawl&&(lib.config.ark_configyw_open==true||lib.config.ark_configyw_open===undefined)) arkYW.init();
    window.arkRef=setInterval(()=>{
    	game.ark_Refresh();
    },500);
},precontent:function(arknights){
    if(lib.config.ark_lmb===undefined){
        lib.config.ark_lmb=1000
    }
    lib.config.ark_twostars=['ark_noircorne','ark_yato','ark_durin','ark_12F','ark_rangers']
    lib.config.ark_threestars=['ark_vanilla','ark_melantha','ark_cardigan','ark_ansel','ark_hibiscus','ark_steward','ark_kroos','ark_midnight','ark_beagle','ark_adnachiel','ark_fang']
    lib.config.ark_fourstars=['ark_dobermann','ark_myrtle','ark_podenco','ark_varmeil','ark_purestream','ark_shaw','ark_rope','ark_jaye','ark_arene','ark_conviction','ark_roberta','ark_gitano','ark_pinecone','ark_deepcolor','ark_cuora']
    lib.config.ark_fivestars=['ark_lappland','ark_specter','ark_mrnothing','ark_leizi','ark_bison','ark_swire','ark_snowsant','ark_amiya','ark_astesia','ark_texas','ark_projectred','ark_executor','ark_kafka','ark_warfarin','ark_scene','ark_shamare']
    lib.config.ark_sixstars=['ark_passenger','ark_exusiai','ark_dusk','ark_nian','ark_chen','ark_hoshiguma','ark_shining','ark_saileach','ark_nightingale','ark_aak','ark_ceobe','ark_archetto','ark_blaze','ark_magallan','ark_lings']
    lib.config.ark_yigecharacters=['ark_amiya','ark_dusk','ark_aak']
    lib.config.ark_upcharacter=1
    lib.config.ark_allCharacter=lib.config.ark_sixstars.concat([...lib.config.ark_fivestars,...lib.config.ark_fourstars,...lib.config.ark_threestars,...lib.config.ark_twostars]);   
    game.saveConfig('ark_upcharacter',lib.config.ark_upcharacter);
    game.saveConfig('ark_lmb',lib.config.ark_lmb);
    game.saveConfig('ark_expcard',lib.config.ark_expcard);
    game.saveConfig('ark_characterlist',lib.config.ark_characterlist);
    game.saveConfig('ark_twostars',lib.config.ark_twostars);
    game.saveConfig('ark_threestars',lib.config.ark_threestars);
    game.saveConfig('ark_fourstars',lib.config.ark_fourstars);
    game.saveConfig('ark_fivestars',lib.config.ark_fivestars);
    game.saveConfig('ark_sixstars',lib.config.ark_sixstars);
    game.saveConfig('ark_yigecharacters',lib.config.ark_yigecharacters);
    game.saveConfig('ark_allCharacter',lib.config.ark_allCharacter);
    //————角色初始设定————//
    if(!lib.config.ark_characterdata){
        var obj=new Object
        game.saveConfig('ark_characterdata',obj)
    }
    var data=lib.config.ark_characterdata
    for(var i=0;i<lib.config.ark_twostars.length;i++){
        var chr=lib.config.ark_twostars[i]
        if(data[chr]==undefined){
            data[chr]=new Object
            data[chr].star=2
            data[chr].mpro=0
            data[chr].have=true
        }
    }
    for(var i=0;i<lib.config.ark_threestars.length;i++){
        var chr=lib.config.ark_threestars[i]
        if(data[chr]==undefined){
            data[chr]=new Object
            data[chr].star=3
            data[chr].mpro=1
            data[chr].have=false
        }
        if(['ark_beagle','ark_kroos','ark_hibiscus','ark_fang'].contains(chr)){
            data[chr].have=true
        }
    }
    for(var i=0;i<lib.config.ark_fourstars.length;i++){
        var chr=lib.config.ark_fourstars[i]
        if(data[chr]==undefined){
            data[chr]=new Object
            data[chr].star=4
            data[chr].mpro=2
            data[chr].have=false
        }
    }
    for(var i=0;i<lib.config.ark_fivestars.length;i++){
        var chr=lib.config.ark_fivestars[i]
        if(data[chr]==undefined){
            data[chr]=new Object
            data[chr].star=5
            data[chr].mpro=2
            data[chr].have=false
            if(chr=='ark_amiya') data[chr].have=true
        }
    }
    for(var i=0;i<lib.config.ark_sixstars.length;i++){
        var chr=lib.config.ark_sixstars[i]
        if(data[chr]==undefined){
            data[chr]=new Object
            data[chr].star=6
            data[chr].mpro=2
            data[chr].have=false
        }
    }
    //角色皮肤设定
    for(var i=0;i<lib.config.ark_allCharacter.length;i++){
        var chr=lib.config.ark_allCharacter[i]
        if(data[chr].skin==undefined){
            data[chr].skin=0
        }
    }
    var skinList={
        'ark_amiya':3,
        'ark_ansel':1,
        'ark_cardigan':1,
        'ark_chen':1,
        'ark_dobermann':1,
        'ark_exusiai':2,
        'ark_hoshiguma':1,
        'ark_lappland':1,
        'ark_jaye':1,
        'ark_melantha':1,
        'ark_nian':1,
        'ark_podenco':1,
        'ark_rope':2,
        'ark_shaw':1,
        'ark_specter':1,
        'ark_swire':1,
    }
    //角色异格设定
    data.ark_amiya.names=['术士阿米娅','近卫阿米娅']
    data.ark_dusk.names=['夕','夕·行墨']
    data.ark_aak.names=['阿','正弦']
    //
    game.saveConfig('ark_skinConfig',skinList)
    game.saveConfig('ark_characterdata',lib.config.ark_characterdata)
    //武将包
    if(arknights.enable){
        game.import('character',function(){
            var arknights_character={
                name:"arknights_character", 
                connect:true,
                character:{
                    ark_noircorne:["male","ark",4,["ark_jingyan"],[]],
                    ark_yato:["female","ark",3,["ark_xianfeng","ark_zhuanyi"],[]],
                    ark_12F:["male","ark",3,["ark_shanbi","ark_jianshe"],[]],
                    ark_rangers:["male","ark",3,["ark_kongshe"],[]],
                    ark_durin:["female","ark",3,["ark_xingyun"],[]],
                    ark_vanilla:["female","ark",3,["ark_chongfeng"],[]],
                    ark_lappland:["female","ark",4,["ark_recuixiu","ark_rerigui","ark_relanghun"],[]],
                	  ark_dobermann:["female","ark",4,["ark_jiaoguan","ark_biance"],[]],
                	  ark_passenger:["male","ark",3,["ark_chilian","ark_jiexi","ark_huihuang"],[]],
                	  ark_melantha:["female","ark",4,["ark_jianyi"],[]],
                	  ark_myrtle:["female","ark",3,["ark_juqi","ark_yuejin"],[]],
                	  ark_cardigan:["female","ark",4,["ark_huoli"],[]],
                	  ark_specter:["female","ark",4,["ark_lianju","ark_guduan",'ark_zaisheng'],[]],
                	  ark_ansel:["male","ark",3,["ark_yaoli"],[]],
                	  ark_hibiscus:["female","ark",3,["ark_yingyang"],[]],
                	  ark_steward:["male","ark",3,["ark_pokai","ark_zhenmi"],[]],
                	  ark_varmeil:["female","ark",3,["ark_lieshou","ark_shuangxian"],[]],
                	  ark_exusiai:["female","ark",3,["ark_guozai","ark_zhufu"],[]],
                	  ark_mrnothing:["male","ark",3,["ark_wuyouskill","ark_zhitui","ark_yinqing"],[]],
                	  ark_podenco:["female","ark",3,["ark_huaxiang","ark_baozi"],[]],
                    ark_dusk:lib.config.ark_characterdata.ark_dusk.yige==true?["female","ark",3,["ark_huixing","ark_huiming"],[]]:["female","ark",3,["ark_dianjing","ark_ruhua"],[]],
       	      	      ark_nian:["female","ark",5,["ark_panzhen","ark_tongyin","ark_tieyu"],[]],
        	          ark_leizi:["female","ark",3,["ark_chilian_ark_leizi","ark_chulei"],[]],
        	          ark_purestream:["female","ark",3,["ark_yongquan"],[]],
               	     ark_swire:["female","ark",4,["ark_tongchou"],[]],
                	  ark_chen:["female","ark",4,["ark_qiaoji","ark_badao"],[]],
                	  ark_bison:["male","ark",5,["ark_zhenxian"],[]],
                    ark_rope:["female","ark",3,["ark_gouzhua"],[]],
        	          ark_shaw:["female","ark",3,["ark_shuibeng","ark_shuipao"],[]],
                	  ark_snowsant:["female","ark",3,["ark_chouqin","ark_buwang"],[]],
                	  ark_jaye:["male","ark",3,["ark_shijing","ark_tanfan"],[]],
                	  ark_hoshiguma:["female","ark",5,["ark_zhanyi","ark_jingji","ark_banruo"],[]],
                    ark_amiya:lib.config.ark_characterdata.ark_amiya.yige==true?["female","ark",4,["ark_benye","ark_jueyingamiya"],[]]:["female","ark",3,["ark_gonggan","ark_pojie"],[]],
                	  ark_shining:["female","ark",3,["ark_bihu","ark_xintiao","ark_jiejie"],[]],
                	  ark_saileach:["female","ark",3,["ark_junqi","ark_huiguang"],[]],
                	  ark_astesia:["female","ark",4,["ark_xinghui","ark_tianyi"],[]],
                	  ark_kroos:["female","ark",3,["ark_yaohai","ark_sushe"],[]],
                	  ark_texas:["female","ark",4,["ark_kuaidi","ark_jianyu","ark_enyuan"],[]],
                	  ark_arene:["male","ark",4,["ark_fuzhi","ark_rongshi","ark_fangdu"],[]],
                	  ark_nightingale:["female","ark",3,["ark_wange","ark_huanying","ark_shengyu"],[]],
                	  ark_projectred:["female","ark",2,["ark_cigu","ark_langqun"],[]],
                    ark_aak:lib.config.ark_characterdata.ark_aak.yige==true?["male","ark",4,["ark_zhenli","ark_xushiaak"],[]]:["male","ark",3,["ark_yaoji","ark_guaijie","ark_duyi"],[]],
                	  ark_conviction:["duanzui","ark",4,["ark_wenjiang","ark_duanzui","ark_chuangshi"],[]],
                	  ark_ceobe:["female","ark",3,["ark_baoke","ark_baibing"],[]],
                	  ark_executor:["male","ark",4,["ark_zhiyi","ark_lvmo"],[]],
                	  ark_roberta:["female","ark",3,["ark_qiaozhuang","ark_jiangyun"],[]],
                    ark_archetto:["female","ark",3,["ark_xiannan","ark_tiexian"],[]],
                    ark_gitano:["female","ark",3,["ark_buce","ark_mingding"],[]],
                    ark_kafka:["female","ark",2,["ark_wudao","ark_mofang"],[]],
                    ark_blaze:["female","ark",4,["ark_chuchan","ark_haolie"],[]],
                    ark_warfarin:["female","ark",3,['ark_xuejiang','ark_xuenu'],[]],
                    ark_pinecone:["female","ark",4,['ark_gongcheng','ark_sheding'],[]],
                    ark_magallan:["female","ark",3,['ark_xianbei','ark_longteng','ark_zheshe'],[]],
                    ark_scene:["female","ark",3,['ark_jingtou','ark_yingxiang'],[]],
                    ark_deepcolor:["female","ark",3,['ark_danxiang','ark_guiyuan'],[]],
                    ark_midnight:["male","ark",4,["ark_shanjiao","ark_xushi"],[]],
                    ark_lings:["female","ark","3/6",["ark_shiyi","ark_huihao","ark_jinjiu"],[]],
                    ark_cuora:["female","ark",4,["ark_keyu","ark_jianjia"],[]],
                    ark_shamare:["female","ark",3,['ark_kuishi','ark_zhoushi'],[]],
                    ark_beagle:["female","ark",4,['ark_jianyou'],[]],
                    ark_adnachiel:["male","ark",3,['ark_poxian','ark_minjue'],[]],
                    ark_fang:["female","ark",4,['ark_jianqu'],[]],
                },
                characterIntro:{
                    ark_vanilla:'黑钢先锋干员香草，将用其专业技术为团队打开战场。<br><i>遇见野生生物的时候请不要让她处理。</i><br><br><li>基础档案</font><br>【代号】香草<br>【性别】女<br>【战斗经验】一年<br>【出身地】瓦伊凡<br>【生日】2月16日<br>【种族】瓦伊凡<br>【身高】172cm<br>【矿石病感染情况】参照医学检测报告，确认为非感染者。<br><br><li>综合体检测试</font><br>【物理强度】标准<br>【战场机动】标准<br>【生理耐受】优良<br>【战术规划】普通<br>【战斗技巧】标准<br>【源石技艺适应性】普通<br><br><li>客观履历</font><br>黑钢的受训生，作为双方交流项目的一环驻扎学习。利用种族带来的抗打击能力，出色地履行着先锋干员的职责。',
                    ark_lappland:'干员拉普兰德，迫不及待想要切开眼前的敌人。<br><i>祈祷吧，祈祷她会听从你的指挥。</i><br><br><li>基础档案</font><br>【代号】拉普兰德<br>【性别】女<br>【战斗经验】五年<br>【出身地】叙拉古<br>【生日】11月11日<br>【种族】鲁珀<br>【身高】162cm<br>【矿石病感染情况】参照医学检测报告，确认为感染者。<br><br><li>综合体检测试</font><br>【物理强度】优良<br>【战场机动】标准<br>【生理耐受】标准<br>【战术规划】标准<br>【战斗技巧】卓越<br>【源石技艺适应性】优良<br><br><li>客观履历</font><br>拉普兰德，身份不明，履历缺失。于战术攻坚与肃清作战中展现出十足的歼灭能力。现作为近卫干员，为罗德岛提供特别行动服务。',
                    ark_dobermann:'罗德岛新人教官杜宾，能够随时为你提供战场上的各项建议。<br><i>你永远需要一位老兵的建议。</i><br><br><li>基础档案</font><br>【代号】杜宾<br>【性别】女<br>【战斗经验】六年<br>【出身地】玻利瓦尔<br>【生日】5月27日<br>【种族】佩洛<br>【身高】163cm<br>【矿石病感染情况】参照医学检测报告，确认为感染者。<br><br><li>综合体检测试</font><br>【物理强度】标准<br>【战场机动】标准<br>【生理耐受】标准<br>【战术规划】优良<br>【战斗技巧】优良<br>【源石技艺适应性】标准<br><br><li>客观履历</font><br>前玻利瓦尔军人，加入罗德岛后担任教官，主要负责基层和新晋干员培训，必要时刻，也会负责对俘虏的审讯。熟悉各种规模的军事行动，自身作为士兵的素养也极高，作为近卫干员，在第一线带领队伍冲锋陷阵。',
                    ark_passenger:'工程干员异客，将以雷霆手段惩罚敌手。<br><i>他的各类自走兵器只有型号而没有名称，迭代的时候有点难分辨。</i><br><br><li>基础档案</font><br>【代号】异客<br>【性别】男<br>【战斗经验】十六年<br>【出身地】哥伦比亚<br>【生日】9月1日<br>【种族】黎博利<br>【身高】187cm<br>【矿石病感染情况】体表有源石结晶分布，参照医学检测报告，确认为感染者。<br><br><li>综合体检测试</font><br>【物理强度】普通<br>【战场机动】标准<br>【生理耐受】标准<br>【战术规划】优良<br>【战斗技巧】标准<br>【源石技艺适应性】优良<br><br><li>客观履历</font><br>哥伦比亚出身的干员异客，曾在十三岁时就以极其优异的成绩跳级毕业，随后被源石工程与应用学专家索恩教授相中提拔为研究助手，进入布莱恩创生科技的研究所学习。于近二十余年前随某项目深入萨尔贡，之后销声匿迹。之后以伊巴特地区黑市主要成员的身份与罗德岛接触，并在脱离黑市后，单纯以感染者身份来到罗德岛接受治疗，并以工程部干员的身份活跃在各项行动中。',
                    ark_noircorne:'罗德岛重装干员黑角，将为队友提供坚实的防御力量。<br><i>每天都能看见他仔细擦拭面具的身影。</i><br><br><li>基础档案</font><br>【代号】黑角<br>【性别】男<br>【战斗经验】八年<br>【出身地】东<br>【生日】8月30日<br>【种族】鬼<br>【身高】180cm<br>【矿石病感染情况】参照医学检测报告，确认为感染者。<br><br><li>综合体检测试</font><br>【物理强度】标准<br>【战场机动】普通<br>【生理耐受】优良<br>【战术规划】普通<br>【战斗技巧】普通<br>【源石技艺适应性】标准<br><br><li>客观履历</font><br>罗德岛的基础干员之一，上战场冲在最前线保护队友，回到方舟上退居后勤默默工作的实干型角色。',
                    ark_yato:'罗德岛先锋干员夜刀，将在战场上为小队赢得可观的优势。<br><i>喜欢她努力修行的样子。</i><br><br><li>基础档案</font><br>【代号】夜刀<br>【性别】女<br>【战斗经验】八年<br>【出身地】东<br>【生日】5月14日<br>【种族】鬼<br>【身高】161cm<br>【矿石病感染情况】参照医学检测报告，确认为感染者。<br><br><li>综合体检测试</font><br>【物理强度】标准<br>【战场机动】优良<br>【生理耐受】标准<br>【战术规划】标准<br>【战斗技巧】标准<br>【源石技艺适应性】标准<br><br><li>客观履历</font><br>基础干员之一，同时也是他们的组长，忠诚可靠的武士。',
                    ark_12F:'罗德岛术师干员12F，将用源石技艺为小队提供战术援助。<br><i>至少能帮上些忙。</i><br><br><li>基础档案</font><br>【代号】12F<br>【性别】男<br>【战斗经验】五年<br>【出身地】不明<br>【生日】3月3日<br>【种族】萨弗拉<br>【身高】181cm<br>【矿石病感染情况】参照医学检测报告，确认为非感染者。<br><br><li>综合体检测试</font><br>【物理强度】普通<br>【战场机动】优良<br>【生理耐受】普通<br>【战术规划】普通<br>【战斗技巧】普通<br>【源石技艺适应性】标准<br><br><li>客观履历</font><br>12F，为该干员被雇佣时常使用的代号。根据自身汇报履历于多个势力之间游荡，并活跃在过去几年较为著名的几次势力冲突之中。仅有的少量可查证的资料也确认12F曾在这部分作战中以基础的雇佣兵，或是本地设施保全人员的身份参与到行动中。与巨枭一起加入罗德岛，因特殊的经历和战场经验被录用。现作为常规术士干员加入到罗德岛的常规任务中。',
                    ark_durin:'罗德岛术师干员杜林，将以源石技艺为小队构筑战略优势。<br><i>她看起来十分困乏。</i><br><br><li>基础档案</font><br>【代号】杜林<br>【性别】女<br>【战斗经验】两年<br>【出身地】未公开<br>【生日】12月15日<br>【种族】杜林<br>【身高】131cm<br>【矿石病感染情况】参照医学检测报告，确认为感染者。<br><br><li>综合体检测试</font><br>【物理强度】缺陷<br>【战场机动】普通<br>【生理耐受】缺陷<br>【战术规划】普通<br>【战斗技巧】普通<br>【源石技艺适应性】优良<br><br><li>客观履历</font><br>杜林，罗德岛A4行动组所属干员。有着较强的法术天赋，但因自身性格和体质原因无法完全施展。极度嗜睡，会随时在任何地方进入睡眠状态，日均睡眠时间远高于干员平均值，但工作却鲜少有缺漏。',
                    ark_melantha:'罗德岛近卫干员玫兰莎，将为小队提供优秀的进攻能力。<br><i>绝不要小看她的长刀。</i><br><br><li>基础档案</font><br>【代号】玫兰莎<br>【性别】女<br>【战斗经验】半年<br>【出身地】维多利亚<br>【生日】3月19日<br>【种族】菲林<br>【身高】161cm<br>【矿石病感染情况】参照医学检测报告，确认为感染者。<br><br><li>综合体检测试</font><br>【物理强度】优良<br>【战场机动】优良<br>【生理耐受】普通<br>【战术规划】标准<br>【战斗技巧】标准<br>【源石技艺适应性】标准<br><br><li>客观履历</font><br>玫兰莎，行动预备组A4组长，维多利亚公民，正式任职前为普通感染者，无职业。于多项测试中获得优异成绩，遂获准加入罗德岛。',
                    ark_myrtle:'罗德岛先锋干员桃金娘，将会带领其他干员冲锋陷阵！<br><i>或许可以让她和凛冬交流一下。</i><br><br><li>基础档案</font><br>【代号】桃金娘<br>【性别】女<br>【战斗经验】没有战斗经验<br>【出身地】未公开<br>【生日】12月13日<br>【种族】杜林<br>【身高】131cm<br>【矿石病感染情况】参照医学检测报告，确认为非感染者。<br><br><li>综合体检测试</font><br>【物理强度】标准<br>【战场机动】标准<br>【生理耐受】标准<br>【战术规划】优良<br>【战斗技巧】标准<br>【源石技艺适应性】标准<br><br><li>客观履历</font><br>杜林族出身的少女，根据本人强烈要求，记录此前履历为：大将军。外表与性格有孩子气的成分，但在战场上表现出颇强的感染力和相当的指挥水准，能够在提振其他干员士气的同时，为他们提供一定的治疗，十分可靠。',
                    ark_rangers:'罗德岛狙击干员巡林者，将以长弓挫败敌人攻击。<br><i>充满了活力，完全不像个老人。</i><br><br><li>基础档案</font><br>【代号】巡林者<br>【性别】男<br>【战斗经验】五年<br>【出身地】未公开<br>【生日】7月22日<br>【种族】萨弗拉<br>【身高】179cm<br>【矿石病感染情况】参照医学检测报告，确认为非感染者。<br><br><li>综合体检测试</font><br>【物理强度】普通<br>【战场机动】优良<br>【生理耐受】普通<br>【战术规划】普通<br>【战斗技巧】优良<br>【源石技艺适应性】普通<br><br><li>客观履历</font><br>巡林者，罗德岛A4行动组所属干员。罗德岛老员工，曾经游历过许多地方，现在则留在罗德岛服从调配。专业的弓手，年事已高，但依旧保持着萨弗拉特有的敏捷与活力。',
                    ark_cardigan:'罗德岛重装干员卡缇，时刻奔跑在战场上为队友提供可靠的防御。<br><i>如果能停下来就更好了......</i><br><br><li>基础档案</font><br>【代号】卡缇<br>【性别】女<br>【战斗经验】半年<br>【出身地】莱塔尼亚<br>【生日】8月2日<br>【种族】佩洛<br>【身高】156cm<br>【矿石病感染情况】体表未发现任何源石结晶，确认为非感染者。<br><br><li>综合体检测试</font><br>【物理强度】普通<br>【战场机动】优良<br>【生理耐受】标准<br>【战术规划】普通<br>【战斗技巧】普通<br>【源石技艺适应性】普通<br><br><li>客观履历</font><br>卡缇，行动预备组A4组员，莱塔尼亚公民，正式任职前为雪橇巡逻队队员。于多项测试中获得优异成绩，遂获准加入罗德岛。',
                    ark_specter:'深海猎人幽灵鲨，早已结束祈祷，在战场上游荡多时。<br><i>令人胆寒的疯狂。</i><br><br><li>基础档案</font><br>【代号】幽灵鲨<br>【性别】女<br>【战斗经验】七年<br>【出身地】阿戈尔<br>【生日】7月27日<br>【种族】未公开<br>【身高】162cm<br>【体重】■■kg<br>【矿石病感染情况】体表无源石结晶分布，但参照医学检测报告，确认为感染者。干员幽灵鲨的感染症状较为特殊，需要进行进一步的临床研究。<br><br><li>综合体检测试</font><br>【物理强度】卓越<br>【战场机动】普通<br>【生理耐受】卓越<br>【战术规划】缺陷<br>【战斗技巧】优良<br>【源石技艺适应性】缺陷<br><br><li>客观履历</font><br>幽灵鲨，身份不明，履历缺失。在对抗大型生物与破坏硬目标等行动中展现出极强的技巧，推测与其过往战斗经验相关。现作为近卫干员于罗德岛某作战小队任职。',
                    ark_ansel:'罗德岛医疗干员安塞尔，将为小队提供多样的急救方案。<br><i>加油啊，安塞尔！</i><br><br><li>基础档案</font><br>【代号】安塞尔<br>【性别】男<br>【战斗经验】半年<br>【出身地】雷姆必拓<br>【生日】1月31日<br>【种族】卡特斯<br>【身高】163cm<br>【矿石病感染情况】体表未发现任何源石结晶，确认为非感染者。<br><br><li>综合体检测试</font><br>【物理强度】普通<br>【战场机动】标准<br>【生理耐受】普通<br>【战术规划】普通<br>【战斗技巧】标准<br>【源石技艺适应性】标准<br><br><li>客观履历</font><br>安赛尔，行动预备组A4组员，雷姆必拓公民，正式任职前为罗德岛制药实习员工。于多项测试中获得优异成绩，遂获准调入罗德岛医疗组。',
                    ark_hibiscus:'罗德岛医疗干员芙蓉，将为伤员提供可靠的医疗援助。<br><i>请小心处理她与干员炎熔间的关系。</i><br><br><li>基础档案</font><br>【代号】芙蓉<br>【性别】女<br>【战斗经验】一年<br>【出身地】维多利亚<br>【生日】6月21日<br>【种族】萨卡兹<br>【身高】153cm<br>【矿石病感染情况】参照医学检测报告，确认为感染者。<br><br><li>综合体检测试</font><br>【物理强度】普通<br>【战场机动】普通<br>【生理耐受】普通<br>【战术规划】标准<br>【战斗技巧】普通<br>【源石技艺适应性】标准<br><br><li>客观履历</font><br>生于维多利亚的伦蒂尼姆，干员炎熔的孪生姐姐。因为感染了矿石病来到了罗德岛。在接受救治的过程中，萌生了希望自己也能帮助大家的想法。天生就擅长照顾他人的性格和努力帮助芙蓉顺利地成为了罗德岛的医师。',
                    ark_steward:'罗德岛术师干员史都华德，使用源石技艺为小队开辟前路。<br><i>预备A4队公认好好先生。</i><br><br><li>基础档案</font><br>【代号】史都华德<br>【性别】男<br>【战斗经验】半年<br>【出身地】谢拉格<br>【生日】12月24日<br>【种族】沃尔珀<br>【身高】172cm<br>【矿石病感染情况】参照医学检测报告，确认为感染者。<br><br><li>综合体检测试</font><br>【物理强度】普通<br>【战场机动】标准<br>【生理耐受】普通<br>【战术规划】普通<br>【战斗技巧】标准<br>【源石技艺适应性】标准<br><br><li>客观履历</font><br>史都华德，行动预备组A4组员，谢拉格公民，正式任职前为自由职业者。于多项测试中获得优异成绩，遂获准加入罗德岛，现于罗德岛行动预备组A4小组任职。在法术支援、确认路径、支援作战等项目中展现出值得期待的潜力。',
                    ark_mrnothing:'炎国武夫乌有，按捺住想要开溜的心情驻守战场。<br><i>武器是一把伞一把扇还有一张嘴，也许还有别的。</i><br><br><li>基础档案</font><br>【代号】乌有<br>【性别】男<br>【战斗经验】七年<br>【出身地】炎<br>【生日】1月13日<br>【种族】黎博利<br>【身高】187cm<br>【矿石病感染情况】参照医学检测报告，确认为非感染者。<br><br><li>综合体检测试</font><br>【物理强度】标准<br>【战场机动】标准<br>【生理耐受】优良<br>【战术规划】普通<br>【战斗技巧】优良<br>【源石技艺适应性】标准<br><br><li>客观履历</font><br>乌有，炎国勾吴城人士。自幼习武，练得一手好把式，却因为得罪当地权势，被迫流落他乡，在这个过程中偶然与罗德岛干员炎熔相遇，经协商明确双方需求后，前来罗德岛求职。',
                    ark_podenco:'辅助干员波登可，为紧张的战场带来一点花香。<br><i>香味让人舒缓，也能让人倒地。</i><br><br><li>基础档案</font><br>【代号】波登可<br>【性别】女<br>【战斗经验】没有战斗经验<br>【出身地】玻利瓦尔<br>【生日】3月25日<br>【种族】佩洛<br>【身高】145cm<br>【矿石病感染情况】参照医学检测报告，确认为非感染者。<br><br><li>综合体检测试</font><br>【物理强度】普通<br>【战场机动】标准<br>【生理耐受】普通<br>【战术规划】普通<br>【战斗技巧】普通<br>【源石技艺适应性】普通<br><br><li>客观履历</font><br>波登可是以普通流程应聘进入罗德岛的干员，在调香师主管的庭院里负责照看温室与花卉培植。可以作为作战干员调动，运用对植物的理解医疗队友或扰乱敌人。',
                    ark_exusiai:'企鹅物流职员能天使，将用铳枪为小队扫平前路。<br><i>真的可以放心地把货物交给她吗？</i><br><br><li>基础档案</font><br>【代号】能天使<br>【性别】女<br>【战斗经验】两年<br>【出身地】拉特兰<br>【生日】12月24日<br>【种族】萨科塔<br>【身高】159cm<br>【矿石病感染情况】参照医学检测报告，确认为非感染者。<br><br><li>综合体检测试</font><br>【物理强度】标准<br>【战场机动】优良<br>【生理耐受】标准<br>【战术规划】优良<br>【战斗技巧】优良<br>【源石技艺适应性】标准<br><br><li>客观履历</font><br>能天使，拉特兰公民，适用拉特兰一至十三项公民权益。企鹅物流公司成员。从事秘密联络，武装押运等非公开活动，推测身份：信使。于合约期内任企鹅物流驻罗德岛联络人员，同时为罗德岛多项行动提供协助。',
                    ark_varmeil:'叙拉古猎人红云，荒野昭示着猎物的方向。<br><i>狩猎时请记得提醒队友陷阱的方位。</i><br><br><li>基础档案</font><br>【代号】红云<br>【性别】女<br>【战斗经验】两年<br>【出身地】不明<br>【生日】6月25日<br>【种族】沃尔珀<br>【身高】153cm<br>【矿石病感染情况】体表有源石结晶分布，且参照医学检测报告，确认为感染者。<br><br><li>综合体检测试</font><br>【物理强度】普通<br>【战场机动】标准<br>【生理耐受】普通<br>【战术规划】普通<br>【战斗技巧】标准<br>【源石技艺适应性】标准<br><br><li>客观履历</font><br>红云，出身地不明，入职前于叙拉古荒野地区进行活动，推测身份：猎人。在狩猎，狙击，散兵战术等单兵作战中展现出不凡身手。现于罗德岛狙击小组任职，提供射击援护方面的保障。',
                    ark_dusk:lib.config.ark_characterdata.ark_dusk.yige==true?'星藏点雪，月隐晦明，拙山枯水大江行。<br><i>提墨作清秋，满目落金多少楼</i><br><br>有兽色青&ensp;形似重峦<br>其数十一&ensp;戴月披烟<br>云涛微茫&ensp;暮沉色见<br>须靛似林&ensp;骨峭如石<br>语曰&ensp;星藏点雪&ensp;月隐晦明<br>人有清浊&ensp;色有佳劣<br>五兵难伤&ensp;五火难防<br>焚其血肉&ensp;墨泉流涌&ensp;雾穷烟尽&ensp;两首无羁<br>然其兽难制&ensp;晨昏方易&ensp;顿尔消弭<br>其形亦伪&ensp;其物亦伪<br>笔缀卷阖&ensp;如醉似痴&ensp;一夕烬尽':'兴起而来的画之大者，夕，只负责一切事业的点睛之笔。<br><i>在她失了兴致之前，鼓起勇气向她搭话！</i><br><br><li>基础档案</font><br>【代号】夕<br>【性别】女<br>【战斗经验】未公开<br>【出身地】炎<br>【生日】11月11日<br>【种族】未公开<br>【身高】162cm<br>【矿石病感染情况】参照医学检测报告，确认为非感染者。<br><br><li>综合体检测试</font><br>【物理强度】普通<br>【战场机动】普通<br>【生理耐受】普通<br>【战术规划】标准<br>【战斗技巧】普通<br>【源石技艺适应性】缺陷<br><br><li>客观履历</font><br>夕，炎国画家，待业。在留舰人员年的积极行动下，被以访客身份挟持至罗德岛。擅长绘画，尤其是炎国传统绘画。现寓居罗德岛某偏僻走道的墙内。',
                    ark_nian:'来自遥远炎土的神秘访客，年，愿意为你提供一些微小的援助。<br><i>永远处在各种娱乐活动漩涡的中心。</i><br><br><li>基础档案</font><br>【代号】年<br>【性别】女<br>【战斗经验】未公开<br>【出身地】炎<br>【生日】9月9日<br>【种族】未公开<br>【身高】165cm<br>【矿石病感染情况】未公开<br><br><li>综合体检测试</font><br>【物理强度】标准<br>【战场机动】标准<br>【生理耐受】标准<br>【战术规划】标准<br>【战斗技巧】优良<br>【源石技艺适应性】缺陷<br><br><li>客观履历</font><br>年，无业游民，熟习各类金属工艺，拥有与身份不符的渊博冶金知识。现凭访客身份逗留于罗德岛，偶尔为罗德岛的金属加工项目提供建议。声称自己擅长音像娱乐工作，经常提供一些罗德岛干员普遍不太喜爱的音像产品。',
                    ark_purestream:'水道治理人清流，吃苦耐劳，兢兢业业。<br><i>她觉得往水里丢硬币许愿真的有点傻，最好别这么干。</i><br><br><li>基础档案</font><br>【代号】清流<br>【性别】女<br>【战斗经验】没有战斗经验<br>【出身地】炎<br>【生日】10月24日<br>【种族】阿戈尔<br>【身高】155cm<br>【矿石病感染情况】参照医学检测报告，确认为非感染者。<br><br><li>综合体检测试</font><br>【物理强度】普通<br>【战场机动】标准<br>【生理耐受】普通<br>【战术规划】普通<br>【战斗技巧】普通<br>【源石技艺适应性】优良<br><br><li>客观履历</font><br>干员清流，一直从事河道清理相关工作，拥有极为丰富的净水经验。经本人主动联络，现已通过评审，与罗德岛签订合约。',
                    ark_leizi:'来自大炎的大理寺监察司惊蛰，将与罗德岛在少数项目上进行合作。<br><i>我是不是在哪见过你？</i><br><br><li>基础档案</font><br>【代号】惊蛰<br>【性别】女<br>【战斗经验】五年<br>【出身地】炎<br>【生日】3月5日<br>【种族】麒麟<br>【身高】171cm<br>【矿石病感染情况】参照医学检测报告，确认为非感染者。<br><br><li>综合体检测试</font><br>【物理强度】标准<br>【战场机动】优良<br>【生理耐受】标准<br>【战术规划】优良<br>【战斗技巧】优良<br>【源石技艺适应性】卓越<br><br><li>客观履历</font><br>惊蛰，炎国大理寺所属官员，与罗德岛签署搜查协议后暂居于罗德岛。身具久经训练的战斗技巧与独特的源石技艺，在歼灭战、阵地战中表现优异，但因其身份特殊、动机暧昧，建议在交流中采用被动不合作态度。',
                    ark_chen:'龙门近卫局特别督察组组长陈，正依合约前来协助罗德岛的任务。<br><i>生气的时候很可怕，平常也最好别惹她。</i><br><br><li>基础档案</font><br>【代号】陈<br>【性别】女<br>【战斗经验】四年<br>【出身地】龙门<br>【生日】7月7日<br>【种族】龙<br>【身高】168cm<br>【矿石病感染情况】未公开<br><br><li>综合体检测试</font><br>【物理强度】优良<br>【战场机动】标准<br>【生理耐受】优良<br>【战术规划】优良<br>【战斗技巧】优良<br>【源石技艺适应性】标准<br><br><li>客观履历</font><br>陈，龙门高级警司，龙门近卫局特别督察组组长，毕业于维多利亚皇家近卫学校，成绩优异，表现突出。在龙门近卫局供职期间，力主取缔龙门境内非法活动，对抗暴力犯罪和有组织犯罪，追缉武装逃犯与国际重犯等行动，并取得多项重大成果。现作为特别人员协助罗德岛行动，并为现场提供战术指挥支援。',
                    ark_swire:'近卫干员诗怀雅，来自龙门，愿意为你提供专业的警力协助与额外训练课程。<br><i>龙门的骄傲，果然来自于商业、贸易与资本！</i><br><br><li>基础档案</font><br>【代号】诗怀雅<br>【性别】女<br>【战斗经验】三年<br>【出身地】龙门<br>【生日】7月1日<br>【种族】菲林<br>【身高】163cm<br>【矿石病感染情况】参照医学检测报告，确认为非感染者。<br><br><li>综合体检测试</font><br>【物理强度】标准<br>【战场机动】标准<br>【生理耐受】标准<br>【战术规划】优良<br>【战斗技巧】标准<br>【源石技艺适应性】标准<br><br><li>客观履历</font><br>诗怀雅，龙门近卫局高级警司。现作为特别合作人员协助罗德岛行动，并为现场提供战术指挥支援。',
                    ark_shaw:'龙门消防署警员阿消向你报道，她将会为你提供各类援助。<br><i>不只是消防。</i><br><br><li>基础档案</font><br>【代号】阿消<br>【性别】女<br>【战斗经验】没有战斗经验<br>【出身地】龙门<br>【生日】1月5日<br>【种族】札拉克<br>【身高】135cm<br>【矿石病感染情况】参照医学检测报告，确认为非感染者。<br><br><li>综合体检测试</font><br>【物理强度】普通<br>【战场机动】优良<br>【生理耐受】普通<br>【战术规划】标准<br>【战斗技巧】标准<br>【源石技艺适应性】普通<br><br><li>客观履历</font><br>阿消，龙门消防局消防员。将消防救灾技术带入实战应用，为罗德岛提供了多种方向的战术选择。目前于罗德岛特种干员小组任职，并提供消防安全技术方面的服务。',
                    ark_rope:'罗德岛特种干员暗索，将凭借钩索技术为小队提供便利。<br><i>一钩，一拉，成了！</i><br><br><li>基础档案</font><br>【代号】暗索<br>【性别】女<br>【战斗经验】两年<br>【出身地】雷姆必拓<br>【生日】4月4日<br>【种族】卡特斯<br>【身高】155cm<br>【矿石病感染情况】参照医学检测报告，确认为感染者。<br><br><li>综合体检测试</font><br>【物理强度】标准<br>【战场机动】优良<br>【生理耐受】标准<br>【战术规划】标准<br>【战斗技巧】标准<br>【源石技艺适应性】标准<br><br><li>客观履历</font><br>龙门贫民窟的惯偷，在一次行窃中失手被抓获。在龙门与罗德岛建立合作后，作为特殊人才被陈警官推荐加入罗德岛。平时负责情报收集工作，战斗时，则使用擅长的绳索与勾爪，使得敌人晕头转向。',
                    ark_bison:'信使拜松，与年龄不相符的稳重。<br><i>但其本人至今仍在质疑，信使是否真的需要掌握这么多的作战技巧。</i><br><br><li>基础档案</font><br>【代号】拜松<br>【性别】男<br>【战斗经验】一年<br>【出身地】龙门<br>【生日】10月15日<br>【种族】丰蹄<br>【身高】163cm<br>【矿石病感染情况】参照医学检测报告，确认为非感染者。<br><br><li>综合体检测试</font><br>【物理强度】标准<br>【战场机动】标准<br>【生理耐受】优良<br>【战术规划】标准<br>【战斗技巧】普通<br>【源石技艺适应性】标准<br><br><li>客观履历</font><br>峯驰物流部门执行经理，曾与企鹅物流有过密切合作。于合约期内，为罗德岛提供多种行动协助。',
                    ark_snowsant:'罗德岛特种干员雪雉，使用独特的工业爪钩带来不一样的战术体验。<br><i>曾获龙门机械设计专业头奖。</i><br><br><li>基础档案</font><br>【代号】雪雉<br>【性别】女<br>【战斗经验】没有战斗经验<br>【出身地】龙门<br>【生日】10月17日<br>【种族】黎博利<br>【身高】155cm<br>【矿石病感染情况】参照医学检测报告，确认为非感染者。<br><br><li>综合体检测试</font><br>【物理强度】普通<br>【战场机动】标准<br>【生理耐受】标准<br>【战术规划】标准<br>【战斗技巧】普通<br>【源石技艺适应性】标准<br><br><li>客观履历</font><br>干员雪雉，出身龙门，曾在哥伦比亚各个高新技术开发区有着丰富的科研工作经历。后回到龙门，建设家乡，在此期间与罗德岛签订合约。',
                    ark_jaye:'特种干员孑，用精湛的刀功逼退对手。<br><i>他在战斗的时候确实蛮可怕的。</i><br><br><li>基础档案</font><br>【代号】孑<br>【性别】男<br>【战斗经验】没有战斗经验<br>【出身地】龙门<br>【生日】9月17日<br>【种族】乌萨斯<br>【身高】174cm<br>【矿石病感染情况】参照医学检测报告，确认为非感染者。<br><br><li>综合体检测试</font><br>【物理强度】标准<br>【战场机动】标准<br>【生理耐受】标准<br>【战术规划】标准<br>【战斗技巧】优良<br>【源石技艺适应性】标准<br><br><li>客观履历</font><br>龙门水产小贩，经星熊警官介绍，通过测试后加入罗德岛成为干员。刀工卓越，目前作为特种干员活跃在战场上。',
                    ark_hoshiguma:'龙门近卫局特别任务组干员星熊准备完毕，等待你的指示。<br><i>害怕的时候可以站在她身边壮胆。</i><br><br><li>基础档案</font><br>【代号】星熊<br>【性别】女<br>【战斗经验】七年<br>【出身地】东<br>【生日】1月20日<br>【种族】鬼<br>【身高】184cm<br>【矿石病感染情况】参照医学检测报告，确认为非感染者。<br><br><li>综合体检测试</font><br>【物理强度】优良<br>【战场机动】标准<br>【生理耐受】卓越<br>【战术规划】标准<br>【战斗技巧】优良<br>【源石技艺适应性】普通<br><br><li>客观履历</font><br>星熊，龙门近卫局特别任务组精英干员。存在数项指控记录。经龙门总督魏彦吾交涉，龙门近卫局依星熊的优异能力与良好表现，破格将其吸纳进近卫局特别督察组。在处理高危险性犯罪事件、要员保护、灾害紧急救援等领域表现出较高专业性。现作为重装干员协助罗德岛行动，并为现场提供战术执行与指挥支援。',
                    ark_amiya:'罗德岛公开领导人阿米娅，将与你并肩作战。<br><i>加油，博士。</i><br><br><li>基础档案</font><br>【代号】阿米娅<br>【性别】女<br>【战斗经验】三年<br>【出身地】雷姆必拓<br>【生日】12月23日<br>【种族】卡特斯/奇美拉<br>【身高】142cm<br>【矿石病感染情况】体表有源石结晶分布，参照医学检测报告，确认为感染者。<br><br><li>综合体检测试</font><br>【物理强度】普通<br>【战场机动】标准<br>【生理耐受】普通<br>【战术规划】优良<br>【战斗技巧】标准<br>【源石技艺适应性】■■<br><br><li>客观履历</font><br>罗德岛的公开领袖，在内部拥有最高执行权。虽然，从外表上看起来仅仅是个不成熟的少女，实际上，她却是深受大家信任的合格的领袖。现在，阿米娅正带领着罗德岛，为了感染者的未来，为了让这片大地挣脱矿石病的阴霾而不懈努力。<br><br><li>升变档案</font><br>史载，萨卡兹君王奎隆的佩剑，长度约在0.9到1.2米之间，宽约5厘米，材质不明，通体呈黑色，剑身铭刻萨卡兹传统文字，释作“争斗在此止歇”。奎隆继位后整顿卡兹戴尔，深感西方荼害萨卡兹已久，遂率领部分萨卡兹部族向东方迁移，后下落不明。传说，奎隆有令其敌人不战而退之威。有记述称奎隆之敌在与奎隆作战时仿佛会遭受数倍于武器重量之重压，在物理与意志上同遭奎隆捶打，如若侥幸不死，也多成残废。但也有人称奎隆为仁爱君主，任何遭其佩剑划破的创口都不会流血，如若退后，则能苟全性命。不过，部分古籍宣称，在奎隆继位前，其佩剑就已于战争中毁坏，日后奎隆所持武器，只是他以法术塑造出的脆弱外形。这与奎隆此后在萨卡兹冲突中的表现不符，且少有人能解释在此前提下为何奎隆没有重铸爱剑。我推测，奎隆的确有以法术塑形武器之力，其理论基点同样根植于王位，只是奎隆碍于前游侠之身份而甚少使用此类法术。当然，文献记载，奎隆继位后，其佩剑便时常散发青色幽光，如同焰息。由于奎隆性格激烈，此剑日后也被称作“青色怒火”。萨卡兹的大多传说都随卡兹戴尔不断遭毁而佚失，这对历史考察造成很大困难。近日不断有萨卡兹学者呼吁重塑萨卡兹的历史，但研究中为宣扬萨卡兹种之崇高性而向研究材料添油加醋之行为，实为污染。<br>——Logos',
                    ark_shining:'萨卡兹医师闪灵，竭尽所能为小队提供医疗支援。<br><i>简简单单，但无论如何都看不穿。</i><br><br><li>基础档案</font><br>【代号】闪灵<br>【性别】女<br>【战斗经验】七年<br>【出身地】卡兹戴尔<br>【生日】10月7日<br>【种族】萨卡兹<br>【身高】175cm<br>【矿石病感染情况】参照医学检测报告，确认为非感染者。<br>作为一个萨卡兹，没有被感染是一种幸运，同时也是种不幸。<br><br><li>综合体检测试</font><br>【物理强度】标准<br>【战场机动】普通<br>【生理耐受】标准<br>【战术规划】标准<br>【战斗技巧】优良<br>【源石技艺适应性】卓越<br><br><li>客观履历</font><br>闪灵，萨卡兹医师，前萨卡兹医疗组织“赦罪师”成员，感染者援助团体“使徒”的一员。于源石技艺、战场急救、医学理论、临床医学等领域拥有渊博知识。现作为医疗干员为罗德岛医疗部门提供源石技艺理论，并为多项行动提供战场医疗救护服务。',
                    ark_saileach:'执旗手琴柳，从小丘郡来到罗德岛。<br><i>信仰不灭，旗帜永在。</i><br><br><li>基础档案</font><br>【代号】琴柳<br>【性别】女<br>【战斗经验】两年<br>【出身地】维多利亚<br>【生日】5月31日<br>【种族】瓦伊凡<br>【身高】166cm<br>【矿石病感染情况】参照医学检测报告，确认为非感染者。<br><br><li>综合体检测试</font><br>【物理强度】优良<br>【战场机动】标准<br>【生理耐受】优良<br>【战术规划】普通<br>【战斗技巧】标准<br>【源石技艺适应性】标准<br><br><li>客观履历</font><br>前维多利亚仪仗队执旗手，服役于维多利亚小丘郡地方部队，经历战乱后，由小丘郡办事处负责人引荐，成为罗德岛合作干员。接受过维多利亚军的基础训练，体能优异，在各类任务中展现出了强大的支援能力。',
                    ark_astesia:'罗德岛近卫干员星极，借着星辰的力量维持你的战线。<br><i>她是星空，也是你的小闹钟。</i><br><br><li>基础档案</font><br>【代号】星极<br>【性别】女<br>【战斗经验】没有战斗经验<br>【出身地】哥伦比亚<br>【生日】7月10日<br>【种族】黎博利<br>【身高】165cm<br>【矿石病感染情况】参照医学检测报告，确认为感染者。<br><br><li>综合体检测试</font><br>【物理强度】普通<br>【战场机动】标准<br>【生理耐受】标准<br>【战术规划】标准<br>【战斗技巧】标准<br>【源石技艺适应性】优良<br><br><li>客观履历</font><br>干员星极，哥伦比亚某神秘学组织的会员，经由合作协议被派驻至莱茵生命，职位为文献学顾问。由于共发性矿石病与妹妹一起来到罗德岛，在进行矿石病治疗期间通过测试成为干员 。可使用独特的剑技，对近战目标造成类似法术的攻击效果。',
                    ark_kroos:'罗德岛狙击干员克洛丝，将以弓弩挫败敌人的攻击。<br><i>一直在瞄准。</i><br><br><li>基础档案</font><br>【代号】克洛丝<br>【性别】女<br>【战斗经验】一年<br>【出身地】雷姆必拓<br>【生日】11月22日<br>【种族】卡特斯<br>【身高】154cm<br>【矿石病感染情况】参照医学检测报告，确认为感染者。<br><br><li>综合体检测试</font><br>【物理强度】普通<br>【战场机动】标准<br>【生理耐受】普通<br>【战术规划】标准<br>【战斗技巧】优良<br>【源石技艺适应性】标准<br><br><li>客观履历</font><br>来自雷姆必拓的克洛丝跟芬和米格鲁一样，之前受训于哥伦比亚霍尔姆加德警备队。性格冷静客观，脸上永远挂着笑容，性子慢，圆滑而温和，但是偶尔也会露出毒舌腹黑的一面。',
                    ark_texas:'企鹅物流职员德克萨斯，将使用源石剑为小队取得开局的优势。<br><i>可以放心地把货物交给她。</i><br><br><li>基础档案</font><br>【代号】德克萨斯<br>【性别】女<br>【战斗经验】三年<br>【出身地】哥伦比亚<br>【生日】6月1日<br>【种族】鲁珀<br>【身高】161cm<br>【矿石病感染情况】参照医学检测报告，确认为非感染者。<br><br><li>综合体检测试</font><br>【物理强度】优良<br>【战场机动】优良<br>【生理耐受】标准<br>【战术规划】优良<br>【战斗技巧】优良<br>【源石技艺适应性】优良<br><br><li>客观履历</font><br>企鹅物流员工，单兵作战能力出类拔萃。于合约期内任企鹅物流驻罗德岛联络人员，同时为罗德岛的多项行动提供协助。',
                    ark_arene:'近卫干员芳汀，乐于在战场上捉弄敌人。<br><i>别靠太近，有危险。</i><br><br><li>基础档案</font><br>【代号】芳汀<br>【性别】男<br>【战斗经验】半年<br>【出身地】拉特兰<br>【生日】9月7日<br>【种族】萨科塔<br>【身高】161cm<br>【矿石病感染情况】体表有少量源石结晶分布，参照医学检测报告，确认为感染者。<br><br><li>综合体检测试</font><br>【物理强度】普通<br>【战场机动】普通<br>【生理耐受】普通<br>【战术规划】优良<br>【战斗技巧】普通<br>【源石技艺适应性】优良<br><br><li>客观履历</font><br>干员芳汀，拉特兰出生的萨科塔人，于数年前一场与拉特兰遗产铳相关的事件中感染矿石病，遭到拉特兰的驱逐。在离开拉特兰后，前往莱塔尼亚求学。现已通过专业测试，作为近卫干员为罗德岛提供服务并接受治疗。',
                    ark_nightingale:'萨卡兹医师夜莺，竭尽所能为小队提供医疗支援。<br><i>宛如一张白纸。</i><br><br><li>基础档案</font><br>【代号】夜莺<br>【性别】女<br>【战斗经验】一年<br>【出身地】卡兹戴尔<br>【生日】5月4日<br>【种族】萨卡兹<br>【身高】164cm<br>【矿石病感染情况】体表有少量源石结晶分布，参照医学检测报告，确认为感染者。<br><br><li>综合体检测试</font><br>【物理强度】缺陷<br>【战场机动】缺陷<br>【生理耐受】缺陷<br>【战术规划】普通<br>【战斗技巧】普通<br>【源石技艺适应性】卓越<br><br><li>客观履历</font><br>夜莺，萨卡兹人，感染者援助团体“使徒”的一员，其它履历缺失。于源石技艺、战场急救、临床医学等领域具备高超天赋。现于罗德岛接受治疗，同时为罗德岛提供战场医疗救护、源石技艺援护等服务。',
                    ark_projectred:'罗德岛特种干员、猎狼人红，即将加入狩猎。<br><i>利刃，就是锐齿。</i><br><br><li>基础档案</font><br>【代号】红<br>【性别】女<br>【战斗经验】九年<br>【出身地】未公开<br>【生日】8月25日<br>【种族】鲁珀<br>【身高】162cm<br>【矿石病感染情况】参照医学检测报告，确认为非感染者。<br><br><li>综合体检测试</font><br>【物理强度】标准<br>【战场机动】卓越<br>【生理耐受】标准<br>【战术规划】普通<br>【战斗技巧】卓越<br>【源石技艺适应性】普通<br><br><li>客观履历</font><br>红，身份不明，履历缺失，由凯尔希医生接收、监护并担保。于机动作战，特种作战与隐秘作战中表现出极高天赋，成绩斐然。现于凯尔希医生的指导下，作为特种干员为罗德岛提供服务。',
                    ark_aak:lib.config.ark_characterdata.ark_aak.yige==true?'无名方舟扩展作者之一——正弦SINA<br><i>草！为什么玉不是整数！</i>':'罗德岛特种干员阿，将在后方支援其他干员。<br><i>你有权不在他的支援范围内行动。</i><br><br><li>基础档案</font><br>【代号】阿<br>【性别】男<br>【战斗经验】没有战斗经验<br>【出身地】龙门<br>【生日】3月25日<br>【种族】菲林<br>【身高】161cm<br>【矿石病感染情况】参照医学检测报告，确认为非感染者。<br><br><li>综合体检测试</font><br>【物理强度】普通<br>【战场机动】标准<br>【生理耐受】普通<br>【战术规划】标准<br>【战斗技巧】标准<br>【源石技艺适应性】标准<br><br><li>客观履历</font><br>经龙门鲤氏侦探事务所所长老鲤推荐而来的医疗人员，曾是活跃于龙门灰色地带的知名黑医生。在加入后，展现出了惊人的医疗理论知识储备以及临床经验，但也表现出让人担忧的医疗风格。不过根据凯尔希医生的综合评估，被暂时推荐到医疗装备科和技术开发组。',
                    ark_conviction:'断罪大师正准备加入，心怀感激！<br><i>有罪，就要断！</i><br><br><li>基础档案</font><br>【代号】断罪者<br>【性别】断罪<br>【战斗经验】未知<br>【出身地】米诺斯<br>【生日】未知<br>【种族】未知（疑似黎博利）<br>【身高】145cm<br>【矿石病感染情况】参照医学检测报告，确认为感染者。<br><br><li>综合体检测试</font><br>【物理强度】标准<br>【战场机动】标准<br>【生理耐受】标准<br>【战术规划】标准<br>【战斗技巧】标准<br>【源石技艺适应性】标准<br>“观察对象无论在哪项测试中都能精准地将数据控制在平均值上。”<br><br><li>客观履历</font><br>断罪者，又称作定罪者、艺术拳法家，为古国阿加门（现近米诺斯1045~1080/1091-控制地区）童话、历史故事及传说中的人物。',
                    ark_ceobe:'刻俄柏，随时准备打坏人。<br><i>能敲一个两个三个，又快又准。</i><br><br><li>基础档案</font><br>【代号】刻俄柏<br>【性别】女<br>【战斗经验】三年<br>【出身地】玻利瓦尔<br>【生日】3月3日<br>【种族】佩洛<br>【身高】153cm<br>【矿石病感染情况】体表有源石结晶分布，参照医学检测报告，确认为感染者。<br><br><li>综合体检测试</font><br>【物理强度】标准<br>【战场机动】优良<br>【生理耐受】卓越<br>【战术规划】普通<br>【战斗技巧】标准<br>【源石技艺适应性】优良<br><br><li>客观履历</font><br>流浪者，从有意识开始就在四处流浪，在流浪途中被野外恶劣环境感染，凭着常人所不具备的直觉和意志一直撑到了现在。现已被罗德岛救助并顺利通过干员测试，成为罗德岛的一员。',
                    ark_executor:'拉特兰公证所的专业执行者送葬人，将会履行合约上的所有合同。<br><i>千万不要下错任务书，他真能完成些既荒谬又基本不可能的任务。</i><br><br><li>基础档案</font><br>【代号】送葬人<br>【性别】男<br>【战斗经验】五年<br>【出身地】拉特兰<br>【生日】7月7日<br>【种族】萨科塔<br>【身高】181cm<br>【矿石病感染情况】参照医学检测报告，确认为非感染者。<br><br><li>综合体检测试</font><br>【物理强度】标准<br>【战场机动】标准<br>【生理耐受】标准<br>【战术规划】优良<br>【战斗技巧】优良<br>【源石技艺适应性】标准<br><br><li>客观履历</font><br>送葬人，拉特兰公民，拉特兰公证所法定专业执行者，适用于拉特兰一至十三项公民权益，通晓多种语言与法律框架。现依合约服务于罗德岛，执行拉特兰公民权益相关任务。',
                    ark_roberta:'化妆师罗比拉塔，专程赶来为您提供定制妆造服务。<br><i>为了确保您的好气色，她也不介意在其他罗德岛业务场合动手。</i><br><br><li>基础档案</font><br>【代号】罗比拉塔<br>【性别】女<br>【战斗经验】没有战斗经验<br>【出身地】哥伦比亚<br>【生日】5月10日<br>【种族】阿纳缇<br>【身高】155cm<br>【矿石病感染情况】参照医学检测报告，确认为非感染者。<br><br><li>综合体检测试</font><br>【物理强度】普通<br>【战场机动】普通<br>【生理耐受】标准<br>【战术规划】标准<br>【战斗技巧】标准<br>【源石技艺适应性】普通<br><br><li>客观履历</font><br>罗比拉塔，来自哥伦比亚的知名化妆师。在本人的强烈要求下，参加了工程部门的考核，表现出在自动化机械领域的专业素养，经可露希尔同意，成为罗德岛驻舰干员。',
                    ark_archetto:'兰登修道院修士空弦，重建信仰的力量强过信仰本身。<br><i>如果她拉着你为修道院“添砖加瓦”，请量力而行。</i><br><br><li>基础档案</font><br>【代号】空弦<br>【性别】女<br>【战斗经验】两年<br>【出身地】拉特兰<br>【生日】11月16日<br>【种族】黎博利<br>【身高】152cm<br>【矿石病感染情况】参照医学检测报告，确认为非感染者。<br><br><li>综合体检测试</font><br>【物理强度】标准<br>【战场机动】优良<br>【生理耐受】标准<br>【战术规划】标准<br>【战斗技巧】优良<br>【源石技艺适应性】标准<br><br><li>客观履历</font><br>来自兰登修道院的修士席德佳，代号，空弦。出于某些商业合作目的暂留罗德岛，并积极提出各项合作条款，敦促双方展开友好商业来往。同时在各项行动中均展现出极优秀的作战技巧，经本人要求，现作为罗德岛狙击干员活跃于各项任务中。',
                    ark_gitano:'罗德岛术师干员远山，将用源石技艺为小队谋划未来。<br><i>今天的运势是——</i><br><br><li>基础档案</font><br>【代号】远山<br>【性别】女<br>【战斗经验】一年<br>【出身地】萨米<br>【生日】1月15日<br>【种族】埃拉菲亚<br>【身高】171cm<br>【矿石病感染情况】体表有源石结晶分布，确认为感染者。<br><br><li>综合体检测试</font><br>【物理强度】普通<br>【战场机动】普通<br>【生理耐受】普通<br>【战术规划】标准<br>【战斗技巧】标准<br>【源石技艺适应性】优良<br><br><li>客观履历</font><br>萨米出身的神秘学家，最擅长塔罗占卜，也玩得一手好牌。从不向别人透露任何来到罗德岛之前的故事，因此过往成谜。人们所被允许知道的，只有她占卜很成功这一点。',
                    ark_kafka:'园艺师卡夫卡，蹦蹦跳跳。<br><i>她一笑，准没好事。</i><br><br><li>基础档案</font><br>【代号】卡夫卡<br>【性别】女<br>【战斗经验】没有战斗经验<br>【出身地】哥伦比亚<br>【生日】12月1日<br>【种族】黎博利<br>【身高】149cm<br>【矿石病感染情况】体表有源石结晶分布，参照医学检测报告，确认为感染者。<br><br><li>综合体检测试</font><br>【物理强度】标准<br>【战场机动】优良<br>【生理耐受】普通<br>【战术规划】标准<br>【战斗技巧】标准<br>【源石技艺适应性】标准<br><br><li>客观履历</font><br>前哥伦比亚某城园艺师，经赫默引荐加入罗德岛。身手矫健，思维敏捷，常活跃于各类隐秘任务中。',
                    ark_blaze:'罗德岛最热情的精英干员，煌，将在任何地方散播她的热情。<br><i>拜托，有时候实在是太热了。</i><br><br><li>基础档案</font><br>【代号】煌<br>【性别】女<br>【战斗经验】七年<br>【出身地】维多利亚<br>【生日】未公开<br>【种族】菲林<br>【身高】172cm<br>【矿石病感染情况】参照医学检测报告，确认为感染者。<br><br><li>综合体检测试</font><br>【物理强度】优良<br>【战场机动】优良<br>【生理耐受】优良<br>【战术规划】标准<br>【战斗技巧】优良<br>【源石技艺适应性】优良<br><br><li>客观履历</font><br>煌，罗德岛精英干员，在机动作战、歼灭战与突袭作战中体现出了专业的战斗技巧与战术素养。现由阿米娅带领，作为攻坚战的战术核心之一发挥作用。',
                    ark_warfarin:'罗德岛医疗干员华法琳，以维护干员生命安全为己任。<br><i>当然了，医学研究要稍微重要那么一点点。</i><br><br><li>基础档案</font><br>【代号】华法琳<br>【性别】女<br>【战斗经验】十年<br>【出身地】卡兹戴尔<br>【生日】6月27日<br>【种族】萨卡兹<br>【身高】157cm<br>【矿石病感染情况】参照医学检测报告，确认为非感染者。<br><br><li>综合体检测试</font><br>【物理强度】标准<br>【战场机动】标准<br>【生理耐受】标准<br>【战术规划】优良<br>【战斗技巧】标准<br>【源石技艺适应性】优良<br><br><li>客观履历</font><br>罗德岛元老之一，此前经历不明。罗德岛血库的建造者与管理人，在医学和治疗法术上有深厚造诣，与凯尔希医生共同建立起了罗德岛医疗体系的基盘。',
                    ark_pinecone:'建筑工人松果，迷迷糊糊地完成工作。<br><i>看起来没睡醒但工作精准得很，怎么做到的？</i><br><br><li>基础档案</font><br>【代号】松果<br>【性别】女<br>【战斗经验】没有战斗经验<br>【出身地】哥伦比亚<br>【生日】3月12日<br>【种族】黎博利<br>【身高】148cm<br>【矿石病感染情况】参照医学检测报告，确认为非感染者。<br><br><li>综合体检测试</font><br>【物理强度】普通<br>【战场机动】标准<br>【生理耐受】标准<br>【战术规划】普通<br>【战斗技巧】标准<br>【源石技艺适应性】普通<br><br><li>客观履历</font><br>哥伦比亚建筑工人松果，被卷入曼斯菲尔德事件后，随山来到罗德岛求职，因其先前的工作经验，现于工程部担任部分干员的助手。',
                    ark_magallan:'莱茵生命外勤专员麦哲伦，随时准备迎接新的探险。<br><i>她摁下按钮后会发生很多事情，但其中绝对不包括爆炸。</i><br><br><li>基础档案</font><br>【代号】麦哲伦<br>【性别】女<br>【战斗经验】没有战斗经验<br>【出身地】哥伦比亚<br>【生日】10月17日<br>【种族】黎博利<br>【身高】160cm<br>【矿石病感染情况】参照医学检测报告，确认为非感染者。<br><br><li>综合体检测试</font><br>【物理强度】标准<br>【战场机动】标准<br>【生理耐受】优良<br>【战术规划】优良<br>【战斗技巧】普通<br>【源石技艺适应性】标准<br><br><li>客观履历</font><br>麦哲伦，莱茵生命实验室外勤专员，在合作协议的作用下，暂计划以罗德岛为据点，开始新一轮的探索活动。擅长操控高度模块化无人机，因地制宜进行攻击或支援友军。',
                    ark_scene:'战场摄影师稀音，忠实履行自己的职责。<br><i>她动了？她动了吗？</i><br><br><li>基础档案</font><br>【代号】稀音<br>【性别】女<br>【战斗经验】没有战斗经验<br>【出身地】萨尔贡<br>【生日】12月31日<br>【种族】皮洛萨<br>【身高】154cm<br>【矿石病感染情况】参照医学检测报告，确认为感染者。<br><br><li>综合体检测试</font><br>【物理强度】普通<br>【战场机动】缺陷<br>【生理耐受】标准<br>【战术规划】普通<br>【战斗技巧】普通<br>【源石技艺适应性】优良<br><br><li>客观履历</font><br>摄影师稀音，擅长以摄影辅助设备“镜头”为主的机器人小队勘察战场，传达图像信息，同时为罗德岛提供野地考察与战场侦察服务。不过，干员稀音的运动能力十分低下，辅助工作的后勤干员必不可少。',
                    ark_deepcolor:'罗德岛辅助干员深海色，使役着她的“助手”们准备加入战斗。<br><i>你不会想知道她是怎样作画的。</i><br><br><li>基础档案</font><br>【代号】深海色<br>【性别】女<br>【战斗经验】没有战斗经验<br>【出身地】未公开<br>【生日】6月23日<br>【种族】未公开<br>【身高】163cm<br>【矿石病感染情况】参照医学检测报告，确认为非感染者。<br><br><li>综合体检测试</font><br>【物理强度】普通<br>【战场机动】普通<br>【生理耐受】普通<br>【战术规划】标准<br>【战斗技巧】标准<br>【源石技艺适应性】优良<br><br><li>客观履历</font><br>深海色，出身不明，履历缺失。在源石技艺、法术支援、战术协同等方面展现出不俗战力。现于罗德岛担任特种行动小组干员。',
                    ark_midnight:'罗德岛近卫干员月见夜，将凭自己的剑术，对抗罗德岛的敌人。<br><i>很意外，他的战斗技巧，真的挺不错。</i><br><br><li>基础档案</font><br>【代号】月见夜<br>【性别】男<br>【战斗经验】没有战斗经验<br>【出身地】东国<br>【生日】5月20日<br>【种族】萨卡兹<br>【身高】187cm<br>【矿石病感染情况】参照医学检测报告，确认为感染者。<br><br><li>综合体检测试</font><br>【物理强度】标准<br>【战场机动】标准<br>【生理耐受】优良<br>【战术规划】普通<br>【战斗技巧】标准<br>【源石技艺适应性】优良<br><br><li>客观履历</font><br>作为患者进入罗德岛接受治疗，出于本人的意愿，在通过干员测试后，成为罗德岛的一员，被分配到预备行动组A6。',
                    ark_cuora:'罗德岛重装干员蛇屠箱，将为小队提供坚实可靠的防御。<br><i>变得很硬，超级超级硬。</i><br><br><li>基础档案</font><br>【代号】蛇屠箱<br>【性别】女<br>【战斗经验】没有战斗经验<br>【出身地】未公开<br>【生日】未公开<br>【种族】匹特拉姆<br>【身高】148cm<br>【矿石病感染情况】体表无源石结晶分布，体内有可见阴影，参照医学检测报告，确认为感染者。<br><br><li>综合体检测试</font><br>【物理强度】普通<br>【战场机动】普通<br>【生理耐受】优良<br>【战术规划】普通<br>【战斗技巧】普通<br>【源石技艺适应性】标准<br><br><li>客观履历</font><br>蛇屠箱，身份不明，履历缺失。在强对抗战斗中展现出了不凡的防守强度。现作为重装干员，为罗德岛的多项行动提供服务。',
                    ark_shamare:'罗德岛干员巫恋，于敌人眼中，恶灵常伴其右。<br><i>缝补人偶是需要很多时间的，不要责备她的迟到。</i><br><br><li>基础档案</font><br>【代号】巫恋<br>【性别】女<br>【战斗经验】没有战斗经验<br>【出身地】叙拉古<br>【生日】10月29日<br>【种族】沃尔珀<br>【身高】138cm<br>【矿石病感染情况】参照医学检测报告，确认为感染者。<br><br><li>综合体检测试</font><br>【物理强度】普通<br>【战场机动】标准<br>【生理耐受】普通<br>【战术规划】标准<br>【战斗技巧】普通<br>【源石技艺适应性】优良<br><br><li>客观履历</font><br>在叙拉古地区作为怪谈与传说被广为人知的少女，在调查时，被发现其根源在于少女无法控制自己的源石技艺，后作为感染者被罗德岛收容。批准其在接受治疗的同时作为干员参与部分轻度任务，以帮助她学会控制自身。',
                    ark_lings:'来自炎国的诗人令，洒脱无羁，纵情快意，只要有酒，一切皆可入诗。<br><i>你问写诗的笔在哪儿？注意看她的尾巴。</i><br><br><li>基础档案</font><br>【代号】令<br>【性别】女<br>【战斗经验】未公开<br>【出身地】炎<br>【生日】3月3日<br>【种族】未公开<br>【身高】166cm<br>【矿石病感染情况】参照医学检测报告，确认为非感染者。<br><br><li>综合体检测试</font><br>【物理强度】标准<br>【战场机动】普通<br>【生理耐受】标准<br>【战术规划】优良<br>【战斗技巧】普通<br>【源石技艺适应性】缺陷<br><br><li>客观履历</font><br>令，寓居尚蜀的诗人，与炎国司岁台等政府部门均有联系，在尚蜀事件中接触罗德岛，现通过审核，以访客身份驻留本舰。',
                    ark_beagle:'罗德岛重装干员米格鲁，将为队友提供坚实的防御力量。<br><i>可以多对她说些鼓励的话。</i><br><br><li>基础档案</font><br>【代号】米格鲁<br>【性别】女<br>【战斗经验】一年<br>【出身地】玻利瓦尔<br>【生日】3月2日<br>【种族】佩洛<br>【身高】154cm<br>【矿石病感染情况】参照医学检测报告，确认为感染者。<br><br><li>综合体检测试</font><br>【物理强度】优良<br>【战场机动】普通<br>【生理耐受】优良<br>【战术规划】普通<br>【战斗技巧】标准<br>【源石技艺适应性】标准<br><br><li>客观履历</font><br>行动预备组A1前卫队员。与芬以及克洛丝一起来到罗德岛。虽然有不成熟的一面，但也逐渐展现出了专业和不认输的一面以及极强的天赋，慢慢成为了被更多人认可的可靠干员。',
                    ark_adnachiel:'罗德岛狙击干员安德切尔，将以弓弩挫败敌人的攻击。<br><i>光环歪了，准头可不歪。</i><br><br><li>基础档案</font><br>【代号】安德切尔<br>【性别】男<br>【战斗经验】半年<br>【出身地】拉特兰<br>【生日】5月30日<br>【种族】萨科塔<br>【身高】171cm<br>【矿石病感染情况】参照医学检测报告，确认为感染者。<br><br><li>综合体检测试</font><br>【物理强度】普通<br>【战场机动】标准<br>【生理耐受】普通<br>【战术规划】普通<br>【战斗技巧】标准<br>【源石技艺适应性】标准<br><br><li>客观履历</font><br>安德切尔，拉特兰公民，适用拉特兰一至十三项公民权益。正式任职前为自由职业者。于多项测试中获得优异成绩，遂获准加入罗德岛，现于罗德岛行动预备组A4小组任职。在快速反应、精准射击、支援作战等项目中展现出值得期待的潜力。',
                    ark_fang:'罗德岛先锋干员芬，将在战场上为小队赢得可观的优势。<br><i>她跑得可真快。</i><br><br><li>基础档案</font><br>【代号】芬<br>【性别】女<br>【战斗经验】一年<br>【出身地】卡西米尔<br>【生日】12月2日<br>【种族】库兰塔<br>【身高】158cm<br>【矿石病感染情况】参照医学检测报告，确认为感染者。<br><br><li>综合体检测试</font><br>【物理强度】标准<br>【战场机动】优良<br>【生理耐受】标准<br>【战术规划】标准<br>【战斗技巧】标准<br>【源石技艺适应性】标准<br><br><li>客观履历</font><br>行动预备组A1队长，之前有在警备队实习的经验。战斗能力出众，进入罗德岛后很顺利地适应了现在的工作。 和原本的队员米格鲁、克洛丝一起进入了行动预备组，为了成为独当一面的干员努力着。',
                },
                characterSort:{
                    'arknights_character':{
                        'ark_RhodesIsland':["ark_12F","ark_myrtle","ark_dobermann","ark_amiya","ark_ceobe"],
                        'ark_EliteOp':["ark_blaze"],
                        'ark_MedicalDepartment':["ark_warfarin","ark_podenco"],
                        'ark_SWEEP':["ark_projectred"],
                        'ark_OpTeamA4':["ark_rangers","ark_durin","ark_yato","ark_noircorne"],
                        'ark_ReOpTeamA1':["ark_hibiscus","ark_kroos","ark_beagle","ark_fang"],
                        'ark_ReOpTeamA4':["ark_melantha","ark_cardigan","ark_ansel","ark_steward","ark_adnachiel"],
                        'ark_ReOpTeamA6':["ark_midnight"],
                        'ark_Sargon':["ark_passenger","ark_scene"],
                        'ark_Siracusa':["ark_lappland","ark_varmeil",'ark_shamare'],
                        'ark_Laterano':["ark_arene","ark_executor","ark_archetto"],
                        'ark_Yan':["ark_mrnothing","ark_purestream","ark_leizi"],
                        'ark_YanSui':["ark_dusk","ark_nian",'ark_lings'],
                        'ark_Lungmen':["ark_rope","ark_shaw","ark_bison","ark_snowsant","ark_jaye"],
                        'ark_LGD':["ark_chen","ark_swire","ark_hoshiguma"],
                        'ark_LeesDA':["ark_aak"],
                        'ark_PenguinLogistics':["ark_exusiai","ark_texas"],
                        'ark_Victoria':["ark_saileach"],
                        'ark_Columbia':["ark_astesia",'ark_roberta','ark_kafka','ark_pinecone','ark_cuora'],
                        'ark_RhineLab':["ark_magallan"],
                        'ark_Minos':["ark_conviction"],
                        'ark_Sami':["ark_gitano"],
                        'ark_Aegir':["ark_deepcolor"],
                        'ark_AbyssalHunters':["ark_specter"],
                        'ark_Followers':["ark_shining","ark_nightingale"],
                        'ark_Blacksteel':["ark_vanilla"],
                    },
                },
                characterTitle:{
                    ark_lings:'<font color=#00BFFF>浊酒澄心</font>',
                    ark_magallan:'<font color=#B9CDF6>冰封原野</font>',
                    ark_pinecone:'<font color=#FFD700>电能过载</font>',
                    ark_warfarin:'<font color=#FF0000>血先生</font>',
                    ark_blaze:'<font color=#FF0000>炽热之血</font>',
                    ark_archetto:'<font color=#FFD700>兰登战术</font>',
                    ark_executor:'<font color=#BEBEBE>无题密令</font>',
                    ark_aak:lib.config.ark_characterdata.ark_aak.yige==true?'<font color=#FFA500>扩展作者</font>':'<font color=#FFA500>百面郎中</font>',
                    ark_amiya:'<font color=#0000CD>沉睡的魔王</font>',
                    ark_nightingale:'<font color=#FFFFFF>白恶魔</font>',
                    ark_arene:'<font color=#BEBEBE>随性少年</font>',
                    ark_texas:'<font color=#FF0000>暴风骤雨</font>',
                    ark_kroos:'<font color=#FFD700>第一盲狙</font>',
                    ark_astesia:'<font color=#00BFFF>观星者</font>',
                    ark_lappland:'<font color=#BEBEBE>逐念孤狼</font>',
                    ark_specter:'<font color=#0000CD>肉斩骨断</font>',
                    ark_passenger:'<font color=#FFD700>战争兵器</font>',
                    ark_myrtle:'<font color=#BEBEBE>大将军</font>',
                    ark_dobermann:'<font color=#6A5ACD>铁面教官</font>',
                    ark_mrnothing:'<font color=#00BFFF>子虚乌有</font>',
                    ark_exusiai:'<font color=#FF0000>物理超度</font>',
                    ark_varmeil:'<font color=#FFA500>独臂猎手</font>',
                    ark_dusk:lib.config.ark_characterdata.ark_dusk.yige==true?'<font color=#436EEE>月隐晦明</font>':'<font color=#436EEE>画中之人</font>',
                    ark_nian:'<font color=#FF0000>干明可鉴</font>',
                    ark_leizi:'<font color=#FFD700>断事如神</font>',
                    ark_chen:'<font color=#FF0000>鞘中赤红</font>',
                    ark_swire:'<font color=#FFD700>富贵荣华</font>',
                    ark_snowsant:'<font color=#FF0000>天道酬勤</font>',
                    ark_jaye:'<font color=#BEBEBE>市井之道</font>',
                    ark_hoshiguma:'<font color=#43CD80>龙门督查</font>',
                    ark_bison:'<font color=#FFA500>大少爷</font>',
                    ark_shining:'<font color=#BEBEBE>黑恶魔</font>',
                    ark_saileach:'<font color=#FFD700>不退之旗</font>',
                    ark_ceobe:'<font color=#FFD700>百种兵器</font>',
                },
                perfectPair:{
                    ark_blaze:['ark_amiya'],
                    ark_melantha:['ark_cardigan'],
                    ark_noircorne:['ark_yato'],
                    ark_nian:['ark_dusk'],
                    ark_chen:['ark_hoshiguma','ark_swire','ark_amiya'],
                    ark_swire:['ark_hoshiguma','ark_chen'],
                    ark_hoshiguma:['ark_swire','ark_chen'],
                    ark_texas:['ark_lappland','ark_exusiai'],
                    ark_exusiai:['ark_texas'],
                    ark_nightingale:['ark_shining'],
                    ark_amiya:['ark_chen','ark_blaze'],
                },
                translate:{
                    'ark_fang':'芬',
                    'ark_adnachiel':'安德切尔',
                    'ark_beagle':'米格鲁',
                    'ark_lings':'令',
                    'ark_cuora':'蛇屠箱',
                    'ark_shamare':'巫恋',
                    'ark_midnight':'月见夜',
                    'ark_magallan':'麦哲伦',
                    'ark_scene':'稀音',
                    'ark_deepcolor':'深海色',
                    'ark_pinecone':'松果',
                    'ark_warfarin':'华法琳',
                    'ark_blaze':'煌',
                    'ark_kafka':'卡夫卡',
                    'ark_gitano':"远山",
                    'ark_archetto':"空弦",
                    'ark_roberta':"罗比拉塔",
                    'ark_executor':"送葬人",
                    'ark_ceobe':"刻俄柏",
                    'ark_conviction':"断罪者",
                    'ark_aak':lib.config.ark_characterdata.ark_aak.yige==true?"正弦":"阿",
                    'ark_projectred':"红",
                    'ark_nightingale':"夜莺",
                    'ark_arene':"芳汀",
                    'ark_texas':"德克萨斯",
                    'ark_kroos':"克洛丝",
                    'ark_astesia':"星极",
                    'ark_saileach':"琴柳",
                    'ark_shining':"闪灵",
                    'ark_amiya':lib.config.ark_characterdata.ark_amiya.yige==true?"近卫阿米娅":"术士阿米娅",
                    'ark_amiya_ab':"阿米娅",
                    'ark_snowsant':"雪雉",
                    'ark_jaye':"孑",
                    'ark_hoshiguma':"星熊",
                    'ark_swire':"诗怀雅",
                    'ark_chen':"陈",
                    'ark_bison':"拜松",
                    'ark_rope':"暗索",
                    'ark_shaw':"阿消",
                    'ark_vanilla':"香草",
                    'ark_lappland':"拉普兰德",
                    'ark_dobermann':"杜宾",
                    'ark_passenger':"异客",
                    'ark_noircorne':"黑角",
                    'ark_yato':"夜刀",
                    'ark_12F':"12F",
                    'ark_rangers':"巡林者",
                    'ark_durin':"杜林",
                    'ark_melantha':"玫兰莎",
                    'ark_myrtle':"桃金娘",
                    'ark_cardigan':"卡缇",
                    'ark_specter':"幽灵鲨",
                    'ark_ansel':"安塞尔",
                    'ark_hibiscus':"芙蓉",
                    'ark_steward':"史都华德",
                    'ark_podenco':"波登可",
                    'ark_mrnothing':"乌有",
                    'ark_exusiai':"能天使",
                    'ark_varmeil':"红云",
                    'ark_dusk':lib.config.ark_characterdata.ark_dusk.yige==true?"夕·行墨":"夕",
                    'ark_dusk_ab':"夕",
                    'ark_nian':"年",
                    'ark_leizi':"惊蛰",
                    'ark_purestream':"清流",
                    'ark_Followers':"使徒",
                    'ark_OpTeamA4':"罗德岛—行动组A4",
                    'ark_ReOpTeamA6':"罗德岛—预备组A6",
                    'ark_ReOpTeamA4':"罗德岛—预备组A4",
                    'ark_ReOpTeamA1':"罗德岛—预备组A1",
                    'ark_MedicalDepartment':"罗德岛—医疗部",
                    'ark_EliteOp':"罗德岛—精英干员",
                    'ark_RhodesIsland':"罗德岛",
                    'ark_Blacksteel':"黑钢国际",
                    'ark_Sargon':"萨尔贡",
                    'ark_Siracusa':"叙拉古",
                    'ark_AbyssalHunters':"阿戈尔—深海猎人",
                    'ark_PenguinLogistics':"企鹅物流",
                    'ark_Yan':"炎",
                    'ark_YanSui':"炎—岁",
                    'ark_Lungmen':"炎—龙门",
                    'ark_LGD':"炎—龙门近卫局",
                    'ark_Victoria':"维多利亚",
                    'ark_Columbia':"哥伦比亚",
                    'ark_Laterano':"拉特兰",
                    'ark_SWEEP':"罗德岛—S.W.E.E.P",
                    'ark_LeesDA':"鲤氏侦探事务所",
                    'ark_Minos':"米诺斯",
                    'ark_Sami':"萨米",
                    'ark_Aegir':"阿戈尔",
                    'ark_RhineLab':"莱茵生命",
                    'ark_sixStarsSort':'六星干员',
                    'ark_fiveStarsSort':'五星干员',
                    'ark_fourStarsSort':'四星干员',
                    'ark_threeStarsSort':'三星干员',
                    'ark_twoStarsSort':'二星干员',
                },
            };
            get.arkhave = function(name){
                var data=lib.config.ark_characterdata
                if(data[name]&&data[name].have==true) return true
                else return false;
            }
            if(lib.config.ark_characterSort=='xingji'){
                arknights_character.characterSort.arknights_character={
                    'ark_sixStarsSort':lib.config.ark_sixstars,
                    'ark_fiveStarsSort':lib.config.ark_fivestars,
                    'ark_fourStarsSort':lib.config.ark_fourstars,
                    'ark_threeStarsSort':lib.config.ark_threestars,
                    'ark_twoStarsSort':lib.config.ark_twostars,
                }
            }
            for(var i in arknights_character.character){
                var skin=lib.config.ark_characterdata[i].skin
                if(lib.config.ark_characterdata[i].yige==true){
                    if(lib.device||lib.node){
                        if(lib.config.ark_config_lutou){
                            if(skin&&skin!=0){
                                arknights_character.character[i][4].push('ext:无名方舟/lutou/arkSkin/'+i+'/'+skin+'.jpg');
                            }
                            else arknights_character.character[i][4].push('ext:无名方舟/lutou/lutou/'+i+'_yige'+'.jpg');
                        }
                        else{
                            if(skin&&skin!=0){
                                arknights_character.character[i][4].push('ext:无名方舟/arkSkin/'+i+'/'+skin+'.jpg');
                            }
                            else arknights_character.character[i][4].push('ext:无名方舟/'+i+'_yige'+'.jpg');
                        }
                    } 
                    else arknights_character.character[i][4].push('db:extension-无名方舟:'+i+'_yige.jpg');
                }
                else {
                    if(lib.device||lib.node){
                        if(lib.config.ark_config_lutou){
                            if(skin&&skin!=0){
                                arknights_character.character[i][4].push('ext:无名方舟/lutou/arkSkin/'+i+'/'+skin+'.jpg');
                            }
                            else arknights_character.character[i][4].push('ext:无名方舟/lutou/lutou/'+i+'.jpg');
                        }
                        else{
                            if(skin&&skin!=0){
                                arknights_character.character[i][4].push('ext:无名方舟/arkSkin/'+i+'/'+skin+'.jpg');
                            }
                            else arknights_character.character[i][4].push('ext:无名方舟/'+i+'.jpg');
                        }
                    }
                    else arknights_character.character[i][4].push('db:extension-无名方舟:'+i+'.jpg');
                }
                if(!get.arkhave(i)) arknights_character.character[i][4].add("unseen");
                else arknights_character.character[i][4].remove("unseen");                
            };
            return arknights_character;
        });
        lib.config.all.characters.push('arknights_character');
        if(!lib.config.characters.contains('arknights_character')) lib.config.characters.remove('arknights_character');
        lib.translate['arknights_character_character_config'] = "无名方舟";    
        //仅方舟武将
        if(lib.config.ark_config_onlyArknight){
            var savedFilter = lib.filter.characterDisabled;
            lib.filter.characterDisabled = function(i,libCharacter){
                if(i && !lib.config.ark_allCharacter.contains(i)){
                    return true;
                }
                return savedFilter(i,libCharacter);
            }
        }
        //打开武将包
        lib.config.all.characters.add('arknights_character'); 
        if(!game.getExtensionConfig('arknights_character', 'TheFirstTimes')){
            lib.config.characters.unshift('arknights_character');
            game.saveConfigValue('characters'); 			
            game.saveExtensionConfig('arknights_character', 'TheFirstTimes', true);
        }
        game.import('card',function(){
            var arknights_card={
                name:'arknights_card',
                connect:true,
                card:{
                    ark_chixiao:{
                        image:"ext:无名方舟/ark_chixiao.png",
                        vanish:true,
                        fullskin:true,
                        derivation:"ark_chen",
                        type:"equip",
                        subtype:"equip1",
                        distance:{
                            attackFrom:-1,
                        },
                        skills:["ark_chixiao_skill"],
                        destroy:"ark_badao",
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
                        ai:{
                            basic:{
                                order:function(card,player){
                                    if(player&&player.hasSkillTag('reverseEquip')){
                                        return 8.5-get.equipValue(card,player)/20;
                                    }
                                    else{
                                        return 8+get.equipValue(card,player)/20;
                                    }
                                },
                                useful:2,
                                equipValue:6,
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
                            result:{
                                target:function(player,target,card){
                                    return get.equipResult(player,target,card.name);
                                },
                            },
                        },
                    }
                },
                translate:{
                    "ark_chixiao":'赤霄',
                    "ark_chixiao_info":"「<font color=#FF0000>鞘中赤红</font>」<br><li>你可以将1张红色手牌当【杀】使用或打出，且此杀无视防具。",
                },
            }
            return arknights_card
        })
        lib.translate['arknights_card_card_config'] = "无名方舟";
        lib.config.all.cards.push('arknights_card');
        if(!lib.config.cards.contains('arknights_card')) lib.config.cards.push('arknights_card');
    }
    /*game.addMode('arkRoguelike',{
        name:'arkRoguelike',
        startBefore:function(){
        },
        start:function(){
            'step 0'
            _status.arkRoguelike = true
            game.prepareArena(6);
            'step 1'
            for(var i=0;i<game.players.length;i++){
                if(i<2){
                    game.players[i].side = true;
                    game.players[i].identity = 'zhong';
                    game.players[i].setIdentity('zhong');
                    game.players[i].getId();
                    game.players[i]._trueMe = game.me;
                }
                else{
                    game.players[i].side = false;
                    game.players[i].identity = 'fan';
                    game.players[i].setIdentity('fan');
                    game.players[i].getId();
                }
            }
            _status.firstAct = game.players[2];
            game.addGlobalSkill('autoswap');
            'step 2'
            game.chooseCharacter();
            'step 3'
            event.trigger('gameStart');
            'step 4'
            game.gameDraw(_status.firstAct,4);
            game.phaseLoop(_status.firstAct);
        },
        game:{
            syncMenu:true,
            chooseCharacter:function(){
                var next=game.createEvent('chooseCharacter',false);
                next.showConfig=true;
                next.setContent(function(){
                    'step 0'
                    event.chooseList = lib.config.ark_allCharacter;
                    event.choosed = [];
                    event.players = game.players.slice(0);
                    event.players.sortBySeat(_status.firstAct);
                    'step 1'
                    event.current = event.players.shift();
                    if(event.current){
                        if(event.current.side == false){
                            event.current.init('ark_pinecone');
                            event.goto(1);
                        }
                        event.current.chooseButton()
                            .set('forced',true)
                            .set('createDialog',['请选择你的角色',[event.chooseList,'character']]);
                    }else{
                        event.finish();
                    }
                    'step 2'
                    if(result && result.links && result.links.length){
                        event.chooseList.remove(result.links[0]);
                        event.current.init(result.links[0]);
                        event.choosed.push(event.current);
                        event.goto(1);
                    }
                });
            },
            showIdentity:function(){

            },
            checkResult:function(){
                if(game.countPlayer(function(current){
                    return current.side == game.me.side && current.isAlive();
                }) == 0){
                    game.over(false);
                }
                if(game.countPlayer(function(current){
                    return current.side != game.me.side && current.isAlive();
                }) == 0){
                    game.over(true);
                }
            }
        },
        translate:{
            'arkRoguelike':'猩红孤钻'
        },
        get:{
            rawAttitude:function(a,b){
                if(a.side == b.side)return 10;
                return -10;
            },
        },
        element:{
            content:{
                gameDraw:function(){
                    "step 0"
                    var end=player;
                    var numx=num;
                    do{
                        if(typeof num=='function'){
                            numx=num(player);
                        }
                        if(player.getTopCards) player.directgain(player.getTopCards(numx));
                        else player.directgain(get.cards(numx));
                        player=player.next;
                    }
                    while(player!=end);
                },
            },
            player:{
                dieAfter:function(){
                    game.checkResult();
                },
                dieAfter2:function(source){
                },
            }
        },
        skill:{
            
        },
    },{
        translate:'猩红孤钻',
        config:{
            chooseMod:{
                name:'选择难度',
                init:lib.config.arkRoguelike_chooseMod === undefined ? 'normal' : lib.config.arkRoguelike_chooseMod,
                item:{
                    easy:'古堡观光',
                    normal:'正式调查',
                    hard:'直面灾厄',
                },
                onclick:function(item){
                    game.saveConfig('chooseMod',item,true);
                    game.saveConfig('arkRoguelike_chooseMod',item);
                }
            },
            allCanChoose:{
                name:'将池扩展',
                intro:'开启后首次招募将出现所有可选武将。',
                init:lib.config.arkRoguelike_allCanChoose === undefined ? false : lib.config.arkRoguelike_allCanChoose,
                onclick:function(item){
                    game.saveConfig('allCanChoose',item,true);
                    game.saveConfig('arkRoguelike_allCanChoose',item);
                }
            }
        },
        onremove:function(){
            game.clearModeConfig('arkRoguelike');
        }
    })*/
},help:{},config:{"ark_xian0":{"name":"—·—·—·—·—·—·—·","clear":true},"ark_kzjs1":{"name":"<b><li>【扩展介绍】</b>","clear":true},"ark_kzjs2":{"name":"<li><font color=silver>[点击查看详细内容]</font>","init":"1","intro":"点我查看详细内容","item":{"1":" ","2":"<b><font color=cyan>扩展介绍</font>>>>","3":"<li>本扩展武将卡牌为明日方舟二创，技能均为原创</font>","4":"<li>本扩展代码编写者为：无名杀—正弦（B站：正弦SINA）</font>","5":"<li>现共实装62+3个干员</font>"}},"ark_xian1":{"name":"—·—·—·—·—·—·—·","clear":true},"ark_kzts1":{"name":"<b><li>【扩展特色】</b>","clear":true},"ark_kzts2":{"name":"<li><font color=silver>[点击查看详细内容]</font>","init":"1","intro":"点我查看详细内容","item":{"1":" ","2":"<b><font color=cyan>扩展特色</font>>>>","3":"<li>抽卡系统：花费龙门币进行单抽/十连，可以获得3-6星干员</font>","5":"<li>异格系统：部分干员拥有异格或可以进行升变</font>","6":"<li>龙门币：通用货币，可使用其进行干员精英化与抽卡</font>"}},"ark_xian2":{"name":"—·—·—·—·—·—·—·","clear":true},"ark_kzgx1":{"name":"<b><li>更新内容</b>","clear":true},"ark_kzgx2":{"name":"<li><font color=silver>[点击查看详细内容]</font>","init":"1","intro":"点我查看详细内容","item":{"1":" ","2":"<b><font color=cyan>更新内容1.65.1</font>>>>","4":"<li>干员实装：实装芬、安德切尔、米格鲁、阿异格：正弦","5":"<li>干员调整：史都华德技能调整","7":"<li>背景音乐：寻昼燃炬","8":"<li>新增干员换肤，添加部分皮肤；开始调整部分立绘；十周年UI势力背景调色","9":"<li>移除干员：博士"}},"ark_xian3":{"name":"—·—·—·—·—·—·—·","clear":true},"ark_info":{"name":"<b><li>【本舰信息】</b>","clear":true},"ark_shizhuang":{},"ark_ganyuanhave":{},"ark_lmbsee":{},"ark_xian4":{"name":"—·—·—·—·—·—·—·","clear":true},"ark_chouka":{"name":"<b><li>【干员寻访】</b>","clear":true},"ark_up":{"name":"当期up:优先出新","clear":true},"ark_xunfang1":{},"ark_xunfang10":{},"ark_xian5":{"name":"—·—·—·—·—·—·—·","clear":true},"ark_yangchengxitong":{"name":"<b><li>【干员异格】</b>","clear":true},"ark_choosecharacter":{},"ark_yige":{},"ark_xian6":{"name":"—·—·—·—·—·—·—·","clear":true},"ark_config_skin":{"name":"<b><li>皮肤设置</b>","clear":true},"ark_configskin":{},"ark_config_lutou":{},"ark_xian7":{"name":"—·—·—·—·—·—·—·","clear":true},"ark_configmod":{"name":"<b><li>模式设置</b>","clear":true},"ark_config_onlyArknight":{},"ark_configyw_open":{},"ark_configyw_character":{},"ark_xian8":{"name":"—·—·—·—·—·—·—·","clear":true},"ark_config":{"name":"<b><li>基础设置</b>","clear":true},"ark_backgroundmusic":{},"ark_backgroundpicture":{},"ark_characterSort":{},"ark_config_chouka":{},"ark_config_ios":{},"ark_config_xinshouyindao":{},"ark_xian9":{"name":"—·—·—·—·—·—·—·","clear":true},"ark_group":{"name":"<b><li>扩展交流群</b>","clear":true},"ark_group2":{"name":"<li><font color=silver>[点击查看详细内容]</font>","init":"1","intro":"点我查看详细内容","item":{"1":" ","2":"<li>①群：531313081（无名杀-明日方舟①群 已满）</font>","3":"<li>②群：757297619（无名杀-明日方舟②群）</font>"}}},package:{
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
            "ark_chongfeng":{
                audio:"ext:无名方舟:4",
                trigger:{
                    player:"phaseUseBegin",
                },
                frequent:true,
                content:function(){
        var num=game.roundNumber
        if(num>3) num=3
        var draw=4-num
        player.draw(draw)
    },
                ai:{
                    threaten:1.2,
                },
            },
            "ark_cuixiu":{
                audio:"ext:无名方舟:2",
                trigger:{
                    player:"useCardToPlayered",
                },
                filter:function (event,player){
        if(!player.isPhaseUsing()) return false;
        return event.card.name=='sha'
    },
                priority:10,
                content:function(){
        'step 0'
        player.chooseControl('ark_fengyin','ark_qiangming').
       set('prompt','你可以封印'+get.translation(trigger.target)+'的技能或使'+get.translation(target)+'无法响应【'+get.translation(trigger.card.name)+'】')
        'step 1'
        if(result.control=='ark_fengyin'){
            if(!trigger.target.hasSkill('fengyin')){
                trigger.target.addTempSkill('fengyin');
                player.line(trigger.target)
            }
        }
        if(result.control=='ark_qiangming'){
            trigger.getParent().directHit.add(trigger.target);
            player.line(trigger.target)
        }
    },
                ai:{
                    threaten:1.5,
                },
            },
            "ark_rigui":{
                group:["ark_rigui_distance","ark_rigui_defence"],
                audio:"ext:无名方舟:2",
                subSkill:{
                    distance:{
                        mod:{
                            attackFrom:function(from,to,distance,player){
                    if(get.arkmpro(from.name)>=1) return distance-2
                    return distance-1;
                },
                        },
                        sub:true,
                    },
                    defence:{
                        audio:"ext:无名方舟:4",
                        trigger:{
                            player:"damageBegin4",
                        },
                        popup:false,
                        content:function(){
                'step 0'
                player.logSkill('ark_rigui')
                player.judge(function(card){
                    if(get.arkmpro(player.name)>=2) return get.color(card)=='black'?1:0
                    return get.suit(card)=='spade'?1:0
                });
                'step 1'
                if(result.bool){
                    trigger.cancel();
                }
            },
                        sub:true,
                    },
                },
            },
            "ark_langhun":{
                group:["ark_langhun_summer","ark_langhun_addsha"],
                audio:"ext:无名方舟:2",
                trigger:{
                    player:"useCardToPlayered",
                },
                usable:1,
                direct:true,
                priority:9,
                init:function(player){
        player.storage.ark_langhun_unequip=[];
    },
                filter:function(event,player){
        return event.card.name=='sha'&&get.arkmpro(player.name)>=1&&game.hasPlayer(function(current){
            return !event.targets.contains(current)&&player.canUse(event.card,current)
        })
    },
                content:function(){
        'step 0'
        player.chooseTarget('你可以选择'+get.translation(trigger.card)+'的额外目标',function(card,player,target){
            var player=_status.event.player;
            if(_status.event.targets.contains(target)) return false;
            return player.canUse(_status.event.card,target)
        }).set('targets',trigger.targets).set('card',trigger.card).set('ai',function(target){
            var trigger=_status.event.getTrigger();
            var player=_status.event.player;
            return get.effect(target,trigger.card,player,player);
        });
        'step 1'
        if(result.targets){
            player.line(result.targets);
            player.logSkill('ark_langhun',result.targets)
            trigger.targets.addArray(result.targets);
            player.storage.ark_langhun_unequip.add(trigger.card);
        }
        else{
            player.storage.counttrigger.ark_langhun--;
            event.finish();
        }
    },
                ai:{
                    expose:0.8,
                    unequip:true,
                    "unequip_ai":true,
                    skillTagFilter:function(player,tag,arg){
            if(tag=='unequip'){
                if(arg&&player.storage.ark_langhun_unequip.contains(arg.card)) return true;
                return false;
            }
            var card=arg.target.getEquip(2);
            if(card&&card.name.indexOf('bagua')!=-1) return true;
            if(player._ark_langhun_ai) return false;
        },
                },
                subSkill:{
                    summer:{
                        forced:true,
                        popup:false,
                        silent:true,
                        trigger:{
                            player:"useCardAfter",
                        },
                        content:function(){
                player.storage.ark_langhun_unequip.remove(event.card);
            },
                        sub:true,
                    },
                    addsha:{
                        mod:{
                            cardUsable:function(card,player,num){
                    if(card.name=='sha'&&get.arkmpro(player.name)>=2) return num+1;
                },
                        },
                        sub:true,
                    },
                },
            },
            "ark_jiaoguan":{
                audio:"ext:无名方舟:3",
                group:"ark_jiaoguan_pro2",
                trigger:{
                    player:"phaseUseBegin",
                    source:"damageSource",
                },
                filter:function(event,player){
        return game.hasPlayer(function(current){
            if(player.storage.ark_biance){
                return current.hp<=3&&(player.inRange(current)||player==current)
            }
            else return current.maxHp<=3&&player.inRange(current)&&event.name=='phaseUse'
        })
    },
                direct:true,
                content:function(){
        'step 0'
        var prompt=get.prompt2('ark_jiaoguan')
        if(player.storage.ark_biance) prompt=get.prompt2('ark_re_jiaoguan')
        player.chooseTarget([1,Infinity],prompt,function(card,player,target){
            if(player.storage.ark_biance){
                return target.hp<=3&&(player.inRange(target)||player==target)
            }
            else return target.maxHp<=3&&(player.inRange(target)||player==target)
        }).set('ai',function(target){
            return get.attitude(_status.event.player,target);
        })
        'step 1'
        if(result.bool&&result.targets.length>0){
            var targets=result.targets;
            player.logSkill('ark_jiaoguan',targets);
            for(var i=0;i<targets.length;i++){
                if(targets[i].hp==1){
                    targets[i].draw(2)
                }
                else{
                    targets[i].draw(1)
                }
            }
        }
    },
                subSkill:{
                    "pro2":{
                        mod:{
                            maxHandcard:function(player,num){
                    if(player.storage.ark_biance) return num+1;
                },
                            attackFrom:function(from,to,distance,player){
                    if(from.storage.ark_biance) return distance-1;
                },
                        },
                        sub:true,
                    },
                },
            },
            "ark_biance":{
                audio:"ext:无名方舟:2",
                skillAnimation:"epic",
                animationColor:"thunder",
                juexingji:true,
                derivation:"ark_re_jiaoguan",
                unique:true,
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                filter:function(event,player){
        if(player.storage.ark_biance) return false
        return (player.hp<=1||player.countCards('h')<=1)
    },
                forced:true,
                content:function(){
        player.loseMaxHp();
        player.draw(2)
        game.log(player,'修改了技能','#g【教官】')
        player.awakenSkill('ark_biance');
        player.storage.ark_biance=true;
    },
                ai:{
                    threaten:function(player,target){
            if(target.hp==1||target.countCards('h')<=1) return 2;
            return 0.5;
        },
                },
            },
            "ark_re_jiaoguan":{
            },
            "ark_chilian":{
                audio:"ext:无名方舟:2",
                group:"ark_chilian_end",
                trigger:{
                    player:"useCardToPlayered",
                },
                filter:function(event,player){
        var type=get.type(event.card);
        if(type!='basic'&&type!='trick') return false;
        if(event.targets&&event.targets.length==1){
            return game.hasPlayer(function(current){
                if(player.storage.ark_chilian&&player.storage.ark_chilian.contains(current)) return false;
                else if(!event.targets.contains(current)&&lib.filter.targetEnabled2(event.card,player,current)){
                    return get.distance(event.targets[0],current)<=1&&get.distance(current,event.targets[0])<=1
                }
            })
        }
    },
                direct:true,
                content:function(){
        'step 0'
        event.num=0
        event.target=trigger.targets[0];
        'step 1'
        player.chooseTarget('弛链：你可以选择一名角色，其可能成为'+get.translation(trigger.card)+'的额外目标',function(card,player,target){
            var player=_status.event.player;
            if(_status.event.targets.contains(target)) return false;
            if(player.storage.ark_chilian&&player.storage.ark_chilian.contains(target)) return false
            return lib.filter.targetEnabled2(_status.event.card,player,target)&&get.distance(event.target,target)<=1&&get.distance(target,event.target)<=1
        }).set('targets',trigger.targets).set('card',trigger.card).set('ai',function(target){
            var trigger=_status.event.getTrigger();
            var player=_status.event.player;
            return get.effect(target,trigger.card,player,player);
        });
        'step 2'
        if(result.targets){
            event.target=result.targets[0]
            event.targets=result.targets
            if(!player.storage.ark_chilian) player.storage.ark_chilian=[];
            player.storage.ark_chilian.push(event.target)
            player.markSkill('ark_chilian')
            player.logSkill('ark_chilian',event.target);
            player.line(event.target);
            player.judge(function(card){
                return get.color(card)=='black'?1:0
            });
        }
        else event.finish()
        'step 3'
        if(result.bool){
            trigger.targets.addArray(event.targets);
        }
        else event.finish()
        'step 4'
        if(event.num==0){
            if(game.hasPlayer(function(current){
                if(player.storage.ark_chilian&&player.storage.ark_chilian.contains(current)) return false;
                else if(!trigger.targets.contains(current)&&lib.filter.targetEnabled2(trigger.card,player,current)){
                    return get.distance(event.target,current)<=1&&get.distance(current,event.target)<=1
                }
            })){
                event.num++
                event.goto(1)
            }
        }
    },
                intro:{
                    content:"已对$发动过技能",
                },
                subSkill:{
                    end:{
                        trigger:{
                            global:"phaseJieshu",
                        },
                        silent:true,
                        forced:true,
                        popup:false,
                        content:function(){
                player.storage.ark_chilian=[];
                player.unmarkSkill('ark_chilian')
            },
                        sub:true,
                    },
                },
            },
            "ark_jiexi":{
                audio:"ext:无名方舟:2",
                trigger:{
                    source:"damageBegin1",
                },
                filter:function(event){
        return event.player.hp==event.player.maxHp||event.player.countCards('h')>event.player.hp
    },
                forced:true,
                content:function(){
        trigger.num++;
    },
                ai:{
                    damageBonus:true,
                },
            },
            "ark_huihuang":{
                audio:"ext:无名方舟:2",
                enable:"phaseUse",
                skillAnimation:"epic",
                animationColor:"metal",
                unique:true,
                limited:true,
                selectCard:function(){
        var player=_status.event.player;
        return [Math.max(1,ui.selected.targets.length),player.hp];
    },
                selectTarget:function(){
        return ui.selected.cards.length;
    },
                position:"h",
                filterCard:function(card,player,event){
        return get.color(card)=='black'
    },
                multitarget:true,
                multiline:true,
                filterTarget:function(card,player,target){
        if(target==player) return false;
        return true;
    },
                filter:function(event,player){
        return player.countCards('he',{color:'black'})>0;
    },
                content:function(){
        'step 0'
        var length=cards.length
        player.awakenSkill('ark_huihuang');
        for(var i=0;i<targets.length;i++){
            if(i==length) break;
            targets[i].damage(1,'thunder')
            if(player.inRange(targets[i])){
                targets[i].chooseToDiscard('he',2,true)
            }
        }
    },
                ai:{
                    order:5,
                    result:{
                        target:function(player){
                return -2;
            },
                    },
                },
                mark:true,
                intro:{
                    content:"limited",
                },
                init:function(player,skill){
        player.storage[skill]=false;
    },
            },
            "ark_jingyan":{
                audio:"ext:无名方舟:2",
                trigger:{
                    player:"phaseJieshuBegin",
                },
                frequent:true,
                content:function(){
        player.draw();
    },
            },
            "ark_xianfeng":{
                audio:"ext:无名方舟:4",
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                filter:function(event,player){
        return game.roundNumber<=3
    },
                frequent:true,
                content:function(){
        player.draw();
    },
            },
            "ark_zhuanyi":{
                audio:"ext:无名方舟:2",
                trigger:{
                    player:"die",
                },
                direct:true,
                forceDie:true,
                content:function(){
        "step 0"
        player.chooseTarget([1,3],get.prompt2('ark_zhuanyi'),function(card,player,target){
            return player!=target;
        }).set('forceDie',true).set('ai',function(target){
            var num=get.attitude(_status.event.player,target);
            if(num>0){
                if(target.hp==1){
                    num+=2;
                }
                if(target.hp<target.maxHp){
                    num+=2;
                }
            }
            return num;
        }).set('sourcex',trigger.source);
        "step 1"
        if(result.bool){
            var target=result.targets;
            player.logSkill('ark_zhuanyi',target);
            player.line(target,'green');
            game.asyncDraw(target,1);
            
        }
    },
            },
            "ark_shanbi":{
                audio:"ext:无名方舟:2",
                trigger:{
                    player:"damageBegin4",
                },
                filter:function(event){
        return !event.nature
    },
                forced:true,
                content:function(){
        'step 0'
        player.judge(function(card){
            return get.color(card)=='black'?1:0
        });
        'step 1'
        if(result.bool){
            trigger.cancel();
        }
    },
            },
            "ark_jianshe":{
                audio:"ext:无名方舟:2",
                usable:1,
                trigger:{
                    source:"damageSource",
                },
                filter:function(event,player){
        return player.countCards('he')>=2&&game.hasPlayer(function(current){
            return get.distance(current,event.player)<=1&&get.distance(event.player,current)<=1
        })
    },
                direct:true,
                content:function(){
        "step 0"
        event.tar=trigger.player
        var next=player.chooseCardTarget({
            position:'he',
            filterCard:lib.filter.cardDiscardable,
            selectCard:2,
            filterTarget:function(card,player,target){
                return get.distance(target,event.tar)<=1&&get.distance(event.tar,target)<=1&&target!=event.tar
            },
            ai1:function(card){
                return get.unuseful(card)+9;
            },
            ai2:function(target){
                var player=_status.event.player
                return get.damageEffect(target,player,player);
            },
            prompt:get.prompt('ark_jianshe'),
            prompt2:'弃置2张牌，对与'+get.translation(trigger.player)+'相互距离等于1的一名角色造成一点伤害',
        });
        "step 1"
        if(result.bool){
            var target=result.targets[0];
            player.logSkill('ark_jianshe',target);
            player.discard(result.cards);
            target.damage()
        }
    },
            },
            "ark_kongshe":{
                audio:"ext:无名方舟:2",
                mod:{
                    attackFrom:function(from,to,distance,player){
            return distance-2
        },
                },
                trigger:{
                    source:"damageSource",
                },
                filter:function(event,player){
        return get.distance(player,event.player)>1
    },
                content:function(){
        var target=trigger.player
        player.discardPlayerCard(target,get.prompt('ark_kongshe',target))
    },
            },
            "ark_xingyun":{
                audio:"ext:无名方舟:2",
                mod:{
                    arkDodge:[30,30],
                },
                ArkDodgeFinishEnd:function (){
        player.draw();
        player.logSkill('ark_xingyun')
    },
            },
            "ark_jianyi":{
                intro:{
                    content:"mark",
                },
                audio:"ext:无名方舟:2",
                group:["ark_jianyi_damage","ark_jianyi_source"],
                subSkill:{
                    damage:{
                        audio:"ext:无名方舟:1",
                        trigger:{
                            player:"damageEnd",
                        },
                        popup:false,
                        frequent:true,
                        filter:function (event){
                return event.num>0
            },
                        content:function (){
                "step 0"
                event.count=1;
                "step 1"
                player.draw(1);
                player.addMark("ark_jianyi",1);
                player.logSkill('ark_jianyi')
                if(event.count<trigger.num){
                    event.count++;
                    player.chooseBool(get.prompt2(event.name)).set('frequentSkill',event.name);
                }
                else event.finish();
                "step 2"
                if(result.bool){
                    event.goto(1);
                }
            },
                        ai:{
                            maixie:true,
                            "maixie_hp":true,
                            result:{
                                effect:function (card,player,target){
                        if(get.tag(card,'damage')){
                            if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
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
                        sub:true,
                    },
                    source:{
                        audio:"ext:无名方舟:1",
                        trigger:{
                            source:"damageBegin1",
                        },
                        popup:false,
                        filter:function (event,player){
                return player.countMark('ark_jianyi')>0;
            },
                        check:function(event,player){
                return get.damageEffect(event.player,player,player,event.nature)
            },
                        content:function (){
                player.logSkill('ark_jianyi')
                trigger.num++;
                player.removeMark('ark_jianyi',1)
            },
                        sub:true,
                    },
                },
            },
            "ark_juqi":{
                audio:"ext:无名方舟:3",
                trigger:{
                    player:"phaseUseBefore",
                },
                direct:true,
                content:function(){
        'step 0'
        var num=player.hp
        player.chooseTarget([1,num],get.prompt2('ark_juqi'),function(card,player,target){
            var player=_status.event.player
            return player!=target
        }).ai=function(target){
            var player=_status.event.player
            if(player.hp==1) return false
            if(player.countCards('h')-player.hp>2*player.hp) return false
            return get.attitude(player,target)
        }
        'step 1'
        if(result.targets){
            player.logSkill('ark_juqi',result.targets);
            player.line(result.targets);
            event.targets=result.targets
            var num=result.targets.length
            if(!player.storage.ark_skilllvl) player.storage.ark_skilllvl=0
            player.storage.ark_skilllvl+=num
            num=num*2
            player.draw(num)
            event.count=0
            event.targetre=[]
        }
        else event.finish()
        'step 2'
        var num=player.countCards('he')-event.targets.length+1+event.targetre.length
        if(player.countCards('he')>0){
            player.chooseCard([1,num],true).set('prompt','选择要交给'+get.translation(event.targets[event.count])+'的牌')
        }
        else event.goto(4)
        'step 3'
        if(result.bool){
            player.give(result.cards,event.targets[event.count]);
            player.$give(result.cards,event.targets[event.count]);
            event.targetre.push(event.targets[event.count])
            event.count++
            if(event.count<event.targets.length){
                event.goto(2)
            }
        }
        'step 4'
        trigger.cancel()
    },
            },
            "ark_yuejin":{
                audio:"ext:无名方舟:2",
                trigger:{
                    player:"phaseUseAfter",
                },
                filter:function(event,player){
        return game.hasPlayer(function(current){
            return current.maxHp>current.hp
        })
    },
                direct:true,
                content:function(){
        'step 0'
        player.chooseTarget(1,get.prompt2('ark_yuejin'),function(card,player,target){
            var player=_status.event.player
            return target.maxHp>target.hp&&get.distance(player,target)<=1
        }).ai=function(target){
            var player=_status.event.player
            return get.attitude(player,target)
        }
        'step 1'
        if(result.targets){
            player.logSkill('ark_yuejin',result.targets);
            player.line(result.targets);
            result.targets[0].recover()
        }
    },
            },
            "ark_huoli":{
                audio:"ext:无名方舟:2",
                trigger:{
                    player:"phaseJieshuBegin",
                },
                content:function(){
        'step 0'
        player.judge();
        "step 1"
        if(player.hp<player.maxHp){
            if(result.color=='red'){
                player.recover()
            }
            if(result.color=='black'){
                player.draw()
            }
        }
        else player.draw()
    },
            },
            "ark_lianju":{
                mod:{
                    selectTarget:function(card,player,range){
            if(card.name=='sha'&&card.suit=='heart') range[1]+=1; 
        },
                },
                shaRelated:true,
                audio:"ext:无名方舟:2",
                trigger:{
                    player:"useCardToPlayered",
                },
                logTarget:"target",
                filter:function(event,player){
        return event.card.name=='sha'&&event.card.suit=='heart';
    },
                content:function(){
        trigger.getParent().directHit.push(trigger.target);
    },
                forced:true,
                ai:{
                    "directHit_ai":true,
                    skillTagFilter:function(player,tag,arg){
            return arg.card.name!='sha'&&arg.card.suit=='heart';
        },
                },
            },
            "ark_guduan":{
                round:3,
                audio:"ext:无名方舟:3",
                trigger:{
                    player:"phaseUseEnd",
                },
                filter:function(event,player){
        return player.countCards('he')>=2
    },
                direct:true,
                content:function(){
        'step 0'
        player.chooseToDiscard(2,'he',get.prompt2('ark_guduan'))
        'step 1'
        if(result.bool){
            player.addTempSkill('ark_guduan_damage',{player:"phaseZhunbeiBegin"})
            player.logSkill('ark_guduan')
        }
    },
                subSkill:{
                    damage:{
                        mark:true,
                        marktext:"断",
                        intro:{
                            content:function(storage,player,skill){
                    return '体力值始终不会小于1'
                },
                        },
                        popup:false,
                        trigger:{
                            player:["damageBegin3","loseHpBefore"],
                        },
                        forced:true,
                        filter:function(event,player){
                return event.num>=player.hp
            },
                        content:function(){
                player.logSkill('ark_guduan')
                var num=player.hp-1
                trigger.num=num
            },
                        sub:true,
                    },
                },
                group:["ark_guduan_roundcount"],
            },
            "ark_zaisheng":{
                audio:"ext:无名方舟:3",
                trigger:{
                    player:"phaseJieshuBegin",
                },
                forced:true,
                filter:function(event,player){
        return player.hp<player.maxHp
    },
                content:function(){
        player.recover()
    },
            },
            "ark_yaoli":{
                audio:"ext:无名方舟:2",
                usable:1,
                enable:"phaseUse",
                filterCard:function(card,player,event){
        return card.name=='sha'
    },
                position:"h",
                check:function(card){
        return 9-get.value(card)
    },
                filterTarget:function(card,player,target){
        if(target.hp>=target.maxHp) return false;
        return player.inRange(target)||player==target
    },
                filter:function(event,player){
        return player.countCards('h',function(card){
            return card.name=='sha'
        })
    },
                content:function(){
        target.recover();
        if(!player.storage.ark_skilllvl) player.storage.ark_skilllvl=0
        player.storage.ark_skilllvl+=1
    },
                locked:false,
                mod:{
                    attackFrom:function(from,to,distance,player){
            return distance-2;
        },
                },
                ai:{
                    order:9,
                    result:{
                        target:function(player,target){
                if(target.hp==1) return 5;
                if(player==target&&player.countCards('h')>player.hp) return 5;
                return 2;
            },
                    },
                    threaten:2,
                },
            },
            "ark_yingyang":{
                audio:"ext:无名方舟:2",
                usable:1,
                enable:"phaseUse",
                filterCard:function(card,player,event){
        return card.name=='sha'
    },
                position:"h",
                check:function(card){
        if(get.suit(card)=='heart') return 10-get.value(card)
        if(get.color(card)=='red') return 9-get.value(card)
        return 8-get.value(card)
    },
                filterTarget:function(card,player,target){
        if(target.hp>=target.maxHp) return false;
        return player.inRange(target)||player==target
    },
                filter:function(event,player){
        return player.countCards('h',function(card){
            return card.name=='sha'
        })
    },
                content:function(){
        target.recover();
        if(get.color(cards[0])=='red'){
            target.draw()
        }
        if(!player.storage.ark_skilllvl) player.storage.ark_skilllvl=0
        player.storage.ark_skilllvl+=1
        
    },
                locked:false,
                ai:{
                    order:9,
                    result:{
                        target:function(player,target){
                if(target.hp==1) return 5;
                if(player==target&&player.countCards('h')>player.hp) return 5;
                return 2;
            },
                    },
                    threaten:2,
                },
            },
            "ark_pokai":{
                group:"ark_pokai_damage",
                usable:1,
                audio:"ext:无名方舟:2",
                trigger:{
                    player:"useCard",
                },
                direct:true,
                filter:function(event,player){
        return event.targets&&event.targets.filter(a=>a!=player).length>0
    },
                content:function(){
        'step 0'
        event.target=trigger.targets
        player.chooseTarget('冰破：你可以弃置一名角色一张牌',function(card,player,target){
            return player!=target&&_status.event.targets.contains(target)
        }).set('ai',function(target){
            var player=_status.event.player
            return 1-get.attitude(player,target)
        }).set('targets',event.target)
        'step 1'
        if(result.targets){
            player.discardPlayerCard(1,result.targets[0]).set('logSkill',['ark_pokai',result.targets[0]])
        }
        else{
            player.storage.counttrigger.ark_pokai--;
            event.finish()
        }
        'step 2'
        if(!result.bool){
            player.storage.counttrigger.ark_pokai--;
        }
    },
                ai:{
                    "unequip_ai":true,
                    unequip:true,
                    skillTagFilter:function(player,tag,arg){
            if(tag=='unequip'){
                if(arg&&arg.card&&arg.card.name=="sha") return true;
                return false
            } 
        },
                },
                subSkill:{
                    damage:{
                        audio:"ext:无名方舟:2",
                        trigger:{
                            source:"damageBegin1",
                        },
                        popup:false,
                        filter:function(event,player){
                if(game.hasPlayer(function(current){
                    return current.hp>event.player.hp
                })) return false
                return true
            },
                        forced:true,
                        content:function(){
                player.logSkill('ark_pokai')
                trigger.num++;
            },
                        ai:{
                            damageBonus:true,
                        },
                        sub:true,
                    },
                },
            },
            "ark_guozai":{
                group:["ark_guozai_pro2begin"],
                audio:"ext:无名方舟:4",
                firstDo:true,
                trigger:{
                    player:"useCard1",
                },
                forced:true,
                filter:function(event,player){
        return event.card.name=='sha'&&player.countUsed('sha',true)>1&&event.getParent().type=='phase';
    },
                content:function(){
    },
                mod:{
                    cardUsable:function(card,player,num){
            if(card.name=='sha'){
                return Infinity;
            }
        },
                    attackFrom:function(from,to,distance,player){
            return distance-Infinity;
        },
                },
                subSkill:{
                    "pro2":{
                        enable:"chooseToUse",
                        filterCard:function(card,player){
                return get.color(card)==player.storage.ark_guozai_color;
            },
                        position:"hes",
                        viewAs:{
                            name:"sha",
                        },
                        viewAsFilter:function(player){
                return player.countCards('hes',function(card){
                    return get.color(card)==player.storage.ark_guozai_color;
                });
            },
                        check:function(card){
                return 4-get.value(card)
            },
                        prompt:function(){
                var player=_status.event.player;
                var str='将一张'+(player.storage.ark_guozai_color=='red'?'红':'黑')+'色牌当做【杀】使用';
                return str;
            },
                        ai:{
                            skillTagFilter:function(player){
                    return player.countCards('hes');
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
                            basic:{
                                useful:[5,1],
                                value:[5,1],
                            },
                            order:function(item,player){
                    if(player.hasSkillTag('presha',true,null,true)) return 10;
                    if(lib.linked.contains(get.nature(item))){
                        if(game.hasPlayer(function(current){
                            return current!=player&&current.isLinked()&&player.canUse(item,current,null,true)&&get.effect(current,item,player,player)>0&&lib.card.sha.ai.canLink(player,current,item);
                        })&&game.countPlayer(function(current){
                            return current.isLinked()&&get.damageEffect(current,player,player,get.nature(item))>0;
                        })>1) return 3.1;
                        return 3;
                    }
                    return 3.05;               
                },
                            result:{
                                target:function(player,target,card,isLink){
                        var eff=function(){
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
                        }();
                        if(!isLink&&target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                            target:target,
                            card:card,
                        },true)) return eff/1.2;
                        return eff;
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
                    },
                    "pro2begin":{
                        trigger:{
                            player:"phaseZhunbeiBegin",
                        },
                        filter:function(event,player){
                return true
            },
                        popup:false,
                        prompt:"过载：你可以进行一次判定，此回合内你可以将与判定牌同颜色的牌视为【杀】使用",
                        content:function(){
                'step 0'
                player.logSkill('ark_guozai')
                player.judge();
                'step 1'
                player.gain(result.card,'gain2');
                player.storage.ark_guozai_color=result.color
                player.addTempSkill('ark_guozai_pro2')
            },
                        sub:true,
                    },
                },
            },
            "ark_zhufu":{
                trigger:{
                    global:"gameDrawAfter",
                    player:"enterGame",
                },
                direct:true,
                filter:function(event,player){
        return game.players.length>1;
    },
                audio:"ext:无名方舟:4",
                content:function(){
        'step 0'
        player.chooseTarget('你可以选择【祝福】的目标',lib.translate.ark_zhufu_info,function(card,player,target){
            return target!=player
        }).set('ai',function(target){
            var att=get.attitude(_status.event.player,target);
            if(att>0) return att+1;
            if(att==0) return Math.random();
            return att;
        }).animate=false;
        'step 1'
        if(result.bool){
            var target=result.targets[0];
            player.logSkill('ark_zhufu',target)
            player.gainMaxHp(true);
            player.recover();
            target.gainMaxHp(true);
            target.recover();
        }
    },
            },
            "ark_wuyouskill":{
                trigger:{
                    player:["phaseJieshuBegin","phaseDrawBegin2"],
                },
                forced:true,
                priority:10,
                content:function(){
        if(trigger.name=='phaseJieshu'){
            if(player.countCards('hes')>0){
                player.chooseToDiscard(1,'he','行商：结束阶段，你需要弃置一张牌',true)
            }
            else player.loseHp()
        }
        else if(!event.numFixed) trigger.num++
    },
            },
            "ark_zhitui":{
                audio:"ext:无名方舟:1",
                trigger:{
                    player:"damageEnd",
                },
                forced:true,
                filter:function(event,player){
        return _status.currentPhase!=player;
    },
                content:function(){
        player.addTempSkill('ark_zhitui_def',['phaseAfter','phaseBefore']);
        if(player.hp==1){
            player.draw(2)
        }
    },
                subSkill:{
                    def:{
                        audio:2,
                        trigger:{
                            player:"damageBegin4",
                        },
                        forced:true,
                        content:function(){
                trigger.cancel();
            },
                        ai:{
                            effect:{
                                target:function(card,player,target,current){
                        return 'zerotarget';
                    },
                            },
                        },
                        sub:true,
                    },
                },
            },
            "ark_yinqing":{
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                audio:"ext:无名方舟:1",
                filter:function(event,player){
                    return true;
                },
                direct:true,
                content:function(){
        "step 0"
        var list=['子虚','乌有','子虚乌有']
        player.chooseControl(list,'cancel2').set('prompt','阴晴：你可以选择获得一项效果持续到下回合开始').set('ai',function(){
            var player=_status.event.player
            if(player.hp<2) return '子虚乌有'
            if(player.countCards('h',{name:'sha'})<=1||player.num("h")<=2) return '乌有'
            return ['子虚','乌有','子虚乌有'].randomGet()
        })
        "step 1"
        if(result.control){
            if(result.control=='子虚'){
                player.addTempSkill('ark_yinqing_zixu',{player:"phaseZhunbeiBefore"})
                player.popup('子虚')
                game.log(player,'选择获得了','#g【阴晴】','的'+'<font color=#0000FF>【子虚】</font>'+'效果');
                game.playAudio('..','extension','无名方舟','ark_yinqing_zixu1');
            }
            if(result.control=='乌有'){
                player.addTempSkill('ark_yinqing_wuyou',{player:"phaseZhunbeiBefore"})
                player.popup('乌有')
                game.log(player,'选择获得了','#g【阴晴】','的'+'<font color=#FFA500>【乌有】</font>'+'效果');
                game.playAudio('..','extension','无名方舟','ark_yinqing_wuyou1');
            }
            if(result.control=='子虚乌有'){
                player.addTempSkill('ark_yinqing_zixuwuyou',{player:"phaseZhunbeiBefore"})
                player.popup('子虚乌有')
                game.log(player,'选择获得了','#g【阴晴】','的'+'<font color=#A020F0>【子虚乌有】</font>'+'效果');
                game.playAudio('..','extension','无名方舟','ark_yinqing_zixuwuyou1');
            }
            
        }
    },
                subSkill:{
                    zixu:{
                        audio:"ext:无名方舟:1",
                        mark:true,
                        marktext:"阴",
                        intro:{
                            content:function(storage,player,skill){
                    return '子虚：当你对一名其他角色造成伤害后，你令其出牌阶段使用【杀】的次数-1且摸牌阶段少摸一张牌(不可叠加)'
                },
                        },
                        forced:true,
                        trigger:{
                            source:"damageSource",
                        },
                        filter:function(event,player){
                return !event.player.hasSkill('ark_yinqing_zixu2')&&player!=event.player
            },
                        content:function(){
                trigger.player.addTempSkill('ark_yinqing_zixu2',{player:"phaseJieshuBegin"})
                str='子虚：出牌阶段使用【杀】的次数-1且摸牌阶段少摸一张牌'
                trigger.player.storage.ark_yinqing_zixu=str
            },
                        sub:true,
                    },
                    "zixu2":{
                        mark:true,
                        marktext:"阴",
                        intro:{
                            content:function(storage,player,skill){
                    var str=player.storage.ark_yinqing_zixu
                    return str
                },
                        },
                        popup:false,
                        trigger:{
                            player:"phaseDrawBegin2",
                        },
                        forced:true,
                        filter:function(event,player){
                return !event.numFixed;
            },
                        content:function(){
                player.logSkill('ark_yinqing_zixu')
                trigger.num--;
            },
                        mod:{
                            cardUsable:function(card,player,num){
                    if(card.name=='sha') return num-1;
                },
                        },
                        sub:true,
                    },
                    wuyou:{
                        mark:true,
                        marktext:"阴",
                        intro:{
                            content:function(storage,player,skill){
                    return '乌有：摸牌阶段你多摸一张牌，且出牌阶段你使用【杀】的次数+1'
                },
                        },
                        audio:"ext:无名方舟:1",
                        trigger:{
                            player:"phaseDrawBegin2",
                        },
                        forced:true,
                        priority:9,
                        filter:function(event,player){
                return !event.numFixed;
            },
                        content:function(){
                trigger.num++;
            },
                        mod:{
                            cardUsable:function(card,player,num){
                    if(card.name=='sha') return num+1;
                },
                        },
                        sub:true,
                    },
                    zixuwuyou:{
                        mark:true,
                        marktext:"阴",
                        intro:{
                            content:function(storage,player,skill){
                    return '子虚乌有：当你受到伤害时，你进行一次判定，若结果为黑色，你防止此伤害'
                },
                        },
                        audio:"ext:无名方舟:1",
                        trigger:{
                            player:"damageBegin4",
                        },
                        forced:true,
                        content:function(){
                'step 0'
                player.judge(function(card){
                    return get.color(card)=='black'?1:0
                });
                'step 1'
                if(result.bool){
                    trigger.cancel();
                }
            },
                        sub:true,
                    },
                },
            },
            "ark_shuangxian":{
                mod:{
                    selectTarget:function(card,player,range){
            if(card.name=='sha') range[1]+=1; 
        },
                    cardUsable:function(card,player,num){
            if(card.name=='sha') return num+1;
        },
                },
            },
            "ark_lieshou":{
                audio:"ext:无名方舟:4",
                enable:["chooseToRespond","chooseToUse"],
                filterCard:function(card,player){
        return get.color(card)=='red';
    },
                position:"hes",
                viewAs:{
                    name:"sha",
                },
                viewAsFilter:function(player){
        if(!player.countCards('hes',{color:'red'})) return false;
    },
                prompt:function(){
        var player=_status.event.player;
        var str='将一张红色牌当做【杀】使用';
        return str;
    },
                check:function(card){return 4-get.value(card)},
                ai:{
                    skillTagFilter:function(player){
            if(!player.countCards('hes',{color:'red'})) return false;
        },
                    respondSha:true,
                    canLink:function(player,target,card){
            if(!target.isLinked()&&!player.hasSkill('wutiesuolian_skill')) return false;
            if(target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                target:target,
                card:card,
            },true)) return false;
            if(player.hasSkill('jueqing')||target.hasSkill('gangzhi')||target.hasSkill('gangzhi')) return false;
            return true;
        },
                    basic:{
                        useful:[5,1],
                        value:[5,1],
                    },
                    order:function(item,player){
            if(player.hasSkillTag('presha',true,null,true)) return 10;
            if(lib.linked.contains(get.nature(item))){
                if(game.hasPlayer(function(current){
                    return current!=player&&current.isLinked()&&player.canUse(item,current,null,true)&&get.effect(current,item,player,player)>0&&lib.card.sha.ai.canLink(player,current,item);
                })&&game.countPlayer(function(current){
                    return current.isLinked()&&get.damageEffect(current,player,player,get.nature(item))>0;
                })>1) return 3.1;
                return 3;
            }
            return 3.05;
        },
                    result:{
                        target:function(player,target,card,isLink){
                var eff=function(){
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
                }();
                if(!isLink&&target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                    target:target,
                    card:card,
                },true)) return eff/1.2;
                return eff;
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
            "ark_huaxiang":{
                audio:"ext:无名方舟:2",
                usable:1,
                enable:"phaseUse",
                filterCard:function(card,player,event){
        return card.name=='sha'
    },
                position:"h",
                check:function(card){
        return 9-get.value(card)
    },
                filterTarget:function(card,player,target){
        if(target.hp>=target.maxHp) return false;
        return (player.inRange(target)||player==target)
    },
                filter:function(event,player){
        return player.countCards('h',function(card){
            return card.name=='sha'
        })&&!player.getStat().card.sha>=1&&game.hasPlayer(function(current){
            return current.hp<current.maxHp
        })
    },
                content:function(){
        target.recover();
        player.getStat().card.sha++;
        if(!player.storage.ark_skilllvl) player.storage.ark_skilllvl=0
        player.storage.ark_skilllvl+=1
    },
                ai:{
                    order:9,
                    result:{
                        target:function(player,target){
                if(target.hp==1) return 5;
                if(player==target&&player.countCards('h')>player.hp) return 5;
                return 2;
            },
                    },
                    threaten:2,
                },
            },
            "ark_baozi":{
                group:["ark_baozi_2"],
                marktext:"孢",
                intro:{
                    content:function(storage,player,skill){
            return '孢子：准备阶段失去此标记并进行一次判定，若为红色，跳过摸牌阶段；若为黑色，跳过出牌阶段。'
        },
                },
                audio:"ext:无名方舟:2",
                usable:1,
                trigger:{
                    source:"damageSource",
                },
                filter:function(event,player){
        return event.player.countMark('ark_baozi')<1||!event.player.hasSkill('fengyin')
    },
                content:function(){
        if(trigger.player.countMark('ark_baozi')<1){
            trigger.player.addMark('ark_baozi',1)
        }
        if(!trigger.player.hasSkill('fengyin')){
            trigger.player.addTempSkill('fengyin');
        }
    },
                subSkill:{
                    "2":{
                        trigger:{
                            global:"phaseZhunbeiBegin",
                        },
                        filter:function(event,player){
                return event.player.countMark('ark_baozi')>0
            },
                        popup:false,
                        forced:true,
                        content:function(){
                'step 0'
                player.logSkill('ark_baozi',trigger.player)
                player.line(trigger.player)
                trigger.player.removeMark('ark_baozi',1)
                trigger.player.judge()
                'step 1'
                if(result.color=='red') trigger.player.skip("phaseDraw");
                if(result.color=='black') trigger.player.skip("phaseUse");
            },
                        sub:true,
                    },
                },
            },
            "ark_dianjing":{
                group:["ark_dianjing_damage","ark_dianjing_damageme","ark_dianjing_damageafter"],
                audio:"ext:无名方舟:2",
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                init:function(player){
        if(!player.storage.ark_dianjing) player.storage.ark_dianjing=0;
    },
                intro:{
                    content:"已因此技能获得#张牌",
                },
                direct:true,
                filter:function(event,player,name){
        return game.hasPlayer(function(current){
            return current!=player&&!current.hasMark('ark_dianjing_mark');
        });
    },
                content:function(){
        'step 0'
        var targets=game.filterPlayer(function(current){
            return current!=player&&!current.hasMark('ark_dianjing_mark');
        });
        var next=player.chooseTarget(get.prompt('ark_dianjing'),'令一名其他角色获得“自在”标记',function(card,player,target){
            return target!=player&&!target.hasMark('ark_dianjing_mark');
        }).set('ai',function(target){
            return get.threaten(target);
        })
        'step 1'
        if(result.bool){
            var target=result.targets[0];
            player.logSkill('ark_dianjing',target);
            target.addMark('ark_dianjing_mark',1);
            game.delayx();
        }
    },
                subSkill:{
                    mark:{
                        marktext:"自",
                        intro:{
                            "name2":"自在",
                            content:"mark",
                        },
                        sub:true,
                    },
                    damage:{
                        trigger:{
                            global:"damageAfter",
                        },
                        filter:function(event,player){
                return event.player.hasMark('ark_dianjing_mark');
            },
                        forced:true,
                        popup:false,
                        content:function(){
                player.logSkill('ark_dianjing')
                player.draw()
                player.storage.ark_dianjing++;
                player.markSkill('ark_dianjing');
            },
                        sub:true,
                    },
                    damageme:{
                        trigger:{
                            player:"damageBegin4",
                        },
                        popup:false,
                        forced:true,
                        filter:function(event,player){
                return event.source&&event.source.hasMark('ark_dianjing_mark')&&!player.storage.ark_ruhua_xiugai;
            },
                        content:function(){
                player.logSkill('ark_dianjing')
                trigger.source.removeMark('ark_dianjing_mark',1);
                trigger.cancel()
            },
                        sub:true,
                    },
                    damageafter:{
                        trigger:{
                            source:"damageSource",
                        },
                        popup:false,
                        forced:true,
                        filter:function(event,player){
                return player.storage.ark_ruhua_xiugai&&!event.player.hasMark('ark_dianjing_mark')
            },
                        content:function(){
                player.logSkill('ark_dianjing')
                trigger.player.addMark('ark_dianjing_mark',1);
            },
                        sub:true,
                    },
                },
                ai:{
                    combo:"ark_dianjing_damage",
                    threaten:1.4,
                },
            },
            "ark_ruhua":{
                audio:"ext:无名方舟:2",
                unique:true,
                derivation:["ark_pomo","ark_dianjing2"],
                juexingji:true,
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                forced:true,
                skillAnimation:true,
                animationColor:"thunder",
                filter:function(event,player){
        if(player.hasSkill('ark_pomo')) return false;
        return player.storage.ark_dianjing>=5;
    },
                content:function(){    
        player.awakenSkill('ark_ruhua'); 
        player.gainMaxHp();       
        player.recover();
        player.storage.ark_ruhua_xiugai=true;
        player.addSkill('ark_pomo');  
    },
                ai:{
                    combo:"ark_dianjing_damage",
                },
            },
            "ark_pomo":{
                audio:"ext:无名方舟:2",
                trigger:{
                    player:"useCard2",
                },
                filter:function(event,player){
        if(!event.targets) return false;
        var info=get.info(event.card);
        if(info.allowMultiple==false) return false;
        if(info.type=='equip') return false;
        if(info.type=='delay') return false
        return game.hasPlayer(function(current){
            if(!current.hasMark('ark_dianjing_mark')) return false;
            return !event.targets.contains(current)&&lib.filter.targetEnabled2(event.card,player,current);
        });
    },
                direct:true,
                content:function(){
        'step 0'
        player.chooseTarget(get.prompt2('ark_pomo'),[1,Infinity],function(card,player,target){
            if(!target.hasMark('ark_dianjing_mark')) return false;
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
            for(var i=0;i<event.targets.length;i++){
                event.targets[i].removeMark('ark_dianjing_mark',1);
            }
        }
        else{
            event.finish();
        }
        'step 2'
        player.logSkill('ark_pomo',event.targets);
        trigger.targets.addArray(event.targets);
    },
            },
            "ark_dianjing2":{
            },
            "ark_panzhen":{
                marktext:"御",
                intro:{
                    name:"磐阵",
                    "name2":"御",
                    content:"当前有#个“御”",
                },
                audio:"ext:无名方舟:2",
                trigger:{
                    global:"gameDrawAfter",
                },
                forced:true,
                content:function(){
        player.addMark('ark_panzhen',3);
        player.addSkill('ark_panzhen_ai');
    },
                group:["ark_panzhen_effect"],
                global:["ark_panzhen_target"],
                subSkill:{
                    ai:{
                        charlotte:true,
                        ai:{
                            filterDamage:true,
                            skillTagFilter:function(player,tag,arg){
                    if(!player.hasMark('ark_panzhen')) return false;
                    if(!game.hasPlayer(function(current){
                        return current.hasSkill('ark_panzhen_effect');
                    })) return false;
                    if(arg&&arg.player){
                        if(arg.player.hasSkillTag('jueqing',false,player)) return false;
                    }
                },
                        },
                        sub:true,
                    },
                    effect:{
                        trigger:{
                            global:"damageBegin4",
                        },
                        forced:true,
                        popup:false,
                        filter:function(event,player){
                return event.player.hasMark('ark_panzhen')
            },
                        content:function(){
                if(!player.storage.ark_skilllvl) player.storage.ark_skilllvl=0
                player.storage.ark_skilllvl+=trigger.num
                player.logSkill('ark_panzhen',trigger.player)
                player.line(trigger.player,'green');
                trigger.cancel();
                trigger.player.removeMark('ark_panzhen',1);
            },
                        sub:true,
                    },
                    target:{
                        mod:{
                            targetEnabled:function(card,player,target){
                    if(get.type(card)=='delay'&&target.hasMark('ark_panzhen')){
                        return false;
                    }
                },
                        },
                        sub:true,
                    },
                },
            },
            "ark_tongyin":{
                audio:"ext:无名方舟:2",
                trigger:{
                    player:"damageEnd",
                },
                filter:function(event,player){
        return event.source;
    },
                forced:true,
                content:function(){
        player.line(trigger.source)
        player.discardPlayerCard(trigger.source,'he',true);
        trigger.source.addTempSkill('fengyin')
    },
            },
            "ark_tieyu":{
                audio:"ext:无名方舟:2",
                enable:"phaseUse",
                skillAnimation:"epic",
                animationColor:"metal",
                unique:true,
                limited:true,
                selectCard:function(){
        var player=_status.event.player;
        return [Math.max(1,ui.selected.targets.length),Infinity];
    },
                selectTarget:function(){
        return ui.selected.cards.length;
    },
                position:"h",
                filterCard:function(card,player,event){
        return get.color(card)=='red'
    },
                multitarget:true,
                multiline:true,
                filterTarget:function(card,player,target){
        if(target==player) return false;
        return true;
    },
                filter:function(event,player){
        return player.countCards('he',{color:"red"})>0;
    },
                content:function(){
        'step 0'
        player.awakenSkill('ark_tieyu');
        player.addMark('ark_panzhen',2);
        player.discard('j',Infinity,true)
        for(var i=0;i<targets.length;i++){
            targets[i].addMark('ark_panzhen',2);
            targets[i].addSkill('ark_panzhen_ai');
            targets[i].discard(targets[i].getCards('j'))
        }
    },
                ai:{
                    order:5,
                    result:{
                        target:function(player){
                return 4;
            },
                    },
                },
                mark:true,
                intro:{
                    content:"limited",
                },
                init:function(player,skill){
        player.storage[skill]=false;
    },
            },
            "ark_chulei":{
                group:["ark_chulei_dis"],
                audio:"ext:无名方舟:2",
                trigger:{
                    source:"damageBegin1",
                },
                filter:function(event,player){
        return event.nature!='thunder'
    },
                forced:true,
                content:function(){
        trigger.nature='thunder'
    },
                subSkill:{
                    dis:{
                        trigger:{
                            source:"damageSource",
                        },
                        popup:false,
                        direct:true,
                        locked:false,
                        filter:function(event,player){
                return event.player.countDiscardableCards(player,'he')>0&&event.nature=='thunder';
            },
                        content:function(){
                player.discardPlayerCard(trigger.player,get.prompt('ark_chulei',trigger.player)).set('logSkill',['ark_chulei',trigger.player]);
            },
                        sub:true,
                    },
                },
            },
            "ark_yongquan":{
                group:["ark_yongquan_1"],
                audio:"ext:无名方舟:4",
                derivation:["ark_dikang"],
                usable:1,
                enable:"phaseUse",
                filterCard:function(card,player,event){
        return card.name=='sha'
    },
                position:"h",
                check:function(card){
        return 9-get.value(card)
    },
                filterTarget:function(card,player,target){
        if(target.hp>=target.maxHp) return false;
        return player.inRange(target)||player==target
    },
                filter:function(event,player){
        return player.countCards('h',function(card){
            return card.name=='sha'
        })
    },
                content:function(){
        target.recover();
        target.discard(target.getCards('j'))
        target.addTempSkill('ark_dikang','qlZhunbeiBegin')
        if(!player.storage.ark_skilllvl) player.storage.ark_skilllvl=0
        player.storage.ark_skilllvl+=1
    },
                locked:false,
                mod:{
                    attackFrom:function(from,to,distance,player){
            return distance-2
        },
                },
                ai:{
                    order:9,
                    result:{
                        target:function(player,target){
                var num=5
                if(target.countCards('j')>0) num+=2
                if(target.hp==1) return num;
                if(player==target&&player.countCards('h')>player.hp) return num;
                return num-3;
            },
                    },
                    threaten:2,
                },
                subSkill:{
                    "1":{
                        trigger:{
                            player:"phaseZhunbeiBegin",
                        },
                        silent:true,
                        charlotte:true,
                        content:function(){
                event.trigger("qlZhunbeiBegin");
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                },
            },
            "ark_dikang":{
                mod:{
                    targetEnabled:function(card,player,target){
            if(get.type(card)=='delay'){
                return false;
            }
        },
                },
            },
            "ark_chilian_ark_leizi":{
                audio:"ext:无名方舟:2",
                group:["ark_chilian_ark_leizi_end","ark_chilian_ark_leizi_begin"],
                trigger:{
                    player:"useCardToPlayered",
                },
                filter:function(event,player){
        if(player.hasSkill('ark_chilian')) return false
        var type=get.type(event.card);
        if(type!='basic'&&type!='trick') return false;
        if(event.targets&&event.targets.length==1){
            return game.hasPlayer(function(current){
                if(player.storage.ark_chilian_ark_leizi&&player.storage.ark_chilian_ark_leizi.contains(current)) return false;
                else if(!event.targets.contains(current)&&lib.filter.targetEnabled2(event.card,player,current)){
                    return get.distance(event.targets[0],current)<=1&&get.distance(current,event.targets[0])<=1
                }
            })
        }
    },
                direct:true,
                content:function(){
        'step 0'
        event.num=0
        event.target=trigger.targets[0];
        'step 1'
        player.chooseTarget('弛链：你可以选择一名角色，其可能成为'+get.translation(trigger.card)+'的额外目标',function(card,player,target){
            var player=_status.event.player;
            if(_status.event.targets.contains(target)) return false;
            if(player.storage.ark_chilian_ark_leizi&&player.storage.ark_chilian_ark_leizi.contains(target)) return false
            return lib.filter.targetEnabled2(_status.event.card,player,target)&&get.distance(event.target,target)<=1&&get.distance(target,event.target)<=1
        }).set('targets',trigger.targets).set('card',trigger.card).set('ai',function(target){
            var trigger=_status.event.getTrigger();
            var player=_status.event.player;
            return get.effect(target,trigger.card,player,player);
        });
        'step 2'
        if(result.targets){
            event.target=result.targets[0]
            event.targets=result.targets
            if(!player.storage.ark_chilian_ark_leizi) player.storage.ark_chilian_ark_leizi=[];
            player.storage.ark_chilian_ark_leizi.push(event.target)
            player.markSkill('ark_chilian_ark_leizi')
            player.logSkill('ark_chilian_ark_leizi',event.target);
            player.line(event.target);
            player.judge(function(card){
                    return get.color(card)=='black'?1:0
            });
        }
        else event.finish()
        'step 3'
        if(result.bool){
            trigger.targets.addArray(event.targets);
        }
        else event.finish()
        'step 4'
        if(event.num==0){
            if(game.hasPlayer(function(current){
                if(player.storage.ark_chilian_ark_leizi&&player.storage.ark_chilian_ark_leizi.contains(current)) return false;
                else if(!trigger.targets.contains(current)&&lib.filter.targetEnabled2(trigger.card,player,current)){
                    return get.distance(event.target,current)<=1&&get.distance(current,event.target)<=1
                }
            })){
                event.num++
                event.goto(1)
            }
        }
    },
                intro:{
                    content:"已对$发动过技能",
                },
                subSkill:{
                    end:{
                        trigger:{
                            global:"phaseJieshu",
                        },
                        silent:true,
                        forced:true,
                        popup:false,
                        content:function(){
                player.storage.ark_chilian_ark_leizi=[];
                player.unmarkSkill('ark_chilian_ark_leizi')
            },
                        sub:true,
                    },
                    begin:{
                        trigger:{
                            global:"gameDrawBefore",
                        },
                        forced:true,
                        popup:false,
                        content:function(){
                if(player.hasSkill('ark_chilian')) player.removeSkill('ark_chilian_ark_leizi');
            },
                        sub:true,
                    },
                },
            },
            "ark_gouzhua":{
                enable:"phaseUse",
                usable:1,
                audio:"ext:无名方舟:4",
                filter:function(event,player){
        return game.hasPlayer(function(current){
            return current!=player&&current.countGainableCards(player,'hej')>0&&player.inRange(current)
        })&&player.countCards('h')>0
    },
                filterCard:true,
                selectCard:function(){
        var player=_status.event.player;
        return [Math.max(1,ui.selected.targets.length),2];
    },
                position:"h",
                selectTarget:function(){
        return ui.selected.cards.length;
    },
                multitarget:true,
                multiline:true,
                filterTarget:function(card,player,target){
        return target.countGainableCards(player,'hej')>0&&player.inRange(target)
    },
                content:function(){
        for(var i=0;i<targets.length;i++){
            player.gainPlayerCard('勾爪:获得'+get.translation(targets[i])+'一张牌',targets[i],get.buttonValue,'hej',true)
        }
    },
                ai:{
                    order:9,
                    result:{
                        target:function(player){
                return -3;
            },
                    },
                    threaten:1.5,
                },
            },
            "ark_shuibeng":{
                group:["ark_shuibeng_1"],
                audio:"ext:无名方舟:2",
                trigger:{
                    global:"damageBegin4",
                },
                filter:function(event,player){
        return event.nature=='fire'&&player.countCards('h')>0
    },
                direct:true,
                content:function(){
        'step 0'
        player.chooseToDiscard('h').set('prompt','水泵：你可以弃置一张牌，防止'+get.translation(trigger.player)+'受到的火焰伤害').set('ai',function(card){
            var player=_status.event.player
            var target=_status.event.target
            var source=_status.event.source
            if(get.damageEffect(target,source,player,{nature:'fire'})<0){
                return 8-get.value(card)
            }
            return -1;
        }).set('target',trigger.player).set('source',trigger.source)
        'step 1'
        if(result.bool){
            player.logSkill('ark_shuibeng',trigger.player)
            player.line(trigger.player)
            trigger.cancel();
        }
    },
                ai:{
                    nofire:true,
                    effect:{
                        target:function(card,player,target,current){
                if(get.tag(card,'fireDamage')) return 'zerotarget';
            },
                    },
                },
                subSkill:{
                    "1":{
                        trigger:{
                            global:"damageBegin3",
                        },
                        filter:function(event,player){
                return event.nature=='thunder'&&player.countCards('h')>0
            },
                        direct:true,
                        content:function(){
                'step 0'
                player.chooseToDiscard('h').set('prompt','水泵：你可以弃置一张牌，令'+get.translation(trigger.player)+'受到的雷电伤害+1').set('ai',function(card){
                    var player=_status.event.player
                    var target=_status.event.target
                    var source=_status.event.source
                    if(get.damageEffect(target,source,player,{nature:'thunder'})>0){
                        return 8-get.value(card)
                    }
                    return -1;
                }).set('target',trigger.player).set('source',trigger.source)
                'step 1'
                if(result.bool){
                    player.logSkill('ark_shuibeng',trigger.player)
                    player.line(trigger.player)
                    trigger.num++;
                }
            },
                        sub:true,
                    },
                },
            },
            "ark_shuipao":{
                audio:"ext:无名方舟:2",
                usable:1,
                trigger:{
                    source:"damageSource",
                },
                direct:true,
                filter:function(event,player){
        return player.countCards('h')>0;
    },
                content:function(){
        'step 0'
        player.chooseToDiscard(1,'h').set('prompt','你可以弃置一张牌，令'+get.translation(trigger.player)+'到其他角色/其他角色到'+get.translation(trigger.player)+'的距离+2').set('ai',function(card){
            var player=_status.event.player
            var target=_status.event.target
            if(get.attitude(player,target)<0){
                return 8-get.value(card)
            }
        }).set('target',trigger.player)
        'step 1'
        if(result.bool){
            player.logSkill('ark_shuipao',trigger.player)
            trigger.player.addTempSkill('ark_shuipao_distance',{player:"phaseJieshuBegin"})
        }
        
    },
                subSkill:{
                    distance:{
                        mark:true,
                        marktext:"水",
                        intro:{
                            content:function(storage,player,skill){
                    return '你被水炮推远了，你到其他角色/其他角色到你的距离均+2'
                },
                        },
                        mod:{
                            globalTo:function(from,to,distance){
                    return distance+2;
                },
                            globalFrom:function(from,to,distance){
                    return distance+2;
                },
                        },
                        sub:true,
                    },
                },
            },
            "ark_tongchou":{
                audio:"ext:无名方舟:4",
                trigger:{
                    global:"damageSource",
                },
                filter:function(event,player){
        if(!event.source) return false;
        if(player==event.source) return false
        return player.inRange(event.source)
    },
                direct:true,
                content:function(){
        'step 0'
        var list=[]
        if(player.countCards('he')>1&&trigger.player&&trigger.player.isAlive){
           list.push('ark_xietong')
        }
        if(trigger.source&&trigger.source.isAlive()){
           list.push('ark_diaodu')
        }
        if(list.length>0){
            player.chooseControl(list,'cancel2').set('prompt','统筹：你可以选择执行一个效果').set('ai',function(){
            var player=_status.event.player
            var targetp=_status.event.target1
            var targets=_status.event.target2
            if(list.contains('ark_xietong')&&player.countCards('he')>3&&get.damageEffect(targetp,player,player)>0) return 'ark_xietong'
            if(list.contains('ark_diaodu')&&get.attitude(player,targets)>0) return 'ark_diaodu'
            return;
            }).set('target1',trigger.player).set('target2',trigger.source)
        }
        else{
            event.finish()
        }
        'step 1'
        if(result.control=='ark_diaodu'){
            event.choose=result.control
            player.draw()
            player.logSkill('ark_tongchou',trigger.source)
            player.line(trigger.source)
            player.popup('ark_diaodu')
            if(player==trigger.source) event.finish()
            player.chooseCard('he',true).set('ai',function(card){
                return 20-get.value(card)
            }).set('prompt','请选择要交给'+get.translation(trigger.source)+'的牌')
        }
        if(result.control=='ark_xietong'){
            event.choose=result.control
            player.logSkill('ark_tongchou',trigger.player)
            player.line(trigger.player)
            player.popup('ark_xietong')
            player.chooseToDiscard('he',1,true).set('ai',function(card){
                return 8-get.value(card)
            }).set('prompt','请弃置1张牌，对'+get.translation(trigger.player)+'造成一点伤害')
        }
        'step 2'
        if(event.choose=='ark_diaodu'){
            if(result.cards){
                player.give(result.cards[0],trigger.source);
                player.$give(result.cards[0],trigger.source);
            }
        }
        if(event.choose=='ark_xietong'){
            if(result.bool){
                trigger.player.damage()
            }
        }
    },
            },
            "ark_zhenxian":{
                group:["ark_zhenxian_bisonjieshu"],
                audio:"ext:无名方舟:3",
                trigger:{
                    player:"phaseJieshuEnd",
                },
                direct:true,
                filter:function(event,player){
        return game.hasPlayer(function(current){
            if(player==current) return false
            return (player.storage.ark_zhenxian!=current||!player.storage.ark_zhenxian)&&get.distance(player,current)<=1
        })
    },
                content:function(){
        'step 0'
        player.chooseTarget(1,get.prompt2('ark_zhenxian'),function(card,player,target){
            var player=_status.event.player
            if(player==target) return false;
            return (player.storage.ark_zhenxian!=target||!player.storage.ark_zhenxian)&&get.distance(player,target)<=1
        }).set('ai',function(target){
            var player=_status.event.player
            return get.attitude(player,target)
        })
        'step 1'
        delete player.storage.ark_zhenxian
        if(result.targets){
            var target=result.targets[0]
            player.line(target)
            player.storage.ark_zhenxian=target
            player.logSkill('ark_zhenxian',target)
            var num=target.hp-target.countCards('h')
            if(num<1) num=1
            target.draw(num)
            target.addTempSkill('ark_zhenxian_def',['arkbisonjieshu'])
        }
        else{
            event.finish()
        }
        'step 2'
        var num=player.hp-player.countCards('h')
        if(num<1) num=1
        player.draw(num)
    },
                subSkill:{
                    def:{
                        sub:true,
                        mark:true,
                        intro:{
                            content:"阵线：无法成为【杀】或【决斗】的目标",
                        },
                        mod:{
                            targetEnabled:function(card,player,target){
                    if(card.name=='sha'||card.name=='juedou'){
                        return false;
                    }
                },
                        },
                    },
                    bisonjieshu:{
                        trigger:{
                            player:["phaseJieshuBegin","die"],
                        },
                        forceDie:true,
                        silent:true,
                        content:function(){
                event.trigger('arkbisonjieshu')
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                },
            },
            "ark_qiaoji":{
                audio:"ext:无名方舟:2",
                trigger:{
                    source:"damageSource",
                },
                logTarget:"player",
                filter:function(event,player){
        return !event.player.hasSkill('ark_qiaoji_1')&&player!=event.player&&event.player.isAlive();
    },
                forced:true,
                content:function(){
        trigger.player.addTempSkill('ark_qiaoji_1')
    },
                subSkill:{
                    "1":{
                        mark:true,
                        marktext:"晕",
                        mod:{
                            "cardEnabled2":function (card,player){
                    if(get.position(card)=='h')return false;
                },
                            cardRespondable:function(card,player){
                    return false;
                },
                            cardSavable:function(card,player){
                    return false;
                },
                        },
                        intro:{
                            content:"你被刀鞘击晕，不能使用或打出手牌",
                        },
                        sub:true,
                    },
                },
            },
            "ark_badao":{
                audio:"ext:无名方舟:1",
                skillAnimation:"epic",
                animationColor:"fire",
                juexingji:true,
                derivation:"ark_jueying",
                unique:true,
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                filter:function(event,player){
        if(player.storage.ark_biance) return false
        return game.hasPlayer(function(current){
            return current.hp-player.hp>=2||current.countCards('h')-player.countCards('h')>=2
        })
    },
                forced:true,
                content:function(){
        'step 0'
        player.recover()
        player.draw(2)
        player.equip(game.createCard('ark_chixiao','diamond',9));
        player.chooseTarget([1,Infinity],function(card,player,target){
            return player.inRange(target)
        }).set('ai',function(target){
            var player=_status.event.player
            return get.damageEffect(target,player,player);
        }).set('prompt','拔刀：你可以选择任意名角色造成1点伤害')
        'step 1'
        if(result.targets){
            for(var i=0;i<result.targets.length;i++){
                player.line(result.targets[i])
                result.targets[i].damage();
            }
        }
        player.addSkill('ark_jueying')
        game.log(player,'获得了技能','#g【绝影】')
        player.awakenSkill('ark_badao');
        player.storage.ark_badao=true;
    },
                ai:{
                    threaten:2,
                },
            },
            "ark_chixiao_skill":{
                enable:["chooseToRespond","chooseToUse"],
                filterCard:function(card,player){
        return get.color(card)=='red';
    },
                cardSkill:true,
                position:"hes",
                viewAs:{
                    name:"sha",
                },
                viewAsFilter:function(player){
        if(!player.countCards('hes',{color:'red'})) return false;
    },
                prompt:"将一张红色牌当杀使用或打出",
                check:function(card){return (_status.event.getParent().name=="ark_jueying"?12:6)-get.value(card)},
                ai:{
                    "unequip_ai":true,
                    unequip:true,
                    skillTagFilter:function(player,tag,arg){
            if(tag=='unequip'){
                if(arg&&arg.card&&arg.card.name=="sha") return true;
                return false
            } 
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
                    canLink:function(player,target,card){
                        if(!target.isLinked()&&!player.hasSkill('wutiesuolian_skill')) return false;
                        if(target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                            target:target,
                            card:card,
                        },true)) return false;
                        if(player.hasSkill('jueqing')||player.hasSkill('gangzhi')||target.hasSkill('gangzhi')) return false;
                        return true;
                    },
                    basic:{
                        useful:[5,3,1],
                        value:[5,3,1],
                    },
                    order:function(item,player){
                        if(player.hasSkillTag('presha',true,null,true)) return 10;
                        if(lib.linked.contains(get.nature(item))){
                            if(game.hasPlayer(function(current){
                                return current!=player&&current.isLinked()&&player.canUse(item,current,null,true)&&get.effect(current,item,player,player)>0&&lib.card.sha.ai.canLink(player,current,item);
                            })&&game.countPlayer(function(current){
                                return current.isLinked()&&get.damageEffect(current,player,player,get.nature(item))>0;
                            })>1) return 3.1;
                            return 3;
                        }
                        return 3.05;
                    },
                    result:{
                        target:function(player,target,card,isLink){
                            var eff=function(){
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
                            }();
                            if(!isLink&&target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                                target:target,
                                card:card,
                            },true)) return eff/1.2;
                            return eff;
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
                },
            },
            "ark_jueying":{
                name:"ark_jueying",
                audio:"ext:无名方舟:1",
                enable:"phaseUse",
                skillAnimation:"epic",
                animationColor:"fire",
                unique:true,
                limited:true,
                selectTarget:1,
                filterTarget:function(card,player,target){
        return player.inRange(target)
    },
                filter:function(event,player){
        return player.storage.ark_jueying==false;
    },
                content:function(){
        'step 0'
        player.storage.ark_jueying=true;
        event.count=0
        'step 1'
        event.count++
        player.chooseToUse('绝影：对'+get.translation(target)+'使用一张杀',function(card,player){
                return get.name(card)=='sha'
            }).set('filterTarget',function(card,player,target){
            return target==_status.event.targetx
        }).set('targetx',target).set('oncard',function(card){
            card.ark_jueying=true;
        }).set('selectTarget',-1).set('complexSelect',true);
        'step 2'
        if(result.bool){
            if(event.count<player.maxHp&&target.isAlive()) event.goto(1)
        }
        'step 3'
        if(target.isAlive()) target.turnOver()
        player.awakenSkill('ark_jueying');
    },
                mark:true,
                intro:{
                    content:"limited",
                },
                init:function(player,skill){
        player.storage[skill]=false;
    },
                ai:{
                    unequip:true,
                    skillTagFilter:function(player,tag,arg){
                        if(tag=='unequip'&&arg&&arg.card&&arg.card.ark_jueying)return true;
                        return false;
                    },
                    order:function(){
                        return get.order({name:'sha'})-0.1;
                    },
                    result:{
                        player:function(player){ 
                            var tag=(function(){
                                var num=[];                               
                                game.filterPlayer((t)=>{                               
                                    var eff=0,
                                    number=player.countCards('hejs',function(card){
                                        var skills=player.getSkills();
                                        game.expandSkills(skills);
                                        for(var i=0;i<skills.length;i++){
                                            var info=lib.skill[skills[i]];
                                            if(info.enable){
                                                if(info.enable=="chooseToUse"||(Array.isArray(info.enable)&&info.enable.contains("chooseToUse"))){
                                                    if(info.viewAs&&(typeof info.viewAsFilter=="function"?info.viewAsFilter(player)===false?false:true:typeof info.viewAsFilter=="boolean"?info.viewAsFilter:true)){
                                                        if(info.viewAs.name&&info.viewAs.name=="sha"&&(typeof info.filterCard=="function"?info.filterCard(card,player):typeof info.filterCard=="boolean"?info.filterCard:true)){
                                                            if(get.position(card)==(info.position||"h")||info.position.indexOf(get.position(card))!=-1){
                                                                var view=Object.assign({},info.viewAs);
                                                                if(!view.nature)view.nature="none";
                                                                if(!view.cards)view.cards=[card];
                                                                if(get.effect(t,view,player,player)>eff)eff=get.effect(t,view,player,player);
                                                                if(get.effect(t,view,player,player)>0)return true;
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                        return get.effect(t,card,player,player)>0&&get.name(card)=='sha';
                                    });  
                                    if(number>player.maxHp) number=player.maxHp;
                                    if(eff>0)num.push([t,eff*(number+(number>=t.hp?t.hp:0)+(t.num('he')/2))]);
                                });
                                if(num.length>0)return num.sort((a,b)=>b-a)[0][0];
                            })();                          
                            if(tag)return 1;
                            return 0;
                        },
                        target:function(player,target){
                           var tag=(function(){
                                var num=[];                               
                                game.filterPlayer((t)=>{                               
                                    var eff=0,
                                    number=player.countCards('hejs',function(card){
                                        var skills=player.getSkills();
                                        game.expandSkills(skills);
                                        for(var i=0;i<skills.length;i++){
                                            var info=lib.skill[skills[i]];
                                            if(info.enable){
                                                if(info.enable=="chooseToUse"||(Array.isArray(info.enable)&&info.enable.contains("chooseToUse"))){
                                                    if(info.viewAs&&(typeof info.viewAsFilter=="function"?info.viewAsFilter(player)===false?false:true:typeof info.viewAsFilter=="boolean"?info.viewAsFilter:true)){
                                                        if(info.viewAs.name&&info.viewAs.name=="sha"&&(typeof info.filterCard=="function"?info.filterCard(card,player):typeof info.filterCard=="boolean"?info.filterCard:true)){
                                                            if(get.position(card)==(info.position||"h")||info.position.indexOf(get.position(card))!=-1){
                                                                var view=Object.assign({},info.viewAs);
                                                                if(!view.nature)view.nature="none";
                                                                if(!view.cards)view.cards=[card];
                                                                if(get.effect(t,view,player,player)>eff)eff=get.effect(t,view,player,player);
                                                                if(get.effect(t,view,player,player)>0)return true;
                                                            };
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                        return get.effect(t,card,player,player)>0&&get.name(card)=='sha';
                                    });  
                                    if(number>player.maxHp) number=player.maxHp;
                                    if(eff>0)num.push([t,eff*(number+(number>=t.hp?t.hp:0)+(t.num('he')/2))]);
                                });
                                if(num.length>0)return num.sort((a,b)=>b-a)[0][0];
                            })();
                            if(!tag)return;                           
                            var t=tag,number=player.countCards('hejs',function(card){
                                var skills=player.getSkills();
                                game.expandSkills(skills);
                                for(var i=0;i<skills.length;i++){
                                    var info=lib.skill[skills[i]];
                                    if(info.enable){
                                        if(info.enable=="chooseToUse"||(Array.isArray(info.enable)&&info.enable.contains("chooseToUse"))){
                                            if(info.viewAs&&(typeof info.viewAsFilter=="function"?info.viewAsFilter(player)===false?false:true:typeof info.viewAsFilter=="boolean"?info.viewAsFilter:true)){
                                                if(info.viewAs.name&&info.viewAs.name=="sha"&&(typeof info.filterCard=="function"?info.filterCard(card,player):typeof info.filterCard=="boolean"?info.filterCard:true)){
                                                    if(get.position(card)==(info.position||"h")||info.position.indexOf(get.position(card))!=-1){
                                                        var view=Object.assign({},info.viewAs);
                                                        if(!view.nature)view.nature="none";
                                                        if(!view.cards)view.cards=[card];
                                                        if(get.effect(t,view,player,player)>0)return true;
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                                return get.name(card)=='sha'||(player.getEquip('ark_chixiao')&&get.color(card)=='red');
                            });  
                            if(number>0&&target==tag)return -1;
                            return 0;
                        },
                    },
                    threaten:2,
                },
            },
            "ark_chouqin":{
                group:["ark_chouqin_mhcard","ark_chouqin_draw"],
                audio:"ext:无名方舟:2",
                trigger:{
                    global:"phaseJieshuBegin",
                },
                direct:true,
                filter:function (event,player){
        if(player==event.player) return false;
        var cards=[];
        game.getGlobalHistory('cardMove',function(evt){
            if(evt.name=='lose'&&evt.type=='discard'&&evt.position==ui.discardPile) cards.addArray(evt.cards);
        });
        return cards.length>1
    },
                content:function (){
        "step 0"
        if(trigger.delay==false) game.delay();
        "step 1"
        var cards=[];
        game.getGlobalHistory('cardMove',function(evt){
            if(evt.name=='lose'&&evt.position==ui.discardPile) cards.addArray(evt.cards);
        });
        if(window.decadeUI){
            var dialog = decadeUI.content.chooseGuanXing(player, cards, cards.length, null, cards.length, false);
            dialog.caption = '【酬勤】';
            dialog.header1 = '弃牌堆';
            dialog.header2 = '获得牌';
            dialog.tip = '请选择要获得的牌';
            dialog.lockCardsOrder(0);
            dialog.cards[1] = []
            dialog.cards[0] = dialog.cards[0];
            dialog.update();
            dialog.onMoved();
            dialog.callback = function(){
                var length1=this.cards[1].length
                var length0=this.cards[0].length
                return this.cards[1].length<=Math.floor(length0/2+length1/2)
            };
            game.broadcast(function(player, cards, callback){
                if (!window.decadeUI) return;
                var dialog = decadeUI.content.chooseGuanXing(player, cards, cards.length, null, cards.length, false);
                dialog.caption = '【酬勤】';
                dialog.header1 = '弃牌堆';
                dialog.header2 = '获得牌';
                dialog.tip = '请选择要获得的牌';
                dialog.lockCardsOrder(0);
                dialog.cards[1] = [];
                dialog.cards[0] = dialog.cards[0];
                dialog.update();
                dialog.onMoved();
                dialog.callback = callback;
            }, player, cards, dialog.callback);
            event.switchToAuto = function(){
                var cards = dialog.cards[0].concat();
                var time = 500;
                if (cards.length) {
                    var gaincards = [];
                    var card=0
                    for(var i = 0; i <= Math.floor(cards.length/2);i++){
                        for(var k = 0;k<cards.length; k++){
                            if(get.value(cards[k])>0 && ( !card || get.value(cards[k]) > get.value(card))){
                                card=cards[k]
                            }
                        }
                        if(card) gaincards.push(card)
                        cards.remove(card)
                        card=0
                    }
                    if (gaincards.length) {
                        for (var i = 0; i < gaincards.length; i++) {
                            setTimeout(function(card, index, finished){
                                dialog.move(card, index, 1);
                                if (finished) dialog.finishTime(1000);
                            }, time, gaincards[i], i, i >= gaincards.length - 1);
                            time += 500;
                        }
                    } else {
                        dialog.finishTime(1000);
                    }
                } else {
                    dialog.finishTime(1000);
                }
            }
            if (event.isOnline()) {
                event.player.send(function(){
                    if (!window.decadeUI && decadeUI.eventDialog) _status.event.finish();
                }, event.player);
                event.player.wait();
                decadeUI.game.wait();
            } else if (!event.isMine()) {
                event.switchToAuto();
            }
        } else { 
            var dialog=ui.create.dialog('【酬勤】<br>请选择要获得的牌',"hidden");             
            var table=document.createElement('div');
            table.classList.add('add-setting');
            table.style.margin='5px';
            table.style.width='80%';
            table.style.position='relative';
            Object.assign(table.style,{
                background: "rgba(0,0,0,0.3)",
                "box-shadow": "rgba(0, 0, 0, 0.4) 0 0 0 1px",
                "border-radius": "6px",
                transition: "opacity 0.3s",
                overflow: "auto",
                "white-space": "nowrap"            
            });
            table.addEventListener("wheel", (e) => {
                e.preventDefault();
                table.scrollLeft += e.deltaY;
            });
            Object.assign(dialog.style,{
                background: "rgba(0,0,0,0.2)",
                "box-shadow": "rgba(0, 0, 0, 0.3) 0 0 0 1px",
                "border-radius": "6px",
            });
            table.innerHTML="<span style=position:fixed;left:46%;>弃牌堆</span><br>";  
            dialog.content.appendChild(table);         
            for(var i of cards){
                var next=ui.create.button(i,"card");        
                table.appendChild(next);
                next.link=i;         
                for(var j in lib.element.button){
                    next[j]=lib.element.button[i];
                }   
                dialog.buttons.add(next);
            };         
            player.chooseButton(dialog,Math.floor(cards.length/2)).set("ai",function (button){
                return get.value(button.link);
            });     
        }
        "step 2"
        if(window.decadeUI){
            if (event.cards2) {
                player.gain(event.cards2, 'gain2', 'log');
                player.logSkill(event.name);
            }
        } else if(result.links){
            player.gain(result.links, 'gain2', 'log');
            player.logSkill(event.name);
        }
    },
                ai:{
                    threaten:2,
                },
                subSkill:{
                    mhcard:{
                        mod:{
                            maxHandcardBase:function(player,num){
                    return player.maxHp
                 },
                        },
                        sub:true,
                    },
                    draw:{
                        audio:"ext:无名方舟:1",
                        trigger:{
                            player:"phaseDrawBegin2",
                        },
                        forced:true,
                        filter:function(event,player){
                return !event.numFixed;
            },
                        content:function(){
                trigger.num--;
            },
                        ai:{
                            threaten:0.6,
                        },
                        sub:true,
                    },
                },
            },
            "ark_buwang":{
                audio:"ext:无名方舟:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function(card,player,target){
        if(player==target) return false;
        if(ui.selected.targets.length==1){
            return get.distance(player,target)<=1
        }
        return get.distance(player,target)<=2
    },
                selectCard:1,
                position:"he",
                filterCard:true,
                selectTarget:2,
                limited:true,
                skillAnimation:"epic",
                animationColor:"fire",
                filter:function(event,player){
        return game.players.length>2;
    },
                multitarget:true,
                multiline:true,
                targetprompt:["角色A","角色B"],
                changeSeat:true,
                content:function(){
        player.awakenSkill('ark_buwang');
        game.filterPlayer(function(current){
            if(get.distance(targets[0],current)<=1&&current!=player){
                targets[0].line(current)
                current.turnOver()
            }
        })
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
                return Math.min(0,distance-distance2)-4;
            },
                    },
                },
                mark:true,
                intro:{
                    content:"limited",
                },
                init:function(player,skill){
        player.storage[skill]=false;
    },
            },
            "ark_tanfan":{
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                audio:"ext:无名方舟:4",
                content:function(){
        "step 0"
        var list=['断鳌','刺身']
        player.chooseControl(list,'cancel2').set('prompt','摊贩：你可以选择获得一项效果持续到下回合开始').set('ai',function(){
            return list.randomGet()
        })
        "step 1"
        if(result.control){
            if(result.control=='断鳌'){
                player.addTempSkill('ark_tanfan_duanao',{player:"phaseZhunbeiBefore"})
                player.popup('断鳌')
                game.log(player,'选择获得了','#g【摊贩】','的'+'<font color=#00FFFF>【断鳌】</font>'+'效果');
            }
            if(result.control=='刺身'){
                player.addTempSkill('ark_tanfan_cishen',{player:"phaseZhunbeiBefore"})
                player.popup('刺身')
                game.log(player,'选择获得了','#g【摊贩】','的'+'<font color=#FF0000>【刺身】</font>'+'效果');
            }
        }
    },
                subSkill:{
                    duanao:{
                        mark:true,
                        marktext:"贩",
                        intro:{
                            content:function(storage,player,skill){
                    return '断鳌：你使用【杀】指定一名角色时，你可以令其非锁定技失效直到其下回合开始'
                },
                        },
                        shaRelated:true,
                        trigger:{
                            player:"useCardToPlayered",
                        },
                        check:function(event,player){
                return get.attitude(player,event.target)<=0;
            },
                        filter:function(event,player){
                return event.card.name=='sha';
            },
                        popup:false,
                        prompt:function(event){
                return '断鳌：是否令'+get.translation(event.target)+'的非锁定技失效'
            },
                        content:function(){
                "step 0"
                player.logSkill('ark_tanfan',trigger.target)
                trigger.target.addTempSkill('fengyin',{player:"phaseZhunbeiBegin"});
            },
                        ai:{
                            ignoreSkill:true,
                            skillTagFilter:function(player,tag,arg){
                    if(!arg||arg.isLink||!arg.card||arg.card.name!='sha') return false;
                    if(!arg.target||get.attitude(player,arg.target)>=0) return false;
              if(!arg.skill||!lib.skill[arg.skill]||lib.skill[arg.skill].charlotte||get.is.locked(arg.skill)||!arg.target.getSkills(true,false).contains(arg.skill)) return false;
                },
                        },
                        sub:true,
                    },
                    cishen:{
                        mark:true,
                        marktext:"贩",
                        intro:{
                            content:function(storage,player,skill){
                    return '刺身：当你对一名角色造成一点伤害时，你可以令与你距离为1的一名角色获得其一张牌'
                },
                        },
                        trigger:{
                            source:"damageSource",
                        },
                        direct:true,
                        filter:function(event,player){
                if(!event.num>0) return false;
                return game.hasPlayer(function(current){
                    return get.distance(player,current)<=1&&event.player.countGainableCards(current,'he')
                })
            },
                        content:function(){
                'step 0'
                event.count=0
                'step 1'
                event.count++
                player.chooseTarget(1,function(card,player,target){
                    var player=_status.event.player
                    return get.distance(player,target)<=1
                }).set('prompt','刺身：你可以令与你距离为1的一名角色获得'+get.translation(trigger.player)+'一张牌').set('ai',function(target){
                    var player=_status.event.player
                    var targetx=_status.event.targetx
                    if(get.attitude(player,targetx)>0) return;
                    return get.attitude(player,target)
                }).set('targetx',trigger.player)
                'step 2'
                if(result.targets){
                    event.target=result.targets[0]
                    player.logSkill('ark_tanfan',event.target)
                    event.target.line(trigger.player)
                    event.target.gainPlayerCard(trigger.player,get.buttonValue,'he',true).set('prompt','刺身：你可以获得'+get.translation(trigger.player)+'的一张牌')
                }
                else event.finish()
                'step 3'
                if(result.bool){
                    if(event.count<trigger.num) event.goto(1)
                }
            },
                        sub:true,
                    },
                },
            },
            "ark_shijing":{
                trigger:{
                    player:["phaseJieshuBegin","phaseDrawBegin2"],
                },
                audio:"ext:无名方舟:1",
                forced:true,
                content:function(){
        if(trigger.name=='phaseJieshu'){
            if(player.countCards('hes')>0){
                player.chooseToDiscard(1,'he','市井：结束阶段，你需要弃置一张牌',true)
            }
            else player.loseHp()
        }
        else if(!event.numFixed) trigger.num++
    },
            },
            "ark_zhanyi":{
                usable:1,
                audio:"ext:无名方舟:2",
                enable:["chooseToUse","chooseToRespond"],
                prompt:"将一张牌当做【闪】或【杀】使用或打出",
                viewAs:function(cards,player){
        var event=_status.event
        var filter=event._backup.filterCard;
        var name=false;
        var nature=null;
        if(filter({name:'shan',cards:[cards]},player,event)){
            name='shan'
        }
        else if(filter({name:'sha',cards:[cards]},player,event)){
            name='sha'
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
            var name='sha'
            if(player.countCards('hes',function(card){
                return name!='sha'||get.value(card)<5;
            })>0&&player.getUseValue({name:name,nature:null})>0){
                var temp=get.order({name:name,nature:null});
                if(temp>max){
                    max=temp;
                }
            }
            return 5-get.value(card);
        }
        return 1;
    },
                selectCard:1,
                position:"hes",
                filterCard:function(card,player,event){
        event=event||_status.event;
        var filter=event._backup.filterCard;
        if(filter({name:'shan',cards:[card]},player,event)) return true;
        if(filter({name:'sha',cards:[card],nature:null},player,event)) return true;
        return false;
    },
                filter:function(event,player){
        var filter=event.filterCard;
        if(player==_status.currentPhase) return false
        if(filter({name:'sha'},player,event)&&player.countCards('hes')) return true;
        if(filter({name:'shan'},player,event)&&player.countCards('hes')) return true;
        return false;
    },
                ai:{
                    respondSha:true,
                    respondShan:true,
                    skillTagFilter:function(player,tag){
            if(player.countCards('hes')) return true;
        },
                    order:function(item,player){
            if(player&&_status.event.type=='phase'){
                var max=0;
                var name='sha';
                if(player.countCards('hes',function(card){
                    return name!='sha'||get.value(card)<5;
                })>0&&player.getUseValue({name:name,nature:null})>0){
                    var temp=get.order({name:name,nature:null});
                    if(temp>max) max=temp;
                }
                max/=1.1;
                return max;
            }
            return 2;
        },
                },
            },
            "ark_jingji":{
                audio:"ext:无名方舟:2",
                trigger:{
                    player:"damageAfter",
                },
                filter:function(event,player){
       return event.source&&event.source!=player&&player.countCards('hes')>0
    },
                direct:true,
                content:function(){
        'step 0'
        player.chooseToUse('荆棘：是否对'+get.translation(trigger.source)+'使用一张杀',function(card,player){
                return get.name(card)=='sha'
            }).set('filterTarget',function(card,player,target){
            return target==_status.event.targetx
        }).set('targetx',trigger.source).set('logSkill',[event.name,trigger.source])
    },
            },
            "ark_banruo":{
                audio:"ext:无名方舟:2",
                enable:"phaseUse",
                unique:true,
                limited:true,
                skillAnimation:"epic",
                animationColor:"wood",
                filterTarget:function(card,player,target){
        return target==player.next||target==player.previous;
    },
                filter:function (event,player){
        return true;
    },
                content:function (){
        'step 0'
        player.awakenSkill('ark_banruo');
        event.side=target==player.next?'next':'previous';
        event.current=target;
        'step 1'
        if(event.current==player){
            event.finish();
            return;
        }
        event.current.judge()
        'step 2'
        if(result.suit!='heart'){
            player.chooseControl('ark_draw','ark_damage').set('prompt','对'+get.translation(event.current)+'造成伤害或摸牌').set('ai',function(){
                var player=_status.event.player
                var current=_status.event.current
                if(get.damageEffect(current,player,player)>1) return 'ark_damage'
                return 'ark_draw'
            }).set('current',event.current)
        }
        else event.goto(4)
        'step 3'
        if(result.control=='ark_damage'){
            player.line(event.current)
            event.current.damage()
        }
        else if(result.control=='ark_draw'){
            player.line(event.current)
            game.asyncDraw([player,event.current],1);
        }
        else event.finish()
        'step 4'
        var next=event.current[event.side];
        event.current.line(next)
        event.current=next
        event.goto(1)
    },
                ai:{
                    order:1,
                    result:{
                        player:function(player,target){
                var current=game.filterPlayer()
                return current.length*0.75*2
            },
                    },
                },
                mark:true,
                intro:{
                    content:"limited",
                },
                init:function(player,skill){
        player.storage[skill]=false;
    },
            },
            "ark_gonggan":{
                group:["ark_gonggan_exchange"],
                audio:"ext:无名方舟:2",
                trigger:{
                    source:"damageSource",
                },
                frequent:true,
                notemp:true,
                init:function(player){
        if(!player.storage.ark_gonggan) player.storage.ark_gonggan=[];
    },
                filter:function(event){
        return event.num>0;
    },
                content:function(){
        'step 0'
        player.draw()
        'step 1'
        if(player.countCards('h')){
            player.chooseCard('共感：你可以将一张手牌置于你的角色牌上',true);
        }
        else event.finish()
        'step 2'
        if(result.cards&&result.cards.length){
            player.lose(result.cards,ui.special,'toStorage');
            player.storage.ark_gonggan=player.storage.ark_gonggan.concat(result.cards);
            player.syncStorage('ark_gonggan');
            player.markSkill('ark_gonggan');
            game.log(player,'将',result.cards,'置于武将牌上作为“共感”牌');
        }
        if(player.storage.ark_gonggan.length>player.maxHp){
            var num=player.storage.ark_gonggan.length-player.maxHp;
            player.chooseCardButton(player.storage.ark_gonggan,'选择弃置'+num+'张“共感”牌',num,true).ai=function(button){
                var val=get.value(button.link);
                return -val;
            };
        }
        else event.finish()
        'step 3'
        if(result.links){
            for(var i=0;i<result.links.length;i++){
                player.storage.ark_gonggan.remove(result.links[i]);
            }
            game.cardsDiscard(result.links);
            player.$throw(result.links);
            game.log(player,'将',result.links,'置入了弃牌堆')
            player.syncStorage('ark_gonggan');
        }
    },
                intro:{
                    marktext:"感",
                    content:"cards",
                    onunmark:function(storage,player){
            if(storage&&storage.length){
                player.$throw(storage,1000);
                game.cardsDiscard(storage);
                game.log(storage,'被置入了弃牌堆');
             storage.length=0;
            }
        },
                },
                ai:{
                    threaten:1.2,
                },
                subSkill:{
                    exchange:{
                        unique:true,
                        trigger:{
                            player:["phaseUseBegin","phaseJieshuBegin"],
                        },
                        direct:true,
                        filter:function(event,player){
               return player.storage.ark_gonggan&&player.storage.ark_gonggan.length>0&&player.countCards('h')>0;
           },
                        content:function(){
               "step 0"
               var cards=player.getStorage("ark_gonggan");
               var next=player.chooseToMove('共感：是否交换“共感”和手牌？');
               next.set('list',[['共感牌',cards],['手牌区',player.getCards('h')],]);
               next.set('filterMove',function(from,to){
                   return typeof to!='number';
               });
               next.set('processAI',function(list){
                   var player=_status.event.player,cards=list[0][1].concat(list[1][1]).sort(function(a,b){
                       return get.useful(a)-get.useful(b);
                   }),cards2=cards.splice(0,player.storage.ark_gonggan.length);
                   return [cards2,cards];
               });
               "step 1"
               if(result.bool){
                   var pushs=result.moved[0],gains=result.moved[1];
                   pushs.removeArray(player.storage.ark_gonggan);
                   gains.removeArray(player.getCards('h'));
                   if(!pushs.length||pushs.length!=gains.length) return;
                   player.lose(pushs,ui.special,'toStorage');
                   player.gain(gains,'fromStorage');
                   player.storage.ark_gonggan.addArray(pushs);
                   player.storage.ark_gonggan.removeArray(gains);
                   player.markSkill('ark_gonggan');
               }
           },
                        sub:true,
                    },
                },
            },
            "ark_pojie":{
                skillAnimation:true,
                animationColor:"thunder",
                audio:"ext:无名方舟:1",
                unique:true,
                juexingji:true,
                derivation:["ark_kongxin","ark_shubao"],
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                forced:true,
                filter:function(event,player){
        return !player.hasSkill('ark_kongxin')&&player.storage.ark_gonggan&&player.storage.ark_gonggan.length>=3;
    },
                content:function(){
        player.gainMaxHp();
        player.recover();
        player.addSkill('ark_kongxin');
        player.addSkill('ark_shubao');
        player.awakenSkill('ark_pojie');
    },
            },
            "ark_kongxin":{
                audio:"ext:无名方舟:2",
                trigger:{
                    player:"useCard2",
                },
                direct:true,
                filter:function(event,player){
        if(!player.storage.ark_gonggan) return false;
        var type=get.type(event.card);
        return (type=='basic'||type=='trick')&&player.storage.ark_gonggan.length>0;
    },
                content:function(){
        'step 0'
        player.chooseTarget(1,'控心：你可以展示一名角色一张牌，并根据牌的类型执行不同的效果',function(card,player,target){
            return target.countCards('h')>0&&player!=target;
        }).set('ai',function(target){
            var player=_status.event.player;
            return 20-get.attitude(player,target);
        });
        'step 1'
        if(result.targets){
            player.logSkill('ark_kongxin',result.targets);
            var card=result.targets[0].getCards('h').randomGet();
            event.type=get.type(card);
            player.showCards(card);
        }
        else event.finish();
        'step 2'
        if(event.type=='basic'){
            player.chooseCardButton(player.storage.ark_gonggan,'控心：你可以选择获得1张牌作为手牌',1).ai=function(button){
                var val=get.value(button.link);
                if(val<0) return -10;
                if(player.skipList.contains('phaseUse')){
                    return -val;
                }
                return val;
            }
            if(player==game.me&&!event.isMine()){
                game.delay(0.5);
            } 
        }
        else if(event.type=='trick'||event.type=='delay'){
            var goon=false;
            var info=get.info(trigger.card);
            if(trigger.targets&&!info.multitarget){
                var players=game.filterPlayer();
                for(var i=0;i<players.length;i++){
                    if(lib.filter.targetEnabled2(trigger.card,player,players[i])&&!trigger.targets.contains(players[i])){
                        goon=true;
                        break;
                    }
                }
            }
            if(goon){
                player.chooseTarget('控心：是否额外指定一名'+get.translation(trigger.card)+'的目标并交给其一张“共感”牌？',function(card,player,target){
                    var trigger=_status.event;
                    if(trigger.targets.contains(target)) return false;
                    return lib.filter.targetEnabled2(trigger.card,_status.event.player,target);
                }).set('ai',function(target){
                    var trigger=_status.event.getTrigger();
                    var player=_status.event.player;
                    return get.effect(target,trigger.card,player,player);
                }).set('targets',trigger.targets).set('card',trigger.card);
            }
            else{
                if(!info.multitarget&&trigger.targets&&trigger.targets.length>1){
                    event.goto(6);
                }
            }
        }
        else if(event.type=='equip'){
            var num=game.filterPlayer().length-1
            player.chooseCardButton(player.storage.ark_gonggan,'控心：你可以弃置任意张“共感”牌并令等量的其他角色不可响应'+get.translation(trigger.card),[1,num]).ai=function(button){
                var val=get.value(button.link);
                return -val;
            }
            if(player==game.me&&!event.isMine()){
                game.delay(0.5);
            }
        }
        else event.finish();
        'step 3'
        if(event.type=='basic'&&result.links){
            game.log(player,'获得了',result.links);
            player.gain(result.links,'fromStorage');
            for(var i=0;i<result.links.length;i++){
                player.storage.ark_gonggan.remove(result.links[i]);
            }
            player.syncStorage('ark_gonggan');
            if(player==game.me&&_status.auto){
                game.delay(0.5);
            }
            event.finish()  
        }
        else if(event.type=='trick'||event.type=='delay'){
            if(result.bool){
                if(!event.isMine()) game.delayx();
                event.target=result.targets[0];
            }
            else{
                event.finish();
            }
        }
        else if(event.type=='equip'&&result.links){
            game.cardsDiscard(result.links);
            player.$throw(result.links);
            game.log(player,'将',result.links,'置入了弃牌堆');
            player.syncStorage('ark_gonggan');
            if(player==game.me&&_status.auto){
                game.delay(0.5);
            }
            for(var i=0;i<result.links.length;i++){
                player.storage.ark_gonggan.remove(result.links[i]);
            }
            player.chooseTarget(result.links.length,true).set('ai',function(target){
                var player=_status.event.player;
                if(target.countCards('h')==0&&target.isEmpty(2)) return -1;
                return -get.attitude(player,target);
            });
        }
        else event.finish()
        'step 4'
        if(event.type=='trick'||event.type=='delay'){
            if(event.target){
                player.chooseCardButton(player.storage.ark_gonggan,'控心：你需要交给'+get.translation(event.target)+'一张牌',1,true).set('ai',function(button){
                    var val=get.value(button.link);
                    var target=_status.event.target;
                    var player=_ststus.event.player;
                    var att=get.attitude(player,target);
                    return val*att;
                }).set('target',event.target);
                if(player==game.me&&!event.isMine()){
                    game.delay(0.5);
                }
            }
            else event.goto(6);
        }
        else if(event.type=='equip'&&result.targets){
            for(var i=0;i<result.targets.length;i++){
                player.line(result.targets[i])
                trigger.directHit.push(result.targets[i]);
            }
            game.log(player,'令',result.targets,'不可响应',get.translation(trigger.card));
            event.finish()
        }
        else event.finish();
        'step 5'
        if(result.links){
            game.log(player,'令',event.target,'成为',get.translation(trigger.card),'的额外目标');
            player.$give(result.links,event.target);
            game.log(event.target,'获得了',result.links);
            event.target.gain(result.links,'fromStorage');
            trigger.targets.add(event.target);
            for(var i=0;i<result.links.length;i++){
                player.storage.ark_gonggan.remove(result.links[i]);
            }
            player.syncStorage('ark_gonggan');
            event.finish();
        }
        else event.finish()
        'step 6'
        player.chooseTarget(1,'控心：是否减少一名'+get.translation(trigger.card)+'的目标并交给其一张“共感”牌？',function(card,player,target){
            return _status.event.targets.contains(target);
        }).set('ai',function(target){
            var trigger=_status.event.getTrigger();
            return -get.effect(target,trigger.card,trigger.player,_status.event.player);
        }).set('targets',trigger.targets);
        'step 7'
        if(result.bool){
            event.target=result.targets[0];
            player.chooseCardButton(player.storage.ark_gonggan,'控心：你需要交给'+get.translation(event.targets)+'一张牌',1,true).set('ai',function(button){
                var val=get.value(button.link);
                var target=_status.event.target;
                var player=_ststus.event.player;
                var att=get.attitude(player,target);
                return val*att;
            }).set('target',event.target);
            if(player==game.me&&!event.isMine()){
                game.delay(0.5);
            }
        }
        else{
            event.finish();
        }
        'step 8'
        if(result.links){
            if(event.isMine()){
                game.log(player,'令',event.target,'不再成为',get.translation(trigger.card),'的目标');
                event.finish();
            }
            player.$give(result.links,event.target);
            game.log(event.target,'获得了',result.links);
            event.target.gain(result.links,'fromStorage');
            trigger.targets.remove(event.target);
            for(var i=0;i<result.links.length;i++){
                player.storage.ark_gonggan.remove(result.links[i]);
            }
            player.syncStorage('ark_gonggan');
            game.delay();
        }
        else event.finish()
        'step 9'
        game.log(player,'令',event.target,'不再成为',get.translation(trigger.card),'的目标');
    },
                ai:{
                    threaten:2,
                    expose:0.8,
                },
            },
            "ark_shubao":{
                audio:"ext:无名方舟:1",
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                unique:true,
                limited:true,
                skillAnimation:true,
                animationColor:"thunder",
                filter:function(event,player){
        if(player.storage.ark_shubao) return false;
        return true;
    },
                check:function(event,player){
        if(event.player.identity=='zhu'||event.player.identity=='nei') return false;
        if(event.player.countCards('h',{name:'sha'})>1) return true;
        return false;
    },
                content:function(){
        'step 0'
        player.awakenSkill('ark_shubao');
        player.storage.ark_shubao=true;
        player.disableEquip('equip1');
        player.disableEquip('equip2');
        player.disableEquip('equip3');
        player.disableEquip('equip4');
        player.disableEquip('equip5');
        player.disableJudge();
        player.gainMaxHp(2)
        player.recover(2)
        'step 1'
        var num=player.maxHp-player.countCards('h')
        if(num>0) player.draw(num)
        player.addSkill('ark_shubao1');
        player.markSkill('ark_shubao1');
    },
                ai:{
                    threaten:3,
                },
                mark:true,
                init:function(player){
        player.storage.ark_shubao=false;
    },
                intro:{
                    content:"limited",
                },
            },
            "ark_shubao1":{
                subSkill:{
                    "1":{
                        trigger:{
                            player:"useCardToPlayered",
                        },
                        forced:true,
                        charlotte:true,
                        init:function(player){
                player.storage.ark_shubao_unequip=[];
            },
                        filter:function(event,player){
                return event.card
            },
                        content:function(){
                player.storage.ark_shubao_unequip.add(trigger.card);
            },
                        ai:{
                            unequip:true,
                            "unequip_ai":true,
                            skillTagFilter:function(player,tag,arg){
                    if(tag=='unequip'){
                        if(arg&&player.storage.ark_shubao_unequip.contains(arg.card)) return true;
                        return false;
                    }
                    var card=arg.target.getEquip(2);
                    if(card&&card.name.indexOf('bagua')!=-1) return true;
                    if(player._ark_shubao_ai) return false;
                },
                        },
                        sub:true,
                    },
                    "2":{
                        trigger:{
                            player:"useCardAfter",
                        },
                        forced:true,
                        popup:false,
                        charlotte:true,
                        silent:true,
                        content:function(){
                player.storage.ark_shubao_unequip.remove(trigger.card);
            },
                        sub:true,
                    },
                    "3":{
                        trigger:{
                            player:"phaseJieshuEnd",
                        },
                        forced:true,
                        charlotte:true,
                        content:function(){
                player.loseHp(3)
            },
                        sub:true,
                    },
                    "4":{
                        trigger:{
                            player:"phaseDrawBegin2",
                        },
                        forced:true,
                        filter:function(event,player){
                return !event.numFixed;
            },
                        content:function(){
                trigger.num++;
            },
                        sub:true,
                    },
                },
                mark:true,
                marktext:"爆",
                intro:{
                    name:"奇美拉",
                    content:"使用牌无次数限制，无视距离，无视防具，使用【杀】造成的伤害+1，摸牌阶段多摸一张牌，回合结束时失去3点体力值",
                },
                group:["ark_shubao1_1","ark_shubao1_2","ark_shubao1_3","ark_shubao1_4"],
                trigger:{
                    source:"damageBegin1",
                },
                filter:function(event,player){
        return event.card.name=='sha'&&event.notLink();;
    },
                forced:true,
                charlotte:true,
                content:function(){
        trigger.num++
    },
                mod:{
                    targetInRange:function(card,player,target){
            return true;
        },
                    cardUsableTarget:function(card,player,target){
            return true;
        },
                },
            },
            "ark_benye":{
                audio:"ext:无名方舟:2",
                trigger:{
                    player:"shaMiss",
                    source:"damageSource",
                },
                filter:function(event,player){
        if(player.hasSkill('ark_benye_1')) return false;
        if(event.name=='damage') return event.card&&event.card.name=='sha';
        return true;
    },
                direct:true,
                content:function(){
        'step 0'
        if(trigger.name=='sha'){
            player.chooseUseTarget('###是否发动【奔夜】？###视为对'+get.translation(trigger.target)+'使用一张【杀】',{name:'sha'},false,'nodistance',function(card,player,target){
                var targetx=_status.event.targets
                return target==targetx
            }).set('logSkill',['ark_benye',trigger.player]).set('targets',trigger.target).set('addCount',false)
        }
        else if(trigger.name=='damage'){
            player.chooseBool('是否发动【奔夜】摸一张牌').set('ai',function(){
                return true;
            })
        }
        'step 1'
        if(trigger.name=='damage'){
            if(result.bool){
                player.draw()
                player.logSkill('ark_benye')
                player.addTempSkill('ark_benye_1')
            }
        }
    },
                ai:{
                    "unequip_ai":true,
                    unequip:true,
                    skillTagFilter:function(player,tag,arg){
            if(tag=='unequip'){
                if(arg&&arg.card&&arg.card.name=="sha") return true;
                return false
            } 
        },
                },
                subSkill:{
                    "1":{
                        sub:true,
                    },
                },
            },
            "ark_jueyingamiya":{
                audio:"ext:无名方舟:2",
                enable:"phaseUse",
                skillAnimation:"epic",
                animationColor:"fire",
                unique:true,
                limited:true,
                selectTarget:1,
                filterTarget:function(card,player,target){
        if(player.countCards('he')==0) return target.countCards('he')>0&&lib.filter.targetEnabled2({name:'sha'},player,target);
        return lib.filter.targetEnabled2({name:'sha'},player,target)
    },
                content:function(){
        'step 0'
        player.awakenSkill('ark_jueyingamiya');
        event.count=player.maxHp;
        player.storage.ark_jueyingamiya_target=target
        'step 1'
        event.count--;
        if(player.countCards('he')>0||player.storage.ark_jueyingamiya_target.countCards('he')>0){
            player.chooseTarget(1,true,'绝影：请弃置一名角色一张牌',function(card,player,target){
                var player=_status.event.player;
                var targetx=_status.event.targetx;
                return target==targetx||target==player;
            }).set('ai',function(target){
                var player=_status.event.player;
                var targetx=_status.event.targetx;
                return -get.attitude(player,targetx)
            }).set('targetx',player.storage.ark_jueyingamiya_target);   
        }
        else event.finish()
        'step 2'
        if(result.targets){
            event.targets=result.targets[0]
            player.discardPlayerCard('he',event.targets,1,true)
        }
        else event.finish()
        'step 3'
        var num=player.countCards('h')-player.storage.ark_jueyingamiya_target.countCards('h')
        if(num<=1&&num>=-1&&lib.filter.targetEnabled2({name:'sha'},player,player.storage.ark_jueyingamiya_target)){
            player.chooseUseTarget('绝影：视为对'+get.translation(player.storage.ark_jueyingamiya_target)+'使用一张【杀】',{name:'sha'},true,'nodistance',function(card,player,target){
                var targetx=_status.event.targets
                return target==targetx
            }).set('targets',player.storage.ark_jueyingamiya_target).set('addCount',false)
        }
        'step 4'
        if(!player.storage.ark_jueyingamiya_target.isAlive()){
            player.addTempSkill('ark_jueyingamiya_damage')
            if(!player.storage.ark_jueyingamiya_damage) player.storage.ark_jueyingamiya_damage=0
            player.storage.ark_jueyingamiya_damage++
            player.chooseTarget(1,function(card,player,target){
                var player=_status.event.player;
                if(player.countCards('he')==0) return target.countCards('he')>0&&lib.filter.targetEnabled2({name:'sha'},player,target);
                return lib.filter.targetEnabled2({name:'sha'},player,target)
            })
        }
        else event.goto(6)
        'step 5'
        if(result.targets){
            player.storage.ark_jueyingamiya_target=result.targets[0];
            event.count++
        }
        'step 6'
        if(event.count>0){
            event.goto(1)
        }
    },
                mark:true,
                intro:{
                    content:"limited",
                },
                init:function(player,skill){
        player.storage[skill]=false;
    },
                ai:{
                    order:7,
                    result:{
                        target:function(player,target){
                var eff=get.effect(target,{name:"sha"},player)
                return eff*player.hp
            },
                    },
                    threaten:3,
                },
                subSkill:{
                    damage:{
                        trigger:{
                            source:"damageBegin1",
                        },
                        forced:true,
                        filter:function(event,player){
                return event.notLink();
            },
                        content:function(){
                trigger.num+=player.storage.ark_jueyingamiya_damage
            },
                        mark:true,
                        intro:{
                            content:function(storage,player,skill){
                    return '绝影：造成的伤害+'+player.storage.ark_jueyingamiya_damage
                },
                        },
                        marktext:"影",
                        sub:true,
                    },
                },
            },
            "ark_bihu":{
                trigger:{
                    player:"phaseZhunbeiBegin",
                    global:"gameDrawAfter",
                },
                audio:"ext:无名方舟:2",
                direct:true,
                filter:function(event,player){
        return game.hasPlayer(function(current){
            return player.inRange(current)
        });
    },
                content:function(){
        'step 0'
        if(player.storage.ark_bihu_target){
            for(var i=0;i<player.storage.ark_bihu_target.length;i++){
                player.storage.ark_bihu_target[i].removeSkill('ark_bihu_globalX')
            }
        }
        player.storage.ark_bihu_target=[];
        'step 1'
        player.chooseTarget([1,Infinity],'庇护：你可以选择任意名角色，令其手牌上限+1',function(card,player,target){
            var player=_status.event.player
            return player.inRange(target)||player==target
        }).set('ai',function(target){
            var player=_status.event.player
            return get.attitude(player,target)
        });
        'step 2'
        if(result.targets){
            player.storage.ark_bihu_target=result.targets;
            player.logSkill('ark_bihu',result.targets);
            for(var i=0;i<player.storage.ark_bihu_target.length;i++){
                player.storage.ark_bihu_target[i].addSkill('ark_bihu_globalX')
            }
        }
    },
                subSkill:{
                    globalX:{
                        marktext:"庇",
                        mark:true,
                        intro:{
                            content:function(storage,player,skill){
                    return '手牌上限+1';
                },
                        },
                        mod:{
                            maxHandcard:function (player,num){
                    return num+1;
                },
                        },
                        sub:true,
                    },
                },
            },
            "ark_xintiao":{
                derivation:"护盾：你的手牌上限+1，你受到伤害时弃置一张此标记并使本次伤害-1",
                group:"ark_xintiao_dying",
                global:"ark_xintiao_global",
                audio:"ext:无名方舟:2",
                usable:1,
                enable:"phaseUse",
                filterCard:function(card,player,event){
        return card.name=='sha'
    },
                position:"h",
                check:function(card){
        if(get.color(card)=='red') return 9-get.value(card)
        return 8-get.value(card)
    },
                filterTarget:function(card,player,target){
        if(target.hp>=target.maxHp) return false;
        return player.inRange(target)||player==target
    },
                filter:function(event,player){
        return player.countCards('h',function(card){
            return card.name=='sha'
        })
    },
                content:function(){
        target.recover();
        if(get.color(cards[0])=='red'){
            target.draw()
        }
        target.addMark('ark_xintiao_global',1)
        if(!player.storage.ark_skilllvl) player.storage.ark_skilllvl=0
        player.storage.ark_skilllvl+=1
        
    },
                ai:{
                    order:9,
                    result:{
                        target:function(player,target){
                if(target.hp==1) return 5;
                if(player==target&&player.countCards('h')>player.hp) return 5;
                return 2;
            },
                    },
                    threaten:2,
                },
                subSkill:{
                    global:{
                        marktext:"盾",
                        intro:{
                            content:function(storage,player,skill){
                    return '你的手牌上限+1，你受到伤害时弃置一张此标记并使本次伤害-1';
                },
                        },
                        trigger:{
                            player:["damageBegin3","phaseJieshuEnd"],
                        },
                        forced:true,
                        popup:false,
                        filter:function(event,player){
                return player.countMark('ark_xintiao_global')>0;
            },
                        content:function(){
                'step 0'
                if(trigger.name=='damage'){
                    trigger.num--;
                    if(!game.hasPlayer(function(current){
                        return (current.inRange(player)||current==player)&&current.hasSkill('ark_jiejie_1')
                    })){
                        player.removeMark('ark_xintiao_global',1);
                    }
                    player.logSkill('ark_xintiao')
                }
                else{
                    if(!game.hasPlayer(function(current){
                        return (current.inRange(player)||current==player)&&current.hasSkill('ark_jiejie_1')
                    })){
                        player.removeMark('ark_xintiao_global',player.countMark('ark_xintiao_global'))
                    }
                }
            },
                        mod:{
                            maxHandcard:function(player,num){
                    return num+player.countMark('ark_xintiao_global')
                },
                        },
                        sub:true,
                    },
                    dying:{
                        usable:1,
                        trigger:{
                            global:"dying",
                        },
                        filter:function(event,player){
                return event.player.hp<=0&&player.countCards('h',function(card){
                    return card.name=='sha'&&get.color(card)=='red';
                });
            },
                        direct:true,
                        content:function(){
                'step 0'
                player.chooseCard(1,'信条：你可以弃置一张红色牌，令'+get.translation(trigger.player)+'的体力值恢复到1','h',function(card){
                    return card.name=='sha';get.color(card)=='red';
                }).set('ai',function(card){
                    var targetx=_status.event.targetx
                    var player=_status.event.player
                    if(get.attitude(player,targetx)<0) return false
                    return 10-get.value(card);
                }).set('targetx',trigger.player)
                'step 1'
                if(result.cards){
                    player.discard(result.cards)
                    player.logSkill('ark_xintiao',trigger.player)
                    var num=1-trigger.player.hp;
                    if(num) trigger.player.recover(num);
                }
                else{
                    player.storage.counttrigger.ark_xintiao_dying--;
                }
            },
                        sub:true,
                    },
                },
            },
            "ark_jiejie":{
                global:"ark_xintiao_global",
                derivation:"护盾：你的手牌上限+1，你受到伤害时弃置一张此标记并使本次伤害-1",
                audio:"ext:无名方舟:2",
                enable:"phaseUse",
                skillAnimation:"epic",
                animationColor:"metal",
                unique:true,
                limited:true,
                selectCard:function(){
        var player=_status.event.player;
        return [Math.max(1,ui.selected.targets.length),Infinity];
    },
                selectTarget:function(){
        return ui.selected.cards.length;
    },
                position:"h",
                filterCard:true,
                multitarget:true,
                multiline:true,
                filterTarget:function(card,player,target){
        return target==player||player.inRange(target);
    },
                filter:function(event,player){
        return player.countCards('he')>0;
    },
                content:function(){
        'step 0'
        player.awakenSkill('ark_jiejie');
        player.addTempSkill('ark_jiejie_1',{player:"phaseZhunbeiBegin"})
        for(var i=0;i<targets.length;i++){
            targets[i].addMark('ark_xintiao_global',1);
            targets[i].recover();
        }
    },
                ai:{
                    order:5,
                    result:{
                        target:function(player){
                return 4;
            },
                    },
                },
                mark:true,
                intro:{
                    content:"limited",
                },
                init:function(player,skill){
        player.storage[skill]=false;
    },
                subSkill:{
                    "1":{
                        mark:true,
                        intro:{
                            content:"教条立场已开启",
                        },
                        sub:true,
                    },
                },
            },
            "ark_junqi":{
                global:"ark_junqi_effect",
                trigger:{
                    global:["arkMoveBanner","gameDrawAfter"],
                },
                forced:true,
                audio:"ext:无名方舟:2",
                content:function(){
        'step 0'
        if(trigger.name=='gameDraw'){
            player.storage.ark_junqi=true
            player.storage.ark_junqiTarget=player
            player.markSkill('ark_junqi_effect')
            player.chooseTarget(1,'军旗：你可以选择一名角色摸一张牌').set('ai',function(target){
                var player=_status.event.player
                return get.attitude(player,target)
            })
        }
        else{
            player.draw()
        }
        'step 1'
        if(result.targets){
            result.targets[0].draw(1)
            player.line(result.targets[0])
        }
    },
                subSkill:{
                    effect:{
                        marktext:"旗",
                        intro:{
                            content:function(storage,player,skill){
                    switch(player.storage.ark_junqi){
                        case 'recover':return '手牌上限+1，摸牌阶段多摸一张牌，出牌阶段可以多出一张【杀】';break;
                        case 'damage':return '出牌阶段使用【杀】或【决斗】时弃置一张牌，受到伤害时弃置一张牌';break;
                    }
                    return '军旗';
                },
                        },
                        mod:{
                            cardUsable:function(card,player,num){
                    if(card.name=='sha'&&player.storage.ark_junqi=='recover') return num+1;
                },
                            maxHandcard:function(player,num){
                    if(player.storage.ark_junqi=='recover') return num+1;
                },
                        },
                        trigger:{
                            player:["phaseDrawBegin2","useCard","damageAfter"],
                        },
                        forced:true,
                        popup:false,
                        filter:function(event,player){
                if(!player.storage.ark_junqi) return false;
                if(event.name=='phaseDraw'){
                    return (!event.numFixed)&&player.storage.ark_junqi=='recover';
                }
                if(event.name=='useCard'){
                    return player.storage.ark_junqi=='damage'&&(event.card.name=='sha'||event.card.name=='juedou');
                }
                if(event.name=='damage'){
                    return player.storage.ark_junqi=='damage';
                }
            },
                        content:function(){
                player.logSkill('ark_huiguang')
                if(trigger.name=='phaseDraw'){
                    trigger.num++;
                }
                if(trigger.name=='useCard'){
                    player.chooseToDiscard(1,'he',true)
                }
                if(trigger.name=='damage'){
                    player.chooseToDiscard(1,'he',true)
                }
            },
                        sub:true,
                    },
                },
            },
            "ark_huiguang":{
                group:"ark_huiguang_return",
                audio:"ext:无名方舟:4",
                trigger:{
                    player:"phaseZhunbeiBefore",
                },
                direct:true,
                content:function(){
        'step 0'
        var num=player.hp
        player.chooseTarget(1,get.prompt2('ark_huiguang'),function(card,player,target){
            return true
        }).ai=function(target){
            var player=_status.event.player
            if(player.hp==1) return false
            if(get.attitude(player,target)>0&&target.hp==1) return 10
            if(get.attitude(player,target)<0&&target.hp==1) return 9
            if(get.attitude(player,target)>0&&target.hp==target.maxHp) return -1
            if(player==target) return Math.max(get.damageEffect(target,player)-2,get.recoverEffect(target,player)-2)
            return Math.max(get.damageEffect(target,player),get.recoverEffect(target,player))
        }
        'step 1'
        if(result.targets){
            player.logSkill('ark_huiguang',result.targets);
            player.line(result.targets);
            event.target=result.targets[0];
            if(!player.storage.ark_skilllvl) player.storage.ark_skilllvl=0;
            player.storage.ark_skilllvl++;
            player.storage.ark_junqiTarget.storage.ark_junqi=null;
            player.storage.ark_junqiTarget.unmarkSkill('ark_junqi_effect');
            player.storage.ark_junqiTarget=event.target;
            event.target.storage.ark_junqi=true
            var list=['恢复体力','造成伤害']
            player.chooseControl(list,true).set('ai',function(){
                var player=_status.event.player;
                var target=_status.event.targetx;
                if(get.attitude(player,target)>0) return '恢复体力'
                else return '造成伤害';
            }).set('targetx',event.target);
        }
        else event.finish();
        'step 2'
        if(result.control){
            event.target.markSkill('ark_junqi_effect')
            player.line(event.target)
            if(event.target!=player){
                event.trigger("arkMoveBanner");
            }
        }
        if(result.control=='恢复体力'){
            event.target.recover();
            event.target.storage.ark_junqi='recover'
        }
        if(result.control=='造成伤害'){
            event.target.damage();
            event.target.storage.ark_junqi='damage'
        }
        player.skip('phaseUse');
    },
                ai:{
                    threaten:2,
                },
                subSkill:{
                    return:{
                        trigger:{
                            global:["die","phaseJieshuEnd","arkWithDraw"],
                        },
                        forced:true,
                        popup:false,
                        filter:function(event,player){
                return event.player.storage.ark_junqi&&player.storage.ark_junqiTarget==event.player
            },
                        content:function(){
                trigger.player.line(player)
                player.logSkill('ark_huiguang')
                trigger.player.storage.ark_junqi=null
                player.storage.ark_junqi=true
                player.storage.ark_junqiTarget=player
                trigger.player.unmarkSkill('ark_junqi_effect')
                player.markSkill('ark_junqi_effect')
                if(trigger.player!=player){
                    event.trigger("arkMoveBanner")
                }
            },
                        sub:true,
                    },
                },
            },
            "ark_xinghui":{
                audio:"ext:无名方舟:2",
                enable:"phaseUse",
                usable:1,
                filterCard:function(card){
        var suit=get.suit(card);
        for(var i=0;i<ui.selected.cards.length;i++){
            if(get.suit(ui.selected.cards[i])==suit) return false;
        }
        return true;
    },
                position:"he",
                selectCard:[0,4],
                discard:false,
                lose:false,
                delay:false,
                complexCard:true,
                check:function(card){
        var player=_status.event.player;
        if(get.position(card)=='h'&&!player.countCards('h','du')&&(player.hp>2||!player.countCards('h',function(card){
            return get.value(card)>=8;
        }))){
            return 1;
        }
        return 8-get.value(card)
    },
                content:function (){
        'step 0'
        player.discard(cards);
        player.chooseControl('basic','trick','equip').set('ai',function(){
            var player=_status.event.player;
            if(player.hp==1) return 'basic';
            return ['basic','trick'].randomGet();
        }) 
        'step 1'
        if(!result.control) result.control='basic';
        var list=[];
        event.num=cards.length;
        if(cards.length>=4){
            player.addTempSkill('ark_xinghui_mhcs');
            player.markSkill('ark_xinghui_mhcs');
        }
        for(var i=0;i<event.num;i++){
            var gain=get.cardPile(function(card){
                return get.type(card,'trick')==result.control&&!list.contains(card);
            });
            list.push(gain);
        }
        if(list) player.gain(list,'gain2');
    },
                ai:{
                    order:1,
                    result:{
                        player:1,
                    },
                    threaten:1.5,
                },
                subSkill:{
                    mhcs:{
                        mark:true,
                        intro:{
                            content:"手牌上限+1",
                        },
                        mod:{
                            maxHandcard:function(player,num){
                    return num+1
                },
                        },
                        sub:true,
                    },
                },
            },
            "ark_tianyi":{
                group:"ark_tianyi_kill",
                audio:"ext:无名方舟:2",
                trigger:{
                    player:"phaseDrawBegin2",
                },
                forced:true,
                filter:function(event,player){
        return !event.numFixed;
    },
                content:function(){
        if(!player.storage.ark_tianyi) player.storage.ark_tianyi=0
        trigger.num+=player.storage.ark_tianyi;
    },
                mod:{
                    maxHandcard:function(player,num){
            if(!player.storage.ark_tianyi) player.storage.ark_tianyi=0
            return num+player.storage.ark_tianyi
        },
                },
                ai:{
                    threaten:2,
                },
                subSkill:{
                    kill:{
                        trigger:{
                            global:"dieBegin",
                        },
                        forced:true,
                        popup:false,
                        filter:function(event,player){
                return event.source==player;
            },
                        content:function(){
                player.logSkill('ark_tianyi')
                if(!player.storage.ark_tianyi) player.storage.ark_tianyi=0
                player.storage.ark_tianyi++
            },
                        sub:true,
                    },
                },
            },
            "ark_sushe":{
                audio:"ext:无名方舟:2",
                enable:["chooseToRespond","chooseToUse"],
                filterCard:function(card,player){
        return get.type(card)!='basic';
    },
                position:"hes",
                viewAs:{
                    name:"sha",
                },
                viewAsFilter:function(player){
        if(!player.countCards('hes',function(card){
            return get.type(card)!='basic';
        })) return false;
    },
                prompt:"将一张非基本牌当杀使用或打出",
                check:function(card){return 4-get.value(card)},
                ai:{
                    skillTagFilter:function(player){
            if(!player.countCards('hes',function(card){
                return get.type(card)!='basic';
            })) return false;
        },
                    respondSha:true,
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
                    canLink:function(player,target,card){
            if(!target.isLinked()&&!player.hasSkill('wutiesuolian_skill')) return false;
            if(target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                target:target,
                card:card,
            },true)) return false;
            if(player.hasSkill('jueqing')||target.hasSkill('gangzhi')||target.hasSkill('gangzhi')) return false;
            return true;
        },
                    basic:{
                        useful:[5,1],
                        value:[5,1],
                    },
                    order:function(item,player){
            if(player.hasSkillTag('presha',true,null,true)) return 10;
            if(lib.linked.contains(get.nature(item))){
                if(game.hasPlayer(function(current){
                    return current!=player&&current.isLinked()&&player.canUse(item,current,null,true)&&get.effect(current,item,player,player)>0&&lib.card.sha.ai.canLink(player,current,item);
                })&&game.countPlayer(function(current){
                    return current.isLinked()&&get.damageEffect(current,player,player,get.nature(item))>0;
                })>1) return 3.1;
                return 3;
            }
            return 3.05;
        },
                    result:{
                        target:function(player,target,card,isLink){
                var eff=function(){
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
                }();
                if(!isLink&&target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                    target:target,
                    card:card,
                },true)) return eff/1.2;
                return eff;
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
                },
            },
            "ark_yaohai":{
                marktext:"害",
                audio:"ext:无名方舟:3",
                intro:{
                    content:function(event,player){
            return '当前造成过'+player.storage.ark_yaohai+'次伤害'
        },
                },
                group:"ark_yaohai_count",
                trigger:{
                    source:"damageBegin1",
                },
                filter:function(event,player){
        return player.storage.ark_yaohai&&player.storage.ark_yaohai%3==0;
    },
                forced:true,
                content:function(){
        trigger.num++
    },
                subSkill:{
                    count:{
                        trigger:{
                            source:"damageBefore",
                        },
                        forced:true,
                        filter:function(event,player){
                return true
            },
                        content:function(){
                if(!player.storage.ark_yaohai) player.storage.ark_yaohai=0
                player.addMark('ark_yaohai')
                player.markSkill('ark_yaohai')
            },
                        sub:true,
                    },
                },
            },
            "ark_rerigui":{
                mod:{
                    attackFrom:function(from,to,distance,player){
            return distance-1;
        },
                },
            },
            "ark_relanghun":{
                group:["ark_relanghun_summer","ark_relanghun_addsha"],
                audio:"ext:无名方舟:2",
                trigger:{
                    player:"useCardToPlayered",
                },
                direct:true,
                priority:9,
                init:function(player){
        player.storage.ark_relanghun_num=0;
        player.storage.ark_relanghun_addsha=0;
    },
                filter:function(event,player){
        var num=player.getStat('damage');
        if(!num>0) num=0
        if(player.storage.ark_relanghun_num>=Math.ceil(num/2)) return false;
        return event.card.name=='sha'&&event.targets.length<2&&game.hasPlayer(function(current){
            return !event.targets.contains(current)&&player.canUse(event.card,current)
        })
    },
                content:function(){
        'step 0'
        player.chooseTarget('你可以选择'+get.translation(trigger.card)+'的额外目标',function(card,player,target){
            var player=_status.event.player;
            if(_status.event.targets.contains(target)) return false;
            return player.canUse(_status.event.card,target)
        }).set('targets',trigger.targets).set('card',trigger.card).set('ai',function(target){
            var trigger=_status.event.getTrigger();
            var player=_status.event.player;
            return get.effect(target,trigger.card,player,player);
        });
        'step 1'
        if(result.targets){
            player.storage.ark_relanghun_num++
            player.line(result.targets);
            player.logSkill('ark_relanghun',result.targets)
            trigger.targets.addArray(result.targets);
        }
    },
                ai:{
                    expose:0.8,
                },
                mark:true,
                marktext:"狼",
                intro:{
                    name:"狼魂",
                    content:function(storage,player,skill){
            var num=player.getStat('damage');
            if(!num>0) num=0
            return "本回合使用技能"+player.storage.ark_relanghun_num+"/"+Math.ceil(num/2)+"次，本回合使用杀次数+"+player.storage.ark_relanghun_addsha
        },
                },
                subSkill:{
                    summer:{
                        forced:true,
                        popup:false,
                        silent:true,
                        trigger:{
                            player:"phaseJieshu",
                        },
                        content:function(){
                player.storage.ark_relanghun_num=0
                player.storage.ark_relanghun_addsha=0;
            },
                        sub:true,
                    },
                    addsha:{
                        trigger:{
                            player:"damageAfter",
                        },
                        filter:function(event,player){
                if(!player.isPhaseUsing()) return true;
            },
                        forced:true,
                        popup:false,
                        silent:true,
                        content:function(){
                player.storage.ark_relanghun_addsha++;
            },
                        mod:{
                            cardUsable:function(card,player,num){
                    if(card.name=='sha') return num+player.storage.ark_relanghun_addsha;
                },
                        },
                        sub:true,
                    },
                },
            },
            "ark_recuixiu":{
                group:["ark_recuixiu_damage","ark_recuixiu_compare"],
                audio:"ext:无名方舟:2",
                trigger:{
                    player:"useCardToPlayered",
                },
                filter:function (event,player){
        if(!player.canCompare(event.target)) return false;
        if(!player.isPhaseUsing()) return false;
        if(event.getParent().targets.length>1) return false;
        if(event.target==player) return false;
        return event.card.name=='sha'||get.type(event.card)=='trick';
    },
                priority:10,
                content:function(){
        'step 0'
        player.chooseToCompare(trigger.target);
        'step 1'
        if(result.bool){
            trigger.getParent().directHit.add(trigger.target);
            player.line(trigger.target)
        }
    },
                ai:{
                    threaten:1.5,
                },
                subSkill:{
                    damage:{
                        trigger:{
                            source:"damageSource",
                        },
                        check:function(event,player){
                var player=_status.event.player
                return -get.attitude(player,event.player)
            },
                        filter:function(event,player){
                return event.num>0&&!event.player.hasSkill('fengyin');
            },
                        content:function(){
                trigger.player.addTempSkill('fengyin')
                player.line(trigger.player)
                player.logSkill('ark_recuixiu',trigger.player)
            },
                        sub:true,
                    },
                    compare:{
                        trigger:{
                            player:["chooseToCompareAfter","compareMultipleAfter"],
                            target:["chooseToCompareAfter","compareMultipleAfter"],
                        },
                        filter:function(event,player){
                return true;
            },
                        direct:true,
                        content:function(){
                'step 0'
                player.chooseCardButton([trigger.card1,trigger.card2],'摧朽：选择要获得的拼点牌').set('ai',function(button){
                    return 20-get.value(button.link);
                }).set('cards',[trigger.card1,trigger.card2]).set('filterButton',function(button){
                    return _status.event.cards.contains(button.link);
                });
                "step 1"
                if(result.bool){
                    game.delay(0.5);
                    player.logSkill('ark_recuixiu');
                    player.gain(result.links[0]);
                    player.$gain2(result.links[0]);
                    game.log(player,'获得了',result.links[0]);
                    game.delay();
                }
            },
                        sub:true,
                    },
                },
            },
            "ark_kuaidi":{
                group:"ark_kuaidi_2",
                audio:"ext:无名方舟:2",
                trigger:{
                    player:"phaseDrawBegin2",
                },
                filter:function(event,player){
        return !event.numFixed;
    },
                forced:true,
                content:function(){
        trigger.num+=1;
        player.addSkill('ark_kuaidi_1')
    },
                ai:{
                    threaten:1.5,
                },
                subSkill:{
                    "1":{
                        trigger:{
                            player:"phaseDrawEnd",
                        },
                        forced:true,
                        popup:false,
                        content:function(){
                "step 0"
                player.removeSkill('ark_kuaidi_1');
                player.chooseCardTarget({
                    selectCard:1,
                    prompt:'将一张手牌交给一名其他角色',
                    forced:true,
                    filterTarget:function(card,player,target){
                        return player!=target
                    },
                    ai2:function(target){
                        return 10+get.attitude(_status.event.player,target);
                    },
                });
                "step 1"
                if(result.targets&&result.targets[0]){
                    result.targets[0].gain(result.cards,player,'giveAuto');
                }
            },
                        sub:true,
                    },
                    "2":{
                        trigger:{
                            global:"gameDrawAfter",
                        },
                        forced:true,
                        popup:false,
                        content:function(){
                player.logSkill('ark_kuaidi')
                player.draw(1)
            },
                        sub:true,
                    },
                },
            },
            "ark_jianyu":{
                audio:"ext:无名方舟:2",
                enable:"phaseUse",
                usable:1,
                filterTarget:function(card,player,target){
        if(!player.canCompare(target)) return false;
        return player.inRange(target)
    },
                selectTarget:[1,2],
                filter:function(event,player){
        return player.countCards('h')>0;
    },
                multitarget:true,
                multiline:true,
                content:function(){
        'step 0'
        if(targets.length>1){
            player.chooseToCompare(targets).callback=lib.skill.ark_jianyu.callback;
            event.finish()
        }
        else player.chooseToCompare(targets[0])
        'step 1'
        if(result.bool){
            event.goto(2)
        }
        else{
            event.goto(4)
        }
        'step 2'
        targets[0].chooseControl('受到伤害','令其摸牌',true).set('ai',function(){
            var player=_status.event.player
            var target=_status.event.target
            if(get.attitude(target,player)>=0) '令其摸牌';
            if(get.damageEffect(target,player,target)>=0) return '受到伤害'
            if(player.maxHp-player.hp+1>=player.hp) return '令其摸牌';
            return '受到伤害'
        }).set('prompt','剑雨：受到一点伤害，或令'+get.translation(player)+'摸一张牌').set('target',targets[0])
        'step 3'
        if(result.control=='受到伤害'){
            player.line(targets[0])
            targets[0].damage()
        }
        if(result.control=='令其摸牌'){
            player.draw()
        }
        event.finish()
        'step 4'
        player.chooseControl('受到伤害','摸一张牌',true).set('prompt','剑雨：受到一点伤害或摸一张牌').set('ai',function(){
            var player=_status.event.player
            if(get.damageEffect(player,player,player)>3) return '受到伤害'
            else return '摸一张牌';
        })
        'step 5'
        if(result.control=='受到伤害'){
            player.damage()
        }
        if(result.control=='摸一张牌'){
            player.draw()
        }
    },
                callback:function(){
        'step 0'
        if(event.num1>=event.num2){
            target.chooseControl('受到伤害','令其摸牌',true).set('ai',function(){
                var player=_status.event.player
                var target=_status.event.target
                if(get.attitude(target,player)>=0) '令其摸牌';
                if(get.damageEffect(target,player,target)>=0) return '受到伤害'
                if(player.maxHp-player.hp+1>=player.hp) return '令其摸牌';
                return '受到伤害'
            }).set('prompt','剑雨：受到一点伤害，或令'+get.translation(player)+'摸一张牌').set('target',target)
        }
        else event.goto(2)
        'step 1'
        if(result.control=='受到伤害'){
            player.line(target)
            target.damage()
        }
        if(result.control=='令其摸牌'){
            player.draw()
        }
        'step 2'
        if(event.num1<=event.num2){
            player.chooseControl('受到伤害','摸一张牌',true).set('prompt','剑雨：受到一点伤害或摸一张牌').set('ai',function(){
                var player=_status.event.player
                if(get.damageEffect(player,player,player)>3) return '受到伤害'
                else return '摸一张牌'
            })
        }
        else event.finish()
        'step 3'
        if(result.control=='受到伤害'){
            player.damage()
        }
        if(result.control=='摸一张牌'){
            player.draw()
        }
    },
                ai:{
                    order:7,
                    result:{
                        target:function(player,target){
                return -1.5;
            },
                    },
                },
            },
            "ark_enyuan":{
                audio:"ext:无名方舟:2",
                trigger:{
                    player:["chooseToCompareAfter","compareMultipleAfter"],
                    target:["chooseToCompareAfter","compareMultipleAfter"],
                },
                filter:function(event,player){
        if(event.targets&&event.targets.length>1) return false
        if(event.preserve) return false;
        if(player==event.player){
            return event.num1<event.num2
        }
        else{
            return event.num1>event.num2
        }
    },
                frequent:true,
                content:function(){
        player.draw()
    },
            },
            "ark_rongshi":{
                audio:"ext:无名方舟:2",
                enable:"phaseUse",
                usable:1,
                filter:function(event,player){
        return player.storage.disableEquip!=undefined&&player.storage.disableEquip.length<5;
    },
                filterTarget:function(card,player,target){
        return player!=target&&[1,2,3,4,5].some(pos=>!target.isDisabled(pos));
    },
                selectTarget:1,
                content:function(){
        'step 0'
        player.chooseToDisable(true).set('ai',function(event,player,list){
            if(list.contains('equip5')) return 'equip5';
            if(list.contains('equip2')) return 'equip2';
            if(list.contains('equip1')) return 'equip1';
            if(list.contains('equip6')) return 'equip6';
        });
        'step 1'
        if(!player.storage.ark_rongshi) player.storage.ark_rongshi=[]
        player.storage.ark_rongshi.push([target,result.control])
        player.line(target)
        if(result.control=='equip1'){
            target.disableEquip(1)
            var cards=[]
            cards.push(get.cardPile(function(card){
                return card.name=='juedou'&&!cards.contains(card);
            }));
            cards.push(get.cardPile(function(card){
                return card.name=='sha'&&!cards.contains(card);
            }));
            if(cards) player.gain(cards,'gain2');
        };
        if(result.control=='equip2'){
            target.disableEquip(2);
            cards.push(get.cardPile(function(card){
                return card.name=='tao'&&!cards.contains(card);
            }));
            cards.push(get.cardPile(function(card){
                    return card.name=='shan'&&!cards.contains(card);
            }));
            if(cards) player.gain(cards,'gain2');
        };
        if(result.control=='equip6'){
            target.disableEquip(3);
            target.disableEquip(4);
            cards.push(get.cardPile(function(card){
                return card.name=='guohe'&&!cards.contains(card);
            }));
            cards.push(get.cardPile(function(card){
                return card.name=='shunshou'&&!cards.contains(card);
            }));
            if(cards) player.gain(cards,'gain2');
        };
        if(result.control=='equip5'){
            target.disableEquip(5);
            cards.push(get.cardPile(function(card){
                return card.name=='wuzhong'&&!cards.contains(card);
            }));
            if(cards) player.gain(cards,'gain2');
        };
    },
                ai:{
                    order:13,
                    result:{
                        player:function(player){
                return 3
            },
                        target:function(){
                return -3
            },
                    },
                },
            },
            "ark_fuzhi":{
                group:"ark_fuzhi_1",
                audio:"ext:无名方舟:1",
                enable:["chooseToRespond","chooseToUse"],
                filterCard:function(card,player){
        return get.type(card)=='equip';
    },
                position:"hes",
                viewAs:{
                    name:"sha",
                    nature:"thunder",
                },
                viewAsFilter:function(player){
        if(!player.countCards('hes',function(card){
            return get.type(card)=='equip'
        })) return false;
    },
                prompt:"将一张装备牌当杀使用或打出",
                check:function(card){return 100-get.value(card)},
                ai:{
                    skillTagFilter:function(player){
            if(!player.countCards('hes',function(card){
                return get.type(card)=='equip'
            })) return false;
        },
                    respondSha:true,
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
                    canLink:function(player,target,card){
            if(!target.isLinked()&&!player.hasSkill('wutiesuolian_skill')) return false;
            if(target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                target:target,
                card:card,
            },true)) return false;
            if(player.hasSkill('jueqing')||player.hasSkill('gangzhi')||target.hasSkill('gangzhi')) return false;
            return true;
        },
                    basic:{
                        useful:[5,3,1],
                        value:[5,3,1],
                    },
                    order:function(item,player){
            if(player.hasSkillTag('presha',true,null,true)) return 10;
            if(lib.linked.contains(get.nature(item))){
                if(game.hasPlayer(function(current){
                    return current!=player&&current.isLinked()&&player.canUse(item,current,null,true)&&get.effect(current,item,player,player)>0&&lib.card.sha.ai.canLink(player,current,item);
                })&&game.countPlayer(function(current){
                    return current.isLinked()&&get.damageEffect(current,player,player,get.nature(item))>0;
                })>1) return 3.1;
                return 3;
            }
            return 3.05;
        },
                    result:{
                        target:function(player,target,card,isLink){
                var eff=function(){
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
                }();
                if(!isLink&&target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                    target:target,
                    card:card,
                },true)) return eff/1.2;
                return eff;
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
                },
                subSkill:{
                    "1":{
                        mod:{
                            targetInRange:function(card,player,target,now){
                    if(card.name=='sha'&&card.nature=='thunder') return true;
                },
                        },
                        sub:true,
                    },
                },
            },
            "ark_fangdu":{
                audio:"ext:无名方舟:1",
                skillAnimation:true,
                animationColor:"wood",
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                forced:true,
                unique:true,
                juexingji:true,
                init:function(player){
        player.storage.ark_fangdu=false;
    },
                filter:function(event,player){
        return !player.storage.ark_fangdu&&player.storage.disableEquip!=undefined&&player.storage.disableEquip.length==5;
    },
                content:function(){
        "step 0"
        player.storage.ark_fangdu=true;
        player.awakenSkill('ark_fangdu');
        player.addSkill('ark_fangdu_1')
        if(player.storage.ark_rongshi){
            for(var i=0;i<player.storage.ark_rongshi.length;i++){
                var str=player.storage.ark_rongshi
                player.line(str[i][0])
                str[i][0].enableEquip(str[i][1])
                if(str[i][1]=='equip6'){
                    str[i][0].enableEquip(3)
                    str[i][0].enableEquip(4)
                }
            }
        }
    },
                subSkill:{
                    "1":{
                        mod:{
                            targetInRange:function(card,player,target,now){
                    var type=get.type(card);
                    if(type=='trick'||type=='delay') return true;
                },
                            selectTarget:function(card,player,range){
                    if(card.name=='sha') range[1]+=1; 
                },
                            cardUsable:function(card,player,num){
                    if(card.name=='sha') return num+1;
                },
                        },
                        sub:true,
                    },
                },
            },
            "ark_wange":{
                audio:"ext:无名方舟:1",
                enable:"phaseUse",
                usable:1,
                selectCard:function(){
        var player=_status.event.player;
        return [Math.max(1,ui.selected.targets.length),3];
    },
                filterCard:function(card){
        var suit=get.suit(card);
        var color=get.color(card);
        for(var i=0;i<ui.selected.cards.length;i++){
            if(get.color(ui.selected.cards[i])!=color) return false;
        }
        return get.type(card)=='basic';
    },
                selectTarget:function(){
        return ui.selected.cards.length;
    },
                position:"he",
                multitarget:true,
                multiline:true,
                filterTarget:function(card,player,target){
        return (target==player||player.inRange(target))&&target.hp<target.maxHp;
    },
                filter:function(event,player){
        return player.countCards('he')>0;
    },
                content:function(){
        if(!player.storage.ark_skilllvl) player.storage.ark_skilllvl=0
        player.storage.ark_skilllvl+=1
        for(var i=0;i<targets.length;i++){
            targets[i].recover();
        }
        game.asyncDraw(targets,1);
    },
                ai:{
                    order:5,
                    result:{
                        target:function(player,target){
                if(target.hp==1) return 5;
                if(player==target&&player.countCards('h')>player.hp) return 5;
                return 2;
            },
                    },
                },
            },
            "ark_huanying":{
                global:"ark_huanying_ai",
                group:"ark_huanying_1",
                derivation:"幻影：拥有4点体力，回合结束时/减免伤害时失去一点体力",
                audio:"ext:无名方舟:2",
                enable:"phaseUse",
                selectTarget:1,
                filterTarget:true,
                filter:function(event,player){
        return player.storage.ark_huanying<=2;
    },
                content:function(){
        target.addMark('ark_huanying_1',4)
        player.storage.ark_huanying++
        if(player.storage.ark_huanying>=3) player.unmarkSkill('ark_huanying')
    },
                ai:{
                    order:5,
                    result:{
                        target:function(player,target){
                if(target.hasMark('ark_huanying_1')) return 0
                return 4;
            },
                    },
                },
                mark:true,
                intro:{
                    content:function(storage,player,skill){
            return '剩余'+(3-player.storage.ark_huanying)+'个“幻影”'
        },
                },
                init:function(player,skill){
        player.storage[skill]=0;
    },
                subSkill:{
                    "1":{
                        intro:{
                            content:function(storage,player,skill){
                    var player=_status.event.player
                    if(game.hasPlayer(function(current){
                        return current.storage.ark_shengyuTarget&&current.storage.ark_shengyuTarget.contains(player)
                    })) return '牢不可破的幻影'
                    return '转瞬即逝的幻影'
                },
                        },
                        trigger:{
                            global:["damageBegin4","phaseJieshuEnd"],
                        },
                        forced:true,
                        filter:function(event,player){
                if(game.hasPlayer(function(current){
                    return (current.inRange(event.player)||current==event.player)&&current.storage.ark_shengyuTarget&&current.storage.ark_shengyuTarget.contains(event.player)
                })) return false;
                if(event.name=='damage'){
                    return event.player.hasMark('ark_huanying_1')&&(get.type(event.card)=='trick'||event.nature)
                }
                else return event.player.hasMark('ark_huanying_1');
            },
                        content:function(){
                player.line(trigger.player)
                trigger.cancel()
                trigger.player.removeMark('ark_huanying_1',1)
            },
                        sub:true,
                    },
                    ai:{
                        ai:{
                            effect:{
                                target:function(card,player,target,current){
                        if(target.hasMark('ark_huanying_1')){
                            if(get.tag(card,'fireDamage')) return 'zerotarget';
                            if(get.tag(card,'thunderDamage')) return 'zerotarget';
                            if(get.type(card)=='trick') return 'zerotarget';
                        }
                    },
                            },
                        },
                        sub:true,
                    },
                },
            },
            "ark_shengyu":{
                audio:"ext:无名方舟:2",
                skillAnimation:"epic",
                animationColor:"metal",
                trigger:{
                    player:"phaseUseBegin",
                },
                unique:true,
                limited:true,
                init:function(player){
        player.storage.ark_shengyu=false;
    },
                check:function(event,player){
        var player=_status.event.player
        if(player.hp==1) return true;
        if(game.countPlayer(function(current){
            current.hp<current.maxHp&&get.attitude(player,current)>0&&get.distance(current,player)<=3
        })>=2) return true
        return false;
    },
                filter:function(event,player){
        return !player.storage.ark_shengyu;
    },
                content:function(){
        'step 0'
        player.storage.ark_shengyu=true;
        player.awakenSkill('ark_shengyu');
        player.addSkill('ark_shengyu_1')
        player.chooseTarget([1,Infinity],'圣域：请选择要保护的目标',function(card,player,target){
            return player.inRange(target)||player==target
        }).set('ai',function(target){
            return get.attitude(_status.event.player,target)>0
        })
        'step 1'
        if(result.targets){
            player.line(result.targets)
            player.storage.ark_shengyuTarget=result.targets
            for(var i=0;i<result.targets.length;i++){
                result.targets[i].recover()
            }
        }
    },
                subSkill:{
                    "1":{
                        global:"ark_shengyu_ai",
                        mod:{
                            attackFrom:function(from,to,distance,player){
                    return distance-1
                },
                        },
                        mark:true,
                        marktext:"圣",
                        intro:{
                            content:function(storage,player,skill){
                    if(player.storage.ark_shengyuTarget) return '圣域保护：'+get.translation(player.storage.ark_shengyuTarget)
                    else return '圣域已开启'
                },
                        },
                        trigger:{
                            global:"damageBegin4",
                            player:"phaseZhunbeiBegin",
                        },
                        forced:true,
                        filter:function(event,player){
                if(event.name=='phaseZhunbei') return true
                if((!event.nature)&&(event.card&&event.card.name=='sha')) return false;
                return (player.inRange(event.player)||player==event.player)&&player.storage.ark_shengyuTarget&&player.storage.ark_shengyuTarget.contains(event.player)
            },
                        content:function(){
                if(trigger.name=='phaseZhunbei'){
                    player.removeSkill('ark_shengyu_1');
                    player.storage.ark_shengyuTarget=[];
                }
                else{
                    player.line(trigger.player)
                    trigger.cancel()
                }
            },
                        sub:true,
                    },
                    ai:{
                        ai:{
                            effect:{
                                target:function(card,player,target,current){
                        if(game.hasPlayer(function(current){
                            return (current.inRange(target)||current==target)&&current.storage.ark_shengyuTarget&&current.storage.ark_shengyuTarget.contains(target)
                        })){
                            if(card.name!='sha'||card.nature) return 'zerotarget';
                        }
                    },
                            },
                        },
                        sub:true,
                    },
                },
                mark:true,
                intro:{
                    content:"limited",
                },
            },
            "ark_cigu":{
                trigger:{
                    player:"shaMiss",
                },
                audio:"ext:无名方舟:3",
                direct:true,
                filter:function(event,player){
        return event.target.countCards('hej');
    },
                content:function(){
        "step 0"
        player.discardPlayerCard(trigger.target,'he').set('logSkill',[event.name,trigger.target]);
    },
            },
            "ark_langqun":{
                group:["ark_langqun_turnover"],
                audio:"ext:无名方舟:3",
                enable:"chooseToUse",
                mark:true,
                unique:true,
                init:function(player){
        player.storage.ark_langqun=0;
    },
                filter:function(event,player){
        if(player.storage.ark_langqun>=2) return false;
        if(event.type=='dying'){
            if(player!=event.dying) return false;
            return true;
        }
        return false;
    },
                content:function(){
        'step 0'
        player.storage.ark_langqun++;
        if(player.storage.ark_langqun>2){
            player.awakenSkill('ark_langqun');
            event.finish();
            return;
        };
        player.discard(player.getCards('hej'));
        'step 1'
        player.link(false);
        'step 2'
        player.turnOver(false);
        'step 3'
        if(player.hp<player.maxHp){
            player.recover(player.maxHp-player.hp);
        }
        'step 4'
        player.draw(4);
        event.trigger('arkEnterGame')
    },
                ai:{
                    order:1,
                    skillTagFilter:function(player,arg,target){
            var num=2
            if(player!=target||player.storage.ark_langqun>=2) return false;
        },
                    save:true,
                    result:{
                        player:function(player){
                if(player.hp<=0) return 10;
                if(player.hp<=2&&player.countCards('he')<=1) return 10;
                return 0;
            },
                    },
                    threaten:function(player,target){
             return 1;
        },
                },
                intro:{
                    content:function(storage,player,skill){
            var num=2
            return '狼群：剩余'+(num-player.storage.ark_langqun)+'次复活'
        },
                },
                subSkill:{
                    turnover:{
                        trigger:{
                            global:"gameDrawAfter",
                            player:["enterGame","arkEnterGame"],
                        },
                        direct:true,
                        content:function(){
                'step 0'
                var str='狼群：你可以令一名角色翻面并弃置其一张牌';
                player.chooseTarget(1,str).set('ai',function(target){
                    var player=_status.event.player
                    return 2-get.attitude(player,target)
                })
                'step 1'
                if(result.targets){
                    player.logSkill('ark_langqun',result.targets[0])
                    player.line(result.targets)
                    result.targets[0].turnOver()
                    player.discardPlayerCard(result.targets[0],'he')
                }
            },
                        sub:true,
                    },
                },
            },
            "ark_yaoji":{
                group:"ark_yaoji_recover",
                audio:"ext:无名方舟:2",
                trigger:{
                    source:"damageSource",
                },
                filter:function(event,player){
        return event.card&&event.card.name=='sha'&&event.card.isCard;
    },
                check:function(event,player){
        return get.attitude(player,event.player)<0
    },
                content:function(){
        'step 0'
        player.judge();
        'step 1'
        switch(result.suit){
            case 'heart':player.recover();break;
            case 'diamond':player.draw(2);break;
            case 'club':trigger.player.chooseToDiscard(2,'he',true);break;
            case 'spade':trigger.player.turnOver();break;
        }
    },
                subSkill:{
                    recover:{
                        trigger:{
                            player:"recoverEnd",
                        },
                        filter:function(event,player){
                return true;
            },
                        popup:false,
                        frequent:true,
                        content:function(){
                player.draw(trigger.num)
                player.logSkill('ark_yaoji')
            },
                        sub:true,
                    },
                },
            },
            "ark_guaijie":{
                trigger:{
                    player:"phaseEnd",
                },
                audio:"ext:无名方舟:2",
                forced:true,
                content:function(){
        player.draw(2)
        player.loseHp()
    },
            },
            "ark_duyi":{
                enable:"phaseUse",
                audio:"ext:无名方舟:2",
                unique:true,
                limited:true,
                skillAnimation:"legend",
                animationColor:"metal",
                filterTarget:function(card,player,target){
        return player.inRange(target)
    },
                selectTarget:1,
                line:"fire",
                filter:function(event,player){
        return player.storage.ark_duyi==false
    },
                content:function (){
        'step 0'
        player.awakenSkill('ark_duyi');
        player.storage.ark_duyi=true
        'step 1'
        for(var i=0;i<3;i++){
            player.useCard({name:'sha'},target)
        }
        'step 2'
        if(target.isAlive()){
            player.storage.ark_duyi_eff_count=0
            target.storage.ark_duyi_eff_count=1
            player.addSkill('ark_duyi_eff')
            target.addSkill('ark_duyi_eff')
        }
        else{
            player.loseHp(2)
        }
    },
                ai:{
                    order:1,
                    result:{
                        player:function(player,target){
                if(target.countCards('h',function(card){
                    return card.name=='shan'
                })+target.hp>3) return 4
                else return -4
            },
                        target:function(player,target){
                if(target.countCards('h',function(card){
                    return card.name=='shan'
                })+target.hp>3) return 4
                else return -4
            },
                    },
                },
                mark:true,
                intro:{
                    content:"limited",
                },
                init:function(player,skill){
        player.storage[skill]=false;
    },
                subSkill:{
                    eff:{
                        trigger:{
                            player:["phaseZhunbeiBegin","phaseDrawBegin2","phaseJieshuEnd"],
                            source:"damageBegin1",
                        },
                        forced:true,
                        filter:function(event,player){
                if(event.name=='phaseDraw'){
                    return !event.numFixed;
                }
                if(event.name=='phaseZhunbei'||event.name=='phaseJieshu'){
                    return true;
                }
                if(event.name=='damage'){
                    return event.card&&event.card.name=='sha'&&event.notLink();
                }
            },
                        content:function(){
                if(trigger.name=='phaseDraw') trigger.num++;
                if(trigger.name=='phaseZhunbei') player.recover();
                if(trigger.name=='phaseJieshu'){
                    player.storage.ark_duyi_eff_count++;
                    if(player.storage.ark_duyi_eff_count>=2) player.removeSkill('ark_duyi_eff')
                };
                if(trigger.name=='damage') trigger.num++
            },
                        mod:{
                            cardUsable:function(card,player,num){
                    if(card.name=='sha') return num+1;
                },
                        },
                        mark:true,
                        intro:{
                            content:function(storage,player,skill){
                    return '回合开始时回复一点体力，摸牌阶段多摸一张牌，出牌阶段可以多使用一张【杀】，使用【杀】造成的伤害+1'
                },
                        },
                        sub:true,
                    },
                },
            },
            "ark_wenjiang":{
                trigger:{
                    global:"gameDrawAfter",
                },
                audio:"ext:无名方舟:1",
                forced:true,
                content:function(){
        player.draw(3)
        player.turnOver(true)
    },
            },
            "ark_duanzui":{
                trigger:{
                    source:"damageBegin1",
                },
                audio:"ext:无名方舟:2",
                check:function(event,player){
        return -get.attitude(player,event.player)
    },
                filter:function(event,player){
        return event.card&&event.card.name=='sha'&&event.notLink()
    },
                content:function(){
        'step 0'
        player.chooseControl('club','spade','diamond','heart')
        'step 1'
        if(result.control){
            event.control=result.control
            player.judge(function(card){
                if(card.suit==result.control) return true
            })
        }
        else event.finish()
        'step 2'
        if(['club','spade'].contains(result.suit)) event.colorx='black';
        if(['diamond','heart'].contains(result.suit)) event.colorx='red';
        if(result.bool){
            trigger.num++
            event.finish()
        }
        'step 3'
        if(['club','spade'].contains(event.control)&&event.colorx=='black'){
            player.chooseBool('断罪：是否重复此流程')
        }
        else if(['diamond','heart'].contains(event.control)&&event.colorx=='red'){
            player.chooseBool('断罪：是否重复此流程')
        }
        'step 4'
        if(result.bool) event.goto(0)
    },
            },
            "ark_chuangshi":{
                group:["ark_chuangshi_1"],
                audio:"ext:无名方舟:2",
                enable:"phaseUse",
                filterCard:true,
                position:"he",
                check:function(card){
        return 9-get.value(card)
    },
                filter:function(event,player){
        return true;
    },
                content:function(){
        'step 0'
        if(!player.storage.ark_chaungshi) player.storage.ark_chaungshi=0
        player.storage.ark_chaungshi++
        player.chooseControl('red','black')
        'step 1'
        if(result.control){
            player.judge(function(card){
                if(card.color==result.control) return true
            })
        }
        'step 2'
        if(result.bool){
            game.filterPlayer(function(current){
                if(get.distance(player,current)<=1&&player!=current){
                    player.line(current)
                    current.damage()
                    current.chooseToDiscard('he',player.storage.ark_chaungshi,true)
                }
            })
        }
        else{
            player.turnOver()
            player.loseHp(player.storage.ark_chaungshi)
        }
    },
                mark:true,
                intro:{
                    content:function(storage,player,skill){
            return '已发动'+player.storage.ark_chaungshi+'次'
        },
                },
                ai:{
                    order:9,
                    result:{
                        player:function(player){
                if(player.storage.ark_chaungshi>=1) return -2
                return 2
            },
                    },
                },
                subSkill:{
                    "1":{
                        trigger:{
                            player:"phaseJieshuEnd",
                        },
                        silent:true,
                        charlotte:true,
                        content:function(){
                player.storage.ark_chaungshi=0
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                },
            },
            "ark_baibing":{
                audio:"ext:无名方舟:2",
                trigger:{
                    source:["damageSource","damageBegin1"],
                    player:["phaseDrawBefore","useCard"],
                },
                filter:function(event,player,name){
        if(name=='damageSource'){
            return player.getCards('e').length>=1&&event.player.isAlive()&&event.card&&event.card.name=='sha';
        }
        if(name=='damageBegin1'){
            return player.getCards('e').length>=4&&event.card&&event.card.name=='sha'&&event.notLink();
        }
        if(event.name=='phaseDraw') return player.getCards('e').length>=2&&!event.numFixed;
        if(event.name=='useCard') return player.getCards('e').length>=5&&event.card&&event.card.name=='sha';
        return false;
    },
                forced:true,
                priority:5,
                content:function(){
        if(event.triggername=='damageSource'){
            if(player.getCards('e').length>=1&&!trigger.player.hasSkill('ark_baibing_sf')) trigger.player.addTempSkill('ark_baibing_sf');
            if(player.getCards('e').length>=3&&!trigger.player.hasSkill('fengyin')) trigger.player.addTempSkill('fengyin');
        }
        else if(event.triggername=='damageBegin1'){
            trigger.num++
        }
        else if(trigger.name=='phaseDraw'){
            trigger.num++
        }
        else if(trigger.name=='useCard'){
            trigger.directHit.addArray(game.filterPlayer(function(current){
                return current!=player;
            }));
        }
    },
                ai:{
                    "directHit_ai":true,
                    skillTagFilter:function(player,tag,arg){
            return player.getCards('e').length>=5&&arg.card.name=='sha';
        },
                },
                mod:{
                    cardUsable:function(card,player,num){
            if(card.name=='sha'&&player.getCards('e').length>=2) return num+1;
        },
                },
                subSkill:{
                    sf:{
                        mark:true,
                        marktext:"缚",
                        mod:{
                            "cardEnabled2":function(card){
                    if(get.position(card)=='h') return false;
                },
                        },
                        intro:{
                            content:"束缚状态，不能使用或打出手牌",
                        },
                        sub:true,
                    },
                },
            },
            "ark_baoke":{
                trigger:{
                    source:"damageSource",
                },
                filter:function(event,player){
        return event.player&&event.player.countGainableCards(player,'e')&&event.num>0&&event.player!=player;
    },
                direct:true,
                priority:4,
                audio:"ext:无名方舟:2",
                content:function(){
        "step 0"
        event.count=trigger.num;
        "step 1"
        event.count--;
        player.gainPlayerCard(get.prompt('ark_baoke',trigger.player),trigger.player,get.buttonValue,'e').set('logSkill',[event.name,trigger.player]);
        "step 2"
        if(result.bool&&event.count>0&&trigger.player.countGainableCards(player,'e')>0) event.goto(1);
    },
            },
            "ark_zhiyi":{
                audio:"ext:无名方舟:2",
                trigger:{
                    player:"useCard",
                },
                filter:function(event,player){
        return event.card&&event.card.name=="sha";
    },
                direct:true,
                usable:1,
                content:function (){
        "step 0"
        var num=Math.min(
            Math.max(1,player.maxHp-player.hp),
            game.players.slice(0).filter(function(target){
                return !trigger.targets.contains(target)&&player.canUse(trigger.card,target)
            }).length
        );
        var list=["令"+get.translation(trigger.targets)+"需要两张【闪】才能响应"+get.translation(trigger.card)];
        if(num>0){
            list.push("为"+get.translation(trigger.card)+"额外指定至多"+get.cnNumber(num,true)+"名目标");
        }
        player.chooseControlList(list).ai=function (){
            var player=_status.event.player;
            var targets=_status.event.getTrigger().targets;
            var jiu=(player.hasSkill('jiu')&&player.storage.jiu&&Number(player.storage.jiu)!=NaN?player.storage.jiu:0);
            var num2=game.countPlayer(function(target){
                return !targets.contains(target)&&player.canUse(trigger.card,target)&&get.effect(target,trigger.card,player,player)>0;
            })
            if(player.get("h").some(a=>lib.filter.cardDiscardable(a,player,_status.event)&&get.suit(a)=="spade")&&targets.filter(tri=>(((function (){var k=[jiu+trigger.baseDamage,tri.hp];k.sort((a,b)=>b-a);return k[0]-k[1]})()<=0)&&get.effect(tri,trigger.card,player,player)>0)).length==1) return 0;
    if((num2+targets.length)*(jiu+trigger.baseDamage)>(jiu+trigger.baseDamage)) return 1;
    return 0;
};
        event.num=num;
        "step 1"    
        if(result.index==0){
            trigger.ark_zhiyi=true;
            if(Array.isArray(trigger.targets)&&trigger.targets.length){
                for(var i of trigger.targets){
                    player.logSkill(event.name,i);
                    var id=i.playerid;
                    var map=trigger.customArgs;
                    if(!map[id]) map[id]={};
                    if(typeof map[id].shanRequired=='number'){
                        map[id].shanRequired++;
                    }
                    else{
                        map[id].shanRequired=2;
                    }
                }
            } 
            else if(trigger.targets&&trigger.targets.playerid){
                var id=trigger.targets.playerid;
                var map=trigger.customArgs;
                if(!map[id]) map[id]={};
                if(typeof map[id].shanRequired=='number'){
                    map[id].shanRequired++;
                }
                else{
                    map[id].shanRequired=2;
                }
            }
            event.finish();
        }
        else if(result.index==1){
            player.chooseTarget("为"+get.translation(trigger.card)+'额外指定'+get.cnNumber(event.num,true)+'名目标',function(card,player,target){
        return !_status.event.sourcex.contains(target)&&!trigger.targets.contains(target)&&player.canUse(_status.event.card,target);
    },[1,event.num]).set('sourcex',trigger.targets).set('ai',function(target){
        var player=_status.event.player;
        return get.effect(target,_status.event.card,player,player)+(target.maxHp-target.hp);
    }).set('card',trigger.card);
}
        "step 2"
        if(result.targets&&result.targets.length){
            player.logSkill(event.name,result.targets);
            trigger.targets.add(...result.targets);
        }                                    
    },
                ai:{
                    "directHit_ai":true,
                    unequip:true,
                    "unequip_ai":true,
                    skillTagFilter:function(player,tag,arg){
            if(tag=='unequip'){
                if(get.distance(player,arg.target)<=1)return true;
            } 
            else if(arg.card.name!='sha'||!arg.ark_zhiyi||arg.target.countCards('h','shan')>1) return false;
        },
                },
            },
            "ark_lvmo":{
                mod:{
                    aiValue:function (player,card,num){
            if(player.getEquip('zhangba')&&player.countCards('hs')>1&&game.hasPlayer(target=>(((player.hasSkill('jiu')&&player.storage.jiu?player.storage.jiu:0)+1)-target.hp<=0)&&player.canUse({name:"sha"},target)&&get.effect(target,{name:"sha"},player,player)>0)&&player.get("h").some(a=>lib.filter.cardDiscardable(a,player,_status.event)&&get.suit(a)=="spade")&&(get.suit(card)!="spade"||player.countCards("h",a=>a!=card&&get.suit(a)=="spade")<=0)) return 0;
            if(card.name=='sha') return num+4;
            if(get.suit(card)=="spade") return num+4;
        },
                    aiOrder:function(player,card,num){
            if(card.name=='sha'&&get.suit(card)=='spade')return num-0.1;
        },
                },
                audio:"ext:无名方舟:2",
                trigger:{
                    global:"dyingBefore",
                },
                direct:true,
                filter:(e,p)=>e.source&&e.source==p&&p.get("h").filter(a=>lib.filter.cardDiscardable(a,p,e)&&get.suit(a)=="spade").length,
                content:function (){
        "step 0"
        var next=player.chooseToDiscard("h",c=>get.suit(c)=="spade").set("prompt",get.prompt2(event.name,trigger.player)).set("ai",c=>{if(get.attitude(player,trigger.player)<0)return 11-get.value(c)});
        "step 1"
        if(result.bool&&result.cards&&result.cards.length){
            player.logSkill(event.name,trigger.player);
            trigger.cancel();
            _status.dying.remove(trigger.player);
            game.broadcast(function(list){
        _status.dying=list;
    },_status.dying);
    if(trigger.player.die!=lib.element.player.die)trigger.player.die=lib.element.player.die;
    trigger.player.die({source:player});
        }                    
    },
            },
            "ark_qiaozhuang":{
                usable:1,
                audio:"ext:无名方舟:4",
                enable:"chooseToUse",
                prompt:"将红桃牌当【桃园结义】、梅花牌当【南蛮入侵】、方片牌当【五谷丰登】、黑桃牌当【万箭齐发】使用",
                viewAs:function(cards,player){
        var name=false;
        var nature=null;
        switch(get.suit(cards[0],player)){
            case 'club':name='nanman';break;
            case 'diamond':name='wugu';break;
            case 'spade':name='wanjian';break;
            case 'heart':name='taoyuan';break;
        }
        if(name) return {name:name,nature:nature};
        return null;
    },
                check:function (card){
        var player=_status.event.player,num=[["taoyuan","heart"],["nanman","club"],["wugu","diamond"],["wanjian","spade"]].filter(suit=>player.get("h",card=>get.suit(card)==suit[1]).length>0).map(name=>[name[0],player.getUseValue({name:name[0]}),name[1]]).sort((a,b)=>b[1]-a[1]);
        if(player.getUseValue({name:"sha"})<=num[0][1]&&get.suit(card)==num[0][2]) return num[0][1]-get.value(card);
        return 0;
    },
                position:"h",
                filterCard:function(card,player,event){
        event=event||_status.event;
        var filter=event._backup.filterCard;
        var name=get.suit(card,player);
        if(name=='club'&&filter({name:'nanman',cards:[card]},player,event)) return true;
        if(name=='diamond'&&filter({name:'wugu',cards:[card]},player,event)) return true;
        if(name=='spade'&&filter({name:'wanjian',cards:[card]},player,event)) return true;
        if(name=='heart'&&filter({name:'taoyuan',cards:[card]},player,event)) return true;
        return false;
    },
                filter:function(event,player){
        if(player.getStat().card.sha>=1) return false;
        var filter=event.filterCard;
        if(filter({name:'wugu'},player,event)&&player.countCards('h',{suit:'diamond'})) return true;
        if(filter({name:'nanman'},player,event)&&player.countCards('h',{suit:'club'})) return true;
        if(filter({name:'taoyuan'},player,event)&&player.countCards('h',{suit:'heart'})) return true;
        if(filter({name:'wanjian'},player,event)&&player.countCards('h',{suit:'spade'})) return true;
        return false;
    },
                precontent:function (){
        player.addTempSkill('ark_qiaozhuang_sha2');
    },
                ai:{
                    order:function (){
            var player=_status.event.player,num=[["taoyuan","heart"],["nanman","club"],["wugu","diamond"],["wanjian","spade"]].filter(suit=>player.get("h",card=>get.suit(card)==suit[1]).length).map(name=>[name[0],player.getUseValue({name:name[0]}),name[1]]).sort((a,b)=>b[1]-a[1]);
            if(num[0][1]>0) return num[0][1];
            return 13;
        },
                },
                locked:false,
                subSkill:{
                    "sha2":{
                        mod:{
                            cardEnabled:function(card){
                    if(card.name=='sha') return false;
                },
                        },
                        sub:true,
                    },
                },
            },
            "ark_jiangyun":{
                mod:{
                    aiValue:function (player,card,num){
            if(get.type(card)!="basic"){
                if(get.color(card)=="red"){
                    if(player.countCards("hs","shan")<=0&&player.countCards("hs",c=>get.color(c)=="red"&&get.type(c)!="basic")<=0) return num+6;
                    return num+(10-((player.countCards("hs","shan")+player.countCards("hs",c=>get.color(c)=="red"&&get.type(c)!="basic"))*4));
                }
            }
        },
                },
                usable:1,
                audio:"ext:无名方舟:2",
                enable:["chooseToUse","chooseToRespond"],
                prompt:"将一张红色非基本牌牌当做【闪】、黑色非基本牌当做【杀】使用或打出",
                viewAs:function(cards,player){
        var event=_status.event
        var filter=event._backup.filterCard;
        var name=false;
        var nature=null;
        if(filter({name:'shan',cards:[cards]},player,event)){
            name='shan'
        }
        else if(filter({name:'sha',cards:[cards]},player,event)){
            name='sha'
        }
        if(name) return {name:name,nature:nature};
        return null;
    },
                check:function(card){   
        return 10-get.value(card);
    },
                position:"hes",
                filterCard:function(card,player,event){
        event=event||_status.event;
        var filter=event._backup.filterCard;
        if(filter({name:'shan',cards:[card]},player,event)) return get.color(card)=='red'&&get.type(card)!='basic';
        if(filter({name:'sha',cards:[card],nature:null},player,event)) return get.color(card)=='black'&&get.type(card)!='basic';
        return false;
    },
                filter:function(event,player){
        var filter=event.filterCard;
        if(player==_status.currentPhase) return false
              if(filter({name:'sha'},player,event)&&player.countCards('hes',function(card){
                   return get.color(card)=='black'&&get.type(card)!='basic';
        })) return true;
        if(filter({name:'shan'},player,event)&&player.countCards('hes',function(card){
                   return get.color(card)=='red'&&get.type(card)!='basic';
        })) return true;
        return false;
    },
                ai:{
                    respondSha:true,
                    respondShan:true,
                    skillTagFilter:function(player,tag){
            var color=(tag=='respondSha'?'black':'red');
            return player.countCards("hes",c=>get.color(c)==color)>0;
        },
                    order:7,
                },
            },
            "ark_xiannan":{
                audio:"ext:无名方舟:4",
                trigger:{
                    player:"useCard",
                },
                filter:function(event,player){
        return event.card.name=='sha';
    },
                content:function(){
        'step 0'
        player.draw()
        player.chooseToDiscard(true,1,'he').set('ai',function(card){
            var player=_status.event.player,targets=_status.event.targets,cards=_status.event.card,trick=0,equip=0;
            for(var i=0;i<targets.length;i++){
                if(targets[i].get('e','2')&&targets[i].get('e','2').name=='bagua') equip++;
                if(targets[i].countCards('h',{name:'shan'})>0) equip++;
                if(targets[i].countCards('h')==0) trick++;
            }
            if(['trick','delay'].contains(get.type(card))&&trick>equip) return 20-get.value(card);
            if(get.type(card)=='equip'&&equip>=trick) return 30-get.value(card);
            if(game.hasPlayer(function(current){
                return !targets.contains(current)&&player.canUse(cards,current)&&get.effect(current,card,player,player);
            })&&card.type=='basic') return 8-get.value(card);
            return -get.value(card)
        }).set('targets',trigger.targets).set('card',trigger.card)
        'step 1'
        if(result.cards){
            var card=result.cards[0];
            if(get.type(card)=='basic'){
                player.chooseTarget('你可以选择'+get.translation(trigger.card)+'的额外目标',function(card,player,target){
                    var player=_status.event.player;
                    if(_status.event.targets.contains(target)) return false;
                    return player.canUse(_status.event.card,target)
                }).set('targets',trigger.targets).set('card',trigger.card).set('ai',function(target){
                    var trigger=_status.event.getTrigger();
                    var player=_status.event.player;
                    return get.effect(target,trigger.card,player,player);
                });
            }
            else if(['trick','delay'].contains(get.type(card))){
                trigger.baseDamage++
            }
            else if(get.type(card)=='equip'){
                trigger.directHit.addArray(game.filterPlayer(function(current){
                    return current!=player;
                }));
            }
        }
        'step 2'
        if(result.targets){
            trigger.targets.addArray(result.targets);
            player.line(result.targets);
        }
    },
                ai:{
                    expose:0.8,
                },
            },
            "ark_tiexian":{
                group:["ark_tiexian_damage","ark_tiexian_zhunbei"],
                trigger:{
                    player:"phaseUseAfter",
                },
                filter:function(event,player){
        return !player.getStat('damage')>0&&player.countCards('h')>0;
    },
                direct:true,
                audio:"ext:无名方舟:2",
                content:function(){
        'step 0'
        player.chooseCard('h',get.prompt2('ark_tiexian')).set('ai',function(card){
            return 15-get.value(card)
        })
        'step 1'
        if(result.cards){
            var card=result.cards[0];
            player.logSkill('ark_tiexian');
            player.lose(card,ui.special,'toStorage');
            player.markAuto('ark_tiexian',result.cards);
            game.log(player,'将',card,'置于了武将牌上');
        }
    },
                intro:{
                    content:"cards",
                    onunmark:"throw",
                },
                subSkill:{
                    damage:{
                        trigger:{
                            player:"damageBegin4",
                        },
                        filter:function(event,player){
                return player.getStorage('ark_tiexian').length>0;
            },
                        popup:false,
                        forced:true,
                        content:function(){
                player.logSkill('ark_tiexian')
                trigger.cancel();
                var card=player.storage.ark_tiexian[0]
                player.$throw(card)
                player.storage.ark_tiexian.remove(card);
                player.unmarkSkill('ark_tiexian');
                player.chooseUseTarget('###是否发动【铁弦】？###视为使用一张【杀】',{name:'sha'},false);
            },
                        sub:true,
                    },
                    zhunbei:{
                        trigger:{
                            player:"phaseZhunbeiBegin",
                        },
                        filter:function(event,player){
                return player.getStorage('ark_tiexian').length>0;
            },
                        forced:true,
                        popup:false,
                        content:function(){
                player.logSkill('ark_tiexian')
                var card=player.storage.ark_tiexian[0]
                player.$throw(card)
                player.storage.ark_tiexian.remove(card);
                player.unmarkSkill('ark_tiexian');
                player.draw(2)
            },
                        sub:true,
                    },
                },
            },
            "ark_buce":{
                audio:"ext:无名方舟:4",
                trigger:{
                    player:"phaseDrawBegin1",
                },
                frequent:true,
                filter:function(event){
        return !event.numFixed;
    },
                content:function(){
        'step 0'
        trigger.changeToZero();
        event.cards=get.cards(4);
        'step 1'
        if(event.cards.length>1){
            player.chooseCardButton('将“卜测”牌分配给任意角色',true,event.cards,[1,event.cards.length]).set('ai',function(button){
                if(ui.selected.buttons.length==0) return 1;
                return 0;
            });
        }
        else if(event.cards.length==1){
            event._result={links:event.cards.slice(0),bool:true};
        }
        else{
            event.finish();
        };
        'step 2'
        if(result.bool){
            for(var i=0;i<result.links.length;i++){
                event.cards.remove(result.links[i]);
            }
            event.togive=result.links.slice(0);
            player.chooseTarget('将'+get.translation(result.links)+'交给一名角色',true).set('ai',function(target){
                var att=get.attitude(_status.event.player,target),player=_status.event.player;
                if(att>0){
                    if(_status.currentPhase==player&&target==player&&game.hasPlayer((tag)=>player.canUse(event.togive[0],tag))&&player.getCardUsable(event.togive[0])>=player.countCards(card=>card.name==event.togive[0]))return att+100;
                                        if(get.type(event.togive[0])=='equip')return att+(get.effect(target,event.togive[0],player,player))+(!target.getEquip(get.equipNum(event.togive[0]))?100:-10);
                                        return att+(target.countCards(card=>get.name(card)==get.name(event.togive[0]))<=0?100:0)/(1+target.countCards('h'));
                };
                return _status.event.enemy?1:0;
            }).set('enemy',get.value(event.togive[0],player,'raw')<0);
        };
        'step 3'
        if(result.targets.length){
            result.targets[0].gain(event.togive,'draw');
            player.line(result.targets[0],'green');
            game.log(result.targets[0],'获得了'+get.cnNumber(event.togive.length)+'张牌');
            for(var card in event.togive){
                if(get.type(card)=="equip") result.targets[0].chooseUseTarget(card);
            }
            event.goto(1);
        };
    },
                ai:{
                    expose:0.5,
                    threaten:1.3,
                },
            },
            "ark_mingding":{
                audio:"ext:无名方舟:2",
                trigger:{
                    global:"judge",
                },
                direct:true,
                filter:function(event,player){
        return player.countCards('hes')>0;
    },
                content:function(){
        'step 0'
        player.chooseToDiscard('hes',get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+get.translation(trigger.player.judging[0])+'，'+get.prompt('ark_mingding')).set('ai',function(card){
            var trigger=_status.event.getTrigger();
            var player=_status.event.player;
            var judging=_status.event.judging;
            var result=trigger.judge(judging);
            var attitude=get.attitude(player,trigger.player);
            if(player.countCards('he')<=2) return -1;
            return -result*attitude-0.1*get.value(card);
        }).set('judging',trigger.player.judging[0]);
        'step 1'
        if(result.bool){
            event.cards=get.cards(3);
            player.chooseCardButton('打出一张牌替换'+get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定牌'+
            get.translation(trigger.player.judging[0]),true,event.cards,1).set('ai',function(button){
                if(ui.selected.buttons.length==0) return 1;
                return 0;
            }).set('ai',function(card){
                var trigger=_status.event.getTrigger();
                var player=_status.event.player;
                var judging=_status.event.judging;
                var result=trigger.judge(card)-trigger.judge(judging);
                var attitude=get.attitude(player,trigger.player);
                if(attitude==0||result==0) return 0;
                if(attitude>0){
                    return result;
                }
                else{
                    return -result;
                }
            }).set('judging',trigger.player.judging[0]);
        }
        else event.finish()
        'step 2'
        if(result.bool){
            event.cards.remove(result.links[0]);
            player.respond(result.links[0],'ark_mingding','highlight','noOrdering');
            game.cardsDiscard(event.cards);
            game.log(event.cards,'进入了弃牌堆');
        }
        else{
            event.finish();
        }
        'step 3'
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
            trigger.player.judging[0]=result.links[0];
            trigger.orderingCards.addArray(result.links[0]);
            game.log(trigger.player,'的判定牌改为',result.links[0]);
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
            "ark_wudao":{
                audio:"ext:无名方舟:2",
                trigger:{
                    player:"useCardToPlayered",
                },
                direct:true,
                filter:function(event,player){
        return event.card.name=='sha'&&event.targets.length<2&&game.hasPlayer(function(current){
            return !event.targets.contains(current)&&player.canUse(event.card,current)
        })
    },
                content:function(){
        'step 0'
        player.chooseTarget('误导：你可以选择'+get.translation(trigger.card)+'的额外目标',function(card,player,target){
            var player=_status.event.player;
            if(_status.event.targets.contains(target)) return false;
            return player.canUse(_status.event.card,target)
        }).set('targets',trigger.targets).set('card',trigger.card).set('ai',function(target){
            var trigger=_status.event.getTrigger();
            var player=_status.event.player;
            return get.effect(target,trigger.card,player,player);
        });
        'step 1'
        if(result.targets){
            event.targetx=result.targets
            player.line(result.targets);
            player.logSkill('ark_wudao',result.targets)
            trigger.targets.addArray(result.targets);
            if(trigger.targets[0].countCards('he')>0){
                trigger.targets[0].chooseToDiscard(1,'he','弃置一张牌，或令'+get.translation(result.targets)+'不再是'+get.translation(trigger.card)+'的目标且你无法响应'+get.translation(trigger.card)).set('ai',function(card){
                    var player=_status.event.player
                    var targetx=_status.event.targetx
                    if(targetx.hp<player.hp) return -1
                    else if(player.countCards('he',{name:'shan'})<1&&(!player.get('e','2')||player.get('e','2').name!='bagua')){
                        return -1
                    }
                    else if(player.get('e','2')&&player.get('e','2').name=='lanyin'){
                        return 15-get.value(card)
                    }
                    else return 10-get.value(card)
                }).set('targetx',result.targets[0])
            }
        }
        else event.finish()
        'step 2'
        if(!result.bool){
            player.line(event.targetx);
            trigger.targets.removeArray(event.targetx);
            trigger.getParent().directHit.add(trigger.targets[0]);
        }
    },
                ai:{
                    expose:0.8,
                },
            },
            "ark_mofang":{
                group:["ark_mofang_turnover"],
                audio:"ext:无名方舟:2",
                enable:"chooseToUse",
                mark:true,
                unique:true,
                init:function(player){
        player.storage.ark_mofang=0;
    },
                filter:function(event,player){
        if(player.storage.ark_mofang>=2) return false;
        if(event.type=='dying'){
            if(player!=event.dying) return false;
            return true;
        }
        return false;
    },
                content:function(){
        'step 0'
        player.storage.ark_mofang++;
        if(player.storage.ark_mofang>2){
            player.awakenSkill('ark_mofang');
            event.finish();
            return;
        };
        player.discard(player.getCards('hej'));
        'step 1'
        player.link(false);
        'step 2'
        player.turnOver(false);
        'step 3'
        if(player.hp<player.maxHp){
            player.recover(player.maxHp-player.hp);
        }
        'step 4'
        player.draw(4);
        event.trigger('arkEnterGame')
    },
                ai:{
                    order:1,
                    skillTagFilter:function(player,arg,target){
            var num=2
            if(player!=target||player.storage.ark_mofang>=2) return false;
        },
                    save:true,
                    result:{
                        player:function(player){
                if(player.hp<=0) return 10;
                if(player.hp<=2&&player.countCards('he')<=1) return 10;
                return 0;
            },
                    },
                    threaten:function(player,target){
             return 1;
        },
                },
                intro:{
                    content:function(storage,player,skill){
            var num=2
            return '魔方：剩余'+(num-player.storage.ark_mofang)+'次复活'
        },
                },
                subSkill:{
                    "1":{
                        trigger:{
                            player:["damageBegin4","turnOverAfter"],
                        },
                        filter:function(event){
                if(event.name=='damage'){
                    return true;
                }
                else return !event.player.isTurnedOver();
            },
                        forced:true,
                        content:function(){
                if(trigger.name=='damage'){
                    trigger.cancel();
                }
                else player.removeSkill('ark_mofang_1')
            },
                        sub:true,
                        mark:true,
                        intro:{
                            content:"你不会受到伤害",
                        },
                    },
                    turnover:{
                        trigger:{
                            global:"gameDrawAfter",
                            player:["enterGame","arkEnterGame"],
                        },
                        direct:true,
                        audio:"ext:无名方舟:2",
                        content:function(){
                'step 0'
                player.chooseTarget(1,'魔方：你可以令任意名距离为1的角色翻面并无法受到伤害直到其翻至正面',function(card,player,target){
                    return get.distance(player,target)<=1
                }).set('ai',function(target){
                    var player=_status.event.player
                    return 2-get.attitude(player,target)
                })
                'step 1'
                if(result.targets){
                    player.logSkill('ark_mofang_turnover',result.targets)
                    player.line(result.targets)
                    for(var i=0;i<result.targets.length;i++){
                        result.targets[i].turnOver()
                        result.targets[i].addSkill('ark_mofang_1')
                    }
                }
            },
                        sub:true,
                    },
                },
            },
            "ark_chuchan":{
                group:["ark_dikang"],
                derivation:["ark_dikang"],
                audio:"ext:无名方舟:1",
                trigger:{
                    player:"dying",
                },
                skillAnimation:true,
                animationColor:"fire",
                unique:true,
                limited:true,
                forced:true,
                init:function(player){
        player.storage.ark_chuchan=false;
    },
                filter:function(event,player){
        return player.hp<1&&!player.storage.ark_chuchan;
    },
                content:function(){
        player.storage.ark_chuchan=true;
        if(player.hp<2){
            player.recover(2-player.hp);
        }
    },
                mark:true,
                intro:{
                    content:"limited",
                },
            },
            "ark_haolie":{
                locked:false,
                mod:{
                    selectTarget:function(card,player,range){
            if((card.name=='sha'||card.name=='juedou')&&get.color(card)=='black') range[1]+=2; 
        },
                },
                trigger:{
                    player:"useCard1",
                },
                filter:function(event,player){
        if((event.card.name=='sha'||event.card.name=='juedou')&&get.color(event.card)=='red') return true;
    },
                audio:"ext:无名方舟:3",
                check:function(event,player){
        if(player.hp==1||player.storage.ark_chuchan==false) return true;
        if(player.hp<=2) return false;
        var eff=0;
        for(var i=0;i<event.targets.length;i++){
            var target=event.targets[i];
            var eff1=get.damageEffect(target,player,player);
            var eff2=get.damageEffect(target,player,player,'fire');
            eff+=eff2;
            eff-=eff1;
        }
        return eff>=-4;
    },
                content:function(){
        'step 0'
        if(player.hp>1) player.loseHp()
        trigger.card.nature='fire';
        'step 1'
        var num=player.maxHp-player.hp
        player.chooseTarget([1,num],'你可以选择至多'+num+'名角色造成一点火焰伤害',function(card,player,target){
            var player=_status.event.player
            return target!=player
        }).set('ai',function(target){
            var player=_status.event.player
            return get.damageEffect(target,player,player,'fire');
        })
        'step 2'
        if(result.targets){
            player.line(result.targets)
            for(var i=0;i<result.targets.length;i++){
                result.targets[i].damage(1,'fire')
            }
        }
    },
                group:["ark_haolie_juedou","ark_haolie_sha"],
                subSkill:{
                    juedou:{
                        enable:["chooseToUse","chooseToRespond"],
                        prompt:"将任意一个区域内的最后一张牌当做【决斗】使用或打出",
                        viewAs:{
                            name:"juedou",
                        },
                        viewAsFilter:function(player){
                if(player.hasSkill('ark_haolie_count')) return false;
                return player.countCards('h')==1||player.countCards('e')==1||player.countCards('j')==1
            },
                        position:"hej",
                        filterCard:function(card,player){
                return (get.position(card)=="e"&&player.countCards('e')==1)||(get.position(card)=="h"&&player.countCards('h')==1)||(get.position(card)=="j"&&player.countCards('j')==1);
            },
                        check:function(card){
                return 8-get.value(card);
            },
                        precontent:function (){
                player.addTempSkill('ark_haolie_count');
            },
                        ai:{
                            basic:{
                                order:10,
                                useful:1,
                                value:5.5,
                            },
                            wuxie:function(target,card,player,viewer){
                    if(player==game.me&&get.attitude(viewer,player)>0){
                        return 0;
                    }
                },
                            result:{
                                target:-1.5,
                                player:function(player,target,card){
                        if(player.hasSkillTag('directHit_ai',true,{
                            target:target,
                            card:card,
                        },true)){
                            return 0;
                        }
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
                    sha:{
                        enable:["chooseToRespond","chooseToUse"],
                        filterCard:function(card,player){
                return (get.position(card)=="e"&&player.countCards('e')==1)||(get.position(card)=="h"&&player.countCards('h')==1)||(get.position(card)=="j"&&player.countCards('j')==1);
            },
                        position:"hej",
                        viewAs:{
                            name:"sha",
                        },
                        viewAsFilter:function(player){
                if(player.hasSkill('ark_haolie_count')) return false;
                return player.countCards('h')==1||player.countCards('e')==1||player.countCards('j')==1
            },
                        prompt:"将任意一个区域内的最后一张牌当做【杀】使用或打出",
                        check:function(card){return 4-get.value(card)},
                        precontent:function (){
                player.addTempSkill('ark_haolie_count');
            },
                        ai:{
                            skillTagFilter:function(player){
                    if(player.countCards('h')==1||player.countCards('e')==1||player.countCards('j')==1) return true
                    return false;
                },
                            respondSha:true,
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
                            return
                                !targets.contains(current)&&lib.filter.targetEnabled2(card,player,current)&&get.effect(current,card,player,player)>0;
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
                            canLink:function(player,target,card){
                    if(!target.isLinked()&&!player.hasSkill('wutiesuolian_skill')) return false;
                    if(target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                        target:target,
                        card:card,
                    },true)) return false;
                    if(player.hasSkill('jueqing')||player.hasSkill('gangzhi')||target.hasSkill('gangzhi')) return false;
                    return true;
                },
                            basic:{
                                useful:[5,3,1],
                                value:[5,3,1],
                            },
                            order:function(item,player){
                    if(player.hasSkillTag('presha',true,null,true)) return 10;
                    if(lib.linked.contains(get.nature(item))){
                        if(game.hasPlayer(function(current){
                            return current!=player&&current.isLinked()&&player.canUse(item,current,null,true)&&get.effect(current,item,player,player)>0&&lib.card.sha.ai.canLink(player,current,item);
                        })&&game.countPlayer(function(current){
                            return current.isLinked()&&get.damageEffect(current,player,player,get.nature(item))>0;
                        })>1) return 3.1;
                        return 3;
                    }
                    return 3.05;
                },
                            result:{
                                target:function(player,target,card,isLink){
                        var eff=function(){
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
                }();
                if(!isLink&&target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                    target:target,
                    card:card,
                },true)) return eff/1.2;
                        return eff;
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
                        },
                        sub:true,
                    },
                    count:{
                        sub:true,
                    },
                },
            },
            "ark_xuejiang":{
                group:"ark_xuejiang_recover",
                audio:"ext:无名方舟:2",
                trigger:{
                    player:["phaseDrawBegin","phaseDiscardAfter"],
                    source:["damageSource"],
                },
                forced:true,
                content:function(){
        player.storage.ark_xuejiang++;
        player.markSkill('ark_xuejiang')
    },
                mark:true,
                intro:{
                    content:function(storage,player,skill){
            return '共有'+player.storage.ark_xuejiang+'个标记'
        },
                },
                init:function(player,skill){
        player.storage[skill]=0;
    },
                subSkill:{
                    recover:{
                        trigger:{
                            player:"phaseJieshu",
                        },
                        filter:function(event,player){
                return player.storage.ark_xuejiang>=3
            },
                        direct:true,
                        content:function(){
                'step 0'
                player.chooseTarget(1,'血浆：你可以选择一名角色回复一点体力并摸两张牌',function(card,player,target){
                    return target.hp<target.maxHp
                }).set('ai',function(target){
                    var player=_status.event.player
                    if(target.hp>2) return -1
                    return get.attitude(player,target)>1
                })
                'step 1'
                if(result.targets){
                    player.line(result.targets)
                    player.logSkill(result.targets[0],'ark_xuejiang')
                    result.targets[0].recover();
                    result.targets[0].draw(2);
                    player.storage.ark_xuejiang-=3;
                    player.markSkill('ark_xuejiang')
                }
            },
                        sub:true,
                    },
                },
            },
            "ark_xuenu":{
                audio:"ext:无名方舟:2",
                trigger:{
                    global:"phaseZhunbeiBegin",
                },
                skillAnimation:true,
                animationColor:"fire",
                unique:true,
                limited:true,
                init:function(player){
        player.storage.ark_xuenu=false;
    },
                filter:function(event,player){
        return player.storage.ark_xuejiang>0&&!player.storage.xuenu&&event.player!=player;
    },
                check:function(event,player){
        var player=_status.event.player
        if(player.storage.ark_xuejiang<5) return false;
        if(get.attitude(player,event.player)-1>0) return true
        return false
    },
                content:function(){
        'step 0'
        player.awakenSkill('ark_xuenu')
        player.storage.ark_xuenu=true;
        var list=[];
        for(var i=0;i<7&&i<player.storage.ark_xuejiang;i++){
            list.push(i+1)
        }
        player.chooseControl(list).set('prompt','血怒：选择要弃置的标记数,'+get.translation(trigger.player)+'摸等量的牌，并且直到其回合结束，其造成的伤害+1').set('ai',function(){
            return list.length-1
        })
        'step 1'
        if(result.control){
            player.storage.ark_xuejiang-=result.control;
            trigger.player.draw(result.control)
            trigger.player.addTempSkill('ark_xuenu_damage')
        }
    },
                mark:true,
                marktext:"怒",
                intro:{
                    content:"limited",
                },
                subSkill:{
                    damage:{
                        trigger:{
                            source:"damageBegin1",
                        },
                        forced:true,
                        filter:function(event,player){
                return event.notLink();
            },
                        content:function(){
                trigger.num++
            },
                        mark:true,
                        intro:{
                            content:function(storage,player,skill){
                    return '血怒：造成的伤害+1'
                },
                        },
                        marktext:"怒",
                        sub:true,
                    },
                },
            },
            "ark_gongcheng":{
                audio:"ext:无名方舟:2",
                enable:["chooseToRespond","chooseToUse"],
                filterCard:function(card,player){
        return get.type(card)=='equip';
    },
                position:"hes",
                viewAs:{
                    name:"sha",
                    nature:"thunder",
                },
                viewAsFilter:function(player){
        if(!player.countCards('hes',function(card){
            return get.type(card)=='equip'
        })) return false;
    },
                prompt:"将一张装备牌当杀使用或打出",
                check:function(card){return 15-get.value(card)},
                ai:{
                    skillTagFilter:function(player){
            if(!player.countCards('hes',function(card){
                return get.type(card)=='equip'
            })) return false;
        },
                    respondSha:true,
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
                    canLink:function(player,target,card){
            if(!target.isLinked()&&!player.hasSkill('wutiesuolian_skill')) return false;
            if(target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                target:target,
                card:card,
            },true)) return false;
            if(player.hasSkill('jueqing')||player.hasSkill('gangzhi')||target.hasSkill('gangzhi')) return false;
            return true;
        },
                    basic:{
                        useful:[5,3,1],
                        value:[5,3,1],
                    },
                    order:function(item,player){
            if(player.hasSkillTag('presha',true,null,true)) return 10;
            if(lib.linked.contains(get.nature(item))){
                if(game.hasPlayer(function(current){
                    return current!=player&&current.isLinked()&&player.canUse(item,current,null,true)&&get.effect(current,item,player,player)>0&&lib.card.sha.ai.canLink(player,current,item);
                })&&game.countPlayer(function(current){
                    return current.isLinked()&&get.damageEffect(current,player,player,get.nature(item))>0;
                })>1) return 3.1;
                return 3;
            }
            return 3.05;
        },
                    result:{
                        target:function(player,target,card,isLink){
                var eff=function(){
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
                }();
                if(!isLink&&target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                    target:target,
                    card:card,
                },true)) return eff/1.2;
                return eff;
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
                },
            },
            "ark_sheding":{
                group:["ark_sheding_target"],
                usable:2,
                trigger:{
                    player:"useCardAfter",
                },
                audio:"ext:无名方舟:2",
                filter:function(event,player){
        return event.card&&event.card.name=='sha';
    },
                direct:true,
                content:function(){
        'step 0'
        player.chooseToUse('射钉：是否对'+get.translation(trigger.targets)+'使用一张杀',function(card,player){
                return get.name(card)=='sha'
            }).set('filterTarget',function(card,player,target){
            return _status.event.targetx.contains(target)
        }).set('targetx',trigger.targets).set('logSkill',[event.name]).set('oncard',function(){
            _status.event.arktag='ark_sheding';
        });
        'step 1'
        if(!result.bool){
            player.draw();
            player.logSkill('ark_sheding')
        }
    },
                ai:{
                    "unequip_ai":true,
                    unequip:true,
                    skillTagFilter:function(player,tag,arg){
            if(tag=='unequip'){
                if(arg&&arg.card&&arg.card.name=="sha") return true;
                return false
            } 
        },
                },
                subSkill:{
                    target:{
                        trigger:{
                            player:"useCardToPlayered",
                        },
                        direct:true,
                        filter:function(event,player){
                return event.card.name=='sha'&&event.getParent().arktag=='ark_sheding'&&game.hasPlayer(function(current){
                    return !event.targets.contains(current)&&player.canUse(event.card,current)
                })
            },
                        content:function(){
                'step 0'
                trigger.getParent().arktag=[]
                player.chooseTarget('你可以选择'+get.translation(trigger.card)+'的额外目标',function(card,player,target){
                    var player=_status.event.player;
                    if(_status.event.targets.contains(target)) return false;
                    return player.canUse(_status.event.card,target)
                }).set('targets',trigger.targets).set('card',trigger.card).set('ai',function(target){
                    var trigger=_status.event.getTrigger();
                    var player=_status.event.player;
                    return get.effect(target,trigger.card,player,player);
                });
                'step 1'
                if(result.targets){
                    player.line(result.targets);
                    player.logSkill('ark_sheding',result.targets)
                    trigger.targets.addArray(result.targets);
                }
            },
                        sub:true,
                    },
                },
            },
            "ark_xianbei":{
                group:["ark_xianbei_1"],
                trigger:{
                    global:"gameDrawAfter",
                    player:"enterGame",
                },
                audio:"ext:无名方舟:2",
                forced:true,
                content:function(){
        player.disableEquip(1);
        player.disableEquip(2);
        player.disableEquip(4);
        player.disableEquip(5);
        player.disableEquip(3);
        var cards=[]
        for(var i=0;i<2;i++){
            cards.push(get.cardPile(function(card){
                return get.type(card)=='equip'&&!cards.contains(card);
            }));
        }
        player.gain(cards,'gain2')
    },
                mod:{
                    ignoredHandcard:function(card,player){
            if(get.type(card)=='equip'){
                return true;
            }
        },
                    cardDiscardable:function(card,player,name){
            if(name=='phaseDiscard'&&get.type(card)=='equip') return false;
        },
                },
                subSkill:{
                    "1":{
                        trigger:{
                            player:"phaseZhunbei",
                        },
                        frequent:true,
                        popup:false,
                        content:function(){
                player.logSkill('ark_xianbei')
                player.gain(get.cardPile(function(card){
                    return get.type(card)=='equip';
                }),'gain2');
            },
                        sub:true,
                    },
                },
            },
            "ark_longteng":{
                global:["ark_longteng_equip"],
                audio:"ext:无名方舟:4",
                enable:"phaseUse",
                usable:1,
                selectCard:1,
                position:"he",
                selectTarget:1,
                discard:false,
                lose:false,
                delay:false,
                filterCard:function(card,player,event){
        return get.type(card)=='equip'
    },
                filterTarget:function(card,player,target){
        if(ui.selected.cards&&target.storage.ark_longteng_equip){
            if(target.storage.ark_longteng_equip.filter(a=>get.subtype(a)==get.subtype(card)).length>0) return false
        }
        if(target==player) return false;
        return true;
    },
                filter:function(event,player){
        return player.countCards('he',{type:'equip'})>0;
    },
                content:function(){
        var card=cards[0]
        player.$give(cards,target,false)
        player.lose(cards,ui.special,'toStorage')
        if(!target.storage.ark_longteng_equip) target.storage.ark_longteng_equip=[]
        target.storage.ark_longteng_equip.push(card)
        target.markSkill('ark_longteng_equip')
    },
                ai:{
                    order:9,
                    result:{
                        target:function(player){
                return -3;
            },
                    },
                },
                subSkill:{
                    equip:{
                        intro:{
                            marktext:"机",
                            content:"cards",
                            onunmark:function(storage,player){
                    if(storage&&storage.length){
                        player.$throw(storage,1000);
                        game.cardsDiscard(storage);
                        game.log(storage,'被置入了弃牌堆');
                        storage.length=0;
                    }
                },
                        },
                        trigger:{
                            player:["phaseUseBegin","useCardAfter","phaseZhunbeiBegin"],
                        },
                        forced:true,
                        popup:false,
                        filter:function(event,player){
                if(!game.hasPlayer(function(current){
                    return current.hasSkill('ark_longteng')
                })) return false;
                var storage=player.storage.ark_longteng_equip
                var banned=player.storage.ark_longteng_banned
                if((!storage)||storage.length==0) return false
                if(event.name=='phaseZhunbei') return true;
                if(!banned) banned=[]
                if(event.name=='phaseUse') return storage.filter(a=>get.subtype(a)=='equip1'&&!banned.contains(a)).length>0
                if(event.name=='useCard'){
                    if(!player.isPhaseUsing()) return false;
                    return storage.filter(a=>get.subtype(a)=='equip2'&&!banned.contains(a)).length>0
                }
                return false
            },
                        content:function(){
                'step 0'
                event.playerx=game.filterPlayer(function(current){
                    return current.hasSkill('ark_longteng')
                })[0]
                if(trigger.name=='phaseUse'){
                    event.playerx.logSkill('ark_longteng',player)
                    event.playerx.line(player)
                    player.damage(1,'fire',event.playerx)
                    event.finish()
                }
                else if(trigger.name=='useCard'){
                    event.playerx.logSkill('ark_longteng',player)
                    event.playerx.line(player)
                    player.chooseToDiscard(1,'he','龙腾：弃置一张牌或受到一点雷电伤害').set('ai',function(card){
                        return 12-get.value(card)
                    })
                }
                else if(trigger.name=='phaseZhunbei'){
                    event.playerx.logSkill('ark_longteng',player)
                    event.playerx.line(player)
                    player.storage.ark_longteng_banned=[]
                    event.goto(2)
                }
                'step 1'
                if(!result.bool){
                    event.playerx.line(player)
                    player.damage(1,'thunder',event.playerx) 
                }
                event.finish()
                'step 2'
                event.count=0
                event.remove=[]
                'step 3'
                player.chooseToDiscard(1,'he',function(card){
                    return get.color(card)==get.color(player.storage.ark_longteng_equip[event.count])||get.type(card)=='equip'
                }).set('ai',function(card){
                    if(get.type(card)=='equip') return 25-get.value(card)
                    return 15-get.value(card)
                }).set('prompt','龙腾：弃置一张与'
                       +get.translation(player.storage.ark_longteng_equip[event.count])+
                       '颜色相同的牌令其无效一回合或弃置一张装备牌将其弃置')
                'step 4'
                if(result.cards){
                    var card=result.cards[0]
                    if(get.type(card)=='equip'){
                        event.remove.push(player.storage.ark_longteng_equip[event.count])
                    }
                    else player.storage.ark_longteng_banned.push(player.storage.ark_longteng_equip[event.count])
                }
                event.count++
                if(event.count<player.storage.ark_longteng_equip.length) event.goto(3)
                'step 5'
                player.storage.ark_longteng_equip.removeArray(event.remove)
                if(player.storage.ark_longteng_equip.length==0) player.unmarkSkill('ark_longteng_equip')
            },
                        mod:{
                            maxHandcard:function(player,num){
                    var banned=player.storage.ark_longteng_banned
                    if(!banned) banned=[]
                    if(player.storage.ark_longteng_equip&&player.storage.ark_longteng_equip.length>0){
                        return num-2*player.storage.ark_longteng_equip.filter(
                            a=>(get.subtype(a)=='equip3'||get.subtype(a)=='equip4'||get.subtype(a)=='equip5')&&!banned.contains(a)
                        ).length;
                    }
                },
                        },
                        sub:true,
                    },
                },
            },
            "ark_zheshe":{
                mod:{
                    inRange:function(from,to){
            if(to.storage.ark_longteng_equip&&to.storage.ark_longteng_equip.length>0) return true;
        },
                },
            },
            "ark_jingtou":{
                global:["ark_jingtou_mark","ark_jingtou_summer"],
                trigger:{
                    player:"useCard1",
                },
                audio:"ext:无名方舟:2",
                filter:function(event,player){
        if(!player.isPhaseUsing()) return false;
        return event.card&&event.card.isCard&&event.cards.length==1
    },
                direct:true,
                content:function(){
        'step 0'
        player.chooseTarget(1,'镜头：你可以选择一名角色获得一个“镜头”').set('ai',function(target){
            var player=_status.event.player
            var att=get.attitude(player,target)
            if(att<0) return -10;
            att=att-target.countMark('ark_jingtou_mark')*2
            if(att<0){
                att=1-target.countMark('ark_jingtou_mark')*0.1
            }
            return att 
        })
        'step 1'
        if(result.targets){
            player.logSkill(event.name,result.targets[0])
            result.targets[0].addMark('ark_jingtou_mark',1)
        }
    },
                subSkill:{
                    mark:{
                        intro:{
                            content:"镜头",
                        },
                        popup:false,
                        enable:["chooseToUse","chooseToRespond"],
                        hiddenCard:function(player,name){
                var bool=(!player.storage.ark_jingtou_respond)||(!player.storage.ark_jingtou_respond.contains(name))
                if(get.type(name)=='basic'&&lib.inpile.contains(name)&&bool) return player.countMark('ark_jingtou_mark')>0;
            },
                        filter:function(event,player){
                if(event.responded||event.ark_jingtou_respond) return false;
                for(var i of lib.inpile){
                  var bool=(!player.storage.ark_jingtou_respond)||(!player.storage.ark_jingtou_respond.contains(i))
                  if(get.type(i)=='basic'&&event.filterCard({name:i},player,event)&&bool) return player.countMark('ark_jingtou_mark')>0;
                }
                return false;
            },
                        chooseButton:{
                            dialog:function(event,player){
                    var list=[];
                    for(var i of lib.inpile){
                        var bool=(!player.storage.ark_jingtou_respond)||(!player.storage.ark_jingtou_respond.contains(i))
                        if(get.type(i)=='basic'&&event.filterCard({name:i},player,event)&&bool){
                            list.push(['基本','',i]);
                            if(i=='sha'){
                                for(var j of lib.inpile_nature) list.push(['基本','','sha',j]);
                            }
                        }
                    }
                    return ui.create.dialog('镜头',[list,'vcard'],'hidden')
                },
                            check:function(button){
                    if(button.link[2]=='shan') return 3;
                    var player=_status.event.player;
                    if(button.link[2]=='jiu'){
                        if(player.getUseValue({name:'jiu'})<=0) return 0;
                        if(player.countCards('h','sha')) return player.getUseValue({name:'jiu'});
                    }
                    return player.getUseValue({name:button.link[2],nature:button.link[3]})/4;
                },
                            backup:function(links,player){
                    return {
                        filterCard:function(){return false},
                        selectCard:-1,
                        viewAs:{
                            name:links[0][2],
                            nature:links[0][3],
                            suit:'none',
                            number:null,
                            isCard:true,
                        },
                        precontent:function(){
                            player.logSkill('ark_jingtou');
                            player.removeMark('ark_jingtou_mark',1)
                            if(!player.storage.ark_jingtou_respond) player.storage.ark_jingtou_respond=[]
                            player.storage.ark_jingtou_respond.push(event.result.card.name)
                            event.result.card={
                                name:event.result.card.name,
                                nature:event.result.card.nature,
                                isCard:true,
                            };
                            delete event.result.skill;
                            return;
                        },
                    }
                },
                        },
                        ai:{
                            order:function(item,player){
            if(_status.event.type=='phase'&&player.getUseValue({name:'jiu'},null,true)>0&&player.countCards('h','sha')) return get.order({name:'jiu'})+1;
                    return 1;
                },
                            respondShan:true,
                            respondSha:true,
                            skillTagFilter:function(player){
                    if(!player.countMark('ark_jingtou_mark')>0) return false;
                },
                            result:{
                                player:function(player){
                        if(_status.event.dying) return get.attitude(player,_status.event.dying);
                        return 1;
                    },
                            },
                        },
                        sub:true,
                    },
                    summer:{
                        silent:true,
                        trigger:{
                            global:"roundStart",
                        },
                        content:function(){
                player.storage.ark_jingtou_respond=[]
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                },
            },
            "ark_yingxiang":{
                audio:"ext:无名方舟:2",
                enable:"phaseUse",
                usable:1,
                selectTarget:1,
                filterTarget:function(card,player,target){
        if(target==player) return false;
        return target.countCards('h')>0;
    },
                filter:function(event,player){
        return player.countMark('ark_jingtou_mark')>0;
    },
                content:function(){
        'step 0'
        player.removeMark('ark_jingtou_mark')
        var card=target.getCards('h')
        var chooseButton=player.chooseButton(['对'+get.translation(target)+'使用一张牌',target.getCards('h')],1)
        chooseButton.set('target',target);
        chooseButton.set('ai',function(button){
            var player=_status.event.player;
            var target=_status.event.target;
            var card=button.link;
            return get.effect(target,card,player,player)
        });
        chooseButton.set('filterButton',function(button){
            var player=_status.event.player;
            var target=_status.event.target;
            var card=button.link;
            return player.canUse(card,target)||target.canUse(card,target);
        });
        'step 1'
        if(result.links){
            player.useCard(result.links[0],target)
            target.update()
        }       
    },
                ai:{
                    order:3,
                    result:{
                        target:function(player){
                return -3;
            },
                    },
                },
            },
            "ark_guiyuan":{
                audio:"ext:无名方舟:2",
                trigger:{
                    global:"judge",
                },
                filter:function(event,player){
        return player.storage.ark_danxiang.length>0;
    },
                direct:true,
                content:function(){
        "step 0"
        var dxcard=player.storage.ark_danxiang[0]
        if(player.countCards('hes',function(card){
            return get.type(card,'trick')==get.type(dxcard)||get.suit(card)==get.suit(dxcard)||card.number==dxcard.number
        })>0){
            player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+get.translation(trigger.player.judging[0])+'，你可以打出一张与“画”花色、点数或种类相同的牌替换判定牌或取消并选择是否用“画”代替判定牌','hes',function(card){
                var player=_status.event.player;
                var dxcard=player.storage.ark_danxiang[0]
                var mod2=game.checkMod(card,player,'unchanged','cardEnabled2',player);
                if(mod2!='unchanged') return mod2;
                var mod=game.checkMod(card,player,'unchanged','cardRespondable',player);
                if(mod!='unchanged') return mod;
                return get.type(card,'trick')==get.type(dxcard)||get.suit(card)==get.suit(dxcard)||card.number==dxcard.number;
            }).set('ai',function(card){
                var trigger=_status.event.getTrigger();
                var player=_status.event.player;
                var judging=_status.event.judging;
                var result=trigger.judge(card)-trigger.judge(judging);
                var attitude=get.attitude(player,trigger.player);
                if(attitude==0||result==0) return 0;
                if(attitude>0){
                    return result;
                }
                else{
                    return -result;
                }
            }).set('judging',trigger.player.judging[0]);
        }
        else event.goto(4)
        "step 1"
        if(result.bool){
            player.respond(result.cards,'highlight','ark_guiyuan','noOrdering');
        }
        else{
            event.goto(4);
        }
        "step 2"
        if(result.bool){
            player.$gain2(trigger.player.judging[0]);
            player.gain(trigger.player.judging[0]);
            trigger.player.judging[0]=result.cards[0];
            trigger.orderingCards.addArray(result.cards);
            game.log(trigger.player,'的判定牌改为',result.cards[0]);
        }
        "step 3"
        game.delay(2);
        event.finish()
        "step 4"
        var dxcard=player.storage.ark_danxiang[0]
        player.chooseBool('是否打出'+get.translation(dxcard)+'代替'+get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'的判定牌'+get.translation(trigger.player.judging[0])).set('ai',function(){
            var trigger=_status.event.getTrigger();
            var player=_status.event.player;
            var judging=_status.event.judging;
            var result=trigger.judge(player.storage.ark_danxiang[0])-trigger.judge(judging);
            var attitude=get.attitude(player,trigger.player);
            return result*attitude-1;
        }).set('judging',trigger.player.judging[0]);
        "step 5"
        if(result.bool){
            var card=player.storage.ark_danxiang
            player.respond(card,'highlight','ark_guiyuan','noOrdering');
            trigger.player.judging[0]=card[0];
            trigger.orderingCards.addArray(card);
            game.log(trigger.player,'的判定牌改为',card);
            player.storage.ark_danxiang=[]
            player.unmarkSkill('ark_danxiang')
        }
    },
                ai:{
                    rejudge:true,
                    tag:{
                        rejudge:1,
                    },
                },
            },
            "ark_danxiang":{
                group:"ark_danxiang_1",
                audio:"ext:无名方舟:2",
                trigger:{
                    player:"phaseZhunbei",
                    global:"gameDrawAfter",
                },
                forced:true,
                init:function(player){
        if(!player.storage.ark_danxiang) player.storage.ark_danxiang=[];
    },
                filter:function(event,player){
        return player.storage.ark_danxiang.length==0;
    },
                content:function(){
        'step 0'
        player.draw();
        'step 1'
        if(player.countCards('h')){
            player.chooseCard('将一张手牌置于武将牌上作为“画”',true).set('ai',function(card){
                if(get.type(card)=='equip') return 0
                return 20-get.value(card)
            });
        }
        'step 2'
        if(result.cards&&result.cards.length){
            player.lose(result.cards,ui.special,'toStorage');
            player.storage.ark_danxiang=player.storage.ark_danxiang.concat(result.cards);
            player.syncStorage('ark_danxiang');
            player.markSkill('ark_danxiang');
            game.log(player,'将',result.cards,'置于武将牌上作为“画”');
        }
    },
                intro:{
                    content:"cards",
                    onunmark:function(storage,player){
            if(storage&&storage.length){
                player.$throw(storage,1000);
                game.cardsDiscard(storage);
                game.log(storage,'被置入了弃牌堆');
             storage.length=0;
            }
        },
                },
                subSkill:{
                    "1":{
                        trigger:{
                            target:"useCardToBefore",
                        },
                        forced:true,
                        priority:15,
                        popup:false,
                        filter:function(event,player){
                if(player==event.player) return false;
                if(player.storage.ark_danxiang.length==0) return false;
                return get.suit(event.card)==get.suit(player.storage.ark_danxiang[0]);
            },
                        content:function(){
                player.logSkill('ark_danxiang')
                game.log(trigger.card,'对',trigger.target,'失效')
                trigger.cancel();
            },
                        ai:{
                            effect:{
                                target:function(card,player,target,current){
                        if(target.storage.ark_danxiang.length==0) return;
                        if(get.suit(card)==get.suit(target.storage.ark_danxiang[0])) return 'zeroplayertarget';
                    },
                            },
                        },
                        sub:true,
                    },
                },
            },
            "ark_huixing":{
                group:["ark_huixing_h1","ark_huixing_h2","ark_huixing_h3","ark_huixing_h4","ark_huixing_h5","ark_huixing_h6","ark_huixing_wash","ark_huixing_dis"],
                trigger:{
                    global:["gameDrawAfter","arkWashCard"],
                    player:["enterGame"],
                },
                audio:"ext:无名方舟:2",
                forced:true,
                content:function(){
        'step 0'
        player.chooseControl('手牌区','cancel2').set('prompt','绘形：你可以选择获得一个手牌副区').set('ai',function(){
            return '手牌区'
        })
        'step 1'
        if(result.control=='手牌区'){
            if(!player.storage.ark_huixing_h) player.storage.ark_huixing_h=[]
            player.storage.ark_huixing_h.push([])
            player.markSkill('ark_huixing_h3')
        }
    },
                ai:{
                    reverseEquip:true,
                    effect:{
                        target:function (card,player,target,current){
                if(get.type(card)=='equip'&&player==target&&player==_status.currentPhase) return [1,3];
            },
                    },
                },
                subSkill:{
                    "h1":{
                        trigger:{
                            player:"chooseToRespondBegin",
                        },
                        filter:function(event,player){
                if(event.responded) return false;
                var extrah=player.storage.ark_huixing_h
                if(!extrah||!extrah.length>0) return false;
                for(var i=0;i<extrah.length;i++){
                    for(var k=0;k<extrah[i].length;k++){
                        if(event.filterCard(extrah[i][k],player,event)&&
                           lib.filter.cardRespondable(extrah[i][k],player,event)) return true;
                    }
                }
                return false;
            },
                        direct:true,
                        content:function(){
                'step 0'
                var dialog=[]
                var extrah=player.storage.ark_huixing_h
                for(var i=0;i<extrah.length;i++){
                    if(i==1){
                        dialog.push('手牌副区二')
                    }
                    else dialog.push('手牌副区'+get.cnNumber(i+1))
                    dialog.push(extrah[i])
                }
                player.chooseButton(dialog).set('filterButton',function(button){
                var evt=_status.event.getTrigger();
                if(evt&&evt.filterCard){
                    return evt.filterCard(button.link,_status.event.player,evt)&&
                        lib.filter.cardRespondable(button.link,_status.event.player,evt);
                }
                return true;
                }).set('ai',function(button){
                    var evt=_status.event.getTrigger();
                    if(evt&&evt.ai){
                        var tmp=_status.event;
                        _status.event=evt;
                        var result=evt.ai(button.link,_status.event.player,evt);
                        _status.event=tmp;
                        return result;
                    }
                    return 1;
                });
                'step 1'
                if(result.bool){
                    player.logSkill('ark_huixing')
                    trigger.untrigger();
                    trigger.responded=true;
                    trigger.result={bool:true,card:result.links[0],cards:result.links.slice(0)};
                    var extrah=player.storage.ark_huixing_h
                    for(var i=0;i<extrah.length;i++){
                        for(var k=0;k<extrah[i].length;k++){
                            if(extrah[i][k]==result.links[0]){
                                extrah[i].remove(result.links[0])
                            }
                        }
                    }
                    player.updateMarks();
                }
            },
                        ai:{
                            order:4,
                            useful:-1,
                            value:-1,
                        },
                        sub:true,
                    },
                    "h2":{
                        enable:"chooseToUse",
                        filter:function(event,player){
                var extrah=player.storage.ark_huixing_h;
                if(!extrah||!extrah.length>0) return false;
                for(var i=0;i<extrah.length;i++){
                    for(var k=0;k<extrah[i].length;k++){
                        if(event.filterCard(extrah[i][k],player,event)) return true;
                    }
                }
                return false;
            },
                        popup:false,
                        chooseButton:{
                            dialog:function(event,player){
                    var extrah=player.storage.ark_huixing_h;
                    var cards=[]
                    for(var i of extrah){
                        cards.addArray(i)
                    }
                    return ui.create.dialog('手牌副区',cards,'hidden');
                },
                            filter:function(button,player){
                    var evt=_status.event.getParent();
                    if(evt&&evt.filterCard){
                        return evt.filterCard(button.link,player,evt);
                    }
                    return true;
                },
                            check:function(button){
                    if(_status.event.getParent().type!='phase') return 1;
                    if(button.link.name=='du') return 10;
                    var player=_status.event.player;
                    if(player.getUseValue(button.link)>0) return get.order(button.link);
                    return -1;
                },
                            backup:function(links,player){
                    return {
                        filterCard:function(){return false},
                        selectCard:-1,
                        viewAs:links[0],
                        onuse:function(result,player){
                            var extrah=player.storage.ark_huixing_h;
                            for(var i=0;i<extrah.length;i++){
                                for(var k=0;k<extrah[i].length;k++){
                                    if(extrah[i][k]==result.card){
                                        extrah[i].remove(result.card)
                                    }
                                }
                            }
                            player.updateMarks();
                            player.logSkill('ark_huixing')
                        }
                    }
                },
                            prompt:function(links){
                    return '选择'+get.translation(links)+'的目标';
                },
                        },
                        ai:{
                            order:function(item,player){
                    var event=_status.event;
                    if(event.type!='phase') return 4;
                    if(!player) return -1;
                    var extrah=player.storage.ark_huixing_h;
                    var cards=[]
                    for(var i of extrah){
                        cards.addArray(i)
                    }
                    if(!cards||!cards.length>0) return -1;
                    var order=0;
                    for(var i=0;i<cards.length;i++){
                        if(player.getUseValue(cards[i])>0){
                            var order2=get.order(cards[i]);
                            if(order2>order) order=order2
                        }
                    }
                    return order+0.1;
                },
                            result:{
                                player:function(player){
                        if(_status.event.dying) return get.attitude(player,_status.event.dying);
                        return 1;
                    },
                            },
                            useful:-1,
                            value:-1,
                        },
                        sub:true,
                    },
                    "h3":{
                        mark:true,
                        marktext:"手",
                        intro:{
                            content:function(storage,player){
                    var extrah=player.storage.ark_huixing_h;
                    var cards=[]
                    for(var i of extrah){
                        cards.addArray(i)
                    }
                    if(!cards||!cards.length>0) return '共有〇张牌';
                    if(player.isUnderControl(true)){
                        var str=[]
                        for(var i=0;i<extrah.length;i++){
                            if(i==1){
                                str.push('手牌副区二')
                            }
                            else str.push('手牌副区'+get.cnNumber(i+1))
                            if(cards[i].length>0) str.push(get.translation(cards[i]))
                            else str.push('无牌')
                        }
                        return str;
                    }
                    else{
                        return '共有'+get.cnNumber(cards.length)+'张牌';
                    }
                },
                            mark:function(dialog,storage,player){
                    var extrah=player.storage.ark_huixing_h;
                    var cards=[]
                    for(var i of extrah){
                        cards.addArray(i)
                    }
                    if(!cards||!cards.length>0) return '共有〇张牌';
                    if(player.isUnderControl(true)){
                        var str=[]
                        for(var i=0;i<extrah.length;i++){
                            if(i==1){
                                dialog.add('手牌副区二')
                            }
                            else dialog.add('手牌副区'+get.cnNumber(i+1))
                            if(extrah[i].length>0) dialog.addAuto(extrah[i])
                            else dialog.add('无牌')
                        }
                    }
                    else{
                        return '共有'+get.cnNumber(cards.length)+'张牌';
                    }
                },
                            markcount:function(storage,player){
                    var extrah=player.storage.ark_huixing_h;
                    var cards=[]
                    for(var i of extrah){
                        cards.addArray(i)
                    }
                    if(cards) return cards.length;
                    return 0;
                },
                        },
                        sub:true,
                    },
                    "h4":{
                        filter:function(){return false},
                        hiddenCard:function(player,name){
                var extrah=player.storage.ark_huixing_h;
                if(!extrah||!extrah.length>0) return false;
                var cards=[]
                for(var i of extrah){
                    cards.addArray(i)
                }
                if(!cards||!cards.length>0) return false
                for(var i=0;i<cards.length;i++){
                    if(cards[i].name==name) return true;
                }
                return false;
            },
                        sub:true,
                    },
                    "h5":{
                        trigger:{
                            player:"gainAfter",
                        },
                        filter:function(event,player){
                return event.getParent().name=='draw'&&player.storage.ark_huixing_h&&player.storage.ark_huixing_h.length>0;
            },
                        forced:true,
                        popup:false,
                        content:function(){
                if(trigger.cards){
                    var extrah=player.storage.ark_huixing_h;
                    if(extrah&&extrah.length>0){
                        for(var i of extrah){
                            var length=trigger.cards.length
                            var cards=get.cards(length)
                            player.$draw(cards)
                            i.addArray(cards)
                        }
                        player.markSkill('ark_huixing_h3')
                    }
                }
                player.logSkill('ark_huixing')
                event.trigger('arkGain')
            },
                        sub:true,
                    },
                    "h6":{
                        trigger:{
                            player:"loseAfter",
                        },
                        filter:function(event,player){
                if(!player.storage.ark_huixing_h) return false
                if(player.storage.ark_huixing_h.length==0) return false;
                var evt=event.getl(player);
                return event.getParent().name=='discard'&&evt.hs.length>0;
            },
                        forced:true,
                        popup:false,
                        content:function(){
                'step 0'
                if(trigger.cards){
                    var extrah=player.storage.ark_huixing_h;
                    if(extrah&&extrah.length>0){
                        event.count=0
                    }
                    else event.finish()
                }
                else event.finish()
                'step 1'
                var extrah=player.storage.ark_huixing_h[event.count];
                if(!extrah||extrah.length==0) event.goto(4)
                var tri=trigger.getl(player);
                var length=tri.hs.length;
                var dialog=[]
                if(event.count==1){
                    dialog.push('手牌副区二')
                }
                else dialog.push('手牌副区'+get.cnNumber(event.count+1))
                dialog.push(extrah)
                if(length>extrah.length) length=extrah.length
                if(length>0){
                    player.chooseButton(dialog,length,'请选择弃置'+length+'张牌',true)
                }
                else event.goto(4)
                'step 2'
                var extrah=player.storage.ark_huixing_h[event.count];
                if(result.links){
                    game.cardsDiscard(result.links)
                    player.$throw(result.links)
                    extrah.removeArray(result.links)
                }
                player.markSkill('ark_huixing_h3')
                'step 3'
                
                'step 4'
                event.count++
                'step 5'
                if(event.count<player.storage.ark_huixing_h.length) event.goto(1)
            },
                        sub:true,
                    },
                    wash:{
                        trigger:{
                            global:["gainAfter","loseAfter","cardsDiscardAfter","addCardToStorage","arkGain"],
                        },
                        filter:function(event,player){
                if(!player.storage.ark_huixing_s) player.storage.ark_huixing_s=0
                if(game.shuffleNumber>player.storage.ark_huixing_s) return true
                return false
            },
                        silent:true,
                        content:function(){
                player.storage.ark_huixing_s=game.shuffleNumber
                event.trigger('arkWashCard')
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                    dis:{
                        trigger:{
                            player:"phaseDiscardEnd",
                        },
                        filter:function(event,player){
                if(!player.storage.ark_huixing_h) return false
                if(player.storage.ark_huixing_h.length==0) return false;
                return true
            },
                        forced:true,
                        content:function(){
                'step 0'
                var extrah=player.storage.ark_huixing_h;
                if(extrah&&extrah.length>0){
                    event.count=0
                }
                else event.finish()
                'step 1'
                var extrah=player.storage.ark_huixing_h[event.count];
                if(!extrah||extrah.length==0) event.goto(4)
                var length=extrah.length-player.getHandcardLimit();
                var dialog=[]
                if(event.count==1){
                    dialog.push('手牌副区二')
                }
                else dialog.push('手牌副区'+get.cnNumber(event.count+1))
                dialog.push(extrah)
                if(length>extrah.length) length=extrah.length
                if(length>0){
                    player.chooseButton(dialog,length,'请选择弃置'+length+'张牌',true)
                }
                else event.goto(4)
                'step 2'
                var extrah=player.storage.ark_huixing_h[event.count];
                if(result.links){
                    game.cardsDiscard(result.links)
                    player.$throw(result.links)
                    extrah.removeArray(result.links)
                }
                player.markSkill('ark_huixing_h3')
                'step 3'
                
                'step 4'
                event.count++
                'step 5'
                if(event.count<player.storage.ark_huixing_h.length) event.goto(1)
            },
                        sub:true,
                    },
                },
            },
            "ark_huiming":{
                usable:1,
                audio:"ext:无名方舟:2",
                enable:"phaseUse",
                content:function(){
        'step 0'
        var num=3
        num+=player.storage.ark_huixing_h.length
        event.cards=get.cards(num)
        player.showCards(event.cards)
        'step 1'
        player.chooseControl('摸红弃黑','弃红摸黑').set('ai',function(){
            var num1=event.cards.filter(card=>get.color(card)=='red').length
            var num2=event.cards.filter(card=>get.color(card)=='black').length
            if(num1>=num2) return '摸红弃黑'
            else return '弃红摸黑'
        }).set('prompt','晦明：摸红弃黑：摸'+event.cards.filter(card=>get.color(card)=='red').length+'张并弃'+event.cards.filter(card=>get.color(card)=='black').length+'张；弃红摸黑：弃'+event.cards.filter(card=>get.color(card)=='red').length+'张并摸'+event.cards.filter(card=>get.color(card)=='black').length+'张')
        'step 2'
        var num1=event.cards.filter(card=>get.color(card)=='red').length
        var num2=event.cards.filter(card=>get.color(card)=='black').length
        if(result.control=='摸红弃黑'){
            player.draw(num1)
            if(num2&&num2>0) player.chooseToDiscard(num2,'he',true).set('ai',function(card){
                return -get.value(card)
            })
        }
        if(result.control=='弃红摸黑'){
            if(num1&&num1>0) player.chooseToDiscard(num1,'he',true).set('ai',function(card){
                return -get.value(card)
            })
            player.draw(num2)
        }
    },
                ai:{
                    order:3,
                    result:{
                        player:3,
                    },
                },
            },
            "ark_shanjiao":{
                group:["ark_shanjiao_damage","ark_shanjiao_source"],
                audio:"ext:无名方舟:1",
                subSkill:{
                    source:{
                        trigger:{
                            source:"damageSource",
                        },
                        filter:function(){
                return true;
            },
                        usable:1,
                        forced:true,
                        popup:false,
                        content:function(){
                'step 0'
                if(player.countCards('he')>0&&trigger.player&&trigger.player.isAlive()){
                    player.chooseCard(1,'he',true).set('ai',function(card){
                        return -get.value(card)
                    }).set('prompt','善交：请选择交给'+get.translation(trigger.player)+'一张牌')
                }
                'step 1'
                if(result.cards){
                    var card=result.cards[0]
                    player.give(card,trigger.player,false)
                    player.logSkill('ark_shanjiao',trigger.player)
                }
            },
                        sub:true,
                    },
                    damage:{
                        trigger:{
                            player:"damageEnd",
                        },
                        filter:function(){
                return true;
            },
                        forced:true,
                        popup:false,
                        content:function(){
                'step 0'
                if(trigger.source&&trigger.source.countCards('he')>0&&player.isAlive()){
                    trigger.source.chooseCard(1,'he',true).set('ai',function(card){
                        return -get.value(card)
                    }).set('prompt','善交：请选择交给'+get.translation(player)+'一张牌')
                }
                'step 1'
                if(result.cards){
                    var card=result.cards[0]
                    trigger.source.give(card,player,false)
                    player.logSkill('ark_shanjiao',trigger.source)
                }
            },
                        sub:true,
                    },
                },
            },
            "ark_xushi":{
                trigger:{
                    player:"gainAfter",
                },
                filter:function(event,player){
        if(player.isPhaseDrawing()) return false;
        return event.getParent(2).name!='ark_xushi';
    },
                audio:"ext:无名方舟:1",
                forced:true,
                content:function(){
        'step 0'
        player.draw()
        'step 1'
        player.showHandcards()
        'step 2'
        var cards=player.getCards('h');
        var color=get.color(cards[0],player);
        var bool=true
        for(var i=1;i<cards.length;i++){
            if(get.color(cards[i],player)!=color){
                bool=false
                break;
            }
        }
        if(bool){
            player.chooseTarget('虚饰：令自己回复一点体力或令一名其他角色失去一点体力',true).set('ai',function(target){
                var player=_status.event.player
                var att=get.attitude(player,target)
                if(player==target){
                    if(player.hp==player.maxHp) return -1
                    if(player.hp==1) return 20
                    else return 7*(player.maxHp-player.hp)
                }
                else{
                    if(att>0) return -2;
                    else if(target.hp==1) return 15
                    else return -att
                }
            })
        }
        else{
            player.chooseToDiscard(true,'he')
            event.finish()
        }
        'step 3'
        if(result.targets){
            var target=result.targets[0]
            if(target==player) player.recover()
            else{
                player.line(target)
                target.loseHp()
            }
        }
    },
            },
            "ark_zhenli":{
                trigger:{
                    player:"useCard2",
                    target:"useCardToTarget",
                },
                mark:true,
                marktext:"理",
                intro:{
                    content:function(storage,player,skill){
            var storage=player.storage.ark_zhenli
            var str='【真理】中点数：'
            if(storage) str+=get.strNumber(storage)
            else str+='A'
            return str;
        },
                },
                direct:true,
                content:function(){
        'step 0'
        if(!player.storage.ark_zhenli) player.storage.ark_zhenli=1
        if(!player.storage.ark_xushi) player.storage.ark_xushi=13
        var str=get.prompt2('ark_zhenli')
        if(event.triggername=='useCard2'){
            str='是否发动【真理】：弃置任意张加减结果等于'+player.storage.ark_zhenli+'的牌，令'+get.translation(trigger.card)+'不可被响应';
        }
        if(event.triggername=='useCardToTarget'){
            str='是否发动【真理】：弃置任意张加减结果等于'+player.storage.ark_zhenli+'的牌，令'+get.translation(trigger.card)+'对你无效';
            
        }
        var next=player.chooseToMove(str);
        next.set('chooseTime',(player.countCards('h')*4).toString());
        next.set('list',[
            ['手牌',player.getCards('h'),function(list){
                var num=0;
                for(var i of list) num+=i.number;
                return '弃后手牌';
            }],
            ['加牌',[],function(list){
                var num=0;
                for(var i of list) num+=i.number;
                return '加牌（点数和'+num+'）';
            }],
            ['减牌',[],function(list){
                var num=0;
                for(var i of list) num+=i.number;
                return '减牌（点数和'+num+'）';
            }],
        ]);
        next.set('filterOk',function(moved){
            var num1=0;
            for(var i of moved[1]) num1+=i.number;
            var num2=0;
            for(var i of moved[2]) num2+=i.number;
            return Math.max(num1,num2)-Math.min(num1,num2)==player.storage.ark_zhenli;
        })
        next.set('processAI',()=>false);
        'step 1'
        if(result.bool){
            var moved=result.moved;
            var cards=[]
            cards.addArray(moved[1])
            cards.addArray(moved[2])
            player.discard(cards)
            player.logSkill('ark_zhenli')
            if(event.triggername=='useCard2'){
                trigger.directHit.addArray(game.players);
            }
            if(event.triggername=='useCardToTarget'){
                trigger.targets.remove(player)
            }
            var choose1='【真理】改为'+get.strNumber(player.hp)
            var choose2='【真理】改为'+get.strNumber(player.storage.ark_xushi)+'【虚实】改为'+get.strNumber(player.storage.ark_zhenli)
            var list=[choose1,choose2]
            player.chooseControlList(list).set('prompt','你可以调整【真理】与【虚实】中的点数值')
        }
        else event.finish()
        'step 2'
        if(result.index==0){
            player.storage.ark_zhenli=player.hp
            game.log(player,'将【真理】中数值改为',player.hp)
            player.markSkill('ark_zhenli')
        }
        else if(result.index==1){
            var zhenli=player.storage.ark_zhenli
            var xushi=player.storage.ark_xushi
            player.storage.ark_zhenli=xushi
            player.storage.ark_xushi=zhenli
            game.log(player,'将【真理】中数值改为',xushi)
            game.log(player,'将【虚实】中数值改为',zhenli)
            player.markSkill('ark_zhenli')
        }
    },
            },
            "ark_xushiaak":{
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                filter:function(event,player){
        return game.roundNumber!=game.countPlayer()
    },
                direct:true,
                content:function(){
        'step 0'
        if(window.decadeUI){
            event.goto(1)
        }
        else event.goto(3)
        'step 1'
        var num=Math.max(game.roundNumber,game.countPlayer())-Math.min(game.roundNumber,game.countPlayer())
        var cards = get.cards(num);
        var guanXing = decadeUI.content.chooseGuanXing(player, cards, cards.length, null, cards.length, false);
        guanXing.doubleSwitch = true;
        guanXing.caption = '【虚实】';
        guanXing.header1 = '放回牌堆';
        guanXing.header2 = '获得的牌';
        guanXing.callback = function(){
            var num = 0;
            for (var i = 0; i < this.cards[1].length; i++) {
                num += get.number(this.cards[1][i]);
            }

            return num > 0 && num <= 13;
        };

        game.broadcast(function(player, cards, callback){
            if (!window.decadeUI) return;
            var guanXing = decadeUI.content.chooseGuanXing(player, cards, cards.length, null, cards.length, false);
            guanXing.caption = '【虚实】';
            guanXing.header1 = '放回牌堆';
            guanXing.header2 = '获得的牌';
            guanXing.callback = callback;
        }, player, cards, guanXing.callback);
        var player = event.player;
        event.switchToAuto = function(){};
        if (event.isOnline()) {
            event.player.send(function(){
                if (!window.decadeUI && decadeUI.eventDialog) _status.event.finish();
            }, event.player);

            event.player.wait();
            decadeUI.game.wait();
        } else if (!event.isMine()) {
            event.switchToAuto();
        }
        'step 2'
        if (event.result && event.result.bool) {
            player.gain(event.cards2, 'log', 'gain2');       
            var top=event.cards1;
            top.reverse();
            for(var i=0;i<top.length;i++){
                ui.cardPile.insertBefore(top[i],ui.cardPile.firstChild);
            }
            game.log(player,'将'+get.cnNumber(top.length)+'张牌置于牌堆顶');
            game.updateRoundNumber();
            game.delayx();
        }
        event.finish()
        'step 3'
        var num=Math.max(game.roundNumber,game.countPlayer())-Math.min(game.roundNumber,game.countPlayer())
        var cards = get.cards(num);
        var next=player.chooseToMove(get.prompt('ark_xushi'));
        next.set('chooseTime',(cards.length*4).toString());
        next.set('list',[
            ['放回牌堆',cards,function(list){
                return '放回牌堆';
            }],
            ['获得的牌',[],function(list){
                var num1=0;
                for(var i of list) num1+=i.number;
                return '获得的牌（点数和'+num1+'）';
            }],
        ]);
        next.set('filterOk',function(moved){
            var num1=0;
            for(var i of moved[1]) num1+=i.number;
            return num1<=13;
        })
        next.set('processAI',()=>false);
        'step 4'
        if(result.bool){
            var moved=result.moved;
            player.gain(moved[1], 'log', 'gain2');       
            var top=moved[0];
            top.reverse();
            for(var i=0;i<top.length;i++){
                ui.cardPile.insertBefore(top[i],ui.cardPile.firstChild);
            }
            game.log(player,'将'+get.cnNumber(top.length)+'张牌置于牌堆顶');
            game.updateRoundNumber();
            game.delayx();
        }
        else event.finish()
    },
            },
            "ark_keyu":{
                audio:"ext:无名方舟:2",
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                direct:true,
                filter:function(event,player){
        return player.countCards('he')>0&&player.hp<player.maxHp
    },
                content:function(){
        'step 0'
        player.chooseToDiscard('he',[1,player.maxHp-player.hp],get.prompt2('ark_keyu')).set('ai',function(card){
            var player=_status.event.player
            if(player.hp==player.maxHp) return false;
            if(player.countCards('h')>10) return false;
            return 6-get.value(card)
        })
        'step 1'
        if(result.cards&&result.cards.length>0){
            player.logSkill('ark_keyu')
            player.recover()
            player.storage.ark_keyu=result.cards.length
            player.skip('phaseUse')
            player.skip('phaseDiscard')
            player.addTempSkill('ark_keyu_draw')
        }
    },
                subSkill:{
                    draw:{
                        trigger:{
                            player:"phaseJieshuEnd",
                        },
                        forced:true,
                        popup:false,
                        content:function(){
                var storage=player.storage.ark_keyu
                if(storage&&storage>0){
                    player.logSkill('ark_keyu')
                    player.draw(storage*2)
                }
            },
                        sub:true,
                    },
                },
            },
            "ark_jianjia":{
                audio:"ext:无名方舟:2",
                usable:1,
                trigger:{
                    player:"damageBegin3",
                },
                filter:function(event,player){
        return !event.nature&&event.num>0&&player.countCards('h')>0
    },
                direct:true,
                content:function(){
        'step 0'
        player.chooseToDiscard('h',[1,trigger.num],get.prompt2('ark_jianjia')).set('ai',function(card){
            return 10-get.value(card)
        })
        'step 1'
        if(result.cards&&result.cards.length>0){
            player.logSkill('ark_jianjia')
            trigger.num-=result.cards.length
        }
    },
            },
            "ark_kuishi":{
                audio:"ext:无名方舟:2",
                trigger:{
                    global:"damageBegin1",
                },
                filter:function(event,player){
        return player.countCards('he',function(card){
            return get.type(card)!='basic'
        })>0&&event.player.hp<=Math.ceil(event.player.maxHp/2)&&event.source
    },
                direct:true,
                content:function(){
        'step 0'
        player.chooseToDiscard(1,'he',get.prompt2('ark_kuishi'),function(card){
            return get.type(card)!='basic'
        }).set('ai',function(card){
            var target=_status.event.target
            var player=_status.event.player
            var att=get.attitude(player,target)
            if(att>0) return false
            else return 10-get.value(card)
        }).set('target',trigger.player)
        'step 1'
        if(result.cards){
            player.logSkill('ark_kuishi',trigger.player)
            trigger.num++
        }
    },
            },
            "ark_zhoushi":{
                group:["ark_zhoushi_target"],
                trigger:{
                    player:"phaseJieshuBegin",
                },
                audio:"ext:无名方舟:2",
                direct:true,
                content:function(){
        'step 0'
        player.chooseTarget(1,get.prompt2('ark_zhoushi'),function(card,player,target){
            if(player==target) return false
            return !target.hasMark('ark_zhoushi')
        }).set('ai',function(target){
            var player=_status.event.player
            return -get.attitude(player,target)
        })
        'step 1'
        if(result.targets){
            var target=result.targets[0]
            player.logSkill('ark_zhoushi',target)
            player.line(target)
            target.addMark('ark_zhoushi',1)
            target.markSkill('ark_zhoushi')
        }
    },
                subSkill:{
                    target:{
                        trigger:{
                            global:"phaseUseBegin",
                        },
                        filter:function(event,player){
                return event.player.hasMark('ark_zhoushi')
            },
                        forced:true,
                        content:function(){
                var target=trigger.player
                var card=target.countCards('h')
                var hp=target.hp
                if(card>hp){
                    player.line(target)
                    target.chooseToDiscard(card-hp,true,'咒蚀：请弃置'+(card-hp)+'张牌')
                }
                else{
                    player.line(target)
                    target.damage()
                }
                target.removeMark('ark_zhoushi',1)
            },
                        sub:true,
                    },
                },
                intro:{
                    content:"诅咒",
                },
            },
            "ark_shiyi":{
                audio:"ext:无名方舟:2",
                group:["ark_shiyi_maxhp","ark_shiyi_die"],
                global:["ark_shiyi_eff"],
                trigger:{
                    player:"phaseUseBegin",
                },
                forced:true,
                content:function(){
        'step 0'
        var hp=player.hp
        if(hp<3) hp=3
        var mp=player.maxHp
        if(mp>3&&mp>hp){
            player.loseMaxHp(mp-hp)
        }
        'step 1'
        if(player.countCards('h')){
            var next=player.chooseCardTarget({
                position:'h',
                selectCard:function(){
                    var player=_status.event.player;
                    return [Math.max(1,ui.selected.targets.length),Infinity];
                },
                filterCard:true,
                selectTarget:function(){
                    return ui.selected.cards.length;
                },
                filterTarget:function(card,player,target){
                    if(target==player) return false;
                    return true;
                },
                ai1:function(card){
                    return get.unuseful(card)+6;
                },
                ai2:function(target){
                    var player=_status.event.player
                    if(target.storage.ark_shiyi&&target.storage.ark_shiyi.length>0) return -1
                    return true;
                },
                prompt:get.prompt('ark_shiyi'),
                prompt2:'将任意张手牌随机置于等量其他角色武将牌上各一张，称为“逸”',
                multitarget:true,
                multiline:true,
            })
        }
        'step 2'
        if(result.bool){
            var targets=result.targets;
            var cards=result.cards
            for(var i=0;i<result.targets.length;i++){
                if(!targets[i].storage.ark_shiyi) targets[i].storage.ark_shiyi=[]
                targets[i].storage.ark_shiyi.push(cards[i])
                targets[i].markSkill('ark_shiyi')
                player.lose(cards[i],ui.special,'toStorage')
                player.$give(cards[i],targets[i])
            }
        }
    },
                marktext:"意",
                intro:{
                    content:"cards",
                },
                subSkill:{
                    maxhp:{
                        trigger:{
                            player:["loseMaxHpEnd"],
                        },
                        frequent:true,
                        content:function(){
                player.draw(trigger.num);
            },
                        sub:true,
                    },
                    eff:{
                        mod:{
                            attackFrom:function(from,to,distance,player){
                    if(from.storage.ark_shiyi&&from.storage.ark_shiyi.length>0) return distance-2
                },
                        },
                        trigger:{
                            source:"damageSource",
                        },
                        filter:function(event,player){
                return player.storage.ark_shiyi&&player.storage.ark_shiyi.length>0
            },
                        forced:true,
                        popup:false,
                        content:function(){
                'step 0'
                var target=game.filterPlayer(function(current){
                    return current.hasSkill('ark_shiyi')
                })[0]
                event.targetx=target
                target.logSkill('ark_shiyi',player)
                player.chooseCard('交给'+get.translation(target)+'一张手牌或令其增加一点体力上限','h').set('ai',function(card){
                    var target=_status.event.target
                    var player=_status.event.player
                    if(get.attitude(player,target)>0) return -1
                    return 5.5-get.value(card)
                }).set('target',target)
                'step 1'
                var target=event.targetx
                if(result.cards){
                    var cards=result.cards
                    player.give(cards,target,false)
                }
                else{
                    target.gainMaxHp()
                }
                'step 2'               
                var dialog=['诗意',player.storage.ark_shiyi]
                player.chooseButton(dialog,'请选择获得一张“逸”',true)
                'step 3'
                if(result.links){
                    player.$give(result.links,player)
                    player.gain(result.links,'fromStorage')
                    player.storage.ark_shiyi.removeArray(result.links)
                    if(!player.storage.ark_shiyi||player.storage.ark_shiyi.length<1) player.unmarkSkill('ark_shiyi')
                }
            },
                        sub:true,
                    },
                    die:{
                        trigger:{
                            player:"die",
                        },
                        forced:true,
                        forceDie:true,
                        content:function(){
                var sources=game.filterPlayer(function(current){
                    return current.storage.ark_shiyi&&current.storage.ark_shiyi.length>0
                })
                for(var source of sources){
                    var cards=source.storage.ark_shiyi
                    game.cardsDiscard(cards)
                    source.storage.ark_shiyi=[]
                    source.unmarkSkill('ark_shiyi')
                }
            },
                        sub:true,
                    },
                },
            },
            "ark_huihao":{
                audio:"ext:无名方舟:2",
                usable:1,
                enable:"phaseUse",
                selectCard:1,
                selectTarget:1,
                filterTarget:function(card,player,target){
        return target!=player
    },
                position:"he",
                filterCard:function(card){
        return get.type(card)!='basic'
    },
                filter:function(event,player){
        return game.hasPlayer(function(current){
            return current.storage.ark_shiyi&&current.storage.ark_shiyi.length>0
        })&&player.countCards('he',function(card){
            return get.type(card)!='basic'
        })
    },
                content:function(){
        'step 0'
        event.targetx=game.filterPlayer(function(current){
            return current.storage.ark_shiyi&&current.storage.ark_shiyi.length>0&&current!=target
        })
        if(!event.targetx.length){
            event.finish();
            return;
        }
        game.asyncDraw(event.targetx,1)
        for(var targetx of event.targetx){
            player.line(targetx)
        }
        event.count=0
        game.delay(0.5)
        'step 1'
        for(var targetx of event.targetx){
            targetx.line(target)
        }
        'step 2'
        var targetx=event.targetx[event.count]
        targetx.chooseToUse('挥毫：对'+get.translation(target)+'使用一张杀，或令其弃增加一点体力上限',function(card,player,event){
            if(get.name(card)!='sha') return false;
            return lib.filter.filterCard.apply(this,arguments);
        }).set('filterTarget',function(card,player,target){
            if(target!=_status.event.sourcex&&!ui.selected.targets.contains(_status.event.sourcex)) return false;
            return lib.filter.filterTarget.apply(this,arguments);
        }).set('sourcex',target).set('targetRequired',true).set('complexSelect',true);
        'step 3'
        if(result.bool===false){
            player.gainMaxHp()
        }
        event.count++
        'step 4'
        if(event.count<event.targetx.length) event.goto(2);
    },
                ai:{
                    order:7,
                    result:{
                        target:-3,
                        player:8,
                    },
                },
            },
            "ark_jinjiu":{
                audio:"ext:无名方舟:2",
                skillAnimation:true,
                animationColor:"thunder",
                limited:true,
                unique:true,
                trigger:{
                    global:"phaseZhunbeiBegin",
                },
                filter:function(event,player){
        return !player.storage.jinjiu&&event.player.storage.ark_shiyi&&event.player.storage.ark_shiyi.length>0
            &&game.hasPlayer(function(current){
            return current.storage.ark_shiyi&&current.storage.ark_shiyi.length>0
        });
    },
                check:function(event,player){
        var player=_status.event.player
        if(game.roundNumber<2) return false
        if(get.attitude(player,event.player)>0) return true
        return false
    },
                content:function(){
        var target=trigger.player
        var sources=game.filterPlayer(function(current){
            return current!=target&&current.storage.ark_shiyi&&current.storage.ark_shiyi.length>0
        })
        var num=0
        for(var source of sources){
            var cards=source.storage.ark_shiyi
            num+=cards.length
            source.$give(cards,target)
            target.storage.ark_shiyi.addArray(cards)
            source.storage.ark_shiyi=[]
            source.unmarkSkill('ark_shiyi')
        }
        target.markSkill('ark_shiyi')
        target.draw(num)
        target.addTempSkill('ark_jinjiu_1')
        player.storage.ark_jinjiu_target=target
        player.addTempSkill('ark_jinjiu_2')
        player.awakenSkill(event.name);
        player.storage[event.name]=true;
    },
                ai:{
                    threaten:function(player,target){
            return 1.2
        },
                },
                mark:true,
                intro:{
                    content:"limited",
                },
                subSkill:{
                    "1":{
                        mod:{
                            cardUsable:function(card,player,num){
                    return num+Infinity;
                },
                            targetInRange:function(card,player,target,now){
                    return true;
                },
                        },
                        sub:true,
                    },
                    "2":{
                        trigger:{
                            global:"phaseEnd",
                        },
                        filter:function(event,player){
                return event.player==player.storage.ark_jinjiu_target&&event.player.getStat('damage')>0
            },
                        popup:false,
                        forced:true,
                        content:function(){
                player.logSkill('ark_jinjiu')
                var num=trigger.player.getStat('damage')
                if(num) player.gainMaxHp(num)
            },
                        sub:true,
                    },
                },
                init:function(player,skill){
        player.storage[skill]=false;
    },
            },
            "ark_jianyou":{
                group:"ark_jianyou_draw",
                trigger:{
                    player:"phaseJieshu",
                },
                audio:"ext:无名方舟:2",
                content:function(){
        'step 0'
        var num=0,hp=player.hp,equip=player.countCards('e'),card=player.countCards('h')
        if(hp==equip) num++
        if(hp==card) num++
        if(card==equip) num++
        if(num==0){
            if(!player.storage.ark_jianyou_draw) player.storage.ark_jianyou_draw=0
            player.storage.ark_jianyou_draw++
        }
        if(num>=1){
            event.equip=true
        }
        if(num==3){
            event.drawrecover=true
        }
        'step 1'
        if(event.equip==true){
            player.chooseTarget('兼优：你可以选择令一名角色从牌堆中随机使用一张装备牌').set('ai',function(target){
                var player=_status.event.player
                if(player.countCards('e')>=3){
                    if(target==player) return false
                }
                if(player.countCards('e')<player.hp){
                    if(target==player) return 15
                }
                else if(target==player) return 5
                return get.attitude(player,target)
            })
        }
        'step 2'
        if(result.targets){
            var card=get.cardPile(function(card){
                return get.type(card)=='equip';
            })
            result.targets[0].useCard(card,result.targets[0])
        }
        'step 3'
        if(event.drawrecover==true){
            if(player.hp<player.maxHp){
                player.chooseControl('恢复体力','摸两张牌',true).set('ai',function(){
                    var player=_status.event.player
                    if(player.hp<3) return '恢复体力'
                    else return '摸两张牌'
                        }).set('prompt','兼优：你可以选择回复一点体力或摸两张牌')
            }
            else player.draw(2)
        }
        'step 4'
        if(result.control=='恢复体力') player.recover()
        if(result.control=='摸两张牌') player.draw(2)
    },
                subSkill:{
                    draw:{
                        trigger:{
                            player:"phaseDrawBegin2",
                        },
                        forced:true,
                        popup:false,
                        filter:function(event,player){
                return !event.numFixed;
            },
                        content:function(){
                if(!player.storage.ark_jianyou_draw) player.storage.ark_jianyou_draw=0;
                trigger.num+=player.storage.ark_jianyou_draw;
                if(player.storage.ark_jianyou_draw>0) player.logSkill('ark_jianyou')
                player.storage.ark_jianyou_draw=0;
            },
                        sub:true,
                    },
                },
            },
            "ark_poxian":{
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                audio:"ext:无名方舟:1",
                filter:function(event,player){
        var storage=player.storage.ark_poxian_extarget
        return game.hasPlayer(function(current){
            return current.inRange(player)||(storage&&storage.contains(current))
        })
    },
                direct:true,
                content:function(){
        'step 0'
        event.targets=[]
        player.chooseTarget(1,get.prompt2('ark_poxian'),function(card,player,target){
            return target.inRange(player)&&player.canUse({name:'sha'},target)
        }).set('ai',function(target){
            var player=_status.event.player
            if(player.storage.ark_poxian_extarget.contains(target)) return -1
            return get.effect(target,{name:'sha'},player,player)
        })
        'step 1'
        if(result.targets){
            event.targets.addArray(result.targets)
            event.chosen=result.targets
        }
        'step 2'
        if(player.storage.ark_poxian_extarget&&player.storage.ark_poxian_extarget.length>0){
            player.chooseTarget([1,Infinity],'破限：你可以选择【破限】的额外目标',function(card,player,target){
                var chosen=_status.event.chosen
                if(chosen){
                    if(chosen.contains(target)) return false
                }
                return player.storage.ark_poxian_extarget&&player.storage.ark_poxian_extarget.contains(target)
            }).set('ai',function(target){
                var player=_status.event.player
                return get.effect(target,{name:'sha'},player,player)
            }).set('chosen',event.chosen)
        }
        else event.goto(4)
        'step 3'
        if(result.targets){
            event.targets.addArray(result.targets)
        }
        'step 4'
        if(event.targets){
            player.storage.ark_poxian_extarget=[]
            player.logSkill('ark_poxian',event.targets)
            player.useCard({name:'sha'},event.targets,false)
            player.markSkill('ark_minjue')
        }
    },
            },
            "ark_minjue":{
                mark:true,
                intro:{
                    content:function(storage,player,skill){
            var storage=player.storage.ark_poxian_extarget
            var str='【破限】可选额外目标：'
            if(storage) str+=get.translation(storage)
            else str+='无'
            return str;
        },
                },
                audio:"ext:无名方舟:1",
                trigger:{
                    global:"phaseUseBegin",
                },
                filter:function(event,player){
        return event.player!=player
    },
                check:function(event,player){
        var player=_status.event.player
        var att=get.attitude(player,event.player)
        if(att>0) return false
        return true
    },
                content:function(){
       'step 0'
       player.chooseControl('basic','trick','equip').set('ai',function(){
           return ['basic','trick'].randomGet()
       })
       'step 1'
       if(result.control){
           player.addTempSkill('ark_minjue_1')
           player.storage.ark_minjue_card=result.control
           player.storage.ark_minjue_player=trigger.player
       }
    },
                subSkill:{
                    "1":{
                        trigger:{
                            global:"useCard",
                        },
                        filter:function(event,player){
                return event.player==player.storage.ark_minjue_player&&event.card
            },
                        silent:true,
                        content:function(){
                if(!player.storage.ark_poxian_extarget) player.storage.ark_poxian_extarget=[]
                if(get.type(trigger.card,'trick')==player.storage.ark_minjue_card){
                    player.storage.ark_poxian_extarget.push(trigger.player)
                    player.line(trigger.player)
                    player.logSkill('ark_minjue',trigger.player)
                }
                player.markSkill('ark_minjue')
                player.removeSkill('ark_minjue_1')
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                },
            },
            "ark_zhenmi":{
                trigger:{
                    global:"phaseUseBegin",
                },
                audio:"ext:无名方舟:2",
                filter:function(event,player){
        return event.player!=player&&event.player.getGainableCards(player,'he').length>0
    },
                direct:true,
                content:function(){
        'step 0'
        player.gainPlayerCard(get.prompt2('ark_zhenmi'),trigger.player,'he',1).set('logSkill',['ark_zhenmi',trigger.player])
        'step 1'
        if(result.bool&&player.getGainableCards(trigger.player,'he').length>0){
            player.chooseCard('缜密：交给'+get.translation(trigger.player)+'一张牌','he',1,true).set('ai',function(card){
                var target=_status.event.target
                var player=_status.event.player
                var att=get.attitude(player,target)
                if(att>0){
                    return get.value(card)
                }
                else return -get.value(card)
            }).set('target',trigger.player)
        }
        else event.finish()
        'step 2'
        if(result.cards){
            player.give(result.cards,trigger.player,false);
        }
    },
            },
            "ark_jianqu":{
                trigger:{
                    player:"phaseDrawBefore",
                },
                audio:"ext:无名方舟:2",
                content:function(){
        player.storage.ark_jianqu=[]
        player.addTempSkill('ark_jianqu_1')
        player.addTempSkill('ark_jianqu_2')
        trigger.cancel()
    },
                subSkill:{
                    "1":{
                        trigger:{
                            player:"useCard2",
                        },
                        silent:true,
                        filter:function(event,player){
                return event.card&&!player.storage.ark_jianqu.contains(get.type(event.card))
            },
                        content:function(){
                player.storage.ark_jianqu.push(get.type(trigger.card))
                player.markSkill('ark_jianqu_1')
            },
                        mod:{
                            targetInRange:function(card,player,target,now){
                    return true;
                },
                        },
                        mark:true,
                        intro:{
                            content:function(storage,player,skill){
                    var storage=player.storage.ark_jianqu
                    var str='本回合使用牌的类别数：'
                    if(storage) str+=storage.length
                    else str+='0'
                    return str;
                },
                        },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                    "2":{
                        trigger:{
                            player:"phaseJieshu",
                        },
                        filter:function(event,player){
                return player.storage.ark_jianqu&&player.storage.ark_jianqu.length>0
            },
                        direct:true,
                        content:function(){
                'step 0'
                var storage=player.storage.ark_jianqu
                player.chooseTarget(1).set('ai',function(target){
                    var player=_status.event.player
                    var length=player.storage.ark_jianqu.length+1
                    var value=get.attitude(player,target)
                    if(Math.max(target.countCards('h'),length)>player.countCards('h')&&target!=player) value-=5
                    return value
                }).set('prompt','健驱：你可以令一名角色手牌摸至'+(storage.length+1)+'张，然后若其手牌数不大于你，你摸两张牌')
                'step 1'
                if(result.targets){
                    var length=player.storage.ark_jianqu.length+1
                    event.target=result.targets[0]
                    var target=result.targets[0]
                    player.logSkill('ark_jianqu',target)
                    var cards=target.countCards('h')
                    if(cards<length) target.draw(length-cards)
                    player.storage.ark_jianqu=[]
                    player.markSkill('ark_jianqu_1')
                }
                else{
                    player.storage.ark_jianqu=[]
                    player.markSkill('ark_jianqu_1')
                    event.finish()
                }
                'step 2'
                var target=event.target
                if(target.countCards('h')<=player.countCards('h')) player.draw(2)
            },
                        sub:true,
                    },
                },
            },
        },
        translate:{
            "ark_chongfeng":"冲锋",
            "ark_chongfeng_info":"出牌阶段开始时，你可以摸4-X张牌（X为当前轮数且最多为3）",
            "ark_cuixiu":"摧朽",
            "ark_cuixiu_info":"你使用杀指定目标时可以选择一项：①该角色所有非锁定技失效直到回合结束；②该角色无法响应此牌。",
            "ark_rigui":"日晷",
            "ark_rigui_info":"锁定技，你的攻击范围+1。你受到伤害时，你可以进行判定，若判定牌为黑桃，你防止此伤害（精英化1后“+1”改为“+2”；精英化2后“黑桃”改为“黑色”）",
            "ark_langhun":"狼魂",
            "ark_langhun_info":"每回合限一次，当你使用【杀】时，你可以令此杀增加一个目标且无视防具，（精英化1后可使用；精英化2后添加效果：你每回合出杀次数+1）",
            "ark_jiaoguan":"教官",
            "ark_jiaoguan_info":"出牌阶段开始时，你可以令你攻击范围内任意名体力上限不大于3的角色摸一张牌，其中体力值为1的角色多摸一张牌。",
            "ark_biance":"鞭策",
            "ark_biance_info":"觉醒技，准备阶段，若你的手牌数或体力值不大于1，你减少一点体力上限并摸两张牌，然后修改【教官】的描述。",
            "ark_re_jiaoguan":"教官",
            "ark_re_jiaoguan_info":"你的攻击范围和手牌上限+1，每当你出牌阶段开始或造成伤害后，你可以令你攻击范围内任意名体力值不大于3的角色摸一张牌，其中体力值为1的角色多摸一张牌。",
            "ark_chilian":"弛链",
            "ark_chilian_info":"当你使用基本或普通锦囊牌指定一名其他角色为唯一目标后，你可以选择一名本回合内未选择过的且与该角色相互距离不大于1的一名其他角色并进行一次判定，若结果为黑色，该角色成为此牌的额外目标，然后你可以重复一次此流程",
            "ark_jiexi":"解析",
            "ark_jiexi_info":"当你对一名其他角色造成伤害时，若其满足以下任意一项条件，本次伤害+1：1.未损失体力值；2.手牌数大于体力值",
            "ark_huihuang":"辉煌",
            "ark_huihuang_info":"出牌阶段，你可以弃置任意张黑色牌（至多为你的体力值）并选择场上等量的其他角色，你对这些角色依次造成1点雷属性伤害，其中在你攻击范围内的角色需额外弃置两张牌。",
            "ark_jingyan":"经验",
            "ark_jingyan_info":"结束阶段，你可以摸一张牌。",
            "ark_xianfeng":"先锋",
            "ark_xianfeng_info":"游戏前三轮，你的回合开始时，你可以摸一张牌。",
            "ark_zhuanyi":"转移",
            "ark_zhuanyi_info":"你死亡时，你可以选择至多3名角色各摸一张牌",
            "ark_shanbi":"闪避",
            "ark_shanbi_info":"你受到无属性伤害时，你可以进行一次判定，若判定为黑色，你防止此伤害",
            "ark_jianshe":"溅射",
            "ark_jianshe_info":"每回合限一次，当你对一名其他角色造成伤害时，你可以弃置2张牌，对与其相互距离为1的一名角色造成一点伤害",
            "ark_kongshe":"空射",
            "ark_kongshe_info":"你的攻击范围+2；你对距离大于1的角色造成伤害后可以弃置其一张牌",
            "ark_xingyun":"幸运",
            "ark_xingyun_info":"锁定技，你拥有30%闪避，当你闪避成功后，你摸一张牌。",
            "ark_jianyi":"坚毅",
            "ark_jianyi_info":"当你受到1点伤害时，你可以摸一张牌并获得一个“坚”标记。当你造成伤害时，若你有“坚”标记，你可以弃置一枚“坚”标记，然后令此次伤害+1",
            "ark_juqi":"举旗",
            "ark_juqi_info":"出牌阶段开始前，你可以跳过出牌阶段并选择至多X名其他角色，然后你摸2X张牌，并交给每名你选择的角色至少1张牌（X为你的体力值）",
            "ark_yuejin":"跃金",
            "ark_yuejin_info":"出牌阶段结束时，你可以选择一名距离为1的角色回复一点体力",
            "ark_huoli":"活力",
            "ark_huoli_info":"你的回合结束时，你可以进行一次判定，结果若为红色且你的体力值不为满，你回复一点体力；若你的体力为满或结果为黑色，你摸一张牌",
            "ark_lianju":"链锯",
            "ark_lianju_info":"锁定技，你使用的红桃杀可多指定一个目标且不可被响应",
            "ark_guduan":"骨断",
            "ark_guduan_info":"3轮限一次，出牌阶段结束时，你可以弃置2张牌，然后直到你的下回合开始，你的体力值不会小于1",
            "ark_zaisheng":"再生",
            "ark_zaisheng_info":"锁定技，你的回合结束时，你恢复一点体力",
            "ark_yaoli":"药理",
            "ark_yaoli_info":"出牌阶段限一次，你可以弃置一张【杀】，令一名角色回复一点体力。锁定技，你的攻击范围+2",
            "ark_yingyang":"营养",
            "ark_yingyang_info":"出牌阶段限一次，你可以弃置一张【杀】，令一名角色回复一点体力，若此【杀】为红色【杀】，其摸一张牌",
            "ark_pokai":"冰破",
            "ark_pokai_info":"锁定技，你的【杀】无视防具；锁定技，你对场上体力最高的角色造成的伤害+1；每回合限一次，当你对其他角色使用牌时，你可以弃置其中一个目标的一张牌",
            "ark_guozai":"过载",
            "ark_guozai_info":"准备阶段，你可以进行一次判定并获得判定牌，此回合内你可以将与判定牌同颜色的牌视为【杀】使用；你使用杀无次数限制，你的攻击距离为无限大",
            "ark_zhufu":"祝福",
            "ark_zhufu_info":"游戏开始时，你可以选择一名其他角色，你与其体力上限与体力值+1",
            "ark_wuyouskill":"行商",
            "ark_wuyouskill_info":"锁定技，摸牌阶段你多摸一张牌；锁定技，结束阶段，你需弃置一张牌，若你没有牌，你流失一点体力值。",
            "ark_zhitui":"知退",
            "ark_zhitui_info":"锁定技，当你于回合外受到伤害后，本回合你不会再受到伤害，且若你体力值为1，你摸两张牌",
            "ark_yinqing":"阴晴",
            "ark_yinqing_info":"准备阶段，你从以下三个选项中选择获得一项效果持续到下回合开始：子虚：当你对一名角色造成伤害后，你令其出牌阶段使用【杀】的次数-1且摸牌阶段少摸一张牌；乌有：摸牌阶段你多摸一张牌且你使用【杀】的次数+1；子虚乌有：当你受到伤害时，你进行一次判定，若结果为黑色，你防止此伤害",
            "ark_shuangxian":"双弦",
            "ark_shuangxian_info":"锁定技，你使用【杀】可以多指定一个目标。你每回合使用杀的次数+1",
            "ark_lieshou":"猎手",
            "ark_lieshou_info":"你可以将红色牌当做【杀】使用或打出",
            "ark_huaxiang":"花香",
            "ark_huaxiang_info":"出牌阶段限一次，若你本回合没使用过【杀】，你可以弃置一张【杀】，然后令一名角色回复一点体力并使本回合使用【杀】的次数-1",
            "ark_baozi":"孢子",
            "ark_baozi_info":"每回合限一次，当你对一名角色造成伤害时，你可以使其获得一个【孢】标记并使其非锁定技失效直到你的回合结束。拥有【孢】标记的角色准备阶段失去此标记并进行一次判定，若为红色，其跳过摸牌阶段；若为黑色，其跳过出牌阶段。",
            "ark_dianjing":"点睛",
            "ark_dianjing_info":"准备阶段，你可以选择一名没有“自在”的其他角色获得一个“自在”标记；锁定技，拥有“自在”标记的角色受到伤害后你摸一张牌；锁定技，拥有“自在”标记的角色对你造成伤害时，其弃置“自在”标记，然后你防止此伤害。",
            "ark_ruhua":"入化",
            "ark_ruhua_info":"觉醒技，准备阶段，若你已经因【点睛】获得不少于5张牌，你加一点体力上限并回复一点体力，然后修改技能【点睛】，获得技能【泼墨】",
            "ark_pomo":"泼墨",
            "ark_pomo_info":"你的回合内，你使用基本牌或普通锦囊牌指定角色为目标时，你可以额外指定任意名带有“自在”标记的角色为目标，然后其失去“自在”标记。",
            "ark_dianjing2":"点睛",
            "ark_dianjing2_info":"准备阶段，你可以选择一名没有“自在”的其他角色获得一个“自在”标记；锁定技，拥有“自在”标记的角色受到伤害后你摸一张牌；锁定技，当你对一名角色造成伤害后，若其没有“自在”标记，你令其获得一个“自在”标记。",
            "ark_panzhen":"磐阵",
            "ark_panzhen_info":"游戏开始时，你获得3个“御”标记。锁定技，有“御”的角色受到伤害时，弃置一个“御”标记并防止此伤害；锁定技，有“御”的角色不能成为延时锦囊牌的目标。",
            "ark_tongyin":"铜印",
            "ark_tongyin_info":" 锁定技，当你受到伤害时，你弃置伤害来源一张牌且其非锁定技失效直到当前回合结束。",
            "ark_tieyu":"铁御",
            "ark_tieyu_info":"限定技，出牌阶段，你可以弃置X张红色牌并选择等量的其他角色，你与这些角色各获得2个“御”标记，若这些角色判定区内有牌，弃置判定区内的所有牌。",
            "ark_chulei":"初雷",
            "ark_chulei_info":"锁定技，你造成的伤害均视为雷电伤害；你造成雷电伤害后可以弃置目标一张牌。",
            "ark_yongquan":"涌泉",
            "ark_yongquan_info":"锁定技，你的攻击范围+2；出牌阶段限一次，你可以弃置一张【杀】，令一名攻击范围内的角色回复一点体力，弃置其判定区内所有牌并令其获得“抵抗”直到你的下一回合开始",
            "ark_dikang":"抵抗",
            "ark_dikang_info":"锁定技，你不能成为延时锦囊牌的目标",
            "ark_chilian_ark_leizi":"弛链",
            "ark_chilian_ark_leizi_info":"当你使用基本或普通锦囊牌指定一名其他角色为唯一目标后，你可以选择一名本回合内未选择过的且与该角色相互距离不大于1的一名其他角色并进行一次判定，若结果为黑色，该角色成为此牌的额外目标，然后你可以重复一次此流程",
            "ark_gouzhua":"勾爪",
            "ark_gouzhua_info":"出牌阶段限一次，你可以弃置至多两张手牌，然后获得等量攻击距离内角色区域内的一张牌。",
            "ark_shuibeng":"水泵",
            "ark_shuibeng_info":"当一名角色受到火焰伤害时，你可以弃置一张牌，防止此伤害；当一名角色受到雷电伤害时，你可以弃置一张牌，令此伤害+1",
            "ark_shuipao":"水炮",
            "ark_shuipao_info":"每回合限一次，当你对一名其他角色造成伤害时，你可以弃置一张牌，令其到其他角色/其他角色到其的距离+2直到其下回合结束",
            "ark_tongchou":"统筹",
            "ark_tongchou_info":"当你攻击范围内的一名角色造成一点伤害后，你可以选择一项执行：①调度：摸一张牌，然后交给其一张牌；②协同：弃置一张牌，对受到伤害的角色再造成一点伤害",
            "ark_zhenxian":"阵线",
            "ark_zhenxian_info":"结束阶段，你可以选择一名上轮未以此法选择的距离不大于1的其他角色，你与其把手牌摸至体力值（至少摸一张），然后直到你的下一个回合结束，其不会成为【杀】或【决斗】的目标",
            "ark_qiaoji":"鞘击",
            "ark_qiaoji_info":"锁定技，你的回合内，你对一名其他角色造成伤害后令其本回合内不能使用或打出手牌",
            "ark_badao":"拔刀",
            "ark_badao_info":"觉醒技，准备阶段，若场上存在手牌数或体力值至少比你大2的角色，你回复一点体力，摸两张牌，将【赤霄】置入你的武器栏，然后对任意名攻击距离内的角色造成1点伤害，最后获得【绝影】",
            "ark_chixiao_skill":"赤霄",
            "ark_chixiao_skill_info":"你可以将1张红色牌当【杀】使用或打出，你使用的【杀】无视防具。",
            "ark_jueying":"绝影",
            "ark_jueying_info":"限定技，出牌阶段，你可以选择一名攻击范围内的角色，然后依次对其使用至多X张杀（无视防具），最后其翻面（X为你的体力上限）",
            "ark_chouqin":"酬勤",
            "ark_chouqin_info":"锁定技，你的手牌上限为你的体力上限；锁定技，摸牌阶段，你的摸牌数-1。其他角色的回合结束后，你可以获得一半的本回合内因弃牌而进入弃牌堆的牌（向下取整）",
            "ark_buwang":"捕网",
            "ark_buwang_info":"限定技，出牌阶段，你可以弃置一张牌并选择一名距离不大于2的角色A与距离不大于1的角色B，令A与B换位，并使角色A换位前距离不大于1的角色（不为你）翻面。 ",
            "ark_tanfan":"摊贩",
            "ark_tanfan_info":"准备阶段，你选择获得一项效果直到下个回合开始：①断鳌：你使用【杀】指定一名角色时，你可以令其非锁定技失效直到其下回合开始；②刺身：当你对一名角色造成一点伤害后，你可以令与你距离为1的一名角色获得其一张牌",
            "ark_shijing":"市井",
            "ark_shijing_info":"锁定技，摸牌阶段你多摸一张牌。锁定技，结束阶段，你需弃置一张牌，若你没有牌，你流失一点体力值。",
            "ark_zhanyi":"战意",
            "ark_zhanyi_info":"每回合限一次，你的回合外，你可以将一张牌当【闪】或【杀】使用或打出",
            "ark_jingji":"荆棘",
            "ark_jingji_info":"当你受到伤害时，你可以对伤害来源使用一张无视距离的【杀】",
            "ark_banruo":"般若",
            "ark_banruo_info":"限定技，出牌阶段，你可以令从你上家/下家开始的每名角色各进行一次判定，若不为红桃，你对其造成一点伤害或令其摸一张牌，直到你的下家/上家为止。",
            "ark_gonggan":"共感",
            "ark_gonggan_info":"你造成伤害后，你可以摸一张牌，然后将一张手牌置于你的武将牌上（可替换，最多拥有X张）；你的出牌阶段开始时和回合结束时，你可以用你的手牌替换任意张“共感”牌（X为你的体力上限）",
            "ark_pojie":"破戒",
            "ark_pojie_info":"觉醒技，准备阶段，若你拥有不小于3张“共感”牌，你增加一点体力上限并回复一点体力，然后获得【控心】【术爆】",
            "ark_kongxin":"控心",
            "ark_kongxin_info":"当你使用基本牌或普通锦囊牌时，你可以展示一名其他角色的一张牌，若此牌为：①基本牌，你可以获得一张“共感”牌；②锦囊牌，你可以为此牌增加或减少一个目标并交给其一张“共感”牌；③装备牌，你可以弃置任意张共感牌并令等量的角色不可响应此牌。",
            "ark_shubao":"术爆",
            "ark_shubao_info":"准备阶段开始时，你可以废除你的判定区和装备区，增加2点体力上限并回复2点体力，将手牌补至体力上限，获得效果：你使用牌无次数限制，无视距离，无视防具，摸牌阶段多摸一张牌，使用【杀】造成的伤害+1，回合结束时失去3点体力值",
            "ark_shubao1":"术爆",
            "ark_shubao1_info":"",
            "ark_benye":"奔夜",
            "ark_benye_info":"锁定技，你使用的【杀】无视防具；当你使用杀造成伤害/被闪避后，你可以摸一张牌/视为对其使用一张【杀】并使本回合内不可再使用【奔夜】。",
            "ark_jueyingamiya":"绝影",
            "ark_jueyingamiya_info":"限定技，出牌阶段，你可以选择一名角色，你弃置你或其一张牌，若你与其的手牌差不超过1，你视为对其使用一张杀，然后你可以重复此流程（最多重复X次，X为你的体力上限），若该角色死亡，你造成的伤害+1直到回合结束，然后你可以再选择一名角色并令重复次数+1",
            "ark_bihu":"庇护",
            "ark_bihu_info":"游戏开始时或你的回合开始时，你可以选择任意名攻击范围内的角色令其手牌上限+1直到你的下一个回合开始。",
            "ark_xintiao":"信条",
            "ark_xintiao_info":"出牌阶段限一次，你可以弃置一张【杀】，令一名攻击范围内的角色回复一点体力值并获得一个持续到其回合结束的“护盾”，若此【杀】为红色，其额外摸一张牌。每回合限一次，一名角色进入濒死状态时，你可以弃置一张红色【杀】并令其体力值回复到1",
            "ark_jiejie":"结界",
            "ark_jiejie_info":"限定技，你可以弃置任意张牌并选择等量的攻击范围内的角色各回复一点体力并获得一个“护盾”，你的下一个回合开始前你的攻击范围内的角色不会弃置“护盾”",
            "ark_junqi":"军旗",
            "ark_junqi_info":"游戏开始时，你获得“军旗”标记，然后你可以选择一名角色摸一张牌；锁定技，“军旗”标记移动时，你摸一张牌。",
            "ark_huiguang":"辉光",
            "ark_huiguang_info":"你的回合开始时，你可以跳过出牌阶段，将“军旗”交给一名其他角色并选择一项效果：①其回复一点体力，“军旗”添加效果“手牌上限+1，摸牌阶段多摸一张牌“，出牌阶段可以多出一张【杀】；②对其造成一点伤害，“军旗”添加效果：“出牌阶段使用【杀】或【决斗】时弃置一张牌”，受到伤害时弃置一张牌。目标回合结束或撤退时你收回“军旗”。",
            "ark_xinghui":"星辉",
            "ark_xinghui_info":"出牌阶段限一次，你可以弃置任意张花色不同的牌并从牌堆中选择获得等量的一种类型的牌，若你以此法弃置了4张牌，本回合你的手牌上限+1。",
            "ark_tianyi":"天仪",
            "ark_tianyi_info":"你的手牌上限和摸牌阶段摸牌数+X（X为你击杀的角色数，增加后不得超过体力上限）",
            "ark_sushe":"速射",
            "ark_sushe_info":"出牌阶段限一次，你可以将一张非基本牌当杀使用或打出。",
            "ark_yaohai":"要害",
            "ark_yaohai_info":"当你造成伤害时，若你造成伤害的次数是3的倍数，此伤害+1",
            "ark_rerigui":"日晷",
            "ark_rerigui_info":"锁定技，你的攻击范围+1。",
            "ark_relanghun":"狼魂",
            "ark_relanghun_info":"每回合限X/2（向上取整）次，当你使用杀指定唯一目标时，你可以多选一个目标（X为本回合内造成的伤害）。当你于回合外受到伤害时，你令你下回合使用杀的次数+1。",
            "ark_recuixiu":"摧朽",
            "ark_recuixiu_info":"出牌阶段，当你使用【杀】或锦囊牌指定其他角色为唯一目标后，你可以与其进行拼点，若你赢，其不可响应此【杀】或锦囊牌。当你对一名角色造成伤害后，你可以令其非锁定技能失效直到回合结束。你拼点后，你可以获得一张拼点牌。",
            "ark_kuaidi":"快递",
            "ark_kuaidi_info":"锁定技，游戏开始时你摸一张牌；锁定技，摸牌阶段你多摸一张牌，然后你须交给一名其他角色一张牌。",
            "ark_jianyu":"剑雨",
            "ark_jianyu_info":"出牌阶段限一次，你可以选择至多2名攻击范围内角色进行拼点，没赢的角色选择受到一点伤害或让你摸一张牌",
            "ark_enyuan":"恩怨",
            "ark_enyuan_info":"你拼点后，若你没赢，你可以摸一张牌。",
            "ark_rongshi":"融蚀",
            "ark_rongshi_info":"出牌阶段限一次，你可以废除你和一名其他角色的一个装备栏，并根据废除的装备栏执行以下效果：武器栏：你从牌堆中获得一张【杀】和一张【决斗】；防具栏：你从牌堆中获得一张【闪】和一张【桃】；坐骑栏：你从牌堆中获得一张【过河拆桥】和一张【顺手牵羊】；宝物栏：你从牌堆中获得一张【无中生有】",
            "ark_fuzhi":"腐殖",
            "ark_fuzhi_info":"你可以将一张装备牌当雷【杀】使用或打出，你使用雷【杀】没有距离限制",
            "ark_fangdu":"芳毒",
            "ark_fangdu_info":"觉醒技，准备阶段开始时，若你失去了所有的装备栏，你令所有因你失去装备栏的其他角色恢复对应装备栏，获得效果：你使用【杀】的次数+1且你使用【杀】时可以多选择一个目标，你使用锦囊牌没有距离限制",
            "ark_wange":"挽歌",
            "ark_wange_info":"出牌阶段限一次，你可以弃置至多3张同颜色基本牌，令等量角色恢复一点体力并摸一张牌。",
            "ark_huanying":"幻影",
            "ark_huanying_info":"每局限3次，出牌阶段，你可以令一名角色获得“幻影”标记。拥有“幻影”标记的角色不会受到属性伤害和锦囊伤害",
            "ark_shengyu":"圣域",
            "ark_shengyu_info":"限定技，出牌阶段开始时，你可以获得持续1轮的效果：你的攻击范围+1，你选定的角色不会受到非“无属性【杀】”伤害，“幻影”不会失去体力；然后你选定任意名攻击范围内角色各恢复一点体力。",
            "ark_cigu":"刺骨",
            "ark_cigu_info":"你的【杀】被闪避后，你可以弃置目标一张牌",
            "ark_langqun":"狼群",
            "ark_langqun_info":"你登场时可以令一名角色翻面并弃置一张牌。限定技，限2次，你进入濒死阶段后重新登场（弃置所有牌，复原武将牌，体力值恢复到体力上限并摸4张牌）。",
            "ark_yaoji":"药剂",
            "ark_yaoji_info":"当你使用非虚拟杀造成伤害后，你可以进行一次判定，若结果为：①红桃：你回复一点体力；②方片：你摸两张牌；③梅花：其弃置两张牌；④黑桃：其翻面。你回复一点体力时可以摸一张牌",
            "ark_guaijie":"怪杰",
            "ark_guaijie_info":"回合结束时，你摸两张牌并失去一点体力。",
            "ark_duyi":"毒医",
            "ark_duyi_info":"限定技，出牌阶段，你可以视为对一名角色使用3张【杀】；然后若其存活，你和其获得效果：回合开始时回复一点体力，摸牌阶段多摸一张牌，出牌阶段可以多使用一张【杀】，使用【杀】造成的伤害+1。若其死亡，你失去两点体力。",
            "ark_wenjiang":"稳降",
            "ark_wenjiang_info":"锁定技，游戏开始时，你摸三张牌并把武将牌翻至背面。",
            "ark_duanzui":"断罪",
            "ark_duanzui_info":"你使用【杀】造成伤害时，你可以指定一种花色并进行一次判定，若判定牌花色与指定花色相同，此伤害+1，若判定牌颜色与指定花色不同但对应颜色相同，你可以重复此流程",
            "ark_chuangshi":"创世",
            "ark_chuangshi_info":"出牌阶段，你可以弃置一张牌并指定一种颜色然后进行一次判定，若判定牌颜色与指定颜色相同，则你对所有距离为1的角色造成一点伤害并令其弃置X张牌，若花色不同，你翻面并流失X点体力（X为本回合技能发动次数）",
            "ark_baibing":"百兵",
            "ark_baibing_info":"当你装备区内装备数大于等于：1，你使用【杀】对一名角色造成伤害后令其本回合内不能使用或打出手牌；2，摸牌阶段你多摸一张牌，出牌阶段你可以多使用一张【杀】；3，你使用【杀】对一名角色造成伤害后，你令其非锁定技失效直到本回合结束；4，你使用【杀】造成的伤害+1；5，其他角色无法响应你使用的【杀】",
            "ark_baoke":"剥壳",
            "ark_baoke_info":"当你对一名角色造成一点伤害时，你可以获得其装备区内的一张牌",
            "ark_zhiyi":"履律",
            "ark_zhiyi_info":"你每回合使用第一张【杀】时，可选择以下一项:1.此【杀】的目标需连续打出两张【闪】才能抵消此【杀】。2.此【杀】可额外指定你攻击范围内的X名角色为目标（X为你已损失的体力值且至少1）。你无视你与其距离为一角色的防具。",
            "ark_lvmo":"旅末",
            "ark_lvmo_info":"当你令一名角色进入濒死状态时，你可弃置一张黑桃手牌令其立即死亡。",
            "ark_qiaozhuang":"巧妆",
            "ark_qiaozhuang_info":"出牌阶段限一次，若你本回合内未使用过【杀】，你可以将一张手牌按照其花色视为对应卡牌使用：红桃，【桃园结义】；梅花，【南蛮入侵】；方片，【五谷丰登】；黑桃，【万箭齐发】，然后你本回合内不能使用【杀】。",
            "ark_jiangyun":"匠运",
            "ark_jiangyun_info":"你的回合外，你可以将黑色非基本牌当作【杀】、红色非基本牌当作【闪】使用或打出。",
            "ark_xiannan":"弦难",
            "ark_xiannan_info":"当你使用【杀】时，你可以摸一张牌并弃一张牌，然后根据弃置的牌的类别获得以下效果：基本牌，此杀可额外指定一个目标；锦囊牌，此【杀】的伤害+1；装备牌：此【杀】不可被响应。",
            "ark_tiexian":"铁弦",
            "ark_tiexian_info":"出牌阶段结束后，若你本回合内未造成过伤害，你可以将一张手牌置于你的武将牌上。当你受到伤害时，若你的武将牌上有“铁弦”牌，你免除此伤害并弃置此牌，然后你可以视为使用一张【杀】。准备阶段，弃置“铁弦”牌并摸两张牌。",
            "ark_buce":"卜测",
            "ark_buce_info":"摸牌阶段开始时，你可以放弃摸牌并改为展示牌堆顶的4张牌，然后依次将这些牌交给任意名角色。若你以此法将装备牌交给一名角色，该角色可以使用此牌",
            "ark_mingding":"命定",
            "ark_mingding_info":"在一名角色的判定牌生效前，你可以弃一张牌并观看牌堆顶的3张牌，然后你选择其中一张牌替代之并弃置剩余的牌。",
            "ark_wudao":"误导",
            "ark_wudao_info":"当你使用牌指定唯一目标时，你可以为此牌指定一个额外目标，然后令前者角色选择一项：1.取消此牌的额外目标，且其不能响应此牌；2.弃置一张牌",
            "ark_mofang":"魔方",
            "ark_mofang_info":"你登场时可以令一名距离为1的角色翻面并无法受到伤害直到其翻至正面。限定技，限2次，你进入濒死阶段后重新登场（弃置所有牌，复原武将牌，体力值恢复到体力上限并摸4张牌）。",
            "ark_chuchan":"除颤",
            "ark_chuchan_info":"锁定技，你拥有【抵抗】；当你首次进入濒死状态时，你摸两张牌并将体力值调整至两点。",
            "ark_haolie":"豪烈",
            "ark_haolie_info":"每回合限一次，你可以将你任意一个区域内的最后一张牌当做【杀】或【决斗】使用或打出。当你使用一张【杀】或【决斗】时，若其颜色为：黑色，此牌至多可额外指定两个目标；红色，你可以失去一点体力（不会低于1），然后此牌造成火属性伤害且你可以对攻击范围内的至多X名其他角色各造成一点火属性伤害（X为你已失去的体力值）",
            "ark_xuejiang":"血浆",
            "ark_xuejiang_info":"锁定技，摸牌阶段开始时，弃牌阶段结束时，当你造成伤害时，你可以获得一个“血”标记。回合结束时，若你的血标记不小于3，你可以弃置3枚“血”标记，令一名角色回复一点体力并摸两张牌。",
            "ark_xuenu":"血怒",
            "ark_xuenu_info":"限定技，其他角色的回合开始时，若你拥有\"血\"标记，你可以弃置最多7枚\"血\"标记，令其摸等量的牌，并且直到其回合结束，其造成的伤害+1",
            "ark_gongcheng":"工程",
            "ark_gongcheng_info":"你可以将装备牌当做雷【杀】使用或打出",
            "ark_sheding":"射钉",
            "ark_sheding_info":"每名角色的回合限两次，当你使用【杀】结算后，你摸一张牌或对同一目标再使用一张【杀】，该杀可以多指定一个目标。锁定技，你使用的【杀】无视防具。",
            "ark_xianbei":"险北",
            "ark_xianbei_info":"锁定技，游戏开始时，你废除所有装备栏并获得两张装备牌；你的装备牌不计入你的手牌上限。回合开始时，你可以从牌堆中获得一张装备牌。",
            "ark_longteng":"龙腾",
            "ark_longteng_info":"出牌阶段限一次，你可以将一张装备牌置于一名其他角色的武将牌上，称为“空机”，若此牌为：武器，其出牌阶段开始时受到一点火焰伤害；防具，其出牌阶段内，每使用一张牌，需弃置一张牌，否则受到一点雷电伤害；坐骑或宝物，其手牌上限-2。其准备阶段开始时可以弃置一张与“空机”颜色相同的牌令其无效一回合或弃置一张装备牌将其弃置（每名角色最多拥有一张同种类空机）",
            "ark_zheshe":"折射",
            "ark_zheshe_info":"锁定技，拥有“空机”的角色视为在你的攻击范围内",
            "ark_jingtou":"镜头",
            "ark_jingtou_info":"你的出牌阶段内，当你使用一张实体牌时，你可以令一名角色获得一个“镜头”。当有“镜头”的角色需要使用或打出一张本轮未以此法使用或打出过的基本牌时，其可以移去其武将牌上的一个“镜头”，视为使用或打出之。",
            "ark_yingxiang":"影像",
            "ark_yingxiang_info":"出牌阶段限一次，你可以移去一个“镜头”，观看一名其他角色的所有手牌，并对其使用其中的一张牌",
            "ark_guiyuan":"诡渊",
            "ark_guiyuan_info":"一名角色的判定牌生效前，若你的武将牌上有“画”，则你可以选择一项：1.打出一张与“画”花色、点数、或类别相同的牌替换之。2.打出“画”代替判定牌",
            "ark_danxiang":"诞像",
            "ark_danxiang_info":"锁定技，游戏开始时或你的回合开始时，若你的武将牌上没有“画“，则你摸一张牌并将一张牌置于你的武将牌上，称为“画”；其他角色使用的与“画”花色相同的牌对你无效。",
            "ark_huixing":"绘形",
            "ark_huixing_info":"游戏开始或牌堆洗切时，你可以生成一个额外区域，称为手牌副区，副区的作用与主区一致，除使用、打出牌外，其他操作的结算均只能选择主区的牌，当你执行摸牌或弃牌操作时，所有与之相同的区域均进行一次结算",
            "ark_huiming":"晦明",
            "ark_huiming_info":"出牌阶段限一次，你可以亮出牌堆顶等同于你所有区域数的牌，然后选择一项：1.摸等同于其中红色牌数的牌，然后弃置等同于其中黑色牌数的牌；2.弃置等同于其中红色牌数的牌，然后摸等同于其中黑色牌数的牌。",
            "ark_shanjiao":"善交",
            "ark_shanjiao_info":"锁定技，当你于每回合第一次造成伤害时，你交给受到伤害的角色一张牌（无牌则不交）；当你受到伤害时，伤害来源交给你一张牌（无牌则不交）。",
            "ark_xushi":"虚饰",
            "ark_xushi_info":"锁定技，当你于摸牌阶段外不因此技能获得牌时，你摸一张牌并展示所有手牌，若均为同一颜色，你选择一项：①令自己回复一点体力；②令一名角色失去一点体力。若不为同一颜色，你弃置一张牌",
            "ark_zhenli":"真理",
            "ark_zhenli_info":"当你使用一张牌/成为一张牌的目标时，你可以弃置任意张加减结果等于1的牌，然后此牌不可被响应/对你无效。若如此做，你可以将此技能中的数值调整至与你的体力值相同或与【虚实】中的点数值交换",
            "ark_xushiaak":"虚实",
            "ark_xushiaak_info":"摸牌阶段，你可以改为亮出牌堆顶等同与当前存活角色数与当前轮数之差的牌，然后获得其中点数之和至多为K的牌并将剩余部分以任意顺序置于牌堆顶",
            "ark_keyu":"壳御",
            "ark_keyu_info":"回合开始时，若你体力值不为满，你可以弃置不多于X张牌（至少为1）并回复一点体力，然后跳过出牌阶段和弃牌阶段，回合结束时，你获得两倍的牌（X为你已失去的体力值）",
            "ark_jianjia":"坚甲",
            "ark_jianjia_info":"每回合限一次，当你受到无属性伤害时，你可以弃置X张手牌，令此伤害-X（X最多为伤害点数）",
            "ark_kuishi":"溃示",
            "ark_kuishi_info":"当一名角色对一名体力值不高于体力上限一半（向上取整）的角色造成伤害时，你可以弃置一张非基本牌然后令伤害+1",
            "ark_zhoushi":"咒蚀",
            "ark_zhoushi_info":"结束阶段，你可以令一名其他角色获得一枚【诅咒】标记。拥有【诅咒】标记的角色出牌阶段开始时若其手牌数大于体力值，其将手牌数弃置与体力值相同；若其手牌数不大于体力值则你对其造成一点伤害。然后其移除【诅咒】标记",
            "ark_shiyi":"诗意",
            "ark_shiyi_info":"锁定技，出牌阶段开始时，你将体力上限减少至体力值（最低为3），然后你选择任意张手牌与等量其他角色，将这些牌随机置于这些角色的武将牌上各一张，称为“逸”。有“逸”的角色攻击范围+2，其造成伤害时选择一项：①交给你一张手牌；②令你增加一点体力上限，然后其获得其武将牌上的一张“逸”。当你的体力上限减少时，你可以摸等同于变化量的牌",
            "ark_huihao":"挥毫",
            "ark_huihao_info":"出牌阶段限一次，你可以弃置一张非基本牌并指定一名其他角色，令所有有“逸”且不为该角色的其他角色各摸一张牌并选择一项①对该角色使用一张杀；②令你增加一点体力上限。",
            "ark_jinjiu":"进酒",
            "ark_jinjiu_info":"限定技，一名有“逸”的角色回合开始时，若场上有不小于两名角色武将牌上有“逸”，你可以将所有“逸”移动到该武将牌上并令其摸X张牌，然后其本回合使用牌无次数和距离限制，回合结束时你增加Y点体力上限。（X为移动的“逸”的个数，Y为其造成伤害的次数）",
            "ark_jianyou":"兼优",
            "ark_jianyou_info":"结束阶段，你可以比较你的体力值、手牌数和你的装备牌数，若这三者中:1.均不相同，下次摸牌阶段你额外摸一张牌；2.至少有两项相同，你令一名角色从牌堆中随机使用一张装备牌；3.均相同，你回复一点体力值或摸两张牌。",
            "ark_poxian":"破限",
            "ark_poxian_info":"准备阶段，你可以视为对一名攻击范围内包含你的角色使用一张【杀】。",
            "ark_minjue":"敏觉",
            "ark_minjue_info":"其他角色的出牌阶段开始时，你可以猜测其使用的第一张牌的类别，若你猜对，你下次使用【破限】时，可以额外指定该角色为目标",
            "ark_zhenmi":"缜密",
            "ark_zhenmi_info":"其他角色的出牌阶段开始时，你可以获得其一张牌，然后交给其一张牌",
            "ark_jianqu":"健驱",
            "ark_jianqu_info":"摸牌阶段开始前，你可以跳过此阶段。若如此做，本回合你使用牌无距离限制；结束阶段，若你本回合使用过牌，你令一名角色摸X+1张牌（X为你本回合使用牌的种类数），然后若其手牌数不大于你，你摸两张牌。",
        },
    },
    intro:"明日方舟×三国杀=？<br>扩展交流群:<br>无名杀-明日方舟①群（已满）:<a target='_top' href='https://jq.qq.com/?_wv=1027&k=xnisQmnU'>531313081</a><br>无名杀-明日方舟②群:<a target='_top' href='https://jq.qq.com/?_wv=1027&k=uZogDenu'>757297619</a>",
    author:"无名方舟制作组",
    diskURL:"",
    forumURL:"QQ：531313081",
    version:"1.65.1",
},files:{"character":[],"card":[],"skill":[]}}})