<template>
    <div>
        <article v-for="(item, idx) in locations" :key="idx">
            <a :href="item.url">
                <h1>{{ item.name }}</h1>
            </a>
        </article>
    </div>
</template>
<script>

import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
  projectId: '6ft4VKkOPyo2u63cBgyi',
  databaseURL: 'https://portfolio-larsgp.firebaseio.com/'
})
export const db = firebase.firestore();



export default {
  name: 'Test',
  data () {
    return {
      locations: []
    }
  },
  firestore () {
    return {
      locations: db.collection('larsgpx123')
    }
  }
}
</script>