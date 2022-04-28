import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BaseQueryResult} from "@reduxjs/toolkit/dist/query/baseQueryTypes";

const BASE_URL = "http://localhost:8080/"

const UserService = createApi({
    reducerPath: "usersApi",
    baseQuery: fetchBaseQuery({
        // prepareHeaders: (headers => {
        // //     // headers.set("Content-Type", "application/form-data");
        // //     headers.set('Access-Control-Allow-Headers', 'Content-Type,X-Api-Key');
        //     headers.set('Access-Control-Allow-Origin', 'http://localhost:8080');
        //     headers.set('Access-Control-Allow-Credentials', "true");
        //     // headers.set('Access-Control-Allow-Methods', 'OPTIONS,POST');
        //     return headers;
        // }),
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
            invalidatesTags: ['User'],
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