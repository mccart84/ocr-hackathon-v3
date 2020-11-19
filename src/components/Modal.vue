<template>
<section>
        <div class="buttons">
            <button class="button is-primary is-medium"
                @click="isCardModalActive = true">
                Read File
            </button>
        </div>

        <b-modal v-model="isCardModalActive" :width="900" scroll="keep">
            <div class="card">
                <!-- <div class="card-image">
                    <figure class="image is-4by3">
                        <img src="/static/img/logo.png" alt="Image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img src="/static/img/placeholder-1280x960.png" alt="Image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4">John Smith</p>
                            <p class="subtitle is-6">@johnsmith</p>
                        </div>
                    </div>

                    <div class="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                        <a>#css</a> <a>#responsive</a>
                        <br>
                        <small>11:09 PM - 1 Jan 2016</small>
                    </div>
                </div> -->

                <div class="content" style="width: 49%; float: left;">
                    <b-field>
                            <b-upload v-model="dropFiles"
                                multiple
                                drag-drop>
                                <section class="section">
                                    <div class="content has-text-centered">
                                        <p>
                                            <b-icon
                                                icon="upload"
                                                size="is-large">
                                            </b-icon>
                                        </p>
                                        <p>Drop your files here or click to upload</p>
                                    </div>
                                </section>
                            </b-upload>
                    </b-field>                
                </div>
                <div style="width: 49%; float: right; padding-top: 20px; padding-right: 20px">
                    <!-- <b-progress size="is-small"></b-progress> -->
                    <section>
                        <b-field label="PO #">
                            <b-input size="is-small" v-model="name"></b-input>
                        </b-field>        
                    </section>
                </div>
            </div>
        </b-modal>
    </section>
</template>

<script>
export default {
        data() {
            return {
                isImageModalActive: false,
                isCardModalActive: false
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.buttons {
  margin: 40px;
}

.section {
  margin: 40px;
  height: 60%;
  width: 80%;
}

.content {
    padding: 20px;
}
.content-right {
    float: right;
}
</style>
