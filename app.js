const BOARD_SIZE = 29;
const MAX_FILE_SIZE = 20 * 1024 * 1024;
const HISTORY_LIMIT = 30;
const MAX_PATTERN_SIZE = 500;
const MIN_PATTERN_ZOOM = 0.5;
const MAX_PATTERN_ZOOM = 6;

const I18N = {
  zh: {
    appTitle: "拼豆图纸工坊",
    appSubtitle: "本地生成可实际摆放的拼豆图纸",
    simpleVersion: "简易版",
    detailVersion: "详细版",
    simpleHeroTitle: "拼豆图纸生成器",
    simpleHeroSubtitle: "上传图片，快速生成可实际摆放的拼豆图案",
    language: "语言",
    pdfPrint: "PDF / 1:1",
    uploadTitle: "上传图片",
    uploadMeta: "常见图片格式，最大 20MB",
    beadTotal: "总珠数",
    colorTotal: "颜色数",
    boardTotal: "拼板",
    physicalSize: "成品尺寸",
    originalImage: "原图",
    emptyOriginal: "等待图片",
    patternPreview: "拼豆图纸",
    emptyPattern: "生成后显示图纸",
    hoverEmpty: "悬停查看珠位",
    activePalette: "当前色板",
    replaceColor: "颜色替换",
    fromColor: "原颜色",
    toColor: "替换为",
    replace: "替换",
    materials: "材料清单",
    color: "颜色",
    brand: "品牌",
    code: "色号",
    needed: "需要",
    owned: "库存",
    missing: "缺口",
    packs: "1000颗包",
    alternatives: "替代色",
    emptyMaterials: "生成图纸后显示材料清单",
    settings: "生成设置",
    beadSize: "拼豆规格",
    paletteBrand: "品牌色板",
    domesticPalette: "国产常用",
    mode: "生成模式",
    modeIcon: "简洁图标",
    modePortrait: "肖像模式",
    modeRealistic: "真实还原",
    cropMode: "裁剪方式",
    cropCover: "裁剪填满",
    cropContain: "完整填充",
    cropStretch: "拉伸到尺寸",
    sizeTitle: "尺寸",
    widthBeads: "宽度 / 颗",
    heightBeads: "高度 / 颗",
    colorRules: "颜色规则",
    maxColors: "最大颜色数",
    detailLevel: "细节增强",
    detailStandard: "标准",
    detailHigh: "高清",
    detailMax: "尽量保留细节",
    dither: "抖动渐变",
    excludeSpecial: "排除特殊材质色",
    transparentMode: "透明区域",
    transparentEmpty: "空珠位",
    transparentWhite: "填白色",
    transparentBlack: "填黑色",
    previewTitle: "预览",
    previewStyle: "显示样式",
    previewSquare: "方格",
    previewBead: "圆珠",
    previewHollow: "中空圆珠",
    showGrid: "显示网格",
    fitCanvas: "适配屏幕",
    actions: "操作",
    generate: "生成图纸",
    resetInventory: "清空库存输入",
    noImage: "请先上传图片",
    generated: "图纸已生成",
    fileTooLarge: "文件超过 20MB",
    fileUnsupported: "这个文件不是可读取的图片",
    imageDecodeFailed: "图片无法读取，请尝试另存为 JPG、PNG 或 WEBP 后再上传",
    loadingImage: "正在读取图片...",
    cropHint: "原图会完整显示；拖动框选区域生成，可自定义宽高",
    resetCrop: "重置框选",
    cropSize: "框选区域",
    imageLoaded: "图片已读取",
    exportReady: "已导出",
    noPattern: "请先生成图纸",
    restored: "图纸已恢复到生成结果",
    restorePattern: "恢复图纸",
    inventoryCleared: "库存已清空",
    replaced: "颜色已替换",
    nothingToReplace: "没有可替换的珠位",
    emptyCell: "空珠位",
    row: "行",
    col: "列",
    board: "拼板",
    beads: "颗",
    colors: "色",
    boards: "张",
    totalMissing: "总缺口",
    totalPacks: "需补购包数",
    printTitle: "1:1 拼豆打印图纸",
    cover: "封面",
    size: "尺寸",
    beadSpec: "规格",
    boardRange: "拼板范围",
    materialSheet: "材料清单",
    printHint: "打印时请选择 100% / 实际大小",
    transparent: "透明",
    glow: "夜光",
    pearl: "珠光",
    neon: "荧光",
    solid: "普通",
    none: "无",
  },
  en: {
    appTitle: "Bead Pattern Studio",
    appSubtitle: "Generate real buildable fuse bead patterns locally",
    simpleVersion: "Simple",
    detailVersion: "Detailed",
    simpleHeroTitle: "Bead Pattern Generator",
    simpleHeroSubtitle: "Upload an image and quickly generate a buildable bead pattern",
    language: "Language",
    pdfPrint: "PDF / 1:1",
    uploadTitle: "Upload image",
    uploadMeta: "Common image formats, up to 20MB",
    beadTotal: "Beads",
    colorTotal: "Colors",
    boardTotal: "Boards",
    physicalSize: "Finished size",
    originalImage: "Original",
    emptyOriginal: "Waiting for image",
    patternPreview: "Bead pattern",
    emptyPattern: "Pattern appears after generation",
    hoverEmpty: "Hover a bead cell",
    activePalette: "Active palette",
    replaceColor: "Replace color",
    fromColor: "From",
    toColor: "To",
    replace: "Replace",
    materials: "Materials",
    color: "Color",
    brand: "Brand",
    code: "Code",
    needed: "Needed",
    owned: "Owned",
    missing: "Missing",
    packs: "1000 bead packs",
    alternatives: "Alternatives",
    emptyMaterials: "Materials appear after generation",
    settings: "Settings",
    beadSize: "Bead size",
    paletteBrand: "Palette",
    domesticPalette: "Common China",
    mode: "Mode",
    modeIcon: "Clean icon",
    modePortrait: "Portrait",
    modeRealistic: "Realistic",
    cropMode: "Crop",
    cropCover: "Crop to fill",
    cropContain: "Fit with padding",
    cropStretch: "Stretch",
    sizeTitle: "Size",
    widthBeads: "Width / beads",
    heightBeads: "Height / beads",
    colorRules: "Color rules",
    maxColors: "Max colors",
    detailLevel: "Detail boost",
    detailStandard: "Standard",
    detailHigh: "High detail",
    detailMax: "Maximum detail",
    dither: "Dither gradients",
    excludeSpecial: "Exclude special finishes",
    transparentMode: "Transparent area",
    transparentEmpty: "Empty cells",
    transparentWhite: "Fill white",
    transparentBlack: "Fill black",
    previewTitle: "Preview",
    previewStyle: "Style",
    previewSquare: "Squares",
    previewBead: "Round beads",
    previewHollow: "Hollow beads",
    showGrid: "Show grid",
    fitCanvas: "Fit screen",
    actions: "Actions",
    generate: "Generate pattern",
    resetInventory: "Clear inventory",
    noImage: "Upload an image first",
    generated: "Pattern generated",
    fileTooLarge: "File is larger than 20MB",
    fileUnsupported: "This file is not a readable image",
    imageDecodeFailed: "The image could not be read. Try saving it as JPG, PNG, or WEBP.",
    loadingImage: "Reading image...",
    cropHint: "The full image stays visible; drag the crop box and use custom width/height",
    resetCrop: "Reset crop",
    cropSize: "Crop area",
    imageLoaded: "Image loaded",
    exportReady: "Exported",
    noPattern: "Generate a pattern first",
    restored: "Pattern restored to generated result",
    restorePattern: "Restore pattern",
    inventoryCleared: "Inventory cleared",
    replaced: "Color replaced",
    nothingToReplace: "No matching bead cells",
    emptyCell: "Empty cell",
    row: "Row",
    col: "Column",
    board: "Board",
    beads: "beads",
    colors: "colors",
    boards: "boards",
    totalMissing: "Missing",
    totalPacks: "Packs to buy",
    printTitle: "1:1 Fuse Bead Print Pattern",
    cover: "Cover",
    size: "Size",
    beadSpec: "Bead spec",
    boardRange: "Board range",
    materialSheet: "Materials",
    printHint: "Print at 100% / Actual size",
    transparent: "transparent",
    glow: "glow",
    pearl: "pearl",
    neon: "neon",
    solid: "solid",
    none: "None",
  },
};

const BRAND_LABELS = {
  china: { zh: "国产常用", en: "Common China" },
  perler: { zh: "Perler", en: "Perler" },
  hama: { zh: "Hama", en: "Hama" },
  artkal: { zh: "Artkal", en: "Artkal" },
};

const PALETTES = {
  china: [
    color("china", "CN-01", "瓷白", "Porcelain White", "#f7f4ea"),
    color("china", "CN-02", "奶白", "Warm White", "#fff2d7"),
    color("china", "CN-03", "浅灰", "Light Grey", "#cfd2d0"),
    color("china", "CN-04", "中灰", "Medium Grey", "#8c9290"),
    color("china", "CN-05", "炭黑", "Charcoal Black", "#1e2021"),
    color("china", "CN-06", "米黄", "Cream Yellow", "#f7dc8a"),
    color("china", "CN-07", "柠檬黄", "Lemon Yellow", "#ffd338"),
    color("china", "CN-08", "鹅黄", "Duckling Yellow", "#f6b642"),
    color("china", "CN-09", "橙黄", "Golden Orange", "#ef8b2c"),
    color("china", "CN-10", "橙红", "Orange Red", "#e75e31"),
    color("china", "CN-11", "正红", "Red", "#d83437"),
    color("china", "CN-12", "酒红", "Wine Red", "#8f2434"),
    color("china", "CN-13", "粉红", "Pink", "#f6a5b8"),
    color("china", "CN-14", "浅粉", "Soft Pink", "#ffd1d9"),
    color("china", "CN-15", "玫红", "Rose", "#d93878"),
    color("china", "CN-16", "桃红", "Coral Pink", "#f17383"),
    color("china", "CN-17", "浅肤", "Light Skin", "#f5c9a6"),
    color("china", "CN-18", "肤色", "Skin", "#dea178"),
    color("china", "CN-19", "深肤", "Deep Skin", "#a46a47"),
    color("china", "CN-20", "棕色", "Brown", "#78422f"),
    color("china", "CN-21", "咖啡", "Coffee", "#4a2b23"),
    color("china", "CN-22", "浅绿", "Light Green", "#a7d86e"),
    color("china", "CN-23", "草绿", "Grass Green", "#54ad4f"),
    color("china", "CN-24", "翠绿", "Emerald", "#159b72"),
    color("china", "CN-25", "墨绿", "Deep Green", "#1f5b46"),
    color("china", "CN-26", "薄荷", "Mint", "#a6dfcf"),
    color("china", "CN-27", "青色", "Cyan", "#2db9bd"),
    color("china", "CN-28", "天蓝", "Sky Blue", "#72b9e7"),
    color("china", "CN-29", "湖蓝", "Lake Blue", "#2685c7"),
    color("china", "CN-30", "宝蓝", "Royal Blue", "#274f9f"),
    color("china", "CN-31", "藏蓝", "Navy", "#1f2d5f"),
    color("china", "CN-32", "淡紫", "Lavender", "#c7a9dd"),
    color("china", "CN-33", "紫色", "Purple", "#8053a9"),
    color("china", "CN-34", "深紫", "Deep Purple", "#4d347d"),
    color("china", "CN-35", "金黄", "Gold", "#d39b2d"),
    color("china", "CN-36", "土黄", "Ochre", "#b77d34"),
    color("china", "CN-37", "砖红", "Brick Red", "#9d3d2e"),
    color("china", "CN-38", "浅棕", "Tan", "#bf8b5a"),
    color("china", "CN-39", "透明白", "Clear White", "#eff8ff", "transparent"),
    color("china", "CN-40", "夜光绿", "Glow Green", "#d8f2a1", "glow"),
    color("china", "CN-41", "荧光黄", "Neon Yellow", "#dfff36", "neon"),
    color("china", "CN-42", "荧光粉", "Neon Pink", "#ff4aa0", "neon"),
    color("china", "CN-43", "珠光白", "Pearl White", "#f8f2e9", "pearl"),
    color("china", "CN-44", "珠光蓝", "Pearl Blue", "#8faedb", "pearl"),
  ],
  perler: [
    color("perler", "P-01", "白色", "White", "#f5f2e8"),
    color("perler", "P-02", "奶油", "Creme", "#f6e6c1"),
    color("perler", "P-03", "黄", "Yellow", "#ffd333"),
    color("perler", "P-04", "蜂蜜", "Cheddar", "#f29a2e"),
    color("perler", "P-05", "橙", "Orange", "#e86a2a"),
    color("perler", "P-06", "红", "Red", "#c9363b"),
    color("perler", "P-07", "深红", "Cranapple", "#8d2635"),
    color("perler", "P-08", "浅粉", "Light Pink", "#f9b4c2"),
    color("perler", "P-09", "泡泡糖", "Bubblegum", "#ef6f96"),
    color("perler", "P-10", "洋红", "Magenta", "#c63a81"),
    color("perler", "P-11", "蜜桃", "Peach", "#f2b486"),
    color("perler", "P-12", "肤色", "Tan", "#d99f73"),
    color("perler", "P-13", "棕", "Brown", "#744631"),
    color("perler", "P-14", "深棕", "Dark Brown", "#4a2f28"),
    color("perler", "P-15", "浅绿", "Kiwi Lime", "#a6d85f"),
    color("perler", "P-16", "亮绿", "Bright Green", "#4cac52"),
    color("perler", "P-17", "青绿", "Teal", "#238d85"),
    color("perler", "P-18", "深绿", "Dark Green", "#236244"),
    color("perler", "P-19", "浅蓝", "Light Blue", "#83bee5"),
    color("perler", "P-20", "蓝", "Blue", "#386aae"),
    color("perler", "P-21", "深蓝", "Dark Blue", "#243d7c"),
    color("perler", "P-22", "海军蓝", "Navy", "#1e2f54"),
    color("perler", "P-23", "淡紫", "Pastel Lavender", "#c6a9dd"),
    color("perler", "P-24", "紫", "Purple", "#6f4a9e"),
    color("perler", "P-25", "浅灰", "Light Grey", "#c9ccca"),
    color("perler", "P-26", "灰", "Grey", "#8a8d8b"),
    color("perler", "P-27", "黑", "Black", "#202124"),
    color("perler", "P-28", "金", "Gold", "#d69d30"),
    color("perler", "P-29", "银", "Silver", "#bfc2c1", "pearl"),
    color("perler", "P-30", "透明", "Clear", "#eef7fb", "transparent"),
    color("perler", "P-31", "夜光", "Glow", "#dff0b7", "glow"),
    color("perler", "P-32", "荧光橙", "Neon Orange", "#ff7028", "neon"),
  ],
  hama: [
    color("hama", "H-01", "白", "White", "#f7f5ec"),
    color("hama", "H-02", "奶白", "Cream", "#f2dfbd"),
    color("hama", "H-03", "黄", "Yellow", "#ffd32f"),
    color("hama", "H-04", "橙", "Orange", "#e9712d"),
    color("hama", "H-05", "红", "Red", "#c72d34"),
    color("hama", "H-06", "酒红", "Burgundy", "#822334"),
    color("hama", "H-07", "浅粉", "Light Pink", "#f6b8c8"),
    color("hama", "H-08", "粉", "Pink", "#ee7098"),
    color("hama", "H-09", "紫红", "Claret", "#b53d79"),
    color("hama", "H-10", "肤色", "Skin", "#e4aa80"),
    color("hama", "H-11", "棕", "Brown", "#784a34"),
    color("hama", "H-12", "深棕", "Dark Brown", "#442b24"),
    color("hama", "H-13", "浅绿", "Pastel Green", "#acd872"),
    color("hama", "H-14", "绿", "Green", "#4cae52"),
    color("hama", "H-15", "青绿", "Turquoise", "#20a2a0"),
    color("hama", "H-16", "深绿", "Dark Green", "#255b42"),
    color("hama", "H-17", "浅蓝", "Pastel Blue", "#8fc7e8"),
    color("hama", "H-18", "蓝", "Blue", "#3766a9"),
    color("hama", "H-19", "深蓝", "Dark Blue", "#283b73"),
    color("hama", "H-20", "淡紫", "Pastel Purple", "#c4aad9"),
    color("hama", "H-21", "紫", "Purple", "#7450a4"),
    color("hama", "H-22", "浅灰", "Light Grey", "#d0d2d0"),
    color("hama", "H-23", "灰", "Grey", "#878d8a"),
    color("hama", "H-24", "黑", "Black", "#1d1e20"),
    color("hama", "H-25", "金", "Gold", "#c9972e"),
    color("hama", "H-26", "透明", "Transparent", "#edf7fb", "transparent"),
    color("hama", "H-27", "夜光", "Glow", "#dcefb1", "glow"),
    color("hama", "H-28", "荧光绿", "Neon Green", "#8bea37", "neon"),
  ],
  artkal: [
    color("artkal", "A-01", "白", "White", "#f7f5ed"),
    color("artkal", "A-02", "象牙白", "Ivory", "#f6e9ca"),
    color("artkal", "A-03", "浅灰", "Light Grey", "#ced2d1"),
    color("artkal", "A-04", "灰", "Grey", "#909695"),
    color("artkal", "A-05", "黑", "Black", "#1f2022"),
    color("artkal", "A-06", "浅黄", "Light Yellow", "#f9e88b"),
    color("artkal", "A-07", "黄", "Yellow", "#ffd332"),
    color("artkal", "A-08", "橙黄", "Apricot", "#f4a33a"),
    color("artkal", "A-09", "橙", "Orange", "#e86f2d"),
    color("artkal", "A-10", "红", "Red", "#ce3437"),
    color("artkal", "A-11", "玫红", "Rose Red", "#d9417c"),
    color("artkal", "A-12", "粉", "Pink", "#f2a1b9"),
    color("artkal", "A-13", "浅粉", "Baby Pink", "#ffd0db"),
    color("artkal", "A-14", "肤色", "Skin", "#e1a577"),
    color("artkal", "A-15", "浅肤", "Light Skin", "#f3c7a1"),
    color("artkal", "A-16", "棕", "Brown", "#7a4832"),
    color("artkal", "A-17", "深棕", "Dark Brown", "#482c24"),
    color("artkal", "A-18", "浅绿", "Light Green", "#aad76c"),
    color("artkal", "A-19", "绿", "Green", "#53af4e"),
    color("artkal", "A-20", "翠绿", "Emerald", "#169b74"),
    color("artkal", "A-21", "薄荷", "Mint", "#a9dfd1"),
    color("artkal", "A-22", "青", "Aqua", "#2bb9bf"),
    color("artkal", "A-23", "天蓝", "Sky Blue", "#77bee8"),
    color("artkal", "A-24", "蓝", "Blue", "#386ab0"),
    color("artkal", "A-25", "深蓝", "Deep Blue", "#253d7c"),
    color("artkal", "A-26", "淡紫", "Lavender", "#c7a9dd"),
    color("artkal", "A-27", "紫", "Purple", "#7750a6"),
    color("artkal", "A-28", "深紫", "Deep Purple", "#4e337d"),
    color("artkal", "A-29", "金", "Gold", "#d49d30"),
    color("artkal", "A-30", "银", "Silver", "#bdc3c3", "pearl"),
    color("artkal", "A-31", "透明", "Clear", "#eff8ff", "transparent"),
    color("artkal", "A-32", "夜光绿", "Glow Green", "#d9efaa", "glow"),
    color("artkal", "A-33", "荧光黄", "Neon Yellow", "#dcff37", "neon"),
    color("artkal", "A-34", "荧光粉", "Neon Pink", "#ff4da2", "neon"),
  ],
};

function color(brand, code, zh, en, hex, finish = "solid") {
  const id = `${brand}-${code.toLowerCase().replace(/[^a-z0-9]/g, "")}`;
  const rgb = hexToRgb(hex);
  return {
    id,
    brand,
    code,
    name: { zh, en },
    hex,
    finish,
    rgb,
    lab: rgbToLab(rgb.r, rgb.g, rgb.b),
  };
}

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const els = {
  app: $(".app"),
  simpleModeButton: $("#simpleModeButton"),
  detailModeButton: $("#detailModeButton"),
  languageSelect: $("#languageSelect"),
  imageInput: $("#imageInput"),
  dropZone: $("#dropZone"),
  fileMeta: $("#fileMeta"),
  originalPreview: $("#originalPreview"),
  originalEmpty: $("#originalEmpty"),
  originalInfo: $("#originalInfo"),
  originalFrame: $(".original-frame"),
  cropBox: $("#cropBox"),
  cropReadout: $("#cropReadout"),
  cropResetButton: $("#cropResetButton"),
  totalBeads: $("#totalBeads"),
  colorCount: $("#colorCount"),
  boardCount: $("#boardCount"),
  physicalSize: $("#physicalSize"),
  patternCanvas: $("#patternCanvas"),
  canvasWrap: $("#canvasWrap"),
  patternEmpty: $("#patternEmpty"),
  hoverReadout: $("#hoverReadout"),
  paletteGrid: $("#paletteGrid"),
  selectedColorLabel: $("#selectedColorLabel"),
  replaceFromSelect: $("#replaceFromSelect"),
  replaceToSelect: $("#replaceToSelect"),
  replaceButton: $("#replaceButton"),
  materialsBody: $("#materialsBody"),
  shortageSummary: $("#shortageSummary"),
  beadSizeSelect: $("#beadSizeSelect"),
  brandSelect: $("#brandSelect"),
  modeSelect: $("#modeSelect"),
  cropModeSelect: $("#cropModeSelect"),
  widthInput: $("#widthInput"),
  heightInput: $("#heightInput"),
  maxColorsSelect: $("#maxColorsSelect"),
  detailLevelSelect: $("#detailLevelSelect"),
  ditherToggle: $("#ditherToggle"),
  excludeSpecialToggle: $("#excludeSpecialToggle"),
  transparentSelect: $("#transparentSelect"),
  previewStyleSelect: $("#previewStyleSelect"),
  gridToggle: $("#gridToggle"),
  fitToggle: $("#fitToggle"),
  generateButton: $("#generateButton"),
  resetInventoryButton: $("#resetInventoryButton"),
  exportPngButton: $("#exportPngButton"),
  exportCsvButton: $("#exportCsvButton"),
  printPdfButton: $("#printPdfButton"),
  undoButton: $("#undoButton"),
  redoButton: $("#redoButton"),
  restoreButton: $("#restoreButton"),
  zoomInButton: $("#zoomInButton"),
  zoomOutButton: $("#zoomOutButton"),
};

const ctx = els.patternCanvas.getContext("2d", { alpha: false });

const state = {
  lang: "zh",
  uiMode: localStorage.getItem("perler-bead-tools.uiMode") || "simple",
  image: null,
  imageUrl: "",
  imageFileName: "",
  imageBitmap: null,
  cropRect: null,
  imageBounds: null,
  cropAction: null,
  activePalette: [],
  selectedColorId: null,
  selectedTool: "brush",
  pattern: null,
  generatedCells: null,
  materialRows: [],
  inventory: loadInventory(),
  history: [],
  future: [],
  zoom: 1,
  renderCellSize: 10,
  isPainting: false,
  editSnapshotTaken: false,
  lastPaintKey: "",
  activePatternPointers: new Map(),
  patternPan: null,
  patternPinch: null,
};

init();

function init() {
  updateMobilePreviewLayout();
  setUiMode(state.uiMode, false);
  updateActivePalette();
  applyI18n();
  renderPaletteGrid();
  wireEvents();
  updateStats();
  updateUndoRedo();
  if (new URLSearchParams(window.location.search).get("demo") === "1") {
    window.setTimeout(loadDemoImage, 0);
  }
}

function wireEvents() {
  els.simpleModeButton.addEventListener("click", () => setUiMode("simple"));
  els.detailModeButton.addEventListener("click", () => setUiMode("detail"));

  els.languageSelect.addEventListener("change", () => {
    state.lang = els.languageSelect.value;
    document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
    applyI18n();
    renderPaletteGrid();
    renderMaterials();
    renderReplaceControls();
    updateStats();
    renderPattern();
    renderCropBox();
  });

  els.imageInput.addEventListener("change", (event) => {
    const [file] = event.target.files;
    if (file) handleFile(file);
  });

  els.originalPreview.addEventListener("load", renderCropBox);

  els.cropResetButton.addEventListener("click", () => {
    if (!state.image) return;
    resetCropRect();
    renderCropBox();
    generatePattern();
  });

  ["dragenter", "dragover"].forEach((name) => {
    els.dropZone.addEventListener(name, (event) => {
      event.preventDefault();
      els.dropZone.classList.add("is-dragging");
    });
  });

  ["dragleave", "drop"].forEach((name) => {
    els.dropZone.addEventListener(name, (event) => {
      event.preventDefault();
      els.dropZone.classList.remove("is-dragging");
    });
  });

  els.dropZone.addEventListener("drop", (event) => {
    const [file] = event.dataTransfer.files;
    if (file) handleFile(file);
  });

  els.generateButton.addEventListener("click", generatePattern);
  els.exportPngButton.addEventListener("click", exportPng);
  els.exportCsvButton.addEventListener("click", exportCsv);
  els.printPdfButton.addEventListener("click", openPrintDocument);
  els.resetInventoryButton.addEventListener("click", () => {
    state.inventory = {};
    saveInventory();
    renderMaterials();
    showToast(t("inventoryCleared"));
  });

  els.brandSelect.addEventListener("change", () => {
    updateActivePalette();
    renderPaletteGrid();
    if (state.image) generatePattern();
  });

  els.excludeSpecialToggle.addEventListener("change", () => {
    updateActivePalette();
    renderPaletteGrid();
    if (state.image) generatePattern();
  });

  [
    els.beadSizeSelect,
    els.modeSelect,
    els.cropModeSelect,
    els.maxColorsSelect,
    els.detailLevelSelect,
    els.ditherToggle,
    els.transparentSelect,
  ].forEach((control) => {
    control.addEventListener("change", () => {
      if (state.image) generatePattern();
    });
  });

  [els.widthInput, els.heightInput].forEach((input) => {
    input.addEventListener("change", () => {
      input.value = clampNumber(Number(input.value), 10, MAX_PATTERN_SIZE);
      syncPresetState();
      updateCropForAspect();
      if (state.image) generatePattern();
    });
  });

  $$(".preset-button").forEach((button) => {
    button.addEventListener("click", () => {
      const [width, height] = button.dataset.size.split("x").map(Number);
      els.widthInput.value = width;
      els.heightInput.value = height;
      syncPresetState();
      updateCropForAspect();
      if (state.image) generatePattern();
    });
  });

  [els.previewStyleSelect, els.gridToggle, els.fitToggle].forEach((control) => {
    control.addEventListener("change", renderPattern);
  });

  els.zoomInButton.addEventListener("click", () => {
    changePatternZoom(0.25);
  });

  els.zoomOutButton.addEventListener("click", () => {
    changePatternZoom(-0.25);
  });

  els.undoButton.addEventListener("click", undo);
  els.redoButton.addEventListener("click", redo);
  els.restoreButton.addEventListener("click", restoreGeneratedPattern);

  $$(".tool-button[data-tool]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedTool = button.dataset.tool;
      $$(".tool-button[data-tool]").forEach((item) => item.classList.toggle("is-active", item === button));
    });
  });

  els.patternCanvas.addEventListener("pointerdown", handlePointerDown);
  els.patternCanvas.addEventListener("pointermove", handlePointerMove);
  els.patternCanvas.addEventListener("pointerup", handlePointerUp);
  els.patternCanvas.addEventListener("pointercancel", handlePointerUp);
  els.patternCanvas.addEventListener("pointerleave", () => {
    if (!state.isPainting) els.hoverReadout.textContent = t("hoverEmpty");
  });
  els.canvasWrap.addEventListener("pointerdown", handleCanvasTouchDown);
  els.canvasWrap.addEventListener("pointermove", handleCanvasTouchMove);
  els.canvasWrap.addEventListener("pointerup", handleCanvasTouchEnd);
  els.canvasWrap.addEventListener("pointercancel", handleCanvasTouchEnd);

  els.cropBox.addEventListener("pointerdown", handleCropPointerDown);
  window.addEventListener("pointermove", handleCropPointerMove);
  window.addEventListener("pointerup", handleCropPointerUp);
  window.addEventListener("pointercancel", handleCropPointerUp);

  els.paletteGrid.addEventListener("click", (event) => {
    const button = event.target.closest(".palette-swatch");
    if (!button) return;
    state.selectedColorId = button.dataset.colorId;
    renderPaletteGrid();
    renderReplaceControls();
  });

  els.replaceButton.addEventListener("click", replaceColor);

  els.materialsBody.addEventListener("change", (event) => {
    if (!event.target.matches(".inventory-input")) return;
    const colorId = event.target.dataset.colorId;
    state.inventory[colorId] = Math.max(0, Math.floor(Number(event.target.value) || 0));
    saveInventory();
    renderMaterials();
  });

  window.addEventListener("resize", () => {
    window.requestAnimationFrame(() => {
      updateMobilePreviewLayout();
      renderPattern();
      renderCropBox();
    });
  });

  document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    if ((event.ctrlKey || event.metaKey) && key === "z" && !event.shiftKey) {
      event.preventDefault();
      undo();
    } else if ((event.ctrlKey || event.metaKey) && (key === "y" || (event.shiftKey && key === "z"))) {
      event.preventDefault();
      redo();
    }
    if (key === "+" || key === "=") {
      changePatternZoom(0.25);
    }
    if (key === "-") {
      changePatternZoom(-0.25);
    }
  });
}

function applyI18n() {
  $$("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = t(key);
  });

  $$("[data-i18n-option]").forEach((node) => {
    const key = node.dataset.i18nOption;
    node.textContent = t(key);
  });

  if (!state.image) els.fileMeta.textContent = t("uploadMeta");
  if (!state.pattern) els.hoverReadout.textContent = t("hoverEmpty");
  if (!state.image) els.cropReadout.textContent = t("cropHint");
}

function setUiMode(mode, persist = true) {
  state.uiMode = mode === "detail" ? "detail" : "simple";
  els.app.classList.toggle("is-simple", state.uiMode === "simple");
  els.app.classList.toggle("is-detail", state.uiMode === "detail");
  els.simpleModeButton.classList.toggle("is-active", state.uiMode === "simple");
  els.detailModeButton.classList.toggle("is-active", state.uiMode === "detail");
  if (persist) localStorage.setItem("perler-bead-tools.uiMode", state.uiMode);
  window.requestAnimationFrame(() => {
    renderPattern();
    renderCropBox();
  });
}

function updateMobilePreviewLayout() {
  const screenWidth = window.screen?.width || window.innerWidth;
  const isTouchDevice = navigator.maxTouchPoints > 0 || Boolean(window.matchMedia?.("(pointer: coarse)").matches);
  const isWeChat = /MicroMessenger/i.test(navigator.userAgent);
  const shouldUseMobilePreview = isTouchDevice && (Math.min(window.innerWidth, screenWidth) <= 1180 || isWeChat);
  els.app.classList.toggle("is-mobile-preview", shouldUseMobilePreview);
}

function t(key) {
  return I18N[state.lang][key] || I18N.zh[key] || key;
}

async function handleFile(file) {
  const looksLikeImage = file.type.startsWith("image/") || /\.(avif|bmp|gif|heic|heif|jpe?g|png|svg|webp)$/i.test(file.name);
  if (!looksLikeImage) {
    setUploadError(t("fileUnsupported"));
    return;
  }
  if (file.size > MAX_FILE_SIZE) {
    setUploadError(t("fileTooLarge"));
    return;
  }

  setUploadMessage(t("loadingImage"));
  clearPattern();
  clearUploadError();
  if (state.imageUrl && state.imageUrl.startsWith("blob:")) URL.revokeObjectURL(state.imageUrl);
  if (state.imageBitmap?.close) state.imageBitmap.close();

  const imageUrl = URL.createObjectURL(file);

  try {
    const decoded = await decodeImageFile(file, imageUrl);
    state.image = decoded.source;
    state.imageBitmap = decoded.bitmap || null;
    state.imageUrl = decoded.previewUrl;
    state.imageFileName = file.name.replace(/\.[^.]+$/, "") || "pattern";
    els.originalPreview.src = decoded.previewUrl;
    els.originalPreview.alt = file.name;
    els.originalFrame.classList.add("has-image");
    els.originalFrame.classList.remove("has-error");
    els.originalEmpty.textContent = t("emptyOriginal");
    els.originalInfo.textContent = `${decoded.width} × ${decoded.height} px`;
    els.fileMeta.textContent = `${file.name} · ${formatBytes(file.size)}`;
    if (decoded.previewUrl !== imageUrl) URL.revokeObjectURL(imageUrl);
    resetCropRect();
    window.requestAnimationFrame(() => {
      renderCropBox();
      generatePattern();
    });
    showToast(t("imageLoaded"));
  } catch {
    URL.revokeObjectURL(imageUrl);
    setUploadError(t("imageDecodeFailed"));
  }
}

async function decodeImageFile(file, imageUrl) {
  try {
    const image = await loadImageElement(imageUrl);
    return {
      source: image,
      previewUrl: imageUrl,
      width: image.naturalWidth,
      height: image.naturalHeight,
    };
  } catch {
    if (!("createImageBitmap" in window)) throw new Error("decode failed");
    const bitmap = await createImageBitmap(file);
    const previewUrl = imageBitmapToDataUrl(bitmap);
    return {
      source: bitmap,
      bitmap,
      previewUrl,
      width: bitmap.width,
      height: bitmap.height,
    };
  }
}

function loadImageElement(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.decoding = "async";
    image.onload = () => {
      if (!image.naturalWidth || !image.naturalHeight) {
        reject(new Error("empty image"));
        return;
      }
      resolve(image);
    };
    image.onerror = reject;
    image.src = src;
  });
}

function imageBitmapToDataUrl(bitmap) {
  const canvas = document.createElement("canvas");
  canvas.width = bitmap.width;
  canvas.height = bitmap.height;
  const bitmapCtx = canvas.getContext("2d");
  bitmapCtx.drawImage(bitmap, 0, 0);
  return canvas.toDataURL("image/png");
}

function clearPattern() {
  state.pattern = null;
  state.generatedCells = null;
  state.materialRows = [];
  state.history = [];
  state.future = [];
  els.canvasWrap.classList.remove("has-pattern");
  ctx.clearRect(0, 0, els.patternCanvas.width, els.patternCanvas.height);
  renderMaterials();
  updateStats();
  updateUndoRedo();
}

function setUploadMessage(message) {
  els.fileMeta.textContent = message;
  els.originalEmpty.textContent = message;
  showToast(message);
}

function setUploadError(message) {
  clearPattern();
  if (state.imageUrl && state.imageUrl.startsWith("blob:")) URL.revokeObjectURL(state.imageUrl);
  if (state.imageBitmap?.close) state.imageBitmap.close();
  state.image = null;
  state.imageUrl = "";
  state.imageBitmap = null;
  state.cropRect = null;
  els.originalPreview.removeAttribute("src");
  els.originalFrame.classList.remove("has-image");
  els.originalFrame.classList.add("has-error");
  els.originalInfo.textContent = "-";
  els.originalEmpty.textContent = message;
  els.fileMeta.textContent = message;
  els.cropBox.style.display = "none";
  els.cropReadout.textContent = message;
  showToast(message);
}

function clearUploadError() {
  els.originalFrame.classList.remove("has-error");
  els.originalEmpty.textContent = t("emptyOriginal");
  els.cropReadout.textContent = t("cropHint");
}

function getImageSize() {
  if (!state.image) return { width: 0, height: 0 };
  return {
    width: state.image.naturalWidth || state.image.width,
    height: state.image.naturalHeight || state.image.height,
  };
}

function getTargetAspect() {
  const width = clampNumber(Number(els.widthInput.value), 10, MAX_PATTERN_SIZE);
  const height = clampNumber(Number(els.heightInput.value), 10, MAX_PATTERN_SIZE);
  return width / height;
}

function resetCropRect() {
  const { width, height } = getImageSize();
  if (!width || !height) return;
  const aspect = getTargetAspect();
  let cropWidth = width;
  let cropHeight = cropWidth / aspect;
  if (cropHeight > height) {
    cropHeight = height;
    cropWidth = cropHeight * aspect;
  }
  state.cropRect = {
    x: (width - cropWidth) / 2,
    y: (height - cropHeight) / 2,
    width: cropWidth,
    height: cropHeight,
  };
}

function updateCropForAspect() {
  if (!state.image) return;
  const { width, height } = getImageSize();
  const current = state.cropRect;
  if (!current) {
    resetCropRect();
    renderCropBox();
    return;
  }
  const aspect = getTargetAspect();
  const centerX = current.x + current.width / 2;
  const centerY = current.y + current.height / 2;
  let cropWidth = Math.min(current.width, width);
  let cropHeight = cropWidth / aspect;
  if (cropHeight > height) {
    cropHeight = Math.min(current.height, height);
    cropWidth = cropHeight * aspect;
  }
  if (cropWidth > width) {
    cropWidth = width;
    cropHeight = cropWidth / aspect;
  }
  state.cropRect = clampCropRect({
    x: centerX - cropWidth / 2,
    y: centerY - cropHeight / 2,
    width: cropWidth,
    height: cropHeight,
  });
  renderCropBox();
}

function renderCropBox() {
  if (!state.image || !state.cropRect) {
    els.cropBox.style.display = "none";
    return;
  }
  const frameRect = els.originalFrame.getBoundingClientRect();
  const imageRect = els.originalPreview.getBoundingClientRect();
  const { width: imageWidth, height: imageHeight } = getImageSize();
  if (!frameRect.width || !imageRect.width || !imageWidth || !imageHeight) return;

  state.imageBounds = {
    left: imageRect.left - frameRect.left,
    top: imageRect.top - frameRect.top,
    width: imageRect.width,
    height: imageRect.height,
  };

  const rect = state.cropRect;
  els.cropBox.style.display = "block";
  els.cropBox.style.left = `${state.imageBounds.left + (rect.x / imageWidth) * state.imageBounds.width}px`;
  els.cropBox.style.top = `${state.imageBounds.top + (rect.y / imageHeight) * state.imageBounds.height}px`;
  els.cropBox.style.width = `${(rect.width / imageWidth) * state.imageBounds.width}px`;
  els.cropBox.style.height = `${(rect.height / imageHeight) * state.imageBounds.height}px`;
  els.cropReadout.textContent = `${t("cropSize")} ${Math.round(rect.width)} × ${Math.round(rect.height)} px · ${t("cropHint")}`;
}

function getCropSourceRect() {
  const { width, height } = getImageSize();
  if (!state.cropRect) resetCropRect();
  return clampCropRect(state.cropRect || { x: 0, y: 0, width, height });
}

function clampCropRect(rect) {
  const { width: imageWidth, height: imageHeight } = getImageSize();
  const minSize = Math.min(10, imageWidth, imageHeight);
  const clamped = {
    width: clampNumber(rect.width, minSize, imageWidth),
    height: clampNumber(rect.height, minSize, imageHeight),
    x: rect.x,
    y: rect.y,
  };
  clamped.x = clampNumber(clamped.x, 0, imageWidth - clamped.width);
  clamped.y = clampNumber(clamped.y, 0, imageHeight - clamped.height);
  return clamped;
}

function handleCropPointerDown(event) {
  if (!state.image || !state.cropRect || !state.imageBounds) return;
  event.preventDefault();
  event.stopPropagation();
  els.cropBox.setPointerCapture?.(event.pointerId);
  state.cropAction = {
    type: event.target.dataset.handle ? "resize" : "move",
    handle: event.target.dataset.handle || "",
    startX: event.clientX,
    startY: event.clientY,
    startRect: { ...state.cropRect },
    moved: false,
  };
}

function handleCropPointerMove(event) {
  if (!state.cropAction || !state.imageBounds) return;
  event.preventDefault();
  const { width: imageWidth, height: imageHeight } = getImageSize();
  const dx = ((event.clientX - state.cropAction.startX) / state.imageBounds.width) * imageWidth;
  const dy = ((event.clientY - state.cropAction.startY) / state.imageBounds.height) * imageHeight;
  if (Math.abs(dx) + Math.abs(dy) > 0.5) state.cropAction.moved = true;

  if (state.cropAction.type === "move") {
    const start = state.cropAction.startRect;
    state.cropRect = clampCropRect({
      ...start,
      x: start.x + dx,
      y: start.y + dy,
    });
  } else {
    state.cropRect = resizeCropRect(event);
  }
  renderCropBox();
}

function handleCropPointerUp(event) {
  if (!state.cropAction) return;
  els.cropBox.releasePointerCapture?.(event.pointerId);
  const shouldGenerate = state.cropAction.moved && state.image;
  state.cropAction = null;
  if (shouldGenerate) generatePattern();
}

function resizeCropRect(event) {
  const { width: imageWidth, height: imageHeight } = getImageSize();
  const aspect = getTargetAspect();
  const start = state.cropAction.startRect;
  const bounds = state.imageBounds;
  const pointerX = clampNumber(((event.clientX - (els.originalFrame.getBoundingClientRect().left + bounds.left)) / bounds.width) * imageWidth, 0, imageWidth);
  const pointerY = clampNumber(((event.clientY - (els.originalFrame.getBoundingClientRect().top + bounds.top)) / bounds.height) * imageHeight, 0, imageHeight);
  let anchorX;
  let anchorY;
  let maxWidth;

  if (state.cropAction.handle === "nw") {
    anchorX = start.x + start.width;
    anchorY = start.y + start.height;
    maxWidth = Math.min(anchorX, anchorY * aspect);
  } else if (state.cropAction.handle === "ne") {
    anchorX = start.x;
    anchorY = start.y + start.height;
    maxWidth = Math.min(imageWidth - anchorX, anchorY * aspect);
  } else if (state.cropAction.handle === "sw") {
    anchorX = start.x + start.width;
    anchorY = start.y;
    maxWidth = Math.min(anchorX, (imageHeight - anchorY) * aspect);
  } else {
    anchorX = start.x;
    anchorY = start.y;
    maxWidth = Math.min(imageWidth - anchorX, (imageHeight - anchorY) * aspect);
  }

  const rawWidth = Math.abs(pointerX - anchorX);
  const rawHeight = Math.abs(pointerY - anchorY) * aspect;
  const desiredWidth = clampNumber(Math.min(Math.max(rawWidth, rawHeight), maxWidth), Math.min(10, maxWidth), maxWidth);
  const desiredHeight = desiredWidth / aspect;
  let x = anchorX;
  let y = anchorY;

  if (state.cropAction.handle === "nw") {
    x = anchorX - desiredWidth;
    y = anchorY - desiredHeight;
  } else if (state.cropAction.handle === "ne") {
    y = anchorY - desiredHeight;
  } else if (state.cropAction.handle === "sw") {
    x = anchorX - desiredWidth;
  }

  return clampCropRect({ x, y, width: desiredWidth, height: desiredHeight });
}

function updateActivePalette() {
  const brand = els.brandSelect.value;
  const excludeSpecial = els.excludeSpecialToggle.checked;
  const palette = PALETTES[brand] || PALETTES.china;
  state.activePalette = palette.filter((item) => !excludeSpecial || item.finish === "solid");
  if (!state.activePalette.length) state.activePalette = palette.slice();
  if (!state.selectedColorId || !state.activePalette.some((item) => item.id === state.selectedColorId)) {
    state.selectedColorId = state.activePalette[0]?.id || null;
  }
}

function generatePattern() {
  if (!state.image) {
    showToast(t("noImage"));
    return;
  }

  updateActivePalette();
  const width = clampNumber(Number(els.widthInput.value), 10, MAX_PATTERN_SIZE);
  const height = clampNumber(Number(els.heightInput.value), 10, MAX_PATTERN_SIZE);
  els.widthInput.value = width;
  els.heightInput.value = height;
  updateCropForAspect();

  let samples;
  try {
    samples = sampleImage(width, height);
  } catch {
    setUploadError(t("imageDecodeFailed"));
    return;
  }
  samples = enhanceSamples(samples, width, height, els.modeSelect.value, els.detailLevelSelect.value);
  const palette = state.activePalette;
  const preliminary = [];
  const scores = new Map();

  for (const sample of samples) {
    if (sample.empty) {
      preliminary.push({ empty: true });
      continue;
    }
    const adjusted = adjustForMode(sample.r, sample.g, sample.b, els.modeSelect.value);
    const nearest = nearestColor(adjusted, palette);
    const detailWeight = 1 + sample.edge * getDetailScoreBoost(els.detailLevelSelect.value);
    preliminary.push({ empty: false, rgb: adjusted, nearestId: nearest.id, edge: sample.edge });
    scores.set(nearest.id, (scores.get(nearest.id) || 0) + detailWeight);
  }

  const maxColors = Number(els.maxColorsSelect.value);
  const selectedIds = [...scores.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, Math.min(maxColors, scores.size))
    .map(([id]) => id);
  const limitedPalette = palette.filter((item) => selectedIds.includes(item.id));
  const usablePalette = limitedPalette.length ? limitedPalette : palette;

  const cells = els.ditherToggle.checked
    ? ditherMap(preliminary, width, height, usablePalette)
    : preliminary.map((sample) => (sample.empty ? null : nearestColor(sample.rgb, usablePalette).id));

  state.pattern = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    name: state.imageFileName || "pattern",
    beadSizeMm: Number(els.beadSizeSelect.value),
    brand: els.brandSelect.value,
    width,
    height,
    cells,
    palette: usablePalette,
    createdAt: new Date().toISOString(),
  };
  state.history = [];
  state.future = [];
  state.generatedCells = cells.slice();
  state.zoom = 1;
  if (!state.selectedColorId || !usablePalette.some((item) => item.id === state.selectedColorId)) {
    const firstUsedId = cells.find(Boolean);
    state.selectedColorId = firstUsedId || usablePalette[0]?.id || null;
  }
  syncPresetState();
  renderAllPatternState();
  showToast(t("generated"));
}

function sampleImage(width, height) {
  const detailScale = getDetailSamplingScale(width, height);
  const sampleWidth = width * detailScale;
  const sampleHeight = height * detailScale;
  const canvas = document.createElement("canvas");
  canvas.width = sampleWidth;
  canvas.height = sampleHeight;
  const sampleCtx = canvas.getContext("2d", { willReadFrequently: true });
  sampleCtx.clearRect(0, 0, sampleWidth, sampleHeight);

  const sourceRect = getCropSourceRect();

  sampleCtx.imageSmoothingEnabled = true;
  sampleCtx.imageSmoothingQuality = "high";
  sampleCtx.drawImage(
    state.image,
    sourceRect.x,
    sourceRect.y,
    sourceRect.width,
    sourceRect.height,
    0,
    0,
    sampleWidth,
    sampleHeight,
  );

  const data = sampleCtx.getImageData(0, 0, sampleWidth, sampleHeight).data;
  const transparentMode = els.transparentSelect.value;
  const samples = [];

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      let rSum = 0;
      let gSum = 0;
      let bSum = 0;
      let alphaSum = 0;
      let visible = 0;
      let minLuma = 255;
      let maxLuma = 0;

      for (let sy = 0; sy < detailScale; sy += 1) {
        for (let sx = 0; sx < detailScale; sx += 1) {
          const dataIndex = ((y * detailScale + sy) * sampleWidth + (x * detailScale + sx)) * 4;
          const alpha = data[dataIndex + 3];
          if (alpha < 32) continue;
          let r = data[dataIndex];
          let g = data[dataIndex + 1];
          let b = data[dataIndex + 2];
          if (alpha < 255) {
            const bg = transparentMode === "black" ? 0 : 255;
            const a = alpha / 255;
            r = Math.round(r * a + bg * (1 - a));
            g = Math.round(g * a + bg * (1 - a));
            b = Math.round(b * a + bg * (1 - a));
          }
          const luma = r * 0.299 + g * 0.587 + b * 0.114;
          minLuma = Math.min(minLuma, luma);
          maxLuma = Math.max(maxLuma, luma);
          rSum += r * alpha;
          gSum += g * alpha;
          bSum += b * alpha;
          alphaSum += alpha;
          visible += 1;
        }
      }

      if (!visible && transparentMode === "empty") {
        samples.push({ empty: true });
        continue;
      }
      if (!visible) {
        const bg = transparentMode === "black" ? 0 : 255;
        samples.push({ empty: false, r: bg, g: bg, b: bg, edge: 0 });
        continue;
      }
      samples.push({
        empty: false,
        r: Math.round(rSum / alphaSum),
        g: Math.round(gSum / alphaSum),
        b: Math.round(bSum / alphaSum),
        edge: (maxLuma - minLuma) / 255,
      });
    }
  }

  return samples;
}

function getDetailSamplingScale(width, height) {
  const level = els.detailLevelSelect.value;
  const cells = width * height;
  if (level === "max" && cells <= 14400) return 4;
  if (level !== "standard" && cells <= 22500) return 3;
  return 2;
}

function getDetailScoreBoost(level) {
  if (level === "max") return 3.8;
  if (level === "high") return 2.6;
  return 1.4;
}

function enhanceSamples(samples, width, height, mode, level) {
  const amountMap = {
    standard: mode === "portrait" ? 0.28 : 0.42,
    high: mode === "portrait" ? 0.46 : 0.68,
    max: mode === "portrait" ? 0.62 : 0.9,
  };
  const contrastMap = {
    standard: 0.18,
    high: 0.34,
    max: 0.48,
  };
  const amount = amountMap[level] ?? amountMap.high;
  const edgeContrast = contrastMap[level] ?? contrastMap.high;
  const enhanced = new Array(samples.length);

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const index = y * width + x;
      const sample = samples[index];
      if (sample.empty) {
        enhanced[index] = sample;
        continue;
      }

      const blur = averageNeighborColor(samples, width, height, x, y);
      const edge = computeGridEdge(samples, width, height, x, y, sample.edge || 0);
      const localAmount = amount * (0.55 + edge * 0.9);
      const sharpened = {
        r: clampByte(sample.r + (sample.r - blur.r) * localAmount),
        g: clampByte(sample.g + (sample.g - blur.g) * localAmount),
        b: clampByte(sample.b + (sample.b - blur.b) * localAmount),
      };
      const contrasted = adjustRgb(sharpened.r, sharpened.g, sharpened.b, 1 + edge * edgeContrast, 1 + edge * edgeContrast * 0.45, 1);
      enhanced[index] = { empty: false, ...contrasted, edge };
    }
  }

  return enhanced;
}

function averageNeighborColor(samples, width, height, x, y) {
  let r = 0;
  let g = 0;
  let b = 0;
  let count = 0;
  for (let yy = Math.max(0, y - 1); yy <= Math.min(height - 1, y + 1); yy += 1) {
    for (let xx = Math.max(0, x - 1); xx <= Math.min(width - 1, x + 1); xx += 1) {
      const sample = samples[yy * width + xx];
      if (sample.empty) continue;
      r += sample.r;
      g += sample.g;
      b += sample.b;
      count += 1;
    }
  }
  if (!count) return { r: 255, g: 255, b: 255 };
  return { r: r / count, g: g / count, b: b / count };
}

function computeGridEdge(samples, width, height, x, y, intraCellEdge) {
  const center = samples[y * width + x];
  const luma = center.r * 0.299 + center.g * 0.587 + center.b * 0.114;
  let maxDiff = intraCellEdge;
  const neighbors = [
    [x - 1, y],
    [x + 1, y],
    [x, y - 1],
    [x, y + 1],
  ];
  for (const [nx, ny] of neighbors) {
    if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue;
    const neighbor = samples[ny * width + nx];
    if (neighbor.empty) {
      maxDiff = Math.max(maxDiff, 0.65);
      continue;
    }
    const neighborLuma = neighbor.r * 0.299 + neighbor.g * 0.587 + neighbor.b * 0.114;
    const colorDiff =
      (Math.abs(center.r - neighbor.r) + Math.abs(center.g - neighbor.g) + Math.abs(center.b - neighbor.b)) / 765;
    maxDiff = Math.max(maxDiff, Math.abs(luma - neighborLuma) / 255, colorDiff);
  }
  return clampNumber(maxDiff, 0, 1);
}

function adjustForMode(r, g, b, mode) {
  if (mode === "icon") return adjustRgb(r, g, b, 1.18, 1.2, 1.02);
  if (mode === "portrait") return adjustRgb(r, g, b, 1.04, 0.95, 1.02);
  return adjustRgb(r, g, b, 1.08, 1.05, 1);
}

function adjustRgb(r, g, b, contrast, saturation, brightness) {
  let nr = (r - 128) * contrast + 128;
  let ng = (g - 128) * contrast + 128;
  let nb = (b - 128) * contrast + 128;
  const grey = nr * 0.299 + ng * 0.587 + nb * 0.114;
  nr = grey + (nr - grey) * saturation;
  ng = grey + (ng - grey) * saturation;
  nb = grey + (nb - grey) * saturation;
  return {
    r: clampByte(nr * brightness),
    g: clampByte(ng * brightness),
    b: clampByte(nb * brightness),
  };
}

function ditherMap(preliminary, width, height, palette) {
  const buffer = preliminary.map((item) => {
    if (item.empty) return { empty: true, r: 0, g: 0, b: 0 };
    return { empty: false, r: item.rgb.r, g: item.rgb.g, b: item.rgb.b };
  });
  const cells = new Array(width * height).fill(null);

  const spread = (x, y, er, eg, eb, factor) => {
    if (x < 0 || x >= width || y < 0 || y >= height) return;
    const target = buffer[y * width + x];
    if (!target || target.empty) return;
    target.r += er * factor;
    target.g += eg * factor;
    target.b += eb * factor;
  };

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const index = y * width + x;
      const current = buffer[index];
      if (current.empty) continue;
      const rgb = {
        r: clampByte(current.r),
        g: clampByte(current.g),
        b: clampByte(current.b),
      };
      const nearest = nearestColor(rgb, palette);
      cells[index] = nearest.id;
      const er = current.r - nearest.rgb.r;
      const eg = current.g - nearest.rgb.g;
      const eb = current.b - nearest.rgb.b;
      spread(x + 1, y, er, eg, eb, 7 / 16);
      spread(x - 1, y + 1, er, eg, eb, 3 / 16);
      spread(x, y + 1, er, eg, eb, 5 / 16);
      spread(x + 1, y + 1, er, eg, eb, 1 / 16);
    }
  }

  return cells;
}

function renderAllPatternState() {
  renderPattern();
  renderPaletteGrid();
  computeMaterials();
  renderMaterials();
  renderReplaceControls();
  updateStats();
  updateUndoRedo();
}

function renderPattern() {
  if (!state.pattern) {
    els.canvasWrap.classList.remove("has-pattern");
    ctx.clearRect(0, 0, els.patternCanvas.width, els.patternCanvas.height);
    return;
  }

  els.canvasWrap.classList.add("has-pattern");
  const baseCell = getBaseCellSize();
  state.renderCellSize = clampNumber(Math.round(baseCell * state.zoom), 3, 48);
  drawPatternToCanvas(els.patternCanvas, {
    cellSize: state.renderCellSize,
    previewStyle: els.previewStyleSelect.value,
    showGrid: els.gridToggle.checked,
    includeLabels: false,
  });
}

function getBaseCellSize() {
  if (!els.fitToggle.checked || !state.pattern) return 10;
  const wrapRect = els.canvasWrap.getBoundingClientRect();
  const widthCell = Math.floor((wrapRect.width - 40) / state.pattern.width);
  const heightCell = Math.floor((wrapRect.height - 40) / state.pattern.height);
  return clampNumber(Math.min(widthCell, heightCell), 3, 20);
}

function drawPatternToCanvas(canvas, options) {
  const pattern = state.pattern;
  const cellSize = options.cellSize;
  canvas.width = pattern.width * cellSize;
  canvas.height = pattern.height * cellSize;
  canvas.style.width = `${canvas.width}px`;
  canvas.style.height = `${canvas.height}px`;
  const drawCtx = canvas.getContext("2d", { alpha: false });
  drawCtx.fillStyle = "#ffffff";
  drawCtx.fillRect(0, 0, canvas.width, canvas.height);

  for (let y = 0; y < pattern.height; y += 1) {
    for (let x = 0; x < pattern.width; x += 1) {
      const colorId = pattern.cells[y * pattern.width + x];
      const px = x * cellSize;
      const py = y * cellSize;
      if (!colorId) {
        drawEmptyCell(drawCtx, px, py, cellSize);
        continue;
      }
      const beadColor = findColor(colorId);
      drawBeadCell(drawCtx, px, py, cellSize, beadColor, options.previewStyle, options.includeLabels);
    }
  }

  if (options.showGrid) drawGrid(drawCtx, pattern.width, pattern.height, cellSize);
}

function drawEmptyCell(drawCtx, x, y, size) {
  drawCtx.fillStyle = "#f5f6f4";
  drawCtx.fillRect(x, y, size, size);
  if (size >= 9) {
    drawCtx.strokeStyle = "rgba(120, 128, 122, 0.32)";
    drawCtx.lineWidth = 1;
    drawCtx.beginPath();
    drawCtx.moveTo(x + size * 0.22, y + size * 0.78);
    drawCtx.lineTo(x + size * 0.78, y + size * 0.22);
    drawCtx.stroke();
  }
}

function drawBeadCell(drawCtx, x, y, size, beadColor, style, includeLabels) {
  const inset = Math.max(1, size * 0.08);
  const center = size / 2;

  if (style === "square" || size < 6) {
    drawCtx.fillStyle = beadColor.hex;
    drawCtx.fillRect(x, y, size, size);
  } else {
    drawCtx.fillStyle = "#ffffff";
    drawCtx.fillRect(x, y, size, size);
    drawCtx.beginPath();
    drawCtx.arc(x + center, y + center, Math.max(1, center - inset), 0, Math.PI * 2);
    drawCtx.fillStyle = beadColor.hex;
    drawCtx.fill();
    drawCtx.fillStyle = "rgba(255,255,255,0.22)";
    drawCtx.beginPath();
    drawCtx.arc(x + center * 0.72, y + center * 0.72, Math.max(1, size * 0.1), 0, Math.PI * 2);
    drawCtx.fill();
    if (style === "hollow") {
      drawCtx.beginPath();
      drawCtx.arc(x + center, y + center, Math.max(1, size * 0.17), 0, Math.PI * 2);
      drawCtx.fillStyle = "#ffffff";
      drawCtx.fill();
    }
  }

  if (includeLabels && size >= 14) {
    const label = shortCode(beadColor.code);
    drawCtx.fillStyle = readableTextColor(beadColor.hex);
    drawCtx.font = `${Math.max(5, Math.floor(size * 0.28))}px Arial, sans-serif`;
    drawCtx.textAlign = "center";
    drawCtx.textBaseline = "middle";
    drawCtx.fillText(label, x + center, y + center);
  }
}

function drawGrid(drawCtx, width, height, cellSize) {
  drawCtx.save();
  drawCtx.lineWidth = 1;
  for (let x = 0; x <= width; x += 1) {
    drawCtx.strokeStyle = x % BOARD_SIZE === 0 ? "rgba(30, 55, 48, 0.68)" : "rgba(40, 47, 42, 0.17)";
    drawCtx.beginPath();
    drawCtx.moveTo(x * cellSize + 0.5, 0);
    drawCtx.lineTo(x * cellSize + 0.5, height * cellSize);
    drawCtx.stroke();
  }
  for (let y = 0; y <= height; y += 1) {
    drawCtx.strokeStyle = y % BOARD_SIZE === 0 ? "rgba(30, 55, 48, 0.68)" : "rgba(40, 47, 42, 0.17)";
    drawCtx.beginPath();
    drawCtx.moveTo(0, y * cellSize + 0.5);
    drawCtx.lineTo(width * cellSize, y * cellSize + 0.5);
    drawCtx.stroke();
  }
  drawCtx.restore();
}

function changePatternZoom(delta) {
  const rect = els.canvasWrap.getBoundingClientRect();
  setPatternZoom(state.zoom + delta, rect.left + rect.width / 2, rect.top + rect.height / 2);
}

function setPatternZoom(nextZoom, anchorClientX, anchorClientY) {
  if (!state.pattern) return;
  const wrapRect = els.canvasWrap.getBoundingClientRect();
  const canvasRect = els.patternCanvas.getBoundingClientRect();
  const anchorInWrapX = anchorClientX - wrapRect.left;
  const anchorInWrapY = anchorClientY - wrapRect.top;
  const ratioX = canvasRect.width ? clampNumber((anchorClientX - canvasRect.left) / canvasRect.width, 0, 1) : 0.5;
  const ratioY = canvasRect.height ? clampNumber((anchorClientY - canvasRect.top) / canvasRect.height, 0, 1) : 0.5;

  state.zoom = clampNumber(nextZoom, MIN_PATTERN_ZOOM, MAX_PATTERN_ZOOM);
  renderPattern();

  const nextCanvasWidth = els.patternCanvas.offsetWidth;
  const nextCanvasHeight = els.patternCanvas.offsetHeight;
  els.canvasWrap.scrollLeft = Math.max(0, els.patternCanvas.offsetLeft + ratioX * nextCanvasWidth - anchorInWrapX);
  els.canvasWrap.scrollTop = Math.max(0, els.patternCanvas.offsetTop + ratioY * nextCanvasHeight - anchorInWrapY);
}

function handleCanvasTouchDown(event) {
  if (!state.pattern || event.pointerType !== "touch") return;
  event.preventDefault();
  els.canvasWrap.setPointerCapture?.(event.pointerId);
  els.canvasWrap.classList.add("is-touching");
  state.activePatternPointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

  if (state.activePatternPointers.size >= 2) {
    state.patternPan = null;
    beginPatternPinch();
  } else {
    state.patternPinch = null;
    state.patternPan = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      scrollLeft: els.canvasWrap.scrollLeft,
      scrollTop: els.canvasWrap.scrollTop,
    };
  }
}

function handleCanvasTouchMove(event) {
  if (event.pointerType !== "touch" || !state.activePatternPointers.has(event.pointerId)) return;
  event.preventDefault();
  state.activePatternPointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

  if (state.activePatternPointers.size >= 2) {
    const pair = getPatternPointerPair();
    if (!pair) return;
    if (!state.patternPinch) beginPatternPinch();
    const distance = getPointerDistance(pair[0], pair[1]);
    if (!distance || !state.patternPinch?.distance) return;
    const center = getPointerCenter(pair[0], pair[1]);
    setPatternZoom(state.patternPinch.zoom * (distance / state.patternPinch.distance), center.x, center.y);
    return;
  }

  if (!state.patternPan || state.patternPan.pointerId !== event.pointerId) return;
  els.canvasWrap.scrollLeft = state.patternPan.scrollLeft - (event.clientX - state.patternPan.startX);
  els.canvasWrap.scrollTop = state.patternPan.scrollTop - (event.clientY - state.patternPan.startY);
}

function handleCanvasTouchEnd(event) {
  if (event.pointerType !== "touch" || !state.activePatternPointers.has(event.pointerId)) return;
  state.activePatternPointers.delete(event.pointerId);
  els.canvasWrap.releasePointerCapture?.(event.pointerId);

  if (state.activePatternPointers.size >= 2) {
    beginPatternPinch();
    return;
  }

  state.patternPinch = null;
  if (state.activePatternPointers.size === 1) {
    const [pointerId, pointer] = state.activePatternPointers.entries().next().value;
    state.patternPan = {
      pointerId,
      startX: pointer.x,
      startY: pointer.y,
      scrollLeft: els.canvasWrap.scrollLeft,
      scrollTop: els.canvasWrap.scrollTop,
    };
    return;
  }

  state.patternPan = null;
  els.canvasWrap.classList.remove("is-touching");
}

function beginPatternPinch() {
  const pair = getPatternPointerPair();
  if (!pair) return;
  state.patternPinch = {
    distance: getPointerDistance(pair[0], pair[1]),
    zoom: state.zoom,
  };
}

function getPatternPointerPair() {
  const pointers = Array.from(state.activePatternPointers.values());
  if (pointers.length < 2) return null;
  return [pointers[0], pointers[1]];
}

function getPointerDistance(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function getPointerCenter(a, b) {
  return {
    x: (a.x + b.x) / 2,
    y: (a.y + b.y) / 2,
  };
}

function handlePointerDown(event) {
  if (!state.pattern) return;
  if (event.pointerType === "touch") return;
  event.preventDefault();
  state.isPainting = true;
  state.editSnapshotTaken = false;
  state.lastPaintKey = "";
  els.patternCanvas.setPointerCapture?.(event.pointerId);
  applyToolAtEvent(event);
}

function handlePointerMove(event) {
  if (!state.pattern) return;
  if (event.pointerType === "touch") return;
  const cell = getCellFromEvent(event);
  if (!cell) return;
  updateHoverReadout(cell.x, cell.y);
  if (!state.isPainting) return;
  applyToolAtEvent(event);
}

function handlePointerUp(event) {
  if (!state.pattern) return;
  if (event.pointerType === "touch") return;
  state.isPainting = false;
  state.lastPaintKey = "";
  state.editSnapshotTaken = false;
  els.patternCanvas.releasePointerCapture?.(event.pointerId);
}

function applyToolAtEvent(event) {
  const cell = getCellFromEvent(event);
  if (!cell) return;
  const key = `${cell.x}:${cell.y}`;
  if (key === state.lastPaintKey && state.selectedTool !== "fill") return;
  state.lastPaintKey = key;

  if (state.selectedTool === "eyedropper") {
    const pickedId = getCellColor(cell.x, cell.y);
    if (pickedId) {
      state.selectedColorId = pickedId;
      renderPaletteGrid();
      renderReplaceControls();
    }
    return;
  }

  if (state.selectedTool === "fill") {
    fillRegion(cell.x, cell.y, state.selectedColorId);
    return;
  }

  const nextId = state.selectedTool === "eraser" ? null : state.selectedColorId;
  setCellColor(cell.x, cell.y, nextId);
}

function getCellFromEvent(event) {
  const rect = els.patternCanvas.getBoundingClientRect();
  const scaleX = els.patternCanvas.width / rect.width;
  const scaleY = els.patternCanvas.height / rect.height;
  const x = Math.floor(((event.clientX - rect.left) * scaleX) / state.renderCellSize);
  const y = Math.floor(((event.clientY - rect.top) * scaleY) / state.renderCellSize);
  if (x < 0 || y < 0 || x >= state.pattern.width || y >= state.pattern.height) return null;
  return { x, y };
}

function getCellColor(x, y) {
  return state.pattern.cells[y * state.pattern.width + x];
}

function setCellColor(x, y, colorId) {
  const index = y * state.pattern.width + x;
  if (state.pattern.cells[index] === colorId) return;
  ensureHistorySnapshot();
  state.pattern.cells[index] = colorId;
  renderAllPatternState();
}

function fillRegion(startX, startY, colorId) {
  const targetId = getCellColor(startX, startY);
  if (targetId === colorId) return;
  ensureHistorySnapshot();
  const { width, height, cells } = state.pattern;
  const stack = [[startX, startY]];
  const seen = new Set();

  while (stack.length) {
    const [x, y] = stack.pop();
    if (x < 0 || y < 0 || x >= width || y >= height) continue;
    const key = `${x}:${y}`;
    if (seen.has(key)) continue;
    seen.add(key);
    const index = y * width + x;
    if (cells[index] !== targetId) continue;
    cells[index] = colorId;
    stack.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
  }

  renderAllPatternState();
}

function ensureHistorySnapshot() {
  if (state.editSnapshotTaken || !state.pattern) return;
  state.history.push(state.pattern.cells.slice());
  if (state.history.length > HISTORY_LIMIT) state.history.shift();
  state.future = [];
  state.editSnapshotTaken = true;
  updateUndoRedo();
}

function undo() {
  if (!state.pattern || !state.history.length) return;
  state.future.push(state.pattern.cells.slice());
  state.pattern.cells = state.history.pop();
  renderAllPatternState();
}

function redo() {
  if (!state.pattern || !state.future.length) return;
  state.history.push(state.pattern.cells.slice());
  state.pattern.cells = state.future.pop();
  renderAllPatternState();
}

function restoreGeneratedPattern() {
  if (!state.pattern || !state.generatedCells) {
    showToast(t("noPattern"));
    return;
  }
  if (isSameCells(state.pattern.cells, state.generatedCells)) return;
  state.history.push(state.pattern.cells.slice());
  if (state.history.length > HISTORY_LIMIT) state.history.shift();
  state.future = [];
  state.pattern.cells = state.generatedCells.slice();
  state.editSnapshotTaken = false;
  renderAllPatternState();
  showToast(t("restored"));
}

function updateUndoRedo() {
  els.undoButton.disabled = !state.history.length;
  els.redoButton.disabled = !state.future.length;
  els.restoreButton.disabled = !state.pattern || !state.generatedCells || isSameCells(state.pattern.cells, state.generatedCells);
}

function isSameCells(a, b) {
  if (!a || !b || a.length !== b.length) return false;
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function updateHoverReadout(x, y) {
  const colorId = getCellColor(x, y);
  const boardX = Math.floor(x / BOARD_SIZE);
  const boardY = Math.floor(y / BOARD_SIZE);
  const boardName = `${String.fromCharCode(65 + boardY)}${boardX + 1}`;
  if (!colorId) {
    els.hoverReadout.textContent = `${t("row")} ${y + 1}, ${t("col")} ${x + 1} · ${t("board")} ${boardName} · ${t("emptyCell")}`;
    return;
  }
  const beadColor = findColor(colorId);
  els.hoverReadout.textContent = `${t("row")} ${y + 1}, ${t("col")} ${x + 1} · ${t("board")} ${boardName} · ${beadColor.code} ${labelOf(beadColor.name)}`;
}

function renderPaletteGrid() {
  const fragment = document.createDocumentFragment();
  const palette = state.pattern?.palette || state.activePalette;
  for (const beadColor of palette) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "palette-swatch";
    button.dataset.colorId = beadColor.id;
    button.dataset.finish = t(beadColor.finish);
    button.style.background = beadColor.hex;
    button.textContent = shortCode(beadColor.code);
    button.title = `${beadColor.code} · ${labelOf(beadColor.name)}`;
    button.classList.toggle("is-light", isLight(beadColor.hex));
    button.classList.toggle("is-selected", beadColor.id === state.selectedColorId);
    fragment.appendChild(button);
  }
  els.paletteGrid.replaceChildren(fragment);
  const selected = findColor(state.selectedColorId);
  els.selectedColorLabel.textContent = selected ? `${selected.code} · ${labelOf(selected.name)}` : "-";
}

function computeMaterials() {
  if (!state.pattern) {
    state.materialRows = [];
    return;
  }
  const counts = new Map();
  for (const colorId of state.pattern.cells) {
    if (!colorId) continue;
    counts.set(colorId, (counts.get(colorId) || 0) + 1);
  }

  state.materialRows = [...counts.entries()]
    .map(([colorId, count]) => {
      const beadColor = findColor(colorId);
      const owned = Number(state.inventory[colorId] || 0);
      const missing = Math.max(0, count - owned);
      return {
        color: beadColor,
        count,
        owned,
        missing,
        packs: Math.ceil(missing / 1000),
        alternatives: nearestAlternatives(beadColor, state.activePalette, 3),
      };
    })
    .sort((a, b) => b.count - a.count);
}

function renderMaterials() {
  computeMaterials();
  if (!state.materialRows.length) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td colspan="8" class="table-empty">${escapeHtml(t("emptyMaterials"))}</td>`;
    els.materialsBody.replaceChildren(tr);
    els.shortageSummary.textContent = "-";
    return;
  }

  const fragment = document.createDocumentFragment();
  for (const row of state.materialRows) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>
        <div class="material-color">
          <i class="color-chip" style="background:${row.color.hex}"></i>
          <span>${escapeHtml(labelOf(row.color.name))}</span>
        </div>
      </td>
      <td>${escapeHtml(BRAND_LABELS[row.color.brand]?.[state.lang] || row.color.brand)}</td>
      <td>${escapeHtml(row.color.code)}</td>
      <td>${row.count}</td>
      <td><input class="inventory-input" data-color-id="${row.color.id}" type="number" min="0" value="${row.owned}" aria-label="${escapeHtml(row.color.code)} inventory" /></td>
      <td class="${row.missing > 0 ? "shortage" : "ok"}">${row.missing}</td>
      <td>${row.packs}</td>
      <td><div class="alternative-list">${row.alternatives.map(renderAltPill).join("") || t("none")}</div></td>
    `;
    fragment.appendChild(tr);
  }

  els.materialsBody.replaceChildren(fragment);
  const totalMissing = state.materialRows.reduce((sum, row) => sum + row.missing, 0);
  const totalPacks = state.materialRows.reduce((sum, row) => sum + row.packs, 0);
  els.shortageSummary.textContent = `${t("totalMissing")} ${totalMissing} · ${t("totalPacks")} ${totalPacks}`;
}

function renderAltPill(colorItem) {
  return `<span class="alt-pill"><i style="background:${colorItem.hex}"></i>${escapeHtml(colorItem.code)}</span>`;
}

function renderReplaceControls() {
  const usedColors = state.materialRows.map((row) => row.color);
  const fromOptions = usedColors.map((colorItem) => optionHtml(colorItem, colorItem.id === state.selectedColorId)).join("");
  const toPalette = state.pattern?.palette || state.activePalette;
  const toOptions = toPalette.map((colorItem) => optionHtml(colorItem, colorItem.id === state.selectedColorId)).join("");
  els.replaceFromSelect.innerHTML = fromOptions || `<option value="">${t("none")}</option>`;
  els.replaceToSelect.innerHTML = toOptions || `<option value="">${t("none")}</option>`;
}

function optionHtml(colorItem, selected) {
  return `<option value="${colorItem.id}" ${selected ? "selected" : ""}>${escapeHtml(colorItem.code)} · ${escapeHtml(labelOf(colorItem.name))}</option>`;
}

function replaceColor() {
  if (!state.pattern) {
    showToast(t("noPattern"));
    return;
  }
  const fromId = els.replaceFromSelect.value;
  const toId = els.replaceToSelect.value;
  if (!fromId || !toId || fromId === toId) return;
  let changed = 0;
  state.pattern.cells.forEach((colorId, index) => {
    if (colorId === fromId) {
      if (!changed) {
        state.history.push(state.pattern.cells.slice());
        if (state.history.length > HISTORY_LIMIT) state.history.shift();
        state.future = [];
      }
      state.pattern.cells[index] = toId;
      changed += 1;
    }
  });
  if (!changed) {
    showToast(t("nothingToReplace"));
    return;
  }
  state.selectedColorId = toId;
  renderAllPatternState();
  showToast(t("replaced"));
}

function updateStats() {
  if (!state.pattern) {
    els.totalBeads.textContent = "0";
    els.colorCount.textContent = "0";
    els.boardCount.textContent = "0";
    els.physicalSize.textContent = "0 x 0 mm";
    return;
  }

  const total = state.pattern.cells.filter(Boolean).length;
  const colors = new Set(state.pattern.cells.filter(Boolean)).size;
  const boardsX = Math.ceil(state.pattern.width / BOARD_SIZE);
  const boardsY = Math.ceil(state.pattern.height / BOARD_SIZE);
  const boardTotal = boardsX * boardsY;
  const beadSize = state.pattern.beadSizeMm;
  els.totalBeads.textContent = total.toLocaleString();
  els.colorCount.textContent = colors.toLocaleString();
  els.boardCount.textContent = `${boardsX}×${boardsY} / ${boardTotal}`;
  els.physicalSize.textContent = `${formatMm(state.pattern.width * beadSize)} × ${formatMm(state.pattern.height * beadSize)} mm`;
}

function exportPng() {
  if (!state.pattern) {
    showToast(t("noPattern"));
    return;
  }
  const exportCanvas = document.createElement("canvas");
  const maxExportSide = 4200;
  const exportCellSize = clampNumber(Math.floor(maxExportSide / Math.max(state.pattern.width, state.pattern.height)), 4, 18);
  drawPatternToCanvas(exportCanvas, {
    cellSize: exportCellSize,
    previewStyle: els.previewStyleSelect.value,
    showGrid: true,
    includeLabels: exportCellSize >= 12,
  });
  exportCanvas.toBlob((blob) => {
    if (!blob) return;
    downloadBlob(blob, `${state.pattern.name}-bead-pattern.png`);
    showToast(t("exportReady"));
  }, "image/png");
}

function exportCsv() {
  if (!state.pattern) {
    showToast(t("noPattern"));
    return;
  }
  computeMaterials();
  const rows = [
    ["Brand", "Code", "Name", "Hex", "Needed", "Owned", "Missing", "Packs", "Alternatives"],
    ...state.materialRows.map((row) => [
      BRAND_LABELS[row.color.brand]?.en || row.color.brand,
      row.color.code,
      row.color.name.en,
      row.color.hex,
      row.count,
      row.owned,
      row.missing,
      row.packs,
      row.alternatives.map((item) => item.code).join(" / "),
    ]),
  ];
  const csv = rows.map((row) => row.map(csvCell).join(",")).join("\r\n");
  downloadBlob(new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8" }), `${state.pattern.name}-materials.csv`);
  showToast(t("exportReady"));
}

function openPrintDocument() {
  if (!state.pattern) {
    showToast(t("noPattern"));
    return;
  }
  computeMaterials();
  const printWindow = window.open("", "_blank");
  if (!printWindow) return;
  printWindow.document.open();
  printWindow.document.write(buildPrintHtml());
  printWindow.document.close();
  printWindow.focus();
  if (new URLSearchParams(window.location.search).get("testNoPrint") === "1") {
    showToast(t("exportReady"));
    return;
  }
  window.setTimeout(() => printWindow.print(), 350);
}

function buildPrintHtml() {
  const pattern = state.pattern;
  const beadSize = pattern.beadSizeMm;
  const boardsX = Math.ceil(pattern.width / BOARD_SIZE);
  const boardsY = Math.ceil(pattern.height / BOARD_SIZE);
  const total = pattern.cells.filter(Boolean).length;
  const pages = [];

  pages.push(`
    <section class="page cover">
      <h1>${escapeHtml(t("printTitle"))}</h1>
      <p>${escapeHtml(pattern.name)}</p>
      <dl>
        <dt>${escapeHtml(t("size"))}</dt><dd>${pattern.width} × ${pattern.height} ${escapeHtml(t("beads"))}</dd>
        <dt>${escapeHtml(t("beadSpec"))}</dt><dd>${beadSize}mm · ${escapeHtml(BRAND_LABELS[pattern.brand]?.[state.lang] || pattern.brand)}</dd>
        <dt>${escapeHtml(t("beadTotal"))}</dt><dd>${total.toLocaleString()}</dd>
        <dt>${escapeHtml(t("colorTotal"))}</dt><dd>${state.materialRows.length}</dd>
        <dt>${escapeHtml(t("boardTotal"))}</dt><dd>${boardsX} × ${boardsY} = ${boardsX * boardsY}</dd>
      </dl>
      <strong>${escapeHtml(t("printHint"))}</strong>
    </section>
  `);

  for (let by = 0; by < boardsY; by += 1) {
    for (let bx = 0; bx < boardsX; bx += 1) {
      pages.push(buildBoardPrintPage(bx, by));
    }
  }

  pages.push(buildPrintMaterialPage());

  return `<!doctype html>
  <html lang="${state.lang === "zh" ? "zh-CN" : "en"}">
    <head>
      <meta charset="UTF-8" />
      <title>${escapeHtml(pattern.name)} - ${escapeHtml(t("printTitle"))}</title>
      <style>
        @page { size: A4; margin: 10mm; }
        * { box-sizing: border-box; }
        body { margin: 0; font-family: Arial, "Microsoft YaHei", sans-serif; color: #1d2420; }
        .page { break-after: page; page-break-after: always; min-height: 270mm; }
        .cover { display: grid; align-content: center; gap: 8mm; }
        h1 { margin: 0 0 4mm; font-size: 20pt; }
        h2 { margin: 0 0 4mm; font-size: 14pt; }
        p { margin: 0; }
        dl { display: grid; grid-template-columns: 36mm 1fr; gap: 3mm 6mm; margin: 0; }
        dt { color: #5e6962; font-weight: 700; }
        dd { margin: 0; font-weight: 700; }
        .board-meta { display: flex; justify-content: space-between; align-items: baseline; gap: 8mm; margin-bottom: 5mm; }
        .board-grid { display: grid; grid-template-columns: repeat(var(--cols), var(--cell-mm)); width: calc(var(--cols) * var(--cell-mm)); border: 0.2mm solid #1d2420; }
        .cell { width: var(--cell-mm); height: var(--cell-mm); border: 0.08mm solid rgba(0,0,0,0.28); display: grid; place-items: center; overflow: hidden; font-size: min(1.45mm, 5pt); line-height: 1; color: rgba(0,0,0,0.72); }
        .cell.empty { background: #fff; color: #999; }
        .materials-table { width: 100%; border-collapse: collapse; font-size: 9pt; }
        .materials-table th, .materials-table td { border-bottom: 0.15mm solid #d0d0d0; padding: 2mm; text-align: left; }
        .chip { display: inline-block; width: 4mm; height: 4mm; border: 0.12mm solid rgba(0,0,0,0.25); border-radius: 50%; vertical-align: middle; margin-right: 2mm; }
      </style>
    </head>
    <body>${pages.join("")}</body>
  </html>`;
}

function buildBoardPrintPage(boardX, boardY) {
  const pattern = state.pattern;
  const startX = boardX * BOARD_SIZE;
  const startY = boardY * BOARD_SIZE;
  const cols = Math.min(BOARD_SIZE, pattern.width - startX);
  const rows = Math.min(BOARD_SIZE, pattern.height - startY);
  const boardName = `${String.fromCharCode(65 + boardY)}${boardX + 1}`;
  const cellsHtml = [];

  for (let y = 0; y < rows; y += 1) {
    for (let x = 0; x < cols; x += 1) {
      const patternX = startX + x;
      const patternY = startY + y;
      const colorId = pattern.cells[patternY * pattern.width + patternX];
      if (!colorId) {
        cellsHtml.push(`<div class="cell empty">/</div>`);
        continue;
      }
      const beadColor = findColor(colorId);
      cellsHtml.push(`<div class="cell" style="background:${beadColor.hex}">${escapeHtml(shortCode(beadColor.code))}</div>`);
    }
  }

  return `
    <section class="page">
      <div class="board-meta">
        <h2>${escapeHtml(t("board"))} ${boardName}</h2>
        <p>${escapeHtml(t("boardRange"))}: X ${startX + 1}-${startX + cols}, Y ${startY + 1}-${startY + rows}</p>
      </div>
      <div class="board-grid" style="--cols:${cols}; --cell-mm:${pattern.beadSizeMm}mm">${cellsHtml.join("")}</div>
    </section>
  `;
}

function buildPrintMaterialPage() {
  const rows = state.materialRows
    .map(
      (row) => `
        <tr>
          <td><span class="chip" style="background:${row.color.hex}"></span>${escapeHtml(labelOf(row.color.name))}</td>
          <td>${escapeHtml(row.color.code)}</td>
          <td>${row.count}</td>
          <td>${row.owned}</td>
          <td>${row.missing}</td>
          <td>${row.packs}</td>
        </tr>
      `,
    )
    .join("");

  return `
    <section class="page">
      <h2>${escapeHtml(t("materialSheet"))}</h2>
      <table class="materials-table">
        <thead>
          <tr>
            <th>${escapeHtml(t("color"))}</th>
            <th>${escapeHtml(t("code"))}</th>
            <th>${escapeHtml(t("needed"))}</th>
            <th>${escapeHtml(t("owned"))}</th>
            <th>${escapeHtml(t("missing"))}</th>
            <th>${escapeHtml(t("packs"))}</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </section>
  `;
}

function findColor(colorId) {
  if (!colorId) return null;
  const pool = [
    ...(state.pattern?.palette || []),
    ...state.activePalette,
    ...Object.values(PALETTES).flat(),
  ];
  return pool.find((item) => item.id === colorId) || pool[0];
}

function nearestColor(rgb, palette) {
  const lab = rgbToLab(rgb.r, rgb.g, rgb.b);
  let best = palette[0];
  let bestDistance = Infinity;
  for (const beadColor of palette) {
    const distance = deltaE(lab, beadColor.lab);
    if (distance < bestDistance) {
      best = beadColor;
      bestDistance = distance;
    }
  }
  return best;
}

function nearestAlternatives(colorItem, palette, count) {
  return palette
    .filter((item) => item.id !== colorItem.id)
    .map((item) => ({ item, distance: deltaE(colorItem.lab, item.lab) }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, count)
    .map((entry) => entry.item);
}

function rgbToLab(r, g, b) {
  let rr = pivotRgb(r / 255);
  let gg = pivotRgb(g / 255);
  let bb = pivotRgb(b / 255);

  let x = rr * 0.4124 + gg * 0.3576 + bb * 0.1805;
  let y = rr * 0.2126 + gg * 0.7152 + bb * 0.0722;
  let z = rr * 0.0193 + gg * 0.1192 + bb * 0.9505;

  x = pivotXyz(x / 0.95047);
  y = pivotXyz(y / 1.0);
  z = pivotXyz(z / 1.08883);

  return {
    l: 116 * y - 16,
    a: 500 * (x - y),
    b: 200 * (y - z),
  };
}

function pivotRgb(value) {
  return value > 0.04045 ? ((value + 0.055) / 1.055) ** 2.4 : value / 12.92;
}

function pivotXyz(value) {
  return value > 0.008856 ? Math.cbrt(value) : 7.787 * value + 16 / 116;
}

function deltaE(a, b) {
  const dl = a.l - b.l;
  const da = a.a - b.a;
  const db = a.b - b.b;
  return Math.sqrt(dl * dl + da * da + db * db);
}

function hexToRgb(hex) {
  const clean = hex.replace("#", "");
  return {
    r: parseInt(clean.slice(0, 2), 16),
    g: parseInt(clean.slice(2, 4), 16),
    b: parseInt(clean.slice(4, 6), 16),
  };
}

function readableTextColor(hex) {
  return isLight(hex) ? "#18211c" : "#ffffff";
}

function isLight(hex) {
  const { r, g, b } = hexToRgb(hex);
  return (r * 299 + g * 587 + b * 114) / 1000 > 160;
}

function labelOf(name) {
  if (!name) return "";
  return name[state.lang] || name.zh || name.en || "";
}

function shortCode(code) {
  const cleaned = code.replace(/[^A-Za-z0-9]/g, "");
  return cleaned.length > 4 ? cleaned.slice(-4) : cleaned;
}

function syncPresetState() {
  const current = `${els.widthInput.value}x${els.heightInput.value}`;
  $$(".preset-button").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.size === current);
  });
}

function formatBytes(bytes) {
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function formatMm(value) {
  return Number.isInteger(value) ? String(value) : value.toFixed(1);
}

function clampNumber(value, min, max) {
  if (Number.isNaN(value)) return min;
  return Math.min(max, Math.max(min, value));
}

function clampByte(value) {
  return Math.max(0, Math.min(255, Math.round(value)));
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function csvCell(value) {
  const text = String(value ?? "");
  return /[",\r\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function loadInventory() {
  try {
    return JSON.parse(localStorage.getItem("perler-bead-tools.inventory") || "{}");
  } catch {
    return {};
  }
}

function saveInventory() {
  localStorage.setItem("perler-bead-tools.inventory", JSON.stringify(state.inventory));
}

function showToast(message) {
  let toast = $(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

function loadDemoImage() {
  const canvas = document.createElement("canvas");
  canvas.width = 320;
  canvas.height = 220;
  const demoCtx = canvas.getContext("2d");
  demoCtx.fillStyle = "#ffffff";
  demoCtx.fillRect(0, 0, canvas.width, canvas.height);
  const swatches = ["#d83437", "#ffd338", "#159b72", "#2685c7", "#8053a9"];
  swatches.forEach((hex, index) => {
    demoCtx.fillStyle = hex;
    demoCtx.beginPath();
    demoCtx.arc(56 + index * 52, 72 + (index % 2) * 46, 36, 0, Math.PI * 2);
    demoCtx.fill();
  });
  demoCtx.fillStyle = "#202124";
  demoCtx.fillRect(96, 152, 132, 30);
  canvas.toBlob((blob) => {
    if (!blob) return;
    handleFile(new File([blob], "demo-beads.png", { type: "image/png" }));
  }, "image/png");
}
