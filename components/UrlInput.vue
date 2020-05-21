<template>
    <v-card class="card__layout">
        <v-row>
                <v-col class="input___container" sm="6">
                    <v-text-field v-model="url" outlined class="input__field" />
                    <v-btn @click="send" height="56px">Go</v-btn>
                </v-col>
                <v-col sm="2">
                    <v-select v-model="type" fullwidth height="20px" outlined  single-line :items="types" ></v-select>
                </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-btn depressed v-clipboard="() => text">copy to clipboard</v-btn>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
export default {
    name: "UrlInput",
    props: {
        text: Object
    },
    data: function(){
        return{
            url: "",
            type: "",
            types: ["post", "get"]
        }
    },
    methods: {
        send(){
            this.$emit("sendEvent", {url: this.url, event: this.type})
        }
    }
}
</script>

<style>
.card__layout{
    padding: 10px
}
.input___container{
    display: flex;
}
.input__field{
}
</style>
