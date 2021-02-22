import {defineComponent, KeepAlive, Transition, VNode, onActivated, onMounted, createVNode} from 'vue'
import {RouterView, useRouter,} from 'vue-router'
import {Button} from 'ant-design-vue'
import Home from './views/Home.vue'


export default defineComponent(() => {
    const handle = (Component: VNode) => {
        console.log(createVNode(KeepAlive, null, [Component]))
        return createVNode(KeepAlive, null, [Component])
    }   //因为 vitejs/plugin-vue-jsx 1.0.2 版本bug问题 所以暂时这样写
    const router = useRouter()
    return () => (<div>
        {/*
            RouterView路由
            Transition动画
            KeepAlive缓存
        */}

        <Button onClick={() => router.push('/home')}>Home</Button>
        <Button onClick={() => router.push('/login')}>Login</Button>
        <Home/>
        <RouterView v-slots={{
            default: ({Component}: { Component: VNode }) => (
                <Transition name={'fade'} mode={'out-in'}>
                    <KeepAlive>{Component}</KeepAlive>
                </Transition>
            )
        }}/>
    </div>)
})
