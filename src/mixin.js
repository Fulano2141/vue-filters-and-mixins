export const mixinLen = {
    computed: {
        lenText() {
            return this.filterText + " (" + this.filterText.length + ") ";
        },
    },
};