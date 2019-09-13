function generateDataFn() {
    const name = [
        '书', '乐', '麦奇', '李记', '逅头', '遇见'
    ]

    const max = 30

    const date = generateDate().slice(0, max)

    const data = [
        [3835, 3928, 3990, 4067, 4148, 4196, 4221, 4284, 4335, 4402, 4465, 4510, 4555, 4609, 4668, 4709, 4741, 4780], // 书
        [3593, 3649, 3685, 3735, 3760, 3796, 3831, 3866, 3866, 3866, 3866, 3866, 3866, 3866, 3866, 3866, 3915, 3963], // 乐
        [2958, 3031, 3135, 3229, 3305, 3390, 3410, 3440, 3458, 3502, 3563, 3710, 3802, 3930, 3984, 4012, 4077, 4120], // 麦奇
        [2442, 2448, 2461, 2461, 2461, 2461, 2461, 2475, 2489, 2502, 2528, 2560, 2578, 2578, 2597, 2610, 2617, 2632], // 李记
        [2137, 2176, 2199, 2226, 2259, 2284, 2299, 2307, 2315, 2339, 2349, 2365, 2389, 2404, 2420, 2434, 2450, 2455], // 逅头
        [1748, 1788, 1836, 1898, 1944, 1976, 1990, 2033, 2088, 2108, 2133, 2140, 2185, 2224, 2265, 2287, 2316, 2316], // 遇见
    ].map(v => v.slice(0, max))

    function generateDate () {
        let now = new Date()
        const start = new Date(2019, 7, 27)
        const end = new Date(now.getFullYear(), now.getMonth(), now.getDate())
        let cursor = start
        let ret = []
        while (cursor.getTime() <= end.getTime()) {
            ret.push(foramtDate(cursor))
            cursor.setDate(cursor.getDate() + 1)
        }
        return ret

        function foramtDate (date) {
            let m = ('0' + (date.getMonth() + 1)).substr(-2)
            let d = ('0' + date.getDate()).substr(-2)
            return m + '/' + d
        }
    }


    return function () {
        let ret = []
        date.forEach((v, i) => {
            name.forEach((w, j) => {
                ret.push({
                    date: v,
                    name: w,
                    value: data[j][i]
                })
            })
        })
        return ret
    }
}
