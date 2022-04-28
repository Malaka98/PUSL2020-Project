import {createSlice} from "@reduxjs/toolkit";

const initialData: any = [
    {
        "label": "Documents",
        "path": "/app",
        "icon": "Doc",
        "children": [
            {
                "label": "Approved Applications",
                "sublabel": null,
                "path": "/app/application/approved",
                "icon": null
            },
            {
                "label": "New Applications",
                "sublabel": null,
                "path": "/app",
                "icon": null
            }
        ]
    },
    // {
    //     "label": "Dashboards",
    //     "path": "/dashboard",
    //     "icon": null,
    //     "children": [
    //         {
    //             "label": "Workflow",
    //             "sublabel": null,
    //             "path": "/workflow",
    //             "icon": null
    //         },
    //         {
    //             "label": "Project Summary",
    //             "sublabel": null,
    //             "path": "/project-summary",
    //             "icon": null
    //         }
    //     ]
    // },
    // {
    //     "label": "Tasks",
    //     "path": "/task",
    //     "icon": null,
    //     "children": [
    //         {
    //             "label": "Todo Tasks",
    //             "sublabel": null,
    //             "path": "/todo",
    //             "icon": null
    //         },
    //         {
    //             "label": "All Tasks",
    //             "sublabel": null,
    //             "path": "/all",
    //             "icon": null
    //         }
    //     ]
    // }
]

const initialState = {
    children: initialData
}

const NavItemSlice = createSlice({
    name: 'navItemSlice',
    initialState: initialState,
    reducers: {
        getNavItem(state: any, data: any) {
            state.children = data.payload;
        }
    }
})

export const {getNavItem} = NavItemSlice.actions
export default NavItemSlice