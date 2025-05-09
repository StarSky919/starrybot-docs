# 基础功能

主命令：`base`

[[toc]]

## Ping!

```
ping
```

Pong!

## 查看 Bot 状态

```
status
```

命令别名：`状态`

## 设置群内的主 Bot

<p><Badge type="warning" text="群聊" vertical="middle" /></p>

```
mainbot
```

当群内存在多个 StarryBot 账号时，使用此命令可以切换主 Bot (即在不 @ 的情况下默认响应的 Bot 账号)。

## 帮你做选择

```
choose <first> <...rest>
```

快捷方式：`选x还是x` <Badge type="warning" text="需要前缀" vertical="middle" />

最多只能有五个选项。

示例：

- `choose 1 2 3 4 5`

  在 `1` `2` `3` `4` `5` 中随机选择一个。

- `选a还是b还是c`

  在 `a` `b` `c` 中随机选择一个。

## 查看谁 @ 过你

<p><Badge type="warning" text="群聊" vertical="middle" /></p>

```
谁at我
```

命令别名：`谁@我`

查看最近一天内有哪些群友 @ 过你。

## 今日运势

```
fortune
```

命令别名：`今日运势` `抽签` `御神签`

文案来自游戏《原神》。

## 随机一言

```
hitokoto
```

命令别名：`yiyan` `一言`

随机获取一条一言。

数据来源：[https://hitokoto.cn/](https://hitokoto.cn/)

## 群聊发言排行

<p><Badge type="warning" text="群聊" vertical="middle" /></p>

```
rank
```

可用选项：

- `--recent` `-r` 查询近七日排行
- `--week` `-w` 查询周排行
- `--month` `-m` 查询月排行
- `--tops` `-t` 查询Top榜
  - 参数：`[数量]`
  - 默认值：`10`
- `--last` `-l` 查询上次数据

统计群聊中所有成员的发言数量并展示排行。

默认为日排行。

示例：

- `rank -t`

  查询本日群内发言 Top 10。

- `rank -r`

  查询自己近七日的发言数量和排行。

- `rank -wt 20`

  查询本周群内发言 Top 20。

- `rank -lw`

  查询自己上周的发言数量和排行。

- `rank -lmt 50`

  查询上月群内发言 Top 50。

## 掷骰子

```
roll [表达式]
```

命令别名：`r`

快捷方式：`r表达式` <Badge type="warning" text="需要前缀" vertical="middle" />

表达式举例：
- `1d6` 掷 1 个 6 面骰。
- `2d3+1` 掷 2 个 3 面骰，结果加 1。
- `3d4*2` 掷 3 个 4 面骰，结果乘以 2。

可以使用加号拼接多个表达式来求和，例如 `2d3*4+1d10+3`。

::: tip

如果你知道跑团：其实这个就是骰娘的骰子表达式。

:::

## 签到打卡

```
sign
```

命令别名：`签到`

每日签到。可获得金币，同时展示今日运势 (结果与 `fortune` 相通)。

## 抽奖

```
lottery
```

命令别名：`抽奖`

花费 25 枚金币进行抽奖，花费的金币会进入奖池。若中奖将获得奖池内的全部金币，同时清空奖池重新累积。

## 管理金币

```
coins
```

命令别名：`金币`

查看金币数量。

### 金币转账

```
coins.transfer <QQ号> <数量>
```

命令别名：`转账`