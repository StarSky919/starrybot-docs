# PRP 查分

原网站：[范式：起源 查分器](https://prp.icel.site/)

如果你没有 PRP 账号，请先注册一个。

如果你已经有了 PRP 账号，可以直接在[这里](/prp/)登录，或是查看这个↓

::: details 如何设置账号？

将“允许匿名查询”设置为“是”，然后复制“上传成绩 Token” (注意不要点击右侧的刷新按钮)，再点击“保存”即可。

如果你在手机端看不到“上传成绩 Token”，请将屏幕横过来。

绑定账号请使用用户名而非昵称。

如图：

![示例图片](/images/prp.jpg)

:::

---

主命令：`prp`

[[toc]]

## 绑定 PRP 账号

```
prp.bind <用户名>
```

请注意：Token 的绑定需要使用 `prp.token` 而非此命令。

## 解绑 PRP 账号

```
prp.unbind
```

## 绑定 PRP Token

```
prp.token <Token>
```

## 上传成绩

```
prp.upload <...参数>
```

命令别名：`prp.update`

可用选项：

- `--replace` `-r` 替换最佳成绩

参数格式与 [`pr.rt`](../#计算单曲-rating) 一致。

最多可同时上传十条成绩，使用换行分隔。

PRP 默认使用更高的分数作为最佳成绩，如果你不小心上传了错误的分数，可使用 `-r` 覆盖。

示例：

- `prp.upload abyssgazer 9279`

  上传 Abyssgazer (MASSIVE) 1009279 至 PRP。

- `prp.upload -r abyssgazer 0`

  替换 Abyssgazer (MASSIVE) 的最佳成绩为 0。

## 替换成绩

```
prp.replace <...参数>
```

等同于 `prp.upload -r`。

## 查询 Best 50

```
prp.b50
```

### 查询理论 Best 50

```
prp.b50.max
```

## 查询各等级推分进度

```
prp.achv <参数>
```

参数与 [`pr.const`](../#查询定数表) 完全相同，唯一区别是输入指定定数不会额外展示相邻定数的谱面。