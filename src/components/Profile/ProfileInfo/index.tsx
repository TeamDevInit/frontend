import { useState } from 'react'
import EditIcon from '../../../assets/icons/edit.svg?react'
import { Button, Modal, StatItem } from '../../../components'

interface ProfileInfoProps {
  isMyProfile: boolean
  nickName: string
  profileImg: string
  about: string
  boardCnt: number
  followerCnt: number
  followingCnt: number
  boardStatistics: { date: string; board_count: number }[]
}
/**
 * 프로필 정보 컴포넌트
 * isMyProfile 값에 따라 프로필 수정이나 팔로우하기 버튼 같은 요소 처리
 * 프로필 수정은 모달로 작업할 예정.
 * @description
 */

const ProfileInfo = ({
  isMyProfile,
  nickName,
  profileImg,
  about,
  boardCnt,
  followerCnt,
  followingCnt,
  boardStatistics,
}: ProfileInfoProps) => {
  console.log(boardStatistics)
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false)

  const handleModalClose = () => {
    setIsEditOpen(false)
  }
  return (
    <section>
      <h1 className='mb-3 text-main-black text-size-title text-semibold'>
        👨🏻‍💻 프로필
      </h1>
      <section className='flex w-full gap-4'>
        <section className='flex flex-grow-[3] flex-col items-center justify-center gap-3'>
          <img
            src={profileImg}
            alt={nickName}
            className='object-cover w-40 h-40 rounded-full'
          />
          {!isMyProfile && <Button size='small'>팔로우 하기</Button>}
        </section>

        <section className='flex flex-grow-[7] flex-col gap-4 p-2'>
          <section className='flex items-center gap-2'>
            <h1 className='text-xl font-semibold text-main-black'>
              {nickName}
            </h1>
            {isMyProfile && (
              <button
                className='border-[1px] border-main-color rounded-lg p-1'
                onClick={() => setIsEditOpen(true)}
              >
                <EditIcon fill='#212529' />
              </button>
            )}
          </section>

          <section className='flex gap-4'>
            <StatItem label='게시글' value={boardCnt} />
            <StatItem label='팔로워' value={followerCnt} />
            <StatItem label='팔로잉' value={followingCnt} />
          </section>
          <p className='border-[1px] text-[14px] px-3 py-2 rounded-xl max-w-[500px] h-32 border-main-color overflow-y-auto'>
            {about}
          </p>
        </section>
      </section>
      {isEditOpen && (
        <Modal
          isOpen={isEditOpen}
          content={
            <form>
              <Button onClick={handleModalClose}>닫기</Button>
            </form>
          }
          onClose={() => console.log(isEditOpen)}
        />
      )}
    </section>
  )
}

export default ProfileInfo