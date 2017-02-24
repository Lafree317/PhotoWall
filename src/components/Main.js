require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';


let imageDatas = require('json!../data/imageData.json');

// 获取图片相关数据,利用自执行函数将数据转换成URL路径信息
imageDatas = (function getImageUrl(imageDatasArr) {
  for (var i = 0, i = imageDatasArr.length; i < j;  i++){
    var singleImageData = imageDatasArr[i];
    singleImageData.imageURL = require('../images/' + singleImageData.fileName);
    imageDatasArr[i] = singleImageData;
  }
  return imageDatasArr;
})(imageDatas);


class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">
        </section>
        <nav className="controller-nav">
        </nav>
      </section>
    );
  }
}





AppComponent.defaultProps = {
};

export default AppComponent;
