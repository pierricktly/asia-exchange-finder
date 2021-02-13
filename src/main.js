import { createApp } from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'
import './index.css'

var firebaseConfig = {
    apiKey: "AIzaSyCeTd92spWS_GVaY3Boi1ifEIpKo2J1DQ0",
    authDomain: "asia-exchange-finder.firebaseapp.com",
    databaseURL: "https://asia-exchange-finder-default-rtdb.firebaseio.com/",
    projectId: "asia-exchange-finder",
    storageBucket: "asia-exchange-finder.appspot.com",
    messagingSenderId: "842116159585",
    appId: "1:842116159585:web:a7c5adae9964eb8e957220",
    measurementId: "G-JG0FNVR88C"
};
// Initialize Firebase
let apps = firebase.initializeApp(firebaseConfig)
const analytics = firebase.analytics();
let db = apps.database()
apps.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)

var name = "Unknown";
var grade, users;

firebase.auth().onAuthStateChanged((user) =>  {
    if(user != undefined) {
        firebase.database().ref('users/' + user.uid).once('value').then((snapshot) => {
            name = snapshot.val().username
            grade = snapshot.val().grade
        })
    }
})

createApp(App).use(router).mount('#app')

export default db
export {apps, name, grade, analytics}