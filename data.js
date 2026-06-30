/* eslint-disable */
// エレクトロニクスⅠ ビジュアル用語データ

const categories = [
  { id: "all", name: "すべて" },
  { id: "charge", name: "電子・電荷" },
  { id: "resistor", name: "抵抗・回路" },
  { id: "magnetic", name: "磁気" },
  { id: "ac", name: "交流" },
  { id: "law", name: "法則" },
];

const comparisons = [
  {
    id: "voltage-family",
    title: "電圧・電位・電位差・電圧降下・起電力 ― ぜんぶ単位は[V]だけど…",
    headers: ["用語", "意味（一言）", "向き／符号", "イメージ"],
    rows: [
      ["電圧 V", "電流を流す力", "+", "水を押し出す圧力"],
      ["電位 V", "ある点の電気的な高さ", "+/-", "海抜・標高"],
      ["電位差 V", "2点の電位の差", "高→低へ電流", "2地点の標高差"],
      ["電圧降下 V", "抵抗を通って電位が下がる量", "−（下がる）", "水路で水位が落ちる"],
      ["起電力 E", "電位を上げ続ける力", "+（押し上げ）", "ポンプで水を持ち上げる"],
    ],
  },
  {
    id: "electron-family",
    title: "電子 vs 自由電子 ― どっちも電子だけど動けるかが違う",
    headers: ["用語", "場所", "動けるか", "電気を運ぶか"],
    rows: [
      ["電子", "原子核の周り（決まった軌道）", "△ 縛られている", "そのままでは運ばない"],
      ["自由電子", "金属内をふらふら", "○ 自由に動ける", "○ 電流の正体"],
    ],
  },
  {
    id: "magnetic-three",
    title: "磁界の強さH・磁束Φ・磁束密度B ― 似てて混乱しがち",
    headers: ["用語", "記号/単位", "意味", "例え"],
    rows: [
      ["磁界の強さ", "H [A/m]", "+1[Wb]に働く力（磁石の元気度）", "扇風機の風の強さ"],
      ["磁束", "Φ [Wb]", "磁力線の本数の合計", "風で流れる空気の総量"],
      ["磁束密度", "B [T]", "1m²あたりの磁束（密度）", "風が当たる面の風圧"],
    ],
  },
  {
    id: "reactance",
    title: "誘導性リアクタンス X_L vs 容量性リアクタンス X_C",
    headers: ["項目", "コイル（X_L）", "コンデンサ（X_C）"],
    rows: [
      ["式", "X_L = 2πfL", "X_C = 1 / (2πfC)"],
      ["電流の位相", "電圧より π/2 遅れる", "電圧より π/2 進む"],
      ["周波数fが大きいと", "通しにくい（X_L大）", "通しやすい（X_C小）"],
      ["直流(f=0)では", "ただの導線（0Ω）", "切れている（∞Ω）"],
      ["イメージ", "重い水車（急には回らない）", "バネ付きピストン（先に動く）"],
    ],
  },
  {
    id: "series-parallel",
    title: "直列回路 vs 並列回路",
    headers: ["項目", "直列", "並列"],
    rows: [
      ["電流", "どこも同じ", "枝で分かれる（和が幹）"],
      ["電圧", "分かれる（和が全体）", "どの枝も同じ"],
      ["合成抵抗", "R₁+R₂+…（足し算）", "1/R = 1/R₁+1/R₂+…"],
      ["ベクトル基準", "電流基準（共通だから）", "電圧基準（共通だから）"],
      ["例え", "細い水路を直列につなぐ", "並んだ水路に分かれる"],
    ],
  },
];

const terms = [];

// SVG helper: 中央寄せ用ラッパ（未使用なら無視）

// ===== 1. 電子 =====
terms.push({
  id: "electron", no: 1, name: "電子", category: "charge",
  oneLiner: "原子核のまわりをグルグルまわっている、マイナスの電気を持った小さな粒",
  meaning: "電子（electron）は原子を作っている部品のひとつで、マイナスの電気を持っています。原子の中心には『原子核』があり、そのまわりを電子が回っている — 太陽のまわりの惑星のようなイメージです。",
  principle: "原子核には『陽子（プラス）』があり、プラスとマイナスは引き合うので、電子は核から離れずに軌道を回り続けます。電子の数=陽子の数のとき、原子はぜんぶでプラマイ0（中性）になります。",
  svg: `
<svg viewBox="0 0 400 240" role="img" aria-label="原子の構造">
  <defs>
    <radialGradient id="nucleus" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#fca5a5"/>
      <stop offset="100%" stop-color="#ef4444"/>
    </radialGradient>
  </defs>
  <!-- 軌道 -->
  <ellipse cx="200" cy="120" rx="140" ry="50" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <ellipse cx="200" cy="120" rx="90" ry="80" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <!-- 原子核 -->
  <circle cx="200" cy="120" r="22" fill="url(#nucleus)"/>
  <text x="200" y="125" text-anchor="middle" font-size="12" fill="#fff" font-weight="700">+</text>
  <text x="200" y="160" text-anchor="middle" font-size="11" fill="#475569">原子核（＋）</text>
  <!-- 電子1 -->
  <g>
    <circle cx="340" cy="120" r="9" fill="#3b82f6">
      <animateTransform attributeName="transform" type="rotate" from="0 200 120" to="360 200 120" dur="4s" repeatCount="indefinite"/>
    </circle>
    <text x="340" y="124" text-anchor="middle" font-size="10" fill="#fff" font-weight="700">−</text>
  </g>
  <!-- 電子2 -->
  <g>
    <circle cx="200" cy="40" r="9" fill="#3b82f6">
      <animateTransform attributeName="transform" type="rotate" from="180 200 120" to="540 200 120" dur="3s" repeatCount="indefinite"/>
    </circle>
  </g>
  <text x="290" y="40" font-size="12" fill="#3b82f6" font-weight="700">電子（−）</text>
  <text x="200" y="220" text-anchor="middle" font-size="11" fill="#64748b">電子は核のまわりを回っている</text>
</svg>`,
  mistakes: [
    "「電子＝電流」ではない。電流は電子の流れであって、電子そのものではありません。",
    "電子は『プラス』ではなく『マイナス』の電気を持っています。",
  ],
  related: [
    { id: "free-electron", diff: "電子のうち、原子から離れて自由に動けるようになったものが『自由電子』。" },
    { id: "charge", diff: "電子6.24×10¹⁸個分のマイナス電気が −1[C]（電荷）。" },
  ],
});

// ===== 2. 自由電子 =====
terms.push({
  id: "free-electron", no: 2, name: "自由電子", category: "charge",
  oneLiner: "原子から離れて、金属の中をふらふら自由に動き回れる電子",
  meaning: "金属（銅やアルミなど）の中では、いちばん外側の電子が原子核からゆるくしか縛られていません。そのため少しの力で原子から離れて、金属内を自由に動き回ります。これが『自由電子』です。",
  principle: "金属は原子がぎっしり並んだ結晶。外側の電子は『どの原子のものでもない共有財産』のような状態で、金属の中をプカプカ漂います。電池をつなぐと、この自由電子が一斉に同じ向きに動き出し、これが電流になります。",
  svg: `
<svg viewBox="0 0 400 220" role="img" aria-label="金属中の自由電子">
  <!-- 金属の外枠 -->
  <rect x="20" y="40" width="360" height="140" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="200" y="30" text-anchor="middle" font-size="12" fill="#78350f" font-weight="700">金属の中</text>
  <!-- 原子核 (格子) -->
  ${[60,140,220,300].map(x => [70,130,170].map(y => `<g><circle cx="${x}" cy="${y}" r="10" fill="#ef4444"/><text x="${x}" y="${y+4}" text-anchor="middle" font-size="10" fill="#fff" font-weight="700">+</text></g>`).join("")).join("")}
  <!-- 自由電子 (動き) -->
  <g fill="#3b82f6">
    <circle cx="100" cy="100" r="7">
      <animate attributeName="cx" values="100;180;120;100" dur="3s" repeatCount="indefinite"/>
      <animate attributeName="cy" values="100;140;90;100" dur="3s" repeatCount="indefinite"/>
    </circle>
    <circle cx="200" cy="110" r="7">
      <animate attributeName="cx" values="200;260;180;200" dur="2.5s" repeatCount="indefinite"/>
      <animate attributeName="cy" values="110;90;150;110" dur="2.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="280" cy="100" r="7">
      <animate attributeName="cx" values="280;220;320;280" dur="3.2s" repeatCount="indefinite"/>
      <animate attributeName="cy" values="100;150;110;100" dur="3.2s" repeatCount="indefinite"/>
    </circle>
  </g>
  <text x="200" y="205" text-anchor="middle" font-size="11" fill="#475569">青い粒＝自由電子。動き回っている</text>
</svg>`,
  mistakes: [
    "電池をつないでないときも自由電子はランダムに動いている。ただし全方向バラバラなので電流は0。",
    "プラスチック（絶縁体）には自由電子がほぼないので電気が流れません。",
  ],
  related: [
    { id: "electron", diff: "電子のうち、原子に縛られていない『動ける版』が自由電子。" },
    { id: "current", diff: "自由電子が一方向に流れる現象が電流。" },
    { id: "conductor", diff: "自由電子がたくさんある物質が導体。" },
  ],
});

// ===== 3. 電荷 Q =====
terms.push({
  id: "charge", no: 3, name: "電荷 Q [C]", category: "charge",
  oneLiner: "電気の『量』そのもの。電子6.24×10¹⁸個分のマイナス電気＝−1クーロン[C]",
  meaning: "電荷（charge）は『電気の量』を表します。単位はクーロン[C]。電子1個の電荷は約 −1.6×10⁻¹⁹[C] と非常に小さいので、6.24×10¹⁸個も集まってやっと1[C]になります。",
  principle: "電気は数えられる粒（電子）でできているので、その個数が電気の量＝電荷です。プラスの電荷とマイナスの電荷が同じ量だけあれば、見かけ上は『電気を帯びていない』状態になります。",
  svg: `
<svg viewBox="0 0 400 220" role="img" aria-label="電荷の概念">
  <!-- 箱A: 電子1個 -->
  <rect x="20" y="40" width="160" height="140" rx="8" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="100" y="30" text-anchor="middle" font-size="12" font-weight="700" fill="#1e40af">電子1個</text>
  <circle cx="100" cy="110" r="14" fill="#3b82f6"/>
  <text x="100" y="115" text-anchor="middle" font-size="14" fill="#fff" font-weight="700">−</text>
  <text x="100" y="160" text-anchor="middle" font-size="11" fill="#1e3a8a">−1.6×10⁻¹⁹ [C]</text>
  <!-- 矢印 -->
  <text x="200" y="115" font-size="20" font-weight="700" fill="#475569">×6.24×10¹⁸個</text>
  <text x="200" y="135" font-size="20" font-weight="700" fill="#475569">↓</text>
  <!-- 箱B: 1C -->
  <rect x="220" y="40" width="160" height="140" rx="8" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="300" y="30" text-anchor="middle" font-size="12" font-weight="700" fill="#92400e">合計</text>
  <text x="300" y="115" text-anchor="middle" font-size="36" font-weight="700" fill="#92400e">−1 [C]</text>
  <text x="300" y="160" text-anchor="middle" font-size="11" fill="#78350f">1クーロン</text>
</svg>`,
  formula: { expr: "Q = n × e", plain: "電荷Q = 電子の個数n × 電気素量e（≒1.6×10⁻¹⁹[C]）" },
  mistakes: [
    "電荷と電流は別物。電荷は『量』、電流は『1秒あたりに通る電荷の量（流量）』。",
    "1[C]は実はかなり大きな量。家庭の電線でも数秒で1[C]が流れます。",
  ],
  related: [
    { id: "current", diff: "1秒あたりに通る電荷の量が電流 I = Q/t。" },
    { id: "capacitor", diff: "電荷を蓄える部品がコンデンサ。" },
  ],
});

// ===== 4. 電流 I =====
terms.push({
  id: "current", no: 4, name: "電流 I [A]", category: "charge",
  oneLiner: "電荷の流れ。1秒間に1[C]の電荷が通ると1[A]（アンペア）",
  meaning: "電流（current）は電気の『流れ』のこと。電線の中を自由電子がぞろぞろ動くと、それが電流です。1秒間に1[C]の電荷が通ったときの電流が1[A]。",
  principle: "電線の両端に電圧をかけると、自由電子がマイナスからプラスへ向かって動き出します。慣習的に『電流の向き』はプラスからマイナス（電子の動きの逆）と決められています。歴史的な決まりごとなので覚えてしまうのが楽です。",
  svg: `
<svg viewBox="0 0 400 200" role="img" aria-label="電流のイメージ">
  <!-- 電線 -->
  <rect x="20" y="80" width="360" height="50" rx="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <!-- +/- ラベル -->
  <text x="35" y="70" font-size="14" font-weight="700" fill="#ef4444">＋</text>
  <text x="365" y="70" font-size="14" font-weight="700" fill="#3b82f6">−</text>
  <!-- 電子の流れ（左へ） -->
  <g fill="#3b82f6">
    <circle cx="80" cy="105" r="8"><animate attributeName="cx" values="380;20" dur="3s" repeatCount="indefinite"/></circle>
    <circle cx="180" cy="105" r="8"><animate attributeName="cx" values="380;20" dur="3s" begin="0.6s" repeatCount="indefinite"/></circle>
    <circle cx="280" cy="105" r="8"><animate attributeName="cx" values="380;20" dur="3s" begin="1.2s" repeatCount="indefinite"/></circle>
    <circle cx="120" cy="105" r="8"><animate attributeName="cx" values="380;20" dur="3s" begin="1.8s" repeatCount="indefinite"/></circle>
    <circle cx="220" cy="105" r="8"><animate attributeName="cx" values="380;20" dur="3s" begin="2.4s" repeatCount="indefinite"/></circle>
  </g>
  <!-- 矢印: 電子（左） -->
  <path d="M 280 50 L 120 50" stroke="#3b82f6" stroke-width="3" marker-end="url(#a-blue)"/>
  <text x="200" y="40" text-anchor="middle" font-size="11" fill="#3b82f6">電子の動き</text>
  <!-- 矢印: 電流（右） -->
  <path d="M 120 170 L 280 170" stroke="#ef4444" stroke-width="3" marker-end="url(#a-red)"/>
  <text x="200" y="190" text-anchor="middle" font-size="11" fill="#ef4444">電流の向き（逆！）</text>
  <defs>
    <marker id="a-blue" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#3b82f6"/></marker>
    <marker id="a-red" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#ef4444"/></marker>
  </defs>
</svg>`,
  formula: { expr: "I = Q / t", plain: "電流I[A] = 電荷Q[C] ÷ 時間t[秒]。要するに『1秒あたりに通った電気の量』。" },
  mistakes: [
    "電流の向きと電子の向きは逆。歴史的決まりごと。",
    "電線の中を『電気が光速で走っている』のではなく、電子はゆっくり動く。信号（電界）が速く伝わるだけ。",
  ],
  related: [
    { id: "charge", diff: "電流は電荷の流量。電荷の蛇口を1秒間ひねった量が電流。" },
    { id: "voltage", diff: "電圧は電流を流す『力』。電圧があるから電流が流れる。" },
    { id: "resistance", diff: "抵抗は電流の流れにくさ。" },
  ],
});

// ===== 5. 抵抗 R =====
terms.push({
  id: "resistance", no: 5, name: "抵抗 R [Ω]", category: "resistor",
  oneLiner: "電流の流れを邪魔するもの。値が大きいほど流れにくい",
  meaning: "抵抗（resistance）は、電流をどれくらい流しにくいかを表します。単位はオーム[Ω]。同じ電圧でも、抵抗が大きいと電流は少ししか流れません。",
  principle: "金属の中を動く自由電子は、原子の格子にぶつかりながら進みます。このぶつかりが『邪魔』＝抵抗の正体。細い線・長い線・温度が高い線ほど、ぶつかる回数が増えて抵抗が大きくなります。",
  svg: `
<svg viewBox="0 0 400 220" role="img" aria-label="抵抗のイメージ">
  <!-- 電線 -->
  <rect x="20" y="90" width="360" height="40" rx="6" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <!-- 抵抗（ジグザグ） -->
  <polyline points="160,110 170,90 185,130 200,90 215,130 230,90 240,110" fill="none" stroke="#0f172a" stroke-width="3"/>
  <text x="200" y="80" text-anchor="middle" font-size="11" fill="#0f172a" font-weight="700">抵抗 R</text>
  <!-- 原子格子（抵抗部にぎっしり） -->
  <g fill="#94a3b8">
    <circle cx="170" cy="120" r="4"/><circle cx="190" cy="120" r="4"/>
    <circle cx="210" cy="120" r="4"/><circle cx="230" cy="120" r="4"/>
    <circle cx="180" cy="105" r="4"/><circle cx="220" cy="105" r="4"/>
  </g>
  <!-- 電子 -->
  <g fill="#3b82f6">
    <circle cx="60" cy="110" r="7"><animate attributeName="cx" values="20;380" dur="4s" repeatCount="indefinite"/></circle>
    <circle cx="100" cy="110" r="7"><animate attributeName="cx" values="20;380" dur="4s" begin="0.8s" repeatCount="indefinite"/></circle>
  </g>
  <text x="100" y="170" text-anchor="middle" font-size="11" fill="#475569">電子は原子にぶつかりながら進む</text>
  <text x="200" y="200" text-anchor="middle" font-size="11" fill="#ef4444">→ぶつかり回数が多いほど抵抗大</text>
</svg>`,
  formula: { expr: "R = V / I", plain: "オームの法則の変形。電圧Vを流れる電流Iで割ると抵抗Rがわかる。" },
  mistakes: [
    "抵抗は『電気を消す』のではなく『電流を制限する』もの。エネルギーは熱に変わる。",
    "抵抗0でも電流が無限になるわけではない（電源側にも内部抵抗がある）。",
  ],
  related: [
    { id: "resistivity", diff: "抵抗率ρは『その物質固有の流れにくさ』。抵抗Rは形状込みの値。" },
    { id: "conductance", diff: "コンダクタンスGは抵抗の逆数（1/R）。流れやすさ。" },
    { id: "ohms-law", diff: "電圧・電流・抵抗の関係を表す法則。" },
  ],
});
// ===== 6. 電圧 V =====
terms.push({
  id: "voltage", no: 6, name: "電圧 V [V]", category: "charge",
  oneLiner: "電流を流そうとする『押す力』。水で言うと水圧",
  meaning: "電圧（voltage）は、回路に電流を流そうとする力のこと。単位はボルト[V]。電圧が大きいほど、電流が強く流れます。",
  principle: "電池やコンセントが回路の両端に『電気的な高低差』を作ります。水道のホースで例えると、ホースの両端に高低差（水圧）があると水が流れるのと同じ。電気では、この『電気的な高低差』が電圧です。",
  svg: `
<svg viewBox="0 0 400 240" role="img" aria-label="電圧を水圧でたとえる">
  <!-- 高い水槽 -->
  <rect x="30" y="30" width="80" height="100" fill="#3b82f6" opacity=".6" stroke="#1e40af" stroke-width="2"/>
  <text x="70" y="20" text-anchor="middle" font-size="11" fill="#1e40af" font-weight="700">高い水槽（＋）</text>
  <!-- 低い水槽 -->
  <rect x="290" y="160" width="80" height="40" fill="#3b82f6" opacity=".6" stroke="#1e40af" stroke-width="2"/>
  <text x="330" y="220" text-anchor="middle" font-size="11" fill="#1e40af" font-weight="700">低い水槽（−）</text>
  <!-- パイプ -->
  <path d="M 110 100 L 200 100 L 200 180 L 290 180" fill="none" stroke="#0ea5e9" stroke-width="20" stroke-linecap="round" opacity=".4"/>
  <!-- 水の流れ -->
  <g fill="#0284c7">
    <circle cx="130" cy="100" r="5"><animate attributeName="cx" values="120;200" dur="2s" repeatCount="indefinite"/></circle>
    <circle cx="200" cy="140" r="5"><animate attributeName="cy" values="100;180" dur="2s" repeatCount="indefinite"/></circle>
    <circle cx="230" cy="180" r="5"><animate attributeName="cx" values="200;290" dur="2s" repeatCount="indefinite"/></circle>
  </g>
  <!-- 高低差矢印 -->
  <path d="M 150 50 L 150 175" stroke="#ef4444" stroke-width="2" stroke-dasharray="4 2"/>
  <path d="M 145 170 L 150 180 L 155 170" fill="none" stroke="#ef4444" stroke-width="2"/>
  <text x="160" y="115" font-size="13" fill="#ef4444" font-weight="700">電圧 V</text>
  <text x="160" y="130" font-size="10" fill="#ef4444">（高低差）</text>
  <text x="200" y="230" text-anchor="middle" font-size="11" fill="#475569">電圧が大きい＝高低差が大きい＝水（電流）がたくさん流れる</text>
</svg>`,
  formula: { expr: "V = I × R", plain: "オームの法則。電圧V = 電流I × 抵抗R。電流が多いほど、抵抗が大きいほど、電圧降下も大きい。" },
  mistakes: [
    "電圧は『流れているもの』ではなく『流す力』。電池に電線をつながなくても電圧はある。",
    "感電するかどうかは電圧の大きさよりも『流れる電流』で決まる。",
  ],
  related: [
    { id: "potential", diff: "電位はある1点の『高さ』。電圧は2点間の『高低差』。" },
    { id: "emf", diff: "起電力は電池が生み出す電圧。電圧降下は抵抗で消費される電圧。" },
    { id: "potential-diff", diff: "電位差は電圧とほぼ同じ意味だが、回路で『電流の方向を決める高低差』のニュアンス。" },
  ],
});

// ===== 7. 電位 V =====
terms.push({
  id: "potential", no: 7, name: "電位 V [V]", category: "charge",
  oneLiner: "回路上のある1点の『電気的な高さ』。基準点（0V）からどれだけ上か",
  meaning: "電位（potential）は、回路のある場所の『高さ』のようなもの。基準点（普通はマイナス端子やGND）を0[V]とし、そこから何ボルト高いかを示します。",
  principle: "山の高さに例えるとわかりやすい。海面=0mを基準にして『この場所は標高1500m』というように、電気の世界でも『この点はGNDから5V高い』と表します。電位そのものに方向はなく、ある1点に対する数値です。",
  svg: `
<svg viewBox="0 0 400 240" role="img" aria-label="電位を山の高さでたとえる">
  <!-- 地面 -->
  <line x1="20" y1="200" x2="380" y2="200" stroke="#0f172a" stroke-width="2"/>
  <text x="20" y="220" font-size="11" fill="#475569">基準（GND）= 0V</text>
  <!-- 山 -->
  <path d="M 50 200 L 130 80 L 220 130 L 320 50 L 380 200 Z" fill="#a7f3d0" stroke="#10b981" stroke-width="2"/>
  <!-- 点A -->
  <circle cx="130" cy="80" r="6" fill="#ef4444"/>
  <text x="130" y="70" text-anchor="middle" font-size="12" fill="#ef4444" font-weight="700">A点</text>
  <line x1="130" y1="80" x2="130" y2="200" stroke="#ef4444" stroke-dasharray="3 2"/>
  <text x="140" y="145" font-size="11" fill="#ef4444">電位 8V</text>
  <!-- 点B -->
  <circle cx="320" cy="50" r="6" fill="#3b82f6"/>
  <text x="320" y="40" text-anchor="middle" font-size="12" fill="#3b82f6" font-weight="700">B点</text>
  <line x1="320" y1="50" x2="320" y2="200" stroke="#3b82f6" stroke-dasharray="3 2"/>
  <text x="330" y="135" font-size="11" fill="#3b82f6">電位 12V</text>
  <!-- 差 -->
  <text x="200" y="20" text-anchor="middle" font-size="11" fill="#475569">A点とB点の差が『電圧（電位差）』= 4V</text>
</svg>`,
  mistakes: [
    "電位は『2点の差』ではなく『ある1点の値』。差を表したいときは電圧や電位差を使う。",
    "基準点（0V）の場所が変われば、電位の数値も全部ズレる。",
  ],
  related: [
    { id: "voltage", diff: "電圧は2点の電位の差。電位は1点の高さ。" },
    { id: "potential-diff", diff: "電位差は電位の差で、電圧とほぼ同義。" },
    { id: "emf", diff: "起電力は電池がポンプのように電位を上げる力。" },
  ],
});

// ===== 8. 起電力 E =====
terms.push({
  id: "emf", no: 8, name: "起電力 E [V]", category: "charge",
  oneLiner: "電池がエネルギーを使って電位を『持ち上げる』力",
  meaning: "起電力（electromotive force）は、電池や発電機が回路に与える電圧のこと。電気的な高低差を作って、電流を流し続ける『電気ポンプ』のような働きをします。単位はV（ボルト）。",
  principle: "電池の中では化学反応が起きていて、マイナス側からプラス側へ電荷を強制的にくみ上げます。これによって電位差が生まれ、外の回路に電流が流れます。水で言うとポンプ、地形で言うとエスカレーター。",
  svg: `
<svg viewBox="0 0 400 240" role="img" aria-label="起電力＝電気ポンプ">
  <!-- 電池 -->
  <rect x="30" y="80" width="80" height="100" fill="#fef3c7" stroke="#f59e0b" stroke-width="2" rx="6"/>
  <text x="70" y="70" text-anchor="middle" font-size="11" fill="#92400e" font-weight="700">電池（E）</text>
  <!-- + - -->
  <text x="50" y="120" font-size="16" fill="#ef4444" font-weight="700">＋</text>
  <text x="85" y="160" font-size="16" fill="#3b82f6" font-weight="700">−</text>
  <!-- ポンプアイコン -->
  <circle cx="70" cy="130" r="22" fill="#fff" stroke="#f59e0b" stroke-width="2"/>
  <path d="M 60 130 L 70 115 L 80 130" fill="none" stroke="#10b981" stroke-width="3"/>
  <text x="70" y="148" text-anchor="middle" font-size="10" fill="#10b981">汲み上げ</text>
  <!-- 回路（外側） -->
  <path d="M 110 100 L 350 100 L 350 200 L 110 200" fill="none" stroke="#0f172a" stroke-width="3"/>
  <!-- 抵抗 -->
  <rect x="220" y="90" width="60" height="20" fill="#fff" stroke="#0f172a" stroke-width="2"/>
  <text x="250" y="80" text-anchor="middle" font-size="11" fill="#475569">抵抗R</text>
  <!-- 電流の向き -->
  <path d="M 130 100 L 200 100" stroke="#ef4444" stroke-width="2" marker-end="url(#a8r)"/>
  <path d="M 290 100 L 340 100" stroke="#ef4444" stroke-width="2" marker-end="url(#a8r)"/>
  <path d="M 340 200 L 200 200" stroke="#ef4444" stroke-width="2" marker-end="url(#a8r)"/>
  <path d="M 200 200 L 130 200" stroke="#ef4444" stroke-width="2" marker-end="url(#a8r)"/>
  <text x="230" y="225" text-anchor="middle" font-size="11" fill="#ef4444">電流（プラス→マイナス）</text>
  <defs>
    <marker id="a8r" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#ef4444"/></marker>
  </defs>
</svg>`,
  mistakes: [
    "起電力は『電池そのものが持っている能力』。回路をつないでいなくても起電力はある。",
    "電池の表示電圧（1.5V等）は理想的な起電力。実際は内部抵抗で少し下がる。",
  ],
  related: [
    { id: "voltage-drop", diff: "起電力は電位を『上げる』力、電圧降下は抵抗で電位が『下がる』量。逆の関係。" },
    { id: "voltage", diff: "起電力は電池側、電圧は回路上のあちこちで測れる電位差。" },
    { id: "kirchhoff2", diff: "キルヒホッフ第二法則『起電力の総和＝電圧降下の総和』の主役。" },
  ],
});

// ===== 9. 電圧降下 =====
terms.push({
  id: "voltage-drop", no: 9, name: "電圧降下 V [V]", category: "charge",
  oneLiner: "抵抗を通ると電位が下がる、その『下がった分』",
  meaning: "電圧降下（voltage drop）は、抵抗などの部品を電流が通るときに、両端の電位が下がる量のこと。下がった分だけ電気エネルギーが熱や光に変わっています。",
  principle: "電流が抵抗の中を通ると、自由電子が原子にぶつかってエネルギーを失います。失ったエネルギー分だけ、抵抗の出口側の電位が低くなる — これが電圧降下です。オームの法則 V=IR で計算できます。",
  svg: `
<svg viewBox="0 0 400 240" role="img" aria-label="電圧降下">
  <!-- 階段（電位の高さ） -->
  <polyline points="40,50 140,50 140,120 240,120 240,190 360,190" fill="none" stroke="#3b82f6" stroke-width="3"/>
  <!-- 階段ステップラベル -->
  <text x="90" y="40" text-anchor="middle" font-size="12" fill="#1e40af" font-weight="700">12V</text>
  <text x="190" y="110" text-anchor="middle" font-size="12" fill="#1e40af" font-weight="700">8V</text>
  <text x="300" y="180" text-anchor="middle" font-size="12" fill="#1e40af" font-weight="700">0V</text>
  <!-- 抵抗R1, R2 -->
  <rect x="120" y="60" width="40" height="50" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="140" y="90" text-anchor="middle" font-size="11" fill="#92400e">R1</text>
  <rect x="220" y="130" width="40" height="50" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
  <text x="240" y="160" text-anchor="middle" font-size="11" fill="#92400e">R2</text>
  <!-- 下降矢印 -->
  <path d="M 100 50 L 100 110" stroke="#ef4444" stroke-width="2" marker-end="url(#a9d)"/>
  <text x="80" y="85" text-anchor="middle" font-size="11" fill="#ef4444">↓4V</text>
  <path d="M 200 120 L 200 180" stroke="#ef4444" stroke-width="2" marker-end="url(#a9d)"/>
  <text x="180" y="155" text-anchor="middle" font-size="11" fill="#ef4444">↓8V</text>
  <!-- 電子 -->
  <circle cx="60" cy="50" r="7" fill="#3b82f6">
    <animate attributeName="cx" values="40;140;140;240;240;360" dur="4s" repeatCount="indefinite"/>
    <animate attributeName="cy" values="50;50;120;120;190;190" dur="4s" repeatCount="indefinite"/>
  </circle>
  <text x="200" y="220" text-anchor="middle" font-size="11" fill="#475569">抵抗を通るたびに電位が階段状に下がる</text>
  <defs>
    <marker id="a9d" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#ef4444"/></marker>
  </defs>
</svg>`,
  formula: { expr: "V = I × R", plain: "電圧降下は流れている電流Iと抵抗Rの積で決まる。" },
  mistakes: [
    "電圧降下は『電圧が消えた』のではなく、エネルギーが熱や光などに変換された量。",
    "符号注意：起電力はプラス方向、電圧降下はマイナス方向で扱う。",
  ],
  related: [
    { id: "emf", diff: "起電力は『上げる』、電圧降下は『下げる』。1周すれば総和は等しい（キルヒホッフ第二）。" },
    { id: "voltage", diff: "電圧降下も電圧の一種だが、抵抗で消費される分を特に指す。" },
  ],
});

// ===== 10. 電位差 =====
terms.push({
  id: "potential-diff", no: 10, name: "電位差 V [V]", category: "charge",
  oneLiner: "2点間の電位の差。電位差があるところでは高いほうから低いほうへ電流が流れる",
  meaning: "電位差（potential difference）は、回路の2つの場所の電位の差です。電位差が0でなければ、高い方から低い方へ電流が流れます。実質的に『電圧』と同じ意味で使うことが多い。",
  principle: "標高1500mの山と標高500mの平地の差が1000mであるのと同じく、電気でも『A点の電位 − B点の電位』が電位差。差があれば、水のように電流（電子）は『高きから低きへ』流れます。",
  svg: `
<svg viewBox="0 0 400 240" role="img" aria-label="電位差">
  <!-- 高所A -->
  <rect x="40" y="50" width="100" height="60" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
  <text x="90" y="40" text-anchor="middle" font-size="12" fill="#b91c1c" font-weight="700">A点 12V</text>
  <!-- 低所B -->
  <rect x="260" y="150" width="100" height="40" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
  <text x="310" y="210" text-anchor="middle" font-size="12" fill="#1e40af" font-weight="700">B点 4V</text>
  <!-- 矢印 -->
  <path d="M 140 90 Q 200 90 200 170 L 260 170" fill="none" stroke="#ef4444" stroke-width="3" marker-end="url(#a10r)"/>
  <text x="200" y="125" text-anchor="middle" font-size="12" fill="#ef4444" font-weight="700">電流の向き</text>
  <!-- 高低差 -->
  <line x1="180" y1="60" x2="180" y2="170" stroke="#10b981" stroke-width="2" stroke-dasharray="4 2"/>
  <text x="190" y="115" font-size="13" fill="#10b981" font-weight="700">電位差</text>
  <text x="190" y="130" font-size="11" fill="#10b981">12 − 4 = 8V</text>
  <defs>
    <marker id="a10r" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#ef4444"/></marker>
  </defs>
</svg>`,
  formula: { expr: "V_AB = V_A − V_B", plain: "A点とB点の電位差は、それぞれの電位の引き算。" },
  mistakes: [
    "電位差は『どちらから引くか』で符号が変わる。回路では普通『高いほう − 低いほう』。",
    "電流が流れていなくても電位差は存在する（電池をつないだだけの開回路など）。",
  ],
  related: [
    { id: "voltage", diff: "電圧と電位差はほぼ同義。文脈によって呼び方が違うだけ。" },
    { id: "potential", diff: "電位は1点の値、電位差はその引き算。" },
    { id: "ohms-law", diff: "電位差／抵抗＝電流（オームの法則の本質）。" },
  ],
});
// ===== 11. 導体 =====
terms.push({
  id: "conductor", no: 11, name: "導体", category: "charge",
  oneLiner: "自由電子がたくさんいて、電気を通しやすい物質",
  meaning: "導体（conductor）は、銅・アルミ・鉄など、電流をよく通す物質。原子の中の電子の一部が自由に動ける『自由電子』として豊富に存在するため、電圧をかけるとすぐに電流が流れます。",
  principle: "金属の原子は規則正しく並び、原子核と内側の電子は固定されていますが、一番外側の電子は『みんなで共有』の状態。電圧をかけると、この自由電子が一斉に流れて電流が生まれます。",
  svg: `
<svg viewBox="0 0 400 200" role="img" aria-label="導体の中の自由電子">
  <rect x="20" y="40" width="360" height="120" fill="#fde68a" stroke="#f59e0b" stroke-width="2" rx="8"/>
  <text x="200" y="30" text-anchor="middle" font-size="13" fill="#92400e" font-weight="700">導体（銅・アルミなど）</text>
  <!-- 原子核 -->
  <g fill="#ef4444">
    <circle cx="70" cy="100" r="10"/><circle cx="140" cy="100" r="10"/>
    <circle cx="210" cy="100" r="10"/><circle cx="280" cy="100" r="10"/><circle cx="350" cy="100" r="10"/>
  </g>
  <text x="70" y="105" text-anchor="middle" font-size="9" fill="#fff">＋</text>
  <text x="140" y="105" text-anchor="middle" font-size="9" fill="#fff">＋</text>
  <text x="210" y="105" text-anchor="middle" font-size="9" fill="#fff">＋</text>
  <text x="280" y="105" text-anchor="middle" font-size="9" fill="#fff">＋</text>
  <text x="350" y="105" text-anchor="middle" font-size="9" fill="#fff">＋</text>
  <!-- 自由電子（うじゃうじゃ） -->
  <g fill="#3b82f6">
    <circle cx="40" cy="70" r="5"><animate attributeName="cx" values="40;380;40" dur="3s" repeatCount="indefinite"/></circle>
    <circle cx="100" cy="130" r="5"><animate attributeName="cx" values="100;380;100" dur="3.5s" repeatCount="indefinite"/></circle>
    <circle cx="170" cy="70" r="5"><animate attributeName="cx" values="170;380;170" dur="2.8s" repeatCount="indefinite"/></circle>
    <circle cx="240" cy="130" r="5"><animate attributeName="cx" values="240;380;240" dur="3.2s" repeatCount="indefinite"/></circle>
    <circle cx="310" cy="70" r="5"><animate attributeName="cx" values="310;380;310" dur="3s" repeatCount="indefinite"/></circle>
  </g>
  <text x="200" y="185" text-anchor="middle" font-size="11" fill="#475569">青い点（自由電子）が動き回る → 電流が流れやすい</text>
</svg>`,
  mistakes: [
    "『導体＝金属』だけではない。塩水や黒鉛なども導体。",
    "導体でも温度が上がると抵抗は増える（自由電子が原子にぶつかりやすくなる）。",
  ],
  related: [
    { id: "insulator", diff: "絶縁体は自由電子がほとんどいない。導体は多い。" },
    { id: "free-electron", diff: "自由電子は導体に大量にある。" },
    { id: "resistivity", diff: "抵抗率が小さいほど導体性が高い。" },
  ],
});

// ===== 12. 絶縁体 =====
terms.push({
  id: "insulator", no: 12, name: "絶縁体", category: "charge",
  oneLiner: "自由電子がほぼ0で、電気を通しにくい物質",
  meaning: "絶縁体（insulator）は、ゴム・プラスチック・ガラス・空気など、電流をほとんど通さない物質。原子に電子がしっかり捕まっていて、自由に動ける電子がほぼ無いため、電圧をかけても電流は流れません。",
  principle: "絶縁体の電子は原子核から強く束縛されており、ちょっとやそっとの電圧では動けません。だから電線の被覆や、コンセントのプラスチック部分に使われます。極端に大きな電圧（雷など）をかけると、電子が無理やり剥がされて『絶縁破壊』が起きます。",
  svg: `
<svg viewBox="0 0 400 200" role="img" aria-label="絶縁体の中の電子">
  <rect x="20" y="40" width="360" height="120" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" rx="8"/>
  <text x="200" y="30" text-anchor="middle" font-size="13" fill="#0369a1" font-weight="700">絶縁体（ゴム・ガラスなど）</text>
  <!-- 原子（原子核＋電子の軌道） -->
  <g>
    <g><circle cx="80" cy="100" r="22" fill="none" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 2"/>
       <circle cx="80" cy="100" r="8" fill="#ef4444"/>
       <circle cx="102" cy="100" r="5" fill="#3b82f6"/></g>
    <g><circle cx="200" cy="100" r="22" fill="none" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 2"/>
       <circle cx="200" cy="100" r="8" fill="#ef4444"/>
       <circle cx="222" cy="100" r="5" fill="#3b82f6"/></g>
    <g><circle cx="320" cy="100" r="22" fill="none" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3 2"/>
       <circle cx="320" cy="100" r="8" fill="#ef4444"/>
       <circle cx="342" cy="100" r="5" fill="#3b82f6"/></g>
  </g>
  <!-- 鎖イメージ -->
  <text x="80" y="155" text-anchor="middle" font-size="10" fill="#0369a1">⛓ しっかり束縛</text>
  <text x="200" y="155" text-anchor="middle" font-size="10" fill="#0369a1">⛓ しっかり束縛</text>
  <text x="320" y="155" text-anchor="middle" font-size="10" fill="#0369a1">⛓ しっかり束縛</text>
  <text x="200" y="185" text-anchor="middle" font-size="11" fill="#475569">電子は原子核にがっちり捕まり、動けない → 電流が流れない</text>
</svg>`,
  mistakes: [
    "『絶縁体＝完全に流れない』ではない。十分な電圧では絶縁破壊が起こる。",
    "湿った状態では絶縁体でも電気を通すことがある（水と不純物が導電する）。",
  ],
  related: [
    { id: "conductor", diff: "導体は自由電子が多い、絶縁体は少ない（ほぼ0）。" },
    { id: "dielectric-polarization", diff: "絶縁体に電圧をかけると分極する性質はある。" },
    { id: "capacitor", diff: "コンデンサは絶縁体を挟んで電気をためる部品。" },
  ],
});

// ===== 13. 分極現象 =====
terms.push({
  id: "polarization", no: 13, name: "分極現象", category: "charge",
  oneLiner: "中性なのに、表面が＋と−に分かれて見える現象",
  meaning: "分極（polarization）は、もともと電気的に中性な物体が、外から電界を受けて、内部の電荷がわずかに偏り、表面が＋と−に分かれたように見える現象です。",
  principle: "原子の中で、外から＋の電荷が近づくと、内部の電子（−）が＋側に少し引き寄せられ、原子全体が『＋側＝−、−側＝＋』に偏ります。物質全体としては中性のままですが、表面だけ見ると分極しています。",
  svg: `
<svg viewBox="0 0 400 220" role="img" aria-label="分極現象">
  <!-- 外部電荷 -->
  <circle cx="40" cy="110" r="20" fill="#ef4444"/>
  <text x="40" y="116" text-anchor="middle" font-size="16" fill="#fff" font-weight="700">＋</text>
  <text x="40" y="155" text-anchor="middle" font-size="10" fill="#475569">近づける</text>
  <!-- 矢印 -->
  <path d="M 65 110 L 100 110" stroke="#ef4444" stroke-width="2" marker-end="url(#a13)"/>
  <!-- 物体 -->
  <rect x="120" y="50" width="240" height="120" fill="#e0f2fe" stroke="#0284c7" stroke-width="2" rx="6"/>
  <text x="240" y="40" text-anchor="middle" font-size="12" fill="#0369a1" font-weight="700">中性の物体（絶縁体や導体）</text>
  <!-- 表面の− -->
  <g fill="#3b82f6">
    <circle cx="140" cy="80" r="8"/><circle cx="140" cy="110" r="8"/><circle cx="140" cy="140" r="8"/>
  </g>
  <text x="140" y="85" text-anchor="middle" font-size="11" fill="#fff" font-weight="700">−</text>
  <text x="140" y="115" text-anchor="middle" font-size="11" fill="#fff" font-weight="700">−</text>
  <text x="140" y="145" text-anchor="middle" font-size="11" fill="#fff" font-weight="700">−</text>
  <!-- 表面の＋ -->
  <g fill="#ef4444">
    <circle cx="340" cy="80" r="8"/><circle cx="340" cy="110" r="8"/><circle cx="340" cy="140" r="8"/>
  </g>
  <text x="340" y="85" text-anchor="middle" font-size="11" fill="#fff" font-weight="700">＋</text>
  <text x="340" y="115" text-anchor="middle" font-size="11" fill="#fff" font-weight="700">＋</text>
  <text x="340" y="145" text-anchor="middle" font-size="11" fill="#fff" font-weight="700">＋</text>
  <!-- 内部の中性 -->
  <text x="240" y="115" text-anchor="middle" font-size="11" fill="#475569">内部はまだ中性</text>
  <text x="240" y="205" text-anchor="middle" font-size="11" fill="#475569">表面の電荷は『見かけ』のもの。物体全体は中性のまま。</text>
  <defs>
    <marker id="a13" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#ef4444"/></marker>
  </defs>
</svg>`,
  mistakes: [
    "分極＝『電荷が移動した』ではなく『偏った』だけ。物体全体の電荷は変化しない。",
    "外から電界が無くなれば、ほとんどの分極は元に戻る。",
  ],
  related: [
    { id: "dielectric-polarization", diff: "誘電分極は分極の中でも特に絶縁体内部で起きるもの。" },
    { id: "capacitor", diff: "コンデンサの中の絶縁体は分極によって電気を蓄える性能が上がる。" },
  ],
});

// ===== 14. 誘電分極 =====
terms.push({
  id: "dielectric-polarization", no: 14, name: "誘電分極", category: "charge",
  oneLiner: "絶縁体の中で原子レベルの＋−が並んで、表面に電荷が現れる",
  meaning: "誘電分極（dielectric polarization）は、絶縁体（誘電体）に電界をかけたとき、内部の原子や分子が＋−の方向にきれいに並び、表面に電荷が現れる現象。コンデンサの原理に欠かせない働きです。",
  principle: "絶縁体には自由電子はないが、原子内部では電子がほんの少し動けます。外から電界をかけると、各原子で電子が一方に偏り、それが連鎖して『＋−＋−』が綺麗に並びます。結果、外側の表面に電荷が現れ、内部の電界は弱められます。",
  svg: `
<svg viewBox="0 0 400 220" role="img" aria-label="誘電分極">
  <!-- ＋極板 -->
  <rect x="20" y="40" width="20" height="140" fill="#ef4444"/>
  <text x="30" y="30" text-anchor="middle" font-size="14" fill="#ef4444" font-weight="700">＋</text>
  <!-- −極板 -->
  <rect x="360" y="40" width="20" height="140" fill="#3b82f6"/>
  <text x="370" y="30" text-anchor="middle" font-size="14" fill="#3b82f6" font-weight="700">−</text>
  <!-- 絶縁体 -->
  <rect x="60" y="50" width="280" height="120" fill="#fef3c7" stroke="#f59e0b" stroke-width="2" rx="4"/>
  <text x="200" y="35" text-anchor="middle" font-size="12" fill="#92400e" font-weight="700">絶縁体（誘電体）</text>
  <!-- 原子分極（−＋ の対が並ぶ） -->
  <g font-size="14" font-weight="700">
    <g><circle cx="90" cy="80" r="9" fill="#3b82f6"/><text x="90" y="85" text-anchor="middle" fill="#fff">−</text>
       <circle cx="120" cy="80" r="9" fill="#ef4444"/><text x="120" y="85" text-anchor="middle" fill="#fff">＋</text></g>
    <g><circle cx="170" cy="80" r="9" fill="#3b82f6"/><text x="170" y="85" text-anchor="middle" fill="#fff">−</text>
       <circle cx="200" cy="80" r="9" fill="#ef4444"/><text x="200" y="85" text-anchor="middle" fill="#fff">＋</text></g>
    <g><circle cx="250" cy="80" r="9" fill="#3b82f6"/><text x="250" y="85" text-anchor="middle" fill="#fff">−</text>
       <circle cx="280" cy="80" r="9" fill="#ef4444"/><text x="280" y="85" text-anchor="middle" fill="#fff">＋</text></g>
    <g><circle cx="90" cy="140" r="9" fill="#3b82f6"/><text x="90" y="145" text-anchor="middle" fill="#fff">−</text>
       <circle cx="120" cy="140" r="9" fill="#ef4444"/><text x="120" y="145" text-anchor="middle" fill="#fff">＋</text></g>
    <g><circle cx="170" cy="140" r="9" fill="#3b82f6"/><text x="170" y="145" text-anchor="middle" fill="#fff">−</text>
       <circle cx="200" cy="140" r="9" fill="#ef4444"/><text x="200" y="145" text-anchor="middle" fill="#fff">＋</text></g>
    <g><circle cx="250" cy="140" r="9" fill="#3b82f6"/><text x="250" y="145" text-anchor="middle" fill="#fff">−</text>
       <circle cx="280" cy="140" r="9" fill="#ef4444"/><text x="280" y="145" text-anchor="middle" fill="#fff">＋</text></g>
  </g>
  <text x="200" y="205" text-anchor="middle" font-size="11" fill="#475569">原子内の＋−が外部電界に合わせて整列 → 絶縁体の表面に電荷が出る</text>
</svg>`,
  mistakes: [
    "誘電分極では電荷は原子内でわずかに動くだけ。電流のように流れるわけではない。",
    "完全な真空では誘電分極は起きない（原子がないため）。",
  ],
  related: [
    { id: "polarization", diff: "分極現象の中でも、特に絶縁体内部で起こるのが誘電分極。" },
    { id: "capacitance", diff: "誘電分極の強さは静電容量を大きくする。" },
    { id: "capacitor", diff: "コンデンサは誘電分極を活用して電気を蓄える。" },
  ],
});

// ===== 15. コンデンサ =====
terms.push({
  id: "capacitor", no: 15, name: "コンデンサ", category: "charge",
  oneLiner: "2枚の金属板で電気をためる『電気の貯金箱』",
  meaning: "コンデンサ（capacitor）は、2枚の金属板（電極）を絶縁体を挟んで向かい合わせた部品。電圧をかけると、片方に＋電荷、もう片方に−電荷がたまり、回路を切っても電気を保持できます。",
  principle: "電池をつなぐと、片側の極板から電子がもう片側の極板へ移ります。極板間は絶縁体なので電子は通り抜けず、両極板に逆符号の電荷がたまります。たまった電荷は『電気のエネルギーを蓄えた状態』で、電池を外しても保たれます。",
  svg: `
<svg viewBox="0 0 400 220" role="img" aria-label="コンデンサの仕組み">
  <!-- 電池 -->
  <line x1="40" y1="80" x2="40" y2="140" stroke="#ef4444" stroke-width="4"/>
  <line x1="55" y1="100" x2="55" y2="120" stroke="#3b82f6" stroke-width="3"/>
  <text x="20" y="80" font-size="11" fill="#ef4444" font-weight="700">＋</text>
  <text x="55" y="80" font-size="11" fill="#3b82f6" font-weight="700">−</text>
  <!-- 線 -->
  <path d="M 40 80 L 40 50 L 180 50 L 180 70" fill="none" stroke="#0f172a" stroke-width="2"/>
  <path d="M 55 140 L 55 170 L 220 170 L 220 150" fill="none" stroke="#0f172a" stroke-width="2"/>
  <!-- 極板 -->
  <rect x="160" y="70" width="40" height="6" fill="#ef4444"/>
  <rect x="200" y="144" width="40" height="6" fill="#3b82f6"/>
  <!-- 電荷 -->
  <g font-size="14" font-weight="700">
    <text x="170" y="68" fill="#ef4444">＋</text>
    <text x="185" y="68" fill="#ef4444">＋</text>
    <text x="210" y="165" fill="#3b82f6">−</text>
    <text x="225" y="165" fill="#3b82f6">−</text>
  </g>
  <!-- 矢印（移動） -->
  <path d="M 100 50 L 160 50" stroke="#10b981" stroke-width="2" marker-end="url(#a15)"/>
  <text x="130" y="42" text-anchor="middle" font-size="10" fill="#10b981">電子</text>
  <!-- 説明 -->
  <text x="200" y="200" text-anchor="middle" font-size="12" fill="#475569">電池で電子が片方の極板へ移動 → 反対側は＋になる</text>
  <text x="280" y="100" font-size="11" fill="#92400e">絶縁体（誘電体）</text>
  <line x1="280" y1="105" x2="220" y2="115" stroke="#92400e" stroke-width="1"/>
  <defs>
    <marker id="a15" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#10b981"/></marker>
  </defs>
</svg>`,
  formula: { expr: "Q = C × V", plain: "蓄えられる電荷Q[C]＝静電容量C[F]×電圧V[V]。容量と電圧が大きいほど、多く貯められる。" },
  mistakes: [
    "コンデンサは『電気を作る』のではなく『一時的にためる』だけ。",
    "直流では一旦充電が終わると電流は流れない。交流では充放電が繰り返されて電流が流れ続けるように見える。",
  ],
  related: [
    { id: "capacitance", diff: "静電容量はコンデンサの『貯められる量』を表す指標。" },
    { id: "dielectric-polarization", diff: "コンデンサ内部の絶縁体は誘電分極で容量を増やす。" },
    { id: "xc", diff: "交流ではコンデンサも『流れにくさ（容量性リアクタンス）』を持つ。" },
  ],
});
// ===== 16. 静電容量 C =====
terms.push({
  id: "capacitance", no: 16, name: "静電容量 C [F]", category: "charge",
  oneLiner: "コンデンサが『どれだけ電気をためられるか』の能力値",
  meaning: "静電容量（capacitance）は、コンデンサに1[V]の電圧をかけたときに蓄えられる電荷の量。単位はファラド[F]。容量が大きいほど、同じ電圧でも多くの電荷を貯められます。",
  principle: "極板の面積を大きくする、極板間を近づける、絶縁体の誘電率を大きくする、の3つで容量が大きくなります。式は C = εS/d。要するに『面積が広く、間隔が狭いほど、たくさん貯められる』。",
  svg: `
<svg viewBox="0 0 400 220" role="img" aria-label="静電容量を決める要素">
  <!-- 小容量 -->
  <g>
    <rect x="40" y="40" width="60" height="6" fill="#ef4444"/>
    <rect x="40" y="100" width="60" height="6" fill="#3b82f6"/>
    <text x="70" y="30" text-anchor="middle" font-size="10" fill="#475569">面積 小</text>
    <text x="70" y="125" text-anchor="middle" font-size="10" fill="#475569">間隔 広</text>
    <line x1="105" y1="46" x2="105" y2="100" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2 2"/>
    <text x="70" y="170" text-anchor="middle" font-size="13" fill="#0f172a" font-weight="700">容量 小</text>
  </g>
  <!-- 矢印 -->
  <text x="200" y="100" text-anchor="middle" font-size="24" fill="#475569">→</text>
  <!-- 大容量 -->
  <g>
    <rect x="270" y="50" width="120" height="6" fill="#ef4444"/>
    <rect x="270" y="80" width="120" height="6" fill="#3b82f6"/>
    <text x="330" y="40" text-anchor="middle" font-size="10" fill="#475569">面積 大</text>
    <text x="330" y="100" text-anchor="middle" font-size="10" fill="#475569">間隔 狭</text>
    <text x="330" y="170" text-anchor="middle" font-size="13" fill="#0f172a" font-weight="700">容量 大</text>
  </g>
  <text x="200" y="200" text-anchor="middle" font-size="11" fill="#475569">面積広く、間隔狭く、誘電率の高い絶縁体を入れると容量UP</text>
</svg>`,
  formula: { expr: "C = Q / V　／　C = εS / d", plain: "C：容量[F]、ε：誘電率、S：極板面積、d：極板間距離。Cを大きくするには『S大・d小・ε大』。" },
  mistakes: [
    "1[F]は実はとても大きい単位。実用のコンデンサはμF（マイクロ）、pF（ピコ）が多い。",
    "容量が大きい＝充電に時間がかかる。瞬時に貯まるわけではない。",
  ],
  related: [
    { id: "capacitor", diff: "コンデンサ本体の能力値を表すのが静電容量。" },
    { id: "xc", diff: "容量Cが大きいと、交流での流れにくさX_Cは小さくなる。" },
  ],
});

// ===== 17. 磁界の向き =====
terms.push({
  id: "magnetic-direction", no: 17, name: "磁界の向き", category: "magnetic",
  oneLiner: "磁石のN極が指す向き。それが磁界の向きと決められている",
  meaning: "磁界の向きは、小さな方位磁針を置いたときにN極が指す方向のこと。磁界（磁場）の中ではN極からS極の向きに磁力線が走り、その線の接線方向が『その点の磁界の向き』です。",
  principle: "磁界は目に見えないので、コンパスを置くと方向が分かる『揃え屋さん』のような場。コンパスのN極は地球磁界の北を指すので、その方向が磁界の向き、と決められました。",
  svg: `
<svg viewBox="0 0 400 220" role="img" aria-label="磁界の向きとコンパス">
  <!-- 棒磁石 -->
  <rect x="50" y="90" width="80" height="40" fill="#ef4444"/>
  <rect x="130" y="90" width="80" height="40" fill="#3b82f6"/>
  <text x="90" y="115" text-anchor="middle" font-size="16" fill="#fff" font-weight="700">N</text>
  <text x="170" y="115" text-anchor="middle" font-size="16" fill="#fff" font-weight="700">S</text>
  <!-- 磁力線 -->
  <g fill="none" stroke="#10b981" stroke-width="2">
    <path d="M 130 90 Q 220 30 300 90"/>
    <path d="M 130 130 Q 220 200 300 130"/>
    <path d="M 130 90 L 300 90" stroke-dasharray="3 3"/>
  </g>
  <!-- 矢印 -->
  <path d="M 215 50 L 220 53" stroke="#10b981" stroke-width="2" marker-end="url(#a17)"/>
  <!-- コンパス -->
  <circle cx="320" cy="110" r="28" fill="#fff" stroke="#0f172a" stroke-width="2"/>
  <polygon points="320,90 315,120 325,120" fill="#ef4444"/>
  <polygon points="320,130 315,100 325,100" fill="#3b82f6" opacity="0"/>
  <text x="320" y="78" text-anchor="middle" font-size="9" fill="#0f172a">N</text>
  <text x="320" y="148" text-anchor="middle" font-size="9" fill="#0f172a">S</text>
  <text x="200" y="205" text-anchor="middle" font-size="11" fill="#475569">コンパスのN極が指す方向＝その地点の磁界の向き</text>
  <defs>
    <marker id="a17" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#10b981"/></marker>
  </defs>
</svg>`,
  mistakes: [
    "地球の『地理上の北極』と『磁極のN』は完全に一致していない（少しずれている）。",
    "磁力線の向きは『N→S』。中（磁石内部）ではS→Nの向きで閉じている。",
  ],
  related: [
    { id: "right-hand-screw", diff: "電流が作る磁界の向きを判定するのが右ねじの法則。" },
    { id: "field-lines", diff: "磁力線の向き＝磁界の向き。" },
  ],
});

// ===== 18. 右ねじの法則 =====
terms.push({
  id: "right-hand-screw", no: 18, name: "右ねじの法則", category: "magnetic",
  oneLiner: "電流の向きに右ねじを進めると、ねじを回す向きが磁界の向き",
  meaning: "電流が流れている導線のまわりには磁界（磁場）が発生します。その向きを覚えるための便利ルールが『右ねじの法則』。電流の進む向きを右ねじが進む方向とすると、ねじを締める回転方向が磁界の向きです。",
  principle: "右ねじを電流の方向に押し込むイメージ。右ねじは時計回りに回すと前に進むので、電流の進む向きを基準に右手の親指を立てると、他の4指が自然に磁界の周回方向を示します（右手法則）。",
  svg: `
<svg viewBox="0 0 400 220" role="img" aria-label="右ねじの法則">
  <!-- 導線 -->
  <line x1="200" y1="20" x2="200" y2="200" stroke="#0f172a" stroke-width="6"/>
  <!-- 電流の向き -->
  <path d="M 200 30 L 200 60" stroke="#ef4444" stroke-width="3" marker-end="url(#a18)"/>
  <text x="215" y="50" font-size="12" fill="#ef4444" font-weight="700">電流 I</text>
  <!-- 磁界の同心円 -->
  <g fill="none" stroke="#10b981" stroke-width="2">
    <circle cx="200" cy="110" r="35"/>
    <circle cx="200" cy="110" r="60"/>
    <circle cx="200" cy="110" r="85"/>
  </g>
  <!-- 矢印（時計回り） -->
  <path d="M 230 80 A 35 35 0 0 1 235 115" stroke="#10b981" stroke-width="3" fill="none" marker-end="url(#a18g)"/>
  <path d="M 260 65 A 60 60 0 0 1 270 130" stroke="#10b981" stroke-width="3" fill="none" marker-end="url(#a18g)"/>
  <text x="295" y="105" font-size="12" fill="#10b981" font-weight="700">磁界</text>
  <text x="200" y="218" text-anchor="middle" font-size="11" fill="#475569">電流の向きに右ねじを進める→回転方向が磁界の向き</text>
  <defs>
    <marker id="a18" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#ef4444"/></marker>
    <marker id="a18g" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#10b981"/></marker>
  </defs>
</svg>`,
  mistakes: [
    "『左ねじ』ではなく『右ねじ』。世界共通でねじは右ねじが標準。",
    "電流の向きを電子の動きに混同しない。電流＝慣習的なプラス→マイナス方向。",
  ],
  related: [
    { id: "magnetic-direction", diff: "右ねじの法則で求めた向き＝磁界の向き。" },
    { id: "coil", diff: "コイルの中の磁界の向きも右手で4指を電流方向に巻き、親指が向く方向。" },
    { id: "cross-dot", diff: "⊗⊙の表記で電流方向を読み取り、右ねじで磁界が決まる。" },
  ],
});

// ===== 19. 磁極 m =====
terms.push({
  id: "magnetic-pole", no: 19, name: "磁極 m [Wb]", category: "magnetic",
  oneLiner: "磁石の端に集中していると仮定した、磁気の『量』",
  meaning: "磁極（magnetic pole）は、磁石のN極・S極が持つ磁気の量。本来は1点に集中しているわけではないけれど、計算しやすくするため『端の一点に集中している』と仮定したものです。単位はウェーバ[Wb]。",
  principle: "電気の世界で電荷[C]が点に集中していると考えるように、磁気の世界では磁極[Wb]が点に集中していると考えます。これは便利な近似で、磁界の強さや力を計算する時に役立ちます。",
  svg: `
<svg viewBox="0 0 400 200" role="img" aria-label="磁極のモデル">
  <!-- 棒磁石 -->
  <rect x="60" y="80" width="120" height="40" fill="#ef4444"/>
  <rect x="180" y="80" width="120" height="40" fill="#3b82f6"/>
  <text x="120" y="105" text-anchor="middle" font-size="16" fill="#fff" font-weight="700">N</text>
  <text x="240" y="105" text-anchor="middle" font-size="16" fill="#fff" font-weight="700">S</text>
  <!-- 点に集中したモデル -->
  <circle cx="60" cy="100" r="10" fill="#ef4444" stroke="#7f1d1d" stroke-width="2"/>
  <text x="60" y="60" text-anchor="middle" font-size="13" fill="#ef4444" font-weight="700">+m</text>
  <text x="60" y="155" text-anchor="middle" font-size="10" fill="#475569">N極を1点と見る</text>
  <circle cx="300" cy="100" r="10" fill="#3b82f6" stroke="#1e3a8a" stroke-width="2"/>
  <text x="300" y="60" text-anchor="middle" font-size="13" fill="#3b82f6" font-weight="700">−m</text>
  <text x="300" y="155" text-anchor="middle" font-size="10" fill="#475569">S極を1点と見る</text>
  <text x="200" y="185" text-anchor="middle" font-size="11" fill="#475569">磁石の端に磁気量m[Wb]が集中していると仮定（計算しやすい）</text>
</svg>`,
  mistakes: [
    "現実には磁極は1点に集中していない。これはあくまでモデル。",
    "電気のように単独の磁極（モノポール）は実験的にまだ見つかっていない。",
  ],
  related: [
    { id: "magnetic-field-strength", diff: "磁界の強さは『+1Wbに働く力』として定義される。" },
    { id: "magnetic-flux", diff: "磁束Φ[Wb]の単位はWb、磁極mと同じ単位。" },
  ],
});

// ===== 20. 磁界の強さ H =====
terms.push({
  id: "magnetic-field-strength", no: 20, name: "磁界の強さ H [A/m]", category: "magnetic",
  oneLiner: "+1[Wb]の磁極を置いたとき、それに働く力の大きさ",
  meaning: "磁界の強さH（magnetic field strength）は、ある点に+1[Wb]の磁極を置いたら何ニュートンの力が働くかで測ります。単位はA/m。物質の影響を受けずに、空間そのものの磁気的なきつさを表します。",
  principle: "磁石や電流の周りに、目に見えない『力場』が広がっています。その場の強さを、テストの磁極（+1Wb）にかかる力で測るのが磁界の強さHです。磁石に近いほどH大、遠いほどH小になります。",
  svg: `
<svg viewBox="0 0 400 220" role="img" aria-label="磁界の強さHのイメージ">
  <!-- 棒磁石 -->
  <rect x="40" y="90" width="80" height="40" fill="#ef4444"/>
  <text x="80" y="115" text-anchor="middle" font-size="14" fill="#fff" font-weight="700">N</text>
  <!-- テスト磁極 -->
  <circle cx="220" cy="110" r="12" fill="#ef4444" stroke="#7f1d1d" stroke-width="2"/>
  <text x="220" y="115" text-anchor="middle" font-size="11" fill="#fff" font-weight="700">+1</text>
  <text x="220" y="80" text-anchor="middle" font-size="10" fill="#475569">テスト磁極 +1Wb</text>
  <!-- 力の矢印 -->
  <path d="M 235 110 L 300 110" stroke="#10b981" stroke-width="3" marker-end="url(#a20)"/>
  <text x="265" y="100" text-anchor="middle" font-size="12" fill="#10b981" font-weight="700">力 F = H</text>
  <text x="200" y="195" text-anchor="middle" font-size="11" fill="#475569">+1Wbにかかる力[N] が H の値そのもの</text>
  <text x="200" y="210" text-anchor="middle" font-size="10" fill="#94a3b8">（単位はA/mで、磁場そのものの強さを表す）</text>
  <defs>
    <marker id="a20" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#10b981"/></marker>
  </defs>
</svg>`,
  formula: { expr: "F = mH", plain: "磁極m[Wb]にかかる力F[N] = m × H。m=1なら F=H となる。" },
  mistakes: [
    "H（磁界の強さ）とB（磁束密度）は別物。H = 磁石や電流が作る『元の場』、B = 物質を通った『実際の磁気密度』。",
    "単位がA/mなのは、コイルの巻数×電流から計算できるため。",
  ],
  related: [
    { id: "magnetic-flux-density", diff: "磁束密度Bは『H × 透磁率μ』。物質の影響込みの値。" },
    { id: "permeability", diff: "透磁率μが大きい物質ほど、同じHでも磁束が増える。" },
  ],
});

// ===== 21. コイル =====
terms.push({
  id: "coil", no: 21, name: "コイル", category: "magnetic",
  oneLiner: "導線をぐるぐる巻いたもの。電流を流すと内部に強い磁界ができる",
  meaning: "コイル（coil）は、電線をらせん状や円筒状に巻いた部品。電流を流すと、巻いた1本1本の磁界が重なり合って、内部に強い磁界が発生します。電磁石やインダクタとして使われます。",
  principle: "1本の導線でも電流が流れると磁界ができますが、ぐるぐる巻きにすると、各ループの磁界が同じ向きに揃って足し合わさり、強い磁界になります。巻数Nが多いほど、電流Iが大きいほど、磁界は強くなります。",
  svg: `
<svg viewBox="0 0 400 220" role="img" aria-label="コイルの磁界">
  <!-- コイル本体（らせん） -->
  <g fill="none" stroke="#0f172a" stroke-width="3">
    <ellipse cx="100" cy="110" rx="25" ry="50"/>
    <ellipse cx="160" cy="110" rx="25" ry="50"/>
    <ellipse cx="220" cy="110" rx="25" ry="50"/>
    <ellipse cx="280" cy="110" rx="25" ry="50"/>
  </g>
  <!-- 端子 -->
  <line x1="40" y1="110" x2="75" y2="110" stroke="#ef4444" stroke-width="2"/>
  <line x1="305" y1="110" x2="360" y2="110" stroke="#3b82f6" stroke-width="2"/>
  <text x="30" y="105" font-size="11" fill="#ef4444" font-weight="700">＋</text>
  <text x="365" y="105" font-size="11" fill="#3b82f6" font-weight="700">−</text>
  <!-- 内部磁界の矢印 -->
  <path d="M 60 90 L 320 90" stroke="#10b981" stroke-width="3" marker-end="url(#a21)" stroke-dasharray="4 3" class="anim-flow"/>
  <text x="190" y="80" text-anchor="middle" font-size="12" fill="#10b981" font-weight="700">強い磁界（N極方向）</text>
  <text x="200" y="200" text-anchor="middle" font-size="11" fill="#475569">巻きが多いほど磁界は強くなる（電磁石の原理）</text>
  <defs>
    <marker id="a21" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#10b981"/></marker>
  </defs>
</svg>`,
  mistakes: [
    "鉄心を入れるとずっと強い電磁石になる（透磁率が高いから）。",
    "交流を流すと自己誘導が起きて、電流が流れにくくなる（誘導性リアクタンス）。",
  ],
  related: [
    { id: "self-inductance", diff: "コイルの『電流の変化に逆らう力』の強さが自己インダクタンスL。" },
    { id: "right-hand-screw", diff: "コイル内部の磁界方向は、4指を電流方向に巻き、親指の指す向き。" },
    { id: "magnetic-circuit", diff: "コイル＋鉄心で閉じたものが磁気回路。" },
  ],
});

// ===== 22. 自己インダクタンス L =====
terms.push({
  id: "self-inductance", no: 22, name: "自己インダクタンス L [H]", category: "magnetic",
  oneLiner: "コイルが『電流の変化に逆らう力』の強さ。単位はヘンリー[H]",
  meaning: "自己インダクタンス（self-inductance）は、コイルにどれくらい電流が流れにくくなる『慣性』があるかを示す値。電流の変化が大きいほど、コイルは逆向きの起電力を作って変化を打ち消そうとします。Lが大きいほどこの効果が強い。",
  principle: "コイルに流れる電流が変化すると、磁束も変化します。磁束が変化すると、コイル自体に『電磁誘導』で起電力が生まれます（自己誘導）。この起電力は元の電流変化を打ち消す向きに発生します（レンツの法則）。Lはその強さの係数です。",
  svg: `
<svg viewBox="0 0 400 220" role="img" aria-label="自己インダクタンス">
  <!-- コイル -->
  <g fill="none" stroke="#0f172a" stroke-width="3">
    <ellipse cx="130" cy="110" rx="20" ry="45"/>
    <ellipse cx="180" cy="110" rx="20" ry="45"/>
    <ellipse cx="230" cy="110" rx="20" ry="45"/>
    <ellipse cx="280" cy="110" rx="20" ry="45"/>
  </g>
  <!-- 増える電流 -->
  <path d="M 30 110 L 110 110" stroke="#ef4444" stroke-width="3" marker-end="url(#a22r)"/>
  <text x="70" y="100" text-anchor="middle" font-size="12" fill="#ef4444" font-weight="700">電流増加 →</text>
  <!-- 逆起電力 -->
  <path d="M 110 150 L 30 150" stroke="#3b82f6" stroke-width="3" marker-end="url(#a22b)"/>
  <text x="70" y="170" text-anchor="middle" font-size="12" fill="#3b82f6" font-weight="700">← 逆向き起電力</text>
  <!-- 磁束変化 -->
  <text x="200" y="40" text-anchor="middle" font-size="12" fill="#10b981" font-weight="700">磁束Φが変化</text>
  <path d="M 200 50 L 200 70" stroke="#10b981" stroke-width="2" marker-end="url(#a22g)"/>
  <text x="200" y="200" text-anchor="middle" font-size="11" fill="#475569">電流の変化に逆らう起電力→Lが大きいほど強い</text>
  <defs>
    <marker id="a22r" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#ef4444"/></marker>
    <marker id="a22b" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#3b82f6"/></marker>
    <marker id="a22g" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#10b981"/></marker>
  </defs>
</svg>`,
  formula: { expr: "e = −L × (di/dt)", plain: "自己誘導起電力e[V] = −L × 電流の時間変化（di/dt）。マイナスは『変化に逆らう』ことを示す。" },
  mistakes: [
    "コイルは直流ではただの電線（Lの効果は変化があってこそ）。",
    "Lは1H＝とても大きい。実用は mH（ミリ）、μH（マイクロ）が多い。",
  ],
  related: [
    { id: "coil", diff: "コイルが持つ電気的特性値が自己インダクタンスL。" },
    { id: "xl", diff: "交流での流れにくさX_L = 2πfL。Lが大きいほど流れにくい。" },
    { id: "electromagnetic-induction", diff: "電磁誘導の自分版が自己誘導。" },
  ],
});

// ===== 23. ⊗と⊙ =====
terms.push({
  id: "cross-dot", no: 23, name: "⊗と⊙（紙面の向き表現）", category: "magnetic",
  oneLiner: "紙の上で「奥」「手前」の向きを表す記号",
  meaning: "電気や磁気の世界では、向きが3次元（前後左右上下）になるので、紙の上では描けないときがあります。そこで⊗（バツ）と⊙（ドット）を使います。⊗は『紙の奥に向かう向き』、⊙は『紙から手前に出てくる向き』。",
  principle: "矢印を真後ろから見ると、矢羽（×印）が見えます。真正面から見ると、矢じり（●）が見えます。これを記号化したのが⊗と⊙です。電流の向きや磁界の向きを平面で表現するときに大活躍します。",
  svg: `<svg viewBox="0 0 400 220" role="img" aria-label="⊗と⊙">
  <rect x="10" y="20" width="180" height="180" fill="#f1f5f9" stroke="#94a3b8"/>
  <rect x="210" y="20" width="180" height="180" fill="#f1f5f9" stroke="#94a3b8"/>
  <circle cx="100" cy="110" r="40" fill="none" stroke="#0f172a" stroke-width="3"/>
  <line x1="72" y1="82" x2="128" y2="138" stroke="#0f172a" stroke-width="3"/>
  <line x1="128" y1="82" x2="72" y2="138" stroke="#0f172a" stroke-width="3"/>
  <text x="100" y="190" text-anchor="middle" font-size="14" font-weight="700" fill="#0f172a">⊗ 紙の奥へ</text>
  <text x="100" y="40" text-anchor="middle" font-size="11" fill="#475569">矢の羽根を後ろから見た</text>
  <circle cx="300" cy="110" r="40" fill="none" stroke="#0f172a" stroke-width="3"/>
  <circle cx="300" cy="110" r="8" fill="#0f172a"/>
  <text x="300" y="190" text-anchor="middle" font-size="14" font-weight="700" fill="#0f172a">⊙ 紙の手前へ</text>
  <text x="300" y="40" text-anchor="middle" font-size="11" fill="#475569">矢じりを正面から見た</text>
</svg>`,
  mistakes: [
    "⊗を「マイナス」、⊙を「プラス」と勘違い。これは『向き』を表す記号で、符号ではない。",
    "電流か磁界か文脈で判断。記号自体はどちらにも使う。",
  ],
  related: [
    { id: "right-hand-screw", diff: "右ねじの法則で電流の向きから磁界の向きを決めるとき、⊗⊙で表現する。" },
    { id: "magnetic-flux-lines", diff: "磁力線が紙面に垂直なときに⊗⊙で示す。" },
    { id: "electromagnetic-force", diff: "電磁力の説明で、電流・磁界・力の向きを⊗⊙で描く。" },
  ],
});

// ===== 24. 磁力線 =====
terms.push({
  id: "magnetic-flux-lines", no: 24, name: "磁力線", category: "magnetic",
  oneLiner: "N極からS極へ向かう、磁界の向きを表す想像の線",
  meaning: "磁石のまわりに砂鉄をまくと、線のような模様が現れます。これが『磁力線』のイメージ。各点で磁界の向きに沿って線をつなげたもので、N極から出てS極に入ります。",
  principle: "線が密な所＝磁界が強い、線がまばらな所＝磁界が弱い、と直感的にわかります。磁石の外ではN→S、磁石の内部ではS→Nへ流れて、ぐるっと閉じた線（ループ）になります。",
  svg: `<svg viewBox="0 0 400 220" role="img" aria-label="磁力線">
  <rect x="100" y="90" width="80" height="40" fill="#ef4444"/>
  <rect x="220" y="90" width="80" height="40" fill="#3b82f6"/>
  <text x="140" y="115" text-anchor="middle" font-size="18" font-weight="700" fill="#fff">N</text>
  <text x="260" y="115" text-anchor="middle" font-size="18" font-weight="700" fill="#fff">S</text>
  <path d="M 180 110 Q 200 110 220 110" fill="none" stroke="#10b981" stroke-width="2" marker-end="url(#a24)"/>
  <path d="M 180 95 Q 200 50 220 95" fill="none" stroke="#10b981" stroke-width="2" marker-end="url(#a24)"/>
  <path d="M 180 125 Q 200 170 220 125" fill="none" stroke="#10b981" stroke-width="2" marker-end="url(#a24)"/>
  <path d="M 180 80 Q 200 20 220 80" fill="none" stroke="#10b981" stroke-width="2" marker-end="url(#a24)"/>
  <path d="M 180 140 Q 200 200 220 140" fill="none" stroke="#10b981" stroke-width="2" marker-end="url(#a24)"/>
  <text x="200" y="215" text-anchor="middle" font-size="11" fill="#475569">線が密＝磁界が強い／N→S向き</text>
  <defs><marker id="a24" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#10b981"/></marker></defs>
</svg>`,
  mistakes: [
    "磁力線は実際に存在する線ではなく、磁界を見やすくする『地図』のようなもの。",
    "S→Nと逆向きに描かない。外側はN→Sが大原則。",
  ],
  related: [
    { id: "magnetic-flux", diff: "磁力線の本数の合計が磁束Φ。" },
    { id: "flux-density", diff: "単位面積あたりの磁力線の密度が磁束密度B。" },
    { id: "magnetic-field-direction", diff: "磁力線の接線方向が磁界の向き。" },
  ],
});

// ===== 25. 電磁力 F=BIL =====
terms.push({
  id: "electromagnetic-force", no: 25, name: "電磁力 F[N]", category: "magnetic",
  oneLiner: "磁界の中の電線に電流を流すと、電線が力を受ける（モーターの原理）",
  meaning: "磁界B[T]の中に置いた長さL[m]の電線に、電流I[A]を流すと、電線にはF=BIL[N]の力が働きます。向きは『フレミング左手の法則』で決まります。",
  principle: "電流が流れている電線のまわりにも磁界ができます（右ねじの法則）。元の磁界と合成すると、電線の片側で磁界が強く、反対側で弱くなります。磁界は『密から疎へ』電線を押すので、電線は弱い側へ動きます。",
  svg: `<svg viewBox="0 0 400 220" role="img" aria-label="電磁力">
  <rect x="20" y="40" width="40" height="140" fill="#ef4444"/>
  <text x="40" y="115" text-anchor="middle" font-size="16" font-weight="700" fill="#fff">N</text>
  <rect x="340" y="40" width="40" height="140" fill="#3b82f6"/>
  <text x="360" y="115" text-anchor="middle" font-size="16" font-weight="700" fill="#fff">S</text>
  <line x1="80" y1="110" x2="330" y2="110" stroke="#10b981" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="80" y1="80" x2="330" y2="80" stroke="#10b981" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="80" y1="140" x2="330" y2="140" stroke="#10b981" stroke-width="1" stroke-dasharray="4,4"/>
  <text x="100" y="70" font-size="11" fill="#10b981">磁界 B →</text>
  <circle cx="200" cy="110" r="14" fill="#fff" stroke="#f97316" stroke-width="3"/>
  <circle cx="200" cy="110" r="5" fill="#f97316"/>
  <text x="220" y="115" font-size="11" fill="#f97316" font-weight="700">電流 I（手前へ⊙）</text>
  <path d="M 200 96 L 200 30" stroke="#facc15" stroke-width="4" marker-end="url(#a25)"/>
  <text x="205" y="40" font-size="13" font-weight="700" fill="#b45309">力 F</text>
  <text x="200" y="210" text-anchor="middle" font-size="11" fill="#475569">F = B × I × L</text>
  <defs><marker id="a25" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6 Z" fill="#facc15"/></marker></defs>
</svg>`,
  formula: { expr: "F = B × I × L", plain: "力F[N] = 磁束密度B[T] × 電流I[A] × 電線の長さL[m]。磁界が強いほど、電流が大きいほど、電線が長いほど、力は大きくなる。" },
  mistakes: [
    "右手と左手を間違える（電磁力は『左手』、電磁誘導は『右手』）。",
    "電流と磁界が平行だと力は0（垂直のときが最大）。",
  ],
  related: [
    { id: "parallel-conductor-force", diff: "電磁力の応用：2本の電線が互いに作る磁界による力。" },
    { id: "right-hand-screw", diff: "電流が作る磁界の向きは右ねじ、力の向きはフレミング左手。" },
    { id: "flux-density", diff: "電磁力の式に出てくるBが磁束密度。" },
  ],
});

// ===== 26. 平行導体に働く力 =====
terms.push({
  id: "parallel-conductor-force", no: 26, name: "平行導体に働く力", category: "magnetic",
  oneLiner: "2本の電線、同じ向きなら引き合う／反対向きなら反発する",
  meaning: "2本の平行な電線にそれぞれ電流を流すと、お互いの電流がつくる磁界の中でもう一方が電磁力を受けます。同方向の電流→引き合う、反対方向の電流→反発する。",
  principle: "右ねじの法則で、それぞれの電線のまわりに同心円の磁界ができます。同方向だと2本の間で磁界が打ち消しあい、外側は強くなる→外から内側へ押される＝引き合う。反対方向だと間で磁界が重なり、強い側から弱い側へ押される＝反発する。",
  svg: `<svg viewBox="0 0 400 220" role="img" aria-label="平行導体に働く力">
  <g>
    <text x="100" y="25" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">同方向 → 引き合う</text>
    <circle cx="70" cy="120" r="14" fill="#fff" stroke="#f97316" stroke-width="3"/>
    <circle cx="70" cy="120" r="5" fill="#f97316"/>
    <circle cx="130" cy="120" r="14" fill="#fff" stroke="#f97316" stroke-width="3"/>
    <circle cx="130" cy="120" r="5" fill="#f97316"/>
    <path d="M 90 120 L 110 120" stroke="#facc15" stroke-width="3" marker-end="url(#a26a)"/>
    <path d="M 110 120 L 90 120" stroke="#facc15" stroke-width="3" marker-end="url(#a26a)"/>
    <text x="100" y="170" text-anchor="middle" font-size="11" fill="#475569">F = μ₀I₁I₂L /(2πr)</text>
    <text x="100" y="200" text-anchor="middle" font-size="11" fill="#10b981">→ ← 引き合う</text>
  </g>
  <g>
    <text x="300" y="25" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">反対方向 → 反発する</text>
    <circle cx="270" cy="120" r="14" fill="#fff" stroke="#f97316" stroke-width="3"/>
    <circle cx="270" cy="120" r="5" fill="#f97316"/>
    <circle cx="330" cy="120" r="14" fill="none" stroke="#f97316" stroke-width="3"/>
    <line x1="320" y1="110" x2="340" y2="130" stroke="#f97316" stroke-width="3"/>
    <line x1="340" y1="110" x2="320" y2="130" stroke="#f97316" stroke-width="3"/>
    <path d="M 260 120 L 240 120" stroke="#facc15" stroke-width="3" marker-end="url(#a26a)"/>
    <path d="M 340 120 L 360 120" stroke="#facc15" stroke-width="3" marker-end="url(#a26a)"/>
    <text x="300" y="200" text-anchor="middle" font-size="11" fill="#ef4444">← → 反発する</text>
  </g>
  <defs><marker id="a26a" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#facc15"/></marker></defs>
</svg>`,
  formula: { expr: "F/L = μ₀I₁I₂ /(2πr)", plain: "電線1mあたりの力。電流I₁, I₂が大きいほど、距離rが近いほど力は強い。" },
  mistakes: [
    "『プラスとマイナスが引き合う』と混同。これは電流の向きで決まる磁気的な力。",
    "電線が遠いほど弱い（1/rで効いてくる）。",
  ],
  related: [
    { id: "electromagnetic-force", diff: "F=BILの応用形。一方の電流が作るBの中に他方が置かれている。" },
    { id: "right-hand-screw", diff: "各電線がつくる磁界の向きは右ねじで判断。" },
  ],
});

// ===== 27. 透磁率 μ =====
terms.push({
  id: "permeability", no: 27, name: "透磁率 μ", category: "magnetic",
  oneLiner: "磁力線の通りやすさ。鉄はμが大きく、空気はμが小さい",
  meaning: "物質の中を磁力線がどれだけ通りやすいかを表す値。電気でいう『抵抗の逆数（流しやすさ）』に似たイメージで、磁界に対する『通しやすさ』を示します。",
  principle: "磁界の強さHが同じでも、透磁率μが大きい物質（鉄など）では磁束密度Bが大きくなります。B = μH の関係です。真空の透磁率μ₀=4π×10⁻⁷[H/m]を基準にして、比透磁率μs=μ/μ₀で他の物質を比べます。",
  svg: `<svg viewBox="0 0 400 220" role="img" aria-label="透磁率">
  <rect x="30" y="60" width="140" height="100" fill="#e2e8f0" stroke="#94a3b8"/>
  <text x="100" y="45" text-anchor="middle" font-size="13" font-weight="700">空気（μ小）</text>
  <path d="M 30 90 L 170 90" stroke="#10b981" stroke-width="2" marker-end="url(#a27)"/>
  <path d="M 30 130 L 170 130" stroke="#10b981" stroke-width="2" marker-end="url(#a27)"/>
  <text x="100" y="180" text-anchor="middle" font-size="11" fill="#475569">磁力線まばら</text>
  <rect x="230" y="60" width="140" height="100" fill="#94a3b8" stroke="#475569"/>
  <text x="300" y="45" text-anchor="middle" font-size="13" font-weight="700">鉄（μ大）</text>
  <path d="M 230 75 L 370 75" stroke="#10b981" stroke-width="2" marker-end="url(#a27)"/>
  <path d="M 230 95 L 370 95" stroke="#10b981" stroke-width="2" marker-end="url(#a27)"/>
  <path d="M 230 115 L 370 115" stroke="#10b981" stroke-width="2" marker-end="url(#a27)"/>
  <path d="M 230 135 L 370 135" stroke="#10b981" stroke-width="2" marker-end="url(#a27)"/>
  <path d="M 230 155 L 370 155" stroke="#10b981" stroke-width="2" marker-end="url(#a27)"/>
  <text x="300" y="180" text-anchor="middle" font-size="11" fill="#475569">磁力線が密に通る</text>
  <text x="200" y="210" text-anchor="middle" font-size="11" fill="#0f172a" font-weight="700">同じH（外からの磁界）でもμが大きいほどBが大きい</text>
  <defs><marker id="a27" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#10b981"/></marker></defs>
</svg>`,
  formula: { expr: "B = μH", plain: "磁束密度B = 透磁率μ × 磁界の強さH。透磁率は単位[H/m]（ヘンリー毎メートル）。" },
  mistakes: [
    "μ（ミュー）と質量や摩擦係数のμを混同しがち。文脈で区別。",
    "比透磁率μsには単位がない（μ₀との比だから）。",
  ],
  related: [
    { id: "magnetic-field-strength", diff: "Hを与えると、μとの積でBが決まる。" },
    { id: "flux-density", diff: "B = μH。透磁率は『Hを何倍してBにするか』。" },
    { id: "reluctance", diff: "磁気抵抗Rm = ℓ/(μA)。μが大きいほどRmは小さい。" },
  ],
});

// ===== 28. 磁束 Φ =====
terms.push({
  id: "magnetic-flux", no: 28, name: "磁束 Φ[Wb]", category: "magnetic",
  oneLiner: "磁力線の本数の合計。物質の影響なしで考えられる量",
  meaning: "ある断面を貫く磁力線の総本数を、量として表したのが磁束Φ（ファイ）。単位はWb（ウェーバ）。電気でいう『電流の総量』に近い感覚です。",
  principle: "磁束密度B[T]に断面積A[m²]をかけると、磁束Φ=BAになります。Bが密度（1m²あたり）、Aが面積、その積が総本数（＝磁束）。磁束はループを閉じる量で、コイルの中を行ったり来たりします。",
  svg: `<svg viewBox="0 0 400 220" role="img" aria-label="磁束">
  <rect x="60" y="60" width="120" height="100" fill="#f1f5f9" stroke="#94a3b8" stroke-dasharray="4,4"/>
  <text x="120" y="45" text-anchor="middle" font-size="12" fill="#475569">小さい面積A</text>
  <line x1="60" y1="80" x2="180" y2="80" stroke="#10b981" stroke-width="2" marker-end="url(#a28)"/>
  <line x1="60" y1="110" x2="180" y2="110" stroke="#10b981" stroke-width="2" marker-end="url(#a28)"/>
  <line x1="60" y1="140" x2="180" y2="140" stroke="#10b981" stroke-width="2" marker-end="url(#a28)"/>
  <text x="120" y="180" text-anchor="middle" font-size="11" fill="#0f172a">Φ = 3本ぶん</text>
  <rect x="220" y="40" width="160" height="140" fill="#f1f5f9" stroke="#94a3b8" stroke-dasharray="4,4"/>
  <text x="300" y="25" text-anchor="middle" font-size="12" fill="#475569">大きい面積A（B同じ）</text>
  <line x1="220" y1="60" x2="380" y2="60" stroke="#10b981" stroke-width="2" marker-end="url(#a28)"/>
  <line x1="220" y1="90" x2="380" y2="90" stroke="#10b981" stroke-width="2" marker-end="url(#a28)"/>
  <line x1="220" y1="120" x2="380" y2="120" stroke="#10b981" stroke-width="2" marker-end="url(#a28)"/>
  <line x1="220" y1="150" x2="380" y2="150" stroke="#10b981" stroke-width="2" marker-end="url(#a28)"/>
  <line x1="220" y1="180" x2="380" y2="180" stroke="#10b981" stroke-width="2" marker-end="url(#a28)"/>
  <text x="300" y="200" text-anchor="middle" font-size="11" fill="#0f172a">Φ = 5本ぶん</text>
  <defs><marker id="a28" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#10b981"/></marker></defs>
</svg>`,
  formula: { expr: "Φ = B × A", plain: "磁束Φ[Wb] = 磁束密度B[T] × 断面積A[m²]。Bが同じでも、面積が大きいほど磁束は大きい。" },
  mistakes: [
    "磁束Φと磁束密度Bは別物。Bは1m²あたり、Φは全体の量。",
    "Φの単位はWb（ウェーバ）。Bの単位はT（テスラ）。",
  ],
  related: [
    { id: "flux-density", diff: "磁束を面積で割ったのが磁束密度B = Φ/A。" },
    { id: "magnetic-flux-lines", diff: "磁力線の本数を量にしたのがΦ。" },
    { id: "electromagnetic-induction", diff: "Φの時間変化が起電力を生む（e = -dΦ/dt）。" },
  ],
});

// ===== 29. 磁束密度 B[T] =====
terms.push({
  id: "flux-density", no: 29, name: "磁束密度 B[T]", category: "magnetic",
  oneLiner: "1m²あたりの磁束。磁界の『密度』を示す",
  meaning: "磁束Φを断面積Aで割ったものが磁束密度B = Φ/A[T]（テスラ）。同じ磁束でも、面積が狭ければ密度は濃くなる。電線にF=BILの力を与えるのは、このBです。",
  principle: "透磁率μと磁界の強さHから、B = μH で求められます。Hだけだと『磁石の元気度』ですが、Bは物質を通った後の『実際の濃さ』。だから電磁力やトルクなど、実際に何かを動かす式にはBが登場します。",
  svg: `<svg viewBox="0 0 400 220" role="img" aria-label="磁束密度">
  <rect x="40" y="60" width="100" height="100" fill="#f1f5f9" stroke="#94a3b8"/>
  <text x="90" y="45" text-anchor="middle" font-size="12">A = 小</text>
  <line x1="40" y1="75" x2="140" y2="75" stroke="#10b981" stroke-width="2"/>
  <line x1="40" y1="90" x2="140" y2="90" stroke="#10b981" stroke-width="2"/>
  <line x1="40" y1="105" x2="140" y2="105" stroke="#10b981" stroke-width="2"/>
  <line x1="40" y1="120" x2="140" y2="120" stroke="#10b981" stroke-width="2"/>
  <line x1="40" y1="135" x2="140" y2="135" stroke="#10b981" stroke-width="2"/>
  <line x1="40" y1="150" x2="140" y2="150" stroke="#10b981" stroke-width="2"/>
  <text x="90" y="180" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">B 大（密度高い）</text>
  <rect x="240" y="40" width="140" height="140" fill="#f1f5f9" stroke="#94a3b8"/>
  <text x="310" y="30" text-anchor="middle" font-size="12">A = 大（Φ同じ）</text>
  <line x1="240" y1="80" x2="380" y2="80" stroke="#10b981" stroke-width="2"/>
  <line x1="240" y1="120" x2="380" y2="120" stroke="#10b981" stroke-width="2"/>
  <line x1="240" y1="160" x2="380" y2="160" stroke="#10b981" stroke-width="2"/>
  <text x="310" y="200" text-anchor="middle" font-size="12" font-weight="700" fill="#0f172a">B 小（密度低い）</text>
  <text x="200" y="215" text-anchor="middle" font-size="11" fill="#475569">B = Φ / A（同じΦでも面積で密度が変わる）</text>
</svg>`,
  formula: { expr: "B = Φ / A = μ H", plain: "磁束密度B[T] = 磁束Φ[Wb] ÷ 面積A[m²] = 透磁率μ × 磁界H。電磁力 F=BIL や電磁誘導の式に登場。" },
  mistakes: [
    "BとHを混同。Hは『磁石が出す元気度』、Bは『物質を通った結果の濃さ』。",
    "単位を間違えやすい：B[T]、Φ[Wb]、H[A/m]、μ[H/m]。",
  ],
  related: [
    { id: "magnetic-flux", diff: "ΦをAで割るとBになる。" },
    { id: "permeability", diff: "B = μH。物質によってBの大きさが変わる。" },
    { id: "magnetic-field-strength", diff: "Hが原因、Bが結果。" },
  ],
});

// ===== 30. 磁気回路 =====
terms.push({
  id: "magnetic-circuit", no: 30, name: "磁気回路", category: "magnetic",
  oneLiner: "磁束が流れる経路。電気回路とそっくりの考え方ができる",
  meaning: "鉄心にコイルを巻いて磁束Φを流すループのこと。電流回路と並べて考えると：起磁力NI ↔ 電圧V、磁束Φ ↔ 電流I、磁気抵抗Rm ↔ 電気抵抗R、と完全に対応します。",
  principle: "コイルに電流を流すと磁束ができ、鉄心の中をぐるっと一周します。Φ = NI / Rm という関係（オームの法則の磁気版）が成り立ち、未知の磁束を計算で求められます。",
  svg: `<svg viewBox="0 0 400 220" role="img" aria-label="磁気回路">
  <rect x="80" y="50" width="240" height="120" fill="none" stroke="#94a3b8" stroke-width="20"/>
  <g stroke="#f97316" stroke-width="3" fill="none">
    <path d="M 100 30 Q 100 50 110 60"/>
    <path d="M 120 30 Q 120 50 130 60"/>
    <path d="M 140 30 Q 140 50 150 60"/>
    <path d="M 160 30 Q 160 50 170 60"/>
    <path d="M 180 30 Q 180 50 190 60"/>
  </g>
  <text x="145" y="22" text-anchor="middle" font-size="11" fill="#f97316" font-weight="700">N回巻き I[A]</text>
  <path d="M 200 75 Q 280 75 280 110 Q 280 145 200 145 Q 120 145 120 110 Q 120 75 200 75" fill="none" stroke="#10b981" stroke-width="2" marker-end="url(#a30)" stroke-dasharray="6,3"/>
  <text x="280" y="200" text-anchor="middle" font-size="11" fill="#10b981" font-weight="700">磁束 Φ がループ</text>
  <text x="200" y="120" text-anchor="middle" font-size="13" fill="#0f172a" font-weight="700">Φ = NI / Rm</text>
  <defs><marker id="a30" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#10b981"/></marker></defs>
</svg>`,
  formula: { expr: "Φ = NI / Rm", plain: "磁束Φ = 起磁力NI ÷ 磁気抵抗Rm。電気のV=IR を磁気で言い換えたもの。" },
  mistakes: [
    "電流と磁束が別の経路を流れる、と思いがち。実際は同じ鉄心ループの中を磁束が流れている。",
    "電気回路と『同じ計算で解ける』のが磁気回路のミソ。",
  ],
  related: [
    { id: "mmf", diff: "磁気回路を駆動する『電圧』にあたるのが起磁力NI。" },
    { id: "reluctance", diff: "磁気回路の『抵抗』にあたるのが磁気抵抗Rm。" },
    { id: "magnetic-flux", diff: "磁気回路を流れる『電流』にあたるのが磁束Φ。" },
  ],
});

// ===== 31. 起磁力 NI[A] =====
terms.push({
  id: "mmf", no: 31, name: "起磁力 NI[A]", category: "magnetic",
  oneLiner: "磁束を発生させる『元の力』。コイルの巻数×電流",
  meaning: "電気回路でいう『電圧』にあたるのが起磁力。コイルの巻数N（回）と電流I（A）の積、NI[A]で表します（単位はアンペア・ターンとも）。",
  principle: "1ターンのコイルに電流を流すとちょっとだけ磁束ができますが、巻数を10倍にすれば10倍の磁束、電流を2倍にすればさらに2倍。掛け算で効くので、NIで一括して扱います。",
  svg: `<svg viewBox="0 0 400 220" role="img" aria-label="起磁力">
  <g stroke="#f97316" stroke-width="3" fill="none">
    <ellipse cx="100" cy="110" rx="14" ry="45"/>
    <ellipse cx="130" cy="110" rx="14" ry="45"/>
    <ellipse cx="160" cy="110" rx="14" ry="45"/>
  </g>
  <text x="130" y="40" text-anchor="middle" font-size="12" font-weight="700" fill="#f97316">少ない巻数 N=3</text>
  <text x="130" y="190" text-anchor="middle" font-size="11" fill="#475569">弱い磁束</text>
  <g stroke="#f97316" stroke-width="3" fill="none">
    <ellipse cx="250" cy="110" rx="14" ry="45"/>
    <ellipse cx="275" cy="110" rx="14" ry="45"/>
    <ellipse cx="300" cy="110" rx="14" ry="45"/>
    <ellipse cx="325" cy="110" rx="14" ry="45"/>
    <ellipse cx="350" cy="110" rx="14" ry="45"/>
  </g>
  <text x="300" y="40" text-anchor="middle" font-size="12" font-weight="700" fill="#f97316">多い巻数 N=5</text>
  <text x="300" y="190" text-anchor="middle" font-size="11" fill="#475569">強い磁束</text>
  <text x="200" y="215" text-anchor="middle" font-size="12" font-weight="700">起磁力 = N × I</text>
</svg>`,
  formula: { expr: "F_m = NI", plain: "起磁力F_m[A] = 巻数N × 電流I。Nが多いほど、Iが大きいほど磁束が出る。" },
  mistakes: [
    "単位を電流と同じAと書くが、内容は『電流×巻数』。",
    "起電力（V）と『起磁力』を混同。電気か磁気かを文脈で見分ける。",
  ],
  related: [
    { id: "magnetic-circuit", diff: "磁気回路における『電圧』が起磁力。" },
    { id: "coil", diff: "コイルが起磁力を作る装置そのもの。" },
    { id: "reluctance", diff: "起磁力NIを磁気抵抗Rmで割ると磁束Φが出る。" },
  ],
});

// ===== 32. 磁気抵抗 Rm[A/Wb] =====
terms.push({
  id: "reluctance", no: 32, name: "磁気抵抗 Rm[A/Wb]", category: "magnetic",
  oneLiner: "磁束の流れにくさ。長いほど、細いほど、透磁率が低いほど大きい",
  meaning: "電気抵抗R = ρℓ/A と全く同じ形の式で、磁気抵抗Rm = ℓ/(μA)。磁路の長さℓが長い、断面積Aが小さい、透磁率μが小さい、ほど磁束が流れにくい＝Rmが大きい。",
  principle: "空気や鉄の継ぎ目（ギャップ）では透磁率が小さく、Rmが跳ね上がります。するとΦ = NI/Rm でΦが減ります。同じ起磁力でも、経路次第で磁束は大きく変わるのです。",
  svg: `<svg viewBox="0 0 400 220" role="img" aria-label="磁気抵抗">
  <rect x="50" y="60" width="120" height="100" fill="#94a3b8" stroke="#475569"/>
  <text x="110" y="45" text-anchor="middle" font-size="12" font-weight="700">鉄心（μ大）</text>
  <path d="M 110 70 Q 110 110 110 150" fill="none" stroke="#10b981" stroke-width="3" marker-end="url(#a32)"/>
  <text x="110" y="180" text-anchor="middle" font-size="11" fill="#0f172a">Rm 小 → Φ 大</text>
  <rect x="230" y="60" width="120" height="40" fill="#e2e8f0" stroke="#94a3b8"/>
  <rect x="230" y="110" width="120" height="10" fill="#fff" stroke="#ef4444" stroke-width="2"/>
  <rect x="230" y="130" width="120" height="30" fill="#e2e8f0" stroke="#94a3b8"/>
  <text x="290" y="45" text-anchor="middle" font-size="12" font-weight="700">鉄心+ギャップ</text>
  <text x="290" y="103" text-anchor="middle" font-size="9" fill="#ef4444" font-weight="700">空気（μ小）</text>
  <path d="M 290 70 L 290 90" fill="none" stroke="#10b981" stroke-width="2"/>
  <path d="M 290 125 L 290 145" fill="none" stroke="#10b981" stroke-width="2" marker-end="url(#a32)"/>
  <text x="290" y="180" text-anchor="middle" font-size="11" fill="#0f172a">Rm 大 → Φ 小</text>
  <text x="200" y="210" text-anchor="middle" font-size="11" fill="#475569">Rm = ℓ/(μA)</text>
  <defs><marker id="a32" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#10b981"/></marker></defs>
</svg>`,
  formula: { expr: "Rm = ℓ / (μ A)", plain: "磁気抵抗Rm[A/Wb] = 磁路長さℓ[m] ÷（透磁率μ[H/m] × 断面積A[m²]）。電気のR=ρℓ/Aと対応。" },
  mistakes: [
    "電気抵抗と同じ『R』で表すときがあり混同しやすい。文脈と単位[A/Wb]で判断。",
    "空気の層はわずかでもRmを跳ね上がらせる。",
  ],
  related: [
    { id: "magnetic-circuit", diff: "Rm = NI / Φ。磁気回路のオームの法則。" },
    { id: "permeability", diff: "μが大きいほどRmは小さく、磁束は流れやすい。" },
    { id: "mmf", diff: "起磁力NIをRmで割ると磁束Φが出る。" },
  ],
});

// ===== 33. 電磁誘導 =====
terms.push({
  id: "electromagnetic-induction", no: 33, name: "電磁誘導", category: "magnetic",
  oneLiner: "磁束が時間変化すると、コイルに起電力が発生する（発電機の原理）",
  meaning: "コイルを貫く磁束Φが増えたり減ったりすると、その変化を妨げる向きに起電力eが発生します。e = -dΦ/dt（ファラデーの法則）。",
  principle: "『磁束の変化を嫌がる』性質（レンツの法則）。磁束が増えると、増加を打ち消す向きに電流を流そうとする起電力が、磁束が減ると、減少を補う向きに起電力が発生します。コイル自身の電流変化で起きるのが『自己誘導』、別コイルの変化で起きるのが『相互誘導』。",
  svg: `<svg viewBox="0 0 400 220" role="img" aria-label="電磁誘導">
  <rect x="50" y="50" width="60" height="120" fill="#ef4444"/>
  <text x="80" y="95" text-anchor="middle" font-size="18" font-weight="700" fill="#fff">N</text>
  <g stroke="#f97316" stroke-width="3" fill="none">
    <ellipse cx="150" cy="110" rx="14" ry="40"/>
    <ellipse cx="175" cy="110" rx="14" ry="40"/>
    <ellipse cx="200" cy="110" rx="14" ry="40"/>
  </g>
  <path d="M 175 75 L 175 50" stroke="#facc15" stroke-width="3" marker-end="url(#a33)"/>
  <text x="180" y="45" font-size="11" fill="#b45309" font-weight="700">起電力 e</text>
  <path d="M 30 110 L 50 110" stroke="#10b981" stroke-width="3" marker-end="url(#a33g)"/>
  <text x="40" y="105" text-anchor="middle" font-size="10" fill="#10b981" font-weight="700">Φ増</text>
  <text x="175" y="200" text-anchor="middle" font-size="11" fill="#475569">磁束が変化→起電力 e = -N dΦ/dt</text>
  <path d="M 280 110 L 350 110" stroke="#10b981" stroke-width="3" marker-end="url(#a33g)"/>
  <text x="315" y="105" text-anchor="middle" font-size="10" fill="#10b981" font-weight="700">Φ抜け</text>
  <defs>
    <marker id="a33" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#facc15"/></marker>
    <marker id="a33g" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#10b981"/></marker>
  </defs>
</svg>`,
  formula: { expr: "e = -N dΦ/dt", plain: "起電力e[V] = -巻数N × 磁束Φの時間変化率。Φが急に変わるほど、Nが多いほど、起電力は大きい。" },
  mistakes: [
    "『磁束があるだけ』では起電力は発生しない。変化が必要。",
    "マイナス符号はレンツの法則（変化を妨げる向き）。",
  ],
  related: [
    { id: "self-inductance", diff: "コイル自身の電流変化による電磁誘導が自己誘導、その大きさがL。" },
    { id: "magnetic-flux", diff: "Φが変化すると電磁誘導が起きる。" },
    { id: "coil", diff: "コイルは電磁誘導を利用して電圧を作る。" },
  ],
});

// ===== 交流 1. コイルの電流（π/2 遅れ） =====
terms.push({
  id: "coil-current-lag", name: "コイルの電流（位相が遅れる）", category: "ac",
  oneLiner: "コイルに交流電圧をかけると、電流は電圧より π/2[rad] 遅れて流れる",
  meaning: "交流電源にコイルをつなぐと、電流の波形は電圧の波形より1/4周期（90°）あとに最大になります。これを『電流が電圧より π/2 遅れる』と表現します。",
  principle: "コイルは電流の変化を嫌がる（自己誘導）。電圧がぐっと上がっても、すぐには電流が増えてくれず、ワンテンポ遅れて電流が増えていきます。結果として、電圧のピークの後に電流のピークが来ます。",
  svg: `<svg viewBox="0 0 400 220" role="img" aria-label="コイルの電流位相遅れ">
  <line x1="20" y1="110" x2="380" y2="110" stroke="#94a3b8" stroke-width="1"/>
  <path d="M 20 110 Q 60 30 100 110 T 180 110 T 260 110 T 340 110 T 380 110" fill="none" stroke="#facc15" stroke-width="3"/>
  <path d="M 20 110 Q 80 30 120 110 T 200 110 T 280 110 T 360 110 T 380 110" fill="none" stroke="#f97316" stroke-width="3"/>
  <text x="60" y="55" font-size="12" fill="#b45309" font-weight="700">電圧 V</text>
  <text x="120" y="55" font-size="12" fill="#9a3412" font-weight="700">電流 I（遅れる）</text>
  <line x1="60" y1="40" x2="80" y2="40" stroke="#0f172a" stroke-width="1" marker-end="url(#a-l1)"/>
  <text x="70" y="35" text-anchor="middle" font-size="10" fill="#0f172a">π/2 遅れ</text>
  <text x="200" y="200" text-anchor="middle" font-size="11" fill="#475569">電圧の山 → 1/4 周期後に電流の山</text>
  <defs><marker id="a-l1" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#0f172a"/></marker></defs>
</svg>`,
  mistakes: [
    "『遅れる＝電流が小さい』ではない。タイミングがずれているだけ。",
    "直流では位相は関係ない（交流特有の現象）。",
  ],
  related: [
    { id: "xl", diff: "コイルの電流の流れにくさを表すのが誘導性リアクタンスX_L。" },
    { id: "cap-current-lead", diff: "コンデンサは逆に電流が電圧より π/2 進む。" },
    { id: "self-inductance", diff: "遅れの原因が自己インダクタンスL。" },
  ],
});

// ===== 交流 2. 誘導性リアクタンス X_L =====
terms.push({
  id: "xl", name: "誘導性リアクタンス X_L[Ω]", category: "ac",
  oneLiner: "コイルの『交流に対する流れにくさ』。X_L = 2πfL",
  meaning: "コイルは直流ではただの電線ですが、交流ではL（インダクタンス）と周波数fの両方で電流の流れにくさが決まります。これがX_L = 2πfL[Ω]。",
  principle: "周波数fが高いほど電流変化が激しく、コイルの自己誘導起電力が強く生じる→電流が流れにくい。Lが大きいほど自己誘導も強い→流れにくい。よって積 2πfL に比例します。",
  svg: `<svg viewBox="0 0 400 220" role="img" aria-label="誘導性リアクタンス">
  <line x1="50" y1="180" x2="350" y2="180" stroke="#0f172a" stroke-width="2"/>
  <line x1="50" y1="180" x2="50" y2="40" stroke="#0f172a" stroke-width="2"/>
  <text x="350" y="200" text-anchor="middle" font-size="11" fill="#0f172a">周波数 f →</text>
  <text x="30" y="40" text-anchor="middle" font-size="11" fill="#0f172a">X_L</text>
  <line x1="50" y1="180" x2="350" y2="50" stroke="#f97316" stroke-width="3"/>
  <circle cx="50" cy="180" r="4" fill="#10b981"/>
  <text x="60" y="175" font-size="11" fill="#10b981">直流(f=0)はただの電線</text>
  <circle cx="350" cy="50" r="4" fill="#ef4444"/>
  <text x="280" y="40" font-size="11" fill="#ef4444">高周波で流れにくい</text>
  <text x="200" y="215" text-anchor="middle" font-size="12" font-weight="700">X_L = 2πfL（fに比例）</text>
</svg>`,
  formula: { expr: "X_L = 2π f L", plain: "リアクタンスX_L[Ω] = 2π × 周波数f[Hz] × インダクタンスL[H]。fが2倍→X_Lも2倍。" },
  mistakes: [
    "X_Lは『抵抗』ではないが、単位は同じ[Ω]。電圧と電流の比という意味では同類。",
    "直流ではX_L=0（コイルは普通の電線）。",
  ],
  related: [
    { id: "coil-current-lag", diff: "X_Lが電流の遅れを生む。" },
    { id: "xc", diff: "X_Cはfが大きいと小さくなる（逆の振る舞い）。" },
    { id: "impedance", diff: "RとX_Lを合成したものがインピーダンスZ。" },
  ],
});

// ===== 交流 3. コンデンサの電流（π/2 進む） =====
terms.push({
  id: "cap-current-lead", name: "コンデンサの電流（位相が進む）", category: "ac",
  oneLiner: "コンデンサに交流電圧をかけると、電流は電圧より π/2[rad] 進む",
  meaning: "電源にコンデンサをつなぐと、電圧が変わろうとした瞬間に電荷の出入りが先に起こります。結果、電流の山が電圧の山より1/4周期だけ前にきます。",
  principle: "コンデンサは『電荷を貯める容器』。電圧を上げようとすると、まず容器に電荷が流れ込む（＝電流）。電圧が最大の瞬間にはもう電荷が満タンで流れ込みは止まる。だから電流のピークが電圧のピークより先。",
  svg: `<svg viewBox="0 0 400 220" role="img" aria-label="コンデンサの電流位相進み">
  <line x1="20" y1="110" x2="380" y2="110" stroke="#94a3b8" stroke-width="1"/>
  <path d="M 20 110 Q 80 30 120 110 T 200 110 T 280 110 T 360 110 T 380 110" fill="none" stroke="#facc15" stroke-width="3"/>
  <path d="M 20 110 Q 60 30 100 110 T 180 110 T 260 110 T 340 110 T 380 110" fill="none" stroke="#f97316" stroke-width="3"/>
  <text x="120" y="55" font-size="12" fill="#b45309" font-weight="700">電圧 V</text>
  <text x="60" y="55" font-size="12" fill="#9a3412" font-weight="700">電流 I（進む）</text>
  <text x="200" y="200" text-anchor="middle" font-size="11" fill="#475569">電流の山 → 1/4 周期後に電圧の山</text>
</svg>`,
  mistakes: [
    "『進む』＝『大きい』ではない。タイミングが早いだけ。",
    "直流（f=0）ではコンデンサは充電後に電流ゼロ。位相は交流特有。",
  ],
  related: [
    { id: "xc", diff: "コンデンサの流れにくさを表すのが容量性リアクタンスX_C。" },
    { id: "coil-current-lag", diff: "コイルは逆に π/2 遅れる。" },
    { id: "capacitance", diff: "Cが大きいほど電荷をたくさん貯められる→電流もたくさん流れる。" },
  ],
});

// ===== 交流 4. 容量性リアクタンス X_C =====
terms.push({
  id: "xc", name: "容量性リアクタンス X_C[Ω]", category: "ac",
  oneLiner: "コンデンサの『交流に対する流れにくさ』。X_C = 1/(2πfC)",
  meaning: "コンデンサは直流では切れていますが、交流ではfとCで決まる流れにくさX_C = 1/(2πfC)[Ω]を持ちます。高周波ほどX_Cが小さく＝よく通します。",
  principle: "高周波だと電圧が早く反転→電荷の出入りが激しい→電流が多く流れる→X_Cは小さい。直流では充電後に止まるので X_C は無限大（切れている扱い）。",
  svg: `<svg viewBox="0 0 400 220" role="img" aria-label="容量性リアクタンス">
  <line x1="50" y1="180" x2="350" y2="180" stroke="#0f172a" stroke-width="2"/>
  <line x1="50" y1="180" x2="50" y2="40" stroke="#0f172a" stroke-width="2"/>
  <text x="350" y="200" text-anchor="middle" font-size="11" fill="#0f172a">周波数 f →</text>
  <text x="30" y="40" text-anchor="middle" font-size="11" fill="#0f172a">X_C</text>
  <path d="M 60 50 Q 100 100 200 150 T 350 175" fill="none" stroke="#3b82f6" stroke-width="3"/>
  <text x="80" y="45" font-size="11" fill="#3b82f6">低周波で流れにくい</text>
  <text x="240" y="170" font-size="11" fill="#10b981">高周波はよく通る</text>
  <text x="200" y="215" text-anchor="middle" font-size="12" font-weight="700">X_C = 1/(2πfC)（fに反比例）</text>
</svg>`,
  formula: { expr: "X_C = 1 / (2π f C)", plain: "X_C[Ω] = 1 ÷（2π × 周波数f × 静電容量C[F]）。fが大きいほど、Cが大きいほど、X_Cは小さい。" },
  mistakes: [
    "コンデンサは直流を通さない（X_C=∞）が、交流は通す。",
    "X_LとX_Cは逆向きに変化する（fが上がるとX_L↑、X_C↓）。",
  ],
  related: [
    { id: "cap-current-lead", diff: "X_Cが電流の進みを生む。" },
    { id: "xl", diff: "コイルのX_Lとは逆の周波数特性。" },
    { id: "capacitance", diff: "X_C = 1/(2πfC)。Cが大きいほどよく通す。" },
  ],
});

// ===== 交流 5. 直列交流ベクトル（電流基準） =====
terms.push({
  id: "ac-series-vector", name: "直列交流回路のベクトル（電流基準）", category: "ac",
  oneLiner: "直列なら電流がどこも同じ。電流を基準にして電圧ベクトルを描く",
  meaning: "R, L, C を直列につないだ交流回路では、どの素子にも同じ電流Iが流れます。電流Iを横軸の基準ベクトルにして、各電圧V_R, V_L, V_C を相対的に描くと位相関係がスッキリ見えます。",
  principle: "R: 電圧V_R は電流Iと同位相（右向き）／ L: V_L は電流より π/2 進む（上向き）／ C: V_C は電流より π/2 遅れる（下向き）。これらを足し合わせるとV全体のベクトルになります。",
  svg: `<svg viewBox="0 0 400 220" role="img" aria-label="直列交流ベクトル">
  <line x1="200" y1="20" x2="200" y2="200" stroke="#94a3b8" stroke-width="1"/>
  <line x1="20" y1="110" x2="380" y2="110" stroke="#94a3b8" stroke-width="1"/>
  <line x1="200" y1="110" x2="320" y2="110" stroke="#f97316" stroke-width="3" marker-end="url(#a-s1)"/>
  <text x="330" y="115" font-size="11" fill="#f97316" font-weight="700">I 基準</text>
  <line x1="200" y1="110" x2="280" y2="110" stroke="#facc15" stroke-width="3" marker-end="url(#a-s2)"/>
  <text x="240" y="105" text-anchor="middle" font-size="11" fill="#b45309" font-weight="700">V_R</text>
  <line x1="200" y1="110" x2="200" y2="50" stroke="#3b82f6" stroke-width="3" marker-end="url(#a-s3)"/>
  <text x="210" y="60" font-size="11" fill="#3b82f6" font-weight="700">V_L</text>
  <line x1="200" y1="110" x2="200" y2="170" stroke="#10b981" stroke-width="3" marker-end="url(#a-s4)"/>
  <text x="210" y="170" font-size="11" fill="#10b981" font-weight="700">V_C</text>
  <text x="200" y="215" text-anchor="middle" font-size="11" fill="#475569">電流Iを横向き基準、R同位相／L上／C下</text>
  <defs>
    <marker id="a-s1" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#f97316"/></marker>
    <marker id="a-s2" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#facc15"/></marker>
    <marker id="a-s3" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#3b82f6"/></marker>
    <marker id="a-s4" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#10b981"/></marker>
  </defs>
</svg>`,
  mistakes: [
    "電流基準と電圧基準を逆に描いてしまう。直列は『電流が共通』なので電流基準。",
    "V_LとV_Cを足すのを忘れる。逆向きなので差し引く。",
  ],
  related: [
    { id: "ac-parallel-vector", diff: "並列回路では『電圧が共通』なので電圧基準。" },
    { id: "impedance", diff: "ベクトル合成の長さがインピーダンスZ。" },
  ],
});

// ===== 交流 6. 並列交流ベクトル（電圧基準） =====
terms.push({
  id: "ac-parallel-vector", name: "並列交流回路のベクトル（電圧基準）", category: "ac",
  oneLiner: "並列なら電圧がどこも同じ。電圧を基準にして電流ベクトルを描く",
  meaning: "R, L, C を並列につなぐと、どの枝にも同じ電圧Vがかかります。電圧Vを横軸基準にして、各枝の電流I_R, I_L, I_C を描きます。",
  principle: "R: I_R はV と同位相（右）／ L: I_L はVより π/2 遅れる（下）／ C: I_C はVより π/2 進む（上）。直列のときの電流／電圧の役割が入れ替わったイメージ。",
  svg: `<svg viewBox="0 0 400 220" role="img" aria-label="並列交流ベクトル">
  <line x1="200" y1="20" x2="200" y2="200" stroke="#94a3b8" stroke-width="1"/>
  <line x1="20" y1="110" x2="380" y2="110" stroke="#94a3b8" stroke-width="1"/>
  <line x1="200" y1="110" x2="320" y2="110" stroke="#facc15" stroke-width="3" marker-end="url(#a-p1)"/>
  <text x="330" y="115" font-size="11" fill="#b45309" font-weight="700">V 基準</text>
  <line x1="200" y1="110" x2="280" y2="110" stroke="#f97316" stroke-width="3" marker-end="url(#a-p2)"/>
  <text x="240" y="105" text-anchor="middle" font-size="11" fill="#9a3412" font-weight="700">I_R</text>
  <line x1="200" y1="110" x2="200" y2="170" stroke="#3b82f6" stroke-width="3" marker-end="url(#a-p3)"/>
  <text x="210" y="170" font-size="11" fill="#3b82f6" font-weight="700">I_L（遅れ）</text>
  <line x1="200" y1="110" x2="200" y2="50" stroke="#10b981" stroke-width="3" marker-end="url(#a-p4)"/>
  <text x="210" y="60" font-size="11" fill="#10b981" font-weight="700">I_C（進み）</text>
  <text x="200" y="215" text-anchor="middle" font-size="11" fill="#475569">電圧Vを横向き基準、L下／C上</text>
  <defs>
    <marker id="a-p1" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#facc15"/></marker>
    <marker id="a-p2" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#f97316"/></marker>
    <marker id="a-p3" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#3b82f6"/></marker>
    <marker id="a-p4" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#10b981"/></marker>
  </defs>
</svg>`,
  mistakes: [
    "並列でも電流基準で描いてしまうケース。並列＝『電圧が共通』なので電圧基準。",
    "I_LとI_Cの上下が直列のV_L/V_Cと逆向きで混乱しがち。",
  ],
  related: [
    { id: "ac-series-vector", diff: "直列は電流基準。並列は電圧基準。" },
    { id: "impedance", diff: "並列ではアドミタンス（Zの逆）も併用すると簡単。" },
  ],
});

// ===== 交流 7. インピーダンス Z =====
terms.push({
  id: "impedance", name: "インピーダンス Z[Ω]", category: "ac",
  oneLiner: "抵抗R と リアクタンスX を合成した、交流回路の『総合的な流れにくさ』",
  meaning: "交流回路における『抵抗にあたるもの』。RとXは位相が直交するので、足し算ではなく『直角三角形の斜辺』で合成します：Z = √(R² + X²)。",
  principle: "R とリアクタンスX（=X_L - X_C）を直角に置いてベクトル合成します。RはI と同位相、Xは π/2 進む or 遅れる。互いに垂直なので、ピタゴラスの定理で大きさが決まります。",
  svg: `<svg viewBox="0 0 400 220" role="img" aria-label="インピーダンス">
  <line x1="80" y1="170" x2="320" y2="170" stroke="#facc15" stroke-width="4" marker-end="url(#a-z1)"/>
  <text x="200" y="190" text-anchor="middle" font-size="13" font-weight="700" fill="#b45309">R（抵抗）</text>
  <line x1="320" y1="170" x2="320" y2="50" stroke="#3b82f6" stroke-width="4" marker-end="url(#a-z2)"/>
  <text x="350" y="115" text-anchor="middle" font-size="13" font-weight="700" fill="#3b82f6">X</text>
  <line x1="80" y1="170" x2="320" y2="50" stroke="#ef4444" stroke-width="4" marker-end="url(#a-z3)"/>
  <text x="170" y="100" font-size="14" font-weight="700" fill="#ef4444">Z = √(R²+X²)</text>
  <path d="M 110 170 A 30 30 0 0 0 105 155" fill="none" stroke="#0f172a" stroke-width="1"/>
  <text x="135" y="160" font-size="11" fill="#0f172a">φ（位相角）</text>
  <defs>
    <marker id="a-z1" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#facc15"/></marker>
    <marker id="a-z2" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#3b82f6"/></marker>
    <marker id="a-z3" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#ef4444"/></marker>
  </defs>
</svg>`,
  formula: { expr: "Z = √(R² + X²),  X = X_L − X_C", plain: "インピーダンスZ[Ω]はRとXの直角合成。X_LとX_Cは逆向きなので差し引く。" },
  mistakes: [
    "RとXをただの足し算で合成しがち。直角だからピタゴラス。",
    "X_LとX_Cは打ち消し合う（差し引く）ので、共振時は X=0 → Z=R 最小。",
  ],
  related: [
    { id: "xl", diff: "コイルのリアクタンス。Zの片成分。" },
    { id: "xc", diff: "コンデンサのリアクタンス。Zの片成分（逆向き）。" },
    { id: "ac-series-vector", diff: "Zはベクトル図の斜辺。" },
  ],
});

// ===== 34. 抵抗率 ρ =====
terms.push({
  id: "resistivity", no: 34, name: "抵抗率 ρ[Ω・m]", category: "resistor",
  oneLiner: "物質そのものの『電流の流しにくさ』。長さ1m、断面積1m²あたりの抵抗",
  meaning: "材料ごとに決まる固有の値。銅は小さい、ニクロムは大きい、ガラスは超巨大。同じ形でも、材料が違えば抵抗値も大きく変わります。",
  principle: "1m³の正方形ブロックに2面から電流を流したときの抵抗値が ρ[Ω・m]。長さや断面積を考えなくていい、その物質だけの性質。実用では [Ω・mm²/m] を使うことも多い（同じ意味、単位が違うだけ）。",
  svg: `<svg viewBox="0 0 400 220" role="img" aria-label="抵抗率">
  <g transform="translate(50,40)">
    <polygon points="0,40 40,0 140,0 140,100 100,140 0,140" fill="#fde68a" stroke="#b45309" stroke-width="2"/>
    <line x1="0" y1="40" x2="100" y2="40" stroke="#b45309" stroke-width="1"/>
    <line x1="100" y1="40" x2="140" y2="0" stroke="#b45309" stroke-width="1"/>
    <line x1="100" y1="40" x2="100" y2="140" stroke="#b45309" stroke-width="1"/>
    <text x="50" y="160" font-size="11">1m×1m×1m</text>
  </g>
  <text x="260" y="80" font-size="12" font-weight="700">銅: ρ ≈ 1.7×10⁻⁸ Ω・m</text>
  <text x="260" y="100" font-size="12" font-weight="700">アルミ: ρ ≈ 2.8×10⁻⁸</text>
  <text x="260" y="120" font-size="12" font-weight="700">ニクロム: ρ ≈ 1.1×10⁻⁶</text>
  <text x="260" y="140" font-size="12" font-weight="700">ガラス: ρ ≈ 10¹⁰</text>
  <text x="200" y="200" text-anchor="middle" font-size="11" fill="#475569">材料が決まれば ρ が決まる</text>
</svg>`,
  formula: { expr: "R = ρ ℓ / A", plain: "抵抗R[Ω] = 抵抗率ρ × 長さℓ ÷ 断面積A。ρが小さい材料ほど電流を通しやすい。" },
  mistakes: [
    "ρと抵抗Rを混同。ρは『材料の性質』、Rは『この形に切ったときの値』。",
    "[Ω・m] と [Ω・mm²/m] は数値が大きく違うので注意。",
  ],
  related: [
    { id: "conductor-resistance", diff: "ρを使って実際の電線の抵抗を計算したものが導体の電気抵抗。" },
    { id: "conductance", diff: "1/ρ は導電率σ。" },
  ],
});

// ===== 35. 導体の電気抵抗 =====
terms.push({
  id: "conductor-resistance", no: 35, name: "導体の電気抵抗", category: "resistor",
  oneLiner: "電線の抵抗は『長さに比例、断面積に反比例』",
  meaning: "同じ材料でも、長い電線ほど抵抗が大きく、太い電線ほど抵抗が小さい。これを式にしたのが R = ρℓ/A。",
  principle: "電子が通る道が『長い』と衝突回数が増えて流れにくい。『太い』とたくさん通り道があるので流れやすい。両方を合わせて、長さに比例・断面積に反比例の関係になります。",
  svg: `<svg viewBox="0 0 400 220" role="img" aria-label="導体の電気抵抗">
  <rect x="30" y="100" width="160" height="20" fill="#fbbf24" stroke="#b45309"/>
  <text x="110" y="90" text-anchor="middle" font-size="11">長い・細い → R 大</text>
  <rect x="220" y="90" width="80" height="40" fill="#fbbf24" stroke="#b45309"/>
  <text x="260" y="80" text-anchor="middle" font-size="11">短い・太い → R 小</text>
  <path d="M 30 110 L 200 110" stroke="#f97316" stroke-width="2" marker-end="url(#a35)"/>
  <path d="M 220 110 L 300 110" stroke="#f97316" stroke-width="2" marker-end="url(#a35)"/>
  <text x="200" y="180" text-anchor="middle" font-size="14" font-weight="700">R = ρ × ℓ / A</text>
  <text x="200" y="200" text-anchor="middle" font-size="11" fill="#475569">長さℓに比例、断面積Aに反比例</text>
  <defs><marker id="a35" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#f97316"/></marker></defs>
</svg>`,
  formula: { expr: "R = ρ ℓ / A", plain: "抵抗R = 抵抗率ρ × 長さℓ ÷ 断面積A。電線が長い→Rが大、太い→Rが小。" },
  mistakes: [
    "ℓを2倍するとRも2倍。Aを2倍するとRは半分。",
    "断面積であって直径ではない。直径が2倍だと面積は4倍。",
  ],
  related: [
    { id: "resistivity", diff: "ρが材料の性質、Rが現物の値。" },
    { id: "series-resistance", diff: "電線を継ぎ足すと、長さが伸びてRが増える＝直列。" },
  ],
});

// ===== 36. 直列の合成抵抗 =====
terms.push({
  id: "series-resistance", no: 36, name: "直列の合成抵抗", category: "resistor",
  oneLiner: "直列につないだ抵抗は、ぜんぶ足し算で合成できる",
  meaning: "R₁, R₂, R₃ を一直線につないだら、合成抵抗R = R₁+R₂+R₃。長い1本の抵抗にしたのと同じ。",
  principle: "直列では電流が同じ。各抵抗の電圧降下を足したものが全体の電圧。V=IR₁+IR₂+IR₃ = I(R₁+R₂+R₃) なので、合成抵抗は『単純な和』になります。",
  svg: `<svg viewBox="0 0 400 220" role="img" aria-label="直列の合成抵抗">
  <line x1="20" y1="110" x2="60" y2="110" stroke="#0f172a" stroke-width="2"/>
  <rect x="60" y="95" width="60" height="30" fill="#fbbf24" stroke="#b45309"/>
  <text x="90" y="115" text-anchor="middle" font-size="12" font-weight="700">R₁</text>
  <line x1="120" y1="110" x2="160" y2="110" stroke="#0f172a" stroke-width="2"/>
  <rect x="160" y="95" width="60" height="30" fill="#fbbf24" stroke="#b45309"/>
  <text x="190" y="115" text-anchor="middle" font-size="12" font-weight="700">R₂</text>
  <line x1="220" y1="110" x2="260" y2="110" stroke="#0f172a" stroke-width="2"/>
  <rect x="260" y="95" width="60" height="30" fill="#fbbf24" stroke="#b45309"/>
  <text x="290" y="115" text-anchor="middle" font-size="12" font-weight="700">R₃</text>
  <line x1="320" y1="110" x2="380" y2="110" stroke="#0f172a" stroke-width="2"/>
  <path d="M 30 90 L 50 90" stroke="#f97316" stroke-width="2" marker-end="url(#a36)"/>
  <text x="40" y="80" font-size="11" fill="#f97316">I（同じ）</text>
  <text x="200" y="180" text-anchor="middle" font-size="14" font-weight="700">R = R₁ + R₂ + R₃</text>
  <defs><marker id="a36" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#f97316"/></marker></defs>
</svg>`,
  formula: { expr: "R = R₁ + R₂ + ⋯ + Rn", plain: "直列なら抵抗値はぜんぶ足すだけ。" },
  mistakes: [
    "直列を並列の式（逆数の和）で計算してしまう。直列は『そのまま足す』。",
    "電流は同じ、電圧は分かれることを忘れずに。",
  ],
  related: [
    { id: "parallel-resistance", diff: "並列は逆数の和。直列とは式が違う。" },
    { id: "kirchhoff-2", diff: "直列での電圧降下の総和は、起電力の総和と等しい。" },
  ],
});

// ===== 37. コンダクタンス G =====
terms.push({
  id: "conductance", no: 37, name: "コンダクタンス G[S]", category: "resistor",
  oneLiner: "電流の流れやすさ。抵抗Rの逆数 G = 1/R",
  meaning: "抵抗が『流れにくさ』なら、その裏返しが『流れやすさ』＝コンダクタンス。単位はジーメンス[S]で、1/Ω と同じ意味。",
  principle: "G = 1/R。Rが大きいとGは小さく、Rが小さいとGは大きい。並列回路の計算ではGを使うとシンプル：合成コンダクタンスは『単純な和』で表せます。",
  svg: `<svg viewBox="0 0 400 220" role="img" aria-label="コンダクタンス">
  <text x="100" y="60" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">R = 流れにくさ</text>
  <text x="100" y="100" text-anchor="middle" font-size="14" font-weight="700" fill="#ef4444">大 ←→ 小</text>
  <text x="100" y="160" text-anchor="middle" font-size="13" font-weight="700" fill="#0f172a">G = 流れやすさ</text>
  <text x="100" y="200" text-anchor="middle" font-size="14" font-weight="700" fill="#10b981">小 ←→ 大</text>
  <line x1="200" y1="40" x2="200" y2="200" stroke="#94a3b8" stroke-width="1"/>
  <text x="290" y="100" font-size="13" font-weight="700">G = 1 / R</text>
  <text x="290" y="130" font-size="12" fill="#475569">単位：S（ジーメンス）</text>
  <text x="290" y="160" font-size="12" fill="#475569">10Ω → 0.1S</text>
  <text x="290" y="180" font-size="12" fill="#475569">100Ω → 0.01S</text>
</svg>`,
  formula: { expr: "G = 1 / R", plain: "コンダクタンスG[S] = 1 ÷ 抵抗R[Ω]。Rの逆数。" },
  mistakes: [
    "GとRをどちらも『大きいほど通しやすい』と勘違い。Gは『大きいほど通しやすい』、Rは逆。",
    "並列回路ではGを使うと足し算でできるが、直列ではRのまま計算した方が楽。",
  ],
  related: [
    { id: "combined-conductance", diff: "Gの合成は並列で単純和。" },
    { id: "parallel-resistance", diff: "並列の合成抵抗は 1/(G₁+G₂+…)。" },
  ],
});

// ===== 38. 合成コンダクタンス =====
terms.push({
  id: "combined-conductance", no: 38, name: "合成コンダクタンス", category: "resistor",
  oneLiner: "並列なら、各枝のG をぜんぶ足すだけ",
  meaning: "並列回路の合成コンダクタンスは G = G₁+G₂+G₃。流れやすさは『道が増えるほど増える』ので素直な足し算になります。",
  principle: "並列では各抵抗にかかる電圧Vが同じ。各枝の電流はI_k = G_k × V。全体電流はI = (G₁+G₂+G₃)V なので、合成G = G₁+G₂+G₃ が自然に出てきます。",
  svg: `<svg viewBox="0 0 400 220" role="img" aria-label="合成コンダクタンス">
  <line x1="20" y1="110" x2="60" y2="110" stroke="#0f172a" stroke-width="2"/>
  <line x1="60" y1="50" x2="60" y2="170" stroke="#0f172a" stroke-width="2"/>
  <line x1="60" y1="50" x2="200" y2="50" stroke="#0f172a" stroke-width="2"/>
  <line x1="60" y1="110" x2="200" y2="110" stroke="#0f172a" stroke-width="2"/>
  <line x1="60" y1="170" x2="200" y2="170" stroke="#0f172a" stroke-width="2"/>
  <rect x="120" y="40" width="50" height="20" fill="#fbbf24" stroke="#b45309"/>
  <text x="145" y="55" text-anchor="middle" font-size="11">G₁</text>
  <rect x="120" y="100" width="50" height="20" fill="#fbbf24" stroke="#b45309"/>
  <text x="145" y="115" text-anchor="middle" font-size="11">G₂</text>
  <rect x="120" y="160" width="50" height="20" fill="#fbbf24" stroke="#b45309"/>
  <text x="145" y="175" text-anchor="middle" font-size="11">G₃</text>
  <line x1="200" y1="50" x2="200" y2="170" stroke="#0f172a" stroke-width="2"/>
  <line x1="200" y1="110" x2="380" y2="110" stroke="#0f172a" stroke-width="2"/>
  <text x="290" y="100" text-anchor="middle" font-size="14" font-weight="700">G = G₁ + G₂ + G₃</text>
  <text x="290" y="140" text-anchor="middle" font-size="11" fill="#475569">枝が増えるほど通しやすい</text>
</svg>`,
  formula: { expr: "G = G₁ + G₂ + ⋯", plain: "並列の合成コンダクタンスは単純な和。" },
  mistakes: [
    "Rで計算しようとして式が複雑になる。並列はGに変換すると楽。",
    "直列でもGの和、と誤解しがち。直列はRの和。",
  ],
  related: [
    { id: "conductance", diff: "Gの定義。G = 1/R。" },
    { id: "parallel-resistance", diff: "合成Gの逆数が合成抵抗。" },
  ],
});

// ===== 39. 並列の合成抵抗 =====
terms.push({
  id: "parallel-resistance", no: 39, name: "並列の合成抵抗", category: "resistor",
  oneLiner: "並列はコンダクタンスを足して、その逆数を取る",
  meaning: "並列回路の合成抵抗R = 1/(1/R₁ + 1/R₂ + …)。各抵抗の逆数を足してから、また逆数に戻すと合成抵抗が出ます。",
  principle: "並列にすると道が増えるので、合成抵抗は『一番小さいRより必ず小さい』。極端な例：同じRを2本並列にすると合成R/2、3本ならR/3、と分母が増えていくイメージ。",
  svg: `<svg viewBox="0 0 400 220" role="img" aria-label="並列の合成抵抗">
  <line x1="20" y1="110" x2="60" y2="110" stroke="#0f172a" stroke-width="2"/>
  <line x1="60" y1="50" x2="60" y2="170" stroke="#0f172a" stroke-width="2"/>
  <line x1="60" y1="50" x2="200" y2="50" stroke="#0f172a" stroke-width="2"/>
  <line x1="60" y1="110" x2="200" y2="110" stroke="#0f172a" stroke-width="2"/>
  <line x1="60" y1="170" x2="200" y2="170" stroke="#0f172a" stroke-width="2"/>
  <rect x="120" y="40" width="50" height="20" fill="#fbbf24" stroke="#b45309"/>
  <text x="145" y="55" text-anchor="middle" font-size="11">R₁</text>
  <rect x="120" y="100" width="50" height="20" fill="#fbbf24" stroke="#b45309"/>
  <text x="145" y="115" text-anchor="middle" font-size="11">R₂</text>
  <rect x="120" y="160" width="50" height="20" fill="#fbbf24" stroke="#b45309"/>
  <text x="145" y="175" text-anchor="middle" font-size="11">R₃</text>
  <line x1="200" y1="50" x2="200" y2="170" stroke="#0f172a" stroke-width="2"/>
  <line x1="200" y1="110" x2="380" y2="110" stroke="#0f172a" stroke-width="2"/>
  <text x="290" y="90" text-anchor="middle" font-size="13" font-weight="700">1/R = 1/R₁+1/R₂+1/R₃</text>
  <text x="290" y="120" text-anchor="middle" font-size="11" fill="#475569">2本並列、同じR → 合成R/2</text>
</svg>`,
  formula: { expr: "1/R = 1/R₁ + 1/R₂ + ⋯", plain: "並列の合成抵抗は『逆数の和の、また逆数』。2本だけなら R = R₁R₂/(R₁+R₂)。" },
  mistakes: [
    "ただR₁+R₂と足してしまう（それは直列）。",
    "並列にすると合成抵抗は必ず小さくなる、と覚える。",
  ],
  related: [
    { id: "combined-conductance", diff: "Gで考えれば G=G₁+G₂+G₃、その逆数が並列の合成抵抗。" },
    { id: "series-resistance", diff: "直列は単純な和、並列は逆数の和。" },
  ],
});

// ===== 40. オームの法則 =====
terms.push({
  id: "ohms-law", no: 40, name: "オームの法則", category: "law",
  oneLiner: "電流は電圧に比例し、抵抗に反比例する：I = V/R",
  meaning: "電気回路のもっとも基本になる法則。電圧Vを2倍にすれば電流Iも2倍、抵抗Rを2倍にすれば電流は半分。V=IRと書き換えれば電圧が、R=V/Iと書き換えれば抵抗が求まります。",
  principle: "電圧は『押し出す力』、抵抗は『邪魔する量』。押す力が強ければたくさん流れる（比例）、邪魔が大きければあまり流れない（反比例）。水路で『水圧が高い』『管が細い』とイメージするとそのまま。",
  svg: `<svg viewBox="0 0 400 220" role="img" aria-label="オームの法則">
  <circle cx="200" cy="110" r="80" fill="#fef3c7" stroke="#b45309" stroke-width="2"/>
  <line x1="200" y1="50" x2="200" y2="170" stroke="#b45309" stroke-width="2"/>
  <line x1="140" y1="110" x2="260" y2="110" stroke="#b45309" stroke-width="2"/>
  <text x="200" y="80" text-anchor="middle" font-size="20" font-weight="700" fill="#facc15">V</text>
  <text x="170" y="150" text-anchor="middle" font-size="20" font-weight="700" fill="#f97316">I</text>
  <text x="230" y="150" text-anchor="middle" font-size="20" font-weight="700" fill="#3b82f6">R</text>
  <text x="60" y="115" font-size="13">I = V/R</text>
  <text x="60" y="135" font-size="13">V = IR</text>
  <text x="320" y="115" font-size="13">R = V/I</text>
  <text x="200" y="210" text-anchor="middle" font-size="11" fill="#475569">指を当てた要素が分子、残りが分母</text>
</svg>`,
  formula: { expr: "V = I × R", plain: "電圧V[V] = 電流I[A] × 抵抗R[Ω]。3つの値の関係を一気に覚えるなら『VIR三角形』。" },
  mistakes: [
    "電流と電圧をごちゃ混ぜ。電圧は両端の『差』、電流はその場所を『通る量』。",
    "抵抗を変えたら電圧と電流が両方変わる場合がある（電源条件によって違う）。",
  ],
  related: [
    { id: "voltage", diff: "Vを与えるとIが決まる。" },
    { id: "current", diff: "I = V/R。" },
    { id: "resistance", diff: "R = V/I で測れる。" },
  ],
});

// ===== 41. キルヒホッフ第一法則 =====
terms.push({
  id: "kirchhoff-1", no: 41, name: "キルヒホッフの第一法則（電流則）", category: "law",
  oneLiner: "節点に流れ込む電流の合計 ＝ 流れ出る電流の合計",
  meaning: "回路の交差点（節点）では、入ってくる電流と出ていく電流の総和が等しい。電子は途中で消えたり湧いたりしないから、当たり前の保存則です。",
  principle: "水道管の分岐をイメージ。3つの管が合流する点では、入ってくる水量と出ていく水量はピッタリ釣り合います。電流も同じで、I_in の和 = I_out の和。",
  svg: `<svg viewBox="0 0 400 220" role="img" aria-label="キルヒホッフ第一法則">
  <circle cx="200" cy="110" r="10" fill="#0f172a"/>
  <line x1="40" y1="110" x2="190" y2="110" stroke="#f97316" stroke-width="3" marker-end="url(#a41-1)"/>
  <text x="100" y="100" text-anchor="middle" font-size="12" fill="#f97316" font-weight="700">I₁ →</text>
  <line x1="200" y1="100" x2="200" y2="20" stroke="#f97316" stroke-width="3" marker-end="url(#a41-1)"/>
  <text x="220" y="60" font-size="12" fill="#f97316" font-weight="700">I₂ ↑</text>
  <line x1="210" y1="120" x2="350" y2="200" stroke="#f97316" stroke-width="3" marker-end="url(#a41-1)"/>
  <text x="290" y="170" font-size="12" fill="#f97316" font-weight="700">I₃ ↘</text>
  <text x="200" y="200" text-anchor="middle" font-size="13" font-weight="700">I₁ = I₂ + I₃</text>
  <defs><marker id="a41-1" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#f97316"/></marker></defs>
</svg>`,
  formula: { expr: "Σ I_in = Σ I_out", plain: "節点での電流保存。流入の合計と流出の合計が等しい。" },
  mistakes: [
    "電流の向きを最初に仮定して、結果がマイナスでも『向きが逆だった』と理解すればOK。",
    "電流が『消える』ことはない。どこか必ず出口がある。",
  ],
  related: [
    { id: "kirchhoff-2", diff: "1は電流、2は電圧。ペアで使う。" },
    { id: "current", diff: "電流そのものの保存則を表す。" },
  ],
});

// ===== 42. キルヒホッフ第二法則 =====
terms.push({
  id: "kirchhoff-2", no: 42, name: "キルヒホッフの第二法則（電圧則）", category: "law",
  oneLiner: "閉ループを1周すると、起電力の総和 ＝ 電圧降下の総和",
  meaning: "回路の中の閉じたループを1周してくると、電圧の足し引きはちょうどゼロになる、という法則。エネルギーの保存則の電気版です。",
  principle: "電池で持ち上げた『電位の高さ』は、抵抗を通るたびに少しずつ下がり、ループ1周で元に戻ります。だから『起電力の和 = 電圧降下の和』が成り立ちます。山を登って下りたら元の高さに戻るのと同じ。",
  svg: `<svg viewBox="0 0 400 220" role="img" aria-label="キルヒホッフ第二法則">
  <rect x="60" y="50" width="280" height="120" fill="none" stroke="#0f172a" stroke-width="2"/>
  <line x1="60" y1="95" x2="60" y2="125" stroke="#0f172a" stroke-width="4"/>
  <line x1="50" y1="95" x2="70" y2="95" stroke="#0f172a" stroke-width="4"/>
  <line x1="55" y1="125" x2="65" y2="125" stroke="#0f172a" stroke-width="4"/>
  <text x="35" y="115" font-size="12" font-weight="700" fill="#10b981">E</text>
  <rect x="160" y="40" width="60" height="20" fill="#fbbf24" stroke="#b45309"/>
  <text x="190" y="35" text-anchor="middle" font-size="11">V₁</text>
  <rect x="260" y="40" width="60" height="20" fill="#fbbf24" stroke="#b45309"/>
  <text x="290" y="35" text-anchor="middle" font-size="11">V₂</text>
  <path d="M 80 110 L 350 110" stroke="#f97316" stroke-width="2" marker-end="url(#a42)"/>
  <text x="200" y="200" text-anchor="middle" font-size="13" font-weight="700">E = V₁ + V₂</text>
  <defs><marker id="a42" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#f97316"/></marker></defs>
</svg>`,
  formula: { expr: "Σ E = Σ (I × R)", plain: "閉ループで、起電力の総和 = 電圧降下の総和。回路網の解析の基礎。" },
  mistakes: [
    "向きを決めずに足し引きしてしまう。1周する向きを最初に決めて、その向きと逆の電圧はマイナスで足す。",
    "起電力Eと電圧降下Vを混同しがち。Eは『持ち上げる』、Vは『下がる』。",
  ],
  related: [
    { id: "kirchhoff-1", diff: "1は電流則、2は電圧則。", },
    { id: "emf", diff: "起電力Eが電位を持ち上げる側。" },
    { id: "voltage-drop", diff: "電圧降下が下げる側。" },
  ],
});

// ===== 29. 磁束密度 B =====
terms.push({
  id: "flux-density", no: 29, name: "磁束密度 B[T]", category: "magnetic",
  oneLiner: "1m²あたりの磁束の本数。磁界の『濃さ』",
  meaning: "磁束Φを断面積Aで割ったもの。1m²あたり何本の磁力線が通っているかを示す『密度』。単位はT（テスラ）またはWb/m²。",
  principle: "B = μH の関係で、磁界の強さHに透磁率μをかけたものが磁束密度B。Hは『外からかけた磁界の元気度』、Bは『その物質の中で実際にできた密度』というイメージ。電磁力 F = BIL のBもこれ。",
  svg: `<svg viewBox="0 0 400 220" role="img" aria-label="磁束密度">
  <rect x="40" y="50" width="120" height="120" fill="#f1f5f9" stroke="#94a3b8"/>
  <text x="100" y="35" text-anchor="middle" font-size="12" font-weight="700">B 小</text>
  <line x1="40" y1="80" x2="160" y2="80" stroke="#10b981" stroke-width="2"/>
  <line x1="40" y1="120" x2="160" y2="120" stroke="#10b981" stroke-width="2"/>
  <line x1="40" y1="160" x2="160" y2="160" stroke="#10b981" stroke-width="2"/>
  <text x="100" y="195" text-anchor="middle" font-size="11" fill="#475569">疎（まばら）</text>
  <rect x="240" y="50" width="120" height="120" fill="#f1f5f9" stroke="#94a3b8"/>
  <text x="300" y="35" text-anchor="middle" font-size="12" font-weight="700">B 大</text>
  <line x1="240" y1="60" x2="360" y2="60" stroke="#10b981" stroke-width="2"/>
  <line x1="240" y1="75" x2="360" y2="75" stroke="#10b981" stroke-width="2"/>
  <line x1="240" y1="90" x2="360" y2="90" stroke="#10b981" stroke-width="2"/>
  <line x1="240" y1="105" x2="360" y2="105" stroke="#10b981" stroke-width="2"/>
  <line x1="240" y1="120" x2="360" y2="120" stroke="#10b981" stroke-width="2"/>
  <line x1="240" y1="135" x2="360" y2="135" stroke="#10b981" stroke-width="2"/>
  <line x1="240" y1="150" x2="360" y2="150" stroke="#10b981" stroke-width="2"/>
  <line x1="240" y1="165" x2="360" y2="165" stroke="#10b981" stroke-width="2"/>
  <text x="300" y="195" text-anchor="middle" font-size="11" fill="#475569">密（ぎゅっと）</text>
</svg>`,
  formula: { expr: "B = Φ / A = μH", plain: "磁束密度B[T] = 磁束Φ[Wb] ÷ 面積A[m²]。または透磁率μ × 磁界の強さH。" },
  mistakes: [
    "BとΦを混同。Bは密度（1m²あたり）、Φは総量。",
    "B = μH。μは物質ごとに違う。鉄ならBが大きくなりやすい。",
  ],
  related: [
    { id: "magnetic-flux", diff: "ΦはBの『総量』。BはΦの『密度』。" },
    { id: "magnetic-field-strength", diff: "Hは原因（外からの力）、Bは結果（中での密度）。" },
    { id: "permeability", diff: "μ大→同じHでもB大。" },
  ],
});

// ===== 30. 磁気回路 =====
terms.push({
  id: "magnetic-circuit", no: 30, name: "磁気回路", category: "magnetic",
  oneLiner: "磁束が流れる『輪っか』。電気回路と同じ考え方ができる",
  meaning: "鉄心（コア）をリング状にしてコイルを巻いたものなど、磁束Φがぐるっと一周する経路のこと。電気の回路と同じ感覚で計算できるのがミソ。",
  principle: "電気回路の『電圧V = 抵抗R × 電流I』に対応して、磁気回路では『起磁力NI = 磁気抵抗Rm × 磁束Φ』。NIが電池、Rmが抵抗、Φが電流、というアナロジー。",
  svg: `<svg viewBox="0 0 400 220" role="img" aria-label="磁気回路">
  <rect x="80" y="40" width="240" height="140" rx="20" fill="none" stroke="#475569" stroke-width="14"/>
  <g stroke="#0f172a" stroke-width="2" fill="none">
    <path d="M 100 50 Q 110 30 120 50"/>
    <path d="M 120 50 Q 130 30 140 50"/>
    <path d="M 140 50 Q 150 30 160 50"/>
    <path d="M 160 50 Q 170 30 180 50"/>
  </g>
  <text x="140" y="20" text-anchor="middle" font-size="11" fill="#0f172a">N回巻き</text>
  <path d="M 80 100 L 80 80" stroke="#f97316" stroke-width="3" marker-end="url(#a30)"/>
  <text x="60" y="95" font-size="11" fill="#f97316">I</text>
  <path d="M 200 110 L 280 110" stroke="#10b981" stroke-width="3" marker-end="url(#a30g)"/>
  <text x="240" y="100" text-anchor="middle" font-size="11" fill="#10b981" font-weight="700">磁束Φ</text>
  <text x="200" y="200" text-anchor="middle" font-size="11" fill="#475569">NI（起磁力）→ Rm（磁気抵抗）→ Φ（磁束）</text>
  <defs>
    <marker id="a30" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#f97316"/></marker>
    <marker id="a30g" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#10b981"/></marker>
  </defs>
</svg>`,
  formula: { expr: "NI = Rm × Φ", plain: "起磁力NI = 磁気抵抗Rm × 磁束Φ。電気回路のオームの法則と同じ形。" },
  mistakes: [
    "磁束は電流のように『流れている』わけではないが、計算上は流れと同じように扱える。",
    "鉄心が太く短いほどRmは小さく、磁束は流れやすい。",
  ],
  related: [
    { id: "mmf", diff: "NIが起磁力（電気でいう電池）。" },
    { id: "reluctance", diff: "Rmが磁気抵抗（電気でいう抵抗）。" },
    { id: "magnetic-flux", diff: "Φが磁束（電気でいう電流）。" },
    { id: "ohms-law", diff: "電気の V=RI と同じ構造で NI=RmΦ。" },
  ],
});

// ===== 31. 起磁力 NI =====
terms.push({
  id: "mmf", no: 31, name: "起磁力 NI[A]", category: "magnetic",
  oneLiner: "コイルの巻数 N × 電流 I。磁束を発生させる『元気の素』",
  meaning: "電気回路でいう電池のような存在。コイルの巻数Nが多いほど、流す電流Iが大きいほど、強い磁束を発生できます。単位はA（アンペア回数とも）。",
  principle: "1ターンのコイルに電流Iを流すと磁界ができる。これをN回巻けば、効果はN倍。したがって起磁力 = NI。磁気回路の『電圧』にあたる量で、Rmと組み合わせてΦを決定します。",
  svg: `<svg viewBox="0 0 400 220" role="img" aria-label="起磁力">
  <g>
    <text x="100" y="25" text-anchor="middle" font-size="13" font-weight="700">N=3, I=1A → NI=3A</text>
    <line x1="60" y1="120" x2="160" y2="120" stroke="#0f172a" stroke-width="3"/>
    <g stroke="#0f172a" stroke-width="2" fill="none">
      <path d="M 70 120 Q 80 90 90 120"/>
      <path d="M 100 120 Q 110 90 120 120"/>
      <path d="M 130 120 Q 140 90 150 120"/>
    </g>
    <path d="M 70 140 L 50 140" stroke="#f97316" stroke-width="2" marker-end="url(#a31)"/>
    <text x="40" y="135" font-size="10" fill="#f97316">I</text>
  </g>
  <g>
    <text x="300" y="25" text-anchor="middle" font-size="13" font-weight="700">N=6, I=1A → NI=6A</text>
    <line x1="240" y1="120" x2="360" y2="120" stroke="#0f172a" stroke-width="3"/>
    <g stroke="#0f172a" stroke-width="2" fill="none">
      <path d="M 248 120 Q 254 95 260 120"/>
      <path d="M 264 120 Q 270 95 276 120"/>
      <path d="M 280 120 Q 286 95 292 120"/>
      <path d="M 296 120 Q 302 95 308 120"/>
      <path d="M 312 120 Q 318 95 324 120"/>
      <path d="M 328 120 Q 334 95 340 120"/>
    </g>
    <text x="300" y="170" text-anchor="middle" font-size="11" fill="#10b981" font-weight="700">磁束Φ 2倍に！</text>
  </g>
  <text x="200" y="205" text-anchor="middle" font-size="11" fill="#475569">巻数を増やすか電流を増やせばΦが増える</text>
  <defs><marker id="a31" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#f97316"/></marker></defs>
</svg>`,
  formula: { expr: "F_m = NI", plain: "起磁力 = 巻数N × 電流I。単位はA（巻数は無次元なので電流の単位がそのまま残る）。" },
  mistakes: [
    "『力』とついているが力[N]ではない。磁気回路でいう『電圧』に相当する量。",
    "巻数を増やすにも線が長くなって電気抵抗が増える、というトレードオフがある。",
  ],
  related: [
    { id: "magnetic-circuit", diff: "磁気回路の『電池』にあたる量。" },
    { id: "reluctance", diff: "Rmと組み合わさってΦを決める。" },
    { id: "coil", diff: "コイルにかけた電流の効果がNIにまとまる。" },
  ],
});
