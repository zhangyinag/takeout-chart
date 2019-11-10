function generateDataFn() {
    const name = [
        '书亦', '乐派', '麦奇', '李记', '逅头', '凡仔'
    ]

    const max = 30

    const allDate = generateDate()
    const date = allDate.slice(allDate.length - max)

    const allData = [
        [3835, 3928, 3990, 4067, 4148, 4196, 4221, 4284, 4335, 4402, 4465, 4510, 4555, 4609, 4668, 4709, 4741, 4780, 4830, 4879, 4919, 4971, 5024, 5080, 5137, 5175, 5216, 5250, 5283, 5309, 5345, 5388, 5443, 5474, 5544, 5599, 5645, 5721, 5792, 5868, 5912, 5949, 5982, 6012, 6060, 6087, 6159, 6222, 6274, 6339, 6382, 6436, 6460, 6516, 6580, 6641, 6661, 6724, 6780, 6850, 6925, 7006, 7050, 7088, 7135, 7182, 7253, 7312, 7399, 7442, 7506, 7550, 7594, 7623, 7688, 7720], // 书亦 33
        [3593, 3649, 3685, 3735, 3760, 3796, 3831, 3866, 3866, 3866, 3866, 3866, 3866, 3866, 3866, 3866, 3915, 3963, 3988, 4029, 4049, 4072, 4086, 4123, 4128, 4186, 4242, 4275, 4325, 4359, 4383, 4442, 4495, 4521, 4578, 4607, 4618, 4633, 4670, 4694, 4742, 4769, 4802, 4822, 4843, 4894, 4916, 4949, 4971, 4995, 5023, 5037, 5089, 5153, 5192, 5219, 5267, 5325, 5362, 5429, 5489, 5540, 5573, 5596, 5625, 5682, 5697, 5768, 5799, 5810, 5843, 5875, 5885, 5896, 5936, 6006], // 乐派 31
        [2958, 3031, 3135, 3229, 3305, 3390, 3410, 3440, 3458, 3502, 3563, 3710, 3802, 3930, 3984, 4012, 4077, 4120, 4173, 4252, 4271, 4296, 4309, 4350, 4394, 4446, 4506, 4552, 4611, 4640, 4674, 4701, 4771, 4831, 4848, 4878, 4928, 4971, 5006, 5032, 5076, 5126, 5149, 5221, 5238, 5295, 5343, 5400, 5415, 5430, 5452, 5519, 5541, 5611, 5687, 5713, 5747, 5767, 5788, 5818, 5870, 5979, 6011, 6055, 6066, 6121, 6146, 6184, 6231, 6257, 6280, 6329, 6389, 6413, 6461, 6550], // 麦奇 23
        [2442, 2448, 2461, 2461, 2461, 2461, 2461, 2475, 2489, 2502, 2528, 2560, 2578, 2578, 2597, 2610, 2617, 2632, 2657, 2683, 2695, 2717, 2734, 2750, 2776, 2791, 2810, 2844, 2857, 2871, 2895, 2903, 2930, 2953, 2961, 2982, 3005, 3021, 3044, 3069, 3105, 3117, 3133, 3158, 3181, 3239, 3277, 3318, 3337, 3346, 3375, 3413, 3440, 3498, 3551, 3561, 3585, 3602, 3626, 3650, 3676, 3716, 3723, 3749, 3753, 3770, 3778, 3804, 3849, 3860, 3860, 3869, 3884, 3893, 3923, 3954], // 李记 16
        [2137, 2176, 2199, 2226, 2259, 2284, 2299, 2307, 2315, 2339, 2349, 2365, 2389, 2404, 2420, 2434, 2450, 2455, 2489, 2508, 2516, 2535, 2565, 2573, 2584, 2620, 2638, 2654, 2660, 2677, 2680, 2697, 2718, 2726, 2740, 2750, 2757, 2774, 2794, 2801, 2812, 2841, 2854, 2862, 2864, 2871, 2885, 2900, 2918, 2938, 2952, 2984, 3002, 3014, 3036, 3051, 3074, 3094, 3100, 3113, 3129, 3146, 3159, 3169, 3191, 3225, 3227, 3249, 3252, 3262, 3274, 3287, 3302, 3313, 3325, 3341], // 逅头 13
        // [1748, 1788, 1836, 1898, 1944, 1976, 1990, 2033, 2088, 2108, 2133, 2140, 2185, 2224, 2265, 2287, 2316, 2316, 2352, 2375, 2431, 2490, 2538, 2570, 2620, 2639, 2655, 2670, 2723, 2754, 2780, 2802, 2845, 2874, 2932, 2973, 3007, 3007, 3007, 3007, 3007, 3007, 3007], // 遇见 0
        [2014, 2014, 2014, 2014, 2014, 2014, 2014, 2014, 2014, 2014, 2014, 2014, 2014, 2014, 2014, 2014, 2014, 2014, 2014, 2014, 2014, 2014, 2014, 2014, 2014, 2014, 2014, 2014, 2014, 2014, 2014, 2014, 2014, 2045, 2066, 2074, 2115, 2137, 2185, 2193, 2209, 2226, 2255, 2267, 2292, 2314, 2341, 2396, 2419, 2444, 2464, 2478, 2495, 2540, 2559, 2579, 2580, 2580, 2598, 2611, 2664, 2708, 2728, 2746, 2765, 2782, 2825, 2850, 2886, 2907, 2920, 2942, 2973, 2988, 3033, 3046], // 凡仔 29
    ]

    const data = allData.map(v => v.slice(allDate.length - max))

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
