import Vue from "vue";

export function notifyAuth(type='success',title="",text=""){
    Vue.notify({
        group: 'auth',
        type: type,
        title: title,
        text: text
      })
}