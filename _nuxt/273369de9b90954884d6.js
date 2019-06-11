(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{175:function(t,e,o){t.exports=o.p+"img/aa4fd2b.jpg"},176:function(t,e,o){var content=o(199);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("bd0acb5c",content,!0,{sourceMap:!1})},198:function(t,e,o){"use strict";var n=o(176);o.n(n).a},199:function(t,e,o){(t.exports=o(18)(!1)).push([t.i,"h1.title[data-v-3bbda36b]{margin-top:0}div.box[data-v-3bbda36b]{border-radius:0}ins[data-v-3bbda36b]{margin-top:1rem;margin-bottom:1rem}",""])},213:function(t,e,o){"use strict";o.r(e);var n,l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("p",[n("a",{attrs:{href:"https://www.gitpod.io/",rel:"nofollow"}},[t._v("Gitpod")]),t._v("というサービスをなにかの記事で見つけて使ってみました。ブラウザ上でterminalを内蔵したIDEが起動し、TypeFox社が提供するdockerコンテナに接続されその上で開発ができるサービスです。")]),t._v(" "),n("p",[t._v("前にiPad Proでコードを書いたりできないかいくつか検討していたのですが、iPadのアプリではgit連携はできてもエディタで書ける程度であり、コードを書いて開発するとまではいえない状況でした。\n業務ではJetBrains社のIDEを使うことがほとんどで、iPadでもエディターよりIDEが使えないものかと探している中でなかなか使用感が良さそうなサービスだったので試しに導入してみました。")]),t._v(" "),n("p",[t._v("基本的にはPCで検証してみましたがiPad Pro 10.5inchでChromeを使えばGitpodを利用することができました。Safariは非対応でした。")]),t._v(" "),n("p",[n("img",{attrs:{src:o(175),alt:"iPadでのイメージ"}})]),t._v(" "),n("p",[t._v("iPadで起動してみた様子")]),t._v(" "),n("h2",[n("a",{attrs:{href:"#%E3%81%AF%E3%81%98%E3%82%81%E3%81%8B%E3%81%9F",rel:"nofollow"}},[n("span")]),t._v("\nはじめかた")]),t._v(" "),n("p",[t._v("Gitpodの開発環境は "),n("code",[t._v("workspace")]),t._v(" と呼ばれ、Web上で立ち上げたり停止したりは管理できる。")]),t._v(" "),n("p",[t._v("基本的には"),n("a",{attrs:{href:"https://docs.gitpod.io/10_Getting_Started.html",rel:"nofollow"}},[t._v("https://docs.gitpod.io/10_Getting_Started.html")]),t._v("参照すればだいたい書いてある")]),t._v(" "),n("h3",[n("a",{attrs:{href:"#workspace%E3%81%AE%E7%AB%8B%E3%81%A1%E4%B8%8A%E3%81%92%E6%96%B9",rel:"nofollow"}},[n("span")]),t._v("\nworkspaceの立ち上げ方")]),t._v(" "),n("ul",[n("li",[t._v("GitHubリポジトリのURLの先頭に "),n("code",[t._v("https://gitpod.io#")]),t._v(" をつけたURLに遷移することで "),n("code",[t._v("workspace")]),t._v(" を立ち上げる")]),t._v(" "),n("li",[t._v("Gitpodの "),n("a",{attrs:{href:"https://docs.gitpod.io/20_Browser_Extension.html",rel:"nofollow"}},[t._v("Chrome extension")]),t._v("を導入してGitHubにあるGitpod起動ボタンから "),n("code",[t._v("workspace")]),t._v(" を立ち上げる")])]),t._v(" "),n("h3",[n("a",{attrs:{href:"#workspace%E3%82%92%E7%B4%B0%E3%81%8B%E3%81%8F%E8%A8%AD%E5%AE%9A%E3%81%99%E3%82%8B",rel:"nofollow"}},[n("span")]),t._v("\nworkspaceを細かく設定する")]),t._v(" "),n("p",[t._v("起動するコンテナのイメージを変更するには "),n("code",[t._v(".gitpod.yml")]),t._v(" ファイルをルートディレクトリに配置する。Dockerfileを指定することもできるのでかなり柔軟な開発環境がつくれる。")]),t._v(" "),n("p",[t._v("自分ではblog管理にgolangとNuxt.jsを使っているのでそれ用のコンテナ設定をしてみました。\n"),n("a",{attrs:{href:"https://github.com/ta2mo/blog-maintenance/pull/15",rel:"nofollow"}},[t._v("https://github.com/ta2mo/blog-maintenance/pull/15")])]),t._v(" "),n("h2",[n("a",{attrs:{href:"#%E6%84%9F%E6%83%B3",rel:"nofollow"}},[n("span")]),t._v("\n感想")]),t._v(" "),n("ul",[n("li",[t._v("terminalやテキスト入力のレスポンスは上々。十分な通信速度がある環境ならばローカルの開発環境とさほど変わらないのではないか。")]),t._v(" "),n("li",[t._v("カッコを入力すると閉じカッコもついてくる->IDEぽい")]),t._v(" "),n("li",[n("code",[t._v("Ctrl + space")]),t._v(" で補完候補でる")]),t._v(" "),n("li",[t._v("メソッドの定義へジャンプできる")]),t._v(" "),n("li",[t._v("このポストはPC\bのChromeで書いている\n\n"),n("ul",[n("li",[t._v("日本語入力や表示に問題ない。(Backspaceでの削除が若干挙動があやしい?)")]),t._v(" "),n("li",[n("code",[t._v("yarn run dev")]),t._v(" でブログ画面を確認しつつ書ける")]),t._v(" "),n("li",[t._v("iPadの場合、ソフトウェアキーボードを利用するとterminalは見えなくなる。Smart Keyboard等の外付けキーボードは必須だと思われる\n\n"),n("ul",[n("li",[t._v("右クリックを利用することが難しいので基本はPC向け。だが開発環境をローカルで立ち上げるのが難しいiPadでもちょっと開発できるというかんじ")])])])])]),t._v(" "),n("li",[t._v("terminalの文字表示がちょっと残念。等幅でないフォントなのか文字の間があいていて全角みたいな表示で間延びしてみえる(MBP15inch)")]),t._v(" "),n("li",[t._v("たくさんのミドルウェアや社内サービスと連携するとなるとそれらのdockerコンテナ設定か、外部への接続設定が必要になる\n\n"),n("ul",[n("li",[t._v("外部結合しない単体で完結するシステムならこれだけでも開発が可能かも")]),t._v(" "),n("li",[t._v("つよい人が先に "),n("code",[t._v(".gitpod.yml")]),t._v(" を設定してチームで使うとクリーンな環境でみんな幸せに...\n\n"),n("ul",[n("li",[t._v("新規参入メンバーが開発環境を整えるみたいなタスクがなくなるのでは")]),t._v(" "),n("li",[t._v("手慣れたIDEは使わせないという選択肢がとれればという不可能な点を除けば...")])])])])]),t._v(" "),n("li",[t._v("vimキーバインドさえあれば優勝(実装大変そうだけど...お願いしますmm\n\n"),n("ul",[n("li",[t._v("iPad Pro + Smartkeyboard + Gitpod with vimキーバインドで試してみたい!!")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"level-left is-left"},[e("div",{staticClass:"level-item"})])}],r=o(15),v=(o(104),o(56)),_=o(72),c=(n=function(t,b){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])})(t,b)},function(t,b){function e(){this.constructor=t}n(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),d=function(t,e,o,desc){var n,l=arguments.length,v=l<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,o):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(r.a)(Reflect))&&"function"==typeof Reflect.decorate)v=Reflect.decorate(t,e,o,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(v=(l<3?n(v):l>3?n(e,o,v):n(e,o))||v);return l>3&&v&&Object.defineProperty(e,o,v),v},f=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return c(e,t),e=d([Object(v.Component)({components:{Menu:_.a}})],e)}(v.Vue),h=(o(198),o(5)),component=Object(h.a)(f,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"content is-medium"},[o("div",{staticClass:"box"},[o("span",{staticClass:"lable is-medium"},[t._v("2019-02-17")]),t._v(" "),o("h1",{staticClass:"title",attrs:{id:"2019-02-17-gitpod-impression"}},[t._v("Gitpodは意外と使えそう")]),t._v(" "),t._m(0),t._v(" "),o("adsbygoogle")],1)]),t._v(" "),o("nav",{staticClass:"level"},[t._m(1),t._v(" "),o("div",{staticClass:"level-right is-right"},[o("div",{staticClass:"level-item"},[o("nuxt-link",{staticClass:"is-left",attrs:{to:"/post/2019-02-07-githubpages-nuxt-js"}},[o("p",{staticClass:"heading"},[t._v("Older→")]),t._v(" "),o("span",[t._v("Github PagesにNuxt.jsでつくった静的ファイルをアップロードしたらGoogle Analyticsが無効になっていた")])])],1)])])])},l,!1,null,"3bbda36b",null);e.default=component.exports}}]);