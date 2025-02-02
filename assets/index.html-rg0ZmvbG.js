import{_ as c,c as r,b as l,f as t,d as a,e as s,a as n,r as i,o as u}from"./app-BM8t2T8G.js";const g={},h={class:"table-of-contents"};function x(y,e){const d=i("router-link"),p=i("RouteLink"),o=i("Badge");return u(),r("div",null,[e[14]||(e[14]=l("h1",{id:"cytus-ii",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#cytus-ii"},[l("span",null,"Cytus II")])],-1)),e[15]||(e[15]=l("p",null,"与 Cytus II 相关的功能。",-1)),e[16]||(e[16]=l("hr",null,null,-1)),e[17]||(e[17]=l("p",null,[t("主命令："),l("code",null,"cy")],-1)),l("nav",h,[l("ul",null,[l("li",null,[a(d,{to:"#cytus-ii-竞技场"},{default:s(()=>e[0]||(e[0]=[t("Cytus II 竞技场")])),_:1})]),l("li",null,[a(d,{to:"#查询歌曲信息"},{default:s(()=>e[1]||(e[1]=[t("查询歌曲信息")])),_:1})]),l("li",null,[a(d,{to:"#查询歌曲别名"},{default:s(()=>e[2]||(e[2]=[t("查询歌曲别名")])),_:1})]),l("li",null,[a(d,{to:"#查询定数表"},{default:s(()=>e[3]||(e[3]=[t("查询定数表")])),_:1})]),l("li",null,[a(d,{to:"#物量查谱"},{default:s(()=>e[4]||(e[4]=[t("物量查谱")])),_:1})]),l("li",null,[a(d,{to:"#查询最新版本"},{default:s(()=>e[5]||(e[5]=[t("查询最新版本")])),_:1})]),l("li",null,[a(d,{to:"#计算小p数量"},{default:s(()=>e[6]||(e[6]=[t("计算小p数量")])),_:1})]),l("li",null,[a(d,{to:"#计算-tp-值"},{default:s(()=>e[7]||(e[7]=[t("计算 TP 值")])),_:1})]),l("li",null,[a(d,{to:"#计算谱面物量"},{default:s(()=>e[8]||(e[8]=[t("计算谱面物量")])),_:1})]),l("li",null,[a(d,{to:"#随机选歌"},{default:s(()=>e[9]||(e[9]=[t("随机选歌")])),_:1})]),l("li",null,[a(d,{to:"#猜曲绘游戏"},{default:s(()=>e[10]||(e[10]=[t("猜曲绘游戏")])),_:1})]),l("li",null,[a(d,{to:"#开字符游戏"},{default:s(()=>e[11]||(e[11]=[t("开字符游戏")])),_:1})])])]),e[18]||(e[18]=l("h2",{id:"cytus-ii-竞技场",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#cytus-ii-竞技场"},[l("span",null,"Cytus II 竞技场")])],-1)),l("p",null,[e[13]||(e[13]=t("主条目：")),a(p,{to:"/plugins/games/cytus2/arena/"},{default:s(()=>e[12]||(e[12]=[t("Cytus II 竞技场")])),_:1})]),e[19]||(e[19]=n(`<h2 id="查询歌曲信息" tabindex="-1"><a class="header-anchor" href="#查询歌曲信息"><span>查询歌曲信息</span></a></h2><div class="language-text" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">cy.song &lt;歌曲名称&gt;</span>
<span class="line"></span></code></pre></div><p>查询指定歌曲的信息和曲绘图片。</p><p><code>&lt;歌曲名称&gt;</code> 可以是歌曲ID、完整的曲名、曲名的一部分或是歌曲别名。需要保证拼写正确。</p><h2 id="查询歌曲别名" tabindex="-1"><a class="header-anchor" href="#查询歌曲别名"><span>查询歌曲别名</span></a></h2><div class="language-text" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">cy.alias &lt;歌曲名称&gt;</span>
<span class="line"></span></code></pre></div><p>查询指定歌曲的别名。</p><p>参数同 <code>cy.song</code>。</p><h2 id="查询定数表" tabindex="-1"><a class="header-anchor" href="#查询定数表"><span>查询定数表</span></a></h2><div class="language-text" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">cy.const &lt;参数&gt;</span>
<span class="line"></span></code></pre></div><p>查询指定条件下的谱面定数表。</p><p><code>&lt;参数&gt;</code> 可以是以下类型：</p><ul><li>官方标级：例如 <code>14</code></li><li>谱面定数：例如 <code>15.2</code></li><li>版本号：格式为 <code>X.X.X</code></li><li>免费：<code>free</code> / <code>免费</code></li><li>全部：<code>all</code> / <code>全部</code></li></ul><p>当 <code>&lt;参数&gt;</code> 是谱面定数时，会额外展示相邻定数的谱面。</p><p>当 <code>&lt;参数&gt;</code> 是版本号时，可以用 <code>X</code> 代替数字，例如 <code>5.0.X</code> 表示查询所有 5.0 至 5.1 版本 (不包括 5.1) 中的谱面。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>如果你想查询定数为 15.0 的谱面，请输入 <code>15.0</code> 而非 <code>15</code>。后者会被解析为官方标级。</p><p>如果你想查询 4.0 版本中的谱面，请输入 <code>4.0.0</code> 而非 <code>4.0</code>。后者会被解析为谱面定数。</p></div><h2 id="物量查谱" tabindex="-1"><a class="header-anchor" href="#物量查谱"><span>物量查谱</span></a></h2><div class="language-text" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">cy.notes &lt;物量&gt; [最高物量]</span>
<span class="line"></span></code></pre></div><p>查询指定物量的谱面。</p><p>如果提供了 <code>[最高物量]</code>，则会以 <code>&lt;物量&gt;</code> 和 <code>[最高物量]</code> 作为区间，展示所有物量在此区间内的谱面。</p><h2 id="查询最新版本" tabindex="-1"><a class="header-anchor" href="#查询最新版本"><span>查询最新版本</span></a></h2>`,21)),l("p",null,[a(o,{type:"danger",text:"已移除",vertical:"middle"})]),e[20]||(e[20]=n(`<div class="language-text" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">cy.version</span>
<span class="line"></span></code></pre></div><p>联网查询游戏的最新版本，数据来自 TapTap 国区、App Store 大陆区和台区。</p><h2 id="计算小p数量" tabindex="-1"><a class="header-anchor" href="#计算小p数量"><span>计算小p数量</span></a></h2><div class="language-text" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">cy.calc &lt;TP&gt; &lt;PERFECT&gt; [GOOD] [BAD] [MISS]</span>
<span class="line"></span></code></pre></div><p>命令别名：<code>cyc</code></p><p>根据结算时的 TP 值和各级判定的数量计算未显示的小p数量。</p><p>TP 值的小数点和结尾的 0 可省去。</p><p>以下几种写法完全相同：</p><ul><li><p><code>cy.calc 99.94 1772 1 0 0</code></p></li><li><p><code>cy.calc 99.94 1772 1</code></p></li><li><p><code>cy.calc 9994 1772 1</code></p></li></ul><h2 id="计算-tp-值" tabindex="-1"><a class="header-anchor" href="#计算-tp-值"><span>计算 TP 值</span></a></h2><div class="language-text" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">cy.tp &lt;C.PERFECT&gt; &lt;PERFECT&gt; [GOOD] [BAD] [MISS]</span>
<span class="line"></span></code></pre></div><p>根据结算时各级判定的数量计算 TP 值。</p><p>此命令主要用于在 Master 模式结算时计算非 Master 模式下的 TP 值，此时 <code>&lt;C.PERFECT&gt;</code> 的值为 MASTER 和 C.PERFECT 的数量之和。</p><h2 id="计算谱面物量" tabindex="-1"><a class="header-anchor" href="#计算谱面物量"><span>计算谱面物量</span></a></h2><div class="language-text" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">cy.combo &lt;最高连击数&gt; &lt;分数&gt;</span>
<span class="line"></span></code></pre></div><p>根据谱面中某一时间点的最高连击数和分数计算该谱面的物量。</p><p>需要保证该时间点前所有音符判定均为 PERFECT 及以上，即 COMBO 数字为金色。</p><h2 id="随机选歌" tabindex="-1"><a class="header-anchor" href="#随机选歌"><span>随机选歌</span></a></h2><div class="language-text" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">cy.random [...参数]</span>
<span class="line"></span></code></pre></div><p>命令别名：<code>cyr</code></p><p>可以指定定数最大值 / 最小值 / 范围、难度阶级、角色和是否免费。</p><p>指定定数时是否加小数会影响规则。例如：</p><ul><li><code>15</code> 的定数范围是 15.0 至 15.8；</li><li><code>15.0</code> 只包含定数 15.0。</li></ul><p>如果使用了 <code>+</code> 或 <code>-</code>，这一机制则不会生效。例如：</p><ul><li><code>12+</code> 的定数范围是 12.0 及以上；</li><li><code>14-</code> 的定数范围是 14.0 及以下。</li></ul><p>默认抽取所有 CHAOS 和 GLITCH 谱面。</p><p>示例：</p><ul><li><p><code>cy.random 14</code></p><p>抽取所有定数在 14.0 与 14.8 之间的谱面。</p></li><li><p><code>cy.random 12.4+</code></p><p>抽取所有定数在 12.4 及以上的谱面。</p></li><li><p><code>cy.random 13- glitch</code></p><p>抽取所有定数在 13.0 及以下的 GLITCH 谱面。</p></li><li><p><code>cy.random 13.4+ 15.6- free</code></p><p>抽取所有定数在 13.4 与 15.6 之间的免费谱面。</p></li><li><p><code>cy.random ilka 15.2+ chaos</code></p><p>抽取角色 Ilka 中所有定数在 15.2 及以上的 CHAOS 谱面。</p></li></ul><h2 id="猜曲绘游戏" tabindex="-1"><a class="header-anchor" href="#猜曲绘游戏"><span>猜曲绘游戏</span></a></h2><div class="language-text" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">cy.guessc</span>
<span class="line"></span></code></pre></div><p>命令别名：<code>cygc</code></p><p>待补充。</p><h2 id="开字符游戏" tabindex="-1"><a class="header-anchor" href="#开字符游戏"><span>开字符游戏</span></a></h2><div class="language-text" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">cy.guessn</span>
<span class="line"></span></code></pre></div><p>命令别名：<code>cygn</code></p><p>待补充。</p>`,36))])}const v=c(g,[["render",x],["__file","index.html.vue"]]),f=JSON.parse('{"path":"/plugins/games/cytus2/","title":"Cytus II","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Cytus II 竞技场","slug":"cytus-ii-竞技场","link":"#cytus-ii-竞技场","children":[]},{"level":2,"title":"查询歌曲信息","slug":"查询歌曲信息","link":"#查询歌曲信息","children":[]},{"level":2,"title":"查询歌曲别名","slug":"查询歌曲别名","link":"#查询歌曲别名","children":[]},{"level":2,"title":"查询定数表","slug":"查询定数表","link":"#查询定数表","children":[]},{"level":2,"title":"物量查谱","slug":"物量查谱","link":"#物量查谱","children":[]},{"level":2,"title":"查询最新版本","slug":"查询最新版本","link":"#查询最新版本","children":[]},{"level":2,"title":"计算小p数量","slug":"计算小p数量","link":"#计算小p数量","children":[]},{"level":2,"title":"计算 TP 值","slug":"计算-tp-值","link":"#计算-tp-值","children":[]},{"level":2,"title":"计算谱面物量","slug":"计算谱面物量","link":"#计算谱面物量","children":[]},{"level":2,"title":"随机选歌","slug":"随机选歌","link":"#随机选歌","children":[]},{"level":2,"title":"猜曲绘游戏","slug":"猜曲绘游戏","link":"#猜曲绘游戏","children":[]},{"level":2,"title":"开字符游戏","slug":"开字符游戏","link":"#开字符游戏","children":[]}],"git":{"updatedTime":1738485801000,"contributors":[{"name":"StarSky919","email":"ss919p@gmail.com","commits":1,"url":"https://github.com/StarSky919"}]},"filePathRelative":"plugins/games/cytus2/index.md"}');export{v as comp,f as data};
