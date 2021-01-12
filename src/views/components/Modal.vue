<template>
  <div class="modal">
     <Modal
        :title="modalTitle"
        v-model="modalValue"
        @on-ok="onOk"
        @on-cancel="cancel"
        :styles="{top: '20px'}">
        <slot name="content">
           <RadioGroup v-model="vertical" vertical>
              <Radio :label="radio.value" v-for="radio in radioArr" :key="radio.id">
                  <span>{{radio.value}}</span>
              </Radio>
        </RadioGroup>
        </slot>
    </Modal>
  </div>
</template>

<script>
export default {
  props: {
    radioArr: {
      type: Array,
      default: () => []
    },
    modalValue: {
      type: String,
      default: ''
    },
    modalTitle: {
      type: String,
      default: ''
    }
  },
  methods: {
    onOk() {
      this.$emit('onOk')
    },
    cancel() {
      this.$emit('cancel')
    }
  }
}
</script>

<style>

</style>