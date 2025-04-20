<template>
  <button :disabled="disabled" :class="buttonClass">{{text}}</button>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { IButton } from '@/interfaces/index.js';

const {
  text = 'Button',
  disabled = false,
  size = 'default',
  color = 'primary',
} = defineProps<IButton>()

const buttonClass = computed(() => {
  return ["insider-button", size, color]
})

</script>

<style scoped lang="scss">

@use 'variables' as *;

$sizes: (
  "large": $large,
  "default": $default,
  "small": $small,
  "tiny": $tiny,
);

.insider-button {
  width: fit-content;
  font-weight: 600;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  border-radius: 4px;
  border-color: transparent;
  outline: none;

  @each $key, $size in $sizes {
    &.#{$key} {
      @each $key, $val in $size {
        #{$key}: $val;
      }
    }
  }

  &:not(:disabled) {
    &:active {
      box-shadow: none;
      background-color: $color-white;
    }
  }

  &:disabled {
    cursor: default;
  }
}
</style>
