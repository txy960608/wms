game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"三国遗卷",editable:false,content:function (config,pack){ 
    
	//平凡普通A：
	lib.rank.rarity.junk.addArray(['sgyj_wangmi','sgyj_taishizhaorong','sgyj_furong','sgyj_mengqiu','sgyj_taorui','sgyj_mayuanyi','sgyj_dingli','sgyj_zhangxinqi','sgyj_dongguiren','jp_jiping','sgyj_chengong','sgyj_xiaoqiao','sgyj_zhouyu','sgyj_gongdu','sgyj_zhoutai','sgyj_yimou','sgyj_qinqi','sgyj_guoenshumu','sgyj_liubao','sgyj_niufu','sgyj_xiuwulu']);	
	//精品S：
	lib.rank.rarity.rare.addArray(['sgyj_lengshouguang','sgyj_ahuinan','sgyj_kebineng','sgyj_langjili','sgyj_zhaoyu','sgyj_caowei','sgyj_guomo','sgyj_liufuren','sgyj_yanziqing','sgyj_simajun','sgyj_mengyou','sgyj_niuxian','sgyj_quanhuanghou','sgyj_caoxian','sgyj_tukuilai','sgyj_gongsuncheng','sgyj_yunying','sgyj_shiyi','sgyj_zhangjuzhangchun','sgyj_caohua','sgyj_eheshaoge','sgyj_hengai','sgyj_xiahouhui','sgyj_xiahouguangji','sgyj_langboduo','sgyj_buba','sgyj_yizhen','sgyj_dongguiren','sgyj_simazhi','sgyj_dianman','sgyj_simaliang','sgyj_kouloudun','sgyj_ganruonan','sgyj_zhenji','sgyj_wangyi','sgyj_mengxiang','sgyj_zhugeliangsenying','sgyj_liuhui','sgyj_tufashujineng','sgyj_penghu','sgyj_suli','sgyj_qingqing','sgyj_caoxiong','sgyj_dingfuren','sgyj_hushi','sgyj_luotoushi','sgyj_wuguowuniv']);	
	//史诗SS：
	lib.rank.rarity.epic.addArray(['sgyj_zhoubuyi','sgyj_shibi','sgyj_laiyinger','sgyj_relaiyinger','sgyj_rewutugu','sgyj_wutugu','sgyj_muludawang','sgyj_remuludawang','sgyj_wangjun','zzj_zhangzhongjing','df_dongfeng','sgyj_xushuzhimu','sgyj_malin','sgyj_guosi','sgyj_wangtaowangyue','sgyj_jihuo','sgyj_rejihuo','sgyj_reshiyi','sgyj_pengqi','sgyj_zhangzhang','sgyj_sunjunsunlin','sgyj_zhangzhongjing','sgyj_liuli','sgyj_huaxie','sgyj_zhugeguo','sgyj_quexiaojiang','sgyj_jingzhu','sgyj_qiaoguolao','sgyj_simayong','sgyj_wangmeiren','sgyj_wangrong']);	
	//传说SSS：
	lib.rank.rarity.legend.addArray(['sgyj_wangdao','sgyj_pujing','sgyj_jiananfeng','sgyj_yuwenjun','sgyj_xiahouen','sgyj_zhixushangren','sgyj_shenzhurong','sgyj_shenhuangyueying','sgyj_shendianwei','sgyj_shendiaochan','sgyj_shenlvbu','sgyj_zhugeyun','sgyj_cuishi','sgyj_shichangshi']);	
	
	if(config.xinremachao){		
		lib.arenaReady.push(function(){
            lib.skill.retieji={              
				shaRelated:true,
				audio:2,
				audioname:['boss_lvbu3'],
				trigger:{player:'useCardToPlayered'},
				check:function(event,player){
					return get.attitude(player,event.target)<=0;
				},
				filter:function(event,player){
					return event.card.name=='sha';
				},
				logTarget:'target',
				content:function(){
					"step 0"
					player.judge(function(){return 0});
					if(!trigger.target.hasSkill('baiban')){
						trigger.target.addTempSkill('baiban');
					}
					"step 1"
					var suit=result.suit;
					var target=trigger.target;
					var num=target.countCards('h','shan');
					if(!target.countCards('he',{suit:result.suit})){
					    trigger.getParent().directHit.add(trigger.target);
					}else{
					target.chooseToDiscard('请弃置所有'+get.translation(suit)+'牌，否则不能使用闪抵消此杀','he',target.countCards('he',{suit:result.suit}),function(card){
						return get.suit(card)==_status.event.suit;
					}).set('ai',function(card){
						var num=_status.event.num;
						if(num==0) return 0;
						if(card.name=='shan') return num>1?2:0;
						return 8-get.value(card);
					}).set('num',num).set('suit',suit);
					}
					"step 2"
					if(!result.bool){
						trigger.getParent().directHit.add(trigger.target);
					}
				},
				ai:{
					ignoreSkill:true,
					skillTagFilter:function(player,tag,arg){
						if(tag=='directHit_ai'){
							return get.attitude(player,arg.target)<=0;
						}
						if(!arg||arg.isLink||!arg.card||arg.card.name!='sha') return false;
						if(!arg.target||get.attitude(player,arg.target)>=0) return false;
						if(!arg.skill||!lib.skill[arg.skill]||lib.skill[arg.skill].charlotte||get.is.locked(arg.skill)||!arg.target.getSkills(true,false).contains(arg.skill)) return false;
					},
					directHit_ai:true,
				}
		}	
			lib.translate.retieji_info='当你使用【杀】指定一名角色为目标后，你可以进行一次判定并令该角色的所有技能失效直到回合结束，除非该角色弃置所有与判定结果花色相同的牌，否则不能使用【闪】抵消此【杀】';
        });
    }
	if(config.xinrezhangliao){		
		lib.arenaReady.push(function(){
            lib.skill.new_retuxi={   	
				audio:"retuxi",
				trigger:{
					player:"phaseDrawBegin2",
				},
				direct:true,
				filter:function(event,player){
					return event.num>0&&!event.numFixed&&game.hasPlayer(function(target){
						return target.countCards('h')>0&&player!=target;
					});
				},
				content:function (){
					"step 0"
					var num=get.copy(trigger.num);
					if(get.mode()=='guozhan'&&num>2) num=2;
					player.chooseTarget(get.prompt('new_retuxi'),'少摸任意张牌并获得其他角色的等量的手牌',[1,num],function(card,player,target){
						return target.countCards('h')>0&&player!=target;
					},function(target){
						var att=get.attitude(_status.event.player,target);
						if(target.hasSkill('tuntian')) return att/10;
						return 1-att;
					});
					"step 1"
					if(result.bool){
						if(result.targets.length==1){
							event.goto(3);
						}else{
						result.targets.sortBySeat();
						player.logSkill('new_retuxi',result.targets);
						player.gainMultiple(result.targets);
						trigger.num-=result.targets.length;
						}
					}
					else{
						event.finish();
					}
					"step 2"
					if(trigger.num<=0) event.finish();
					"step 3"
					player.gainPlayerCard(result.targets[0],'h',2);
					
				},
				ai:{
					threaten:1.6,
					expose:0.2,
				},
			}	
			lib.translate.new_retuxi_info='摸牌阶段，你可以少摸任意张牌并获得场上其他角色等量的牌';
        });
    }
	if(config.xinrehuangyueying){		
		lib.arenaReady.push(function(){
            lib.skill.rejizhi={   
				audio:2,
				audioname:['lukang'],
				locked:false,
				trigger:{player:'useCard'},
				frequent:true,
				filter:function(event){
					return (get.type(event.card,'trick')=='trick'&&event.card.isCard);
				},
				init:function (player){
					player.storage.rejizhi=0;
				},
				content:function(){
					'step 0'
					player.draw();
					'step 1'
					event.card=result[0];
					if(get.type(event.card)=='basic'){
						player.chooseBool('是否弃置'+get.translation(event.card)+'并在回合结束时，你可以摸X张牌，X为你与此回合内，因“集智”弃置的基本牌数量？').set('ai',function(evt,player){
							return _status.currentPhase==player&&player.needsToDiscard(-3)&&_status.event.value<6;
						}).set('value',get.value(event.card,player));
					}
					'step 2'
					if(result.bool){
						player.discard(event.card);
						player.storage.rejizhi++;
						if(_status.currentPhase==player){
							player.markSkill('rejizhi');
						}
					}
				},
				ai:{
					threaten:1.4,
					noautowuxie:true,
				},
				/*mod:{
					maxHandcard:function(player,num){
						return num+player.storage.rejizhi;
					}
				},
				intro:{
					content:'本回合手牌上限+#'
				},*/
				group:'rejizhi_clear',
				subSkill:{
					clear:{
						trigger:{player:'phaseEnd'},
						silent:true,
						frequent:true,
						content:function(){
							player.draw(player.storage.rejizhi);
							player.storage.rejizhi=0;
							player.unmarkSkill('rejizhi');
						},
					},
				},
			}	
			lib.translate.rejizhi_info='当你使用一张锦囊牌时，你可以摸一张牌。若此牌是基本牌，你可以弃置此牌，回合结束时，你可以摸X张牌，X为你与此回合内，因“集智”弃置的基本牌数量';
        });
    }
	if(config.xinresimayi){		
		lib.arenaReady.push(function(){
            lib.skill.refankui={   
				audio:2,
				trigger:{player:'damageEnd'},
				direct:true,
				filter:function(event,player){
					return (event.source&&event.source.countGainableCards(player,'he')&&event.num>0&&event.source!=player);
				},
				content:function(){
					"step 0"
					event.count=trigger.num;
					"step 1"
					event.count--;
					player.gainPlayerCard(get.prompt('refankui',trigger.source),trigger.source,'he','visibleMove').set('ai',function(card){				
						return Math.random();
					}).set('logSkill',['refankui',trigger.source]);
					"step 2"
					if(result.bool){
						event.suit=get.suit(result.cards[0]);
						player.showCards(result.cards[0]);
						trigger.source.chooseCard('弃置一张相同花色的手牌，否则失去一点伤害','he',function(card){
            return get.suit(card)==event.suit;
        }).ai=function(card){
            return 12-get.value(card);
        };                
					}					
					"step 3"
					if(result.bool){       
        trigger.source.discard(result.cards); 
		if(event.count>0) event.goto(1);
       }       
       else{
		   trigger.source.loseHp(); 
		   if(event.count>0) event.goto(1);
	   }
				},
				ai:{
					maixie_defend:true,
					effect:{
						target:function(card,player,target){
							if(player.countCards('he')>1&&get.tag(card,'damage')){
								if(player.hasSkillTag('jueqing',false,target)) return [1,-1.5];
								if(get.attitude(target,player)<0) return [1,1];
							}
						}
					}
				}
			}	
			lib.translate.refankui_info='当你受到1点伤害后，你可以获得伤害来源的一张牌；然后你可以展示此牌，若其不能弃置一张同花色的牌，其失去1点体力。';
        });
    }			
	if(config.xinwanglang){		
		lib.arenaReady.push(function(){
            lib.skill.rejici={   
				audio:'jici',
				trigger:{
					player:'compare',
					target:'compare',
				},
				forced:true,
				filter:function(event,player){
					if(player!=event.target&&event.iwhile) return false;
					//return (player==event.player?event.num1:event.num2)<=player.countMark('regushe');
					return true;
				},
				content:function(){
					trigger[player==trigger.player?'num1':'num2']+=player.countMark('regushe');
					if(player==trigger.player&&num1>13){
					    num1==13;
					}
					else if(player!=trigger.player&&num2>13){
					    num2==13;
					}
					game.log(player,'的拼点牌点数+'+player.countMark('regushe')+'且至多为13');
					game.delayx();
					/*var cards=[trigger.card1];
					if(trigger.cardlist) cards.addArray(trigger.cardlist);
					else cards.push(trigger.card2);
					cards.sort(function(a,b){
						return get.number(b)-get.number(a);
					});
					var num=get.number(cards[0]);
					for(var i=1;i<cards.length;i++){
						if(get.number(cards[i])<num){
							cards.splice(i);
							break;
						}
					}
					cards=cards.filterInD();
					if(cards.length) player.gain(cards,'gain2');*/
				},
				//group:'rejici2',
				}	
			lib.translate.rejici_info='锁定技，当你的拼点牌展示后，你令此拼点牌点数+X，X为你的“饶舌”标记。（点数至高为13）';
        });
    }			
			
	if(config.xinwangrong){		
		lib.arenaReady.push(function(){
            lib.skill.jijing={   	
				audio:2,
				trigger:{player:'damage'},
				frequent:true,
				content:function(){
					'step 0'
					player.judge();
					'step 1'
					var num=result.number;
					var next=player.chooseToDiscard('是否弃置任意张点数之和为'+get.cnNumber(num)+'的牌并回复1点体力？',function(card){
						var num=0;
						for(var i=0;i<ui.selected.cards.length;i++){
							num+=get.number(ui.selected.cards[i]);
						}
						return get.number(card)+num<=_status.event.num;
					},'he');
					next.set('num',num);
					next.set('complexCard',true);
					next.set('selectCard',function(){
						var num=0;
						for(var i=0;i<ui.selected.cards.length;i++){
							num+=get.number(ui.selected.cards[i]);
						}
						if(num==_status.event.num) return ui.selected.cards.length;
						return ui.selected.cards.length+2;
					});
					next.set('cardResult',function(){
						var cards=player.getCards('he');
						var l=cards.length;
						var all=Math.pow(l,2);
						var list=[];
						for(var i=1;i<all;i++){
							var array=[];
							for(var j=0;j<l;j++){
								if(Math.floor((i%Math.pow(2,j+1))/Math.pow(2,j))>0) array.push(cards[j])
							}
							var numx=0;
							for(var k of array){
								numx+=get.number(k);
							}
							if(numx==num) list.push(array);
						}
						if(list.length){
							list.sort(function(a,b){
								return get.value(a)-get.value(b);
							});
							return list[0];
						}
						return list;
					}());
					next.set('ai',function(card){
						if(!_status.event.cardResult.contains(card)) return 0;
						return 6-get.value(card);
					});
					'step 2'
					if(result.bool) player.recover(trigger.num);
				},
			}	
			lib.translate.jijing_info='当你受到伤害后，你可以进行判定，然后若你弃置任意张点数之和与判定结果点数相同的牌，你回复至受到此次伤害前的体力值。';
        });
    }			
	if(config.xinreguanyu){		
		lib.arenaReady.push(function(){
            lib.skill.new_rewusheng={        	
				mod:{
					targetInRange:function (card){
						if(get.suit(card)=='diamond'&&card.name=='sha') return true;
					},
					cardUsable:function (card,player,num){
					    if(get.suit(card)=='heart'&&card.name=='sha') return Infinity;
				    },
				},
				audio:"wusheng",
				audioname:['re_guanyu','guanzhang','jsp_guanyu','guansuo'],
				enable:["chooseToRespond","chooseToUse"],
				filterCard:function(card,player){
					if(get.zhu(player,'shouyue')) return true;
					return get.color(card)=='red';
				},
				position:"hes",
				viewAs:{
					name:"sha",
				},
				viewAsFilter:function(player){
					if(get.zhu(player,'shouyue')){
						if(!player.countCards('hes')) return false;
					}
					else{
						if(!player.countCards('hes',{color:'red'})) return false;
					}
				},
				prompt:"将一张红色牌当杀使用或打出",
				check:function(card){return 4-get.value(card)},
				ai:{
					respondSha:true,
					skillTagFilter:function(player){
						if(get.zhu(player,'shouyue')){
							if(!player.countCards('hes')) return false;
						}
						else{
							if(!player.countCards('hes',{color:'red'})) return false;
						}
					},
				},
		}	
			lib.translate.new_rewusheng_info='你可以将一张红色牌当做【杀】使用或打出。你使用方片【杀】没有距离限制，你使用红桃【杀】没有次数限制';
        });
    }				
	if(config.xinxingdaorong){		
		lib.arenaReady.push(function(){
            lib.skill.xuxie={        
				audio:2,
				trigger:{player:'phaseUseBegin'},
				logTarget:function(event,player){
					return game.filterPlayer(function(current){
						return get.distance(player,current,'attack')<=1;
					}).sortBySeat();
				},
				check:function(event,player){
					if(player.isHealthy()) return false;
					var list=game.filterPlayer(function(current){
						return get.distance(player,current,'attack')<=1;
					});
					var draw=0;
					var discard=0;
					var num=2/player.getDamagedHp();
					while(list.length){
						var target=list.shift();
						var att=get.attitude(player,target);
						if(att>0){
							draw++;
							if(target.countDiscardableCards(player,'he')>0) discard--;
						}
						if(att==0){
							draw--;
							if(target.countDiscardableCards(player,'he')>0) discard--;
						}
						if(att<0){
							draw--;
							if(target.countDiscardableCards(player,'he')>0) discard++;
						}
					}
					return draw>=num||discard>=num;
				},
				content:function(){
					'step 0'
					player.loseMaxHp();
					'step 1'
					var targets=game.filterPlayer(function(current){
						return get.distance(player,current,'attack')<=1;
					}).sortBySeat();
					if(!targets.length) event.finish();
					else{
						event.targets=targets;
						player.chooseControl().set('choiceList',[
							'弃置'+get.translation(targets)+'的各一张牌',
							'令'+get.translation(targets)+'各摸一张牌',
						]).set('ai',function(){
							var player=_status.event.player;
							var list=_status.event.getParent().targets.slice(0);
							var draw=0;
							var discard=0;
							while(list.length){
								var target=list.shift();
								var att=get.attitude(player,target);
								if(att>0){
									draw++;
									if(target.countDiscardableCards(player,'he')>0) discard--;
								}
								if(att<0){
									draw--;
									if(target.countDiscardableCards(player,'he')>0) discard++;
								}
							}
							if(draw>discard) return 1;
							return 0;
						});
					}
					'step 2'
					event.index=result.index;
					if(result.index==1){
						game.asyncDraw(targets);
					}
					else event.goto(4);
					'step 3'
					game.delay();
					event.finish();
					'step 4'
					var target=targets.shift();
					if(target.countDiscardableCards(player,'he')>0) player.discardPlayerCard(target,'he',true);
					if(targets.length) event.redo();
				},
				group:'xuxie_add',
			}	
			lib.translate.xuxie_info='出牌阶段开始时，你可以减1点体力上限并选择所有攻击范围内的角色，弃置这些角色的各一张牌或令这些角色各摸一张牌。出牌阶段结束时，若你的体力上限为全场最少，则你加1点体力上限。';
        });
    }										
	if(config.xincaojie){		
		lib.arenaReady.push(function(){
            lib.skill.shouxi={                    
				audio:2,
				trigger:{target:'useCardToTargeted'},
				direct:true,
				init:function(player){
					if(!player.storage.shouxi) player.storage.shouxi=[];
				},
				filter:function(event,player){
					return (event.card.name=='sha'||(get.tag(event.card,'damage')&&get.type(event.card)=='trick'))&&event.player.isAlive();
				},
				content:function(){
					'step 0'
					var list=lib.inpile.filter(function(i){
						if(player.storage.shouxi.contains(i)) return false;
						var type=get.type(i);
						if(type=='basic'||type=='trick') return true;
						return false;
					});
					for(var i=0;i<list.length;i++){
						list[i]=[get.type(list[i]),'',list[i]];
					}
					player.chooseButton([get.prompt('shouxi',trigger.player),[list,'vcard']]).set('ai',function(button){
						return Math.random();
					});
					'step 1'
					if(result.bool){
						player.logSkill('shouxi');
						var name=result.links[0][2];
						event.vcard=result.links;
						event.cardname=name;
						player.storage.shouxi.add(name);
					}
					else{
						event.finish();
					}
					'step 2'
					var name=event.cardname;
					trigger.player.chooseToDiscard(function(card){
						return card.name==_status.event.cardname;
					}).set('ai',function(card){
						if(_status.event.att<0){
							return 10-get.value(card);
						}
						return 0;
					}).set('att',get.attitude(trigger.player,player)).set('cardname',name).set('dialog',['守玺：请弃置一张【'+get.translation(name)+'】，否则此【杀】对'+get.translation(player)+'无效',[event.vcard,'vcard']]);
					'step 3'
					if(result.bool==false){
						trigger.excluded.push(player);
						player.gain(trigger.cards,"gain2");
					}
					else{
						trigger.player.gainPlayerCard(player);
					}
				},
				ai:{
					effect:{
						target:function(card,player,target,current){
							if(card.name=='sha'&&get.attitude(player,target)<0){
								return 0.3;
							}
						},
					},
				},
			}
			lib.translate.shouxi_info='当你成为【杀】或伤害性锦囊牌的目标后，你可声明一种未以此法声明过的基本牌或锦囊牌的牌名。若使用者弃置一张你声明的牌，其获得你的一张牌；若否，则此牌对你无效且你获得之';
        });
    }				
			
	if(config.xinrehuatuo){		
		lib.arenaReady.push(function(){
            lib.skill.jijiu={        
				enable:'chooseToUse',
				viewAsFilter:function(player){
					return player!=_status.currentPhase&&player.countCards('hes',{color:'red'})>0;
				},
				filterCard:function(card){
					return get.color(card)=='red';
				},
				//group:"sgyj_jijiu",
				position:'hes',
				viewAs:{name:'tao'},
				prompt:'将一张红色牌当桃使用',
				precontent:function(){
                    var cards=event.result.cards;                        
                    var he=player.getCards('he');                   
                    if(cards.length==1&&he.length==1&&cards[0]==he[0]){
                        player.addTempSkill("sgyj_jijiu");
                    }                   
                },
				onuse:function (result,player){
					
				},
				check:function(card){return 15-get.value(card)},
				ai:{
					threaten:1.5,
				},
			}
			lib.translate.jijiu_info='你的回合外，你可以将一张红色牌当做【桃】使用，若此牌是你的手牌区或装备区内的最后一张牌，此效果+1。';
        });
    }																
	if(config.xinregongsunzan){		
		lib.arenaReady.push(function(){
            lib.skill.reyicong={
				mod:{
					globalFrom:function(from,to,current){
						return current-1;
					},
					globalTo:function(from,to,current){
						return current+1;
					},
				},
			},	
			lib.skill.reqiaomeng={        
				audio:'qiaomeng',
				trigger:{source:'damageSource'},
				direct:true,
				group:"reqiaomeng2",
				filter:function(event,player){
					if(event._notrigger.contains(event.player)) return false;
					return event.card&&event.card.name=='sha'&&event.player.countDiscardableCards(player,'hej');
				},
				content:function(){
					"step 0"
					player.discardPlayerCard(get.prompt('reqiaomeng',trigger.player),'hej',trigger.player).set('logSkill',['reqiaomeng',trigger.player]);
					"step 1"
					if(result.bool){
						var card=result.cards[0];
						if(get.position(card)=='d'){
							if(get.subtype(card)=='equip3'||get.subtype(card)=='equip4'){
								player.gain(card,player,'gain2');
							}
						}
					}
				},
			}
			lib.translate.reyicong_info='锁定技，你计算与其他角色的距离时-1，其他角色计算与你的距离时+1。';
			lib.translate.reqiaomeng_info='当你使用【杀】对一名角色造成伤害后，你可以弃置该角色区域内的一张牌。若此牌是坐骑牌，你于此牌置入弃牌堆时获得之。你可以装备两张相同类型的坐骑牌';
        });
    }
	if(config.xinrehuaxiong){		
		lib.arenaReady.push(function(){
            lib.skill.reyaowu={        
				trigger:{
					player:"damageBegin3",
				},				
				audio:2,
				group:"reyaowu2",
				filter:function (event){
					return event.card&&event.card.isCard&&event.source&&event.source.isAlive();
				},
				forced:true,
				check:function (event){
					if(event.card){
						return get.color(event.card)=='black';
					}
				},
				content:function (){
					if(get.color(trigger.card)!='red') player.useCard({name:'juedou'},trigger.source,false);
					else trigger.source.useCard({name:'juedou'},player,false);
				},
				ai:{
					effect:{
						target:function (card,player,target,current){
							if(card.name=='sha'&&(get.color(card)=='red')&&get.attitude(player,target)<=0){
								return [1,0.8,1,0];
							}
							if(card.name=='sha'&&(get.color(card)=='black')){
								return [1,0.4];
							}
						},
					},
				},
			}
			lib.translate.reyaowu_info='锁定技，当你受到牌造成的伤害后，若此牌为红色视为其对你使用一张【决斗】，否则视为你对其使用一张【决斗】，若造成伤害。伤害来源摸两张牌。';
        });
    }
	if(config.xinjiaxu){		
		lib.arenaReady.push(function(){
            lib.skill.luanwu={        
				audio:2,
				unique:true,
				enable:'phaseUse',
				limited:true,
				skillAnimation:'epic',
				animationColor:'thunder',
				filterTarget:function(card,player,target){
					return target!=player;
				},
				selectTarget:-1,
				multitarget:true,
				multiline:true,
				content:function(){
					"step 0"
					player.awakenSkill('luanwu');
					event.current=player.next;
					event.currented=[];
					"step 1"
					event.currented.push(event.current);
					event.current.animate('target');
					event.current.chooseToUse('乱武：使用一张杀或流失一点体力',{name:'sha'},function(card,player,target){
						if(player==target) return false;
						if(!player.canUse('sha',target)) return false;
						if(get.distance(player,target)<=1) return true;
						if(game.hasPlayer(function(current){
							return current!=player&&get.distance(player,current)<get.distance(player,target);
						})){
							return false;
						}
						return true;
					});
					"step 2"
					if(result.bool==false){ 
						event.current.loseHp();
						player.chooseControl().set('choiceList',['获得'+get.translation(event.current)+'区域内的一张牌','弃置'+get.translation(event.current)+'区域内的一张牌']).set('ai',function(){            		                        
                    if(get.attitude(player,event.current)<=0) return 0;
					if(get.attitude(player,event.current)>0&&event.current.countCards('j')) return 0;
						return 1;
                    });
					}
					"step 3"
					if(result.index==0){                       
		            	player.gainPlayerCard(event.current,'hej',1);			
					}
					else if(result.index==1){            
					    player.discardPlayerCard(event.current,'hej',1);
                    }						
					"step 4"
					event.current=event.current.next;
					if(event.current!=player&&!event.currented.contains(event.current)){
						game.delay(0.5);
						event.goto(1);
					}
				},
				ai:{
					order:1,
					result:{
						player:function(player){
							if(lib.config.mode=='identity'&&game.zhu.isZhu&&player.identity=='fan'){
								if(game.zhu.hp==1&&game.zhu.countCards('h')<=2) return 1;
							}
							var num=0;
							var players=game.filterPlayer();
							for(var i=0;i<players.length;i++){
								var att=get.attitude(player,players[i]);
								if(att>0) att=1;
								if(att<0) att=-1;
								if(players[i]!=player&&players[i].hp<=3){
									if(players[i].countCards('h')==0) num+=att/players[i].hp;
									else if(players[i].countCards('h')==1) num+=att/2/players[i].hp;
									else if(players[i].countCards('h')==2) num+=att/4/players[i].hp;
								}
								if(players[i].hp==1) num+=att*1.5;
							}
							if(player.hp==1){
								return -num;
							}
							if(player.hp==2){
								return -game.players.length/4-num;
							}
							return -game.players.length/3-num;
						},
					},
				},
			}
			lib.translate.luanwu_info='限定技，出牌阶段，你可令除你外的所有角色依次对与其距离最近的另一名角色使用一张【杀】，否则失去1点体力。然后你可以获得或弃置失去体力角色区域内的一张牌';
        });
        }
    if(config.xinlijue){		
		lib.arenaReady.push(function(){
            lib.skill.xinfu_yisuan={        
				usable:1,
				audio:2,
				trigger:{
					player:"useCardEnd",
				},
				check:function (event,player){
					return get.value(event.cards)+player.maxHp*2-18>0;
				},
				filter:function (event,player){
					return player.isPhaseUsing()&&get.type(event.card)=='trick'&&event.cards.filterInD().length>0;
				},
				content:function (){
					player.loseMaxHp();
					player.useCard(trigger.cards,trigger.targets,false);
					player.gain(trigger.cards.filterInD(),'gain2','log');
				},
			}
			lib.translate.xinfu_yisuan_info='出牌阶段限一次，当你使用的锦囊牌进入弃牌堆时，你可以减1点体力上限，额外结算一次，然后你从弃牌堆获得之。';
        });
        }
    if(config.xinlixun){		
		lib.arenaReady.push(function(){
            lib.skill.lslixun_fate={     							   
				audio:'lslixun',
				trigger:{player:'phaseUseBegin'},
				forced:true,
				filter:function(event,player){
					return player.countMark('lslixun')>0;
				},
				content:function(){
					'step 0'
					event.forceDie=true;
					_status.lslixun=player.countMark('lslixun');
					player.judge(function(card){
						if(get.number(card)<_status.lslixun) return -_status.lslixun;
						return 1;
					});
					'step 1'
					delete _status.lslixun;
					if(!result.bool){
						player.chooseToDiscard([1,player.countMark('lslixun')],'h').ai=lib.skill.qiangxi.check;
					}
					else{
					    player.draw(2);
					    event.finish();
					}    
					'step 2'
					var num=player.countMark('lslixun');
					if(result.cards&&result.cards.length) num-=result.cards.length;
					if(num) player.loseHp(num);
				},
			}
        lib.translate.lslixun_fate_info='锁定技，当你受到伤害时，你防止此伤害，然后获得等同于伤害值的“珠”标记。出牌阶段开始时，你进行判定，若结果点数小于“珠”的数量，你弃置等同于“珠”数量的手牌（若弃牌数不够，则失去剩余数量的体力值）。若结果点数大于“珠”的数量 ，则你摸两张牌。';
        });
        }
			     
     if(config.xinlusu){
		lib.arenaReady.push(function(){
            lib.skill.dimeng={     							
				enable:'phaseUse',
				usable:1,
				position:'he',
				//group:"sgyj_dimeng",
				filterCard:function(){
					if(ui.selected.targets.length==2) return false;
					return true;
				},
				selectCard:[0,Infinity],
				selectTarget:2,
				complexCard:true,
				filterTarget:function(card,player,target){
					if(player==target) return false;
					if(ui.selected.targets.length==0) return true;
					return (Math.abs(ui.selected.targets[0].countCards('h')-target.countCards('h'))==
						ui.selected.cards.length);
				},
				multitarget:true,
				multiline:true,
				complexSelect:true,
				content:function(){			
					'step 0'
					targets[0].swapHandcards(targets[1]);	
					'step 1'
					if(!player.countCards('h')){
					    event.goto(2);
					}else{
					    event.finish();
					}
					'step 2'																																					
					var list=[];   
					for(var i=0;i<lib.inpile.length;i++){
						var name=lib.inpile[i];	
						var card={name:lib.inpile[i]}; 				
							if(name=='sha'){
								list.push(['基本','','sha']);
								list.push(['基本','','sha','fire']);
								list.push(['基本','','sha','thunder']);
								list.push(['基本','','sha','ice']);
							}
							else if(!get.tag(card,'damage')&&get.type(name)=='trick') list.push(['锦囊','',name]);							
							else if(get.type(name)=='basic') list.push(['基本','',name]);
						}							
							if(list.length){
								player.chooseButton(['是否视为使用一张基本牌或无伤害性锦囊牌？',[list,'vcard']]).set('ai',function(button){
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
											if(card.nature=='thunder'||card.nature=='ice') return 2.92;
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
					'step 3'
					if(result&&result.bool&&result.links[0]){
						var card={name:result.links[0][2],nature:result.links[0][3]};
						player.chooseUseTarget(card,true);
					}				
				},
				check:function(card){
					var list=[],player=_status.event.player;
					var num=player.countCards('he');
					var count;
					var players=game.filterPlayer();
					for(var i=0;i<players.length;i++){
						if(players[i]!=player&&get.attitude(player,players[i])>3) list.push(players[i]);
					}
					list.sort(function(a,b){
						return a.countCards('h')-b.countCards('h');
					});
					if(list.length==0) return -1;
					var from=list[0];
					list.length=0;

					for(var i=0;i<players.length;i++){
						if(players[i]!=player&&get.attitude(player,players[i])<1) list.push(players[i]);
					}
					if(list.length==0) return -1;
					list.sort(function(a,b){
						return b.countCards('h')-a.countCards('h');
					});
					if(from.countCards('h')>=list[0].countCards('h')) return -1;
					for(var i=0;i<list.length&&from.countCards('h')<list[i].countCards('h');i++){
						if(list[i].countCards('h')-from.countCards('h')<=num){
							count=list[i].countCards('h')-from.countCards('h');break;
						}
					}
					if(count<2&&from.countCards('h')>=2) return -1;
					if(ui.selected.cards.length<count) return 11-get.value(card);
					return -1;
				},
				ai:{
					order:6,
					threaten:3,
					expose:0.9,
					noh:true,
					result:{
						target:function(player,target){
							var list=[];
							var num=player.countCards('he');
							var players=game.filterPlayer();
							if(ui.selected.targets.length==0){
								for(var i=0;i<players.length;i++){
									if(players[i]!=player&&get.attitude(player,players[i])>3) list.push(players[i]);
								}
								list.sort(function(a,b){
									return a.countCards('h')-b.countCards('h');
								});
								if(target==list[0]) return get.attitude(player,target);
								return -get.attitude(player,target);
							}
							else{
								var from=ui.selected.targets[0];
								for(var i=0;i<players.length;i++){
									if(players[i]!=player&&get.attitude(player,players[i])<1) list.push(players[i]);
								}
								list.sort(function(a,b){
									return b.countCards('h')-a.countCards('h');
								});
								if(from.countCards('h')>=list[0].countCards('h')) return -get.attitude(player,target);
								for(var i=0;i<list.length&&from.countCards('h')<list[i].countCards('h');i++){
									if(list[i].countCards('h')-from.countCards('h')<=num){
										var count=list[i].countCards('h')-from.countCards('h');
										if(count<2&&from.countCards('h')>=2) return -get.attitude(player,target);
										if(target==list[i]) return get.attitude(player,target);
										return -get.attitude(player,target);
									}
								}
							}
						}
					}
				},
        }
        lib.translate.dimeng_info='出牌阶段限一次，你可以选择两名其他角色并弃置X张牌（X为这两名角色手牌数的差），然后令这两名角色交换手牌。若此时你没有手牌，你可视为使用任意一种基本牌或无伤害性的普通锦囊牌。';
        });
        }
    if(config.xinxiahoushi){
		lib.arenaReady.push(function(){
            lib.skill.yanyu2={     							
				trigger:{player:'phaseUseEnd'},
				direct:true,
				filter:function(event,player){
					return player.getHistory('lose',function(evt){
						var evt2=evt.getParent();
						return evt2.name=='useSkill'&&evt2.skill=='yanyu'&&evt.getParent(3)==event;
					}).length>=2;
				},
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('yanyu'),'令一名男性角色摸两张牌',function(card,player,target){
						return target.sex=='male'&&target!=player;
					}).set('ai',function(target){
						return get.attitude(_status.event.player,target)>0;
					});
					'step 1'
					if(result.bool){
						player.logSkill('yanyu',result.targets);
						result.targets[0].draw(2);
						result.targets[0].chooseBool('是否令'+get.translation(player)+'回复一点体力(若其没受伤则其摸一张牌)？').set('ai',function(){               
                        if(get.attitude(result.targets[0],player)>0) return true;       
                        return false;
                        });
                    }
                     'step 2'
                    if(result.bool){
                        if(player.isHealthy()){
                            player.draw();
                        }else{
                            player.recover();
                        }
					}
				},				
        }
        lib.translate.yanyu_info='出牌阶段，你可以重铸【杀】；出牌阶段结束时，若你以此法了重铸两张或更多【杀】，令一名男性角色摸两张牌 该角色可以令你恢复1点体力（若你没受伤则改摸一张牌）。';
        });
        }
    if(config.xinshenzhugeliang){
		lib.arenaReady.push(function(){
            lib.skill.qixing2={     							
				trigger:{player:['damageEnd','phaseDrawAfter']},
				direct:true,
				filter:function(event,player){
					return player.storage.qixing&&player.storage.qixing.length;
				},
				content:function(){
					"step 0"
					player.chooseCard('选择任意张手牌与“星”交换',[1,Math.min(player.countCards('h'),player.storage.qixing.length)]).set('promptx',[player.storage.qixing]).ai=function(card){
						var val=get.value(card);
						if(val<0) return 10;
						if(player.skipList.contains('phaseUse')){
							return val;
						}
						return -val;
					};
					"step 1"
					if(result.bool){
						player.logSkill('qixing');
						player.lose(result.cards,ui.special,'toStorage');
						player.storage.qixing=player.storage.qixing.concat(result.cards);
						player.syncStorage('qixing');
						event.num=result.cards.length;
					}
					else{
						event.finish();
					}
					"step 2"
					player.chooseCardButton(player.storage.qixing,'选择'+event.num+'张牌作为手牌',event.num,true).ai=function(button){
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
					"step 3"
					player.gain(result.links,'fromStorage');
					for(var i=0;i<result.links.length;i++){
						player.storage.qixing.remove(result.links[i]);
					}
					player.syncStorage('qixing');
					if(player==game.me&&_status.auto){
						game.delay(0.5);
					}
				}
			
			}
			lib.skill.kuangfeng2={									
				trigger:{source:'damageBegin'},
				filter:function(event){
					if(event.nature=='fire') return true;
					return false;
				},
				mark:true,
				intro:{
					content:'已获得狂风标记'
				},
				forced:true,
				content:function(){
					trigger.num++;
				},
				ai:{
					effect:{
						target:function(card,player,target,current){
							if(get.tag(card,'fireDamage')) return 1.5;
						},
					},
				},				
        }
        lib.translate.qixing_info='游戏开始时，你将牌堆顶的七张牌扣置于你的武将牌上，称为“星”，然后你可以用任意张手牌替换等量的“星”；摸牌阶段结束时或当你受到伤害时，你可以用任意张手牌替换等量的“星”。';
        lib.translate.kuangfeng_info='结束阶段，你可以移去一张“星”并选择一名角色，然后直到你的下回合开始之前，当该角色造成火焰伤害时，此伤害+1。';
        });
        }        
    if(config.xinwutugu){
		lib.arenaReady.push(function(){
            lib.skill.ranshang={     			
				audio:2,
				trigger:{player:'damageEnd'},
				filter:function (event,player){
					return event.nature=='fire';
				},
				forced:true,
				check:function(){
					return false;
				},
				mod:{
					targetEnabled:function (card,player,target,now){					
						if(card.name=='nanman'||card.name=='wanjian') return false;						
					},
				},
				content:function(){
					player.addMark('ranshang',trigger.num);
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
				group:'ranshang2',
			}
			lib.skill.ranshang2={
				audio:2,
				trigger:{player:'phaseJieshuBegin'},
				forced:true,
				filter:function(event,player){
					return player.countMark('ranshang')>0;
				},
				content:function(){
					player.loseHp(player.countMark('ranshang'));
					player.draw(Math.min(5,player.countMark('ranshang')));
					if(player.countMark('ranshang')>2){
						player.loseMaxHp(2);						
					}
				},						
        }
        lib.translate.ranshang_info='锁定技，【南蛮入侵】和【万箭齐发】对你无效；当你受到1点火焰伤害后，你获得1枚“燃”标记；结束阶段，你失去X点体力并摸X(至多为5)张牌（X为“燃”标记的数量），然后若“燃”标记的数量大于2，则你减2点体力上限。';
        });
        }
        
      if(config.xinshenguanyu){
		lib.arenaReady.push(function(){
            lib.skill.wushen={     
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
					cardUsable:function(card,player,num){
					    if(get.suit(card)=='heart') return num+Infinity;
				    },
				},
				//audio:['wushen',2],
				audio:2,
				group:"zzb_wushen2",
				trigger:{player:['useCard1','respond']},
				firstDo:true,
				forced:true,
				filter:function (event,player){
					return event.card.name=='sha'&&!event.skill&&
					event.cards.length==1&&get.suit(event.cards[0])=='heart';
				},
				content:function(){},
				ai:{
					effect:{
						target:function(card,player,target,current){
							if(get.tag(card,'respondSha')&&current<0) return 0.6
						}
					},
					respondSha:true,
					order:4,
					useful:-1,
					value:-1
				},			
        }
        lib.translate.wushen_info='锁定技，你的红桃手牌和判定牌均视为【杀】；锁定技，你使用红桃【杀】无距离、次数限制且无视防具';
        });
        }
        
      if(config.xinzhoutai){
		lib.arenaReady.push(function(){
            lib.skill.buqu={     			
				audio:2,
				audioname:['key_yuri'],
				trigger:{player:'chooseToUseBefore'},
				forced:true,
				filter:function(event,player){return event.type=='dying'&&player.isDying()&&event.dying==player},
				content:function(){
					"step 0"
					event.card=get.cards()[0];
					if(player.storage.buqu==undefined) player.storage.buqu=[];
					player.storage.buqu.push(event.card);
					player.syncStorage('buqu');
					//event.trigger("addCardToStorage");
					game.cardsGotoSpecial(event.card);
					player.showCards(player.storage.buqu,'不屈')
					player.markSkill('buqu');
					"step 1"
					for(var i=0;i<player.storage.buqu.length-1;i++){
						if(get.number(event.card)&&get.number(event.card)==get.number(player.storage.buqu[i])){
							player.storage.buqu.remove(event.card);
							player.syncStorage('buqu');
							player.markSkill('buqu');
							game.cardsDiscard(event.card);
							return;
						};
					}
					trigger.cancel();
					trigger.result={bool:true};
					if(player.hp<=0){
						player.recover(1-player.hp);
						if(player.countCards('h')<player.storage.buqu.length){
						  player.draw(player.storage.buqu.length-player.countCards('h'));
						}
					}
				},
				mod:{
					maxHandcardBase:function(player,num){
						if(get.mode()!='guozhan'&&player.storage.buqu&&player.storage.buqu.length) return player.storage.buqu.length;
					},
				},
				ai:{
					save:true,
					mingzhi:true,
					skillTagFilter:function(player,tag,target){
						if(player!=target) return false;
					},
				},
				intro:{
					content:'cards',
					onunmark:function(storage,player){
						if(storage&&storage.length){
							player.$throw(storage,1000);
							game.cardsDiscard(storage);
							delete player.storage.buqu;
						}
					}
				}			
        }
        lib.translate.buqu_info='锁定技，当你处于濒死状态时，你将牌堆顶的一张牌置于你的武将牌上，称为“创”。若此牌点数与已有的“创”点数均不同，你将体力回复至1点；此时，若你的手牌数小于当前“创”的数量，将你手牌补至等同于“创”的数量。若点数相同，将此牌置入弃牌堆。若你的武将牌上有“创”，你的手牌上限与“创”的数量相等。';
        });
        }
        
      if(config.xinshenlvmeng){
      lib.arenaReady.push(function(){
      lib.skill.shelie={   
				audio:2,
				trigger:{player:'phaseDrawBegin1'},
				filter:function(event,player){
					return !event.numFixed;
				},
				content:function(){
					"step 0"
					trigger.changeToZero();
					event.cards=get.cards(5);
					game.cardsGotoOrdering(event.cards);
					var suits=[];
						for(var i=0;i<event.cards.length;i++){
							suits.add(get.suit(event.cards[i]));
						}
						if(suits.length==4){
							player.gain(event.cards,'gain2');
							event.finish();
						}
			         else{
					event.videoId=lib.status.videoId++;
					game.broadcastAll(function(player,id,cards){
						var str;
						if(player==game.me&&!_status.auto){
							str='涉猎：获取花色各不相同的牌';
						}
						else{
							str='涉猎';
						}
						var dialog=ui.create.dialog(str,cards);
						dialog.videoId=id;
					},player,event.videoId,event.cards);
					event.time=get.utc();
					game.addVideo('showCards',player,['涉猎',get.cardsInfo(event.cards)]);
					game.addVideo('delay',null,2);
					}
					"step 1"
					var next=player.chooseButton([0,5],true);
					next.set('dialog',event.videoId);
					next.set('filterButton',function(button){
						for(var i=0;i<ui.selected.buttons.length;i++){
							if(get.suit(ui.selected.buttons[i].link)==get.suit(button.link)) return false;
						}
						return true;
					});
					next.set('ai',function(button){
						return get.value(button.link,_status.event.player);
					});
					"step 2"
					if(result.bool&&result.links){
						event.cards2=result.links;
					}
					else{
						event.finish();
					}
					var time=1000-(get.utc()-event.time);
					if(time>0){
						game.delay(0,time);
					}
					"step 3"
					game.broadcastAll('closeDialog',event.videoId);
					var cards2=event.cards2;
					player.gain(cards2,'log','gain2');
				},
				ai:{
					threaten:1.2
				}
			}
			lib.skill.gongxin={  
				audio:2,
				audioname:['re_lvmeng','gexuan'],
				enable:'phaseUse',
				usable:1,
				filterTarget:function(card,player,target){
					return target!=player&&target.countCards('h');
				},
				content:function(){
					"step 0"
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
						return get.suit(button.link)=='heart';
					}).set('dialog',event.videoId);
					"step 1"
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
						player.chooseControl('gongxin_discard','gongxin_top','获得此牌');
					}
					else{
						if(player.isOnline2()){
							player.send('closeDialog',event.videoId);
						}
						event.dialog.close();
						event.finish();
					}
					"step 2"
					if(player.isOnline2()){
						player.send('closeDialog',event.videoId);
					}
					event.dialog.close();
					var card=event.card;
					if(result.control=='gongxin_top'){
						target.lose(card,ui.special);
						player.showCards(card,'置于牌堆顶');
					}
					if(result.control=='获得此牌'){
						player.gain(card,'gain2');
						event.finish();
					}
					if(result.control=='gongxin_discard'){
						target.discard(card);
						event.finish();
					}
					"step 3"
					event.card.fix();
					ui.cardPile.insertBefore(event.card,ui.cardPile.firstChild);
					game.log(player,'将',event.card,'置于牌堆顶');
				},
				ai:{
					threaten:1.5,
					result:{
						target:function(player,target){
							return -target.countCards('h');
						}
					},
					order:10,
					expose:0.4,
				}
			}
			});
			
			lib.translate.shelie_info='摸牌阶段，你可以改为亮出牌堆顶的五张牌，然后获得其中每种花色的牌各一张，若以此法亮出的牌出现了四种花色， 你获得所有亮出的牌';
			lib.translate.gongxin_info='出牌阶段限一次，你可以观看一名其他角色的手牌，然后你可以展示其中一张红桃牌，选择一项：1.弃置此牌；2.将此牌置于牌堆顶，3.获得此牌';
			}
			
		if(config.xinshenliubei){
		lib.arenaReady.push(function(){
			lib.skill.nzry_longnu={			
				mark:true,
				locked:true,
				marktext:'龙',
				intro:{
					content:function(storage,player,skill){
						if(player.storage.nzry_longnu==true) return '锁定技，出牌阶段开始时，你减1点体力上限并摸一张牌，然后本回合你的黑色锦囊牌均视为雷杀且无使用次数限制';
						return '锁定技，出牌阶段开始时，你流失一点体力并摸一张牌，然后本回合你的红色基本牌均视为火杀且无距离限制';
					},
				},
				audio:2,
				trigger:{
					player:'phaseUseBegin'
				},
				forced:true,
				content:function(){
					if(player.storage.nzry_longnu==true){
						player.storage.nzry_longnu=false;
						player.loseMaxHp();
						player.draw();
						player.addTempSkill('nzry_longnu_2',{player:'phaseAfter'});
					}else{
						player.storage.nzry_longnu=true;
						player.loseHp();
						player.draw();
						player.addTempSkill('nzry_longnu_1',{player:'phaseAfter'});
					};
				},
				subSkill:{
					'1':{
						mod:{
							cardname:function(card,player){
								if(['basic'].contains(lib.card[card.name].type)&&get.color(card)=='red') return 'sha';
							},
							cardnature:function(card,player){
								if(get.color(card)=='red') return 'fire';
							},
							targetInRange:function(card){
								if(get.color(card)=='red') return true;
							},
						},
						ai:{
							effect:{
								target:function(card,player,target,current){
									if(get.tag(card,'respondSha')&&current<0) return 0.6
								}
							},
							respondSha:true,
						},
					},
					'2':{
						prompt:'本回合你的黑色锦囊牌均视为雷杀且无使用次数限制',
						mod:{
							cardname:function(card,player){
								if(['trick','delay'].contains(lib.card[card.name].type)&&get.color(card)=='black') return 'sha';
							},
							cardnature:function(card,player){
								if(['trick','delay'].contains(lib.card[card.name].type)) return 'thunder';
							},
							cardUsable:function(card,player){
								if(card.name=='sha'&&card.nature=='thunder') return Infinity;
							},
						},
						ai:{
							effect:{
								target:function(card,player,target,current){
									if(get.tag(card,'respondSha')&&current<0) return 0.6
								}
							},
							respondSha:true,
						},
					},
				},
			},
						            
        lib.translate.nzry_longnu_info='转换技，锁定技，出牌阶段开始时，①:你失去1点体力并摸一张牌，然后本回合你的红色基本牌牌均视为火【杀】且无距离限制;②:你减1点体力上限并摸一张牌，然后本回合你的黑色锦囊牌均视为雷【杀】且无次数限制';
        });
        }
    // ---------------------------------------wujianglang------------------------------------------//		
	
	if(config.sanguoyijuan){
		for(var i in lib.characterPack['sanguoyijuan']) {
			if(lib.character[i][4].indexOf("forbidai")<0) lib.character[i][4].push("forbidai");
		};
	};
	
},precontent:function (sgyj){     		    
    	
   if(sgyj.enable){			
     game.import('character',function(){			
			 var sanguoyijuan={
				name:'sanguoyijuan',
				connect:true,
				characterSort:{
	 		sanguoyijuan:{
	 		    //奇人隐士:
				"sgyj_qrys":["sgyj_pujing","sgyj_zhixushangren","sgyj_luotoushi","sgyj_wuguowuniv",
				"sgyj_hengai","sgyj_quexiaojiang","sgyj_zhugeguo","sgyj_zhangxinqi","sgyj_zhoubuyi",
				"sgyj_lengshouguang"],
				//齿德俱尊:
				"sgyj_cdjz":["sgyj_qiaoguolao","sgyj_guoenshumu","sgyj_xushuzhimu","sgyj_yimou","sgyj_dingfuren"],
				//外族英豪:
				"sgyj_wzyh":["sgyj_huaxie","sgyj_kouloudun","sgyj_remuludawang","sgyj_suli",
				"sgyj_eheshaoge","sgyj_rewutugu","sgyj_langboduo","sgyj_rejihuo","sgyj_xiuwulu",
				"sgyj_tufashujineng","sgyj_liubao","sgyj_mengyou","sgyj_tukuilai","sgyj_tuobaliwei",
				"sgyj_langjili","sgyj_kebineng","sgyj_ahuinan"
				],				
			    //救死扶伤:
				"sgyj_jsfs":["jp_jiping","zzj_zhangzhongjing","df_dongfeng","sgyj_zhangzhongjing"],
				//国色天香:
				"sgyj_gstx":["sgyj_yunying","sgyj_jingzhu","sgyj_caohua","sgyj_wangmeiren","sgyj_laiyinger",
				"sgyj_relaiyinger","sgyj_hushi","sgyj_quanhuanghou","sgyj_yuwenjun","sgyj_wangtaowangyue",
				"sgyj_zhangzhang","sgyj_xiahouhui","sgyj_xiahouguangji","sgyj_liufuren"],
				//妄自尊大:
				"sgyj_wzzd":["sgyj_niuxian","sgyj_liuli","sgyj_qinqi","sgyj_xiahouen"],
				//凤舞龙盘:
				"sgyj_fwlp":["sgyj_dianman","sgyj_ganruonan","sgyj_liuhui","sgyj_mengxiang",
				"sgyj_shiyi","sgyj_caoxiong","sgyj_caowei","sgyj_malin","sgyj_zhugeyun",
				"sgyj_qingqing","sgyj_yunying","sgyj_wangdao","sgyj_caoxian","sgyj_yanziqing",
				"sgyj_furong","sgyj_taishizhaorong"
				],
				//水性杨花:
				"sgyj_sxyh":["sgyj_buba","sgyj_jiananfeng","sgyj_zhaoyu"],
				//祸国叛乱:
				"sgyj_hgpl":["sgyj_zhangjuzhangchun","sgyj_mengqiu","sgyj_penghu","sgyj_gongdu","sgyj_simajun",
				"sgyj_pengqi","sgyj_mayuanyi","sgyj_shichangshi","sgyj_sunjunsunlin",
				"sgyj_niufu","sgyj_simaliang","sgyj_simayong","sgyj_wangmi"],
				//神将：
				"sgyj_shen":["sgyj_shenzhurong","sgyj_shenhuangyueying","sgyj_shendianwei","sgyj_shendiaochan","sgyj_shenlvbu"],
				
			},
		},	
		character:{
           	//《三国名医》扩展：
            "jp_jiping":["male","qun",3,["jp_lieyi","jp_guyao"],[]],
            "zzj_zhangzhongjing":["male","qun",3,["zzj_caifang","zzj_zuotang"],[]],
            "df_dongfeng":["male","wu",3,["df_zhixin","df_fushang"],[]],
            //《三国遗卷》扩展：
            "sgyj_wangrong":["female","qun",2,["sgyj_conggui","sgyj_yinzhuo","sgyj_hongwu"],[]],
			"sgyj_yunying":["female","wei",3,["sgyj_yunyu","sgyj_yuyun"],[]],
            "sgyj_yimou":["female","qun",3,["sgyj_congyi"],[]],
			"sgyj_eheshaoge":["male","qun","4/7",["sgyj_xuejiao"],[]],
			//"sgyj_liuli":["male","qun",4,["sgyj_hanjiang"],[]],
			"sgyj_liuli":["male","qun",5,["sgyj_sandao"],[]],
			"sgyj_liubao":["male","qun",5,["sgyj_langyi"],[]],
			"sgyj_qiaoguolao":["male","wu",3,["sgyj_kuishu","sgyj_zexu"],[]],
			"sgyj_caohua":["female","wei",3,["sgyj_doukou","sgyj_yihui"],[]],
			"sgyj_wangtaowangyue":["female","shu",3,["sgyj_shuangfei","sgyj_shuangjiao"],[]],
			"sgyj_ganruonan":["female","wu",4,["sgyj_jinfan","sgyj_xianiv"],[]],
			"sgyj_mengxiang":["female","shu",4,["sgyj_feidao","sgyj_qiman"],[]],
			//"sgyj_shichangshi":["none","qun",1,["sgyj_beitai","sgyj_duanxiu","sgyj_longyang","sgyj_hundun"],[]],
			"sgyj_shichangshi":["none","qun",1,["sgyj_beitai","sgyj_duanxiu","sgyj_longyang"],[]],
			//"sgyj_wutugu":["male","qun","5/15",["sgyj_ranshang","hanyong"],[]],
			"sgyj_liuhui":["female","shu",3,["sgyj_zhaozhao","sgyj_zhanxing"],[]],
			//"sgyj_zhoutai":["male","wu","4/13",["sgyj_buqu","fenji"],[]],
			"sgyj_xiahouguangji":["female","jin",3,["sgyj_tonghuan","sgyj_siluan"],[]],
			"sgyj_langboduo":["male","qun",10,["sgyj_bihuo","sgyj_guxia"],[]],
			"sgyj_shendiaochan":["female","shen",3,["sgyj_baiyue","sgyj_hunchan"],[]],
			"sgyj_mayuanyi":["male","qun",4,["sgyj_xinyan","sgyj_juyi"],[]],
			"sgyj_gongdu":["male","qun",4,["sgyj_xinyan","sgyj_juzu"],[]],
			"sgyj_qingqing":["female","wu",3,["sgyj_fenshu","sgyj_yanmu"],[]],
			"sgyj_xiuwulu":["male","qun",5,["sgyj_ziru"],[]],
			"sgyj_quexiaojiang":["male","qun",4,["sgyj_wuguan","sgyj_dizhong"],[]],
			"sgyj_dingfuren":["female","wei",3,["sgyj_duju","sgyj_yide"],[]],
			"sgyj_hushi":["female","shu",3,["sgyj_guiye","sgyj_yinhuo"],[]],
			"sgyj_zhugeyun":["female","shu",3,["sgyj_qiyuan","sgyj_fuyin","wwwpiao"],[]],
			"sgyj_zhugeliangsenying":["male","wu",3,["sgyj_chiyuan","sgyj_qexi"],[]],
			"sgyj_wangmeiren":["female","qun",3,["sgyj_fengyin","sgyj_congmin"],[]],
			"sgyj_shendianwei":["male","shen",6,["sgyj_sidou","sgyj_ezhan"],[]],
			"sgyj_zhangzhang":["female","shu",3,["sgyj_shenxian","sgyj_huashang"],[]],
			"sgyj_xiahouhui":["female","wei",3,["sgyj_chuchu","sgyj_yashi"],[]],
			"sgyj_taorui":["male","wu",5,["sgyj_jienu"],[]],
			"sgyj_yizhen":["male","wei",4,["sgyj_zhengjun","sgyj_yiyong"],[]],
			"sgyj_zhenji":['female','wei',3,['luoshen','sgyj_jinghong'],[]],
			"sgyj_zhouyu":['male','wu',3,['reyingzi','sgyj_fanjian'],[]],
			"sgyj_xiaoqiao":['female','wu',3,['sgyj_tianxiang','sgyj_hongyan'],[]],
			"sgyj_chengong":['male','qun',3,['sgyj_mingce','sgyj_zhichi'],[]],
			//"sgyj_jihuo":['male','qun',16,['sgyj_manyi'],[]],
			"sgyj_rejihuo":['male','shu',16,['sgyj_yihu'],[]],
			"sgyj_tufashujineng":['male','qun','4/6',['sgyj_zhengjiang','sgyj_chihu','sgyj_yuanxing'],[]],
			"sgyj_luotoushi":['female','wu',1,['sgyj_heshen','sgyj_litou'],[]],
			"sgyj_malin":['female','shu','2/4',['sgyj_qinying','sgyj_zhaoyue'],[]],
			"sgyj_cuishi":['male','qun','3/5',['sgyj_shouhuo','sgyj_shiliang','sgyj_bozhong'],[]],
			"sgyj_wuguowuniv":['female','wu',3,['sgyj_shenyou','sgyj_maidu','sgyj_zhanbu'],[]],
			"sgyj_guosi":['male','qun','4/5',['sgyj_tanbei','sgyj_sidao'],[]],
			"sgyj_zhangzhongjing":['male','qun',3,['sgyj_quhan','sgyj_santang'],[]],
			"sgyj_shenlvbu":['male','shen',6,['baonu','wumou','sgyj_wuqian','ol_shenfen'],['qun']],
			"sgyj_wangyi":['female','wei',4,['zhenlie','sgyj_miji'],[]],
			"sgyj_shenhuangyueying":['female','shen',3,['sgyj_xiujing','sgyj_qiaoxie','sgyj_qiaoshou'],['shu']],
			"sgyj_sunjunsunlin":['male','wu',2,['sgyj_yizhu','sgyj_qinchao','sgyj_quanlu'],[]],
			"sgyj_penghu":['male','wu',4,['sgyj_huaquan'],[]],
			"sgyj_pengqi":['female','wu','3/4',['sgyj_rehuaquan','sgyj_mili'],[]],
			"sgyj_niufu":['male','qun','5/7',['sgyj_luanzhan'],[]],
			"sgyj_qinqi":['male','wei','5/6',['sgyj_kuangao'],[]],
			"sgyj_shiyi":['male','wu',3,['sgyj_jiezang','sgyj_zuoshu'],[]],
			"sgyj_caoxiong":['male','wei',3,['sgyj_beiai','sgyj_changcuan'],[]],
			"sgyj_hengai":['female','shu',3,['sgyj_yannu','sgyj_jingcen'],[]],
			"sgyj_suli":['male','qun',6,['sgyj_huansan'],[]],
			"sgyj_xushuzhimu":['female','shu',3,['sgyj_xunzi','sgyj_nianyu'],[]],
			"sgyj_guoenshumu":['female','qun',3,['sgyj_chanshen'],[]],
			"sgyj_simayong":['male','jin',4,['sgyj_jingwei','sgyj_zuizheng'],['hiddenSkill']],
			"sgyj_huaxie":['female','shu','4/6',['sgyj_manhua','sgyj_fangxin'],[]],
			"sgyj_xiahouen":['male','wei',4,['sgyj_hujian','sgyj_zhanhuo'],[]],
			"sgyj_zhixushangren":['male','qun',3,['sgyj_xuwu','sgyj_huijian','sgyj_yinli'],[]],
			"sgyj_zhugeguo":['female','shu',3,['sgyj_yuhua','sgyj_qirang'],[]],			
			"sgyj_dingli":['male','shu',4,['sgyj_tengji'],[]],
			"sgyj_dianman":['male','wei',4,['sgyj_wupo'],[]],
			"sgyj_zhangxinqi":['male','qun',5,['sgyj_yueling','sgyj_wuyu'],[]],
			//"sgyj_muludawang":['male','qun','4/5',['sgyj_qushou','sgyj_xiangzheng'],[]],			
			"sgyj_yuwenjun":['female','jin',3,['sgyj_ciyi','sgyj_guizhang'],[]],
			"sgyj_kouloudun":['male','wei',4,['sgyj_wenwu','sgyj_zhinao'],[]],
			"sgyj_simaliang":['male','jin',6,['sgyj_gaisi','sgyj_yongxiao','sgyj_sushou'],[]],			
			//"sgyj_lie":['female','wu',3,['sgyj_yongjin','sgyj_lianshui']],
			"sgyj_dongguiren":['female','qun',3,['sgyj_zhulian'],[]],
			"sgyj_mengyou":['male','shu',4,['sgyj_manyong','sgyj_shiman'],[]],			
			"sgyj_shenzhurong":['female','shen',3,['sgyj_manshen','sgyj_yanhuo','sgyj_lingyan'],['shu']],			
			"sgyj_quanhuanghou":['female','wu',3,['sgyj_shishi','sgyj_migao'],[]],			
			"sgyj_buba":['female','qun',3,['sgyj_xinyan','sgyj_duntao'],[]],			
			"sgyj_simajun":['male','jin',4,['sgyj_qinnong'],[]],
			"sgyj_niuxian":['male','wei',5,['sgyj_jinzhan'],[]],
			"sgyj_wangjun":['male','jin',4,['sgyj_dujian'],[]],			
			"sgyj_jingzhu":['female','wei',3,['sgyj_linglong','sgyj_tanxin','sgyj_zhefu'],[]],			
			"sgyj_wangdao":['male','jin',3,['sgyj_gongzhu','sgyj_zhuliu'],[]],
			"sgyj_simazhi":['male','wei',3,['sgyj_qiean','sgyj_mingbian'],[]],
			"sgyj_mengqiu":['male','qun',4,['sgyj_manxin'],[]],
			"sgyj_gongsuncheng":['male','wu',4,['sgyj_duliang'],[]],
			"sgyj_laiyinger":['female','wei',3,['sgyj_jiaoyi','sgyj_yanxiao'],[]],
			"sgyj_guomo":['male','shu',3,['sgyj_reqiaoxie','sgyj_chumou'],[]],
			"sgyj_reshiyi":['male','wu',3,['sgyj_youyou','sgyj_gaiyong'],[]],
			"sgyj_shibi":['female','wu',3,['sgyj_qiutong','sgyj_zhezhi'],[]],
			"sgyj_caowei":['male','wei',4,['sgyj_sihe','sgyj_suzhuang'],[]],
			"sgyj_pujing":['male','qun',4,['sgyj_wujie','sgyj_chaodu'],[]],
			"sgyj_rewutugu":["male","qun",15,["sgyj_lingjia","sgyj_shishou"],[]],
			"sgyj_jiananfeng":["female","jin",3,["sgyj_shezheng","sgyj_luanhua","sgyj_guanhuo"],[]],
			"sgyj_zhangjuzhangchun":["male","qun",6,["sgyj_koulve","sgyj_baobing"],[]],	
			"sgyj_tukuilai":["male","qun",4,["sgyj_fanjing"],[]],
			"sgyj_caoxian":["female","wei",3,["sgyj_xianjian","sgyj_baoshen"],[]],	
			"sgyj_yanziqing":["female","qun",4,["sgyj_linfeng"],[]],
			"sgyj_liufuren":["female","qun",3,["sgyj_pianyan","sgyj_kuji"],[]],	
			"sgyj_tuobaliwei":["male","qun",4,["sgyj_kongxian"],[]],
			"sgyj_zhaoyu":["female","qun",4,["sgyj_chuiru","sgyj_benta"],[]],
			"sgyj_furong":["female","shu",4,["sgyj_yunsheng"],[]],
			"sgyj_taishizhaorong":["female","wu",4,["sgyj_badao"],[]],
			"sgyj_langjili":["male","qun",5,["sgyj_langwei","sgyj_shenzi"],[]],
			"sgyj_wangmi":["male","jin",5,["sgyj_lehuo"],[]],
			"sgyj_zhoubuyi":["male","wei","2/6",["sgyj_jinji","sgyj_suzhi"],[]],
			"sgyj_kebineng":["male","qun",5,["sgyj_yuqi","sgyj_diqiu"],[]],
			"sgyj_ahuinan":["male","qun",4,["sgyj_zongman"],[]],
			"sgyj_relaiyinger":['female','wei',3,['sgyj_yuyin','sgyj_linxi','sgyj_xunqing'],[]],
			"sgyj_remuludawang":['male','qun','4/5',['sgyj_zongshou','sgyj_shouben'],[]],
			"sgyj_lengshouguang":["male","wei",1,["sgyj_changxi"],[]],
			
			
           },
      characterIntro:{
            //"sgyj_wangrong":"简介模板",
			"zzj_zhangzhongjing":"张仲景(约公元150~154年--约公元215~219年)，名机，字仲景，东汉南阳涅阳县(今河南省邓州市穰东镇张寨村)人。东汉末年著名医学家，被后人尊称为医圣。张仲景广泛收集医方，写出了传世巨著《伤寒杂病论》。它确立的辨证论治原则，是中医临床的基本原则，是中医的灵魂所在 。  在方剂学方面，《伤寒杂病论》也做出了巨大贡献，创造了很多剂型，记载了大量有效的方剂。其所确立的六经辨证的治疗原则，受到历代医学家的推崇。这是中国第一部从理论到实践、确立辨证论治法则的医学专著，是中国医学史上影响最大的著作之一，是后学者研习中医必备的经典著作，广泛受到医学生和临床大夫的重视",		
			"df_dongfeng":"董奉(220年-280年)，又名董平，字君异，号拔墘，候官县董墘村(今福州市长乐区古槐镇龙田村)人，东汉建安二十五年(公元220年)生。少年学医，信奉道教。年青时，曾任候官县小吏，不久归隐，在其家村后山中，一面练功，一面行医。董奉医术高明，治病不取钱物，只要重病愈者在山中栽杏5株，轻病愈者栽杏1株。数年之后，有杏万株，郁然成林。春天杏子熟时，董奉便在树下建一草仓储杏。需要杏子的人，可用谷子自行交换。再将所得之谷赈济贫民，供给行旅。后世称颂医家\"杏林春暖\"之语，盖源于此。董奉也出行在南方一带行医。有一次到交州(今广东、广西、越南北部一带)，恰遇交州太守士燮病危，垂死已3日。董奉把3粒药丸放入病人口中，用水灌下。稍后，病人手足能动，肤色逐渐转活，半日后即能坐起，4日后能说话，不久病愈。显然这是民间传说，士燮死于公元226年，此时董奉才6、7岁。由于医术高明，人们把董奉同当时谯郡的华佗、南阳的张仲景并称为\"建安三神医\"。晚年到豫章(今江西)庐山下隐居，继续行医。吴天纪四年(280年)，董奉逝世",
			"sgyj_liubao":"刘豹，南匈奴单于于扶罗之子，汉赵光文帝刘渊之父，东汉、魏晋时期南匈奴首领。188年，由于南匈奴的动乱，刘豹因此留居汉地。196年，其叔呼厨泉在於夫罗死后继位单于，刘豹则成为左贤王，后接掌了匈奴左部(匈奴五部的其中一部)，并纳被掳至匈奴的东汉女诗人蔡文姬为妻。由于其嫡子刘渊生于251年左右，所以一般相信刘豹相当长寿。《资治通鉴》第八十卷记载:世祖武皇帝上之下咸宁五年(公元279年)，会豹卒，以渊代为左部帅",
			"sgyj_niufu":"牛辅，武威郡姑臧人也，董卓的女婿，曾任中郎将，征讨白波军，不能取胜。董卓被杀时，牛辅别屯于陕地。吕布派李肃前去征讨牛辅，被牛辅击败。后来，牛辅营中有士兵半夜背叛出逃，造成内乱，牛辅以为整营皆叛，于是带着金银珠宝，独与亲信胡赤儿等五六人逾城北渡河。赤儿等人以绳索系在牛辅腰间将其从城头放下，但赤儿等因为谋财而在离地面数丈高的地方就松开了绳子使得牛辅重重摔在地上腰部受伤，而后赤儿与诸胡人将牛辅斩首，将其首级送去长安",
			"sgyj_sunjunsunlin":"孙峻（219年－256年10月19日），字子远 [1]  ，吴郡富春（今浙江富阳）人。三国时期吴国宗室、权臣，昭义中郎将孙静曾孙，定武中郎将孙暠的孙子，散骑侍郎孙恭的儿子。孙綝（chēn）（231年－259年1月18日 [1]  ），字子通，吴郡富春（今浙江杭州市富阳区）人。三国时期吴国宗室、权臣，昭义中郎将孙静曾孙、定武中郎将孙暠之孙、安民都尉孙绰的儿子。太平元年（256年），跟随文钦征伐魏国，因病去世，时年三十八岁，托付于堂弟孙綝。孙綝被杀后，孙峻、孙綝兄弟被吴景帝孙休下诏从族谱上除名，改称故峻、故綝",
			"sgyj_xiahouen":"夏侯恩是《三国志通俗演义》中出现的虚拟人物，正史中无记载。曹操部下的武将，负责保管曹操的“青釭”宝剑。 于长坂坡与赵云交战，被赵云一枪刺杀，“青釭”宝剑亦被赵云所得",
			"sgyj_penghu":"彭虎，生卒年不详，东汉末年鄱阳起义军首领，后为孙权部将董袭所败",
            "sgyj_caohua":"曹华，东汉末年人物，曹操之女，为汉献帝妃嫔。建安十八年(213年)，曹操进为魏公，把曹宪、曹节、曹华三个女儿，一齐都送给汉献帝刘协做了妃子，皆封为夫人，聘以束帛五万匹，年龄尚小者在魏公国待年长而聘",
            "sgyj_liuli":"刘刕是高希希电视剧《三国》未见其人只闻其名的人物，第五集中吕布在虎牢关前挑战十八路诸侯，其主公向袁绍推荐此人说“我部悍将刘三刀，三刀之内必斩吕布于马下”而闻名，结果一招之内被吕布斩杀，成为一位悲剧人物",
            "sgyj_xiahouguangji":"夏侯光姬（？～307年），小字铜环，沛国谯县（今安徽省亳州市）人，征西将军夏侯渊的曾孙女，兖州刺史夏侯威的孙女，淮南太守夏侯庄之女，琅琊恭王司马觐的王妃，晋元帝司马睿的生母",
            "sgyj_wangtaowangyue":"王桃,王悦是在《花关索传》中登场的虚拟人物，盗贼王令公的两个女儿之一，王悦的姐姐，与妹妹都是关索之妻。姐妹俩原为卢塘寨山贼，以武艺与美貌而闻名，被众多男性求婚却皆不与理睬。她们在关索回西川认父途中与关索交手时不敌，因意气投合而一齐下嫁。虽为架空之人物，但四川省内有记述夫妻三人共同守护葭萌关一事，民间亦流传如夫妻三人曾共同参与诸葛亮之南蛮征伐等轶事",
            "sgyj_cuishi":"崔寔（约103年—约170年），字子真，小字元始，冀州安平县（今河北省安平县）人。东汉大臣、农学家、文学家，文学家崔骃的孙子，书法家崔瑗的儿子",
            "sgyj_rewutugu":"乌戈国，国主兀突骨，身长丈二(约合现在2.77米)，不食五谷，以生蛇恶兽为饭。身有鳞甲，刀箭不能侵。兀突骨乘骑巨象，头戴日月狼须帽，身披金珠缨络，两肋下露出生鳞甲，眼目中微有光芒",
            "sgyj_jingzhu":"其身份既是司马懿的侍妾又是曹丕的卧底，也许她自始至终都是曹家的卧底，也许她最后真的爱上了司马懿，但是她最终还是死于司马懿的野心。牵连着全剧后十集的大悬念",
			"sgyj_wangjun":"王浚(207年-286年) ，字士治，小名阿童，弘农郡湖县(今河南省灵宝市阌乡)人。西晋时期名将",                                                
            "sgyj_guoenshumu":"家中有墓，墓中有女鬼，不是你的伯母，就是你叔母，曾经闹饥荒时，有人想要她的米，于是将她推入井中，又推入石块，孤魂无法安息，自诉于天。”郭恩听后，哭着认罪了",
            "sgyj_xushuzhimu":"徐夫人，原名不详，是三国时期刘备军师徐庶之母，被曹操俘获关在许昌用来威胁徐庶为其出谋划策，但当徐夫人听到儿子为曹操卖命后，自缢而亡",
            "sgyj_simayong":"司马颙（？～306年），字文载，河内温县（今河南省温县）人，晋宣帝司马懿三弟安平献王司马孚之孙，太原烈王司马瑰之子 [1]  ，晋武帝司马炎的堂兄弟，西晋宗室、八王之乱中的八王之一",                                             
            "sgyj_hengai":"横艾，系列单机游戏《轩辕剑》角色之一，《轩辕剑外传：汉之云》女主角，亦登场于《轩辕剑外传：云之遥》。巫山四仙子之一，是天女青儿所带四乐器之一—笙所化的仙女",
            "sgyj_qinqi":"秦琪是小说《三国演义》里的人物，曹操麾下将领。属夏侯惇部、蔡阳外甥，据守黄河渡口关隘。关羽欲渡黄河去与刘备见面，秦琪不从，并口出狂言，被关羽杀死",
            "sgyj_shiyi":"是仪（生卒年不详），本名氏仪，字子羽，北海郡营陵县（今山东昌乐）人 [1]  ，三国时期吴国官员。仕东汉、东吴两朝，早年曾在本县营陵县及本郡北海郡任官，后在东吴历任骑都尉、忠义校尉、裨将军、偏将军、侍中、中执法、尚书仆射等官。先封都亭侯，后进封都乡侯。年八十一岁时病逝 [2]  ，死前要求节葬",
            "sgyj_caoxiong":"曹熊（生卒年不详），字子威，沛国谯县（今安徽省亳州市）人。三国时期曹魏宗室，魏武帝曹操之子，魏文帝曹丕、曹彰、曹植同母弟，母为武宣皇后卞氏。体弱多病，英年早逝。曹魏建立后，追赠东平公。魏明帝太和三年，追封萧王，谥号为怀",                                                
            "sgyj_eheshaoge":"俄何烧戈，羌将。正始八年，陇西、南安、金城、西平诸羌饿何、烧戈、伐同、蛾遮塞等相结叛乱，攻围城邑，南招蜀兵，凉州名胡治无戴复叛应之。讨蜀护军夏侯霸督诸军屯为翅。郭淮退姜维，维遁退。进讨叛羌，斩饿何、烧戈，降服者万馀落",
            "sgyj_yimou":"贾诩之妻也",
            "sgyj_shichangshi":"汉灵帝时的宦官集团，人称“十常侍”，其首领是张让和赵忠。他们玩弄小皇帝于股掌之中，以至灵帝称“张常侍是我父，赵常侍是我母”。十常侍自己横征暴敛，卖官鬻爵，他们的父兄子弟遍布天下，横行乡里，祸害百姓，无官敢管。人民不堪剥削、压迫，纷纷起来反抗。当时一些比较清醒的官吏，已看出宦官集团的黑暗腐败，导致大规模农民起义的形势。郎中张钧在给皇帝的奏章中明白指出，黄巾起义是外戚宦官专权逼出来的，他说：“张角所以能兴兵作乱，万人所以乐附之者，其源皆由十常侍多放父兄、子弟、婚宗、宾客典据州郡，辜确财利，侵略百姓，百姓之怨无所告诉，故谋议不轨，聚为‘盗贼’",
            "sgyj_langboduo":"《阵面对决》里面的原创角色，是朗吉力的哥哥",
            "sgyj_tufashujineng":"秃发树机能（？—280年 [1]  ）， 本姓秃发，西平乐都（今青海省乐都市）。晋朝时期河西鲜卑族首领，部落首领秃发匹孤的四世孙。英勇善战，颇有谋略。祖父秃发寿阗死后，继任部落首领。不满于西晋民族政策，率部反动叛乱，击败西晋将领胡烈、苏愉、牵弘。咸宁三年（277年），受到名将文鸯攻击，兵败受损。咸宁四年（278年），诛杀凉州刺史杨欣，攻陷凉州，纵横西北，威震天下。咸宁五年十二月，受到西晋将军马隆攻击，兵败被杀",
            "sgyj_yunying":"云英，电视剧《新三国》中的女人物，董承的小妾，私下与董承家奴秦庆童偷情，被发现，最终被董承下令处死。登场于21集",
            "sgyj_huaxie":"花谢，杜撰的人物，花鬘的妹妹，从小就和大象一起生活，有可以和大象交流的能力，外表看上去是个小女孩的样子，但实际和花鬘同岁",
            "sgyj_pujing":"湖北省当阳境内有一座山，名叫玉泉山。东汉建安末年，山上住着一个老和尚，法名普净，普净原来是汜水关镇国寺方丈  ，后因云游天下，来到此处，风这地方山明水秀，就于山中结草为庵，每天坐禅参道，身边只有一个小和尚，外出化一些斋饭，供养师父。 ",
            "sgyj_caoxian":"曹宪（生卒年不详），女，沛国谯县（今安徽省亳州市）人。东汉末年历史人物，汉献帝刘协嫔妃，魏武帝曹操女儿。建安十八年，嫁给汉献帝刘协, 受封为贵人。 黄初元年（220年），兄弟曹丕称帝后，汉献帝成为山阳公，不知所终。",
            "sgyj_tukuilai":"秃瑰来（？—？），三国时匈奴别部赀虏首领之一。本为大人檀柘部的枝大人。檀柘死后，率部往广魏、令居境，数次反魏，后为凉州官府所杀。",      
            "sgyj_jiananfeng":"贾南风（257年－300年5月13日），小名峕，字南风，平阳郡襄陵县（今山西省襄汾县）人，曹魏豫州刺史贾逵孙女，西晋太宰贾充之女，晋惠帝司马衷皇后。贾南风貌丑而性妒，因惠帝懦弱而一度专权，是西晋时期“八王之乱”的罪魁祸首，后死于赵王司马伦之手，而随后的八王之乱则引发了历史上著名的五胡乱华。",  
            "sgyj_liufuren":"刘夫人，东汉末年军阀袁绍的后妻，袁谭与袁尚的母亲。她偏爱少子袁尚而讨厌长子袁谭 [1]  ，后导致二子相争。",  
            "sgyj_tuobaliwei":"拓跋力微(174年-277年)，云中盛乐(今内蒙古和林格尔县)人，汉末至晋初时期鲜卑索头部首领。北魏皇帝先祖，追封圣武帝拓跋诘汾之子，南凉政权先祖秃发匹孤之弟。建安二十五年(220年)，继任部落首领。陷入西部鲜卑内乱，投靠没鹿回部大人窦宾，迎娶窦宾之女。率部居住于长川，治理有方，周边部落纷纷归附。正始九年(248年)，岳父窦宾去世后，吞并没鹿回部，控弦上马二十万。甘露三年(258年)，迁都盛乐，成为鲜卑部落联盟首领。景元二年(261年)，派遣拓跋沙漠汗入朝为质子，交好魏晋政权，学习中原的先进文化。西晋咸宁三年(277年)，陷入幽州刺史卫瓘计策，赐死太子拓跋沙漠汗，各部酋长分崩离散，最终忧愁而死，享年一百零四岁。北魏建立后，追谥神元皇帝，庙号始祖。",
            "sgyj_zhaoyu":"赵妪（225－248年4月9日），又称赵氏贞或赵贞娘，东吴时期的交州九真盗贼。她曾击退侵略交州的东吴士兵，很快就被平定下去。数百年后独立的越南人追尊她为民族英雄，宣称她是越南的“圣女贞德”。史书载赵妪虽未婚而有数十少男与之交接并侍奉在侧。另有民间传闻则说赵妪始终为处子。陆胤知道这一点后，使计命吴军裸体作战，赵妪因为娇羞不敢迎战结果节节败退。最终赵妪走投无路，在松山(清化省厚禄县富田一带，现在这里还有赵妪的墓和庙)自杀。死法一说投江，一说被象踩。",
            "sgyj_zhixushangren":"紫虚上人，中国古典小说《三国演义》中的人物。居于锦屏山中的异人，能知人生死贵贱。刘璋派遣刘璝、张任、泠苞、邓贤四人前往雒城守备，四人途经锦屏山，向紫虚上人询问此战吉凶，紫虚上人留下八句言语，预测了庞统之死，又说四人定数难逃，不必再问。",
            "sgyj_quexiaojiang":"小说《三国演义》登场人物，因种种原因而成为在三国迷网民中脍炙人口的名将。与潘凤、胡车儿、马忠并称四大隐藏名将。",
            "sgyj_wangmi":"王弥(?~311年)，东莱郡(今山东省莱州市)人。西晋叛民领袖，汝南太守王颀之孙。永兴三年(306年)，参加刘伯根起义，拜为长史。刘伯根死后，掳掠青徐两州，拥兵数万，声势浩大。永嘉二年(308年)，率军进逼洛阳，为司徒王衍所败。于是，归附汉赵刘渊，拜司隶校尉，迁征东将军，封东莱郡公。汉赵光兴二年(311年)，联合刘曜、石勒攻破洛阳。回师青州途中，为石勒所杀。",
            "sgyj_simaliang":"司马亮(?-291年7月25日)，字子翼，河内郡温县(今河南温县)人，晋宣帝司马懿第四子，晋景帝司马师、晋文帝司马昭异母弟，母伏夫人 ，西晋宗室、八王之乱中的八王之一。司马亮初封万岁亭侯，后改封广阳乡侯、祈阳伯，历任东中郎将、散骑常侍、镇西将军等职。西晋建立后，先封扶风王，后改封汝南王，先后担任骑司马、抚军将军、卫将军、宗师等。咸宁三年(277年)，升任镇南大将军、都督豫州诸军事等要职，镇守一方。不久，入朝任太尉、录尚书事，兼任太子太傅。太熙元年(290年)，晋武帝病重，有意托孤于司马亮，但在杨骏阻挠下并未成功。元康元年(291年)，杨骏被杀后，司马亮入朝任太宰，与卫瓘分掌朝政，大肆封官却失去人心。不久，司马玮矫诏将司马亮杀死。司马玮被晋惠帝皇后贾南风所杀后，朝廷下诏给司马亮平反，赐谥号为文成。",
            "sgyj_zhoubuyi":"周不疑（192年—208年），字元直（或作“文直”），零陵重安（今湖南衡阳县）人，刘表别驾刘先的外甥，少有异才，聪明敏达，在十七岁时就著有文论四首。后来因为曹丕无法驾驭周不疑，于是曹操派人杀了周不疑。",
            "sgyj_kebineng":"轲比能（？～235年），为中国三国时期的鲜卑首领之一。轲比能出身鲜卑支部，因他作战勇敢，执法公平，不贪财物，所以被鲜卑民众推举为大人。轲比能因其部落近塞，所以他抓住有利条件积极学习汉族先进技术和文化，促进了鲜卑族的进步和北方的民族融合。",
            "sgyj_mengyou":"孟优，《三国演义》里的人物，南蛮王孟获之弟。与诸葛亮的南征军交战，向败战的兄长推荐朵思大王，劝兄长借助朵思之力与蜀汉军对抗。后来与兄长一起发誓归顺蜀汉。",
			//"sgyj_wangrong":"简介模板",
			
					},
      characterTitle:{
					
			 		},
            skill:{
            
			
			"sgyj_changxi2":{				
				trigger:{                   
                    global:"dieEnd",
                },
				popup:"sgyj_changxi",
				filter:function (event,player){				    
		            return player.storage.sgyj_changxi>game.players.length;   				
	            },
				forced:true,				
				content:function (){																									
					player.die();										
				},
			},
			"sgyj_changxi":{				
				trigger:{                   
                    player:"dying",
                },				
				init:function (player){
					player.storage.sgyj_changxi=0;
				},
				mark:true,
				marktext:"息",
				intro:{
		            content:"已有#息",
	            },
				group:"sgyj_changxi2",
				forced:true,				
				content:function (){																				
					'step 0'
					player.gainMaxHp(true);
					player.update();
					player.recover(Infinity);					
					'step 1'					
					player.storage.sgyj_changxi++;
					player.draw(player.storage.sgyj_changxi);
					if(player.storage.sgyj_changxi>game.players.length){
						player.die();
					}					
				},
			},
			"sgyj_shouben3":{								
				trigger:{
		player:"phaseBegin",
    },	
	forced:true,	
	popup:"sgyj_shouben",
	filter:function (event,player){				    
		return !player.hasSkill('sgyj_zongshoushe')||!player.hasSkill('sgyj_zongshouying')||!player.hasSkill('sgyj_zongshouhu')||!player.hasSkill('sgyj_zongshouxiang');   				
	},
    content:function (){				              
        var list=[];
        if(!player.hasSkill('sgyj_zongshoushe')) list.push('sgyj_zongshoushe');
        if(!player.hasSkill('sgyj_zongshouying')) list.push('sgyj_zongshouying');
        if(!player.hasSkill('sgyj_zongshouhu')) list.push('sgyj_zongshouhu');
        if(!player.hasSkill('sgyj_zongshouxiang')) list.push('sgyj_zongshouxiang');  
		player.damage(list.length);
        player.update();
		if(!player.hasSkill('sgyj_zongshoushe')&&!player.hasSkill('sgyj_zongshouying')&&!player.hasSkill('sgyj_zongshouhu')&&!player.hasSkill('sgyj_zongshouxiang')){
			player.die();
		}
	},
			},
			"sgyj_shouben2":{								
				trigger:{
		player:"damageEnd",
    },	
	forced:true,
	popup:"sgyj_shouben",
	filter:function (event,player){				    
		return event.nature&&event.nature=='fire'&&(player.hasSkill('sgyj_zongshoushe')||player.hasSkill('sgyj_zongshouying')||player.hasSkill('sgyj_zongshouhu')||player.hasSkill('sgyj_zongshouxiang'));   				
	},
    content:function (){				              
        var list=[];
        if(player.hasSkill('sgyj_zongshoushe')) list.push('sgyj_zongshoushe');
        if(player.hasSkill('sgyj_zongshouying')) list.push('sgyj_zongshouying');
        if(player.hasSkill('sgyj_zongshouhu')) list.push('sgyj_zongshouhu');
        if(player.hasSkill('sgyj_zongshouxiang')) list.push('sgyj_zongshouxiang');        
        var list2=list.randomGet();
        player.popup(get.translation(list2));        
        player.removeSkill(list2);       
        player.unmarkSkill(list2);
        player.update();
		if(!player.hasSkill('sgyj_zongshoushe')&&!player.hasSkill('sgyj_zongshouying')&&!player.hasSkill('sgyj_zongshouhu')&&!player.hasSkill('sgyj_zongshouxiang')){
			player.die();
		}
	},
			},
			"sgyj_shouben":{								
				trigger:{
        source:"dying",
		player:"dyingAfter",
    },	
	forced:true,
	group:["sgyj_shouben2","sgyj_shouben3"],
	filter:function (event,player){				    
		return player.isAlive()&&(!player.hasSkill('sgyj_zongshoushe')||!player.hasSkill('sgyj_zongshouying')||!player.hasSkill('sgyj_zongshouhu')||!player.hasSkill('sgyj_zongshouxiang'));   				
	},
    content:function (){		
		"step 0"
		player.recover();
		player.draw();
		"step 1"                    
        var list=[];
        if(!player.hasSkill('sgyj_zongshoushe')) list.push('sgyj_zongshoushe');
        if(!player.hasSkill('sgyj_zongshouying')) list.push('sgyj_zongshouying');
        if(!player.hasSkill('sgyj_zongshouhu')) list.push('sgyj_zongshouhu');
        if(!player.hasSkill('sgyj_zongshouxiang')) list.push('sgyj_zongshouxiang');        
        var list2=list.randomGet();
        player.popup(get.translation(list2));        
        player.addSkill(list2);       
        player.markSkill(list2);
        player.update();
		
	},
			},
			"sgyj_zongshouxiang":{				
				marktext:'象',
	mark:true,
	popup:"sgyj_zongshou",
	intro:{
		content:"锁定技，当你受到伤害时，你令此伤害值改为1",
	},     
				trigger:{
        player:"damageBegin",
    },	
	forced:true,	
    content:function (){		
		trigger.num=1;		
	},
			},
			"sgyj_zongshouhu":{				
				marktext:'虎',
	mark:true,
	popup:"sgyj_zongshou",
	intro:{
		content:"锁定技，当你造成伤害时，你摸一张牌",
	},     
				trigger:{
        source:"damageBegin",
    },	
	forced:true,	
    content:function (){		
		player.draw();		
	},
			},
			"sgyj_zongshouying":{
				marktext:'鹰',
	            mark:true,
				intro:{
		            content:"锁定技，你使用黑色牌无距离限制",
	            }, 
				mod:{
					targetInRange:function(card){
						if(get.color(card)=='black') return true;
					},
				},
			},
			"sgyj_zongshoushe":{				
				marktext:'蛇',
	mark:true,
	popup:"sgyj_zongshou",
	intro:{
		content:"锁定技，你使用红色牌造成的伤害+1",
	},     
				trigger:{
        source:"damageBegin",
    },	
	forced:true,
	filter:function (event,player){				    
		return event.card&&get.color(event.card)=='red';   				
	},
    content:function (){		
		trigger.num++;		
	},
			},
			"sgyj_zongshou":{
				trigger:{
        global:"gameStart",
		player:"enterGame",
    },	
	forced:true,
	priority:Infinity,
    content:function (){				
		player.addSkill("sgyj_zongshoushe");	
		player.addSkill("sgyj_zongshouying");
		player.addSkill("sgyj_zongshouhu");
		player.addSkill("sgyj_zongshouxiang");
	},
			},
			"sgyj_xunqing":{				
				trigger:{                   
                    global:"dying",
                },
				limited:true,
				init:function (player){
					player.storage.sgyj_xunqing=false;
				},
				check:function (event,player){                                                             
		            return !player.countCards('h','tao')&&get.attitude(player,event.player)>0;               
                }, 
				filter:function (event,player){				    
				    return event.player.sex=='male';   				
				},
				content:function (){																				
					'step 0'
					trigger.player.recover(1-trigger.player.hp);
					game.delay();
					'step 1'					
					player.storage.sgyj_xunqing=true;
					player.awakenSkill("sgyj_xunqing");
					player.die();
				},
			},
			"sgyj_linxi":{                
                trigger:{                   
                    player:"damageBegin",
                }, 		
				forced:true,
				filter:function (event,player){                                         
					return event.source&&event.source!=player&&player!=_status.currentPhase;    	 		
	            },
                forced:true,
                content:function (){
                    'step 0'
					trigger.source.judge();
					'step 1'
					if(result.color=='red'){
						trigger.source.draw(2);
						trigger.source.chooseCard('he',1,'憐惜：交给'+get.translation(player)+'一张牌并令此伤害对你无效',true).set('ai',function(card){
						if(get.attitude(trigger.source,player)>0){
							return 9-get.value(card);
						}
						return -get.value(card);
					});			
					}
					else event.finish();
					'step 2'
					if(result.bool){						
					    trigger.cancel();
						trigger.source.$give(result.cards,player);
					    player.gain(result.cards,trigger.source);
					}
               },
          },
			"sgyj_yuyin":{                
                trigger:{                   
                    player:"phaseDiscardEnd",
                },
 				direct:true,
				filter:function (event,player){                                         					
				    return event.num>0;  	 		
	            },               
                content:function (){
                    'step 0'				
		player.chooseTarget('余音',[1,trigger.cards.length],lib.translate.sgyj_yuyin_info,function(card,player,target){
            return target!=player;
        }).set('ai',function(target){            			
			return get.attitude(player,target)>0;            
        });
        'step 1'        
        if(result.bool){
		    player.logSkill("sgyj_yuyin");
			event.num=0; 
            event.targets=result.targets;                        
            }   
            else{
               event.finish();
            }   
          'step 2'                            
        if(event.num<event.targets.length){  
            player.chooseCardButton(trigger.cards,1,'选择将其中一张牌交给'+get.translation(event.targets[event.num])).set('filterButton',function(button){           
             return true;      
         }).set('ai',function(button){
             return get.value(button.link);
         });
        }
        else{
            game.cardsDiscard(trigger.cards);
			event.finish();      
        }                     
			'step 3'
         if(result.bool){                                         
            trigger.cards.remove(result.links[0]);
			event.targets[event.num].gain(result.links[0],'gain2');            
			event.num++;
            event.goto(2);
        }else{
            event.num++;
            event.goto(2);
            }         
               },
          },
			"sgyj_zongman3":{				
				trigger:{
        global:"useCardAfter",
    },	
	forced:true,
	popup:false,
	filter:function (event,player){
	    return event.player.hasSkill('sgyj_zongman2')&&event.player.storage.sgyj_zongman2>Math.floor(game.players.length/2);
	},
	
    content:function (){
		"step 0"		
		player.chooseBool('是否令'+get.translation(trigger.player)+'摸牌至体力上限（至多为5）？').set('ai',function(){               
            if(get.attitude(event.targets[i],player)<=0) return false;       
                return true;
        });		    		
		"step 1"
		if(result.bool){
			if(trigger.player.countCards('h')<trigger.player.maxHp){
			    trigger.player.drawTo(Math.min(5,trigger.player.maxHp));
			}
			trigger.player.removeSkill("sgyj_zongman2");
			player.removeSkill("sgyj_zongman3");
		}else{
			trigger.player.removeSkill("sgyj_zongman2");
			player.removeSkill("sgyj_zongman3");
		}
	},
			},
			"sgyj_zongman2":{
				init:function (player){
                    player.storage.sgyj_zongman2=0;
                },
				marktext:'蛮',
	mark:true,
	popup:false,
	intro:{
		content:"",
	},     
				trigger:{
        source:"damageEnd",
    },	
	forced:true,	
    content:function (){		
		player.storage.sgyj_zongman2++;		
		player.update();		
	},
			},
			"sgyj_zongman":{		       
            enable:"phaseUse", 
			usable:1,			 
			filterCard:true,
			selectTarget:1,
			//selectCard:1,
			position:"he",			
            filterTarget:function (card,player,target){
        return player!=target;
    },
            filter:function (event,player){
			    return player.countCards('he');
			},                             
                content:function (){
        "step 0"            
        player.$give(cards,target);
		target.gain(cards,player);
		target.addSkill('sgyj_zongman2');
		player.addTempSkill('sgyj_zongman3');
        "step 1"
        var list=game.filterPlayer(function(current){ 
            return target.canUse('nanman',current); 
        });                 
        list.sortBySeat(); 
        target.useCard({name:'nanman'},list);       
    },
        ai:{
        result:{
            target:function (player,target){                
                return target.countCards('h');
            },
        },
        order:1,
        threaten:0.5,
        },  
            },
			"sgyj_diqiu3":{
    trigger:{
        player:"phaseEnd",
    },	
	forced:true,
	popup:false,
    content:function (){
		delete player.storage.sgyj_diqiu;
		player.storage.sgyj_diqiu=0;
		delete player.storage.sgyj_diqiu2;
		player.storage.sgyj_diqiu2=0;
		player.unmarkSkill('sgyj_diqiu2');
		player.update();
	},
			},
			"sgyj_diqiu2":{    
	init:function (player){		
		player.storage.sgyj_diqiu2=0;
	},
	marktext:'狄',
	mark:true,
	intro:{
		content:"",
	},            
			},
			"sgyj_diqiu1":{},
			"sgyj_diqiu":{
    trigger:{
        player:"useCardToPlayered",
    },	
	group:["sgyj_diqiu2","sgyj_diqiu3"],
	direct:true,
	init:function (player){
		player.storage.sgyj_diqiu=0;		
	},
	filter:function (event,player){                                         					
		return event.card&&player.isPhaseUsing()&&!player.hasSkill("sgyj_diqiu1");    	 		
	},
	marktext:'酋',
	mark:true,
	intro:{
		content:"",
	},            
    content:function (){
        'step 0'       
		player.storage.sgyj_diqiu+=trigger.card.number;		   
		player.update();
        'step 1'        
        if(player.storage.sgyj_diqiu>13){
		    player.chooseBool('是否弃置每个目标各一张牌？').set('ai',function(){               
                if(player.maxHp<3||player.storage.sgyj_diqiu2>=2) return false;       
                return true;
          });
		}
        'step 2'
		if(result.bool){
            player.addTempSkill("sgyj_diqiu1");
			for(var i=0;i<trigger.targets.length;i++){
			    if(trigger.targets[i].countCards('he')){
				    player.discardPlayerCard(trigger.targets[i],'he',true);
					player.storage.sgyj_diqiu2++;
					player.markSkill('sgyj_diqiu2');
				}
			}	       
        }
        else{
            event.finish();
        }            
		'step 3'
        if(player.storage.sgyj_diqiu2>2){
			player.loseHp();			
			player.update();
		}		
			
    },
			},
			"sgyj_yuqi3":{
				trigger:{player:['useCardBefore','respondBefore']},
				forced:true,
				popup:false,
				filter:function (event,player){
					return (event.skill=='sgyj_yuqi1'||event.skill=='sgyj_yuqi2')&&game.hasPlayer(function(current){
                    return current.countCards('e',{subtype:['equip2','equip3','equip5']});
         });                                          
				},
				content:function (){					
         "step 0"
        player.chooseTarget('驭骑',1,lib.translate.sgyj_yuqi_info,true,function(card,player,target){
            return target.countCards('e',{subtype:['equip3','equip4']});
        }).set('ai',function(target){
            if(!player.countCards('h','jiu')||!player.countCards('h','tao')) return Math.random();
            return -get.attitude(player,target);            
        });
         "step 1"
        if(result.bool){         
           event.target=result.targets[0];     
           player.line(event.target,'green');                
           event.cards=event.target.getCards('e',{subtype:['equip3','equip4']});  
           player.chooseCardButton(event.cards,1,'选择'+get.translation(event.target)+'的一张装备区的坐骑牌',true).set('filterButton',function(button){           
             return game.hasPlayer(function(current){
                 return player.canUse(button.link,current);
             });
         }).set('ai',function(button){
             return get.value(button.link);
         });
         }
       "step 2"
        if(result.bool){                   
             event.target.discard(result.links[0]);              
        }       
        else event.finish();
                                              
				},
			},
			"sgyj_yuqi2":{				
				prompt:'回合外当你需要使用【桃】时，可将一名角色装备区里的一张坐骑牌当【桃】使用',
				enable:'chooseToUse',
				filter:function (event,player){					
					return player!=_status.currentPhase&&game.hasPlayer(function(current){
                    return current.countCards('e',{subtype:['equip3','equip4']});
         });                 
				},			
				filterCard:function (){return false},
     selectCard:-1,
     //onuse:function (result,player){
         
     //},
     viewAsFilter:function (player){
     return player!=_status.currentPhase&&game.hasPlayer(function(current){
        return current.countCards('e',{subtype:['equip3','equip4']});
         });                 
     },	
				viewAs:{name:'tao'},				
				ai:{
				    order:5,
					threaten:1.5,					
				},
			},
			"sgyj_yuqi1":{				
				prompt:'回合内当你需要使用【酒】时，可将一名角色装备区里的一张坐骑牌当【酒】使用',
				enable:'chooseToUse',
				filter:function (event,player){					
					return player==_status.currentPhase&&game.hasPlayer(function(current){
                    return current.countCards('e',{subtype:['equip3','equip4']});
         });                 
				},			
				filterCard:function (){return false},
     selectCard:-1,
     //onuse:function (result,player){
         
     //},
     viewAsFilter:function (player){
     return player==_status.currentPhase&&game.hasPlayer(function(current){
        return current.countCards('e',{subtype:['equip3','equip4']});
         });                 
     },	
				viewAs:{name:'jiu'},				
				ai:{
				    order:5,
					threaten:1.5,					
				},
			},
		"sgyj_yuqi":{
			group:["sgyj_yuqi1","sgyj_yuqi2","sgyj_yuqi3"],
		},	
		 "sgyj_suzhi2":{                
                trigger:{                   
                    player:["gainMaxHpEnd","loseMaxHpEnd"],
                }, 								
                forced:true,
				popup:false,
                content:function (){
                    player.draw(2);
               },
          },	  
		"sgyj_suzhi":{                
                trigger:{                   
                    global:"phaseBegin",
                }, 
				group:"sgyj_suzhi2",
				filter:function (event,player){                                         
					var num=game.countPlayer(function(current){ 
                        return current.maxHp>player.maxHp; 
                    }); 
					return player.isMinHp()&&num==0;    	 		
	            },
                forced:true,				
                content:function (){
                    player.loseMaxHp(true);
					player.recover();
               },
          },	
			"sgyj_jinji4":{						
						enable:['chooseToUse'],
						filterCard:{suit:'diamond'},
						viewAs:{name:'shunshou'},
						position:'he',
						viewAsFilter:function (player){
							return player.countCards('he',{suit:'diamond'})>0;
						},
						/*filter:function (event,player){                                         
					        return player.countCards('he',{suit:'diamond'})>0;    	 		
	                    },*/
						prompt:'将一张方片牌当顺手牵羊使用',												
						ai:{
							order:5,							
							skillTagFilter:function(player){
								return player.countCards('he',{suit:'diamond'});
							}
						}
					},
			"sgyj_jinji3":{						
						enable:['chooseToUse'],
						filterCard:{suit:'club'},
						viewAs:{name:'juedou'},
						position:'he',
						viewAsFilter:function (player){
							return player.countCards('he',{suit:'club'})>0;
						},
						/*filter:function (event,player){                                         
					        return player.countCards('he',{suit:'club'})>0;    	 		
	                    },*/
						prompt:'将一张梅花牌当决斗使用',												
						ai:{
							order:5,							
							skillTagFilter:function(player){
								return player.countCards('he',{suit:'club'});
							}
						}
					},
			"sgyj_jinji2":{						
						enable:['chooseToUse'],
						filterCard:{suit:'heart'},
						viewAs:{name:'tao'},
						position:'he',
						viewAsFilter:function (player){
							return player.countCards('he',{suit:'heart'})>0;
						},
						/*filter:function (event,player){                                         
					        return player.countCards('he',{suit:'heart'})>0;    	 		
	                    },*/
						prompt:'将一张红桃牌当桃使用',												
						ai:{
							order:5,							
							skillTagFilter:function(player){
								return player.isDamaged()&&player.countCards('he',{suit:'heart'});
							}
						}
					},
			"sgyj_jinji1":{						
						enable:['chooseToUse'],
						filterCard:{suit:'spade'},
						viewAs:{name:'guohe'},
						position:'he',
						viewAsFilter:function (player){
							return player.countCards('he',{suit:'spade'})>0;
						},
						/*filter:function (event,player){                                         
					        return player.countCards('he',{suit:'spade'})>0;    	 		
	                    },*/
						prompt:'将一张黑桃牌当过河拆桥使用',												
						ai:{
							order:5,							
							skillTagFilter:function(player){
								return player.countCards('he',{suit:'spade'});
							}
						}
					},
			"sgyj_jinji":{
				mod:{
					targetInRange:function(card){
						if(_status.event.skill=='sgyj_jinji4') return true;
					},
				},
				group:["sgyj_jinji1","sgyj_jinji2","sgyj_jinji3","sgyj_jinji4"],
			},		
			"sgyj_lehuo":{                
                trigger:{                   
                    global:"damageEnd",
                }, 				
				filter:function (event,player){                                         
					return player!=event.player;    	 		
	            },
                forced:true,				
                content:function (){
                    if(player.hp>trigger.player.hp&&trigger.player.countCards('he')){
						player.gainPlayerCard(trigger.player,'he',true);
					}
					if(player.countCards('h')<trigger.player.countCards('h')){
						player.damage(trigger.num,trigger.source);
					}	
					
               },
          },
			"sgyj_shenzi":{				
				trigger:{
				    player:['dyingAfter'],				   
				},	
				forced:true,								
				content:function (){				    
					player.gainMaxHp(true);
					player.update();
					player.recover();
				},
			},
			"sgyj_langwei2":{
				mod:{
					wuxieRespondable:function(){
						return false;
					},
				},
			},
			"sgyj_langwei":{				
				//shaRelated:true,
				trigger:{player:'useCardToPlayered'},				
				filter:function(event,player){
					if(event.getParent(2).name=='sgyj_langwei') return false;
					return (event.card.name=='sha'||(event.targets.length==1&&get.type(event.card,'trick')=='trick'));
				},				
				logTarget:'player',								
				check:function (event,player){                                                             
		            return player.maxHp>2;               
                },				
				content:function(){					
					"step 0"
					player.loseMaxHp(true);
					player.update();
					"step 1"
					player.chooseControl().set('choiceList',['额外结算一次','摸三张牌','此牌不可被抵消']).set('ai',function(){            		    
            var list=[0,1,2];
            if(player.countCards('h')<3) return 1;
				return [0,1,2].randomGet();
        });                                                                                                             			 
        "step 2"
        if(result.index==0){                       
			for(var i=0;i<trigger.targets.length;i++){
			    player.useCard(trigger.cards,trigger.targets[i],false);
			}
			event.finish();
        }
		else if(result.index==1){            
            player.draw(3);
			event.finish();
        }
		else if(result.index==2){            
            player.addTempSkill('sgyj_langwei2',{player:'useCardAfter'});
			for(var i=0;i<trigger.targets.length;i++){
			    trigger.getParent().directHit.add(trigger.targets[i]);
			}			
			event.finish();
        }											
				},
				ai:{
					directHit_ai:true,					
				},
			},
			"sgyj_badao":{                
                trigger:{                   
                    player:"phaseDiscardEnd",
                },
 				direct:true,
				filter:function (event,player){                                         
					return game.hasPlayer(function(current){
				return event.num>0&&current.countCards('he')>0;
		 });   	 		
	            },               
                content:function (){
                    'step 0' 
				event.cards=[];
				'step 1'
		player.chooseTarget('霸刀',1,lib.translate.sgyj_badao_info,function(card,player,target){
            return target.countCards('he');
        }).set('ai',function(target){            			
			return -get.attitude(player,target);            
        });
        'step 2'        
        if(result.bool){
		player.discardPlayerCard(result.targets[0],'he',Math.min(result.targets[0].countCards('he'),trigger.num),get.prompt('sgyj_badao')).set('ai',function(button){                        
			if(get.position(button.link)=='h'){               
                return Math.random();
            }
			if(get.position(button.link)=='e'){
                if(get.subtype(button.link)=='equip2')  return 2*get.value(button.link);
                return get.value(button.link);
            }
            return Math.random();
        }).set('logSkill',['sgyj_badao',result.targets[0]]).set('att',get.attitude(player,result.targets[0])<=0);
	    }
			else{
                event.finish(); 
            } 
        'step 3'
        if(result.bool&&result.links&&result.links.length){
			for(var i=0;i<result.links.length;i++){
			    event.cards.push(result.links[i]);
			}			
		}   
            else{
               event.finish();
            }					
			'step 4'
			 player.chooseCardButton(event.cards,1,'选择使用其中一张牌').set('filterButton',function(button){           
             return game.hasPlayer(function(current){ 
                 return player.canUse(button.link,current); 
            });      
         }).set('ai',function(button){
             return get.value(button.link);
         });
         'step 5'
         if(result.bool){                                         
            player.chooseUseTarget(result.links[0],true);             
        }else{
               event.finish();
            }             
               },
          },
			"sgyj_yunsheng2":{                
                trigger:{                   
                    player:"damageBegin",
                }, 				
				filter:function (event,player){                                         
					return player.isDamaged()&&Math.random()<=0.5;    	 		
	            },
                forced:true,
				popup:"sgyj_yunsheng",
                content:function (){
                    trigger.num--;
               },
          },
			"sgyj_yunsheng":{                
                trigger:{                   
                    source:"damageBegin",
                }, 
				group:"sgyj_yunsheng2",
				filter:function (event,player){                                         
					return player.isHealthy()&&Math.random()<=0.5;    	 		
	            },
                forced:true,
                content:function (){
                    trigger.num++;
               },
          },
			"sgyj_benta":{
    trigger:{
        player:"useCardToPlayered",
    },
	filter:function(event,player){
		return event.card&&event.card.name=='sha'&&game.hasPlayer(function(current){
				return current.countCards('hej')>0;
		 });		
	},
	direct:true,
	init:function (player){
		player.storage.sgyj_benta=0;		
	},
	marktext:'奔',
	mark:true,
	intro:{
		content:"",
	},            
    content:function (){
        'step 0'       
		player.chooseTarget('奔踏',1,lib.translate.sgyj_benta_info,function(card,player,target){
            return target.countCards('hej');
        }).set('ai',function(target){            
			if(target.countCards('j')>0) return get.attitude(player,target)>0;
			return -get.attitude(player,target);            
        });
        'step 1'        
        if(result.bool){                                                      
           player.storage.sgyj_benta++;		   
		   player.update();
		   
		   player.discardPlayerCard(result.targets[0],'hej',get.prompt('sgyj_benta')).set('ai',function(button){            
            if(button.link.number==13) return 1;
			if(get.position(button.link)=='h'){               
                return Math.random();
            }
			if(get.position(button.link)=='e'){
                if(get.subtype(button.link)=='equip2')  return 2*get.value(button.link);
                return get.value(button.link);
            }
            return Math.random();
        }).set('logSkill',['sgyj_benta',result.targets[0]]).set('att',get.attitude(player,result.targets[0])<=0);
	    }
			else{
                event.finish(); 
            } 
        'step 2'
        if(result.bool&&result.links&&result.links.length){
			if(result.links[0].number==player.storage.sgyj_benta){
				trigger.getParent().directHit.add(trigger.target);
			}
			if(result.links[0].number==13){
				trigger.target.die();
				player.removeSkill("sgyj_benta");
			}
		}   
            else{
               event.finish();
            }					
			
    },
			},
			"sgyj_chuiru":{
				mod:{
					/*targetInRange:function(card,player,target,now){
						if(card.name=='sha') return true;
					},*/
					attackFrom:function (from,to,distance){ 
                        if(from.isEmpty(1)) return distance-Infinity; 
                    },
					cardUsable:function(card,player,num){
						if(!player.isEmpty(1)&&player.isPhaseUsing&&card.name=='sha') return num+1;
					}
				},
				charlotte:true,
			},
			"sgyj_kongxian2":{
				mod:{
					attackFrom:function (from,to,distance){ 
                        return distance+1; 
                    },
				},
			},
			"sgyj_kongxian1":{
				mod:{
					attackFrom:function (from,to,distance){ 
                        return distance-1; 
                    },
				},
			},
			"sgyj_kongxian":{							
				trigger:{player:'phaseDrawBegin'},				
				filter:function (event,player){               
        return player.isAlive();
    },
	frequent:true,
    content:function (){
        "step 0"
        event.targets1=game.filterPlayer(function(current){
            return get.distance(player,current,'attack')<=1&&current.countCards('he');
        });
        event.targets2=game.filterPlayer(function(current){
            return !event.targets1.contains(current)&&get.distance(player,current,'attack')<=2&&current.countCards('he');
        });        
        player.chooseControl().set('choiceList',['攻击范围+1','攻击范围-1']).set('ai',function(){            		    
            var list=[0,1];
            if(player.countCards('h','sha')>0) return 0;
				return [0,1].randomGet();
        });                                                                                                             			 
        "step 1"
        if(result.index==0){                       
			player.addTempSkill('sgyj_kongxian1');
			if(event.targets2.length==0){
			event.finish();
		}else{
			for(var i=0;i<event.targets2.length;i++){
			    player.gainPlayerCard(event.targets2[i],'he',true);
			}
		}
			event.finish();
        }
		else if(result.index==1){            
            player.addTempSkill('sgyj_kongxian2');
			player.update();
            event.goto(2);
        }		
        "step 2"
        event.targets3=game.filterPlayer(function(current){
            return get.distance(player,current,'attack')<=1&&current.countCards('he');
        });
        event.targets4=game.filterPlayer(function(current){
            return !event.targets3.contains(current)&&get.distance(player,current,'attack')<=2&&current.countCards('he');
        }); 
		if(event.targets4.length==0){
			event.finish();
		}else{
		    for(var i=0;i<event.targets4.length;i++){
			    player.gainPlayerCard(event.targets4[i],'he',true);
		    }
		}
		event.finish();
    },	
			},
			"sgyj_kuji":{
    trigger:{
        player:"useCardToBefore",
    },
	filter:function(event,player){
		return game.hasPlayer(function(current){
				return current.countCards('h')>player.countCards('h')&&event.card&&get.type(event.card)=='trick'&&get.type(event.card)!='delay'&&player.isPhaseUsing()&&event.targets.length==1;
		 });		
	},	
    content:function (){
        'step 0'       
		player.chooseTarget('酷妒',1,lib.translate.sgyj_kuji_info,function(card,player,target){
            return target.countCards('h')>player.countCards('h');
        }).set('ai',function(target){            
			if(get.effect(trigger.player,trigger.card,target,player)>0) return get.attitude(player,target)>0;
			return -get.attitude(player,target);            
        });
        'step 1'        
        if(result.bool){                                                      
           player.useCard(trigger.cards,result.targets[0],false);
			//trigger.targets.push(result.targets[0]);//五谷会有BUG
            }   
            else{
               event.finish();
            }	
    },
			},
			"sgyj_pianyan":{
    trigger:{
        global:"useCardToBefore",
    },
    usable:1,
	check:function (event,player){                                                             
		return get.attitude(player,event.player)<=0;               
    }, 
	filter:function(event,player){
		return event.card&&event.player.isPhaseUsing()&&event.targets.length>1;
	},	
    content:function (){
        'step 0'
        trigger.player.draw();		
        'step 1'
        player.chooseTarget('偏言',1,lib.translate.sgyj_pianyan_info,function(card,player,target){
            if(!trigger.targets.contains(target)) return false;
			return true;
        }).set('ai',function(target){            
			if(get.effect(trigger.player,trigger.card,target,player)<0) return -get.attitude(player,target);
			return get.attitude(player,target)>0;            
        });
        'step 2'        
        if(result.bool){       
            event.target=result.targets[0];	           
			trigger.getParent().excluded.add(event.target);  
			game.log(player,'选择了',event.target,'并令此牌对其无效');
            }   
            else{
               event.finish();
            }
		'step 3'  	
		trigger.player.chooseTarget('偏言',1,lib.translate.sgyj_pianyan_info,function(card,player,target){
            return target!=event.target;
        }).set('ai',function(target){            
			if(get.effect(trigger.player,trigger.card,target,trigger.player)>0) return get.attitude(trigger.player,target)>0;
			return -get.attitude(trigger.player,target);            
        });
        'step 4'        
        if(result.bool){                                                      
            trigger.player.useCard(trigger.cards,result.targets[0]);
            }   
            else{
               event.finish();
            }	
    },
			},
			"sgyj_linfeng":{
    trigger:{
        global:"useCardToBefore",
    },
    usable:1,
	check:function (event,player){                                                     
        if(player.hp<2) return 0;
		return get.attitude(player,event.target)>0;               
    }, 
	filter:function(event,player){
		return event.card&&event.card.name=='sha';
	},	
    content:function (){
        'step 0'
        player.draw();
		trigger.player.useCard({name:"juedou"},player,false);
        'step 1'
        if(event.damaged){
            trigger.cancel();            
        }
    },
    subSkill:{
        damage:{
            trigger:{
                source:"damageAfter",
            },
            silent:true,
            filter:function (event,player){
                return event.getParent(3).name=='sgyj_linfeng';
            },
            content:function (){
                trigger.getParent(3).damaged=true;
            },
            sub:true,
            forced:true,
            popup:false,
        },
    },
    group:"sgyj_linfeng_damage",
    ai:{
        effect:{
            player:function (card,player,target){
                if(_status.currentPhase!=player) return;
                if(get.tag(card,'damage')&&!player.needsToDiscard(1)&&target.hp>1){
                    return 'zeroplayertarget';
                }
            },
        },
    },
    },
			"sgyj_baoshen4":{							
				trigger:{
					player:'useCardEnd',					
				},															
				forced:true,
				popup:false,
				content:function(){					
					for(var i=0;i<trigger.targets.length;i++){
			            trigger.targets[i].addSkill('sgyj_baoshen2');					
					    trigger.targets[i].markSkill('sgyj_baoshen2');			  
		            }									
				},				
			},
			"sgyj_baoshen3":{							
				trigger:{					
					target:'useCardEnd',
				},															
				forced:true,
				popup:false,
				content:function(){										
					trigger.player.addSkill('sgyj_baoshen1');					
					trigger.player.markSkill('sgyj_baoshen1');
				},				
			},
			"sgyj_baoshen2":{
				mark:true,
                marktext:'身',
				intro:{
					content:"",
				},            
			},
			"sgyj_baoshen1":{
				mark:true,
                marktext:'保',
				intro:{
					content:"",
				},            
			},
			"sgyj_baoshen":{							
				trigger:{player:'damageEnd'},				
				filter:function(event,player){
					return event.source&&(event.source.hasSkill("sgyj_baoshen1")||event.source.hasSkill("sgyj_baoshen2"));
				},								
				forced:true,
				group:["sgyj_baoshen3","sgyj_baoshen4"],
				content:function(){					
					if(trigger.source.hasSkill("sgyj_baoshen1")){
						player.recover();
					}
					if(trigger.source.hasSkill("sgyj_baoshen2")){
						player.draw(2);
					}
				},				
			},
			"sgyj_xianjian1":{
				mark:true,
                marktext:'见',
				intro:{
					content:"",
				},  
			}, 
			"sgyj_xianjian":{
                enable:"phaseUse",
                usable:1,
                selectTarget:1,
                filterTarget:function (card,player,target){
        return player!=target&&!target.hasSkill('sgyj_xianjian1');
    },
                filter:function (event,player){
        return game.hasPlayer(function(current){
				return !current.hasSkill('sgyj_xianjian1');
		 });  			
    },
                content:function (){        
                'step 0'
                target.draw(target.hp);
				target.addSkill('sgyj_xianjian1');
				target.markSkill('sgyj_xianjian1');
                'step 1'
                if(player.countCards('h')==target.countCards('h')){
					player.insertPhase();
				}
    },
                ai:{
                     result:{
                        target:function (player,target){                       
                if(player.countCards('h')==target.countCards('h')+target.hp) return 1;
                return 0.5;
            },
                    },
                    order:5,
                },
            },
			"sgyj_fanjing2":{				
				shaRelated:true,
				trigger:{target:'useCardToPlayered'},				
				filter:function(event,player){
					return get.distance(player,event.target)<=1&&event.card.name=='sha';
				},				
				logTarget:'player',
				//preHidden:true,
				popup:false,
				forced:true,				
				content:function(){					
					trigger.getParent().directHit.add(player);					
				},
				ai:{
					directHit_ai:true,					
				},
			},
			"sgyj_fanjing":{				
				shaRelated:true,
				trigger:{player:'useCardToPlayered'},				
				filter:function(event,player){
					return get.distance(player,event.target)>1&&event.card.name=='sha';
				},
				group:"sgyj_fanjing2",
				logTarget:'target',
				//preHidden:true,
				forced:true,
				mod:{
					targetInRange:function(card,player,target,now){
						if(card.name=='sha') return true;
					},										
				},
				content:function(){					
					trigger.getParent().directHit.add(trigger.target);					
				},
				ai:{
					directHit_ai:true,					
				},
			},
			"sgyj_baobing2":{
			    trigger:{
                    player:"useCardToPlayer",                            
                }, 
				prompt:function (event,player){					
					var targets=game.filterPlayer(function(current){
				return current.hasSkill('sgyj_baobing')&&current!=player&&get.distance(player,current,'attack')<=1;
		 });  		
		 for(var i=0;i<targets.length;i++){
			    return '是否令'+get.translation(targets[i])+'也成为此杀的目标？';		  
		 }									
				},
 				check:function (event,player){                                                     
                    var targets=game.filterPlayer(function(current){
				return current.hasSkill('sgyj_baobing')&&current!=player&&get.distance(player,current,'attack')<=1;
		 });  		
		 for(var i=0;i<targets.length;i++){
			    return get.attitude(player,targets[i])<=0;		  
		 }					           
                },
                filter:function (event,player){               
                    if(event.card.name!='sha') return false;
					return game.hasPlayer(function(current){
				return current.hasSkill('sgyj_baobing')&&current!=player&&!event.targets.contains(current)&&get.distance(player,current,'attack')<=1;
		 });  				 						
                },	 	      
				//forced:true,				
				content:function(){				
					var targets=game.filterPlayer(function(current){
				return current.hasSkill('sgyj_baobing')&&current!=player&&!trigger.targets.contains(current)&&get.distance(player,current,'attack')<=1;
		 });  		
		 for(var i=0;i<targets.length;i++){
			    player.line(targets[i],'green');
				game.log(targets[i],'成为了',trigger.card,'的额外目标');
				trigger.getParent().targets.push(targets[i]);		  
		 }								
				},
			},
			"sgyj_baobing":{
			    global:"sgyj_baobing2",
				mod:{
					targetInRange:function(card,player,target,now){
						if(card.name=='sha') return true;
					},
					selectTarget:function(card,player,range){
						if(card.name=='sha'&&range[1]!=-1) range[1]+=Infinity;
					},					
				},
			},
			"sgyj_koulve":{
			trigger:{source:'damageBegin'},
				forced:true,
				filter:function (event,player){                     
                    return event.card&&event.card.name=='sha'&&player.countCards('h')<player.hp;    	 		
	            },
				content:function(){				
					trigger.cancel();					
					if(trigger.player.countCards('he')){
						player.gainPlayerCard(trigger.player,'he');
					}
				},
			},
			"sgyj_guanhuo":{
			trigger:{
                    player:"phaseEnd",
                }, 
				forced:true,		
                content:function (){
					var num=game.countPlayer(function(current){ 
                        return current.isLinked(); 
                    });   
					player.draw(num);					
				},
			},	
			"sgyj_luanhua":{
				unique:true,
				enable:'phaseUse',
				limited:true,
				skillAnimation:'epic',
				animationColor:'thunder',
				filterTarget:function(card,player,target){
					return target!=player;
				},
				selectTarget:-1,
				multitarget:true,
				multiline:true,
				content:function(){
					"step 0"
					player.awakenSkill('sgyj_luanhua');
					event.current=player.next;
					event.currented=[];
					"step 1"
					event.currented.push(event.current);
					//event.current.animate('target');
					event.current.chooseControl().set('choiceList',['横置武将牌并弃置两张牌','将武将牌翻面并摸两张牌']).set('ai',function(){            		    
                    if(event.current.isTurnedOver()) return 1;
                    if(event.current.countCards('he')>4) return 0;
						return [0,1].randomGet();
                    });                                    
                "step 2"                                                     
        if(result.index==0){                       
			event.current.link(true);
			event.current.chooseToDiscard('he',Math.min(2,event.current.countCards('he')),true);
			event.current=event.current.next;
					if(event.current!=player&&!event.currented.contains(event.current)){
						game.delay(0.5);
						event.goto(1);
					}else{
						event.finish();
					}			
        }
		else if(result.index==1){            
            event.current.turnOver();
			event.current.draw(2);
            event.current=event.current.next;
					if(event.current!=player&&!event.currented.contains(event.current)){
						game.delay(0.5);
						event.goto(1);
					}else{
						event.finish();
					}			
        }					   					
				},
				ai:{
					result:{
						player:function(player){														
							return 1;
						},						
					},
					order:5,
				},
			},
			"sgyj_shezheng2":{
			    trigger:{
                    source:"damageEnd",
                }, 
				forced:true,
				filter:function (event,player){                     
                    return event.card;    	 		
	            },
				popup:false,
                content:function (){
					player.addSkill('sgyj_shezheng1');	
					player.markSkill('sgyj_shezheng1');									
				},
			},	
			"sgyj_shezheng1":{
			    mark:true,
                marktext:'政',
				intro:{
					content:"",
				},            
			},
			"sgyj_shezheng":{     
            trigger:{
                    global:"useCardToPlayer",                            
                },                                                                               
                filter:function (event,player){               
                    if(event.player==player) return false;
                    //if(get.type(event.card)=='equip') return false;                    
                    //if(get.type(event.card)=='delay') return false;
                    if(event.card.name=='wuxie'||event.card.name=='shan') return false;
                    if(!event.targets||event.targets.length!=1) return false;
                       return event.card&&!event.player.hasSkill('sgyj_shezheng1')&&event.player.isPhaseUsing();
                },	 	      		    
	forced:true,
	usable:1,
     content:function (){
          'step 0'                                     
       player.chooseTarget('涉政',1,lib.translate.sgyj_shezheng_info,function(card,player,target){
            return true;
        }).set('ai',function(target){            
			if(get.effect(trigger.player,trigger.card,target,trigger.player)>0) return get.attitude(player,target)>0;
			return -get.attitude(player,target);            
        });
        'step 1'        
        if(result.bool){       
            event.target=result.targets[0];	
            trigger.player.addTempSkill("sgyj_shezheng2",{player:"useCardAfter"});
			trigger.getParent().excluded.add(trigger.target);                                       
            //trigger.player.useCard(trigger.cards,event.target);
            trigger.getParent().targets.push(event.target);
            }   
            else{
               event.finish();
            }
         },
     },
		   "sgyj_shishou2":{                
                trigger:{                   
                    player:"useCardToBefore",
                }, 				
                forced:true, 
 				popup:"sgyj_shishou",
				filter:function (event,player){                     
                    return event.card&&event.card.name=='du';    	 		
	            },
                content:function (){
                    trigger.cancel(); 
					player.recover();
               },
          },
		   "sgyj_shishou":{                
                trigger:{                   
                    source:"dieBegin",
                }, 
				group:"sgyj_shishou2",
				mod:{
					cardEnabled:function(card){
						if(card.name=='jiu'||card.name=='tao') return false;
					},
				},
				filter:function (event,player){                     
                    return player.isDamaged();    	 		
	            },
                forced:true, 
                content:function (){
                    player.recover(2);                         
               },
          },
		   "sgyj_lingjia2":{                
                trigger:{                   
                    player:"damageBegin",
                }, 
				filter:function (event,player){                     
                    return event.nature&&event.nature=='fire';    	 		
	            },
                forced:true,  
				popup:false,
                content:function (){
                    player.storage.sgyj_lingjia++;
					trigger.num+=player.storage.sgyj_lingjia;                         
               },
          },
		   "sgyj_lingjia1":{                
                trigger:{                   
                    player:"damageBegin",
                }, 
				filter:function (event,player){                     
                    return !event.nature;    	 		
	            },
                forced:true, 
 				popup:false,
                content:function (){
                    trigger.cancel();                         
               },
          },
		   "sgyj_lingjia":{                
                trigger:{
                    global:"gameDrawAfter",
                    player:"enterGame",
                },
				init:function (player){
		player.storage.sgyj_lingjia=0;
	},	
				mod:{
                    globalTo:function (from,to,distance){
            return distance+2;
        },
                },
                forced:true,  
				group:["sgyj_lingjia1","sgyj_lingjia2"],
                content:function (){
                    player.disableEquip(1); 
                    player.disableEquip(2);   
                    player.disableEquip(3);     
                    player.disableEquip(4);     
                    player.disableEquip(5);                         
               },
          },
          "sgyj_chaodu1":{},
		  "sgyj_chaodu":{                
                trigger:{                   
                    global:"dying",
                }, 
				filter:function (event,player){                     
                    if(event.player.hasSkill('sgyj_chaodu1')) return false;
					var x=[0,1,2].randomGet();
					if(x=0) return Math.random()<=0.1;
					if(x=1) return Math.random()<=0.5;
					return Math.random()<=0.05;    	 		
	            },
                check:function (event,player){                                                     
                    return get.attitude(player,event.player)>0;               
                }, 
                content:function (){
                    trigger.player.addSkill('sgyj_chaodu1');
					if(Math.random()<=0.1){
						trigger.player.recover(5-trigger.player.hp);
					}else if(Math.random()<=0.5){
						trigger.player.recover(1-trigger.player.hp);
					}else{
						trigger.player.recover(5-trigger.player.hp);
					}					
               },
          },
		  "sgyj_wujie4":{          
	    mod:{		
		    canBeGained:function (card,player,target,event){
			var targets=game.filterPlayer(function(current){
				return current.hasSkill('sgyj_wujie');
		    });  											
			for(var i=0;i<targets.length;i++){
				if(_status.currentPhase!=targets[i]&&targets[i]==target) return false;
			}										
		},				
	 },     
     },
          "sgyj_wujie3":{								
				trigger:{player:'judgeBefore'},
				forced:true,
				priority:Infinity,
				unique:true,
				popup:"sgyj_wujie",
				content:function(){
					"step 0"															
					var card=get.cards(1);					
					player.showCards(card,get.translation(player)+'的判定结果为'+get.translation(card));					
					if(card){
						trigger.cancel();
						trigger.result={
							card:card,
							judge:trigger.judge(card),							
							number:get.number(card),
							suit:get.suit(card),
							color:get.color(card),
						};
						if(trigger.result.judge>0){
							trigger.result.bool=true;							
						}
						if(trigger.result.judge<0){
							trigger.result.bool=false;							
						}
						game.log(player,'的判定结果为',card);
						trigger.direct=true;						
						game.delay(2);
					}
					else{
						event.finish();
					}
					"step 1"					
					game.addVideo('judge2',null,event.videoId);
					game.delay();
				},				
			},
            "sgyj_wujie2":{     
     trigger:{
         target:"useCardToBefore",
     },	 	 	    
	 forced:true,
	 popup:"sgyj_wujie",
	 filter:function (event,player){                     
         return _status.currentPhase.sex=="female"&&get.type(event.card)=="trick";    	 		
	},
     content:function (){
         trigger.cancel(); 
         },
     },
           "sgyj_wujie":{     
     trigger:{
         player:"damageBegin",
     },	 	 	    
	 forced:true,
	 group:["sgyj_wujie2","sgyj_wujie3"],	
	 global:"sgyj_wujie4",
	 mod:{
		cardname:function(card,player,name){
			if(card.name=='jiu') return 'tao';
		},			
	},
     content:function (){
         trigger.num=1; 
         },
     },
           "sgyj_suzhuang":{
				unique:true,
				global:'sgyj_suzhuang2',				
			},
			"sgyj_suzhuang2":{
				mod:{
					maxHandcardBase:function (player,num){					    
						var targets=game.filterPlayer(function(current){
				    return current.hasSkill('sgyj_suzhuang');
		        });  											
					for(var i=0;i<targets.length;i++){
					    if(get.distance(targets[i],player)<=1) return num-2;
					}																		
				    },						
				},
			},
			
			"sgyj_sihe3":{     
     trigger:{
         player:"phaseEnd",
     },	 	 	    
	 forced:true,
     content:function (){
         "step 0"
         var targets=game.filterPlayer(function(current){
				return current.hasSkill('sgyj_sihe1');
		 });  		
		 for(var i=0;i<targets.length;i++){
			  targets[i].chooseToDiscard("he",Math.min(targets[i].countCards("he"),player.storage.sgyj_sihe2),true);
			  player.draw(targets[i].storage.sgyj_sihe1);
			  targets[i].storage.sgyj_sihe1=0;
			  targets[i].removeSkill("sgyj_sihe1");  
		 }		
		 "step 1"
		 player.storage.sgyj_sihe2=0;		    
         player.removeSkill("sgyj_sihe2");   
         },
     },
		"sgyj_sihe2":{     
     trigger:{
         player:"loseEnd",
     },	 
     init:function (player){
		player.storage.sgyj_sihe2=0;
	},			 	
    filter:function (event,player){
        if(event.type!='discard') return false;                
            return true;
    },
	forced:true,
     content:function (){
         player.storage.sgyj_sihe2+=trigger.num;      
         },
     },
			"sgyj_sihe1":{
			trigger:{
         player:"gainEnd",
     },	 
     init:function (player){
		player.storage.sgyj_sihe1=0;
	},			 	    
	forced:true,
     content:function (){
         player.storage.sgyj_sihe1+=trigger.num;      
         },
			},   
			"sgyj_sihe":{     
     trigger:{
         player:"phaseBegin",
     },	 	 
     
	group:["sgyj_sihe3"],	
    filter:function (event,player){              
         return true;
    },
	direct:true,
     content:function (){
          'step 0'                                     
       player.chooseTarget('私阖',1,lib.translate.sgyj_sihe_info,function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target);            
        });
        'step 1'        
        if(result.bool){       
            event.target=result.targets[0];	
            event.target.addSkill("sgyj_sihe1");     
            player.addSkill("sgyj_sihe2");          
            }   
            else{
               event.finish();
            }                                            
         },
     },
		   "sgyj_zhezhi3":{},
           "sgyj_zhezhi2":{},
           "sgyj_zhezhi1":{},
             "sgyj_zhezhi":{     
     trigger:{
         player:"dieBegin",
     },	 	 	
    filter:function (event,player){              
         return player.storage.sgyj_qiutong.length>0;
    },
	direct:true,
     content:function (){
          'step 0'                                     
       player.chooseTarget('折枝',1,lib.translate.sgyj_zhezhi_info,function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target);            
        });
        'step 1'        
        if(result.bool){       
            event.target=result.targets[0];	
            event.controls=[];
            event.num=0;	                       
            }   
            else{
               event.finish();
            }
        'step 2'   
            if(event.num<player.storage.sgyj_qiutong.length){
                if(!player.hasSkill('sgyj_zhezhi1')){
                    event.controls.push('废除装备区');
                }
                if(!player.hasSkill('sgyj_zhezhi2')){
                    event.controls.push('扣减一半体力上限');
                }
                if(!player.hasSkill('sgyj_zhezhi3')){
                    event.controls.push('失去所有锁定技');
                }
                player.chooseControl(event.controls).ai=function(){         
                    return Math.random();
                };
            }else{
                event.finish();
            }
          'step 3'                       
        event.control=result.control;
        switch(event.control){
            case '废除装备区':event.goto(4);break;
            case '扣减一半体力上限':event.goto(5);break;
            case '失去所有锁定技':event.goto(6);break;
        }    
        'step 4' 
        player.addSkill('sgyj_zhezhi1');
        event.target.disableEquip(1);
        event.target.disableEquip(2);
        event.target.disableEquip(3);
        event.target.disableEquip(4);
        event.target.disableEquip(5);
        event.controls=[];
        event.num++;
        event.goto(2);
        'step 5' 
        player.addSkill('sgyj_zhezhi2');
        event.target.loseMaxHp(Math.floor(event.target.maxHp/2));
        event.controls=[];
        event.num++;
        event.goto(2);   
        'step 6' 
        player.addSkill('sgyj_zhezhi3');
        var skills=event.target.skills.slice(0);
        for(var i=0;i<skills.length;i++){		
            var info=get.info(skills[i]);
            if(info&&(info.forced)){
                event.target.removeSkill(skills[i]);
            } 
        }
        event.controls=[];
        event.num++;
        event.goto(2);                                
         },
     },
            "sgyj_qiutong":{                                
                init:function (player){
					player.storage.sgyj_qiutong=[];
				},				
                enable:"phaseUse",
                usable:1,
                selectTarget:1,
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('h')&&target.isMaxHandcard();
    },
                filter:function (event,player){
        return player.storage.sgyj_qiutong.length<=3;
    },
                content:function (){        
                'step 0'
                player.chooseCardButton(target.getCards('h'),[1,Infinity],'选择获得任意张未以此法获得过的类型的牌').set('filterButton',function(button){           
             return !player.storage.sgyj_qiutong.contains(get.type(button.link));
         }).set('ai',function(button){
             return get.value(button.link);
         });
         'step 1'
         if(result.bool){                             
            for(var i=0;i<result.links.length;i++){
                if(!player.storage.sgyj_qiutong.contains(get.type(result.links[i]))){
                    player.storage.sgyj_qiutong.push(get.type(result.links[i]));
                }
                player.gain(result.links[i],'gain2');
            } 
        }             
    },
                ai:{
                     result:{
                        target:function (player,target){                       
                if(player.hp<2) return -1;
                return 1;
            },
                    },
                    order:9,
                },
            },
           "sgyj_gaiyong":{                
                trigger:{
                    player:"phaseBegin",
                },  
                forced:true,               						                
                content:function (){
                'step 0'                
                player.chooseControl().set('choiceList',['跳过摸牌阶段','跳过出牌阶段']).set('ai',function(){            		    
                    var list=[0,1];
                    if(player.countCards('h')<3) return 1;
						return 0;
                    });                
                    
                'step 1'                                                      
        if(result.index==0){                       
			player.skip('phaseDraw');
			event.finish();	
        }
		else if(result.index==1){            
            player.skip('phaseUse');
            event.finish();
        }					        
    },
            },
            "sgyj_youyou2":{     
     trigger:{
         global:"phaseEnd",
     },	 	 	
    filter:function (event,player){         
         return player!=event.player&&player.countCards('h')>event.player.countCards('h');
    },
	frequent:true,
     content:function (){
          player.chooseToUse();         
         },
     },
            "sgyj_youyou":{     
     trigger:{
         global:"phaseBegin",
     },	
     group:"sgyj_youyou2", 	 	
    filter:function (event,player){         
         return player!=event.player&&player.countCards('h')<event.player.countCards('h');
    },
	frequent:true,
     content:function (){
          player.draw();         
         },
     },
            "sgyj_chumou2":{
            trigger:{player:['useCard','useCardToPlayered']},
				forced:true,
				charlotte:true,
				unique:true,				
				content:function(){				
					trigger.nowuxie=true;
					trigger.getParent().directHit.add(trigger.target);
					player.removeSkill('sgyj_chumou2');
				},            
            },
            "sgyj_chumou1":{
				trigger:{player:'useCard2'},
				direct:true,
				filter:function(event,player){
					var type=get.type(event.card);
					return type=='basic'||type=='trick';
				},
				content:function(){
					'step 0'					
					var goon=false;
					var info=get.info(trigger.card);
					if(trigger.targets&&!info.multitarget){
						var players=game.filterPlayer();
						for(var i=0;i<players.length;i++){
							if(lib.filter.targetEnabled2(trigger.card,player,players[i])&&!trigger.targets.contains(players[i])){
								goon=true;break;
							}
						}
					}
					if(goon){
						player.chooseTarget('促谋：是否额外指定一名'+get.translation(trigger.card)+'的目标？',function(card,player,target){
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
							event.goto(3);
						}
					}
					'step 1'
					if(result.bool){
						if(!event.isMine()) game.delayx();
						event.target=result.targets[0];
					}
					else{
						event.finish();
					}
					'step 2'
					if(event.target){
						player.logSkill('sgyj_chumou1',event.target);
						trigger.targets.add(event.target);
					}
					player.removeSkill('sgyj_chumou1');
					event.finish();
					'step 3'
					player.chooseTarget('促谋：是否减少一名'+get.translation(trigger.card)+'的目标？',function(card,player,target){
						return _status.event.targets.contains(target);
					}).set('ai',function(target){
						var trigger=_status.event.getTrigger();
						return -get.effect(target,trigger.card,trigger.player,_status.event.player);
					}).set('targets',trigger.targets);
					'step 4'
					if(result.bool){
						event.targets=result.targets;
						if(event.isMine()){
							player.logSkill('sgyj_chumou1',event.targets);
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
					'step 5'
					player.logSkill('sgyj_chumou1',event.targets);
					player.removeSkill('sgyj_chumou1');
				}
			},
			"sgyj_chumou":{                                
                enable:"phaseUse",
                usable:1,
                selectTarget:1,
                filterCard:true,
                selectCard:1,
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('h');
    },
                filter:function (event,player){
        return player.countCards('he');
    },
                content:function (){        
                "step 0"
                event.type=get.type(cards[0]);
				var hcards=target.getCards('h');
				event.types=[];
				event.notypes=[];
				for(var i=0;i<hcards.length;i++){
                    if(get.type(hcards[i])==event.type&&target.hasUseTarget(hcards[i])){
						event.types.push(hcards[i]);
					}
					if(get.type(hcards[i])!=event.type&&target.hasUseTarget(hcards[i])){
					    event.notypes.push(hcards[i]);
					}					
                }				
				if(event.types.length>0&&event.notypes.length==0){
					event.goto(2);
				}
				if(event.types.length==0&&event.notypes.length>0){
					event.goto(5);
				}
				if(event.types.length>0&&event.notypes.length>0){
					target.chooseControl().set('choiceList',['使用一张类型为'+get.translation(event.type)+'牌的牌，此牌可额外指定或减少一个目标','使用一张类型不为'+get.translation(event.type)+'牌的牌，此牌不可被抵消']).set('ai',function(){            		                        
                    var num=game.countPlayer(function(current){ 
                        return target.canUse('sha',current); 
                    });        
                    if(target.countCards('h','sha')&&num>0) return 1;
						return 0;
                }); 	
				}                				
            "step 1"
            if(result.index==0){
                event.goto(2);           
            }
		    else if(result.index==1){ 
		        event.goto(5);
            }	
		    "step 2"
			target.chooseButton(['使用一张类型为'+get.translation(event.type)+'牌的牌，此牌可额外指定或减少一个目标',[event.types,'vcard']]).set('ai',function(button){																									
				return Math.random();
			});			         
            "step 3"
            if(result&&result.bool&&result.links[0]){  
                //target.addTempSkill('sgyj_chumou1',{player:'useCardAfter'});
                target.addTempSkill('sgyj_chumou1');
                //var card={name:result.links[0][2],nature:result.links[0][3]};
				var card=result.links[0];
				target.chooseUseTarget(card,true);	
				//
            }
		    "step 4"
		    target.removeSkill('sgyj_chumou1');			
			event.finish();
			"step 5"
		    target.chooseButton(['使用一张类型不为'+get.translation(event.type)+'牌的牌，此牌不可被抵消',[event.notypes,'vcard']]).set('ai',function(button){																									
				return Math.random();
			});		    
			"step 6"
            if(result&&result.bool&&result.links[0]){                  
				//target.addTempSkill('sgyj_chumou2',{player:'useCardAfter'});
				target.addTempSkill('sgyj_chumou2');
				target.chooseUseTarget(result.links[0],true);
				//
            }
            "step 7"
            target.removeSkill('sgyj_chumou2');
			event.finish();
        },
                ai:{
                     result:{
                        target:function (player,target){                                      
                return 1;
            },
                    },
                    order:9,
                },
            },
            "sgyj_reqiaoxie":{     
     trigger:{
         player:"loseAfter",
     },	 	 	
    filter:function (event,player){
        if(event.type!='discard') return false;                
            return true;
    },
	direct:true,
     content:function (){
          'step 0'                                     
       player.chooseTarget('巧泄',1,lib.translate.sgyj_reqiaoxie_info,function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return get.attitude(_status.event.player,target)>0;            
        });
        'step 1'        
        if(result.bool){       
            result.targets[0].draw();		                       
            }   
            else{
               event.finish();
            }                       
         },
     },
            "sgyj_yanxiao2":{                                
                trigger:{					
					global:"die",
				},
				forced:true,
				popup:'sgyj_yanxiao',
				forceDie:true,						
				filter:function (event,player){
					return player!=event.player&&event.player==player.storage.sgyj_jiaoyi2;
				},
				content:function (){										
					player.die();																																				
				},
            },			
            "sgyj_yanxiao":{                                
                trigger:{					
					player:"die",
				},
				forced:true,
				forceDie:true,						
				filter:function (event,player){
					return player.storage.sgyj_jiaoyi2&&player.storage.sgyj_jiaoyi2.isIn();
				},
				group:"sgyj_yanxiao2",
				content:function (){					
					var target=player.storage.sgyj_jiaoyi2;															
					target.die();																																									
				},
            },			
            "sgyj_jiaoyi3":{                                
                trigger:{					
					player:["recoverEnd"],
				},
				forced:true,
				popup:false,				
				filter:function (event,player){
					return player.storage.sgyj_jiaoyi2&&player.storage.sgyj_jiaoyi2.isIn()&&event.num>0;
				},
				content:function (){					
					var target=player.storage.sgyj_jiaoyi2;			
					player.line(target,'green');					
					target.recover(trigger.num);									
				},
            },
            "sgyj_jiaoyi2":{                
                onremove:true,
                unique:true,
                mark:"character",
				intro:{
					content:"当你摸牌或回复体力后，$摸等量的牌或回复等量的体力",
				},
                trigger:{					
					player:["drawEnd"],
				},
				forced:true,
				popup:false,
				group:"sgyj_jiaoyi3",
				filter:function (event,player){
					return player.storage.sgyj_jiaoyi2&&player.storage.sgyj_jiaoyi2.isIn()&&event.num>0;
				},
				content:function (){					
					var target=player.storage.sgyj_jiaoyi2;			
					player.line(target,'green');
					target.draw(trigger.num);						
				},
            },
            "sgyj_jiaoyi":{                
                limited:true,
                init:function (player){
					player.storage.sgyj_jiaoyi=false;
				},				
                enable:"phaseUse",
                selectTarget:1,
                filterTarget:function (card,player,target){
        return player!=target;
    },
                filter:function (event,player){
        return true;
    },
                content:function (){        
                player.storage.sgyj_jiaoyi2=target;
				player.addSkill('sgyj_jiaoyi2');
				player.storage.sgyj_jiaoyi=true;
				player.awakenSkill('sgyj_jiaoyi');                
    },
                ai:{
                     result:{
                        target:function (player,target){                       
                if(player.hp<2) return -1;
                return 1;
            },
                    },
                    order:9,
                },
            },
            "sgyj_duliang2":{
            mark:true,
            marktext:'粮',
				intro:{
					content:"不能成为督粮的目标",
				},
            },
            "sgyj_duliang":{               
                trigger:{
                    global:"phaseUseBegin",
                },
                check:function (event,player){                                                     
                    return get.attitude(player,event.player)>0;               
                },                                                      			
                filter:function (event,player){       
		  return !event.player.hasSkill('sgyj_duliang2')&&!event.player.isMaxHandcard();
      },
                content:function (){
                'step 0'                                     
       trigger.player.draw(2);
        'step 1'        
        if(trigger.player.isMaxHandcard(true)){
            trigger.player.addSkill('sgyj_duliang2');
            trigger.player.markSkill('sgyj_duliang2');
        }                          
        },
            },
		 "sgyj_manxin":{                
                trigger:{
                    player:"phaseEnd",
                }, 	
                direct:true,
                filter:function (event,player){         
		  return player.countCards('he',{suit:'heart'});
      },               						
                content:function (){
					'step 0'
					event.num=player.hp;
					event.cards=get.cards(event.num);
					event.list=[];
					event.list2=[];					
					'step 1'
					player.chooseCardButton(event.cards,[0,player.countCards('he',{suit:'heart'})],'选择至多'+get.cnNumber(player.countCards('he',{suit:'heart'}))+'张要交换的牌').set('filterButton',function(button){           
             return true;
         }).set('ai',function(button){
             return get.value(button.link);
         });
         'step 2'
         if(result.bool){                      
            //game.cardsDiscard(result.links);
            for(var i=0;i<result.links.length;i++){
                event.list.push(result.links[i]);
            }
            player.chooseCardButton(player.getCards('he'),event.list.length,'选择'+get.cnNumber(event.list.length)+'张要交换的牌',true).set('filterButton',function(button){           
             return get.suit(button.link)=='heart';
         }).set('ai',function(button){
             return -get.value(button.link);
         });
        }       
        else event.finish();
        'step 3'
        if(result.bool){            
			player.gain(event.list,'log','gain2');
			for(var i=0;i<result.links.length;i++){
                event.list2.push(result.links[i]);
            }
			while(event.list2.length){
				ui.cardPile.insertBefore(event.list2.pop(),ui.cardPile.firstChild);
			}			
			if(event.list2.length==event.num){
			var list=game.filterPlayer(function(current){ 
                return player.canUse('nanman',current); 
            });                 
            list.sortBySeat(); 
            player.useCard({name:'nanman'},list);   
            }	
		}         
        else event.finish();
				},
		   },
		   "sgyj_mingbian":{
				trigger:{player:'damageEnd'},
				frequent:true,				
				content:function(){
					'step 0'
					if(player.hasSkill('sgyj_qiean5')){
						player.draw();
						event.finish();
					}
					else{
						var list=['draw_card','更改描述'];
						var prompt;
						if(!player.hasSkill('sgyj_qiean3')){
							prompt='摸一张牌或更改明辨的描述<br><br><div class="text">更改描述：将【切案】的“所有”改为“任意”';
						}
						else if(player.hasSkill('sgyj_qiean3')&&!player.hasSkill('sgyj_qiean4')){
							prompt='摸一张牌或更改明辨的描述<br><br><div class="text">更改描述：删除【切案】的“或令”';
						}
						else if(player.hasSkill('sgyj_qiean3')&&player.hasSkill('sgyj_qiean4')&&!player.hasSkill('sgyj_qiean5')){
							prompt='摸一张牌或更改明辨的描述<br><br><div class="text">更改描述：【切案】中的摸牌或弃牌数+1';
						}
						player.chooseControl(list,function(){
							if(!_status.event.player.hasSkill('sgyj_qiean')||player.hp<2) return 'draw_card';
							return '更改描述';
						}).set('prompt',prompt);
					}
					'step 1'
					if(result.control=='draw_card'){
						player.draw();
					}
					else{
						game.log(player,'更改了','【切案】','的描述');
						player.popup('更改描述');
						if(!player.hasSkill('sgyj_qiean3')){						    
						    player.addSkill('sgyj_qiean3');
						    player.removeSkill('sgyj_qiean');
						}
						else if(player.hasSkill('sgyj_qiean3')&&!player.hasSkill('sgyj_qiean4')){
						    player.addSkill('sgyj_qiean4');
						}
						else if(player.hasSkill('sgyj_qiean3')&&player.hasSkill('sgyj_qiean4')&&!player.hasSkill('sgyj_qiean5')){
						    player.addSkill('sgyj_qiean5');
						}
					}
				},
			},
			"sgyj_qiean3":{                
                trigger:{
                    player:"phaseZhunbeiBegin",
                }, 				
                filter:function (event,player){         
		  return game.hasPlayer(function(current){
                return current.hasSkill('sgyj_qiean1')||current.hasSkill('sgyj_qiean2');
	 		});
      },               						                
                content:function (){
                'step 0' 
                if(!player.hasSkill('sgyj_qiean4')){
                player.chooseControl().set('choiceList',['前一轮任意受到过伤害的角色摸一张牌','前一轮任意造成过伤害的角色弃一张牌']).set('ai',function(){            		                        
                    if(player.hasSkill('sgyj_qiean1')) return 0;
						return 1;
                }); 					
                }else{
                    event.goto(4);                
                }
        'step 1'                                                      
        if(result.index==0){
            player.chooseTarget('切案',[1,Infinity],lib.translate.sgyj_qiean3_info,function(card,player,target){
            return target.hasSkill('sgyj_qiean1');
        }).set('ai',function(target){
            return get.attitude(_status.event.player,target)>0;           
        });
        }
		else if(result.index==1){ 
		    player.chooseTarget('切案',[1,Infinity],lib.translate.sgyj_qiean3_info,function(card,player,target){
            return target.hasSkill('sgyj_qiean2');
        }).set('ai',function(target){
            return -get.attitude(_status.event.player,target);            
        });		
        }					      
        'step 2'
        if(result.bool){       
            event.num=0; 
            event.targets=result.targets;                        
            }   
            else{
               event.finish();
            }   
          'step 3'                            
        if(event.num<event.targets.length){  
            if(event.targets[event.num].hasSkill('sgyj_qiean1')){
                event.targets[event.num].draw(); 
				//event.targets[event.num].removeSkill('sgyj_qiean1');					
            }
            if(event.targets[event.num].hasSkill('sgyj_qiean2')&&event.targets[event.num].countCards('he')){
                event.targets[event.num].chooseToDiscard('he',1,true); 
				//event.targets[event.num].removeSkill('sgyj_qiean2');
            }                                                             
            event.num++;
            event.redo();
        }
        else{
            for(var i=0;i<game.players.length;i++){
                game.players[i].removeSkill('sgyj_qiean1');				 
				game.players[i].removeSkill('sgyj_qiean2');					                 
			}			
            event.finish();      
        }                     
        'step 4'
        player.chooseTarget('切案',[1,Infinity],lib.translate.sgyj_qiean3_info,function(card,player,target){
            return target.hasSkill('sgyj_qiean1')||target.hasSkill('sgyj_qiean2');
        }).set('ai',function(target){
            return Math.random();            
        });
        'step 5'
        if(result.bool){       
            event.num=0; 
            event.targets=result.targets;                        
            }   
            else{
               event.finish();
            }   
          'step 6'                            
        if(event.num<event.targets.length){  
            if(event.targets[event.num].hasSkill('sgyj_qiean1')){
                if(!player.hasSkill('sgyj_qiean5')){
                    event.targets[event.num].draw(); 
                }else{
                    event.targets[event.num].draw(2); 
                }
				//event.targets[event.num].removeSkill('sgyj_qiean1');					
            }
            if(event.targets[event.num].hasSkill('sgyj_qiean2')&&event.targets[event.num].countCards('he')){
                if(!player.hasSkill('sgyj_qiean5')){
                    event.targets[event.num].chooseToDiscard('he',1,true); 
                }else{
                    event.targets[event.num].chooseToDiscard('he',Math.min(2,event.targets[event.num].countCards('he')),true);
                }
				//event.targets[event.num].removeSkill('sgyj_qiean2');
            }                                                             
            event.num++;
            event.redo();
        }
        else{
            for(var i=0;i<game.players.length;i++){
                game.players[i].removeSkill('sgyj_qiean1');				 
				game.players[i].removeSkill('sgyj_qiean2');					                 
			}		
            event.finish();      
        }                                    
    },
            },
		   "sgyj_qieandamage":{                
                trigger:{
                    global:"damageEnd",
                }, 
				forced:true,
				popup:false,
                content:function (){
					trigger.player.addSkill('sgyj_qiean1');
					if(trigger.source){
					    trigger.source.addSkill('sgyj_qiean2');
					}
				},
		   },
		   "sgyj_qiean5":{},
		   "sgyj_qiean4":{},
		   "sgyj_qiean2":{},
		   "sgyj_qiean1":{},
		   "sgyj_qiean":{                
                trigger:{
                    player:"phaseZhunbeiBegin",
                }, 
				group:'sgyj_qieandamage',
                filter:function (event,player){         
		  return game.hasPlayer(function(current){
                return current.hasSkill('sgyj_qiean1')||current.hasSkill('sgyj_qiean2');
	 		});
      },               						                
                content:function (){
                'step 0'                
				player.chooseControl().set('choiceList',['前一轮所有受到过伤害的角色摸一张牌','前一轮所有造成过伤害的角色弃一张牌']).set('ai',function(){            		                        
                    if(player.hasSkill('sgyj_qiean1')) return 0;
						return 1;
                }); 								
                'step 1'                                                      
        if(result.index==0){                       
			for(var i=0;i<game.players.length;i++){
                 game.players[i].removeSkill('sgyj_qiean2');
				 if(game.players[i].hasSkill('sgyj_qiean1')){
                    game.players[i].draw(); 
					game.players[i].removeSkill('sgyj_qiean1');					
                 }
			}			
        }
		else if(result.index==1){            
            for(var i=0;i<game.players.length;i++){
                 game.players[i].removeSkill('sgyj_qiean1');				 
				 if(game.players[i].hasSkill('sgyj_qiean2')&&game.players[i].countCards('he')){
                    game.players[i].chooseToDiscard('he',1,true); 
					game.players[i].removeSkill('sgyj_qiean2');
                 }
			}
        }					        
    },
            },
		   "sgyj_zhuliu":{               
                trigger:{
                    global:"damageEnd",
                },                                       
                direct:true,
				usable:1,
                filter:function (event,player){
          if(player==event.source) return false;
		  return game.hasPlayer(function(current){
                return player!=current&&event.source!=current&&event.player!=current&&current.isAlive();
	 		});
      },
                content:function (){
                'step 0'                                     
       player.chooseTarget('【逐流】',1,lib.translate.sgyj_zhuliu_info,function(card,player,target){
            return target!=player&&target!=trigger.source&&trigger.player!=target;
        }).set('ai',function(target){
            return Math.random();            
        });
        'step 1'        
        if(result.bool){       
            result.targets[0].showCards(result.targets[0].getCards('h'));
			player.draw(Math.min(5,result.targets[0].countCards('h')));                        
            }   
            else{
               event.finish();
            }                           
        },
            },
		   "sgyj_gongzhu":{
				trigger:{
					global:['gameStart'],					
				},
				forced:true,
				filter:function(event,player){
					return player!=game.zhu;
				},
				//mode:["identity"],
				mod:{			
					maxHandcardBase:function (player,num){
					    return num+game.zhu.maxHp;
				    },													
				},				
				content:function(){					
					'step 0'
		event.skills=[]; 				
		'step 1'
		var skills=game.zhu.getSkills();
        for(var i=0;i<skills.length;i++){
            var info=get.info(skills[i]);
            if(info!=undefined&&!info.charlotte&&(!info.unique||info.gainable)&&!info.juexingji&&!info.limited&&!info.zhuSkill&&!info.hiddenSkill) event.skills.push(skills[i]);
        }      		
        var list=event.skills.randomGet();
		player.addSkill(list);
		player.popup(list,'fire');		
        player.flashAvatar('sgyj_gongzhu',list);   
        game.log(player,'获得了技能','#g【'+get.translation(list)+'】');
					/*for(var i=0;i<game.players.length;i++){						
						var skills=game.players[i].skills.slice(0);
                        for(var j=0;j<skills.length;j++){
                            var info=get.info(skills[j]);
                            if(info!=undefined&&info.zhuSkill){
				                player.addSkill(skills[j]);
				                player.flashAvatar('sgyj_gongzhu',skills[j]);
			                }
                        }
					}*/							
				},
			},
		   "sgyj_zhefu":{				
				trigger:{player:['drawAfter','loseAfter','changeHp']},				
				forced:true,
				filter:function(event,player){
					return player.hp==1;
				},
				content:function(){
					if(player.countCards('h')>2){
						player.chooseToDiscard('h',player.countCards('h')-2);
					}
					else if(player.countCards('h')<2){
						player.drawTo(2);
					}
				}
			},
			"sgyj_tanxin2":{				
				trigger:{player:'judge'},				
				filter:function(event,player){
					return player.isAlive();
				},
				forced:true,
				content:function(){					
					player.gain(player.judging[0],'gain2');
					player.removeSkill("sgyj_tanxin2");
				}
			},
		   "sgyj_tanxin":{				
				trigger:{player:'damage'},				
				filter:function(event,player){
					return player.isAlive();
				},
				content:function(){
					player.addTempSkill("sgyj_tanxin2");
					game.delay();
					player.judge();					
					//player.gain(result.cards,'gain2');
				}
			},
		   "sgyj_linglong2":{
			trigger:{source:'damageBegin'},
				forced:true,
				popup:false,
				content:function(){				
					trigger.cancel();
					game.delay();
					trigger.player.loseHp();
				},
			},
           "sgyj_linglong":{
				audio:2,
				trigger:{player:'phaseDrawBegin1'},
				direct:true,
				filter:function(event,player){
					return !event.numFixed;
				},
				content:function(){
					"step 0"
					var check;
					var i,num=game.countPlayer(function(current){
						return current!=player&&current.countCards('h')&&get.attitude(player,current)<=0;
					});
					check=(num>=2);
					player.chooseTarget(get.prompt('sgyj_linglong'),'获得其他一名其他角色的各一张手牌',1,function(card,player,target){
						return target.countCards('h')>0&&player!=target;
					},function(target){
						if(!_status.event.aicheck) return 0;
						var att=get.attitude(_status.event.player,target);
						if(target.hasSkill('tuntian')) return att/10;
						return 1-att;
					}).set('aicheck',check);
					"step 1"
					if(result.bool){
						player.logSkill('sgyj_linglong',result.targets[0]);
						player.addTempSkill('sgyj_linglong2');
						player.gainPlayerCard(result.targets[0],'h');
						//trigger.changeToZero();
					}
					else{
						event.finish();
					}
					"step 2"
					game.delay();
				},
				ai:{
					threaten:2,
					expose:0.3
				}
			},
			"sgyj_sidao":{
				audio:2,
				trigger:{
					player:'useCardAfter',
				},
				filter:function(event,player){
					if(player.hasSkill('sgyj_sidaoy')||!player.countCards('hs')) return false;
					if(!event.targets||!event.targets.length||!event.isPhaseUsing(player)) return false;
					var history=player.getHistory('useCard');
					var index=history.indexOf(event)-1;
					if(index<0) return false;
					var evt=history[index];
					if(!evt||!evt.targets||!evt.targets.length||!evt.isPhaseUsing(player)) return false;
					for(var i=0;i<event.targets.length;i++){
						if(evt.targets.contains(event.targets[i])&&lib.filter.filterTarget({name:'shunshou'},player,event.targets[i])) return true;
					}
					return false;
				},
				direct:true,
				content:function(){
					player.addTempSkill('sgyj_sidaoz');
					var targets=player.getLastUsed(1).targets;
					var next=player.chooseToUse();
					next.set('targets',game.filterPlayer(function(current){
						return targets.contains(current)&&trigger.targets.contains(current);
					}));
					next.set('openskilldialog',get.prompt2('sgyj_sidao'));
					next.set('norestore',true);
					next.set('_backupevent','sgyj_sidaox');
					next.set('custom',{
						add:{},
						replace:{window:function(){}}
					});
					next.backup('sgyj_sidaox');				
				},
			},
			
			sgyj_sidaox:{
				audio:'sgyj_sidao',
				filterCard:function(card){
					return get.itemtype(card)=='card';
				},
				position:"hs",
				viewAs:{
					name:"shunshou",
				},
				filterTarget:function (card,player,target){
					return _status.event.targets&&_status.event.targets.contains(target)&&lib.filter.filterTarget.apply(this,arguments);
				},
				prompt:"将一张手牌当顺手牵羊使用",
				check:function (card){return 7-get.value(card)},
				onuse:function(links,player){
				    //player.addTempSkill('sgyj_sidaoy');//更新：删去了出牌阶段限一次				    
				},
			},
			
			sgyj_sidaoy:{},
			"sgyj_sidaoz":{
			trigger:{player:'useCard'},
				forced:true,
				charlotte:true,
				unique:true,
				filter:function (event,player){
					return event.card.name=='shunshou';
				},
				content:function(){				
					trigger.nowuxie=true;
					game.delay();
					player.removeSkill('sgyj_sidaoz');
				},
			},
           "sgyj_dujian":{		          		
                enable:"phaseUse",
                usable:1,                           
                filterTarget:true,  
                init:function (player){
                    player.storage.sgyj_dujian=0;
                },   
                intro:{
          		content:function (storage){
         			return '你已发动【督建】'+storage+'次';
          	 	},
                },                                
                content:function (){
            "step 0"       
             player.storage.sgyj_dujian++;
             player.markSkill("sgyj_dujian");
             player.update();
            "step 1"
            var maxe=true; 
            var mine=true;
             for(var i=0;i<game.players.length;i++){
                 if(target!=game.players[i]&&target.countCards('e')<game.players[i].countCards('e')){
                      maxe=false;                       
                 }
                 else if(target!=game.players[i]&&target.countCards('e')>game.players[i].countCards('e')){
                      mine=false;                      
                 }
            }                                     
            if(maxe){ 
                target.draw(player.storage.sgyj_dujian);
            }  
            if(mine){ 
                target.chooseToDiscard('he',player.storage.sgyj_dujian,true);
            }                                                                                 
    },
       ai:{
         result:{
            target:function (player,target){ 
                for(var i=0;i<game.players.length;i++){
                 if(target!=game.players[i]&&target.countCards('e')>game.players[i].countCards('e')){
                      return 1;
                 }
                 else if(target!=game.players[i]&&target.countCards('e')<game.players[i].countCards('e')){
                      return -target.countCards('h');
                 }
                }                           
                
            },
                    },
            order:8,
            threaten:0.5,
            expose:0.5,
        },  
            },
           "sgyj_jinzhan":{				
				trigger:{player:['useCardAfter']},					
				forced:true,
				mod:{             								
                    cardUsable:function (card,player,event){                              
                        if(player.countUsed()>=4) return 0;
                    },             
                    targetInRange:function (card,player,target,now){
						if(player.countUsed()<=4) return true;                                                                 
					},                    
                },                	
				content:function (){
				    if(player.countUsed()==1){
				        player.draw(2);
				    }
				    else if(player.countUsed()==2){
				        if(player.countCards('he')>1){
				            player.chooseToDiscard('he',2,true);
				        }
				    }
				    else if(player.countUsed()==3){
				        player.recover();
				    }
				    else if(player.countUsed()==4){
				        player.loseHp(2);
				    }
				},
			},
           "sgyj_qinnong":{               
                trigger:{
                    player:"phaseEnd",
                },                                       
                direct:true,
                filter:function (event,player){            
        return true;
    },
                content:function (){
                'step 0'  
                player.turnOver();
                player.chooseDrawRecover(2,true,function(event,player){
					if(player.hp==1&&player.isDamaged()) return 'recover_hp';
						return 'draw_card';
				});
               'step 1'                                     
       player.chooseTarget('【亲农】',[1,Infinity],lib.translate.sgyj_qinnong_info,function(card,player,target){
            return target!=player;
        }).set('ai',function(target){
            return get.attitude(_status.event.player,target)>0;            
        });
        'step 2'        
        if(result.bool){       
            event.num=0; 
            event.targets=result.targets;                        
            }   
            else{
               event.finish();
            }               
           'step 3'                        
        if(event.num<event.targets.length){  
            event.targets[event.num].chooseDrawRecover(2,true,function(event,player){
				if(player.hp==1&&player.isDamaged()) return 'recover_hp';
						return 'draw_card';
			});                                             
            player.logSkill("sgyj_qinnong");                              
            event.num++;
            event.redo();
        }
        else{
            event.finish();      
        } 
    },
            },
          "sgyj_duntao2":{}, 
          "sgyj_duntao":{                
                trigger:{
                    player:"damageEnd",
                },                               																
				filter:function (event,player){				    
				    return player.isAlive()&&event.source&&event.source.isAlive();   				
				},			
				mod:{
					targetEnabled:function (card,player,target){
						if(player.hasSkill('sgyj_duntao2')) return false;
					},
				},			    							                
                content:function (){
                    player.swapHandcards(trigger.source);
                    trigger.source.addTempSkill('sgyj_duntao2');	        
    },
            ai:{         
                order:8,                       
            },  
            }, 
          "sgyj_xinyan":{            
            mod:{
				cardname:function (card,player,name){															
			        if(_status.currentPhase==player&&get.type(card)=='basic'&&card.name!='tao') return 'sha';
					if(_status.currentPhase!=player&&get.type(card)=='basic'&&card.name!='tao') return 'shan';
				},					
		    },
        },
          "sgyj_migao":{		          		
                enable:"phaseUse",
                usable:1,                           
                filterTarget:function (card,player,target){
        return target.countCards('h');
    },                
                content:function (){
        "step 0"       
         player.chooseCardButton(target.getCards('h'),1,'选择其中一张手牌').set('filterButton',function(button){           
             return true;
         }).set('ai',function(button){
             return get.value(button.link);
         });
       "step 1"
        if(result.bool){          
            event.cards=result.links[0]; 
            player.chooseTarget(get.prompt2('sgyj_migao'),1,true,function(card,player,target){
            return target!=event.target;
        },function(target){            
            return get.attitude(player,target)>0;
        });                         
        }       
        else event.finish();
        "step 2"
        if(result.bool){ 
            target.$give(event.cards,result.targets[0]);
            result.targets[0].gain(event.cards,target); 
        }       
        else event.finish();              
    },
       ai:{
         result:{
            target:function (player,target){             
                return -target.countCards('h');
            },
                    },
            order:8,
            threaten:0.5,
            expose:0.5,
        },  
            },
          "sgyj_shishi2":{                
                trigger:{
                    player:["dieBegin"],
                },                             						
                forced:true,
                content:function (){
           'step 0'
        player.chooseTarget(get.prompt2('sgyj_shishi'),1,true,function(card,player,target){
            return target!=player;
        },function(target){            
            return get.attitude(player,target)<=0;
        });        
           'step 1' 
        if(result.bool){               			
			result.targets[0].addSkill('sgyj_shishi');				         
        }
        else{
            event.finish();
        }
    },
            },
           "sgyj_shishi":{                
                trigger:{
                    player:"damageEnd",
                }, 
                group:"sgyj_shishi2",                				
				forced:true,								
				filter:function (event,player){				    
				    return player.countCards('he')>0;   				
				},								                
                content:function (){
                    player.chooseToDiscard('he',1,true);	        
    },
            }, 
          "sgyj_lingyan":{                
                trigger:{
                    player:["useCard","respond"],
                },                             						
                filter:function (event,player){
          return player!=_status.currentPhase&&event.card&&event.card.isCard&&get.color(event.card)=="red";
      },
                content:function (){
           'step 0'
        player.chooseTarget(get.prompt2('sgyj_lingyan'),1,function(card,player,target){
            return true;
        },function(target){            
            return get.attitude(player,target)<=0;
        });        
           'step 1' 
        if(result.bool){               			
			result.targets[0].damage('fire');				         
        }
        else{
            event.finish();
        }
    },
            },
        "sgyj_yanhuo2":{                
                trigger:{
                    player:"damageBegin",
                },                 				
				forced:true,								
				filter:function (event,player){				    
				    return event.nature&&event.nature=='fire';   				
				},								                
                content:function (){
                    trigger.cancel();
                    player.recover(trigger.num);          
    },
            },
        "sgyj_yanhuo":{                
                trigger:{
                    source:"damageBegin",
                },                 				
				forced:true,				
				group:"sgyj_yanhuo2",
				filter:function (event,player){				    
				    return event.nature&&event.nature=='fire';   				
				},								                
                content:function (){
                    trigger.num++;          
    },
            },
        "sgyj_manshendie":{                
                trigger:{
                    source:"dieEnd",
                },                 
				init:function (player){
					player.storage.sgyj_manshendie=0;
				},	
				forced:true,
				popup:false,								                
                content:function (){
           player.storage.sgyj_manshendie++;          
    },
            },
        "sgyj_manshen":{				
				trigger:{player:['phaseBegin']},
				limited:true,
				init:function (player){
					player.storage.sgyj_manshen=false;
				},											
				filter:function (event,player){
				    var suits=[];
				    var cards=player.getCards('he');
				    for(var i=0;i<cards.length;i++){
                        if(!suits.contains(get.suit(cards[i]))){
					        suits.push(get.suit(cards[i]));
				        }				
                    }
				    return suits.length>=4;   				
				},
				content:function(){
					"step 0"
					event.suits=[];
					event.cards=[];
					event.num=3;
					player.addTempSkill('sgyj_manshendie');
					player.storage.sgyj_manshen=true;
					player.awakenSkill("sgyj_manshen");
					"step 1"
			player.chooseCardButton(player.getCards('he'),1,'选择弃置四种花色的牌各一张',true).set('filterButton',function(button){                                                                           				
				/*for(var i=0;i<ui.selected.cards.length;i++){
				    return get.suit(button.link)!=get.suit(ui.selected.cards[i]);
				}*/
				return !event.suits.contains(get.suit(button.link));
            }).set('ai',function(button){
                return get.value(button.link);
            });             
            "step 2"
            if(result.bool){  
                event.suits.push(get.suit(result.links[0]));               
                event.cards.push(result.links[0]);
                if(event.suits.length<4){
			        event.goto(1);
			    }			    
			    else{
			        player.discard(event.cards);
			        game.delay();
			        player.skip('phaseJudge');
			        player.skip('phaseDraw');
			        player.skip('phaseUse');
			        event.goto(3);
			   }     
            }
           "step 3"
        if(event.num>0){                                                                                                                                                                 
            var list=game.filterPlayer(function(current){ 
                return player.canUse('nanman',current); 
            });                 
            list.sortBySeat(); 
            player.useCard({name:'nanman'},list);
            event.num--;
            event.redo();
            }
        else{
            if(player.storage.sgyj_manshendie<=0){
                player.die();
            }
            event.finish();      
        } 			            
				},	
			ai:{         
                order:5,               
            },  								
		},			          
        "sgyj_shiman2":{                
                trigger:{
                    player:"phaseBegin",
                }, 
                popup:false, 
                forced:true,                						                
                content:function (){
                    for(var i=0;i<game.players.length;i++){
                        if(player!=game.players[i]){
                            game.players[i].addTempSkill('sgyj_shiman1');
                        }
                    }              
                },
            },
            "sgyj_shiman1":{            
            mod:{
				cardname:function (card,player,name){										
					if(_status.currentPhase.hasSkill("sgyj_shiman")){
					if(player.hp>_status.currentPhase.hp&&card.name=='sha') return 'shan';
					if(player.hp<_status.currentPhase.hp&&card.name=='shan') return 'sha';	
					}					
				},					
		    },
        },
          "sgyj_shiman":{				
				trigger:{target:'useCardToBefore'},
				forced:true,
				priority:25,
				group:"sgyj_shiman2",							
				filter:function (event,player){
					return (event.card&&event.card.isCard&&event.card.name=='nanman');
				},				
				content:function(){
					trigger.cancel();					
				},
			},
          "sgyj_manyong":{		       
          enable:"phaseUse",                                                 
          filter:function (event,player){                                                                        
             var list=[];
             for(var i=0;i<ui.discardPile.childElementCount;i++){					
				if(ui.discardPile.childNodes[i].name=='nanman'){							
					list.push(ui.cardPile.childNodes[i]);							
				}
			 }
			 var num=Math.max(1,list.length);
             if(player.getStat().skill.sgyj_manyong>=num) return false; 
                 return true;                
          },              
        content:function (){               
            'step 0'
            player.loseHp();
            'step 1'
			var list=game.filterPlayer(function(current){ 
                return player.canUse('nanman',current); 
            });                 
            list.sortBySeat(); 
            player.useCard({name:'nanman'},list);       
       },
       ai:{
         result:{
            player:function (player){
              if(player.hp<2) return 0;   
                  return 1;
              },
            },
            order:8,
            threaten:0.5,
        },  
            },
          "sgyj_zhulian4":{                
                trigger:{
                    global:"damageBegin",
                },  
                forced:true,                						
                filter:function (event,player){
          return player!=event.player&&get.distance(player,event.player)<=1
      },
                content:function (){
                    player.damage(trigger.num);
    },
            },
          "sgyj_zhulian3":{                
                trigger:{
                    global:"recoverBegin",
                },  
                forced:true,                						
                filter:function (event,player){
          return player!=event.player&&get.distance(player,event.player)<=1
      },
                content:function (){
                    player.recover(trigger.num);
    },
            },
          "sgyj_zhulian2":{                
                trigger:{
				    global:['loseAfter'],				    
				},	
				forced:true,                						
                filter:function (event,player){
                    var evt=event.getParent(); 
                        if(evt.name!='discard'||event.type!='discard') return false; 
                    if(event.cards2&&event.cards2.length&&event.cards2.filterInD('d').length){ 
                             return player!=event.player&&get.distance(player,event.player)<=1; 
                        };           
                },
				content:function (){				    
					var num=trigger.cards2.filterInD('d').length; 
					player.chooseToDiscard('he',Math.min(num,player.countCards('he')),true);					
				},
            },
         "sgyj_zhulian1":{                
                trigger:{
                    global:"drawEnd",
                },  
                forced:true,                						
                filter:function (event,player){
          return player!=event.player&&get.distance(player,event.player)<=1
      },
                content:function (){
                    player.draw(trigger.num);
    },
            },
         "sgyj_zhulian":{   
             group:["sgyj_zhulian1","sgyj_zhulian2","sgyj_zhulian3","sgyj_zhulian4"],
             mod:{
                 targetEnabled:function (card,player,target,now){						
			    	 if(player!=target&&get.distance(player,target)<=1) return false;						
			     },
			 },		
         },
           //未改：
          /*"sgyj_yongjin":{				
				mark:true,
				locked:false,
				zhuanhuanji:true,
				marktext:'金',
				intro:{
					content:function(storage,player,skill){
						if(player.storage.sgyj_yongjin1==true) return '当你使用【杀】指定一名角色为目标后，你可以获得其一张牌，然后你本回合内不能再对其使用牌';
						return '当你成为其他角色【杀】的目标后，你可以与其各摸一张牌，然后其本回合内不能再对你使用牌';
					},
				},				
				group:["sgyj_yongjin_1","sgyj_yongjin_2"],
				subSkill:{
					'1':{
						audio:2,
						trigger:{
							//target:'useCardToTargeted',
							player:'useCardToPlayered',
						},
						prompt2:'当你成为其他角色【杀】的目标后，你可以与其各摸一张牌，然后其本回合内不能再对你使用牌。',
						filter:function(event,player){
							return get.type(event.card)=='equip'&&(player.storage.sgyj_yongjin1==false||player.storage.sgyj_yongjin1==undefined);
						},
						logTarget:'player',
						content:function(){							
							player.addTempSkill('sgyj_yongjinx');
						},
					},
					'2':{
						audio:2,
						trigger:{
							player:'useCardToPlayered'
						},
						prompt2:'当你使用【杀】指定一名角色为目标后，你可以获得其一张牌，然后你本回合内不能再对其使用牌',
						filter:function(event,player){
							return event.card.name=='sha'&&event.player.countGainableCards(player,'he')>0&&player.storage.sgyj_yongjin1==true;
						},
						check:function(event,player){
							return event.player.countCards('he')>0&&event.targets&&event.targets.length==1;
						},
						logTarget:'target',
						content:function(){
							player.gainPlayerCard(trigger.targets[0],'he',true);
							player.storage.sgyj_yongjin1=false;
							trigger.target.addTempSkill('sgyj_yongjinx');
							player.addTempSkill('sgyj_yongjiny');
						},
					},
				},
			},
			"sgyj_yongjinx":{
				mod:{
					targetEnabled:function(card,player,target){
						if(player.hasSkill('sgyj_yongjiny')) return false;
					},
				},
			},
			sgyj_yongjiny:{},
			*/
           "sgyj_sushou":{
               mod:{
					cardname:function (card,player,name){
						if(player.isTurnedOver()||player.isLinked()||player.hp==1){
						    if(card.name=='sha'||card.name=='shan') return 'wuxie';
						}
					},					
				},
			},	
           "sgyj_yongxiao":{                
                trigger:{
                    player:"phaseEnd",
                },  
                forced:true,               						                
                content:function (){
                'step 0'
                event.num=player.getAttackRange()-player.countUsed();
                if(event.num<0){
                    if(!player.countCards('h')){
                        player.loseHp();
                        event.finish();
                    }else{
                        player.chooseControl().set('choiceList',['弃置一张手牌','失去一点体力']).set('ai',function(){            		    
                    var list=[0,1];
                    if(player.hp<3) return 0;
						return list.randomGet();
                    });                
                    }
                }else{
                    player.draw(event.num);                    
                    if(event.num>3){
                        player.turnOver();
                        event.finish();
                    }
                    event.finish();
                }                
                'step 1'                                                      
        if(result.index==0){                       
			player.chooseToDiscard('h',1,true);	
			event.finish();	
        }
		else if(result.index==1){            
            player.loseHp();
            event.finish();
        }					        
    },
            },
           "sgyj_gaisi":{                
                trigger:{
                    global:"dying",
                },  
                limited:true,
				init:function (player){
					player.storage.sgyj_gaisi=false;
				},	
				check:function (event,player){                                                     
                    if(player.countCards('e')>2&&player.countCards('h','tao')>0) return 0;
                        return get.attitude(player,event.player)>0;               
                },
                filter:function (event,player){
          return player!=event.player&&player.countCards('e')>0;
      },
                content:function (){
           var num=player.countCards('e');
           player.discard(player.getCards('e'));
           trigger.player.recover(num);
           player.storage.sgyj_gaisi=true;
           player.awakenSkill("sgyj_gaisi");           
    },
            },
           "sgyj_zhinao2":{                
                trigger:{
                    source:"damageBegin",
                },  
                forced:true,
                popup:false,						
                filter:function (event,player){
          return event.target.hasSkill("sgyj_zhinao");
      },
                content:function (){
           trigger.cancel();
    },
            },
           "sgyj_zhinao":{                
                trigger:{
                    player:"gainEnd",
                }, 
                round:1,             						
                filter:function (event,player){
          return game.hasPlayer(function(current){
                return current.countCards('h')>player.countCards('h');
	 		});
      },
                content:function (){
           'step 0'
        player.chooseTarget(get.prompt2('sgyj_wenwu'),1,function(card,player,target){
            return target.countCards('h')>player.countCards('h');
        },function(target){            
            return get.attitude(player,target)>0;
        });        
           'step 1' 
        if(result.bool){               
			player.$give(result.targets[0],trigger.cards);
			result.targets[0].gain(trigger.cards,player);
			result.targets[0].addTempSkill('sgyj_zhinao2','roundStart');					         
        }
        else{
            event.finish();
        }
    },
            },
           "sgyj_wenwu2":{
				audio:2,
				shaRelated:true,
				trigger:{target:'useCardToPlayered'},
				forced:true,
				popup:false,
				filter:function(event,player){
					return event.card.name=='sha';
				},
				//logTarget:'target',
				content:function(){										
					trigger.getParent().directHit.add(player);					
				},				
			},
           "sgyj_wenwu":{                
                trigger:{
                    player:"recoverEnd",
                }, 
                round:1,             						
                filter:function (event,player){
          return game.hasPlayer(function(current){
                return current.hp<player.hp;
	 		});
      },
                content:function (){
           'step 0'
        player.chooseTarget(get.prompt2('sgyj_wenwu'),1,function(card,player,target){
            return target.hp<player.hp;
        },function(target){            
            return Math.random();
        });        
           'step 1' 
        if(result.bool){               
			result.targets[0].recover();
			result.targets[0].addTempSkill('sgyj_wenwu2','roundStart');					         
        }
        else{
            event.finish();
        }
    },
            },
           "sgyj_guizhang2":{                
                trigger:{
                    player:"damageBegin",
                },  
                forced:true,
                popup:false,						
                filter:function (event,player){
          return event.nature&&event.nature=="thunder";
      },
                content:function (){
           trigger.cancel();
    },
            },
           "sgyj_guizhang1":{                
                trigger:{
                    player:"damageBegin",
                },  
                forced:true,
                popup:false,						
                filter:function (event,player){
          return event.nature&&event.nature=="fire";
      },
                content:function (){
           trigger.cancel();
           game.delay();
           player.loseHp();
    },
            }, 
           "sgyj_guizhang":{                
                trigger:{
                    player:"damageBegin",
                },  
                forced:true,	
                group:["sgyj_guizhang1","sgyj_guizhang2"],					
                filter:function (event,player){
          return (event.card&&get.type(event.card)=="trick");
      },
                content:function (){
           trigger.num--;
    },
            },
           "sgyj_ciyi":{                
                trigger:{
                    global:"useCard",
                },  
                check:function (event,player){                                                     
                    return get.attitude(player,event.player)>0;               
                },  									
                filter:function (event,player){
          return event.card&&event.card.isCard&&!event.player.isPhaseUsing();
      },
                content:function (){
           'step 0'
        trigger.player.chooseTarget(get.prompt2('sgyj_ciyi'),1,function(card,player,target){
            return target!=trigger.player;
        },function(target){            
            return get.attitude(trigger.player,target)>0;
        });        
           'step 1' 
        if(result.bool){               
			result.targets[0].gain(trigger.cards,'gain2');					         
        }
        else{
            event.finish();
        }
    },
            },
           /*"sgyj_xiangzheng":{                
                enable:"phaseUse",
				limited:true,
				init:function (player){
					player.storage.sgyj_xiangzheng=false;
				},				
                filter:function (event,player){
          return player.storage.sgyj_qushou.length>0;
      },
                content:function (){
           'step 0'
           player.storage.sgyj_xiangzheng=true;
           player.awakenSkill("sgyj_xiangzheng");           
           event.num=Math.min(5,player.storage.sgyj_qushou.length);                         
        'step 1'         
        var list=[];
        var cards=player.getStorage("sgyj_qushou");
        for(var i=0;i<cards.length;i++){
            list.push(cards[i]);
        }
        player.storage.sgyj_qushou.remove(list);			
        if(player.storage.sgyj_qushou.length<=0){
             player.unmarkSkill('sgyj_qushou');
        }
        player.syncStorage('sgyj_qushou');
        'step 2'                            
        if(event.num>0){                                                                                                                                                                 
            var list=game.filterPlayer(function(current){ 
                return player.canUse('nanman',current); 
            });                 
            list.sortBySeat(); 
            player.useCard({name:'nanman'},list);
            event.num--;
            event.redo();
        }
        else{
            player.removeSkill("sgyj_qushou");
            event.finish();      
        } 
    },
                ai:{
					result:{
						player:function(player){							
							if(player.storage.sgyj_qushou.length<4) return 0;
							return 1;
						},						
					},
					order:5,
					expose:0.2
				},  
            },*/
			"sgyj_xiangzheng":{                
                trigger:{
                    player:"phaseBegin",
                },                 
                forced:true, 
				juexingji:true,
				init:function (player){
					player.storage.sgyj_xiangzheng=false;
				},				
                filter:function (event,player){
          return player.storage.sgyj_qushou.length>=5;
      },
                content:function (){
           'step 0'
           player.storage.sgyj_xiangzheng=true;
           player.awakenSkill("sgyj_xiangzheng");                                     
        'step 1'         
        var list=[];
        var cards=player.getStorage("sgyj_qushou");
        for(var i=0;i<cards.length;i++){
            list.push(cards[i]);
        }
        player.storage.sgyj_qushou.remove(list);			
        if(player.storage.sgyj_qushou.length<=0){
             player.unmarkSkill('sgyj_qushou');
        }
        player.syncStorage('sgyj_qushou');
        'step 2'                            
        var list=[];
		for(var i=0;i<ui.cardPile.childElementCount;i++){
			var name=ui.cardPile.childNodes[i].name;
			if(name=='nanman'){							
			list.push(ui.cardPile.childNodes[i]);
			}
		}	
		for(var i=0;i<ui.discardPile.childElementCount;i++){			
			if(ui.discardPile.childNodes[i].name=='nanman'){							
			    list.push(ui.discardPile.childNodes[i]);
			}
		}
		player.gain(list,'gain2');
    },                
            },
			"sgyj_xiangzheng2":{				
				trigger:{source:'dieBegin'},
				forced:true,
				priority:25,								
				filter:function (event,player){
					return (event.card.name=='nanman');
				},
				content:function(){
					player.recover();	
					player.draw(2);
				},
			},
			"sgyj_oldxiangzheng":{                
                trigger:{
                    player:"phaseBegin",
                },                 
                forced:true, 
				limited:true,
				init:function (player){
					player.storage.sgyj_xiangzheng=false;
				},				
                filter:function (event,player){
          return player.storage.sgyj_qushou.length>=8;
      },
                content:function (){
           'step 0'
           player.storage.sgyj_xiangzheng=true;
           player.awakenSkill("sgyj_xiangzheng");           
           //event.num=Math.min(5,player.storage.sgyj_qushou.length); 
		   event.num=player.hp-1;
		   player.loseHp(event.num);
		   player.addTempSkill('sgyj_xiangzheng2');
         /* 
         //手动式：
           'step 1'                  
			player.chooseCardButton(player.storage.sgyj_qushou,1,'选择获得其中的一张“兽”牌',true).set('filterButton',function(button){                                                                           						
				return true;
            }).set('ai',function(button){
                return get.value(button.link);
            });      										
			'step 2'    
			if(result.bool){
                event.num--;
                player.$throw(result.links[0]);						
                player.storage.sgyj_qushou.remove(result.links[0]);
                game.cardsDiscard(result.links[0]);
                if(player.storage.sgyj_qushou.length<=0){
                    player.unmarkSkill('sgyj_qushou');
                }
                player.syncStorage('sgyj_qushou');
                var list=game.filterPlayer(function(current){ 
                    return player.canUse('nanman',current); 
                });                 
                list.sortBySeat(); 
                player.useCard({name:'nanman'},list); 		          			
            }       
            else event.finish();                
          'step 3'                            
        if(event.num>0){                                                                                                                                                   
            event.goto(1);
        }
        else{
            event.finish();      
        } 
        */        
        'step 1'         
        var list=[];
        var cards=player.getStorage("sgyj_qushou");
        for(var i=0;i<cards.length;i++){
            list.push(cards[i]);
        }
        player.storage.sgyj_qushou.remove(list);			
        if(player.storage.sgyj_qushou.length<=0){
             player.unmarkSkill('sgyj_qushou');
        }
        player.syncStorage('sgyj_qushou');
        'step 2'                            
        if(event.num>0){                                                                                                                                                                 
            var list=game.filterPlayer(function(current){ 
                return player.canUse('nanman',current); 
            });                 
            list.sortBySeat(); 
            player.useCard({name:'nanman'},list);
            event.num--;
            event.redo();
        }
        else{
            //player.removeSkill("sgyj_qushou");
            event.finish();      
        } 
    },
                /*ai:{
					result:{
						player:function(player){							
							if(player.storage.sgyj_qushou.length<4) return 0;
							return 1;
						},						
					},
					order:5,
					expose:0.2
				},*/  
            },
			"sgyj_qushou3":{				
				trigger:{player:'damageBegin'},
				forced:true,
				priority:25,	
				popup:false,			
				filter:function (event,player){
					return event.nature&&event.nature=='fire';
				},
				content:function(){					
					event.storage=[];			
                    var storages=player.getStorage('sgyj_qushou');
				    for(var i=0;i<storages.length;i++){                        
					    event.storage.push(storages[i]);				        				
                    }
					player.storage.sgyj_qushou.remove(event.storage);					
				},
			},
           "sgyj_qushou2":{                
                trigger:{
                    player:"damageEnd",
                },                 
                forced:true,       								
                filter:function (event,player){
          return event.source&&event.source.isAlive()&&player.storage.sgyj_qushou.length>0;
      },
                content:function (){
           'step 0'        
			trigger.source.chooseCardButton(player.storage.sgyj_qushou,1,'选择获得其中的一张“兽”牌').set('filterButton',function(button){                                                                           						
				return true;
            }).set('ai',function(button){
                if(get.color(button.link)=="red"&&get.attitude(player,trigger.source)>0) return 1;
                return get.value(button.link);
            });      										
			'step 1'    
			if(result.bool){
                player.$throw(result.links);						
                player.storage.sgyj_qushou.remove(result.links[0]);
                game.cardsDiscard(result.links[0]);
                player.syncStorage('sgyj_qushou');
                trigger.source.gain(result.links[0],'fromStorage');                                						
                if(get.color(result.links[0])=="red"){                    
                    player.recover();
                }else{
                    trigger.source.damage();
                }		          					          					          					          			
            }       
            else event.finish();                                    	                          	          	          	                         
    },
            },
           "sgyj_qushou1":{				
				trigger:{target:'useCardToBefore'},
				forced:true,
				priority:25,	
				//popup:false,			
				filter:function (event,player){
					return (event.card&&event.card.isCard&&event.card.name=='nanman');
				},
				content:function(){
					trigger.cancel();					
				},
			},
           "sgyj_qushou":{                
                trigger:{
                    player:["useCard","respond"],
                },  				
				//forced:true,								
				priority:20,
				init:function (player){
				    player.storage.sgyj_qushou=[];
				},
				filter:function (event,player){
					return event.card&&event.card.isCard&&get.type(event.card)=='basic';
				},				
				//group:["sgyj_qushou1","sgyj_qushou2"],
				group:["sgyj_qushou2","sgyj_qushou3"],
				intro:{
                    content:"cards",
                }, 
                marktext:"兽",               
                content:function (){                  								        
					player.lose(trigger.cards,ui.special,'toStorage');						
					player.storage.sgyj_qushou=player.storage.sgyj_qushou.concat(trigger.cards);
					player.syncStorage('sgyj_qushou');
					player.draw();
				    player.markSkill('sgyj_qushou');
				    player.update();															
                },
            },
           "sgyj_wuyu":{
				audio:2,
				trigger:{player:'dying'},
				filter:function(event,player){
					return !event.numFixed;
				},
				limited:true,
				init:function (player){
					player.storage.sgyj_wuyu=false;
				},
				content:function(){
					"step 0"
					player.storage.sgyj_wuyu=true;
					player.awakenSkill("sgyj_wuyu");
					event.cards=get.cards(5);
					game.cardsGotoOrdering(event.cards);
					event.videoId=lib.status.videoId++;
					game.broadcastAll(function(player,id,cards){
						var str;
						if(player==game.me&&!_status.auto){
							str='五狱：获取花色各不相同的牌';
						}
						else{
							str='五狱';
						}
						var dialog=ui.create.dialog(str,cards);
						dialog.videoId=id;
					},player,event.videoId,event.cards);
					event.time=get.utc();
					game.addVideo('showCards',player,['五狱',get.cardsInfo(event.cards)]);
					game.addVideo('delay',null,2);
					"step 1"
					var next=player.chooseButton([0,5],true);
					next.set('dialog',event.videoId);
					next.set('filterButton',function(button){
						for(var i=0;i<ui.selected.buttons.length;i++){
							if(get.suit(ui.selected.buttons[i].link)==get.suit(button.link)) return false;
						}
						return true;
					});
					next.set('ai',function(button){
						return get.value(button.link,_status.event.player);
					});
					"step 2"
					if(result.bool&&result.links){
						event.cards2=result.links;
					}
					else{
						event.finish();
					}
					var time=1000-(get.utc()-event.time);
					if(time>0){
						game.delay(0,time);
					}
					"step 3"
					game.broadcastAll('closeDialog',event.videoId);
					var cards2=event.cards2;
					player.gain(cards2,'log','gain2');
				},
				ai:{
					threaten:1.2
				}
			},
           "sgyj_yueling":{  
				trigger:{player:'useCardEnd'},
				forced:true,
				priority:15,
				filter:function (event,player){
					return event.card&&event.card.isCard;
				},				
				content:function(){				
				'step 0' 
				if(get.color(trigger.card)=='black'){
				    player.loseHp();
				    event.finish();
				}else{
				    player.chooseTarget(get.prompt2('sgyj_yueling'),1,function(card,player,target){           
            return target!=player;
        },function(target){            
            if(target.group=='qun'&&get.attitude(player,target)>0) return 1;
            return -get.attitude(player,target);
        });        
				}																
           'step 1' 
        if(result.bool){   
            if(result.targets[0].group=='qun'){
                result.targets[0].recover();
            }else{
                result.targets[0].loseHp();
            }  			  						
		}else{
            event.finish();
        }				
				},				
			},      
		   "sgyj_wupo":{                
                trigger:{
                    player:"shaBegin",
					target:"shaBegin",
                },  				
				forced:true,               
                content:function (){
                trigger.player.loseHp();
				trigger.target.loseHp();
    },
            },
		   "sgyj_tengji":{  
				trigger:{player:'useCard'},
				frequent:true,
				priority:15,
				filter:function(event,player){				
					if(!player.isPhaseUsing()) return false;										
					return event.card&&event.card.number==player.countUsed(null,true);
				},
				content:function(){				
					player.draw();
				},				
			},      
           "sgyj_qirang":{
				audio:2,
				trigger:{player:'equipEnd'},
				frequent:true,
				content:function(){										
					'step 0'
					//player.chooseToGuanxing(5);
					if(get.is.altered('sgyj_qiyuan')){
						event.num=game.countPlayer()<4?3:5;
					}
					else{
						event.num=Math.min(5,game.countPlayer());
					}
					event.cards=get.cards(event.num);
					player.showCards(event.cards);
					event.chosen=[];
					event.num1=0;
					event.num2=0;
					event.bottom=-1;
					var types=[];		
						for(var i=0;i<event.cards.length;i++){
							if(get.type(event.cards[i])=='trick'){
							    types.push(event.cards[i]);
							    event.cards.remove(event.cards[i]);
							}
						}												
					player.gain(types,'gain2');								
					'step 1'
					var js=player.getCards('j');
					var pos;
					var choice=-1;
					var getval=function(card,pos){
						if(js[pos]){
							return (get.judge(js[pos]))(card);
						}
						else if(event.triggername=='phaseJieshuBegin'&&get.attitude(player,player.getNext())<=0){
							return 11.5-get.value(card,player);
						}
						else{
							return get.value(card,player);
						}
					};
					event.discard=false;
					var minval=6;
					for(pos=0;pos<event.cards.length;pos++){
						var max=getval(event.cards[pos],pos);
						for(var j=pos+1;j<event.cards.length;j++){
							var current=getval(event.cards[j],pos);
							if(current>max){
								choice=j;
								max=current;
							}
						}
						if(event.bottom<0){
							if(!js[pos]){
								if(max<minval){
									event.bottom=pos;
								}
							}
							else if(max<0){
								event.bottom=pos;
							}
						}
						if(event.bottom>=0&&event.bottom<=pos){
							choice=pos;
							event.discard=true;break;
						}
						if(choice!=-1){
							break;
						}
					}
					player.chooseCardButton('观星：选择要移动的牌',event.cards).set('filterButton',function(button){
						return !_status.event.chosen.contains(button.link);
					}).set('chosen',event.chosen).set('ai',function(button){
						return button.link==_status.event.choice?1:0;
					}).set('choice',event.cards[choice]);
					event.pos=pos;
					'step 2'
					if(result.bool){
						var card=result.links[0];
						var index=event.cards.indexOf(card);
						event.card=card;
						event.chosen.push(card);
						event.cards.remove(event.card);
						var controlai=event.pos||0;
						if(event.discard){
							controlai=event.cards.length+1;
						}
						var buttons=event.cards.slice(0);
						player.chooseControl(function(){
							return _status.event.controlai;
						}).set('controlai',controlai).set('sortcard',buttons).set('tosort',card);
					}
					else{
						event.goto(4);
					}
					'step 3'
					if(typeof result.index=='number'){
						if(result.index>event.cards.length){
							ui.cardPile.appendChild(event.card);
							event.num2++;
						}
						else{
							event.cards.splice(result.index,0,event.card);
						}
						event.num--;
						if(event.num>0){
							event.goto(1);
						}
						else event.finish();
					}
					'step 4'
					while(event.cards.length){
						ui.cardPile.insertBefore(event.cards.pop(),ui.cardPile.firstChild);
						event.num1++;
					}
					var js=player.getCards('j');
					if(js.length==1){
						if((get.judge(js[0]))(ui.cardPile.firstChild)<0){
							player.addTempSkill('guanxing_fail');
						}
					}
					player.popup(get.cnNumber(event.num1)+'上'+get.cnNumber(event.num2)+'下');
					game.log(player,'将','#y'+get.cnNumber(event.num1)+'张牌','置于牌堆顶，','#y'+get.cnNumber(event.num2)+'张牌','置于牌堆底');										
				},
				ai:{
					effect:{
						target:function(card,player,target,current){
							if(get.type(card)=='equip'&&!get.cardtag(card,'gifts')) return [1,3];
						}
					},
					threaten:1.3
				}
			},
			"sgyj_yuhua":{
				trigger:{player:'phaseDiscardBegin'},
				forced:true,
				audio:2,
				filter:function(event,player){
					return player.countCards('h')>player.getHandcardLimit();
				},
				content:function(){},
				mod:{
					ignoredHandcard:function(card,player){
						if(get.type(card)=='equip'||get.type(card)=='trick'){
							return true;
						}
					},
					cardDiscardable:function(card,player,name){
						if(name=='phaseDiscard'&&(get.type(card)=='equip'||get.type(card)=='trick')) return false;
					}
				},
			},
           "sgyj_jijiu":{				
				trigger:{source:['recoverBegin']},
				forced:true,								
				content:function(){
					//if((get.position(trigger.card)=='e'&&!player.countCards('e'))||(get.position(trigger.card)=='h'&&!player.countCards('h'))){
					    //trigger.player.recover();
					//}
					trigger.num++;
					player.removeSkill("sgyj_jijiu");
				},
			},
           "sgyj_yinli":{				
				trigger:{global:['recoverEnd','dying']},
				forced:true,				
				filter:function (event,player,name){
					if(name=='recoverEnd') return event.player.isHealthy();
					return event.player.hp<=0;
				},
				content:function(){
					player.draw();
				},
			},
			"sgyj_huijian":{				
				trigger:{
					player:'phaseZhunbeiBegin',					
				},		
				direct:true,
				content:function(){
					'step 0'
                player.chooseTarget(get.prompt2('sgyj_huijian'),1,function(card,player,target){           
            return target.countCards('he');
        },function(target){                       
            return get.attitude(player,target)>0;
        });        
           'step 1' 
        if(result.bool){   
            player.logSkill('sgyj_huijian'); 
			event.target=result.targets[0];	
			event.target.chooseToDiscard('he',1,true);
		}else{
            event.finish();
        }				
            'step 2'
            var list=[];   
					for(var i=0;i<lib.inpile.length;i++){
						var name=lib.inpile[i];	
						var card={name:lib.inpile[i]}; 											
						if(game.roundNumber%2==1&&get.type(name)=='basic'&&game.hasPlayer(function(current){
							return event.target.canUse(name,current);
						})){									
						    list.push(['基本牌','',name]);
						    if(name=='sha'){
								//list.push(['基本','','sha']);
								list.push(['基本','','sha','fire']);
								list.push(['基本','','sha','ice']);
								list.push(['基本','','sha','thunder']);
							}	
						}			
						else if(game.roundNumber%2==0&&get.type(name)=='trick'&&game.hasPlayer(function(current){
							return event.target.canUse(name,current);
						})){									
						    list.push(['锦囊牌','',name]);	
						}								
					}							
					if(list.length){
						event.target.chooseButton([get.prompt2('sgyj_huijian'),[list,'vcard']]).set('ai',function(button){																									
							return Math.random();
						});
					}
					else{
						event.finish();
					}							
					'step 3'
					if(result&&result.bool&&result.links[0]){						
						//var card={name:result.links[0][2]};
						var card={name:result.links[0][2],nature:result.links[0][3]};
						event.target.chooseUseTarget(card,true);
					}
				},
				ai:{								
					order:2,					
				},
			},
           /*old:
		   "sgyj_huijian":{				
				trigger:{
					player:'phaseZhunbeiBegin',					
				},		
				direct:true,
				content:function(){
					'step 0'																																								
					var list=[];   
					for(var i=0;i<lib.inpile.length;i++){
						var name=lib.inpile[i];	
						var card={name:lib.inpile[i]}; 											
						if(game.roundNumber%2==1&&get.type(name)=='basic'&&game.hasPlayer(function(current){
							return player.canUse(name,current);
						})){									
						    list.push(['基本牌','',name]);
						    if(name=='sha'){
								//list.push(['基本','','sha']);
								list.push(['基本','','sha','fire']);
								list.push(['基本','','sha','ice']);
								list.push(['基本','','sha','thunder']);
							}	
						}			
						else if(game.roundNumber%2==0&&get.type(name)=='trick'&&game.hasPlayer(function(current){
							return player.canUse(name,current);
						})){									
						    list.push(['锦囊牌','',name]);	
						}								
					}							
					if(list.length){
						player.chooseButton([get.prompt2('sgyj_huijian'),[list,'vcard']]).set('ai',function(button){																									
							return Math.random();
						});
					}
					else{
						event.finish();
					}							
					'step 1'
					if(result&&result.bool&&result.links[0]){
						player.logSkill("sgyj_huijian");
						//var card={name:result.links[0][2]};
						var card={name:result.links[0][2],nature:result.links[0][3]};
						player.chooseUseTarget(card,true);
					}
				},
				ai:{								
					order:2,					
				},
			},*/
           "sgyj_xuwu":{
				trigger:{
                    player:"damageBegin",
                },                 
                forced:true,  
				mod:{
					targetEnabled:function (card,player,target,now){					  													
						if(get.type(card)=="delay") return false;											 
					},
				},
                filter:function (event,player){
          return event.nature;
      },
                content:function (){
					trigger.cancel();
				},
				/*mod:{
					targetEnabled:function (card,player,target,now){					  
						if(game.roundNumber%2==1){
							if(card.name=="sha") return false;
						}else{
						    if(get.color(card)=="black"&&get.type(card)=="trick") return false;
						}					 
					},
				},*/
			},
           "sgyj_zhanhuo":{                
                trigger:{
                    player:"damageEnd",
                },                 
                forced:true,       								
                filter:function (event,player){
          return event.card&&event.card.name=='sha'&&player!=event.source&&player.storage.sgyj_hujian.length>0;
      },
                content:function (){
           'step 0'        
			trigger.source.chooseCardButton(player.storage.sgyj_hujian,1,'选择获得其中的一张武器牌',true).set('filterButton',function(button){                                                                           						
				return true;
            }).set('ai',function(button){
                return get.value(button.link);
            });      										
			'step 1'    
			if(result.bool){
                player.$throw(result.links);						
                player.storage.sgyj_hujian.remove(result.links[0]);
                game.cardsDiscard(result.links[0]);
                player.syncStorage('sgyj_hujian');
                trigger.source.gain(result.links[0],'fromStorage');  
                //player.draw(2);  
                player.turnOver();                            						
                if(player.storage.sgyj_hujian.length<=0&&player.isEmpty(1)){
                    player.unmarkSkill('sgyj_hujian');
                    player.die();
                }		          					          			
            }       
            else event.finish();                                    	                          	          	          	                         
    },
            },
           "sgyj_hujian3":{				
			 trigger:{
                 global:"phaseJieshuBegin",
             },
             forced:true,
             popup:false,
             filter:function (event,player){
                 return player.getHistory('damage').length==0;
             },									
				content:function (){
				    "step 0"
				    if(player.isHealthy()){
				        player.gainMaxHp();
				        player.update();
				        event.finish();
				    }else{ 
				    player.chooseControl().set('choiceList',['增加一点体力上限','回复一点体力']).set('ai',function(){            		    
                    var list=[0,1];
                    if(player.hp<3) return 1;
						return list.randomGet();
                    }); 
                    }               
                    "step 1"
        if(result.index==0){                       
			player.gainMaxHp();
			player.update();
        }
		else if(result.index==1){            
            player.recover();
        }					                         
				},
			}, 
           "sgyj_hujian2":{                
                trigger:{
                    global:"phaseUseBegin",
                },                 
                forced:true,       								
                filter:function (event,player){
          return !event.player.isDisabled('equip1')&&event.player.isEmpty(1)&&player.storage.sgyj_hujian.length>0;
      },
                content:function (){
           'step 0'
            player.loseHp();            
           'step 1'                      
			player.chooseCardButton(player.storage.sgyj_hujian,1,'选择令'+get.translation(trigger.player)+'装备其中的一张武器牌',true).set('filterButton',function(button){                                                                           						
				return true;
            }).set('ai',function(button){
                return get.value(button.link);
            });      										
			'step 2'    
			if(result.bool){
                player.$throw(result.links);						
                player.storage.sgyj_hujian.remove(result.links[0]);
                game.cardsDiscard(result.links[0]);
                player.syncStorage('sgyj_hujian');
                trigger.player.equip(result.links[0]);
                
                /*var num=1;
                var info=get.info(result.links[0]);
                if(info&&info.distance&&info.distance.attackFrom){
                    num-=info.distance.attackFrom;
                }
                player.draw(num);*/
				player.draw(2*player.getDamagedHp());	
				player.addTempSkill('sgyj_hujian3');	
                if(player.storage.sgyj_hujian.length<=0&&player.isEmpty(1)){
                    player.unmarkSkill('sgyj_hujian');
                    player.die();
                }		          					          			
            }       
            else event.finish();                                    	                          	          	          	                         
    },
            },
           /* "sgyj_hujian2":{                
                trigger:{
                    player:"phaseBegin",
                },                 
                forced:true,       								
                filter:function (event,player){
          return player.storage.sgyj_hujian.length>0;
      },
                content:function (){
           'step 0'
        player.chooseTarget(get.prompt2('sgyj_hujian2'),1,true,function(card,player,target){
            //return target.canEquip('equip1')&&!target.isDisabled('equip1');
            return !target.isDisabled('equip1');
        },function(target){            
            if(!target.isEmpty(1)&&get.attitude(player,target)>0) return 0;
            return get.attitude(player,target)>0;
        });        
           'step 1' 
        if(result.bool){   
            player.logSkill('sgyj_hujian2'); 
			event.target=result.targets[0];	
			player.chooseCardButton(player.storage.sgyj_hujian,1,'选择令'+get.translation(event.target)+'装备其中的一张武器牌',true).set('filterButton',function(button){                                                                           						
				return true;
            }).set('ai',function(button){
                return get.value(button.link);
            });      						
		}else{
            event.finish();
        }				
			'step 2'    
			if(result.bool){
                player.$throw(result.links);						
                player.storage.sgyj_hujian.remove(result.links[0]);
                game.cardsDiscard(result.links[0]);
                player.syncStorage('sgyj_hujian');
                event.target.equip(result.links[0]);
                
                var num=1;
                var info=get.info(result.links[0]);
                if(info&&info.distance&&info.distance.attackFrom){
                    num-=info.distance.attackFrom;
                }
                player.draw(num);
						
                if(player.storage.sgyj_hujian.length<=0){
                    player.unmarkSkill('sgyj_hujian');
                    player.loseHp(player.hp);
                }		          					          			
            }       
            else event.finish();                                    	                          	          	          	                         
    },
            },*/
           "sgyj_hujian":{                
                trigger:{
                    global:"gameStart",
                },  				
				forced:true,
				//frequent:true,
				priority:Infinity,
				init:function (player){
				    player.storage.sgyj_hujian=[];
				},
				group:"sgyj_hujian2",
				intro:{
                    content:"cards",
                }, 
                marktext:"剑",               
                content:function (){                  					
			        var list=[];			        
				    for(var i=0;i<ui.cardPile.childElementCount;i++){
						var type=get.subtype(ui.cardPile.childNodes[i]);
						if(type=='equip1'){
							game.cardsDiscard(ui.cardPile.childNodes[i]);			
							list.push(ui.cardPile.childNodes[i]);							
						}
					}
					player.showCards(list);
					//player.gain(list,"gain2");
					//player.$throw(list);
					player.lose(list,ui.special,'toStorage');						
					player.storage.sgyj_hujian=player.storage.sgyj_hujian.concat(list);
					player.syncStorage('sgyj_hujian');
				    player.markSkill('sgyj_hujian');
				    player.update();	
				    game.log(player,'将',list,'置于武将牌上作为“剑”');														
                },
            },
           "sgyj_fangxin":{                
                trigger:{
                    target:"shaBegin",
                },  				
				direct:true,
                filter:function (event,player){
          return game.hasPlayer(function(current){
                return current.countCards('he');
	 		});
      },
                content:function (){
           'step 0'
        player.chooseTarget(get.prompt2('sgyj_fangxin'),1,function(card,player,target){
            return target.countCards('he');
        },function(target){            
            return Math.random();
        });        
           'step 1' 
        if(result.bool){   
            player.logSkill('sgyj_fangxin'); 
			player.gainPlayerCard(result.targets[0],'he',true);
			result.targets[0].draw();	
			player.moveCard();
			player.loseMaxHp(true);		         
        }
        else{
            event.finish();
        }
    },
            },
           "sgyj_manhua2":{				
				trigger:{global:'useCardAfter'},
				forced:true,
				popup:false,
				filter:function(event,player){
					return (event.card.name=='nanman'&&event.player!=player);
				},
				content:function(){
					var card=player.storage.sgyj_manhua;
					player.chooseUseTarget(card,true);
					player.loseMaxHp(true);
					delete player.storage.sgyj_manhua;
				},
			},
           "sgyj_manhua":{				
				trigger:{target:'useCardToBefore'},
				forced:true,
				priority:25,
				group:"sgyj_manhua2",
				filter:function (event,player){
					return (event.card&&event.card.isCard&&event.card.name=='nanman');
				},
				content:function(){
					trigger.cancel();
					player.storage.sgyj_manhua=trigger.cards[0];
					player.gain(trigger.cards,'gain2');
				},
			},
           "sgyj_zuizheng":{		       
            enable:"phaseUse", 	
            usable:1,					
			filterCard:true,
			selectCard:[1,Infinity],              
            position:'h',                 
            filterTarget:function (card,player,target){
        return player!=target&&target.countCards('h');
    },
            filter:function (event,player){
			    return player.countCards('h')&&game.hasPlayer(function(current){
                    return current!=player&&current.countCards('h');
         });                   	 		
			},                             
               content:function (){
                   "step 0"                                               
				 event.suits=[];
				 event.tsuits=[];
		         for(var i=0;i<cards.length;i++){
                      if(!event.suits.contains(get.suit(cards[i]))){
					      event.suits.push(get.suit(cards[i]));
				      }				
                 }
                 player.viewHandcards(target);	
                 game.delay();
                 var tcards=target.getCards('h');
                 for(var i=0;i<tcards.length;i++){
                      if(event.suits.contains(get.suit(tcards[i]))){
					      event.tsuits.push(tcards[i]);
				      }				
                 }						
                   "step 1"
                 target.$give(event.tsuits,player);
                 player.gain(event.tsuits,target);												
        },
        ai:{
        result:{
            target:function (player,target){                
                return -target.countCards('h');
            },
        },
        order:8,
        threaten:0.5,
        },  
            },
           "sgyj_jingwei":{
				trigger:{player:'showCharacterAfter'},			
				filter:function(event,player){
					if(!event.toShow||!event.toShow.contains('sgyj_simayong')) return false;
					var target=_status.currentPhase;
					return target&&target!=player&&target.isAlive()&&target.countCards('ej')>0;
				},				
				hiddenSkill:true,
				logTarget:function (){
					return _status.currentPhase;
				},
				content:function(){
					'step 0'
					player.choosePlayerCard(_status.currentPhase,'ej',1,'选择移动一张牌',true).ai=function(card){                          
						if(get.attitude(player,_status.currentPhase)>0){
						if(get.position(card)=='j') return 12;
						if(get.value(card)<0) return 5;
							return 0;
							}
							else{
								if(get.position(card)=='j') return -10;
								return get.value(card);
							}
                     };                										
					'step 1'
					if(result.bool){
						player.logSkill('sgyj_jingwei',_status.currentPhase);
						event.card=result.cards[0];
						//event.link={name:result.links[0]};
					}
					'step 2'
					player.chooseTarget('【精卫】',1,lib.translate.sgyj_jingwei_info,function(card,player,target){
					    if(_status.currentPhase==target) return false;
					    if(get.type(event.card)=='trick'){
							//if(_status.event.nojudge) return false;
								return target.canAddJudge(event.card);
							}
							else{
								return target.canEquip(event.card,true);
							}            
        }).set('ai',function(target){ 
                  if(get.type(event.card)=='trick') return -get.attitude(player,target);     
            return get.attitude(player,target)>0;            
        });                
           'step 3'
        if(result.bool){ 				  
			if(get.type(event.card)=='equip'){
				result.targets[0].equip(event.card);
			}						
			else{
				result.targets[0].addJudge(event.card);
			}
			_status.currentPhase.$give(event.card,result.targets[0],false);
			game.log(_status.currentPhase,'的',event.card,'被移动给了',result.targets[0]);						
        }else{
		    event.finish();
		}	                     									
				},
			}, 					
           "sgyj_chanshen2":{   
            mark:true, 
            mod:{
                globalTo:function (from,to,distance){
                    var num=game.countPlayer(function(current){
            return current.isAlive()&&current.hasSkill("sgyj_chanshen1");
         });          
            return distance+num;
        },
                },
           },      
           "sgyj_chanshen1":{   
            mark:true,            
            mod:{
                globalTo:function (from,to,distance){
            return distance+1;
        },
                },
           },     
            "sgyj_chanshen":{                
                trigger:{
                    player:"phaseBegin",
                    global:"gameStart",
                },  
				limited:true,
				init:function (player){
					player.storage.sgyj_chanshen=false;
				},
				direct:true,
                filter:function (event,player){
          return game.hasPlayer(function(current){
                return current.sex!='female';
	 		});
      },
                content:function (){
           'step 0'
        player.chooseTarget(get.prompt2('sgyj_chanshen'),[1,4],function(card,player,target){
            return target.sex!='female';
        },function(target){            
            return Math.random();
        });        
           'step 1' 
        if(result.bool){       
            event.num=0;             
            event.targets=result.targets; 
            player.logSkill('sgyj_chanshen'); 
            player.addSkill('sgyj_chanshen2');
            player.markSkill('sgyj_chanshen2');
            player.storage.sgyj_chanshen=true;
			player.awakenSkill('sgyj_chanshen');                        
        }   
        else{
            event.finish();
        }   
          'step 2'                            
        if(event.num<event.targets.length){                                                                             
            event.targets[event.num].addSkill('sgyj_chanshen1');
            event.targets[event.num].markSkill('sgyj_chanshen1');                                                      
            event.num++;
            event.redo();
        }
        else{
            event.finish();      
        } 
    },
            },
            "sgyj_nianyu":{				
				trigger:{target:'useCardToTargeted'},
				forced:true,
				filter:function(event,player){
					return event.card&&(event.player.countCards('h')<player.countCards('h')||event.player.hp<player.hp||event.player.countCards('e')<player.countCards('e'));
				},
				content:function(){
					"step 0"
					if(trigger.player.countCards('h')){
					    trigger.player.chooseCard('he',1,'年遇：交给'+get.translation(player)+'一张牌，否则该牌对其无效',true).set('ai',function(card){
						if(get.attitude(player,trigger.player)>0){
							return 9-get.value(card);
						}
						return -get.value(card);
					});									
					}else{
					    trigger.getParent().excluded.add(player);
					}
					"step 1"
					if(result.bool==false){
						trigger.getParent().excluded.add(player);
					}else{
					    trigger.player.$give(result.cards,player);
					    player.gain(result.cards,trigger.player);
					}
				},
				ai:{
					effect:{
						target:function(card,player,target,current){
							if(card.name=='sha'&&get.attitude(player,target)<0){
								if(_status.event.name=='sgyj_nianyu') return;
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
            "sgyj_xunzi3":{                
                trigger:{
				    global:['loseAfter'],				    
				},	
				check:function (event,player){                                                     
                    return get.attitude(player,event.player)<=0;               
                },  	
				filter:function (event,player){
				    var evt=event.getParent(); 
                        if(evt.name!='discard'||event.type!='discard') return false; 
                    return event.player.countCards('h')&&event.player.hasSkill('sgyj_xunzi1');
				},
				content:function (){				    
					//var num=trigger.cards2.filterInD('d').length; 
					trigger.player.chooseToDiscard('h',true);					
				},							
            },
			"sgyj_xunzi2":{
                mark:"character",                
                unique:true,
                intro:{
                    content:"$摸牌或弃牌时，你可令$额外摸或弃一张牌",
                },
                trigger:{
				    global:['drawBegin'],				    
				},	
				filter:function (event,player){
                    return event.player.hasSkill('sgyj_xunzi1');
				},
				check:function (event,player){                                                     
                    return get.attitude(player,event.player)>0;               
                },  	
				content:function (){				    
					trigger.num++;					
				},
            },
			"sgyj_xunzi1":{}, 
			"sgyj_xunzi":{                
                trigger:{
                    player:"phaseEnd",
                },  
				limited:true,
				init:function (player){
					player.storage.sgyj_xunzi=false;
				},
				direct:true,
                filter:function (event,player){
          return game.hasPlayer(function(current){
                return current.sex=='male';
	 		});
      },
                content:function (){
           'step 0'
        player.chooseTarget(get.prompt2('sgyj_xunzi'),1,function(card,player,target){
            return target.sex=='male';
        },function(target){            
            return Math.random();
        });        
           'step 1' 
        if(result.bool){   
            player.logSkill('sgyj_xunzi'); 
			result.targets[0].addSkill('sgyj_xunzi1');
			player.storage.sgyj_xunzi2=result.targets[0];
            player.addSkill('sgyj_xunzi2');
            player.addSkill('sgyj_xunzi3');
			player.storage.sgyj_xunzi=true;
			player.awakenSkill('sgyj_xunzi');            
        }
        else{
            event.finish();
        }
    },
            },
			"sgyj_huansan2":{				
				trigger:{
				    player:['phaseZhunbeiBegin'],				   
				},	
				forced:true,								
				//popup:false,							
				content:function (){				    					
					"step 0"
					event.handcards=[];
					event.storage=[];
					var cards=player.getCards('h');
				    for(var i=0;i<cards.length;i++){                        
					    event.handcards.push(cards[i]);				        				
                    }
                    var storages=player.getStorage('sgyj_huansan');
				    for(var i=0;i<storages.length;i++){                        
					    event.storage.push(storages[i]);				        				
                    }
					"step 1"															
						player.gain(event.storage,'fromStorage');
					    for(var i=0;i<event.storage.length;i++){
						    player.storage.sgyj_huansan.remove(event.storage[i]);
					    }
					    player.syncStorage('sgyj_huansan');
					    
						player.lose(event.handcards,ui.special,'toStorage');						
						player.storage.sgyj_huansan=player.storage.sgyj_huansan.concat(event.handcards);
						player.syncStorage('sgyj_huansan');
				        player.markSkill('sgyj_huansan');
				        player.update();																																																
				},
			},
            "sgyj_huansan":{				
				trigger:{
				    global:['gameDrawEnd'],				   
				},	
				forced:true,
				group:'sgyj_huansan2',	
				init:function (player){
				    player.storage.sgyj_huansan=[];
				},
				intro:{
                    content:"cards",
                },
				//popup:false,							
				content:function (){				    					
					"step 0"
					//trigger.num+=2;	
					player.draw(2);
					"step 1"
					player.chooseCard('he',3,'素利：将3张牌置于武将牌上',true).set('ai',function(card){						
						return -get.value(card);
					});
					"step 2"
					if(result.bool){
						player.logSkill('sgyj_huansan');
						player.lose(result.cards,ui.special,'toStorage');						
						player.storage.sgyj_huansan=player.storage.sgyj_huansan.concat(result.cards);
						player.syncStorage('sgyj_huansan');
				        player.markSkill('sgyj_huansan');
				        player.update();									
					}																																		
				},
			},
            "sgyj_jingcen2":{				
				trigger:{
				    player:['damageBegin'],				   
				},	
				forced:true,	
				popup:false,							
				content:function (){				    
					if(!trigger.nature){
					    trigger.cancel();
					}else{
					    trigger.num--;
					}																
				},
			},
            "sgyj_jingcen":{				
				trigger:{
				    player:['dyingAfter'],				   
				},	
				forced:true,								
				content:function (){				    
					player.addTempSkill("sgyj_jingcen2","roundStart");					
				},
			},
            "sgyj_yannu":{				
			forced:true,           
            trigger:{
                player:["useCardEnd","respondEnd"],
            },
            filter:function (event,player){                
                return event.card&&event.card.isCard&&get.type(event.card)=="basic";
            },
            content:function (){
                'step 0'
		player.chooseTarget('【焰怒】',1,lib.translate.sgyj_yannu_info,function(card,player,target){
            return target!=player;
        }).set('ai',function(target){           
            return -get.attitude(_status.event.player,target);            
        });                
           'step 1'
        if(result.bool){ 				  
			event.target=result.targets[0];
			if(event.target.countCards('h',{type:'basic'})){
			result.targets[0].chooseControl().set('choiceList',['弃置一张与'+get.translation(trigger.card)+'不同的基本牌','受到一点火焰伤害']).set('ai',function(){            		    
                    var list=[0,1];
                    if(player.hp<2) return 0;
						return list.randomGet();
                    });  
             }else{
                 event.target.damage('fire');
                 event.finish();
             }              
        }else{
		    event.finish();
		}	                      
            'step 2'   
        if(result.index==0){                       
			event.target.chooseCard('弃置一张与'+get.translation(trigger.card)+'不同的基本牌','h',function(card){
               return get.type(card)=='basic'&&card.name!=trigger.card.name;
            }).ai=function(card){			   
               return 7-get.value(card);
            }; 
		}			
		else if(result.index==1){            
            event.target.damage('fire');
            event.finish();
        }					
          'step 3'  
		if(result.bool){
		    event.target.discard(result.cards[0]);
		}else{
		    event.target.damage('fire');
            event.finish();
		}    									        		  		    		     									        		  		    		 
            },
			},
            "sgyj_changcuan":{				
				trigger:{
				    player:['dying','dyingAfter'],				   
				},	
				forced:true,								
				content:function (){				    
					player.draw(2);					
				},
			},
			"sgyj_beiai2":{                
                trigger:{
				    player:['loseAfter'],				    
				},	
				filter:function (event,player){
                    var evt=event.getParent(); 
                        if(evt.name!='discard'||event.type!='discard') return false; 
                    return player.countCards('h');
				},
				content:function (){				    
					player.chooseToDiscard('h',true);					
				},								
            },
            "sgyj_beiai":{				
				trigger:{
				    player:['damageBegin','drawBegin'],
				    source:'damageBegin',
				},	
				group:"sgyj_beiai2",
				forced:true,								
				content:function (){				    
					trigger.num++;					
				},
			},
			"sgyj_zuoshu2":{							           
            trigger:{
                player:"phaseUseAfter",
            },			
            filter:function (event,player){                
                return game.hasPlayer(function(current){
                    return current.isMinHandcard();
                });                   	 		
            },
            content:function (){
                'step 0'
		player.chooseTarget('【佐述】',1,lib.translate.sgyj_zuoshu2_info,function(card,player,target){
            return target.isMinHandcard();
        }).set('ai',function(target){           
            return get.attitude(_status.event.player,target)>0;            
        });                
           'step 1'
        if(result.bool){ 
			result.targets[0].chooseToUse();	    
		}else{
		    event.finish();
		}		    		 
            },
			},
			"sgyj_zuoshu":{							           
            trigger:{
                player:"phaseDrawAfter",
            },
			group:"sgyj_zuoshu2",
            filter:function (event,player){                
                return game.hasPlayer(function(current){
                    return current.isMinHandcard();
                });                   	 		
            },
            content:function (){
                'step 0'
		player.chooseTarget('【佐述】',1,lib.translate.sgyj_zuoshu_info,function(card,player,target){
            return target.isMinHandcard();
        }).set('ai',function(target){           
            return get.attitude(_status.event.player,target)>0;            
        });                
           'step 1'
        if(result.bool){ 
			result.targets[0].draw();	    
		}else{
		    event.finish();
		}		    		 
            },
			},
			"sgyj_jiezang2":{
				mod:{
				    maxHandcardBase:function (player,num){
					    return 0;
				    },	
				},	
			},
			"sgyj_jiezang":{				
			forced:true,           
            trigger:{
                player:"dieBegin",
            },
            filter:function (event,player){                
                return event.source&&event.source.isAlive();
            },
            content:function (){
                trigger.source.addSkill('sgyj_jiezang2');
            },
			},
			"reqiaomeng2":{                            
                            trigger:{
                                player:"equipBefore",
                            },
                            forced:true,
                            filter:function (event,player){
                                if(event.isequipx) return false;
                                var current=player.getCards('e',{subtype:get.subtype(event.card)});
                                if(!current.length) return false;
                                return get.subtype(event.card)=='equip3'||get.subtype(event.card)=='equip4';
                            },
							//from:jyqxz
                            content:function (){
                                trigger.setContent(lib.skill.reqiaomeng2.equipx);  
                            },
                            equipx:function (){
                                "step 0"
                                var owner=get.owner(card)
                                if(owner) owner.lose(card,ui.special,'visible').set('type','equip');
                                "step 1"
                                if(event.cancelled){
                                    event.finish();
                                    return;
                                }
                                if(card.destroyed){
                                    if(player.hasSkill(card.destroyed)){
                                        delete card.destroyed;
                                    }
                                    else{
                                        event.finish();
                                        return;
                                    }
                                }
                                if(event.draw){
                                    game.delay(0,300);
                                    player.$draw(card);
                                }
                                "step 2"
                                if(card.clone){
                                    game.broadcast(function(card,player){
                                        if(card.clone){
                                            card.clone.moveDelete(player);
                                        }
                                    },card,player);
                                    card.clone.moveDelete(player);
                                    game.addVideo('gain2',player,get.cardsInfo([card.clone]));
                                }
                                player.equiping=true;
                                "step 3"   
                                var current=player.getCards('e',{subtype:get.subtype(card)});
                                if(current.length>1){
                                    player.chooseCardButton(current,true,current.length-1,'请选择替换的装备牌').ai=function(button){
                                        return get.value(button.link);
                                    };
                                }
                                "step 4"
                                if(result.bool){
                                    player.lose(result.links,false,'visible');
                                    event.swapped=true;
                                };
                                if(player.isMin()){
                                    event.finish();
                                    game.cardsDiscard(card);
                                    delete player.equiping;
                                    return;
                                }
                                if(lib.config.background_audio){
                                    game.playAudio('effect',get.subtype(card));
                                }
                                game.broadcast(function(type){
                                    if(lib.config.background_audio){
                                        game.playAudio('effect',type);
                                    }
                                },get.subtype(card));
                                player.$equip(card);
                                game.addVideo('equip',player,get.cardInfo(card));
                                game.log(player,'装备了',card);
                                "step 5"
                                var info=get.info(card,false);
                                if(info.onEquip&&(!info.filterEquip||info.filterEquip(card,player))){
                                    if(Array.isArray(info.onEquip)){
                                        for(var i=0;i<info.onEquip.length;i++){
                                            var next=game.createEvent('equip_'+card.name);
                                            next.setContent(info.onEquip[i]);
                                            next.player=player;
                                            next.card=card;
                                        }
                                    }
                                    else{
                                        var next=game.createEvent('equip_'+card.name);
                                        next.setContent(info.onEquip);
                                        next.player=player;
                                        next.card=card;
                                    }
                                    if(info.equipDelay!='false') game.delayx();
                                }
                                delete player.equiping;
                                if(event.delay){
                                    game.delayx();
                                }     
                            },
                            ai:{
                                effect:{
                                    target:function (card,player,target,current){
                                        if(get.subtype(card)=='equip3'||get.subtype(card)=='equip4') return [1,3];
                                    },
                                },
                                threaten:1,
                            },
                        },
			"reyaowu2":{				
			forced:true,
            popup:false,
            silent:true,
            trigger:{
                global:"damageEnd",
            },
            filter:function (event,player){
                var evt=event.getParent(3);
                return evt&&evt.name=='reyaowu'&&event.source&&event.source.isAlive();
            },
            content:function (){
                trigger.source.draw(2);
            },
			},
			"sgyj_kuangao":{				
				trigger:{target:'useCardToBegin'},	
				forced:true,
				filter:function (event,player){
					var evt=event.player.getLastUsed(1);
					if(!evt||!evt.card) return false;
					return event.player&&evt.card&&evt.card.isCard&&get.color(evt.card)=='red'&&event.card&&event.card.isCard&&get.color(event.card)=='red'&&event.card.name=='sha';
				},								
				content:function (){				    
					player.loseHp();					
				},
			},
			/*"sgyj_kuangao":{				
				trigger:{player:'damageBegin'},	
				forced:true,
				filter:function (event,player){
					var evt=event.source.getLastUsed(1);
					if(!evt||!evt.card) return false;
					return event.source&&evt.card&&evt.card.isCard&&get.color(evt.card)=='red'&&evt.card.name=='sha'&&event.card&&event.card.isCard&&get.color(event.card)=='red'&&event.card.name=='sha';
				},								
				content:function (){				    
					trigger.num++;					
				},
			},*/
			"sgyj_luanzhan2":{				
				trigger:{player:['phaseDrawBegin','phaseUseBegin']},	
				forced:true,
				popup:false,									
				content:function (){
				    trigger.cancel();
				},
			},
           "sgyj_luanzhan":{				
				trigger:{player:'phaseEnd'},
				forced:true,				
				filter:function (event,player){
					return !player.isMinHp();
				},
				init:function (player){
				    player.storage.sgyj_luanzhan=0;
				},
				content:function(){
					 "step 0"
				if(!player.isMinHp()){
					player.loseHp();
					player.draw(player.hp),
					player.storage.sgyj_luanzhan++;	
					if(!player.hasSkill("sgyj_luanzhan2")&&player.storage.sgyj_luanzhan>=3){
					    player.addTempSkill("sgyj_luanzhan2");
					}								
					player.update();					
					game.delay();
				}else{
					event.finish();    
				}
					"step 1"
					event.num=player.countCards('h')-player.hp;	
					if(player.countCards('h')<=player.hp){
						player.drawTo(player.hp);
					}else{
						player.chooseToDiscard('h',event.num,true);
					}
					 "step 2"					 
				    if(event.num>player.hp){
						var targets=game.filterPlayer(function(current){
                            return current.isAlive();
                        });                                     
                        targets.sort(lib.sort.seat);
                        event.target=targets.randomGet();
                        player.line(event.target,'green'); 
						event.target.damage();
						if(event.target==player){
							player.draw(player.hp);
							if(player.isMinHp()||player.hp==1){
								event.finish();
							}else{
						        event.goto(0);						        
					        }							
						}else{
						    if(player.isMinHp()||player.hp==1){
								event.finish();
							}else{
						        event.goto(0);						        
					        }
					    }
					}else{
						if(player.isMinHp()||player.hp==1){
							event.finish();
						}else{
						    event.goto(0);						        
					    }
					}                                		
				},
				ai:{
					threaten:0.5,		
				}
			},
			"sgyj_mili2":{},
			"sgyj_mili":{				
				trigger:{target:['useCardToTargeted']},					
				filter:function(event,player){
					//if(!event.isFirstTarget) return false;
					if(player==event.player) return false;			
					if(player.countDisabled()>=5) return false;				
					return true;
				},
				mod:{             								
                    /*cardUsable:function (card,player,event){                              
                        if(card.name=='sha'&&player.countDisabled()>=5) return Infinity;
                    },             
                    targetInRange:function (card,player,target,now){
						if(card.name=='sha'&&player.countDisabled()>=5) return true;                                                                 
					},*/
                    targetEnabled:function (card,player,target,now){									    	    
			    	    if(player.hasSkill("sgyj_mili2")||(target.countDisabled()>=5&&player!=target&&get.distance(player,target)<=1)) return false;						
			        },
                },                	
				content:function (){
				    'step 0'
				    player.chooseToDisable();
					player.draw();
					trigger.getParent().excluded.add(player);
				    trigger.cancel();
					if(player.countDisabled()>=5){
					    player.gainMaxHp(true);
					}
				    'step 1'
				    trigger.player.addTempSkill("sgyj_mili2");
				},
			},
			/*
			//旧迷离：
           "sgyj_mili":{				
				trigger:{target:['useCardToTargeted']},					
				filter:function(event,player){
					if(!event.isFirstTarget) return false;
					if(player==event.player) return false;									
					if(event.card.name!='sha'&&!(get.tag(event.card,'damage')&&get.type(event.card)=='trick')) return false;	
					if(player.countDisabled()>=5) return false;				
					return true;
				},
				mod:{             								
                    targetInRange:function (card,player,target,now){
						if(player.countDisabled()>=5) return true;                                                                 
					},
                    targetEnabled:function (card,player,target,now){
                        if(target.countDisabled()>=5&&player.countCards('h')>target.countCards('h')){        
                            if(card.name=='sha'||card.name=='guohe'||card.name=='shunshou') return false;               
                        }
                    },
                },
                check:function (event,player){                                                     
                    return get.attitude(player,event.player)<=0;               
                },  			
				content:function (){
				    'step 0'
				    player.chooseToDisable();
				    'step 1'
				    var evt=_status.event.getParent('phaseUse'); 
                    if(evt&&evt.name=='phaseUse'){ 
                        evt.skipped=true; 
                    } 
				},
			},
			*/
           "sgyj_rehuaquan":{
				audio:2,
				locked:false,
				mod:{
					aiOrder:function(player,card,num){
						if(typeof card=='object'&&player.isPhaseUsing()){
							var evt=player.getLastUsed(2);
							if(evt&&evt.card&&(get.suit(evt.card)&&get.suit(evt.card)!=get.suit(card))){
								return num+10;
							}
						}
					},
				},
				trigger:{player:'useCardAfter'},
				//frequent:true,
				filter:function(event,player){
					var evt=player.getLastUsed(2);
					if(!evt||!evt.card) return false;
					if(!player.isPhaseUsing()) return false;
					//if(get.position(event.card)!='d') return false;
					if(get.type(event.card)=='equip') return false;		
					if(get.type(event.card)=='delay') return false;		
					var evt2=evt.getParent('phaseUse');
					if(!evt2||evt2.name!='phaseUse'||evt2.player!=player) return false;
					return get.suit(evt.card)&&get.suit(evt.card)!=get.suit(event.card);
				},
				content:function(){
					'step 0'
					player.chooseTarget('【花拳】',1,lib.translate.sgyj_rehuaquan_info,function(card,player,target){
            return player!=target;
        }).set('ai',function(target){           
            return get.attitude(_status.event.player,target)>0;            
        });                
           'step 1'
        if(result.bool){ 
			result.targets[0].gain(trigger.cards,'gain2');
			player.draw();	    
		}else{
		    event.finish();
		}		    		    										
				},
			},
           "sgyj_huaquan":{				
				trigger:{player:['drawAfter','gainAfter']},	
				forced:true,
				filter:function (event,player){				    
				    var suits=[];
				    var cards=player.getCards('h');
				    for(var i=0;i<cards.length;i++){
                        if(!suits.contains(get.suit(cards[i]))){
					        suits.push(get.suit(cards[i]));
				        }				
                    }
				    return suits.length>=4;   	
				},														
				content:function (){
				    'step 0'
				    event.num=Math.floor(player.countCards('h')/4);
				    var cards=player.getCards('h');
				    player.showCards(cards);
				    player.discard(cards);
				    //player.draw(4);
				    if(event.num>=1){
				    player.chooseTarget('花拳：选择对一名其他角色造成'+event.num+'点伤害',1,lib.translate.sgyj_huaquan_info,function(card,player,target){
            return player!=target;
        }).set('ai',function(target){           
            return -get.attitude(_status.event.player,target);            
        });        
        }
           'step 1'
        if(result.bool){ 
			result.targets[0].damage(event.num);	
			player.draw(4);    
		}else{
		    event.finish();
		}		    		    
				},
				},
            /*"sgyj_moquan":{				
				trigger:{player:['dyingAfter']},	
				forced:true,
				mod:{
				maxHandcardBase:function (player,num){
					return player.maxHp;
				},	
				},						
				content:function (){
				    if(player.maxHp>1){
				        player.loseMaxHp(Math.floor(player.maxHp/2));
				        player.update();
				        player.recover(player.getDamagedHp());
				    }
				},
				},*/
				"sgyj_yizhu2":{
				audio:2,
				shaRelated:true,
				trigger:{player:'useCardToPlayered'},
				forced:true,
				popup:false,
				filter:function(event,player){
					return event.target.hp>player.hp&&event.card.name=='sha'&&player.hujia==0;
				},
				logTarget:'target',
				content:function(){										
					trigger.getParent().directHit.add(trigger.target);					
				},				
			},
				"sgyj_yizhu1":{				
				trigger:{player:['damageBegin']},	
				forced:true,
				popup:false,
				filter:function (event,player){				    
				    return !event.nature&&event.card&&event.card.name=='sha'&&event.source.hp>player.hp&&player.hujia==0;
				},		
				content:function (){
				    trigger.cancel();
				},
				},
           "sgyj_yizhu":{				
				trigger:{global:['gameStart']},	
				forced:true,
				group:["sgyj_yizhu1","sgyj_yizhu2"],
				mod:{
				    maxHandcardBase:function (player,num){
					    return num+player.hujia;
				    },
				    /*targetInRange:function(card,player,target,now){
						if(card.name=='sha'&&player.hujia==0) return true;
					},	*/
				},						
				content:function (){
				    player.changeHujia(6);
				},
				},
		   "sgyj_quanlu":{				
				trigger:{global:['changeHp']},	
				filter:function (event,player){				    
				    return event.player!=player&&event.player==_status.currentPhase&&event.player.countCards('h')<=player.countCards('h')&&player.countCards('he')>0;   				
				},	
				usable:1,
				check:function (event,player){                                 
                    return get.attitude(player,_status.currentPhase)<=0;               
                },  											
				content:function (){
				    player.chooseToDiscard('he',1,true);
				    trigger.player.damage();
				},
				},
				"sgyj_qinchao3":{				
				trigger:{player:['useCardAfter']},	
				filter:function (event,player){				    
				    return player!=_status.currentPhase;   				
				},												
				content:function (){
				    "step 0"
				    player.chooseControl().set('choiceList',['失去1点护甲，对'+get.translation(_status.currentPhase)+'造成一点伤害','增加一点护甲，令'+get.translation(_status.currentPhase)+'回复一点体力']).set('ai',function(){            		    
                    if(get.attitude(player,_status.currentPhase)>0) return 1;
						return 0;
                    });                
                    "step 1"
        if(result.index==0){                       			
			player.changeHujia(-1);
			_status.currentPhase.damage(player);
			event.goto(2);
        }
		else if(result.index==1){            
            if(player.hujia<8){
			    player.changeHujia();
			}			
			_status.currentPhase.recover();
			event.goto(2);
        }	
        "step 2"		
			if(player.getAttackRange()>=get.distance(player,_status.currentPhase)){
                    player.addTempSkill('sgyj_qinchao1');
					player.storage.sgyj_qinchao1=_status.currentPhase;
					_status.currentPhase.addTempSkill('sgyj_qinchao2');
					_status.currentPhase.markSkillCharacter('sgyj_qinchao1',player,'倾朝','对该角色使用牌无次数限制');
            }                     
				},
			},
				"sgyj_qinchao":{				
				trigger:{global:['useCardAfter']},	
				filter:function (event,player){				    
				    return event.player!=player&&player==_status.currentPhase;   				
				},	
				group:"sgyj_qinchao3",								
				content:function (){
				    "step 0"
				    player.chooseControl().set('choiceList',['失去1点护甲，对'+get.translation(trigger.player)+'造成一点伤害','增加一点护甲，令'+get.translation(trigger.player)+'回复一点体力']).set('ai',function(){            		    
                    if(get.attitude(player,trigger.player)>0) return 1;
						return 0;
                    });                
                    "step 1"
        if(result.index==0){                       			
			player.changeHujia(-1);
			trigger.player.damage(player);
			event.goto(2);
        }
		else if(result.index==1){            
            if(player.hujia<8){
			    player.changeHujia();
			}			
			trigger.player.recover();
			event.goto(2);
        }	
        "step 2"		
			if(player.getAttackRange()>=get.distance(player,trigger.player)){
                    player.addTempSkill('sgyj_qinchao1');
					player.storage.sgyj_qinchao1=trigger.player;
					trigger.player.addTempSkill('sgyj_qinchao2');
					trigger.player.markSkillCharacter('sgyj_qinchao1',player,'倾朝','对该角色使用牌无次数限制');
            }                     
				},
			},	
			'sgyj_qinchao1':{
				onremove:function(player){
					player.storage.sgyj_qinchao1.removeSkill('sgyj_qinchao2');
					player.storage.sgyj_qinchao1.unmarkSkill('sgyj_qinchao1');
					delete player.storage.sgyj_qinchao1;
				},
				mod:{					
					cardUsableTarget:function (card,player,target){
						if(target.hasSkill('sgyj_qinchao2')) return true;
					},
				},
			},
			'sgyj_qinchao2':{},	
           /*"sgyj_qinchao3":{				
				trigger:{player:['useCardAfter']},	
				filter:function (event,player){				    
				    return player!=_status.currentPhase;   				
				},												
				content:function (){
				    "step 0"
				    player.chooseControl().set('choiceList',['与'+get.translation(_status.currentPhase)+'各回复一点体力','与'+get.translation(_status.currentPhase)+'各失去一点体力']).set('ai',function(){            		    
                    var list=[0,1];
                    if(player.hp<2) return 0;
						return list.randomGet();
                    });                
                    "step 1"
        if(result.index==0){                       
			player.recover();
			_status.currentPhase.recover();
        }
		else if(result.index==1){            
            player.loseHp();
			_status.currentPhase.loseHp();
        }					
                "step 2"
            if(player.getAttackRange()>=get.distance(player,_status.currentPhase)){
                    player.addTempSkill('sgyj_qinchao1');
					player.storage.sgyj_qinchao1=_status.currentPhase;
					_status.currentPhase.addTempSkill('sgyj_qinchao2');
					_status.currentPhase.markSkillCharacter('sgyj_qinchao1',player,'倾朝','对该角色使用牌无次数限制');
            }                     
				},
			},	
			'sgyj_qinchao1':{
				onremove:function(player){
					player.storage.sgyj_qinchao1.removeSkill('sgyj_qinchao2');
					player.storage.sgyj_qinchao1.unmarkSkill('sgyj_qinchao1');
					delete player.storage.sgyj_qinchao1;
				},
				mod:{					
					cardUsableTarget:function (card,player,target){
						if(target.hasSkill('sgyj_qinchao2')) return true;
					},
				},
			},
			'sgyj_qinchao2':{},						
            "sgyj_qinchao":{				
				trigger:{global:['useCardAfter']},	
				filter:function (event,player){				    
				    return event.player!=player&&player==_status.currentPhase;   				
				},	
				group:"sgyj_qinchao3",								
				content:function (){
				    "step 0"
				    player.chooseControl().set('choiceList',['与'+get.translation(trigger.player)+'各回复一点体力','与'+get.translation(trigger.player)+'各失去一点体力']).set('ai',function(){            		    
                    var list=[0,1];
                    if(player.hp<2) return 0;
						return list.randomGet();
                    });                
                    "step 1"
        if(result.index==0){                       
			player.recover();
			trigger.player.recover();
        }
		else if(result.index==1){            
            player.loseHp();
			trigger.player.loseHp();
        }					
                "step 2"
            if(player.getAttackRange()>=get.distance(player,trigger.player)){
                    player.addTempSkill('sgyj_qinchao1');
					player.storage.sgyj_qinchao1=trigger.player;
					trigger.player.addTempSkill('sgyj_qinchao2');
					trigger.player.markSkillCharacter('sgyj_qinchao1',player,'倾朝','对该角色使用牌无次数限制');
            }                     
				},
			},	*/
           "sgyj_qiaoshou2":{				
				trigger:{player:['phaseUseBegin']},	
				forced:true,
				popup:false,				
				content:function (){				  
				    trigger.cancel();
				},
		    },	    
           "sgyj_qiaoshou1":{				
				trigger:{player:['phaseDrawBegin']},	
				forced:true,
				popup:false,				
				content:function (){				  
				    trigger.cancel();
				},
		    },	    
           "sgyj_qiaoshou":{				
				trigger:{source:['damageBegin']},	
				filter:function (event,player){				    
				    return player.isPhaseUsing()&&event.card&&get.type(event.card)=='trick';   				
				},
				usable:1,						
				content:function (){
				    "step 0"
				    trigger.cancel();
				    "step 1"
				    player.chooseControl().set('choiceList',['跳过摸牌阶段','跳过出牌阶段']).set('ai',function(){            		    
                    var list=[0,1];
						return list.randomGet();
                    });                
                    "step 2"
        if(result.index==0){                       
			trigger.player.addTempSkill('sgyj_qiaoshou1',{player:'phaseEnd'});
        }
		else if(result.index==1){            
            trigger.player.addTempSkill('sgyj_qiaoshou2',{player:'phaseEnd'});
        }					
				},
			},	
            "sgyj_qiaoxie":{
		        trigger:{global:['gameStart']},	
				forced:true,								
				content:function (){
				    var card=get.cardPile('zhuge','field');
					if(card){
						//player.gain(card,'gain2','log');
						player.useCard(card,player);
					}
					var card=get.cardPile('bagua','field');
					if(card){
						//player.gain(card,'gain2','log');
						player.useCard(card,player);
					}
					var card=get.cardPile('muniu','field');
					if(card){
						//player.gain(card,'gain2','log');
						player.useCard(card,player);
					}
				},
				mod:{					
					canBeGained:function (card,player,target,event){
				        if(get.position(card)=='e') return false;	
					},
					canBeDiscarded:function (card){
						if(get.position(card)=='e') return false;
					},
					cardDiscardable:function (card){
						if(get.position(card)=='e') return false;
					},
					maxHandcardBase:function (player,num){
						return num+player.countCards('e');
					},
				},
			},
             "sgyj_xiujing2":{				
				trigger:{global:['phaseAfter']},	
				forced:true,
				popup:false,
				filter:function (event,player){				    
				    return player.storage.sgyj_xiujing&&player.storage.sgyj_xiujing.length>0;   				
				},
				content:function (){
				    for(var i=0;i<player.storage.sgyj_xiujing.length;i++){
                        player.$throw(player.storage.sgyj_xiujing[i]);
                        player.storage.sgyj_xiujing.remove(player.storage.sgyj_xiujing[i]);
                       	player.syncStorage('sgyj_xiujing');  
                    }
				    player.storage.sgyj_xiujing=[];
				    player.update();
				},
			},	
            "sgyj_xiujing1":{				
				trigger:{global:['phaseEnd']},								
				filter:function (event,player){
				    if(player.storage.sgyj_xiujing.length<=0) return false;
					var suits=[];
				    for(var i=0;i<player.storage.sgyj_xiujing.length;i++){
                        if(!suits.contains(get.suit(player.storage.sgyj_xiujing[i]))){
					        suits.push(get.suit(player.storage.sgyj_xiujing[i]));
				        }				
                    }
				    return suits.length>=4;   				
				},
				content:function(){
					"step 0"
					event.suits=[];
					"step 1"
			player.chooseCardButton(player.storage.sgyj_xiujing,1,'选择交出四种花色各一张给任意名角色',true).set('filterButton',function(button){                                                                           				
				return !event.suits.contains(get.suit(button.link));
            }).set('ai',function(button){
                return get.value(button.link);
            });             
            "step 2"
            if(result.bool){  
            event.suits.push(get.suit(result.links[0]));
            //event.card={name:result.links[0][2]};
            event.card=result.links[0];
            player.chooseTarget('【绣锦】',1,lib.translate.sgyj_xiujing_info,function(card,player,target){
            return true;
        }).set('ai',function(target){           
            return get.attitude(_status.event.player,target)>0;            
        });        
        }
           "step 3"
        if(result.bool){ 
            player.$throw(event.card);
            player.storage.sgyj_xiujing.remove(event.card);
            event.card.discard();
            player.syncStorage('sgyj_xiujing');            
            if(!player.storage.sgyj_xiujing.length){
                player.unmarkSkill('sgyj_xiujing');
            }
            else{
                player.markSkill('sgyj_xiujing');
            }               			
			result.targets[0].gain(event.card,'gain2');	
			player.update();		
        }
        "step 4"
        if(event.suits.length<4){
			event.goto(1);
			}
			else event.finish();
				},								
			},							
       		"sgyj_xiujing":{				
				trigger:{global:['useCardEnd','respondEnd','loseAfter']},				
				forced:true,
				init:function (player){
				    player.storage.sgyj_xiujing=[];
				},
				intro:{
                    content:"cards",
                },
				group:["sgyj_xiujing1","sgyj_xiujing2"],
				filter:function (event,player){
				    var evt=event.getParent(); 
					if(name=='loseAfter'){
                        if(evt.name!='discard'||event.type!='discard') return false; 
					}
					for(var i=0;i<event.cards.length;i++){           
                        if(get.position(event.cards[i])!='d') return false;            
                    } 
                    return event.player==_status.currentPhase; 					
				},
				content:function(){
					//player.lose(event.cards,ui.special,'toStorage');	
					var cards=[];
                    for(var i=0;i<trigger.cards.length;i++){
                        if(get.position(trigger.cards[i])=='d'){
                           cards.push(trigger.cards[i]);
                        }
                    }
                    if(cards.length){								                             
                        player.storage.sgyj_xiujing=player.storage.sgyj_xiujing.concat(cards);
			    		player.syncStorage('sgyj_xiujing');
				    	player.markSkill('sgyj_xiujing');
				    	player.update();
                    }									
				},								
			},			
       		"sgyj_miji2":{				
				trigger:{
					player:'phaseZhunbeiBegin',					
				},		
				filter:function(event,player){					
					return player.isHealthy();
				},
				content:function(){
					'step 0'
					player.loseHp();
					'step 1'																																					
					var list=[];   
					for(var i=0;i<lib.inpile.length;i++){
						var name=lib.inpile[i];	
						var card={name:lib.inpile[i]}; 											
						if(get.type(name)=='trick') list.push(['锦囊','',name]);										
						}							
						if(list.length){
							player.chooseButton(['是否视为使用一张锦囊牌？',[list,'vcard']]).set('ai',function(button){																									
								return Math.random();
							});
						}
						else{
							event.finish();
						}							
					'step 2'
					if(result&&result.bool&&result.links[0]){
						var card={name:result.links[0][2]};
						player.chooseUseTarget(card,true);
					}
				},
				ai:{								
					order:2,					
				},
			},
       		"sgyj_miji":{			
				trigger:{player:'phaseJieshuBegin'},
				filter:function (event,player){
					return player.hp<player.maxHp;
				},
				group:"sgyj_miji2",
				content:function(){
					"step 0"
					event.num=player.getDamagedHp();
					player.draw(event.num);
					"step 1"
					var check=player.countCards('h')-event.num;
					player.chooseCardTarget({
						selectCard:event.num,
						filterTarget:function(card,player,target){
							return player!=target;
						},
						ai1:function(card){
							var player=_status.event.player;
							if(player.maxHp-player.hp==1&&card.name=='du') return 30;
							var check=_status.event.check;
							if(check<1) return 0;
							if(player.hp>1&&check<2) return 0;
							return get.unuseful(card)+9;
						},
						ai2:function(target){
							var att=get.attitude(_status.event.player,target);
							if(ui.selected.cards.length==1&&ui.selected.cards[0].name=='du') return 1-att;
							return att-2;
						},
						prompt:'将'+get.cnNumber(event.num)+'张手牌交给一名其他角色',
					}).set('check',check);
					"step 2"
					if(result.bool){
						result.targets[0].gain(result.cards,event.player,'giveAuto');
						player.line(result.targets,'green');
					}
				},
				ai:{
					threaten:function(player,target){
						if(target.hp==1) return 3;
						if(target.hp==2) return 1.5;
						return 0.5;
					},
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'recover')&&player.hp>=player.maxHp-1) return [0,0];
						}
					}
				}
			},
       		"sgyj_wuqian2":{				
				trigger:{source:'damageBegin'},				
				popup:false,
				filter:function (event,player){
					return player.countMark('baonu')>=2&&event.player.hasSkill('sgyj_wuqian_targeted');
				},
				content:function(){
					player.removeMark('baonu',2);
					trigger.num++;
				},								
			},			
       		"sgyj_wuqian":{
				audio:2,
				enable:'phaseUse',
				derivation:'wushuang',
				filter:function(event,player){
					return player.countMark('baonu')>=2;
				},
				group:"sgyj_wuqian2",
				filterTarget:function(card,player,target){
					return target!=player&&!target.hasSkill('sgyj_wuqian_targeted');
				},
				content:function(){
					player.removeMark('baonu',2);
					player.addTempSkill('wushuang');
					player.storage.sgyj_wuqian_target=target;
					player.addTempSkill('sgyj_wuqian_target');
					target.addTempSkill('sgyj_wuqian_targeted');
				},
				subSkill:{
					equip:{
						ai:{
							unequip:true,
							skillTagFilter:function(player,tag,arg){
								if(arg&&arg.target&&arg.target.hasSkill('sgyj_wuqian_targeted')) return true;
								return false;
							}
						}
					},
					targeted:{ai:{unequip2:true}},
					target:{
						mark:'character',
						onremove:true,
						intro:{
							content:'获得无双且$防具失效直到回合结束'
						},
					}
				}
			},
			"sgyj_santang":{                
                trigger:{
                    player:"phaseEnd",
                },                                       
                //direct:true,
                filter:function (event,player){
			    return player.countCards('h')&&game.hasPlayer(function(current){
                    return current!=player&&current.isMinHandcard();
         });                   	 		
			},   
                content:function (){
                'step 0'                         
       /*player.chooseTarget('【散堂】',1,lib.translate.sgyj_santang_info,function(card,player,target){
            return player!=target&&target.isMinHandcard();
        }).set('ai',function(target){           
            return get.attitude(_status.event.player,target)>0;            
        });*/        
        player.chooseCardTarget({
						filterCard:true,
						selectCard:1,
						position:'h',
						filterTarget:function (card,player,target){
							return player!=target&&target.isMinHandcard();
						},
						ai1:function(card){
							if(card.name=='du') return 20;					
							return 6-get.value(card);
						},
						ai2:function(target){
							return get.attitude(_status.event.player,target)>0;  
						},
						prompt:get.prompt2('sgyj_santang'),
						//targets:trigger.targets,
					});
					
        'step 1'
        if(result.bool){       
            //event.cards=player.getCards('h');
            event.card=result.cards[0];
            event.suit=get.suit(event.card);
			player.showCards(event.card);
			/*event.suits=[];
			for(var i=0;i<event.cards.length;i++){
                if(!event.suits.contains(get.suit(event.cards[i]))){
					event.suits.push(get.suit(event.cards[i]));
				}				
            }*/
            event.current=result.targets[0]; 
            if(player!=result.targets[0].previous){ 
			    event.target=result.targets[0].previous;
			}
			else if(player==result.targets[0].previous){
			    event.target=result.targets[0].previous.previous;
			}
            }   
            else{
               event.finish();
            }   
          'step 2'                            
        if(event.current!=event.target){  
           if(event.current.countCards('h')>0){
           var cards=event.current.getCards('h'); 
            event.current.chooseCardButton(cards,1,'选择交出其中一张合理的手牌',true).set('filterButton',function(button){                                                                           				
				return get.suit(button.link)!=event.suit;
				//return event.suits.contains(get.suit(button.link));
            }).set('ai',function(button){
                return -get.value(button.link);
            }); 
            }else{
			    event.goto(5);
			}			                                                             
        }
        else{
            event.goto(6);      
        } 
        'step 3' 
        if(result.bool){
            event.current.$give(result.links[0],player);
			player.gain(result.links[0],event.current);
			event.current.draw(2);
			if(player.isDamaged()&&(player.countCards('h','tao')||player.countCards('h','jiu')||player.countCards('h','taoyuan'))){
				player.showCards(player.getCards('h'));
				player.chooseCardButton(player.getCards('h'),1,'选择弃置其中一张桃或桃园结义或酒').set('filterButton',function(button){                                                                           				
				return button.link.name=='tao'||button.link.name=='taoyuan'||button.link.name=='jiu';
            }).set('ai',function(button){
                return get.value(button.link);
            });                                
			}else{
			    event.goto(5);
			}
			}else{
			    event.goto(5);
			}			
		'step 4' 
            if(result.bool){
            player.discard(result.links[0]);
		    player.recover();
		    event.goto(5);
		    }else{
			    event.goto(5);
			}		
		'step 5'
		if(event.current.next!=player){
		    event.current=event.current.next;	
			event.goto(2);
		}
		else{
			event.current=event.current.next.next;
			event.goto(2);
		}
		'step 6'
		    var cards=event.current.getCards('h'); 
		    event.current.chooseCardButton(cards,1,'选择交出其中一张合理的手牌',true).set('filterButton',function(button){                                                                           				
				//return event.suits.contains(get.suit(button.link));
				return get.suit(button.link)!=event.suit;
            }).set('ai',function(button){
                return -get.value(button.link);
            });  
         'step 7'   
         if(result.bool){
            event.current.$give(result.links[0],player);
			player.gain(result.links[0],event.current);
			event.current.draw(2);
			event.finish();
			}
			else event.finish();						                                                             
    },
            },
			
			"sgyj_quhan2":{},				
       	"sgyj_quhan":{		       
            enable:"phaseUse", 									
            filterTarget:function (card,player,target){
        return player!=target&&target.countCards('h')&&target.isDamaged();
    },
            filter:function (event,player){
			    return player.countCards('h')&&!player.hasSkill('sgyj_quhan2')&&game.hasPlayer(function(current){
                    return current!=player&&current.countCards('h')&&current.isDamaged();
         });                   	 		
			},                             
               content:function (){
                   "step 0"            
                event.cards=player.getCards('h');	
				//event.pcards=[];
				event.suits=[];
				event.psuits=[];
                   "step 1"
                player.choosePlayerCard(target,'h',[1,target.getDamagedHp()],'选择'+get.translation(target)+'的一至'+get.cnNumber(target.getDamagedHp())+'张手牌').set('filterButton',function(button){
					return Math.random();
				});										
					"step 2"
				if(result.bool){
					target.showCards(result.cards);										
					for(var i=0;i<result.cards.length;i++){												   
						event.suits.push(get.suit(result.cards[i]));						    						
					}
					for(var i=0;i<event.cards.length;i++){												   
						if(event.suits.contains(get.suit(event.cards[i]))){
						    event.psuits.push(get.suit(event.cards[i]));
						}					    						
					}
					if(event.psuits.length<=0){
						player.addTempSkill('sgyj_quhan2');
						event.finish();
					}
					else{
					player.chooseCardButton(event.cards,1,'选择弃置其中一张合理的手牌').set('filterButton',function(button){                                                                           						
						return event.psuits.contains(get.suit(button.link));
                    }).set('ai',function(button){
                        return -get.value(button.link);
                    });      						
					}
				}
					"step 3"    
				if(result.bool){
                    player.discard(result.links[0]);
		          	target.recover();			
                }       
                else{
                    player.addTempSkill('sgyj_quhan2');
                    event.finish();  
                }  
        },
        ai:{
        result:{
            target:function (player,target){                
                return target.countCards('h');
            },
        },
        order:8,
        threaten:0.5,
        },  
            },
       	"sgyj_tanbei":{	       							
				enable:"phaseUse",
				usable:1,
				filterTarget:function (card,player,target){
					return player!=target;
				},
				content:function (){
					"step 0"
					if(target.countCards('hej')==0){
						event._result={index:1};
					}
					else{
						target.chooseControl().set('choiceList',[
				'令'+get.translation(player)+'随机获得你区域内的一张牌，然后其本回合内不能再对你使用牌。',
				'令'+get.translation(player)+'本回合内对你使用牌没有次数与距离限制。',
						]).set('ai',function(){
							var list=[0,1];
							return list.randomGet();
						});
					}
					"step 1"
					player.addTempSkill('tanbei_effect3');
					if(result.index==0){
						var card=target.getCards('hej').randomGet();
						player.gain(card,target,'giveAuto','bySelf');
						target.addTempSkill('tanbei_effect2');
						player.addTempSkill('tanbei_effect4');
					}
					else{
						target.addTempSkill('tanbei_effect1');
						player.addTempSkill('tanbei_effect5');
					}
					"step 2"
					player.chooseTarget(get.prompt('sgyj_tanbei'),'选择一名其他角色',function(card,player,target){
						if(!target.countCards('hej')&&target.hasSkill('tanbei_effect1')) return false;
						return target!=player;
					}).set('ai',function(target){
						return -get.attitude(_status.event.player,target);
					});
					"step 3"
					if(result.bool){											
						event.target=result.targets[0];
						if(player.hasSkill('tanbei_effect4')&&!result.targets[0].hasSkill('tanbei_effect1')&&!result.targets[0].hasSkill('tanbei_effect2')){
						    event.target.addTempSkill('tanbei_effect1');
						    player.loseMaxHp(true);
						}
						else if(player.hasSkill('tanbei_effect5')&&!result.targets[0].hasSkill('tanbei_effect1')&&!result.targets[0].hasSkill('tanbei_effect2')){
						    var card=event.target.getCards('hej').randomGet();
						    player.gain(card,event.target,'giveAuto','bySelf');
					    	player.loseMaxHp(true);
				    		event.target.addTempSkill('tanbei_effect2');
						}
						else if(result.targets[0].hasSkill('tanbei_effect1')&&!result.targets[0].hasSkill('tanbei_effect2')){
						    result.targets[0].addTempSkill('tanbei_effect2');
						    event.finish();
						}
						else if(!result.targets[0].hasSkill('tanbei_effect1')&&result.targets[0].hasSkill('tanbei_effect2')){
						    result.targets[0].addTempSkill('tanbei_effect1');
						    event.finish();
						}
                    }
                    else{
                        event.finish();
                    }                    
				},
				ai:{
					order:function (){
						return [2,4,6,8,10].randomGet();
					},
					result:{
						target:function (player,target){
							return -2-target.countCards('h');
						},
					},
					threaten:1.1,
				},
        },        
         	"tanbei_effect4":{
				charlotte:true,
			},
			"tanbei_effect5":{
				charlotte:true,
			},
       	"sgyj_dimeng":{				
				trigger:{
					player:'loseEnd',					
				},
				//frequent:true,
				filter:function(event,player){
					if(player.countCards('h')) return false;
					if(event.getParent(2).name!='dimeng') return false;
					//if(event.skill!='dimeng') return false;
					var evt=event.getl(player);
					return evt&&evt.hs&&evt.hs.length>0;
				},
				/*content:function(){
				    event.insert(lib.skill.sgyj_dimeng_use.content,{player:player});										
				},*/
				content:function(){
					'step 0'																																					
					var list=[];   
					for(var i=0;i<lib.inpile.length;i++){
						var name=lib.inpile[i];	
						var card={name:lib.inpile[i]}; 				
							if(name=='sha'){
								list.push(['基本','','sha']);
								list.push(['基本','','sha','fire']);
								list.push(['基本','','sha','thunder']);
								list.push(['基本','','sha','ice']);
							}
							else if(!get.tag(card,'damage')&&get.type(name)=='trick') list.push(['锦囊','',name]);							
							else if(get.type(name)=='basic') list.push(['基本','',name]);
						}							
							if(list.length){
								player.chooseButton(['是否视为使用一张基本牌或无伤害性牌？',[list,'vcard']]).set('ai',function(button){
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
											if(card.nature=='thunder'||card.nature=='ice') return 2.92;
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
							
					'step 1'
					if(result&&result.bool&&result.links[0]){
						var card={name:result.links[0][2],nature:result.links[0][3]};
						player.chooseUseTarget(card,true);
					}
				},
				ai:{								
					noh:true,					
				},
			},
       	"sgyj_zhanbu2":{				
				trigger:{player:'phaseDrawBegin2'},
				forced:true,
				popup:false,
				filter:function(event,player){
					return !event.numFixed;
				},
				content:function(){
					trigger.num--;
				},				
				mod:{
					maxHandcardBase:function(player,num){
						return num-1;
					},
				},
			},			
       	"sgyj_zhanbu1":{				
				trigger:{player:'phaseDrawBegin2'},
				forced:true,
				popup:false,
				filter:function(event,player){
					return !event.numFixed;
				},
				content:function(){
					trigger.num++;
				},				
				mod:{
					maxHandcardBase:function(player,num){
						return num+1;
					},
				},
			},			
       "sgyj_zhanbu":{                
                trigger:{
                    player:"phaseBegin",
                },                                       
                direct:true,
                filter:function (event,player){            
        return true;
    },
                content:function (){
                'step 0'                  
        //event.num=1+player.countCards('e');   
      // 'step 1'
       player.chooseTarget('【占卜】',1+player.countCards('e'),lib.translate.sgyj_zhanbu_info,function(card,player,target){
            return true;
        }).set('ai',function(target){
            if(player==target) return 1
            return -get.attitude(_status.event.player,target);            
        });
        'step 1'
        if(result.bool){       
            event.num1=0; 
            event.targets=result.targets;                        
            }   
            else{
               event.finish();
            }   
          'step 2'                            
        if(event.num1<event.targets.length){  
            event.targets[event.num1].judge(function(card){
				var color=get.color(card);
					if(color=='black') return -4;
					if(color=='red') return 2;			
			});                                                     
            player.logSkill("sgyj_zhanbu");                                                      
        }
        else{
            event.finish();      
        } 
        'step 3' 
        if(result.color=='red'){
			event.targets[event.num1].addTempSkill('sgyj_zhanbu1',{player:'pleaseEnd'});						
		}
		else if(result.color=='black'){
			event.targets[event.num1].addTempSkill('sgyj_zhanbu2',{player:'pleaseEnd'});					
		}
		'step 4' 	
		event.num1++;
		event.goto(2);				
    },
            },
            "sgyj_maidu":{					
				trigger:{global:'judge'},
                    filter:function(event,player){
                        if(_status.currentPhase!=player) return false;
                        if(event.player==player) return false;
                        if(event.fixedResult&&event.fixedResult.suit) return event.fixedResult.suit!='spade';
                        return get.suit(event.player.judging[0],event.player)!='spade';
                    },
                    forced:true,
                    content:function(){
                        game.log(player,'将判定结果改为了','#y'+get.translation("spade2"));
                        if(!trigger.fixedResult) trigger.fixedResult={};
                        trigger.fixedResult.suit='spade';
                        trigger.fixedResult.color=get.color({suit:'spade'}); 
                    },                                       
			},
         "sgyj_shenyou":{					
				trigger:{player:'judge'},
                    filter:function(event,player){
                        if(event.fixedResult&&event.fixedResult.suit) return event.fixedResult.suit!='heart';
                        return get.suit(player.judging[0],player)!='heart';
                    },
                    forced:true,
                    content:function(){
                        game.log(player,'将判定结果改为了','#y'+get.translation("heart2"));
                        if(!trigger.fixedResult) trigger.fixedResult={};
                        trigger.fixedResult.suit='heart';
                        trigger.fixedResult.color=get.color({suit:'heart'}); 
                    },                   
                    ai:{
                        effect:{
                            target:function (card,player,target){                                
                                if(card.name=='shandian') return [1,3];
                                if(card.name=='lebu') return [1,0,1,-1];
                                if(card.name=='bingliang') return [1,0,1,0.5];
                                if(card.name=='caomu') return [1,0,1,0.5];                                                       
                            },
                        },
                    },		
			},
         "sgyj_bozhong":{  
				trigger:{player:['phaseBegin','phaseEnd']},													          
				content:function(){				
					event.suits=[];
					event.types=[];
                    var cards=player.getCards('h');
                    for(var i=0;i<cards.length;i++){
                        if(!event.suits.contains(get.suit(cards[i]))){
                           event.suits.push(get.suit(cards[i])); 
                        }
                        if(!event.types.contains(get.type(cards[i]))){
                           event.types.push(get.type(cards[i])); 
                        }
                    }
                    player.discard(cards);
                    player.loseMaxHp(true);
                    if(event.suits.length==4){
                        player.recover();
                    }
                    if(event.types.length>=3){
                        player.gainMaxHp(true);
                    }
                    game.delay();
                    //player.useCard({name:'wugu'});
                    var list=game.filterPlayer(function(current){ 
                        return player.canUse('wugu',current); 
                    });                 
                    list.sortBySeat(); 
                    player.useCard({name:'wugu'},list); 		
				},				
			},
		 "sgyj_shiliang":{},
		 "sgyj_shouhuo":{  
				trigger:{global:'useCard'},									
				forced:true, 
                filter:function (event,player){				
				    return event.card&&event.card.name=='wugu';
			    },                   
				content:function(){				
					"step 0"
					trigger.cancel();			
					"step 1"
					event.num=game.players.length+game.dead.length;
					event.cards=get.cards(event.num);					
					player.showCards(event.cards);
					player.gain(event.cards,'gain2');
					//if(event.num>2){
					    //player.loseMaxHp();
					//}
					"step 2"
					player.chooseCardButton(event.cards,1,'选择交出其中一张牌').set('filterButton',function(button){           
             return true;
         }).set('ai',function(button){
             return get.value(button.link);
         });      
			        "step 3"
					if(result.bool==false){
						event.finish();
					}else{
						event.card=result.links[0];
                        player.chooseTarget(get.prompt2('sgyj_shiliang'),1,function(card,player,target){
            return true;
        },function(target){
            return get.attitude(player,target)>0;
        });                                
					}
					"step 4"
        if(result.bool){
            event.cards.remove(event.card);
			player.$give(event.card,player);
            result.targets[0].gain(event.card,player);
            event.num--;
		}
        "step 5"
        if(event.num>0){
            event.goto(2);
        }else{
            event.finish();
        }
				},				
			},
			"sgyj_zhaoyue2":{  
				trigger:{player:'useCardEnd'},									
				forced:true,  
				filter:function (event,player){								    
				    if(event.parent.name=='sgyj_zhaoyue2') return false;
				    return event.card&&event.card.isCard&&get.suit(event.card)=='heart'&&player.hp<=1;
			    },  			 
				/*"prompt2":function (event,player){
				    return '是否对'+get.translation(event.targets)+'使用的'+get.translation(event.card)+'额外结算一次?';
			    },*/
			    logTarget:'player',
			    content:function (){
				    player.useCard(trigger.card,trigger.targets,false);				    
			    },
			},
         "sgyj_zhaoyue":{  
				trigger:{target:'useCardToTargeted'},									
				forced:true,  
				group:'sgyj_zhaoyue2',
				mod:{
                    targetInRange:function (card,player,target){
                        if(get.suit(card)=='heart'||player.hp<=1) return true;                            
                    },                            
                    cardUsable:function (card,player,event){                              
                        if(get.suit(card)=='heart'||player.hp<=1) return Infinity;
                    },                            
                },
				filter:function (event,player){								    
				    return player!=event.player&&event.card&&event.card.isCard&&get.color(event.card)=='black'&&player.hp<3;
			    },  
			   /* mod:{
					targetEnabled:function (card,player,target){
						if((get.type(card)=='trick'||get.type(card)=='basic')&&(card.number!=11||card.number!=12||card.number!=13)) return false;
						//return true;
					},
				},  */
				content:function(){				
					trigger.getParent().excluded.add(player);
					trigger.cancel();
				},				
			},
         "sgyj_qinying":{  
				trigger:{player:'gainEnd'},
				filter:function (event,player){				
				    return event.source&&_status.currentPhase==event.source;
			    },									
				check:function (event,player){                                 
                    return get.attitude(player,_status.currentPhase)>0;               
                },  
                usable:1,                  
				content:function(){				
					_status.currentPhase.draw();
				},				
			},
			"sgyj_heshen2":{ 
			    trigger:{player:'loseAfter'},
				forced:true,
				popup:"sgyj_heshen",
				filter:function (event,player){				
				    return !player.countCards('he');
			    },
				content:function(){
					player.die();
				},
			},
			"sgyj_heshen":{ 
			    trigger:{player:'phaseDiscardBegin'},
				forced:true,
				group:"sgyj_heshen2",
				content:function(){
					trigger.cancel();
				},
			},
         //"sgyj_heshen":{ 
             /* trigger:{player:'phaseDiscardBegin'},
				forced:true,
				content:function(){
					trigger.setContent(lib.skill.sgyj_heshen.phaseDiscardContent);
				},
				phaseDiscardContent:function(){
					"step 0"
					var num=0;
					for(var i=0;i<game.players.length;i++){                 
                        num+=game.players[i].getHandcardLimit();                  
                    }		
					var hs=player.getCards('h');				
				//	for(var i=0;i<hs.length;i++){
					//	if(game.checkMod(hs[i],player,false,'ignoredHandcard',player)==true){
						//	num--;
					//	}
				//	}
					//player.getHandcardLimit()=num;
					event.num=num;
					//num=event.num;
					if(event.num>=hs) event.finish();
					else{
						if(lib.config.show_phase_prompt){
							player.popup('弃牌阶段');
						}
					}
					event.trigger('phaseDiscard');
					"step 1"
					player.chooseToDiscard(hs-event.num,true,'h');
					"step 2"
					event.cards=result.cards;
				},*/
                // mod:{
					/*maxHandcard:function (player,num){
						//var number=0;
						//var players=game.filterPlayer();
						for(var i=0;i<game.players.length;i++){                 
                           number+=game.players[i].getHandcardLimit();                  
                        }												
						return num+number;						
					},*/
					/*maxHandcardBase:function(player,num){
						if(game.players.length>3) return 20;
						return 12;
					},
				},
				},*/
         "sgyj_litou":{  
				/*trigger:{player:'dying'},		
				priority:15,
				filter:function (event,player){				
				    return player.countCards('he')>0;
			    },
				check:function (event,player){                                      
                    if(player.hp<1) return 1;
                },                
				content:function(){				
					player.chooseToDiscard('he',true);
					player.recover(player.maxHp-player.hp);
					player.update();
				},*/
				trigger:{player:'damageBegin'},		
				priority:15,
				filter:function (event,player){				
				    return player.countCards('he')>0;
			    },
				forced:true,             
				content:function(){				
					player.chooseToDiscard('he',true);
					trigger.cancel();
					if(!player.countCards('he')){
						player.die();
					}
				},
			},
        "sgyj_yuanxing2":{  
				trigger:{player:'damageBegin'},		
				priority:15,
				check:function (event,player){
                    if(player.maxHp<3) return 0;                    
                        return Math.random();
                },               
				content:function(){				
					"step 0"               
        player.chooseControl().set('choiceList',['效果+1','效果-1']).set('ai',function(){            		    
            return 1;
        });                
        "step 1"
        if(result.index==0){            
            player.loseMaxHp();
			trigger.num++;
        }
		else if(result.index==1){            
            player.loseMaxHp();
			trigger.num--;
        }					
				},				
			},
        "sgyj_yuanxing":{  
				trigger:{source:'damageBegin'},		
				priority:15,
				check:function (event,player){
                    if(player.maxHp<3) return 0;                    
                        return Math.random();
                },
                group:"sgyj_yuanxing2",
				content:function(){				
					"step 0"               
        player.chooseControl().set('choiceList',['效果+1','效果-1']).set('ai',function(){            
		    if(get.attitude(player,trigger.player)<=0) return 0;
            return 1;
        });                
        "step 1"
        if(result.index==0){            
            player.loseMaxHp();
			trigger.num++;
        }
		else if(result.index==1){            
            player.loseMaxHp();
			trigger.num--;
        }					
				},				
			},
        "sgyj_chihu":{  
				trigger:{target:'useCardToBefore'},
				forced:true,
				priority:15,
				filter:function(event,player){
					var evt=player.getLastUsed(1);
					if(!evt||!evt.card) return false;
					if(player.isPhaseUsing()) return false;					
					if(_status.currentPhase==player) return false;
					return evt.card.name&&evt.card.name==event.card.name;
				},
				content:function(){				
					trigger.cancel();
				},				
			},        
        "sgyj_zhengjiang2":{                       
            trigger:{
                player:"phaseBegin",
            },            
			filter:function (event,player){				
				return player.storage.sgyj_zhengjiang2.length>0;
			},
			forced:true,
			marktext:'缓',
			intro:{
				content:'cards',					
			},
			init:function (player){
			    player.storage.sgyj_zhengjiang2=[];
			},
			content:function(){						    
				player.gain(player.storage.sgyj_zhengjiang2,'gain2','fromStorage');
                player.unmarkAuto('sgyj_zhengjiang2',player.storage.sgyj_zhengjiang2);	
                player.skip('phaseDraw');
        		player.removeSkill('sgyj_zhengjiang2');						
		     },
		 },	
        "sgyj_zhengjiang":{				
				trigger:{source:'damageEnd'},
				//direct:true,
				usable:1,
				filter:function (event,player){
					return event.num>0&&event.player!=player;
				},
				content:function(){
					"step 0"
					if(trigger.player.countCards('he')){
					    player.gainPlayerCard(get.prompt('sgyj_zhengjiang',trigger.player),trigger.player,get.buttonValue,'he').set('logSkill',['sgyj_zhengjiang',trigger.player]);
					}
					"step 1"
					var num=Math.min(trigger.player.maxHp,5);
					player.draw(num);
					trigger.player.addSkill("sgyj_zhengjiang2");
					player.chooseCard('he',num,'震疆：将'+get.cnNumber(num)+'张牌置于'+get.translation(trigger.player)+'的武将牌上',true).set('ai',function(card){
						if(get.attitude(player,trigger.player)>0){
							return 7-get.value(card);
						}
						return -get.value(card);
					});
					"step 2"
					if(result.bool){
						player.logSkill('sgyj_zhengjiang');
						player.lose(result.cards,ui.special,'toStorage');
						player.$give(result.cards,trigger.player,false);
						trigger.player.storage.sgyj_zhengjiang2=trigger.player.storage.sgyj_zhengjiang2.concat(result.cards);
						trigger.player.syncStorage('sgyj_zhengjiang2');
						trigger.player.markSkill('sgyj_zhengjiang2');						
					}
				},			
			},
			"sgyj_yihu2":{
				audio:2,
				trigger:{player:'damageBegin4'},
				forced:true,				
				init:function (player){
				    player.storage.sgyj_yihu2=0;
				},
				content:function(){			
				    player.storage.sgyj_yihu2++;
				    player.update();
				    if((player.storage.sgyj_yihu2>4)||(player.storage.sgyj_yihu2>2&&game.players.length<5)){
					var cards=trigger.cards.filterInD();
					if(cards.length) player.gain(cards,'gain2','log');
					}
					player.storage.sgyj_yihu2=0;
					player.removeSkill('sgyj_yihu2');
				},
				ai:{
					filterDamage:true,					
				},
			},
			
        "sgyj_yihu":{                       
            trigger:{
                global:"useCard",
            },
			filter:function (event,player){
				if(!event.targets) return false;
				if(!event.targets.contains(player)) return false;
				var info=get.info(event.card);
				if(info.type!='trick') return false;
				if(info.multitarget) return false;					
					return event.targets.length>=3;
			},
			forced:true,
			content:function(){			
			'step 0'
			player.addTempSkill('sgyj_yihu2');
			'step 1'
			for(var i=0;i<trigger.targets.length;i++){
			   if(player!=trigger.targets[i]){                   
                   trigger.targets[i].line(player,'green');			       			       	
		           trigger.targets[i]=player;	
               }
            }            			
			},
		 },
			/*"sgyj_manyi2":{
				audio:2,
				trigger:{player:'damageBegin4'},
				forced:true,				
				init:function (player){
				    player.storage.sgyj_manyi2=0;
				},
				content:function(){			
				    player.storage.sgyj_manyi2++;
				    player.update();
				    if((player.storage.sgyj_manyi2>5)||(player.storage.sgyj_manyi2>3&&game.players.length<=5)){
					var cards=trigger.cards.filterInD();
					if(cards.length) player.gain(cards,'gain2','log');
					}
					player.storage.sgyj_manyi2=0;
					player.removeSkill('sgyj_manyi2');
				},
				ai:{
					filterDamage:true,					
				},
			},
			
        "sgyj_manyi":{                       
            trigger:{
                global:"useCard",
            },
			filter:function (event,player){
				if(!event.targets) return false;
				if(!event.targets.contains(player)) return false;
				var info=get.info(event.card);
				if(info.type!='trick') return false;
				if(info.multitarget) return false;					
					return event.targets.length>3;
			},
			forced:true,
			content:function(){			
			'step 0'
			player.addTempSkill('sgyj_manyi2');
			'step 1'
			for(var i=0;i<trigger.targets.length;i++){
			   if(player!=trigger.targets[i]){                   
                   trigger.targets[i].line(player,'green');			       			       	
		           trigger.targets[i]=player;	
               }
            }            			
			},
		 },*/	
        "sgyj_zhichi2":{  
		    mod:{
				targetEnabled:function(card,player,target,now){						
				    if(card.name=='sha'||get.type(card)=='trick') return false;						
				},
			},
		},
		"sgyj_zhichi":{                       
            trigger:{
                player:"phaseEnd",
            },
			filter:function (event,player){
                return player.hp>0;
            },
			check:function (event,player){
                if(player.hp<2) return 0;                    
                    return 1;
            },
			content:function(){
			"step 0"
			player.loseHp();
			"step 1"
			player.addTempSkill('sgyj_zhichi2',{player:'phaseBegin'});			
			},
		 },	
		"sgyj_mingce":{
			enable:'phaseUse',
				usable:1,				
				filter:function(event,player){
					return true;
				},				
				selectTarget:2,
				multitarget:true,				
				targetprompt:['使用杀','目标'],
				filterTarget:function(card,player,target){
					if(ui.selected.targets.length==0){
						return player!=target;
					}
					else{
						return target.isAlive();
					}
				},
				delay:false,
				content:function(){
					"step 0"					
					targets[0].chooseToUse({name:'sha'},targets[1],'是否使用一张【杀】？'); 
					"step 1"
					if(result.bool){
						game.asyncDraw([player,targets[0]]);						
					}
					else{
						if(targets[0].countCards('he')){
						    targets[0].chooseToDiscard('he',true);
						}
						if(player.countCards('he')){
						    player.chooseToDiscard('he',true);
						}
					}
				},
				ai:{
					result:{
						player:function(player){
							var players=game.filterPlayer();
							for(var i=0;i<players.length;i++){
								if(players[i]!=player&&get.attitude(player,players[i])>1&&get.attitude(players[i],player)>1){
									return 1;
								}
							}
							return 0;
						},
						target:function(player,target){
							if(ui.selected.targets.length){
								return -0.1;
							}
							return 1;
						},
					},
					order:8.5,
					expose:0.2
				},  
			},
		"sgyj_hongyan":{				
				trigger:{player:'damageBegin'},
				forced:true,
				filter:function (event,player){
					return event.source&&event.source.sex=='male';
				},
				content:function(){
					"step 0"
				trigger.source.chooseCard('交给'+get.translation(player)+'一张红桃牌','he',function(card){
               return get.suit(card)=='heart';
            }).ai=function(card){			   
               return 7-get.value(card);
            }; 
					"step 1"
					if(result.bool==false){
						trigger.cancel();
					}else{
						trigger.source.$give(result.cards[0],player);
                        player.gain(result.cards[0],trigger.source);
					}					
				},
		},
		"sgyj_tianxiang":{
				enable:'phaseUse',
				usable:1,				
				filter:function (event,player){
				    return player.countCards('h',{suit:'heart'});					
				},
				filterCard:function (card){                    
                    return get.suit(card)=='heart';
                },
                selectCard:[1,Infinity],              
                position:'he',      								
				content:function(){
				"step 0"               
        player.chooseControl().set('choiceList',['对你距离1以内一名其他角色造成'+get.cnNumber(cards.length)+'点伤害','对至多'+get.cnNumber(cards.length)+'名其他角色各造成1点伤害']).set('ai',function(){            
		    if(cards.length<3) return 0;
            return 1;
        });                
        "step 1"
        if(result.index==0){            
            event.goto(2);
        }
		if(result.index==1){            
            event.goto(4);
        }
		"step 2"
		player.chooseTarget(get.prompt2('sgyj_tianxiang'),1,function(card,player,target){
            return target!=player&&get.distance(player,target)<=1;
        },function(target){
            return -get.attitude(player,target);
        });        
        "step 3"
        if(result.bool){
			result.targets[0].damage(cards.length);
			result.targets[0].draw(result.targets[0].getDamagedHp());
			event.finish();
		}
		"step 4"
		player.chooseTarget(get.prompt2('sgyj_tianxiang'),[1,cards.length],function(card,player,target){
            return target!=player;
        },function(target){
            return -get.attitude(player,target);
        });        
        "step 5"
        if(result.targets.length){
            //var target=result.targets.shift();
            //target.damage();
			//target.draw(target.getDamagedHp());
            //event.redo();
            for(var i=0;i<result.targets.length;i++){			
				result.targets[i].damage();
			    result.targets[i].draw(result.targets[i].getDamagedHp());
			}
        }
		else event.finish();
				},
		ai:{
         result:{
            player:function (player){
              if(player.countCards('h')<4) return 1;   
                  return 2;
              },
            },
            order:8,
            threaten:0.5,
        },  
			},
		"sgyj_fanjian":{
				enable:'phaseUse',
				usable:1,				
				filter:function (event,player){
				    return player.countCards('h');					
				},
				filterCard:true,
                selectCard:[1,Infinity],              
                position:'h',      
				filterTarget:function (card,player,target){
					return player!=target;
				},					
				content:function(){
				"step 0"      
         player.$give(cards,target);
		 target.gain(cards,player);
		  "step 1"
        target.chooseControl().set('choiceList',['受到等量的伤害','将武将牌翻面','交给你所有手牌']).set('ai',function(){
            if(target.countCards('h')<4) return 2; 
		    if(target.isTurnedOver()) return 1;
		    if(cards.length<2) return 0;
                return 1;
        });                
        "step 2"
        if(result.index==0){            
            target.damage(cards.length);
			event.finish();
        }
		if(result.index==1){            
            target.turnOver();
			event.finish();
        }
		if(result.index==2){            
            target.$give(target.getCards('h'),player);
		    player.gain(target.getCards('h'),target);
			event.finish();
        }		
				},
		ai:{
         result:{
            target:function (player,target){
              if(target.hp>3) return -1;   
                  return -target.countCards('h')-2;
              },
            },
            order:8,
            threaten:0.5,
        },  
			},
		"sgyj_jinghong":{                       
            trigger:{
                player:"damageBegin",
            },
			filter:function (event,player){
                return player.countCards('he')>=player.hp;
            },			
			content:function(){
			"step 0"
			player.choosePlayerCard(player,'he',player.hp,'选择'+get.cnNumber(player.hp)+'张牌',true).ai=function(card){          
                return -get.value(card); 
            };    
			"step 1"
			if(result.bool){
				trigger.cancel();
				player.discard(result.cards);
				for(var i=0;i<result.cards.length;i++){
                if(get.color(result.cards[i])=='black'){
                    player.draw();	
                }
                }	
			}						
			},
		 },	
		 "sgyj_yiyong2":{
				popup:false,
				shaRelated:true,
				trigger:{player:'useCardToPlayered'},				
				forced:true,
				filter:function(event,player){
					return player.storage.sgyj_zhengjun.length>1&&event.card.name=='sha';
				},
				logTarget:'target',
				content:function(){
					trigger.getParent().directHit.add(trigger.target);					
				},				
			},
		 "sgyj_yiyong":{
				trigger:{player:'phaseDrawBegin'},
				forced:true,				
				filter:function (event,player){					
					return player.storage.sgyj_zhengjun&&player.storage.sgyj_zhengjun.length==1;
				},
				group:"sgyj_yiyong2",
				content:function(){
					trigger.num++;
				},
				mod:{
					cardUsable:function(card,player,num){
						if(player.storage.sgyj_zhengjun.length==1&&card.name=='sha') return num+1;
					},
					maxHandcardBase:function(player,num){
						if(player.storage.sgyj_zhengjun.length>1) return num+1;
					},
					targetEnabled:function(card,player,target){
						if(target.storage.sgyj_zhengjun.length==0&&get.type(card)=='trick'&&get.type(card)!='delay'&&get.color(card)=='black') return false;
					},
				},
			},
			"sgyj_zhengjun6":{
				trigger:{player:['useCardBefore','respondBefore']},
				forced:true,
				popup:false,
				filter:function (event,player){
					return event.skill=='sgyj_zhengjun5';                                          
				},
				content:function (){					
         "step 0"
        player.chooseCardButton(player.storage.sgyj_zhengjun,1,'选择其中的一张牌',true).set('filterButton',function(button){                                                                           						
				return true;
            }).set('ai',function(button){
                return -get.value(button.link);
            });      											
			"step 1"  
			if(result.bool){
                player.$throw(result.links);						
                player.storage.sgyj_zhengjun.remove(result.links[0]);
                game.cardsDiscard(result.links[0]);
                player.syncStorage('sgyj_zhengjun');                
				if(player.storage.sgyj_zhengjun.length<=0){
                    player.unmarkSkill('sgyj_zhengjun');                    
                }		          					          			
            }       
            else event.finish();                                              
				},
			},
			
			"sgyj_zhengjun5":{				
				prompt:'当你需要使用【无懈可击】时，可弃置一张“军”牌，视为使用之',
				enable:'chooseToUse',
				filter:function (event,player){					
					return player.storage.sgyj_zhengjun.length>0;                 
				},			
				filterCard:function (){return false},
     selectCard:-1,
     onuse:function (result,player){
         
     },
     viewAsFilter:function (player){
         return player.storage.sgyj_zhengjun.length>0;                 
     },	
				viewAs:{name:'wuxie'},				
				ai:{
				    order:5,
					threaten:1.5,
					respondShan:true,
				}
			},
			
		"sgyj_zhengjun4":{
				trigger:{player:['useCardBefore','respondBefore']},
				forced:true,
				popup:false,
				filter:function (event,player){
					return event.skill=='sgyj_zhengjun3';                                          
				},
				content:function (){					
         "step 0"
        player.chooseCardButton(player.storage.sgyj_zhengjun,1,'选择其中的一张牌',true).set('filterButton',function(button){                                                                           						
				return true;
            }).set('ai',function(button){
                return -get.value(button.link);
            });      											
			"step 1"  
			if(result.bool){
                player.$throw(result.links);						
                player.storage.sgyj_zhengjun.remove(result.links[0]);
                game.cardsDiscard(result.links[0]);
                player.syncStorage('sgyj_zhengjun');                
				if(player.storage.sgyj_zhengjun.length<=0){
                    player.unmarkSkill('sgyj_zhengjun');                    
                }		          					          			
            }       
            else event.finish();                                              
				},
			},
			
			"sgyj_zhengjun3":{				
				prompt:'当你需要使用【闪】时，可弃置一张“军”牌，视为使用之',
				enable:'chooseToUse',
				filter:function (event,player){					
					return player.storage.sgyj_zhengjun.length>0;                 
				},			
				filterCard:function (){return false},
     selectCard:-1,
     onuse:function (result,player){
         
     },
     viewAsFilter:function (player){
         return player.storage.sgyj_zhengjun.length>0;                 
     },	
				viewAs:{name:'shan'},				
				ai:{
				    order:5,
					threaten:1.5,
					respondShan:true,
				}
			},	
		"sgyj_zhengjun2":{                       
            trigger:{
                global:"roundStart",
            },
			forced:true,
			popup:false,			
			content:function(){
				player.removeSkill('sgyj_zhengjun2');
			},
		 },		
	   "sgyj_zhengjun":{				
				trigger:{
				    player:['damageEnd','phaseEnd'],				    
				},
				direct:true,
				group:["sgyj_zhengjun3","sgyj_zhengjun4","sgyj_zhengjun5","sgyj_zhengjun6"],
				init:function (player){
					//player.unmarkSkill('sgyj_zhengjun');
					//if(!player.storage.sgyj_zhengjun) player.storage.sgyj_zhengjun=[];
					player.storage.sgyj_zhengjun=[];
				},
				marktext:"军",
				intro:{
					  content:'cards',					
				},
				filter:function (event,player,name){
					if(name=='damage') return !player.hasSkill('sgyj_zhengjun2');
                return game.hasPlayer(function(current){
                    return current!=player&&current.countCards('hej');
         });                   	 		
				},								
				content:function(){
				"step 0"
				if(trigger.name=='damage') player.addSkill('sgyj_zhengjun2');
			    player.chooseTarget(get.prompt2('sgyj_zhengjun'),function(card,player,target){
            return target!=player&&target.countCards('hej');
        },function(target){
                if(target.countCards('j')) return get.attitude(player,target)>0;
			return -get.attitude(player,target);
        });        
        "step 1"
        if(result.bool){
            player.logSkill("sgyj_zhengjun");
			event.target=result.targets[0];
            player.choosePlayerCard(result.targets[0],'hej','选择一张牌',true).ai=function(card){          
                return 9-get.value(card); 
            };              
        }
        else event.finish();        								
        "step 2"
        if(result.bool){			
      		event.target.lose(result.cards,ui.special,'tostorage');
      		player.storage.sgyj_zhengjun=player.storage.sgyj_zhengjun.concat(result.cards);
      		//player.storage.sgyj_zhengjun.push(result.cards);
			player.syncStorage('sgyj_zhengjun'); 
			player.markSkill('sgyj_zhengjun');
		}
		},		
			},
		"sgyj_jienu":{                          
                            trigger:{
                                player:"phaseDrawBegin",
                            },
                            filter:function (event,player){
                                return player.isAlive();
                            },
                            content:function (){
                                'step 0' 
								trigger.cancel();
                                var cards=get.cards(5);
								event.list=[];
                                player.showCards(cards);
                                for(var i=0;i<cards.length;i++){
                                    if(cards[i].name=='sha'){
                                        event.list.push(cards[i]);
                                    }
                                    else{
                                        cards[i].discard();
                                    }
                                }                                
                                'step 1'
                                if(event.list.length&&event.list.length!=1){
                                    var next=player.chooseCardButton('竭驽<br>请选择要使用的“杀”',event.list);
                                    next.set("filterButton",function(button){
                                        return _status.event.player.hasUseTarget(button.link,false);
                                    });
                                    next.set('ai',function(button){
                                        return _status.event.player.getUseValue(button.link,false);
                                    });
                                }
                                else if(event.list.length==1){
                                    if(player.hasUseTarget(event.list[0],false)){
                                        event.dircard=event.list[0];
                                    }
                                    else{
                                        event.list.shift().discard();  
                                        event.finish();
                                    }
                                }
                                else{
                                    event.finish();
                                }
                                'step 2'
                                if(result.bool||event.dircard){
                                    event._result={bool:false};
                                    event.using=event.dircard||result.links[0];
                                    player.chooseUseTarget(event.using,false,'nodistance');
                                }
                                else{
                                    while(event.list.length){
                                        event.list.shift().discard();  
                                    }
                                    event.finish();
                                }
                                'step 3'
                                if(result&&result.bool){
                                    event.list.remove(event.using);                                                                        
                                    if(event.list.length) event.goto(1);
                                }
                                else{
                                    while(event.list.length){
                                        event.list.shift().discard();  
                                    }    
                                }
                            },
                        },
		"sgyj_yashiclear":{
                trigger:{
                    player:"phaseEnd",
                },                          
                forced:true,
				popup:false,
                filter:function (event,player){
        return player.isAlive();
    },                
				content:function(){
				//player.storage.sgyj_yashidraw=0;
				player.storage.sgyj_yashi=[];
				},
			},
        "sgyj_yashidraw":{
                trigger:{
                    player:"useCard",
                }, 
			check:function (event,player){                                 
                if(player.isHealthy()) return 0;
				if(player.countCards('h')>3) return 0;
                return Math.random();
            },                                       
                filter:function (event,player){
        return _status.currentPhase==player&&get.suit(event.card)==player.storage.sgyj_yashi;
    },                
				content:function(){				
				player.discard(player.getCards('h'));
				player.recover();
				},
				},
		"sgyj_yashi":{		       
            enable:"phaseUse", 
			usable:2,
			init:function (player){
                player.storage.sgyj_yashi=[];
            }, 
			group:["sgyj_yashidraw","sgyj_yashiclear"],
            filterTarget:function (card,player,target){
        return player!=target&&target.countCards('h');
    },
            filter:function (event,player){
			    return !player.hasSkill('sgyj_chuchu1');
			},                             
                content:function (){
        "step 0"            
        event.cards=target.getCards('h');
		target.showCards(event.cards);
        "step 1"
         player.chooseCardButton(event.cards,1,'选择'+get.translation(target)+'的一张手牌').set('filterButton',function(button){           
             return true;
         }).set('ai',function(button){
             return get.value(button.link);
         });
       "step 2"
        if(result.bool){
            var suit1=get.suit(result.links[0]);
			target.discard(target.getCards('h',{suit:suit1}));
			target.draw(2);
			player.storage.sgyj_yashi=get.suit(result.links[0]);
			player.addTempSkill('sgyj_chuchu1');
        }       
        else event.finish();
    },
        ai:{
        result:{
            target:function (player,target){                
                return -target.countCards('h');
            },
        },
        order:8,
        threaten:0.5,
        },  
            },
		"sgyj_chuchu2":{                       
            trigger:{
                player:"phaseAfter",
            },
			forced:true,
			popup:false,
			content:function(){
				player.storage.sgyj_chuchu=[];
			},
		 },
		"sgyj_chuchu1":{},
		"sgyj_chuchu":{                       
          trigger:{
                player:"useCardToPlayered",
            },
			group:"sgyj_chuchu2",
            init:function (player){
                player.storage.sgyj_chuchu=[];
            }, 
			direct:true,
            filter:function (event,player){	            
                return event.card&&event.card.isCard;					 	
    },
            content:function(){ 
			    var suit=get.suit(trigger.cards[0]);
				player.storage.sgyj_chuchu.add(suit);
				if(player.storage.sgyj_chuchu.length==3){
					player.removeSkill('sgyj_chuchu1');					
				}				
			},
		},
		"sgyj_huashang":{		       
            enable:"phaseUse",
            usable:1,                                       
          filter:function (event,player){                                                                        
            return player.countCards('h',{type:'basic'});                
          },              
        content:function (){               
            'step 0'
			var num=player.countCards('h',{type:'basic'});
			player.discard(player.getCards('h',{type:'basic'}));
			if(num==1) event.goto(7);
			if(num==2) event.goto(1);
		    if(num==3) event.goto(3);
			if(num>=4) event.goto(5);			
			'step 1'
			player.chooseTarget(get.prompt2('sgyj_huashang'),1,function(card,player,target){
            return player!=target;                    
        },function(target){           
            return get.attitude(player,target)<=0;
        });        
        'step 2'
        if(result.bool){                                              
            result.targets[0].damage(); 
			event.finish();
        }
        else event.finish();
		'step 3'
		player.chooseTarget(get.prompt2('sgyj_huashang'),1,function(card,player,target){
            return true;                    
        },function(target){           
            return -get.attitude(player,target);
        });        
        'step 4'
        if(result.bool){                                              
            result.targets[0].turnOver(); 
			event.finish();
        }
        else event.finish();		
		'step 5'
		player.draw(2);
		player.chooseTarget(get.prompt2('sgyj_huashang'),1,function(card,player,target){
            return player!=target;                    
        },function(target){           
            return get.attitude(player,target)>0;
        });        
        'step 6'
        if(result.bool){                                              
            result.targets[0].recover(); 
			event.finish();
        }
        else event.finish();
		'step 7'
		player.discard('h',Math.min(2,player.countCards('h')));
		player.draw(2);		
    },
       ai:{
         result:{
            player:function (player){
              if(player.countCards('h')<2) return 1;   
                  return 2;
              },
            },
            order:8,
            threaten:0.5,
        },  
            },
		"sgyj_shenxian":{     
     trigger:{
         global:"loseAfter",
     },	 
	 usable:1,	 	
    filter:function (event,player){
        if(event.type!='discard'||event.player==player) return false;        
        for(var i=0;i<event.cards2.length;i++){
            if(get.type(event.cards2[i],null,event.hs.contains(event.cards2[i])?event.player:false)=='basic'){
                return true;
            }
        }
        return false;
    },
	frequent:true,
     content:function (){
         'step 0'
        player.chooseControl().set('choiceList',['摸一张牌','获得其中的基本牌']).set('ai',function(){
        if(player.hp>2) return 1;          
            return 0;
        });
        'step 1'
        if(result.index==0){            
            player.draw();
			event.finish();
        }
        else{
            for(var i=0;i<trigger.cards2.length;i++){
                if(get.type(trigger.cards2[i])=='basic'){
                    player.gain(trigger.cards2[i],'gain2');	
                }
            }					
		}		
     },
     },
		"sgyj_ezhan2":{     
     trigger:{
         player:"phaseDiscardBegin",
     },	 
	 forced:true,
     popup:false,	 
	 filter:function (event,player){	                        							
        return player.getStat().damage>0;			 	
    },     
     content:function (){
         player.recover();
     },
     },
		"sgyj_ezhan1":{     
     trigger:{
         source:"damageBegin",
     },	 
	 forced:true,
	 popup:false,
     usable:1,	 
	 filter:function (event,player){	                        							
        return event.num>0;			 	
    },     
     content:function (){
         trigger.num+=player.getDamagedHp();
     },
     },
		"sgyj_ezhan":{     
     trigger:{
         player:"changeHp",
     },
	 group:['sgyj_ezhan1','sgyj_ezhan2'],
	 forced:true,	 
	 filter:function (event,player){	                        							
        return player.isPhaseUsing();			 	
    },     
     content:function (){
         player.getStat().card.sha--;
     },
     },
		"sgyj_sidou2":{     
     trigger:{
       player:"phaseZhunbeiBegin",
     },
	 forced:true,	 
	 filter:function (event,player){	                        							
        return player.storage.sgyj_sidou>0;			 	
    },     
     content:function (){
         player.loseHp(player.storage.sgyj_sidou);
		 player.storage.sgyj_sidou=0;
		 player.unmarkSkill('sgyj_sidou');
     },
     },
        "sgyj_sidou":{     
     trigger:{
       player:"damageBegin",
     },
	 forced:true,
	 marktext:'血',
		//mark:true,
		intro:{
            name:"死斗",
            content:"你拥有#个死斗标记",
        },
     init:function (player){
         player.storage.sgyj_sidou=0;
     }, 
	 group:'sgyj_sidou2',
	 filter:function (event,player){	                        							
        return _status.currentPhase!=player;			 	
    },     
     content:function (){
         trigger.cancel();
		 player.storage.sgyj_sidou+=trigger.num;
		 player.markSkill('sgyj_sidou');
     },
     },
		 "sgyj_congmin2":{                       
            trigger:{
                player:"phaseAfter",
            },
			forced:true,
			popup:false,
			content:function(){
				player.storage.sgyj_congmin=[];
			},
		 },
		 "sgyj_congmin":{                       
          trigger:{
                player:"useCardToPlayered",
            },
			group:"sgyj_congmin2",
            init:function (player){
                player.storage.sgyj_congmin=[];
            }, 
			direct:true,
            filter:function (event,player){	            
                return event.card&&event.card.isCard;					 	
    },
            content:function(){        
        "step 0"																								
		 player.storage.sgyj_congmin.add(trigger.card);       
        "step 1"
        if(player.storage.sgyj_congmin.length==2){
			 var list=[];
			 var cards=player.getCards('he');
	    for(var i=0;i<cards.length;i++){
             if(player.storage.sgyj_congmin[0].number+player.storage.sgyj_congmin[1].number<=13&&player.storage.sgyj_congmin[0].number+player.storage.sgyj_congmin[1].number==cards[i].number) list.push('相加');
             if(Math.abs(player.storage.sgyj_congmin[0].number-player.storage.sgyj_congmin[1].number)==cards[i].number||Math.abs(player.storage.sgyj_congmin[1].number-player.storage.sgyj_congmin[0].number)==cards[i].number) list.push('相减');
             if((player.storage.sgyj_congmin[0].number*player.storage.sgyj_congmin[1].number)<=13&&(player.storage.sgyj_congmin[0].number*player.storage.sgyj_congmin[1].number)==cards[i].number) list.push('相乘');
             if((player.storage.sgyj_congmin[0].number%player.storage.sgyj_congmin[1].number==0&&player.storage.sgyj_congmin[0].number/player.storage.sgyj_congmin[1].number==cards[i].number)||(player.storage.sgyj_congmin[1].number%player.storage.sgyj_congmin[0].number==0&&player.storage.sgyj_congmin[1].number/player.storage.sgyj_congmin[0].number==cards[i].number)) list.push('除以');
			 if(list.length<=0) event.finish();
        }
		player.chooseControl(list,function(){                                       
            return Math.floor(Math.random()*list.length);
        }).set('prompt','选择四则运算中合理的一项');                                          
		}
		else event.finish();
		"step 2"
		/*event.control=result.control;
		switch(result.control){
			case '相加':event.goto(3);break;
			case '相减':event.goto(3);break;
			case '相乘':event.goto(3);break;
			case '除以':event.goto(3);break;			
		}
		"step 3"*/
		player.chooseCard('弃置合理的一张牌','he',true,function(card){
			if(result.control=='相加') return (player.storage.sgyj_congmin[0].number+player.storage.sgyj_congmin[1].number==card.number);
			if(result.control=='相减') return (Math.abs(player.storage.sgyj_congmin[0].number-player.storage.sgyj_congmin[1].number)==card.number||Math.abs(player.storage.sgyj_congmin[1].number-player.storage.sgyj_congmin[0].number)==card.number);
			if(result.control=='相乘') return (player.storage.sgyj_congmin[0].number*player.storage.sgyj_congmin[1].number==card.number);
			if(result.control=='除以') return ((player.storage.sgyj_congmin[0].number/player.storage.sgyj_congmin[1].number==card.number)||(player.storage.sgyj_congmin[1].number/player.storage.sgyj_congmin[0].number==card.number));             
            }).ai=function(card){			   
               return 10-get.value(card);
            }; 
		"step 3"
		if(result.bool){            		   
           player.discard(result.cards);          	     
           game.log(player,'弃置了一张',result.cards);  		   		  
		}
		"step 4"
		//第一种方法：
		var list=[];
		for(var i=0;i<lib.inpile.length;i++){
			if(get.type(lib.inpile[i])=='trick') list.push(['锦囊','',lib.inpile[i]]);
		}
		player.chooseButton(ui.create.dialog('请您选择一张你要视为使用的锦囊牌',[list,'vcard'],true),function(button){                 
            return Math.random();                       
        });
		"step 5"
		if(result.bool){           			
			player.chooseUseTarget({name:result.links[0][2]},true);
        } 
       /* var list=[];
        for(var i=0;i<lib.inpile.length;i++){
            var name=lib.inpile[i];
            var type=get.type(name);
            if(type=='trick'){
                if(lib.filter.cardEnabled({name:name},player)){
                    list.push([get.translation(type),'',name]);
                }
            }
        }         
        var dialog=ui.create.dialog('聪敏',[list,'vcard']);
        var taoyuan=0,nanman=0;
        var players=game.filterPlayer();
        for(var i=0;i<players.length;i++){
            var eff1=get.effect(players[i],{name:'taoyuan'},player,player);
            var eff2=get.effect(players[i],{name:'nanman'},player,player);
            if(eff1>0){
                taoyuan++;
            }
            else if(eff1<0){
                taoyuan--;
            }
            if(eff2>0){
                nanman++;
            }
            else if(eff2<0){
                nanman--;
            }
        }
        player.chooseButton(dialog).ai=function(button){
            var name=button.link[2];
            if(Math.max(taoyuan,nanman)>1){
                if(taoyuan>nanman) return name=='taoyuan'?1:0;
                return name=='nanman'?1:0;
            }
            if(player.countCards('h')<player.hp&&player.hp>=2){
                return name=='wuzhong'?1:0;
            }
            if(player.hp<player.maxHp&&player.hp<3){
                return name=='tao'?1:0;
            }
            return name=='zengbin'?1:0;
        }
        "step 5"
        if(result.bool){
            player.chooseUseTarget(true,result.links[0][2]);
        }  */  		
    },             
        },
		"sgyj_fengyin":{     
     trigger:{
        target:"useCardToTargeted",
     },
	 frequent:true, 
	 filter:function (event,player){	                        							
        return event.player.sex=='male';			 	
    },       
     content:function (){
         if(player.countCards('h')<player.maxHp){
			 player.draw(player.maxHp-player.countCards('h'));
		 }
		 if(player.hp<player.countCards('h')){
			player.recover(player.countCards('h')-player.hp); 
		 }
     },
     }, 
		 "sgyj_qexi2":{     
     trigger:{
       source:"damageBegin",
     },
	 filter:function (event,player){	                        							
        return event.card&&event.card.name=='sha';			 	
    },     
     content:function (){
         trigger.cancel();
		 trigger.player.$give(trigger.player.getCards('h'),player);
		 player.gain(trigger.player.getCards('h'),trigger.player);
     },
     },
		"sgyj_qexi":{     
     trigger:{
       player:"useCardToPlayer",
     },
	 filter:function (event,player){	                        							
        return event.card&&event.card.name=='sha';			 	
    },     
     content:function (){
         trigger.target.draw(2);
		 player.addTempSkill('sgyj_qexi2',{player:'shaAfter'});
     },
     },
        "sgyj_chiyuan3":{
     forced:true,
     trigger:{
       player:"phaseUseEnd",
     },
     popup:false,     
     content:function (){
         player.storage.sgyj_chiyuan1=[];
         player.storage.sgyj_chiyuan2=[];
     },
     },
           "sgyj_chiyuan2":{ 
           mod:{                
                attackFrom:function (from,to,distance){ 
                     return distance-1; 
                },
           },            
          trigger:{
                player:"useCard",
            }, 
            popup:false,
            init:function (player){
                player.storage.sgyj_chiyuan2=[];
            },                                                   
            filter:function (event,player){	            
            	if(event.card.name!='sha'&&event.card.name!='guohe') return false;						
        return game.hasPlayer(function(current){
				return player.storage.sgyj_chiyuan2.contains(current);
			});					 	
    },
            content:function(){        
        "step 0"																								
		player.chooseTarget(get.prompt2('sgyj_chiyuan'),1,function(card,player,target){
            return player!=target&&player.storage.sgyj_chiyuan2.contains(target);                    
        },function(target){           
            return -get.attitude(player,target);
        });        
        "step 1"
        if(result.bool){                                              
            trigger.targets.addArray(result.targets);                                                              
        }
        else event.finish();
    },             
        },
        "sgyj_chiyuan1":{ 
        init:function (player){
             player.storage.sgyj_chiyuan1=[];
        },
        },
      "sgyj_chiyuan":{                                             
            trigger:{
                global:"phaseUseBegin",
            },   
            check:function (event,player){                                 
                if(event.player.countCards('h')>4) return get.attitude(event.player,player)>0;
                return -get.attitude(event.player,player);
        },                                       
            filter:function (event,player){								
        return event.player.countCards('he');
    },
            content:function(){        
        'step 0'
        player.discardPlayerCard(trigger.player,'he',true);
        trigger.player.addTempSkill('sgyj_chiyuan1');
        trigger.player.addTempSkill('sgyj_chiyuan3');
        var targets=game.filterPlayer(function(current){
             return get.distance(trigger.player,current,'attack')<=1;
        }); 
        for(var i=0;i<targets.length;i++){
           trigger.player.storage.sgyj_chiyuan1.add(targets[i]);
        }
        'step 1'
        trigger.player.addTempSkill('sgyj_chiyuan2');
        game.delay();
        var targets=game.filterPlayer(function(current){
             return get.distance(trigger.player,current,'attack')<=1;
        }); 
        for(var i=0;i<targets.length;i++){
           trigger.player.storage.sgyj_chiyuan2.add(targets[i]);           
        }
        trigger.player.storage.sgyj_chiyuan2.remove(trigger.player.storage.sgyj_chiyuan1);
    }, 
    },                 
     sgyj_fuyin:{},
     sgyj_qiyuan:{
				audio:'guanxing',				
				trigger:{
				global:['gameStart','washCard'],
				player:['damage','dying'],
				source:'damage',
				},
				frequent:true,
				filter:function(event,player,name){
					if(name=='phaseJieshuBegin'){
						return player.hasSkill('sgyj_qiyuan_on');
					}
					return true;
				},
				content:function(){
					'step 0'
					if(get.is.altered('sgyj_qiyuan')){
						event.num=game.countPlayer()<4?3:5;
					}
					else{
						event.num=Math.min(5,game.countPlayer());
					}
					event.cards=get.cards(event.num);
					event.chosen=[];
					event.num1=0;
					event.num2=0;
					event.bottom=-1;
					var types=[];
					var suits=[];
						for(var i=0;i<event.cards.length;i++){
							suits.add(get.suit(event.cards[i]));
							types.add(get.type(event.cards[i]));
						}
						if(suits.length==4||types.length==3){						    
						    player.showCards(event.cards);
						    player.popup('sgyj_fuyin');
							player.gain(event.cards,'gain2');
							event.finish();
						}					
					'step 1'
					var js=player.getCards('j');
					var pos;
					var choice=-1;
					var getval=function(card,pos){
						if(js[pos]){
							return (get.judge(js[pos]))(card);
						}
						else if(event.triggername=='phaseJieshuBegin'&&get.attitude(player,player.getNext())<=0){
							return 11.5-get.value(card,player);
						}
						else{
							return get.value(card,player);
						}
					};
					event.discard=false;
					var minval=6;
					for(pos=0;pos<event.cards.length;pos++){
						var max=getval(event.cards[pos],pos);
						for(var j=pos+1;j<event.cards.length;j++){
							var current=getval(event.cards[j],pos);
							if(current>max){
								choice=j;
								max=current;
							}
						}
						if(event.bottom<0){
							if(!js[pos]){
								if(max<minval){
									event.bottom=pos;
								}
							}
							else if(max<0){
								event.bottom=pos;
							}
						}
						if(event.bottom>=0&&event.bottom<=pos){
							choice=pos;
							event.discard=true;break;
						}
						if(choice!=-1){
							break;
						}
					}
					player.chooseCardButton('观星：选择要移动的牌',event.cards).set('filterButton',function(button){
						return !_status.event.chosen.contains(button.link);
					}).set('chosen',event.chosen).set('ai',function(button){
						return button.link==_status.event.choice?1:0;
					}).set('choice',event.cards[choice]);
					event.pos=pos;
					'step 2'
					if(result.bool){
						var card=result.links[0];
						var index=event.cards.indexOf(card);
						event.card=card;
						event.chosen.push(card);
						event.cards.remove(event.card);
						var controlai=event.pos||0;
						if(event.discard){
							controlai=event.cards.length+1;
						}
						var buttons=event.cards.slice(0);
						player.chooseControl(function(){
							return _status.event.controlai;
						}).set('controlai',controlai).set('sortcard',buttons).set('tosort',card);
					}
					else{
						event.goto(4);
					}
					'step 3'
					if(typeof result.index=='number'){
						if(result.index>event.cards.length){
							ui.cardPile.appendChild(event.card);
							event.num2++;
						}
						else{
							event.cards.splice(result.index,0,event.card);
						}
						event.num--;
						if(event.num>0){
							event.goto(1);
						}
					}
					'step 4'
					while(event.cards.length){
						ui.cardPile.insertBefore(event.cards.pop(),ui.cardPile.firstChild);
						event.num1++;
					}
					var js=player.getCards('j');
					if(js.length==1){
						if((get.judge(js[0]))(ui.cardPile.firstChild)<0){
							player.addTempSkill('guanxing_fail');
						}
					}
					player.popup(get.cnNumber(event.num1)+'上'+get.cnNumber(event.num2)+'下');
					game.log(player,'将','#y'+get.cnNumber(event.num1)+'张牌','置于牌堆顶，','#y'+get.cnNumber(event.num2)+'张牌','置于牌堆底');
					if(event.triggername=='phaseZhunbeiBegin'&&get.is.altered('sgyj_qiyuan')&&event.num1==0){
						player.addTempSkill('sgyj_qiyuan_on');
					}
				},
				subSkill:{
					on:{}
				}
			},
     "sgyj_yinhuo":{                                             
            trigger:{
                //global:"useCardToPlayer",
                global:"useCard",
            },                                                    
            filter:function (event,player){								
        return !event.targets.contains(player)&&player!=event.player&&event.card&&event.card.name=='sha'&&get.color(event.card)=='black';
    },
            content:function(){        
        trigger.player.line(player,'green');
        trigger.customArgs.default.customSource=player;
        trigger.player=player;
    }, 
    },            
     "sgyj_guiye":{                                             
            trigger:{
                player:"phaseEnd",
            },                                                    
            filter:function (event,player){								
        return player.isDamaged();
    },
            content:function(){        
        var num=player.getDamagedHp();
        player.recover(num);
        player.draw(2*num);
        player.turnOver();
    }, 
    },              
      sgyj_yide:{					
			trigger:{player:'phaseUseBegin'},
			filter:function (event,player){
				  return game.hasPlayer(function(current){
				return player!=current&&current.countCards('he');
			});					 	
			},						
			content:function(){
				"step 0"																								
				player.chooseTarget(get.prompt2('sgyj_yide'),1,function(card,player,target){
            return player!=target&&target.countCards('he');                    
        },function(target){           
            return -get.attitude(player,target);
        });        
           "step 1"
        if(result.bool){                 
             player.gainPlayerCard(result.targets[0],'he',true);  
             player.addTempSkill('sgyj_duju2',{player:'phaseBegin'});                             
        }
        else event.finish();
			},
		},	
     "sgyj_duju2":{
            mod:{
                globalTo:function (from,to,distance){
                    return distance-4;
                },
                globalFrom:function (from,to,distance){
					return distance-4;
				},
            },
     },         
     "sgyj_duju":{
            mod:{
                globalTo:function (from,to,distance){
                    return distance+2;
                },
                globalFrom:function (from,to,distance){
					return distance+2;
				},
            },
     },         
     "sgyj_dizhong1":{
     forced:true,
     trigger:{
       global:"washCard",
     },
     popup:false,     
     content:function (){
         player.storage.sgyj_dizhong=[];
     },
     },
      /*sgyj_dizhong2:{					
			trigger:{player:'loseAfter'},								
			filter:function(event,player){
			    if(!player.isPhaseUsing()) return false;							
				return (event.es&&event.es.length>0)||(event.hs&&event.hs.length>0);
			},
			content:function(){
				var cards1=[];
				for(var i=0;i<trigger.cards.length;i++){
				    if(!player.storage.sgyj_dizhong.contains(trigger.cards[i])){
				    cards1.push(trigger.cards[i]);
				    player.storage.sgyj_dizhong.add(trigger.cards[i]);				    
				    }
				}
				player.gain(cards1,'gain2');				
			},
	 },	*/
     sgyj_dizhong:{					
			trigger:{player:'loseAfter'},
			group:["sgyj_dizhong1"],	
			init:function (player){
				if(!player.storage.sgyj_dizhong) player.storage.sgyj_dizhong=[];
			},		
			filter:function(event,player){	
			    if(player==_status.currentPhase) return false;						
				return (event.es&&event.es.length>0)||(event.hs&&event.hs.length>0);
			},
			content:function(){
			    var cards1=[];
				for(var i=0;i<trigger.cards.length;i++){
				    if(!player.storage.sgyj_dizhong.contains(trigger.cards[i])){
				    cards1.push(trigger.cards[i]);
				    player.storage.sgyj_dizhong.add(trigger.cards[i]);				    
				    }
				}
				player.gain(cards1,'gain2');				
			},
	 },	
     sgyj_wuguan2:{					
			trigger:{
			    player:['phaseBegin','phaseEnd'],			    
			},
			forced:true,
			popup:'sgyj_wuguan',						
			content:function(){
				player.discard(player.getCards('h'));
				player.draw(4);	
			},
		},	
     sgyj_wuguan:{					
			trigger:{
			    player:['phaseDrawBegin','phaseDiscardBegin'],			    
			},
			forced:true,
			group:'sgyj_wuguan2',			
			content:function(){
				trigger.cancel();	
			},
		},	
     zzb_wushen2:{					
			trigger:{player:'useCardToPlayer'},
				forced:true,
				filter:function (event,player){					
					return event.card&&event.card.name=='sha'&&get.suit(event.card)=='heart';
				},
				content:function(){
					player.addTempSkill('unequip',{player:'shaAfter'});
				},
		},	
       sgyj_ziru:{					
			trigger:{
			    player:['damageBegin','recoverBegin'],
			    source:'damageBegin',
			},
			forced:true,			
			content:function(){
				trigger.num++;	
			},
		},	
     sgyj_yanmu:{					
		trigger:{global:'recoverEnd'},
		filter:function (event,player){                                                                        
            return _status.currentPhase!=event.player;                
        },  
        check:function (event,player){                                 
            return get.attitude(_status.currentPhase,player)>0;
        },        				
			content:function(){			    
				_status.currentPhase.draw();
			},
		},	
      sgyj_fenshu2:{					
			trigger:{player:'loseAfter'},
				forced:true,
				filter:function(event,player){
					if(player.countCards('h')) return false;
					return event.hs&&event.hs.length>0;
				},
				content:function(){
					player.removeSkill('sgyj_fenshu1'); 
                    player.removeSkill('sgyj_fenshu2'); 
				},
		},	
		sgyj_fenshu1:{					
			trigger:{player:'recoverBegin'},
			popup:'sgyj_fenshu',	
			forced:true,	
			content:function(){			    
				trigger.cancel();
			},
		},	
        "sgyj_fenshu":{		       
                enable:"phaseUse",
                usable:1,                       
                filterTarget:function (card,player,target){
        return player!=target&&target.countCards('h')&&target.isDamaged();
    },
          filter:function (event,player){                                                                        
            return true;                
          },              
        content:function (){               
            player.discardPlayerCard(target,'h',true);   
            target.recover();
            target.addSkill('sgyj_fenshu1'); 
            target.addSkill('sgyj_fenshu2');                                                                   
    },
       ai:{
         result:{
            target:function (player,target){
              if(target.countCards('h')<2) return 0;   
                  return -target.countCards('h');
              },
            },
            order:8,
            threaten:0.5,
        },  
            },
       sgyj_juzu2:{					
			trigger:{player:'shaMiss'},
			popup:'sgyj_juzu',		
			content:function(){			    
				player.draw();
			},
		},	
		 "sgyj_juzu1":{                
           trigger:{
               player:["phaseEnd"],
           },  
           forced:true,
           popup:false,
           content:function (){  
               for(var i=0;i<game.players.length;i++){
                  if(game.players[i].hasSkill('sgyj_juzu2')){
                    game.players[i].removeSkill('sgyj_juzu2');
                  }
               }
           },
           },
       "sgyj_juzu":{                
           trigger:{
               player:["useCardToPlayered"],
           },  
           group:"sgyj_juzu1",         					                           
           filter:function (event,player,name){   		        
                return event.card.name=='sha'&&game.hasPlayer(function(current){
                   return get.distance(current,event.target,'attack')<=1;
                });
           },
                content:function (){  
		'step 0'			           	
            event.num=0;            
            event.targets=game.filterPlayer(function(current){
                return get.distance(current,trigger.target,'attack')<=1;
            }); 
            event.targets.remove(player);
            event.targets.sort(lib.sort.seat);        
        'step 1' 
        if(event.num<event.targets.length){                            
            player.line(event.targets[event.num],'green');   
            event.targets[event.num].addTempSkill('sgyj_juzu2',{player:'shaAfter'});	         
            event.targets[event.num].chooseToUse({name:'sha'},trigger.target,'是否使用一张【杀】？');           
            event.num++;
            event.redo();                    
         }
         else{             
			 event.finish();
		 }	
		 
    },
                ai:{
                    order:9,
                    noh:true,
                    effect:{
		               player:function(card,player,target){							
		              	 if(!player.hasFriend()) return;								
					   },
			        },
                },
            },
       "sgyj_juyi2":{ 
           mod:{                
                attackFrom:function (from,to,distance){ 
                     return distance-1; 
                },
           },            
        },
        "sgyj_juyi":{                
           trigger:{
               player:["phaseUseBegin"],
           },
           limited:true,	
		   init:function (player){
			    player.storage.sgyj_juyi=false;
			},								                           
           filter:function (event,player,name){   
		        if(!player.countCards('h')) return false;
                return game.hasPlayer(function(current){
                   return current!=player&&current.countCards('h')>0;
                });
           },
                content:function (){  
		'step 0'	
		player.chooseCard('h','请展示一张手牌',true).ai=function(card){           
             return 10-get.value(card);                                      
       };  
        'step 1' 
        if(result.bool){                   	
            event.num=0;
            player.storage.sgyj_juyi=true;
            player.awakenSkill('sgyj_juyi');
            event.card=result.cards[0];
            player.showCards(event.card);
            event.targets=game.filterPlayer(function(current){
                return current.countCards('h');
            }); 
            event.targets.remove(player);
            event.targets.sort(lib.sort.seat);
        }
        'step 2' 
        if(event.num<event.targets.length){               
             event.targets[event.num].chooseCard('h','展示一张手牌',true).ai=function(card){          
                   return 7-get.value(card); 
             };                     
         }
         else{
             player.addSkill('sgyj_juyi2');
			 event.finish();
		 }
		 'step 3'      
		if(result.bool){           
           //event.targets[event.num].line(player,'green'); 
           event.targets[event.num].showCards(result.cards);		            
           if(get.color(event.card)==get.color(result.cards[0])){
               player.gainMaxHp(true);
               player.recover();
               player.draw();
           }
           event.num++;
           event.goto(2);
		}
		else{
		   event.num++;
           event.goto(2);
		}					
			
    },
                ai:{
                    order:9,
                    noh:true,
                    effect:{
		               player:function(card,player,target){							
		              	 if(!player.hasFriend()) return;								
					   },
			        },
                },
            },
        sgyj_xinyan:{
			mod:{
				cardname:function (card,player,name){
					if(_status.currentPhase==player&&card.name!='tao'&&get.type2(card.name)=='basic') return 'sha';
					if(_status.currentPhase!=player&&card.name!='tao'&&get.type2(card.name)=='basic') return 'shan';
				},					
			},
		},
		sgyj_hunchan4:{					
			trigger:{player:'phaseBefore'},
			filter:function (event,player){
				 return player.storage.sgyj_hunchan2>0;
			},	
			popup:false,
			forced:true,				
			content:function(){			    
				player.storage.sgyj_hunchan2=0;				
			},
		},	
		sgyj_hunchan3:{					
			trigger:{source:'damageBegin'},
			filter:function (event,player){
				 return player.storage.sgyj_hunchan2>0;
			},	
			popup:false,
			forced:true,				
			content:function(){			    
				trigger.num++;
			},
		},	
       sgyj_hunchan2:{					
			trigger:{player:'phaseEnd'},
			filter:function (event,player){
				 return player.storage.sgyj_hunchan>0;
			},	
			popup:false,
			init:function (player){
			    player.storage.sgyj_hunchan2=0;
			},
			content:function(){
				player.storage.sgyj_hunchan=0;
				player.storage.sgyj_hunchan2++;
				if(player.storage.sgyj_hunchan2>=2){
					player.turnOver();
				}
				player.unmarkSkill('sgyj_hunchan');
				game.delay();
				player.insertPhase();
			},
		},	
		sgyj_hunchan:{					
			trigger:{source:'damageEnd'},
			filter:function (event,player){
				 return _status.currentPhase==player&&event.player.sex=='male';
			},	
			direct:true,
			group:['sgyj_hunchan2','sgyj_hunchan3','sgyj_hunchan4'],
			marktext:'魂',
			mark:true,
			intro:{
                name:"魂蝉",
                content:"",
            },
			init:function (player){
			    player.storage.sgyj_hunchan=0;
			},				
			content:function(){
				player.storage.sgyj_hunchan++;
				player.markSkill('sgyj_hunchan');
			},
		},
     /*sgyj_hunchan3:{					
			trigger:{player:'phaseAfter'},
			filter:function (event,player){
				 return player.storage.sgyj_hunchan>0;
			},	
			popup:false,
			forced:true,				
			content:function(){			    
				player.storage.sgyj_hunchan=0;
				player.unmarkSkill('sgyj_hunchan');
			},
		},	
       sgyj_hunchan2:{					
			trigger:{player:'phaseEnd'},
			filter:function (event,player){
				 return player.storage.sgyj_hunchan==0;
			},	
			popup:false,				
			content:function(){
			    player.phaseUse();
				player.storage.sgyj_hunchan=0;
				player.unmarkSkill('sgyj_hunchan');
			},
		},	
      sgyj_hunchan:{					
			trigger:{source:'damageEnd'},
			filter:function (event,player){
				 return _status.currentPhase==player&&event.player.sex=='male';
			},	
			direct:true,
			group:['sgyj_hunchan2','sgyj_hunchan3'],
			marktext:'魂',
			mark:true,
			intro:{
                name:"魂蝉",
                content:"你失去了进行一个额外回合的机会",
            },
			init:function (player){
			    player.storage.sgyj_hunchan=0;
			},				
			content:function(){
				player.storage.sgyj_hunchan++;
				player.markSkill('sgyj_hunchan');
			},
		},*/	
      sgyj_baiyue:{					
			trigger:{player:'phaseEnd'},
			filter:function (event,player){
				 return player.countCards('h');
			},								
			content:function(){
				var num=player.countCards('h');
				player.discard(player.getCards('h'));
				player.draw(2*num);
			},
		},	
      sgyj_xueyou:{					
			trigger:{player:'phaseEnd'},
			filter:function (event,player){				 			 
				 return player.isMinHp();				 
			},			
			content:function(){
				 'step 0'
        player.chooseControl().set('choiceList',['回复复1点体力','增加一点体力上限']).set('ai',function(){
        if(player.hp>2) return 1;          
            return 0;
        });
        'step 1'
        if(result.index==0){            
            player.recover();
        }
        else{
            player.gainMaxHp(true);			
		}
			},
		},	
        "sgyj_guxia":{					
			trigger:{player:'phaseBegin'},
			filter:function (event,player){
				 return player.isMinHp();
			},	
			forced:true,
			juexingji:true,
			init:function (player){
			    player.storage.sgyj_guxia=false;
			},
			derivation:["sgyj_xueyou"], 		
			content:function(){
				"step 0"
				player.storage.sgyj_guxia=true;
				player.gainMaxHp(true);
				"step 1"																							
				player.addSkill("sgyj_xueyou");
				player.awakenSkill("sgyj_guxia");
			},
		},	
       "sgyj_bihuo":{					
			trigger:{player:'damageBegin'},
			filter:function (event,player){
				 return event.num>1;
			},
			forced:true,	
			init:function (player){
                player.storage.sgyj_bihuo=0;
            },   
			intro:{
          		content:function (storage){
         			return '你已发动【避祸】'+storage+'次';
          	 	},
            },          		
			content:function(){
				"step 0"
				player.loseMaxHp();
				player.storage.sgyj_bihuo++;
                player.markSkill("sgyj_bihuo");
                player.update();
				"step 1"																							
				player.draw(player.storage.sgyj_bihuo);
			},
		},	
       sgyj_siluan2:{
				mark:'character',
				onremove:true,
				intro:{
					content:'使用牌没距离与次数限制'
				},		  
				mod:{
					targetInRange:function (card,player,target){
						if(target==player.storage.sgyj_siluan2){
							return true;
						}
					},
					cardUsable:function (card,player,num){ 
            if(typeof num=='number'&&player.storage.sgyj_siluan2&&player.storage.sgyj_siluan2.isAlive()) return num+100; 
        },
                    playerEnabled:function (card,player,target){
                    if(player.storage.sgyj_siluan2.isAlive()&&player.storage.sgyj_siluan2&&target!=player.storage.sgyj_siluan2){
                        var num=player.getCardUsable(card)-100;
                        if(num<=0) return false;
                    }
                },
				},
			},        
         sgyj_siluan:{					
			trigger:{global:'phaseBegin'},
			filter:function (event,player){
				 return event.player.countCards('he')&&event.player.sex=="male";
			},			
			content:function(){
				"step 0"
				player.gainPlayerCard(trigger.player,"he");	
				"step 1"																							
				trigger.player.storage.sgyj_siluan2=player; 				
				trigger.player.addTempSkill('sgyj_siluan2');
			},
		},	
        sgyj_tonghuan2:{					
			trigger:{player:'damageEnd'},
			filter:function (event,player){
				  return game.hasPlayer(function(current){
				return player!=current&&player.hp==current.hp;
			});					 	
			},						
			content:function(){
				"step 0"
				player.draw();	
				"step 1"																					
				player.chooseTarget(get.prompt2('sgyj_tonghuan'),1,function(card,player,target){
            return player!=target&&player.hp==target.hp;                    
        },function(target){           
            return get.attitude(player,target)>0;
        });        
           "step 2"
        if(result.bool){                 
             result.targets[0].recover();                                   
        }
        else event.finish();
			},
		},	
        sgyj_tonghuan:{					
			trigger:{player:'recoverEnd'},
			filter:function (event,player){
				  return player.countCards('he')&&game.hasPlayer(function(current){
				return player!=current&&player.hp==current.hp;
			});					 	
			},
			direct:true,
			group:"sgyj_tonghuan2",
			content:function(){
				"step 0"
				player.chooseToDiscard("he",true);	
				"step 1"																					
				player.chooseTarget(get.prompt2('sgyj_tonghuan'),1,function(card,player,target){
            return player!=target&&player.hp==target.hp;                    
        },function(target){           
            return -get.attitude(player,target);
        });        
           "step 2"
        if(result.bool){                 
             result.targets[0].loseHp();                                   
        }
        else event.finish();
			},
		},	
        sgyj_buqu:{					
			trigger:{player:'dying'},
			filter:function (event,player){			 
				return player.hp<=0; 	
			},	
			forced:true,
			content:function(){															
			    player.loseMaxHp(true);			    
			    player.recover(1-player.hp);
			    player.draw(2);
			},			                      
		},	
        sgyj_zhanxing2:{					
			trigger:{source:'damageBegin'},
			filter:function (event,player){			 
				return event.card&&event.card.name=='sha'; 	
			},	
			forced:true,
			usable:1,
			popup:false,
			content:function(){															
			    trigger.num=trigger.player.hp;
			},			                      
		},	
        sgyj_zhanxing:{					
			trigger:{global:'gainEnd'},
			filter:function (event,player){
				if(!event.source) return false;
			    if(event.source&&player==event.player&&event.parent.parent.name!='phaseDraw'&&player!=event.source) return true;
			    if(event.source&&player!=event.player&&event.parent.parent.name!='phaseDraw'&&player==event.source) return true;
			    return false; 				  
			},
			content:function(){
				'step 0'
			    if(trigger.player.countCards('h','sha')){															
			       trigger.player.chooseToUse({name:'sha'},'是否使用一张【杀】？').logSkill='sgyj_zhanxing';
			       trigger.player.addTempSkill('sgyj_zhanxing2');
			    }
				'step 1'
				if(!result.bool){
					trigger.player.removeSkill('sgyj_zhanxing2');
				}
			},
		},	
         sgyj_zhaozhao:{					
			trigger:{player:['useCardEnd','respond']},
			filter:function (event,player){
				  return event.card&&get.type(event.card)=='basic'; 	
			},
			direct:true,
			content:function(){
					"step 0"										
				player.chooseTarget(get.prompt2('sgyj_zhaozhao'),1,function(card,player,target){
            return player!=target;  
            //return true;        
        },function(target){           
            return get.attitude(player,target)>0;
        });        
           "step 1"
        if(result.bool){                 
             result.targets[0].gain(trigger.cards,'gain2'); 
             result.targets[0].chooseToDiscard('he',true);                         
        }
        else event.finish();
			},
		},	
    sgyj_ranshang:{
				audio:2,
				trigger:{player:'damageBegin'},
				filter:function(event,player){
					return event.nature=='fire';
				},
				forced:true,
				check:function(){
					return false;
				},
				mod:{
					targetEnabled:function(card,player,target,now){					
						if(card.name=='nanman'||card.name=='wanjian') return false;						
					},
				},
				content:function(){
					trigger.cancel();
					player.addMark('sgyj_ranshang',trigger.num);
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
				group:'sgyj_ranshang2'
			},
			sgyj_ranshang2:{
				audio:2,
				trigger:{player:'phaseJieshuBegin'},
				forced:true,
				popup:false,
				filter:function(event,player){
					return player.countMark('sgyj_ranshang')>0;
				},
				content:function(){					
					player.loseMaxHp(player.countMark('sgyj_ranshang'));
					player.removeMark('sgyj_ranshang',player.countMark('sgyj_ranshang'));
				}
			},
         "sgyj_hundun":{               
                trigger:{player:['phaseBegin','phaseEnd']},
				
				frequent:true,
			
				content:function(){
			 'step 0'
			
            var controls=['male','female'];                     
            var str='请选择要改变的性别';            
            player.chooseControl(controls,ui.create.dialog(str,'hidden')).ai=function(){
                return Math.floor(Math.random()*controls.length);
           };                                        
              
           'step 1'
          if(result.control=='male'){                             
             player.sex='male';      
             game.log(player,'选择了男性');                   
          }
          else{
             player.sex='female';           
             game.log(player,'选择了女性');              
          }
        },
        },  
		
	"sgyj_longyang_delete":{
    forced:true,
    trigger:{
        player:"phaseEnd",
    },
    popup:false,     
    content:function (){
        if(player.hasSkill('sgyj_longyang2')){
		    player.removeSkill('sgyj_longyang2');
		}
		delete player.storage.sgyj_longyang;
		player.storage.sgyj_longyang=[];
    },
    },
  
   sgyj_longyanguse:{					
				trigger:{player:'useCardToPlayered'},
				forced:true,
				popup:false, 
				init:function (player){
				    player.storage.sgyj_longyang=[];
				},
				content:function(){
					if(player.storage.sgyj_longyang.contains(trigger.cards[0].name)){
						player.addTempSkill('sgyj_longyang2');
					}
					player.storage.sgyj_longyang.add(trigger.cards[0].name);
				},
			},	
    "sgyj_longyang2":{},
			"sgyj_longyang":{			
				enable:'phaseUse',
				filter:function (event,player){								
					return !player.hasSkill('sgyj_longyang2')&&player==_status.currentPhase&&event.type!='wuxie';
				},
				group:["sgyj_longyanguse","sgyj_longyang_delete"],
				init:function (player){
					if(!player.storage.sgyj_longyang) player.storage.sgyj_longyang=[];
				},
				chooseButton:{
					dialog:function (event,player){
					var list=[];
						for(var i=0;i<lib.inpile.length;i++){
							var name=lib.inpile[i];
							//if(player.storage.sgyj_longyang.contains(name)) continue;
							if(get.type(name)=='trick') list.push(['锦囊','',name]);							
						}
						//if(list.length==0){
							//return ui.create.dialog('龙阳已无可用牌');
						//}
						return ui.create.dialog('龙阳',[list,'vcard']);
					},
					filter:function (button,player){
						return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
					},
					check:function (button){
						var player=_status.event.player;
						var players=game.filterPlayer();
						if(player.countCards('h',button.link)) return 0;
						if(button.link[2]=='wuzhong'){
							if(player.countCards('h')<player.hp){
								return 3+Math.random();
							}
							return 0;
						}
						
						if(button.link[2]=='juedou'){
							return 2+Math.random();
						}
						if(button.link[2]=='guohe'){
							return 2+Math.random();
						}
						if(button.link[2]=='shunshou'){
							for(var i=0;i<players.length;i++){
								if(player.canUse('shunshou',players[i])&&get.attitude(player,players[i])<0){
									return 2+Math.random();
								}
							}
							return 0;
						}
						if(button.link[2]=='tiesuo'){
							return 1+Math.random();
						}
						
						if(button.link[2]=='nanman'||button.link[2]=='wanjian'||button.link[2]=='taoyuan'||button.link[2]=='wugu'){
							var eff=0;
							for(var i=0;i<players.length;i++){
								if(players[i]!=player){
									eff+=get.effect(players[i],{name:button.link[2]},player,player);
								}
							}
							if(eff>0){
								return 1+Math.random();
							}
							return 0;
						}
						return Math.random();

					},
					backup:function (links,player){
						return {
						  filterCard:function(card,player){
					if(ui.selected.cards.length){
						return card.number==ui.selected.cards[0].number;
					}
					var cards=player.getCards('h');
					for(var i=0;i<cards.length;i++){
						if(card!=cards[i]){
							if(card.number==cards[i].number) return true;
						}
					}
					return false;
				},
				          selectCard:2,
				          complexCard:true,
                          position:'h',
                          popname:true,
                  viewAsFilter:function (player){					  					
					return !player.hasSkill('sgyj_longyang2')&&player==_status.currentPhase&&player.countCards('h')>1
					  },   
							
							check:function (card){
								return 6-get.value(card);
							},			
					viewAs:{name:links[0][2]},
							onuse:function (result,player){		   			
								if(player.storage.sgyj_longyang.contains(result.card.name)){
									player.addTempSkill('sgyj_longyang2');
								}
								player.storage.sgyj_longyang.add(result.card.name);
							},
						}
					},
					prompt:function(links,player){
						return '将两张点数相同的手牌当作'+get.translation(links[0][2])+'使用';
					},
				},
				ai:{
					order:4,
					result:{
						player:function (player){
							var allshown=true,players=game.filterPlayer();
							for(var i=0;i<players.length;i++){
								if(players[i].ai.shown==0){
									allshown=false;
								}
								if(get.attitude(player,players[i])>0){
									return 1;
								}
							}
							if(allshown) return 1;
							return 0.8;
						}
					},
					threaten:1.9,
				},
            },
     /*  "sgyj_longyang_delete":{
     forced:true,
     trigger:{
     player:"phaseEnd",
     },
     popup:false,
     
     content:function (){
     player.storage.sgyj_longyang=[];
     },
     },
  
   sgyj_longyanguse:{					
				trigger:{player:'useCardToPlayered'},
				forced:true,
				popup:false, 
				init:function (player){
				    player.storage.sgyj_longyang=[];
				},
				content:function(){
					player.storage.sgyj_longyang.add(trigger.cards[0].name);
				},
			},	
     
			"sgyj_longyang":{			
				enable:'phaseUse',
				filter:function (event,player){				
					return  player==_status.currentPhase&&event.type!='wuxie';
				},
				group:["sgyj_longyanguse","sgyj_longyang_delete"],
				init:function (player){
					if(!player.storage.sgyj_longyang) player.storage.sgyj_longyang=[];
				},
				chooseButton:{
					dialog:function (event,player){
					var list=[];
						for(var i=0;i<lib.inpile.length;i++){
							var name=lib.inpile[i];
							if(player.storage.sgyj_longyang.contains(name)) continue;
							if(get.type(name)=='trick') list.push(['锦囊','',name]);
							
						}
						if(list.length==0){
							return ui.create.dialog('龙阳已无可用牌');
						}
						return ui.create.dialog('龙阳',[list,'vcard']);
					},
					filter:function (button,player){
						return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
					},
					check:function (button){
						var player=_status.event.player;
						var players=game.filterPlayer();
						if(player.countCards('h',button.link)) return 0;
						if(button.link[2]=='wuzhong'){
							if(player.countCards('h')<player.hp){
								return 3+Math.random();
							}
							return 0;
						}
						
						if(button.link[2]=='juedou'){
							return 2+Math.random();
						}
						if(button.link[2]=='guohe'){
							return 2+Math.random();
						}
						if(button.link[2]=='shunshou'){
							for(var i=0;i<players.length;i++){
								if(player.canUse('shunshou',players[i])&&get.attitude(player,players[i])<0){
									return 2+Math.random();
								}
							}
							return 0;
						}
						if(button.link[2]=='tiesuo'){
							return 1+Math.random();
						}
						
						if(button.link[2]=='nanman'||button.link[2]=='wanjian'||button.link[2]=='taoyuan'||button.link[2]=='wugu'){
							var eff=0;
							for(var i=0;i<players.length;i++){
								if(players[i]!=player){
									eff+=get.effect(players[i],{name:button.link[2]},player,player);
								}
							}
							if(eff>0){
								return 1+Math.random();
							}
							return 0;
						}
						return Math.random();

					},
					backup:function (links,player){
						return {
						  filterCard:function(card,player){
					if(ui.selected.cards.length){
						return card.number==ui.selected.cards[0].number;
					}
					var cards=player.getCards('h');
					for(var i=0;i<cards.length;i++){
						if(card!=cards[i]){
							if(card.number==cards[i].number) return true;
						}
					}
					return false;
				},
				          selectCard:2,
				          complexCard:true,
                          position:'h',
                          popname:true,
                  viewAsFilter:function (player){return player.countCards('h')>1},   
							
							check:function (card){
								return 6-get.value(card);
							},			
					viewAs:{name:links[0][2]},
							onuse:function (result,player){
		   			
								player.storage.sgyj_longyang.add(result.card.name);
							},
						}
					},
					prompt:function(links,player){
						return '将两张点数相同的手牌当作'+get.translation(links[0][2])+'使用';
					},
				},
				ai:{
					order:4,
					result:{
						player:function (player){
							var allshown=true,players=game.filterPlayer();
							for(var i=0;i<players.length;i++){
								if(players[i].ai.shown==0){
									allshown=false;
								}
								if(get.attitude(player,players[i])>0){
									return 1;
								}
							}
							if(allshown) return 1;
							return 0.8;
						}
					},
					threaten:1.9,
				},
            },*/
		sgyj_duanxiu:{					
			trigger:{player:'phaseUseBegin'},
			direct:true,
			content:function(){
				"step 0"										
				player.chooseTarget(get.prompt2('sgyj_duanxiu'),1,function(card,player,target){
            return player!=target;
        },function(target){
            if(player.countCards('h')<target.countCards('h')) return -get.attitude(player,target);
            return get.attitude(player,target)>0;
        });        
           "step 1"
        if(result.bool){                 
             event.target=result.targets[0];
			 player.swapHandcards(result.targets[0]); 
             if(player.countCards('h')==result.targets[0].countCards('h')){
               game.asyncDraw([player,result.targets[0]]); 
             }                        
        }
        else event.finish();
		"step 2"
		if(player.countCards('h')>player.maxHp){
			player.loseHp();
		}
		if(player.countCards('h')<event.target.countCards('h')&&player.countCards('h')<5){
			player.drawTo(5);
		}
				},
			},	
    /* sgyj_duanxiu:{					
				trigger:{player:'phaseUseBegin'},
			filter:function (event,player){
				    return game.hasPlayer(function(current){
				return player!=current&&Math.abs(player.countCards('h')-current.countCards('h'))<=Math.abs(player.hp-current.hp);
			});					
				},
				content:function(){
					"step 0"										
				player.chooseTarget(get.prompt2('sgyj_duanxiu'),1,function(card,player,target){
            return player!=target&&Math.abs(player.countCards('h')-target.countCards('h'))<=Math.abs(player.hp-target.hp);
        },function(target){
            if(player.countCards('h')<target.countCards('h')) return -get.attitude(player,target);
            return get.attitude(player,target)>0;
        });        
           "step 1"
        if(result.bool){                 
             player.swapHandcards(result.targets[0]); 
             if(player.countCards('h')==result.targets[0].countCards('h')){
               game.asyncDraw([player,result.targets[0]]); 
             }                        
        }
        else event.finish();
				},
			},	*/
      sgyj_beitai2:{				
				trigger:{
				    global:'die',			
				},
				forced:true,
				forceDie:true,	
				popup:false,		
				content:function(){
				   player.loseMaxHp();
				   player.update();				    
				},
			},	
      sgyj_beitai:{				
				trigger:{
				    global:'gameStart',
				    player:'enterGame',
				},
				forced:true,
				group:"sgyj_beitai2",				
				content:function(){
				    var num=game.players.length;
				    player.gainMaxHp(Math.min(9,num));
				    player.update();
				    player.recover(num);
				    player.draw(num);
				    
				},
			},	
			"sgyj_qiman2":{			
				trigger:{target:'useCardToPlayered'},
				forced:true,
				priority:15,
				filter:function(event,player){
					return event.player.hasSkill("sgyj_qiman")&&event.card.name=='nanman';
				},
				content:function(){
					"step 0"
					game.delay();
					trigger.excluded.push(player);
					"step 1"
					player.chooseCard('选择一张基本牌交给'+get.translation(trigger.player),'h',1,function(card){
               return get.type(card)=='basic';
            }).ai=function(card){               
               return 8-get.value(card);
            };             
					"step 2"
				if(result.cards&&result.cards.length){
            player.$give(result.cards,trigger.player); 
			trigger.player.gain(result.cards,player);
			trigger.cancel();
        }else{
			player.damage(trigger.player);
		}    										
				},
			},
			"sgyj_qiman1":{			
				trigger:{target:'useCardToBefore'},
				forced:true,
				priority:15,
				filter:function(event,player){
					return (event.card.name=='nanman');
				},
				content:function(){
					trigger.cancel();
				},
			},
		"sgyj_qiman":{
				//unique:true,
				locked:true,
				audio:"juxiang1",				
				group:['sgyj_qiman1'],
				global:['sgyj_qiman2'],
				ai:{
					effect:{
						target:function(card){
							if(card.name=='nanman') return [0,1];
						}
					},
				},
			},			
			
			/*sgyj_qiman2:{
				audio:"juxiang1",	
				trigger:{global:'useCardToPlayered'},
				forced:true,
				usable:1,
				filter:function(event,player){
					return (event.card.name=='nanman'&&event.targets.length>3);
				},
				content:function(){
					"step 0"										
				player.chooseTarget(get.prompt2('sgyj_qiman'),1,true,function(card,player,target){
            return target!=player;
        },function(target){
            return get.attitude(player,target)>0;
        });        
           "step 1"
        if(result.bool){   
             trigger.getParent().excluded.add(result.targets[0]);
             event.finish();             
        }
        else event.finish();
				},
			},	*/
        "sgyj_feidao":{
				enable:'phaseUse',
				usable:1,				
				filter:function (event,player){
				    return player.countCards('h',{type:'basic'})&&game.hasPlayer(function(current){
				return player!=current&&get.distance(player,current,'attack')<=1;
			});					
				},
				filterCard:function (card){                    
                    return get.type(card)=='basic';
                },
                selectCard:function (){
                var num=game.countPlayer(function(current){
            return _status.currentPhase!=current&&get.distance(_status.event.player,current,'attack')<=1;
         });          
                    return [1,num];
                },              
                position:'h',      
				filterTarget:function (card,player,target){
					return player!=target&&get.distance(player,target,'attack')<=1;
				},	
				multitarget:true,
                multiline:true,
                prepare:function (cards,player,targets){
                    player.line(targets);
                },
				selectTarget:function (card){
        if(ui.selected.targets.length>ui.selected.cards.length){
            game.uncheck('target');
        }
        return ui.selected.cards.length;
    },     							
				content:function(){
				"step 0"
        player.$fullscreenpop('飞刀','fire');     
        game.delay(1); 
        event.targets=targets.slice(0);
        event.num=event.targets.length;
        event.targets.sort(lib.sort.seat);    
        "step 1"
        if(event.targets.length){
            var target=event.targets.shift();
            player.useCard({name:'sha',isCard:true},target,false);
            event.redo();
        }
				},
		ai:{
         result:{
            target:function (player,target){
              if(target.hp>3) return -1;   
                  return -target.countCards('h')-2;
              },
            },
            order:8,
            threaten:0.5,
        },  
			},
       "sgyj_xianiv":{	
				trigger:{player:'phaseBegin'},
				juexingji:true,
				forced:true,
				filter:function(event,player){
					var num=game.countPlayer(function(current){
            return player!=current&&current.group=='wu';
         });          
					return num<=0;			
				},
				content:function(){
					player.loseMaxHp();
					player.addSkill('qixi');
					player.awakenSkill('sgyj_xianiv');
					player.update();
				},						
			},
         "sgyj_jinfan":{	
				trigger:{player:'phaseDrawBegin2'},
				frequent:true,
				filter:function(event,player){
					return !event.numFixed;
				},
				content:function(){
					var num=player.countCards('e')-1;
					trigger.num+=num;
				},
				ai:{
					threaten:1.5
				},				
			},
			"sgyj_shuangjiao2":{		       
                enable:"phaseUse",
                usable:1,
                filterCard:function (card){                    
                      return get.suit(card)=='diamond';
                },
                selectCard:1,
                position:'he',      
                discard:false,
                prepare:'give',                
                filterTarget:function (card,player,target){
        return player!=target&&target.sex=='male';
    },
          filter:function (event,player){                                                                        
            return player.countCards('he',function(card){
				  return get.suit(card)=='diamond';
				});                
          },              
        content:function (){
        "step 0"        
        target.gain(cards,player);                     
        "step 1"                    
        target.chooseUseTarget('选择视为使用【杀】的目标',{name:'sha'},false,false);                                                        
    },
       ai:{
         result:{
            target:function (player,target){
              if(target.countCards('h')>3) return 0;   
                  return target.countCards('h');
              },
            },
            order:8,
            threaten:0.5,
        },  
            },
			"sgyj_shuangjiao1":{		       
                enable:"phaseUse",
                usable:1,
                filterCard:function (card){                    
                      return get.suit(card)=='heart';
                },
                selectCard:1,
                position:'he',      
                discard:false,
                prepare:'give',                
                filterTarget:function (card,player,target){
        return player!=target&&target.sex=='male';
    },
          filter:function (event,player){                                                                        
            return player.countCards('he',function(card){
				  return get.suit(card)=='heart';
				});                
          },              
        content:function (){
        "step 0"        
        target.gain(cards,player);                     
        "step 1"                    
          player.draw(2);
          target.recover();                                                          
    },
       ai:{
         result:{
            target:function (player,target){
              if(target.countCards('h')>3) return 0;   
                  return target.countCards('h');
              },
            },
            order:8,
            threaten:0.5,
        },  
            },
			"sgyj_shuangjiao":{
				group:["sgyj_shuangjiao1","sgyj_shuangjiao2"],
			},
    /*"sgyj_shuangjiao":{		       
                enable:"phaseUse",
                usable:2,
                filterCard:function (card){                    
                      return get.color(card)=='red';
                },
                selectCard:1,
                position:'he',      
                discard:false,
                prepare:'give',                
                filterTarget:function (card,player,target){
        return player!=target;
    },
          filter:function (event,player){                                                                        
            return player.countCards('he',function(card){
				  return get.color(card)=='red';
				});                
          },              
        content:function (){
        "step 0"
        
        target.gain(cards,player);   
                  
        "step 1"            
        if(target.sex=="male"){
          player.chooseDrawRecover(2,true);
        }else{
          player.draw();
        }                                                            
    },
       ai:{
         result:{
            target:function (player,target){
              if(target.countCards('h')>3) return 0;   
                  return target.countCards('h');
              },
            },
            order:8,
            threaten:0.5,
        },  
            },*/
     "sgyj_lianji":{   
			mod:{					
				selectTarget:function(card,player,range){
					if(card.name=='sha'&&range[1]!=-1) range[1]++;
					},					
			},
	},
	"sgyj_wuyi":{   
			mod:{										
				cardUsable:function(card,player,num){
					if(card.name=='sha') return num+1;
				},
			},
	},	
     "sgyj_shuangfei":{      
      trigger:{player:'phaseUseBegin'},   
      frequent:true,
      derivation:["sgyj_wuyi","sgyj_lianji"],          
      content:function (){
          'step 0' 
	    event.skills=["sgyj_wuyi","sgyj_lianji"];       
          'step 1'           
        player.chooseControl(event.skills).set('prompt','请选择一个你的要获得的技能').set('ai',function(){
            return event.skills.randomGet();
        });
          'step 2'               
        player.addTempSkill(result.control);       
        player.popup(result.control,'fire');         
         },
         ai:{
            order:9,
            result:{
               player:1,
               target:-0.5,
            },
         },
      },
            "sgyj_yihui2":{
                enable:"chooseToUse",
				usable:1,				
                filterCard:function (card){                    
                      return card.number%2==0;
                },
                selectCard:1,
                position:"hes",
                viewAsFilter:function (player){					
					return player.countCards('he',function(card){
				       return card.number%2==0;
					});
				},
                viewAs:{name:"wuxie"},                
                prompt:"你可将一张点数为偶数的牌当作一张【无懈可击】使用",
                check:function (){return 1},
                ai:{
                    threaten:0.8,
                    basic:{
                        useful:[6,4],
                        value:[6,4],
                    },
                    result:{
                        player:1,
                    },
                    expose:0.2,
                },
            },
           "sgyj_yihui":{                
                enable:"chooseToUse", 
                usable:1,            
                group:["sgyj_yihui2"],                
                filter:function (event,player){                                                            
        if((event.filterCard({name:'sha'},player,event))||
            (event.filterCard({name:'shan'},player,event))||
            (event.filterCard({name:'jiu'},player,event))||
            (event.filterCard({name:'tao'},player,event))){
            return player.countCards('he',function(card){
				  return card.number%2==1;
					});   
        }
        return false;
    },
                chooseButton:{
                    dialog:function (event,player){
            var list=[];
            if(event.filterCard({name:'sha'},player,event)){
                list.push(['基本','','sha']);
                list.push(['基本','','sha','fire']);
                list.push(['基本','','sha','thunder']);
                list.push(['基本','','sha','ice']);
            }
                    if(event.filterCard({name:'shan'},player,event)){
                list.push(['基本','','shan']);
            }
            if(event.filterCard({name:'tao'},player,event)){
                list.push(['基本','','tao']);
            }
            if(event.filterCard({name:'jiu'},player,event)){
                list.push(['基本','','jiu']);
            }
            return ui.create.dialog('疑慧',[list,'vcard'],'hidden');
        },
                    check:function (button){
            var player=_status.event.player;
            var card={name:button.link[2],nature:button.link[3]};
            if(game.hasPlayer(function(current){
                return player.canUse(card,current)&&get.effect(current,card,player,player)>0;
            })){
                switch(button.link[2]){
                    case 'tao':return 5;
                    case 'jiu':return 3.01;
                    case 'shan':return 3.01;
                    case 'sha':
                        if(button.link[3]=='fire') return 2.95;
                        else if(button.link[3]=='fire') return 2.92;
                        else return 2.9;
                }
            }
            return 0;
        },
                    backup:function (links,player){
            return {
                  filterCard:function (card,player){                    
                      return card.number%2==1;
                },
                selectCard:1,
                position:'hes',
                viewAsFilter:function (player){return player.isAlive()},
                viewAs:{name:links[0][2],nature:links[0][3],suit:null,number:null,isCard:true},                                    
                popname:true,
                ignoreMod:true,
                precontent:function (){                            
                    player.logSkill('sgyj_yihui'); 
                },
            }
        },
                    prompt:function (links,player){
            return '视为使用一张'+get.translation(links[0][3]||'')+get.translation(links[0][2]);
        },
                },
                ai:{
                    order:function (){
            var player=_status.event.player;
            var event=_status.event;
            if(event.filterCard({name:'jiu'},player,event)&&get.effect(player,{name:'jiu'})>0){
                return 3.1;
            }
            return 2.9;
        },
                    save:true,
                    respondSha:true,
                    respondShan:true,
                    result:{
                        player:1,
                    },
                },
            },
             "sgyj_doukou":{               
                trigger:{player:'phaseDrawBegin1'},
				filter:function (event,player){
					return !event.numFixed;
				},
				frequent:true,				
				content:function(){
			 'step 0'
			trigger.changeToZero();
			event.num=player.getDamagedHp()+2;
			event.cards=get.cards(event.num);
			player.showCards(event.cards);
			game.cardsGotoOrdering(event.cards);                          
             'step 1' 
            var controls=[];  
            event.ji=[];
            event.ou=[];             
            for(var i=0;i<event.num;i++){   
                if(event.cards[i].number%2==0){
                controls.push('偶数');
                event.ou.add(event.cards[i]);  
                }     
                else{
                controls.push('奇数');
                event.ji.add(event.cards[i]); 
                }                  
            }                     
            var str='请选择获得点数为奇数或偶数的牌';            
            player.chooseControl(controls,ui.create.dialog(str,'hidden')).ai=function(){
                return Math.floor(Math.random()*controls.length);
           };                                        
              
           'step 2'
          if(result.control=='偶数'){                             
             event.cards.remove(event.ou);
             player.gain(event.ou,'gain2');            
             game.log(player,'获得了',event.ou);                   
          }
          else{
             event.cards.remove(event.ji);
             player.gain(event.ji,'gain2');            
             game.log(player,'获得了',event.ji);              
          }
           'step 3'
           if(event.cards.length>0){
               event.goto(4);
             }
          else event.finish();
            'step 4' 
           player.chooseTarget(get.prompt2('sgyj_doukou'),1,true,function(card,player,target){
            return target!=player;
        },function(target){
            return get.attitude(player,target)>0;
        });        
           'step 5'
        if(result.bool){   
             result.targets[0].gain(event.cards,'gain2');             
        }
        else event.finish();
        },
        },    
            "sgyj_zexu":{
				enable:'phaseUse',
				usable:1,				
				filter:function(event,player){
				    var num=game.countPlayer(function(current){
            return current.sex=='male'&&current.countCards('h');
         });          
					return num>1&&player.countCards('he')>0;
				},
				filterCard:true,
				position:"he",
				selectCard:1,
				filterTarget:function(card,player,target){
					return player!=target&&target.sex=="male"&&target.countCards("h");
				},								
				content:function(){
					"step 0"
					event.target1=targets[0];				
					var players=game.filterPlayer();
					for(var i=0;i<players.length;i++){
						if(players[i].countCards('h')&&players[i]!=event.target1&&players[i]!=player&&players[i].sex=="male"){
							break;
						}
					}
					if(i==players.length){
						event.finish();
					}
					"step 1"
					player.chooseTarget(true,'选择拼点目标',function(card,player,target){
						return _status.event.target1.canCompare(target)&&target!=player;
					}).set('ai',function(target){
						var player=_status.event.player;
						var eff=get.effect(target,{name:'sha'},_status.event.target1,player);
						var att=get.attitude(player,target);
						if(att>0){
							return eff-10;
						}
						return eff;
					}).set('target1',event.target1);
					"step 2"
					if(result.targets.length){
						event.target2=result.targets[0];
						event.target1.line(event.target2);
						event.target1.chooseToCompare(event.target2);
					}
					else{
						event.finish();
					}
					"step 3"
					if(!result.tie){
						if(result.bool){
							player.chooseDrawRecover(2,true);
							event.target1.chooseDrawRecover(2,true);						
						}
						else{
							player.chooseDrawRecover(2,true);
							event.target2.chooseDrawRecover(2,true);						
						}
					}
				},
				ai:{
					order:1,
					result:{
						player:0,
						target:function(player,target){
							if(target.hasSkillTag('nogain')) return 0;
							if(player.countCards('h')>1){
								return 1;
							}
							var players=game.filterPlayer();
							for(var i=0;i<players.length;i++){
								if(players[i].countCards('h')&&players[i]!=target&&players[i]!=player&&get.attitude(player,players[i])<0){
									break;
								}
							}
							if(i==players.length){
								return 1;
							}
							return -2/(target.countCards('h')+1);
						}
					}
				},
			},
            "sgyj_kuishu":{				
				trigger:{player:'loseAfter'},
				direct:true,
				filter:function(event,player){
					return event.es&&event.es.length>0;
				},
				content:function(){
					"step 0"										
				player.chooseTarget(get.prompt2('sgyj_kuishu'),1,function(card,player,target){
            return target!=player;
        },function(target){
            return get.attitude(player,target)>0;
        });        
           "step 1"
        if(result.bool){   
             //player.$give(trigger.es,result.targets[0])
			 //result.targets[0].gain(trigger.es,player);
			 for(var i=0;i<trigger.es.length;i++){
			     result.targets[0].equip(trigger.es[i]);
			 }
			 player.draw(trigger.es.length);
             player.logSkill("sgyj_kuishu",result.targets[0]);
        }
        else event.finish();
				},
				ai:{
					noe:true,
					reverseEquip:true,
					effect:{
						target:function(card,player,target,current){
							if(get.type(card)=='equip'&&!get.cardtag(card,'gifts')) return [1,3];
						}
					}
				}
			},
            "sgyj_langyi4":{                
                trigger:{
                    source:"damageEnd",
                },                
                forced:true,
                popup:false, 
                filter:function (event,player){
          return event.card&&event.card.isCard&&event.card.name=='sha'&&get.suit(event.card)=='spade';
      },               
                content:function (){                
            trigger.player.link(true);        
                 },
                 },
			"sgyj_langyi3":{
			    mod:{
				    cardUsable:function(card,player,num){
						if(card.name=='sha'&&get.suit(card)=='club') return Infinity;
					},
				},
			},	
			"sgyj_langyi2":{ 
				shaRelated:true,
				trigger:{player:'useCardToPlayered'},
				forced:true,
                popup:false,
				mod:{
					targetInRange:function(card,player,target,now){
						if(card.name=='sha'&&get.suit(card)=='diamond') return true;
					},					
				},
				filter:function(event,player){
					return event.card&&event.card.name=='sha'&&get.suit(event.card)=='diamond';
				},
				logTarget:'target',
				content:function(){					
					trigger.getParent().directHit.add(trigger.target);					
				},
			},
			"sgyj_langyi1":{                
                trigger:{
                    source:"damageEnd",
                },                
                forced:true,
                popup:false, 
                filter:function (event,player){
          return event.card&&event.card.isCard&&event.card.name=='sha'&&get.suit(event.card)=='heart';
      },               
                content:function (){                
            player.recover();        
                 },
                 },
			"sgyj_langyi":{				
				group:["sgyj_langyi1","sgyj_langyi2","sgyj_langyi3","sgyj_langyi4"],
			},
			"sgyj_sandao3":{                
                trigger:{
                    player:"shaMiss",
                },
				filter:function (event,player){
          return event.card.name=='sha';
      },
                forced:true,                
                content:function (){
					if(player.countCards('he')>0){
						player.chooseToDiscard('he',1,true);
					}else{
						player.loseHp();
					}
				},
			},
			"sgyj_sandao2":{                
                trigger:{
                    source:"damageEnd",
                },
				filter:function (event,player){
          return event.card.name=='sha';
      },
                forced:true,                
                content:function (){
					player.recover();
					player.draw();
				},
			},
			"sgyj_sandao":{                
                trigger:{
                    player:"phaseUseBegin",
                },
                forced:true,                
                content:function (){
           'step 0' 
		   trigger.cancel();
		   player.addTempSkill("sgyj_sandao2");
		   player.addTempSkill("sgyj_sandao3");
		   event.num=3;
		   'step 1'
        player.chooseTarget(get.prompt2('sgyj_sandao'),1,true,function(card,player,target){
            return target!=player&&target.isAlive();
        },function(target){
            return -get.attitude(player,target);
        });        
           'step 2' 
        if(result.bool){   
            event.target=result.targets[0];			
        }
        else{
            event.finish();
        }
        'step 3'
            player.useCard({name:'sha'},event.target,false);                          
            event.num--;
		'step 4'
        if(event.num>0&&event.target.isAlive()){
			event.goto(3);
		}else{
			event.finish();
		}
    },
            },
			"sgyj_hanjiang2":{ 
            mod:{
				cardEnabled:function(card){
					if(card.name=='sha'||get.type(card)=='trick') return false
				},
			},
            },
            "sgyj_hanjiang":{                
                trigger:{
                    player:"phaseUseBegin",
                },
                //frequent:false,
                filter:function (event,player){
          return game.hasPlayer(function(current){
				return get.distance(player,current,'attack')<=1;
			});
      },
                content:function (){
           'step 0' 
        player.chooseTarget(get.prompt2('sgyj_hanjiang'),1,function(card,player,target){
            return target!=player&&get.distance(player,target,'attack')<=1;
        },function(target){
            return -get.attitude(player,target);
        });        
           'step 1' 
        if(result.bool){   
            player.logSkill('sgyj_hanjiang');                           
            event.target=result.targets[0];
            if(player.hp<=event.target.hp){
              player.useCard({name:'sha'},event.target,false);
            }
            if(player.countCards('h')<=event.target.countCards('h')){
              player.useCard({name:'sha'},event.target,false);
            }
            if(player.getAttackRange()<=event.target.getAttackRange()){
              player.useCard({name:'sha'},event.target,false);
            }
        }
        else{
            event.finish();
        }
        'step 2' 
        player.addTempSkill('sgyj_hanjiang2');
        player.chooseToDiscard('h',Math.max(1,player.hp),true);
    },
            },
			"sgyj_xuejiao2":{                
                trigger:{
                    source:"damageEnd",
                },                
                forced:true,
                popup:false, 
                filter:function (event,player){
          return event.card&&event.card.name=='sha'&&player.maxHp<=event.player.maxHp;
      },               
                content:function (){
                'step 0'
                player.chooseControl().set('choiceList',['回复一点体力','增加一点体力上限']).set('ai',function(){
        if(player.maxHp<4) return 1;          
            return 0;
        });
        'step 1'
        if(result.index==0){
            player.recover();
        }
        else{
            player.gainMaxHp();
            player.update();
		}
                 },
                 }, 
         "sgyj_xuejiao":{                
                trigger:{
                    player:"phaseUseBegin",
                },                
                check:function (event,player){
                if(player.maxHp<2) return 0;                    
        return 1;
    },
                filter:function (event,player){
          return game.hasPlayer(function(current){
            return current!=player&&get.distance(player,current,'attack')<=1;
         });                  
      },
                content:function (){
          'step 0'                                  
        player.chooseTarget(get.prompt2('sgyj_xuejiao'),1,function(card,player,target){
            return target!=player&&get.distance(player,target,'attack')<=1;
        },function(target){
            return -get.attitude(player,target);
        });        
           'step 1' 
        if(result.bool){
          player.loseMaxHp();
          player.update();  
          player.addTempSkill("sgyj_xuejiao2",{player:"shaAfter"});
          player.useCard({name:'sha'},result.targets[0],false);
        } 
    },
            },
			"sgyj_congyi2":{				
				trigger:{
				    player:['phaseDiscardBegin'],				    
				},	
				forced:true,				
				filter:function (event,player){		
					//var evt=event.getParent(); 
                       // if(evt.name!='discard'||event.type!='discard') return false; 
					return player.countCards('h')>player.hp;
				},
				content:function(){			
					trigger.cancel();
					player.chooseToDiscard('h',true);					
				},								
				},
            "sgyj_congyi":{				
				trigger:{
				  player:['drawBegin','phaseDrawBegin','recoverBegin','loseHpBegin','damageBegin'],
				  source:'damageBegin',
				},
				forced:true,
				group:"sgyj_congyi2",
				filter:function (event,player){		
					return event.num>0;
				},
				content:function(){			
					trigger.num=1;
				},
				},
            "sgyj_yuyun":{		
				trigger:{player:'loseAfter'},
				forced:true,
				filter:function (event,player){
					if(player.countCards('h')) return false;
					return event.hs&&event.hs.length>0;
				},
				content:function(){
					player.turnOver();
					player.draw(player.maxHp);
				},
				ai:{
					threaten:0.8,
					effect:{
						target:function(card){
							if(card.name=='guohe'||card.name=='liuxinghuoyu') return 0.5;
						}
					},
					noh:true,
					skillTagFilter:function(player,tag){
						if(tag=='noh'){
							if(player.countCards('h')!=1) return false;
						}
					}
				}
			},
            "sgyj_yunyu":{                
                trigger:{
                    player:"turnOverEnd",
                },                
                filter:function (event,player){
          return game.hasPlayer(function(current){
                return current.sex=='male';
	 		});
      },
                content:function (){
           'step 0'
        player.chooseTarget(get.prompt2('sgyj_yunyu'),1,function(card,player,target){
            return target.sex=='male';
        },function(target){
            if(target.isTurnedOver()) return get.attitude(player,target)>0;
            return -get.attitude(player,target);
        });        
           'step 1' 
        if(result.bool){   
            player.logSkill('sgyj_yunyu');                          
            event.target=result.targets[0];
            event.target.turnOver();
            if((player.isTurnedOver()&&event.target.isTurnedOver())||(!player.isTurnedOver()&&!event.target.isTurnedOver())||(player.isDamaged()&&event.target.isDamaged())){            
              player.recover();
              event.target.recover();
            }
        }
        else{
            event.finish();
        }
    },
            },
			"sgyj_hongwu2":{                                             
                trigger:{
                    source:"damageBegin",
                },                
                forced:true, 
                                             
                filter:function (event,player){
        return event.card&&event.card.isCard&&event.card.name=='sha'&&event.player.sex=='male';
    },
                content:function(){
        trigger.num++;
    }, 
    },              
             "sgyj_hongwu":{                                             
                trigger:{
                    player:"damageBegin",
                },
                group:"sgyj_hongwu2",
                forced:true, 
                mod:{
					ignoredHandcard:function(card,player){
					var num=game.countPlayer(function(current){
            return current.sex=='male';
         });          
             if(num>0){  
						if(get.color(card)=='red'&&get.type(card)=='basic'){
							return true;
						}
						}
					},
					cardDiscardable:function(card,player,name){
					var num=game.countPlayer(function(current){
            return current.sex=='male';
         });              
         if(num>0){  
						if(name=='phaseDiscard'&&get.color(card)=='red'&&get.type(card)=='basic') return false;
					}
					},
				},                                               
                filter:function (event,player){
        return event.card&&event.card.isCard&&event.card.name=='sha'&&event.source.sex=='male';
    },
                content:function(){
        trigger.num--;
    }, 
    },              
            "sgyj_yinzhuo":{                                             
                trigger:{
                    global:"phaseDiscardAfter",
                },                                                    
                filter:function (event,player){
					if(!event.cards) return false;
					if(event.cards.length<2) return false;					
					for(var i=0;i<event.cards.length;i++){ 
						if(get.color(event.cards[i])!=get.color(event.cards[0])) return false;
					}					
        return true;
    },
                content:function(){
        'step 0'
        player.chooseControl().set('choiceList',['令其恢复1点体力','对其造成1点伤害']).set('ai',function(){
        if(get.attitude(player,trigger.player)>0) return 0;          
            return 1;
        });
        'step 1'
        if(result.index==0){
            player.logSkill('sgyj_yinzhuo');
            trigger.player.recover();
        }
        else{
            player.logSkill('sgyj_yinzhuo');
			trigger.player.damage();			
		}
    }, 
    },              
            "sgyj_conggui":{                                             
                trigger:{
                    player:"damageBegin",
                },
                forced:true, 
                mod:{
					targetEnabled:function (card,player,target,now){
						if(card.name=='shunshou'||card.name=='guohe') return false;
					},
				},                                               
                filter:function (event,player){
        return player.hp<event.source.hp&&!event.nature;
    },
                content:function(){
        trigger.cancel();
    }, 
    },
    
     "jp_guyaodamage":{
    trigger:{
        player:"phaseUseEnd",
    },
    forced:true,  
    popup:false,
    filter:function (event,player){
		return player.storage.jp_guyaocount==0&&game.hasPlayer(function(current){
				return current.hasSkill('jp_guyao1');
		});       
	},	    
	content:function(){			
		"step 0" 
		event.targets=game.filterPlayer(function(current){
				return current.hasSkill('jp_guyao1');
		});       
		"step 1" 
		player.chooseControl().set('choiceList',['失去一点体力','令'+get.translation(event.targets[0])+'回复一点体力']).set('ai',function(){
        if(player.hp<2) return 1;          
            return 0;
        });        
        "step 2" 
        if(result.index==0){
            player.loseHp();           
        }
        else{
            event.targets[0].recover();                     
		}				
	},
        },
        "jp_guyaocount":{
         trigger:{
        player:"useCardToPlayered",
    },
    forced:true,  
    popup:false,    
    marktext:"安",    
    init:function (player){
		player.storage.jp_guyaocount=0;
	},
    intro:{
       name:"蛊药",
       content:"你这回合安全了",
    },
    filter:function (event,player){
		return event.card&&get.suit(event.card)==player.storage.jp_guyao;
	},
	content:function(){				
		player.storage.jp_guyaocount++;		
		player.markSkill("jp_guyaocount");
		player.update();
	},
        },
        "jp_guyao2":{
        trigger:{
            global:"phaseEnd",
        }, 
        forced:true,
        popup:false,
        content:function (){
           player.storage.jp_guyao=[]; 
           player.storage.jp_guyaocount=0;
        },        
        },      
        "jp_guyao1":{},
        "jp_guyao":{             
                trigger:{
                    player:"phaseUseBegin",
                },                       
                init:function (player){
                   player.storage.jp_guyao=[]; 
                }, 
                direct:true,
                group:["jp_guyao2"],                   
                filter:function (event,player){               
                   return game.hasPlayer(function(current){
						return current.countCards('h');
					});           
                },
                content:function (){
             'step 0'
		player.chooseTarget('蛊药',1,lib.translate.jp_guyao_info,function(card,player,target){
            return player!=target&&target.countCards('h');
        }).set('ai',function(target){			
            return -get.attitude(_status.event.player,target);            
        });
		    'step 1'
		if(result.bool){ 
            result.targets[0].addTempSkill('jp_guyao1');
            player.discardPlayerCard(result.targets[0],'h',get.prompt('jp_guyao')).set('ai',function(button){            
            if(get.position(button.link)=='h'){               
                return Math.random();
            }			
        }).set('logSkill',['jp_guyao',result.targets[0]]).set('att',get.attitude(player,result.targets[0])<=0);
	    }
			else{
                event.finish(); 
            } 
            'step 2'
        if(result.bool&&result.links&&result.links.length){
			player.logSkill('jp_guyao');
			player.storage.jp_guyao=get.suit(result.links[0]);         
			player.addTempSkill("jp_guyaocount");	
			player.addTempSkill("jp_guyaodamage");		        
		}   
            else{
               event.finish();
            }            		                                                                
    },
            },
            "jp_lieyi2":{},
            "jp_lieyi":{               
                trigger:{
                    player:"useCardToPlayered",
                },
                group:"jp_lieyi_source",                
                filter:function (event,player){
          return event.card&&event.card.name=="tao"&&player!=event.target&&event.target.hasSkill("jp_lieyi2");
      },
            subSkill:{
                "source":{
                   trigger:{
                    player:"damageEnd",
                },
                forced:true,
                popup:false,
                filter:function (event,player){
          return event.source;
      },
                content:function (){
             trigger.source.addSkill("jp_lieyi2");
    }, 
                },
                },
                content:function (){
        trigger.cancel();
        trigger.target.loseHp();
        trigger.target.draw();
    },
            },
        "zzj_zuotang":{
				global:'zzj_zuotang2',				
			},
			"zzj_zuotang2":{				
				enable:'phaseUse',
				filter:function (event,player){
					if(player.hasSkill('zzj_zuotang')) return false;
					if(player.hasSkill('zzj_zuotang3')) return false;
					return player.countCards('h')&&game.hasPlayer(function(current){
						return current.hasSkill('zzj_zuotang');
					});
				},
				direct:true,
				delay:false,
				filterCard:true,
				discard:false,
				lose:false,
				position:'h',
				selectCard:[1,Infinity],
				prompt:function(){
					var player=_status.event.player;
					var list=game.filterPlayer(function(current){
						return current.hasSkill('zzj_zuotang');
					});
					var str='将任意张牌交给'+get.translation(list);
					if(list.length>1) str+='中的一人';
					return str;
				},
				check:function(card){					
					return 8-get.value(card);
				},
				content:function(){
					"step 0"
					var targets=game.filterPlayer(function(current){
						return current.hasSkill('zzj_zuotang');
					});
					if(targets.length==1){
						event.target=targets[0];
						event.goto(2);
					}
					else if(targets.length>0){
						player.chooseTarget(true,'选择【坐堂】的目标',function(card,player,target){
							return _status.event.list.contains(target);
						}).set('list',targets).set('ai',function(target){
							var player=_status.event.player;
							return get.attitude(player,target)>0;
						});
					}
					else{
						event.finish();
					}
					"step 1"
					if(result.bool&&result.targets.length){
						event.target=result.targets[0];
					}
					else{
						event.finish();
					}
					"step 2"
					if(event.target){
					    event.suits=[];
					    event.suits2=[];
					    player.$give(cards,event.target);
					    event.target.gain(cards,player);
					    game.log(event.target,'获得了'+get.translation(player)+'的',cards);          
						player.logSkill('zzj_zuotang',event.target);
						player.addTempSkill('zzj_zuotang3','phaseUseEnd');											
						  for(var i=0;i<cards.length;i++){
							event.suits.add(get.suit(cards[i]));							
						  }																		
					}					
					"step 3"			             
            event.target.chooseCard('h',[1,Infinity],'是否交给'+get.translation(player)+'任意张手牌？',true).ai=function(card){
           if(get.attitude(player,event.target)>0) return 10-get.value(card);                    
           return -get.value(card);         
       };                                         
			"step 4"    
		if(result.bool){          
           event.target.line(player,'green'); 		        
           event.target.$give(result.cards,player);
           player.gain(result.cards,event.target);
           for(var i=0;i<result.cards.length;i++){
			 event.suits2.add(get.suit(result.cards[i]));
		   }
		   if((event.suits.length==4)||(event.suits2.length==4)||((event.suits.length+event.suits2.length)==4)){
			 player.recover();
		   }								     
           game.log(player,'获得了'+get.translation(event.target)+'的',result.cards);          
		}
		else{
		   event.finish();
		}						
				},
				ai:{
					order:6,
					threaten:1.5,
					result:{
						player:function(player,target){
							var target=game.findPlayer(function(current){
								return current.hasSkill('zzj_zuotang');
							});
							if(target){
								return get.attitude(player,target);
							}
						},
					},
				},
			},
		"zzj_zuotang3":{},
        "zzj_caifangdraw":{
		trigger:{player:'drawBegin'},							
        forced:true,      
        filter:function (event,player){							
            return event.num>0;                          
		},  
        content:function (){ 
            "step 0"           
			event.cards=get.cards(trigger.num);
			game.cardsGotoOrdering(event.cards);
			player.showCards(event.cards); 
			trigger.changeToZero();
			player.gain(event.cards);
			player.$gain2(event.cards);		
			game.log(player,'重铸后获得了',result.cards);          	
			"step 1" 	
        	event.num=0;
			for(var i=0;i<event.cards.length;i++){
				if(get.suit(event.cards[i])=='club'){
					event.num++;					
				}
			}
			"step 2"
			if(event.num>0){
			    if(player.isDamaged()){
				player.chooseControl().set('choiceList',['回复一点体力','摸一张牌']).set('ai',function(){
        if(player.hp<3) return 0;          
            return 1;
        });
        }
        else{
            player.draw();    
            player.removeSkill("zzj_caifangdraw"); 
            event.finish();       
        }
			}	
			else{
			    player.removeSkill("zzj_caifangdraw");
			    event.finish(); 
			}
		"step 3" 
        if(result.index==0){
            player.recover();
            player.removeSkill("zzj_caifangdraw");
            event.finish(); 
        }
        else{
            player.draw();    
            player.removeSkill("zzj_caifangdraw");  
            event.finish();       
		}					  							         					        
 	  	},	
	},
            "zzj_caifang":{
                enable:'phaseUse',
                usable:1,
				filter:function(event,player){
					return player.countCards('he',{suit:'club'})>0;
				},
				filterCard:function(card){
					return get.suit(card)=='club';
				},
				selectCard:[1,Infinity],
				position:"he",
				check:function(card){
					return 7-get.useful(card);
				},
				content:function(){
			    	player.addSkill("zzj_caifangdraw");
					player.draw(cards.length);
				},
				discard:false,
				visible:true,
				loseTo:'discardPile',
				prompt:'将任张梅花牌置入弃牌堆并摸等量张牌',
				delay:0.5,
				prepare:function(cards,player){
					player.$throw(cards,1000);
					game.log(player,'将',cards,'置入了弃牌堆');
				},
				ai:{
					basic:{
						order:1
					},
					result:{
						player:1,
					},
				},
            },
        "df_fushang":{             
                trigger:{
                    global:"damage",
                },       
                check:function (event,player){                    
                    return get.attitude(player,event.player)>0;
                },                     
                filter:function (event,player){
                //for(var i=0;i<player.storage.df_zhixin.length;i++){
                   return event.cards.length==1&&event.card&&event.card.isCard&&event.player.hp<=0&&player.storage.df_zhixin.length>0; 
               // }           
      },
                content:function (){
        'step 0' 
        player.chooseCardButton(player.storage.df_zhixin,1,'选择使用与'+get.translation(trigger.card)+'花色相同的牌').set('filterButton',function(button){           
             return get.suit(button.link)==get.suit(trigger.cards[0]);
         }).set('ai',function(button){
             return get.value(button.link);
         });                                     
            'step 1'
          if(result.bool){                             
              player.$throw(result.links);
			  player.storage.df_zhixin.remove(result.links[0]);
		      game.cardsDiscard(result.links[0]);
			  player.syncStorage('df_zhixin')
              player.useCard({name:'tao',isCard:true},trigger.player);
              trigger.player.chooseCard('交给'+get.translation(player)+'一张牌当作“杏”','h',function(card){
               return true;
            }).ai=function(card){			   
               return 6-get.value(card);
            };                                 
        }
         else{		 
			 event.finish();
		 }
		'step 2'
		if(result.cards&&result.cards.length){
            trigger.player.lose(result.cards);         		     				
			//player.storage.df_zhixin=result.cards.slice(0);		     		
		    player.storage.df_zhixin=player.storage.df_zhixin.concat(result.cards);
			player.syncStorage('df_zhixin');
	     	player.update();	  	   	  
		}					                                                                  
    },
            },
             "df_zhixin2":{
                trigger:{
                    player:"phaseDrawBegin2",
                },
                forced:true,
                filter:function (event,player){
                    return !event.numFixed;
                },
                content:function(){
                for(var i=0;i<player.storage.df_zhixin.length;i++){
                   if(get.color(player.storage.df_zhixin[i])=='red'){
                    trigger.num++;
                   }
                }    
                },
                ai:{
                    threaten:1.3,
                },
            },
            "df_zhixin":{
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                init:function (player){
                    if(!player.storage.df_zhixin) player.storage.df_zhixin=[];
                },
                marktext:"杏",
                intro:{
                    content:"cards",
                },
                group:"df_zhixin2",
                filter:function (event,player){
          return player.countCards('h');
      },
                content:function (){
        'step 0'       
        player.draw();        
        'step 1'
        player.chooseCard('选择一张手牌当作“杏”','h',true,function(card){
               return true;
            }).ai=function(card){               
               return 6-get.value(card);
            };                                 
         'step 2'
        if(result.cards&&result.cards.length){
            player.storage.df_zhixin=player.storage.df_zhixin.concat(result.cards);
			player.syncStorage('df_zhixin');
			player.markSkill('df_zhixin');
			player.lose(result.cards,ui.special,'toStorage');
			player.$give(result.cards,player,false);             
        }                                
    },
            },
			
},
    characterReplace:{
			zzj_zhangzhongjing:['zzj_zhangzhongjing','sgyj_zhangzhongjing'],
			guojia:['re_guojia','guojia'],
			simayi:['re_simayi','simayi'],			
		},
    translate:{
            
    //"sgyj_moban":"模板",
    //  "sgyj_moban_info":"模板",
    //武将
            "sgyj_simazhi":"司马芝",
			"sgyj_jiananfeng":"贾南风",
			"sgyj_gongsuncheng":"公孙称",
			"sgyj_laiyinger":"来莺儿",
			"sgyj_pujing":"普净",
			"sgyj_caowei":"曹伟",
			"sgyj_reshiyi":"士壹",
			"sgyj_shibi":"士碧",
			"sgyj_guomo":"郭模",
			"sgyj_mengqiu":"孟虬",
			"sgyj_cuishi":"崔寔",
            "sgyj_zhixushangren":"紫虚上人",
            "sgyj_dongguiren":"董贵人",
            "sgyj_shenzhurong":"神祝融",
            "sgyj_quanhuanghou":"全皇后",
            "sgyj_jingzhu":"静珠",
			"sgyj_wangdao":"王导",
			"sgyj_mengyou":"孟优",
            "sgyj_simajun":"司马骏",
            "sgyj_buba":"卜巴",
            "sgyj_niuxian":"牛贤",
            "sgyj_wangjun":"王浚",
            "sgyj_lie":"李娥",
            "sgyj_simaliang":"司马亮",
            "sgyj_kouloudun":"寇娄敦",
            "sgyj_zhangxinqi":"张心岂",
			"sgyj_yuwenjun":"庾文君",
			"sgyj_dianman":"典满",
			"sgyj_muludawang":"SP木鹿大王",
			"sgyj_remuludawang":"木鹿大王",
			"sgyj_dingli":"丁立",
			"sgyj_zhugeguo":"诸葛果",
            "sgyj_caoxiong":"曹熊",
            "sgyj_guoenshumu":"郭恩叔母",
            "sgyj_xushuzhimu":"徐庶之母",
			"sgyj_simayong":"司马颙",
			"sgyj_xiahouen":"夏侯恩",
			"sgyj_huaxie":"花榭",
			"sgyj_suli":"素利",
            "sgyj_hengai":"横艾",
            "sgyj_qinqi":"秦琪",
			"sgyj_shiyi":"是仪",
			"sgyj_niufu":"牛辅",
            "sgyj_wangyi":"王异",
            "sgyj_penghu":"彭虎",
            "sgyj_pengqi":"彭绮",
            "sgyj_sunjunsunlin":"孙峻孙綝",
            "sgyj_shenhuangyueying":"神黄月英",
            "sgyj_zhangzhongjing":"SP张仲景",
            "sgyj_guosi":"新郭汜",
            "sgyj_wuguowuniv":"吴国巫女",
			"sgyj_wangrong":"SP王荣",
			"sgyj_yunying":"云英",
            "sgyj_yimou":"嬄眸",
			"sgyj_eheshaoge":"俄何烧戈",
			"sgyj_liuli":"刘刕",
			"sgyj_liubao":"刘豹",
			"sgyj_qiaoguolao":"乔国老",
			"sgyj_caohua":"曹华",
			"sgyj_wangtaowangyue":"王桃王悦",
			"sgyj_ganruonan":"甘若男",
			"sgyj_mengxiang":"孟香",
			"sgyj_shichangshi":"十常侍",
			"sgyj_wutugu":"新兀突骨",
			"sgyj_rewutugu":"SP兀突骨",
			"sgyj_liuhui":"刘卉",
			"sgyj_zhoutai":"新周泰",
			"sgyj_xiahouguangji":"夏侯光姬",
			"sgyj_langboduo":"朗伯多",
			"sgyj_shendiaochan":"神貂蝉",
			"sgyj_mayuanyi":"马元义",
			"sgyj_gongdu":"龚都",
			"sgyj_qingqing":"青青",
			"sgyj_xiuwulu":"修武卢",
			"sgyj_quexiaojiang":"曲阿小将",
			"sgyj_dingfuren":"丁夫人",
			"sgyj_hushi":"胡氏",
			"sgyj_zhugeyun":"诸葛芸",
			"sgyj_zhugeliangsenying":"诸葛靓沈莹",
			"sgyj_wangmeiren":"王美人",
			"sgyj_shendianwei":"神典韦",
			"sgyj_zhangzhang":"张皇后张贵人",
			"sgyj_xiahouhui":"夏侯徽",
			"sgyj_taorui":"陶璿",
			"sgyj_yizhen":"义贞",
			"sgyj_zhenji":"新甄姬",
			"sgyj_zhouyu":"新周瑜",
			"sgyj_xiaoqiao":"新小乔",
			"sgyj_chengong":"新陈宫",
			"sgyj_jihuo":"济火",
			"sgyj_rejihuo":"济火",
			"sgyj_tufashujineng":"秃发树机能",
			"sgyj_luotoushi":"落头氏",
			"sgyj_malin":"马琳",
			"sgyj_shenlvbu":"神吕布",
			"df_dongfeng":"董奉",
            "zzj_zhangzhongjing":"张仲景",
            "jp_jiping":"吉平",
			"sgyj_zhangjuzhangchun":"张举张纯",
			"sgyj_tukuilai":"秃瑰来",
			"sgyj_caoxian":"曹宪",
			"sgyj_yanziqing":"颜子晴",
			"sgyj_liufuren":"刘夫人",
			"sgyj_tuobaliwei":"拓跋力微",
			"sgyj_zhaoyu":"赵妪",
			"sgyj_furong":"芙蓉",
			"sgyj_taishizhaorong":"太史昭容",
			"sgyj_langjili":"朗吉力",
			"sgyj_wangmi":"王弥",
			"sgyj_zhoubuyi":"周不疑",
			"sgyj_kebineng":"轲比能",
			"sgyj_ahuinan":"阿会喃",
			"sgyj_relaiyinger":"SP来莺儿",
			"sgyj_lengshouguang":"冷寿光",
                                                
            "sgyj_qrys":"奇人隐士",
            "sgyj_cdjz":"齿德俱尊",
            "sgyj_wzyh":"外族英豪",
            "sgyj_jsfs":"救死扶伤",
            "sgyj_gstx":"国色天香",
            "sgyj_wzzd":"妄自尊大",
            "sgyj_fwlp":"凤舞龙盘",
            "sgyj_sxyh":"水性杨花",
            "sgyj_hgpl":"祸国叛乱",
			"sgyj_shen":"神将天降",
            
            //技能           
            
            /*
       xxx   
            */
            /*
            "sgyj_li":"",
            "sgyj_li_info":"",
            */
			"sgyj_changxi":"长息",
            "sgyj_changxi_info":"锁定技，你濒死时，你增加1点体力上限回复体力至上限并摸X张牌，X为此技能发动的次数，当X大于存活角色人数时，你立即死亡",
			"sgyj_yihu":"彝护",
            "sgyj_yihu_info":"锁定技，一名角色使用一张普通锦囊牌后，若此牌指定目标中含有你且结算人数不小于3，你替这些角色成为该牌的目标，若你因此受到的伤害大于4（存活人数小于5是改为2），在此锦囊结算结束后你获得之",
			"sgyj_shouben":"兽奔",
            "sgyj_shouben_info":"锁定技，当你对其他角色造成伤害并使其濒死时或你脱离濒死阶段时，你摸一张牌并恢复1点体力然后随机获得一个你没有的“兽”标记；你受到一次火焰伤害后，你随机失去一个“兽”标记，回合开始时，若你的“兽”标记不足四，你失去4-X点体力（X为你当前拥有“兽”标记的数量）；若你没有标记，你立即死亡",
			"sgyj_zongshouxiang":"象",
			"sgyj_zongshouhu":"虎",
			"sgyj_zongshouying":"鹰",
			"sgyj_zongshoushe":"蛇",
			"sgyj_zongshou":"纵兽",
            "sgyj_zongshou_info":"锁定技，游戏开始时你获得/“蛇”/“鹰”/“虎”/“象”四种“兽”标记，并根据对应“兽”标记获得以下效果:“蛇”，锁定技，你使用红色牌造成的伤害+1.；“鹰”锁定技，你使用黑色牌无距离限制；“虎”锁定技，当你造成伤害时，你摸一张牌；“象”，锁定技，当你受到伤害时，你令此伤害值改为1",
			"sgyj_xunqing":"殉情",
            "sgyj_xunqing_info":"限定技，一名男性角色处于濒死状态时，你可以令其将体力恢复至1点，然后你立即死亡",
			"sgyj_linxi":"怜惜",
            "sgyj_linxi_info":"锁定技，你的回合外，每当你受到伤害时，伤害来源须进行一次判定，若结果为红色，其摸两张牌，然后其须交给你一张牌并令此伤害对你无效",
			"sgyj_yuyin":"余音",
            "sgyj_yuyin_info":"弃牌阶段结束时，你可以将你此阶段弃置的牌交给其他等量名角色各一张，然后将未交出的牌置入弃牌堆",
			"sgyj_zongman":"纵蛮",
            "sgyj_zongman_info":"出牌阶段限一次，你可以将一张牌交给一名其他角色，视为其使用了一张【南蛮入侵】，结束结束后，若以此法造成的伤害大于存活角色的一半（向下取整），你可以令伤害来源将手牌补至体力上限（至多为5）",
			"sgyj_diqiu":"狄酋",
            "sgyj_diqiu_info":"出牌阶段限一次，当你使用牌指定目标后，若你于本回合内使用过的牌点数和大于13，你可以弃置每个目标角色各一张牌，若你已以此法弃置的牌数不小于3，你失去1点体力",
			"sgyj_yuqi3":"驭骑",
            "sgyj_yuqi3_info":"你于回合内可以将一名角色的装备区里的一张坐骑牌当【酒】使用；你于回合外可以将一名角色的装备区里的一张坐骑牌当【桃】使用",
			"sgyj_yuqi2":"驭骑",
            "sgyj_yuqi2_info":"你于回合外可以将一名角色的装备区里的一张坐骑牌当【桃】使用",
			"sgyj_yuqi1":"驭骑",
            "sgyj_yuqi1_info":"你于回合内可以将一名角色的装备区里的一张坐骑牌当【酒】使用",
			"sgyj_yuqi":"驭骑",
            "sgyj_yuqi_info":"你于回合内可以将一名角色的装备区里的一张坐骑牌当【酒】使用；你于回合外可以将一名角色的装备区里的一张坐骑牌当【桃】使用",
			"sgyj_suzhi":"夙智",
            "sgyj_suzhi_info":"锁定技，每轮每名角色的回合开始阶段，若你的体力值为全场最少且体力上限为全场最多，你减少一点体力上限并回复一点体力。你的体力上限变化时你便摸两张牌",
			"sgyj_jinji4":"顺手牵羊",
			"sgyj_jinji3":"决斗",
			"sgyj_jinji2":"桃",
			"sgyj_jinji1":"过河拆桥",
			"sgyj_jinji":"进计",
            "sgyj_jinji_info":"出牌阶段，你可以将以下花色的一张牌当作另一张牌使用：黑桃-【过河拆桥】，红桃-【桃】，梅花-【决斗】，方片-【顺手牵羊】。你以此法使用的牌无距离限制",
			"sgyj_lehuo":"乐祸",
            "sgyj_lehuo_info":"锁定技，一名其他角色受到伤害后，若你的体力大于其体力，你获得其一张牌，若你的手牌数小于其手牌数，你受到同点数同来源的伤害",
			"sgyj_shenzi":"神子",
            "sgyj_shenzi_info":"锁定技，当你脱离濒死状态后，你增加1点体力上限并回复1点体力",
			"sgyj_langwei":"狼威",
            "sgyj_langwei_info":"当你使用【杀】或仅指定一名角色的普通锦囊牌时，你可以扣除1点体力上限 然后选择一项：1.额外结算一次，2.摸三张牌，3.此牌不可被抵消",
			"sgyj_badao":"霸刀",
            "sgyj_badao_info":"弃牌阶段结束时，你可令一名角色弃置等同你弃置牌数的牌，你可立即使用其所弃置的牌",
			"sgyj_yunsheng":"芸升",
            "sgyj_yunsheng_info":"锁定技，当你造成伤害时，若你未受伤，你有50%概率令此伤害+1；当你受到伤害时，若你已受伤，你有50%概率令此伤害-1",
			"sgyj_benta":"奔踏",
            "sgyj_benta_info":"每当你使用【杀】时，你可以弃置场上一张牌，若此牌的点数为X（X为你已发动此技能的次数），此【杀】不可被闪避，若X为K，立即令目标死亡，然后你失去此技能",
			"sgyj_chuiru":"垂乳",
            "sgyj_chuiru_info":"锁定技，若你装备区内有武器牌，出牌阶段使用【杀】的次数上限+1，若你装备区内没有武器牌，你的攻击范围无限",
			"sgyj_kongxian":"控弦",
            "sgyj_kongxian_info":"摸牌阶段开始时，你可以改为令你本回合内的攻击范围+1/-1，然后获得以此法进入/离开你的攻击范围的其他角色各一张牌",
			"sgyj_kuji":"酷妒",
            "sgyj_kuji_info":"当你于出牌阶段使用目标数为1的普通锦囊时，你可令一名手牌多于你的角色成为此牌的额外目标",
			"sgyj_pianyan":"偏言",
            "sgyj_pianyan_info":"回合技，当一名角色于其出牌阶段使用牌时，若此牌的目标数大于1，你可令其摸一张牌，令此牌对一个目标无效，然后此牌的使用者可令此牌对另一个目标额外结算一次",
			"sgyj_linfeng":"临锋",
            "sgyj_linfeng_info":"回合技，当其他角色使用【杀】指定目标时，你可以摸一张牌，视为其对你使用一张【决斗】，若你以此法对其造成伤害，该【杀】无效",
			"sgyj_baoshen2":"保身",
			"sgyj_baoshen1":"保身",
			"sgyj_baoshen":"保身",
            "sgyj_baoshen_info":"锁定技，当一名角色对你造成伤害后，若其对你使用过牌，你回复1点体力，若其成为过你使用牌的目标，你摸两张牌",
			"sgyj_xianjian1":"先见",
			"sgyj_xianjian":"先见",
            "sgyj_xianjian_info":"出牌阶段限一次，你可以选择一名未以此法选择过的角色令其摸其当期体力值张数的牌，若此时你与以此法选择的角色于的手牌数相同，你获得一个额外的回合",
			"sgyj_fanjing":"犯境",
            "sgyj_fanjing_info":"锁定技，若一名其他角色计算与你的距离大于1，则其为你使用【杀】的合法目标且你对其使用的【杀】不可被闪避；若一名其他计算与你的距离不大于1，则其对你使用的【杀】不可被闪避",
			"sgyj_baobing":"暴兵",
            "sgyj_baobing_info":"你使用的【杀】无距离及目标数限制；你在其攻击范围内的其他角色使用的【杀】可选择你为额外目标",
			"sgyj_koulve":"寇掠",
            "sgyj_koulve_info":"锁定技，当你使用【杀】对目标角色造成伤害时，若你的手牌数小于体力值，你防止此伤害并获得其一张牌",
			"sgyj_guanhuo":"官祸",
            "sgyj_guanhuo_info":"锁定技，结束阶段开始时，你摸X张牌，X为场上横置角色的数量",
			"sgyj_luanhua":"乱华",
            "sgyj_luanhua_info":"限定技，出牌阶段，你可以令其他角色依次选择一项：1.横置武将牌并弃置两张牌，2.将武将牌翻面并摸两张牌",
			"sgyj_shezheng1":"涉政",
			"sgyj_shezheng":"涉政",
            "sgyj_shezheng_info":"锁定技，其他角色与出牌阶段使用的第一张单一目标的非转化牌由你指定目标，若此牌造成伤害，该使用牌的角色无法成为此技能的目标直到游戏结束",
            "sgyj_chaodu":"超度",
            "sgyj_chaodu_info":"任意角色濒死时，你可进行一次“超度”过程 50%几率令其体力回复至1点 10%概率令其回复至上限（至多为5）。每名角色每局游戏限发动一次",
			"sgyj_wujie":"五戒",
            "sgyj_wujie_info":"锁定技 你每次至多受到1点伤害；你的【酒】均视为【桃】；女性角色回合内，锦囊牌对你无效；你的回合外，其他角色不能获得你的牌；你的判定牌无法被更改",
			"sgyj_shishou":"食兽",
            "sgyj_shishou_info":"锁定技，你不能成为【桃】或【酒】的目标；每当你杀死一名其他角色后，你回复两点体力；你使用【毒】改为回复体力",
			"sgyj_lingjia":"麟甲",
            "sgyj_lingjia_info":"锁定技，普通伤害对你无效；游戏开始时，你废除你的装备区，其他角色计算与你的距离始终+2；一名其他角色回合内对你造成的火焰伤害持续递增",
            "sgyj_sihe":"私阖",
            "sgyj_sihe_info":"准备阶段，你可以指定一名其他角色，回合结束时，你令其弃置等同于你此回合弃置的牌数，然后你摸等于其在此回合获得的牌数",
            "sgyj_suzhuang":"素装",
            "sgyj_suzhuang_info":"锁定技，与你距离1以内的角色手牌上限-2",
            "sgyj_zhezhi":"折枝",
            "sgyj_zhezhi_info":"你死亡时，可以选择下列至多X项令一名其他角色执行：1，废除装备区，2，扣除一半体力上限，3，失去所有锁定技，X为你本局游戏发动“秋瞳”获得牌的类型数量",
            "sgyj_qiutong":"秋瞳",
            "sgyj_qiutong_info":"出牌阶段限一次，你可以观看一名手牌数量最多的其他角色的手牌，然后你可以获得其中任意张未以此法获得过的类型的牌",
            "sgyj_gaiyong":"蓋庸",
            "sgyj_gaiyong_info":"锁定技，准备阶段，你须选择跳过此回合的摸牌阶段或出牌阶段",
            "sgyj_youyou2":"優游",
            "sgyj_youyou":"優游",
            "sgyj_youyou_info":"其他角色的回合开始时，若你手牌数少于其，你可以摸一张牌；其他角色的回合结束时，若你手牌数多于其，你可以使用一张牌",
            "sgyj_chumou2":"促谋",
            "sgyj_chumou1":"促谋",
            "sgyj_chumou":"促谋",
            "sgyj_chumou_info":"出牌阶段限一次，你可以弃置一张牌，然后令一名其他角色选择一项：使用一张同类别的牌，此牌可以额外指定或减少一个目标；使用一张不同类型的牌，此牌不可被抵消",
            "sgyj_reqiaoxie":"巧泄",
            "sgyj_reqiaoxie_info":"每当你的牌因弃置进入弃牌堆时，你可以令一名其他角色摸一张牌",
            "sgyj_yanxiao":"烟消",
            "sgyj_yanxiao_info":"锁定技，每当你或“教艺”指定的角色死亡时，另一名角色死亡",
            "sgyj_jiaoyi2":"教艺",
			"sgyj_jiaoyi":"教艺",
            "sgyj_jiaoyi_info":"限定技，出牌阶段，你可以指定一名其他角色，每当你摸牌/回复体力后，其摸等量的牌/回复等量的体力",
            "sgyj_duliang2":"督粮",
			"sgyj_duliang":"督粮",
            "sgyj_duliang_info":"一名角色的出牌阶段开始时，若其手牌数不为全场最多，你可以令其摸两张牌，若其因此手牌数成为全场最多，此技能对其无效直到游戏结束",
            "sgyj_manxin":"蛮心",
            "sgyj_manxin_info":"结束阶段，你可以观看牌堆顶的X张牌，X为当前的体力值，然后你可以用任意数量的红桃牌与之交换等量的牌，若你用红桃牌交换了所有牌，视为你使用了一张【南蛮入侵】",            
            "sgyj_mingbian":"明辨",
            "sgyj_mingbian_info":"每当你受到伤害后，你可以摸一张牌或对技能“切案”依次进行如下修改：1.“所有”改为“任意”，2.删除描述中的“或令”3.摸牌弃牌数+1",
            "sgyj_qiean5":"切案",
            "sgyj_qiean4":"切案",
            "sgyj_qiean3":"切案",
            "sgyj_qiean3_info":"准备阶段开始时，你可以令此前一轮任意受到过伤害的角色摸一张（两张）牌（或令）任意造成过伤害的角色弃一张（两张）牌",
            "sgyj_qiean2":"切案",
            "sgyj_qiean1":"切案",
            "sgyj_qiean":"切案",
            "sgyj_qiean_info":"准备阶段开始时，你可以令此前一轮所有受到过伤害的角色摸一张牌或令所有造成过伤害的角色弃一张牌",            
			"sgyj_gongzhu":"共主",
            "sgyj_gongzhu_info":"锁定技，你随机获得当前主公的一个技能（主公技，限定技，觉醒技，隐蔽技除外），你的手牌上限额外加X（主公的体力上限）",
			"sgyj_zhuliu":"逐流",
            "sgyj_zhuliu_info":"每回合限一次，其他角色造成伤害后，你可令除伤害来源外的一名其他角色展示手牌，然后你摸与其手牌数量相同的牌（至多摸5张）",
			"sgyj_zhefu":"蟄服",
            "sgyj_zhefu_info":"锁定技，当你体力值为1时，你手牌始终为2",
			"sgyj_tanxin":"探心",
            "sgyj_tanxin_info":"当你受到伤害时，你可以进行一次判定，你获得此判定牌",
			"sgyj_linglong2":"玲珑",
			"sgyj_linglong":"玲珑",
            "sgyj_linglong_info":"摸牌阶段，你可以放弃摸牌，改为获得一名其他角色的一张手牌，若如此做，你本回合造成的伤害视为体力流失",
            "sgyj_sidao":"伺盗",
            "sgyj_sidao_info":"当你对一名其他角色连续使用两张牌后，你可获得其区域内的一张牌",
            "sgyj_dujian":"督建",
            "sgyj_dujian_info":"出牌阶段限一次，你可以选择一名角色，若其装备区内的牌为全场最多，其摸X张牌。若其装备区内的牌为全场最少，其弃X张牌。X为该技能对其发动的次数",
            "sgyj_jinzhan":"井战",
            "sgyj_jinzhan_info":"锁定技，出牌阶段，你至多使用四张牌，且无距离限制。当你使用第一张牌，你摸两张牌，第二张时 弃两张牌，第三张时，你回复1点体力，第四张时 你失去2点体力",
            "sgyj_qinnong":"亲农",
            "sgyj_qinnong_info":"结束阶段，你可以摸两张牌或回复1点体力，然后翻面并选择任意名其他角色，这些角色执行：摸两张牌或回复1点体力",
            "sgyj_duntao":"遁逃",
            "sgyj_duntao_info":"每当你受到伤害后，你可以与伤害来源交换所有手牌，然后伤害来源不能指定你为目标",
            "sgyj_xinyan":"信仰",
            "sgyj_xinyan_info":"锁定技 你的回合内，你的【桃】以外基本牌均视为【杀】；你的回合外，你的【桃】以外基本牌均视为【闪】",
            "sgyj_migao":"密告",
            "sgyj_migao_info":"出牌阶段限一次，你可以观看一名角色的手牌，然后将其中一张牌交给另一名角色",
            "sgyj_shishi2":"失势",
            "sgyj_shishi":"失势",
            "sgyj_shishi_info":"锁定技，每当你受到一次伤害后，你须弃置一张牌，你死亡时，你令一名其他角色获得此技能",
            "sgyj_lingyan":"灵炎",
            "sgyj_lingyan_info":"回合外，当你使用或打出一张牌时，若为红色，你对一名角色造成1点火焰伤害",
            "sgyj_yanhuo":"焰火",
            "sgyj_yanhuo2":"焰火",
            "sgyj_yanhuo_info":"锁定技 ，你造成的火属性伤害+1，你受到的火焰伤害改为回复等量体力",
            "sgyj_manshen":"蛮神",
            "sgyj_manshen_info":"限定技，准备阶段你可以弃置所有花色的牌给一张 并跳过判定阶段，摸牌阶段和出牌阶段 然后视为使用三张【南蛮入侵】，若你因此未令一名角色死亡 你死亡",
            "sgyj_shiman":"势蛮",
            "sgyj_shiman_info":"锁定技，【南蛮入侵】对你无效 你的回合内 体力值低于你的角色的【闪】均视为【杀】，体力值高于你的角色的【杀】均视为【闪】",
            "sgyj_manyong":"蛮勇",
            "sgyj_manyong_info":"出牌阶段限X次，你可以失去1点体力，视为使用一张【南蛮入侵】，X为弃牌堆里面【南蛮入侵】的数量 且至少为1",
			"sgyj_zhulian4":"诛连",
			"sgyj_zhulian3":"诛连",
			"sgyj_zhulian2":"诛连",
			"sgyj_zhulian1":"诛连",
			"sgyj_zhulian":"诛连",
            "sgyj_zhulian_info":"锁定技 与你距离1以内的其他角色摸牌或弃牌后，你摸或弃等量的牌；与你距离1以内的角色回复体力或受到伤害后，你回复等量体力或受到等量的伤害。你不能成为距离1以内其他角色使用牌的目标",
            "sgyj_sushou":"束手",
            "sgyj_sushou_info":"锁定技，当你翻面，横置或体力为1时，你的【杀】【闪】均视为【无懈可击】",
            "sgyj_yongxiao":"庸小",
            "sgyj_yongxiao_info":"锁定技，结束阶段，若X<0,你弃置一张手牌或失去1点体力；X>0，你摸X张牌；X>3，你翻面（X为你攻击范围与你此回合出牌阶段使用的牌数之差）",
            "sgyj_gaisi":"丐死",
            "sgyj_gaisi_info":"限定技，其他角色濒死时，你可以弃置装备区里的所有牌，令其回复等量体力",
            "sgyj_zhinao2":"智撓",
            "sgyj_zhinao":"智撓",
            "sgyj_zhinao_info":"每轮限一次，当你获得牌时，你可改为令一名手牌数大于的你的角色获得这些牌，若如此做，该角色此轮不能对你造成伤害",
            "sgyj_wenwu2":"温武",
            "sgyj_wenwu":"温武",
            "sgyj_wenwu_info":"每轮限一次，当你回复体力时，你可以令一名体力小于你的角色回复1点体力。若如此做，该角色此轮不能抵消【杀】",
            "sgyj_guizhang":"珪璋",
            "sgyj_guizhang_info":"锁定技，你受到的锦囊牌伤害-1 ，你受到的火焰伤害视为失去体力，你受到的雷属性伤害无效",
            "sgyj_ciyi":"慈仪",
            "sgyj_ciyi_info":"一名角色与其出牌阶段外使用牌时，你可令其选择除其外的一名角色获得此牌",
            "sgyj_xiangzheng2":"象阵",
			"sgyj_xiangzheng":"象阵",
            //"sgyj_xiangzheng_info":"限定技，出牌阶段 ，你可以弃置所有的“兽”并失去技能【驱兽】，视为你使用了X张【南蛮入侵】（X为你弃置兽的数量且至多为5）",
			//"sgyj_xiangzheng_info":"限定技 锁定技 回合开始时，若你的“兽”达到8张或更多时，你须将体力值调整至1，然后视为你使用了X张【南蛮入侵】，（X为你以此法失去的体力值）以此法你每杀死一名角色后你回复1点体力并摸两张牌",
			"sgyj_xiangzheng_info":"觉醒技，若你的“兽”达到了5张或更多时，你须弃置这些“兽”然后从牌堆（含弃牌堆）中获得所有的【南蛮入侵】",
            "sgyj_qushou2":"驱兽",
            "sgyj_qushou1":"驱兽",
            "sgyj_qushou":"驱兽",
            //"sgyj_qushou_info":"锁定技，每当你使用一张基本牌后，你将其置于武将牌上，称为“兽”，然后摸一张牌；，若你有“兽”当你受到伤害后，伤害来源获得你武将牌上的一张牌，若为红色，你回复1点体力，若为黑色，你对伤害来源造成1点伤害",
			"sgyj_qushou_info":"每当你使用或打出一张基本牌后，你可以将其置于武将牌上，称为“兽”，然后摸一张牌；当你武将牌上有“兽”时每当你受到一次伤害后，伤害来源获得你武将牌上的一张“兽”牌，若为红色，你回复1点体力，若为黑色，你对伤害来源造成1点伤害；若你受到的伤害为火属性伤害，则你失去所有的“兽”标记",
            "sgyj_wuyu":"五狱",
            "sgyj_wuyu_info":"限定技，你濒死时，可以展示牌堆顶的五张牌，你获得其中不同花色的牌各一张牌",
            "sgyj_yueling":"越岺",
            "sgyj_yueling_info":"锁定技，每当你使用黑色牌后，你失去1点体力，每当你使用红色牌后，你令一名其他角色失去1点体力，若其为群势力，你可以改为令其回复1点体力",            
			"sgyj_wupo":"武魄",
            "sgyj_wupo_info":"锁定技，每当你使用【杀】指定目标时/成为其他角色【杀】的目标时，你与对方角色各失去1点体力",
			"sgyj_tengji":"腾疾",
            "sgyj_tengji_info":"出牌阶段，每当你使用一张牌时，若此牌点数等于你此回合使用的牌数，你可以摸一张牌",
			"sgyj_qirang":"祈禳",
            "sgyj_qirang_info":"当你使用一张装备牌时，你可进行一次“观星”，展示并获得其中的锦囊牌，然后将剩余牌以任意顺序置于牌堆顶或牌堆底",
			"sgyj_yuhua":"羽化",
            "sgyj_yuhua_info":"锁定技，弃牌阶段，你的锦囊牌和装备牌不计入手牌数",
            "sgyj_yinli":"隐离",
            "sgyj_yinli_info":"锁定技 当有角色回复体力至上限时/进入濒死状态时 你摸一张牌",
            "sgyj_huijian":"慧见",
            //"sgyj_huijian_info":"奇数回合的准备阶段，你可视为使用任意一张基本牌，偶数回合的准备阶段，你可视为使用任意一张普通锦囊牌",
			"sgyj_huijian_info":"奇数回合的准备阶段，你可令一名角色将任意一张牌当任意基本牌使用，偶数回合的准备阶段，你可令一名角色将任意一张牌当任意锦囊牌使用",
            "sgyj_xuwu":"虚无",
            //"sgyj_xuwu_info":"锁定技 奇数回合 你不能成为【杀】的目标，偶数回合，你不能成为黑色锦囊牌的目标",
			"sgyj_xuwu_info":"锁定技，延时锦囊和属性伤害对你无效",
            //"sgyj_zhanhuo":"斩获",
            //"sgyj_zhanhuo_info":"锁定技，一名其他角色对你造成伤害后，其获得你武将上的一张“剑”牌",
            "sgyj_zhanhuo":"失剑",
            "sgyj_zhanhuo_info":"锁定技，一名其他使用【杀】对你造成伤害后，该角色获得你武将牌上的一张“护剑”牌，然后你翻面。当你失去所有“护剑”牌且你装备区没有武器牌后，你死亡",            
            "sgyj_hujian2":"护剑",
            //"sgyj_hujian2_info":"锁定技，准备阶段，若你的武将牌上有“护剑”武器牌，你将其中一张置于一名角色的装备区（可替换原装备），并摸等同与这张武器攻击范围数量的牌 当你武将上没有牌时，你进入濒死状态",
            "sgyj_hujian2_info":"锁定技，一名角色的出牌阶段开始时，若其装备区没有武器牌，你失去1点体力，然后将一张武器牌置于该角色的装备区内然后摸2X张牌，X为你已损失的体力值。该角色的回合结束时，若你未受到过伤害，你选择增加1点体力上限或恢复1点体力",            
            "sgyj_hujian":"护剑",
            //"sgyj_hujian_info":"锁定技，游戏开始时，将所有武器牌置于你的武将牌上：准备阶段，若你的武将牌上有“护剑”武器牌，你将其中一张置于一名角色的装备区（可替换原装备），并摸等同与这张武器攻击范围数量的牌 当你武将上没有牌时，你进入濒死状态",
            "sgyj_hujian_info":"锁定技，游戏开始时，将所有武器牌置于你的武将牌上；一名角色的出牌阶段开始时，若其装备区没有武器牌，你失去1点体力，然后将一张武器牌置于该角色的装备区内然后摸2X张牌，X为你已损失的体力值。该角色的回合结束时，若你未受到过伤害，你选择增加1点体力上限或恢复1点体力",            
            "sgyj_fangxin":"芳馨",
            "sgyj_fangxin_info":"当你成为【杀】的目标时，你可以获得一名一名其他角色的一张牌，然后其摸一张牌。若如此做，你可以移动场上的一张牌到令一个合理位置，然后减少一点体力上限",
            "sgyj_manhua2":"蛮花",
            "sgyj_manhua":"蛮花",
            "sgyj_manhua_info":"锁定技，当你成为【南蛮入侵】的目标时，对你无效并获得之，然后你于此牌结算完毕后使用此牌。若如此做，你减少一点体力上限 ",
            "sgyj_zuizheng":"罪证",
            "sgyj_zuizheng_info":"出牌阶段限一次，你可以弃置任意张手牌，然后观看一名其他角色的手牌，若如此做，你获得其手牌中所有与你弃置牌相同花色的牌",
            "sgyj_jingwei":"精卫",
            "sgyj_jingwei_info":"隐匿技，你登场后，你可以将当前回合角色场上的一张牌移至另一个合理的区域",
            "sgyj_chanshen2":"缠身",
            "sgyj_chanshen2_info":"防御距离加X（场上被缠身的角色数）",
            "sgyj_chanshen1":"缠身",
            "sgyj_chanshen1_info":"防御距离+1",
            "sgyj_chanshen":"缠身",
            "sgyj_chanshen_info":"限定技，游戏或回合开始时，你可以指定至多四名异性角色为目标，这些角色直到你死亡与其他角色计算距离+1，与你计算距离+X（X为你指定的角色中还存活的人数）",
            "sgyj_nianyu":"年遇",
            "sgyj_nianyu_info":"锁定技，其他角色使用牌指定你为目标时 其手牌区/体力值/装备区 的一个区域少于你，其便须交给你一张牌。否则该牌对你无效",
            "sgyj_xunzi3":"训子",
            "sgyj_xunzi3_info":"每当其弃牌时，你可以令其额外弃置一张牌",
            "sgyj_xunzi2":"训子",
            "sgyj_xunzi2_info":"每当其摸牌时，你可以令其额外摸一张牌",
            "sgyj_xunzi1":"训子",
            "sgyj_xunzi":"训子",
            "sgyj_xunzi_info":"限定技，结束阶段开始时，你可以指定一名男性角色，每当其摸牌时，你可以令其额外摸一张牌；每当其弃牌时，你可以令其额外弃置一张牌",
            "sgyj_huansan2":"涣散",
            "sgyj_huansan":"涣散",
            "sgyj_huansan_info":"锁定技，你的起始手牌为6张，然后你须将三张牌背扣于武将牌上，准备阶段，你须将所有手牌与武将牌上扣置的牌进行交换",
            "sgyj_jingcen":"静嗔",
            "sgyj_jingcen_info":"锁定技，你脱离濒死后，你与当前轮次无法受到普通伤害且受到的伤害值-1",
            "sgyj_yannu":"焰怒",
            "sgyj_yannu_info":"每当你使用或打出一张基本牌后，你可以令一名其他角色选择一项：1，弃置一张不同的基本牌，2.受到1点火焰伤害",
            "sgyj_changcuan":"残喘",
            "sgyj_changcuan_info":"锁定技 当你进入或脱离濒死时，你摸2张牌",
            "sgyj_beiai2":"悲哀",
            "sgyj_beiai2_info":"锁定技，你受到和造成伤害时，伤害+1，你摸牌和弃牌时，牌数+1",
            "sgyj_beiai":"悲哀",
            "sgyj_beiai_info":"锁定技，你受到和造成伤害时，伤害+1，你摸牌和弃牌时，牌数+1",
            "sgyj_zuoshu2":"佐述",
            "sgyj_zuoshu2_info":"出牌阶段结束后，你可以令手牌数最少的角色使用一张牌",            
            "sgyj_zuoshu":"佐述",
            "sgyj_zuoshu_info":"摸排阶段结束时，你可以令一名手牌数最少的角色摸一张牌；出牌阶段结束后，你可以令手牌数最少的角色使用一张牌",
            "sgyj_jiezang":"节葬",
            "sgyj_jiezang_info":"锁定技，杀死你的角色手牌上限变为0 直到游戏结束",
            "sgyj_kuangao":"狂傲",
            //"sgyj_kuangao_info":"锁定技，当你连续受到同一名角色红色的【杀】造成伤害后，你令此伤害+1，直到游戏结束",
			"sgyj_kuangao_info":"锁定技，当你连续成为同一名角色红色牌的目标后，若此牌为【杀】你失去1点体力",
            "sgyj_luanzhan":"乱战",
            "sgyj_luanzhan_info":"锁定技，结束阶段，若你的体力值不是全场最少，你失去1点体力并摸x(你当前的体力值)张牌，然后将手牌调整至当前体力值的张数，若你弃置的牌大于你的体力值则你对随机一名角色造成1点伤害，若为你，你摸X张牌(X为你当前的体力值），然后你重复此流程 直到你变成全场体力值最少或1为止.若你重复此流程3次或更多流程结束后直接进入弃牌阶段",            
            "reqiaomeng2":"趫猛",
			"sgyj_mili":"迷离",
            //"sgyj_mili_info":"当你成为【杀】或伤害锦囊的目标时，你可以废掉自己的一个装备栏，然后令伤害来源直接进入弃牌阶段。当你废掉所有的装备栏之后，你获得如下效果：你不能成为手牌数大于你的角色使用【杀】，【过河拆桥】和【顺手牵羊】的目标；你使用牌无距离限制",
            //"sgyj_mili_info":"当你成为其他角色的一张牌的目标时，你可以废除自己的一个装备栏，使此牌对你无效，然后此牌的使用者不能再指定你为目标直到回合结束。当你废除了所有装备栏，你不能成为距离1以内角色回合内使用牌的目标，你使用[杀]无次数限制和距离限制",
            "sgyj_mili_info":"当你成为其他角色牌的目标时，你可以废除自己的一个装备牌，然后摸一张牌，并令此牌对你无效，然后此牌的使用者不能再指定你为目标直到回合结束。当你废除所有装备栏后，你增加1点体力上限且直到游戏结束，你不能成为距离1以内角色仅指定你为目标牌的目标",
			"sgyj_rehuaquan":"花拳",
            "sgyj_rehuaquan_info":"出牌阶段，每当你使用的牌与上上张使用的牌花色不相同时，结算完毕进入弃牌堆时，你可以将其交给一名其他角色，然后你摸一张牌",
            "sgyj_huaquan":"花拳",
            "sgyj_huaquan_info":"锁定技，每当你的手牌出现四种不同花色时，你须展示并弃置所有手牌，然后摸4张牌，若你弃置的牌为4X，则你对一名其他角色造成X点伤害。(X为倍数)",            
            //"sgyj_moquan":"末权",
            //"sgyj_moquan_info":"锁定技，当你脱离濒死后 你的体力上限变减半（且至少为1），然后体力回复至体力上限。你的手牌上限等于体力上限",
			"sgyj_yizhu":"移族",
            //"sgyj_yizhu_info":"锁定技，游戏开始时，你获得6点护甲，你的手牌上限+X（X为你当前的护甲值）。你的护甲值至多为9。当你失去所有护甲时，体力值大于你的角色对你造成的普通伤害无效，你使用的【杀】无距离限制且不能被抵消",
			"sgyj_yizhu_info":"锁定技，游戏开始时，你获得6点护甲，你的手牌上限+X，（X为你当前的护甲值），你的护甲至多为8，当你失去所有护甲后，体力值大于你的角色对你使用的普通【杀】无效，你对体力值大于你的角色使用的普通【杀】不可被闪避",
            "sgyj_quanlu":"权戮",
            "sgyj_quanlu_info":"每回合限一次，当其他角色的体力值于其回合内发生变化时，若其手牌数不大于你，则你可以弃置一张牌，对其造成1点伤害",
            "sgyj_qinchao3":"倾朝",
            //"sgyj_qinchao3_info":"当其他角色于你的回合内使用牌结算后，或当你于其他角色的回合内使用牌结算后，你可以与其各回复或各失去1点体力。若其在你攻击范围内，则你本回合对其使用牌无次数限制",
            "sgyj_qinchao3_info":"当其他角色于你的回合内使用牌结算后，或当你于其他角色的回合内使用牌结算后，你可以选择其中一项，1，失去1点护甲，对其造成1点伤害。2，增加1点护甲令其回复1点体力；若其在你攻击范围内，则你本回合对其使用牌无次数限制和距离限制",
			"sgyj_qinchao":"倾朝",
            //"sgyj_qinchao_info":"当其他角色于你的回合内使用牌结算后，或当你于其他角色的回合内使用牌结算后，你可以与其各回复或各失去1点体力。若其在你攻击范围内，则你本回合对其使用牌无次数限制",
			//"sgyj_qinchao_info":"当其他角色于你的回合内使用牌结算后，或当你于其他角色的回合内使用牌结算后，你可以选择各失去1点体力或各增加1点护甲",
			"sgyj_qinchao_info":"当其他角色于你的回合内使用牌结算后，或当你于其他角色的回合内使用牌结算后，你可以选择其中一项，1，失去1点护甲，对其造成1点伤害。2，增加1点护甲令其回复1点体力；若其在你攻击范围内，则你本回合对其使用牌无次数限制和距离限制",
            "sgyj_qiaoshou":"巧手",
            "sgyj_qiaoshou_info":"出牌阶段限一次 你使用锦囊牌对目标造成伤害时，你可以防止此伤害 然后令其跳过下一个回合的摸牌阶段或出牌阶段",
            "sgyj_qiaoxie":"巧械",
            "sgyj_qiaoxie_info":"锁定技，游戏开始时，将【木牛流马】【八卦阵】【诸葛连弩】置入你的装备区，你装备区里的牌不能成为其他角色使用牌的合理目标。你的手牌上限+X(你的装备区的牌数)",
            "sgyj_xiujing2":"绣锦",
            "sgyj_xiujing2_info":"一名角色的结束阶段，若该角色在回合内因使用，打出，弃置的牌不少于四种花色，你可以依次选择各种花色的牌各一张，然后交给任意名角色",
            "sgyj_xiujing1":"绣锦",
			"sgyj_xiujing":"绣锦",
            "sgyj_xiujing_info":"一名角色的结束阶段，若该角色在回合内因使用，打出，弃置的牌不少于四种花色，你可以依次选择各种花色的牌各一张，然后交给任意名角色",            
            "sgyj_miji2":"秘计",
            "sgyj_miji2_info":"准备阶段，若你未受伤，你可以失去1点体力，视为使用任意一张普通锦囊牌",
            "sgyj_miji":"秘计",
            "sgyj_miji_info":"准备阶段，若你未受伤，你可以失去1点体力，视为使用任意一张普通锦囊牌；结束阶段，若你已受伤，你可以摸X张牌（X为你已损失的体力值），然后你可以将等量的手牌交给其他角色",
            "sgyj_wuqian":"无前",
			"sgyj_wuqian_info":"出牌阶段，你可以弃2枚“暴怒”标记并选择一名其他角色，然后直到回合结束，你获得如下效果 你获得技能“无双”你令其防具无效，你对其伤害时，你可以弃2“暴怒”标记令伤害+1",			
            "sgyj_santang":"散堂",
            "sgyj_santang_info":"结束阶段，你可以选择除你之外手牌数最少的一名角色，然后你展示一张手牌，从该角色开始，每有一名交给你一张与你展示牌花色均不相同的手牌，该角色摸两张牌。若此时你已受伤，则你可以再次展示所有手牌，然后，你可以选择弃置一张【桃】【酒】或【桃园结义】，然后恢复1点体力",
			"sgyj_quhan":"祛寒",
            "sgyj_quhan_info":"出牌阶段，你可以展示一名其他角色1～X张牌，然后你须弃置一张与你展示的牌中花色相同的一张手牌，令其恢复1点体力。若你无法弃置牌，则本回合此技能失效。X为该角色已损失的体力值",
            "sgyj_zhanbu2":"占卜",
            "sgyj_zhanbu1":"占卜",
            "sgyj_zhanbu":"占卜",
            "sgyj_zhanbu_info":"回合开始时，你可令1+X名角色进行一次判定，若为红色，其下个摸牌阶段多摸1张牌且下个回合手牌上限+1；若为黑色，下个摸牌阶段少摸一张牌且下个回合的手牌上限-1（X为你当前装备区的装备数）",
            "sgyj_maidu":"埋毒",
            "sgyj_maidu_info":"锁定技，你的回合内，其他角色的判定牌均视为黑桃花色",
            "sgyj_shenyou":"神佑",
            "sgyj_shenyou_info":"锁定技，你的判定牌均视为红桃花色",
            "sgyj_tanbei":"贪狈",
            "sgyj_tanbei_info":"出牌阶段限一次，你可以令1名其他角色选择一项，然后你可以指定令一名其他角色选择另外一项：1. 令你随机获得其区域内的一张牌；此回合不能再对其使用牌；2. 令你此回合对其使用牌没有次数和距离限制。若你因此指定了两名角色，你失去1点体力上限",
            "sgyj_bozhong":"播种",
            "sgyj_bozhong_info":"准备阶段或结束阶段，你可以弃置所有手牌并失去一点体力上限，然后视为你使用一张【五谷丰登】，若你以此法弃置了所有花色的牌，则你回复1点体力，若你以此法弃置了所有类别的牌，则你增加1点体力上限",
            "sgyj_shiliang":"施粮",
            "sgyj_shiliang_info":"当你因【五谷丰登】获得牌后，你可以将其中任意张牌交给任意名角色",
            "sgyj_shouhuo":"收获",
            "sgyj_shouhuo_info":"锁定技，所有角色使用的五谷丰登改为：出牌阶段，对你使用。你从牌堆亮出等同于初始游戏时的人数数量的牌，然后你获得这些牌",            
            "sgyj_zhaoyue":"照月",
            "sgyj_zhaoyue_info":"锁定技，当你体力值为2或更低时，其他角色指定你为目标的黑色牌无效；当你体力值为1或更低时，你使用红色的牌时无距离限制和次数限制，若为红桃牌，可以额外结算一次",
            "sgyj_qinying":"轻盈",
            "sgyj_qinying_info":"一名角色在其回合内令你获得牌后，你可以令当前回合角色摸一张牌，每名角色回合内限一次",
            "sgyj_heshen":"合身",
            //"sgyj_heshen_info":"锁定技，你的手牌上限始终为20(存活角色低于4时改为12)",
			"sgyj_heshen_info":"锁定技，你的手牌上限始终为20(存活角色低于4时改为12)",
            "sgyj_litou":"离头",
            //"sgyj_litou_info":"当你濒死状态时，你可以弃置一张牌回复至上限",
			"sgyj_litou_info":"当你濒死状态时，你可以弃置一张牌回复至上限",
            "sgyj_yuanxing2":"缓行",
            "sgyj_yuanxing2_info":"当你造成或受到伤害时，你可以扣除1点体力上限，令此次效果+1或－1",
            "sgyj_yuanxing":"缓行",
            "sgyj_yuanxing_info":"当你造成或受到伤害时，你可以扣除1点体力上限，令此次效果+1或－1",
            "sgyj_chihu":"迟胡",
            "sgyj_chihu_info":"锁定技，回合外，当你连续成为同名称牌的目标时，取消之",
            "sgyj_zhengjiang2":"震疆",
            "sgyj_zhengjiang":"震疆",
            "sgyj_zhengjiang_info":"每回合限一次，当你对其他角色造成伤害后，你可以获得该角色的一张牌，然后摸X张牌，并将等量的牌置于该角色的武将牌上成为“缓”(X为该角色的体力上限且至多为5)，若比如做，该角色的回合开始获得武将牌上的所有“缓”，并跳过摸牌阶段",
            "sgyj_manyi":"蛮奕",
            "sgyj_manyi_info":"锁定技，其他角色成为一张锦囊牌的目标时，若指定目标中含有你且结算人数不小于3，你替这些角色成为该牌的目标，然后若你因此受到的伤害大于5（存活人数小于5是改为3），则你获得此锦囊对应的所有实体牌",
            "sgyj_zhichi":"智迟",
            "sgyj_zhichi_info":"结束阶段开始时，你可以失去1点体力，若如此做，你无法成为【杀】和非延时类锦囊的目标直到你下回合开始",
			"sgyj_mingce":"明策",
            "sgyj_mingce_info":"出牌阶段限一次，你可以令一名其他角色对你指定的一名角色使用一张【杀】，若其如此做，你与其各摸一张牌。否侧，你与其各弃一张牌",
			"sgyj_hongyan":"红颜",
            "sgyj_hongyan_info":"锁定技，每当你受到男性角色造成的一次伤害时，其须交给你一张红桃牌，否则防止此伤害", 
			"sgyj_tianxiang":"天香",
            "sgyj_tianxiang_info":"出牌阶段限一次，你可以弃置任意数量的红桃牌并选择一项：1，对你距离1以内一名其他角色造成X点伤害；2，对至多X名其他角色各造成1点伤害。X为你弃置的牌数，然后受伤的角色摸等同于其已损失的体力值数量的牌", 
			"sgyj_fanjian":"反间",
            "sgyj_fanjian_info":"出牌阶段限一次，你可以将任意数量的手牌交给一名其他角色，然后其选择一项：1，受到等量的伤害；2，将武将牌翻面；3，交给你所有手牌", 
			"sgyj_jinghong":"敬鸿",
            "sgyj_jinghong_info":"每当你受到伤害时，你可以弃置X张牌防止之，X为你当前的体力值，你以此法每弃置一张黑色牌，你便摸一张牌", 
			"sgyj_yiyong":"义勇",
            "sgyj_yiyong_info":"锁定技，根据你武将牌上的牌数量你获得如下效果：1.为0，黑色非延时锦囊对你无效；2.为1，摸牌阶段你多摸一张牌且每回合你多使用一张【杀】；3.大于1，你的手牌上限+1且每回合你使用的首张【杀】不能被【闪】响应", 
			"sgyj_zhengjun6":"镇军",
			"sgyj_zhengjun5":"镇军",
			"sgyj_zhengjun4":"镇军",
			"sgyj_zhengjun3":"镇军",
			"sgyj_zhengjun2":"镇军",
			"sgyj_zhengjun":"镇军",
            "sgyj_zhengjun_info":"结束阶段或当每轮你第一次受到伤害时，你可以将其他角色区域内一张牌置于你的武将牌上；你可将武将牌上的牌当【闪】或【无懈可击】使用", 
			"sgyj_jienu":"竭驽",
            "sgyj_jienu_info":"回合开始时，你可跳过摸牌阶段，随后亮出牌堆顶五张牌，你可视为使用其中的【杀】，以此法的【杀】无视距离且不计入次数限制", 
			"sgyj_fengyin":"丰盈",
            "sgyj_fengyin_info":"当你成为一名异性角色使用牌的目标后，若你的手牌数小于体力上限值，将其补至体力上限值；若你的体力值小于手牌数，可将体力值恢复至手牌数（不得超出上限）", 
			"sgyj_congmin":"聪敏",
            "sgyj_congmin_info":"出牌阶段，当你使用了两张牌后，你可以用前两张牌的点数列举出一个四则运算式，然后再弃置一张能成为该计算结果的牌，若如此做视为你使用了任意一张普通锦囊牌", 
			"sgyj_yashidraw":"雅识",
			"sgyj_yashidraw_info":"出牌阶段限一次，你可以令一名其他角色展示其所有手牌并弃置其中一种花色的所有牌，然后该角色摸两张牌，若如此做，本回合内每当你使用此花色的牌时，你可以弃置所有手牌并回复1点体力",			
			"sgyj_yashi":"雅识",
            "sgyj_yashi_info":"出牌阶段限一次，你可以令一名其他角色展示其所有手牌并弃置其中一种花色的所有牌，然后该角色摸两张牌，若如此做，本回合内每当你使用此花色的牌时，你可以弃置所有手牌并回复1点体力",
			"sgyj_chuchu":"楚楚",
            "sgyj_chuchu_info":"出牌阶段内，若以本回合使用的牌包含至少3种花色，你可以将【雅识】修改为出牌阶段限两次",
			"sgyj_huashang":"华殇",
            "sgyj_huashang_info":"出牌阶段限一次，你可以弃置你手牌中的所有基本牌，你弃置的牌数量为：1，你重铸两张牌；2，你对一名其他角色造成1点伤害；3，你令一名角色翻面：4，你摸两张牌并令一名其他角色回复一点体力",
			"sgyj_shenxian":"甚贤",
            "sgyj_shenxian_info":"每名其他角色的回合限一次，当其他角色因弃置而失去基本牌后，你可以摸一张牌或获得其中的基本牌",			
			"sgyj_ezhan":"恶战",
            "sgyj_ezhan_info":"锁定技，出牌阶段，若你的体力值发生变化。你可多使用一张〔杀〕，且你于本回合造成的第一次伤害为基础伤害加你已损失的体力值之和，弃牌阶段若你造成过伤害你回复一点体力", 
			"sgyj_sidou2":"死斗",
            "sgyj_sidou2_info":"锁定技，准备阶段你移除所有的‘血’并扣除相对应的体力", 
			"sgyj_sidou":"死斗",
            "sgyj_sidou_info":"锁定技，回合外，你受到伤害时你防止之。伤害结算后你获得等同于伤害数量的标记将之置于武将牌旁称为‘血’，准备阶段你移除所有的‘血’并扣除相对应的体力",
			"sgyj_qexi2":"彻袭",
            "sgyj_qexi2_info":"当你使用杀造成伤害时，可以防止此伤害，改为获得目标的所有手牌",
			"sgyj_qexi":"彻袭",
            "sgyj_qexi_info":"你使用【杀】指定目标时，你可以令其摸至多两张牌，然后你对其造成伤害时，可以防止此伤害，改为获得其所有手牌",
			"sgyj_chiyuan2":"驰援",
            "sgyj_chiyuan2_info":"你的攻击范围+1，于此阶段结束时，其使用【杀】/【过河拆桥】时可以额外指定因驰援进入攻击范围内的一名角色为目标",
			"sgyj_chiyuan":"驰援",
            "sgyj_chiyuan_info":"一名角色出牌阶段开始时，你可以弃置其一张牌令其攻击范围+1，于此阶段结束前，其使用【杀】/【过河拆桥】时可以额外指定依此法进入其攻击范围内的一名角色为目标",
			"sgyj_fuyin":"父荫",
            "sgyj_fuyin_info":"若你“观星”的牌包含了所有花色或所有类别的牌，你可以获得所有“观星”的牌",
            "sgyj_qiyuan":"祈愿",
            "sgyj_qiyuan_info":"以下情况，你可以进行一次“观星”:游戏开始时，牌堆洗牌时，你受到伤害时，你造成伤害时，你濒死时",
            "sgyj_yinhuo":"引祸",
            "sgyj_yinhuo_info":"锁定技，其他角色使用黑色【杀】时，若你不为目标，你视为此牌的使用者",
            "sgyj_guiye":"归夜",
            "sgyj_guiye_info":"结束阶段开始时，你可以将体力和手牌回复至体力上限。你以此法每回复1点体力便摸一张牌，若如此做，将你的武将牌翻面",
            "sgyj_yide":"义德",
            "sgyj_yide_info":"出牌阶段开始时，你可以获得一名其他角色一张牌，若如此做，你{独居}结算中的“+”改为“-”直到你下个回合开始",
            "sgyj_duju":"独居",
            "sgyj_duju_info":"锁定技，你与其他角色计算距离时，互相+2",
            "sgyj_dizhong":"敌眾",
            "sgyj_dizhong_info":"你的回合外，你失去牌后，可以收回之，你不可重复收回同一张牌直到洗牌",
            "sgyj_wuguan2":"武冠",
            "sgyj_wuguan2_info":"锁定技，你始终跳过摸牌阶段和弃牌阶段，回合开始阶段和回合结束阶段，你须弃置所有手牌，然后摸4张牌",
            "sgyj_wuguan":"武冠",
            "sgyj_wuguan_info":"锁定技，你始终跳过摸牌阶段和弃牌阶段，回合开始阶段和回合结束阶段，你须弃置所有手牌，然后摸4张牌",
            "sgyj_ziru":"自如",
            "sgyj_ziru_info":"锁定技，你造成伤害时、受到伤害时、回复体力时，基数均翻倍",
            "sgyj_yanmu":"仰慕",
            "sgyj_yanmu_info":"每当一名角色于回合外回复体力后，你可以令当前回合的角色摸一张牌",
            "sgyj_fenshu1":"焚书",
            "sgyj_fenshu1_info":"你无法回复体力直到你失去所有手牌",
            "sgyj_fenshu":"焚书",
            "sgyj_fenshu_info":"出牌阶段限一次，你可以弃置一名已受伤的其他角色一张手牌，令其回复1点体力。若如此做，其无法回复体力直到其失去所有手牌",
            "sgyj_juzu2":"聚卒",
            "sgyj_juzu2_info":"每当目标使用一张【闪】后，你可以摸一张牌",            
            "sgyj_juzu":"聚卒",
            "sgyj_juzu_info":"每当你使用【杀】指定目标后，你可以令可以攻击到其的所有其他角色依次选择是否对其使用【杀】，若如此做，每当目标使用一张【闪】后，其可以摸一张牌",
            "sgyj_juyi2":"举义",
            "sgyj_juyi2_info":"你的攻击范围+1",
            "sgyj_juyi":"举义",
            "sgyj_juyi_info":"限定技，出牌阶段开始时，你可以展示一张手牌，令所有其他角色依次展示一张手牌，每有一张与你展示牌同颜色的牌，你增加1点体力上限，回复1点体力摸一张牌并永久获得以下效果，你的攻击范围+1",
            "sgyj_xinyan":"信仰",
            "sgyj_xinyan_info":"锁定技：你的回合内，你的【桃】以外的基本牌均视为【杀】，你的回合外，你的【桃】以外的基本牌均视为【闪】",
            "sgyj_hunchan4":"魂蝉",
			"sgyj_hunchan3":"魂蝉",
			"sgyj_hunchan2":"魂蝉",           
			"sgyj_hunchan":"魂蝉",
            "sgyj_hunchan_info":"结束阶段，若你此回合对至少一名男性角色造成过伤害，你可在此阶段结束后，进行一个额外的回合，然后你可以重复此流程 你每重复一次此流程 你下一个回合对男性角色造成的伤害+1。当你连续发动二次“魂蝉”后 你将武将牌翻面",
            "sgyj_baiyue":"拜月",
            "sgyj_baiyue_info":"回合结束阶段开始时，你可以弃置所有手牌，然后摸等同于你弃置两倍数量的牌",
            "sgyj_xueyou":"血佑",
            "sgyj_xueyou_info":"回合结束阶段 若你的体力为全场最少的角色（或之一）时，你选择增加1点体力上限或恢复1点体力",            
            "sgyj_bihuo":"避祸",
            "sgyj_bihuo_info":"锁定技，当你一次受到2点或更多伤害后，你减少1点体力上限并摸X张牌，X为你游戏中发动“避祸”的次数",
            "sgyj_guxia":"孤煞",
            "sgyj_guxia_info":"觉醒技，回合开始阶段，若你为全场体力值最少的角色（或之一），你增加1点体力上限并获得“血佑”：回合结束阶段 若你的体力为全场最少的角色（或之一）时，你选择增加1点体力上限或恢复1点体力",
            "sgyj_siluan":"肆乱",
            "sgyj_siluan_info":"一名男性角色的准备阶段开始时，你可以获得其一张牌，然后其此回合对你使用的牌不限距离和次数",
            "sgyj_tonghuan2":"铜环",
            "sgyj_tonghuan":"铜环",
            "sgyj_tonghuan_info":"每当你回复体力后，你可以弃一张牌令一名与你体力值相同的其他角色失去1点体力；每当你受到伤害后，你可以摸一张牌令一名与你体力值相同的其他角色回复1点体力",
            "sgyj_buqu":"不屈",
            "sgyj_buqu_info":"锁定技，当你处于濒死状态时，你失去1点体力上限，然后体力恢复至1点并摸两张牌",
            "sgyj_zhanxing":"斩星",
            "sgyj_zhanxing_info":"其他角色获得你的牌后，或你获得其他角色的牌后，获得牌的角色可以使用一张【杀】。此【杀】的伤害等于目标角色的当前体力值",
            "sgyj_zhaozhao":"昭昭",
            "sgyj_zhaozhao_info":"每当你使用或打出一张基本牌后，你可以将此牌交给一名其他角色，若其以此法获得过牌，其须弃置一张牌",
            "sgyj_ranshang":"燃殇",
            "sgyj_ranshang_info":"锁定技，【南蛮入侵】【万箭齐发】对你无效，当你受到1点火焰伤害，防止此伤害改为获得一枚“燃”标记，结束阶段。你须移除所有的“燃”标记，然后失去等量的体力上限",            
            "sgyj_hundun":"混沌",
            "sgyj_hundun_info":"回合开始时或回合结束时，你可以替换你的性别",
            "sgyj_longyang":"龙阳",
            "sgyj_longyang_info":"你可以将两张点数相同的手牌当做任意一张普通锦囊牌使用，若你以此法使用了相同名称的普通锦囊牌，你失去“龙阳”直到你下一个回合开始",
			//"sgyj_longyang_info":"出牌阶段，你可以将两张点数相同的手牌当做任意一张你本回合未使用过的普通锦囊牌使用",
            "sgyj_duanxiu":"断袖",
            "sgyj_duanxiu_info":"出牌阶段开始时，你可以与一名其他角色交换当前所有手牌，若此时：你与其手牌相同，你与其各摸一张牌；你的手牌数大于你的体力上限，你失去1点体力；你的手牌数小于其（不得超过5），你将手牌摸至5张",
            //"sgyj_duanxiu_info":"出牌阶段开始时，你可以和一名其他角色交换手牌，然后若你们手牌数相同，你可以与其各摸一张牌。你与其交换的手牌差不得大于X （X为你与其当前体力值之差）",
			"sgyj_beitai":"卑态",
            "sgyj_beitai_info":"游戏开始时，你增加X点体力上限并回复X点体力，然后摸X张牌（X为场上存活的角色数）；你的体力上限至多为10，场上每有一名角色死亡后，你扣除1点体力上限",
            "sgyj_qiman2":"奇蛮",
            "sgyj_qiman1":"奇蛮",
            "sgyj_qiman":"奇蛮",
            //"sgyj_qiman_info":"锁定技，【南蛮入侵】对你无效。任意角色使用【南蛮入侵】指定了包含你在内的3名以上的目标时，你指定其中的一名角色跳过对其的结算",
			"sgyj_qiman_info":"【南蛮入侵】对你无效，你使用的【南蛮入侵】的结算方式改为交给你一张基本牌",
            "sgyj_feidao":"飞刀",
            "sgyj_feidao_info":"出牌阶段，你可以弃置任意张基本牌，并指定你攻击范围内的X名角色，视为分别对其使用了一张【杀】(X为你弃置的基本牌数量)",
            "sgyj_xianiv":"侠女",
            "sgyj_xianiv_info":"觉醒技，回合开始时，若你是场上唯一的吴势力角色，你须减1点体力上限，然后获得技能“奇袭”",
            "sgyj_jinfan":"锦帆",
            "sgyj_jinfan_info":"摸牌阶段摸牌时，你可以额外摸X-1张牌，X为你装备区的牌的数量",
            "sgyj_shuangjiao2":"双娇-方片",
			"sgyj_shuangjiao1":"双娇-红桃",
			"sgyj_shuangjiao":"双娇",
            //"sgyj_shuangjiao_info":"出牌阶段限两次，你可将一张红色牌交给一名其他角色，若该角色为男性，你选择回复一点体力或摸两张牌，若为女性，你摸一张牌",
            //"sgyj_shuangjiao_info":"出牌阶段红色的花色各限一次，你可以交给一名男性角色一张红色牌，若为红桃，你回复1点体力 其摸两张牌，若为方片你摸两张牌 其回复1点体力",  
			"sgyj_shuangjiao_info":"出牌阶段每种花色各限一次：1、你可以交给一名男性角色一张红桃牌，然后你摸两张牌，其回复1点体力；2、你可以交给一名男性角色一张方片牌，然后其视为对攻击范围内的一名角色使用了一张【杀】", 
            "sgyj_lianji":"连击",
            "sgyj_lianji_info":"锁定技，你使用杀时可额外指定一名目标",
            "sgyj_wuyi":"武艺",
            "sgyj_wuyi_info":"锁定技，回合内你使用杀的次数上限+1",
            "sgyj_shuangfei":"双飞",
            "sgyj_shuangfei_info":"出牌阶段开始时，你可选择获得技能“武艺”或“连击”，直接回合结束",
            "sgyj_yihui2":"疑慧",
            "sgyj_yihui":"疑慧",
            "sgyj_yihui_info":"每名角色的回合给限一次，你可以将一张奇数牌当基本牌使用或将一张偶数牌当【无懈可击】使用",
            "sgyj_doukou":"豆蔻",
            "sgyj_doukou_info":"摸牌阶段，你可以放弃摸牌，然后展示牌堆頂的2+X张牌，X为你已损失的体力值，你可以选择：获得其中的所有奇数牌/偶数牌，然后将其余的牌交给一名其他角色",
            "sgyj_zexu":"择婿",
            "sgyj_zexu_info":"出牌阶段限一次，你可弃置一张牌，令两名其他男性角色进行拼点，你可与赢的一方各自选择回复一点体力或摸两张牌",
            "sgyj_kuishu":"餽淑",
            //"sgyj_kuishu_info":"每当你失去装备区的牌时，你可将这些牌交给一名其他角色",
			"sgyj_kuishu_info":"每当你失去装备牌后，你可以将这些牌置于一名其他角色的装备区（替换原装备），然后你摸X张牌（X为你以此法失去的装备数）",
            "sgyj_langyi":"狼裔",
            "sgyj_langyi_info":"锁定技，若你使用杀的花色为：<li>黑桃：此杀造成伤害后，你横置目标的武将牌<li>红桃：此杀造成伤害后，你回复一点体力<li>梅花：此杀没次数限制<li>方片：此杀无距离限制且无法闪避",
			"sgyj_sandao":"三刀",
            "sgyj_sandao_info":"锁定技，你始终跳过出牌阶段并视为对任意一名角色使用了三张无视距离【杀】，此法每造成1次伤害，你回复1点体力并摸1张牌；每被抵消一次你弃置一张牌（不足改为失去1点体力）",
			"sgyj_hanjiang":"悍将",
            "sgyj_hanjiang_info":"出牌阶段开始时，你可以指定你攻击范围一名其他角色。其每满足下面一项视为对其使用了一张【杀】:1目标的体力值不小于你，2目标的手牌数不小于你，3目标的攻击范围不小于你。然后你弃置X张手牌，X为你当前的体力值且至少为1。若如此做，你不能使用【杀】和锦囊牌直到回合结束",
			"sgyj_xuejiao":"血缴",
            "sgyj_xuejiao_info":"出牌阶段开始时，你可以指定你攻击范围内的一名其他角色 视为对其使用一张【杀】然后你失去1点体力上限 此【杀】造成伤害后 若其体力上限不小于你  ，你可以选择 回复1点体力或增加1点体力上限",
			"sgyj_congyi":"从一",
            "sgyj_congyi_info":"锁定技，每当你摸牌阶段摸牌时、弃牌阶段弃牌时、回复体力、失去体力、造成伤害、受到伤害时，数值均改为1",
            "sgyj_yuyun":"玉陨",
            "sgyj_yuyun_info":"锁定技，当你失去最后一张手牌时，你翻面，然后将手牌补至体力上限",
            "sgyj_yunyu":"云雨",
            "sgyj_yunyu_info":"当你翻面后，你可令一名男性角色翻面，若此时你与该角色状态相同（包括翻面状态、是否受伤），你与其各回复一点体力",
			"sgyj_hongwu":"红舞",
            "sgyj_hongwu_info":"锁定技 当场上有男性角色存活时 你的红色基本牌不计入手牌上限，你对男性角色使用【杀】造成的伤害始终+1。男性角色对你使用【杀】造成的伤害始终-1",
            "sgyj_yinzhuo":"饮灼",
            "sgyj_yinzhuo_info":"任意角色弃牌阶段弃牌时 若此阶段弃置的牌均为同一种颜色且不少于两张时 你可以选择令其恢复1点体力或对其造成1点伤害",
            "sgyj_conggui":"宠贵",
            "sgyj_conggui_info":"锁定技 你不能成为过河拆桥和顺手牵羊的目标。体力值大于你的角色对你造成的非属性伤害无效",            
            "df_fushang":"扶伤",
            "df_fushang_info":"当一名角色进入濒死状态时，你可以将与对其造成伤害的该牌同花色的‘杏’当【桃】对其使用，然后其可以将一张牌当“杏”置于你的武将牌上",
            "df_zhixin":"植杏",
            "df_zhixin_info":"锁定技 回合开始时，你摸一张牌，然后将一张牌置于你的武将牌上，成为‘杏’；摸牌阶段，若你有红色的“杏”，你多摸一张牌",
            "zzj_zuotang2":"坐堂",
            "zzj_zuotang2_info":"其他角色的出牌阶段限一次 该角色可以正面朝上交给你任意张手牌，然后你正面朝上交给其任意张手牌，若你与其正面朝上的牌中有四种花色 则其可以回复1点体力",            
            "zzj_zuotang":"坐堂",
            "zzj_zuotang_info":"其他角色的出牌阶段限一次 该角色可以正面朝上交给你任意张手牌，然后你正面朝上交给其任意张手牌，若你与其正面朝上的牌中有四种花色 则其可以回复1点体力",
            "zzj_caifang":"採方",
            "zzj_caifang_info":"出牌阶段限一次 你可以重铸你的任意张梅花牌，然后你展示以此法获得的牌，若其中有梅花牌 你可以摸一张牌或回复1点体力",
            "jp_guyao":"蛊药",
            "jp_guyao_info":"出牌阶段开始时，你可弃置一名其他角色的一张手牌，然后出牌阶段结束时，若你本回合未使用过与此牌花色相同的牌，你选择一项：失去一点体力；令其回复一点体力",
            "jp_lieyi":"烈医",
            "jp_lieyi_info":"锁定技，当你对其他角色使用桃时，若其曾对你造成过伤害，你改为令其失去一点体力，然后其摸一张牌",
		    "sanguoyijuan":"三国遗卷",		
            },
			};
       if(lib.device||lib.node){
				for(var i in sanguoyijuan.character){sanguoyijuan.character[i][4].push('ext:三国遗卷/'+i+'.jpg');}
			}else{
				for(var i in sanguoyijuan.character){sanguoyijuan.character[i][4].push('db:extension-三国遗卷:'+i+'.jpg');}
			}
			return sanguoyijuan;
		});		
		lib.config.all.characters.push('sanguoyijuan');		
		if(!lib.config.characters.contains('sanguoyijuan')) lib.config.characters.remove('sanguoyijuan');
		lib.translate['sanguoyijuan_character_config']='三国遗卷';		     
      
	 
				
};
},help:{
    "三国遗卷":"滚滚长江东逝水，浪花淘尽英雄。是非成败转头空。青山依旧在，几度夕阳红。白发渔樵江渚上，惯看秋月春风。一壶浊酒喜相逢。古今多少事，都付笑谈中",
},config:{
       
	"xinwanglang":{
     name:"新王朗",
    "intro":"开启后重启游戏生效。略微修改王朗的激词技能",
    init:false
	}, 	
	"xinwangrong":{
     name:"新王荣",
    "intro":"开启后重启游戏生效。略微修改王荣的吉境技能",
    init:false
	}, 	
    "xincaojie":{
     name:"新曹节",
    "intro":"开启后重启游戏生效。略微修改曹节的守玺技能",
    init:false
	}, 	
	"xinrehuaxiong":{
     name:"新华雄",
    "intro":"开启后重启游戏生效。略微修改华雄的耀武技能",
    init:false
	}, 	
	"xinjiaxu":{
     name:"新贾诩",
    "intro":"开启后重启游戏生效。略微修改贾诩的乱舞技能",
    init:false
	}, 
	"xinlijue":{
     name:"新李傕",
    "intro":"开启后重启游戏生效。略微修改李傕的亦算技能",
    init:false
	}, 	
    "xinlixun":{
     name:"新李肃",
    "intro":"开启后重启游戏生效。略微修改李肃的利熏技能",
    init:false
	}, 	
	"xinlusu":{
     name:"新鲁肃",
    "intro":"开启后重启游戏生效。略微修改鲁肃的缔盟技能",
    init:false
	}, 
	"xinzhoutai":{
     name:"新周泰",
    "intro":"开启后重启游戏生效。略微加强新周泰的不屈技能",
    init:false
	},
	"xinxingdaorong":{
     name:"新邢道荣",
    "intro":"开启后重启游戏生效。略微修改邢道荣的虚猲技能",
    init:false
	}, 
	"xinremachao":{
     name:"新界马超",
    "intro":"开启后重启游戏生效。略微修改界马超的铁骑技能",
    init:false
	}, 
	"xinrezhangliao":{
     name:"新界张辽",
    "intro":"开启后重启游戏生效。略微修改界张辽的突袭技能",
    init:false
	}, 		
	"xinreguanyu":{
     name:"新界关羽",
    "intro":"开启后重启游戏生效。略微增强界关羽的武圣",
    init:false
	},    	
    "xinshenguanyu":{
     name:"新神关羽",
    "intro":"开启后重启游戏生效。神关羽的武神改为：锁定技，你的红桃手牌和判定牌均视为【杀】；锁定技，你使用红桃【杀】无距离、次数限制且无视防具",
    init:false
	},    
	"xinshenlvmeng":{
     name:"新神吕蒙",
    "intro":"开启后重启游戏生效。略微加强神吕蒙的两个技能",
    init:false
	}, 
	"xinshenliubei":{
     name:"新神刘备",
    "intro":"开启后重启游戏生效。略微加强神刘备的两个技能",
    init:false
	},
	"xinrehuatuo":{
     name:"新界华佗",
    "intro":"开启后重启游戏生效。略微修改界华佗的急救技能",
    init:false
	}, 	
    "xinregongsunzan":{
     name:"新公孙瓒",
    "intro":"开启后重启游戏生效。略微修改公孙瓒的趫猛技能",
    init:false
	}, 
	"xinwutugu":{
     name:"新兀突骨",
    "intro":"开启后重启游戏生效。略微修改兀突骨的燃殇技能",
    init:false
	}, 
	"xinshenzhugeliang":{
     name:"神诸葛亮",
    "intro":"开启后重启游戏生效。略微修改神诸葛亮的技能",
    init:false
	},
	"xinxiahoushi":{
     name:"新夏侯氏",
    "intro":"开启后重启游戏生效。略微修改夏侯氏的技能",
    init:false
	},
	"xinrehuangyueying":{
     name:"新界黄月英",
    "intro":"开启后重启游戏生效。略微修改界黄月英的集智技能",
    init:false
	}, 
	"xinresimayi":{
     name:"新界司马懿",
    "intro":"开启后重启游戏生效。略微修改界司马懿的反馈技能",
    init:false
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
        list:[		
		],
    },
    skill:{
        skill:{
        },
        translate:{
        },
    },
    intro:"",   
    author:"技能设计：百度贴吧<li>编写代码：玉蝴蝶(QQ:764235332)",
    diskURL:"",
    forumURL:"",
    version:"1.0",
},files:{"character":[],"card":[],"skill":[]}}})
