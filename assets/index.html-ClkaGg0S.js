import{_ as i,c as o,b as t,f as a,d as l,e as n,a as r,r as d,o as g}from"./app-Dq8tU_SQ.js";const c={},u={class:"table-of-contents"};function h(m,e){const s=d("router-link"),p=d("RouteLink");return g(),o("div",null,[e[8]||(e[8]=t("h1",{id:"paradigm-reboot",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#paradigm-reboot"},[t("span",null,"Paradigm: Reboot")])],-1)),e[9]||(e[9]=t("p",null,"与 Paradigm: Reboot 相关的功能。",-1)),e[10]||(e[10]=t("hr",null,null,-1)),e[11]||(e[11]=t("p",null,[a("主命令："),t("code",null,"para")],-1)),t("nav",u,[t("ul",null,[t("li",null,[l(s,{to:"#prp-查分"},{default:n(()=>e[0]||(e[0]=[a("PRP 查分")])),_:1})]),t("li",null,[l(s,{to:"#查询歌曲信息"},{default:n(()=>e[1]||(e[1]=[a("查询歌曲信息")])),_:1})]),t("li",null,[l(s,{to:"#查询定数表"},{default:n(()=>e[2]||(e[2]=[a("查询定数表")])),_:1})]),t("li",null,[l(s,{to:"#计算单曲-rating"},{default:n(()=>e[3]||(e[3]=[a("计算单曲 Rating")])),_:1})]),t("li",null,[l(s,{to:"#猜曲绘游戏"},{default:n(()=>e[4]||(e[4]=[a("猜曲绘游戏")])),_:1})]),t("li",null,[l(s,{to:"#开字符游戏"},{default:n(()=>e[5]||(e[5]=[a("开字符游戏")])),_:1})])])]),e[12]||(e[12]=t("h2",{id:"prp-查分",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#prp-查分"},[t("span",null,"PRP 查分")])],-1)),t("p",null,[e[7]||(e[7]=a("主条目：")),l(p,{to:"/plugins/games/paradigm/prp/"},{default:n(()=>e[6]||(e[6]=[a("PRP 查分")])),_:1})]),e[13]||(e[13]=r(`<h2 id="查询歌曲信息" tabindex="-1"><a class="header-anchor" href="#查询歌曲信息"><span>查询歌曲信息</span></a></h2><div class="language-text" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">pr.song &lt;歌曲名称&gt;</span>
<span class="line"></span></code></pre></div><p>可用选项：</p><ul><li><code>--full</code> <code>-f</code> 查询完整信息</li></ul><p>查询指定歌曲的信息和曲绘图片。</p><p><code>&lt;歌曲名称&gt;</code> 可以是歌曲ID、完整的曲名、曲名的一部分或是歌曲别名。需要保证拼写正确。</p><p>默认仅展示关键信息。</p><h2 id="查询定数表" tabindex="-1"><a class="header-anchor" href="#查询定数表"><span>查询定数表</span></a></h2><div class="language-text" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">pr.const &lt;等级&gt;</span>
<span class="line"></span></code></pre></div><p><code>&lt;等级&gt;</code> 可以是标级或者定数。</p><p>无论输入的参数是何种形式，均会展示整个等级范围内的所有谱面。例如 <code>16</code> <code>16+</code> <code>16.5</code> <code>16.9</code> 都表示查询定数在 16.0 与 16.9 之间的谱面。</p><h2 id="计算单曲-rating" tabindex="-1"><a class="header-anchor" href="#计算单曲-rating"><span>计算单曲 Rating</span></a></h2><div class="language-text" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">pr.rt &lt;参数&gt;</span>
<span class="line"></span></code></pre></div><p><code>&lt;参数&gt;</code> 为定数+分数的格式。</p><p>定数支持直接输入定数或输入曲名+难度（参见使用示例），难度可输入 <code>det</code> <code>ivd</code> 或 <code>msv</code>，若不输入则默认为 <code>msv</code>。</p><p>100 万以上的分数支持简写（只保留后四位），例如 <code>1009578</code> 可简写为 <code>9578</code>。</p><p>搜索歌曲的逻辑与 <code>pr.song</code> 相同。</p><p>示例：</p><ul><li><p><code>pr.rt 17.4 9279</code></p><p>计算定数为 17.4、分数为 1009279 时的单曲 Rating。</p></li><li><p><code>pr.rt abyssgazer 9279</code></p><p>计算 Abyssgazer (MASSIVE) 在分数为 1009279 时的单曲 Rating。</p></li><li><p><code>pr.rt abyssgazer ivd 9365</code></p><p>计算 Abyssgazer (INVADED) 在分数为 1009365 时的单曲 Rating。</p></li></ul><h2 id="猜曲绘游戏" tabindex="-1"><a class="header-anchor" href="#猜曲绘游戏"><span>猜曲绘游戏</span></a></h2><div class="language-text" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">pr.guessc</span>
<span class="line"></span></code></pre></div><p>命令别名：<code>prgc</code></p><p>待补充。</p><h2 id="开字符游戏" tabindex="-1"><a class="header-anchor" href="#开字符游戏"><span>开字符游戏</span></a></h2><div class="language-text" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">pr.guessn</span>
<span class="line"></span></code></pre></div><p>命令别名：<code>prgn</code></p><p>待补充。</p>`,27))])}const f=i(c,[["render",h],["__file","index.html.vue"]]),v=JSON.parse('{"path":"/plugins/games/paradigm/","title":"Paradigm: Reboot","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"PRP 查分","slug":"prp-查分","link":"#prp-查分","children":[]},{"level":2,"title":"查询歌曲信息","slug":"查询歌曲信息","link":"#查询歌曲信息","children":[]},{"level":2,"title":"查询定数表","slug":"查询定数表","link":"#查询定数表","children":[]},{"level":2,"title":"计算单曲 Rating","slug":"计算单曲-rating","link":"#计算单曲-rating","children":[]},{"level":2,"title":"猜曲绘游戏","slug":"猜曲绘游戏","link":"#猜曲绘游戏","children":[]},{"level":2,"title":"开字符游戏","slug":"开字符游戏","link":"#开字符游戏","children":[]}],"git":{"updatedTime":1738486238000,"contributors":[{"name":"StarSky919","email":"ss919p@gmail.com","commits":1,"url":"https://github.com/StarSky919"}]},"filePathRelative":"plugins/games/paradigm/index.md"}');export{f as comp,v as data};
