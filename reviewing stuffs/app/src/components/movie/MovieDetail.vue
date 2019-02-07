<template>
    <div class='movie'>
        <!-- 只有这里接收参数时是route不是router -->
        <!-- 如果直接在这里显示参数用{{$route.params.id}}，但是下面函数调用要加this -->
        <div class='movie-box'>
            <div class='movie-img'>
                <img :src="movieDetail.img" alt="">
            </div>
            <div class='movie-info'>
                <h3>{{movieDetail.nm}}</h3>
                <p>{{movieDetail.sc}}</p>
                <p>{{movieDetail.cat}}</p>
                <p>{{movieDetail.src}}</p>
                <p>{{movieDetail.rt}}</p>
            </div>
        </div>
        <div class='movie-star'>
            <h2>主演</h2>
            <p>{{movieDetail.star}}</p>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        // 返回了数据以后在页面中显示必须要过data+return
        data(){
            return{
                movieDetail:{

                }
            }
        },
        created(){
            // 数据放在static下，static下都写绝对路径,./代表app文件夹
            // es6拼接参数：?参数=内容
            // axios可以传多个参数，网上有
            axios.get('./static/data/moviedetail.json?movieId=${this.$route.params.movieId}').then(res => {
                this.movieDetail=res.data.data.MovieDetailModel
            }).catch(res => {

            })
        }
    }
</script>

<style scoped>
    .movie{
        padding: 0.2rem;
    }
    .movie-box{
        display: flex;
    }
    .movie-img{
        flex-grow: 1;
        width: 0;
        margin-right: 0.1rem;
    }
    .movie-img img{
        width: 100%;
    }
    .movie-info{
        flex-grow: 1;
        width: 0;
    }
    .movie-star{
        text-align: center;
    }
</style>