<template>
  <div>
    <div class="row" id="pdfDom" style="background-color:#f90;">
      //给自己需要导出的ui部分.定义id为"pdfDom".此部分将就是pdf显示的部分
      <p>1111111</p>
      <p>1111111</p>

      <p>1111111</p>
      <p>1111111</p>

      <p>1111111</p>
<p>1111111</p>
      <p>1111111</p>
      <p>1111111</p><p>1111111</p>
            <p>1111111</p>
<p>1111111</p>
      <p>1111111</p>
      <p>1111111</p><p>1111111</p>
            <p>1111111</p>
<p>1111111</p>
      <p>1111111</p>
      <p>1111111</p><p>1111111</p>
            <p>1111111</p>
<p>1111111</p>
      <p>1111111</p>
      <p>1111111</p><p>1111111</p>

            <p>1111111</p>
<p>1111111</p>
      <p>1111111</p>
      <p>1111111</p><p>1111111</p>

            <p>1111111</p>
<p>1111111</p>
      <p>1111111</p>
      <p>1111111</p><p>1111111</p>
    </div>
    <button type="button" class="btn btn-primary" v-on:click="getPdf()">导出PDF</button>
  </div>
</template>

<script>
export default {
  data () {
      return {
        htmlTitle: '页面导出PDF文件名'
      }
  },
}
</script>

<style>

</style>