var PacketStructureIndexedFields = {
	"PACKET_CZ_ENTER": [
		"AID",
		"GID",
		"AuthCode",
		"clientTime",
		"Sex"
	],
	"PACKET_CZ_ENTER2": [
		"AID",
		"GID",
		"AuthCode",
		"clientTime",
		"Sex"
	],
	"PACKET_CZ_NOTIFY_ACTORINIT": [
		"PacketType"
	],
	"PACKET_CZ_REQUEST_TIME": [
		"clientTime"
	],
	"PACKET_CZ_REQUEST_MOVE": [
		"dest"
	],
	"PACKET_CZ_REQUEST_ACT": [
		"targetGID",
		"action"
	],
	"PACKET_CZ_REQUEST_CHAT": [
		"PacketLength",
		"msg"
	],
	"PACKET_CZ_CONTACTNPC": [
		"NAID"
	],
	"PACKET_CZ_REQNAME": [
		"AID"
	],
	"PACKET_CZ_WHISPER": [
		"PacketLength",
		"receiver",
		"msg"
	],
	"PACKET_CZ_BROADCAST": [
		"PacketLength",
		"msg"
	],
	"PACKET_CZ_CHANGE_DIRECTION": [
		"headDir",
		"dir"
	],
	"PACKET_CZ_ITEM_PICKUP": [
		"ITAID"
	],
	"PACKET_CZ_ITEM_THROW": [
		"Index",
		"count"
	],
	"PACKET_CZ_USE_ITEM": [
		"index",
		"AID"
	],
	"PACKET_CZ_REQ_WEAR_EQUIP": [
		"index",
		"wearLocation"
	],
	"PACKET_CZ_REQ_TAKEOFF_EQUIP": [
		"index"
	],
	"PACKET_CZ_RESTART": [
		"type"
	],
	"PACKET_CZ_CHOOSE_MENU": [
		"NAID",
		"num"
	],
	"PACKET_CZ_REQ_NEXT_SCRIPT": [
		"NAID"
	],
	"PACKET_CZ_STATUS_CHANGE": [
		"statusID",
		"changeAmount"
	],
	"PACKET_CZ_REQ_EMOTION": [
		"type"
	],
	"PACKET_CZ_REQ_USER_COUNT": [
		"PacketType"
	],
	"PACKET_CZ_ACK_SELECT_DEALTYPE": [
		"NAID",
		"type"
	],
	"PACKET_CZ_PC_PURCHASE_ITEMLIST": [
		"PacketLength",
		"itemList"
	],
	"PACKET_CZ_PC_SELL_ITEMLIST": [
		"PacketLength",
		"itemList"
	],
	"PACKET_CZ_DISCONNECT_CHARACTER": [
		"AID"
	],
	"PACKET_CZ_DISCONNECT_ALL_CHARACTER": [
		"PacketType"
	],
	"PACKET_CZ_SETTING_WHISPER_PC": [
		"name",
		"type"
	],
	"PACKET_CZ_SETTING_WHISPER_STATE": [
		"type"
	],
	"PACKET_CZ_REQ_WHISPER_LIST": [
		"PacketType"
	],
	"PACKET_CZ_CREATE_CHATROOM": [
		"PacketLength",
		"size",
		"type",
		"passwd",
		"title"
	],
	"PACKET_CZ_REQ_ENTER_ROOM": [
		"roomID",
		"passwd"
	],
	"PACKET_CZ_CHANGE_CHATROOM": [
		"PacketLength",
		"size",
		"type",
		"passwd",
		"title"
	],
	"PACKET_CZ_REQ_ROLE_CHANGE": [
		"role",
		"name"
	],
	"PACKET_CZ_REQ_EXPEL_MEMBER": [
		"name"
	],
	"PACKET_CZ_EXIT_ROOM": [
		"PacketType"
	],
	"PACKET_CZ_REQ_EXCHANGE_ITEM": [
		"AID"
	],
	"PACKET_CZ_ACK_EXCHANGE_ITEM": [
		"result"
	],
	"PACKET_CZ_ADD_EXCHANGE_ITEM": [
		"index",
		"count"
	],
	"PACKET_CZ_CONCLUDE_EXCHANGE_ITEM": [
		"PacketType"
	],
	"PACKET_CZ_CANCEL_EXCHANGE_ITEM": [
		"PacketType"
	],
	"PACKET_CZ_EXEC_EXCHANGE_ITEM": [
		"PacketType"
	],
	"PACKET_CZ_MOVE_ITEM_FROM_BODY_TO_STORE": [
		"index",
		"count"
	],
	"PACKET_CZ_MOVE_ITEM_FROM_STORE_TO_BODY": [
		"index",
		"count"
	],
	"PACKET_CZ_CLOSE_STORE": [
		"PacketType"
	],
	"PACKET_CZ_MAKE_GROUP": [
		"groupName"
	],
	"PACKET_CZ_REQ_JOIN_GROUP": [
		"AID"
	],
	"PACKET_CZ_JOIN_GROUP": [
		"GRID",
		"answer"
	],
	"PACKET_CZ_REQ_LEAVE_GROUP": [
		"PacketType"
	],
	"PACKET_CZ_CHANGE_GROUPEXPOPTION": [
		"expOption"
	],
	"PACKET_CZ_REQ_EXPEL_GROUP_MEMBER": [
		"AID",
		"characterName"
	],
	"PACKET_CZ_REQUEST_CHAT_PARTY": [
		"PacketLength",
		"msg"
	],
	"PACKET_CZ_UPGRADE_SKILLLEVEL": [
		"SKID"
	],
	"PACKET_CZ_USE_SKILL": [
		"selectedLevel",
		"SKID",
		"targetID"
	],
	"PACKET_CZ_USE_SKILL_TOGROUND": [
		"selectedLevel",
		"SKID",
		"xPos",
		"yPos"
	],
	"PACKET_CZ_CANCEL_LOCKON": [
		"PacketType"
	],
	"PACKET_CZ_SELECT_WARPPOINT": [
		"SKID",
		"mapName"
	],
	"PACKET_CZ_REMEMBER_WARPPOINT": [
		"PacketType"
	],
	"PACKET_CZ_MOVE_ITEM_FROM_BODY_TO_CART": [
		"index",
		"count"
	],
	"PACKET_CZ_MOVE_ITEM_FROM_CART_TO_BODY": [
		"index",
		"count"
	],
	"PACKET_CZ_MOVE_ITEM_FROM_STORE_TO_CART": [
		"index",
		"count"
	],
	"PACKET_CZ_MOVE_ITEM_FROM_CART_TO_STORE": [
		"index",
		"count"
	],
	"PACKET_CZ_REQ_CARTOFF": [
		"PacketType"
	],
	"PACKET_CZ_REQ_CLOSESTORE": [
		"PacketType"
	],
	"PACKET_CZ_REQ_BUY_FROMMC": [
		"AID"
	],
	"PACKET_CZ_PC_PURCHASE_ITEMLIST_FROMMC": [
		"PacketLength",
		"AID",
		"itemList"
	],
	"PACKET_CZ_ITEM_CREATE": [
		"itemName"
	],
	"PACKET_CZ_MOVETO_MAP": [
		"mapName",
		"xPos",
		"yPos"
	],
	"PACKET_CZ_INPUT_EDITDLG": [
		"NAID",
		"value"
	],
	"PACKET_CZ_CLOSE_DIALOG": [
		"NAID"
	],
	"PACKET_CZ_REQ_GIVE_MANNER_POINT": [
		"otherAID",
		"type",
		"point"
	],
	"PACKET_CZ_REQ_GUILD_MENUINTERFACE": [
		"PacketType"
	],
	"PACKET_CZ_REQ_GUILD_MENU": [
		"Type"
	],
	"PACKET_CZ_REQ_GUILD_EMBLEM_IMG": [
		"GDID"
	],
	"PACKET_CZ_REGISTER_GUILD_EMBLEM_IMG": [
		"PacketLength",
		"img"
	],
	"PACKET_CZ_REQ_CHANGE_MEMBERPOS": [
		"PacketLength"
	],
	"PACKET_CZ_REQ_LEAVE_GUILD": [
		"GDID",
		"AID",
		"GID",
		"reasonDesc"
	],
	"PACKET_CZ_REQ_BAN_GUILD": [
		"GDID",
		"AID",
		"GID",
		"reasonDesc"
	],
	"PACKET_CZ_REQ_DISORGANIZE_GUILD": [
		"key"
	],
	"PACKET_CZ_REG_CHANGE_GUILD_POSITIONINFO": [
		"PacketLength"
	],
	"PACKET_CZ_REQ_MAKE_GUILD": [
		"GName"
	],
	"PACKET_CZ_REQ_JOIN_GUILD": [
		"AID"
	],
	"PACKET_CZ_JOIN_GUILD": [
		"GDID",
		"answer"
	],
	"PACKET_CZ_GUILD_NOTICE": [
		"GDID",
		"subject",
		"notice"
	],
	"PACKET_CZ_REQ_ALLY_GUILD": [
		"AID"
	],
	"PACKET_CZ_ALLY_GUILD": [
		"otherAID",
		"answer"
	],
	"PACKET_CZ_REQ_ITEMIDENTIFY": [
		"index"
	],
	"PACKET_CZ_REQ_ITEMCOMPOSITION_LIST": [
		"cardIndex"
	],
	"PACKET_CZ_REQ_ITEMCOMPOSITION": [
		"cardIndex",
		"equipIndex"
	],
	"PACKET_CZ_GUILD_CHAT": [
		"PacketLength",
		"msg"
	],
	"PACKET_CZ_REQ_HOSTILE_GUILD": [
		"AID"
	],
	"PACKET_CZ_REQ_DELETE_RELATED_GUILD": [
		"OpponentGDID",
		"Relation"
	],
	"PACKET_CZ_REQ_DISCONNECT": [
		"PacketType"
	],
	"PACKET_CZ_REQMAKINGITEM": [
		"info"
	],
	"PACKET_CZ_USE_SKILL_TOGROUND_WITHTALKBOX": [
		"selectedLevel",
		"SKID",
		"xPos",
		"yPos",
		"contents"
	],
	"PACKET_CZ_REQNAME_BYGID": [
		"GID"
	],
	"PACKET_CZ_RESET": [
		"type"
	],
	"PACKET_CZ_CHANGE_MAPTYPE": [
		"xPos",
		"yPos",
		"type"
	],
	"PACKET_CZ_CHANGE_EFFECTSTATE": [
		"PacketType"
	],
	"PACKET_CZ_TRYCAPTURE_MONSTER": [
		"targetAID"
	],
	"PACKET_CZ_COMMAND_PET": [
		"cSub"
	],
	"PACKET_CZ_RENAME_PET": [
		"szName"
	],
	"PACKET_CZ_SELECT_PETEGG": [
		"index"
	],
	"PACKET_CZ_PET_ACT": [
		"data"
	],
	"PACKET_CZ_REQ_MAKINGARROW": [
		"id"
	],
	"PACKET_CZ_REQ_CHANGECART": [
		"num"
	],
	"PACKET_CZ_REQ_OPENSTORE2": [
		"PacketLength",
		"storeName",
		"result",
		"storeList"
	],
	"PACKET_CZ_REMOVE_AID": [
		"AccountName"
	],
	"PACKET_CZ_SHIFT": [
		"CharacterName"
	],
	"PACKET_CZ_RECALL": [
		"AccountName"
	],
	"PACKET_CZ_RECALL_GID": [
		"CharacterName"
	],
	"PACKET_CZ_SELECTAUTOSPELL": [
		"SKID"
	],
	"PACKET_CZ_INPUT_EDITDLGSTR": [
		"PacketLength",
		"NAID",
		"msg"
	],
	"PACKET_CZ_REQ_ACCOUNTNAME": [
		"AID"
	],
	"PACKET_CZ_DORIDORI": [
		"PacketType"
	],
	"PACKET_CZ_MAKE_GROUP2": [
		"groupName"
	],
	"PACKET_CZ_CHOPOKGI": [
		"PacketType"
	],
	"PACKET_CZ_JOIN_BABY": [
		"PacketType"
	],
	"PACKET_CZ_REQ_JOIN_BABY": [
		"PacketType"
	],
	"PACKET_CZ_REQ_ITEMREPAIR": [
		"TargetItemInfo"
	],
	"PACKET_CZ_ADD_FRIENDS": [
		"name"
	],
	"PACKET_CZ_DELETE_FRIENDS": [
		"AID",
		"GID"
	],
	"PACKET_CZ_ACK_REQ_ADD_FRIENDS": [
		"ReqAID",
		"ReqGID",
		"Result"
	],
	"PACKET_CZ_REQ_GIVE_MANNER_BYNAME": [
		"CharName"
	],
	"PACKET_CZ_REQ_STATUS_GM": [
		"CharName"
	],
	"PACKET_CZ_REQ_PVPPOINT": [
		"AID",
		"GID"
	],
	"PACKET_CZ_BLACKSMITH_RANK": [
		"PacketType"
	],
	"PACKET_CZ_ALCHEMIST_RANK": [
		"PacketType"
	],
	"PACKET_CZ_LESSEFFECT": [
		"isLess"
	],
	"PACKET_CZ_REQ_WEAPONREFINE": [
		"Index"
	],
	"PACKET_CZ_TAEKWON_RANK": [
		"PacketType"
	],
	"PACKET_CZ_COMMAND_MER": [
		"type",
		"command"
	],
	"PACKET_CZ_REQUEST_MOVENPC": [
		"GID",
		"dest"
	],
	"PACKET_CZ_REQUEST_ACTNPC": [
		"GID",
		"targetGID",
		"action"
	],
	"PACKET_CZ_REQUEST_MOVETOOWNER": [
		"GID"
	],
	"PACKET_CZ_RENAME_MER": [
		"PacketType"
	],
	"PACKET_CZ_ACK_STORE_PASSWORD": [
		"Type",
		"Password",
		"NewPassword"
	],
	"PACKET_CZ_MAIL_GET_LIST": [
		"PacketType"
	],
	"PACKET_CZ_MAIL_OPEN": [
		"MailID"
	],
	"PACKET_CZ_MAIL_DELETE": [
		"MailID"
	],
	"PACKET_CZ_MAIL_GET_ITEM": [
		"MailID"
	],
	"PACKET_CZ_MAIL_RESET_ITEM": [
		"Type"
	],
	"PACKET_CZ_MAIL_ADD_ITEM": [
		"index",
		"count"
	],
	"PACKET_CZ_AUCTION_CREATE": [
		"PacketType"
	],
	"PACKET_CZ_AUCTION_ADD_ITEM": [
		"PacketType"
	],
	"PACKET_CZ_AUCTION_ADD_CANCEL": [
		"PacketType"
	],
	"PACKET_CZ_AUCTION_BUY": [
		"PacketType"
	],
	"PACKET_CZ_AUCTION_ADD": [
		"PacketType"
	],
	"PACKET_CZ_AGREE_STARPLACE": [
		"PacketType"
	],
	"PACKET_CZ_MAIL_SEND": [
		"PacketLength",
		"ReceiveName",
		"Header",
		"msg_len"
	],
	"PACKET_CZ_REQ_MAKINGITEM": [
		"PacketType"
	],
	"PACKET_CZ_AUCTION_REQ_MY_INFO": [
		"PacketType"
	],
	"PACKET_CZ_AUCTION_REQ_MY_SELL_STOP": [
		"PacketType"
	],
	"PACKET_CZ_AUCTION_ITEM_SEARCH": [
		"PacketType"
	],
	"PACKET_CZ_REQ_MAIL_RETURN": [
		"MailID",
		"ReceiveName"
	],
	"PACKET_CZ_STANDING_RESURRECTION": [
		"PacketType"
	],
	"PACKET_CZ_MER_COMMAND": [
		"PacketType"
	],
	"PACKET_CZ_PC_BUY_CASH_POINT_ITEM": [
		"ITID",
		"count",
		"points"
	],
	"PACKET_CZ_ACTIVE_QUEST": [
		"questID",
		"active"
	],
	"PACKET_CZ_SHORTCUT_KEY_CHANGE": [
		"Index",
		"ShortCutKey"
	],
	"PACKET_CZ_PARTY_JOIN_REQ": [
		"characterName"
	],
	"PACKET_CZ_PARTY_JOIN_REQ_ACK": [
		"GRID",
		"bAccept"
	],
	"PACKET_CZ_EQUIPWIN_MICROSCOPE": [
		"AID"
	],
	"PACKET_CZ_CONFIG": [
		"Value"
	],
	"PACKET_CZ_BATTLEFIELD_CHAT": [
		"PacketLength",
		"msg"
	],
	"PACKET_CZ_PROGRESS": [
		"PacketType"
	],
	"PACKET_CZ_SKILL_SELECT_RESPONSE": [
		"why",
		"SKID"
	],
	"PACKET_CZ_CHANGE_GROUP_MASTER": [
		"AID"
	],
	"PACKET_CZ_ITEMLISTWIN_RES": [
		"PacketLength",
		"Type",
		"Action"
	],
	"PACKET_CZ_PARTY_BOOKING_REQ_REGISTER": [
		"RegisterInfo"
	],
	"PACKET_CZ_PARTY_BOOKING_REQ_DELETE": [],
	"PACKET_CZ_PARTY_BOOKING_REQ_SEARCH": [
		"Level",
		"MapID",
		"Job",
		"LastIndex",
		"ResultCount"
	],
	"PACKET_CZ_PARTY_BOOKING_REQ_UPDATE": [
		"Job"
	],
	"PACKET_CZ_PC_PURCHASE_ITEMLIST_FROMMC2": [
		"PacketLength",
		"AID",
		"UniqueID",
		"itemList"
	],
	"PACKET_CZ_REQ_OPEN_BUYING_STORE": [
		"PacketLength",
		"LimitZeny",
		"result",
		"storeName",
		"ItemList"
	],
	"PACKET_CZ_REQ_CLOSE_BUYING_STORE": [
		"PacketType"
	],
	"PACKET_CZ_REQ_CLICK_TO_BUYING_STORE": [
		"makerAID"
	],
	"PACKET_CZ_REQ_TRADE_BUYING_STORE": [
		"PacketLength",
		"makerAID",
		"StoreID",
		"ItemList"
	],
	"PACKET_CZ_SEARCH_STORE_INFO": [
		"PacketLength",
		"StoreType",
		"maxPrice",
		"minPrice",
		"ItemIDListSize",
		"CardIDListSize"
	],
	"PACKET_CZ_SEARCH_STORE_INFO_NEXT_PAGE": [
		"PacketType"
	],
	"PACKET_CZ_CLOSE_SEARCH_STORE_INFO": [
		"PacketType"
	],
	"PACKET_CZ_SSILIST_ITEM_CLICK": [
		"AID",
		"SSI_ID",
		"ITID"
	],
	"PACKET_CZ_REQUEST_TIME2": [
		"clientTime"
	],
};