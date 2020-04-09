(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{542:function(t,n,l){var content=l(574);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(37).default)("0c2cc750",content,!0,{sourceMap:!1})},573:function(t,n,l){"use strict";var e=l(542);l.n(e).a},574:function(t,n,l){(n=l(36)(!1)).push([t.i,"h1.title[data-v-033a2bf8]{margin-top:0}div.box[data-v-033a2bf8]{border-radius:0}ins[data-v-033a2bf8]{margin-top:1rem;margin-bottom:1rem}",""]),t.exports=n},596:function(t,n,l){"use strict";l.r(n);var e,v=l(7),o=(l(59),l(20)),_=l(192),c=(e=function(t,b){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])})(t,b)},function(t,b){function n(){this.constructor=t}e(t,b),t.prototype=null===b?Object.create(b):(n.prototype=b.prototype,new n)}),r=function(t,n,l,desc){var e,o=arguments.length,_=o<3?n:null===desc?desc=Object.getOwnPropertyDescriptor(n,l):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)_=Reflect.decorate(t,n,l,desc);else for(var i=t.length-1;i>=0;i--)(e=t[i])&&(_=(o<3?e(_):o>3?e(n,l,_):e(n,l))||_);return o>3&&_&&Object.defineProperty(n,l,_),_},E=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return c(n,t),n=r([Object(o.Component)({components:{Menu:_.a}})],n)}(o.Vue),f=(l(573),l(18)),component=Object(f.a)(E,(function(){var t=this,n=t.$createElement,l=t._self._c||n;return l("div",[l("div",{staticClass:"content is-medium"},[l("div",{staticClass:"box"},[l("span",{staticClass:"lable is-medium"},[t._v("2020-01-07")]),t._v(" "),l("h1",{staticClass:"title",attrs:{id:"2020-01-07-SES-issues"}},[t._v("現場エンジニアからみたSESの問題点")]),t._v(" "),t._m(0),t._v(" "),l("adsbygoogle")],1)]),t._v(" "),l("nav",{staticClass:"level"},[l("div",{staticClass:"level-left is-left"},[l("div",{staticClass:"level-item"},[l("nuxt-link",{staticClass:"is-right is-pulled-left",attrs:{to:"/post/2020-01-28-search-form-by-algolia"}},[l("p",{staticClass:"heading"},[t._v("←Newer")]),t._v(" "),l("span",[t._v("algoliaをつかってNuxt.jsのサイトに検索フォームをつけてみた")])])],1)]),t._v(" "),l("div",{staticClass:"level-right is-right"},[l("div",{staticClass:"level-item"},[l("nuxt-link",{staticClass:"is-left",attrs:{to:"/post/2019-07-01-realforce-ha-iizo"}},[l("p",{staticClass:"heading"},[t._v("Older→")]),t._v(" "),l("span",[t._v("REALFORCEはいいぞ")])])],1)])])])}),[function(){var t=this,n=t.$createElement,l=t._self._c||n;return l("div",{staticClass:"content"},[l("p",[t._v("自分のキャリアを振り返ってみてSESで派遣されるITエンジニアをやっていた時期もあったのですがSESの仕組み自体がevilだなと思って飛び出したこともあり、そのときを振り返りつつ考えたことを一旦書き出そうと思います。")]),t._v(" "),l("p",[t._v("いくつかの前提。")]),t._v(" "),l("ul",[l("li",[t._v("思考実験です。")]),t._v(" "),l("li",[t._v("n=1の事例を元にして考えているので個別のケースであるある/ないないというのはでてくると思います。")]),t._v(" "),l("li",[t._v("どこか特定の企業や個人を貶める意図はないです。")]),t._v(" "),l("li",[t._v("オチもないかもしれません")])]),t._v(" "),l("h1",[l("a",{staticClass:"anchor",attrs:{name:"昔々",href:"#%E6%98%94%E3%80%85",rel:"nofollow","aria-hidden":"true"}},[l("span",{staticClass:"octicon octicon-link"})]),t._v("\n昔々")]),t._v(" "),l("p",[t._v("筆者が新卒で入った会社は人数だけは多いSESの会社でした。文系新卒という焦りがあり、資格試験を頑張ったり話題のライブラリ触って使えるようにしてみたりするなど技術スキルを磨く日々でした。"),l("br"),t._v("\n当時はエンジニアたるもの腕一本で生きていくためにも腕を磨くのは当然だと考えてましたが、SESの仕組みと実態を知れば知るほど技術スキルを上げる意味が見いだせなくなったので畜生!転職だとなりました。")]),t._v(" "),l("h1",[l("a",{staticClass:"anchor",attrs:{name:"sesの問題点",href:"#ses%E3%81%AE%E5%95%8F%E9%A1%8C%E7%82%B9",rel:"nofollow","aria-hidden":"true"}},[l("span",{staticClass:"octicon octicon-link"})]),t._v("\nSESの問題点")]),t._v(" "),l("p",[t._v("以下の3者の視点から考えます。1と2については割と想像です。")]),t._v(" "),l("ol",[l("li",[t._v("エンジニアを集めたい発注企業(発注企業)")]),t._v(" "),l("li",[t._v("エンジニアを派遣したい派遣企業(派遣元企業)")]),t._v(" "),l("li",[t._v("派遣企業に所属するエンジニア(現場エンジニア)")])]),t._v(" "),l("h3",[l("a",{staticClass:"anchor",attrs:{name:"sesの仕組みでそれぞれの目的は-建前",href:"#ses%E3%81%AE%E4%BB%95%E7%B5%84%E3%81%BF%E3%81%A7%E3%81%9D%E3%82%8C%E3%81%9E%E3%82%8C%E3%81%AE%E7%9B%AE%E7%9A%84%E3%81%AF-%E5%BB%BA%E5%89%8D",rel:"nofollow","aria-hidden":"true"}},[l("span",{staticClass:"octicon octicon-link"})]),t._v("\nSESの仕組みでそれぞれの目的は？(建前)")]),t._v(" "),l("ul",[l("li",[t._v("1の発注企業は案件に対して人手が足りないので人を集めたい\n\n"),l("ul",[l("li",[t._v("自社リソースの不足")]),t._v(" "),l("li",[t._v("エンジニアリソース調達コストの削減\n\n"),l("ul",[l("li",[t._v("採用はリードタイムがかかる")]),t._v(" "),l("li",[t._v("エンジニア採用する手段、スキル、評価する方法がない")])])])])]),t._v(" "),l("li",[t._v("2の派遣する企業はエンジニア派遣することで安定した売上をあげることができる。\n\n"),l("ul",[l("li",[t._v("エンジニア単位の売上変動がそれほど大きくない(経営上、安定した収益構造はとても大事!!)")])])]),t._v(" "),l("li",[t._v("3のエンジニアは営業コストは不要で安定した給与\n\n"),l("ul",[l("li",[t._v("フリーランスITエンジニアと比較した場合\n\n"),l("ul",[l("li",[t._v("下手すると座ってるだけでもOKと考えられる(人月商売なので)")])])]),t._v(" "),l("li",[t._v("ほぼノースキルでも現場経験をつんでスキルアップできる(新卒の場合)")]),t._v(" "),l("li",[t._v("大手IT系企業だと社内でプロジェクト移動とかチーム移動できところもあるだろうが似たようなムーブが可能\n\n"),l("ul",[l("li",[t._v("現場を渡り歩き経験値アップやスキルアップを目指すルート")]),t._v(" "),l("li",[t._v("逆に特定ドメインにつよつよになることでバリューをあげるルートもありえる")])])])])])]),t._v(" "),l("h1",[l("a",{staticClass:"anchor",attrs:{name:"実態",href:"#%E5%AE%9F%E6%85%8B",rel:"nofollow","aria-hidden":"true"}},[l("span",{staticClass:"octicon octicon-link"})]),t._v("\n実態")]),t._v(" "),l("p",[t._v("負のインセンティブが働きがち。。。")]),t._v(" "),l("h2",[l("a",{staticClass:"anchor",attrs:{name:"発注企業",href:"#%E7%99%BA%E6%B3%A8%E4%BC%81%E6%A5%AD",rel:"nofollow","aria-hidden":"true"}},[l("span",{staticClass:"octicon octicon-link"})]),t._v("\n発注企業")]),t._v(" "),l("ul",[l("li",[t._v("たくさん働かせたほうが価値の総量がふえる\n\n"),l("ul",[l("li",[t._v("契約にもよるが実態は定額働かせ放題に近い")]),t._v(" "),l("li",[t._v("生み出すバリューに大きな差があるはずのエンジニア業界にあっても、シニアとジュニアエンジニアの単価の差はそこまででもない")])])]),t._v(" "),l("li",[t._v("予算あきりな事業だとなぜか人が余る\n\n"),l("ul",[l("li",[t._v("予算内でとにかく予定を満たす人数を集める")]),t._v(" "),l("li",[t._v("ミスマッチ人材がでるが契約期間は残っているので働かせる(謎のもったいない精神、フローではなくリソース最適化を目指してしまう)")]),t._v(" "),l("li",[t._v("スキルレベルが足りないので低レベル側に合わせた開発手法や技術選定がありうる\n\n"),l("ul",[l("li",[t._v("現場エンジニアとの信頼関係の欠如、かけるコストに合わない管理体制")])])])])])]),t._v(" "),l("h2",[l("a",{staticClass:"anchor",attrs:{name:"派遣元企業",href:"#%E6%B4%BE%E9%81%A3%E5%85%83%E4%BC%81%E6%A5%AD",rel:"nofollow","aria-hidden":"true"}},[l("span",{staticClass:"octicon octicon-link"})]),t._v("\n派遣元企業")]),t._v(" "),l("ul",[l("li",[t._v("発注企業のビジネス成功よりも自社の売上に目が行きがちにみえる\n\n"),l("ul",[l("li",[t._v("頭数(=人月)を増やすほうが売上があがる。コスト(=作業人数)をかけない技術的解決や作業量を減らす提案のインセンティブが薄い")]),t._v(" "),l("li",[t._v("もちろん長期的に見れば発注企業のビジネスが成功すれば自社へ恩恵を受ける可能性が高まるのは当然の話であるが...")])])]),t._v(" "),l("li",[t._v("顧客最適化を目指すとたくさん働いてもらうのが手っ取り早い\n\n"),l("ul",[l("li",[t._v("スキルマッチする人材を見つけるのはそれなりにコストがかかる。それをやるのがSES企業の役割じゃないのかな...")]),t._v(" "),l("li",[t._v("今現場にいるメンバーにたくさん働いてもらうほうが成果アピールもできて一石二鳥")])])]),t._v(" "),l("li",[t._v("新卒やジュニアなエンジニアを現場に押し込んで売り上げる引力が働く\n\n"),l("ul",[l("li",[t._v("スキルマッチしたエンジニアを派遣しているかもしれないがジュニアなエンジニアとシニアの単価は一緒だったりそこまで差がなかったり...")]),t._v(" "),l("li",[t._v("右も左もわからない新卒をちゃらっと教育して既存の現場にシニアとセットで押し込む両面に外道ムーブが割と最適解に")])])])]),t._v(" "),l("h2",[l("a",{staticClass:"anchor",attrs:{name:"現場エンジニア",href:"#%E7%8F%BE%E5%A0%B4%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%8B%E3%82%A2",rel:"nofollow","aria-hidden":"true"}},[l("span",{staticClass:"octicon octicon-link"})]),t._v("\n現場エンジニア")]),t._v(" "),l("ul",[l("li",[t._v("給与アップは経験年数が増える以外では難しい\n\n"),l("ul",[l("li",[t._v("普通にメンバーとして仕事してたら単価アップはほぼない。つまり給与アップの源泉となる売上アップが難しい。\n\n"),l("ul",[l("li",[t._v("プロジェクトリーダーやチームリーダーで仕様はこの人がすべて知ってるみたいにならないと交渉にはならない")])])]),t._v(" "),l("li",[t._v("派遣元<->発注企業<->エンジニアの金額ギャップがでかいほうが派遣元は儲かる\n\n"),l("ul",[l("li",[t._v("安い大量の新卒とそれをまとめるちょい高ベテラン数人みたいな構造が最適になる(新卒分で稼いでベテランや会社に還元)")])])]),t._v(" "),l("li",[t._v("残業代で稼ぐのが短期的には最適な収入アップになってしまう\n\n"),l("ul",[l("li",[t._v("単価アップが難しく、作業時間を増やすことで売上と給料を増やすことしか選択肢がとれない")]),t._v(" "),l("li",[t._v("スキルアップして作業量を減らすインセンティブが働かない")])])])])]),t._v(" "),l("li",[t._v("そもそもスキルアップにつながらない現場も多数\n\n"),l("ul",[l("li",[t._v("発注企業にもある低レベル側に合わせた開発手法や技術選定でスキルアップが難しい")]),t._v(" "),l("li",[t._v("特定ドメイン知識の囲い込みによる差別化が個人最適解になりえる")])])]),t._v(" "),l("li",[t._v("システムを利用するユーザーより発注元企業の担当者の顔色を伺いがち\n\n"),l("ul",[l("li",[t._v("自分の仕事や立場を失うのとユーザーのペインを天秤にかけてほんとにユーザーに寄り添えるのか")])])])]),t._v(" "),l("h1",[l("a",{staticClass:"anchor",attrs:{name:"個人的な感想",href:"#%E5%80%8B%E4%BA%BA%E7%9A%84%E3%81%AA%E6%84%9F%E6%83%B3",rel:"nofollow","aria-hidden":"true"}},[l("span",{staticClass:"octicon octicon-link"})]),t._v("\n個人的な感想")]),t._v(" "),l("p",[t._v("経験を積むために新卒で入るのや、個人で受けるには大きい案件(公共系、政府系、金融系etc...)に携わりたいのであれば悪くはないかもしれない。"),l("br"),t._v("\nスキルアップやシステムを利用するユーザーに向き合って開発するには仕組み上むずかしくする要因が存在する。それらのリスクとうまく付き合うか見ないふりをして働いているのが現状のSESだ。")])])}],!1,null,"033a2bf8",null);n.default=component.exports}}]);