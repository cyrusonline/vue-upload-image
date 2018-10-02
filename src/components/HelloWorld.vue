<template>
<div class="hello">
    <progress :value="progress" max="100" id="uploader">0%</progress>
    <img :src="imageUrl" alt="" height="150">
    <input type="file" @change="onFilePicked">
    <button @click="upload">upload</button>
    <p>{{imageUrl}}</p>

</div>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/init'
export default {
    name: 'HelloWorld',
    data() {
        return {
            imageUrl: null,
            image: null,
            file: null,
            progress:0
        }
    },
    methods: {
        upload() {
            firebase.storage().ref('images/input.png').put(this.image)
        },
        onFilePicked(event) {
            // console.log(event)
            const files = event.target.files
            // this.files = event.target.files[0]
            let file = event.target.files[0]
            var storageRef = firebase.storage().ref('sweet_gifs/' + file.name);
            var task = storageRef.put(file);
            task.on('state_changed',
                function progress(snapshot){
                  var percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
                  this.progress = percentage
                 
                },
                function error(err) {

                },
                function complete() {

                }

            )
            //   let filename = files[0].name
            //   const fileReader = new FileReader()
            //   fileReader.readAsDataURL(files[0])
            //   // console.log(filename)
            //   fileReader.addEventListener('load',()=>{
            //     this.imageUrl = fileReader.result
            //     console.log(this.imageUrl)
            //   })
            //   fileReader.readAsDataURL(files[0])
            //   this.image = files[0]
            //   console.log(this.image)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style >

</style>
