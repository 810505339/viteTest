import Http from "./http";


export function bannerApi(type: number) {
    return Http.get(`/banner?type=${type}`)
}

