var PacketStructureDefinition = {
	PACKET_CA_LOGIN: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Version",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "ID",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 6
			},
			{
				name: "Passwd",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 30
			},
			{
				name: "clienttype",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 54
			}
		],
		defaultId: 100,
		variableLength: false
	},
	PACKET_CH_ENTER: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "AuthCode",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "userLevel",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "clientType",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 14
			},
			{
				name: "Sex",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 16
			}
		],
		defaultId: 101,
		variableLength: false
	},
	PACKET_CH_SELECT_CHAR: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "CharNum",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 102,
		variableLength: false
	},
	PACKET_CH_MAKE_CHAR: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "name",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 2
			},
			{
				name: "Str",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 26
			},
			{
				name: "Agi",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 27
			},
			{
				name: "Vit",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 28
			},
			{
				name: "Int",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 29
			},
			{
				name: "Dex",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 30
			},
			{
				name: "Luk",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 31
			},
			{
				name: "CharNum",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 32
			},
			{
				name: "headPal",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 33
			},
			{
				name: "head",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 35
			}
		],
		defaultId: 103,
		variableLength: false
	},
	PACKET_CH_DELETE_CHAR: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "key",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 40,
				offset: 6
			}
		],
		defaultId: 104,
		variableLength: false
	},
	PACKET_AC_ACCEPT_LOGIN: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "AuthCode",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "userLevel",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 12
			},
			{
				name: "lastLoginIP",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 16
			},
			{
				name: "lastLoginTime",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 26,
				offset: 20
			},
			{
				name: "Sex",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 46
			},
			{
				name: "ServerList",
				dataType: "struct",
				typeLength: 32,
				structName: "SERVER_ADDR",
				arrayLength: -1,
				properties: [
					{
						name: "ip",
						dataType: "Uint32",
						typeLength: 4,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "port",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "name",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 20,
						offset: 6
					},
					{
						name: "usercount",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 26
					},
					{
						name: "state",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 28
					},
					{
						name: "property",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 30
					}
				],
				offset: 0x2f
			}
		],
		defaultId: 105,
		variableLength: true
	},
	PACKET_AC_REFUSE_LOGIN: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "ErrorCode",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "blockDate",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 20,
				offset: 3
			}
		],
		defaultId: 106,
		variableLength: false
	},
	PACKET_HC_ACCEPT_ENTER_NEO_UNION: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "TotalSlotNum",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "PremiumStartSlot",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 5
			},
			{
				name: "PremiumEndSlot",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "dummy1_beginbilling",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 7
			},
			{
				name: "code",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "time1",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 12
			},
			{
				name: "time2",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 16
			},
			{
				name: "dummy2_endbilling",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 7,
				offset: 20
			},
			{
				name: "charInfo",
				dataType: "struct",
				typeLength: 144,
				structName: "CHARACTER_INFO_NEO_UNION",
				arrayLength: -1,
				properties: [
					{
						name: "GID",
						dataType: "Uint32",
						typeLength: 4,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "exp",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "money",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 8
					},
					{
						name: "jobexp",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 12
					},
					{
						name: "joblevel",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 16
					},
					{
						name: "bodystate",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 20
					},
					{
						name: "healthstate",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 24
					},
					{
						name: "effectstate",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 28
					},
					{
						name: "virtue",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 32
					},
					{
						name: "honor",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 36
					},
					{
						name: "jobpoint",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 40
					},
					{
						name: "hp",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 42
					},
					{
						name: "maxhp",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 46
					},
					{
						name: "sp",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 50
					},
					{
						name: "maxsp",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 52
					},
					{
						name: "speed",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 54
					},
					{
						name: "job",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 56
					},
					{
						name: "head",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 58
					},
					{
						name: "weapon",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 60
					},
					{
						name: "level",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 62
					},
					{
						name: "sppoint",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 64
					},
					{
						name: "accessory",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 66
					},
					{
						name: "shield",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 68
					},
					{
						name: "accessory2",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 70
					},
					{
						name: "accessory3",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 72
					},
					{
						name: "headpalette",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 74
					},
					{
						name: "bodypalette",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 76
					},
					{
						name: "name",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 24,
						offset: 78
					},
					{
						name: "Str",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 102
					},
					{
						name: "Agi",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 103
					},
					{
						name: "Vit",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 104
					},
					{
						name: "Int",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 105
					},
					{
						name: "Dex",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 106
					},
					{
						name: "Luk",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 107
					},
					{
						name: "CharNum",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 108
					},
					{
						name: "haircolor",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 109
					},
					{
						name: "bIsChangedCharName",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 110
					},
					{
						name: "lastMap",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 16,
						offset: 112
					},
					{
						name: "DeleteDate",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 128
					},
					{
						name: "Robe",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 132
					},
					{
						name: "SlotAddon",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 136
					},
					{
						name: "RenameAddon",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 140
					}
				],
				offset: 0x1b
			}
		],
		defaultId: 107,
		variableLength: true
	},
	PACKET_HC_REFUSE_ENTER: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "ErrorCode",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 108,
		variableLength: false
	},
	PACKET_HC_ACCEPT_MAKECHAR_NEO_UNION: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "charinfo",
				dataType: "struct",
				structName: "CHARACTER_INFO_NEO_UNION",
				typeLength: -1,
				arrayLength: 1,
				properties: [
					{
						name: "GID",
						dataType: "Uint32",
						typeLength: 4,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "exp",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "money",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 8
					},
					{
						name: "jobexp",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 12
					},
					{
						name: "joblevel",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 16
					},
					{
						name: "bodystate",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 20
					},
					{
						name: "healthstate",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 24
					},
					{
						name: "effectstate",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 28
					},
					{
						name: "virtue",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 32
					},
					{
						name: "honor",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 36
					},
					{
						name: "jobpoint",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 40
					},
					{
						name: "hp",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 42
					},
					{
						name: "maxhp",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 46
					},
					{
						name: "sp",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 50
					},
					{
						name: "maxsp",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 52
					},
					{
						name: "speed",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 54
					},
					{
						name: "job",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 56
					},
					{
						name: "head",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 58
					},
					{
						name: "weapon",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 60
					},
					{
						name: "level",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 62
					},
					{
						name: "sppoint",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 64
					},
					{
						name: "accessory",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 66
					},
					{
						name: "shield",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 68
					},
					{
						name: "accessory2",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 70
					},
					{
						name: "accessory3",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 72
					},
					{
						name: "headpalette",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 74
					},
					{
						name: "bodypalette",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 76
					},
					{
						name: "name",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 24,
						offset: 78
					},
					{
						name: "Str",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 102
					},
					{
						name: "Agi",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 103
					},
					{
						name: "Vit",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 104
					},
					{
						name: "Int",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 105
					},
					{
						name: "Dex",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 106
					},
					{
						name: "Luk",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 107
					},
					{
						name: "CharNum",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 108
					},
					{
						name: "haircolor",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 109
					},
					{
						name: "bIsChangedCharName",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 110
					}
				],
				offset: 0x2
			}
		],
		defaultId: 109,
		variableLength: false
	},
	PACKET_HC_REFUSE_MAKECHAR: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "ErrorCode",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 110,
		variableLength: false
	},
	PACKET_HC_ACCEPT_DELETECHAR: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 111,
		variableLength: false
	},
	PACKET_HC_REFUSE_DELETECHAR: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "ErrorCode",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 112,
		variableLength: false
	},
	PACKET_HC_NOTIFY_ZONESVR: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "mapName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 16,
				offset: 6
			},
			{
				name: "addr",
				dataType: "struct",
				structName: "ZSERVER_ADDR",
				typeLength: 6,
				arrayLength: 1,
				properties: [
					{
						name: "ip",
						dataType: "Uint32",
						typeLength: 4,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "port",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 4
					}
				],
				offset: 0x16
			}
		],
		defaultId: 113,
		variableLength: false
	},
	PACKET_CZ_ENTER: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "AuthCode",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "clientTime",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 14
			},
			{
				name: "Sex",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 18
			}
		],
		defaultId: 114,
		variableLength: false
	},
	PACKET_ZC_ACCEPT_ENTER: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "startTime",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "PosDir",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 3,
				offset: 6
			},
			{
				name: "xSize",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 9
			},
			{
				name: "ySize",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 10
			}
		],
		defaultId: 115,
		variableLength: false
	},
	PACKET_ZC_REFUSE_ENTER: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "ErrorCode",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 116,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_INITCHAR: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "Style",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "Item",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 10
			}
		],
		defaultId: 117,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_UPDATECHAR: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "Style",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "Item",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 8
			}
		],
		defaultId: 118,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_UPDATEPLAYER: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Style",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "Item",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 119,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_STANDENTRY: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "objecttype",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 3
			},
			{
				name: "speed",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 7
			},
			{
				name: "bodyState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 9
			},
			{
				name: "healthState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 11
			},
			{
				name: "effectState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 13
			},
			{
				name: "job",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 15
			},
			{
				name: "head",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 17
			},
			{
				name: "weapon",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 19
			},
			{
				name: "accessory",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 21
			},
			{
				name: "shield",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 23
			},
			{
				name: "accessory2",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 25
			},
			{
				name: "accessory3",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 27
			},
			{
				name: "headpalette",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 29
			},
			{
				name: "bodypalette",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 31
			},
			{
				name: "headDir",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 33
			},
			{
				name: "GUID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 35
			},
			{
				name: "GEmblemVer",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 39
			},
			{
				name: "honor",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 41
			},
			{
				name: "virtue",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 43
			},
			{
				name: "isPKModeON",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 45
			},
			{
				name: "sex",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 46
			},
			{
				name: "PosDir",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 3,
				offset: 47
			},
			{
				name: "xSize",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 50
			},
			{
				name: "ySize",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 51
			},
			{
				name: "state",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 52
			},
			{
				name: "clevel",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 53
			}
		],
		defaultId: 120,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_NEWENTRY: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "speed",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "bodyState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "healthState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "effectState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 12
			},
			{
				name: "job",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 14
			},
			{
				name: "head",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 16
			},
			{
				name: "weapon",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 18
			},
			{
				name: "accessory",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 20
			},
			{
				name: "shield",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 22
			},
			{
				name: "accessory2",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 24
			},
			{
				name: "accessory3",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 26
			},
			{
				name: "headpalette",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 28
			},
			{
				name: "bodypalette",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 30
			},
			{
				name: "headDir",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 32
			},
			{
				name: "GUID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 34
			},
			{
				name: "GEmblemVer",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 38
			},
			{
				name: "honor",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 40
			},
			{
				name: "virtue",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 42
			},
			{
				name: "isPKModeON",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 44
			},
			{
				name: "sex",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 45
			},
			{
				name: "PosDir",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 3,
				offset: 46
			},
			{
				name: "xSize",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 49
			},
			{
				name: "ySize",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 50
			},
			{
				name: "clevel",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 51
			}
		],
		defaultId: 121,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_ACTENTRY: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "speed",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "bodyState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "healthState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "effectState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 12
			},
			{
				name: "job",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 14
			},
			{
				name: "head",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 16
			},
			{
				name: "weapon",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 18
			},
			{
				name: "accessory",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 20
			},
			{
				name: "shield",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 22
			},
			{
				name: "accessory2",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 24
			},
			{
				name: "accessory3",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 26
			},
			{
				name: "headpalette",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 28
			},
			{
				name: "bodypalette",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 30
			},
			{
				name: "headDir",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 32
			},
			{
				name: "GUID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 34
			},
			{
				name: "GEmblemVer",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 38
			},
			{
				name: "honor",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 40
			},
			{
				name: "virtue",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 42
			},
			{
				name: "isPKModeON",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 44
			},
			{
				name: "sex",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 45
			},
			{
				name: "PosDir",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 3,
				offset: 46
			},
			{
				name: "xSize",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 49
			},
			{
				name: "ySize",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 50
			},
			{
				name: "action",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 51
			},
			{
				name: "actStartTime",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 52
			},
			{
				name: "clevel",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 56
			}
		],
		defaultId: 122,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_MOVEENTRY: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "speed",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "bodyState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "healthState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "effectState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 12
			},
			{
				name: "job",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 14
			},
			{
				name: "head",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 16
			},
			{
				name: "weapon",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 18
			},
			{
				name: "accessory",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 20
			},
			{
				name: "moveStartTime",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 22
			},
			{
				name: "shield",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 26
			},
			{
				name: "accessory2",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 28
			},
			{
				name: "accessory3",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 30
			},
			{
				name: "headpalette",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 32
			},
			{
				name: "bodypalette",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 34
			},
			{
				name: "headDir",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 36
			},
			{
				name: "GUID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 38
			},
			{
				name: "GEmblemVer",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 42
			},
			{
				name: "honor",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 44
			},
			{
				name: "virtue",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 46
			},
			{
				name: "isPKModeON",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 48
			},
			{
				name: "sex",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 49
			},
			{
				name: "MoveData",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 6,
				offset: 50
			},
			{
				name: "xSize",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 56
			},
			{
				name: "ySize",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 57
			},
			{
				name: "clevel",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 58
			}
		],
		defaultId: 123,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_STANDENTRY_NPC: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "objecttype",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 3
			},
			{
				name: "speed",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 7
			},
			{
				name: "bodyState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 9
			},
			{
				name: "healthState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 11
			},
			{
				name: "effectState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 13
			},
			{
				name: "head",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 15
			},
			{
				name: "weapon",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 17
			},
			{
				name: "accessory",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 19
			},
			{
				name: "job",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 21
			},
			{
				name: "shield",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 23
			},
			{
				name: "accessory2",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 25
			},
			{
				name: "accessory3",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 27
			},
			{
				name: "headpalette",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 29
			},
			{
				name: "bodypalette",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 31
			},
			{
				name: "headDir",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 33
			},
			{
				name: "isPKModeON",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 35
			},
			{
				name: "sex",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 36
			},
			{
				name: "PosDir",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 3,
				offset: 37
			},
			{
				name: "xSize",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 40
			},
			{
				name: "ySize",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 41
			}
		],
		defaultId: 124,
		variableLength: false
	},
	PACKET_CZ_NOTIFY_ACTORINIT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 125,
		variableLength: false
	},
	PACKET_CZ_REQUEST_TIME: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "clientTime",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 126,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_TIME: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "time",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 127,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_VANISH: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "type",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 128,
		variableLength: false
	},
	PACKET_SC_NOTIFY_BAN: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "ErrorCode",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 129,
		variableLength: false
	},
	PACKET_CZ_REQUEST_QUIT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 130,
		variableLength: false
	},
	PACKET_ZC_ACCEPT_QUIT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 131,
		variableLength: false
	},
	PACKET_ZC_REFUSE_QUIT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 132,
		variableLength: false
	},
	PACKET_CZ_REQUEST_MOVE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "dest",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 3,
				offset: 2
			}
		],
		defaultId: 133,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_MOVE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "MoveData",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 6,
				offset: 6
			},
			{
				name: "moveStartTime",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 12
			}
		],
		defaultId: 134,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_PLAYERMOVE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "moveStartTime",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "MoveData",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 6,
				offset: 6
			}
		],
		defaultId: 135,
		variableLength: false
	},
	PACKET_ZC_STOPMOVE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "xPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "yPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 8
			}
		],
		defaultId: 136,
		variableLength: false
	},
	PACKET_CZ_REQUEST_ACT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "targetGID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "action",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 137,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_ACT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "targetGID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "startTime",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "attackMT",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 14
			},
			{
				name: "attackedMT",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 18
			},
			{
				name: "damage",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 22
			},
			{
				name: "count",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 24
			},
			{
				name: "action",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 26
			},
			{
				name: "leftDamage",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 27
			}
		],
		defaultId: 138,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_ACT_POSITION: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "targetGID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "startTime",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "xPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 14
			},
			{
				name: "yPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 16
			},
			{
				name: "damage",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 18
			},
			{
				name: "count",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 20
			},
			{
				name: "action",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 22
			}
		],
		defaultId: 139,
		variableLength: false
	},
	PACKET_CZ_REQUEST_CHAT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "msg",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: -1,
				offset: 4
			}
		],
		defaultId: 140,
		variableLength: true
	},
	PACKET_ZC_NOTIFY_CHAT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "msg",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: -1,
				offset: 8
			}
		],
		defaultId: 141,
		variableLength: true
	},
	PACKET_ZC_NOTIFY_PLAYERCHAT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "msg",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: -1,
				offset: 4
			}
		],
		defaultId: 142,
		variableLength: true
	},
	PACKET_SERVER_ENTRY_ACK: {
		properties: [
			{
				name: "Header",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 143,
		variableLength: false
	},
	PACKET_CZ_CONTACTNPC: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "NAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "type",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 144,
		variableLength: false
	},
	PACKET_ZC_NPCACK_MAPMOVE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "mapName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 16,
				offset: 2
			},
			{
				name: "xPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 18
			},
			{
				name: "yPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 20
			}
		],
		defaultId: 145,
		variableLength: false
	},
	PACKET_ZC_NPCACK_SERVERMOVE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "mapName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 16,
				offset: 2
			},
			{
				name: "xPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 18
			},
			{
				name: "yPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 20
			},
			{
				name: "addr",
				dataType: "struct",
				structName: "ZSERVER_ADDR",
				typeLength: -1,
				arrayLength: 1,
				properties: [
					{
						name: "ip",
						dataType: "Uint32",
						typeLength: 4,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "port",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 4
					}
				],
				offset: 0x16
			}
		],
		defaultId: 146,
		variableLength: false
	},
	PACKET_ZC_NPCACK_ENABLE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 147,
		variableLength: false
	},
	PACKET_CZ_REQNAME: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 148,
		variableLength: false
	},
	PACKET_ZC_ACK_REQNAME: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "CName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 6
			}
		],
		defaultId: 149,
		variableLength: false
	},
	PACKET_CZ_WHISPER: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "receiver",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 4
			},
			{
				name: "msg",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: -1,
				offset: 28
			}
		],
		defaultId: 150,
		variableLength: true
	},
	PACKET_ZC_WHISPER: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "sender",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 4
			},
			{
				name: "msg",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: -1,
				offset: 44
			}
		],
		defaultId: 151,
		variableLength: true
	},
	PACKET_ZC_ACK_WHISPER: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "result",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 152,
		variableLength: false
	},
	PACKET_CZ_BROADCAST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "msg",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: -1,
				offset: 4
			}
		],
		defaultId: 153,
		variableLength: true
	},
	PACKET_ZC_BROADCAST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "msg",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: -1,
				offset: 4
			}
		],
		defaultId: 154,
		variableLength: true
	},
	PACKET_CZ_CHANGE_DIRECTION: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "headDir",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "dir",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 155,
		variableLength: false
	},
	PACKET_ZC_CHANGE_DIRECTION: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "headDir",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "dir",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 8
			}
		],
		defaultId: 156,
		variableLength: false
	},
	PACKET_ZC_ITEM_ENTRY: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "ITAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "ITID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "IsIdentified",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "xPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 9
			},
			{
				name: "yPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 11
			},
			{
				name: "count",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 13
			},
			{
				name: "subX",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 15
			},
			{
				name: "subY",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 16
			}
		],
		defaultId: 157,
		variableLength: false
	},
	PACKET_ZC_ITEM_FALL_ENTRY: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "ITAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "ITID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "IsIdentified",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "xPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 9
			},
			{
				name: "yPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 11
			},
			{
				name: "subX",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 13
			},
			{
				name: "subY",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 14
			},
			{
				name: "count",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 15
			}
		],
		defaultId: 158,
		variableLength: false
	},
	PACKET_CZ_ITEM_PICKUP: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "ITAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 159,
		variableLength: false
	},
	PACKET_ZC_ITEM_PICKUP_ACK: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Index",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "count",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "ITID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "IsIdentified",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "IsDamaged",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 9
			},
			{
				name: "refiningLevel",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "slot",
				dataType: "struct",
				structName: "EQUIPSLOTINFOEQUIPSLOTINFO",
				typeLength: -1,
				arrayLength: 1,
				properties: [
					{
						name: "card1",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "card2",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 2
					},
					{
						name: "card3",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "card4",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 6
					}
				],
				offset: 0xb
			},
			{
				name: "location",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 19
			},
			{
				name: "type",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 21
			},
			{
				name: "result",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 22
			}
		],
		defaultId: 160,
		variableLength: false
	},
	PACKET_ZC_ITEM_DISAPPEAR: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "ITAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 161,
		variableLength: false
	},
	PACKET_CZ_ITEM_THROW: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Index",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "count",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 162,
		variableLength: false
	},
	PACKET_ZC_NORMAL_ITEMLIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "itemInfo",
				dataType: "struct",
				typeLength: 10,
				structName: "NORMALITEM_EXTRAINFO",
				arrayLength: -1,
				properties: [
					{
						name: "index",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "ITID",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 2
					},
					{
						name: "type",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "IsIdentified",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 5
					},
					{
						name: "count",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 6
					},
					{
						name: "WearState",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 8
					}
				],
				offset: 0x4
			}
		],
		defaultId: 163,
		variableLength: true
	},
	PACKET_ZC_EQUIPMENT_ITEMLIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "itemInfo",
				dataType: "struct",
				typeLength: 20,
				structName: "EQUIPMENTITEM_EXTRAINFO",
				arrayLength: -1,
				properties: [
					{
						name: "index",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "ITID",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 2
					},
					{
						name: "type",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "IsIdentified",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 5
					},
					{
						name: "location",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 6
					},
					{
						name: "WearState",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 8
					},
					{
						name: "IsDamaged",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 10
					},
					{
						name: "RefiningLevel",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 11
					},
					{
						name: "slot",
						dataType: "struct",
						structName: "EQUIPSLOTINFO",
						typeLength: -1,
						arrayLength: 1,
						properties: [
							{
								name: "card1",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 0
							},
							{
								name: "card2",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 2
							},
							{
								name: "card3",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 4
							},
							{
								name: "card4",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 6
							}
						],
						offset: 0xc
					}
				],
				offset: 0x4
			}
		],
		defaultId: 164,
		variableLength: true
	},
	PACKET_ZC_STORE_NORMAL_ITEMLIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "itemInfo",
				dataType: "struct",
				typeLength: 10,
				structName: "NORMALITEM_EXTRAINFO",
				arrayLength: -1,
				properties: [
					{
						name: "index",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "ITID",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 2
					},
					{
						name: "type",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "IsIdentified",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 5
					},
					{
						name: "count",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 6
					},
					{
						name: "WearState",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 8
					}
				],
				offset: 0x4
			}
		],
		defaultId: 165,
		variableLength: true
	},
	PACKET_ZC_STORE_EQUIPMENT_ITEMLIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "itemInfo",
				dataType: "struct",
				typeLength: 20,
				structName: "EQUIPMENTITEM_EXTRAINFO",
				arrayLength: -1,
				properties: [
					{
						name: "index",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "ITID",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 2
					},
					{
						name: "type",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "IsIdentified",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 5
					},
					{
						name: "location",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 6
					},
					{
						name: "WearState",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 8
					},
					{
						name: "IsDamaged",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 10
					},
					{
						name: "RefiningLevel",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 11
					},
					{
						name: "slot",
						dataType: "struct",
						structName: "EQUIPSLOTINFO",
						typeLength: -1,
						arrayLength: 1,
						properties: [
							{
								name: "card1",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 0
							},
							{
								name: "card2",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 2
							},
							{
								name: "card3",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 4
							},
							{
								name: "card4",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 6
							}
						],
						offset: 0xc
					}
				],
				offset: 0x4
			}
		],
		defaultId: 166,
		variableLength: true
	},
	PACKET_CZ_USE_ITEM: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "index",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 167,
		variableLength: false
	},
	PACKET_ZC_USE_ITEM_ACK: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "index",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "count",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "result",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 168,
		variableLength: false
	},
	PACKET_CZ_REQ_WEAR_EQUIP: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "index",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "wearLocation",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 169,
		variableLength: false
	},
	PACKET_ZC_REQ_WEAR_EQUIP_ACK: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "index",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "wearLocation",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "result",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 170,
		variableLength: false
	},
	PACKET_CZ_REQ_TAKEOFF_EQUIP: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "index",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 171,
		variableLength: false
	},
	PACKET_ZC_REQ_TAKEOFF_EQUIP_ACK: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "index",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "wearLocation",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "result",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 172,
		variableLength: false
	},
	PACKET_ZC_ITEM_THROW_ACK: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Index",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "count",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 175,
		variableLength: false
	},
	PACKET_ZC_PAR_CHANGE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "varID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "count",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 176,
		variableLength: false
	},
	PACKET_ZC_LONGPAR_CHANGE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "varID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "amount",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 177,
		variableLength: false
	},
	PACKET_CZ_RESTART: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "type",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 178,
		variableLength: false
	},
	PACKET_ZC_RESTART_ACK: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "type",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 179,
		variableLength: false
	},
	PACKET_ZC_SAY_DIALOG: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "NAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "msg",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: -1,
				offset: 8
			}
		],
		defaultId: 180,
		variableLength: true
	},
	PACKET_ZC_WAIT_DIALOG: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "NAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 181,
		variableLength: false
	},
	PACKET_ZC_CLOSE_DIALOG: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "NAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 182,
		variableLength: false
	},
	PACKET_ZC_MENU_LIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "NAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "msg",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: -1,
				offset: 8
			}
		],
		defaultId: 183,
		variableLength: true
	},
	PACKET_CZ_CHOOSE_MENU: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "NAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "num",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 184,
		variableLength: false
	},
	PACKET_CZ_REQ_NEXT_SCRIPT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "NAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 185,
		variableLength: false
	},
	PACKET_CZ_REQ_STATUS: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 186,
		variableLength: false
	},
	PACKET_CZ_STATUS_CHANGE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "statusID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "changeAmount",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 187,
		variableLength: false
	},
	PACKET_ZC_STATUS_CHANGE_ACK: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "statusID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "result",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "value",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 5
			}
		],
		defaultId: 188,
		variableLength: false
	},
	PACKET_ZC_STATUS: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "point",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "str",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "standardStr",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 5
			},
			{
				name: "agi",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "standardAgi",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 7
			},
			{
				name: "vit",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "standardVit",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 9
			},
			{
				name: "Int",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "standardInt",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 11
			},
			{
				name: "dex",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 12
			},
			{
				name: "standardDex",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 13
			},
			{
				name: "luk",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 14
			},
			{
				name: "standardLuk",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 15
			},
			{
				name: "attPower",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 16
			},
			{
				name: "refiningPower",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 18
			},
			{
				name: "max_mattPower",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 20
			},
			{
				name: "min_mattPower",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 22
			},
			{
				name: "itemdefPower",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 24
			},
			{
				name: "plusdefPower",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 26
			},
			{
				name: "mdefPower",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 28
			},
			{
				name: "plusmdefPower",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 30
			},
			{
				name: "hitSuccessValue",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 32
			},
			{
				name: "avoidSuccessValue",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 34
			},
			{
				name: "plusAvoidSuccessValue",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 36
			},
			{
				name: "criticalSuccessValue",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 38
			},
			{
				name: "ASPD",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 40
			},
			{
				name: "plusASPD",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 42
			}
		],
		defaultId: 189,
		variableLength: false
	},
	PACKET_ZC_STATUS_CHANGE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "statusID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "value",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 190,
		variableLength: false
	},
	PACKET_CZ_REQ_EMOTION: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "type",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 191,
		variableLength: false
	},
	PACKET_ZC_EMOTION: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "type",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 192,
		variableLength: false
	},
	PACKET_CZ_REQ_USER_COUNT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 193,
		variableLength: false
	},
	PACKET_ZC_USER_COUNT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "count",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 194,
		variableLength: false
	},
	PACKET_ZC_SPRITE_CHANGE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "type",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "value",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 7
			}
		],
		defaultId: 195,
		variableLength: false
	},
	PACKET_ZC_SELECT_DEALTYPE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "NAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 196,
		variableLength: false
	},
	PACKET_CZ_ACK_SELECT_DEALTYPE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "NAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "type",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 197,
		variableLength: false
	},
	PACKET_ZC_PC_PURCHASE_ITEMLIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "itemList",
				dataType: "struct",
				typeLength: 11,
				structName: "PURCHASE_ITEM",
				arrayLength: -1,
				properties: [
					{
						name: "price",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "discountprice",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "type",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 8
					},
					{
						name: "ITID",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 9
					}
				],
				offset: 0x4
			}
		],
		defaultId: 198,
		variableLength: true
	},
	PACKET_ZC_PC_SELL_ITEMLIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "itemList",
				dataType: "struct",
				typeLength: 10,
				structName: "SELL_ITEM",
				arrayLength: -1,
				properties: [
					{
						name: "index",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "price",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 2
					},
					{
						name: "overchargeprice",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 6
					}
				],
				offset: 0x4
			}
		],
		defaultId: 199,
		variableLength: true
	},
	PACKET_CZ_PC_PURCHASE_ITEMLIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "itemList",
				dataType: "struct",
				typeLength: 4,
				structName: "CZ_PURCHASE_ITEM",
				arrayLength: -1,
				properties: [
					{
						name: "count",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "ITID",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 2
					}
				],
				offset: 0x4
			}
		],
		defaultId: 200,
		variableLength: true
	},
	PACKET_CZ_PC_SELL_ITEMLIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "itemList",
				dataType: "struct",
				typeLength: 4,
				structName: "CZ_SELL_ITEM",
				arrayLength: -1,
				properties: [
					{
						name: "index",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "count",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 2
					}
				],
				offset: 0x4
			}
		],
		defaultId: 201,
		variableLength: true
	},
	PACKET_ZC_PC_PURCHASE_RESULT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "result",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 202,
		variableLength: false
	},
	PACKET_ZC_PC_SELL_RESULT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "result",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 203,
		variableLength: false
	},
	PACKET_CZ_DISCONNECT_CHARACTER: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 204,
		variableLength: false
	},
	PACKET_ZC_ACK_DISCONNECT_CHARACTER: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "result",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 205,
		variableLength: false
	},
	PACKET_CZ_DISCONNECT_ALL_CHARACTER: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 206,
		variableLength: false
	},
	PACKET_CZ_SETTING_WHISPER_PC: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "name",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 2
			},
			{
				name: "type",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 26
			}
		],
		defaultId: 207,
		variableLength: false
	},
	PACKET_CZ_SETTING_WHISPER_STATE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "type",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 208,
		variableLength: false
	},
	PACKET_ZC_SETTING_WHISPER_PC: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "type",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "result",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 3
			}
		],
		defaultId: 209,
		variableLength: false
	},
	PACKET_ZC_SETTING_WHISPER_STATE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "type",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "result",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 3
			}
		],
		defaultId: 210,
		variableLength: false
	},
	PACKET_CZ_REQ_WHISPER_LIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 211,
		variableLength: false
	},
	PACKET_ZC_WHISPER_LIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "wisperList",
				dataType: "struct",
				typeLength: 24,
				structName: "WHISPER_ITEM",
				arrayLength: -1,
				properties: [
					{
						name: "name",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 24,
						offset: 0
					}
				],
				offset: 0x4
			}
		],
		defaultId: 212,
		variableLength: true
	},
	PACKET_CZ_CREATE_CHATROOM: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "size",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "type",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "passwd",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 8,
				offset: 7
			},
			{
				name: "title",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: -1,
				offset: 15
			}
		],
		defaultId: 213,
		variableLength: true
	},
	PACKET_ZC_ACK_CREATE_CHATROOM: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "result",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 214,
		variableLength: false
	},
	PACKET_ZC_ROOM_NEWENTRY: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "roomID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "maxcount",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 12
			},
			{
				name: "curcount",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 14
			},
			{
				name: "type",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 16
			},
			{
				name: "title",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: -1,
				offset: 17
			}
		],
		defaultId: 215,
		variableLength: true
	},
	PACKET_ZC_DESTROY_ROOM: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "roomID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 216,
		variableLength: false
	},
	PACKET_CZ_REQ_ENTER_ROOM: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "roomID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "passwd",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 8,
				offset: 6
			}
		],
		defaultId: 217,
		variableLength: false
	},
	PACKET_ZC_REFUSE_ENTER_ROOM: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "result",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 218,
		variableLength: false
	},
	PACKET_ZC_ENTER_ROOM: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "roomID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "memberList",
				dataType: "struct",
				typeLength: 28,
				structName: "ROOM_MEMBER",
				arrayLength: -1,
				properties: [
					{
						name: "role",
						dataType: "Uint32",
						typeLength: 4,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "name",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 24,
						offset: 4
					}
				],
				offset: 0x8
			}
		],
		defaultId: 219,
		variableLength: true
	},
	PACKET_ZC_MEMBER_NEWENTRY: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "curcount",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "name",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 4
			}
		],
		defaultId: 220,
		variableLength: false
	},
	PACKET_ZC_MEMBER_EXIT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "curcount",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "name",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 4
			},
			{
				name: "type",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 28
			}
		],
		defaultId: 221,
		variableLength: false
	},
	PACKET_CZ_CHANGE_CHATROOM: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "size",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "type",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "passwd",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 8,
				offset: 7
			},
			{
				name: "title",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: -1,
				offset: 15
			}
		],
		defaultId: 222,
		variableLength: true
	},
	PACKET_ZC_CHANGE_CHATROOM: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "roomID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "maxcount",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 12
			},
			{
				name: "curcount",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 14
			},
			{
				name: "type",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 16
			},
			{
				name: "title",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: -1,
				offset: 17
			}
		],
		defaultId: 223,
		variableLength: true
	},
	PACKET_CZ_REQ_ROLE_CHANGE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "role",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "name",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 6
			}
		],
		defaultId: 224,
		variableLength: false
	},
	PACKET_ZC_ROLE_CHANGE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "role",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "name",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 6
			}
		],
		defaultId: 225,
		variableLength: false
	},
	PACKET_CZ_REQ_EXPEL_MEMBER: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "name",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 2
			}
		],
		defaultId: 226,
		variableLength: false
	},
	PACKET_CZ_EXIT_ROOM: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 227,
		variableLength: false
	},
	PACKET_CZ_REQ_EXCHANGE_ITEM: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 228,
		variableLength: false
	},
	PACKET_ZC_REQ_EXCHANGE_ITEM: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "name",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 2
			}
		],
		defaultId: 229,
		variableLength: false
	},
	PACKET_CZ_ACK_EXCHANGE_ITEM: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "result",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 230,
		variableLength: false
	},
	PACKET_ZC_ACK_EXCHANGE_ITEM: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "result",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 231,
		variableLength: false
	},
	PACKET_CZ_ADD_EXCHANGE_ITEM: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "index",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "count",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 232,
		variableLength: false
	},
	PACKET_ZC_ADD_EXCHANGE_ITEM: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "count",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "ITID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "IsIdentified",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "IsDamaged",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 9
			},
			{
				name: "refiningLevel",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "slot",
				dataType: "struct",
				structName: "EQUIPSLOTINFO",
				typeLength: -1,
				arrayLength: 1,
				properties: [
					{
						name: "card1",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "card2",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 2
					},
					{
						name: "card3",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "card4",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 6
					}
				],
				offset: 0xb
			}
		],
		defaultId: 233,
		variableLength: false
	},
	PACKET_ZC_ACK_ADD_EXCHANGE_ITEM: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Index",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "result",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 234,
		variableLength: false
	},
	PACKET_CZ_CONCLUDE_EXCHANGE_ITEM: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 235,
		variableLength: false
	},
	PACKET_ZC_CONCLUDE_EXCHANGE_ITEM: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "who",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 236,
		variableLength: false
	},
	PACKET_CZ_CANCEL_EXCHANGE_ITEM: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 237,
		variableLength: false
	},
	PACKET_ZC_CANCEL_EXCHANGE_ITEM: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 238,
		variableLength: false
	},
	PACKET_CZ_EXEC_EXCHANGE_ITEM: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 239,
		variableLength: false
	},
	PACKET_ZC_EXEC_EXCHANGE_ITEM: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "result",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 240,
		variableLength: false
	},
	PACKET_ZC_EXCHANGEITEM_UNDO: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 241,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_STOREITEM_COUNTINFO: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "curCount",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "maxCount",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 242,
		variableLength: false
	},
	PACKET_CZ_MOVE_ITEM_FROM_BODY_TO_STORE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "index",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "count",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 243,
		variableLength: false
	},
	PACKET_ZC_ADD_ITEM_TO_STORE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "index",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "count",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "ITID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "IsIdentified",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "IsDamaged",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 11
			},
			{
				name: "refiningLevel",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 12
			},
			{
				name: "slot",
				dataType: "struct",
				structName: "EQUIPSLOTINFO",
				typeLength: -1,
				arrayLength: 1,
				properties: [
					{
						name: "card1",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "card2",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 2
					},
					{
						name: "card3",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "card4",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 6
					}
				],
				offset: 0xd
			}
		],
		defaultId: 244,
		variableLength: false
	},
	PACKET_CZ_MOVE_ITEM_FROM_STORE_TO_BODY: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "index",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "count",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 245,
		variableLength: false
	},
	PACKET_ZC_DELETE_ITEM_FROM_STORE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "index",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "count",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 246,
		variableLength: false
	},
	PACKET_CZ_CLOSE_STORE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 247,
		variableLength: false
	},
	PACKET_ZC_CLOSE_STORE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 248,
		variableLength: false
	},
	PACKET_CZ_MAKE_GROUP: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "groupName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 2
			}
		],
		defaultId: 249,
		variableLength: false
	},
	PACKET_ZC_ACK_MAKE_GROUP: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "result",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 250,
		variableLength: false
	},
	PACKET_ZC_GROUP_LIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "groupName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 4
			},
			{
				name: "groupInfo",
				dataType: "struct",
				typeLength: 46,
				structName: "GROUPMEMBER_INFO",
				arrayLength: -1,
				properties: [
					{
						name: "AID",
						dataType: "Uint32",
						typeLength: 4,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "characterName",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 24,
						offset: 4
					},
					{
						name: "mapName",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 16,
						offset: 28
					},
					{
						name: "role",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 44
					},
					{
						name: "state",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 45
					}
				],
				offset: 0x1c
			}
		],
		defaultId: 251,
		variableLength: true
	},
	PACKET_CZ_REQ_JOIN_GROUP: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 252,
		variableLength: false
	},
	PACKET_ZC_ACK_REQ_JOIN_GROUP: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "characterName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 2
			},
			{
				name: "answer",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 26
			}
		],
		defaultId: 253,
		variableLength: false
	},
	PACKET_ZC_REQ_JOIN_GROUP: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GRID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "groupName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 6
			}
		],
		defaultId: 254,
		variableLength: false
	},
	PACKET_CZ_JOIN_GROUP: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GRID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "answer",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 255,
		variableLength: false
	},
	PACKET_CZ_REQ_LEAVE_GROUP: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 256,
		variableLength: false
	},
	PACKET_ZC_GROUPINFO_CHANGE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "expOption",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 257,
		variableLength: false
	},
	PACKET_CZ_CHANGE_GROUPEXPOPTION: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "expOption",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 258,
		variableLength: false
	},
	PACKET_CZ_REQ_EXPEL_GROUP_MEMBER: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "characterName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 6
			}
		],
		defaultId: 259,
		variableLength: false
	},
	PACKET_ZC_ADD_MEMBER_TO_GROUP: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "Role",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "xPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "yPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 12
			},
			{
				name: "state",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 14
			},
			{
				name: "groupName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 15
			},
			{
				name: "characterName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 39
			},
			{
				name: "mapName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 16,
				offset: 63
			}
		],
		defaultId: 260,
		variableLength: false
	},
	PACKET_ZC_DELETE_MEMBER_FROM_GROUP: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "characterName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 6
			},
			{
				name: "result",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 30
			}
		],
		defaultId: 261,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_HP_TO_GROUPM: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "hp",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "maxhp",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 8
			}
		],
		defaultId: 262,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_POSITION_TO_GROUPM: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "xPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "yPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 8
			}
		],
		defaultId: 263,
		variableLength: false
	},
	PACKET_CZ_REQUEST_CHAT_PARTY: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "msg",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: -1,
				offset: 4
			}
		],
		defaultId: 264,
		variableLength: true
	},
	PACKET_ZC_NOTIFY_CHAT_PARTY: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "msg",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: -1,
				offset: 8
			}
		],
		defaultId: 265,
		variableLength: true
	},
	PACKET_ZC_MVP_GETTING_ITEM: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "ITID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 266,
		variableLength: false
	},
	PACKET_ZC_MVP_GETTING_SPECIAL_EXP: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "exp",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 267,
		variableLength: false
	},
	PACKET_ZC_MVP: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 268,
		variableLength: false
	},
	PACKET_ZC_THROW_MVPITEM: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 269,
		variableLength: false
	},
	PACKET_ZC_SKILLINFO_UPDATE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "SKID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "level",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "spcost",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "attackRange",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "upgradable",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 10
			}
		],
		defaultId: 270,
		variableLength: false
	},
	PACKET_ZC_SKILLINFO_LIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "skillList",
				dataType: "struct",
				typeLength: 37,
				structName: "SKILLINFO",
				arrayLength: -1,
				properties: [
					{
						name: "SKID",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "type",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 2
					},
					{
						name: "level",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 6
					},
					{
						name: "spcost",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 8
					},
					{
						name: "attackRange",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 10
					},
					{
						name: "skillName",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 24,
						offset: 12
					},
					{
						name: "upgradable",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 36
					}
				],
				offset: 0x4
			}
		],
		defaultId: 271,
		variableLength: true
	},
	PACKET_ZC_ACK_TOUSESKILL: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "SKID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "NUM",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "result",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "cause",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 9
			}
		],
		defaultId: 272,
		variableLength: false
	},
	PACKET_ZC_ADD_SKILL: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "data",
				dataType: "struct",
				structName: "SKILLINFO",
				typeLength: -1,
				arrayLength: 1,
				properties: [
					{
						name: "SKID",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "type",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 2
					},
					{
						name: "level",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 6
					},
					{
						name: "spcost",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 8
					},
					{
						name: "attackRange",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 10
					},
					{
						name: "skillName",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 24,
						offset: 12
					},
					{
						name: "upgradable",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 36
					}
				],
				offset: 0x2
			}
		],
		defaultId: 273,
		variableLength: false
	},
	PACKET_CZ_UPGRADE_SKILLLEVEL: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "SKID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 274,
		variableLength: false
	},
	PACKET_CZ_USE_SKILL: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "selectedLevel",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "SKID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "targetID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 275,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_SKILL: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "SKID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "targetID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "startTime",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 12
			},
			{
				name: "attackMT",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 16
			},
			{
				name: "attackedMT",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 20
			},
			{
				name: "damage",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 24
			},
			{
				name: "level",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 26
			},
			{
				name: "count",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 28
			},
			{
				name: "action",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 30
			}
		],
		defaultId: 276,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_SKILL_POSITION: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "SKID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "targetID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "startTime",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 12
			},
			{
				name: "attackMT",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 16
			},
			{
				name: "attackedMT",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 20
			},
			{
				name: "xPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 24
			},
			{
				name: "yPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 26
			},
			{
				name: "damage",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 28
			},
			{
				name: "level",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 30
			},
			{
				name: "count",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 32
			},
			{
				name: "action",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 34
			}
		],
		defaultId: 277,
		variableLength: false
	},
	PACKET_CZ_USE_SKILL_TOGROUND: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "selectedLevel",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "SKID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "xPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "yPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 8
			}
		],
		defaultId: 278,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_GROUNDSKILL: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "SKID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "level",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "xPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "yPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 12
			},
			{
				name: "startTime",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 14
			}
		],
		defaultId: 279,
		variableLength: false
	},
	PACKET_CZ_CANCEL_LOCKON: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 280,
		variableLength: false
	},
	PACKET_ZC_STATE_CHANGE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "bodyState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "healthState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "effectState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "isPKModeON",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 12
			}
		],
		defaultId: 281,
		variableLength: false
	},
	PACKET_ZC_USE_SKILL: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "SKID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "level",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "targetAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "srcAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "result",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 14
			}
		],
		defaultId: 282,
		variableLength: false
	},
	PACKET_CZ_SELECT_WARPPOINT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "SKID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "mapName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 16,
				offset: 4
			}
		],
		defaultId: 283,
		variableLength: false
	},
	PACKET_ZC_WARPLIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "SKID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "mapName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 4,
				offset: 4
			}
		],
		defaultId: 284,
		variableLength: false
	},
	PACKET_CZ_REMEMBER_WARPPOINT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 285,
		variableLength: false
	},
	PACKET_ZC_ACK_REMEMBER_WARPPOINT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "errorCode",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 286,
		variableLength: false
	},
	PACKET_ZC_SKILL_ENTRY: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "creatorAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "xPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "yPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 12
			},
			{
				name: "job",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 14
			},
			{
				name: "isVisible",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 15
			}
		],
		defaultId: 287,
		variableLength: false
	},
	PACKET_ZC_SKILL_DISAPPEAR: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 288,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_CARTITEM_COUNTINFO: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "curCount",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "maxCount",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "curWeight",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "maxWeight",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 10
			}
		],
		defaultId: 289,
		variableLength: false
	},
	PACKET_ZC_CART_EQUIPMENT_ITEMLIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "itemInfo",
				dataType: "struct",
				typeLength: 20,
				structName: "EQUIPMENTITEM_EXTRAINFO",
				arrayLength: -1,
				properties: [
					{
						name: "index",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "ITID",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 2
					},
					{
						name: "type",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "IsIdentified",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 5
					},
					{
						name: "location",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 6
					},
					{
						name: "WearState",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 8
					},
					{
						name: "IsDamaged",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 10
					},
					{
						name: "RefiningLevel",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 11
					},
					{
						name: "slot",
						dataType: "struct",
						structName: "EQUIPSLOTINFO",
						typeLength: -1,
						arrayLength: 1,
						properties: [
							{
								name: "card1",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 0
							},
							{
								name: "card2",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 2
							},
							{
								name: "card3",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 4
							},
							{
								name: "card4",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 6
							}
						],
						offset: 0xc
					}
				],
				offset: 0x4
			}
		],
		defaultId: 290,
		variableLength: true
	},
	PACKET_ZC_CART_NORMAL_ITEMLIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "itemInfo",
				dataType: "struct",
				typeLength: 10,
				structName: "NORMALITEM_EXTRAINFO",
				arrayLength: -1,
				properties: [
					{
						name: "index",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "ITID",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 2
					},
					{
						name: "type",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "IsIdentified",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 5
					},
					{
						name: "count",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 6
					},
					{
						name: "WearState",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 8
					}
				],
				offset: 0x4
			}
		],
		defaultId: 291,
		variableLength: true
	},
	PACKET_ZC_ADD_ITEM_TO_CART: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "index",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "count",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "ITID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "IsIdentified",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "IsDamaged",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 11
			},
			{
				name: "refiningLevel",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 12
			},
			{
				name: "slot",
				dataType: "struct",
				structName: "EQUIPSLOTINFO",
				typeLength: -1,
				arrayLength: 1,
				properties: [
					{
						name: "card1",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "card2",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 2
					},
					{
						name: "card3",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "card4",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 6
					}
				],
				offset: 0xd
			}
		],
		defaultId: 292,
		variableLength: false
	},
	PACKET_ZC_DELETE_ITEM_FROM_CART: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "index",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "count",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 293,
		variableLength: false
	},
	PACKET_CZ_MOVE_ITEM_FROM_BODY_TO_CART: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "index",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "count",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 294,
		variableLength: false
	},
	PACKET_CZ_MOVE_ITEM_FROM_CART_TO_BODY: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "index",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "count",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 295,
		variableLength: false
	},
	PACKET_CZ_MOVE_ITEM_FROM_STORE_TO_CART: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "index",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "count",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 296,
		variableLength: false
	},
	PACKET_CZ_MOVE_ITEM_FROM_CART_TO_STORE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "index",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "count",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 297,
		variableLength: false
	},
	PACKET_CZ_REQ_CARTOFF: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 298,
		variableLength: false
	},
	PACKET_ZC_CARTOFF: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 299,
		variableLength: false
	},
	PACKET_ZC_ACK_ADDITEM_TO_CART: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "result",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 300,
		variableLength: false
	},
	PACKET_ZC_OPENSTORE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "itemcount",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 301,
		variableLength: false
	},
	PACKET_CZ_REQ_CLOSESTORE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 302,
		variableLength: false
	},
	PACKET_CZ_REQ_OPENSTORE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "storeName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 80,
				offset: 4
			},
			{
				name: "storeList",
				dataType: "struct",
				typeLength: 8,
				structName: "STORE_ITEM",
				arrayLength: -1,
				properties: [
					{
						name: "index",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "count",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 2
					},
					{
						name: "Price",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 4
					}
				],
				offset: 0x54
			}
		],
		defaultId: 303,
		variableLength: true
	},
	PACKET_CZ_REQ_BUY_FROMMC: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 304,
		variableLength: false
	},
	PACKET_ZC_STORE_ENTRY: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "makerAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "storeName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 80,
				offset: 6
			}
		],
		defaultId: 305,
		variableLength: false
	},
	PACKET_ZC_DISAPPEAR_ENTRY: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "makerAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 306,
		variableLength: false
	},
	PACKET_ZC_PC_PURCHASE_ITEMLIST_FROMMC: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "itemList",
				dataType: "struct",
				typeLength: 22,
				structName: "PURCHASE_ITEM_FROMMC",
				arrayLength: -1,
				properties: [
					{
						name: "price",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "count",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "index",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 6
					},
					{
						name: "type",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 8
					},
					{
						name: "ITID",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 9
					},
					{
						name: "IsIdentified",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 11
					},
					{
						name: "IsDamaged",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 12
					},
					{
						name: "refiningLevel",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 13
					},
					{
						name: "slot",
						dataType: "struct",
						structName: "EQUIPSLOTINFO",
						typeLength: -1,
						arrayLength: 1,
						properties: [
							{
								name: "card1",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 0
							},
							{
								name: "card2",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 2
							},
							{
								name: "card3",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 4
							},
							{
								name: "card4",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 6
							}
						],
						offset: 0xe
					}
				],
				offset: 0x8
			}
		],
		defaultId: 307,
		variableLength: true
	},
	PACKET_CZ_PC_PURCHASE_ITEMLIST_FROMMC: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "itemList",
				dataType: "struct",
				typeLength: 4,
				structName: "CZ_PURCHASE_ITEM_FROMMC",
				arrayLength: -1,
				properties: [
					{
						name: "count",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "index",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 2
					}
				],
				offset: 0x8
			}
		],
		defaultId: 308,
		variableLength: true
	},
	PACKET_ZC_PC_PURCHASE_RESULT_FROMMC: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "index",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "curcount",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "result",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 309,
		variableLength: false
	},
	PACKET_ZC_PC_PURCHASE_MYITEMLIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "itemList",
				dataType: "struct",
				typeLength: 22,
				structName: "PURCHASE_MYITEM",
				arrayLength: -1,
				properties: [
					{
						name: "price",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "index",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "count",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 6
					},
					{
						name: "type",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 8
					},
					{
						name: "ITID",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 9
					},
					{
						name: "IsIdentified",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 11
					},
					{
						name: "IsDamaged",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 12
					},
					{
						name: "refiningLevel",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 13
					},
					{
						name: "slot",
						dataType: "struct",
						structName: "EQUIPSLOTINFO",
						typeLength: -1,
						arrayLength: 1,
						properties: [
							{
								name: "card1",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 0
							},
							{
								name: "card2",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 2
							},
							{
								name: "card3",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 4
							},
							{
								name: "card4",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 6
							}
						],
						offset: 0xe
					}
				],
				offset: 0x8
			}
		],
		defaultId: 310,
		variableLength: true
	},
	PACKET_ZC_DELETEITEM_FROM_MCSTORE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "index",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "count",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 311,
		variableLength: false
	},
	PACKET_CZ_PKMODE_CHANGE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "isTurnOn",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 312,
		variableLength: false
	},
	PACKET_ZC_ATTACK_FAILURE_FOR_DISTANCE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "targetAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "targetXPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "targetYPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "xPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "yPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 12
			},
			{
				name: "currentAttRange",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 14
			}
		],
		defaultId: 313,
		variableLength: false
	},
	PACKET_ZC_ATTACK_RANGE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "currentAttRange",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 314,
		variableLength: false
	},
	PACKET_ZC_ACTION_FAILURE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "errorCode",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 315,
		variableLength: false
	},
	PACKET_ZC_EQUIP_ARROW: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "index",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 316,
		variableLength: false
	},
	PACKET_ZC_RECOVERY: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "varID",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "amount",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 317,
		variableLength: false
	},
	PACKET_ZC_USESKILL_ACK: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "targetID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "xPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "yPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 12
			},
			{
				name: "SKID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 14
			},
			{
				name: "property",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 16
			},
			{
				name: "delayTime",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 20
			}
		],
		defaultId: 318,
		variableLength: false
	},
	PACKET_CZ_ITEM_CREATE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "itemName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 2
			}
		],
		defaultId: 319,
		variableLength: false
	},
	PACKET_CZ_MOVETO_MAP: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "mapName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 16,
				offset: 2
			},
			{
				name: "xPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 18
			},
			{
				name: "yPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 20
			}
		],
		defaultId: 320,
		variableLength: false
	},
	PACKET_ZC_COUPLESTATUS: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "statusType",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "defaultStatus",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "plusStatus",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 10
			}
		],
		defaultId: 321,
		variableLength: false
	},
	PACKET_ZC_OPEN_EDITDLG: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "NAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 322,
		variableLength: false
	},
	PACKET_CZ_INPUT_EDITDLG: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "NAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "value",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 323,
		variableLength: false
	},
	PACKET_ZC_COMPASS: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "NAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "type",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "xPos",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "yPos",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 14
			},
			{
				name: "id",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 18
			},
			{
				name: "color",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 19
			}
		],
		defaultId: 324,
		variableLength: false
	},
	PACKET_ZC_SHOW_IMAGE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "imageName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 16,
				offset: 2
			},
			{
				name: "type",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 18
			}
		],
		defaultId: 325,
		variableLength: false
	},
	PACKET_CZ_CLOSE_DIALOG: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "NAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 326,
		variableLength: false
	},
	PACKET_ZC_AUTORUN_SKILL: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "data",
				dataType: "struct",
				structName: "SKILLINFO",
				typeLength: -1,
				arrayLength: 1,
				properties: [
					{
						name: "SKID",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "type",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 2
					},
					{
						name: "level",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 6
					},
					{
						name: "spcost",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 8
					},
					{
						name: "attackRange",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 10
					},
					{
						name: "skillName",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 24,
						offset: 12
					},
					{
						name: "upgradable",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 36
					}
				],
				offset: 0x2
			}
		],
		defaultId: 327,
		variableLength: false
	},
	PACKET_ZC_RESURRECTION: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "type",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 328,
		variableLength: false
	},
	PACKET_CZ_REQ_GIVE_MANNER_POINT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "otherAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "type",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "point",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 7
			}
		],
		defaultId: 329,
		variableLength: false
	},
	PACKET_ZC_ACK_GIVE_MANNER_POINT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "result",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 330,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_MANNER_POINT_GIVEN: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "type",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "otherCharName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 3
			}
		],
		defaultId: 331,
		variableLength: false
	},
	PACKET_ZC_MYGUILD_BASIC_INFO: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "relatedGuildList",
				dataType: "struct",
				typeLength: 32,
				structName: "RELATED_GUILD",
				arrayLength: -1,
				properties: [
					{
						name: "GDID",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "relation",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "GuildName",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 24,
						offset: 8
					}
				],
				offset: 0x4
			}
		],
		defaultId: 332,
		variableLength: true
	},
	PACKET_CZ_REQ_GUILD_MENUINTERFACE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 333,
		variableLength: false
	},
	PACKET_ZC_ACK_GUILD_MENUINTERFACE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "guildMemuFlag",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 334,
		variableLength: false
	},
	PACKET_CZ_REQ_GUILD_MENU: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Type",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 335,
		variableLength: false
	},
	PACKET_ZC_GUILD_INFO: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GDID",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "level",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "userNum",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "maxUserNum",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 14
			},
			{
				name: "userAverageLevel",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 18
			},
			{
				name: "exp",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 22
			},
			{
				name: "maxExp",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 26
			},
			{
				name: "point",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 30
			},
			{
				name: "honor",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 34
			},
			{
				name: "virtue",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 38
			},
			{
				name: "emblemVersion",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 42
			},
			{
				name: "guildname",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 46
			},
			{
				name: "masterName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 70
			},
			{
				name: "manageLand",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 16,
				offset: 94
			}
		],
		defaultId: 336,
		variableLength: false
	},
	PACKET_CZ_REQ_GUILD_EMBLEM_IMG: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GDID",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 337,
		variableLength: false
	},
	PACKET_ZC_GUILD_EMBLEM_IMG: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "GDID",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "emblemVersion",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "img",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: -1,
				offset: 12
			}
		],
		defaultId: 338,
		variableLength: true
	},
	PACKET_CZ_REGISTER_GUILD_EMBLEM_IMG: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "img",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: -1,
				offset: 4
			}
		],
		defaultId: 339,
		variableLength: true
	},
	PACKET_ZC_MEMBERMGR_INFO: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "memberInfo",
				dataType: "struct",
				typeLength: 104,
				structName: "GUILD_MEMBERMGR_INFO",
				arrayLength: -1,
				properties: [
					{
						name: "AID",
						dataType: "Uint32",
						typeLength: 4,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "GID",
						dataType: "Uint32",
						typeLength: 4,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "HeadType",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 8
					},
					{
						name: "HeadPalette",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 10
					},
					{
						name: "Sex",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 12
					},
					{
						name: "Job",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 14
					},
					{
						name: "Level",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 16
					},
					{
						name: "MemberExp",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 18
					},
					{
						name: "CurrentState",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 22
					},
					{
						name: "GPositionID",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 26
					},
					{
						name: "Memo",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 50,
						offset: 30
					},
					{
						name: "CharName",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 24,
						offset: 80
					}
				],
				offset: 0x4
			}
		],
		defaultId: 340,
		variableLength: true
	},
	PACKET_CZ_REQ_CHANGE_MEMBERPOS: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "memberInfo",
				dataType: "struct",
				typeLength: 12,
				structName: "MEMBER_POSITION_INFO",
				arrayLength: -1,
				properties: [
					{
						name: "AID",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "GID",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "positionID",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 8
					}
				],
				offset: 0x4
			}
		],
		defaultId: 341,
		variableLength: true
	},
	PACKET_ZC_ACK_REQ_CHANGE_MEMBERS: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "memberInfo",
				dataType: "struct",
				typeLength: 12,
				structName: "MEMBER_POSITION_INFO",
				arrayLength: -1,
				properties: [
					{
						name: "AID",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "GID",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "positionID",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 8
					}
				],
				offset: 0x4
			}
		],
		defaultId: 342,
		variableLength: true
	},
	PACKET_CZ_REQ_OPEN_MEMBER_INFO: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 343,
		variableLength: false
	},
	PACKET_ZC_ACK_OPEN_MEMBER_INFO: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 344,
		variableLength: false
	},
	PACKET_CZ_REQ_LEAVE_GUILD: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GDID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "AID",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "GID",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "reasonDesc",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 40,
				offset: 14
			}
		],
		defaultId: 345,
		variableLength: false
	},
	PACKET_ZC_ACK_LEAVE_GUILD: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "charName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 2
			},
			{
				name: "reasonDesc",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 40,
				offset: 26
			}
		],
		defaultId: 346,
		variableLength: false
	},
	PACKET_CZ_REQ_BAN_GUILD: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GDID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "AID",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "GID",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "reasonDesc",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 40,
				offset: 14
			}
		],
		defaultId: 347,
		variableLength: false
	},
	PACKET_ZC_ACK_BAN_GUILD: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "charName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 2
			},
			{
				name: "reasonDesc",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 40,
				offset: 26
			},
			{
				name: "account",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 66
			}
		],
		defaultId: 348,
		variableLength: false
	},
	PACKET_CZ_REQ_DISORGANIZE_GUILD: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "key",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 40,
				offset: 2
			}
		],
		defaultId: 349,
		variableLength: false
	},
	PACKET_ZC_ACK_DISORGANIZE_GUILD_RESULT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "reason",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 350,
		variableLength: false
	},
	PACKET_ZC_ACK_DISORGANIZE_GUILD: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "reasonDesc",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 40,
				offset: 2
			}
		],
		defaultId: 351,
		variableLength: false
	},
	PACKET_ZC_POSITION_INFO: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "memberInfo",
				dataType: "struct",
				typeLength: 16,
				structName: "GUILD_MEMBER_POSITION_INFO",
				arrayLength: -1,
				properties: [
					{
						name: "positionID",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "right",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "ranking",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 8
					}
				],
				offset: 0x4
			}
		],
		defaultId: 352,
		variableLength: true
	},
	PACKET_CZ_REG_CHANGE_GUILD_POSITIONINFO: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "memberList",
				dataType: "struct",
				typeLength: 40,
				structName: "GUILD_REG_POSITION_INFO",
				arrayLength: -1,
				properties: [
					{
						name: "positionID",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "right",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "ranking",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 8
					},
					{
						name: "payRate",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 12
					},
					{
						name: "posName",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 24,
						offset: 16
					}
				],
				offset: 0x4
			}
		],
		defaultId: 353,
		variableLength: true
	},
	PACKET_ZC_GUILD_SKILLINFO: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "skillPoint",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "skillList",
				dataType: "struct",
				typeLength: 37,
				structName: "SKILLINFO",
				arrayLength: -1,
				properties: [
					{
						name: "SKID",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "type",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 2
					},
					{
						name: "level",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 6
					},
					{
						name: "spcost",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 8
					},
					{
						name: "attackRange",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 10
					},
					{
						name: "skillName",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 24,
						offset: 12
					},
					{
						name: "upgradable",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 36
					}
				],
				offset: 0x6
			}
		],
		defaultId: 354,
		variableLength: true
	},
	PACKET_ZC_BAN_LIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "banList",
				dataType: "struct",
				typeLength: 88,
				structName: "GUILD_BAN_INFO",
				arrayLength: -1,
				properties: [
					{
						name: "charname",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 24,
						offset: 0
					},
					{
						name: "account",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 24,
						offset: 24
					},
					{
						name: "reason",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 40,
						offset: 48
					}
				],
				offset: 0x4
			}
		],
		defaultId: 355,
		variableLength: true
	},
	PACKET_ZC_OTHER_GUILD_LIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "guildList",
				dataType: "struct",
				typeLength: 36,
				structName: "OTHER_GUILD_INFO",
				arrayLength: -1,
				properties: [
					{
						name: "guildname",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 24,
						offset: 0
					},
					{
						name: "guildLevel",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 24
					},
					{
						name: "guildMemberSize",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 28
					},
					{
						name: "guildRanking",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 32
					}
				],
				offset: 0x4
			}
		],
		defaultId: 356,
		variableLength: true
	},
	PACKET_CZ_REQ_MAKE_GUILD: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "GName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 6
			}
		],
		defaultId: 357,
		variableLength: false
	},
	PACKET_ZC_POSITION_ID_NAME_INFO: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "memberList",
				dataType: "struct",
				typeLength: 28,
				structName: "MEMBER_POSITION_ID_NAME_INFO",
				arrayLength: -1,
				properties: [
					{
						name: "positionID",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "posName",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 24,
						offset: 4
					}
				],
				offset: 0x4
			}
		],
		defaultId: 358,
		variableLength: true
	},
	PACKET_ZC_RESULT_MAKE_GUILD: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "result",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 359,
		variableLength: false
	},
	PACKET_CZ_REQ_JOIN_GUILD: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "MyAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "MyGID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 10
			}
		],
		defaultId: 360,
		variableLength: false
	},
	PACKET_ZC_ACK_REQ_JOIN_GUILD: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "answer",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 361,
		variableLength: false
	},
	PACKET_ZC_REQ_JOIN_GUILD: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GDID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "guildName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 6
			}
		],
		defaultId: 362,
		variableLength: false
	},
	PACKET_CZ_JOIN_GUILD: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GDID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "answer",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 363,
		variableLength: false
	},
	PACKET_ZC_UPDATE_GDID: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GDID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "emblemVersion",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "right",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "isMaster",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 14
			},
			{
				name: "InterSID",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 15
			},
			{
				name: "GName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 19
			}
		],
		defaultId: 364,
		variableLength: false
	},
	PACKET_ZC_UPDATE_CHARSTAT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "status",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 10
			}
		],
		defaultId: 365,
		variableLength: false
	},
	PACKET_CZ_GUILD_NOTICE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GDID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "subject",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 60,
				offset: 6
			},
			{
				name: "notice",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 120,
				offset: 66
			}
		],
		defaultId: 366,
		variableLength: false
	},
	PACKET_ZC_GUILD_NOTICE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "subject",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 60,
				offset: 2
			},
			{
				name: "notice",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 120,
				offset: 62
			}
		],
		defaultId: 367,
		variableLength: false
	},
	PACKET_CZ_REQ_ALLY_GUILD: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "MyAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "MyGID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 10
			}
		],
		defaultId: 368,
		variableLength: false
	},
	PACKET_ZC_REQ_ALLY_GUILD: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "otherAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "guildName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 6
			}
		],
		defaultId: 369,
		variableLength: false
	},
	PACKET_CZ_ALLY_GUILD: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "otherAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "answer",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 370,
		variableLength: false
	},
	PACKET_ZC_ACK_REQ_ALLY_GUILD: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "answer",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 371,
		variableLength: false
	},
	PACKET_ZC_ACK_CHANGE_GUILD_POSITIONINFO: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "memberList",
				dataType: "struct",
				typeLength: 30,
				structName: "GUILD_REG_POSITION_INFO",
				arrayLength: -1,
				properties: [
					{
						name: "positionID",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "right",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "ranking",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 8
					},
					{
						name: "payRate",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 12
					},
					{
						name: "posName",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 24,
						offset: 16
					}
				],
				offset: 0x4
			}
		],
		defaultId: 372,
		variableLength: true
	},
	PACKET_CZ_REQ_GUILD_MEMBER_INFO: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GID",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 373,
		variableLength: false
	},
	PACKET_ZC_ACK_GUILD_MEMBER_INFO: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Info",
				dataType: "struct",
				structName: "GUILD_MEMBER_INFO",
				typeLength: -1,
				arrayLength: 1,
				properties: [
					{
						name: "AID",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "GID",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "head",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 8
					},
					{
						name: "headPalette",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 10
					},
					{
						name: "sex",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 12
					},
					{
						name: "job",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 14
					},
					{
						name: "level",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 16
					},
					{
						name: "contributionExp",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 18
					},
					{
						name: "currentState",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 22
					},
					{
						name: "positionID",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 26
					},
					{
						name: "intro",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 50,
						offset: 30
					},
					{
						name: "charname",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 24,
						offset: 80
					}
				],
				offset: 0x2
			}
		],
		defaultId: 374,
		variableLength: false
	},
	PACKET_ZC_ITEMIDENTIFY_LIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "ITIDList",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: -1,
				offset: 4
			}
		],
		defaultId: 375,
		variableLength: true
	},
	PACKET_CZ_REQ_ITEMIDENTIFY: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "index",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 376,
		variableLength: false
	},
	PACKET_ZC_ACK_ITEMIDENTIFY: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "index",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "result",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 377,
		variableLength: false
	},
	PACKET_CZ_REQ_ITEMCOMPOSITION_LIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "cardIndex",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 378,
		variableLength: false
	},
	PACKET_ZC_ITEMCOMPOSITION_LIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "ITIDList",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: -1,
				offset: 4
			}
		],
		defaultId: 379,
		variableLength: true
	},
	PACKET_CZ_REQ_ITEMCOMPOSITION: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "cardIndex",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "equipIndex",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 380,
		variableLength: false
	},
	PACKET_ZC_ACK_ITEMCOMPOSITION: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "equipIndex",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "cardIndex",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "result",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 381,
		variableLength: false
	},
	PACKET_CZ_GUILD_CHAT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "msg",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: -1,
				offset: 4
			}
		],
		defaultId: 382,
		variableLength: true
	},
	PACKET_ZC_GUILD_CHAT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "msg",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: -1,
				offset: 4
			}
		],
		defaultId: 383,
		variableLength: true
	},
	PACKET_CZ_REQ_HOSTILE_GUILD: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 384,
		variableLength: false
	},
	PACKET_ZC_ACK_REQ_HOSTILE_GUILD: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "result",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 385,
		variableLength: false
	},
	PACKET_ZC_MEMBER_ADD: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Info",
				dataType: "struct",
				structName: "GUILD_MEMBER_INFO",
				typeLength: -1,
				arrayLength: 1,
				properties: [
					{
						name: "AID",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "GID",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "head",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 8
					},
					{
						name: "headPalette",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 10
					},
					{
						name: "sex",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 12
					},
					{
						name: "job",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 14
					},
					{
						name: "level",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 16
					},
					{
						name: "contributionExp",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 18
					},
					{
						name: "currentState",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 22
					},
					{
						name: "positionID",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 26
					},
					{
						name: "intro",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 50,
						offset: 30
					},
					{
						name: "charname",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 24,
						offset: 80
					}
				],
				offset: 0x2
			}
		],
		defaultId: 386,
		variableLength: false
	},
	PACKET_CZ_REQ_DELETE_RELATED_GUILD: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "OpponentGDID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "Relation",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 387,
		variableLength: false
	},
	PACKET_ZC_DELETE_RELATED_GUILD: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "OpponentGDID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "Relation",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 388,
		variableLength: false
	},
	PACKET_ZC_ADD_RELATED_GUILD: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Info",
				dataType: "struct",
				structName: "RELATED_GUILD_INFO",
				typeLength: -1,
				arrayLength: 1,
				properties: [
					{
						name: "relation",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "GDID",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "guildname",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 24,
						offset: 8
					}
				],
				offset: 0x2
			}
		],
		defaultId: 389,
		variableLength: false
	},
	PACKET_COLLECTORDEAD: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "ServerID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 390,
		variableLength: false
	},
	PACKET_PING: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 391,
		variableLength: false
	},
	PACKET_ZC_ACK_ITEMREFINING: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "result",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "itemIndex",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "refiningLevel",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 392,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_MAPINFO: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "type",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 393,
		variableLength: false
	},
	PACKET_CZ_REQ_DISCONNECT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "type",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 394,
		variableLength: false
	},
	PACKET_ZC_ACK_REQ_DISCONNECT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "result",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 395,
		variableLength: false
	},
	PACKET_ZC_MONSTER_INFO: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "job",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "level",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "size",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "hp",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "def",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 12
			},
			{
				name: "raceType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 14
			},
			{
				name: "mdefPower",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 16
			},
			{
				name: "property",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 18
			},
			{
				name: "propertyTable",
				dataType: "struct",
				structName: "PACKET_ZC_MONSTER_INFO",
				typeLength: -1,
				arrayLength: 1,
				properties: [
					{
						name: "water",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "earth",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 1
					},
					{
						name: "fire",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 2
					},
					{
						name: "wind",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 3
					},
					{
						name: "poison",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "saint",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 5
					},
					{
						name: "dark",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 6
					},
					{
						name: "mental",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 7
					},
					{
						name: "undead",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 8
					}
				],
				offset: 0x14
			}
		],
		defaultId: 396,
		variableLength: false
	},
	PACKET_ZC_MAKABLEITEMLIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "info",
				dataType: "struct",
				structName: "MAKABLEITEM_INFO",
				typeLength: -1,
				arrayLength: 1,
				properties: [
					{
						name: "ITID",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "material_ID",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 3,
						offset: 2
					}
				],
				offset: 0x2
			}
		],
		defaultId: 397,
		variableLength: false
	},
	PACKET_CZ_REQMAKINGITEM: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "info",
				dataType: "struct",
				structName: "MAKABLEITEM_INFO",
				typeLength: -1,
				arrayLength: 1,
				properties: [
					{
						name: "ITID",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "material_ID",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 3,
						offset: 2
					}
				],
				offset: 2
			}
		],
		defaultId: 398,
		variableLength: false
	},
	PACKET_ZC_ACK_REQMAKINGITEM: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "result",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "ITID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 399,
		variableLength: false
	},
	PACKET_CZ_USE_SKILL_TOGROUND_WITHTALKBOX: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "selectedLevel",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "SKID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "xPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "yPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "contents",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 80,
				offset: 10
			}
		],
		defaultId: 400,
		variableLength: false
	},
	PACKET_ZC_TALKBOX_CHATCONTENTS: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "contents",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 80,
				offset: 6
			}
		],
		defaultId: 401,
		variableLength: false
	},
	PACKET_ZC_UPDATE_MAPINFO: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "xPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "yPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "type",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "mapName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 16,
				offset: 8
			}
		],
		defaultId: 402,
		variableLength: false
	},
	PACKET_CZ_REQNAME_BYGID: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 403,
		variableLength: false
	},
	PACKET_ZC_ACK_REQNAME_BYGID: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "CName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 6
			}
		],
		defaultId: 404,
		variableLength: false
	},
	PACKET_ZC_ACK_REQNAMEALL: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "CName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 6
			},
			{
				name: "PName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 30
			},
			{
				name: "GName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 54
			},
			{
				name: "RName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 78
			}
		],
		defaultId: 405,
		variableLength: false
	},
	PACKET_ZC_MSG_STATE_CHANGE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "index",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "state",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 8
			}
		],
		defaultId: 406,
		variableLength: false
	},
	PACKET_CZ_RESET: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "type",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 407,
		variableLength: false
	},
	PACKET_CZ_CHANGE_MAPTYPE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "xPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "yPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "type",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 408,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_MAPPROPERTY: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "type",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 409,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_RANKING: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "ranking",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "total",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 10
			}
		],
		defaultId: 410,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_EFFECT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "effectID",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 411,
		variableLength: false
	},
	PACKET_CZ_CHANGE_EFFECTSTATE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "EffectState",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 413,
		variableLength: false
	},
	PACKET_ZC_START_CAPTURE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 414,
		variableLength: false
	},
	PACKET_CZ_TRYCAPTURE_MONSTER: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "targetAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 415,
		variableLength: false
	},
	PACKET_ZC_TRYCAPTURE_MONSTER: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "result",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 416,
		variableLength: false
	},
	PACKET_CZ_COMMAND_PET: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "cSub",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 417,
		variableLength: false
	},
	PACKET_ZC_PROPERTY_PET: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "szName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 2
			},
			{
				name: "bModified",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 26
			},
			{
				name: "nLevel",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 27
			},
			{
				name: "nFullness",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 29
			},
			{
				name: "nRelationship",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 31
			},
			{
				name: "ITID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 33
			},
			{
				name: "job",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 35
			}
		],
		defaultId: 418,
		variableLength: false
	},
	PACKET_ZC_FEED_PET: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "cRet",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "ITID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 3
			}
		],
		defaultId: 419,
		variableLength: false
	},
	PACKET_ZC_CHANGESTATE_PET: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "type",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "GID",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 3
			},
			{
				name: "data",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 7
			}
		],
		defaultId: 420,
		variableLength: false
	},
	PACKET_CZ_RENAME_PET: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "szName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 2
			}
		],
		defaultId: 421,
		variableLength: false
	},
	PACKET_ZC_PETEGG_LIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "eggList",
				dataType: "struct",
				typeLength: 2,
				structName: "PETEGGITEM_INFO",
				arrayLength: -1,
				properties: [
					{
						name: "index",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					}
				],
				offset: 0x4
			}
		],
		defaultId: 422,
		variableLength: true
	},
	PACKET_CZ_SELECT_PETEGG: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "index",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 423,
		variableLength: false
	},
	PACKET_CZ_PETEGG_INFO: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "index",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 424,
		variableLength: false
	},
	PACKET_CZ_PET_ACT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "data",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 425,
		variableLength: false
	},
	PACKET_ZC_PET_ACT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GID",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "data",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 426,
		variableLength: false
	},
	PACKET_ZC_PAR_CHANGE_USER: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "varID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "count",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 8
			}
		],
		defaultId: 427,
		variableLength: false
	},
	PACKET_ZC_SKILL_UPDATE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 428,
		variableLength: false
	},
	PACKET_ZC_MAKINGARROW_LIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "arrowList",
				dataType: "struct",
				typeLength: 2,
				structName: "ARROWITEM_INFO",
				arrayLength: -1,
				properties: [
					{
						name: "index",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					}
				],
				offset: 0x4
			}
		],
		defaultId: 429,
		variableLength: true
	},
	PACKET_CZ_REQ_MAKINGARROW: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "id",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 430,
		variableLength: false
	},
	PACKET_CZ_REQ_CHANGECART: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "num",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 431,
		variableLength: false
	},
	PACKET_ZC_NPCSPRITE_CHANGE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "type",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "value",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 7
			}
		],
		defaultId: 432,
		variableLength: false
	},
	PACKET_ZC_SHOWDIGIT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "type",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "value",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 3
			}
		],
		defaultId: 433,
		variableLength: false
	},
	PACKET_CZ_REQ_OPENSTORE2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "storeName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 80,
				offset: 4
			},
			{
				name: "result",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 84
			},
			{
				name: "storeList",
				dataType: "struct",
				typeLength: 8,
				structName: "STORE_ITEM",
				arrayLength: -1,
				properties: [
					{
						name: "index",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "count",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 2
					},
					{
						name: "Price",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 4
					}
				],
				offset: 0x55
			}
		],
		defaultId: 434,
		variableLength: true
	},
	PACKET_ZC_SHOW_IMAGE2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "imageName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 64,
				offset: 2
			},
			{
				name: "type",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 66
			}
		],
		defaultId: 435,
		variableLength: false
	},
	PACKET_ZC_CHANGE_GUILD: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "GDID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "emblemVersion",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 10
			}
		],
		defaultId: 436,
		variableLength: false
	},
	PACKET_SC_BILLING_INFO: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "dwAmountRemain",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "dwQuantityRemain",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "dwReserved1",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "dwReserved2",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 14
			}
		],
		defaultId: 437,
		variableLength: false
	},
	PACKET_ZC_GUILD_INFO2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GDID",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "level",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "userNum",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "maxUserNum",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 14
			},
			{
				name: "userAverageLevel",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 18
			},
			{
				name: "exp",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 22
			},
			{
				name: "maxExp",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 26
			},
			{
				name: "point",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 30
			},
			{
				name: "honor",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 34
			},
			{
				name: "virtue",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 38
			},
			{
				name: "emblemVersion",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 42
			},
			{
				name: "guildname",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 46
			},
			{
				name: "masterName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 70
			},
			{
				name: "manageLand",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 16,
				offset: 94
			},
			{
				name: "zeny",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 110
			}
		],
		defaultId: 438,
		variableLength: false
	},
	PACKET_CZ_GUILD_ZENY: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "zeny",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 439,
		variableLength: false
	},
	PACKET_ZC_GUILD_ZENY_ACK: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "ret",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 440,
		variableLength: false
	},
	PACKET_ZC_DISPEL: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 441,
		variableLength: false
	},
	PACKET_CZ_REMOVE_AID: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AccountName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 2
			}
		],
		defaultId: 442,
		variableLength: false
	},
	PACKET_CZ_SHIFT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "CharacterName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 2
			}
		],
		defaultId: 443,
		variableLength: false
	},
	PACKET_CZ_RECALL: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AccountName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 2
			}
		],
		defaultId: 444,
		variableLength: false
	},
	PACKET_CZ_RECALL_GID: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "CharacterName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 2
			}
		],
		defaultId: 445,
		variableLength: false
	},
	PACKET_AC_ASK_PNGAMEROOM: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 446,
		variableLength: false
	},
	PACKET_CA_REPLY_PNGAMEROOM: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Permission",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 447,
		variableLength: false
	},
	PACKET_CZ_REQ_REMAINTIME: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 448,
		variableLength: false
	},
	PACKET_ZC_REPLY_REMAINTIME: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Result",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "ExpirationDate",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "RemainTime",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 10
			}
		],
		defaultId: 449,
		variableLength: false
	},
	PACKET_ZC_INFO_REMAINTIME: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Type",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "RemainTime",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 450,
		variableLength: false
	},
	PACKET_ZC_BROADCAST2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "fontColor",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "fontType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "fontSize",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "fontAlign",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 12
			},
			{
				name: "fontY",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 14
			},
			{
				name: "msg",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: -1,
				offset: 16
			}
		],
		defaultId: 451,
		variableLength: true
	},
	PACKET_ZC_ADD_ITEM_TO_STORE2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "index",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "count",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "ITID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "type",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "IsIdentified",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 11
			},
			{
				name: "IsDamaged",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 12
			},
			{
				name: "refiningLevel",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 13
			},
			{
				name: "slot",
				dataType: "struct",
				structName: "EQUIPSLOTINFO",
				typeLength: -1,
				arrayLength: 1,
				properties: [
					{
						name: "card1",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "card2",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 2
					},
					{
						name: "card3",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "card4",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 6
					}
				],
				offset: 0xe
			}
		],
		defaultId: 452,
		variableLength: false
	},
	PACKET_ZC_ADD_ITEM_TO_CART2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "index",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "count",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "ITID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "type",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "IsIdentified",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 11
			},
			{
				name: "IsDamaged",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 12
			},
			{
				name: "refiningLevel",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 13
			},
			{
				name: "slot",
				dataType: "struct",
				structName: "EQUIPSLOTINFO",
				typeLength: -1,
				arrayLength: 1,
				properties: [
					{
						name: "card1",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "card2",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 2
					},
					{
						name: "card3",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "card4",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 6
					}
				],
				offset: 0xe
			}
		],
		defaultId: 453,
		variableLength: false
	},
	PACKET_CS_REQ_ENCRYPTION: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "encCount",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "decCount",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 3
			}
		],
		defaultId: 454,
		variableLength: false
	},
	PACKET_SC_ACK_ENCRYPTION: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 455,
		variableLength: false
	},
	PACKET_ZC_USE_ITEM_ACK2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "index",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "id",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "count",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "result",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 12
			}
		],
		defaultId: 456,
		variableLength: false
	},
	PACKET_ZC_SKILL_ENTRY2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "creatorAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "xPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "yPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 12
			},
			{
				name: "job",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 14
			},
			{
				name: "isVisible",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 15
			},
			{
				name: "isContens",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 16
			},
			{
				name: "msg",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 80,
				offset: 17
			}
		],
		defaultId: 457,
		variableLength: false
	},
	PACKET_CZ_REQMAKINGHOMUN: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "result",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 458,
		variableLength: false
	},
	PACKET_CZ_MONSTER_TALK: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "stateId",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "skillId",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 7
			},
			{
				name: "arg1",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 8
			}
		],
		defaultId: 459,
		variableLength: false
	},
	PACKET_ZC_MONSTER_TALK: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "stateId",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "skillId",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 7
			},
			{
				name: "arg1",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 8
			}
		],
		defaultId: 460,
		variableLength: false
	},
	PACKET_ZC_AUTOSPELLLIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "SKID",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 7,
				offset: 2
			}
		],
		defaultId: 461,
		variableLength: false
	},
	PACKET_CZ_SELECTAUTOSPELL: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "SKID",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 462,
		variableLength: false
	},
	PACKET_ZC_DEVOTIONLIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "myAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 5,
				offset: 6
			},
			{
				name: "range",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 26
			}
		],
		defaultId: 463,
		variableLength: false
	},
	PACKET_ZC_SPIRITS: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "num",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 464,
		variableLength: false
	},
	PACKET_ZC_BLADESTOP: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "srcAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "destAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "flag",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 10
			}
		],
		defaultId: 465,
		variableLength: false
	},
	PACKET_ZC_COMBODELAY: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "delayTime",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 466,
		variableLength: false
	},
	PACKET_ZC_SOUND: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "fileName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 2
			},
			{
				name: "act",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 26
			},
			{
				name: "term",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 27
			},
			{
				name: "NAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 31
			}
		],
		defaultId: 467,
		variableLength: false
	},
	PACKET_ZC_OPEN_EDITDLGSTR: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "NAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 468,
		variableLength: false
	},
	PACKET_CZ_INPUT_EDITDLGSTR: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "NAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "msg",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: -1,
				offset: 8
			}
		],
		defaultId: 469,
		variableLength: true
	},
	PACKET_ZC_NOTIFY_MAPPROPERTY2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "type",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 470,
		variableLength: false
	},
	PACKET_ZC_SPRITE_CHANGE2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "type",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "value",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 7
			}
		],
		defaultId: 471,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_STANDENTRY2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "speed",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "bodyState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "healthState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "effectState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 12
			},
			{
				name: "job",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 14
			},
			{
				name: "head",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 16
			},
			{
				name: "weapon",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 18
			},
			{
				name: "accessory",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 22
			},
			{
				name: "accessory2",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 24
			},
			{
				name: "accessory3",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 26
			},
			{
				name: "headpalette",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 28
			},
			{
				name: "bodypalette",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 30
			},
			{
				name: "headDir",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 32
			},
			{
				name: "GUID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 34
			},
			{
				name: "GEmblemVer",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 38
			},
			{
				name: "honor",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 40
			},
			{
				name: "virtue",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 42
			},
			{
				name: "isPKModeON",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 44
			},
			{
				name: "sex",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 45
			},
			{
				name: "PosDir",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 3,
				offset: 46
			},
			{
				name: "xSize",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 49
			},
			{
				name: "ySize",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 50
			},
			{
				name: "state",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 51
			},
			{
				name: "clevel",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 52
			}
		],
		defaultId: 472,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_NEWENTRY2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "speed",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "bodyState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "healthState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "effectState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 12
			},
			{
				name: "job",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 14
			},
			{
				name: "head",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 16
			},
			{
				name: "weapon",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 18
			},
			{
				name: "accessory",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 22
			},
			{
				name: "accessory2",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 24
			},
			{
				name: "accessory3",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 26
			},
			{
				name: "headpalette",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 28
			},
			{
				name: "bodypalette",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 30
			},
			{
				name: "headDir",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 32
			},
			{
				name: "GUID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 34
			},
			{
				name: "GEmblemVer",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 38
			},
			{
				name: "honor",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 40
			},
			{
				name: "virtue",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 42
			},
			{
				name: "isPKModeON",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 44
			},
			{
				name: "sex",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 45
			},
			{
				name: "PosDir",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 3,
				offset: 46
			},
			{
				name: "xSize",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 49
			},
			{
				name: "ySize",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 50
			},
			{
				name: "clevel",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 51
			}
		],
		defaultId: 473,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_MOVEENTRY2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "speed",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "bodyState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "healthState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "effectState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 12
			},
			{
				name: "job",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 14
			},
			{
				name: "head",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 16
			},
			{
				name: "weapon",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 18
			},
			{
				name: "accessory",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 22
			},
			{
				name: "moveStartTime",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 24
			},
			{
				name: "accessory2",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 28
			},
			{
				name: "accessory3",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 30
			},
			{
				name: "headpalette",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 32
			},
			{
				name: "bodypalette",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 34
			},
			{
				name: "headDir",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 36
			},
			{
				name: "GUID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 38
			},
			{
				name: "GEmblemVer",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 42
			},
			{
				name: "honor",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 44
			},
			{
				name: "virtue",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 46
			},
			{
				name: "isPKModeON",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 48
			},
			{
				name: "sex",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 49
			},
			{
				name: "MoveData",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 6,
				offset: 50
			},
			{
				name: "xSize",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 56
			},
			{
				name: "ySize",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 57
			},
			{
				name: "clevel",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 58
			}
		],
		defaultId: 474,
		variableLength: false
	},
	PACKET_CA_REQ_HASH: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 475,
		variableLength: false
	},
	PACKET_AC_ACK_HASH: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "secret",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: -1,
				offset: 4
			}
		],
		defaultId: 476,
		variableLength: true
	},
	PACKET_CA_LOGIN2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Version",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "ID",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 6
			},
			{
				name: "PasswdMD5",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 16,
				offset: 30
			},
			{
				name: "clienttype",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 46
			}
		],
		defaultId: 477,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_SKILL2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "SKID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "targetID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "startTime",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 12
			},
			{
				name: "attackMT",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 16
			},
			{
				name: "attackedMT",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 20
			},
			{
				name: "damage",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 24
			},
			{
				name: "level",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 28
			},
			{
				name: "count",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 30
			},
			{
				name: "action",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 32
			}
		],
		defaultId: 478,
		variableLength: false
	},
	PACKET_CZ_REQ_ACCOUNTNAME: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 479,
		variableLength: false
	},
	PACKET_ZC_ACK_ACCOUNTNAME: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "name",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 6
			}
		],
		defaultId: 480,
		variableLength: false
	},
	PACKET_ZC_SPIRITS2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "num",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 481,
		variableLength: false
	},
	PACKET_ZC_REQ_COUPLE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "name",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 10
			}
		],
		defaultId: 482,
		variableLength: false
	},
	PACKET_CZ_JOIN_COUPLE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "answer",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 10
			}
		],
		defaultId: 483,
		variableLength: false
	},
	PACKET_ZC_START_COUPLE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 484,
		variableLength: false
	},
	PACKET_CZ_REQ_JOIN_COUPLE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 485,
		variableLength: false
	},
	PACKET_ZC_COUPLENAME: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "CoupleName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 2
			}
		],
		defaultId: 486,
		variableLength: false
	},
	PACKET_CZ_DORIDORI: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 487,
		variableLength: false
	},
	PACKET_CZ_MAKE_GROUP2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "groupName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 2
			},
			{
				name: "ItemPickupRule",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 26
			},
			{
				name: "ItemDivisionRule",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 27
			}
		],
		defaultId: 488,
		variableLength: false
	},
	PACKET_ZC_ADD_MEMBER_TO_GROUP2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "Role",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "xPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "yPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 12
			},
			{
				name: "state",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 14
			},
			{
				name: "groupName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 15
			},
			{
				name: "characterName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 39
			},
			{
				name: "mapName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 16,
				offset: 63
			},
			{
				name: "ItemPickupRule",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 79
			},
			{
				name: "ItemDivisionRule",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 80
			}
		],
		defaultId: 489,
		variableLength: false
	},
	PACKET_ZC_CONGRATULATION: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 490,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_POSITION_TO_GUILDM: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "xPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "yPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 8
			}
		],
		defaultId: 491,
		variableLength: false
	},
	PACKET_ZC_GUILD_MEMBER_MAP_CHANGE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GDID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "mapName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 16,
				offset: 10
			}
		],
		defaultId: 492,
		variableLength: false
	},
	PACKET_CZ_CHOPOKGI: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 493,
		variableLength: false
	},
	PACKET_ZC_NORMAL_ITEMLIST2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "ItemInfo",
				dataType: "struct",
				typeLength: 18,
				structName: "NORMALITEM_EXTRAINFO2",
				arrayLength: -1,
				properties: [
					{
						name: "index",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "ITID",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 2
					},
					{
						name: "type",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "IsIdentified",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 5
					},
					{
						name: "count",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 6
					},
					{
						name: "WearState",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 8
					},
					{
						name: "slot",
						dataType: "struct",
						structName: "EQUIPSLOTINFO",
						typeLength: -1,
						arrayLength: 1,
						properties: [
							{
								name: "card1",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 0
							},
							{
								name: "card2",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 2
							},
							{
								name: "card3",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 4
							},
							{
								name: "card4",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 6
							}
						],
						offset: 0xa
					}
				],
				offset: 0x4
			}
		],
		defaultId: 494,
		variableLength: true
	},
	PACKET_ZC_CART_NORMAL_ITEMLIST2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "ItemInfo",
				dataType: "struct",
				typeLength: 18,
				structName: "NORMALITEM_EXTRAINFO2",
				arrayLength: -1,
				properties: [
					{
						name: "index",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "ITID",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 2
					},
					{
						name: "type",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "IsIdentified",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 5
					},
					{
						name: "count",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 6
					},
					{
						name: "WearState",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 8
					},
					{
						name: "slot",
						dataType: "struct",
						structName: "EQUIPSLOTINFO",
						typeLength: -1,
						arrayLength: 1,
						properties: [
							{
								name: "card1",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 0
							},
							{
								name: "card2",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 2
							},
							{
								name: "card3",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 4
							},
							{
								name: "card4",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 6
							}
						],
						offset: 0xa
					}
				],
				offset: 0x4
			}
		],
		defaultId: 495,
		variableLength: true
	},
	PACKET_ZC_STORE_NORMAL_ITEMLIST2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "ItemInfo",
				dataType: "struct",
				typeLength: 18,
				structName: "NORMALITEM_EXTRAINFO2",
				arrayLength: -1,
				properties: [
					{
						name: "index",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "ITID",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 2
					},
					{
						name: "type",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "IsIdentified",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 5
					},
					{
						name: "count",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 6
					},
					{
						name: "WearState",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 8
					},
					{
						name: "slot",
						dataType: "struct",
						structName: "EQUIPSLOTINFO",
						typeLength: -1,
						arrayLength: 1,
						properties: [
							{
								name: "card1",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 0
							},
							{
								name: "card2",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 2
							},
							{
								name: "card3",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 4
							},
							{
								name: "card4",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 6
							}
						],
						offset: 0xa
					}
				],
				offset: 0x4
			}
		],
		defaultId: 496,
		variableLength: true
	},
	PACKET_AC_NOTIFY_ERROR: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "msg",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: -1,
				offset: 4
			}
		],
		defaultId: 497,
		variableLength: true
	},
	PACKET_ZC_UPDATE_CHARSTAT2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "status",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "sex",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 14
			},
			{
				name: "head",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 16
			},
			{
				name: "headPalette",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 18
			}
		],
		defaultId: 498,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_EFFECT2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "effectID",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 499,
		variableLength: false
	},
	PACKET_ZC_REQ_EXCHANGE_ITEM2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "name",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 2
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 26
			},
			{
				name: "level",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 30
			}
		],
		defaultId: 500,
		variableLength: false
	},
	PACKET_ZC_ACK_EXCHANGE_ITEM2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "result",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 3
			},
			{
				name: "level",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 7
			}
		],
		defaultId: 501,
		variableLength: false
	},
	PACKET_ZC_REQ_BABY: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "name",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 10
			}
		],
		defaultId: 502,
		variableLength: false
	},
	PACKET_CZ_JOIN_BABY: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "answer",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 10
			}
		],
		defaultId: 503,
		variableLength: false
	},
	PACKET_ZC_START_BABY: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 504,
		variableLength: false
	},
	PACKET_CZ_REQ_JOIN_BABY: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 505,
		variableLength: false
	},
	PACKET_CA_LOGIN3: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Version",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "ID",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 6
			},
			{
				name: "PasswdMD5",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 16,
				offset: 30
			},
			{
				name: "clienttype",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 46
			},
			{
				name: "ClientInfo",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 47
			}
		],
		defaultId: 506,
		variableLength: false
	},
	PACKET_CH_DELETE_CHAR2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "key",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 50,
				offset: 6
			}
		],
		defaultId: 507,
		variableLength: false
	},
	PACKET_ZC_REPAIRITEMLIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "itemList",
				dataType: "struct",
				typeLength: 13,
				structName: "REPAIRITEM_INFO",
				arrayLength: -1,
				properties: [
					{
						name: "index",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "ITID",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 2
					},
					{
						name: "refiningLevel",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "slot",
						dataType: "struct",
						structName: "EQUIPSLOTINFO",
						typeLength: -1,
						arrayLength: 1,
						properties: [
							{
								name: "card1",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 0
							},
							{
								name: "card2",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 2
							},
							{
								name: "card3",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 4
							},
							{
								name: "card4",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 6
							}
						],
						offset: 0x5
					}
				],
				offset: 0x4
			}
		],
		defaultId: 508,
		variableLength: true
	},
	PACKET_CZ_REQ_ITEMREPAIR: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "TargetItemInfo",
				dataType: "struct",
				structName: "REPAIRITEM_INFO",
				typeLength: -1,
				arrayLength: 1,
				properties: [
					{
						name: "index",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "ITID",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 2
					},
					{
						name: "refiningLevel",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "slot",
						dataType: "struct",
						structName: "EQUIPSLOTINFO",
						typeLength: -1,
						arrayLength: 1,
						properties: [
							{
								name: "card1",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 0
							},
							{
								name: "card2",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 2
							},
							{
								name: "card3",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 4
							},
							{
								name: "card4",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 6
							}
						],
						offset: 0x5
					}
				],
				offset: 0x2
			}
		],
		defaultId: 509,
		variableLength: false
	},
	PACKET_ZC_ACK_ITEMREPAIR: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "index",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "result",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 510,
		variableLength: false
	},
	PACKET_ZC_HIGHJUMP: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "xPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "yPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 8
			}
		],
		defaultId: 511,
		variableLength: false
	},
	PACKET_CA_CONNECT_INFO_CHANGED: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "ID",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 2
			}
		],
		defaultId: 512,
		variableLength: false
	},
	PACKET_ZC_FRIENDS_LIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "friendList",
				dataType: "struct",
				typeLength: 32,
				structName: "STRUCT_FRIEND",
				arrayLength: -1,
				properties: [
					{
						name: "AID",
						dataType: "Uint32",
						typeLength: 4,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "GID",
						dataType: "Uint32",
						typeLength: 4,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "Name",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 24,
						offset: 8
					}
				],
				offset: 0x4
			}
		],
		defaultId: 513,
		variableLength: true
	},
	PACKET_CZ_ADD_FRIENDS: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "name",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 2
			}
		],
		defaultId: 514,
		variableLength: false
	},
	PACKET_CZ_DELETE_FRIENDS: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 515,
		variableLength: false
	},
	PACKET_CA_EXE_HASHCHECK: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "HashValue",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 16,
				offset: 2
			}
		],
		defaultId: 516,
		variableLength: false
	},
	PACKET_ZC_DIVORCE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "name",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 2
			}
		],
		defaultId: 517,
		variableLength: false
	},
	PACKET_ZC_FRIENDS_STATE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "State",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 10
			}
		],
		defaultId: 518,
		variableLength: false
	},
	PACKET_ZC_REQ_ADD_FRIENDS: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "ReqAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "ReqGID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "Name",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 10
			}
		],
		defaultId: 519,
		variableLength: false
	},
	PACKET_CZ_ACK_REQ_ADD_FRIENDS: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "ReqAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "ReqGID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "Result",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 10
			}
		],
		defaultId: 520,
		variableLength: false
	},
	PACKET_ZC_ADD_FRIENDS_LIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Result",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "Name",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 12
			}
		],
		defaultId: 521,
		variableLength: false
	},
	PACKET_ZC_DELETE_FRIENDS: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 522,
		variableLength: false
	},
	PACKET_CH_EXE_HASHCHECK: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "ClientType",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "HashValue",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 16,
				offset: 3
			}
		],
		defaultId: 523,
		variableLength: false
	},
	PACKET_CZ_EXE_HASHCHECK: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "ClientType",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "HashValue",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 16,
				offset: 3
			}
		],
		defaultId: 524,
		variableLength: false
	},
	PACKET_HC_BLOCK_CHARACTER: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "characterList",
				dataType: "struct",
				typeLength: 24,
				structName: "TAG_CHARACTER_BLOCK_INFO",
				arrayLength: -1,
				properties: [
					{
						name: "GID",
						dataType: "Uint32",
						typeLength: 4,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "szExpireDate",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 20,
						offset: 4
					}
				],
				offset: 0x4
			}
		],
		defaultId: 525,
		variableLength: true
	},
	PACKET_ZC_STARSKILL: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "mapName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 2
			},
			{
				name: "monsterID",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 26
			},
			{
				name: "star",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 30
			},
			{
				name: "result",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 31
			}
		],
		defaultId: 526,
		variableLength: false
	},
	PACKET_CZ_REQ_PVPPOINT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 527,
		variableLength: false
	},
	PACKET_ZC_ACK_PVPPOINT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "PVP",
				dataType: "struct",
				structName: "PVPINFO",
				typeLength: -1,
				arrayLength: 1,
				properties: [
					{
						name: "WinPoint",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "LosePoint",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "Point",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 8
					}
				],
				offset: 0xa
			}
		],
		defaultId: 528,
		variableLength: false
	},
	PACKET_ZH_MOVE_PVPWORLD: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 529,
		variableLength: false
	},
	PACKET_CZ_REQ_GIVE_MANNER_BYNAME: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "CharName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 2
			}
		],
		defaultId: 530,
		variableLength: false
	},
	PACKET_CZ_REQ_STATUS_GM: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "CharName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 2
			}
		],
		defaultId: 531,
		variableLength: false
	},
	PACKET_ZC_ACK_STATUS_GM: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "str",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "standardStr",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 3
			},
			{
				name: "agi",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "standardAgi",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 5
			},
			{
				name: "vit",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "standardVit",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 7
			},
			{
				name: "Int",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "standardInt",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 9
			},
			{
				name: "dex",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "standardDex",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 11
			},
			{
				name: "luk",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 12
			},
			{
				name: "standardLuk",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 13
			},
			{
				name: "attPower",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 14
			},
			{
				name: "refiningPower",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 16
			},
			{
				name: "max_mattPower",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 18
			},
			{
				name: "min_mattPower",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 20
			},
			{
				name: "itemdefPower",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 22
			},
			{
				name: "plusdefPower",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 24
			},
			{
				name: "mdefPower",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 26
			},
			{
				name: "plusmdefPower",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 28
			},
			{
				name: "hitSuccessValue",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 30
			},
			{
				name: "avoidSuccessValue",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 32
			},
			{
				name: "plusAvoidSuccessValue",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 34
			},
			{
				name: "criticalSuccessValue",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 36
			},
			{
				name: "ASPD",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 38
			},
			{
				name: "plusASPD",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 40
			}
		],
		defaultId: 532,
		variableLength: false
	},
	PACKET_ZC_SKILLMSG: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "MsgNo",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 533,
		variableLength: false
	},
	PACKET_ZC_BABYMSG: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "MsgNo",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 534,
		variableLength: false
	},
	PACKET_CZ_BLACKSMITH_RANK: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 535,
		variableLength: false
	},
	PACKET_CZ_ALCHEMIST_RANK: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 536,
		variableLength: false
	},
	PACKET_ZC_BLACKSMITH_RANK: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Name",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 10,
				offset: 2
			},
			{
				name: "Point",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 10,
				offset: 242
			}
		],
		defaultId: 537,
		variableLength: false
	},
	PACKET_ZC_ALCHEMIST_RANK: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Name",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 10,
				offset: 2
			},
			{
				name: "Point",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 10,
				offset: 242
			}
		],
		defaultId: 538,
		variableLength: false
	},
	PACKET_ZC_BLACKSMITH_POINT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Point",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "TotalPoint",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 539,
		variableLength: false
	},
	PACKET_ZC_ALCHEMIST_POINT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Point",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "TotalPoint",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 540,
		variableLength: false
	},
	PACKET_CZ_LESSEFFECT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "isLess",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 541,
		variableLength: false
	},
	PACKET_ZC_LESSEFFECT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "isLess",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 542,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_PKINFO: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "winPoint",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "losePoint",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "killName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 10
			},
			{
				name: "killedName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 34
			},
			{
				name: "expireTime",
				dataType: "struct",
				structName: "_FILETIME",
				typeLength: -1,
				arrayLength: 1,
				properties: [
					{
						name: "dwLowDateTime",
						dataType: "Uint32",
						typeLength: 4,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "dwHighDateTime",
						dataType: "Uint32",
						typeLength: 4,
						arrayLength: 1,
						offset: 4
					}
				],
				offset: 0x3a
			}
		],
		defaultId: 543,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_CRAZYKILLER: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "isCrazyKiller",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 544,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_WEAPONITEMLIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "itemList",
				dataType: "struct",
				typeLength: 13,
				structName: "REPAIRITEM_INFO",
				arrayLength: -1,
				properties: [
					{
						name: "index",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "ITID",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 2
					},
					{
						name: "refiningLevel",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "slot",
						dataType: "struct",
						structName: "EQUIPSLOTINFO",
						typeLength: -1,
						arrayLength: 1,
						properties: [
							{
								name: "card1",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 0
							},
							{
								name: "card2",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 2
							},
							{
								name: "card3",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 4
							},
							{
								name: "card4",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 6
							}
						],
						offset: 0x5
					}
				],
				offset: 0x4
			}
		],
		defaultId: 545,
		variableLength: true
	},
	PACKET_CZ_REQ_WEAPONREFINE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Index",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 546,
		variableLength: false
	},
	PACKET_ZC_ACK_WEAPONREFINE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "msg",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "ITID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 547,
		variableLength: false
	},
	PACKET_ZC_TAEKWON_POINT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Point",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "TotalPoint",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 548,
		variableLength: false
	},
	PACKET_CZ_TAEKWON_RANK: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 549,
		variableLength: false
	},
	PACKET_ZC_TAEKWON_RANK: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Name",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 10,
				offset: 2
			},
			{
				name: "Point",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 10,
				offset: 242
			}
		],
		defaultId: 550,
		variableLength: false
	},
	PACKET_ZC_GAME_GUARD: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AuthData",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 4,
				offset: 2
			}
		],
		defaultId: 551,
		variableLength: false
	},
	PACKET_CZ_ACK_GAME_GUARD: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AuthData",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 4,
				offset: 2
			}
		],
		defaultId: 552,
		variableLength: false
	},
	PACKET_ZC_STATE_CHANGE3: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "bodyState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "healthState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "effectState",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "isPKModeON",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 14
			}
		],
		defaultId: 553,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_STANDENTRY3: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "speed",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "bodyState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "healthState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "effectState",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 12
			},
			{
				name: "job",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 16
			},
			{
				name: "head",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 18
			},
			{
				name: "weapon",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 20
			},
			{
				name: "accessory",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 24
			},
			{
				name: "accessory2",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 26
			},
			{
				name: "accessory3",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 28
			},
			{
				name: "headpalette",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 30
			},
			{
				name: "bodypalette",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 32
			},
			{
				name: "headDir",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 34
			},
			{
				name: "GUID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 36
			},
			{
				name: "GEmblemVer",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 40
			},
			{
				name: "honor",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 42
			},
			{
				name: "virtue",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 44
			},
			{
				name: "isPKModeON",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 48
			},
			{
				name: "sex",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 49
			},
			{
				name: "PosDir",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 3,
				offset: 50
			},
			{
				name: "xSize",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 53
			},
			{
				name: "ySize",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 54
			},
			{
				name: "state",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 55
			},
			{
				name: "clevel",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 56
			}
		],
		defaultId: 554,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_NEWENTRY3: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "speed",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "bodyState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "healthState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "effectState",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 12
			},
			{
				name: "job",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 16
			},
			{
				name: "head",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 18
			},
			{
				name: "weapon",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 20
			},
			{
				name: "accessory",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 24
			},
			{
				name: "accessory2",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 26
			},
			{
				name: "accessory3",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 28
			},
			{
				name: "headpalette",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 30
			},
			{
				name: "bodypalette",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 32
			},
			{
				name: "headDir",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 34
			},
			{
				name: "GUID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 36
			},
			{
				name: "GEmblemVer",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 40
			},
			{
				name: "honor",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 42
			},
			{
				name: "virtue",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 44
			},
			{
				name: "isPKModeON",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 48
			},
			{
				name: "sex",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 49
			},
			{
				name: "PosDir",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 3,
				offset: 50
			},
			{
				name: "xSize",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 53
			},
			{
				name: "ySize",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 54
			},
			{
				name: "clevel",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 55
			}
		],
		defaultId: 555,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_MOVEENTRY3: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "objecttype",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 3
			},
			{
				name: "speed",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 7
			},
			{
				name: "bodyState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 9
			},
			{
				name: "healthState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 11
			},
			{
				name: "effectState",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 13
			},
			{
				name: "job",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 17
			},
			{
				name: "head",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 19
			},
			{
				name: "weapon",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 21
			},
			{
				name: "accessory",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 25
			},
			{
				name: "moveStartTime",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 27
			},
			{
				name: "accessory2",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 31
			},
			{
				name: "accessory3",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 33
			},
			{
				name: "headpalette",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 35
			},
			{
				name: "bodypalette",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 37
			},
			{
				name: "headDir",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 39
			},
			{
				name: "GUID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 41
			},
			{
				name: "GEmblemVer",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 45
			},
			{
				name: "honor",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 47
			},
			{
				name: "virtue",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 49
			},
			{
				name: "isPKModeON",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 53
			},
			{
				name: "sex",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 54
			},
			{
				name: "MoveData",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 6,
				offset: 55
			},
			{
				name: "xSize",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 61
			},
			{
				name: "ySize",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 62
			},
			{
				name: "clevel",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 63
			}
		],
		defaultId: 556,
		variableLength: false
	},
	PACKET_CZ_COMMAND_MER: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "type",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "command",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 557,
		variableLength: false
	},
	PACKET_ZC_PROPERTY_HOMUN: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "szName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 2
			},
			{
				name: "bModified",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 26
			},
			{
				name: "nLevel",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 27
			},
			{
				name: "nFullness",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 29
			},
			{
				name: "nRelationship",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 31
			},
			{
				name: "ITID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 33
			},
			{
				name: "atk",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 35
			},
			{
				name: "Matk",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 37
			},
			{
				name: "hit",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 39
			},
			{
				name: "critical",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 41
			},
			{
				name: "def",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 43
			},
			{
				name: "Mdef",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 45
			},
			{
				name: "flee",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 47
			},
			{
				name: "aspd",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 49
			},
			{
				name: "hp",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 51
			},
			{
				name: "maxHP",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 53
			},
			{
				name: "sp",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 55
			},
			{
				name: "maxSP",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 57
			},
			{
				name: "exp",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 59
			},
			{
				name: "maxEXP",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 63
			},
			{
				name: "SKPoint",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 67
			},
			{
				name: "ATKRange",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 69
			}
		],
		defaultId: 558,
		variableLength: false
	},
	PACKET_ZC_CHANGESTATE_MER: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "type",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "state",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 3
			},
			{
				name: "GID",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "data",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 8
			}
		],
		defaultId: 560,
		variableLength: false
	},
	PACKET_CZ_RENAME_MER: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "name",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 2
			}
		],
		defaultId: 561,
		variableLength: false
	},
	PACKET_CZ_REQUEST_MOVENPC: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "dest",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 3,
				offset: 6
			}
		],
		defaultId: 562,
		variableLength: false
	},
	PACKET_CZ_REQUEST_ACTNPC: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "targetGID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "action",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 10
			}
		],
		defaultId: 563,
		variableLength: false
	},
	PACKET_CZ_REQUEST_MOVETOOWNER: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 564,
		variableLength: false
	},
	PACKET_ZC_REQ_STORE_PASSWORD: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Info",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 570,
		variableLength: false
	},
	PACKET_CZ_ACK_STORE_PASSWORD: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Type",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "Password",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 16,
				offset: 4
			},
			{
				name: "NewPassword",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 16,
				offset: 20
			}
		],
		defaultId: 571,
		variableLength: false
	},
	PACKET_ZC_RESULT_STORE_PASSWORD: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Result",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "ErrorCount",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 572,
		variableLength: false
	},
	PACKET_AC_EVENT_RESULT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "EventItemCount",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 573,
		variableLength: false
	},
	PACKET_HC_REQUEST_CHARACTER_PASSWORD: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Result",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "dummyValue",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 574,
		variableLength: false
	},
	PACKET_CZ_MAIL_GET_LIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 575,
		variableLength: false
	},
	PACKET_ZC_MAIL_REQ_GET_LIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "MailNumber",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "mailList",
				dataType: "struct",
				typeLength: 73,
				structName: "MAIL_LIST",
				arrayLength: -1,
				properties: [
					{
						name: "MailID",
						dataType: "Uint32",
						typeLength: 4,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "HEADER",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 40,
						offset: 4
					},
					{
						name: "isOpen",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 44
					},
					{
						name: "FromName",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 24,
						offset: 45
					},
					{
						name: "DeleteTime",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 69
					}
				],
				offset: 0x8
			}
		],
		defaultId: 576,
		variableLength: true
	},
	PACKET_CZ_MAIL_OPEN: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "MailID",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 577,
		variableLength: false
	},
	PACKET_ZC_MAIL_REQ_OPEN: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "MailID",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "Header",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 40,
				offset: 8
			},
			{
				name: "FromName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 48
			},
			{
				name: "DeleteTime",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 72
			},
			{
				name: "Money",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 76
			},
			{
				name: "count",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 80
			},
			{
				name: "ITID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 84
			},
			{
				name: "Type",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 86
			},
			{
				name: "IsIdentified",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 88
			},
			{
				name: "IsDamaged",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 89
			},
			{
				name: "refiningLevel",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 90
			},
			{
				name: "slot",
				dataType: "struct",
				structName: "EQUIPSLOTINFO",
				typeLength: 8,
				arrayLength: 1,
				properties: [
					{
						name: "card1",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "card2",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 2
					},
					{
						name: "card3",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "card4",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 6
					}
				],
				offset: 0x5b
			},
			{
				name: "msg_len",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 99
			},
			{
				name: "msg",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: -1,
				offset: 100
			}
		],
		defaultId: 578,
		variableLength: true
	},
	PACKET_CZ_MAIL_DELETE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "MailID",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 579,
		variableLength: false
	},
	PACKET_CZ_MAIL_GET_ITEM: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "MailID",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 580,
		variableLength: false
	},
	PACKET_ZC_MAIL_REQ_GET_ITEM: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Result",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 581,
		variableLength: false
	},
	PACKET_CZ_MAIL_RESET_ITEM: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Type",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 582,
		variableLength: false
	},
	PACKET_CZ_MAIL_ADD_ITEM: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "index",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "count",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 583,
		variableLength: false
	},
	PACKET_CZ_MAIL_SEND: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "ReceiveName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 4
			},
			{
				name: "Header",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 40,
				offset: 28
			},
			{
				name: "msg_len",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 68
			},
			{
				name: "msg",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: -1,
				offset: 72
			}
		],
		defaultId: 584,
		variableLength: true
	},
	PACKET_ZC_MAIL_REQ_SEND: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Result",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 585,
		variableLength: false
	},
	PACKET_ZC_MAIL_RECEIVE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "MailID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "Header",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 40,
				offset: 6
			},
			{
				name: "FromName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 46
			}
		],
		defaultId: 586,
		variableLength: false
	},
	PACKET_CZ_AUCTION_CREATE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Type",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 587,
		variableLength: false
	},
	PACKET_CZ_AUCTION_ADD_ITEM: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "index",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "count",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 588,
		variableLength: false
	},
	PACKET_CZ_AUCTION_ADD: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "NowMoney",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "MaxMoney",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "DeleteHour",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 10
			}
		],
		defaultId: 589,
		variableLength: false
	},
	PACKET_CZ_AUCTION_ADD_CANCEL: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AuctionID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 590,
		variableLength: false
	},
	PACKET_CZ_AUCTION_BUY: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AuctionID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "Money",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 591,
		variableLength: false
	},
	PACKET_ZC_AUCTION_RESULT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Result",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 592,
		variableLength: false
	},
	PACKET_CZ_AUCTION_ITEM_SEARCH: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Type",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "AuctionID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "Name",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 8
			},
			{
				name: "Page",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 32
			}
		],
		defaultId: 593,
		variableLength: false
	},
	PACKET_ZC_AUCTION_ITEM_REQ_SEARCH: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "MaxPage",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "Number",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "auctionItemList",
				dataType: "struct",
				typeLength: 83,
				structName: "AUCTION_ITEM_SEARCH_INFO",
				arrayLength: -1,
				properties: [
					{
						name: "AuctionID",
						dataType: "Uint32",
						typeLength: 4,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "SellerName",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 24,
						offset: 4
					},
					{
						name: "ITID",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 28
					},
					{
						name: "Type",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 30
					},
					{
						name: "count",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 34
					},
					{
						name: "IsIdentified",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 36
					},
					{
						name: "IsDamaged",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 37
					},
					{
						name: "refiningLevel",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 38
					},
					{
						name: "slot",
						dataType: "struct",
						structName: "EQUIPSLOTINFO",
						typeLength: -1,
						arrayLength: 1,
						properties: [
							{
								name: "card1",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 0
							},
							{
								name: "card2",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 2
							},
							{
								name: "card3",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 4
							},
							{
								name: "card4",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 6
							}
						],
						offset: 0x27
					},
					{
						name: "NowPrice",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 47
					},
					{
						name: "MaxPrice",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 51
					},
					{
						name: "BuyerName",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 24,
						offset: 55
					},
					{
						name: "DeleteTime",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 79
					}
				],
				offset: 0xc
			}
		],
		defaultId: 594,
		variableLength: true
	},
	PACKET_ZC_STARPLACE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "which",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 595,
		variableLength: false
	},
	PACKET_CZ_AGREE_STARPLACE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "which",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 596,
		variableLength: false
	},
	PACKET_ZC_ACK_MAIL_ADD_ITEM: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Index",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "result",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 597,
		variableLength: false
	},
	PACKET_ZC_ACK_AUCTION_ADD_ITEM: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Index",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "result",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 598,
		variableLength: false
	},
	PACKET_ZC_ACK_MAIL_DELETE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "MailID",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "Result",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 599,
		variableLength: false
	},
	PACKET_CA_REQ_GAME_GUARD_CHECK: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 600,
		variableLength: false
	},
	PACKET_AC_ACK_GAME_GUARD: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "ucAnswer",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 601,
		variableLength: false
	},
	PACKET_ZC_MAKINGITEM_LIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "idList",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: -1,
				offset: 4
			}
		],
		defaultId: 602,
		variableLength: true
	},
	PACKET_CZ_REQ_MAKINGITEM: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "mkType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "id",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 603,
		variableLength: false
	},
	PACKET_CZ_AUCTION_REQ_MY_INFO: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Type",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 604,
		variableLength: false
	},
	PACKET_CZ_AUCTION_REQ_MY_SELL_STOP: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AuctionID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 605,
		variableLength: false
	},
	PACKET_ZC_AUCTION_ACK_MY_SELL_STOP: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Result",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 606,
		variableLength: false
	},
	PACKET_ZC_AUCTION_WINDOWS: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Type",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 607,
		variableLength: false
	},
	PACKET_ZC_MAIL_WINDOWS: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Type",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 608,
		variableLength: false
	},
	PACKET_AC_REQ_LOGIN_OLDEKEY: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "m_SeedValue",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 9,
				offset: 2
			}
		],
		defaultId: 609,
		variableLength: false
	},
	PACKET_AC_REQ_LOGIN_NEWEKEY: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "m_SeedValue",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 9,
				offset: 2
			}
		],
		defaultId: 610,
		variableLength: false
	},
	PACKET_AC_REQ_LOGIN_CARDPASS: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "m_SeedValue",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 9,
				offset: 2
			}
		],
		defaultId: 611,
		variableLength: false
	},
	PACKET_CA_ACK_LOGIN_OLDEKEY: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "m_SeedValue",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 9,
				offset: 2
			},
			{
				name: "m_EKey",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 9,
				offset: 11
			}
		],
		defaultId: 612,
		variableLength: false
	},
	PACKET_CA_ACK_LOGIN_NEWEKEY: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "m_SeedValue",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 9,
				offset: 2
			},
			{
				name: "m_EKey",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 9,
				offset: 11
			}
		],
		defaultId: 613,
		variableLength: false
	},
	PACKET_CA_ACK_LOGIN_CARDPASS: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "m_cardPass",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 28,
				offset: 2
			}
		],
		defaultId: 614,
		variableLength: false
	},
	PACKET_AC_ACK_EKEY_FAIL_NOTEXIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "errorCode",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 615,
		variableLength: false
	},
	PACKET_AC_ACK_EKEY_FAIL_NOTUSESEKEY: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "errorCode",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 616,
		variableLength: false
	},
	PACKET_AC_ACK_EKEY_FAIL_NOTUSEDEKEY: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "errorCode",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 617,
		variableLength: false
	},
	PACKET_AC_ACK_EKEY_FAIL_AUTHREFUSE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "errorCode",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 618,
		variableLength: false
	},
	PACKET_AC_ACK_EKEY_FAIL_INPUTEKEY: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "errorCode",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 619,
		variableLength: false
	},
	PACKET_AC_ACK_EKEY_FAIL_NOTICE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "errorCode",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 620,
		variableLength: false
	},
	PACKET_AC_ACK_EKEY_FAIL_NEEDCARDPASS: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "errorCode",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 621,
		variableLength: false
	},
	PACKET_AC_ACK_AUTHEKEY_FAIL_NOTMATCHCARDPASS: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "errorCode",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 622,
		variableLength: false
	},
	PACKET_AC_ACK_FIRST_LOGIN: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 623,
		variableLength: false
	},
	PACKET_AC_REQ_LOGIN_ACCOUNT_INFO: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 624,
		variableLength: false
	},
	PACKET_CA_ACK_LOGIN_ACCOUNT_INFO: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "sex",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "bPoint",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "E_mail",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 34,
				offset: 6
			}
		],
		defaultId: 625,
		variableLength: false
	},
	PACKET_AC_ACK_PT_ID_INFO: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "szPTID",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 21,
				offset: 2
			},
			{
				name: "szPTNumID",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 21,
				offset: 23
			}
		],
		defaultId: 626,
		variableLength: false
	},
	PACKET_CZ_REQ_MAIL_RETURN: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "MailID",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "ReceiveName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 6
			}
		],
		defaultId: 627,
		variableLength: false
	},
	PACKET_ZC_ACK_MAIL_RETURN: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "MailID",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "Result",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 628,
		variableLength: false
	},
	PACKET_CH_ENTER2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "AuthCode",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "userLevel",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "clientType",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 14
			},
			{
				name: "Sex",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 16
			},
			{
				name: "macData",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 16,
				offset: 17
			},
			{
				name: "iAccountSID",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 33
			}
		],
		defaultId: 629,
		variableLength: false
	},
	PACKET_AC_ACCEPT_LOGIN2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "AuthCode",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "userLevel",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 12
			},
			{
				name: "lastLoginIP",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 16
			},
			{
				name: "lastLoginTime",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 26,
				offset: 20
			},
			{
				name: "Sex",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 46
			},
			{
				name: "iAccountSID",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 47
			}
		],
		defaultId: 630,
		variableLength: false
	},
	PACKET_CA_LOGIN_PCBANG: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Version",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "ID",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 6
			},
			{
				name: "Passwd",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 30
			},
			{
				name: "clienttype",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 54
			},
			{
				name: "IP",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 16,
				offset: 55
			},
			{
				name: "MacAdress",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 13,
				offset: 71
			}
		],
		defaultId: 631,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_PCBANG: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 632,
		variableLength: false
	},
	PACKET_CZ_HUNTINGLIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 633,
		variableLength: false
	},
	PACKET_ZC_HUNTINGLIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "HuntingList",
				dataType: "struct",
				typeLength: 12,
				structName: "PACKET_MOB_HUNTING",
				arrayLength: -1,
				properties: [
					{
						name: "questID",
						dataType: "Uint32",
						typeLength: 4,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "mobGID",
						dataType: "Uint32",
						typeLength: 4,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "maxCount",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 8
					},
					{
						name: "count",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 10
					}
				],
				offset: 0x4
			}
		],
		defaultId: 634,
		variableLength: true
	},
	PACKET_ZC_PCBANG_EFFECT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "ExpFactor",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "ExpFactor2",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "DropFactor",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 10
			}
		],
		defaultId: 635,
		variableLength: false
	},
	PACKET_CA_LOGIN4: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Version",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "ID",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 6
			},
			{
				name: "PasswdMD5",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 16,
				offset: 30
			},
			{
				name: "clienttype",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 46
			},
			{
				name: "macData",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 13,
				offset: 47
			}
		],
		defaultId: 636,
		variableLength: false
	},
	PACKET_ZC_PROPERTY_MERCE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "name",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 2
			},
			{
				name: "level",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 26
			},
			{
				name: "faith",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 28
			},
			{
				name: "summonCount",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 30
			},
			{
				name: "atk",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 32
			},
			{
				name: "Matk",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 34
			},
			{
				name: "hit",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 36
			},
			{
				name: "critical",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 38
			},
			{
				name: "def",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 40
			},
			{
				name: "Mdef",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 42
			},
			{
				name: "flee",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 44
			},
			{
				name: "aspd",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 46
			},
			{
				name: "hp",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 48
			},
			{
				name: "maxHP",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 50
			},
			{
				name: "sp",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 52
			},
			{
				name: "maxSP",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 54
			},
			{
				name: "ATKRange",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 56
			},
			{
				name: "exp",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 58
			}
		],
		defaultId: 637,
		variableLength: false
	},
	PACKET_ZC_SHANDA_PROTECT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "CodeLen",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "Code",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: -1,
				offset: 6
			}
		],
		defaultId: 638,
		variableLength: true
	},
	PACKET_CA_CLIENT_TYPE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "ClientType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "nVer",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 639,
		variableLength: false
	},
	PACKET_ZC_GANGSI_POINT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Point",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "TotalPoint",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "PacketSwitch",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 10
			}
		],
		defaultId: 640,
		variableLength: false
	},
	PACKET_CZ_GANGSI_RANK: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketSwitch",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 641,
		variableLength: false
	},
	PACKET_ZC_GANGSI_RANK: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Name",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 10,
				offset: 2
			},
			{
				name: "Point",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 10,
				offset: 242
			},
			{
				name: "PacketSwitch",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 282
			}
		],
		defaultId: 642,
		variableLength: false
	},
	PACKET_ZC_AID: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 643,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_EFFECT3: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "effectID",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "numdata",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 10
			}
		],
		defaultId: 644,
		variableLength: false
	},
	PACKET_ZC_DEATH_QUESTION: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Qcategory",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "Qnum",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 645,
		variableLength: false
	},
	PACKET_CZ_DEATH_QUESTION: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Qanswer",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 646,
		variableLength: false
	},
	PACKET_ZC_PC_CASH_POINT_ITEMLIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "CashPoint",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "itemList",
				dataType: "struct",
				typeLength: 11,
				structName: "PURCHASE_ITEM",
				arrayLength: -1,
				properties: [
					{
						name: "price",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "discountprice",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "type",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 8
					},
					{
						name: "ITID",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 9
					}
				],
				offset: 0x8
			}
		],
		defaultId: 647,
		variableLength: true
	},
	PACKET_CZ_PC_BUY_CASH_POINT_ITEM: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "ITID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "count",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "points",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 648,
		variableLength: false
	},
	PACKET_ZC_PC_CASH_POINT_UPDATE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "CashPoint",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "Error",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 649,
		variableLength: false
	},
	PACKET_ZC_NPC_SHOWEFST_UPDATE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "effectState",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "clevel",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "showEFST",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 14
			}
		],
		defaultId: 650,
		variableLength: false
	},
	PACKET_CH_SELECT_CHAR_GOINGTOBEUSED: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "dwAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "nCountSelectedChar",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "ardwSelectedGID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 9,
				offset: 10
			}
		],
		defaultId: 652,
		variableLength: false
	},
	PACKET_CH_REQ_IS_VALID_CHARNAME: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "dwAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "dwGID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "szCharName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 10
			}
		],
		defaultId: 653,
		variableLength: false
	},
	PACKET_HC_ACK_IS_VALID_CHARNAME: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "sResult",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 654,
		variableLength: false
	},
	PACKET_CH_REQ_CHANGE_CHARNAME: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "dwGID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 655,
		variableLength: false
	},
	PACKET_HC_ACK_CHANGE_CHARNAME: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "sResult",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 656,
		variableLength: false
	},
	PACKET_ZC_MSG: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "msg",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 657,
		variableLength: false
	},
	PACKET_CZ_STANDING_RESURRECTION: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 658,
		variableLength: false
	},
	PACKET_ZC_BOSS_INFO: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "infoType",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "xPos",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 3
			},
			{
				name: "yPos",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 7
			},
			{
				name: "minHour",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 11
			},
			{
				name: "minMinute",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 13
			},
			{
				name: "maxHour",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 15
			},
			{
				name: "maxMinute",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 17
			},
			{
				name: "name",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 51,
				offset: 19
			}
		],
		defaultId: 659,
		variableLength: false
	},
	PACKET_ZC_READ_BOOK: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "bookID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "page",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 660,
		variableLength: false
	},
	PACKET_ZC_EQUIPMENT_ITEMLIST2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "ItemInfo",
				dataType: "struct",
				typeLength: 24,
				structName: "EQUIPMENTITEM_EXTRAINFO2",
				arrayLength: -1,
				properties: [
					{
						name: "index",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "ITID",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 2
					},
					{
						name: "type",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "IsIdentified",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 5
					},
					{
						name: "location",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 6
					},
					{
						name: "WearState",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 8
					},
					{
						name: "IsDamaged",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 10
					},
					{
						name: "RefiningLevel",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 11
					},
					{
						name: "slot",
						dataType: "struct",
						structName: "EQUIPSLOTINFO",
						typeLength: -1,
						arrayLength: 1,
						properties: [
							{
								name: "card1",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 0
							},
							{
								name: "card2",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 2
							},
							{
								name: "card3",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 4
							},
							{
								name: "card4",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 6
							}
						],
						offset: 0xc
					},
					{
						name: "HireExpireDate",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 20
					}
				],
				offset: 0x4
			}
		],
		defaultId: 661,
		variableLength: true
	},
	PACKET_ZC_STORE_EQUIPMENT_ITEMLIST2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "ItemInfo",
				dataType: "struct",
				typeLength: 24,
				structName: "EQUIPMENTITEM_EXTRAINFO2",
				arrayLength: -1,
				properties: [
					{
						name: "index",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "ITID",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 2
					},
					{
						name: "type",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "IsIdentified",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 5
					},
					{
						name: "location",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 6
					},
					{
						name: "WearState",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 8
					},
					{
						name: "IsDamaged",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 10
					},
					{
						name: "RefiningLevel",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 11
					},
					{
						name: "slot",
						dataType: "struct",
						structName: "EQUIPSLOTINFO",
						typeLength: -1,
						arrayLength: 1,
						properties: [
							{
								name: "card1",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 0
							},
							{
								name: "card2",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 2
							},
							{
								name: "card3",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 4
							},
							{
								name: "card4",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 6
							}
						],
						offset: 0xc
					},
					{
						name: "HireExpireDate",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 20
					}
				],
				offset: 0x4
			}
		],
		defaultId: 662,
		variableLength: true
	},
	PACKET_ZC_CART_EQUIPMENT_ITEMLIST2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "ItemInfo",
				dataType: "struct",
				typeLength: 24,
				structName: "EQUIPMENTITEM_EXTRAINFO2",
				arrayLength: -1,
				properties: [
					{
						name: "index",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "ITID",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 2
					},
					{
						name: "type",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "IsIdentified",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 5
					},
					{
						name: "location",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 6
					},
					{
						name: "WearState",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 8
					},
					{
						name: "IsDamaged",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 10
					},
					{
						name: "RefiningLevel",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 11
					},
					{
						name: "slot",
						dataType: "struct",
						structName: "EQUIPSLOTINFO",
						typeLength: -1,
						arrayLength: 1,
						properties: [
							{
								name: "card1",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 0
							},
							{
								name: "card2",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 2
							},
							{
								name: "card3",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 4
							},
							{
								name: "card4",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 6
							}
						],
						offset: 0xc
					},
					{
						name: "HireExpireDate",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 20
					}
				],
				offset: 0x4
			}
		],
		defaultId: 663,
		variableLength: true
	},
	PACKET_ZC_CASH_TIME_COUNTER: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "ITID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "RemainSecond",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 664,
		variableLength: false
	},
	PACKET_ZC_CASH_ITEM_DELETE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "index",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "ITID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 665,
		variableLength: false
	},
	PACKET_ZC_ITEM_PICKUP_ACK2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Index",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "count",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "ITID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "IsIdentified",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "IsDamaged",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 9
			},
			{
				name: "refiningLevel",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "slot",
				dataType: "struct",
				structName: "EQUIPSLOTINFO",
				typeLength: -1,
				arrayLength: 1,
				properties: [
					{
						name: "card1",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "card2",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 2
					},
					{
						name: "card3",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "card4",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 6
					}
				],
				offset: 0xb
			},
			{
				name: "location",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 19
			},
			{
				name: "type",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 21
			},
			{
				name: "result",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 22
			},
			{
				name: "HireExpireDate",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 23
			}
		],
		defaultId: 666,
		variableLength: false
	},
	PACKET_ZC_MER_INIT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "atk",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "Matk",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "hit",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "critical",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 12
			},
			{
				name: "def",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 14
			},
			{
				name: "Mdef",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 16
			},
			{
				name: "flee",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 18
			},
			{
				name: "aspd",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 20
			},
			{
				name: "name",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 22
			},
			{
				name: "level",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 46
			},
			{
				name: "hp",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 48
			},
			{
				name: "maxHP",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 52
			},
			{
				name: "sp",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 56
			},
			{
				name: "maxSP",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 60
			},
			{
				name: "ExpireDate",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 64
			},
			{
				name: "faith",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 68
			},
			{
				name: "toal_call_num",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 70
			},
			{
				name: "approval_monster_kill_counter",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 74
			},
			{
				name: "ATKRange",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 78
			}
		],
		defaultId: 667,
		variableLength: false
	},
	PACKET_ZC_MER_PROPERTY: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "atk",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "Matk",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "hit",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "critical",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "def",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "Mdef",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 12
			},
			{
				name: "flee",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 14
			},
			{
				name: "aspd",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 16
			},
			{
				name: "name",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 18
			},
			{
				name: "level",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 42
			},
			{
				name: "hp",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 44
			},
			{
				name: "maxHP",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 46
			},
			{
				name: "sp",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 48
			},
			{
				name: "maxSP",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 50
			},
			{
				name: "ExpireDate",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 52
			},
			{
				name: "faith",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 56
			},
			{
				name: "toal_call_num",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 58
			},
			{
				name: "approval_monster_kill_counter",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 62
			}
		],
		defaultId: 668,
		variableLength: false
	},
	PACKET_ZC_MER_SKILLINFO_LIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "skillList",
				dataType: "struct",
				typeLength: 37,
				structName: "SKILLINFO",
				arrayLength: -1,
				properties: [
					{
						name: "SKID",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "type",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 2
					},
					{
						name: "level",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 6
					},
					{
						name: "spcost",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 8
					},
					{
						name: "attackRange",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 10
					},
					{
						name: "skillName",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 24,
						offset: 12
					},
					{
						name: "upgradable",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 36
					}
				],
				offset: 0x4
			}
		],
		defaultId: 669,
		variableLength: true
	},
	PACKET_ZC_MER_SKILLINFO_UPDATE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "SKID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "level",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "spcost",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "attackRange",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "upgradable",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 10
			}
		],
		defaultId: 670,
		variableLength: false
	},
	PACKET_CZ_MER_COMMAND: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "command",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 671,
		variableLength: false
	},
	UNUSED_PACKET_CZ_MER_USE_SKILL: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "selectedLevel",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "SKID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "targetID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 672,
		variableLength: false
	},
	UNUSED_PACKET_CZ_MER_UPGRADE_SKILLLEVEL: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "SKID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 673,
		variableLength: false
	},
	PACKET_ZC_MER_PAR_CHANGE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "var",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "value",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 674,
		variableLength: false
	},
	PACKET_ZC_GAMEGUARD_LINGO_KEY: {
		properties: [
			{
				name: "packetType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "lingoKey",
				dataType: "struct",
				structName: "PGG_LINGO_KEY_TEMP",
				typeLength: -1,
				arrayLength: 1,
				properties: [
					{
						name: "dwAlgNum",
						dataType: "Uint32",
						typeLength: 4,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "dwAlgKey1",
						dataType: "Uint32",
						typeLength: 4,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "dwAlgKey2",
						dataType: "Uint32",
						typeLength: 4,
						arrayLength: 1,
						offset: 8
					},
					{
						name: "dwSeed",
						dataType: "Uint32",
						typeLength: 4,
						arrayLength: 1,
						offset: 12
					}
				],
				offset: 0x2
			}
		],
		defaultId: 675,
		variableLength: false
	},
	PACKET_CZ_KSY_EVENT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "index",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "count",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 677,
		variableLength: false
	},
	PACKET_ZC_REQ_CASH_PASSWORD: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Info",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 682,
		variableLength: false
	},
	PACKET_CZ_ACK_CASH_PASSWORD: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Type",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "Password",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 16,
				offset: 4
			},
			{
				name: "NewPassword",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 16,
				offset: 20
			}
		],
		defaultId: 683,
		variableLength: false
	},
	PACKET_ZC_RESULT_CASH_PASSWORD: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Result",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "ErrorCount",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 684,
		variableLength: false
	},
	PACKET_AC_REQUEST_SECOND_PASSWORD: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Result",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "dwSeed",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 685,
		variableLength: false
	},
	PACKET_CA_LOGIN_HAN: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Version",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "ID",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 6
			},
			{
				name: "Passwd",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 30
			},
			{
				name: "clienttype",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 54
			},
			{
				name: "m_szIP",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 16,
				offset: 55
			},
			{
				name: "m_szMacAddr",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 13,
				offset: 71
			},
			{
				name: "isHanGameUser",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 84
			}
		],
		defaultId: 688,
		variableLength: false
	},
	PACKET_ZC_ALL_QUEST_LIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "questCount",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "QuestList",
				dataType: "struct",
				typeLength: 5,
				structName: "PACKET_ZC_QUEST_INFO",
				arrayLength: -1,
				properties: [
					{
						name: "questID",
						dataType: "Uint32",
						typeLength: 4,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "active",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 4
					}
				],
				offset: 0x8
			}
		],
		defaultId: 689,
		variableLength: true
	},
	PACKET_ZC_ALL_QUEST_MISSION: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "count",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "QuestMissionList",
				dataType: "struct",
				typeLength: 104,
				structName: "PACKET_ZC_QUEST_MISSION_INFO",
				arrayLength: -1,
				properties: [
					{
						name: "questID",
						dataType: "Uint32",
						typeLength: 4,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "quest_svrTime",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "quest_endTime",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 8
					},
					{
						name: "count",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 12
					},
					{
						name: "hunt",
						dataType: "struct",
						typeLength: 30,
						structName: "PACKET_ZC_MISSION_HUNT",
						arrayLength: 3,
						properties: [
							{
								name: "mobGID",
								dataType: "Uint32",
								typeLength: 4,
								arrayLength: 1,
								offset: 0
							},
							{
								name: "huntCount",
								dataType: "Int16",
								typeLength: 2,
								arrayLength: 1,
								offset: 4
							},
							{
								name: "mobName",
								dataType: "Uint8",
								typeLength: 1,
								arrayLength: 24,
								offset: 6
							}
						],
						offset: 0xe
					}
				],
				offset: 0x8
			}
		],
		defaultId: 690,
		variableLength: true
	},
	PACKET_ZC_ADD_QUEST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "questID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "active",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "quest_svrTime",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 7
			},
			{
				name: "quest_endTime",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 11
			},
			{
				name: "count",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 15
			},
			{
				name: "hunt",
				dataType: "struct",
				typeLength: 30,
				structName: "PACKET_ZC_MISSION_HUNT",
				arrayLength: 3,
				properties: [
					{
						name: "mobGID",
						dataType: "Uint32",
						typeLength: 4,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "huntCount",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "mobName",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 24,
						offset: 6
					}
				],
				offset: 0x11
			}
		],
		defaultId: 691,
		variableLength: false
	},
	PACKET_ZC_DEL_QUEST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "questID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 692,
		variableLength: false
	},
	PACKET_ZC_UPDATE_MISSION_HUNT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "count",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "MobHuntList",
				dataType: "struct",
				typeLength: 12,
				structName: "PACKET_MOB_HUNTING",
				arrayLength: -1,
				properties: [
					{
						name: "questID",
						dataType: "Uint32",
						typeLength: 4,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "mobGID",
						dataType: "Uint32",
						typeLength: 4,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "maxCount",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 8
					},
					{
						name: "count",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 10
					}
				],
				offset: 0x6
			}
		],
		defaultId: 693,
		variableLength: true
	},
	PACKET_CZ_ACTIVE_QUEST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "questID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "active",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 694,
		variableLength: false
	},
	PACKET_ZC_ACTIVE_QUEST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "questID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "active",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 695,
		variableLength: false
	},
	PACKET_ZC_ITEM_PICKUP_PARTY: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "accountID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "ITID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "IsIdentified",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "IsDamaged",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 9
			},
			{
				name: "refiningLevel",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "slot",
				dataType: "struct",
				structName: "EQUIPSLOTINFO",
				typeLength: -1,
				arrayLength: 1,
				properties: [
					{
						name: "card1",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "card2",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 2
					},
					{
						name: "card3",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "card4",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 6
					}
				],
				offset: 0xb
			},
			{
				name: "location",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 19
			},
			{
				name: "type",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 21
			}
		],
		defaultId: 696,
		variableLength: false
	},
	PACKET_ZC_SHORTCUT_KEY_LIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "ShortCutKey",
				dataType: "struct",
				typeLength: 7,
				structName: "ShortCutKey",
				arrayLength: 27,
				properties: [
					{
						name: "isSkill",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "ID",
						dataType: "Uint32",
						typeLength: 4,
						arrayLength: 1,
						offset: 1
					},
					{
						name: "count",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 5
					}
				],
				offset: 0x2
			}
		],
		defaultId: 697,
		variableLength: false
	},
	PACKET_CZ_SHORTCUT_KEY_CHANGE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Index",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "ShortCutKey",
				dataType: "struct",
				structName: "ShortCutKey",
				typeLength: -1,
				arrayLength: 1,
				properties: [
					{
						name: "isSkill",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "ID",
						dataType: "Uint32",
						typeLength: 4,
						arrayLength: 1,
						offset: 1
					},
					{
						name: "count",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 5
					}
				],
				offset: 0x4
			}
		],
		defaultId: 698,
		variableLength: false
	},
	PACKET_ZC_EQUIPITEM_DAMAGED: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "wearLocation",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "accountID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 699,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_PCBANG_PLAYING_TIME: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "TimeMinute",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 700,
		variableLength: false
	},
	PACKET_ZC_SRPACKETR2_INIT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "ProtectFactor",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "DeformSeedFactor",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "DeformAddFactor",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 8
			}
		],
		defaultId: 703,
		variableLength: false
	},
	PACKET_CZ_SRPACKETR2_START: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "ProtectFactor",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 704,
		variableLength: false
	},
	PACKET_ZC_NPC_CHAT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "accountID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "color",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "msg",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: -1,
				offset: 12
			}
		],
		defaultId: 705,
		variableLength: true
	},
	PACKET_ZC_FORMATSTRING_MSG: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "msg",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "value",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: -1,
				offset: 6
			}
		],
		defaultId: 706,
		variableLength: true
	},
	PACKET_CZ_PARTY_JOIN_REQ: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "characterName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 2
			}
		],
		defaultId: 708,
		variableLength: false
	},
	PACKET_ZC_PARTY_JOIN_REQ_ACK: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "characterName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 2
			},
			{
				name: "answer",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 26
			}
		],
		defaultId: 709,
		variableLength: false
	},
	PACKET_ZC_PARTY_JOIN_REQ: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GRID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "groupName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 6
			}
		],
		defaultId: 710,
		variableLength: false
	},
	PACKET_CZ_PARTY_JOIN_REQ_ACK: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GRID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "bAccept",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 711,
		variableLength: false
	},
	PACKET_CZ_PARTY_CONFIG: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "bRefuseJoinMsg",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 712,
		variableLength: false
	},
	PACKET_ZC_PARTY_CONFIG: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "bRefuseJoinMsg",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 713,
		variableLength: false
	},
	PACKET_HC_REFUSE_SELECTCHAR: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "ErrorCode",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 714,
		variableLength: false
	},
	PACKET_ZC_MEMORIALDUNGEON_SUBSCRIPTION_INFO: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "MemorialDungeonName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 61,
				offset: 2
			},
			{
				name: "PriorityOrderNum",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 63
			}
		],
		defaultId: 715,
		variableLength: false
	},
	PACKET_ZC_MEMORIALDUNGEON_SUBSCRIPTION_NOTIFY: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PriorityOrderNum",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 716,
		variableLength: false
	},
	PACKET_ZC_MEMORIALDUNGEON_INFO: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "MemorialDungeonName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 61,
				offset: 2
			},
			{
				name: "DestroyDate",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 63
			},
			{
				name: "EnterTimeOutDate",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 67
			}
		],
		defaultId: 717,
		variableLength: false
	},
	PACKET_ZC_MEMORIALDUNGEON_NOTIFY: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Type",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "EnterLimitDate",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 718,
		variableLength: false
	},
	PACKET_CZ_MEMORIALDUNGEON_COMMAND: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Command",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 719,
		variableLength: false
	},
	PACKET_ZC_EQUIPMENT_ITEMLIST3: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "ItemInfo",
				dataType: "struct",
				typeLength: 28,
				structName: "EQUIPMENTITEM_EXTRAINFO301",
				arrayLength: -1,
				properties: [
					{
						name: "index",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "ITID",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 2
					},
					{
						name: "type",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "IsIdentified",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 5
					},
					{
						name: "location",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 6
					},
					{
						name: "WearState",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 8
					},
					{
						name: "IsDamaged",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 10
					},
					{
						name: "RefiningLevel",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 11
					},
					{
						name: "slot",
						dataType: "struct",
						structName: "EQUIPSLOTINFO",
						typeLength: -1,
						arrayLength: 1,
						properties: [
							{
								name: "card1",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 0
							},
							{
								name: "card2",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 2
							},
							{
								name: "card3",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 4
							},
							{
								name: "card4",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 6
							}
						],
						offset: 0xc
					},
					{
						name: "HireExpireDate",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 20
					},
					{
						name: "bindOnEquipType",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 24
					},
					{
						name: "wItemSpriteNumber",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 26
					}
				],
				offset: 0x4
			}
		],
		defaultId: 720,
		variableLength: true
	},
	PACKET_ZC_STORE_EQUIPMENT_ITEMLIST3: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "ItemInfo",
				dataType: "struct",
				typeLength: 28,
				structName: "EQUIPMENTITEM_EXTRAINFO301",
				arrayLength: -1,
				properties: [
					{
						name: "index",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "ITID",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 2
					},
					{
						name: "type",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "IsIdentified",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 5
					},
					{
						name: "location",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 6
					},
					{
						name: "WearState",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 8
					},
					{
						name: "IsDamaged",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 10
					},
					{
						name: "RefiningLevel",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 11
					},
					{
						name: "slot",
						dataType: "struct",
						structName: "EQUIPSLOTINFO",
						typeLength: -1,
						arrayLength: 1,
						properties: [
							{
								name: "card1",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 0
							},
							{
								name: "card2",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 2
							},
							{
								name: "card3",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 4
							},
							{
								name: "card4",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 6
							}
						],
						offset: 0xc
					},
					{
						name: "HireExpireDate",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 20
					},
					{
						name: "bindOnEquipType",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 24
					},
					{
						name: "wItemSpriteNumber",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 26
					}
				],
				offset: 0x4
			}
		],
		defaultId: 721,
		variableLength: true
	},
	PACKET_ZC_CART_EQUIPMENT_ITEMLIST3: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "ItemInfo",
				dataType: "struct",
				typeLength: 28,
				structName: "EQUIPMENTITEM_EXTRAINFO301",
				arrayLength: -1,
				properties: [
					{
						name: "index",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "ITID",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 2
					},
					{
						name: "type",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "IsIdentified",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 5
					},
					{
						name: "location",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 6
					},
					{
						name: "WearState",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 8
					},
					{
						name: "IsDamaged",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 10
					},
					{
						name: "RefiningLevel",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 11
					},
					{
						name: "slot",
						dataType: "struct",
						structName: "EQUIPSLOTINFO",
						typeLength: -1,
						arrayLength: 1,
						properties: [
							{
								name: "card1",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 0
							},
							{
								name: "card2",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 2
							},
							{
								name: "card3",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 4
							},
							{
								name: "card4",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 6
							}
						],
						offset: 0xc
					},
					{
						name: "HireExpireDate",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 20
					},
					{
						name: "bindOnEquipType",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 24
					},
					{
						name: "wItemSpriteNumber",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 26
					}
				],
				offset: 0x4
			}
		],
		defaultId: 722,
		variableLength: true
	},
	PACKET_ZC_NOTIFY_BIND_ON_EQUIP: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "index",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 723,
		variableLength: false
	},
	PACKET_ZC_ITEM_PICKUP_ACK3: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Index",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "count",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "ITID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "IsIdentified",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "IsDamaged",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 9
			},
			{
				name: "refiningLevel",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "slot",
				dataType: "struct",
				structName: "EQUIPSLOTINFO",
				typeLength: -1,
				arrayLength: 1,
				properties: [
					{
						name: "card1",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "card2",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 2
					},
					{
						name: "card3",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "card4",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 6
					}
				],
				offset: 0xb
			},
			{
				name: "location",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 19
			},
			{
				name: "type",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 21
			},
			{
				name: "result",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 22
			},
			{
				name: "HireExpireDate",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 23
			},
			{
				name: "bindOnEquipType",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 27
			}
		],
		defaultId: 724,
		variableLength: false
	},
	PACKET_ZC_ISVR_DISCONNECT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 725,
		variableLength: false
	},
	PACKET_CZ_EQUIPWIN_MICROSCOPE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 726,
		variableLength: false
	},
	PACKET_ZC_EQUIPWIN_MICROSCOPE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "characterName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 4
			},
			{
				name: "job",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 28
			},
			{
				name: "head",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 30
			},
			{
				name: "accessory",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 32
			},
			{
				name: "accessory2",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 34
			},
			{
				name: "accessory3",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 36
			},
			{
				name: "headpalette",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 38
			},
			{
				name: "bodypalette",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 40
			},
			{
				name: "sex",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 42
			},
			{
				name: "ItemInfo",
				dataType: "struct",
				typeLength: 28,
				structName: "EQUIPMENTITEM_EXTRAINFO301",
				arrayLength: -1,
				properties: [
					{
						name: "index",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "ITID",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 2
					},
					{
						name: "type",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "IsIdentified",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 5
					},
					{
						name: "location",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 6
					},
					{
						name: "WearState",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 8
					},
					{
						name: "IsDamaged",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 10
					},
					{
						name: "RefiningLevel",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 11
					},
					{
						name: "slot",
						dataType: "struct",
						structName: "EQUIPSLOTINFO",
						typeLength: -1,
						arrayLength: 1,
						properties: [
							{
								name: "card1",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 0
							},
							{
								name: "card2",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 2
							},
							{
								name: "card3",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 4
							},
							{
								name: "card4",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 6
							}
						],
						offset: 0xc
					},
					{
						name: "HireExpireDate",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 20
					},
					{
						name: "bindOnEquipType",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 24
					},
					{
						name: "wItemSpriteNumber",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 26
					}
				],
				offset: 0x2b
			}
		],
		defaultId: 727,
		variableLength: true
	},
	PACKET_CZ_CONFIG: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Config",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "Value",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 728,
		variableLength: false
	},
	PACKET_ZC_CONFIG: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Config",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "Value",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 729,
		variableLength: false
	},
	PACKET_ZC_CONFIG_NOTIFY: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "bOpenEquipmentWin",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 730,
		variableLength: false
	},
	PACKET_CZ_BATTLEFIELD_CHAT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "msg",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: -1,
				offset: 4
			}
		],
		defaultId: 731,
		variableLength: true
	},
	PACKET_ZC_BATTLEFIELD_CHAT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "accountID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "name",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 8
			},
			{
				name: "msg",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: -1,
				offset: 32
			}
		],
		defaultId: 732,
		variableLength: true
	},
	PACKET_ZC_BATTLEFIELD_NOTIFY_CAMPINFO: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "accountID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "name",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 6
			},
			{
				name: "camp",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 30
			}
		],
		defaultId: 733,
		variableLength: false
	},
	PACKET_ZC_BATTLEFIELD_NOTIFY_POINT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "pointCampA",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "pointCampB",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 734,
		variableLength: false
	},
	PACKET_ZC_BATTLEFIELD_NOTIFY_POSITION: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "accountID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "name",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 6
			},
			{
				name: "job",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 30
			},
			{
				name: "x",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 32
			},
			{
				name: "y",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 34
			}
		],
		defaultId: 735,
		variableLength: false
	},
	PACKET_ZC_BATTLEFIELD_NOTIFY_HP: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "accountID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "name",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 6
			},
			{
				name: "hp",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 30
			},
			{
				name: "maxHp",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 32
			}
		],
		defaultId: 736,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_ACT2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "targetGID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "startTime",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "attackMT",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 14
			},
			{
				name: "attackedMT",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 18
			},
			{
				name: "damage",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 22
			},
			{
				name: "count",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 26
			},
			{
				name: "action",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 28
			},
			{
				name: "leftDamage",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 29
			}
		],
		defaultId: 737,
		variableLength: false
	},
	PACKET_CZ_BOT_CHECK: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "IsBot",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 742,
		variableLength: false
	},
	PACKET_ZC_MAPPROPERTY: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "type",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "mapInfoTable",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: -1,
				offset: 6
			}
		],
		defaultId: 743,
		variableLength: true
	},
	PACKET_ZC_NORMAL_ITEMLIST3: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "ItemInfo",
				dataType: "struct",
				typeLength: 22,
				structName: "NORMALITEM_EXTRAINFO3",
				arrayLength: -1,
				properties: [
					{
						name: "index",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "ITID",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 2
					},
					{
						name: "type",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "IsIdentified",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 5
					},
					{
						name: "count",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 6
					},
					{
						name: "WearState",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 8
					},
					{
						name: "slot",
						dataType: "struct",
						structName: "EQUIPSLOTINFO",
						typeLength: -1,
						arrayLength: 1,
						properties: [
							{
								name: "card1",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 0
							},
							{
								name: "card2",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 2
							},
							{
								name: "card3",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 4
							},
							{
								name: "card4",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 6
							}
						],
						offset: 0xa
					},
					{
						name: "HireExpireDate",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 18
					}
				],
				offset: 0x4
			}
		],
		defaultId: 744,
		variableLength: true
	},
	PACKET_ZC_CART_NORMAL_ITEMLIST3: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "ItemInfo",
				dataType: "struct",
				typeLength: 22,
				structName: "NORMALITEM_EXTRAINFO3",
				arrayLength: -1,
				properties: [
					{
						name: "index",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "ITID",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 2
					},
					{
						name: "type",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "IsIdentified",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 5
					},
					{
						name: "count",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 6
					},
					{
						name: "WearState",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 8
					},
					{
						name: "slot",
						dataType: "struct",
						structName: "EQUIPSLOTINFO",
						typeLength: -1,
						arrayLength: 1,
						properties: [
							{
								name: "card1",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 0
							},
							{
								name: "card2",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 2
							},
							{
								name: "card3",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 4
							},
							{
								name: "card4",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 6
							}
						],
						offset: 0xa
					},
					{
						name: "HireExpireDate",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 18
					}
				],
				offset: 0x4
			}
		],
		defaultId: 745,
		variableLength: true
	},
	PACKET_ZC_STORE_NORMAL_ITEMLIST3: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "ItemInfo",
				dataType: "struct",
				typeLength: 22,
				structName: "NORMALITEM_EXTRAINFO3",
				arrayLength: -1,
				properties: [
					{
						name: "index",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "ITID",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 2
					},
					{
						name: "type",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "IsIdentified",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 5
					},
					{
						name: "count",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 6
					},
					{
						name: "WearState",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 8
					},
					{
						name: "slot",
						dataType: "struct",
						structName: "EQUIPSLOTINFO",
						typeLength: -1,
						arrayLength: 1,
						properties: [
							{
								name: "card1",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 0
							},
							{
								name: "card2",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 2
							},
							{
								name: "card3",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 4
							},
							{
								name: "card4",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 6
							}
						],
						offset: 0xa
					},
					{
						name: "HireExpireDate",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 18
					}
				],
				offset: 0x4
			}
		],
		defaultId: 746,
		variableLength: true
	},
	PACKET_ZC_ACCEPT_ENTER2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "startTime",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "PosDir",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 3,
				offset: 6
			},
			{
				name: "xSize",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 9
			},
			{
				name: "ySize",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "font",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 11
			}
		],
		defaultId: 747,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_MOVEENTRY4: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "objecttype",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 3
			},
			{
				name: "speed",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 7
			},
			{
				name: "bodyState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 9
			},
			{
				name: "healthState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 11
			},
			{
				name: "effectState",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 13
			},
			{
				name: "job",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 17
			},
			{
				name: "head",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 19
			},
			{
				name: "weapon",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 21
			},
			{
				name: "accessory",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 25
			},
			{
				name: "moveStartTime",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 27
			},
			{
				name: "accessory2",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 31
			},
			{
				name: "accessory3",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 33
			},
			{
				name: "headpalette",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 35
			},
			{
				name: "bodypalette",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 37
			},
			{
				name: "headDir",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 39
			},
			{
				name: "GUID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 41
			},
			{
				name: "GEmblemVer",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 45
			},
			{
				name: "honor",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 47
			},
			{
				name: "virtue",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 49
			},
			{
				name: "isPKModeON",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 53
			},
			{
				name: "sex",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 54
			},
			{
				name: "MoveData",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 6,
				offset: 55
			},
			{
				name: "xSize",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 61
			},
			{
				name: "ySize",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 62
			},
			{
				name: "clevel",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 63
			},
			{
				name: "font",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 65
			}
		],
		defaultId: 748,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_NEWENTRY4: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "speed",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "bodyState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "healthState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "effectState",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 12
			},
			{
				name: "job",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 16
			},
			{
				name: "head",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 18
			},
			{
				name: "weapon",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 20
			},
			{
				name: "accessory",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 24
			},
			{
				name: "accessory2",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 26
			},
			{
				name: "accessory3",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 28
			},
			{
				name: "headpalette",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 30
			},
			{
				name: "bodypalette",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 32
			},
			{
				name: "headDir",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 34
			},
			{
				name: "GUID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 36
			},
			{
				name: "GEmblemVer",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 40
			},
			{
				name: "honor",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 42
			},
			{
				name: "virtue",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 44
			},
			{
				name: "isPKModeON",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 48
			},
			{
				name: "sex",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 49
			},
			{
				name: "PosDir",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 3,
				offset: 50
			},
			{
				name: "xSize",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 53
			},
			{
				name: "ySize",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 54
			},
			{
				name: "clevel",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 55
			},
			{
				name: "font",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 57
			}
		],
		defaultId: 749,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_STANDENTRY4: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "speed",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "bodyState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "healthState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "effectState",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 12
			},
			{
				name: "job",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 16
			},
			{
				name: "head",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 18
			},
			{
				name: "weapon",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 20
			},
			{
				name: "accessory",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 24
			},
			{
				name: "accessory2",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 26
			},
			{
				name: "accessory3",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 28
			},
			{
				name: "headpalette",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 30
			},
			{
				name: "bodypalette",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 32
			},
			{
				name: "headDir",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 34
			},
			{
				name: "GUID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 36
			},
			{
				name: "GEmblemVer",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 40
			},
			{
				name: "honor",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 42
			},
			{
				name: "virtue",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 44
			},
			{
				name: "isPKModeON",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 48
			},
			{
				name: "sex",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 49
			},
			{
				name: "PosDir",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 3,
				offset: 50
			},
			{
				name: "xSize",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 53
			},
			{
				name: "ySize",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 54
			},
			{
				name: "state",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 55
			},
			{
				name: "clevel",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 56
			},
			{
				name: "font",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 58
			}
		],
		defaultId: 750,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_FONT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "font",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 751,
		variableLength: false
	},
	PACKET_ZC_PROGRESS: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "color",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "time",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 752,
		variableLength: false
	},
	PACKET_CZ_PROGRESS: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 753,
		variableLength: false
	},
	PACKET_ZC_PROGRESS_CANCEL: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 754,
		variableLength: false
	},
	PACKET_CZ_OPEN_SIMPLE_CASHSHOP_ITEMLIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 860,
		variableLength: false
	},
	PACKET_ZC_SIMPLE_CASHSHOP_POINT_ITEMLIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "CashPoint",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "md_itemcount",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "md_itemSize",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "best_itemcount",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 12
			},
			{
				name: "best_itemsize",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 14
			},
			{
				name: "ItemList",
				dataType: "struct",
				typeLength: 11,
				structName: "PURCHASE_ITEM",
				arrayLength: -1,
				properties: [
					{
						name: "price",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "discountprice",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "type",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 8
					},
					{
						name: "ITID",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 9
					}
				],
				offset: 0x10
			}
		],
		defaultId: 861,
		variableLength: true
	},
	PACKET_CZ_CLOSE_WINDOW: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 862,
		variableLength: false
	},
	PACKET_CZ_REQUEST_MOVE2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "dest",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 3,
				offset: 2
			}
		],
		defaultId: 863,
		variableLength: false
	},
	PACKET_CZ_REQUEST_TIME2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "clientTime",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 864,
		variableLength: false
	},
	PACKET_AHC_GAME_GUARD: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AuthData",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 4,
				offset: 2
			}
		],
		defaultId: 989,
		variableLength: false
	},
	PACKET_CAH_ACK_GAME_GUARD: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AuthData",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 4,
				offset: 2
			}
		],
		defaultId: 990,
		variableLength: false
	},
	PACKET_CZ_ENTER2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "AuthCode",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "clientTime",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 14
			},
			{
				name: "Sex",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 18
			}
		],
		defaultId: 1078,
		variableLength: false
	},
	PACKET_CZ_REQUEST_ACT2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "targetGID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "action",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 1079,
		variableLength: false
	},
	PACKET_CZ_USE_SKILL2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "selectedLevel",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "SKID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "targetID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 1080,
		variableLength: false
	},
	PACKET_CZ_USE_ITEM2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "index",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 1081,
		variableLength: false
	},
	PACKET_ZC_SKILL_POSTDELAY: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "SKID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "DelayTM",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 1085,
		variableLength: false
	},
	PACKET_ZC_SKILL_POSTDELAY_LIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "delayList",
				dataType: "struct",
				typeLength: 6,
				structName: "SKILL_POSTDELAY",
				arrayLength: -1,
				properties: [
					{
						name: "SKID",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "DelayTM",
						dataType: "Uint32",
						typeLength: 4,
						arrayLength: 1,
						offset: 2
					}
				],
				offset: 0x4
			}
		],
		defaultId: 1086,
		variableLength: true
	},
	PACKET_ZC_MSG_STATE_CHANGE2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "index",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "state",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "RemainMS",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 9
			},
			{
				name: "val",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 3,
				offset: 13
			}
		],
		defaultId: 1087,
		variableLength: false
	},
	PACKET_ZC_MILLENNIUMSHIELD: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "num",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "state",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 8
			}
		],
		defaultId: 1088,
		variableLength: false
	},
	PACKET_ZC_SKILLINFO_DELETE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "SKID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 1089,
		variableLength: false
	},
	PACKET_ZC_SKILL_SELECT_REQUEST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "why",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "SKIDList",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: -1,
				offset: 8
			}
		],
		defaultId: 1090,
		variableLength: true
	},
	PACKET_CZ_SKILL_SELECT_RESPONSE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "why",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "SKID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 1091,
		variableLength: false
	},
	PACKET_ZC_SIMPLE_CASH_POINT_ITEMLIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "CashPoint",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "ItemList",
				dataType: "struct",
				typeLength: 11,
				structName: "PURCHASE_ITEM",
				arrayLength: -1,
				properties: [
					{
						name: "price",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "discountprice",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "type",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 8
					},
					{
						name: "ITID",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 9
					}
				],
				offset: 0x8
			}
		],
		defaultId: 1092,
		variableLength: true
	},
	PACKET_CZ_SIMPLE_BUY_CASH_POINT_ITEM: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "ITID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "count",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 1093,
		variableLength: false
	},
	PACKET_ZC_QUEST_NOTIFY_EFFECT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "npcID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "xPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "yPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "effect",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "type",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 12
			}
		],
		defaultId: 1094,
		variableLength: false
	},
	PACKET_CZ_BLOCKING_PLAY_CANCEL: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 1095,
		variableLength: false
	},
	PACKET_HC_CHARACTER_LIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "CharacterList",
				dataType: "struct",
				typeLength: 5,
				structName: "CHARACTER_LIST",
				arrayLength: -1,
				properties: [
					{
						name: "dwGID",
						dataType: "Uint32",
						typeLength: 4,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "SlotIdx",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 4
					}
				],
				offset: 0x4
			}
		],
		defaultId: 1096,
		variableLength: true
	},
	PACKET_ZC_HACKSH_ERROR_MSG: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "ErrorID",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 1097,
		variableLength: false
	},
	PACKET_CZ_CLIENT_VERSION: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "clientVer",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 1098,
		variableLength: false
	},
	PACKET_CZ_CLOSE_SIMPLECASH_SHOP: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 1099,
		variableLength: false
	},
	PACKET_ZC_ES_RESULT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "esNo",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "esMsg",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 2000,
		variableLength: false
	},
	PACKET_CZ_ES_GET_LIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 2001,
		variableLength: false
	},
	PACKET_ZC_ES_LIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "Count",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 2002,
		variableLength: false
	},
	PACKET_CZ_ES_CHOOSE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "esNo",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 2003,
		variableLength: false
	},
	PACKET_CZ_ES_CANCEL: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "esNo",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 2004,
		variableLength: false
	},
	PACKET_ZC_ES_READY: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "esNo",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 2005,
		variableLength: false
	},
	PACKET_ZC_ES_GOTO: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "esNo",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 2006,
		variableLength: false
	},
	PACKET_CZ_GROUPINFO_CHANGE_V2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "expOption",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "ItemPickupRule",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "ItemDivisionRule",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 7
			}
		],
		defaultId: 2007,
		variableLength: false
	},
	PACKET_ZC_REQ_GROUPINFO_CHANGE_V2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "expOption",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "ItemPickupRule",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "ItemDivisionRule",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 7
			}
		],
		defaultId: 2008,
		variableLength: false
	},
	PACKET_ZC_SHORTCUT_KEY_LIST_V2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "ShortCutKey",
				dataType: "struct",
				typeLength: 7,
				structName: "ShortCutKey",
				arrayLength: 38,
				properties: [
					{
						name: "isSkill",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "ID",
						dataType: "Uint32",
						typeLength: 4,
						arrayLength: 1,
						offset: 1
					},
					{
						name: "count",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 5
					}
				],
				offset: 0x2
			}
		],
		defaultId: 2009,
		variableLength: false
	},
	PACKET_CZ_CHANGE_GROUP_MASTER: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 2010,
		variableLength: false
	},
	PACKET_ZC_HO_PAR_CHANGE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "var",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "value",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 2011,
		variableLength: false
	},
	PACKET_CZ_SEEK_PARTY: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Option",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 2012,
		variableLength: false
	},
	PACKET_ZC_SEEK_PARTY: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Name",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 2
			},
			{
				name: "Job",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 26
			},
			{
				name: "Level",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 30
			},
			{
				name: "mapName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 16,
				offset: 34
			},
			{
				name: "Option",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 50
			}
		],
		defaultId: 2013,
		variableLength: false
	},
	PACKET_CZ_SEEK_PARTY_MEMBER: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Job",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "Level",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "mapName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 16,
				offset: 10
			},
			{
				name: "Option",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 26
			}
		],
		defaultId: 2014,
		variableLength: false
	},
	PACKET_ZC_SEEK_PARTY_MEMBER: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Name",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 2
			},
			{
				name: "Job",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 26
			},
			{
				name: "Level",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 30
			},
			{
				name: "mapName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 16,
				offset: 34
			},
			{
				name: "Option",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 50
			}
		],
		defaultId: 2015,
		variableLength: false
	},
	PACKET_ZC_ES_NOTI_MYINFO: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "esNo",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "esname",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 54,
				offset: 4
			}
		],
		defaultId: 2016,
		variableLength: false
	},
	PACKET_ZC_SKILLINFO_UPDATE2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "SKID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "type",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "level",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "spcost",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "attackRange",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 12
			},
			{
				name: "upgradable",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 14
			}
		],
		defaultId: 2017,
		variableLength: false
	},
	PACKET_ZC_MSG_VALUE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "msg",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "value",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 2018,
		variableLength: false
	},
	PACKET_ZC_ITEMLISTWIN_OPEN: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Type",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 2019,
		variableLength: false
	},
	PACKET_CZ_ITEMLISTWIN_RES: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "Type",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "Action",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "MaterialList",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 12
			}
		],
		defaultId: 2020,
		variableLength: false
	},
	PACKET_CH_ENTER_CHECKBOT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "dwAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "szStringInfo",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: -1,
				offset: 8
			}
		],
		defaultId: 2021,
		variableLength: true
	},
	PACKET_ZC_MSG_SKILL: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "SKID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "MSGID",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 2022,
		variableLength: false
	},
	PACKET_CH_CHECKBOT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "dwAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "szStringInfo",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 8
			}
		],
		defaultId: 2023,
		variableLength: false
	},
	PACKET_HC_CHECKBOT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "img",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: -1,
				offset: 4
			}
		],
		defaultId: 2024,
		variableLength: true
	},
	PACKET_HC_CHECKBOT_RESULT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "Result",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 2025,
		variableLength: false
	},
	PACKET_CZ_BATTLE_FIELD_LIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 2026,
		variableLength: false
	},
	PACKET_ZC_BATTLE_FIELD_LIST: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "Count",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "ack_type",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "InfoList",
				dataType: "struct",
				typeLength: 62,
				structName: "BATTLE_FIELD_INFO",
				arrayLength: -1,
				properties: [
					{
						name: "BFNO",
						dataType: "Uint32",
						typeLength: 4,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "BattleFieldName",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 56,
						offset: 4
					},
					{
						name: "JoinTeam",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 60
					}
				],
				offset: 0x8
			}
		],
		defaultId: 2027,
		variableLength: true
	},
	PACKET_CZ_JOIN_BATTLE_FIELD: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "BFNO",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "JoinTeam",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 2028,
		variableLength: false
	},
	PACKET_ZC_JOIN_BATTLE_FIELD: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "BFNO",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "JoinTeam",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "Result",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 8
			}
		],
		defaultId: 2029,
		variableLength: false
	},
	PACKET_CZ_CANCEL_BATTLE_FIELD: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "BFNO",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 2030,
		variableLength: false
	},
	PACKET_ZC_CANCEL_BATTLE_FIELD: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "BFNO",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "Result",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 2031,
		variableLength: false
	},
	PACKET_CZ_REQ_BATTLE_STATE_MONITOR: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "BFNO",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "PowerSwitch",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 2032,
		variableLength: false
	},
	PACKET_ZC_ACK_BATTLE_STATE_MONITOR: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "BFNO",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "PlayCount",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "BattleState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "TeamCount_A",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "TeamCount_B",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 12
			},
			{
				name: "MyCount",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 14
			},
			{
				name: "JoinTeam",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 16
			}
		],
		defaultId: 2033,
		variableLength: false
	},
	PACKET_ZC_BATTLE_NOTI_START_STEP: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "BFNO",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "Result",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 2034,
		variableLength: false
	},
	PACKET_ZC_BATTLE_JOIN_NOTI_DEFER: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "BFNO",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 2035,
		variableLength: false
	},
	PACKET_ZC_BATTLE_JOIN_DISABLE_STATE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Enable",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 2036,
		variableLength: false
	},
	PACKET_CZ_GM_FULLSTRIP: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "TargetAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 2037,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_EXP: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "amount",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "varID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "expType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 12
			}
		],
		defaultId: 2038,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_MOVEENTRY7: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "objecttype",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 5
			},
			{
				name: "speed",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 9
			},
			{
				name: "bodyState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 11
			},
			{
				name: "healthState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 13
			},
			{
				name: "effectState",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 15
			},
			{
				name: "job",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 19
			},
			{
				name: "head",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 21
			},
			{
				name: "weapon",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 23
			},
			{
				name: "accessory",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 27
			},
			{
				name: "moveStartTime",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 29
			},
			{
				name: "accessory2",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 33
			},
			{
				name: "accessory3",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 35
			},
			{
				name: "headpalette",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 37
			},
			{
				name: "bodypalette",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 39
			},
			{
				name: "headDir",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 41
			},
			{
				name: "GUID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 43
			},
			{
				name: "GEmblemVer",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 47
			},
			{
				name: "honor",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 49
			},
			{
				name: "virtue",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 51
			},
			{
				name: "isPKModeON",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 55
			},
			{
				name: "sex",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 56
			},
			{
				name: "MoveData",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 6,
				offset: 57
			},
			{
				name: "xSize",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 63
			},
			{
				name: "ySize",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 64
			},
			{
				name: "clevel",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 65
			},
			{
				name: "font",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 67
			},
			{
				name: "name",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 69
			}
		],
		defaultId: 2039,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_NEWENTRY5: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "objecttype",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 5
			},
			{
				name: "speed",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 9
			},
			{
				name: "bodyState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 11
			},
			{
				name: "healthState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 13
			},
			{
				name: "effectState",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 15
			},
			{
				name: "job",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 19
			},
			{
				name: "head",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 21
			},
			{
				name: "weapon",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 23
			},
			{
				name: "accessory",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 27
			},
			{
				name: "accessory2",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 29
			},
			{
				name: "accessory3",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 31
			},
			{
				name: "headpalette",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 33
			},
			{
				name: "bodypalette",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 35
			},
			{
				name: "headDir",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 37
			},
			{
				name: "GUID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 39
			},
			{
				name: "GEmblemVer",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 43
			},
			{
				name: "honor",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 45
			},
			{
				name: "virtue",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 47
			},
			{
				name: "isPKModeON",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 51
			},
			{
				name: "sex",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 52
			},
			{
				name: "PosDir",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 3,
				offset: 53
			},
			{
				name: "xSize",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 56
			},
			{
				name: "ySize",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 57
			},
			{
				name: "clevel",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 58
			},
			{
				name: "font",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 60
			},
			{
				name: "name",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 62
			}
		],
		defaultId: 2040,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_STANDENTRY5: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "objecttype",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 5
			},
			{
				name: "speed",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 9
			},
			{
				name: "bodyState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 11
			},
			{
				name: "healthState",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 13
			},
			{
				name: "effectState",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 15
			},
			{
				name: "job",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 19
			},
			{
				name: "head",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 21
			},
			{
				name: "weapon",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 23
			},
			{
				name: "accessory",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 27
			},
			{
				name: "accessory2",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 29
			},
			{
				name: "accessory3",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 31
			},
			{
				name: "headpalette",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 33
			},
			{
				name: "bodypalette",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 35
			},
			{
				name: "headDir",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 37
			},
			{
				name: "GUID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 39
			},
			{
				name: "GEmblemVer",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 43
			},
			{
				name: "honor",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 45
			},
			{
				name: "virtue",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 47
			},
			{
				name: "isPKModeON",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 51
			},
			{
				name: "sex",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 52
			},
			{
				name: "PosDir",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 3,
				offset: 53
			},
			{
				name: "xSize",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 56
			},
			{
				name: "ySize",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 57
			},
			{
				name: "state",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 58
			},
			{
				name: "clevel",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 59
			},
			{
				name: "font",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 61
			},
			{
				name: "name",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 63
			}
		],
		defaultId: 2041,
		variableLength: false
	},
	PACKET_ZC_DELETE_ITEM_FROM_BODY: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "DeleteType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "Index",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "Count",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 2042,
		variableLength: false
	},
	PACKET_ZC_USESKILL_ACK2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "targetID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "xPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "yPos",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 12
			},
			{
				name: "SKID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 14
			},
			{
				name: "property",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 16
			},
			{
				name: "delayTime",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 20
			},
			{
				name: "isDisposable",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 24
			}
		],
		defaultId: 2043,
		variableLength: false
	},
	PACKET_ZC_CHANGE_GROUP_MASTER: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "OldMasterAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "NewMasterAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 2044,
		variableLength: false
	},
	PACKET_ZC_PLAY_NPC_BGM: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Bgm",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 2
			}
		],
		defaultId: 2046,
		variableLength: false
	},
	PACKET_ZC_DEFINE_CHECK: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "Result",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 2047,
		variableLength: false
	},
	PACKET_ZC_PC_PURCHASE_ITEMLIST_FROMMC2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "UniqueID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "itemList",
				dataType: "struct",
				typeLength: 22,
				structName: "PURCHASE_ITEM_FROMMC",
				arrayLength: -1,
				properties: [
					{
						name: "price",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "count",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "index",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 6
					},
					{
						name: "type",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 8
					},
					{
						name: "ITID",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 9
					},
					{
						name: "IsIdentified",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 11
					},
					{
						name: "IsDamaged",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 12
					},
					{
						name: "refiningLevel",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 13
					},
					{
						name: "slot",
						dataType: "struct",
						structName: "EQUIPSLOTINFO",
						typeLength: -1,
						arrayLength: 1,
						properties: [
							{
								name: "card1",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 0
							},
							{
								name: "card2",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 2
							},
							{
								name: "card3",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 4
							},
							{
								name: "card4",
								dataType: "Uint16",
								typeLength: 2,
								arrayLength: 1,
								offset: 6
							}
						],
						offset: 0xe
					}
				],
				offset: 0xc
			}
		],
		defaultId: 2048,
		variableLength: true
	},
	PACKET_CZ_PC_PURCHASE_ITEMLIST_FROMMC2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "UniqueID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "itemList",
				dataType: "struct",
				typeLength: 4,
				structName: "CZ_PURCHASE_ITEM_FROMMC",
				arrayLength: -1,
				properties: [
					{
						name: "count",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "index",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 2
					}
				],
				offset: 0xc
			}
		],
		defaultId: 2049,
		variableLength: true
	},
	PACKET_CZ_PARTY_BOOKING_REQ_REGISTER: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "RegisterInfo",
				dataType: "struct",
				structName: "PARTY_BOOKING_DETAIL",
				typeLength: -1,
				arrayLength: 1,
				properties: [
					{
						name: "Level",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "MapID",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 2
					},
					{
						name: "Job",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 6,
						offset: 4
					}
				],
				offset: 0x2
			}
		],
		defaultId: 2050,
		variableLength: false
	},
	PACKET_ZC_PARTY_BOOKING_ACK_REGISTER: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Result",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 2051,
		variableLength: false
	},
	PACKET_CZ_PARTY_BOOKING_REQ_SEARCH: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Level",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "MapID",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "Job",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "LastIndex",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "ResultCount",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 12
			}
		],
		defaultId: 2052,
		variableLength: false
	},
	PACKET_ZC_PARTY_BOOKING_ACK_SEARCH: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "IsExistMoreResult",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "Info",
				dataType: "struct",
				typeLength: 48,
				structName: "PARTY_BOOKING_AD_INFO",
				arrayLength: -1,
				properties: [
					{
						name: "Index",
						dataType: "Uint32",
						typeLength: 4,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "CharName",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 24,
						offset: 4
					},
					{
						name: "ExpireTime",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 28
					},
					{
						name: "Detail",
						dataType: "struct",
						structName: "PARTY_BOOKING_DETAIL",
						typeLength: -1,
						arrayLength: 1,
						properties: [
							{
								name: "Level",
								dataType: "Int16",
								typeLength: 2,
								arrayLength: 1,
								offset: 0
							},
							{
								name: "MapID",
								dataType: "Int16",
								typeLength: 2,
								arrayLength: 1,
								offset: 2
							},
							{
								name: "Job",
								dataType: "Int16",
								typeLength: 2,
								arrayLength: 6,
								offset: 4
							}
						],
						offset: 0x20
					}
				],
				offset: 0x5
			}
		],
		defaultId: 2053,
		variableLength: true
	},
	PACKET_CZ_PARTY_BOOKING_REQ_DELETE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 2054,
		variableLength: false
	},
	PACKET_ZC_PARTY_BOOKING_ACK_DELETE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Result",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 2055,
		variableLength: false
	},
	PACKET_CZ_PARTY_BOOKING_REQ_UPDATE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Job",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 6,
				offset: 2
			}
		],
		defaultId: 2056,
		variableLength: false
	},
	PACKET_ZC_PARTY_BOOKING_NOTIFY_INSERT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Info",
				dataType: "struct",
				structName: "PARTY_BOOKING_AD_INFO",
				typeLength: -1,
				arrayLength: 1,
				properties: [
					{
						name: "Index",
						dataType: "Uint32",
						typeLength: 4,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "CharName",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 24,
						offset: 4
					},
					{
						name: "ExpireTime",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 28
					},
					{
						name: "Detail",
						dataType: "struct",
						structName: "PARTY_BOOKING_DETAIL",
						typeLength: -1,
						arrayLength: 1,
						properties: [
							{
								name: "Level",
								dataType: "Int16",
								typeLength: 2,
								arrayLength: 1,
								offset: 0
							},
							{
								name: "MapID",
								dataType: "Int16",
								typeLength: 2,
								arrayLength: 1,
								offset: 2
							},
							{
								name: "Job1",
								dataType: "Int16",
								typeLength: 2,
								arrayLength: 1,
								offset: 4
							},
							{
								name: "Job2",
								dataType: "Int16",
								typeLength: 2,
								arrayLength: 1,
								offset: 6
							},
							{
								name: "Job3",
								dataType: "Int16",
								typeLength: 2,
								arrayLength: 1,
								offset: 8
							},
							{
								name: "Job4",
								dataType: "Int16",
								typeLength: 2,
								arrayLength: 1,
								offset: 10
							},
							{
								name: "Job5",
								dataType: "Int16",
								typeLength: 2,
								arrayLength: 1,
								offset: 12
							},
							{
								name: "Job6",
								dataType: "Int16",
								typeLength: 2,
								arrayLength: 1,
								offset: 14
							}
						],
						offset: 0x20
					}
				],
				offset: 0x2
			}
		],
		defaultId: 2057,
		variableLength: false
	},
	PACKET_ZC_PARTY_BOOKING_NOTIFY_UPDATE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Index",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "Job1",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "Job2",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "Job3",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "Job4",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 12
			},
			{
				name: "Job5",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 14
			},
			{
				name: "Job6",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 16
			}
		],
		defaultId: 2058,
		variableLength: false
	},
	PACKET_ZC_PARTY_BOOKING_NOTIFY_DELETE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Index",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 2059,
		variableLength: false
	},
	PACKET_CZ_SIMPLE_CASH_BTNSHOW: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 2060,
		variableLength: false
	},
	PACKET_ZC_SIMPLE_CASH_BTNSHOW: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "show",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 2061,
		variableLength: false
	},
	PACKET_ZC_NOTIFY_HP_TO_GROUPM_R2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "hp",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "maxhp",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 10
			}
		],
		defaultId: 2062,
		variableLength: false
	},
	PACKET_ZC_ADD_EXCHANGE_ITEM2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "ITID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "type",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "count",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 5
			},
			{
				name: "IsIdentified",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 9
			},
			{
				name: "IsDamaged",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "refiningLevel",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 11
			},
			{
				name: "slot",
				dataType: "struct",
				structName: "EQUIPSLOTINFO",
				typeLength: -1,
				arrayLength: 1,
				properties: [
					{
						name: "card1",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "card2",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 2
					},
					{
						name: "card3",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "card4",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 6
					}
				],
				offset: 0xc
			}
		],
		defaultId: 2063,
		variableLength: false
	},
	PACKET_ZC_OPEN_BUYING_STORE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "count",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 2064,
		variableLength: false
	},
	PACKET_CZ_REQ_OPEN_BUYING_STORE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "LimitZeny",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "result",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "storeName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 80,
				offset: 9
			},
			{
				name: "ItemList",
				dataType: "struct",
				typeLength: 8,
				structName: "PRODUCTINFO_IN_BUYING_STORE",
				arrayLength: -1,
				properties: [
					{
						name: "ITID",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "count",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 2
					},
					{
						name: "price",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 4
					}
				],
				offset: 0x59
			}
		],
		defaultId: 2065,
		variableLength: true
	},
	PACKET_ZC_FAILED_OPEN_BUYING_STORE_TO_BUYER: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Result",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "total_weight",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 2066,
		variableLength: false
	},
	PACKET_ZC_MYITEMLIST_BUYING_STORE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "limitZeny",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "ItemList",
				dataType: "struct",
				typeLength: 9,
				structName: "BUYING_STORE_ITEMLIST",
				arrayLength: -1,
				properties: [
					{
						name: "price",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "count",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "type",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 6
					},
					{
						name: "ITID",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 7
					}
				],
				offset: 0xc
			}
		],
		defaultId: 2067,
		variableLength: true
	},
	PACKET_ZC_BUYING_STORE_ENTRY: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "makerAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "storeName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 80,
				offset: 6
			}
		],
		defaultId: 2068,
		variableLength: false
	},
	PACKET_CZ_REQ_CLOSE_BUYING_STORE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 2069,
		variableLength: false
	},
	PACKET_ZC_DISAPPEAR_BUYING_STORE_ENTRY: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "makerAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 2070,
		variableLength: false
	},
	PACKET_CZ_REQ_CLICK_TO_BUYING_STORE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "makerAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 2071,
		variableLength: false
	},
	PACKET_ZC_ACK_ITEMLIST_BUYING_STORE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "makerAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "StoreID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "limitZeny",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 12
			},
			{
				name: "ItemList",
				dataType: "struct",
				typeLength: 9,
				structName: "BUYING_STORE_ITEMLIST",
				arrayLength: -1,
				properties: [
					{
						name: "price",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "count",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "type",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 6
					},
					{
						name: "ITID",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 7
					}
				],
				offset: 0x10
			}
		],
		defaultId: 2072,
		variableLength: true
	},
	PACKET_CZ_REQ_TRADE_BUYING_STORE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "makerAID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "StoreID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "ItemList",
				dataType: "struct",
				typeLength: 6,
				structName: "TRADE_ITEM_BUYING_STORE",
				arrayLength: -1,
				properties: [
					{
						name: "index",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "ITID",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 2
					},
					{
						name: "count",
						dataType: "Int16",
						typeLength: 2,
						arrayLength: 1,
						offset: 4
					}
				],
				offset: 0xc
			}
		],
		defaultId: 2073,
		variableLength: true
	},
	PACKET_ZC_FAILED_TRADE_BUYING_STORE_TO_BUYER: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Result",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 2074,
		variableLength: false
	},
	PACKET_ZC_UPDATE_ITEM_FROM_BUYING_STORE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "ITID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "count",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "limitZeny",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 2075,
		variableLength: false
	},
	PACKET_ZC_ITEM_DELETE_BUYING_STORE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "index",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "count",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "zeny",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 2076,
		variableLength: false
	},
	PACKET_ZC_EL_INIT: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "hp",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "maxHP",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 10
			},
			{
				name: "sp",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 14
			},
			{
				name: "maxSP",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 18
			}
		],
		defaultId: 2077,
		variableLength: false
	},
	PACKET_ZC_EL_PAR_CHANGE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "var",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "value",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 2078,
		variableLength: false
	},
	PACKET_ZC_BROADCAST4: {
		properties: [
			{
				name: "PakcetType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "Msgtype",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "ColorRGB",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 5
			},
			{
				name: "msg",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: -1,
				offset: 9
			}
		],
		defaultId: 2079,
		variableLength: true
	},
	PACKET_ZC_COSTUME_SPRITE_CHANGE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "type",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "value",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 7
			}
		],
		defaultId: 2080,
		variableLength: false
	},
	PACKET_AC_OTP_USER: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 2081,
		variableLength: false
	},
	PACKET_CA_OTP_AUTH_REQ: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "OTPCode",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 7,
				offset: 2
			}
		],
		defaultId: 2082,
		variableLength: false
	},
	PACKET_AC_OTP_AUTH_ACK: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "LoginResult",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 2083,
		variableLength: false
	},
	PACKET_ZC_FAILED_TRADE_BUYING_STORE_TO_SELLER: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Result",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "ITID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 2084,
		variableLength: false
	},
	PACKET_CA_SSO_LOGIN_REQa: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "Version",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "clienttype",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "ID",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 9
			},
			{
				name: "MacAddr",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 17,
				offset: 33
			},
			{
				name: "IpAddr",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 15,
				offset: 50
			},
			{
				name: "t1",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: -1,
				offset: 65
			}
		],
		defaultId: 33370,
		variableLength: true
	},
	PACKET_CA_SSO_LOGIN_REQ: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "Version",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "clienttype",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 8
			},
			{
				name: "ID",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 9
			},
			{
				name: "Passwd",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 27,
				offset: 33
			},
			{
				name: "MacAdress",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 17,
				offset: 60
			},
			{
				name: "IP",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 15,
				offset: 77
			},
			{
				name: "t1",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: -1,
				offset: 92
			}
		],
		defaultId: 2085,
		variableLength: true
	},
	PACKET_AC_SSO_LOGIN_ACK: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Result",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 2086,
		variableLength: false
	},
	PACKET_CH_DELETE_CHAR3_RESERVED: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 2087,
		variableLength: false
	},
	PACKET_HC_DELETE_CHAR3_RESERVED: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "Result",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "DeleteReservedDate",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 10
			}
		],
		defaultId: 2088,
		variableLength: false
	},
	PACKET_CH_DELETE_CHAR3: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "Birth",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 6,
				offset: 6
			}
		],
		defaultId: 2089,
		variableLength: false
	},
	PACKET_HC_DELETE_CHAR3: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "Result",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 2090,
		variableLength: false
	},
	PACKET_CH_DELETE_CHAR3_CANCEL: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 2091,
		variableLength: false
	},
	PACKET_HC_DELETE_CHAR3_CANCEL: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "GID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "Result",
				dataType: "Int32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			}
		],
		defaultId: 2092,
		variableLength: false
	},
	PACKET_CZ_SEARCH_STORE_INFO: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "StoreType",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "maxPrice",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 5
			},
			{
				name: "minPrice",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 9
			},
			{
				name: "ItemIDListSize",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 13
			},
			{
				name: "CardIDListSize",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 14
			}
		],
		defaultId: 2101,
		variableLength: false
	},
	PACKET_ZC_SEARCH_STORE_INFO_ACK: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "PacketLength",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "IsFirstPage",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 4
			},
			{
				name: "IsNexPage",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 5
			},
			{
				name: "RemainedSearchCnt",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "SSI_List",
				dataType: "struct",
				typeLength: 106,
				structName: "ResultItemInfo",
				arrayLength: -1,
				properties: [
					{
						name: "SSI_ID",
						dataType: "Uint32",
						typeLength: 4,
						arrayLength: 1,
						offset: 0
					},
					{
						name: "AID",
						dataType: "Uint32",
						typeLength: 4,
						arrayLength: 1,
						offset: 4
					},
					{
						name: "StoreName",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 80,
						offset: 8
					},
					{
						name: "ITID",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 88
					},
					{
						name: "ItemType",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 90
					},
					{
						name: "price",
						dataType: "Int32",
						typeLength: 4,
						arrayLength: 1,
						offset: 91
					},
					{
						name: "count",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 95
					},
					{
						name: "refiningLevel",
						dataType: "Uint8",
						typeLength: 1,
						arrayLength: 1,
						offset: 97
					},
					{
						name: "card1",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 98
					},
					{
						name: "card2",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 100
					},
					{
						name: "card3",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 102
					},
					{
						name: "card4",
						dataType: "Uint16",
						typeLength: 2,
						arrayLength: 1,
						offset: 104
					}
				],
				offset: 0x7
			}
		],
		defaultId: 2102,
		variableLength: true
	},
	PACKET_ZC_SEARCH_STORE_INFO_FAILED: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "Reason",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			}
		],
		defaultId: 2103,
		variableLength: false
	},
	PACKET_CZ_SEARCH_STORE_INFO_NEXT_PAGE: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 2104,
		variableLength: false
	},
	PACKET_ZC_ACK_BAN_GUILD_SSO: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "charName",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 24,
				offset: 2
			},
			{
				name: "reasonDesc",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 40,
				offset: 26
			}
		],
		defaultId: 2105,
		variableLength: false
	},
	PACKET_ZC_OPEN_SEARCH_STORE_INFO: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "OpenType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "SearchCntMax",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 2106,
		variableLength: false
	},
	PACKET_CZ_CLOSE_SEARCH_STORE_INFO: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			}
		],
		defaultId: 2107,
		variableLength: false
	},
	PACKET_CZ_SSILIST_ITEM_CLICK: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "AID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "SSI_ID",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 6
			},
			{
				name: "ITID",
				dataType: "Uint16",
				typeLength: 2,
				arrayLength: 1,
				offset: 10
			}
		],
		defaultId: 2108,
		variableLength: false
	},
	PACKET_ZC_SSILIST_ITEM_CLICK_ACK: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "x",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "y",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 4
			}
		],
		defaultId: 2109,
		variableLength: false
	},
	PACKET_AC_REFUSE_LOGIN_R2: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "ErrorCode",
				dataType: "Uint32",
				typeLength: 4,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "blockDate",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 20,
				offset: 6
			}
		],
		defaultId: 2110,
		variableLength: false
	},
	PACKET_CH_SELECT_ACCESSIBLE_MAPNAME: {
		properties: [
			{
				name: "PacketType",
				dataType: "Int16",
				typeLength: 2,
				arrayLength: 1,
				offset: 0
			},
			{
				name: "CharNum",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 2
			},
			{
				name: "mapListNum",
				dataType: "Uint8",
				typeLength: 1,
				arrayLength: 1,
				offset: 3
			}
		],
		defaultId: 2113,
		variableLength: false
	}
};



PacketStructureDefinition.PACKET_ZC_NOTIFY_STANDENTRY6 = {
	properties: [
		{
			name: "PacketType",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 0
		},
		{
			name: "PacketLength",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 2
		},
		{
			name: "objecttype",
			dataType: "Uint8",
			typeLength: 1,
			arrayLength: 1,
			offset: 4
		},
		{
			name: "GID",
			dataType: "Uint32",
			typeLength: 4,
			arrayLength: 1,
			offset: 5
		},
		{
			name: "speed",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 9
		},
		{
			name: "bodyState",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 11
		},
		{
			name: "healthState",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 13
		},
		{
			name: "effectState",
			dataType: "Int16",
			typeLength: 4,
			arrayLength: 1,
			offset: 15
		},
		{
			name: "job",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 19
		},
		{
			name: "head",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 21
		},
		{
			name: "weapon",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 23
		},
		{
			name: "shield",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 27
		},
		// offsets are wrong from here. doesn't matter for reading
		{
			name: "accessory",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 27
		},
		{
			name: "accessory2",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 29
		},
		{
			name: "accessory3",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 31
		},
		{
			name: "headpalette",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 33
		},
		{
			name: "bodypalette",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 35
		},
		{
			name: "headDir",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 37
		},
		{
			name: "robe",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 0
		},
		{
			name: "GUID",
			dataType: "Uint32",
			typeLength: 4,
			arrayLength: 1,
			offset: 39
		},
		{
			name: "GEmblemVer",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 43
		},
		{
			name: "honor",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 45
		},
		{
			name: "isPKModeON",
			dataType: "Int16",
			typeLength: 1,
			arrayLength: 1,
			offset: 47
		},
		{
			name: "virtue",
			dataType: "Int32",
			typeLength: 4,
			arrayLength: 1,
			offset: 47
		},
		{
			name: "sex",
			dataType: "Uint8",
			typeLength: 1,
			arrayLength: 1,
			offset: 52
		},
		{
			name: "PosDir",
			dataType: "Uint8",
			typeLength: 1,
			arrayLength: 3,
			offset: 53
		},
		{
			name: "xSize",
			dataType: "Uint8",
			typeLength: 1,
			arrayLength: 1,
			offset: 56
		},
		{
			name: "ySize",
			dataType: "Uint8",
			typeLength: 1,
			arrayLength: 1,
			offset: 57
		},
		{
			name: "state",
			dataType: "Uint8",
			typeLength: 1,
			arrayLength: 1,
			offset: 58
		},
		{
			name: "clevel",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 59
		},
		{
			name: "font",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 61
		},
		{
			name: "name",
			dataType: "Uint8",
			typeLength: 1,
			arrayLength: -1,
			offset: 63
		}
	],
	defaultId: 0x857,
	variableLength: false
};



PacketStructureDefinition.PACKET_ZC_NOTIFY_NEWENTRY6 = {
	defaultId: 0x858,
	properties: [
		{
			name: "PacketType",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 0
		},
		{
			name: "PacketLength",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 2
		},
		{
			name: "objecttype",
			dataType: "Uint8",
			typeLength: 1,
			arrayLength: 1,
			offset: 4
		},
		{
			name: "GID",
			dataType: "Uint32",
			typeLength: 4,
			arrayLength: 1,
			offset: 5
		},
		{
			name: "speed",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 9
		},
		{
			name: "bodyState",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 11
		},
		{
			name: "healthState",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 13
		},
		{
			name: "effectState",
			dataType: "Int16",
			typeLength: 4,
			arrayLength: 1,
			offset: 15
		},
		{
			name: "job",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 19
		},
		{
			name: "head",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 21
		},
		{
			name: "weapon",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 23
		},
		{
			name: "shield",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 27
		},
		// offsets are wrong from here. doesn't matter for reading
		{
			name: "accessory",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 27
		},
		{
			name: "accessory2",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 29
		},
		{
			name: "accessory3",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 31
		},
		{
			name: "headpalette",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 33
		},
		{
			name: "bodypalette",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 35
		},
		{
			name: "headDir",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 37
		},
		{
			name: "robe",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 0
		},
		{
			name: "GUID",
			dataType: "Uint32",
			typeLength: 4,
			arrayLength: 1,
			offset: 39
		},
		{
			name: "GEmblemVer",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 43
		},
		{
			name: "honor",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 45
		},
		{
			name: "isPKModeON",
			dataType: "Int16",
			typeLength: 1,
			arrayLength: 1,
			offset: 47
		},
		{
			name: "virtue",
			dataType: "Int32",
			typeLength: 4,
			arrayLength: 1,
			offset: 47
		},
		{
			name: "sex",
			dataType: "Uint8",
			typeLength: 1,
			arrayLength: 1,
			offset: 52
		},
		{
			name: "PosDir",
			dataType: "Uint8",
			typeLength: 1,
			arrayLength: 3,
			offset: 53
		},
		{
			name: "xSize",
			dataType: "Uint8",
			typeLength: 1,
			arrayLength: 1,
			offset: 56
		},
		{
			name: "ySize",
			dataType: "Uint8",
			typeLength: 1,
			arrayLength: 1,
			offset: 57
		},
		//{
		//	name: "state",
		//	dataType: "Uint8",
		//	typeLength: 1,
		//	arrayLength: 1,
		//	offset: 58
		//},
		{
			name: "clevel",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 59
		},
		{
			name: "font",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 61
		},
		{
			name: "name",
			dataType: "Uint8",
			typeLength: 1,
			arrayLength: -1,
			offset: 63
		}
	],
	variableLength: true
};


PacketStructureDefinition.PACKET_ZC_NOTIFY_MOVEENTRY8 = {
	defaultId: 0x856,
	properties: [
		{
			name: "PacketType",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 0
		},
		{
			name: "PacketLength",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 2
		},
		{
			name: "objecttype",
			dataType: "Uint8",
			typeLength: 1,
			arrayLength: 1,
			offset: 4
		},
		{
			name: "GID",
			dataType: "Uint32",
			typeLength: 4,
			arrayLength: 1,
			offset: 5
		},
		{
			name: "speed",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 9
		},
		{
			name: "bodyState",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 11
		},
		{
			name: "healthState",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 13
		},
		{
			name: "effectState",
			dataType: "Int16",
			typeLength: 4,
			arrayLength: 1,
			offset: 15
		},
		{
			name: "job",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 19
		},
		{
			name: "head",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 21
		},
		{
			name: "weapon",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 23
		},
		{
			name: "shield",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 27
		},
		// offsets are wrong from here. doesn't matter for reading
		{
			name: "accessory",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 27
		},
		{
			name: "moveStartTime",
			dataType: "Uint32",
			typeLength: 4,
			arrayLength: 1,
			offset: 22
		},
		{
			name: "accessory2",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 29
		},
		{
			name: "accessory3",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 31
		},
		{
			name: "headpalette",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 33
		},
		{
			name: "bodypalette",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 35
		},
		{
			name: "headDir",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 37
		},
		{
			name: "robe",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 0
		},
		{
			name: "GUID",
			dataType: "Uint32",
			typeLength: 4,
			arrayLength: 1,
			offset: 39
		},
		{
			name: "GEmblemVer",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 43
		},
		{
			name: "honor",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 45
		},
		{
			name: "isPKModeON",
			dataType: "Int16",
			typeLength: 1,
			arrayLength: 1,
			offset: 47
		},
		{
			name: "virtue",
			dataType: "Int32",
			typeLength: 4,
			arrayLength: 1,
			offset: 47
		},
		{
			name: "sex",
			dataType: "Uint8",
			typeLength: 1,
			arrayLength: 1,
			offset: 52
		},
		{
			name: "MoveData",
			dataType: "Uint8",
			typeLength: 1,
			arrayLength: 6,
			offset: 50
		},
		{
			name: "xSize",
			dataType: "Uint8",
			typeLength: 1,
			arrayLength: 1,
			offset: 56
		},
		{
			name: "ySize",
			dataType: "Uint8",
			typeLength: 1,
			arrayLength: 1,
			offset: 57
		},
		{
			name: "clevel",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 59
		},
		{
			name: "font",
			dataType: "Int16",
			typeLength: 2,
			arrayLength: 1,
			offset: 61
		},
		{
			name: "name",
			dataType: "Uint8",
			typeLength: 1,
			arrayLength: -1,
			offset: 63
		}
	],
	variableLength: true
};