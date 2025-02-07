import { useMutation, useQueryClient } from '@tanstack/react-query'
import { API_ROUTES } from '../../constant/api'
import redirectToLogin from '../../hooks/useLoginRedirect'
import { BoardResponse } from '../../types'
import { authInstance } from '../fetchInstance'

const postFollow = async (memberId: string) => {
  await authInstance.post(`/${API_ROUTES.FOLLOWS}/${memberId}`)
}

const useProfileFollow = (profileId: string, id: string) => {
  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: () => postFollow(profileId),
    onSuccess: () => {
      queryClient.setQueryData(['board', id], (oldData: BoardResponse) => ({
        ...oldData,
        following: !oldData.following,
      }))
    },
    onError: (error) => {
      console.error('추천 에러:', error)
      redirectToLogin()
    },
  })
  return { mutate }
}
export default useProfileFollow
