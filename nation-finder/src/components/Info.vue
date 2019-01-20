<template>
  <div>
    <table class="table table-striped table-bordered" v-for="nation in getInfo" :key="nation.alpha2Code">
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
</template>

<script>
export default {
  props: ["getInfo"]
};
</script>

