# Cytus

与 Cytus 相关的功能。

---

主命令：`c1`

[[toc]]

## 查询歌曲信息

```
c1.song <歌曲名称>
```

查询指定歌曲的信息。

`<歌曲名称>` 可以是歌曲ID、完整的曲名、曲名的一部分或是歌曲别名。需要保证拼写正确。

## 查询歌曲别名

```
c1.alias <歌曲名称>
```

查询指定歌曲的别名。

参数同 `c1.song`。

## 查看谱面预览

```
c1.chart <歌曲名称> [谱面难度]
```

可用选项：

- `--regen` `-r` 重新生成图片

查看指定谱面的分页预览图。

参数同 `c1.song`，谱面难度默认为 HARD。

| 难度 | 全称 | 缩写 |
| :---: | :---: | :---: |
| 简单 | easy | ez |
| 困难 | hard | hd |