<template>
  <div>
    <aside id="profile">
        <div class="inner profile-inner">
            <div class="base-info profile-block">
                <img id="avatar" class="rounded-2" :src=avatar>
                <h2 id="name">Giraffe</h2>
                <h3 id="title">Java Developer</h3>
                <!-- 定位图标 -->
                <!-- <div class="icon-map"></div> -->
                <div id="location"><i class="fas fa-map-marker-alt"></i>ChengDu, China</div>
                <a id="follow" target="_blank" href="https://github.com/giraffe0813/">关注我</a>
            </div>
            <div class="article-info profile-block">
                <div class="article-info-block">
                    56
                    <span>文章</span>
                </div>
                <div class="article-info-block">
                    36
                    <span>标签</span>
                </div>
            </div>
            <div class="profile-block recent-comments">
                <p class="recent-comments-title">最新评论</p>
                <ul id="disqus-recent-comments" class="recent-comments-container">
                    <li jinkela-class="3">
                      <img class="avatar pic" :src=visitors>
                      <div>
                        <header>
                          <span class="author">ookamiAntD</span>
                          <span class="date">2018年12月18日</span>
                        </header>
                        <p on-click="{goComment}" class="comment">博主大大早上好，我是您友链中的 ookamiAntD’s Blog，那个我的博客域名已更换成 yangbingdong.com 了，旧的域名不知道到为啥会被用来小黄网了。。。。。。</p>
                      </div>
                    </li>
                </ul>
            </div>

            <div class="profile-block social-links">
                <table>
                    <tbody><tr>

                        <td>
                            <a href="http://github.com/giraffe0813" target="_blank" title="github" class="tooltip">

                                <div class="tooltip"><i class="fab fa-github"></i>
                                    <span class="tooltiptext">github</span>
                                </div>
                            </a>
                        </td>

                        <td>
                            <a href="https://yemengying.com/atom.xml" target="_blank" title="rss" class="tooltip">
                                <div class="tooltip"><i class="fa fa-rss"></i>
                                    <span class="tooltiptext">rss</span>
                                </div>
                            </a>
                        </td>

                    </tr>
                </tbody></table>
            </div>

        </div>
    </aside>
  </div>
</template>

<script>
import avatar from '@/assets/15684156.jpg'
import visitors from '@/assets/avatar92.jpg'
export default {
  name: 'Sidebar',
  data () {
    return {
      avatar,
      visitors
    }
  },
  methods: {
    name () {

    }
  }
}
</script>

<style scoped>
@import './header/header.css';
[jinkela-class="3"] {
    overflow: auto;
    margin-bottom: 10px;
    font-size: 13px;
}
.rounded-2 {
    border-radius: 6px!important;
}
.icon-map{
  color:#333;
  width:10px;height:10px;
  margin:30px auto;
  border:solid 2px currentColor;
  border-radius:16px 16px 16px 0;
  -webkit-transform:rotate(-45deg);
  -moz-transform: ratate(-45deg);
  transform:rotate(-45deg);
}
.icon-map:after{
  content: "";
  width: 2px;
  height: 2px;
  border:2px solid currentcolor;
  position: absolute;
  top:2px;
  left:2px;
  border-radius: 100%;
}
#location svg{
  margin-right: 5px;
}
#title{
  color: #666;
}
[jinkela-class="3"] > .avatar {
    float: left;
    width: 42px;
    height: 42px;
    margin-right: 15px;
    flex-shrink: 0;
    border-radius: 4px;
}
[jinkela-class="3"] > div {
    float: left;
    width: 70%;
}
[jinkela-class="3"] .author {
    color: #EE6172;
}
[jinkela-class="3"] .comment {
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-top: 5px;
    cursor: pointer;
}
.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 60px;
  background-color: #363434;
  color: #fff;
  height: 20px;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 110%;
  left: 151%;
  margin-left: -49px;
  font-family: -webkit-body;
  font-size: medium;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: black transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
