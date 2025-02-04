// 定义类型参数 nav

export interface NavItem {
    text?: string;
    link?: string;
    items?: NavItem[]; // 子菜单
    activeClass?: string;
    activeMatch?: string;
}

/**
 *  菜单项数据类型
 */
export interface SidebarItem {
    text: string | number | ((...args: any[]) => string);
    link?: string | { customProp: string };
    items?: SidebarItem[];
    collapsed?: boolean;
}

export interface SidebarConfig {
    [path: string]: SidebarItem[] | { customKey: SidebarItem[] };
}


export interface ZommeOptions {
    zIndex?: number;
    background?: string;
    container?: HTMLElement; // 修改为HTMLElement类型
}



