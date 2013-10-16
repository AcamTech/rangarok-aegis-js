var Weapon_IDs = {

	WEAPONTYPE_NONE: 0,
	WEAPONTYPE_SHORTSWORD: 1,
	WEAPONTYPE_SWORD: 2,
	WEAPONTYPE_TWOHANDSWORD: 3,
	WEAPONTYPE_SPEAR: 4,
	WEAPONTYPE_TWOHANDSPEAR: 5,
	WEAPONTYPE_AXE: 6,
	WEAPONTYPE_TWOHANDAXE: 7,
	WEAPONTYPE_MACE: 8,
	WEAPONTYPE_TWOHANDMACE: 9,
	WEAPONTYPE_ROD: 10,
	WEAPONTYPE_BOW: 11,
	WEAPONTYPE_KNUKLE: 12,
	WEAPONTYPE_INSTRUMENT: 13,
	WEAPONTYPE_WHIP: 14,
	WEAPONTYPE_BOOK: 15,
	WEAPONTYPE_CATARRH: 16,
	WPCLASS_GUN_HANDGUN: 17,
	WPCLASS_GUN_RIFLE: 18,
	WPCLASS_GUN_GATLING: 19,
	WPCLASS_GUN_SHOTGUN: 20,
	WPCLASS_GUN_GRANADE: 21,
	WPCLASS_SYURIKEN: 22,
	WPCLASS_TWOHANDROD: 23,
	WPCLASS_LAST: 24,
	WEAPONTYPE_SHORTSWORD_SHORTSWORD: 25,
	WEAPONTYPE_SWORD_SWORD: 26,
	WEAPONTYPE_AXE_AXE: 27,
	WEAPONTYPE_SHORTSWORD_SWORD: 28,
	WEAPONTYPE_SHORTSWORD_AXE: 29,
	WEAPONTYPE_SWORD_AXE: 30
}

var WeaponNameTable = {};

WeaponNameTable[Weapon_IDs.WEAPONTYPE_NONE] = "";
WeaponNameTable[Weapon_IDs.WEAPONTYPE_SHORTSWORD] = "_´Ü°Ë";
WeaponNameTable[Weapon_IDs.WEAPONTYPE_SWORD] = "_°Ë";
WeaponNameTable[Weapon_IDs.WEAPONTYPE_TWOHANDSWORD] = "_°Ë";
WeaponNameTable[Weapon_IDs.WEAPONTYPE_SPEAR] = "_Ã¢";
WeaponNameTable[Weapon_IDs.WEAPONTYPE_TWOHANDSPEAR] = "_Ã¢";
WeaponNameTable[Weapon_IDs.WEAPONTYPE_AXE] = "_µµ³¢";
WeaponNameTable[Weapon_IDs.WEAPONTYPE_TWOHANDAXE] = "_µµ³¢";
WeaponNameTable[Weapon_IDs.WEAPONTYPE_MACE] = "_Å¬·´";
WeaponNameTable[Weapon_IDs.WEAPONTYPE_TWOHANDMACE] = "_Å¬·´";
WeaponNameTable[Weapon_IDs.WEAPONTYPE_ROD] = "_·Ôµå";
WeaponNameTable[Weapon_IDs.WEAPONTYPE_BOW] = "_È°";
WeaponNameTable[Weapon_IDs.WEAPONTYPE_KNUKLE] = "_³ÊÅ¬";
WeaponNameTable[Weapon_IDs.WEAPONTYPE_INSTRUMENT] = "_¾Ç±â";
WeaponNameTable[Weapon_IDs.WEAPONTYPE_WHIP] = "_Ã¤Âï";
WeaponNameTable[Weapon_IDs.WEAPONTYPE_BOOK] = "_Ã¥";
WeaponNameTable[Weapon_IDs.WEAPONTYPE_CATARRH] = "_Ä«Å¸¸£_Ä«Å¸¸£";
WeaponNameTable[Weapon_IDs.WPCLASS_GUN_HANDGUN] = "_±ÇÃÑ";
WeaponNameTable[Weapon_IDs.WPCLASS_GUN_RIFLE] = "_±â°üÃÑ";
WeaponNameTable[Weapon_IDs.WPCLASS_GUN_GATLING] = "_±â°üÃÑ";
WeaponNameTable[Weapon_IDs.WPCLASS_GUN_SHOTGUN] = "_±â°üÃÑ";
WeaponNameTable[Weapon_IDs.WPCLASS_GUN_GRANADE] = "_±â°üÃÑ";
WeaponNameTable[Weapon_IDs.WPCLASS_SYURIKEN] = "_¼ö¸®°Ë";
WeaponNameTable[Weapon_IDs.WPCLASS_TWOHANDROD] = "_·Ôµå";
WeaponNameTable[Weapon_IDs.WEAPONTYPE_SHORTSWORD_SHORTSWORD] = "_´Ü°Ë_´Ü°Ë";
WeaponNameTable[Weapon_IDs.WEAPONTYPE_SWORD_SWORD] = "_°Ë_°Ë";
WeaponNameTable[Weapon_IDs.WEAPONTYPE_AXE_AXE] = "_µµ³¢_µµ³¢";
WeaponNameTable[Weapon_IDs.WEAPONTYPE_SHORTSWORD_SWORD] = "_´Ü°Ë_°Ë";
WeaponNameTable[Weapon_IDs.WEAPONTYPE_SHORTSWORD_AXE] = "_´Ü°Ë_µµ³¢";
WeaponNameTable[Weapon_IDs.WEAPONTYPE_SWORD_AXE] = "_°Ë_µµ³¢";

//WeaponHitWaveNameTable = {

//	[Weapon_IDs.WEAPONTYPE_NONE] = "_hit_mace.wav",
//	[Weapon_IDs.WEAPONTYPE_SHORTSWORD] = "_hit_sword.wav",
//	[Weapon_IDs.WEAPONTYPE_SWORD] = "_hit_sword.wav",
//	[Weapon_IDs.WEAPONTYPE_TWOHANDSWORD] = "_hit_sword.wav",
//	[Weapon_IDs.WEAPONTYPE_SPEAR] = "_hit_spear.wav",
//	[Weapon_IDs.WEAPONTYPE_TWOHANDSPEAR] = "_hit_spear.wav",
//	[Weapon_IDs.WEAPONTYPE_AXE] = "_hit_axe.wav",
//	[Weapon_IDs.WEAPONTYPE_TWOHANDAXE] = "_hit_axe.wav",
//	[Weapon_IDs.WEAPONTYPE_MACE] = "_hit_mace.wav",
//	[Weapon_IDs.WEAPONTYPE_TWOHANDMACE] = "_hit_mace.wav",
//	[Weapon_IDs.WEAPONTYPE_ROD] = "_hit_rod.wav",
//	[Weapon_IDs.WEAPONTYPE_BOW] = "_hit_arrow.wav",
//	[Weapon_IDs.WEAPONTYPE_KNUKLE] = "_hit_mace.wav",
//	[Weapon_IDs.WEAPONTYPE_INSTRUMENT] = "_hit_mace.wav",
//	[Weapon_IDs.WEAPONTYPE_WHIP] = "_hit_mace.wav",
//	[Weapon_IDs.WEAPONTYPE_BOOK] = "_hit_mace.wav",
//	[Weapon_IDs.WEAPONTYPE_CATARRH] = "_hit_mace.wav",
//	[Weapon_IDs.WPCLASS_GUN_HANDGUN] = "_hit_±ÇÃÑ.wav",
//	[Weapon_IDs.WPCLASS_GUN_RIFLE] = "_hit_¶óÀÌÇÃ.wav",
//	[Weapon_IDs.WPCLASS_GUN_GATLING] = "_hit_mace.wav",
//	[Weapon_IDs.WPCLASS_GUN_SHOTGUN] = "_hit_mace.wav",
//	[Weapon_IDs.WPCLASS_GUN_GRANADE] = "_hit_mace.wav",
//	[Weapon_IDs.WPCLASS_SYURIKEN] = "_hit_mace.wav",
//	[Weapon_IDs.WPCLASS_TWOHANDROD] = "_hit_rod.wav",
//	[Weapon_IDs.WEAPONTYPE_SHORTSWORD_SHORTSWORD] = "_hit_mace.wav",
//	[Weapon_IDs.WEAPONTYPE_SWORD_SWORD] = "_hit_mace.wav",
//	[Weapon_IDs.WEAPONTYPE_AXE_AXE] = "_hit_mace.wav",
//	[Weapon_IDs.WEAPONTYPE_SHORTSWORD_SWORD] = "_hit_mace.wav",
//	[Weapon_IDs.WEAPONTYPE_SHORTSWORD_AXE] = "_hit_mace.wav",
//	[Weapon_IDs.WEAPONTYPE_SWORD_AXE] = "_hit_mace.wav"
//}
