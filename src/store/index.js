import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)
/* eslint-disable */
export default new vuex.Store({
    state:{
      show: false,
      // 顾客选中了的菜品
      selectedDishes: [{
            dish_name: '清蒸双鸭',
            dish_icon_url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528382905544&di=d9bb3c60fdee88362c6b3a49d29b6829&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dpixel_huitu%252C0%252C0%252C294%252C40%2Fsign%3Df620a32db399a9012f38537674ed6f17%2F472309f7905298229b1e46fadcca7bcb0a46d4de.jpg',
            dish_copy: 'x5',
            dish_price: 18.00
          }],
      dishes: [
      {
        category: '热销',
        dishes_num: 3,
        dishes_list: [
          {
            dish_name: '清蒸双鸭',
            dish_pict: require('../../assets/img/header.jpeg'),
            dish_sale: 666,
            dish_price: 18,
            dish_discription: '清蒸鸭子是一道传统名菜，清蒸鸭子的肉香味美，肉质软烂，味道鲜美。鸭子剖膛去内脏、足、舌、鸭臊、及翅尖的一段，用水洗净，控去水分。然后，在烧开的汤内把鸭子煮一下，将血水去掉，捞出后用水冲洗，并尽量把水分控干。用盐在鸭身上揉搓一遍，脊背朝上盛入坛子内腌一会，并放上料酒、葱、姜、胡椒粉和清汤，再将坛子封严上屉,用旺火开水蒸2 3小时,取出,揭去封闭汤子的盖,将乳油撇去,加入味精并调好咸淡即成。'
          },
          {
            dish_name: '红烧双鸭',
            dish_pict: require('../../assets/img/header.jpeg'),
            dish_sale: 667,
            dish_price: 19
          },
          {
            dish_name: '双鸭肺片',
            dish_pict: require('../../assets/img/header.jpeg'),
            dish_sale: 636,
            dish_price: 15,
            dish_discription: '清蒸鸭子是一道传统名菜，清蒸鸭子的肉香味美，肉质软烂，味道鲜美。鸭子剖膛去内脏、足、舌、鸭臊、及翅尖的一段，用水洗净，控去水分。然后，在烧开的汤内把鸭子煮一下，将血水去掉，捞出后用水冲洗，并尽量把水分控干。用盐在鸭身上揉搓一遍，脊背朝上盛入坛子内腌一会，并放上料酒、葱、姜、胡椒粉和清汤，再将坛子封严上屉,用旺火开水蒸2 3小时,取出,揭去封闭汤子的盖,将乳油撇去,加入味精并调好咸淡即成。'
          }
        ]
      },
      {
        category: '双鸭类',
        dishes_num: 3,
        dishes_list: [
          {
            dish_name: '清蒸双鸭a',
            dish_pict: require('../../assets/img/header.jpeg'),
            dish_sale: 666,
            dish_price: 12,
            dish_discription: '清蒸鸭子是一道传统名菜，清蒸鸭子的肉香味美，肉质软烂，味道鲜美。鸭子剖膛去内脏、足、舌、鸭臊、及翅尖的一段，用水洗净，控去水分。然后，在烧开的汤内把鸭子煮一下，将血水去掉，捞出后用水冲洗，并尽量把水分控干。用盐在鸭身上揉搓一遍，脊背朝上盛入坛子内腌一会，并放上料酒、葱、姜、胡椒粉和清汤，再将坛子封严上屉,用旺火开水蒸2 3小时,取出,揭去封闭汤子的盖,将乳油撇去,加入味精并调好咸淡即成。'
          },
          {
            dish_name: '红烧双鸭a',
            dish_pict: require('../../assets/img/header.jpeg'),
            dish_sale: 666,
            dish_price: 13,
            dish_discription: '清蒸鸭子是一道传统名菜，清蒸鸭子的肉香味美，肉质软烂，味道鲜美。鸭子剖膛去内脏、足、舌、鸭臊、及翅尖的一段，用水洗净，控去水分。然后，在烧开的汤内把鸭子煮一下，将血水去掉，捞出后用水冲洗，并尽量把水分控干。用盐在鸭身上揉搓一遍，脊背朝上盛入坛子内腌一会，并放上料酒、葱、姜、胡椒粉和清汤，再将坛子封严上屉,用旺火开水蒸2 3小时,取出,揭去封闭汤子的盖,将乳油撇去,加入味精并调好咸淡即成。'
          },
          {
            dish_name: '双鸭肺片a',
            dish_pict: require('../../assets/img/header.jpeg'),
            dish_sale: 666,
            dish_price: 14,
            dish_discription: '清蒸鸭子是一道传统名菜，清蒸鸭子的肉香味美，肉质软烂，味道鲜美。鸭子剖膛去内脏、足、舌、鸭臊、及翅尖的一段，用水洗净，控去水分。然后，在烧开的汤内把鸭子煮一下，将血水去掉，捞出后用水冲洗，并尽量把水分控干。用盐在鸭身上揉搓一遍，脊背朝上盛入坛子内腌一会，并放上料酒、葱、姜、胡椒粉和清汤，再将坛子封严上屉,用旺火开水蒸2 3小时,取出,揭去封闭汤子的盖,将乳油撇去,加入味精并调好咸淡即成。'
          }
        ]
      },
      {
        category: '饮料类',
        dishes_num: 2,
        dishes_list: [
          {
            dish_name: '冰阔落',
            dish_pict: require('../../assets/img/header.jpeg'),
            dish_sale: 666,
            dish_price: 12,
            dish_discription: '清蒸鸭子是一道传统名菜，清蒸鸭子的肉香味美，肉质软烂，味道鲜美。鸭子剖膛去内脏、足、舌、鸭臊、及翅尖的一段，用水洗净，控去水分。然后，在烧开的汤内把鸭子煮一下，将血水去掉，捞出后用水冲洗，并尽量把水分控干。用盐在鸭身上揉搓一遍，脊背朝上盛入坛子内腌一会，并放上料酒、葱、姜、胡椒粉和清汤，再将坛子封严上屉,用旺火开水蒸2 3小时,取出,揭去封闭汤子的盖,将乳油撇去,加入味精并调好咸淡即成。'
          },
          {
            dish_name: '冰写碧',
            dish_pict: require('../../assets/img/header.jpeg'),
            dish_sale: 666,
            dish_price: 13,
            dish_discription: '清蒸鸭子是一道传统名菜，清蒸鸭子的肉香味美，肉质软烂，味道鲜美。鸭子剖膛去内脏、足、舌、鸭臊、及翅尖的一段，用水洗净，控去水分。然后，在烧开的汤内把鸭子煮一下，将血水去掉，捞出后用水冲洗，并尽量把水分控干。用盐在鸭身上揉搓一遍，脊背朝上盛入坛子内腌一会，并放上料酒、葱、姜、胡椒粉和清汤，再将坛子封严上屉,用旺火开水蒸2 3小时,取出,揭去封闭汤子的盖,将乳油撇去,加入味精并调好咸淡即成。'
          }
        ]
      }
    ]
    }
})
