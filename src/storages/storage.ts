import { getProducts } from "@/api/products";
import { ref } from "vue";

interface Good {
    id: number;
    name: string;
    picture_url?: string;
    price: number;
    quantity: number;
}

abstract class AbstractCardStorage {
    goods = ref<Good[]>([]);
    isActive = ref<boolean>(false);
    constructor() {
        if (localStorage.getItem('goods') != null) {
            this.goods.value = JSON.parse(localStorage.getItem('goods')!);
        }   
    }
    abstract addGood(good: Good): any;
    abstract increaseGood(id: number): any;
    abstract decreaseGood(id: number): any;
    abstract removeGood(id: number): any; 
    abstract get totalCost(): number;
    abstract save(): any;
}

class LocalCardStorage extends AbstractCardStorage {
    constructor() {
        super();
    }
    get totalCost() {
        let total = 0;
        this.goods.value.forEach((item)=>{
            total += item.price * item.quantity;
        });
        return total;
    }
    addGood(good: Good) {
        const exists = this.goods.value.filter(item=>item.id == good.id);
        if (exists.length == 0) {
            this.goods.value.push(good);
        }
        else {
            exists[0].quantity += 1;
        }
        this.save();
    }
    increaseGood(id: number) {
        const exists = this.goods.value.filter(item=>item.id == id);
        if (exists.length) {
            exists[0].quantity += 1;
            this.save();
        }
    }
    decreaseGood(id: number) {
        const exists = this.goods.value.filter(item=>item.id == id);
        if (exists.length) {
            if (exists[0].quantity <= 1) {
                this.removeGood(id);
                return;
            }
            exists[0].quantity -= 1;
            this.save();
            return;
        }
    }
    removeGood(id: number) {
        const exists = this.goods.value.findIndex(item=>item.id == id);
        if (exists != -1) {
            this.goods.value.splice(exists, 1);
            this.save();
        }
    }
    save() {
        localStorage.setItem('goods', JSON.stringify(this.goods.value));
    }
}


interface Category {
    id: number;
    name: string;
}



class NetworkCatalogStorage {
    categories = ref<Category[]>([
      { id: 1, name: 'Автозапчасти' },
      { id: 2, name: 'Запчасти на коммерческие' },
      { id: 3, name: 'Мотозапчасти' },
      { id: 4, name: 'Шины' },
      { id: 5, name: 'Диски' },
      { id: 6, name: 'Аксессуары и мультимедиа' },
      { id: 7, name: 'Масла и автохимия' },
      { id: 8, name: 'Авто на разбор' },
      { id: 9, name: 'Магазины шин и дисков' },
      { id: 10, name: 'Магазины запчастей и авторазборы' }
    ]);
    products = ref([]);
    categoryLoadError: boolean = false;
    selectedValues = ref({
      color: [],
      size: [],
      category: [],
    });

    updateSelectedValues(key: string, value:any) {
      // @ts-ignore
      const index = this.selectedValues.value[key].findIndex(item=>item==value);
      if (index != -1) {
        // @ts-ignore
        this.selectedValues.value[key].splice(index, 1);
        return;
      }
      // @ts-ignore
      this.selectedValues.value[key].push(value);

    }

    get filters() {
        return  [
            {
              id: 'color',
              name: 'Цена',
              type: 'range',
              range: {
                labelFrom: 'От',
                labelTo: 'До'
              }
            },
            {
              id: 'category',
              name: 'Категория',
              options: this.categories.value.map((item)=>{
                return {
                    value: item.id,
                    label: item.name,
                    checked: this.selectedValues.value.category.filter(id=>id == item.id).length > 0 ? true : false 
                }
              })
            },
            {
              id: 'size',
              name: 'Размер',
              options: [
                { value: '2l', label: '2L', checked: false },
                { value: '6l', label: '6L', checked: false },
                { value: '12l', label: '12L', checked: false },
                { value: '18l', label: '18L', checked: false },
                { value: '20l', label: '20L', checked: false },
                { value: '40l', label: '40L', checked: false },
              ],
            },
          ]
    }
    async loadProducts() {
      const res = await getProducts();
      this.products.value = res.data.results;
    }
    async loadCategories() {
        await fetch('');
    }

}


export const CatalogStorage = (function() {
    let instance: NetworkCatalogStorage;
    function createInstance() {
        return new NetworkCatalogStorage();
    }
    return {
        getInstance: function () {
          if (!instance) {
            instance = createInstance();
          }
          return instance;
        },
      };
})();


export const CardStorage = (function () {
    let instance: LocalCardStorage;
    function createInstance() {
      return new LocalCardStorage();
    }
    return {
      getInstance: function () {
        if (!instance) {
          instance = createInstance();
        }
        return instance;
      },
    };
  })();