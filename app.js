const app = Vue.createApp({
    data() {
        return {
            title: 'the final empire',
            author: 'Brandon Sanderson',
            age: 45
        }
    },
    methods: {
        changeTitle(title) {
           this.title = 'words of randiance'
        this.title = title
        }
    }
})

app.mount('#app')