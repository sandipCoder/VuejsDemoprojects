<template>
  <div>
    <slot>This is the Default slot</slot>
  
    <slot name="header"></slot>
    <slot name="para"></slot>
    <slot name="form"></slot>
  </div>
</template>

<script>
export default {
  name: "Slotchild",
};
</script>
