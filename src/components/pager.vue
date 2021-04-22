<template>
<div id="pager" class="pager">
    <a class="pager-item" :class="{disabled:current===1} " @click.prevent="changeNumber(1)" >首页</a> 
    <a class="pager-item" :class="{disabled:current===1}" @click.prevent="changeNumber(current - 1)" >上一页</a> 
    <a  class="pager-item" :class="{active:item===current }" @click.prevent="changeNumber(item)" v-for="item in numbers" :key="item">
        {{item}}
    </a>
    <a class="pager-item" :class="{disabled:current===pageNumber}" @click.prevent="changeNumber(current + 1)" >下一页</a> 
    <a class="pager-item" :class="{disabled:current===pageNumber}" @click.prevent="changeNumber(pageNumber)" >尾页</a> 
    <span class="pager-text">
        <i>{{ current }}</i> / <i>{{ pageNumber }}</i>
    </span>
</div>
</template>

<script>
export default {
    props:{
        current:{
            type:Number,
            require:true,
            default:1
        },
        pageSize:{
            type:Number,
            require:true,
            default:5
        },
        total:{
            type:Number,
            require:true,
        }
    },
    computed:{
        pageNumber(){
            return Math.ceil(this.total / this.pageSize)
        },
        numbers(){
            let min=this.current-Math.floor(this.pageSize/2);
            if(min<1){
                min=1
            }
            let max=min+this.pageSize-1;
            if(max>this.pageNumber){
                max=this.pageNumber
            }
            const arr=[];
            for(let i=min;i<=max;i++){
                arr.push(i)
            }
            return arr
        }
    },
    methods:{
        changeNumber(newPage){
            if(newPage<1){
                newPage=1;
            }
            if(newPage>this.pageNumber){
                newPage=this.pageNumber;
            }
            // this.current=newPage;
            this.$emit('change',newPage)
        },
    
    }
}
</script>

