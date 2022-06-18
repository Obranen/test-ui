import {useMemo} from 'react';

export const useSortUsers = (arrayUsers: any[], sortValue: string) => {
  function SortArray(field: string) {
    return (a: any, b: any) => a[field] > b[field] ? 1 : -1
  }

  const findWorldUsers = useMemo(() => {
    if (sortValue) {
      return arrayUsers.sort(SortArray(sortValue))
    }
    return arrayUsers
  }, [sortValue, arrayUsers])

  return findWorldUsers
}

export const useFinedAndSortedUsers = (arrayUsers: any, sortValue: string, findValue: string) => {
  const sortedUsers = useSortUsers(arrayUsers, sortValue)
  const sortedAndFindUsers = useMemo(() => {
    return sortedUsers.filter(user => user.username.toLowerCase().includes(findValue.toLowerCase()))
  }, [findValue, sortValue, sortedUsers])
  return sortedAndFindUsers
}