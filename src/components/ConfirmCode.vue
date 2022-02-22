<template>
  <div class="confirm_code">
    <canvas id="confirm_id" :width="contentWidth" :height="contentHeight"></canvas>
  </div>
</template>
<script>
export default {
  name: "ConfrimCode",
  props: {
    confirmNum: {
      type: String,
      default: "1234",
    },
    fontSizeMin: {
      type: Number,
      default: 20,
    },
    fontSizeMax: {
      type: Number,
      default: 20,
    },
    backgroundColorMin: {
      type: Number,
      default: 140,
    },
    backgroundColorMax: {
      type: Number,
      default: 250,
    },
    contentWidth: {
      type: Number,
      default: 80,
    },
    contentHeight: {
      type: Number,
      default: 40,
    },
    fontColorMax: {
      type: Number,
      default: 252,
    },
    fontColorMin: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      canvasId: null,
    };
  },
  mounted() {
    this.drawCtx();
  },
  watch: {
    confirmNum: "drawCtx",
  },
  methods: {
    makeRandom(max, min) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    makeBackgroundColor(max, min) {
      let r = this.makeRandom(max, min);
      let g = this.makeRandom(max, min);
      let b = this.makeRandom(max, min);
      return `rgb(${r},${g}, ${b})`;
    },
    drawCtx() {
      let canvasId = document.getElementById("confirm_id");
      let ctx = canvasId.getContext("2d");
      ctx.clearRect(0, 0, this.contentWidth, this.contentHeight);
      ctx.textBaseline = "bottom";
      ctx.fillStyle = this.makeBackgroundColor(
        this.backgroundColorMax,
        this.backgroundColorMin
      );
      ctx.fillRect(0, 0, this.contentWidth, this.contentHeight);
      for (let i = 0; i < this.confirmNum.length; i++) {
        this.drawText(ctx, this.confirmNum[i], i);
      }
    },
    drawText(ctx, char, i) {
      ctx.fillStyle = this.makeBackgroundColor(this.fontColorMax, this.fontColorMin);
      ctx.font = `${this.makeRandom(this.fontSizeMax, this.fontSizeMin)}px makeRandom`;
      let x = (i + 1) * (this.contentWidth / (this.confirmNum.length + 1));
      let y = this.makeRandom(this.contentHeight - 10, this.fontSizeMax);
      let dep = this.makeRandom(0, 0);
      ctx.translate(x, y);
      ctx.rotate((dep * Math.PI) / 180);
      ctx.fillText(char, 0, 0);
      ctx.rotate((-dep * Math.PI) / 180);
      ctx.translate(-x, -y);
    },
  },
};
</script>
