import useSWR from 'swr'

export default function useGetUser(username){
    const api = username ? `https://api.github.com/users/${username}` : null
    const {data, error, mutate} = useSWR(api)
    function refreshUser(){
        mutate()
    }
    
    return  {
        user: data,
        error,
        isLoading: !data && !error,
        onRefresh: refreshUser,
    }
}