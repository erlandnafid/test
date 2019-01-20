<template>
    <div class="container-fluid tp">
        <div class="row tp-bg">
            <div class="col-sm-4 offset-sm-4 text-center mt-3 mb-3">
                <h2>Nation Information Finder</h2>
                <p>Type the nation's name and you will get informations about it</p>
                <div class="input-group">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Search nation..."
                        v-model="keyword"
                        >
                    <div class="input-group-append">
                        <span class="input-group-text btn-search" id="basic-addon2" @click="findCountry(keyword)">Search</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Axios from "axios";

export default {
  data: function() {
    return {
      keyword: "",
      nation: []
    };
  },
  methods: {
    findCountry(keyword) {
      if (this.keyword.length < 4) {
        return alert('You have to enter the keyword min 4 character')
      }

      Axios.get(
        'https://restcountries.eu/rest/v2/name/' + this.keyword)
        .then(res => {
          res.data.forEach(element => {
            this.nation.unshift(element);
            this.nation.splice(1,1);
          });
        })
        .catch(error => alert('Opps could not found the nation'));
        
      this.$emit('getNation', this.nation);
    }
  }
};
</script>
