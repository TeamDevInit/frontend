import { useMutation, useQueryClient } from '@tanstack/react-query'
import { API_ROUTES } from '../../constant/api'
import { BoardResponse } from '../../types'
import { authInstance } from '../fetchInstance'

const deleteComment = async ({
  boardId,
  commentId,
}: {
  boardId: string
  commentId: number
}) => {
  await authInstance.delete(`/${API_ROUTES.COMMENTS}/${commentId}`, {
    data: {
      boardId: Number(boardId),
    },
  })
}

const useDeleteComment = (boardId: string, commentId: number) => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: () => deleteComment({ boardId, commentId }),
    onSuccess: () => {
      queryClient.setQueryData(
        ['board', boardId],
        (oldData: BoardResponse) => ({
          ...oldData,
          comment: oldData.comment.filter(
            (comment) => comment.id !== commentId,
          ),
          commentCnt: oldData.commentCnt - 1,
        }),
      )
    },
  })

  return { mutate }
}

export default useDeleteComment
