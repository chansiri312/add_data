<template>
  <v-container>
    <h1>Register</h1>
    <v-form @submit.prevent="addData">
      <v-text-field v-model="Name" label="Name" class="ma-2"></v-text-field>
      <v-text-field
        v-model="Lastname"
        label="Lastname"
        class="ma-3"
      ></v-text-field>
      <v-text-field
        v-model="Phone"
        label="Phone"
        class="ma-4"
        maxlength="10"
        pattern="[0-9]"
      ></v-text-field>
      <v-text-field v-model="Email" label="Email" class="ma-5"></v-text-field>

      <v-row justify="space-around">
        <v-col cols="auto">
          <v-dialog transition="dialog-bottom-transition" max-width="600">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" v-bind="attrs" v-on="on" @click="addData"
                >Submid</v-btn
              >
            </template>
            <template v-slot:default="dialog">
              <v-card>
                <v-toolbar color="success" dark></v-toolbar>
                <v-card-text>
                  <div class="text-h2 pa-12">Register Success</div>
                </v-card-text>
                <v-card-actions class="justify-end">
                  <v-btn text @click="dialog.value = false">Close</v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </v-col>
      </v-row>

      <v-btn
        variant="w-50 btn btn-lg btn-outline-primary"
        value="Reset"
        onClick="javascript:location.reload();"
        >Reset</v-btn
      >
    </v-form>
  </v-container>
</template>

<script>

import firebase from "firebase/app";
import { db } from "~/plugins/firebaseConfig.js";
import CollectionText from "~/components/collectionText.vue";
export default {
  components: {
    CollectionText
  },
  data: function() {
    return {
      Name: "",
      Lastname: "",
      Phone: "",
      Email: ""
    };
  },
  methods: {
    addData() {
      // เก็บข้อมูล Form ใน collection MyForm ( มี 1 document แต่จะ update ข้อมูลเรื่อย ๆ )
      var data = {
        Name: this.Name,
        Lastname: this.Lastname,
        Phone: this.Phone,
        Email: this.Email
      };
      var dataText = {
        Name: this.Name,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      };
      db.collection("MyForm")
        .doc("formdata")
        .set(data)
        .then(function() {
          console.log("Document successfully written! -> MyForm");
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });

      db.collection("MyText")
        .doc()
        .set(dataText)
        .then(function() {
          console.log("Document successfully written! -> MyText");
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
    },

    reset() {}
  }
};
</script>
