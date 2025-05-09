# Cytoid

与 Cytoid 相关的功能。

---

主命令：`ctd`

[[toc]]

## 计算单曲 Rating

```
ctd.rt <等级> <精准度>
```

## 绑定 Cytoid 账号

```
ctd.bind <Cytoid ID>
```

## 解绑 Cytoid 账号

```
ctd.unbind
```

## 查询账号信息

```
ctd.profile [Cytoid ID]
```

命令别名：`ctd.info`

如果不指定 `[Cytoid ID]`，会使用已绑定的账号作为查询目标。

## 查询关卡信息

```
ctd.level [关卡ID]
```

## 查询 Recent 30

```
ctd.r30 [Cytoid ID]
```

可用选项：

- `--nopic` `-n` 不加载曲绘

如果不指定 `[Cytoid ID]`，会使用已绑定的账号作为查询目标。

## 查询 Best 30

```
ctd.b30 [Cytoid ID]
```

可用选项：

- `--nopic` `-n` 不加载曲绘

如果不指定 `[Cytoid ID]`，会使用已绑定的账号作为查询目标。