import {
    HiHome,
    HiUser,
    HiCalendar,
    HiBookOpen,
    HiAdjustmentsHorizontal,
    HiArrowRightOnRectangle,
} from "react-icons/hi2";

export const list1 = [
    {
        name: "صفحه اصلی",
        icon: <HiHome size={25} />,
        isActive: true,
    },
    {
        name: "پروفایل",
        icon: <HiUser size={25} />,
        isActive: false,
    },
    {
        name: "تقویم",
        icon: <HiCalendar size={25} />,
        isActive: false,
    },
    {
        name: "درس ها",
        icon: <HiBookOpen size={25} />,
        isActive: false,
    },
];

export const list2 = [
    {
        name: "تنظیمات",
        icon: <HiAdjustmentsHorizontal size={25} />,
        isActive: false,
    },
    {
        name: "خروج",
        icon: <HiArrowRightOnRectangle size={25} />,
        isActive: false,
    },
];
