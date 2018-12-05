<template>
    <div class="col" :class="colClass"
        :style="colStyle"
    >
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    let validator = (value) => {
        let keys = Object.keys(value)
        let valid = true
        keys.forEach(key => {
            if (!['span', 'offset'].includes(key)) {
                valid = false
            }
        })
        return valid
    }

    export default {
        name: 'x_col',
        props: {
            span: {
                type: [Number, String]
            },
            offset: {
                type: [Number, String]
            },
            pad: {type: Object, validator},
            narrowPc: {type: Object, validator},
            pc: {type: Object, validator},
            widePc: {type: Object, validator}
        },
        data() {
            return {
                gutter: 0
            }
        },
        methods: {
            createClasses (obj, str='') {
                if (!obj) {
                    return []
                }
                let arr = []
                if (obj.span) {
                    arr.push(`col-${str}${obj.span}`)
                }
                if (obj.offset) {
                    arr.push(`offset-${str}${obj.offset}`)
                }
                return arr
            }  
        },
        computed: {
            colClass() {
                let {span, offset, pad, narrowPc, pc, widePc} = this
                return [
                    ...this.createClasses({span, offset}),
                    ...this.createClasses(pad, 'pad-'),
                    ...this.createClasses(narrowPc, 'narrow-pc-'),
                    ...this.createClasses(pc, 'pc-'),
                    ...this.createClasses(widePc, 'wide-pc-')
                ]
            },
            colStyle() {
                return {
                    paddingLeft: this.gutter/2+'px',
                    paddingRight: this.gutter/2+'px'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.col{
    height: 40px;
    width: 50%;
    @for $n from 1 through 24{
        &.col-#{$n} {width: $n/24*100%;}
    }
    @for $n from 1 through 24{
        &.offset-#{$n} {margin-left: $n/24*100%;}
    }
    div{
        height: 100%;
        //border: 1px solid red;
        //background: #82BF56;
        
    }
    &:nth-child(odd)>div{
        background: #f1c40f;
    }
    &:nth-child(even)>div{
        background: #D8AB00;
    }

    @media (min-width: 577px) {
      $class-prefix: col-ipad-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-ipad-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 769px){ // 770
      $class-prefix: col-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 993px) {
      $class-prefix: col-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 1201px) {
      $class-prefix: col-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
}
</style>
