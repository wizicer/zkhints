// Data types
interface PointMap {
  [key: string]: number[];
}

interface ColorMap {
  [key: string]: number;
}

type Edge = [string, string];

// Constants
const POINTS_1: PointMap = {
  a: [300, 40],
  b: [119, 187],
  c: [481, 187],
  d: [175, 359],
  e: [425, 359],
  f: [300, 88],
  g: [175, 191],
  h: [420, 191],
  i: [215, 311],
  j: [385, 311],
};

const COLORS_1: ColorMap = {
  a: 0,
  b: 1,
  c: 1,
  d: 0,
  e: 2,
  f: 2,
  g: 2,
  h: 0,
  i: 1,
  j: 0,
};

const DOT_1: Edge[] = [
  ["a", "b"],
  ["a", "c"],
  ["c", "e"],
  ["d", "e"],
  ["b", "d"],
  ["a", "f"],
  ["b", "g"],
  ["c", "h"],
  ["d", "i"],
  ["e", "j"],
  ["h", "g"],
  ["h", "i"],
  ["g", "j"],
  ["f", "j"],
  ["f", "i"],
];

const POINTS_2: PointMap = {
  a: [100, 200],
  b: [200, 50],
  c: [200, 150],
  d: [200, 250],
  e: [200, 350],
  f: [300, 100],
  g: [300, 300],
  h: [400, 50],
  i: [400, 150],
  j: [400, 250],
  k: [400, 350],
  l: [500, 200],
};

const COLORS_2_1: ColorMap = {
  a: 0,
  b: 1,
  c: 2,
  d: 1,
  e: 0,
  f: 0,
  g: 2,
  h: 1,
  i: 0,
  j: 1,
  k: 0,
  l: 2,
};

const COLORS_2_2: ColorMap = {
  a: 2,
  b: 2,
  c: 0,
  d: 1,
  e: 2,
  f: 1,
  g: 0,
  h: 0,
  i: 0,
  j: 2,
  k: 1,
  l: 1,
};

const COLORS_2_3: ColorMap = {
  a: 1,
  b: 1,
  c: 2,
  d: 0,
  e: 2,
  f: 0,
  g: 1,
  h: 0,
  i: 1,
  j: 0,
  k: 2,
  l: 2,
};

const COLORS_2_4: ColorMap = {
  // should be weighted half
  a: 0,
  b: 0,
  c: 1,
  d: 2,
  e: 0,
  f: 2,
  g: 1,
  h: 0,
  i: 1,
  j: 0,
  k: 2,
  l: 2,
};

const DOT_2: Edge[] = [
  ["a", "c"],
  ["a", "d"],
  ["a", "l"],
  ["b", "c"],
  ["b", "f"],
  ["b", "k"],
  ["c", "d"],
  ["c", "f"],
  ["d", "g"],
  ["d", "e"],
  ["e", "g"],
  ["e", "h"],
  ["f", "h"],
  ["f", "i"],
  ["g", "j"],
  ["g", "k"],
  ["h", "i"],
  ["i", "j"],
  ["j", "k"],
  ["l", "i"],
  ["l", "j"],
];

const COLORS = ["MediumBlue", "DarkOrchid", "DarkTurquoise"];
// small number of permutations, so just list them all:
const PERMUTATIONS = [
  [0, 1, 2],
  [0, 2, 1],
  [1, 0, 2],
  [1, 2, 0],
  [2, 0, 1],
  [2, 1, 0],
];

// shift by two {0,1,2,3,4,5} * 2
const base_equivalence = ["a", "c", "b", "f", "h", "i", "l", "j", "k", "g", "e", "d"];
const shifted_equivalence = base_equivalence.concat(base_equivalence);

// Language translations
const translations = {
  en: {
    title: "Interactive Zero Knowledge 3-Colorability Demonstration",
    intro1:
      'This is an interactive demonstration of the <a href="http://en.wikipedia.org/wiki/Zero-knowledge_proof">zero knowledge proof protocol</a> for 3-colorable graphs. Zero-knowledge proofs permit you to convince a <em>verifier</em> of the truth of a fact (namely, that a graph is three colorable), without revealing the actual three coloring of the graph.',
    intro2:
      "This application allows you to play the game as a verifier. The application (the prover) offers you a graph whose colorings are obscured from you, and you are allowed to pick an edge, which the verifier will reveal the coloring of. Select a graph and try clicking on some edges.",
    pickGraph: "Pick a graph",
    reveal: "Reveal",
    "turbo-label": "Turbo:",
    confidence: "Confidence:",
    graph1: "Graph 1",
    graph2: "Graph 2",
    explanation1:
      "You may notice that the colors change between different rounds of the game; although the prover is not allowed to change its mind once it offers you a choice, it's allowed to mix up the colorings between choices. Indeed, if it didn't, you could reverse engineer the full coloring (making this not a zero-knowledge proof.) You can check that the application is not reneging on its promises by pressing the <em>Reveal</em> button. (Since this tells you what the true coloring is, this is obviously not part of the zero-knowledge protocol!)",
    explanation2:
      "Once you get tired of clicking edges manually, you can select Turbo to speed things up. As you play more rounds of the protocol, the probability that the prover is lying (the graph is not 3-colorable) but has managed to get lucky in the edges you picked goes down: this is reflected in the confidence metric.",
    exercise1:
      "<em>Exercise 1:</em> Currently, you can only select adjacent pairs of nodes to check. Would the proof still be zero knowledge if you could pick arbitrary pairs of nodes to check?",
    exercise2:
      "<em>Exercise 2:</em> The equation currently being used for confidence is <code>1-(1/E)^n</code>, where <code>E</code> is the number of edges in the graph, and <code>n</code> is the number of trials run. Is this the correct equation? Why is there no prior?",
    "toggle-language": "切换到中文",
    reset: "Reset",
  },
  zh: {
    title: "交互式零知识三色问题演示",
    intro1:
      '这是针对三色图的<a href="http://en.wikipedia.org/wiki/Zero-knowledge_proof">零知识证明协议</a>的交互式演示。零知识证明可以让<em>验证者</em>相信一个事实的真实性（即，一个图仅三色），而无需揭示图的具体颜色。',
    intro2:
      "此应用程序允许您以验证者的身份玩游戏。该应用程序（证明者）为您提供了一个图形，其颜色对您来说是隐藏的，并且您可以选择一条边，验证器将显示其颜色。选择一个图并尝试点击一些边。",
    pickGraph: "选择一个图开始",
    reveal: "揭露",
    "turbo-label": "自动:",
    confidence: "置信度:",
    graph1: "图 1",
    graph2: "图 2",
    explanation1:
      "您可能会注意到游戏的不同轮次之间颜色会发生变化；尽管证明者一旦为您提供选择就不允许改变主意，但允许混合选择之间的颜色。事实上，如果没有，您可以对整个着色进行逆向工程（使其不是零知识证明）您可以通过按<em>揭露</em>按钮检查应用程序是否违背其承诺。（既然这告诉你真正的颜色是什么，这显然不是零知识协议的一部分！）",
    explanation2:
      "一旦厌倦了手动单击边，您可以选择自动来加快速度。当你进行了更多轮的协议时，证明者由于幸运而说谎（图不是三色）概率在下降，这也反映在置信度指标中。",
    exercise1:
      "<em>练习 1：</em> 目前，您只能选择相邻的节点对进行检查。如果您可以选择任意节点对来检查，证明仍然是零知识吗？",
    exercise2:
      "<em>练习 2：</em> 当前用于置信度的方程是 <code>1-(1/E)^n</code>，其中 <code>E</code> 是图中的边，<code>n</code>是运行试验的次数。这是正确的等式吗？为什么没有先验？",
    "toggle-language": "Switch to English",
    reset: "重置",
  },
};

// Global state
let globalPoints: PointMap | null = null;
let globalColors: ColorMap[][] = [];
let globalDot: Edge[] | null = null;
let globalAuto = false;
let globalTricky = false;
let globalTrials = 0;
let globalLanguage = "en"; // Default language is English
let rescheduleTimer = -1;

// Utility functions
function random_pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function random_permutation(): number[] {
  return random_pick(PERMUTATIONS);
}

function mk(n: string): SVGElement {
  return document.createElementNS("http://www.w3.org/2000/svg", n);
}

function get(id: string): HTMLElement | null {
  return document.getElementById(id);
}

function mapWithKey<T>(obj: { [key: string]: T }, f: (key: string, value: T) => void): void {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      f(key, obj[key]);
    }
  }
}

function empty(node: HTMLElement | null): void {
  if (!node) return;
  while (node.hasChildNodes()) {
    node.removeChild(node.lastChild!);
  }
}

// Add map method to NodeList prototype
declare global {
  interface NodeList {
    map(callback: (node: Node) => void): void;
  }
}

if (!NodeList.prototype.map) {
  NodeList.prototype.map = function (callback: (node: Node) => void): void {
    for (let i = 0; i < this.length; i++) {
      callback(this[i]);
    }
  };
}

function id_equivalence(): { [key: string]: string } {
  const r: { [key: string]: string } = {};
  if (globalPoints) {
    mapWithKey(globalPoints, (name) => {
      r[name] = name;
    });
  }
  return r;
}

function random_tricky_equivalence(): { [key: string]: string } {
  const r: { [key: string]: string } = {};
  const start = Math.floor(Math.random() * 6) * 2;
  base_equivalence.forEach((el, i) => {
    r[shifted_equivalence[i + start]] = el;
  });
  return r;
}

function reschedule(n: number, f: () => void): void {
  clearTimeout(rescheduleTimer);
  rescheduleTimer = setTimeout(f, n);
}

function updateLanguage(): void {
  const lang = translations[globalLanguage as keyof typeof translations];

  // Update all text elements
  document.title = lang.title;

  const elements = [
    "intro1",
    "intro2",
    "pick-graph-text",
    "reveal",
    "turbo-label",
    "confidence-label",
    "graph1",
    "graph2",
    "explanation1",
    "explanation2",
    "exercise1",
    "exercise2",
    "toggle-language",
  ];

  elements.forEach((id) => {
    const el = get(id);
    if (el) {
      if (
        id === "intro1" ||
        id === "intro2" ||
        id === "explanation1" ||
        id === "explanation2" ||
        id === "exercise1" ||
        id === "exercise2"
      ) {
        el.innerHTML = lang[id as keyof typeof lang];
      } else {
        el.textContent = lang[id as keyof typeof lang];
      }
    }
  });
}

function setup(name: string): void {
  if (name === "honest") {
    globalPoints = POINTS_1;
    globalColors = [[COLORS_1]];
    globalDot = DOT_1;
    globalTricky = false;
  } else {
    globalPoints = POINTS_2;
    // 2_4 weighted half because it has more symmetries
    globalColors = [
      [COLORS_2_1, COLORS_2_2, COLORS_2_3, COLORS_2_1, COLORS_2_2, COLORS_2_3, COLORS_2_4],
    ];
    globalDot = DOT_2;
    globalTricky = true;
  }

  globalAuto = false;

  const turboEl = get("turbo") as HTMLInputElement | null;
  if (turboEl) turboEl.checked = false;

  globalTrials = 0;

  const confidenceEl = get("confidence-value");
  if (confidenceEl) confidenceEl.textContent = "0";

  main();
}

function main(): void {
  // construct svg on the fly
  const gMain = get("main");
  empty(gMain); // RESET

  if (!gMain) return;

  // handles to SVG
  const gSvg = mk("svg") as SVGSVGElement;
  gSvg.style.height = "380px";
  gSvg.style.width = "100%";
  gSvg.style.cursor = "default";
  gMain.appendChild(gSvg);

  const gEdges = mk("g");
  const gNodes = mk("g");
  const gHover = mk("g");
  gSvg.appendChild(gEdges);
  gSvg.appendChild(gHover);
  gSvg.appendChild(gNodes);

  const gLookup: { [key: string]: any } = {};
  const gChoices: (() => boolean | undefined)[] = [];
  const gPerm = random_permutation();
  let gRevealed = false;
  const gReveal = get("reveal");
  const gTurbo = get("turbo") as HTMLInputElement | null;
  const gConfidence = get("confidence-value");

  let gEquivalence: { [key: string]: string };
  if (globalTricky) {
    gEquivalence = random_tricky_equivalence();
  } else {
    gEquivalence = id_equivalence();
  }

  if (gConfidence) gConfidence.style.color = "black";
  if (gReveal) {
    gReveal.disabled = false;
    gReveal.textContent = translations[globalLanguage].reveal;
  }
  if (gTurbo) gTurbo.disabled = false;

  if (gReveal) {
    gReveal.onclick = function () {
      // RESET
      reschedule(0, function () {});
      gNodes.childNodes.map(function (x: any) {
        if (x.reveal) x.reveal();
      });
      gSvg.style.cursor = "pointer";
      gRevealed = true;
      if (gReveal) gReveal.textContent = translations[globalLanguage].reset;
      if (gReveal) gReveal.onclick = main;
    };
  }

  if (gTurbo) {
    gTurbo.onclick = function () {
      if (gTurbo && gTurbo.checked) {
        globalAuto = true;
        main();
      } else {
        globalAuto = false;
        reschedule(0, main);
      }
    };
  }

  // I need this to run *before* the internal handlers.
  gSvg.addEventListener(
    "click",
    function () {
      if (gRevealed) {
        main();
      }
    },
    true
  );

  // Add initial text to SVG if no graph is selected yet
  if (!globalPoints || !globalDot) {
    const text = mk("text");
    text.setAttribute("dx", "50%");
    text.setAttribute("dy", "50%");
    text.setAttribute("text-anchor", "middle");
    text.textContent = translations[globalLanguage].pickGraph;
    gSvg.appendChild(text);

    const path = mk("path");
    path.setAttribute("d", "M 310 200 L 400 280");
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", "black");
    path.setAttribute("stroke-width", "30");
    path.setAttribute("marker-end", "url(#Triangle)");
    gSvg.appendChild(path);

    // Add marker definition
    const defs = mk("defs");
    const marker = mk("marker");
    marker.setAttribute("id", "Triangle");
    marker.setAttribute("viewBox", "0 0 10 10");
    marker.setAttribute("refX", "0");
    marker.setAttribute("refY", "5");
    marker.setAttribute("markerUnits", "strokeWidth");
    marker.setAttribute("markerWidth", "4");
    marker.setAttribute("markerHeight", "3");
    marker.setAttribute("orient", "auto");

    const markerPath = mk("path");
    markerPath.setAttribute("d", "M 0 0 L 10 5 L 0 10 z");

    marker.appendChild(markerPath);
    defs.appendChild(marker);
    gSvg.appendChild(defs);

    return;
  }

  // setup nodes
  const gColors = random_pick(random_pick(globalColors));
  mapWithKey(globalPoints, function (ptname, pt) {
    const shape = mk("circle") as SVGCircleElement;
    shape.setAttribute("cx", pt[0].toString());
    shape.setAttribute("cy", pt[1].toString());
    shape.setAttribute("r", "10");

    if (!globalAuto) {
      shape.setAttribute("fill", "black");
    } else {
      shape.setAttribute("fill", "grey");
    }

    (shape as any).selected = 0;
    (shape as any).color = gPerm[gColors[gEquivalence[ptname]]];
    (shape as any).reveal = function () {
      if (!(shape as any).revealed) {
        shape.setAttribute("fill", COLORS[(shape as any).color]);
        (shape as any).revealed = true;
      }
    };
    (shape as any).revealed = false;
    gNodes.appendChild(shape);
    gLookup[ptname] = shape;
  });

  // setup edges
  globalDot.forEach(function (edge) {
    const line = mk("line") as SVGLineElement;
    // make it easier to actually click the line
    const hoverBox = mk("line") as SVGLineElement;

    [line, hoverBox].forEach(function (x) {
      if (globalPoints) {
        x.setAttribute("x1", globalPoints[edge[0]][0].toString());
        x.setAttribute("y1", globalPoints[edge[0]][1].toString());
        x.setAttribute("x2", globalPoints[edge[1]][0].toString());
        x.setAttribute("y2", globalPoints[edge[1]][1].toString());
      }
    });

    if (!globalAuto) {
      line.setAttribute("stroke", "black");
    } else {
      line.setAttribute("stroke", "grey");
    }

    line.setAttribute("stroke-width", "1px");
    hoverBox.setAttribute("stroke", "rgba(255,255,255,0)"); // none doesn't work
    hoverBox.setAttribute("stroke-width", "15px");

    if (!globalAuto) {
      hoverBox.onmouseover = function () {
        if (!gRevealed) {
          line.setAttribute("stroke", "cyan");
          line.setAttribute("stroke-width", "3px");
        }
      };

      hoverBox.onmouseout = function () {
        if (!gRevealed) {
          line.setAttribute("stroke", "black");
          line.setAttribute("stroke-width", "1px");
        }
      };
    }

    const select = function (): boolean | undefined {
      if (!gRevealed) {
        gRevealed = true;
        gLookup[edge[0]].reveal();
        gLookup[edge[1]].reveal();

        const makeGray = function () {
          gEdges.childNodes.map(function (x: any) {
            x.setAttribute("stroke", "gray");
          });

          gNodes.childNodes.map(function (x: any) {
            if (!x.revealed) {
              x.setAttribute("fill", "gray");
            }
          });
        };

        globalTrials++;

        if (gLookup[edge[0]].color === gLookup[edge[1]].color) {
          makeGray();
          gSvg.style.cursor = "pointer";
          line.setAttribute("stroke-width", "3px");
          line.setAttribute("stroke", "red");
          globalTrials = 0;
          if (gConfidence) gConfidence.style.color = "red";
          return false;
        } else {
          if (!globalAuto) {
            makeGray();
            gSvg.style.cursor = "pointer";
          }

          line.setAttribute("stroke-width", "3px");
          line.setAttribute("stroke", "green");

          if (gConfidence) {
            gConfidence.style.color = "black";
            gConfidence.textContent = Math.min(
              (1 - Math.pow(1 - 1 / globalDot.length, globalTrials)) * 100,
              99.99
            ).toFixed(2);
          }

          return true;
        }
      }
      return undefined;
    };

    if (!globalAuto) {
      hoverBox.onclick = function () {
        select();
      };
      hoverBox.style.cursor = "pointer";
    }

    gEdges.appendChild(line);
    gHover.appendChild(hoverBox);
    gChoices.push(select);
  });

  if (globalAuto) {
    reschedule(0, function () {
      const result = random_pick(gChoices)();
      if (result) {
        // nope, try again
        reschedule(140, function () {
          main();
        });
      } else {
        // caught him! stop
      }
    });
  }
}

function init(): void {
  document.addEventListener("DOMContentLoaded", function () {
    const revealEl = get("reveal");
    const turboEl = get("turbo") as HTMLInputElement | null;

    if (revealEl) revealEl.disabled = true;
    if (turboEl) {
      turboEl.disabled = true;
      turboEl.checked = false;
    }

    // Set up language toggle
    const toggleEl = get("toggle-language");
    if (toggleEl) {
      toggleEl.addEventListener("click", function () {
        globalLanguage = globalLanguage === "en" ? "zh" : "en";
        updateLanguage();
      });
    }

    updateLanguage();
  });
}

// Export functions for global use
export { init, setup, translations, globalLanguage };
