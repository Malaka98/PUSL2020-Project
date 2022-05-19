import {createApi} from "@reduxjs/toolkit/query/react";
import {fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

const BASE_URL = "http://localhost/"

const AccidentApiService = createApi({
    reducerPath: "AccidentApiService",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL + "api/",
        credentials: "include",
    }),
    tagTypes: ['GetAccidentList', 'GetAllAccidentList'],
    endpoints: build => ({
        getAccidentList: build.query<any, any>({
            query: ({
                        doc
                    }: any) => `${doc}`,
            providesTags: ['GetAccidentList']
        }),
        getAllAccidentList: build.query<any, any>({
            query: ({
                        doc
                    }: any) => `${doc}`,
            providesTags: ['GetAllAccidentList']
        }),
        create: build.mutation<any, any>({
            query: ({
                        doc,
                        payload
                    }: any) => ({
                url: `${doc}`,
                method: 'POST',
                body: payload,
            }),
        }),
        delete: build.mutation<any, any>({
            query: ({
                        doc,
                        payload
                    }: any) => ({
                url: `${doc}`,
                method: 'DELETE',
                body: payload,
            }),
        }),
    })
})

export const {useGetAccidentListQuery, useGetAllAccidentListQuery} = AccidentApiService
export default AccidentApiService