# 各式設定表

`上次更新：11/29 15:30`

這個md檔用於紀錄以下資訊：

- [影片頁設置表](#section_1)
- [圖片嵌入網址表](#section_2)
- [本站所有網頁清單與連結](#section_3)
  - [網站樹](#subsection_3_1)
  - [網站跳轉連結](#subsection_3_2)

前兩項的用意在於方便更新網站上的設定（因為圖片與影片來源還會繼續被要求調整）。比如嵌入處的資訊可以直接幫助我們update用到的影片的區段。（原先vengo, elsa雖然有google工作表紀錄這些，但太難follow，故另外創造這個md檔來追蹤）。

第三項的用意在於方便檢查每一個頁面的設定，方便手機使用者直接點選觀看。

雖然這裡沒有linkedlist，但是是一個list of links，所以也可以當作是一個linkedlist。

## ▷ 影片頁設置 <a name = "section_1"></a>

彼記影片 [清單](https://www.youtube.com/playlist?list=PLtJJ-a19Pqh66LV1SdrheRE8MIarqUGis) 。

嵌入碼格式：若分享連結為`https://youtu.be/*`，則嵌入碼為

```
<iframe src="https://www.youtube.com/embed/*" title="YouTube video player" width="320" height="180" frameborder="20" allow="accelerometer; autoplay; encrypted-media; gyroscope; clipboard-write; picture-in-picture" allowfullscreen></iframe>
```

|副標| 片名 | 網址 | 網址末碼 | 嵌入處 |
| --: | --: | :-- | :-- | --: |
|**感情**| 求婚| [連結](https://youtu.be/z49ig_rZEX4) | z49ig_rZEX4 | `/memories/p3/bsktbl(1)/6*/index.html`|
|| 學弟| [連結](https://youtu.be/YdHsajGhycI) | YdHsajGhycI | `/memories/p2/ptroom(1)/0*/index.html`|
||分手| [連結](https://youtu.be/Fay7nDqBAz0) | Fay7nDqBAz0 | `/memories/p3/bsktbl(2)/a*/index.html`|
|**信仰**|安慰| [連結](https://youtu.be/yds6x5fC33o) | yds6x5fC33o | `/memories/p3/bsktbl(1)/6*/next.html`|
||飯局| [連結](https://youtu.be/x98EJdPozNM) | x98EJdPozNM | `/memories/p1/bsktbl(2)/a*/index.html`|
||球局| [連結](https://youtu.be/vINGxG4uDw0) | vINGxG4uDw0 | -|
|**家庭**|外遇| [連結](https://youtu.be/HOA_Hb7bmlE) | HOA_Hb7bmlE | `/memories/p2/ptroom(2)/2*/c*/next.html`|
||||| `/memories/p3/ptroom(2)/2*/c*/next.html`|
|**校園**|紀錄| [連結](https://youtu.be/lGjfinymGMo) | lGjfinymGMo | `/memories/p1/bsktbl(2)/a*/index.html`|
||交惡| [連結](https://youtu.be/rV96IMrwMzE) | rV96IMrwMzE | `/memories/p1/clssrm(2)/c*/index.html`|
|**職場**|職場| [連結](https://youtu.be/s3qBnWSEiLo) | s3qBnWSEiLo | `/memories/p1/office/c*/index.html`|
||

## 🖼️ 圖片嵌入網址 <a name = "section_2"></a>

網站上共有幾種嵌入圖片：背景、玩家指示卡、芋頭關級使用的圖。

|分類|項目| 來源 | 嵌入處 |
|:--:| :--: | :--: | :--: |
|背景|主頁背景|https://i.imgur.com/qEpnnqW.jpeg|`index.css`|
||回憶大廳背景|https://i.imgur.com/2TX6U1a.jpeg|`/memories/index.css`
|指示卡|人際事業|https://i.imgur.com/xV952lh.png|`/memories/p1/index.html`|
||感情家庭|https://i.imgur.com/DzMwULl.png|`/memories/p2/index.html`|
||家庭信仰|https://i.imgur.com/zZHaH6K.png|`/memories/p3/index.html`|
|芋表單|問號？|https://i.imgur.com/wctNKq3.png|`/memories/p2/ptroom(2)/next.html`
||||`/memories/p3/ptroom(2)/next.html`
||全家福|[網址](https://lh5.googleusercontent.com/x4VveEUyIoDXwNqkVo339XFf9X8sBhA4YXrQKaJGJUUvs3GcZP72jCgl6inZM_GxY2sxDkdgUW0rdVN5f-3KprmBjdUk93EJ79FSBRyV8OJIHyL0nn5CnTVPPlU8FAmcNw=w483)|`/memories/p2/ptroom(2)/2*/index.html`|
||||`/memories/p3/ptroom(2)/2*/index.html`|
||什麼！|[網址](https://lh3.googleusercontent.com/qtNgU4dUAXAm3qQyunT9mWp9pA78uw2g7Fsfg6DCNdQipyAh6mrwGs3wNoX_SzmCarcraYkFutrTtO8CeQQUHwo9DaaKw3lfhmpYjDi7_X9sXuP_p5TrS7nTGbanAh7rVQ=w479)|`/memories/p2/ptroom(2)/2*/c*/index.html`|
||||`/memories/p3/ptroom(2)/2*/c*/index.html`|
||

## 🔗 本站所有網頁清單與連結 <a name = "section_3"></a>

### 🌲 網站樹 <a name="subsection_3_1"></a>
``` 
主頁
  ┣━> 人際事業  <━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
  ┃     ┣━> 必考題(1)解密畫面（密碼：5:12）             :
  ┃     ┃     ┗━> 影片收視畫面（片名：校園篇-紀錄）━━━━━━┫
  ┃     ┣━> 必考題(2)解密畫面（密碼：BEIGAN）           :
  ┃     ┃     ┗━> 影片收視畫面（片名：校園篇-交惡）━━━━━━┫
  ┃     ┣━> 奇怪的排練時間表（密碼：47863）<━━━━┓       :
  ┃     ┃     ┣━> 提示頁面（密碼：63692）      :       :
  ┃     ┃     ┃     ┗━> 提示解鎖畫面━━━━━━━━━━┛       :
  ┃     ┃     ┗━> 影片收視畫面（片名：信仰篇-飯局）━━━━━━┫
  ┃     ┗━> 顏色密碼(1)解密畫面（密碼：54878）          :
  ┃           ┗━> 影片收視畫面（片名：職場篇-職場）━━━━━━┛
  ┣━> 感情家庭  <━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
  ┃     ┣━> 日記解密畫面（密碼：2011/12/25）                 :
  ┃     ┃     ┗━> 影片收視畫面（片名：感情篇-學弟）━━━━━━━━━━━━┫
  ┃     ┗━> 全家福的祕密                                    :
  ┃           ┗━> 開關頁面 ━━> 第一個解密畫面（密碼：1314）    :
  ┃           ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛      :
  ┃           ┗━> 第二個解密畫面（密碼：COFFEE）              :
  ┃                 ┗━> 圖片查看畫面（片名：職場篇-職場）      :
  ┃                      ┗━> 影片收視畫面（片名：家庭篇-外遇）━┛
  ┗━> 家庭信仰  <━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
        ┣━> 新生成員表（密碼：122412）                       :
        ┃     ┗━> 影片收視畫面（片名：感情篇-求婚）            :
        ┃           ┗━> 影片收視畫面（片名：信仰篇-安慰）━━━━━━┫
        ┣━> 全家福的祕密                                    :
        ┃     ┗━> 開關頁面 ━━> 第一個解密畫面（密碼：1314）    :
        ┃     ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛      :
        ┃     ┗━> 第二個解密畫面（密碼：COFFEE）              :
        ┃           ┗━> 圖片查看畫面（片名：職場篇-職場）      :
        ┃                ┗━> 影片收視畫面（片名：家庭篇-外遇）━┫
        ┗━> 奇怪的排練時間表（密碼：47863）<━━━━┓             :
              ┣━> 提示頁面（密碼：63692）      :             :
              ┃     ┗━> 提示解鎖畫面━━━━━━━━━━┛             :
              ┗━> 影片收視畫面（片名：校園篇-交惡）━━━━━━━━━━━━┛
```
### ⚡ 網站跳轉連結 <a name="subsection_3_2"></a>

按照字典順序（左上到右下，上下優先於左右），各網站連結如下：
- [主頁](https://zebraalgebra.github.io/fimbo_2022/)
    - [人際事業](https://zebraalgebra.github.io/fimbo_2022/memories/p1/index.html)
        - [必考題(1)](https://zebraalgebra.github.io/fimbo_2022/memories/p1/clssrm(1)/index.html)
            - [校園篇-紀錄](https://zebraalgebra.github.io/fimbo_2022/memories/p1/clssrm(1)/9d6057e3b3d8b9f197ecf1fdf0ff41fd85ceb496/index.html)
        - [必考題(2)](https://zebraalgebra.github.io/fimbo_2022/memories/p1/clssrm(2)/index.html)
            - [校園篇-交惡](https://zebraalgebra.github.io/fimbo_2022/memories/p1/clssrm(2)/cef4069ca8fd285669610edea05566efef89215e/index.html)
        - [時間表](https://zebraalgebra.github.io/fimbo_2022/memories/p1/bsktbl(2)/index.html)
            - [提示頁面](https://zebraalgebra.github.io/fimbo_2022/memories/p1/bsktbl(2)/hint/hint.html)
                - [提示解開頁面](https://zebraalgebra.github.io/fimbo_2022/memories/p1/bsktbl(2)/hint/983ccb1526c87e46637f0c2fe97cf8b85e466efc/index.html)
            - [信仰篇-飯局](https://zebraalgebra.github.io/fimbo_2022/memories/p1/bsktbl(2)/a6571f80da341254483814b2b0760da29178c6ed/index.html)
        - [顏色密碼](https://zebraalgebra.github.io/fimbo_2022/memories/p1/office/index.html)
            - [職場篇-職場](https://zebraalgebra.github.io/fimbo_2022/memories/p1/office/c64bf60df59d650530c87777a0cb5e482b0532f3/index.html)
    - [感情家庭](https://zebraalgebra.github.io/fimbo_2022/memories/p2/index.html)
        - [日記](https://zebraalgebra.github.io/fimbo_2022/memories/p2/ptroom(1)/index.html)
            - [感情篇-學弟](https://zebraalgebra.github.io/fimbo_2022/memories/p2/ptroom(1)/07d6223847d5e783973694f972f7babac582360b/index.html)
        - [全家福說明頁](https://zebraalgebra.github.io/fimbo_2022/memories/p2/ptroom(2)/index.html)
            - [全家福第一關](https://zebraalgebra.github.io/fimbo_2022/memories/p2/ptroom(2)/next.html)
            - [全家福第二關](https://zebraalgebra.github.io/fimbo_2022/memories/p2/ptroom(2)/209cbd7df48248f976f6dd4817b07c208e0730a2/index.html)
                - [外遇照](https://zebraalgebra.github.io/fimbo_2022/memories/p2/ptroom(2)/209cbd7df48248f976f6dd4817b07c208e0730a2/c3faad37014c05a43fb56c67c6c7c950ecf8290a/index.html)
                - [家庭篇-外遇](https://zebraalgebra.github.io/fimbo_2022/memories/p2/ptroom(2)/209cbd7df48248f976f6dd4817b07c208e0730a2/c3faad37014c05a43fb56c67c6c7c950ecf8290a/next.html)
    - [家庭信仰](https://zebraalgebra.github.io/fimbo_2022/memories/p3/index.html)
        - [成員表](https://zebraalgebra.github.io/fimbo_2022/memories/p3/bsktbl(1)/index.html)
            - [感情篇-求婚](https://zebraalgebra.github.io/fimbo_2022/memories/p3/bsktbl(1)/65a56f386eea39ac8dfa14a2bd13ad52e94933da/index.html)
            - [信仰篇-安慰](https://zebraalgebra.github.io/fimbo_2022/memories/p3/bsktbl(1)/65a56f386eea39ac8dfa14a2bd13ad52e94933da/next.html)
        - [全家福說明頁](https://zebraalgebra.github.io/fimbo_2022/memories/p3/ptroom(2)/index.html)
            - [全家福第一關](https://zebraalgebra.github.io/fimbo_2022/memories/p3/ptroom(2)/next.html)
            - [全家福第二關](https://zebraalgebra.github.io/fimbo_2022/memories/p3/ptroom(2)/209cbd7df48248f976f6dd4817b07c208e0730a2/index.html)
                - [外遇照](https://zebraalgebra.github.io/fimbo_2022/memories/p3/ptroom(2)/209cbd7df48248f976f6dd4817b07c208e0730a2/c3faad37014c05a43fb56c67c6c7c950ecf8290a/index.html)
                - [家庭篇-外遇](https://zebraalgebra.github.io/fimbo_2022/memories/p3/ptroom(2)/209cbd7df48248f976f6dd4817b07c208e0730a2/c3faad37014c05a43fb56c67c6c7c950ecf8290a/next.html)
        - [時間表](https://zebraalgebra.github.io/fimbo_2022/memories/p3/bsktbl(2)/index.html)
            - [提示頁面](https://zebraalgebra.github.io/fimbo_2022/memories/p3/bsktbl(2)/hint/hint.html)
                - [提示解開頁面](https://zebraalgebra.github.io/fimbo_2022/memories/p3/bsktbl(2)/hint/983ccb1526c87e46637f0c2fe97cf8b85e466efc/index.html)
            - [感情篇-分手](https://zebraalgebra.github.io/fimbo_2022/memories/p3/bsktbl(2)/a6571f80da341254483814b2b0760da29178c6ed/index.html)