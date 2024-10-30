<script>
import axios from 'axios'

export default { 
  props: { 
    Workouts: Array
  },
  data: function () { 
    return { 
      workouts: [],
    }
  },
  created: function () { 
    this.handleIndexWorkouts();
  },
  methods: { 
    handleIndexWorkouts: function () { 
      axios.get('http://localhost:3000/workouts.json').then((response) => { 
        console.log('handle index', response);
        this.workouts = response.data
      })
    }
  }
}

</script>
<template>
  <div v-for="workout in workouts" v-bind:key="workout.id">
    <h2>{{ workout.name }}</h2>
    <h2> {{ workout.musclegroup }}</h2>
    <h2> {{ workout.duration }}</h2>
  </div>
  
</template>

<style></style>