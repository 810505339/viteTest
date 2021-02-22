import {defineComponent, onActivated, ref, reactive, onMounted, onBeforeMount} from 'vue'
import {bannerApi} from '../../api/home'
import {Swiper, SwiperSlide} from 'swiper/vue'
import 'swiper/swiper.min.css';

export default defineComponent(() => {

    // const {data} = await bannerApi(1)
    //  banner = data.banners
    // onActivated(() => {
    // })
    const banner = ref<any[]>([]);
    (async () => {
        const {data} = await bannerApi(1)
        banner.value = data.banners

    })()

    const handleClick = (slideData: any) => {
        console.log(slideData)
    }
    return () => {
        return (<div>
            11
            <Swiper v-slots={{
                default: (slideData: any) => (<SwiperSlide>
                    <button onClick={() => handleClick(slideData)}>点击</button>
                </SwiperSlide>)
            }}>

                {banner.value.map((item, index) => (<SwiperSlide key={index}>
                    <img src={item.pic}/>
                </SwiperSlide>))}
            </Swiper>
        </div>)
    }


})
