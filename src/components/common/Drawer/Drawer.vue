<template>
  <transition name="overlay-fade">
    <div v-if="isOpen" class="overlay"></div>
  </transition>
  <transition :name="'drawer-slide-' + position" mode="in-out">
    <div
      class="insider-drawer-wrapper"
      v-if="isOpen"
    >
      <div
        class="full-content"
        :class="drawerContentClass"
        :style="drawerContentStyle"
      >
        <div class="drawer-header" :class="position">
          <div class="drawer-close" @click="closeDrawer">
            <CLoseIcon />
          </div>
          <slot name="header"></slot>
        </div>
        <div class="drawer-content" >
          <slot name="body"></slot>
        </div>
        <div class="drawer-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>


<script lang="ts" setup>
import { computed, defineProps } from "vue";
import { CLoseIcon } from "@/components/index.js";
import { IDrawerProps } from "@/interfaces/index.js";

const {
  width = 400,
  position = 'left',
  modelValue = false,
} = defineProps<IDrawerProps>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>()

const drawerContentStyle = computed(() => {
  return  {width: `${width}px`}
});

const drawerContentClass = computed(() => {
  return position
})

function closeDrawer() {
  emit('update:modelValue', false);
}

const isOpen = computed(() => modelValue);
</script>

<style scoped lang="scss">
.insider-drawer-wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
  z-index: 9999;

  .full-content {
    position: absolute;
    height: 100%;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .drawer-header {
      padding: 16px;
      display: flex;
      align-items: center;


      .drawer-close {
        margin: 0 8px;
      }
    }

    .left {
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
      justify-content: space-between;
    }

    .drawer-content {
      padding: 16px 32px;
      overflow-y: auto;
      height: calc(100% - 44px);

      &::-webkit-scrollbar {
        display: none;
      }
    }

    .drawer-footer {
      padding: 0 32px 24px;
      background: #FFF;
      width: 100%;
    }

  }

  .right {
    right: 0;
  }

  .left {
    left: 0;
  }
}
.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, .48);
  z-index: 1000;
}

.overlay-fade-enter-active,
.overlay-fade-leave-active {
  transition: opacity .7s ease;
}
.overlay-fade-enter-from,
.overlay-fade-leave-to {
  opacity: 0;
}
.overlay-fade-enter-to,
.overlay-fade-leave-from {
  opacity: 1;
}

.drawer-slide-right-enter-active,
.drawer-slide-right-leave-active {
  transition: transform .7s cubic-bezier(0.465, 0.183, 0.153, 0.946);
}

.drawer-slide-right-enter-from,
.drawer-slide-right-leave-to {
  transform: translateX(100%);
}

.drawer-slide-left-enter-active,
.drawer-slide-left-leave-active {
  transition: transform .7s cubic-bezier(0.465, 0.183, 0.153, 0.946);
}

.drawer-slide-left-enter-from,
.drawer-slide-left-leave-to {
  transform: translateX(-100%);
}

.drawer-slide-right-enter-to,
.drawer-slide-left-enter-to,
.drawer-slide-right-leave-from,
.drawer-slide-left-leave-from {
  transform: translateX(0);
}
</style>
