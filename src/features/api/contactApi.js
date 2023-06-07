import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
    reducerPath:"contactApi",
    baseQuery:fetchBaseQuery({baseUrl:" https://contact-app.mmsdev.site/api/v1"}),
    tagTypes:["contactApi"],

    endpoints:(builder) => ({
        contact:(builder).query({
            query:({token}) => ({
                url : "/contact",
                method: "GET",
                headers:{authorization : `Bearer ${token}`}
            }),
            providesTags:["contactApi"]
        }),
        deleteContact:(builder).mutation({
            query:({id,token}) => ({
                url : `/contact/${id}`,
                method : "DELETE",
                body : id,
                headers : {authorization : `Bearer ${token}`}
            }),
            invalidatesTags:["contactApi"]
        }),
        createContact:(builder).mutation({
            query:({contact,token}) => ({
                url : "/contact",
                method : "POST",
                body : contact,
                headers : {authorization : `Bearer ${token}`}
            }),
            invalidatesTags:["contactApi"]
        }),
        updateContact:(builder).mutation({
            query:({id,contact,token}) => ({
                url : `/contact/${id}`,
                method : "PATCH",
                body : contact,
                headers : {authorization : `Bearer ${token}`}
            }),
            invalidatesTags:["contactApi"]
        }),
        singleContact: builder.query({
            query:({token,id,contact}) => ({
                url:`/contact/${id}`,
                body : contact,
                headers:{authorization:`Bearer ${token}`}
            }),
            providesTags:['contentApi']
        }),
    })
})

export const {useContactQuery,useDeleteContactMutation,useCreateContactMutation,useUpdateContactMutation,useSingleContactQuery} = contactApi