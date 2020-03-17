//We make one solution that works. It based on cloning store object to local one.

  //We are passing (vuexstore) 'item' object from parent component:
  //<common-item v-bind:item="item" ....
  props: ['item'],

  // create localItem - this is reactive object for vuex form
  data: () => {
    return {
      localItem: null
    }
  },

  // make clone on created event
  created: function() {
    this.localItem =  this._clone(this.item)
  },

  // watch vuexstore 'item' for changes
  watch: {
    item: function(val) {
      this.localItem = this._clone(this.item)
    }
  },

  // map mutations and update store on event
  methods: {
     ...mapMutations([
      'editItem'
    ]),
    updateItemHandler: function() {
      this.editItem({ item: this._clone(this.localItem) })
    },
    _clone: function(o){
      return JSON.parse(JSON.stringify(o))
    }
  },
//Inside form use:

 <input v-model="localItem.text" @keyup="updateItemHandler" type="text" class="form-c
