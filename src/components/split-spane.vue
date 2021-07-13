<template>
  <div ref="outer" class="split-pane-wrapper">
    <div
      class="spane spane-left"
      :style="{
        width: leftOffsetPercent,
        paddingRight: `${triggerWidth / 2}px`
      }"
    >
      <slot name="left"></slot>
    </div>
    <div
      class="side"
      @mousedown="MouseDown"
      @mouseup="MouseUp"
      :style="{ left: sideOffset, width: `${triggerWidth}px` }"
    ></div>
    <div
      class="spane spane-right"
      :style="{ left: leftOffsetPercent, paddingLeft: `${triggerWidth / 2}px` }"
    >
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "SplitSpane",
  props: {
    triggerWidth: {
      type: Number,
      default: 8
    }
  },
  data() {
    return {
      leftOffset: 0.3,
      canMove: false
    };
  },
  methods: {
    split(direction) {
      this.leftOffset += direction * 0.01;
    },
    MouseDown(event) {
      this.canMove = true; //保证当鼠标按下时才能移动
      document.addEventListener("mousemove", this.move);
      document.addEventListener("mouseup", this.MouseUp);
    },
    MouseUp() {
      this.canMove = false; //保证当鼠标抬起时，移除事件并且不能移动
      document.removeEventListener("mousemove", this.move);
    },
    move(event) {
      if (this.canMove) {
        let offset = this.$refs.outer.getBoundingClientRect();
        let wrapperLeft = offset.left;
        let triggerLeft = event.pageX - wrapperLeft;
        if (event.pageX - wrapperLeft <= 0) {
          triggerLeft = 0;
        }
        if (event.pageX - wrapperLeft >= offset.width) {
          triggerLeft = offset.width;
        }
        this.leftOffset = triggerLeft / offset.width;
      }
    }
  },
  computed: {
    sideOffset() {
      return `calc(${this.leftOffset * 100}% - ${this.triggerWidth / 2}px)`;
    },
    leftOffsetPercent() {
      return `${this.leftOffset * 100}%`;
    }
  }
};
</script>
<style lang="scss">
.split-pane-wrapper {
  position: relative;
  height: 100%;
  box-sizing: border-box;
  .spane {
    position: absolute;
    overflow: hidden;
    height: 100%;
    top: 0;
    left: 0;
    // transition: all 0.05s ease;
    &-left {
      background-color: chartreuse;
    }
    &-right {
      bottom: 0;
      right: 0;
      background-color: darkorange;
    }
  }
  .side {
    position: absolute;
    height: 100%;
    background-color: darkred;
    cursor: col-resize;
    z-index: 2;
  }
}
</style>
