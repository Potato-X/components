<template>
  <div>
    <span :id="eleId"></span>
  </div>
</template>
<script>
import CountUp from "countup";
export default {
  name: "count2",
  props: {
    /**
     * @description 起始值
     */
    startVal: {
      type: Number,
      default: 0
    },
    /**
     * @description 最终值
     */
    endVal: {
      type: Number,
      required: true
    },
    /**
     * @description 小数点后保留几位小数
     */
    decimals: {
      type: Number,
      default: 0
    },
    /**
     * @description 数字过渡时间
     */
    duration: {
      type: Number,
      default: 1
    }
  },
  computed: {
    eleId() {
      return `count_${this._uid}`;
    }
  },
  data() {
    return {
      counter: {}
    };
  },
  mounted() {
    this.$$nextTick(() => {
      this.counter = new CountUp(
        this.eleId,
        this.startVal,
        this.endVal,
        this.decimals,
        this.duration
      );
    });
  }
};
</script>
