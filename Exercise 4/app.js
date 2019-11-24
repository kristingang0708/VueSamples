new Vue({
  el: '#exercise',
  data: {
    attachHighlight: false,
    green: 'green',
    floatRight: 'float-right',
    color: '',
    isFloatRight: true,
    newColor: '',
    progressBarWidth: 10
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function(){
        vm.attachHighlight = !vm.attachHighlight;
      },2000);
    },
    startProgress: function(){
      var vm = this;
      setInterval(function(){
        vm.progressBarWidth += 10;
      },1000);
    }
  },
  computed:{
    divClasses: function(){
      return {highlight: !this.attachHighlight, shrink: this.attachHighlight};
    },
    shouldFloatRight: function(){
      return this.isFloatRight ? 'floatRight' : '';
    },
    progressBar: function(){
      return {
        width: this.progressBarWidth + 'px',
        backgroundColor: 'green',
        height: "10px"
      };
    }
  }
});
