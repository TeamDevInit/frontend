import { CopyToClipboard } from 'react-copy-to-clipboard'
import clip from '../../../assets/icons/clip.svg'
import heart from '../../../assets/icons/heart.svg'

interface FloatingPostProps {
  count: number
  onheartClick?: () => void
}

/**
 * 플로팅 좋아요/공유 버튼 컴포넌트
 * @description
 * 게시글에 떠있는 좋아요와 공유 버튼을 포함한 컴포넌트로, 다음 props를 받아 사용합니다:
 * - count: 좋아요 수
 * - onHeartClick: 좋아요 버튼 클릭 핸들러 함수
 *
 * @note
 * 위치 지정은 부모 요소를 기준으로 상대적으로 배치되어야 합니다.
 */

const FloatingPost = ({ count, onheartClick }: FloatingPostProps) => {
  return (
    <div className='absolute z-10 flex flex-col items-center justify-center gap-1 p-2 rounded-full bg-sub-color top-20 right-10'>
      <div className='flex flex-col items-center justify-center gap-1'>
        <button
          onClick={onheartClick}
          className='flex items-center justify-center p-1 bg-white border-2 rounded-full w-11 h-11 hover:opacity-100 opacity-70'
        >
          <img src={heart} className='w-6 h-6' />
        </button>
        <p>{count}</p>
      </div>
      <CopyToClipboard text={window.location.href}>
        <button className='flex items-center justify-center p-1 bg-white border-2 rounded-full w-11 h-11 hover:opacity-100 opacity-70'>
          <img src={clip} className='w-7 h-7' />
        </button>
      </CopyToClipboard>
    </div>
  )
}

export default FloatingPost
