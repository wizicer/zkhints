import dsl from "../assets/hinta/dsl.png";
import primitive from "../assets/hinta/primitive.png";
import application from "../assets/hinta/application.png";
import gas from "../assets/hinta/gas.png";
import gnark from "../assets/hinta/gnark.png";
import r1cs from "../assets/hinta/r1cs.png";
import plonkish from "../assets/hinta/plonkish.png";
import bugs from "../assets/hinta/bug.png";
import learning from "../assets/hinta/beginner.png";
import intermediate from "../assets/hinta/intermediate.png";
import discovery from "../assets/hinta/awesome.png";
import news from "../assets/hinta/news.png";
import events from "../assets/hinta/events.png";
import curve from "../assets/hinta/curve.png";
import constraint from "../assets/hinta/constraint.png";
import popularSnark from "../assets/hinta/popular-snark.png";
import transpiler from "../assets/hinta/transpiler.png";
import argument from "../assets/hinta/argument.png";
import paper from "../assets/hinta/paper.png";
import research from "../assets/hinta/research.png";
import glossary from "../assets/hinta/glossary.png";
import eips from "../assets/hinta/learn.png";
import type { Language, LocalizedText } from "../i18n";
import { localize } from "../i18n";

export interface Item {
  id: string;
  title: LocalizedText;
  path?: string;
  description: LocalizedText;
  image: ImageMetadata;
  construction?: boolean;
  sourceFile?: string;
}

export interface LocalizedItem extends Omit<Item, "title" | "description"> {
  title: string;
  description: string;
}

export interface Section {
  title: LocalizedText;
  items: Item[];
}

export interface LocalizedSection extends Omit<Section, "title" | "items"> {
  title: string;
  items: LocalizedItem[];
}

export const sections: Section[] = [
  {
    title: { en: "Writing Circuits", ja: "回路を書く" },
    items: [
      {
        id: "dsl",
        title: { en: "Circuit DSL", ja: "回路 DSL" },
        description: { en: "Domain Specific Language for writing zero-knowledge circuits", ja: "ゼロ知識回路を書くためのドメイン固有言語" },
        image: dsl,
        sourceFile: "src/data/dsl.ts",
      },
      {
        id: "primitive",
        title: { en: "SNARK Primitives", ja: "SNARK 基本部品" },
        description: { en: "Hash functions, Merkle trees, and other ZK building blocks", ja: "ハッシュ関数、Merkle tree などの ZK 構成要素" },
        image: primitive,
        sourceFile: "src/data/primitive.ts",
      },
      {
        id: "application",
        title: { en: "Applications", ja: "応用例" },
        description: { en: "Real-world applications of zero-knowledge proofs", ja: "Zero-Knowledge Proofs の実世界での活用例" },
        image: application,
        sourceFile: "src/data/application.ts",
      },
      {
        id: "gas",
        title: { en: "Gas Estimation", ja: "Gas 見積もり" },
        description: { en: "Cost estimation for ZK circuits and optimizations", ja: "ZK 回路のコスト見積もりと最適化" },
        image: gas,
        sourceFile: "src/data/gas.ts",
      },
      {
        id: "gnark",
        title: { en: "Gnark Cheatsheet", ja: "Gnark チートシート" },
        description: { en: "Circuit cheatsheet for gnark", ja: "gnark 向けの回路チートシート" },
        image: gnark,
        sourceFile: "src/data/gnark.ts",
      },
      {
        id: "plonkish",
        title: { en: "Plonkish Gadgets", ja: "Plonkish ガジェット" },
        description: { en: "Essential gadgets for building Plonkish constraint circuits", ja: "Plonkish 制約回路を構築するための基本ガジェット" },
        image: plonkish,
        sourceFile: "src/pages/plonkish.astro",
      },
      {
        id: "r1cs",
        title: { en: "R1CS Gadgets", ja: "R1CS ガジェット" },
        construction: true,
        description: {
          en: "Essential gadgets for building R1CS constraint circuits",
          ja: "R1CS 制約回路を構築するための基本ガジェット",
        },
        image: r1cs,
        sourceFile: "src/data/r1cs.ts",
      },
      {
        id: "bugs",
        title: { en: "Common Bugs", ja: "よくあるバグ" },
        construction: true,
        description: {
          en: "Common ZK bugs and debugging techniques",
          ja: "ZK でよくあるバグとデバッグ手法",
        },
        image: bugs,
        sourceFile: "src/data/bugs.ts",
      },
    ],
  },
  {
    title: { en: "Resources", ja: "リソース" },
    items: [
      {
        id: "learning",
        title: { en: "Learning", ja: "学習リソース" },
        description: { en: "Getting started with zero-knowledge proofs", ja: "Zero-Knowledge Proofs を学び始めるための資料" },
        image: learning,
        sourceFile: "src/data/list/learning.ts",
      },
      {
        id: "discovery",
        title: { en: "Discovery", ja: "情報収集" },
        description: { en: "Discover the latest news, events, and awesome lists.", ja: "最新ニュース、イベント、awesome list を探す" },
        image: discovery,
        sourceFile: "src/data/list/discovery.ts",
      },
      {
        id: "paper",
        title: { en: "Research Papers", ja: "研究論文" },
        description: { en: "Current research papers in zero-knowledge proofs", ja: "Zero-Knowledge Proofs に関する研究論文" },
        image: research,
        sourceFile: "src/data/list/paper.ts",
      },
      {
        id: "daily",
        title: { en: "Daily News", ja: "デイリーニュース" },
        description: { en: "Daily digest of ZK news", ja: "ZK ニュースの日次ダイジェスト" },
        image: news,
        sourceFile: "src/data/daily/index.ts",
      },
    ],
  },
  {
    title: { en: "SNARK Systems", ja: "SNARK システム" },
    items: [
      {
        id: "curve",
        title: { en: "Elliptic Curve", ja: "楕円曲線" },
        description: { en: "Comparison of common elliptic curves used in zero knowledge proofs", ja: "Zero-Knowledge Proofs でよく使われる楕円曲線の比較" },
        image: curve,
        sourceFile: "src/data/curve.ts",
      },
      {
        id: "constraint",
        title: { en: "Constraint System", ja: "制約システム" },
        construction: true,
        description: {
          en: "Comparing different ZK constraint systems",
          ja: "さまざまな ZK 制約システムの比較",
        },
        image: constraint,
      },
      {
        id: "snark",
        title: { en: "Popular zkSNARK", ja: "主要な zkSNARK" },
        construction: true,
        description: {
          en: "Overview of mainstream zkSNARK systems",
          ja: "主要な zkSNARK システムの概要",
        },
        image: popularSnark,
      },
      {
        id: "transpiler",
        title: { en: "Transpiler", ja: "トランスパイラ" },
        construction: true,
        description: {
          en: "Transpiling between different DSL or constraint system",
          ja: "異なる DSL や制約システム間の変換",
        },
        image: transpiler,
      },
      {
        id: "argument",
        title: { en: "SNARK Argument", ja: "SNARK Argument" },
        construction: true,
        description: {
          en: "Technical overview of ZK argument structures, like lookup",
          ja: "lookup など ZK argument 構造の技術概要",
        },
        image: argument,
      },
      {
        id: "commitment",
        title: { en: "Commitment Schemes", ja: "Commitment スキーム" },
        construction: true,
        description: {
          en: "Commitment schemes from pedersen to KZG",
          ja: "Pedersen から KZG までの commitment スキーム",
        },
        image: events,
      },
    ],
  },
  {
    title: { en: "Foundations & Future", ja: "基礎と未来" },
    items: [
      {
        id: "landmark",
        title: { en: "Landmark Papers", ja: "重要論文" },
        description: { en: "Essential academic papers in zero-knowledge research", ja: "Zero-Knowledge research における重要論文" },
        image: paper,
        sourceFile: "src/data/landmark.ts",
      },
      {
        id: "glossary",
        title: { en: "Terminology Glossary", ja: "用語集" },
        description: { en: "Common terms and definitions in zero-knowledge proofs", ja: "Zero-Knowledge Proofs の主要用語と定義" },
        image: glossary,
        sourceFile: "src/data/glossary.ts",
      },
    ],
  },
  {
    title: { en: "Ecosystem", ja: "エコシステム" },
    items: [
      {
        id: "eip",
        title: { en: "EIPs", ja: "EIPs" },
        description: { en: "ZKP related EIPs", ja: "ZKP に関連する EIPs" },
        image: eips,
        sourceFile: "docs/eip/eip-parser.js",
      },
      {
        id: "bitvm",
        title: { en: "BitVM", ja: "BitVM" },
        description: {
          en: "BitVM is the most significant improvement to Bitcoin, with targeting ZK proofs on Bitcoin.",
          ja: "BitVM は Bitcoin 上で ZK proofs を扱うための、Bitcoin にとって重要な改善です。",
        },
        construction: true,
        image: intermediate,
        sourceFile: "src/data/bitvm.ts",
      },
    ],
  },
  {
    title: { en: "Interactive", ja: "インタラクティブ" },
    items: [
      {
        id: "3color",
        path: "demo/3color",
        title: { en: "3-Colorability", ja: "3-彩色問題" },
        description: { en: "Interactive demonstration of the 3-colorability problem", ja: "3-彩色問題のインタラクティブデモ" },
        image: news,
      },
    ],
  },
];

export const getSections = (lang: Language = "en"): LocalizedSection[] =>
  sections.map((section) => ({
    ...section,
    title: localize(section.title, lang),
    items: section.items.map((item) => ({
      ...item,
      title: localize(item.title, lang),
      description: localize(item.description, lang),
    })),
  }));
