new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            showAlert: function(){
                alert('Alert!');
            },
            setValue: function(event){
                this.value = event.target.value;
            }
        }
    });