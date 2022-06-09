<template>
  <q-page>
   <div class="q-pa-md">
    <q-form @submit="onSubmit" @reset="onReset">
      <q-input
        filled
        v-model="name"
        label="Your name *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        v-model="work"
        label="Your work *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        type="number"
        v-model="age"
        label="Your age *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your age',
          val => val > 0 && val < 100 || 'Please type a real age'
        ]"
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { useQuasar } from 'quasar';
import { ref } from 'vue';
import ProfileContract from "src/shared/ProfileContract";

export default defineComponent({
  name: 'IndexPage',
   setup () {
    const name = ref(null)
    const age = ref(null)
    const profile = new ProfileContract("http://127.0.0.1:8545", "0xf1910D4D57Db3De1e08af990BB4D2F68497afaf7", "0x2d0cffd762a46dd9686b30c9fdc0f391fed00a2c12397323a0634fb32ff73263");
    setTimeout(async () => {
      //const user = await profile.getProfileOfUser("0xd7ea3BbB415f1487a7BA646F705323f32E24dCB5");
      //console.log(user)
      //name.value = user[0];
      //console.log(await profile.getBlance("0xd7ea3BbB415f1487a7BA646F705323f32E24dCB5"))
    })
    const $q = useQuasar()

    return {
      name,
      age,
      accept,

      onSubmit () {
        $q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        });
      },

      onReset () {
        name.value = null
        age.value = null
      }
    }
  }
})
</script>
