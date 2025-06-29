# Cytus II

与 Cytus II 相关的功能。

---

主命令：`cy`

[[toc]]

## Cytus II 竞技场

主条目：[Cytus II 竞技场](./arena/)

## 查询歌曲信息

```
cy.song <歌曲名称>
```

查询指定歌曲的信息和曲绘图片。

`<歌曲名称>` 可以是歌曲ID、完整的曲名、曲名的一部分或是歌曲别名。需要保证拼写正确。

## 查询歌曲别名

```
cy.alias <歌曲名称>
```

查询指定歌曲的别名。

参数同 `cy.song`。

## 查询定数表

```
cy.const <参数>
```

查询指定条件下的谱面定数表。

`<参数>` 可以是以下类型：

- 官方标级：例如 `14`
- 谱面定数：例如 `15.2`
- 定数范围：例如 `14.6~15.4`
- 版本号：格式为 `vX.X.X`
- 角色名
- 谱师名
- 免费：`free` / `免费`
- 全部：`all` / `全部`

当 `<参数>` 是谱面定数时，会额外展示相邻定数的谱面。

当 `<参数>` 是版本号时，可以用 `X` 代替数字，例如 `v5.0.X` 表示查询所有 5.0 至 5.1 版本 (不包括 5.1) 中的谱面。

::: warning

如果你想查询定数为 15.0 的谱面，请输入 `15.0` 而非 `15`。后者会被解析为官方标级。

:::

## 查看谱面预览

```
cy.chart <歌曲名称> [谱面难度]
```

可用选项：

- `--regen` `-r` 重新生成图片

查看指定谱面的分页预览图。

参数同 `cy.song`，谱面难度默认为 CHAOS。

| 难度 | 全称 | 缩写 |
| :---: | :---: | :---: |
| 简单 | easy | / |
| 困难 | hard | / |
| 混沌 | chaos | / |
| 混乱 | glitch | / |
| CRASH | crash | / |
| DREAM | dream | / |
| DROP | drop | / |

## 物量查谱

```
cy.notes <物量> [最高物量]
```

查询指定物量的谱面。

如果提供了 `[最高物量]`，则会以 `<物量>` 和 `[最高物量]` 作为区间，展示所有物量在此区间内的谱面。

## 查询最新版本

<p><Badge type="danger" text="已移除" vertical="middle" /></p>

```
cy.version
```

联网查询游戏的最新版本，数据来自 TapTap 国区、App Store 大陆区和台区。

## 计算小p数量

```
cy.calc <TP> <PERFECT> [GOOD] [BAD] [MISS]
```

命令别名：`cyc`

根据结算时的 TP 值和各级判定的数量计算未显示的小p数量。

TP 值的小数点和结尾的 0 可省去。

以下几种写法完全相同：

- `cy.calc 99.94 1772 1 0 0`

- `cy.calc 99.94 1772 1`

- `cy.calc 9994 1772 1`

## 控分计算

```
cy.score <物量> <目标分数>
```

计算在指定物量的谱面中打出目标分数的解法。

::: details 计算结果解析

以下是在 Lunar Mare (GLITCH) 中打出 136136 分的解法之一：

```
PERFECT: 227
GOOD: 2
Single GOOD & BAD: 3
Combos: 169+60
```

`PERFECT` 为 PERFECT 的数量，可忽略。

`GOOD` 为需要在连击中打出的 GOOD 数量。例如在这个解法中，你需要在两段连击里打出总计 2 个 GOOD。

`Single GOOD & BAD` 为需要单独打出的 GOOD 和 BAD 数量。如果要打 GOOD，需要特别注意不能让 GOOD 形成连击。

`Combos` 为连击分段。`169+60` 表示需要分别打出一段 169 Combo 和一段 60 Combo。

:::

## 计算 TP 值

```
cy.tp <MASTER> <C.PERFECT> [PERFECT] [GOOD] [BAD] [MISS]
```

根据结算时各级判定的数量计算精确的 M.TP 和 TP 值。

如果不是在 Master 模式中结算的成绩，`<MASTER>` 填 0 即可，此时 Bot 将不会展示 M.TP 值。

## 计算谱面物量

```
cy.combo <最高连击数> <分数>
```

根据谱面中某一时间点的最高连击数和分数计算该谱面的物量。

需要保证该时间点前所有音符判定均为 PERFECT 及以上，即 COMBO 数字为金色。

## 随机选歌

```
cy.random [...参数]
```

命令别名：`cyr`

可以指定定数最大值 / 最小值 / 范围、难度阶级、角色和是否免费。

指定定数时是否加小数会影响规则。例如：

- `15` 的定数范围是 15.0 至 15.8；
- `15.0` 只包含定数 15.0。

如果使用了 `+` 或 `-`，这一机制则不会生效。例如：

- `12+` 的定数范围是 12.0 及以上；
- `14-` 的定数范围是 14.0 及以下。

默认抽取所有 CHAOS 和 GLITCH 谱面。

示例：

- `cy.random 14`

  抽取所有定数在 14.0 与 14.8 之间的谱面。

- `cy.random 12.4+`

  抽取所有定数在 12.4 及以上的谱面。

- `cy.random 13- glitch`

  抽取所有定数在 13.0 及以下的 GLITCH 谱面。

- `cy.random 13.4+ 15.6- free`

  抽取所有定数在 13.4 与 15.6 之间的免费谱面。

- `cy.random ilka 15.2+ chaos`

  抽取角色 Ilka 中所有定数在 15.2 及以上的 CHAOS 谱面。

## 猜曲绘游戏

```
cy.guessc
```

命令别名：`cygc`

待补充。

## 开字符游戏

```
cy.guessn
```

命令别名：`cygn`

待补充。