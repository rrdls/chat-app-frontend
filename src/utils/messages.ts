export type Params = {
  chatBodyRef: React.MutableRefObject<HTMLDivElement>
}

export const scrollChatBodyDown = ({ chatBodyRef }: Params) => {
  chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight
}
