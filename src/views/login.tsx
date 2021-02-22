import {defineComponent, ref, onActivated} from 'vue'


export default defineComponent(() => {
    onActivated(() => {
        console.log('login')
    })
    return () => (<div>
        login
    </div>)
})
