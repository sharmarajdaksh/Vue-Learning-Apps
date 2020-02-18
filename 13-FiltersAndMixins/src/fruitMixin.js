export const fruitMixin = {
    data() {
        return {
            fruits: ["Apple", "Banana", "Mango", "Melon"],
            filterText: ""
        };
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter(element =>
                element.toLowerCase().match(this.filterText.toLowerCase())
            );
        }
    }
};
// Essentially a shared 'service'-like thing

// HOWEVER, the data is NOT SHARED between all components. Instead, each component gets a COPY