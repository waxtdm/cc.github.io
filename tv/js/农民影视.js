var rule = {
    author: '风言锋语88',
    title: '爱看农民[优]',
    host: 'https://m.emsdn.cn',
    hostJs: $js.toString(() => {
        print(HOST);
        let html = request(HOST, {headers: {"User-Agent": PC_UA}});
        let src = jsp.pdfh(html, "body&&a:eq(0)&&href") || jsp.pdfh(html, "body&&a:eq(0)&&Text");
        if (src && src.length > 5) {
            print(src);
            if (!src.startsWith('http')) {
                src = 'https://' + src
            }
            print("抓到主页:" + src);
            HOST = src
        }
    }),
    headers: {'User-Agent': 'PC_UA'},
    编码: 'utf-8',
    timeout: 5000,
    homeUrl: '/',
    url: '/vod-list-id-fyfilter.html',
    filter_url: '{{fl.cateId}}-pg-fypage-order--by-{{fl.by or "time"}}-class-0-year-{{fl.year}}-letter-{{fl.letter}}-area-{{fl.area}}-lang-',
    detailUrl: '',
    searchUrl: '/vod-search-pg-fypage-wd-**.html',
    searchable: 1,
    quickSearch: 1,
    filterable: 1,
    class_name: '剧集&电影&综艺&动漫&短剧',
    class_url: '2&1&3&4&26',
    filter_def: {
        1: {cateId: '1'},
        2: {cateId: '2'},
        3: {cateId: '3'},
        4: {cateId: '4'},
        26: {cateId: '26'}
    },
    tab_rename: {
        '播放列表1：（默认）': '🌺风言锋语88🌺+默认',
        '播放列表1：（云播①）': '🌺风言锋语88🌺+云播①',
        '播放列表1：（云播③）': '🌺风言锋语88🌺+云播③',
        '播放列表2：（百度网盘）': '🌺风言锋语88🌺+百度网盘'
    },
    play_parse: true,
    lazy: $js.toString(() => {
        let init_js = `Object.defineProperties(navigator, {platform: {get: () => 'iPhone'}});`;
        input = {
            parse: 1,
            url: input,
            js: `try{location.href = document.querySelectorAll("iframe")[1].src;}catch(err) {}document.querySelector(".line").click()`,
            parse_extra: '&init_script=' + encodeURIComponent(base64Encode(init_js)),
        }
    }),
    limit: 12,
    double: false,
    推荐: 'ul.list_06:has(li) li;*;*;*;*',
    一级: 'ul.list_01 li;a:eq(0)&&title;img&&src;font&&Text;a:eq(0)&&href',
    二级: {
        "title": ".fen&&h1&&Text;.d_z_y:eq(2)&&font&&Text",
        "img": ".lef:eq(-1)&&img&&src",
        "desc": ".d_z_y:eq(-3)&&Text;.d_z_y:eq(-2)&&font&&Text;;.d_z_y:eq(1)&&font&&Text;.d_z_y:eq(0)&&font&&Text",
        "content": ".jjie&&Text",
        "tabs": "h2 span",
        "tab_text": "body&&Text",
        "lists": ".soyurl:eq(#id)&&a",
        "list_text": "body&&Text",
        "list_url": "a&&href"
    },
    搜索: '*',
    filter: {
    "1":[
    {"key":"cateId","name":"类型","value":[
    {"n":"全部","v":"1"},
    {"n":"动作片","v":"5"},
    {"n":"喜剧片","v":"6"},
    {"n":"爱情片","v":"7"},
    {"n":"科幻片","v":"8"},
    {"n":"恐怖片","v":"9"},
    {"n":"剧情片","v":"10"},
    {"n":"战争片","v":"11"},
    {"n":"惊悚片","v":"16"},
    {"n":"奇幻片","v":"17"}
    ]
    },
      
    {"key":"area","name":"地区","value":[
    {"n":"全部","v":""},
    {"n":"大陆","v":"大陆"},
    {"n":"香港","v":"香港"},
    {"n":"台湾","v":"台湾"},
    {"n":"美国","v":"美国"},
    {"n":"韩国","v":"韩国"},
    {"n":"日本","v":"日本"},
    {"n":"泰国","v":"泰国"},
    {"n":"新加坡","v":"新加坡"},
    {"n":"马来西亚","v":"马来西亚"},
    {"n":"印度","v":"印度"},
    {"n":"英国","v":"英国"},
    {"n":"法国","v":"法国"},
    {"n":"加拿大","v":"加拿大"},
    {"n":"西班牙","v":"西班牙"},
    {"n":"俄罗斯","v":"俄罗斯"},
    {"n":"其它","v":"其它"}
    ]
    },
      
    {"key":"year","name":"年份","value":[
    {"n":"全部","v":""},
    {"n":"2024","v":"2024"},
    {"n":"2023","v":"2023"},
    {"n":"2022","v":"2022"},
    {"n":"2021","v":"2021"},
    {"n":"2020","v":"2020"},
    {"n":"2019","v":"2019"},
    {"n":"2018","v":"2018"},
    {"n":"2017","v":"2017"},
    {"n":"2016","v":"2016"},
    {"n":"2015","v":"2015"},
    {"n":"2014","v":"2014"},
    {"n":"2013","v":"2013"},
    {"n":"2012","v":"2012"},
    {"n":"2011","v":"2011"},
    {"n":"2010","v":"2010"}
    ]
    },
      
    {"key":"by","name":"排序","value":[
    {"n":"时间","v":"time"},
    {"n":"人气","v":"hits"},
    {"n":"评分","v":"score"}
    ]
    }
    ],
      
    "2":[
    {"key":"cateId","name":"类型","value":[
    {"n":"全部","v":"2"},
    {"n":"国产剧","v":"12"},
    {"n":"港台泰","v":"13"},
    {"n":"日韩剧","v":"14"},
    {"n":"欧美剧","v":"15"}
    ]
    },
      
    {"key":"area","name":"地区","value":[
    {"n":"全部","v":""},
    {"n":"大陆","v":"大陆"},
    {"n":"香港","v":"香港"},
    {"n":"台湾","v":"台湾"},
    {"n":"美国","v":"美国"},
    {"n":"韩国","v":"韩国"},
    {"n":"日本","v":"日本"},
    {"n":"泰国","v":"泰国"},
    {"n":"新加坡","v":"新加坡"},
    {"n":"马来西亚","v":"马来西亚"},
    {"n":"印度","v":"印度"},
    {"n":"英国","v":"英国"},
    {"n":"法国","v":"法国"},
    {"n":"加拿大","v":"加拿大"},
    {"n":"西班牙","v":"西班牙"},
    {"n":"俄罗斯","v":"俄罗斯"},
    {"n":"其它","v":"其它"}
    ]
    },
      
    {"key":"year","name":"年份","value":[
    {"n":"全部","v":""},
    {"n":"2024","v":"2024"},
    {"n":"2023","v":"2023"},
    {"n":"2022","v":"2022"},
    {"n":"2021","v":"2021"},
    {"n":"2020","v":"2020"},
    {"n":"2019","v":"2019"},
    {"n":"2018","v":"2018"},
    {"n":"2017","v":"2017"},
    {"n":"2016","v":"2016"},
    {"n":"2015","v":"2015"},
    {"n":"2014","v":"2014"},
    {"n":"2013","v":"2013"},
    {"n":"2012","v":"2012"},
    {"n":"2011","v":"2011"},
    {"n":"2010","v":"2010"}
    ]
    },
      
    {"key":"by","name":"排序","value":[
    {"n":"时间","v":"time"},
    {"n":"人气","v":"hits"},
    {"n":"评分","v":"score"}
    ]
    }
    ],
      
    "3":[
    {"key":"area","name":"地区","value":[
    {"n":"全部","v":""},
    {"n":"大陆","v":"大陆"},
    {"n":"香港","v":"香港"},
    {"n":"台湾","v":"台湾"},
    {"n":"美国","v":"美国"},
    {"n":"韩国","v":"韩国"},
    {"n":"日本","v":"日本"},
    {"n":"泰国","v":"泰国"},
    {"n":"新加坡","v":"新加坡"},
    {"n":"马来西亚","v":"马来西亚"},
    {"n":"印度","v":"印度"},
    {"n":"英国","v":"英国"},
    {"n":"法国","v":"法国"},
    {"n":"加拿大","v":"加拿大"},
    {"n":"西班牙","v":"西班牙"},
    {"n":"俄罗斯","v":"俄罗斯"},
    {"n":"其它","v":"其它"}]},
      
    {"key":"year","name":"年份","value":[
    {"n":"全部","v":""},
    {"n":"2024","v":"2024"},	
    {"n":"2023","v":"2023"},
    {"n":"2022","v":"2022"},
    {"n":"2021","v":"2021"},
    {"n":"2020","v":"2020"},
    {"n":"2019","v":"2019"},
    {"n":"2018","v":"2018"},
    {"n":"2017","v":"2017"},
    {"n":"2016","v":"2016"},
    {"n":"2015","v":"2015"},
    {"n":"2014","v":"2014"},
    {"n":"2013","v":"2013"},
    {"n":"2012","v":"2012"},
    {"n":"2011","v":"2011"},
    {"n":"2010","v":"2010"}
    ]
    },
      
    {"key":"by","name":"排序","value":[
    {"n":"时间","v":"time"},
    {"n":"人气","v":"hits"},
    {"n":"评分","v":"score"}
    ]
    }
    ],
      
    "4":[
    {"key":"cateId","name":"类型","value":[
    {"n":"全部","v":"4"},
    {"n":"动漫剧","v":"18"},
    {"n":"动漫片","v":"19"}
    ]
    },
      
    {"key":"area","name":"地区","value":[
    {"n":"全部","v":""},
    {"n":"大陆","v":"大陆"},
    {"n":"香港","v":"香港"},
    {"n":"台湾","v":"台湾"},
    {"n":"美国","v":"美国"},
    {"n":"韩国","v":"韩国"},
    {"n":"日本","v":"日本"},
    {"n":"泰国","v":"泰国"},
    {"n":"新加坡","v":"新加坡"},
    {"n":"马来西亚","v":"马来西亚"},
    {"n":"印度","v":"印度"},
    {"n":"英国","v":"英国"},
    {"n":"法国","v":"法国"},
    {"n":"加拿大","v":"加拿大"},
    {"n":"西班牙","v":"西班牙"},
    {"n":"俄罗斯","v":"俄罗斯"},
    {"n":"其它","v":"其它"}
    ]
    },
      
    {"key":"year","name":"年份","value":[
    {"n":"全部","v":""},
    {"n":"2024","v":"2024"},	
    {"n":"2023","v":"2023"},
    {"n":"2022","v":"2022"},
    {"n":"2021","v":"2021"},
    {"n":"2020","v":"2020"},
    {"n":"2019","v":"2019"},
    {"n":"2018","v":"2018"},
    {"n":"2017","v":"2017"},
    {"n":"2016","v":"2016"},
    {"n":"2015","v":"2015"},
    {"n":"2014","v":"2014"},
    {"n":"2013","v":"2013"},
    {"n":"2012","v":"2012"},
    {"n":"2011","v":"2011"},
    {"n":"2010","v":"2010"}
    ]
    },
      
    {"key":"by","name":"排序","value":[
    {"n":"时间","v":"time"},
    {"n":"人气","v":"hits"},
    {"n":"评分","v":"score"}
    ]
    }
    ]
    }
}