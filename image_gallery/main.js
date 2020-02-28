// 获取节点
const currentImg = document.getElementById('current')

// 下方小图容器div的节点
const imgsDiv = document.querySelector('.imgs')

// 下方小图容器div所有图片节点组成的数组
const imgList = document.querySelectorAll('.imgs img')

const opacity = 0.6

// 事件监听
imgsDiv.addEventListener('click', imgClick)

imgList[0].style.opacity = opacity
function imgClick(e){
  // 重置缩略图的 不透明度
  imgList.forEach((item)=>{
    item.style.opacity = 1
  })

  // 点击下方缩略图其中某一个，更新上方主体图的src
  currentImg.src = e.target.src

  // 添加 fade类名
  currentImg.classList.add("fade-in")
  // 设置定时器 移除 fade类名
  setTimeout(() => currentImg.classList.remove('fede-in'), 500)
  // 设置点击的 缩略图的 透明度
  e.target.style.opacity = opacity
}