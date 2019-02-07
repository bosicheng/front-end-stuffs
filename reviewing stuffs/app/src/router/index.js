import Vue from 'vue'
import Router from 'vue-router'
import MovieList from '@/components/movie/MovieList'
import MusicList from '@/components/music/MusicList'
import Book from '@/components/book/Book'
import PhotoList from '@/components/photo/PhotoList'
import movieDetail from '@/components/movie/MovieDetail'
import musicDetail from '@/components/music/MusicDetail'
import PhotoDetail from '@/components/photo/PhotoDetail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      // 重定向：访问斜线时定位到redirect的位置 
      path:"/",
      redirect:'/movie/MovieList'
    },
    {
      path:'/movie/MovieList',
      component:MovieList
    },
    {
      path:'/music/MusicList',
      component:MusicList
    },
    {
      path:'/book/Book',
      component:Book
    },
    {
      path:'/photo/PhotoList',
      component:PhotoList
    },
    {
      // 这里有冒号的意思是由于点击详情页传模板字符串url改变所以这边加冒号后加传递的参数传到detail中,调用的时候用(this.)$params.xx
      path:'/movie/movieDetail/:movieId',
      component:movieDetail
    },
    {
      path:'/music/musicDetail/:musicId',
      component:musicDetail
    },{
      path:'/photo/PhotoDetail/:photoId',
      component:PhotoDetail
    }
  ]
})
