// 컴포넌트명과 중복되지 않도록 I(interface)로 별칭 작성
export interface ITodo {
  id?: number
  todo: string
  isCompleted: boolean
  userId?: number
}
