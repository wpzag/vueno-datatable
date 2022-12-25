import { DTProps } from '@/types/DataTableProps'
import { CSSProperties } from 'vue'

export function useHeaderStyle(props: DTProps) {
  const headerStyle = computed(() => {
    const style: CSSProperties = {}
    if (props.noWrap) {
      style.whiteSpace = 'nowrap'
    }
    return style
  })

  return {
    headerStyle,
  }
}
