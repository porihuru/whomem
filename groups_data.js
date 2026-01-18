/*
[JST 2026-01-18 15:00]  groups_data_v20260118-01.js
アイドルグループ定義データ（「どっちがメンバー？」用）
このファイルは「データのみ」。
HTML側で GROUPS を参照して問題生成する。

注意:
- 形式: { id, era, group, members[] }
- GROUPS はグローバルに定義（Edge95想定）
*/

var GROUPS = [

  // ===== 昭和 =====
  { id:"showa_pinklady",     era:"昭和", group:"ピンク・レディー",   members:["未唯mie","増田恵子"] },
  { id:"showa_candies",      era:"昭和", group:"キャンディーズ",     members:["伊藤蘭","藤村美樹","田中好子"] },
  { id:"showa_shonentai",    era:"昭和", group:"少年隊",             members:["東山紀之","植草克秀","錦織一清"] },
  { id:"showa_shibugakitai", era:"昭和", group:"シブがき隊",         members:["薬丸裕英","本木雅弘","布川敏和"] },
  { id:"showa_onyanko",      era:"昭和", group:"おニャン子クラブ",   members:["渡辺満里奈","国生さゆり","新田恵利"] },

  { id:"showa_hikaru_genji", era:"昭和", group:"光GENJI",            members:["諸星和己","大沢樹生","佐藤アツヒロ"] },
  { id:"showa_ratsandstar",  era:"昭和", group:"ラッツ&スター",      members:["鈴木雅之","田代まさし","桑野信義"] },
  { id:"showa_wink",         era:"昭和", group:"Wink",               members:["相田翔子","鈴木早智子"] },
  { id:"showa_checkers",     era:"昭和", group:"チェッカーズ",       members:["藤井フミヤ","藤井尚之"] },
  { id:"showa_tunnelzu",     era:"昭和", group:"とんねるず",         members:["石橋貴明","木梨憲武"] },

  { id:"showa_alfee",        era:"昭和", group:"THE ALFEE",           members:["坂崎幸之助","高見沢俊彦","桜井賢"] },
  { id:"showa_pripri",       era:"昭和", group:"プリンセス プリンセス", members:["岸谷香","渡辺敦子"] },
  { id:"showa_barbee",       era:"昭和", group:"BARBEE BOYS",         members:["杏子","いまみちともたか"] },
  { id:"showa_tmnetwork",    era:"昭和", group:"TM NETWORK",         members:["小室哲哉","宇都宮隆","木根尚登"] },
  { id:"showa_rebecca",      era:"昭和", group:"REBECCA",             members:["NOKKO","土橋安騎夫"] },

  // ★さらに追加5
  { id:"showa_boowy",        era:"昭和", group:"BOØWY",               members:["氷室京介","布袋寅泰"] },
  { id:"showa_oniyanko2",    era:"昭和", group:"うしろゆびさされ組", members:["高井麻巳子","岩井由紀子"] },
  { id:"showa_ccboys",       era:"昭和", group:"C-C-B",               members:["渡辺英樹","関口誠人"] },
  { id:"showa_bakufu",       era:"昭和", group:"爆風スランプ",        members:["サンプラザ中野","パッパラー河合"] },
  { id:"showa_tube",         era:"昭和", group:"TUBE",                members:["前田亘輝","春畑道哉"] },

  // ===== 平成 =====
  { id:"heisei_smap",        era:"平成", group:"SMAP",               members:["木村拓哉","中居正広","稲垣吾郎","草彅剛","香取慎吾"] },
  { id:"heisei_arashi",      era:"平成", group:"嵐",                 members:["大野智","櫻井翔","相葉雅紀","二宮和也","松本潤"] },
  { id:"heisei_morning",     era:"平成", group:"モーニング娘。",     members:["安倍なつみ","後藤真希","石川梨華","吉澤ひとみ"] },
  { id:"heisei_akb48",       era:"平成", group:"AKB48",              members:["前田敦子","大島優子","高橋みなみ"] },
  { id:"heisei_kattun",      era:"平成", group:"KAT-TUN",            members:["亀梨和也","赤西仁","上田竜也"] },

  { id:"heisei_tokio",       era:"平成", group:"TOKIO",              members:["城島茂","国分太一","松岡昌宏"] },
  { id:"heisei_v6",          era:"平成", group:"V6",                 members:["岡田准一","坂本昌行","井ノ原快彦"] },
  { id:"heisei_exile",       era:"平成", group:"EXILE",              members:["ATSUSHI","AKIRA","TAKAHIRO"] },
  { id:"heisei_perfume",     era:"平成", group:"Perfume",            members:["あ〜ちゃん","かしゆか","のっち"] },
  { id:"heisei_kinki",       era:"平成", group:"KinKi Kids",         members:["堂本光一","堂本剛"] },

  { id:"heisei_news",        era:"平成", group:"NEWS",               members:["小山慶一郎","加藤シゲアキ","増田貴久"] },
  { id:"heisei_hsj",         era:"平成", group:"Hey! Say! JUMP",     members:["山田涼介","知念侑李","有岡大貴"] },
  { id:"heisei_egirls",      era:"平成", group:"E-girls",            members:["Ami","Erie","藤井夏恋"] },
  { id:"heisei_flumpool",    era:"平成", group:"flumpool",           members:["山村隆太","阪井一生"] },
  { id:"heisei_greeeen",     era:"平成", group:"GReeeeN",            members:["HIDE","navi"] },

  // ★さらに追加5
  { id:"heisei_aaa",         era:"平成", group:"AAA",                members:["西島隆弘","宇野実彩子"] },
  { id:"heisei_mrchildren",  era:"平成", group:"Mr.Children",        members:["桜井和寿","田原健一"] },
  { id:"heisei_bump",        era:"平成", group:"BUMP OF CHICKEN",     members:["藤原基央","増川弘明"] },
  { id:"heisei_orange",      era:"平成", group:"ORANGE RANGE",        members:["YAMATO","HIROKI"] },
  { id:"heisei_radwimps",    era:"平成", group:"RADWIMPS",            members:["野田洋次郎","桑原彰"] },

  // ===== 令和 =====
  { id:"reiwa_snowman",      era:"令和", group:"Snow Man",
    members:["岩本照","深澤辰哉","ラウール","渡辺翔太","向井康二","阿部亮平","目黒蓮","宮舘涼太","佐久間大介"] },
  { id:"reiwa_sixtones",     era:"令和", group:"SixTONES",
    members:["ジェシー","京本大我","松村北斗","髙地優吾","森本慎太郎","田中樹"] },
  { id:"reiwa_nogizaka46",   era:"令和", group:"乃木坂46",           members:["齋藤飛鳥","白石麻衣","西野七瀬"] },

  { id:"reiwa_hinatazaka46", era:"令和", group:"日向坂46",           members:["小坂菜緒","齊藤京子","加藤史帆"] },
  { id:"reiwa_sakurazaka46", era:"令和", group:"櫻坂46",             members:["森田ひかる","田村保乃","藤吉夏鈴"] },
  { id:"reiwa_niziu",        era:"令和", group:"NiziU",              members:["MAKO","RIMA","NINA"] },
  { id:"reiwa_jo1",          era:"令和", group:"JO1",                members:["川西拓実","白岩瑠姫","佐藤景瑚"] },
  { id:"reiwa_befirst",      era:"令和", group:"BE:FIRST",           members:["SOTA","MANATO","RYUHEI"] },

  { id:"reiwa_ini",          era:"令和", group:"INI",                members:["木村柾哉","西洸人","田島将吾"] },
  { id:"reiwa_travis",       era:"令和", group:"Travis Japan",       members:["松田元太","宮近海斗","七五三掛龍也"] },
  { id:"reiwa_newjeans",     era:"令和", group:"NewJeans",           members:["MINJI","HANNI","DANIELLE"] },
  { id:"reiwa_lesserafim",   era:"令和", group:"LE SSERAFIM",        members:["SAKURA","KAZUHA","CHAEWON"] },
  { id:"reiwa_aespa",        era:"令和", group:"aespa",              members:["KARINA","WINTER","NINGNING"] },

  // ★さらに追加5
  { id:"reiwa_ive",          era:"令和", group:"IVE",                members:["YUJIN","WONYOUNG"] },
  { id:"reiwa_txt",          era:"令和", group:"TOMORROW X TOGETHER", members:["SOOBIN","YEONJUN"] },
  { id:"reiwa_kinggnu",      era:"令和", group:"King Gnu",           members:["常田大希","井口理"] },
  { id:"reiwa_yorushika",    era:"令和", group:"ヨルシカ",            members:["n-buna","suis"] },
  { id:"reiwa_creepy",       era:"令和", group:"Creepy Nuts",        members:["R-指定","DJ松永"] },

  // ===== 令和（追加：ユーザー指定グループ / 重複は除外済み） =====
  { id:"reiwa_naniwadanshi",       era:"令和", group:"なにわ男子",           members:[] },
  { id:"reiwa_number_i",           era:"令和", group:"Number_i",             members:[] },
  { id:"reiwa_andteam",            era:"令和", group:"&TEAM",                members:[] },
  { id:"reiwa_mazzel",             era:"令和", group:"MAZZEL",               members:[] },
  { id:"reiwa_dxteen",             era:"令和", group:"DXTEEN",               members:[] },
  { id:"reiwa_octpath",            era:"令和", group:"OCTPATH",              members:[] },
  { id:"reiwa_milk",               era:"令和", group:"M!LK",                 members:[] },
  { id:"reiwa_ae_group",           era:"令和", group:"Aぇ! group",           members:[] },
  { id:"reiwa_chotokkyo",          era:"令和", group:"超特急（令和で再ブレイク）", members:[] },

  // 【女性グループ】（追加：重複は除外済み）
  { id:"reiwa_me_i",               era:"令和", group:"ME:I",                 members:[] },
  { id:"reiwa_fruits_zipper",      era:"令和", group:"FRUITS ZIPPER",        members:[] },
  { id:"reiwa_equal_love",         era:"令和", group:"=LOVE",                members:[] },
  { id:"reiwa_not_equal_me",       era:"令和", group:"≠ME",                  members:[] },
  { id:"reiwa_nearly_equal_joy",   era:"令和", group:"≒JOY",                 members:[] },
  { id:"reiwa_is_sue",             era:"令和", group:"IS:SUE",               members:[] },
  { id:"reiwa_cutie_street",       era:"令和", group:"CUTIE STREET",         members:[] },
  { id:"reiwa_candy_tune",         era:"令和", group:"CANDY TUNE",           members:[] },
  { id:"reiwa_ilife",              era:"令和", group:"iLiFE!",               members:[] },
  { id:"reiwa_takane_nadeshiko",   era:"令和", group:"高嶺のなでしこ",       members:[] },
  { id:"reiwa_cho_tokimeki",       era:"令和", group:"超ときめき♡宣伝部",   members:[] },
  { id:"reiwa_xg",                 era:"令和", group:"XG",                   members:[] }


];