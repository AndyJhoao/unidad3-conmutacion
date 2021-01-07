<template>
  <main>
    <px-header></px-header>
    <px-data></px-data>
    <px-contact></px-contact>
  </main>
</template>
<script>
import PxHeader from "@/components/PxHeader";
import PxData from "@/components/PxData";
import PxContact from "@/components/PxContact";

export default {
  name: "App",
  components: {
    PxHeader,
    PxData,
    PxContact
  }
};
</script>
