'use strict'
game.import("extension",function(lib,game,ui,get,ai,_status){
	return {
name:"乱汉",
content:function (config,pack){
    if(lib.rank){
		//lib.rank.rarity.common.addArray([]);
		//精品-靛蓝
		lib.rank.rarity.rare.addArray(["lh_dzhc_yuankui","lh_hjzl_zhangliang","lh_lgld_jiaxu","lh_zhgj_yuanshu","lh_zhgj_liubiao","lh_scsjb_hejin","lh_scsjb_zhangrang","lh_swbz_huanggai","lh_dzhc_liru","lh_shmh_zhangfei","lh_dzhc_huaxiong","lh_qcwm_diaochan","lh_shmh_machao","lh_cwql_caoren","lh_swbz_ganning"]);
		//史诗-金色
		lib.rank.rarity.epic.addArray(["lh_zhgj_lvbu","lh_dzhc_wangyun","lh_lgld_lijueGuosi","lh_hjzl_zhangjiao","lh_dzhc_dongzhuo","lh_qcwm_caifuren","lh_qcwm_hetaihou","lh_zhgj_yuanshao","lh_qcwm_mayunlu","lh_cwql_xiahoudun","lh_cwql_xunyu","lh_qcwm_caiwenji","lh_qcwm_huangyueying","lh_shmh_jiangwei"]);
		//传说-橙色
		lib.rank.rarity.legend.addArray(["lh_hjzl_zhangbao","lh_zhgj_liuyan","lh_sgdl_caocao","lh_sgdl_sunce","lh_sgdl_liubei","lh_fsyz_zhaoyun","lh_fsyz_haozhao"]);
	}
	lib.skill._lh_diedubs={
		trigger:{
			player:'dieBegin',
		},
		priority:-Infinity,
		forced:true,
		unique:true,
		content:function(){
			"step 0"
			var name=(get.mode()=='guozhan')?player.name1:player.name;
			var name2=player.name2;
			var tags=lib.character[name][4];
				if(name2) var tags=lib.character[name2][4];
				if(tags&&tags.length){
				for(var i=0;i<tags.length;i++){
					if(tags[i].indexOf('dieAudio:')==0){
						var audionum=tags[i].slice(9);
					}
				}
			}
			if(audionum){
				audionum=+audionum;
				if(audionum>1) var num=get.rand(1,audionum);
					else var num=1;
					var audioname=name+num;		
					game.playLH(audioname);
			}
			else{
				game.playAudio('..','extension','乱汉',name);
				event.KJ=true;
			}
			if(name2&&tags2&&tags2.length){
				event.tags2=tags2;
				event.name=name2;			
			}
			else{				
				setTimeout(function(){
					game.playLH(name2);
				},3000)
				event.finish();
			}					
			"step 1"
			var tags2=event.tags2;
			var name=event.name;
			for(var i=0;i<tags2.length;i++){
				if(tags2[i].indexOf('dieAudio:')==0){
					var audionum=tags2[i].slice(9);			
				}
			}
			if(audionum){
				audionum=+audionum;
				if(audionum>1) var num=get.rand(1,audionum);
				else var num=1;
				var audioname=name+num;		
				if(event.KJ) game.playLH(audioname);
			else{
				setTimeout(function(){
					game.playLH(audioname);
					},3000)
				}
			}
			else{
				setTimeout(function(){
					game.playLH(name);
				},3000)
			}
		},
	};
    game.playLH=function(fn,dir,sex){
		if(lib.config.background_speak){
			if(dir&&sex) game.playAudio(dir,sex,fn);
			else if(dir) game.playAudio(dir,fn);
			else game.playAudio('..','extension','乱汉',fn);
		}
	}
},
precontent:function (luanHan){
	if(luanHan.enable){
		game.import('character',function(){
			var luanHan={
				name:'luanHan',
				connect:true,
				characterSort:{
					luanHan:{
						luanhan_zhuhougeju:[
							"lh_zhgj_liuyan",
							"lh_zhgj_lvbu",
							"lh_zhgj_yuanshu",
							"lh_zhgj_liubiao",
							"lh_zhgj_yuanshao",
						],
						luanhan_huangjinzhiluan:[
							"lh_hjzl_zhangjiao",
							"lh_hjzl_zhangbao",
							"lh_hjzl_zhangliang",
						],
						luanhan_dongzhuohuochao:[
							"lh_dzhc_yuankui",
							"lh_dzhc_wangyun",
							"lh_dzhc_dongzhuo",
							"lh_dzhc_liru",
							"lh_dzhc_huaxiong",
						],
						luanhan_shichangshijingbian:[
							"lh_scsjb_hejin",
							"lh_scsjb_zhangrang",
						],
						luanhan_liguolvedi:[
							"lh_lgld_lijueGuosi",
							"lh_lgld_jiaxu",
						],
						luanhan_qingchengwumei:[
							"lh_qcwm_caifuren",
							"lh_qcwm_hetaihou",
							"lh_qcwm_caiwenji",
							"lh_qcwm_diaochan",
							"lh_qcwm_mayunlu",
							"lh_qcwm_huangyueying",
						],
						luanhan_sanguodingli:[
							"lh_sgdl_caocao",
							"lh_sgdl_sunce",
							"lh_sgdl_liubei",
						],
						luanhan_fengshenyizhan:[
							"lh_fsyz_zhaoyun",
							"lh_fsyz_haozhao",
						],
						luanhan_shuhanmenghu:[
							"lh_shmh_zhangfei",
							"lh_shmh_machao",
							"lh_shmh_jiangwei",
						],
						luanhan_sunwobizhu:[
							"lh_swbz_huanggai",
							"lh_swbz_ganning",
						],
						luanhan_caoweiqunlang:[
							"lh_cwql_caoren",
							"lh_cwql_xiahoudun",
							"lh_cwql_xunyu",
						],
					},
				},
				character:{
					"lh_zhgj_liuyan":["male","qun",4,["lh_siyu","lh_shangshu"],[]],
					"lh_zhgj_lvbu":["male","qun","3/7",["lh_wushuang","lh_yingquan","lh_lixin"],[]],
					"lh_zhgj_yuanshu":["male","qun",4,["lh_mouye","lh_pozu","lh_mingdi"],[]],
					"lh_zhgj_liubiao":["male","qun",3,["lh_liubiao_rujing","lh_hushi","lh_wujue"],[]],
					"lh_zhgj_yuanshao":["male","qun",4,["lh_yezhan","lh_paimou","lh_wuliang"],[]],

					"lh_hjzl_zhangjiao":["male","qun",3,["lh_fuyi","lh_qiyi","lh_daotong"],[]],
					"lh_hjzl_zhangbao":["male","qun",3,["lh_zhouhuan","lh_fuxiao"],[]],
					"lh_hjzl_zhangliang":["male","qun",4,["lh_junpo","lh_tongzhen"],[]],

					"lh_dzhc_wangyun":["male","qun",3,["lh_juao","lh_qingzheng","lh_yinmou"],[]],
					"lh_dzhc_yuankui":["male","qun",3,["lh_weiji","lh_quanmou","lh_mingwang"],[]],
					"lh_dzhc_dongzhuo":["male","qun",12,["lh_zhenluan","lh_jiangong","lh_rujing"],[]],
					"lh_dzhc_liru":["male","qun",3,["lh_zhenshi","lh_quanqian","lh_duzhi","lh_feidi"],[]],
					"lh_dzhc_huaxiong":["male","qun","4/5",["lh_xizhai","lh_zulian"],[]],

					"lh_scsjb_hejin":["male","qun",6,["lh_junquan","lh_cuguang","lh_yudun"],[]],
					"lh_scsjb_zhangrang":["male","qun","4/6",["lh_jinshi","lh_huoguo","lh_liancai","lh_gongfen"],[]],

					"lh_lgld_lijueGuosi":["male","qun",4,["lh_fangong","lh_baolve","lh_xinve"],[]],
					"lh_lgld_jiaxu":["male","qun",3,["lh_zukui","lh_dumou","lh_jushi"],[]],

					"lh_qcwm_caifuren":["female","qun",3,["lh_huiyu","lh_anhai","lh_juxian"],[]],
					"lh_qcwm_hetaihou":["female","qun",3,["lh_enwei","lh_dufei","lh_linzheng"],[]],
					"lh_qcwm_caiwenji":["female","wei",3,["lh_kouzui","lh_yiji","lh_guihan"],[]],
					"lh_qcwm_diaochan":["female","qun",3,["lh_qumei","lh_huofan","lh_sihui"],[]],
					"lh_qcwm_mayunlu":["female","shu",4,["lh_qiangji","lh_shuaixing","lh_wanxia"],[]],
					"lh_qcwm_huangyueying":["female","shu",3,["lh_caicheng","lh_qiaoyu"],[]],

					"lh_sgdl_caocao":["male","shen",4,["lh_bahan","lh_weiye","lh_jianlv"],[]],
					"lh_sgdl_sunce":["male","shen",4,["lh_kehan","lh_xiongba","lh_zhanlie"],[]],
					"lh_sgdl_liubei":["male","shen",4,["lh_fuhan","lh_longlin","lh_zhengfa"],[]],

					"lh_fsyz_zhaoyun":["male","shen",2,["lh_xuenu","lh_longyou","lh_huzhu","lh_juesheng"],[]],
					"lh_fsyz_haozhao":["male","shen",4,["lh_jiebei","lh_gushou"],[]],

					"lh_shmh_zhangfei":["male","shu",5,["lh_zuizhan","lh_nuyan","lh_jiuwu"],[]],
					"lh_shmh_machao":["male","shu",4,["lh_weiju","lh_weipo"],[]],"lh_shmh_jiangwei":["male","shu",4,["lh_guzhi","lh_jufa","lh_kefu"],[]],
					
					"lh_swbz_huanggai":["male","wu",4,["lh_huopo","lh_yanzhou"],[]],
					"lh_swbz_ganning":["male","wu",4,["lh_guoxian","lh_luangui"],[]],

					"lh_cwql_caoren":["male","wei",4,["lh_poxu","lh_jundu","lh_liji"],[]],
					"lh_cwql_xiahoudun":["male","wei","3/4",["lh_baizhan","lh_kuangmeng","lh_qinbing","lh_zhonglie"],[]],
					"lh_cwql_xunyu":["male","wei",3,["lh_chiguo","lh_zhongshou"],[]],
				},
				characterIntro:{

				},
				characterTitle:{
					//诸侯zhgj
					"lh_zhgj_liuyan":"私心谋国",
					"lh_zhgj_lvbu":"貪婪的惡獸",
					"lh_zhgj_yuanshu":"妄尊命帝",
					"lh_zhgj_liubiao":"暗藏祸心",
					"lh_zhgj_yuanshao":"窥汉饿虎",
					//黄巾hjzl
					"lh_hjzl_zhangjiao":"乱世葬歌",
					"lh_hjzl_zhangbao":"地公妖将",
					//董贼dzhc
					"lh_dzhc_yuankui":"四世三公",
					"lh_dzhc_wangyun":"居功误国",
					"lh_dzhc_dongzhuo":"乱世魔神",
					"lh_dzhc_liru":"鸩帝魔仕",
					"lh_dzhc_huaxiong":"汜水魔将",
					//十常侍scsjb
					"lh_scsjb_hejin":"集權外戚",
					"lh_scsjb_zhangrang":"祸国宦官",
					//乱武lgld
					"lh_lgld_lijueGuosi":"祸都欺帝",
					"lh_lgld_jiaxu":"毒计将出",
					//美人qcwm
					"lh_qcwm_caifuren":"举州降曹",
					"lh_qcwm_hetaihou":"恃宠祸朝",
					"lh_qcwm_caiwenji":"颠沛一世",
					"lh_qcwm_diaochan":"舞魅人间",
					"lh_qcwm_huangyueying":"機隐的才女",
					//鼎立sgdl
					"lh_sgdl_caocao":"曹魏霸业",
					"lh_sgdl_sunce":"孙吴盛兴",
					"lh_sgdl_liubei":"蜀汉辉耀",
					//封神fsyz
					"lh_fsyz_zhaoyun":"長坂坡神龍",
					"lh_fsyz_haozhao":"陳倉鐵壁",
					//蜀汉shmh
					"lh_shmh_zhangfei":"烈火怒兽",
					"lh_shmh_jiangwei":"蜀末将星",
					//孙吴swbz
					"lh_swbz_huanggai":"轻身為國",
					"lh_swbz_ganning":"锦帆豪勇",
					//曹魏cwql
					"lh_cwql_caoren":"兴曹胧骨",
					"lh_cwql_xiahoudun":"钢烈狂郎",
					"lh_cwql_xunyu":"王佐忠才",
				},
				translate:{
	"luanhan_zhuhougeju":"诸侯割据",
	"lh_zhgj_liuyan":"乱汉刘焉",
	"lh_zhgj_liuyan_ab":"刘焉",
			"lh_siyu":"私欲",
			"lh_siyu_info":				"出牌阶段限1次，你可以交给1名其他角色2张手牌，视为你使用1张无距离限制的单体普通锦囊牌，此牌结算完成后你摸1张牌。",
			"lh_shangshu":"上书",
			"lh_shangshu_info":"觉醒技，回合开始，若你已发动3次〖私欲〗（存活角色数不大于5则改为4）或已受到3次伤害，你增加1点体力上限并失去〖私欲〗、获得〖自立〗。",
			"lh_zili":"自立",
			"lh_zili_info":"锁定技，你的手牌数始终等于体力上限；你装备区的牌无法被弃置、获得；你无法成为延时锦囊牌的目标。",
	"lh_zhgj_lvbu":"乱汉吕布",
	"lh_zhgj_lvbu_ab":"吕布",
			"lh_yingquan":"鹰犬",
			"lh_yingquan_info":"其他角色出牌阶段限1次，其可交给你1张牌并指定1名其他角色，你视为对该角色使用1张【决斗】。",
			"lh_yingquan_lijian":"鹰犬",
			"lh_yingquan_lijian_info":"其他角色出牌阶段限1次，其可交给你1张牌并指定1名其他角色，你视为对该角色使用1张【决斗】。",
			"lh_lixin":"离心",
			"lh_lixin_info":"觉醒技，当你造成伤害后，若已累计造成不少于4点伤害（若游戏人数小于8则改为3点），你减2体力上限，失去〖鹰犬〗，获得〖独领〗。",
			"lh_duling":"独领",
			"lh_duling_info":"你可将1张锦囊牌当作【决斗】使用。出牌阶段开始时，你可以摸一张牌。",
			"lh_wushuang":"无双",
			"lh_wushuang_info":"锁定技，当你使用【杀】或【决斗】指定目标后，你令此牌需要依次使用或打出两张【闪】或【杀】响应。",
	"lh_zhgj_yuanshu":"乱汉袁术",
	"lh_zhgj_yuanshu_ab":"袁术",
			"lh_mouye":"谋野",
			"lh_mouye_info":"锁定技，摸牌阶段，你放弃摸牌并亮出牌堆顶四张牌，将其中一张牌置于武将牌旁称之为「野心」，获得其余牌。弃牌阶段结束时，你每有一张「野心」摸一张牌。",
			"lh_mouye_rewrite":"谋野·改",
			"lh_mouye_rewrite_info":"锁定技，摸牌阶段，你放弃摸牌并亮出牌堆顶四张牌，将其中一张牌置入弃牌堆并获得其余牌。弃牌阶段结束时，你每有一张「野心」摸一张牌。",
			"lh_pozu":"破阻",
			"lh_pozu_info":"当你受到伤害后，你可以交给伤害来源一张「野心」。",
			"lh_pozu_rewrite":"破阻·改",
			"lh_pozu_rewrite_info":"当你受到伤害后，伤害来源可以获得你一张「野心」。",
			"lh_mingdi":"命帝",
			"lh_mingdi_info":"觉醒技，准备阶段开始时，若你的「野心」数量不小于3，你加1体力上限，修改技能〖谋野〗和〖破阻〗。",
	"lh_zhgj_liubiao":"乱汉刘表",
	"lh_zhgj_liubiao_ab":"刘表",
			"lh_liubiao_rujing":"入荆",
			"lh_liubiao_rujing_info":"每回合限一次，当你使用【杀】对目标结算完后，你可以选择一至两名不是此【杀】目标的其他角色。除非其对目标角色使用【杀】（无距离限制），否则你获得其一张手牌。",
			"lh_hushi":"虎视",
			"lh_hushi_info":"每回合限一次，你可以将一张基本牌当【杀】使用。",
			"lh_wujue":"无决",
			"lh_wujue_info":"锁定技，你的防御距离+1、进攻距离-1；你于出牌阶段内获得的牌不计入手牌上限。",
	"lh_zhgj_yuanshao":"乱汉袁绍",
	"lh_zhgj_yuanshao_ab":"袁绍",
			"lh_yezhan":"野展",
			"lh_yezhan_info":"出牌阶段限一次，你可以令一名其他角色交给你一张手牌。若此牌为：基本牌，你本回合可多使用一张【杀】；锦囊牌，你对一名角色造成1点伤害；装备牌，你摸两张牌。",
			"lh_paimou":"排谋",
			"lh_paimou_info":"当你成为其他角色使用锦囊牌的目标后，你可立即对其使用一张【杀】。",
			"lh_wuliang":"乌粮",
			"lh_wuliang_info":"摸牌阶段，你可多摸X张牌（X为你体力上限-2且至少为0）。若如此做，你下个回合开始时，跳过摸牌阶段，亮出牌堆顶三张牌获得之，其中每有一张♥牌你受到1点无来源火属性伤害。",
			"lh_wuliang1":"乌粮",
			"lh_wuliang2":"乌粮",

	"luanhan_huangjinzhiluan":"黄巾之乱",
	"lh_hjzl_zhangjiao":"乱汉张角",
	"lh_hjzl_zhangjiao_ab":"张角",
			"lh_fuyi":"符医",
			"lh_fuyi_info":"每回合限一次，当你获得其他角色的牌后，你可以令其回复1点体力。",
			"lh_qiyi":"起义",
			"lh_qiyi_info":"锁定技，你跳过摸牌阶段并令至多四名其他角色各交给你一张牌。",
			"lh_daotong":"道统",
			"lh_daotong_info":"锁定技，当你即将死亡时，令一名其他角色获得技能〖起义〗和〖道统〗。",
	"lh_hjzl_zhangbao":"乱汉张宝",
	"lh_hjzl_zhangbao_ab":"张宝",
			"lh_zhouhuan":"咒幻",
			"lh_zhouhuan_info":"锁定技，回合开始时，你选择一个势力（魏/蜀/吴/群）并随机抽取该势力的四张武将牌，你从其中牌面上选择至多三项技能（限定技、觉醒技、主公技、隐匿技除外）获得之直到你下此发动该技能。",
			"lh_zhouhuan_rewrite":"咒幻·改",
			"lh_zhouhuan_rewrite_info":"锁定技，回合开始时，你选择一个势力（魏/蜀/吴/群）并随机抽取该势力的四张武将牌，你从其中牌面上选择至多两项技能（限定技、觉醒技、主公技、隐匿技除外）获得之直到你下此发动该技能。",
			"lh_fuxiao":"符消",
			"lh_fuxiao_info":"限定技，当你进入濒死状态时，你可以将体力值回复至2点，从当前〖咒幻〗获得的技能中选择一项永久获得之，然后修改〖咒幻〗。",
	"lh_hjzl_zhangliang":"乱汉张梁",
	"lh_hjzl_zhangliang_ab":"张梁",
			"lh_junpo":"军破",
			"lh_junpo_info":"锁定技，设X为0；你每使用一张牌令X+1；准备阶段，你摸X张牌（至多摸四张）。若X不小于4，本回合内你使用【杀】不能被闪避。然后X归0。",
			/*
			"lh_tongzhen":"统阵",
			"lh_tongzhen_info":"锁定技，你因〖军破〗摸得三十六张牌后，你使用【杀】不能被【闪】响应且对目标角色伤害值+1。",
			*/

	"luanhan_dongzhuohuochao":"董卓祸朝",
	"lh_dzhc_yuankui":"乱汉袁隗",
	"lh_dzhc_yuankui_ab":"袁隗",
			"lh_weiji":"位极",
			"lh_weiji_info":	"每轮限X次，其他角色使用一张锦囊牌指定角色为目标时，你可以交给其一张手牌为此牌重新指定目标。（X为场上存活角色数/4，向上取整）",
			"lh_quanmou":"权谋",
			"lh_quanmou_info":"锁定技，其他角色获得你区域里的牌后，须选择一项：①令你摸两张牌；②令你对其造成1点伤害。",
			"lh_mingwang":"名望",
			"lh_mingwang_info":"锁定技，你的手牌上限+Y；回合开始阶段，你摸Y张牌再弃置Y张手牌。（Y为场上势力数/2，向上取整）",
	"lh_dzhc_wangyun":"乱汉王允",
	"lh_dzhc_wangyun_ab":"王允",
			"lh_juao":"倨傲",
			"lh_juao_info":"每回合限一次，你使用普通锦囊牌结算完后，你可以摸三张牌，然后你距离为1以内的其他角色各可对你使用一张【杀】。",
			"lh_qingzheng":"清正",
			"lh_qingzheng_info":"每轮限两次，一名其他角色对另一名其他角色造成伤害后，若双方均存活，你可以交给受伤角色一张手牌。若如此做，你视为对伤害来源使用一张在限定范围内选择的锦囊牌。",
			"lh_qingzheng_append":"<span style='font-family: yuanli'>限定范围：决斗、<br>逐近弃远、偷梁换柱、<br>增兵减灶、远交近攻、<br>水淹七军、笑里藏刀。</span>",
			"lh_yinmou":"隐谋",
			"lh_yinmou_info":"锁定技，你使用锦囊牌无距离限制；你使用锦囊牌即将造成的伤害均视为无来源伤害。",
	"lh_dzhc_dongzhuo":"乱汉董卓",
	"lh_dzhc_dongzhuo_ab":"董卓",
			"lh_zhenluan":"镇乱",
			"lh_zhenluan_info":"锁定技，其他角色造成伤害后，若其没有“乱”标记，则其获得之。准备阶段，你对有“乱”标记的角色造成1点伤害，然后移去场上所有“乱”标记。",
			"lh_jiangong":"建功",
			"lh_jiangong_info":"当你造成伤害后，你可以摸一张牌。你每发动三次〖建功〗，便可从牌堆中获得一张指定类别的牌。",
			"lh_rujing":"入京",
			"lh_rujing_info":"觉醒技，当你你发动〖镇乱〗后，若你累计移去了不少于6枚“乱”标记（游戏人数不大于5则改为3枚），你回复1点体力，失去〖镇乱〗，获得〖独权〗。",
			"lh_duquan":"独权",
			"lh_duquan_info":"锁定技，出牌阶段开始或弃牌阶段结束时，若你的手牌数不小于5，你失去1点体力。",
	"lh_dzhc_liru":"乱汉李儒",
	"lh_dzhc_liru_ab":"李儒",
			"lh_zhenshi":"鸩弑",
			"lh_zhenshi_info":"出牌阶段限一次，你可以交给其他角色一张黑色手牌，对其造成1点伤害。",
			"lh_quanqian":"劝迁",
			"lh_quanqian_info":"每轮限一次，其他角色出牌阶段开始时，你可以交给其一张手牌。若如此做，该角色可以移动场上一张牌。",
			"lh_duzhi":"毒智",
			"lh_duzhi_info":"锁定技，你的手牌上限+2；出牌阶段开始时，你弃置一张牌摸两张牌。",
			"lh_feidi":"废帝",
			"lh_feidi_info":"限定技，出牌阶段，你可以选择一名其他角色并摸三张牌，令其本轮内非觉醒技失效。",
	"lh_dzhc_huaxiong":"乱汉华雄",
	"lh_dzhc_huaxiong_ab":"华雄",
			"lh_xizhai":"袭寨",
			"lh_xizhai_info":"出牌阶段限一次，你可以弃置两张牌对一名其他角色造成1点伤害，然后获得其一张牌并展示之，若此牌颜色为红色，你回复1点体力，否则你摸一张牌。",
			"lh_zulian":"阻联",
			"lh_zulian_info":"其他角色出牌阶段开始时，若你未受伤，你可以视为对其使用【决斗】，若对其造成伤害，其本回合不能对其他角色使用牌。<br>你对其他角色造成伤害后，直到你下个回合开始前你不能对其发动〖阻联〗。",

	"luanhan_shichangshijingbian":"十常侍惊变",
	"lh_scsjb_hejin":"乱汉何进",
	"lh_scsjb_hejin_ab":"何进",
			"lh_junquan":"军权",
			"lh_junquan_info":"出牌阶段限一次，你可以选择一名其他角色，除非其对你指定的另一名角色使用【杀】，否则你对其造成1点伤害。",
			"lh_cuguang":"粗犷",
			"lh_cuguang_info":"锁定技，其他角色使用锦囊牌指定你为目标后，除非其弃置一张手牌，否则此牌对你无效。",
			"lh_yudun":"愚钝",
			"lh_yudun_info":"锁定技，你使用锦囊牌结算完后失去1点体力。判定阶段开始时，依次弃置你判定区的所有牌。",
	"lh_scsjb_zhangrang":"乱汉张让",
	"lh_scsjb_zhangrang_ab":"张让",
			"lh_jinshi":"近侍",
			"lh_jinshi_info":"游戏开始或准备阶段开始时，若场上没有“近侍”标记，你可以令一名其他角色获得之，否则你可以弃置两张牌移动之。其他角色对有“近侍”标记的角色造成伤害时，你可以摸一张牌将此伤害转移给你。",
			"lh_huoguo":"祸国",
			"lh_huoguo_info":"当你受到伤害后，你可以摸一张牌并将之置于武将牌上。你可以将武将牌上的一张牌置入弃牌堆，视为使用一张普通锦囊牌。",
			"lh_liancai":"敛财",
			"lh_liancai_info":"出牌阶段限一次，你可以其他角色选择一项：①交给你两张牌，然后摸一张牌；②受到你对其造成的1点伤害。",
			"lh_gongfen":"公愤",
			"lh_gongfen_info":"锁定技，结束阶段结束时，若你本回合造成的伤害值数大于4，你死亡。",

	"luanhan_liguolvedi":"李郭掠帝",
	"lh_lgld_lijueGuosi":"乱汉李傕郭汜",
	"lh_lgld_lijueGuosi_ab":"李傕郭汜",
			"lh_fangong":"反攻",
			"lh_fangong_info":"其他角色使用【杀】对你结算时，你可以失去1点体力令之失效，然后对使用者造成1点伤害。",
			"lh_baolve":"暴掠",
			"lh_baolve_info":"锁定技，当你对其他角色造成伤害后，你获得其一张手牌。",
			"lh_xinve":"席虐",
			"lh_xinve_info":"出牌阶段限一次，你可以弃置至多两张手牌并失去1点体力，对等量名角色各造成1点伤害。",
	"lh_lgld_jiaxu":"乱汉贾诩",
	"lh_lgld_jiaxu_ab":"贾诩",
			"lh_zukui":"阻溃",
			"lh_zukui_info":"每轮限一次，其他角色使用【闪】时，你可以令之失效并摸一张牌。",
			"lh_dumou":"毒谋",
			"lh_dumou_info":"锁定技，你使用的锦囊牌不能任何角色使用或打出牌响应。",
			"lh_jushi":"拒仕",
			"lh_jushi_info":"每回合限一次，当你于摸牌阶段外获得牌后，你可以将这些牌当一张在限定范围内选择的普通锦囊牌使用。",
            "lh_jushi_append":"<span style='font-family: yuanli'>限定范围：<br>过河拆桥、釜底抽薪、<br>洞烛先机、调虎离山、<br>以逸待劳、远交近攻。</span>",

	"luanhan_qingchengwumei":"倾城妩媚",
	"lh_qcwm_caifuren":"乱汉蔡夫人",
	"lh_qcwm_caifuren_ab":"蔡夫人",
			"lh_huiyu":"毁誉",
			"lh_huiyu_info":"出牌阶段限一次，你可以选择两名其他角色，令前者选择一项：①视为对后者使用一张【杀】；②弃置后者两张手牌。",
			"lh_anhai":"暗害",
			"lh_anhai_info":"锁定技，一轮开始时，你选择一名角色。直到你下次发动〖暗害〗前，你即将造成伤害的伤害来源均改为该角色。",
			"lh_juxian":"举献",
			"lh_juxian_info":"出牌阶段限一次，你可以将所有手牌交给一名其他角色，然后摸三张牌。若如此做，你可以弃置一张手牌回复1点体力。",
	"lh_qcwm_hetaihou":"乱汉何太后",
	"lh_qcwm_hetaihou_ab":"何太后",
			"lh_enwei":"恩威",
			"lh_enwei_info":"每回合限一次，一名角色回复体力后、或于摸牌阶段外获得牌后，你可以令其摸一张牌或弃置一张手牌。",
			"lh_dufei":"毒妃",
			"lh_dufei_info":"出牌阶段限一次，你可以弃置X张牌对一名其他角色造成X点伤害（X∈[1,2]），若X大于1，你失去1点体力。",
			"lh_linzheng":"临政",
			"lh_linzheng_info":"限定技，其他角色回合开始时，若其已受伤，你可以弃置装备区里所有牌（至少一张），将手牌摸至体力上限，令其跳过本回合的判定、摸牌和出牌阶段，然后你获得一个额外的回合。",
	"lh_qcwm_caiwenji":"乱汉蔡文姬",
	"lh_qcwm_caiwenji_ab":"蔡文姬",
			"lh_kouzui":"叩罪",
			"lh_kouzui_info":"每轮限两次，与你距离为1的其他角色受到伤害后，你可以交给其一张牌，然后你摸三张牌。",
			"lh_yiji":"忆籍",
			"lh_yiji_info":"出牌阶段限一次，你可以将一张手牌当做未以此法使用过的普通锦囊牌使用。",
			"lh_guihan":"归汉",
			"lh_guihan_info":"限定技，你受到其他角色造成的伤害时，你可以选择一名不为伤害来源的其他角色，令其将所有手牌交给另一名你选择的角色，若给出的牌数不少于三张，该伤害值-1。",
	"lh_qcwm_diaochan":"乱汉貂蝉",
	"lh_qcwm_diaochan_ab":"貂蝉",
			"lh_qumei":"屈魅",
			"lh_qumei_info":"出牌阶段限一次，你可以展示一张手牌并选择一名其他角色，令其展示并交给你一张牌。若展示的这两张牌花色不同，直到你下回合开始前，其下次受到的伤害值+1。",
			"lh_huofan":"惑反",
			"lh_huofan_info":"每回合限一次，当你成为基本牌或锦囊牌的唯一目标后，你可以交给一名不为使用者的其他角色一张装备牌，令其代替你成为此牌目标。",
			"lh_sihui":"私会",
			"lh_sihui_info":"限定技，出牌阶段，你可以将所有手牌交给一名其他角色。若如此做，你选择至多X名除其以外的其他角色（X为你给出的牌数），令其对这些角色各造成1点伤害。",
	"lh_qcwm_mayunlu":"乱汉马云禄",
	"lh_qcwm_mayunlu_ab":"马云禄",
			"lh_qiangji":"枪技",
			"lh_qiangji_info":"每回合限一次，当你使用【杀】被【闪】抵消后，你可以弃置其他角色一张牌收回此【杀】。",
			"lh_shuaixing":"率性",
			"lh_shuaixing_info":"当你获得一次牌后，你可以立即使用其中的【杀】。你以此法使用的【杀】不计入使用次数限制，且结算完后摸一张牌。",
			"lh_wanxia":"顽黠",
			"lh_wanxia_info":"锁定技，摸牌阶段，你放弃摸牌。亮出牌堆顶两张牌，若其中没有【杀】，你重复此流程；否则你获得亮出的所有牌。",
	"lh_qcwm_huangyueying":"乱汉黄月英",
	"lh_qcwm_huangyueying_ab":"黄氏",
			"lh_caicheng":"才承",
			"lh_caicheng_info":"一名角色结束阶段，你可以将其本回合因使用而置入弃牌堆里的一张牌置于你的武将牌上。你可以如手牌般使用或打出之。",
			"lh_qiaoyu":"巧御",
			"lh_qiaoyu_backup":"巧御",
			"lh_qiaoyu_info":"出牌阶段限一次，你可以将一张由你选择的一张装备牌名的随机牌装备入你空置装备栏并记录之。准备阶段，删除所有记录并弃置你装备区内对应的牌。",

	"luanhan_sanguodingli":"三国鼎立",
	"lh_sgdl_caocao":"乱汉曹操",
	"lh_sgdl_caocao_ab":"曹操",
			"lh_bahan":"霸汉",
			"lh_bahan_info":"其他角色结束阶段开始时，若其本回合未造成伤害，则你可对其造成1点伤害。",
			"lh_weiye":"伟业",
			"lh_weiye_info":"锁定技，你的手牌上限+2；你的回合内你不受任何伤害。",
			"lh_jianlv":"剑履",
			"lh_jianlv_info":"准备阶段，可选定一名本轮未对你造成伤害的其他角色，弃置其装备区的所有牌并废除其一个装备栏。",
	"lh_sgdl_sunce":"乱汉孙策",
	"lh_sgdl_sunce_ab":"孙笨",
			"lh_kehan":"克汉",
			//"lh_kehan_mark":"克",
			"lh_kehan_info":"锁定技，一轮开始时，你令至多X名其他角色获得“克”标记（X为场上角色数的一半，向上取整），并移去除此之外其他角色的“克”标记。<br>有“克”的其他角色摸牌时摸牌数-1（至少为1）。",
			"lh_xiongba":"雄霸",
			"lh_xiongba_info":"锁定技，你的手牌上限+2；准备阶段开始时，你摸一张牌。",
			"lh_zhanlie":"战烈",
			"lh_zhanlie_info":"准备阶段，你可以与一名其他角色拼点：若你赢，其将一半（向下取整）手牌交给你；若你没赢，你视为对其使用【杀】。",
	"lh_sgdl_liubei":"乱汉刘备",
	"lh_sgdl_liubei_ab":"刘备",
			"lh_fuhan":"覆汉",
			"lh_fuhan_info":"锁定技，其他角色于出牌阶段内从使用的第二张牌开始，每使用一张牌本回合手牌上限-1，若其手牌上限为0，其本回合不能再使用牌。",
			"lh_longlin":"龙临",
			"lh_longlin_info":"锁定技，你的手牌上限+2，你的进攻距离无限；当你受到伤害时，令伤害数值减至1。",
			"lh_zhengfa":"徵伐",
			"lh_zhengfa_info":"出牌阶段限一次，你可以令所有攻击范围内有你的角色选择是否交给你一张手牌：你对选否的角色造成1点伤害；若选是的角色不小于3，本回合你使用【杀】无次数限制。",

	"luanhan_fengshenyizhan":"封神一战",
	"lh_fsyz_zhaoyun":"乱汉赵云",
	"lh_fsyz_zhaoyun_ab":"赵云",
			"lh_xuenu":"血怒",
			"lh_xuenu_info":"你可以将一张锦囊牌当【杀】使 用或打出。你使用【杀】指定目标后，可以弃置目标角色装备区里一张牌；你使用【杀】对目标角色造成伤害后可以回复1点体力。",
			"lh_longyou":"龙佑",
			"lh_longyou_info":"锁定技，你的手牌上限+2，你不是延时锦囊牌的合法目标；摸牌阶段你额外摸两张牌。你的回合外限一次，当你失去一次牌时，摸两张牌。",
			"lh_huzhu":"护主",
			"lh_huzhu_info":"每名角色限一次，其他角色进入濒死状态时，你可以令其回复1点体力。若如此做，你对与其距离为1的另一名其他角色造成1点伤害。",
			"lh_juesheng":"绝生",
			"lh_juesheng_info":"觉醒技，当你进入濒死状态时，你加1体力上限并将体力回复至2点，失去技能〖护主〗。",
	"lh_fsyz_haozhao":"乱汉郝昭",
	"lh_fsyz_haozhao_ab":"郝昭",
			"lh_jiebei":"竭备",
			"lh_jiebei_info":"锁定技，一轮开始时，设X=1。其他角色准备阶段，你摸X张牌；其他角色结束阶段开始时，若你手牌中有以此法摸到的牌，你弃置X张牌，否则令X+1。",
			"lh_gushou":"固守",
			"lh_gushou_info":"每回合限一次，当你在回合外弃置牌后，你获得一枚“守”。你可以移去一枚“守”视为使用【无懈可击】；出牌阶段，你可以移去一张“守”移动场上一张牌。",

	"luanhan_shuhanmenghu":"蜀汉猛虎",
	"lh_shmh_zhangfei":"乱汉张飞",
	"lh_shmh_zhangfei_ab":"张飞",
			"lh_zuizhan":"醉战",
			"lh_zuizhan_info":"锁定技，你的【酒】不计入手牌上限；你使用【酒】时回复1点体力。",
			"lh_nuyan":"怒焰",
			"lh_nuyan_info":"锁定技，当你受到伤害后，你摸一张牌或视为使用【杀】，若此【杀】造成伤害，你摸两张牌。",
			"lh_jiuwu":"酒误",
			"lh_jiuwu_info":"你的回合内，若你的体力值小于4，你可以将一张基本牌当【酒】使用。若如此做，你不能响应其他角色使用的锦囊牌直到你下个回合开始。",
	"lh_shmh_machao":"乱汉马超",
	"lh_shmh_machao_ab":"马超",
			"lh_weiju":"危惧",
			"lh_weiju_info":"你的回合外，当你造成伤害后，当前回合角色可令你弃置一张手牌。",
			"lh_weipo":"威破",
			"lh_weipo_info":"你距离为1以内的其他角色出牌阶段开始时，你可以摸一张牌。若如此做，除非其打出一张【闪】，否则你可以对其造成1点伤害。",
	"lh_shmh_jiangwei":"乱汉姜维",
	"lh_shmh_jiangwei_ab":"姜维",
			"lh_guzhi":"孤支",
			"lh_guzhi_info":"锁定技，摸牌阶段，你多摸两张牌；结束阶段结束时，若你本回合未造成过伤害，你失去1点体力。",
			"lh_jufa":"举伐",
			"lh_jufa_info":"出牌阶段限一次，你可以展示你的手牌并弃置其中所有♠牌，每以此法弃置一张牌便可视为使用一张【杀】（不计入使用次数限制）。",
			"lh_kefu":"克复",
			"lh_kefu_info":"当你杀死一名角色后，你可以随机抽取两张蜀势力武将牌，从其中牌面上选择一个技能获得之。",
			

	"luanhan_sunwobizhu":"孙吴臂助",
	"lh_swbz_huanggai":"乱汉黄盖",
	"lh_swbz_huanggai_ab":"黄盖",
			"lh_huopo":"火破",
			"lh_huopo_info":"当你受到火属性伤害后，你可以对一名其他角色造成等量火属性伤害。",
			"lh_yanzhou":"焰舟",
			"lh_yanzhou_info":"出牌阶段限一次，你可以横置一至两名角色，然后对自己造成1点火属性伤害。",
	"lh_swbz_ganning":"乱汉甘宁",
	"lh_swbz_ganning_ab":"甘宁",
			"lh_guoxian":"裹衔",
			"lh_guoxian_info":"锁定技，游戏开始时，废除你的防具栏和防御坐骑栏，你随机装备一张武器牌。你使用【杀】不能被闪避。",
			"lh_luangui":"乱归",
			"lh_luangui_info":"每轮限两次，当你造成伤害后，你可以摸一张牌。你以此法摸到的牌不计入手牌上限；你可以将之当【闪】使用或打出。",

	"luanhan_caoweiqunlang":"曹魏群狼",
	"lh_cwql_caoren":"乱汉曹仁",
	"lh_cwql_caoren_ab":"曹仁",
			"lh_jundu":"军督",
			"lh_jundu_info":"出牌阶段限X次（X场上存活角色数/2，向下取整）且对每名角色限一次，若你有使用【杀】的剩余次数，你可以令一名其他角色选择是否对你指定的另一名角色使用【杀】：若选是，你视为使用过一张【杀】；若选否，你视为对其使用不计入使用次数且无距离限制的【杀】。",
			"lh_poxu":"破徐",
			"lh_poxu_info":"转换技，每回合限一次，阴：你可以令你使用的【杀】不能被闪避；阳，出牌阶段开始时，你可以移动场上一张牌或弃置其他角色一张手牌。",
			"lh_liji":"励激",
			"lh_liji_info":"限定技，当一名角色受到不小于其体力值的伤害时，你可以令其摸两张牌防止此伤害。",
	"lh_cwql_xiahoudun":"乱汉夏侯惇",
	"lh_cwql_xiahoudun_ab":"夏侯惇",
			"lh_baizhan":"败战",
			"lh_baizhan_info":"锁定技，你受到锦囊牌造成的伤害值+1；当你受到【杀】造成的伤害后，你摸一张牌；游戏开始时，你废除防具栏。",
			"lh_kuangmeng":"狂猛",
			"lh_kuangmeng_info":"锁定技，若你体力值不大于2，你使用【杀】不能被闪避；若你体力值不大于1，你视为拥有〖神速〗。",
			"lh_shensulh":"神速",
			"lh_shensulh_info":"你可以选择一至三项：1. 跳过判定阶段和摸牌阶段；2. 跳过出牌阶段并弃置一张装备牌；3. 跳过弃牌阶段并将你的武将牌翻面。你每选择一项，视为你对一名其他角色使用一张没有距离限制的【杀】",
			"lh_shensulh1":"神速",
			"lh_shensulh1_info":"",
			"lh_shensulh2":"神速",
			"lh_shensulh2_info":"",
			"lh_shensulh3":"神速",
			"lh_shensulh3_info":"",
			"lh_qinbing":"勤兵",
			"lh_qinbing_info":"当你造成伤害后，你可以令一名其他角色选择摸两张牌或回复1点体力。",
			"lh_zhonglie":"忠烈",
			"lh_zhonglie_info":"限定技，出牌阶段，若你未受伤，你可以令一名其他角色获得“忠烈”标记。有“忠烈”标记的角色成为【杀】的目标后，你可以摸一张牌成为此牌额外目标，令此牌对其无效。",
	"lh_cwql_xunyu":"乱汉荀彧",
	"lh_cwql_xunyu_ab":"荀彧",
			"lh_chiguo":"持国",
			"lh_chiguo_info":"出牌阶段限一次，你可令至多四名其他角色分别交给你一张牌，你将其标记【统度】并以任意顺序放置牌堆顶。每回合限一次，当【统度】牌被获得后，你取消其标记并从牌堆底摸一张牌。",
			"lh_zhongshou":"忠守",
			"lh_zhongshou_info":"游戏开始时你需指定一名其他角色，你对其造成伤害时，你可无效此伤害并令其摸一张牌。",

				},
				dynamicTranslate:{
		lh_mouye:function(player){
			if(player.storage.lh_mingdi===true) return '锁定技，摸牌阶段，你放弃摸牌并亮出牌堆顶四张牌，将其中一张牌置入弃牌堆并获得其余牌。弃牌阶段结束时，你每有一张「野心」摸一张牌。';
			return '锁定技，摸牌阶段，你放弃摸牌并亮出牌堆顶四张牌，将其中一张牌置于武将牌旁称之为「野心」，获得其余牌。弃牌阶段结束时，你每有一张「野心」摸一张牌。';
		},
		lh_pozu:function(player){
			if(player.storage.lh_mingdi===true) return '当你受到伤害后，伤害来源可以获得你一张「野心」。';
			return '当你受到伤害后，你可以交给伤害来源一张「野心」。';
		},
		lh_zhouhuan:function(player){
			if(player.storage.lh_fuxiao===true) return '锁定技，回合开始时，你选择一个势力（魏/蜀/吴/群）并随机抽取该势力的四张武将牌，你从其中牌面上选择至多两项技能（限定技、觉醒技、主公技、隐匿技除外）获得之直到你下此发动该技能。';
			return '锁定技，回合开始时，你选择一个势力（魏/蜀/吴/群）并随机抽取该势力的四张武将牌，你从其中牌面上选择至多三项技能（限定技、觉醒技、主公技、隐匿技除外）获得之直到你下此发动该技能。';
		},
		lh_poxu:function(player){
			if(player.storage.lh_poxu===true) return '转换技，每回合限一次，阴：你可以令你使用的【杀】不能被闪避；<span class="bluetext">阳，出牌阶段开始时，你可以移动场上一张牌或弃置其他角色一张手牌。</span>';
			return '转换技，每回合限一次，<span class="bluetext">阴：你可以令你使用的【杀】不能被闪避；</span>阳，出牌阶段开始时，你可以移动场上一张牌或弃置其他角色一张手牌。';
		},
				},
				skill:{
/*
	刘焉
*/
"lh_siyu":{
	audio:"ext:乱汉:2",
	init:function (player){
        player.storage.lh_siyu_a=0;
        player.storage.lh_siyu_b=0;
    },
	enable:"phaseUse",
	usable:1,
	filter:function (event,player){
        return player.countCards('h')>1;
    },
	filterCard:function (card,player){
        return true;
    },
	prompt:"出牌阶段限1次，你可以交给1名其他角色2张手牌，视为你使用1张无距离限制的单体普通锦囊牌，此牌结算完成后你摸1张牌。",
	selectCard:2,
	selectTarget:1,
	position:"h",
	discard:false,
	prepare:"give2",
	filterTarget:function (card,player,target){
        return player!=target;
    },
	check:function (card){
        return 5-get.value(card);
    },
	content:function (){
        "step 0"
        player.storage.lh_siyu_a++;
        target.gain(cards,player); 
        "step 1"
        var tricklist=[];
        for(var i=0;i<lib.inpile.length;i++){
            if(get.type(lib.inpile[i])=='trick') {
                var cd={name:lib.inpile[i]};
                var info=get.info(cd);
                if(info.selectTarget&&info.selectTarget!=1) continue;
                if(info.notarget) continue;
                tricklist.push(['锦囊','',lib.inpile[i]]);
            }
        }
        player.chooseButton(['视为使用一张无距离限制的单体普通锦囊牌使用',[tricklist,'vcard']]).set('ai',function(button){
            if(player.hasFriend()) {
                if(button.link[2]=='zengbin') return 9.5;
                if(button.link[2]=='wuzhong') return 9;
            }
            else {
                if(button.link[2]=='shunshuo') return 9.5;
                if(button.link[2]=='guohe') return 5;
            }
            return 0;
        });
        "step 2"
        if(result&&result.bool&&result.links[0]){
            player.chooseUseTarget({name:result.links[0][2],isCard:true},'nodistance');
        }
    },
	ai:{
		order:9,
		expose:0.3,
		result:{
			target:1,
		},
	},
	group:["lh_siyu_draw"],
	subSkill:{
		draw:{
			trigger:{
				player:"useCardAfter",
			},
			direct:true,
			filter:function (event,player){
                return event.getParent(2).name=='lh_siyu';
            },
			priority:-1,
			content:function (){
                player.draw();
            },
			sub:true,
		},
	},
},
"lh_shangshu":{
	audio:"ext:乱汉:2",
	derivation:["lh_zili"],
	skillAnimation:true,
	animationColor:"water",
	forced:true,
	unique:true,
	juexingji:true,
	init:function (player){
        player.storage.lh_shangshu=false;
    },
	trigger:{
		player:"phaseBefore",
	},
	priority:12,
	filter:function (event,player){
        if(player.storage.lh_shangshu) return false;
        if(player.storage.lh_siyu_b>=3) return true;
        var tp=game.countPlayer()<=5?4:3;
        return player.storage.lh_siyu_a>=tp;
    },
	content:function (){
        player.gainMaxHp();
        player.awakenSkill('lh_shangshu');
        player.storage.lh_shangshu=true;
        player.removeSkill('lh_siyu');
        player.addSkill('lh_zili');
    },
	group:["lh_shangshu_dam"],
	subSkill:{
		dam:{
			trigger:{
				player:"damageEnd",
			},
			forced:true,
			filter:function (event,player){
                return event.num>0;
            },
			priority:-1,
			content:function (){
                player.storage.lh_siyu_b++;
                game.log(player.storage.lh_siyu_b);
            },
			sub:true,
		},
	}
},
"lh_zili":{
	trigger:{
		player:"gainEnd",
	},
	forced:true,
	filter:function (event,player){
        var tp=player.maxHp;
        return player.countCards('h')>tp;
    },
	content:function (){
        var tp=player.maxHp;
        player.chooseToDiscard(player.countCards('h')-tp,true);
    },
	audio:"ext:乱汉:2",
	mod:{
		targetEnabled:function (card){
            if(get.type(card)=='delay') return false;
        },
		canBeGained:function (card,player,target,name,now){
            if(get.position(card)=='e') return false;
        },
		canBeDiscarded:function (card,player,target,name,now){
            if(get.position(card)=='e') return false;
        },
	},
	group:["lh_zili_dis"],
	subSkill:{
		dis:{
			trigger:{
				player:"loseEnd",
			},
			forced:true,
			filter:function (event,player){
                var tp=player.maxHp;
                return player.countCards('h')<tp;
            },
			content:function (){
                var tp=player.maxHp;
                player.draw(tp-player.countCards('h'));
            },
			sub:true,
		},
	},
},
/*
	曹操
*/
"lh_bahan":{
	audio:"ext:乱汉:2",
	trigger:{
		global:"phaseJieshuBegin",
	},
	filter:function (event,player){
		return event.player!=player&&!event.player.getStat('damage');
    },
	check:function (event,player){
		return get.damageEffect(event.player,player,player)>0;
	},
	logTarget:'player',
	content:function (){
		trigger.player.damage(1,player,'nocard');
    },
	ai:{
		expose:0.4,
		threaten:1.1,
	},
},
"lh_weiye":{
	audio:"ext:乱汉:2",
	mod:{
		maxHandcard:function(player,num){
			return num+2;
		},
	},
	trigger:{
		player:"damageBefore",
	},
	firstDo:true,
	filter:function (event,player){
		return _status.currentPhase==player;
    },
	forced:true,
	content:function (){
		trigger.cancel();
    },
	ai:{
		effect:{
			target:function(card,player,target){
				if(get.tag(card,'damage')&&!player.hasSkillTag('jueqing',false,target)&&target==_status.currentPhase) return 'zerotarget';
			},
		},
	},
},
"lh_jianlv":{
	init:function (player){
        player.storage.lh_jianlv=[];
    },
	audio:"ext:乱汉:2",
	trigger:{
		player:"phaseZhunbei",
	},
	filter:function (event,player){
		return game.hasPlayer(function(current){
			return current!=player&&!player.storage.lh_jianlv.contains(current)&&current.countDisabled()<5;
		});
    },
	direct:true,
	content:function (){
		"step 0"
		var tars=game.filterPlayer(function(current){
			return current!=player&&!player.storage.lh_jianlv.contains(current)&&current.countDisabled()<5;
		});
		player.chooseTarget(get.prompt2('lh_jianlv'),1,function(card,player,target){
			return tars.contains(target);
		}).set('ai',function(target){
			var att=get.attitude(player,target),es=target.countCards('e')+1;
			return -att*es;
		});
		"step 1"
		if(result.bool){
			event.tar=result.targets[0];
			player.logSkill('lh_jianlv',event.tar);
			player.line(event.tar,'green');
			event.tar.discard(event.tar.getCards('e'));
			var list=[];
			for(var i=1;i<7;i++){
				if(i==6) continue;
				if(event.tar.isDisabled(i)) continue;
				list.push('equip'+i);
			}
			if(!list.length) event.finish();
			else{
				event.list=list;
				player.chooseControl(list).set('ai',function(event){
					return list.randomGet();
				}).set('prompt','请选择废除'+get.translation(event.tar)+'一个装备栏');
			}
		}
		else event.finish();
		"step 2"
		if(result.control){
			event.tar.disableEquip(result.control);
        }
    },
	ai:{
		expose:0.6,
		threaten:2.7,
	},
	group:["lh_jianlv_rec","lh_jianlv_clear"],
	subSkill:{
		rec:{
			trigger:{
				player:"damageAfter",
			},
			filter:function (event,player){
				return event.source&&event.source!=player;
			},
			direct:true,
			priority:-12,
			content:function (){
				player.storage.lh_jianlv.add(trigger.source);
			},
			sub:true,
		},
		clear:{
			trigger:{
				global:"roundStart",
			},
			direct:true,
			priority:-11,
			content:function (){
				player.storage.lh_jianlv=[];
            },
			sub:true,
		},
	},
},
/*
	吕布
*/
"lh_duling":{
	audio:"ext:乱汉:2",
	enable:"chooseToUse",
	filterCard:function (card){
        return get.type2(card)=='trick';
    },
	viewAsFilter:function (player){
        return player.countCards('h',{type:['trick','delay']})>0;
    },
	viewAs:{
		name:"juedou",
	},
	prompt:"将一张锦囊牌当【决斗】使用",
	check:function (card){
        return 7-get.value(card)
    },
	ai:{
		wuxie:function (target,card,player,viewer){
			if(player==game.me&&get.attitude(viewer,player)>0){
				return 0;
			}
		},
		basic:{
			order:5,
			useful:1,
			value:5.5,
		},
		threaten:1.2,
		result:{
			target:-1.5,
			player:function (player,target,card){
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
	subfrequent:["draw"],
	group:["lh_duling_draw"],
	subSkill:{
		draw:{
			trigger:{
				player:"phaseUseBegin",
			},
			frequent:true,
			content:function (){
                player.draw();
            },
			sub:true,
		},
	},
},
"lh_lixin":{
	audio:"ext:乱汉:2",
	juexingji:true,
	unique:true,
	skillAnimation:true,
	animationColor:"fire",
	trigger:{
		source:"damageAfter",
	},
	init:function (player){
        player.storage.lh_lixin=false;
    },
	forced:true,
	filter:function (event,player){
        var num=0;
        for(var i=0;i<player.stat.length;i++){
            if(typeof player.stat[i].damage=='number') num+=player.stat[i].damage;
        }
        return num>=((game.countPlayer2()<8)?3:4)&&!player.storage.lh_lixin;
    },
	content:function (){
        player.awakenSkill('lh_lixin');
        player.storage.lh_lixin=true;
        player.loseMaxHp(2);
        player.removeSkill('lh_yingquan');
        player.addSkill('lh_duling');
    },
	derivation:["lh_duling"],
},
"lh_yingquan":{
	ai:{
		threaten:1.9,
	},
	global:["lh_yingquan_lijian"],
	subSkill:{
		off:{
			charlotte:true,
			sub:true,
		},
	},
},
"lh_yingquan_lijian":{
	enable:"phaseUse",
	filter:function (event,player){
        if(player.hasSkill('lh_yingquan')) return false;
        return game.hasPlayer(function(current){
            return player!=current&&current.hasSkill('lh_yingquan')&&!current.hasSkill('lh_yingquan_off');
        });
    },
	filterTarget:function (card,player,target){
        if(ui.selected.targets.length>=1){
            return ui.selected.targets[0].canUse({name:'juedou'},target);
        }
        return player!=target&&target.hasSkill('lh_yingquan')&&!target.hasSkill('lh_yingquan_off');
    },
	targetprompt:["给牌目标","决斗目标"],
	selectTarget:2,
	multitarget:true,
	filterCard:true,
	position:"he",
	discard:false,
	lose:false,
	check:function (card){
        return 7-get.value(card);
    },
	content:function (){
        if(Math.random()>0.5) game.playAudio('..','extension','乱汉','lh_yingquan1');
        else game.playAudio('..','extension','乱汉','lh_yingquan2');
        targets[0].addTempSkill('lh_yingquan_off','phaseUseEnd');
        targets[0].gain(cards,player,'giveAuto');
        targets[0].useCard({name:'juedou',isCard:true},targets[1],'noai').animate=false;
        game.delay(0.5);
    },
	ai:{
		order:8,
		result:{
			target:function (player,target){
                if(ui.selected.targets.length==0){
                    if(player.attitudeTo(target)>0) return 3;
                    return -1;
                }
                else{
                    if(get.effect(ui.selected.targets[0],{name:'juedou'},target,player)>0) return -3;
                    return -0.5;
                }
            },
		},
	},
},
"lh_wushuang":{
	shaRelated:true,
	forced:true,
	group:["lh_wushuang1","lh_wushuang2"],
},
"lh_wushuang1":{
	trigger:{player:'useCardToPlayered'},
	forced:true,
	filter:function(event,player){
		return event.card.name=='sha'&&!event.getParent().directHit.contains(event.target);
	},
	logTarget:'target',
	content:function(){
		if(Math.random()>0.5) game.playAudio('..','extension','乱汉','lh_wushuang1');
        else game.playAudio('..','extension','乱汉','lh_wushuang2');
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
},
"lh_wushuang2":{
	trigger:{player:'useCardToPlayered',target:'useCardToTargeted'},
	forced:true,
	logTarget:function(trigger,player){
		return player==trigger.player?trigger.target:trigger.player
	},
	filter:function(event,player){
		return event.card.name=='juedou';
	},
	content:function(){
		if(Math.random()>0.5) game.playAudio('..','extension','乱汉','lh_wushuang1');
        else game.playAudio('..','extension','乱汉','lh_wushuang2');
		var id=(player==trigger.player?trigger.target:trigger.player)['playerid'];
		var idt=trigger.target.playerid;
		var map=trigger.getParent().customArgs;
		if(!map[idt]) map[idt]={};
		if(!map[idt].shaReq) map[idt].shaReq={};
		if(!map[idt].shaReq[id]) map[idt].shaReq[id]=1;
		map[idt].shaReq[id]++;
	},
	ai:{
		result:{
			target:function(card,player,target){
				if(card.name=='juedou'&&target.countCards('h')>0) return [1,0,0,-1];
			}
		}
	}
},
/*
	袁隗
*/
"lh_weiji":{
	audio:"ext:乱汉:2",
	marktext:"权",
	intro:{
		name:"位极",
		content:"本轮已发动#次",
	},
	trigger:{
		global:"useCardToPlayer"
	},
	direct:true,
	filter:function (event,player){
		if(player.countMark('lh_weiji')*4>=game.countPlayer()) return false;
		if(event.getParent().triggeredTargets1.length>1) return false;
		if(get.type2(event.card)!='trick') return false;
		if(!event.targets||get.info(event.card).multitarget==true) return false;
		if(event.player==player) return false;
		var target1=event.targets,target2=game.filterPlayer(function(current){
			return event.player.canUse(event.card,current,true,true);
		});
		if(target1.length==target2.length) return false;
		return player.countCards('h');
	},
	content:function (){
		"step 0"
		player.chooseCardTarget({
			filterCard:true,
			position:'h',
			ai1:function(card){
				if(get.attitude(player,trigger.player)>0) return 0;
				return 7-get.value(card);
			},
			filterTarget:function(card,player,target){
				return trigger.player.canUse(trigger.card,target,true,true);
			},
			selectTarget:trigger.targets.length,
			ai2:function(target){
				return get.effect(target,trigger.card,trigger.player,player);
			},
			prompt:get.prompt2('lh_weiji')
		});
		"step 1"
		if(result.bool){
			player.addMark('lh_weiji',1);
			player.logSkill('lh_weiji',trigger.player,false);
			player.line(result.targets);
			trigger.player.gain(result.cards,player,'give');
			var num=Math.min(trigger.targets.length,result.targets.length);
			for(var i=0;i<num;i++){
				trigger.targets[i]=result.targets[i];
			}
			trigger.targets.length=result.targets.length;
		}
	},
	group:["lh_weiji_resetCount"],
	subSkill:{
		resetCount:{
			trigger:{global:"roundStart"},
			forced:true,
			silent:true,
			content:function (){
				var count=player.countMark('lh_weiji');
				if(count) player.removeMark('lh_weiji',count,false);
			},
			sub:true
		}
	}
},
"lh_quanmou":{
	audio:"ext:乱汉:2",
	trigger:{
		source:"gainAfter",
	},
	forced:true,
	filter:function (event,player){
		return event.player!=player;
	},
	logTarget:"player",
	content:function (){
		"step 0"
		event.source=player;
		event.player=trigger.player;
		"step 1"
		var next=player.chooseBool('令'+get.translation(source)+'摸两张牌，或取消并受到一点伤害');
		next.set('ai',function(){
			if(player.attitudeTo(source)>=0) return true;
			if(player.hp<=2) return true;
			return false;
		});
		"step 2"
		if(result.bool){
			source.draw(2);
		}else{
			player.damage(1,source);
		}
	},
	ai:{
		effect:{
			target:function(card,player,target){
				if(player.hasSkillTag('jueqing',false,target)) return [1,-1];
				if(get.tag(card,'gain')){
					if(player.attitudeTo(target)>0) return [1,0,1,2];
					return [1,0,1,-2];
				}
			}
		}
	}
},
"lh_mingwang":{
	audio:"ext:乱汉:2",
	mod:{
		maxHandcard:function(player,num){
			return num+Math.ceil(game.countGroup()/2);
		}
	},
	trigger:{
		player:"phaseBeginStart"
	},
	forced:true,
	content:function (){
		"step 0"
		event.num=Math.ceil(game.countGroup()/2);
		"step 1"
		player.draw(event.num);
		"step 2"
		player.chooseToDiscard(event.num,'h',true);
	}
},
/*
	王允
*/
"lh_juao":{
	audio:"ext:乱汉:2",
	trigger:{
		player:"useCardAfter"
	},
	usable:1,
	filter:function (event){
		return get.type(event.card)=='trick';
	},
	check:function (event,player){
		return game.countPlayer(function(current){
			return player.attitudeTo(current)<0&&
				get.distance(player,current)<=1&&
				current.hasCard('sha','hs');
		})<=player.countCards('shan','hs');
	},
	content:function (){
		"step 0"
		player.draw(3);
		"step 1"
		game.filterPlayer(function(current){
			if(player!=current&&get.distance(player,current)<=1){
				current.chooseToUse('是否对'+get.translation(player)+'使用一张【杀】？',{name:'sha'},player,-1);
			}
		});
	},
},
"lh_qingzheng":{
	audio:"ext:乱汉:2",
	marktext:"清",
	intro:{
		name:"清正",
		content:"本轮还可发动#次",
	},
	trigger:{
		global:"damageAfter",
	},
	direct:true,
	filter:function (event,player){
		if(!player.hasMark('lh_qingzheng')) return false;
		if(!event.source||event.source==player||event.player==player||
			event.player.isDead()||event.source.isDead()) return false;
		return player.countCards('h');
	},
	content:function (){
		"step 0"
		var next=player.chooseCard('h');
		next.ai=function(card){
			if(_status.event.att<0&&get.value(card)>=2) return 0;
			if(_status.event.att>=0&&get.value(card)<0) return 0;
			return 7-get.value(card);
		};
		next.set('prompt',get.prompt('lh_qingzheng'));
		next.set('prompt2','你交给'+get.translation(trigger.player)+'并视为对'+get.translation(trigger.player)+'使用锦囊牌');
		next.set('att',player.attitudeTo(trigger.player));
		"step 1"
		if(result.bool){
			player.logSkill('lh_qingzheng',[trigger.player,trigger.source],false);
			trigger.player.line(player,'green');
			player.line(trigger.source,'green');
			player.removeMark('lh_qingzheng',1);
			trigger.player.gain(result.cards,player,'give');
		}else event.finish();
		"step 2"
		var list=[
			'juedou',
			'zhujinqiyuan',
			'toulianghuanzhu',
			'zengbin',
			'yuanjiao',
			'shuiyanqijunx',
			'wy_xiaolicangdao'
		];
		for(var i=0;i<list.length;i++){
			list[i]=['trick','',list[i]];
		}
		var next=player.chooseButton(['选择一张要使用的牌',[list,'vcard']],true);
		next.ai=function(button){
			var target=_status.event.target;
			var player=_status.event.player;
			if(player.attitudeTo(target)>0){
				if(target.countCards('he')<player.countCards('he')){
					return (button.link[2]=='zengbin')?3:-1;
				}
				return (button.link[2]=='yuanjiao')?2:-1;
			}
			if(target.getDamagedHp()<=1){
				return (button.link[2]=='wy_xiaolicangdao')?1.5:-1;
			}else{
				var countE=target.countCards('e');
				if(countE==0||countE>3){
					return (button.link[2]=='shuiyanqijunx')?1.5:-1;
				}
				if(!target.countCards('h')){
					return (button.link[2]=='juedou')?1:-1;
				}
				if(get.distance(player,target)<=1||
					player.countCards('h',function(cardi){
					return get.value(card)<4
				})<=1) return (button.link[2]=='zhujinqiyuan')?1:-1;
			}
			return (button.link[2]=='toulianghuanzhu')?0.5:-1;
		};
		next.set('target',trigger.source);
		"step 3"
		event.cardName=result.links[0][2]||undefined;
		if(event.cardName){
			player.chooseUseTarget(event.cardName,trigger.source,true);
		}
	},
	group:["lh_qingzheng_resetCount"],
	subSkill:{
		resetCount:{
			trigger:{global:"roundStart"},
			forced:true,
			silent:true,
			content:function (){
				var count=2-Math.min(player.countMark('lh_qingzheng'),2);
				if(count) player.addMark('lh_qingzheng',count,false);
			},
		},
	},
},
"lh_yinmou":{
	audio:"ext:乱汉:2",
	mod:{
		targetInRange:function(card){
			if(get.type2(card)=='trick') return true;
		}
	},
	trigger:{
		source:"damageBefore"
	},
	forced:true,
	filter:function (event,player){
		return event.card&&get.type(event.card)=='trick';
	},
	content:function (){
		trigger.source=undefined;
	},
},
/*
	郭李
*/
"lh_fangong":{
	audio:"ext:乱汉:2",
	trigger:{
		target:"shaBegin"
	},
	filter:function (event,player){
		return event.player!=player;
	},
	check:function (event,player){
		if(player.attitudeTo(event.player)>0) return false;
		if(player.hp<=1) return false;
		if(player.hp<3&&player.hasShan()) return false;
		return true;
	},
	content:function (){
		"step 0"
		player.loseHp();
		trigger.untrigger();
		trigger.finish();
		game.log(trigger.card,'对',player,'的结算被取消了');
		"step 1"
		trigger.player.damage();
	},
},
"lh_baolve":{
	audio:"ext:乱汉:2",
	trigger:{
		source:"damageAfter"
	},
	forced:true,
	filter:function (event,player){
		return event.player.countCards('h');
	},
	content:function (){
		"step 0"
		player.gainPlayerCard(trigger.player,'h',true);
	},
	ai:{
		effect:{
			target:function(card,player,target,current){
				if(card.name=='sha') return [1,-1];
			},
		}
	}
},
"lh_xinve":{
	audio:"ext:乱汉:2",
    enable:"phaseUse",
    usable:1,
	filter:function (event,player){
		return player.countCards('h');
	},
    filterCard:true,
	selectCard:function(){
		var player=_status.event.player;
		return [Math.max(1,ui.selected.targets.length),Math.min(2,game.countPlayer())];
	},
    filterTarget:true,
	selectTarget:function(){
		return ui.selected.cards.length;
	},
    check:function (card){
        return 7-get.value(card);
    },
    line:"thunder",
	contentBefore:function (){
		player.loseHp();
	},
    content:function (){
        target.damage();
    },
    ai:{
		order:9,
        result:{
            target:function (player,target){
				if(get.damageEffect(target,player,player)>0) return -2;
                return 0;
            },
			player:function (player,target){
				if(player.hp<=1) return -2;
				return 0;
			}
        }
    }
},
/*
	贾诩
*/
"lh_zukui":{
	audio:"ext:乱汉:2",
	trigger:{
		global:"useCard"
	},
	round:1,
	filter:function (event,player){
		if(event.player==player) return false;
		return event.card&&event.card.name=='shan';
	},
	check:function (event,player){
		return player.attitudeTo(event.player)>0;
	},
	content:function (){
		"step 0"
		trigger.targets.length=0;
		trigger.all_excluded=true;
		player.draw();
	},
},
"lh_dumou":{
	audio:"ext:乱汉:2",
	trigger:{
		player:"useCard"
	},
	forced:true,
	filter:function (event){
		return event.card&&get.type(event.card)=='trick';
	},
	content:function(){
		trigger.directHit.addArray(game.filterPlayer());
	},
},
"lh_jushi":{
	audio:"ext:乱汉:2",
	trigger:{
		player:"gainAfter"
	},
	direct:true,
	filter:function (event,player){
		if(player.hasSkill('lh_jushi_off')) return false;
		return event.getParent('phaseDraw',true)==null;
	},
	content:function (){
		"step 0"
		var list=[
			//'yihuajiemu',
			'fudichouxin',
			'guohe',
			'dongzhuxianji',
			'diaohulishan',
			'yiyi',
			'yuanjiao'
		];
		for(var i=0;i<list.length;i++){
			list[i]=['trick','',list[i]];
		}
		var next=player.chooseButton([get.prompt2('lh_jushi'),[list,'vcard']]);
		next.ai=function(button){
			var trigger=_status.event.getTrigger();
			if(trigger.cards.length>2) return -1;
			var player=_status.event.player;
			var hs=player.getCards('h',function(cardi){
				return !trigger.cards.contains(cardi);
			});
			if(hs.length<3) return -1;
			var players=game.filterPlayer();
			for(var i=0;i<players.length;i++){
				if(player==players[i]){
					return (button.link[2]=='dongzhuxianji')?1.9:-1;
				}else if(player.attitudeTo(players[i])>0){
					if(players[i].countCards('h')>3) return (button.link[2]=='yiyi')?1.5:0.5;
					return (button.link[2]=='yuanjiao')?1.7:-1;
				}else{
					//if(!players[i].hasSha()) return (button.link[2]=='yihuajiemu')?1.5:-1;
					for(var cardi of hs){
						if(get.number(cardi)>10) return (button.link[2]=='fudichouxin')?1.3:-1;
					}
					return (button.link[2]=='guohe')?1.1:-1;
				}
				return (button.link[2]=='diaohulishan')?1:-1;
			}
		};
		next.set('target',trigger.source);
		"step 1"
		if(result.bool){
			player.addTempSkill('lh_jushi_off');
			player.logSkill('lh_jushi');
			player.chooseUseTarget({name:result.links[0][2],isCard:true},trigger.cards,true);
		}
	},
	subSkill:{off:{sub:true}}
},
/*
	袁术
*/
"lh_mouye":{
	audio:"ext:乱汉:1",
	marktext:"野",
	intro:{
		name:"野心",
		content:"cards"
	},
	init:function(player){
		if(!player.storage['lh_mouye']) player.storage['lh_mouye']=[];
	},
	trigger:{
		player:["phaseDrawBegin1","phaseDiscardEnd"]
	},
	forced:true,
	direct:true,
	filter:function (event,player,onrewrite){
		if(onrewrite=='phaseDrawBegin1') return true;
		return player.storage['lh_mouye']&&player.storage['lh_mouye'].length>0;
	},
	content:function (){
		"step 0"
		if(player.storage['lh_mingdi']){
			player.logSkill('lh_mouye_rewrite');
		}else{
			player.logSkill('lh_mouye');
		}
		var onrewrite=event.triggername;
		if(onrewrite=='phaseDrawBegin1'){
			trigger.changeToZero();
			event.cards=get.cards(4);
			game.cardsGotoOrdering(event.cards);
		}else{
			var num=player.storage['lh_mouye'].length||0
			player.draw(num);
			event.finish();
		}
		"step 1"
		var tip='###【谋野】###'+lib.translate['lh_mouye_info'];
		if(player.storage['lh_mingdi']){
			tip='###【谋野】###'+lib.translate['lh_mouye_rewrite_info'];
		}
		var next=player.chooseCardButton(tip,true,cards,1);
		next.ai=function(button){
			return -get.value(button.link);
		};
		"step 2"
		if(result.bool){
			var card=result.links[0];
			cards.remove(card);
			if(!player.storage['lh_mingdi']){
				game.cardsGotoSpecial(card);
				player.storage['lh_mouye'].push(card);
				player.syncStorage('lh_mouye');
				player.markSkill('lh_mouye');
			}
		}else event.finish();
		"step 3"
		player.gain(cards,'log','gain2');
	},
},
"lh_mouye_rewrite":{
	audio:"ext:乱汉:1",
},
"lh_pozu":{
	audio:"ext:乱汉:1",
	trigger:{
		player:"damageAfter"
	},
	direct:true,
	filter:function (event,player){
		if(!event.source) return false;
		return player.storage['lh_mouye']&&player.storage['lh_mouye'].length>0;
	},
	content:function (){
		"step 0"
		var current,ai,tip;
		if(player.storage['lh_mingdi']){
			current=trigger.source;
			ai=function(button){
				if(_status.event.att>0){
					return get.value(button.link);
				}
				return 10-get.value(button);
			};
			tip='破阻：是否获得'+get.translation(player)+'一张「野心」？';
		}else{
			current=player;
			ai=function(button){
				if(_status.event.att>0){
					return 0;
				}
				return get.value(button);
			};
			tip=get.prompt2('lh_pozu');
		}
		var next=current.chooseCardButton(tip,false,player.storage['lh_mouye'],1);
		next.ai=ai;
		next.set('att',get.attitude(player,trigger.source));
		"step 1"
		if(result.bool){
			var card=result.links[0];
			if(player.storage['lh_mingdi']){
				player.logSkill('lh_pozu_rewrite',trigger.source);
			}else{
				player.logSkill('lh_pozu',trigger.source);
			}
			player.storage['lh_mouye'].remove(card);
			player.syncStorage('lh_mouye');
			if(!player.storage['lh_mouye'].length){
				player.unmarkSkill('lh_mouye');
			}
			else{
				player.updateMarks('lh_mouye');
			}
			trigger.source.gain(card);
			player.$give(card,trigger.source);
		}
	},
	ai:{
		maixie:true,
		maixie_hp:true,
		effect:{
			target:function(card,player,target){
				if(get.tag(card,'damage')){
					if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
					var num=1;
					if(player.storage['lh_mingdi']){
						num=-1;
					}else{
						if(get.attitude(player,target)<=0){
							return [1,0];
						}
					}
					if(target.hp>=3) return [1,num];
					if(target.hp==2) return [1,num*0.7];
				}
			}
		}
	}
},
"lh_pozu_rewrite":{
	audio:"ext:乱汉:1",
},
"lh_mingdi":{
	audio:"ext:乱汉:2",
    skillAnimation:true,
    animationColor:"thunder",
    unique:true,
    juexingji:true,
	trigger:{
		player:"phaseZhunbeiBegin"
	},
	forced:true,
    locked:false,
	filter:function (event,player){
		return player.storage['lh_mouye']&&player.storage['lh_mouye'].length>=3;
	},
	content:function (){
		"step 0"
		player.gainMaxHp();
		player.awakenSkill('lh_mingdi');
		player.storage['lh_mingdi']=true;
	},
	derivation:["lh_mouye_rewrite","lh_pozu_rewrite"],
},
/*
	张角
*/
"lh_fuyi":{
	audio:"ext:乱汉:2",
	trigger:{
		player:"gainEnd"
	},
	usable:1,
	filter:function(event,player){
		return event.source&&event.source.isAlive()&&event.source!=player&&event.source.isDamaged();
	},
	logTarget:'source',
	check:function(event,player){
		return get.attitude(player,event.source)>0;
	},
	content:function(){
		trigger.source.recover();
	}
},
"lh_qiyi":{
	audio:"ext:乱汉:2",
	trigger:{
		player:"phaseDrawBefore"
	},
	forced:true,
	direct:true,
	content:function (){
		"step 0"
		trigger.cancel();
		"step 1"
		if(game.hasPlayer(function(current){
			return current!=player&&current.countCards('he');
		})){
			var next=player.chooseTarget([1,4]);
			next.filterTarget=function(card,player,target){
				if(target==player) return false;
				return target.countCards('he');
			};
			next.ai=function(target){
				var player=_status.event.player;
				var att=get.attitude(player,target);
				if(ui.selected.targets.length>0){
					return 1.5-att;
				}else{
					if(player.hasSkill('lh_fuyi')){
						return att*target.getDamagedHp();
					}
				}
				return 0.5;
			};
			next.set('prompt','起义：请选择至多四名角色，这些角色须各交给你一张牌');
		}else event._result.bool=false;
		"step 2"
		if(result.bool){
			event.targets=result.targets;
			player.logSkill('lh_qiyi',event.targets);
		}else{
			player.logSkill('lh_qiyi');
			event.finish();
		}
		"step 3"
		event.current=targets.shift();
		var next=event.current.chooseCard('he',true);
		next.ai=function(card){
			return -get.value(card);
		};
		next.set('prompt','起义：响应'+get.translation(player)+'的号召，请交给TA一张牌');
		"step 4"
		if(result.bool){
			player.gain(result.cards,event.current,'giveAuto');
		}
		"step 5"
		if(targets.length){
			event.goto(3);
		}
	},
},
"lh_daotong":{
	audio:"ext:乱汉:2",
	trigger:{
		player:"dieBegin",
	},
	forced:true,
	content:function (){
		"step 0"
		var next=player.chooseTarget(true);
		next.filterTarget=lib.filter.notMe;
		next.ai=function(target){
			var player=_status.event.player;
			if(game.countPlayer(function(current){
				return player.attitudeTo(current)<=0;
			})>2) return player.attitudeTo(target);
			return -player.attitudeTo(target);
		};
		next.set('prompt','道统：你要死了，请选择获得〖起义〗和〖道统〗的角色');
		"step 1"
		if(result.bool){
			var target=result.targets[0];
			player.line(target);
			target.addSkillLog('lh_qiyi');
			target.addSkillLog('lh_daotong');
		}
	},
},
/*
	董卓
*/
"lh_zhenluan":{
	audio:"ext:乱汉:2",
	trigger:{
		player:"phaseZhunbei"
	},
	forced:true,
	filter:function (event,player){
		return game.hasPlayer(function(current){
			return current.hasMark('lh_zhenluan_mark');
		});
	},
	content:function (){
		"step 0"
		var next=player.chooseTarget(true);
		next.filterTarget=function(card,player,target){
			return target.hasMark('lh_zhenluan_mark');
		};
		next.ai=function(target){
			var player=_status.event.player;
			return get.damageEffect(target,player,player);
		};
		next.set('prompt','镇乱：对一名有“乱”的角色造成1点伤害');
		"step 1"
		if(result.bool){
			result.targets[0].damage();
		}
		"step 2"
		var num=0;
		game.countPlayer2(function(current){
			var count=current.countMark('lh_zhenluan_mark');
			if(count>0){
				current.removeMark('lh_zhenluan_mark',count);
				num+=count;
			}
		});
		player.addMark('lh_zhenluan_count',num,false);
	},
	group:["lh_zhenluan_count"],
	global:["lh_zhenluan_mark"],
	subSkill:{
		count:{
			audio:"lh_zhenluan",
			marktext:"乱",
			intro:{
				name:"镇乱",
				content:"你已移去$枚“乱”"
			},
			trigger:{global:"damageAfter"},
			forced:true,
			filter:function (event,player){
				return event.source&&event.source!=player&&
					!event.source.hasMark('lh_zhenluan_mark');
			},
			content:function (){
				trigger.source.addMark('lh_zhenluan_mark',1);
			},
			sub:true
		},
		mark:{
			marktext:"乱",
			intro:{
				name:"镇乱",
				content:"你已经被董卓盯上了"
			},
			sub:true
		}
	}
},
"lh_jiangong":{
	audio:"ext:乱汉:2",
	trigger:{
		source:"damageAfter"
	},
	frequent:true,
	content:function (){
		"step 0"
		player.draw();
	},
	group:["lh_jiangong_count"],
	subSkill:{
		count:{
			marktext:"功",
			intro:{
				name:"建功",
				content:function(storage){
					var num=3-storage;
					if(num>0) return '再建功'+get.cnNumber(num)+'次可获得额外奖励';
					return '小伙子，你不对劲';
				}
			},
			trigger:{player:"lh_jiangongAfter"},
			silent:true,
			direct:true,
			content:function (){
				"step 0"
				player.addMark('lh_jiangong_count',1,false);
				"step 1"
				if(player.countMark('lh_jiangong_count')>=3){
					player.removeMark('lh_jiangong_count',3,false);
				}else event.finish();
				"step 2"
				var next=player.chooseControl('basic','trick','equip');
				next.set('prompt','选择获得一种类型的牌');
				next.ai=function(){
					var player=_status.event.player;
					if(player.hp<=3&&!player.countCards('h',{name:['shan','tao']})) return 'basic';
					if(player.countCards('he',{type:'equip'})<2) return 'equip';
					return 'trick';
				};
				"step 3"
				var card=get.cardPile2(function(card){
					return get.type2(card)==result.control;
				});
				if(card) player.gain(card,'gain2','log');
			},
			sub:true
		}
	},
},
"lh_rujing":{
	audio:"ext:乱汉:2",
    skillAnimation:true,
    animationColor:"fire",
    unique:true,
    juexingji:true,
	trigger:{
		player:"lh_zhenluanAfter"
	},
	forced:true,
    locked:false,
	filter:function (event,player){
		var num=(game.countPlayer2()>5)?6:3;
		return player.countMark('lh_zhenluan_count')>=num;
	},
	content:function (){
		"step 0"
		player.awakenSkill('lh_rujing');
		player.recover();
		"step 1"
		player.removeSkill("lh_zhenluan");
		player.addSkillLog("lh_duquan");
	},
	ai:{
		combo:"lh_zhenluan",
	},
	derivation:["lh_duquan"],
},
"lh_duquan":{
	audio:"ext:乱汉:2",
	trigger:{
		player:["phaseUseBegin","phaseDiscardEnd"]
	},
	forced:true,
	filter:function (event,player){
		return player.countCards('h')>=5;
	},
	content:function (){
		"step 0"
		player.loseHp();
	},
},
/*
	蔡夫人
*/
"lh_huiyu":{
	audio:"ext:乱汉:2",
	enable:"phaseUse",
	usable:1,
	filter:function (event,player){
		return game.countPlayer()>2;
	},
	filterTarget:lib.filter.notMe,
	selectTarget:2,
	multitarget:true,
	targetprompt:['加害者','受害者'],
	content:function (){
		"step 0"
		var list=['视为对'+get.translation(targets[1])+'使用【杀】'];
		if(targets[1].countCards('h')>=2){
			list.push('弃置'+get.translation(targets[1])+'两张手牌');
		}
		if(list.length>1){
			var next=targets[0].chooseControl();
			next.set('choiceList',list);
			next.ai=function(){
				if(_status.event.att>0){
					return (_status.event.target.hasShan())?1:0;
				}
				if(_status.event.target.countCards('h')>2) return 1;
				return 0;
			};
			next.set('prompt','毁誉：请选择一项');
			next.set('target',targets[1]);
			next.set('att',get.attitude(targets[0],targets[1]));
		}else{
			event._result.index=0;
		}
		"step 1"
		if(result.index==0){
			targets[0].chooseUseTarget({name:'sha'},targets[1],true,'nodistance').set('addCount',false);
		}
		if(result.index==1){
			targets[0].discardPlayerCard(targets[1],'h',2,true);
		}
	},
	ai:{
		expose:0.1,
		order:6,
		result:{
			target:function (player,target){
				var att=(get.attitude(player,target)>0)?1:-1;
				if(ui.selected.targets.length){
					return -1;
				}
				return att;
            },
		},
	},
},
"lh_anhai":{
	audio:"ext:乱汉:2",
	marktext:"暗",
	intro:{
		name:"暗害",
		content:"character"
	},
	trigger:{
		global:"roundStart"
	},
	forced:true,
	content:function (){
		"step 0"
		var next=player.chooseTarget(true);
		//next.filterTarget=lib.filter.notMe;
		next.ai=function(target){
			return Math.random();
		};
		next.set('prompt','暗害：请选择一名角色');
		next.set('prompt2','该角色于下轮内将代替你成为伤害来源');
		"step 1"
		if(result.bool){
			if(result.targets[0]!=player){
				game.log(result.targets[0],'成为了',player,'的“刀”');
			}
			player.storage['lh_anhai']=result.targets[0];
			player.markSkill('lh_anhai');
		}
	},
	group:["lh_anhai_dao"],
	subSkill:{
		dao:{
			trigger:{source:"damageBefore"},
			forced:true,
			filter:function (event,player){
				return player.storage['lh_anhai']&&
					get.itemtype(player.storage['lh_anhai'])=='player';
			},
			content:function (){
				"step 0"
				trigger.source=player.storage['lh_anhai'];
				if(player.storage['lh_anhai']!=player){
					if(Math.random()<0.1) game.log('可能是有那个大病');
				}
			},
			sub:true
		}
	}
},
"lh_juxian":{
	audio:"ext:乱汉:2",
	enable:'phaseUse',
	usable:1,
	filter:function (event,player){
		return player.countCards('h');
	},
	filterTarget:lib.filter.notMe,
	filterCard:true,
	selectCard:-1,
	discard:false,
	lose:false,
	delay:false,
	content:function(){
		"step 0"
		target.gain(cards,player,'giveAuto');
		"step 1"
		player.draw(3);
		"step 2"
		var next=player.chooseToDiscard('h');
		next.ai=function(card){
			if(_status.event.player.isHealthy()) return 0;
			return 8-get.value(card);
		};
		next.set('prompt','是否弃置一张牌回复一点体力？');
		"step 3"
		if(result.bool){
			player.recover();
		}
	},
	ai:{
		expose:0.15,
		order:1,
		result:{
			target:function(player,target){
				if(target.hasSkillTag('nogain')) return 0;
				if(player.countCards('h')==player.countCards('h','du')) return -1;
				if(target.hasJudge('lebu')) return 0;
				return 1;
			}
		}
	}
},
/*
	刘表
*/
"lh_liubiao_rujing":{
	audio:"ext:乱汉:2",
	trigger:{
		player:"shaAfter"
	},
	direct:true,
	filter:function (event,player){
		if(player.hasSkill('lh_liubiao_rujing_off')) return false;
		return game.hasPlayer(function(current){
			return ![event.target,player].contains(current);
		});
	},
	content:function (){
		"step 0"
		var next=player.chooseTarget([1,2]);
		next.filterTarget=function(card,player,target){
			return ![_status.event.getTrigger().target,player].contains(target);
		};
		next.ai=function(target){
			var att1=target.attitudeTo(_status.event.getTrigger().target)>0;
			var att2=_status.event.player.attitudeTo(target)>0;
			if(att2){
				if(att1) return 0;
				if(target.canUse('sha',_status.event.getTrigger().target,false,true)&&
					target.hasSha(false)) return 1.5;
				return 0;
			}else{
				if(!target.countCards('hs')) return 0;
				if(att1) return 2;
				if(!(target.canUse('sha',_status.event.getTrigger().target,false,true)&&
					target.hasSha(false))) return 1;
				return 0;
			}
			return 0.1;
		};
		"step 1"
		if(result.bool){
			event.targets=result.targets;
			player.logSkill('lh_liubiao_rujing',event.targets);
			player.addTempSkill('lh_liubiao_rujing_off');
		}else event.finish();
		"step 2"
		event.current=targets.shift();
		var next=event.current.chooseToUse({name:'sha'},trigger.target);
		next.set('prompt','对'+get.translation(trigger.target)+'使用【杀】');
		next.set('prompt2','或取消并被'+get.translation(player)+'获得一张手牌');
		"step 3"
		if(result.bool==false){
			player.gainPlayerCard(event.current,'h',true);
		}
		"step 4"
		if(targets.length>0){
			event.goto(2);
		}
	},
	subSkill:{off:{sub:true}}
},
"lh_hushi":{
	audio:"ext:乱汉:2",
	enable:"chooseToUse",
	viewAs:{
		name:"sha",
		isCard:true
	},
	filterCard:{
		type:"basic"
	},
	viewAsFilter:function(player){
		if(player.hasSkill('lh_hushi_off')) return false;
		return player.countCards('hs',{type:'basic'});
	},
	precontent:function(){
		player.addTempSkill('lh_hushi_off');
	},
	ai:{
		order:function(){
			var player=_status.event.player;
			if(!player.hasShan()&&!game.hasPlayer(function(current){
				return player.canUse('sha',current)&&current.hp==1&&get.effect(current,{name:'sha'},player,player)>0;
			})){
				return 0;
			}
			return 2.95;
		},
		skillTagFilter:function(player,tag,arg){
			if(player.hasSkill('lh_hushi_off')) return false;
			if(arg!='use') return false;
		},
		respondSha:true,
	},
	subSkill:{off:{sub:true}}
},
"lh_wujue":{
	audio:"ext:乱汉:2",
	mod:{
		globalFrom:function (from,to,distance){
			return distance+1
		},
		globalTo:function (from,to,distance){
			return distance+1
		},
		ignoredHandcard:function(card,player){
			if(card.hasGaintag('lh_wujue')){
				return true;
			}
		},
		cardDiscardable:function(card,player,name){
			if(name=='phaseDiscard'&&card.hasGaintag('lh_wujue')){
				return false;
			}
		},
	},
	trigger:{
		player:"gainBegin",
	},
	forced:true,
	silent:true,
	filter:function (event,player){
		return player.isPhaseUsing();
	},
	content:function (){
		trigger.gaintag.add('lh_wujue');
	}
},
/*
	孙策
*/
"lh_kehan":{
	audio:"ext:乱汉:2",
	trigger:{
		global:"roundStart"
	},
	forced:true,
	content:function (){
		"step 0"
		var num=Math.ceil(game.countPlayer()/2);
		var next=player.chooseTarget([1,num]);
		next.filterTarget=lib.filter.notMe;
		next.ai=function(target){
			return -_status.event.player.attitudeTo(target);
		};
		next.set('prompt2','目标角色本轮内摸牌时少摸一张牌');
		"step 1"
		var targets=[];
		if(result.bool){
			targets=result.targets;
			player.line(targets);
		}
		game.countPlayer(function(current){
			if(targets.contains(current)){
				if(current.hasMark('lh_kehan_mark')){
					game.log(current,'获得了一个','#g【克汉】');
				}else{
					current.addMark('lh_kehan_mark',1);
				}
			}else{
				var num=current.countMark('lh_kehan_mark');
				if(num) current.removeMark('lh_kehan_mark',num);
			}
		});
	},
	ai:{
		expose:0.5,
		threaten:2.9,
	},
	global:["lh_kehan_mark"],
	subSkill:{
		mark:{
			charlotte:true,
			audio:"lh_kehan",
			marktext:"克",
			intro:{
				name:"克汉",
				content:"我若怕你，非孙伯符也！"
			},
			trigger:{player:"drawBegin"},
			forced:true,
			filter:function (event,player){
				if(!player.hasMark('lh_kehan_mark')) return false;
				if(!game.hasPlayer(function(current){
					return current!=player&&current.hasSkill('lh_kehan');
				})) return false;
				return event.num>1;
			},
			content:function (){
				"step 0"
				trigger.num--;
			}
		}
	}
},
"lh_xiongba":{
	audio:"ext:乱汉:2",
	mod:{
		maxHandcard:function(player,num){
			return num+2;
		},
	},
	trigger:{
		player:"phaseZhunbeiBegin"
	},
	forced:true,
	content:function (){
		"step 0"
		player.draw();
	}
},
"lh_zhanlie":{
	audio:"ext:乱汉:2",
	trigger:{
		player:"phaseZhunbei"
	},
	direct:true,
	filter:function (event,player){
		return game.hasPlayer(function(current){
			return player.canCompare(current);
		});
	},
	content:function (){
		"step 0"
		var next=player.chooseTarget();
		next.filterTarget=function(card,player,target){
			return player.canCompare(target);
		};
		next.ai=function(target){
			if(_status.event.player.attitudeTo(target)>0) return 0;
			var hs=target.countCards('h')-1;
			var hs2=Math.floor(hs/2);
			if(hs==0) return 5.5;
			return Math.min(hs2,5);
		};
		next.set('prompt',get.prompt2('lh_zhanlie'));
		"step 1"
		if(result.bool){
			event.target=result.targets[0];
			player.logSkill('lh_zhanlie',event.target);
		}else event.finish();
		"step 2"
		player.chooseToCompare(target);
		"step 3"
		if(result.bool){
			var num=Math.floor(target.countCards('h')/2);
			if(!num){
				event.finish();
				return ;
			}
			var next=target.chooseCard('h',num,true);
			next.ai=function(card){
				return -get.value(card);
			};
			next.set('prompt2','将这些牌交给'+get.translation(player));
		}else{
			player.chooseUseTarget('sha',target,true,-1,'nodistance').set('addCount',false);
			event.finish();
		}
		"step 4"
		if(result.bool){
			player.gain(result.cards,target,'giveAuto');
		}
	},
	ai:{
		expose:0.3,
		threaten:1.7,
	},
},
/*
	刘备
*/
"lh_fuhan":{
	audio:"ext:乱汉:2",
	trigger:{
		global:"useCard"
	},
	forced:true,
	silent:true,
	priority:-1,
	filter:function (event,player){
		if(event.player==player) return false;
		if(!event.player.isPhaseUsing()) return false;
		var evt=event.player.getLastUsed(1);
		if(!evt||!evt.card) return false;
		var evt2=evt.getParent('phaseUse');
		return evt2&&evt2.name=='phaseUse'&&evt2.player==event.player;
	},
	content:function (){
		"step 0"
		if(!trigger.player.hasSkill('lh_fuhan_hsLimit')){
			trigger.player.addTempSkill('lh_fuhan_hsLimit');
			player.logSkill('lh_fuhan',trigger.player);
		}
		trigger.player.addMark('lh_fuhan_hsLimit',1,false);
	},
	subSkill:{
		hsLimit:{
			mark:true,
			marktext:"覆",
			intro:{
				name:"覆汉",
				content:"你的手牌上限减#"
			},
			mod:{
				maxHandcard:function(player,num){
					return num-player.countMark('lh_fuhan_hsLimit');
				},
				cardEnabled:function(card,player){
					if(player.getHandcardLimit()==0) return false;
				},
				cardUsable:function(card,player){
					if(player.getHandcardLimit()==0) return false;
				},
				cardRespondable:function(card,player){
					if(player.getHandcardLimit()==0) return false;
				},
			},
			init:function (player){
				player.storage['lh_fuhan_hsLimit']=0;
			},
			onremove:"init",
		},
	}
},
"lh_longlin":{
	audio:"ext:乱汉:2",
	mod:{
		maxHandcard:function(player,num){
			return num+2;
		},
		globalFrom:function(from,to,distance){
			return distance-Infinity;
		},
	},
	trigger:{
		player:"damageBegin4"
	},
	forced:true,
	filter:function (event){
		return event.num>1;
	},
	content:function (){
		"step 0"
		trigger.num=1;
	},
},
"lh_zhengfa":{
	audio:"ext:乱汉:2",
    enable:"phaseUse",
    usable:1,
	filter:function (event,player){
		return game.hasPlayer(function(current){
			return player.inRangeOf(current);
		});
	},
	filterTarget:function (card,player,target){
		return target.inRange(player);
	},
	selectTarget:-1,
	content:function (){
		"step 0"
		var next=target.chooseCard('h');
		next.ai=function(card){
			return 8-get.value(card);
		};
		next.set('prompt','徵伐：交给'+get.translation(player)+'一张手牌');
		next.set('prompt2','或取消并受到一点伤害');
		"step 1"
		if(result.bool){
			player.gain(result.cards,target,'giveAuto');
			if(!event.getParent().countGive) event.getParent().countGive=0;
			event.getParent().countGive++;
		}else{
			target.damage();
		}
	},
	contentAfter:function (){
		if(event.getParent().countGive>=3){
			player.addTempSkill('lh_zhengfa_paoxiao');
		}
	},
	ai:{
		order:1,
		result:{
			target:function(player,target){
				if(target.countCards('h')>3) return 0.5;
				return -1;
			},
			player:1
		},
	},
	subSkill:{
		paoxiao:{
			mark:true,
			marktext:"徵",
			intro:{
				name:"徵伐",
				content:"本回合使用【杀】无次数限制"
			},
			mod:{
				cardUsable:function(card,player,num){
					if(card.name=='sha') return Infinity;
				}
			},
			sub:true
		}
	}
},
/*
	张宝
*/
"lh_zhouhuan":{
	audio:"ext:乱汉:2",
	init:function(player,skill){
		if(!player.storage[skill]) player.storage[skill]=[];
	},
	trigger:{
		player:"phaseBegin"
	},
	forced:true,
	content:function (){
		"step 0"
		player.removeAdditionalSkill('lh_zhouhuan');
		var next=player.chooseControl('wei','shu','wu','qun');
		next.ai=function(){
			return Math.random();
		};
		next.set('prompt','咒幻：请选择一个势力');
		"step 1"
		if(result.control!==undefined){
			event.choiceGroup=result.control;
		}else{
			event.finish();
		}
		"step 2"
		var list=[];
		if(_status.characterlist){
			list=_status.characterlist.slice();
		}else if(_status.connectMode){
			list=get.charactersOL();
		}else{
			for(var i in lib.character){
				list.push(i);
			}
		}
		var stagePlayers=game.players.concat(game.dead);
		for(const player of stagePlayers) {
			list.remove(player.name);
			list.remove(player.name1);
			list.remove(player.name2);
		}
		for(var i=0;i<list.length;i++){
			if(lib.character[list[i]][1]!=event.choiceGroup){
				list.splice(i--,1);
			}
		}
		event.list1=list.randomGets(4);
        "step 3"
        var skills=[],aiChoice=[];
        for(var i=0;i<event.list1.length;i++){
			var templist=(lib.character[event.list1[i]][3]).filter(function(skill){
				var info=get.info(skill);
				return info&&!info.zhuSkill&&
					!info.limited&&!info.juexingji&&
					!info.hiddenSkill&&!info.charlotte;
			});
			if(templist.length==2&&!aiChoice.length){
				aiChoice=templist;
			}
			skills.addArray(templist);
        }
		if(!aiChoice) aiChoice=skills;
		event.list2AI=aiChoice.sort(function(a,b){
			return get.skillRank(b)-get.skillRank(a);
		}).slice(0,2);
		event.list2=skills;
		"step 4"
		var switchToAuto=function(){
			_status.imchoosing=false;
			event._result={
				bool:true,
				skills:event.list2AI
			};
			if(event.dialog) event.dialog.close();
			if(event.control) event.control.close();
		};
		var chooseButton=function(characters,skills){
			var event=_status.event;
			if(!event._result) event._result={};
			event._result.skills=[];
			var rSkill=event._result.skills;
			var dialog=ui.create.dialog(`请选择获得至多${player.storage.lh_fuxiao?'两':'三'}项技能`,[characters,'character'],'hidden');
			event.dialog=dialog;
			var table=document.createElement('div');
			table.classList.add('add-setting');
			table.style.margin='0';
			table.style.width='100%';
			table.style.position='relative';
			for(const skill of skills){
				var td=ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
				td.link=skill;
				table.appendChild(td);
				td.innerHTML='<span>'+get.translation(skill)+'</span>';
				td.addEventListener(lib.config.touchscreen?'touchend':'click',function(){
					if(_status.dragged) return;
					if(_status.justdragged) return;
					_status.tempNoButton=true;
					setTimeout(function(){
						_status.tempNoButton=false;
					},500);
					if(!this.classList.contains('bluebg')){
						if(rSkill.length>=(player.storage.lh_fuxiao?2:3)) return;
						this.classList.add('bluebg');
						rSkill.add(this.link);
					}else{
						this.classList.remove('bluebg');
						rSkill.remove(this.link);
					}
				});
			}
			dialog.content.appendChild(table);
			dialog.add('　　');
			dialog.open();
			/*
			event.switchToAuto=function(){
				event.dialog.close();
				event.control.close();
				game.resume();
				_status.imchoosing=false;
			};
			*/
			event.control=ui.create.control('ok',function(link){
				event.dialog.close();
				event.control.close();
				game.resume();
				_status.imchoosing=false;
			});
			for(var i=0;i<event.dialog.buttons.length;i++){
				event.dialog.buttons[i].classList.add('selectable');
			}
			game.pause();
			game.countChoose();
		};
		if(event.isMine()){
			chooseButton(event.list1,event.list2);
		}else if(event.isOnline()){
			event.player.send(chooseButton,event.list1,event.list2);
			event.player.wait();
			game.pause();
		}else{
			switchToAuto();
		}
        "step 5"
		var map=event.result||result;
		if(map&&map.skills&&map.skills.length){
			player.storage['lh_zhouhuan']=map.skills;
			player.addAdditionalSkill('lh_zhouhuan',map.skills);
			for(var i=0;i<map.skills.length;i++){
				game.log(player,'获得技能','〖'+get.translation(map.skills[i])+'〗');
			}
		}
	},
},
"lh_fuxiao":{
	audio:"ext:乱汉:2",
	intro:{
		content:"limited",
	},
	skillAnimation:true,
	animationColor:"fire",
	init:function (player){
		player.storage.lh_fuxiao=false;
	},
	trigger:{
		player:"dying"
	},
	unique:true,
	limited:true,
	filter:function (event,player){
		if(player.storage.lh_fuxiao) return false;
		return player.storage['lh_zhouhuan']&&player.storage['lh_zhouhuan'].length;
	},
	check:function (event,player){
		var needRecover=1-player.hp;
		needRecover-=player.countCards('hs',{name:'tao'})+player.countCards('hs',{name:'jiu'});
		return needRecover>0;
	},
	content:function (){
		"step 0"
		player.awakenSkill('lh_fuxiao');
		if(player.hp<2){
			player.recover(2-player.hp);
		}
		"step 1"
		var next=player.chooseControl(player.storage['lh_zhouhuan']);
		next.ai=function(button){
			return get.skillRank(button.link);
		};
		next.set('prompt','选择一项常驻技能')
		"step 2"
		if(result.control){
			player.removeAdditionalSkill('lh_zhouhuan',result.control);
			player.addSkill(result.control);
			player.storage['lh_zhouhuan'].remove(result.control);
		}
	},
},
/*
	赵云
*/
"lh_xuenu":{
	audio:"ext:乱汉:2",
	shaRelated:true,
	enable:["chooseToUse","chooseToRespond"],
	filterCard:function(card){
		return get.type2(card)=='trick';
	},
	position:"hs",
	viewAs:{
		name:"sha"
	},
	viewAsFilter:function(player){
		if(!player.hasCard(function(card){
			return get.type2(card)=='trick';
		},'hs')) return false;
	},
	check:function(){return 1},
	prompt:"将一张锦囊牌当【杀】使用或打出",
	ai:{
		effect:{
			target:function(card,player,target,current){
				if(get.tag(card,'respondSha')&&current<0) return 0.6
			}
		},
		respondSha:true,
		skillTagFilter:function(player){
			if(!player.countCards('hs',{type:'trick'})) return false;
		},
		order:function(){
			return get.order({name:'sha'})-0.1;
		},
		useful:-1,
		value:-1
	},
	group:["lh_xuenu_shaBegin","lh_xuenu_shaEnd"],
	subfrequent:["shaEnd"],
	subSkill:{
		shaBegin:{
			audio:"lh_xuenu",
			trigger:{player:"useCardToTargeted"},
			filter:function (event,player){
				if(event.card.name!='sha') return false;
				return event.target.getDiscardableCards(player,'e');
			},
			direct:true,
			content:function (){
				"step 0"
				var next=player.discardPlayerCard(trigger.target,'e');
				next.ai=function(button){
					if(_status,event.att>=0) return 0;
					return get.equipValue(button.link);
				};
				next.set('prompt','血怒：请弃置'+get.translation(trigger.target)+'的一张装备牌');
				next.set('logSkill',['lh_xuenu',trigger.target]);
				next.set('att',get.attitude(player,trigger.target));
			},
			sub:true
		},
		shaEnd:{
			audio:"lh_xuenu",
			trigger:{source:"damageAfter"},
			frequent:true,
			filter:function (event,player){
				return event.getParent().name=='sha';
			},
			content:function (){
				"step 0"
				player.recover();
			},
			sub:true
		}
	}
},
"lh_longyou":{
	audio:"ext:乱汉:2",
	locked:true,
	group:["lh_longyou_1","lh_longyou_2","lh_longyou_3","lh_longyou_4"],
	subSkill:{
		"1":{
			mod:{
				maxHandcard:function(player,num){
					return num+2;
				}
			},
			sub:true
		},
		"2":{
			mod:{
				targetEnabled:function(card,player,target){
					if(get.type(card)=='delay') return false;
				}
			},
			sub:true
		},
		"3":{
			audio:"lh_longyou",
			trigger:{player:"phaseDrawBegin2"},
			forced:true,
			filter:function (event,player){
				return !event.numFixed;
			},
			content:function (){
				"step 0"
				trigger.num+=2;
			},
			sub:true
		},
		"4":{
			audio:"lh_longyou",
			trigger:{
				player:"loseAfter",
				global:["equipAfter","addJudgeAfter","gainAfter","loseAsyncAfter"],
			},
			forced:true,
			usable:1,
			filter:function (event,player){
				if(player==_status.currentPhase) return false;
				if(event.name=='gain'&&event.player==player) return false;
				var evt=event.getl(player);
				return evt&&evt.cards2&&evt.cards2.length>0;
			},
			content:function (){
				"step 0"
				player.draw(2);
			},
			sub:true
		}
	}
},
"lh_huzhu":{
	audio:"ext:乱汉:2",
	marktext:"护",
	intro:{
		content:"已对$发动过〖护主〗"
	},
	trigger:{
		global:"dying"
	},
	filter:function (event,player){
		if(event.player==player) return false;
		if(!player.storage['lh_huzhu']) return true;
		return !player.storage['lh_huzhu'].contains(event.player);
	},
	check:function (event,player){
		return player.attitudeTo(event.player)>0;
	},
	logTarget:function (event,player){
		return event.player;
	},
	content:function (){
		"step 0"
		if(!player.storage['lh_huzhu']) player.storage['lh_huzhu']=[];
		player.storage['lh_huzhu'].push(trigger.player);
		player.storage['lh_huzhu'].sortBySeat();
		player.markSkill('lh_huzhu');
		"step 1"
		trigger.player.recover();
		"step 2"
		var next=player.chooseTarget();
		next.filterTarget=function(card,player,target){
			return player!=target&&get.distance(_status.event.source,target)<=1;
		};
		next.ai=function(target){
			return get.damageEffect(target,_status.event.player,_status.event.player);
		};
		next.set('prompt','护主：对一名与'+get.translation(trigger.player)+'距离为一的角色造成1点伤害');
		next.set('source',trigger.player);
		"step 3"
		if(result.bool){
			result.targets[0].damage();
		}
	},
},
"lh_juesheng":{
	audio:"ext:乱汉:2",
	skillAnimation:true,
	animationColor:"thunder",
	forced:true,
	unique:true,
	juexingji:true,
	init:function (player){
        player.storage.lh_juesheng=false;
    },
	trigger:{
		player:"dying",
	},
	filter:function (event,player){
        if(player.storage.lh_juesheng) return false;
        return true;
    },
	content:function (){
		"step 0"
        player.awakenSkill('lh_juesheng');
        player.storage.lh_juesheng=true;
        player.gainMaxHp();
		if(player.hp<2){
			player.recover(2-player.hp);
		}
        player.removeSkill('lh_huzhu');
    },
},
/*
	何进
*/
"lh_junquan":{
	audio:"ext:乱汉:2",
	enable:"phaseUse",
	usable:1,
	filter:function (event,player){
		return game.countPlayer()>2;
	},
	filterTarget:lib.filter.notMe,
	selectTarget:2,
	multitarget:true,
	targetprompt:['出杀者','被杀者'],
	content:function (){
		"step 0"
		var next=targets[0].chooseToUse({name:'sha'},-1,targets[1]);
		next.set('prompt','军权：请对'+get.translation(targets[1])+'使用一张【杀】');
		next.set('prompt2','否则你受到一点伤害');
		"step 1"
		if(!result.bool){
			targets[0].damage();
		}
	},
	ai:{
		threaten:1.1,
		expose:0.1,
		order:6,
		result:{
			target:-3
		}
	}
},
"lh_cuguang":{
	audio:"ext:乱汉:2",
	trigger:{
		target:"useCardToTargeted"
	},
	forced:true,
	filter:function (event,player){
		return event.player!=player&&get.type2(event.card)=='trick';
	},
	content:function (){
		"step 0"
		var next=trigger.player.chooseToDiscard('h');
		next.ai=function(card){
			if(_status.event.eff<0) return 0;
			return 6-get.value(card);
		};
		next.set('prompt','粗犷：弃置一张手牌，否则'+get.translation(trigger.card)+'对'+get.translation(player)+'无效');
		next.set('eff',get.effect(player,trigger.card,trigger.player,trigger.player));
		"step 1"
		if(result.bool==false){
			trigger.getParent().excluded.add(player);
		}
	},
	ai:{
		effect:{
			target:function(card,player,target,current){
				if(get.type2(card)=='trick'&&get.attitude(player,target)<0){
					if(_status.event.name=='lh_cuguang') return;
					var hs=player.getCards('h');
					if(hs.length<2) return 0;
					if(hs.length<=3&&player.countCards('h')<=1){
						for(var i=0;i<hs.length;i++){
							if(get.value(hs[i])<6){
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
"lh_yudun":{
	audio:"ext:乱汉:2",
	locked:true,
	ai:{
		effect:{
			player_use:function(card,player){
				if (get.type(card)=='trick'&&get.value(card)<6){
					return [0,-2];
				}
			},
			target:function(card,player,target,current){
				if(get.type(card)=='delay') return 'zeroplayertarget';
			}
		}
	},
	group:["lh_yudun_1","lh_yudun_2"],
	subSkill:{
		"1":{
			audio:"lh_yudun",
			trigger:{player:"useCardAfter"},
			forced:true,
			filter:function (event,player){
				return get.type2(event.card)=='trick';
			},
			content:function (){
				"step 0"
				player.loseHp();
			}
		},
		"2":{
			trigger:{player:"phaseJudgeBegin"},
			forced:true,
			filter:function (event,player){
				return player.countCards('j');
			},
			content:function (){
				"step 0"
				var cards=player.getCards('j');
				for(var card of cards){
					player.discard(card);
				}
			},
			audio:"lh_yudun",
		},
	}
},
/*
	何太后
*/
"lh_enwei":{
	audio:"ext:乱汉:2",
	trigger:{
		global:["recoverAfter","gainAfter"]
	},
	direct:true,
	filter:function (event,player,onrewrite){
		if(player.hasSkill('lh_enwei_off')) return false;
		if(onrewrite=='recoverAfter') return true;
		return event.getParent('phaseDraw',true)==null;
	},
	check:function (event,player){
		return true;
	},
	content:function (){
		"step 0"
		var next=player.chooseControl('cancel2');
		next.ai=function(){
			return (get.attitude(player,trigger.player)>0)?1:0;
		};
		next.set('choiceList',[
            '令'+get.translation(trigger.player)+'弃一张牌',
            '令'+get.translation(trigger.player)+'摸一张牌',
        ]);
		next.set('prompt',get.prompt('lh_enwei'));
		"step 1"
		if([0,1].contains(result.index)){
			player.addTempSkill('lh_enwei_off');
			player.logSkill('lh_enwei',trigger.player);
		}
        switch(result.index){
            case 0:trigger.player.chooseToDiscard('he',1,true);break;
            case 1:trigger.player.draw();break;
        };
	},
	ai:{
		threaten:1.1,
		expose:0.2,
	},
	subSkill:{off:{sub:true}}
},
"lh_dufei":{
	audio:"ext:乱汉:2",
	enable:"phaseUse",
	usable:1,
	filter:function (event,player){
		return player.countCards('he');
	},
	filterTarget:lib.filter.notMe,
	filterCard:true,
	selectCard:[1,2],
	position:"he",
	check:function (card){
		var player=get.owner(card);
		if(ui.selected.cards.length&&player.hp==1) return 0;
		return 7-get.value(card);
	},
	content:function (){
		"step 0"
		target.damage(cards.length);
		"step 1"
		if(cards.length>1){
			player.loseHp();
		}
	},
	ai:{
		threaten:2,
		expose:1,
		order:6,
		result:{
			target:function(player,target){
				if(get.damageEffect(target,player,player)>0) return -3;
				return -0.5;
			}
		}
	}
},
"lh_linzheng":{
	audio:"ext:乱汉:2",
	mark:true,
	intro:{
		content:"limited",
	},
	skillAnimation:true,
	animationColor:"thunder",//#7700BB
	init:function (player){
		player.storage.lh_linzheng=false;
	},
	trigger:{
		global:"phaseBegin"
	},
	unique:true,
	limited:true,
	filter:function (event,player){
		if(event.player==player) return false;
		if(event.player.isHealthy()) return false;
		return player.countCards('e');
	},
	check:function (event,player){
		return get.attitude(player,event.player)<=0;
	},
	content:function (){
		"step 0"
		player.awakenSkill('lh_linzheng');
		player.discard(player.getCards('e'));
		player.drawTo(player.maxHp);
		trigger.player.skip('phaseJudge');
		trigger.player.skip('phaseDraw');
		trigger.player.skip('phaseUse');
		player.insertPhase();
	},
	ai:{
		threaten:2.3,
		expose:1,
	}
},
/*
	张梁
*/
"lh_junpo":{
	audio:"ext:乱汉:2",
	marktext:"军",
	intro:{
		name:"军破",
		content:function(storage,player){
			if(storage) return '下次造成或受到伤害摸'+get.cnNumber(storage)+'张牌。';
			return '你还没用牌呢';
		},
	},
	trigger:{
		player:"phaseZhunbei"
	},
	forced:true,
	filter:function (event,player){
		return player.hasMark('lh_junpo');
	},
	content:function (){
		"step 0"
		var num=player.countMark('lh_junpo');
		player.draw(Math.min(num,4));
		if(num>=4) player.addTempSkill('lh_junpo_hitsha');
		player.removeMark('lh_junpo',num,false);
	},
	group:["lh_junpo_use"],
	subSkill:{
		use:{
			trigger:{player:"useCardBegin"},
			direct:true,
			content:function(){
				"step 0"
				player.addMark('lh_junpo',1,false);
			},
			sub:true
		},
		hitsha:{
			audio:"lh_junpo",
			trigger:{player:"useCardToTargeted"},
			forced:true,
			filter:function (event,player){
				return event.card.name=='sha';
			},
			content:function (){
				"step 0"
				trigger.getParent().directHit.add(trigger.target);
			},
			sub:true
		}
	}
},
/*
"lh_tongzhen":{
	audio:"ext:乱汉:2",
	trigger:{
		player:"useCardToTargeted",
	},
	forced:true,
	filter:function (event,player,onrewrite){
		if(!player.storage['lh_tongzhen']) return false;
		return event.card.name=='sha';
	},
	logTarget:"target",
	content:function (){
		"step 0"
		trigger.getParent().directHit.add(trigger.target);
		var id=trigger.target.playerid;
		var map=trigger.getParent().customArgs;
		if(!map[id]) map[id]={};
		if(typeof map[id].extraDamage!='number'){
			map[id].extraDamage=0;
		}
		map[id].extraDamage++;
	},
	ai:{
		threaten:4
	},
	group:["lh_tongzhen_count"],
	subSkill:{
		"count":{
			init:function (player){
				if(!player.storage['lh_tongzhen_count']){
					player.storage['lh_tongzhen_count']=0;
				}
			},
			trigger:{player:"drawEnd"},
			direct:true,
			filter:function (event,player){
				if(player.storage['lh_tongzhen']===true) return false;
				return event.getParent().name=='lh_junpo';
			},
			content:function (){
				"step 0"
				player.storage['lh_tongzhen_count']+=trigger.result.length;
				if(player.storage['lh_tongzhen_count']>=36){
					player.storage['lh_tongzhen']=true;
				}
			},
			sub:true
		},
	}
},
*/
/*
	张让
*/
"lh_jinshi":{
	audio:"ext:乱汉:2",
	trigger:{
		player:["phaseZhunbeiBegin","enterGame"],
		global:"gameDrawAfter"
	},
	direct:true,
	filter:function (event,player){
		if(!game.hasPlayer(function(current){
			return current.hasMark('lh_jinshi_mark');
		})) return true;
		return player.countCards('he')>=2&&game.hasPlayer(function(current){
			return current!=player&&!current.hasMark('lh_jinshi_mark');
		});
	},
	content:function (){
		"step 0"
		var list=game.filterPlayer(function(current){
			return current.hasMark('lh_jinshi_mark');
		});
		if(list.length){
			player.chooseCardTarget({
				filterTarget:function (card,player,target){
					return player!=target&&!target.hasMark('lh_jinshi_mark');
				},
				filterCard:lib.filter.cardDiscardable,
				selectCard:2,
				position:"he",
				ai1:function(card){
					if(_status.event.goon) return 5-get.value(card);
					return 0;
				},
				ai2:function(target){
					if(_status.event.player.attitudeTo(target)<=0) return 0;
					return 5/Math.max(1,target.hp);
				},
				goon:function(source,target){
					if(get.attitude(player,source)<0) return true;
					if(target&&get.attitude(player,target)>0){
						return target.hp<source.hp;
					}
				}(list[0],ui.selected.targets[0]||undefined),
				prompt:get.prompt('lh_jinshi'),
				prompt2:"弃置两张牌将"+get.translation(list)+"的“近侍”标记转移给其他角色"
			});
		}else{
			var next=player.chooseTarget();
			next.filterTarget=lib.filter.notMe;
			next.ai=function(target){
				if(_status.event.player.attitudeTo(target)<=0) return 0;
				return 5/Math.max(1,target.hp);
			};
			next.set('prompt',get.prompt('lh_jinshi'));
			next.set('prompt2','令一名其他角色获得“近侍”标记，有此标记的角色将受到你的保护');
		}
		"step 1"
		if(result.bool){
			player.logSkill('lh_jinshi');
			if(result.cards) player.discard(result.cards).delay=false;
			player.line2(game.filterPlayer(function(current){
				if(current.hasMark('lh_jinshi_mark')){
					current.removeMark('lh_jinshi_mark');
					return true;
				}
			}).concat(result.targets),'green');
			result.targets[0].addMark('lh_jinshi_mark');
		}
	},
	group:["lh_jinshi_untianxiang"],
	subSkill:{
		untianxiang:{
			audio:"lh_jinshi",
			trigger:{global:"damageBegin2"},
			filter:function (event,player){
				return player!=event.source&&event.player.hasMark('lh_jinshi_mark');
			},
			check:function (event,player){
				if(get.damageEffect(event.player,event.source,player,event.nature)>=0) return false;
				return event.num<player.hp;
			},
			prompt:function (event,player){
				var tip='是否代替';
				if(event.source){
					tip+=get.translation(event.source)+'对'+get.translation(event.player)+'造成的';
				}else{
					tip+=get.translation(event.player)+'受到的';
				}
				tip+=get.cnNumber(event.num)+'点';
				tip+=(event.nature)?get.translation(event.nature)+'属性':'';
				tip+='伤害？';
				return tip;
			},
			content:function (){
				"step 0"
				player.draw();
				trigger.player=player;
			},
			sub:true
		},
		mark:{
			marktext:"侍",
			intro:{
				name:"近侍",
				content:"张常侍是我父！"
			},
			sub:true
		}
	}
},
"lh_huoguo":{
	audio:"ext:乱汉:2",
	intro:{
		name:"祸国",
		content:"cards",
		onunmark:function(storage,player){
			if(storage&&storage.length){
				player.$throw(storage,1000);
				game.cardsDiscard(storage);
				game.log(storage,'被置入了弃牌堆');
			 storage.length=0;
			}
		}
	},
	init:function(player){
		if(!player.storage['lh_huoguo']) player.storage['lh_huoguo']=[];
	},
	enable:"chooseToUse",
	filter:function (event,player){
		if(!player.storage['lh_huoguo'].length) return false;
		for(var i of lib.inpile){
			if(get.type(i)=='trick'&&lib.filter.filterCard({name:i},player,event)) return true;
		}
		return false;
	},
	chooseButton:{
		dialog:function (event,player){
			var list=[],inpile=get.inpile('trick');
			for(var i=0;i<inpile.length;i++){
				var name=inpile[i];
				if(event.filterCard({name:name},player,event)) list.push(['锦囊','',name]);
			}
			return ui.create.dialog(
				'祸国',
				'请选择武将牌上要扔掉的牌',
				player.storage['lh_huoguo'],
				'请选择要使用的锦囊牌',
				[list,'vcard'],
				'hidden'
			);
		},
		select:2,
		filter:function (button,player){
			var bool1=ui.selected.buttons.length&&player.storage['lh_huoguo'].contains(ui.selected.buttons[0].link);
			var bool2=player.storage['lh_huoguo'].contains(button.link);
			if(bool1^bool2){
				if(bool1) return _status.event.getParent().filterCard({name:button.link[2]},player,_status.event.getParent());
				return true;
			}
		},
		check:function (button){
			var player=_status.event.player;
			if(!player.storage['lh_huoguo'].contains(button.link)){
				if(player.countCards('hs',button.link[2])>0) return 0;
				if(['wugu','zhulu_card'].contains(button.link[2])) return 0;
				var effect=player.getUseValue(button.link[2]);
				if(effect>0) return effect;
				return 0;
			}
			return 1;
		},
		check:function(button){
			if(_status.event.getParent().type!='phase') return 1;
			var player=_status.event.player;
			if(!player.storage['lh_huoguo'].contains(button.link)){
				if(['wugu','zhulu_card','yiyi','lulitongxin','lianjunshengyan','diaohulishan'].contains(button.link[2])) return 0;
				return player.getUseValue({
					name:button.link[2],
					nature:button.link[3],
				});
			}
			return 1;
		},
		backup:function (links,player){
			return {
				audio:"lh_huoguo",
				filterCard:function (){return false},
				selectCard:-1,
				popname:true,
				viewAs:{name:links[1][2]},
				cards:links,
				onuse:function (result,player){
					result.cards=lib.skill[result.skill].cards;
					var card=result.cards[0];
					game.cardsDiscard(card);
					player.$throw(card);
					player.storage['lh_huoguo'].remove(card);
					player.syncStorage('lh_huoguo');
					if(!player.storage['lh_huoguo'].length){
						player.unmarkSkill('lh_huoguo');
					}else{
						player.markSkill('lh_huoguo');
					}
				}
			}
		},
		prompt:function(links,player){
			return '请选择【'+get.translation(links[1][2])+'】的目标';
		}
	},
	hiddenCard:function(player,name){
		return get.type(name)=='trick';
	},
	ai:{
		threaten:2,
		order:1,
		result:{
			player:1
		}
	},
	subfrequent:["draw"],
	group:["lh_huoguo_draw"],
	subSkill:{
		draw:{
			audio:"lh_huoguo",
			trigger:{player:"damageAfter"},
			frequent:true,
			content:function (){
				"step 0"
				player.draw();
				"step 1"
				if(result&&result.length){
					player.lose(result,ui.special,'toStorage');
					player.storage['lh_huoguo']=player.storage['lh_huoguo'].concat(result);
					player.syncStorage('lh_huoguo');
					player.markSkill('lh_huoguo');
					game.log(player,'将',result,'放到了武将牌上');
				}
			},
			sub:true
		},
		backup:{audio:"lh_huoguo",sub:true}
	}
},
"lh_liancai":{
	audio:"ext:乱汉:2",
	enable:"phaseUse",
	usable:1,
	filterTarget:lib.filter.notMe,
	content:function (){
		"step 0"
		var next=target.chooseCard('he',2);
		next.ai=function(card){
			if(_status.event.player.hp<=2) return 10-get.value(card);
			return 6-get.value(card);
		};
		next.set('prompt','敛财：交给'+get.translation(player)+'两张牌，否则受到一点伤害');
		"step 1"
		if(result.bool){
			player.gain(result.cards,target,'giveAuto');
			target.draw();
		}else{
			target.damage();
		}
	},
	ai:{
		threaten:2,
		expose:0.2,
		order:7,
		result:{
			target:function(player,target){
				if(get.damageEffect(target,player,player)<0) return -1;
				if(target.countCards('he')<=2) return -3;
				return -0.5;
			}
		}
	}
},
"lh_gongfen":{
	audio:"ext:乱汉:2",
	trigger:{
		player:"phaseJieshuEnd"
	},
	forced:true,
	filter:function (event,player){
		var damage=player.getStat().damage;
		return typeof damage=='number'&&damage>4;
	},
	content:function (){
		"step 0"
		player.die();
	},
	ai:{
		threaten:-0.2,
		effect:{
			player:function (card,player,target){
				var damageCount=player.getStat().damage||0;
				if(damageCount>4) return;
				if(get.tag(card,'damage')){
					return [0.9,-damageCount];
				}
			},
		}
	}
},
/*
	黄盖
*/
"lh_huopo":{
	audio:"ext:乱汉:2",
	trigger:{
		player:"damageEnd"
	},
	direct:true,
	filter:function (event,player){
		return event.nature&&event.nature=='fire';
	},
	content:function (){
		"step 0"
		var next=player.chooseTarget();
		next.filterTarget=lib.filter.notMe;
		next.ai=function (target){
			return get.damageEffect(target,_status.event.player,_status.event.player,'fire');
		};
		next.set('prompt',get.prompt2('lh_huopo'));
		"step 1"
		if(result.bool){
			var next=game.createEvent('lh_huopoInsert');
			event.next.remove(next);
			var evt=event.getParent();
			evt.after.push(next);
			next.player=player;
			next.num=trigger.num;
			next.targets=result.targets
			next.setContent(function(){
				player.logSkill('lh_huopo',targets);
				for(var i=0;i<targets.length;i++){
					targets[i].damage('fire',num,player);
				}
			});
		};
	},
	ai:{
		threaten:1.1,
		expose:0.3,
		effect:{
			target:function (card,player,target){
				if(get.tag(card,'fireDamage')){
					if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
					if(!target.hasFriend()) return;
					var num=1;
					if(get.attitude(player,target)>0){
						num=0.5;
					}
					if(target.hp>2) return [1,num*1.5];
					if(target.hp<=2) return [1,num*0.5];
				}
			}
		}
	}
},
"lh_yanzhou":{
	audio:"ext:乱汉:2",
	enable:"phaseUse",
	usable:1,
	filterTarget:true,
	selectTarget:[1,2],
	content:function (){
		"step 0"
		if(!target.isLinked()) target.link();
	},
	contentAfter:function (){
		"step 0"
		player.damage('fire');
	},
	ai:{
		threaten:0.5,
		order:7,
		result:{
			target:function (player,target){
				if(!target.isLinked()&&get.effect(target,{name:'tiesuo'},player,player)>0){
					return get.attitude(player,target)-0.1;
				}
				return 0;
			},
			player:function (player,target){
				return get.damageEffect(player,player,player,'fire');
			}
		}
	}
},
/*
	张飞
*/
"lh_zuizhan":{
	audio:"ext:乱汉:2",
	mod:{
		ignoredHandcard:function(card,player){
			if(card.name=='jiu'){
				return true;
			}
		},
		cardDiscardable:function(card,player,name){
			if(card.name=='jiu'){
				return false;
			}
		}
	},
	trigger:{
		player:"useCard"
	},
	forced:true,
	filter:function(event,player){
		return event.card.name=='jiu';
	},
	content:function (){
		"step 0"
		player.recover();
	},
},
"lh_nuyan":{
	audio:"ext:乱汉:2",
	marktext:"焰",
	intro:{
		name:"怒焰",
		content:"mark"
	},
	trigger:{
		player:"damageAfter",
	},
	forced:true,
	content:function (){
		"step 0"
		var next=player.chooseUseTarget({name:'sha'},false);
		next.set('prompt','怒焰：视为使用一张【杀】，或取消并摸一张牌');
		"step 1"
		if(!result.bool){
			player.draw();
		}else if(game.hasPlayer2(function(current){
			return current.getHistory('damage',function(evt){
				return evt.getParent(4)==event;
			}).length>0
		})){
			player.draw(2);
		}
	},
},
"lh_jiuwu":{
	audio:"ext:乱汉:2",
	enable:"chooseToUse",
	filterCard:function(card){
		return get.type(card)=='basic';
	},
	viewAs:{name:'jiu'},
	viewAsFilter:function(player){
		if(_status.currentPhase!=player||player.hp>=4) return false;
		if(!player.countCards('hs',{type:'basic'})) return false;
	},
	precontent:function (){
		player.addTempSkill('lh_jiuwu_zui',{player:'phaseBegin'});
	},
	prompt:"将一张基本牌当酒使用",
	check:function(card){
		if(_status.event.type=='dying') return 1/Math.max(0.1,get.value(card));
		return 4-get.value(card);
	},
	ai:{
		threaten:1,
	},
	subSkill:{
		zui:{
			trigger:{global:"useCard"},
			forced:true,
			filter:function (event,player){
				return event.player!=player&&event.card&&
					get.type(event.card)=='trick';
			},
			content:function (){
				"step 0"
				trigger.directHit.add(player);
			}
		}
	}
},
/*
	李儒
*/
"lh_zhenshi":{
	audio:"ext:乱汉:2",
	enable:'phaseUse',
	usable:1,
	filter:function (event,player){
		return player.countCards('h',{color:'black'});
	},
	filterTarget:lib.filter.notMe,
	filterCard:{
		color:"black"
	},
	check:function (card){
		return 6-get.value(card);
	},
	discard:false,
	lose:false,
	delay:false,
	content:function(){
		"step 0"
		target.gain(cards,player,'giveAuto');
		"step 1"
		target.damage();
	},
	ai:{
		expose:0.15,
		order:4,
		result:{
			target:function(player,target){
				if(get.damageEffect(target,player,player)>=0) return -1;
				return 0;
			},
			player:1
		}
	}
},
"lh_quanqian":{
	audio:"ext:乱汉:2",
	trigger:{
		global:"phaseUseBegin"
	},
	filter:function (event,player){
		if(player.hasSkill('lh_quanqian_off')) return false;
		return player!=event.player&&player.countCards('h');
	},
	direct:true,
	content:function (){
		"step 0"
		var check=false;
		if(trigger.player.canMoveCard(true)){
			check=game.hasPlayer(function(current){
				return get.attitude(trigger.player,current)>0&&current.countCards('j');
			});
		}
		var next=player.chooseCard('h');
		next.ai=function(card){
			if(!_status.event.check||!_status.event.att) return 0;
			return 7-get.value(card);
		};
		next.set('prompt',get.prompt2('lh_quanqian'));
		next.set('check',check);
		next.set('att',get.attitude(player,trigger.player)>0);
		"step 1"
		if(result.bool){
			player.addTempSkill('lh_quanqian_off','roundStart');
			player.logSkill('lh_quanqian',trigger.player);
			trigger.player.gain(result.cards,player,'giveAuto');
			trigger.player.moveCard();
		}
	},
	ai:{
		threaten:1.2
	},
	subSkill:{
		off:{
			mark:true,
			marktext:"迁",
			intro:{
				name:"劝迁",
				content:"你本轮已劝迁"
			},
			sub:true
		}
	}
},
"lh_duzhi":{
	audio:"ext:乱汉:2",
	mod:{
		maxHandcard:function(player,num){
			return num+2;
		}
	},
	trigger:{
		player:"phaseUseBegin"
	},
	forced:true,
	content:function (){
		"step 0"
		if(player.countCards('h')) player.chooseToDiscard('h',true);
		player.draw(2);
	}
},
"lh_feidi":{
	audio:"ext:乱汉:2",
	unique:true,
	enable:"phaseUse",
	limited:true,
	animationColor:"fire",
	filterTarget:lib.filter.notMe,
	content:function (){
		"step 0"
		player.awakenSkill('lh_feidi');
		"step 1"
		player.draw(3);
		target.addTempSkill('lh_feidi_fengyin','roundStart');
	},
	subSkill:{
		fengyin:{
			init:function(player,skill){
				var skills=player.getSkills(true,false);
				for(var i=0;i<skills.length;i++){
					if(lib.skill[skills[i]].juexingji||lib.skill[skills[i]].charlotte){
						skills.splice(i--,1);
					}
				}
				player.disableSkill(skill,skills);
			},
			onremove:function(player,skill){
				player.enableSkill(skill);
			},
			locked:true,
			charlotte:true,
			mark:true,
			intro:{
				content:function(storage,player,skill){
					var list=[];
					for(var i in player.disabledSkills){
						if(player.disabledSkills[i].contains(skill)){
							list.push(i)
						}
					}
					if(list.length){
						var str='失效技能：';
						for(var i=0;i<list.length;i++){
							if(lib.translate[list[i]+'_info']){
								str+=get.translation(list[i])+'、';
							}
						}
						return str.slice(0,str.length-1);
					}
				}
			},
			sub:true
		}
	}
},
/*
	华雄
*/
"lh_xizhai":{
	audio:"ext:乱汉:2",
    enable:"phaseUse",
    usable:1,
	filter:function (event,player){
		return player.countCards('he')>=2;
	},
    filterCard:true,
	selectCard:2,
    filterTarget:lib.filter.notMe,
    check:function (card){
        return 7-get.value(card);
    },
    line:"fire",
    content:function (){
		"step 0"
        target.damage();
		"step 1"
		player.gainPlayerCard(target,'he',true);
		"step 2"
		if(result.bool){
			player.showCards(result.links,'袭寨');
			if(get.color(result.links[0])=='red'){
				player.recover();
			}else{
				player.draw();
			}
		}
    },
    ai:{
		order:9,
        result:{
            target:function (player,target){
				if(get.damageEffect(target,player,player)<=0) return 0;
				if(!target.countCards('he')) return -2;
                return -3;
            }
        }
    }
},
"lh_zulian":{
	audio:"ext:乱汉:2", 
	init:function (player){
		player.storage['lh_zulian_offMark']=[];
	},
	trigger:{
		global:"phaseUseBegin"
	},
	filter:function (event,player){
		if(player.isDamaged()) return false;
		if(player.storage['lh_zulian_offMark'].contains(event.player)) return false;
		return player.canUse('juedou',event.player,false,true);
	},
	check:function (event,player){
		if(get.attitude(player,event.player)>0) return false;
		return player.countCards('hs','sha')+1>event.player.countCards('h')/4;
	},
	content:function (){
		"step 0"
		player.chooseUseTarget({name:'juedou'},trigger.player,true,'nodelayx');
		"step 1"
		if(trigger.player.getHistory('damage',function(evt){
			return evt.getParent(4)==event;
		}).length>0) trigger.player.addTempSkill('lh_zulian_zishou');
	},
	group:["lh_zulian_getMark"],
	subSkill:{
		getMark:{
			trigger:{
				source:"damageAfter"
			},
			silent:true,
			content:function (){
				"step 0"
				player.addTempSkill('lh_zulian_offMark',{player:'phaseBegin'});
				player.storage['lh_zulian_offMark'].add(trigger.player);
				player.syncStorage('lh_zulian_offMark');
			},
			sub:true
		},
		offMark:{
			mark:true,
			marktext:"阻",
			intro:{
				name:"阻联无效目标",
				content:"players"
			},
			onremove:function (player){
				player.storage['lh_zulian_offMark']=[];
			},
			sub:true
		},
		zishou:{
			mark:true,
			marktext:"阻",
			intro:{
				name:"阻联",
				content:"你本回合不能对其他角色使用牌"
			},
			mod:{
				playerEnabled:function(card,player,target){
					if(player!=target) return false;
				}
			},
			sub:true
		}
	}
},
/*
	袁绍
*/
"lh_yezhan":{
	audio:"ext:乱汉:2",
	enable:"phaseUse",
	usable:1,
	filterTarget:function (card,player,target){
		return player!=target&&target.countCards('h');
	},
	content:function (){
		"step 0"
		var next=target.chooseCard(true,'h');
		next.ai=function(card){
			if(get.type(card)=='basic') return 1;
			return -get.value(card);
		};
		next.set('prompt','野展：请交给'+get.translation(player)+'一张手牌');
		"step 1"
		if(result.bool){
			player.gain(result.cards,target,'giveAuto');
			var cardType=get.type2(result.cards[0]);
			switch(cardType){
				case 'basic':player.addTempSkill('lh_yezhan_addShaLimit');break;
				case 'trick':event.goto(2);break;
				case 'equip':player.draw(2);break;
			}
			if(cardType!='trick') event.finish();
		}
		"step 2"
		var next=player.chooseTarget(true);
		next.ai=function(target){
			var player=_status.event.player;
			return get.damageEffect(target,player,player);
		};
		next.set('prompt','野展（锦囊牌）：对一名角色造成一点伤害');
		"step 3"
		if(result.bool){
			result.targets[0].damage();
		}
	},
	ai:{
		threaten:1.3,
		order:7,
		result:{
			target:-3
		}
	},
	subSkill:{
		addShaLimit:{
			mark:true,
			marktext:"野",
			intro:{
				name:"野展",
				content:"本回合使用【杀】次数上限+1"
			},
			mod:{
				cardUsable:function(card,player,num){
					if(card.name=='sha') return num+1;
				}
			},
			sub:true
		}
	}
},
"lh_paimou":{
	audio:"ext:乱汉:2",
	trigger:{
		target:"useCardToTarget"
	},
	direct:true,
	filter:function (event,player){
		return player!=event.player&&get.type2(event.card)=='trick'&&player.hasSha();
	},
	content:function (){
		"step 0"
		var next=player.chooseToUse(function(card,player,event){
			if(get.name(card)!='sha') return false;
			return lib.filter.filterCard.apply(this,arguments);
		},trigger.player,-1);
		next.addCount=false;
		next.set('prompt',get.prompt2('lh_paimou'));
		next.logSkill=['lh_paimou',trigger.player];
	}
},
"lh_wuliang":{
	audio:"ext:乱汉:2",
	trigger:{
		player:"phaseDrawBegin2"
	},
	direct:true,
	filter:function (event,player){
		return !event.numFixed;
	},
	content:function (){
		"step 0"
		var tip=get.prompt('lh_wuliang'),num=player.maxHp-2;
		if(num>0) tip+='（多摸'+get.cnNumber(num)+'张牌）';
		var next=player.chooseBool();
		next.ai=function(){
			return _status.event.player.maxHp>2;
		};
		next.set('prompt',tip);
		next.set('prompt2',lib.translate['lh_wuliang_info']);
		"step 1"
		if(result.bool){
			player.logSkill('lh_wuliang1');
			trigger.num+=Math.max(player.maxHp-2,0);
			player.addTempSkill('lh_wuliang_shaole',{player:'phaseBegin'});
		}
	},
	subSkill:{
		shaole:{
			mark:true,
			marktext:"乌",
			intro:{
				name:"乌粮",
				content:"跳过你下个摸牌阶段，改为亮出牌堆顶三张牌获得之，其中每有一张♥牌你受到1点火属性伤害。"
			},
			onremove:function (player){
				player.logSkill('lh_wuliang2');
				player.skip('phaseDraw');
				var cards=get.cards(3);
				var damageNum=0;
				for(var i=0;i<cards.length;i++){
					if(get.suit(cards[i])=='heart') damageNum++;
				}
				player.gain(cards,'gain2','log');
				if(damageNum>0) player.damage(damageNum,'fire','nosource');
			},
			sub:true
		}
	},
},
"lh_wuliang1":{audio:"ext:乱汉:true"},
"lh_wuliang2":{audio:"ext:乱汉:true"},//game.me.logSkill('lh_wuliang');
/*
	貂蝉
*/
"lh_qumei":{
	audio:"ext:乱汉:2",
	enable:'phaseUse',
	usable:1,
	filter:function (event,player){
		return player.countCards('h');
	},
	filterTarget:function (card,player,target){
		return player!=target&&target.countCards('h');
	},
	filterCard:true,
	check:function (card){
		return 6-get.value(card);
	},
	discard:false,
	lose:false,
	delay:false,
	content:function (){
		"step 0"
		player.showCards(cards);
		"step 1"
		var next=target.chooseCard('h',true);
		next.ai=function(card){
			if(get.suit(card)==_status.event.suit){
				return 10-get.value(card);
			}
			return 7-get.value(card);
		};
		next.set('prompt','屈魅：请交给'+get.translation(player)+'一张手牌');
		next.set('suit',get.suit(cards[0]));
		"step 2"
		if(result.bool){
			target.showCards(result.cards);
			player.gain(result.cards,target,'giveAuto');
			if(get.suit(result.cards[0])!=get.suit(cards[0])){
				target.addAdditionalSkill('lh_qumei','lh_qumei_addDamage');
				target.storage['lh_qumei_addDamage']=player;
			}
		}
	},
	group:["lh_qumei_loseEff"],
	subSkill:{
		loseEff:{
			trigger:{
				player:"phaseBefore"
			},
			silent:true,
			content:function (){
				"step 0"
				game.countPlayer(function(current){
					if(current.hasSkill('lh_qumei_addDamage')&&
						current.storage['lh_qumei_addDamage']==player){
						current.removeAdditionalSkill('lh_qumei');
					}
				});
			},
			sub:true
		},
		addDamage:{
			audio:"lh_qumei",
			mark:true,
			marktext:"魅",
			intro:{
				name:"屈魅",
				content:"直到\$回合开始前，你下次受到的伤害值+1"
			},
			trigger:{
				player:"damageBegin3"
			},
			direct:true,
			content:function (){
				"step 0"
				var source=player.storage['lh_qumei_addDamage'];
				source.logSkill('lh_qumei',player);
				trigger.num++;
				player.removeAdditionalSkill('lh_qumei');
			},
		}
	}
},
"lh_huofan":{
	audio:"ext:乱汉:2",
	trigger:{
		target:"useCardToTarget"
	},
	direct:true,
	filter:function (event,player){
		if(player.hasSkill('lh_huofan_off')) return false;
		if(!player.countCards('he',{type:'equip'})) return false;
		return ['basic','trick'].contains(get.type2(event.card))&&
			event.targets.length==1;
	},
	content:function (){
		"step 0"
		player.chooseCardTarget({
			position:"he",
			filterCard:{
				type:"equip"
			},
			filterTarget:function (card,player,target){
				var trigger=_status.event;
				if(player!=target&&target!=trigger.source){
					if(lib.filter.targetEnabled(trigger.card,trigger.source,target)) return true;
				}
				return false;
			},
			ai1:function(card){
				var trigger=_status.event;
				var eff=get.effect(trigger.player,trigger.card,trigger.source,trigger.source);
				if(eff>0) return 0;
				return 6-get.value(card)-eff;
			},
			ai2:function(target){
				var trigger=_status.event;
				var eff1=get.effect(trigger.player,trigger.card,trigger.source,trigger.source);
				var eff2=get.effect(target,trigger.card,trigger.source,trigger.source);
				return 2/(eff2-eff1);
			},
			prompt:get.prompt('lh_huofan'),
			prompt2:'交给其他角色一张牌，令其代替你成为'+get.translation(trigger.card)+'的目标',
			source:trigger.player,
			card:trigger.card
		});
		"step 1"
		if(result.bool){
			player.logSkill('lh_huofan');
			player.addTempSkill('lh_huofan_off');
			var target=result.targets[0];
			target.gain(result.cards,player,'giveAuto','log');
			var evt=trigger.getParent();
			evt.triggeredTargets2.remove(player);
			evt.targets.remove(player);
			evt.targets.push(target);
			game.log(target,'代替',player,'成为了',trigger.card,'的目标');
		}
	},
	subSkill:{off:{sub:true}}
},
"lh_sihui":{
	audio:"ext:乱汉:2",
	unique:true,
	limited:true,
	animationColor:"#FFB6C1",
	enable:"phaseUse",
	filter:function (event,player){
		return player.countCards('h');
	},
	filterTarget:lib.filter.notMe,
	filterCard:true,
	selectCard:-1,
	discard:false,
	lose:false,
	delay:false,
	content:function (){
		"step 0"
		player.awakenSkill('lh_sihui');
		target.gain(cards,player,'giveAuto');
		"step 1"
		var num=cards.length;
		var next=player.chooseTarget([1,num]);
		next.filterTarget=function(card,player,target){
			return _status.event.target!=target;
		};
		next.ai=function(target){
			var player=_status.event.player;
			return get.damageEffect(target,player,player)>0;
		};
		next.set('prompt','私会：请选择至多'+get.cnNumber(num)+'名角色');
		next.set('prompt2','令'+get.translation(target)+'对这些角色各造成1点伤害');
		next.set('target',target);
		"step 2"
		if(result.bool){
			for(var targeti of result.targets){
				targeti.damage(target);
			}
		}
	},
	ai:{
		expose:0.15,
		order:1,
		result:{
			target:function (player,target){
				return 2;
			},
			player:function (player,target){
				if(game.countPlayer(function(current){
					return get.damageEffect(current,current,player)>0;
				})>player.countCards('h')) return -5;
				return -0.5;
			}
		}
	}
},
/*
	马超&马云禄
*/
"lh_weiju":{
	audio:"ext:乱汉:2",
	trigger:{
		source:"damageAfter"
	},
	direct:true,
	filter:function (event,player){
		return _status.currentPhase!=player&&player.countCards('h');
	},
	content:function (){
		"step 0"
		event.target=player;
		event.player=_status.currentPhase;
		"step 1"
		var next=player.chooseBool();
		next.ai=function(){
			return _status.event.att<=0;
		};
		next.set('prompt',get.prompt('lh_weiju',target));
		next.set('prompt2','令'+get.translation(target)+'弃置一张手牌');
		next.set('att',get.attitude(player,target));
		"step 2"
		if(result.bool){
			target.logSkill('lh_weiju',player);
			target.chooseToDiscard('h',true);
		}
	},
	ai:{
		threaten:1.3
	}
},
"lh_weipo":{
	audio:"ext:乱汉:2",
	trigger:{
		global:"phaseUseBegin"
	},
	frequent:true,
	filter:function (event,player){
		return player!=event.player&&get.distance(player,event.player)<=1;
	},
	check:function (event,player){
		return true;
	},
	content:function (){
		"step 0"
		player.draw();
		var next=trigger.player.chooseToRespond({name:'shan'});
		next.set('ai',function(card){
			if(_status.event.damEff>=0) return 0;
			if(_status.event.player.hasSkillTag('noShan')||
				(_status.event.att>0&&!_status.event.player.hasSkillTag('useShan'))){
				return -1;
			}
			return 11-get.value(card);
		});
		next.set('prompt','威破：请打出一张【闪】，否则受到一点伤害');
		next.set('damEff',get.damageEffect(trigger.player,player,player));
		next.set('att',get.attitude(trigger.player,player));
		"step 1"
		if(result.bool==false){
			var next=player.chooseBool();
			next.ai=function(){
				return _status.event.damEff>0;
			};
			next.set('damEff',get.damageEffect(trigger.player,player,player));
			next.set('prompt','威破：是否对'+get.translation(trigger.player)+'造成一点伤害？');
		}else event.finish();
		"step 2"
		if(result.bool){
			trigger.player.damage();
		}
	},
	ai:{
		expose:0.1
	}
},
"lh_qiangji":{
	audio:"ext:乱汉:2",
	trigger:{
		player:"shaMiss"
	},
	direct:true,
	filter:function (event,player){
		if(player.hasSkill('lh_qiangji_off')) return false;
		if(get.itemtype(event.cards)!=='cards') return false;
		return true;
	},
	content:function (){
		"step 0"
		var next=player.chooseTarget();
		next.filterTarget=function(card,player,target){
			if(player==target) return false;
			return target.countDiscardableCards(player,'he');
		};
		next.ai=function(target){
			return -_status.event.player.attitudeTo(target);
		};
		next.set('prompt',get.prompt2('lh_qiangji'));
		"step 1"
		if(result.bool){
			player.logSkill('lh_qiangji');
			player.addTempSkill('lh_qiangji_off');
			player.discardPlayerCard(result.targets[0],'he',true);
		}else event.finish();
		"step 2"
		if(result.bool){
			player.gain(trigger.cards,'gain2');
		}
	},
	ai:{
		threaten:1.7
	},
	subSkill:{off:{sub:true}}
},
"lh_shuaixing":{
	audio:"ext:乱汉:2",
	trigger:{
		player:"gainAfter"
	},
	direct:true,
	filter:function (event,player){
		for(var i=0;i<event.cards.length;i++){
			if(get.name(event.cards[i])=='sha') return true;
		}
		return false;
	},
	content:function (){
		"step 0"
		event.count=0;
		for(var i=0;i<trigger.cards.length;i++){
			if(get.name(trigger.cards[i])=='sha') event.count++;
		}
		"step 1"
		var next=player.chooseToUse({
			filterCard:function(card){
				return _status.event.cards.contains(card)&&
					get.name(card)=='sha';
			},
			prompt:'率性：是否使用获得的【杀】？',
			addCount:false,
			cards:trigger.cards
		});
		if(!event.firstLog){
			event.firstLog=true;
			next.logSkill='lh_shuaixing';
		}
		"step 2"
		if(result.bool){
			player.draw();
			event.count--;
			if(event.count>0){
				event.goto(1);
			}
		}
	},
},
"lh_wanxia":{
	audio:"ext:乱汉:2",
	trigger:{
		player:"phaseDrawBegin1"
	},
	forced:true,
	filter:function (event,player){
		return !event.numFixed;
	},
	content:function (){
		"step 0"
		trigger.changeToZero();
		event.list=[];
		"step 1"
		var cards=get.cards(2);
		player.showCards(cards);
		event.list.addArray(cards);
		var hasSha=false;
		for(var i=0;i<cards.length;i++){
			if(cards[i].name=='sha'){
				hasSha=true;
				break;
			}
		}
		if(hasSha) player.gain(event.list,'draw');
		else event.redo();
	}
},
/*
	曹仁
*/
"lh_poxu":{
	audio:"ext:乱汉:2",
	zhuanhuanji:true,
	mark:true,
	marktext:"徐",
	intro:{
		name:"破徐",
		content:function (storage){
			if(storage==true) return '出牌阶段开始时，你可以移动场上一张牌，或弃置其他角色一张手牌。';
			return '当你使用一张【杀】时，你可以令此【杀】不能被响应。'
		}
	},
	group:["lh_poxu_yin","lh_poxu_yang"],
	subSkill:{
		yin:{
			audio:"lh_poxu",
			trigger:{
				player:"useCard"
			},
			filter:function (event,player){
				if(player.storage['lh_poxu']===true) return false;
				if(player.hasSkill('lh_poxu_off')) return false;
				return event.card.name=='sha';
			},
			check:function (event,player){
				return true;
			},
			prompt2:"当你使用一张【杀】时，你可以令此【杀】不能被响应。",
			content:function (){
				"step 0"
				player.storage['lh_poxu']=true;
				player.addTempSkill('lh_poxu_off');
				trigger.directHit.addArray(game.filterPlayer());
			},
			sub:true
		},
		yang:{
			audio:"lh_poxu",
			trigger:{
				player:"phaseUseBegin"
			},
			filter:function (event,player){
				if(player.storage['lh_poxu']!==true) return false;
				if(player.hasSkill('lh_poxu_off')) return false;
				return game.hasPlayer(function(current){
					return current.countCards('hej');
				});
			},
			check:function (event,player){
				return player.canMoveCard(true)||game.hasPlayer(function(current){
					return player!=current&&current.countCards('h')&&
						get.attitude(player,current)<=0;
				});
			},
			prompt2:"出牌阶段开始时，你可以移动场上一张牌，或弃置其他角色一张手牌。",
			content:function (){
				"step 0"
				player.storage['lh_poxu']=false;
				player.addTempSkill('lh_poxu_off');
				var next=player.chooseControl();
				next.set('choiceList',[
					'移动场上一张牌',
					'弃置其他角色一张手牌'
				]);
				next.ai=function(){
					return (_status.event.player.canMoveCard(true))?0:1;
				};
				"step 1"
				if(result.index==0){
					player.moveCard(true);
					event.finish();
				}else{
					var next=player.chooseTarget(true);
					next.filterTarget=function(card,player,target){
						if(player==target) return false;
						return target.countDiscardableCards(player,'h');
					};
					next.ai=function(target){
						return -get.attitude(_status.event.player,target);
					};
					next.set('prompt','破徐：请选择要弃牌的目标');
				}
				"step 2"
				if(result.bool){
					player.discardPlayerCard(result.targets[0],'h',true);
				}
			},
			sub:true
		},
		off:{sub:true}
	}
},
"lh_jundu":{
	audio:"ext:乱汉:2",
	init:function (player){
		player.storage['lh_jundu_off']=[];
	},
	enable:"phaseUse",
	filter:function (event,player){
		if((player.getStat().skill.lh_jundu||0)>=(game.countPlayer()-1)/2) return false;
		return player.getCardUsable('sha')>0;
	},
	filterTarget:function (card,player,target){
		if(ui.selected.targets.length) return true;
		return !player.storage['lh_jundu_off'].contains(target);
	},
	selectTarget:2,
	multitarget:true,
	targetprompt:["出杀人","被杀人"],
	contentBefore:function (){
		"step 0"
		player.addTempSkill('lh_jundu_off',{player:'phaseUseEnd'});
		player.storage['lh_jundu_off'].add(targets[0]);
	},
	content:function (){
		"step 0"
		var next=targets[0].chooseToUse(targets[1]);
		next.filterCard=function(card){
			return get.name(card)=='sha';
		};
		"step 1"
		if(result.bool){
			player.getStat().card.sha++;
		}else{
			var next=player.chooseUseTarget('sha',-1,targets[0],true);
			next.set('addCount',false);
			next.set('nodistance',true);
		}
	},
	ai:{
		result:{
			target:-2
		}
	},
	subSkill:{
		off:{
			onremove:function (player){
				player.storage['lh_jundu_off']=[];
			},
			mark:true,
			marktext:"督",
			intro:{
				name:"军督",
				content:"players"
			},
			sub:true
		}
	}
},
"lh_liji":{
	audio:"ext:乱汉:2",
	skillAnimation:true,
	animationColor:"water",
	unique:true,
	limited:true,
	trigger:{
		global:"damageBegin4"
	},
	filter:function (event,player){
		return event.num>=event.player.hp;
	},
	check:function (event,player){
		return player.attitudeTo(event.player)>0;
	},
	logTarget:"player",
	content:function (){
		"step 0"
		player.awakenSkill('lh_liji');
		trigger.player.draw(2);
		trigger.cancel();
	}
},
/*
	夏侯惇
*/
"lh_baizhan":{
	audio:"ext:乱汉:2",
	locked:true,
	group:["lh_baizhan_1","lh_baizhan_2","lh_baizhan_3"],
	subSkill:{
		"1":{
			audio:"lh_baizhan",
			trigger:{
				player:"damageBegin3"
			},
			forced:true,
			filter:function (event,player){
				return event.card&&get.type2(event.card)=='trick';
			},
			content:function (){
				"step 0"
				trigger.num++;
			},
			sub:true
		},
		"2":{
			audio:"lh_baizhan",
			trigger:{
				player:"damageAfter"
			},
			forced:true,
			filter:function (event,player){
				return event.card&&get.name(event.card)=='sha';
			},
			content:function (){
				"step 0"
				player.draw();
			},
			sub:true
		},
		"3":{
			audio:"lh_baizhan",
			trigger:{
				player:["phaseZhunbeiBegin","enterGame"],
				global:"gameDrawAfter"
			},
			forced:true,
			filter:function (event,player){
				return !player.isDisabled(2);
			},
			content:function (){
				"step 0"
				player.disableEquip(2);
			},
			sub:true
		}
	},
},
"lh_kuangmeng":{
	audio:"ext:乱汉:2",
	trigger:{
		player:"useCard"
	},
	forced:true,
	filter:function (event,player){
		if(player.hp>2) return false;
		return event.card&&get.name(event.card)=='sha';
	},
	content:function (){
		"step 0"
		trigger.directHit.addArray(trigger.targets);
	},
	group:["lh_kuangmeng_shensu"],
	derivation:["lh_shensulh"],
	subSkill:{
		shensu:{
			trigger:{
				player:["changeHp","phaseBefore"]
			},
			forced:true,
			popup:false,
			filter:function (event,player){
				if(player.hp<=1&&player.hasSkill('lh_shensulh')) return false;
				if(player.hp>1&&!player.hasSkill('lh_shensulh')) return false;
				return true;
			},
			content:function (){
				"step 0"
				if(player.hp>1){
					player.removeAdditionalSkill('lh_kuangmeng');
				}else{
					player.addAdditionalSkill('lh_kuangmeng','lh_shensulh');
				}
				
			},
			sub:true
		}
	}
},
"lh_shensulh":{
	audio:"ext:乱汉:1",
	group:['lh_shensulh1','lh_shensulh2','lh_shensulh3'],
	charlotte:true,
},
"lh_shensulh1":{
	trigger:{player:'phaseJudgeBefore'},
	direct:true,
	content:function(){
		"step 0"
		var check= player.countCards('h')>2;
		player.chooseTarget(get.prompt("lh_shensulh"),"跳过判定阶段和摸牌阶段，视为对一名其他角色使用一张【杀】",function(card,player,target){
			if(player==target) return false;
			return player.canUse({name:'sha'},target,false);
		}).set('check',check).set('ai',function(target){
			if(!_status.event.check) return 0;
			return get.effect(target,{name:'sha'},_status.event.player);
		});
		"step 1"
		if(result.bool){
			player.logSkill('lh_shensulh',result.targets);
			player.useCard({name:'sha',isCard:true},result.targets[0],false);
			trigger.cancel();
			player.skip('phaseDraw');
		}
	},
},
"lh_shensulh2":{
	trigger:{player:'phaseUseBefore'},
	direct:true,
	filter:function(event,player){
		return player.countCards('he',function(card){
			if(_status.connectMode) return true;
			return get.type(card)=='equip';
		})>0;
	},
	content:function(){
		"step 0"
		var check=player.needsToDiscard();
		player.chooseCardTarget({
			prompt:get.prompt('lh_shensulh'),
			prompt2:"弃置一张装备牌并跳过出牌阶段，视为对一名其他角色使用一张【杀】",
			filterCard:function(card,player){
				return get.type(card)=='equip'&&lib.filter.cardDiscardable(card,player)
			},
			position:'he',
			filterTarget:function(card,player,target){
				if(player==target) return false;
				return player.canUse({name:'sha'},target,false);
			},
			ai1:function(card){
				if(_status.event.check) return 0;
				return 6-get.value(card);
			},
			ai2:function(target){
				if(_status.event.check) return 0;
				return get.effect(target,{name:'sha'},_status.event.player);
			},
			check:check
		});
		"step 1"
		if(result.bool){
			player.logSkill('lh_shensulh',result.targets);
			player.discard(result.cards[0]);
			player.useCard({name:'sha',isCard:true},result.targets[0],false);
			trigger.cancel();
		}
	},
},
"lh_shensulh3":{
	trigger:{player:'phaseDiscardBefore'},
	direct:true,
	content:function(){
		"step 0"
		var check=player.needsToDiscard()||player.isTurnedOver()||(player.hasSkill('shebian')&&player.canMoveCard(true,true));
		player.chooseTarget(get.prompt('lh_shensulh'),"跳过弃牌阶段并将武将牌翻面，视为对一名其他角色使用一张【杀】",function(card,player,target){
			if(player==target) return false;
			return player.canUse({name:'sha'},target,false);
		}).set('check',check).set('ai',function(target){
			if(!_status.event.check) return 0;
			return get.effect(target,{name:'sha'},_status.event.player,_status.event.player);
		});
		"step 1"
		if(result.bool){
			player.logSkill('lh_shensulh',result.targets);
			player.turnOver();
			player.useCard({name:'sha',isCard:true},result.targets[0],false);
			trigger.cancel();
		}
	},
},
"lh_qinbing":{
	audio:"ext:乱汉:2",
	trigger:{
		source:"damageAfter"
	},
	direct:true,
	content:function (){
		"step 0"
		var next=player.chooseTarget();
		next.filterTarget=lib.filter.notMe;
		next.ai=function(target){
			return _status.event.player.attitudeTo(target);
		};
		next.set('prompt',get.prompt2('lh_qinbing'));
		"step 1"
		if(result.bool){
			player.logSkill('lh_qinbing',result.targets);
			result.targets[0].chooseDrawRecover(2,1);
		}
	},
},
"lh_zhonglie":{
	audio:"ext:乱汉:2",
	unique:true,
	animationColor:"thunder",
	enable:"phaseUse",
	limited:true,
	filter:function (event,player){
		return player.isHealthy();
	},
	filterTarget:lib.filter.notMe,
	content:function (){
		"step 0"
		player.awakenSkill('lh_zhonglie');
		"step 1"
		//game.filterPlayer(function(current){current.addMark('lh_zhonglie_mark',1)})
		target.addMark('lh_zhonglie_mark',1);
		player.addSkill('lh_zhonglie_baohu');
	},
    ai:{
		order:9,
        result:{
            target:function (player,target){
                return 2/Math.max(1,target.hp);
            }
        }
    },
	//group:["lh_zhonglie_baohu"],
	subSkill:{
		baohu:{
			trigger:{global:"useCardToTarget"},
			filter:function (event,player){
				if(event.card.name!='sha') return false;
				return event.target.hasMark('lh_zhonglie_mark')&&
					event.player.canUse(event.card,player,false,true)&&
					!event.targets.contains(player);
			},
			prompt2:function (event,player){
				return '代替'+get.translation(event.target)+'成为'+get.translation(event.card)+'的目标';
			},
			content:function (){
				"step 0"
				player.draw();
				var evt=trigger.getParent();
				evt.targets.push(player);
				evt.excluded.add(trigger.target);
			},
			sub:true
		},
		mark:{
			charlotte:true,
			marktext:"烈",
			intro:{
				name:"忠烈",
				content:"你已受到夏侯惇的保护"
			},
			sub:true
		}
	}
},
/*
	荀彧
*/
"lh_chiguo":{
	audio:"ext:乱汉:2",
	init:function(player,skill){
		player.storage.lh_chiguo=[];
	},
	enable:"phaseUse",
	usable:1,
	filter:function (event,player){
    	return game.hasPlayer(function(current){
    		return player!=current&&current.countCards('he');
    	});
	},
	content:function (){
		"step 0"
		player.chooseTarget('令至多四名其他角色分别交给你一张牌',[1,4],function(card,player,target){
			var trigger=_status.event.getTrigger();
			return target.countCards('he')&&target!=player;
		}).set('ai',function(target){
			return -get.attitude(player,target);
		});
		"step 1"
		if(result.bool) {
			event.cds=[];
			event.tars=result.targets.slice(0);
		}
		else event.finish();
		"step 2"
		var target=event.tars.shift()
		event.current=target;
		event.current.chooseCard('交给'+get.translation(player)+'一张牌','he',true).ai=function(card){
			return 10-get.value(card);
		}
		"step 3"
		player.gain(result.cards[0],event.current,'giveAuto');
		event.cds.push(result.cards[0]);
		if(event.tars.length) event.goto(2);
		"step 4"
		player.chooseCardButton('将'+get.translation(event.cds)+'按顺序置于牌堆顶（先选择的在上）',event.cds.length,event.cds,true).ai=function(button){
			return Math.random();
		}
		"step 5"
		event.cdss=result.links.slice(0);
		player.storage.lh_chiguo.push(...event.cds);
		player.lose(event.cdss,ui.special);
		player.$throw(event.cdss,1000,'nobroadcast');
		"step 6"
		for(var i=event.cdss.length-1;i>=0;i--){
			event.cdss[i].fix();
			ui.cardPile.insertBefore(event.cdss[i],ui.cardPile.firstChild);
		}
		game.log(player,'将',event.cdss.length,'张牌置于牌堆顶');
	},
	ai:{
		order:9.6,
		result:{
			target:-1
		}
	},
	group:["lh_chiguo_gain"],
	subSkill:{
		gain:{
			trigger:{
				global:"gainAfter",
			},
			direct:true,
			filter:function (event,player){
				for(var i=0;i<event.cards.length;i++) {
					if(player.storage.lh_chiguo.contains(event.cards[i])) return true;
				}
				return false;
			},
			content:function (){
				player.storage['lh_chiguo'].remove(trigger.cards);
				if(!player.hasSkill('lh_chiguo_off')) {
					player.addTempSkill('lh_chiguo_off');
					player.draw('bottom');
				}
			},
			sub:true
		},
		off:{
			charlotte:true,
			sub:true
		},
	}
},
"lh_zhongshou":{
	audio:"ext:乱汉:2",
	trigger:{
		source:"damageBefore",
	},
	filter:function (event,player){
		return player.storage.lh_zhongshou&&player.storage.lh_zhongshou.contains(event.player);
	},
	check:function (event,player){
		return get.damageEffect(event.player,player,player)<0;
	},
	logTarget:'player',
	content:function (){
		trigger.player.markSkillCharacter('lh_zhongshou',player,'忠守','你获得了荀彧的忠心');
		trigger.player.draw();
		trigger.cancel();
	},
	group:["lh_zhongshou_begin"],
	subSkill:{
		begin:{
			trigger:{
				global:'phaseBefore',
				player:'enterGame',
			},
			forced:true,
			filter:function(event){
				return game.players.length>1&&(event.name!='phase'||game.phaseNumber==0);
			},
			content:function(){
				'step 0'
				player.chooseTarget('请选择【忠守】的目标',lib.translate.lh_zhongshou_info,true,function(card,player,target){
					return target!=player&&(!player.storage.lh_zhongshou||!player.storage.lh_zhongshou.contains(target));
				}).set('ai',function(target){
					var att=get.attitude(_status.event.player,target);
					if(att>0) return att+1;
					if(att==0) return Math.random();
					return att;
				}).animate=false;
				'step 1'
				if(result.bool){
					var target=result.targets[0];
					if(!player.storage.lh_zhongshou) player.storage.lh_zhongshou=[];
					player.storage.lh_zhongshou.push(target);
				}
			},
			ai:{
				expose:0.5,
			},
			sub:true
		},
	}
},
/*
	蔡文姬
*/
"lh_kouzui":{
	audio:"ext:乱汉:2",
	mark:true,
	marktext:"叩",
	intro:{
		name:"叩罪",
		content:"〖叩罪〗本轮剩余$次"
	},
	init:function (player){
		player.storage['lh_kouzui']=2;
		player.syncStorage('lh_kouzui');
	},
	trigger:{
		global:"damageAfter"
	},
	direct:true,
	filter:function (event,player){
		return player.storage['lh_kouzui']>0&&
			player!=event.player&&get.distance(player,event.player)<=1&&
			event.player.isAlive();
	},
	content:function (){
		"step 0"
		var next=player.chooseCard('he');
		next.ai=function(card){
			if(_status.event.att>0){
				return 1+get.value(card);
			}
			return 1-get.value(card);
		};
		next.set('prompt',get.prompt2('lh_kouzui',trigger.player));
		next.set('att',get.attitude(player,trigger.player));
		"step 1"
		if(result.bool){
			player.logSkill('lh_kouzui',trigger.player);
			player.storage['lh_kouzui']--;
			player.syncStorage('lh_kouzui');
			trigger.player.gain(result.cards,player,'giveAuto');
			player.draw(3);
		}
	},
	group:["lh_kouzui_resetCount"],
	subSkill:{
		resetCount:{
			trigger:{global:"roundStart"},
			forced:true,
			silent:true,
			content:function (){
				"step 0"
				lib.skill.lh_kouzui.init(player);
			},
			sub:true
		}
	}
},
"lh_yiji":{
	audio:"ext:乱汉:2",
	init:function (player){
		if(!player.storage['lh_yiji']){
			player.storage['lh_yiji']=[];
		}
	},
    enable:"phaseUse",
	usable:1,
	chooseButton:{
		dialog:function(player){
			var list=[];
			for(var i=0;i<lib.inpile.length;i++){
				if(get.type(lib.inpile[i])=='trick'){
					list.push(['锦囊','',lib.inpile[i]]);
				}
			}
			return ui.create.dialog('忆籍',[list,'vcard']);
		},
		filter:function(button,player){
			if(player.storage['lh_yiji'].contains(button.link[2])) return false;
			return lib.filter.filterCard({name:button.link[2]},player,_status.event.getParent());
		},
		backup:function(links,player){
			return {
				audio:"lh_yiji",
				filterCard:true,
				selectCard:1,
				position:"hs",
				popname:true,
				viewAs:{name:links[0][2]},
				check:function(card){
					return 10-get.value(card);
				},
				onuse:function(result,player){
					player.storage['lh_yiji'].add(result.card.name);
				}
			};
		},
		check:function(button){
			var player=_status.event.player;
			if(player.countCards('hs',button.link[2])>0) return 0;
			var effect=player.getUseValue(button.link[2]);
			if(effect>0) return effect;
			return 0;
		},
		prompt:function(links,player){
			return '将一张手牌当作【'+get.translation(links[0][2])+'】使用';
		}
	},
    ai:{
		order:1,
		threaten:1.7,
		result:{
			player:1
		}
    }
},
"lh_guihan":{
	audio:"ext:乱汉:2",
	mark:true,
	intro:{
		content:"limited",
	},
	skillAnimation:true,
	animationColor:"fire",//#7700BB
	init:function (player){
		player.storage.lh_guihan=false;
	},
	trigger:{
		player:"damageBegin3"
	},
	direct:true,
	unique:true,
	limited:true,
	filter:function (event,player){
		if(!event.source||player==event.source) return false;
		return game.hasPlayer(function(current){
			return ![player,event.source].contains(current)&&
				current.countCards('h')>0;
		});
	},
	content:function (){
		"step 0"
		var next=player.chooseTarget(2);
		next.filterTarget=function(card,player,target){
			if(ui.selected.targets.length) return true;
			return !_status.event.offTargets.contains(target)&&
				target.countCards('h')>0;
		};
		next.ai=function(target){
			if(ui.selected.targets.length){
				return _status.event.player.attitudeTo(target);
			}
			if(target.countCards('h')<3) return false;
			return 1-_status.event.player.attitudeTo(target);
		};
		next.set('prompt',get.prompt2('lh_guihan',trigger.player));
		next.set('offTargets',[player,trigger.source]);
		"step 1"
		if(result.bool){
			var target1=result.targets[0],target2=result.targets[1];
			player.logSkill('lh_guihan',target1);
			player.awakenSkill('lh_guihan');
			target1.line(target2,'green');
			var cards=target1.getCards('h');
			target2.gain(cards,target1,'giveAuto');
			if(cards.length>=3){
				game.log(trigger.source,'对',player,'造成的伤害值-1');
				trigger.num--;
			}
		}
	},
},
/*
	郝昭
*/
"lh_jiebei":{
	audio:"ext:乱汉:2",
	mark:true,
	marktext:"備",
	intro:{
		name:"竭备",
		content:"你下次发动〖竭备〗摸牌数为&"
	},
	init:function (player){
		if(!player.storage['lh_jiebei']){
			player.storage['lh_jiebei']=1;
			player.syncStorage('lh_jiebei');
		}
	},
	trigger:{
		global:["phaseZhunbei","phaseJieshuBegin"]
	},
	forced:true,
	filter:function (event,player){
		return player!=_status.currentPhase;
	},
	content:function (){
		"step 0"
		var onrewrite=event.triggername;
		if(onrewrite=='phaseZhunbei'){
			player.draw(player.storage['lh_jiebei']).set('gaintag',['lh_jiebei']);
		}else{
			if(player.hasCard(function(card){
				return card.hasGaintag&&card.hasGaintag('lh_jiebei');
			},'h')){
				player.chooseToDiscard(player.storage['lh_jiebei'],'he',true);
			}else{
				player.storage['lh_jiebei']++;
			}
		}
	},
	group:["lh_jiebei_resetCount"],
	subSkill:{
		resetCount:{
			trigger:{global:"roundStart"},
			forced:true,
			silent:true,
			content:function (){
				player.storage['lh_jiebei']=1;
				player.syncStorage('lh_jiebei');
			},
			sub:true
		}
	}
},
"lh_gushou":{
	audio:"ext:乱汉:2",
	marktext:"守",
	intro:{
		name:"固守",
		content:"mark"
	},
	trigger:{
		player:"discardAfter"
	},
	usable:1,
	direct:true,
	filter:function (event,player){
		return player!=_status.currentPhase;
	},
	content:function (){
		"step 0"
		player.logSkill('lh_gushou');
		player.addMark('lh_gushou',1);
	},
	group:["lh_gushou_movecard","lh_gushou_kanpo"],
	subSkill:{
		movecard:{
			audio:"lh_gushou",
			enable:"phaseUse",
			filter:function(event,player){
				if(!player.hasMark('lh_gushou')) return false;
				return player.canMoveCard();
			},
			content:function(){
				"step 0"
				player.removeMark('lh_gushou',1);
				"step 1"
				player.moveCard();
			},
			ai:{
				order:10,
				result:{
					player:function (player,target){
						return player.canMoveCard(true);
					}
				}
			},
			sub:true
		},
		kanpo:{
			audio:"lh_gushou",
			enable:"chooseToUse",
			viewAs:{name:"wuxie",isCard:true},
			filterCard:function(){return false},
			viewAsFilter:function(player){
				return player.hasMark('lh_gushou');
			},
			selectCard:-1,
			prompt:"移去一枚“守”视为使用【无懈可击】",
			precontent:function(){
				player.removeMark('lh_gushou',1);
			},
			ai:{
				order:function(){
					return get.order({name:'wuxie'})-0.05;
				},
				threaten:1.2
			},
			sub:true
		}
	},
},
/*
	黄氏
*/
"lh_caicheng":{
	audio:"ext:乱汉:2",
	/*
	marktext:"才",
	intro:{
		mark:function(dialog,storage,player){
			dialog.addAuto(player.getCards('s',function(card){
				return card.hasGaintag('lh_caicheng');
			}));
		},
		markcount:function(storage,player){
			return player.getCards('s',function(card){
				return card.hasGaintag('lh_caicheng');
			}).length;
		},
		onunmark:function(storage,player){
			var cards=player.getCards('s',function(card){
				return card.hasGaintag('lh_caicheng');
			});
			if(cards.length){
				player.lose(cards,ui.discardPile);
				player.$throw(cards,1000);
				game.log(cards,'进入了弃牌堆');
			}
		},
	},
	*/
	mod:{
		aiOrder:function(player,card,num){
			if(get.itemtype(card)=='card'&&card.hasGaintag('lh_caicheng')) return num-0.5;
		},
	},
	trigger:{
		global:"phaseJieshu"
	},
	direct:true,
	filter:function (event,player){
		return event.player.getHistory('useCard').length;
	},
	content:function (){
		"step 0"
		var list=[];
		trigger.player.getHistory('useCard',function(evt){
			list.addArray(evt.cards.filterInD('d'));
		});
		if(list.length){
			var next=player.chooseButton();
			next.createDialog=['才承：请选择你要获得的牌',list,'hidden'];
			next.ai=function(button){
				return get.useful(button.link);
			};
		}else event.finish();
		"step 1"
		if(result.bool){
			player.logSkill('lh_caicheng');
			game.log(player,'将',result.links,'放到了武将牌上');
			player.directgains(result.links,null,'lh_caicheng');
		}
	},
},
"lh_qiaoyu":{
	audio:"ext:乱汉:2",
	init:function (player){
		if(!player.storage['lh_qiaoyu']){
			player.storage['lh_qiaoyu']=[];
		}
	},
    enable:"phaseUse",
    usable:1,
	filter:function (event,player){
		return true;
	},
	chooseButton:{
		dialog:function (player){
			var list=[];
			for(var i=0;i<lib.inpile.length;i++){
				if(get.type(lib.inpile[i])!='equip') continue;
				list.push([get.subtype(lib.inpile[i]),'',lib.inpile[i]]);
			}
			return ui.create.dialog('巧御',[list,'vcard']);
		},
		filter:function (button,player){
			return player.canEquip(button.link[2],false);
		},
		check:function (button){
			var player=_status.event.player;
			var weight=1;
			switch(get.subtype(button.link[2])){
				case 'equip1':weight=1.15;break;
				case 'equip2':weight=1.3;break;
				case 'equip3':weight=1.1;break;
				case 'equip4':weight=1.15;break;
				case 'equip6':weight=1.25;break;
				default:weight=1.2;
			};
			return get.equipValue(button.link[2])*weight;
		},
		backup:function (links,player){
			return {
				audio:"lh_qiaoyu",
				filterCard:function(){return false},
				selectCard:-1,
				card:links[0][2],
				content:function(){
					"step 0"
					var card=game.createCard(lib.skill.lh_qiaoyu_backup.card);
					player.equip(card);
					player.storage['lh_qiaoyu'].add(card);
				},
				ai:{
					order:10,
					result:{
						player:1
					}
				}
			};
		}
	},
	ai:{
		order:1,
		result:{
			player:1,
		}
	},
	group:["lh_qiaoyu_disEquip"],
	subSkill:{
		disEquip:{
			audio:"lh_qiaoyu",
			trigger:{player:"phaseZhunbei"},
			direct:true,
			filter:function (event,player){
				return player.storage['lh_qiaoyu'].length;
			},
			content:function (){
				"step 0"
				var cards=[];
				while(player.storage['lh_qiaoyu'].length){
					var e=player.storage['lh_qiaoyu'].pop();
					if(player.getCards('e').contains(e)) cards.add(e);
				}
				if(cards.length){
					player.logSkill('lh_qiaoyu');
					player.discard(cards);
				}
			},
			sub:true
		}
	}
},
/*
	甘宁
*/
"lh_guoxian":{
	audio:"ext:乱汉:2",
	trigger:{
		player:["enterGame","shaBegin"],
		global:"phaseBefore"
	},
	forced:true,
	filter:function (event,player,onrewrite){
		if(onrewrite=='phaseBefore') return game.phaseNumber==0;
		return true;
	},
	content:function (){
		"step 0"
		var onrewrite=event.triggername;
		if(onrewrite=='shaBegin'){
			trigger.directHit=true;
			event.finish();
		}
		"step 1"
		player.disableEquip('equip2');
		player.disableEquip('equip3');
		var card=get.cardPile(function(cardx){
			return get.subtype(cardx)=='equip1';
		});
		if(card){
			player.equip(card);
		}
	},
},
"lh_luangui":{
	audio:"ext:乱汉:2",
	marktext:"歸",
	intro:{
		name:"乱归",
		content:"本轮还可发动#次",
	},
	mod:{
		ignoredHandcard:function (card,player){
			if(card.hasGaintag&&card.hasGaintag('lh_luangui')){
				return true;
			}
		},
		cardDiscardable:function(card,player,name){
			if(name=='phaseDiscard'&&(card.hasGaintag&&card.hasGaintag('lh_luangui'))){
				return false;
			}
		}
	},
	trigger:{
		source:"damageAfter",
	},
	direct:true,
	filter:function (event,player){
		if(!player.hasMark('lh_luangui')) return false;
		return true;
	},
	content:function (){
		"step 0"
		player.removeMark('lh_luangui',1,false);
		player.draw().set('gaintag',['lh_luangui']);
	},
	group:["lh_luangui_toShan","lh_luangui_resetCount"],
	subSkill:{
		toShan:{
			audio:"lh_luangui",
			enable:["chooseToRespond","chooseToUse"],
			filterCard:function (card){
				return card.hasGaintag&&card.hasGaintag('lh_luangui');
			},
			viewAs:{name:"shan"},
			viewAsFilter:function(player){
				if(!player.countCards('hs',function(card){
					return card.hasGaintag&&card.hasGaintag('lh_luangui');
				})) return false;
			},
			prompt:"将一张「乱归」牌当【闪】使用或打出",
			check:function(){return 1},
			position:'hs',
			ai:{
				respondShan:true,
				skillTagFilter:function(player){
					if(!player.countCards('hs',function(card){
						return card.hasGaintag&&card.hasGaintag('lh_luangui');
					})) return false;
				},
				effect:{
					target:function(card,player,target,current){
						if(get.tag(card,'respondShan')&&current<0) return 0.6
					}
				},
				order:4,
				useful:-1,
				value:-1
			},
			sub:true
		},
		resetCount:{
			trigger:{global:"roundStart"},
			forced:true,
			silent:true,
			content:function (){
				var count=2-Math.min(player.countMark('lh_luangui'),2);
				if(count) player.addMark('lh_luangui',count,false);
			}
		}
	}
},
/*
	姜维
*/
"lh_guzhi":{
	audio:"ext:乱汉:2",
	trigger:{
		player:["phaseDrawBegin2","phaseJieshuEnd"]
	},
	forced:true,
	filter:function (event,player,onrewrite){
		if(onrewrite=='phaseDrawBegin2') return !event.numFixed;
		return !player.getHistory('sourceDamage').length;
	},
	content:function (){
		"step 0"
		var onrewrite=event.triggername;
		if(onrewrite=='phaseDrawBegin2'){
			trigger.num+=2;
		}else{
			player.loseHp();
		}
	},
	ai:{
		threaten:1.3,
		effect:{
			target:function (card,player,target,current){
				switch(get.tag(card,'skip')){
					case 'phaseUse':{
						return [1,-2.5];
						break;
					}
					case 'phaseDraw':{
						return [1,-2];
						break;
					}
				}
			}
		}
	}
},
"lh_jufa":{
	audio:"ext:乱汉:2",
    enable:"phaseUse",
    usable:1,
	filter:function (event,player){
		return player.countCards('h',{suit:'spade'});
	},
	filterCard:function (card,player){
		return get.suit(card)=='spade';
	},
	selectCard:-1,
	content:function (){
		"step 0"
		for(var i=0;i<cards.length;i++){
			player.chooseUseTarget({name:'sha'},false);
		}
	},
	ai:{
		threaten:1.7,
		order:2.85,
		result:{
			player:function (player,target){
				return player.hasValueTarget({name:'sha'},true,true)?1:0;
			}
		}
	}
},
"lh_kefu":{
	audio:"ext:乱汉:2",
	trigger:{
		source:"dieAfter"
	},
	frequent:true,
	content:function (){
		"step 0"
		var list=[];
		if(_status.characterlist){
			list=_status.characterlist.slice();
		}else if(_status.connectMode){
			list=get.charactersOL();
		}else{
			for(var i in lib.character){
				list.push(i);
			}
		}
		var stagePlayers=game.players.concat(game.dead);
		for(const player of stagePlayers) {
			list.remove(player.name);
			list.remove(player.name1);
			list.remove(player.name2);
		}
		for(var i=0;i<list.length;i++){
			if(lib.character[list[i]][1]!='shu'){
				list.splice(i--,1);
			}
		}
		event.list1=list.randomGets(2);
        "step 1"
        var skills=[],aiChoice=[];
        for(var i=0;i<event.list1.length;i++){
			var templist=(lib.character[event.list1[i]][3]).filter(function(skill){
				var info=get.info(skill);
				return info&&!info.zhuSkill&&
					!info.limited&&!info.juexingji&&
					!info.hiddenSkill&&!info.charlotte;
			});
			if(templist.length==2&&!aiChoice.length){
				aiChoice=templist;
			}
			skills.addArray(templist);
        }
		if(!aiChoice) aiChoice=skills;
		event.list2AI=aiChoice.sort(function(a,b){
			return get.skillRank(b)-get.skillRank(a);
		}).slice(0,2);
		event.list2=skills;
		"step 2"
		var switchToAuto=function(){
			_status.imchoosing=false;
			event._result={
				bool:true,
				skills:event.list2AI
			};
			if(event.dialog) event.dialog.close();
			if(event.control) event.control.close();
		};
		var chooseButton=function(characters,skills){
			var event=_status.event;
			if(!event._result) event._result={};
			event._result.skills=[];
			var rSkill=event._result.skills;
			var dialog=ui.create.dialog(`请选择并获得一项技能`,[characters,'character'],'hidden');
			event.dialog=dialog;
			var table=document.createElement('div');
			table.classList.add('add-setting');
			table.style.margin='0';
			table.style.width='100%';
			table.style.position='relative';
			for(const skill of skills){
				var td=ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
				td.link=skill;
				table.appendChild(td);
				td.innerHTML='<span>'+get.translation(skill)+'</span>';
				td.addEventListener(lib.config.touchscreen?'touchend':'click',function(){
					if(_status.dragged) return;
					if(_status.justdragged) return;
					_status.tempNoButton=true;
					setTimeout(function(){
						_status.tempNoButton=false;
					},500);
					if(!this.classList.contains('bluebg')){
						if(rSkill.length>=1) return;
						this.classList.add('bluebg');
						rSkill.add(this.link);
					}else{
						this.classList.remove('bluebg');
						rSkill.remove(this.link);
					}
				});
			}
			dialog.content.appendChild(table);
			dialog.add('　　');
			dialog.open();
			/*
			event.switchToAuto=function(){
				event.dialog.close();
				event.control.close();
				game.resume();
				_status.imchoosing=false;
			};
			*/
			event.control=ui.create.control('ok',function(link){
				event.dialog.close();
				event.control.close();
				game.resume();
				_status.imchoosing=false;
			});
			for(var i=0;i<event.dialog.buttons.length;i++){
				event.dialog.buttons[i].classList.add('selectable');
			}
			game.pause();
			game.countChoose();
		};
		if(event.isMine()){
			chooseButton(event.list1,event.list2);
		}else if(event.isOnline()){
			event.player.send(chooseButton,event.list1,event.list2);
			event.player.wait();
			game.pause();
		}else{
			switchToAuto();
		}
        "step 3"
		var map=event.result||result;
		if(map&&map.skills&&map.skills.length){
			for(var i=0;i<map.skills.length;i++){
				player.addSkillLog(map.skills[i]);
			}
		}
	},
},

				},
			}
			if(lib.device||lib.node){
				for(var i in luanHan.character){luanHan.character[i][4].push('ext:乱汉/'+i+'.jpg')}
			}else{
				for(var i in luanHan.character){luanHan.character[i][4].push('db:extension-乱汉:'+i+'.jpg')}
			}
			return luanHan;
		});
		lib.config.all.characters.push('luanHan');
		if(!lib.config.characters.contains('luanHan')) lib.config.characters.push('luanHan');
		lib.translate['luanHan_character_config']='乱世之汉';
	}
    
},
help:{},
config:{},
package:{
    character:{
        character:{
        },
        characterTitle:{
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
    intro:"东汉末年，权臣宦官祸国祸朝，董卓李郭先后为乱。群雄并起，诸侯割据，将星四散。乱世之汉，带你领略东汉乱世之风",
    author:"九醉书生＆琉璃菠萝＆瓦力",
    diskURL:"",
    forumURL:"",
    version:"1.1",
},files:{
	"character":[],
	"card":[],
	"skill":[]
}
	}
})