export interface PropDef {
  name: string;
  type: string;
  default?: string;
  description: string;
  required: boolean;
}

export interface ComponentMeta {
  slug: string;
  name: string;
  nameJa: string;
  category: string;
  description: string;
  tags: string[];
  status: "stable" | "beta" | "experimental";
  props: PropDef[];
}

export const categories = [
  { id: "hud", name: "HUD Elements", nameJa: "HUD要素", icon: "\u2B21" },
  { id: "panels", name: "Panels", nameJa: "パネル", icon: "\u25A3" },
  { id: "data", name: "Data Display", nameJa: "データ表示", icon: "\u25C8" },
  { id: "controls", name: "Controls", nameJa: "コントロール", icon: "\u25C9" },
  { id: "navigation", name: "Navigation", nameJa: "ナビゲーション", icon: "\u25C7" },
  { id: "feedback", name: "Feedback", nameJa: "フィードバック", icon: "\u25B3" },
  { id: "typography", name: "Typography", nameJa: "タイポグラフィ", icon: "\u25A4" },
  { id: "decorative", name: "Decorative", nameJa: "装飾", icon: "\u2726" },
] as const;

export type CategoryId = (typeof categories)[number]["id"];

export const components: ComponentMeta[] = [
  // HUD
  {
    slug: "hud-frame",
    name: "HUD Frame",
    nameJa: "HUDフレーム",
    category: "hud",
    description: "SVGコーナーブラケットとセンターティック付きのHUDスタイルフレーム。タイトルとステータス表示対応。",
    tags: ["frame", "hud", "container"],
    status: "stable",
    props: [
      { name: "title", type: "string", default: '"HUD"', description: "上部タイトル", required: false },
      { name: "status", type: "string", description: "下部ステータステキスト", required: false },
    ],
  },
  {
    slug: "hud-reticle",
    name: "HUD Reticle",
    nameJa: "HUDレティクル",
    category: "hud",
    description: "回転リングとクロスヘア付きの照準器型HUD要素。データ読み取り表示とスロット対応。",
    tags: ["reticle", "crosshair", "targeting", "svg"],
    status: "stable",
    props: [
      { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "サイズ", required: false },
      { name: "animated", type: "boolean", default: "true", description: "回転アニメーション", required: false },
    ],
  },
  {
    slug: "hud-compass",
    name: "HUD Compass",
    nameJa: "HUDコンパス",
    category: "hud",
    description: "方位を表示するストリップ型コンパスHUD。自動回転アニメーション付き。",
    tags: ["compass", "heading", "navigation"],
    status: "beta",
    props: [
      { name: "heading", type: "number", default: "0", description: "初期方位角 (度)", required: false },
    ],
  },
  // Panels
  {
    slug: "glass-panel",
    name: "Glass Panel",
    nameJa: "グラスパネル",
    category: "panels",
    description: "半透明のグラスモーフィズムコンテナ。背景ぼかしとネオンボーダー、コーナー装飾付き。",
    tags: ["container", "glass", "backdrop-blur"],
    status: "stable",
    props: [
      { name: "variant", type: '"default" | "alert" | "danger" | "holo" | "bio"', default: '"default"', description: "カラーバリアント", required: false },
      { name: "glow", type: "boolean", default: "false", description: "グロー効果の有無", required: false },
      { name: "corners", type: "boolean", default: "true", description: "コーナー装飾の有無", required: false },
    ],
  },
  {
    slug: "holo-card",
    name: "Holo Card",
    nameJa: "ホロカード",
    category: "panels",
    description: "ホログラフィックシマーエフェクト付きカード。ホバー時に虹色の光沢が走る。",
    tags: ["card", "holographic", "shimmer"],
    status: "stable",
    props: [
      { name: "title", type: "string", description: "カードタイトル", required: false },
    ],
  },
  {
    slug: "terminal-panel",
    name: "Terminal Panel",
    nameJa: "ターミナルパネル",
    category: "panels",
    description: "タイトルバーとスキャンライン付きのターミナル風パネル。",
    tags: ["terminal", "console", "cli"],
    status: "stable",
    props: [
      { name: "title", type: "string", default: '"TERMINAL"', description: "タイトルバーテキスト", required: false },
    ],
  },
  // Data Display
  {
    slug: "stat-counter",
    name: "Stat Counter",
    nameJa: "統計カウンター",
    category: "data",
    description: "アニメーション付き数値カウンター。表示領域に入ると0からカウントアップ。",
    tags: ["counter", "number", "animation"],
    status: "stable",
    props: [
      { name: "value", type: "number", description: "目標値", required: true },
      { name: "label", type: "string", description: "ラベル", required: true },
      { name: "unit", type: "string", description: "単位", required: false },
      { name: "decimals", type: "number", default: "0", description: "小数点以下桁数", required: false },
    ],
  },
  {
    slug: "progress-arc",
    name: "Progress Arc",
    nameJa: "プログレスアーク",
    category: "data",
    description: "SVG円弧型プログレスインジケーター。ティックマーク付き。",
    tags: ["progress", "circular", "svg"],
    status: "stable",
    props: [
      { name: "value", type: "number", description: "現在値", required: true },
      { name: "max", type: "number", default: "100", description: "最大値", required: false },
      { name: "label", type: "string", description: "ラベル", required: false },
      { name: "variant", type: '"default" | "alert" | "danger" | "status"', default: '"default"', description: "カラーバリアント", required: false },
    ],
  },
  {
    slug: "radar-sweep",
    name: "Radar Sweep",
    nameJa: "レーダースイープ",
    category: "data",
    description: "Three.jsによる3Dレーダーディスプレイ。スイープライン回転とブリップ表示。",
    tags: ["radar", "3d", "three.js", "sweep"],
    status: "stable",
    props: [
      { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "サイズ", required: false },
      { name: "blips", type: "Array<{angle, distance, label?}>", description: "ブリップデータ", required: false },
    ],
  },
  {
    slug: "holo-globe",
    name: "Holo Globe",
    nameJa: "ホログローブ",
    category: "data",
    description: "Three.jsによる3Dワイヤフレーム地球儀。マウスインタラクション対応。",
    tags: ["globe", "3d", "three.js", "earth", "wireframe"],
    status: "stable",
    props: [
      { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "サイズ", required: false },
    ],
  },
  {
    slug: "holo-object",
    name: "Holo Object",
    nameJa: "ホロオブジェクト",
    category: "data",
    description: "Three.jsによる3Dワイヤフレーム幾何学オブジェクト。4種の形状から選択可能。マウスで回転操作。",
    tags: ["3d", "three.js", "wireframe", "geometry"],
    status: "stable",
    props: [
      { name: "shape", type: '"torus" | "icosahedron" | "octahedron" | "torusKnot"', default: '"icosahedron"', description: "形状", required: false },
      { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "サイズ", required: false },
      { name: "color", type: "string", default: '"#00d4e5"', description: "カラー(HEX)", required: false },
    ],
  },
  {
    slug: "waveform-display",
    name: "Waveform Display",
    nameJa: "波形ディスプレイ",
    category: "data",
    description: "アニメーション波形バー表示。複数の正弦波を合成したリアルタイム波形。",
    tags: ["waveform", "audio", "bars", "animation"],
    status: "stable",
    props: [
      { name: "bars", type: "number", default: "32", description: "バー数", required: false },
      { name: "animated", type: "boolean", default: "true", description: "アニメーション", required: false },
    ],
  },
  {
    slug: "data-grid",
    name: "Data Grid",
    nameJa: "データグリッド",
    category: "data",
    description: "SF風スタイリングのデータテーブル。ストライプ行とホバーエフェクト付き。",
    tags: ["table", "grid", "data"],
    status: "stable",
    props: [
      { name: "columns", type: "string[]", description: "列ヘッダー", required: true },
      { name: "rows", type: "string[][]", description: "行データ", required: true },
    ],
  },
  {
    slug: "holo-ring",
    name: "Holo Ring",
    nameJa: "ホロリング",
    category: "data",
    description: "Three.jsによる3D同心円回転リングインターフェース。複数のアーク、ティックマーク、データポイント付き。マウスで視点操作。",
    tags: ["3d", "three.js", "ring", "holographic", "hud"],
    status: "stable",
    props: [
      { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "サイズ", required: false },
      { name: "color", type: "string", default: '"#00d4e5"', description: "カラー(HEX)", required: false },
    ],
  },
  {
    slug: "arc-reactor",
    name: "Arc Reactor",
    nameJa: "アークリアクター",
    category: "data",
    description: "Three.jsによるアイアンマン風アークリアクター。三角セグメント、エネルギーアーク、パルスコア付き。マウスで傾き操作。",
    tags: ["3d", "three.js", "reactor", "iron-man", "energy"],
    status: "stable",
    props: [
      { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "サイズ", required: false },
      { name: "color", type: "string", default: '"#00d4e5"', description: "カラー(HEX)", required: false },
    ],
  },
  {
    slug: "holo-terrain",
    name: "Holo Terrain",
    nameJa: "ホロテレイン",
    category: "data",
    description: "Three.jsによるワイヤフレーム3D地形ビジュアライゼーション。波状アニメーション地形とスキャンライン付き。",
    tags: ["3d", "three.js", "terrain", "wireframe", "landscape"],
    status: "stable",
    props: [
      { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "高さサイズ", required: false },
      { name: "color", type: "string", default: '"#00d4e5"', description: "カラー(HEX)", required: false },
    ],
  },
  {
    slug: "warp-tunnel",
    name: "Warp Tunnel",
    nameJa: "ワープトンネル",
    category: "data",
    description: "Three.jsによるワープスピード/ハイパースペース風トンネルエフェクト。ストリーミングパーティクルとリング構造。",
    tags: ["3d", "three.js", "tunnel", "warp", "hyperspace"],
    status: "stable",
    props: [
      { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "高さサイズ", required: false },
      { name: "color", type: "string", default: '"#00d4e5"', description: "カラー(HEX)", required: false },
      { name: "speed", type: "number", default: "1", description: "速度倍率", required: false },
    ],
  },
  {
    slug: "hud-orbit",
    name: "HUD Orbit",
    nameJa: "HUDオービット",
    category: "data",
    description: "Three.jsによる3D軌道表示。異なる傾きの軌道リングに衛星が周回。マウスで視点操作。",
    tags: ["3d", "three.js", "orbit", "satellite", "hud"],
    status: "stable",
    props: [
      { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "サイズ", required: false },
      { name: "color", type: "string", default: '"#00d4e5"', description: "カラー(HEX)", required: false },
    ],
  },
  // Controls
  {
    slug: "neon-button",
    name: "Neon Button",
    nameJa: "ネオンボタン",
    category: "controls",
    description: "グローエフェクト付きのネオン風ボタン。5色バリアントと3サイズ対応。",
    tags: ["button", "neon", "glow", "interactive"],
    status: "stable",
    props: [
      { name: "variant", type: '"default" | "alert" | "danger" | "status" | "holo"', default: '"default"', description: "カラーバリアント", required: false },
      { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "サイズ", required: false },
      { name: "href", type: "string", description: "リンクURL (設定するとaタグになる)", required: false },
    ],
  },
  {
    slug: "holo-toggle",
    name: "Holo Toggle",
    nameJa: "ホロトグル",
    category: "controls",
    description: "グリッドパターン付きのSF風トグルスイッチ。グロー状態遷移。",
    tags: ["toggle", "switch", "interactive"],
    status: "stable",
    props: [
      { name: "label", type: "string", description: "ラベル", required: false },
      { name: "checked", type: "boolean", default: "false", description: "初期状態", required: false },
    ],
  },
  {
    slug: "cyber-slider",
    name: "Cyber Slider",
    nameJa: "サイバースライダー",
    category: "controls",
    description: "ティックマーク付きのSF風レンジスライダー。リアルタイム値表示。",
    tags: ["slider", "range", "input", "interactive"],
    status: "stable",
    props: [
      { name: "label", type: "string", description: "ラベル", required: false },
      { name: "min", type: "number", default: "0", description: "最小値", required: false },
      { name: "max", type: "number", default: "100", description: "最大値", required: false },
      { name: "value", type: "number", default: "50", description: "初期値", required: false },
      { name: "unit", type: "string", default: '"%"', description: "単位", required: false },
    ],
  },
  // Navigation
  {
    slug: "hud-nav",
    name: "HUD Nav",
    nameJa: "HUDナビ",
    category: "navigation",
    description: "HUD風の水平ナビゲーションバー。アクティブ状態のグロー表示。",
    tags: ["navigation", "navbar", "menu"],
    status: "stable",
    props: [
      { name: "items", type: "Array<{label, href, active?}>", description: "ナビ項目", required: true },
    ],
  },
  // Feedback
  {
    slug: "status-indicator",
    name: "Status Indicator",
    nameJa: "ステータスインジケーター",
    category: "feedback",
    description: "パルスアニメーション付きのステータスドット。4つの状態表示。",
    tags: ["status", "indicator", "dot", "pulse"],
    status: "stable",
    props: [
      { name: "status", type: '"online" | "warning" | "error" | "offline"', default: '"online"', description: "状態", required: false },
      { name: "label", type: "string", description: "ラベル (未指定時はステータス名)", required: false },
      { name: "pulse", type: "boolean", default: "true", description: "パルスアニメーション", required: false },
    ],
  },
  {
    slug: "alert-banner",
    name: "Alert Banner",
    nameJa: "アラートバナー",
    category: "feedback",
    description: "アイコン付きのアラート/通知バナー。閉じるボタン対応。",
    tags: ["alert", "notification", "banner"],
    status: "stable",
    props: [
      { name: "variant", type: '"info" | "warning" | "danger"', default: '"info"', description: "バリアント", required: false },
      { name: "dismissible", type: "boolean", default: "false", description: "閉じるボタンの有無", required: false },
    ],
  },
  {
    slug: "loading-spinner",
    name: "Loading Spinner",
    nameJa: "ローディングスピナー",
    category: "feedback",
    description: "二重回転リングとティックマーク付きのローディングインジケーター。",
    tags: ["loading", "spinner", "progress"],
    status: "stable",
    props: [
      { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "サイズ", required: false },
      { name: "label", type: "string", description: "ラベル", required: false },
    ],
  },
  // Typography
  {
    slug: "glitch-text",
    name: "Glitch Text",
    nameJa: "グリッチテキスト",
    category: "typography",
    description: "赤/シアンのクリッピングアニメーションによるグリッチエフェクトテキスト。",
    tags: ["glitch", "text", "animation", "effect"],
    status: "stable",
    props: [
      { name: "text", type: "string", description: "表示テキスト", required: true },
      { name: "tag", type: '"h1" | "h2" | "h3" | "span" | "p"', default: '"h2"', description: "HTMLタグ", required: false },
    ],
  },
  {
    slug: "typewriter",
    name: "TypeWriter",
    nameJa: "タイプライター",
    category: "typography",
    description: "タイプライター風テキストアニメーション。複数行をループ表示。",
    tags: ["typewriter", "typing", "animation", "text"],
    status: "stable",
    props: [
      { name: "lines", type: "string[]", description: "表示するテキスト行の配列", required: true },
      { name: "prefix", type: "string", default: '">_"', description: "プロンプトプレフィックス", required: false },
    ],
  },
  {
    slug: "holo-heading",
    name: "Holo Heading",
    nameJa: "ホロ見出し",
    category: "typography",
    description: "テキストシャドウグローとグラデーションアンダーライン付きの見出し。",
    tags: ["heading", "title", "glow"],
    status: "stable",
    props: [
      { name: "tag", type: '"h1" | "h2" | "h3"', default: '"h2"', description: "HTMLタグ", required: false },
    ],
  },
  // Decorative
  {
    slug: "particle-field",
    name: "Particle Field",
    nameJa: "パーティクルフィールド",
    category: "decorative",
    description: "Three.jsによる3Dパーティクルフィールド。近接パーティクル間のライン接続付き。",
    tags: ["particles", "3d", "three.js", "background"],
    status: "stable",
    props: [
      { name: "count", type: "number", default: "200", description: "パーティクル数", required: false },
      { name: "color", type: "string", default: '"#00d4e5"', description: "カラー(HEX)", required: false },
      { name: "speed", type: "number", default: "0.3", description: "移動速度", required: false },
    ],
  },
  {
    slug: "scan-line",
    name: "Scan Line",
    nameJa: "スキャンライン",
    category: "decorative",
    description: "画面を走査するスキャンラインオーバーレイ。速度調整可能。",
    tags: ["scanline", "overlay", "effect"],
    status: "stable",
    props: [
      { name: "speed", type: '"slow" | "normal" | "fast"', default: '"normal"', description: "走査速度", required: false },
    ],
  },
  {
    slug: "grid-overlay",
    name: "Grid Overlay",
    nameJa: "グリッドオーバーレイ",
    category: "decorative",
    description: "SF風のグリッド背景オーバーレイ。密度調整可能。",
    tags: ["grid", "overlay", "background"],
    status: "stable",
    props: [
      { name: "density", type: '"sparse" | "normal" | "dense"', default: '"normal"', description: "グリッド密度", required: false },
    ],
  },
  {
    slug: "circuit-pattern",
    name: "Circuit Pattern",
    nameJa: "回路パターン",
    category: "decorative",
    description: "SVGパターンによる回路基板風の装飾背景。",
    tags: ["circuit", "pattern", "background", "svg"],
    status: "stable",
    props: [],
  },
];

export function getComponentsByCategory(categoryId: string): ComponentMeta[] {
  return components.filter((c) => c.category === categoryId);
}

export function getCategory(categoryId: string) {
  return categories.find((c) => c.id === categoryId);
}
