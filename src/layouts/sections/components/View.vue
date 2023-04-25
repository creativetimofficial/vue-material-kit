<script setup>
import { ref } from "vue";

// import Prism Editor
import { PrismEditor } from "vue-prism-editor"; //
import "prismjs/themes/prism.css"; // import the styles somewhere
import "vue-prism-editor/dist/prismeditor.min.css";

// import highlighting library (you can use any library you want just return html string)
import prism from "prismjs";

// clipboard
import useClipboard from "vue-clipboard3";

// prop
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    default: "",
  },
});

// variables
const { toClipboard } = useClipboard();
const editorCode = ref(props.code);

// functions
const copy = async (event) => {
  try {
    await toClipboard(editorCode.value);
    const el = event.target.parentElement;
    var alert = document.createElement("div");
    alert.classList.add(
      "alert",
      "alert-success",
      "position-absolute",
      "top-5",
      "border-0",
      "text-white",
      "w-25",
      "end-0",
      "start-0",
      "mt-2",
      "mx-auto",
      "py-2"
    );
    alert.style.transform = "translate3d(0px, 0px, 0px)";
    alert.style.opacity = "0";
    alert.style.transition = ".35s ease";
    setTimeout(function () {
      alert.style.transform = "translate3d(0px, 20px, 0px)";
      alert.style.setProperty("opacity", "1", "important");
    }, 100);
    alert.innerHTML = "Code successfully copied!";
    el.parentElement.appendChild(alert);
    setTimeout(function () {
      alert.style.transform = "translate3d(0px, 0px, 0px)";
      alert.style.setProperty("opacity", "0", "important");
    }, 2000);
    setTimeout(function () {
      el.parentElement.querySelector(".alert").remove();
    }, 2500);
  } catch (e) {
    console.error(e);
  }
};

const highlighter = (code) => {
  return prism.highlight(code, prism.languages.html);
};
</script>

<template>
  <div
    class="position-relative border-radius-xl overflow-hidden shadow-lg mb-7"
  >
    <div class="container border-bottom">
      <div class="row justify-space-between py-2">
        <div class="col-lg-3 me-auto">
          <p class="lead text-dark pt-1 mb-0">{{ title }}</p>
        </div>
        <div class="col-lg-3">
          <div class="nav-wrapper position-relative end-0">
            <ul class="nav nav-pills nav-fill flex-row p-1" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link mb-0 px-0 py-1 active"
                  data-bs-toggle="tab"
                  :href="`#preview-${id}`"
                  role="tab"
                  aria-selected="true"
                >
                  <i class="fas fa-desktop text-sm me-2"></i> Preview
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link mb-0 px-0 py-1"
                  data-bs-toggle="tab"
                  :href="`#code-${id}`"
                  role="tab"
                  aria-selected="false"
                >
                  <i class="fas fa-code text-sm me-2"></i> Code
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="tab-content tab-space">
      <div class="tab-pane active p-2" :id="`preview-${id}`">
        <div class="overflow-auto" :class="`${height && `height-${height}`}`">
          <slot />
        </div>
      </div>
      <div class="tab-pane" :id="`code-${id}`">
        <div class="position-relative p-4 pb-2">
          <a
            class="btn btn-sm bg-gradient-dark position-absolute end-4 mt-3 z-index-3"
            @click="copy($event)"
            href="javascript:;"
            ><i class="fas fa-copy text-sm me-1"></i> Copy</a
          >
          <figure class="highlight">
            <PrismEditor
              class="p-2 bg-gray-100 border-radius-xl height-800 my-editor"
              v-model="editorCode"
              :highlight="highlighter"
              line-numbers
              readonly
            ></PrismEditor>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.my-editor {
  /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
  color: black;
  /* you must provide font-family font-size line-height. Example: */
  font-family: Consolas, Fira Mono, Menlo, Courier, monospace;
  font-size: 1em;
  line-height: 1.5;
  padding: 5px;
  tab-size: 4;
}
/* optional class for removing the outline */
.prism-editor__textarea:focus {
  outline: none;
}
</style>
