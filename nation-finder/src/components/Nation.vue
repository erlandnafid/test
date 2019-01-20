<template>
    <div>
        <div class="container mt-3" v-for="nation in showNation" :key="nation.alpha2Code">
            <h2 class="text-center">Below is the information about {{ nation.name }}</h2>
            <h2 v-if="showNation.length == 0">Sorry, information about {{ nation.name }} not found</h2>
            <br>
            <div class="row">
                <div class="col-sm-6">
                    <div class="card mb-4" style="height: 400px;">
                        <img class="card-img-top" :src="nation.flag" alt="Flag">
                    </div>
                </div>
                <br>
                <div class="col-sm-6">
                    <div class="card">
                        <iframe
                            :src="start + nation.latlng[0] + ',' + nation.latlng[1] + end"
                            width="100%"
                            height="400"
                            frameborder="0"
                            style="border:0"
                            ></iframe>
                    </div>
                </div>
            </div>
            <br>
            <table class="table table-striped table-bordered">
                <tbody>
                    <tr>
                        <td>Name:</td>
                        <td>{{ nation.name }}</td>
                    </tr>
                    <tr>
                        <td>Capital City:</td>
                        <td>{{ nation.capital }}</td>
                    </tr>
                    <tr>
                        <td>Region:</td>
                        <td>{{ nation.region }}</td>
                    </tr>
                    <tr>
                        <td>Subregion:</td>
                        <td>{{ nation.subregion }}</td>
                    </tr>
                    <tr>
                        <td>Population:</td>
                        <td>{{ nation.population }}</td>
                    </tr>
                    <tr>
                        <td>Code:</td>
                        <td>{{ nation.alpha2Code }} or {{ nation.alpha3Code }}</td>
                    </tr>
                    <tr>
                        <td>Phone Code:</td>
                        <td>{{ nation.callingCodes[0] }}</td>
                    </tr>
                    <tr>
                        <td>Spellings:</td>
                        <td>{{ nation.altSpellings[0] }}, {{ nation.altSpellings[1] }}, {{ nation.altSpellings[2] }}</td>
                    </tr>
                    <tr>
                        <td>Timezones:</td>
                        <td>{{ nation.timezones[0] }}, {{ nation.timezones[1] }}, {{ nation.timezones[2] }}</td>
                    </tr>
                    <tr>
                        <td>Borders:</td>
                        <td>{{ nation.borders[0] }}, {{ nation.borders[1] }}, {{ nation.borders[2] }}</td>
                    </tr>
                    <tr v-for="c in nation.currencies" :key="c.code">
                        <td>Currencies:</td>
                        <td>
                            Code: {{ c.code }}
                            <br>
                            Name: {{ c.name }}
                            <br>
                            Symbol: {{ c.symbol }}
                        </td>
                    </tr>
                    <tr>
                        <td>Gini:</td>
                        <td>{{ nation.gini }}</td>
                    </tr>
                    <tr>
                        <td>Area:</td>
                        <td>{{ nation.area }}</td>
                    </tr>
                    <tr>
                        <td>Numeric Code:</td>
                        <td>{{ nation.numericCode }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
  props: ["showNation"],
  data: function() {
    return {
      start: "https://maps.google.com/maps?q=",
      end: "&z=4&output=embed"
    };
  }
};
</script>

<style scoped>
.card-body {
  border: 1px solid lightgray;
}
</style>



