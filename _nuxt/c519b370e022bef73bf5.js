(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{154:function(e,l,v){var content=v(171);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,v(16).default)("2512191e",content,!0,{sourceMap:!1})},170:function(e,l,v){"use strict";var o=v(154);v.n(o).a},171:function(e,l,v){(e.exports=v(15)(!1)).push([e.i,"h1.title[data-v-5572a8ea]{margin-top:0}div.box[data-v-5572a8ea]{border-radius:0}ins[data-v-5572a8ea]{margin-top:1rem;margin-bottom:1rem}",""])},188:function(e,l,v){"use strict";v.r(l);var o={components:{Menu:v(62).a}},_=(v(170),v(4)),component=Object(_.a)(o,function(){var e=this,l=e.$createElement,v=e._self._c||l;return v("div",[v("div",{staticClass:"content is-medium"},[v("div",{staticClass:"box"},[v("span",{staticClass:"lable is-medium"},[e._v("2015-01-17")]),e._v(" "),v("h1",{staticClass:"title",attrs:{id:"2015-01-17-docker-meetup-4"}},[e._v("Docker Meetup Tokyo #4に参加してきました")]),e._v(" "),e._m(0),e._v(" "),v("adsbygoogle")],1)]),e._v(" "),v("nav",{staticClass:"level"},[v("div",{staticClass:"level-left is-left"},[v("div",{staticClass:"level-item"},[v("nuxt-link",{staticClass:"is-right is-pulled-left",attrs:{to:"/post/2018-11-09-blog-renewal"}},[v("p",{staticClass:"heading"},[e._v("←Newer")]),e._v(" "),v("span",[e._v("Nuxt.jsを使ってブログをリニューアルしました")])])],1)]),e._v(" "),v("div",{staticClass:"level-right is-right"},[v("div",{staticClass:"level-item"},[v("nuxt-link",{staticClass:"is-left",attrs:{to:"/post/2014-08-31-api-meetup-tokyo-number-2"}},[v("p",{staticClass:"heading"},[e._v("Older→")]),e._v(" "),v("span",[e._v("API Meetup Tokyo #2に参加してきました")])])],1)])])])},[function(){var e=this,l=e.$createElement,v=e._self._c||l;return v("div",{staticClass:"content"},[v("p",[v("a",{attrs:{href:"http://connpass.com/event/10318/",rel:"nofollow"}},[e._v("Docker Meetup Tokyo #4")]),e._v("に参加してきたメモ")]),e._v(" "),v("ul",[v("li",[e._v("感想\n\n"),v("ul",[v("li",[e._v("個人的にはDockerの監視がホットトピック。production環境で運用するためには必須。Host/Containerの両面みれるようにしないと監視対象が増えるだけでコストがペイしない。")]),e._v(" "),v("li",[e._v("kubernetesについての話題がちらほら。大規模ならばメリットでそう。個人的には思想は良さげだけどGoogle特有の概念とその名前がつらみ。")]),e._v(" "),v("li",[e._v("etcdとfleetは触っておこう。")])])])]),e._v(" "),v("p",[e._v("以下、メモ。")]),e._v(" "),v("h2",[v("a",{attrs:{href:"#deeeet%E3%81%95%E3%82%93-coreos%E3%81%AE%E5%9F%BA%E7%A4%8E-coreos%E3%81%AB%E6%9C%9F%E5%BE%85%E3%81%99%E3%82%8B%E3%81%93%E3%81%A8",rel:"nofollow"}},[v("span")]),e._v("\n@deeeetさん "),v("a",{attrs:{href:"https://speakerdeck.com/tcnksm/coreoskurasutanidockerkontenawodepuroi-number-dockerjp",rel:"nofollow"}},[e._v("CoreOSの基礎/CoreOSに期待すること")])]),e._v(" "),v("h3",[v("a",{attrs:{href:"#docker%E3%81%AE%E3%83%A1%E3%83%AA%E3%83%87%E3%83%A1",rel:"nofollow"}},[v("span")]),e._v("\nDockerのメリデメ")]),e._v(" "),v("ul",[v("li",[e._v("メリット")]),e._v(" "),v("li",[e._v("デメリット\n\n"),v("ul",[v("li",[e._v("オーケストレーション：複数Host間の連携")]),e._v(" "),v("li",[e._v("死活監視")])])])]),e._v(" "),v("h3",[v("a",{attrs:{href:"#coreos",rel:"nofollow"}},[v("span")]),e._v("\nCoreOS")]),e._v(" "),v("ol",[v("li",[e._v("特徴\n\n"),v("ul",[v("li",[e._v("RAMの使用量114MB")]),e._v(" "),v("li",[e._v("書き込み不可なRootFS→updateが安全・容易")])])]),e._v(" "),v("li",[e._v("技術\n\n"),v("ul",[v("li",[e._v("etcd\n\n"),v("ul",[v("li",[e._v("分散キーバリューストア、コマンドライン/RESTのAPIを持つ")])])]),e._v(" "),v("li",[e._v("fleet\n\n"),v("ul",[v("li",[e._v("分散init system")])])]),e._v(" "),v("li",[e._v("cloud-config\n\n"),v("ul",[v("li",[e._v("CoreOSの初期設定")])])]),e._v(" "),v("li",[e._v("TERAFORM\n\n"),v("ul",[v("li",[e._v("インフラの起動/連携をコードで書ける")]),e._v(" "),v("li",[e._v("複数のクラウドプラットフォームを連携させる")])])])])]),e._v(" "),v("li",[e._v("利点")]),e._v(" "),v("li",[e._v("運用")])]),e._v(" "),v("h3",[v("a",{attrs:{href:"#%E6%84%9F%E6%83%B3",rel:"nofollow"}},[v("span")]),e._v("\n感想")]),e._v(" "),v("ul",[v("li",[e._v("サービスを提供するコンテナと同時にサービスディスカバリー用のコンテナを上げる\n\n"),v("ul",[v("li",[e._v("ディスカバリー用のコンテナ死んだらどうなるのだろう")])])])]),e._v(" "),v("h2",[v("a",{attrs:{href:"#y-uuk1%E3%81%95%E3%82%93-web%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8Bdocker%E3%83%91%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%B3%E3%82%B9%E3%83%81%E3%83%A5%E3%83%BC%E3%83%8B%E3%83%B3%E3%82%B0",rel:"nofollow"}},[v("span")]),e._v("\n@y_uuk1さん WebアプリケーションにおけるDockerパフォーマンスチューニング")]),e._v(" "),v("h3",[v("a",{attrs:{href:"#docker%E3%81%AF%E6%80%A7%E8%83%BD%E5%8A%A3%E5%8C%96%E3%81%97%E3%81%AA%E3%81%84%E3%81%AE",rel:"nofollow"}},[v("span")]),e._v("\nDockerは性能劣化しないの？")]),e._v(" "),v("ol",[v("li",[e._v("LXC\n\n"),v("ul",[v("li",[e._v("オブジェクトの共有効率がよい")]),e._v(" "),v("li",[e._v("LXC vc XEN, KVM")]),e._v(" "),v("li",[e._v("UNION Filesystem")]),e._v(" "),v("li",[e._v("Devicemapper\n\n"),v("ul",[v("li",[e._v("ブロックデバイスレベルの実装なのでfilesystemに依存しない")])])])])]),e._v(" "),v("li",[e._v("Volume\n\n"),v("ul",[v("li",[e._v("コンテナ間でディレクトリを共有するためのもの")])])]),e._v(" "),v("li",[e._v("Network\n\n"),v("ul",[v("li",[e._v("Portmapper")]),e._v(" "),v("li",[e._v("コンテナ間通信やコンテナ-ホスト間はiptablesでNAT")]),e._v(" "),v("li",[e._v("Host Networking")]),e._v(" "),v("li",[e._v("コンテナ用のNetwork Namespaceを作らずにホスト側のを利用する")])])])]),e._v(" "),v("h3",[v("a",{attrs:{href:"#isucon%E3%81%A7%E3%81%AE%E7%9F%A5%E8%A6%8B",rel:"nofollow"}},[v("span")]),e._v("\nISUCONでの知見")]),e._v(" "),v("ul",[v("li",[e._v("NginxとMySQLをDocker化\n\n"),v("ul",[v("li",[e._v("defaultとほぼ同じスコアに。")]),e._v(" "),v("li",[e._v("loopbackアドレスへくるとdocker-proxyと通信して遅くなった")])])])]),e._v(" "),v("h3",[v("a",{attrs:{href:"#%E6%84%9F%E6%83%B3",rel:"nofollow"}},[v("span")]),e._v("\n感想")]),e._v(" "),v("ul",[v("li",[e._v("aufs→devicemapperになってる")])]),e._v(" "),v("h2",[v("a",{attrs:{href:"#shot6%E3%81%95%E3%82%93-amazon-ec2-container-service-ecs",rel:"nofollow"}},[v("span")]),e._v("\n@shot6さん "),v("a",{attrs:{href:"http://www.slideshare.net/shot6/ecs-for-docker-meetup-4",rel:"nofollow"}},[e._v("Amazon EC2 Container Service(ECS)")])]),e._v(" "),v("h3",[v("a",{attrs:{href:"#ecs%E3%81%A8%E3%81%AF",rel:"nofollow"}},[v("span")]),e._v("\nECSとは")]),e._v(" "),v("ul",[v("li",[e._v("Docker管理で面倒なところを面倒見てくれる")])]),e._v(" "),v("h3",[v("a",{attrs:{href:"#ecs%E3%81%AE%E3%83%A1%E3%83%AA%E3%83%83%E3%83%88",rel:"nofollow"}},[v("span")]),e._v("\nECSのメリット")]),e._v(" "),v("ul",[v("li",[e._v("Dockerのイメージをそのまま利用可能")]),e._v(" "),v("li",[e._v("OSも制約がない")]),e._v(" "),v("li",[e._v("AWSのセキュリティ機構が使える")])]),e._v(" "),v("h3",[v("a",{attrs:{href:"#ecs%E3%81%AE%E4%BB%95%E7%B5%84%E3%81%BF",rel:"nofollow"}},[v("span")]),e._v("\nECSの仕組み")]),e._v(" "),v("ul",[v("li",[e._v("Cluster\n\n"),v("ul",[v("li",[e._v("リソースプール、管理するトップレベルの概念")])])]),e._v(" "),v("li",[e._v("Container Instance\n\n"),v("ul",[v("li",[e._v("EC2")]),e._v(" "),v("li",[e._v("ECS Agentが一コンテナとして起動する")])])]),e._v(" "),v("li",[e._v("Task\n\n"),v("ul",[v("li",[e._v("Unit of Work")]),e._v(" "),v("li",[e._v("複数のコンテナをまとめた概念")]),e._v(" "),v("li",[e._v("JSONでTask Definitionを書く")]),e._v(" "),v("li",[e._v("ECSのスケジューラにまかせてコンテナ起動(ポートやリソースの空きを見てくれる)")]),e._v(" "),v("li",[e._v("自分で指定したコンテナに起動する")])])])]),e._v(" "),v("h2",[v("a",{attrs:{href:"#yugui%E3%81%95%E3%82%93-kubernetes%E3%81%AE%E6%A9%9F%E8%83%BD%E3%81%A8%E3%83%87%E3%83%A2-%E9%96%8B%E7%99%BA%E4%BD%93%E5%88%B6%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6",rel:"nofollow"}},[v("span")]),e._v("\n@yuguiさん Kubernetesの機能とデモ、開発体制について")]),e._v(" "),v("h3",[v("a",{attrs:{href:"#kubernetes%E3%81%A8%E3%81%AF",rel:"nofollow"}},[v("span")]),e._v("\nKubernetesとは")]),e._v(" "),v("ul",[v("li",[e._v("OSS")]),e._v(" "),v("li",[e._v("Pod ≠ Container\n\n"),v("ul",[v("li",[e._v("Containerの組み合わせ、集合")]),e._v(" "),v("li",[e._v("同じインスタンスで走らせたいContainer集合")])])])]),e._v(" "),v("h3",[v("a",{attrs:{href:"#%E3%82%A2%E3%83%BC%E3%82%AD%E3%83%86%E3%82%AF%E3%83%81%E3%83%A3",rel:"nofollow"}},[v("span")]),e._v("\nアーキテクチャ")]),e._v(" "),v("ul",[v("li",[e._v("etcdを中心にAPIserver、ControllerManager、Schedulerがごにょごにょする")])]),e._v(" "),v("h3",[v("a",{attrs:{href:"#kubernetes%E3%81%AE%E3%83%A1%E3%83%AA%E3%83%83%E3%83%88",rel:"nofollow"}},[v("span")]),e._v("\nKubernetesのメリット")]),e._v(" "),v("ul",[v("li",[e._v("Common Technology")]),e._v(" "),v("li",[e._v("Well design by Google\n\n"),v("ul",[v("li",[e._v("Googleのコンテナ利用の知見が盛り込まれている。")]),e._v(" "),v("li",[e._v("e.g. ポートの管理ができない規模でうまくやる仕組み")])])]),e._v(" "),v("li",[e._v("Fast-moving")]),e._v(" "),v("li",[e._v("Open-minded")])]),e._v(" "),v("h2",[v("a",{attrs:{href:"#ten-forward%E3%81%95%E3%82%93-cgroup%E3%81%AB%E3%82%88%E3%82%8B%E3%83%AA%E3%82%BD%E3%83%BC%E3%82%B9%E9%9A%94%E9%9B%A2%E5%85%A5%E9%96%80",rel:"nofollow"}},[v("span")]),e._v("\n@ten_forwardさん "),v("a",{attrs:{href:"https://speakerdeck.com/tenforward/cgroupniyorurisosuge-li-ru-men-2015-01-17",rel:"nofollow"}},[e._v("cgroupによるリソース隔離入門")])]),e._v(" "),v("h3",[v("a",{attrs:{href:"#cgroup%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6docker%E3%81%AE%E3%83%AA%E3%82%BD%E3%83%BC%E3%82%B9%E3%82%92%E9%9A%94%E9%9B%A2%E3%81%99%E3%82%8B%E3%81%AB%E3%81%AF",rel:"nofollow"}},[v("span")]),e._v("\nCgroupを使ってDockerのリソースを隔離するには")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("Cgroupとは")]),e._v(" "),v("ul",[v("li",[e._v("CPU、メモリなどのリソースを制限・隔離する")]),e._v(" "),v("li",[e._v("e.g. CPUリソースをコンテナ毎に10:1にする、絶対量で指定する etc....")])])]),e._v(" "),v("li",[v("p",[e._v("Cgroupを使ったリソース隔離方法")]),e._v(" "),v("ul",[v("li",[e._v("docker")]),e._v(" "),v("li",[e._v("cgroupfs直接")]),e._v(" "),v("li",[e._v("systemd")])])])]),e._v(" "),v("h2",[v("a",{attrs:{href:"#yuryu%E3%81%95%E3%82%93-redhat-atomic-host%E3%81%AE%E8%A9%B1",rel:"nofollow"}},[v("span")]),e._v("\n@yuryuさん "),v("a",{attrs:{href:"http://www.slideshare.net/Yuryu/docker-on-project-atomic-docker-meetup-4",rel:"nofollow"}},[e._v("RedHat atomic hostの話")])]),e._v(" "),v("h3",[v("a",{attrs:{href:"#redhat%E3%81%A8docker",rel:"nofollow"}},[v("span")]),e._v("\nRedHatとDocker")]),e._v(" "),v("ul",[v("li",[e._v("RedHat7でDocker正式サポート\n\n"),v("ul",[v("li",[e._v("Extrasチャンネル")]),e._v(" "),v("li",[e._v("常に最新版を使えるようにrebaseする")]),e._v(" "),v("li",[e._v("リリース間隔も短い")]),e._v(" "),v("li",[e._v("ミッションクリティカル非推奨")]),e._v(" "),v("li",[e._v("頻繁にrebase/リリースされるため")]),e._v(" "),v("li",[e._v("サポートが限定的")])])])]),e._v(" "),v("h3",[v("a",{attrs:{href:"#project-atomic",rel:"nofollow"}},[v("span")]),e._v("\nProject Atomic")]),e._v(" "),v("ul",[v("li",[e._v("Atomic Hostを使っているプロジェクト")]),e._v(" "),v("li",[e._v("小さなOS + コンテナのためのツールをセットで提供")]),e._v(" "),v("li",[e._v("Fedora Atomic")]),e._v(" "),v("li",[e._v("RHEL Atomic Host\n\n"),v("ul",[v("li",[e._v("商用バンでサポート付き安定版")])])]),e._v(" "),v("li",[v("p",[e._v("CentOS Atomic Host")]),e._v(" "),v("ul",[v("li",[e._v("RHEL Atomicとは関係せずに開発")])])]),e._v(" "),v("li",[v("p",[e._v("CoreOS都の違い")]),e._v(" "),v("ul",[v("li",[e._v("CoreOS:etcd, fleetを利用。コンテナ向けに１から作られている。")]),e._v(" "),v("li",[e._v("Atomic Host:etcd, kubernetesを利用。既存のOSをコンテナに最適化。")])])]),e._v(" "),v("li",[v("p",[e._v("RHELとAtomic Hostの違い")]),e._v(" "),v("ul",[v("li",[e._v("yumが無い")]),e._v(" "),v("li",[e._v("OS自体はrpm-ostreeでupdate/rollback")]),e._v(" "),v("li",[e._v("Docker, etcd, kubernetesが標準で入る")])])])]),e._v(" "),v("h3",[v("a",{attrs:{href:"#%E6%84%9F%E6%83%B3",rel:"nofollow"}},[v("span")]),e._v("\n感想")]),e._v(" "),v("ul",[v("li",[e._v("RHEL→レルと読んでた。こんどからレルと言ってみよう。")]),e._v(" "),v("li",[e._v("現状はαバージョン。URLが非公式感ただようにツボ。")])]),e._v(" "),v("h2",[v("a",{attrs:{href:"#spesnova%E3%81%95%E3%82%93-docker-at-wantedly",rel:"nofollow"}},[v("span")]),e._v("\n@spesnovaさん Docker at Wantedly")]),e._v(" "),v("h3",[v("a",{attrs:{href:"#docker%E3%82%92%E6%9C%AC%E7%95%AA%E7%92%B0%E5%A2%83%E3%81%A7%E5%8B%95%E3%81%8B%E3%81%97%E3%81%A6%E3%81%AE%E7%9F%A5%E8%A6%8B",rel:"nofollow"}},[v("span")]),e._v("\nDockerを本番環境で動かしての知見")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("Herokuの時の構成")]),e._v(" "),v("ul",[v("li",[e._v("web")]),e._v(" "),v("li",[e._v("worker")]),e._v(" "),v("li",[e._v("scheduler")]),e._v(" "),v("li",[e._v("on-off")]),e._v(" "),v("li",[e._v("db:migrationとかを一度だけ実行する短命なコンテナ")])])]),e._v(" "),v("li",[v("p",[e._v("AWS移行 + Dockerへ")]),e._v(" "),v("ul",[v("li",[e._v("Elastic beanstalk -> Capistrano3")]),e._v(" "),v("li",[e._v("スタティックにオーケストレーション <-> 開いてるホストにコンテナデプロイ")]),e._v(" "),v("li",[e._v("Centurion -> chef")]),e._v(" "),v("li",[e._v("Chef with Docker -> packer")])])]),e._v(" "),v("li",[v("p",[e._v("知見")]),e._v(" "),v("ul",[v("li",[e._v("Dockerfileをそのまま使おう")]),e._v(" "),v("li",[e._v("Chef+Packer: キャッシュが欲しくなる、必要なツールが多い")]),e._v(" "),v("li",[e._v("Dockerfileの動的生成はつらい")]),e._v(" "),v("li",[e._v("Dockerホストは軽量にしておこう")]),e._v(" "),v("li",[e._v("herokuから学んだ")]),e._v(" "),v("li",[e._v("on-offコンテナ")]),e._v(" "),v("li",[e._v("設定は環境変数で渡す")]),e._v(" "),v("li",[e._v("1コンテナ1プロセス")]),e._v(" "),v("li",[e._v("ログはstdout/stderrへ、専用コンテナでログ収集")]),e._v(" "),v("li",[e._v("できるだけ全てコンテナでやる")])])])]),e._v(" "),v("h2",[v("a",{attrs:{href:"#ixixi%E3%81%95%E3%82%93-development-and-deployment-with-docker-at-dwango",rel:"nofollow"}},[v("span")]),e._v("\n@ixixiさん "),v("a",{attrs:{href:"https://speakerdeck.com/ixixi/d-evelopment-and-deployment-with-docker-at-dwango",rel:"nofollow"}},[e._v("Development and Deployment with Docker at Dwango")])]),e._v(" "),v("ul",[v("li",[e._v("レコメンドの確認したい\n\n"),v("ul",[v("li",[e._v("実際に投入しないとわかりづらい")]),e._v(" "),v("li",[e._v("Unitテストではわからない")])])])]),e._v(" "),v("h2",[v("a",{attrs:{href:"#kazunori-279-google-container-engine%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6",rel:"nofollow"}},[v("span")]),e._v("\n@kazunori_279 Google Container Engineについて")]),e._v(" "),v("ul",[v("li",[e._v("GKE\n\n"),v("ul",[v("li",[e._v("full managed serviceのkubernetes")])])])]),e._v(" "),v("h2",[v("a",{attrs:{href:"#datadog%E3%81%95%E3%82%93%E3%81%AElt",rel:"nofollow"}},[v("span")]),e._v("\nDatadogさんのLT")]),e._v(" "),v("ul",[v("li",[e._v("コンテナの状況を把握できてますか？")]),e._v(" "),v("li",[e._v("dockerのユースケース\n\n"),v("ul",[v("li",[e._v("CI")]),e._v(" "),v("li",[e._v("Continuous Delivaly")])])]),e._v(" "),v("li",[e._v("平均5コンテナ/ホスト\n\n"),v("ul",[v("li",[e._v("いずれコンテナ密度があがるのでは？")])])]),e._v(" "),v("li",[e._v("はじめから監視の仕組みを考えよう")])]),e._v(" "),v("h2",[v("a",{attrs:{href:"#inut%E3%81%95%E3%82%93-%E5%85%B1%E7%94%A8%E3%82%B9%E3%83%91%E3%82%B3%E3%83%B3%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E4%B8%8A%E3%81%A7%E3%83%87%E3%83%BC%E3%82%BF%E8%A7%A3%E6%9E%90-with-docker",rel:"nofollow"}},[v("span")]),e._v("\n@iNutさん "),v("a",{attrs:{href:"https://speakerdeck.com/inutano/large-scale-biological-data-science-with-docker",rel:"nofollow"}},[e._v("共用スパコンシステム上でデータ解析 with Docker")])]),e._v(" "),v("h3",[v("a",{attrs:{href:"#%E6%84%9F%E6%83%B3",rel:"nofollow"}},[v("span")]),e._v("\n感想")]),e._v(" "),v("ul",[v("li",[e._v("TLであったようにDockerfileへのリンクが論文にあったら再現性とか高そう。この発想はいろんなところで使えそう。")])]),e._v(" "),v("h2",[v("a",{attrs:{href:"#ianmlewis%E3%81%95%E3%82%93-dockerapi%E3%82%92go%E3%81%8B%E3%82%89%E4%BD%BF%E3%81%86",rel:"nofollow"}},[v("span")]),e._v("\n@IanMLewisさん [DockerAPIをGoから使う]()")]),e._v(" "),v("ul",[v("li",[e._v("RemoteAPI\n\n"),v("ul",[v("li",[e._v("Kubernetesが使っているGoのAPIを紹介する")])])])]),e._v(" "),v("h2",[v("a",{attrs:{href:"#takipone%E3%81%95%E3%82%93-docker-ecs%E3%81%A7iam%E3%83%AD%E3%83%BC%E3%83%AB%E3%82%92%E5%88%A9%E7%94%A8%E3%81%99%E3%82%8B",rel:"nofollow"}},[v("span")]),e._v("\n@takiponeさん Docker/ECSでIAMロールを利用する")]),e._v(" "),v("ul",[v("li",[e._v("クラウド側で持っているサービスを利用してクレデンシャルを外出しする")]),e._v(" "),v("li",[e._v("コンテナとインスタンスの区別ができない")])]),e._v(" "),v("h2",[v("a",{attrs:{href:"#mook%E3%81%95%E3%82%93-git%E3%81%AE%E3%82%B3%E3%83%9F%E3%83%83%E3%83%88%E3%81%94%E3%81%A8%E3%81%ABqa%E7%92%B0%E5%A2%83%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B%E3%83%97%E3%83%AD%E3%82%AD%E3%82%B7%E3%82%92%E4%BD%9C%E3%81%A3%E3%81%A6%E3%81%BF%E3%81%9F",rel:"nofollow"}},[v("span")]),e._v("\nMookさん GitのコミットごとにQA環境を作成するプロキシを作ってみた")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("poolというプロダクト")]),e._v(" "),v("ul",[v("li",[e._v("コミットやブランチに対応する検証用コンテナが立ち上がる")])])]),e._v(" "),v("li",[v("p",[e._v("prevs.io")])])]),e._v(" "),v("h3",[v("a",{attrs:{href:"#%E6%84%9F%E6%83%B3",rel:"nofollow"}},[v("span")]),e._v("\n感想")]),e._v(" "),v("ul",[v("li",[e._v("アクセスが来た単位で見せれる画面が上がるのは凄い良い。マネージャが見たいといった時に最新のコードからすぐに見せれる。")]),e._v(" "),v("li",[e._v("PR毎に画面ですぐに確認できたら嬉しいよね。")])]),e._v(" "),v("h2",[v("a",{attrs:{href:"#ytnobody%E3%81%95%E3%82%93-tutum%E3%81%A7%E9%9B%91%E3%81%AB%E5%8C%85%E3%82%93%E3%81%A7%E9%9B%91%E3%81%AB%E3%83%87%E3%83%97%E3%83%AD%E3%82%A4",rel:"nofollow"}},[v("span")]),e._v("\n@ytnobodyさん tutumで雑に包んで雑にデプロイ")]),e._v(" "),v("h3",[v("a",{attrs:{href:"#%E6%84%9F%E6%83%B3",rel:"nofollow"}},[v("span")]),e._v("\n感想")]),e._v(" "),v("ul",[v("li",[e._v("tutum良さそう。コンテナをちょろっと見せたいときに良さげ。")]),e._v(" "),v("li",[e._v("監視画面あるのが嬉しい")])])])}],!1,null,"5572a8ea",null);l.default=component.exports}}]);