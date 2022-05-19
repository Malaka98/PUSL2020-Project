import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:8080/"

const UserService = createApi({
    reducerPath: "UserService",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL + "api/",
        credentials: 'include'
    }),
    tagTypes: ["User"],
    endpoints: builder => ({
        login: builder.mutation<any, any>({
            query: (payload) => ({
                url: `login`,
                method: 'POST',
                body: payload,
            }),
            // transformResponse: (response: BaseQueryResult<any>) => {
            //     console.log("*********************" + response)
            //     if (response.message === "Logged In") return {...response, isLoggedIn: true}
            //     else return {...response, isLoggedIn: false}
            // }
        })
    })
})

export const {useLoginMutation} = UserService
export default UserService