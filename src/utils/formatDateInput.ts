const formatDateForInput = (isoString: string | undefined) => {
  if (!isoString) return ''
  return new Date(isoString).toISOString().split('T')[0]
}

export default formatDateForInput
