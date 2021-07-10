<template lang="pug">
    el-main.system-box
        el-row(:gutter="20")
            el-col(:span="6", class="col-item", v-for="(item, index) in dataSource", :key="index")
                el-card(shadow="hover", :body-style="{ padding: '0px' }")
                    a(:href="item.url" target="_blank")
                        img(:src="item.img", class="image")
                        div(style="padding: 14px;")
                            span.title {{item.title}}
                            div(class="bottom clearfix")
                                span.mark {{item.mark}}
            el-col(:span="6", class="col-item")
                el-card(shadow="hover", class="extra-card")
                    i(class="el-icon-plus")
</template>

<script>
export default {
    name: 'system',
    data() {
        return {
            dataSource: [{
                title: 'AntV',
                mark: '全新一代数据可视化解决方案',
                img: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*ZhzDQLMyYlYAAAAAAAAAAABkARQnAQ',
                url: 'https://www.baidu.com'
            }, {
                title: '海兔',
                mark: '全新一代图形化解决方案',
                img: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*PrLWSpmWZmIAAAAAAAAAAABkARQnAQ',
                url: 'https://www.baidu.com'
            }, {
                title: '系统名称',
                mark: '描述信息',
                img: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*T_HeSIJ30IIAAAAAAAAAAABkARQnAQ',
                url: 'https://www.baidu.com'
            }, {
                title: '系统名称',
                mark: '描述信息',
                img: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*T_HeSIJ30IIAAAAAAAAAAABkARQnAQ',
                url: 'https://www.baidu.com'
            }, {
                title: '系统名称',
                mark: '描述信息',
                img: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*T_HeSIJ30IIAAAAAAAAAAABkARQnAQ',
                url: 'https://www.baidu.com'
            }, {
                title: '系统名称',
                mark: '描述信息',
                img: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*T_HeSIJ30IIAAAAAAAAAAABkARQnAQ',
                url: 'https://www.baidu.com'
            }, {
                title: '系统名称',
                mark: '描述信息',
                img: 'https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*T_HeSIJ30IIAAAAAAAAAAABkARQnAQ',
                url: 'https://www.baidu.com'
            }]
        }
    }
}
</script>

<style lang="less">
.system-box {
    padding: 20px !important;
    a {
        text-decoration: none;
    }
    .col-item {
        margin-bottom: 20px;
        .el-card {
            height: 268px;
            cursor: pointer;
        }
    }
    .extra-card {
        background-color: #f0f0f0;
        font-size: 60px;
        // text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #d48806
    }
    .image {
        width: 100%;
        height: 200px;
        display: block;
    }
    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    
    .clearfix:after {
        clear: both
    }
    span.title {
        font-size: 20px;
        color: #0d1a26;
        text-align: left;
        font-weight: bold;
    }
    span.mark {
        color: #697b8c;
        font-size: 16px;
    }
}
</style>