game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"三国无双",content:function (config,pack){
    if(!lib.qhlypkg)
    {
        lib.qhlypkg = [];
    }
    lib.qhlypkg.push({
    isExt:true,
    filterCharacter:function(name){
    return name.indexOf('sgws_') == 0;
    },
    prefix:'extension/三国无双/', 
    skin:{
    standard:'extension/三国无双/skin/standard/',
    },
	audioOrigin:'extension/三国无双/',
	audio:'extension/三国无双/skin/audio/',
    });
},precontent:function (){
    
},help:{},config:{},package:{
    character:{
        character:{
            "sgws_baihu":["male","shen",8,["sgws_shenyi","snjs_boss_tianshubaihuhuwei","snjs_boss_tianshubaihukuangxiao"]],
            "sgws_zhangliao":["male","wei",6,["sgws_jiaoxie","GXS_liangjiang","sgws_tuxi","jszldr","sgws_zhiti","sgws_weifeng","sgws_mubing","sgws_ziqu","exzlck","exjixie","jszlxt","hj_jl_nizhan","lyzxiasha","lyzweizhen","lyzshepo","lyzliaolai"]],
            "sgws_baiqi":["male","wei",10,["sgws_wuan","snjs_boss_tianshubaiqishashen","snjs_boss_tianshubaiqichangsheng","GXS_jianmie","GXS_zhuiji","bilibili_fachu","bmqs_mingfa","hx_cuidi","XS_youmie","XS_zhanshen"]],
            "sgws_baiwuchang":["male","shen",9,["snjs_boss_zhuoguibwcbl","snjs_boss_zhuoguibwcqz","boss_baolian","snjs_boss_zhuoguibwcmz","snjs_boss_zhuoguigm","boss_zuijiu","sgws_juece","snjs_boss_zhuoguihwcxx","snjs_boss_zhuoguihwctp"]],
            "sgws_baosanniang":["female","shu",6,["sgws_meiyong","gyzfws","sgws_dangxian","sgws_wuniang","sgws_zhennan","zhilian3d8","jijian3d8","jlsg_jianwu"]],
            "sgws_baosi":["female","shu",5,["sgws_fenghuo","exssxjy"]],
            "sgws_baozheng":["male","wu",15,["GXS_pingyuan","GXS_shenduan","boss_tiemian","boss_zhadao","snjs_boss_zhuoguitm","snjs_boss_zhuoguiylwdf","snjs_boss_zhuoguiylwxp","snjs_boss_zhuoguiylwdw","snjs_boss_zhuoguiylwxp2","snjs_boss_zhuoguigm"]],
            "sgws_chenqian":["male","jin",5,["sgws_zuoming","alcqzm","sgws_wangzhong1"]],
            "sgws_guanyu":["male","shu",6,["exgyyj","sgws_mashu","sgws_nuzhan","boss_xiaorui","boss_huchen","sgws_wuhun","jsgysm","jsgyzh","exwuhu","sgws_wushen","sgws_zhongyi","sgws_zhanjiang","sgws_qijun","GXS_wusheng","GXS_budao","lyzhongzheng","jlsg_wenjiu","gyzfws","yunyijue"]],
            "sgws_baoxin":["male","wei",5,["sgws_gangyi"]],
            "sgws_agang":["male","qun",5,["sgws_yixiong"]],
            "sgws_caopi":["male","wei",6,["songwei","圣_xingshang","exliufang","exccjx","sgws_tianxing","exweiwei","exjuejue"],["zhu"]],
            "sgws_caocao":["male","wei",12,["hujia","exccjx","sgws_guixin","圣_feiying","lyzbabei","exccxc","reguicai","nsgefa","nshaoling","nsjianxiong","nsxionglue","exhuibian","jlsg_zhishi","jlsg_zhaoxiang","jlsg_feiying","sgws_xiongcai","sgws_guixin1","yunxiongcai",'zhulu','xieling',"lh_bahan","lh_weiye","lh_jianlv",'sgws_xiandao','sgws_sancai','yjyibing'],["zhu"]],
            "sgws_hejin":["male","qun",20,["snjs_boss_qihuanhjzm","snjs_boss_qihuanhjgl","snjs_boss_qihuanhjwx","snjs_boss_qihuanhjqb","sgws_huoshi","jlsg_zhuanshan","lh_junquan"]],
            "sgws_dianwei":["male","wei",5,["sgws_qiangxi","sdwlk","exdwpn","exsuji","jlsg_zhiji","sgyj_sidou","sgyj_ezhan"]],
            "sgws_liuxie":["male","qun",4,["sgws_huangen","sphantong","sgws_tianming","mizhao","sgws_anzhao"]],
            "sgws_liubei":["male","shu",8,["exlbrd","jijiang","sgws_zhaolie","sgws_xiaoxiong","boss_zhangwu","boss_jizhen","splbyw","splbxl","jslbln","jslblw","exlbrw","exqiuxian","GXS_dyrende","hj_jl_junwang","hj_jl_longnu","yunjieyi","yunzhaolie"],["zhu"]],
            "sgws_liufeng":["male","shu",5,["sgws_xiansi"]],
            "sgws_liubiao":["male","qun",5,["sgws_zishou","sgws_zongshi","exshouchengb","lh_liubiao_rujing","lh_hushi","lh_wujue"]],
            "sgws_huatuo":["male","qun",6,["sgws_jijiu","sgws_qingnang","sgws_chulao","lyzwuqin","hj_jl_jishi","jlsg_guagu","hj_jl_xuanxin","boss_shengshou","wuqin","jlsg_wuqin"]],
            "sgws_beimihu":["female","qun",6,["sgws_zongkui","sgws_guju","sgws_canshi","sgws_bingzhao","exyunhun"],["zhu"]],
            "sgws_simayi":["male","jin",5,["reguicai","sgws_fankui","exsqzh","exliufang","sgws_jizhi","rewansha","lianpo","sgws_buchen","sgws_yingshi","xiongzhi","sgws_quanbian","lyzyinfeng","lyztaohui","lyzchouyi","lyztianqian","lyzdikun","lyzguiyuan","exsmyqm","hj_jl_jilve","boss_xuanlei","yunlanggu","sgws_konghun","jlsgsy_biantian"],["hiddenSkill"]],
            "sgws_simazhao":["male","jin",4,["spzhaoxin","sgws_langgu","sgws_tuishi","sgws_choufa","sgws_zhaoran","chengwu","sgws_daigong","sgws_zhaoxin","nsxiuxin","nsshijun","jlsg_zhaoxin","jlsg_zhihe"],["hiddenSkill","zhu"]],
            "sgws_lvbu":["male","qun",24,["exlbws","sgws_liyu","sgws_wuqian","sgws_shenfen","GXS_dywushuang","GXS_shenji","GXS_wushuang","pimi3d8","sgws_mashu","sgws_jingjia","boss_aozhan","shenwei","snjs_boss_hulaosj","shenqu","sgws_jiwu","snjs_boss_hulaozj","snjs_boss_hulaozk","snjs_boss_hulaolbyw","snjs_boss_hulaoshenjian","snjs_boss_hulaoliechu","snjs_boss_hulaofumo","snjs_boss_hulaojingang","jlsg_sheji","yunjiwue"]],
            "sgws_lvmeng":["male","wu",5,["exkeji","exshelie","sgws_botu","jslmgx","exzyyz","sgws_qianxun","sgws_jiang","sgws_tanhu","nsqinxue","jlsg_shixue","yunshelve","jlsg_guoshi"]],
            "sgws_wuguotai":["female","wu",5,["sgws_ganlu","sgws_buyi","exyanjia","exzexu"]],
            "sgws_zhoutai":["male","wu",5,["sgws_buqu","sgws_fenji","szthq"]],
            "sgws_zhouyu":["male","wu",6,["exzyyz","sgws_fanjian","sgws_qinyin","sgws_yeyan","lyzxinlve","lyzyanjie","lyzningxian","lyzjueyin","qugu3d8","liejiang3d8","jszyhl","exfengshi","boss_xianyin","sgws_honglian","hx_shilie","jlsg_choulve","GXS_liance","GXS_nishi"]],
            "sgws_daqiao":["female","wu",5,["sgws_liuli","sgws_yanxiao","sgws_anxian","sgws_tianxiang","sgws_xingwu","lyzyurong","lyzfuhua","buluo3d8","exjiarendaqiao","jlsg_xiyu","jlsg_wanrou"]],
            "sgws_jiangwei":["male","shu",5,["sgws_tiaoxin","exzglgx","sgws_kunfen","exqilin","exfuqing","exbeishui","lh_guzhi","lh_jufa","lh_kefu","yunjuezhen","yunjueji"]],
            "sgws_kongrong":["male","qun",4,["sgws_lirang","sgws_mingshi","exmingshi","jlsg_lirang"]],
            "sgws_sunliang":["male","wu",4,["sgws_kuizhu","sgws_zhizheng","nzry_lijun","diedang3d8","anliu3d8","exzhiyun","exkuizhu"],["zhu"]],
            "sgws_sunshangxiang":["female","wu",6,["sssxjw","exssxjy","jlsg_xianzhu","sssxyj","sssxxj","exjianxin","jlsg_xiwu","jlsg_yinmeng","jlsg_liangyuan","sssxjx"]],
            "sgws_sunquan":["male","wu",5,["exsqzh","jiuyuan","rejiuyuan","GXS_beixi","GXS_zhiheng","jusqty","jusqcx","exshehu","jlsg_xionglve","jlsg_quanheng",'sgws_quantui','sgws_dingli'],["zhu"]],
            "sgws_sunce":["male","wu",7,["exzyyz","olzhiba","sgws_yinghun","sgws_yingba","sgws_fuhai","sgws_pinghe","sscwl","ssctn","sscyg","exzhiba","exxionghun","hj_bm_bawang","hj_bm_zhiba","hj_bm_yingyang","lh_kehan","lh_zhanlie","yunyingyang"],["zhu"]],
            "sgws_sunluyu":["female","wu",5,["sgws_meibu","sgws_mumu","jlsg_huilian","jlsg_wenliang"]],
            "sgws_xiaoqiao":["female","wu",5,["sgws_tianxiang","sgws_xingwu","sgws_liuli","sgws_hongyan","sgws_piaoling","GXS_tianxiang","GXS_guose","GXS_chujia","GXS_zhijie","lyzfangze","exbanjun","exjiarenxiaoqiao"]],
            "sgws_cenhun":["male","wu",4,["sgws_jishe"]],
            "sgws_zuoci":["male","qun",4,["huanhua","lyzchuiweng","sgws_huashen","sgws_xinsheng","nsxinsheng","nsdunxing","exxuandao","hj_bm_dunshu"]],
            "sgws_pangtong":["male","shu",5,["sgws_lianhuan","sgws_niepan","sgws_guolun","sgws_zhanji","exyuhuopt","boss_yuhuojg","boss_qiwu","boss_tianyujg","shenwei","zhuyu","qiwu","sgws_youlong","sgws_luanfeng","yunxiance","ruliao3d8","xingdie3d8"]],
            "sgws_zhangzhang":["male","wu",4,["guzheng","exzhijian","exzhongwang","zhjl"]],
            "sgws_zhangji":["male","qun",5,["sgws_lulve","sgws_lveming","sgws_tunjun","snjs_boss_hulaojl","snjs_boss_hulaomj","exjielue"]],
            "sgws_zhangjiao":["male","qun",4,["sgws_leiji","sgws_guidao","huangtian","lyzluanshi","exxiaofeng","exchuixi","hj_jl_leihun","jidian","jlsgsy_bujiao","jlsgsy_taiping","jlsgsy_yaohuo","jlsgsy_sanzhi"],["zhu"]],
            "sgws_zhangfei":["male","shu",5,["sgws_paoxiao","sgws_tishen","sgws_liyong","sgws_jie","sgws_dahe","lyzfengxuan","lyztiansha","szfzh","szfyb","szffq","exzfts","exwuhu","jlsg_paoxiao","jlsg_shayi","yunwanjun","yunyongzhi","GXS_shenyong","GXS_podi","lh_zuizhan","lh_nuyan"]],
            "sgws_xizhicai":["male","wei",4,["xianfu","tiandu","sgws_chouce","jlsg_tiance"]],
            "sgws_yanwen":["male","qun",5,["reshuangxiong","wcjm","sgws_jianchu","nsguanyong","exhanmang","exduyong","ylyj","excuxia","jlsg_hubu"]],
            "sgws_wenyang":["male","wei",6,["sgws_lvli","sgws_qingjiao","sgws_quedi","sgws_zhuifeng","sgws_chongjian","sgws_choujue","lvli","extuilangall","hj_bm_cuifeng"]],
            "sgws_caozhi":["male","wei",4,["sgws_luoying","sgws_jiushi","exxinqiai"]],
            "sgws_huaxiong":["male","qun",7,["sgws_yaowu","lh_xizhai","lh_zulian","snjs_boss_hulaomq","snjs_boss_hulaomj","exmojiang","jlsg_fenwei"]],
            "sgws_xusheng":["male","wu",5,["sgws_pojun","sgws_pojun4","hj_bm_tiebi","hj_bm_yicheng"]],
            "sgws_caochun":["male","wei",5,["sgws_shanjia","exshanjia"]],
            "sgws_12F":["male","qun",4,["sgws_shanbi","sgws_jianshe"]],
            "sgws_zhugeliang":["male","shu",5,["exzglgx","sgws_huoji","sgws_bazhen","sgws_youlong","sgws_luanfeng","jlsg_weiwo","lyzwendao","lyzkuitian","lyzdouzhuan","lyzxingsuo","nangce3d8","ruliao3d8","jlsg_sanfen","yunsouji","yunbazhen","GXS_dongcha","exzhijue","exjingcui","hx_nangce","hx_ruliao","cangzhuo","fengqi","gaiming","boss_biantian"]],
            "sgws_bulianshi":["female","wu",5,["sgws_anxu","lyzxinlan","lyzyanzun","exyueheng"]],
            "sgws_wangji":["male","wei",4,["sgws_qizhi","sgws_jinqu","yunchizhong"]],
            "sgws_wanglang":["male","wei",4,["sgws_gushe","sgws_jici","hj_bm_yongwei","exraoshe"]],
            "sgws_wangcan":["male","wei",4,["sgws_qiai","sgws_shanxi","sgws_qiai2","sgws_sanwen","sgws_denglou","exzhoushitrue"]],
            "sgws_miheng":["male","qun",4,["hj_bm_kuangcai","hj_bm_shejian","exjigu","jlsg_shejian"]],
            "sgws_gexuan":["male","qun",4,["sgws_danfa","sgws_lingbao","twsidao","sgws_lianhua","zhafu","exliandan"]],
            "sgws_dongzhuo":["male","qun",20,["sgws_jiuchi","sgws_roulin","olbaonue","sgws_hengzheng","sgws_qiangzheng","boss_baolin","lh_jiangong","jlsgsy_lingnue"],['zhu']],
            "sgws_caiwenji":["female","wei",5,["sgws_beige","sgws_chenqing","hj_jl_moshi","lyzchengxin","lyzfuqing","boss_hujia","tinqin","boss_huixin"]],
            "sgws_xuzhu":["male","wei",5,["sgws_luoyi","jlsg_aozhan","hj_jl_huchi","sxchc","sxchh","exxcxc"]],
            "sgws_zhugeke":["male","wu",4,["sgws_aocai","sgws_duwu","exshicai"]],
            "sgws_jiakui":["male","wei",5,["sgws_zhongzuo","sgws_wanlan","sgws_tongqu","xinwanlan"]],
            "sgws_zhaoyun":["male","shu",5,["ollongdan","lyzhunyou","sgws_chongzhen","chixin","sgws_yicong","sgws_juejing","sgws_longhun","lyzcuizhen","lyzchengyu","jlsg_jiuzhu","jlsg_tuwei","jszysq","exwuhu","yunlonglie","GXS_guyong","GXS_huzhu","GXS_dytujin","GXS_dylongdan","boss_fengjian","boss_keding"]],
            "sgws_zhaoxiang":["female","shu",6,["sgws_fanghun","sgws_fuhan","twqueshi"]],
            "sgws_dengai":["male","wei",5,["sgws_tuntian","jixi"]],
            "sgws_xingdaorong":["male","qun",7,["sgws_xuxie","exkuakou"]],
            "sgws_guojia":["male","wei",4,["sgws_yiji","sgws_huishi","sgws_tianyi","sgws_huishi2","hj_yj_shisheng","hj_jl_tianji","hj_jl_tianqi","hj_xd_guimou2","hj_xd_qizuo","lyzchouji","lyzmingfu","jlsg_huiqu","yunguimou","yunyice","exjinnang","exyunying","sgws_guimou"]],
            "sgws_zhonghui":["male","wei",5,["sgws_quanji","sgws_paiyi","hj_bm_quanji","hj_bm_yexin","hj_bm_paiyi","hj_yj_paiyi","zzhenggong"]],
            "sgws_madai":["male","shu",5,["sgws_mashu","sgws_qianxi","exmdqx","exjianfu"]],
            "sgws_mazhong":["male","shu",5,["sgws_fuman"]],
            "sgws_machao":["male","shu",5,["sgws_shichou","lyztianwei","lyzxiaohun","rongfeng3d8","smctw","smcwf","smczm","smcsj","exmctj","exwuhu","extieji"]],
            "sgws_gaoshun":["male","qun",6,["sgws_xianzhen","sgws_jinjiu","sgws_mashu","snjs_boss_hulaosz","exxianzhen","exzhanluan"]],
            "sgws_lusu":["male","wu",4,["sgws_haoshi","sgws_dimeng","hj_bm_dewang","hj_bm_dimeng","splslm","splstx","exdimenga"]],
            "sgws_huangzhong":["male","shu",5,["sgws_liegong","hj_bm_pozhen","exhzlg","exwuhu","exzhuangmu"]],
            "sgws_baifeng":["male","wu",5,["sgws_liuhuan","sgws_juniao","sgws_yuren"]],
            "sgws_baitu":["male","wei",5,["sgws_quyanfushi"]],
            "sgws_bandashi":["male","shu",5,["sgws_jiguan","sgws_muniao"]],
            "sgws_canglangwang":["male","wu",4,["sgws_yehou","sgws_langqun"]],
            "sgws_chilian":["female","wu",5,["sgws_shedu","sgws_huomeishu","sgws_yushe","sgws_chilian1","sgws_hanqing","sgws_lianhua1"]],
            "sgws_chunangong":["male","qun",4,["sgws_haoyan","sgws_nance"]],
            "sgws_daozhi":["male","shu",5,["MYshenxingbu","sgws_daosheng","sgws_dianguang"]],
            "sgws_dasiming":["female","qun",5,["sgws_liuhunzhou","sgws_xueshou"]],
            "sgws_datiechui":["male","shu",5,["sgws_leishenchui"]],
            "sgws_dianqing":["male","qun",5,["MYtongtoutiebi"]],
            "sgws_donghuangtaiyi":["male","qun",5,["sgws_dadao"]],
            "sgws_duannurong":["female","shu",5,["sgws_yinzhen","sgws_yixian"]],
            "sgws_fanzeng":["male","wu",5,["XS_qudou","XS_laomou","MYyushi","MYquanyan"]],
            "sgws_funian":["male","wu",5,["MYtaie","MYzhangmen","MYyueshu"]],
            "sgws_fusu":["male","wei",5,["MYzhushu","MYzhaoci","MYsisheng","XS_renhou"]],
            "sgws_gaojianli":["male","shu",5,["MYbingdun","MYyishuihan","sgws_zhuge"]],
            "sgws_gaoyue":["female","shu",5,["sgws_conghui","sgws_yinlu","sgws_tianfu","sgws_juenian"]],
            "sgws_genie":["male","wei",5,["sgws_liegong","sgws_jiansheng"]],
            "sgws_gongshuchou":["male","wei",5,["MYbadao","MYzhugong","sgws_zuzhuang"]],
            "sgws_gongsunlinglong":["female","wei",4,["sgws_mianju","sgws_yanbian"]],
            "sgws_guiguzi":["male","qun",5,["baihe","yinyang","xiushen","GXS_zongheng","GXS_yinju","MYzongheng","MYbaihe","XS_zongheng","XS_baihe","XS_xiushen"]],
            "sgws_guyao":["male","shu",5,["sgws_ganchangcunduan"]],
            "sgws_hanxin":["male","shu",6,["XS_yangtui","XS_jufu","XS_dianbing","XS_andu","GXS_bingxian","GXS_gongxin","MYzhanshen","MYbingxian","hx_qianfa","hx_nizhen","hx_juezhen"]],
            "sgws_heiqilin":["male","wu",4,["MYyirong"]],
            "sgws_huaying":["female","shu",5,["sgws_zuishengmengsi","sgws_huakuihuaying"]],
            "sgws_huhai":["male","wei",4,["sgws_dulongewu","sgws_yijisetong"]],
            "sgws_huji":["female","qun",6,["sgws_xiangyuchushe","sgws_yanwuluoyi"]],
            "sgws_jibu":["male","wu",5,["XS_buqu","XS_shounuo","MYyinuoqianjin","MYhuajianyinhu"]],
            "sgws_jingke":["male","shu",5,["XS_xiantu","XS_juebi","nspinmin","GXS_juesha","GXS_cike","MYyiyong","MYcisha"]],
            "sgws_jingtianming":["male","shu",6,["MYkaoji","sgws_liegong","MYxiaguhaoqing","MYmokongzhenqi","sgws_yejintianming","MYxiayi","MYmomei","MYfeigong"]],
            "sgws_wuguang":["male","qun",5,["MYpaishajianjin","MYzitonghanchan","XS_yongwang","XS_juji"]],
            "sgws_jueying":["male","qun",5,["sgws_juesha"]],
            "sgws_keliang":["male","qun",5,["sgws_xiyuxiongshi","sgws_qishizhuiji"]],
            "sgws_kuangxiu":["male","qun",5,["sgws_zhiyin","sgws_qinxian"]],
            "sgws_lianyi":["female","wu",5,["sgws_yunwenlianyi","sgws_huarongyuemao"]],
            "sgws_lisi":["male","wei",5,["XS_jianzhu","XS_fenshu","MYjiedang","MYhuzhi"]],
            "sgws_liubang":["male","shu",5,["MYzhirenshanyong","MYnuzhanbaishe","XS_duoqi","XS_tuotu","XS_weijia","XS_jianyi","exsqzh","hx_xiongyu"]],
            "sgws_liujiannu":["male","wei",5,["MYzhengang","MYduanshui","MYluanshen","MYwangliang","MYmiehun","MYzhuanpo"]],
            "sgws_longju":["male","wu",5,["MYshisi","MYmashu","XS_mengjin","XS_zhuiji"]],
            "sgws_meisanniang":["female","wu",5,["MYgangjintiegu","sgws_gouhunliandao"]],
            "sgws_mengtian":["male","wei",5,["MYdiesha","MYshuangsha","GXS_zhengzhao","GXS_haoling"]],
            "sgws_weizhuang":["male","wei",5,["MYliusha","TXhengguan","MYdiankuang"]],
            "sgws_nuomin":["female","shu",6,["sgws_yuelangzhiyi"]],
            "sgws_paoding":["male","shu",5,["MYjieniu","sgws_daofa"]],
            "sgws_qingniancike":["male","wei",5,["sgws_xizuo"]],
            "sgws_shaosiming":["female","qun",5,["MYwuyan","sgws_guiye"]],
            "sgws_xiangyu":["male","wu",7,["MYpojia","MYwanrendi","ciqiu","MYsimianchuge","MYpofuchenzhou","MYbawangbieji","XS_bawang","XS_pofu","GXS_hongmen","GXS_guixiong","GXS_hunpofu","hx_juechen","hx_zhongchi","MYchongfeng","XS_shenwei"]],
            "sgws_chensheng":["male","qun",5,["MYjuque","XS_shouyi","XS_liaoyuan","GXS_qiyi"]],
            "sgws_xiaoyaozi":["male","qun",5,["MYrenzong","MYtiandao","MYxiaoyaoyou","MYxuehouchuqing"]],
            "sgws_yanlu":["male","wei",5,["MYzhishu","MYhanguang","sgws_xunlu"]],
            "sgws_yuji":["female","wu",5,["sgws_sheshen","sgws_wujian","sgws_changnian2","sgws_xiaosheng","sgws_huadie","sgws_meiwu","sgws_anfu"]],
            "sgws_situwanli":["male","wei",5,["sgws_haodukongju","sgws_jiuzhuanduanhun"]],
            "sgws_tianci":["male","shu",5,["sgws_ganjiangmoye","sgws_chunxiaqiudong"]],
            "sgws_tianhu":["male","qun",5,["sgws_hupojianfa","sgws_kuanglieaogu"]],
            "sgws_tianmi":["female","wu",5,["sgws_wulikanhua","sgws_wumeiyaorao","sgws_hongyan","sgws_lijian"]],
            "sgws_tianyan":["female","wei",5,["sgws_chayanguanse","sgws_jingyitishen"]],
            "sgws_tianzhong":["male","qun",5,["sgws_chunhanduanzhang","sgws_quyifengying"]],
            "sgws_touman":["male","qun",5,["sgws_nanmandanyu","sgws_ezhanwuju"]],
            "sgws_wangjian":["male","wei",5,["XS_poguo","XS_suoci","MYzhangong"]],
            "sgws_wangli":["male","wei",5,["sgws_baizhanchuanjia","sgws_wuwangbuli"]],
            "sgws_wushuanggui":["male","wu",4,["sgws_roujia","sgws_xiongbao"]],
            "sgws_xiangliang":["male","wu",5,["sgws_xiaoyong","sgws_shanzhan"]],
            "sgws_xiaomeng":["female","wei",5,["MYtianzong","sgws_xuandao","sgws_zhishui"]],
            "sgws_xinghun":["male","qun",4,["MYquhun","sgws_juqi","sgws_qiren"]],
            "sgws_moya":["male","qun",4,["TXyingyi","TXhuanmo","MYwuren","MYshangti"]],
            "sgws_xuenv":["female","shu",5,["MYlingbo","sgws_feiyan","sgws_baixue"]],
            "sgws_xufuzi":["male","shu",5,["sgws_zhujian","sgws_zengqi"]],
            "sgws_xunzi":["male","shu",5,["MYjunzhou","MYminshui","XS_tianlun","XS_xinge"]],
            "sgws_yanchunjun":["male","wu",7,["sgws_quanheng"]],
            "sgws_yandan":["male","shu",5,["MYjituo","MYchuanren","MYxiwu","MYyungong"]],
            "sgws_yanfei":["female","qun",5,["MYdongjun","sgws_jinwu","sgws_fenyan"]],
            "sgws_yanu":["male","shu",5,["sgws_yakouwuyan","sgws_duanbingchuqiao"]],
            "sgws_yanyi":["male","wu",5,["sgws_zhangshi","sgws_xinqiren"]],
            "sgws_yinfu":["male","wu",5,["sgws_shitong","sgws_fuxieshu"]],
            "sgws_yingbu":["male","wu",6,["XS_xingkun","XS_liyongyb","MYleibaojuntuan","MYshamieshuangfu"]],
            "sgws_yingzheng":["male","wei",6,["XS_xiaofeng","XS_tongwen","XS_bingtun","XS_hengzhen","batu","sgws_yitong","yingzheng_shihuang","sgws_zulong","sgws_fenshu","GXS_jiquan","MYjiquan"]],
            "sgws_yueshen":["female","qun",6,["sgws_yuzhi","sgws_zhouyin"]],
            "sgws_yunzhongjun":["male","qun",5,["sgws_qishu","MYxiandan"]],
            "sgws_zhanghan":["male","wei",5,["sgws_jiansuo","sgws_yingwei"]],
            "sgws_zhangliang":["male","shu",5,["XS_mousheng","XS_dushan","TXlingxu","TXyukong","GXS_mouci","GXS_xuzhi","MYliangji","MYruya","MYyouce","hx_choushi","hx_zhiyin"]],
            "sgws_zhaogao":["male","wei",4,["XS_zhilu","XS_gaizhao",'zhaogao_zhilu','sgws_gaizhao','sgws_haizhong','zhaogao_aili',"MYnongquan","MYluowang","MYliujiannu"]],
            "sgws_zhonglimei":["male","wu",5,["sgws_zhuifenghujian","sgws_qijirufeng"]],
            "sgws_zhujia":["male","qun",5,["sgws_xinuaile"]],
            "sgws_zimu":["male","wu",5,["MYshabi"]],
            "sgws_hanfei":["male","wei",5,["XS_falun","XS_gufen","TXnilin","TXlvzhi"]],
            "sgws_jiwuye":["male","wei",5,["sgws_junquan"]],
            "sgws_nongyu":["female","wu",5,["sgws_kongshan","sgws_niaoyu"]],
            "sgws_yanlingji":["female","shu",6,["TXyanhuo","sgws_liwu"]],
            "sgws_zinv":["female","wu",5,["sgws_rouqing","sgws_lengyan"]],
            "sgws_aak":["male","qun",4,["sgws_yaoji","sgws_kunfen","sgws_duyi"]],
            "sgws_abeiduo":["male","wu",5,["nizao","yun_chuangsheng","yusheng_chuangsheng","yusheng_yanghua","dc_chuangsheng"]],
            "sgws_aijiyanhou":["female","qun",5,['sgws_seyou','sgws_sheshi']],
            "sgws_amiya":["female","shu",6,["sgws_benye","sgws_jueyingamiya","sgws_gonggan","sgws_kongxin","sgws_shubao"]],
            "sgws_anlushan":["male","wei",9,["sgws_chixiao","sgws_hanni"]],
            "sgws_ansel":["male","wei",4,["ark_yaoli"]],
            "sgws_ansel":["male","wei",4,["ark_xiannan","ark_tiexian"]],
        },
        translate:{
            "sgws_baihu":"白虎",
            "sgws_zhangliao":"张辽",
            "sgws_baiqi":"白起",
            "sgws_baiwuchang":"白无常",
            "sgws_baosanniang":"鲍三娘",
            "sgws_baosi":"褒姒",
            "sgws_baozheng":"包拯",
            "sgws_chenqian":"陈骞",
            "sgws_guanyu":"关羽",
            "sgws_baoxin":"鲍信",
            "sgws_agang":"阿纲",
            "sgws_caopi":"曹丕",
            "sgws_caocao":"曹操",
            "sgws_hejin":"何进",
            "sgws_dianwei":"典韦",
            "sgws_liuxie":"刘协",
            "sgws_liubei":"刘备",
            "sgws_liufeng":"刘封",
            "sgws_liubiao":"刘表",
            "sgws_huatuo":"华佗",
            "sgws_beimihu":"卑弥呼",
            "sgws_simayi":"司马懿",
            "sgws_simazhao":"司马昭",
            "sgws_lvbu":"吕布",
            "sgws_lvmeng":"吕蒙",
            "sgws_wuguotai":"吴国太",
            "sgws_zhoutai":"周泰",
            "sgws_zhouyu":"周瑜",
            "sgws_daqiao":"大乔",
            "sgws_jiangwei":"姜维",
            "sgws_kongrong":"孔融",
            "sgws_sunliang":"孙亮",
            "sgws_sunshangxiang":"孙尚香",
            "sgws_sunquan":"孙权",
            "sgws_sunce":"孙策",
            "sgws_sunluyu":"孙鲁育",
            "sgws_xiaoqiao":"小乔",
            "sgws_cenhun":"岑昏",
            "sgws_zuoci":"左慈",
            "sgws_pangtong":"庞统",
            "sgws_zhangzhang":"张昭张纮",
            "sgws_zhangji":"张济",
            "sgws_zhangjiao":"张角",
            "sgws_zhangfei":"张飞",
            "sgws_xizhicai":"戏志才",
            "sgws_yanwen":"颜良文丑",
            "sgws_wenyang":"文鸯",
            "sgws_caozhi":"曹植",
            "sgws_huaxiong":"华雄",
            "sgws_xusheng":"徐盛",
            "sgws_caochun":"曹纯",
            "sgws_12F":"12F",
            "sgws_zhugeliang":"诸葛亮",
            "sgws_bulianshi":"步练师",
            "sgws_wangji":"王基",
            "sgws_wanglang":"王朗",
            "sgws_wangcan":"王粲",
            "sgws_miheng":"祢衡",
            "sgws_gexuan":"葛玄",
            "sgws_dongzhuo":"董卓",
            "sgws_caiwenji":"蔡文姬",
            "sgws_xuzhu":"许褚",
            "sgws_zhugeke":"诸葛恪",
            "sgws_jiakui":"贾逵",
            "sgws_zhaoyun":"赵云",
            "sgws_zhaoxiang":"赵襄",
            "sgws_dengai":"邓艾",
            "sgws_xingdaorong":"邢道荣",
            "sgws_guojia":"郭嘉",
            "sgws_zhonghui":"钟会",
            "sgws_madai":"马岱",
            "sgws_mazhong":"马忠",
            "sgws_machao":"马超",
            "sgws_gaoshun":"高顺",
            "sgws_lusu":"鲁肃",
            "sgws_huangzhong":"黄忠",
            "sgws_baifeng":"白凤",
            "sgws_baitu":"白屠",
            "sgws_bandashi":"班大师",
            "sgws_canglangwang":"苍狼王",
            "sgws_chilian":"赤练",
            "sgws_chunangong":"楚南公",
            "sgws_daozhi":"盗跖",
            "sgws_dasiming":"大司命",
            "sgws_datiechui":"大铁锤",
            "sgws_dianqing":"典庆",
            "sgws_donghuangtaiyi":"东皇太一",
            "sgws_duannurong":"端木蓉",
            "sgws_fanzeng":"范增",
            "sgws_funian":"伏念",
            "sgws_fusu":"扶苏",
            "sgws_gaojianli":"高渐离",
            "sgws_gaoyue":"高月",
            "sgws_genie":"盖聂",
            "sgws_gongshuchou":"公输仇",
            "sgws_gongsunlinglong":"公孙玲珑",
            "sgws_guiguzi":"鬼谷子",
            "sgws_guyao":"骨妖",
            "sgws_hanxin":"韩信",
            "sgws_heiqilin":"黑麒麟",
            "sgws_huaying":"花影",
            "sgws_huhai":"胡亥",
            "sgws_huji":"胡姬",
            "sgws_jibu":"季布",
            "sgws_jingke":"荆轲",
            "sgws_jingtianming":"荆天明",
            "sgws_wuguang":"吴广",
            "sgws_jueying":"绝影",
            "sgws_keliang":"克里昂",
            "sgws_kuangxiu":"旷修",
            "sgws_lianyi":"涟衣",
            "sgws_lisi":"李斯",
            "sgws_liubang":"刘邦",
            "sgws_liujiannu":"六剑奴",
            "sgws_longju":"龙且",
            "sgws_meisanniang":"梅三娘",
            "sgws_mengtian":"蒙恬",
            "sgws_weizhuang":"卫庄",
            "sgws_nuomin":"诺敏",
            "sgws_paoding":"庖丁",
            "sgws_qingniancike":"青年刺客",
            "sgws_shaosiming":"少司命",
            "sgws_xiangyu":"项羽",
            "sgws_chensheng":"陈胜",
            "sgws_xiaoyaozi":"逍遥子",
            "sgws_yanlu":"颜路",
            "sgws_yuji":"虞姬",
            "sgws_situwanli":"司徒万里",
            "sgws_tianci":"田赐",
            "sgws_tianhu":"田虎",
            "sgws_tianmi":"田蜜",
            "sgws_tianyan":"田言",
            "sgws_tianzhong":"田仲",
            "sgws_touman":"头曼",
            "sgws_wangjian":"王翦",
            "sgws_wangli":"王离",
            "sgws_wushuanggui":"无双鬼",
            "sgws_xiangliang":"项梁",
            "sgws_xiaomeng":"晓梦",
            "sgws_xinghun":"星魂",
            "sgws_moya":"墨鸦",
            "sgws_xuenv":"雪女",
            "sgws_xufuzi":"徐夫子",
            "sgws_xunzi":"荀子",
            "sgws_yanchunjun":"雁春君",
            "sgws_yandan":"燕丹",
            "sgws_yanfei":"焱妃",
            "sgws_yanu":"哑奴",
            "sgws_yanyi":"晏懿",
            "sgws_yinfu":"隐蝠",
            "sgws_yingbu":"英布",
            "sgws_yingzheng":"嬴政",
            "sgws_yueshen":"月神",
            "sgws_yunzhongjun":"云中君",
            "sgws_zhanghan":"章邯",
            "sgws_zhangliang":"张良",
            "sgws_zhaogao":"赵高",
            "sgws_zhonglimei":"钟离昧",
            "sgws_zhujia":"朱家",
            "sgws_zimu":"子慕",
            "sgws_hanfei":"韩非",
            "sgws_jiwuye":"姬无夜",
            "sgws_nongyu":"弄玉",
            "sgws_yanlingji":"焰灵姬",
            "sgws_zinv":"紫女",
            "sgws_aak":"阿",
            "sgws_abeiduo":"阿贝多",
            "sgws_aijiyanhou":"埃及艳后",
            "sgws_amiya":"阿米娅",
            "sgws_anlushan":"安禄山",
            "sgws_ansel":"安塞尔",
        },
    },
    card:{
        card:{
            "sgws_gubuzifeng":{
                type:"trick",
                enable:true,
                fullskin:true,
                filterTarget:function (card,player,target){
                    return target!=player;
                },
                content:function (){
                    target.addTempSkill('gubuzifeng_disable',{player:'phaseAfter'});
                    var skills=target.getSkills(null,false);
                    for(var i=0;i<skills.length;i++){
                        if(get.info(skills[i]).charlotte) skills.splice(i--,1);
                    }
                    if(skills.length){
                        target.storage.gubuzifeng_disable.push(skills.randomGet());
                        target.disableSkill('gubuzifeng_disable',target.storage.gubuzifeng_disable);
                    }
                },
                ai:{
                    order:12,
                    result:{
                        target:function (player,target){
                            return -2;
                        },
                    },
                },
            },
            "sgws_honghuangzhili":{
                type:"trick",
                enable:true,
                fullskin:true,
                filterTarget:true,
                content:function (){
                        target.turnOver();
                },
                ai:{
                    order:4,
                    value:10,
                    result:{
                        target:function (player,target){
                                if(target.isTurnedOver()) return 4;
                                return -3;
                        },
                    },
                },
            },
            "sgws_sadouchengbing":{
                fullskin:true,
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
                    var num=target.maxHp;
                        var nh=target.countCards('h');
                        if(nh<num){
                            target.draw(num-nh);
                        }
                },
                ai:{
                    basic:{
                        order:7.2,
                        useful:4.5,
                        value:9.2,
                    },
                    result:{
                        target:function (player,target){
                            var num=target.maxHp;
                                var nh=target.countCards('h');
                                if(target==player&&player.countCards('h','sgws_sadouchengbing')){
                                    nh--;
                                }
                                if(nh<num){
                                    return Math.sqrt(num-nh);
                                }
                            return 0;
                        },
                    },
                    tag:{
                        draw:2,
                    },
                },
            },
            "sgws_yihuajiemu":{
                type:"trick",
                fullskin:true,
                enable:true,
                filterTarget:function (card,player,target){
                    return target!=player&&target.countCards('he');
                },
                content:function (){
                    'step 0'
                    if(target.hasSha()){
                        target.chooseToUse(function(card,player,event){
                            return get.name(card)=='sha'&&lib.filter.filterCard.apply(this,arguments);
                        },'使用一张杀，或交给'+get.translation(player)+'两张牌');
                    }
                    else{
                        event.directfalse=true;
                    }
                    'step 1'
                    var nh=target.countCards('he');
                    if((event.directfalse||!result.bool)&&nh){
                        if(nh<=2){
                            event.directcards=true;
                        }
                        else{
                            target.chooseCard('he',2,true,'将两张牌交给'+get.translation(player));
                        }
                    }
                    else{
                        event.finish();
                    }
                    'step 2'
                    if(event.directcards){
                        target.give(target.getCards('he'),player);
                    }
                    else if(result.bool&&result.cards&&result.cards.length){
                        target.give(result.cards,player);
                    }
                },
                ai:{
                    order:7,
                    result:{
                        target:function (player,target){
                            if(target.hasSha()&&_status.event.getRand()<0.5) return 1;
                            return -2;
                        },
                    },
                },
            },
            "sgws_chixueqingfeng":{
                type:"equip",
                subtype:"equip1",
                fullskin:true,
                distance:{
                    attackFrom:-1,
                },
                skills:["chixueqingfeng"],
                ai:{
                    equipValue:9,
                },
            },
            "sgws_chiyanzhenhunqin":{
                type:"equip",
                fullskin:true,
                subtype:"equip1",
                distance:{
                    attackFrom:-3,
                },
                skills:["chiyanzhenhunqin"],
                ai:{
                    equipValue:5,
                },
            },
            "sgws_guilongzhanyuedao":{
                type:"equip",
                fullskin:true,
                subtype:"equip1",
                distance:{
                    attackFrom:-2,
                },
                skills:["guilongzhanyuedao"],
                ai:{
                    equipValue:9,
                },
            },
            "sgws_jinwuluorigong":{
                type:"equip",
                subtype:"equip1",
                skills:["iwasawa_crowbow"],
                distance:{
                    attackFrom:-8,
                },
                ai:{
                    basic:{
                        equipValue:7.5,
                    },
                },
                fullskin:true,
            },
            "sgws_longfenghemingjian":{
                type:"equip",
                fullskin:true,
                subtype:"equip1",
                distance:{
                    attackFrom:-2,
                },
                skills:["longfenghemingjian"],
                ai:{
                    equipValue:9,
                },
            },
            "sgws_wushuangfangtianji":{
                type:"equip",
                subtype:"equip1",
                distance:{
                    attackFrom:-3,
                },
                ai:{
                    basic:{
                        equipValue:2.5,
                    },
                },
                skills:["wushuangfangtianji_skill"],
                fullskin:true,
            },
            "sgws_xingtianpojunfu":{
                type:"equip",
                subtype:"equip1",
                distance:{
                    attackFrom:-3,
                },
                skills:["noda_axe"],
                ai:{
                    basic:{
                        equipValue:7.5,
                    },
                },
                fullskin:true,
            },
            "sgws_xiuluolianyuji":{
                type:"equip",
                fullskin:true,
                subtype:"equip1",
                distance:{
                    attackFrom:-3,
                },
                skills:["xiuluolianyuji"],
                ai:{
                    equipValue:9,
                },
            },
            "sgws_guofengyupao":{
                type:"equip",
                fullskin:true,
                subtype:"equip2",
                skills:["guofengyupao"],
                ai:{
                    equipValue:9,
                },
            },
            "sgws_hongmianbaihuapao":{
                type:"equip",
                subtype:"equip2",
                ai:{
                    basic:{
                        equipValue:7,
                    },
                },
                skills:["hongmianbaihuapao_skill"],
                fullskin:true,
            },
            "sgws_linglongshimandai":{
                type:"equip",
                subtype:"equip2",
                ai:{
                    basic:{
                        equipValue:7.5,
                    },
                },
                skills:["linglongshimandai_skill"],
                fullskin:true,
            },
            "sgws_qimenbagua":{
                type:"equip",
                fullskin:true,
                subtype:"equip2",
                skills:["qimenbagua"],
                ai:{
                    equipValue:9,
                },
            },
            "sgws_juechenjinge":{
                type:"equip",
                fullskin:true,
                subtype:"equip3",
                skills:["sgws_juechenjinge"],
                ai:{
                    equipValue:9,
                },
            },
            "sgws_qicaishenlu":{
                fullskin:true,
                type:"equip",
                subtype:"equip4",
                distance:{
                    globalFrom:-1,
                },
                skills:["qicaishenlu"],
                ai:{
                    equipValue:9,
                },
            },
            "sgws_lingsheji":{
                type:"equip",
                subtype:"equip5",
                skills:["lingsheji"],
                modeimage:"boss",
                ai:{
                    basic:{
                        equipValue:7.5,
                    },
                },
                fullskin:true,
            },
            "sgws_shanrangzhaoshu":{
                type:"equip",
                subtype:"equip5",
                skills:["shanrangzhaoshu"],
                ai:{
                    basic:{
                        equipValue:7.5,
                    },
                },
                fullskin:true,
            },
            "sgws_shufazijinguan":{
                type:"equip",
                subtype:"equip5",
                ai:{
                    basic:{
                        equipValue:9,
                    },
                },
                skills:["shufazijinguan_skill"],
                fullskin:true,
            },
            "sgws_xuwangzhimian":{
                type:"equip",
                fullskin:true,
                subtype:"equip5",
                skills:["xuwangzhimian"],
                ai:{
                    equipValue:9,
                },
            },
            "sgws_zhenlongchangjian":{
                type:"equip",
                subtype:"equip1",
                distance:{
                    attackFrom:-1,
                },
                ai:{
                    basic:{
                        equipValue:2,
                    },
                },
                skills:["zhenlongchangjian_skill"],
                enable:true,
                fullimage:true,
            },
            "sgws_chuanguoyuxi":{
                type:"equip",
                subtype:"equip5",
                ai:{
                    basic:{
                        equipValue:7.5,
                    },
                },
                skills:["chuanguoyuxi_skill"],
                enable:true,
                fullimage:true,
            },
            "sgws_shangyangbianfa":{
                audio:true,
                global:"sgws_shangyangbianfa_dying",
                type:"trick",
                enable:true,
                filterTarget:function (card,player,target){
                    return target!=player;
                },
                selectTarget:1,
                content:function (){
                    'step 0'
                    var num=[1,2].randomGet();
                    target.damage(num).type='sgws_shangyangbianfa';
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
        },
        translate:{
            "sgws_chixueqingfeng":"赤血青锋",
            "sgws_chixueqingfeng_info":"锁定技，你使用【杀】结算结束前，目标角色不能使用或打出手牌，且此【杀】无视其防具",
            "sgws_gubuzifeng":"故步自封",
            "sgws_gubuzifeng_info":"出牌阶段，对一名其他角色使用。其的一个随机技能失效直到其下个回合结束。",
            "sgws_honghuangzhili":"洪荒之力",
            "sgws_honghuangzhili_info":"使一名角色翻面。",
            "sgws_sadouchengbing":"撒豆成兵",
            "sgws_sadouchengbing_info":"出牌阶段对自己使用，将你手牌补至你的体力上限；",
            "sgws_yihuajiemu":"移花接木",
            "sgws_yihuajiemu_info":"出牌阶段对一名有牌的其他角色使用，令其使用一张【杀】，或交给你两张牌",
            "sgws_chiyanzhenhunqin":"赤焰镇魂琴",
            "sgws_chiyanzhenhunqin_info":"锁定技，你造成的伤害均视为具有火属性",
            "sgws_guilongzhanyuedao":"鬼龙斩月刀",
            "sgws_guilongzhanyuedao_info":"锁定技，你使用的红色【杀】不能被【闪】响应",
            "sgws_jinwuluorigong":"金乌落日弓",
            "sgws_jinwuluorigong_info":"当你于出牌阶段内一次性失去了两张以上的手牌后，你可以弃置一名其他角色等量的牌。",
            "sgws_longfenghemingjian":"鸾凤和鸣剑",
            "sgws_longfenghemingjian_info":"你使用的【雷杀】或【火杀】指定目标后，可令对方选择弃置一张牌或令你摸一张牌",
            "sgws_wushuangfangtianji":"无双方天戟",
            "sgws_wushuangfangtianji_info":"你使用【杀】对目标角色造成伤害后，可以摸一张牌或弃置目标角色一张牌。",
            "sgws_xingtianpojunfu":"刑天破军斧",
            "sgws_xingtianpojunfu_info":"当你于出牌阶段内使用牌指定唯一目标后，你可弃置两张牌。若如此做，其本回合内不能使用或打出牌且其防具技能无效。",
            "sgws_xiuluolianyuji":"修罗炼狱戟",
            "sgws_xiuluolianyuji_info":"你使用【杀】可以额外指定任意名攻击范围内的其他角色为目标；锁定技，你使用【杀】造成的伤害+1，然后令受到伤害的角色回复1点体力",
            "sgws_guofengyupao":"国风玉袍",
            "sgws_guofengyupao_info":"锁定技，你不能成为其他角色使用普通锦囊牌的目标",
            "sgws_hongmianbaihuapao":"红棉百花袍",
            "sgws_hongmianbaihuapao_info":"锁定技，防止你受到的属性伤害。",
            "sgws_linglongshimandai":"玲珑狮蛮带",
            "sgws_linglongshimandai_info":"当其他角色使用牌指定你为唯一目标后，你可以进行一次判定，若判定结果为红桃，则此牌对你无效。",
            "sgws_qimenbagua":"奇门八卦",
            "sgws_qimenbagua_info":"锁定技，其他角色使用的【杀】对你无效",
            "sgws_juechenjinge":"绝尘金戈",
            "sgws_juechenjinge_info":"锁定技，敌方角色计算与己方其他角色距离+1",
            "sgws_qicaishenlu":"七彩神鹿",
            "sgws_qicaishenlu_info":"锁定技，你计算与其他角色的距离时-1，当你造成属性伤害时，你令此伤害+1。",
            "sgws_lingsheji":"灵蛇髻",
            "sgws_lingsheji_info":"出牌阶段结束时，你可选择：1.摸一张牌。2.将一张武将牌置于武将牌上，并于回合结束后获得此牌。",
            "sgws_shanrangzhaoshu":"禅让诏书",
            "sgws_shanrangzhaoshu_info":"其他角色于回合外获得牌后，若是其本回合内第一次获得牌，则你可以选择一项：交给其一张牌，或令其交给你一张牌。",
            "sgws_shufazijinguan":"束发紫金冠",
            "sgws_shufazijinguan_info":"准备阶段，你可以对一名其他角色造成1点伤害。",
            "sgws_xuwangzhimian":"虚妄之冕",
            "sgws_xuwangzhimian_info":"锁定技，摸牌阶段，你额外摸两张牌；你的手牌上限-1",
            "sgws_zhenlongchangjian":"真龙长剑",
            "sgws_zhenlongchangjian_info":"锁定技，你于一回合内使用的第一张普通锦囊牌不是【无懈可击】的合法目标。",
            "sgws_chuanguoyuxi":"传国玉玺",
            "sgws_chuanguoyuxi_info":"出牌阶段开始时，你可以视为使用一张【南蛮入侵】【万箭齐发】/【桃园结义】/【五谷丰登】。",
            "sgws_shangyangbianfa":"商鞅变法",
            "sgws_shangyangbianfa_info":"出牌阶段，对一名其他角色使用。你对目标角色造成随机1~2点伤害，若该角色以此法进入濒死状态，则其进行判定，若判定结果为黑色，则所有角色角色不能使用【桃】直到此濒死事件结算结束。",
        },
        list:[["club",5,"sgws_gubuzifeng"],["diamond",7,"sgws_gubuzifeng"],["spade",1,"sgws_honghuangzhili"],["heart",12,"sgws_honghuangzhili"],["heart",7,"sgws_sadouchengbing"],["heart",8,"sgws_sadouchengbing"],["heart",9,"sgws_sadouchengbing"],["heart",11,"sgws_sadouchengbing"],["club",12,"sgws_yihuajiemu"],["club",13,"sgws_yihuajiemu"],["spade",6,"sgws_chixueqingfeng"],["diamond",1,"sgws_chiyanzhenhunqin"],["spade",5,"sgws_guilongzhanyuedao"],["heart",5,"sgws_jinwuluorigong"],["spade",2,"sgws_longfenghemingjian"],["diamond",12,"sgws_wushuangfangtianji"],["diamond",5,"sgws_xingtianpojunfu"],["diamond",12,"sgws_xiuluolianyuji"],["diamond",3,"sgws_guofengyupao"],["spade",2,"sgws_hongmianbaihuapao"],["club",2,"sgws_hongmianbaihuapao"],["spade",2,"sgws_linglongshimandai"],["club",2,"sgws_linglongshimandai"],["spade",2,"sgws_qimenbagua"],["spade",5,"sgws_juechenjinge"],["diamond",3,"sgws_qicaishenlu"],["club",12,"sgws_lingsheji"],["spade",13,"sgws_shanrangzhaoshu"],["diamond",5,"sgws_shufazijinguan"],["diamond",5,"sgws_xuwangzhimian"],["diamond",1,"sgws_chuanguoyuxi"],["diamond",1,"sgws_zhenlongchangjian"],["diamond",5,"sgws_shangyangbianfa"],["diamond",1,"sgws_shangyangbianfa"],["diamond",1,"sgws_shangyangbianfa"]],
    },
    skill:{
        skill:{
            "sgws_shenyi":{
                unique:true,
                mod:{
                    judge:function (player,result){
                        if(_status.event.type=='phase'&&(_status.event.cardname!='shandian'||_status.event.cardname!='fulei')){
                            if(result.bool==false){
                                result.bool=true;
                            }
                            else{
                                result.bool=false;
                            }
                        }
                    },
                },
                trigger:{
                    player:"turnOverBefore",
                },
                priority:20,
                forced:true,
                filter:function (event,player){
                    return !player.isTurnedOver();
                },
                content:function (){
                    trigger.cancel();
                    game.log(player,'取消了翻面');
                },
                ai:{
                    noturn:true,
                    effect:{
                        target:function (card,player,target){
                            if(get.type(card)=='delay') return 0.5;
                        },
                    },
                },
            },
            "sgws_juechenjinge":{
                equipSkill:true,
                global:"sgws_juechenjinge2",
            },
            "sgws_juechenjinge2":{
                equipSkill:true,
                mod:{
                    globalTo:function (from,to,distance){
                        return distance+game.countPlayer(function(current){
                            if(current==to) return;
                            if(current.isEnemiesOf(to)) return;
                            if(current.hasSkill('sgws_juechenjinge')) return 1;
                        });
                    },
                },
            },
            "sgws_shangyangbianfa_dying":{
                trigger:{
                    player:"dying",
                },
                forced:true,
                popup:false,
                direct:true,
                charlotte:true,
                locked:true,
                filter:function (event,player){
                    return event.getParent().type=='sgws_shangyangbianfa';
                },
                content:function (){
                    'step 0'
                    player.judge(function(card){
                        return get.color(card)=='black'?-1:0;
                    })
                    'step 1'
                    if(result.color=='black'){
                        game.countPlayer(function(current){
                            if(current!=player) current.addTempSkill('sgws_shangyangbianfa_dying_nosave','_saveAfter');
                        });
                    }
                },
                subSkill:{
                    nosave:{
                        mod:{
                            cardSavable:function (){return false},
                        },
                        sub:true,
                    },
                },
            },
            "sgws_jiaoxie":{
                enable:"phaseUse",
                audio:"tuxi",
                usable:1,
                filter:function (event,player){
                    return game.hasPlayer(function(current){
                        return lib.skill.sgws_jiaoxie.filterTarget(null,player,current);
                    });
                },
                filterTarget:function (card,player,target){
                    return target.isEnemiesOf(player)&&target.countCards('he')>0;
                },
                content:function (){
                    'step 0'
                    if(!target.countCards('he')) event.finish();
                    else target.chooseCard('he',true,'将一张牌交给'+get.translation(player));
                    'step 1'
                    if(result.bool){
                        player.gain(result.cards,target,'give');
                    }
                },
                ai:{
                    order:9,
                    result:{
                        target:function (player,target){
                            if(target.countCards('e',function(card){
                                return get.value(card,target)<=0;
                            })>0) return 1;
                            return -1;
                        },
                    },
                },
            },
            "sgws_tuxi":{
                audio:"retuxi",
                trigger:{
                    player:"phaseDrawBegin2",
                },
                direct:true,
                preHidden:true,
                filter:function (event,player){
                    return event.num>0&&!event.numFixed&&game.hasPlayer(function(target){
                        return target.countCards('h')>0&&player!=target;
                    });
                },
                content:function (){
                    "step 0"
                    var num=get.copy(trigger.num)+1;
                    player.chooseTarget(get.prompt('sgws_tuxi'),'获得至多'+get.translation(num)+'名角色的各一张手牌，然后少摸等量的牌',[1,num],function(card,player,target){
                        return target.countCards('h')>0&&player!=target;
                    },function(target){
                        var att=get.attitude(_status.event.player,target);
                        if(target.hasSkill('tuntian')) return att/10;
                        return 1-att;
                    }).setHiddenSkill('sgws_tuxi');
                    "step 1"
                    if(result.bool){
                        result.targets.sortBySeat();
                        player.logSkill('sgws_tuxi',result.targets);
                        player.gainMultiple(result.targets);
                        trigger.num-=result.targets.length;
                    }
                    else{
                        event.finish();
                    }
                    "step 2"
                    if(trigger.num<=0) game.delay();
                },
                ai:{
                    threaten:1.6,
                    expose:0.2,
                },
            },
            "sgws_zhiti":{
                audio:"drlt_zhiti",
                global:"sgws_zhiti2",
                mod:{
                    maxHandcard:function (player,num){
                        if(game.hasPlayer(function(current){
                            return current.isAlive();
                        })) return num+1;
                    },
                },
                trigger:{
                    player:["phaseDrawBegin2","phaseEnd"],
                },
                forced:true,
                filter:function (event,player){
                    var num=event.name=='phase'?5:3;
                    if(num==3?event.numFixed:!game.hasPlayer(function(current){
                        return current.countDisabled()<5;
                    })) return false;
                    return game.countPlayer(function(current){
                        return current.isAlive();
                    })>=num;
                },
                direct:true,
                content:function (){
                    'step 0'
                    if(trigger.name=='phaseDraw'){
                        player.logSkill('sgws_zhiti');
                        trigger.num++;
                        event.finish();
                    }
                    else{
                        player.chooseTarget(get.prompt('sgws_zhiti'),'废除一名角色的一个随机装备栏',function(card,player,target){
                            return target.countDisabled()<5;
                        }).set('ai',function(target){
                            return -get.attitude(_status.event.player,target)*(target.countCards('e')+1)
                        });
                    }
                    'step 1'
                    if(result.bool){
                        var target=result.targets[0];
                        player.logSkill('sgws_zhiti',target);
                        var list=[];
                        for(var i=1;i<6;i++){
                            if(!target.isDisabled(i)) list.add((i==3||i==4)?6:i);
                        }
                        var num=list.randomGet();
                        if(num!=6) target.disableEquip(num);
                        else{
                            target.disableEquip(3);
                            target.disableEquip(4);
                        }
                    }
                },
            },
            "sgws_zhiti2":{
                mod:{
                    maxHandcard:function (player,num){
                        if(player.isDamaged()) return num-game.countPlayer(function(current){
                            return current.hasSkill('sgws_zhiti')&&current.inRange(player)&&player.isEnemiesOf(current);
                        })
                    },
                },
            },
            "sgws_weifeng":{
                audio:"weifeng",
                trigger:{
                    player:"useCardAfter",
                },
                forced:true,
                filter:function (event,player){
                    if(!event.targets||!event.targets.filter(function(target){
                        return target!=player&&!target.storage.sgws_weifeng2;
                    }).length) return false;
                    var evt=event.getParent('phaseUse');
                    if(!evt||evt.player!=player) return false;
                    if(!get.tag(event.card,'damage')) return false;
                    if(!['basic','trick'].contains(get.type(event.card))) return false;
                    return player.getHistory('useCard',function(ev){
                        return ev.getParent('phaseUse')==evt&&get.tag(ev.card,'damage')&&['basic','trick'].contains(get.type(ev.card));
                    }).indexOf(event)==0&&game.hasPlayer(function(current){
                        return current!=player&&!current.storage.sgws_weifeng2&&event.targets.contains(current);
                    });
                },
                content:function (){
                    'step 0'
                    player.chooseTarget(true,'威风：请选择一个目标，令其获得一个【惧('+get.translation(trigger.card.name)+')】标记',function(card,player,target){
                        return player!=target&&!target.storage.sgws_weifeng2&&_status.event.getTrigger().targets.contains(target);
                    }).set('ai',function(target){
                        return -get.attitude(_status.event.player,target);
                    });
                    'step 1'
                    if(result.bool){
                        var target=result.targets[0];
                        target.storage.sgws_weifeng2=trigger.card.name;
                        player.line(target,'green');
                        game.log(target,'获得了一个','#g【惧('+get.translation(trigger.card.name)+')】','标记')
                        target.markSkill('sgws_weifeng2');
                        player.addSkill('sgws_weifeng3');
                    }
                },
            },
            "sgws_weifeng2":{
                intro:{
                    content:"当前“惧”标记名称：$",
                    onunmark:function (storage,player){
                        if(player.storage.sgws_weifeng2){
                         game.log(player,'移去了一个','#g【惧('+get.translation(player.storage.sgws_weifeng2)+')】','标记')
                         delete player.storage.sgws_weifeng2;
                        }
                    },
                },
                marktext:"惧",
            },
            "sgws_weifeng3":{
                trigger:{
                    global:"damageBegin3",
                    player:["phaseZhunbeiBegin","dieBegin"],
                },
                forced:true,
                popup:false,
                filter:function (event,player){
                    if(event.name!='damage') return true;
                    return event.player!=player&&typeof event.player.storage.sgws_weifeng2=='string';
                },
                content:function (){
                    if(trigger.name=='damage'){
                        player.logSkill('sgws_weifeng',trigger.player);
                        if(trigger.card&&trigger.card.name==trigger.player.storage.sgws_weifeng2) trigger.num+=2;
                        else if(trigger.player.countGainableCards(player,'he')>0) player.gainPlayerCard(trigger.player,'he',true,[1,2]);
                        trigger.player.unmarkSkill('sgws_weifeng2');
                    }
                    else{
                     game.countPlayer(function(current){
                         if(current.storage.sgws_weifeng2) current.unmarkSkill('sgws_weifeng2');
                     });
                     player.removeSkill('sgws_weifeng3');
                    }
                },
            },
            "sgws_mubing":{
                audio:"mubing",
                trigger:{
                    player:"phaseUseBegin",
                },
                frequent:true,
                filter:function (event,player){
                    return player.countCards('he')>0;
                },
                content:function (){
                    'step 0'
                    var num=5;
                    event.num=num;
                    event.cards=game.cardsGotoOrdering(get.cards(num)).cards;
                    game.log(player,'展示了',event.cards);
                    event.videoId=lib.status.videoId++;
                    game.broadcastAll(function(player,id,cards){
                        var str=get.translation(player)+'发动了【募兵】';
                        var dialog=ui.create.dialog(str,cards);
                        dialog.videoId=id;
                    },player,event.videoId,event.cards);
                    game.addVideo('showCards',player,[get.translation(player)+'发动了【募兵】',get.cardsInfo(event.cards)]);
                    game.delay(2);
                    'step 1'
                    var numa=0;
                    cards.sort(function(a,b){
                        return a.number-b.number;
                    });
                    for(var i of cards){
                        if(get.value(i,player)>0) numa+=get.number(i);
                    }
                    player.chooseToDiscard([1,Infinity],'h').set('ai',function(card){
                        var player=_status.event.player;
                        var numa=_status.event.numa;
                        //if(card.name!='tengjia'&&get.position(card)=='e'&&get.equipValue(card,player)<=0) return 14;
                        var num=0;
                        for(var i of ui.selected.cards){
                            num+=i.number;
                        }
                        if(num>=numa) return 0;
                        if(card.number+num>=numa) return 15-get.value(card);
                        if(!ui.selected.cards.length){
                            var min=_status.event.min;
                            if(card.number<min&&!player.countCards('h',function(xcard){
                                return xcard!=card&&card.number+xcard.number>min;
                            })) return 0;
                            return card.number;
                        }
                        return Math.max(5-get.value(card),card.number);
                    }).set('prompt',false).set('numa',numa).set('min',cards[0].number);
                    var func=function(id){
                        var dialog=get.idDialog(id);
                        if(dialog) dialog.content.firstChild.innerHTML='请选择要弃置的牌';
                    };
                    if(player==game.me) func(event.videoId);
                    else if(player.isOnline()) player.send(func,event.videoId);
                    'step 2'
                    if(!result.bool){
                        return;
                    }
                    var numx=0;
                    for(var i of result.cards){
                        numx+=get.number(i);
                    }
                    event.numx=numx;
                    var next=player.chooseButton([0,num]);
                    next.set('dialog',event.videoId);
                    next.set('filterButton',function(button){
                        var num=0
                        for(var i=0;i<ui.selected.buttons.length;i++){
                            num+=get.number(ui.selected.buttons[i].link);
                        }
                        return (num+get.number(button.link)<=_status.event.maxNum);
                    });
                    next.set('maxNum',event.numx);
                    next.set('ai',function(button){
                        return get.value(button.link,_status.event.player);
                    });
                    var func=function(id){
                        var dialog=get.idDialog(id);
                        if(dialog) dialog.content.firstChild.innerHTML='请选择要获得的牌';
                    };
                    if(player==game.me) func(event.videoId);
                    else if(player.isOnline()) player.send(func,event.videoId);
                    'step 3'
                    if(!result.bool) event.cards=[];
                    else event.cards=result.links;
                    'step 4'
                    game.broadcastAll('closeDialog',event.videoId);
                    if(!cards.length){
                        event.finish();
                        return;
                    }
                    player.gain(cards,'log','gain2');
                    event.given=[];
                    'step 5'
                    var hs=player.getCards('h');
                    cards=cards.filter(function(card){
                        return hs.contains(card);
                    });
                    if(cards.length&&game.hasPlayer(function(current){
                        return current!=player&&!event.given.contains(current);
                    })) player.chooseCardTarget({
                        prompt:'是否将获得的牌中的任意张交给其他角色？',
                        selectCard:[1,cards.length],
                        filterCard:function(card){
                            return _status.event.cards.contains(card);
                        },
                        filterTarget:function(card,player,target){
                            return target!=player&&!_status.event.given.contains(target);
                        },
                        cards:cards,
                        given:event.given,
                        ai1:function(card){
                            return -1;
                        },
                    });
                    else event.finish();
                    'step 6'
                    if(result.bool){
                        var target=result.targets[0];
                        var cards=result.cards;
                        event.given.push(target);
                        event.cards.removeArray(cards);
                        player.line(target,'green');
                        target.gain(cards,player,'giveAuto');
                        event.goto(5);
                    }
                },
            },
            "sgws_ziqu":{
                audio:"ziqu",
                trigger:{
                    source:"damageSource",
                },
                filter:function (event,player){
                    return event.player!=player&&!player.getStorage('sgws_ziqu').contains(event.player)&&
                    event.player.countCards('he')>0;
                },
                check:function (event,player){
                    var target=event.player;
                    var eff=get.damageEffect(target,player,player);
                    if(get.attitude(player,target)>0){
                        if(eff>=0) return false;
                        return true;
                    }
                    if(eff<=0) return true;
                    if(target.hp==1) return false;
                    if(event.num>1) return false;
                    var cards=target.getCards('he');
                    for(var i=0;i<cards.length;i++){
                        if(get.number(cards[i])>10) return true;
                    }
                    return false;
                },
                logTarget:"player",
                content:function (){
                    'step 0'
                    if(!player.storage.sgws_ziqu) player.storage.sgws_ziqu=[];
                    player.storage.sgws_ziqu.push(trigger.player);
                    player.markSkill('sgws_ziqu');
                    trigger.player.chooseCard(true,'he',function(card,player){
                        return !player.countCards('he',function(cardx){
                            return cardx.number>card.number;
                        });
                    });
                    'step 1'
                    if(result.bool&&result.cards&&result.cards.length) player.gain(result.cards,trigger.player,'giveAuto');
                },
                intro:{
                    content:"已对$发动过",
                },
            },
            "sgws_wuan":{
                audio:"baiqi_wuan",
                locked:true,
                global:"sgws_wuan_buff",
                subSkill:{
                    buff:{
                        mod:{
                            cardUsable:function (card,player,num){
                    if(card.name=='sha'){
                        return num+game.countPlayer(function(current){
                            return current.hasSkill('sgws_wuan')&&current.isFriendsOf(player)
                        });
                    }
                },
                        },
                        sub:true,
                    },
                },
                group:"snjs_boss_tianshubaiqiwuan",
            },
            "sgws_juece":{
                audio:"rejuece",
                trigger:{
                    player:"phaseJieshuBegin",
                },
                direct:true,
                filter:function (event,player){
                    return game.hasPlayer(function(current){
                        return current!=player&&current.getHistory('lose',function(evt){
                            return evt.cards2&&evt.cards2.length>0;
                        }).length>0;
                    });
                },
                content:function (){
                    'step 0'
                    player.chooseTarget(get.prompt('sgws_juece'),'对一名本回合失去过牌的其他角色造成2点伤害',function(card,player,target){
                        return _status.event.targets.contains(target);
                    }).set('targets',game.filterPlayer(function(current){
                        return current!=player&&current.getHistory('lose',function(evt){
                            return evt.cards2&&evt.cards2.length>0;
                        }).length>0;
                    })).set('ai',function(target){
                        var player=_status.event.player;
                        return get.damageEffect(target,player,player);
                    });
                    'step 1'
                    if(result.bool){
                        var target=result.targets[0];
                        player.logSkill('sgws_juece',target);
                        target.damage(2);
                    }
                },
            },
            "sgws_qiangzheng":{
                audio:"snjs_boss_zhuoguibwcqz",
                trigger:{
                    player:"phaseJieshuBegin",
                },
                forced:true,
                unique:true,
                filter:function (event,player){
                    return game.hasPlayer(function(current){
                        return current!=player&&current.countCards('h');
                    });
                },
                content:function (){
                    "step 0"
                    var players=get.players(player);
                    players.remove(player);
                    for(let i of players)
                        if(i.isFriendsOf(player))
                            players.remove(i);
                    event.players=players;
                    player.line(players,'green');
                    "step 1"
                    if(event.players.length){
                        var current=event.players.shift();
                        var hs=current.getCards('h')
                        if(hs.length){
                            var card=hs.randomGet();
                            player.gain(card,current);
                            current.$giveAuto(card,player);
                        }
                        event.redo();
                    }
                },
            },
            "sgws_meiyong":{
                inherit:"xinfu_wuniang",
                audio:"xinfu_wuniang",
                content:function (){
                    'step 0'
                    player.chooseTarget(get.prompt('sgws_meiyong'),'获得一名其他角色的1-3张牌，然后其摸一张牌。',function(card,player,target){
                        if(player==target) return false;
                        return target.countGainableCards(player,'he')>0;
                    }).set('ai',function(target){
                        return 10-get.attitude(_status.event.player,target);
                    });
                    'step 1'
                    if(result.bool){
                        var target=result.targets[0];
                        event.target=target;
                        player.logSkill('sgws_meiyong',target);
                        player.gainPlayerCard(target,'he',true,[1,3]);
                    }
                    else event.finish();
                    'step 2'
                    target.draw();
                },
                trigger:{
                    player:["useCard","respond"],
                },
                direct:true,
                filter:function (event,player){
                    return event.card.name=='sha';
                },
            },
            "sgws_dangxian":{
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                audio:"dangxian",
                content:function (){
                    'step 0'
                    event.cards=[];
                    while(event.cards.length<2){
                        var card=get.cardPile2(function(card){
                            return !event.cards.contains(card)&&get.type(card)=='basic'&&card.name=='sha';
                        });
                        if(card){
                            event.cards.push(card);
                        }
                        else{
                            for(var i=0;i<ui.discardPile.childNodes.length;i++){
                                var current=ui.discardPile.childNodes[i];
                                if(!event.cards.contains(current)&&get.type(current)=='basic'&&current.name=='sha'&&event.cards.length<2){
                                    event.cards.push(current);
                                }
                            }
                        }
                    }
                    if(event.cards.length>0) player.gain(event.cards,'gain2');
                    'step 1'
                    game.updateRoundNumber();
                    var next=player.phaseUse();
                    event.next.remove(next);
                    trigger.next.push(next);
                },
            },
            "sgws_wuniang":{
                audio:"xinfu_xushen",
                trigger:{
                    player:"useCardAfter",
                },
                usable:1,
                filter:function (event,player){
                    return event.card.name=='sha'&&event.targets.length==1&&event.targets[0].isAlive();
                },
                logTarget:"targets",
                content:function (){
                    'step 0'
                    var target=trigger.targets[0];
                    target.chooseToUse(function(card,player,event){
                        if(get.name(card)!='sha') return false;
                        return lib.filter.filterCard.apply(this,arguments);
                    },'武娘：是否对'+get.translation(player)+'使用一张杀？').set('targetRequired',true).set('complexSelect',true).set('filterTarget',function(card,player,target){
                        if(target!=_status.event.sourcex&&!ui.selected.targets.contains(_status.event.sourcex)) return false;
                        return lib.filter.filterTarget.apply(this,arguments);
                    }).set('sourcex',player);
                    'step 1'
                    player.addTempSkill('sgws_wuniang2');
                    player.addMark('sgws_wuniang2',1,false);
                    player.draw(3);
                },
            },
            "sgws_wuniang2":{
                onremove:true,
                charlotte:true,
                mod:{
                    cardUsable:function (card,player,num){
                        if(card.name=='sha') return num+player.countMark('sgws_wuniang2');
                    },
                },
            },
            "sgws_zhennan":{
                audio:"xinfu_zhennan",
                trigger:{
                    global:"useCardToPlayered",
                },
                filter:function (event,player){
                    return event.isFirstTarget&&event.targets&&event.targets.length>1&&get.type2(event.card)=='trick';
                },
                direct:true,
                content:function (){
                    "step 0"
                    player.chooseTarget(get.prompt('sgws_zhennan'),'对一名其他角色造成3点伤害',function(card,player,target){
                        return target!=player;
                    }).set('ai',function(target){
                        var player=_status.event.player;
                        return get.damageEffect(target,player,player);
                    });
                    "step 1"
                    if(result.bool&&result.targets&&result.targets.length){
                        player.logSkill('sgws_zhennan',result.targets);
                        result.targets[0].damage(3);
                    }
                },
                ai:{
                    expose:0.25,
                },
                group:["sgws_zhennan1","sgws_zhennan2"],
            },
            "sgws_zhennan1":{
                audio:"xinfu_zhennan",
                enable:"phaseUse",
                usable:1,
                viewAs:{
                    name:"nanman",
                },
                filterCard:true,
                selectCard:function (){
                    if(ui.selected.targets.length) return [ui.selected.targets.length,Math.min(ui.selected.targets.length+1,game.players.length-1)];
                    return [1,Infinity];
                },
                check:function (card){
                    var player=_status.event.player;
                    if(game.countPlayer(function(current){
                        return current!=player&&player.canUse('nanman',current)&&get.effect(current,{name:'nanman'},player,player)>0;
                    })<=ui.selected.cards.length) return 0;
                    return 6-get.value(card);
                },
                selectTarget:function (){
                    return ui.selected.cards.length;
                },
                ai:{
                    order:2,
                    wuxie:function (target,card,player,viewer){
                        if(get.attitude(viewer,target)>0&&target.countCards('h','sha')){
                            if(!target.countCards('h')||target.hp==1||Math.random()<0.7) return 0;
                        }
                    },
                    basic:{
                        order:9,
                        useful:[5,1],
                        value:5,
                    },
                    result:{
                        "target_use":function (player,target){
                            if(player.hasUnknown(2)&&get.mode()!='guozhan') return 0;
                            var nh=target.countCards('h');
                            if(get.mode()=='identity'){
                                if(target.isZhu&&nh<=2&&target.hp<=1) return -100;
                            }
                            if(nh==0) return -2;
                            if(nh==1) return -1.7
                            return -1.5;
                        },
                        target:function (player,target){
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
                        respond:1,
                        respondSha:1,
                        damage:1,
                        multitarget:1,
                        multineg:1,
                    },
                },
            },
            "sgws_zhennan2":{
                trigger:{
                    target:"useCardToBefore",
                },
                forced:true,
                locked:false,
                audio:"xinfu_zhennan",
                filter:function (event,player){
                    return (event.card.name=='nanman'||event.card.name=='wanjian'||event.card.name=='huogong');
                },
                content:function (){
                    trigger.cancel();
                },
            },
            "sgws_fenghuo":{
                audio:"GXS_fenghuo",
                enable:"chooseToUse",
                filter:function (event,player){
                    return player.countCards('e')>0;
                },
                filterCard:true,
                position:"e",
                viewAs:{
                    name:"nanman",
                },
                prompt:"将一张装备区内的牌当南蛮入侵使用",
                group:"sgws_fenghuo_remove",
                check:function (card){
                    var player=_status.currentPhase;
                    if(player.countCards('he',{subtype:get.subtype(card)})>1){
                        return 11-get.equipValue(card);
                    }
                    if(player.countCards('h')<player.hp){
                        return 6-get.value(card);
                    }
                    return 2-get.equipValue(card);
                },
                ai:{
                    order:9,
                    threaten:1.1,
                    wuxie:function (target,card,player,viewer){
                        if(get.attitude(viewer,target)>0&&target.countCards('h','sha')){
                            if(!target.countCards('h')||target.hp==1||Math.random()<0.7) return 0;
                        }
                    },
                    basic:{
                        order:9,
                        useful:[5,1],
                        value:5,
                    },
                    result:{
                        "target_use":function (player,target){
                            if(player.hasUnknown(2)&&get.mode()!='guozhan') return 0;
                            var nh=target.countCards('h');
                            if(get.mode()=='identity'){
                                if(target.isZhu&&nh<=2&&target.hp<=1) return -100;
                            }
                            if(nh==0) return -2;
                            if(nh==1) return -1.7
                            return -1.5;
                        },
                        target:function (player,target){
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
                        respond:1,
                        respondSha:1,
                        damage:1,
                        multitarget:1,
                        multineg:1,
                    },
                },
            },
            "sgws_fenghuo_remove":{
                trigger:{
                    player:"useCard2",
                },
                direct:true,
                filter:function (event,player){
                    return event.card.name=='nanman'&&event.targets.length>0;
                },
                line:false,
                content:function (){
                    'step 0'
                    player.chooseTarget(get.prompt('sgws_fenghuo'),'为'+get.translation(trigger.card)+'减少1-2个目标',[1,2],function(card,player,target){
                        return _status.event.targets.contains(target)
                    }).set('targets',trigger.targets).set('ai',function(target){
                        var player=_status.event.player;
                        return -get.effect(target,_status.event.getTrigger().card,player,player)
                    });
                    'step 1'
                    if(result.bool){
                        player.logSkill('sgws_fenghuo',result.targets);
                        trigger.excluded.addArray(result.targets);
                    }
                },
            },
            "sgws_zuoming":{
                audio:"cqzm",
                derivation:"sgws_wangzhong",
                enable:"phaseUse",
                limited:true,
                unique:true,
                mark:true,
                skillAnimation:"epic",
                animationColor:"thunder",
                init:function (player){
                    player.storage.sgws_zuoming=false;
                },
                intro:{
                    content:"limited",
                },
                filter:function (event,player){
                    if(player.storage.sgws_zuoming==true) return false;
                    return game.countPlayer(function(current){
                        return current!=player;
                    })>1;
                },
                filterTarget:function (card,player,target){
                    return player!=target;
                },
                targetprompt:["失去技能","获得技能"],
                selectTarget:2,
                multitarget:true,
                content:function (){
                    'step 0'
                    player.awakenSkill('sgws_zuoming');
                    player.storage.sgws_zuoming=true;
                    player.storage.sgws_wangzhong1=targets[0];
                    player.storage.sgws_wangzhong2=targets[1];
                    targets[0].addMark('sgws_wangzhong');
                    targets[1].addMark('sgws_wangzhong');
                    'step 1'
                    var list=[];
                    var listm=[];
                    var listv=[];
                    if(targets[0].name1!=undefined) listm=lib.character[targets[0].name1][3];
                    else listm=lib.character[targets[0].name][3];
                    if(targets[0].name2!=undefined) listv=lib.character[targets[0].name2][3];
                    listm=listm.concat(listv);
                    var func=function(skill){
                        var info=get.info(skill);
                        if(!info||(info.unique&&!info.gainable)) return false;
                        return true;
                    };
                    for(var i=0;i<listm.length;i++){
                        if(func(listm[i])) list.add(listm[i]);
                    }
                    event.skills=list;
                    'step 2'
                    if(event.skills.length>0){
                        player.chooseControl(event.skills).set('prompt','〖佐命〗：选择'+get.translation(targets[0])+'的技能').set('ai',function(){return event.skills.randomGet()});
                    }
                    'step 3'
                    targets[0].removeSkill(result.control,true);
                    if(!targets[1].hasSkill(result.control)) targets[1].addSkill(result.control);
                    if(!player.hasSkill('sgws_wangzhong')) player.addSkill('sgws_wangzhong');
                    'step 4'
                    targets[0].loseMaxHp();
                    targets[1].gainMaxHp();
                },
                ai:{
                    order:100,
                    result:{
                        target:function (player,target){
                            if(ui.selected.targets.length==0){
                                return -1;
                            }
                            else{
                                return 1;
                            }
                        },
                    },
                    expose:0.4,
                    threaten:1.5,
                },
            },
            "sgws_wangzhong":{
                audio:"cqwz",
                intro:{
                    name:"望重",
                    content:"摸牌机器",
                },
                init:function (player){
                    if(!player.storage.sgws_wangzhong1) player.storage.sgws_wangzhong1=[];
                    if(!player.storage.sgws_wangzhong2) player.storage.sgws_wangzhong2=[];
                },
                trigger:{
                    global:"damageEnd",
                },
                filter:function (event,player){
                    return player.storage.sgws_wangzhong1==event.player||player.storage.sgws_wangzhong2==event.source;
                },
                forced:true,
                content:function (){
                    if(trigger.player==player.storage.sgws_wangzhong1){
                        event.draw1=[player,trigger.player];
                        game.asyncDraw(event.draw1,trigger.num+1);
                    }
                    if(trigger.source==player.storage.sgws_wangzhong2){
                        event.draw2=[player,trigger.source];
                        game.asyncDraw(event.draw2,trigger.num+1);
                    }
                },
            },
            "sgws_wangzhong1":{
                audio:"alcqwz",
                trigger:{
                    global:"loseHpEnd",
                },
                filter:function (event,player){
                    return event.player.isDamaged();
                },
                direct:true,
                content:function (){
                    "step 0"
                    player.chooseTarget(get.prompt('sgws_wangzhong1'),'<center>令一名角色摸两张牌<center>').set('ai',function(target){
                        if(player.isMinHandcard()) return player;
                        if(get.attitude(player,target)>0&&target.isMinHandcard()) return target;
                        return get.attitude(player,target)>0;
                    });
                    "step 1"
                    if(result.bool&&result.targets&&result.targets.length){
                        player.logSkill('sgws_wangzhong1',result.targets);
                        result.targets[0].draw(2);
                    }
                },
                ai:{
                    expose:0.3,
                },
            },
            "sgws_mashu":{
                mod:{
                    globalFrom:function (from,to,distance){
                        return distance-2;
                    },
                },
            },
            "sgws_nuzhan":{
                audio:"nuzhan",
                trigger:{
                    player:"useCard1",
                },
                forced:true,
                popup:false,
                silent:true,
                firstDo:true,
                filter:function (event,player){
                    return event.card&&event.card.name=='sha'&&event.cards&&
                        event.cards.length==1&&(get.type(event.cards[0],'trick')=='trick'||get.type(event.cards[0])=='equip');
                },
                content:function (){
                    trigger.baseDamage++;
                },
            },
            "sgws_wuhun":{
                mod:{
                    targetInRange:function (card){
                        if(get.color(card)=='red') return true;
                    },
                    cardUsable:function (card){
                        if(card.name=='sha'&&get.color(card)=='red') return Infinity;
                    },
                },
                audio:"wuhun",
                trigger:{
                    player:"useCard",
                },
                forced:true,
                filter:function (event,player){
                    return event.card.name=='sha'&&get.color(event.card)=='red';
                },
                content:function (){
                    trigger.directHit.addArray(game.players);
                    if(trigger.addCount!==false){
                        trigger.addCount=false;
                        if(player.stat[player.stat.length-1].card.sha>0){
                            player.stat[player.stat.length-1].card.sha--;
                        }
                    }
                },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                            if(get.tag(card,'respondSha')&&current<0) return 0.6
                        },
                    },
                    "directHit_ai":true,
                    skillTagFilter:function (player,tag,arg){
                        return arg.card.name=='sha'&&get.color(arg.card)=='red';
                    },
                },
            },
            "sgws_wushen":{
                audio:"spsgyws",
                group:["sgws_wushen_damage","sgws_wushen_draw","sgws_wushen_shamiss","e"],
                subSkill:{
                    damage:{
                        trigger:{
                            player:"useCardToTargeted",
                        },
                        filter:function (event){
                            return event.card&&event.card.name=='sha'&&get.suit(event.card)=='heart';
                        },
                        silent:true,
                        forced:true,
                        content:function (){
                            var id=trigger.target.playerid;
                            var map=trigger.getParent().customArgs;
                            if(!map[id]) map[id]={};
                            if(typeof map[id].extraDamage!='number'){
                                map[id].extraDamage=0;
                            }
                            map[id].extraDamage++;
                        },
                        sub:true,
                        popup:false,
                    },
                    draw:{
                        audio:"spsgyws",
                        trigger:{
                            source:"damageSource",
                        },
                        filter:function (event){
                            return event.card&&event.card.name=='sha'&&event.nature=='fire';
                        },
                        silent:true,
                        forced:true,
                        content:function (){
                            player.draw();
                        },
                        sub:true,
                        popup:false,
                    },
                    shamiss:{
                        audio:"spsgyws",
                        trigger:{
                            player:"shaMiss",
                        },
                        usable:1,
                        forced:true,
                        filter:function (event,player){
                            return player.canUse('sha',event.target,false);
                        },
                        content:function (){
                            'step 0'
                            player.draw();
                            'step 1'
                            player.chooseToUse('〖武神〗：是否对'+get.translation(trigger.target)+'使用一张【杀】',function(card,player,event){
                                if(get.name(card)!='sha') return false;
                                return lib.filter.filterCard.apply(this,arguments);
                            },trigger.target,-1).set('addCount',false);
                        },
                        sub:true,
                    },
                },
                enable:["chooseToRespond","chooseToUse"],
                filterCard:function (card,player){
                    if(get.zhu(player,'shouyue')) return true;
                    return get.color(card)=='red';
                },
                position:"hes",
                viewAs:{
                    name:"sha",
                    nature:"fire",
                },
                viewAsFilter:function (player){
                    if(get.zhu(player,'shouyue')){
                        if(!player.countCards('hes')) return false;
                    }
                    else{
                        if(!player.countCards('hes',{color:'red'})) return false;
                    }
                },
                prompt:"将一张红牌当作火【杀】使用或打出",
                check:function (card){return 4-get.value(card)},
                ai:{
                    respondSha:true,
                    fireAttack:true,
                    skillTagFilter:function (player){
                        if(get.zhu(player,'shouyue')){
                            if(!player.countCards('hes')) return false;
                        }
                        else{
                            if(!player.countCards('hes',{color:'red'})) return false;
                        }
                    },
                    canLink:function (player,target,card){
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
                    order:function (item,player){
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
                        target:function (player,target,card,isLink){
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
                        damage:function (card){
                            if(card.nature=='poison') return;
                            return 1;
                        },
                        natureDamage:function (card){
                            if(card.nature) return 1;
                        },
                        fireDamage:function (card,nature){
                            if(card.nature=='fire') return 1;
                        },
                        thunderDamage:function (card,nature){
                            if(card.nature=='thunder') return 1;
                        },
                        poisonDamage:function (card,nature){
                            if(card.nature=='poison') return 1;
                        },
                    },
                    yingbian:function (card,player,targets,viewer){
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
            "sgws_zhongyi":{
                audio:"spsgyzy",
                group:["sgws_zhongyi_shiyong","sgws_zhongyi1"],
                trigger:{
                    global:"gainAfter",
                },
                filter:function (event,player){
                    var shuliang=player.maxHp;
                    if(event.player!=player&&shuliang>player.countCards('h')){
                        var evt=event.getl(player);
                        return evt&&evt.hs&&evt.hs.length>0;
                    }
                    return false;
                },
                forced:true,
                content:function (){
                    var mopai=player.hp;
                    player.draw(mopai-player.countCards('h'));
                    if(!trigger.player.hasSkill('fengyin')){
                        trigger.player.addTempSkill('fengyin');
                    }
                    if(!trigger.player.hasSkill('sgws_zhongyi_mark')){
                        trigger.player.addTempSkill('sgws_zhongyi_mark');
                    }
                },
                subSkill:{
                    shiyong:{
                        audio:"spsgyzy",
                        enable:"phaseUse",
                        filter:function (evetn,player){
                            return !player.hasSkill('sgws_zhongyi_jilu');
                        },
                        filterCard:true,
                        check:function (card){
                            return 9-get.value(card);
                        },
                        filterTarget:function (card,player,target){
                            return player!=target;
                        },
                        discard:false,
                        lose:false,
                        delay:false,
                        content:function (){
                            if(!player.hasSkill('sgws_zhongyi_jilu')) player.addTempSkill('sgws_zhongyi_jilu');
                            target.gain(cards,player,'giveAuto');
                            event.finish();
                        },
                        ai:{
                            result:{
                                target:function (player,target){
                                    return -1;
                                },
                            },
                            order:function (){
                                return get.order({name:'sha'})+0.2;
                            },
                        },
                        sub:true,
                    },
                    jilu:{
                        silent:true,
                        unique:true,
                        forced:true,
                        sub:true,
                        popup:false,
                    },
                    mark:{
                        mark:true,
                        unique:true,
                        intro:{
                            content:"不能使用或打出牌",
                        },
                        mod:{
                            "cardEnabled2":function (card){
                                if(get.position(card)=='h') return false;
                                if(get.position(card)=='s') return false;
                            },
                        },
                        sub:true,
                    },
                },
            },
            "sgws_zhanjiang":{
                audio:"spsgyzj",
                init:function (player){
                    if(!player.storage.sgws_zhanjiang) player.storage.sgws_zhanjiang=0;
                },
                mod:{
                    cardUsable:function (card,player,num){
                        if(card.name=='sha') return num+player.storage.sgws_zhanjiang;
                    },
                },
                trigger:{
                    global:"die",
                },
                filter:function (event,player){
                    return event.source&&event.source==player;
                },
                forced:true,
                content:function (){
                    if(player.hasSkill('ssgws_zhongyi_jilu')) player.removeSkill('sgws_zhongyi_jilu');
                    player.storage.sgws_zhanjiang++;
                    if(!player.hasSkill('sgws_zhanjiang_qingchu')) player.addTempSkill('sgws_zhanjiang_qingchu');
                },
                subSkill:{
                    qingchu:{
                        silent:true,
                        unique:true,
                        forced:true,
                        onremove:function (player){
                            player.storage.sgws_zhanjiang=0;
                        },
                        sub:true,
                        popup:false,
                    },
                },
            },
            "sgws_qijun":{
                audio:"spsgyqj",
                global:"sgws_qijun_xiaoguo",
                trigger:{
                    global:"loseEnd",
                },
                filter:function (event,player){
                    if(event.player==player||!event.player.isAlive()||event.player.countCards('h')<1||event.player.isFriendsOf(player)) return false;
                    for (var i=0;i<event.cards2.length;i++){
                        if (get.type(event.cards2[i],event.player)=='equip'){
                            return true;
                        }
                    }
                    return false;
                },
                forced:true,
                logTarget:function (event){
                    return event.player;
                },
                content:function (){
                    var x=0;
                    for(var i=0;i<trigger.cards2.length;i++){
                        if(get.type(trigger.cards2[i])=='equip') x++;
                    }
                    trigger.player.chooseToDiscard('〖七军〗：弃置'+get.cnNumber(x)+'张手牌','h',x,true);
                },
                subSkill:{
                    xiaoguo:{
                        unique:true,
                        mod:{
                            maxHandcard:function (player,num){
                                if(game.countPlayer(function(current){
                                    if(current.hasSkill('sgws_qijun')&&current!=player&&player.isEnemiesOf(current)) return player.countCards('e')>0;
                                })) return num-player.countCards('e');
                            },
                        },
                        sub:true,
                    },
                },
            },
            "sgws_tuodao":{
                audio:"extuodao",
                enable:"phaseUse",
                group:["expd"],
                usable:1,
                filterTarget:function (card,player,target){
                    return player.canCompare(target);
                },
                filter:function (event,player){
                    return player.countCards('h')>0;
                },
                content:function (){
                    'step 0'
                    player.chooseToCompare(target).set('preserve','win');
                    'step 1'
                    if(result.bool&&result.target){
                        event.type=true;
                        event.card=result.target;
                        player.addTempSkill('c');
                    }
                },
                ai:{
                    result:{
                        target:function (player,target){
                var hs=player.getCards('h');
                if(hs.length<3) return 0;
                var bool=false;
                for(var i=0;i<hs.length;i++){
                    if(hs[i].number>=9&&get.value(hs[i])<7){
                        bool=true;
                        break;
                    }
                }
                if(!bool) return 0;
                if(player.canUse('sha',target)&&(player.countCards('h','sha'))){
                    return -2;
                }
                return -0.5;
                },
                    },
                    order:9,
                },
            },
            "sgws_zhongyi1":{
                audio:"exzhongyi",
                trigger:{
                    player:"phaseBegin",
                },
                content:function (){
                "step 0"
                player.chooseToDiscard(999999999999999,'j',true);
                "step 1"
                player.draw();

                },
                ai:{
                    threaten:1.5,
                },
            },
            "sgws_gangyi":{
                audio:"bxgy",
                trigger:{
                    global:"damageBegin",
                },
                filter:function (event,player){
                    return event.source!=undefined&&event.num>0&&event.player!=player&&event.source!=player&&event.source.inRange(player);
                },
                check:function (event,player){
                    return (get.attitude(player,event.player)>0&&player.hp>=event.player);
                },
                logTarget:"player",
                content:function (){
                    "step 0"
                    event.num=trigger.num;
                    "step 1"
                    trigger.player=player;
                    "step 2"
                    if(trigger.source.countCards('he')) player.discardPlayerCard(event.num+1,trigger.source,'he');
                    else{
                        player.draw(event.num+1);
                        event.goto(4);
                    }
                    "step 3"
                    if(!result.bool){
                        player.draw(event.num+1);
                    }
                    "step 4"
                },
            },
            "sgws_yixiong":{
                audio:"MYyixiong",
                trigger:{
                    player:["useCard","respond"],
                },
                filter:function (event, player) {
                    return get.type(event.card) == 'basic';
                },
                direct:true,
                content:function () {
                    'step 0'
                    player.chooseTarget('义兄：令一名角色摸两张牌').ai = function(target) {
                        if (player.storage.yuedong_recover) {
                            return get.recoverEffect(target, player, player);
                        }
                        var att = get.attitude(player, target) / Math.sqrt(2 + target
                            .countCards('h'));
                        if (player == target) {
                            var num2 = player.needsToDiscard(num);
                            if (num2 > 1) return att / 5;
                            if (num2 == 1) {
                                if (num > 1) return att / 3;
                                return att / 4;
                            }
                            return att * 1.1;
                        }
                        return att;
                    };
                    'step 1'
                    if (result.bool) {

                        player.logSkill('sgws_yixiong', result.targets[0]);
                        result.targets[0].draw(2);

                    }
                },
                ai:{
                    threaten:1.5,
                },
            },
            "sgws_luanji":{
                inherit:"luanji",
                audio:"olluanji",
                line:false,
                group:"sgws_luanji_remove",
                check:function (card){
                    return 7-get.value(card);
                },
                enable:"phaseUse",
                position:"hs",
                viewAs:{
                    name:"wanjian",
                },
                filterCard:function (card,player){
                    if(ui.selected.cards.length){
                        return get.suit(card)==get.suit(ui.selected.cards[0]);
                    }
                    var cards=player.getCards('hs');
                    for(var i=0;i<cards.length;i++){
                        if(card!=cards[i]){
                            if(get.suit(card)==get.suit(cards[i])) return true;
                        }
                    }
                    return false;
                },
                selectCard:2,
                complexCard:true,
                ai:{
                    basic:{
                        order:8.5,
                        useful:1,
                        value:5,
                    },
                    wuxie:function (target,card,player,viewer){
                        if(get.attitude(viewer,target)>0&&target.countCards('h','shan')){
                            if(!target.countCards('h')||target.hp==1||Math.random()<0.7) return 0;
                        }
                    },
                    result:{
                        "target_use":function (player,target){
                            if(player.hasUnknown(2)&&get.mode()!='guozhan') return 0;
                            var nh=target.countCards('h');
                            if(get.mode()=='identity'){
                                if(target.isZhu&&nh<=2&&target.hp<=1) return -100;
                            }
                            if(nh==0) return -2;
                            if(nh==1) return -1.7
                            return -1.5;
                        },
                        target:function (player,target){
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
                        respond:1,
                        respondShan:1,
                        damage:1,
                        multitarget:1,
                        multineg:1,
                    },
                },
            },
            "sgws_luanji_remove":{
                trigger:{
                    player:"useCard2",
                },
                direct:true,
                filter:function (event,player){
                    return event.card.name=='wanjian'&&event.targets.length>0;
                },
                line:false,
                content:function (){
                    'step 0'
                    player.chooseTarget(get.prompt('sgws_luanji'),'为'+get.translation(trigger.card)+'减少1-2个目标',[1,2],function(card,player,target){
                        return _status.event.targets.contains(target)
                    }).set('targets',trigger.targets).set('ai',function(target){
                        var player=_status.event.player;
                        return -get.effect(target,_status.event.getTrigger().card,player,player)
                    });
                    'step 1'
                    if(result.bool){
                        player.logSkill('sgws_luanji',result.targets);
                        trigger.excluded.addArray(result.targets);
                    }
                },
            },
            "sgws_xingdong":{
                audio:"dengji",
                subSkill:{
                    mark:{
                        mark:true,
                        marktext:"令",
                        intro:{
                            content:"跳过下个回合的判定阶段和摸牌阶段",
                        },
                        sub:true,
                    },
                },
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
                    return player.countCards('h',lib.skill.sgws_xingdong.filterCard);
                },
                filterCard:function (card){
                    return card.name=='sha'||get.type(card)=='trick';
                },
                check:function (card){return 1},
                filterTarget:function (card,player,target){
                return player!=target;
            },
                discard:false,
                lose:false,
                delay:0,
                content:function (){
                    'step 0'
                    target.gain(cards,player,'give');
                    'step 1'
                    target.chooseUseTarget(cards[0],game.filterPlayer(function(current){
                        return current!=player;
                    }),'请使用得到的牌，或者跳过下回合的判定阶段和摸牌阶段');
                    'step 2'
                    if(result.bool) game.asyncDraw([player,target],2);
                    else{
                        target.addTempSkill('sgws_xingdong_mark','phaseJudgeSkipped');
                        target.skip('phaseJudge');
                        target.skip('phaseDraw');
                        event.finish();
                    }
                    'step 3'
                    game.delay();
                },
                ai:{
                    order:12,
                    result:{
                        target:function (player,target){
                            var card=ui.selected.cards[0];
                            if(target.hasSkill('pingkou')) return 1;
                            if(!card) return 0;
                            var info=get.info(card);
                            if(info.selectTarget==-1){
                                var eff=0;
                                game.countPlayer(function(current){
                                    if(current!=player&&target.canUse(card,current)) eff+=get.effect(current,card,target,target)>0
                                });
                                if(eff>0||get.value(card)<3) return eff;
                                return 0;
                            }
                            else if(game.hasPlayer(function(current){
                                return current!=player&&target.canUse(card,current)&&get.effect(current,card,target,target)>0
                            })) return 1.5;
                            else if(get.value(card)<3) return -1;
                            return 0;
                        },
                    },
                },
            },
            "sgws_tianxing":{
                audio:"tianxing",
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                forced:true,
                unique:true,
                juexingji:true,
                skillAnimation:true,
                animationColor:"thunder",
                filter:function (event,player){
                    return true;
                },
                content:function (){
                    'step 0'
                    player.awakenSkill(event.name);
                    player.chooseControl('exlbrd','exsqzh','sgws_luanji','sgws_xingdong').set('prompt','选择获得一个技能').set('ai',function(){
                        var player=_status.event.player;
                        if(!player.hasSkill('luanji')&&!player.hasSkill('olluanji')&&player.getUseValue({name:'wanjian'})>4) return 'sgws_luanji';
                        if(!player.hasSkill('exsqzh')) return 'exsqzh';
                        if(!player.hasSkill('caopi_xingdong')) return 'sgws_xingdong';
                        return 'exlbrd';
                    });
                    'step 1'
                    player.addSkillLog(result.control);
                },
            },
            "sgws_guixin":{
                audio:"guixin",
                trigger:{
                    player:"damageEnd",
                },
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
                content:function (){
                    "step 0"
                    var targets=game.filterPlayer();
                    targets.remove(player);
                    targets.sort(lib.sort.seat);
                    event.targets=targets;
                    event.count=trigger.num;
                    "step 1"
                    event.num=0;
                    player.line(targets,'green');
                    "step 2"
                    if(num<event.targets.length){
                        if(!get.is.altered('guixin')){
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
                    "step 3"
                    event.count--;
                    if(event.count){
                        player.chooseBool(get.prompt2('sgws_guixin'));
                    }
                    else{
                        event.finish();
                    }
                    "step 4"
                    if(event.count&&result.bool){
                        event.goto(1);
                    }
                },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
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
            "sgws_guixin1":{
                trigger:{
                    global:"drawAfter",
                },
                audio:"guixin",
                forced:true,
                logTarget:"player",
                filter:function (event,player){
                    return event.result&&event.result.length>=2&&event.player!=player&&event.player.isEnemiesOf(player);
                },
                content:function (){
                    'step 0'
                    trigger.player.chooseCard(function(card){
                        return trigger.result.contains(card);
                    },'归心：交给'+get.translation(player)+'一张牌',true);
                    'step 1'
                    if(result.bool){
                        player.gain(result.cards,trigger.player);
                        trigger.player.$give(1,player);
                    }
                },
            },
            "sgws_xiongcai":{
                unique:true,
                trigger:{
                    player:"phaseAfter",
                },
                direct:true,
                init:function (player){
                    player.storage.sgws_xiongcai=[];
                },
                intro:{
                    content:"characters",
                },
                content:function (){
                    'step 0'
                    'step 1'
                    player.logSkill('sgws_xiongcai');
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
                        if(i.indexOf("sgws_")!=0) continue;
                        if(player.storage.sgws_xiongcai.contains(i)) continue;
                        if(list2.contains(i)) continue;
                        list.push(i);
                    }
                    var name=list.randomGet();
                    player.storage.sgws_xiongcai.push(name);
                    player.markSkill('sgws_xiongcai');
                    var skills=lib.character[name][3];
                    for(var i=0;i<skills.length;i++){
                        player.addSkill(skills[i]);
                    }
                    event.dialog=ui.create.dialog('<div class="text center">'+get.translation(player)+'发动了【雄才】',[[name],'character']);
                    game.delay(2);
                    'step 2'
                    event.dialog.close();
                },
            },
            "sgws_huo":{
                audio:"exhuo",
                trigger:{
                    source:"damageAfter",
                    player:"damageAfter",
                },
                init:function (player){
                    player.storage.sgws_huo=0;
                },
                forced:true,
                mark:true,
                marktext:"祸",
                intro:{
                    content:"祸",
                },
                content:function (){
                var num1=trigger.num;
                player.storage.sgws_huo+=(num1);
                player.markSkill('sgws_huo');
                player.syncStorage('sgws_huo');
                },
            },
            "sgws_huoshi":{
                audio:"exhuoshi",
                trigger:{
                    global:"gameStart",
                },
                forced:true,
                content:function (){
                    player.addSkill('sgws_huo');
                    player.addSkill('sgws_huoa');
                game.countPlayer(function(current){
                    if(current!=player&&player.hp>0&&current.isFriendsOf(player)){
                        player.line(current,'green');
                        current.addSkill('sgws_huo');
                        current.addSkill('sgws_huoa');
                        }
                    });
                },
            },
            "sgws_huoa":{
                audio:"exhuoa",
                trigger:{
                    source:"damageBefore",
                },
                forced:true,
                content:function (){
                    trigger.num+=(player.storage.sgws_huo);
                },
            },
            "sgws_qiangxi":{
                subSkill:{
                    off:{
                        sub:true,
                    },
                },
                audio:"reqiangxi",
                enable:"phaseUse",
                filterCard:function (card){
                    return get.subtype(card)=='equip1';
                },
                selectCard:function (){
                    return [0,1];
                },
                filterTarget:function (card,player,target){
                    if(player==target) return false;
                    if(target.hasSkill('sgws_qiangxi_off')) return false;
                    return player.inRange(target);
                },
                content:function (){
                    "step 0"
                    if(cards.length==0){
                        player.loseHp();
                    }
                    "step 1"
                    target.addTempSkill('sgws_qiangxi_off');
                    target.damage(2,'nocard');
                },
                check:function (card){
                    return 10-get.value(card);
                },
                position:"he",
                ai:{
                    order:8.5,
                    result:{
                        target:function (player,target){
                            if(!ui.selected.cards.length){
                                if(player.hp<2) return 0;
                                if(target.hp>=player.hp) return 0;
                            }
                            return get.damageEffect(target,player);
                        },
                    },
                },
                threaten:1.5,
            },
            "sgws_huangen":{
                trigger:{
                    global:"useCardToPlayered",
                },
                filter:function (event,player){
                    if(!event.isFirstTarget) return false;
                    if(get.type(event.card)!='trick') return false;
                    if(get.info(event.card).multitarget) return false;
                    if(event.targets.length<2) return false;
                    return player.hp>0;
                },
                direct:true,
                content:function (){
                        "step 0"
                        player.chooseTarget(get.prompt('sgws_huangen'),
                            [1,Math.min(player.hp,trigger.targets.length)],function(card,player,target){
                            return _status.event.targets.contains(target);
                        }).set('ai',function(target){
                            return -get.effect(target,trigger.card,trigger.player,_status.event.player);
                        }).set('targets',trigger.targets);
                        "step 1"
                        if(result.bool){
                            player.logSkill('sgws_huangen',result.targets);
                            trigger.excluded.addArray(result.targets);
                            player.draw(2);
                    }
                },
            },
            "sgws_tianming":{
                audio:"tianming",
                trigger:{
                    target:"useCardToTargeted",
                },
                check:function (event,player){
                    var cards=player.getCards('h');
                    if(cards.length<=2){
                        for(var i=0;i<cards.length;i++){
                            if(cards[i].name=='shan'||cards[i].name=='tao') return false;
                        }
                    }
                    return true;
                },
                filter:function (event,player){
                    return event.card.name=='sha';
                },
                content:function (){
                    "step 0"
                    player.chooseToDiscard(2,true,'he');
                    player.draw(3);
                    var players=game.filterPlayer();
                    players.sort(function(a,b){
                        return b.hp-a.hp;
                    });
                    if(players[0].hp>players[1].hp&&players[0]!=player){
                        players[0].chooseBool(get.prompt2('sgws_tianming'));
                        event.player=players[0];
                    }
                    else{
                        event.finish();
                    }
                    "step 1"
                    if(result.bool){
                        player.chooseToDiscard(2,true,'he');
                        player.draw(2);
                    }
                },
                ai:{
                    effect:{
                        target:function (card,player,target,current){
                            if(card.name=='sha') return [1,0.5];
                        },
                    },
                },
            },
            "sgws_moukui":{
                trigger:{
                    player:"useCardToPlayered",
                },
                direct:true,
                filter:function (event,player){
                    return event.card.name=='sha';
                },
                audio:"moukui",
                content:function (){
                    "step 0"
                    var controls=['draw_card'];
                    if(trigger.target.countCards('he')){
                        controls.push('discard_card');
                    }
                    controls.push('cancel');
                    player.chooseControl(controls).set('ai',function(){
                        var trigger=_status.event.getTrigger();
                        if(trigger.target.countCards('he')&&get.attitude(_status.event.player,trigger.target)<0){
                            return 'discard_card';
                        }
                        else{
                            return 'draw_card';
                        }
                    }).set('prompt',get.prompt2('sgws_moukui'));
                    "step 1"
                    if(result.control=='draw_card'){
                        player.draw(2);
                        player.logSkill('sgws_moukui');
                    }
                    else if(result.control=='discard_card'&&trigger.target.countCards('he')){
                        player.discardPlayerCard(trigger.target,'he',[1,2],true).logSkill=['sgws_moukui',trigger.target];
                    }
                    else event.finish();
                    "step 2"
                    player.addTempSkill('sgws_moukui2','shaEnd');
                },
                ai:{
                    expose:0.1,
                },
            },
            "sgws_moukui2":{
                audio:"ext:三国无双:false",
                trigger:{
                    player:"shaMiss",
                },
                forced:true,
                filter:function (event,player){
                    return player.countCards('he')>0;
                },
                content:function (){
                    trigger.target.discardPlayerCard(player,true);
                },
            },
            "sgws_benghuai":{
                audio:"benghuai",
                trigger:{
                    player:"phaseJieshuBegin",
                },
                forced:true,
                check:function (){
                    return false;
                },
                filter:function (event,player){
                    return !player.isMinHp()&&!player.hasSkill('rejiuchi_air')&&!player.hasSkill('oljiuchi_air');
                },
                content:function (){
                    "step 0"
                    player.chooseControl('baonue_hp','baonue_maxHp',function(event,player){
                        if(player.hp==player.maxHp) return 'baonue_hp';
                        if(player.hp<player.maxHp-1||player.hp<=2) return 'baonue_maxHp';
                        return 'baonue_hp';
                    }).set('prompt','崩坏：失去1点体力或减1点体力上限');
                    "step 1"
                    if(result.control=='baonue_hp'){
                        player.loseHp(2);
                    }
                    else{
                        player.loseMaxHp(2);
                    }
                },
                ai:{
                    threaten:0.5,
                    neg:true,
                },
            },
            "sgws_anzhao":{
                audio:"exanzhao",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
                    return player!=target;
                },
                filter:function (event,player){
                    return player.countCards('h')>1;
                },
                filterCard:true,
                selectCard:1,
                discard:false,
                lose:true,
                content:function (){
                    "step 0"
                    player.$give(cards.length,target);
                    target.gain(cards,player);
                    "step 1"
                    player.chooseControl('目标摸牌并获得【谋溃】至其回合结束','目标弃牌并获得【崩坏】至其回合结束');
                    "step 2"
                    if(result.control=='目标摸牌并获得【谋溃】至其回合结束'){
                        var num=(target.maxHp-target.hp);
                        target.draw(num);
                        target.addTempSkill('sgws_moukui',{player:'phaseAfter'});
                    }
                    else{
                        var num=target.hp;
                        target.chooseToDiscard('he',true,num);
                        target.addTempSkill('sgws_benghuai',{player:'phaseAfter'});
                    }
                },
            },
            "sgws_zhaolie":{
                trigger:{
                    player:"phaseDrawBegin2",
                },
                direct:true,
                audio:"nzry_jieying",
                filter:function (event,player){
                    return !event.numFixed;
                },
                content:function (){
                    'step 0'
                    player.chooseTarget(get.prompt2('sgws_zhaolie'),function(card,player,target){
                        return target!=player&&player.inRange(target);
                    }).set('ai',function(target){
                        var player=_status.event.player;
                        if(get.attitude(player,target)>0) return 0;
                        return get.damageEffect(target,player,player);
                    });
                    'step 1'
                    if(result.bool){
                        trigger.num--;
                        player.storage.sgws_zhaolie=result.targets[0];
                        player.logSkill('sgws_zhaolie',result.targets);
                        player.addTempSkill('sgws_zhaolie2','phaseDrawAfter');
                    }
                },
            },
            "sgws_zhaolie2":{
                trigger:{
                    player:"phaseDrawEnd",
                },
                forced:true,
                popup:false,
                audio:"nzry_jieying",
                content:function (){
                    'step 0'
                    event.cards=get.cards(4);
                    player.showCards(event.cards);
                    'step 1'
                    event.basic=[];
                    event.nonbasic=[];
                    event.todis=[];
                    for(var i=0;i<event.cards.length;i++){
                        if(get.type(event.cards[i])=='basic'){
                            if(event.cards[i].name=='tao'){
                                event.todis.push(event.cards[i]);
                            }
                            else{
                                event.basic.push(event.cards[i]);
                            }
                        }
                        else{
                            event.todis.push(event.cards[i]);
                            event.nonbasic.push(event.cards[i]);
                        }
                    }
                    game.cardsDiscard(event.todis);
                    var num=event.nonbasic.length;
                    if(num==0){
                        if(event.basic.length==0){
                            event.finish();
                            return;
                        }
                        player.storage.sgws_zhaolie.chooseTarget(function(card,player,target){
                            var source=_status.event.source;
                            return target==source||target==source.storage.sgws_zhaolie;
                        },true,'选择一个目标获得'+get.translation(event.basic)).set('ai',function(target){
                            return get.attitude(_status.event.player,target);
                        }).set('source',player);
                    }
                    else{
                        player.storage.sgws_zhaolie.chooseToDiscard(num,'he','弃置'+get.cnNumber(num)+
                        '张牌并令'+get.translation(player)+'拿牌，或受到'+get.cnNumber(num)+'点伤害并拿牌').set('ai',function(card){
                            var player=_status.event.player;
                            switch(_status.event.num){
                                case 1:return player.hp>1?0:7-get.value(card);
                                case 2:return 8-get.value(card);
                                case 3:return 10-get.value(card);
                                case 4:return 12-get.value(card);
                                default:return 0;
                            }
                        }).set('num',num);
                    }
                    'step 2'
                    var num=event.nonbasic.length;
                    var undone=false;
                    if(num==0){
                        if(event.basic.length){
                            result.targets[0].gain(event.basic,'gain2','log');
                        }
                    }
                    else{
                        if(result.bool){
                            if(event.basic.length){
                                player.gain(event.basic,'gain2','log');
                            }
                        }
                        else{
                            player.storage.sgws_zhaolie.damage(num);
                            if(event.basic.length){
                                undone=true;
                            }
                        }
                    }
                    if(!undone){
                        delete player.storage.sgws_zhaolie;
                        event.finish();
                    }
                    'step 3'
                    if(player.storage.sgws_zhaolie.isAlive()){
                        player.storage.sgws_zhaolie.gain(event.basic,'gain2','log');
                    }
                    else{
                        game.cardsDiscard(event.basic);
                    }
                    delete player.storage.sgws_zhaolie;
                },
            },
            "sgws_xiaoxiong":{
                trigger:{
                    global:"useCardAfter",
                },
                forced:true,
                unique:true,
                filter:function (event,player){
                    var type=get.type(event.card,'trick');
                    return event.player!=player&&(type=='basic'||type=='trick');
                },
                content:function (){
                    player.gain(game.createCard(trigger.card),'gain2');
                },
                group:"sgws_xiaoxiong_damage",
                subSkill:{
                    damage:{
                        trigger:{
                            global:"phaseJieshuBegin",
                        },
                        forced:true,
                        filter:function (event,player){
                            return event.player!=player&&event.player.countUsed()==0&&event.player.isEnemiesOf(player);
                        },
                        logTarget:"player",
                        content:function (){
                            trigger.player.damage();
                        },
                        sub:true,
                    },
                },
            },
            "sgws_xiansi":{
                audio:"xiansi",
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                direct:true,
                init:function (player){
                    if(!player.storage.sgws_xiansi) player.storage.sgws_xiansi=[];
                },
                content:function (){
                    "step 0"
                    player.chooseTarget(get.prompt2('sgws_xiansi'),[1,3],function(card,player,target){
                        return target.countCards('he')>0;
                    },function(target){
                        return -get.attitude(_status.event.player,target);
                    });
                    "step 1"
                    if(result.bool){
                        result.targets.sortBySeat();
                        player.logSkill('sgws_xiansi',result.targets);
                        event.targets=result.targets;
                    }
                    else{
                        event.finish();
                    }
                    "step 2"
                    if(event.targets.length){
                        var target=event.targets.shift();
                        event.current=target;
                        player.choosePlayerCard(target,true);
                    }
                    else{
                        event.finish();
                    }
                    "step 3"
                    if(result.bool){
                        player.storage.sgws_xiansi=player.storage.sgws_xiansi.concat(result.links);
                        player.markSkill('sgws_xiansi');
                        player.syncStorage('sgws_xiansi');
                        event.current.lose(result.links,ui.special,'toStorage');
                        event.current.$give(result.links,player,false);
                        event.goto(2);
                    }
                },
                intro:{
                    content:"cards",
                    onunmark:function (storage,player){
                        if(storage&&storage.length){
                            player.$throw(storage,1000);
                            game.cardsDiscard(storage);
                            game.log(storage,'被置入了弃牌堆');
                         storage.length=0;
                        }
                    },
                },
                ai:{
                    threaten:2,
                },
                global:"sgws_xiansi2",
            },
            "sgws_xiansi2":{
                enable:"chooseToUse",
                audio:"xiansi",
                viewAs:{
                    name:"sha",
                    isCard:true,
                },
                filter:function (event,player){
                    return game.hasPlayer(function(current){
                        return current.hasSkill('sgws_xiansi')&&current.storage.sgws_xiansi.length>1&&event.filterTarget({name:'sha'},player,current);
                    });
                },
                filterTarget:function (card,player,target){
                    var bool=false;
                    var players=ui.selected.targets.slice(0);
                    for(var i=0;i<players.length;i++){
                        if(players[i].hasSkill('sgws_xiansi')&&players[i].storage.sgws_xiansi.length>2) bool=true;break;
                    }
                    if(!bool&&(!target.hasSkill('sgws_xiansi')||target.storage.sgws_xiansi.length<=2)) return false;
                    return _status.event._backup.filterTarget.apply(this,arguments);
                },
                complexSelect:true,
                selectCard:-1,
                filterCard:function (){
                    return false;
                },
                forceaudio:true,
                direct:true,
                prompt:"弃置一名有【逆】的角色的三张【逆】，然后视为对包含其在内的角色使用【杀】。",
                delay:false,
                log:false,
                precontent:function (){
                    "step 0"
                    var targets=game.filterPlayer(function(current){
                        if(event.result.targets.contains(current)&&current.storage.sgws_xiansi){
                            return current.storage.sgws_xiansi.length>2;
                        }
                        return false;
                    });
                    if(targets.length==1){
                        event.target=targets[0];
                        event.goto(2);
                    }
                    else if(targets.length>0){
                        player.chooseTarget(true,'选择【陷嗣】的目标',function(card,player,target){
                            return _status.event.list.contains(target);
                        }).set('list',targets).set('ai',function(target){
                            var player=_status.event.player;
                            return get.attitude(player,target);
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
                        if(event.target.storage.sgws_xiansi.length==3){
                            event.directresult=event.target.storage.sgws_xiansi.slice(0);
                        }
                        else{
                            player.chooseCardButton('移去三张“逆”',3,event.target.storage.sgws_xiansi,true);
                        }
                    }
                    else{
                        event.finish();
                    }
                    "step 3"
                    if(event.directresult||result.bool){
                        player.logSkill('sgws_xiansi2',event.target);
                        var links=event.directresult||result.links;
                        for(var i=0;i<links.length;i++){
                            event.target.storage.sgws_xiansi.remove(links[i]);
                        }
                        event.target.syncStorage('sgws_xiansi');
                        if(!event.target.storage.sgws_xiansi.length){
                            event.target.unmarkSkill('sgws_xiansi');
                        }
                        else{
                            event.target.markSkill('sgws_xiansi');
                        }
                        event.target.$throw(links);
                        game.log(event.target,'被移去了',links);
                        game.cardsDiscard(links);
                    }
                },
                ai:{
                    order:function (){
                        return get.order({name:'sha'})+0.05;
                    },
                    yingbian:function (card,player,targets,viewer){
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
                    canLink:function (player,target,card){
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
                    result:{
                        target:function (player,target,card,isLink){
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
                        damage:function (card){
                            if(card.nature=='poison') return;
                            return 1;
                        },
                        natureDamage:function (card){
                            if(card.nature) return 1;
                        },
                        fireDamage:function (card,nature){
                            if(card.nature=='fire') return 1;
                        },
                        thunderDamage:function (card,nature){
                            if(card.nature=='thunder') return 1;
                        },
                        poisonDamage:function (card,nature){
                            if(card.nature=='poison') return 1;
                        },
                    },
                },
            },
            "sgws_zishou":{
                audio:"zishou",
                group:"sgws_zishou_zhiheng",
                trigger:{
                    player:"phaseDrawBegin2",
                },
                check:function (event,player){
                    return player.countCards('h')<=(player.hasSkill('zongshi')?player.maxHp:(player.hp-2))||player.skipList.contains('phaseUse')||!player.countCards('h',function(card){
                        return get.tag(card,'damage')&&player.hasUseTarget(card);
                    });
                },
                filter:function (event,player){
                    return !event.numFixed;
                },
                content:function (){
                    trigger.num+=game.countGroup();
                },
                ai:{
                    threaten:1.5,
                },
            },
            "sgws_zishou_zhiheng":{
                trigger:{
                    player:"phaseJieshuBegin",
                },
                direct:true,
                filter:function (event,player){
                    return player.countCards('h')>0;
                },
                content:function (){
                    'step 0'
                    var list=[];
                    var hs=player.getCards('h');
                    for(var i of hs){
                        list.add(get.suit(i,player));
                    }
                    player.chooseToDiscard('h',get.prompt('sgws_zishou'),'弃置任意张花色不同的手牌并摸等量的牌',[1,list.length],function(card,player){
                        if(ui.selected.cards.length){
                            var suit=get.suit(card,player);
                            for(var i of ui.selected.cards){
                                if(get.suit(i,player)==suit) return false;
                            }
                        }
                        return true;
                    }).set('ai',lib.skill.zhiheng.check).set('complexCard',true).logSkill='sgws_zishou';
                    'step 1'
                    if(result.bool){
                        player.draw(result.cards.length);
                    }
                },
            },
            "sgws_zongshi":{
                audio:"decadezongshi",
                group:"sgws_zongshi1",
                mod:{
                    maxHandcard:function (player,num){
                        return num+game.countGroup()+1;
                    },
                },
                trigger:{
                    target:"useCardToTargeted",
                },
                forced:true,
                filter:function (event,player){
                    return player!=_status.currentPhase&&player.countCards('h')>=player.hp&&
                    (get.type(event.card)=='delay'||get.color(event.card)=='nocolor');
                },
                content:function (){
                    trigger.excluded.add(player);
                },
                ai:{
                    effect:{
                        target:function (card,player,target){
                            if(target!=_status.currentPhase&&target.countCards('h')>=target.hp&&
                                (get.type(card)=='delay'||get.color(card)=='nocolor')) return 'zerotarget';
                        },
                    },
                },
            },
            "sgws_zongshi1":{
                audio:"rezongshi",
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                forced:true,
                filter:function (event,player){
                    return player.countCards('h')>player.hp;
                },
                content:function (){
                    player.addTempSkill('sgws_zongshi1_paoxiao');
                },
            },
            "sgws_zongshi1_paoxiao":{
                mod:{
                    cardUsable:function (card,player,num){
                        if(card.name=='sha') return Infinity;
                    },
                },
            },
            "sgws_jijiu":{
                mod:{
                    aiValue:function (player,card,num){
                        if(get.name(card)!='tao') return;
                        var cards=player.getCards('hs',function(card){
                            return get.name(card)=='tao';
                        });
                        cards.sort(function(a,b){
                            return (get.name(a)=='tao'?1:2)-(get.name(b)=='tao'?1:2);
                        });
                        var geti=function(){
                            if(cards.contains(card)){
                                return cards.indexOf(card);
                            }
                            return cards.length;
                        };
                        return Math.max(num,[6.5,4,3,2][Math.min(geti(),2)]);
                    },
                    aiUseful:function (){
                        return lib.skill.kanpo.mod.aiValue.apply(this,arguments);
                    },
                },
                locked:false,
                audio:"jijiu",
                enable:"chooseToUse",
                viewAsFilter:function (player){
                    return player!=_status.currentPhase&&player.countCards('hes')>0;
                },
                filterCard:function (card){
                    return true;
                },
                position:"hes",
                viewAs:{
                    name:"tao",
                },
                prompt:"将一张牌当桃使用",
                check:function (card){return 15-get.value(card)},
                ai:{
                    threaten:1.5,
                    basic:{
                        order:function (card,player){
                            if(player.hasSkillTag('pretao')) return 5;
                            return 2;
                        },
                        useful:[6.5,4,3,2],
                        value:[6.5,4,3,2],
                    },
                    result:{
                        target:2,
                        "target_use":function (player,target){
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
                    tag:{
                        recover:1,
                        save:1,
                    },
                },
            },
            "sgws_qingnang":{
                subSkill:{
                    off:{
                        sub:true,
                    },
                },
                audio:"qingnang",
                enable:"phaseUse",
                filterCard:true,
                check:function (card){
                    var player=_status.event.player;
                    if(game.countPlayer(function(current){
                        return (get.recoverEffect(current,player,player)>0&&get.attitude(player,current)>2);
                    })>1&&get.color(card)=='black'&&player.countCards('h',{color:'red'})>0) return 3-get.value(card);
                    return 9-get.value(card);
                },
                filter:function (event,player){
                    return true;
                },
                filterTarget:function (card,player,target){
                    if(target.hp>=target.maxHp||target.hasSkill('sgws_qingnang_off')) return false;
                    return true;
                },
                content:function (){
                    target.addTempSkill('sgws_qingnang_off');
                    target.recover();
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
            "sgws_chulao":{
                audio:"chulao",
                enable:"phaseUse",
                usable:2,
                filterTarget:function (card,player,target){
                    if(player==target) return false;
                    if(target.group=='unknown') return false;
                    for(var i=0;i<ui.selected.targets.length;i++){
                        if(ui.selected.targets[i].group==target.group) return false;
                    }
                    return target.countCards('he')>0;
                },
                filter:function (event,player){
                    return player.countCards('he')>0;
                },
                filterCard:true,
                position:"he",
                selectTarget:[1,Infinity],
                check:function (card){
                    if(get.suit(card)=='spade') return 8-get.value(card);
                    return 5-get.value(card);
                },
                content:function (){
                    "step 0"
                    if(num==0&&get.suit(cards[0])=='spade') player.draw();
                    player.choosePlayerCard(targets[num],'he',true);
                    "step 1"
                    if(result.bool){
                        if(result.links.length) targets[num].discard(result.links[0]);
                        if(get.suit(result.links[0])=='spade') targets[num].draw();
                    }
                },
                ai:{
                    result:{
                        target:-1,
                    },
                    threaten:1.2,
                    order:3,
                },
            },
            "sgws_guizhen":{
                audio:"guizhen",
                trigger:{
                    player:"loseEnd",
                },
                frequent:true,
                filter:function (event,player){
                    if(player.countCards('h')) return false;
                    for(var i=0;i<event.cards.length;i++){
                        if(event.cards[i].original=='h') return true;
                    }
                    return false;
                },
                content:function (){
                    "step 0"
                    var players=get.players(player);
                    players.remove(player);
                    event.players=players;
                    "step 1"
                    if(event.players.length){
                        var current=event.players.shift();
                        if(current.isEnemiesOf(player))
                        {
                            var hs=current.getCards('h');
                            if(hs.length){
                                current.lose(hs)._triggered=null;
                                current.$throw(hs);
                            }
                            else{
                                current.loseHp();
                            }
                        }
                        game.delay(0.5);
                        event.redo();
                    }
                },
            },
            "sgws_zongkui":{
                trigger:{
                    player:"phaseBefore",
                    global:"roundStart",
                },
                direct:true,
                audio:"zongkui",
                filter:function (event,player,name){
                    return game.hasPlayer(function(current){
                        if(name=='roundStart'&&!current.isMinHp()) return false;
                        return current!=player&&!current.hasMark('sgws_zongkui_mark');
                    });
                },
                content:function (){
                    'step 0'
                    var targets=game.filterPlayer(function(current){
                        if(event.triggername=='roundStart'&&!current.isMinHp()) return false;
                        return current!=player&&!current.hasMark('sgws_zongkui_mark');
                    });
                    if(event.triggername=='roundStart'&&targets.length==1){
                        event._result={bool:true,targets:targets};
                    }
                    else{
                        var next=player.chooseTarget(get.prompt('sgws_zongkui'),'令一到三名'+(event.triggername=='roundStart'?'体力值最小的':'')+'其他角色获得“傀”标记',[1,3],function(card,player,target){
                            if(_status.event.round&&!target.isMinHp()) return false;
                            return target!=player&&!target.hasMark('sgws_zongkui_mark');
                        }).set('ai',function(target){
                            var num=target.isMinHp()?0.5:1;
                            return num*get.threaten(target);
                        }).set('round',event.triggername=='roundStart');
                        if(event.triggername=='roundStart') next.set('forced',true);
                    }
                    'step 1'
                    if(result.bool){
                        player.logSkill('sgws_zongkui',result.targets);
                        for(var i of result.targets)
                            i.addMark('sgws_zongkui_mark',1);
                        game.delayx();
                    }
                },
                subSkill:{
                    mark:{
                        marktext:"傀",
                        intro:{
                            "name2":"傀",
                            content:"mark",
                        },
                        sub:true,
                    },
                },
                ai:{
                    combo:"sgws_guju",
                    threaten:1.4,
                },
            },
            "sgws_guju":{
                audio:"guju",
                trigger:{
                    global:"damageEnd",
                },
                forced:true,
                filter:function (event,player){
                    return event.player!=player&&event.player.isAlive()&&event.player.hasMark('sgws_zongkui_mark');
                },
                content:function (){
                    'step 0'
                    player.draw(3);
                    'step 1'
                    if(player.hasZhuSkill('sgws_bingzhao',trigger.player)&&trigger.player.group==player.storage.sgws_bingzhao&&trigger.player.isAlive()){
                        trigger.player.chooseBool('是否对'+get.translation(player)+'发动【秉诏】？').ai=function(){
                            return get.attitude(trigger.player,player)>1;
                        };
                    }
                    else event.finish();
                    'step 2'
                    if(result.bool){
                        trigger.player.logSkill('sgws_bingzhao',player);
                        player.draw();
                    }
                },
                ai:{
                    combo:"sgws_zongkui",
                },
            },
            "sgws_bingzhao":{
                audio:"bingzhao",
                unique:true,
                zhuSkill:true,
                forced:true,
                intro:{
                    content:function (group){
                        return '已选择了'+get.translation(group)+'势力'
                    },
                },
                trigger:{
                    global:["phaseBefore","zhuUpdate"],
                },
                filter:function (event,player){
                    return !player.storage.sgws_bingzhao&&player.hasZhuSkill('sgws_bingzhao')&&(event.name!='phase'||game.phaseNumber==0);
                },
                content:function (){
                    'step 0'
                    var list=lib.group.filter(function(group){
                        return ['wei','shu','wu','qun'].contains(group)||game.hasPlayer(function(current){
                            return current.group==group;
                        })
                    });
                    player.chooseControl(list).set('prompt','秉诏：请选择一个势力').set('ai',function(){
                        var listx=list.slice(0);
                        listx.sort(function(a,b){
                            return game.countPlayer(function(current){
                                return current!=player&&current.group==b;
                            })-game.countPlayer(function(current){
                                return current!=player&&current.group==a;
                            });
                        })
                        return listx[0];
                    });
                    'step 1'
                    var group=result.control;
                    player.popup(get.translation(group)+'势力',get.groupnature(group,'raw'));
                    game.log(player,'选择了','#y'+get.translation(group)+'势力');
                    player.storage.sgws_bingzhao=group;
                    player.markSkill('sgws_bingzhao');
                },
            },
            "sgws_canshi":{
                audio:"bmcanshi",
                group:["sgws_canshi_add","sgws_canshi_remove"],
                subSkill:{
                    add:{
                        audio:"bmcanshi",
                        trigger:{
                            player:"useCard2",
                        },
                        filter:function (event,player){
                            if(!event.targets||event.targets.length!=1) return false;
                            var info=get.info(event.card);
                            if(info.multitarget) return false;
                            if(info.allowMultiple==false) return false;
                            if(info.type=='equip') return false;
                            if(info.type=='delay') return false;
                            return game.hasPlayer(function(current){
                                if(!current.hasMark('sgws_zongkui_mark')) return false;
                                return !event.targets.contains(current)&&lib.filter.targetEnabled2(event.card,player,current);
                            });
                        },
                        direct:true,
                        content:function (){
                            'step 0'
                            player.chooseTarget(get.prompt2('sgws_canshi'),[1,Infinity],function(card,player,target){
                                if(!target.hasMark('sgws_zongkui_mark')) return false;
                                var trigger=_status.event.getTrigger();
                                return !trigger.targets.contains(target)&&lib.filter.targetEnabled2(trigger.card,player,target);
                            }).set('ai',function(target){
                                var player=_status.event.player;
                                return get.effect(target,_status.event.getTrigger().card,player,player);
                            });
                            'step 1'
                            if(result.bool){
                                if(!event.isMine()&&!event.isOnline()) game.delayx();
                                event.targets=result.targets.sortBySeat();
                            }
                            else{
                                event.finish();
                            }
                            'step 2'
                            player.logSkill('sgws_canshi',event.targets);
                            for(var i=0;i<event.targets.length;i++){
                                event.targets[i].removeMark('sgws_zongkui_mark',1);
                            }
                            trigger.targets.addArray(event.targets);
                        },
                        sub:true,
                    },
                    remove:{
                        audio:"bmcanshi",
                        trigger:{
                            target:"useCardToTarget",
                        },
                        check:function (event,player){
                            return get.attitude(event.player,player)<0&&get.effect(player,event.card,event.player,player)<0;
                        },
                        logTarget:"player",
                        filter:function (event,player){
                            if(!['basic','trick'].contains(get.type(event.card))) return false;
                            if(!event.targets||event.targets.length!=1) return false;
                            return event.player.hasMark('sgws_zongkui_mark');
                        },
                        content:function (){
                            trigger.targets.remove(player);
                            trigger.getParent().triggeredTargets2.remove(player);
                            game.delay();
                            trigger.player.removeMark('sgws_zongkui_mark');
                        },
                        sub:true,
                    },
                },
            },
            "sgws_fankui":{
                audio:"refankui",
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                filter:function (event,player){
                    return (event.source&&event.source.countGainableCards(player,'he')&&event.num>0&&event.source!=player);
                },
                content:function (){
                    "step 0"
                    event.count=trigger.num;
                    "step 1"
                    event.count--;
                    player.gainPlayerCard(get.prompt('sgws_fankui',trigger.source),trigger.source,get.buttonValue,'he',[1,2]).set('logSkill',[event.name,trigger.source]);
                    "step 2"
                    if(result.bool&&event.count>0&&trigger.source.countGainableCards(player,'he')>0) event.goto(1);
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
            "sgws_jizhi":{
                audio:"rejizhi",
                locked:false,
                trigger:{
                    player:"useCard",
                },
                frequent:true,
                filter:function (event){
                    return (get.type(event.card,'trick')=='trick'&&event.card.isCard);
                },
                init:function (player){
                    player.storage.sgws_jizhi=0;
                },
                content:function (){
                    'step 0'
                    player.draw(3);
                    'step 1'
                    event.card=result[0];
                    event.card1=result[1];
                    event.card2=result[2];
                    if(get.type(event.card)=='basic'){
                        player.chooseBool('是否弃置'+get.translation(event.card)+'并令本回合手牌上限+1？').set('ai',function(evt,player){
                            return _status.currentPhase==player&&player.needsToDiscard(-3)&&_status.event.value<6;
                        }).set('value',get.value(event.card,player));
                    }
                    else
                        event.goto(3);
                    'step 2'
                    if(result.bool){
                        player.discard(event.card);
                        player.storage.sgws_jizhi++;
                        if(_status.currentPhase==player){
                            player.markSkill('sgws_jizhi');
                        }
                    }
                    'step 3'
                    if(get.type(event.card1)=='basic'){
                        player.chooseBool('是否弃置'+get.translation(event.card1)+'并令本回合手牌上限+1？').set('ai',function(evt,player){
                            return _status.currentPhase==player&&player.needsToDiscard(-3)&&_status.event.value<6;
                        }).set('value',get.value(event.card1,player));
                    }
                    else
                        event.goto(5);
                    'step 4'
                    if(result.bool){
                        player.discard(event.card1);
                        player.storage.sgws_jizhi++;
                        if(_status.currentPhase==player){
                            player.markSkill('sgws_jizhi');
                        }
                    }
                    'step 5'
                    if(get.type(event.card2)=='basic'){
                        player.chooseBool('是否弃置'+get.translation(event.card2)+'并令本回合手牌上限+1？').set('ai',function(evt,player){
                            return _status.currentPhase==player&&player.needsToDiscard(-3)&&_status.event.value<6;
                        }).set('value',get.value(event.card2,player));
                    }
                    else
                        event.finish();
                    'step 6'
                    if(result.bool){
                        player.discard(event.card2);
                        player.storage.sgws_jizhi++;
                        if(_status.currentPhase==player){
                            player.markSkill('sgws_jizhi');
                        }
                    }
                },
                ai:{
                    threaten:1.4,
                    noautowuxie:true,
                },
                mod:{
                    maxHandcard:function (player,num){
                        return num+player.storage.sgws_jizhi;
                    },
                },
                intro:{
                    content:"本回合手牌上限+#",
                },
                group:"sgws_jizhi_clear",
                subSkill:{
                    clear:{
                        trigger:{
                            global:"phaseAfter",
                        },
                        silent:true,
                        content:function (){
                            player.storage.sgws_jizhi=0;
                            player.unmarkSkill('sgws_jizhi');
                        },
                        sub:true,
                        forced:true,
                        popup:false,
                    },
                },
            },
            "sgws_buchen":{
                audio:"buchen",
                trigger:{
                    player:"showCharacterAfter",
                },
                hiddenSkill:true,
                filter:function (event,player){
                    var target=_status.currentPhase;
                    return target&&target!=player&&target.countGainableCards(player,'he')>0;
                },
                direct:true,
                content:function (){
                    var target=_status.currentPhase;
                    player.gainPlayerCard(target,'he',get.prompt('sgws_buchen',target),[1,2]).set('logSkill',['buchen',target]);
                },
            },
            "sgws_yingshi":{
                audio:"smyyingshi",
                enable:"phaseUse",
                locked:true,
                filter:function (event,player){
                    return Array.isArray(event.sgws_yingshi);
                },
                onChooseToUse:function (event){
                    if(game.online||!event.player.hasSkill('sgws_yingshi')) return;
                    var cards=[];
                    for(var i=0;i<event.player.maxHp+1;i++){
                        var card=ui.cardPile.childNodes[i];
                        if(card) cards.push(card);
                        else break;
                    }
                    event.set('sgws_yingshi',cards);
                },
                chooseButton:{
                    dialog:function (event){
                        var dialog=ui.create.dialog('鹰视','hidden');
                        if(event.sgws_yingshi&&event.sgws_yingshi.length) dialog.add(event.sgws_yingshi);
                        else dialog.addText('牌堆无牌');
                        for(var i of dialog.buttons){
                            i.classList.add('noclick');
                        }
                        dialog.buttons.length=0;
                        return dialog;
                    },
                    filter:function (){
                        return false;
                    },
                },
            },
            "sgws_quanbian":{
                audio:"quanbian",
                preHidden:true,
                trigger:{
                    player:["useCard","respond"],
                },
                filter:function (event,player){
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
                content:function (){
                    'step 0'
                    var cards=get.cards(player.maxHp);
                    game.cardsGotoOrdering(cards);
                    var suit=get.suit(trigger.card);
                    var next=player.chooseToMove('权变：获得一张不为'+get.translation(suit)+'花色的牌并排列其他牌');
                    next.set('suit',suit);
                    next.set('list',[
                        ['牌堆顶',cards],
                        ['获得'],
                    ])
                    next.set('filterMove',function(from,to,moved){
                        var suit=_status.event.suit;
                        if(moved[0].contains(from.link)){
                            if(typeof to=='number'){
                                if(to==1){
                                    if(moved[1].length) return false;
                                    return get.suit(from.link,false)!=suit;
                                }
                                return true;
                            }
                            if(moved[1].contains(to.link)) return get.suit(from.link,false)!=suit;
                            return true;
                        }
                        else{
                            if(typeof to=='number') return true;
                            return get.suit(to.link,false)!=suit;
                        }
                    });
                    next.set('processAI',function(list){
                        var cards=list[0][1].slice(0).sort(function(a,b){
                            return get.value(b)-get.value(a);
                        }),gains=[];
                        for(var i of cards){
                            if(get.suit(i,false)!=_status.event.suit){
                                cards.remove(i);
                                gains.push(i);
                                break;
                            }
                        }
                        return [cards,gains];
                    });
                    'step 1'
                    if(result.bool){
                        var list=result.moved;
                        if(list[1].length) player.gain(list[1],'gain2');
                        while(list[0].length){
                            ui.cardPile.insertBefore(list[0].pop(),ui.cardPile.firstChild);
                        }
                        game.updateRoundNumber();
                    }
                },
            },
            "sgws_konghun":{
                audio:"boss_skonghun",
                trigger:{
                    player:"phaseUseBegin",
                },
                filter:function (event,player){
                    var num=player.maxHp-player.hp;
                    if(num==0) return false;
                    for(var i=0;i<game.players.length;i++){
                        if(game.players[i].isEnemiesOf(player)){
                            num--;
                        }
                    }
                    return num>=0;
                },
                forced:true,
                content:function (){
                    'step 0'
                    var targets=game.filterPlayer(function(current){
                        return current.isEnemiesOf(player);
                    });
                    targets.sort(lib.sort.seat);
                    event.targets=targets;
                    player.line(targets,'thunder');
                    event.num=targets.length;
                    'step 1'
                    if(event.targets.length){
                        event.targets.shift().damage('thunder');
                        event.redo();
                    }
                    'step 2'
                    player.recover(event.num);
                },
                ai:{
                    threaten:function (player,target){
                        if(target.hp==1) return 2;
                        if(target.hp==2&&game.players.length<8) return 1.5;
                        return 0.5;
                    },
                },
            },
            "sgws_langgu":{
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event,player){
                    return get.itemtype(event.source)=='player';
                },
                logTarget:"source",
                content:function (){
                    'step 0'
                    player.judge();
                    'step 1'
                    if(trigger.source.countCards('h')>0){
                        var next=player.discardPlayerCard(trigger.source,'h',[1,Infinity]);
                        next.set('color',result.color);
                        next.set('filterButton',function(button){
                            return get.color(button.link)==_status.event.color;
                        });
                        next.set('visible',true);
                    }
                },
                group:"sgws_langgu_rewrite",
            },
            "sgws_langgu_rewrite":{
                trigger:{
                    player:"judge",
                },
                filter:function (event,player){
                    return player.countCards('hs')>0&&event.getParent().name=='sgws_langgu';
                },
                direct:true,
                content:function (){
                    "step 0"
                    player.chooseCard('狼顾的判定结果为'+
                    get.translation(trigger.player.judging[0])+'，是否打出一张手牌进行代替？','hs',function(card){
                        var player=_status.event.player;
                        var mod2=game.checkMod(card,player,'unchanged','cardEnabled2',player);
                        if(mod2!='unchanged') return mod2;
                        var mod=game.checkMod(card,player,'unchanged','cardRespondable',player);
                        if(mod!='unchanged') return mod;
                        return true;
                    }).set('ai',function(card){
                        return -1;
                    });
                    "step 1"
                    if(result.bool){
                        player.respond(result.cards,'highlight','sgws_langgu','noOrdering');
                    }
                    else{
                        event.finish();
                    }
                    "step 2"
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
            },
            "sgws_tuishi":{
                audio:"tuishi",
                trigger:{
                    player:"showCharacterAfter",
                },
                forced:true,
                filter:function (event,player){
                    var target=_status.currentPhase;
                    return player!=target&&target&&target.isAlive()&&event.toShow;
                },
                content:function (){
                    player.addTempSkill('sgws_tuishi2');
                },
            },
            "sgws_tuishi2":{
                trigger:{
                    global:"phaseEnd",
                },
                direct:true,
                filter:function (event,player){
                    var target=_status.currentPhase;
                    return target!=player&&target&&target.isAlive()&&game.hasPlayer(function(current){
                        return current!=target&&target.inRange(current);
                    });
                },
                content:function (){
                    'step 0'
                    var target=_status.currentPhase;
                    event.target=target;
                    player.chooseTarget(get.prompt2('sgws_tuishi',event.target),function(card,player,target){
                        var source=_status.event.source;
                        return source!=target&&source.inRange(target);
                    }).set('source',target).set('goon',get.damageEffect(target,player,player)>0).set('ai',function(target){
                        if(!_status.event.goon) return 0;
                        var evt=_status.event;
                        return get.effect(target,{name:'sha'},evt.source,evt.player)
                    });
                    'step 1'
                    if(result.bool){
                        event.target2=result.targets[0];
                        player.logSkill('sgws_tuishi');
                        player.line2([target,event.target2]);
                        game.delayx();
                    }
                    else event.finish();
                    'step 2'
                    target.chooseToUse({
                        preTarget:event.target2,
                        prompt:'请对'+get.translation(event.target2)+'使用一张【杀】，或受到来自'+get.translation(player)+'的一点伤害',
                        filterCard:function(card,player){
                            return get.name(card)=='sha'&&lib.filter.filterCard.apply(this,arguments);
                        },
                        filterTarget:function(card,player,target){
                            return target==_status.event.preTarget&&lib.filter.filterTarget.apply(this,arguments);
                        },
                        addCount:false,
                    });
                    'step 3'
                    if(!result.bool) target.damage(2);
                },
            },
            "sgws_choufa":{
                audio:"choufa",
                inherit:"choufa",
                usable:2,
                content:function (){
                    'step 0'
                    player.choosePlayerCard(target,'h',true);
                    'step 1'
                    player.showCards(result.cards,get.translation(player)+'对'+get.translation(target)+'发动了【筹伐】');
                    var type=get.type2(result.cards[0],target),hs=target.getCards('h',function(card){
                        return card!=result.cards[0]&&get.type2(card,target)!=type;
                    });
                    if(hs.length){
                        target.addGaintag(hs,'sgws_choufa');
                        target.addTempSkill('sgws_choufa2',{player:'phaseAfter'});
                    }
                },
                enable:"phaseUse",
                filter:function (event,player){
                    return game.hasPlayer(function(current){
                        return lib.skill.choufa.filterTarget(null,player,current);
                    });
                },
                filterTarget:function (card,player,target){
                    return target!=player&&!target.hasSkill('choufa2')&&target.countCards('h')>0;
                },
                ai:{
                    order:9,
                    result:{
                        target:function (player,target){
                            return -target.countCards('h');
                        },
                    },
                },
            },
            "sgws_choufa2":{
                charlotte:true,
                onremove:function (player){
                    player.removeGaintag('sgws_choufa');
                },
                mod:{
                    cardname:function (card){
                        if(get.itemtype(card)=='card'&&card.hasGaintag('sgws_choufa')) return 'sha';
                    },
                    cardnature:function (card){
                        if(get.itemtype(card)=='card'&&card.hasGaintag('sgws_choufa')) return false;
                    },
                },
            },
            "sgws_zhaoran":{
                audio:"zhaoren",
                trigger:{
                    player:"phaseUseBegin",
                },
                preHidden:true,
                content:function (){
                    player.addTempSkill('sgws_zhaoran2','phaseUseEnd');
                },
            },
            "sgws_zhaoran2":{
                audio:"zhaoran",
                global:"sgws_zhaoran3",
                trigger:{
                    player:"loseAfter",
                    global:["equipAfter","addJudgeAfter","gainAfter","loseAsyncAfter"],
                },
                forced:true,
                charlotte:true,
                init:function (player,skill){
                    if(!player.storage[skill]) player.storage[skill]=[];
                },
                onremove:true,
                filter:function (event,player){
                    var evt=event.getl(player);
                    if(!evt||!evt.hs||!evt.hs.length) return false;
                    var list=player.getStorage('sgws_zhaoran2');
                    for(var i of evt.hs){
                        var suit=get.suit(i,player);
                        if(!list.contains(suit)&&!player.countCards('h',{suit:suit})) return true;
                    }
                    return false;
                },
                content:function (){
                    'step 0'
                    if(trigger.delay===false) game.delayx();
                    var list=[];
                    var suits=get.copy(player.storage.sgws_zhaoran2);
                    suits.addArray(player.getCards('h').map(function(card){
                        return get.suit(card);
                    }));
                    var evt=trigger.getl(player);
                    for(var i of evt.hs){
                        var suit=get.suit(i,player);
                        if(!suits.contains(suit)) list.add(suit);
                    }
                    event.count=list.length;
                    player.markAuto('sgws_zhaoran2',list);
                    'step 1'
                    event.count--;
                    var filterTarget=function(card,player,target){
                        return target!=player&&target.countDiscardableCards(player,'he')>0;
                    }
                    if(!game.hasPlayer(function(current){
                        return filterTarget(null,player,current);
                    })) event._result={bool:false};
                    else player.chooseTarget(filterTarget,'弃置一名其他角色的一到两张牌或摸两张牌').set('ai',function(target){
                        var att=get.attitude(player,target);
                        if(att>=0) return 0;
                        if(target.countCards('he',function(card){
                            return get.value(card)>5;
                        })) return -att;
                        return 0;
                    });
                    'step 2'
                    if(!result.bool) player.draw(2);
                    else{
                        var target=result.targets[0];
                        player.line(target,'green');
                        player.discardPlayerCard(target,true,'he',[1,2]);
                    }
                    if(event.count>0) event.goto(1);
                },
                intro:{
                    content:"已因$牌触发过效果",
                },
            },
            "sgws_zhaoran3":{
                ai:{
                    viewHandcard:true,
                    skillTagFilter:function (player,arg,target){
                        return target!=player&&target.hasSkill('sgws_zhaoran2');
                    },
                },
            },
            "sgws_daigong":{
                usable:2,
                audio:"xinfu_daigong",
                trigger:{
                    player:"damageBegin4",
                },
                filter:function (event,player){
                    return event.source!=undefined&&player.countCards('h')>0;
                },
                content:function (){
                    'step 0'
                    player.showHandcards();
                    'step 1'
                    var cards=player.getCards('h');
                    var suits=[];
                    for(var i=0;i<cards.length;i++){
                        suits.add(get.suit(cards[i]));
                    }
                    trigger.source.chooseCard('he','交给'+get.translation(player)+'一张满足条件的牌，否则防止此伤害。',function(card){
                        return !_status.event.suits.contains(get.suit(card));
                    }).set('suits',suits).ai=function(card){
                        var player=_status.event.player;
                        var target=_status.event.getParent('sgws_daigong').player;
                        if(get.damageEffect(target,player,player)>0) return 6.5-get.value(card);
                        return 0;
                    };
                    'step 2'
                    if(result.bool){
                        trigger.source.give(result.cards,player,true);
                    }
                    else trigger.cancel();
                },
            },
            "sgws_zhaoxin":{
                group:["sgws_zhaoxin_give"],
                intro:{
                    content:"cards",
                    onunmark:function (storage,player){
                        if(storage&&storage.length){
                            player.$throw(storage,1000);
                            game.cardsDiscard(storage);
                            game.log(storage,'被置入了弃牌堆');
                         storage.length=0;
                        }
                    },
                },
                enable:"phaseUse",
                usable:1,
                audio:"xinfu_zhaoxin",
                init:function (player,skill){
                    if(!player.storage[skill]) player.storage[skill]=[];
                },
                filter:function (event,player){
                    return player.storage.sgws_zhaoxin.length<3&&player.countCards('h')>0;
                },
                visible:true,
                filterCard:true,
                selectCard:function (){
                    var player=_status.event.player;
                    return [1,4-player.storage.sgws_zhaoxin.length];
                },
                discard:false,
                toStorage:true,
                delay:false,
                content:function (){
                    'step 0'
                    //player.lose(cards,ui.special,'toStorage')
                    player.$give(cards,player,false);
                    player.storage.sgws_zhaoxin=player.storage.sgws_zhaoxin.concat(cards);
                    player.markSkill('sgws_zhaoxin');
                    'step 1'
                    player.draw(cards.length);
                },
                check:function (card){
                    return 6-get.value(card);
                },
                ai:{
                    order:1,
                    result:{
                        player:1,
                    },
                },
            },
            "sgws_zhaoxin_give":{
                trigger:{
                    global:"phaseDrawAfter",
                },
                filter:function (event,player){
                    if(!player.storage.sgws_zhaoxin||!player.storage.sgws_zhaoxin.length) return false;
                    return player==event.player||player.inRange(event.player);
                },
                direct:true,
                content:function (){
                    'step 0'
                    player.chooseCardButton(get.prompt('sgws_zhaoxin',trigger.player),player.storage.sgws_zhaoxin,function(button){
                        return true;
                    }).set('ai',function(button){
                        return 1+Math.random();
                    });
                    'step 1'
                    if(result.bool){
                        event.card=result.links[0];
                        player.logSkill('sgws_zhaoxin',target);
                        player.line(trigger.player,'thunder');
                        player.showCards(event.card);
                    }
                    else event.finish();
                    'step 2'
                    trigger.player.chooseBool('是否获得'+get.translation(event.card)+'?').ai=function(){
                        return get.attitude(trigger.player,player)>0;
                    };
                    'step 3'
                    if(result.bool){
                        player.storage.sgws_zhaoxin.remove(event.card);
                        player.$give(event.card,trigger.player);
                        trigger.player.gain(event.card,'fromStorage');
                        if(player.storage.sgws_zhaoxin.length) player.markSkill('sgws_zhaoxin');
                        else player.unmarkSkill('sgws_zhaoxin');
                        player.chooseBool('是否对'+get.translation(trigger.player)+'造成一点伤害？').ai=function(){
                            return get.damageEffect(trigger.player,player,player)>0
                        };
                    }
                    else{
                        trigger.player.chat('拒绝');
                        event.finish();
                    }
                    'step 4'
                    if(result.bool){
                        trigger.player.damage('nocard');
                    }
                },
            },
            "sgws_liyu":{
                audio:"liyu",
                trigger:{
                    source:"damageSource",
                },
                filter:function (event,player){
                    if(event._notrigger.contains(event.player)) return false;
                    return event.card&&event.card.name=='sha'&&event.player!=player&&event.player.isAlive()&&event.player.countGainableCards(player,'hej')>0;
                },
                direct:true,
                content:function (){
                    'step 0'
                    player.gainPlayerCard(get.prompt('sgws_liyu',trigger.player),trigger.player,'hej','visibleMove').set('ai',function(card){
                        var player=_status.event.player;
                        var evt=_status.event.target;
                        if(get.attitude(player,evt)>0&&get.position(card)=='j') return 4+get.value(card);
                        if(get.type(card)=='equip'){
                            if(get.attitude(player,evt)>0&&game.hasPlayer(function(current){
                                return (player.canUse({name:'juedou'},current)&&current!=evt.target&&get.effect(current,{name:'juedou'},player,player)>2);
                            })){
                                return 5;
                            }
                            else if(game.hasPlayer(function(current){
                                return (player.canUse({name:'juedou'},current)&&current!=evt&&current!=player&&get.effect(current,{name:'juedou'},player,player)<0);
                            })){
                                return 1;
                            }
                            else return 4;
                        };
                        return 3;
                    }).set('logSkill',['sgws_liyu',trigger.player]);
                    'step 1'
                    if(result.bool){
                        if(get.type(result.cards[0])!='equip')
                            trigger.player.draw();
                        event.finish();
                    }
                    else event.finish();
                    'step 2'
                    if(result.targets){
                        player.useCard({name:'juedou',isCard:true},result.targets[0],'noai');
                    }
                },
                ai:{
                    halfneg:true,
                },
            },
            "sgws_wuqian":{
                audio:"ol_wuqian",
                enable:"phaseUse",
                filter:function (event,player){
                    return true;
                },
                filterTarget:function (card,player,target){
                    return target!=player&&!target.hasSkill('sgws_wuqian_targeted');
                },
                content:function (){
                    player.storage.sgws_wuqian_target=target;
                    player.addTempSkill('sgws_wuqian_target');
                    target.addTempSkill('sgws_wuqian_targeted');
                },
                subSkill:{
                    equip:{
                        ai:{
                            unequip:true,
                            skillTagFilter:function (player,tag,arg){
                                if(arg&&arg.target&&arg.target.hasSkill('sgws_wuqian_targeted')) return true;
                                return false;
                            },
                        },
                        sub:true,
                    },
                    targeted:{
                        ai:{
                            "unequip2":true,
                        },
                        sub:true,
                    },
                    target:{
                        mark:"character",
                        onremove:true,
                        intro:{
                            content:"$防具失效直到回合结束",
                        },
                        sub:true,
                    },
                },
            },
            "sgws_shenfen":{
                audio:"ol_shenfen",
                enable:"phaseUse",
                filter:function (event,player){
                    return true;
                },
                usable:1,
                skillAnimation:true,
                animationColor:"metal",
                content:function (){
                    "step 0"
                    event.delay=false;
                    event.targets=game.filterPlayer();
                    event.targets.remove(player);
                    event.targets.sort(lib.sort.seat);
                    player.line(event.targets,'green');
                    event.targets2=event.targets.slice(0);
                    event.targets3=event.targets.slice(0);
                    "step 1"
                    if(event.targets2.length){
                        event.targets2.shift().damage('nocard');
                        event.redo();
                    }
                    "step 2"
                    if(event.targets.length){
                        event.current=event.targets.shift()
                        if(event.current.countCards('e')) event.delay=true;
                        event.current.discard(event.current.getCards('e')).delay=false;
                    }
                    "step 3"
                    if(event.delay) game.delay(0.5);
                    event.delay=false;
                    if(event.targets.length) event.goto(2);
                    "step 4"
                    if(event.targets3.length){
                        var target=event.targets3.shift();
                        target.chooseToDiscard(4,'h',true).delay=false;
                        if(target.countCards('h')) event.delay=true;
                    }
                    "step 5"
                    if(event.delay) game.delay(0.5);
                    event.delay=false;
                    if(event.targets3.length) event.goto(4);
                },
                ai:{
                    order:10,
                    result:{
                        player:function (player){
                            return game.countPlayer(function(current){
                                if(current!=player){
                                    return get.sgn(get.damageEffect(current,player,player));
                                }
                            });
                        },
                    },
                },
            },
            "sgws_jingjia":{
                audio:"baonu",
                trigger:{
                    global:"phaseBefore",
                    player:"enterGame",
                },
                forced:true,
                locked:false,
                filter:function (event,player){
                    return (event.name!='phase'||game.phaseNumber==0);
                },
                content:function (){
                    'step 0'
                    var i=0;
                    var list=[];
                    while(i++<5){
                        var card=get.cardPile(function(card){
                            if(get.type(card)!='equip'||get.subtype(card)=='equip9') return false;
                            if(list.length==0)
                                return true;
                            else
                            {
                                for(let j=list.length-1;j>-1;j--)
                                    if(get.subtype(card)==get.subtype(list[j]))
                                        return false;
                                return true;
                            }

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
            },
            "sgws_xuanfeng":{
                audio:"xuanfeng",
                trigger:{
                    player:["loseAfter","phaseDiscardEnd"],
                    global:["equipAfter","addJudgeAfter","gainAfter","loseAsyncAfter"],
                },
                direct:true,
                filter:function (event,player){
                    if(_status.dying.length) return false;
                    if(event.name=='phaseDiscard'){
                        var cards=[];
                        player.getHistory('lose',function(evt){
                            if(evt&&evt.type=='discard'&&evt.getParent('phaseDiscard')==event&&evt.hs) cards.addArray(evt.hs);
                        });
                        return cards.length>1;
                    }
                    else{
                        var evt=event.getl(player);
                        return evt&&evt.es&&evt.es.length>0;
                    }
                },
                content:function (){
                    "step 0"
                    event.count=2;
                    event.targets=[];
                    event.logged=false;
                    "step 1"
                    event.count--;
                    player.chooseTarget(get.prompt('sgws_xuanfeng'),'弃置一名其他角色的一张牌',function(card,player,target){
                        if(player==target) return false;
                        return target.countDiscardableCards(player,'he');
                    }).set('ai',function(target){
                        return -get.attitude(_status.event.player,target);
                    });
                    "step 2"
                    if(result.bool){
                        if(!event.logged){
                            player.logSkill('sgws_xuanfeng',result.targets);
                            event.logged=true;
                        }
                        else player.line(result.targets[0],'green');
                        targets.add(result.targets[0]);
                        player.discardPlayerCard(result.targets[0],'he',true);
                    }
                    else if(!targets.length) event.finish();
                    "step 3"
                    if(event.count) event.goto(1);
                    else if(player==_status.currentPhase){
                        player.chooseTarget('是否对一名目标角色造成两点伤害',function(card,player,target){
                            return _status.event.targets.contains(target);
                        }).set('targets',targets).set('ai',function(target){
                            var player=_status.event.player;
                            return get.damageEffect(target,player,player);
                        });
                    }
                    else event.finish();
                    "step 4"
                    if(result.bool){
                        player.line(result.targets[0],'thunder');
                        result.targets[0].damage(2);
                    }
                },
                ai:{
                    effect:{
                        "player_use":function (card,player,target){
                            if(player==target&&get.type(card)=='equip'&&player.countCards('hes',function(cardx){
                                return card!=cardx&&(!card.cards||!card.cards.contains(cardx))&&(player.hasSkill('yongjin')||get.subtype(card)==get.subtype(cardx))&&(get.position(cardx)=='e'||player.canUse(cardx,player));
                            })>0) return;
                            if(!game.hasPlayer(function(current){
                                return get.attitude(player,current)<0&&current.countDiscardableCards(player,'he')>0&&get.damageEffect(current,player,player)>0;
                            })) return;
                            if(typeof card=='object'&&player.isPhaseUsing()&&
                            player.needsToDiscard()==2&&card.cards&&card.cards.filter(function(i){
                                return get.position(i)=='h';
                            }).length>0&&!get.tag(card,'draw')&&!get.tag(card,'gain')&&!(get.tag(card,'discard')&&target==player&&player.countCards('e')>0)) return 'zeroplayertarget';
                        },
                        target:function (card,player,target,current){
                            if(get.type(card)=='equip'&&!get.cardtag(card,'gifts')) return [1,3];
                            if(get.tag(card,'damage')&&target.hp>2){
                                var num1=target.countCards('h'),num2=target.getHandcardLimit();
                                if(num1>num2) return [1,1];
                                if(num1==num2) return [1.1,_status.event.player==target?3:0.5];
                                if(num1==num2-1) return [0.1,_status.event.player==target?4.5:0.1];
                            }
                            if(typeof card=='object'&&(card.name=='shunshou'||card.name=='guohe'||card.name=='zhujinqiyuan')&&target.countCards('h')>0&&get.attitude(player,target)<0) return [1,-1];
                        },
                    },
                    reverseEquip:true,
                    noe:true,
                    expose:0.2,
                },
            },
            "sgws_jiwu":{
                audio:"jiwu",
                enable:"phaseUse",
                filter:function (event,player){
                    if(player.countCards('h')==0) return false;
                    if(!player.hasSkill('sgws_qiangxi')) return true;
                    if(!player.hasSkill('retieji')) return true;
                    if(!player.hasSkill('sgws_xuanfeng')) return true;
                    if(!player.hasSkill('rewansha')) return true;
                    return false;
                },
                filterCard:true,
                position:"he",
                check:function (card){
                    if(get.position(card)=='e'&&_status.event.player.hasSkill('sgws_xuanfeng')) return 16-get.value(card);
                    return 7-get.value(card);
                },
                content:function (){
                    'step 0'
                    var list=[];
                    if(!player.hasSkill('sgws_qiangxi')) list.push('sgws_qiangxi');
                    if(!player.hasSkill('retieji')) list.push('retieji');
                    if(!player.hasSkill('sgws_xuanfeng')) list.push('sgws_xuanfeng');
                    if(!player.hasSkill('rewansha')) list.push('rewansha');
                    if(list.length==1){
                        player.addTempSkill(list[0]);
                        event.finish();
                    }
                    else{
                        player.chooseControl(list,function(){
                            if(list.contains('sgws_xuanfeng')&&player.countCards('he',{type:'equip'})) return 'sgws_xuanfeng';
                            if(!player.getStat().skill.sgws_qiangxi){
                                if(player.hasSkill('sgws_qiangxi')&&player.getEquip(1)&&list.contains('sgws_xuanfeng')) return 'sgws_xuanfeng';
                                if(list.contains('rewansha')||list.contains('sgws_qiangxi')){
                                    var players=game.filterPlayer();
                                    for(var i=0;i<players.length;i++){
                                        if(players[i].hp==1&&get.attitude(player,players[i])<0){
                                            if(list.contains('rewansha')) return 'rewansha';
                                            if(list.contains('sgws_qiangxi')) return 'sgws_qiangxi';
                                        }
                                    }
                                }
                            }
                            if(list.contains('sgws_qiangxi')) return 'sgws_qiangxi';
                            if(list.contains('rewansha')) return 'rewansha';
                            if(list.contains('sgws_xuanfeng')) return 'sgws_xuanfeng';
                            return 'retieji';
                        }).set('prompt','选择获得一项技能直到回合结束');
                    }
                    'step 1'
                    player.addTempSkill(result.control);
                    player.popup(get.translation(result.control));
                },
                ai:{
                    order:function (){
                        var player=_status.event.player;
                        if(player.countCards('e',{type:'equip'})) return 10;
                        if(!player.getStat().skill.sgws_qiangxi){
                            if(player.hasSkill('sgws_qiangxi')&&player.getEquip(1)&&!player.hasSkill('sgws_xuanfeng')) return 10;
                            if(player.hasSkill('wansha')) return 1;
                            var players=game.filterPlayer();
                            for(var i=0;i<players.length;i++){
                                if(players[i].hp==1&&get.attitude(player,players[i])<0) return 10;
                            }
                        }
                        return 1;
                    },
                    result:{
                        player:function (player){
                            if(player.countCards('e',{type:'equip'})) return 1;
                            if(!player.getStat().skill.sgws_qiangxi){
                                if(player.hasSkill('sgws_qiangxi')&&player.getEquip(1)&&!player.hasSkill('sgws_xuanfeng')) return 1;
                                if(!player.hasSkill('wansha')||!player.hasSkill('sgws_qiangxi')){
                                    var players=game.filterPlayer();
                                    for(var i=0;i<players.length;i++){
                                        if(players[i].hp==1&&get.attitude(player,players[i])<0) return 1;
                                    }
                                }
                            }
                            return 0;
                        },
                    },
                },
            },
            "sgws_botu":{
                audio:"botu",
                trigger:{
                    player:"phaseAfter",
                },
                frequent:true,
                filter:function (event,player){
                    var history=player.getHistory('useCard',function(evt){
                        return evt.isPhaseUsing();
                    });
                    var suits=[];
                    for(var i=0;i<history.length;i++){
                        var suit=get.suit(history[i].card);
                        if(suit) suits.add(suit);
                    }
                    return suits.length>=3;
                },
                content:function (){
                    player.insertPhase();
                },
            },
            "sgws_qianxun":{
                mod:{
                    targetEnabled:function (card,player,target,now){
                        if(card.name=='shunshou'||card.name=='lebu'||card.name=='bingliang') return false;
                    },
                },
                audio:"qianxun",
            },
            "sgws_jiang":{
                shaRelated:true,
                audio:"jiang",
                preHidden:true,
                trigger:{
                    player:"useCardToPlayered",
                    target:"useCardToTargeted",
                },
                filter:function (event,player){
                    if(!(event.card.name=='juedou'||(event.card.name=='sha'&&get.color(event.card)=='red'))) return false;
                    return player==event.target||event.getParent().triggeredTargets3.length==1;
                },
                frequent:true,
                content:function (){
                    player.draw(2);
                },
                ai:{
                    effect:{
                        target:function (card,player,target){
                            if(card.name=='sha'&&get.color(card)=='red') return [1,0.6];
                        },
                        player:function (card,player,target){
                            if(card.name=='sha'&&get.color(card)=='red') return [1,1];
                        },
                    },
                },
            },
            "sgws_tanhu":{
                audio:"tanhu",
                enable:"phaseUse",
                usable:2,
                filterTarget:function (card,player,target){
                    return player.canCompare(target);
                },
                filter:function (event,player){
                    return player.countCards('h')>0;
                },
                content:function (){
                    'step 0'
                    player.chooseToCompare(target);
                    'step 1'
                    if(result.bool){
                        target.addTempSkill('sgws_tanhu2');
                    }
                },
                ai:{
                    result:{
                        target:function (player,target){
                            var hs=player.getCards('h');
                            if(hs.length<3) return 0;
                            var bool=false;
                            for(var i=0;i<hs.length;i++){
                                if(hs[i].number>=9&&get.value(hs[i])<7){
                                    bool=true;
                                    break;
                                }
                            }
                            if(!bool) return 0;
                            return -1;
                        },
                    },
                    order:9,
                },
                group:"sgws_tanhu3",
            },
            "sgws_tanhu2":{
                mark:true,
                intro:{
                    content:"已成为探虎目标",
                },
            },
            "sgws_tanhu3":{
                mod:{
                    globalFrom:function (from,to){
                        if(to.hasSkill('sgws_tanhu2')) return -Infinity;
                    },
                    wuxieRespondable:function (card,player,target){
                        if(target&&target.hasSkill('sgws_tanhu2')) return false;
                    },
                },
            },
            "sgws_ganlu":{
                enable:"phaseUse",
                usable:2,
                audio:"ganlu",
                selectTarget:2,
                filterTarget:function (card,player,target){
                    if(target.isMin()) return false;
                    if(ui.selected.targets.length==0) return true;
                    if(ui.selected.targets[0].countCards('e')==0&&target.countCards('e')==0) return false;
                    return true;
                },
                multitarget:true,
                content:function (){
                    targets[0].swapEquip(targets[1]);
                },
                ai:{
                    order:10,
                    threaten:function (player,target){
                        return 0.8*Math.max(1+target.maxHp-target.hp);
                    },
                    result:{
                        target:function (player,target){
                            var list1=[];
                            var list2=[];
                            var num=player.maxHp-player.hp;
                            var players=game.filterPlayer();
                            for(var i=0;i<players.length;i++){
                                if(get.attitude(player,players[i])>0) list1.push(players[i]);
                                else if(get.attitude(player,players[i])<0) list2.push(players[i]);
                            }
                            list1.sort(function(a,b){
                                return a.countCards('e')-b.countCards('e');
                            });
                            list2.sort(function(a,b){
                                return b.countCards('e')-a.countCards('e');
                            });
                            var delta;
                            for(var i=0;i<list1.length;i++){
                                for(var j=0;j<list2.length;j++){
                                    delta=list2[j].countCards('e')-list1[i].countCards('e');
                                    if(delta<=0) continue;
                                    if(delta<=num){
                                        if(target==list1[i]||target==list2[j]){
                                            return get.attitude(player,target);
                                        }
                                        return 0;
                                    }
                                }
                            }
                            return 0;
                        },
                    },
                    effect:{
                        target:function (card,player,target){
                            if(target.hp==target.maxHp&&get.tag(card,'damage')) return 0.2;
                        },
                    },
                },
            },
            "sgws_buyi":{
                trigger:{
                    global:"dying",
                },
                audio:"buyi",
                filter:function (event,player){
                    return event.player.hp<=0&&event.player.countCards('h')>0;
                },
                direct:true,
                content:function (){
                    "step 0"
                    var check;
                    if(trigger.player.isUnderControl(true,player)){
                        check=player.hasCard(function(card){
                            return true;
                        });
                    }
                    else{
                        check=(get.attitude(player,trigger.player)>0);
                    }
                    player.choosePlayerCard(trigger.player,get.prompt('sgws_buyi',trigger.player),'h').set('ai',function(button){
                        if(!_status.event.check) return 0;
                        if(_status.event.target.isUnderControl(true,_status.event.player)){
                            if(get.type(button.link)!='basic'){
                                return 10-get.value(button.link);
                            }
                            return 0;
                        }
                        else{
                            return Math.random();
                        }
                    }).set('check',check).set('filterButton',function(button){
                        if(_status.event.player==_status.event.target){
                            return lib.filter.cardDiscardable(button.link,_status.event.player);
                        }
                        return true;
                    });
                    "step 1"
                    if(result.bool){
                        player.logSkill('sgws_buyi',trigger.player);
                        event.card=result.links[0];
                        player.showCards([event.card],get.translation(player)+'展示的手牌');
                    }
                    else{
                        event.finish();
                    }
                    "step 2"
                    trigger.player.recover(2);
                    trigger.player.discard(event.card);
                },
                ai:{
                    threaten:1.4,
                },
            },
            "sgws_buqu":{
                audio:"buqu",
                trigger:{
                    player:"chooseToUseBefore",
                },
                forced:true,
                preHidden:true,
                filter:function (event,player){return event.type=='dying'&&player.isDying()&&event.dying==player},
                content:function (){
                    "step 0"
                    event.card=get.cards()[0];
                    if(player.storage.sgws_buqu==undefined) player.storage.sgws_buqu=[];
                    player.storage.sgws_buqu.push(event.card);
                    player.syncStorage('sgws_buqu');
                    //event.trigger("addCardToStorage");
                    game.cardsGotoSpecial(event.card);
                    player.showCards(player.storage.sgws_buqu,'不屈')
                    player.markSkill('sgws_buqu');
                    "step 1"
                    for(var i=0;i<player.storage.sgws_buqu.length-1;i++){
                        if(get.number(event.card)&&get.number(event.card)==get.number(player.storage.sgws_buqu[i])){
                            player.storage.sgws_buqu.remove(event.card);
                            player.syncStorage('sgws_buqu');
                            player.markSkill('sgws_buqu');
                            game.cardsDiscard(event.card);
                            return;
                        };
                    }
                    trigger.cancel();
                    trigger.result={bool:true};
                    if(player.hp<=0){
                        player.recover(2-player.hp);
                    }
                },
                mod:{
                    maxHandcardBase:function (player,num){
                        if(get.mode()!='guozhan'&&player.storage.sgws_buqu&&player.storage.sgws_buqu.length) return player.storage.sgws_buqu.length;
                    },
                },
                ai:{
                    save:true,
                    mingzhi:true,
                    skillTagFilter:function (player,tag,target){
                        if(player!=target) return false;
                    },
                },
                intro:{
                    content:"cards",
                    onunmark:function (storage,player){
                        if(storage&&storage.length){
                            player.$throw(storage,1000);
                            game.cardsDiscard(storage);
                            delete player.storage.sgws_buqu;
                        }
                    },
                },
            },
            "sgws_fenji":{
                audio:"fenji",
                trigger:{
                    global:["gainAfter","loseAfter"],
                },
                filter:function (event){
                    var evt=event;
                    if(event.name=='lose'){
                        if(event.type!='discard') return false;
                        evt=event.getParent();
                    }
                    var player=evt[event.name=='gain'?'source':'player'];
                    if(!player||player.isDead()) return false;
                    if(evt[event.name=='gain'?'bySelf':'notBySelf']!=true) return false;
                    if(event.name=='lose') return event.hs.length>0;
                    return event.relatedLose&&event.relatedLose.hs&&event.relatedLose.hs.length>0;
                },
                check:function (event,player){
                    return get.attitude(player,event[event.name=='gain'?'source':'player'])>2;
                },
                logTarget:function (event){
                    return event[event.name=='gain'?'source':'player'];
                },
                content:function (){
                    "step 0"
                    player.loseHp();
                    "step 1"
                    trigger[trigger.name=='gain'?'source':'player'].draw(3);
                },
            },
            "sgws_fanjian":{
                audio:"refanjian",
                enable:"phaseUse",
                usable:2,
                filter:function (event,player){
                    return player.countCards('h')>0;
                },
                filterTarget:function (card,player,target){
                    return player!=target;
                },
                filterCard:true,
                check:function (card){
                    return 8-get.value(card);
                },
                discard:false,
                lose:false,
                delay:false,
                content:function (){
                    "step 0"
                    target.storage.sgws_fanjian=cards[0];
                    target.gain(cards[0],player,'give');
                    "step 1"
                    var suit=get.suit(target.storage.sgws_fanjian);
                    if(!target.countCards('h')) event._result={control:'refanjian_hp'};
                    else target.chooseControl('refanjian_card','refanjian_hp').ai=function(event,player){
                        var cards=player.getCards('he',{suit:get.suit(player.storage.sgws_fanjian)});
                        if(cards.length==1) return 0;
                        if(cards.length>=2){
                            for(var i=0;i<cards.length;i++){
                                if(get.tag(cards[i],'save')) return 1;
                            }
                        }
                        if(player.hp==1) return 0;
                        for(var i=0;i<cards.length;i++){
                            if(get.value(cards[i])>=8) return 1;
                        }
                        if(cards.length>2&&player.hp>2) return 1;
                        if(cards.length>3) return 1;
                        return 0;
                    }
                    "step 2"
                    if(result.control=='refanjian_card'){
                        target.showHandcards();
                    }
                    else{
                        target.loseHp();
                        event.finish();
                    }
                    "step 3"
                    var suit=get.suit(target.storage.sgws_fanjian);
                    target.discard(target.getCards('he',function(i){
                        return get.suit(i)==suit&&lib.filter.cardDiscardable(i,target,'sgws_fanjian');
                    }));
                    delete target.storage.sgws_fanjian;
                },
                ai:{
                    order:9,
                    result:{
                        target:function (player,target){
                            return -target.countCards('he')-(player.countCards('h','du')?1:0);
                        },
                    },
                    threaten:2,
                },
            },
            "sgws_qinyin":{
                audio:"qinyin",
                trigger:{
                    player:"phaseDiscardEnd",
                },
                direct:true,
                filter:function (event,player){
                    var cards=[];
                    player.getHistory('lose',function(evt){
                        if(evt.type=='discard'&&evt.getParent('phaseDiscard')==event) cards.addArray(evt.cards2);
                    });
                    return cards.length>1;
                },
                content:function (){
                    "step 0"
                    event.forceDie=true;
                    if(typeof event.count!='number'){
                        // event.count=trigger.cards.length-1;
                        event.count=1;
                    }
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
                    var prompt=get.prompt('sgws_qinyin')+'（剩余'+get.cnNumber(event.count)+'次）';
                    player.chooseControl('失去体力','回复体力','cancel2',
                    ui.create.dialog(get.prompt('sgws_qinyin'),'hidden')).ai=function(){
                        if(lose>recover&&lose>0) return 0;
                        if(lose<recover&&recover>0) return 1;
                        return 2;
                    }
                    "step 1"
                    if(result.control=='cancel2'){
                        event.finish();
                    }
                    else{
                        player.logSkill('sgws_qinyin');
                        event.bool=(result.control=='回复体力');
                        event.num=0;
                        event.players=game.filterPlayer();
                    }
                    "step 2"
                    if(event.num<event.players.length){
                        var target=event.players[event.num];
                        if(event.bool){
                            target.recover(2);
                        }
                        else{
                            target.loseHp(2);
                        }
                        event.num++;
                        event.redo();
                    }
                    "step 3"
                    if(event.count>1){
                        event.count--;
                        event.goto(0);
                    }
                },
                ai:{
                    expose:0.1,
                    threaten:2,
                },
            },
            sgws_yeyan:{
                audio:'yeyan',
                trigger:{player:'phaseUseBegin'},
                direct:true,
                content:function(){
                'step 0'
                player.chooseTarget(get.prompt2('sgws_yeyan'),lib.filter.notMe).set('ai',function(target){
                if(get.attitude(player,target)<0&&target.hp==1) return 2;
                if(get.attitude(player,target)<0) return 1;
                return 0;
                });
                'step 1'
                if(result.bool){
                player.logSkill('sgws_yeyan',result.targets[0]);
                result.targets[0].damage('fire',2);
                }
                else event.finish();
                },
            },
            "sgws_honglian":{
                audio:"boss_honglian",
                trigger:{
                    player:"phaseJieshuBegin",
                },
                forced:true,
                unique:true,
                content:function (){
                    "step 0"
                    event.players=get.players(player);
                    for(let i of event.players)
                        if(i.isFriendsOf(player))
                            event.players.remove(i);
                    player.draw(2);
                    "step 1"
                    if(event.players.length){
                        event.players.shift().damage('fire');
                        event.redo();
                    }
                },
            },
            "sgws_liuli":{
                audio:"liuli",
                trigger:{
                    target:"useCardToTarget",
                },
                direct:true,
                preHidden:true,
                filter:function (event,player){
                    if(event.card.name!='sha') return false;
                    if(player.countCards('he')==0) return false;
                    return game.hasPlayer(function(current){
                        return current!=player;
                    });
                },
                content:function (){
                    "step 0"
                    var next=player.chooseCardTarget({
                        position:'he',
                        filterCard:lib.filter.cardDiscardable,
                        filterTarget:function(card,player,target){
                            return true;
                        },
                        ai1:function(card){
                            return get.unuseful(card)+9;
                        },
                        ai2:function(target){
                            if(_status.event.player.countCards('h','shan')){
                                return -get.attitude(_status.event.player,target);
                            }
                            if(get.attitude(_status.event.player,target)<5){
                                return 6-get.attitude(_status.event.player,target);
                            }
                            if(_status.event.player.hp==1&&player.countCards('h','shan')==0){
                                return 10-get.attitude(_status.event.player,target);
                            }
                            if(_status.event.player.hp==2&&player.countCards('h','shan')==0){
                                return 8-get.attitude(_status.event.player,target);
                            }
                            return -1;
                        },
                        prompt:get.prompt('sgws_liuli'),
                        prompt2:'弃置一张牌，将此【杀】转移给一名其他角色',
                        source:trigger.player,
                        card:trigger.card,
                    }).setHiddenSkill(event.name);
                    "step 1"
                    if(result.bool){
                        var target=result.targets[0];
                        player.logSkill(event.name,target);
                        player.discard(result.cards);
                        var evt=trigger.getParent();
                        evt.triggeredTargets2.remove(player);
                        evt.targets.remove(player);
                        evt.targets.push(target);
                    }
                },
                ai:{
                    effect:{
                        target:function (card,player,target){
                            if(target.countCards('he')==0) return;
                            if(card.name!='sha') return;
                            var min=1;
                            var friend=get.attitude(player,target)>0;
                            var vcard={name:'shacopy',nature:card.nature,suit:card.suit};
                            var players=game.filterPlayer();
                            for(var i=0;i<players.length;i++){
                                if(player!=players[i]&&
                                    get.attitude(target,players[i])<0&&
                                    target.canUse(card,players[i])){
                                    if(!friend) return 0;
                                    if(get.effect(players[i],vcard,player,player)>0){
                                        if(!player.canUse(card,players[0])){
                                            return [0,0.1];
                                        }
                                        min=0;
                                    }
                                }
                            }
                            return min;
                        },
                    },
                },
            },
            "sgws_yanxiao":{
                audio:"yanxiao",
                enable:"phaseUse",
                filterCard:{
                    suit:["diamond","heart","spade"],
                },
                filterTarget:true,
                check:function (card){
                    return 7-get.value(card);
                },
                position:"he",
                filter:function (event,player){
                    return player.countCards('he')>0;
                },
                discard:false,
                lose:false,
                delay:false,
                prepare:"give",
                content:function (){
                    'step 0'
                    game.addGlobalSkill('yanxiao_global');
                    target.addJudge({name:'yanxiao_card'},cards);
                    'step 1'
                    game.delay();
                },
                ai:{
                    order:8,
                    result:{
                        target:function (player,target){
                            if(target.countCards('j',function(card){
                                return get.effect(target,{
                                    name:card.viewAs||card.name,
                                    cards:[card],
                                },target,target)<0;
                            })) return 1;
                            return 0;
                        },
                    },
                },
            },
            "sgws_anxian":{
                audio:"anxian",
                trigger:{
                    source:"damageBegin2",
                },
                filter:function (event,player){
                    return event.card&&event.card.name=='sha';
                },
                check:function (event,player){
                    if(get.damageEffect(event.player,player,player)<=0) return true;
                    return false;
                },
                content:function (){
                    'step 0'
                    if(trigger.player.countCards('h')){
                        trigger.player.chooseToDiscard(true);
                    }
                    'step 1'
                    player.draw(2);
                },
            },
            "sgws_tianxiang":{
                audio:"tianxiang",
                trigger:{
                    player:"damageBegin4",
                },
                direct:true,
                filter:function (event,player){
                    return player.countCards('he',function(card){
                        if(_status.connectMode&&get.position(card)=='h') return true;
                        return get.suit(card,player)=='heart';
                    })>0&&event.num>0;
                },
                content:function (){
                    "step 0"
                    player.chooseCardTarget({
                        filterCard:function(card,player){
                            return get.suit(card)=='heart'&&lib.filter.cardDiscardable(card,player);
                        },
                        filterTarget:function(card,player,target){
                            return player!=target;
                        },
                        position:'he',
                        ai1:function(card){
                            return 10-get.value(card);
                        },
                        ai2:function(target){
                            var att=get.attitude(_status.event.player,target);
                            var trigger=_status.event.getTrigger();
                            var da=0;
                            if(_status.event.player.hp==1){
                                da=10;
                            }
                            var eff=get.damageEffect(target,trigger.source,target);
                            if(att==0) return 0.1+da;
                            if(eff>=0&&att>0){
                                return att+da;
                            }
                            if(att>0&&target.hp>1){
                                if(target.maxHp-target.hp>=3) return att*1.1+da;
                                if(target.maxHp-target.hp>=2) return att*0.9+da;
                            }
                            return -att+da;
                        },
                        prompt:get.prompt('sgws_tianxiang'),
                        prompt2:lib.translate.sgws_tianxiang_info
                    });
                    "step 1"
                    if(result.bool){
                        player.discard(result.cards);
                        var target=result.targets[0];
                        player.chooseControlList(true,function(event,player){
                            var target=_status.event.target;
                            var att=get.attitude(player,target);
                            if(target.hasSkillTag('maihp')) att=-att;
                            if(att>0){
                                return 0;
                            }
                            else{
                                return 1;
                            }
                        },
                            ['令'+get.translation(target)+'受到伤害来源对其造成的1点伤害，然后摸X张牌（X为其已损失体力值+2）',
                            '令'+get.translation(target)+'失去3点体力，然后获得'+get.translation(result.cards)]).set('target',target);
                        player.logSkill(event.name,target);
                        trigger.cancel();
                        event.target=target;
                        event.card=result.cards[0];
                    }
                    else{
                        event.finish();
                    }
                    "step 2"
                    if(typeof result.index=='number'){
                        event.index=result.index;
                        if(result.index){
                            event.related=event.target.loseHp(3);
                        }
                        else{
                            event.related=event.target.damage(trigger.source||'nosource','nocard');
                        }
                    }
                    else event.finish();
                    "step 3"
                    if(event.related.cancelled||target.isDead()) return;
                    if(event.index&&card.isInPile()) target.gain(card,'gain2');
                    else if(target.getDamagedHp()) target.draw(target.getDamagedHp()+2);
                },
                ai:{
                    "maixie_defend":true,
                    effect:{
                        target:function (card,player,target){
                            if(player.hasSkillTag('jueqing',false,target)) return;
                            if(get.tag(card,'damage')&&target.countCards('he')>1) return 0.7;
                        },
                    },
                },
            },
            "sgws_xingwu":{
                audio:"xingwu",
                trigger:{
                    player:"phaseDiscardBegin",
                },
                direct:true,
                intro:{
                    content:"cards",
                    onunmark:function (storage,player){
                        if(storage&&storage.length){
                            player.$throw(storage,1000);
                            game.cardsDiscard(storage);
                            game.log(storage,'被置入了弃牌堆');
                         storage.length=0;
                        }
                    },
                },
                filter:function (event,player){
                    return player.countCards('he')>0;
                },
                content:function (){
                    'step 0'
                    player.chooseCard('he',get.prompt('sgws_xingwu'),'将一张牌置于武将牌上作为“舞”').set('ai',function(card){
                        if(_status.event.goon) return 20-get.value(card);
                        return 7-get.value(card);
                    }).set('goon',player.needsToDiscard()||player.getStorage('sgws_xingwu').length>1);
                    'step 1'
                    if(result.bool){
                        player.logSkill('sgws_xingwu');
                        var cards=result.cards;
                        player.lose(cards,ui.special,'toStorage');
                        player.$give(cards[0],player);
                        player.markAuto('sgws_xingwu',cards);
                        game.log(player,'将',cards,'放在了武将牌上');
                    }
                    else event.finish();
                    'step 2'
                    game.delayx();
                    var choices=[];
                    event.addIndex=0;
                    if(player.getStorage('sgws_xingwu').length>2){
                        choices.push('将三张“星舞”牌置入弃牌堆');
                    }
                    else event.addIndex++;
                    if(player.countCards('h',function(card){
                        return lib.filter.cardDiscardable(card,player,'sgws_xingwu');
                    })>1) choices.push('弃置两张手牌并将武将牌翻面');
                    if(choices.length){
                        player.chooseControl('cancel2').set('prompt','星舞：是否发射核弹？').set('choiceList',choices).set('ai',function(){
                            var player=_status.event.player;
                            if(player.getStorage('sgws_xingwu').length>2) return 0;
                            if(player.isTurnedOver()||player.identity=='fan'||player.getEnemies().length==1) return 0;
                            return 'cancel2';
                        });
                    }
                    else event.finish();
                    'step 3'
                    if(result.control!='cancel2'){
                        var num=result.index+event.addIndex;
                        if(num==1){
                            event.goto(5);
                            return;
                        }
                        if(player.getStorage('sgws_xingwu').length>3) player.chooseButton(['请选择要移去的“星舞”牌',player.getStorage('sgws_xingwu')],3,true);
                        else event._result={
                            bool:true,
                            links:player.getStorage('sgws_xingwu').slice(0),
                        }
                    }
                    else event.finish();
                    'step 4'
                    if(result.bool&&result.links&&result.links.length==3){
                        var cards=result.links;
                        player.$throw(cards,1500);
                        player.unmarkAuto('sgws_xingwu',cards);
                        game.delayx();
                        game.cardsDiscard(cards);
                        event.goto(6);
                    }
                    else event.finish();
                    'step 5'
                    player.chooseToDiscard(true,'h',2);
                    player.turnOver();
                    'step 6'
                    player.chooseTarget('请选择【星舞】的目标','弃置其装备区内的所有牌。然后对其造成4点伤害（目标为女性角色则改为3点）',true,lib.filter.notMe).set('ai',function(target){
                        return -get.attitude(_status.event.player,target)*Math.sqrt(4+target.countCards('e',function(card){
                            return get.value(card,target)>0;
                        }))*(target.hasSex('female')?3:4);
                    });
                    'step 7'
                    if(result.bool&&result.targets&&result.targets.length){
                        var target=result.targets[0];
                        player.line(target,'green');
                        var num=target.countCards('e');
                        if(num) player.discardPlayerCard(target,'e',num,true);
                        target.damage(target.hasSex('female')?3:4);
                    }
                },
                ai:{
                    threaten:1.5,
                },
            },
            "sgws_tiaoxin":{
                audio:"tiaoxin",
                enable:"phaseUse",
                usable:2,
                filter:function (event,player){
                    if(player.getStat('skill').sgws_tiaoxin) return !player.hasSkill('oltiaoxin2');
                    return true;
                },
                filterTarget:function (card,player,target){
                    return target!=player&&target.countCards('he')>0;
                },
                content:function (){
                    "step 0"
                    target.chooseToUse(function(card,player,event){
                        if(get.name(card)!='sha') return false;
                        return lib.filter.filterCard.apply(this,arguments);
                    },'挑衅：对'+get.translation(player)+'使用一张杀，或令其弃置你的一张牌').set('targetRequired',true).set('complexSelect',true).set('filterTarget',function(card,player,target){
                        if(target!=_status.event.sourcex&&!ui.selected.targets.contains(_status.event.sourcex)) return false;
                        return lib.filter.filterTarget.apply(this,arguments);
                    }).set('sourcex',player);
                    "step 1"
                    if(result.bool&&player.getHistory('damage',function(evt){
                        return evt.getParent().type=='card'&&evt.getParent(4)==event;
                    }).length>0) player.addTempSkill('oltiaoxin2','phaseUseEnd');
                    else if(target.countDiscardableCards(player,'he')>0) player.discardPlayerCard(target,'he',true).boolline=true;
                },
                ai:{
                    order:4,
                    expose:0.2,
                    result:{
                        target:-1,
                        player:function (player,target){
                            if(target.countCards('h')==0) return 0;
                            if(target.countCards('h')==1) return -0.1;
                            if(player.hp<=2) return -2;
                            if(player.countCards('h','shan')==0) return -1;
                            return -0.5;
                        },
                    },
                    threaten:1.1,
                },
            },
            "sgws_kunfen":{
                audio:"kunfen",
                trigger:{
                    player:"phaseJieshuBegin",
                },
                locked:function (skill,player){
                    return false;
                },
                direct:true,
                content:function (){
                    "step 0"
                    player.chooseBool(get.prompt('sgws_kunfen'),'结束阶段开始时，你可以失去1点体力，然后摸3张牌。').set('ai',function(){
                        var player=_status.event.player;
                        if(player.hp>3) return true;
                        if(player.hp==3&&player.countCards('h')<3) return true;
                        if(player.hp==2&&player.countCards('h')==0) return true;
                        return false;
                    });
                    "step 1"
                    if(result.bool){
                        player.logSkill('sgws_kunfen');
                        player.loseHp();
                    }
                    else{
                        event.finish();
                    }
                    "step 2"
                    player.draw(3);
                },
                ai:{
                    threaten:1.5,
                },
            },
            "sgws_lirang":{
                audio:"splirang",
                trigger:{
                    global:"phaseDrawBegin2",
                },
                logTarget:"player",
                filter:function (event,player){
                    return !event.numFixed&&event.player!=player&&player.countMark('sgws_lirang')==0;
                },
                "prompt2":"获得一枚“谦”并令其多摸两张牌",
                check:function (event,player){
                    return get.attitude(player,event.player)>0;
                },
                content:function (){
                    trigger.num+=2;
                    player.addMark('sgws_lirang',1);
                    player.addTempSkill('sgws_lirang_gain');
                },
                marktext:"谦",
                intro:{
                    name:"谦",
                    content:"mark",
                },
                group:"sgws_lirang_skip",
                subSkill:{
                    gain:{
                        audio:"splirang",
                        trigger:{
                            global:"phaseDiscardEnd",
                        },
                        direct:true,
                        filter:function (event,player){
                            return event.player.hasHistory('lose',function(evt){
                                return evt.type=='discard'&&evt.cards2.filterInD('d').length>0&&evt.getParent('phaseDiscard')==event;
                            });
                        },
                        content:function (){
                            'step 0'
                            var cards=[];
                            trigger.player.getHistory('lose',function(evt){
                                if(evt.type=='discard'&&evt.getParent('phaseDiscard')==trigger) cards.addArray(evt.cards2.filterInD('d'));
                            });
                            player.chooseButton(['礼让：是否获得其中至多两张牌？',cards],[1,2]);
                            'step 1'
                            if(result.bool){
                                player.logSkill('sgws_lirang_gain',trigger.player);
                                player.gain(result.links,'gain2');
                            }
                        },
                        sub:true,
                    },
                    skip:{
                        audio:"splirang",
                        trigger:{
                            player:"phaseDrawBefore",
                        },
                        forced:true,
                        filter:function (event,player){
                            return player.hasMark('sgws_lirang');
                        },
                        content:function (){
                            player.removeMark('sgws_lirang',player.countMark('sgws_lirang'));
                        },
                        sub:true,
                    },
                },
            },
            "sgws_mingshi":{
                audio:"spmingshi",
                trigger:{
                    player:"damageEnd",
                },
                forced:true,
                logTarget:"source",
                filter:function (event,player){
                    return event.source&&event.source.isIn()&&event.source.countCards('he')>0;
                },
                content:function (){
                    'step 0'
                    trigger.source.chooseToDiscard('he',true,2).set('color',get.attitude(trigger.source,player)>0?'red':'black').set('ai',function(card){
                        return (get.color(card)==_status.event.color?4:0)-get.value(card);
                    });
                    'step 1'
                    if(result.bool&&result.cards&&result.cards.length){
                        if(result.cards.length==1)
                            player.gain(result.cards[0],'gain2');
                        else
                        {
                            var card1=result.cards[0];
                            var card2=result.cards[1];
                            var card=[card1,card2];
                            if(get.color(card1,trigger.source)=='red'&&get.color(card2,trigger.source)=='red') player.recover(2);
                            else if(get.position(card1,true)=='d'&&get.position(card2,true)!='d') player.gain(card1,'gain2');
                            else if(get.position(card2,true)=='d'&&get.position(card1,true)!='d') player.gain(card2,'gain2');
                            else if(get.position(card2,true)=='d'&&get.position(card2,true)=='d') player.gain(card,'gain2');
                        }
                    }
                },
                ai:{
                    combo:"sgws_mingshi",
                    effect:{
                        target:function (card,player,target){
                            if(get.tag(card,'damage')){
                                var cards=[card];
                                if(card.cards&&card.cards.length) cards.addArray(card.cards);
                                if(ui.selected.cards.length) cards.addArray(ui.selected.cards);
                                if(!player.countCards('',function(card){
                                    return !cards.contains(card);
                                })) return;
                                if(!player.countCards('h',function(card){
                                    return !cards.contains(card)&&get.color(card)=='black'&&get.value(card,player)<6;
                                })) return 'zerotarget';
                                return 0.5;
                            }
                        },
                    },
                },
            },
            "sgws_kuizhu":{
                audio:"nzry_kuizhu",
                trigger:{
                    player:"phaseDiscardAfter",
                },
                direct:true,
                filter:function (event,player){
                    var cards=[];
                    player.getHistory('lose',function(evt){
                        if(evt.type=='discard'&&evt.getParent('phaseDiscard')==event) cards.addArray(evt.cards2);
                    });
                    return cards.length>0;
                },
                content:function (){
                    'step 0'
                    var cards=[];
                    player.getHistory('lose',function(evt){
                        if(evt.type=='discard'&&evt.getParent('phaseDiscard')==trigger) cards.addArray(evt.cards2);
                    });
                    event.num=cards.length;
                    event.str1='令至多'+event.num+'名角色摸两张牌';
                    event.str2='对任意名体力值之和为'+event.num+'的角色造成两点伤害';
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
                            //player.line(targets);
                            player.logSkill('sgws_kuizhu',targets);
                            game.asyncDraw(targets,2);
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
                                //player.line(targets);
                                player.logSkill('sgws_kuizhu',targets);
                                for(var i=0;i<targets.length;i++){
                                    targets[i].damage(2);
                                };
                                //if(targets.length>=2) player.loseHp();
                            };
                        };
                    };
                },
            },
            "sgws_zhizheng":{
                audio:"nzry_zhizheng",
                trigger:{
                    player:"phaseUseEnd",
                },
                forced:true,
                filter:function (event,player){
                    return (player.getHistory('useCard',function(evt){
                        return evt.getParent('phaseUse')==event;
                    }).length<game.countPlayer(function(current){return current!=player&&!current.inRange(player)}))&&game.hasPlayer(function(target){
                        return target!=player&&!target.inRange(player)&&target.countDiscardableCards(player,'he');
                    });
                },
                content:function (){
                    'step 0'
                    player.chooseTarget("请选择〖掣政〗的目标","弃置一名攻击范围内不包含你的角色的一张牌",true,function(card,player,target){
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
            "sgws_yinghun":{
                audio:"yinghun",
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                filter:function (event,player){
                    return true;
                },
                direct:true,
                content:function (){
                    "step 0"
                    player.chooseTarget(get.prompt2('sgws_yinghun'),function(card,player,target){
                        return player!=target;
                    }).set('ai',function(target){
                        var player=_status.event.player;
                        if(player.maxHp-player.hp==0&&target.countCards('he')==0){
                            return 0;
                        }
                        if(get.attitude(_status.event.player,target)>0){
                            return 10+get.attitude(_status.event.player,target);
                        }
                        if(player.maxHp-player.hp==0){
                            return -1;
                        }
                        return 1;
                    });
                    "step 1"
                    if(result.bool){
                        event.num=player.maxHp-player.hp+1;
                        if(player.countCards('e')>=player.hp){
                            event.num=player.maxHp;
                        }
                        player.logSkill('sgws_yinghun',result.targets);
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
                    threaten:function (player,target){
                        if(target.hp==1||target.countCards('e')>=target.hp) return 2;
                        if(target.hp==target.maxHp) return 0.5;
                        if(target.hp==2) return 1.5;
                        return 0.5;
                    },
                    maixie:true,
                    effect:{
                        target:function (card,player,target){
                            if(target.maxHp<=3) return;
                            if(get.tag(card,'damage')){
                                if(target.hp==target.maxHp) return [0,1];
                            }
                            if(get.tag(card,'recover')&&player.hp>=player.maxHp-1) return [0,0];
                        },
                    },
                },
            },
            "sgws_yingba":{
                audio:"yingba",
                enable:"phaseUse",
                usable:1,
                filter:(event,player)=>(game.hasPlayer((current)=>(current!=player&&current.maxHp>1))),
                filterTarget:(card,player,target)=>(target!=player&&target.maxHp>1),
                content:function (){
                    'step 0'
                    target.loseMaxHp();
                    'step 1'
                    if(target.isIn()) target.addMark('sgws_yingba_mark',1);
                },
                locked:false,
                mod:{
                    cardUsableTarget:function (card,player,target){
                        if(target.hasMark('sgws_yingba_mark')) return true;
                    },
                },
                ai:{
                    combo:"sgws_fuhai",
                    threaten:3,
                    order:2,
                    result:{
                        target:function (player,target){
                            if(target.isHealthy()) return -2;
                            return -1;
                        },
                    },
                },
                subSkill:{
                    mark:{
                        marktext:"定",
                        intro:{
                            name:"平定",
                            content:"mark",
                            onunmark:true,
                        },
                        sub:true,
                    },
                },
            },
            "sgws_fuhai":{
                audio:"scfuhai",
                trigger:{
                    player:"useCardToPlayered",
                },
                forced:true,
                filter:function (event,player){
                    return event.target&&event.target.hasMark('sgws_yingba_mark');
                },
                logTarget:"target",
                content:function (){
                    trigger.directHit.add(trigger.target);
                },
                group:["sgws_fuhai_die","sgws_fuhai_usea"],
                ai:{
                    "directHit_ai":true,
                    skillTagFilter:function (player,tag,arg){
                        return arg&&arg.target&&arg.target.hasMark('sgws_yingba_mark')
                    },
                },
                subSkill:{
                    usea:{
                        trigger:{
                            player:"useCardAfter",
                        },
                        forced:true,
                        filter:function (event,player){
                            return lib.skill.sgws_fuhai_usea.logTarget(event,player).length>0;
                        },
                        logTarget:function (event,player){
                            return event.targets.filter(function(i){
                                return i.hasMark('sgws_yingba_mark');
                            });
                        },
                        content:function (){
                            var num=0;
                            for(var i of trigger.targets){
                                var numx=i.countMark('sgws_yingba_mark');
                                if(numx){
                                    num+=numx;
                                    i.removeMark('sgws_yingba_mark',numx);
                                }
                            }
                            if(num) player.gainMaxHp(num);
                        },
                        sub:true,
                    },
                    die:{
                        trigger:{
                            global:"die",
                        },
                        forced:true,
                        filter:function (event,player){
                            return event.player.countMark('sgws_yingba_mark')>0;
                        },
                        content:function (){
                            player.gainMaxHp(trigger.player.countMark('sgws_yingba_mark'));
                            player.draw(trigger.player.countMark('sgws_yingba_mark'));
                        },
                        sub:true,
                    },
                },
            },
            "sgws_pinghe":{
                audio:"pinghe",
                locked:false,
                trigger:{
                    player:"damageBegin2",
                },
                direct:true,
                filter:function (event,player){
                    return event.source&&event.source!=player&&event.num<player.countCards('h');
                },
                content:function (){
                    'step 0'
                    player.chooseCardTarget({
                        prompt:get.prompt('sgws_pinghe'),
                        prompt2:'将'+get.cnNumber(trigger.num)+'张手牌交给一名其他角色并防止伤害'+(player.hasSkill('yingba')?'，然后令伤害来源获得等量“平定”标记':''),
                        selectCard:trigger.num,
                        filterCard:true,
                        filterTarget:lib.filter.notMe,
                        ai1:function(card){
                            if(get.tag(card,'recover')&&!game.hasPlayer(function(current){
                                return get.attitude(current,player)>0&&!current.hasSkillTag('nogain');
                            })) return 0;
                            return 1/Math.max(0.1,get.value(card));
                        },
                        ai2:function(target){
                            var player=_status.event.player,att=get.attitude(player,target);
                            if(target.hasSkillTag('nogain')) att/=9;
                            return 4+att;
                        },
                    });
                    'step 1'
                    if(result.bool){
                        var target=result.targets[0];
                        player.logSkill('sgws_pinghe',target);
                        target.gain(result.cards,player,'giveAuto');
                        trigger.cancel();
                        player.loseMaxHp(trigger.num);
                        if(player.hasSkill('sgws_yingba')){
                            trigger.source.addMark('sgws_yingba_mark',trigger.num);
                        }
                    }
                },
            },
            "sgws_meibu":{
                audio:"meibu",
                trigger:{
                    global:"phaseUseBegin",
                },
                filter:function (event,player){
                    return event.player!=player&&event.player.isAlive()&&player.countCards('he')>0;
                },
                direct:true,
                derivation:["rezhixi"],
                checkx:function (event,player){
                    if(get.attitude(player,event.player)>=0) return false;
                    return event.player.countCards('h')>event.player.hp;
                },
                content:function (){
                    "step 0"
                    var check=lib.skill.new_meibu.checkx(trigger,player);
                    player.chooseToDiscard(get.prompt2('sgws_meibu',trigger.player),'he').set('ai',function(card){
                        if(_status.event.check) return 6-get.value(card);
                        return 0;
                    }).set('check',check).set('logSkill',['sgws_meibu',trigger.player]);
                    "step 1"
                    if(result.bool){
                        var target=trigger.player;
                        var card=result.cards[0];
                        player.line(target,'green');
                        player.markAuto('sgws_meibu_gain',[get.color(card,player)]);
                        player.addTempSkill('sgws_meibu_gain');
                        target.addTempSkill('rezhixi','phaseUseEnd');
                    }
                },
                ai:{
                    expose:0.2,
                },
                subSkill:{
                    gain:{
                        trigger:{
                            global:"loseAfter",
                        },
                        forced:true,
                        charlotte:true,
                        popup:false,
                        onremove:true,
                        filter:function (event,player){
                            return event.getParent(3).name=='rezhixi'&&player.getStorage('sgws_meibu_gain').contains(get.color(event.cards[0],event.player))&&get.position(event.cards[0])=='d';
                        },
                        content:function (){
                            player.gain(trigger.cards[0],'gain2');
                        },
                        sub:true,
                    },
                },
            },
            "sgws_mumu":{
                audio:"mumu",
                trigger:{
                    player:"phaseUseBegin",
                },
                direct:true,
                filter:function (event,player){
                    return game.hasPlayer(function(current){
                        return current.countCards('e')>0;
                    });
                },
                content:function (){
                    'step 0'
                    player.chooseTarget(get.prompt2('sgws_mumu'),function(card,player,target){
                        return target.countCards('e')>0;
                    }).set('ai',function(target){
                        var player=_status.event.player,att=get.attitude(player,target),es=target.getCards('e'),val=0;
                        for(var i of es){
                            var eff=-(get.value(i,target)-0.1)*att;
                            if(eff>val) val=eff;
                        }
                        return eff;
                    });
                    'step 1'
                    if(result.bool){
                        var target=result.targets[0];
                        event.target=target;
                        player.logSkill('sgws_mumu',target);
                        if(player==target) event._result={index:1};
                        else{
                            var str=get.translation(target);
                            player.chooseControl().set('choiceList',[
                                '弃置'+str+'装备区的一张牌且本阶段使用【杀】的次数上限+3',
                                '获得'+str+'装备区的一张牌且本阶段使用【杀】的次数上限+1',
                            ]).set('ai',function(){
                                var player=_status.event.player;
                                if(player.countCards('hs',function(card){
                                    return get.name(card,player)=='sha'&&player.hasValueTarget(card);
                                })<Math.max(1,player.getCardUsable('sha'))) return 1;
                                return 0;
                            });
                        }
                    }
                    else event.finish();
                    'step 2'
                    if(result.index==0){
                        player.addTempSkill('sgws_mumu3','phaseUseAfter');
                        player.discardPlayerCard(target,'e',true);
                    }
                    else{
                        player.addTempSkill('sgws_mumu2','phaseUseAfter');
                        player.gainPlayerCard(target,'e',true);
                    }
                },
            },
            "sgws_mumu2":{
                mod:{
                    cardUsable:function (card,player,num){
                        if(card.name=='sha') return num+1;
                    },
                },
            },
            "sgws_mumu3":{
                mod:{
                    cardUsable:function (card,player,num){
                        if(card.name=='sha') return num+3;
                    },
                },
            },
            "sgws_hongyan":{
                audio:"xinhongyan",
                mod:{
                    suit:function (card,suit){
                        if(suit=='spade'||suit=='diamond') return 'heart';
                    },
                    maxHandcardBase:function (player,num){
                        if(player.countCards('e',function(card){
                            return get.suit(card,player)=='heart';
                        })) return player.maxHp+2;
                    },
                },
                trigger:{
                    global:"judge",
                },
                direct:true,
                filter:function (event,player){
                    if(event.fixedResult&&event.fixedResult.suit) return event.fixedResult.suit=='heart';
                    return get.suit(event.player.judging[0],event.player)=='heart';
                },
                content:function (){
                    "step 0"
                    var str='红颜：'+get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
                    get.translation(trigger.player.judging[0])+'，请将其改为一种花色';
                    player.chooseControl('spade','heart','diamond','club').set('prompt',str).set('ai',function(){
                        var judging=_status.event.judging;
                        var trigger=_status.event.getTrigger();
                        var res1=trigger.judge(judging);
                        var list=lib.suit.slice(0);
                        var attitude=get.attitude(player,trigger.player);
                        if(attitude==0) return 0;
                        var getj=function(suit){
                            return trigger.judge({
                                name:get.name(judging),
                                nature:get.nature(judging),
                                suit:suit,
                                number:get.number(judging),
                            })
                        };
                        list.sort(function(a,b){
                            return (getj(b)-getj(a))*get.sgn(attitude);
                        });
                        return list[0];
                    }).set('judging',trigger.player.judging[0]);
                    "step 1"
                    if(result.control!='cancel2'){
                        player.addExpose(0.25);
                        player.popup(result.control);
                        game.log(player,'将判定结果改为了','#y'+get.translation(result.control+2));
                        if(!trigger.fixedResult) trigger.fixedResult={};
                        trigger.fixedResult.suit=result.control;
                        trigger.fixedResult.color=get.color({suit:result.control});
                    }
                },
                ai:{
                    rejudge:true,
                    tag:{
                        rejudge:0.4,
                    },
                    expose:0.5,
                },
            },
            "sgws_piaoling":{
                audio:"piaoling",
                trigger:{
                    player:["phaseZhunbeiBegin","phaseJieshuBegin"],
                },
                frequent:true,
                content:function (){
                    'step 0'
                    player.judge(function(card){
                        return get.suit(card)=='heart'?2:0;
                    }).judge2=function(result){
                        return result.bool?true:false;
                    };
                    'step 1'
                    event.card=result.card;
                    if(result.bool&&get.position(event.card,true)=='d'){
                        player.chooseTarget('令一名角色获得'+get.translation(event.card)+'，或点【取消】将其置于牌堆顶').set('ai',function(target){
                            var player=_status.event.player;
                            var att=get.attitude(player,target);
                            if(player==target) att/=2;
                            return att;
                        });
                    }
                    else event.finish();
                    'step 2'
                    if(result.targets&&result.targets.length){
                        var target=result.targets[0];
                        player.line(target,'green');
                        target.gain(card,'gain2','log');
                    }
                    else{
                        card.fix();
                        ui.cardPile.insertBefore(card,ui.cardPile.firstChild);
                        game.updateRoundNumber();
                    }
                },
            },
            "sgws_jishe":{
                audio:"jishe",
                enable:"phaseUse",
                filter:function (event,player){
                    return player.getHandcardLimit()>0;
                },
                init:function (player){
                    player.storage.jishe=0;
                },
                usable:20,
                content:function (){
                    player.draw(2);
                    player.storage.jishe++;
                },
                ai:{
                    order:10,
                    result:{
                        player:function (player){
                            if(!player.needsToDiscard(1)){
                                return 1;
                            }
                            return 0;
                        },
                    },
                },
                mod:{
                    maxHandcard:function (player,num){
                        return num-player.storage.jishe;
                    },
                },
                group:["jishe2","jishe3"],
            },
            "sgws_huashen":{
                audio:"rehuashen",
                unique:true,
                direct:true,
                content:function (){
                    "step 0"
                    _status.noclearcountdown=true;
                    event.videoId=lib.status.videoId++;
                    var cards=player.storage.sgws_huashen.character.slice(0);
                    var skills=[];
                    var sto=player.storage.sgws_huashen;
                    for(var i in player.storage.sgws_huashen.map){
                        skills.addArray(player.storage.sgws_huashen.map[i]);
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
                    if(event.aiChoice==player.storage.sgws_huashen.current2||get.skillRank(event.aiChoice,cond)<1) choice='弃置化身';
                    if(player.isOnline2()){
                        player.send(function(cards,id){
                            var dialog=ui.create.dialog('是否发动【化身】？',[cards,'character']);
                            dialog.videoId=id;
                        },cards,event.videoId);
                    }
                    event.dialog=ui.create.dialog(get.prompt('sgws_huashen'),[cards,'character']);
                    event.dialog.videoId=event.videoId;
                    if(!event.isMine()){
                        event.dialog.style.display='none';
                    }
                    if(event.triggername=='sgws_huashen') event._result={control:'更换技能'};
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
                    if(!event.logged){player.logSkill('sgws_huashen');event.logged=true}
                    var next=player.chooseButton(true).set('dialog',event.videoId);
                    if(event.control=='弃置化身'){
                        next.set('selectButton',[1,2]);
                        next.set('filterButton',function(button){
                            return button.link!=_status.event.current;
                        });
                        next.set('current',player.storage.sgws_huashen.current);
                    }
                    else{
                        next.set('ai',function(button){
                            return player.storage.sgws_huashen.map[button.link].contains(_status.event.choice)?2.5:1+Math.random();
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
                        var list=player.storage.sgws_huashen.map[event.card].slice(0);
                        list.push('返回');
                        player.chooseControl(list).set('choice',event.aiChoice).set('ai',function(){
                            return _status.event.choice;
                        });
                    }
                    else{
                        lib.skill.sgws_huashen.removeHuashen(player,result.links.slice(0));
                        lib.skill.sgws_huashen.addHuashens(player,result.links.length);
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
                    if(player.storage.sgws_huashen.current!=event.card){
                        player.storage.sgws_huashen.current=event.card;
                        game.broadcastAll(function(character,player){
                            player.sex=lib.character[character][0];
                            player.group=lib.character[character][1];
                            player.node.name.dataset.nature=get.groupnature(player.group);
                        },event.card,player);
                    }
                    var link=result.control;
                    player.storage.sgws_huashen.current2=link;
                    if(!player.additionalSkills.sgws_huashen||!player.additionalSkills.sgws_huashen.contains(link)){
                        player.addAdditionalSkill('sgws_huashen',link);
                        player.flashAvatar('sgws_huashen',event.card);
                        game.log(player,'获得技能','#g【'+get.translation(link)+'】');
                        player.popup(link);
                        player.syncStorage('sgws_huashen');
                        player.updateMarks('sgws_huashen');
                    }
                },
                init:function (player,skill){
                    if(!player.storage[skill]) player.storage[skill]={
                        character:[],
                        map:{},
                    }
                },
                group:"sgws_huashen_init",
                trigger:{
                    player:["phaseBegin","phaseEnd","sgws_huashen"],
                },
                filter:function (event,player,name){
                    //if(name=='phaseBegin'&&game.phaseNumber==1) return false;
                    return player.storage.sgws_huashen&&player.storage.sgws_huashen.character.length>0;
                },
                addHuashen:function (player){
                    if(!player.storage.sgws_huashen) return;
                        var list=[];
                        var list2=[];
                        var players=game.players.concat(game.dead);
                        for(var i=0;i<players.length;i++){
                        list2.add(players[i].name);
                        list2.add(players[i].name1);
                        list2.add(players[i].name2);
                        }
                        for(var i in lib.character){
                            if(i.indexOf("sgws_")==0&&!list2.contains(i))
                                list.push(i);
                        }
                        _status.characterlist=list;
                    _status.characterlist.randomSort();
                    var bool=false;
                    for(var i=0;i<_status.characterlist.length;i++){
                        var name=_status.characterlist[i];
                        if(player.storage.sgws_huashen.character.contains(name)) continue;
                        var skills=lib.character[name][3];
                        for(var j=0;j<skills.length;j++){
                            var info=lib.skill[skills[j]];
                            if(info.charlotte||(info.unique&&!info.gainable)||info.juexingji||info.limited||info.zhuSkill||info.hiddenSkill||info.dutySkill) skills.splice(j--,1);
                        }
                        if(skills.length){
                            player.storage.sgws_huashen.character.push(name);
                            player.storage.sgws_huashen.map[name]=skills;
                            _status.characterlist.remove(name);
                            return name;
                        }
                    }
                },
                addHuashens:function (player,num){
                    var list=[];
                    for(var i=0;i<num;i++){
                        var name=lib.skill.sgws_huashen.addHuashen(player);
                        if(name) list.push(name);
                    }
                    if(list.length){
                        game.log(player,'获得了',get.cnNumber(list.length)+'张','#g化身')
                        lib.skill.sgws_huashen.drawCharacter(player,list);
                    }
                },
                removeHuashen:function (player,links){
                    player.storage.sgws_huashen.character.removeArray(links);
                    _status.characterlist.addArray(links);
                    game.log(player,'移去了',get.cnNumber(links.length)+'张','#g化身')
                },
                drawCharacter:function (player,list){
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
                    },player,list);
                },
                intro:{
                    onunmark:function (storage,player){
                        _status.characterlist.addArray(storage.character);
                        storage.character=[];
                    },
                    mark:function (dialog,storage,player){
                        if(storage&&storage.current) dialog.addSmall([[storage.current],'character']);
                        if(storage&&storage.current2) dialog.add('<div><div class="skill">【'+get.translation(lib.translate[storage.current2+'_ab']||get.translation(storage.current2).slice(0,2))+'】</div><div>'+get.skillInfoTranslation(storage.current2,player)+'</div></div>');
                        if(storage&&storage.character.length){
                            if(player.isUnderControl(true)){
                                dialog.addSmall([storage.character,'character']);
                            }
                            else{
                                dialog.addText('共有'+get.cnNumber(storage.character.length)+'张“化身”');
                            }
                        }
                        else{
                            return '没有化身';
                        }
                    },
                    content:function (storage,player){
                            return '共有'+get.cnNumber(storage.character.length)+'张“化身”'
                    },
                    markcount:function (storage,player){
                        if(storage&&storage.character) return storage.character.length;
                        return 0;
                    },
                },
            },
            "sgws_huashen_init":{
                trigger:{
                    global:"phaseBefore",
                    player:"enterGame",
                },
                forced:true,
                popup:false,
                filter:function (event,player){
                    return (event.name!='phase'||game.phaseNumber==0);
                },
                content:function (){
                    lib.skill.sgws_huashen.addHuashens(player,3);
                    player.syncStorage('sgws_huashen');
                    player.markSkill('sgws_huashen');
                    var next=game.createEvent('sgws_huashen');
                    next.player=player;
                    next._trigger=trigger;
                    next.triggername='sgws_huashen';
                    next.setContent(lib.skill.sgws_huashen.content);
                },
            },
            "sgws_xinsheng":{
                unique:true,
                audio:"rexingsheng",
                trigger:{
                    player:"damageEnd",
                },
                frequent:true,
                content:function (){
                    lib.skill.sgws_huashen.addHuashens(player,trigger.num);
                    player.syncStorage('sgws_huashen');
                    player.updateMarks('sgws_huashen');
                },
            },
            "sgws_lianhuan":{
                audio:"xinlianhuan",
                mod:{
                    selectTarget:function (card,player,range){
                        if(card.name=='tiesuo'&&range[1]!=-1) range[1]+=2;
                    },
                },
                group:["ollianhuan3","ollianhuan5"],
            },
            "sgws_huoji":{
                position:"hes",
                audio:"rehuoji",
                enable:"chooseToUse",
                filterCard:true,
                viewAs:{
                    name:"huogong",
                    nature:"fire",
                },
                viewAsFilter:function (player){
                    if(!player.countCards('hes')) return false;
                },
                prompt:"将一张牌当火攻使用",
                check:function (card){
                    var player=_status.currentPhase;
                    if(player.countCards('h')>player.hp){
                        return 6-get.value(card);
                    }
                    return 4-get.value(card)
                },
                ai:{
                    fireAttack:true,
                    basic:{
                        order:4,
                        value:[3,1],
                        useful:1,
                    },
                    wuxie:function (target,card,player,current,state){
                        if(get.attitude(current,player)>=0&&state>0) return false;
                    },
                    result:{
                        player:function (player){
                            var nh=player.countCards('h');
                            if(nh<=player.hp&&nh<=4&&_status.event.name=='chooseToUse'){
                                if(typeof _status.event.filterCard=='function'&&
                                    _status.event.filterCard({name:'huogong'},player,_status.event)){
                                    return -10;
                                }
                                if(_status.event.skill){
                                    var viewAs=get.info(_status.event.skill).viewAs;
                                    if(viewAs=='huogong') return -10;
                                    if(viewAs&&viewAs.name=='huogong') return -10;
                                }
                            }
                            return 0;
                        },
                        target:function (player,target){
                            if(target.hasSkill('huogong2')||target.countCards('h')==0) return 0;
                            if(player.countCards('h')<=1) return 0;
                            if(target==player){
                                if(typeof _status.event.filterCard=='function'&&
                                    _status.event.filterCard({name:'huogong'},player,_status.event)){
                                    return -1.5;
                                }
                                if(_status.event.skill){
                                    var viewAs=get.info(_status.event.skill).viewAs;
                                    if(viewAs=='huogong') return -1.5;
                                    if(viewAs&&viewAs.name=='huogong') return -1.5;
                                }
                                return 0;
                            }
                            return -1.5;
                        },
                    },
                    tag:{
                        damage:1,
                        fireDamage:1,
                        natureDamage:1,
                        norepeat:1,
                    },
                },
            },
            "sgws_bazhen":{
                audio:"bazhen",
                group:"sgws_bazhen_bagua",
                locked:true,
            },
            "sgws_bazhen_bagua":{
                audio:"bazhen",
                equipSkill:true,
                noHidden:true,
                inherit:"qimenbagua",
                filter:function (event,player){
                    if(!lib.skill.qimenbagua.filter(event,player)) return false;
                    if(!player.isEmpty(2)) return false;
                    return true;
                },
                ai:{
                    respondShan:true,
                    effect:{
                        target:function (card,player,target){
                            if(player==target&&get.subtype(card)=='equip2'){
                                if(get.equipValue(card)<=9) return 0;
                            }
                            if(!target.isEmpty(2)) return;
                            return lib.skill.qimenbagua.ai.effect.target.apply(this,arguments);
                        },
                    },
                },
            },
            "sgws_niepan":{
                audio:"olniepan",
                unique:true,
                enable:"chooseToUse",
                mark:true,
                skillAnimation:true,
                animationStr:"涅盘",
                limited:true,
                animationColor:"orange",
                init:function (player){
                    player.storage.olniepan=false;
                },
                filter:function (event,player){
                    if(player.storage.olniepan) return false;
                    if(event.type=='dying'){
                        if(player!=event.dying) return false;
                        return true;
                    }
                    return false;
                },
                content:function (){
                    'step 0'
                    player.awakenSkill('sgws_niepan');
                    player.storage.olniepan=true;
                    player.discard(player.getCards('hej'));
                    'step 1'
                    player.link(false);
                    'step 2'
                    player.turnOver(false);
                    'step 3'
                    player.draw(4);
                    'step 4'
                    if(player.hp<3){
                        player.recover(3-player.hp);
                    }
                    'step 5'
                    player.chooseControl('sgws_bazhen','sgws_huoji').set('prompt','选择获得一个技能').ai=function(){
                        return ['sgws_huoji','sgws_bazhen'].randomGet();
                    };
                    'step 6'
                    player.addSkillLog(result.control);
                },
                ai:{
                    order:1,
                    skillTagFilter:function (player,tag,target){
                        if(player!=target||player.storage.olniepan) return false;
                    },
                    save:true,
                    result:{
                        player:function (player){
                            if(player.hp<=0) return 10;
                            if(player.hp<=2&&player.countCards('he')<=1) return 10;
                            return 0;
                        },
                    },
                    threaten:function (player,target){
                        if(!target.storage.olniepan) return 0.6;
                    },
                },
                intro:{
                    content:"limited",
                },
            },
            "sgws_guolun":{
                audio:"xinfu_guolun",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
                    return player.countCards('h')>0;
                },
                filterTarget:function (card,player,target){
                    return target!=player&&target.countCards('h');
                },
                content:function (){
                    'step 0'
                    event.cardt=target.getCards('h').randomGet();
                    target.showCards(event.cardt);
                    player.chooseCard('he').ai=function(card){
                        var numt=event.cardt.number;
                        var att=get.attitude(player,target);
                        var value=get.value(event.cardt);
                        if(card.number<numt||att>2) return value+6-get.value(card);
                        else if(card.number==numt) return value-get.value(card);
                        return -1;
                    };
                    'step 1'
                    if(!result.bool) event.finish();
                    else{
                        player.showCards(result.cards);
                        event.cardp=result.cards;
                    }
                    'step 2'
                    player.$giveAuto(event.cardp,target);
                    target.gain(event.cardp,player);
                    target.give(event.cardt,player);
                    'step 3'
                    var nump=event.cardp[0].number;
                    var numt=event.cardt.number;
                    if(nump<numt){
                        player.draw(2);
                    }
                    else if(nump>numt){
                        target.draw(2);
                    }
                },
                ai:{
                    threaten:1.5,
                    order:8,
                    result:{
                        player:function (player,target){
                            if(get.attitude(player,target)>0) return 1.5;
                            return 0.5;
                        },
                    },
                },
            },
            "sgws_zhanji":{
                audio:"xinfu_zhanji",
                trigger:{
                    player:"gainAfter",
                },
                forced:true,
                filter:function (event,player){
                    if(!player.isPhaseUsing()) return false;
                    return event.getParent().name=='draw'&&event.getParent(2).name!='xinfu_zhanji';
                },
                content:function (){
                    player.draw(2,'nodelay');
                },
            },
            "sgws_youlong":{
                enable:"chooseToUse",
                audio:"youlong",
                zhuanhuanji:true,
                init:function (player){
                    player.storage.youlong=false;
                    if(!player.storage.youlong2) player.storage.youlong2=[];
                },
                hiddenCard:function (player,name){
                    if(player.storage.youlong2.contains(name)) return false;
                    if(player.hasSkill('sgws_youlong_'+(player.storage.youlong||false))) return false;
                    var type=get.type(name);
                    if(player.storage.youlong) return type=='basic';
                    return type=='trick';
                },
                filter:function (event,player){
                    if(player.storage.youlong2.contains(name)) return false;
                    if(player.hasSkill('sgws_youlong_'+(player.storage.youlong||false))) return false;
                    var type=player.storage.youlong?'basic':'trick';
                    for(var name of lib.inpile){
                        if(player.storage.youlong2.contains(name)) continue;
                        if(get.type(name)!=type) continue;
                        if(event.filterCard({name:name,isCard:true},player,event)) return true;
                    }
                    return false;
                },
                chooseButton:{
                    dialog:function (event,player){
                        var dialog=ui.create.dialog('游龙','hidden');
                        var table=document.createElement('div');
                        table.classList.add('add-setting');
                        table.style.margin='0';
                        table.style.width='100%';
                        table.style.position='relative';
                        for(var i=1;i<6;i++){
                            if(player.isDisabled(i)) continue;
                            var td=ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
                            td.innerHTML='<span>'+get.translation('equip'+i)+'</span>';
                            td.link=i;
                            td.addEventListener(lib.config.touchscreen?'touchend':'click',ui.click.button);
                            for(var j in lib.element.button){
                                td[j]=lib.element.button[j];
                            }
                            table.appendChild(td);
                            dialog.buttons.add(td);
                        }
                        dialog.content.appendChild(table);
                        var type=player.storage.youlong?'basic':'trick';
                        var list=[];
                        for(var name of lib.inpile){
                            if(player.storage.youlong2.contains(name)) continue;
                            if(get.type(name)!=type) continue;
                            if(event.filterCard({name:name,isCard:true},player,event)){
                                list.push([type,'',name]);
                                if(name=='sha'){
                                    for(var j of lib.inpile_nature) list.push(['基本','','sha',j]);
                                }
                            }
                        }
                        dialog.add([list,'vcard']);
                        return dialog;
                    },
                    filter:function (button){
                        if(ui.selected.buttons.length&&typeof button.link==typeof ui.selected.buttons[0].link) return false;
                        return true;
                    },
                    select:2,
                    check:function (button){
                        var player=_status.event.player;
                        if(typeof button.link=='number'){
                            var card=player.getEquip(button.link);
                            if(card){
                                var val=get.value(card);
                                if(val>0) return 0;
                                return 5-val;
                            }
                            switch(button.link){
                                case 3:return 4.5;break;
                                case 4:return 4.4;break;
                                case 5:return 4.3;break;
                                case 2:return (3-player.hp)*1.5;break;
                                case 1:{
                                    if(game.hasPlayer(function(current){
                                        return (get.realAttitude||get.attitude)(player,current)<0&&get.distance(player,current)>1;
                                    })) return 0;
                                    return 3.2;
                                }
                            }
                        }
                        var name=button.link[2];
                        var evt=_status.event.getParent();
                        if(get.type(name)=='basic'){
                            if(name=='shan') return 2;
                            if(evt.type=='dying'){
                                if(get.attitude(player,evt.dying)<2) return false;
                                if(name=='jiu') return 2.1;
                                return 1.9;
                            }
                            if(evt.type=='phase') return player.getUseValue({name:name,nature:button.link[3],isCard:true});
                            return 1;
                        }
                        if(!['chuqibuyi','shuiyanqijunx','juedou','nanman','wanjian','shunshou','zhujinqiyuan'].contains(name)) return 0;
                        var card={name:name,isCard:true};
                        if(['shunshou','zhujinqiyuan'].contains(card.name)){
                            if(!game.hasPlayer(function(current){
                                return get.attitude(player,current)!=0&&get.distance(player,current)<=1&&player.canUse(card,current)&&get.effect(current,card,player,player)>0;
                            })) return 0;
                            return player.getUseValue(card)-7;
                        }
                        return player.getUseValue(card)-4;
                    },
                    backup:function (links,player){
                        if(typeof links[1]=='number') links.reverse();
                        var equip=links[0];
                        var name=links[1][2];
                        var nature=links[1][3];
                        return {
                            filterCard:function(){return false},
                            selectCard:-1,
                            equip:equip,
                            viewAs:{
                                name:name,
                                nature:nature,
                                isCard:true,
                            },
                            popname:true,
                            precontent:function(){
                                player.logSkill('sgws_youlong');
                                delete event.result.skill;
                                player.addTempSkill('sgws_youlong_'+(player.storage.youlong||false),'roundStart');
                                player.storage.youlong=!player.storage.youlong;
                                player.storage.youlong2.add(event.result.card.name);
                            },
                        }
                    },
                    prompt:function (links,player){
                        if(typeof links[1]=='number') links.reverse();
                        var equip='equip'+links[0];
                        var name=links[1][2];
                        var nature=links[1][3];
                        return '视为使用'+(get.translation(nature)||'')+get.translation(name);
                    },
                },
                ai:{
                    respondSha:true,
                    respondShan:true,
                    skillTagFilter:function (player,tag,arg){
                        if(arg=='respond') return false;
                        if(!player.storage.youlong||player.hasSkill('sgws_youlong_true')) return false;
                        var name=(tag=='respondSha'?'sha':'shan');
                        return !player.storage.youlong2.contains(name);
                    },
                    order:1,
                    result:{
                        player:1,
                    },
                },
            },
            "sgws_youlong_true":{
            },
            "sgws_youlong_false":{
            },
            "sgws_luanfeng":{
                audio:"luanfeng",
                trigger:{
                    global:"dying",
                },
                filter:function (event,player){
                    return event.player.hp<1;
                },
                limited:true,
                skillAnimation:true,
                animationColor:"soil",
                logTarget:"player",
                check:function (event,player){
                    if(get.attitude(player,event.player)<4) return false;
                    if(player.countCards('h',function(card){
                        var mod2=game.checkMod(card,player,'unchanged','cardEnabled2',player);
                        if(mod2!='unchanged') return mod2;
                        var mod=game.checkMod(card,player,event.player,'unchanged','cardSavable',player);
                        if(mod!='unchanged') return mod;
                        var savable=get.info(card).savable;
                        if(typeof savable=='function') savable=savable(card,player,event.player);
                        return savable;
                    })>=1-event.player.hp) return false;
                    if(event.player==player||event.player==get.zhu(player)) return true;
                    return !player.hasUnknown();
                },
                content:function (){
                    'step 0'
                    player.awakenSkill('sgws_luanfeng');
                    trigger.player.recover(3-trigger.player.hp);
                    'step 1'
                    var num=trigger.player.countDisabled();
                    if(num){
                        for(var i=1;i<6;i++){
                            if(trigger.player.isDisabled(i)) trigger.player.enableEquip(i);
                        }
                    }
                    trigger.player.drawTo(6-num);
                    if(trigger.player.storage.kotarou_rewrite) trigger.player.storage.kotarou_rewrite=[];
                    if(player==trigger.player) player.storage.youlong2=[];
                },
                mark:true,
                intro:{
                    content:"limited",
                },
                init:function (player,skill){
                    player.storage[skill]=false;
                },
            },
            "sgws_lulve":{
                audio:"nslulve",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
                    return game.hasPlayer(function(current){
                        return current.countCards('e')>0&&current.countCards('e')<=player.countCards('he');
                    });
                },
                filterCard:function (){
                    if(ui.selected.targets.length) return false;
                    return true;
                },
                position:"he",
                selectCard:[1,Infinity],
                complexSelect:true,
                complexCard:true,
                filterTarget:function (card,player,target){
                    return target!=player&&target.countCards('e')>0&&ui.selected.cards.length==target.countCards('e');
                },
                check:function (card){
                    var player=_status.event.player;
                    if(game.hasPlayer(function(current){
                        return current!=player&&current.countCards('e')>0&&ui.selected.cards.length==current.countCards('e')&&get.damageEffect(current,player,player)>0;
                    })) return 0;
                    switch(ui.selected.cards.length){
                        case 0:return 8-get.value(card);
                        case 1:return 6-get.value(card);
                        case 2:return 3-get.value(card);
                        default:return 0;
                    }
                },
                content:function (){
                    target.damage(2,'nocard');
                },
                ai:{
                    damage:true,
                    order:2,
                    result:{
                        target:function (player,target){
                            return get.damageEffect(target,player);
                        },
                    },
                    expose:0.3,
                },
            },
            "sgws_lveming":{
                init:function (player){
                    player.storage.sgws_lveming=0;
                },
                mark:true,
                intro:{
                    content:"已发动过#次",
                },
                audio:"xinfu_lveming",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
                    return player!=target&&target.countCards('e')<player.countCards('e');
                },
                content:function (){
                    "step 0"
                    var list=[1,2,3,4,5,6,7,8,9,10,11,12,13].map((i)=>get.strNumber(i));
                    target.chooseControl(list).set('ai',function(){
                        return get.rand(0,12);
                    }).set('prompt','请选择一个点数');
                    "step 1"
                    if(result.control){
                        target.$damagepop(result.control,'thunder');
                        var num=result.index+1;
                        event.num=num;
                    }
                    else{
                        target.$damagepop('K','thunder');
                        event.num=13;
                    };
                    game.log(target,'选择的点数是','#y'+get.strNumber(event.num));
                    player.storage.sgws_lveming++;
                    player.judge(function(card){
                        if(card.number==_status.event.getParent('sgws_lveming').num) return 4;
                        return 0;
                    });
                    "step 2"
                    if(result.bool==true){
                        target.damage(3);
                    }
                    else{
                        var card=target.getCards('hej').randomGet();
                        player.gain(card,target,'giveAuto','bySelf');
                        var card2=target.getCards('hej').randomGet();
                        player.gain(card2,target,'giveAuto','bySelf');
                    }
                },
                ai:{
                    order:9,
                    result:{
                        target:function (player,target){
                            var numj=target.countCards('j');
                            var numhe=target.countCards('he');
                            if(numhe==0) return numj>0?6:-6;
                            return -6-(numj+1)/numhe;
                        },
                    },
                    threaten:1.1,
                },
            },
            "sgws_tunjun":{
                skillAnimation:true,
                animationColor:"metal",
                limited:true,
                unique:true,
                enable:"phaseUse",
                audio:"xinfu_tunjun",
                filter:function (event,player){
                    if(player.storage.sgws_tunjun) return false;
                    return player.storage.sgws_lveming&&player.storage.sgws_lveming>=0;
                },
                filterTarget:true,
                selectTarget:1,
                content:function (){
                    "step 0"
                    player.awakenSkill('sgws_tunjun');
                    event.num=player.storage.sgws_lveming+1;
                    event.toequip=[];
                    "step 1"
                    var equip=get.cardPile(function(card){
                        var bool1=true;
                        for(var i=0;i<event.toequip.length;i++){
                            if(get.type(card)=='equip'&&get.subtype(card)==get.subtype(event.toequip[i])) bool1=false;
                        }
                        return (get.type(card)=='equip'&&!event.toequip.contains(card)&&target.isEmpty(get.subtype(card))&&bool1);
                    });
                    if(equip) event.toequip.push(equip);
                    else event.num=0;
                    event.num--;
                    "step 2"
                    if(event.num>0) event.goto(1);
                    "step 3"
                    for (var i=0;i<event.toequip.length;i++){
                        target.chooseUseTarget(event.toequip[i],true).set('animate',false).set('nopopup',true);
                    }
                },
                ai:{
                    order:1,
                    result:{
                        target:0,
                    },
                },
                mark:true,
                intro:{
                    content:"limited",
                },
                init:function (player){
                    player.storage.sgws_tunjun=false;
                },
            },
            "sgws_leiji":{
                group:"sgws_leiji_misa",
                audio:"xinleiji",
                derivation:"xinleiji_faq",
                trigger:{
                    player:["useCard","respond"],
                },
                filter:function (event,player){
                    return event.card.name=='shan'||event.name=='useCard'&&event.card.name=='shandian';
                },
                judgeCheck:function (card,bool){
                    var suit=get.suit(card);
                    if(suit=='spade'){
                        if(bool&&card.number>1&&card.number<10) return 5;
                        return 4;
                    }
                    if(suit=='club') return 2;
                    return 0;
                },
                content:function (){
                    player.judge(lib.skill.sgws_leiji.judgeCheck).judge2=function(result){
                        return result.bool?true:false;
                    };
                },
                ai:{
                    useShan:true,
                    effect:{
                        target:function (card,player,target,current){
                            if(get.tag(card,'respondShan')&&!player.hasSkillTag('directHit_ai',true,{
                                target:target,
                                card:card,
                            },true)){
                                var hastarget=game.hasPlayer(function(current){
                                    return get.attitude(target,current)<0;
                                });
                                var be=target.countCards('e',{color:'black'});
                                if(target.countCards('h','shan')&&be){
                                    if(!target.hasSkill('sgws_guidao')) return 0;
                                    return [0,hastarget?target.countCards('he')/2:0];
                                }
                                if(target.countCards('h','shan')&&target.countCards('h')>2){
                                    if(!target.hasSkill('sgws_guidao')) return 0;
                                    return [0,hastarget?target.countCards('h')/4:0];
                                }
                                if(target.countCards('h')>3||(be&&target.countCards('h')>=2)){
                                    return [0,0];
                                }
                                if(target.countCards('h')==0){
                                    return [1.5,0];
                                }
                                if(target.countCards('h')==1&&!be){
                                    return [1.2,0];
                                }
                                if(!target.hasSkill('sgws_guidao')) return [1,0.05];
                                return [1,Math.min(0.5,(target.countCards('h')+be)/4)];
                            }
                        },
                    },
                },
            },
            "sgws_leiji_misa":{
                audio:"xinleiji",
                trigger:{
                    player:"judgeAfter",
                },
                direct:true,
                disableReason:["暴虐","助祭","弘仪","孤影"],
                filter:function (event,player){
                    return !lib.skill.sgws_leiji_misa.disableReason.contains(event.judgestr)&&['spade','club'].contains(event.result.suit);
                },
                content:function (){
                    'step 0'
                    event.num=2+['club','spade'].indexOf(trigger.result.suit);
                    event.logged=false;
                    if(event.num==2&&player.isDamaged()){
                        event.logged=true;
                        player.logSkill('sgws_leiji');
                        player.recover();
                    }
                    player.chooseTarget('雷击：是否对一名角色造成'+event.num+'点雷电伤害？',lib.filter.notMe).ai=function(target){
                        var player=_status.event.player;
                        return get.damageEffect(target,player,player,'thunder');
                    };
                    'step 1'
                    if(result.bool&&result.targets&&result.targets.length){
                        if(!event.logged) player.logSkill('sgws_leiji',result.targets);
                        else player.line(result.targets,'thunder');
                        result.targets[0].damage(event.num,'thunder');
                    }
                },
            },
            "sgws_guidao":{
                audio:"xinguidao",
                trigger:{
                    global:"judge",
                },
                filter:function (event,player){
                    return player.countCards('hes',{color:'black'})>0;
                },
                direct:true,
                content:function (){
                    "step 0"
                    player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
                    get.translation(trigger.player.judging[0])+'，'+get.prompt('sgws_guidao'),'hes',function(card){
                        if(get.color(card)!='black') return false;
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
                        if(attitude==0||result==0){
                            if(trigger.player!=player) return 0;
                            if(game.hasPlayer(function(current){
                                return get.attitude(player,current)<0;
                            })){
                                var checkx=lib.skill.sgws_leiji.judgeCheck(card,true)-lib.skill.sgws_leiji.judgeCheck(judging);
                                if(checkx>0) return checkx;
                            }
                            return 0;
                        };
                        if(attitude>0){
                            return result;
                        }
                        else{
                            return -result;
                        }
                    }).set('judging',trigger.player.judging[0]);
                    "step 1"
                    if(result.bool){
                        player.respond(result.cards,'highlight','sgws_guidao','noOrdering');
                    }
                    else{
                        event.finish();
                    }
                    "step 2"
                    if(result.bool){
                        player.$gain2(trigger.player.judging[0]);
                        player.gain(trigger.player.judging[0]);
                        var card=result.cards[0];
                        if(get.suit(card)=='spade'&&card.number>1&&card.number<10) player.draw(2,'nodelay');
                        trigger.player.judging[0]=result.cards[0];
                        trigger.orderingCards.addArray(result.cards);
                        game.log(trigger.player,'的判定牌改为',result.cards[0]);
                    }
                    "step 3"
                    game.delay(2);
                },
                ai:{
                    rejudge:true,
                    tag:{
                        rejudge:1,
                    },
                },
            },
            "sgws_paoxiao":{
                audio:"paoxiao",
                trigger:{
                    player:"shaMiss",
                },
                forced:true,
                content:function (){
                    player.addTempSkill('sgws_paoxiao2');
                    player.addMark('sgws_paoxiao2',1,false);
                },
                mod:{
                    cardUsable:function (card,player,num){
                        if(card.name=='sha') return Infinity;
                    },
                    targetInRange:function (card,player){
                        if(card.name=='sha') return true;
                    },
                },
            },
            "sgws_paoxiao2":{
                trigger:{
                    source:"damageBegin1",
                },
                forced:true,
                audio:"paoxiao",
                audioname:["re_zhangfei","guanzhang","xiahouba"],
                filter:function (event,player){
                    return event.card&&event.card.name=='sha'&&player.countMark('sgws_paoxiao2')>0;
                },
                onremove:true,
                content:function (){
                    trigger.num+=player.countMark('sgws_paoxiao2')+1;
                    player.removeSkill('sgws_paoxiao2');
                },
                intro:{
                    content:"本回合内下一次使用【杀】造成伤害时令伤害值+#",
                },
            },
            "sgws_tishen":{
                audio:"retishen",
                unique:true,
                mark:true,
                skillAnimation:true,
                animationColor:"soil",
                limited:true,
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                filter:function (event,player){
                    if(player.storage.sgws_tishen) return false;
                    return player.isDamaged();
                },
                check:function (event,player){
                    if(player.hp<=2||player.getDamagedHp()>2) return true;
                    if(player.getDamagedHp()<=1) return false;
                    return player.getDamagedHp()<game.roundNumber;
                },
                content:function (){
                    player.awakenSkill('sgws_tishen');
                    player.recover(player.maxHp-player.hp);
                    player.draw(player.maxHp-player.hp+1);
                },
                intro:{
                    content:"limited",
                },
                init:function (player,skill){
                    player.storage[skill]=false;
                },
            },
            "sgws_liyong":{
                audio:"retishen",
                trigger:{
                    player:"shaMiss",
                },
                forced:true,
                filter:function (event,player){
                    return player.isPhaseUsing();
                },
                content:function (){
                    trigger.getParent().sgws_liyong=true;
                    player.addTempSkill('sgws_liyong2','phaseUseEnd');
                },
            },
            "sgws_liyong2":{
                audio:"retishen",
                mark:true,
                intro:{
                    content:"铁骑！强命！加伤！然后掉血嘞…",
                },
                trigger:{
                    player:"useCardToPlayered",
                },
                forced:true,
                filter:function (event,player){
                    if(!event.card||event.card.name!='sha') return false;
                    var evt=event.getParent();
                    if(evt.sgws_liyong) return false;
                    var history=player.getHistory('useCard',function(evt){
                        return evt.card.name=='sha';
                    });
                    var evt2=history[history.indexOf(evt)-1];
                    return evt2&&evt2.sgws_liyong;
                },
                logTarget:"target",
                content:function (){
                    var target=trigger.target;
                    target.addTempSkill('fengyin');
                    trigger.directHit.add(target);
                    var id=target.playerid;
                    var map=trigger.customArgs;
                    if(!map[id]) map[id]={};
                    if(!map[id].extraDamage) map[id].extraDamage=0;
                    map[id].extraDamage+=2;
                    trigger.getParent().liyong2=true;
                },
                group:["sgws_liyong3","sgws_liyong4"],
            },
            "sgws_liyong3":{
                trigger:{
                    source:"damageSource",
                },
                forced:true,
                popup:false,
                filter:function (event,player){
                    return event.card&&event.card.name=='sha'&&
                    event.player.isAlive()&&event.getParent(2).sgws_liyong2==true;
                },
                content:function (){
                    player.loseHp();
                },
            },
            "sgws_liyong4":{
                trigger:{
                    player:"useCardAfter",
                },
                forced:true,
                silent:true,
                filter:function (evt,player){
                    if(!evt.card||evt.card.name!='sha') return false;
                    if(evt.sgws_liyong) return false;
                    var history=player.getHistory('useCard',function(evt){
                        return evt.card.name=='sha';
                    });
                    var evt2=history[history.indexOf(evt)-1];
                    return evt2&&evt2.sgws_liyong;
                },
                content:function (){
                    player.removeSkill('sgws_liyong2');
                },
                popup:false,
            },
            "sgws_jie":{
                audio:"jie",
                trigger:{
                    source:"damageBegin1",
                },
                filter:function (event){
                    return event.card&&event.card.name=='sha'&&get.color(event.card)=='red'&&event.notLink();
                },
                forced:true,
                content:function (){
                    trigger.num+=2;
                },
            },
            "sgws_dahe":{
                audio:"dahe",
                enable:"phaseUse",
                usable:2,
                filterTarget:function (card,player,target){
                    return player.canCompare(target);
                },
                filter:function (event,player){
                    return player.countCards('h')>0;
                },
                content:function (){
                    'step 0'
                    player.chooseToCompare(target).set('preserve','win');
                    'step 1'
                    if(result.bool&&result.target){
                        event.type=true;
                        event.card=result.target;
                        player.chooseTarget('将'+get.translation(result.target)+'交给一名角色',function(card,player,target){
                            return target.hp<=player.hp;
                        }).set('ai',function(target){
                            var att=get.attitude(_status.event.player,target);
                            if(_status.event.du) return -att;
                            return att;
                        }).set('du',event.card.name=='du');
                        target.addTempSkill('sgws_dahe2');
                    }
                    else{
                        event.type=false;
                        if(player.countCards('h')){
                            player.showHandcards();
                            player.chooseToDiscard('h',true);
                        }
                    }
                    'step 2'
                    if(event.type){
                        if(result.bool){
                            player.line(result.targets,'green');
                            result.targets[0].gain(event.card,'gain2');
                        }
                    }
                },
                ai:{
                    result:{
                        target:function (player,target){
                            var hs=player.getCards('h');
                            if(hs.length<3) return 0;
                            var bool=false;
                            for(var i=0;i<hs.length;i++){
                                if(hs[i].number>=9&&get.value(hs[i])<7){
                                    bool=true;
                                    break;
                                }
                            }
                            if(!bool) return 0;
                            if(player.canUse('sha',target)&&(player.countCards('h','sha'))){
                                return -2;
                            }
                            return -0.5;
                        },
                    },
                    order:9,
                },
            },
            "sgws_dahe2":{
                mark:true,
                intro:{
                    content:"非红桃闪无效",
                },
                mod:{
                    cardRespondable:function (card,player){
                        if(card.name=='shan'&&get.suit(card)!='heart') return false;
                    },
                    cardEnabled:function (card,player){
                        if(card.name=='shan'&&get.suit(card)!='heart') return false;
                    },
                },
            },
            "sgws_chouce":{
                audio:"chouce",
                trigger:{
                    player:"damageEnd",
                },
                content:function (){
                    'step 0'
                    event.num=trigger.num;
                    'step 1'
                    player.judge();
                    'step 2'
                    event.color=result.color;
                    if(event.color=='black'){
                        player.chooseTarget('弃置一名角色区域内的一到两张牌',function(card,player,target){
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
                        var next=player.chooseTarget('令一名角色摸两张牌');
                        if(player.storage.xianfu2&&player.storage.xianfu2.length){
                            next.set('prompt2','（若目标为'+get.translation(player.storage.xianfu2)+'则改为摸三张牌）');
                        }
                        next.set('ai',function(target){
                            var player=_status.event.player;
                            var att=get.attitude(player,target)/Math.sqrt(1+target.countCards('h'));
                            if(target.hasSkillTag('nogain')) att/=10;
                            if(player.storage.xianfu2&&player.storage.xianfu2.contains(target)) return att*2;
                            return att;
                        })
                    }
                    'step 3'
                    if(result.bool){
                        var target=result.targets[0];
                        player.line(target,'green');
                        if(event.color=='black'){
                            player.discardPlayerCard(target,'hej',true,[1,2]);
                        }
                        else{
                            if(player.storage.xianfu2&&player.storage.xianfu2.contains(target)){
                                if(!target.storage.xianfu_mark) target.storage.xianfu_mark=[];
                                target.storage.xianfu_mark.add(player);
                                target.storage.xianfu_mark.sortBySeat();
                                target.markSkill('xianfu_mark');
                                target.draw(3);
                            }
                            else{
                                target.draw(2);
                            }
                        }
                    }
                    'step 4'
                    if(--event.num>0){
                        player.chooseBool(get.prompt2('sgws_chouce'));
                    }
                    else{
                        event.finish();
                    }
                    'step 5'
                    if(result.bool){
                        player.logSkill('sgws_chouce');
                        event.goto(1);
                    }
                },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    effect:{
                        target:function (card,player,target){
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
            "sgws_jianchu":{
                shaRelated:true,
                audio:"rejianchu",
                trigger:{
                    player:"useCardToPlayered",
                },
                filter:function (event,player){
                    return event.card.name=='sha'&&event.target.countDiscardableCards(player,'he')>0;
                },
                direct:true,
                content:function (){
                    'step 0'
                    player.discardPlayerCard(trigger.target,get.prompt('sgws_jianchu',trigger.target)).set('ai',function(button){
                        if(!_status.event.att) return 0;
                        if(get.position(button.link)=='e'){
                            if(get.subtype(button.link)=='equip2')    return 2*get.value(button.link);
                            return get.value(button.link);
                        }
                        return 1;
                    }).set('logSkill',['sgws_jianchu',trigger.target]).set('att',get.attitude(player,trigger.target)<=0);
                    'step 1'
                    if(result.bool&&result.links&&result.links.length){
                        if(get.type(result.links[0],null,result.links[0].original=='h'?player:false)!='basic'){
                            trigger.getParent().directHit.add(trigger.target);
                            player.addTempSkill('sgws_jianchu2');
                            player.addMark('sgws_jianchu2',1,false);
                        }
                    }
                },
                ai:{
                    "unequip_ai":true,
                    "directHit_ai":true,
                    skillTagFilter:function (player,tag,arg){
                        if(tag=='directHit_ai') return arg.card.name=='sha'&&arg.target.countCards('e',function(card){
                            return get.value(card)>1;
                        })>0;
                        if(arg&&arg.name=='sha'&&arg.target.getEquip(2)) return true;
                        return false;
                    },
                },
            },
            "sgws_jianchu2":{
                mod:{
                    cardUsable:function (card,player,num){
                        if(card.name=='sha') return num+player.countMark('sgws_jianchu2');
                    },
                },
                onremove:true,
            },
            "sgws_lvli":{
                audio:"lvli",
                trigger:{
                    player:"damageEnd",
                    source:"damageSource",
                },
                filter:function (event,player,name){
                    var stat=player.getStat().skill;
                    if(!stat.sgws_lvli) stat.sgws_lvli=0;
                    if(stat.sgws_lvli>1) return false;
                    if(stat.sgws_lvli>0&&(player!=_status.currentPhase)) return false;
                    if(player.hp<player.countCards('h')&&player.isHealthy()) return false;
                    return true;
                },
                content:function (){
                    var stat=player.getStat().skill;
                    stat.sgws_lvli++;
                    var num=player.hp-player.countCards('h');
                    if(num>=0) player.draw(num+1);
                    else player.recover(-num);
                },
            },
            "sgws_qingjiao":{
                audio:"qingjiao",
                trigger:{
                    player:"phaseUseBegin",
                },
                filter:function (event,player){
                    return (ui.cardPile.hasChildNodes()||ui.discardPile.hasChildNodes());
                },
                content:function (){
                    'step 2'
                    var list=[];
                    var typelist=[];
                    var getType=function(card){
                        var sub=get.subtype(card);
                        if(sub) return sub;
                        return card.name;
                    };
                    for(var i=0;i<ui.cardPile.childElementCount;i++){
                        var node=ui.cardPile.childNodes[i];
                        var typex=getType(node);
                        if(!typelist.contains(typex)){
                            list.push(node);
                            typelist.push(typex);
                            if(list.length>=8) break;
                        }
                    }
                    if(list.length<8){
                        for(var i=0;i<ui.discardPile.childElementCount;i++){
                            var node=ui.discardPile.childNodes[i];
                            var typex=getType(node);
                                if(!typelist.contains(typex)){
                                list.push(node);
                                typelist.push(typex);
                                if(list.length>=8) break;
                            }
                        }
                    }
                    player.gain(list,'gain2');
                    'step 3'
                    game.updateRoundNumber();
                },
            },
            "sgws_quedi":{
                audio:"dbquedi",
                trigger:{
                    player:"useCardToPlayered",
                },
                direct:true,
                usable:1,
                filter:function (event,player){
                    return (event.card.name=='sha'||event.card.name=='juedou')&&event.targets.length==1&&
                    (event.target.countGainableCards(player,'h')>0||player.hasCard(function(i){
                        return _status.connectMode||get.type(i,player)=='basic'&&lib.filter.cardDiscardable(i,player,'sgws_quedi');
                    },'h'));
                },
                content:function (){
                    'step 0'
                    var target=trigger.target;
                    event.target=target;
                    var list=[];
                    if(target.countGainableCards(player,'h')>0) list.push('选项一');
                    if(player.hasCard(function(i){
                        return get.type(i,player)=='basic'&&lib.filter.cardDiscardable(i,player,'sgws_quedi');
                    },'h')) list.push('选项二');
                    list.push('背水！');
                    list.push('cancel2');
                    player.chooseControl(list).set('choiceList',[
                        '获得'+get.translation(target)+'的一张手牌',
                        '弃置一张基本牌并令'+get.translation(trigger.card)+'伤害+1',
                        '背水！执行所有选项',
                    ]).set('prompt',get.prompt('sgws_quedi',target)).set('ai',function(){
                        var evt=_status.event.getTrigger(),player=evt.player,target=evt.target,card=evt.card;
                        if(get.attitude(player,target)>0) return 'cancel2';
                        var bool1=target.countGainableCards(player,'h')>0;
                        var bool2=player.hasCard(function(i){
                            return get.type(i,player)=='basic'&&lib.filter.cardDiscardable(i,player,'sgws_quedi')&&get.value(card,player)<5;
                        },'h')&&!target.hasSkillTag('filterDamage',null,{
                            player:player,
                            card:card,
                        });
                        if(bool1&&bool2&&(target.hp<=2||(player.isDamaged()&&player.maxHp>3))) return '背水！';
                        if(bool1) return '选项一';
                        if(bool2) return '选项二';
                        return 'cancel2';
                    });
                    'step 1'
                    if(result.control!='cancel2'){
                        player.logSkill('sgws_quedi',target);
                        event.control=result.control;
                    }
                    else{
                        player.storage.counttrigger.sgws_quedi--;
                        event.finish();
                    }
                    'step 2'
                    if((event.control=='选项一'||event.control=='背水！')&&target.countGainableCards(player,'h')>0) player.gainPlayerCard(target,true,'h');
                    'step 3'
                    if((event.control=='选项二'||event.control=='背水！')&&player.hasCard(function(i){
                        return get.type(i,player)=='basic'&&lib.filter.cardDiscardable(i,player,'sgws_quedi');
                    },'h')){
                        player.chooseToDiscard('h','弃置一张基本牌',{type:'basic'},true);
                    }
                    else event.finish();
                    'step 4'
                    if(result.bool) trigger.getParent().baseDamage++;
                },
                ai:{
                    "directHit_ai":true,
                    skillTagFilter:function (player,tag,arg){
                        if(!arg||!arg.card||!arg.target||(arg.card.name!='sha'&&arg.card.name!='juedou')) return false;
                        if(player.storage.counttrigger&&player.storage.counttrigger.sgws_quedi&&player.storage.counttrigger.sgws_quedi>0) return false;
                        if(arg.target.countCards('h')==1&&(arg.card.name!='sha'||!arg.target.getEquip('bagua')||player.hasSkillTag('unequip',false,{
                            name:arg.card?arg.card.name:null,
                            target:arg.target,
                            card:arg.card
                        })||player.hasSkillTag('unequip_ai',false,{
                            name:arg.card?arg.card.name:null,
                            target:arg.target,
                            card:arg.card
                        }))) return true;
                        return false;
                    },
                },
            },
            "sgws_zhuifeng":{
                audio:"dbzhuifeng",
                groupSkill:true,
                enable:"chooseToUse",
                filter:function (event,player){
                    return player.hp>0&&
                    (event.filterCard({name:'sha',isCard:true},player,event)||event.filterCard({name:'juedou',isCard:true},player,event));
                },
                chooseButton:{
                    dialog:function (){
                        return ui.create.dialog('椎锋',[['sha','juedou'],'vcard']);
                    },
                    filter:function (button,player){
                        var evt=_status.event.getParent();
                        return evt.filterCard({name:button.link[2],isCard:true},player,evt);
                    },
                    check:function (card){
                        return _status.event.player.getUseValue({name:card.link[2]})*(card.link[2]=='juedou')?2:1;
                    },
                    backup:function (links){
                        return {
                            viewAs:{name:links[0][2],isCard:true},
                            filterCard:()=>false,
                            selectCard:-1,
                            precontent:function(){
                                player.logSkill('sgws_zhuifeng');
                                delete event.result.skill;
                                player.loseHp();
                            },
                        }
                    },
                    prompt:function (links){
                        return '请选择【'+get.translation(links[0][2])+'】的目标';
                    },
                },
                ai:{
                    respondSha:true,
                    skillTagFilter:function (player,tag,arg){
                        return player.hp>0&&arg=='use';
                    },
                    order:function (){
                        var player=_status.event.player;
                        if(player.hasValueTarget({name:'juedou'})) return get.order({name:'juedou'})-0.5;
                        return get.order({name:'sha'})-0.5;
                    },
                    result:{
                        player:function (player){
                            if(player.hp>1) return 1;
                            return -1;
                        },
                    },
                },
            },
            "sgws_chongjian":{
                audio:"dbchongjian",
                hiddenCard:function (player,name){
                    if((name=='sha'||name=='jiu')&&player.hasCard(function(card){
                        return get.type(card)=='equip';
                    },'hes')) return true;
                    return false;
                },
                enable:"chooseToUse",
                filter:function (event,player){
                    return player.hasCard(function(card){
                        return get.type(card)=='equip';
                    },'hes')&&(event.filterCard({name:'sha',isCard:true},player,event)||event.filterCard({name:'jiu',isCard:true},player,event));
                },
                locked:false,
                mod:{
                    targetInRange:function (card){
                        if(card.storage&&card.storage.sgws_chongjian) return true;
                    },
                },
                chooseButton:{
                    dialog:function (){
                        return ui.create.dialog('冲坚',[['sha','jiu'],'vcard']);
                    },
                    filter:function (button,player){
                        var evt=_status.event.getParent();
                        return evt.filterCard({name:button.link[2],isCard:true},player,evt);
                    },
                    check:function (button){
                        if(_status.event.getParent().type!='phase') return 1;
                        var player=_status.event.player;
                        if(button.link[2]=='jiu'&&(player.hasCard(function(card){
                            return get.name(card)=='sha';
                        },'hs')||player.countCards('hes',function(card){
                            if(get.type(card)!='equip') return false;
                            if(get.position(card)=='e'){
                                if(player.hasSkillTag('noe')) return (10-get.value(card))>0;
                                var sub=get.subtype(card);
                                if(player.hasCard(function(card){
                                    return get.subtype(card)==sub&&player.canUse(card,player)&&get.effect(player,card,player,player)>0;
                                },'hs')) return (10-get.value(card))>0;
                            }
                            return (5-get.value(card))>0;
                        })>1)) return player.getUseValue({name:'jiu'})*4;
                        return player.getUseValue({name:button.link[2]},false);
                    },
                    backup:function (links,player){
                        return {
                            audio:'dbchongjian',
                            viewAs:{
                                name:links[0][2],
                                isCard:true,
                                storage:{sgws_chongjian:true},
                            },
                            filterCard:{type:'equip'},
                            position:'hes',
                            popname:true,
                            precontent:function(){
                                player.addTempSkill('sgws_chongjian_effect');
                            },
                            check:function(card){
                                var player=_status.event.player;
                                if(get.position(card)=='e'){
                                    if(player.hasSkillTag('noe')) return 10-get.value(card);
                                    var sub=get.subtype(card);
                                    if(player.hasCard(function(card){
                                        return get.subtype(card)==sub&&player.canUse(card,player)&&get.effect(player,card,player,player)>0;
                                    },'hs')) return 10-get.value(card);
                                }
                                return 5-get.value(card);
                            },
                        }
                    },
                    prompt:function (links){
                        return '将一张装备牌当做【'+get.translation(links[0][2])+'】使用';
                    },
                },
                ai:{
                    respondSha:true,
                    skillTagFilter:function (player,tag,arg){
                        return player.group=='wu'&&arg=='use'&&player.hasCard(function(card){
                            return get.type(card)=='equip';
                        },'hes');
                    },
                    order:function (item,player){
                        if(_status.event.type!='phase') return 1;
                        var player=_status.event.player;
                        if(player.hasCard(function(card){
                            if(get.value(card,player)<0) return true;
                            var sub=get.subtype(card);
                            return player.hasCard(function(card){
                                return get.subtype(card)==sub&&player.canUse(card,player)&&get.effect(player,card,player,player)>0;
                            },'hs')>0;
                        },'e')) return 10;
                        if(player.countCards('hs','sha')||player.countCards('he',function(card){
                            return get.type(card)=='equip'&&get.value(card,player)<5;
                        })>1) return get.order({name:'jiu'})-0.1;
                        return get.order({name:'sha'})-0.1;
                    },
                    result:{
                        player:1,
                    },
                },
                subSkill:{
                    effect:{
                        charlotte:true,
                        mod:{
                            targetInRange:function (card){
                                if(card.storage&&card.storage.dbchongjian) return true;
                            },
                        },
                        trigger:{
                            source:"damageSource",
                        },
                        forced:true,
                        logTarget:"player",
                        filter:function (event,player){
                            return event.parent.skill=='sgws_chongjian_backup'&&event.card.name=='sha'&&event.getParent().name=='sha'&&event.player.countGainableCards(player,'e')>0;
                        },
                        content:function (){
                            player.gainPlayerCard(trigger.player,'e',true,trigger.num+1);
                        },
                        sub:true,
                    },
                },
            },
            "sgws_choujue":{
                audio:"dbchoujue",
                trigger:{
                    source:"dieAfter",
                },
                forced:true,
                content:function (){
                    player.gainMaxHp(2);
                    player.draw(2);
                    player.addSkill('counttrigger');
                    if(!player.storage.counttrigger) player.storage.counttrigger={};
                    if(!player.storage.counttrigger.dbquedi) player.storage.counttrigger.sgws_quedi=0;
                    player.storage.counttrigger.sgws_quedi--;
                },
            },
            "sgws_luoying":{
                audio:"reluoying",
                group:["sgws_luoying_discard","sgws_luoying_judge"],
                subfrequent:["judge"],
                subSkill:{
                    discard:{
                        audio:"reluoying",
                        trigger:{
                            global:"loseAfter",
                        },
                        filter:function (event,player){
                            if(event.type!='discard') return false;
                            if(event.player==player) return false;
                            for(var i=0;i<event.cards2.length;i++){
                                if(get.color(event.cards2[i],event.player)=='black'&&get.position(event.cards2[i],true)=='d'){
                                    return true;
                                }
                            }
                            return false;
                        },
                        direct:true,
                        content:function (){
                            "step 0"
                            if(trigger.delay==false) game.delay();
                            "step 1"
                            var cards=[];
                            for(var i=0;i<trigger.cards2.length;i++){
                                if(get.color(trigger.cards2[i],trigger.player)=='black'&&get.position(trigger.cards2[i],true)=='d'){
                                    cards.push(trigger.cards2[i]);
                                }
                            }
                            if(cards.length){
                                player.chooseButton(['落英：选择要获得的牌',cards],[1,cards.length]).set('ai',function(button){
                                    return get.value(button.link,_status.event.player,'raw');
                                });
                            }
                            "step 2"
                            if(result.bool){
                                player.logSkill(event.name);
                                player.gain(result.links,'gain2','log');
                            }
                        },
                        sub:true,
                    },
                    judge:{
                        audio:"reluoying",
                        trigger:{
                            global:"cardsDiscardAfter",
                        },
                        direct:true,
                        filter:function (event,player){
                            var evt=event.getParent().relatedEvent;
                            if(!evt||evt.name!='judge') return;
                            if(evt.player==player) return false;
                            if(get.position(event.cards[0],true)!='d') return false;
                            return (get.suit(event.cards[0])=='club');
                        },
                        content:function (){
                            "step 0"
                            player.chooseButton(['落英：选择要获得的牌',trigger.cards],[1,trigger.cards.length]).set('ai',function(button){
                                return get.value(button.link,_status.event.player,'raw');
                            });
                            "step 1"
                            if(result.bool){
                                player.logSkill(event.name);
                                player.gain(result.links,'gain2','log');
                            }
                        },
                        sub:true,
                    },
                },
            },
            "sgws_jiushi":{
                audio:"ext:三国无双:2",
                group:["sgws_jiushi1","sgws_jiushi2","sgws_jiushi3","sgws_jiushi_gain"],
                subfrequent:["gain"],
                subSkill:{
                    gain:{
                        audio:"rejiushi",
                        trigger:{
                            player:"turnOverAfter",
                        },
                        frequent:true,
                        filter:function (event,player){
                            return true;
                        },
                        prompt:"是否发动【酒诗】，获得牌堆中的两张锦囊牌？",
                        content:function (){
                            event.cards=[];
                            while(event.cards.length<2){
                                var card=get.cardPile2(function(card){
                                    return !event.cards.contains(card)&&get.type(card)=='trick';
                                });
                                if(card){
                                    event.cards.push(card);
                                }
                                else
                                    break;
                            }
                            if(event.cards.length>0) player.gain(event.cards,'gain2');
                        },
                        sub:true,
                    },
                },
            },
            "sgws_jiushi1":{
                hiddenCard:function (player,name){
                    if(name=='jiu') return !player.isTurnedOver();
                    return false;
                },
                audio:"rejiushi",
                enable:"chooseToUse",
                filter:function (event,player){
                    if(player.classList.contains('turnedover')) return false;
                    return event.filterCard({name:'jiu',isCard:true},player,event);
                },
                content:function (){
                    if(_status.event.getParent(2).type=='dying'){
                        event.dying=player;
                        event.type='dying';
                    }
                    player.turnOver();
                    player.useCard({name:'jiu',isCard:true},player);
                },
                ai:{
                    order:5,
                    result:{
                        player:function (player){
                            if(_status.event.parent.name=='phaseUse'){
                                if(player.countCards('h','jiu')>0) return 0;
                                if(player.getEquip('zhuge')&&player.countCards('h','sha')>1) return 0;
                                if(!player.countCards('h','sha')) return 0;
                                var targets=[];
                                var target;
                                var players=game.filterPlayer();
                                for(var i=0;i<players.length;i++){
                                    if(get.attitude(player,players[i])<0){
                                        if(player.canUse('sha',players[i],true,true)){
                                            targets.push(players[i]);
                                        }
                                    }
                                }
                                if(targets.length){
                                    target=targets[0];
                                }
                                else{
                                    return 0;
                                }
                                var num=get.effect(target,{name:'sha'},player,player);
                                for(var i=1;i<targets.length;i++){
                                    var num2=get.effect(targets[i],{name:'sha'},player,player);
                                    if(num2>num){
                                        target=targets[i];
                                        num=num2;
                                    }
                                }
                                if(num<=0) return 0;
                                var e2=target.getEquip(2);
                                if(e2){
                                    if(e2.name=='tengjia'){
                                        if(!player.countCards('h',{name:'sha',nature:'fire'})&&!player.getEquip('zhuque')) return 0;
                                    }
                                    if(e2.name=='renwang'){
                                        if(!player.countCards('h',{name:'sha',color:'red'})) return 0;
                                    }
                                    if(e2.name=='baiyin') return 0;
                                }
                                if(player.getEquip('guanshi')&&player.countCards('he')>2) return 1;
                                return target.countCards('h')>3?0:1;
                            }
                            if(player==_status.event.dying||player.isTurnedOver()) return 3;
                        },
                    },
                    effect:{
                        target:function (card,player,target){
                            if(card.name=='guiyoujie') return [0,0.5];
                            if(target.isTurnedOver()){
                                if(get.tag(card,'damage')){
                                    if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                                    if(target.hp==1) return;
                                    return [1,target.countCards('h')/2];
                                }
                            }
                        },
                    },
                },
            },
            "sgws_jiushi2":{
                trigger:{
                    player:"damageBegin3",
                },
                silent:true,
                firstDo:true,
                filter:function (event,player){
                    return player.classList.contains('turnedover');
                },
                content:function (){
                    trigger.sgws_jiushi=true;
                },
                forced:true,
                popup:false,
            },
            "sgws_jiushi3":{
                audio:"rejiushi",
                trigger:{
                    player:"damageEnd",
                },
                check:function (event,player){
                    return player.isTurnedOver();
                },
                filter:function (event,player){
                    if(event.sgws_jiushi){
                        return true;
                    }
                    return false;
                },
                prompt:function (event,player){
                    var str='是否发动【酒诗】，将武将牌翻面？';
                    return str;
                },
                content:function (){
                    delete trigger.sgws_jiushi;
                    player.turnOver();
                },
            },
            "sgws_yaowu":{
                trigger:{
                    player:"damageBegin3",
                },
                audio:"new_reyaowu",
                forced:true,
                filter:function (event){
                    return event.card&&(get.color(event.card)!='red'||event.source&&event.source.isAlive());
                },
                content:function (){
                    trigger[get.color(trigger.card)!='red'?'player':'source'].draw();
                    if(get.color(trigger.card)!='red')
                        player.draw();
                },
            },
            sgws_pojun:{
				shaRelated:true,
				audio:"repojun",
				trigger:{player:'useCardToPlayered'},
				direct:true,
				filter:function(event,player){
					return event.card.name=='sha'&&event.target.hp>0&&event.target.countCards('he')>0;
				},
				content:function(){
					'step 0'
					var next=player.choosePlayerCard(trigger.target,'he',[1,Math.min(trigger.target.hp,trigger.target.countCards('he'))],get.prompt('sgws_pojun',trigger.target));
					next.set('ai',function(button){
						if(!_status.event.goon) return 0;
						var val=get.value(button.link);
						if(button.link==_status.event.target.getEquip(2)) return 2*(val+3);
						return val;
					});
					next.set('goon',get.attitude(player,trigger.target)<=0);
					next.set('forceAuto',true);
					'step 1'
					if(result.bool){
                        event.cards=result.cards;
						var target=trigger.target;
						player.logSkill('sgws_pojun',trigger.target);
						target.addSkill('sgws_pojun2');
						target.storage.sgws_pojun2.addArray(result.cards);
                        target.markAuto('sgws_pojun2',result.cards);
						target.lose(result.cards,ui.special,'toStorage');
						game.log(target,'失去了'+get.cnNumber(result.cards.length)+'张牌');
						target.markSkill('sgws_pojun2');
					}
                    else event.finish();
					'step 2'
					var discard=false,draw=false;
					for(var i of cards){
						var type=get.type2(i);
						if(type=='equip') discard=true;
						if(type=='trick') draw=true;
					}
					if(discard){
						event.equip=true;
						player.chooseButton(['选择一张牌置入弃牌堆',cards.filter(function(card){
							return get.type(card)=='equip';
						})],true).set('ai',function(button){
							return get.value(button.link,_status.event.getTrigger().target);
						});
					}
					if(draw)	event.draw=true;
					'step 3'
					if(event.equip&&result.links&&result.links.length){
						trigger.target.unmarkAuto('sgws_pojun2',result.links);
						trigger.target.$throw(result.links,1000);
						game.log(player,'将',result.links,'置入了弃牌堆');
						game.cardsDiscard(result.links);
						if(!event.draw) game.delayx();
					}
					if(event.draw) player.draw(2);
				},
				ai:{
					unequip_ai:true,
					directHit_ai:true,
					skillTagFilter:function(player,tag,arg){
						if(get.attitude(player,arg.target)>0) return false;
						if(tag=='directHit_ai') return arg.target.hp>=Math.max(1,arg.target.countCards('h')-1);
						if(arg&&arg.name=='sha'&&arg.target.getEquip(2)) return true;
						return false;
					}
				},
				group:'sgws_pojun3',
			},
			sgws_pojun3:{
				audio:'repojun',
				trigger:{source:'damageBegin1'},
				forced:true,
				locked:false,
				logTarget:'player',
				filter:function(event,player){
					var target=event.player;
					return event.getParent().name=='sha'&&player.countCards('h')>=target.countCards('h')&&player.countCards('e')>=target.countCards('e');
				},
				content:function(){
					trigger.num+=2;
				},
			},
			sgws_pojun2:{
				init:function(player,skill){
					if(!player.storage[skill]) player.storage[skill]=[];
				},
				trigger:{global:'phaseEnd'},
				forced:true,
				popup:false,
				charlotte:true,
				filter:function(event,player){
					return player.storage.sgws_pojun2&&player.storage.sgws_pojun2.length>0;
				},
				content:function(){
					game.log(player,'收回了'+get.cnNumber(player.gain(player.storage.sgws_pojun2,'draw','fromStorage').cards.length)+'张〖破军〗牌');
					player.storage.sgws_pojun2.length=0;
					player.removeSkill('sgws_pojun2');
				},
				intro:{
					onunmark:'throw',
					content:'cardCount',
				},
			},
            sgws_pojun4:{
				audio:"decadepojun",
				trigger:{source:'damageSource'},
				check:function(event,player){
					if(event.player.isTurnedOver()) return get.attitude(player,event.player)>0;
					if(event.player.hp<3){
						return get.attitude(player,event.player)<0;
					}
					return get.attitude(player,event.player)>0;
				},
				filter:function(event){
					if(event._notrigger.contains(event.player)) return false;
					return event.card&&event.card.name=='sha'&&event.player.isAlive();
				},
				logTarget:'player',
				content:function(){
					"step 0"
					trigger.player.draw(trigger.player.hp-1);
					"step 1"
					trigger.player.turnOver();
				}
			},
            sgws_shanjia:{
				group:["sgws_shanjia_count"],
				locked:false,
				mod:{
					aiValue:function(player,card,num){
						if((player.storage.sgws_shanjia||0)<3&&get.type(card)=='equip'&&!get.cardtag(card,'gifts')){
							return num/player.hp;
						}
					},
				},
				subSkill:{
					count:{
						forced:true,
						silent:true,
						popup:false,
						trigger:{
							player:"loseEnd",
						},
						filter:function(event,player){
							return event.cards2&&event.cards2.length>0;
						},
						content:function (){
							lib.skill.sgws_shanjia.sync(player);
						},
					},
				},
				audio:"shanjia",
				trigger:{
					player:"phaseUseBegin",
				},
				intro:{
					content:"本局游戏内已失去过#张装备牌",
				},
				frequent:true,
				sync:function(player){
					var history=player.actionHistory;
					var num=0;
					for(var i=0;i<history.length;i++){
						for(var j=0;j<history[i].lose.length;j++){
							if(history[i].lose[j].parent.name=='useCard') continue;
							num+=history[i].lose[j].cards2.filter(function(card){
								return get.type(card,false)=='equip';
							}).length;
						}
					}
					player.storage.sgws_shanjia=num;
					if(num>0) player.markSkill('sgws_shanjia');
				},
				content:function (){
					'step 0'
					player.draw(4);
					'step 1'
					lib.skill.sgws_shanjia.sync(player);
					var num=3-player.storage.sgws_shanjia;
					if(num>0){
						player.chooseToDiscard('he',true,num).ai=get.disvalue;
					}
					'step 2'
					var bool=true;
					if(result.cards){
						for(var i=0;i<result.cards.length;i++){
							if(['basic','trick'].contains(get.type(result.cards[i],'trick',result.cards[i].original=='h'?player:false))){
								bool=false;break;
							}
						}
					}
					if(bool){
						player.chooseUseTarget({name:'sha'},'是否视为使用一张【杀】？',false,'nodistance');
					}
				},
				ai:{
					threaten:3,
					noe:true,
					reverseOrder:true,
					skillTagFilter:function(player){
						if(player.storage.sgws_shanjia>2) return false;
					},
					effect:{
						target:function(card,player,target){
							if(player.storage.sgws_shanjia<3&&get.type(card)=='equip'&&!get.cardtag(card,'gifts')) return [1,3];
						},
					},
				},
			},
            "sgws_shanbi":{
                audio:"ark_shanbi",
                trigger:{
                    player:"damageBegin4",
                },
                filter:function(event){
                return !event.nature
                },
                forced:true,
                content:function(){
                    trigger.cancel();
                }
            },
            "sgws_jianshe":{
                audio:"ark_jianshe",
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
                        prompt:get.prompt('sgws_jianshe'),
                        prompt2:'弃置2张牌，对与'+get.translation(trigger.player)+'相互距离等于1的一名角色造成2点伤害',
                    });
                    "step 1"
                    if(result.bool){
                        var target=result.targets[0];
                        player.logSkill('sgws_jianshe',target);
                        player.discard(result.cards);
                        target.damage(2)
                    }
                },
            },
            sgws_anxu:{
				audio:"reanxu",
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return game.countPlayer()>2&&game.hasPlayer(function(current){
						return current!=player&&current.countCards('he');
					});
				},
				selectTarget:2,
				filterTarget:function(card,player,target){
					if(target==player) return false;
					if(!ui.selected.targets.length) return target.countCards('he')>0;
					return target!=ui.selected.targets[0]&&ui.selected.targets[0].countGainableCards(target,'he')>0;
				},
				multitarget:true,
				targetprompt:['被拿牌','得到牌'],
				content:function(){
					'step 0'
					targets[1].gainPlayerCard(targets[0],'he',true);
					'step 1'
                     player.draw(2);
					'step 2'
					if(targets[0].isIn()&&targets[1].isIn()&&
						targets[0].countCards('h')!=targets[1].countCards('h')){
						event.target=targets[targets[0].countCards('h')>targets[1].countCards('h')?1:0];
						player.chooseBool('是否令'+get.translation(event.target)+'摸一张牌？').set('ai',function(){
							var evt=_status.event.getParent();
							return get.attitude(evt.player,evt.target)>0;
						})
					}
					else event.finish();
					'step 3'
					if(result.bool) target.draw();
				},
				ai:{
					expose:0.2,
					threaten:2,
					order:9,
					result:{
						player:function(player,target){
							if(ui.selected.targets.length) return 0.01;
							return target.countCards('e')?0:0.5;
						},
						target:function(player,target){
							if(ui.selected.targets.length){
								player=target;
								target=ui.selected.targets[0];
								if(get.attitude(player,target)>1){
									return 0;
								}
								return target.countCards('h')-player.countCards('h')>(target.countCards('e')?2:1)?2:1;
							}
							else{
								if(get.attitude(player,target)<=0) return (target.countCards('he',function(card){
									return card.name=='tengjia'||get.value(card)>0;
								})>0)?-1.5:1.5;
								return (target.countCards('he',function(card){
									return card.name!='tengjia'&&get.value(card)<=0;
								})>0)?1.5:-1.5
							}
						},
					},
				},
			},
            sgws_qizhi:{
				audio:"qizhi",
				trigger:{
					player:'useCardToPlayered'
				},
				direct:true,
				filter:function(event,player){
					if(!event.targets) return false;
					if(!event.isFirstTarget) return false;
					if(_status.currentPhase!=player) return false;
					var type=get.type(event.card,'trick');
					if(type!='basic'&&type!='trick') return false;
					if(event.noai) return false;
					return game.hasPlayer(function(target){
						return !event.targets.contains(target)&&target.countCards('he')>0;
					});
				},
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('sgws_qizhi'),'弃置一名角色的一张牌，然后其摸两张牌',function(card,player,target){
						return !_status.event.targets.contains(target)&&target.countCards('he')>0;
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
						player.getHistory('custom').push({sgws_qizhi:true});
						player.logSkill('sgws_qizhi',result.targets);
						player.discardPlayerCard(result.targets[0],true,'he');
						event.target=result.targets[0];
					}
					else{
						event.finish();
					}
					'step 2'
					event.target.draw(2);
				},
			},
			sgws_jinqu:{
				audio:"jinqu",
				trigger:{player:'phaseJieshuBegin'},
				check:function(event,player){
					return player.getHistory('custom',function(evt){
						return evt.sgws_qizhi==true;
					}).length>=player.countCards('h');
				},
				prompt:function(event,player){
					var num=player.getHistory('custom',function(evt){
						return evt.sgws_qizhi==true;
					}).length;
					return '进趋：是否摸三张牌并将手牌弃置至'+get.cnNumber(num)+'张？';
				},
				content:function(){
					'step 0'
					player.draw(3);
					'step 1'
					var dh=player.countCards('h')-player.getHistory('custom',function(evt){
						return evt.sgws_qizhi==true;
					}).length;
					if(dh>0){
						player.chooseToDiscard(dh,true);
					}
				},
				ai:{combo:'sgws_qizhi'},
			},
            sgws_gushe:{
				audio:'gushe',
				enable:'phaseUse',
				filterTarget:function(card,player,target){
					return player.canCompare(target);
				},
				selectTarget:[1,3],
				filter:function(event,player){
					return (player.countMark('sgws_gushe2')<7)&&player.countCards('h')>0;
				},
				multitarget:true,
				multiline:true,
				content:function(){
					player.addTempSkill('sgws_gushe2');
					player.chooseToCompare(targets).callback=lib.skill.sgws_gushe.callback;
				},
				intro:{
					name:'饶舌',
					content:'mark'
				},
				callback:function(){
					'step 0'
					if(event.num1<=event.num2){
						target.chat(lib.skill.gushe.chat[player.countMark('sgws_gushe')]);
						game.delay();
						player.addMark('sgws_gushe',1);
					}
					else player.addMark('sgws_gushe2',1,false);
					'step 1'
					if(event.num1>=event.num2){
						target.chooseToDiscard('he','弃置一张牌，或令'+get.translation(player)+'摸一张牌').set('ai',function(card){
							if(_status.event.goon) return 6-get.value(card);
							return 0;
						}).set('goon',get.attitude(target,player)<0);
					}
					else event.goto(3);
					'step 2'
					if(!result.bool){
						player.draw();
					}
					'step 3'
					if(event.num1<=event.num2){
						player.chooseToDiscard('he','弃置一张牌，或摸一张牌').set('ai',function(){return -1;});
					}
					else event.finish();
					'step 4'
					if(!result.bool) player.draw();
				},
				ai:{
					order:7,
					result:{
						target:function(player,target){
							var num=ui.selected.targets.length+1;
							if(num+player.countMark('sgws_gushe')<=6) return -1;
							var hs=player.getCards('h');
							for(var i=0;i<hs.length;i++){
								if(get.value(hs[i])<=6){
									switch(hs[i].number){
										case 13:return -1;
										case 12:if(player.countMark('sgws_gushe')+num<=8) return -1;break;
										case 11:if(player.countMark('sgws_gushe')+num<=7) return -1;break;
										default:if(hs[i].number>5&&player.countMark('sgws_gushe')+num<=6) return -1;
									}
								}
							}
							return 0;
						},
					}
				},
				marktext:'饶',
			},
			sgws_gushe2:{
				charlotte:true,
				onremove:true,
			},
			sgws_jici:{
				audio:'jici',
				trigger:{
					player:'compare',
					target:'compare',
				},
				forced:true,
				filter:function(event,player){
					if(player!=event.target&&event.iwhile) return false;
					return true;
				},
				content:function(){
					trigger[player==trigger.player?'num1':'num2']+=player.countMark('sgws_gushe');
					game.log(player,'的拼点牌点数+'+player.countMark('sgws_gushe'));
					game.delayx();
					var cards=[trigger.card1];
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
					if(cards.length) player.gain(cards,'gain2');
				},
			},
            sgws_qiai:{
				audio:"spqiai",
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.countCards('he',function(card){
						return get.type(card)!='basic';
					})>0;
				},
				filterCard:function(card){
					return get.type(card)!='basic';
				},
				position:'he',
				filterTarget:lib.filter.notMe,
				delay:false,
				discard:false,
				lose:false,
				check:function(card){
					var player=_status.event.player;
					if(get.position(card)=='e'&&card.name=='jinhe') return 10;
					if(player.isHealthy()) return 7-get.value(card);
					return 9-get.value(card);
				},
				content:function(){
					'step 0'
					target.gain(cards,player,'give');
					'step 1'
					if(!target.isIn()){
						event.finish();
						return;
					}
					if(player.isHealthy()) event._result={index:1};
					else{
						var str=get.translation(player);
						target.chooseControl().set('choiceList',[
							'令'+str+'回复1点体力',
							'令'+str+'摸两张牌',
						]);
					}
					'step 2'
					if(result.index==0) player.recover(2);
					else player.draw(3);
				},
				ai:{
					order:8,
					result:{
						player:1,
						target:function(player,target){
							if(ui.selected.cards.length){
								var card=ui.selected.cards[0];
								var val=get.value(card,target);
								if(val<0) return -1;
								if(target.hasSkillTag('nogain')) return 0;
								var useval=target.getUseValue(card);
								if(val<1||useval<=0) return 0.1;
								return Math.sqrt(useval);
							}
							return 0;
						},
					},
				},
			},
			sgws_shanxi:{
				audio:"spshanxi",
				trigger:{player:'phaseUseBegin'},
				direct:true,
				filter:function(event,player){
					return game.hasPlayer(function(current){
						return current!=player&&!current.hasMark('sgws_shanxi');
					});
				},
				content:function(){
					'step 0'
					var eff=0;
					var target=game.findPlayer(function(current){
						return current!=player&&!current.hasMark('sgws_shanxi');
					});
					if(target) eff=(-get.attitude(player,target)/Math.sqrt(Math.max(1,target.hp)));
					player.chooseTarget(get.prompt('sgws_shanxi'),'令一名其他角色获得“檄”',function(card,player,target){
						return target!=player&&!target.hasMark('sgws_shanxi');
					}).set('ai',function(target){
						return (-get.attitude(_status.event.player,target)/Math.sqrt(Math.max(1,target.hp)))-_status.event.eff;
					}).set('eff',eff);
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('sgws_shanxi',target);
						game.countPlayer(function(current){
							if(current==target) current.addMark('sgws_shanxi',1);
							else{
								var num=current.countMark('sgws_shanxi');
								if(num>0) current.removeMark('sgws_shanxi',num);
							}
						});
					}
				},
				marktext:'檄',
				intro:{
					name2:'檄',
					content:'已被设下索命檄文',
				},
				group:'sgws_shanxi_suoming',
				ai:{threaten:3.3},
			},
			sgws_shanxi_suoming:{
				audio:'spshanxi',
				trigger:{global:'recoverAfter'},
				forced:true,
				filter:function(event,player){
					return event.player.hasMark('sgws_shanxi')&&event.player.hp>0;
				},
				logTarget:'player',
				content:function(){
					'step 0'
					if(trigger.player.countCards('he')<3) event._result={bool:false};
					else trigger.player.chooseCard('he',3,'交给'+get.translation(player)+'三张牌，或失去两点体力').set('ai',function(card){
						return 9-get.value(card);
					});
					'step 1'
					if(!result.bool) trigger.player.loseHp(2);
					else player.gain(result.cards,trigger.player,'giveAuto');
				},
			},
            "sgws_sanwen":{
				audio:"xinfu_sanwen",
				usable:1,
				trigger:{
					player:"gainAfter",
				},
				filter:function (event,player){
					var namelist=[];
					var namedlist=[];
					for(var i=0;i<event.cards.length;i++){
						namelist.add(get.name(event.cards[i]));
					}
					var hs=player.getCards('h');
					for(var j=0;j<hs.length;j++){
						if(namelist.contains(get.name(hs[j]))&&!event.cards.contains(hs[j])) return true;
					}
					return false;
				},
				content:function (){
					'step 0'
					var namelist=[];
					var namedlist=[];
					var nameddlist=[];
					var namedddlist=[];
					for(var i=0;i<trigger.cards.length;i++){
						namelist.add(get.name(trigger.cards[i]));
					}
					var hs=player.getCards('h');
					for(var j=0;j<hs.length;j++){
						if(namelist.contains(get.name(hs[j]))&&!trigger.cards.contains(hs[j])){
							namedlist.push(hs[j]);
							namedddlist.add(get.name(hs[j]));
						}
					}
					for(var k=0;k<trigger.cards.length;k++){
						if(namedddlist.contains(get.name(trigger.cards[k]))) nameddlist.push(trigger.cards[k]);
					}
					var showlist=namedlist.concat(nameddlist);
					player.showCards(showlist);
					player.discard(nameddlist);
					player.draw(3*nameddlist.length);
				},
			},
			"sgws_qiai2":{
				unique:true,
				init:function (player){
					player.storage.sgws_qiai2=false;
				},
				filter:function (event,player){
					return player.storage.sgws_qiai2==false;
				},
				skillAnimation:true,
				animationColor:'gray',
				trigger:{
					player:"dying",
				},
				limited:true,
				marktext:"哀",
				mark:true,
				intro:{
					content:"limited",
				},
				//priority:6,
				audio:"xinfu_qiai",
				content:function (){
					"step 0"
					player.awakenSkill('sgws_qiai2');
					player.storage.sgws_qiai2=true;
					event.current=player.next;
					"step 1"
					if(!event.current.countCards('he')) event.goto(3);
					else event.current.chooseCard('交给'+get.translation(player)+'两张牌','he',true,2).set('ai',function(card){
						var evt=_status.event.getParent();
						if(get.attitude(_status.event.player,evt.player)>2){
							if(card.name=='jiu') return 120;
							if(card.name=='tao') return 110;
						}
						return 100-get.value(card);
					});
					"step 2"
					if(result.bool&&result.cards&&result.cards.length){
						player.gain(result.cards,event.current,'giveAuto');
					}
					"step 3"
					event.current=event.current.next;
					if(event.current!=player) event.goto(1);
				},
			},
			"sgws_denglou":{
				unique:true,
				audio:"xinfu_denglou",
				trigger:{
					player:"phaseJieshuBegin",
				},
				limited:true,
				init:function (player){
					player.storage.sgws_denglou=false;
				},
				filter:function (event,player){
					if(player.countCards('h')) return false;
					return player.storage.sgws_denglou==false;
				},
				skillAnimation:true,
				animationColor:'gray',
				marktext:"登",
				mark:true,
				intro:{
					content:"limited",
				},
				content:function (){
					"step 0"
					player.awakenSkill('sgws_denglou');
					player.storage.sgws_denglou=true;
					event.cards=get.cards(5);
					event.gains=[]
					event.discards=[]
					var content=['牌堆顶的五张牌',event.cards];
					game.log(player,'观看了','#y牌堆顶的五张牌');
					player.chooseControl('ok').set('dialog',content);
					"step 1"
					if(get.type(event.cards[0])!="basic"){
						event.gains.push(event.cards[0]);
						event.cards.remove(event.cards[0]);
					}
					else{
						var bool=game.hasPlayer(function(current){
							return player.canUse(event.cards[0],current);
						});
						if(bool){
							player.chooseUseTarget(event.cards[0],true,false);
						}
						else event.discards.push(event.cards[0]);
						event.cards.remove(event.cards[0]);
					}
					"step 2"
					if(event.cards.length) event.goto(1);
					else{
						if(event.gains.length) player.gain(event.gains,'gain2');
						if(event.discards.length){
							player.$throw(event.discards);
							game.cardsDiscard(event.discards);
						}
					}
				},
			},
            sgws_danfa:{
				audio:"twdanfa",
				trigger:{player:['phaseZhunbeiBegin','phaseJieshuBegin']},
				filter:function(event,player){
					return player.countCards('he')>0;
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseCard('he',get.prompt('sgws_danfa'),'将一张牌作为“丹”置于武将牌上').set('ai',function(card){
						if(player.storage.sgws_danfa){
							var suit=get.suit(card);
							for(var i of player.storage.sgws_danfa){
								if(get.suit(i,false)==suit) return 4-get.value(card);
							}
						}
						return 5.5-get.value(card);
					});
					'step 1'
					if(result.bool){
						var card=result.cards[0];
						player.logSkill('sgws_danfa');
						game.log(player,'将',card,'放在了武将牌上');
						player.$give(card,player,false);
						player.lose(card,ui.special,'toStorage');
						player.markAuto('sgws_danfa',result.cards);
					}
					else event.finish();
					'step 2'
					game.delayx();
				},
				mark:true,
				intro:{
					content:'cards',
					onunmark:'throw',
				},
				group:'sgws_danfa_draw',
				subSkill:{
					draw:{
						audio:'twdanfa',
						trigger:{player:'useCard'},
						forced:true,
						locked:false,
						filter:function(event,player){
							if(!player.storage.sgws_danfa||!player.storage.sgws_danfa.length) return false;
							var suit=get.suit(event.card,false);
							if(suit=='none'||player.storage.sgws_danfa_count&&player.storage.sgws_danfa_count.contains(suit)) return false;
							for(var i of player.storage.sgws_danfa){
								if(get.suit(i,false)==suit) return true;
							}
							return false;
						},
						content:function(){
							player.draw(2);
							player.addTempSkill('sgws_danfa_count');
							if(!player.storage.sgws_danfa_count) player.storage.sgws_danfa_count=[];
							player.storage.sgws_danfa_count.push(get.suit(trigger.card,false));
						},
					},
					count:{onremove:true},
				},
			},
			sgws_lingbao:{
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					var list=player.getStorage('sgws_danfa');
					if(list.length<2) return false;
					var suit=get.suit(list[0],false);
					for(var i=1;i<list.length;i++){
						if(get.suit(list[i],false)!=suit) return true;
					}
					return false;
				},
				chooseButton:{
					dialog:function(event,player){
						return ui.create.dialog('灵宝',player.storage.sgws_danfa);
					},
					filter:function(button,player){
						if(!ui.selected.buttons.length) return true;
						return get.suit(button.link)!=get.suit(ui.selected.buttons[0].link);
					},
					select:2,
					backup:function(links){
						var obj=get.copy(lib.skill['sgws_lingbao_'+get.color(links)]);
						obj.cards=links;
						obj.audio='twlingbao';
						obj.filterCard=()=>false;
						obj.selectCard=-1;
						return obj;
					},
					prompt:function(links){
						return lib.skill['sgws_lingbao_'+get.color(links)].prompt;
					},
					check:function(button){
						var storage=_status.event.player.storage.sgws_danfa.slice(0);
						storage.remove(button.link);
						if(storage.filter(function(card){
							return card.suit==button.link.suit;
						}).length) return 1+Math.random();
						return 0;
					},
				},
				subSkill:{
					red:{
						filterTarget:function(card,player,target){
							return target.isDamaged();
						},
						delay:false,
						prompt:'令一名角色回复两点体力',
						content:function(){
							'step 0'
							var cards=lib.skill.sgws_lingbao_backup.cards;
							player.$throw(cards,1000);
							player.unmarkAuto('sgws_danfa',cards);
							game.log(player,'将',cards,'置入了弃牌堆');
							game.delayx();
							game.cardsDiscard(cards);
							'step 1'
							target.recover(2);
						},
						ai:{
							tag:{
								recover:1,
							},
							result:{
								target:1.5,
							},
						},
					},
					black:{
						filterTarget:function(card,player,target){
							return target.countDiscardableCards(player,'hej')>0;
						},
						delay:false,
						prompt:'弃置一名角色区域内至多三张区域不同的牌',
						content:function(){
							'step 0'
							var cards=lib.skill.sgws_lingbao_backup.cards;
							player.$throw(cards,1000);
							player.unmarkAuto('sgws_danfa',cards);
							game.log(player,'将',cards,'置入了弃牌堆');
							game.delayx();
							game.cardsDiscard(cards);
							'step 1'
							var num=0;
							if(target.countDiscardableCards(player,'h')) num++;
							if(target.countDiscardableCards(player,'e')) num++;
							if(target.countDiscardableCards(player,'j')) num++;
							if(num){
								player.discardPlayerCard(target,[1,Math.max(3,num)],'hej',true).set('filterButton',function(button){
									for(var i=0;i<ui.selected.buttons.length;i++){
										if(get.position(button.link)==get.position(ui.selected.buttons[i].link)) return false;
									}
									return true;
								});
							}
						},
						ai:{
							tag:{
								lose:1.5,
								loseCard:1.5,
								discard:1.5,
							},
							result:{
								target:function(player,target){
									if(get.attitude(player,target)>0&&target.countCards('e',function(card){
										return get.value(card,target)<=0;
									})>0&&target.countCards('j',function(card){
										return get.effect(target,card,target,target)<0;
									})>8) return 3;
									if(target.countCards('h')>0&&target.countCards('e',function(card){
										return get.value(card,target)>0;
									})>0) return -2;
									return 0;
								},
							},
						},
					},
					none:{
						selectTarget:2,
						filterTarget:function(card,player,target){
							if(!ui.selected.targets.length) return true;
							return target.countCards('he')>0;
						},
						complexSelect:true,
						targetprompt:['摸牌','弃牌'],
						delay:false,
						prompt:'令一名角色摸两张牌并令另一名角色弃置一张牌',
						multitarget:true,
						multiline:true,
						content:function(){
							'step 0'
							var cards=lib.skill.sgws_lingbao_backup.cards;
							player.$throw(cards,1000);
							player.unmarkAuto('sgws_danfa',cards);
							game.log(player,'将',cards,'置入了弃牌堆');
							game.delayx();
							game.cardsDiscard(cards);
							'step 1'
							targets[0].draw(2);
							targets[1].chooseToDiscard('he',true);
						},
						ai:{
							result:{
								target:function(player,target){
									if(!ui.selected.targets.length) return 1;
									if(target.countCards('e',function(card){
										return get.value(card,target)<=0;
									})>0) return 1;
									return -1;
								},
							},
						},
					},
					backup:{audio:'twlingbao'},
				},
				ai:{
					order:1,
					result:{player:1},
				},
			},
            sgws_zhiyan:{
				audio:"zhiyan",
				trigger:{player:'phaseJieshuBegin'},
				direct:true,
				content:function(){
					"step 0"
					player.chooseTarget(get.prompt('sgws_zhiyan'),'令一名角色摸两张牌并展示之。若有装备牌，则其回复1点体力').set('ai',function(target){
						return get.attitude(_status.event.player,target);
					});
					"step 1"
					if(result.bool){
						event.target=result.targets[0];
						player.logSkill('sgws_zhiyan',result.targets);
						event.bool=false;
						event.target.draw(2,'visible');
					}
					else{
						event.finish();
					}
					"step 2"
					var card=result[0];
                    var card2=result[1];
					if(get.type(card)=='equip'){
						if(!event.target.isDisabled(get.subtype(card))){
							event.target.chooseUseTarget(card,true,'nopopup');
							game.delay();
						}
						event.bool=true;
					}
                    if(get.type(card2)=='equip'){
						if(!event.target.isDisabled(get.subtype(card2))){
							event.target.chooseUseTarget(card2,true,'nopopup');
							game.delay();
						}
						event.bool=true;
					}

					"step 3"
					if(event.bool) target.recover();
				},
				ai:{
					expose:0.2,
					threaten:1.2
				}
			},
            sgws_lianhua:{
				derivation:['exzyyz','exzglgx','sgws_zhiyan','jslmgx'],
				audio:"gxlianhua",
				init:function(player,skill){
					if(!player.storage[skill]) player.storage[skill]={
						red:0,black:0,
					}
				},
				marktext:'丹',
				intro:{
					name:'丹血',
					markcount:function(storage){
						return storage.red+storage.black;
					},
					content:function(storage){
						return '共有'+(storage.red+storage.black)+'个标记';
					},
				},
				trigger:{global:'damageEnd'},
				forced:true,
				filter:function(event,player){
					return event.player!=player&&event.player.isAlive()&&_status.currentPhase!=player;
				},
				content:function(){
					player.storage.sgws_lianhua[player.getFriends().contains(trigger.player)?'red':'black']++;
					player.markSkill('sgws_lianhua');
				},
				group:'sgws_lianhua_harmonia',
				subSkill:{
					harmonia:{
						forced:true,
						audio:'gxlianhua',
						sub:true,
						trigger:{player:'phaseZhunbeiBegin'},
						forced:true,
						content:function(){
							var cards=[];
							var cards2=[];
							var skill='';
							var red=player.storage.sgws_lianhua.red;
							var black=player.storage.sgws_lianhua.black;
							player.storage.sgws_lianhua={red:0,black:0};
							player.unmarkSkill('sgws_lianhua');
							if(red+black<4){
								cards=['tao','lebu'];
								skill='exzyyz';
							}
							else if(red>black){
								cards=['wuzhong','lebu'];
								skill='exzglgx';
							}
							else if(red<black){
								cards=['shunshou','lebu'];
								skill='sgws_zhiyan';
							}
							else{
								cards=['sha','juedou','lebu'];
								skill='jslmgx';
							}
							for(var i=0;i<cards.length;i++){
								var card=get.cardPile(function(shiona){
									return shiona.name==cards[i];
								});
								if(card) cards2.push(card);
							}
							player.addTempSkill(skill);
							if(cards2.length) player.gain(cards2,'gain2','log');
						},
					},
				},
			},
            sgws_jiuchi:{
				mod:{
					cardUsable:function(card,player,num){
						if(card.name=='jiu') return Infinity;
					},
				},
				audio:"oljiuchi",
				enable:'chooseToUse',
				filterCard:function(card){
					return get.color(card)=='black';
				},
				viewAs:{name:'jiu'},
				position:'hs',
				viewAsFilter:function(player){
					if(!player.countCards('hs',{color:'black'})) return false;
					return true;
				},
				prompt:'将一张黑色手牌当酒使用',
				check:function(cardx,player){
					if(player&&player==cardx.player) return true;
					if(_status.event.type=='dying') return 1;
					var player=_status.event.player;
					var shas=player.getCards('hs',function(card){
						return card!=cardx&&get.name(card,player)=='sha';
					});
					if(!shas.length) return -1;
					if(shas.length>1&&(player.getCardUsable('sha')>1||player.countCards('hs','zhuge'))){
						return 0;
					}
					shas.sort(function(a,b){
						return get.order(b)-get.order(a);
					});
					var card=false;
					if(shas.length){
						for(var i=0;i<shas.length;i++){
							if(shas[i]!=cardx&&lib.filter.filterCard(shas[i],player)){
								card=shas[i];break;
							}
						}
					}
					if(card){
						if(game.hasPlayer(function(current){
							return (get.attitude(player,current)<0&&
							!current.hasShan()
							&&current.hp+current.countCards('h',{name:['tao','jiu']})>1+(player.storage.jiu||0)
							&&player.canUse(card,current,true,true)&&
							!current.hasSkillTag('filterDamage',null,{
								player:player,
								card:card,
								jiu:true,
							})&&
							get.effect(current,card,player)>0);
						})){
							return 4-get.value(cardx);
						}
					}
					return -1;
				},
				ai:{
					threaten:1.5,
				},
			},
            sgws_hengzheng:{
				audio:"hengzheng",
				trigger:{player:'phaseDrawBegin1'},
				preHidden:true,
				filter:function(event,player){
					return !event.numFixed&&(player.hp==1||player.countCards('h')==0);
				},
				check:function(event,player){
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
					"step 0"
					var targets=game.filterPlayer();
					targets.remove(player);
                    for(let i of targets)
                        if(i.isFriendsOf(player))
                            targets.remove(i);
					targets.sort(lib.sort.seat);
					event.targets=targets;
					event.num=0;
					trigger.changeToZero();
					player.line(targets,'green');
					"step 1"
					if(num<event.targets.length){
						if(event.targets[num].countCards('hej')){
							player.gainPlayerCard(event.targets[num],'hej',true);
						}
						event.num++;
						event.redo();
					}
				},
				ai:{
					noh:true,
					skillTagFilter:function(player,tag){
						if(tag=='noh'){
							if(player.countCards('h')!=1) return false;
						}
					},
					threaten:function(player,target){
						if(target.hp==1) return 2.5;
						return 1;
					},
				}
			},
            sgws_beige:{
				audio:'beige',
				trigger:{global:'damageEnd'},
				filter:function(event,player){
					return (event.card&&event.card.name=='sha'&&event.source&&
						event.player.classList.contains('dead')==false&&player.countCards('he'));
				},
				direct:true,
				checkx:function(event,player){
					var att1=get.attitude(player,event.player);
					var att2=get.attitude(player,event.source);
					return att1>0&&att2<=0;
				},
				content:function(){
					"step 0"
					var next=player.chooseToDiscard('he',get.prompt2('sgws_beige',trigger.player));
					var check=lib.skill.beige.checkx(trigger,player);
					next.set('ai',function(card){
						if(_status.event.goon) return 8-get.value(card);
						return 0;
					});
					next.set('logSkill','sgws_beige');
					next.set('goon',check);
					"step 1"
					if(result.bool){
						trigger.player.judge();
					}
					else{
						event.finish();
					}
					"step 2"
					switch(result.suit){
						case 'heart':trigger.player.recover(trigger.num+2);break;
						case 'diamond':trigger.player.draw(5);break;
						case 'club':trigger.source.chooseToDiscard('he',4,true);break;
						case 'spade':trigger.source.turnOver();break;
					}
				},
				ai:{
					expose:0.3
				}
			},
            sgws_chenqing:{
				audio:"chenqing",
				trigger:{global:'dying'},
				//priority:6,
				filter:function(event,player){
					return event.player.hp<=0&&!player.hasSkill('chenqing2');
				},
				direct:true,
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt2('sgws_chenqing'),function(card,player,target){
						return target!=player&&target!=_status.event.getTrigger().player;
					}).set('ai',function(target){
						var player=_status.event.player;
						var trigger=_status.event.getTrigger();
						if(get.attitude(player,trigger.player)>0){
							var att1=get.attitude(target,player);
							var att2=get.attitude(target,trigger.player);
							var att3=get.attitude(player,target);
							if(att3<0) return 0;
							return att1/2+att2+att3;
						}
						else{
							return 0;
							// return get.attitude(player,target);
						}
					});
					'step 1'
					if(result.bool){
						player.addTempSkill('chenqing2','roundStart');
						event.target=result.targets[0];
						event.target.draw(6);
						player.logSkill('sgws_chenqing',event.target);
					}
					else{
						event.finish();
					}
					'step 2'
					var target=event.target;
					var tosave=trigger.player;
					var att=get.attitude(target,tosave);
					var hastao=target.countCards('h','tao');
					target.chooseToDiscard(4,true,'he').set('ai',function(card){
						var hastao=_status.event.hastao;
						var att=_status.event.att;
						if(!hastao&&att>0){
							var suit=get.suit(card);
							for(var i=0;i<ui.selected.cards.length;i++){
								if(get.suit(ui.selected.cards[i])==suit){
									return -4-get.value(card);
								}
							}
						}
						if(att<0&&ui.selected.cards.length==3){
							var suit=get.suit(card);
							for(var i=0;i<ui.selected.cards.length;i++){
								if(get.suit(ui.selected.cards[i])==suit){
									return -get.value(card);
								}
							}
							return -10-get.value(card);
						}
						return -get.value(card);
					}).set('hastao',hastao).set('att',att);
					'step 3'
					if(result.cards&&result.cards.length==4){
						var suits=[];
						for(var i=0;i<result.cards.length;i++){
							suits.add(get.suit(result.cards[i]));
						}
						if(suits.length==4&&game.checkMod({name:'tao',isCard:true},player,trigger.player,'unchanged','cardSavable',player)){
							event.target.useCard({name:'tao',isCard:true},trigger.player);
						}
					}
				},
				ai:{
					expose:0.2,
					threaten:1.5,
				}
			},
            "sgws_luoyi":{
				audio:"reluoyi",
				trigger:{
					player:"phaseDrawBegin1",
				},
				forced:true,
				locked:false,
				filter:function(event,player){
					return !event.numFixed;
				},
				content:function (){
					"step 0"
					var cards=get.cards(3);
					game.cardsGotoOrdering(cards);
					player.showCards(cards,'裸衣');
					var cardsx=[];
					for(var i=0;i<cards.length;i++){
						if(get.type(cards[i])=='basic'||cards[i].name=='juedou'||
							(get.type(cards[i])=='equip'&&get.subtype(cards[i])=='equip1')){
							cardsx.push(cards[i]);
						}
					}
					event.cards=cardsx;
					player.chooseBool("是否放弃摸牌"+(cardsx.length?("，改为获得"+get.translation(cardsx)):"")+"？").ai=function(){
						var num=3;
						return cardsx.length>=trigger.num;
					};
					"step 1"
					if(result.bool){
						if(cards.length) player.gain(cards,'gain2');
						//game.cardsDiscard(cards2);
						player.addTempSkill('sgws_luoyi2',{player:'phaseBefore'});
						trigger.changeToZero();
					}
					//else game.cardsDiscard(cards);
				},
			},
            sgws_luoyi2:{
				trigger:{source:'damageBegin1'},
				filter:function(event){
					return event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&event.notLink();
				},
				forced:true,
				content:function(){
					trigger.num+=2;
				},
				ai:{
					damageBonus:true
				}
			},
            sgws_aocai:{
				audio:"aocai",
				enable:['chooseToUse','chooseToRespond'],
				hiddenCard:function(player,name){
					if(player!=_status.currentPhase&&get.type(name)=='basic'&&lib.inpile.contains(name)) return true;
				},
				filter:function(event,player){
					if(event.responded||player==_status.currentPhase||event.sgws_aocai) return false;
					for(var i of lib.inpile){
						if(get.type(i)=='basic'&&event.filterCard({name:i},player,event)) return true;
					}
					return false;
				},
				delay:false,
				content:function(){
					'step 0'
					var evt=event.getParent(2);
					evt.set('sgws_aocai',true);
					var cards=get.cards((get.mode()!='guozhan'&&player.countCards('h')==0)?5:3);
					for(var i=cards.length-1;i>=0;i--){
						ui.cardPile.insertBefore(cards[i].fix(),ui.cardPile.firstChild);
					}
					var aozhan=player.hasSkill('aozhan');
					player.chooseButton(['傲才：选择要'+(evt.name=='chooseToUse'?'使用':'打出')+'的牌',cards]).set('filterButton',function(button){
						return _status.event.cards.contains(button.link);
					}).set('cards',cards.filter(function(card){
						if(aozhan&&card.name=='tao'){
							return evt.filterCard({
								name:'sha',isCard:true,cards:[card],
							},evt.player,evt)||evt.filterCard({
								name:'shan',isCard:true,cards:[card],
							},evt.player,evt);
						}
						return evt.filterCard(card,evt.player,evt);
					})).set('ai',function(button){
						var evt=_status.event.getParent(3);
						if(evt&&evt.ai){
							var tmp=_status.event;
							_status.event=evt;
							var result=(evt.ai||event.ai1)(button.link,_status.event.player,evt);
							_status.event=tmp;
							return result;
						}
						return 1;
					});
					'step 1'
					var evt=event.getParent(2);
					if(result.bool&&result.links&&result.links.length){
						var name=result.links[0].name,aozhan=(player.hasSkill('aozhan')&&name=='tao');
						if(aozhan){
							name=evt.filterCard({
								name:'sha',isCard:true,cards:[card],
							},evt.player,evt)?'sha':'shan';
						}
						if(evt.name=='chooseToUse'){
							game.broadcastAll(function(result,name){
								lib.skill.sgws_aocai_backup.viewAs={name:name,cards:[result],isCard:true};
								lib.skill.sgws_aocai_backup.prompt='选择'+get.translation(result)+'的目标';
							},result.links[0],name);
							evt.set('_backupevent','sgws_aocai_backup');
							evt.backup('sgws_aocai_backup');
						}
						else{
							delete evt.result.skill;
							delete evt.result.used;
							evt.result.card=get.autoViewAs(result.links[0]);
							if(aozhan) evt.result.card.name=name;
							evt.result.cards=[result.links[0]];
							evt.redo();
							return;
						}
					}
					evt.goto(0);
				},
				ai:{
					effect:{
						target:function(card,player,target,effect){
							if(get.tag(card,'respondShan')) return 0.7;
							if(get.tag(card,'respondSha')) return 0.7;
						}
					},
					order:11,
					respondShan:true,
					respondSha:true,
					result:{
						player:function(player){
							if(_status.event.dying) return get.attitude(player,_status.event.dying);
							return 1;
						}
					}
				}
			},
			sgws_aocai_backup:{
				sourceSkill:'sgws_aocai',
				precontent:function(){
					delete event.result.skill;
					var name=event.result.card.name;
					event.result.cards=event.result.card.cards;
					event.result.card=get.autoViewAs(event.result.cards[0]);
					event.result.card.name=name;
				},
				filterCard:function(){return false},
				selectCard:-1,
			},
            sgws_duwu:{
				audio:"duwu",
				enable:'phaseUse',
				filter:function(event,player){
					return player.hasSkill('duwu2')==false&&game.hasPlayer(function(current){
						return current.hp>0&&current.hp<=player.countCards('he')&&player.inRange(current);
					});
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
					return target!=player&&target.hp>0&&player.inRange(target)&&ui.selected.cards.length==target.hp;
				},
				check:function(card){
					var player=_status.event.player;
					if(game.hasPlayer(function(current){
						return current!=player&&current.hp>0&&player.inRange(current)&&ui.selected.cards.length==current.hp&&get.damageEffect(current,player,player)>0;
					})) return 0;
					switch(ui.selected.cards.length){
						case 0:return 8-get.value(card);
						case 1:return 6-get.value(card);
						case 2:return 3-get.value(card);
						default:return 0;
					}
				},
				content:function(){
					player.addTempSkill('duwu3');
					target.damage(2,'nocard');
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
			sgws_duwu3:{
				trigger:{global:'dyingAfter'},
				forced:true,
				popup:false,
				charlotte:true,
				filter:function(event,player){
					return event.player.isAlive()&&event.reason&&event.reason.getParent().name=='sgws_duwu';
				},
				content:function(){
					player.loseHp();
					player.addTempSkill('duwu2');
				}
			},
            sgws_zhongzuo:{
				audio:"zhongzuo",
				trigger:{global:'phaseJieshuBegin'},
				direct:true,
				filter:function(event,player){
					return player.getHistory('damage').length>0||player.getHistory('sourceDamage').length>0;
				},
				content:function(){
					'step 0'
					player.chooseTarget(get.prompt('sgws_zhongzuo'),'令一名角色摸三张牌。若其已受伤，则你摸一张牌。').set('ai',function(target){
						if(target.hasSkillTag('nogain')&&target!=_status.currentPhase) return target.isDamaged()?0:1;
						var att=get.attitude(_status.event.player,target);
						if(target.isDamaged()) att=att*1.2;
						return att;
					});
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.logSkill('sgws_zhongzuo',target);
						target.draw(3);
						if(target.isDamaged()) player.draw();
					}
				},
			},
			sgws_wanlan:{
				audio:"wanlan",
				trigger:{global:'dying'},
				check:function(event,player){
					if(get.attitude(player,event.player)<4) return false;
					if(player.countCards('h',function(card){
						var mod2=game.checkMod(card,player,'unchanged','cardEnabled2',player);
						if(mod2!='unchanged') return mod2;
						var mod=game.checkMod(card,player,event.player,'unchanged','cardSavable',player);
						if(mod!='unchanged') return mod;
						var savable=get.info(card).savable;
						if(typeof savable=='function') savable=savable(card,player,event.player);
						return savable;
					})>=1-event.player.hp) return false;
					if(event.player==player||event.player==get.zhu(player)) return true;
					if(_status.currentPhase&&get.damageEffect(_status.currentPhase,player,player)<0) return false;
					return !player.hasUnknown();
				},
				limited:true,
				unique:true,
				filter:function(event,player){
					return event.player.hp<=0;
				},
				skillAnimation:true,
				animationColor:'thunder',
				logTarget:'player',
				content:function(){
					'step 0'
					player.awakenSkill('sgws_wanlan');
					var hs=player.getCards('h')
					if(hs.length) player.discard(hs);
					'step 1'
					var num=2-trigger.player.hp;
					if(num) trigger.player.recover(num);
					'step 2'
					if(_status.currentPhase&&_status.currentPhase.isAlive()){
						var next=_status.currentPhase.damage();
						event.next.remove(next);
						trigger.after.push(next);
					}
				},
			},
            sgws_tongqu:{
				audio:"tongqu",
				trigger:{
					global:['phaseBefore','dying','phaseDrawBegin2'],
					player:['enterGame','phaseZhunbeiBegin'],
				},
				direct:true,
				filter:function(event,player){
					if(event.name=='phaseDraw') return event.player.hasMark('sgws_tongqu');
					if(event.name=='dying') return event.player.hasMark('sgws_tongqu');
					if(event.name=='phaseZhunbei') return game.hasPlayer(function(current){
						return !current.hasMark('sgws_tongqu');
					});
					return !player.hasMark('sgws_tongqu')&&(event.name!='phase'||game.phaseNumber==0);
				},
				content:function(){
					'step 0'
					if(trigger.name=='phaseDraw'){
						player.logSkill('sgws_tongqu',trigger.player);
						trigger.player.draw(2,'nodelay');
						trigger.player.addTempSkill('sgws_tongqu2','phaseDrawAfter');
						event.finish();
					}
					else if(trigger.name=='dying'){
						player.logSkill('sgws_tongqu',trigger.player);
						trigger.player.removeMark('sgws_tongqu',1);
						event.finish();
					}
					else if(trigger.name=='phaseZhunbei'){
						player.chooseTarget(get.prompt2('sgws_tongqu'),function(card,player,target){
							return !target.hasMark('sgws_tongqu');
						}).set('ai',function(target){
							if(_status.event.player.hp<3) return 0;
							return get.attitude(_status.event.player,target);
						});
					}
					else{
						player.logSkill('sgws_tongqu');
						player.addMark('sgws_tongqu',1);
						event.finish();
					}
					'step 1'
					if(result.bool){
						var target=result.targets[0];
						player.loseHp();
						player.logSkill('sgws_tongqu',target);
						target.addMark('sgws_tongqu',1);
					}
				},
				marktext:'渠',
				intro:{content:'mark',name2:'渠'},
			},
			sgws_tongqu2:{
				trigger:{player:'phaseDrawEnd'},
				forced:true,
				silent:true,
				filter:function(event,player){
					var bool=game.hasPlayer(function(current){
						return current!=player&&current.hasMark('sgws_tongqu');
					});
					return player.countCards('he',function(card){
						if(bool) return true;
						return lib.filter.cardDiscardable(card,player);
					})>0;
				},
				content:function(){
					'step 0'
					player.chooseCardTarget({
						forced:true,
						position:'he',
						filterCard:true,
						filterTarget:function(card,player,target){
							return player!=target&&target.hasMark('sgws_tongqu');
						},
						selectTarget:function(){
							if(ui.selected.cards.length&&!lib.filter.cardDiscardable(ui.selected.cards[0],_status.event.player)) return [1,1];
							return [0,1];
						},
						prompt:'弃置一张牌，或将一张牌交给一名有“渠”的其他角色',
						ai1:function(card){
							var player=_status.event.player;
							if(get.name(card)=='du') return 20;
							if(get.position(card)=='e'&&get.value(card)<=0) return 14;
							if(get.position(card)=='h'&&game.hasPlayer(function(current){
								return current!=player&&current.hasMark('sgws_tongqu')&&get.attitude(player,current)>0&&current.getUseValue(card)>player.getUseValue(card)&&current.getUseValue(card)>player.getUseValue(card);
							})) return 12;
							if(game.hasPlayer(function(current){
								return current!=player&&current.hasMark('sgws_tongqu')&&get.attitude(player,current)>0;
							})){
								if(card.name=='wuxie') return 11;
								if(card.name=='shan'&&player.countCards('h','shan')>1) return 9
							}
							return 6/Math.max(1,get.value(card));
						},
						ai2:function(target){
							var player=_status.event.player;
							var card=ui.selected.cards[0];
							var att=get.attitude(player,target);
							if(card.name=='du') return -6*att;
							if(att>0){
								if(get.position(card)=='h'&&target.getUseValue(card)>player.getUseValue(card)) return 4*att;
								if(target.hasUseTarget(card)) return 2*att;
								return 1.2*att;
							}
							return 0;
						},
					});
					'step 1'
					if(result.bool){
						if(result.targets.length){
							event.target=result.targets[0];
							event.target.gain(result.cards,player,'giveAuto');
							event.card=result.cards[0];
						}
						else{
							player.discard(result.cards);
							event.finish();
						}
					}
					'step 2'
					if(target.getCards('h').contains(card)&&get.type(card)=='equip'){
						target.chooseUseTarget(card,true);
					}
				},
			},
            sgws_chongzhen:{
				group:['sgws_chongzhen1','sgws_chongzhen2'],
				audio:'chongzhen1',
				ai:{
					combo:'ollongdan',
					mingzhi:false,
					effect:{
						target:function(card,player,target,current){
							if(get.tag(card,'respondShan')||get.tag(card,'respondSha')){
								if(get.attitude(target,player)<=0){
									if(current>0) return;
									if(target.countCards('h')==0) return 1.6;
									if(target.countCards('h')==1) return 1.2;
									if(target.countCards('h')==2) return [0.8,0.2,0,-0.2];
									return [0.4,0.7,0,-0.7];
								}
							}
						},
					},
				}
			},
			sgws_chongzhen1:{
				audio:'chongzhen1',
				trigger:{player:'useCard'},
				filter:function(event,player){
					if((event.card.name!='sha'&&event.card.name!='shan')||(event.skill!='longdan_shan'&&event.skill!='longdan_sha'&&
					event.skill!='sgws_fanghun_shan'&&event.skill!='sgws_fanghun_sha'&&event.skill!='ollongdan')) return false;
					var target=lib.skill.sgws_chongzhen1.logTarget(event,player);
					return target&&target.countGainableCards(player,'h')>0;
				},
				logTarget:function(event,player){
					if(event.card.name=='sha') return event.targets[0];
					return event.respondTo[0];
				},
				prompt2:'当你因发动〖龙胆〗而使用或打出【杀】或【闪】时，你可以获得对方的一到两张手牌。',
				content:function(){
					var target=lib.skill.sgws_chongzhen1.logTarget(trigger,player);
					player.gainPlayerCard(target,'h',true,[1,2]);
				}
			},
			sgws_chongzhen2:{
				audio:'chongzhen2',
				trigger:{player:'respond'},
				filter:function(event,player){
					if(event.skill!='longdan_shan'&&event.skill!='longdan_sha'&&
					event.skill!='sgws_fanghun_shan'&&event.skill!='sgws_fanghun_sha'&&event.skill!='ollongdan') return false;
					return event.source&&event.source.countGainableCards(player,'h')>0;
				},
				logTarget:'source',
				prompt2:'当你因发动〖龙胆〗而使用或打出【杀】或【闪】时，你可以获得对方的一到两张手牌。',
				content:function(){
					player.gainPlayerCard(trigger.source,'h',true,[1,2]);
				}
			},
            sgws_juejing:{
				mod:{
					maxHandcard:function(player,num){
						return 2+num;
					}
				},
				audio:"xinjuejing",
				trigger:{player:['dying','dyingAfter']},
				forced:true,
				content:function(){
					player.draw(2);
				}
			},
            sgws_longhun:{
				audio:"relonghun",
				//技能发动时机
				enable:['chooseToUse','chooseToRespond'],
				//发动时提示的技能描述
				prompt:'将♦牌当做杀，♥牌当做桃，♣牌当做闪，♠牌当做无懈可击使用或打出',
				//动态的viewAs
				viewAs:function(cards,player){
					var name=false;
					var nature=null;
					//根据选择的卡牌的花色 判断要转化出的卡牌是闪还是火杀还是无懈还是桃
					switch(get.suit(cards[0],player)){
						case 'club':name='shan';break;
						case 'diamond':name='sha';nature='fire';break;
						case 'spade':name='wuxie';break;
						case 'heart':name='tao';break;
					}
					//返回判断结果
					if(name) return {name:name,nature:nature};
					return null;
				},
				//AI选牌思路
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
				//选牌数量
				selectCard:[1,2],
				//确保选择第一张牌后 重新检测第二张牌的合法性 避免选择两张花色不同的牌
				complexCard:true,
				//选牌范围：手牌区和装备区和木马
				position:'hes',
				//选牌合法性判断
				filterCard:function(card,player,event){
					//如果已经选了一张牌 那么第二张牌和第一张花色相同即可
					if(ui.selected.cards.length) return get.suit(card,player)==get.suit(ui.selected.cards[0],player);
					event=event||_status.event;
					//获取当前时机的卡牌选择限制
					var filter=event._backup.filterCard;
					//获取卡牌花色
					var name=get.suit(card,player);
					//如果这张牌是梅花并且当前时机能够使用/打出闪 那么这张牌可以选择
					if(name=='club'&&filter({name:'shan',cards:[card]},player,event)) return true;
					//如果这张牌是方片并且当前时机能够使用/打出火杀 那么这张牌可以选择
					if(name=='diamond'&&filter({name:'sha',cards:[card],nature:'fire'},player,event)) return true;
					//如果这张牌是黑桃并且当前时机能够使用/打出无懈 那么这张牌可以选择
					if(name=='spade'&&filter({name:'wuxie',cards:[card]},player,event)) return true;
					//如果这张牌是红桃并且当前时机能够使用/打出桃 那么这张牌可以选择
					if(name=='heart'&&filter({name:'tao',cards:[card]},player,event)) return true;
					//上述条件都不满足 那么就不能选择这张牌
					return false;
				},
				//判断当前时机能否发动技能
				filter:function(event,player){
					//获取当前时机的卡牌选择限制
					var filter=event.filterCard;
					//如果当前时机能够使用/打出火杀并且角色有方片 那么可以发动技能
					if(filter({name:'sha',nature:'fire'},player,event)&&player.countCards('hes',{suit:'diamond'})) return true;
					//如果当前时机能够使用/打出闪并且角色有梅花 那么可以发动技能
					if(filter({name:'shan'},player,event)&&player.countCards('hes',{suit:'club'})) return true;
					//如果当前时机能够使用/打出桃并且角色有红桃 那么可以发动技能
					if(filter({name:'tao'},player,event)&&player.countCards('hes',{suit:'heart'})) return true;
					//如果当前时机能够使用/打出无懈可击并且角色有黑桃 那么可以发动技能
					if(filter({name:'wuxie'},player,event)&&player.countCards('hes',{suit:'spade'})) return true;
					return false;
				},
				ai:{
					respondSha:true,
					respondShan:true,
					//让系统知道角色“有杀”“有闪”
					skillTagFilter:function(player,tag){
						var name;
						switch(tag){
							case 'respondSha':name='diamond';break;
							case 'respondShan':name='club';break;
							case 'save':name='heart';break;
						}
						if(!player.countCards('hes',{suit:name})) return false;
					},
					//AI牌序
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
				//让系统知道玩家“有无懈”“有桃”
				hiddenCard:function(player,name){
					if(name=='wuxie'&&_status.connectMode&&player.countCards('hs')>0) return true;
					if(name=='wuxie') return player.countCards('hes',{suit:'spade'})>0;
					if(name=='tao') return player.countCards('hes',{suit:'heart'})>0;
				},
				group:['sgws_longhun_num','sgws_longhun_discard'],
				subSkill:{
					num:{
						trigger:{player:'useCard'},
						forced:true,
						popup:false,
						filter:function(event){
							var evt=event;
							return ['sha','tao'].contains(evt.card.name)&&evt.skill=='sgws_longhun'&&evt.cards&&evt.cards.length==2;
						},
						content:function(){
							trigger.baseDamage+=2;
						}
					},
					discard:{
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
							return ['shan','wuxie'].contains(evt.card.name)&&evt.skill=='sgws_longhun'&&
								evt.cards&&evt.cards.length==2&&_status.currentPhase&&_status.currentPhase!=player&&_status.currentPhase.countDiscardableCards(player,'he');
						},
						content:function(){
							player.line(_status.currentPhase,'green');
							player.discardPlayerCard(_status.currentPhase,'he',true,[1,2]);
						}
					}
				}
			},
            sgws_yicong:{
				mod:{
					globalFrom:function(from,to,current){
						return current-Math.max(0,from.hp);
					},
					globalTo:function(from,to,current){
						return current+Math.max(0,to.getDamagedHp());
					},
				},
				ai:{
					threaten:0.8
				}
			},
            sgws_fanghun:{
				mod:{
					aiValue:function(player,card,num){
						if(card.name!='sha'&&card.name!='shan') return;
						var geti=function(){
							var cards=player.getCards('hs',function(card){
								return card.name=='sha'||card.name=='shan';
							});
							if(cards.contains(card)){
								return cards.indexOf(card);
							}
							return cards.length;
						};
						return Math.max(num,[7,5,5,3][Math.min(geti(),3)]);
					},
				},
				locked:false,
				audio:'fanghun',
				inherit:'sgws_fanghun2',
				trigger:{
					player:'useCard',
					target:'useCardToTargeted',
				},
			},
			sgws_fanghun2:{
				hiddenCard:function(player,name){
					if(!player.storage.sgws_fanghun||player.storage.sgws_fanghun<=0) return false;
					if(name=='tao') return player.countCards('hs','jiu')>0;
					if(name=='jiu') return player.countCards('hs','tao')>0;
					return false;
				},
				audio:'fanghun',
				marktext:'影',
				intro:{
					content:'mark',
					name:'梅影',
				},
				trigger:{
					source:'damageSource',
					player:'damageEnd',
				},
				forced:true,
				locked:false,
				filter:function(event){
					return event.card&&event.card.name=='sha';
				},
				content:function(){
					player.addMark('sgws_fanghun',trigger.num||1);
				},
				group:['sgws_fanghun_sha','sgws_fanghun_draw'],
				subSkill:{
					draw:{
						trigger:{player:['useCardAfter','respondAfter']},
						forced:true,
						popup:false,
						filter:function(event){
							return event.skill=='sgws_fanghun_sha'||event.skill=='sgws_fanghun_shan';
						},
						content:function(){
							player.draw(3);
						}
					},
					sha:{
						audio:'fanghun',
						enable:['chooseToUse','chooseToRespond'],
						prompt:'弃置一枚【梅影】标记，将杀当做闪，或将闪当做杀，或将桃当做酒，或将酒当做桃使用或打出',
						viewAs:function(cards,player){
							var name=false;
							switch(get.name(cards[0],player)){
								case 'sha':name='shan';break;
								case 'shan':name='sha';break;
								case 'tao':name='jiu';break;
								case 'jiu':name='tao';break;
							}
							if(name) return {name:name};
							return null;
						},
						position:'hs',
						check:function(card){
							var player=_status.event.player;
							if(_status.event.type=='phase'){
								var max=0;
								var name2;
								var list=['sha','tao','jiu'];
								var map={sha:'shan',tao:'jiu',jiu:'tao'}
								for(var i=0;i<list.length;i++){
									var name=list[i];
				 				if(player.countCards('hs',map[name])>(name=='jiu'?1:0)&&player.getUseValue({name:name})>0){
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
							if(name=='tao'&&filter({name:'jiu',cards:[card]},player,event)) return true;
							if(name=='jiu'&&filter({name:'tao',cards:[card]},player,event)) return true;
							return false;
						},
						filter:function(event,player){
							if(!player.storage.sgws_fanghun||player.storage.sgws_fanghun<=0) return false;
							var filter=event.filterCard;
							if(filter({name:'sha'},player,event)&&player.countCards('hs','shan')) return true;
							if(filter({name:'shan'},player,event)&&player.countCards('hs','sha')) return true;
							if(filter({name:'tao'},player,event)&&player.countCards('hs','jiu')) return true;
							if(filter({name:'jiu'},player, event)&&player.countCards('hs','tao')) return true;
							return false;
						},
						onrespond:function(){return this.onuse.apply(this,arguments)},
						onuse:function(result,player){
			 			player.removeMark('sgws_fanghun',1);
						},
						ai:{
							respondSha:true,
							respondShan:true,
							skillTagFilter:function(player,tag){
								if(!player.storage.sgws_fanghun||player.storage.sgws_fanghun<0) return false;
								var name;
								switch(tag){
									case 'respondSha':name='shan';break;
									case 'respondShan':name='sha';break;
								}
								if(!player.countCards('hs',name)) return false;
							},
							order:function(item,player){
								if(player&&_status.event.type=='phase'){
									var max=0;
									var list=['sha','tao','jiu'];
									var map={sha:'shan',tao:'jiu',jiu:'tao'}
									for(var i=0;i<list.length;i++){
										var name=list[i];
					 				if(player.countCards('hs',map[name])>(name=='jiu'?1:0)&&player.getUseValue({name:name})>0){
					 					var temp=get.order({name:name});
					 					if(temp>max) max=temp;
					 				}
					 			}
					 			if(max>0) max+=((player.storage.refuhan||player.storage.twfuhan)?0.3:-0.3);
					 			return max;
								}
								if(!player) player=_status.event.player;
								return (player.storage.refuhan||player.storage.twfuhan)?4:1;
							},
						},
					},
				}
			},
            sgws_fuhan:{
				audio:'fuhan',
				trigger:{player:'phaseZhunbeiBegin'},
				unique:true,
				limited:true,
				skillAnimation:true,
				animationColor:'orange',
				forceunique:true,
				filter:function(event,player){
					return true;
				},
				content:function(){
					'step 0'
					if(player.storage.sgws_fanghun) player.draw(player.storage.sgws_fanghun);
					player.awakenSkill('sgws_fuhan');
					'step 1'
					var list=[];
                    var list2=[];
                    var players=game.players.concat(game.dead);
                    for(var i=0;i<players.length;i++){
                        list2.add(players[i].name);
                        list2.add(players[i].name1);
                        list2.add(players[i].name2);
                    }
                    for(var i in lib.character){
                        if(lib.character[i][1]!='shu') continue;
                        if(i.indexOf("sgws_")!=0) continue;
                        if(list2.contains(i)) continue;
                        list.push(i);
                    }
					list=list.randomGets(Math.max(4,game.countPlayer()));
					var skills=[];
					for(var i of list){
						skills.addArray((lib.character[i][3]||[]).filter(function(skill){
							var info=get.info(skill);
							return info&&!info.zhuSkill&&!info.limited&&!info.juexingji&&!info.hiddenSkill&&!info.charlotte&&!info.dutySkill;
						}));
					}
					if(!list.length||!skills.length){event.finish();return;}
					if(player.isUnderControl()){
						game.swapPlayerAuto(player);
					}
					var switchToAuto=function(){
						_status.imchoosing=false;
						event._result={
							bool:true,
							skills:skills.randomGets(4),
						};
						if(event.dialog) event.dialog.close();
						if(event.control) event.control.close();
					};
					var chooseButton=function(list,skills){
						var event=_status.event;
						if(!event._result) event._result={};
						event._result.skills=[];
						var rSkill=event._result.skills;
						var dialog=ui.create.dialog('请选择获得至多四个技能',[list,'character'],'hidden');
						event.dialog=dialog;
						var table=document.createElement('div');
						table.classList.add('add-setting');
						table.style.margin='0';
						table.style.width='100%';
						table.style.position='relative';
						for(var i=0;i<skills.length;i++){
							var td=ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
							td.link=skills[i];
							table.appendChild(td);
							td.innerHTML='<span>'+get.translation(skills[i])+'</span>';
							td.addEventListener(lib.config.touchscreen?'touchend':'click',function(){
								if(_status.dragged) return;
								if(_status.justdragged) return;
								_status.tempNoButton=true;
								setTimeout(function(){
									_status.tempNoButton=false;
								},500);
								var link=this.link;
								if(!this.classList.contains('bluebg')){
									if(rSkill.length>=4) return;
									rSkill.add(link);
									this.classList.add('bluebg');
								}
								else{
									this.classList.remove('bluebg');
									rSkill.remove(link);
								}
							});
						}
						dialog.content.appendChild(table);
						dialog.add('　　');
						dialog.open();
						
						event.switchToAuto=function(){
							event.dialog.close();
							event.control.close();
							game.resume();
							_status.imchoosing=false;
						};
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
						chooseButton(list,skills);
					}
					else if(event.isOnline()){
						event.player.send(chooseButton,list,skills);
						event.player.wait();
						game.pause();
					}
					else{
						switchToAuto();
					}
					'step 2'
					var map=event.result||result;
					if(map&&map.skills&&map.skills.length){
						for(var i of map.skills) player.addSkillLog(i);
					}
					game.broadcastAll(function(list){
						game.expandSkills(list);
						for(var i of list){
							var info=lib.skill[i];
							if(!info) continue;
							if(!info.audioname2) info.audioname2={};
							info.audioname2.old_yuanshu='weidi';
						}
					},map.skills);
					'step 3'
					if(player.isMinHp()) player.recover();
				},
			},
            sgws_tuntian:{
				audio:"retuntian",
				trigger:{
					player:'loseAfter',
					global:['equipAfter','addJudgeAfter','gainAfter','loseAsyncAfter'],
				},
				frequent:true,
				filter:function(event,player){
					if(player==_status.currentPhase) return false;
					if(event.name=='gain'&&event.player==player) return false;
					var evt=event.getl(player);
					return evt&&evt.cards2&&evt.cards2.length>0;
				},
				content:function(){
					player.judge(function(card){
						return 1;
					}).callback=lib.skill.sgws_tuntian.callback;
				},
				callback:function(){
					'step 0'
						if(event.judgeResult.suit=='heart'){
							player.gain(card,'gain2');
							event.finish();
						}
						else if(get.mode()=='guozhan'){
							player.chooseBool('是否将'+get.translation(card)+'作为【田】置于武将牌上？').set('frequentSkill','sgws_tuntian').ai=function(){
								return true;
							};
						}
						else event.directbool=true;
						'step 1'
						if(!result.bool&&!event.directbool){
							//game.cardsDiscard(card);
							return;
						};
						event.node=event.judgeResult.node;
						//event.trigger("addCardToStorage");
						//event.card.fix();
						player.storage.tuntian.push(event.card);
						//event.card.goto(ui.special);
						game.cardsGotoSpecial(card);
						event.node.moveDelete(player);
						game.broadcast(function(cardid,player){
							var node=lib.cardOL[cardid];
							if(node){
								node.moveDelete(player);
							}
						},event.node.cardid,player);
						game.addVideo('gain2',player,get.cardsInfo([event.node]));
						player.markSkill('tuntian');
						game.addVideo('storage',player,['tuntian',get.cardsInfo(player.storage.tuntian),'cards']);
				},
				init:function(player){
					if(!player.storage.tuntian) player.storage.tuntian=[];
				},
				group:'sgws_tuntian_dist',
				locked:false,
                subSkill:{
					dist:{
						locked:false,
						mod:{
							globalFrom:function(from,to,distance){
								if(from.storage.tuntian){
									var num=distance-from.storage.tuntian.length-1;
									if(_status.event.skill=='jixi_backup'||_status.event.skill=='gzjixi_backup') num++;
									return num;
								}
							}
						}
					}
				},
                locked:false,
				ai:{
					effect:{
						target:function(){
							return lib.skill.tuntian.ai.effect.target.apply(this,arguments);
						}
					},
					threaten:function(player,target){
						if(target.countCards('h')==0) return 2;
						return 0.5;
					},
					nodiscard:true,
					nolose:true
				}
			},
            sgws_xuxie:{
				audio:"xuxie",
				trigger:{player:'phaseUseBegin'},
				logTarget:function(event,player){
					return game.filterPlayer(function(current){
						return get.distance(player,current)<=1;
					}).sortBySeat();
				},
				check:function(event,player){
					if(player.isHealthy()) return false;
					var list=game.filterPlayer(function(current){
						return get.distance(player,current)<=1;
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
						return get.distance(player,current)<=1;
					}).sortBySeat();
					if(!targets.length) event.finish();
					else{
						event.targets=targets;
						player.chooseControl().set('choiceList',[
							'弃置'+get.translation(targets)+'的各两张牌',
							'令'+get.translation(targets)+'各摸两张牌',
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
						game.asyncDraw(targets,2);
					}
					else event.goto(4);
					'step 3'
					game.delay();
					event.finish();
					'step 4'
					var target=targets.shift();
					if(target.countDiscardableCards(player,'he')>0) player.discardPlayerCard(target,'he',true,2);
					if(targets.length) event.redo();
				},
				group:'xuxie_add',
			},
            "sgws_yiji":{
				audio:"reyiji",
				trigger:{
					player:"damageEnd",
				},
				frequent:true,
				filter:function (event){
					return (event.num>0)
				},
				content:function (){
					"step 0"
					event.count=1;
					"step 1"
					player.draw(3);
					event.given=0;
					"step 2"
					player.chooseCardTarget({
						filterCard:true,
						selectCard:[1,3-event.given],
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
					"step 3"
					if(result.bool){
						player.line(result.targets,'green');
						result.targets[0].gain(result.cards,player,'giveAuto');
						event.given+=result.cards.length;
						if(event.given<3){
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
				ai:{
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
            sgws_huishi:{
				audio:'shuishi',
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return true;
				},
				content:function(){
					'step 0'
					event.cards=[];
					event.suits=[];
					'step 1'
					player.judge(function(result){
						var evt=_status.event.getParent('sgws_huishi');
						if(evt&&evt.suits&&evt.suits.contains(get.suit(result))) return 0;
						return 1;
					}).set('callback',function(){
						event.getParent().orderingCards.remove(event.judgeResult.card);
					}).judge2=function(result){
						return result.bool?true:false;
					};
					'step 2'
					event.cards.push(result.card);
					if(result.bool){
						event.suits.push(result.suit);
						player.gainMaxHp();
						event.goto(1);
					}
					else{
						cards=cards.filterInD();
						if(cards.length) player.chooseTarget('将'+get.translation(cards)+'交给一名角色',true).set('ai',function(target){
							var player=_status.event.player;
							var att=get.attitude(player,target)/Math.sqrt(1+target.countCards('h'));
							if(target.hasSkillTag('nogain')) att/=10;
							return att;
						});
						else event.finish();
					}
					'step 3'
					if(result.bool){
						var target=result.targets[0];
						event.target=target;
						player.line(target,'green');
						target.gain(cards,'gain2');
					}
                    'step 4'
					if(target.isMaxHandcard()) player.loseMaxHp();
				},
				ai:{
					order:1,
					result:{
						player:1,
					},
				},
			},
            "sgws_tianyi":{
				audio:"stianyi",
				trigger:{player:'phaseZhunbeiBegin'},
				forced:true,
				juexingji:true,
				skillAnimation:true,
				animationColor:'gray',
				filter:function(event,player){
					return true;
				},
				content:function(){
					'step 0'
					player.awakenSkill('sgws_tianyi');
					player.gainMaxHp(2);
					player.recover(2);
					'step 1'
					player.chooseTarget(true,'令一名角色获得技能〖佐幸〗').set('ai',function(target){
						return get.attitude(_status.event.player,target);
					});
					'step 2'
					if(result.bool){
						var target=result.targets[0];
						player.line(target,'green');
						target.storage.sgws_zuoxing=player;
						target.addSkill('sgws_zuoxing');
					}
				},
				derivation:'sgws_zuoxing',
			},
			sgws_zuoxing:{
				audio:"zuoxing",
				trigger:{player:'phaseZhunbeiBegin'},
				filter:function(event,player){
					var target=player.storage.sgws_zuoxing;
					return target&&target.isAlive();
				},
				logTarget:function(event,player){
					return player.storage.sgws_zuoxing;
				},
				check:function(event,player){
					var target=player.storage.sgws_zuoxing;
					if(get.attitude(player,target)<=0) return true;
					return target.maxHp>1&&!player.hasJudge('lebu');
				},
				content:function(){
					player.addTempSkill('zuoxing2');
				},
			},
            sgws_huishi2:{
				audio:"sghuishi",
				enable:'phaseUse',
				limited:true,
				skillAnimation:true,
				animationColor:'water',
				filterTarget:lib.filter.notMe,
				content:function(){
					'step 0'
					player.awakenSkill('sgws_huishi2');
					var list=target.getSkills(null,false,false).filter(function(skill){
						var info=lib.skill[skill];
						return info&&info.juexingji;
					});
					if(list.length){
						target.addMark('sgws_huishi2',1,false);
						for(var i of list){
							var info=lib.skill[i];
							if(info.filter&&!info.charlotte&&!info.sgws_huishi2_filter){
								info.sgws_huishi2_filter=info.filter;
								info.filter=function(event,player){
									if(player.hasMark('sgws_huishi2')) return true;
									return this.sgws_huishi2_filter.apply(this,arguments);
								}
							}
						}
					}
					else target.draw(5);
					player.loseMaxHp(2);
				},
				intro:{content:'发动非Charlotte觉醒技时无视条件'},
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
            sgws_guimou:{
				trigger:{player:'phaseJieshuBegin'},
				frequent:true,
				content:function(){
					var list=game.filterPlayer(function(target){
						return target!=player&&!target.isMad()&&target.isEnemiesOf(player);
					});
					if(list.length){
						var target=list.randomGet();
						player.line(target,'green');
						target.goMad({player:'phaseAfter'});
					}
				}
			},
            sgws_quanji:{
				audio:"requanji",
				trigger:{player:['damageEnd','phaseUseEnd']},
				frequent:true,
				locked:false,
				notemp:true,
				init:function(player){
					if(!player.storage.quanji) player.storage.quanji=[];
				},
				filter:function(event,player){
					if(event.name=='phaseUse') return player.countCards('h')>player.hp;
					return event.num>0;
				},
				content:function(){
					"step 0"
					event.count=trigger.num||1;
					"step 1"
					event.count--;
					player.draw(2);
					"step 2"
					if(player.countCards('h')){
						player.chooseCard('将一张手牌置于武将牌上作为“权”',true);
					}
					else{
						event.goto(4);
					}
					"step 3"
					if(result.cards&&result.cards.length){
						player.lose(result.cards,ui.special,'toStorage');
						player.storage.quanji=player.storage.quanji.concat(result.cards);
						player.syncStorage('quanji');
						player.markSkill('quanji');
						game.log(player,'将',result.cards,'置于武将牌上作为“权”');
					}
					"step 4"
					if(event.count>0){
						player.chooseBool(get.prompt2('sgws_quanji')).set('frequentSkill','sgws_quanji');
					}
					else event.finish();
					"step 5"
					if(result.bool){
						player.logSkill('sgws_quanji');
						event.goto(1);
					}
				},
				mod:{
					maxHandcard:function(player,num){
						return num+player.storage.quanji.length;
					}
				},
				ai:{
					maixie:true,
					maixie_hp:true,
					threaten:0.8,
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'damage')){
								if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
								if(!target.hasFriend()) return;
								if(target.hp>=4) return [0.5,get.tag(card,'damage')*2];
								if(!target.hasSkill('paiyi')&&target.hp>1) return [0.5,get.tag(card,'damage')*1.5];
								if(target.hp==3) return [0.5,get.tag(card,'damage')*1.5];
								if(target.hp==2) return [1,get.tag(card,'damage')*0.5];
							}
						}
					}
				}
			},
            sgws_paiyi:{
				audio:"xinpaiyi",
				enable:'phaseUse',
				filter:function(event,player){
					return player.storage.quanji.length>0&&(!player.hasSkill('sgws_paiyi_0')||!player.hasSkill('sgws_paiyi_1'))
				},
				chooseButton:{
					check:function(button){
						if(typeof button.link=='object') return 1;
						var player=_status.event.player,num=player.storage.quanji.length-1;
						if(button.link==1){
							if(game.countPlayer(function(current){
								return get.damageEffect(current,player,player)>0;
							})<num) return 0.5;
							return 2;
						}
						if(num<2) return 0;
						return 1;
					},
					dialog:function(event,player){
						var dialog=ui.create.dialog('权计','hidden');
						var table=document.createElement('div');
						table.classList.add('add-setting');
						table.style.margin='0';
						table.style.width='100%';
						table.style.position='relative';
						var list=['摸牌','造成伤害'];
						for(var i=0;i<list.length;i++){
							if(player.hasSkill('sgws_paiyi_'+i)) continue;
							var td=ui.create.div('.shadowed.reduce_radius.pointerdiv.tdnode');
							td.innerHTML='<span>'+(list[i])+'</span>';
							td.link=i;
							td.addEventListener(lib.config.touchscreen?'touchend':'click',ui.click.button);
							for(var j in lib.element.button){
								td[j]=lib.element.button[j];
							}
							table.appendChild(td);
							dialog.buttons.add(td);
						}
						dialog.content.appendChild(table);
						dialog.add(player.storage.quanji);
						return dialog;
					},
					select:2,
					filter:function(button,player){
						if(ui.selected.buttons.length) return (typeof ui.selected.buttons[0].link)!=(typeof button.link)
						return true;
					},
					backup:function(links){
						if(typeof links[0]=='object') links.reverse();
						var next=get.copy(lib.skill['sgws_paiyi_backup'+links[0]]);
						next.card=links[1];
						return next;
					},
					prompt:function(links,player){
						if(typeof links[0]=='object') links.reverse();
						var num=get.cnNumber(Math.max(1,player.storage.quanji.length-1)),card=get.translation(links[1]);
						if(links[0]==0) return '移去'+card+'并令一名角色摸'+(num+1)+'张牌';
						return '移去'+card+'并对至多'+num+'名角色造成1点伤害';
					},
				},
				ai:{
					order:1,
					result:{player:1},
				},
				subSkill:{
					0:{},
					1:{},
					backup0:{
						audio:'xinpaiyi',
						filterCard:()=>false,
						selectCard:-1,
						filterTarget:true,
						delay:false,
						content:function(){
							'step 0'
							player.addTempSkill('sgws_paiyi_0','phaseUseEnd');
							var card=lib.skill.sgws_paiyi_backup.card;
							game.log(card,'进入了弃牌堆');
							player.$throw(card,1000);
                            player.storage.quanji.remove(card);
							game.delayx();
							game.cardsDiscard(card);
							'step 1'
							target.draw(Math.max(1,player.storage.quanji.length));
						},
						ai:{
							result:{
								target:function(player,target){
									if(target.hasSkill('nogain')) return 0;
									if(player==target&&!player.needsToDiscard()) return 3;
									return 1;
								},
							},
						},
					},
					backup1:{
						audio:'xinpaiyi', 
						filterCard:()=>false,
						selectCard:-1,
						filterTarget:true,
						delay:false,
						multitarget:true,
						multiline:true,
						selectTarget:function(){
							return [1,Math.max(1,_status.event.player.storage.quanji.length-1)];
						},
						content:function(){
							'step 0'
							targets.sortBySeat();
							player.addTempSkill('sgws_paiyi_1','phaseUseEnd');
							var card=lib.skill.sgws_paiyi_backup.card;
							game.log(card,'进入了弃牌堆');
							player.$throw(card,1000);
                            player.storage.quanji.remove(card);
							game.delayx();
							game.cardsDiscard(card);
							'step 1'
							for(var i of targets) i.damage(2);
						},
						ai:{
							tag:{
								damage:1,
							},
							result:{
								target:-1.5,
							},
						},
					},
				},
			},
            sgws_qianxi:{
				audio:"oldqianxi",
				trigger:{source:'damageBegin2'},
				check:function(event,player){
					var att=get.attitude(player,event.player);
					if(event.player.hp==event.player.maxHp) return att<0;
					if(event.player.hp==event.player.maxHp-1&&
						(event.player.maxHp<=3||event.player.hasSkillTag('maixie'))) return att<0;
					return att>0;
				},
				filter:function(event,player){
					return event.card&&event.card.name=='sha'&&get.distance(player,event.player)<=1;
				},
				logTarget:'player',
				content:function(){
					'step 0'
					player.judge(function(card){
						return get.suit(card)!='heart'?1:-1;
					}).judge2=function(result){
						return result.bool;
					};
					'step 1'
					if(result.bool){
						trigger.cancel();
						trigger.player.loseMaxHp(2,true);
					}
				}
			},
           sgws_fuman:{
				audio:"fuman",
				enable:'phaseUse',
				filterTarget:function(card,player,target){
					if(target==player) return false;
					var stat=player.getStat('skill').sgws_fuman_targets;
					return !stat||!stat.contains(target);
				},
				filter:function(event,player){
					return player.countCards('h')>0&&game.hasPlayer((current)=>lib.skill.sgws_fuman.filterTarget(null,player,current));
				},
				discard:false,
				lose:false,
				delay:false,
				filterCard:true,
				content:function(){
					target.gain(cards,player,'giveAuto').gaintag.add('fuman');
					target.addSkill('fuman2');
					player.addSkill('sgws_fuman_draw');
					var stat=player.getStat('skill');
					if(!stat.sgws_fuman_targets) stat.sgws_fuman_targets=[];
					stat.sgws_fuman_targets.push(target);
				},
				check:function(card){
					return 6-get.value(card);
				},
				ai:{
					order:2,
					result:{
						target:function(player,target){
							if(!target.hasSha()) return 1.2;
							return 1;
						}
					}
				},
				subSkill:{
					draw:{
						trigger:{global:'useCardAfter'},
						forced:true,
						charlotte:true,
						filter:function(event,player){
							return event.player.hasHistory('lose',function(evt){
								if(evt.getParent()!=event) return false;
								for(var i in evt.gaintag_map){
									if(evt.gaintag_map[i].contains('fuman')) return true;
								}
								return false;
							});
						},
						logTarget:'player',
						content:function(){
							player.draw(trigger.player.hasHistory('sourceDamage',function(evt){
								return evt.card==trigger.card;
							})?3:2);
						},
					},
				},
			},
            sgws_shichou:{
				audio:"ol_shichou",
				trigger:{
					player:'useCard2',
				},
				direct:true,
				filter:function(event,player){
					return event.card&&event.card.name=='sha';//&&player.isDamaged();
				},
				content:function(){
					'step 0'
					var num=Math.max(2,player.getDamagedHp());
					player.chooseTarget('是否发动【誓仇】，令至多'+num+'名其他角色也成为此【杀】的目标？',[1,num],function(card,player,target){
						return target!=player&&!trigger.targets.contains(target)&&player.canUse({name:'sha'},target);
					}).ai=function(target){
						return get.effect(target,{name:'sha'},_status.event.player);
					};
					'step 1'
					if(result.bool&&result.targets&&result.targets.length){
						var targets=result.targets;
						player.logSkill('sgws_shichou',targets);
						player.line(targets,trigger.card.nature);
						trigger.targets.addArray(targets);
						trigger.sgws_shichou=true;
						player.addTempSkill('sgws_shichou2');
					}
				},
			},
			sgws_shichou2:{
				trigger:{player:'useCardAfter'},
				forced:true,
				popup:false,
				onremove:true,
				filter:function(event,player){
					return event.sgws_shichou==true&&player.countMark('sgws_shichou2')<3&&!player.getHistory('sourceDamage',function(evt){
						return evt.card==event.card;
					}).length&&event.cards.filterInD().length>0;
				},
				content:function(){
					player.addMark('sgws_shichou2',1,false);
					player.gain(trigger.cards.filterInD(),'gain2');
				},
			},
            sgws_xianzhen:{
				audio:'xianzhen',
				inherit:'xianzhen',
			},
			sgws_xianzhen2:{
				audio:'xianzhen',
				mod:{
					targetInRange:function(card,player,target){
						if(target==player.storage.sgws_xianzhen) return true;
					},
					cardUsableTarget:function(card,player,target){
						if(target==player.storage.sgws_xianzhen) return true;
					},
				},
				ai:{
					unequip:true,
					skillTagFilter:function(player,tag,arg){
						if(arg.target!=player.storage.sgws_xianzhen) return false;
					},
					effect:{
						player:function(card,player,target,current,isLink){
							if(isLink||!player.storage.sgws_xianzhen) return;
							if(target!=player.storage.sgws_xianzhen&&['sha','guohe','shunshou','huogong','juedou'].contains(card.name)){
								if(get.effect(player.storage.sgws_xianzhen,card,player,player)>0){
									return [1,2];
								}
							}
						}
					}
				},
				trigger:{player:'useCard2'},
				filter:function(event,player){
					return player.storage.sgws_xianzhen&&player.storage.sgws_xianzhen.isAlive()&&
					(event.card.name=='sha'||get.type(event.card)=='trick')&&
					event.targets&&event.targets.length==1&&!event.targets.contains(player.storage.sgws_xianzhen);
				},
				check:function(event,player){
					return get.effect(player.storage.sgws_xianzhen,event.card,player,player)>0;
				},
				logTarget:function(event,player){
					return player.storage.sgws_xianzhen;
				},
				prompt2:'令该角色也成为此牌的目标',
				content:function(){
					var target=player.storage.sgws_xianzhen;
					trigger.targets.push(target);
					game.log(target,'成为了',trigger.card,'的额外目标');
				},
			},
			sgws_xianzhen3:{
				charlotte:true,
				mod:{
					ignoredHandcard:function(card,player){
						if(get.name(card)=='sha'){
							return true;
						}
					},
					cardDiscardable:function(card,player,name){
						if(name=='phaseDiscard'&&get.name(card)=='sha'){
							return false;
						}
					},
				},
			},
            sgws_jinjiu:{
				mod:{
					cardname:function(card,player){
						if(card.name=='jiu') return 'sha';
					},
				},
				ai:{
					skillTagFilter:function(player){
						if(!player.countCards('h','jiu')) return false;
					},
					respondSha:true,
				},
				audio:2,
				trigger:{player:['useCard1','respond']},
				firstDo:true,
				forced:true,
				filter:function(event,player){
					return event.card.name=='sha'&&!event.skill&&
					event.cards.length==1&&event.cards[0].name=='jiu';
				},
				content:function(){},
				group:'sgws_jinjiu2',
				global:'sgws_jinjiu3',
			},
			sgws_jinjiu3:{
				mod:{
					cardEnabled:function(card,player){
						if(card.name=='jiu'&&_status.currentPhase&&_status.currentPhase!=player&&_status.currentPhase.hasSkill('sgws_jinjiu')) return false;
					},
					cardSavable:function(card,player){
						if(card.name=='jiu'&&_status.currentPhase&&_status.currentPhase!=player&&_status.currentPhase.hasSkill('sgws_jinjiu')) return false;
					},
				},
			},
			sgws_jinjiu2:{
				audio:'rejinjiu',
				forced:true,
				trigger:{player:'damageBegin3'},
				filter:function(event,player){
					return event.getParent(2).jiu==true;
				},
				content:function(){
					trigger.num-=trigger.getParent(2).jiu_add;
                    trigger.num--;
				},
				ai:{
					filterDamage:true,
					skillTagFilter:function(player,tag,arg){
						return arg&&arg.jiu==true;
					},
				},
			},
            sgws_haoshi:{
                audio:"olhaoshi",
				trigger:{player:'phaseDrawBegin2'},
				filter:function(event,player){
					return !event.numFixed;
				},
				check:function(event,player){
					return (player.countCards('h')+2+event.num)<=5||game.hasPlayer(function(target){
						return !game.hasPlayer(function(current){
							return current!=player&&current!=target&&current.countCards('h')<target.countCards('h');
						})&&get.attitude(player,target)>0;
					});
				},
				content:function(){
					trigger.num+=2;
					player.addTempSkill('sgws_haoshi_give','phaseDrawAfter');
				},
				subSkill:{
					give:{
						trigger:{player:'phaseDrawEnd'},
						forced:true,
						charlotte:true,
						popup:false,
						filter:function(event,player){
							return player.countCards('h')>5;
						},
						content:function(){
							'step 0'
							var targets=game.players.concat(game.dead);
                            targets.remove(player);
							num=Math.floor(player.countCards('h')/2);
							player.chooseCardTarget({
								position:'h',
								filterCard:true,
								filterTarget:function(card,player,target){
									return _status.event.targets.contains(target);
								},
								targets:targets,
								selectTarget:targets.length==1?-1:1,
								selectCard:num,
								prompt:'将'+get.cnNumber(num)+'张手牌交给一名其他角色',
								forced:true,
								ai1:function(card){
									var goon=false,player=_status.event.player;
									for(var i of _status.event.targets){
										if(get.attitude(i,target)>0&&get.attitude(target,i)>0) goon=true;break;
									}
									if(goon){
										if(!player.hasValueTarget(card)||card.name=='sha'&&player.countCards('h',function(cardx){
											return cardx.name=='sha'&&!ui.selected.cards.contains(cardx);
										})>player.getCardUsable('sha')) return 2;
										return Math.max(2,get.value(card)/4);
									}
									return 1/Math.max(1,get.value(card));
								},
								ai2:function(target){
									return get.attitude(_status.event.player,target);
								},
							});
							'step 1'
							if(result.bool){
								var target=result.targets[0];
								player.line(target,'green');
								target.gain(result.cards,player,'giveAuto');
								player.markAuto('sgws_haoshi_help',[target]);
								player.addTempSkill('sgws_haoshi_help',{player:'phaseBeginStart'});
							}
						},
					},
					help:{
						trigger:{target:'useCardToTargeted'},
						direct:true,
						charlotte:true,
						onremove:true,
						filter:function(event,player){
							if(!player.storage.sgws_haoshi_help||!player.storage.sgws_haoshi_help.length) return false;
							if(event.card.name!='sha'&&get.type(event.card)!='trick') return false;
							for(var i of player.storage.sgws_haoshi_help){
								if(i.countCards('h')>0) return true;
							}
							return false;
						},
						content:function(){
							'step 0'
							if(!event.targets) event.targets=player.storage.sgws_haoshi_help.slice(0).sortBySeat();
							event.target=event.targets.shift();
							event.target.chooseCard('h','好施：是否将一张手牌交给'+get.translation(player)+'？').set('ai',function(card){
								var player=_status.event.player,target=_status.event.getTrigger().player;
								if(!_status.event.goon){
									if(get.value(card,player)<0||get.value(card,target)<0) return 1;
									return 0;
								}
								var cardx=_status.event.getTrigger().card;
								if(card.name=='shan'&&get.tag(cardx,'respondShan')&&target.countCards('h','shan')<player.countCards('h','shan')) return 2;
								if(card.name=='sha'&&(cardx.name=='juedou'||get.tag(card,'respondSha')&&(target.countCards('h','sha')<player.countCards('h','sha')))) return 2;
								if(get.value(card,target)>get.value(card,player)||target.getUseValue(card)>player.getUseValue(card)) return 1;
								if(player.hasSkillTag('noh')) return 0.5/Math.max(1,get.value(card,player));
								return 0;
							}).set('goon',get.attitude(event.target,player)>0);
							'step 1'
							if(result.bool){
								target.logSkill('sgws_haoshi_help',player);
								player.gain(result.cards,target,'giveAuto');
							}
							if(targets.length) event.goto(0);
						},
					},
				},
			},
            sgws_dimeng:{
                audio:"oldimeng",
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return game.hasPlayer((current)=>lib.skill.sgws_dimeng.filterTarget(null,player,current));
				},
				selectTarget:2,
				complexTarget:true,
				filterTarget:function(card,player,target){
					if(target==player) return false;
					var ps=player.countCards('he');
					if(!ui.selected.targets.length){
						var hs=target.countCards('h');
						return game.hasPlayer(function(current){
							if(current==player||current==target) return false;
							var cs=current.countCards('h');
							return (hs>0||cs>0);
						});
					}
					var current=ui.selected.targets[0],hs=target.countCards('h'),cs=current.countCards('h');
					return (hs>0||cs>0);
				},
				multitarget:true,
				multiline:true,
				content:function(){
					targets[0].swapHandcards(targets[1]);
					var num=Math.abs(targets[0].countCards('h')-targets[1].countCards('h'));
					if(num>0){
						player.addMark('sgws_dimeng_discard',num,false);
						player.addTempSkill('sgws_dimeng_discard','phaseUseAfter');
					}
				},
				ai:{
					threaten:4.5,
					pretao:true,
					nokeep:true,
					order:1,
					expose:0.2,
					result:{
						target:function(player,target){
							if(!ui.selected.targets.length) return -Math.sqrt(target.countCards('h'));
							var h1=ui.selected.targets[0].getCards('h'),h2=target.getCards('h');
							if(h2.length>h1.length) return 0;
							var delval=get.value(h2,target)-get.value(h1,ui.selected.targets[0]);
							if(delval>=0) return 0;
							return -delval*(h1.length-h2.length);
						},
					},
				},
				subSkill:{
					discard:{
						trigger:{player:'phaseUseEnd'},
						forced:true,
						charlotte:true,
						onremove:true,
						filter:function(event,player){
							return player.countCards('he')>0;
						},
						content:function(){
							player.chooseToDiscard('he',true,player.countMark('sgws_dimeng_discard'));
						},
					},
				},
			},
            sgws_liegong:{
				shaRelated:true,
				mod:{
					targetInRange:function(card,player,target){
						if(card.name=='sha'&&typeof get.number(card)=='number'){
							if(get.distance(player,target)<=get.number(card)) return true;
						}
					}
				},
				audio:'liegong',
				trigger:{player:'useCardToTargeted'},
				logTarget:'target',
				check:function(event,player){
					return get.attitude(player,event.target)<=0;
				},
				filter:function(event,player){
					if(event.card.name!='sha') return false;
					if(event.target.countCards('h')<=player.countCards('h')) return true;
					if(event.target.hp>=player.hp) return true;
					return false;
				},
				content:function(){
					if(trigger.target.countCards('h')<=player.countCards('h')+1) trigger.getParent().directHit.push(trigger.target);
					if(trigger.target.hp>=player.hp){
						var id=trigger.target.playerid;
						var map=trigger.getParent().customArgs;
						if(!map[id]) map[id]={};
						if(typeof map[id].extraDamage!='number'){
							map[id].extraDamage=0;
						}
						map[id].extraDamage+=2;
					}
				},
				ai:{
					threaten:0.5,
					directHit_ai:true,
					skillTagFilter:function(player,tag,arg){
						if(get.attitude(player,arg.target)<=0&&arg.card.name=='sha'&&player.countCards('h',function(card){
							return card!=arg.card&&(!arg.card.cards||!arg.card.cards.contains(card));
						})>=arg.target.countCards('h')) return true;
						return false;
					},
				}
			},
            sgws_liuhuan:{
                audio:"MYliuhuan",
                trigger:{
                    player:"dyingAfter",
                },
                unique:true,
                mark:true,
                skillAnimation:true,
                animationStr:"凤舞六幻",
                animationColor:"fire",
                forced:true,
                init:function (player) {
                    player.storage.sgws_liuhuan = false;
                },
                filter:function (event, player) {

                    return !player.storage.sgws_liuhuan;
                    return true;
                },
                content:function () {
                    player.changeHujia(7);
                    player.storage.sgws_liuhuan = true;
                    player.unmarkSkill('sgws_liuhuan');


                },
                intro:{
                    content:"limited",
                },
            },
            sgws_yuren:{
                frequent:true,
                audio:"MYyuren",
                trigger:{
                    source:"damageEnd",
                },
                direct:true,
                filter:function (event) {
                    if (event._notrigger.contains(event.player)) return false;
                    return event.card && event.card.name == 'sha' && event.player.countCards('he');
                },
                content:function () {
                    var num = 2;
                    if (trigger.player.countCards('e') && trigger.player.countCards('h')) {
                        num = 3;
                    }
                    var next = player.gainPlayerCard(trigger.player, [1, num], get.prompt('sgws_yuren',
                        trigger.player));
                    next.logSkill = ['sgws_yuren', trigger.player];
                    next.filterButton = function(button) {
                        if (ui.selected.buttons.length>1) return get.position(button.link) != get
                            .position(ui.selected.buttons[0].link);
                        return true;
                    }
                },
                ai:{
                    expose:0.2,
                },
            },
            sgws_juniao:{
                mod:{
                    globalFrom:function (from, to, current) {


                        if (from.isDamaged()) return current - Infinity;
                    },
                    globalTo:function (from, to, current) {
                        if (to.isDamaged()) return current + 1;
                    },
                },
                ai:{
                    threaten:1.5,
                },
                group:["sgws_juniao_1"],
                subSkill:{
                    "1":{
                        audio:"MYjuniao",
                        mod:{
                            globalFrom:function (from, to, distance) {
                                return distance - 2;
                            },
                        },
                        trigger:{
                            player:"shaBefore",
                        },
                        forced:true,
                        content:function () {},
                        sub:true,
                    },
                },
            },
            sgws_quyanfushi:{
                audio:"MYquyanfushi",
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
                        target.damage(2);
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
            sgws_muniao:{
                audio:"MYmuniao",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card, player, target) {
                    return player != target && target.countCards('e') > 0;
                },
                content:function () {
                    'step 0'
                    player.discardPlayerCard(target, 'e', true);
                    'step 1'
                    game.asyncDraw([target]);
                },
                ai:{
                    order:9,
                    result:{
                        target:function (player, target) {
                            if (target) return 5;
                            if (player == target && player.countCards > player) return 5;
                            return 2;
                        },
                    },
                },
            },
            sgws_jiguan:{
                audio:"MYjiguan",
                enable:"phaseUse",
                usable:1,
                filter:function (event, player) {
                    return player.countCards('h', {
                        type: 'equip'
                    }) > 0;
                },
                filterCard:function (card) {
                    return get.type(card) == 'equip';
                },
                check:function (card) {
                    var player = _status.currentPhase;
                    if (player.countCards('he', {
                            subtype: get.subtype(card)
                        }) > 1) {
                        return 11 - get.equipValue(card);
                    }
                    return 6 - get.value(card);
                },
                filterTarget:function (card, player, target) {
                    if (target.isMin()) return false;
                    return player != target && !target.getEquip(card);
                },
                content:function () {
                    target.equip(cards[0]);
                    player.draw(3);
                },
                discard:false,
                prepare:function (cards, player, targets) {
                    player.$give(cards, targets[0], false);
                },
                ai:{
                    basic:{
                        order:10,
                    },
                    result:{
                        target:3,
                    },
                    threaten:1.3,
                },
            },
            sgws_yehou:{
                group:["sgws_yehou1"],
                audio:"MYyehou",
                trigger:{
                    player:["useCardAfter","respondAfter","discardAfter"],
                },
                frequent:true,
                filter:function (event, player) {
                    if (player == _status.currentPhase) return false;
                    if (event.cards) {
                        for (var i = 0; i < event.cards.length; i++) {
                            if (get.color(event.cards[i]) == 'red' &&
                                event.cards[i].original != 'j') return true;

                        }
                    }
                    return false;
                },
                content:function () {
                    "step 0"
                    player.judge(function(card) {
                        return (get.color(card) == 'red') ? 1.5 : -0.5
                    });
                    "step 1"
                    player.draw(2);
                },
                ai:{
                    threaten:0.7,
                },
            },
            sgws_langqun:{
                audio:"MYlangqun",
                trigger:{
                    player:"damageEnd",
                },
                forced:true,
                unique:true,
                content:function () {
                    "step 0"
                    event.players = get.players(player);
                    event.players.remove(player);
                    for(let i of event.players)
                        if(i.isFriendsOf(player))
                            event.players.remove(i);
                    "step 1"
                    if (event.players.length) {
                        event.players.shift().damage('thunder');
                        event.redo();
                    }
                },
            },
            sgws_yehou1:{
                audio:"yehou",
                trigger:{
                    player:["useCardAfter","respondAfter","discardAfter"],
                },
                frequent:true,
                filter:function (event, player) {
                    if (player == _status.currentPhase) return false;
                    if (event.cards) {
                        for (var i = 0; i < event.cards.length; i++) {
                            if (get.color(event.cards[i]) == 'black' &&
                                event.cards[i].original != 'j') return true;
                        }
                    }
                    return false;
                },
                content:function () {
                    "step 0"
                    player.judge(function(card) {
                        return (get.color(card) == 'black') ? 1.5 : -0.5
                    });
                    "step 1"
                    if (result.judge > 0) {

                        player.recover(true,2);
                    } else {

                        player.gainMaxHp(true,2);
                    }
                },
                ai:{
                    threaten:0.7,
                },
            },
            sgws_shedu:{
                audio:"MYshedu",
                trigger:{
                    global:"phaseUseBegin",
                },
                filter:function (event, player) {
                    return event.player != player && player.countCards('h') > 0;
                },
                direct:true,
                content:function () {
                    "step 0"
                    var nono = (Math.abs(get.attitude(player, trigger.player)) < 3);
                    if (get.damageEffect(trigger.player, player, player) <= 0) {
                        nono = true
                    } else if (trigger.player.hp > 2) {
                        nono = true;
                    } else if (trigger.player.hp > 1 && player.countCards('h') < 3) {
                        nono = true;
                    } else if (trigger.player.canUse('sha', player) && !player.countCards('h',
                            'shan') && trigger.player.countCards('h') >= 3) {
                        nono = true;
                    }
                    var next = player.chooseToDiscard(get.prompt('sgws_shedu', trigger.player));
                    next.set('ai', function(card) {
                        if (_status.event.nono) return -1;
                        return 7 - get.useful(card);
                    });
                    next.set('logSkill', ['sgws_shedu', trigger.player]);
                    next.set('nono', nono);
                    "step 1"
                    if (result.bool) {
                        trigger.player.damage(3);
                    } else {
                        event.finish();
                    }
                    "step 2"
                    player.chooseControl('喝酒', '摸牌').set('ai', function(event) {
                        if (player.countCards('h', 'shan') > 1) return '喝酒';
                        return '摸牌';
                    });
                    "step 3"
                    if (result.control == '喝酒') trigger.player.useCard({
                        name: 'jiu'
                    }, trigger.player);
                    if (result.control == '摸牌') trigger.player.draw(2);
                },
                ai:{
                    threaten:2,
                    expose:0.3,
                },
            },
            sgws_huomeishu:{
                audio:"MYhuomeishu",
                trigger:{
                    player:"phaseDiscardEnd",
                },
                direct:true,
                content:function () {
                    "step 0"
                    player.chooseTarget(get.prompt('sgws_huomeishu'), function(card, player, target) {
                        return player != target;
                    }).set('ai', function(target) {
                        var att = get.attitude(_status.event.player, target);
                        if (att > 0) {
                            if (target.countCards('h') < target.hp) att += 2;
                            return att - target.countCards('h') / 3;
                        } else {
                            return -1;
                        }
                    });
                    "step 1"
                    if (result.bool) {
                        trigger.cancel();
                        player.logSkill('sgws_huomeishu', result.targets);
                        event.target = result.targets[0];
                        event.target.draw(1);
                        player.chooseTarget('选择杀的目标是谁？', true, function(card, player, target) {
                            return _status.event.target.canUse('sha', target) && player !=
                                target;
                        }).set('ai', function(target) {
                            return get.effect(target, {
                                name: 'sha'
                            }, _status.event.target, _status.event.player);
                        }).set('target', event.target);
                    } else {
                        event.finish();
                    }
                    "step 2"
                    if (result.bool && result.targets.length) {
                        game.log(player, '指定的出杀目标为', result.targets);
                        event.target.line(result.targets);
                        event.target.chooseToUse('对' + get.translation(result.targets) +
                            '使用一张杀，或令' + get.translation(player) + '获得你的一张牌', {
                                name: 'sha'
                            }, result.targets[0], -1);
                    } else {
                        event.bool = true;
                    }
                    "step 3"
                    if (event.bool || result.bool == false) {
                        player.gainPlayerCard('he', event.target, Math.min(3, event.target
                            .countCards('he')), true);
                    }
                },
                ai:{
                    expose:0.2,
                },
            },
            sgws_yushe:{
                audio:"MYyushe",
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event) {
                    return (event.num > 0)
                },
                content:function () {
                "step 0"
                player.draw(15);
                player.recover();
                player.gainMaxHp(true);
                'step 1'
                if ((player.countCards('h') - player.maxHp) >= 3) {
                    player.chooseToDiscard(player.countCards('h') - player.maxHp-2, 'h',
                        true);
                        }
                    },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                    effect:{
                        target:function (card, player, target) {
                        if (player.hasSkillTag('jueqing', false, target)) return [1, -2];
                        if (!target.hasFriend()) return;
                        },
                    },
                },
            },
            sgws_chilian1:{
                group:["sgws_chilian1_mark","sgws_chilian1_die"],
                trigger:{
                    global:"gameDrawAfter",
                    player:"enterGame",
                },
                forced:true,
                filter:function (){
                    return game.players.length>1;
                },
                content:function (){
                    'step 0'
                    player.chooseTarget('请选择一名角色，获得【痴恋】标记',lib.translate.mm_info,true,function(card,player,target){
                        return target!=player;
                    }).set('ai',function(target){
                        var att=get.attitude(_status.event.player,target);
                        if(att>0) return att+1;
                        if(att==0) return Math.random();
                        return att;
                    }).animate=false;
                    'step 1'
                    if(result.bool){
                        var target=result.targets[0];
                        target.addMark('sgws_chilian1_mark',1);
                        game.playAudio('..', 'extension', '秦时明月', 'MYchilian1');
                    }
                },
                subSkill:{
                    die:{
                        skillAnimation:true,
                        animationColor:"soil",
                        trigger:{
                            player:"damageEnd",
                        },
                        forced:true,
                        forceDie:true,
                        direct:true,
                        filter:function (event,player){
                            return game.hasPlayer(function(current){
                                return current!=player
                            });
                        },
                        content:function (){
                        "step 0"
                        var num=0;
                        for(var i=0;i<game.players.length;i++){
                            var current=game.players[i];
                            if(current!=player&&current.countMark('sgws_chilian1_mark')>num){
                                num=current.countMark('sgws_chilian1_mark');
                            }
                        }
                        if(num>0){
                            event.goto(3);
                        }
                        "step 1"                              
                        player.chooseTarget('请选择一名角色，获得【痴恋】标记',lib.translate.mm_info,true,function(card,player,target){
                            return target!=player;
                        }).set('ai',function(target){
                            var att=get.attitude(_status.event.player,target);
                            if(att>0) return att+1;
                            if(att==0) return Math.random();
                            return att;
                        }).animate=false;
                        'step 2'
                        if(result.bool){
                            var target=result.targets[0];
                            target.addMark('sgws_chilian1_mark',1);
                            player.recover();
                            
                        }      
                        'step 3'             
                        player.chooseTarget('选择一名拥有【痴恋】标记的角色，获取其两张牌，否则自己摸两张牌。',function(card,player,target){
                                    return target!=player&&target.countMark('sgws_chilian1_mark');
                                }).set('ai',function(target){
                                    return -get.attitude(_status.event.player,target);
                                }).set('forceDie',true).set('num',num);
                        'step 4' 
                            if(result.bool&&result.targets&&result.targets.length){
                                var target=result.targets[0];
                                event.target=target;
                                player.line(target,{color:[255, 255, 0]});
                                player.gainPlayerCard(target,'he',true,3);   
                                player.draw();                                                          
                            }else{
                                player.draw(4);
                            }  
                            game.playAudio('..', 'extension', '秦时明月', 'MYchilian1');
                        },
                        sub:true,
                    },
                    mark:{
                        marktext:"恋",
                        intro:{
                            name:"痴恋",
                            content:"mark",
                        },
                        sub:true,
                    },
                },
                ai:{
                    threaten:0.01,
                    notemp:true,
                },
            },
            sgws_hanqing:{
                audio:"TXhanqing",
                trigger:{
                    player:"damageEnd",
                    source:"damageEnd",
                },
                direct:true,
                content:function (){
                'step 0'
                player.chooseTarget('含情：选择一名未获得"情"标记的角色，令其获得标记',function(card,player,target){
                    return  !target.hasSkill('sgws_qing');  
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
                        player.logSkill('sgws_hanqing',result.targets[0]);
                        result.targets[0].addSkill('sgws_qing');
                
                    }
                },
            },
            sgws_qing:{
                audio:"TXqing",
                forced:true,
                trigger:{
                    player:["phaseBegin","phaseAfter"],
                },
                mark:true,
                intro:{
                    content:function (storage,player){
                            return '准备或结束阶段，摸4张牌并弃置此标记';
                        },
                    },
                    content:function (){
                    player.draw(4);
                    player.removeSkill('sgws_qing');
                },
            },
            sgws_lianhua1:{
                audio:"TXlianhua",
                trigger:{
                    player:["useCard","respondEnd"],
                },
                frequent:true,
                filter:function (event){
                    return get.suit(event.card)=='heart';
                },
                            content:function (){
                if(player.hp<player.maxHp){
                    player.recover(3); 
                }
                else{
                    player.draw(3);
                    }
                },
                ai:{
                    expose:0.3,
                    threaten:1.5,
                },
            },
            sgws_nance:{
                audio:"nance",
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                content:function () {
                    player.draw(2);
                },
            },
            sgws_haoyan:{
                audio:"MYhaoyan",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card, player, target) {

                    return player != target && target.countCards('h') > player.hp;
                },
                content:function () {
                    'step 0'
                    player.swapHandcards(target);
                    'step 1'
                    target.damage();
                },
                ai:{
                    order:function (skill, player) {
                        if (player.countCards('h', 'tao', 'jiu')) {
                            return 0;
                        }
                        return 1;
                    },
                    result:{
                        target:-0.5,
                    },
                    threaten:1.5,
                },
            },
            sgws_daosheng:{
                audio:"MYdaosheng",
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                content:function () {
                    "step 0"
                    var check;
                    var i, num = game.countPlayer(function(current) {
                        return current != player && current.countCards('h') && get.attitude(
                            player, current) <= 0;
                    });
                    check = (num >= 1);
                    player.chooseTarget(get.prompt('sgws_daosheng'), [1, 1], function(card, player,
                        target) {
                        return target.countCards('h') > 0 && player != target;
                    }, function(target) {
                        if (!_status.event.aicheck) return 0;
                        var att = get.attitude(_status.event.player, target);
                        if (target.hasSkill('tuntian')) return att / 10;
                        return 1 - att;
                    }).set('aicheck', check);
                    "step 1"
                    if (result.bool) {
                        player.logSkill('sgws_daosheng', result.targets);
                        player.gainMultiple(result.targets,2);
                        trigger.cancel();
                        //      player.draw(2); 


                    } else {
                        event.finish();
                    }
                    "step 2"
                    game.delay();
                },
                ai:{
                    threaten:1.6,
                    expose:0.2,
                },
            },
            sgws_dianguang:{
                audio:"MYdianguang",
                enable:"chooseToUse",
                usable:2,
                filterCard:function (card) {
                    return get.color(card) == 'black';
                },
                position:"h",
                viewAs:{
                    name:"shunshou",
                    suit:"club",
                    number:6,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"club","number":6,"name":"sha","nature":"thunder","cardid":"8611960287","original":"h","_transform":"translateX(112px)","clone":{"name":"sha","suit":"club","number":6,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":2798},"timeout":2768}],
                },
                viewAsFilter:function (player) {
                    if (!player.countCards('he', {
                            color: 'black'
                        })) return false;
                },
                prompt:"将一张黑色手牌当【顺手牵羊】使用",
                check:function (card) {
                    return 4 - get.value(card)
                },
                ai:{
                    basic:{
                        order:9,
                        useful:1,
                        value:5,
                    },
                    result:{
                        target:function (player, target) {
                            var att = get.attitude(player, target);
                            var nh = target.countCards('h');
                            if (att > 0) {
                                var js = target.getCards('j');
                                if (js.length) {
                                    var jj = js[0].viewAs ? {
                                        name: js[0].viewAs
                                    } : js[0];
                                    if (jj.name == 'guohe' || js.length > 1 || get.effect(target,
                                            jj, target, player) < 0) {
                                        return 2;
                                    }
                                }
                                if (target.getEquip('baiyin') && target.isDamaged() &&
                                    get.recoverEffect(target, player, player) > 0) {
                                    if (target.hp == 1 && !target.hujia) return 1.6;
                                    if (target.hp == 2) return 0.01;
                                    return 0;
                                }
                            }
                            var es = target.getCards('e');
                            var noe = (es.length == 0 || target.hasSkillTag('noe'));
                            var noe2 = (es.length == 1 && es[0].name == 'baiyin' && target
                                .isDamaged());
                            var noh = (nh == 0 || target.hasSkillTag('noh'));
                            if (noh && (noe || noe2)) return 0;
                            if (att <= 0 && !target.countCards('he')) return 1.5;
                            return -1.5;
                        },
                        player:function (player, target) {
                            if (get.attitude(player, target) < 0 && !target.countCards('he')) {
                                return 0;
                            }
                            if (get.attitude(player, target) > 1) {
                                var js = target.getCards('j');
                                if (js.length) {
                                    var jj = js[0].viewAs ? {
                                        name: js[0].viewAs
                                    } : js[0];
                                    if (jj.name == 'shunshou') return 1;
                                    if (js.length == 1 && get.effect(target, jj, target, player) >=
                                        0) {
                                        return 0;
                                    }
                                    return 1;
                                }
                                return 0;
                            }
                            return 1;
                        },
                    },
                    tag:{
                        loseCard:1,
                        discard:1,
                        gain:1,
                    },
                    wuxie:function (target, card, player, viewer) {
                        if (get.attitude(viewer, player) > 0 && get.attitude(viewer, target) > 0) {
                            return 0;
                        }
                    },
                },
            },
            sgws_liuhunzhou:{
                audio:"MYliuhunzhou",
                enable:"phaseUse",
                usable:3,
                filterTarget:function (card, player, target) {
                    return player != target && target.countCards('h');
                },
                filter:function (event, player) {
                    return player.countCards('h') > 0;
                },
                content:function () {
                    "step 0"
                    player.chooseToCompare(target);

                    'step 1'
                    if (result.bool) {
                        target.turnOver();
                    } else {
                        player.draw();
                        event.target.useCard({
                            name: 'sha'
                        }, player);


                    }
                },
                ai:{
                    result:{
                        target:function (player, target) {
                            var cards = player.getCards('h');
                            var num = target.countCards('h');
                            if (num > cards.length + 3 && player.hp > 1) return -2;
                            if (num > cards.length + 1 && player.hp > 1) return -1;
                            if (num == cards.length - 1 && player.hp > 1 && !get.is.altered(
                                    'pozhen')) return -1;
                            for (var i = 0; i < cards.length; i++) {
                                if (cards[i].number > 9) return num == 1 ? -1 : -0.5;
                            }
                            return 0;
                        },
                    },
                    order:9,
                },
            },
            sgws_xueshou:{
                audio:"MYxueshou",
                trigger:{
                    player:"shaBegin",
                },
                forced:true,
                filter:function (event, player) {
                    return event.card && get.color(event.card) == 'red';
                },
                content:function () {
                    trigger.directHit = true;
                    player.addTempSkill('sgws_liegong3', 'shaAfter');

                },
            },
            "sgws_liegong3":{
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event) {
                    return event.card && event.card.name == 'sha' && event.notLink();
                },
                forced:true,
                audio:"ext:秦时明月:false",
                content:function () {
                    trigger.num+=3;
                },
            },
            sgws_leishenchui:{
                audio:"MYleishenchui",
                forced:true,
                trigger:{
                    source:"damageBefore",
                },
                filter:function (event, player) {
                    return event.card && event.card.name == 'sha';
                },
                content:function () {
                    'step 0'
                    player.judge(function(card) {


                        return (get.color(card) == 'black') ? 1.5 : -0.5;


                    });
                    'step 1'
                    if (result.bool) {
                        trigger.player.loseHp(3, true);
                    }
                },
                group:["sgws_leishenchui_gaipan"],
                subSkill:{
                    gaipan:{
                        trigger:{
                            player:"judge",
                        },
                        filter:function (event, player) {
                            return player.countCards('he', {
                                color: 'black'
                            }) > 0 ;
                        },
                        direct:true,
                        content:function () {
                            "step 0"
                            player.chooseCard(get.translation(trigger.player) + '的' + (trigger
                                    .judgestr || '') + '判定为' +
                                get.translation(trigger.player.judging[0]) + '，' + get.prompt(
                                    'sgws_leishenchui'), 'he',
                                function(card) {
                                    return get.color(card) == 'black';
                                }).set('ai', function(card) {
                                var trigger = _status.event.getTrigger();
                                var player = _status.event.player;
                                var judging = _status.event.judging;
                                var result = trigger.judge(card) - trigger.judge(judging);
                                var attitude = get.attitude(player, trigger.player);
                                if (attitude == 0 || result == 0) return 0;
                                if (attitude > 0) {
                                    return result;
                                } else {
                                    return -result;
                                }
                            }).set('judging', trigger.player.judging[0]);
                            "step 1"
                            if (result.bool) {
                                player.respond(result.cards, 'highlight');
                            } else {
                                event.finish();
                            }
                            "step 2"
                            if (result.bool) {
                                player.logSkill('gaipan');
                                player.$gain2(trigger.player.judging[0]);
                                player.gain(trigger.player.judging[0]);
                                trigger.player.judging[0] = result.cards[0];
                                if (!get.owner(result.cards[0], 'judge')) {
                                    trigger.position.appendChild(result.cards[0]);
                                }
                                game.log(trigger.player, '的判定牌改为', result.cards[0]);
                            }
                            "step 3"
                            game.delay(2);
                        },
                        sub:true,
                    },
                },
            },
            sgws_dadao:{
                audio:"MYdadao",
                trigger:{
                    global:"useCard",
                },
                filter:function (event, player) {

                    return get.type(event.card.viewAs || event.card.name) == 'trick';
                },
                frequent:true,
                content:function () {
                    player.draw();
                },
                ai:{
                    threaten:1.6,
                    noautowuxie:true,
                },
            },
            sgws_yinzhen:{
                audio:"MYyinzhen",
                enable:"phaseUse",
                usable:2,
                filterTarget:function (card, player, target) {
                    return target != player;
                },
                content:function () {
                    'step 0'
                    target.chooseToDiscard('he', Infinity, true);
                    'step 1'
                    target.recover();
                },
                ai:{
                    order:10,
                    result:{
                        player:function (player) {
                            if (player.classList.contains('turnedover')) return 10;
                            return 0;
                        },
                        target:function (player, target) {
                            if (target.countCards('h') > target.hp) return target.hp - target
                                .countCards('h');
                            return 0;
                        },
                    },
                    threaten:1.5,
                    effect:{
                        target:function (card) {
                            if (card.name == 'guiyoujie') return [0, 2];
                        },
                    },
                },
            },
            sgws_yixian:{
                audio:"MYyixian",
                enable:"phaseUse",
                filterCard:true,
                usable:1,
                check:function (card) {
                    return 9 - get.value(card)
                },
                filterTarget:function (card, player, target) {
                    if (target.hp >= target.maxHp) return false;
                    return true;
                },
                content:function () {
                    if (target.hasJudge('tao')) {
                        target.discard(target.getJudge('tao'));
                    } else {
                        var next = player.useCard({
                            name: 'tao'
                        }, target, cards);
                        next.animate = false;
                        next.audio = false;
                    }
                    player.draw(3);
                },
                ai:{
                    order:9,
                    result:{
                        target:function (player, target) {
                            if (target.hp == 1) return 5;
                            if (player == target && player.countCards('h') > player.hp) return 5;
                            return 2;
                        },
                    },
                    threaten:2,
                },
            },
            "sgws_zhuge":{
                audio:"XS_zhuge",
                trigger:{player:'phaseAfter'},
                direct:true,
                forced:true,
                content:function(){
                    if(player.isLinked()) player.link();
                    if(player.isTurnedOver()) player.turnOver();
                    player.recover();	
                    player.draw(3);
                },
                ai:{
                    effect:{
                        target:function (card,player,target){
                            if(card.name=='lebu'||card.name=='bingliang') return 0.5;
                        },
                    },
                },
            },
            sgws_conghui:{
                audio:"MYconghui",
                trigger:{
                    player:"useCard",
                },
                frequent:true,
                filter:function (event) {
                    return (get.type(event.card) == 'equip' && event.cards[0]);
                },
                content:function () {

                    player.recover(true);
                    player.draw(3);
                },
                ai:{
                    threaten:1.4,
                    noautowuxie:true,
                },
            },
            sgws_yinlu:{
                audio:"MYyinlu",
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event, player) {
                    return (event.source && event.source.countCards('he') && event.source !=
                        player);
                },
                content:function () {
                    "step 0"
                    var n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].randomGet();
                    if (n == 1) player.discardPlayerCard(trigger.source, 4, 'e', true);
                    if (n == 2) player.discardPlayerCard(trigger.source, Infinity, 'e', true);
                    if (n == 3) player.discardPlayerCard(trigger.source, 4, 'h', true);
                    if (n == 4) player.discardPlayerCard(trigger.source, Infinity, 'h', true);
                    if (n == 5) player.recover(3);
                    if (n == 6) trigger.source.damage(3);
                    if (n == 7) player.gainPlayerCard(trigger.source,3, 'h', true);
                    if (n == 8) player.gainPlayerCard(trigger.source, 4, 'h', true);
                    if (n == 9) player.draw(3);
                    if (n == 10) player.draw(4);
                    trigger.source.skip('phase');

                },
            },
            sgws_tianfu:{
                audio:"MYtianfu",
                trigger:{
                    player:"phaseBegin",
                },
                filter:function (event, player) {
                    return true;
                },
                frequent:true,
                content:function () {
                    "step 0"
                    player.draw();
                    player.recover();
                    player.chooseTarget(get.prompt('sgws_tianfu'), function(card, player, target) {
                        return lib.filter.targetEnabled({
                            name: 'sha'
                        }, player, target);
                    }).set('ai', function(target) {
                        return get.effect(target, {
                            name: 'sha'
                        }, _status.event.player);
                    });
                    "step 1"
                    if (result.bool) {
                        player.logSkill('sgws_tianfu');
                        player.useCard({
                            name: 'sha'
                        }, result.targets, false);
                    }
                    "step 2"

                    if (result.bool) {
                        player.changeHujia();
                    }
                },
                ai:{
                    threaten:1.6,
                },
            },
            sgws_juenian:{
                audio:"MYjuenian",
                trigger:{
                    global:"phaseEnd",
                },
                check:function (event, player) {
                    return get.attitude(player, event.player) > 0;
                },
                filter:function (event, player) {
                    return event.player.hp <= 2;
                },
                logTarget:"player",
                content:function () {
                    trigger.player.draw(3);
                },
                ai:{
                    expose:0.1,
                },
            },
            sgws_jiansheng:{
                audio:"MYjiansheng",
                trigger:{
                    player:["respond","useCard"],
                },
                filter:function (event, player) {
                    return event.card.name == 'shan';
                },
                check:function (event, player) {
                    return get.attitude(player, event.source) <= 0;
                },
                logTarget:function (event, player) {
                    if (event.card.name == 'sha') return event.targets[0];
                    return event.respondTo[0];
                },
                content:function () {
                    var target = lib.skill.sgws_jiansheng.logTarget(trigger, player);
                    if (target.countCards('he')) {
                        player.discardPlayerCard(target, 'he', true,2);
                    }
                },
            },
            sgws_zuzhuang:{
                audio:"MYzuzhuang",
                trigger:{
                    player:["shaBegin","recoverBefore"],
                },
                content:function (){
                    var list = get.inpile('trick', 'trick');
                    var list2 = []; 
                    for (var i = 0; i < 2; i++) { 
                        list2.push(game.createCard(list.randomGet())); 
                    } 
                    player.gain(list2, 'draw'); 
                    },
                ai:{
                    result:{
                        player:1,
                    },
                    order:9,
                },
            },
            sgws_mianju:{
                audio:"MYmianju",
                trigger:{
                    player:["shaBefore"],
                    target:["shaBefore"],
                },
                filter:function (event, player) {
                    return get.color(event.card) == 'red' || 'black';
                },
                frequent:true,
                content:function () {
                    player.draw(2);
                },
                ai:{
                    effect:{
                        target:function (card, player, target) {
                            if (card.name == 'sha' && get.color(card) == 'red') return [1, 0.6];
                        },
                        player:function (card, player, target) {
                            if (card.name == 'sha' && get.color(card) == 'red') return [1, 1];
                        },
                    },
                },
            },
            sgws_yanbian:{
                audio:"MYyanbian",
                trigger:{
                    global:"useCard",
                },
                priority:15,
                filter:function (event, player) {
                    return event.card.name == 'sha' && event.player != player &&
                        player.countCards('h', 'shan') > 0 && event.targets.contains(player) ==
                        false;
                },
                direct:true,
                content:function () {
                    "step 0"
                    var effect = 0;
                    for (var i = 0; i < trigger.targets.length; i++) {
                        effect += get.effect(trigger.targets[i], trigger.card, trigger.player,
                            player);
                    }
                    var str = '弃置一张闪令' + get.translation(trigger.player);
                    if (trigger.targets && trigger.targets.length) {
                        str += '对' + get.translation(trigger.targets);
                    }
                    str += '的' + get.translation(trigger.card) + '失效，然后你摸2张牌。';
                    var next = player.chooseToDiscard('h', {
                        name: 'shan'
                    }, get.prompt('sgws_yanbian'));
                    next.prompt2 = str;
                    next.ai = function(card) {
                        if (effect < 0) {
                            return 9 - get.value(card);
                        }
                        return -1;
                    }
                    next.autodelay = true;
                    next.logSkill = ['sgws_yanbian', trigger.player];
                    "step 1"
                    if (result.bool) {
                        trigger.cancel();
                        player.draw(2);
                    }
                },
                ai:{
                    threaten:1.2,
                    expose:0.2,
                },
            },
            sgws_ganchangcunduan:{
                audio:"MYganchangcunduan",
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
                    player.chooseTarget('选择一名其他角色，获得其一张牌并对其造成2点伤害',function(card,player,target){
                        return player!=target&&target.countCards('he')>0;
                    }).set('ai',function(target){
                        return -get.attitude(_status.event.player,target);
                    });
                    "step 1"
                    if(result.bool){
                        player.logSkill('sgws_ganchangcunduan',result.targets);
                        event.target=result.targets[0];          
                        player.gainPlayerCard(event.target,true);
                        result.targets[0].damage(2);          
                    }
                    else{
                        event.finish();
                    }
                
                },
            },
            sgws_zuishengmengsi:{
                audio:"MYzuishengmengsi",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
                    return true;
                },
                filterTarget:function (card,player,target){
                    if(player==target) return false;
                    return get.distance(player,target,'attack')<=1;
                },
                content:function () {
                    target.damage(player.maxHp-player.hp+2);
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
            sgws_huakuihuaying:{
                audio:"MYhuakuihuaying",
                trigger:{
                    global:"judgeBefore",
                },
                check:function (event,player){
                    return get.attitude(player,event.player)>0;
                },
                content:function (){
                trigger.cancel();
                },
                group:["sgws_huakuihuaying_1"],
                subSkill:{
                    "1":{
                        audio:"MYhuakuihuaying_1",
                        trigger:{
                            player:"damageBegin",
                        },
                        forced:true,
                        content:function (){
                            trigger.cancel();
                            player.loseHp();
                            player.draw(3);  
                            player.addTempSkill('sgws_huakuihuaying_2',{player:'phaseBefore'});              
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
            sgws_dulongewu:{
                audio:"MYdulongewu",
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
                    if(result.control=='来源获毒')
                    { trigger.source.gain(game.createCard("du"));
                      trigger.source.gain(game.createCard("du"));
                  }  
                else
                    if(result.control=='自己获毒'){ player.gain(game.createCard("du")); }             
                },
                ai:{
                    "maixie_defend":true,
                },
            },
            sgws_yijisetong:{
                audio:"MYyijisetong",
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
                    trigger.num+=2;            
                },
            },
            sgws_yanwuluoyi:{
                audio:"MYyanwuluoyi",
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
                    player.draw(3);    
            },
                ai:{
                    order:9,
                    result:{
                        target:1,
                    },
                    threaten:1.2,
                },
            },
            sgws_xiangyuchushe:{
                audio:"MYxiangyuchushe",
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
                    player.draw(3);      
                },
            },
            sgws_yejintianming:{
                audio:"MYyejintianming",
                trigger:{
                    player:"damageEnd",
                },
                filter:function (event,player){
                    if(player.storage.sgws_yejintianming) return false;        
                    if(player.hp<=6) return true;
                    return false;
                },
                direct:true,
                content:function (){
                    'step 0'
                    var list=get.gainableSkills();
                    list.remove('sgws_yejintianming');
                    list=list.randomGets(4);
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
                    player.addAdditionalSkill('sgws_yejintianming',link);
                    player.popup(link);
                    game.log(player,'获得了技能','【'+get.translation(link)+'】');
                    player.checkMarks();
                    player.markSkill('sgws_yejintianming');
                
                    
                    var chat=['我要成为强者，变得和大叔一样强',].randomGet()
                        player.say(chat);               
                    player.recover();
                    player.storage.sgws_yejintianming=true;
                    player.awakenSkill('sgws_yejintianming'); 
                    game.delay();
                },
                ai:{
                    order:11,
                    result:{
                        player:function (player){
                            if(player.getStat().skill.sgws_yejintianming) return 0;
                            return 1;
                        },
                    },
                },
            },
            sgws_juesha:{
                audio:"MYjuesha",
                enable:"phaseUse",
                filterTarget:function (card, player, target) {
                    return player != target;
                },
                filter:function (event, player) {
                    var num = (player.maxHp - player.hp) + 1
                    if (player.getStat().skill.sgws_juesha >= num) return false;
                    return true;
                },
                selectTarget:[1,1],
                check:function (card) {
                    return 6 - ai.get.value(card);
                },
                content:function () {
                    "step 0"
                    player.judge(function(card) {
                        return (get.color(card) == 'black') ? 1.5 : -0.5
                    });
                    "step 1"
                    if (result.bool) {

                        event.player.useCard({
                            name: 'sha',
                            isCard: true
                        }, false, target);

                    } else {
                        player.draw(2);
                    }

                },
                ai:{
                    order:3,
                    result:{
                        target:-0.5,
                    },
                    threaten:1.2,
                },
            },
            sgws_xiyuxiongshi:{
                audio:"MYxiyuxiongshi",
                trigger:{
                    player:"useCardAfter",
                },
                direct:true,
                filter:function (event,player){
                    if(event.parent.name=='sgws_xiyuxiongshi') return false;
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
                group:["sgws_xiyuxiongshi_1"],
                subSkill:{
                    "1":{
                        trigger:{
                            player:"useCardAfter",
                        },
                        direct:true,
                        filter:function (event,player){
                            if(event.parent.name=='sgws_xiyuxiongshi_1') return false;
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
                            player.chooseControl('摸2张牌','额外结算',function(event,player){
                                if(player.countCards('h')<=2) return '摸2张牌';          
                                if(trigger.card.name=='jiu')  return '摸2张牌';
                                if(trigger.card.name=='tiesuo')  return '摸2张牌';         
                                if(trigger.card.name=='wuxie')  return '摸2张牌';             
                                return '额外结算';
                            });
                            "step 1"
                            if(result.control=='摸2张牌'){
                                player.draw(2);
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
            sgws_qishizhuiji:{
                audio:"MYqishizhuiji",
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                filter:function (event,player){
                    return player.getStat('damage')>=3&&!player.storage.sgws_qishizhuiji;
                },
                content:function (){
                    var chat=['狮子捕食猎物，需要的是耐心'].randomGet()        
                    player.say(chat);          
                    
                    player.draw(4);
                },
                group:["sgws_qishizhuiji_1"],
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
            sgws_zhiyin:{
                audio:"MYzhiyin",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card, player, target) {
                    return player != target && target.countCards('h');
                },
                filterCard:true,
                check:function (card) {
                    return 7 - get.value(card);
                },
                position:"h",
                content:function () {
                    "step 0"
                    var card = target.getCards('h').randomGet();
                    if (!card) {
                        event.finish();
                        return;
                    }
                    target.showCards(card);
                    if (get.color(card) == get.color(cards[0])) {
                        event.bool = true;
                    }
                    "step 1"
                    if (event.bool) {
                        player.discard(player.getCards('h'));

                        var cards = target.getCards('h');
                        if (cards && cards.length) {
                            for (var j = 0; j < cards.length; j++) {
                                var card = game.createCard(cards[j].name, cards[j].suit, cards[j]
                                    .number, cards[j].nature);
                                player.gain(card);
                            }
                        }
                    } else if (player.countCards('he')) {
                        target.loseHp(2);
                    }
                },
                ai:{
                    order:1,
                    result:{
                        target:function (player, target) {
                            if (target.hasSkillTag('noh')) return 0;
                            return -1;
                        },
                    },
                    threaten:1.3,
                },
            },
            sgws_qinxian:{
                audio:"MYqinxian",
                trigger:{
                    player:"recoverEnd",
                },
                direct:true,
                filter:function (event, player) {
                    return game.hasPlayer(function(current) {
                        return current != player;
                    });
                },
                content:function () {
                    'step 0'
                    player.chooseTarget('琴弦：令一名其他角色失去2点体力', function(card, player, target) {
                        return target != player;
                    }).set('ai', function(target) {
                        return -get.attitude(player, target) / (1 + target.hp);
                    });
                    'step 1'
                    if (result.bool) {
                        player.logSkill('sgws_qinxian', result.targets[0]);
                        result.targets[0].loseHp(2);
                    }
                },
                ai:{
                    threaten:1.5,
                    expose:0.2,
                },
                group:"sgws_qinxian_clear",
                subSkill:{
                    clear:{
                        trigger:{
                            player:"damageEnd",
                        },
                        direct:true,
                        filter:function (event, player) {
                            return game.hasPlayer(function(current) {
                                return current != player && current.isDamaged();
                            });
                        },
                        content:function () {
                            'step 0'
                            player.chooseTarget('琴弦：令一名其他角色回复2点体力', function(card, player, target) {
                                return target != player && target.hp < target.maxHp;
                            }).ai = function(target) {
                                return get.recoverEffect(target, player, player);
                            };
                            'step 1'
                            if (result.bool) {
                                player.logSkill('sgws_qinxian', result.targets[0]);
                                result.targets[0].recover(2);
                            }
                        },
                        ai:{
                            threaten:1.5,
                            expose:0.2,
                        },
                        sub:true,
                    },
                },
            },
            sgws_yunwenlianyi:{
                audio:"MYyunwenlianyi",
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
                        
                    player.draw(4);
                    target.recover();          
                }
                else{
                        target.draw(4);
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
            sgws_huarongyuemao:{
                audio:"MYhuarongyuemao",
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                filter:function (event,player){
                    return player.countCards('he')>0;
                },
                content:function (){
                    "step 0"
                    player.chooseTarget(get.prompt('sgws_huarongyuemao'),function(card,player,target){
                        return player!=target;
                    }).set('ai',function(target){
                        if(!_status.event.goon) return 0;
                        if(target.countCards('he')==0) return 0;
                        return -get.attitude(_status.event.player,target);
                    }).set('goon',player.countCards('h','sha')<=player.countCards('h')/3);
                    "step 1"
                    if(result.bool){
                        game.delay();
                        player.logSkill('sgws_huarongyuemao',result.targets);
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
                    player.draw(4); 
                    player.discardPlayerCard(target,2,true);              
                }
                else{
                    player.recover();    
                    target.loseHp(3);                      
                            }  
                        }      
                },
                ai:{
                    expose:0.2,
                    threaten:1.4,
                },
            },
            sgws_gouhunliandao:{
                audio:"MYgouhunliandao",
                trigger:{
                    player:"shaBegin",
                },
                forced:true,
                filter:function (event){
                    return event.target.countCards('he')>0;
                },
                content:function (){
                    player.discardPlayerCard([1,2],'he',trigger.target,true);            
                },
                group:["sgws_gouhunliandao_1"],
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
                            }                  
                        },
                        sub:true,
                    },
                },
            },
            sgws_yuelangzhiyi:{
                audio:"MYyuelangzhiyi",
                trigger:{
                    source:"damageEnd",
                },
                check:function (event,player){
                    var att=get.attitude(player,event.player);
                    if(event.player.hp>0) return att<=0;
                    return att>0;
                    
                },
                filter:function (event,player){
                    return !event.player.hasSkill('sgws_langdu')&&event.player!=player;
                },
                content:function (){
                    player.gainPlayerCard(trigger.player,2,'he',true);  
                    trigger.player.addSkill('sgws_langdu');
                },
            },
            sgws_langdu:{
                unique:true,
                init:function (player){
                    player.storage.sgws_langdu=0;
                },
                mark:true,
                intro:{
                    content:"<b>已经使用#张杀。</b><br>(使用1张杀后，失去三点体力，然后弃置此标记)",
                },
                trigger:{
                    player:"shaAfter",
                },
                forced:true,
                popup:false,
                content:function (){        
                    player.storage.sgws_langdu+=1;                      
                },
                group:["sgws_langdu_1"],
                subSkill:{
                    "1":{
                        trigger:{
                            player:"shaAfter",
                        },
                        filter:function (event,player){
                            if(player.storage.sgws_langdu>=1) return true;
                            return false;
                        },
                        forced:true,
                        unique:true,
                        content:function (){      
                        player.loseHp(3);   
                        player.removeSkill('sgws_langdu');    
                        },
                        sub:true,
                    },
                },
            },
            sgws_daofa:{
                mod:{
                    cardUsable:function (card, player, num) {

                        if (card.name == 'sha') return (player.maxHp - player.hp) + 2;
                    },
                    selectTarget:function (card, player, range) {
                        if (card.name == 'sha' && range[1] != -1) range[1] += player.maxHp - player.hp+1;
                    },
                },
                ai:{
                    unequip:true,
                    skillTagFilter:function (player, tag, arg) {
                        if (!get.zhu(player, 'shouyue')) return false;
                        if (arg && arg.name == 'sha') return true;
                        return false;
                    },
                },
            },
            sgws_xizuo:{
                audio:"MYxizuo",
                enable:"phaseUse",
                usable:1,
                filterCard:true,
                selectCard:[1,2],
                filter:function (event, player) {
                    return player.countCards('h') > 0;
                },
                check:function (card) {
                    return 8 - get.value(card);
                },
                filterTarget:function (card, player, target) {
                    return player != target;
                },
                content:function () {    
                    target.loseHp(cards.length+1); 
                },
                ai:{
                    order:9,
                    result:{
                        target:-0.5,
                    },
                    threaten:1.2,
                },
            },
            sgws_guiye:{
                audio:"MYguiye",
                trigger:{
                    player:"useCard",
                },
                frequent:true,
                filter:function (event) {
                    return (get.type(event.card) == 'trick' && event.cards[0]);
                },
                content:function () {
                    "step 0"
                    player.chooseTarget(get.prompt('sgws_guiye'), function(card, player, target) {
                        return player != target && target.countCards('he') > 0;
                    }).set('autodelay', trigger.name == 'respond' ? 0.5 : 1).ai = function(
                        target) {
                        return -get.attitude(player, target);
                    };
                    "step 1"
                    if (result.bool) {
                        player.logSkill('sgws_guiye', result.targets);
                        player.discardPlayerCard(result.targets[0], true);


                    } else {
                        event.finish();
                    }

                    'step 2'
                    var card = result.cards[0];
                    if (get.color(card) == 'black') {
                        player.draw(3);
                    }

                },
                ai:{
                    threaten:1.4,
                    noautowuxie:true,
                },
            },
            sgws_xunlu:{
                audio:"MYxunlu",
                trigger:{
                    player:"phaseBegin",
                },
                content:function () {
                    player.recover();
                    player.draw(player.hp);
                },
            },
            "sgws_wujian":{
                audio:"XS_wujian",
                enable:"phaseUse",
                filterCard:true,
                usable:1,
                filterTarget:function(card,player,target){
                    return target!=player;
                },
                check:function (card){
                    if(get.color(card)=='black') return 9-get.value(card);
                    return 7-get.value(card);
                },
                position:"he",
                filter:function (event,player){
                    return player.countCards('he')>0;
                },
                discard:false,
                lose:false,
                prepare:"give2",
                content:function (){
                    player.lose(cards,ui.special,'toStorage');
                    if(!target.hasSkill('sgws_wujian1')){
                        target.addSkill('sgws_wujian1');
                        target.storage.sgws_wujian1_mark=player;
                    }
                    target.storage.sgws_wujian1.push(cards[0]);
                    target.syncStorage('sgws_wujian1');
                },
                ai:{
                    expose:0.4,
                    order:8,
                    result:{
                        target:function (player,target){
                            if(target.hasSkill('XS_bawang')) return 10;
                            return 3;
                        },
                    },
                },
            },
            "sgws_wujian1":{
                init:function (player){
                    player.storage.sgws_wujian1=[];
                },
                mark:true,
                marktext:"剑",
                intro:{
                    content:"cards",
                },
                group:["sgws_wujian1_red","sgws_wujian1_black"],
            },
            "sgws_wujian1_red":{
                usable:1,
                audio:"XS_wujian1_red",
                enable:"phaseUse",
                filter:function (event,player){
                    var cardss=player.storage.sgws_wujian1;
                    if(!cardss.length) return false;
                    for(i=0;i<cardss.length;i++) {
                        if(get.color(cardss[i])=='red') return true;
                    }
                    return false;
                },
                chooseButton:{
                    dialog:function (event,player){
                        var list=[];
                        var cardX=player.storage.sgws_wujian1;
                        for(var i=0;i<cardX.length;i++){
                            if(get.color(cardX[i])=='red') list.push(cardX[i]);
                        }
                        return ui.create.dialog('舞剑',[list,'vcard']);
                    },
                    backup:function (links,player){
                        return {
                            filterCard:function (card){
                                return false;
                            },
                            selectCard:-1,
                            viewAs:{name:'sha'},
                            cards:links,
                            onuse:function(result,player){
                                result.cards=lib.skill[result.skill].cards;
                                var card=result.cards[0];
                                player.storage.sgws_wujian1.remove(card);
                                game.cardsDiscard(card);
                                player.syncStorage('sgws_wujian1');
                                if(!player.storage.sgws_wujian1.length){
                                    player.removeSkill('sgws_wujian1');
                                }
                                if(player.storage.sgws_wujian1_mark.isAlive()) {
                                    player.storage.sgws_wujian1_mark.draw(3);
                                }  
                            }
                        }
                    },
                    prompt:function (links,player){
                        return '选择使用杀的目标';
                    },
                },
                ai:{
                    order:8,
                    result:{
                        player:1.5,
                    },
                },
            },
            "sgws_wujian1_black":{
                usable:1,
                audio:"sgws_wujian1_black",
                enable:"phaseUse",
                filter:function (event,player){
                    var cardss=player.storage.sgws_wujian1;
                    if(!cardss.length) return false;
                    for(i=0;i<cardss.length;i++) {
                        if(get.color(cardss[i])=='black') return true;
                    }
                    return false;
                },
                chooseButton:{
                    dialog:function (event,player){
                        var list=[];
                        var cardX=player.storage.sgws_wujian1;
                        for(var i=0;i<cardX.length;i++){
                            if(get.color(cardX[i])=='black') list.push(cardX[i]);
                        }
                        return ui.create.dialog('舞剑',[list,'vcard']);
                    },
                    backup:function (links,player){
                        return {
                            filterCard:function (card){
                                return false;
                            },
                            selectCard:-1,
                            viewAs:{name:'juedou'},
                            cards:links,
                            onuse:function(result,player){
                                result.cards=lib.skill[result.skill].cards;
                                var card=result.cards[0];
                                player.storage.sgws_wujian1.remove(card);
                                game.cardsDiscard(card);
                                player.syncStorage('sgws_wujian1');
                                if(!player.storage.sgws_wujian1.length){
                                    player.removeSkill('sgws_wujian1');
                                }
                                if(player.storage.sgws_wujian1_mark.isAlive()) {
                                    player.storage.sgws_wujian1_mark.draw(3);
                                } 
                            }
                        }
                    },
                    prompt:function (links,player){
                        return '选择使用决斗的目标';
                    },
                },
                ai:{
                    order:8,
                    result:{
                        player:1.5,
                    },
                },
            },
            "sgws_sheshen":{
                audio:"GXS_sheshen",
                    trigger:{
                player:"damageEnd",
            },
            frequent:true,
            filter:function (event){
                return (event.num>0)
            },
            content:function (){
                "step 0"
                event.cards=get.cards(4*trigger.num);
                "step 1"
                if(event.cards.length>1){
                    player.chooseCardButton('将“舍身”牌分配给任意角色',true,event.cards,[1,event.cards.length]).set('ai',function(button){
                        if(ui.selected.buttons.length==0) return 1;
                        return 0;
                    });
                }
                else if(event.cards.length==1){
                    event._result={links:event.cards.slice(0),bool:true};
                }
                else{
                    event.finish();
                }
                "step 2"
                if(result.bool){
                    for(var i=0;i<result.links.length;i++){
                        event.cards.remove(result.links[i]);
                    }
                    event.togive=result.links.slice(0);
                    player.chooseTarget('将'+get.translation(result.links)+'交给一名角色',true).set('ai',function(target){
                        var att=get.attitude(_status.event.player,target);
                        if(_status.event.enemy){
                            return -att;
                        }
                        else if(att>0){
                            return att/(1+target.countCards('h'));
                        }
                        else{
                            return att/100;
                        }
                    }).set('enemy',get.value(event.togive[0])<0);
                }
                "step 3"
                if(result.targets.length){
                    if(player==game.me&&((player.name.indexOf('guojia')!=-1||
                    player.name.indexOf('郭嘉')!=-1)||
                    (player.name2!=undefined&&(player.name2.indexOf('guojia')!=-1||
                    player.name2.indexOf('郭嘉')!=-1)))&&
                    lib.config.achievement.wei.buyiyuli.finished!=true&&
                    result.targets[0]!=player){
                        if(_status.achievement1==undefined) _status.achievement1={};
                        if(_status.achievement1.buyiyuli==undefined) _status.achievement1.buyiyuli=0;
                        _status.achievement1.buyiyuli++;
                    };
                    result.targets[0].gain(event.togive,'draw');
                    player.line(result.targets[0],'green');
                    game.log(result.targets[0],'获得了'+get.cnNumber(event.togive.length)+'张牌');
                    event.goto(1);
                }
            },
            ai:{
                maixie:true,
                "maixie_hp":true,
                    effect:{
                        target:function (card,player,target){
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
                                if(target.hp>=4) return [1,num*2];
                                if(target.hp==3) return [1,num*1.5];
                                if(target.hp==2) return [1,num*0.5];
                            }
                        },
                    },
                },
            },
            sgws_changnian2:{
				trigger:{player:'phaseEnd'},
				forced:true,
				nopop:true,
				content:function(){
					player.draw(3);
				},
			},
            sgws_xiaosheng:{
                audio:"MYxiaosheng",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card, player, target) {

                    return get.distance(player, target) <= 1;
                },
                selectTarget:[1,Infinity],
                content:function () {

                    if (target == targets[0]) {
                        game.asyncDraw(targets,3);
                    }

                },
                ai:{
                    order:10,
                    result:{
                        target:function (player, target) {
                            if (target.countCards('j')) return 2;
                            switch (target.countCards('he')) {
                                case 0:
                                    return 0;
                                case 1:
                                    return 0.5;
                                case 2:
                                    return 0.8;
                                default:
                                    return 1;
                            }
                        },
                    },
                    threaten:1.2,
                },
            },
            sgws_huadie:{
                usable:1,
                trigger:{
                    global:"damageAfter",
                },
                filter:function (event, player) {
                    return get.distance(player, event.player) <= 1;
                },
                frequent:true,
                content:function () {
                    player.draw(3);
                },
            },
            sgws_meiwu:{
                audio:"MYmeiwu",
                srlose:true,
                enable:"phaseUse",
                usable:3,
                filter:function (event, player) {
                    return player.countCards('h') > 0;
                },
                filterTarget:function (card, player, target) {

                    return target.countCards('h') && player != target;
                },
                content:function () {
                    var cardx = target.getCards('h').randomGet();
                    player.showCards(cardx);
                    if (get.color(cardx) == 'black') {

                        target.addJudge('bingliang', cardx);
                        target.$giveAuto(cardx, target);
                    } else {
                        player.gain(cardx);
                        target.$giveAuto(cardx, player);
                    }
                },
                ai:{
                    result:{
                        target:function (player, target) {
                            return -target.countCards('h');
                        },
                    },
                    order:10,
                    expose:0.4,
                },
            },
            sgws_anfu:{
                trigger:{
                    global:"recoverAfter",
                },
                direct:true,
                filter:function (event, player) {
                    return game.hasPlayer(function(current) {
                        return current != player;
                    });
                },
                content:function () {
                    'step 0'
                    player.chooseTarget('安抚：选择一名角色令其摸3张牌').ai = function(target) {
                        return get.attitude(player, target)
                    }
                    'step 1'
                    if (result.bool) {
                        player.logSkill('sgws_anfu', result.targets[0]);
                        result.targets[0].draw(3);
                    }
                },
                ai:{
                    threaten:0.8,
                    expose:0.2,
                },
            },
            sgws_haodukongju:{
                audio:"MYhaodukongju",
                trigger:{
                    player:"phaseDrawBegin",
                },
                check:function (event,player){
                    return true;                               
                },
                content:function (){
                    'step 0'            
                player.throwDice();
                    'step 1'                          
                trigger.num+=num;  
                    'step 2'
                    if(event.num<=3){                       
                    player.recover();
                    }                     
                },
                ai:{
                    threaten:1.3,
                },
            },
            sgws_jiuzhuanduanhun:{
                audio:"MYjiuzhuanduanhun",
                enable:"phaseUse",
                usable:1,
                filter:function (event,player){
                    if(player.countCards('he')==0) return false;
                    return game.hasPlayer(function(current){
                        return true;
                    });
                },
                filterTarget:function (card,player,target){
                    return true;
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
            sgws_ganjiangmoye:{
                trigger:{
                    source:"damageBegin",
                },
                audio:"MYganjiangmoye",
                filter:function (event,player){
                    return event.player!=player;
                },
                check:function (event,player){
                    var att=get.attitude(player,event.player);
                    if(event.player.hp>0) return att<=0;
                    return att>0;
                    
                },
                content:function (){
                    trigger.num+=2;
                    var card=game.createCard(get.inpile('equip').randomGet());
                        trigger.player.equip(card);
                        trigger.player.$gain2(card);
                        game.delay();                                                 
                },
                group:["sgws_ganjiangmoye_1"],
                subSkill:{
                    "1":{
                        trigger:{
                            player:"damageEnd",
                        },
                        audio:"MYganjiangmoye_1",
                        check:function (event,player){
                            return get.attitude(player,event.source)<0;
                        },
                        filter:function (event,player){
                            return event.source&&event.source!=player&&event.source.countCards('e')>0;
                        },
                        content:function (){
                            player.draw(trigger.source.countCards('e'));      
                            player.discardPlayerCard(trigger.source,Infinity,'e',true);       
                        },
                        sub:true,
                    },
                },
            },
            sgws_chunxiaqiudong:{
                trigger:{
                    player:"phaseAfter",
                },
                forced:true,
                content:function (){   
                    var n=[1,2,3,4,5,6].randomGet();
                    if(n==1){player.addTempSkill('MYxiarong',{player:'phaseEnd'});player.addTempSkill('MYdongmie',{player:'phaseEnd'});}        
                    if(n==2){player.addTempSkill('MYxiarong',{player:'phaseEnd'});player.addTempSkill('MYchunsheng',{player:'phaseEnd'});}      
                    if(n==3){player.addTempSkill('MYqiuku',{player:'phaseEnd'});player.addTempSkill('MYchunsheng',{player:'phaseEnd'});}
                    if(n==4){player.addTempSkill('MYdongmie',{player:'phaseEnd'});player.addTempSkill('MYchunsheng',{player:'phaseEnd'});}
                    if(n==5){player.addTempSkill('MYqiuku',{player:'phaseEnd'});player.addTempSkill('MYxiarong',{player:'phaseEnd'});}
                    if(n==6){player.addTempSkill('MYdongmie',{player:'phaseEnd'});player.addTempSkill('MYqiuku',{player:'phaseEnd'});}  
                },
            },
            MYhupojianfa:{
                mod:{
                    maxHandcard:function (player,num){
                        return  num+player.countCards('e');
                    },
                },
                audio:"MYhupojianfa",
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
                    trigger.num+=player.countCards('e')+1;                   
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
            sgws_kuanglieaogu:{
                audio:"MYkuanglieaogu",
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                filter:function (event,player){
                    return (event.source&&event.source.countGainableCards(player,'he')&&event.source!=player);
                },
                content:function (){
                    "step 0"        
                    player.gainPlayerCard(get.prompt('sgws_kuanglieaogu',trigger.source),trigger.source,get.buttonValue,'he',[1,3]).set('logSkill',['sgws_kuanglieaogu',trigger.source]);
                
                    "step 1"
                    if(result.bool){
                        player.logSkill('sgws_kuanglieaogu');
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
            sgws_wulikanhua:{
                audio:"MYwulikanhua",
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
                    if(get.suit(event.card)+'2'!=event.choice) target.loseMaxHp(3,'nocard')&&player.draw(2);                 
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
                group:["sgws_wulikanhua_roundcount"],
            },
            sgws_wumeiyaorao:{
                audio:"MYwumeiyaorao",
                trigger:{
                    player:"useCardToBegin",
                },
                filter:function (event,player){   
                  return event.card.name!=='lebu'&&event.target&&event.target!=player&&!event.target.hasJudge('lebu');
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
            sgws_lijian:{
				audio:"lijian",
				enable:'phaseUse',
				usable:3,
				filter:function(event,player){
					return game.countPlayer(function(current){
						return current!=player&&current.hasSex('male');
					})>1;
				},
				check:function(card){return 10-get.value(card)},
				filterCard:true,
				position:'he',
				filterTarget:function(card,player,target){
					if(player==target) return false;
					if(!target.hasSex('male')) return false;
					if(ui.selected.targets.length==1){
						return target.canUse({name:'juedou'},ui.selected.targets[0]);
					}
					return true;
				},
				targetprompt:['先出杀','后出杀'],
				selectTarget:2,
				multitarget:true,
				content:function(){
					targets[1].useCard({name:'juedou',isCard:true},'nowuxie',targets[0],'noai').animate=false;
					game.delay(0.5);
				},
				ai:{
					order:8,
					result:{
						target:function(player,target){
							if(ui.selected.targets.length==0){
								return -3;
							}
							else{
								return get.effect(target,{name:'juedou'},ui.selected.targets[0],target);
							}
						}
					},
					expose:0.4,
					threaten:3,
				}
			},
            sgws_chayanguanse:{
                audio:"MYchayanguanse",
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
                        target.damage(3);             
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
            sgws_jingyitishen:{
                audio:"MYjingyitishen",
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
                
                
                    trigger.source.addSkill("sgws_jingyitishen_buff1");
                    trigger.source.storage.cxyXiaoXiong_buff1 = player;
                    trigger.source.markSkillCharacter("sgws_jingyitishen",player,"惊鲵替身","你替"+get.translation(player)+"承受一次除体力流失和闪电以外的所有伤害，然后解除此状态");
                
                    "step 1"
                    player.judge(function(card){return (get.color(card)=='black')?1.5:-0.5});
                    "step 2"
                    if(result.judge>0){
                        trigger.untrigger();
                        trigger.responded=true;
                        trigger.player.addSkill("sgws_jingyitishen_buff2");
                        trigger.player.markSkillCharacter('sgws_jingyitishen_buff2',player,'惊鲵替身','摸牌阶段，你额外摸3张牌，然后解除此状态');      
                     }
                    
                    else{                   
                        trigger.player.addSkill("sgws_jingyitishen_buff3");
                        trigger.player.markSkillCharacter('sgws_jingyitishen_buff3',player,'惊鲵替身','准备阶段，视为使用一张无视距离的杀，然后解除此状态');       
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
                            player.unmarkSkill("sgws_jingyitishen");
                            delete player.storage.cxyXiaoXiong_buff1;
                        },
                        logTarget:"player",
                        forced:true,
                        content:function (){
                            trigger.player = player;            
                            trigger.player.removeSkill("sgws_jingyitishen_buff1");                 
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
                            trigger.player.removeSkill("sgws_jingyitishen_buff2");                 
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
                            player.chooseTarget('视为使用3张无视距离的杀',function(card,player,target){
                                return lib.filter.targetEnabled({name:'sha'},player,target);
                            }).set('ai',function(target){
                                return get.effect(target,{name:'sha'},_status.event.player);
                            });
                            "step 1"
                            if(result.bool){
                                player.logSkill('sgws_jingyitishen');
                                player.useCard({name:'sha'},result.targets,false);
                                if(result.targets.isAlive())
                                    player.useCard({name:'sha'},result.targets,false);
                                if(result.targets.isAlive())
                                    player.useCard({name:'sha'},result.targets,false);
                                trigger.player.removeSkill("sgws_jingyitishen_buff3");                                  
                            }
                        },
                        sub:true,
                    },
                },
            },
            sgws_chunhanduanzhang:{
                audio:"MYchunhanduanzhang",
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
                    trigger.player.addSkill('sgws_chunhanduanzhang2');
                },
            },
            "sgws_chunhanduanzhang2":{
                mod:{
                    cardEnabled:function (card,player){
                        if(_status.currentPhase!=player) return;
                        if(get.cardCount(true,player)>=1){
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
                group:["sgws_chunhanduanzhang2_1"],
                subSkill:{
                    "1":{
                        trigger:{
                            player:"damageEnd",
                        },
                        forced:true,
                        content:function (){
                            player.removeSkill('sgws_chunhanduanzhang2');   
                        },
                        sub:true,
                    },
                },
            },
            sgws_quyifengying:{
                audio:"MYquyifengying",
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                content:function (){
                        'step 0'
                    player.chooseTarget('摸两张牌，令一名其他角色进入额外的回合，并且拥有"春寒断掌"到其回合结束',function(card,player,target){
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
                        player.draw(2);            
                        player.logSkill('sgws_quyifengying',result.targets[0]);
                        result.targets[0].insertPhase();
                        result.targets[0].addTempSkill('sgws_chunhanduanzhang',{player:'phaseAfter'});
                    }
                },
                ai:{
                    threaten:1.5,
                    expose:0.2,
                },
            },
            sgws_nanmandanyu:{
                audio:"MYnanmandanyu",
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
            sgws_ezhanwuju:{
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
                    if(trigger.player.countCards('h')<=player.countCards('h')) player.gainPlayerCard(trigger.player,'he',true);               
                    if(trigger.player.hp<=player.hp) trigger.num++;                             
                },
            },
            sgws_baizhanchuanjia:{
                trigger:{
                    player:["useCard","respond"],
                },
                filter:function (event,player){
                    return get.type(event.card)=='basic';
                },
                direct:true,
                content:function (){
                    player.changeHujia(3);                        
                },
            },
            sgws_wuwangbuli:{
                audio:"MYwuwangbuli",
                trigger:{
                    player:"phaseEnd",
                },
                filter:function (event,player){
                    return player.hujia>3;
                },
                direct:true,
                content:function (){        
                    'step 0'          
                    player.chooseTarget('无往不利：选择一名其他角色，对其造成2点伤害并弃置其X张牌(X为你的护甲数)',true,function(card,player,target){
                        return target!=player;
                    }).set('ai',function(target){
                        return -get.attitude(player,target)/(1+target.hp);
                    });
                    'step 1'
                    if(result.bool){
                        player.logSkill('sgws_wuwangbuli',result.targets[0]);
                        result.targets[0].damage(2);         
                        player.discardPlayerCard(result.targets[0],player.hujia,true);
                        player.changeHujia(-player.hujia);                  
                    }
                },
            },
            sgws_roujia:{
                trigger:{
                    player:"recoverEnd",
                },
                forced:true,
                content:function () {
                    player.changeHujia();
                    player.draw(2);
                },
            },
            sgws_xiongbao:{
                audio:"MYxiongbao",
                group:["xiongbao"],
                trigger:{
                    player:"shaBegin",
                },
                forced:true,
                filter:function (event, player) {
                    return !event.directHit;
                },
                priority:-1,
                content:function () {
                    if (typeof trigger.shanRequired == 'number') {
                        trigger.shanRequired+=2;
                    } else {
                        trigger.shanRequired = 3;
                    }
                },
            },
            sgws_xiaoyong:{
                audio:"MYxiaoyong",
                trigger:{
                    player:"shaBegin",
                },
                check:function (event, player) {
                    return get.attitude(player, event.target) < 0;
                },
                filter:function (event, player) {
                    return player.countCards('h') > 0 && event.target.countCards('h') > 0 && event
                        .target != player;
                },
                logTarget:"target",
                content:function () {
                    'step 0'
                    player.chooseToCompare(trigger.target);
                    'step 1'
                    if (result.bool) {
                        trigger.directHit = true;
                        player.draw(3);

                    } else {
                        player.gain(result.target);
                    }
                },
                ai:{
                    effect:{
                        target:function (card, player, target, current) {
                            if (card.name == 'sha' && current < 0) return 0.7;
                        },
                    },
                },
            },
            sgws_shanzhan:{
                trigger:{
                    player:"damageEnd",
                },
                check:function (event, player) {
                    return get.attitude(player, event.source) < 0;
                },
                filter:function (event, player) {
                    return player.countCards('h') > 0 && event.source.countCards('h') > 0 && event
                        .source != player;
                },
                logTarget:"source",
                content:function () {
                    'step 0'
                    player.chooseToCompare(trigger.source);
                    'step 1'
                    if (result.bool) {
                        trigger.source.loseHp(2);
                    } else {
                        player.gain(result.target);
                    }
                },
                ai:{
                    effect:{
                        target:function (card, player, source, current) {
                            if (card.name == 'sha' && current < 0) return 0.7;
                        },
                    },
                },
            },
            sgws_xuandao:{
                audio:"MYxuandao",
                trigger:{
                    global:"shaBefore",
                },
                priority:5,
                filter:function (event, player) {
                    if (player == event.target || player == event.player) return false;
                    return get.distance(player, event.target) <= 1;
                },
                check:function (event, player) {
                    return get.attitude(player, event.target) >= 0;
                },
                content:function () {
                    "step 0"
                    trigger.target.judge(function(card) {
                        return (get.color(card) == 'black') ? 1.5 : -0.5
                    });
                    "step 1"
                    if (result.judge > 0) {
                        trigger.untrigger();
                        trigger.responded = true;
                        trigger.cancel();
                    } else {
                      trigger.target.draw(3);
                    }
                },
                group:["sgws_xuandao_1"],
                subSkill:{
                    "1":{
                        audio:"MYxuandao_1",
                        trigger:{
                            target:"shaBegin",
                        },
                        content:function () {
                            "step 0"
                            player.judge(function(card) {
                                return (get.color(card) == 'black') ? 1.5 : -0.5
                            });
                            "step 1"
                            if (result.judge > 0) {
                                trigger.untrigger();
                                trigger.responded = true;
                                trigger.cancel();
                            } else {
                                player.draw(3);
                            }
                        },
                        ai:{
                            threaten:0.7,
                        },
                        sub:true,
                    },
                },
            },
            sgws_zhishui:{
                audio:"MYzhishui",
                enable:"phaseUse",
                usable:1,
                filter:function (event, player) {
                    return player.countCards('he', {
                        type: 'equip'
                    });
                },
                filterCard:{
                    type:"equip",
                },
                position:"he",
                filterTarget:function (card, player, target) {
                    return target != player;
                },
                check:function (card) {
                    var player = _status.event.player;
                    if (game.hasPlayer(function(current) {
                            return get.attitude(player, current) > 2;
                        })) {
                        return 10 - get.value(card, player);
                    }
                    return 6 - get.value(card, player);
                },
                content:function () {
                    "step 0"
                    if (target.countCards('he')) {
                        player.discardPlayerCard('he', target, true);
                    }
                    'step 1'
                    var card = result.cards[0];
                    if (get.type(card) !== 'equip') {
                        player.draw(3);
                    }

                },
                ai:{
                    order:9,
                    result:{
                        player:function (player, target) {
                            return get.damageEffect(target, player, player);
                        },
                    },
                },
            },
            sgws_juqi:{
                audio:"sgws_juqi",
                trigger:{
                    player:"loseEnd",
                },
                frequent:true,
                filter:function (event, player) {
                    if (player == _status.currentPhase) return false;
                    for (var i = 0; i < event.cards.length; i++) {
                        if (event.cards[i].original && event.cards[i].original != 'j') return true;
                    }
                    return false;
                },
                content:function () {
                    "step 0"
                    player.judge(function(card) {
                        return 1;
                    }, ui.special).nogain = function(card) {
                        return true;
                    };
                    "step 1"
                    if (result.bool) {
                        result.card.goto(ui.special);
                        player.storage.sgws_juqi.push(result.card);
                        result.node.moveDelete(player);
                        game.broadcast(function(cardid, player) {
                            var node = lib.cardOL[cardid];
                            if (node) {
                                node.moveDelete(player);
                            }
                        }, result.node.cardid, player);
                        player.markSkill('sgws_juqi');
                    }
                },
                init:function (player) {
                    player.storage.sgws_juqi = [];
                },
                intro:{
                    content:"cards",
                },
                group:"sgws_juqi_dist",
                subSkill:{
                    dist:{
                        mod:{
                            globalFrom:function (from, to, distance) {
                                if (from.storage.sgws_juqi) return distance - from.storage.sgws_juqi
                                    .length;
                            },
                        },
                        sub:true,
                    },
                },
                locked:false,
                ai:{
                    effect:{
                        target:function (card, player, target, current) {
                            if (!target.hasFriend() && !player.hasUnknown()) return;
                            if (_status.currentPhase == target) return;
                            if (get.tag(card, 'loseCard') && target.countCards('he')) {
                                if (target.hasSkill('ziliang')) return 0.7;
                                return [0.5, Math.max(2, target.countCards('h'))];
                            }
                            if (target.isUnderControl(true, player)) {
                                if ((get.tag(card, 'respondSha') && target.countCards('h',
                                        'sha')) ||
                                    (get.tag(card, 'respondShan') && target.countCards('h', 'shan'))
                                ) {
                                    if (target.hasSkill('ziliang')) return 0.7;
                                    return [0.5, 1];
                                }
                            } else if (get.tag(card, 'respondSha') || get.tag(card,
                                    'respondShan')) {
                                if (get.attitude(player, target) > 0 && card.name == 'juedou')
                                    return;
                                if (get.tag(card, 'damage') && target.hasSkillTag('maixie')) return;
                                if (target.countCards('h') == 0) return 2;
                                if (target.hasSkill('ziliang')) return 0.7;
                                if (get.mode() == 'guozhan') return 0.5;
                                return [0.5, Math.max(target.countCards('h') / 4, target.countCards(
                                    'h', 'sha') + target.countCards('h', 'shan'))];
                            }
                        },
                    },
                    threaten:function (player, target) {
                        if (target.countCards('h') == 0) return 2;
                        return 0.5;
                    },
                    nodiscard:true,
                    nolose:true,
                },
            },
            sgws_qiren:{
                mod:{
                    cardUsable:function (card, player, num) {
                        if (card.name == 'sha') return player.storage.sgws_juqi.length + 2;
                    },
                },
                audio:"MYqiren",
                enable:"phaseUse",
                filter:function (event, player) {
                    return player.storage.sgws_juqi.length > 0;
                },
                chooseButton:{
                    dialog:function (event, player) {
                        return ui.create.dialog('气刃', player.storage.sgws_juqi, 'hidden');
                    },
                    backup:function (links, player) {
                        return {
                            filterCard: function() {
                                return false
                            },
                            selectCard: -1,
                            viewAs: {
                                name: 'sha'
                            },
                            cards: links,
                            onuse: function(result, player) {
                                result.cards = lib.skill[result.skill].cards;
                                var card = result.cards[0];
                                player.storage.sgws_juqi.remove(card);
                                player.syncStorage('sgws_juqi');
                                if (!player.storage.sgws_juqi.length) {
                                    player.unmarkSkill('sgws_juqi');
                                } else {
                                    player.markSkill('sgws_juqi');
                                }
                                player.logSkill('sgws_qiren', result.targets);
                            }
                        }
                    },
                    prompt:function (links, player) {
                        return '选择气刃的目标';
                    },
                },
                ai:{
                    order:3,
                    result:{
                        player:function (player) {
                            return player.storage.sgws_juqi.length - 1;
                        },
                    },
                },
            },
            sgws_feiyan:{
                audio:"MYfeiyan",
                trigger:{
                    global:"phaseJudgeBefore",
                },
                filter:function (event, player) {
                    return event.player.countCards('j') > 0 && event.player != player;
                },
                check:function (event, player) {
                    return get.attitude(player, event.player) <= 0;
                },
                content:function () {
                    player.useCard({
                        name: 'sha'
                    }, trigger.player);
                    if(trigger.player.isAlive())
                    player.useCard({
                        name: 'sha'
                    }, trigger.player);
                    if(trigger.player.isAlive())
                    player.useCard({
                        name: 'sha'
                    }, trigger.player);
                },
            },
            sgws_baixue:{
                audio:"MYbaixue",
                trigger:{
                    player:"phaseEnd",
                },
                frequent:true,
                content:function () {
                    player.draw(3);
                },
            },
            sgws_zhujian:{
                audio:"MYzhujian",
                enable:"phaseUse",
                usable:3,
                filterCard:function (card) {
                    return card.name == 'sha'
                },
                position:"h",
                viewAs:{
                    name:"wuzhong",
                    suit:"spade",
                    number:7,
                    cards:[{"node":{"image":{},"info":{},"name":{},"name2":{},"background":{},"intro":{},"range":{}},"storage":{},"vanishtag":[],"_uncheck":[],"suit":"spade","number":7,"name":"sha","cardid":"2686189252","_transform":"translateX(224px)","clone":{"name":"sha","suit":"spade","number":7,"node":{"name":{},"info":{},"intro":{},"background":{},"image":{}},"_transitionEnded":true,"timeout":363},"timeout":343,"original":"h"}],
                },
                prompt:"将一张杀当无中生有使用",
                ai:{
                    basic:{
                        order:function (skill, player) {
                            if (player.getStat().skill.sgws_zhujian >= 1) {
                                return 0;
                            }
                            return 9;
                        },
                        useful:4.5,
                        value:9.2,
                    },
                    result:{
                        player:function (player) {
                            if (player.countCards('h') < player.maxHp) return 1;
                        },
                        target:2,
                    },
                    tag:{
                        draw:2,
                    },
                },
            },
            sgws_zengqi:{
                trigger:{
                    player:["useCard"],
                },
                direct:true,
                filter:function (event, player) {
                    return event.skill == 'sgws_zhujian';
                },
                content:function () {
                    'step 0'
                    player.chooseTarget(get.prompt('sgws_zengqi'), function(card, player, target) {
                        return target != player;
                    }).set('ai', function(target) {
                        return get.attitude(_status.event.player, target);
                    });
                    'step 1'
                    if (result.bool) {
                        player.logSkill('sgws_zengqi', result.targets);
                        result.targets[0].draw(2);
                    }
                },
            },
            sgws_quanheng:{
                audio:"MYquanheng",
                trigger:{
                    source:"damageBegin",
                },
                filter:function (event, player) {
                    return get.color(event.card) == 'red';
                },
                forced:true,
                content:function () {
                    trigger.num+=2;
                },
                group:["sgws_quanheng_1"],
                subSkill:{
                    "1":{
                        trigger:{
                            player:"damageBefore",
                        },
                        forced:true,
                        filter:function (event, player) {
                            return get.color(event.card) == 'red';
                        },
                        content:function () {
                            trigger.cancel();
                        },
                        ai:{
                            effect:{
                                target:function (card, player) {
                                    if (card.name == 'sha' && get.color(card) == 'red')
                                        return 'zerotarget';
                                },
                            },
                        },
                        sub:true,
                    },
                },
            },
            sgws_jinwu:{
                audio:"MYjinwu",
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                content:function () {
                    'step 0'
                    player.chooseTarget('金乌：选择获得引导标记的目标', function(card, player, target) {
                        return !target.hasSkill('sgws_yindao');
                    }).set('ai', function(target) {
                        var player = _status.event.player;
                        if (get.attitude(player, target) > 0) {
                            return get.recoverEffect(target, player, player) + 1;
                        }
                        return 0;
                    });
                    'step 1'
                    if (result.bool) {
                        player.logSkill('sgws_jinwu', result.targets[0]);
                        result.targets[0].addSkill('sgws_yindao');
                    }

                },
                ai:{
                    maixie:true,
                    "maixie_hp":true,
                },
            },
            sgws_yindao:{
                audio:"MYyindao",
                forced:true,
                trigger:{
                    player:"shaBefore",
                },
                mark:true,
                intro:{
                    content:function (storage, player) {
                        return '首次使用的杀不可闪避，并且摸4张牌失去标记';
                    },
                },
                filter:function (event) {
                    return event.card && (event.card.name == 'sha')
                },
                content:function () {
                    trigger.directHit = true;
                    player.draw(4);
                    player.removeSkill('sgws_yindao');

                },
            },
            sgws_fenyan:{
                trigger:{
                    target:"useCardToBefore",
                },
                popup:false,
                direct:true,
                filter:function (event, player) {
                    if (event.addedTargets) return false;

                    return event.targets.length == 1 && event.player != player && player.countCards(
                        'he');
                },
                content:function () {
                    "step 0"
                    var next = player.chooseToDiscard(1,'he', '绯烟：是否弃置一张牌发动反弹？');
                    next.ai = function(card) {
                        if (get.effect(player, trigger.card) < 0) {
                            if (card.name == 'liuxinghuoyu') return 7 - get.value(card);
                            return 5 - get.value(card);
                        }
                        return 0;
                    };
                    next.prompt2 = '反弹' + get.translation(trigger.player) + '的' + get.translation(
                        trigger.card);
                    next.logSkill = ['sgws_fenyan', trigger.player];
                    "step 1"
                    if (result.bool) {
                        // player.discard(result.cards);
                        trigger.target = trigger.player;
                        trigger.player = player;
                        trigger.untrigger();
                        trigger.trigger('useCardToBefore');
                    }
                },
                ai:{
                    threaten:function (player, target) {
                        if (target.countCards('h') <= 0) {
                            return 2;
                        }
                        return 2 / (target.countCards('h') - 1);
                    },
                },
            },
            sgws_yakouwuyan:{
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
                    trigger.player.loseHp(2);      
                    player.draw(2);                                 
                },
            },
            sgws_duanbingchuqiao:{
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
                    player.removeAdditionalSkill('sgws_duanbingchuqiao');
                    var list=[];
                    if(player.countCards('e')>=4){
                        list.push('retieji');
                    }        
                    if(player.countCards('e')>=3){
                        list.push('sgws_leiji');
                    }
                    if(player.countCards('e')>=2){
                        list.push('sgws_duanliang');
                    }
                    if(player.countCards('e')>=1){
                        list.push('lyzyurong');
                    }
                    if(list.length){
                        player.addAdditionalSkill('sgws_duanbingchuqiao',list);
                    }
                },
                ai:{
                    threaten:1.4,
                    noautowuxie:true,
                },
            },
            sgws_duanliang1:{
				mod:{
					targetInRange:function(card,player,target){
						if(card.name=='bingliang'){
							if(target.countCards('h')<=player.countCards('h')) return true;
						}
					}
				}
			},
            sgws_duanliang:{
				audio:'duanliang1',
				group:['duanliang1','sgws_duanliang1'],
				ai:{
					threaten:1.2
				}
			},
            sgws_zhangshi:{
                mod:{
                    maxHandcard:function (player, num) {
                        return player.previous.hp + num+1;
                    },
                },
            },
            sgws_xinqiren:{
                audio:"MYxinqiren",
                trigger:{
                    source:"damageEnd",
                },
                check:function (event, player) {
                    var att = get.attitude(player, event.player);
                    if (event.player.hp > 0) return att <= 0;
                    return att > 0;

                },
                filter:function (trigger, player) {
                    return trigger.player.hp < player.hp && trigger.player.countCards('he');
                },
                content:function () {
                    player.discardPlayerCard(trigger.player.maxHp - trigger.player.hp+1, 'he', trigger
                        .player, true);
                },
            },
            sgws_shitong:{
                audio:"MYshitong",
                trigger:{
                    player:"damageEnd",
                },
                direct:true,
                content:function () {
                    player.gainMaxHp(2,true);
                },
            },
            sgws_fuxieshu:{
                trigger:{
                    source:"damageBefore",
                },
                audio:"MYfuxieshu",
                priority:16,
                check:function (event, player) {
                    var att = get.attitude(player, event.player);
                    if (event.player.hp > 0) return att <= 0;
                    return att > 0;

                },
                filter:function (event, player) {
                    return player.hp < player.maxHp;
                },
                content:function () {
                    trigger.cancel();
                    var ex = 0;
                    if (trigger.card && trigger.card.name == 'sha') {
                        if (player.hasSkill('jiu')) ex++;
                        if (player.hasSkill('luoyi2')) ex++;
                        if (player.hasSkill('reluoyi2')) ex++;
                    }
                    trigger.player.loseMaxHp(trigger.num + ex+1);
                    player.loseMaxHp(true);
                    player.recover(true);
                },
                ai:{
                    jueqing:true,
                },
            },
            "sgws_yitong": {
                audio:'yingzheng_yitong',
                mod: {
                    targetInRange: function(card) {
                        if (card.name == 'sha' || card.name == 'shunshou') return true;
                    },
                },
                trigger: {
                    player: 'useCard2',
                },
                forced: true,
                filter: function(event, player) {
                    if (!['shunshou', 'guohe', 'sha', 'huogong'].contains(event.card.name)) return false;
                    return game.hasPlayer(function(current) {
                        return current.isEnemiesOf(player) && !event.targets.contains(current) && player.canUse(event.card, current);
                    });
                },
                content: function() {
                    trigger.targets.addArray(game.filterPlayer(function(current) {
                        return current.isEnemiesOf(player) && !trigger.targets.contains(current) && player.canUse(trigger.card, current);
                    }));
                    player.line(trigger.targets);
                },
            },
            "sgws_zulong": {
                audio: 'yingzheng_zulong',
                trigger: {
                    player: "phaseBefore",
                },
                forced: true,
                content: function() {
                    var list = [];
                    var card1 = get.cardPile2(function(card) {
                        return card.name == 'sgws_zhenlongchangjian';
                    });
                    var card2 = get.cardPile2(function(card) {
                        return card.name == 'sgws_chuanguoyuxi';
                    });
                    if (card1 && !player.countCards('he', 'sgws_zhenlongchangjian')) {
                        list.push(card1);
                    }
                    if (card2 && !player.countCards('he', 'sgws_chuanguoyuxi')) {
                        list.push(card2);
                    }
                    if (list.length > 0) {
                        player.gain(list, 'gain2');
                    } else {
                        player.draw(2);
                    }
                },
            },
            "sgws_fenshu": {
                audio: 'yingzheng_fenshu',
                global:'sgws_fenshu_order',
                trigger: {
                    global: "useCard",
                },
                forced: true,
                filter: function(event, player) {
                    if (event.player == _status.currentPhase && event.player.isEnemiesOf(player)&& get.type(event.card) == 'trick') {
                        return event.player.getHistory('useCard', function(card) {
                            return get.type(card.card) == 'trick';
                        }).indexOf(event) == 0;
                    }
                    return false;
                },
                content: function() {
                    trigger.targets.length = 0;
                    trigger.all_excluded = true;
                },
                group: 'sgws_fenshu_order',
                subSkill: {
                    order: {
                        sub: true,
                        mod:{
                            aiOrder:function(player, card, num){
                                if(typeof card == 'object' && player == _status.currentPhase  && get.type(card) == 'trick' && player.getHistory('useCard', function(cardx) {
                                    return get.type(cardx.card) == 'trick';
                                }).length == 0){
                                    if(get.effect_use(player, card) < 0) return num + 10 - get.effect_use(player, card);
                                }
                            }
                        },
                    },
                },
            },
            sgws_yuzhi:{
                audio:"MYyuzhi",
                enable:"phaseUse",
                usable:3,
                filterTarget:function (card, player, target) {
                    if (player == target) return false;
                    return (target.countCards('h') || target.isUnseen(2));
                },
                content:function () {
                    "step 0"

                    player.chooseCardButton(target, target.getCards('h')).set('filterButton',
                        function(button) {
                            return get.suit(button.link) == 'diamond';
                        });
                    "step 1"

                    if (result.bool) {
                        event.card = result.links[0];
                        player.gain(event.card, target);
                        target.$give(event.card, player);
                    }

                },
                selectTarget:1,
                ai:{
                    threaten:1.5,
                    result:{
                        target:function (player, target) {
                            return -target.countCards('h');
                        },
                    },
                    order:10,
                    expose:0.4,
                },
            },
            sgws_zhouyin:{
                audio:"MYzhouyin",
                enable:"phaseUse",
                filterCard:function (card) {
                    return get.suit(card) == 'diamond';
                },
                filterTarget:function (card, player, target) {
                    return true;
                },
                position:"he",
                selectCard:2,
                content:function () {
                    target.turnOver();
                    player.draw(4);
                },
                ai:{
                    order:9,
                    result:{
                        target:function (player, target) {
                            if (target.hasSkillTag('noturn')) return 0;
                            if (target.isTurnedOver()) return 2;
                            return -0.5;
                        },
                    },
                },
            },
            sgws_qishu:{
                audio:"MYqishu",
                trigger:{
                    player:["useCard","respond"],
                },
                frequent:true,
                filter:function (event) {
                    return (get.type(event.card) == 'basic' && event.cards[0]);
                },
                content:function () {
                    var list = get.inpile('trick', 'trick');
                    var list2 = [];
                    for (var i = 0; i < 2; i++) {
                        list2.push(game.createCard(list.randomGet()));
                    }
                    player.gain(list2, 'draw');
                },
                ai:{
                    order:9.8,
                    threaten:1.8,
                    result:{
                        player:1,
                    },
                },
            },
            sgws_jiansuo:{
                audio:"MYjiansuo",
                trigger:{
                    player:"shaBegin",
                },
                check:function (event, player) {
                    return get.attitude(player, event.target) < 0;
                },
                logTarget:"target",
                content:function () {
                    var target = trigger.target;
                    if (!player.storage.sgws_jiansuo) {
                        player.storage.sgws_jiansuo = [];
                    }
                    for (var i = 0; i < player.storage.sgws_jiansuo.length; i++) {
                        if (!game.players.contains(player.storage.sgws_jiansuo[i])) {
                            player.storage.sgws_jiansuo.splice(i--, 1);
                        }
                    }
                    player.storage.sgws_jiansuo.remove(target);
                    player.storage.sgws_jiansuo.push(target);
                    if (player.storage.sgws_jiansuo.length > 2) {
                        player.storage.sgws_jiansuo.shift();
                    }
                    target.addTempSkill('fengyin', {
                        player: 'phaseAfter'
                    });
                    player.markSkill('sgws_jiansuo');

                },
                ai:{
                    expose:0.2,
                    threaten:1,
                },
                group:["sgws_jiansuo_1"],
                subSkill:{
                    "1":{
                        trigger:{
                            player:"shaMiss",
                        },
                        check:function (event, player) {
                            return get.attitude(player, event.target) < 0;
                        },
                        forced:true,
                        content:function () {
                            player.draw(2);
                        },
                        sub:true,
                    },
                },
            },
            sgws_yingwei:{
                mod:{
                    globalFrom:function (from, to, current) {
                        if (from.hp >= 2) return current - 1;
                    },
                },
                audio:"MYyingwei",
                enable:["chooseToRespond","chooseToUse"],
                filter:function (event, player) {
                    return player.countCards('h') <= 2;
                },
                filterCard:function (card) {
                    return get.color(card) == 'black';
                },
                viewAs:{
                    name:"shan",
                    suit:"spade",
                    number:9,
                },
                viewAsFilter:function (player) {
                    if (!player.countCards('h', {
                            color: 'black'
                        })) return false;
                },
                prompt:"将一张黑色手牌当闪打出",
                check:function () {
                    return 1
                },
                ai:{
                    save:true,
                    respondSha:true,
                    respondShan:true,
                    skillTagFilter:function (player) {
                        if (!player.countCards('h', {
                                color: 'black'
                            })) return false;
                    },
                    effect:{
                        target:function (card, player, target, current) {
                            if (get.tag(card, 'respondShan') && current < 0) return 0.6
                        },
                    },
                    basic:{
                        useful:[7,2],
                        value:[7,2],
                    },
                    result:{
                        player:1,
                    },
                    order:3,
                },
            },
            sgws_gaizhao: {
                audio: 'zhaogao_gaizhao',
                trigger: {
                    target: 'useCardToTarget'
                },
                direct: true,
                filter: function(event, player) {
                    if (get.info(event.card).multitarget) return false;
                    var type = get.type(event.card);
                    var name = get.name(event.card);
                    if (name != 'sha' && type != 'trick') return false;
                    return game.hasPlayer(function(current) {
                        return current != player && current.isFriendsOf(player) && !event.targets.contains(current);
                    });
                },
                content: function() {
                    'step 0'
                    player.chooseTarget(get.prompt(event.name), '将' + get.translation(trigger.card) + '转移给其他队友', function(card,
                            player, target) {
                            var trigger = _status.event.getTrigger();
                            return target.isFriendsOf(player) && !trigger.targets.contains(target) && lib.filter.targetEnabled2(trigger.card,
                                trigger.player, target);
                        }).set('rawEffect', get.effect(player, trigger.card, trigger.player, player))
                        .ai = function(target) {
                            var trigger = _status.event.getTrigger();
                            var rawEffect = _status.event.rawEffect;
                            var effectTarget = 0.1 + get.effect(target, trigger.card, trigger.player, _status.event.player);
                            return effectTarget - rawEffect;
                        };
                    'step 1'
                    if (result.bool) {
                        var target = result.targets[0];
                        player.logSkill(event.name, target);
                        trigger.targets[trigger.targets.indexOf(player)] = target;
                    }
                },
                ai: {
                    effect: {
                        target: function(card, player, target) {
                            if (get.attitude(player, target) > 0 || _status.gaizhaoEffect) return;
                            if (get.name(card) != 'sha' && get.type(card) != 'trick') return;
                            if (get.info(card).multitarget || get.info(card).selectTarget == -1) return;
                            var players = game.filterPlayer(function(current) {
                                return current != target && current.isFriendsOf(player);
                            });
                            if (!players.length) return;
                            _status.gaizhaoEffect = true;
                            for (var i = 0; i < players.length; i++) {
                                if (get.effect(players[i], card, player, player) <= 0) {
                                    delete _status.gaizhaoEffect;
                                    return 'zeroplayertarget';
                                }
                            }
                            delete _status.gaizhaoEffect;
                        }
                    },
                }
            },
            sgws_haizhong: {
                global: 'sgws_haizhong_debuff',
                audio: 'zhaogao_haizhong',
                intro: {
                    content: 'mark',
                },
                trigger: {
                    global: 'recoverAfter'
                },
                forced: true,
                filter: function(event, player) {
                    return event.player.isEnemiesOf(player) && event.player.isAlive();
                },
                logTarget: 'player',
                content: function() {
                    'step 0'
                    if (!trigger.player.storage[event.name]) trigger.player.storage[event.name] = 0;
                    trigger.player.storage[event.name]++;
                    event.num = Math.max(1, trigger.player.storage[event.name]);
                    trigger.player.markSkill(event.name);
                    if (_status.dying.length) return event.finish();
                    trigger.player.chooseToDiscard('he', '害忠：弃置一张红色牌，或受到' + event.num + '点伤害', {
                        color: 'red'
                    }).ai = function(card) {
                        var trigger = _status.event.getTrigger();
                        var value = get.value(card);
                        if(card.name == 'du' && trigger.player.hp <= 1) return -1;
                        if(10 - value < 0) return 0.5;
                        return 10 - value;
                    };
                    'step 1'
                    if (!result.bool) {
                        if (trigger.player.hp <= num) trigger.player.addTempSkill('sgws_haizhong_dying', 'damageAfter');
                        trigger.player.damage(num);
                    }
                },
                subSkill: {
                    dying: {
                        charlotte: true,
                        ai: {
                            effect: {
                                target: function(card, player, target) {
                                    if (get.tag(card, 'recover') && player != target) return 'zeroplayertarget';
                                },
                            },
                        },
                    },
                    debuff: {
                        ai: {
                            effect: {
                                player: function(card, player, target) {
                                    if (player.group == 'daqin' || !get.tag(card, 'recover') || target != player) return;
                                    if (get.name(card) == 'jiu' && !player.isDying()) return;
                                    if (!player.hasCard(function(otherCard) {
                                            return otherCard != card && get.color(otherCard) == 'red' && (get.value(card) < 10 || player.storage.sgws_haizhong >= player.hp);
                                        })) return 'zeroplayertarget';
                                },
                                target: function(card, player, target) {
                                    if (target.group == 'daqin' || !get.tag(card, 'recover') || player == target) return;
                                    if (!target.countCards('h')) return 'zeroplayertarget';
                                },
                            },
                        },
                    },
                }
            },
            sgws_zhuifenghujian:{
                audio:"MYzhuifenghujian",
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
                    player.chooseTarget(get.prompt('sgws_zhuifenghujian'),function(card,player,target){
                        if(target==trigger.target) return false;         
                        return lib.filter.targetEnabled({name:'sha'},player,target);
                    }).set('ai',function(target){
                        return get.effect(target,{name:'sha'},_status.event.player);
                    });
                    "step 1"
                    if(result.bool){
                        player.logSkill('sgws_zhuifenghujian');
                        player.useCard({name:'sha'},result.targets,false);
                        player.line(result.targets,'green');
                        player.gainPlayerCard(result.targets[0],'he',true,[1,2]);         
                    }
                },
                ai:{
                    threaten:function (player,target){
                        return 1.6;
                    },
                },
            },
            sgws_qijirufeng:{
                audio:"MYqijirufeng",
                trigger:{
                    target:"shaBefore",
                },
                filter:function (event,player){    
                    return get.color(event.card)=='red'||'black'; 
                },
                frequent:true,
                content:function (){
                    "step 0"
                    player.chooseTarget(get.prompt('sgws_qijirufeng'),function(card,player,target){
                        if(target==trigger.target) return false;         
                        return player!=target&&target.countCards('he')>0;
                    }).set('ai',function(target){
                        return -get.attitude(player,target);
                    });
                    "step 1"
                    if(result.bool){                   
                        player.line(result.targets,'green');
                        player.gainPlayerCard(result.targets[0],'he',true,[1,2]);         
                    }        
                },
                ai:{
                    threaten:function (player,target){
                        return 1.6;
                    },
                },
            },
            sgws_xinuaile:{
                group:["sgws_xi","sgws_nu","sgws_ai","sgws_le"],
            },
            sgws_ai:{
                trigger:{
                    player:"shaMiss",
                },
                check:function (event,player){
                    return get.attitude(player,event.target)<0;
                },
                content:function (){       
                    "step 0"
                    player.judge(function(card){return (get.color(card)=='red')?1.5:-0.5});
                    "step 1"
                    if(result.judge>0){
                    player.discardPlayerCard([1,2],'he',trigger.target,true);
                    }               
                },
            },
            sgws_le:{
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
                    var target=lib.skill.sgws_le.logTarget(trigger,player);
                    if(result.judge>0){
                    target.damage(2);
                    }                         
                },
            },
            sgws_xi:{
                trigger:{
                    source:"damageEnd",
                },
                filter:function (event,player){
                    return event.player!=player;
                },
                content:function (){
                    "step 0"
                    player.judge(function(card){return (get.color(card)=='red')?1.5:-0.5});
                    "step 1"
                    if(result.judge>0){
                    player.draw(2);
                    }  
                },
            },
            sgws_nu:{
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
                    trigger.source.turnOver();     
                },
            },
            sgws_junquan:{
                audio:"TXjunquan",
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
                group:["sgws_junquan_1"],
                subSkill:{
                    "1":{
                        mod:{
                            cardUsable:function (card,player,num){      
                     if(card.name=='sha') return (player.hp)+2;
                 },
                        },
                        sub:true,
                    },
                },
            },
            sgws_kongshan:{
                audio:"TXkongshan",
                enable:"phaseUse",
                usable:1,
                filterTarget:function (card,player,target){
                    return player!=target&&!target.hasSkill('sgws_kongshan_mark');
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
                    player.changeHujia(3);
                    target.addTempSkill('sgws_kongshan_mark',{player:'phaseAfter'});          
                },
                subSkill:{
                    mark:{
                        mark:true,
                        intro:{
                            content:"每当你使用一张非装备牌，弄玉摸3张牌，直到你回合结束",
                        },
                        sub:true,
                    },
                },
                ai:{
                    order:3,
                    result:{
                        target:1,
                    },
                    combo:"sgws_niaoyu",
                    threaten:1.4,
                },
            },
            sgws_niaoyu:{
                audio:"TXniaoyu",
                trigger:{
                    global:"useCard",
                },
                forced:true,
                filter:function (event,player){
                    return event.player!=player&&event.player.hasSkill('sgws_kongshan_mark')&&get.type(event.card)!='equip';
                },
                content:function (){
                    player.draw(3);
                    player.markSkill('sgws_niaoyu');
                },
                ai:{
                    combo:"sgws_kongshan",
                },
            },
            sgws_liwu:{
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
                    player.chooseTarget(get.prompt('sgws_liwu'),function(card,player,target){
                        return !target.isLinked();
                    }).set('autodelay',trigger.name=='respond'?0.5:1).ai=function(target){
                        return -get.attitude(player,target);
                    };
                    "step 1"
                    if(result.bool){
                    var target=result.targets[0]
                        player.logSkill('sgws_liwu',target);            
                        target.link();
                        player.discardPlayerCard(target,true,[1,3]);                 
                    }
                },
                ai:{
                    threaten:0.7,
                },
            },
            sgws_rouqing:{
                audio:"GSrouqing",
                trigger:{
                    player:"phaseBegin",
                },
                direct:true,
                content:function (){
                    "step 0"
                    player.chooseTarget(get.prompt('sgws_rouqing')).set('ai',function(target){
                        return get.attitude(_status.event.player,target);
                    });
                    "step 1"
                    if(result.bool){
                        event.target=result.targets[0];
                        player.logSkill('sgws_rouqing',result.targets);
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
                        case 'recover':event.target.recover(3);break;
                        case 'draw':event.target.draw(3);break;                           
                        case 'gainMaxHp':event.target.gainMaxHp(3);break;     
                    }
                },
                ai:{
                    expose:0.2,
                    threaten:1.2,
                },
            },
            sgws_lengyan:{
                trigger:{
                    player:"phaseUseAfter",
                },
                direct:true,
                filter:function (event,player){
                    return player.countCards('h');
                },
                content:function (){
                    'step 0'
                    player.chooseTarget(get.prompt('sgws_lengyan'),function(card,player,target){
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
                        player.logSkill('sgws_lengyan',result.targets);
                        event.target=result.targets[0];
                        player.chooseToCompare(event.target);
                    }
                    else{
                        event.finish();
                    }
                    'step 2'
                    if(result.bool){
                        target.loseHp(3);
                    }
                    else{
                        player.gainPlayerCard(target,'he',true,[1,3]);
                    }
                },
            },
            "sgws_yaoji":{
                group:"sgws_yaoji_recover",
                audio:"ark_yaoji",
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
                        case 'heart':player.recover(2);break;
                        case 'diamond':player.draw(3);break;
                        case 'club':trigger.player.chooseToDiscard(3,'he',true);break;
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
            "sgws_duyi":{
                enable:"phaseUse",
                audio:"ark_duyi",
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
                    return player.storage.sgws_duyi==false
                },
                content:function (){
                    'step 0'
                    player.awakenSkill('sgws_duyi');
                    player.storage.sgws_duyi=true
                    'step 1'
                    for(var i=0;i<3;i++){
                        player.useCard({name:'sha'},target)
                    }
                    'step 2'
                    if(target.isAlive()){
                        player.storage.sgws_duyi_eff_count=0
                        target.storage.sgws_duyi_eff_count=1
                        player.addSkill('sgws_duyi_eff')
                        target.addSkill('sgws_duyi_eff')
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
                                player.storage.sgws_duyi_eff_count++;
                                if(player.storage.sgws_duyi_eff_count>=2) player.removeSkill('sgws_duyi_eff')
                            };
                            if(trigger.name=='damage') trigger.num+=2
                        },
                        mod:{
                            cardUsable:function(card,player,num){
                                if(card.name=='sha') return num+1;
                            },
                        },
                        mark:true,
                        intro:{
                            content:function(storage,player,skill){
                                return '回合开始时回复一点体力，摸牌阶段多摸一张牌，出牌阶段可以多使用一张【杀】，使用【杀】造成的伤害+2'
                            },
                        },
                        sub:true,
                    },
                },
            },
            sgws_seyou:{
				skillAnimation:true,
				unique:true,
				mark:true,
				init:function(player){
					player.storage.sgws_seyou=false;
				},
				enable:'phaseUse',
				filter:function(event,player){
					return !player.storage.sgws_seyou
				},
				intro:{
					content:'limited'
				},
				filterTarget:true,
				content:function(){
					"step 0"
					player.awakenSkill('sgws_seyou');
					player.storage.sgws_seyou=true;
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
						player.gainPlayerCard(event.current,true,'he',[1,2]);
					}
					event.goto(1);
				},
				ai:{
					order:5,
					result:{
						target:function(player,target){
							var players=game.filterPlayer();
							if(player.hp>1){
								if(game.phaseNumber<game.players.length) return 0;
								for(var i=0;i<players.length;i++){
									if(players[i].ai.shown==0) return 0;
									if(players[i].sex=='unknown') return 0;
								}
							}
							var effect=0;
							for(var i=0;i<players.length;i++){
								if(players[i].sex=='male'&&players[i]!=target&&players[i]!=player&&players[i].countCards('he'))
								effect+=get.effect(target,{name:'sha'},players[i],target);
							}
							return effect;
						}
					}
				}
			},
            sgws_sheshi:{
				trigger:{player:'damageEnd'},
				direct:true,
				content:function(){
					"step 0"
					if(event.isMine()){
						event.dialog=ui.create.dialog(get.prompt('sgws_sheshi'));
					}
					if(ui.cardPile.childNodes.length<6){
						var discardcards=get.cards(6);
						for(var i=0;i<discardcards.length;i++){
							discardcards[i].discard();
						}
					}
					player.chooseControl('heart2','diamond2','club2','spade2','cancel').ai=function(event){
						if(Math.random()<0.5) return 'club2';
						if(Math.random()<0.5) return 'spade2';
						if(Math.random<2/3) return 'diamond2';
						return 'heart2';
					};
					"step 1"
					if(event.dialog){
						event.dialog.close();
					}
					if(result.control&&result.control.indexOf('2')!=-1){
						player.logSkill('sgws_sheshi');
						game.log(player,'指定的花色为'+get.translation(result.control));
						var suit=result.control.slice(0,result.control.length-1);
						var cards=[];
						for(var i=0;i<ui.cardPile.childNodes.length;i++){
							var card=ui.cardPile.childNodes[i];
							cards.push(card);
							if(get.suit(card)==suit||i>=5){
								break;
							}
						}
						event.cards=cards;
						event.suit=suit;
						player.showCards(cards);
					}
					else{
						event.finish();
					}
					"step 2"
					if(event.cards&&event.cards.length){
						if(get.suit(event.cards[event.cards.length-1])==event.suit){
							event.cards.pop().discard();
						}
						if(event.cards.length){
							player.gain(event.cards,'draw2');
						}
					}
				},
				ai:{
					maixie:true,
					maixie_hp:true,
					effect:{
						target:function(card,player,target){
							if(get.tag(card,'damage')){
								if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
								if(!target.hasFriend()) return;
								if(target.hp>=4) return [1,2];
								if(target.hp==3) return [1,1.5];
								if(target.hp==2) return [1,0.5];
							}
						}
					}
				}
			},
            "sgws_benye":{
                group:["sgws_benye_unequip","sgws_benye_after","sgws_benye_judge"],
                audio:"ark_benye",
                trigger:{
                    player:"shaMiss",
                    source:"damageSource",
                },
                filter:function(event,player){
                    if(player.hasSkill('sgws_benye_1')) return false;
                    if(event.name=='damage') return event.card&&event.card.name=='sha';
                    return true;
                },
                direct:true,
                content:function(){
                    'step 0'
                    if(trigger.name=='sha'){
                        player.chooseUseTarget('###是否发动【奔夜】？###视为对'+get.translation(trigger.target)+'使用1张【杀】',{name:'sha'},false,'nodistance',function(card,player,target){
                            var targetx=_status.event.targets
                            return target==targetx
                        }).set('logSkill',['sgws_benye',trigger.player]).set('targets',trigger.target).set('addCount',false)
                    }
                    else if(trigger.name=='damage'){
                        player.chooseBool('是否发动【奔夜】摸3张牌').set('ai',function(){
                            return true;
                        })
                    }
                    'step 1'
                    if(trigger.name=='damage'){
                        if(result.bool){
                            player.draw(3)
                            player.logSkill('sgws_benye')
                            player.addTempSkill('sgws_benye_1')
                        }
                    }
                },
                subSkill:{
                    "1":{
                        sub:true,
                    },
                    unequip:{
                        trigger:{
                            player:"useCardToPlayered",
                        },
                        forced:true,
                        init:function(player){
                            player.storage.sgws_benye_unequip=[];
                        },
                        filter:function(event,player){
                            return event.card&&event.card.name=='sha';
                        },
                        content:function(){
                            player.storage.sgws_benye_unequip.add(trigger.card);
                            player.logSkill('sgws_benye')
                        },
                        ai:{
                            unequip:true,
                            "unequip_ai":true,
                            skillTagFilter:function(player,tag,arg){
                                if(tag=='unequip'){
                                    if(arg&&player.storage.sgws_benye_unequip.contains(arg.card)) return true;
                                    return false;
                                }
                                var card=arg.target.getEquip(2);
                                if(card&&card.name.indexOf('bagua')!=-1) return true;
                                if(player._sgws_benye_ai) return false;
                            },
                        },
                        sub:true,
                    },
                    after:{
                        trigger:{
                            player:"useCardAfter",
                        },
                        forced:true,
                        popup:false,
                        silent:true,
                        content:function(){
                            player.storage.sgws_benye_unequip.remove(trigger.card);
                        },
                        sub:true,
                    },
                    judge:{
                        trigger:{
                            player:"damageBegin3",
                        },
                        popup:false,
                        forced:true,
                        content:function(){
                            'step 0'
                            player.logSkill('sgws_benye')
                            player.judge(function(card){
                                return get.suit(card)=='heart'?1:0
                            });
                            'step 1'
                            if(result.bool){
                                trigger.num--;
                            }
                        },
                        sub:true,
                    },
                },
            },
            "sgws_jueyingamiya":{
                audio:"ark_jueyingamiya",
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
                    player.awakenSkill('sgws_jueyingamiya');
                    event.count=player.maxHp;
                    player.storage.sgws_jueyingamiya_target=target
                    'step 1'
                    event.count--;
                    if(player.countCards('he')>0||player.storage.sgws_jueyingamiya_target.countCards('he')>0){
                        player.chooseTarget(1,true,'绝影：请弃置一名角色一张牌',function(card,player,target){
                            var player=_status.event.player;
                            var targetx=_status.event.targetx;
                            return target==targetx||target==player;
                        }).set('ai',function(target){
                            var player=_status.event.player;
                            var targetx=_status.event.targetx;
                            return -get.attitude(player,targetx)
                        }).set('targetx',player.storage.sgws_jueyingamiya_target);   
                    }
                    else event.finish()
                    'step 2'
                    if(result.targets){
                        event.targets=result.targets[0]
                        player.discardPlayerCard('he',event.targets,1,true)
                    }
                    else event.finish()
                    'step 3'
                    var num=player.countCards('h')-player.storage.sgws_jueyingamiya_target.countCards('h')
                    if(num<=3&&num>=-3&&lib.filter.targetEnabled2({name:'sha'},player,player.storage.sgws_jueyingamiya_target)){
                        player.chooseUseTarget('绝影：视为对'+get.translation(player.storage.sgws_jueyingamiya_target)+'使用一张【杀】',{name:'sha'},true,'nodistance',function(card,player,target){
                            var targetx=_status.event.targets
                            return target==targetx
                        }).set('targets',player.storage.sgws_jueyingamiya_target).set('addCount',false)
                    }
                    'step 4'
                    if(!player.storage.sgws_jueyingamiya_target.isAlive()){
                        if(!player.storage.sgws_jueyingamiya_damage) player.storage.sgws_jueyingamiya_damage=0
                        player.storage.sgws_jueyingamiya_damage++
                        player.chooseTarget(1,function(card,player,target){
                            var player=_status.event.player;
                            if(player.countCards('he')==0) return target.countCards('he')>0&&lib.filter.targetEnabled2({name:'sha'},player,target);
                            return lib.filter.targetEnabled2({name:'sha'},player,target)
                        })
                    }
                    else event.goto(6)
                    'step 5'
                    if(result.targets){
                        player.storage.sgws_jueyingamiya_target=result.targets[0];
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
                    order:3,
                    result:{
                        target:function(player,target){
                            var eff=get.effect(target,{name:"sha"},player)
                            return eff*player.hp
                        },
                    },
                    threaten:3,
                },
            },
            "sgws_gonggan":{
                group:["sgws_gonggan_exchange"],
                audio:"ark_gonggan",
                trigger:{
                    source:"damageSource",
                },
                frequent:true,
                notemp:true,
                init:function(player){
                    if(!player.storage.sgws_gonggan) player.storage.sgws_gonggan=[];
                },
                filter:function(event){
                    return event.num>0;
                },
                content:function(){
                    'step 0'
                    player.draw(3)
                    'step 1'
                    if(player.countCards('h')){
                        player.chooseCard('共感：你可以将一张手牌置于你的角色牌上',true);
                    }
                    else event.finish()
                    'step 2'
                    if(result.cards&&result.cards.length){
                        player.lose(result.cards,ui.special,'toStorage');
                        player.storage.sgws_gonggan=player.storage.sgws_gonggan.concat(result.cards);
                        player.syncStorage('sgws_gonggan');
                        player.markSkill('sgws_gonggan');
                        game.log(player,'将',result.cards,'置于武将牌上作为“共感”牌');
                    }
                    if(player.storage.sgws_gonggan.length>player.maxHp){
                        var num=player.storage.sgws_gonggan.length-player.maxHp;
                        player.chooseCardButton(player.storage.sgws_gonggan,'选择弃置'+num+'张“共感”牌',num,true).ai=function(button){
                            var val=get.value(button.link);
                            return -val;
                        };
                    }
                    else event.finish()
                    'step 3'
                    if(result.links){
                        for(var i=0;i<result.links.length;i++){
                            player.storage.sgws_gonggan.remove(result.links[i]);
                        }
                        game.cardsDiscard(result.links);
                        player.$throw(result.links);
                        game.log(player,'将',result.links,'置入了弃牌堆')
                        player.syncStorage('sgws_gonggan');
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
                            return player.storage.sgws_gonggan&&player.storage.sgws_gonggan.length>0&&player.countCards('h')>0;
                        },
                        content:function(){
                            "step 0"
                            var cards=player.getStorage("sgws_gonggan");
                            var next=player.chooseToMove('共感：是否交换“共感”和手牌？');
                            next.set('list',[['共感牌',cards],['手牌区',player.getCards('h')],]);
                            next.set('filterMove',function(from,to){
                                return typeof to!='number';
                            });
                            next.set('processAI',function(list){
                                var player=_status.event.player,cards=list[0][1].concat(list[1][1]).sort(function(a,b){
                                    return get.useful(a)-get.useful(b);
                                }),cards2=cards.splice(0,player.storage.sgws_gonggan.length);
                                return [cards2,cards];
                            });
                            "step 1"
                            if(result.bool){
                                var pushs=result.moved[0],gains=result.moved[1];
                                            pushs.removeArray(player.storage.sgws_gonggan);
                                            gains.removeArray(player.getCards('h'));
                                            if(!pushs.length||pushs.length!=gains.length) return;
                                            player.lose(pushs,ui.special,'toStorage');
                                            player.gain(gains,'fromStorage');
                                            player.storage.sgws_gonggan.addArray(pushs);
                                            player.storage.sgws_gonggan.removeArray(gains);
                                            player.markSkill('sgws_gonggan');
                                        }
                        },
                        sub:true,
                    },
                },
            },
            "sgws_kongxin":{
                audio:"sgws_kongxin",
                trigger:{
                    player:"useCard2",
                },
                direct:true,
                filter:function(event,player){
                    if(!player.storage.sgws_gonggan) return false;
                    var type=get.type(event.card);
                    return (type=='basic'||type=='trick')&&player.storage.sgws_gonggan.length>0;
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
                        player.logSkill('sgws_kongxin',result.targets);
                        var card=result.targets[0].getCards('h').randomGet();
                        event.type=get.type(card);
                        player.showCards(card);
                    }
                    else event.finish();
                    'step 2'
                    if(event.type=='basic'){
                        player.chooseCardButton(player.storage.sgws_gonggan,'控心：你可以选择获得1张牌作为手牌',1).ai=function(button){
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
                        player.chooseCardButton(player.storage.sgws_gonggan,'控心：你可以弃置任意张“共感”牌并令等量的其他角色不可响应'+get.translation(trigger.card),[1,num]).ai=function(button){
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
                            player.storage.sgws_gonggan.remove(result.links[i]);
                        }
                        player.syncStorage('sgws_gonggan');
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
                        player.syncStorage('sgws_gonggan');
                        if(player==game.me&&_status.auto){
                            game.delay(0.5);
                        }
                        for(var i=0;i<result.links.length;i++){
                            player.storage.sgws_gonggan.remove(result.links[i]);
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
                            player.chooseCardButton(player.storage.sgws_gonggan,'控心：你需要交给'+get.translation(event.target)+'一张牌',1,true).set('ai',function(button){
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
                            player.storage.sgws_gonggan.remove(result.links[i]);
                        }
                        player.syncStorage('sgws_gonggan');
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
                        player.chooseCardButton(player.storage.sgws_gonggan,'控心：你需要交给'+get.translation(event.targets)+'一张牌',1,true).set('ai',function(button){
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
                            player.storage.sgws_gonggan.remove(result.links[i]);
                        }
                        player.syncStorage('sgws_gonggan');
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
            "sgws_shubao":{
                audio:"ark_shubao",
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                unique:true,
                limited:true,
                skillAnimation:true,
                animationColor:"thunder",
                filter:function(event,player){
                    if(player.storage.sgws_shubao) return false;
                    return true;
                },
                check:function(event,player){
                    if(event.player.identity=='zhu'||event.player.identity=='nei') return false;
                    if(event.player.countCards('h',{name:'sha'})>1) return true;
                    return false;
                },
                content:function(){
                    'step 0'
                    player.awakenSkill('sgws_shubao');
                    player.storage.sgws_shubao=true;
                    player.disableJudge();
                    player.gainMaxHp(2)
                    player.recover(2)
                    'step 1'
                    var num=player.maxHp-player.countCards('h')
                    if(num>0) player.draw(num)
                    player.addSkill('sgws_shubao1');
                    player.markSkill('sgws_shubao1');
                },
                ai:{
                    threaten:3,
                },
                mark:true,
                init:function(player){
                    player.storage.sgws_shubao=false;
                },
                intro:{
                    content:"limited",
                },
            },
            "sgws_shubao1":{
                subSkill:{
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
                    content:"使用牌无次数限制，无视距离，使用【杀】造成的伤害+1，摸牌阶段多摸一张牌",
                },
                group:["sgws_shubao1_4"],
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
            "sgws_chixiao":{
                audio:"XS_chixiao",
                trigger:{
                   player:"shaMiss",
               },
               direct:true,
               filter:function (event,player){
                   return player.countCards('he')&&event.target.isAlive();
               },
               content:function (){
                   "step 0"
                   var next=player.chooseToDiscard(get.prompt2('sgws_chixiao'),[1,player.countCards('he')],'he');
                   next.logSkill='sgws_chixiao';
                   next.set('ai',function(card){
                       var evt=_status.event.getParent();
                       if(get.attitude(evt.player,evt._trigger.target)<0){
                           if(evt.player.hasSkill('jiu')||
                           evt.player.hasSkill('tianxianjiu')||
                           evt._trigger.target.hp==1){
                               return 6-get.value(card)
                           }
                           return 4-get.value(card)
                       }
                       return -1;
                   });
                   "step 1"
                   if(result.bool){
                       var num1=result.cards.length+2;
                       trigger.target.chooseToDiscard('弃置'+num1+'张牌，否则'+get.translation(player)+'使用的'+get.translation(trigger.card)+'将仍对你生效','he',num1).set('ai',function(card){
                           var tri=_status.event.getTrigger();
                           if(tri.player.hasSkill('jiu')||
                           tri.player.hasSkill('tianxianjiu')||
                           tri.target.hp==1){
                               return 6-get.value(card)
                           }
                           return -1;
                       });
                   }
                   else event.finish();
                   "step 2"
                   if(!result.bool){
                       trigger.untrigger();
                       trigger.trigger('shaHit');
                       trigger._result.bool=false;
                   }
               },
               ai:{
                   expose:0.3,
               },
           },
           "sgws_hanni":{
                audio:"XS_hanni",
                trigger:{
                    player:"phaseUseBefore",
                },
                check:function (event,player){
                    if(player.getEquip(2)) return true;
                    if(player.hasSkill('XS_mantianskill')||player.hasSkill('XS_tiandao_yang')) return true;
                    return (player.countCards('h','shan')>1&&player.hasUsableCard('sha'))||player.hasUsableCard('nanman')||player.hasUsableCard('wanjian');
                },
                content:function (){
                    game.countPlayer(function(current){
                        current.chooseUseTarget({name:'jiu',isCard:true},true,'noTargetDelay','nodelayx');
                    });
                },
                group:["sgws_hanni_jiu"],
                subSkill:{
                    jiu:{
                        trigger:{
                            source:"damageEnd",
                        },
                        filter:function (event){
                            return event.player.hasSkill('jiu')&&event.player.countCards('he');
                        },
                        forced:true,
                        content:function (){
                            "step 0"
                            var pla=trigger.player;
                            game.broadcastAll(function(pla){
                                pla.removeSkill('jiu');
                            },pla);
                            if(pla.node.jiu){
                                pla.node.jiu.delete();
                                pla.node.jiu2.delete();
                                delete pla.node.jiu;
                                delete pla.node.jiu2;
                            }
                            delete pla.storage.jiu;
                            "step 1"
                            player.gainPlayerCard('he',trigger.player,[1,2]);
                        },
                        sub:true,
                    },
                },
            },
            sgws_xiandao:{
                audio:"yjxiandao",
				trigger:{player:'_yongjian_zengyuEnd'},
				usable:1,
				forced:true,
				locked:false,
				filter:function(event,player){
					return !event._zengyu_denied&&event.target.isIn();
				},
				logTarget:'target',
				content:function(){
					'step 0'
					event.target=trigger.target;
					event.card=trigger.cards[0];
					event.target.markAuto('sgws_xiandao',[get.suit(event.card,false)])
					event.target.addTempSkill('sgws_xiandao_block');
					'step 1'
					var type=get.type(card,false);
					if(type=='trick') player.draw(3);
					if(type=='equip'){
						if(target.countGainableCards(player,'he',function(cardx){
							return cardx!=card;
						})>0) player.gainPlayerCard(target,'he',true,[1,2]).set('card',card).set('filterButton',function(button){
							return button.link!=_status.event.card;
						});
						if(get.subtype(card,false)=='equip1') target.damage(2);
					}
				},
				subSkill:{
					block:{
						charlotte:true,
						onremove:true,
						mod:{
							cardEnabled:function(card,player){
								if(player.getStorage('sgws_xiandao_block').contains(get.suit(card))) return false;
							},
							cardRespondable:function(card,player){
								if(player.getStorage('sgws_xiandao_block').contains(get.suit(card))) return false;
							},
							cardSavable:function(card,player){
								if(player.getStorage('sgws_xiandao_block').contains(get.suit(card))) return false;
							},
						},
						mark:true,
						intro:{content:'不能使用或打出$牌'},
					},
				},
			},
			sgws_sancai:{
                audio:'yjsancai',
				enable:'phaseUse',
				usable:1,
				filter:function(event,player){
					return player.countCards('h')>0;
				},
				content:function(){
					'step 0'
					player.showHandcards();
					var hs=player.getCards('h');
					'step 1'
					player.chooseCardTarget({
						prompt:'是否赠予一张手牌？',
						filterCard:true,
						filterTarget:lib.filter.notMe,
					});
					'step 2'
					if(result.bool){
						player.line(result.targets[0],'green');
						var next=game.createEvent('_yongjian_zengyu');
						next.player=player;
						next.target=result.targets[0];
						next.cards=result.cards;
						next.setContent(lib.skill._yongjian_zengyu.content);
					}
				},
			},
            sgws_quantui:{
                audio:"miniquantui",
                group:'sgws_quantui_remove',
                market:'学',
                intro:{content:'mark',name:'劝学',name2:'学'},
                trigger:{player:'phaseUseBegin'},
                direct:true,
                content:function(){
                'step 0'
                player.chooseTarget(get.prompt2('sgws_quantui'),[1,2],lib.filter.notMe).set('ai',function(target){
                return !target.hasMark('sgws_quantui')&&-get.attitude(player,target);
                });
                'step 1'
                if(result.bool){
                result.targets.sortBySeat();
                player.logSkill('sgws_quantui',result.targets);
                for(var i of result.targets) i.addMark('sgws_quantui',1);
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
                    return event.player.hasMark('sgws_quantui');
                    },
                    forced:true,
                    logTarget:'player',
                    content:function(){
                    'step 0'
                    trigger.player.removeMark('sgws_quantui',trigger.player.countMark('sgws_quantui'));
                    _status.event.player=trigger.player;
                    _status.event.trigger('BuXueLe');//劳资不学啦！[doge]
                    'step 1'
                    trigger.player.chooseControl().set('choiceList',[
                    '本回合不能对其他角色使用牌',
                    '失去2点体力',
                    ]).set('ai',function(){
                    if((trigger.player.countCards('h')<trigger.player.getHandcardLimit())||trigger.player.hp<=2) return 0;
                    return 1;
                    });
                    'step 2'
                    if(result.index==0) trigger.player.addTempSkill('sgws_quantui_block');
                    else trigger.player.loseHp(2);
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
            sgws_dingli:{
                audio:"minidingli",
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
                if(trigger.player.hp>=player.hp) player.recover(2);
                else player.draw(player.hp-trigger.player.hp+1);
                },
                ai:{combo:'sgws_quantui'},
            },
            sgws_roulin:{
				audio:"roulin",
				trigger:{target:'useCardToTargeted'},
				forced:true,
				filter:function(event,player){
					if(event.card.name!='sha') return false;
					if(player==event.player){
						return event.target.hasSex('female');
					}
					return event.player.hasSex('female');
				},
				check:function(event,player){
					return player==event.player;
				},
				content:function(){
					var id=(player==trigger.player?trigger.target:player).playerid;
					var map=trigger.getParent().customArgs;
					if(!map[id]) map[id]={};
					if(typeof map[id].shanRequired=='number'){
						map[id].shanRequired++;
					}
					else{
						map[id].shanRequired=2;
					}
				},
				ai:{
					directHit_ai:true,
					skillTagFilter:function(player,tag,arg){
						if(arg.card.name!='sha'||!arg.target.hasSex('female')||arg.target.countCards('h','shan')>1) return false;
					},
				},
			},
        },
        translate:{
            sgws_roulin:'肉林',
            sgws_roulin_info:'锁定技。你对女性角色使用【杀】时，都需连续使用两张【闪】才能抵消。',
            sgws_quantui:'劝学',
            sgws_quantui_info:'出牌阶段开始时，你可令至多两名其他角色各获得一个“学”；有“学”的角色回合开始时移除“学”并选择：① 出牌阶段不能对其他角色使用牌；②失去2点体力。',
            sgws_dingli:'鼎立',
            sgws_dingli_info:'每轮限一次，其他角色移除“学”时，如果其体力值不小于你，你可以回复2点体力；如果其体力值小于你，你可以摸X+1张牌（X为其与你体力值之差）。',
            sgws_xiandao:'献刀',
			sgws_xiandao_info:'每回合限一次。当你对其他角色发动〖赠予〗后，你令其不能使用或打出与本次赠予移动的牌A花色相同的牌直到回合结束。然后若牌A：为锦囊牌，你摸两张牌。为装备牌，你获得其一张不为A的牌。为武器牌，你对其造成1点伤害。',
			sgws_sancai:'散财',
			sgws_sancai_info:'出牌阶段限一次，你可以展示所有手牌。然后你可以发动一次〖赠予〗（可以选择任意手牌）。',
            "sgws_chixiao":"鸱枭",
            "sgws_chixiao_info":"你的杀被闪避后，可弃置至少1张牌，令目标角色选择1项：1.弃置X+2张牌；2.令此杀仍生效。X为你以此法弃置的牌数。",
            "sgws_hanni":"酣溺",
            "sgws_hanni_info":"出牌阶段开始时，你可令所有角色均视为使用1张酒；当你对酒状态的角色造成伤害后，解除其酒状态，并可获得其1-2张牌。",
            "sgws_gonggan":"共感",
            "sgws_gonggan_info":"你造成伤害后，你可以摸3张牌，然后将一张手牌置于你的武将牌上（可替换，最多拥有X张）；你的出牌阶段开始时和回合结束时，你可以用你的手牌替换任意张“共感”牌（X为你的体力上限）",       
            "sgws_kongxin":"控心",
            "sgws_kongxin_info":"当你使用基本牌或普通锦囊牌时，你可以展示一名其他角色的一张牌，若此牌为：①基本牌，你可以获得一张“共感”牌；②锦囊牌，你可以为此牌增加或减少一个目标并交给其一张“共感”牌；③装备牌，你可以弃置任意张共感牌并令等量的角色不可响应此牌。",
            "sgws_shubao":"术爆",
            "sgws_shubao_info":"准备阶段开始时，你可以废除你的判定区，增加2点体力上限并回复2点体力，将手牌补至体力上限，获得效果：你使用牌无次数限制，无视距离，摸牌阶段多摸一张牌，使用【杀】造成的伤害+1",
            "sgws_shubao1":"术爆",
            "sgws_benye":"奔夜",
            "sgws_benye_info":"锁定技，你使用杀无视防具；锁定技，你受到伤害时进行一次判定，若判定牌为红桃，此伤害-1；当你使用杀造成伤害/被闪避后，你可以摸3张牌/视为对其使用一张【杀】并使本回合内不可再使用【奔夜】。",
            "sgws_jueyingamiya":"绝影",
            "sgws_jueyingamiya_info":"限定技，出牌阶段，你可以选择一名角色，你弃置你或其一张牌，若你与其的手牌差不超过3，你视为对其使用一张杀，然后你可以重复此流程（最多重复X次，X为你的体力上限），若该角色死亡，你造成的伤害+1直到回合结束，然后你可以再选择一名角色并令重复次数+1",
            "sgws_gaizhao": '改诏',
            "sgws_gaizhao_info": '当你成为【杀】或普通锦囊牌的目标后（借刀杀人除外），若场上有其他友方角色存活，你可以将此牌的目标改为其他不是该牌目标的友方角色。',
            "sgws_haizhong": '害忠',
            "sgws_haizhong_info": '锁定技，敌方角色回复体力后，该角色获得一个“害”标记。然后若场上没有处于濒死阶段的角色，其需要选择：1.弃置一张红色牌，2.受到你造成的X点伤害（X为该角色拥有的“害”标记）。',
            sgws_seyou:'色诱',
			sgws_seyou_info:'限定技，出牌阶段，你可以指定任意1名角色，其他所有角色需选择1项执行：（1）对你指定的角色出【杀】；（2）令你获得其1-2张牌。',
			sgws_sheshi:'蛇噬',
			sgws_sheshi_info:'每受到1次伤害，可以指定1种花色，依次展示牌堆顶的牌，直到出现指定花色的牌为止，你获得与指定花色不同花色的所有牌（最多展示6张牌）。',
            "sgws_yaoji":"药剂",
            "sgws_yaoji_info":"当你使用非虚拟杀造成伤害后，你可以进行一次判定，若结果为：①红桃：你回复2点体力；②方片：你摸3张牌；③梅花：其弃置3张牌；④黑桃：其翻面。你回复一点体力时可以摸一张牌",
            "sgws_duyi":"毒医",
            "sgws_duyi_info":"限定技，出牌阶段，你可以视为对一名角色使用3张【杀】；然后若其存活，你和其获得效果：回合开始时回复一点体力，摸牌阶段多摸一张牌，出牌阶段可以多使用一张【杀】，使用【杀】造成的伤害+2。若其死亡，你失去两点体力。",
            sgws_lengyan:"冷艳",
            "sgws_lengyan_info":"回合结束，你可以与一名其他角色拼点，若你赢，令其失去3点体力，若你没赢，获得其1-3张牌。",
            sgws_rouqing:"柔情",
            "sgws_rouqing_info":"准备阶段，你可以令一名角色摸一张并展示之，根据牌的类型执行效果：装备牌其立即装备之并摸3张牌，锦囊牌其增加3点体力上限，基本牌其回复3点体力。",
            sgws_liwu:"丽舞",
            "sgws_liwu_info":"每当你使用或打出一张牌，你可以选择一名未横置的角色，令其武将牌横置并弃置其1-3张牌。",
            sgws_kongshan:"空山",
            "sgws_kongshan_info":"出牌阶段限一次，你可以将所有手牌交给一名其他角色，若如此做，你获得3点护甲，该角色获得\"空山\"标记到其回合结束。",
            sgws_niaoyu:"鸟语",
            "sgws_niaoyu_info":"锁定技，拥有“空山”标记的角色，每使用一张非装备牌，你摸3张牌。",
            sgws_junquan:"军权",
            "sgws_junquan_info":"锁定技，其他角色使用的杀，你获得之；你可以额外使用X张杀(X为你的体力值加2)。",
            sgws_xinuaile:"喜怒哀乐",
            "sgws_xinuaile_info":"<br><font color=#F0F>喜</font> ：当你对其他角色造成伤害后，你可以进行一次判定，若结果为红色，你摸2张牌。<br> <font color=#F0F>怒</font> ：当你受到伤害后，你可以令伤害来源武将牌翻面。<br> <font color=#F0F>哀</font> ：当你的杀被闪避后，你可以进行一次判定，若结果为红色，你弃置目标1-2张牌。<br> <font color=#F0F>乐</font> ：当其他角色触发你使用或打出闪后，你可以进行一次判定，若结果为红色，你对其造成2点伤害。",
            sgws_ai:"哀",
            "sgws_ai_info":"当你的杀被闪避后，你可以进行一次判定，若结果为红色，你弃置目标1-2张牌。",
            sgws_le:"乐",
            "sgws_le_info":"当其他角色触发你使用或打出闪后，你可以进行一次判定，若结果为红色，你对其造成2点伤害。",
            sgws_xi:"喜",
            "sgws_xi_info":"当你对其他角色造成伤害后，你可以进行一次判定，若结果为红色，你摸2张牌。",
            sgws_nu:"怒",
            "sgws_nu_info":"当你受到伤害后，你可以令伤害来源武将牌翻面。",
            sgws_zhuifenghujian:"追风弧箭",
            "sgws_zhuifenghujian_info":"当你使用的杀被闪避后，你可以视为对另一名角色使用一张无视距离的杀，如此循环，直到此杀造成伤害，然后获得以此技能选择过的每名目标的1-2张牌。",
            sgws_qijirufeng:"其疾如风",
            "sgws_qijirufeng_info":"当你成为杀的目标后，你可以获得一名其他角色的1-2张牌。",
            sgws_yingwei:"影卫",
            "sgws_yingwei_info":"锁定技，若你的手牌数不大于2，你可以将一张黑色手牌当[闪]使用或打出；若你的体力值不小于2，你的进攻距离+1。",
            sgws_jiansuo:"剑锁",
            "sgws_jiansuo_info":"当你使用杀指定目标时，你可以令目标非锁定技失效直到其下一回合结束；若目标闪避了你使用的杀，你摸2张牌。",
            sgws_qishu:"奇术",
            "sgws_qishu_info":"每当你使用或打出一张基本牌，你随机获得2张锦囊牌。",
            sgws_zhouyin:"咒印",
            "sgws_zhouyin_info":"出牌阶段，你可以弃置手牌区或装备区两张方块牌，令一名角色武将牌翻面，然后你摸4张牌。",
            sgws_yuzhi:"预知",
            "sgws_yuzhi_info":"出牌阶段限3次，你可以观看一名角色的手牌，然后你可以获得其中一张方块手牌。",
            "sgws_zulong": "祖龙",
            "sgws_zulong_info": "锁定技，回合开始时，若牌堆里：有【传国玉玺】或【真龙长剑】，且不在你的手牌区或装备区，你获得之；没有，你摸2张牌。",
            "sgws_fenshu": "焚书",
            "sgws_fenshu_info": "锁定技，敌方角色使用普通锦囊牌时，若此牌是其本回合使用的第一张普通锦囊牌，则你取消此牌的所有目标。",
            "sgws_yitong": "一统",
			"sgws_yitong_info": "锁定技，当你使用【杀】、【过河拆桥】、【顺手牵羊】、【火攻】时，你令所有不为此牌目标的敌方角色也成为此牌的目标。你使用【杀】和【顺手牵羊】无距离限制。",
            sgws_shitong:"噬痛",
            "sgws_shitong_info":"每当你受到一点伤害后，加2点体力上限。",
            sgws_fuxieshu:"蝠血术",
            "sgws_fuxieshu_info":"当你的体力值未满时，对一名其他角色造成伤害后，你可以令该角色减2点体力上限，然后你减一点上限，回复一点体力。",
            "sgws_shenyi":"神裔",
            "sgws_shenyi_info":"锁定技，你的武将牌始终正面向上，你的判定区内的除闪电，浮雷以外的牌效果反转",
            "sgws_juechenjinge":"绝尘金戈",
            "sgws_juechenjinge_info":"锁定技，敌方角色计算与己方其他角色距离+1",
            "sgws_shangyangbianfa_dying":"商鞅变法",
            "sgws_shangyangbianfa_dying_info":"造成随机1~3点伤害，若该角色进入濒死状态，则进行判定，若判定结果为黑色，则该角色本次濒死状态无法向其他角色求桃。",
            "sgws_jiaoxie":"缴械",
            "sgws_jiaoxie_info":"出牌阶段限一次，你可令敌方交给你一张牌。",
            "sgws_tuxi":"突袭",
            "sgws_tuxi_info":"摸牌阶段摸牌时，你可以少摸X张牌，然后获得X+1名角色的各一张手牌。",
            "sgws_zhiti":"止啼",
            "sgws_zhiti_info":"锁定技，你攻击范围内已受伤的敌方角色的手牌上限-1。若场上存活的角色数：不小于1，你的手牌上限+1；不小于3，你于摸牌阶段开始时令额定摸牌数+1；不小于5，回合结束时，你废除一名角色的一个随机装备栏。",
            "sgws_weifeng":"威风",
            "sgws_weifeng2":"威风",
            "sgws_weifeng3":"威风",
            "sgws_weifeng_info":"锁定技，当你于出牌阶段内使用第一张伤害性基本牌或普通锦囊牌后，你令此牌的一名没有“惧”的其他目标角色获得一枚名称为此牌牌名的“惧”。有“惧”的角色受到伤害时，其移去“惧”，然后若造成伤害的牌名称和“惧”：相同，此伤害+2；不同，你获得该角色的1-2张牌。准备阶段开始时或你死亡时，你移去场上的所有“惧”。",
            "sgws_mubing":"募兵",
            "sgws_mubing_info":"出牌阶段开始时，你可以展示牌堆顶的五张牌。你可弃置任意张手牌，并可获得任意张点数之和不大于你弃置的牌点数之和的牌。然后你可将以此法获得的牌以任意方式交给其他角色。",
            "sgws_ziqu":"资取",
            "sgws_ziqu_info":"每名角色限一次，当你对有牌的其他角色造成伤害后，其将其点数最大的牌交给你。",
            "sgws_wuan":"武安",
            "sgws_wuan_info":"锁定技，你存活时，所有己方角色使用【杀】的上限+1。每回合限一次，你使用【杀】造成伤害时，你摸两张牌且此伤害+1。",
            "sgws_qiangzheng":"强征",
            "sgws_qiangzheng_info":"锁定技，结束阶段，你获得每个敌方角色的一张手牌",
            "sgws_juece":"绝策",
            "sgws_juece_info":"结束阶段，你可以对一名本回合内失去过牌的角色造成2点伤害。",
            "sgws_meiyong":"姝勇",
            "sgws_meiyong_info":"当你使用或打出【杀】时，你可以获得一名其他角色的1-3张牌，然后其摸一张牌。每当你的红色牌指定目标后，该目标随机弃置一张手牌",
            "sgws_dangxian":"当先",
            "sgws_dangxian_info":"锁定技，回合开始时，从牌堆或弃牌堆中随机获得两张【杀】并进行一个额外的出牌阶段。",
            "sgws_wuniang":"武娘",
            "sgws_wuniang_info":"每回合限一次，当你于回合内使用的【杀】结算完成后，若此【杀】对应的目标数为1，则你可以令目标角色选择是否对你使用使用【杀】。你于其选择结算完成后摸三张牌，且本回合内使用【杀】的次数上限+1。",
            "sgws_zhennan":"镇南",
            "sgws_zhennan1":"镇南",
            "sgws_zhennan_info":"当有角色使用普通锦囊牌指定目标后，若此牌目标数大于1，你可以对一名其他角色造成3点伤害。【南蛮入侵】，【万箭齐发】，【火攻】对你无效。出牌阶段限一次，你可以将任意张手牌当做【南蛮入侵】对等量的角色使用。",
            "sgws_fenghuo":"烽火",
            "sgws_fenghuo_remove":"烽火",
            "sgws_fenghuo_info":"你可以将一张装备区内的牌当作南蛮入侵使用,当你使用【南蛮入侵】选择目标后，你可以为此牌减少1-2个目标。",
            "sgws_zuoming":"佐命",
            "sgws_zuoming_info":"1，限定技，出牌阶段，你可以选择角色A失去武将牌上的一个技能，并使角色B获得该技能，然后你获得技能〖望重〗。A减少1点体力上限，B获得1点体力上限。",
            "sgws_wangzhong":"望重",
            "sgws_wangzhong1":"望重",
            "sgws_wangzhong_info":"当A(因〖佐命〗选择技能的角色)受到伤害后，你与A摸伤害量+1张牌；当B(因〖佐命〗获得技能的角色)造成伤害后，你与B摸伤害量+1张牌。",
            "sgws_wangzhong1_info":"当任意角色失去体力后，你可以令一名角色摸两张牌",
            "sgws_mashu":"马术",
            "sgws_mashu_info":"锁定技，你计算与其他角色的距离时-2。",
            "sgws_nuzhan":"怒斩",
            "sgws_nuzhan_info":"锁定技，你使用的由一张非基本牌转化的【杀】伤害值基数+1",
            "sgws_wuhun":"武魂",
            "sgws_wuhun_info":"锁定技，你使用红色【杀】无距离和次数限制且不可被响应。",
            "sgws_wushen":"武神",
            "sgws_wushen_info":"1,你可以将一张红色牌当做火【杀】使用或打出。2,你使用的♥【杀】伤害+1。3,每回合你使用的第一张【杀】被目标角色使用的【闪】抵消时，你摸一张牌且可以对其使用一张【杀】。4,当你使用火【杀】造成伤害后，你摸一张牌。5,每当你的红色牌指定目标后，该目标随机弃置一张手牌",
            "sgws_zhongyi":"忠义",
            "sgws_zhongyi1":"忠义",
            "sgws_zhongyi_info":"1,锁定技，其他角色获得你的手牌后，若你的手牌数小于X(X为你的体力值)，你将手牌摸至X张，该角色不能使用或打出牌且非锁定技失效直到回合结束；2出牌阶段限一次，你可以将一张手牌交给一名其他角色。3,回合开始前选择发动。发动后清空判定区的延时锦囊牌，之后自己摸一张牌。",
            "sgws_zhanjiang":"斩将",
            "sgws_zhanjiang_info":"锁定技，当你击杀一名角色后，本回合使用【杀】的次数+1并复原〖忠义〗。",
            "sgws_qijun":"七军",
            "sgws_qijun_info":"锁定技：①所有其他敌方角色的手牌上限-X(X为该角色装备区中的装备数量)；②每当其他敌方角色使用或失去一张装备牌，该角色弃置一张手牌。",
            "sgws_gangyi":"刚毅",
            "sgws_gangyi_info":"当一名角色受到伤害时，若伤害来源不是你，且你在伤害来源的攻击范围内，你可以代替成为受伤目标，然后摸X张牌或弃置伤害来源X张牌(X为伤害量+1)。",
            "sgws_yixiong":"义兄",
            "sgws_yixiong_info":"每当你使用或打出一张基本牌，你可以令一名角色摸两张牌。",
            "sgws_luanji":"乱击",
            "sgws_luanji_info":"你可以将两张花色相同的手牌当做【万箭齐发】使用。当你使用【万箭齐发】选择目标后，你可以为此牌减少一到两个目标。",
            "sgws_luanji_remove":"乱击",
            "sgws_xingdong":"行动",
            "sgws_xingdong_info":"出牌阶段限一次，你可以将一张【杀】或普通锦囊牌交给一名其他角色，然后该角色选择一项：对除你以外的角色使用此牌并在此牌结算完成后和你各摸两张牌；或跳过下回合的判定阶段和摸牌阶段。",
            "sgws_tianxing":"天行",
            "sgws_tianxing_info":"觉醒技，准备阶段，你选择获得以下技能中的一个：〖仁德〗/〖制衡〗/〖乱击〗/〖行动〗",
            "sgws_guixin":"归心",
            "sgws_guixin_info":"当你受到1点伤害后，你可以获得每名其他角色区域里的一张牌",
            "sgws_xiongcai":"雄才",
            "sgws_xiongcai_info":"锁定技，你在回合结束后随机获得一个魏势力角色的所有技能",
            "sgws_guixin1":"归心",
            "sgws_guixin1_info":"锁定技，其他敌方角色摸牌时，若摸牌数不少于2，须将摸到的牌中的一张交给你",
            "sgws_huo":"祸",
            "sgws_huoshi":"祸始",
            "sgws_huoshi_info":"锁定技。本局游戏中，只要队友造成或受到伤害，其获得X个【祸】标记。有【祸】的角色，每次造成伤害，伤害量加Y。（X为造成伤害的数值，Y为【祸】的数值）",
            "sgws_huoa":"祸",
            "sgws_qiangxi":"强袭",
            "sgws_qiangxi_info":"出牌阶段对每名其他角色限一次，你可以选择一项：1. 失去一点体力并对你攻击范围内的一名其他角色造成两点伤害；2. 弃置一张武器牌并对你攻击范围内的一名其他角色造成两点伤害。",
            "sgws_huangen":"皇恩",
            "sgws_huangen_info":"一名角色使用锦囊牌指定目标时，若此牌的目标数大于1，则你可以令此牌对其中的至多X个目标无效，然后摸两张牌。（X为你的体力值）",
            "sgws_tianming":"天命",
            "sgws_tianming_info":"当你成为【杀】的目标时，你可以弃置两张牌（不足则全弃，无牌则不弃），然后摸三张牌；若此时全场体力值最多的角色仅有一名且不是你，该角色也可以如此做，但只能摸两张牌。",
            "sgws_moukui":"谋溃",
            "sgws_moukui2":"谋溃",
            "sgws_moukui_info":"当你使用【杀】指定目标后，你可以选择一项：摸两张牌，或弃置其一到两张牌。若如此做，当此【杀】被【闪】抵消时，目标角色弃置你的一张牌。 ",
            "sgws_benghuai":"崩坏",
            "sgws_benghuai_info":"结束阶段，若你的体力不是全场最少的(或之一)，你须减两点体力或体力上限。",
            "sgws_anzhao":"暗诏",
            "sgws_anzhao_info":"一回合一次。可以将一张手牌交给一名角色，自己选择一项效果发动：1、该角色摸Y张牌，获得【谋溃】直至其回合结束。2、该角色弃X张牌，获得【崩坏】直至其回合结束。(X为目标体力值，Y为目标已损失体力值)",
            "sgws_zhaolie":"昭烈",
            "sgws_zhaolie_info":"摸牌阶段摸牌时，你可以少摸一张牌并指定攻击范围内的一名角色。你展示牌堆顶的四张牌，将其中的非基本牌和【桃】置于弃牌堆，然后该角色选择一项：1.你对其造成X点伤害，然后其获得这些基本牌；2.其弃置X张牌，然后你获得这些基本牌。（X为其中非基本牌的数量）",
            "sgws_xiaoxiong":"枭雄",
            "sgws_xiaoxiong_info":"锁定技，每当一名其他角色使用一张基本牌或锦囊牌，你获得一张与之同名的牌；在一名敌方角色的结束阶段，若其本回合没有使用牌，你对其造成一点伤害",
            "sgws_xiansi":"陷嗣",
            "sgws_xiansi_bg":"逆",
            "sgws_xiansi2":"陷嗣",
            "sgws_xiansi_info":"准备阶段开始时，你可以将一至三名角色的各一张牌置于你的武将牌上，称为“逆”；当一名角色需要对你使用【杀】时，其可以移去三张“逆”，然后视为对你使用了一张【杀】。",
            "sgws_zishou":"自守",
            "sgws_zishou_zhiheng":"自守",
            "sgws_zishou_info":"摸牌阶段，你可以多摸X(X为场上势力数)张牌。结束阶段，你可以弃置任意张花色不同的手牌，然后摸等量的牌。",
            "sgws_zongshi":"宗室",
            "sgws_zongshi1":"宗室",
            "sgws_zongshi_info":"锁定技，你的手牌上限+X（X为势力数+1）。准备阶段，若你的手牌数大于体力值，则你本回合内使用【杀】无次数限制。你的回合外，若你的手牌数大于等于体力值，则当你成为延时类锦囊牌或无颜色的牌的目标后，你令此牌对你无效。",
            "sgws_jijiu":"急救",
            "sgws_jijiu_info":"你的回合外，你可以将一张牌当做【桃】使用。",
            "sgws_qingnang":"青囊",
            "sgws_qingnang_info":"出牌阶段，你可以弃置一张手牌，令一名本回合内未成为过〖青囊〗的目标的角色回复一点体力。",
            "sgws_chulao":"除疠",
            "sgws_chulao_info":"出牌阶段限两次，若你有牌，你可以选择任意名势力各不相同的其他角色，你弃置你和这些角色的各一张牌。然后以此法弃置黑桃牌的角色各摸一张牌。",
            "sgws_guizhen":"归真",
            "sgws_guizhen_info":"每当你失去最后一张手牌，你可以所有敌人失去全部手牌，没有手牌的角色失去一点体力（不触发技能）",
            "sgws_zongkui":"纵傀",
            "sgws_zongkui_mark":"纵傀",
            "sgws_zongkui_mark_bg":"傀",
            "sgws_zongkui_info":"回合开始时，你可以指定一到三名未拥有“傀”标记的其他角色，令其获得一枚“傀”标记。每轮游戏开始时，你指定一到三名体力值最少且没有“傀”标记的其他角色，令其获得一枚“傀”标记。",
            "sgws_guju":"骨疽",
            "sgws_guju_info":"锁定技，拥有“傀”标记的角色受到伤害后，你摸三张牌。",
            "sgws_bingzhao":"秉诏",
            "sgws_bingzhao_info":"主公技，游戏开始时，你选择一个其他势力。当你对该势力的角色发动〖骨疽〗时，其可令你额外摸一张牌。",
            "sgws_canshi":"蚕食",
            "sgws_canshi_info":"一名角色使用基本牌或普通锦囊牌指定你为唯一目标时，若其有“傀”标记，你可以取消之，然后其失去“傀”标记；你使用牌仅指定一名角色为目标时，你可以额外指定任意名带有“傀”标记的角色为目标（无距离限制），然后这些角色失去“傀”标记。",
            "sgws_fankui":"反馈",
            "sgws_fankui_info":"每当你受到1点伤害后，你可以获得伤害来源的一到两张牌。",
            "sgws_jizhi":"集智",
            "sgws_jizhi_info":"当你使用锦囊牌时，你可以摸三张牌。若其中有基本牌，则你可以弃置其中的基本牌，然后令本回合手牌上限+弃置的基本牌数量。",
            "sgws_buchen":"不臣",
            "sgws_buchen_info":"隐匿技，你于其他角色的回合登场时，可获得当前回合角色的一到两张牌。",
            "sgws_yingshi":"鹰视",
            "sgws_yingshi_info":"锁定技，出牌阶段，你可观看牌堆顶的X张牌（X为你的体力上限+1）。",
            "sgws_quanbian":"权变",
            "sgws_quanbian_info":"出牌阶段，每当你首次使用/打出一种花色的手牌时，你可以从牌堆顶的X张牌中获得一张与此牌花色不同的牌，并将其余牌以任意顺序置于牌堆顶。（X为你的体力上限）",
            "sgws_konghun":"控魂",
            "sgws_konghun_info":"出牌阶段开始时，若你已损失体力值不小于敌方角色数，你可以对所有敌方角色各造成1点雷电伤害，然后你恢复X点体力（X为受到伤害的角色数）",
            "sgws_langgu":"狼顾",
            "sgws_langgu_rewrite":"狼顾",
            "sgws_langgu_info":"当你受到有来源的伤害后，你可以进行判定（此判定结果生效前，你可以打出一张手牌替换判定牌）。然后你可以观看伤害来源的手牌并弃置其中的任意张与判定结果颜色相同的牌。",
            "sgws_tuishi":"推弑",
            "sgws_tuishi_info":"隐匿技，你于其他角色A的回合内登场时，可于此回合结束时选择其攻击范围内的一名角色B。A选择一项：①对B使用一张【杀】。②你对A造成两点伤害。",
            "sgws_choufa":"筹伐",
            "sgws_choufa_info":"出牌阶段限两次，你可展示一名其他角色的一张手牌A。你令其所有类型与A不同的手牌的牌名均视为【杀】且均视为无属性，直到其回合结束。",
            "sgws_zhaoran":"昭然",
            "sgws_zhaoran2":"昭然",
            "sgws_zhaoran_info":"出牌阶段开始时，你可令你的手牌对其他角色可见直到出牌阶段结束。若如此做，当你于此阶段内失去一张手牌后，若你的手牌里没有与此牌花色相同的牌且你本回合内未因该花色的牌触发过此效果，则你选择一项：①摸两张牌。②弃置一名其他角色的一到两张牌。",
            "sgws_daigong":"怠攻",
            "sgws_daigong_info":"每回合限两次。当你受到伤害时，你可以展示所有手牌，然后令伤害来源选择一项：交给你一张与你所有手牌花色均不相同的一张牌，或防止此伤害。",
            "sgws_zhaoxin":"昭心",
            "sgws_zhaoxin_info":"出牌阶段限一次，你可以将任意张手牌置于武将牌上并摸等量的牌，称之为「望」（你至多拥有四张「望」）。你或你攻击范围内的一名其他角色的摸牌阶段结束后，其可以获得一张由你选择的「望」，然后你可以对其造成1点伤害。",
            "sgws_liyu":"利驭",
            "sgws_liyu_info":"当你使用【杀】对一名其他角色造成伤害后，你可以获得其一张牌。若此牌不为装备牌，则其摸一张牌。",
            "sgws_wuqian":"无前",
            "sgws_wuqian_info":"出牌阶段，你可以选择一名本回合内未选择过的其他角色，你令其防具无效直到回合结束。",
            "sgws_shenfen":"神愤",
            "sgws_shenfen_info":"出牌阶段限一次，你可以选择所有其他角色，对这些角色各造成1点伤害。然后这些角色先各弃置其装备区里的牌，再各弃置四张手牌。",
            "sgws_jingjia":"精甲",
            "sgws_jingjia_info":"锁定技，游戏开始时，将装备随机置入你的装备区。",
            "sgws_xuanfeng":"旋风",
            "sgws_xuanfeng_info":"当你于弃牌阶段弃置过至少两张牌，或当你失去装备区里的牌后，若场上没有处于濒死状态的角色，则你可以弃置至多两名其他角色的共计两张牌。若此时处于你的回合内，你可以对其中一名目标角色造成两点伤害。",
            "sgws_jiwu":"极武",
            "sgws_jiwu_info":"出牌阶段，你可以弃置一张牌，然后获得一项：“强袭”、“铁骑”、“旋风”、“完杀”，直到回合结束",
            "sgws_botu":"博图",
            "sgws_botu_info":"回合结束时，若你本回合出牌阶段内使用的牌大于等于三种花色，则你可以进行一个额外回合。",
            "sgws_qianxun":"谦逊",
            "sgws_qianxun_info":"锁定技，你不能成为【顺手牵羊】,【乐不思蜀】和【兵粮寸断】的目标。",
            "sgws_jiang":"激昂",
            "sgws_jiang_info":"每当你使用（指定目标后）或被使用（成为目标后）一张【决斗】或红色的【杀】时，你可以摸两张牌。",
            "sgws_tanhu":"探虎",
            "sgws_tanhu2":"探虎",
            "sgws_tanhu3":"探虎",
            "sgws_tanhu_info":"出牌阶段限两次，你可以与一名其他角色拼点。若你赢，你获得以下效果直到回合结束：你与该角色的距离为1，你对该角色使用的普通锦囊牌不能被【无懈可击】响应。",
            "sgws_ganlu":"甘露",
            "sgws_ganlu_info":"出牌阶段限两次，你可以选择两名角色，令其交换装备区内的牌。",
            "sgws_buyi":"补益",
            "sgws_buyi_info":"当有角色进入濒死状态时，你可以展示该角色的一张手牌：该角色弃置此牌并回复两点体力",
            "sgws_buqu":"不屈",
            "sgws_buqu_bg":"创",
            "sgws_buqu_info":"锁定技，当你处于濒死状态时，你亮出牌堆顶的一张牌并置于你的武将牌上，称之为“创”。若此牌的点数与你武将牌上已有的“创”点数均不同，则你回复至2体力。若点数相同，则将此牌置入弃牌堆。只要你的武将牌上有“创”，你的手牌上限便与“创”的数量相等。",
            "sgws_fenji":"奋激",
            "sgws_fenji_info":"当一名角色的手牌被其他角色弃置或获得后，你可以失去1点体力，然后令该角色摸三张牌。",
            "sgws_fanjian":"反间",
            "sgws_fanjian_info":"出牌阶段限两次，你可以展示一张手牌并将此牌交给一名其他角色。然后该角色选择一项：展示其手牌并弃置所有与此牌花色相同的牌，或失去一点体力。",
            "sgws_qinyin":"琴音",
            "sgws_qinyin_info":"弃牌阶段结束时，若你于此阶段内弃置过两张或更多的牌，则你可以选择一项：1. 令所有角色各回复两点体力；2. 令所有角色各失去两点体力。",
            "sgws_yeyan":"业炎",
            "sgws_yeyan_info":"出牌阶段开始时，你可以对一名其他角色造成2点火焰伤害。",
            "sgws_honglian":"红莲",
            "sgws_honglian_info":"锁定技，结束阶段，你摸两张牌，并对所有敌人造成一点火焰伤害",
            "sgws_liuli":"流离",
            "sgws_liuli_info":"当你成为【杀】的目标时，你可以弃置一张牌并将此【杀】转移给一名其他角色。",
            "sgws_yanxiao":"言笑",
            "sgws_yanxiao_info":"出牌阶段，你可以将一张非梅花牌置于一名角色的判定区内。判定区内有〖言笑〗牌的角色下个判定阶段开始时，其获得判定区里的所有牌。",
            "sgws_anxian":"安娴",
            "sgws_anxian_info":"当你使用【杀】对目标角色造成伤害时，你可以令其弃置一张手牌，然后你摸两张牌。",
            "sgws_tianxiang":"天香",
            "sgws_tianxiang_info":"当你受到伤害时，你可以弃置一张红桃牌，防止此伤害并选择一名其他角色，然后你选择一项：1.令其受到伤害来源对其造成的1点伤害，然后摸X张牌（X为其已损失体力值+2）；2.令其失去3点体力，然后获得你弃置的牌。",
            "sgws_xingwu":"星舞",
            "sgws_xingwu_info":"弃牌阶段开始时，你可以将一张牌置于武将牌上，称为“舞”。然后你可以选择一项：①将三张“舞”置入弃牌堆；②弃置两张手牌并将武将牌翻面。若如此做，你选择一名角色，该角色弃置其装备区的所有牌并受到4点伤害（若为女性，则改为3点）。",
            "sgws_tiaoxin":"挑衅",
            "sgws_tiaoxin_info":"出牌阶段限一次，你可以选择一名其他角色。然后除非该角色对你使用一张【杀】且此【杀】对你造成伤害，否则你弃置其一张牌，然后将此技能于此出牌阶段内修改为出牌阶段限两次。 ",
            "sgws_kunfen":"困奋",
            "sgws_kunfen_info":"结束阶段开始时，你失去1点体力，然后摸三张牌。",
            "sgws_lirang":"礼让",
            "sgws_lirang_info":"①其他角色的摸牌阶段开始时，若你没有“谦”标记，则你可以获得一枚“谦”标记。若如此做，其额定摸牌数+2，且本回合的弃牌阶段开始时，你可以获得其弃置的至多两张牌。②摸牌阶段开始时，若你有“谦”标记，则你移除“谦”标记。",
            "sgws_mingshi":"名仕",
            "sgws_mingshi_info":"锁定技，当你受到伤害后，伤害来源弃置两张牌。若只有一张牌，你获得之，若两张牌皆为红色，你回复两点体力。否则，你获得之。",
            "sgws_kuizhu":"溃诛",
            "sgws_kuizhu_info":"弃牌阶段结束后，你可以选择一项：①令至多X名角色各摸两张牌。②对任意名体力值之和为X的角色造成两点伤害。（X为你此阶段弃置的牌数）",
            "sgws_zhizheng":"掣政",
            "sgws_zhizheng_info":"锁定技，出牌阶段结束时，若你本阶段内使用的牌数小于这些角色的数量，则你弃置攻击范围内不包含你的一名角色的一张牌。",
            "sgws_yinghun":"英魂",
            "sgws_yinghun_info":"准备阶段开始时，你可令一名其他角色执行一项：摸X张牌，然后弃置一张牌；或摸一张牌，然后弃置X张牌（X为你已损失的体力值+1，若你装备区里牌的数量不小于你的体力值，则X改为你的体力上限）",
            "sgws_yingba":"英霸",
            "sgws_yingba_info":"①出牌阶段限一次，你可令一名体力上限大于1的其他角色减少1点体力上限并获得“平定”标记。②你对拥有“平定”标记的角色使用牌没有次数限制。",
            "sgws_fuhai":"覆海",
            "sgws_fuhai_info":"锁定技。①当你使用牌指定目标后，若目标角色有“平定”标记，则其不可响应此牌。②当你使用牌结算结束后，你移除所有目标角色的“平定”标记并增加等量的体力上限。③拥有“平定”标记的角色死亡时，你增加X点体力上限并摸X张牌。（X为其拥有的“平定”标记数）。",
            "sgws_pinghe":"冯河",
            "sgws_pinghe_info":"当你受到其他角色造成的伤害时，若你的手牌数大于X，则你可以防止此伤害，减少X点体力值上限并将X张手牌交给一名其他角色（X为伤害值）。然后若你拥有〖英霸〗，则伤害来源获得X个“平定”标记。",
            "sgws_meibu":"魅步",
            "sgws_meibu_info":"其他角色的出牌阶段开始时，你可以弃置一张牌A，该角色于本阶段内拥有〖止息〗，且当其因〖止息〗弃置与牌A颜色相同的牌时，你获得之。",
            "sgws_mumu":"穆穆",
            "sgws_mumu_info":"出牌阶段开始时，你可以选择一项：1.弃置一名其他角色装备区里的一张牌，然后你本回合可使用【杀】的次数+3；2.获得一名角色装备区里的一张牌，然后你本回合可使用【杀】的次数+1。",
            "sgws_hongyan":"红颜",
            "sgws_hongyan_info":"锁定技，你的非梅花牌和非梅花判定牌的花色视为♥。一名角色的判定结果生效前，若判定结果为♥，则你将其改为一种花色。若你的装备区内有红桃牌，则你的手牌上限基数视为体力上限+2。",
            "sgws_piaoling":"飘零",
            "sgws_piaoling_info":"准备阶段和结束阶段，你可以进行判定。若判定结果为红桃，则你选择一项：1.将此牌交给一名角色。2.将此牌置于牌堆顶。",
            "sgws_jishe":"极奢",
            "sgws_jishe_info":"出牌阶段限20次，若你的手牌上限大于0，你可以摸两张牌，然后你本回合的手牌上限-1。结束阶段开始时，若你没有手牌，则你可以横置至多X名角色的武将牌（X为你的体力值）",
            "sgws_huashen":"化身",
            "sgws_huashen_info":"游戏开始后，你随机获得三张未加入游戏的武将牌，选一张置于你面前并声明该武将牌的一项技能，你拥有该技能且同时将性别和势力属性变成与该武将相同直到该化身被替换。你的每个准备阶段和结束后，你可以选择一项：①弃置至多两张未展示的化身牌并重新获得等量化身牌；②更换所展示的化身牌或技能。（你不可声明限定技、觉醒技、隐匿技、使命技、主公技等特殊技能）。",
            "sgws_xinsheng":"新生",
            "sgws_xinsheng_info":"当你受到1点伤害后，你可以获得一张新的化身牌。",
            "sgws_lianhuan":"连环",
            "sgws_lianhuan_info":" 你可以将一张♣牌当【铁索连环】使用或重铸。你使用【铁索连环】选择目标的上限数+2。",
            "sgws_huoji":"火计",
            "sgws_bazhen":"八阵",
            "sgws_huoji_info":"出牌阶段，你可以将你的任意一张牌当作【火攻】使用。",
            "sgws_bazhen_info":"锁定技，若你的防具栏内没有牌且没有被废除，则你视为装备着【奇门八卦】。",
            "sgws_niepan":"涅槃",
            "sgws_niepan_info":"限定技，当你处于濒死状态时，你可以弃置你区域内的所有牌并复原你的武将牌，然后摸4张牌并将体力回复至3点。然后你选择获得以下技能中的一个：〖八阵〗/〖火计〗/〖看破〗",
            "sgws_guolun":"过论",
            "sgws_guolun_info":"出牌阶段限一次，你可以展示一名其他角色的手牌，然后展示你的一张牌。你与其交换这两张牌，然后展示的牌点数较小的角色摸两张牌。",
            "sgws_zhanji":"展骥",
            "sgws_zhanji_info":"锁定技，你的出牌阶段内，当你因摸牌且不是因为此技能效果而获得牌时，你额外摸两张牌。",
            "sgws_youlong":"游龙",
            "sgws_youlong_info":"转换技，阴，每轮限一次，你可以视为使用一张未以此法使用过的普通锦囊牌；阳，每轮限一次，你可以视为使用一张未以此法使用过的基本牌。",
            "sgws_luanfeng":"鸾凤",
            "sgws_luanfeng_info":"限定技，一名角色进入濒死状态时，你可令其回复至3点体力，恢复其被废除的装备栏，令其手牌补至6-X张（X为以此法恢复的装备栏数量）。若该角色是你，重置你因“游龙”使用过的牌名。",      
            "sgws_lulve":"掳掠",
            "sgws_lulve_info":"出牌阶段限一次，你可以弃置X张牌并选择一名装备区内有牌的其他角色，然后对其造成两点伤害（X为其装备区内的牌数）。",
            "sgws_lveming":"掠命",
            "sgws_lveming_info":"出牌阶段限一次，你可以选择一名装备区装备比你少的角色，令其选择一个点数，然后你进行判定：<br>若点数相同，你对其造成3点伤害；<br>若点数不同，则你随机获得其区域内的两张牌。",
            "sgws_tunjun":"屯军",
            "sgws_tunjun_info":"限定技，出牌阶段，你可以选择一名角色，令其随机使用牌堆中的X张装备牌。(X为你发动过“掠命”的次数+1)",
            "sgws_leiji":"雷击",
            "sgws_leiji_misa":"雷击",
            "sgws_guidao":"鬼道",
            "sgws_leiji_info":"①当你使用或打出【闪】或【闪电】时，你可以进行判定。②当你的判定的判定牌生效后，若结果为：黑桃，你可对一名其他角色造成3点雷电伤害；梅花：你回复1点体力并可对一名其他其他角色造成两点雷电伤害。",
            "sgws_guidao_info":"一名角色的判定牌生效前，你可以打出一张黑色牌作为判定牌并获得原判定牌。若你以此法打出的牌为黑桃2-9，则你摸两张牌。",
            "sgws_paoxiao":"咆哮",
            "sgws_paoxiao_info":"锁定技，出牌阶段，你使用【杀】没有数量限制和距离限制。当你使用的【杀】被【闪】抵消时，你获得一枚“咆”（→）当你因【杀】造成伤害时，你弃置所有“咆”并令伤害值+X（X为“咆”数+1）。回合结束后，你弃置所有“咆”。",
            "sgws_tishen":"替身",
            "sgws_tishen_info":"限定技，准备阶段，你可以将体力回复至上限，然后摸X张牌（X为你回复的体力值+1）。",
            "sgws_liyong":"厉勇",
            "sgws_liyong2":"厉勇",
            "sgws_liyong3":"厉勇",
            "sgws_liyong_info":"锁定技，若你于出牌阶段使用的【杀】被【闪】抵消，本阶段你下一张【杀】不可被响应且伤害+2，指定的目标本回合非锁定技失效，当此【杀】造成伤害后，若目标角色未死亡，你失去1点体力。",
            "sgws_jie":"嫉恶",
            "sgws_jie_info":"锁定技，当你使用红色【杀】造成伤害时，此伤害+2。",
            "sgws_dahe":"大喝",
            "sgws_dahe2":"大喝",
            "sgws_dahe2_bg":"喝",
            "sgws_dahe_info":"出牌阶段限两次，你可以与一名其他角色拼点。若你赢，该角色不能使用或打出不为♥花色的【闪】直到回合结束，且你可将该角色拼点的牌交给场上一名体力不多于你的角色。若你没赢，你须展示手牌并弃置其中的一张。",
            "sgws_chouce":"筹策",
            "sgws_chouce_info":"当你受到1点伤害后，你可以判定，若结果为：黑色，你弃置一名角色区域里的一到两张牌；红色，你选择一名角色，其摸两张牌，若其是〖先辅〗选择的角色，改为其摸三张牌。",
            "sgws_jianchu":"鞬出",
            "sgws_jianchu_info":"当你使用【杀】指定一名角色为目标后，你可以弃置其一张牌，若以此法弃置的牌不为基本牌，此【杀】不可被【闪】响应且你本回合使用【杀】的次数上限+1",
            "sgws_lvli":"膂力",
            "sgws_lvli_info":"每回合限一次(自己的回合内则改为限两次），当你造成或受到伤害后，你可选择：1，若你的体力值大于你的手牌数，你摸Ｘ+1张牌；2，若你的手牌数大于你的体力值且你已受伤，你回复Ｘ点体力（Ｘ为你的手牌数与体力值之差）。",
            "sgws_qingjiao":"清剿",
            "sgws_qingjiao_info":"出牌阶段开始时，你可以从牌堆或弃牌堆中随机获得八张牌名各不相同且副类别不同的牌。",
            "sgws_quedi":"却敌",
            "sgws_quedi_info":"每回合限一次。当你使用【杀】或【决斗】指定唯一目标后，你可选择：①获得目标角色的一张手牌。②弃置一张基本牌，并令此牌的伤害值基数+1。③背水：依次执行上述所有选项。",
            "sgws_zhuifeng":"椎锋",
            "sgws_zhuifeng_backup":"椎锋",
            "sgws_zhuifeng_info":"当你需要使用【杀】或【决斗】时，你可以失去1点体力，然后视为使用此牌。",
            "sgws_chongjian":"冲坚",
            "sgws_chongjian_backup":"冲坚",
            "sgws_chongjian_info":"你可以将一张装备牌当做【杀】（无距离限制）或【酒】使用。当你以此法使用【杀】造成伤害后，你获得目标角色装备区内的X张牌（X为伤害值+1）。",
            "sgws_choujue":"仇决",
            "sgws_choujue_info":"锁定技。当你杀死其他角色后，你加两点体力上限并摸两张牌，然后本回合发动【却敌】的次数上限+1。",
            "sgws_luoying":"落英",
            "sgws_luoying_discard":"落英",
            "sgws_luoying_judge":"落英",
            "sgws_luoying_info":"当其他角色的黑色牌因弃置或判定而进入弃牌堆时，你可以获得之。",
            "sgws_jiushi":"酒诗",
            "sgws_jiushi_info":"当你需要使用【酒】时，若你的武将牌正面向上，你可以翻面，视为使用一张【酒】。当你受到伤害后，若你的武将牌背面向上，你可以翻面。当你翻面时，你获得牌堆中的两张随机锦囊。",
            "sgws_jiushi3":"酒诗",
            "sgws_jiushi1":"酒诗",
            "sgws_yaowu":"耀武",
            "sgws_yaowu_info":"锁定技，当你受到牌造成的伤害时，若此牌为红色，则伤害来源摸一张牌；否则你摸两张牌。",
            sgws_pojun:'破军',
			sgws_pojun2:'破军',
			sgws_pojun3:'破军',
			sgws_pojun_info:'当你使用【杀】指定目标后，你可以将其的至多X张牌置于其武将牌上（X为其体力值），若这些牌中：有装备牌，你将这些装备牌中的一张置于弃牌堆；有锦囊牌，你摸两张牌。然后其于当前回合结束时获得这些牌。当你因执行【杀】的效果而对一名角色造成伤害时，若该角色的手牌数和装备区内的牌数均不大于你，则此伤害+2。',
            sgws_pojun4:'破军',
			sgws_pojun4_info:"当你使用【杀】造成伤害后，你可以令受到该伤害的角色摸X张牌（X为该角色当前的体力值-1），然后该角色将其武将牌翻面",
            sgws_shanjia:"缮甲",
			sgws_shanjia_info:"出牌阶段开始时，你可以摸4张牌，然后弃置3-X张牌(X为你本局游戏内不因使用而失去过的装备牌的数目且至多为3)。若你没有以此法弃置基本牌或锦囊牌，则你可以视为使用了一张无距离限制且不计入出牌阶段使用次数的【杀】。",
            "sgws_shanbi":"闪避",
            "sgws_shanbi_info":"你受到无属性伤害时，你防止此伤害",
            "sgws_jianshe":"溅射",
            "sgws_jianshe_info":"每回合限一次，当你对一名其他角色造成伤害时，你可以弃置2张牌，对与其相互距离为1的一名角色造成两点伤害",
            sgws_anxu:'安恤',
			sgws_anxu_info:'出牌阶段限一次，你可以选择两名其他角色，令其中一名角色获得另一名角色的一张牌。你摸两张牌。然后你可以令二者中手牌数较少的一名角色摸一张牌。',
            sgws_qizhi:'奇制',
			sgws_qizhi_info:'当你于回合内使用基本牌或锦囊牌指定目标后，你可以弃置不是此牌目标的一名角色的一张牌。若如此做，其摸两张牌。',
			sgws_jinqu:'进趋',
			sgws_jinqu_info:'结束阶段开始时，你可以摸三张牌，若如此做，你将手牌弃置至X张。（X为你于此回合发动过〖奇制〗的次数）',
            sgws_gushe:'鼓舌',
			sgws_gushe_info:'出牌阶段，若X小于7，则你可以用一张手牌与至多三名角色同时拼点，然后依次结算拼点结果，没赢的角色选择一项：1.弃置一张牌；2.令你摸一张牌。若你没赢，你获得一个“饶舌”标记。',
			sgws_jici:'激词',
			sgws_jici_info:'锁定技，当你展示拼点牌后，若此牌的点数不大于X，则你令此牌点数+X，并获得此次拼点中原点数最大的拼点牌。（X为你的“饶舌”标记数）',
            sgws_qiai:'七哀',
			sgws_qiai_info:'出牌阶段限一次，你可以将一张非基本牌交给一名其他角色。然后其选择一项：①你回复两点体力。②你摸三张牌。',
			sgws_shanxi:'善檄',
			sgws_shanxi_suoming:'善檄',
			sgws_shanxi_info:'出牌阶段开始时，你可令一名其他角色获得“檄”标记并清除场上已有的其他“檄”标记（若有）。有“檄”标记的角色回复体力时，若其体力值大于0，则其需选择一项：①交给你三张牌。②失去两点体力。',
            "sgws_sanwen":"散文",
			"sgws_sanwen_info":"每回合限一次。当你获得牌后，若你的原手牌中有与这些牌名称相同的牌，则你可以展示这些牌，弃置新得到的同名牌并摸三倍的牌。",
			"sgws_qiai2":"七哀",
			"sgws_qiai2_info":"限定技，当你进入濒死状态时，你可以令所有其他角色依次交给你两张牌。",
			"sgws_denglou":"登楼",
			"sgws_denglou_info":"限定技，结束阶段，若你没有手牌，则你可以观看牌堆顶的五张牌，依次使用其中的所有基本牌（不能使用则弃置），然后获得其余的牌。",
            sgws_zhiyan:'直言',
            sgws_zhiyan_info:'结束阶段，你可以令一名角色摸两张牌并展示之，若为装备牌，其使用此牌并回复一点体力。',
            sgws_danfa:'丹法',
			sgws_danfa_info:'准备阶段或结束阶段开始时，你可将一张牌置于武将牌上，称为“丹”。每回合每种花色限一次，当你使用牌时，若“丹”中有与此牌花色相同的牌，则你摸两张牌。',
			sgws_lingbao:'灵宝',
			sgws_lingbao_info:'出牌阶段限一次，你可以将两张花色不同的“丹”置入弃牌堆。若这两张牌：均为红色，你令一名其他角色回复两点体力；均为黑色，你弃置一名其他角色区域内至多三张区域不同牌；颜色不同，则你令一名角色摸两张牌，并令另一名角色弃置一张牌。',
            sgws_lianhua:'炼化',
			sgws_lianhua_info:'你的回合外，每当有其他角色受到伤害后，你获得一个“丹血”标记（该角色与你阵营一致时为红色，不一致为黑色，此颜色对所有玩家均不可见）直到你的准备阶段开始。准备阶段，根据你获得的“丹血”标记的数量和颜色，你从牌堆/弃牌堆中获得相应的牌以及相应技能直到回合结束。3枚或以下：〖英姿〗,【乐不思蜀】和【桃】；超过3枚且红色“丹血”较多：〖观星〗,【乐不思蜀】和【无中生有】；超过3枚且黑色“丹血”较多：〖直言〗,【乐不思蜀】和【顺手牵羊】；超过3枚且红色和黑色一样多：【杀】、【决斗】,【乐不思蜀】和〖攻心〗。',
            sgws_jiuchi:'酒池',
			sgws_jiuchi_info:'你可以将一张黑色手牌当做【酒】使用。锁定技，你使用【酒】无次数限制。',
            sgws_hengzheng:'横征',
            sgws_hengzheng_info:'摸牌阶段开始时，若你的体力值为1或你没有手牌，则你可以放弃摸牌，改为获得每名敌方角色区域内的一张牌。',
            sgws_beige:'悲歌',
			sgws_beige_info:'当有角色受到【杀】造成的伤害后，你可以弃一张牌，并令其进行一次判定，若判定结果为：♥该角色回复X点体力(X为伤害点数+2)；♦︎该角色摸五张牌；♣伤害来源弃四张牌；♠伤害来源将其武将牌翻面',
            sgws_chenqing:'陈情',
			sgws_chenqing_info:'每轮限一次，当一名角色处于濒死状态时，你可以令另一名其他角色摸6张牌，然后其弃置四张牌。若其以此法弃置的四张牌花色各不相同，则视为该角色对濒死的角色使用一张【桃】。',
            sgws_luoyi:'裸衣',
			sgws_luoyi2:'裸衣',
            "sgws_luoyi_info":"摸牌阶段开始时，你展示牌堆顶的三张牌。然后，你可以放弃摸牌。若如此做，你获得其中的基本牌、武器牌和【决斗】，且直到你的下回合开始，你使用的【杀】或【决斗】造成伤害时，此伤害+2。否则，你将这些牌置入弃牌堆。",
            sgws_aocai:'傲才',
			sgws_aocai_backup:'傲才',
            sgws_aocai_info:'当你于回合外需要使用或打出一张基本牌时，你可以观看牌堆顶的三张牌（若你没有手牌则改为五张）。若你观看的牌中有此牌，你可以使用打出之。',
            sgws_duwu:'黩武',
			sgws_duwu3:'黩武',
            sgws_duwu_info:'出牌阶段，你可以弃置X张牌对你攻击范围内的一名其他角色造成两点伤害（X为该角色的体力值）。若该角色因此法进入濒死状态且存活，则你于濒死状态结算后失去1点体力，且本回合不能再发动〖黩武〗。',
            sgws_zhongzuo:'忠佐',
			sgws_zhongzuo_info:'一名角色的结束阶段开始时，若你于此回合内造成或受到过伤害，则你可以令一名角色摸3张牌。若该角色已受伤，则你摸一张牌。',
			sgws_wanlan:'挽澜',
			sgws_wanlan_info:'限定技，当一名角色进入濒死状态时，你可以弃置所有手牌并令其回复体力至两点，然后对当前回合角色造成1点伤害。',
            sgws_tongqu:'通渠',
			sgws_tongqu_info:'游戏开始时，你拥有一个“渠”标记。准备阶段，你可以失去1点体力令一名没有“渠”标记的角色获得“渠”标记。有“渠”的角色摸牌阶段额外摸两张牌，然后将一张牌交给其他有“渠”的角色或弃置。若以此法给出的是装备牌则使用之。当有“渠”的角色进入濒死状态时，移除其“渠”标记。',
            sgws_chongzhen:'冲阵',
			sgws_chongzhen1:'冲阵',
			sgws_chongzhen2:'冲阵',
            sgws_chongzhen_info:'当你因发动〖龙胆〗而使用或打出【杀】或【闪】时，你可以获得对方的一到两张手牌。',
            sgws_juejing:'绝境',
			sgws_juejing_info:'锁定技，你的手牌上限+2；当你进入或脱离濒死状态时，你摸两张牌。',
			sgws_longhun:'龙魂',
			sgws_longhun_info:'你可以将同花色的一至两张牌按下列规则使用或打出：红桃当【桃】，方块当火【杀】，梅花当【闪】，黑桃当普【无懈可击】。若你以此法使用了两张红色牌，则此牌回复值或伤害值+2。若你以此法使用了两张黑色牌，则你弃置当前回合角色一到两张牌。',
            sgws_yicong:'义从',
			sgws_yicong_info:'锁定技，你计算与其他角色的距离时-X，其他角色计算与你的距离时+Y。（X为你的体力值，Y为你的已损失体力值）',
            sgws_fanghun:'芳魂',
			sgws_fanghun_info:'当你使用【杀】或成为【杀】的目标后，你获得1个“梅影”标记；你可以移去1个“梅影”标记来发动〖龙胆〗并摸3张牌。',
            sgws_fuhan:'扶汉',
			sgws_fuhan_info:'限定技，回合开始时，你可以移去所有"梅影"标记并摸等量的牌，然后从X张蜀势力武将牌中选择并获得至多四个技能（限定技、觉醒技、隐匿技、使命技、主公技除外）。若此时你是体力值最低的角色，你回复1点体力（X为场上角色数，且X∈[4,+∞)）。',
            sgws_tuntian:'屯田',
			sgws_tuntian_info:'当你于回合外失去牌时，你可以进行一次判定。若判定结果为♥，你获得此判定牌。否则你将此牌置于你的武将牌上，称之为【田】。锁定技，你计算与其他角色的距离时-X（X为你武将牌上【田】的数目+1）',
            sgws_xuxie:'虚猲',
			sgws_xuxie_info:'出牌阶段开始时，你可以减1点体力上限并选择所有与你距离为1的角色，弃置这些角色的各两张牌或令这些角色各摸两张牌。出牌阶段结束时，若你的体力上限为全场最少，则你加1点体力上限。',
            "sgws_yiji":"遗计",
			"sgws_yiji_info":"当你受到1点伤害后，你可以摸三张牌，然后可以将至多三张手牌交给其他角色。",
            sgws_huishi:'慧识',
		    sgws_huishi_info:'出牌阶段限一次，你可进行判定牌不置入弃牌堆的判定。若判定结果与本次发动技能时的其他判定结果的花色均不相同，则你加1点体力上限并重复此流程。然后你将所有位于处理区的判定牌交给一名角色。若其手牌数为全场最多，则你减1点体力上限。',
            sgws_tianyi:'天翊',
			sgws_tianyi_info:'觉醒技，准备阶段，你加2点体力上限并回复2点体力，然后令一名角色获得技能〖佐幸〗。',
            sgws_zuoxing:'佐幸',
            sgws_zuoxing_info:'准备阶段，若令你获得〖佐幸〗的角色存活，则你可以令你获得如下效果：出牌阶段限一次，你可以获得一张普通锦囊牌。',
            sgws_huishi2:'辉逝',
			sgws_huishi2_info:'限定技，出牌阶段，你可以选择一名其他角色：若其有未发动过的觉醒技，则你令其发动这些觉醒技时无视原有条件；否则其摸5张牌。然后你减2点体力上限。',
            sgws_guimou:'鬼谋',
			sgws_guimou_info:'结束阶段，你可以令一名随机的敌方角色进入混乱状态直到其下一回合结束',
            sgws_quanji:'权计',
			sgws_quanji_info:'出牌阶段结束时，若你的手牌数大于体力值，或当你受到1点伤害后，你可以摸2张牌，然后将一张手牌置于武将牌上，称为“权”；你的手牌上限+X（X为“权”的数量）。',
            sgws_paiyi:'排异',
			sgws_paiyi_backup:'排异',
			sgws_paiyi_info:'出牌阶段每项各限一次，你可移去一张“权”并选择一项：①令一名角色摸X+1张牌。②对至多X名角色各造成2点伤害。（X为“权”数）',
            sgws_qianxi:'潜袭',
			sgws_qianxi_info:'当你使用【杀】对距离为1的目标角色造成伤害时，你可以进行一次判定，若判定结果不为红桃，你防止此伤害，令其减2点体力上限',
            sgws_fuman:'抚蛮',
			sgws_fuman_info:'出牌阶段每名角色限一次，你可以将一张手牌交给一名其他角色并标记为“抚蛮”且“抚蛮”牌的牌名视为【杀】。然后当一名角色使用“抚蛮”牌结算结束后，你摸2张牌。若此牌造成过伤害，则改为摸3张牌。',
            sgws_shichou:"誓仇",
			sgws_shichou_info:"当你使用【杀】时，你可以令至多X名角色也成为此【杀】的目标。此牌结算结束后，若你未因【杀】造成过伤害，则你获得此【杀】（X为你已损失的体力值且至少为2。每回合限获得三次）",
            sgws_xianzhen:'陷阵',
			sgws_xianzhen_info:'出牌阶段限一次，你可以与一名角色拼点。若你赢，你获得以下效果直到回合结束：无视该角色的防具且对其使用牌没有次数和距离限制，且当你使用【杀】或普通锦囊牌指定其他角色为唯一目标时可以令该角色也成为此牌的目标。若你没赢，你的【杀】不计入手牌上限直到回合结束。',
			sgws_xianzhen2:'陷阵',
            sgws_jinjiu:'禁酒',
			sgws_jinjiu_info:'锁定技，你的【酒】均视为【杀】。其他角色不能于你的回合内使用【酒】。当你受到酒【杀】的伤害时，你令此伤害-X（X为影响过此【杀】的伤害值的【酒】的数量+1）',
			sgws_jinjiu2:'禁酒',
			sgws_jinjiu3:'禁酒',
            sgws_haoshi:'好施',
			sgws_haoshi_info:'摸牌阶段开始时，你可以多摸两张牌。然后摸牌阶段结束时，若你的手牌数大于5，则你将手牌数的一半（向下取整）交给一名其他角色并获得如下效果直到你下回合开始：当你成为【杀】或普通锦囊牌的目标后，其可以交给你一张手 牌。',
			sgws_dimeng:'缔盟',
			sgws_dimeng_info:'出牌阶段限一次，你可令两名其他角色交换手牌并获得如下效果：出牌阶段结束时，你弃置X张牌（X为这两名角色手牌数之差的绝对值；Y为你的手牌数）。',
            sgws_liegong:'烈弓',
			sgws_liegong_info:'你使用【杀】可以选择你距离不大于此【杀】点数的角色为目标；当你使用【杀】指定一个目标后，你可以根据下列条件执行相应的效果：1.其手牌数小于等于你的手牌数+1，此【杀】不可被【闪】响应，2.其体力值大于等于你的体力值，此【杀】伤害+2。',
            sgws_liuhuan:"六幻",
            "sgws_liuhuan_info":"限定技，当你解除濒死状态时，获得7点护甲。",
            sgws_yuren:"羽刃",
            "sgws_yuren_info":"每当你使用杀对别人造成伤害时，你可以获得对方两张手牌和一张装备牌。",
            sgws_juniao:"巨鸟",
            "sgws_juniao_info":"锁定技，你的进攻距离+2；体力值未满时，进攻距离无限，防御距离+1。",
            sgws_quyanfushi:"趋炎附势",
            "sgws_quyanfushi_info":"出牌阶段限一次，你可以获得一名其他角色的所有牌，然后还给其等量牌的一半向下取整，若其体力值小于你体力值，你对其造成2点伤害。",
            sgws_muniao:"木鸟",
            "sgws_muniao_info":"出牌阶段限一次，你可以弃置一名其他角色装备区内的一张牌，令其摸1张牌。",
            sgws_jiguan:"机关",
            "sgws_jiguan_info":"出牌阶段限一次，你可以将你手牌中的一张装备牌置于一名其他角色装备区里（不得替换原装备），然后你摸3张牌。",
            sgws_yehou:"夜吼",
            sgws_yehou1:"夜吼",
            "sgws_yehou_info":"你的回合外，每当你因使用、打出或弃置而失去一张手牌时，你可以进行一次判定。若失去的是红色牌，你可以摸2张牌。若失去的为黑色牌，判定结果颜色相同，你回复2点体力，判定结果颜色不同，你增加2点体力上限。",
            sgws_langqun:"狼群",
            "sgws_langqun_info":"锁定技，当你受到伤害后，对所有敌方角色造成一点雷属性伤害。",
            sgws_shedu:"蛇毒",
            "sgws_shedu_info":"其他角色的出牌阶段开始时，你可以弃置一张手牌，对其造成3点伤害，然后选择令该角色喝酒或摸两张牌。",
            sgws_huomeishu:"火魅术",
            "sgws_huomeishu_info":"回合结束后，你可以令一名角色摸一张牌，然后你控制此角色对其攻击范围内你选择的另一名角色使用一张【杀】，否则你获得其3张牌。",
            sgws_yushe:"御蛇",
            "sgws_yushe_info":"当你受到一点伤害后，你可以摸15张牌，弃y张手牌。你回复一点体力并增加一点体力上限。(y为大于你体力上限的手牌数-2)",
            sgws_chilian1:"痴恋",
            "sgws_chilian1_info":"游戏开始时，你选择一名角色获取\"痴恋\"标记。当你受到伤害时(若场上没有\"痴恋\"标记角色，你选择一名角色获取\"痴恋\"标记，然后你回复一点体力值)，你可以选择一名拥有\"痴恋\"标记角色，获取其3张牌并摸一张牌，否则你摸4张牌。",
            sgws_hanqing:"含情",
            "sgws_hanqing_info":"当你造成或受到伤害时，你可以选择一名未获得\"情\"标记的角色，令其获得标记，拥有标记的角色准备或结束阶段，摸4张牌并弃置此标记。",
            sgws_qing:"情",
            sgws_lianhua1:"莲花",
            "sgws_lianhua1_info":"每当你使用或打出一张红桃牌，你可以回复3点体力，若未损失体力改为摸3张牌。",
            sgws_nance:"难测",
            "sgws_nance_info":"结束阶段，你摸两张牌。",
            sgws_haoyan:"豪言",
            "sgws_haoyan_info":"出牌阶段限一次，你可以与一名手牌数大于你体力值的其他角色交换手牌，并对其造成一点伤害。",
            sgws_daosheng:"盗圣",
            "sgws_daosheng_info":"回合结束，你可以抽1名其他角色的2张手牌。",
            sgws_dianguang:"电光",
            "sgws_dianguang_info":"出牌阶段限2次，你可以将一张黑色手牌当【顺手牵羊】使用。",
            sgws_liuhunzhou:"六魂咒",
            "sgws_liuhunzhou_info":"出牌阶段限3次，你可以与一名角色拼点，若你赢，令其武将牌翻面；若你没赢，你摸一张牌，然后视为其对你使用一张杀。",
            sgws_xueshou:"血手",
            "sgws_xueshou_info":"锁定技，你使用的红色杀不可闪避，并且伤害+3。",
            sgws_leishenchui:"雷神锤",
            "sgws_leishenchui_info":"锁定技，当你使用【杀】对目标角色造成伤害时，你进行一次判定， 判定结果为黑色牌，其受到3点伤害；你可以打出一张黑色牌替换判定牌。",
            sgws_dadao:"大道",
            "sgws_dadao_info":"每当有角色使用一张非延时锦囊牌时，你摸一张牌。",
            sgws_yinzhen:"银针",
            "sgws_yinzhen_info":"出牌阶段限2次，令一名其他角色弃置所有牌，其回复一点体力。",
            sgws_yixian:"医仙",
            "sgws_yixian_info":"出牌阶段限一次，你可以弃置一张手牌令一名角色回复一点体力，若如此做你摸3张牌。",
            "sgws_zhuge":"筑歌",
	        "sgws_zhuge_info":"锁定技，回合结束时,重置武将牌；回复1点体力；摸3张牌。",
            sgws_yinlu:"音律",
            "sgws_yinlu_info":"<font color=#F0F>幻音宝盒</font> ：每当你受到伤害后，随机进行一项：①弃置伤害来源4张手牌;②弃置伤害来源所有手牌; ③弃置伤害来源装备区的4张牌; ④弃置伤害来源装备区的所有牌; ⑤你恢复3点体力;⑥对伤害来源造成3点伤害;⑦获得伤害来源的3张手牌;⑧获得伤害来源的4张手牌; ⑨你摸3张牌 ;⑩你摸4张牌。",
            sgws_conghui:"聪慧",
            "sgws_conghui_info":"每当你使用一张装备牌，你可以回复一点体力并摸3张牌。",
            sgws_tianfu:"天赋",
            "sgws_tianfu_info":"准备阶段，你可以回复一点体力；摸一张牌；视为使用一张无视距离的杀，此杀造成伤害后，你获得一点护甲。",
            sgws_juenian:"觉念",
            "sgws_juenian_info":"在一名角色的结束阶段，若其体力值为2或更低，你可以令其摸3张牌。",
            sgws_jiansheng:"剑圣",
            "sgws_jiansheng_info":"每当其他角色触发你使用或打出一张闪后，你可以弃置此角色2张牌。",
            sgws_zuzhuang:"组装",
            "sgws_zuzhuang_info":"当你使用杀或者回复体力时，你从牌堆获取2张锦囊。",
            sgws_mianju:"面具",
            "sgws_mianju_info":"每当你使用杀指定目标后，或成为杀的目标后，你可以摸2张牌。",
            sgws_yanbian:"言辩",
            "sgws_yanbian_info":"其他角色使用杀时，若你不是杀的目标，可以弃置一张闪取消之，然后你摸2张牌。",
            sgws_ganchangcunduan:"肝肠寸断",
            "sgws_ganchangcunduan_info":"每当你于回合外失去牌时，你可以选择一名其他角色，获得其一张牌并对其造成2点伤害。",
            sgws_zuishengmengsi:"醉生梦死",
            "sgws_zuishengmengsi_info":"出牌阶段限一次，你可以对距离内的一名其他角色造成x+2点伤害，并且你摸x张牌(x为你损失的体力值)。",
            sgws_huakuihuaying:"花魁花影",
            "sgws_huakuihuaying_info":"你可以取消任意角色的判定；当你受到伤害时，改为失去一点体力并摸3张牌，然后你防止受到的伤害，直到回合开始。",
            sgws_yijisetong:"阴阳色瞳",
            "sgws_yijisetong_info":"<font color=#F0F>一级色瞳</font> ：摸牌阶段，你观看牌堆顶五张牌并按任意顺序将其置于牌堆顶，并且你额外摸2张牌。",
            sgws_dulongewu:"毒泷恶雾",
            "sgws_dulongewu_info":"当你受到伤害后，你选择令伤害来源获得2张毒。",
            sgws_yanwuluoyi:"艳舞罗衣",
            "sgws_yanwuluoyi_info":"出牌阶段限一次，你可以弃置一张黑色牌并选择一名其他角色，若为黑桃，该目标获得一张【万箭齐发】，若为梅花，该目标获得一张【南蛮入侵】，然后你摸3张牌。",
            sgws_xiangyuchushe:"象欲除蛇",
            "sgws_xiangyuchushe_info":"其他角色使用的【南蛮入侵】和【万剑齐发】对你无效，并且你摸3张牌。",
            sgws_yejintianming:"夜尽天明",
            "sgws_yejintianming_info":"觉醒技，当你受到伤害后，若你体力值不大于6，并从4个随机亮出的技能中选择一个获得。",
            sgws_juesha:"绝杀",
            "sgws_juesha_info":"你可以选择一名其他角色，然后你进行一次判定，若结果为黑色，视为对其使用一张不计次数的杀，否则你摸2张牌。出牌阶段限X次(X为你损失的体力值，至少为一)。",
            sgws_xiyuxiongshi:"西域雄狮",
            "sgws_xiyuxiongshi_info":"当你使用基本牌或非延时锦囊牌后，若还有结算条件，你可以选择摸2张牌或额外结算一次；当你使用装备牌后，你可以选择一名其他角色，其视为使用一张相同装备牌。",
            sgws_qishizhuiji:"骑士追击",
            "sgws_qishizhuiji_info":"结束阶段，若你于此回合内造成的伤害不小于三点，则你摸4张牌，若你于此回合内杀死至少一名角色，则你进行一个额外的回合。",
            sgws_zhiyin:"知音",
            "sgws_zhiyin_info":"出牌阶段限一次，你可以弃置一张手牌，并展示一名其他角色的一张手牌，若两张牌颜色相同，你弃置所有手牌，复制其所有手牌，否则对方失去2点体力。",
            sgws_qinxian:"琴弦",
            "sgws_qinxian_info":"当你失去体力时，可以令一名其他角色回复2点体力。当你回复体力时，可以令一名其他角色失去2点体力。",
            sgws_yunwenlianyi:"云纹涟漪",
            "sgws_yunwenlianyi_info":"出牌阶段限一次，你可以弃置一名其他角色的一张牌，若弃置的为黑色牌，你摸4张牌，其回复一点体力，若弃置的为红色牌，其摸4张牌，你回复一点体力。",
            sgws_huarongyuemao:"花容月貌",
            "sgws_huarongyuemao_info":"结束阶段，你可以令一名其他角色弃置你一张牌，若弃置你的为黑色牌，你摸4张牌并且弃置其两张牌，若弃置你的为红色牌，你回复一点体力并且其失去3点体力。",
            sgws_gouhunliandao:"勾魂镰刀",
            "sgws_gouhunliandao_info":"锁定技，你使用杀时，弃置目标一到两张牌，当此杀造成伤害后，你进行一次判定，若结果为黑色，目标武将牌翻面并且获得你装备区一张牌。",
            sgws_yuelangzhiyi:"月狼之裔",
            "sgws_yuelangzhiyi_info":"当你对其他没有\"狼毒\"标记的角色造成伤害后，你可以令其获得\"狼毒\"标记并且获得其两张牌，拥有标记的角色累计使用1张杀后，失去三点体力，然后弃置此标记。",
            sgws_langdu:"狼毒",
            sgws_daofa:"刀法",
            "sgws_daofa_info":"锁定技，你使用杀的次数和目标数额外+x(x为你已损失的体力值+1)。",
            sgws_xizuo:"细作",
            "sgws_xizuo_info":"出牌阶段限一次，你可以弃置一至两张手牌，然后选择一名角色，其失去x点体力值(x为你发动技能弃置的牌数+1)。",
            sgws_guiye:"归叶",
            "sgws_guiye_info":"当你使用一张非转化的普通锦囊牌时，你可以弃置一名其他角色的一张牌，若弃置的为黑色，则你摸3张牌。",
            sgws_xunlu:"寻路",
            "sgws_xunlu_info":"回合开始时，你回复一点体力值并摸x张牌，否则失去一点体力值(x为你当前体力值)。",
            "sgws_wujian":"舞剑",
            "sgws_wujian_info":"出牌阶段限1次，你可将1张牌置于1名其他角色的武将牌上，称为“舞”；其出牌阶段各限1次，可将黑色/红色的“舞”当作决斗/杀使用，并令你摸3张牌。",
            "sgws_wujian1":"舞剑",
            "sgws_wujian1_info":"",
            "sgws_wujian1_red":"舞剑♥︎♦︎",
            "sgws_wujian1_red_info":"",
            "sgws_wujian1_black":"舞剑♠︎♣︎",
            "sgws_wujian1_black_info":"",
            'sgws_sheshen':'舍身',
			'sgws_sheshen_info':'当你受到伤害后，你可以分配牌堆顶的4张牌给任意角色',
            sgws_changnian2:'追思',
			sgws_changnian2_info:'锁定技，结束阶段，你摸3张牌',
            sgws_xiaosheng:"萧声",
            "sgws_xiaosheng_info":"出牌阶段限一次，你可以令距离1以内的任意名角色摸3张牌。",
            sgws_huadie:"化蝶",
            "sgws_huadie_info":"当你距离1以内的角色受到伤害时，你可以摸3张牌，每名角色出牌阶段限一次。",
            sgws_meiwu:"魅舞",
            "sgws_meiwu_info":"出牌阶段限3次，你可以展示一名其他角色的一张手牌，若此牌为黑色，将之置于该角色的判定区内，视为【兵粮寸断】，否则你获得之。",
            sgws_anfu:"安抚",
            "sgws_anfu_info":"当一名角色回复体力后，你可以令一名角色摸3张牌。",
            sgws_haodukongju:"豪赌控局",
            "sgws_haodukongju_info":"摸牌阶段，你可以掷一次骰子，并把摸牌数+X，X为掷骰子的点数，若点数不大于3，你回复一点体力。",
            sgws_jiuzhuanduanhun:"九转断魂",
            "sgws_jiuzhuanduanhun_info":"出牌阶段限一次，你可以弃置一张牌，并选择任意名角色，然后令这些角色赌大小掷骰子，输了失去一点体力并弃置两张牌。",
            sgws_chunxiaqiudong:"春夏秋冬",
            "sgws_chunxiaqiudong_info":"锁定技，结束阶段，你随机获得2种效果直到下回合结束： <br><font color=#F0F>春生</font> ：其他角色使用【杀】无效。<br> <font color=#F0F>夏荣</font> ：其他角色使用或打出【闪】时，其失去一点体力并摸一张牌。<br> <font color=#F0F>秋枯</font> ：其他角色使用非转化的普通锦囊牌无效。<br> <font color=#F0F>冬灭</font> ：其他角色使用装备牌无效。",
            sgws_ganjiangmoye:"干将莫邪",
            "sgws_ganjiangmoye_info":"当你对其他角色造成伤害后，你可以令其随机装备一件装备牌，然后令此伤害+2；当你受到伤害后，你可以摸x张牌(x为伤害来源装备区的牌数)，然后伤害来源弃置装备区所有牌；你免疫一次死亡，然后摸四张牌并失去此技能。",
            sgws_kuanglieaogu:"狂烈傲骨",
            "sgws_kuanglieaogu_info":"当你受到伤害时，你可以获得伤害来源1-3张牌，然后其回复一点体力。",
            sgws_hupojianfa:"虎魄剑法",
            "sgws_hupojianfa_info":"锁定技，当你使用杀对目标造成伤害后，若你装备区有牌，你获得目标装备区一张牌，若目标装备区没牌，你获得其一张手牌，然后此杀造成伤害+x+1；你的手牌上限+x(x为你装备区的装备数)。",
            sgws_wulikanhua:"雾里看花",
            "sgws_wulikanhua_info":"两回合限一次，出牌阶段，你可以令一名其他角色选择一种花色，然后该角色获得你的一张手牌并展示之，若此牌的花色与其所选的花色不同，则其减3点体力上限，并且你摸两张牌。",
            sgws_wumeiyaorao:"妩媚妖娆",
            "sgws_wumeiyaorao_info":"当你使用牌指定其他角色为目标时，你可以将此牌当乐不思蜀置于该目标判定区内，并且你回复一点体力。",
            sgws_lijian:'离间',
            sgws_lijian_info:'出牌阶段限3次，你可以弃置一张牌，视为一名男性角色对另一名男性角色使用一张【决斗】（不可被【无懈可击】响应）。',
            sgws_chayanguanse:"察言观色",
            "sgws_chayanguanse_info":"出牌阶段限一次，你可以观看一名角色的手牌，并弃置其一张方片牌，然后对其造成3点伤害，以及该角色的手牌始终展示，直到其使用杀后取消展示手牌。",
            sgws_jingyitishen:"惊鲵替身",
            "sgws_jingyitishen_info":"当你受到伤害后，你可以令伤害来源替你承受一次除体力流失和闪电以外的所有伤害，并且你进行一次判定，若结果为黑色，你的摸牌阶段，额外摸3张牌；若结果为红色，你的准备阶段，可以视为对一名角色使用3张无视距离的杀。",
            sgws_chunhanduanzhang:"春寒断掌",
            "sgws_chunhanduanzhang_info":"当你对其他角色造成伤害后，你可以令其出牌阶段只能使用1张牌，当其受到伤害后，解除此效果。",
            "sgws_chunhanduanzhang2":"春寒断掌",
            sgws_quyifengying:"曲意逢迎",
            "sgws_quyifengying_info":"结束阶段，你可以摸两张牌，然后令一名其他角色进入额外的回合，并且拥有\"春寒断掌\"到其回合结束。",
            sgws_nanmandanyu:"南蛮单于",
            "sgws_nanmandanyu_info":"出牌阶段限2次，你可以弃置一张黑桃，视为使用一张【万箭齐发】，或弃置一张梅花，视为使用一张【南蛮入侵】。",
            sgws_ezhanwuju:"恶战无惧",
            "sgws_ezhanwuju_info":"当你使用【南蛮入侵】或【万箭齐发】造成伤害时，若目标角色的体力值不大于你，你可以令此伤害+1。若目标角色手牌数不大于你，你可以获得其一张牌。",
            sgws_baizhanchuanjia:"百战穿甲",
            "sgws_baizhanchuanjia_info":"每当你使用或打出一张基本牌，你获得3点护甲。",
            sgws_wuwangbuli:"无往不利",
            "sgws_wuwangbuli_info":"结束阶段，若你的护甲数大于三，你选择一名其他角色，对其造成2点伤害并弃置其X张牌，X为你的护甲数，然后你失去所有护甲。",
            sgws_roujia:"肉甲",
            "sgws_roujia_info":"锁定技，每当你回复一点体力，你获得一点护甲并摸2张牌。",
            sgws_xiongbao:"凶暴",
            "sgws_xiongbao_info":"锁定技，你使用的【杀】需要3张【闪】响应，若杀造成伤害后，还可以继续出杀。",
            sgws_xiaoyong:"骁勇",
            "sgws_xiaoyong_info":"当你使用【杀】指定目标后，你可以与目标角色拼点，若你赢，此杀不能被【闪】响应并且摸3张牌，若你输，你获得对方拼点的牌。",
            sgws_shanzhan:"善战",
            "sgws_shanzhan_info":"当你受到伤害后，你可以与伤害来源拼点，若你赢，其失去2点体力，若你输，你获得对方拼点的牌。",
            sgws_xuandao:"玄道",
            "sgws_xuandao_info":"当你距离1以内的角色成为杀的目标后，若你不是杀的使用者，你可以令该目标进行一次判定，若为红色，其摸3张牌，若为黑色，此杀对其无效。",
            sgws_zhishui:"止水",
            "sgws_zhishui_info":"出牌阶段限一次，你可以弃置一张装备牌并选择一名其他角色，然后弃置其一张牌，若弃置的不为装备牌，你摸3张牌。",
            sgws_juqi:"聚气",
            "sgws_juqi_info":"每次当你于回合外失去牌时，可以进行一次判定，将判定牌置于你的武将牌上，称为“聚”，每有一张聚，你的进攻距离+1。",
            sgws_qiren:"气刃",
            "sgws_qiren_info":"出牌阶段，你使用杀的次数是聚标记数+2，你可以把任意一张聚当杀使用。",
            sgws_feiyan:"飞燕",
            "sgws_feiyan_info":"其他角色判定阶段开始前，你可以视为对其使用3张【杀】。",
            sgws_baixue:"白雪",
            "sgws_baixue_info":"结束阶段，你可以摸3张牌。",
            sgws_zengqi:"赠器",
            "sgws_zengqi_info":"每当你于回合内发动\"铸剑\"时，则你可以令一名其他角色摸2张牌。",
            sgws_zhujian:"铸剑",
            "sgws_zhujian_info":"出牌阶段限3次，将一张杀当【无中生有】使用。",
            sgws_quanheng:"权横",
            "sgws_quanheng_info":"锁定技，红色牌对你造成的伤害无效，你使用红色牌造成的伤害+2。",
            sgws_jinwu:"金乌",
            "sgws_jinwu_info":"每当你受到伤害后，你可以选择一名未获得引导标记的角色，令其获得引导标记，拥有引导标记的角色，首次使用的杀不可闪避，并且摸4张牌失去标记。",
            sgws_yindao:"引导",
            sgws_fenyan:"绯烟",
            "sgws_fenyan_info":"每当你成为其他角色卡牌的唯一目标时，你可以弃置一张装备牌，将使用者与目标对调。",
            sgws_duanliang:'断粮',
            sgws_duanliang_info:'你可以将一张黑色基本牌或装备牌当做【兵粮寸断】使用；若一名角色的手牌数小于或等于你的手牌数，则你对其使用【兵粮寸断】没有距离限制。',
            sgws_duanbingchuqiao:"短兵出鞘",
            "sgws_duanbingchuqiao_info":"锁定技，根据你装备区的装备数，拥有以下技能：<br>①国色②断粮③雷击④铁骑",
            sgws_yakouwuyan:"哑口无言",
            "sgws_yakouwuyan_info":"其他角色判定时，你可以令其失去2点体力，然后你摸两张牌。",
            sgws_zhangshi:"仗势",
            "sgws_zhangshi_info":"锁定技，你的手牌上限+x，x为你上家的体力值+1。",
            sgws_xinqiren:"欺人",
            "sgws_xinqiren_info":"当你对一名角色造成伤害后，若其体力值少于你，你可以弃置其x张牌(x为其损失的体力值+1)。",
        },
    },
    intro:"",
    author:"无名玩家",
    diskURL:"",
    forumURL:"",
    version:"1.0",
},files:{"character":["sgws_simazhao.jpg","sgws_baiqi.jpg","sgws_baiwuchang.jpg","sgws_baihu.jpg","sgws_zhangliao.jpg","sgws_baosi.jpg","sgws_liuxie.jpg","sgws_guanyu.jpg","sgws_liubiao.jpg","sgws_hejin.jpg","sgws_dianwei.jpg","sgws_caocao.jpg","sgws_caopi.jpg","sgws_lvmeng.jpg","sgws_wuguotai.jpg","sgws_daqiao.jpg","sgws_simayi.jpg","sgws_zhouyu.jpg","sgws_sunliang.jpg","sgws_sunquan.jpg","sgws_sunluyu.jpg","sgws_cenhun.jpg","sgws_zhangjiao.jpg","sgws_xizhicai.jpg","sgws_pangtong.jpg","sgws_sunce.jpg","sgws_xiaoqiao.jpg","sgws_zuoci.jpg","sgws_zhangji.jpg","sgws_zhangzhang.jpg","sgws_chenqian.jpg","sgws_liubei.jpg","sgws_yanwen.jpg"],"card":["sgws_zhenlongchangjian.jpg","sgws_chuanguoyuxi.jpg","sgws_shangyangbianfa.jpg"],"skill":[]}}})