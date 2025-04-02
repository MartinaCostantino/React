import useSWR from 'swr'
export default  function useGetApi() {
    const {data, error, mutate} = useSWR('https://api.github.com/users')
    function refreshUser(){
        mutate()
    }
    return {
        users: data,
        error,
        isLoading: !data && !error,
        onRefresh: refreshUser,
    }

}