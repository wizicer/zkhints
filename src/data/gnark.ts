// Gnark cheatsheet data

import { sections } from "./gnark/cheatsheet";
import { recursiveSchemeData as recursive } from "./gnark/recursive";
import type { Language } from "../i18n";

export { sections, recursive };

const localizedText: Partial<Record<Language, Record<string, string>>> = {
  ja: {
  "Getting Started": "はじめに",
  "Basic setup and usage of Gnark": "Gnark の基本的なセットアップと使い方",
  "Installing Gnark": "Gnark のインストール",
  "- frontend.Variable is abbreviated as Var\n- In-circuit code vs out-circuit code distinction is important":
    "- frontend.Variable は Var と略記しています\n- in-circuit code と out-circuit code の区別が重要です",
  "Define Circuit": "Circuit を定義する",
  "Basic circuit definition with secret and public inputs":
    "secret input と public input を持つ基本的な circuit 定義",
  Compile: "コンパイル",
  "Compiling the circuit and creating witnesses": "circuit をコンパイルし、witness を作成します",
  "Prove: Groth16": "証明: Groth16",
  "Generate and verify a Groth16 proof": "Groth16 proof を生成して検証します",
  "Prove: PlonK": "証明: PlonK",
  "Generate and verify a PlonK proof": "PlonK proof を生成して検証します",
  API: "API",
  "Core API functions for building circuits": "circuit 構築で使う主要 API functions",
  Assertions: "アサーション",
  "Common assertion functions in gnark": "gnark でよく使う assertion functions",
  Arithmetics: "算術演算",
  "Arithmetic operations in gnark": "gnark の算術演算",
  "Binary Operations": "二値演算",
  "Binary operations in gnark": "gnark の二値演算",
  "Flow Control": "フロー制御",
  "Flow control operations in gnark": "gnark のフロー制御",
  Debug: "デバッグ",
  "Run the program with -tags=debug to display a more verbose stack trace":
    "-tags=debug を付けて program を実行すると、より詳しい stack trace を表示できます",
  "Standard Library": "標準ライブラリ",
  "Common cryptographic primitives": "よく使う cryptographic primitives",
  "MiMC Hash": "MiMC Hash",
  "MiMC hash implementation in gnark": "gnark における MiMC hash の実装",
  "EdDSA Signature": "EdDSA Signature",
  "EdDSA signature verification in gnark": "gnark における EdDSA signature verification",
  "Merkle Proof": "Merkle Proof",
  "Merkle tree proof verification in gnark": "gnark における Merkle tree proof verification",
  "Selector Package": "Selector Package",
  "Functions for selecting and manipulating arrays": "array の選択と操作に使う functions",
  "Slice Operations": "Slice 操作",
  "Slice operations in the selector package": "selector package の slice 操作",
  "Multiplexer Operations": "Multiplexer 操作",
  "Multiplexer operations in the selector package": "selector package の multiplexer 操作",
  Serialization: "シリアライズ",
  "Serializing and deserializing circuits and witnesses":
    "circuits と witnesses の serialize / deserialize",
  "Constraint System": "Constraint System",
  "Serialize and deserialize a constraint system": "constraint system を serialize / deserialize します",
  Witness: "Witness",
  "Serialize and deserialize a witness": "witness を serialize / deserialize します",
  "Smart Contract Integration": "Smart Contract 連携",
  "Exporting proofs and verifiers to Solidity": "proofs と verifiers を Solidity 向けに export します",
  "Export to Solidity": "Solidity へ export",
  "Export a verifier key to Solidity": "verifier key を Solidity へ export します",
  "Export Plonk Proof": "PlonK Proof を export",
  "Export a PlonK proof for use in Solidity": "Solidity で使う PlonK proof を export します",
  "Export Groth16 Proof": "Groth16 Proof を export",
  "Export a Groth16 proof for use in Solidity": "Solidity で使う Groth16 proof を export します",
  "External Library Usage": "外部ライブラリの利用",
  "Using gnark-crypto outside of circuits": "circuit 外で gnark-crypto を使う",
  "Using MiMC hash outside of circuits": "circuit 外で MiMC hash を使います",
  "Creating and verifying EdDSA signatures outside of circuits":
    "circuit 外で EdDSA signatures を作成・検証します",
  "Creating and verifying Merkle proofs outside of circuits":
    "circuit 外で Merkle proofs を作成・検証します",
  Concepts: "概念",
  "Important concepts and terminology": "重要な概念と用語",
  Glossary: "用語集",
  "Common terminology in zero-knowledge proofs": "zero-knowledge proofs でよく使う用語",
  Schemas: "スキーマ",
  "Mathematical representations of different proof systems":
    "さまざまな proof systems の mathematical representation",
  Resources: "リソース",
  "Useful resources for learning more about gnark": "gnark をさらに学ぶための useful resources",
  },
};

const translate = (value: string | undefined, lang: Language): string | undefined =>
  value ? localizedText[lang]?.[value] || value : value;

export const getSections = (lang: Language = "en") =>
  sections.map((section) => ({
    ...section,
    title: translate(section.title, lang),
    description: translate(section.description, lang),
    items: section.items.map((item) => ({
      ...item,
      title: translate(item.title, lang),
      note: translate(item.note, lang),
    })),
  }));
