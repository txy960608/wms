game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"魂将",content:function (config,pack){
  lib.group.add('hunjiangshili');
  lib.translate.hunjiangshili='魂';
  lib.translate.hunjiangshili2='魂';
  lib.groupnature.hunjiangshili='hunjiangshili';
  get.drawcardPile=function(name){
    var card;
    for(var i=0;i<ui.cardPile.childNodes.length;i++){
      card=ui.cardPile.childNodes[i];
      if(typeof name=='string'){
        if(card.name==name){
          return card;
        }
      }
      else if(typeof name=='function'){
        if(name(card)){
          return card;
        }
      }
    }
    return null;
  }
  if(lib.rank){
    //废将
    lib.rank.rarity.junk.addArray([]);
    //精品
    lib.rank.rarity.rare.addArray(["hj_jl_hunzhenji","hj_jl_hunxiahoudun","hj_jl_hundianwei","hj_jl_hunsimahui","hj_jl_hunganning","hj_jl_hunsunshangxiang","hj_bm_hunyujin","hj_bm_hundengai","hj_bm_hunzhugedan","hj_bm_hunhuangzhong","hj_bm_hunweiyan","hj_bm_huntaishici","hj_bm_hunzhangxiu","hj_bm_hunzhangrang","hj_hd_hunguanping","hj_hd_hunguanyinping","hj_hd_hunzhangxingcai","hj_hd_hunzhaoxiang","hj_hd_hunzhoutai","hj_hd_hunlingju","hj_ls_hunzhangji","hj_ls_hunxurong","hj_ls_hunxunchen","hj_ls_hunchunyuqiong","hj_ls_hunshenpei","hj_jl_hundaqiao","hj_jl_huncaiwenji"]);
    //史诗
    lib.rank.rarity.epic.addArray(["hj_jl_hunzhangliao","hj_jl_hunguanyu","hj_jl_hunzhugeliang","hj_jl_hunlvmeng","hj_jl_hunhuatuo","hj_jl_hundiaochan","hj_jl_hundongzhuo","hj_jl_hunxuchu","hj_bm_huncaoren","hj_bm_huncaozhi",,"hj_bm_hunzhonghui","hj_bm_hunzuoci","hj_hd_hunzhangchunhua","hj_hd_hunwangyi","hj_hd_hunjiangwei","hj_hd_hunzhurong","hj_hd_hunbeimihu","hj_hd_hunhetaihou","hj_hd_hunwangji","hj_ls_hunlijue","hj_ls_hunguosi","hj_ls_hunhuaxiong","hj_ls_hunyuanshu","hj_ls_hunjushou","hj_ls_huntianfeng","hj_ls_hunfanchou","hj_ls_hunxuyou","hj_xd_hundaxianliangshi","hj_xd_hunluanshimowang","hj_xd_hunchibihuoshen","hj_xd_hunshixuekuanglang","hj_xd_hunjinguozhizu","hj_bm_hunsunjian","hj_jl_hunzhangfei","hj_sn_shenguanyu","hj_sn_shenlvmeng","hj_sn_shenzhouyu","hj_sn_shenlvbu","hj_sn_shenliubei","hj_sn_shenluxun","hj_sn_shenzhangliao","hj_sn_shenzhenji","hj_jl_hunxiaoqiao"]);
    //传说
    lib.rank.rarity.legend.addArray(["hj_jl_huncaocao","hj_jl_hunliubei","hj_jl_hunsunquan","hj_jl_hunguojia","hj_jl_hunsimayi","hj_jl_hunzhaoyun","hj_jl_hunhuangyueying","hj_jl_hunluxun","hj_jl_hunjiaxu","hj_jl_hunzhangjiao","hj_jl_hunzhouyu","hj_bm_hunsunce","hj_bm_hunzhanghe","hj_bm_hunguohuai","hj_bm_hunpangtong","hj_bm_hunlusu","hj_bm_huncaochun","hj_bm_huncaoying","hj_jl_hunlvbu","hj_hd_huncaopi","hj_hd_huncaorui","hj_hd_hunxunyu","hj_hd_hunxizhicai","hj_hd_hunmachao","hj_hd_hunhuanggai","hj_hd_hunliuyan","hj_ls_hunspdongzhuo","hj_ls_hunyuanshao","hj_ls_hunliru","hj_ls_hunspjiaxu","hj_ls_hunsplvbu","hj_ls_hunyanliang&wenchou","hj_ls_hunzhangxia&gaolan","hj_xd_hunjiang♛zuozhe","hj_xd_hunbaonuzhanshen","hj_xd_hunshenguiwuqian","hj_xd_hunweiwudadi","hj_xd_hunshuhanliedi","hj_xd_hunbubaishenhua","hj_xd_wu","hj_sn_shenzhugeliang","hj_sn_shencaocao","hj_sn_shensimayi","hj_sn_shenzhaoyun","hj_sn_shenganning","hj_sn_shencaopi"]);
  }
},precontent:function (){
  window.hunjiang_import=function(f){
    f(lib,game,ui,get,ai,_status);
  };
  var array = [{
    name:'jilue',
    default:true
  },{
    name:'bingmou',
    default:true
  },{
    name:'hundun'
  },{
    name:'luanshi'
  },{
    name:'shennu'
  },{
    name:'yinjian'
  }];
  var count = 0;
  for(var cfg of array){
    var b = lib.config['extension_魂将_hj_'+cfg.name] === undefined ? cfg.default : lib.config['extension_魂将_hj_'+cfg.name];
    if(b && ['jilue','bingmou','hundun','luanshi','yinjian'].contains(cfg.name)){
      count ++;
    }
    if(b){
      lib.init.js(lib.assetURL + "extension/魂将/hj_"+cfg.name+".js");
    }
  }
  if(count >= 4){
    lib.init.js(lib.assetURL + "extension/魂将/hj_xianding.js");
  }
},help:{},config:{
  "hj_jilue":{"name":"极略篇","init":true},
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
    list:[],
  },
  skill:{
    skill:{
    },
    translate:{
    },
  },
  intro:"",
  author:"<br/>整体设计：随缘 <br/>代码技术：无 <br/>功能技术：折月醉倾城 <br/>武将配音：白日梦想家 <br/>感谢诸位的鼎力支持与帮助，如果有兴趣愿意与我们一同更新此扩展包的小伙伴，可以联系我门，共同探讨。<br/>1群：627735076（已满）<br/>2群：839470556<br/>更新日志：<br/>2月3日，魂将（重置版）1.0版本正式发布。",
  diskURL:"",
  forumURL:"",
  version:"1.0",
},files:{"character":[],"card":[],"skill":[]}}})