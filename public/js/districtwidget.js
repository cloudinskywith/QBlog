'use strict';

$.fn.districtselector = function (options) {
    var world_country_arr = ['01国内', '91亚洲', '92欧洲', '93大洋洲', '94北美洲', '95南美洲', '96非洲'];

    var world_province_arr = ['2|b|北京', '3|a|安徽', '4|f|福建', '5|g|甘肃', '6|g|广东', '7|g|广西', '8|g|贵州', '9|h|海南', '10|h|河北', '11|h|河南', '12|h|黑龙江', '13|h|湖北', '14|h|湖南', '15|j|吉林', '16|j|江苏', '17|j|江西', '18|l|辽宁', '19|n|内蒙古', '20|n|宁夏', '21|q|青海', '22|s|山东', '23|s|山西', '24|s|陕西', '25|s|上海', '26|s|四川', '27|t|天津', '28|x|西藏', '29|x|新疆', '30|y|云南', '31|z|浙江', '32|z|重庆', '33|x|香港', '34|a|澳门', '35|t|台湾', '913416|h|韩国', '913417|r|日本', '913418|m|蒙古', '913419|c|朝鲜', '913420|f|菲律宾', '913421|y|越南', '913422|l|老挝', '913423|j|柬埔寨', '913424|m|缅甸', '913425|t|泰国', '913426|m|马来西亚', '913427|w|文莱', '913428|x|新加坡', '913429|y|印度尼西亚', '913430|d|东帝汶', '913431|n|尼泊尔', '913432|b|不丹', '913433|m|孟加拉国', '913434|y|印度', '913435|b|巴基斯坦', '913436|s|斯里兰卡', '913437|m|马尔代夫', '913438|h|哈萨克斯坦', '913439|j|吉尔吉斯斯坦', '913440|t|塔吉克斯坦', '913441|w|乌兹别克斯坦', '913442|t|土库曼斯坦', '913443|e|阿富汗', '913444|y|伊拉克', '913445|y|伊朗', '913446|x|叙利亚', '913447|y|约旦', '913448|l|黎巴嫩', '913449|y|以色列', '913450|b|巴勒斯坦', '913451|s|沙特阿拉伯', '913452|b|巴林', '913453|k|卡塔尔', '913454|k|科威特', '913455|e|阿联酋', '913456|e|阿曼', '913457|y|也门', '913458|g|格鲁吉亚', '913459|y|亚美尼亚', '913460|e|阿塞拜疆', '913461|t|土耳其', '913462|s|塞浦路斯', '923463|f|芬兰', '923464|r|瑞典', '923465|n|挪威', '923466|b|冰岛', '923467|d|丹麦', '923468|a|爱沙尼亚', '923469|l|拉脱维亚', '923470|l|立陶宛', '923471|b|白俄罗斯', '923472|e|俄罗斯', '923473|w|乌克兰', '923474|m|摩尔多瓦', '923475|b|波兰', '923476|j|捷克', '923477|s|斯洛伐克', '923478|x|匈牙利', '923479|d|德国', '923480|a|奥地利', '923481|r|瑞士', '923482|l|列支敦士登', '923483|y|英国', '923484|a|爱尔兰', '923485|h|荷兰', '923486|b|比利时', '923487|l|卢森堡', '923488|f|法国', '923489|m|摩纳哥', '923490|l|罗马尼亚', '923491|b|保加利亚', '923492|s|塞尔维亚', '923493|m|马其顿', '923494|e|阿尔巴尼亚', '923495|x|希腊', '923496|s|斯洛文尼亚', '923497|k|克罗地亚', '923498|b|波斯尼亚和墨塞哥维那', '923499|y|意大利', '923500|f|梵蒂冈', '923501|s|圣马力诺', '923502|m|马耳他', '923503|x|西班牙', '923504|p|葡萄牙', '923505|a|安道尔', '943506|m|美国', '943507|j|加拿大', '943508|m|墨西哥', '943509|b|巴哈马', '943510|b|巴拿马', '943511|n|尼加拉瓜', '943512|b|巴巴多斯', '943513|y|牙买加', '943514|h|海地', '943515|w|危地马拉', '943516|g|古巴', '943517|h|洪都拉斯', '943518|g|格林纳达', '943519|g|哥斯达黎加', '943520|d|多米尼加', '943521|s|圣基茨和尼维斯', '943522|s|圣文森特和格林纳丁斯', '943523|t|特立尼达和多巴哥', '943524|a|安提瓜和巴布达', '943525|d|多米尼克国', '943526|b|伯利兹', '943527|s|萨尔瓦多', '943528|s|圣卢西亚', '953529|g|哥伦比亚', '953530|w|委内瑞拉', '953531|g|圭亚那', '953532|s|苏里南', '953533|e|厄瓜多尔', '953534|m|秘鲁', '953535|b|巴西', '953536|b|玻利维亚', '953537|z|智利', '953538|b|巴拉圭', '953539|w|乌拉圭', '953540|e|阿根廷', '933541|a|澳大利亚', '933542|x|新西兰', '933543|b|巴布亚新几内亚', '933544|s|所罗门群岛', '933545|w|瓦努阿图', '933546|m|密克罗尼西亚', '933547|m|马绍尔群岛', '933548|p|帕劳', '933549|n|瑙鲁', '933550|j|基里巴斯', '933551|t|图瓦卢', '933552|s|萨摩亚', '933553|f|斐济群岛', '933554|t|汤加', '933555|k|库克群岛（新）', '933556|g|关岛（美）', '933557|x|新喀里多尼亚（法）', '933558|f|法属波利尼西亚', '933559|p|皮特凯恩岛（英）', '933560|w|瓦利斯与富图纳（法）', '933561|n|纽埃（新）', '933562|t|托克劳（新）', '933563|m|美属萨摩亚', '933564|b|北马里亚纳', '963565|a|埃及', '963566|s|苏丹', '963567|l|利比亚', '963568|t|突尼斯', '963569|e|阿尔及利亚', '963570|m|摩洛哥', '963571|y|亚速尔群岛', '963572|m|马德拉群岛', '963573|a|埃塞俄比亚', '963574|e|厄立特里亚', '963575|s|索马里', '963576|j|吉布提', '963577|k|肯尼亚', '963578|t|坦桑尼亚', '963579|w|乌干达', '963580|l|卢旺达', '963581|b|布隆迪', '963582|s|塞舌尔', '963583|m|毛里塔尼亚', '963584|x|西撒哈拉', '963585|s|塞内加尔', '963586|g|冈比亚', '963587|m|马里', '963588|b|布基纳法索', '963589|j|几内亚', '963590|j|几内亚比绍', '963591|f|佛得角', '963592|s|塞拉利昂', '963593|l|利比里亚', '963594|k|科特迪瓦', '963595|j|加纳', '963596|d|多哥', '963597|b|贝宁', '963598|n|尼日尔', '963599|n|尼日利亚', '963600|j|加那利群岛', '963601|z|乍得', '963602|z|中非', '963603|k|喀麦隆', '963604|c|赤道几内亚', '963605|j|加蓬', '963606|g|刚果', '963607|g|刚果民主共和国', '963608|s|圣多美', '963609|p|普林西比', '963610|z|赞比亚', '963611|a|安哥拉', '963612|j|津巴布韦', '963613|m|马拉维', '963614|m|莫桑比克', '963615|b|博茨瓦纳', '963616|n|纳米比亚', '963617|n|南非', '963618|s|斯威士兰', '963619|l|莱索托', '963620|m|马达加斯加', '963621|k|科摩罗', '963622|m|毛里求斯', '963623|l|留尼汪', '963624|s|圣赫勒拿', '963657|t|土耳其', '963658|d|迪拜'
    /*'913951|null|孟加拉',
     '913952|null|阿曼苏丹国',
     '913953|null|吉尔吉斯共和国',
     '913954|null|亚美尼亚共和国',
     '923955|null|拉托维亚',
     '923956|null|马其他',
     '923957|null|黑山共和国',
     '923958|null|波黑共和国',
     '923959|null|苏格兰王国',
     '933960|null|斐济',
     '933961|null|库克群岛',
     '933962|null|关岛',
     '933963|null|新喀里多尼亚',
     '933964|null|皮特凯恩群岛',
     '933965|null|纽埃',
     '933966|null|托克劳',
     '933967|null|瓦利斯和富图纳群岛',
     '943968|null|多米尼克',
     '943969|null|格陵兰',
     '943970|null|波多黎各',
     '943971|null|安圭拉',
     '943972|null|瓜德罗普',
     '943973|null|阿鲁巴',
     '943974|null|米尼克',
     '943975|null|英属维尔京群岛',
     '943976|null|美属维尔京群岛',
     '943977|null|蒙特塞拉特岛',
     '943978|null|荷属安的列斯',
     '943979|null|特克斯和凯科斯群岛',
     '943980|null|百慕大',
     '943981|null|开曼群岛',
     '953982|null|苏里南共和国',
     '953983|null|巴拉圭共和国',
     '963984|null|圣多美和普林西比',
     '963985|null|阿拉伯撒哈拉',
     '963986|null|刚果共和国',
     '963987|null|南苏丹',*/
    ];

    var world_city_arr = ['36|A|安庆', '37|B|蚌埠', '38|C|巢湖', '39|C|池州', '40|C|滁州', '41|F|阜阳', '42|H|淮北', '43|H|淮南', '44|H|黄山', '45|L|六安', '46|M|马鞍山', '47|X|宿州', '48|T|铜陵', '49|W|芜湖', '50|X|宣城', '51|B|亳州', '52|B|北京', '53|F|福州', '54|L|龙岩', '55|N|南平', '56|N|宁德', '57|P|莆田', '58|Q|泉州', '59|S|三明', '60|S|厦门', '61|Z|漳州', '62|L|兰州', '63|B|白银', '64|D|定西', '65|G|甘南', '66|J|嘉峪关', '67|J|金昌', '68|J|酒泉', '69|L|临夏', '70|L|陇南', '71|P|平凉', '72|Q|庆阳', '73|T|天水', '74|W|武威', '75|Z|张掖', '76|G|广州', '77|S|深圳', '78|C|潮州', '79|D|东莞', '80|F|佛山', '81|H|河源', '82|H|惠州', '83|J|江门', '84|J|揭阳', '85|M|茂名', '86|M|梅州', '87|Q|清远', '88|S|汕头', '89|S|汕尾', '90|S|韶关', '91|Y|阳江', '92|Y|云浮', '93|Z|湛江', '94|Z|肇庆', '95|Z|中山', '96|Z|珠海', '97|N|南宁', '98|G|桂林', '99|B|百色', '100|B|北海', '101|C|崇左', '102|F|防城港', '103|G|贵港', '104|H|河池', '105|H|贺州', '106|L|来宾', '107|L|柳州', '108|Q|钦州', '109|W|梧州', '110|Y|玉林', '111|G|贵阳', '112|A|安顺', '113|B|毕节', '114|L|六盘水', '115|Q|黔东南', '116|Q|黔南', '117|Q|黔西南', '118|T|铜仁', '119|Z|遵义', '120|H|海口', '121|S|三亚', '122|B|白沙', '123|B|保亭', '124|C|昌江', '125|C|澄迈县', '126|D|定安县', '127|D|东方', '128|L|乐东', '129|L|临高县', '130|L|陵水', '131|Q|琼海', '132|Q|琼中', '133|T|屯昌县', '134|W|万宁', '135|W|文昌', '136|W|五指山', '137|D|儋州', '138|S|石家庄', '139|B|保定', '140|C|沧州', '141|C|承德', '142|H|邯郸', '143|H|衡水', '144|L|廊坊', '145|Q|秦皇岛', '146|T|唐山', '147|X|邢台', '148|Z|张家口', '149|Z|郑州', '150|L|洛阳', '151|K|开封', '152|A|安阳', '153|H|鹤壁', '154|J|济源', '155|J|焦作', '156|N|南阳', '157|P|平顶山', '158|S|三门峡', '159|S|商丘', '160|X|新乡', '161|X|信阳', '162|X|许昌', '163|Z|周口', '164|Z|驻马店', '165|L|漯河', '166|P|濮阳', '167|H|哈尔滨', '168|D|大庆', '169|D|大兴安岭', '170|H|鹤岗', '171|H|黑河', '172|J|鸡西', '173|J|佳木斯', '174|M|牡丹江', '175|Q|七台河', '176|Q|齐齐哈尔', '177|S|双鸭山', '178|S|绥化', '179|Y|伊春', '180|W|武汉', '181|X|仙桃', '182|E|鄂州', '183|H|黄冈', '184|H|黄石', '185|J|荆门', '186|J|荆州', '187|Q|潜江', '188|S|神农架林区', '189|S|十堰', '190|S|随州', '191|T|天门', '192|X|咸宁', '193|X|襄樊', '194|X|孝感', '195|Y|宜昌', '196|E|恩施', '197|C|长沙', '198|Z|张家界', '199|C|常德', '200|C|郴州', '201|H|衡阳', '202|H|怀化', '203|L|娄底', '204|S|邵阳', '205|X|湘潭', '206|X|湘西', '207|Y|益阳', '208|Y|永州', '209|Y|岳阳', '210|Z|株洲', '211|C|长春', '212|J|吉林', '213|B|白城', '214|B|白山', '215|L|辽源', '216|S|四平', '217|S|松原', '218|T|通化', '219|Y|延边', '220|N|南京', '221|S|苏州', '222|W|无锡', '223|C|常州', '224|H|淮安', '225|L|连云港', '226|N|南通', '227|X|宿迁', '228|T|泰州', '229|X|徐州', '230|Y|盐城', '231|Y|扬州', '232|Z|镇江', '233|N|南昌', '234|F|抚州', '235|G|赣州', '236|J|吉安', '237|J|景德镇', '238|J|九江', '239|P|萍乡', '240|S|上饶', '241|X|新余', '242|Y|宜春', '243|Y|鹰潭', '244|S|沈阳', '245|D|大连', '246|A|鞍山', '247|B|本溪', '248|C|朝阳', '249|D|丹东', '250|F|抚顺', '251|F|阜新', '252|H|葫芦岛', '253|J|锦州', '254|L|辽阳', '255|P|盘锦', '256|T|铁岭', '257|Y|营口', '258|H|呼和浩特', '259|E|阿拉善盟', '260|B|巴彦淖尔盟', '261|B|包头', '262|C|赤峰', '263|E|鄂尔多斯', '264|H|呼伦贝尔', '265|T|通辽', '266|W|乌海', '267|W|乌兰察布市', '268|X|锡林郭勒盟', '269|X|兴安盟', '270|Y|银川', '271|G|固原', '272|S|石嘴山', '273|W|吴忠', '274|Z|中卫', '275|X|西宁', '276|G|果洛', '277|H|海北', '278|H|海东', '279|H|海南', '280|H|海西', '281|H|黄南', '282|Y|玉树', '283|J|济南', '284|Q|青岛', '285|B|滨州', '286|D|德州', '287|D|东营', '288|H|菏泽', '289|J|济宁', '290|L|莱芜', '291|L|聊城', '292|L|临沂', '293|R|日照', '294|T|泰安', '295|W|威海', '296|W|潍坊', '297|Y|烟台', '298|Z|枣庄', '299|Z|淄博', '300|T|太原', '301|C|长治', '302|D|大同', '303|J|晋城', '304|J|晋中', '305|L|临汾', '306|L|吕梁', '307|S|朔州', '308|X|忻州', '309|Y|阳泉', '310|Y|运城', '311|X|西安', '312|A|安康', '313|B|宝鸡', '314|H|汉中', '315|S|商洛', '316|T|铜川', '317|W|渭南', '318|X|咸阳', '319|Y|延安', '320|Y|榆林', '321|S|上海', '322|C|成都', '323|M|绵阳', '324|E|阿坝', '325|B|巴中', '326|D|达州', '327|D|德阳', '328|G|甘孜', '329|G|广安', '330|G|广元', '331|L|乐山', '332|L|凉山', '333|M|眉山', '334|N|南充', '335|N|内江', '336|P|攀枝花', '337|S|遂宁', '338|Y|雅安', '339|Y|宜宾', '340|Z|资阳', '341|Z|自贡', '342|L|泸州', '343|T|天津', '344|L|拉萨', '345|E|阿里', '346|C|昌都', '347|L|林芝', '348|N|那曲', '349|R|日喀则', '350|S|山南', '351|W|乌鲁木齐', '352|E|阿克苏', '353|E|阿拉尔', '354|B|巴音郭楞', '355|B|博尔塔拉', '356|C|昌吉', '357|H|哈密', '358|H|和田', '359|K|喀什', '360|K|克拉玛依', '361|K|克孜勒苏', '362|S|石河子', '363|T|图木舒克', '364|T|吐鲁番', '365|W|五家渠', '366|Y|伊犁', '367|K|昆明', '368|N|怒江', '369|P|普洱', '370|L|丽江', '371|B|保山', '372|C|楚雄', '373|D|大理', '374|D|德宏', '375|D|迪庆', '376|H|红河', '377|L|临沧', '378|Q|曲靖', '379|W|文山', '380|X|西双版纳', '381|Y|玉溪', '382|Z|昭通', '383|H|杭州', '384|H|湖州', '385|J|嘉兴', '386|J|金华', '387|L|丽水', '388|N|宁波', '389|S|绍兴', '390|T|台州', '391|W|温州', '392|Z|舟山', '393|Q|衢州', '394|Z|重庆', '395|X|香港', '396|A|澳门', '397|T|台湾', '3401|H|合肥', '4221|S|首尔', '4222|F|釜山', '4223|Q|庆州', '4224|G|光州', '4225|J|济州岛', '4226|L|佬沃', '4227|M|马尼拉', '4228|C|长滩岛', '4229|S|宿雾', '4230|B|巴拉望', '4231|Z|札幌', '4232|C|长崎', '4233|S|神户', '4234|J|京都', '4235|D|大阪', '4236|M|名古屋', '4237|D|东京', '4238|C|冲绳', '4239|S|斯里巴加湾市', '4240|H|河内', '4241|H|海防', '4242|S|顺化', '4243|H|胡志明市', '4244|H|会安', '4245|Y|芽庄', '4246|L|兰卡威', '4247||槟城', '4248|R|热浪岛', '4249|J|吉隆坡', '4250|M|马六甲', '4251|S|沙捞越', '4252|S|沙巴', '4253|T|停泊岛', '4254|Y|雅加达', '4255|M|民丹岛', '4256|B|巴厘岛', '4257|L|龙目岛', '4258|R|日惹', '4259|W|万隆', '4260|S|圣淘沙', '4261|X|新加坡', '4262|X|西哈努克', '4263||暹粒吴哥窟', '4264|J|金边', '4265|Q|清莱', '4266|Q|清迈', '4267|M|曼谷', '4268|B|芭堤雅', '4269|P|普吉岛', '4270|H|华欣、七岩', '4271|S|苏梅岛', '4272|J|甲米', '4273|P|皮皮岛', '4274|H|华欣七岩', '4275|Y|仰光', '4276|M|曼德勒', '4277|P|蒲甘', '4278|Y|茵莱湖', '4279|K|科伦坡', '4280|X|新德里', '4281|Z|斋普尔', '4282|A|阿格拉', '4283|K|克久拉霍', '4284|M|孟买', '4285|G|瓜里尔', '4286|J|加尔各答',
    //'4287||222',
    '4288|B|博卡拉', '4289|J|加德满都', '4290|Q|奇旺', '4291|M|马累', '4292|K|卡曼都岛', '4293|A|安曼', '4294|Y|亚喀巴', '4295|Y|伊尔比德', '4296|D|迪拜', '4297|L|琅勃拉邦', '4298|W|万象',
    //'4299|C|城市',
    '4300|A|爱丁堡', '4301|B|巴斯', '4302|B|北爱尔兰', '4303|G|格拉斯哥', '4304|J|剑桥', '4305|L|伦敦', '4306|M|曼彻斯特', '4307|N|牛津', '4308|Y|约克', '4309|B|贝尔法斯特', '4310|B|巴黎', '4311|B|波尔多', '4312||戛纳', '4313|K|卡尔卡松', '4314|L|里昂', '4315|M|马赛', '4316|N|尼斯', '4317|P|普罗旺斯埃克斯', '4318|D|第戎', '4319|D|大溪地', '4320|S|斯特拉斯堡', '4321|X|夏慕尼', '4322|B|巴塞罗那', '4323|G|格拉纳达', '4324|M|马德里', '4325|S|塞维利亚', '4326|W|瓦伦西亚', '4327|B|巴斯克', '4328|K|科尔多瓦', '4329|J|加那利群岛', '4330|L|里斯本', '4331|D|都柏林', '4332|L|雷克亚未克', '4333|A|阿姆斯特丹', '4334|H|海牙', '4335|L|鹿特丹', '4336|W|乌特勒支', '4337|M|马斯特里赫特', '4338|B|布鲁塞尔', '4339|A|安特卫普', '4340|B|伯尔尼', '4341|Y|因特拉肯', '4342|S|苏黎世', '4343|S|沙芙豪森', '4344|R|日内瓦', '4345|M|蒙特勒', '4346|L|洛桑', '4347|L|卢塞恩', '4348|C|采尔马特', '4349|L|卢加诺', '4350|B|柏林', '4351|F|法兰克福', '4352|H|汉堡', '4353|K|科隆', '4354|M|慕尼黑', '4355|H|汉诺威', '4356|L|莱比锡', '4357|B|卑尔根', '4358|A|奥斯陆', '4359|S|斯德哥尔摩', '4360|H|赫尔辛基', '4361|L|罗凡涅米', '4362|B|布拉格', '4363|Y|茵斯布鲁克', '4364|S|萨尔茨堡', '4365|H|哈尔施塔特', '4366|G|格拉茨', '4367|W|维也纳', '4368|B|布达佩斯', '4369|L|罗马', '4370|W|威尼斯', '4371|M|米兰', '4372|F|佛罗伦萨', '4373|N|那不勒斯', '4374|P|庞贝', '4375|W|维罗纳', '4376|M|蒙特卡蒂尼', '4377|R|热那亚', '4378|A|奥林匹亚', '4379|Y|雅典', '4380|M|米科诺斯岛', '4381|B|波罗奔尼萨半岛', '4382|B|波罗斯岛', '4383|S|圣托里尼岛', '4384|M|莫斯科', '4385|S|圣彼得堡', '4386|S|苏滋达里', '4387|F|弗拉基米尔', '4388|H|海参崴', '4389|Y|伊尔库茨克', '4390|B|贝加尔湖', '4391|A|奥利洪岛', '4392|G|哥本哈根', '4393|W|瓦莱塔', '4394|T|土耳其', '4395|A|阿德莱德', '4396|B|布里斯班', '4397|F|弗里曼特尔', '4398|H|黄金海岸', '4399|K|凯恩斯', '4400|K|堪培拉', '4401|M|墨尔本', '4402||珀斯', '4403|X|悉尼', '4404|B|北领地', '4405|S|苏瓦', '4406|N|南迪', '4407|A|奥克兰', '4408|H|皇后镇', '4409|H|惠灵顿', '4410|J|基督城', '4411|L|罗托鲁瓦', '4412|D|但尼丁', '4413|B|波士顿', '4414|N|纽约', '4415|H|华盛顿', '4416|J|旧金山', '4417|L|拉斯维加斯', '4418|L|洛杉矶', '4419|X|夏威夷', '4420|S|塞班岛', '4421|X|夏威夷群岛', '4422|X|西雅图', '4423|Z|芝加哥', '4424|M|迈阿密', '4425||渥太华', '4426|W|温哥华', '4427|W|维多利亚', '4428|M|蒙特利尔', '4429|D|多伦多', '4430|L|利马市', '4431|L|利马', '4432|M|马丘比丘', '4433|B|巴西利亚', '4434|L|里约热内卢', '4435|F|复活节岛', '4436|B|布宜诺斯艾利', '4437|A|阿斯旺', '4438|A|埃德夫', '4439|H|红海沿岸', '4440|K|开罗', '4441|L|卢克索', '4442|Y|亚历山大', '4443|Y|伊斯那', '4444|M|马赛马拉', '4445|M|蒙巴萨', '4446|N|内罗毕', '4447|N|纳库鲁', '4448|A|阿布戴尔', '4449|A|安波塞利', '4450|B|比勒陀利亚', '4451|K|开普敦', '4452|T|太阳城', '4453|Y|约翰内斯堡'];

    var defaults = {
        search: ".destination-input",
        tags: ".destination-tags",
        distname: 'district[]',
        stockdata: "",
        showproposal: true,
        selecorFuntion: function selecorFuntion(id, name, option) {
            var $this = $(this);
            var tags = defaults.tags.substring(1);
            if (!$this.hasClass("cur")) {
                var box = option.district,
                    _offset = box.offset(),
                    dom = '<span class="' + tags + '" data-id="' + id + '" data-city="' + name + '">' + name + '<i class="close"></i><input type="hidden" name="' + defaults.distname + '" value="' + id + '"></span>';

                defaults.district.find(option.search).val("").before(dom);

                $this.addClass("cur");
            }
        }
    };

    defaults = $.extend({}, defaults, options);

    function renderdistrictnav() {
        var category_arr = ['ABCD', 'EFGH', 'JKLM', 'NPQR', 'STWX', 'YZ'];
        i = 0, len = category_arr.length, dom = "";

        for (i; i < len; i++) {
            var name = category_arr[i];
            dom += "<li class='nav-item' data-name='" + name + "'>" + name + "</li>";
        }

        defaults.district_box.find(".district-nav").html(dom).off().on("click", ".nav-item", function () {
            var $this = $(this),
                data_name = $this.data("name");

            $this.addClass("cur").siblings().removeClass("cur");

            rendersubject(data_name);
        });

        defaults.district_box.find(".nav-item").eq(0).trigger("click");
    }

    function rendersidebar() {
        var dom = "",
            box = defaults.district_box.find(".district-tabcont");

        dom = "<li class='sidebar-item cur'>国内</li><li class='sidebar-item'>境外</li>";

        defaults.district_box.find(".district-sidebar").html(dom).off().on("click", "li", function () {
            var $this = $(this),
                index = $this.index();

            $this.addClass("cur").siblings().removeClass("cur");
            box.eq(index).show().siblings(".district-tabcont").hide();
        });
    }

    function rendersubject(category_name) {
        var category_arr = category_name.split(''),
            len = world_city_arr.length,
            city;

        createreference(category_arr);

        for (var i = 0; i < len; i++) {
            city = world_city_arr[i].split("|");

            if (category_name.indexOf(city[1]) < 0) {
                continue;
            }

            addcityitem(city);
        }

        defaults.district_box.find(".city-item").off().on("click", function () {
            var $this = $(this),
                city_id = $(this).data("id"),
                city_name = $(this).data("city");

            defaults.selecorFuntion.apply(this, [city_id, city_name, defaults]);
            selectChoose();
        });
    }

    function addcityitem(city_arr) {
        var city_box = defaults.district_box.find(".district-tabcont"),
            cur_city = "";

        if (defaults.choosed[city_arr[0]] == city_arr[2]) {
            cur_city += " cur";
        }

        //if (city_arr[0].substring(0, 2) < 90) {
        if (city_arr[0].substring(0, 3) < 422) {
            city_box.eq(0).find("[data-reference='" + city_arr[1] + "']").append("<a href='javascript:;' class='city-item" + cur_city + "' data-id='" + city_arr[0] + "' data-city='" + city_arr[2] + "'>" + city_arr[2] + "</a>");
        } else {
            city_box.eq(1).find("[data-reference='" + city_arr[1] + "']").append("<a href='javascript:;' class='city-item" + cur_city + "' data-id='" + city_arr[0] + "' data-city='" + city_arr[2] + "'>" + city_arr[2] + "</a>");
        }
    }

    function createreference(category_arr) {
        var reference_arr = category_arr,
            reference_dom = "",
            i = 0,
            len = reference_arr.length;

        for (i; i < len; i++) {
            reference_dom += "<div class='province-c'>" + "<div class='province-t'>" + reference_arr[i] + "</div>" + "<div class='province-l' data-reference='" + reference_arr[i] + "'></div>" + "</div>";
        }

        defaults.district_box.find(".district-tabcont").html(reference_dom);
    }

    function searchdistrict(data, value) {
        var data_arr = data.msg,
            len = data_arr.length,
            dom = "<div class='search-title'>" + value + " 若需缩小范围，请输入更多信息.</div>" + "<ul class='search-list'></ul>";

        defaults.district_box.find(".district-wrap").hide();
        defaults.district_box.find(".search-wrap").html(dom).show();

        if (len) {
            searchrendering(data_arr);
        } else {
            defaults.district_box.find(".search-list").html("<li class='tips'>没有搜索到目的地</li>");
        }
    }

    function searchrendering(data_arr) {
        var len = data_arr.length;

        if (len < 10) {
            createsearchDOM(data_arr);
        } else {
            createsearchpage(data_arr);
        }
    }

    function createsearchDOM(data_arr) {
        var len = data_arr.length,
            i = 0,
            dom = "";

        for (var i = 0; i < len; i++) {

            var cur_city = "";
            if (defaults.choosed[data_arr[i].zone_id] == data_arr[i].CN) {
                cur_city += " cur";
            }

            dom += "<li class='search-item" + cur_city + "' data-id='" + data_arr[i].zone_id + "' data-province='" + data_arr[i].province + "' data-city='" + data_arr[i].CN + "'>" + data_arr[i].CN + "," + data_arr[i].province + "</li>";
        }

        defaults.district_box.find(".search-list").html(dom).off().on("click", ".search-item", function () {
            var $this = $(this),
                city_id = $(this).data("id"),
                city_name = $(this).data("city");

            defaults.selecorFuntion.apply(this, [city_id, city_name, defaults]);
            selectChoose();
        });
        keyAction();
    }
    function keyAction() {
        // 键盘选取
        var key_index = -1;
        var searchItem = defaults.district_box.find('.search-item');
        var sLength = searchItem.length;
        document.onkeyup = function (e) {
            var e = e || window.event;
            // 往下选择
            if (e.keyCode == 40) {
                key_index += 1;
                key_index = key_index % sLength;
                searchItem.eq(key_index).addClass('hover').siblings().removeClass('hover');
            };
            // 往上选择
            if (e.keyCode == 38) {
                if (key_index == -1) key_index = 0;
                key_index -= 1;
                key_index = key_index % sLength;
                if (key_index < 0) {
                    key_index += sLength;
                };
                searchItem.eq(key_index).addClass('hover').siblings().removeClass('hover');
            };
            // enter键选择
            if (e.keyCode == 13) {
                if (searchItem.eq(key_index).hasClass('hover')) searchItem.eq(key_index).trigger('click');
            };
        };
    }
    function createsearchpage(data_arr) {
        var arr = data_arr,
            len = data_arr.length,
            page_num = len % 10 > 0 ? len / 10 + 1 : len / 10,

        //dom = "<div class='search-page'><i class='prev'>上一页</i><i class='next'>下一页</i></div>",
        dom = '',
            wrap = defaults.district_box.find(".search-wrap"),
            curIndex = 0;

        createsearchDOM(arr.slice(0, 10));

        wrap.append(dom).off().on("click", "i", function () {
            var $this = $(this);

            if ($this.hasClass("prev") && curIndex > 0) {
                curIndex--;
            }

            if ($this.hasClass("next") && curIndex < page_num - 2) {
                curIndex++;
            }

            var cardinal = curIndex * 10;

            createsearchDOM(arr.slice(0 + cardinal, 10 + cardinal));
        });
    }

    function selectChoose() {
        var $choosed = defaults.district.find(defaults.tags);

        defaults.choosed = {};
        $choosed.each(function () {
            var self = $(this),
                data_id = $(this).data("id"),
                data_city = $(this).data("city");

            defaults.choosed[data_id] = data_city;
        });
    }

    function createstock() {
        var stock = defaults.stockdata,
            dom = "<div class='district-stock'><p><strong>常用地点：</strong>";

        if (stock) {
            stock = JSON.parse(stock);

            for (var i = 0; i < stock.length; i++) {

                var cur_city = "";

                if (defaults.choosed[stock[i].zone_id] == stock[i].CN) {
                    cur_city += " cur";
                }
                dom += "<a href='javascript:;' class='stock-item" + cur_city + "' data-id='" + stock[i].zone_id + "' data-city='" + stock[i].CN + "'>" + stock[i].CN + "</a>";
            }

            dom += "</p></div>";
            defaults.district_box.find(".district-tips").after(dom);

            defaults.district_box.find(".stock-item").off().on("click", function () {

                var $this = $(this),
                    city_id = $(this).data("id"),
                    city_name = $(this).data("city");

                defaults.selecorFuntion.apply(this, [city_id, city_name, defaults]);
                selectChoose();
            });
        }
    }

    var toLoadData = function () {

        var timeId = 0;

        return function (data, value) {
            if (timeId) {
                clearTimeout(timeId);
                timeId = 0;
            }

            if (value) {
                timeId = setTimeout(function () {
                    $.ajax({
                        type: "post",
                        url: "/city/search-city",
                        data: data,
                        dataType: "json",
                        success: function success(data) {
                            searchdistrict(data, value);
                        }
                    });
                }, 500);
            } else {
                defaults.district_box.find(".district-wrap").show();
                defaults.district_box.find(".search-wrap").hide();
            }
        };
    }();

    return this.each(function () {
        var $this = $(this),
            num = setTimeout(function () {}, 1),
            ID = "district" + num;
        // _offset = $this.offset();
        if (defaults.showproposal) {
            dom = "<div class='mod-district-box' data-id=" + ID + ">" + "<div class='district-wrap'>" + "<div class='district-tips'>支持中文，拼音搜索城市</div>" + "<ul class='district-nav'></ul>" + "<div class='district-cont'>" + "<ul class='district-sidebar'></ul>" + "<div class='district-tabcont'></div>" + "<div class='district-tabcont' style='display:none'></div>" + "</div></div><div class='search-wrap'></div>" + "</div>";
        } else {
            dom = "<div class='mod-district-box' data-id=" + ID + ">" + "<div class='district-wrap'>" + "<div class='district-tips'>支持中文，拼音搜索城市</div>" + "</div><div class='search-wrap'></div>" + "</div>";
        };

        $("body").append(dom);

        defaults.district = $this;

        defaults.district_box = $("[data-id='" + ID + "']");

        defaults.searchSelector = $this.find(defaults.search);

        selectChoose();

        if (defaults.showproposal) {
            renderdistrictnav();
            rendersidebar();
            createstock();
        }

        $this.refdistrict = function () {
            selectChoose();
            renderdistrictnav();
        };

        defaults.searchSelector.on("keyup", function (e) {
            // 上下选择键时不变
            if (e.keyCode == 38 || e.keyCode == 40 || e.keyCode == 13) return;
            var $this = $(this),
                value = $this.val(),
                data = {};
            data.keyword = value;
            toLoadData(data, value);
        });

        $("body,html").on("click", function (event) {
            _offset = $this.offset();
            // event.stopPropagation();
            if (!defaults.district_box.is(event.target) && !defaults.searchSelector.is(event.target) && defaults.district_box.has(event.target).length === 0) {
                defaults.district_box.hide();
                defaults.district_box.find(".district-wrap").show();
                defaults.district_box.find(".search-wrap").hide();
            } else {
                defaults.district_box.css({
                    "position": "absolute",
                    "top": _offset.top + $this.outerHeight() - 1,
                    "left": _offset.left,
                    "width": $this.outerWidth()
                }).show();
            }
        });

        $this.on("click", "i.close", function () {
            var $this = $(this),
                $thisP = $this.parent(),
                data_id = $thisP.data("id");

            $thisP.remove();
            $("[data-id='" + data_id + "']").removeClass("cur");
            selectChoose();
        });
    });
};