// ======切换menu======
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show-menu')
    })
  }
}

showMenu('nav-toggle', 'nav-menu')

// ====== 点击链接时候移除菜单栏=====
const navLink = document.querySelectorAll('.nav_link')

//删除show-menu
function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}

navLink.forEach((n) => n.addEventListener('click', linkAction))

// ======动态添加active_link======
//获取sections
const sections = document.querySelectorAll('section[id]')
//给section添加active_link
function scrollActive() {
  //获取滚动距离
  const scrollY = window.pageYOffset
  // console.log(scrollY)

  sections.forEach((current) => {
    //获取当前章节的高度
    const sectionHeight = current.offsetHeight
    // console.log(sectionHeight)

    //当前章节距离顶部父元素的顶部距离
    const sectionTop = current.offsetTop - 48
    sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav_menu a[href*= ' + sectionId + ']')
        .classList.add('active_link')
    } else {
      document
        .querySelector('.nav_menu a[href*= ' + sectionId + ']')
        .classList.remove('active_link')
    }
  })
}

//监听滚动时间
window.addEventListener('scroll', scrollActive)

// 添加header的底部阴影
function scrollHeader() {
  const nav = document.getElementById('header')

  if (this.scrollY >= 200) nav.classList.add('scroll-header')
  else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

// 切换页面主题黑夜或者白天
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'fa-sun'

// 判断之前选择的主题
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//使用dark主题来验证当前主题
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'fas-sun' : 'fas-moon'

//判断用户之前是否有选择主题
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  )
  themeButton.classList[selectedIcon === 'fas-sun' ? 'add' : 'remove'](
    iconTheme
  )
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)

  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

// 滚动动画
const sr = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 2500,
  reset: true,
})

sr.reveal(
  `
 .home_data,.home_img,.about_data, .about_img, .services_content, .menu_content,.contact_data, .contact_button,.footer_content
`,
  {
    interval: 200,
  }
)
