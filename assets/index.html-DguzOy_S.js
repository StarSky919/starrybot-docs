import{_ as s,c as d,b as e,f as a,d as l,e as n,a as o,r,o as p}from"./app-BM8t2T8G.js";const c={},g={class:"table-of-contents"};function u(h,t){const i=r("router-link");return p(),d("div",null,[t[4]||(t[4]=e("h1",{id:"cytoid",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cytoid"},[e("span",null,"Cytoid")])],-1)),t[5]||(t[5]=e("p",null,"与 Cytoid 相关的功能。",-1)),t[6]||(t[6]=e("div",{class:"hint-container warning"},[e("p",{class:"hint-container-title"},"注意"),e("p",null,"由于 Cytoid 的服务器并不稳定，有时会查询失败。此为正常现象。")],-1)),t[7]||(t[7]=e("hr",null,null,-1)),t[8]||(t[8]=e("p",null,[a("主命令："),e("code",null,"ctd")],-1)),e("nav",g,[e("ul",null,[e("li",null,[l(i,{to:"#计算单曲-rating"},{default:n(()=>t[0]||(t[0]=[a("计算单曲 Rating")])),_:1})]),e("li",null,[l(i,{to:"#绑定-cytoid-账号"},{default:n(()=>t[1]||(t[1]=[a("绑定 Cytoid 账号")])),_:1})]),e("li",null,[l(i,{to:"#解绑-cytoid-账号"},{default:n(()=>t[2]||(t[2]=[a("解绑 Cytoid 账号")])),_:1})]),e("li",null,[l(i,{to:"#查询-best-30"},{default:n(()=>t[3]||(t[3]=[a("查询 Best 30")])),_:1})])])]),t[9]||(t[9]=o(`<h2 id="计算单曲-rating" tabindex="-1"><a class="header-anchor" href="#计算单曲-rating"><span>计算单曲 Rating</span></a></h2><div class="language-text" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ctd.rt &lt;等级&gt; &lt;精准度&gt;</span>
<span class="line"></span></code></pre></div><h2 id="绑定-cytoid-账号" tabindex="-1"><a class="header-anchor" href="#绑定-cytoid-账号"><span>绑定 Cytoid 账号</span></a></h2><div class="language-text" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ctd.bind &lt;Cytoid ID&gt;</span>
<span class="line"></span></code></pre></div><h2 id="解绑-cytoid-账号" tabindex="-1"><a class="header-anchor" href="#解绑-cytoid-账号"><span>解绑 Cytoid 账号</span></a></h2><div class="language-text" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ctd.unbind</span>
<span class="line"></span></code></pre></div><h2 id="查询-best-30" tabindex="-1"><a class="header-anchor" href="#查询-best-30"><span>查询 Best 30</span></a></h2><div class="language-text" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ctd.b30 [Cytoid ID]</span>
<span class="line"></span></code></pre></div><p>如果不指定 <code>[Cytoid ID]</code>，会使用已绑定的账号作为查询目标。</p>`,9))])}const y=s(c,[["render",u],["__file","index.html.vue"]]),m=JSON.parse('{"path":"/plugins/games/cytoid/","title":"Cytoid","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"计算单曲 Rating","slug":"计算单曲-rating","link":"#计算单曲-rating","children":[]},{"level":2,"title":"绑定 Cytoid 账号","slug":"绑定-cytoid-账号","link":"#绑定-cytoid-账号","children":[]},{"level":2,"title":"解绑 Cytoid 账号","slug":"解绑-cytoid-账号","link":"#解绑-cytoid-账号","children":[]},{"level":2,"title":"查询 Best 30","slug":"查询-best-30","link":"#查询-best-30","children":[]}],"git":{"updatedTime":1738485801000,"contributors":[{"name":"StarSky919","email":"ss919p@gmail.com","commits":1,"url":"https://github.com/StarSky919"}]},"filePathRelative":"plugins/games/cytoid/index.md"}');export{y as comp,m as data};
