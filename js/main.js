
var map;
var marker;
var infoWindow;
var center = {
    lat: 34.694889158786495, // 緯度
    lng: 135.19493126935183  // 経度
};

// 上記の実行文に対してどのように動作をするか変数事に指定してあげる
function initMap() {
 map = new google.maps.Map(document.getElementById('map'), { // #mapに地図を埋め込む
     center: center,
     zoom: 18 // 地図のズームを指定
       });

       marker = new google.maps.Marker({ // マーカーの追加
        position: center, // マーカーを立てる位置を指定
      map: map, // マーカーを立てる地図を指定
      icon: {
          url:'img/module/map-img@2x.png',
          scaledSize : new google.maps.Size(80, 100)
       }
       });

       infoWindow = new google.maps.InfoWindow({ // 吹き出しの追加
        content: '<div class="sample">三宮駅</div>' // 吹き出しに表示する内容
  });
 marker.addListener('click', function() { // マーカーをクリックしたとき
     infoWindow.open(map, marker); // 吹き出しの表示
    });
}