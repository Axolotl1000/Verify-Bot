# Readme

## 目錄

- [安裝](#安裝)
- [使用前須知](#使用前須知)
- [使用說明](#使用說明)
- [將他人加入白名單](#將他人加入白名單)
- [貢獻者](#貢獻者)
- [使用之插件](#使用之插件)
- [使用許可](#使用許可)

## 安裝

這個項目使用 [node](http://nodejs.org)以及[MineFlayer](https://mineflayer.prismarine.js.org/)，請確保你有安裝它。

在該資料夾中輸入以下指令即安裝成功

```shell
$ npm install mineflayer
```

## 使用前須知

本系統無法辨別伺服器擁有者，請在機器人啟動前將自己加入白名單，否則當機器人加入時會自動檢查伺服器內的成員並自動剔除未在白名單中出現的玩家(機器人不會剔除自己)

本系統可以加入 1.18 以下的伺服器，1.19 以上因為需要聊天驗證，因此無法加入

本系統並未取得正版UUID，只能加入公開至局域網的以及`online-node`設為`false`的伺服器

本系統需要權限來進行所有操作，於伺服器中，你只需要打以下指令:

```shell
/op (機器人的名稱)
```

如果有自己的權限指令請自行處理

而在局域網中，你只需要確認在啟動伺服器前，允許作弊這像是開啟的，否則機器人將無法處理事項

## 使用說明

這是一個可以讓公開制局域網的伺服器主也可以使用的白名單機器人，請先修改[config.json](config.json)，如果訊息內容想保持預設，則無需更改[messages.json](messages.json)內的內容，其餘的皆無須更改

之後於控制台打上以下指令

```shell
$ node main.js
```

等待機器人加入後即成功

## 將他人加入白名單

請修改[whitelist.json](whitelist.json)

第一行及最後一行為JSON語法，請勿修改

於[whitelist.json](whitelist.json)中

```json
{
    "USERNAME": true
}
```

USERNAME為使用者名稱，若要使其通過驗證，請在`:`後將其設為`true`(注意大小寫)

如果只想暫停他的權限，請將`true`改為`false`(注意大小寫)

如果想完全刪除他的權限，請直接刪除關於他的那一行

## 維護者

[@Axolotl1000](https://github.com/Axolotl1000)

### 貢獻者

感謝以下參與項目的人:
    
[@Axolotl1000](https://github.com/Axolotl1000)

## 使用之插件

[MineFlayer](https://mineflayer.prismarine.js.org/)

## 使用許可

[Verify_Bot](LICENSE) © Axolotl1000
