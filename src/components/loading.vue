<template>
    <Modal v-show="show">
        <div style="font-size:1.5em; color:#fff">
            加载中...
        </div>
    </Modal>
</template>

<script>
import Modal from "./model"

export default {
    props:{
        show:{
            type:Boolean,
            default:false
        }
    },
    components:{
        Modal
    }
}
</script>