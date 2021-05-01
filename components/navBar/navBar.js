// components/navBar.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        name: {
            type: String,
            value: ''
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        statusBarHeight: wx.getSystemInfoSync().statusBarHeight
    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})