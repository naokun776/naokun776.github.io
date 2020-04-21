(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{544:function(t,n,l){t.exports=l.p+"img/3c2d602.png"},548:function(t,n,l){var content=l(585);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(37).default)("2a75b9b8",content,!0,{sourceMap:!1})},584:function(t,n,l){"use strict";var o=l(548);l.n(o).a},585:function(t,n,l){(n=l(36)(!1)).push([t.i,"h1.title[data-v-6da0e81e]{margin-top:0}div.box[data-v-6da0e81e]{border-radius:0}ins[data-v-6da0e81e]{margin-top:1rem;margin-bottom:1rem}",""]),t.exports=n},586:function(t,n,l){"use strict";l.r(n);var o,e=l(7),r=(l(59),l(20)),c=[function(){var t=this,n=t.$createElement,l=t._self._c||n;return l("div",{staticClass:"content"},[l("p",[t._v("タイトルの通りとてもリアルな夢を見ました。いわゆるRyzentoshというやつが動いた夢でした。"),l("br"),t._v("\nMac miniの新モデルが発表されたのでMac miniをCTOして買うか自作するか比較検討した結果、コストパフォーマンスに優れるRyzenを使用して自作することとしました。")]),t._v(" "),l("h1",[l("a",{staticClass:"anchor",attrs:{name:"構成",href:"#%E6%A7%8B%E6%88%90",rel:"nofollow","aria-hidden":"true"}},[l("span",{staticClass:"octicon octicon-link"})]),t._v("\n構成")]),t._v(" "),l("p",[t._v("ハードウェアの主要な構成は以下の通り。他のパーツに関しては気が向いたらレビューします。")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{attrs:{align:"center"}},[t._v("項目")]),t._v(" "),l("th",{attrs:{align:"left"}},[t._v("パーツ")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{attrs:{align:"center"}},[t._v("CPU")]),t._v(" "),l("td",{attrs:{align:"left"}},[t._v("AMD Ryzen9 3900X")])]),t._v(" "),l("tr",[l("td",{attrs:{align:"center"}},[t._v("M/B")]),t._v(" "),l("td",{attrs:{align:"left"}},[t._v("ASUS ROG STRIX X570-I Gaming")])]),t._v(" "),l("tr",[l("td",{attrs:{align:"center"}},[t._v("Memory")]),t._v(" "),l("td",{attrs:{align:"left"}},[t._v("G.Skill F4-3200C16D-64GTZN")])]),t._v(" "),l("tr",[l("td",{attrs:{align:"center"}},[t._v("SSD")]),t._v(" "),l("td",{attrs:{align:"left"}},[t._v("WD WDS100T2B0B ×2")])]),t._v(" "),l("tr",[l("td",{attrs:{align:"center"}},[t._v("GPU")]),t._v(" "),l("td",{attrs:{align:"left"}},[t._v("ASROCK Radeon RX 5700 XT Challenger D 8G OC")])])])]),t._v(" "),l("h1",[l("a",{staticClass:"anchor",attrs:{name:"参考サイト",href:"#%E5%8F%82%E8%80%83%E3%82%B5%E3%82%A4%E3%83%88",rel:"nofollow","aria-hidden":"true"}},[l("span",{staticClass:"octicon octicon-link"})]),t._v("\n参考サイト")]),t._v(" "),l("ul",[l("li",[l("a",{attrs:{href:"https://www.youtube.com/watch?v=j1ItPlQYAj8",rel:"nofollow"}},[t._v("How to build a 3rd Gen Ryzen Hackintosh - MacOS Catalina")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://github.com/portrayer/Hackintosh-Ryzen-MSI-B450I",rel:"nofollow"}},[t._v("portrayer/Hackintosh-Ryzen-MSI-B450I")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://qiita.com/blueknight611jp/items/d6c6ae64381aac51ad45",rel:"nofollow"}},[t._v("AMD RyzenにmacOS 10.15 CatalinaをOpenCoreでinstallする（その１）")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://computational-chemistry.com/top/hackintosh/",rel:"nofollow"}},[t._v("【success】ハッキントッシュ Hackintosh【ryzen 3900x + MSI X570 + Radeon vega64】")])])]),t._v(" "),l("h1",[l("a",{staticClass:"anchor",attrs:{name:"手順",href:"#%E6%89%8B%E9%A0%86",rel:"nofollow","aria-hidden":"true"}},[l("span",{staticClass:"octicon octicon-link"})]),t._v("\n手順")]),t._v(" "),l("p",[t._v("OpenCoreを利用しUSBメモリからブートしてOSインストールする方法を取りました。USBメモリの準備はMacBook Pro(Mid 2014, Catalina 10.15.3)で行いました。"),l("br"),t._v("\nUSBメモリは"),l("a",{attrs:{href:"https://www.amazon.co.jp/gp/product/B07MJBR35G/ref=ppx_yo_dt_b_asin_title_o02_s00?ie=UTF8&psc=1",rel:"nofollow"}},[t._v("Transcendのこちら")]),t._v("を使用しました。")]),t._v(" "),l("p",[t._v("kextやconfig.plistの設定は似たハードウェア構成の設定が"),l("a",{attrs:{href:"https://github.com/portrayer/Hackintosh-Ryzen-MSI-B450I",rel:"nofollow"}},[t._v("公開されていたので")]),t._v("そのまま利用してすんなり動きました。")]),t._v(" "),l("ol",[l("li",[t._v("ディスクユーティリティを使用してUSBメモリを初期化(注意!! GUIDパーティションマップで初期化すること)")]),t._v(" "),l("li",[t._v("コマンドラインからMacOS Catalina Install USBを作成")]),t._v(" "),l("li",[l("a",{attrs:{href:"https://github.com/portrayer/Hackintosh-Ryzen-MSI-B450I",rel:"nofollow"}},[t._v("portrayer/Hackintosh-Ryzen-MSI-B450I")]),t._v("のリポジトリをZIPダウンロード or "),l("code",[t._v("git clone")]),t._v(" し、USBメモリのEFI領域にコピー")]),t._v(" "),l("li",[t._v("USBメモリをブートドライブに指定して起動、MacOSのインストールをする。再起動するときはUSBメモリから起動する")]),t._v(" "),l("li",[t._v("既存のMacBook Proからデータ移行ユーティリティを使用してデータ移行")]),t._v(" "),l("li",[t._v("新しいマシンのEFI領域をマウントしてUSBメモリのEFIの内容で上書き。以降はUSBメモリからブートせずともインストールしたドライブからブートされるようになる")])]),t._v(" "),l("h1",[l("a",{staticClass:"anchor",attrs:{name:"hackintoshのメリット",href:"#hackintosh%E3%81%AE%E3%83%A1%E3%83%AA%E3%83%83%E3%83%88",rel:"nofollow","aria-hidden":"true"}},[l("span",{staticClass:"octicon octicon-link"})]),t._v("\nhackintoshのメリット")]),t._v(" "),l("ul",[l("li",[t._v("Mac Miniの新モデルが発表されたので悩んでいた。同じコストでCPUのスレッド数が多い、強めなGPUがついてくるくらいになったのでコスパがよい")]),t._v(" "),l("li",[t._v("パーツを調べて考えるのがそもそも楽しい")]),t._v(" "),l("li",[t._v("ゆるいAMD派。Ryzenは価格に対する処理能力やワットあたりの処理能力が優秀だと思った")]),t._v(" "),l("li",[t._v("ケースによるがストレージの拡張が可能。のちのち拡張可能なのがありがたい。ストレージはCTOでアップグレードすると高いし、消耗品なので\n\n"),l("ul",[l("li",[t._v("M/BがNVMe SSDを2枚搭載できるので1TB×2にした")]),t._v(" "),l("li",[t._v("バックアップ用にSATA接続SSDが速度面で良さそう。それなりのSSDでも安くて速くなってきているので")])])])]),t._v(" "),l("h1",[l("a",{staticClass:"anchor",attrs:{name:"デメリット",href:"#%E3%83%87%E3%83%A1%E3%83%AA%E3%83%83%E3%83%88",rel:"nofollow","aria-hidden":"true"}},[l("span",{staticClass:"octicon octicon-link"})]),t._v("\nデメリット")]),t._v(" "),l("ul",[l("li",[t._v("Thunderbolt Display(27inch)を使用していたのだがThunderbolt2接続対応するのが難しいという互換性の問題があり、使えなかったのでその分ディスプレイ買い替えによるコスト増\n\n"),l("ul",[l("li",[t._v("mini-ITXだとAsRockのM/BならThunderbolt3搭載だったので使えたかもしれない(未確認)")]),t._v(" "),l("li",[t._v("現行のMac miniならばThunderbolt2 <-> Thunderbolt3変換ケーブルでそのままつかえそう")])])]),t._v(" "),l("li",[t._v("M/BのWifiとBluetoothが使えない\n\n"),l("ul",[l("li",[t._v("M/BのBluetoothは無効化し、アダプターで対応(→"),l("a",{attrs:{href:"https://www.amazon.co.jp/DATA-Bluetooth%E3%82%A2%E3%83%80%E3%83%97%E3%82%BF%E3%83%BC-Class-USB%E3%82%A2%E3%83%80%E3%83%97%E3%82%BF%E3%83%BC-USB-BT40LE/dp/B00COU5RP2/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=USB-BT40LE&qid=1586767711&s=computers&sr=1-1",rel:"nofollow"}},[t._v("I-O DATA Bluetoothアダプター Class 2対応 4.0+EDR/LE対応 USBアダプター USB-BT40LE")]),t._v(")")]),t._v(" "),l("li",[t._v("Wifiは利用せず、有線LANを使用している。こちらも利用できるアダプタがあるようだが追加コストということになる")])])]),t._v(" "),l("li",[t._v("Bluetooth、Wifiの関係かAirDropが使えない")]),t._v(" "),l("li",[t._v("10.15.3から10.15.4に設定からアップデートを実行し再起動したところ文鎮化。気楽にアップデートできない。アップデート前にRedditのスレチェック&バックアップは必要")]),t._v(" "),l("li",[t._v("Docker for macがIntelの仮想化技術を利用しているためRyzenの場合に動かない\n\n"),l("ul",[l("li",[t._v("Virtualbox上でdocker動かして解決(参考サイト→"),l("a",{attrs:{href:"https://tech.ga-tech.co.jp/entry/2019/10/docker-vagrant",rel:"nofollow"}},[t._v("Docker for Mac遅すぎる問題の解決")]),t._v(")")]),t._v(" "),l("li",[t._v("たのむAMD製CPU搭載Mac。そうすればDocker for Macも動くようになるのでは...")])])]),t._v(" "),l("li",[t._v("M/BのRAID機能の利用ができないというかトラブルが多そうなので回避")]),t._v(" "),l("li",[t._v("できればIntelマシンにしたほうが色々問題はないはず。だがそれなら普通にMac買おう")])]),t._v(" "),l("h1",[l("a",{staticClass:"anchor",attrs:{name:"まとめ",href:"#%E3%81%BE%E3%81%A8%E3%82%81",rel:"nofollow","aria-hidden":"true"}},[l("span",{staticClass:"octicon octicon-link"})]),t._v("\nまとめ")]),t._v(" "),l("p",[t._v("同じコストをかけるのならばスペック上は強いマシンを自由に構築できた夢をみました"),l("br"),t._v("\nただし自由には代償がつきものでDockerの問題やアップデート問題、BluetoothやWifiなどハードウェアに依存する問題があって対処する必要があります。")])])},function(){var t=this,n=t.$createElement,l=t._self._c||n;return l("div",{staticClass:"content"},[l("p",[t._v("リモートワークの時間が増えたため作業環境を整える必要があり、twitterで話題になっていたCostcoで売ってるアーロンチェア風のイスを購入して使ってみました。"),l("br"),t._v(" "),l("a",{attrs:{href:"https://www.costco.com/bayside-furnishings-metrex-iv-mesh-office-chair.product.100427526.html",rel:"nofollow"}},[t._v("Bayside Furnishings Metrex IV Mesh Office Chair")]),l("br"),t._v("\n1週間、業務時間分は使ってみた感想としてはコスパはよいビジネスチェアだと思いました。")]),t._v(" "),l("h2",[l("a",{staticClass:"anchor",attrs:{name:"よかったところ",href:"#%E3%82%88%E3%81%8B%E3%81%A3%E3%81%9F%E3%81%A8%E3%81%93%E3%82%8D",rel:"nofollow","aria-hidden":"true"}},[l("span",{staticClass:"octicon octicon-link"})]),t._v("\nよかったところ")]),t._v(" "),l("p",[t._v("まず価格がお手頃。ちょっとしたビジネスチェアとしては高くはない。座面と背面がメッシュで肘掛け付きと考えると割安に感じる。この座面と背面がメッシュになっているのがアーロンチェアぽさを演出していると思われる。同じ価格帯だと座面はクッションタイプが多い中メッシュなのはよい。筆者は汗をかきやすい体質だが寒い時期もあって蒸れなかった。"),l("br"),t._v("\nぱっと座ったかんじとしては重量があるので安定している。安物にありがちな肘掛けや脚、背面についてきしむような感じはなく、不足ない剛性感があった。\n機能面では肘掛けを上げておくことができるのであぐらをかいたり片側だけ肘をかけたいときに便利だった。")]),t._v(" "),l("h2",[l("a",{staticClass:"anchor",attrs:{name:"気になるところ",href:"#%E6%B0%97%E3%81%AB%E3%81%AA%E3%82%8B%E3%81%A8%E3%81%93%E3%82%8D",rel:"nofollow","aria-hidden":"true"}},[l("span",{staticClass:"octicon octicon-link"})]),t._v("\n気になるところ")]),t._v(" "),l("p",[t._v("短期間ではわからないが座面の張りは長期間の場合にヘタってしまわないかが気になる。もしヘタってきたら追記する。座面のサイドや後方に関してはフレームにメッシュが直接はられている状態なのでスイートスポットに座ればいいが、ややずれる癖のある人はフレームに当たるかもしれない。"),l("br"),t._v("\n一般的なオフィスチェアと比べると座面が高い。筆者は身長175cmで一番低くして使っているがそれでもやや座面が高いと感じた。ある程度の時間を座ってみないとわからないポイントだが、使い始めて数日はは座面が高くて膝にきた。脚の置き場や姿勢の問題かもしれない。"),l("br"),t._v("\n座面のスライドや前傾姿勢むけ可動はないのでそのあたりの調整機能は価格帯相応といえる。アーロンチェアのような調整機能はないのでそれを期待してはいけない。")]),t._v(" "),l("h1",[l("a",{staticClass:"anchor",attrs:{name:"まとめ",href:"#%E3%81%BE%E3%81%A8%E3%82%81",rel:"nofollow","aria-hidden":"true"}},[l("span",{staticClass:"octicon octicon-link"})]),t._v("\nまとめ")]),t._v(" "),l("p",[t._v("座面、背面ともにメッシュのイスとしてはコスパがよいと感じた。価格の割に剛性感があり、座るということに関しては問題はなかった。\n座ってみて高さやフィーリングが合う場合にはオススメといえる。高さや様々な調整機能を求めるのであればより高価格帯のイスがあうのではないかと思った。")])])},function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"content"},[o("p",[o("a",{attrs:{href:"https://www.jetbrains.com/help/idea/manage-projects-hosted-on-github.html",rel:"nofollow"}},[t._v("IntelliJ help Manage projects hosted on GitHub")]),t._v("の内容そのまんまなんですが便利だったのでメモ。"),o("br"),t._v("\n例えばコードをレビューするさいにcheckoutしてきたコードを見てて、参考になるコードを見つけたらからコメントするために該当行のGithub URLがほしいことがある。そういうときに便利。")]),t._v(" "),o("h2",[o("a",{staticClass:"anchor",attrs:{name:"やり方-macの場合",href:"#%E3%82%84%E3%82%8A%E6%96%B9-mac%E3%81%AE%E5%A0%B4%E5%90%88",rel:"nofollow","aria-hidden":"true"}},[o("span",{staticClass:"octicon octicon-link"})]),t._v("\nやり方(Macの場合)")]),t._v(" "),o("ol",[o("li",[o("code",[t._v("Shift + Alt + A")]),t._v(" または "),o("code",[t._v("Shift → Shift")]),t._v(" でもOK")]),t._v(" "),o("li",[o("code",[t._v("Open on GitHub")]),t._v(" と入力して選択(Open onくらい入力すると該当Actionでる)\n"),o("img",{attrs:{src:l(544),alt:"example"}})]),t._v(" "),o("li",[t._v("ブラウザで該当行のページが開く")])]),t._v(" "),o("h2",[o("a",{staticClass:"anchor",attrs:{name:"感想",href:"#%E6%84%9F%E6%83%B3",rel:"nofollow","aria-hidden":"true"}},[o("span",{staticClass:"octicon octicon-link"})]),t._v("\n感想")]),t._v(" "),o("p",[t._v("手元にチェックアウトしてコードレビューするときに捗る。"),o("br"),t._v("\nActions使えるともっと便利なIntelliJ生活になりそう")])])},function(){var t=this,n=t.$createElement,l=t._self._c||n;return l("div",{staticClass:"content"},[l("p",[l("a",{attrs:{href:"https://www.algolia.com/",rel:"nofollow"}},[t._v("algolia")]),t._v("を利用してこのブログにも検索フォームをつけてみました。"),l("br"),t._v("\n関連pull request： "),l("a",{attrs:{href:"https://github.com/ta2mo/blog-maintenance/pull/22",rel:"nofollow"}},[t._v("use algolia #22")]),t._v("、"),l("a",{attrs:{href:"https://github.com/ta2mo/blog-maintenance/pull/24",rel:"nofollow"}},[t._v("fix #23 #24")])]),t._v(" "),l("p",[t._v("追加実装した内容")]),t._v(" "),l("ol",[l("li",[t._v("algoliaのインデックスを更新するコマンド追加")]),t._v(" "),l("li",[t._v("検索フォームを設置\n\n"),l("ul",[l("li",[t._v("algoliaにリクエストする実装")]),t._v(" "),l("li",[t._v("community planを利用しているのでalgoliaのlogoを表示(freeのプランの場合ダッシュボードに "),l("code",[t._v("he Community (free) plan requires you to display the Algolia logo next to the search results.")]),t._v(" と表示される)")])])])]),t._v(" "),l("h2",[l("a",{staticClass:"anchor",attrs:{name:"algoliaのよかったところ",href:"#algolia%E3%81%AE%E3%82%88%E3%81%8B%E3%81%A3%E3%81%9F%E3%81%A8%E3%81%93%E3%82%8D",rel:"nofollow","aria-hidden":"true"}},[l("span",{staticClass:"octicon octicon-link"})]),t._v("\nalgoliaのよかったところ")]),t._v(" "),l("ul",[l("li",[t._v("検索元データになるindexはかんたんに作成できた。 "),l("code",[t._v("model/post.go")]),t._v(" にstructタグつけてライブラリでuploadしてやればおｋだった。CIでデプロイする前に作成している。")]),t._v(" "),l("li",[t._v("ドキュメントがよかった。instantsearchに関してはvue/react/jsのそれぞれでexampleがあった")]),t._v(" "),l("li",[t._v("ハイライトたすかる。ハイライト部分がマークアップされて帰ってくるのでそのまま表示していいかんじになる\n\n"),l("ul",[l("li",[t._v("googleのサイト内検索的なのもできそう")])])])]),t._v(" "),l("h2",[l("a",{staticClass:"anchor",attrs:{name:"ハマったところ",href:"#%E3%83%8F%E3%83%9E%E3%81%A3%E3%81%9F%E3%81%A8%E3%81%93%E3%82%8D",rel:"nofollow","aria-hidden":"true"}},[l("span",{staticClass:"octicon octicon-link"})]),t._v("\nハマったところ")]),t._v(" "),l("ul",[l("li",[t._v("20KBを超えるrecordをアップロードしようとしたらsize overのエラーで怒られた\n\n"),l("ul",[l("li",[t._v("post本文のhtmlのタグを削除したrecordデータにした")])])]),t._v(" "),l("li",[t._v("algoliaのwidgetを利用してロゴを表示しようとしたところ "),l("code",[t._v("ReferenceError > location is not defined")]),t._v(" とエラーが出た。静的サイトなので "),l("code",[t._v("<no-ssr>")]),t._v(" タグで囲んで対応した\n\n"),l("ul",[l("li",[l("a",{attrs:{href:"https://github.com/algolia/vue-instantsearch/tree/master/examples/nuxt",rel:"nofollow"}},[t._v("https://github.com/algolia/vue-instantsearch/tree/master/examples/nuxt")]),t._v(" のあたりを参考にした")])])])]),t._v(" "),l("h2",[l("a",{staticClass:"anchor",attrs:{name:"感想",href:"#%E6%84%9F%E6%83%B3",rel:"nofollow","aria-hidden":"true"}},[l("span",{staticClass:"octicon octicon-link"})]),t._v("\n感想")]),t._v(" "),l("ul",[l("li",[t._v("現状はカテゴリーで分けてるけどタグつけてみてより検索しやすくしてみたい")]),t._v(" "),l("li",[t._v("analyticsで検索ワードとかヒット率がみれるぽいので収益あがったら使ってみたい")])])])},function(){var t=this,n=t.$createElement,l=t._self._c||n;return l("div",{staticClass:"content"},[l("p",[t._v("自分のキャリアを振り返ってみてSESで派遣されるITエンジニアをやっていた時期もあったのですがSESの仕組み自体がevilだなと思って飛び出したこともあり、そのときを振り返りつつ考えたことを一旦書き出そうと思います。")]),t._v(" "),l("p",[t._v("いくつかの前提。")]),t._v(" "),l("ul",[l("li",[t._v("思考実験です。")]),t._v(" "),l("li",[t._v("n=1の事例を元にして考えているので個別のケースであるある/ないないというのはでてくると思います。")]),t._v(" "),l("li",[t._v("どこか特定の企業や個人を貶める意図はないです。")]),t._v(" "),l("li",[t._v("オチもないかもしれません")])]),t._v(" "),l("h1",[l("a",{staticClass:"anchor",attrs:{name:"昔々",href:"#%E6%98%94%E3%80%85",rel:"nofollow","aria-hidden":"true"}},[l("span",{staticClass:"octicon octicon-link"})]),t._v("\n昔々")]),t._v(" "),l("p",[t._v("筆者が新卒で入った会社は人数だけは多いSESの会社でした。文系新卒という焦りがあり、資格試験を頑張ったり話題のライブラリ触って使えるようにしてみたりするなど技術スキルを磨く日々でした。"),l("br"),t._v("\n当時はエンジニアたるもの腕一本で生きていくためにも腕を磨くのは当然だと考えてましたが、SESの仕組みと実態を知れば知るほど技術スキルを上げる意味が見いだせなくなったので畜生!転職だとなりました。")]),t._v(" "),l("h1",[l("a",{staticClass:"anchor",attrs:{name:"sesの問題点",href:"#ses%E3%81%AE%E5%95%8F%E9%A1%8C%E7%82%B9",rel:"nofollow","aria-hidden":"true"}},[l("span",{staticClass:"octicon octicon-link"})]),t._v("\nSESの問題点")]),t._v(" "),l("p",[t._v("以下の3者の視点から考えます。1と2については割と想像です。")]),t._v(" "),l("ol",[l("li",[t._v("エンジニアを集めたい発注企業(発注企業)")]),t._v(" "),l("li",[t._v("エンジニアを派遣したい派遣企業(派遣元企業)")]),t._v(" "),l("li",[t._v("派遣企業に所属するエンジニア(現場エンジニア)")])]),t._v(" "),l("h3",[l("a",{staticClass:"anchor",attrs:{name:"sesの仕組みでそれぞれの目的は-建前",href:"#ses%E3%81%AE%E4%BB%95%E7%B5%84%E3%81%BF%E3%81%A7%E3%81%9D%E3%82%8C%E3%81%9E%E3%82%8C%E3%81%AE%E7%9B%AE%E7%9A%84%E3%81%AF-%E5%BB%BA%E5%89%8D",rel:"nofollow","aria-hidden":"true"}},[l("span",{staticClass:"octicon octicon-link"})]),t._v("\nSESの仕組みでそれぞれの目的は？(建前)")]),t._v(" "),l("ul",[l("li",[t._v("1の発注企業は案件に対して人手が足りないので人を集めたい\n\n"),l("ul",[l("li",[t._v("自社リソースの不足")]),t._v(" "),l("li",[t._v("エンジニアリソース調達コストの削減\n\n"),l("ul",[l("li",[t._v("採用はリードタイムがかかる")]),t._v(" "),l("li",[t._v("エンジニア採用する手段、スキル、評価する方法がない")])])])])]),t._v(" "),l("li",[t._v("2の派遣する企業はエンジニア派遣することで安定した売上をあげることができる。\n\n"),l("ul",[l("li",[t._v("エンジニア単位の売上変動がそれほど大きくない(経営上、安定した収益構造はとても大事!!)")])])]),t._v(" "),l("li",[t._v("3のエンジニアは営業コストは不要で安定した給与\n\n"),l("ul",[l("li",[t._v("フリーランスITエンジニアと比較した場合\n\n"),l("ul",[l("li",[t._v("下手すると座ってるだけでもOKと考えられる(人月商売なので)")])])]),t._v(" "),l("li",[t._v("ほぼノースキルでも現場経験をつんでスキルアップできる(新卒の場合)")]),t._v(" "),l("li",[t._v("大手IT系企業だと社内でプロジェクト移動とかチーム移動できところもあるだろうが似たようなムーブが可能\n\n"),l("ul",[l("li",[t._v("現場を渡り歩き経験値アップやスキルアップを目指すルート")]),t._v(" "),l("li",[t._v("逆に特定ドメインにつよつよになることでバリューをあげるルートもありえる")])])])])])]),t._v(" "),l("h1",[l("a",{staticClass:"anchor",attrs:{name:"実態",href:"#%E5%AE%9F%E6%85%8B",rel:"nofollow","aria-hidden":"true"}},[l("span",{staticClass:"octicon octicon-link"})]),t._v("\n実態")]),t._v(" "),l("p",[t._v("負のインセンティブが働きがち。。。")]),t._v(" "),l("h2",[l("a",{staticClass:"anchor",attrs:{name:"発注企業",href:"#%E7%99%BA%E6%B3%A8%E4%BC%81%E6%A5%AD",rel:"nofollow","aria-hidden":"true"}},[l("span",{staticClass:"octicon octicon-link"})]),t._v("\n発注企業")]),t._v(" "),l("ul",[l("li",[t._v("たくさん働かせたほうが価値の総量がふえる\n\n"),l("ul",[l("li",[t._v("契約にもよるが実態は定額働かせ放題に近い")]),t._v(" "),l("li",[t._v("生み出すバリューに大きな差があるはずのエンジニア業界にあっても、シニアとジュニアエンジニアの単価の差はそこまででもない")])])]),t._v(" "),l("li",[t._v("予算あきりな事業だとなぜか人が余る\n\n"),l("ul",[l("li",[t._v("予算内でとにかく予定を満たす人数を集める")]),t._v(" "),l("li",[t._v("ミスマッチ人材がでるが契約期間は残っているので働かせる(謎のもったいない精神、フローではなくリソース最適化を目指してしまう)")]),t._v(" "),l("li",[t._v("スキルレベルが足りないので低レベル側に合わせた開発手法や技術選定がありうる\n\n"),l("ul",[l("li",[t._v("現場エンジニアとの信頼関係の欠如、かけるコストに合わない管理体制")])])])])])]),t._v(" "),l("h2",[l("a",{staticClass:"anchor",attrs:{name:"派遣元企業",href:"#%E6%B4%BE%E9%81%A3%E5%85%83%E4%BC%81%E6%A5%AD",rel:"nofollow","aria-hidden":"true"}},[l("span",{staticClass:"octicon octicon-link"})]),t._v("\n派遣元企業")]),t._v(" "),l("ul",[l("li",[t._v("発注企業のビジネス成功よりも自社の売上に目が行きがちにみえる\n\n"),l("ul",[l("li",[t._v("頭数(=人月)を増やすほうが売上があがる。コスト(=作業人数)をかけない技術的解決や作業量を減らす提案のインセンティブが薄い")]),t._v(" "),l("li",[t._v("もちろん長期的に見れば発注企業のビジネスが成功すれば自社へ恩恵を受ける可能性が高まるのは当然の話であるが...")])])]),t._v(" "),l("li",[t._v("顧客最適化を目指すとたくさん働いてもらうのが手っ取り早い\n\n"),l("ul",[l("li",[t._v("スキルマッチする人材を見つけるのはそれなりにコストがかかる。それをやるのがSES企業の役割じゃないのかな...")]),t._v(" "),l("li",[t._v("今現場にいるメンバーにたくさん働いてもらうほうが成果アピールもできて一石二鳥")])])]),t._v(" "),l("li",[t._v("新卒やジュニアなエンジニアを現場に押し込んで売り上げる引力が働く\n\n"),l("ul",[l("li",[t._v("スキルマッチしたエンジニアを派遣しているかもしれないがジュニアなエンジニアとシニアの単価は一緒だったりそこまで差がなかったり...")]),t._v(" "),l("li",[t._v("右も左もわからない新卒をちゃらっと教育して既存の現場にシニアとセットで押し込む両面に外道ムーブが割と最適解に")])])])]),t._v(" "),l("h2",[l("a",{staticClass:"anchor",attrs:{name:"現場エンジニア",href:"#%E7%8F%BE%E5%A0%B4%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%8B%E3%82%A2",rel:"nofollow","aria-hidden":"true"}},[l("span",{staticClass:"octicon octicon-link"})]),t._v("\n現場エンジニア")]),t._v(" "),l("ul",[l("li",[t._v("給与アップは経験年数が増える以外では難しい\n\n"),l("ul",[l("li",[t._v("普通にメンバーとして仕事してたら単価アップはほぼない。つまり給与アップの源泉となる売上アップが難しい。\n\n"),l("ul",[l("li",[t._v("プロジェクトリーダーやチームリーダーで仕様はこの人がすべて知ってるみたいにならないと交渉にはならない")])])]),t._v(" "),l("li",[t._v("派遣元<->発注企業<->エンジニアの金額ギャップがでかいほうが派遣元は儲かる\n\n"),l("ul",[l("li",[t._v("安い大量の新卒とそれをまとめるちょい高ベテラン数人みたいな構造が最適になる(新卒分で稼いでベテランや会社に還元)")])])]),t._v(" "),l("li",[t._v("残業代で稼ぐのが短期的には最適な収入アップになってしまう\n\n"),l("ul",[l("li",[t._v("単価アップが難しく、作業時間を増やすことで売上と給料を増やすことしか選択肢がとれない")]),t._v(" "),l("li",[t._v("スキルアップして作業量を減らすインセンティブが働かない")])])])])]),t._v(" "),l("li",[t._v("そもそもスキルアップにつながらない現場も多数\n\n"),l("ul",[l("li",[t._v("発注企業にもある低レベル側に合わせた開発手法や技術選定でスキルアップが難しい")]),t._v(" "),l("li",[t._v("特定ドメイン知識の囲い込みによる差別化が個人最適解になりえる")])])]),t._v(" "),l("li",[t._v("システムを利用するユーザーより発注元企業の担当者の顔色を伺いがち\n\n"),l("ul",[l("li",[t._v("自分の仕事や立場を失うのとユーザーのペインを天秤にかけてほんとにユーザーに寄り添えるのか")])])])]),t._v(" "),l("h1",[l("a",{staticClass:"anchor",attrs:{name:"個人的な感想",href:"#%E5%80%8B%E4%BA%BA%E7%9A%84%E3%81%AA%E6%84%9F%E6%83%B3",rel:"nofollow","aria-hidden":"true"}},[l("span",{staticClass:"octicon octicon-link"})]),t._v("\n個人的な感想")]),t._v(" "),l("p",[t._v("経験を積むために新卒で入るのや、個人で受けるには大きい案件(公共系、政府系、金融系etc...)に携わりたいのであれば悪くはないかもしれない。"),l("br"),t._v("\nスキルアップやシステムを利用するユーザーに向き合って開発するには仕組み上むずかしくする要因が存在する。それらのリスクとうまく付き合うか見ないふりをして働いているのが現状のSESだ。")])])}],_=(o=function(t,b){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])})(t,b)},function(t,b){function n(){this.constructor=t}o(t,b),t.prototype=null===b?Object.create(b):(n.prototype=b.prototype,new n)}),v=function(t,n,l,desc){var o,r=arguments.length,c=r<3?n:null===desc?desc=Object.getOwnPropertyDescriptor(n,l):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(e.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,n,l,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(n,l,c):o(n,l))||c);return r>3&&c&&Object.defineProperty(n,l,c),c},h=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return _(n,t),n=v([Object(r.Component)({components:{PostList:E}})],n)}(r.Vue),f=(l(584),l(18)),E=Object(f.a)(h,(function(){var t=this,n=t.$createElement,l=t._self._c||n;return l("div",{staticClass:"content is-medium"},[l("div",{staticClass:"box"},[l("span",{staticClass:"lable is-medium"},[t._v("2020-04-21")]),t._v(" "),l("nuxt-link",{attrs:{to:"/post/2020-04-21-ryzentosh-dream"}},[l("h1",{staticClass:"title",attrs:{id:"2020-04-21-ryzentosh-dream"}},[t._v("RyzenマシンでMachintoshが動く夢をみた")])]),t._v(" "),t._m(0),t._v(" "),l("adsbygoogle")],1),t._v(" "),l("div",{staticClass:"box"},[l("span",{staticClass:"lable is-medium"},[t._v("2020-03-02")]),t._v(" "),l("nuxt-link",{attrs:{to:"/post/2020-03-02-review-costco-chair"}},[l("h1",{staticClass:"title",attrs:{id:"2020-03-02-review-costco-chair"}},[t._v("Costcoのアーロンチェア風のイスを使ってみた")])]),t._v(" "),t._m(1),t._v(" "),l("adsbygoogle")],1),t._v(" "),l("div",{staticClass:"box"},[l("span",{staticClass:"lable is-medium"},[t._v("2020-02-06")]),t._v(" "),l("nuxt-link",{attrs:{to:"/post/2020-02-06-open-github-url-from-intellij"}},[l("h1",{staticClass:"title",attrs:{id:"2020-02-06-open-github-url-from-intellij"}},[t._v("IntelliJで作業中のファイルをGithubで開く方法")])]),t._v(" "),t._m(2),t._v(" "),l("adsbygoogle")],1),t._v(" "),l("div",{staticClass:"box"},[l("span",{staticClass:"lable is-medium"},[t._v("2020-01-28")]),t._v(" "),l("nuxt-link",{attrs:{to:"/post/2020-01-28-search-form-by-algolia"}},[l("h1",{staticClass:"title",attrs:{id:"2020-01-28-search-form-by-algolia"}},[t._v("algoliaをつかってNuxt.jsのサイトに検索フォームをつけてみた")])]),t._v(" "),t._m(3),t._v(" "),l("adsbygoogle")],1),t._v(" "),l("div",{staticClass:"box"},[l("span",{staticClass:"lable is-medium"},[t._v("2020-01-07")]),t._v(" "),l("nuxt-link",{attrs:{to:"/post/2020-01-07-SES-issues"}},[l("h1",{staticClass:"title",attrs:{id:"2020-01-07-SES-issues"}},[t._v("現場エンジニアからみたSESの問題点")])]),t._v(" "),t._m(4),t._v(" "),l("adsbygoogle")],1)])}),c,!1,null,"6da0e81e",null).exports,d=function(){var t=function(n,b){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])})(n,b)};return function(n,b){function l(){this.constructor=n}t(n,b),n.prototype=null===b?Object.create(b):(l.prototype=b.prototype,new l)}}(),m=function(t,n,l,desc){var o,r=arguments.length,c=r<3?n:null===desc?desc=Object.getOwnPropertyDescriptor(n,l):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(e.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,n,l,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(n,l,c):o(n,l))||c);return r>3&&c&&Object.defineProperty(n,l,c),c},C=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return d(n,t),n=m([Object(r.Component)({components:{PostList:E}})],n)}(r.Vue),B=Object(f.a)(C,(function(){var t=this.$createElement;return(this._self._c||t)("PostList")}),[],!1,null,"907abdce",null);n.default=B.exports}}]);