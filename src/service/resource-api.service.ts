import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost/"

export const ResourceApiService = createApi({
    reducerPath: "ResourceApiService",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL + "api/",
        credentials: "include"
    }),
    tagTypes: ['Get'],
    endpoints: build => ({
        get: build.query<any, any>({
            query: ({
                        doc
                    }: any) => `${doc}`,
            providesTags: ['Get']
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
        update: build.mutation<any, any>({
            query: ({
                        doc,
                        name,
                        payload
                    }: any) => ({
                url: `${doc}/${name}`,
                method: 'PUT',
                body: payload,
            }),
        })
    })
})

export const {useGetQuery, useCreateMutation, useUpdateMutation} = ResourceApiService