game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"薄暮全史",content:function(config,pack){
//武将势力//
			lib.group.push('bmqs_gu');
			lib.translate.bmqs_gu = '古';
			lib.group.push('bmqs_xia');
			lib.translate.bmqs_xia = '夏';
			lib.group.push('bmqs_shang');
			lib.translate.bmqs_shang = '商';
			lib.group.push('bmqs_zhou');
			lib.translate.bmqs_zhou = '周';
			lib.group.push('bmqs_qin');
			lib.translate.bmqs_qin = '秦';
			lib.group.push('bmqs_han');
			lib.translate.bmqs_han = '汉';
			lib.group.push('bmqs_jin');
			lib.translate.bmqs_jin = '晋';
			lib.group.push('bmqs_sui');
			lib.translate.bmqs_sui = '隋';
			lib.group.push('bmqs_tang');
			lib.translate.bmqs_tang = '唐';
			lib.group.push('bmqs_song');
			lib.translate.bmqs_song = '宋';
			lib.group.push('bmqs_yuan');
			lib.translate.bmqs_yuan = '元';
			lib.group.push('bmqs_ming');
			lib.translate.bmqs_ming = '明';
			lib.group.push('bmqs_qing');
			lib.translate.bmqs_qing = '清';

	//武将分栏//
			lib.translate.bmqs_suiguzhichu = "<font color=blue>遂古之初</font>";
			lib.translate.bmqs_qianguyidi = "<font color=black>千古一帝</font>";
            lib.translate.bmqs_zhishinengchen = "<font color=red>治世能臣</font>";
            lib.translate.bmqs_baihongguanri = "<font color=white>白虹贯日</font>";
            lib.translate.bmqs_baizhanmingjiang = "<font color=purple>百战名将</font>";
             lib.translate.bmqs_luanchengzeizi = "<font color=pink>乱臣贼子</font>";
             lib.translate.bmqs_qunxiongzhulu = "<font color=yellow>群雄逐鹿</font>";
             lib.translate.bmqs_baijiazhengming = "<font color=green>百家争鸣</font>";
             lib.translate.bmqs_dajiangdongqu = "<font color=cyan>大江东去</font>";
           lib.translate.bmqs_chuangshishenming = "<font color=Orange>创世神明</font>";
			lib.characterSort['mode_extension_薄暮全史'] = {
				'bmqs_suiguzhichu': ["bmqs_xuyuan"],
           'bmqs_qianguyidi': ["bmqs_yingzheng"],
                'bmqs_zhishinengchen': ["bmqs_shangyang","bmqs_linxiangru","bmqs_quyuan","bmqs_lisi","bmqs_zhangyi","bmqs_yanying","bmqs_jizu","bmqs_baozheng"],
                'bmqs_baihongguanri': ["bmqs_niezheng"],
                'bmqs_baizhanmingjiang':["bmqs_wangjian","bmqs_baiqi","bmqs_lianpo"],
                'bmqs_luanchengzeizi':["bmqs_anlushan"],
                 'bmqs_baijiazhengming':["bmqs_wangxu"],
                'bmqs_qunxiongzhulu':["bmqs_licunxu"],
                'bmqs_dajiangdongqu':["bmqs_baiqi_jiu","bmqs_lianpo_jiu"],
                'bmqs_chuangshishenming':["bmqs_bomu"],
               
			}

//描述评级//
			if (lib.rank) {
                                                                //sss//
				lib.rank.rarity.legend.addArray(['bmqs_bomu','bmqs_yingzheng','bmqs_shangyang','bmqs_lisi','bmqs_zhangyi','bmqs_baiqi','bmqs_baiqi_jiu','bmqs_wangxu'
                                                                ]);
                                                                //ss//
				lib.rank.rarity.epic.addArray(['bmqs_niezheng','bmqs_wangjian','bmqs_lianpo_jiu','bmqs_licunxu','bmqs_baozheng','bmqs_lianpo'
				]);
                                                                //s//
				lib.rank.rarity.rare.addArray(['bmqs_linxiangru','bmqs_quyuan','bmqs_yanying','bmqs_jizu','bmqs_anlushan'
				]);
                                                                //a//
				lib.rank.rarity.junk.addArray(['bmyy_chenli'
                                                                ]);
			};

 //武将称号//
    var extpc=pack.character;    
    extpc.characterTitle={
        bmqs_xuanyuan:'<font color=cyan>人文初祖</font>',
        bmqs_yingzheng:'<font color=cyan>秦始皇</font>',
        bmqs_shangyang:'<font color=cyan>商君</font>',
        bmqs_niezheng:'<font color=cyan>白虹贯日</font>',
        bmqs_linxiangru:'<font color=cyan>完璧归赵</font>',
        bmqs_quyuan:'<font color=cyan>江上流人</font>',
        bmqs_wangjian:'<font color=cyan>积坚除棘</font>',
        bmqs_lisi:'<font color=cyan>千古一相</font>',
        bmqs_zhangyi:'<font color=cyan>以横破纵</font>',
        bmqs_bomu:'<font color=cyan>创世神明</font>',
        bmqs_baiqi:'<font color=cyan>武安帝业</font>',
        bmqs_yanying:'<font color=cyan>南橘北枳</font>',
        bmqs_jizu:'<font color=cyan>智虑过人</font>',
        bmqs_lianpo_jiu:'<font color=cyan>负荆请罪</font>',
        bmqs_anlushan:'<font color=cyan>窃国者侯</font>',
        bmqs_licunxu:'<font color=cyan>山河榭中</font>',
        bmqs_baiqi_jiu:'<font color=cyan>武安君</font>',
        bmqs_wangxu:'<font color=cyan>玄微真人</font>',
        bmqs_baozheng:'<font color=cyan>湛湛堪勘</font>',
        bmqs_lianpo:'<font color=cyan>壮血涌冠</font>',
    };

      //同名替换//
    extpc.characterReplace={
        bmqs_baiqi:['bmqs_baiqi','bmqs_baiqi_jiu'],
        bmqs_lianpo:['bmqs_lianpo','bmqs_lianpo_jiu'],
    };
    
//语音函数//
    game.play薄暮全史=function(fn, dir, sex){
        if(lib.config.background_speak){
            if(dir && sex)
            game.playAudio(dir, sex, fn);
            else if (dir)
            game.playAudio(dir, fn);
            else
            game.playAudio('..', 'extension', '薄暮全史', fn);
        }
    };

 //死亡语音//
    lib.skill._bmqs={				    
        trigger:{global:'dieBegin'},
        forced:true,
        priority:2,
        unique:true,
        content:function(){
            game.playAudio('..','extension','薄暮全史',trigger.player.name);
        }
    }


			//势力修改//    
			var characters = pack.character;
			if (characters) {
				characters = characters.character;
			} else {
				return;
			}
			for (var i in characters) {
				var chara = characters[i];
				var originGroup = chara[1];
				if (config.薄暮全史_group) {
					if (originGroup == 'bmqs_xia') {
						chara[1] = 'qun';
					} else if (originGroup == 'bmqs_shang') {
						chara[1] = 'qun';
					} else if (originGroup == 'bmqs_zhou') {
						chara[1] = 'qun';
					} else if (originGroup == 'bmqs_qin') {
						chara[1] = 'qun';
					} else if (originGroup == 'bmqs_han') {
						chara[1] = 'qun';
					}else if (originGroup == 'bmqs_jin') {
						chara[1] = 'qun';
					}else if (originGroup == 'bmqs_sui') {
						chara[1] = 'qun';
					}else if (originGroup == 'bmqs_tang') {
						chara[1] = 'qun';
					}else if (originGroup == 'bmqs_song') {
						chara[1] = 'qun';
					}else if (originGroup == 'bmqs_yuan') {
						chara[1] = 'qun';
					}else if (originGroup == 'bmqs_ming') {
						chara[1] = 'qun';
					}else if (originGroup == 'bmqs_qing') {
						chara[1] = 'qun';
					}}else if (originGroup == 'bmqs_gu') {
						chara[1] = 'qun';
					
				}
			}
    //李存勖必要代码//
    if(!lib.actionHistory){
    						lib.actionHistory={useCard:[],respond:[],skipped:[],lose:[],gain:[],sourceDamage:[],damage:[],die:[],custom:[]};
    					};
    					var ucr=ui.create.player;
    					ui.create.player=function (position,noclick){
    						var node=ucr(position,noclick);
    						node.actionHistory=lib.actionHistory?[lib.actionHistory]:[{useCard:[],respond:[],skipped:[],lose:[],gain:[],sourceDamage:[],damage:[],die:[],custom:[]}];
    						return node;
    					};    					
    					var str;
    					str=String(lib.element.content.phasing);    
    					eval('lib.element.content.phasing='+str.replace("current.actionHistory.push({useCard:[],respond:[],skipped:[],lose:[],gain:[],sourceDamage:[],damage:[],custom:[]});","current.actionHistory.push("+(lib.actionHistory?JSON.stringify(lib.actionHistory):"{useCard:[],respond:[],skipped:[],lose:[],gain:[],sourceDamage:[],damage:[],die:[],custom:[]}")+");"));
    					str=String(lib.element.content.die);
    					eval('lib.element.content.die='+str.slice(0,str.length-1)+(str[str.length-2]!=";"?";":"")+"player.stat[player.stat.length-1].died?player.stat[player.stat.length-1].died++:player.stat[player.stat.length-1].died=1;player.getHistory('die').push(event);"+str[str.length-1]+";");

},precontent:function(){
    
},help:{},config:{"薄暮全史_version1":{"name":"扩展版本：1.0","init":"1","item":{"1":"<font color=skyblue>查看更新</font>","2":"<li><font color=skyblue>新增角色</font>：包拯，新廉颇","3":"<li><font color=skyblue>角色调整</font>：无"}},"薄暮全史_group":{"init":false,"intro":"开启后，势力由“古/夏/商/周/秦/汉/晋/唐/宋/元/明/清”改为“群雄”","name":"势力修改"}},package:{
    character:{
        character:{
            "bmqs_yingzheng":["male","bmqs_qin",4,["bmqs_qiangqin","bmqs_fanei"],["zhu","des:秦始皇嬴政（前259年—前210年），嬴姓，赵氏，名政（一说名“正”），又称赵政、祖龙，也有吕政一说。秦庄襄王和赵姬之子。中国古代杰出的政治家、战略家、改革家，首次完成中国大一统的政治人物，也是中国第一个称皇帝的君主。<br/><br/>设计者：志文"]],
            "bmqs_shangyang":["male","bmqs_qin",4,["bmqs_zaolv"],["des:商鞅（约公元前390年－公元前338年），姬姓，公孙氏，名鞅，卫国人。战国时期政治家、改革家、思想家、军事家，法家代表人物，卫国国君后代。<br/><br/>设计者：薄暮"]],
            "bmqs_niezheng":["male","bmqs_zhou",4,[],["des:战国时期刺客 本词条是多义词，共5个义项 特色词条 | 本词条按照特色词条指南编辑并维护 贡献维护者 辰猫暮雪  聂政（？—公元前397年），战国时期的侠客，韩国轵（今河南济源东南）人，以任侠著称，为春秋战国四大刺客之一。 聂政年青侠义，因除害杀人偕母及姊荌避祸齐地（今山东境），以屠为业。韩大夫严仲子因与韩相侠累（名傀）廷争结仇，潜逃濮阳，闻政侠名，献巨金为其母庆寿，与政结为好友，求其为己报仇。聂政待母亡故守孝三年后，忆及严仲子知遇之恩，独自一人仗剑入韩都阳翟，以白虹贯日之势，刺杀侠累于阶上，继而格杀侠累侍卫数十人。因怕连累与自己面貌相似的姊姊荌，遂以剑自毁其面，挖眼、剖腹自杀。其姊在韩市寻认弟尸，伏尸痛哭，撞死在聂政尸前（一说因悲伤过度，暴死于聂政尸前）。其事迹见《史记·刺客列传》。"]],
            "bmqs_linxiangru":["male","bmqs_zhou",3,["bmqs_wanbi","bmqs_kangjie"],["des:蔺相如原为宦者令缪贤的舍人。赵惠文王时，秦昭王写信给赵王，愿以十五个城池换取\"和氏璧\"。蔺相如奉命带\"和氏璧\"来到秦国，据理力争，机智周旋，终于完璧归赵。公元前279年，秦王与赵王相会于渑池(今河南渑池西)，他随侍赵惠文王，当面斥责强大的秦国，不辱国体，使赵王没有受到屈辱，因其功，任为上卿，居官于廉颇之上。廉颇居功自恃，不服相如，耻居其下，并扬言要羞辱相如。蔺相如为保持将相和睦，不使外敌有隙可乘，始终回避忍让。蔺相如以国家利益为重、善自谦抑的精神感动了廉颇，于是亲自到蔺相如府上负荆请罪，二人成为刎颈之交。<br/><br/>设计者：风吹小雅"]],
            "bmqs_quyuan":["male","bmqs_zhou",3,["bmqs_jieming"],["des:屈原（公元前340年－公元前278年），战国时期楚国诗人、政治家。芈姓，屈氏，名平，字原；又自云名正则，字灵均 。约公元前340年出生于楚国丹阳（今湖北秭归），楚武王熊通之子屈瑕的后代。   屈原是中国历史上第一位伟大的爱国诗人，中国浪漫主义文学的奠基人，被誉为“中华诗祖”、“辞赋之祖”。他是“楚辞”的创立者和代表作者，开辟了“香草美人”的传统。屈原的出现，标志着中国诗歌进入了一个由集体歌唱到个人独创的新时代。他被后人称为“诗魂\"。   屈原也是楚国重要的政治家，早年受楚怀王信任，任左徒、三闾大夫，兼管内政外交大事。 吴起之后，在楚国另一个主张变法的就是屈原 。他提倡“美政”，主张对内举贤任能，修明法度，对外力主联齐抗秦。因遭贵族排挤毁谤，被先后流放至汉北和沅湘流域 。   公元前278年，秦将白起攻破楚都郢（今湖北江陵），屈原悲愤交加，怀石自沉于汨罗江，以身殉国。1953年是屈原逝世2230周年，世界和平理事会通过决议，确定屈原为当年纪念的世界四大文化名人之一。   主要作品有《离骚》《九歌》《九章》《天问》等。他创作的《楚辞》是中国浪漫主义文学的源头，与《诗经》并称“风骚”，对后世诗歌产生了深远影响。<br/><br/>设计者：abeeabee"]],
            "bmqs_wangjian":["male","bmqs_qin",4,["bmqs_biaobiao"],["des:王翦（生卒年不详），频阳东乡（今陕西省富平县）人，战国时期秦国名将、杰出的军事家。 王翦年少的时候喜欢军事，随侍秦王嬴政。率军攻破赵国都城邯郸，扫平三晋地区，攻破燕国都城蓟，又消灭楚国。王翦与其子王贲成为秦始皇统一六国、开疆扩土的最大功臣。 统一中国后，急流勇退，没有辅佐秦始皇建立德政，巩固国家根基。和白起比较，可谓“尺有所短，寸有所长”。凭借杰出的军事指挥才能，与白起、李牧、廉颇并称“战国四大名将”。后世尊王翦为琅琊王氏和太原王氏的共同始祖。<br/><br/>设计者：杨林"]],
            "bmqs_lisi":["male","bmqs_qin",3,["bmqs_suzheng"],["des:李斯(?-公元前208年)，战国末楚国上蔡(今河南省上蔡县芦岗乡李斯楼村)人。 秦朝著名政治家、文学家和书法家。  少为郡吏，曾从荀卿学。战国末年入秦国，初为秦相吕不韦舍人，被任命为郎。旋任长史，拜客卿。秦王政十年(前237)下逐客令时，上书力谏客不可逐，为秦王采纳。又为秦并六国谋划，建议先攻取韩国，再逐一消灭各诸侯国，完成统一大业。  秦始皇二十六年(前221年)统一全国后，作为廷尉奉命与丞相王绾、御史大夫冯劫等议定\"皇帝\"之号。后任丞相，多次随始皇帝巡行。反对淳于越分封子弟之议，主张禁私学、废《诗》、《书》、六国史记及\"百家语\"。又以小篆为标准,整理文字，作《仓颉篇》以为范文。  始皇帝死后，与赵高矫诏迫扶苏自杀，立胡亥为帝。秦末农民起义爆发后，劝二世更为法律，行\"督责之术\"，加强君权。后被赵高诬为谋反，具五刑，腰斩于咸阳市，夷三族。<br/><br/>设计者：月华照君"]],
            "bmqs_bomu":["male","shen",10,["bmqs_fuwei","bmqs_yinlun","bmqs_zhenwo"],["forbidai","des:扩展作者<br/><br/>设计者：薄暮"]],
            "bmqs_zhangyi":["male","bmqs_qin",3,["bmqs_shuoguo","bmqs_pozong"],["des:张仪(?-公元前309年)，魏国安邑(今山西万荣县王显乡张仪村)人。战国时期著名的纵横家、外交家和谋略家。  早年入于鬼谷子门下，学习纵横之术。出山之后，首创\"连横\"的外交策略，游说六国入秦。得到秦惠文王赏识，封为相国，奉命出使游说各国，以\"横\"破\"纵\"，促使各国亲善秦国，受封为武信君。  公元前311年，秦惠文王死后，秦武王继位。张仪失去宠信，出逃魏国，担任相国。  公元前309年，张仪去世。<br/><br/>设计者：汐音"]],
            "bmqs_baiqi":["male","bmqs_qin",4,["bmqs_mingfa","bmqs_jintu"],["des:白起(?-公元前257年)，《战国策》作公孙起， 战国时期秦国郿县(今陕西省眉县常兴镇白家村)人，  出自芈姓。楚国白公胜后裔，唐代许多白氏墓志铭详言，其祖先是楚平王孙白公胜。《新唐书宰相世系表》所载白乙丙之说已考证为以误而错。中国战国时代军事家、秦国名将，兵家代表人物。  白起善于用兵，与来自楚国的秦宣太后异父同母的长弟-穰侯魏冉的关系很好。白起在秦昭王时征战六国，为秦国统一六国做出了巨大的贡献。曾在伊阕之战大破魏韩联军，攻陷楚国国都郢城，长平之战重创赵国主力，功勋赫赫。白起担任秦国将领30多年，攻城70馀座，歼灭近百万敌军，被封为武安君。  白起是继中国历史上自孙武、吴起之后又一个杰出的军事家、统帅，《千字文》将他与廉颇、李牧、王翦并称为战国四大名将，位列战国四大名将之首。<br/><br/>设计者：杨林"]],
            "bmqs_yanying":["male","bmqs_zhou",3,["bmqs_hanwei","bmqs_jianci"],["des:晏子(公元前578年-公元前500年)，名婴，字仲，谥平，习惯上多称平仲。夷维(今山东省莱州市)人，春秋时期著名政治家、思想家、外交家。  晏婴是齐国上大夫晏弱之子。齐灵公二十六年(前556年)晏弱病死，晏婴继任为上大夫。历任齐灵公、庄公、景公三朝，辅政长达50余年。以有政治远见、外交才能和作风朴素闻名诸侯。晏婴聪颖机智，能言善辩。内辅国政，屡谏齐候。对外他既富有灵活性，又坚持原则性，出使不受辱，捍卫了齐国的国格和国威。<br/><br/>设计者：风吹小雅"]],
            "bmqs_jizu":["male","bmqs_zhou","3/4",["bmqs_xianlv","bmqs_shanguo"],["des:祭足(?-公元前682年)，姬姓，祭(zhai)氏，字仲，郑国祭邑(今河南郑州市郑东新区)人，春秋时期著名政治家、谋略家。  郑庄公在位，出任卿大夫，深受宠信。郑庄公逝世后，先后扶立郑庄公的四个儿子为国君(即郑昭公、郑厉公、郑子亹和郑子婴)，掌管郑国政权数十年，对郑国内部政变频繁负责。  郑子婴十二年(公元前682年)，祭仲去世。<br/><br/>设计者：盛夏的方程式x"]],
            "bmqs_anlushan":["male","bmqs_tang",6,["bmqs_heguo","bmqs_fanque"],["des:安禄山(703年1月22日-757年1月29日)，本姓康 ，字轧荦山，营州柳城(今辽宁朝阳 )人 ，粟特族。唐朝时期藩镇、叛臣。  安禄山出身西域康国，其父早逝。其母阿史德氏，改嫁于右羽林大将军安波注之兄安延偃，从此改为安姓，精通九蕃语言。 开元初年，逃离突厥，成为幽州(范阳)都督张守珪的部将和义子。骁勇善战，屡建功勋，迁平卢军兵马使、营州都督。天宝年间，安禄山经义父张守珪举荐，受唐朝当局信任，从此平步青云，兼任平卢、范阳(幽州)和河东三镇节度使，受封东平郡王，镇抚东北地区。天宝十四载(755年)，以诛杀宰相杨国忠为名，悍然发动安史之乱。一路势如破竹，攻破两京。建立伪燕政权，年号圣武。晚年失明，宠爱幼子，引发晋王安庆绪不满。  至德二年(757年)，为嫡次子安庆绪指使宦官李猪儿所害，谥号为剌。史思明杀死安庆绪后，成为大燕皇帝，追谥光烈皇帝。<br/><br/>设计者：续约"]],
            "bmqs_licunxu":["male","bmqs_song",4,["bmqs_jiabingxiang","bmqs_fendaige"],["des:后唐庄宗李存勖(xù)(885年12月2日-926年5月15日)，本姓朱邪，字亚子，应州金城县(今山西省应县)人，沙陀族。五代时期后唐开国皇帝，后唐太祖李克用之子。  李存勖善于骑射，文武双全。唐朝末年，随父征战四方，颇有功勋，累迁检校司空、晋州刺史。天佑五年(908年)，出任河东节度使，袭封晋王。骁勇善战，长于谋略，南击后梁，北却契丹，东取河北，西并河中，使得晋国日益强盛。同光元年(923年)，于魏州(今河北省邯郸市大名县)称帝，建立后唐。带兵灭亡后梁，定都于洛阳(今河南省洛阳市)。在位期间，吞并岐国，灭亡前蜀，取得凤翔、汉中及两川，震动南方割据诸国，\"五代领域，无盛于此者\" 。后期沉湎声色，用人无方，纵容皇后干政，重用伶人、宦官，猜忌杀戮功臣，横征暴敛，吝惜钱财，以致百姓困苦、藩镇怨愤、士卒离心。  同光四年(926年)，于兴教门之变中被杀，时年四十二岁，在位三年，谥号光圣神闵孝皇帝，庙号庄宗，安葬于雍陵。<br/><br/>设计者：入阵"]],
            "bmqs_baiqi_jiu":["male","bmqs_qin",4,["bmqs_xuelu"],["des:白起(?-公元前257年)，《战国策》作公孙起， 战国时期秦国郿县(今陕西省眉县常兴镇白家村)人，  出自芈姓。楚国白公胜后裔，唐代许多白氏墓志铭详言，其祖先是楚平王孙白公胜。《新唐书宰相世系表》所载白乙丙之说已考证为以误而错。中国战国时代军事家、秦国名将，兵家代表人物。  白起善于用兵，与来自楚国的秦宣太后异父同母的长弟-穰侯魏冉的关系很好。白起在秦昭王时征战六国，为秦国统一六国做出了巨大的贡献。曾在伊阕之战大破魏韩联军，攻陷楚国国都郢城，长平之战重创赵国主力，功勋赫赫。白起担任秦国将领30多年，攻城70馀座，歼灭近百万敌军，被封为武安君。  白起是继中国历史上自孙武、吴起之后又一个杰出的军事家、统帅，《千字文》将他与廉颇、李牧、王翦并称为战国四大名将，位列战国四大名将之首。<br/><br/>设计者：汐音"]],
            "bmqs_wangxu":["male","bmqs_zhou",4,["bmqs_guixiang","bmqs_zhoumi"],["des:鬼谷子，王氏，名诩，一作王禅，华夏族，籍贯存争议，有多地相争，诸子百家之纵横家创始人， 战国时代传奇人物。著名谋略家、纵横家的鼻祖，兵法集大成者、相传其额前四颗肉痣，成鬼宿之象。 精通百家学问， 因隐居在云梦山鬼谷，故自称鬼谷先生。常入山静修，深谙自然之规律，天道之奥妙。  他被上天赐予通天彻地的智慧，一曰数学，日星象纬，在其掌中，占往察来，言无不验;二曰兵学，六韬三略，变化无穷，布阵行兵，变幻莫测，三曰言学，广记多闻，明理审势，出辞吐辩，万口莫当;四曰出世，修真养性，形神俱妙，超乎万有，体合自然。  鬼谷子，被后世尊为\"谋圣\"，在文化史上，鬼谷子是与孔子、老子并列的学术大家。他隐于世外，将天下置于棋局，弟子出将入相，左右列国存亡，推动着历史的走向。  主要作品有《鬼谷子》《本经阴符七术》等重要作品，其著作被后世称为\"智慧禁果，旷世奇书\"，历代列为禁书。<br/><br/>设计者：千代田桃"]],
            "bmqs_baozheng":["male","bmqs_song",4,["bmqs_xiaoyue","bmqs_zhuyang"],["des:包拯(999年-1062年7月3日)，字希仁，男，庐州合肥(今安徽合肥肥东)人，北宋名臣。  天圣五年(1027年)，包拯登进士第。累迁监察御史，曾建议练兵选将、充实边备。历任三司户部判官及京东、陕西、河北路转运使，后入朝担任三司户部副使，请求朝廷准许解盐通商买卖。知谏院时，多次论劾权贵。再授龙图阁直学士、河北都转运使，移知瀛、扬诸州，历权知开封府、权御史中丞、三司使等职。嘉佑六年(1061年)，升任枢密副使。因曾任天章阁待制、龙图阁直学士，故世称\"包待制\"、\"包龙图\"。嘉佑七年(1062年)，包拯逝世，年六十四。追赠礼部尚书，谥号\"孝肃\"，后世称其为\"包孝肃\"。有《包孝肃公奏议》传世。  包拯廉洁公正、立朝刚毅、不附权贵、铁面无私、英明决断、敢于替百姓申不平，故有\"包青天\"及\"包公\"之名，京师有\"关节不到，有阎罗包老\"之语。后世将他奉为神明崇拜，认为他是奎星转世 ，由于民间传其黑面形象，亦被称为\"包青天\"。<br/><br/>设计者：入阵"]],
            "bmqs_lianpo_jiu":["male","bmqs_zhou",4,["bmqs_chiwei","bmqs_fujing"],["des:廉颇(前327年~前243年) ，嬴姓，廉氏，名颇，字洪野 ，中山郡苦陉县人。战国末期赵国名将，与白起、王翦、李牧并称\"战国四大名将\"。  赵惠文王十六年(前283年)，为将伐齐，大破之，取昔阳(今河北晋州西北)拜为上卿。赵孝成王时，曾以蔺相如位居己上，不服，欲辱之。相如屡谦让退避。他感悟，负荆请罪，两人遂为刎颈之交。秦、赵长平之役，赵初以其御秦，用坚壁固守之策，秦师劳而无功。后赵王中秦反间计，以赵括代之，卒遭惨败。  赵孝成王十五年(前251)，与乐乘率军大破燕军，杀燕将栗腹，燕割五城请和。以功封信平君，为假相国。赵悼襄王时，与乐乘不和，奔魏居大梁(今河南开封)，魏不能用。赵以数困于秦，欲复用之，因仇者郭开之毁，赵王信以为衰老，遂不召。后入楚，卒于寿春(今安徽寿县)。<br/><br/>设计者：洁染三馨"]],
            "bmqs_lianpo":["male","bmqs_zhou",4,["bmqs_xfujing","bmqs_fujin"],["des:廉颇(前327年~前243年) ，嬴姓，廉氏，名颇，字洪野 ，中山郡苦陉县人。战国末期赵国名将，与白起、王翦、李牧并称\"战国四大名将\"。  赵惠文王十六年(前283年)，为将伐齐，大破之，取昔阳(今河北晋州西北)拜为上卿。赵孝成王时，曾以蔺相如位居己上，不服，欲辱之。相如屡谦让退避。他感悟，负荆请罪，两人遂为刎颈之交。秦、赵长平之役，赵初以其御秦，用坚壁固守之策，秦师劳而无功。后赵王中秦反间计，以赵括代之，卒遭惨败。  赵孝成王十五年(前251)，与乐乘率军大破燕军，杀燕将栗腹，燕割五城请和。以功封信平君，为假相国。赵悼襄王时，与乐乘不和，奔魏居大梁(今河南开封)，魏不能用。赵以数困于秦，欲复用之，因仇者郭开之毁，赵王信以为衰老，遂不召。后入楚，卒于寿春(今安徽寿县)。<br/><br/>设计者：杨林"]],
        },
        translate:{
            "bmqs_yingzheng":"嬴政",
            "bmqs_shangyang":"商鞅",
            "bmqs_niezheng":"聂政",
            "bmqs_linxiangru":"蔺相如",
            "bmqs_quyuan":"屈原",
            "bmqs_wangjian":"王翦",
            "bmqs_lisi":"李斯",
            "bmqs_bomu":"薄暮",
            "bmqs_zhangyi":"张仪",
            "bmqs_baiqi":"白起",
            "bmqs_yanying":"晏婴",
            "bmqs_jizu":"祭足",
            "bmqs_anlushan":"安禄山",
            "bmqs_licunxu":"李存勖",
            "bmqs_baiqi_jiu":"白起",
            "bmqs_wangxu":"王诩",
            "bmqs_baozheng":"包拯",
            "bmqs_lianpo_jiu":"廉颇",
            "bmqs_lianpo":"廉颇",
        },
        characterTitle:{
            "bmqs_xuanyuan":"<font color=cyan>人文初祖</font>",
            "bmqs_yingzheng":"<font color=cyan>秦始皇</font>",
            "bmqs_shangyang":"<font color=cyan>商君</font>",
            "bmqs_niezheng":"<font color=cyan>白虹贯日</font>",
            "bmqs_linxiangru":"<font color=cyan>完璧归赵</font>",
            "bmqs_quyuan":"<font color=cyan>江上流人</font>",
            "bmqs_wangjian":"<font color=cyan>积坚除棘</font>",
            "bmqs_lisi":"<font color=cyan>千古一相</font>",
            "bmqs_zhangyi":"<font color=cyan>以横破纵</font>",
            "bmqs_bomu":"<font color=cyan>创世神明</font>",
            "bmqs_baiqi":"<font color=cyan>武安帝业</font>",
            "bmqs_yanying":"<font color=cyan>南橘北枳</font>",
            "bmqs_jizu":"<font color=cyan>智虑过人</font>",
            "bmqs_lianpo_jiu":"<font color=cyan>负荆请罪</font>",
            "bmqs_anlushan":"<font color=cyan>窃国者侯</font>",
            "bmqs_licunxu":"<font color=cyan>山河榭中</font>",
            "bmqs_baiqi_jiu":"<font color=cyan>武安君</font>",
            "bmqs_wangxu":"<font color=cyan>玄微真人</font>",
            "bmqs_baozheng":"<font color=cyan>湛湛堪勘</font>",
            "bmqs_lianpo":"<font color=cyan>壮血涌冠</font>",
        },
        characterReplace:{
            "bmqs_baiqi":["bmqs_baiqi","bmqs_baiqi_jiu"],
            "bmqs_lianpo":["bmqs_lianpo","bmqs_lianpo_jiu"],
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
            "bmqs_qiangqin":{
                audio:"ext:薄暮全史:2",
                trigger:{
                    player:"phaseBegin",
                },
                frequent:true,
                filter:function(event,player){
        var nh=player.countCards('h');
        return game.hasPlayer(function(current){
            return current!=player&&current.countCards('h')>=nh;
        });
    },
                content:function() {
'step 0' 
player.chooseTarget('强秦', function(card, player, target) { 
            return player. countCards('h')<=target.countCards('h');
        }).set('prompt2', '弃置其两张牌。').ai = function(target) { 
            var att = get.attitude(_status.event.player, target); 
            if (att < 0) { 
                if (target.countCards('he') <= 3) return 5; 
                if (target.countCards('he') == 0) return false; 
                return 3; 
            } 
            return false; 
        } 
        'step 1' 
        if (result.bool) { 
        var target=result.targets[0];
        player.discardPlayerCard(target,2,'he',true);
        player.addTempSkill('bmqs_qiangqin1');
            
        } 
    },
                group:"bmqs_qiangqin_discard",
                subSkill:{
                    discard:{
                        audio:"ext:薄暮全史:2",
                        trigger:{
                            player:"phaseEnd",
                        },
                        frequent:true,
                        content:function() {
        'step 0' 
     var nh=player.hp;
        if(game.hasPlayer(function(current){
            return current!=player&&current.hp<=nh
        })){
        player.chooseTarget('强秦', function(card, player, target) { 
                    return player.hp>=target.hp;
                }).set('prompt2', '对其造成一点伤害。').ai = function(target) { 
                    var att = get.attitude(_status.event.player, target); 
                    if (att < 0) { 
                        if (target.hp < 3) return 5; 
                        if (target.hp ==1) return 10; 
                        return 3; 
                    } 
                    return false; 
                } 
        }else{
            if(!player.hasSkill('bmqs_qiangqin1')){
        player.chooseDrawRecover(2,true);
                }
        
        }
                'step 1' 
                if (result.bool) { 
                    result.targets[0].damage(); 
                }else{
                    if(!player.hasSkill('bmqs_qiangqin1')){
        player.chooseDrawRecover(2,true);
                }
                    }
            },
                        sub:true,
                    },
                },
            },
            "bmqs_qiangqin1":{
                mark:true,
                nopop:true,
                intro:{
                    content:"已发动过强秦",
                },
            },
            "bmqs_fanei":{
                unique:true,
                global:"bmqs_fanei1",
                zhuSkill:true,
            },
            "bmqs_fanei1":{
                mod:{
                    inRangeOf:function(from,to){
            if(from.group!='bmqs_qin') return;
            var players=game.filterPlayer();
            for(var i=0;i<players.length;i++){
                if(from!=players[i]&&to!=players[i]&&
                    players[i].hasZhuSkill('bmqs_fanei',from)){
                    var num1=players[i].hp;
                    if(get.distance(players[i],to)<=num1) return true;
                }
            }
        },
                },
            },
            "bmqs_zaolv":{
                audio:"ext:薄暮全史:2",
                trigger:{
                    player:"phaseDrawBegin",
                },
                forced:true,
                content:function() {
    'step 0'
    player.chooseTarget('造律', function(card, player, target) {
        return player != target ;
    }).set('prompt2', '令其摸一张牌并展示').ai = function(target) {
        var att = get.attitude(_status.event.player, target);
        if (att > 2) {
            if ((target.maxHp - target.hp) >= 2) return 2 * att;
            return att;
        }
        return att / 3;
    }
        'step 1'
    if (result.bool) {
        player.line(result.targets[0]);
        event.card = get.cards();
    result.targets[0].gain(event.card, 'gain2');
    result.targets[0].showCards(event.card);
    }
            'step 2'
    if (event.card[0].number > 10||event.card[0].number==1){
    player.addTempSkill('bmqs_zaolv1',{player:'phaseBefore'});
    }else{
    player.addTempSkill('bmqs_zaolv2',{player:'phaseBefore'});
    }
    },
            },
            "bmqs_zaolv1":{
                audio:"ext:薄暮全史:2",
                trigger:{
                    global:"phaseDrawBegin",
                },
                forced:true,
                content:function() {
              event.card = get.cards();
        trigger.player.gain(event.card, 'gain2');
        trigger.player.showCards(event.card);
    },
                mark:true,
                nopop:true,
                intro:{
                    content:"锁定技，所有角色的摸牌阶段开始时，摸一张牌并展示。",
                },
            },
            "bmqs_zaolv2":{
                audio:"ext:薄暮全史:2",
                trigger:{
                    global:"phaseDrawBegin",
                },
                forced:true,
                content:function() {
        trigger.num--
        player.draw();
    },
                mark:true,
                nopop:true,
                intro:{
                    content:"锁定技，所有角色的摸牌阶段少摸一张牌，然后你摸一张牌。",
                },
            },
            "bmqs_wanbi":{
                audio:"ext:薄暮全史:2",
                trigger:{
                    global:"phaseJieshuBegin",
                },
                direct:true,
                filter:function(e,p){
           if(e.player==p) return false;
        return p.getHistory('lose',function(evt){
            return evt.cards&&evt.cards.length;
        }).length;
    },
                content:function(){
        'step 0'
        var cards=[];
        player.getHistory('lose',function(evt){
            if(evt.cards&&evt.cards.length) cards.addArray(evt.cards);
        });
        if(!cards.length)return;
        player.chooseCardButton(get.prompt2(event.name),cards,[1,cards.length]);
        'step 1'
        if(result.links){
            player.logSkill(event.name);
            player.gain(result.links,'gain2');
        }
    },
            },
            "bmqs_kangjie":{
                audio:"ext:薄暮全史:2",
                trigger:{
                    target:"shaBegin",
                },
                filter:function(event, player) {
        return player.hp<=event.player.hp&&player.countCards('he') >= 1; 
    },
                content:function() {
        "step 0"
        if (player.countCards('he') >= 1) {
            var next = player.chooseToDiscard(get.prompt('bmqs_kangjie'), 1, 'he', true);
            next.set('ai', function(card) {
                return 7 - get.value(card)
        if (card.number>8) return 5;
            });
        }

        "step 1"
        if (result.bool) {
            var eff=get.effect(player,trigger.card,trigger.player,trigger.player);
        trigger.player.chooseToDiscard('抗节：弃置一张点数大于'+get.translation(result.cards[0])+'的牌’，否则杀对'+get.translation(player)+'无效',function(card){
            return card.number>result.cards[0].number;
        }).set('ai',function(card){
            if(_status.event.eff>0){
                return 10-get.value(card);
            }
            return 0;
        }).set('eff',eff);
        }
 "step 2"
        if(result.bool==false){
           trigger.cancel();
        }
    },
            },
            "bmqs_jieming":{
                audio:"ext:薄暮全史:2",
                trigger:{
                    player:"phaseBefore",
                },
                filter:function(event,player){
        return game.hasPlayer(function(current){
               return current.isDamaged();
        });
    },
                frequent:true,
                content:function(){
                  'step 0'
        var num=game.countPlayer(function(current){
            return current.isDamaged();
        });
        if(num<=player.hp){
event.count=num;
        }else{
            event.count=player.hp;
        }
        'step 1'
         var num=game.countPlayer(function(current){
            return current.isDamaged();
        });
        if(num>0&&event.count>0){
             event.count--;
         player.chooseControl('摸牌阶段','弃牌阶段').set('choiceList',[ 
                '执行一个额外的摸牌阶段', 
                '执行一个额外的弃牌阶段' 
            ]).ai=function(event,player){
return '摸牌阶段';
if(player.countCards('h')>player.hp) return '弃牌阶段';
}; 
        }else event.finish();

                  'step 2'
   if(result.control=='摸牌阶段'){ 
      
        player.phaseDraw();
     return;
        } 
         
      if(result.control=='弃牌阶段'){ 
      
        player.phaseDiscard();
      return;
        } 


                  'step 3'
if(event.count>0){
   event.goto(1);
}
    },
                group:"bmqs_jieming_mq",
                subSkill:{
                    mq:{
                        audio:"ext:薄暮全史:2",
                        frequent:true,
                        trigger:{
                            player:["drawAfter","discardAfter"],
                        },
                        filter:function (event,player){
    if(event.name=="draw")return event.result&&event.result.length&&event.parent.name=="phaseDraw"&&event.getParent(2).name=="bmqs_jieming";
else if(event.name=="discard")return event.cards&&event.cards.length&&event.getParent(2).name=="phaseDiscard"&&event.getParent(3).name=="bmqs_jieming";
},
                        content:function (){
        "step 0"
        if(trigger.name=="draw"){
             for(var i of trigger.result)player.chooseUseTarget(i);
} else {
       for(var i of trigger.cards)player.moveCard();
}
},
                        sub:true,
                    },
                },
            },
            "bmqs_biaobiao":{
                audio:"ext:薄暮全史:2",
                frequent:true,
                trigger:{
                    global:["gameDrawBegin","gameDrawEnd"],
                    player:"phaseBegin",
                },
                silent:true,
                content:function (){
        "step 0"    
        if(event.triggername=="gameDrawEnd"){
            var players=game.players;
            for(var i=0;i<players.length;i++){
                if(i>0){
                    players[i].previous=players[i-1];
                    players[i].previousSeat=players[i-1];
                }
                if(i<players.length-1){
                    players[i].next=players[i+1];
                    players[i].nextSeat=players[i+1];
                }
            }
            players[0].previous=players[players.length-1];
            players[0].previousSeat=players[players.length-1];
            players[players.length-1].next=players[0];
            players[players.length-1].nextSeat=players[0];
            return;
        };
            if(event.triggername=="gameDrawBegin"){
            if(player==trigger.player){
                        trigger.player=player.next;
                            player.previous.next=player.next;
                    }
            else player.previous.next=player.next;
        };
        if(trigger.name=="phase"){
            if(player.storage[event.name]&&player.storage[event.name].length){
                var s=player.storage[event.name],cs=s.filter(function (card){return !(player.getCards("hejs")||[]).contains(card)&&ui.discardPile.contains(card)}),num1=cs.length,num2=s.filter(function (card){return !(player.getCards("hejs")||[]).contains(card)&&!ui.discardPile.contains(card)}).length;
                if(num2||num1){
                    var dialog=ui.create.dialog(get.prompt(event.name));
                    dialog.addText('跳过本回合'+(num1>0&&num2>0?'并从弃牌堆中获得以下卡牌且可无距离限制使用'+(num2>1?"至多":"")+get.cnNumber(num2)+"张牌或用"+(num2>1?"至多":"")+get.cnNumber(num2)+"张牌替换等量已记录卡牌":num1>0&&num2<=0?"从弃牌堆中获得以下卡牌":num2>0&&num1<=0?'且可无距离限制使用'+(num2>1?"至多":"")+get.cnNumber(num2)+"张牌或用"+(num2>1?"至多":"")+get.cnNumber(num2)+"张牌替换等量已记录卡牌":""));
                    dialog.addSmall([cs,"card"])
                    player.chooseBool().set("ai",function (){
                        var num1=0,num2=0,player=_status.event.player;
                        for(var i of player.storage[event.name].filter(function (card){
                            return !(player.getCards("hejs")||[]).contains(card)&&ui.discardPile.contains(card)
                        }))num1+=get.value(i)+player.getUseValue(i);
                        for(i of player.getCards("h"))num2+=get.value(i)+player.getUseValue(i);
                        return num1>num2;
                    }).dialog=dialog;
                };
            };
            return;
        };
        var i,cards={},k=1,num=ui.cardPile.childNodes.length/27,j=0;
            for(i=1;i<num+1;i++){
                    var card=[];
                    for(;j<27*i;j++){
                        if(ui.cardPile.childNodes[j])card.add(ui.cardPile.childNodes[j]); 
                        else break;
                    }
                    cards[i]=card;
            };    
            var names=[];
            for(var i of ui.cardPile.childNodes){
                if(!names.contains(i.name))names.add(i.name);
            };
        if(player.isUnderControl()){
            game.swapPlayerAuto(player);
        }
        player.logSkill(event.name);
        var switchToAuto=function(){
            _status.imchoosing=false;
            var cs=[];
            for(var i of names){
                var value=0,card;
                for(var j in cards){                
                    for(var n of cards[j]){        
                        if(i==n.name){
                            if(get.value(n)>value){
                                value=get.value(n);
                                card=n;
                            }
                        }        
                    }
                };
                if(card)cs.push([card,value+player.getUseValue(card)]);
            };
            if(cs&&cs.length){
                cs.sort(function (a,b){
                    return b[1]-a[1];
                });
                for(var i=0;i<cs.length;i++)cs[i]=cs[i][0];
                cs=cs.slice(0,Math.min(6,names.length));
            };
            event._result={        
                cards:cs||[]
            };
            if(event.dialog) event.dialog.close();
            if(event.control) event.control.close();
        };
        var chooseButton=function(){
            if(!event._result) event._result={};
            event._result.cards=[];            
            var rCards=event._result.cards,rNames=[],cl=function(){
                if(_status.dragged) return;
                if(_status.justdragged) return;
                if(this.classList.contains("unselectable"))return;                    
                _status.tempNoButton=true;
                setTimeout(function(){
                    _status.tempNoButton=false;
                },500);
                var link=this.link;
                if(!this.classList.contains('target')){
                    if(rCards.length>=Math.min(6,names.length)) return;                                
                    rCards.add(link);                                
                    this.classList.add('target');
                    rNames.add(link.name);                                                                    
                    for(var i of dialog.buttons){
                        if(!i.classList.contains('target')&&i.link&&rNames.contains(i.link.name))i.classList.add('unselectable');
                    };
                    if(rCards.length>=Math.min(6,names.length)){
                        for(var i of event.dialog.buttons){
                            if(!i.classList.contains('target'))i.classList.add('unselectable');
                        }
                        event.controls=ui.create.control("ok",function (){
                            event.dialog.close();
                            event.control.close();
                            game.resume();
                            _status.imchoosing=false;
                            if(this.close)this.close();
                            else if(this.remove)this.remove();
                        });
                    }
                }
                else{
                    this.classList.remove('target');
                    rCards.remove(link);
                    rNames.remove(link.name);
                    for(var i of dialog.buttons){
                        if(i.link&&i.link.name==link.name)i.classList.remove('unselectable');
                    };
                    if(rCards.length<Math.min(6,names.length)){
                        for(var i of event.dialog.buttons){
                            if(i.link&&!rNames.contains(i.link.name))i.classList.remove('unselectable');
                        }
                        if(event.controls){
                            if(event.controls.close)event.controls.close();
                            else if(event.controls.remove)event.controls.remove();
                        }
                    }
                }
            };
            event.rCards=rCards;
            event.rNames=rNames;    
            if(names.length<1)return;
            var dialog=ui.create.dialog('请选择'+get.cnNumber(Math.min(6,names.length),true)+'张牌名不同的牌作为你的初始手牌','hidden');
            dialog.addText("第"+get.cnNumber(k,true)+"页(共"+Object.keys(cards).length+"页)");
            event.dialog=dialog;            
            var table=document.createElement('div');
                        table.classList.add('add-setting');
                        table.style.margin='0';
                        table.style.width='100%';
                       table.style.position='relative';
            for(var i=0;i<cards[k].length;i++){
                var button=ui.create.button(cards[k][i],'card',table);
                button.style.zoom=ui.window.clientWidth/(window.decadeUI?3200:1600);                                
                dialog.buttons=dialog.buttons.concat(button);                                
                button.link=cards[k][i];
                button.addEventListener(lib.config.touchscreen?'touchend':'click',cl);
            }                
            dialog.content.appendChild(table);
            dialog.add('　　');
            dialog.open();
                        
            event.switchToAuto=function(){
                var cs=[];
                for(var i of names){
                    var value=0,card;
                    for(var j in cards){                
                        for(var n of cards[j]){        
                            if(i==n.name){
                                if(get.value(n)>value){
                                    value=get.value(n);
                                    card=n;
                                }
                            }        
                        }
                    };
                    if(card)cs.push([card,value+player.getUseValue(card)]);
                };
                if(cs&&cs.length){
                    cs.sort(function (a,b){
                        return b[1]-a[1];
                    });
                    for(var i=0;i<cs.length;i++)cs[i]=cs[i][0];
                    cs=cs.slice(0,Math.min(6,names.length));
                    player.directgain(cs);
                            player.markAuto(event.name,cs);
                        };                        
                event.dialog.close();
                event.control.close();
                game.resume();
                _status.imchoosing=false;
            };
            event.control=ui.create.control("上一页","下一页",function(link){                                
                if(link=="下一页"){
                    k=(k+1>Object.keys(cards).length)?k=1:k+1;                    
                    while(table.childNodes.length){
                                    table.removeChild(table.childNodes[0]);
                                    dialog.buttons.remove(table.childNodes[0]);
                                };
                    for(var i=0;i<cards[k].length;i++){
                        var button=ui.create.button(cards[k][i],'card',table);
                        button.style.zoom=ui.window.clientWidth/(window.decadeUI?3200:1600);                
                        dialog.buttons=dialog.buttons.concat(button);                                
                        button.link=cards[k][i];
                        if(rCards.contains(button.link))button.classList.add('target');
                        button.addEventListener(lib.config.touchscreen?'touchend':'click',cl);
                    };
                    if(rCards.length>=Math.min(6,names.length)){
                        for(var i of event.dialog.buttons){
                            if(!i.classList.contains('target'))i.classList.add('unselectable');
                        }
                    }
                    dialog.content.childNodes[1].innerHTML='<div class="text center">第'+get.cnNumber(k,true)+'页(共'+Object.keys(cards).length+'页)</div>';
                }
                else if(link=="上一页"){
                    k=(k-1<1)?Object.keys(cards).length:k-1;
                                while(table.childNodes.length){
                                    table.removeChild(table.childNodes[0]);
                                    dialog.buttons.remove(table.childNodes[0]);
                                };
                    for(var i=0;i<cards[k].length;i++){
                        var button=ui.create.button(cards[k][i],'card',table);
                        button.style.zoom=ui.window.clientWidth/(window.decadeUI?3200:1600);    
                        dialog.buttons=dialog.buttons.concat(button);                                
                        button.link=cards[k][i];
                        if(rCards.contains(button.link))button.classList.add('target');
                        button.addEventListener(lib.config.touchscreen?'touchend':'click',cl);
                    }
                    dialog.content.childNodes[1].innerHTML='<div class="text center">第'+get.cnNumber(k,true)+'页(共'+Object.keys(cards).length+'页)</div>';                
                };
                for(var i of event.dialog.buttons){
                    if(!i.classList.contains('target')&&i.link&&rNames.contains(i.link.name))i.classList.add('unselectable');
                    if(rCards.contains(i.link)){
                        i.classList.add('target');
                        i.classList.remove('unselectable');
                    }
                };
                if(rCards.length>=Math.min(6,names.length)){
                    for(var i of event.dialog.buttons){
                        if(!i.classList.contains('target'))i.classList.add('unselectable');
                        else i.classList.remove('unselectable');
                    }
                };
            });
            for(var i=0;i<event.dialog.buttons.length;i++){
                event.dialog.buttons[i].classList.add('selectable');
            }
            game.pause();
            game.countChoose();
        };
        if(event.isMine()){
            chooseButton();
        }
        else if(event.isOnline()){
            event.player.send(chooseButton,list,skills);
            event.player.wait();
            game.pause();
        }
        else{
            switchToAuto();
        }
            'step 1' 
            var map=result||event.result;
            if(map&&map.cards&&map.cards.length){ 
                player.directgain(map.cards,"gain2");
                player.markAuto(event.name,map.cards);      
               };               
               if(result.bool&&player.storage[event.name]&&Array.isArray(player.storage[event.name])){
                   trigger.cancel();
                   player.logSkill(event.name);
                   player.gain(player.storage[event.name].filter(function (card){
                return !player.getCards("hejs").contains(card)&&ui.discardPile.contains(card)
            }),"gain2");    
            event.count=player.storage[event.name].filter(function (card){return !player.getCards("hejs").contains(card)&&!ui.discardPile.contains(card)}).length;        
               };            
               'step 2'
               if(event.count&&event.count>0){
                   event.position="hes";
                   event.filterCard=lib.filter.all;
            event.selectCard=[1,1];
            event.ai=get.unuseful3;        
            event.forced=true;    
            game.check();
            if(event.isMine()){
                game.pause();                
                event.dialog=ui.create.dialog("请选择一张牌，无距离限制使用或替换一张已无法获得的记录牌");                
            }
            else if(event.isOnline()){
                event.send();
            }
            else{
                event.result='ai';
            };
            var ch=game.check,rc=function (){
                           if(_status.event.useCot){
                    if(_status.event.useCot.close)_status.event.useCot.close();
                    else if(_status.event.useCot.remove)_status.event.useCot.remove();
                    _status.event.useCot=null;
                };
                if(_status.event.rCot){
                    if(_status.event.rCot.close)_status.event.rCot.close();
                    else if(_status.event.rCot.remove)_status.event.rCot.remove();
                    _status.event.rCot=null;
                };                
                ui.updatec();
                       },rc2=function (bool){
                           if(_status.event.okVCot){
                    if(_status.event.okVCot.close)_status.event.okVCot.close();
                    else if(_status.event.okVCot.remove)_status.event.okVCot.remove();
                    _status.event.okVCot=null;
                };
                if(bool!==false)fc();
                       },tu=function (){
                _status.event.chooseVC=false;
                rc2();        
                for(var i of player.getCards("s").slice(0)){
                    if(i.hasGaintag(event.name)){
                        i.classList.remove('glow');
                        i.classList.remove('glows');
                        i.remove();
                    }
                };    
                for(var i of player.getCards("hes")){
                    if(!i.classList.contains("glow")&&player.storage[event.name].contains(i)){
                        i.classList.remove('unselectable');
                    }
                };
                if(_status.event.tCards){
                    for(i of _status.event.tCards){
                        i.classList.add('selected');
                        i.updateTransform(true);
                        i.classList.remove('unselectable');
                    };
                    _status.event.tCards=null;                                
                };
                ui.selected.vcards=[];
                if(player.storage[event.name]&&player.storage[event.name].length&&ui.selected.cards.some(function (i){
                    return player.storage[event.name].contains(i);
                })&&_status.event.rCot)_status.event.rCot.classList.add('unselectable');
            },fc=function (){                           
                           if(!_status.event.useCot)_status.event.useCot=ui.create.control("使用",function (){
                    if(this.classList.contains('unselectable'))return;
                            player.chooseUseTarget(ui.selected.cards[0],"nodistance");
                    game.check=ch;
                    rc();
                    rc2(false);
                    if(_status.event.cancelCot){
                    
                                    if(_status.event.cancelCot.close)_status.event.cancelCot.close();
                    
                                    else if(_status.event.cancelCot.remove)_status.event.cancelCot.remove();
                    
                                    _status.event.cancelCot=null;
                
                                };
                    event.resume();
                    if(event.dialog) event.dialog.close();
                                ui.click.ok();                                                                
                });
                if(!_status.event.rCot)_status.event.rCot=ui.create.control("替换",function (){
                    if(this.classList.contains('unselectable'))return;
                    player.directgains(player.storage[event.name].filter(function (card){return !(player.getCards("hejs")||[]).contains(card)&&!ui.discardPile.contains(card)}),null,event.name);                
                    for(var i of player.getCards("s")){
                        if(i.hasGaintag(event.name)){
                            i.classList.add('glow');
                            i.classList.add('selectable');
                        }                    
                    };
                    var s=player.getCards("s",function (card){
                        return card.hasGaintag(event.name)
                    });
                    if(s.length==1){
                        if(!ui.selected.vcards)ui.selected.vcards=[];
                        ui.selected.vcards.add(s[0]);
                    }
                    if(ui.selected.vcards){
                        for(i of ui.selected.vcards)i.updateTransform(true);
                    };
                    if(ui.selected.cards){
                        for(i of ui.selected.cards)i.updateTransform(true);
                    };
                    rc();
                    _status.event.tCards=ui.selected.cards;
                    if(player.storage[event.name]&&player.storage[event.name].length){
                        for(var i of player.getCards("hes")){
                            if(!i.classList.contains("glow")&&player.storage[event.name].contains(i)){
                                ui.selected.cards.remove(i);
                                i.classList.remove('selected');
                                i.updateTransform();
                                i.classList.add('unselectable');
                            }
                        }
                    };
                    _status.event.chooseVC=true;                        
                    _status.event.okVCot=ui.create.control("ok",function (){
                        if(this.classList.contains('unselectable')||_status.event.chooseVC!==true){
                            this.classList.add('unselectable');
                            return;
                        }
                        if(ui.selected.vcards&&ui.selected.vcards.length&&ui.selected.cards&&ui.selected.cards.length){
                            if(ui.selected.vcards[0]&&ui.selected.cards[0]){
                                if(player.storage[event.name]){
                                    player.storage[event.name][player.storage[event.name].indexOf(ui.selected.vcards[0])]=ui.selected.cards[0];    
                                }
                            };
                            tu();                                                                                                
                            event.count--;                            
                            if(event.count<=0){
                                game.check=ch;
                                rc();
                                            rc2(false);
                                            if(_status.event.cancelCot){
                    
                                                if(_status.event.cancelCot.close)_status.event.cancelCot.close();
                    
                                                else if(_status.event.cancelCot.remove)_status.event.cancelCot.remove();
                    
                                                _status.event.cancelCot=null;
                
                                            };
                                            for(var i of ui.selected.cards){
                                                i.classList.remove('selected');
                                    i.updateTransform();
                                            };
                                            ui.selected.cards=[];
                                event.resume();
                                if(event.dialog) event.dialog.close();
                                            ui.click.ok();                                            
                            }                
                        };
                    });
                    if(_status.event.cancelCot&&_status.event.okVCot)ui.control.insertBefore(_status.event.okVCot,_status.event.cancelCot);
                    if(_status.event.okVCot){
                        if((!ui.selected.vcards||!ui.selected.vcards.length||!ui.selected.cards||!ui.selected.cards.length)){
                            _status.event.okVCot.classList.add('unselectable');
                        } else _status.event.okVCot.classList.remove('unselectable');            
                    };
                });
                if(!_status.event.cancelCot)_status.event.cancelCot=ui.create.control("cancel",function (){
                    if(!_status.event.chooseVC){
                        game.check=ch;                        
                        if(event.dialog) event.dialog.close();
                        if(this.close)this.close();
                                    else if(this.remove)this.remove();
                                    rc();
                                    rc2(false);
                                    event.resume();
                                    event.count=0;
                                    ui.click.ok();                                   
                                    } else tu();                                    
                });
                if(_status.event.cancelCot&&_status.event.rCot)ui.control.insertBefore(_status.event.rCot,_status.event.cancelCot);                
                if(_status.event.rCot&&_status.event.useCot)ui.control.insertBefore(_status.event.useCot,_status.event.rCot);                                
            };
            fc();
            if(!ui.selected.cards.length&&_status.event.rCot)_status.event.rCot.classList.add('unselectable');
            if(!ui.selected.cards.length&&_status.event.useCot)_status.event.useCot.classList.add('unselectable');        
                
            _status.event.custom.replace.card=function (link){
                           var event=_status.event,player=event.player,bool,bool2;
                           if(link.classList.contains('selectable')==false||(_status.event.chooseVC&&player.storage[event.name]&&player.storage[event.name].contains(link)&&!link.classList.contains('glow'))||link.classList.contains('unselectable')) return;
                           if(!ui.selected.vcards)ui.selected.vcards=[];                               
                           if(link.classList.contains('glow')){
                               if(!ui.selected.vcards.contains(link)){
                                   for(var i of ui.selected.vcards){
                                       ui.selected.vcards.remove(i);
                                       i.updateTransform();
                                   }
                                   ui.selected.vcards.add(link);
                                   link.updateTransform(true);
                               } else {
                                   ui.selected.vcards.remove(link);
                                   link.updateTransform();
                               };
                           };
                if(link.classList.contains('selected')){
                    ui.selected.cards.remove(link);
                    link.classList.remove('selected');
                    link.updateTransform();    
                    if(!ui.selected.cards.length&&_status.event.rCot)_status.event.rCot.classList.add('unselectable');
                    if(!ui.selected.cards.length&&_status.event.useCot)_status.event.useCot.classList.add('unselectable');        
                }
                else if(!link.classList.contains('glow')){
                    for(var i of ui.selected.cards){
                        i.classList.remove('selected');
                        i.updateTransform();
                        ui.selected.cards.remove(i);
                    };
                    ui.selected.cards.add(link);
                    link.classList.add('selected');
                    link.updateTransform(true);
                    var card=ui.selected.cards[0],info=get.info(card),range,targets=game.players.slice(0);                    
                    if(lib.filter.cardEnabled(card,player)){
                        if(!info.notarget){
                            var select=get.copy(info.selectTarget);
                            if(select==undefined){
                                range=[1,1];
                            }
                            else if(typeof select=='number') range=[select,select];
                            else if(get.itemtype(select)=='select') range=select;
                            else if(typeof select=='function') range=select(card,player);
                            game.checkMod(card,player,range,'selectTarget',player);
                        }
                        if(info.notarget||range[1]<=-1){
                            if(!info.notarget&&range[1]<=-1){
                                for(var i=0;i<targets.length;i++){
                                    if(!player.canUse(card,targets[i],false)){
                                        targets.splice(i--,1);
                                    }
                                }                                        
                            }        
                            if(targets.length){
                                bool=true;
                            }        
                        } else if(game.hasPlayer(function (current){
                            return player.canUse(card,current,false);
                        })){
                            bool=true;
                        }                        
                    }
                    var cards=player.storage[event.name];
                    if(cards.length&&!cards.contains(ui.selected.cards[0])){
                        bool2=true;
                    };                                                                
                    if(_status.event.useCot){
                        if(bool!==true)_status.event.useCot.classList.add('unselectable');
                        else if(bool===true)_status.event.useCot.classList.remove('unselectable');
                    }
                    if(_status.event.rCot){
                        if(bool2!==true)_status.event.rCot.classList.add('unselectable');    
                        else if(bool2===true)_status.event.rCot.classList.remove('unselectable');                
                    };
                    game.check=function (){
                        ch();
                        if(!ui.selected.cards.length){
                            if(_status.event.rCot)_status.event.rCot.classList.add('unselectable');
                            if(_status.event.useCot)_status.event.useCot.classList.add('unselectable');
                        };    
                                    ui.selected.vcards=[];        
                        for(var i of player.getCards("s")){
                            if(i.hasGaintag(event.name)){
                                i.classList.add('glow');
                                i.classList.add('selectable');
                            }                        
                        };        
                        if(_status.event.okVCot){
                            if((!ui.selected.vcards||!ui.selected.vcards.length||!ui.selected.cards||!ui.selected.cards.length)){
                                _status.event.okVCot.classList.add('unselectable');
                            } else _status.event.okVCot.classList.remove('unselectable');            
                        };
                    };                        
                }                
                if(lib.config.popequip&&get.is.phoneLayout()&&
                    ui.arena&&ui.arena.classList.contains('selecting')&&
                    link.parentNode&&link.parentNode.classList.contains('popequip')){
                    var rect=link.getBoundingClientRect();
                    ui.click.touchpop();
                    ui.click.intro.call(link.parentNode,{
                        clientX:rect.left+18,
                        clientY:rect.top+12
                    });
                    if(!ui.selected.cards.length&&_status.event.rCot)_status.event.rCot.classList.add('unselectable');
                    if(!ui.selected.cards.length&&_status.event.useCot)_status.event.useCot.classList.add('unselectable');                        
                };
                if(_status.event.okVCot){
                    if((!ui.selected.vcards||!ui.selected.vcards.length||!ui.selected.cards||!ui.selected.cards.length)){
                        _status.event.okVCot.classList.add('unselectable');
                    } else _status.event.okVCot.classList.remove('unselectable');            
                };            
                      };                 
            };
            'step 3'
            if(event.dialog) event.dialog.close();
        'step 4'
        event.count--;
        if(event.count>0){
            event.goto(2);
        }
        },
                intro:{
                    mark:function (dialog,content,player){
                dialog.addText("已记录卡牌");
                var cards=[];
            for(var i of content){
                if(get.itemtype(i)=="card"){
                    var card=ui.create.card().init(i);                
                    if(!(player.getCards("hejs")||[]).contains(i)&&!ui.discardPile.contains(i)){
                        card.classList.add('unselectable');
                    };    
                    cards.add(card);                
                }
            }
            dialog.addSmall([cards,"card"]);
            },
                },
                forced:true,
                popup:false,
            },
            "bmqs_suzheng":{
                trigger:{
                    global:"gainAfter",
                },
                audio:"ext:薄暮全史:2",
                check:function(event, player) {
        return get.attitude(player, event.player) < 0;
    },
                filter:function (event, player) {
        return event.player != player && !(event.getParent().name == 'draw' && event.getParent(2).name == 'phaseDraw');
    },
                content:function () {
         'step 0'
       var cards=trigger.cards;
        if(!cards.length)return;
        player.chooseCardButton(get.prompt2(event.name),cards,[1,cards.length]);
        'step 1'
        if(result.links){
            player.logSkill(event.name);
            trigger.player.discard(result.links,true);
            if(result.links.length>trigger.player.hp){
                trigger.player.useCard({name:'sha'},player);
            }
        }
    },
            },
            "bmqs_fuwei":{
                trigger:{
                    player:"phaseBegin",
                },
                direct:true,
                locked:true,
                marktext:"威",
                intro:{
                    content:"附威值：#",
                },
                content:function(){
        'step 0'
        if(!player.storage.bmqs_fuwei) player.storage.bmqs_fuwei=0;
        player.chooseTarget(get.prompt2('bmqs_fuwei'),lib.filter.notMe).set('ai',function(target){
            var player=_status.event.player;
            return (target.hp+target.countCards('h'))>player.storage.bmqs_fuwei;
        });
        'step 1'
        if(result.targets){
            player.loseMaxHp(player.storage.bmqs_fuwei);
            player.storage.bmqs_fuwei=0;
            player.storage.bmqs_fuwei=(Math.floor((result.targets[0].hp+result.targets[0].countCards('h'))/2));
        }
        else event.finish();
        'step 2'
        player.markSkill('bmqs_fuwei');
        player.gainMaxHp(player.storage.bmqs_fuwei);
        game.delay();
    },
                group:"bmqs_fuwei_draw",
                subSkill:{
                    draw:{
                        trigger:{
                            player:"phaseDrawBegin2",
                        },
                        forced:true,
                        filter:function(event,player){
                return !event.numFixed&&player.storage.bmqs_fuwei&&player.storage.bmqs_fuwei>0;
            },
                        content:function(){
                trigger.num=player.storage.bmqs_fuwei||0;
            },
                        mod:{
                            maxHandcard:function (player,num){
                    return num+player.storage.bmqs_fuwei||0;
                },
                        },
                        sub:true,
                    },
                },
            },
            "bmqs_yinlun":{
                enable:"phaseUse",
                filterTarget:function(card,player,target){
        return target.countCards('h')>0&&target!=player;
    },
                selectTarget:2,
                filter:function(event,player){
        if(game.countPlayer()<3) return false;
        if((player.getStat().skill.bmqs_yinlun||0)>=1) return false;
        return true;
    },
                multiline:true,
                multitarget:true,
                targetprompt:["失败者","胜利者"],
                prompt:"选择两名其他角色拼点并猜测胜利者。",
                content:function(){
        'step 0'
        if(targets[0].canCompare(targets[1])){
            targets[0].chooseToCompare(targets[1]);
        }
        else event.finish();
        'step 1'
        if(result.winner!=targets[1]&&player.storage.bmqs_fuwei&&player.storage.bmqs_fuwei>0){
            player.chooseBool('【引论】：是否减少一点体力上限并减少一个「附威」标记令此技能已发动次数-1？').set('ai',function(target){
                return true;
            });
        }
        else if(result.winner==targets[1]){
            player.getStat().skill.bmqs_yinlun--;
            event.finish();
        }
        else event.finish();
        'step 2'
        if(result.bool){
            player.storage.bmqs_fuwei--;
            if(player.storage.bmqs_fuwei<=0) player.unmarkSkill('bmqs_fuwei');
            player.loseMaxHp();
            player.getStat().skill.bmqs_yinlun--;
        }
    },
                ai:{
                    order:10,
                    result:{
                        target:function(player,target){
                if(target.countCards('h')>3) return -1;
                return -2;
            },
                    },
                },
            },
            "bmqs_zhenwo":{
                trigger:{
                    player:"damageEnd",
                },
                forced:true,
                filter:function(event,player){
        return player.storage.bmqs_fuwei&&player.storage.bmqs_fuwei>0;
    },
                content:function(){
        'step 0'
        player.loseMaxHp(player.storage.bmqs_fuwei);
        player.storage.bmqs_fuwei=0;
        player.unmarkSkill('bmqs_fuwei');
        'step 1'
        player.drawTo(player.maxHp);
        player.recover(player.maxHp-player.hp);
    },
            },
            "bmqs_shuoguo":{
                audio:"ext:薄暮全史:2",
                trigger:{
                    player:["phaseDiscardEnd","damageEnd"],
                },
                frequent:true,
                derivation:["bmqs_lianheng"],
                filter:function(event,player){
        if(event.cards){
            for(var i=0;i<event.cards.length;i++){
                if(event.cards[i].name=='sha') return true;
            }
        }
        if(event.name=='damage') return true;
        return false;
    },
                content:function() {
    'step 0'
    player.chooseTarget('说国', function(card, player, target) {
     return !target.hasSkill('bmqs_lianheng')||target.isLinked();
    }).set('prompt2', '令其获得“连横”或重置之').ai = function(target) {
        var att = get.attitude(_status.event.player, target);
        if (att > 0) {
            if (target.isLinked()) return 2 * att;
            return att;
        }
        return att / 3;
    }
        'step 1'
    if (result.bool) {
event.target=result.targets[0]
if(event.target.hasSkill('bmqs_lianheng')){
     event.target.link(false);
}else{
    if(!event.target.hasSkill('bmqs_lianheng')&&!event.target.isLinked()){
         event.target.addSkill('bmqs_lianheng');
        event.target.addSkill('bmqs_lianheng1');
    }else
       player.chooseControl('获得技能','重置').set('choiceList',[ 
                '令其获得“连横', 
                '令其重置' 
            ]).ai=function(event,player){
return '获得技能';
if(target.isLinked()) return '重置';
};
} 
        }else event.finish();
               'step 2'
   if(result.control=='获得技能'){ 
        target.addSkill('bmqs_lianheng');
       target.addSkill('bmqs_lianheng1');
     return;
        } 
         
      if(result.control=='重置'){ 
         target.link(false);
      return;
        } 

    },
            },
            "bmqs_lianheng":{
                audio:"ext:薄暮全史:2",
                trigger:{
                    player:"phaseJieshuBegin",
                },
                mark:true,
                limited:true,
                skillAnimation:true,
                animationColor:"water",
                unique:true,
                init:function (player) {
        player.storage.bmqs_lianheng = false;
    },
                intro:{
                    content:"limited",
                },
                check:function(event, player) {
        var num1 = game.countPlayer(function(current) {
            return current.hasSkill('bmqs_lianheng');
        });
        if(num1>2)   return true;  
        return false;  
    },
                filter:function (event, player) {
        if (player.storage.bmqs_lianheng == true) return false;
        return true;
    },
                logTarget:function(){
        return game.filterPlayer(function(current){
            return current.hasSkill('bmqs_lianheng1');
        });
    },
                content:function() {
        player.addSkill('bmqs_lianheng2');
         player.removeSkill('bmqs_lianheng1');
        player.storage.bmqs_lianheng = true;
         game.countPlayer(function(current){
                    var num=current.hasSkill('bmqs_lianheng1');
                    if(num){
                         current.draw();
                         current.chooseToUse({name:'sha'},'连横：是否使用一张杀？');
                    }
                });
    },
            },
            "bmqs_lianheng1":{
                nopop:true,
            },
            "bmqs_pozong":{
                audio:"ext:薄暮全史:2",
                trigger:{
                    player:["phaseDrawBegin2","phaseDrawEnd"],
                },
                forced:true,
                filter:function(event,player){
         var num4 = game.countPlayer(function(current) {
            return current.hasSkill('bmqs_lianheng');
        });
        return !event.numFixed&&num4>0;
    },
                content:function(){
        var num1 = game.countPlayer(function(current) {
            return current.hasSkill('bmqs_lianheng');
        });
      
        trigger.num+=num1;
          var num2 = game.countPlayer(function(current) {
            return current.hasSkill('bmqs_lianheng2');
        });
        if(num2>0&&event.triggername=="phaseDrawEnd"){
        player.chooseToDiscard(num2,true);
        }
    },
                ai:{
                    threaten:1.3,
                },
            },
            "bmqs_lianheng2":{
                nopop:true,
            },
            "bmqs_xuelu_xf1":{
                audio:"ext:薄暮全史:2",
                trigger:{
                    player:"useCard",
                },
                forced:true,
                filter:function (event,player){
        if(!player.isPhaseUsing()) return false;
        return true;
    },
                content:function(){
          player.storage.bmqs_xuelu_xf1=trigger.card;
    },
                group:["bmqs_xuelu_xf1_damage","bmqs_xuelu_xf1_draw"],
                subSkill:{
                    damage:{
                        sub:true,
                        trigger:{
                            global:"damageBegin",
                        },
                        forced:true,
                        silent:true,
                        popup:false,
                        filter:function (event,player){
                return event.card&&event.card==player.storage.bmqs_xuelu;
            },
                        content:function (){
                delete player.storage.bmqs_xuelu_xf1;
                player.draw();
            },
                    },
                    draw:{
                        trigger:{
                            player:"useCardAfter",
                        },
                        forced:true,
                        silent:true,
                        filter:function (event,player){
                return player.storage.bmqs_xuelu==event.card;
            },
                        content:function (){
                player.addTempSkill('bmqs_xuelu_juedou');                 
                player.storage.bjishan_directHit.remove(trigger.card);
            },
                        sub:true,
                        popup:false,
                    },
                    juedou:{
                        onremove:true,
                        charlotte:true,
                        mark:true,
                        intro:{
                            content:"手牌均视为决斗",
                        },
                        mod:{
                            cardname:function(card,player){
           return 'juedou';
        },
                            cardnature:function(card,player){
            return false;
        },
                        },
                        sub:true,
                    },
                },
            },
            "bmqs_xuelu":{
                audio:"ext:薄暮全史:2",
                trigger:{
                    player:"useCardAfter",
                },
                forced:true,
                filter:function (event,player){
        if(!player.isPhaseUsing()) return false;
        return true;
    },
                content:function(){
         if(player.getHistory("sourceDamage",function (evt){return evt.getParent(2)==trigger}).length){
        player.addTempSkill('bmqs_xuelu_huase');
        player.storage.bmqs_xuelu_huase.add(get.suit(trigger.card));
        player.markSkill('bmqs_xuelu_huase');
} else {
      player.draw();
      player.addTempSkill('bmqs_xuelu_juedou');  
}
    },
                subSkill:{
                    juedou:{
                        trigger:{
                            source:"damageBegin",
                        },
                        forced:true,
                        silent:true,
                        popup:false,
                        direct:true,
                        content:function (){
                player.logSkill(event.name.slice(0,event.name.lastIndexOf("bmqs_xuelu",event.name.length-1)));
player.removeSkill('bmqs_xuelu_juedou');
            },
                        onremove:true,
                        charlotte:true,
                        mark:true,
                        mod:{
                            cardname:function(card,player,name){
                    if(_status.event.name=="chooseToUse"||_status.event.name!="chooseToRespond")return "juedou";
                },
                        },
                        intro:{
                            content:"手牌均视为决斗",
                        },
                        ai:{
                            damage:true,
                            order:1,
                            player:2,
                            effect:{
                                player:2,
                            },
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
                                target:2,
                                player:2,
                            },
                            tag:{
                                respond:2,
                                respondSha:2,
                                damage:1,
                            },
                        },
                        sub:true,
                    },
                    huase:{
                        init:function(player,skill){
        if(!player.storage[skill]) player.storage[skill]=[];
    },
                        onremove:true,
                        mod:{
                            "cardEnabled2":function(card,player){
            if(get.position(card)=='h'&&player.storage.bmqs_xuelu_huase.contains(get.suit(card))) return false;
        },
                        },
                        intro:{
                            content:"本回合内不能使用$花色的手牌",
                        },
                        sub:true,
                    },
                },
            },
            "bmqs_hanwei":{
                audio:"ext:薄暮全史:2",
                trigger:{
                    player:"loseAfter",
                },
                filter:function(event,player){
        if(event.type!='discard') return;
        for(var i=0;i<event.cards2.length;i++){
            if(get.type(event.cards2[i])=='basic'){
                return true;
            }
        }
        return false;
},
                content:function(){
        var cards=[];
        for(var i=0;i<trigger.cards.length;i++){
            if(get.type(trigger.cards[i])=='basic'){
                 cards.push(trigger.cards[i]);
                  }
        }  
        game.cardsGotoSpecial(cards);
        player.markAuto('bmqs_hanwei',cards);
        game.delayx();
    },
                marktext:"言",
                intro:{
                    content:"cards",
                },
                group:"bmqs_hanwei_de",
                subSkill:{
                    de:{
                        trigger:{
                            player:"damageBegin4",
                        },
                        filter:function(event,player){
        return player.getStorage('bmqs_hanwei').length>0;
    },
                        content:function(){
                'step 0'
         var cards=player.getStorage('bmqs_hanwei')
         var num1=player.getStorage('bmqs_hanwei');
        player.chooseCardButton(get.prompt2(event.name),cards,1);
        'step 1'
        if(result.links){
            var cards=player.getStorage('bmqs_hanwei')
            player.logSkill(event.name);
            cards.remove(result.links);
            player.syncStorage('bmqs_hanwei');
             trigger.num--;
        }
         
    },
                        sub:true,
                    },
                },
            },
            "bmqs_jianci":{
                audio:"ext:薄暮全史:2",
                enable:"phaseUse",
                usable:1,
                filter:function(event,player){
        return player.getStorage('bmqs_hanwei').length>0||player.countCards('h') >= 1;
    },
                content:function() {
         "step 0"
        if (player.countCards('h') >= 1) {
            var next = player.chooseToDiscard(get.prompt('bmqs_jianci'), 1, 'he', false);
            next.set('ai', function(card) {
                return 7 - get.value(card);
            });
        }

        "step 1"
        if (result.bool) {
player.draw();
event.finish();
    }else{
 player.chooseTarget('谏辞', function(card, player, target) {
            return player != target ;
        }).set('prompt2', '选择一名其他角色交给其一张“言”').ai = function(target) {
            var att = get.attitude(_status.event.player, target);
            if (att > 2) {
                if ((target.maxHp - target.hp) >= 2) return 2 * att;
                return att;
            }
            return att / 3;
        }
}
 'step 2'
        if (result.bool) {
            var cards=player.getStorage('bmqs_hanwei')
         var num1=player.getStorage('bmqs_hanwei');
            event.target=result.targets[0]
        player.chooseCardButton(get.prompt2(event.name),cards,1);
        }
'step 3'
        if(result.links){
            var cards=player.getStorage('bmqs_hanwei')
event.target.gain(cards, 'gain2', 'fromStorage', 'log');
            cards.remove(result.links);
            player.syncStorage('bmqs_hanwei');
        }
    },
            },
            "bmqs_xianlv":{
                audio:"ext:薄暮全史:2",
                trigger:{
                    player:"phaseBefore",
                },
                check:function(event, player) {
        return true;
    },
                content:function() {
        player.draw(2);
        player.addTempSkill('bmqs_xianlv_pan',{player:'phaseBefore'});
    },
                subSkill:{
                    pan:{
                        onremove:true,
                        charlotte:true,
                        mark:true,
                        mod:{
                            cardname:function (card,player,name){
                    if(get.type2(card.name)=="trick"){
                        return 'wuxie';
                    }
                },
                            cardnature:function (card,player,name){
                    if(get.type2(card.name)=="trick"){
                        return 'wuxie';
                    }
                },
                        },
                        intro:{
                            content:"锦囊牌均视为无懈可击",
                        },
                        sub:true,
                    },
                },
            },
            "bmqs_shanguo":{
                audio:"ext:薄暮全史:2",
                trigger:{
                    global:"roundStart",
                },
                unique:true,
                skillAnimation:true,
                animationColor:"gray",
                limited:true,
                init:function(player){
        player.storage.bmqs_shanguo=false;
    },
                check:function(event, player) {
        return game.zhu.maxHp-game.zhu.hp>0;
    },
                filter:function(event,player){
        if(player.storage.bmqs_shanguo) return false;
        return true;
    },
                content:function() {
'step 0' 
       player.storage.bmqs_shanguo=true;
        var num1=game.zhu.hp;
        player.addSkill('bmqs_shanguo_pan'); 
 player.storage.bmqs_shanguo_pan=num1;
 player.markSkill('bmqs_shanguo_pan');
player.chooseTarget('擅国', function(card, player, target) { 
            return player!=target;
        }).set('prompt2', '令其失去体力或回复体力。').ai = function(target) { 
            var att = get.attitude(_status.event.player, target); 
            if (att < 0) { 
                if (target.isMaxHp(true)) return 10; 
                return 3; 
            }else{ 
            if (target.isMinHp(true)) return 10;
                if(target.maxHp=target.hp) return false;
                return 5; 
            }
        } 
        'step 1' 
        if (result.bool) { 
 event.target=result.targets[0];
        player.chooseControl('失去体力','回复体力').set('choiceList',[ 
                '令其失去1点体力，若其体力值为全场唯一最大，将失去2点体力', 
                '令其回复1点体力，若其体力值为全场唯一最小，将回复2点体力' 
            ]).ai=function(event,player){
            var att = get.attitude(_status.event.player,event.target); 
            if (att < 0) { 
          return '失去体力';
            }else{ 
           return '回复体力';
            }
}; 
        }else event.finish();           
            'step 2'
   if(result.control=='失去体力'){ 
var num2=event.target.isMaxHp(true)? 2:1
      event.target.loseHp(num2);
     return;
        } 
        if(result.control=='回复体力'){ 
var num1=event.target.isMinHp(true)? 2:1
      event.target.recover(num1);
      return;
        } 
    },
                mark:true,
                intro:{
                    content:"limited",
                },
                subSkill:{
                    pan:{
                        trigger:{
                            global:["damageEnd","recoverEnd"],
                        },
                        forced:true,
                        filter:function(event,player){
        return event.player==get.zhu(player)&&player.storage.bmqs_shanguo_pan==event.player.hp&&player.storage.bmqs_shanguo;
    },
                        content:function() {
            player.storage.bmqs_shanguo=false;
 player.storage.bmqs_shanguo_pan=0;
 player.markSkill('bmqs_shanguo_pan');
                 player.removeSkill('bmqs_shanguo_pan')
             },
                        direct:true,
                        locked:true,
                        intro:{
                            content:"记录的主公体力值：#",
                        },
                        sub:true,
                    },
                },
            },
            "bmqs_mingfa":{
                audio:"ext:薄暮全史:2",
                mark:true,
                intro:{
                    content:function(storage,player,skill){
            return (storage===true?'其他角色':"你")+'使用杀时，你可将此杀目标改为场上一半数量的角色';
        },
                },
                trigger:{
                    global:["useCardToPlayered","recoverBegin","recoverAfter"],
                },
                silent:true,
                content:function (){
        "step 0"
        var name=event.name,fl=((player.storage[name]===true?player!=trigger.player:player==trigger.player)&&trigger.card&&trigger.card.name=="sha"&&trigger.getParent().noskill!=name);
        if(fl===true){
            player.chooseTarget(get.prompt2(name),Math.min(game.countPlayer(function (current){
                return current!=trigger.player&&trigger.player.canUse(trigger.card,current,false);
            }),Math.ceil(game.players.length/2)),function (card,player,target){
                return target!=trigger.player&&trigger.player.canUse(trigger.card,target,false);
            }).set('ai',function (target){
                var trigger=_status.event.getTrigger(),player=_status.event.player;                            
                return get.effect(target,trigger.card,trigger.player,player);
            });
        };
        if(event.triggername=="recoverBegin"&&trigger.source&&trigger.source==player&&trigger.player.isDying()) {
            trigger[name]=true;
        };
        if(event.triggername=="recoverAfter"&&!trigger.player.isDying()&&trigger[name]===true){
            if(player.storage[name]===true){
                player.storage[name]=false;
            }else player.storage[name]=true;
            player.logSkill(name);
        };
        "step 1"
        if(result.targets&&result.targets.length){
            player.logSkill(event.name,result.targets);
            if(player.storage[event.name]===true){
                player.storage[event.name]=false;
            }else player.storage[event.name]=true;
            trigger.getParent().targets=result.targets;
            trigger.getParent().noskill=event.name;                    
        }
    },
                forced:true,
                popup:false,
            },
            "bmqs_jintu":{
                audio:"ext:薄暮全史:2",
                group:"bmqs_jintu_restore",
                enable:"phaseUse",
                limited:true,
                intro:{
                    content:"limited",
                },
                unique:true,
                mark:true,
                skillAnimation:true,
                animationColor:"fire",
                filter:function (event,player){
        return !player.storage.bmqs_jintu;
    },
                content:function (){
        "step 0"
        if(player.storage[event.name]){
            event.finish();
            return;
        };
        player.storage[event.name]=true;
        player.draw(game.dead.length,"nodelay");
        event.targets=game.players.slice(0);
        event.targets.remove(player);
        "step 1"
        if(targets.length){
            var target=targets.shift();
            if(target.isAlive()){
                player.line(target);
                target.damage();
                game.delay();
            };
            event.redo();
        };                
    },
                ai:{
                    order:1,
                    result:{
                        player:function (player){
                if((game.countPlayer(function (current){
                    return get.damageEffect(current,player)>0;
                })>game.countPlayer(function (current){
                    return get.damageEffect(current,player)<=0;
                }))||game.countPlayer(function (current){
                    return get.damageEffect(current,player)>0&&current.hp<=1;
                })>0) return 1;
            },
                    },
                },
                subSkill:{
                    restore:{
                        trigger:{
                            source:"dieAfter",
                        },
                        silent:true,
                        content:function (){
                var name=event.name;
                player.restoreSkill(name.slice(0,name.lastIndexOf("_",name.length-1)));
            },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                },
                init:function(player,skill){
        player.storage[skill]=false;
    },
            },
            "bmqs_chiwei":{
                trigger:{
                    global:"gainAfter",
                },
                audio:"ext:薄暮全史:2",
                intro:{
                    content:"手牌上限减:#",
                },
                check:function(event, player) {
        return get.attitude(player, event.player) < 0;
    },
                filter:function (event, player) {
        return event.player != player && !(event.getParent().name == 'draw' && event.getParent(2).name == 'phaseDraw')&&event.player==_status.currentPhase;
    },
                content:function () {
         'step 0'
       if(!player.storage.bmqs_chiwei) player.storage.bmqs_chiwei=0;
       var cards=trigger.cards;
        if(!cards.length)return;
        player.chooseCardButton(get.prompt2(event.name),cards,1);
        'step 1'
        if(result.links){
            player.logSkill(event.name);
            trigger.player.discard(result.links,true);
            player.storage.bmqs_chiwei++;
        player.markSkill('bmqs_chiwei');
        game.delay();
        }
    },
                mod:{
                    maxHandcardBase:function(player,num){
            if(player.storage.bmqs_chiwei>0){
            return num-=player.storage.bmqs_chiwei;
            }
        },
                },
                group:"bmqs_chiwei_qp",
                subSkill:{
                    qp:{
                        trigger:{
                            player:"phaseAfter",
                        },
                        direct:true,
                        forced:true,
                        filter:function(event,player){
        return player.storage.bmqs_chiwei>0;
    },
                        content:function(){
       player.logSkill(event.name.slice(0,event.name.lastIndexOf("bmqs_chiwei",event.name.length-1)));
       player.storage.bmqs_chiwei=0;
        player.markSkill('bmqs_chiwei');
        game.delay()
    },
                        sub:true,
                    },
                },
            },
            "bmqs_fujing":{
                audio:"ext:薄暮全史:2",
                enable:"phaseUse",
                usable:1,
                filter:function(event,player){
        return player.countCards('h',lib.skill.bmqs_fujing.filterCard)&&player.storage.bmqs_fujing.length<1;
    },
                init:function(player){
        if(!player.storage.bmqs_fujing) player.storage.bmqs_fujing=[];
    },
                mark:true,
                discard:false,
                lose:false,
                check:function(card){return 1},
                filterCard:function(card){
        return card.name=='sha';
    },
                content:function(){
      player.lose(cards[0],ui.special,'toStorage');
            player.storage.bmqs_fujing=player.storage.bmqs_fujing.concat(cards[0]);
            player.syncStorage('bmqs_fujing');
            player.markSkill('bmqs_fujing');
            game.log(player,'将',cards[0],'置于武将牌上作为“权”');
},
                intro:{
                    content:"cards",
                },
                group:"bmqs_fujing_qp",
                subSkill:{
                    qp:{
                        trigger:{
                            global:"phaseBegin",
                        },
                        check:function(event, player) {
        return get.attitude(player, event.player) > 0;
    },
                        filter:function(event,player){
        return event.player!=player&&player.storage.bmqs_fujing.length>0&&get.distance(event.player,player)<=1
    },
                        content:function(){
                'step 0'
     
      trigger.player.chooseControl('使用','弃置').set('choiceList',[ 
                '使用', 
                '弃置' 
            ]).ai=function(event,player){
var att = get.attitude(_status.event.player,event.player); 
            if (att < 0) { 
          return '使用';
            }else{ 
           return '弃置';
            }
};
            'step 1'
   if(result.control=='使用'){ 
          player.logSkill(event.name.slice(0,event.name.lastIndexOf("bmqs_fujing",event.name.length-1)));
  trigger.player.useCard(player.storage.bmqs_fujing[0],player,true);
       game.log(trigger.player,'使用了',player.storage.bmqs_fujing[0]);
    player.storage.bmqs_fujing.remove(player.storage.bmqs_fujing[0]);
     return;
        } 
         
      if(result.control=='弃置'){ 
          if(!player.storage.bmqs_chiwei) player.storage.bmqs_chiwei=0;
             player.logSkill(event.name.slice(0,event.name.lastIndexOf("bmqs_fujing",event.name.length-1)));
     game.log(trigger.player,'弃置了',player.storage.bmqs_fujing[0]);
player.storage.bmqs_fujing.remove(player.storage.bmqs_fujing[0]);          
          player.draw();
          trigger.player.draw();
          player.storage.bmqs_chiwei++;
        player.markSkill('bmqs_chiwei');
        game.delay();
      return;
        } 

            },
                        sub:true,
                    },
                },
            },
            "bmqs_heguo":{
                audio:"ext:薄暮全史:2",
                trigger:{
                    global:"loseAfter",
                },
                frequent:true,
                usable:1,
                filter:function(event,player){
        if(event.type!='discard') return false;
        for(var i=0;i<event.cards.length;i++){ 
            if(get.type(event.cards[i])=='equip'&&get.position(event.cards[i])=='d'||event.cards[i].name=='sha'&&get.position(event.cards[i])=='d'){ 
                return true; 
            } 
        } 
    },
                content:function(){ 
        "step 0" 
        if(trigger.delay==false) game.delay(); 
        "step 1" 
        var cards=[]; 
        for(var i=0;i<trigger.cards.length;i++){ 
            if(get.type(trigger.cards[i])=='equip'&&get.position(trigger.cards[i])=='d'||trigger.cards[i].name=='sha'&&get.position(trigger.cards[i])=='d'){ 
                cards.push(trigger.cards[i]); 
            } 
        } 
        if(cards.length){ 
            player.gain(cards,'gain2','log'); 
        } 
    },
                group:"bmqs_heguo_mp",
                subSkill:{
                    mp:{
                        audio:"ext:薄暮全史:2",
                        trigger:{
                            global:"phaseJieshuBegin",
                        },
                        direct:true,
                        forced:true,
                        filter:function(event,player){
        return !player.getHistory('gain',function(){
            return true;
        }).length>0;
             
    },
                        content:function(){
                player.loseHp();
        player.draw(2);
    },
                        sub:true,
                    },
                },
            },
            "bmqs_fanque":{
                audio:"ext:薄暮全史:2",
                trigger:{
                    global:"roundStart",
                },
                forced:true,
                content:function(){
         'step 0'
        player.chooseToUse(function(card, player, event) {
            if (get.name(card) != 'sha') return false;
            return true;
        }, '犯阙：是否使用一张杀？').set('logSkill',
            'bmqs_fanque');
        'step 1'
        if (result.bool) {
            if (player.getHistory('sourceDamage', function(evt) {
                return evt.getParent(4) == event;
            }).length)
           result.targets[0].addSkill('benghuai');

            else {
          player.addSkill('benghuai');

            }
        }else{
       player.addSkill('benghuai');
        }

    },
            },
            "bmqs_jiabingxiang":{
                audio:"ext:薄暮全史:2",
                marktext:"矢",
                intro:{
                    mark:function (dialog,storage,player){
                        var ps=game.players.concat(game.dead),cards=[];
                        for(var i of storage){
                            var card=ui.create.button(i,"card"),hasDie=function (){
                                 for(var j of ps){
                                    if(j.getAllHistory("die",function (evt){
                                        return evt.getParent(3).card&&evt.getParent(3).card.cardid==i.cardid;
                                    }).length)return true;
                                };
                            },hasDam=function (){
                                return player.getAllHistory("sourceDamage",function (evt){
                                    return evt.getParent().card&&i.cardid==evt.getParent().card.cardid;
                                }).length>0;
                            };
                            if(i.use){
                                if(!hasDie()&&!hasDam()){
                                    card.classList.add("unselectable");
                                }
                                 else{
                                     if(hasDam())card.classList.add("target");
                                     if(hasDie()){
                                         var ts=[];
                                         for(var j of ps){
                                            if(j.getAllHistory("die",function (evt){
                                                return evt.getParent(3).card&&evt.getParent(3).card.cardid==i.cardid;
                                            }).length)ts.push(j);
                                        };
                                        var div=ui.create.div("",card);
                                         Object.assign(div.style,{
                                             left:"0",
                                             bottom:"0",
                                             width:"100%",
                                             height:"40%",
                                             overflow:"auto",
                                             "white-space":"nowrap"
                                         });
                                        for(var j of ts){
                                             var char=ui.create.div('.avatar',div);
                                             card.avatar=char;
                                             Object.assign(char.style,{
                                                 width:"30%",
                                                 height:"100%",
                                                 position:"relative",
                                             });
                                             char.setBackground(j.name,'character');
                                         };
                                     };
                                 };
                             };
                            cards.add(card);                
                         };
                         dialog.addSmall([cards,"card"]);                         
                    },
                },
                trigger:{
                    global:"phaseBefore",
                    player:["enterGame","phaseDrawBegin2","useCardAfter"],
                },
                silent:true,
                nobracket:true,
                filter:function(event,player){
                    if(event.name=="useCard"){
                        if(player.storage.bmqs_jiabingxiang&&player.storage.bmqs_jiabingxiang.length&&event.card&&event.card.cardid){
                            var id=player.storage.bmqs_jiabingxiang.map(function (sha){
                                return sha.cardid;
                            });
                            if(id.indexOf(event.card.cardid)!=-1)return true;
                        }
                    };
                    if(event.name=="phaseDraw")return !event.numFixed;
                    return (event.name!='phase'||game.phaseNumber==0);
                },
                content:function (){
                    var name=event.name;
                    if(!["phaseDraw","useCard"].contains(trigger.name)){
                        var cards=[],num=3;
                        while(num--){
                            var card=get.cardPile(function (c){
                                return c.name=="sha"&&!cards.contains(c);
                            });
                            if(card)cards.add(card);                        
                        };
                        if(cards&&cards.length){
                            player.directgains(cards,event.name);
                            player.markAuto(name,cards);
                            player.logSkill(name);
                            var over=game.over;
                            eval(`game.over=function (result){                    
                                var ps=game.players.concat(game.dead),targets=[];
                                for(var i of cards){
                                    for(var j of ps){
                                        if(j.getAllHistory("die",function (evt){
                                            return evt.getParent(3).card&&evt.getParent(3).card.cardid==i.cardid;
                                        }).length){
                                            if(!targets.contains(j))targets.push(j);                                                                    
                                        };
                                    };
                                };                                                        
                                if(targets.length>=${cards.length}){
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
                                };
                                over(bool===undefined?result:bool);
                            };`);
                        };
                    } else if(trigger.name=="phaseDraw"){
                        if(player.getAllHistory("sourceDamage",function (evt){
                            return evt.getParent().card&&player.storage[name].map(function (sha){
                                return sha.cardid;
                            }).contains(evt.getParent().card.cardid);
                        }).length){
                            trigger.num+=player.getAllHistory("sourceDamage",function (evt){
                                return evt.getParent().card&&player.storage[name].map(function (sha){
                                    return sha.cardid;
                                }).contains(evt.getParent().card.cardid);
                            }).length;
                            player.logSkill(name);
                        };
                    } else {
                        var id=player.storage[name].map(function (sha){
                            return sha.cardid;
                        });
                        if(player.storage[name]&&player.storage[name][id.indexOf(trigger.card.cardid)]&&!player.storage[name][id.indexOf(trigger.card.cardid)].use)player.storage[name][id.indexOf(trigger.card.cardid)].use=true;                        
                    };
                },
                mod:{
                    maxHandcardBase:function(player,num){
                        return num+player.getAllHistory("sourceDamage",function (evt){
                            return evt.parent.card&&player.storage.bmqs_jiabingxiang&&player.storage.bmqs_jiabingxiang.map(function (sha){
                                return sha.cardid;
                            }).contains(evt.parent.card.cardid);
                        }).length;
                    },
                    cardUsable:function(card,player){
                        if(player.storage.bmqs_jiabingxiang&&player.storage.bmqs_jiabingxiang.map(function (sha){
                            if(!sha.use)return sha.cardid;
                        }).contains(card.cardid)) return Infinity;
                    },
                    targetInRange:function(card,player){
                        if(player.storage.bmqs_jiabingxiang&&player.storage.bmqs_jiabingxiang.map(function (sha){
                            if(!sha.use)return sha.cardid;
                        }).contains(card.cardid)) return true;
                    },
                },
                forced:true,
                popup:false,
            },
            "bmqs_fendaige":{
                audio:"ext:薄暮全史:2",
                trigger:{
                    player:"useCardToBegin",
                },
                filter:function (event,player){
        return !get.tag(event.card,'damage')&&event.target&&event.target!=player;
    },
                silent:true,
                nobracket:true,
                content:function (){
        "step 0"
        if(player.isMaxHandcard(true)||!player.storage.bmqs_jiabingxiang||!!player.storage.bmqs_jiabingxiang.length||player.storage.bmqs_jiabingxiang.some(function (card){return card.use})){
            event._result={bool:true};
        } else {
            player.chooseBool(get.prompt2(event.name)).ai=function (){
                var player=_status.event.player,trigger=_status.event.getTrigger();
                return get.effect(trigger.target,trigger.card,player,player)<0;
            };
        };
        "step 1"
        if(result.bool){
            player.logSkill(event.name);
            player.draw("nodelay");
            trigger.cancel();
        };
    },
                forced:true,
                popup:false,
            },
            "bmqs_guixiang":{
                audio:"ext:薄暮全史:2",
                trigger:{
                    global:"phaseBefore",
                    player:"enterGame",
                },
                forced:true,
                init:function(player){
        if(!player.storage.bmqs_guixiang) player.storage.bmqs_guixiang=[];
    },
                filter:function(event){
        return game.players.length>1&&(event.name!='phase'||game.phaseNumber==0);
    },
                content:function(){
'step 0'
player.draw(4);
"step 1"
        if(player.countCards('h')>=4){
            player.chooseCard('将四张手牌置于武将牌上作为“象”',4,true);
        }
        else{
            event.finish();
        }
 "step 2"
        if(result.cards&&result.cards.length){
            player.lose(result.cards,ui.special,'toStorage');
            player.storage.bmqs_guixiang=player.storage.bmqs_guixiang.concat(result.cards);
            player.syncStorage('bmqs_guixiang');
            player.markSkill('bmqs_guixiang');
            game.log(player,'将',result.cards,'置于武将牌上作为“象”');
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
                group:"bmqs_guixiang_cp",
                subSkill:{
                    cp:{
                        trigger:{
                            player:"useCard",
                        },
                        forced:true,
                        direct:true,
                        filter:function(event,player){
        return player.isPhaseUsing()&&get.type(event.card)!='equip';
    },
                        content:function(){
                         'step 0'
                         if(!player.storage.bmqs_guixiang.length){
                               event.getParent('phaseUse').skipped=true;
                         }
           player.logSkill(event.name.slice(0,event.name.lastIndexOf("bmqs_guixaing",event.name.length-1)));
         var cards=player.getStorage('bmqs_guixiang')
         var num1=player.getStorage('bmqs_guixiang');
        player.chooseCardButton(get.prompt2(event.name),cards,1,true);
        'step 1'
        if(result.links){
            var cards=player.getStorage('bmqs_guixiang')
            player.logSkill(event.name);
            cards.remove(result.links);
             game.log(result.links,'进入了弃牌堆');
            if(!player.storage.bmqs_guixiang.length){
            player.unmarkSkill('bmqs_guixiang');
         event.getParent('phaseUse').skipped=true;
        }
        else{
            player.markSkill('bmqs_guixiang');
        }
        player.syncStorage('bmqs_guixiang');
        game.delayx();
            
        }
        
    },
                        sub:true,
                    },
                },
            },
            "bmqs_zhoumi":{
                audio:"ext:薄暮全史:2",
                trigger:{
                    player:["phaseZhunbeiBegin","phaseJieshuBegin"],
                },
                frequent:true,
                filter:function(event){
         return game.roundNumber>0;
     },
                content:function(){
'step 0'
if(game.roundNumber>=3){
    var num1=3;
}else{
    var num1=game.roundNumber;
}
player.draw(num1);
"step 1"
if(game.roundNumber>=3){
    var num1=3;
}else{
    var num1=game.roundNumber;
}    
    var num2=player.countCards('he');    
        if(player.countCards('he')>=1){
            player.chooseCard('he','将任意张牌置于武将牌上作为“象”',[1,num2],true).set('ai',function(card){
            if(card.name=='du') return 10;
            if(ui.selected.cards.length) return -1;
            return 4-get.value(card);
        });
        }
        else{
            event.finish();
        }
 "step 2"
        if(result.cards&&result.cards.length){
            player.lose(result.cards,ui.special,'toStorage');
            player.storage.bmqs_guixiang=player.storage.bmqs_guixiang.concat(result.cards);
            player.syncStorage('bmqs_guixiang');
            player.markSkill('bmqs_guixiang');
            game.log(player,'将',result.cards,'置于武将牌上作为“象”');
        }
    },
            },
            "bmqs_xiaoyue":{
                audio:"ext:薄暮全史:2",
                trigger:{
                    global:"damageSource",
                },
                forced:true,
                filter:function(event,player){
        return event.card.name=='sha'&&event.source.countDiscardableCards(player,'he')>0;
},
                content:function(){
        'step 0'
        player.discardPlayerCard(trigger.source,get.prompt('bmqs_xiaoyue',trigger.source)).set('ai',function(button){
            if(!_status.event.att) return 0;
            if(get.position(button.link)=='e'){
                if(get.subtype(button.link)=='equip2')    return 2*get.value(button.link);
                return get.value(button.link);
            }
            return 1;
        }).set('logSkill',['bmqs_xiaoyue',trigger.source]).set('att',get.attitude(player,trigger.source)<=0);
        'step 1'
        if(result.bool&&result.links&&result.links.length){
 if(get.color(result.links[0])=='black'){
player.gain(result.links,'gain2');
}
           }else{
              if(trigger.source.isMaxHandcard(true)){
                  player.loseHp();
              }
           }
    },
            },
            "bmqs_zhuyang":{
                audio:"ext:薄暮全史:2",
                trigger:{
                    global:"phaseZhunbeiBegin",
                },
                filter:function(event,player){
        return event.player==game.zhu&&event.player.isZhu&&player.countCards('h') >= 3||event.player==game.zhu&&event.player.isZhu&&event.player.countCards('h') >= 3;
    },
                content:function() {
      'step 0'
      player.chooseTarget('筑阳',[1,2], function(card, player, target) { 
            return player==target&&target.countCards('h') >= 3||target==game.zhu&&target.countCards('h') >= 3;
        }).set('prompt2', '选择两名对象交换三张手牌，若只选择一名视为该角色与牌堆交换三张牌').ai = function(target) { 
            var att = get.attitude(_status.event.player, target); 
            if (att>0) { 
                if (target.countCards('he') <= 3) return 5; 
                return 3; 
            } 
            return false; 
        } 
        'step 1' 
        if (result.bool) { 
            event.targetq=result.targets[0];
            event.targete=result.targets[1];
        if(result.targets.length==1){
            event.targetq.draw(3);
             event.targetq.chooseCard(3,'h', true).ai = function(card) {
            return 20 - get.value(card);
          };
        }else{
            event.targetq.chooseCard(3,'h', true).ai = function(card) {
            return 20 - get.value(card);
          };
                 event.goto(3);
        }          
        } 
           'step 2' 
           if (result.bool) {　　
          event.cardp = result.cards;
           game.log(event.targetq,'将',event.cardp,'置于牌堆顶'); 
        event.targetq.lose(event.cardp,ui.cardPile,'insert');
    event.goto(6);
        }
          'step 3'
        if (result.bool) {　　
          event.cardp = result.cards;
        event.targete.chooseCard(3,'h', true).ai = function(card) {
            return 20 - get.value(card);
          };
        }
         'step 4'
        if (result.bool) {
          event.cardt = result.cards;
        }
         'step 5'
        event.targetq.$giveAuto(event.cardp,event.targete);
         event.targete.gain(event.cardp,event.targetq);
        event.targete.give(event.cardt,event.targetq);
        'step 6'
        trigger.player.chooseUseTarget({
                    name: "wugu",
                    isCard: true
                }, true);
    },
            },
            "bmqs_fujin":{
                audio:"ext:薄暮全史:2",
                trigger:{
                    global:"useCardToBegin",
                },
                filter:function (event,player){
                    return event.parent.targets&&event.parent.targets.length==1&&event.target&&event.card&&event.card.name&&!["equip","delay"].contains(get.type(event.card))&&((event.player!=player&&event.target==player)||(event.player==player&&event.target!=player))&&player.canUse({name:event.card.name,isCard:true},event.player==player&&event.target!=player?event.target:event.player);
                },
                usable:1,
                check:function (event,player){
                    return get.effect(event.player==player&&event.target!=player?event.target:event.player,{name:event.card.name},player,player)>0;
                },
                prompt:function(event,player){
                    return get.prompt('复劲',event.player==player&&event.target!=player?event.target:event.player)+"【"+get.translation(event.card.name)+"】";                
                },
                content:function (){
                    player.useCard({name:trigger.card.name,isCard:true},trigger.player==player&&trigger.target!=player?trigger.target:trigger.player);
                },
            },
            "bmqs_xfujing":{
                audio:"ext:薄暮全史:2",
                global:"bmqs_xfujing_use",
                marktext:"荆",
                intro:{
                    content:"cards",
                    onunmark:"throw",
                },
                trigger:{
                    player:["phaseJieshuBegin","phaseJieshuBefore"],
                },
                filter:function (event,player,name){return name=="phaseJieshuBegin"?player.num("he")>0:true},
                silent:true,
                content:function (){
        "step 0"
        if(event.triggername=="phaseJieshuBefore"){
            var storage=player.storage[event.name];
            if(get.itemtype(storage)=="card"||get.itemtype(storage)=="cards"){
                player.unmarkSkill(event.name);
                        };
        } else player.chooseCard("he",get.prompt2(event.name)).ai=function (card){
            var player=_status.event.player,f=player.getFriends(),e=player.getEnemies(),eff1=[],eff2=[],i,names=[],names2=[],fu=function (tar){
                var list=[];
                for(var i of lib.inpile){
                    var info=get.info({name:i}),range;
                    if(!info.notarget){
                        var select=get.copy(info.selectTarget);
                        if(select==undefined){
                            range=[1,1];
                        }
                        else if(typeof select=='number') range=[select,select];
                        else if(get.itemtype(select)=='select') range=select;
                        else if(typeof select=='function') range=select({name:i},player);                                    
                    };
                    if(range&&range[0]==1&&range[1]==1&&!["equip","delay"].contains(get.type({name:i}))&&tar.canUse({name:i},player)){
                        list.push([i,get.effect(player,{name:i},tar,player)]);
                    };
                };
                return list;
            };
            for(i of f){
                eff1.addArray(fu(i));
                names=names.concat(i.getCards("he").map(function (c){
                    return get.name(c);
                }));
            };
            for(i of e){
                eff2.addArray(fu(i));
                names2=names2.concat(i.getCards("he").map(function (c){
                    return get.name(c);
                }));
            };            
            if(f.length<e.length||!eff1.some(function (y){
                return y[1]>0;
            }))return 0;
            var result=[];
            for(i of player.getCards("he").map(function (c){
                return get.name(c);
            })){
                var name=names.filter(function (name){
                    return name==i;
                });
                if(name.length)result.push([i,name.length]);
            };
            result.sort(function (a,b){
                return ((b[1]-names2.filter(function (name){
                    return name==b[0];
                }).length)+(-get.value({name:b[0]})))-((a[1]-names2.filter(function (name){
                    return name==a[0];
                }).length)+(-get.value({name:a[0]})));
            });
            if(!result.length)return 0;
            if(get.name(card)==result[0][0])return 100;
        };
        "step 1"
        if(result.cards){
            player.lose(result.cards,ui.special,'toStorage');
            player.markAuto(event.name,result.cards);    
            player.logSkill(event.name);
        }
        
    },
                subSkill:{
                    use:{
                        enable:"phaseUse",
                        usable:1,
                        filter:function (event,player){
                var names=[],
                bool=game.countPlayer(function (current){
                    if(current.storage&&current.storage.bmqs_xfujing&&(get.itemtype(current.storage.bmqs_xfujing)=="cards"||get.itemtype(current.storage.bmqs_xfujing)=="card")){
                        if(Array.isArray(current.storage.bmqs_xfujing)){
                            for(var i of current.storage.bmqs_xfujing)names.push(get.name(i));
                        }
                        else names.push(get.name(current.storage.bmqs_xfujing));
                        return true;
                    };
                });
                return player.countCards("hes",function (card){
                    return names.contains(get.name(card));
                })&&bool&&!(player.storage&&player.storage.bmqs_xfujing&&(get.itemtype(player.storage.bmqs_xfujing)=="cards"||get.itemtype(player.storage.bmqs_xfujing)=="card"));
            },
                        chooseButton:{
                            dialog:function(event,player){
                    var list=[];
                    for(var i of lib.inpile){
                        var info=get.info({name:i}),range;
                        if(!info.notarget){
                            var select=get.copy(info.selectTarget);
                            if(select==undefined){
                                range=[1,1];
                            }
                            else if(typeof select=='number') range=[select,select];
                            else if(get.itemtype(select)=='select') range=select;
                            else if(typeof select=='function') range=select({name:i},player);
                        };
                        if(range&&range[0]==1&&range[1]==1&&!["equip","delay"].contains(get.type({name:i}))&&event.filterCard({name:i},player,event)&&game.hasPlayer(function (current){
                            return current.storage&&current.storage.bmqs_xfujing&&(get.itemtype(current.storage.bmqs_xfujing)=="cards"||get.itemtype(current.storage.bmqs_xfujing)=="card")&&player.canUse({name:i},current);
                        })){
                            list.push([get.type(i),'',i]);
                        
                        }
                    }
                    return ui.create.dialog('负荆',[list,'vcard'],'hidden');
                },
                            check:function(button){
                    var player=_status.event.player;
                    return player.getUseValue({name:button.link[2]})+1;
                },
                            backup:function(links,player){
                    return {
                        popname:true,
                        filterCard:function (card){
                            var names=[];
                            game.hasPlayer(function (current){
                                if(current.storage&&current.storage.bmqs_xfujing&&(get.itemtype(current.storage.bmqs_xfujing)=="cards"||get.itemtype(current.storage.bmqs_xfujing)=="card")){
                                    if(Array.isArray(current.storage.bmqs_xfujing)){
                                        for(var i of current.storage.bmqs_xfujing)names.push(get.name(i));
                                    }
                                    else names.push(get.name(current.storage.bmqs_xfujing));
                                };
                            });
                            return names.contains(get.name(card));                                        
                        },
                        selectTarget:function (){
                            var num=game.countPlayer(function (current){
                                return current.storage&&current.storage.bmqs_xfujing&&(get.itemtype(current.storage.bmqs_xfujing)=="cards"||get.itemtype(current.storage.bmqs_xfujing)=="card");
                            });
                            if(num>1)return [1,1];
                            else return -1;
                        },
                        filterTarget:function (card,player,target){
                            var targets=game.filterPlayer(function (current){
                                return current.storage&&current.storage.bmqs_xfujing&&(get.itemtype(current.storage.bmqs_xfujing)=="cards"||get.itemtype(current.storage.bmqs_xfujing)=="card");
                            });
                            return targets.contains(target);
                        },
                        position:'hes',
                        popup:false,
                        viewAs:{
                            name:links[0][2],
                        },
                        precontent:function(){
                            var name=event.name.replace("_backup","");
                            name=name.replace("pre_","");
                            name=name.slice(0,name.lastIndexOf("_",name.length-1));
                            if(event.result.targets&&event.result.targets[0])event.result.targets[0].logSkill(name);
                        },                                    
                    }
                },
                            prompt:function(links,player){
                    var names=[],
                    targets=game.filterPlayer(function (current){
                        if(current.storage&&current.storage.bmqs_xfujing&&(get.itemtype(current.storage.bmqs_xfujing)=="cards"||get.itemtype(current.storage.bmqs_xfujing)=="card")){
                            if(Array.isArray(current.storage.bmqs_xfujing)){
                                for(var i of current.storage.bmqs_xfujing)names.push(get.name(i));
                            }
                            else names.push(get.name(current.storage.bmqs_xfujing));
                            return true;
                        };
                    });
                    return '将一张'+(names.length>1?"("+(function (names){
                        var str=[];
                        for(var i of names)str.push("【"+get.translation(i)+"】");
                        return str.join("/");
                    }(names))+")":"【"+get.translation(names[0])+"】")+'当做'+get.translation(links[0][2])+'对'+(targets.length>1?"("+(function (targets){
                        var str=[];
                        for(var i of targets)str.push("【"+get.translation(i)+"】");
                        return str.join("，");
                    }(targets))+")其中一人":get.translation(targets[0]))+'使用';
                },
                        },
                        ai:{
                            order:10,
                            result:{
                                player:1,
                            },
                        },
                        sub:true,
                    },
                },
                forced:true,
                popup:false,
            },
        },
        translate:{
            "bmqs_qiangqin":"强秦",
            "bmqs_qiangqin_info":"你的回合开始时，你可弃置一名手牌数不小于你的角色两张牌；你的回合结束时，你可对一名体力值不大于你的角色造成一点伤害；若均未触发，你可摸两张牌或回复一点体力。",
            "bmqs_qiangqin1":"强秦",
            "bmqs_qiangqin1_info":"",
            "bmqs_fanei":"伐内",
            "bmqs_fanei_info":"主公技，锁定技，与你距离不小于x的角色视为在其他秦势力角色的攻击范围内。（x为你的当前体力值）",
            "bmqs_fanei1":"伐内",
            "bmqs_fanei1_info":"",
            "bmqs_zaolv":"造律",
            "bmqs_zaolv_info":"锁定技，摸牌阶段开始时，你可令一名其他角色摸一张牌并展示，若展示牌的点数为字母，直到你的下一回合开始时，每个角色的摸牌阶段开始时都要摸一张牌并展示。若不为字母，直到你的下一回合开始时，每个角色的摸牌阶段都少摸一张牌，然后你摸一张牌。",
            "bmqs_zaolv1":"造律",
            "bmqs_zaolv1_info":"",
            "bmqs_zaolv2":"造律",
            "bmqs_zaolv2_info":"",
            "bmqs_wanbi":"完璧",
            "bmqs_wanbi_info":"当一名其他角色的回合结束时，你可获得你本回合失去的牌。",
            "bmqs_kangjie":"抗节",
            "bmqs_kangjie_info":"体力值不小于你的角色使用【杀】指定你为目标时，你可以弃置一张牌，令其弃置一张点数大于此牌的牌，否则此【杀】对你无效。",
            "bmqs_jieming":"竭命",
            "bmqs_jieming_info":"回合开始前，若X大于1，你可以改为连续执行摸牌阶段和弃牌阶段共X个。你以此法：每摸一张牌，便可以对其他角色使用之；每弃置一张牌，便可以移动场上的一张牌。X为已受伤的角色数且至多为你的体力值。",
            "bmqs_biaobiao":"猋骉",
            "bmqs_biaobiao_info":"锁定技，你选择且记录六张牌名各不同的牌作为初始手牌。你能跳过你的回合，再获得当前在弃牌堆里的所有记录牌；然后你每缺少一张记录牌，你可选择无视距离限制使用一张牌，或将一张未被记录的手牌代替缺少的牌为新记录的牌。",
            "bmqs_suzheng":"肃政",
            "bmqs_suzheng_info":"当其他角色于摸牌阶段外获得牌后，你观看其获得的牌并选择其中任意张牌弃置之，然后若弃置的牌大于其体力，其视为对你使用一张杀。",
            "bmqs_fuwei":"附威",
            "bmqs_fuwei_info":"你的回合开始时，你可以移除所有「附威」标记并减少等量的体力上限，然后你选择一名其他角色，令你的体力上限+X并获得等量的「附威」标记；锁定技，你的手牌上限+Y，摸牌阶段开始时你改为摸Y张牌。(X为该角色的体力值与其手牌数之和的一半向下取整，Y为你「附威」标记的数量)",
            "bmqs_yinlun":"引论",
            "bmqs_yinlun_info":"出牌阶段限一次，你可选择两名其他角色拼点并猜测胜利的一方，若你猜测正确，则此技能已发动次数-1；反之，若你拥有「附威」标记，你可减一点体力上限并移除一个此标记令此技能已发动次数-1。",
            "bmqs_zhenwo":"真我",
            "bmqs_zhenwo_info":"锁定技，当你受到伤害后，若你拥有「附威」标记，则你移除所有「附威」标记并减少等量的体力上限，然后你将手牌摸至体力上限并将体力回复至体力上限。",
            "bmqs_shuoguo":"说国",
            "bmqs_shuoguo_info":"你于弃牌阶段弃置【杀】或受到伤害后，可以令一名角色获得“连横”或令其重置之。",
            "bmqs_lianheng":"连横",
            "bmqs_lianheng_info":"限定技，结束阶段，你可以令所有拥有“连横”且未发动过的角色各摸一张牌，然后这些角色可依次使用一张【杀】。",
            "bmqs_lianheng1":"连横",
            "bmqs_lianheng1_info":"",
            "bmqs_pozong":"破纵",
            "bmqs_pozong_info":"锁定技，摸牌阶段，你多摸X张牌，然后弃置Y张牌（X为拥有“连横”的角色数且至多为5，Y为其中已发动过的角色数）。",
            "bmqs_lianheng2":"连横",
            "bmqs_lianheng2_info":"",
            "bmqs_xuelu_xf1":"血路",
            "bmqs_xuelu_xf1_info":"",
            "bmqs_xuelu":"血路",
            "bmqs_xuelu_info":"锁定技，出牌阶段，你使用一张牌后，若之没有造成伤害，你摸一张牌，此阶段内非结算过程中全部手牌视为【决斗】直至你造成伤害；反之，你本回合不能再使用相同花色的手牌。",
            "bmqs_hanwei":"捍威",
            "bmqs_hanwei_info":"你的基本牌被弃置后，你可将之置于武将牌上，称之为“言”。你受到伤害时，移去一张“言”，此伤害-1。",
            "bmqs_jianci":"谏辞",
            "bmqs_jianci_info":"出牌阶段限一次，你可弃置一张手牌或将一张“言”交与一名其他角色，你摸一张牌。",
            "bmqs_xianlv":"先虑",
            "bmqs_xianlv_info":"准备阶段，你可以摸两张牌，然后直至你的下个回合开始，你的锦囊牌均视为【无懈可击】。",
            "bmqs_shanguo":"擅国",
            "bmqs_shanguo_info":"限定技，一轮开始时，你可以记录主公当前的体力值，然后令一名其他角色回复或失去1点体力；若其体力值为场上唯一最低/高，此回复/失去值+1;当主公的体力值再次来到记录值时，重置“擅国”。",
            "bmqs_mingfa":"命伐",
            "bmqs_mingfa_info":"转换技，①你②其他角色使用杀时，你可将此杀目标改为场上一半数量的角色；你令一名角色脱离濒死后，转换当前项。",
            "bmqs_jintu":"尽屠",
            "bmqs_jintu_info":"限定技，出牌阶段，你可摸张数为阵亡角色数的牌，然后对其他角色各造成一点伤害；你杀死其他角色后，重置此技能。",
            "bmqs_chiwei":"耻位",
            "bmqs_chiwei_info":"当一名其他角色于其回合内未因摸牌阶段而获得牌时，你可以弃置其以此获得的牌中的其中一张，若如此做，你下个回合手牌上限-1。",
            "bmqs_fujing":"负荆",
            "bmqs_fujing_info":"出牌阶段限一次，你可以将一张【杀】置于你的武将牌上；当一名与你距离为1的其他角色的回合开始时，你可令其选择一项：①对你使用此【杀】；②其弃置此【杀】，然后你与其各摸一张牌，且你下个回合手牌上限+1。",
            "bmqs_heguo":"壑国",
            "bmqs_heguo_info":"每回合限一次，当【杀】或装备牌因弃置进入弃牌堆时，你可以获得之。一名角色的结束阶段，若本回合你未获得牌，你失去一点体力并摸两张牌。",
            "bmqs_fanque":"犯阙",
            "bmqs_fanque_info":"轮次开始时，你可对一名角色使用一张【杀】，若造成伤害，其获得技能“崩坏”，若未造成伤害或未使用【杀】，你获得技能“崩坏”。",
            "bmqs_jiabingxiang":"甲兵响",
            "bmqs_jiabingxiang_info":"锁定技。游戏开始时，你从牌堆中获得三张【杀】并置于武将牌上称之为“矢”（你可以无视距离和次数限制地使用或打出之）；你的手牌上限和摸牌阶段摸牌数均+X（X为其中造成伤害者）。若你使用这三张【矢】分别击杀了三名角色，游戏结束时你视为胜利。",
            "bmqs_fendaige":"粉黛歌",
            "bmqs_fendaige_info":"你使用非伤害类牌指定其他角色为目标时，可以改为摸一张牌。若你没有“矢”或你手牌数为场上唯一最大，必须如此做。",
            "bmqs_guixiang":"鬼象",
            "bmqs_guixiang_info":"锁定技，游戏开始时，你额外摸4张牌并将等量的牌置于你的武将牌上，称为“象”。当你于出牌阶段使用非装备牌时，你移去一张“象”，若你没有“象”，你结束出牌阶段。",
            "bmqs_zhoumi":"周秘",
            "bmqs_zhoumi_info":"准备阶段或结束阶段，你可摸X张牌并将任意张牌当做“象”置于武将牌上（X为游戏轮次且至多为3）。",
            "bmqs_xiaoyue":"削月",
            "bmqs_xiaoyue_info":"一名角色使用【杀】造成伤害后，你可以弃置其一张牌并获得其中黑色者；若你放弃对场上手牌数最大的角色发动此技能，你失去一点体力。",
            "bmqs_zhuyang":"筑阳",
            "bmqs_zhuyang_info":"主公的回合开始时，你可令下列三者中的二者交换三张牌：①你②主公③牌堆；然后视为主公使用了一张【五谷丰登】。",
            "bmqs_fujin":"复劲",
            "bmqs_fujin_info":"每回合限一次，你对其他角色使用，或其他角色对你使用一张目标为一的即时牌后，你可视为对对方使用一张与之同名的牌。",
            "bmqs_xfujing":"负荆",
            "bmqs_xfujing_info":"结束阶段，你可将一张牌置于武将牌上，直到你下个结束阶段；其他角色的出牌阶段限一次，若你有负荆牌，其可将一张与之同名的牌当一张目标为一的即时牌对你使用。",
        },
    },
    intro:"扩展介绍：<br>薄暮的全史DIY，部分代码由无中无中无中编写，感谢我的宝。感谢配音员德川，感谢志文，和泉悠，迷迷糊糊小信浓三位评委。感谢给我投稿的diyer。",
    author:"薄暮<br>>扩展群聊：974716501",
    diskURL:"",
    forumURL:"",
    version:"1.0",
},files:{"character":["bmqs_wangjian.jpg","bmqs_anlushan.jpg","bmqs_lianpo_jiu.jpg","bmqs_jizu.jpg","bmqs_bomu.jpg","bmqs_yanying.jpg","bmqs_lianpo.jpg","bmqs_wangxu.jpg","bmqs_licunxu.jpg","bmqs_shangyang.jpg","bmqs_lisi.jpg","bmqs_linxiangru.jpg","bmqs_zhangyi.jpg","bmqs_niezheng.jpg","bmqs_baozheng.jpg","bmqs_baiqi_jiu.jpg","bmqs_yingzheng.jpg","bmqs_baiqi.jpg","bmqs_quyuan.jpg"],"card":[],"skill":[]}}})