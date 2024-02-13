import { v4 } from "uuid";

export const PRINCIPAL_MENU = [
    {
        id: v4(),
        optionNumber: '00',
        optionText:  'HOME',
        path: "/"
    },
    {
        id: v4(),
        optionNumber: '01',
        optionText: 'DESTINATION',
        path: "/destination"
    },
    {
        id: v4(),
        optionNumber: '02',
        optionText:  'CREW',
        path: "/crew"
    },
    {
        id: v4(),
        optionNumber: '03',
        optionText:  'TECHNOLOGY',
        path: "/technology"
    }

]