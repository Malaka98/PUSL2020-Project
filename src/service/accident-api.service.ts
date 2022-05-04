import {createApi} from "@reduxjs/toolkit/query/react";
import {fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

const BASE_URL = "http://localhost/"

const AccidentApiService = createApi({
        reducerPath: "AccidentApiService",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL + "api/",
        credentials: "include"
    }),
    tagTypes: ['GetAccidentList'],
    endpoints: build => ({
        getAccidentList: build.query<any, any>({
            query: ({
                        doc
                    }: any) => `${doc}`,
            providesTags: ['GetAccidentList']
        })
    })
})

export const {useGetAccidentListQuery} = AccidentApiService
export default AccidentApiService