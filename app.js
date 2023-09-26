new Vue({
    el: '#app',
    data: {
        novoGasto: '',
        gastos: []
    },
    methods: {
        adicionarGasto() {
            if (this.novoGasto.trim() !== '') {
                this.gastos.push({ nome: this.novoGasto, pago: false });
                this.novoGasto = '';
            }
        },
        marcarGastoPago(index) {
            this.gastos[index].pago = !this.gastos[index].pago;
        }
    }
});
