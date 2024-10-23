# コーディングガイドライン

## 基本仕様

### 対応ブラウザ

- Windows Edge / Chrome / Firefox: リリース時点での最新版
- macOS Chrome / Firefox / Safari: リリース時点での最新版
- Android Chrome: リリース時点での最新版
- iOS Safari : リリース時点での最新版

### ディレクトリ構成

```
ルート
├─index.html
└─css
 　└─styles.css
└─img
　　├─common
　　└─index
└─js
　　├─index.js
　　└─script.js
└─sass
　　├─base
　　├─cms
　　├─component
　　├─global
　　├─layout
　　├─project
　　├─utility
　　└─styles.scss
└─.vscode
　　└─settings.json
```

### ブレークポイント

- ブレークポイントは 768px の 1 箇所を基本とする。
- 768px 以上でパソコンとタブレット、767px 以下でスマートフォンとしてレイアウトする。
- タブレットは基本的にはパソコンと同様のレイアウトを採用する。
- ヘッダー等で 1 箇所のブレークポイントではレイアウトの調整が困難な場合には適宜ブレイクポイントを追加する。その際にはブレークポイントの数が多くなりすぎないように変数化するなど工夫する。

## HTML コーディング

### HTML バージョン

原則として HTML Living Standard の規定に従う。

### 文字コード

- UTF-8 を使用する。
- 各ページの head 要素内の可能な限り上部に`<meta charset="utf-8">`を記述する。

### viewport の指定について

原則として下記の記述を標準とする。

```html
<meta name="viewport" content="width=device-width,initial-scale=1.0" />
```

### マークアップの検証

- W3C の勧告に基づいたマークアップとする。
- 検証には「The W3C Markup Validation Service」を用いて、"Error"および"Warning"判定の無いページを作成する。

## CSS コーディング

### 記述箇所

- 原則として CSS は外部ファイルに記述し link タグで読み込む。
- タグの sytle 属性に直接記述する方法（インラインでの記述）は行わない。

### 単位と表記

- フォントや余白の単位は原則として px を使用する。
- line-height には単位をつけない。
- letter-spacing には em を使用する。
- カラーコードは 3 文字または 6 文字の 16 進表記を使用する（透過が必要な場合は rgb()を使用する）。

### CSS を適用するセレクタ

- 原則として各要素に設定した class 属性名に対してスタイルを適用する。
- id 属性名や要素セレクタに対してはスタイルを適用しない。
- ただし、各要素に一括してスタイルを適用する必要がある場合は要素セレクタに対してスタイルを適用する。

### CSS 設計

CSS 設計には FLOCSS をベースとしたルールを採用する。

sass フォルダは以下の定義で運用する：

- base：基本スタイル
  - reset：ブラウザ毎のスタイルを標準化
  - base：サイト共通のスタイルを要素セレクタに対して指定
- global：グローバルに使用する関数や変数
  - functions：関数を定義
  - mixin：mixin を定義
  - variables：変数を定義
- layout：サイトの大枠となる全ページ共通要素のスタイル
- component：複数のページで使われている共通パーツ
  - 3 回以上使い回すパーツは積極的に component 化する。
- project：セクション固有のスタイル。ページのセクション毎に作成する。
  - ページ名＋セクション名で命名する。
- utility：汎用的に使用する調整用のスタイル

sass のコンパイルには Visual Studio Code の拡張機能である Live Sass Compiler を使用する。Live Sass Compiler の設定については settings.json を参照する。

### クラス名の命名規則

- ブロックとなる要素のクラス名には、原則としてハイフン（hoge-fuga）を使用する。
- 以下の接頭辞を採用する：
  - c-：component
  - p-：project
  - l-：layout
  - u-：utility
  - js-：JavaScript で使用するクラス
