// TypeScript declarations for Vue 3

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // 使用更通用的类型定义，避免使用 any
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, Record<string, unknown>>
  export default component
}

// 为路径别名添加更安全的类型声明
declare module '@/*' {
  const value: unknown
  export default value
}

// 为 SVG 文件添加类型声明
declare module '*.svg' {
  const content: string
  export default content
}

// 为 CSS、SCSS 文件添加类型声明
declare module '*.css' {
  const content: { [key: string]: string }
  export default content
}

declare module '*.scss' {
  const content: { [key: string]: string }
  export default content
}

// 为 Vue 组件模板中的 ref 属性提供更精确的类型声明
declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      ref?: import('vue').Ref | ((el: unknown) => void) | null
    }
  }
}

