import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)
/* eslint-disable */
export default new vuex.Store({
    state:{
      storeName: '双鸭山',
      totalPrice: 0,
      show: false,
      isShowShoppingCart: false,
      inputKeyword: '',
      isSearching: false,
      hasSearchResult: false,
      searchResultDishes: [
        {
          category: '搜索结果',
          dishes_num: 0,
          dishes_list: []
        }
      ],
      shopDetail: {
        shopImg: require('../../assets/img/logo.jpg'),
        shopName: '双鸭美食(大学城店)',
        shopIntroContent: '双鸭美食位于双鸭山大学数据科学与计算机学院楼旁边，特色菜有清蒸双鸭、红烧双鸭、双鸭肺片、双鸭烧烤等。',
        hotDishes: ['双鸭三宝'],
        // 赞数
        hots: 99
      },
      dishDetail: {
        dish_name: '清蒸双鸭',
        dish_pict: require('../../assets/img/qing_zheng_shuang_ya.jpg'),
        dish_sale: 666,
        dish_price: 18,
        dish_discription: '清蒸鸭子是一道传统名菜，清蒸鸭子的肉香味美，肉质软烂，味道鲜美。鸭子剖膛去内脏、足、舌、鸭臊、及翅尖的一段，用水洗净，控去水分。然后，在烧开的汤内把鸭子煮一下，将血水去掉，捞出后用水冲洗，并尽量把水分控干。'
      },
      // 顾客选中了的菜品
      thingsNum: 0,
      selectedDishes: [],
      dishes: [
      {
        category: '热销',
        dishes_num: 3,
        dishes_list: [
          {
            dish_name: '清蒸双鸭',
            dish_pict: require('../../assets/img/qing_zheng_shuang_ya.jpg'),
            dish_sale: 666,
            dish_price: 18,
            dish_discription: '清蒸鸭子是一道传统名菜，清蒸鸭子的肉香味美，肉质软烂，味道鲜美。鸭子剖膛去内脏、足、舌、鸭臊、及翅尖的一段，用水洗净，控去水分。然后用盐在鸭身上揉搓一遍，脊背朝上盛入坛子内腌一会。'
          },
          {
            dish_name: '红烧双鸭',
            dish_pict: require('../../assets/img/hong_shao_shuang_ya.jpg'),
            dish_sale: 667,
            dish_price: 19,
            dish_discription: '红烧鸭块是一道由鸭子、冰糖、八角、桂皮等食材制成的美食。鸭肉中的脂肪酸熔点低，易于消化。所含B族维生素和维生素E较其他肉类多，能有效抵抗脚气病，神经炎和多种炎症，还能抗衰老。'
          },
          {
            dish_name: '双鸭肺片',
            dish_pict: require('../../assets/img/shuang_ya_fei_pian.jpg'),
            dish_sale: 636,
            dish_price: 15,
            dish_discription: '双鸭肺片是一道四川成都名菜，由郭朝华、张田政夫妻创制而成。通常以牛头皮、牛心、牛舌、牛肚、牛肉为主料，进行卤制，而后切片。再配以辣椒油、花椒面等辅料制成红油浇在上面。其制作精细，色泽美观，质嫩味鲜，麻辣浓香，非常适口。'
          }
        ]
      },
      {
        category: '烧烤类',
        dishes_num: 3,
        dishes_list: [
          {
            dish_name: '烤鸭腿',
            dish_pict: require('../../assets/img/kao_ya_tui.jpg'),
            dish_sale: 666,
            dish_price: 12,
            dish_discription: '烤鸭腿是餐桌上的一道美味，制作原料主要有棒棒腿、柠檬、酱油、酒等，因其肉质鲜嫩，酱香味道而深受欢迎。营养丰富，有滋补养身的作用。鸭肉对营养不良、畏寒怕冷、乏力疲劳、月经不调、贫血、虚弱等有很好的食疗作用。'
          },
          {
            dish_name: '烤鸭翅',
            dish_pict: require('../../assets/img/kao_ya_chi.jpg'),
            dish_sale: 666,
            dish_price: 13,
            dish_discription: '烤鸭翅是一道菜品，制作原料主要有鸭翅、葱、姜等。将鸭翅摆放好，待烤箱预热后，放入鸭翅以200度的温度烤7分钟后取出，均匀的抹上蜂蜜，再放入烤5分钟，取出再刷一层蜂蜜入烤箱烤2分钟即成。'
          },
          {
            dish_name: '烤鸭脖',
            dish_pict: require('../../assets/img/kao_ya_bo.jpg'),
            dish_sale: 666,
            dish_price: 14,
            dish_discription: '鸭脖子属于酱汁类食品，酱汁类食品通过多种香料浸泡，然后经过风干、烤制等工序精致而成，成品色泽深红，具有香、辣、甘、麻、咸、 酥、绵等特点，是一道开胃、佐酒佳肴。'
          }
        ]
      },
      {
        category: '饮料类',
        dishes_num: 2,
        dishes_list: [
          {
            dish_name: '冰可乐',
            dish_pict: require('../../assets/img/bing_ke_le.jpg'),
            dish_sale: 606,
            dish_price: 3,
            dish_discription: '可乐加冰，肥宅快乐水。'
          },
          {
            dish_name: '冰雪碧',
            dish_pict: require('../../assets/img/bing_xue_bi.jpg'),
            dish_sale: 556,
            dish_price: 3,
            dish_discription: '雪碧，冰的，肥宅快乐水。'
          }
        ]
      }
    ]
  },
  mutations: {
    updateKeyword (state, message) {
      state.inputKeyword = message
      state.isSearching = (message === '') ? false : true
    }
  }
})
