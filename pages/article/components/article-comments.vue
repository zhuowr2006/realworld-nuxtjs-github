<template>
  <div class="article-comments">
            <form class="card comment-form">
          <div class="card-block">
            <textarea class="form-control" placeholder="Write a comment..." rows="3"></textarea>
          </div>
          <div class="card-footer">
            <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
            <button class="btn btn-sm btn-primary">
             Post Comment
            </button>
          </div>
        </form>
        
        <div class="card" 
        v-for="comment in comments" :key="comment.id">
          <div class="card-block">
            <p class="card-text">{{ comment.body }}</p>
          </div>
          <div class="card-footer">
            <nuxt-link class="comment-author"  :to="{
              name:'profile',
              params:{
                username:comment.author.username
              }
              }">
              <img :src="comment.author.image" class="comment-author-img" />
            </nuxt-link>
            &nbsp;
            <nuxt-link class="comment-author"  :to="{
              name:'profile',
              params:{
                username:comment.author.username
              }
              }">
              {{ comment.author.username }}
            </nuxt-link>
            <span class="date-posted">{{ comment.createAt | date('MMM DD, YYYY') }}</span>
          </div>
        </div>
  </div>
</template>

<script>
import { getComments } from '@/api/article'
export default {
  name: 'article-comments',
  components: {},
  data () {
    return {
      comments:[]
    }
  },
  props: {
    article:{
      type: Object,
      required:true
    }
  },
  computed: {},
  methods: {},
  watch: {},
  created () {},
  async mounted () {
    const { data } = await getComments(this.article.slug)
    this.comments = data.comments
  },
  destroyed () {}
}

</script>
<style lang='scss' scoped>
</style>
