# 2022.12.25 彼記 活動網站概述

`上次更新：12/26 13:33`

此網站為**2022懷寧浸信會聖情難卻**於遊戲中所使用之網站。2023年之後這個網站已不會再用到與調整。

活動形式為解謎遊戲，大背景是一群人要去了解某個虛構人物(彼得牧師)的故事。

當玩家在輸入正確謎底後即可觀看關於這個人物的一些背景故事的影片；此即為本網站主要的功能。

此`README.md`用以紀錄使用到的其他的網站範本，以及參與在架構這個網站的人。

在此也感謝[yupingso](https://github.com/yupingso)幫忙加入許多新的功能以及修改許多的網頁問題。

----

## 分工記錄與使用到的外部資源

1. 網頁整體layout與scrolling animation 取自於 [fimbo](https://github.com/imfunniee/fimbo) by `imfunniee` on GitHub，並根據這個 repository 一步一步蓋出來。
3. `yupingso` 加入 Responsive Web Design 的部分(針對螢幕裝置大小、landscape/portrait view的調整)；許多關於 css 的 bug 也是由 `yupingso` 發現以及修掉。
4. `yupingso` 加入透過 Google 表單讀取 spreadsheet 內容，以根據活動進行的狀況設定倒數時間提醒。因為直接使用Google Sheets API必須處理登入權限的問題，因此利用[opensheet](https://github.com/benborgers/opensheet)來讀取[spreadsheet](https://docs.google.com/spreadsheets/d/1BooGWE3g1zshKoVlAM_JjEI6VzbYtEYJyODVHDrQHWM/edit?usp=sharing)。
5. 玩家的支線任務資訊以 modal image 實作；程式碼參考自 [How To Create Modal Images](https://www.w3schools.com/howto/howto_css_modal_images.asp) on W3Schools。
6. `yupingso` 於 modal image 透過 swiper api 的功能做出左右滑動檢視圖片的機制。
7. 遊戲謎底驗證機制取自於 [protected-github-pages](https://github.com/chrissy-dev/protected-github-pages) by chrissy-dev on GitHub。
