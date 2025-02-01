import { useMutation, useQueryClient } from '@tanstack/react-query'
import { API_ROUTES } from '../../constant/api'
import { authInstance } from '../fetchInstance'

const postFollow = async (memberId: string) => {
  await authInstance.post(`/${API_ROUTES.FOLLOWS}/${memberId}`)
}

const useProfileFollow = (profileId: string, id: string) => {
  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: () => postFollow(profileId),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['profileInfo', profileId] })
      queryClient.invalidateQueries({ queryKey: ['board', id] })

      console.log('팔로우 요청 성공')
    },
    onError: (error) => {
      console.error('팔로우 요청 실패', error)
    },
  })
  return { mutate }
}

export default useProfileFollow
